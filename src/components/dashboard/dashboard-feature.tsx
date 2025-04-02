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
    "4sTGcoB9d5WGrn5BRgqLjysc3ZW6joKw9EFvMP6EEGpj5QM9AKH2J4okB8KR7H84hZZkzRTapTsnGFd42LbkTnTn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABFuwm7HmDZjbzYW97LPUQD2TWLx83Qn2k2nDzTLQfkeXjGXm5nwR9cLZ4b6PCZkFmGgi1z7podLcKtuwS94LYd",
  "key1": "2vh1UbJnoDGuDo9SBuCx7mLtDLoxTnEV3bE85XsUnBMWp537sacbko6g2MhioH59aDFCzbrj98YGdeGTb2jsTEoi",
  "key2": "4iWsbamoev9akZKkmud9uFwviGN2s8VA6rDXxw2mDptda23cASH3ooXULLHFJwSMzSUQzWqna99qPxYEw1Fyc81N",
  "key3": "2CzLtFF5oDUNxGte7dpw7jq68MgFVoCVoE3PdXS22TTWHqs25dou11i9537m2agqNh3V6b3rpGcr9XfvU3KxS5FJ",
  "key4": "5k6vEJXeduEV5P83TVZbLJYTX3mYcPHLN95VhyFfFs7vZjwxZknJaazsb1pz2YWa6V9Fb4PhccDPeBJcdavkcYyv",
  "key5": "56vu53bX2z9KD5N4brZeTATzPHWKEciTAquQ9AjCuUYtW7KmRWs4Qu4y9FN9bputh7ZZEx2qUg8HCvLC6ERcQCuL",
  "key6": "8ddanbiuBMYJDLYxrNqWodw3jN1y3fuoJS3hme7nYL3oxZqxDDEnKyu33w1w4cv7eiLW6Rfd72KSSd9NbqitzCb",
  "key7": "5d925zc4KSKrLB1caZeRVFwc1aLM9pZaVbWsM3zcArFQ4fB3HSYSkwKT9oqYpUtnEPwp17jJjcpkB57mjc4NTZFY",
  "key8": "Vq5vxM14cVq15p23Dp8VnJfVrKWw2Wa4hsfvh9irYQP2dUprfFeFxMaX7ATYAt7fjmUaph6WrgE6qgeG7QujaUx",
  "key9": "2RNfr1SYEnkVqMoCFErnnLLbrphojUea5ZaVAQdhL3L54ZXFqYGTKLBSU1avs4d2kRv7o1hnXMPUa5p7XCCW95Cx",
  "key10": "6BCfBdYB3tgPGcCsq5M4n5EC7H49WMmfLR3pyqxzucWzxWoHRxrxiQnRWhU4yS6jnnQgsz3QaSRxhytvDpBHhFF",
  "key11": "5vpiriZqM765WiakZM6jxJAH2xWyPzbhg9hfRKjnKdBWkEWMBvkmqe4MaTGsqQTsArHAw4VPGUGD6qLPaBwm6PVQ",
  "key12": "3WyJLWLnDdZVAJGNWu7U3t4TdkFpntvRDcnMkmtkwhRxTbqinH7ujfCiPYmKSo8kjNhbjNftPH5XrrJ7M7ZmNVk",
  "key13": "4nCd7fBHHSojAyCpBCqEXzTdYy3H735uZhFfHV4HxwjYopFDP9U6YRVmRs6UNWaJkkUVrEYPjzE4dD3n5aW1VDBo",
  "key14": "37xPcEmfo322ZhgFfa82atTW66A4MMXM2M8suK4MLm7eNDmXMT2Q6re6PBPVtkoWjhv2BunTqM8J4eRRk8m77DVm",
  "key15": "28LKXZZeCRdT3axaivreVUKShVMzbjTYHJXk21zzezrB728BFWnoSNzyeYsjHwk6tG4ybi6NBQno96BXtHet9sR1",
  "key16": "3vCfJwgoDuAPaBCAsrReeu1bzZ9pgf7xNcGPm1U66L8fNqzb9YhRVXuw8T672PiSbQKhTXXizs8o96zXYmthF7zE",
  "key17": "4u4Vh81QC6Q92Tq2HX5v6PVDj6VLz6Hp9XABX3nXtk4ag5mP6qYgkLvuoQydVffCNJpSiiJ8dwvxaW47YAFUvg3k",
  "key18": "2ZQoGWvpbniXz4Ec5nRTGMwaGsAjbpHy8LeWZNB8jVDcazrhdcjCuvFEM7p1LphJmtY6yVC2TXRwc6k7SNsJRKyy",
  "key19": "2iiCfX7vX3RXhsKTB3G9f9Zx1UnXH8rEM9cEHe4UnxfRCy5BsjCp2eoorduAHRMGqK2geeaKx6wVdyzb46HGGLuD",
  "key20": "5sMPtWAeEBohpyYpjywP7Dd2KAmwA4FEBZAbjhZreAnpVuVZukhwuwYLNMeQdKQnHgidKWY6QUTe7iwYT9oeHsqm",
  "key21": "2EUEor3LgEEWEQKf59F5thmKLbtdFY1dBhsLdZ6fLGcio6ryNeew4kSzZrvSve9U1zHKBnsr2EZf4xjHcJLyncSS",
  "key22": "5zFtQRSTeaow42JmHXU6XLEtPeQRDrD9z2LwW7Q2qwAK1kNmPbAFW4KiMayvzzBq1XzK46EPfFpLSyYnPkSGmZmS",
  "key23": "4EcdRHUQ35AbYxR8iGirBJfCRqjoagwRvPW2MFdAQisdV5pCZnUjtjUX55QAAUzDoB1C54Kf9AcF9ZRUHkPNy8Qi",
  "key24": "4fi2HnB64dBFuY6p592RjrXrtUoByZEmuHCChZHfitEQKnUHjWXqrr8dzMUi3eoLez6Uy3insHA9UkbDa91TCKaA",
  "key25": "378WonjHMPps4xKmuL1tpK7RsCy3tjwXuQEVr7D4mzwAPXsekq2MhtBt4GXvFaLzLVYrnMgimbp4MPBE352MuTNo",
  "key26": "4vx8TsQe86kee3UCHMY8A17mqRWAtd1JsdGVGL4vJJdPSyzfVgTA9vinmFZ2U22K7jFZ7gnJHB4h68Qk8oYkSzp2",
  "key27": "MaN7ompue67XZXe8tceCT9fgCGPaaG5Yn6G5noMHqH8TZM8s1f7YcnwbYb6qTQTadBpME6GjAZjjnosQ7fh4qi5",
  "key28": "4rPthMCozULBsCuU6ZqiDE4TzUjTRM3Eo2hSY8BJrC5W9dXyHv6jSXQLewYNMFSr2zoAmGbD92TGFTF3E5EDc3bj",
  "key29": "5YShk7U3hDzvi7Vm1worqo36UzEgBL3DwURBX9pabwZ7Y2DugZVkBkjLJaBJPXvwexUxdr4FezYvqV2RDbrZc8VJ",
  "key30": "2H6wXhPwAujFN6mcxJrqyzziFMEbuh4UGbXg7oeSfJJFfEAWqeTvZnXVdA3wcyUyNDgNXbtn3UxGGDdx3HEdMcn",
  "key31": "2SFDCZhCkcsC5hhVKqBSpbqPsMV2yTHL8mSRpzJBMiRq8mvMWmMkpbHyLKpctRwmvZXgA4veYtygndRVAg3msjxN",
  "key32": "29Q4JSYKkmGRw92YMHLNyac15HdNPnmZkniZEZw2GE1xZsrEnGCoWkrdPpcLAobnyN2KK1aiA6fUMjCBbRi6dQn9",
  "key33": "58GQ9VyRoDAYPkCc3pXCbr4Z1mDm5rUpYPfx5wE1P43cqWr7utRqqWzQNtDVZcB25dxxWpEfi2tRmBBZviw3zVKG",
  "key34": "2TmsQsvRehpg6q8LFAv9zN1kJ7VER1VNZgqsUf7dYkuginBniNEPzv9VVpqh5ooRqurbVTsyeMqtGLgf18jYgd3e",
  "key35": "UL5swhRtiT69JuEAfP1ftpbSj9UGmJpvnr376LjJLuheEqAGNBgGGLWmG6fuiWHWaVcYDhGZxVWkLZo5iB2iLG7",
  "key36": "5qb5CoYS4ydRTmj94B1122QDnerwHHwhdu5nCtsiV3TaL31pKZEhKPHyLpsfDEKEvPNNHTDEisDPVHKhVSEWjsDE",
  "key37": "4eip8ceAvnAkLvLK7eCUXEmRyk4tY61yS4mK4nHcnnNF8BhhrKA8ZrjSVMEkrzxKhpq6RPJRquVam8bTyxYGPmrU",
  "key38": "5dKT7JZxDQmiN5QWkuUoUXzX1e7LhAGh7aVeaaSZFgTHkLmCXKcdFTTVNmnaairs8vCRvUaSvrSFvX7XKrnSNUds",
  "key39": "4Hfs91SJLkiK6k8ehV1HRkdxX5PYnZo7VRrjoUjVBMHJtAEYmU8R2sbYjojs9BectqfjZHA88Qu7Zu8XbS9o5JNm",
  "key40": "26wMeUfKjbNtkNppUtxTKYTCQ74g5BiRxNrpcbCr1iamQAPfTHwkYWmcjFm2G1Z7vZyhYzpWDms8xkkj5aXUKZg8",
  "key41": "2NN42m4VuEXiNw1CGdGCsDdrYESBphdcxnK8Wy6hsmpnWKBjjcJSM7m7dtzYEePupakrFse8G473TxFF2L5QDdjB",
  "key42": "4mrzxrF7TSVFYHr8KR3akDKMBXXc4GpTHq4ngGifNVG21Xk8UE7SjAWjgPRFLgm521idJqfm6cG2HW1TCP1HUEtk",
  "key43": "5cZh5eVJ7VbhsZXoMN3R2rEuP6Q1xNnrdKccXKM4LT1Xga7SwLscJ4quPXMrb8VLpkUCQaFCD3Y2kWGrfCyAQGKL",
  "key44": "zZxXwQyfc3RRUbg9TLzdzrzWJtfjVPnzaEANQoKFbXNnb4garASmMEs61ThVxJb73WiRYz7hFvvVohz8P2D2vU9",
  "key45": "dufn74bwSgUdhn3bEZq3kx5ykJ8iSCASga1xpri159J1DnZC3fxbPcLugRbZCM3yvwkCnUTbsdWxXRjWai9PX81",
  "key46": "PabvDkjTSuHHyDZoymWStWDas7EfxYXkesVBd9a3JLfjecEmuGsnWmqyrRXbUP36DUv1aXFJwoSyVyQcbAjtNPz",
  "key47": "24waYD5UuXjNLGq6Ji9z31ZH56h5bzo26vmCZjJci8Fhbedp772pKkXm9S5H4RJ9UUcpNTbGp6nv6NJT9CNw2jDR",
  "key48": "4rnNqt2FWixvgJtzdQTGqm8qzRJX3vJ8H9dPFwRsDJWfy3Tmpoxrbo6uVPHA1EMFzBkSRAGV7iJz4HDipTk1Wj3S"
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
