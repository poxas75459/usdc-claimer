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
    "44RwgNJou2auB7UtweGJwLwXWtQuYjiUYoj16avFPrWhKGCo94qYiaTzfqNaZ7NSPvbvcuBViw6tRTRQRx449XbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3yC3VoY9CE9ZASzc2eqenboJqkCKnbe8M6yo6uGUH5cofweUSeTaq4TFeDXsoCSpXJ8XVwdJecgXTAK8wSPxFc",
  "key1": "5WiapmzNUo2qg36H6ckohTLYJPNVWnUouaRzVeWM9k3P6MXTF2Gs4BN6fiSkpgLpSxwGrVH4wy1LeAwTWNutNaso",
  "key2": "4Fk7ufTmtWjeddqkxSeDGuyBYetKNfEtTH1umunqzLr5xnjsxB3FgKMsiJiGDiXiTATKKcnKnxMFCwTdpGM7t9Ap",
  "key3": "2oSx9ZCP1B78zxHBbLDpgUCYxVyNYeXcewSJoieYGJydXodX8ccDKbgVqzK2Ax71iB9LEFEgLwEKuZfg6VsftZEo",
  "key4": "4TU6AmM3mEun29eEqLw7PCm9ec72xehYuJqLhob77jiQ4Bnx3iFUF3SzuxdE6ydneNnMAgmHFD4FTZz2jLfCz5EN",
  "key5": "JNX8AnVjSTFXLiDf2cyUxtJk8uw4pwvDGiHCHQzGVqAuMgDCVSXbYZEGZvGi8komjVEcHWz7cyPcjnTWd1Ja7oX",
  "key6": "4M5RQCoH97cNzM6CSxp1sgzDRSZLGEKkLXhWbVb5J6tTEsqsdS4kkDadZqBva2feebwjTxan1hAvEuaePxGU1CpA",
  "key7": "3JNKgMW6LPwRzp1wMpPo9tqyH9jvoPYQ6MjqJoNQRicg7vM7Jw1mGkpRTcDPD6Zd7KH1bpqWSaA82tTz7F5MjWnA",
  "key8": "5GCcRyMq7a5vf1Z2r4qTdGC83H5zmdvUADABTzRfSjgWDDy3jHyqXT8q6Kpt8821DSA7ztySUTudPvfNQ9MKkqMJ",
  "key9": "8mKf4TqVkMrbhSTwKtSv7PNYQPp2qqe6M7UNPY6bK8J9LTX1W4pYvvTMAXqPxTPX1LQjbbWrtyTY4rCZKWkmETc",
  "key10": "Kwn4VK7Tmzt4AS44Y5PR3mV8gUGkXpfoasUdSu5D74n4xUKszbm9KRFNtFE6WDtijgrPQmtju7UncqDvRwEFjif",
  "key11": "5MLM82Yvpvphre4fEL2dqSLjDMeQmWUpxXSSDsRn7nFFeY75fnTQAV1uCU2gRQ2BkAHX2m7sd9HqysLNbw8y7sQn",
  "key12": "2A94yPNbnbYWtLDkKWLJGxvjbSnyi3FU2SZSYCW544WDLUpLdZ25FKERJ2zk5hQ5zbLLwRJyc3EqWLHd9Y1ypmxi",
  "key13": "3g8LgQV9jkZpJcaWeGiM9tuv9Qyh31vkKX8jJfCNAhBSD5Emgk9TEvHGQkbnGhKyNtfBBoRZ43ri7584snmqbqsb",
  "key14": "4Jy4vsTN2ZVM1w8HiP1mYN5WiLhJmUcCrT82wy6E9n9apccVSe1bYqSA4zdzQ4Qsy2FK3DD83GpEgKfr5b4RFaMT",
  "key15": "64smrkAL3Rh53gosRuUtg9caqw6w4WF64YtxDh71i3xsjTAeUixhPRpnUiXiJ6pDyt4GYrXhngVcvXK2QMJUZN7d",
  "key16": "667crQVsNzksrjVZRYm75wdjUdV68qAVQ8bp6BukQsNbekrXhdv3xPK2jSZjwzBHeXMmVZtJtqv642Snryawi5mN",
  "key17": "4XZaEEWyaXBd1NFRWHTRpzVQdgpF26vrxrvNV6dV77yzcrydVBuqgcv5EELNTAVBtmL7HSRjeVwtLVkq9qammx4H",
  "key18": "3VYvo39o36UgJ9mBXGg28Ee8s6jL1VqppSop2vRmghMc5r4Y5UtgK1QWfS9CaLupS2QimR8W8GQw58PkhCrSpDJQ",
  "key19": "287o6mZen4cFcb9q9ATigopUPJ9onkZyLsyUN8EQnM9S75nsn5JQuhDj8bhybQBBZcGzo35S9MAjXRSoyjbG95RP",
  "key20": "4jk36dEWswQ1ciKXV2EM1qsRjtU3CFdpGMFitKJRqug6xsq4FpM3zxRHrCYkQPhZtN3LfwkkhySkWuXrST8A3GeQ",
  "key21": "3jt1wih7YjH76U6S6wGnN83D6SjNCPPeEWhKXR7yCEFNfCb1bFrpQqC94yqrAjocA4txN7F5fZ2MF2rDeotGwSW8",
  "key22": "4LvhhU9ctm5tfsMFS6yE5Xs4QviFaZDWn67xrpE2MPShQrQZSmjeN7UtuKUFSZeYaVyjZdEaKa4GyFuwmLrsR1iR",
  "key23": "2kvMxgRUoxz8ZuWcsVfdWAXs529JsKvYzTgCvny1W9F97PbbgeE6jcVsj83kRAuW5rJ2ZxoaovuJPshZX2WPp3Yt",
  "key24": "4yg2R3dnpd6SW3b7gfULTRMiaH5zCSKCVBokoC1swHmnernoMXcKjUvvcerAx3AncJPCspi2g431ak7Y3LngvCeL",
  "key25": "3eFGTHh3tFJgVDUbKaBZD9RWL56T1j5m2yzB1AQQhxL7Qnb27NuR6b2yWxKuNBYgrN3F8X67cLD7gbWF4b9rD6Rx",
  "key26": "3VKqHvMEkwiV2x9MLkmxxr896m1yj8LPfTMhMMxxf6xYfXgeZGWTSH3A4znvRj9S5TuJ5Z16jkaJCpp7CDnhpaR9",
  "key27": "GboQTx6h8W5oFwtqtHnb3DdE5HxobPvu5DAUUjhcsRM7avmNu7L8NsFjh1DcTtBHevb4n96JnXZM21WTQq18yqV",
  "key28": "2PMGEFjgEumTRpoe3BjrkY5ZFSb2MawXwigJ1wqtoXzJPDRbJaqUqUckns15dwVn6q9rF4JDyHGHRgUvVPT4h4DB",
  "key29": "3XuRgSd1DLwaYw91CEap7eRZBBWmo7knZKaQHvNKL2rsBzo7Hu2KMEBTN8No9HmP9KdtZFoQ5R1oZtkG7F7jG35N",
  "key30": "45Cym62TnuDE97ukLMcjzTae1fRUkngsLmKFg7mtc6e8UxCqaUdMynqHSVhveMiNm31W7kxUD3GoN3b5Kd4TFzL5",
  "key31": "5teFaYEL3GNuAE3dM2F4Zkj4BuF6yvtzB2xKu1vHrF7vzWEzm1VR48XZQT3g6uFKvc4Z6Jy9hSQek324Lvu34yJV",
  "key32": "3Q9ZW4YD3sRZVozHUr8ysqraPnazBr6Th7HMTTUigZtp4K8oKugayC3PEEqq1YfjH5xFqsAXvoGsuCp9LqE68HYY",
  "key33": "CfTupVLGcLJTvyNBVxLZGbNR35fqrDMd6Uyrn31zGjJJL1s3RjYXqL1Q819YqDVJ4w6H3MQ6bTuQFWnVZwh5iYL",
  "key34": "3rzt88B22zTyLdUupHirTjEkM5A8Fpftz9RxkqNHHJTMohowYZta6SUdgcHSgvyZ96HyWVixEjjmUMrC1vukyvCn",
  "key35": "5fjjFGi5CRHd5CELFqxxC42972V6YfyFcXvwaZUX8vuuDvoZk1ZeqitsrUVmFxty21xQSJoBWkwVrk5rND3h72hQ",
  "key36": "27hBqPjZy64EDPBG5sM3s3v1QukYw1BaB5a2epwPmDH6zmEB52CR5JnQgLrSPaWcMQ3prG6w9U1YW2XqdWCNTBfx",
  "key37": "5tUXPjooXqgshouPRJQ52LnWbsF6yDgKTmmjndNLvnHrr1d7SzfBzDUh7H3HVmrAhd5ZqrEPnJPxsuvUBVTuHDCH",
  "key38": "4sn5m71QaiBF7134cEFpRYnFFBoFXjZtXXes7YDB6zUnaHBkAC7fhdW13j9gyMcFf9rHurE7FbPSarTXvENqhbH3",
  "key39": "2owUBTwDFzxuojja2eWnR9i5QZzxzzFvRXH7iTjtR5ULapCwHH4qNMoXv2kR31WLzTXjLq5RdtEddZVXofiuLMmA",
  "key40": "5cY4PUPne43A93R7qeWjMPtSqopSYDmG74R8f2MSwDEaBaoo2AH2Z4kQzQUtZxezqeHW9hWMY4667DtiSFwC86Bv",
  "key41": "5hT95ufba1UVXFDArP3r3m5AsNqRtiTGXP1nmBqe5CR7XjkynV1DNYvvEb3HskUUJfX6Dx4bUJYcLXu9GtnTVzy",
  "key42": "64cKHv5rHWJdVyN2959v8NJvXfx7QgsPHXv3m39RBxM3jjKbWitP3fsxd8MHVMZU8oS5Qf9Zq6N69N6dn8t141se",
  "key43": "2RikWPTVaah9PDNHAPgRTw6Jn1tC4qLBFgs1h4AE4ARD61JZbw41HMb2nXveq5Ca1x7T5mD6Mwzj5YqdvbkkYjKs",
  "key44": "gpafG2YyPomqjUzb4VNWZSiv9tpJvV9u6kXime3Tqn5bna2Bb7Cbn8a65Dffba7ShrVjbhZSyQHFsrBS6k87eKH",
  "key45": "QWANYwdu37smJsntQdSaqUzCGVQTmJkHFgMVz7NTtw98baSUU8nP1ef5z3L4f2TV3oSimi2E9vgrdewESTQC7Xe",
  "key46": "2UipZMDn4dbkNrLLDc9zziZbr8cZf11pk2Q1miRsCb1VCqtoJ8SME5K93ik8Wzrx3XgPFQQqsHk77wdUq4ghm12D",
  "key47": "5wFciSizjQtgGJQosPRRjnohpsdzGHKiA3RabscDjWepzCpSPUr44dhDyE8EktcbJZDJFoBgypD6sWgJUkPxbWrN",
  "key48": "X8r2B7h1m8GpoCyKpUBjtiA6AwYMAyTFi8K1BJzBbrWXgfwd1CGc6Pste9sumVpKgtt1HsrxdezqVrjDLL2anNq"
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
