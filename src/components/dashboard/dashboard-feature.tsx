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
    "4aZYKJcfh253Nf3Zu1CHFNAphP43mQyT6dTe942mZvfNSSKxFKaJNZQqtxKxzouPzFjtvjy6L2yZrjqFiH2xuWgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gr1NxSvi5EvN6eEK9Eztaz1UEd4fA68nTDjFeaoWbLfiW4DPzo6bU7dXoudsvmLYHnWy9LhQh4V2JxbxHD7PxcE",
  "key1": "5VUs6ZoPxFsSm9CmNbbBBcyZ4sxsysn3WZCKvwRrntg1yvCnk4d32ukHeRxHnr9otVovvN9AM4ioJU4HJ7aiYDGy",
  "key2": "bno9EeZZhwuDYJgToTsnzstgjyNDPcuF2B8pc9EJNwhu3dSiMwrWhjBk7w6rJ5ESJeBr1NF2iuSABbyWBSEnzin",
  "key3": "5A1UMMrBcYuLASfkrfze42V2Fnas5J3xnm5Rd2xKHzSE7fnJ5UngfVx4RH6kgdA7s5oWTQuGhVKXCr5qqnxQx3Tx",
  "key4": "4eT11RcKyk4HpspYqDATMB9FXDD7QNcedqxU7FMpTB7BbknA8YDwSYs3oWYD1VPamVu6r7a2CTFtxAN6CdKZE3W3",
  "key5": "3ZM8rZ9hFgZzRkrDywWp6QH1z1vk8zAyXzwhGCsVxsicpmjz5R1XghxaU451UrRHV1Mo6c6Z2xSaDJpfYrVHTYZz",
  "key6": "3fNav8V21a3Wr1nVTdXacpUjRW4tpiBJfChxnvZKfuu1AFvbeNVrfE6EJmEYbvnsxx2JoZznG4326a8LmSq8U5H2",
  "key7": "43c5iBmJUd8SMEBShWx2piyFYfBGx5anPPoaaF9tEbbV6Dx8ibKgek4fb2Dz6mSKKYbfDwa6iDK8An1zQZa53fUD",
  "key8": "4aX5pEQ5jhnoeKqWq4MQ5FQ6HRxeTzNPJCtGL3TfZWmE9Ejgv9Eb6Tjp4XG4VEzD8byCCEkfQbK2bhYevovae8PH",
  "key9": "sKbTLSCiZAwCtjSZg3Ls3NJnEYKDdzW5hFMgPxLqtmLHN4bQap3L7kcqCS6ETqf9wCzL5ciLWX2MMaLg9siNkn6",
  "key10": "51XHj5FqJDyHLrbrqTfWddzkKYpUwyyyJQgCsX4S7wqFfSYiu845jCu3uw7t2tn9BeKQomA3DLQqNGdMjCNZgJD8",
  "key11": "2LSodCYqUDoMqXgcV47Cd9VHUAddSVxMtBo8nsWsnQtzondUNNXwmgzJa9mHRZrkvYcNfdsqi8KWKzPtn4nnCyHt",
  "key12": "4Q9kfym7RVJTV69coKnaB2BWYgtsbyC31T1hPwpMnxAhAjUvHPCRvHe9HsFqeWfU2xBroWKnoCCiqAXjaGDvVmEr",
  "key13": "5e24D1L1gzskK68sYtHhCdQLkLpfWTqrRuTCt6Wn5KnHPJ8RRtRVBvsJecN3N4mJjTndURbVr9Uf5ubcwRXPxpk4",
  "key14": "65uYPvr3Xf1pVF2sDhvWtgYZRJ9mih1pB659KK2WsFEPUXYbAbpM7SvcLrS2zd2ognKt16vVD76ihq4uFiUZpDQi",
  "key15": "1QsKHyM9e4MxkSQ1qaF752b4Kka8hJTKyfGJZsXNqvcTQf4KdWBrx8mj2WTk1fqnU6yQ4pkvvvyVL7ryUriN268",
  "key16": "j8eTCZXtZGXwq8y9HciAhBLfsr9KNd4X7nTCaNSkgo4tvVmRF1FZcuAd2thVojuj8wGRE8yj97FhQzixXKjQNec",
  "key17": "5TLuuMoRBUkPPdeSXEkrwrQwJpk8JcWZddtx6BYBMjAbYBDvUZxFGoCHiMJy6kkuNfTPyGUL8zSY8bFTgbp4bwZE",
  "key18": "29mkzJFLGTAm1Gcfb8FhRPUikAdqbnyZjP5mdYRUyjahmMYjLMnu8vbk2RGXkK3kVw3qzPG398iZUz2dk9eyZAsL",
  "key19": "kuGMhAGJwqofoRHggAj71NoDSFZNb2Nw7kF2X92yregZgS8eJfR5UfWuDvbx1HxKgncY4pzeMUCusKuF6BwikLp",
  "key20": "RHhygDN4SHzDQaDZeznTcJEMbG2K2n4EiujZmGSyt6B69PX48Mv9HiV8ZQ8B4tqre7ZKGoRPj6PdNxywLmFzkHe",
  "key21": "hs4ao61fXXcAavFW5DshF739WTB1MxamwaY4dokkw6MB5Rdp6ufAP6iMW1aEV1MPqD2Ewp6FkGMu5kGNk6iSGsn",
  "key22": "KcnC8mkMMyJnM2XY4BbYCThF5xXgX9ZgVaid59wMsWRo4JcnMvx4fWFTZurH3RqpvBarUQ6kgNKiGgWkxKoD9GX",
  "key23": "DAbzU3aRYxSeyHkakgJbU9SyzGLmuadnQq4YqaX73gTzTiYGvuAYgyGjsWDCgNwfnzWEJDntzJcy5u7ZiUhTnJc",
  "key24": "5xdujuNCMaYLHW5gjaSGERzBDg9ccFa1yx4DyoCkvKEMwXUDEciBtbQA9RipY4AbyMPSPeyqKs9fEWxAKrDHLN7j",
  "key25": "hUtBcofVMhi6PdG1mKVDm7vxemyDuyRXXmsG31qyP78cmxS5hmQSByk3QxQoJRLfXetcCnySqfuwLN4ck7ngdBr",
  "key26": "244a8woogdQERrct6HRRsjuiW2oB7cvvZU9S8oXtWWE7UbG14Dn5fiMQPVG5qtaZNYBRSHJcUBSKQbaT5chGTgvY",
  "key27": "2cz8wouAaErsow5ZRoTA3cj4rfCb1VQyVvtEiRGiSHYSPKnNxqxCo31sGMTTaqzuFKwhkCaj6AvzK27DWF8AYhza",
  "key28": "2jGso6kbD6iZYC5wVQgHUhbN12nR2VLfw7hvCLgCQZotSuqxecvxYseyiJj9tj2oHCSujPAe9tgazwvmoM3gL3L4",
  "key29": "28ARGAULYR9BepX7J73vDeqXp9Q9osrCYtLBQ4RuAQDMraYVPZjYejk9YNJpjeGqA43YzvCbk122DqV4g9D6GWt9",
  "key30": "2e8LMDwU74BqcWjT6UcKjRcfouWqofZe1JChjmiD7Dh7z5MjdkRz7fgZSJ1fqk7MofesvyKijNVaGno9Q7NyTJ8Z",
  "key31": "4JjKkDU1Z9qwtamNnsiN5A4VEBKh6KotNkmZ5TNfL29MnN4DKgWELQXG6uVhYUm2TjhLHL5GYPorVbBMiqfD6iiH",
  "key32": "2QZQTsjBqog2DVFCzp3DVUieAe8L7PPyPyNn8bWg6wqmnsie1V6UBwD77Pzg78MyacCh8ynf3e1643WX2QqxHaCi",
  "key33": "2GtyNY9VwCHdtUfNnsuQhMJfojMkhZK696W8piGB5coyrCyXhP2CuCbWHEzYnbemhUrHfCunjpVJFWjCpjm5qqEL",
  "key34": "2xZLrHDr4ZNMoukA8ySZMadJw76kEGbU5ZkRxJSGWLBwm9YCRFoXUNuqM6SpVBWnb1ZimKtccwuzShb3u1mr9rg6",
  "key35": "5M4Qx9TnhBzeSDWcSNRwCWAyxmmmvi6C1GnktJqyBKngmTHCBk4y9vzh9UN9bzsvDYPFyjjC7mr9b6jm1cWiQMS9",
  "key36": "3AP1rwdY5ebnLDXcdceXXFGSoL14eD32dFwAP4WNZKYuHzFqe1gqxxnUpRKZfrCsGtM4653Dyv3J1mnvf8AU7E1c",
  "key37": "5MqPV7PNWre1nuFNACbMMzgKcrXWDDpxVUfQh7Q9SgCbaHdFJPUMhV2A9FGgMdLJK6D3rDMQ8VZg9ZQJymjH11yp",
  "key38": "3KaqmQVFYtrCmKAUEZKvJazpUS9LQp1SH5SoCqyqP8asZXEreVZTKS3rkqFJdcYbeUbg4aa6YFYjNkXRpA1WARir",
  "key39": "4JjM9w86JF2iQZbQktfqmLVGa4GR7FPup3Kk6FfAnn97txTp5Byek9HcrzCBiePG5B8TFbvcGJAR9dhkRvWVdPYs",
  "key40": "4zACBQGckbtcucL99kKiv3mkNrjLgDazYK2mNWEipoGrpqjFCtUgYLu4TxmgmSM29mUQCK6mjWGivCkxixLkydts",
  "key41": "3xvNBR9iDVjMLSP974Z6VSsGxfPonsBjK5J3mkhdNeWvfknafHV7dT8pvXzun9HYjvUvPKhKxHesSzv4q6pSWJPp",
  "key42": "2zSndKkaxRJbk4mDcnr3zEyszjqsFxE7QiZZm1UjCWxCmoq4PQrjz9aLyDuCYeoPAsx7sk9QRP7MmUrsUtDX1HgH",
  "key43": "3hbvfLMh7GQek7FLiiFdPBX9hk84Ze7K9iPgvJzRtfFQC91p7BV5wtaEMxXj3ytnrj2zJngyHDKMZ79zua5i2ooz",
  "key44": "5abxxeyLnJo8ch1QKJdbchrUyDb7YVDojund8hPn2hjVratZW62GixLcJQRfD4gPA6BwF9zLwvZSJwfpFCWM5ds"
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
