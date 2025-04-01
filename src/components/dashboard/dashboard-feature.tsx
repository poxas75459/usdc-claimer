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
    "3J2ThCcSsKPYyL7gFQhGHrmxuV2kqZBUGrZNreWTLKXzt6rELSX7SXjNRLNnRCqEjWKF8WtWTv13iVHamGt6B2AL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7YMZiMegZNPBaekYoHwtDT9SjWPc8Z4BsvuWL3J1tHPn7RPSVUCueVFBYiqMdHrh4z1tXChTQaP98x8rNUmqcQw",
  "key1": "46bBTuSgSK2gJBhXMY8ezkbJxCNcnvjYbbYgeQcTDcbY9XPYVocbRcBPAXTBd4webPSEWRu4R5jGcjQbcy7BNgHh",
  "key2": "Jmd83GP2fEwUEXXV1gHg3oqHDFzjWkwE1KfPFPipSfXYVtCbLLYbTpmYMpK9kGVVCg4wqfunNmDfrtzeVE8pGJv",
  "key3": "21rEJxfNWzrQDpgXBLXwvvzY3HmYFKWxBMxbXqhYf9DEryB6XhAcgavSzqQJhy2LP7Sweqp4wyc5AXgyQbUQet1R",
  "key4": "2PPDThuBWRde7yEj6f98GnvDmRRxHaMhXgiui4GVjvGhiajqybspaVKLwStDE5nmmoRCZnSdyc6aQpsJFxvdsZB5",
  "key5": "41UfG8YhRSShYBf6ohuxQgmv7cVNTSr34Frgq1WubaFbvx6Z3UH54FFGKHEKNgqCY94LZdfk7WisT8j337zSYvRi",
  "key6": "4tLdLKx8mj5Q7UYdUKfLNSnLXfguNqsvKLmSnFTxDm8okXo3V5s1pmDExponNK1c618quaJ5FRAUcHx3gzw8XuVc",
  "key7": "5nmCiFhKKi8tfjpin6bp1SiUtAiQziyz9DVN5GvYm22yF37Y14UDPCdh3kiLypfQSZXHgZB1kCdjwZptiVLjRXAZ",
  "key8": "4PqkXwotMWLUF96Hrfw6vDxErQPwWehnh2vdC1g8odh7r7xi7joHQ2Smsytiy3a1udizAdC34FagYFrhdwzmkvfX",
  "key9": "ukYsmqjokHHbzwa9NhotufLCa3LJMHQZ8vbhWkaXtT6khHjqNjxttw5z2Yws9nj9PSxjQfHm1C83KCJfibkgx1h",
  "key10": "3xmYEvmws2A8DBGRorhmkXH9HsMvQd8uBnZfGdyZBAuURN5j7Jn4DqQsmPNZSf3hWiufUyozknAuE94xActri7dd",
  "key11": "4NTLsnRrUZZA6b9cjtEG1TfQMcQ8PxEKZ2TP3sDVj2BjvQU6LbMWMXPpoWyuNcSeZeCa42HN4XwZJywMShrXppmZ",
  "key12": "2GwiuSSuovL7zFtBhtcRnNhUDg1hmw8W9iEj6u2tZ1zdwPYtoptmVB8tponrWZX2tMe38QAY8wL7bzwsCw7gq2KX",
  "key13": "9cN1FPucp1FgTPogEmZaBgER2pwPDB3QywjgrQ4XrCSLhi43GKzQKPgg8Dv7DKiK4N2S1ntY1Xt3nbFcH8mVq9b",
  "key14": "CwkqyPcsLuvoJCgKNbdvWk6icjXqsuZteWTcnBgjhJZ9YQ8uagvaeTtQMqtja3Cwe7ohhL1gd67UdSz6Tz9jqXk",
  "key15": "bby9PzUMQDtroSii3FbbJnqVToKi3oEgJW5Xe9xcxWVg36XoMMenEUAcYQ1j1NgiA6QZimvJn5q1HXnRuDYj8tr",
  "key16": "HfJGL3puXqiC7BicaXjG1cYA8u41AnzRHJaJxBBEjL5czDiQev6XSwGWDRRXLty3M8Eq8GuvbgxP2owNSEUhouY",
  "key17": "3cjdYEDpTBS4cs1MPFk5oyDxQqkjA2RAbnx8YDa2bhcTUq1oGBFZ4v78FvWAWwCse9f1zfvVTk9so8tt8PMpdd9C",
  "key18": "gVjGXy4swxDq3BqeTvLyyW7bYFec3erJZbf7xnqRDhqZzkC3TJDEahhL2FeAexXZsD5bsFBCv9N2iJ5enskm6JU",
  "key19": "2mF2W9RUPGQd3tvMRApnQiXA1zqQ2FWVDSpvtpNvcmtYo1STUMqNHRRgBgRA7uYxU7qMoe7G55mZP9eWA3nGioFx",
  "key20": "5LCbJfyYR5deEjs4hVv6WVWuxhHWu4uyuU1SX9Gdq79R7Cmdt7QGPCsncfVfUMdCAnqttaboJnAVgWUBkYcAgGPv",
  "key21": "7GhUBX4oiKtmKxzbr1HhtvA26htmU75oXTes1Z89cCjPBWbwaPRaCAKiMvj9695tovuoxEPJCJ82fM9HhYEo5h1",
  "key22": "5dXuAVEftkmmWBQaaicm8YJArEEiwQhkQWHW5gnf2YgSrj5nvaj5WdHkzjqP5zfp4t4az5rJRQ1fxa8opohCJ2Gj",
  "key23": "5Cp7BZZKiDCGRgeWDsEFDxvT2sV9kACkJb948SWgfLE7rM4yun5tQ58nPqMVMQdBSVuGry9JbSBWBZe48QqAYpk6",
  "key24": "4fMscx2TMhmBFEm92wtSPCXAqUdAHQT9U7GhUwatdryfJQo2GJYKkgjBQUUaqXj4uup5ow9v9jVgiLFGCyEypm1D",
  "key25": "37rwgF73VpiYhc5V13yc8zbPoFwGNASKvGTxV1jnPSE9jfBDsytyCMXWxZsuMiYL2iHaWD9Q3LUERS94wRxbHbnA",
  "key26": "2M67yqPS429dysvTYWX3Vz47tEAgWV51dGr9NAemJSDqHQ6AR68chPPy7JB1RozUZZLE27HLfXw4B8TkwLTTHw5B",
  "key27": "2Q8iSkT999Nvt8uYw3aKZLKSrWDLfocRh3TqYbJNTjAWnyg11s6YEr83gdssBUyTP5EgemoK64a74CB3jtio5mWE",
  "key28": "3ehRHh3KiFHAVs1pdkCzEUDvmSL57YewuocTkkhhRYcmyGKZMVgoypHsp3uxKKgUWp8nJduWJLqUTASkAMxo572f",
  "key29": "5x1iDM3Z9Cg3ccJFD4KJYZ7npTNsM4vKyve4ZgnsMwSRCve7gNR3wt7sRnYDYWDNBkvZK1X6xKov6mrEc2rWRvJS",
  "key30": "2CZW9QtbS3xjCAvcDTBSQ8AKaZwKCYqn1Z7kFs1fS3VFQyn3bvyCUab4fc7TJuu7RJg9v3DMs3WDDir3a1qMxXeg",
  "key31": "311guZNCNusGSmbd3gXySKuxL3C8FEQyaidc3BK8t2EKbXT7EJXQ91Ze1PNTZTAxMTGiKE95SfY1AYXrrVe3ZVzR",
  "key32": "4agrCHkDVHLpX5bp2U8m1iNoHZYhXPfU3MeoQA1f2v5s2fJdqab6adFsDQ4xjBFcpSXojeEdMmF4GzTfwfYNrr92",
  "key33": "5w5GjukDuj7SSDqqJnndhgpaaJcvJWjmRDiwaUHie7Bgyn3YrN9rkoFoTkaQHKGrfYMBMBcWycJgVdqiuSNb5Yux",
  "key34": "3jaNNX341sn1scrnueubWamxT3N3pQdQWcqUX3g6w6NMEtZ4nUzNYBY8cNrGqo89Ha5vf7wKUpqUjEXunCCPRkpn",
  "key35": "RFca3W855cqsN6RJwU6hsWAVBwkXBCKquLY8TrGCW9J7jPv625tdGryZjWcREhxr6837jvLawZoQbDpF2aVsUNW",
  "key36": "4ejuYzwWcymxjTCFgD5mXK8KQFLChae19WV4UMXLbqsVtgFsxq2Nmd9FmLujq9k5CYwBwSyKtVcH6QRWeQCEeh6U",
  "key37": "4K6hxKsfZFtFhxug7ubRWmxrBqm1bYeofQwio5gPUzM3QAX1dqrfbpxLuD4zc6Uro5mAe3DgmHuiPYAgaiN1Jp76"
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
