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
    "4iwTDk6V1ZveYKkXEnfrPpeH76JG4znDsh3YkmLNvAzJNK26k1nSHuVvrqrRsCwT8M6G3V7HyS3QrPEecmDzvQDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yfcbJa3mtSGHUUjYsiCjDcjJkBGEBtaREepCK9xSPsjH5ZCDMq84f6qDSB7p2EVGBDMn53xFq5kUDyr2ffbKyLu",
  "key1": "626TQnWjTmmTdywEyVErpr68DnDvDnVqJ4s7xfwhDNTAEFQy5omEiGnKzpLQgfKDJnrYh6PBjS1G8bmscy1aZU6M",
  "key2": "5xg358ctV1oFvCnkns9vM5dHkvTWoG9xRwAfjZF1sExdk9xpSQqcRsyYP4GEgXBBC1pNPxZFUzMR4gQL4s15GwcU",
  "key3": "54fz9MQLAaA9qxi2qpTDpc7Hqj7QKsmYevuYbuJG1YkrW9kfLX2B9iQWmLrB7ihyiP11xrmgVyMhxzV1csqXX3Z8",
  "key4": "Fzq5Bya6tf6LWF5NqbnEeYvRXYsxkZEZ4LBWVKyrewKhhMng9tREMSiVxAx8qbYUKiJhNSD8N9NWWcrASSZNd1D",
  "key5": "58wWkjuM8hhJ56rL3to7vPnkHJQyzaMfDyhmdHRwaQcvdwM7iuAd3z8FQ6ydN6LswL2igqtmxo2mN2bcQwKKU6tB",
  "key6": "2sg7iDW9wXQmWUqby66UStVT9T1Ex219CCrNUewKUomZnAs5Q8WxvowL2Ln2JR46HReJsToL7N2AEXPUKpdvyqu5",
  "key7": "bmoDbM72dtsNnpCJHjiJ5igHAYVXnX2uUFzWYiKEqMH4SUxtk2zqCan7C7YA5SzK9Gwfq3rXhh8EeXZhFgpnp5R",
  "key8": "4TYWoZEZv9UTagqQgmbQ2xsZXPXZFhH1dw1EmRFRwZUnTFghz66JL76e3TQdE3XsW1bfuaqeVpBocGfeeyAAd56H",
  "key9": "5u3XfV5WhU9zkTiV5E6jyPkv1o6mBXyfrZf4p4mBJUWARTXyswZjQC2TmHUvimjKYdrSUFdCosiSX94gdeuYen6C",
  "key10": "57un1ioV14chWNJeDD3caeiFqj24mo5U71WBFyub7rcugGQiE5T6copiDFERxPxdNzTc9kbmy96DPgWwCMu3TKz2",
  "key11": "2YQQ149TjipM1MxAoyBWnMk12a7XPW4dL8jFKGfeeEFEJmgQDUgPuPLTv95bVxUxRuVHrfdAaCkCWuZKwpkQpaXJ",
  "key12": "4S4n1M8kJZWe97REhAq6RaxFkGbWB4bPFbcg5KZ3fd2caJGkXSktNmXwPPGyCtZweWxDfZmGvbEqMNXKKkfRvPZj",
  "key13": "5qsFD7oistcG3b3AjNuwwgAcan3sQktQ96c2QCdFihYXTtrdDqkn7S6TBXJ2mnekoZaemL3vRSuCz4XtsHSv33LA",
  "key14": "N61HGL42po2U3gxttAAXjhcMfB3M9rokois2FFqUon4SfxRbP99wYYuGffGK9Tpt13ZgpET9bmsFMTHnubp9Fgb",
  "key15": "2E8gwdj3tbyLtBKkNicTVmyaTgrBB5wod62cHLkZbur5rsTbbMHWg1mk2gmHxsRSPcAqiiMF3UmEjzzqXDzYk6jt",
  "key16": "4oZYibj48FRbMjk92VvbgkUTv9z6LJoAepw7LF7p8KhV23abZ6dd1Zcga6faEDoN71T8Vo6qStTkLcgXWSLsHfxX",
  "key17": "5BA1aKU7D72487pjUwB3JdqSbVMToGyqp3Tf7amX8jihnqMLxqQ7zweZkBgbyJVTKHfqJY49Efgxyh2A2A2guRHN",
  "key18": "59PjzsQJF2SS8tfbgj1UTQuvseZ5mjZgwS6TMvNhjF5ij4vz54gM2rkaoyuLEGAzLke4rbdTwyx8LemWEeh4C5vY",
  "key19": "4r9du8zbiMrXxkEBj99KwyKMwvFiZFefJYn2x2sheqk8mtcwYaFkZVBvqb4zD9iWNEXxVSVziSGPwPWT5pt1YtSf",
  "key20": "4YvGzGDrvVxoDBvfXC7mdWg1YZB7F3brxZRhsDNiHGBrUPhj7JhBmXcjSBW8rf1ZoPiVDxppoJKQGtUwyKii4CC4",
  "key21": "qwAPcVfnHjcUNCH6LocXCVHTUHW5gpv894QJdi1oCEekpj1cAqsXw3bQSjt6PgbmF5NpptaXhfwpbsUo2ypiGZU",
  "key22": "2ujUJaAYXPSwCmihvNJeTWX2yRHU6R4eeyv8KJAoTJG7XTQWPRVpB3RguQ5MAPUJCpQ6SxEREQZ811wu9vA42BN5",
  "key23": "3pbxhfdc2KtsnuJWJZm1q1ZyeizBqMJBS7A39Tk7r8qXGtgmwBFW6Myq1RZvGBVvUgsByv8Rf5vz1hpBc5LDamnR",
  "key24": "3EYA3RAQuxqeKe2FGWsKx7KrjKvBk8aM4x3K6kdh7wFjGMgjpmE9ZEndvdBkZ6x5yJv5rXSLRGcaCTe3eUGk5pR9",
  "key25": "Yg7mB2mkyqVD1aX94v35BBcnFpB3Fay9deA9PFmvsLsPGEDSFkx5NY9yCcpa4J674JPKUXn49P35oJYBsZxYgmN",
  "key26": "5VPbLcXRKqvY4bFuturc5SPFRxNuS41y3ARaDu8KjKVu6k5VuBeQx5QGVR2p6CzZkCQMzKwJfsTZ4VzCxrQ5ushX",
  "key27": "3ekoX4T6QvnnMdqHUHj1y9D6jXq7sXC7wu35mZdKBpYtVN9MfbR7uZfSAZofwxZdMN5AnXiJDvwpv1NRzUKf1zUc",
  "key28": "5eTbYv1tD29CPUzfCEdfGEsJx1F9Xmr1sATWP3MLvmbxYhsoZXqQBbQhBtK3ddTXaSw5HdmPa4W5NSaQJguWY3aK",
  "key29": "9xyg78FSe3C6SStqK1HYm2tuhaEq2DSaKnLtFrfKumMApWF3R7JhWkp3ArHG6jN6EmM3As2HAugKdfWTo5aCs1W",
  "key30": "35DFfnxm1agfNg6u1bRrUsS3H3w6oXNRjdmZtEFPtrAhBUN2wotvWk1s6G9s51JRwgVuda4eSK5knN6CknDQy89X",
  "key31": "3FxiwGVHhBbTWHPUTT27dCZkCkBHENas2iK72C9kh1Cr3KZ4rs1vQR6UY6M1hgNe5TrVpG7eCgbawBYxXtd2i33r",
  "key32": "3WAVpzmgb6DJMVtHwopoXMcvpGvKEU9dR4J5b5ETFoKYZZWijcR8Q657nFRpoF6C5dEFD2rPhvuazdcCx8wntNB",
  "key33": "21F7JiNxA9DzaBpyWEB28EWQAZ7vBLSzmuhMjfkcaZWmRSSVJidi2jR8eedygAHosQ4Uk733AzWCqthaHGvhhioW",
  "key34": "2TwQCB3eQt7i39qMeyrPigVkaeZpeC1HzN6zrHGQbtgQ93oYgeYjAWjERmn9kCT5RJnXq8RgqQPWYbo1QQKRYVcp",
  "key35": "5rLA871B1LHvMy4roRgoLMC1MKWCPk9gu793dfHGzJsQ2nQJLKzGzvwdUV4FXcQZoFoaZeXifiZuK2KVMphSWwDz",
  "key36": "2WzqW6GaCLk6ag42v4mxVZszSNGKKZ8Xif9sM3JsdSBpJT57ppYthEwTLjgzRLLNaWsrQjy74GNT57SpauYD6tUr",
  "key37": "5X4VXKSDao16W3ch5EqC79M7WVUwc7eBcj2Fk6EvEJZwx6V3Ypi79cnDGLyTVBpdwAjdUaXJZ29zerwSWkx3PYuT",
  "key38": "5Ri1Rz57uXU3Cj18nmTJHPMvnDvtY5WaWihTVV8BrLEFvw1URSgKHj39H3dNpCo75tYbqETZibQXuGy6UjtNDDYM",
  "key39": "Us6zN2yvPebzs199h47Xp85VQrmxudzFMCivERFrBXhw8eiQwTXKqYQUD26pJAds9wRX9VJ1PvWJdR9pEoC87ue",
  "key40": "42Fb7kjmmAoPWjCCG4RF6dJJckQ11ASbwXM1s3Mq9PKmNx1e5jtgWYke4ZJjHJDFDKjVpEjRFcEF9Uh8Jy13ScmW",
  "key41": "3HoyeF9k48TGgQzdXvFRdhoVaggKeAWsgTwqo1DW8kFrLtHqmBFzdTaMirUdp8F41xbUmb19ztZHCJLHM8H1JWnX",
  "key42": "VJfEKjnSXmeS76b5zU4FepKBtjsvGe49rgpbiKi1wSHYvSqseVEGypxNtrKRLvrUF2acEdXvN51xkhu564aPL8G",
  "key43": "2esm6KEVNUrebmoVhEwdoj6annJzbQ9rvAZqF6i2kozR3t1RHFXNX1hvsra8TD53jwLbxNtq9D4N1fqCJwCe4L7s",
  "key44": "2pm9GNx5h8Gf27jLzyeowbyE4Yit7euRMRNtVAWDhXKdc4W6odWCBTXxP4V54nkPCeF6wfXKRQuRomPScCXKPgKa",
  "key45": "4rQm9y4dX4iorusTuPZ85wCo6CTu5RhcGSS5J63DVACqJCfnTKYXymysgRSqmd5bsdxSJZtYKFJ6sTJULcLhbyfh",
  "key46": "4VAX9KKrVJFEy2iKjXUf7YRqCgdSAVJseGxKw7ggJ8uqUT7QqmWiLNHGdQQkG5ceZoc8bT5MUpPwvJhF1MQjLnTy"
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
