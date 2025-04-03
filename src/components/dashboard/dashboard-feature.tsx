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
    "3LMXfKmBk2oauoaqm6sKABqgrGePwbjZSstBcgpVJVQaksXyujCaeFJTYvd2wLn49jAkwh2HBoo4fdi7V8swBcoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FpWiKoWd8gdHbKomJoymB4vNkWwynexScuVR5vyQJ8u368KhTrEDP1BLgjo3fBa5fBtyyadEr5LLnYnAiwq1KGZ",
  "key1": "85yHb6Cx5VUbBVQvd2CJgZ7KdUE4zP4KtCUmPmnguU8ect8cenFtgkLgvtnVWUhWVxjXYmkAWyCC9USmBeUW1pk",
  "key2": "2Wge8JK1GvBRfWAReYHueLnrXu8Um3EkFLpx8r3mG4d1ViBPs1F3322hTqsrhCmmAwkT2AwS844k2PkHh2A6SDuP",
  "key3": "2UqfVr9EMEpvzK3GrrHAvzpjaCW1rS9VXgDyJ4SHzKEf7WW4younuRzDtEuYcG4K3qGF9agu36fPRzP8QgDs1AFw",
  "key4": "2YhcC1Qiqah1DDYvi9t9YYefkhgUXBHDxFhNmjTLnoNBM3xRH8U1MaH8Znr3RsEcLayUg7KTWkgZeCdqvcZc5Rwx",
  "key5": "4h9kH5gmKoa3wNKougWrvn6oU1VuHMPSNPP6rxEixJDiLtZe9tnFBZEgRt2zaXMRcKWQcUw9yZRS5kgqV5YEqJ5u",
  "key6": "5DoWfm7HUwhhCoYEipq4rxEqnwVVTa3mXF7MXrdGroUf2CKBC1jDiVK2yeHMaKxa8ovH2GRroPymFMgkDPZMdjTH",
  "key7": "2HhYxeA8dLYKBxK1h1orwK18CawFsQHuoCwcjJ4KL65vxgdKGCUzjQiQrkBNEBkWypFNXHj2AqgNeSNJqPGKb2xu",
  "key8": "3sS2giMcMsxbH2WUBSPixP4F8Hu2F6qtQJh2YHiCbNCkQAfygBoBmkSBfG6qV32E1SnU2xaJz7dAGcAEMd5v6mHJ",
  "key9": "36mB8coJtGTadUkytgQJxC52oVDB325cXynacviwD4r11TnY3oDkU1fHyjGRVCPFwZkCwXJau7JfVxFDt5Ld7qRo",
  "key10": "5kGh9Z99ACBgUUhM5rpfSxr4GF9AzmWbRUUS81ToPb7ZYzNVs8AssV3TLRW6FqFFNDXGCkLKvFVH3UF1ZXcWAQS2",
  "key11": "3hDGByYg1tfqGjXrfmqZCX7YXZCxyf6LuR2BLpmFuxc62yKY2xo4vfTGGiSR1fDEdmJLk9KikMooLTU5vQiPAwyU",
  "key12": "5CZvUj7SFNWJNHgLSZRHRPooKzKRN4LvArEvvy3EG8TH1nkRp2aPmkY8pb3YPDP4VdjAGM6gTkYCdbGcneZXpWa",
  "key13": "4dutq2oTXrBsSmdeGX3fYjbWdj82VPcCFqWBMM7XWYh4ZjboX4ZSgBULdGatABthJkPKq5Q82yuGZpCGWSDsfbsP",
  "key14": "24SdAjcmVYjGvD6brdKytxMjFakfEVr9MLMM29oWAQfuxvNuNVonDoMoioBSXNna3TeHHePVf7RZtLjJ1Y91cbWB",
  "key15": "2qdUmkyQjuCk76nJb7K8Qn28a5VCsdS5JL9BYYZqGwMRpJxnFL9Mx7GbSRy84Tvw3UppsL9c3H5SyDSnbXVwx49e",
  "key16": "2WkdcA9u6viGvipobDh8eUwZTR1g9q289hKhX1PuizHH3b5Q7c3fZm7gMA1k2qSSLDc8KkcN7qsKboW7dFC6RtaT",
  "key17": "4xTavnjr7XmSY9Js5Z8mrM3XXjZ4kPjHwyVGXG6eKMYUpikb3ZvDNL7YNqo1GUtYwX69KBPfCwfSqrrSG7eMYkpV",
  "key18": "3dFCYitQ1stXpvhuSHVc7Y9cib7VyM45H9moc82Wgv4DcZZ33Nff6vxaZfy8UrLaBnra2SV7WWoi94FqDUUTCJeu",
  "key19": "5datFWquoosptHQZ3jTSbReRhVtSRyr8qe7rJoGrXqUGvbw4fK5qoRfibUX95xCfEp1SwhNVBXkrG7LjBY4HHfDS",
  "key20": "4mS5EFFbcyyV4WxEVXHuPtbqJFtyxyV479FyGqruhaRWN44Mka3vMX1GzeVSU2L4Y3cECCuj54pYzQ6FSnuroH9N",
  "key21": "5eW73svoz1frCRCHNMvaroMLwfbaSVXU6R6tRXVoGu4KUVh6XsW393ySqGpDzLaGnhJpZ4NexMpVmeNPJwshCj3J",
  "key22": "45FxV9x8aS6nZCHEbk1zHGXTq6Qu9AFXDe9vX7YruWdXJyyeFHy5KY2YKt9YXNhJeUsq5dfSLPLqiquZmRowdocq",
  "key23": "4EdmhUxiGo5d7mAXvr9G76EQruV8mJZXSWzJavoAye2Yomw5MyQqRhKbENdxf2EEuSEGZkx2d3iTPjBQbLpYHuxF",
  "key24": "4YogsZJHQ8id1KLTjyWGEFK9UJ9niZWU8hZDraBtbM7mvweeK9ktP1WuksDt4NHPkMjdmqZySXaTAi4eCEuW9sRF",
  "key25": "2xLnNCvzUfm1qeMohfuAWB2wgsNCMwh6KSAyfR5CL9V2hGksoYgVz5KXscNuRMK4ZZ2Fy9B8k3i6UTbxP3F3674N",
  "key26": "3jtsVUF3NqVM4mTK4cC3SB1Hjcj7cir2J8sJy8hwGgoZAFNX14rjmjTUW2BWG1q3Qxr6TeBHXau62GaetGT5enQz",
  "key27": "5hN9wFMkvdJdTjF36wJXEGqDE7iteFXCGNuCnRWXcqjPEU5WA1LVntLrssAHs9qjY4WwXkcEqVdQSACu876KDTVW",
  "key28": "5PDqSBGaTaJ15HZqHTyQV2rg8UWVN5ucb7hycAqDYFWwJKR9JcRkMepcj6uJhiXYzH7AyeNvNFXnsuLw3b9NPgi5",
  "key29": "Sh7Z99M5nDKTHQWzSBz8ihLcxHoTJjzxtacwVjcWDNsHLm6ZCgbFZAH9zEH7CDNZVPvD6NPbvqCYUjtUYoZzRCd",
  "key30": "5s2sMoUdbpika7V8RfHYXpu3gNZ8eMPBEAqzouzGtsNMQ53fJnW6dTqGqMfUxGWP6vWW4GKP6qdtM3nTcUETY8H5",
  "key31": "27aYmznfhrsviG8k9AF3jkGThEbUJ1jzyGz8KZxsgiHntLFPcjDFymvXHSqNVqXRAG2YckMi5yfk3wDxhaxUVQDd",
  "key32": "5M8Q9yEfuinx2ovAwKkYaVrrHNV9wFwDU5MshVCjmi2AhBFHwmpuGwA5cYUGjLBvQv7EmpeYUhyMLFVqpksHC2vy",
  "key33": "3J7SfnCzg2YynDc7qgvv5WY4HeMQyrmmq3gJ4VWbLddxBnFyrKraJkLHNWo5tkoRSyzREe78P94rvLA72Tiuvxtw",
  "key34": "BeitE9dypbw7t4ht782NCZkddwfrgKxZKMMb4ybXK1bQD7RrCUJRkmPzefRcfUmXL2uXV88nXavQuAqfmJENQFm",
  "key35": "55kXs1MjLYpT7ZfhEmSbW2R79b7K8gBhQ8cxy4aWpmJRqaXZKAnUKkA5a1V23YBQoQbhq9rprESUN8qNYBCi7D8Q",
  "key36": "2zgP613VaKLvNovke7mrVfMnUKZAkLCYK6CLBQ6XEXdZ8AZDCa2s4w6xfqjGKK9MMCfyXpfzBAcdXF5bjQ2u9EDP",
  "key37": "45imfAjDb6NsTmnWj2q8jqrnuX1YaLRC95mt7kuqmKN3oaysUXXWJXapuKRNGZth5T6Xm2tCBMUXdFD8vASMjutA",
  "key38": "Jo17bTvjQoDVGLvCH7QLkYBrvHVfhjczCSFpGfvFqajKRem3uj8iKG9WmpZRQ9zA6yM8p67MxCaJxzFsvKFYQGN",
  "key39": "3C5dKzctVzcwBbHUHNHrrU37Y5TvrNV2z67CZ7gNuZjPHFmoGpPpQpmSnRbofzABXSRK4ynpXNLERsPC3fKGp3GP",
  "key40": "2bHRq1QbsbUuyfAhJ7Trm58Jb9TVsS61iN87oRjr4rQPvkNt1USrLnQuE6PhYqwrndZ1Y3krKYBWSB1uwnfQoz4T",
  "key41": "9amwYUArnfoEShrySRZgE9GzhoKQoAjSzmYH1J29BDq5DgcuUjiVTBwDN5mDaMDJ1ypG8Zd7rcxUmQzGLGRZgBK",
  "key42": "5b8QA4KQJVsypgQk8zJpLT9AgksmjZq3JzAWGj75KqCrQgacg4hQ1YLF4pAifj2E3BZnQTyKh4kPJDasAwFHKqgu",
  "key43": "37F73LqBS2VmVtKCc1rEztbaXZqZjcwHK9rTk7DQ7idUVLNvAzDALQhcj73vxL7fjDGoUqkqaLNTfDea9He6o7Zu",
  "key44": "4qFrBmqumtANerpDnWLwYfiFWpCqNPrVrvEasCe41oy4fW1UL5AUaB8HKzcemMQ2kLfSFSp6fdXW2XJ97DPjLkq4",
  "key45": "7neybpXqgmCy4Stp2sXUgTftPMeu8tjqduzhKfPXLeQJQLj1CQbzBwQ7it555JzHPpq2K4jCc2eiZGzZjFH6Ecu"
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
