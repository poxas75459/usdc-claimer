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
    "KrTc54BXkLPiggQ2tivEDuv7j5viABgjDr8isXtoqVqEKV7V83ELeagKkVnod4KCYF8gqvucyv3ef5p1VSa4RtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JNPrnc5LQJbPbbo4EaCuQLCPAidU7AY2wWthydCpXQP8jFatrRW8ofY7KxnEU848LiR1RgirzW3gbia6BFQzHVQ",
  "key1": "4rxw4ZLSABAWW13WQTtRbgPGs9DFNCMxMudNKWSEKPaZjZAL7mwwUbKspTV6Tmc4JdnN9qBGvabARwHTjaMd2q3K",
  "key2": "47kkwJNcENT3u4qzGk7p1uT7EuUrM5f5y3QycfcfWKRk6vDGAUFhULq55uGNmZmC4kGawjKKYzB8vxUUvQa9hfuc",
  "key3": "3GGouB8sLGm8fjArRq2oj2NgKWjfFXSeDhM4kY8wzB6iJWDarLGQBQetSY6bebLuLpsMXRHwevXsgHJ6qzhgPLw4",
  "key4": "63USR5hag7tqoUc6MvbYaT45LW3JVywQm5Hqey4mnT8yMRNwfJ7NNoauPRaiSarVmvRYnAS2pWsHuTRjo65nRthx",
  "key5": "5d4ainddgi5xFE2SGByPKZdrVi6rkiJD5qxxiZskwpZzzDtYGqxZUrWG28RnQ6dXeXJbhBFjXsTwCg4ZM7AtnGqq",
  "key6": "5viiQ5WUGbnrXgNuMdghMfvaa2jHeHLX9fnVTFqAqh8QyjLAzF1b5rwdmTjKBTJRUYPWVnbjQAcaVnMczb9YvEmh",
  "key7": "3kQqFN5cXtgfXRCNe6zLZHS9daYARfNgAWymhjxBdKHynZVcKRKhfwRsZjGNgo1EEQZgRTFfabYTk9RWeACrNxPi",
  "key8": "22u5dS9Dye7UDsUfFjh4Nt8PnsUqqmnQpKdSmprDQ9CSPsxSH7ekkgG4AjFughNXkaBkcBcmooZcBVPh6YnoVYLz",
  "key9": "5qjcWdwgV6WhNRXdLQbdpZPAi4C39hYAhTxgmU9ZWg13Lc1UHybakGhbuAXvzCoHNHVcqSyHFXnw5MFfrMKyXmeE",
  "key10": "3vgwdMwiBv5oxet1Q1fptP7UDRyRJYUCQA3z3nJXP2XW6y6xbKnuaQ3RB9iBKxFrFNdovzsu6iAHvk3GuQ5wPwsv",
  "key11": "4k9n8J3yoCHpApcGAYBwKLtcQp4KiPPX77S64r7dbdVpz7dDtSUNQ31uncFMfnfb8GPr2Q21MHpK2tYprYMXEAzE",
  "key12": "59x9D7uKRCfnBWCUBu4TQV1rjCSVeYh874DCuE9idkeucXmDsGJkRG7Ft7ynVFf2FMHSjnVAJ4C2ZYVrX99zgUNJ",
  "key13": "38A6in7np3orw8qXFJ2o9UuhmTqnqE8cfK2LiEkK9wexPdUzcqYMripqN7tmsyrz4NYSwCyu6wrJvfCa4zyAAayE",
  "key14": "4P9DzZ7iiRmHKfcRT7H82x5mKE6jCAU4uggb1HH3HUYngAVdAaELMSCxYkWV9vigGwPTdYMoPvEQiSJtpLFKNHz8",
  "key15": "CTCMrLi1LiuaMkVYAXmWjohYeKMaYm7HaTVAvqTjHZwsjo47bKf4kiAAfFfbJeakkBUn27w9Cu1Cuvu86wPq5EB",
  "key16": "3h2gwwSygRb3GaxJw4VRXyEwTvKe422QdYRjaf6czDSh5raCf6SXKjseLWqKNQGYexqXn5tP5QtLyWorbMasyybQ",
  "key17": "zCDVuzDKveByuXoyfAqBWjww5b1V35utwZu592TCzq1TdYdZZn1aT2crE5rt9MhaB1MUuCd9LvJnqoPhZvTio4h",
  "key18": "4ZxKuTeggGJzsRDYXnw2CuLmgHkfrkgRWkFBu33pKngUYrLBSQNHSR1BwwYZX7g9UZZwS2TPszp4THS2dLKb3zaL",
  "key19": "5vXuLHT2R1jVwsMPeZZKky8TFJVJ3AtaU4aXH8Q2JKQeSty5e928znoMoYZ7wLLMWsuQ5a6EauYC1sHMRtSfBHTJ",
  "key20": "47sATEh2kT7ZMKsTcHizqqv2H2TrqEbsqqPFW7LJMitTPKcKEKueZxomat5cidwP8XSAY5n4j5ozKR8ZfuLK8UwL",
  "key21": "4sWz7bWD5E4w9UrQ5TBGbKHGYh6vcWsaKwCy35n9M99nbZ4fRqWhCWFiao8iJG6e5umjN7Vi5iavGFNh5WgBt9hn",
  "key22": "2nEJte4t1ZRwJE4JrKg9ufc3Dmb98enxwzfsosmdLVuwpLZryNo9FvmQ8722AHDXg3mXfL5EZvwrmjyyg97xUKB8",
  "key23": "3VqLoJ9ai8EZJjiDgwrFjbUtNnfC9hUhN61gWTDU3oK95vbkBJVcdcrkmYFU8UFvbF35o4dFCVy8HE41mUV513it",
  "key24": "3S9z2WYVmedKAgfZwAdc2JUykYanbUb2CWWc8AMHCCZoammWenBBY9vh5D6DiuRroSNRUiVBCxko4roNTxPdR4Xv",
  "key25": "2yNVAgaxbd2CA6o5fc6vXduV614iMhW8o56mFq6NspbWMy7iqstLJQazERevRXz1UwGwVQ8HBCVaEy8pHZgHhjHU",
  "key26": "65mSSzZgKqPC1FThYJkHctUpCzkP7SpFPoEuaC9GWmDLvS5CKgta5EUsgaxGB24jTFyBuzZiJhY4e2ZFJcuY5HZJ",
  "key27": "3bfV4QpxYSqWrvCcPYSkFEMqbSfLsm6RT4p624kgznDHQrvCnPMzQccWfq3dHRijmfR1R1D7wmRDDRKHb5xstmbD",
  "key28": "2z5KiFYCUsUB4CLyvhm5qz4wvig8BkzR4m2BHWApoXeTzikYXgFmdMenDcnCcMoieQdsGLaFpQkEiEL7KsWE6pmL",
  "key29": "2srgoGCioHF2C7iZUvkEMo6Ju6JxJTBaCSgyMKwSZeJvaFo3R5RVtPzhinmRVGmzgLBzc7nc9EarzXWQhx2pPosh",
  "key30": "2xeKWWU6Gevfnvyv6WuPhQ5qH99D5tMmU4kEuYCuiH5zY4v3ogGEoqPu66n882NYHFJMUgCpq6izNHbRDD4JiASD",
  "key31": "645A4VJpmHVfMTu3UvFiHw5jFcKPTjuJfP4Zk4edZ6d2HPoE8qZsbiuQ4v7vTDSHMUndP3rHD8prmbQgUwysnANL",
  "key32": "2s96WGh1jdQzwX4z8kJShp9pihSKbwxWzFBmNP82SsrtZ8th1DEGcyGAP3JkzkoKuLNHJMpaW4fbefComnW64spV",
  "key33": "2quV5TPS46NSHWZL94RsScqMr8XLxBf6b5bmxBSUM6UyghTVAfVKHcXHGMBo1dDRTUsDH4vfqcrTYURD5qDqjdje",
  "key34": "3RGtS2wA9gqH6GgDJYHrEg7NrQNXXcq34ASHPFS9LQ9C2CDBnPFCnaozS3Hf7RwZzSFWbH2XKhGRZZf29ErikMkA",
  "key35": "2AgcobrbVTeTnEPLTA9azpiQoSbKULpQhZEidojH771kBnW4A6U7xCYts2FaAKisftMByeqt4pr5zvFQCQ9gCG7L",
  "key36": "45JtiEyi5yKTk4xQbHeBfd7SPdCAm5n7JL5S8VX3JaNiDJyU6jeer32G4UVPW5b869xjdeEWjPvxmtVj8m4sjqyP",
  "key37": "1eL8EUR6QKJYBa6SQFZPGqioVcWWp3EHApzwFNeo2jyM8UZo4LoUhDYFsJt98NTh9i8y6V6XmYjhBnMaPuvdYjR",
  "key38": "2VpBieRQhgVM3HTB9rdfHVV2RUunT3FMdUpxdCqBgoJKq6aGjeUyjGAPeg6Wb3ypyF5J1AjLDH7R1vdFb6i9mE4Y",
  "key39": "2MQZKrXkpf8Ny14NvYLm7CN6RsA4MApqP1UHmbd1Cb66mzNqepf3ajpXfReq1yjtm7mQquYyc5jDRUH3pNEyjnjJ"
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
