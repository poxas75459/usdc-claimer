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
    "JyCNvfJpyeHsfUYzkZF1xPMJF3Zwr1eRyaBBNDmwYgeVpstPFvmGXr1MC9oSgi8fqhoCBAdx7RhweBZ3QaaXVpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pnx7gyVeL3EWSai2AoC1yvyrR4DKX3ZdukZrph1jH3UejgLix9RX49oZmSjn9GEZGneGQM4dU8yoC1X4tEbviKF",
  "key1": "4uLyUfgwQZ8ndkZyDn6GyaigoHEjqLxAy1KP54RzQaYSwRHNZBgenWt2it9ZRLxGHXUUrBrqZLPCZpxBwgfXUDNc",
  "key2": "2dn1zUTZgCXZxyCVjr8mGka7BXr7zmdjoetWQhqVKPHoB8fRdmxaQGCwGp8emiJGrok6DTAiEDUhQkuMysjHHWgF",
  "key3": "5JHDJwDyFCc6ZxuTfDu9TDFxJ3hkMPiJKN6JHbSUdR6oWPnxNk8PQVWdgtHbLbLK9Xe233ZGsNx965chaGLWnAjF",
  "key4": "oLsE6RwmpmXzqXVoMgVjeuxWN34fxGe1mvfmUcVxddcNNQiEHAufiBqJhrGadA36TaWVbLodFw4CNUUVK3Z7Qwh",
  "key5": "3UfN4Ssg9TAz3L3TwFX8ERyEpuhfFFHg4CEcMhLh2jxBivacJ9E6wrHieUrxhK9vZK1WAZbc4g58F3Adxut4kwX9",
  "key6": "4B1FnaxTDc6q2s14SryV1AisR1HwM9Nq7mg62jZ4vqmReHXjsZFU17bEuquioN7qwQaDYjahhjDE9M1jNwTvmpDo",
  "key7": "QCjwkn8aDtm8wJToFFcwZJvE5Jcq9a4KrzhsEgzJpnLUS3xSebJg3UHSZPGHEag5BaJ6zDyeJr1BQwnmrS7mg35",
  "key8": "433QqqFkzNdHMSVT7tKxNnBwru5Lk1Qo4G89kaNRG7Gr9nQamDYupHzn1TvP7Ut9LcEUmRXnQMKyf2fqG9mwWKx",
  "key9": "qZBrqvr1YHBdHUj7dhyArXJzh1VFjSEfJMEaKtkTLs22iJXot9gNSwtcQoULZLFzPoQxgMPdEEcAYUdj1pucUm3",
  "key10": "HLRE8vC3QUPKU2s4KnCdo82x9Rrf3vxM9qmQxcGQf6cqtjxvBcqDDzkua2AwbCcbt2j9uFfewB6AGVwkpurwXcq",
  "key11": "4RwRfX1nvBDns1hX3KR3u7X8HEZdubJxiLxGDNnkjgw81THEyGogo1L51SMPmhM5BmZPREsvWFgKxW7i5E5EsYsn",
  "key12": "3MFffqiYGL97us9M42zJU7eY8gWPgRktcHDK2DbLFwACSYvEzZE2sLU8yG6u6oXRDNXmMvVZWJRRr1U5NRfqBBDM",
  "key13": "5DZmmJ4RdK8uThCCXZsXWq4bptNegEyqx7A28azjy8iUebz3xuXN1meyJqpoajHdcFnHchNL2PYEQpBNgvv2W5fW",
  "key14": "4Gne7gkDy1HGSxqPk2tRyh7CHTJUyaLQRPH18ShAHQSy8YbZ2QhpY3SCzGdee3757pd9joWexUjtHcJ2UcPzxWJA",
  "key15": "58s6vkEv3TKxgankn9wpioSn4QTHqQdFVtw8FvjiQiFemg4QVjyn3Zou6YBbLaJy6N9sjDdJtpwkeTpABEoFcNuV",
  "key16": "tKWVzNEUeZF7ZBxhPX2pBp6VLLCUEtKBUi476YASUkjwdViqc4FyaCdaWudf57uR2m7NCKLh7SRrddAz4wEvgyX",
  "key17": "MKfsh6R6bfp7SKL3MPPdS2vWdEDo6HGUJcJzXW6N6F1aHbYWaH8CkQXxnxy8HSSFF1MatKheaN5nZWbNkt8iTrW",
  "key18": "3T8UXqHA3iTxGHeRr8hkS2Hpmuh6qVAGjFH96WfFtPsNbRs7LVWmam9Hv2xCJNEtwTf1nHJ44NAF1fhrtH17pBA3",
  "key19": "p93HtnaGSGF43865JNMCx7ai7r2sVoWG7FTVKqzmrB3ABc99vYHXpzB6J9kCW4JWUY5ZibyW49zuHwH8hvU78dk",
  "key20": "3WeFwnp6CYb2CJfdkYuu7nj2aBiFi6UbMmxK3wbirbTwVrxPUkCEPcPcBNHKNLkPHLEdpMnVQPWDeBAFUykfdg34",
  "key21": "2hyvybG9c2qNe9588E2aK7u3VP1xnWDjF8nrMdWiStBKuexKhDw9hA2gE2sqf4iD87jJmgCAah2CAGCTRC1XcGjv",
  "key22": "3H7UHVPbKaS6H3adHpfzweKHru5Y3wCycnnmFWBBz6dKo7Sz5KVsyvJyNgaBKEsnnJGfJG24X7fmayBkrUoNh2gM",
  "key23": "2Cnh16RuhJWs7AVpxfjzZJQr1PjeN1wqusUrKMaQPDeKfnGqZ4arejzEi244BTAieKnZzYdgtx1DF4vRmkBBMY6r",
  "key24": "3ta3cP37qo3G53hPSBqeCSqoRMZxMFZTvX5ydxweJubpqX8CQgYFzwjK5xhAtrDqBuXqhwGSyi4WTpY71p7NhGex",
  "key25": "5aJLqD9NFYg1jBkeghDm6aQy2GHbkmvYtKmGcmhFxJbcLAmMX5odcP7wGcB7tTUyKwZeAbXBhdzAS8Y3RS11WU2h",
  "key26": "3SVUsEmggRvKDJmMAAnimRfUpRDJnCBabhGPjJPTE7LjG75zSprMZmRBPSVh1Zi8U4o8uhi6fTSZ6SkUAUNVU33T",
  "key27": "2qmazQJtgbZ2GjPDAu4DJu7dUhiU3iLYB4oU1DUbY3keQRhT4aPtq1wJdP2jqASFCabtj7moWghpMsSSt5jyru93",
  "key28": "3nEtnKZiUec86ReSniUp4VsvtnNRtmXzQBM6QAgkCTwx4shv1bRWjumqJVKvJJr9W8J5WiYTDfsz8sPMSa8dbUCL",
  "key29": "4vg1rPcqYuVckuFfXkptK6s31DpWcw7NGBhEqAzRpG5GpFvcpkKZYifNnw1HYioHS3kT8DtLY9fRpoSV9nepwFNX",
  "key30": "3S1bWAm75GozMCV4c494qQ9v6TSFWSz1u8EgtM78FjWY1AeZEjXYMFcdk2b9DLop14kKNgSYziGxEfejgNLBhCnH",
  "key31": "5HJVPDg5VJZEucvbWb8aHjGvLWX3JkksmTzrN2RupCVYgXNJyy9pYGmk4RkbxSFkrmLvmYq6UitEAKmhw5sDyrDp",
  "key32": "4Hd5JPDsghCrfsY7kLyeTUuFspqaNaEtNrEDRrEMs94uChZAE6HuXTTxMFGaZfC7cKyF69WmEiqdbhA6FKsDYjBW",
  "key33": "38rwgfoNNmeLnN6jQHHmcptg8AZ3iAAPRW5b4sEEWgT8QHC3M5Tf9MiutSDKCa8Vf1B9Wp3Wb3TcPCsSQ1rdEAgy",
  "key34": "4oHdAHVoZUodEJc3gZ5P4TjEF9oiPugGV1ZwLW2vQTLn38A5hpN2Nvd4vnfezK4TPVeC65qhppB8zptKSfEL3RxH",
  "key35": "wieVZDuJhzrLBkWpDhAA1RG2dWhv6Af5SHB2Fadyq343UWhqVKsfxfpc9MJCqac2xw23zY3b6aGHPsgjYYWbJWP",
  "key36": "sFU2BmAvJv8v5fEDph3wccSUgyJ5vUsmZ6J2QDwzYr4hZsn7CiQbkwhppzqtEvpgQQ8XPw26C78pyB4tBaHhXav",
  "key37": "pwowhW9RKXi7qEmd4c2WtPATkjd36kPT1DQ5qUouJwGtYELLWSWfPbEftM6x8VXcPU3D7zaUofPzXEuiEiQQtzq",
  "key38": "3DPFV49oHwNiejzZs6pCtSiMV6m5he1Wr7pwduhVSBE3pM6JuBgsvpm4JTNic2jxvKe6kiAokg81nQBWjs3tKmRk",
  "key39": "3VK7R3xFK5vQBGJyDvUoJgeQTx81UT95FmwtMUC6PYnSzB9qeKLvMuy5cpB7BDDFUyyFaJKbQvWKerBEB2NJXsnM",
  "key40": "2FxYnUazHoVHvd7H1KEhst9DPgq7hgw1n3WqxiaN8yor9s2HxYhHw1wcnekqT21wE2bR6AEHYmCitCPX2tZpMM4r",
  "key41": "3sZaNrfWdkS4QcYqpNXErDMnzRBuTZKV7dzXgoDvxEMMTiMxxuzC1RmBGphsMvTFdvhCXmTWVonKruaEWrG7rTQb",
  "key42": "2zD4FTFyut6rK9C2uq9MJ9cKL1brazfBJLVFEE2qBe5DJbmdyGUSyGZ6g6GLbvS95geMWUH8CLMZMiLGEG4gq6W8",
  "key43": "5VhF9ov1SpaUtaMY2xLdcgiSjt8qhgy5Xhge5BrZzycLS3fFaHKRNRuLxjf8pxsvRWZqMhnr3QJTWNUR8w5TcUwe"
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
