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
    "2MbvLvyKcoUGtuADo5HjyNxoKVzAMvTCAvsc8TJrLjD1wQLzkk7MfyXPNknt9S39uGZ4jWmSNzC5VC3Bqo4c3x5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kvTGSdmnhDfuNMahQNoEDDcJxrwL9VSi3KEkkqzfiwRkWVescD28usoB56okszFoq7u2ssS7dy4ZpqzzXS5nqaq",
  "key1": "3m7dSLaMJfqmWGrvZVe6FwbN3VNNZTa4aqcLRufSJtmty1mKpztFtC2NJZfj2JuqgPuG4pFVBRQxd7HAWLmR9hWf",
  "key2": "REwBehz4irENo4NsmYbntWFcgCvesJPZ3wcdaQmz1PoV2PGA7stLWz4JDBewMM8s9u6ANvtBS9CYmHqVjpk5GY8",
  "key3": "42H6h7FQcQLLP4fXhbN1DjJ6bwpcvBfqx7STn7rZNf7xyTBm6jcFDebALMuaumJJcWoFEUF7GbbV8t6ps6bENZ6W",
  "key4": "5zjPsdzrXEkndCSR5CfBrmD1bMZPxQWuU8YtEn6s3qmcgvqiaixp82ER1dHgYpYnxMuubaZveyoUMWL7EEvrcUEw",
  "key5": "3F5nrGtPGoMHBMogdMGgCmZbF1EorReyFnNRDhkPU8GWKUFrUk5yeEdhD45beYhSQsoMhtQTP1H3Wqf44EtLQeMW",
  "key6": "3fwjz4eFpBaGCSEQ5Cqdtv7Q2jch1jJ6GwQx18quMLHUyC6iiWWeNxbjG3yP2VhsxNCKDCER8E8CtUgpZ3PTZQBT",
  "key7": "5qpp9HxfXmp4U6rfkNJFdKmZVJ6yWQbZC1unvZnL8KR3Tt1wNNBqcabKJFScAxDEYxWYonuYertGBBE7jzxZ3sVb",
  "key8": "2Hpmz8ythzGWTH5F7Y1aporeSKAdDCdqASR8E5Z57TFNGMCNnGuRQBWxtVmX3Y1FQpc7qCThFPmFCBxjveuuV3TU",
  "key9": "6iSrmEmEeHrjv7U6vb9BaQ6KfGUrCmYgrjGJD8dPPKARK6qi3t9vVR41q86Sqg1QJ2RDkcYzwPm68BFNw9G5SsR",
  "key10": "5Hp1HHMXHYHjCNRFowWvd7c1gaqwvAG9SDDH2xnVThSBPQDr5x5ccEQwJvc8cuQGsg1BVwH8KjodWGJ4zBKbxfTr",
  "key11": "3e4aDA8o9JoCHAgzb43zw8p2L9N7YuWnuxmiRSnsGfUAE1b13LbCS1ExcAbXFLZEzgRzr2XGVb4VsNdiGMVV7J8E",
  "key12": "4MCgZMJ4snborwrKZ9vDuBajcNgwTEgbiYse1prcVUjsduQ7LQmYnKN4ZdnMuPS6bf1HvLyotbgAkSfBJAd4wwpT",
  "key13": "64EAzBRVjQwuK7Kry4ZzU4s5YzZsahAZn6RJtBKGLpT2SSsrBpCUwAjMtgSoi9jLYufAHrLFUEMDKq1A5nxyfEUk",
  "key14": "4CHHQtK3gJqSLZNNFUBQypVVvnVdZb52KroEYAJNgeiHhtXBXh2B3DK92rxeLCqhixDZJhcisU8VrQnG22hqGt8E",
  "key15": "5WXtqcxhWnhz7kJX1SRf6Mdea2qNNtixN4N4GfiGhi3xT8cwG7RJHCxPKpJNfpTMY5vDzBji9gmp3t1w1CNmpzYb",
  "key16": "FaCvyagjHdgFnkgYPQCWoKsmRo5dL4eNQkncrYdTtfgzz8ch3bHz33iXT89PYxm5KAHs3uQjnDezowxSQK8sJVm",
  "key17": "5oStkm67ULGkrxsaHjfLfRyuoSwqjAJbXfstaf98CX6s41bEoLSVz4GvBynaCCsCxrMYaYGTvYxbYpen4R6n3yat",
  "key18": "2AVa4pJmSQBx6LZ6rB1xaXVLMvCoSTQUpRpx6MXqNnRmpNWq3NMEHnqNmiv8uSg5wTrDpErDnPhJYYY8TZZ1dTzM",
  "key19": "5mFZdwZvJm6hFRRic4SmY1p8S7NrBsQwWZNm3HGBXHRZ2ANCeLNcfzRGyQh5XV9Qi8B9dE6myHLJTmfo62VfXC5Q",
  "key20": "4ZuAtef8G9nheSVzebNoZZyg8b4R6yia2LnG75TpaDKxCgrDHWGaUx6GqymDEDi9nKpAyB6g8cpncHq6hNznzpRR",
  "key21": "jK7UoMkRW63nTayaHN1649tDcVuF3R6Fys3rMcTXNBvaKedpvNToDB2ZUQNsu59H3Frgffc65bdMD2pmxRHQ6xP",
  "key22": "vYSssTjptMKXR7BSzuhsWRrexacBR4YmnCJ41W164jPRC2DTQX2Jmx9pL4yV8awKmWdqsqe9U8mxgACFdAzA1sa",
  "key23": "4yVhUnAyKDrGKVyPuCz7EFGMsWvaa6qJDbAYR5RCHtxkbb5De1eeKyCrCyFRvsLoyhMqeqWJWow5c2GSWmFFvdFa",
  "key24": "42H7DXSPxCRv4hP9nRNMmyh9ftHc7FXimDqExCNkWHeqJUfKFvNykVSGD7HqwBJCTXsfbyCBBfEQ6kMrGe1kFNRW",
  "key25": "PjeGQ3TrN5WfC9xEuSHE4WYELLMzjrU95gtwjbCD8uoeyG7SzUbmLvusJQThcK5qELsp94pddrwrJ4BjMbMAD44",
  "key26": "3dRBjuENre2gnh95FUpUP5i6HFCdCbzT3GpVD5sRSLeSXptkcdY3tjvzqf6JnSf9GpW1HFyBWvCRsjhUXLMfQaxs",
  "key27": "nQax1sH3uM5PQ2PeFhwMmMvNik1RhW2GZvQYXwmUvYqweeWWgSU6d8W4W655mokccgubtCpBGhxRAiJtWVhHB82",
  "key28": "2FMJpmJofQHAiAE2STiQZzS8fYqyNQA3G4jTB7R2wSEGr7tbNjRs52DD2CUPrpELui73WVJcJX1UWFr9tUZGm3rR",
  "key29": "2wi24qYQyc131cKPhS5mb5bfH5mkP2GFFBN7CgpshVi3oj46VTa56A6GY1rA55XmpEzy2L5wH4reCGzxShyhh1n",
  "key30": "5eQFFCXf8q2zmYGfLMx5KqkYThKzKpYK13E5pyS3oFoqy4bR4o65qPvJ3yVxQWvRqfoAFiTsrfDEYUSkViPGeQpQ",
  "key31": "4jSgXkXKk693bBhGoQ9FaR3woz5vRoJVyhH3UTCesnsp2Q2JWCePHvHAVbRobXxgNiyB3n1P7bucc7ZcDWwLtNKG",
  "key32": "41RhG9UANdAX1zFxhACFbwZR6wgscCRJKN5rfkc4gqjPz6j2Ev7Vt32wjLaqSb1aqdxHbaForcRYnD1Cdb9od9Qe",
  "key33": "uAgPEXFjbkBKfhHaXudu7AHyohr4xy9zc2uBk1TB2ex9U5mySJjvtQ6wiaMBPsCUu5mvAGFGzfxfmnFxjPLCaTf",
  "key34": "3r7eXwdT1MEjzRYcHcCj7MDc2SX67bVNA4Ek1yFVH8nGarXUZyszaaq28jk6TFnk6mTay1JBvLHJ1xitfxpuFjjn",
  "key35": "2ikTPkd86RQgMRsvLzeTZCrsxEQ41CfUxvpcUZxUiWjBKJY7eok27j2vqHSpd85gKVBq8FBUJYTT5AqJUR3p2u2b",
  "key36": "KmgVVQnb6czwKEXCgywqnaD7pNHWdRnAnvcyi2uFn9z6h7XhknRThrUknMrL5QEDYvUz5bXGQMZPM1ZFCDAzgLQ",
  "key37": "3XHSmQvhhDusvrBX3U3XELMQn1Qm5XKEQc8pegmneBpgqqZaUiYHX13XbKSaxQenwyVoZuvLyLJqXG96gzkbAFzX",
  "key38": "4KEAj4AVuDPVXBzkJikFZ88bAf4ooc7TPkjwtegA6erLkz8Cyn5CJHwZ6DYYUSa6S2g85u1hk4HxfvqgYkR2nEM",
  "key39": "3B4ZsE2MQ3godJfixkLPxK1uV14GMriJcqr8NicNyGteSFShNrd4yDruHKHZHrdJRdVuLP1D4ecKNwUu7aseoLdH",
  "key40": "4xFqFoSq1ox2pKD66usSV3E3YyreUGF4paZ8BToqan6K66qTGsYN9tZjqe72u82uXUUvUBsJJqagyA6LyrPnFQ5m",
  "key41": "LzrixZtXGcGM2VYDChQfK5hEpVzAAV6sfSkkFyoxAfG7V9kPGYhkCKhfY4yUyTE1V8axZ6r6QJB7tN6oMxc8oQd",
  "key42": "3Z2rQASixGdiF2mM41rw7s66z5LzC4ZGWgmXUWt1AX6J78qJM84m7wGBRxNiFDVXUs8VcfBKWeavbQSNiarVYiJs",
  "key43": "4YLLjj15TpM4qApbPqJxUT6sVyDvWjnrra5w3uXRFg52k1foyPbMNvP4QHuQEF21VaXoVLHbTG59p2ouXGiNuo2A",
  "key44": "4hMd3qPxBLByGaxRkqBEkueNBWnM1AZ6NGxSjCQunnu1zQ3LNqkSAY4pq3m2uczwi58ssiMdmUceTDzURnf2CWVA",
  "key45": "43ALaKqQAe8swUoReaiHzzAcGRudisVsZGqQFYeros4gxKEQZdFm7itfx6Z74jnTC4JEyhsmPvteLtpTUTfVMLS3",
  "key46": "5Hd4Ljj4J2RaxnmFhHimuXrKhsmVGkhNMR6hoN72GQqL4PS7fysjei9eVx5avzPEFa8DTyFJ6KzUuQa8ZsW7SNWd"
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
