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
    "3Dx4TespUQE8zuuUUSD4fvsHsy3cAwmp1C4BgayG114NXmK7NxTgByjBHPoQUwQx3driLCCBXLcsYPGcJwKf1Xrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59AbZSsDAsapqQnuDwYTcUUzgHveYUhJRGTBuXc7grUumB2qTBsjRJwyQ8B7bzw83m4BLZxdZzYBY3gZx5h4NTqw",
  "key1": "2khg8oL8QayZPjdRKVp4z3ZVyWE34jH4PNTw59ZMqebMvZDVoubTuAkxUEwBuNt9yvVEAnayHfcYa7QbncDWcftP",
  "key2": "4zYqyVT5SMzbXXMJf4i3PPiFoRaYNUrfR9icnuUE8vK2JojKRiBZXV1rcee7igMQGFCk8M2RCZJLyRSRRqiUrnHL",
  "key3": "cqnePfgqc5iMppRS1N97X3eA6zhsmjBy8AEbmk5gxuhzn9r2swtxuPS1xVcp8rd21Pmc4oAiJYvNE1CsdJkHzTz",
  "key4": "4whdaQDsZT86oAsbv8Sng7CPS6aX4BA5nagWaeYR3xe2PFzbwXERsmK3Fm1f7qsTSfyBPv781Y4TZhVD6A7pCA7z",
  "key5": "4gAb435L6GPyFbRU6GrYRvPWtHBeCkc7Y29x8bngkkp8ZHNPGjnvtrx657YJBP4UMmfeT7PY5kbwEGtDgCBYTrRG",
  "key6": "2cS84Rh697QZv9NUu2gP7JFCrE8rVffQokx7eALUEbBM2PfWmZJD1DC8otLSUWhM3JiohTPmdCBEZyXnesN47FrA",
  "key7": "oUWDtEVq2553D9tTeAAifwv7PQ9yTkWRSt8JfZ5TmmS4CSokm4CMtQ4L897FuxJNtXWYEajJqYt9iFTRKAkT8zJ",
  "key8": "5rsZb94Q1EBWGx8JqqGYiN8KyhCJY8SrMfdz8oPLLkvbp5yyB9tNs3RY4CmxiP7cGhpKJQWUPC7unbZVfTxiBNcH",
  "key9": "5umfJVkG88ai2CUsC3wYvEUK4qfbmBZjwqnkuaguiWA4PQ6eVGwPP57bWt6VcLUhXG5joCqagsVTkx16UmToSdGN",
  "key10": "39SuTsBXmU733J2Mu42cLBP6y5e9SoFVMGuCppMysivqzNwoqF8QbwJzfV6LsPQZqEA6y6SmkZnP84W66zQRU6RG",
  "key11": "4DNGsrDBryChpB5Q4RTxQHtnVmW3w4mK6afgCpssoHHnrXANq7F28YjhXUsmUW5PwyZFfkT964pnRQgFPSdGzgSX",
  "key12": "2U6tGotjkFUnQnePePvp7wkJ1cdaUGi4KXsSEgQKRnxB8FesBdwzfUaG9UifzKpucihZus5SGcDL7XhfhC8ojbL9",
  "key13": "3AnKRNjbk9NYQvV7jLjzBxaveYeH8RLUh7zXhvMQDtLpUB19yL7dhPNta1vyJ6uvNvGKKtTdUSHpsukkoWeRbf3E",
  "key14": "3nnCcUNoC2uRYvCF1X9q2zP4Hq4R3JzF3mtv6DsPm2b2zAv4LC1J35RwRPhU54EDC1c1Sy4m5hAdyuj29eCVCcxx",
  "key15": "5UGy29UuHqj9njwbVdshS9EoJZQMnw2tgjPDW1NbDqTArNmujVFfMzkrLSEtZdp9yphCqmjyNV5XYXkroyaG17n4",
  "key16": "4xwdCfkQvz2KxMbyuw9F7rJ4C255sfCqfJyyvFAZqacQsgjUNKfp5nu9bDZQcbR9K5w5YCUWxuRATVM5WouAEtTw",
  "key17": "4sXmzq16qjHVhB6Ek8VN4mPWU47rds7Ri1SAb5dagerhY4GVjSf9UwRKkEp7ANRGzJVw67QpBqz1xzmK4Epq9aJq",
  "key18": "JyGodCrUR6MxcCJ1m63KfjfPn8ZA5xBGQkbNHeFpgmKuVkopFfJ8DuoyV9HUfmwJYtusoj1B5EuZhE1vftDASec",
  "key19": "4Gve1RYy3z9o98Rk4kSL9511APoicSvwjuzLf47z9zoXRqbDLw3i1ncYXtma97zseuVKwgCTAxsnaAkAFHf6Vfjh",
  "key20": "5Ci8jRgANdVyhFQYUqt2ibXTHAEFVegatZkxFBsRn9hH5rrj2YMcmYewFRE3SS9ARKX7pEbuYDBk5QwEP88GEcaU",
  "key21": "4m1wNb5pJh5WF48yKHf768SCHKfDGcPUrQQP8PUGkyWpjk6tmBq8iPXGNDroBudpgK8gtZ7PbdL9W5yatuSV33GL",
  "key22": "u4gmCJL7XY7wX6puQwJs4aB6ShZSFXLMurQTEJkg84oGHvZZYY9DQxnJa6BFNKRcqt2ekCYZsCjvkganjNszqpf",
  "key23": "4kahonUWd1oZadD6dQ9pnDvnYNzmCWRrcLVj2sNA7X8JErZJcJEwRQKdWwMyEpbLPuq57M7jf4tMq1EtbmL9Fa5m",
  "key24": "iiVERtoz3EDYACnphyKjAmD5Vts34x188cHaFMPCs3Fs5mYkWQW8mywzjSCFCbz6zzY5eEKo9Q5f2F7cCn3TrBt",
  "key25": "2dkBr6cGMAtCbHSRSzZACx3vZFocecnKDCCKgtRWwb98mvu7WQU34RGneENvfyqsQvRNzJhSVNeiFi2uyavHk8Ph",
  "key26": "5VjqsKQZpGhUr6SjgpUciQMNGV4cAjrHDozQDq1mHzW4Q6hnVdL8F4on9pLeJswVBKWTy3rZRzU1KF89WJAprKCR",
  "key27": "3amHka3N191hEmPjZDLX3me1UH14ohCbk5UUPkenpnRJqsDDa9k7CmHeq9yK8f6ZtgXyLjw1oMSFN7tmY28LCX9d"
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
