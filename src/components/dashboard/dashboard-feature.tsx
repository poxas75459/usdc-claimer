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
    "5GSK8gKT9ktKiwdKXx9H1UuGU5XVnU4EmM1SJbUbAQv2b5M3e1f7pdEeMSzxo9STNxoafFYrYkdTpaNEjqJtNQ5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61JMAsj1FDSVDVVxfyndNL2KdK9QdD2mkb6iAAAPtpAwtdq2tFrSp88mq8G2hFU6R9Q1ynq9bKBHGDTY8dExKxWP",
  "key1": "5yCnoNmmWRrq14BZoTdcxqSaXR4sxvh736QatkncQAv8jZXVWHaxnVsiG3HRk9BJEoa7WYWx7hJKQjgjktBu9bz",
  "key2": "2xPPi1pFnTbYYWBc8fukuv5CQiSg3yEN9TejCrXFEqcb4wwPgwib64AsyiCaWzBG1wvc9mxqgKtZpD4raSUD4j7v",
  "key3": "4xRPj7ewkH7DcXKrmoKuXvR5VmbeXwScsnaXLHvCR2u4D3w2ope6DCR9tzfnVN75C6nc1s4KuhVn69zJa8sGAji9",
  "key4": "4pNdFBAHwj2GXUPUJBJky1iShqfe1nTgsL79sRA5BTqa5r9rPivJbhDi6PHksGJ9K7e6B9MjM35FunLUQowt2dg1",
  "key5": "2HyUxvk4AoEn3t825xBH4gVZUP8igD5HZzZwda9X6GaqNvpbLkjNJ3Zd88p3pfKqDis96KrMtTCwBJRxQMveKQXY",
  "key6": "cFqPTCHaFvepHq3s8YSi3qLYUeMw3fzbeM3PpEWPRNLRKFPX7quZ1BzLx3eH4RuE8WxF9FcUcUjZxWySHX4eiLD",
  "key7": "y1x9KUUuMK2vNxMVi71wuk4e2LoVUJSPjK8pgVkfrtaGKneWZktF5vZPReXx6fGiTjwzLEjN1s7xXPuZ8xcfBuU",
  "key8": "61sQG2FbTU4UP97wut1bhKpKEfxREt6S2VjvbzKySgiHB9D28UsiCh3mR8A28zdpuN1Apetw2J4Ho4LykmUWx8ht",
  "key9": "3H4Q8TtqeTsc7G9WShPM9kbWsvXEFtMQXikHH48iwnVjrCUdorh4xWbrGxeSDpH8Etmmk3rk4V5xL4p6ycWHvAiE",
  "key10": "5z3HtfBgNfHt6gdJGFwU5e4dPJnZ2RaqpiorDWh3F7VbeLaYYjRgN3bk62RAH3L91B8kyHbtUFuRZoM3UN4vnt2c",
  "key11": "2Ccty9BEu8F4pAiPeAiCNanKLqYxS76Cvx5qc2qzSWNEFHuRKKuCsrsAZmqJkVXFDXEiMF1b4cvhD1gUKkWwU5k",
  "key12": "UNhxoTTcDm5FrtCDvY3FsxWCNVwBNgRGLWctgCxVkJtdULEvVMZEBg7DdJixvf75WucLiXVBiQrydg6TkRvmykP",
  "key13": "5eCYL3wHGNL7DfZimPnZdVccoJ5zzWU17Z3YJr9oZpXc6pGBYEtTSEbPgMgbNJ2Ny79i63cEzqT5bbQdqsf9FnDf",
  "key14": "5G6cbEiHzkR5mxELuXQTqtsDXtxSiHgm2bzQeKAe1xZuB3e7WvtCvfujA58v89zdxCW4He4RPq196gzDunKSNgy5",
  "key15": "3gvWUcdo5eypumHdn3fKNSNGnAFALFLsJgNHsjK7odx12QvEU5Z4Y77HUX7udNyYWRRgrK7QamtEWnUL6CZLZzXJ",
  "key16": "5hzwR49Beb8VFNyfkk1DUa16V5AXBKhpRnL7Vb1fmuVmZpNpWYLWfHEBaGHcV4cTErzsTr6332L4V3TfXmqtd6S8",
  "key17": "4ukvbXhEEL69N4Yq5Vh9FGk9T2nQGvZwFKN1ZhiAyfVH3FCr8HnmTegxW23taXRwPBr5Ez7ue8nizCUjPcz7MU19",
  "key18": "HsK6AcPqrfT6SskpN35HuooQnzbVoqG3RqeMueUwGSo4GuhFMeFV49f8iSDov6pgHXxSbeTiUwYwTF8CPzxBQQW",
  "key19": "AUcM99mX3SdCKtUxhgbfH319Tr7LMmFBoZGHkh6cTTG11CtYmC1Fejioqba83T2f8UtoFaugDaHJzXLtSgR1fay",
  "key20": "4Eu4YauxLjmVz79Wh5pRX9FpP93ZPoJtF7G3Uz4jcg4MTccnLjsXs8oD43P7PtPcwsVyGqnPGzeBLy5ahxUXjmmJ",
  "key21": "4fzoeD6rsHLuQdHS1bTREE83dUhzegDE6wtdP4nfEjoJSAbBURZYtc7kBASakc8r1998jQcKRZyVt2Y5PouFWTw",
  "key22": "W5gX9Z261ToRyghL7BcZ8Nhff2SimPkB3iPs21dUidJhL5Yf2nby563ceJoZETUJZojzWzfN3WQxcvx8EhgQNiL",
  "key23": "3xJ679HzM1pVLx5kMEsrra4fbZdzLjnkibbXXD24hXwxj63Dc8Q4uasJUQDnLvShiqB5t6yYWjUYZL1sH2xQxfKn",
  "key24": "ZskjMT4ajvv8j8gQ7eeDjzVeZExKf7UdnBHFWH5yZgSxgYo6XPY346R3sVGVHksBD3gwRjfdCxvCTFuX1bWJPAp",
  "key25": "27HfABJpoQkXFenjUDiWeoVDCVc5EjdBDLE6AUXm1ishpqz5ovkGLVcX4ZxT8pjozv8xKBVDKfD6GDyhSi4MuYXC",
  "key26": "3nQkKQZsbBqW2ZtR8MVGTBvhknVvCzHTaahyahdppxR1NmA77YbUW7HsuBtfFrHMZYi7cgpiyiN7yQVwqUY24ou2",
  "key27": "53mVAzRhMHFyAKK7zgzTcMh66z4HPnxwgiLAdBaE93krnfUS5QP3YXi1tMXS2jErzXwyK9pK2ftLv4LwRmxMH13Z",
  "key28": "4WhXjULQHx4MECpMu72yRPzcUxq3XxNWyskYGbMCXrFR4WVwzkvMY5MHRJJGFnApiRpebKeeDhCaxsDGVkaa2tD2",
  "key29": "PE8V6pbFD5JzN2A8PszgorbWLT9rPoFkrS9kgxUA2UaQ15D8b2yTbtGGRUfRzm4tYYs72ctjx8vH3n5cME3nhfi",
  "key30": "bfHFNiTz7nDmPndEjyzCexPAyNuMvP8L7TpSytnYuKHtyqT7djVi3pRoSV7ikUPMgghmJXga5m1Js5dmRgwX4Kn",
  "key31": "2s61k4QHqmTCmnhz4QVCRvQ1QMPc4xZLzoGEWJMhhGZrRMidVCdZcEj5CJREBt4njiji7dhpWW1LN9njmu1yRm5X",
  "key32": "3jp7wbq6ME4rbW21jQbEHAdmyDBRzSfXZxJnVcoBKZdJiCVxqRveFNTZjJnX3M2Nj4xbRoMLnPLJEbbe7Tpyc6Un",
  "key33": "5t2uQxgadHf1DUUwQGHZM4B4worXDN5YEeE3HXdBhWEER2TFxGVXPwq39HU4LdUCX8jCBWmgHBFhz459DwnexNrk",
  "key34": "4G14Rr4mU226vYuzFdwCu5LQ19GfRKd9gjkE1ZFfeA3CumJUJUHa1rT8goZgs7Pnhf6USRUNUW4VkB343wRrfexz"
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
