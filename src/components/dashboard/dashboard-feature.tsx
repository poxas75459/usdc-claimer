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
    "222S6T4vnMs3pr7TuizvvzS8qempPp1MZZUcnbwcSnqeA4QEViAWSUqR1eWhjooHNconrKjFpzty2TJEsMrpwoyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vGRcmBFpKZWvhzWfV4EXsov2ZZSotHhSPkuygFEKQAiXPSnv1d9Egyv2t2z7wMrZFnFdegBebYvkPGiVyQXB38n",
  "key1": "5iLFF2wwQsf9xdsF2AwMd7Cj6spp5Q1pufQd5LqvXRuzHmWmbQVL9Xh9R2mjp6hkxqrN1HPNoJqg1F7u1cyP18Zz",
  "key2": "2cbWDfyRPppZW8BdzLHhRCJRXxtZtVaBSf3rEcCNTmm3vMsSjtd81zjfymNkfNbzREk3VzW3NwEV5Ak8WTkF6sQo",
  "key3": "3AwGdJ4WMfUtQ2cTrqvFoBXRaWbJiTSKx8ptjw4dsV7K9kPEP7J2uxiNsxLeEG2FRXdmFKDnKZbSJqML4LNDjD4L",
  "key4": "5G11DvyTSL3PTvo6wMBMeKaxxANYwu1qAbwwM45d5JZeQhcXoEKVBuRoXZCKxDiC432jshayX5iU4ifMfDbSkA5X",
  "key5": "3QY4pEjAYDHyp3oZKb2Lkhw18C1Pr7WDdGh66EZPvj2wReNgLyeW9et6bdGHSMrK8i7bUP9zqcZrFmaVNKmeWc2x",
  "key6": "rGYkMHn7L8CYii8EvGPS7UTcR7Lb6wXFKxBQ9uhdbuQKcvrffSq2WQE3q6fkHb6S6fM1k4WgVUZL8W7yJn8Fco8",
  "key7": "53r3GjFYHXhyjqmGVr2aZwzCdnJ4rU7yq2AyGPYWb7BtEZHzuWin2y9juSnjPHQ2YpSt3p8RtJfEFxm8EKFfp7ML",
  "key8": "5qzRPLzSa5f4vfhhqwUEabGEyUAhj5GZWdQuEKo95gUcf3rSEHj8YUtRBox2jAvVu1XfJoTbnGP5W3rHuaaTYMfs",
  "key9": "4Vj4RZ8EK3rLHpkB7J4zh4n55yQByrnNgjWokjH9bVzvgV3N56mxqbuDvX6HQ2QE5q77cABGQMJw1rBycsofvRim",
  "key10": "5EmSGugtnZWZuSDjN2eJHzpFgwG1afBMyabKkkB5jLD7uAPbsMKwqmAmDVCTASeRsQMAeKUnFpZKWGQpwqSH2Xff",
  "key11": "kQBPoyQ3iH2WWufup621vjCQ6ApWd4Nj2hcbYitNUvpLFpkPyEAFjqJkXd7HHgdrupyuah45D7U7d1KWYYH2DJn",
  "key12": "43JjYSKHrNKAgMjL3Tk89iGCrsWyHyCVZuqBDZvkEZDk1LyHf6FyBjTdHAqfJELTqcJqNfPu9k14bU91fb2o8LNP",
  "key13": "22xX5w8JWzTLRXSvR8TX5G8ALs4Ayrq9HiCFRGb13muynQAYJqNngsCnxcfs9JHap1XqX1BcV8bAqQSZLuruVojC",
  "key14": "5DDPe6P2UtTWN25vNfpQP5hstECJMk4xpir9JKhKD1tushudTPbCkKbxPVrHoQNGGvBz8TTT8pekRHehCkCoqteb",
  "key15": "MvtiMpXu7qTLKnmyBD6mvaLYeUDUK1LSiEwXvkcj6Wh6UBu1RXQqoeizfC6kqktX7quTcSwwJPPbPQ6fjKSpr2K",
  "key16": "3w11RgWHcTEnHZwtSBZAaMtZDDZDgL5aHTmH1cRgPByGJQuNf6ZMXpyjKjLoJfAJr6sTD9c5i1d3QgftMKPy9WFC",
  "key17": "5BAWFUWAD7Tj6BEER1kXxaYdHNRjk72QxAZsAZozCdWTUgoeSPG3mG6LTx9mugA32hzib14Libv6NDhi9v1LFcTh",
  "key18": "3uQFkvhyQkSMDGaK9nxwDE5QwEJUWfVAMibvUiNuwfXepDx3iAzFju9YUpqSY5ufAYf1tbmBpE5at3n4dohAVXr1",
  "key19": "3QWaLsKF3F96QMnWff7TPpiatjTbZjWbEfPxQo3b9YvwyR9DQqxPDCQpXBWMUnaUzebLeSGnxDmhGQqUSMoHPmmf",
  "key20": "5w6zy6Yf3BFTQRyrDPwZ1TpN4oAB6GLXyiZ9PA7Yh2MByZAFyihd9dqACTz5JKRv7xaWBaDb7mwX8b1y3fniim7X",
  "key21": "56fNonHSsUzRd77qg9km5SNybprL1injPFY5t5EPZQn4SxhqdKEhBwrK6jm4iFPB1jdyKBBvUHYHmMdNQ3Kxwzno",
  "key22": "77ebADJmrm8Z3fdNf3idjHpT1RRTvzAB6m9jV5ZBx99arNnQVvAvSXdqcWCDHHcXVufFY8AKywgDX9FpvcJmGJ8",
  "key23": "3CVvMATkBTqjWrsDuG7s4YryVR9MwibqYpKZP3pVfwWm9zYWoQfwju1nHFMW7WXbgaDQNj34Xp2ZXndZh49qhegC",
  "key24": "5eBnnkgNAY12xxYqoPE39vBUyD1wFVJkWMgrrH16h5RZUbJaeMax4yxAKxw1kW4WuDVk1qERrnHE86NYdiRYk1An",
  "key25": "23W8RanbcJuoNFQZv8LmmCUk32yxQ5UzQ5emUA3U57Cef7w83YnbanX8Pm4heSp7nWcAjGWHK2bh1n4w5JYnFeQE",
  "key26": "5KZbowkMxjd2E1gCRGvb32jkUdvoYvWXptDCeDfeAumSLrPm2kjD7CGWnUgGXduVsZ1izTb7ac9HS8eS4N9YXZ1m",
  "key27": "4ntuS68PZomAma8tq92eZQA1uxYtwWUEEks2yWYcTSh1gwRD4sj4xcMfXtYQs7Pyq91779uqwZ1cqb4aB6cxCQkE",
  "key28": "5FbVQSfUhYjLiKn3agzpsREPQXmkDmUVDPsSq2rsSHKaoQXL62c5UMwxP5TVLaYqJyann9ffvbL3GMSffhpJenT",
  "key29": "3WnJ8iEnUjBrvXVX7zJ3dZE7zVV1BqXdCyU7X9xeK4di8BK4WsvBvsFiXUFjgKvVkNZhiMDydDuHUz6x1y4vPkB4",
  "key30": "3Fdrnq4XvUYka55HhcFHbU9vbxMWXPoJc7RmWvbFqfr6cqmY414RwuwtEV6C5BcycxbVMynR2qpsciVkVz5epQkL",
  "key31": "brNRWkrv5yaZMsRGSNrzW3bKe3YTz1vs2qxQNv39t8unNyJQnbsRmP9edLRAX7b7PEtgA31QMGvPU6UPGBhqhqV",
  "key32": "47EJaSEysTtcM4j9mGTpyLpzFByjdTBr7uKvohTFLZzu9Ku9MB8XTUvGQoZ3M7yfHPQWbuk5wfMSbvjrEFjScESi",
  "key33": "4b1bMZGqVVQRX1p27VBdAqhsxmcJR898MiiG5w7mnptKh18hAMiSJJJbdrdG3i7ETX9XnnCyiAoBrdhgGxmyGEph",
  "key34": "53rSG4iaGgLzm3SRUNZaddNxSj41nNe5whXrwfNP7f2m2DBjTRwgGNfrK2fXm7h8Bkb6D9m1o3vd2N1HxucCVqWG",
  "key35": "4RTEPH47muCYeRWSe6MJZPYrvXY4TCtJWiwpsR6yk8dCfCq696ic5ohxc8vwrpWHh7ni6Hbbp6ooz5uQRcrxtc9s",
  "key36": "QTJNJryZHEomtdH4xUv1toSEfsvmFsQJ461HxKticAoPLwoVLt1pLuLyN2Rm41136gC7Z2rRJZdDyrAskY1QKPc",
  "key37": "2Z71BqyxiDythZVH4p9XjbDVTDJpE396swrVACTXTF5eKdNhCqfjS3FbwEFgpxP2mUyAbseibgBjPiXPYrBdMeGE",
  "key38": "4TzLz3pHhH4kJ1wiFrSVjwLi2KHSMtZJoQHQUX9oR9Y7ZDxGDVApeCEYKHMiFk62bnkzrBGLvGdMonYrpRfrh5TC",
  "key39": "23vmHcroEK3ow72WyYzvon7LAZTEUyyUWPL7k8YQKAKyJQrNHVw7u7vRpAK4i8SxP11YqUoWoQFuw6BJtFDpZpAU",
  "key40": "NtHauujADPaEUwZu3B6NJ3bSGWBD1frx9bhYUoJjtG6XFc7y55KCF7hqtfh9cHHVnMFTHLv9eVc2dfKrY7VtFQd",
  "key41": "3DGvXHYdiTkkZGm6NWXRS2dNxFF1Xc7Dh1TeoWGAPC4YVccwWCUeoWjXGptzhWXuhQpNMLA1JtZ6SfbQwyYWjes7",
  "key42": "3YWcv9nfJe5dm6LMR5iEiXqbiuUvZT9kFNKJHN4tTyzf7BYwU9UMAvXaRq3xwY8x3cdpA8Tv4ZPiHJiok2EQjZaf",
  "key43": "UvwyoYiMnTx6kanxmUqdnTYjUsTfuvWPTV7UwFy4BdjMtVmnHo7XbL4tRywDwkjRSevEcxduvFRemmykV59JsQL",
  "key44": "47jg8oSATqcCVPTJhAyiZoKA2LwCjYJ5XTTyrAWRVEYbNAZkvY9KdM4VrLXSDvrB8bcXuHpfKNbpvntdj5eRRtTo",
  "key45": "2KTHsQKk5U1iJTfxWyBs23xKQc4pSkN2uSAMsqChuFNNaYyT1ZpZNa5EVidAqhQJ4jWjYahZHQQNPEEWUU1HLRuj",
  "key46": "47Gp8GDaC1sMqPxRKaqT4DDAL5sULhSMvJsDVRbYuvgiJciVbZfynRLaQVd6rqsrpbZTVsvLraCYWfy43r2Lg84w",
  "key47": "2DDdVyEyMsDoYnsK13iA5dFts8GmtcNLViKFie1DwkK2Yo3rszXgJp95VYmJ8zyMkBmYZxCD2MbYgniQW1751GY",
  "key48": "36tXqfqUqkJjy1SpNeFNv9uREBGGfkfis5fkcw7e4Dq8MGZ3WfdSgt2dvuJVDiLZJfrbJ6VahMN8t7tHb5bGHTKh",
  "key49": "4Em7eK9XhioSGDj6UVk2UqkRPn2vD5VKQ3KvULyQ7Ccjwvw8jxdShhdXfS6h699pYYLeQL3QmKyE8U5TizgxNd1W"
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
