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
    "22Rm6TWH6Y5e3X1SgqYDb5Mt3FNxtrfjw4tGDgC6imvdGPRJAFjLMFZvyztKqYz7WBh2x67rPPtDqbD4yp4oC4EH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yAiHUF2FSGExJ5GXhcUe9K36jePdcd9DDRfcXh9ffyKeAaacWrq7guyCWe4auRGtkvJQSrG1iJGtWi1ha3AJ1LL",
  "key1": "5MfiwxdEdv7yRSMfJzXbUePB9uBGx7TgdQ3ZBRbYcW3PpcJEbHfikcYisHx4r75Eog3sZU98UzifKe8cmJ5uGwAA",
  "key2": "Ax2Pv1faL3kKSBvrvNLPqmRCxxc5JqTJbez126r5k8TWcioiUSw94futTFtXg757pwFhaq8oxhaXKczU4W8TPQZ",
  "key3": "2iu2ACuXZXQP4mdk4vxoQ3orwZhUYrR1J99M6fY6SExEUNR8BHWM3cf9UPoEmo1nJ6RyX82cCiQ1kAtFjG3qvsQA",
  "key4": "2T1DKfUj9z5Q1vz3BYSAjjpjNEVLaEcNq1tS8bRqgNWr44nXWdGaNCXnjV89UN9Dbmq6Yp1NbDooEKSu3jQmktoN",
  "key5": "4ZuwwborjqZ6amH82TgJaz2Eb3gB8P9if6Bka6L7P7QFPaMSeFMUoKxgFhNPweZJdZV4zBxzy5AbHTFTcED9cVKN",
  "key6": "5Z7RrTKgTvX5cTrEPxVdjyNQ811wAu65ZyWpsy8D5iwUQs2rA4nb4z2bveyibw9QQeCnv47J27gk4c8ToBQZEPB2",
  "key7": "ufkZcXhywxx2Q3Cb3eFd9HB6ZKUTWAZiFjSEdBm4efnrYWZj9ZBt1amX3EtVVgLPdPouW77bSVmw14wA5eaMBKA",
  "key8": "5SrKGdab8qveAz2NRDbaP373Jss7oDwwzx1oWPoFdkksjkx9fx1zTtUgLm9cVWqnXfYd3encrRwAVapkryVx7WdL",
  "key9": "3aHSBwkhjsZg7hNyvcJ8tiNWFxcZPK2563zivtC8uoLpNWePFAmjn1shVKau4HmRehibV9zBSh7JTCx9vEwJHRcZ",
  "key10": "V2NtZkSVAjdGmZGHiqMof8cyoQCnb37PxQ4fzHmHBfCai58kcB3fArpGrxzpUuDnj9JVrude9NbUzrY5Moe5eFv",
  "key11": "3PG954SPpuaYfW5S66VvBZpmWcLpbXGcSQ5f6wUi1VezppRizs7nbdMpnqjJfG9LeFaFAJMNVCVm4mnW9o2NCHcV",
  "key12": "3vH1xRc14Ca1wVzbkJorrmYt2dzjVo9jdPoVSeP6igdhHUBkCmY885nsGLLpFonB2PevXzGA2PNw1SVuxb112M7d",
  "key13": "4AjSA7Rmr8eGYk9GNshEJX6YHkV9LJxTGFCBtQWRpHjnYw3kiT5rEQQyqK6yd7x5pUCnQb9xgyeAQ3VKApkMJ8yN",
  "key14": "4Tcog43zkWrbgnibH5wXPvF9bsSgn8u51wj1MwvJNYpB5WBtEk2KsH8nj5jjq4YLxo8YJh8mJG9c8TvCFzVQapyZ",
  "key15": "PnyDiRUxzd7qPywLTViYCpqVvt7i7ATkoVtASvKTWN8XMU8s4b6oAbsFtjsZweJ7ymX8VLPPYepVd3bjtpwCfQQ",
  "key16": "2fmNqaf55TpKZzZRCfzcMgSac5GbpwBkPfMzctRvAgrzxuHFYw4X1wgWZ293W6byy9iM71ZJ4m4xqwh24Jhjfyah",
  "key17": "g31jb3RGtnMF577h6dk4wx4iNBhRNAKnpcMVYm1VJGp6XYpy4LyitRpSB1tZQtiH4W8jRTH86TCEx4E8SaEyimp",
  "key18": "3ZTNJUwBiyWtQghLxNPWPuY7XSHpxHFkmuJHCzvWuhZzFvcLBDVwEX9rho675rUJkH6NwVQTPi52mb7vahT9tMYA",
  "key19": "54zR3LWNveML3J3RVUKTHHGwMRSEymwhmVjwM2ezAhPqfsV93qPfo68eWe3ZDLau7Uc644xkz2aE17nq9WjtC14v",
  "key20": "37mD71ePfbFsH7WubXK9CxeSqw9kZZiStBCNrRhF9wTpDoERHHxo41kGzfeuTU3UPjW26LpoGzsUrymxQTWn1VNm",
  "key21": "4wehkRe31HWNghrNMaaRk7Yeci9Tdnd36MNpW5spL7TBUPHBVHSH6QXBZULiy5k2jwpkMovTDdiiswBuUVUEbCYs",
  "key22": "4QT7CA7VLiNaorPBf1GK5htjqWaXJhqwPDen5JhN5zix4LLMjrzGmfbKV2GbdcT5rUxBiWGA6rwHJ6cGKZH6kDrF",
  "key23": "2ngxEwLKikEZPPdqwZLYwGM26r8oFHqBG8yj44AjViH6YdrxkwXveMNzKPogXT49DpAsNySminPdboC8UuCUFqoA",
  "key24": "uMEoWnEuDruTjR7NHExaaQn4R92nktZpvJDQRy6RL3Q1hZw2VQcuhgLgrSEm5dSvWgJeMgkrSKjydqHigDS11uG",
  "key25": "5uJ2m5NMSq9gykJ9SJr94jMifycftXc93Kymi9PvGPaoSFcXyUU9CtkSU87NvmPFW8MB82tcc96psfVMV4N7JAZC",
  "key26": "32FXDKbNvL9pbgukJyvs9eDMx7SgAsCZyXzJmf3MzPGRfuMEPZkgBSRbvBrKtzYo2sWPYbZnukztBvHjSc4BnW3b",
  "key27": "43DiKJxbpaYxtUFwdAppV5MN2ZAHEdnAgWjT5grMNfs22mXtAYyg1NUvCjdq8KyT8aRjptaJ7BteckHg1u1UoV9U",
  "key28": "ujSCL5due3Du8uhNcrobTM2jfSnT9d7BTvHymPWKLwZEc43Vb7na7qTg8MrHLjyAdQqwj33Xeg1hEDtFQtV3LjM",
  "key29": "3kkPQ4B89Qzkm2DxExUCbFrKVeHB1FT7X1FTeu87fHkmFv2ivxV5XUoJDEonaFEh7WGfjq5CsEerDzRFn1jbLKUU",
  "key30": "3SAgZY5dvnBoW1eqBzp7z8JEEJm74X3N3SZDC7Se9dhb9YGEh3j8VQNEGRgQKj7618vkQ4kfc7JjmwDzGBMYNVuD",
  "key31": "5nnEyT31Wz4baoLSo8i51iouwFokYGMNMKj5jv3wvJHaLCh7P346s6DKRwS5a133aEegWnYJs6orRmCBeJLymjzW",
  "key32": "2Amyikj4kpdhd9g5JrEbXczdyxR6wERBa9aqTncLbpVdme1SapWiZd7NgbKJNvrXbtZEYD2ndd4bStrXzonPmSQY",
  "key33": "4mVjNrNuF2zYSD9uvCgvseRv8NV5e7EMNRBuwWcyxKSuroYRHz6kSW6f1fWk11P25WRMddtikriH6k2XSaRMvsGt",
  "key34": "UBkkfSdPuNC98LXCw2tCmui9HS2p6xvjSPe7r2MzvNhtHpEmETnnuFNh451vrYvo2CxLRWVByVCgPLUPNPuyWoo",
  "key35": "3JfXfkgK58sz9jp6EhGmHugurRJoEiLH8RYWAfFTdTHMo41TX8zRHsLwibvR3CxVwTtpVCt1YfcfXPjhkLokHXpx",
  "key36": "3GeitihKWbuuhWi5JMrGViLgrfYGcBC3G1sGx1pvsVBwU6QcW4RdvD7U1gombQjruN2PVaKW2yJSHk8UGKbNYbq1",
  "key37": "5e3TCJQCmYtxtbbFVoRJUbW6pLDooTwn3PJfGKSHtXvsPQrRpumG6hapJ7ZMCU4TZvhDc3tfr4W5E58z2H6spYfi",
  "key38": "3ao4jDh5dchjToz38wSQakmJQG2huGsAGWekGqY2WgTuLNUEg1fmY2ChJd182Woc3eefSrEqSyqgc3e6yYgyGMxo",
  "key39": "4sfAw6bDa9A9DY5bM3TV25U5SNLTXxHR4wQNzTAdUA4TBBGe95NKJU1Y9zrxcD2CqRMSgz3qWKFYLXLLMMcoMSYZ",
  "key40": "4rskd3uzxZZik7231DTAUv4s2uc2DXNnCgGEhPrhJfJCDfPvspa8BbUFCysx5FzrFu6kFiJtVWbtB9XpN7BzeWeC",
  "key41": "2qjHdsCkad3sNUCc7N31UEzjCAKLmBrC32eLvCxzXPecihvM4Ey5YK1DEdZF8y11Ceq6pjkZ6CnByBz3MiAbJQEi",
  "key42": "2Te5jx5vmg1smtsavW8RiTNj3cd2P5qitJBvkwewvNGQcm8eHNa3uTvZHiN9A6CDkUR1wzTSe9UxhENrFfsj46NM",
  "key43": "ouiNF3QvMDGGB5arPn7nVp5dabsPdYSezzVhNpYGNYeArDVhSr4aW3M6DAGyWAJN4uNrspr8EXg4TjuqFySeD1D",
  "key44": "4fAaK9JN8DtPFpKqZbHs35x2RMkVH6AF1AYHxMnqgSD9Nkoz4Xnf6um1upntzPW21sdX8J49yzKev9KsqQPgHBXX",
  "key45": "2JcCprZLu2FQJVwKhoY8DU7PXQM4NPyqv6eBCVLNbWtnjuvmRBVZ3RfyVX2Bsf2eUPaVerHaQjF8Xb13wHizZTiB",
  "key46": "3qcJRTos5nV6XRhZEMAxhWDhUPBfnvK18p1y9nhdECT1HkiGnLdNDV8Pw6qgucpQanXMqEkYqLawEknsMK9cBi13",
  "key47": "4SJhxjkyMVVBkGhx7ZRNqary6svUJVRnwRzGRUiWKqBVehAf5pGewcuW8P3Rp1urU1E7Ak2S3eFvFxMxRFdMqaHS"
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
