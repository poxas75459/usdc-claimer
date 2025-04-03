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
    "yK9fZDoouv2Tq6yjQNNUSuLd4qctHKdMinN59nEtrMZrpJWCkGoj5EBUVj1mWjsREAJ1S95pXTaVosomDEjJDBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tA9UzTuWoLQXSejaWnRoa5Mtx2nvjk6iLmFforaxFe8B9tek3Pnc9FgjH2T6rrwc48qQ4uk9vK4vGxrpotSbmXi",
  "key1": "CBZorfKPbGUwtAvpoCL2LjmXdpyL2sQjG26E8QWnUEdcYdYueEJDcZMUgLv4K6aM7qnT9wXfq7pktzN9jGbNpun",
  "key2": "4mmua9czvR4ZoMxzkxEqPxgaGdFsKwCH83VUzb3kGr7sMxCtf2CQiEPKRw5XdNnich1D7f1aNU5DWjGxg5muXNYD",
  "key3": "5H32jQTwTakker7fsM9Q2aSsJPhYZtmznfijoPmoMPDxM1iXS436e5XPzaFST4qoPYDtx94kKzDRtCTx9d9z2LiT",
  "key4": "4NXqxiubzgq6TgWpn2q1Y7eoS34zGoeLPbTJZB5yf2At2Vb7QszmqDzFdjy1vyP2aoyfnHqSc7G32vArnNPcYwE6",
  "key5": "4ARwgJA29Zkf9BYSnW8rRurcLGS49LRgURkSUw4TLr6RVoFNGsg66D1Y8MZ5a2Q3yXDZ26W32iiXBiaKa5snUgmG",
  "key6": "3mQJLYPKR8HR32vbW1DQQRcTL8FNFCH8Gp8wTxbFKbSN4XTe3vZhqvyJJvxgtzGHvCRYrEGw6y7mdtkzhsU2BcfQ",
  "key7": "4kbWdoLSPngg66npSTQDaZm6AZizkG4iwTfRtkv8ccmnNQW4c2MjfNi5Pgm1uMkbm9xEy5qZzrJkPuCNYKyQznXt",
  "key8": "2MX3mkAmbsg6Z5LBT2jFRyXvQug384PkMvbohSzfHpbCp43kWETqu4CJ7fqWbwUtHqYvLUoYun25J4w8GyUi1Psh",
  "key9": "puFkmfvkaUCfHzG2Uugds1sKXxPquX4T7haSkRefc4Bb7Vv8KBkLxEeGqC8yvde5iH6wiGPxJhenaG42xWq9ntU",
  "key10": "AUZ6VAC1tk7bpjwimLSynqywDcpoXTuMsAtGnm4prDwWVZVC2h8uPLLdp8NcKkGAHZXPQNp9k3DYv4KVRNZKgzw",
  "key11": "4ASG3SVWAVrHLhcekP5DL6o3jJwFzhStRw7vmmzFX13bae1eih3xb2gsd5L5CSDxGJBf3uSb3B6FdsHiK5Eyw963",
  "key12": "2V7g8sc9YF6PQSKM919bpZ8syEpWo4Zok49rkWZAVsB8J5rin3odkRDt3hjBspjgZ6zYgpPxZoS4dMxmByy7ady2",
  "key13": "4pXDsDtFW63pWCpv7YRxerz12FJstUSm6FYW2iy2GdWvykxWTuCitKVFo5SsSPjiEyRoM6kkVm2HkCWa4e9qiFQw",
  "key14": "j13ydFjHUtxGutFvrn6FButkFUkoHexZA59vrFSLnEKwKq2PN1fMLmA7QgZruKF1s2qzNHATXB6yLzFWBsMwcDi",
  "key15": "2YXqhz1yJgUA5GDpFAgNjryzRkQ49EUXpAoEjr7ZReX1KdPeUmw2RDBVY1HaYUcgkQU6Yxx8vo3HFDz1FukUmmse",
  "key16": "2sis1N92yCV9Zh4pRPVXsdHXEVdYNVyxZvZnS2GQrDLmi5q6tzMkTZh42dAtGdm9jsxZzHQfKBxYSr7nfjjaFvmi",
  "key17": "5epm8CDCC1bJYeMvsuKVJRsJJe2hokAzsuJ3Tmu6rUWkjBXf3iPJwsAp9BmHV5Yji14ND6GWMEiB1NULw1zW5C9V",
  "key18": "xQxcdySnAGUtwSBoB1nERkpi7sPh1nsCwF13vRCiUf7TEYggehDABQU2awhsbVYoqgnfF3geD7EqKETpLnVhdAw",
  "key19": "4pgnJAy98iS2bHt31uR8zXy1criZ1mLzhRHsFmJHFHqdYU8TK3ijmDECuztgiuCZdSqjrYnJWhLuCMRgF15HSjxC",
  "key20": "WPKRxsY9jn8AyPDEAmcKaTewkjMmJLcXht4TRenj6bTbBpmHcwbYCaDnrwc64ouoobhsonuRuymuAuyMV4xUmB5",
  "key21": "DCzuLiZ8zAUzgXGtLE1J6kNoJveNFC39HnwksRA719LUEbwHsruvB5TZ7W9ZuFLxBGjxk3d7gm6xzvEEcbRXoTW",
  "key22": "5GXqr418Dk3dX3RZkChht5g4DooHmP7Rdg1hJ4hXidKSvdyCCtjkC6PVsDGecowJDVWCqDRUsWxuCQEKYcR4trVe",
  "key23": "128RJaEqaporox3WsXe5gcDicHU8HmLyz1Ki48y4i19oWJCHyooh6RenAJWUZA4LJ3j2or8yPMj2fHp3fp4h1jKe",
  "key24": "826BS6vEbuqXYYVe5NxVnUiMYJgQD9DUsF51k6VRgHHHUwyZeyU7EWrvjXrizor6xdy2FkUpmawcx2AHEJwHeJf",
  "key25": "NCWh5ZT4hSVuUF2PcZkzXADfyLXhKRc7cqyoqM1Ds4MbFksScecTCQ2oEpEX1fgBUcRj2WhS7b4tW2iErtJATUn",
  "key26": "7cj8K1yHGXAiHc2AoRZyJ5tdJmgkz1bh5MiZTUjg45uY7j9km4yzDF7C5jgi9Er6cgG6MVKp2RXoSf6TCN9YV6R",
  "key27": "7UjM1M5d16hy4rGqauEFeL75LEbGUmn9XyT8igj4SYBbZQ3FZHmLu62ZzzcNESYV8Ys95FMQExJazuCCPEYZzZ2",
  "key28": "4jG7FCGWNLAgbijA6oHtmsdiMKik11ZAWqX5bcVu4L5wUkGW6qGK2G1JSjDZoeu55fnDMJ5eUUZSp3bgFJF3RSoh",
  "key29": "4bTFZDYir3LKhJB21E46PrpWqJQEJSgNQ2bmeagoKyVgxA3EMCUAnAxPZhskkyjNiU6QCwMfCfyLwWQGjMwzRxVb",
  "key30": "tZVChT1CP9anGDs16UtiUjqd4aGUSbhNAbHe97TzUpjHjsq62xYjrc69wruuDy5GJjgr3yxMJzdHbsbhWnVfFVY",
  "key31": "5ZKGgR2rUz1eqDeTNk8h12LX1HrmReRgnHwwFCTKpNNXQX3jsr7wPTTvBus4WMmeitNqsjAazcF471iZiA1DYwxV",
  "key32": "2LE6VZ4QZQSYypm1Zr7KmJM2zPt38tqd8ExbEU1BP5wSvjAmzLYUbv3vcesGCUHPttrU3j9hrXtzNvd3NrD1Qvv1",
  "key33": "4atWLuedBfYvDb49XfK7MNmGU5WxVQqbGS66HjH8ZPJa81UMzP6uZcXvQ3BBrHCrZYBsT1zGZWR3stog8ThKPsuU",
  "key34": "TxHg7rGp28YHqfva9Lsvj2YPS7rj9tDwJYPEMhYG9X6VXoiEkbpaJJW7zjKaBk5D6F5G7iZZyBQExNeKh2ndYDV",
  "key35": "7dBt72tjaeujGZZeYq7YLCJtcBuekaiZdV22tAeQ6XKZpVAgzHMhuJw7Nt8zECLiyB3Ajce372NFGYBPH1wyu61",
  "key36": "apLB6ZXqwhRhq1xpb8zqLMEkAS1pYJMpEHvAgfqQYztAoQwUnhZrvr4zADzDvPkQm11XfZtmyehqj5YphkFjo1E",
  "key37": "3MNkNaGQSYQKt1xufuSF4tMaWt94123P3ab4MSmTumZbpBFpH2NKGMNcjpwANDjjgL7FqD1HND9BEX4HxGMNic8B",
  "key38": "2Sb9htvfQjvcQr97RBf954R8zdQRqDn2Bd7UQEm8k8YSo1grgGm8hfHZHHFv9bestbUMQUTykb1xtAXt2sRvjW4q",
  "key39": "4Ku2T5SNu62UC2tAHcuXB8qRr4t4fkfKxTTeG1d5hiFQ7dZArsJKDzisfzkUtj42rtLXgd9yaLEDFHptUfUrG6HY",
  "key40": "5LD8hoCSFY8P8FqDLUKKkuDkbGQkNPRTxUNHihLToMnmPXiYAe4m1jRDJRLuYeZuQUKDB5gGC4Ao5kohuFo3te13",
  "key41": "2eg3KduBX59VAeB2it5gnu1FR5mXtda4mGmbP2EcTUrKJEvzYaZLveAUCbTm6vz3xkEi54YWzAPq5Z6TqPP9UwK7",
  "key42": "ZEm7wfAWHzroYkqEeiSCMJmNXRTgddA9RosUNvYWG58qYsavywmxjDUsyMUot1F9AanvcxMUEYHXjTCYxxqFdoF",
  "key43": "YVLKp5gUajHNoCz1u6zHRRUuTw2DAprHwWar9KTqWDaztsj6rrGNzra9DbMb6BGsfaCQe19JknUpziALqtaR7XT",
  "key44": "2tWZ2MGaVBvDJ9ERY2ASUnUUJakrhsnxSEFAM24K3sygctrCtFbTPt2REYReppTRkgXLhgUhy9Y3kQHg539q29aL",
  "key45": "3TZiCqGA6yowunSn7FhBqDWVyQN23e68jKuhmK15Aug5Tz3TaFvqQLxXRxQc46qtFZyMb9PFBxXDjoMEKFTRVPt3"
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
