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
    "2KTYCvmHSATBehBWNw33qrrF6oWZfN26KViYePoL2AfTEvNXFyU2PBD8sZNkry8fMtVnDLAMjCZPxM29KQxDeZcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4aXhetW2vMCBouH9AoScGGeyeJpmpGpybvPYXriCXPJu9y9nGX4hpvqJUxkPe7qm8RoucALrzeshQ3t8rmrw6t",
  "key1": "2kQvEVZPNwgXwj1HVSSEENJE7ZLKaDrry5cNG2FDeLwPG9MWdvKd96AkisSego5znYfYKuwkm7jPx7N8CHfdpq1M",
  "key2": "5PWdhEYjZyJ3L7x6Vo684HNKJy4DLQUqaas9dMivqcmcsZD8yNbB338q9CvhTbMyGxGir72W1sEoqc2Rtfbkonxi",
  "key3": "2iKqGfvKZRDsKWWbnL63HMgNd1G5Nx9gUFyZ1nKjk9nkdEa9Yu8LqPyx35WPVxFAEGjtf3DGiy8J3CDZ2pGiPaDS",
  "key4": "4BMyyWJ7BdVi4DiUGfoJRACMZKobzAHVmcdFBXVF2xt1iJR726d5UoHiuetYBigdrF6UFwr68XnwAN4aQRYcFGeH",
  "key5": "2fc294Cuqi9TEMgux7XnzYFYsSsCfo7bWvesdCMr7vJAgqQnJ5XeNPgk5NbkQVeQq1Ee9cGX1VpUkjChBUxGQRgh",
  "key6": "3ritw73e9yjFd9VNzpiW56HV127ZQe1X3iK7TqSiBKoj52xnuT7TevSHPx93yYqZPYAmyWjeBuzmFjtGqTmYZknb",
  "key7": "4XsuV7xcwtNcayVuLSLvygeAepVjSXBnMY3FzouhsCaVTg4hphEka9dmAcMDyiJZiz8RvSVcJzzSGpCM7ZtMfiq5",
  "key8": "3Q6UVnp11heXLGWCN4qtKsdvLzCbX1EnfSbE7kgiWGXEZ6r37rg2dXmjQ4LL3nzaprQhRyBmiSibL2ETQyzcYDww",
  "key9": "4gwAf6gMN5BnSkwiFRrkmxeF4KZk2FHDQYBy1QfYQNkSdcG1qk7Bw3dANMx1BskS6WYXjuHcLpWJfHK7MvnaZVEJ",
  "key10": "4mRLLBXD4Upp9qCfNpSqTw6gnhX6pkojD38B56Ah14oSGujPWVRnvubTE83Ai2YKFPBpvLGJxtKsz47F658crHF1",
  "key11": "4SaogmKqVM2E2bHGzZU8XTJo4rF1iVnxaJpXbs9M53KnWhm7g7N4w4NFRWP7FxqrNsRq4cq461b5jdYESuuvyN9f",
  "key12": "2FFE8RFpcvieNRFm8xQqxToZH2Eaf9v5pFFdsLpsJcp6aN5pYMAC3fwyDvNmGFcTT9oT1cBdyaaNjibWwJUgfcmm",
  "key13": "46tSTZC62SjTnrhm7iW7ckc3KCQCp9SUqGLMww9WqpmiM5nJ7Zt4PMji1Bw6TYXsDgY5sZyDD1fBZ7VwQWavYEMS",
  "key14": "32anGpkF62V2GjVo3en2UtdMuub2nh1foZkcZNkmoPKno8jGn2nUjkwheEEDfA1tRjx5zHaoF8E7nAmAdbQRZt6Q",
  "key15": "5w6YmAURFBf6cnkX5mQSQrxVEKHFYsBUPupfaJm43jVPVMahSWwb2ycEkvaWs9ME1qpMTgLjiLqVmJPYJ6xqSD8o",
  "key16": "3MEAmrjNgZt1V7gNRan1rS6YjRnPNNcX5B8oMFUkkVXb9PsiJ3qj7hiCFCM7sUwcg12sRMKaCEMw9mSiGsPMe777",
  "key17": "5pxZY9HgxgingwRDnCQnoNoiA8fTCSuHcVpN7rk6yqB2T5pM4RRucsfnr45Qmks8rqDgZcVyYbnieqxzK6R2T5J6",
  "key18": "2CpvAx8qdqPUyKeB2N9KXZwMooeCkf4BjZnofpq4Pd9BNP45GhRsZ7gsE11LNQcGhXsWNsxCfFpbQq5QaTa5Cdx1",
  "key19": "5aPGjDnSZKXKFAj2xk2B4fjjzebYeHZUZDwmnTYo7iiVRr1yfeD3cu3WvEof3dEsR1EvsGWMLuy4mWgHzgptWaBk",
  "key20": "4fGHTyE4aFp7aVGE1MRWqBUuyajSpo8FTt84KtUxKZUv7RYDwjJ6w2sjTShAKfNhMLeHwbMmDXaySyFXpBHoYT25",
  "key21": "4W1AMgKUGj3qyeJyz2peGV9x548uxx36c4Vxof4TcqioxUBqxggbF6gQpffGrSPtmg2GCqYFncuMcc3zAVsHFxoo",
  "key22": "3gx9CsRtknJhagcvFnTZqovhgFu1Zqk3CsqgqQSiGdjtof8h7WTCX6WeZcyGxod2RwErtwxJziJX6UVnXiBYkca9",
  "key23": "4debMY1aEiAstFNyyPfhVd2y2xG5ATfYEDweUaGWPbpoiw3YdYt85iMh8J7GDYXUPFt2EWXD87J2EUCHFR19TF4t",
  "key24": "2D7ysEYzhDnrMtytcgmQERr2oPLy7PcceDbgMR4nbCwrXk9n7Vq1yRWykZwum8SYtSdL9pCBUKnAECiMPt46yZSx",
  "key25": "4RkhP3BQVavvsT6wXLUA2N82GqFaVGicLti3HKa4fsKedweNZLhE36f4AyFNSnzdw6knrb6MNcyQBiCwBe7WA2Kq",
  "key26": "3uW4hWrgCQsf9hanr3dwHzbPsWX5VqSpWcmQozgzXUtgauTxea3Fmqfu5sWgRYYaEcdEjdBdVRH5akKzuRgZcB7M",
  "key27": "U6cgnoJGeWRADkCVPv2nMYnoMYY1J6CuumpRHaBCqyv6ruouf6r7usn3tHc8trijPK1edRdLM2ZyXfVy2GpbhZ5",
  "key28": "krKoP6EpjRWdLCihHUM8fYuY9HkJLRQDitc4Ttqr84p5o98Zoptb5iH1taX6rxgGCbNpLwQnuMewdjNnw12MiFu",
  "key29": "598gYvwNoYSMYgJbyT953HfSihMK8RMBAiHfzKnNof7iMHD4wwatbTKs4JVhKs1LbkbY7BaLX2Wg7pdXz1geGwZL",
  "key30": "2rZ13EpFGfg938dhZrohmuH64qpMRhMsFQRbS8Eix65ZktLdmDbyQQzTd9veYVgmjnMeVdRgnngXKQgfZMTcxnyc",
  "key31": "2keRK1SGNabckNfFxXScnbmFSmNkGLdLuqo3fPRDXtAWoTF6ppdEiB5xTgiQf3JPyJw9G8cH9jfrE4JbRcB9E87W",
  "key32": "5xJvpi1gGq4ZX1LZUjuZoNFZRnTZiY2Lp2oAeZjY1Ca6DPZ2NJPuQWZF4awN6xzeoKkiK5RBMbBXfT7QDtZ3XLd5",
  "key33": "5qURXNBhMwB5Dr6bvDXv7xuKKJ2jzeQiaGnHM332XuGGouaHYSJARmKTunMFhTUJJyQoSMjZ2BkicK8JVCmg8n3V",
  "key34": "2HgTSfh8BHZMbifkEX7fevSzH9o7M8UnNLqn2xeFJy1VP5ffTwY9zNfTSmVhK5YYPkAkf8SoNoEcdWRStDiDLAJm",
  "key35": "ikm7ZjswbGpmoxs4dL2WcNZxq7zSEpwiHhauidw2vJWUct7wZ23EzGXHTu4amnNNEiPs7t31juR7YvHKngwfdka",
  "key36": "5i6Mnyt3KAySfXEhGa5H2MFhoc4ev8ErZWREG8SgnmkTH8o5AGMGWndYSjztsHhCRnZA1WKkfGCTA6Du9zGkLStg",
  "key37": "61m9j6XBv5awex1G3LfBXrLnuLEht1D68N8Eixn6BBLRr8V63i818m8kG15dqC4mPZTz8Q6sq7xy5ApeWNYVLEkR",
  "key38": "LDGASfGhgEhtz6rXXJLXferuWtsULRSZEvxNtMfSBwJ8W3g8fAPStmZfHvCRAKBr5KuW8bWmUpqewc26XFvNwiD",
  "key39": "HUBSh8nbxgDfsj2ifSC8bd4jPqv8KkpibQriwH2bSXsCqpQBYEXKRum6aq5T4Nf6zRi34RD88KALRZaRPSW9tD2",
  "key40": "5q2zEsUPrkPJJWhsmTPXAtT15HYMnCEBnhM8BQfyZzPEyDVYnfcXkgAJmu2oj5ywLH6dtTUhqppUEQD7CXDBUHvv",
  "key41": "5i27mgBTndShJwpcSo9k7o9V2JsV1LEv9EUEQ2XxMbsi736r3jqLBxnGSx512ciwa1JfwRHgkAsgmsFuTyLyg7H8",
  "key42": "32cc5Hdt5F9wFEUnbb1LLP9Y4UTnKpdjx17uagDG921Lsam1KFG7RxwjPUjrY4PoWWE6S4hL6onVLSX5u4jJz2k2",
  "key43": "U4mmaDzgdBzAt5a455DWnZKzyyEUN9JfMYK7hd9J2VWKYxagwsKR9yJ6CEcQBd8A2bnThHG4T6ApE58kE5QmCK2",
  "key44": "Qt3K67oEEDcQeyMRQ3ZKENfZkbgsN5GEJq7fFM4m2eFxFFckY7KSp12G51FSo6iEEdr2HAHQsLmVKCBBKbokzHp",
  "key45": "GjEitAGcYoBMbP3vtwLnboEMtxFXp7MVqyGr1DupNHcww446VQJQd1x365SagvQkBvQ7Y4cg3W9KD3iyp5sDzAv",
  "key46": "3KRRfMDnw9u1xztbJN9Cn7nyNuvzeZrf4TDBKDfmYhLnJPgJ58FrQE4TEUVxEVFktWNGBAn8kvHde5veWTvNJjtJ",
  "key47": "4kkzaj1uihDK33rSujWyKiGSW2RbbCpBp1XT4KUdJLNFBEw7tZHDXP7zt9gXGJKkv6tehnDjNsQ7fzVKxMBuCC46",
  "key48": "22myS2o8JyZpfSv8x6FjgFMVTCB3YL5bk5BBE7vQCoYq7DgQF6FumXTCSkYsVfTYjUvBrAaETUfDbgXByQiPUJKQ",
  "key49": "4KVh3XfVtFeRELTjeAtctTJ1jnEySWpEKJ7cjQ6YBZ6dH5L5REve4rvs1hxX3sQQRH1VYCkGXa9PwfqREVZgKoUN"
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
