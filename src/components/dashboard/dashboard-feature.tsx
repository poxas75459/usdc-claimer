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
    "2j7cMKQgaJrwfhGyB1DEwn9Yzkz66ic8DEipo3ywjveLMKh2fudaqGVbWnAPXEw6jRton648fq1m1oDENze29M9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dwNLH8Ccztqcz1Dvn8z8GKKpnAdE1CQ3aMHbyFkTg3q9FUbiHoGbwboRDALLF4FhdVcwmM6Pnh5TGXim8mo9eXN",
  "key1": "3u92B7kwhjfbrt5oNtJVkFJsAv4HvesgoeAHJZaW6HJmmEBz8x6dGNR9wUju1VAXx5yTxufiQ5q4k4tdysv1HqVr",
  "key2": "3yoTJrXsMuapjwVuJVUrXLavo6qqE6QGWcrtrL6dCkGDQWqiMEHJjRW8JR6iYtoCnr5XciwWWkgqhU4UH751evKT",
  "key3": "643LnosNhrqcc9GdXQ586yx4smPH4JU7F3XeQgURJMbbvt3iM1XdKyjqiPpMYiUwm5HFeW8Mbowy3VTm2LpUUz9s",
  "key4": "6r23MQp4mR9S93cFpJSbpssbvechrj7Ui5Dns2y35uus3ZLCKknHRYihjwjRsrUzrPnUcXAKm2PGvxa29zHZfCU",
  "key5": "4pr2Qq6YnrHbbPa4T36RAuyXUvHatvFzgdM4jiv3iqekqGWdRWjNWEyJq5igsgoK7tofz616J2Jdn1fiV7HGniVH",
  "key6": "3uneeLAHtHgdkmTiU9pSVHZD29bXXaNeESMPZWfCBW4weHCsAYDcMT5dxizegwAr2s4PoJNKCLUyhubfzTJ3Fxt5",
  "key7": "44Hp9cGKyuA4VRi5UXsMjGdMsHqnvDyDo3Gqh99mnLNdf9XSBziW27wNtErxA6ttfyWGeJvA8jEgC4jDgRkjCXPQ",
  "key8": "2wY4uN1scqtvFCMVFGpvdbwBBA9kah7mhokGzSMCRxiNGa2VkgWdBnvTvfV8Xp8aF2FHm3tfpVQe4kfGmmAMw318",
  "key9": "HdeeYDVwupWwu3TsaSZDoDxwyJRdj7sw1n97G5hYwHzCp2RGLAZnmvaNv9nFf4FEL8jfD66qP62ngodQdQFS5qH",
  "key10": "2xrhHDm33orKBHWSkc2NCpJyiUNqgHLc7tpCnEDsRTs2r22gjSQdggo9shuc6L1S3CmnNGNTACm7DtZKWGDTqAvm",
  "key11": "3wVGz4myjNYy6eiM45wJuaD175a3JD49FTZDLq2m4ybvpsZwW6HyeR2mVvwovX9XWZxjuDP7jg7hWnhgNJ614uFM",
  "key12": "23yUoKEWtboAYrNrYouRwkEdNj2ou5wFyWaKxVdoVN17DoDraJBQ7DXo3krFigGXFqLK9qAtTn5zSm6qr4fYgceg",
  "key13": "5S3YU3KBLeczDENFfp7BzpMeZMMvRJX6c5dXRo1LZgRZboT3Cn4s88yBPudpoHiGtDfnF8iFoNYvEC1cZZZx1nqh",
  "key14": "5HAkkM9N1E6WJnaHM51b7CaCv1uFtDSoLsANZn1kDzAa3VVQDBoadJs5qknVJaTuGrHiPLRH48K97AwTmKJ9JXRM",
  "key15": "5uiTtaoxEBXgaGSwaXDhAchRcBQx4mVH1ue5c7uBn913BaCXJRqZrd6k42GysDg74Fk6Qc7eBfj3zoovR4cEcuZE",
  "key16": "bNUbS6Yn3XorJgmdkMKp8DonWpbeECnHVpYhSk9Kz5TMos6jeP8Jn1V4BiJCHvU3kE34iNXwxeDDuYNpXRGDKhH",
  "key17": "5yZQovUVsm57HBQjYz9gEoi452K2RwwUXxW7iNwn4KN4SqTd51vrASYtaJSm7ktgK7iGktgZNARhavdTD7JdZr8d",
  "key18": "3TMbG79kDm4z9tX54mRycNy5cvKUVryec9z1519gQvame2XYgT6KQ5K55PfrmoENTa6uqAKRccAnkbUBDeDw4xn4",
  "key19": "37N2VMhkokVimyTpyrHkRogt1W6tULQVgD51CcavY6dcSXafXg2wmfLYVcse3Dr7xMLYT2RizS245Tv9nFYsugXL",
  "key20": "37M7uQEVHWNxV5NAzqqxedHkKoX6hWbyTHexjinaLeCYCaTodZakYxeoYv1PhdY2Bq5b1NZSrTui1ikizQvJ1nYd",
  "key21": "5VEpVJMQFdjzHb8GkVyTxnmZvQeqK8ovQybyAVGXUT8LjSex4evGmXCC4tEiCcZEN8m2YCRyVrJXMCAupSJgWik",
  "key22": "bHqtHE5by2qhgGE3Fus1Xj11H5DpDA3MaKXahUrGBpsdE1n4USXxw8dU2FZJVqCFZSnobzPycwaSEfB7e56RLTE",
  "key23": "4LhLMY4uWwcwz4ZA4X4bNx2K2RVUdUogYpA8EPk9Mtp4edP27DTDUXqVbJzqJ29H11cTvzFV4nN8VWomZF2UdvwX",
  "key24": "2MKp5ysuGWaRRLC9KdPJRzEgQYih31Aps3Vk5mJekJLkbUaFxTaintc43zuubh62on4f9YguEQJgg3zp45Rd4HVb",
  "key25": "4B6VaMfy5DBhShnqFgMDT6NUQ2htBp77g48Pv1oHPgStxmLU4QjYhGuL2taKqWoPP7eiDJPBoabzjCe5jKDxPw97",
  "key26": "49p98zV2SZFgWh6hUETo5yJGnT6RQGmpgqEQatmtbRBYahPWpzCWEMREf1pmUKpKNpxkjxoDGdJaZMs43RErez6q",
  "key27": "3T4W66YfrxswkbxTtFzkWNAdKfRrTyXULh5gJREvU6CbyzeG7gzyNvdW8ddXdYsZLeSfDt8Unuy5bifKVHDew9UQ",
  "key28": "3Fbb4X3CweVR6rNQ71kJbJzkrva2MzcHtiUukymobLmc8cRrzjsMrsd5dfHKBRNAf645iQU2eyqaUr58znuZ9aZf",
  "key29": "4ZkfnHehxbpmNjRFgPLZMCDi1gZviZEUrcBbjF72oNtwxFGuP9yLNbt3FKwxen296ujri19t9A8mxUguR9RyKgEZ",
  "key30": "5gDhZ5iGoKFH8pVXKEH8SypDJCNS9aChS5y7Q4YZZh4Xrsafj1gBLup9QreuuSBjWkZXzGGQjDimpGPSEEoPmeQv",
  "key31": "hnC3nmkk6vtahcmsPs9iRACfGq5Ny9tBzpJMbHDm6kuuGupJ6yEAij6PnwanJVgoAJrVkQ8Esi4RTJWBHztebAV",
  "key32": "5Jhx8i2JNYMKXdiHcnEGZJUD5uNnpfUHG9tR2U4dw6sSg4sPSkSmScs2hWwkAQj22MKyatXt8WuARneHw2sawum4",
  "key33": "5T7SFQAV6wWEQRZKD4jrW8QG3xYhTihMNvAkaZmpn2v8U41f3mhWETA69hjax9JA5Kr1eYjDADBhdZubnHob4yry",
  "key34": "4Bgs1wrbDg5swhzLSu4YLS59qgvmQF4qqk8qZGG6yVJtZWTJaSvrDdxaULAvY38w2ygEPYksXvvX7jYAbBxgRinv",
  "key35": "2324RMTW2B1Qp98zihtXArZv4k3r2wkEUbxnVXj4xVmLVHV4Hs6o7kpDNAUihYbqou8YSwUoh3KX7QDu4YBCH3ab",
  "key36": "2rRyfmug3WAPAP8r894UEbRU8jk2LPjubPxVKa4PJwHqye4eKMGhs6v4NixUfyonSPrfTXM3MChWMf3hZ3rQWVWm",
  "key37": "4DT2xhoL82dq8D2kaU9M62oiJea9WtWTzXGqib7oN291p8QSQWXUJLfpgWJvozVd3G1dSP94abijMMi4M78ywrCd",
  "key38": "3c3kVm961BQ67xTZUmpK6PMXKCecC8RdSrrGS7EExVjJCc8HQo7X8oUhFxakgnzJJcmF6QXnmk3n2Wd2rX2dRyhz",
  "key39": "xMC8MVtYp6xFNvRVnkKuiogWhMPQ94tSet31RS79VCB1ttJ2HpRcdJodZxA8fWyxPiH8FqP7qiLY1zuHpN9bAoo",
  "key40": "5XYARrTqBdouPrX9xhpr7HvYgJ4NLVHXawBncXMWZdjdFqFLdPUhC5pd1wZBaknwGrEEBUH1JdZKKjRp4NuN7jMH",
  "key41": "6744d7QhH69sYZPKfsw9fCvFmw1r1toHxrqfT1bYoxQ7yJH1JSNT2iS8KemFiDyZq8GXfQGwqGRVahNCnbQ2iEbn",
  "key42": "5de3jLQPwPMfYRBq7KqXknJS5Nw3dgD2C3KZKugXrdVQZan5V6DNNpXGG113oA7NpnwbGJsPEB5QZWe1Km6KB4e6"
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
