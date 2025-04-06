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
    "3314LfVha7FcrHvXqAGrwiSDCimHA5hEhk6GTy22gwJhQkSDdZ6VYfSn22kdRpKtCFyqSQRRp4YBqJ4EYqjW2Ssr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67gi6Eiy2zDdjy7WE61EyXGX5fJFDm9TYDUYzyAg58UPxhZQmpmrj27ryRRSRMYL2CW2cFgzaBpTMRhAsnNUDV1",
  "key1": "4u1mxExaauZiE484nErzyWJXNf45p2tk7WTUyWVM3XMoCLaiffaxFeyoEtYfvCJmGD9sukyWtve7SJtAKVNq9h4F",
  "key2": "2BBRgnhWQRHprePanAyFQ9nF1YZtCbRH3vLLgT51VQ2jj8dPJgUQG1tfn8q2XkTz3pMGnivBpQEuc7dzfosMzeWg",
  "key3": "2SBtCdZ5XyhUwi6yWxkzR4SUh5Je7p4ety4CakzrkWabsd9bHQJ2zz7Zxgtxe5NrdmpGQNaoMU9dXycvLpigQtk5",
  "key4": "5FMnYMRmMzMgXy6HsFSnaURgys1Cu3ccDomi31iVjkFEcZ6JfV4qy7J7htTfcL8GkuXw7P9br8JeitJh3GVCGn1R",
  "key5": "QWH9JjpSufWQiZRAjNWQF3ChaTMcvC5BPLxWHkwXMf8GSddx3VoYZnACsFt8rZYctrCEuF6oXsggdvMBgfuit4T",
  "key6": "4UZ532kqpbRtzdTBhJbqTDd2HnL3WiYSWxfgBXUhiafgi2uwG2kjDPFS3mj6eYKpscJ2sjyWBZCeBD5bxP2uRuRZ",
  "key7": "QBXxqQrFQzU82VkEDHTkEtwb5mgssTbtz6Pbc1PsJfrjF5CwJGTMCQLQBRXKPYYyUKYHkWt7QRdkRLwry7insAB",
  "key8": "2e85vMYP4bsjmS9oq1VX21VFqdJHgKmvkti387DagtLt6szqZgcnv5LhvHZK8G3A7oJs6GTjQ8RSDJDDdH6FF5Qx",
  "key9": "Pr6uQLFXcquUyZHYXHH45soCtN2CcHgPRMJteTTpzJEFokbS4uARYephmzGtg5zSndgf4S35LCQR1F3LuuKLf1t",
  "key10": "66sw8Jo7jtu8BqD2ivDt4DJpRgM8oJjmTWaEqaaptAdiz9gusDRqxLcmKpv6YxerRkDEMzgzg6SKD6aniD8NC4NZ",
  "key11": "3ahafahf7rP2HqBTJavFwHDDVTKGUu9mWQET9zFghxNWeCmnT9AhQi9BTNi5ZqdKVYvChJfkSGjMFaUKrkcnRJd6",
  "key12": "4XDwbKEg2EJhz9PnYkitv19QvcaZB7dtmXpLt4L2pCQd5Yr4ouaQVy9zn2NA8DarVNJp68ZxM5kTMr5R8uYjPpgd",
  "key13": "2oG6ZcU4t3fVgUwPLz8KEePJQmBurGCrw3shZruy6pqNncMXCPBj7ykbdjia7HvCWEhmgGGrmFebG7jQvyRjBT3R",
  "key14": "5LQVCN9wSj8KkikBWP9mB8pbAFwwhwnnwcdBWoaU2Tk1DR8UNk4SNHRFesmM3CR2UkNuMxgdUWMipgHQ7YjvVe1r",
  "key15": "5ZjGbRisBMpuQZSw4WJSrHf5T43UcgESLH9KJkTXPMSbnXofkzmTLXP16J7CrgnJqJ2pstQJAJQepCC4xDgmxzHb",
  "key16": "3smmWQcXRfTXYycZkPUWouJuaL9P2gv1MriNCKn2QusUGv7LtEzAC5A2BxaEDKo4MNWhWkzFhD2UWYBCkC2VC13M",
  "key17": "cy31Zx4v2cns417pd3Adce1McGEtSUPe94PkfrsaHhUdQiZY6W2bqEq6EWe7D8vKw8k9TghK8UcrBwHP3pwnaNU",
  "key18": "3BaR3YAsB16r6tc6yVS9tEMGMGKRsx4ynrM9S6QgRYpHnH9TzDiiKvhsd5bGKgZ99PMKNuftvkCAiDypyACucFxQ",
  "key19": "4EkzuSLaeNnMW9gU3vXrvoZfhSh6q2H8cEhcaMQzV6QvNGSjJ6DLNqFqzYr3LkFGiuq6kZm2uZSyJV1y6Kt9aKyV",
  "key20": "2iYdLMsdA9d9nyC9LkoRjsgsbyWtNmRxehh4pp7egMy9KeABfFopekAJdToBgxfvuHidSAccEU4eHPCsfhQ5SqtU",
  "key21": "oMYWbWDCWhNYQaJEZDEY4iPHkGXXpKJ1iZLSJxixQ9GdSTyNGWVwUESHQjetCzS7NPpHSqZjANjANM11YXQBJN3",
  "key22": "3AerH8ZNQZfPDZRhD5Ft3o3sb8vHTmQm4CbsoRRcbcj934iDVRgoqrRYoKGd2MuLJyLU9X4tFnCv7GJo9XugbSop",
  "key23": "5sJmuvCFNyvnyFkbPD7kU5xGvUbsdyw1fJ4tYRPD4A5BxCNRY4YxQhZi1AChnXrexCtvH9giqSGZuXhrZgLnoMBR",
  "key24": "3McKgsSTGLokwgQYdhWWJN8qzxrVuCg9tuPT2tBJCK4fgosawrDohfh5WqqPHq5JqorABJTm9P33wdziE2LF1Wx7",
  "key25": "2UjaUKhBePKrbuBQDqpzTtE4eJEa1VNBgr9egBvhmXUHLAm6oRowLTLTwwaJyXXQHto9pYSYAaUJs4YwTWG5HLKQ",
  "key26": "oBtChjRzCoWaJrKqFBXv24XPbNRVJkAD9NFAp8Ve2tMM35cTapNSspNcyaqTGAAy1zfjmkEpmLbbAbwawUxXNrY",
  "key27": "4kpTfUjkRfv5SoKgQobKyy1fHExMSqSugPCdweTFY11cb76gp3N5k5cgkt7Sxzb8t5aZJodLQQ6CPZ3QpoKD3ZXW",
  "key28": "KLXxnMTsgWqPuhPRLVC1LCbyiBsDjSvBX7RkdLgcPFAWGZeKLivmtq44HbE77w8cXStswie7R2KhuD3c9Z5AhKY",
  "key29": "2VS1y1kgUEWe29JYc8tiCKLjzbgB6tNTv45uA4bxdpwFKDi2Zxch6TWuDDLtait2hqXF3L4xhk7jaXq7e7QwWTKr",
  "key30": "2sMuSzDmw8EhKn5hwpuzZJ5nvpvgsGu3E9QkgBvQkMUCEsu9ou42GBum3K75kbWF9mbAT3D6jDT3k3fM5KGQBY33",
  "key31": "JUcDrAwSco426f8KQoVXbfHs98PuGGrR6Rt3wgkxKzyz2cVvovhwjtqC3AQDoxvbHNRzXht89vVTBuoQtbRXrNZ",
  "key32": "4wU9AGTzyZdjRDHq9mH47o8fmyNiiojSn68Ax62AMKzX5tEQVzesU6XRe9dr9CrCdpLM3vzVy8PbiM2tNqyrMs9j",
  "key33": "2VVMpsEmKsBeWvJMtwpTyf15SfEosrhKSzmuWpFdB7rxaStHDPrRJ96SS4mzodenLVUZ8WfPEbotaSdAy3Zx5ijK",
  "key34": "bq5UzsCBXJi1LK7NuNuzY9vmf1c6z8s4KiZAXYaDVz2cnN5TtrpDQPf4YcjJYhyftarBEtuPwcpvKu2iRhZ7usW",
  "key35": "4zGP4ccnABFRWB9hu72MMhRWex9FamQw1BVkGaxCohjCECnpr2JbiDsq8NWAsQ6puLqfgrT4s97RaNpDT2x94vCV",
  "key36": "4V4jmkp2G2VnUQfPWBEFwNgzedVMtMP7r2tnTWMsAWGdUNzakTHHbWiQezJE8Xf7o1HbZ919Jbgrnh5XHiL6U8g2",
  "key37": "4sZyGT3pida17hdpin5e3tXTbhPCmg67HHX5h5Xpqsm7CbEA8k99iTJwCTXrHZ1x1M6iwRFwf3Ec8NfaSQTCNXF2",
  "key38": "47XzPcyrgREhofczgQ8GqdFWWExfmSr1DWDkBrTq1APQThyG4R28QFu8YURtXwcQjFvBhsNwS8HGHa7X2simxKBR",
  "key39": "hacGRwLmn8BoPR59rEF84CtxtArZNrmeABSLbtvJuHny1duWewi1UQQo7UWJ2HF2XDemT212oKWs8pyLiRrxPgD",
  "key40": "5ynDJpGDAyzGAjYc4xz3oUWm6fb1vNHZrNU8aKYSMPn6DP4YLELePXdMtSezWsvDw5NvLqfuCKXbTaodTXZPwffC",
  "key41": "4gnNZmQcPvEjHr8nuM2V4kmAvmzK8jfNQEugbxcqh4kEtbsXqeD86oHvUehVoYhhGq8YAuGJD65n2mJiuFB2NSL1",
  "key42": "5nXnnAAQM9aFabmdQr1MJqGAnoWiq4XKrjPmiWQzVbYqrh6ebDkMfvQeEgoVcj6X8RFfpJTcxzt7mX7wyrWJWJkH",
  "key43": "2bQ4DuUjnUvWdbCfgMdY7fxBd4Wr2MJMRijKA4ZqjLxRDZSfgVDfnFDuJLnTPjHkE5a8DM3ptCi7vCEJZJcS1ofN",
  "key44": "53qp43PTzVmxcRhFmMWojTmG6SLtFWoZNcMevRzACk1JxznGPLdSVVNWoasQmKjLycLF6vkqfnmXSukKPsFojGKk",
  "key45": "2ntWRMH23ZsKy46Ffwsba933a3bzTo5s38KKaujggvbENtkCp1pwQkAuzopTbadCqLY6Js6XpTboXJC1VGWNDgYp"
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
