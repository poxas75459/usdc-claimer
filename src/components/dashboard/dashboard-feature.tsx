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
    "5tc7BDjh68cmMyMPpwCzY2jEtS6eNGjcHMhiYojsgbEFLxD78T4E35kvE5hxZzWxGgAmJmYa93dz3FKEvqM7T3ri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SPxptKci6BAzuAmarf9KDdazqNQWbbi7KDRGE1FiaEs3E93HGfdpZoK28Gaj27nES8QJM2ANzBWpcwDBuoQe6vc",
  "key1": "3gMmzTWjuA7XhTR8SmE6mZRHagfscJ85ZeFzrFZbHUWxhkMHeqgAvrF8S8FyXHWvXA2xzU8gwUt3JFpFH8eXCpPE",
  "key2": "2uwyL5iTwU5dszi9RiFvH7fLthSrU5qGPemynTiHpDUHoCZSsyfvZKXeMXKjwF5DwwGufEPQyM9hWPnPJudkyAwX",
  "key3": "4wZNjwbmJH5vkMtAnUBZQiQFKCuGmY4M2PPn8Gb4S58yxsciPTtj8egvW3q9AyACDu4sneTaPGVefpVec4D8wk7p",
  "key4": "2Aky4MPUbmTLtLUWTgtKofWA1TFxiSPVMLfVk2yQeaejzi1Ku8euVL6Kur1in78LbeUxD3uXbBGDyQJwSkkP7WCL",
  "key5": "6hH6jHPyKU11taVZkxz3WocxX6LgQZfWitKT1NN9kYCfD4Ntk7e2ANuvrhgf7eHfbi7Fiw8B8rGN7swZm9a71ov",
  "key6": "2nm7wV6UZtgAy7bZ39RUZsQ3uNMmajdi2nBvoBvkiQ3XFMVEusYFpdvSJjyvAvKJ473SGQoFAXV1GdK8sZwcVpdx",
  "key7": "5QtqKc5qFBCbqurGmZhpwkt5RrtkKPWEL72SBdsW2TY5otZmmzTDwU8pSygpvY4Qb2y2pzrSjPpcwvwJh7Yy5fR1",
  "key8": "okcH3K6dAncDtZEtzQnaQ73vZvcVeTjrSVxKaJyGy4qRrBip7HyFMS7jMfGibxbGo5TcaqCb34sruWoKJzRHCwr",
  "key9": "2JXKAVA1dBvprUGdV643eYVkqa4wZP7SNXfmb7VE3JqeJVAGteJpDkBDcnr63EyayGMN3a3gthKvv4BE5YJF2y2g",
  "key10": "2wU6FpfkTrDrNp23j9zEAWgsWUKNqd8ZdWEnjDDDCH6EdYtib4NvBWdP1b4mByVJWc3fdgy7hWMgR6EGR64NzPfC",
  "key11": "5P1CECVm5HbUyF6VXwPRGnTgjdH7W1Sg5tZt3tcW5H8WK3aT6Z5HeUNwfzoUsh15c6YhKD9UoBTA1Gke9HR8BXRP",
  "key12": "YSXEkncg5XTwCoqpaMmVyMJzTGVin9fEwR6SwhLUZjAHMp974gNYaqQgzqHspZUCH71rzwVKq5s1iGrD62Jtzr4",
  "key13": "3kkq3gfxzukw9p9h62XnJPGwNX48AjF4z4wXcpkZViDoGegxmZHrMdvgB1CTxigypxdqs85VirHq7fxQ2qWHm2tb",
  "key14": "5hBDLw7nqVK5rXjAAZLRwRdMXKrwfYMahizM9DbetMgzew9gA35iHhu11bHgswSsGRms5nCGbduHGHGZH9uNbwP9",
  "key15": "6A3WvAUYabe22C6PXTZbPnSyp63mWWcDktJ9wWxT3odc4M79Q1cJFcnwGAjrLpiNAqDtnzyAkjHQPDR14txi4gW",
  "key16": "9sQqss6WrtJpGdWZj41J4oLB16CF1YTbun6GwjCvWwBXJt3TXgAXfUYzTmqrHVTXyETsP9pBRXZwoV4hPJwEXUB",
  "key17": "24WptCjSTjpXBi71Ho979uWZ53uGYU6dgwutbLJyUJqX53hPYNeshEV8tmv4sBkiDrxk2Bx692rY7oiFniNFAUeg",
  "key18": "RjmVTxReW7Si7PXMekhJMj36rxCQuuiao3jALJxDgQMuSePRbN6vCipsYw1TSKgXMM7BJX5YsrhmkDBtqo6w2su",
  "key19": "3m9NZWv7ygHfEprmxJ11rAwDHTzovSgSoc1PP1vArNQ9fkHTgXHaAN7ZUfs12r7z8Zs6cZrpkjwgiFwnZZTZUqTU",
  "key20": "4EW9cpTn66YRWdZT9x4XdhALedbkUjcUR4mMTCPHTGidcxbcjuYi71zznQ9iYpvXa8cU3mMMi6iwKxCgSWdjRXgs",
  "key21": "2BLiGPNau5ZnVTMSXNEgeV9DuXmgjdJHeb7FgZE4WPgyNShf81qXZCGBiUgxs41DpUWc7bRTNxPsweeeEze5KiNr",
  "key22": "3waARuLKFPfcsx9DZgBCVFpXBfLVDq1Ki4WKkRhd5auF5yEeemA19QkvCXxo944eu3RRi6B1ScXAQCX1CFRBWZih",
  "key23": "52qt3MKwNRaomnYoi7ihQjdbxiLHJqmUPZgoUp2Z98P8riZgteJ85sAAoU5rmAfJZuSXcukczUGJFKGxE3NU8WG",
  "key24": "VYvXQN3sN2dnJjwzx1WC9VTYLLSRfiTyoGT4G8jBGNg1Q5W9Ac2dDxX3d7AaJiwoJCEmMW72jSoBhvJRaugoQ3e",
  "key25": "4uXjTwKERQdYBFkhv7yrFAVEq1Pb6yVHpbwFRwezvLJ1qPRQvCGcvsx5H9q7vho6R32YvRSt5nrpFX3C4iLnXYMt",
  "key26": "3zGRDBKUxxSCie871MrNU1kdWQHK5ch7qtQJ15iJ5AFPXuWeWwC4SespB8gMmwVggMApxVat5JugPoB6AnGuuVVS",
  "key27": "2Y6YT7te9QLTj9qUE4wPBZNGp3mtjGFRZ8CmtquiwiQgotvwbFy11UXUZCkRzDpSHPf2YuHZXWqm4BKZrjfvMJhX",
  "key28": "3Gr35EVrxdAiS6PHNMckvY7aPJHW2yQ6ysGGRnduq9iWbkRnNs69Wxg6s9Ty2xb5FuX7xEMwMNMKyufZT7PZqkiF",
  "key29": "568GmaathZKuXRGPnMBxFJjiFKu2k4DRRbgVhJzR1sYBsrM32ZFAvAWx5kwGWWTSJKwWTUHqbdHNFEWab15dqZrq",
  "key30": "2SMyNWShtCcRL6pr1vPQdikhan16TsNRZqRa8TjqzVhqy5F3B6wGEWpwthLDLKx8conDUnkhLbBiYBXq5sbhYxwS",
  "key31": "MMsF3iMn7GBSGZ1sKtQBN3N7XMViTDJvyVzefaYi5Q73x4B7BDpePkhg16ha34y2Xpdqd3mVv8P1sgZQGo9q8Hc",
  "key32": "4otboeEYLpQ63GTZ2xJH5JJgGqLBYbmnG9YiyjxFsq3dQ44z8PTYoDhQRbG2HNwGze3faNTXLeEjqVSYqXXF6xgT",
  "key33": "4Cc1isywwUfFDNUswgHeGjUTDHaJXD5nQB287ViEuBjnEjosZXAvyTnJfuhicGppQtQjbDbLV2uVjro7c8m32SuC",
  "key34": "23csLMGDtKt5ypkRovgjwWBww6jvZRCt624arRn5uW5puuiQSbk5NXZUpoVJH1FmQEFVagf4Gk7gsmfXD7gp5tEb",
  "key35": "dnC5A38UayoHNL5yvvgWkPipPHTw7WEFu2c1agkzaJoaGE5C1xT6sf8VfmEeoY7ermM1e4vKywA7b4WoozX1uKm",
  "key36": "z1BRVvGeT6YjebgdwZNCHBuZBQi2piRoNnzS9ZjfJGPVn2qg8n2MaoYsDgmPZWAj5urHdmTUugNKESb3LynZALk",
  "key37": "4QvojDgek4xo1Tw3PwFPvGUkZCqwXXeeZVVP2fcsPg4r6UkgxHNjPueV36GSw71KuwQ7r22jfsnRQyrE4ULjB728",
  "key38": "3WoFBVnvZWDsHVNrY19MVHtEEeTzDTkYU8UbKSyLFxkrucuAqa4uT5irv5Vf5ucdMcZYLLD21yPDgdGEi69bxJN",
  "key39": "4QnuH6VyKmx8V6KzTmLVAa7W7YtQbVYCLorNFRy2QUysJz8peXe6e9n2u9i4RuYJtnWvjZiZq9raeYd9t5HkqScQ",
  "key40": "3kwcd9TMR6MksfNox2wRFuboSN1FNxLV4hb2biWuNv5iBZ1n4FpGZPJ8C3QVDYusHytGKJbip6jL3RxeLU8bGQyS",
  "key41": "669asMpTmWLbA7xwJ8Jyb5cXeSVNzuURtZd2ytDGUeF5H2c2uG1ULRG1tZcBTsiqbXEjxjxAKCtRu3LJxcT4WrHm",
  "key42": "5kgwQuhoqGAD8E293vaqzou5rGXp2woLqJUS9A5zBBTvU6ZdidgyNcmoy8nBvpzcH8gLujJkJKEchsPRFjPUZT5w",
  "key43": "5stPxzWHSftRZMXA1DxaZSLSFmc5stGXkbChuf6NBok2ZAXvPJCrNjD6d7Cg6HkvWChMgBhAXPdLPPcP36PEvsuu",
  "key44": "5UWYnyGBd8ekf9xVw5SFBy5znsvYZ5RNffjeWPfLqCFbi34W7LByHHJxMTq3tQi6D6oLH6Wnaybb9HS8UCCFnizm",
  "key45": "QLZ4BwZfaCSBTLpKpf9PzuhsCYQ6PDk927zoKRSaZBxExYpz4MkXDn9moTh4TZdapmQbjrCzBn9jLLP2ut5ryER",
  "key46": "kumeeGefsdCd6ER5KA8Z3gavxnoDZJihqt1ZnFtGk4z1xGNNr1qeYpjZLCDwXoA7sSWKk3bobriY9GWUfact8nW"
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
