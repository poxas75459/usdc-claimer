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
    "SUzPDwCApxV1TUzS9gcz76iQQrSMcsA6MeF3PSkGBtQ7P1rja35zazf53Fwf1TD6mbcirGJgEHsDCXbS1jM1z6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FvswZuWncFWAnVXpj1WxeYRLDi1tQprnoQt915qJMaT7cwRJ8JbGQTKAYhU6zHjygJeve3jbXBQ7su81nkSHEC4",
  "key1": "3VUsye3nChLhEdRiTTKRLkgQwm2D7NW6gTcQrnBjhRDEK6A2D4VyszyXUVDSfbrrFKQdhpwTvLsXC6Kw4VyC3czx",
  "key2": "121nKeTq2DUj72J6sEFF2v8SUGPeCJrQKpREAYCsvcPagF7H1hf9qW5a2opAXPf2vEeDB6jhhz4PeLcvAmmpFiTS",
  "key3": "4VLGvJX9JLyoewy5pkUcfVGYkNRymexDW9e8gJ57RshKrwvmZGAZP3Sys1T1z8Dpaq6kndNYnp7UKxo5kudcNCyU",
  "key4": "4ezyZatoXURQkbJexbqFKv2j3VY6bwP2dQXvQKa2ZzzCoCj4HzrnDJ5qvbyUXtc351ukfFnKzwC3XVeHnJAa9ayR",
  "key5": "4cW5TSrrJyrq1kD8mHmzpESpT5D1tCZZxTUwf8bEkDtQK8BP3UQ4KUJc8WmZ5L94ZssnThExWS9qvVjKZBDtyLK4",
  "key6": "59DVoz2HBNtxgvkTrtp8VvUJnKERJi7pa9XvJ3nNxUrGG5vaCkBwRFdmLHMuVwHhQR7n4z1WiTCpNeB7whdQ1PKe",
  "key7": "4JtFa1LvU6zhQePteJwEgU7McEsb84K85qP5UXEdHtZxnitos7CvucjxhzUrmzVe8VjGdYwRFshUeZpRhaZmncb7",
  "key8": "5zqHowehEWY4d819v5Zc6vVZjUZjEsTEWtk29Lqz7UURDswVLxXNaug1Kd2YoQJ5GGjD5rnfg7EKak4dfkaWdioy",
  "key9": "5Y7pvpzrvMr117AEb99nmbFh2k9PpsPcw7qnQDLyjXeVQC8uzf8vPx3adQBSvyGf4WXtw7uZxjvdHKaPf8HHAvkj",
  "key10": "2vQM1Gt154kqoP7okpi6yarq3UYJQPsf9xZ3L8moL22gskSQkzWCvRyGw1rfFmfkMJfrRBsgLRdDwKqdT2S5hZnM",
  "key11": "3DdtYVNRpsjKy2P8i74T1bqFJY2nSHjszSKoYmKfjG2gnpHJcJpBY3P3RUmafRLY4FCbZEbM88mxFCyegE7SU4m5",
  "key12": "KFEr1v9jR9RDHvV9tzMVRWWmpHCh9WdXAXRmpp98ZCSKb6Bd3Nf33Egw1r4CPYvoVZ3m9eiDZfySpnpYeopi1af",
  "key13": "2mjjtCpKhqfF8S8QkzHyC2LvYhx991xS2ATsRGYkvHqXsEiJfDVofLDfTq41Zz8HfSqYkypWHRVNfy7Drzi7uGL5",
  "key14": "4dhrx1zHKwgDNUTBHWGKJtQxMX4ecBCAYzyHqTxZ3nqSbxTbwRYWgTZjpyUz7AmtJ3AKWU7fayscKYP69L3SB4bA",
  "key15": "4zH1xhuUxTS8DboZNy4e13EYuAdrjh72Cvg42bDqD5hLY2P1V8tzgrEMTKn17zXUvrxVYNxZo11EJ48D4mCLm2a",
  "key16": "22oyFsSJXSgzTwN2RJw9QukJzrVNK62VNH2uTQS3YqPMzVLzAHfRDepc62NCLLWi8B1G9UffsVSdszZx5TNrCbQH",
  "key17": "2F3qTrFeV4pyqJD37p2ZJrj3yKxiUzLsVTi4mKew9mKaoxAsN2tBUGN5eRzgAoTgiCLgPL2FvydXyrLfs46vpCnW",
  "key18": "58iXYPaVWGcMH6XbsZBaxksToPdnRWaswKamjY3xVk6wUN2wTS2iVznEE8wK3vuUbWiMK3HgbWvBTEhq7mX2Yno2",
  "key19": "4QppLzAe8GFjJP9mv7FyxQQSfEfAjC3Yfr33ix7uvJkxFUGcWK6X6pE3FTRZx4hUj9ez77gFH1bUYGuygqBBTutU",
  "key20": "Nwaqr2c8uxJVC1RWYbeoDDxCRcERFxP4R5qtCp3z1rDgtCE9HrzLQ6MWvJvEqY4ptHY11pRZZvxJAag1oFghvn5",
  "key21": "531LPMxWdqWgwur9iknCZ5QBE1tDSxDYeT4G66e4L3E5kWQJ3KwxRr431U9LcskuEPn1ToPYRjbwccGosxic3j28",
  "key22": "4WS733zxUtB2jAkTrLQY1nDfZD3gXxNhZFQVqYModqSUuQqFTyxADnWei1PvTeekR72rZLJhg5ghw22CenZbTmyE",
  "key23": "3FNi5EkkrHLeyvnJFJqKZn8zw3N1CwPFAVV5qNP1ca2LTieyRmL7RhGGCsk9E62peQ78YLroFfHdLnhxkaqN87sr",
  "key24": "5keNpmYVPNChQgSVMnMytL25zeUraT2bwLFAuup3FEvD2uTx7uHvng4vDg4kb9FSxZsMVqQTuUMu5bC9ohJXMVTk",
  "key25": "5w8iGqcADtzGsjTAVa2SkpnajHngWVWkMUpYtUYmpbU8rXibT16DofxkQMZ45APbBDsNSrU5YRM7xMMuGeMqRkqi",
  "key26": "2yqTpTrvMBd54qfFipeQkeMr5fHsGRDrpBxYi5EKo4DPaVtYAfiqPDahfNwQLJG4vhXYqZnw4B3y1oMpstL1k3TM",
  "key27": "5GGrYTXMAeE1BYx6o1weiD9jKZMgZBfcqgNj375ADMgHGnjXybfjB66wLz3PACwt8Y8ryYShdn1hsRYqqRMpgd78",
  "key28": "2YhLfFUChtVdkXye6kQjBcaNwHewxqRiPHXHrTXiRxq11pVGfwmnDTXv3aLUJSSNHogYKJHFRLme4mRtAZE9he1V",
  "key29": "5MBGYYdrM3zxxmiHtLvqnFidpwUVMXZpJfpbQpJhWv4T789VxUVZkj1u5vWpSgN7KjNndc26VrqhqUChnNApVWT",
  "key30": "3Pi86ruM2HmGCYgMavcuBLBAAJxvYZ8FUALQkjY7f7BbZj2ngf4gdvf1abnukMY6aZ3bmYmBz5a9G7xtfJmriunb",
  "key31": "5USFwvpvjHbktUVu5qBuwHHaYrupkQfaszfm3dg3v5EAvPZCzocsEMaLCuWvq7wr1q8ah72PyXbAZExD6y33i4fh",
  "key32": "2AuN9F5KaSjmZcfXiZTTZNpynP1WNihrR9dvURjeCxiBa9G7K7ayH5ErYo7eRZ3ZARp6wa1ZKB1Ak58BZgm3Z7a4",
  "key33": "5Zwtwv2MBEMUfmbw2uH63jYtksJvynwdVJqaEA6h8g5HzBC1KY4sPiCsT5DVXXDtLi1Hx8nvHZ8jaXf5VH1LDV48",
  "key34": "31pVBAQvs3nGuhrzgehCZr7b5L2QWi14airkxSAqV7RYeMUwoDRjD1ubKUaAWoDmsecBZ5KPvmJWGiZEr1V7x6xS",
  "key35": "3BHa8PrWVCrdthLZb36XdaCv6LchrcBDsH6fxywyUMvrXretKR2jsSQECNT1DNZzF1ABYvjeAEik5zhX9qHrk4s3",
  "key36": "p9HzS7Ctc2C9gcYcWom3UWM7qatNuEwhsjQKBao5EHUgjEpZEG4mkfCQp67o4Ttse8mJnFiGTWQwUu4my4i3MxS",
  "key37": "3ArzieTHddT2PxqmCjD8X29H8M6pbYd8CU2nY74KXKArvaQL7NkCRrnXHaRD4Kins26MrtQvUcN9ZfjcbwsvwpW3",
  "key38": "3wGcYj6xg87S4As7UKdP4NHqxrybLsEWTw7VjNQppKYS9YkSGdroTZ2F7TCmaNJLjoTNh52MRjFMXQVkQp2ERJmd",
  "key39": "5NXyvayDqkYVVVvkpF1e3HUjjozuBPdJA8yPcDAJoQMRtZoF2jNxgKH9DsdKJHGUnqNPuxJVsjBbAyFzkKbSsHB5",
  "key40": "5wdBtk8XdMRsZqci17L56CxyU3XoX2bf3Azzq6CwMiZ2mFPZfPdBGbh51Z5s6wAZmiXPiLmoem8G1xTq9pm7wHT",
  "key41": "5FbLXnqsk3jmddxrXNsg2KkEPH8wGLn2a3FaCRUwTphSduhgXpnhqkkVH4DNeWuGRMwKLuVEN49E6VaXE7HPiQPW",
  "key42": "2hwRRpDyShzvEFKUSLfDZsk76g6Jeg49s2ogCTuGRb1AgxnDm7V2ysruEsxKaVuqYsjakH24jkL7XWp1Mq95h3ae",
  "key43": "4vGxUQti5s322r1zUwFapKUNUp8177MMYrQRG4Gn9hrZeTpSAvudkpzMJ7amjqC9cCL89XfRkZ3R44TbUcgjakpZ"
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
