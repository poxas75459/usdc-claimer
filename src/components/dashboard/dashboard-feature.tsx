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
    "2Eg5NFhmv8d1egNhSqYPdLZxTcDhsEKE2QAyd4DX4juUxG7Lv7VJYRqcArxnPxHk3GAfhZVzPcsGp23jA7bujgW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43f29Gj9w1ZAk2UFrTtqK7HJcYaJKHNyHg5M2BM95GNdgNve1Wz5yBfgXT5WhZDvHye4HnKtyAhUU2Mqa1cNjtUm",
  "key1": "21kwzmZiP7dd9ywLPs9YBFS5BFBxVQ5ZWCZfyLt16zLaodwdjV497tAsYSxsXSLPGHZY7ZZi2nFykrv2Yrr8tJfD",
  "key2": "3VL4C68TTBEwooFhKBUrPqbGbpTgXSkSU1z9AQH9MLUSHsddrLfkT6UNLHPTr2iPgwHoqQ3DvkFEbmP3RwDLh66a",
  "key3": "ckF5YMiNcFsYPgAf4i3XDH8PrGCs3aTFkjL99WghAGJcUyxrkW6ktHYPLncFYuVmiy8RE92yGoYiaFTJn3aCMos",
  "key4": "497mwmPWN92VRjTSmXP52L9U81KeqpfztvUGoynGzK3tct4e9mQy27oMc5ygLjcxjsBof2MFPY5NKgk75TzCZeoE",
  "key5": "5ggAiCwu5SGi8AMKyRytxC2tyYPC1WtCYEoNxemZ1QA15wCjJcFwLasGyavMK7p4jiHJKvBXdLHw8iGtpBfuhKmr",
  "key6": "66q28ExH8NKQysVd8SRQtMAS4qFwvWWVz7itncu7ShUwWZ3rcGcndXmLhrYfcjiYMo6y3eEvQspZHWkuzRg93wB2",
  "key7": "fYe3HMxVNd6VykLPE2PSARXYBkRC8aAW1E66TAXi5cQugw8MvVTWnBK4cUPv7oN6eJDCJrNcXHMk4QzENyK1Egg",
  "key8": "5CxXR1XBRcLAtQ5mKBZqrunXpv3iDp4xtw9HBBAqWNqacFHVQ5kWqJTR7UhirzRmYW8tUr2V7Ce4imidFABMPKhs",
  "key9": "3LsphXCEcMKrLzqtz92s7vrjtFFLFkuTTqjXzXtXcV5ZqbpYfA5SsQP7G6Q2JsVQ4mD6N92FP2po4agdwoXF6uCv",
  "key10": "2ybLsAdb2kbtQtXKo49euAoSxvWDj9qie1r5VqQxdSdqyZ5PrH7sJQ8FdVNbvUJzAMkeqvtkP2B9GZDJ4PvTzd2w",
  "key11": "mPoJJKykpuGroWxK1f6wjLxbb1iseyLaCsx2Ee3rF1yQcERLd315hzWh7LNu1Qb8fWVJYbYWvncizFShYsqJ2Ko",
  "key12": "2vxM4VmwXyB9Gi21YHEH7LEdCgiDKgcMzJELG957gcS26TRZxxabVU8vzTQ7PbutzSZgQ1XZJWCtmZwTeudeV2UH",
  "key13": "F4GgGJ8Dp1Mm8mH8uZnYAvJkv3fkwRCDHudB4Rsn7ziyJxD6YsU6TWD9Rj8YkiY62LvctqJjjVR9z7sBA6f2ArQ",
  "key14": "3SYQarYdqSryw79BbGJ7ckAX1DuyZNmUGnTUyzb5H4uuYuTEGfhVanfqHwbbtpLmFGiHF3xAtM6eMGmdBLud3gEK",
  "key15": "3BTZhVgcyoDBGPXLboZGNEBjqJh6SRAcaFGEJaqDy6EuCjZMsK5Sd1pr3HsEDsFvYBa6Kj98rRnVMx2M3f5sqs9v",
  "key16": "5p2eg1rYVyMZMvCn2Tww6vST6WG3qbpwRyEQw5dfA8dY6BxzLqD9hXS9XeMoYjPZ8yMUTiFQaYeBMoLL5t4zebjv",
  "key17": "9mLXgssZavuW1fNou9rb3Cn9QE6QaqjH1EBrZLq1tdMjgHdqErERNUDyZ9AZHBDeQ6xakvNxTFndq8R6B25JS1d",
  "key18": "2cGZ7hTuUUA9f1zijBFK4VdNGtfCSfwzN7C7VVRpRwzkDa38oYz5sMeYHCMsV3THU5rgKKnaggex246w2Smnc7HL",
  "key19": "2nZou4UEeispB9k9L8eiuue5dEa3pFeK9ZQvfLNwohY9DCRBNU6EhupP4t8SWevjyYyx8A9pKQdZSFmeGabypMRe",
  "key20": "4vWMAqKiJYBRPyAUEg9J1b2mBr4etBChSvozeUkMexcR4c7vqtVajeH7RzmVka3GNcGGx8uTsZKuxYZdRrUGXMCw",
  "key21": "3AHZ2PCJx9ujEPDn3C7rzEzTj1LHCmRvkVLJCpV2gm7WxTxBRc1i3DXs26QgQFCCPJmdCZC4GJKm6TH1mBVnY3AH",
  "key22": "47gpTJhZAVGLfdbGbA5mFbk3wMLpSk7nbrqrnmb54dM3spAGSifQmZbyb4JtJtGCHkeodjSgNkU1aTP5w3DNBLbu",
  "key23": "3kCtgC4i3ZcxvQLc6XB13N1EuTaAjPgmPXc5u9CpcDwikfxZLdBTEmNzNEbavZeuiCkyTnkY7qWDqeUo7xBj7vEX",
  "key24": "2w7HMjghKCTi15mwr1Ps4ZDyMM5YCrC5BE1rzvQzxo2PJPTZVoL2WzyibxEBPg8jzonPDTbdjnDurPBAG2CzLzYM",
  "key25": "2G1oUKTAsMFLfzNV5t4KzkiaAgFQA2sdHKwGCGByRttkLXK9NGetb3FBz1a6fegVc7rtVzkXMXhom44KLstDnKrn",
  "key26": "2G92SjoSQQJoDuocvkUzpcfuZ77M2HJrr52mLdJwwpaMUrXY8zQzJWxPP26YnZK6WtZmyqqXrqSBReMW2APyx8KF",
  "key27": "3MYB4afwHwjRVm1XhpPd3upRzXhrh3hCGqFgJvUkpVDVgYGcNaqWMn9JJsnRtvw6Y2AGpiviPH2tbGG2k6aXaHj8",
  "key28": "4CDw2o3yorULrCMKAQSw6WZ14FZTzZs9eXsGqNHHvkCYaCm9pz53DZUkFKnMP4atJgeiHjkU1cuHP6uab7TrJJzg",
  "key29": "2XTqw3am2Xcwt7Ae7CFqfFuNWzM1MN3B9DfGi3TeC2LYpPrxV5jgS2JmYVnLABRpQJs8a47ia1zYQ4kGRB8sz8i1",
  "key30": "2oaDaBuE7EpNojQavdJKuph2AnP5RApZSs7rBC68sU28pMCaDtFowU6773rdQywAJmn7wTi8zBykCDJdbdpSaGTf",
  "key31": "P2Yehbo9GN7ezia551BqKSwaAqGn24DG4KzW8cqn6Jd3ie794Q3PoLRfC47pWQQ9Xga7qRKixXyq1gbijbSeEij",
  "key32": "21nywekuSumugFTrXJkvjqadjeq2wuPhYjwQRo2BCkkcqHr7mQ4VB9BbrByUvVCKFrNaw2dNBmUzKFipA7DKERzm",
  "key33": "54xPQMfkbf34XzqmDJX2rnSiSrtfLNRKodeYwcvas3x5CC8cs4uxcMvAkHRCZq27SSRBKAtA9vvikpnNWfXTeeDN",
  "key34": "2nsyeZVQji4mQvcimB7P5wxWTy1hCZ13icsiBeKXk8gNsQFPxMPsoTK8tczjD9RzgMKML7ocy38fv6NnmjQMszGY",
  "key35": "hcbKU9YAHxekBUUZrGgkAwyCx81rE228N86xXutnXKERTE5rGt59UU9d6QB1DTNi9Ro7c6Z8LEDsU7A2vJ11uYC",
  "key36": "4bVGyGR5fQCWX22pYuGpxs2mkxZwnC1t4va6B5HEViZZ7eNdxaMTdiFVW9gVrpizaUTvxqHz5oYQVjgffNYdsxPw",
  "key37": "3d5Va8WunmAgvFMjJDvd6FS9EA54BEieu6Tc4s2jSXZrY9e4z6yuHg9UgsLKYR7bf7SxsmoLbCmu7FXp2jGtF8RL",
  "key38": "pxAKcADc1TZm2L295pD8trdXbgcL3WDP69mDbCcfxoqdFV3asXVYhxUmfJq6QRYPqYjpXgGxa5X614Ekjaxrc3w",
  "key39": "eyhuHBRzPFEKW9e96X9mWR1hJkAi3QZGyHXog39Yb7mLfevQ9WrL1eXq82BnQnBAXSAfazu2NAvj2qcHA1Ymn2t",
  "key40": "4kx2zq7hEwxdevogNCraNgCA1DGYM2jDcQMCQ3W79Jd9JJ9gesEvhSfVHf6LcsEQdwZ5UBbJodoTQUePKdUhnZQ1",
  "key41": "27eywidTH8PeemCjAkhTY5S32Vjwb8w3biZr1cZ54t7C5KcjVxD8Rx14DoVopZDrNnBriDsLLbW23gXHnxg1coj8",
  "key42": "pGDyMZ6SMcsLBnCm1cRoHsRLSwVYcjU9a2aqGfvw3cV5iqiB6q6dA94da61L4Y2Hw3rYCze3obzkLy4nazrZP8t",
  "key43": "5ra87JAY86LKtmLdgzpaenfY9XiD7SDtV7aWDgS568vaKbjLPWp3QpkED9CGdcxWm8k1hZ4wcaouHqevM91ZSQAq",
  "key44": "4uPAVyckPEo3TaTsZTvXT3rYmhy6oXf7W6czHXHVibx7LCcmGDbSzbpAfEgFu2zv98squefVrsQsHB1LMqKhUErB"
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
