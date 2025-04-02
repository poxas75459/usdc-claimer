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
    "LgoD3zVsF8Ri1th5fdPwHA6uriTXAn3SsUJAXYwGTS3XRFbCBdUUjVDE8xWaRTVYvtZVum5aKRAcbPP6mpNr71n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NrzqNx7QryL17htJtFiGMLYAuUSiPGbyv6NT7juQWq9TYYBDL6mkSiz3BEXHEA6VfSUTSLEiGBmdu2sgoyFVjvS",
  "key1": "2e564y9Y3xpG9RoQpJUR5ViQhdqhyTv51pDqja4Gec113kdfEmkeYxpdz7uPfnzzx6w8RXxHCJ6EUSgRKGdphmKN",
  "key2": "2fjh9K8g9Z6ne5TtRpADzgqNtg5h6hCVnJF9Ap4VV1NEvmxr518L7NLr8BHgbE66EXciC4UfG1UWVmkjCoXpgpiP",
  "key3": "3rgoi29UqMvAzJXtsdmw4Xon4sksAVu6YR6F8knjZd9R3v1iTshCxCHfrQVTzMDRnHu1uMabjsRWb7WVcEhLzGtv",
  "key4": "5iKC5XQrQguDeUyEfjv6BcPhBhHWxxfxVr8cYJtMnFSDVANvf6QofWeTg7hDfhT5v57J1a4YqAqFZjmTuuAc97Bb",
  "key5": "4kK33GWsYQ8XWaJ258w6M32A5oicVz6rWYBVYExJVSZRMUu1P3cP2MZUzkiyLA19Qt6sX2f6YXkJjmLiV8nWVeQD",
  "key6": "3V6DPdv1hdMtE3MhsX4npYCuhyaD7wVCGsuXnjEG9Wchbr1aoBTw88FtSUzT4hS3kymRKtuw4CB1N3QYnRMCYczt",
  "key7": "4bLUGzoE8eSFZwFN9mmEQBejnrbfkiJPQFvzNdsBGd2K4AFvx3sC6XK4UuDZ5dACVnjijsA1HokUaj8Uhw3pvVB1",
  "key8": "3MBBT1xoWZrgo9P5DUNpniG9Sdf5xTvR1wBFACrHjYUg2kqpG2zeWytqKrEFFZurbpUKMsdZWxtzKtmmLYxwRvfs",
  "key9": "4Yw5eenPzscyZEkZfVuKLmhnEcwnR7wEjmrddTfND6ziUvomuwR7NEHMRXCDCsH761TnbRVw718DqGtr48uGMCXX",
  "key10": "4zeH2dAW7PQAA1WNS5NrweNHT6btrXbPY3fgP4vB8hhhMUzkJycvoHHX2w1uGqVH7DATAjNgqykFkUv3pLytyCSt",
  "key11": "qP9TaaeM7GBfUR5664R9MTAB9n3zqja2dMMpqdxGAac95pLjFVoW3hjznm8kVcuP1N8ZmD6gmD9h5kW1H89PG4P",
  "key12": "3uutZnNegQMwo2f8BQ86asWqc3VgjsJZTNj77PSoC4yeULfPwiTB6bhg7sotP28DPGwuUjuxpVwbMPJaDVbdy1ZK",
  "key13": "5PUf4g4Vx4spxcASUNHK3waZbPyX8wmiEoNLA7w1Ks8eacRiyeDrnGzZU2axUdRua48pvmqWshvzE6awvjpYPp4G",
  "key14": "4zeubBQmmtXzkcDciq4MtpzLu8kxoarZNzYg2HVT4uAUQheNerZ1dqvkTigE5pPzqM5VhrhmcyymptMg9zPPf7ae",
  "key15": "DDYJ9Z4mQEqKHrJE7kZBsiPHWZraqwBQ98nh3gEv3MphhRjz6QDwCrU7EPNjVUKqjWHkBnqyWSePaLNYGtG5n8N",
  "key16": "4UoQLnDCGa1YTazYU3GVtwEhqQvZQNSDSQP8jRQkiXz6fJLkP4vfKoHxeTK83haUa37iZAZ9FqqcH3Jc1uPGQfWW",
  "key17": "5MJz5YMduAhhaKkx24cMcAeYwv8ssFSaHfmGJLRzbgjzoRZqzqqbt8nD8QoGKpuLaEWgccGaFM9Af1DctDFnrAtk",
  "key18": "2gboFYxseox9QqEes5mXzsXJbqAC4YhR23Xia4gz7DMDNHkYGnLDxGTfNWbrtr3CKmDLjmpbLKYpWSCbo4zFmRce",
  "key19": "ss87yVV3ZZXedMHmr7dfQAn4J3uJT3be668xBkx3ZiTey83VCZWc8Udc3NCUbVaKr8yNFzpXZju8ZnmbX2WMQcg",
  "key20": "35gRKkaAj8zcH5HVFfYorc28J3EKiJPRcgMnD7fAcN9NXJsQWkt9vtyFxkZCUVM8VcnWjZt2SXFPQNNGQPw8BqTy",
  "key21": "ssy4YyDRYmundtfJt1J4XNx7deyh7Tbq6C7gSeJRAkjyUs9DSTNkeS4tkuBCQZy21Tm8vL2bfBUVbDFqcuPeYmZ",
  "key22": "52wJDT45rqjhw2A2gzyiihZDhNqUegViEg5pGXrTYRH4Rq89T9gy96mGCNKqnqEXkFhNFnR9SdhVcC1hYaW6TuTK",
  "key23": "3Zw4ZbMySWFGaS7yRHq3t8FEdseEqMxEeXS9KGApMmsvQs1z9FTYnqH2u4BPdhTgPHNNR6RNC5Srdr2pTsYmy4Fi",
  "key24": "42oazizzWH3S4VsY5cPSs7xEnpGUqovehNaAg5YxAFEJt2kJLKN3PFgQ7MZBcsBQ9fLxrmfCTK8xMbNB3phQT39J",
  "key25": "2ZjZfKnxR4CmEd4gV65pWU5kfHLQ3GXoJxK1miYca3LG2fuW3LCYFAYr8NQ3SVriNrhcHGmy4Lx2qrfdp1kEEa1A",
  "key26": "zgxPUpZ2Cm7HTPAYNkzH79k5TbnU71QAJbc95QHx3n7nZbtcMW9ieb1W874mVquziYjhBcQi5tCSAjim7mrqy3s",
  "key27": "2ybuyKk1qTtuZ4tcFo8UQYXc4TpHsZhexFxZHuzYfanBeYCLDcftPGtVunMpEisbQkLVVPkxMyAf2pQTxyQsQpiq",
  "key28": "pfuSMVUK685fH5MESBAh3rBjo4wcWTWRK1VkFnhhGUNesxbY6pHFQZqoWhDTpyYxjZDoWMJYmPBfnvnwAgiHExE",
  "key29": "5iF7jUNUA5a4XWSX4zCiiFrMKAKc7ipaJ2UKxRi2R6eLAzeRHkM1JxPS649DQVtG9hnaL6AGMhVzS1mZWMzZKjo8",
  "key30": "2sBkwLAHnzJaMR6J3KrcHNhdASzFZjmJULLW4crrx6NfBNtVpuyvq9MTCLekDpQsEPhz5B2rujeVDsCxomp8XkkY",
  "key31": "WomKKAYyACPkTijfjwxBKXwKKn18a6v2suawJxhTNQCd3B3zZ2fPxjotXpT6KSkF6Les3PvLRmwdh5X6LLhH2yj",
  "key32": "3WNmKBL5uxW1wSFWPAf356ASUKHW3yxNUM4UBqdNVPzBvSGrsCj5RFuudB9PaQkQKqMD6qmk9XoaywAmjy5xouNL",
  "key33": "Ds3FAXsBRfd4XmcVANh27cK6qUSgFBVQjuzyB245qWZR7KCvAfDYBQ4xhAUEzJrk14Ju4o8YqGEM4zsATdR2mYh",
  "key34": "5XcYJCDRBmjBhBsUFSev7BgczQnCvqt5VfVd54G7rUuGSgViU6k88cZsnKZ7v6awrzKhA2GrVUTSv4dM9YK8hXXD",
  "key35": "4FVKEnmrdzgR3F29AHwJsJqncpaKyrTPZk84ZTQ9E7ziLKtDtVdpKN34F56jrAs9dErUByJYkbKgNpEmMt3x5xkj",
  "key36": "3P6u7cCy6cgXwDndGFdU66YzJGZ1BB4Yj6H3KuNhkPBDLH5DFcxSupMn3d1iFe2wxa1KB1g5oAWGZtAQQYECSmZC",
  "key37": "2esPHrouj6tdUV8EWfjyp9nrYxeVHNT5zqbpKS7khpTLaMz3fGzrK3yLbMs61LywQYspa3NPS8EKFGmhczpkezLW",
  "key38": "34osYpsmWZGDkE2ocsPwzHiiFdaH7LzY9vBUQRkBfh38oweCMCWJUbAoAodHxXhBEkoXgVA4dWfMcKYmXenJwJEk",
  "key39": "2ocf2GmCdeFfokRgVfLHHbWmeeM6vd3gZcvBWVckXuiWzHB7bcCfp5Ro4kMea7gGEDYvZ9g5EX6jfQUMjUVdzi7X",
  "key40": "61a17d2uWwS4j9TFetYEfvTUxmPMCbHcBPvhamE6m3JTPckNtebANuaF8TfUSNVR58Nc6RBWoSmYwZxVzPUfC9kV",
  "key41": "3dCGy48qncwgqQVukXdHNpgtHQRqqGYFWFR4LCB8si5FsUp9tn9Q3uKqiuECHn7YGtVNAeaqh8RC12x6aHnUvxti",
  "key42": "3No8DthvgUFfLjAon9jbA4jda8aav8gUEZU63NyMggJDzMChAF4jzhDsvBJrwC5toLQhhxELGzLySm48JZSk35SY",
  "key43": "7WSaVEoNYwwuHgiEQdfJp77AbqRWSvRUWZb2QEG3WmcmJ5QUherLtq3souSNKEBKAWYGp8cqxEXFga5CMeMj4Aq",
  "key44": "4RahmRDAiYuBp4nJ1SEAMgidzfPNjrGHdRu4WUUcYcqhuZ1PCZH8MJV34UWCXs5HYFdTebSXkrSNzHwnDbjFwK2W",
  "key45": "25VvPkyk1PjPM8JHHshdou128oSwwagkCcmL6paBv6wYLFz3ZxqpDTWucJjNbEe2jAywCufWyLAG6z4NeHySh3oW",
  "key46": "3G37wrTt4r8kLMKxHrxpbfZ2kEDpARTM3t6nDM2K3uZKCpqmjW8TF7vCjyefSHVokE8WRcoUu8f1jZfAPFp758eZ",
  "key47": "5a8sGqvGaaqygjK9SBfdNTHxxEXFGkZ4vqPDz2gnJ6LG2Hbkq6GL7wyHE8KL2VkME4VbF4aopFVAHoTEvYRhxrXU",
  "key48": "2h3oVqmTMVwFVnwMLeHYHakAjhB1rFvNtptUVmGfnoTADC42XxUfWVbdnkywj2tU2wtVJAwQHpJSNdWS7RmRh8S7",
  "key49": "5mV1b2g1GkVXYU5RRgTBhVk3ifnXqhRZk3R9Pp69QdnaH1PYe8aZw3Y371WnzV51dFEwo63SZKcViCHjbuY3T5ia"
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
