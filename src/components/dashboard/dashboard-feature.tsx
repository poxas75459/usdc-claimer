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
    "mNTvt3QM3BXxWXJAyA2yFQH42uNpnfqu4o8T4ciJFgQTsfpjUKJJhqbux6jgh4M1JQoGncgckYK6JAwykHatwYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YfQwW1okjtWxgJBqWUWmwJ1GJqRwy6zQSekro9fKAvzaVqDkoLcYKSPZZDTdK7fBbHFyYn3gYnhsuYHRqnrBZhP",
  "key1": "cecGJVqTLqxqwZwXAvGBgyVSHZ1VYH7qHxLDh79HsFP4em8hFoGBKZEpgRo2zj5TTqWvjFJJ3QJcB9UBPMXwCxD",
  "key2": "2FQjeeTk1MTS9z2K6WnomzExwcHezKhNsPxLaUZfbA5ifiJkJ6VLAT68Zugef7dPwHzFUWjBAHEZ5B5e47JTHQEX",
  "key3": "45oLvXLPtGpcsdHGgoP1WvbokX4zNv9rXFkrxiu68AHJsDjmcvmwGSGvVNYBm8cprjqHFdMPcaexf45bJRuVqaX9",
  "key4": "4bqQw7Ni51j9gyRSLP12qYwYtRwKXbGGf29quLXrfgcQmPfer2aDY1nQBKnPEra1xi3CQ55Ej37ySz155oNVVd5A",
  "key5": "41xTuwKaCL2niiAzTfv1MKxxTxrpKF3T7sMz2NrwLx8X91jx882h15bKqDsYZzTbX9U6J87gfgrh3XAvfKy7jVWS",
  "key6": "56cdYTikRSsMKBd5a7PLeM8ceRiFvHyRX2DffmjNgQDQTz9dF8Kmsw3nCgxY46Eh1Ps7fb449CkrWegqvQPmxVgZ",
  "key7": "4Ro2chr73f7hsoKzhE2i9QD591DsCsXLnq5wieV6uBdoqFt6qHCSU2h9SC6c8qsukg8vhbr3w3VPpD71qHrqxBVU",
  "key8": "31jtkDksSs5v91HMAn9unk43CqoERmyRcByh9sUtqm2cssJ6iLS6mJwQAmW5TEZnhLzJGegvwrSpWfPDAj4bZyYj",
  "key9": "5i2XsR78edy174Wi1BWVUmZevqKTzM5QL8yQLUFpAkftQ2dMn4Wb5r765eWhHz928sYYApZwDiscH1G87YQ7qD5s",
  "key10": "3jCWq8XUAeZ7gUdCrdTnJhN1xTLTkUPVYwT7iwPb1KiwuuKV5PZEqCLC8pMhsqxzEce1df4ngx4BE1XVuQW6cce5",
  "key11": "3Rvytzip7HCr1eaexhetSSo2yCbSzx1Nx4aqsoXLv79xk2yLWNZh4NHnRvLkmQvT39vqtUbSysFTgNX3HSTnwZ4S",
  "key12": "2KEMz3KtsqqSuGkPZxRANGGwDu3vEpUiBokrQJ7W812cLjdCGxhDzkrZbVKAtyUnXToVQnuUawnX1AqZz7Ks9MFt",
  "key13": "4DbXwHQ9YApxcAzdw6X84xZ7rJiVdixbqTRN1yBCYZxgY2zQXHmJtxAKSUbqBxc4sVWcYHYgioHsY9S3r2nQN2b9",
  "key14": "26fQRGvri6soPrc13dSijW9PPUZCL5FfRHWCmsHQYdNdccHq1CZjdDNQGext8Vibw4KE4Buvq5wf2Cy332yTP8By",
  "key15": "5F5SEKuxui8Z5JPUGcSv2e87nCEnaZFonE3WM4AvqJ9Saup8QLFGPRzgvefDqcwtEbGvoH25rryeiyXfmbmbKdXH",
  "key16": "3oUUvCYpFNuwXak6oFFj5jAaxASju6ZDpyUfqQHPNB9UCUGx1duCEmVoKmCozr5AWbEbCEzyn1hcZqnB5o9DgxWv",
  "key17": "4Rxy472xrdgsh7Jx4ToDZt5YrG1QqkWDDj2LwzCF2hjA3BxGRXmr3hHw5Xco4gqMLEKnGpZo5BPfqVjv6FJ2xBcT",
  "key18": "cDd15Qz1pwYs2KsdBUBucHWU8aagsdzhZVA9tGE6dEEbj2LeXt4CwvgnwsthKT2wGXpgRXoNyuNCEqVMaY7BZDf",
  "key19": "4751WV1fzQAzrtcE87DJyfmtWZhRvmFoiCQ7mwXnZLWNsuRb2D9sPKhEqemaDJ5wBboen9PXPKcbyUSNYzmPiVir",
  "key20": "42LA24Vy5xbeiEdz73t7Dr4ARiEhsWQNRZ99MJtTfwauULAuoLDV6ExepZwHvPLeb4rXhVyd2cYLKqsdHubrYCme",
  "key21": "3BmK9GfLooWNZV7WvaJCqEQ5wttz6RuTn4gbb2dyZwQyBDLS4Wa2DBeSPewHPQN8FMU6V38xzJZcZ3tWxhY74GU3",
  "key22": "38QTST9RaEpEB7xcwQn7EWtNTHpVsXRA2vpe9bfi4sQSqpNeBCGnqxvXZWm9FM1wg3LKqvCcN5u9dK84gVapwiqn",
  "key23": "2uPHwdtvFR4BtVaRvYpL3vaFy4Udej3hBbx6qXd3FrNHK7PjTiCrCadoRDu3dqNbKUAD3Rvp1uMDVziQi2huoBKp",
  "key24": "D3RhGgAGWaAW8NWWmmqZohX3LfHXf3q6wp8uzwYUUuBL9Fzw5Ys7gimBpmHhUowCNGiWohhn9dPsX2NqfRZW62k",
  "key25": "4pAqa7XqyoFe8qXyV7b8NN9R3eJRppk3bvrEwq3SZCZgvCAnt2Pcv1htNvaKXUbRRccfGBQWipCCCxugvGdsopUX",
  "key26": "48FUt4rBkbrvMvbEYmkbdRAgdd1bMCjBw3S7Bz6tQLtpuGMunLpRcx2yQzxesCdRXd1WdDjE3CA2U4fMCnnfihy7",
  "key27": "4hDkQDqxwBxGX21n1c962oGsuMZJzPaAkhz3zLWiSXkz97gqDHD2WpjapQjLGpc1W6DKiZvpQuytkCX9Apx6jXRq",
  "key28": "4ZHv4ViAfZefjMo3TPUtDSChgX2rKQLa1w92iEh8zm28MS7jeubf5G6X4MykMYr4FrhGoM6V7F3xzNjNmtjuD8td",
  "key29": "5eWsgEZozVXFqa3ncWn97YigbLRmG7jmJQaDfXtw9CV1m7C4BNEeqHBH72Rmr6B3pCYSSCeHFQVNzCHiPaXvsKZK",
  "key30": "2XKRG8LTeJr3KfmkgobniNuV5aCXC9hK6JRJXFMshPPWHXg6CE7TgyZaoX7LJb9mMEL3AyBTjTfYcSjPHaAUp9DK",
  "key31": "45vVtM87B6ctEuddQiF4YDsxNxiatsf7TZbUNAkLoL4G8jw8Te3Ase1DotTfsEhFYoAy3hZ59beR6pJWjZ19Scdk",
  "key32": "4zXvnCUcqeyGQRAiriXPf7cFf3jotr2jaebncwpw3KPREfrpTQqYFvHA491aMxuACBbgCfymMysYHvdsozzWYTjL",
  "key33": "5PBUWUH91pceMysnXKrq6Ywfzph3d66rUWaDSAnSzLKnE2mCiS1R44m18TvjdBz69WWXmbMGdp6rsUXmsdEz9Jz4",
  "key34": "5C5546rf4KhFsBgyAunKE3uwpWNvE4aen4UekrzbzqsSaRMnJXGvkbU882R8fi6peeF75u2bdKVFLWLLZTnvYD7A",
  "key35": "5u7kcxYBxLCzNjSToyVUNLgHgvTN2ZbeNL25nP2M1GE3aMYJ739K5KV7J3j2CK1ZJ2Kkz5PHCLbT5CGakf7pSqq8",
  "key36": "5BAyMjytqC9gd13seNQtEaoUfFtzBMD4HPDicHDYcvY6iFCpyXpFmveqXwnZc4hNfkv9GKDprWZ2zPUYQQzPacf2",
  "key37": "AF3Eq3iYR9BqkvFLvkvcBTVMEPM7tumwrJTyjgNHEvoLbCQaWEJNedb1AbTRQnuMRHiQVLwadLF2FiPkCKrc3xB",
  "key38": "4czw7RVrs86SEmsWeryv33yPHQC3hhvEfWS9PVbv17g9jkkfG8zyBrsUwyeS38B23iN35TqTF6dwEPWKw6bUkrzz",
  "key39": "UiwNURBJZMPgmtwnhuuTSyegNrcP419Agq3H2tuemPDsvycnxquywk2jsm5Ukahr9cYrJhvHo9coNGCvmCiw9vh",
  "key40": "4c49LxZq7petLxmXHMjuv9PvkqpVxjwSZsGf5JcGPcVJHbTEiPpa3PQHRgT1FeJfHgKudAymfU5YpTVXF8uuREAt",
  "key41": "4Fvj8TmVHJE9dr6FaLqbfxDsRDwjvQGMSTBrkRWe5dUXZ4hqwdHxYCXKMbbw7WWRLGEweuDJccWo9SnArgjmM731",
  "key42": "2RrRqPL16W3DkGHj6yqE62Z5UpHkk5aPDmZvcuoDtkvcwe8S945bLwtu5ScvgxL7xe7hApHYR2QcLkLn9ZHTmQ31",
  "key43": "3bnA588TGr8YgiY5GfEFBzYTnooGcmig6xJYJcVLW5XxtPEPw6GqgFFNVzQwo2orVHE3dtKS3Z66L4RVHY7791TE",
  "key44": "AS25jhtoMSsx652dpEWu2eKNhJxc6sSgVuDm3fogeEjDxBU3ChGUcdggZ2UGfLKJbAPbA3JuUjwMhJPKNnQdc3x",
  "key45": "4VGeGwoKmm2hoMTNgFrkz8veBJhf8UpmaocNHBEiTPyw515UzCkjNmBo8oCQwhBurDDEiaGKTwjKrpyE3eFLstJ8",
  "key46": "bF8WkZkpfnLshq5gRSv3LSv4QBrrtKvcdF8Hbuo6iYVk9fvcgNH2ssTVyAVmjbHMXWUb9VY2R3t1RXByibRbaP9",
  "key47": "yqEpzY9N8WdkvS35z1BCbsdThQA3WUmjm2Axbn3K64CJdsFegqDT2C4gcha93xeiQ5S9MRDDPN3egMaH3Wc4feT",
  "key48": "4bDgcQx3jPgHUKfxJPQGNEtbkarRXheGtewiijMTN8fY8fzQk9D9Nrh3HMpgVBNepXveFNqCqVJppxEAQ4A7C5MU"
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
