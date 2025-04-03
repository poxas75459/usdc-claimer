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
    "oSkCCGBg15zcwmwypqZYqtfYS88T3BjvNEZKRbyZvDaGSaoearDFs431ceAcpaTYDPiMTU4VyoeCLotxANVwTej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Lu6pturaRWFfpAKxaHy1523LC8EVQk6UZUohAFS1bxgmNj6NAff3412id5Jrzar85C6XXJPM3vAouBTSvmtc5m",
  "key1": "5Mn7QTb9maXLiWUaM2rATLiPDuJo3L3eNYmqaeD6FXzC6A6XAo3NjdgEE2wUqXWjeoRmxdoKYazHtrgwPCv7C16i",
  "key2": "3jEgiXSZC9mtGkg91EUbLPVjNutJLEU4B9LqwQEph4aYvVUGnWqsbct21rK2AH5pi7UNjfCwzbhy9GEKmsteudQh",
  "key3": "sxPmJnBYQyoiwXbgAN9hR1eLmTA6ywBu4EBJaMAN37Csa9zrHJjX5b6HDDyABLKKAv8t1VqAsUkXAeQy2PFbRjd",
  "key4": "2YS4kwccG9ADmAvZjCPC41Qk1Zro5cKnDPGk77ZhZiHc7F8CzGWi7pzXmaySCwZ2FMop8Cjt47X79c8TAXV2PnNs",
  "key5": "5WZLFBXPHLLNM686ckWgbkTwVXbSUnkc2cpai3FQDV9unacHA6AcitPCEGUjf3u6CmewjUbipv57rwjXbUcnEmji",
  "key6": "2wRCJjD2pTAtMpjFa2gygcJJTAkzHifVBjbWuVCPWTG25JW1iCwV76iNKWkqAB2v8AU5pRR3TX4U1a2Yw457BFTo",
  "key7": "vRVdVVUfXJYnPT1JppmpzJhPnXeQJDEx3GJQVYboNc1LRCvC8QZ7Lyyqiqg3MZPN3JGVvgd9Tv4i8AFV7vunkpX",
  "key8": "3KqJ4tinynYHybFpcuKqx32fprtXeLRywKGogHhAWkMkbLHXguMDu63dUHzHyYrqnEP2gCD6ez1GZCahLXRk112p",
  "key9": "rjDLcfrv6d3TgH2zShR2Wvin65ZiLezuT8qn7LSN5K3ZQAiLLRYDgsYcEm7hhN9xnnZk1h9KLpVEZqA53Gsujvc",
  "key10": "2AB2oeagZBrvNTnGM9AsRYN8Y2mpwWqmgq9QqZZLZcSm9w9zPSMDZ6sdP8NP5dbi44GXWLjpaBBrXf78NqF6ten7",
  "key11": "3jWNmNfhbS6JAwT1LwuiXaJPoKFwRj62BPp3stu3KEKBXTfFypAv4WBqq2jDHxBrGHfeCT7Z8cMgDyMzw8kanY1u",
  "key12": "4Vp4tib5e7i9fyrZHGjJnqgLvZYMsoChWapyVh2QQqAkBM2redeKyTvX4EPdxjDRD4J7K92H7BDRrYBJhygNpW5m",
  "key13": "4zExpJPQMNU8f22kJX6jupnkprwic5RZaA3L9uCsZk45tT3ZjM2uCeZEWxpjYwSHMmGC67niXzSwmKSaX6KCZx8G",
  "key14": "2gXcnkKbd3ZBbnXSgGmVsTPVE8AtzQno9G78FAo5VQEME696dWAFHkfz6AoKzh8t8bMyaFBgTyxfYhVJg2Q94Q3H",
  "key15": "SJFxdTaKCkkdBa4dR1wut8qVM4WCZ49cHHfWHFvGAa1Yxh9vbcYSNpRvjXBpRhiCPYG3ePPeguiM2tm8t6QwokL",
  "key16": "vZP44BhRpmZJGnyVxHp7CTQxExDia2QkefY3E1XSAFHZv2ntSoHjj6DosKM1wBfnbsTS2D7YpTwSG1gDGYcJd87",
  "key17": "2AoehiHGpoi6BDcbNozs5SpDEuBYnsySJ74n2qGai6F7xyMvkbgcQSSJ4TXZ44PMFtPugWYju8biUq24r4pny6EU",
  "key18": "54L93gcyxE7FiH7mQ7ptgfkFGWu9tbEXnXRmE5tsMzUvHw9TGreiXkRkk8goCgTm4y8McFaLPyu5pWtKnSmBAdJG",
  "key19": "3FJCCUhAjsVafyvkyRdVBKFkX4UCk1CeiEEu5HmvixFWaUQntFfaGuCvaxybKM4oawnGF7Ef1iyfaZQeZHm5CnXR",
  "key20": "5tHD6U3AhCDG7ePFJHaTxSKbHmKdTgKri1PHwF8PnU4pYHNTzZyrKYwsayaFQRkcY8mzfvRp7eNkeE6Ya8usFVfa",
  "key21": "5FfAyQedKAPyv1pxEk6xSUjgKWogJ5X7e8Shpeyt4PSySeAyzr7JgCGCBwnXBfku8zYh2fE5hR45FYp7SumGQmyr",
  "key22": "4NgGomCHC32UhCVBZg8ojRQohMNjJxoPkFuwFnhvwVuuVYpBea6yuqw87ZP1VqBYdS4zzbZPphFa3Gwmfxa6UiEp",
  "key23": "4iy29StC6N934QTm5azrUro6g1Dvq9d2HfwpsHJgvMgps1pkKU2rKWX4orAd9evssQjqNGnGixx3gvZapFDR6Uwn",
  "key24": "5MenJS77kwznmvoXPMRU1CnAE7urjFLP9PFr7EuBEnAioED8WSfDZNEjuf8tGedvhsAMuRZAN9mp4y69Yc6FUj9w",
  "key25": "59Px7sCxZyrCEdo6w7omzpLFvLJtRRFyLPnksu7NkBSFhpoq7UbRtBNARG55Th5JeTRGTvjtzJyMc1VTFDBcZyqx",
  "key26": "3ExwUF27bMzhPfkXDNvHaMWgFcGZgEx3XsFzaK4vz3zomJLstrY81bijdcT1nTXxB7KnhsiVvNFupr4Kyt1mQBCz",
  "key27": "5yE868SAxaSDFFtYNyZyWRSKUSxY1CvzhCHQAD5NvJBpN2mjRjUVqbxow5Z6nUzXsgLhh8ssvwvBbX4SYTbP1nHj",
  "key28": "2h9tc4ZJKswgBqvx4fFikocvy4ryaVCPtt44A8sS7SrrHRcC1mgandsaJSxn2wbASqWAqWwPNY8hmbThfnqrsEKU",
  "key29": "2axkfMvxcNja1AWrxttQpf4u6RPiHteh2JD8w3tQt957fjptKcXdDFWFdXzmmcfF2SqkVP4ucvamhb6FEgrKAZa5",
  "key30": "3oq4ZaVqCtmWnMgvb7pbPrrm1VQqWnnRT4GhH4JvczX3ZzmrLFeVaS91SR82EgroK2JrkiWga2RJEpVYw5q1WyVP",
  "key31": "22W3iR3AZ8gdsduNzHZ4hxWDCeHpGPvVdNayoGmR8yZPi1A74bLXKfSPwL174GFzucXAqSEiNnNy6ss62UiwC1pm",
  "key32": "w9zYjHufBxacGq4ipedmUNjpUhbD34Nak9X85HzkZ4bEv46cmMCzYGbXdjkfsfGrP1bKEGex2hmfrDwxPYBR4MU",
  "key33": "28p4n5EVTXSCqa3RtXAiitvQgH3KFkjAx7xBzweVH2wUXXNr1NkNxff3ccUBkGRPrYZSfbTWegYejCxFvGg2dYZx",
  "key34": "5nVEb88LNGnhitd43zi81sEA7TkqEQRen4VQVnApL5mHPiB3p8Xcebw195NvWxGT6XkCsmcWVpwaCxpQmfM413nk",
  "key35": "3SxBVn3qKgmZKJFaPiQPA3U4A8xU4A1itJpjsvZGnn67bK35u6rL96w7RemxUbRvjskHT2WDf8nHo5MCBv4smLw9",
  "key36": "2Ca4U4ZQuAHGvtihGP6cP6GmrseJnf1p4PbgnDWTx1kK2DBprCtYGWWgTsUcMWUnUPufgPSWUHtKB6BaHv4NA3Ki",
  "key37": "3pM5iEyg6EEctBSpZdyjx45aKMieiPt8sTqeqWBCeQR4fEhAL4GzaAuKgmwVsQwLc8s4S6vwkrKyHy6XRzMhuWFm",
  "key38": "wk45kv1i9a64AtBEWBubNgCAomfzLdGmyGVtK5Txww8f6UmoREFUkP7UV8Br4DfEqYJ7MSinup21f7Db5zn6e3K",
  "key39": "4dCqNMdCiBTynBY3KidKezHj3CGGMuf2kzWQEWMtZB3Zekw19XvTKrXQXvzrWnM7EEcZdaifNnkLvAEqVcQwEFZh",
  "key40": "vxoq8pxPek8NDPFojEHsKkKCCxYhRUH2Y8wtv1Gmy5F4WvPEcsvQRoJVVBZVsAJh2PhGLcnQAeNpi8b2APaq1mu",
  "key41": "4FixH73kxopT5Jfso5X1VeGVGQBxkqfmaXNMHDzaQZ23Anf6EdabrsLk3BmHRDAu2MTavGCjr52vSZ3d5e52LQG7",
  "key42": "2nN5kX6MJeYmVACLid2tdsupGuyMByuYD12MM1qNShftWg4M9oZG7auWn7wtncF98LCXM9oBJNaSwQffso1abzQj",
  "key43": "2ru3v52EUkngctwsF4KNbsUQ9fMEi3kNGu9ZJpsYd4EKud7Zw18NQyds4PPRK6oCnhMWeRDVbTan8LPPM6DDKicT",
  "key44": "53JGsXUD9i9wB18Mx8GEsvdiU8P8cMUBkZSBvqMoNxjavaa6gtoe6zmJno9iYJRMU7yPYRnRw1vWjgZPr73ZgPQA",
  "key45": "3mx7aryt2uWV3p73NeYkie9xTjh53D2bpUfEM2iJU5wQzCYVyDvJVogkhQrRD94a7yiDFDCwNgei3DpwbwwdCHRe",
  "key46": "4cyS7hB778JozE7dxQrq4scV2baWJ7oRnUedB4bNeHaP6M9MipyXHvUWvEmxYG337w3XkMFiDuC5KSjv4x73WRYr",
  "key47": "34GkLVRP5L27oVQtSw9h9nmVUWF3zZmk4SjwFsytD1adQhzJwWcedkj9mJU6cDbgmnkqWeRHPwPZpc6f984GprPH",
  "key48": "4j4pB4tJLiSG8Cbr6tzEEfqbiMG1BWwzxSkHkYW2f4o1w2a2doyjBVQWS3Et2ucdNv3Juuy7NEcBzoWocHov9tGr",
  "key49": "43Lq9eXSUZzk85bEtbjUTvRBVjZw2FWA33oHsZjLGDi54Rvoqq14fqPonU7Cvf2KsoK5JFUCDhY1VfWhSXS8Vocm"
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
