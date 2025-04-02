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
    "kZYDxtXCkRYX31Ni4PMChEEz5nN2LSiTzhweQTCnYNG3YokGW2aYPynLqHMiYj5wsgo8tbRHVeVaiA9gYcQwC3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kDjjoiU97imfT3CeUywKg8XwEgPLPLHUGhtSBrXbXEWJoHJusnSzH4Pi4Unbu9TZtB16i9QSLZJKRXfE4gUYZrt",
  "key1": "Sf8jY9p9YbNkiX1eJboW35VnFvMRtRE7SiKDVmXajcX8JBeNMnZPkEeAXdFHhY8y545pyh9ZEQSTojEcDqCafgi",
  "key2": "5LY1JN4CEP3iebcaBiXfyZ1tQ9iArqC9Jc5JsR1nTT7gcKESBezyyZUYE1vqVfsfXUVbHCSxmHpm3ExfnwK5EgH8",
  "key3": "5RaoYsTcXUv7KTAHMmcp6zWKv5GrLf932nyQGtgFYw67xccjm32DtMgcqGBYFX6EKYqwsNi37QEzMitFwRzQx2eP",
  "key4": "3kUvAXTmRuLAGeSK5h6A7jLS8brSR4q1yDvnoqwZ2cA1aaYVcEYxPkSsp7ETPaTUcVxdRoXGD8WR5meST2sRa6eM",
  "key5": "5FR9d4t9U2TmLkWt1JJDCDGH429mV7k4otg2Cet49Pdsqj9KwAdG7w5MCX17uvDRZ5PtHSUxf72o1zQt4cV1zMCL",
  "key6": "4k7pevPGqrk9Z1F9wFkwsYDshkLSQiNQeEHGAjf1XAnYp9YCaiSBtC5twqDKWzDnFHkMsnYf6dDfz5qtiHJ4Fs48",
  "key7": "597sDB5DVXMvh18eqmWSTNC5q2BjfTseWpcz1v3y7rQ6jrN925PNmRp2ReF3USCxosnkiscY5Y8ep4UEJ6wxTWsL",
  "key8": "42PcQBKUZiAop3ss82wfp9Fgr6BqbgT4jkxk6cSm4rpPk7WxkK27ekaTfctjFaMAi5HDACz6syAfUDYNBERYZXhr",
  "key9": "QhgEqQTLW1ha9r5CgvTQdZ5aWjc8axxGbzu56jPbKotkXAzjC2Sq2TABCgouwb5D7gxLb3T9ji3iN4EpmcuopWK",
  "key10": "3CvK2RWTaBb51dkBgVbVQ6es87LZgTTcf4v3PUt2KK9A9GmSjz9R3egqPLcQW3GNZXmEGsWmg24sVBG8mRv7Mg7V",
  "key11": "5urYbm7nUzjAHG4mfsxVRBMLZNb8r2GPiTFEcMFCEByFMcH2Te9caN6Njw3t96P2c57h5m6s5CrAhfz1SiLXQ4GS",
  "key12": "5zuZiTSzvbp7m4EFnLfVKHJhoHRzoUdbQbN2rJ17Pqvffj1G6q71vuXp9As9Q4QnaH7uctBbgMf54pmF7sfi1WdZ",
  "key13": "4rQxgYwHZVKJcvjyZ9UsvMxHbgLpgY8quNwYY9c3SyiFZJpi3zSr4NbJMHaJqVnS4LT71nq2CR5NtEnZPN5REv2A",
  "key14": "3FXKrRBEXJESBTRGSD5oYfbWuwnRUbK6L9CbcEGf4af55bn3LekhVAsz8dUQwEgEhQqfUJRTDCqYzZCTeq4B9Cer",
  "key15": "4F8uy8TQ436NqnLidYk7qeenxMrYBZcHjwzGsQSVr5wWXV5bVBa4hKrEE4rQgRXDYM44GzNEc4kimBvpBcTYj37f",
  "key16": "3YjLofTWbX2KcEPcCdAMsGtYaQcST1id1x6YXiPkVAdru7BwDLhMAZdxKkMCurAMHpYk8xkexeLEq1SUpqDfuLXt",
  "key17": "38QyBMmx37HQaUQ17puGNptPtr5sdaFGH2Ga95jCoJzoa3diYzGTe8vKfYJbr94shkV38ohPzFTUkT3TFYWyjoQG",
  "key18": "X2o9x4v6ZCHSt2WX8gbM5P9VEwYtxCDGaSALdoo3cP6hjL6p8iEMpAUmHPFqa8FLjtkLrr71YX1DPSbjgMKvFt4",
  "key19": "4RZTz8EGNvEkhjhthxK1KontywTEmG12ypKLkZk75JM8g8sTE5WJoe7kzHJPcUtozh8r27agPP7CXeuthXK81DfQ",
  "key20": "HQfFC2BPzQCaMPWj8Hdyzb9BaDmvy9s5gYhhqAmYuAate5Q8paLCyKCUx2JVguYtpUcaGznMcUuNfLMnYqwYBCr",
  "key21": "4gHn6zc6Zj2EnXfn7sRaY1MjViMwPjAdrKeFvKvDTP7imQe75NbfbKPTL9HeHhJFpVA57DakdxpqQsRiWcDqgKX3",
  "key22": "2znNZtbKR3os1Ayy5dHofUMNxf4bPG5RfoeNyrPrFTt84uj2cmUhvADVnKBiGcxrJiKY11nwxNQAEPWthrQKQ2Ro",
  "key23": "4UmeRyfkZ9wcBPvmLHvB6XPdpqho6se6xCj3zeucijm21EnTrrQMnWJNGrKUBwm8qqS2F6CHM8mdnMCDxH1awAs9",
  "key24": "4ocuEX8uuspWvKXA1BKvb8jUqPKzoqEF9RjGByDZ8FzJiygYNZkcG4g8o1ppXQBNVSMAMBKBPxxMRmpbvJkC3ZPU",
  "key25": "2n8K9MEQDjVyVQYjwopRhRfz5GukGxMXwAaBdgGRFeodBtdNDvPccxVcLvmGvWCAi322AmZmR7UwdNRvBoVEZava",
  "key26": "5wmAdarDeUCZdEt9GHLqD8qrcjJ9VFaKPH9LvYJoDoANr3xSnDLcrvr4ssyvhWRfjXMmhdBFgc2cw2dnyEfUn68J",
  "key27": "3f46KcGh16tago8EPZa5Mdcgs34NZjzuoPP39KC9va8Q8eZCLJ7qURioWRvfMUkHCofEN3rcPq7on2cDoDQo2Pah",
  "key28": "28SHhVnNYGsPENbXkdPh8yH3abP4PBFHnHLhhudB5UDq5Ymk7Q7fYiZNshQUrurYc7LfZAr1yyeSzBiY5ULqc2fd",
  "key29": "4uBLfjhH6Seu51NYJU8EMWsK5yjXiEpD3XAkD2sfvPBErLC42m17U913Nfd4bHodxMFXw85Yvs6TaPSjPdM1HmBG",
  "key30": "aQsnMsSXxYHzu4wsUP1CMGHMGm4VK5S1hg7ikAutrBD3kuwEZ56dfbU68B2S2aX548xnZZ7rhhoZR2EqeETu8iy",
  "key31": "2SdgGbzhQLi2ggBawuqNUDMqvZy78iYgdDGhhbLqjAYhkR5NBwLoKXuzACFNohhsFDNddGpGHDtzcYv4B3SBeGTd",
  "key32": "4nvqo954UnX1uAQSmtaLag8WKMRbprK35EUbtMRyQCSRJMMdva2NrrUGe8XWHXDvwCiRakSnwy1hXcrdPzfe84cP",
  "key33": "4TW3D4bpRMN2AskEJKeupzCGriJneVTuvBJ3CWfjxfjn5TtjZxmfT25YTgGGJkmVQaqDzygUqKJgEHVUrUyKBLJ5",
  "key34": "ENgW3BfPj1MCDLtCYBfoEZF8WNfbdKs2YDy8rvoUNgzWXLEumQENpRJb4Q3NXSye7agwLnqPW2GkTmCsn5jNaZG",
  "key35": "4kyJ8DtPUneD52iG4b21M1cT9vPfKfu8CtST6pjt3bTvHiepRDNkdJ17Ag3mqVeGAwXXkZPUupsf7xNC4xijHHbi",
  "key36": "D7RWVpyjKQ1T87F3KpcEiA5DbdV1zbU88E4aBnVHrgB4wHf9vxryQintuM6FV7cfVZzYPkePg18jcXThTeQAGad",
  "key37": "67Kt3D1t3R4gyd9PKW92c25AFv1M96Tu684J1kNsmAo5HWgcsr4ZUxocm3YVKdP72aCe9q14H3xk9yPmFUbpibUB",
  "key38": "2yXTuCLWdnUH5ndehK6MPsXy6Mxv1dRe5GzoJ2UWn2MefjHWqyTAhtwVBsfvQvPyNSBY5gg6mb9RzR9BL78q3Yj8",
  "key39": "5smaowVxK6DbJ4umenf72PRN8CgK5cq9hTSRneZhXbnp5pWLJzpEoq4dcSwWgUjELE4EtqcPV3JLK8Y9px13n9of"
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
