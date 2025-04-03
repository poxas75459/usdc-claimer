/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3KrJewjnJLz7Wdp4VBCesweqwiiWDU7Z5UUbCp1Qc4disJV27GsW762UZjqUY1rwtbiNh7t35oxXH2x6932X1K5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S8eb9DwAQkHujevbamkj4TLwebDn8CnsQtjNCBHRQCECNUsUMBBimhBwnu6qXW2FP7CtRxNYZRSSJSVEsfrpmip",
  "key1": "3UZMghSV3URwTQKfnXRSq9KwNxSNAoU8HTotHVRoHHGNNYX3msFCm35n9XvuaN9iH6CwgXJ2fzqSPFJcWEe12zrY",
  "key2": "5XCDHhoigUf1fHWGFS2GUZr4U4iqwoWQw6S2s7Ledi9rBDtbAb1Jyv6g9CU9xJKXuiiDgFoFgf5wVysu4uAuivry",
  "key3": "3vdDGkEYYS6YqMFVXqJNpSHmXyAv8Cx9BmoQRZ2dhwQ9GtHFJSamYUBhw8EW8eCjAqSw6tzMt4XYP5N2UohnqWty",
  "key4": "2oyQhuqWcPULrYkB136V3vCtV4wcZ3mPeHo6PirRYrQWpGWv2TCx1GXdKnmVtS4p9bTi1wso4gGFmbzd87zk2MW5",
  "key5": "5SmZXeWs21X6NrKpLnwiE7pzU96MkQMBsbDPqosZpXA21VhodLRS12h4bE1pmBcUUfwkjEbR7Mu7BEMwR9cgK3i4",
  "key6": "w9pdHBCV6QwY7CBqArqJbJ2aT34uKZEZCyVMgG9x83Y42YdhNQLG7meNZbsxcMf5AqBfgAKYejXX3vqfJVswE2h",
  "key7": "5ghpepTeF72qYM6xRMvjZ5WuEPZLWsSDGfhdhdq5U1MdQhbnqomt5ThqqLnh1WCn2zLQPNtyox9DAh95Rk1uRsMz",
  "key8": "2CkLA3nahTXuvSHikAAqKwFrxzm9Z35XLvVtbMmY511jA2kUQD9u9fZGFfCvUE5MwMYCsLWeR8KKF7Db43E9sH91",
  "key9": "2toLCMv9DVHtzVA9Mumrig9S5sDfxpKcjKs7af37k1Uavaz61zKbktanvUJ4ZFhL6con6G1LrtMvfmRvHHj2HTS",
  "key10": "5WZMNNxBezi4YUK6qM2tL4zJFhh46Q8R3HYnzv7J6cJML5auTbyBjsMRYUBNm65W4d7T6P4GpJs6qCe3sAJhmTyk",
  "key11": "3rjpzSDm2L1js6XNuEaQ69geGSJvC9zXZU3ThpbPULChADMdCqrxEmjWocQLznZXZWYNSxom3UxmbJLsJumVT9x4",
  "key12": "5fTuA3GMT7XUoh1Pg5Pkxq43uAbhtpDJGxAsy2wPQ8hNaFPWz2VDCJTDgCwyT1QcZcLEyBwYUnRJrMsBJwASH7L1",
  "key13": "4iZA6d7rpZBbzdi1DravnPRjvo4g3M7GqUENt4v9pDoU2LWCE4xNcN3ZS88ezxAE8ds8u6Bh59w8WzSXCNGnD8sR",
  "key14": "2fMMFgfTtgSWN3Xea5fkHpuqRLMBuX7kK1tU53JNcQTKyeFNqm7rmAm7Vq98xGYGeo78aHeu2hqNfYpcT3WqeLnE",
  "key15": "3ebk4PvgtRqkWs9FAJssiD98KBaWabyGBKJXTHdZBXEjxQ9B4tEwuvJ9HkAoRaKL8pi7uicTyvTHtbc6yj5YTNqc",
  "key16": "5AnN6XEd6bdJbnyavPLQjhc85ZAcpSopTKwLzc3FKTQdzdx3fx57difGQsPzF2ih4tgMEXQjbg5LSoSPrn3jAGYx",
  "key17": "5DDNJeLqtt6DenbJMKeBeY8sv7KDdP5biXHF5TTLPjj9aeJUdFn3KhQD9HBcBcYFDshSxsz7fZdc4GViya2toymM",
  "key18": "5XS1drsVQ3RSmVQJTSY7STZUjaxWzyqgwpiUGfjs1XTnXnZXkzfCUMxvEtrbrNtZJ4jQuM8PtPs3paiGhwaeaZDr",
  "key19": "3uV6bM1dA4mxYZjTwNx1JE9zRjQQLuX6jHPnoeJnXPTAYHvxRQC7LEyyCS9tX6YFAqtcHJaCBKbjKQC6ip6LKNaw",
  "key20": "3gUvdNkPPbFhipp2twZ6sXpKrn1o5bgnsEuvnh75FjrTiAuaDHju3Au3C1zsEtbvZfVCZtAH2bMBLmNXhzezdtJy",
  "key21": "3qNZAuBjgMXBfiFBaJkgRUapjtk5GnLqDBQChgPgY1cV8wVY824e3N49wYPnepMYLondhbEpXcRNPDnQawuwRzsb",
  "key22": "5UYS3md7cSJqkqpM2m3GT6DFTDvfSqfePQuAJquowTXFWoum2zrG2QLeAu9uJiSKBNkrErbefLHiqDNRQsdpZcQ7",
  "key23": "4yYfbJdSciEt5PjVbaRkq19bCrRhh4vaZYffuBaEg77zgPfykqiRZti58YZKBn8Ns1gBQ9KzHjr2ihFday3quwF9",
  "key24": "5hQFfSRdH4SYgx9kdt9L8Vyf7FU6WmuZ2ZDdf3LAPbxWBCEACrezsMkC3S8EVDb79dLGHD5CZ8gp4EqmyxxvBwLr",
  "key25": "4HWSBXMLa633W1TpEvdkf5tSKThu2uv3JsHdPBvfn4ZWrq4GFQzctL3NqnJQsjJr9b3KnTRGarMfeDMFcxv84uun",
  "key26": "5LM9sfGLgg8Hvy8Ze6QnmWRPLq656fhqmqTePYsJ9kA7NrrArhYhEHgiaMWjaByE5QS7TTirwEqVdJAVULxxgafK",
  "key27": "4oGMkaXy72psKNwAe2Zi2p6vpSvFF5JcaYwicJkp3znAuWXdPH1BSdZJYCwZHxzbtWHJJW5MdVDUY2qV6UQ2TXUD",
  "key28": "SWA3nRqkb5oHTVuuntbCc5LLcNFYFRneMFv8U72Ygsje3PptrCksWgnv8ymH4hVbSaojneQ2n5WZUWtNDJFqBck"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
