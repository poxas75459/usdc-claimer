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
    "sWpsQxbLt33GUEfM2J5ZqwKKnPqdgpGe5zhLNftSYsDYVnUnx1Wz6es5HENsKW7gxiA2sitn3wo1Si8GMr9mrZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JivPR1s3GZsbGkQ2mTBxPDCLwwhvsmJZ33DyDBmZNefiPt5Efe8Qc8q3c32ymh1QbZZd5HYpad7TBuooWsRjUsd",
  "key1": "4Mq6vhAM62MHYofWRoKYmy9cSC73cfESHbBwg3d1i7g1k4jnotoKkDBTofdB4ngCckvTwLg8LiJBzDe8Di6FT8jN",
  "key2": "3yNrXSKNTwUvBFMPUPAqhdTTYyGq93NsZwwZrRqVXA8bFUDYrghzpU5yuesHveAB4ZMMmVn4BqcPNmu8Cp4fdpDg",
  "key3": "5AMMcBVHq3tCtiNQh6kGmxRvWE4L68escxfKxuJoGfaiUD4BNjMxJLPMaMGgDHJuxDRvQMFZbnBbVcP9gEmB3Jbx",
  "key4": "5E4cjpHqmY7xbJWXY4DfFwZSrFh2KZQdQfZTYDTxUUVevMzpGxSDs2VabmMS6w6Txn2142hMEYTaDuoa8QKHSBxK",
  "key5": "4yWjyUdGmC8ihDM9u16pWgnn76s88roTbvoNwfxNsZZ2mDAaDHXn1PsDCGkaTDM15YsBJY4mfdzWsXqQwXj8mpL5",
  "key6": "2CjqUbABD4Y62xTbsPsmeB44h4vrDh8gX8JAcqzmvN831wkp7yMAPjxHtPZzM8B9GsaQBK6eZgn57zvsk1kFvZ7R",
  "key7": "NCKLHmY2mMXSgftdE7t4CsAgyzv8ZknbMQB2Y51YHtWyE2SHkcs9bCKiurpK7TFT15q5nr138qf5LETitwDzDBF",
  "key8": "3aJCwN3Tntg9pwG6tzq4RX8nQVRjZFScBHc1YY5xe1G1VTPjrJFz9f5Cn6A8gauaowRdWYiPv4TDxymNFVtmemKY",
  "key9": "3AqKWQtqkUebBzkeUbmmuwn7sXKE686JJSKnU2aACQJpxh7LKbTYYKswGeascS7AURgWtVssQTZcuAVw7qvGXtV5",
  "key10": "4Hi8kUHFSj3ydafp46u5wC6tVJReZktQf8WRRhdTeRDmDekNCrAXc7k3vZwbgVVF6qCwhoQPBzbDXb9bPG11ho5N",
  "key11": "3F4zowvtiwe2D7sKKRmhocDi2VQMt4HYpENGn6yX8mHbAtBBinKszhqnxy3R4w3yT9dP6SwMyMtfDUyWgFyetGUY",
  "key12": "3UPTV8vNkZtzgEdXCToinGvmTwxbM94TKYyAF2wxcY3V3WVCu4PVV28nos7pLKhxb2nfnxK5WVifyy8y6YLpe6Pq",
  "key13": "3uQbpAeKwyVa2ZAyUMfeaSTyFRK1sWDB6KyebyjwxLHiNMFhFaF791aq2fn54mUYQL9va5jSd9oVYCNoZUGRCQDE",
  "key14": "3Vcz45yduArqYBxdamcXYUhXy2GQ2V5sFLDQkooz1cCok4KuxZvirVygrPAh4DV254P41TqnbMaEAHUCpgZMfSXT",
  "key15": "635i7NEALhJTMvFkc9gvYLUvXMU9cjhhbKR6MVtfDiu87DT3hjUff6iRqAgkZVVaoPVAdRk8tkEWjMVvDoLqFuH3",
  "key16": "2R4Ph6vfY2wsrUackRoUPT8wk2hSDYksVwpM1TMZrUHt48JBwr2y4vRQnenzmsVHYzGfrqrjtMzKNc9LYbmQcQ36",
  "key17": "5VcmTYRuaTgdECmuX4gSBt1Cr7r7jW8gN5QD29reJTAddCgooVQCTNJMPhvWgqzk4uSnZUP5rYYscnvm5HiGBsXu",
  "key18": "29tZaxcHCyd4eqtZhLbDo2acv5o1MQ2CQ4b1mhnZLerzLGK23cDQbTA42DH1Tgfjf7121jdXhLxpqcgRAdpvVxdF",
  "key19": "WfJfG9LdbTk5oDnU5pevJtxQN2q16LSSr5RRzEi33we5TPVYPN34mSKKy7pYKETQhY6AKYxx6iDEcKcoemHPDqr",
  "key20": "Uwf8LP85reWrxTKs2g88vEs56kfQZN4jpSBuvjseQtk1kuLDS8wQQVumNbpEDMVk9TXUQauoSFPMGTiBS8K77HF",
  "key21": "3EFoVwoLjRWEhTJqBt5awDGKJRVFCVjxzpNz3nEQeJE97n23aUrhkaiLHy9Y3TcnaaQRibzej2H8dPU26UEmTnPb",
  "key22": "2yykewoMCebm4dAXogmfF2RxKGjeKTLWmUQSxeZzwFHDeE5m2Fk2Hu3Z5hg6Hm4sC9a6GT5RFtP6krZUTnV9SkRC",
  "key23": "4SYn36ZTDDum5tMfyjBDyfhTeLpSjpj5eZgXQzQ9RxcFaXuF6yfHVgKppyCGA8RpmhiZ9Fcefqk6W8tEfLPHKuMm",
  "key24": "5Q19LBky3zpMCHrFP1nWss9JDaNdQF4W2sr49m8oTq2meFVjXTsQxSnNuK83qes4z7vrE6gKPtTMimQtsaB1wd5k",
  "key25": "2Dn749YMJnzfENiZCWhoiMkUZwPwB9cvigrBGD5thvWmAcCZu7wB5vKNkPQfJorzba6MZjU3vnqFsRxQXdzmtiJg",
  "key26": "5FgYxg7BnK6FTXqJfHVQoP2Gx9pLXnWB9DH1qLv5jJweKsEtmMAhZatQJPMk3ZVPLkzNNhMZTfe4LdJTxquzZmhg",
  "key27": "2XWZ3RCJS7BeEgDS6AAo5db7UdQLAEnTq7QepHwSnUAPsTb7vK7tSxY8NcWifwb1Fr25cPtRfsq1jjZqTa2991wt",
  "key28": "ujZqFcvii6r12y5SznBmhHaZRBFi7FMzow7ciRQR4THpk2QE4dkd7XHoAx5tHjPoqJP8CAhKzjAmjSyRC2PEQRZ",
  "key29": "4dhHg9Ato8f6bWB1genrRDBucmL6QhujfoepR4HugwzZNBfjJaXW7UyuRKo1KCiF2TmoZTiGF7Ugw4nwT178Pi9r",
  "key30": "4KdGNwHvWnAnuyK7M6Nu2vMVr9TX7t3LZeWEzzmbwDWQUHEUKBmgUtyRUtwsX5wQ4yD3TqRCGZvTzPfHr2Xbqipp",
  "key31": "56DN5dMGwaRgFDpMjouZjK4rotopgVn9AkXZEQHBQ3fDe7fw9jEoAATocjEzs5HxsQ5JL78BKV16e7XwhDt8z74S",
  "key32": "5pPfu2dgQCjB9tgrvB6dGjDSamaFdcE7YHrwGfHw96C6c1eXxXK7qstVSrEgHBAHzUrX8ayiTvypSJKZTZ1Td5ku",
  "key33": "669GSCgCbGUrpx8vbHLMWdddRdepBdHuBTgUZAhJzEbMuFzsUehiJHiid6jSShMYAUbdqWXgeQ2ZCMTqWaheATXz",
  "key34": "2sC6PsHQDgcPqKqYPkXnR66EvMajtfj3Ww1RA9f5EcbRquKPBcDXzqKNqro4b9tcwojbYiXiSLHSc2QDdyU8DGKC",
  "key35": "4t4qExJLriuztmo2K1vSFgamwHmHfmTNGcCeh6noXnST4rY9t4ZvHF4zVMn2cJTHRJAPtg4P9WHnHxG1vrQMtqdd",
  "key36": "2mBFmfNh1rvZeRycUHq3CYPeNMUzwwBDzRccaceAjUyKqFv6eFj1R2TKNzz6jr7HTKd5EjP52VYo59BsXVJ2EDoa",
  "key37": "jNja5ieY1BgAQn9YuH71YZvyRXW3aBQKf4UCwBhtRxqeb5JonryFMnAtgbwVYnVN4nHZBn65NWeuQycJpL85vr4",
  "key38": "3JuuQdmc4UpQvXPWSyUd6RF1xdeeNDXii84aGJ7GUrbSzfo5VimHgTUbnivZUmE9fKtbJueJ4Q8bXGZ1mdVsj6bB"
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
