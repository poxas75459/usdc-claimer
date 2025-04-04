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
    "5vfp2JRW762WouBsLDPnKRgKNMU8vjLr33tip1pWQYDj1C6burqTrtj2YbHw8Squ79RkcLZJ7RSBWSN6vA9kLtuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RYN2N4FoD2pxe5iyNqzT1iBqkYaSgHCrsPdBnbCvVjdEqQeSY2U1Q5sfYDQFECLkGJiAy3m3pHbi27PV49A9UMM",
  "key1": "3QSQJS2CjTSpJPvJVVDoaLjGEbfA6DbTTo7pgDHLwK6YAgiAoGkZBJjkxTxuK4vHXBjk8yVM4HTY73FEQ1ArSVrg",
  "key2": "4ef2kD6FmqfAfX2NT2wgCTwPERNE9YPVRbkdfHYek5J4HUnQEeZpoHxQvYZFygiY8NXUgX7Bofz5EsPL9uHSprTP",
  "key3": "52q2yBroFTep1KEeA9GwY68anCCawZzcWCBXF2t3iUCSP8shJC8ETwrnctUEdM34LZdZP2jhraWem7x8NEfR6ZWd",
  "key4": "2vSFU5umCTNX87FST8R6u2c4X3Cx95No9XHyLbgjRN7737rZk1bvF6ZQUzDRKKR1Cnz6VMcrRspRZM6Ae7vPvwxM",
  "key5": "5sTZfNvSNgfoQKbR55KuvMxdXfJfzDsSX3pat5rheTT5bkRBsehzYZcTQbTgUvAYmhWmNP32B5jxLgGZQF8FEJ7H",
  "key6": "2wH7XhQaYUKFxFyD8GF5JzvNs8T4y3WY7KLdN4f6b5oc9hEtf8k1Ef1YT7XHvSghaguYzHEUPkMgwxQpaaR1acfZ",
  "key7": "5LqifYUzAnnbrTMDtZSSsYwcFsekERkF8KkVnMSYS9Fn4raNNUdwSxB5sSVZQJHEAXFaTA27cqLrGdJXPuEZ2QBh",
  "key8": "21AaG4BZAdG5FqinSnY4XwQSeKAj7rnTeS4h1Jyu87jAsJPMuk5Rfbmyto3f1avcVsA7nPgwLWnhCSobGBfgA2VH",
  "key9": "5ACQx3Hzhk7LV5S8Pn4Lr9CCBDKnoLACJj5yPyhZp14CkTKScpxNSB8kjwXgS15EDYAwhuvp3FR8siaVV8TYag3P",
  "key10": "4g33wCk2EUpc7cfmPR7ppbFTDi2vdzw5wMfSm16dBpFteEgQp5T1zMcHWQdE3wgNrUin7EeN1nNukJGJasNKT99u",
  "key11": "3criaPeG3kND8cBoAtdhrDkGNDGmrLD8TPvJ8eF83oDYCK7BSPvvZN5yVHmbn6bZKd8LR5aZvGkLL4siaQTViiiB",
  "key12": "63TnKRaNSE9DVYGcBxRKjbJNmUgzjMc1XQebukpV2hoFHhd4d9tR9Pf1cq8NcAfGT87KvnMx1np3FBmD9urWnnMM",
  "key13": "4Q4fof27cm8mcuhj4vzzjG7sS7pEeeqR93NLKXB2KrGi9LrPF52ZeXL1wBVLftCfQy2XXDPn2G75Be6qfHTnnSnU",
  "key14": "5gSmPiC4u51D9Khxc1co32AJRxhqg8FEiwvVJKhyZtuhBnxRkL8ZkeVyKV3Mv5nCV7GGTyUi8YhNFGjeiiX9yfG9",
  "key15": "5y6aehi5b6dvVmW1rpDziiVpMd4UMReUkr4rFv544FhJqHM9iWPDetVHmwJfsRpAB5NS27m8MkSvkdggraABdbDw",
  "key16": "43SypPMnYwmBVFjV5x5tb74uYKrTN5m24Nwft5ieHhmWEPcUTNAyTUy3QLwDXpqcsLEKgn2iELpf2oV3pdiB7scW",
  "key17": "4iQ5jvFhMsakDMRPBcUwNjAEjndA7A1AHFSUALqEfFRtkHduSEdHpw1PQ4UbHYhhYHHSu5his9CHYPp37nPdS1q8",
  "key18": "4ZmEK1UZMuTZ4tQnrBK26Ae5F6Mjve6F5sRokteQTV8AARdAhs3QF9EgfgLFf2KSn845Bv56XaFYzdB52FmjmXHr",
  "key19": "2fhTHKZPanzb7UoifEyQCHfirtfgZqUJqpNfifPg2zXzzpbTHgV3Toyi2B8A1aKd2zLGJ5T5MSgMG7XwjdNuq34i",
  "key20": "3ZzWja8bE6nyJsS7RFpayvvo3GfMa9drg8Pz7KeHjfuoDJVXXC5b6cYWhCzFcSVb9SdmQNiGuZda5Eitv7aAzbkX",
  "key21": "3Tw7npv2ZETnPreZt5fq2KcTejEZnaG5H8bTicqyF97gjun9V9H9FQ2Nby8ACRm2Bv2UgTVA6ffVBWLJqmGKzeJW",
  "key22": "3isSdttiAavr5tpgnuZMaMD7oWcvVvrcTAiww7teh8tC12fqK5Gv121gVNe85nCCnKL8zjUPLagCyZdnBRgvkMXr",
  "key23": "2npzxyg8r2MK3Qez24m77ZVTefhAkbyya9nyM5afGwNiq2B4q64wfnhcTTnnDNcixhnmeixSKMDYGjnRYozsTjEz",
  "key24": "3PAKcpMb2oB5w9cbLBE6LQ4UUQ5Kq1sCjPz3MqRvkoqQyTZty77m7jm8qwtvZuoYThhD7jiBeGMAj8vdRSUNit2c",
  "key25": "82fJbnAweEujRTM7SZCMpFsQVg9jgR7V2aMm3NVt3kvm2VVzkewPN2QTDRu5K75NAFMfEJxTaLDRdLM7AMDmibc"
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
