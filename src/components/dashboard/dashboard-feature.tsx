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
    "3tTyd89TYG3Qf9mVCs8Dc7Y3TEbEHaeJm26YcpyBZVTGJ6ZERfz6g8oushKvy1Vuh154FeEGMTNBZFU7x5LVfVY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HTZYVhp8bx937BGkbLKmS4YqBZpdAnLmoYPVCot3dpnu9PY9NfRKAzC9CPyasFqvZvjWHNMBAPfLWoCnUSP59Ar",
  "key1": "4Mic1ed36y9n1yh7XXb3ectpRQLPteS37KGQw2vRwwyX2PqZJtvzuYQ835eCF91UDcTcTkixCFZGcVzTcyYewi55",
  "key2": "5F9XZjmh4nBoXNAostxEG4JZvLBfch8q6G4GH6eEUXehZytH5oNHXpYBTHNx8oj5mVzESvh39hqAnccZ9Mmomq5a",
  "key3": "2jX9URdCuBKUgHufjf6RntzVZgbDjwZZhwYQ799k8gKx2YTzAxQNTGU5XfRU6NjLhm7x9JzqCQPndoTmevW2L1jc",
  "key4": "gCMdbyPhD78x7gcgenWWx2GEmpUpT52QLaMDTuF1UGDmHdtpsNCNUF2oRQ5F6Mo5AhgP7RnanAJYTPM1o3WsnRL",
  "key5": "2rp1VPd5YuyVsKPgVAYzfFnzjzhiAx2oXCEwMyyLN7AsXpWJ61REWVcFVhzZFkM3bTXcRoTLya8yuY7Nw91jgccS",
  "key6": "2nNCm2UdV7H3rogZTbbu8o6Pdnge5hYZHtsuzDU8FkBqdrJM2jyUvfAK77jwz7ELVUokRstpWWJzcczCAeTkxnNM",
  "key7": "2WTrBC8wmRqDCpsBS2ti4JzQEDXUGGBWC7b53Q6LkHCvy2Rwo62VR3ufYav1n1dFMhoqMbGBuqZi5NEsmYwt4JdV",
  "key8": "3GCbJvp9MwNtDwWASoSZdzYcYG8b99zSUkTPZZ2FBCdrFzzvfYGdfe3DMYxTS5Pjtnn9rKBVbfwPPA2kcSbSQBer",
  "key9": "5e1yg18YS1Nnr3iWqSBBHr7reSrKLW7Ka3Ffy88SQ2ovndAw1BGuWBa4GFbAcJEvfLhnJ2N6VRCYKvyLZQFpcJWc",
  "key10": "qYRMhZgPXz6AjKCy6LWf5Kpe5bdH6PzFVQtPEwvqKitqKye6dH5GjJakbJKhYxBvcLmHWy4EDYDAJLyd8zBxMcg",
  "key11": "3nVVKZxNkH2VCDNdpDo2RMj51e1DR6bZFJy1wjtU8Q8EHTbm52bMbu5Rf7dd6Wu9iGGRDNmZL5rJPUmaazPDAqSi",
  "key12": "NpeGwvZFB3koZDQcDjikz6ua5c2h4cagxPFJE58s3VeSUdyuirHpFEEQ4Cc7xvCTRbSgpDcUrfxkJ1WFTrXZnA2",
  "key13": "61Hbn5HYmakexkPF1aLFSFJ6WhxNhq6kPTwiPNPUPjfgtFYnNyFhUAdDWgJA7nM4mWGYH16wXPPhHWGokHQTVHr5",
  "key14": "2jiDpk9fakoMQ82GBbUJgDQVwJXiFg1bWExo8DdiQi4kSuZkmaD8wE2mhoy6wFDzaVKvCjfeYDx4v7BFV5TkyXoN",
  "key15": "27BYsadyCnALGQEqgfweVVtEopUGMeBKue61vdFBVgLPjunPTWTaNmrfv19mcBB6HWSdTm6PdYj2grwnrAaRbg7t",
  "key16": "2SJBn3VAXT5bQKofgkHHQiUETxFK3xaLBbirUqPkSMcuLos8p4zxhyQjn8NVG6w3LCsZqbrkm9wFYFVt23VJLsdF",
  "key17": "4PytLQmhvbA9BMC6qsFZCRrp6AwMwgxHcs5MnSwFuSwbFMmt1EzjcqYtEtqjuRedoueYDEmZheoZZfbjTvvZ7mkf",
  "key18": "aNG2tBFHDxc7zt9MX2assWVi8ZHnChwZkbqdE16CPcHDkpejuyQnZh87Cju7sUxK6vY2fXscRRTGUnA9A787t57",
  "key19": "5QMEBUeVrKpBhusqaTngA2FKEDrCDeHfFEfRiUHGM4utLJKHWabKycXdSxzPJiV1Cw5XzSvY8K7H1CE4waRxT5G5",
  "key20": "36cr2VNYCrC5kZLYo1tazfsTaqSTXuo4BKWciCDZ3jD9prpKS9hbnkumzp1ipkuRkYTu8Dichdyfe33tW7zeB8ZF",
  "key21": "4Bfq2YhnJbZF5QbErkFusQeGYUnjgzYuQxB2qd9yUTkuaehJpZrrqibAVKjsWbz44UfnXsiXnDVXzokkqdKrXPK3",
  "key22": "2W7g6N1kXrauamTwfFbc3E13o9t7ZSjNH3NLtmEiSg56qfHSZfBrhvWmkRKxabmB7ooe3MdKZcVrXNKVDJAQtz8y",
  "key23": "5giDEbVtW5ATohZC56WrwSi3GpT4WpfjWTw7yBxBAch6xrC6QXeqv2YRxZ9mdk31MFTd3gm9bGEjAheb7EyjMviw",
  "key24": "2Pwf3jTaCjSgBm9Tn7RkHpxZtdDguSDm7UA82hdT2ifJHaZCv53EjMLiCmea86Srtp3VVk3GUxK1MMqHmrVrrzyb",
  "key25": "5y7Cp2ff7QtsgJWJPCdTLsJ9XKXXRuAuPDPNXbdJGgapMV283VrPgU9mtuHSt3ZCQoWqgRmBb83esCsC7Z8Dhwyv",
  "key26": "vDd3zD3TEJVYHjSsmWuneUaAQgdyxwq593rMWj29yJPa1KoxLkUA2AaoNGfpqpKyscbPGiV6LW6gBcdbPAYMK4b"
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
