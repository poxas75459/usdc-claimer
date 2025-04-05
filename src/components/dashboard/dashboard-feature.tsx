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
    "Q49mFE65hL7c4MjUcrLhprCHd5qGNEC3GVgrPR8DFPQo4vDx8xsM9uc5yuE7PPQvQ2EAxANyk5uEtopLbqV15au"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FdEymU42r7ZXH121JNBVXTFiA8SE9qLDZSkhYVZMabkL3jzcpa7mLWPWr8VWF5QYjftKQ4PEaYfwhghYfKehewz",
  "key1": "5EMKFiEg8KYFZhYqbn3wVWsfifkozeQhbdq2ce24usTxiAMNaGgaCKAYHuoGAmiM4Z2nGnGNGnnKiDCjRHUVKDfK",
  "key2": "5dugANQzYJepDP8Xxp9CuYGv7jyqNXKaBhPaF6Gp8Q8eJVkCCg5t3DcCTWb6uVqiLVuuFsFF1A8hqC5qZnpdtxwU",
  "key3": "4s46cG9LkCeb8cDwfGXfzxtYg6XE9YL4qmz2mEmW5SDrXjmy12EXd67Vr2uMDykZfh1LHA8H1RmuGyLta4i72qoM",
  "key4": "5dY6SG7Sr7MfX1DJzjNMQeQv1Xjw3CYY4eHB8pwceWZqPNB7PgwKsNF7tGAeAeCwvNQySg7tEeUpUr5EEgX5ETC4",
  "key5": "3D2ZTMccipoThSFBpDdCjd3SpBvoVLDfXoc4Z6SqwGz7b9KhWvknsFaVWkMTdR5MSxDL3SdxSLEwgHW467zQYx1k",
  "key6": "jFwamx3Hx5pGBo99pgkmiLb5KednTgt9tsdAN8DtifUyF3dBJHRd6FetD94gcz3jVnzAHiQMMxDjQJpzbsdnDr9",
  "key7": "3nh7amRf26SGrWwjW2pEpEyXLavEEPT5q4EHsC93oVk57Bv4QCfBj6n9F2wZn26h35PY4uaS8WPwyyv5bmeC9SAi",
  "key8": "129E32vrxeUi7PJ26j9gDhTMX9YwFBLSU3LjpjnRoHFL2nbHP8a42PcLGAR2jXng36XrWwaHrRmqFM1Qr9RbwDZh",
  "key9": "2WonqrNcTP22XtpVkcJBn31ai1UtHjXv24MgDQwbRBHMRdR7QVNiHrMdESNp5bqgiXZc6bjb4R9yVDxLATdBMfdA",
  "key10": "4qutLDviyDxej6zDVG29VA9zLp8S8pqHqxG4gcVKybp5SqurRTdvV6oFwYYG8wzsjcgoA7nJGERvxAu8A5JJjWcG",
  "key11": "2SAkWMunzShbq9ohSuizccSzZ3mtsMfVLmjWsJbwWFkpyqJMg89m6QKwFV2dQxvUXnH6DoYhYzyRxktErKd8Z3Ah",
  "key12": "64m56byNFwL7X6sizbxg7qVEK2GZSWCuMnrrdd8xRtwpgeApXJNgS7whpx1qSfKyUs2a4U8fYsGU5fZR1AJ6dB6y",
  "key13": "2cPCymU3x2VUw6Axdz2BhB2uCYYhR45ecsZerWCeT1ss79JH1hNCj47cZaZnBH4t95dGX2qusDSktQ77CVXXyNBa",
  "key14": "7wyJjBtzN49tGUz1bgQE7P6pffpjbabZPyDMUJVs9rvaWNZY2PRW9PEbKausUnUrJc978osiBb6mwASqWabqXeY",
  "key15": "4DRF6DTBCLGygfFo9BtNfh7keugZ7NDXErq9YTDS5zEjhqmpja32Wmr1myUCCLvh98nMeJ13qQSMmcqjWamY4wJp",
  "key16": "3mK1GBwG7ehetAXcRzXWPEMG47LiwoEGWVYq7tte7N2pcioqM6c3b9u4GtrRCuWzNVFfxm75H9Wkeb1kyufNfQst",
  "key17": "2T4yp54ezdhJ7DPFXs2sezShZ1rXgtqP2ndY4Hr1K2NbjuxWKG135M1mQWeuyPJh1S7CQBww4Ee19p5gbo5J1umH",
  "key18": "eNja3iiha29AfU1zbctRoW5DumDg6Yzt4G86xNRGwTWSarF5aup36fZCsx3UBQDe7nSQT4kArxpA9jcSvBXC2ub",
  "key19": "Gx3hDMsHPXxcrVo6kMAeugoA329ZFPg23qMszDPtTBZt2D9D4Ur36wuyXLeMghwMEJVPb1oMn7xtavGqhptCdo3",
  "key20": "36DLJid8fL1gFSzs26TfhLjZrAiF8LEHDfKobL4yof37bEewDVcsUTcU6b5pqXFYFB7V4gpLRvnqqvb2T7fgL9f1",
  "key21": "3Q9qzSe2ChgR5pGdaEww1WNvhp8A6X8cb1jjvhGsE82HmkNKKnvGmr4hK5ZTVxiJ3NXyjUVXMowXoKqNwx1s9N4g",
  "key22": "49BJ3Vmg2uTPW8Twxn8ijHitkNmNVYTZCBxncYsQDeCWjmEzoAgFJtcuXFEmbvrTFxcfzAE91GRAvV7VHdAMY4Ko",
  "key23": "4wTK5vcUgP5kPiTas8K4MP7CJDc8YCYajtyn56ystSgdGr2u2FKcFHAeertvYnSYhMbx4Uhrfjrt9ZbX6K3bPbQb",
  "key24": "2M6oHz8CBYDjknvBbZirKZWaRMvmWFiopWkVrKQihhsHzK6bAg2pw9yHsPEcatvXsVf8P5qnjuXy7P2BsuDPJxpJ",
  "key25": "2ASYNi8ARkw2ASrfCZFjChiTPhqm7WTmhQ9qxiM1LGp2ZqQcNiSN8VNrwU5QcLYmH6DZJzeWZTQGugmgsoXjbagT",
  "key26": "3xSJjCDHBCc7b4gQU59GZPPqvuQzHkQ2F5XsL1qirNusi52WxNLeU8sGLgTRZA2LYgXsmMcvxeTw8Q7aKsi7k4Ai",
  "key27": "tyYKtS5XTsZWTmFaPrW8HLGqXb9S9F8mWx57KgP6poWHvGm79ppt7crpHiiGPQZxirCZRxLVuKUHsx6cZvGrpMm",
  "key28": "4PveyaQhKN8LMSbbGDbbv1Xqvu8LJpmqtZJjcLQZuGnThmZbHP7L3e8nHBEJovtiHibzn6U44Xx9iHTcwbdwvjtj",
  "key29": "Aqokqu8PCHTCdyd1bGZePXEavFXtrMKAvt1MtiLGBdCPzpvoHcrv5rUSo395SskWRURaVckWtj7V9CKcDBgiXAo",
  "key30": "67bBr6dmLUitzP8ApcNcgwuhof6R6Lka9a65VDUzDwVuF9EEKqKMGzJK1PsWAiDSyFdpmrK3z65sGehLo7wUEYkw",
  "key31": "2PNVTVHjrmYEwZawtFVwsQuFtNcxaQToTh4EstZbfswS7mHkxrF35vX3J3VSoWpXVo9jVHrsWp8F1NDnQiheCeub",
  "key32": "2HGK42JWAoFP95pTs4JLeJyt1dDSMYtJqFiFQuCgQZKdn69USFsTjK8MGt9vHkAMSUNqENGXCZj9LMKfAMY6j4QS",
  "key33": "555aGzcQtMku3JYNtybbJYiLs8JnmHSK6qAmw6ZNszKk2DYSeiiqAV7Rq9U37G7QpCyBjN3vrEQyFxkAtUJrqxVM",
  "key34": "3dQWbrV8nUboTZjMgAoCAgmaPeoYA2QtCGrtj7XUqYn4q44LMnAyGv8immiwANT1EeSGPRHHdvh4FvwrGoMRQG4z",
  "key35": "ZZbDFuecSC1qMRDqCxdcY8ujNHZ8KUBAj1iGNBKTSGB3kNKR3XxTTbKZYtuK1QRCqGe38hA4GhjibizJwSNcPxh",
  "key36": "3PfV8zoA275ALZZefYyHEe3aLAXuSAM89QfUF4DaS54246fvi3igjQcv7ixftepet9YkmQyLkwqzWXn3rerxA2u7",
  "key37": "4XfT4X8WP8KTmXKFZJtdyYcjRs4uZFhxx96GVyG6GxKVt8Ew2HDfXX2TyrnpNMTvdgqEZHiEjx18h2qPaGj9Zo6R",
  "key38": "5iHWrUbyu1KtmhXdvFwHXb5vTuyYs2jyReGmEqjZ2p7z83MVHaWHxo25LpdtFofBSYGbSBDw6aH1yzicoZ45ptd2",
  "key39": "5N1KaR49mEZrbmY38F7nJwJ2HZBaFSRxSXVEzdJq4BzdzP1iZotZVEYqWnQ2YP9ufCFXu66Ncy8tHusGgzZb1mJy",
  "key40": "4QJhJUoBuSpVhSg9iK7fFvggUX1DccNRiCa7d2DUbLf4BHpxpJDce4adDwo16L8EoSLBGkNHNi5UVGNwpxRLEgbG"
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
