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
    "45CGmqLpJQomqcdKAnemcLSEuh1YwCKKEAtmjwZT8dvxz9GZb56BD6vVXx2Qm2TAHtd2JvasK5a2bRcajt4oqn8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qfaCEEczA6mvXVGhVCeXnHWtR5Z6CCEfESPSqx6tUenFGJKgUSL42xyhSpMfHyCmuKpNgBb67CQtHB8K6CHfLT7",
  "key1": "K6465jxGUTNxRKjotT4CfNqSkCoVr6fozob4jBHDTboMF1dUrkU7DE952e3qhmxy7rNFFRftgnUt84UPvQ6VcKQ",
  "key2": "2psSLiTd91apBGyrA8qk4Xui6QGoTTeRPPrSemkU3XwqvYMnAftQ5WhfFttb1E4vyo5BXRiGJMgVMVP4CPKc51Fp",
  "key3": "zyiYkYSpKn7XgeytGV6kzrvWMURaPnPhswL8bbwnJS3XpHx5QdY1SHGMCvCJovaouvQeAD2hjRwrggxdZ6EcQr4",
  "key4": "45MYGGpXVaQF7CmmQfKmfhBmcKexYg1ANWsEVtJ6N8WV1Ve5mbtYhbPBkfoLhf7eYbPExzUmmRwSZNfF3axxf3tu",
  "key5": "3JsyB8UCVrQakMVQXocjgCCRXEHz7tLuarQqCc68DYB1oUabvrFVUCBgjb3D5Fn6NG7oFBzUu9CBDd9SdTBaEzQy",
  "key6": "XMZHRGhYPYDTfXaP49QnbzpX9JgtFr9wuqzx8f1rWGRbnVj6REptPq9zr74ELqCz44UZjRkc3wkzvnewZe1Duon",
  "key7": "2SfN9nLNKEpNUAV1mueojpHwWZaejwbY1VKW2jSLDZ2oXCmRY6FyabyNE7qhUg1PQd7HUzpxrx64G6t9KAAnmyHa",
  "key8": "5DhbnBLPXuo99iB3Xf8uogQauccavAbqs6hpE71Zx2ksNmZDzTyMRdRHj4gLkUBqx3rRNkSAEHB5pTTBzW5iox6z",
  "key9": "2CwqvkcNhEjrZNXekWH1ZE4nePSfV1L4sARSN9NLCPP7sHfQaAn5YSz9V2CcJgwNBNh5VDwwP4hJbLKgc3AyxXia",
  "key10": "4UTZ5k55so7yFxrwE5X1eS4HZi4EVByqBz9ZnyxwoJxdSUSc2jz8XTuBkzHqBEBWZHaduRRMhGZjXniRomtyrn4E",
  "key11": "3NfDDcKv3i2zGECjje6pYQsfNrJNBHAK3LC727mkJYNzJikgmwHxj91UoBSzKyYpXSJwzD8sY61BufTyGECjGrMg",
  "key12": "5oP9S66fhAFe74TFUC9hmH6C2Wa6SmWg8p45y9B8Kxk4FkRbBH1zJJ1EZ18wbmqw1jMpMm9V5egeLMCadaNSqQ4y",
  "key13": "2weUKB2WqHfJDk96TB9LY5yAwuNbDGvvj7cUippuDvheRoMb3D9BsnQsVUqP8YBjVwzTVQNSBZNRrsc7j6QvbJQo",
  "key14": "9w1fa8Qvbv7JUC7iN3rofVWHjUW5VQo25MwcmKRF1UoQG5vmZooL6zz6SkZVEV2Z6yLjkWTf5BPk76JuAj61kNr",
  "key15": "4yhBP8EfZm1N4p8QZ9YFK39rycKXDtCPwkrv7JyU3aVi1B3uQaPKfPMwvwzinut7pj9ZQStrfPftUDv3DGS3QzXo",
  "key16": "TsF5C6ksRRjqmfkk5K9ag1soJQiUHGCtELaSdegy9A9h8Wv9gkqaPec4xeikdUVC5Z4pyMRHNMZ75mf16bBzU4F",
  "key17": "2Z1E7MWQLxXB2dcTufjSjVnbQxKcj478exWNyiSphVvr9ccbMdWiEjJBrPo5ZgBARvqqtLnXTXQ2YBMF4RHBd54w",
  "key18": "QcfmeFt5GSz7xop8GbVCHvQjh6BRoqDxFPwCUMsov6CktgseUTB1pzsBGD3YCcfP8bY42WgqiyHnWKRNLVzS3Fq",
  "key19": "4HjLsaUAqS8QMg3j8JA5Ai2Qd6QJBUtP3f3P3T8MX8228VZmZxkqEAaHpFVkPndpdhsrNvfUpCCvrVZefz4jnEzs",
  "key20": "4zKy8GuZdMrZwi2hLEZHeRMKmRT4uNPc3x88EQ5kvd6fVqMSL3QLiwd1AHDZobaF5iCVSUMis8dybQmMQivyZCJ6",
  "key21": "4dM2zz7UgbSNpAv6tSbkunnPGMU4TaSwdGZywnf88uMQax3oq2W98a87eRFBXSyPo6EvyAS1VZDiZNdkQSmBXdCn",
  "key22": "2GQYF29zruAokywcV6PNrf8TUL8iQV16YoLNPFiawrbcsB51mgTxED9bqybgQcFb9pW6dvZQSYQSfkfKEZN8Qqpq",
  "key23": "278NFtbFLtgPHGSj2Hmp79Xzz1N3Rd4o2NLdsWQHP466D4c7GwsBiEPG93TQqsTFACcc9ZWnqVHm3YVKhvZKG7GQ",
  "key24": "3SMpEbFsfjPbLqeggPR7zD87pjWBs7Mhb8JKhCDkmQcnGj3uMsaqJcvrqFJbUgh4uwiRdHsCf7qV3ZBoBAv4GVkn",
  "key25": "JDpE6bjfy9dXdcVKeffHNQoCK6syxhvUmzjHsa19fJ4sMiAbiZeG62PLBKKAiRDUefCgbK1GdnW825KA7xNXobp",
  "key26": "4u9BdXRiFFnRNd1m53oZZAjUZHWw1YkzZSFxMHtBB8FGN6RqCFQ37mYcs33uEVZBAqSMEcxMvx71AbzevhEQM94S",
  "key27": "4hLHGazBxbjrLy29P8TJLDbhZjzYibZ1GwMbF89riS3qa5Yo3JHX7c9eZg54zuv9TddVq9YMwrRyxxRdMTayzzXC",
  "key28": "3ReygyR74nKUBLQ1xuWKCKMvAsfTZ1M15vJRgK1dC52udgFkzj7ZNuziPPPPQkbor5GpezHPQbH5TceFXpi5B9wh",
  "key29": "4RtE3acLES1Joy7622SFoKPQWUfjG9AiNjV7LHkHqWdF6MpoRCQKSsJbiAo65esd3HAJwvTCwCzE1e7QuZzzAtud",
  "key30": "4fVPRZY9FduvqnnJZKMPtBmNabjT4oxwkeo2naG8Gxv7FtTLjjsE2PFpWTXhEH2Fb1ChPkk7eqGTbtdV7mHAvcBc",
  "key31": "5ws2Kx1qM31L6dimBK9Q7m1hfCDnHbggkgdPLWH1LAGiEVejwq7K3DjaMgTQfKyetseZnXvdwzEAzCLgtgeBk1R3",
  "key32": "2Krvw2QKDrBvuzG6J2WxJ44KPqVBogMbTQ3jVC74QXFqaWJuRaMkgL5mXadDreGGk7C2SYmc8aPGnchMLEEZ7WeY",
  "key33": "4DcZZJkrszJ96cPJ95fJBT8XibUWx8vkaWMGfdTs7WDJ7jyn7nbnG9hMDKT3iDXLzAsCMyVUcraxAZVZ1e7TRtvY",
  "key34": "5JV67aZVJsXczJMqB8APQ6tnQRn7KERPCMKkppvrJn9a2xVtPcNAyjLW74Z2p4cfjnVaghBVtJiiQbSoR5hVDJVz",
  "key35": "29g5ZhE7r22H4P5PuvyufsXCgeDW45mcPJ9Whwd9hecJL9caDWJRa8Xando51HQfjwTzKni83My9BNMbwQmnFujH",
  "key36": "2cLiDcYQfnX2FAJHu5HwnnFNeaTALJzEHWoKUiBp9vQStjjNAr8jr629aL8wckXJa5WHHjKAZzv6BsBc1SYjY5TB",
  "key37": "5oUAgEuKezQLRtnarK5RVseWvTWSbd4DGWfK4rkotw1XZEciyF68nqrTL6kMpViZSemRHPVoMdoXew72UgV17K6c",
  "key38": "23yieygFkVMmSxVTUEFEqCoMctHTQNprJ56Q5Dq9sUKBjCmPKk729JqezTn4A2HeyXEJ2cRRJd4MSMJPk3a76RMy",
  "key39": "3PqtAM1CtTGd7aSEtbhpgqo7VzC7xik1VoqJdkU4JDCkHuLJ65AJteGkgisW9SboLhDbJ2Kt8NskmCiRPKCe4pGg",
  "key40": "3Lhbgy2scjAxWsWjPyCSBPKfm45nk8uSwh37a5rgtu9qRdamcEBq9jVgCSmGt5XWWRR9DMEL8zvWXDX6u2wwAzpK",
  "key41": "5Zzm3akEw3DQNkFcYM9Hw4LynE7j5zqpSSEyZKXjn9rKi9zzRYUvMsXanWx5Wts45r5GjKXSrfdeg3s8TyhPPMKL",
  "key42": "4YgRyVaZL3Bnw1BR1goTYJhPUwhECrWAjUcpnw4xUEnKGLNMJgEkRjnxjDG4d3xwu7xkCHkaDS5vDqWQqVZL1BNF",
  "key43": "s2omhaEV2PDmzj53crCoFWwMPTYduNmXrk9NVS34dkiiaypjyc7P52mg895TyRQap4QoyxkAT7Y6c21fJYJY8j2",
  "key44": "GvVQksvvQXWWe8zSkKVSeVVeCJVUYkebo9o3jBkhkd1YKvaEV7MWAfuEMxDVaab62gHiaMqgXineJPq5t1DMEtV",
  "key45": "39kFPSH6dEiEsNnnLCDJkry7pJFkmhx9EzJADExHTDSr435KABfKiGkPUmGvrvJMqqwaDzQD1pZ4ADB8yEhoG4QP",
  "key46": "EWa3VFbsXXSkVUTMKJdKShVekT2qqpaDpCAuXDQtnSnPsFCXfHyZrtpv7yvrdoXqoK8m4mDaLMM7vR9wLBKGh14",
  "key47": "5KiyTEsZEmWo5fZLzzwV2qEYzReEgeje2rYXnWWtffP8jUCFV1DQtxduGpHrrFUweC5oipgUbVmY2KSENyFXA8ze",
  "key48": "3j2qaF8TE4VwT6xgpBHYRqyRqYc1dcQuWB8cYVJrfk5vSh2jXh7PCyT3UgVAiTzMgafcuUBaoRHRLcUUMub7q7ji"
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
