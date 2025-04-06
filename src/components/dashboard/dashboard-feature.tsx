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
    "SVPNJUc5TnXiNkKzaPEBZsXB3ebwi2veVUcDvtvhmcSKwWBypJx7WdQvhijujXvUdwonwGyxZNopgmcqVQeRBNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dMCXxXDy89BXtzoBNM5y3jxXaZj1vX1iaiTQ3rsFuMUh7G8hAWD33Can47yyRU94aHWJaxqzAeAEXxzBMb5wXUn",
  "key1": "4AW6JDrneEsnTmgvvvTzPSpVC8dSupo84dhuCMZLYBGxbyZDVrotGZ9WpkYNMR3ZEHZDw3XBhX2gwVXi6nJWCuSL",
  "key2": "5Xq49nUNua3VozoSrCPXk3hZtL1r8dHTzUB5SDjocn7yBabR1tsi5sfpB8bC8iCTDwkUWR7iLfkAZZmCstfkddqP",
  "key3": "2bCZrNLeUu5A2mbidSsK9YBYxmVSN7eQPTk5LomyvM557qTKCrgWpN74Z3pPvLkDN1QgGLho6JZUw7CsMgeh5DGf",
  "key4": "4DZsddMkK7cphtjME6tDrkABPFAFRdiyLy9rNgFF6YGdiXoA5e2eUyaHypX3vncahxsYSg95U23mmb8WyVJfDo9P",
  "key5": "257esgoAmAyewgGXz9CxN5oikPzqRZUN2R5jmy1gMd3eNPzK2bCKnxk3XFiXvMfTMR7AAVfk5oKoEfb1nTAaQxiu",
  "key6": "2n6HkMBGf2ebTtv3oD6v7XfFpPX68C7Ltq9jT5o2GvVEKowmAyraYaeLnFKfYy9VTbhxb81wVBosTT7oS9m2zUyj",
  "key7": "4K8N1P2aUq9mP2r82ma5QC3qBH1QFgZUW8eUQxL7mBqQvuk8ii7Ejaf3bknBdSn8NMkW4gynpuUAPUkfyq7sCifj",
  "key8": "66tuK5AZn6zZXUttzzDN5eVCmjLbmEdpdSJoXNUsMDYwhCfSL2R8mvPp6NWv9QbBiTV8LLc9gG7CqkHHyNEQirn",
  "key9": "3MqrijwBLvRL9kQAN5Dh3akZrkDEXEYcGUTtQbiSkuhgJRBF58sfk2iUiuPp7iMbxzQ9e2xoxKXSiJifnTm9aTG6",
  "key10": "A4NLSqjaXawjjgsxvARSjH9MSDYu4L8j6gVHEPwb6be27pMroq1Td745g141dF9owvShydmrWHTVuKXyiiAKnYu",
  "key11": "5x6uitmMzSfdDFuLKhsuh5i7AQpiFm3cXgD6SZSQa61iwyRjPChbCEQjtadkGV1xyuGKZcfsbbKWFp1BJMzxm3qf",
  "key12": "5E8qJTz8TMjqz5D3y1h83RC11A4VcVQKCb45wgVkCoTa3y2VqJbPe3RvjnEFkDoriamSzGQgU51cu5YePNUX7AtF",
  "key13": "3qH84rHe5RFWb3eHyJLEf6SrF6WUUhetDRKKWf3sXidyZmq1cMXNhY8y1LXYRej7iw8nxWice91eneZDyArTwPpB",
  "key14": "gFtXzntnqBhyFrPebdo6Ck31cS8SXSXqHMRJR2rqeQNbss4aedcNWHE24SRwGLjYQgRsWwfBn6HnfpXNYsHUoLG",
  "key15": "31dwFmNe1YkzuRyrLB76PsCynXwLvYY8xRNY6fd9siJusWxCzQN8QYinTA5p8KGrHjf9Zhb5TiG5szyTiHimmN2W",
  "key16": "33x4vppqGnBajnGbeGuipBCHEZUPpdFKNMMKQr4f5xchd2V1vYJk9WVWMWPKjGXKerWgnT26zkxUXhj3mRaWdrXF",
  "key17": "3RqqRecNQVo4XK5WZZsP3RHQstUVkictB22Y5eSjGPNpZjAkdMBFT7DhPrUBshjKiQQDryw7qJFkoRqZx9DbjjWJ",
  "key18": "2MSikhWtaPfV4fJu2MJGpLvi82Ubfr13zF6hM5jTB8HPfhRSsLfC9qSDpmEAct86RRoNkTeDhzEn1qKkKxLg4iVj",
  "key19": "5zbTavgeGL83TmjrwP1a7vtcSYL5oPcohHfvhD8Nu28qdJPUqnzaD2Vm5meeQnD8Gk3jy6Tjt7uqmZrJe7bYULyP",
  "key20": "26JD5rqPLzeWT6v8tG8tPsVrJZESUZtsNmfEuVNozsPpvaRxajrEAdW7XdetGKvEvon3EmLMhYN8p4Qf16jQrSxR",
  "key21": "4Vk4HxbP32N6mruoJn2ApqJQ6SenAWKrWTJG4kMPhKWcn2VqK1LYvC4RWuWFPMtUNFGCMPiUGVBcpBEdh1mdYJQG",
  "key22": "4z7rfv3dpyTZReAvY9a5PwsF6qPYgdFCxHVDTbYGgKj7Nt4iLhme2DTQ3vtBwwD9kGKfUGuYd3i5AU9fcM1E5KUa",
  "key23": "37BsTdWCo7K3M9TtcFoFVEo5WKrBrdJDkpaFVGhCXrVg9dSo1CbtguZ8JDnuTSbfsuMmT5wSBW18ovQu4AyyBmR6",
  "key24": "44Qnz2SLZag5dbcvijj2ZnkDRnSSvvALbpZwK1TUdtMze6CpJWn1st3v6xM8RmVaM2ounHvBnfRGKfnyFFVySURc",
  "key25": "587oiSJLBx4sTHiU5z3VG1HZVi1dSYHDpy4PGoceH2QeKtxRKJs7xSSaVWRmQLw99E6aErYvQQtTa2CngGN4vLZ8",
  "key26": "b2ejKcjm65iHUjiRc7SL29megipjS49LHSXqExBnqM9VJmsH1ffS2qLSafhfGMzN5hYHKtQzkEQEbDxWrZA272E",
  "key27": "3JP2zErC8mwUrPi57UPCraBX97kTiCbLtytr6Qf1fz4yppx7ARYhgjuYg7NLjG3DE2jiycmaYDzvvbv2zF1R4Vuh",
  "key28": "2aYr9y2CzF1HndETYgcehzEYk3SZBu4u4YqaMpCFLaiZyGdr8SheVxwtXJ9ssJrf7insWUdzeEFcZp1inSXevRmN",
  "key29": "3mKNfYS1RPs18Be3gUofkYZMXEchR95QtwPTAms4ujm9Mvt3viDAqL5VftB5hKyu3bD9X6mpjiYdd3YXgsDBmbco",
  "key30": "4X2egMGCMDHr9qfFXVyUZb37BuJBYTjwCSchU8LGp1PmhoW9E6y8Rnv9gmSae2849xzGGWDVUrUcN1sDPT5FEV87",
  "key31": "3sF3p95RTY87GTt1wnHJAzaMwwyRYAdSwpCjwFMHnkN6PrF3HQ8zra24giB8ENvMLPTSeZubEX7a7bwqfto6kVhU",
  "key32": "5eHKchUinTwgowmf5oB1TpAb1xk1AYGnb6xSVGqxftsQ97iq6nj2NhnqqB9rg1q3w1VxJWL6G68qx1kWevciHPwo",
  "key33": "vkTXZTpmLVKy5d9siz9UrizkwQUPHTvifs8bHQ7TXR4muZ4dZoeD3N7Rv9L66wxaZA3f1z7kdU8u7qu7oNggyjM",
  "key34": "3QBoMY5ceiGDQdAdx1WtyiF66McMPFdmYb2HHkFgmckp1K7KZ3wJg8WK3EfDjLk6beHH7SodPNbT7iPvjTB3bqKj",
  "key35": "3Q7qJVq6MBxFgibpfEagMbz7CXiD9tmJAD6n6oF1wv2LF5uoYQ5at85LetBM8izjkaEU5Vnr6UNdRuJD4e3NBQzy",
  "key36": "33naRZwgNvrMSRS9xyxAb7Z7vMw2a9vYXvN53kGE2Qy8d8MZ8y2PEb4jGxLaxogQmfnuscTSkj1FLAd16rQgvjQh",
  "key37": "deyWHYppo9z545NkgyBZHZ5Pgqm3TnYLbVfWaWmJzMeYh8J77LeYn8KoQz17Qt5AP86vMZJk56T63gdScuzt9Vv",
  "key38": "23WFXykTBoKGbzvbwxVD3W9kuhtT23tHQkhi9kfoDzXYN4kdxZuvj9fiAGG3brm1JVDqYwp3pAksTanVQZVczoGN",
  "key39": "2R11YMh8fjBxQGaGZtEDKsEvYJ9eMzDMndVi8mp5hH3yA37eMLemsFA1cCt9ULLnBBjGSsriH3G1bkEF4KUQBvbx",
  "key40": "5HvnGcifR3RGtp4M3gaVJvhToG38HxLGGsUjouQzt2MdTAG6q1gaVA4YkWpo4DdWrB3n8cM5XMX4CSbGoRbtawsJ",
  "key41": "4DVyQLnz9kcDgpDAMRcWKfHMqEK57Y9U4iNS8jx3cCJVZciGXCqDxZAtjVof8b1TF7pPD1uZzbHVpUchvVocnbE1",
  "key42": "2ti6MPNtn5mL8K5iBeZ3DowmZ4jTY37DuDbeX6zayCTKPtLBqbkYMMuyjYFN6jy2oxz4fKD8EdMM7TL1syCteBne",
  "key43": "57bMFgnohpabX2cquN7xQuufGSyGuSV2uMY5ApCX6f3fhCPDet2yvHygARmtMGxiuBzGiBV27LUmG1cYcGgBXU41",
  "key44": "3ahNe6GSVtafYtvU67wWBoXFW4JpF6VidEx2cVkxkcEVvr7yRESWSAzpYyrYxM5en6fLCEkuC7dUbQR1PvTVvKxh",
  "key45": "hVejahohLHSN8tukUwPbXmVtHtEtpQJfipYYNxrrid9uYmVa7jaBxXALrfsEvsg844L8nTeazUyipmPM2TzS19N"
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
