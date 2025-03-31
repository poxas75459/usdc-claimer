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
    "22JqNbppxFzTSV14Lstvg5ktNs6AfEBWQoLx5moiXRBfTZn1WAdEjvhg2Qc7YvSn3NuLx6fDGPa65dngoaQh7CB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Evsr7BsW7gTMrHBwuvNs9QSZHRgiXhfdP3SUFkvhqQAcj6pfA7a92PRqxCKDWu5Udpkc1tNko1YNrkgUJhsLp4",
  "key1": "2DX2UUbuT4DRa1juGWWE3NwUm4Hg6E1QgxNL4uS64hm1e8ZY19sDyNv6C1cmv5BhMEi74481AApEM1XVmnk1EiUv",
  "key2": "4CbxZ7mcFT64Wruz6Ft1mZfvNhgBH8XBSgdFcEtQHJ6Z518wCCXPhBNuaGgJNd1dwDQxPJoLqdezEEqQ4bB2fXiW",
  "key3": "2vkfmZ6UcBKneM8kUCS3pZmjMJaCQxBMoPg2iYpPsHwFKwzauqXJsDMcPm61oAvWS94KzFKmKq3ewroZPMrBBkFd",
  "key4": "3tzyogVuUUKQxzscnS3YBjJsdxAZe8sfXsCYq3J8CpGexMX6YcKZvy9BRJCxbNmxebWB9PV1nH4oG3NqmD5SSyxJ",
  "key5": "2JvVgQb5GzY8epAZ2wyPn9sg3J5J7CjRzSyfRHCdn9vNm2E19mWe4ntvojfARnWAabjk5a85kdgkgWD1tBZXbfMk",
  "key6": "3VuGWUvbxCvS3zUbfP5YS7x2Ln1swLxvqB6LQ2aykEoeLdYRDuYtVBjABt4sKrZfu5dHJQXAWrYEHGd71vfj1sLv",
  "key7": "3kLG5PcB9mxUHqjVUjR3CDYhMrCdKPJFaRuZuyjGQg8LQWVkoeCv9Bw7gPqNVbeUbZqKKgfJUiakPd915Poqhf9i",
  "key8": "bggbJWpitU73LrWv43pnp5jgA9ujzE8avciZJ14qdApNf8RmhzTG2a7c5QDwFPjq5SxxsZEDnCnvCQk7xcJwGeC",
  "key9": "rnkVpfFrD9usxzhZmxUQnKXrbx5H9DJTievKy2PCFSUctmBMgsgbiYsFuHYZrBD3kMT8ugrVBBDj2BqTsJVpbRk",
  "key10": "249Kzry5QwAzdyri99xKmLKZdo2reb9LsWRj9RCQcFgi4zSD1g9fNXa1si5g1AjEN2ydd6zKEPSgfwmxhbxJXiUN",
  "key11": "ECmzDXnEoAYSe3DV2PnLjihR7u7vFJkQEnvBQN2NkkXubso1p9FmK62Qv3s7UJ7Jtu5PfVMwvec4PmBJ87Bor38",
  "key12": "2EiDXnouBHSZHUGE6VCm7pTP1HZ8KqfTThBardnJbe31k27arMyf1mhr8aQ9UncXpd98fGzFyYgPbww44F3nGhaC",
  "key13": "2hwcLzkc57Tcgvso4sWQrS7YWmDWuWAfxv1BXo7iszHJvN7LMrXa2Tis7hRFagDkkS3mE8BFqgRgfAkCnsyYr2ut",
  "key14": "2TJashrrtZxgEvPQMtyumsnUFXbCkJv7q69rqX2TLU4BSTZBMmvQwNYz8EJfCNrxqiY3XkemYXxBcSLyFjyhiS8u",
  "key15": "43Uq1nb9Vfwc5BLjL8dPgnL6yhxQQywRB1s44xKumjVNmAb29r7PwnMNCAwR2JYGCeALq6gHxDYRm8aem1vi5dh2",
  "key16": "2UDRBxmSiFRLHsbC75B1b8L6eLDhJPcjENEPBNM6gvtSfWS4xRs2wDqJx38n2cY8USBTHiTt9FW5xqXdghQB74gG",
  "key17": "9i1ZFsuJGm3E1Pw12X7cfdJ9GQVbD8fnYDyRqkdVibuUT3f5ouznfT74zk9cpZa93WQgPz9AtcF6qw2uwVyMH5G",
  "key18": "4gNDo5R7cXtaMQyMryhxGv1VVaHHd7c7xwf93VKDi6wzY9AqRBBsMb14vZqhGBeP5taiRKuKnz6Fwm6dgoqAhfv6",
  "key19": "NwaTpX3UazHSw3S19VyyfdTjFzxmgfYRKV73mcERaPtMpVz7dhu6Dniddsit2v5aYf5emyF4iPc4FakZcnqsPV5",
  "key20": "3E9y7qD5fM9i5Kx3tDUfkkuPx6ok3tFMaR6FBybJ7hxc8yk4Vffx2awSG5zBYYYUWGyD3k68p2Ss4SKJFu4e8fdg",
  "key21": "43MosWw4nEzXGTZKqHwXx4zn91gFpKto6pDdsfDLE2TTTCLhbrfdtNm7wsXMuJuNNWYRppP5HMomPzY3Uips72ut",
  "key22": "iYhqeqJJDYuaRimXX42XKfje519FXVnL3V5HorXCrr8zwgUQ8bJaYbrpcErnfg1R1DJ45eN71d9NDxQmSfc6n3L",
  "key23": "4B8KzXzm5sbKQH1xBbSqCKv2Xp3rjUDSDzE4dUqM7vsrHapCwG3knUeZ9BuRj4AEqGgdajRANwUCs5weE4NABhMQ",
  "key24": "wDH7Wsty58Pjcn4bkYb9isYw9p7kX4dpyiy8uuX6vNw8KFvUZWC59sJK9Bd3zQE7YonToqHC85M4QAUg4fW43eT",
  "key25": "3cBL3oPXNGbCfarebKRELgrWxyqTT8DxjzzaR9h1jn9vnadDJEpxqNJUAWEshQAUwG4DAaUrkaULzDx3QxNt2L3E",
  "key26": "avkDEjUTWveckjdERHCdX8DfwvRHVhPspKePACpEpn2ra7GPGi36W2EcooU9QmfrmgbLEbxvpbTqfvqvvAw6fPc",
  "key27": "BYesaN8jnAt2T8Z4X4iCwUGtjMsCbhX34bM8usupY3CyxzcJC1AkeJ6aLqXabzCnhr1AGpkhogYmEwEdr5wZJn2",
  "key28": "5kyzYVBKyP8wjtatkbrwSPspe456mFuUoHfJBjuiAF8TQqNz2ZCWoVCNfQAHGHXaipEw4ESN1mu41UQcDK5XLbvN",
  "key29": "5Kv6tNL2SFSCNUXFXWfdnhBgp1GzK5RLhrrMRq5vfgLfeA4Ak7TSG9FnSYTCKjBvkWv1yyp96vPFgFcERcuceuVm",
  "key30": "4y6pELmr6dWnQL9fKrPkpWw3Gs3J1BZQZDThkSp2fQKxEwub9Nnty39jiLm5A9qg4XtJaY2qwGt7BQLQG1bHTqb2",
  "key31": "5k1JwwYTdF84zPhNaMi8zFzw47uXzX4WKkXZRBdzyd1VV7XX27gi3STH3jqGTU5XfxAEBSaLas1TpPkZgF9wftHv",
  "key32": "73scjnSZT4naEP37TJg8JMCgjdJnesM8cYrKYj5Ay5KSZqaCfPGY3bhMcoGTQbJGACguHEJbjSGm2csC7dzJxHc",
  "key33": "5s7rEiiq1wzgjr2zuFzYjzdMZQV6sEnHZXtQu6qyE3q77ceN4uzUqDZAMJZeQggNcPrUpQ4YN2fYXsRMi88qQdxh",
  "key34": "5M4txf8bCK3wevRS1uxMuo1QpYmm2JbR8qDeE7px1qr9FR22AEPevvcDmXAB3WCLYNfrqFa9CvYSi3RYdMB9PVrR",
  "key35": "cgckiy69Zy2ue4LxKYWDSgaYdXHdtE2G7jfc4pHtjybSTfnEJ4dH8nyJCTtLR9ryggzjZhm1E131saZEXsLy7tv",
  "key36": "2aEi4TaBR6g1j4sJuPGDeHJdUeCHvKrKeKShvFPYiBCA1DusSBb2Wt5L5jAgtZEXPMZqyTxDB89HCP148R6g1uVr",
  "key37": "2ikJm2faZMeyeJh8S8TwDKWJpyyNDXpjqoiqDZ7Keha6y8YoFwAQxWs2UForuuvYVgZU8DWMgFoPiotXJhWw65c8",
  "key38": "unxV7fCo7JKQXR6t6Brizmt5Dg7XFLmzrnyS57QkhYKr7KP4e67V5uVdEDqTYFAUPnUoCzTTuB9L9ttZXASPn4e",
  "key39": "rYu7MXvBzfGiF6G3C6tiyE4tH2digKbj2SkzG8uuPXMPLSEhRCoMHR3MfApdarRgR4P6DdrU9rqtQyRiwqhZb4L",
  "key40": "k8YB5Rn389qFpEoeX8L8R3UCUznJAu8tVKx7EtxFQ62ptBBZ12auLTRKX4G3ZkzBwVSTgzfrRi3sVq41SmrTxnT",
  "key41": "2mUXRos85hRa9V2A4xUVjKPWuqxWMjt4Efh8eTMizjvgKFKRBth6vGW4BQEHwnRrCipRHNNkbygd19q8b8WVL5x5",
  "key42": "2AfvTWg1wp4YrrnW55g7DdpVgQF1GK4yGAgyrYHi8dS57hgqraY5ZALrtNd1Y7q9jnnBTsTxpFqB5Q2uqF726qRE",
  "key43": "88jxtvLeezn6dpcrjpJg9t2smCMHAFGK942Dy5EgugGf8wfBZ5XioJmAN25RtMRtdXv5kmrKMaRiSJQWtecW45a",
  "key44": "5mUGi3EG4DdzzSgQ5PQNDtztMeG3Nme7EMPEMb4DNHYyAfhGsTVKkesohUqQ468iKqnC5y6e1UoZByma8Apu8GVZ",
  "key45": "5XM77d9DFQvC2MxkVnJBas8nhEQHsx6unadLYWQinXZjKHacFHvWKgpCP67BPGHwZhYgsBo21hc5q6ZhjLxTtae1",
  "key46": "2dL62WWuNRMfTuSP4tVnPHs2TNPiUkRtGbQ6pyGZyReYRBiH3gKkmreKa4ChG8zVT3QM8xTFBPAUuNfpBuXxpBw8",
  "key47": "KNZ8jYoGV3Vj1gaNBjUqCcQe82uBj3wnVe6qb3Wy9FANCeuCd5V2xwUc5XzjGoVRoeaswsUoDyheYCofjvaAGTX",
  "key48": "5f8d7LA54C4xuKe85Ncu6Dt2YPAjs75EU39Tvn46H2Com2eSq3qmSYFMj4qTxU65yfg2AZ8Ui1ZXJzfPnSiRWVG6",
  "key49": "2j1v4Ui8Sc9Hwc2z3EtjpeAuSJ5NJ4oUh7PyrRTd5a9LZBjW8dTi7vg63JsK9WFTYDvXe7eV2wkbQa6XUzQW2TZJ"
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
