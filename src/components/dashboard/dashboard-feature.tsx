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
    "71EbRjDAKcD2FufX5MvRYUhtLEfGCraTrRTggdrhgaEaSVvvYiUYZgpBN8xnBtwDrLUx3HHY2ZNXKKxcfohW1iZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aA3wRQ7oDZKSttjUrqr9iC1pNeqWptF46cvxwWmY4edfKbvHsqxExW3BFz6TimGmoNopFCdukPtP84CCVCiVaXj",
  "key1": "4eS6UdDFYeK1KU1p4yDDBrMLhLjzZvahLUgLUzW87YppACpHFRFP8wnKv8hfjwqnzyaXoTPXN99ynVeQ9M2CXKUp",
  "key2": "46DTwFn9fKcgw1Nj597ro47zud2PLkzBR4VLv61HZJbXHaLy5SUW6QxRZfo6Abe5pXqQG3RqB1ns2yWZfMHr4VHF",
  "key3": "qV8CDDDEq1vhGZtcTX4KXqf8R9WQ34x6djThjZY1XwLtVqeJgzHmaeN6RJPJXgsyFbr6khsKYzNaak5sn9T6qVj",
  "key4": "2i2SjU6GExWK3xh8KpBny1Ur2pB12rsf2JrheNQdLPKFsvaYbGzVp8Es64bFzPTUeqoGSPFfwSQVWJntp3KsT1Bi",
  "key5": "4zQfW7yvUDbehrzLNdHeDMFuM8WVL9zCkeQapMCXjz9TNbgd8L1Vx9GGeAKgiDvTxgmeKfHFqwDdcN5A982u1AjF",
  "key6": "DeJb4VeHjbToBYF4gEa4QwLKMmuquX1eHHvQQuY54NSfnWFpsSVMrUcSX1mw9eN41mGNt3wLnRWv7niCpeFfMf5",
  "key7": "39FVxQ2MQ2dPWiLeyiKNr4Ebmdf7B7ALNirxPQf1jEryyZ8EcCAaWHgvSWnEQx4Y6NapDsYT1cEd3P7mo2XYvt67",
  "key8": "2gTSjGxNgVmLCS2yf1khKjFH81jqxJktxt3ik7AcvxSJ2wsaeDQCkXpTWr2NbDMX7pkn4pSdPdK1VekLhb79c8RC",
  "key9": "3RqxFUVHC1wByJmBjBo6z2aMiuMiZn6qgYqtgHiXJTpJiMfc2Xtw5Uvigop85458jG43BzGnMXswuzy2NbJPQUTp",
  "key10": "9trunmwaDeCY12LrBKGAFZ6G8Kj98qZmVRPXJYPrkc9P8iRa7rkamqoLG3oL75ytBtmn74BivyvHKSc3q9pQwfH",
  "key11": "4FX5DaK46uQT1wsnoAsHSfUFaSdvEnEEGPmp7qyy8T7ySG78FKgnbewydLjXebwfUKp8UHj7XQvRsZQpCUxAJTwb",
  "key12": "LTZZiJUZRyBFW4Tyq6srabKJQxmuQqDgRKSeG6XuxKEYzjYAk7PebmBJnFvdpjy8ZAMHyJXXkCBYAi4Q1rvppn5",
  "key13": "FbE7hJg2Mmbu7E9cDrhFnj2uSkGFPQRDJzXrDiYP5zyuNfsikJh9pkKeNKSShqRXWwg3a6rETZP9HYJLWN4d9a6",
  "key14": "2qm2JW6g5f9UwCvA9hP5LVMn1U5ogCHJqcZUC3kww4kb315L5LqV64NadjAjbYyu6zoGs8U3QDEhsVXKCGcFaixR",
  "key15": "47AMZqK9Di7Xa8WsxrdarY28XnGqv1c5M1fBQ9RtMieDwzWYQdApPZrDvzWiW8GzCUPHcVUGfCkyRFzdyznTteNk",
  "key16": "2sBXTQxZ2fPMPvL2xXj9oYqw64nRjGauMQWmGAJkZV2nMNMTVQpxCXqqtuefdxHsHpDRaQDeCttPVtcs8tovhdvh",
  "key17": "27Z1AQ44v178sQXbAvmJQxk5NnyNVx7iR7RMnKcvsq8eMrCCpC9G4zGQrbta3R2UW4XvyXQ4mweFgkkz29Zy2hYf",
  "key18": "3XLEjgM1pd4JU19qbevVib93v7sFx7VTzJ9gV57bYdhWVXo6jJSkFtXcoUqcd9zoTU3bp4yP92him3CpUiCucks1",
  "key19": "okTqrTtjUsA6aL33ydppBAKmXkhwZyeZPvQxRR9DL7L4aWy4Seu4TEfrf9nUrfmSL8w8dbUxtUVczE5FPoL8cXH",
  "key20": "3153iLj1LYxFe5t2D5eP75TtLAsGyJP6rgAdJcDP3YHKdKBXVFJmU6wSjnWB74Z3jw3Rnf6ZmPuzxmdJaanS8HXX",
  "key21": "3arAH9XLarmEYL4Wi71ApQwNQFWpgEcFxjMuZAk8SfSWtWbEXTyp1Lr55gniSBiye6hx223xyRB9NVq19Y5faPPU",
  "key22": "3WAYtwNbp8Sf3Q9Bk3sF36U4r1pfb2o4QC2Yf6anD3u5GBpppHgsmVZa8shwGxDHLVfaHkft2ySXz7VkX7FYxo2U",
  "key23": "2bzetzG9y4WC2hgs4ibEvfL8LfuPGVJuVm2n82ELSRfREGuug2rFgGjSxVv3ExUtfeq2WuNrmuGhBMTh3w2Bnykh",
  "key24": "5bh5rfpPEV9bj7ABGyCF71SPAJTw7xtwP5boR2B7pKrJzfVSkwWeyCagLaA9UwEksNconVwww6WJapNuf7UYrvFN",
  "key25": "vGvAEWMmUrajShXT7Tg19NgKb6eXaN3s6VF1N8qxQD6kBFdzRaPqGoXtm1TpMDMo5F9V3eJs5zreBpAiphxYyDF",
  "key26": "4PvUiMDNbioTKApYPXXPPeGfhYPj5wWar35zA9FN8stsYDgPqFUqYDMnZBmLuKKwqAx2AuMqutNzjgw5QcN3ipss",
  "key27": "vxPUdMFor9x5URqcAXYYuw3RqkyubWXocVFJiwAuTQFuBJashWbVosm7m7R99Pdh4NPUgbTUB5TyZ9f1JM8HxBC",
  "key28": "StkjH5CYNMQ3sQgtvYkaQrEr8vzuGcMx1xa3CUjpuJ7WvepUG2bLKYdDUHS4WhjFK8iCg5syRRYMKepdvLKfnwQ",
  "key29": "36ZsFwT48phK3ptpgZZM17jf3fP7wJ33YQMgQRrY2yviL8Vn9KFGb6rWAYRau3crVQmchGzed9tF6QtHsCwg8W2D",
  "key30": "55NkcAsFXuWubRDkGptALuaJ8B5Jzrz4B4SL7BGwh8dpXgjUnP7LQk7K1Ejjx5BLQNyQ1QkBUwfrQSowpGBR3U2M",
  "key31": "2Tv4aH5SZmTv7s9dmGtu7v87ASZHKzSo9Mbnwfza6z6EcdDr2EFMKkExKP3bdRuA89P76UDQpCNn2xJPYNe3AHa4",
  "key32": "6DkejaapJMANPthV5UkHsNncaCe1TdcpBa1fs6KX4tkHcyDzZfuQJHj9GGPTrhxPWxmCfeKkSqKuqj37F87An99",
  "key33": "5bKvevNqwEiCqbSD6vKakKwvfhQjLC2vi8rrusdFh6VuXYDiHjmnWXydjx4fiNyxf2JHbB5L1tYHAJunKruB6AC2",
  "key34": "3aTQNUwkva5hthZHu7EfXSdMyH6mY4i29QE7X6SaPpT4pAb1yTcqfqGDLsnGnPySuuE5hvYScdaEVKsYzLNSi7Sq",
  "key35": "wAceLRPsbvCYtAXGiuU65tqTz5xRkaSAv6zKn7vL2BXp3WAqgQP3r1bnznnasUG9eDi2aXmeFDqMX9KDNPYP89g",
  "key36": "3HxeHs9qfTQq4Nv2t3uyj5MAf7fT2Wu1gYcRXY8Br8FrtgCbf9JjVs6yNHMCaSdn7kufW9xr5bfcrS27xr9MSmjC",
  "key37": "5FbX3WZSieL6SWRbQNfUbPdCqrHFBPouJKz1FbhGgWvAgyr2WFRifxN3xgUGTJ4pmCcgEk81C7aUit2BFFSHkm29",
  "key38": "vc2PQv6rr613EWJk933arBCt1x6ckuiYEkJZKsNbjZXr6ysL37iT4ZVF5f7jit7eUjSs8Xw27DiFTGdQPKEUutX",
  "key39": "2wzmfbsAMnfMBMXXyX6ukhUU44Mj3b2B6UaHc945Bi7Pk2qnDsdrHAWztszxtJjk1BA9Lp9PJG9fV1gpXyguvgu3",
  "key40": "5MtxEQfMFzjYAkk7zbCR78QcHJRFNsdZjUVFobAwmGixkqFpsu2a5SGgQsB9njA3tVgSBescDrWGfHyL7tPtS4Tm",
  "key41": "46Tc2ujTUJtxQU3sh3kGdjca5A3q7YPYTw2F5ubLYJx8Vh1ZfKzk9DGKs1dpqaJJdMojcvptGL9cA6TzraPeuJfq",
  "key42": "3a7x93UXHE93V7A6tPxvtkWm61X9nERrCubaMcZYB8egQZk5Qd4ggMaqYPF14zFHJXY1g1XxS7URnVFNQNdnXJxV",
  "key43": "35xDxk5ovsQkaSCWFySKkUadKCpZ3ntKPHB91gwcS2hrsiTKwXVRSkdiUDYvsUDbAm7EwrJMkWASX94pAkAdvPoT",
  "key44": "32Abm3Y6aGYMjEBm8iqw7UpmMkp6RyhvodEn9NqTHXBhUckNg7mQGkGpi7V7PUXnaDDdKZQbzmKWd431bdJQEvs6",
  "key45": "2TBqCdBwdw4ZjmVTUDX2gLJEAormZ7jo2Kt6vumVYUwm61yRWvCuAQKb8MqAiHgcMEGQ7wQeFCXMGfEFk1Ty81H5",
  "key46": "3acLKv5iextSnAQpyqzvg6rE8gS7fY2o44uVdSH6tqzGXy8JAkH73BMLL9UPcwi7J9QfR9LqvRbxMcfTPzKNerWL",
  "key47": "4bbkDjwtGAz9fJT5Tj8WMjUcbf6HBJRnHtGQ5xogtmMhFoHEjDPV9EXDQMhfxEZeSfys5zCjRPMiWjoxQV8kagDz",
  "key48": "44eKAVnVwMtrJQEpRoJ4a3VVzSUfcL7VQQoTqggR5SZdgmvoaT7dHXyDWh8Pfz3prLr9wbumDh3pkiuZy83DzYQL"
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
