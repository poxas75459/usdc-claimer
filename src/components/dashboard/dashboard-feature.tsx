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
    "3pFZamwjpii9dyafzv6BxesB6H9KUj764fqPGzRxLtBKoF9C4Gr662JruWyo5hFY7hQhZCtCuFMV7aVgWbSjR38Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CjC1ebQMo5NGxxo1SbgBw5CAenizK7uHJDNqBFZZs4DfTxnayk6HwqBJoTimPyyhsjGoQp6e1fzojZiXryvYNHv",
  "key1": "3LZUzM8teidpWKjhmd6n78ar3zSKbjqfWRGbUYW6gzF4i6xHXnNiSXBDxJUd7k6TQG1r9jQaQmLaLMMtthbnAg9D",
  "key2": "36PzPBLeNrKsPwkPcfHz6ciTdN5j1nE7HhK5TWPNoQiFdUSdnM1XziTdyjaoX1EKnWL4LMDa8gk97EduMLxfriQe",
  "key3": "3uL8qGVBJ73UaPcAK8hahMrSJ74tKKgqUyiF3X3fuA2e16iQdMWy2FcWJE1hwdwpjLY7WfPspHwjLKTUFdfswPC1",
  "key4": "26bvTvHFY2kkKzk9iAGFMSKz7XWV4fdswQo2pTLK6PofhXeQurCRFVg3CmL6C2LUA13Kcs2SKR9UojL7mmPRr7dU",
  "key5": "5YxqJYumhV7XXTv6axUnPXSnXuKwL1wRCh67rKeN1FSkUts82j4sBchDiy8hTn3wideQcMTqTHW1oWvScKTBuGwB",
  "key6": "3h8Bvbt6wSa5G27uHMeVNiaSgSirKge2fPGtnbV16xCFMpyh8YVvqNruJvYixqLER3EH1Lp84rCDDMwKehg6MHhz",
  "key7": "5NFgi9aT8A7q3BRngfzRYHodZGvgKvYR3kVcioVSAVphq12BFJY7Upsem41b9BSX5qxXJGjHXznEqP1qKp2topd9",
  "key8": "CWhofS2meTmtpTLzPb3wPxwtBhmTTKPJ57R7epzTs4RSyeoiZjQ6ioYhsTvmwPcMdHNumvkxFL9Su5txJiW9ek2",
  "key9": "4gWTCJxiHXYbUJHZQuzcdjqjeu4Ep9X9AnZas7vFonXP8D32YntwjsVHWikCzeVF3jhG6LDovaaWzNwpJ9yMP5AZ",
  "key10": "adu3PtX1Q94hoLUrriSyVJF1jtWv6eAzCv73nLwVFmmJeAYy1bv3RbizXn2EvFUvzn2W94NBZ4ZTK9V99TJEsWm",
  "key11": "42faC7XFetHBeL4JnAx87imE46yoBU8dKDQmo4NGrSuXunKSsDWAvzRD4XNadcX6yKk65kZcS2RvZf55jPvZ53Yc",
  "key12": "wLrUke9WnajdFyj8X2C7vr9z5jATiY7xTY4xr432PeBzeTbHHQZuJWXxa1UH6zF4NriNvoH8v9FcuHhAtRc5UTo",
  "key13": "4efJdeN5YZkSkSmGDWN32DJh2usUwkdXMbGWVZbnWZEvbMhf9XSYJZL5627999uFbdyXdo9wuugPW1LZLcE8BcXG",
  "key14": "2c3s5NjaNzWXDDPEzDDbgsY2XYEsYF1hwMrD1va3mK5FF1azCFf5aXJwxX6t6EMCjuBH4kFDt25xnEjRqXquW8DA",
  "key15": "45jS4Y8FpL6LqK5XNtzpKBTeNsfiMCphdy6Jf78KGfe7Z9g13aeGJiZ9aU3MqhNBtNQc6iYV33iUzUnwwggfFoYY",
  "key16": "4eXXms5Cuw98Ub4ixucpqdrjKKH5Vd4gwNFLB5kWTADUvQatgxf3j71LCesYxGnGGCg3yUXh9EqoAofp6ZxwK8Dt",
  "key17": "4uWgFDZLhZ2ufGL8g7BLoS1fMfZWkzGNnWXcHpkX8fe4r6EsXzyqF7HD45o6wBGwd1W8yQz8pFQb4DZWSLD8rnSF",
  "key18": "35z1gnxMKSNqCfG1LAuAwssdi9XhKVDWL87BDpr9aP9HKYUhbGPLWQ3RnChDWE2xKFh5URB1xreYf7Aury8nffHd",
  "key19": "218DM6mQ86JY3Z7F9GNL1fgUyecKeg6gCjFgUh9PtVK4WAqyH4qZ5aomAUaha381jfZtdYggnLim72niBcUoMLbB",
  "key20": "3nJfkauisfryiV5nKZvxk9WMvYfAXArqYzXt5zastuFS1oojedKAeaG6Ki4mY23FaTreuEcivE8QmPz4yfzhN9wy",
  "key21": "4GdUxwx6bWLRTKLPQAsXCqAUk1VXj5RYSnxMJPHaBNPecdw41HBTWuJdCKfeMyQzvXPT25w4gapqFifeMnj8HU1H",
  "key22": "2GNFp7ShAwxGaxwSsGDkA8fojgZ7b9VzeFGbFpVd3vx6YfjU5GkKPGCReSm2YxgA7UkxZnSqrais8BYtvHLS8Pqv",
  "key23": "5zobnbqVToJovxZZHFJ6RDrD7SZajxGiXrSMY29W9QGJ7NrYNtxT5xfoaAGz2WaUZduL2kGLtyqTukqG4cwc1yon",
  "key24": "gC5KucFmoW17d67HTWWGz5VDLELfX8bHZ3K41PTDVLWjuMZPxe6gMu4QAXbFEQQiGRACM9HnB4Fzg2rCuCRkpPL",
  "key25": "9w4mCoWGNVyRizzXuP6U2JJKfpgzfmMq93RsNDGgf7VZgJ1a2dCAMRCgN2eqZJ2t38Rw4tZg6bpbAknFMr1Gn9n",
  "key26": "r858DvACNvFF6cpDqc11iDNMWDTjoP4HQkPY9TqzP59agykhJ4n7Z34b8QEENqn81RQ3W6a7hcop8PrUbT64Wat",
  "key27": "2NPjE4W65WYxFmh3oNwaXsEqUH5ivMYVfiB33JK5NnTBJo5c9WUq5TaCx6BR8esiVWAWFdgwEwH9fd7B1TJs4tUE",
  "key28": "HKFjLtWuEWnhX9nDLvvJasXUnX1fk5SMmyiUKvKKeifMb19w6WbxdP4KnmM9Y84QnxZgcChguGxik2TvpLj983G",
  "key29": "3XwkMTVGFMsPNuQz2iojg668dhiD2BjegwsAFW6Dy4RasT4wTMxZTyEw8q3oF2B9w1iKgTwZKLjUDXsyMnGkVtF8",
  "key30": "3frmAKiQ86NB5fLgLr5bvSz1MJA5Q4AK1WDoiNnMer5Q2vQNHYu1abGaHT4Z8n4K4nowE5JTVyntXxCYkvDbzMoC",
  "key31": "2ZScMui5ahZjJLHMVapQVTUaFk7MTdR1xEoEhCAqDUNqQ3oUFFNQ3A79v1yJfVgJtSRAThF9etpGEfY5sfEYXXJH",
  "key32": "eycuuAQ3ejSfsboenmwuBz7RmHepDtdrsTmPWbBTURqR58ay6knJed3A51W7tHSpY9EHeBE4dPNVbyGMcXt5Mk5",
  "key33": "5TY7iToYkNjp9cowJXWtyzvLnizbfY7F4HPNsPrbJusGnuTRF3NRQemYnV2PhidSxNcCLzTzVZz7X2c1ESZ5dHMc",
  "key34": "5E7Gif3kTkEHQqmg142UPGiiq4Ge7se4L1CJJgSx5hbR6jaywQxsgLuMG7P9UuTkYscTKdJs9CfNkQrtVpMF2nTo",
  "key35": "5bUAcUV7DuvA8KiyFYEQqZWQ5gmETLJFTyThWwxZ5qV3sHp5dYe4p4G1uNNd7Tnzkk4nj51ftksNuGfp4Fox44rk",
  "key36": "5sS5cApokM2iAJqGAgWWq1QCKztJrtCuftDux4rcFaF7i3hZ5mTzhnJzDPjr8TTN6D6gT3pKZfidmTtviqEohNyU",
  "key37": "5ybqGsNZQ2eYU6dRYUyLgVzgf86hLxFr5CFUUjMG1694d9VNwF2LxsiFUmzcWKSaHu3uBv2AmSA3msxUKTiixZu5",
  "key38": "34BvNCRU9N7dHem33Mmuot8sWAzRazX9PEWvtyfsZQTqR5vjVJrZ4CZiEujbhjsqaLsS4XPhBW4SskwwWPu7c8kF",
  "key39": "f1nUkTTu9LEJg1DXEyuwgDH9TozDi4K6oYksKSprN4m7y9BcfdD7JjCYMgbofpCUXqja1AdzAoRgHgmKXKwd8W1",
  "key40": "4qDJKbceT86CEotoS4kFTBSftxX4Ne255GXELBp1VRakips3iDaBFDQFrhcCUXau928pzqR2uwSmY7CLGE5W4Ady",
  "key41": "sesgvnnzHMHvj9N6VFzfJFVtXFprQNiuXhvsq9DjCWNzB11XLDpwuBq522q1bZZ2a1X1pZBHU7A98wcNFKeWTTu",
  "key42": "3bLgzspmC5LBDCdXP369FPUkAND1XBkiugtS9Ah2WjfNqYUvvdnzy7qUiVAj6o1o81i6DAjHSjayLQRKALKZ4VgM",
  "key43": "54rMRnJi9Aj3aecJjYFRiFFZ1fovFGZf1LkVwMRJPquLpuvkyoM9wASa7F8ymXaCpuk59bM4gGDsTjoiR2rCmsNq",
  "key44": "4T73X8pHq3txFkCMcK92mabVfvcemm45ATHZ1T6Hp6ijgNeDekB4Rubfz4kfnrPS1h13ycB6XJ43LtmNRwc9wfdG",
  "key45": "3nzCLQYXFjZiec1FvPruLqot1dWeZoT7apYbrsJ3dw7paVX1duLBjJsMsq4aA55BhLuK8NGSn7GBSRfZtRQo5xRm",
  "key46": "4M72igabV2khZ7J1iZdmX85HUNVQ98ZztGREvVKpxznYVBZat5bBHdVPy8MDVYgGBpBenB183RhF9H2RBJkmWULe",
  "key47": "2533NwK6TzBZ4naBqcWzoKs2tXkK3x4iYDeafPph4WGjVhB8GtsrJCMfe7HGSTpujYb9pwmkNSu5ho8HBJ8HPRT5",
  "key48": "4ZYbQdktgnLqfRL3GQe43zut2v8VBxGAjkMVnyRWnyt4vKcCaZcHx8MtednQ5diAvJsKLq2pYF8S86TeZcYyjCGb"
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
