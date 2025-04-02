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
    "4KvUCuw4L9rVxuyrWUxp9XdGsrLoWjmpKsUGSFPRQz97FqDCxwGju3jgvVHr9qAEaqiSJrV4uDgNvacUFi1s2tsF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nq9pPZtgjZHvwb1Duk9PJY9fNLK6ikXzp6WTBmjXsPWENPp11Bk2X2iYXEenEUVkkRNuegYd22uZJXJSEhZ43uz",
  "key1": "636jNswdKdWxChuTzZKQbbvUPB6r2117bdXJBByxs19u3nKWW9osNj2Xn28i2FLd8NFEDM7CQc4Eng8Vo4EReSN9",
  "key2": "4hHHWXzi5x3GcmSpD1piWDiLtScMfCUjDbQTGFhtD4Q7szfeg9oeN2bFD5ZZFkiyZG4Wrj7ZaSHiWCTExPgCWMUY",
  "key3": "BUBt5is8WMMN7otpiwAg5KzEfJLPnMGSxNA1BKoD89AcJdgUBZbQtF3iL6RWxRUPmD5zhTynv7saGVBw3GSR3WB",
  "key4": "4eMnjKxTYxWnQQGDwp3BKRuJiiWf9pYPoXdy5gCcdW76pDX786E8w8smjDDqUe5CCuvnbCPbnBGoGa2B2WD8JY2k",
  "key5": "4E7amyU1Ge1qofodTN5YuNRoScsg3677JrBcH4cVMJBmTHyNqfb9rWcNkto2J2TmHy12y4gUKsvki1y437VoxvNS",
  "key6": "NNV6qpnCN3yDfafwwtSJLLG8NpG34hVdCHibcarvHnH26FAjtP4CycCp5sedqjkEuszogAZ1hHB3DwYKQHK4XWV",
  "key7": "2eX8bzgfdso8RiwKCPWQ7UArcZXZPhJPgxuaHKt3A62UQNDjhRJmRb1as589S7ZT6HtqhChWyqx3nY1PsPYsXn58",
  "key8": "62tqUETkzZAJEcoL8ZUugM9GtkFg8ydi9ibwaHpgLDVimAJKFT14YyC29KR5zet6FKuuFtzWacEgxvCgupLQSQSC",
  "key9": "5VgfP9u9cvGCEuz7v6BjZs9azfnGhkmKaWhgBqTfVXLjwKKFpYFir8b1Ut4WP9nPkqN2n6vdGUxVdbm9ekoktzKH",
  "key10": "3GeZW5jeJ6gYt77KWicUbtWu9RjuMK89Yr5KzPzr9KzNJnSqz2GdwwsNiDmWdAoEKiSx29FJ92M4VcPRfR81Xz69",
  "key11": "6mG41ZLe1P5cnW9fEYDBdkSpqErAwgV3FHcBPXFMZ3YTEBxHyDwDrSLpH1engKAcPMxkr1yPHjBVEtoFZGPXC2m",
  "key12": "2Uc2WYuVh737guabgdaEHjXGXryBtcyHE96fpDbudkc8bEV2QpuudB8wXY2p4QCtXeoY3vgnUHvWdjz7tYY5NPw1",
  "key13": "3eLswsBxTouCSRBfqULRpFMKfZvwmMtB5nVfNDsKoJ75epDsfpiNUE2Po15g3HeirwjcS7kqPSQjdTK57bq6Z1Qc",
  "key14": "47KZDbhMNFRy2zRmDrCbWEcyoKotzq6Xqss3KWYzBy5qLB24p37tCgDdPcWeUJgTGKCimAUQzaCnKZq84SYx6UN8",
  "key15": "2vZuxGj3C3Gkuz5orYinczF9zHqHGuQhvQxk7iqNiyRENdL5hiH2EYMABWZarcqSLwJ3M4nFpC9sCmpnzZqUtgSo",
  "key16": "5GV5yQ4FbnRmJL2ZJpDgyQ94Cmh8YkCaGgPp5C4ZTJNoUZxkpXDLjTj2DswzMhW27N2Hm93GEbbMt3hVhXBVzWS5",
  "key17": "5C9x6NUSsbLncQuTxBNe2wkipJQvEWEqZZ5vTNAXAdFfD3PPLjncbxgrq9sqUrz7MSn7mi3CpmFJ1HHZK4cH6Bbh",
  "key18": "2zJ64cracgpfpUyKHPezpd2RMgdPMLzoYtxVHaHxQ1B1tYhmbnMcNzDRFManhZ8iADoK7HCQorfNT6TyMdHKvrtz",
  "key19": "7XDUnxZJuFRbHjRxefrHRrNXWtnc14ZHuCuAc5v3t8aT3iWpit1FUxyZK3PKCDyhiVNgixYMUjdNejtgZzqwYHs",
  "key20": "4S5giq5ZaCqkmNJBitMeN9fsuYkvgHVi6mSKFJ9GcEosEAckaGcrgkyC7U1etYU3MRBKbd1u4br3vEuBfSXe1PZJ",
  "key21": "59HRxXpveeaTf5k7ikRDMtwT8ar7S7Kz37VJgu2P6BiMJ5G9g7H7tRFyg4vye1FcCTM4raRqW98GN8Tzs3AGhX7W",
  "key22": "3oTbjQhaFa4B9YYqFXQCn71ZJVVx2iBpzhUQhba6iETYwXWvqHn3BZvbUH5ZrsnB9QAXwr7qx3iNY8RTrEop5pAR",
  "key23": "4erf56zwmHWcwhDtzCyir1FBzWHgEF8vn8k97G6a9YVriGVHnfopLVmRfQshtzRXb4hFhjE49FcTZwT9qWmiat1w",
  "key24": "4t5jUJ6AzPfNW8GnLFMVCSXijYLToBhjhKQQurmPNzWaUVktZWybMiUdRMXHnUhCHHuMM7eSNrcPmcrKpmVJQ2ao",
  "key25": "5qYKbvWn719AujKkR1kwccCunmwem5s1dVe3JJXZywbVKA1RF8a596FHe37qYcy93k4VKfpPzphpYFgDCKN5H5Nt",
  "key26": "2EavBHc5s7uKHfdimmgNfk4qND7kd3T1dTioCzU7xLsRKVvmUiTmiTNzu1933BcAUeWhENKPbEyQ3E4UAutH3FJ3",
  "key27": "tsgfUcDi4kqLiCn6q6nGdZuD68TJiSLmjGH6TnN9KBJB5co34bLpK6xJAmk29j9wJBtE5jCqgwcGSdmEuaM9Wjd",
  "key28": "5HmnY5hqbHVQeUCNx7BfRzvXT17QGw5b2WxWRszNUB6w7sEHyN9PAj8P4CbkXmxbwnHbdnEyQr7aVr9Ns88W5NLZ",
  "key29": "65b5ajYWyHSEQKHL3szGfEeBjnRojqUsYyzvWarAh7Y733nGqa7uCksPTjpSBLCToAg8p5hek7LvBQon7muKCi4p",
  "key30": "3ynkPAJ1fre8SpUYvTvQiaCC8jZGaW9goncXhnDA8kYYiHuWk3KvGet8CsMuSg6quWR343R42HNm92Kthiq4K9Sz",
  "key31": "4mMZf7zY9nHoXmYXZJGXPZ1ixECiLp8FUa88pmJS3g52sj3qQooipzzLiFnGS1g4BVfDNsw2tqn4Dod5c9ePw7fi",
  "key32": "2HjFBEA8EmYS5JFbGE9745pj2vgMK8B1wy1CwDgKJwrKFoRikBHdteXYZhykgcrMYqFLyEZrVFqrDzUrAnr93c5U",
  "key33": "3BRY3LEFqJHCrnidarTSZDomZ7s2jxumLrbTRWpJS3xqPeFz94QxgkAefZLh2A6uXvEoPVppCJ16i4LmuWfXbaXV",
  "key34": "4edyWRYSQLt12VWnJDz6BhYxEAC5Y9NgZppANwP7CJPVeayWN6dFLX8AWaWyFknFQ2enWtUG4vY989TK6Lg8wVBb",
  "key35": "mWpPuTx6ANxj78YmowHHGUNLkgdeRVvCnFsggN1Z1ynWqLZq25XbnKkY48Bi3L1cgrhhHe4FNFPVPzdmDYmHu2Y",
  "key36": "2nRBfdC7EaPBhfC52VUE4wbV624K8nwTmAJAwycgcboSmaG6fcrJN85dtz6M49AZdZJEa3P3qU7s1AFDmMuso4an",
  "key37": "5xwaroX9BykoRjM91GWfVJFWWryRCKuvhjS2kkwvbdmeUNFYLLKwqF1svquC51Y5EysaK7xEkSEd2NZCzTM1ZTmP",
  "key38": "uueM1sfsFYq1hJMaVz4X5sLRNcU5z19FJgWScUm2Hv1LzTn96tz3yh3DFGuu2v7idcuWGYBYY2vjNPAJdqp56ov",
  "key39": "4fXGF4YoczV4jUqwLG3pV7mzB1FnXyuMAYumK8e4aEmF3jy7Z3HZ5ttbxumhdfnxcMpWZKwMreukv5oVUBa125gb",
  "key40": "2eUtP7HpsdTLqpPqxJQrHFHvpaVFxvtbfMeBSpHXzp1bh51Djcht8Y7usHzXwmLu5sE4CMhFbLppRcJeL1bPc4Fq",
  "key41": "2aj1qnDCSwK98Hq42qVW2gZuBTCqF2vEUtrZVc57iHvgywYYKCAj9jFTvMH5pyeFqTyfCzogTGi7Ju1MXAZpgzkX",
  "key42": "2WVZPMUWEqBwSjfj5qdKhAp8HZvQFtRV9pkbLH5U5VH4DSzRHWZGCE2gFcnrACBSRbeWEUFEaLhHQtsgRNdVHfpm",
  "key43": "d3aXbU7GaeL7XXvaiCTnLahPL2NWUZAdyZRiGoMqG3A9BfXvMVzu5CC5HwTb13i4c5UVLQkrLQDgpwamgMgozXw",
  "key44": "61YcmNe3WVM3tba77LcUuVBokoty6M5RXP8gJC4Lg9f44rruakoA4VnbTAGwp3zWaxyhzCy1pQw137EtyPHGWzxk",
  "key45": "48wmuK7YvufgmAaVwitpA3Sv1vXBDEDNJu8oVNa6N35jtmKHFawUtKUd4Htt2qbFq3AFkW4uwkmJ8S3wMdj76EyS",
  "key46": "3mCcaQ13CLck5qQN6WKZzVNTGQxGVvGbiioB1re6qmm4UgWLuBStSZK9QE4eNZyPpv4H3QgEBkrn65jfPoMYr8Hj"
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
