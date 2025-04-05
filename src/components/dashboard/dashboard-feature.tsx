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
    "3jZ6NCSAYJrGLdrawLeRrbGBCm27G8QYh3P1vbnA3H7MgnsnVHjMaoxRcEvd7BP8RXfQjgu4vXfVDDA87rkb59wM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v2FCXR6nACK7SGaFBTzqiygPqcq3m9tLzsgAXaLh3qUgjtAvPuSH3dQvNj1s4estJmXCREKPjuygbXi2kVKV5T5",
  "key1": "3m1hB6GW1WtfAx8WaCPsuVS1KRZpybF4Kkyyd4wYoFUN5dYikvzLbKkndmanGMVYeJUUhFNnad3YN2Jteeti3ZDT",
  "key2": "5bfbBqBXUNERWbsM2e7WQV9CkYw3pqBRscqDwvAEgy8aWad5p7gTojxSdpthsuz7nkyHNRwKrpsmvQvsyBgKqFzN",
  "key3": "2XsaswcjGs6T7qdLKCCFdnh2gbRtLGU8qhHFpq3NsjhxeQYkwGVd1SkTESpj8vR238svqcAyp47vpDBEFLC6A5m6",
  "key4": "5oNmL7L356DonnVzHTMxBGGnHNJhfkf3gUY6RoYzYMjWfEpi8aA9YAFnbRBWr5efJuqGtza5JYsxzs2KbaRZdkkC",
  "key5": "328H8yBzi8nror7cyM56LM5a24MoEjdGHttnJKop5nfYAnckVXK4w9boXmAgYjJ6Afc2Fh8XKqLcgvVE3aq4xQt5",
  "key6": "4aGb5upR2byVbqD2YtnsQXxV7BMHquoFJpYPyzMG6BGvUx7B8mFdh7HV8o6CyNaikTJgqLREoNMCDrDXjYF1Pjra",
  "key7": "4qQdb4D26js1uAxWKUsZsuTdxzVypgCB3HJDwvFBgXUkb1egp5HUaznBqFHXxjRdk3FT9zeXscwwByFJtMWPKkZz",
  "key8": "3nPdG2gt8B2PqBDC395MmkoRxjdGXmet8XT4wSwC93CF9Xxm3qEzBTXrnE26kVWqKATHp2P537xtYTEZ5tTuH5xJ",
  "key9": "2faTN9dDKmDsddTLgJYh3buABvKkXeUv2tCE4jhnuFLDPcdEWtGTWJ79xadE27c26FPnQ5vB4xt5KKPoG35nqz58",
  "key10": "2ZvroWWMjc8aqohpi7bxiRRSMCiKXty6gFiSTuUEMckxtp5Yx7e3igKMnUSgjKSp477KkyndadW14KrJEL8Zp7bn",
  "key11": "4sFtX73MpfuRMWVRSkSDiCnhrAFdmZwJmZrUu1zWaGRLiskPqt4MDXop9TeVAQU3wGN44oFNS1oCvkAbEnXebFyo",
  "key12": "5thXS6YBDDWNASj3mAwM7riwTYKV8QP2JDJiyTg4Ucuga9wJ3s2R4kCxKLrDU6mgLt5Bp5NCAR5fTTAXyCEWxF52",
  "key13": "2t1ts7Ek731ntjVJZSKwisoqQYo7WKz5CcNCbBvDSKSbngfoB9vTXKaFDZjUxq29FSVw2Sii2HJchkpA5XfPLpo3",
  "key14": "5rDR94pLMKnfWVWmcSb3hsHC4uXCwNpgagw4kSJ5G3UsbbNGGHmEwFAhmZGvG453qVjBhsroYadNcUt4Up1iHYWs",
  "key15": "4ZbXZAdB9MbmYWrc2PgTjNy5ws4aGBTAc7qWnGujKmfd8PimKgbRbhtLusNRKsFmP74Sjm9aso86QtvMVfJMjfys",
  "key16": "3MJfPXrFUrLnyNckXqm3kgYH1Ark1nbzKu71vn4gNRx1HDoFQdX8jJZjvFLVaMUM55cskqhKt3s2XGS3fGBDEh9P",
  "key17": "4Jrsw4pJ31SCSYptHh3T51bMZdnPZPWxwTnqg6nfKRUFaz2ffpxioqa97GP9JFHYGdqd6TiJK54xsYXeC3pJpcLJ",
  "key18": "5TchC3RW4utH9t9Y6pk6c6iYsgD13QstZ7az742iVvsmhcNwTMXjdYn8cA2NFCeDYDkWqAagaxnepxCREqag1pFA",
  "key19": "5zuRvWQoxapEXKapNFXdpcvvY6LGqPeHhwxm4BSLxKxycWQYnEhMJMfx1TaUwGodNXdARFheqEBXEDEabiRYYY2M",
  "key20": "Hio1x4YMYEyyTZXrWfRZNMmgBsh2nwxNj9cb7xEfDbLw7kFxyGcDN9vvHAbzKKWGJsCrjhVT7PrQBK5NqWUHvpS",
  "key21": "2XK6j7Tpwd98t1EeP3pDkyncZj7YCnJBj5NAkwJ7yyw1tdXid91SovNsQZavcZCYVNuG4mUvozNpCM5bp2Z84uKn",
  "key22": "5SKjivYUdPMfvPNk3Ke6sGxLSdqkGyMBmBNG4yJ3DuAUE4pDmX2gQhwLAs4CtjswoShrFM25Me5sjuUNKLWLpPA1",
  "key23": "56CXR3JDeNKEZYSgVxUsR2BLS4shTWP3M6uCTyntxUYk4ErNVPfLe9JFdiSz3ha8RFMfr2mNnSXic7ftSFFrRh5A",
  "key24": "5qgo39Td8YprbwncartBvgQumok6vwCuB6wwf167SyGii32e8yor9Bewbcx8nNzbNJS6qkU84eVGSyXQfy5thnY7",
  "key25": "CrewnN1uqrCo7TfkWpXjwzHJha7VjFFw3tHnnSgNAjdBSyivELFRJzps4Xo2qaeBnXTvYNqLSybNCQZjNeVHKvg",
  "key26": "32BtfDKeec5bE3L3TmovhaiDZctrztu9jYmza8PPvwQSP1wWLNs39S27WMC5Px1Loyd36w6rXprnRUgxsZ1YqH76",
  "key27": "UbeKyytttSXSZL7EaF24jDT4jiMWapHk3XyqRXYbyFeLCGKs61brKPGJwxnDQ2gDxhQgcfzr1Zaq4VXdojzeca5",
  "key28": "5o5MU61DpTu62nnYDHbgKYvtS2YsjagRca2Hn3rziMxgNZ6F4bfkeGQbYst79swTzoQ5usMDdhqjcWFMFZbgiDc9",
  "key29": "3hbTKwH8YEZF5oXAKT1buNd5HH3mxk6qfWeSbWiMcCqwronFCfL2gczRiVEA9Cj7AmVZH9jBkKfMPYQwSZinWpP2",
  "key30": "2hE8EiYhub6dNjGXjBkf85WoEkwpsvjcbGnxDtHh8MLjBTJSaAdoqcdtMHroKRyenR6mfLGnXFxjzEDXQ3bvMJd2",
  "key31": "3V7LhXovkNMEMG45mp8QVxfZsbyDJUkCyYWz9eRvx817RnMFVJeVJ1B1XLjYNtbrJP87DigTWHd1qVm9QwmxpvFp",
  "key32": "5z2BGY8d5jph3GrkbDkTtNpmLbujbudi7QCXH6mN53t2R9n2DcdCGiWYo4e6PCDoypadaYxNJYdycNHoptbgiNyL",
  "key33": "RtKrEz3LhKkazsgxuPDiKo4RwzWiBEvAdiUVkqmihukyrESUb4wVA4pR7eag47iWtC4Lt8CceqgiFWPA3JadCer",
  "key34": "dtN3gPL2pwrewt2ZbDjLKTJMicAFbeQrgAbv73wQVsciEFAj34FfNkXbZaxsJkCTbzgVQ9VkuSXN1q5GA1PxP2q",
  "key35": "4opFXKMhY2M5fmrNMVJe19mCuXtsnpex2RNjLca3e9V5N3vKHk9moxQbJuDgrLAbB6YWZdpj6KfSpj2K67FDCUc6",
  "key36": "1gHpKcXFuAuUXqx8jmiEDZb4eUTpLEoukwANRDTQVgUdfC799XbziyNmRdBMXUFyuFg6nBfQaKmoJMvEU13qHW7",
  "key37": "3CabMSeuMZtwCbMjCVNMmiatk2Df1rF8wUQi2XSAMKCT4R6wTxovNEfDd8vxT6oPuc4F35JFfpS6b7u4cNe45kd7",
  "key38": "2xVUKwhiX6p6ugMpfUUJncsLSGWV7pi1mJTR4UVHBrFkCcecJVnyKJLtoDGuqDkmiPABjJUdCV339ibsGvzjg6w6",
  "key39": "2hh7dcq1CFzYTPV9oodCNi7wXS8iu8ZMi4SWTQbY24scE4WfwmQisWB1gzVP3LKajBzvfvprNeEMmXgB6ECRBQcC",
  "key40": "2mR9fSb9VArePRTA3QxCwtCBCWNezLzmuhT9rJ5fFPiPy1d43AoBQAvhZNpjkWTAxqhbrr2vH1JBpgGRsWWLqZ1b",
  "key41": "5PHC9NgZJACUoAmmS8AVduoVG14KnyoxKMQiZ2CETXDJA7Cu5o5BBA3AYAtcYRiYFdQcdkrgrK6teysyNGKvuYLC",
  "key42": "5wEpqwNMSrBKHp6CvmZjF2ezLRKKjhN7dsF6W6hjz9siYwYfpamQtduC6m6N4buePWGZ9merKTe6jTQuAp8tnWZX",
  "key43": "5XYGyVjJxvfVznhyZJH4zNar3AYBBUQJ28EwHYChjnngDLfwQxeHbnYHSqLCoowVhrSvzWpyK7jUHbwoJ5wMjsHT"
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
