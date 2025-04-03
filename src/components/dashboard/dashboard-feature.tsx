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
    "3KPE2Zqk6F8MdHHxDzt3pLVMjAA97EkD4CWiEJqb6g5wXsqEwDtCPf1Fydt2WTU3zMEK3YjGkgLVpxjLuzT9HJS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dFG5CYTXDvPYQ3j2BFqUef6ymmi6AiTvh99QxxnxCUtAtRtmAoRDVuoBpPeCGVcukZSHVG6ehMH2gh4YvSqogGK",
  "key1": "E1qtRxSbWFRsCQSHfHqyn47n7cDC5a6YQsVDjST1ph3ntvRq1WusMxRNicaUTDkVU51tysqGreovfSqja2ZVma3",
  "key2": "2QxRn4yUHV9XKZJq3RL9nU3k6GWxfTuzZeQDci8RqbiTRvPz8PXFnNK9m3tBBcZK1rUxiPA9zDbU3jcg8XLAncCY",
  "key3": "4TrGjLQtx1t1JgKMMnSZ3pmFfXRkftpgidq8gdDepNu8UuFxhCuGme4XBvZJTsARYEQfxDLoDxiXi1ztCLzFSc3v",
  "key4": "4D6wyvcH2qAc37JJRzrgHz9QUzjtwQNGRAQfQ7DNk1tZPD8x5fdRNAMcar4vAVaYUaeayakTmRqhT1r2WDwzWvsx",
  "key5": "2hSug9R1Ezb9n34QLxSALSaJqXnBsdMeMk2oD2mPAP1VRws3vGRGnBWQrPoySYkzFRkxyzevAJG5BhxnUurqPv98",
  "key6": "2CKyUoXWmZHT8Rx7majELMfXHTfVV9ezwUxyj1rDLGLMnpKvd9ZzHL1T4meKDXdsCNYHdYQiEtsZ3hXJYViLhpwQ",
  "key7": "3AYPi2Hc78YRxjxD6j4EzDX8rC3nNKpCDiU9biQceuiU5WqF3tW7MLC2QhikEbLL4U6AoqTBZaC5XfP16qQGZugP",
  "key8": "JSBfBtbEFcCEmp3CSSucbzfcJLj8dViVbKVktBHQR3qQ81Uy1rSniTPN8ETjBEBbhVUEZkLik9iua2BSRPeT4gA",
  "key9": "4RAZ7PBBoXip3Qcqemi8mZLeaMDYiFMZpj2KnnAqnErywQKFFHGXwuYs9hTS2kUtg9c1mcJ7W9H9jt3pTvENfxco",
  "key10": "3pCJ24ird4GChwc3TWXDiAdBZ9GVciUHDBAjHxqto5Hktwr9BHAfPRZF89VAGqzzZD3ghZNhNxFJnMpteuK7tYmy",
  "key11": "394VE8GvFTcuni9qs5nZQHpmtszgaYDbcZdx2ax7ySw3UD8opZAEsSCJf1ZhKaxbVH1ePugNNuuoDP4eEuhTwsaf",
  "key12": "5vsPgqRA1AyNWxFEPo3zzRHefKt2qyD82QwuKJeRLGfnrejFCw4TxnVhnX2trM49Rcya2hNczieTxXCuefyvJHHk",
  "key13": "4vMTYjxTJW9K1Tnq2fhKgsstk2ykMcyyR1JY4qMe1UzPDzeoeba4yg4fKysZHpjUYeySxV6ewKJvTqbLsS4Zsza5",
  "key14": "3tcSsXk7owohD15kKpTdq6zSA3F7vwmXctbf3iPbJU9tCU6V7uGaoy5Ze1gV81iBgrju8iuiTNR7sJndr7ZoXnqm",
  "key15": "2GCVQL8QmJWGHvT61ko5XSJuRnhqgrEGcMx9JRhCgPYTya6AZYg9k4KBJDv5cxQFc9GdZ4xcsQ9uGnPMNcWPZxAn",
  "key16": "56JeVibEzSaByXW6cUEvf8ByN9GfjWVPDxk3JMDEXBe3tAWFtKoLPWanWJhVtu5ZQCAkq2cgtX3747usVLbi2SSP",
  "key17": "3HkRVoeSrf6RnmEeZ5n8p6n6i2Z7sqbteqZV8DCYRSAbmboNrwzboHAXpd4YsmACx4teBZ4CPdeJ5cAsJ5QDgySm",
  "key18": "3DrihqFi7mhuAH2U1mBJb8LQNCB6KWYRqFdGEKgj4wR2gTEqauCtnWeZAYFzqYoPmAWbBBw5Togr3kq1Yf4Vpbz7",
  "key19": "33ZtRsXCjXSkmkddjfqVNLRgMTFVehbLyL176Ak8nxUvZucAUnpDFh8GAFMH9oA5Mf7pRXB9ycFooKZrQnmNP4MD",
  "key20": "5LP5iMg3hCzW5VGgHujbgpawe1Ti6HaDz4LYXdxNL2bvMv2W9VqGxGSc4gvVcPsDQaJWNiFkHavcrY5gXjDu7xeR",
  "key21": "2rgArEEFM7XDm2qrSXgSFcfdayFBwvLASr2c16qhEKj8Ly4tRnN5tTyzQDh9ionAdRPXqpdQmf1GBsTNLoAD6Ce9",
  "key22": "qPEaKuxUcha6t579ZQhsy9SbaXp8VfrYrE9PWx8Y7ARtSo87LhpCBYjbgSaZtSRPMr1bcBM7LjufcfTzk8vzR3X",
  "key23": "42FVCs8b7KqCYMtsCxN2eYTTi5ZihfR6XGd2jm81JEF7FPGYBzXAY5pFqFHsyP8g3BBPUB3ogQU6ggV6r8X8y1Vz",
  "key24": "4RsjG9EqFBQmVDghfFpCs1ignbb1CiJXA74SiNKSEwnYsCwJ1vQcDbaJe4xFiwKSSLR5gTo2e1xioTVqy89sf1W5",
  "key25": "3Z4g88GojokuW8n3wn6fMuZgGrACWNnEtJtscsFps5ZbRx3MSjH1bBru9BPxiyUaJ8oDB5EeiuA1QhhkNEBu1jZV",
  "key26": "24J9sTowfr3LVfCYQyNKpAWYE4qmneN65KzJDYtifNwvZwK1UivaUpS4fZyx7ZVjB6oXxSXx7H1xVokNtgjJ9FfC",
  "key27": "djSpNf4zsQPAXTvSjW46dggWWbo4fybnowFnQRHE4N9b14KsKEvPgehnpvpNskn1huCSn8kp4EMyzYSho91LeDD",
  "key28": "3PALCBPouVEJJf2ggAiyndYBQFkRFJGiN9pBN3ZamhYupUNeP58RufwPeznM7H3Pz1NQ9423cHgCvy2nrBNyScpM",
  "key29": "5RRjvMF3i3hRSWBPmEWhU81ELM3mLdgm1iVbyrsCEYCqcryV2ytH59smxTRRQRQiKPSxCquXsSTkFHy98JLu89jV",
  "key30": "kzZeUtW8EJPrksXAPGafpUsvSfdoc2RaL7THaZUzuXevBdsYtggakRssQ7sMxeeg3TSMEHGB5V9fbPpQjf7S7pP",
  "key31": "5pLrwJTfdeohmHw2w5DNMxaG1VS8Drb8z4ZthrirgrpVf3zWe5XrrFoE7Y4C1iKS15RVkG1kCxrrq4d1KurYEG8",
  "key32": "5PYTHSCUz9ECyh1yXToD7SkUZxbyjiomdv4VswqqqmyKXsSnqv1LDSq1Tz9CLDN8o4D4NTgX74FMSdK8Z7dTYQSP",
  "key33": "2EzEm5SVkPhrft1Fr1EERJ55W7C7292PmgPZHuRotuyjHxmgYZ8LgX6EgNogwYMFs493QBdWStGQ8DnusyKQZiS8",
  "key34": "4yHmzYA4HMm8cxhM1iBt6Sf4FaUBnczn3qnDU2yW89D1dFfMyd9vJVodufYTwCMsq7puntUdZQbEHwbtCUA3Vh5t",
  "key35": "Jia8DaFHXQ1qpAoEKkND4xjCgvme2af9SxXztFZDG9iGobwuGtZtQa7DQcfivahDVtHf5bmL8RtD4BcQ66464Ex",
  "key36": "2UG1sEsWjVjSL14QHkCtGYXvd6yENLnxDfa8y3QiJhq2t1jpjhPpM8Ju6Twmh1zs5dCp3kRJFbFnsijZ2QYkN3gD",
  "key37": "7aUfFoqyKKSgmCXAaNMQW2pgo8vtyREQUh75FGWbfpAAoVowQ6tPkEFBfepdLUhWxXD3Aq3R2NNvGxjjsGiZHoj",
  "key38": "4DUqAgyLtga5E7KLBGdwRpoyoDLECN3xPqxgJ2sdZVyZQA9LWNWsCDS7545ajaWyHY9AR5kw96BDhFrt9FUMNo77",
  "key39": "3KscuWPHdi8jF5iZWinCeJdyynLdqe16pWNNj9pTsfEL9BZSRS6EFc4B1aN1N5kSfuYDQzWzBWU8mJuN8vJmNR4q",
  "key40": "5DezC6e6AuV8LjVcFQTkfsxUh47AYHhoqNDKyzxbHXC8eovyPuNaXExdN1ApLzFPeBVHYb8Y2QsXQBGCPA7YHhmz",
  "key41": "37k1L266FaGYtFMRVgi561zFfQ9vSWu1HC3NdHHHSGEQYmM42rNv7abH99idRZhDYew7AHEY3kCXebGejsSLc8gg"
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
