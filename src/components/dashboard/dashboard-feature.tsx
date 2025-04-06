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
    "4rgL6ejPjcX8jMketYXr5gPcK99Cb9LRA2tHbgGUXuBW7GYuHAcyj2JiCGj22nLsrVAK323Mx2wDRc4A5ubDhB6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46crk4qqXNkiPegZ5fV2zeb1acjygd4buf5PvXgtMRAW2c5AdZ9pHDuATSwJXHStFSfdK2d9wu5wrWJVwyQJJLHS",
  "key1": "4HFx6p46z1SjzmSZ3jX4pfoUtTGYErxod4EouoTgK2x1NEZcM498chSVuEF2cyWmcnTVfVsghxUuNp34SPKiKMvR",
  "key2": "1MnBdYAnnQqasyxN59SDMGKp3whx5jtqBVza8qH6Et6teCdvT7XFxTTxNvrJ2QMHj15yoUvwUZU3wNMwQxsn5rx",
  "key3": "4k8H6MaGvVsExoeBQDBzFLnRvqQ7XjaoeeNd4xWYvGiCM2A9b5WuqTVociYt64asEynkDUJ9cBuogLZ6uLPA1E9C",
  "key4": "nH7h3xCFsPSTcNJ1h9wkSiLe7cn7jJ76eTV1hFfDxiLacZtts9PdzBg9JBk6quvbFCYyhPTxZqv7r5hRK6YjhgZ",
  "key5": "2KumNxvK7ucX6gLiFSxLV6cbs81ABdW7Sfh1LgyVFT9SHgkLdWmRvbppDBrJNUhrbo2nt13DoGa2RYjqCbjGkuPC",
  "key6": "62ovTcZgYswxgBttDLBks9QvH8pvsataJ36zKwLSfHfDoVJeED4V78c9FN2cd3Jhn4C3MkjEePiJQ7QR5gUhSuLq",
  "key7": "5iorPaiFNK1TDBkK88uhCajiBUf6NQmfpBe4meNVpUcDFUNTMYZACEZzqmHtfghLWSbktShEhCMNH5ujGJbLCpG9",
  "key8": "5U4yULL2Jt1CCm4qvzFQUpY39wiNa4tiFV1QGsSqJFFyNSgx3Yr5BN1koUGzLRJK6SzNr2ynXdeUXkPEsrpHqrLg",
  "key9": "kfPNKZ3iRiJmNy5L9FbczX9d5aPjfyJKdCd8cwgpazKdmGh2j4vCSc36cauMeRRwCoSWZq5yN5SD8dmyeEUJkUi",
  "key10": "4WdE32FLDUEnegscns81VZyYfjdANR9ZUhySfkTAAAQvSpmJUEBhrKJu9Bztmpft5jzapJn5sbDuec5aC3aG4Qu",
  "key11": "64nm39iV8VhLVXrcACZy6t6vUSCacDG2TGL8VnPxr3qzaubMnZeGAv2XaQYqwF2Hw38NofwH6Z57qrLeo9RXuGhV",
  "key12": "42JxCatken9ZATiXArn3FRJUnoyccnMyeeuyJNSHnk41zTAeDQa5xTSsXC87pdcd6hE2c9Y4LfFc8eoa5eMuHEYm",
  "key13": "2GddsLsQui4cJson128LfWSSAUF4aPWFmR2NRQ4kBVV2KjouCA2ENFJK1QKdKDhD4v7gCarYA57oxK8meJRHDYYo",
  "key14": "4uYdwwwfJimMWirgte8JiG9dXondwhM8NL8EmpUaaNELwtryzU2ta4TtztaWWQw3fu8zrUhNyCVaoPotnR6AVMua",
  "key15": "4NeG7bMmCSbbnutvHQKjKDh7uyxkfiezUwoXddXuYSNGWqXiXKyK3CPzt6qGvS57FC61MMZyAupNsjAMxs5Hb5kn",
  "key16": "5BLyrrSjvLs9ij1cw5GR4FDbUAxx7rAG67ahwYf8ZZVNZqTjkopLeJ3N1FyWo2q9Ho4URqGk6pd95qQXjjp8pd9t",
  "key17": "sTDKjZH6b6FkdcqZbsQBfa7jwRgNe4D2J5ozoy1vt47adwN8mNFybt6X2ezxE6cZpZNsxs7Pnz5SZzeCgGataEo",
  "key18": "26MhCVEhpu9H217CvfGpMYSTsTU2wwNFYMUN9xk7y1tofKFPzn4dMCXH21qDf9JtBqJshg1mtw4v1o6Fs23sJHnR",
  "key19": "3tBjE7bMGacz7GuTAkXJmbc8zk2C47UJZbxhPLHKiNUu5oidJXmiegpJo6hPhEAfkrke8KYj6Ger5u6sZVPUDwGR",
  "key20": "4yPQdsfUnjmFD6zrywBhfkAXgZ4CgzDncciUPWCyQvFMxjPVizfLB1HhruFSmTnuUMmhCWBmqfVutcAkmNPro5rz",
  "key21": "XbAs5RXSwvqwLCPfDeM7ViUp6fL6SwV6DqrNJ2pmH1mJoHqGoSo6zkJksCcMrSjC4BbT7n3ZBan8aBN9diwnGTg",
  "key22": "313m11ZKsvg77BvBNtSjiUGZZw6CnAhcCsaVzQkdMEH4qDgMq3ZCHwPxg5MDN3HEVtno48Ag5WvdVjjEgDkZU1Cn",
  "key23": "37bGURqkd6dJZuvD6NkRDYWdb4XgmoaRnwEiJBueuPfeqhGWaiGbU6YJak8shPPnpLyfkhJf51torqyRKyCM8tAg",
  "key24": "yW42ssRLNSy6kP5phpQJy4Jspow8h5PUR2DsZ43E8ao1x7orZCD8hMWKqJCw2Xht44PQw6AKGRGAR75b1bidUWW",
  "key25": "2j6XqwfrKpA5abaTatUffYHMwvURi5GknKH2Bm58pPBGN64nytLtH9AGA4rJEpYsQdUiwUr6VWodEwdKp9aKg6sq",
  "key26": "4jACCoqA4oRubVmeNKCWWLMiRmmeZWwkYZAS6HX4YLx8Mujv69vsghmTht2GgwgiuSkzBokhAGtpsAU3uxwrSjVG",
  "key27": "3BuRFGLxbdVMjs7Ws9mWQ6d7p8mG58EdeZWi2ftqnaNtKnQN2hcBsYYJaH3QocJyyKJF6WwDYq7iR74QjYJPKoai",
  "key28": "57Fpb7YCtDa4AquACTXG6UvYWsphGqscPvVyUGjy5v6Ksp7U5oqxacFuahXBu26viBsGTtTUeYDrurXvnfYTLfHp",
  "key29": "2uwFWgXNmqPyXxLnBEwksBx8uukaBhJYaXxkwKuQncM6pt2Z999HL24pVGbHY1WFwhuACu6aqU61YNifg2hxmoSg",
  "key30": "3CjSRXpgSpb7scBXCQ3Y74Qvn3nAp54mMGRNic1WpDjPVfWSPxvQf2MHtFp33vJjnYWXmRVGR98s9KTrVrLY3Dr6",
  "key31": "5QxDhXj6s5B26b767mf8EmVEmkoyNnoiypGgiG1im418iFzrXDqwqS96VZd3Fkoe5R63HJSfSTXn4CGH95WFhrYN",
  "key32": "4mwaGXA86gaFshtzYGLGwNxA7ZwUkFJDRMUTEPoF5Gvnppn5N4YAboSSLGBGQa2mEhkosK77Lam4GQaM3t4JHirG",
  "key33": "5ScvtkwnczsbkGnKGNPhrzYUEF1aZxS4yPWa8aVv1svTDnnrhYXRXm2Rqd5rPK71n9f6fcUxTkMrEentWVLwpeRX",
  "key34": "5PqCPrg2BFScbjRdyyNr2sVht7X4HdxZxQ5CyRFAJGp3kXjtumUkbQkZYp28qdpdM13jh3DV1GMpyAaVNVThBrBt",
  "key35": "3gjEDpdLxDgxiL3b2fdApcvvgAvfqAywPatVGLyoVGQHKuTvUa1NR29ZWyC6YZKF8XgrqcztH7BbsvK1dRB1RGuS"
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
