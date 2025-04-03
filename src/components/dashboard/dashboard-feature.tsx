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
    "3xbVK9zuSD6bxz6XySPHcLP2EohAJqbSo929oSuPjfBorEQ6cJSFZ7k6NywUDwWSknR4TLywizXGAXwZERsrPFAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iikNj5iLHCjWtJcKUzXH9evYTRJGH5AFZGjbiBxQohsNhEZJBU7QL1Hen3tiemUoUn2yFkvekHMA331Bw56CE5c",
  "key1": "2rpyjGY9WQx9jjvx81sqzNGhXesYFcEiMcTaY7d8hvTBDRteqSd2NeTrUWF29Z9bZfhNcdKDBN2Q8EE6krMR5pbZ",
  "key2": "4nrTrwnS1rMv3CgdVq44BTSZq33BaeyGAkPm1wgDdmaFPv3aLL1JwxVaNswbtZcJGimYiYaVtASaCArHHMVPFQZH",
  "key3": "3a3gpQ2zqgd74Rav8JV1DTFi5LfoLLf3W87sJnjhrhdb9rCHkgYtvdGdCTPKTiPCrURK222X5wZMPYEr5fy1Uyxp",
  "key4": "3yXJdc41Pr9iGm4PEL1UDmasCe4GrcKDBdUXD9rqDSKZiwFDqv2sw76LQb3uUcuggZc5mqYVqVQQn2m8VqkmWBhr",
  "key5": "38MWBrBwQ5KruoUV1m875e4UyWsN3mK8ZkRLYEuT2ERGiDFLKjgcZkJ8WxRyt7uLP2cq3RtEz4Y4nVGuHrMcAGRN",
  "key6": "2MECnU4WGjW1q4w5k5QLAc8pFx1ePArKFa8SgUDGmF8KV7J7gKgiz175m1X3CJyMFKcB7WrDbmNUE92Mits9YfuJ",
  "key7": "3Ueuv8aZNSPoHeYE9hFzKvfMPW6BZu5W27iaTnnNfCg373ttvidm19a8TKbKYwXHrHF7HAzruqmxjDvrCeBH5J6P",
  "key8": "4Tej7cJSJm1jw3ETuQAojv7RJ6f9fa2g8DbGLB8xwrDepvGwqEeA6c35s9kC6UEQfMvRwL1TFLx9tUdnNxdw3u4L",
  "key9": "23rHJYuDGKAvqPZXWjEEEScSj8xPEPhbwVtAtQo6wMQYgJrzFK5PexKby4Kmkquab9UTFWYPynY52RrTAbnjvxf6",
  "key10": "3fave4jg8uayXxtdgFNt5a7dEQjFxg8JiQ23Mw15imC5scvTCXNcW7cPpCeSk3e2fSresLkfBoMscWKMFNJqSFvS",
  "key11": "8siRNiswz8RRTS9GgnHqbULPNoWuhzz7rTQ4in6jUqoYYt49gu7qwSA4KsfFdoXfW2BgKm5kQHHfLyiE7CAbBcR",
  "key12": "33j7QtkKwzPKJxpGoudp6YBqHPddADr2eC32ttWDjFR83hXHETCXdwBvss1B3Hst7SCDDgFXrswZgzKH53Nh5DXz",
  "key13": "3GHx7x3Tv8iLV3Fkv66V4ejaVmqdA9KMV7iYU7VtKN1pPUk6yHHzhjDULQq1ZwxiHVX5MnXQLeVuN4WpxRpArtmN",
  "key14": "2ervCC6oQW9kzom7CUqrgVJ24v1kz1ENmgFcnqeHV231Wk3o8KMGSoSNkYXmFkJvykBCA5A7J49zvieSR9tRH6q6",
  "key15": "2ajLeKFrBTWUim8mb3V6rYVvZxgtGWBM77Tht6ALDvhroM8wCgNWMKDvSes44KBZbwG2DSm7ttxNTmMnKvQtNQNi",
  "key16": "3xaaZ5yautJ3sDuZKxf6jTkE3ovQmRwZSSg9DvzvRnSY2BQCXDBFBBzRwg2QVqHbhycoRhvqkeMCuGQeyJ6PinxT",
  "key17": "5MQ1Tmmo1kA3D4QWaDAsetJVC2ihBxBBZbs9qswWW7cTuGkZqKXTwvRwYuGkQuPDmDps8LHyRecf8hcRLhMqsAqC",
  "key18": "5aAuDUvdUHquyzsSyGzQqzbaKyyYWFXXbo1icV5Ux7EUSysoxAi1akdaghy8GyVCFuAaEV5Q79QVVqpaB4BpnxvN",
  "key19": "2VhDnVAxJb4acNzD9tbM1DruRttqDkGSZSJ4ME7RHtUArMAu7Mo7WSnaPx2qbG87jS6ArMQ5tVxgj5qDcvs8WtXM",
  "key20": "4SfQhtmgYdTmh8FHqymxK4NhzrWzzM7ivBr82CHQX8K4H7k2R4AdRhRVb3Gw3ZrJ7vboDc3XnRswrNjatxFuPyPY",
  "key21": "4zMf8tbXkBSGMHHLGKaoP9eBkJkABb9e5EMDjGHeTptxz7qKWhZ7ztvEMo1igsMqTg3f9jLxQzzBCDQwye2x5Ve8",
  "key22": "3f4bA9z3eL69dJ6J51vETPkJUuFGddRKVKVB5rzFC6oWJ2SwFDw2ZFc64ww9Xr6Le5ezQuyQrGRh3q3W7YPpoQ9J",
  "key23": "3JkwxpA89rJTidQhzqr4DcAigi7KorbvLoerjUifDTKZJTCnHT6MZ8rHLaqEdxUVyBaBNXS8A86zvRKhK9tCBvch",
  "key24": "HHwhQWFr49FDcsTNT2fM8hribMogMntxMDmhb1CdPyLZ2ZE5JGbwbhCGa618r9wWofVtkTZd4wPfTp5iyTuAVW2",
  "key25": "HVXnzZ3jiNr8zy3x6zxkMaNfNsdL1An3LJAeuSRXvpfob9JYryri3JyhBUStKR73V9BfFPHYFJYGqzxJUJ2Hjd8"
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
