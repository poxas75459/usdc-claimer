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
    "5ZwLNK6VEuE7XYjwGsZum9EwYcaj3Vyrqaq43TTQdGPfvf3kWwv6unjf8rqG7gxM5AaVpXL1JXqcbv9re3nTVtkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48E1htiGz8BrmAnavqDGVZcL1Arksf3YZTVeg9UtBanSZQPpAow2YMzose11Qm5gg8tbZRDjbh23WoA5fQuhhurb",
  "key1": "5tWBiQdUv4WTdng8Gk3Lifve3HXRVdCoZMPwVHKLSyBbKX1gsxuLZyYdoa6XrQwLq67wsw3mEYKEydRKCVwna2N",
  "key2": "2m7y4riEkf13iAzpw7u1XyMPJmW8TCrtgtC8Fd7jF3ngYWvD9phdhAdnUJ2QdP43WjNrj4UBpmuNK9avhy4fLQYu",
  "key3": "2wf2vPXkgH2Jh8ZrJEyMTJ4kchd8CvfduwL3MVAcrSSbGQK6TeXkBQFgE99FcjqWD5n8aMnDRcXLcoUG7mwHd4KG",
  "key4": "4AaVQczMjHXer3CvbNigQxJvRVvXEYV4TiWzpbmMYjAjsML2xxNstCMvy7we3ipy85zNxXJPF8MNCWuPjXokpk5f",
  "key5": "57WEkarCRZ4uEykgMDavymF52pcKAqrvfXiWvivKxcrzT4iaYyy29HQVyu2pn7rb8Fitd3WXHw86d9srTZQR6o3b",
  "key6": "5Bt26VJRw8hjRr8PyreFzc5UFH2aWW1CUhMdDVuaWdRCSfxbZHiwbfuXbtY2JCChauyGzzDrJrcLVm3d3wECpBFE",
  "key7": "2tziwBMAaEa32r2B4bwtdUdeXWB45BcFkFfAFnXwmHtmk6XogSns8UwytbB8fTC5c6WVUi2FdLUWaRbnhSmK8cwQ",
  "key8": "62GjMdTMwm2FCa33JBo5mAotVtqsbVv2LFRvxCLJsJ9GfoPE4QFp5FfqJaojcxsnmXiNknCsKaYbYEZprS9iTk1W",
  "key9": "3X9DTNH3gVwdtd3Q5NZtqoiJGaq6CjBTXrd9v3rAV4ganfAAdE7VncScKP2eLgJ4zLdHA9SbfjdM2mHxuGsmGb4t",
  "key10": "4fjMcw2N8KEGSVPKAHodNjSLCqwyrGxffHevZfEdAQPjysJz6StEU2wTb2rQdwmeGuK4i4BiVF8GMWxxLudsjaKZ",
  "key11": "4wmtTCBhoCAiLqpFQfTv4Cbepf4CjUeV9fKWZWXTaxwJyG9ymWCqbHAGUgwfmmajnxrtBUK4pwnCbs3MCULb7mff",
  "key12": "UpYqbKijgTojkyfp1Biau1f5fEhjfbT2i8J2q19FXJnTMFqpGuoWXe9sYytRDLq3KXsrDCadZLar2w3JTSiHYuG",
  "key13": "4GVZRTJGxAk9vF5JxNCehQvjqtytadxhSMPJC3pawVsb1kNucVMQrftWBTBTkWKEPQv2iUjsLsvLpdaT1YTwQmLL",
  "key14": "3PVhYNPsSikA5e87xBrt1gTNRmUCnWK4EkMo2KEMzEkRyDuKTe3BUNuP9nMshNeLca6VndTQii3ZLijEHqCLPKs3",
  "key15": "42Qzy2UrJvjHkTh945KB7v8FdWgPwAh4jDkkEy2QcqcrcqmyQarsXf2B7G8DY6Cm2XGSnMTkavYxRPVwUn1Q13Y3",
  "key16": "5pQaR7sXU7Du1uw1bHdk13SkJHwSsNeMpHh8pgcKL1YtQwh4FrD5kbRr4CWREhk67Uu7T1AYKcbi3xs9cDmcbqJQ",
  "key17": "3SzPDZPZ9ikFg9GcD9tEQoDXPtGufmD98aRMB5dSFTDaFmFwvM375oHmCe5QWbQUsDB51uFqXwiZAsfpnuotmLwr",
  "key18": "vsE8vLnj47ChLts8upDiGptYJZfT4cBjUUXEc1xbYBhKK6AkceFv1yW38gz8PiyDMbakmSGr4X5AZ96L4Lkxk1H",
  "key19": "25Zd9tbzKnceRkaL8gqHGavoTGkb9HWA4iGjNWE6uMA1cDr5hb1fttS9gb4Us5TbBW2hoxLQiQKZHCowtrp9PiTc",
  "key20": "La5Q4hVJh6CEsNbP7sVQ51jnKSrmx2ccnY4wqJwCQUpugnaTDX1VxjjTxHFKFJAfuzHXHNdQLDFEb35xkziaNzQ",
  "key21": "KXz4ui7S7yF8cWpyZmCqsZnJGqFLNKW6iFZ7WegMTCGYf7eAVLjKdacgeFf6oE6nqrtCaaFbvnzc4VirYZUfQeR",
  "key22": "qDACmpJXvuVpSraxMzcPj92NthCT7WnGz5UqJD2AbQDRzdYxR2sD4zsQTFhbY4kznxHP89LzXcqu4Kdk9MLDnj4",
  "key23": "44TgdRGiykfMxs4DAYGeQX2xToX2wskxahcA362LhhtS4KrUgpzaRFxDecvifuLTK8caZRtUkKgoqN4s63AaHdMs",
  "key24": "4mE6jbGjCLgteLjvebgAhkisUUbKVHw53Xq74dh9w2qJZFR8MK76UnaqbwxqyzRjhAwv12JD7g3Npb7FhQQrn1gX",
  "key25": "2DU955eSrBwiSUqRSZcL8zc78be7yyvaksSUCKHFsCLYJhB9NAKLDgqpKd5p7kR8CpW9gGiDLyGP9dgUpGe7GNab",
  "key26": "3xmVqENqHW1bg9tn8PXcsRMoGM98ne3T376DY3EivQ9nBuhoetQ3myGESwAPfg9dW66vEEhdkudoh2gVtYtbght5",
  "key27": "2oZuZUEoADKpZYM7Urv1vsqVeRPk7wPzuBonwPD9aEfAq9HpxGk1pRwMwMx4YXryDA4NujbZZsnsy2nbex25wSXo",
  "key28": "3WuPyX5io66UXNmRuNd5pZ3oyGB9xMPA8cfeXxvC9mBGFEE6GEnByRztaLQt99EZ7dh1sXVLraEG9s6s4ikh6V6G",
  "key29": "JJqY8gkfhqyYYETYYu7X1k1mb8ku4gY6awGeUfiHHyDf7ChLKG62kECQCV7KkaTvtMzPZRUDRE87rW1b4mK1XcT",
  "key30": "5WVokjYdqPrwchLRtirvJep1ZWZQoSfUvU8y4anAHyJHMz2Kvb3kZryX3b9aR51ggvxd8iSkaZ87wWirsbEDpXGK",
  "key31": "56NB7WwssXuf6QEnXk2rDC15AnFAZS7HhNbubxigrVN4Hu8VAKFie8RL3NRHw2xvGMyh36neWXnoq7VxhdLza491",
  "key32": "62ANPZ5Yf9RTG7t3GvhsHoZxApeVxC4zNyFMzuF3bEbtrsYcScccWggXRccScPqUt7dL9MEStfK3zsbj2ejsH7hA",
  "key33": "nm1W6Jz6dqFGWTvqXDQw8wKP9MU5wjtKLLx1vMNzSLVMm5rihhCXTeAErykeqcDazz3cBKW9DEzP8j1iUW9SWMH",
  "key34": "7AXwMZ8iSvgVte7EYUrY5H1EWwwTUNa3Xpzu9991c3iFfijHY6XQL7sLBLJ5ECcx2FCSH9bsf1oJNmuvRLDDNbV",
  "key35": "2dBBVemDCpbnpfVKJubKbKzCs695FmXvHDuugUVN34pkvZSVqCQAdAvLvkG9EVgVCsjnRZn8FejFgTvohGmwv7w5",
  "key36": "4NGEUMMVkCRcatgdFY6fHKT3kKaENysgtM4NX8VZ7phTEKj7cxsMcG4yXqmZqrmahWwuLerrQQwbVaNNYz4x8iQP",
  "key37": "4rUPMsxMteubBLirg1iTudfYM1kg4sZz7JAZcDiziMYd6ikn52EXFS83rURwwcJPPXpSEzLCnJeXXGW1pNkapJfr",
  "key38": "2WqV6RT2dDuD9JnEwSGWBU4L9qZNyxwZMweeT4CL3oyK2qDY7cFj2K6RXiQyMLCdknJigx2T5jFLj2yjpRBmkkrv",
  "key39": "3USrQo1dWjp5Cy16JnYFYZcx4Wmpkt28Tmvbi8n8ZnytsKmmJPMPrEPDVmVkdfm7mAZ8aPNWmyCZbYuvbK39upyn",
  "key40": "2PNjmEWGqN9qPQFEKmpPhNB4APhFMFyjdfMvrPPUMdKm3xCaRMH32D57rFL4B8j74ZA23JHZFPTfAC7fsXaD2w2L",
  "key41": "3RnXcNaTJ3YB1PQeuhxhxtuXzmTP3NUPpmNVJLKxCVfgbuqZoShUDW8jrSPir3o2eycSLbiF8S1C7YT3NjTTFNz2",
  "key42": "Qm5nP5DvodXPXd3Yb5EX8a69a4AoFaQFxNvPsSbfjU3UjpkeZhNzqff6zyUg86WLzmLduTY5BFiCrdqnCjTKq2t",
  "key43": "8wDDcYycMiQSSQah3mpvuWipMyjZe4eov34KP6MzsLVDTn1XPKUraaePBAZXF6SgcmNhekznrFi5e6thCTRL8zw",
  "key44": "4rjUbPd4NQpSoBgRCWFjLBXGYgLGfaM2CFk7MFd9PbBiNQEBNqnPjo43BkUh8h1VMrgRMs8RQmmVmUVsLfsFrMSy",
  "key45": "5s9N4AoEf2mhGaaBAohDcr3fMyA5V4zWfMxkLtCdeWsjxypJ14iD9HigWYdJeZYqQAC3mmsJcXG7FwC8VG6BbNuw",
  "key46": "2fbK7sxEDouvm9hLCUyja965psUCpPcoweWKGzK5uAvPuadN92XuuGhpFWNapkBuyADTGpnvGR1MxQWvM7N1W1vE",
  "key47": "3cTS98BQZEo9S9zt1qCbN9XaroxFG4P7oFVT2gJzZkK6P88Dd6pAQ7TmQwyLLCjse4RDUpe5kihTNhVyPVGMWxcC"
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
