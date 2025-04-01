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
    "4r1ZbL8ZoUUGMCa2WLm1ueqyLoQKi6D2h4S5a4xt1XDBPmBETGr3Ki1ZwUFiocQoBo3dHnH4C89HSDdWqb4HxVt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zs7eCZxSnyN1uui1hZXjyrjwwYRHVQFw2LsBKqHSFB1SbR7BBVyZgZj63kTggmQ6S3tRimvfUFDzSeGRobLPkuo",
  "key1": "WEso4Q8Y8mH8aAg4nV1NV8DLS1FJkJEVACJdUdKcpkiASsAYz7f28AUcW8mnqi1pdR3yHAi6AtrfkDhwPMUbPUB",
  "key2": "5FG3q2R94DKRjgfZ32P9KYk4uMAw1NsPqj3ubmi9s4r5fAciKAv2X34sYzZpKfZfboDzQEaxh6yjoL9nsxU2UWxg",
  "key3": "2Q8Rgn2HTfzXp98sQWKJ8gZnrbNmUc25aQx8u3hjXGN3Y8rUtNLWxrefXxJBEMxJ5hP9CKB2yqDG4HSjhfBVWFCX",
  "key4": "2Ltxw7CZM599BLQxrxUNab7dRbgEmYq179mFYKxesTCj2FMPUAQLfymzxsHDpGUdtWuocXmnPkdooDTKWAqBZCsd",
  "key5": "25r2uXhX7ofEhC9QRSPmh9choBPbf42o8DYodFqVxDkn4Wtq2o3YW8AyU5kzsE85VS4YDWwAXXNUJRQxocxv8qnL",
  "key6": "4LHuM3F58ptkEXKRxjaZokvpaX6PwrmmGbtqjR75mviJQwgKs2LahaBgBchioyieic8WKkf789TzM2yTFNZ5s8ei",
  "key7": "4SGXkZa3nSZBa5GJrJVXsYpgn4C6sVuRPyiKt7j3GpF3NZ2pFbXLgB5xuyXMQLHjMPpQbRVNREPz9Q8BUttzYGQe",
  "key8": "4iop65uPytet3gLfpLQ3Vcdc7T8GdkgsunKQAG13Xer41uBttpYvLs1dScpjCGXBTHnExKr1DmLSkVCQgamhP2DS",
  "key9": "35CCs5NUuUR6wN7xPwakVNRRsBfXtyRtoGbQit73LGyCywq3MRnbHRpTo2SLFqZr41QmiuUUEhonzqW4fbMmQsPV",
  "key10": "3Dyd9mWb26yR2GV7uGZ1UYccpRVn1fXRsKTkTfka2TZoWVXfNxzT6jfmMd4PWwnSSMb2m3baHZagqi8VGEjCSQWZ",
  "key11": "44PWbd15PujpbWy2Qut2gyGyFRu6RNA61mBtZfZrWJ7U4JVXbicMfLkQAd3tbumxNZ165FG7GFfPYu1DRUbwy1DU",
  "key12": "57zK7XaiNZ9qwJp4XE7JwJNoBFtYvDKg1mMMwgQdH5bS3m8eu7ZG2dprK62WrwzFkNF8RwVaZWzijSftLEho8jbq",
  "key13": "27UnQfhzKhUJs4eNTnrPGDwH2cwkT1ic3P4ZJVjbXyq7x3TTBdZQmrJ1XipVQWbRNUyKE4HgP9F9zMjuV34pwp7k",
  "key14": "fdm8ikUrFokjpapGoJriX5iauQtqvbZNDddwPFTgXBzQX9M5TcKUtfGJqiogXk2ywmG1aYUoLb7wivdoWCh6Agh",
  "key15": "Yk5szUx3wDymWFw6cpemv21sGLC5ysfvUgyTCTwrQG95dm1Ck8VeRLCZ1Fy9CWRuAVu2z2usjecDwiaotuP3ttf",
  "key16": "2FEYxaG3pqQDALU3RwWCib8saWkkUAku5a5ja7vKiFyQxP8GM9A39jo2ySMEP9zSeAE28Avqd26JEXLwWAM9ALWP",
  "key17": "oQFhsZN5AXwvAcBZDsksEKMwLL3sVFJH6EoQaDbevFQuHuviMXnJuX1Aesr1iMC816MDamyJGuqcPwQW9Kj5Ke2",
  "key18": "5zPvJCYqkpKVr192NNuN4Cbkce9rqPaaBg9hUAUsLYwX4fVFNPyAN5bKCjHPZj5yDQPTGnDW8WqH1ULznY3Pc8SQ",
  "key19": "4dJpGYv6GcVmEHMQD4nKWrqQkW5nYwKZNAU5g9d3y5fYAnFNkEDmQ6UVVNGk7si4T5gmz1ybxsUR4FZh5HXLj8LU",
  "key20": "KNFdC8AtFeu6ZAeDKB8fQvs6yrP9teJNnGTPtkDBs5SuzpGqo43SW77ZcvpRetkPiNiyQ8r4GkwFpux7bb9pJWL",
  "key21": "2p5acd3QCSe28P8A9foZcpxAgkPURwwyDoytBvNaDt7zphi6rSLHxubmnUHBaKC5gau8EaFEMuLfhZwiVGNJDjL2",
  "key22": "i2EGLmHiCaC4YKw49q6xcdjaUqDkepSjS3HHSsCsbYWyM5uFoLyReqFxMCbSxZAkmT6QhSYQxL7n1TbzG641qCJ",
  "key23": "2sA4238ErX5wZV38G7wzpra1dZXsAc7Y4jo7sxr8XdSL95wLgvWyC4mtF6FUwJzkxh2QXiFLMBAckyfsUVB9gNry",
  "key24": "4rSqfAurAzDtS3SVajmhWMFeMvqDxunK4kQEv1jpFXcTTjtCDzPnvSLPFXtofNY15f4Pi97J1Xt7rX4DBEJNQTE8",
  "key25": "5kp2K9SDNskWxbzoqzeQxotDMirchgeooHhQ6imo12bYg9sk5UUkWg1WnqWYyJgyKpyWaytXGyWWCgYXann8MAu1",
  "key26": "289JTUDQa3N1sKgFKZ8WHGWmYnZ8ta9JvLDXjSrKFaieLwkK1PumzRs5e4qM7DaNoYsjdjTpJcZcoNeVLKEyZ7rP",
  "key27": "ny1FHuMeWq28suCGWp5vyCznjGhzCDhPJJnqZCn8jQyHuz6hSoHszGea1BYbPAd6d1NDz8ig8cw1suXgW7gGX5G",
  "key28": "5j8TLySwFb8AmhTCWYrcFeqG8VRmkqzuU5JJGV1599DTUtZqVqY7MgyLQhwDbRqDWzFGkA3NTTCET4oPyEJVKvJe",
  "key29": "4YEbgPZ5swJFGssVC6qXdCQC6PcGJDBLNHTSVuizWF389mtmgJCRJ9mJBcT9stRW9xkqd2KL86LZuDowpmCLGTGL",
  "key30": "4G7cXdPaQvQzEp68xUT8S8CJ5mDiX7YcBz5r7QoLsNAWfaHHxZmKho6HQFYSjX8MHHkkCGden7yevJUPfFy3J3Ub",
  "key31": "5FHUeTKLyEhz6u7cyebux6sGBTpGAiHK1jmTBEFZ3fUqJ7ZyoZgqEY7R9stYiStTfrtTv94LkKPrM2ETZokqmuY2",
  "key32": "2h7BhsFMpaEQdVxsDC34EwePN2kgg1kt9yJWry9y7ziZDDEVuCL46neXddeEKWKVM7W3dPDCtpd23Qdd49bZ7twj",
  "key33": "GcMmwqXX7mW9PtCPY8wV3CCbgahBA6BbqMtVjKmLxBcQVwTWcktSMKrPv4AXP7zTwcAvqKfVsXz4nCt8uyRH7jR",
  "key34": "5ULrdu6znANVDgyMD9gv18DggwqYq9pnfEbkG5MG3NGWLZyNN4hjzsAfke8smY7WA6nSnE8QM3BMwi4cCAzqvUDh",
  "key35": "2DM2dA1Y5zgttBHR67hBi5fW7L4d8adsM9wgWeJahukxeyw2cvqHsmqCSmuuJHHUNqs987BEZR531uSsNVUc852i",
  "key36": "GVtTS8k1s51XhbPBdzJtj69eANuCrEvMQ9opwkiW4Cy9wUPxgSL2RX7HH3GdY2R8AssyGeLKeae1s7JkFwb4jAb",
  "key37": "7uVFLUGmu35aFPVZjBcvq31XoVG5RaPRqmM5GiW8KP8VS8sjDWyekgVNvjCmSQzDDkgZWoLY2KdBe1nnNLax8Ne",
  "key38": "w9FV5kTScDAQa1boEZQvPuKy7JitF6fyw2E9E4W6wbeEMDUBW9ZF5jjNy7oUAk4SJ45PPCmio8jr9EwiZX8rfk6",
  "key39": "DPMzPsPUhEEspTeDkvFjcVi176PwfhD1ysPizmbQmEo4st61GMWmrFGppNixt54rEQcNWLzKC8ey7oiy1xpbfkF",
  "key40": "pgMPBcyz27vxxZPZF8pysaqreMLkQhWvBuigoHf9buzAoj24eF1fw8h4tmZuufwFnoM16riBsyUfRTuBFhT1jM8",
  "key41": "5Y1H89ZtWmGXUpdtdXP6ZYxLaD2xUwftegXJvHkKdeXuYdM12yxnELvVHREWsShTXQzm6qHfjhofBRoicy58Jp73",
  "key42": "5xgWW4pgedsKaBPUsqMCAiMzcFhgwJeiwAPCNNRw2BrLwAVEYCUbNCg3Z2EnEbGJiCFHoemaj4ZmZ1S4rrjHW7Q2",
  "key43": "aenwX1pWCLsL6spSrzdi5ZuZscgJHWZT3KWtsPAf9ZEcXVzeSFq6j9GUq6SKnSU4Yy6mLqMdxrRYNwJ9qcWaQGc",
  "key44": "XVQo6ShKrqAYq2ncaNNRpRFxVJodX3CguDaDZY4pPa6zYmzP8Lex5qESzpwyGgDYeiPHnBA69ZqWpcVeU1f1oah",
  "key45": "HxvgzV7pS19QeMRkJgJvUPwnFUYRfU1DomohJadwUEX3y2rkc89DEqrawC2tZ1uSYmTaWiwrb1pYs6xGvgKYkoQ",
  "key46": "3uhsFx8gJiX9VYjXkQLe8xMB1bKhi3cpQ3GNwKciuzZUC9nhUcZ84irbGqQTaq14sR1vHsmZd264AX8x5UpvahaX"
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
