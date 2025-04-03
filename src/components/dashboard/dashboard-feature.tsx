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
    "5ekbbtfk8XfHuprtGfYiDpKc6hHyS95FEFuzjDbNG7ADvRMPi2xbtnSbmmtowK5u6m2gMQzaYdQmxsPBi9gowMiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ody6uEPx9Bh3VgtexxYTmvEKediVbvYoRkTvnvb6TvDMguJQWgGwCRbeqQWU4K3Fr1dLZMgoXyMdCJca5wXT8Bg",
  "key1": "4pEGD64X4sBgmo3FJeqCe5ePKkU2vCNMut8RrHgRxbM8oxWhdWmBHNd7jKs2aNbi367wH1kXewdrEFtXgRa5spin",
  "key2": "5522r5n2HKbDKFSxktzkwxdXh6JMfQuUxbUbuvkZ2rR3TioNJbVvo6LikSEHrRjmpNqwaCD4codBdLo8jYTCwXRk",
  "key3": "2QdtAdzEdHyNq5q2syhFqqrbs7wNQEmbkgJ8qjiYXvq8tEWXUYGTHL5BVeNDL4eLxF8WXDMiJeduZ2cjHRpCnVQJ",
  "key4": "3bKXJLt2hWcDGdenGzrAhLtvjcKYiT2tp4KYoBUDae9KgXo8dXdoDx8HaN3N43jCjRR56o1SuBtGWfiUwTBcdVMq",
  "key5": "3JSBdwTzovcX58XHqhrzZgp3wk3iq2R7zYeyq6B2HAfeLzBTYU2CUuBbDJNGAcmugQV5MeMNPGkuReA7sZhEZSmm",
  "key6": "dKJYnPUP1dVTkUNPWzyM1MeZxLeTvUTSMRdSQ7bj1JCiZeSATmyVRZmv5d65UAJ6zgWirscNCHYGdFQ9HLKHDgj",
  "key7": "64xLSXwzXR4RmjyTnd3zvrrJMw4xFxs8rkTXeMQqWRQvxzxaqkTsLvE8YeYe87ixbrxxVDKFSxqJWBWs6d4r3NL9",
  "key8": "NpCTExcSiSrJU4kwSB23SWY2fasBMwDH7sbekh2mHJ21477jDgPnaZqSpRNiUbFcjG1SoxywLYiYzVQ87aVfSxK",
  "key9": "4M2hjzEmvLr6Y2FrUAQQkEfMXfrymAbv91gxV3UznzAByaxwLQknGJDwyz8FWLodcX7cLixc2USjw5DcVonmsuFk",
  "key10": "5tSgAhRhj6qbmN9bDLUxeoepEW2E7w8vL4PB6zqZzeZ1abxc5kW5mW6oAna6v9pzryQViDYPXivYgecM2yhYo574",
  "key11": "5doTyWjh4DHSedrFWt5qwwxCJvfxv6fGXMzVudyiESj5bDH563gab1vkZrEZqhAb6uN9QxmZzELtVNGp2mhZk5Pj",
  "key12": "5BvY7fsiE6A1tkUKoLc8qYuS2pUUkxMyDW38HHusFH9n9BraRBHbsgaX6cMr9DGWS1bCCk2DdczPL1r5hw8j9tPu",
  "key13": "2et4LditTrqp4AaJWbrzW8CBvVBy5ocSebCesQ9RZgduJKwYh6KmNm6my5kcP6UBRVmySxDpLV1aL94rjzNqTFLT",
  "key14": "356Vcji6F2RMGxgGqmN6rFaR1SVf5JXCopJ8PfKisvV3gcCpYm1vVRR2vebzbs7re5f5cGBJpfqbykw5HyJhz4Jn",
  "key15": "67JQCY2sSM8F9QbYh9wmRTPzPji9HLJFdob9wYXvkenm2rqxJ5LBDpnwDWToZatsT5yNY9X9xfkjfGYPbDt5VhvV",
  "key16": "T4QgDRBz1JbrHKDTPdccgxAhUCS4fcZJMc72CPnmzAMiu8yNbJPktumQbPjGAQjtobbBYa6yLnbaSTbyDmGz47K",
  "key17": "4nDziJnzZzF51kPFrRfWpacCMWcDiCgTGNWATKpQPnGDFfELmvLj8N6AKvxVxUkixCBcSQFN56Lf9hRGgnkmN1Fk",
  "key18": "45UbDmhRgfzza71rCxF1oqiNyomTESXULBeS4GPD8FsSdgv7pHZsVRec2YN9hgjqgE7TLCjpvJ1TDX8HAaTVcFDp",
  "key19": "3yARnspSJQUFuGBivyP4KG6TLVKmVxXP54qXTCbYPuZxMR5at6PPQXGdXWafnHmHaZcMpnGuAWVXu8oWfCCV4ftp",
  "key20": "BiWExbaupJdsaRi9d4WjJcMuf9Un33Zn7zN6tz3raDVotgu6rchtjg6NxLvUu7BvhFfm6CN88b8z33z3z5c58JL",
  "key21": "2cdqkxwXD8BaopJdByUPNYFkgq7ga4ocvRMWcQuHEtNpaBxK6QtobVuKkzphCgWSuQAgWvCyBtLwmjsZKjpepkzL",
  "key22": "3u6xzdKkucMUGNZPkfHBVyFBGpjE4sZ98WDoGV5AaxoF3k7YfXGfEcL32zW5UqgYRXaSSC7osnjrHfVDWQDNoTnF",
  "key23": "5CEi4ujYCD6UWpUPb63aZH1uP7LRbV1ng62cdczQP9u3FmEXmjMBB61aXhFToV4Dhw54NjC1iqp18NoPj7Ajtt5T",
  "key24": "5TpkDGD4AVSsB42NHMujuSy1jMXpejwYQRpkdTtiGDXBf7xKRXCUdrJ4bgSVAYaCkBib2Eo7Vvu7VfFzfKYVcdwN",
  "key25": "Q1jEpKVi33enAFHmh14i78tgSWbSDoFZdHZRCBFv4AuiR36UAFGsSxNr7dfNSuubM2HXnG33MquxVxgJWZAcfGs"
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
