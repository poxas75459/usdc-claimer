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
    "5DwpRR8YSYQpecivg5fVJgDjM8PpKcnwQpuFFUAb4hvf24mdVkw1dxsF2PLp5s6PsNzy9YQ2pT9dFjsUCSVUmiwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f82evpyYbhpU4xRZ2W3MJzkhr8JiV4NLovJyHwAF7bLcw9krr6fWkMaSPf65SNpZArgDWob9SAANwJvWcvt8jqW",
  "key1": "4cJvCRweoVpnBU5gMiK8i44bUzgoA7vvoticTsnDLRaoBeGe5ySM3LnuRe1nmeccRwPHt1tLM2SKZ1653Yzb9mm4",
  "key2": "4kEvz5d58pfaHtJvTicM4aF2TogdXv9XziJsPBfy6SuDub4qVtQeY9U33Lu9M7ZHX9VRsRxoKU6rSmNZDz3SmAq1",
  "key3": "6GTLSDoCy74meQ46Pvx8fYdct2JpSmTsV1osRfcxBD3n4j9ybb7bfd9jU11HeXCARo2wKWQ8NCYRS9v7w7H94nh",
  "key4": "43is7Sd7XqsLWTPPqoj96zDqNc6n1STAGxzsmnezBdJdJpsWszLPgJTdp1XA8sMceedbmB1P5w6t65qJ7j1YXPRN",
  "key5": "2nHEtUXJFJnsoQkRqyNB6dkPwE8yQoLVUWLnoJfCJRsHav5cCGzsRga4uBkGBDUKXM378E8uobi1mqvQjpse27iP",
  "key6": "4YsXuzD1SMwiAnzmkYhdDfHVMtAsVeTwP1hTxxtvbsXTMbbKWDFdwmca18rpDVEWTjLYZbiWpr7Co6MA6fNh8Szy",
  "key7": "39UqNh5jXYJU8cRippkQmGuGMDXbhcii4YQcXH8gNeG4TNkMy1LuvHowmgFjagVkv8pQxswxvaBthrFUyUWLtSu4",
  "key8": "2d5NVkJn4oHh6djQgdgwBQbukQtYSZJCisiBLuHTuz5TZeKm8oDHihX42JGrAE6yicsHPGD8XYFx3jERoShWzf3n",
  "key9": "2qAPAniGrbQ714mtZzPBGxTWVSyaM2iHHJySAUJqh6wYWp1jszR8TgBEkzYufjjTKru6pHyivsCoKgQdrZM8kbjR",
  "key10": "VbTaVSUqPht54t23PYU1gfxKDwQW6niLispa65o4bguB6UTWfPGaqpmUjPVRAf3MidEgdeNNg99nX9zQEPfDZuM",
  "key11": "4x1FMKvuFgyVaXtghGToC1As6u4i5pGmZw9nbDaXeMryfrCJunZTqkspF8TY34Wq9TjJs1bXbPyxJmpXZXGLAkqf",
  "key12": "2xaXtvUfgFg6va1vJGVRMMW1S2tyTnsVPggGLXcxLBufK2MrffoZ4XjFMRjAb78MLnipK6vbEwZF7qwLxNwaJEMD",
  "key13": "2KDJzWc7z6ss4rQKGfXodgKqn8eXgvug9q4iFCAzrgGXGTHURBBmfp8c23cLKGdD6qnJZPG7s79vZ4ZK2WZqBirq",
  "key14": "4NbEP5h5noqWyzWifyrFk4Em3B3k4KLcZX38YPJgzdoioAo4T35eGE814treEMpQNvKibNR29vN5G7qdb2EmhxbV",
  "key15": "3wHp4pQSh5Nmu1SJsqn3bYSmrY628xoxtKkhPTh35azPfxGJQK8Bh1BvBMdU8LjGZwLTt6ZzbbmPk51quGLWRXTa",
  "key16": "5VbANNmmK5YXknN42KYVhXJ8g65qsEdg9M6NmWtyJpvdaVXoc4ktFpq2btsUKJLuY8LYeGxQU2tC41ddnEwqH2wt",
  "key17": "2eVnP17F2rpq9YRJva3i1tAuSwDkP4qgBLA3DBnRqFB4YxALPfWzPgrSeKSzTqDbx76fXDmigJi48i9qy7ysjaHL",
  "key18": "3yPbteXWtEmUG5pWgNRiZCxRTQXPv9nsypoap5FbHk2KXiH23oV3v6DCnPzNgzFbqVQU1fgQ5SCiJUSJRvhDFTbV",
  "key19": "2KZn7Ga3hKvEGDRSgtL1VaRjdPrApkTHMvDiHehGQrwh6A6b8sbRSi9Z8DxTHaSPiLPJEKXdAgQ2TeX1XKbrEVqK",
  "key20": "66Sq5gRbdZnc1YDSNqzVwagTRWww5Ln8m4mhX8tf64L2kXHJcfzFDy5DKv7fMVXa9Rn4ms3SB5GfLUGDmi4x4RNX",
  "key21": "32jdgnVkkPpEWYsVKeuxxMPVsc6ScaxeDfQYSFzF5x3bKnoPw2KE532s2p92e849cU4aUXgcHXvnAZSNye4Q1CJ",
  "key22": "JBcYbZDXjggqQo4BgL6EiTDwXUh3YcDEAmrNg29vcNuzty7kk5eP7wQYYpKXYg4ZY5mKnUiXdWTQUBj1TEfx1ic",
  "key23": "4xhBvPQG1SpfD6uXJi7AWfhtSDQewTePa6tnKhwg4BEj7ugHKsntZ4NeVwAWynUX6kgdhNwq7caVRD8pzMsYu51Q",
  "key24": "TxbP1wZaQnB1SADqMGB5msmDJVCGMi15xGsZqPDFjjG3ttuDmTsZW5g1wdLw6FCCSb2exK9mtpqbtyP8P7nThKZ",
  "key25": "3rHNB3rFqAUXBQe5t6VZKSsKDBPGcvf9FWkTC7CYhfgq4XSXcsMRBWEpTitT8MVjjbR7btUDmJBwN2svfRCAhJVq",
  "key26": "4iaCKn8UmL32vmyLjq4NCvus5ma6j4vevANvBrSJ8N3DDtx2xRHNNhS4p8jZdCb7Lgr4gtTqG3R1uHvHGJrweRD",
  "key27": "52pLqc8dv7JtjQs9bzfNKP4NKaJiPWA4rnkps8XZUzvVmkig1Mh73zPE1A2uJWcpy5W8fciyBDvBjj7e55iVWwXq",
  "key28": "5tyzYasU3q5QN3FvXz2cAuJQYVp6s1ELzN6W9v1Wejw1M4zFa59X9f73DmRpbumaG6N567JhVomYFXUxd7ZXqWvg",
  "key29": "2sewHdBbiLbkt8dgLLczmbnkcseLdbmHhx5g5RgQGkGhBQDhVh9eW5vJ6qaoxJuUnY5uZ2PDiojqE7rc2GmJBfXR",
  "key30": "L3TvtHanV8e6YpGMEATHKgZUUAtYAN2XFYDF5tSeMfb3er6WwuqoX2gecc2PbwPwtEQNhsoQUk7R1zemUh7quGe",
  "key31": "3eYfcMYB1KboE7sLU4kcGUbEnqS6taNSEuvhWp59yc1miZwcpwHejDTihn1B1i84U9TiekimJpPZRDzJUGKNVAGu",
  "key32": "a8YGyeB82BMgxz1dfUj3stjNkw7rXaV1m3rfSkGcXX7p6XJQAa3MmJGWeERmAqnfaHbsz8izwWd2sHEiicqMyHc",
  "key33": "3vRguqah2xfVWLnZaYqsQgNZaonsNjGeHJYQpbEWqALpEAYkYsKZRT9SiWnAKYW8GPNxuTNaTGNnLHwE9QxjHvgx",
  "key34": "3JrjwxVFSZuiJCPdazrWXs8SFPyrD74GftuxugDoNWZxVnJkyR8W4TZ9mtJ4kqQMLSpyGwU15pH1RVANcnJaNcfq",
  "key35": "2Q23WHC2Aa1ivyDzMUfmDi7h7fF6vpG52GsCLQjmCWeqK61fn48pBdHahQgxSiRrNMiEr2bLHoTE8t13tAP9GMUB",
  "key36": "4nndiLThfwCu1uALL5dxSyK3w9QN76AAfAMPy28nUooPk9oAm6rBKmwUomjLWQW32NchDfToF19Kbkg7pH4muyBo",
  "key37": "3vbT9XN97Br4e6KB2hdptMJAdMtmvFaf1TQaT26JJngPVDBunjgDHHypUh26WqZkzwxQrGDwn8XjiXoiDKChQ1bY",
  "key38": "7rk8jQgueAMuqLU4zZNfQi1p5vxV6pfwU8G1PGWWW65aRLZKTdKCjapS5sxxgBzJePSRWQg44wHYjvzaAK8sbqS",
  "key39": "29ieZZCaqjWseN9kfXyGroQGfbYkGxCacg5DmsU7ucHXbZQVr6KM7eTuHU3K3Y5UbxLzr5DwX5p6naGj8TMH6piJ",
  "key40": "4jmMeJPx3PjLmFjFmaZSE3jN7dpvGysNMYSyBvzu2qg45n9KpyxtnWSncxTQei22vcKXFoCsF1Z569uN1cS8tq2g",
  "key41": "5XqDALs7sU7a4MMnyxzcHbwtBKkdhxDskx898a3BrCmBLZQYM5oinXTDrNVysEeUTjSiHDgwK8VQ2WzxheRwAcES",
  "key42": "4jJUbMDFfe1MhuH8PaYbWEGbSgVhZ6erFhTppLPHnf1HhGRdUgo1gVctLQsJTBMTiSauyE31zLzj5GJZpqWQKagq",
  "key43": "4R6s3FV7LcgpQntk9L4DHzuif9Xq5ASLyCkxBZ58ezsMawb1KKgEPzFnQMkkReYsR7KeJANNbgRQCUXQGE6yxAVz"
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
