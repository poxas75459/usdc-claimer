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
    "RQ6BhRZaZGe6zQb37d5w9rtdx8xLvcJsEiWANDde9NNnv7vtzmMYtCvGHYJCKW5NJmn8eHK813MmE6WRqtjU7kw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgJgxUHvi3q4JnomYJGThcpkhs6meyMw9RqGGJmSAc3KQmVTA2BVjNbvbdcs4245LUavdaVidLB8wXR8w6Js8L6",
  "key1": "dbYN56i5BMKxwvH7GbFrMucofgegwBJCiSRjeCq5UJh4uJjBhJVFsr7J7tXn8nNdoJZ5pqvHcxRNynjLCMCrzKe",
  "key2": "4XNi5h5U9tGcRPhXVk81k3rcb4QtoLojDQU6e1hAfGfJczMNG3FAjSviGnTnBqCnGX68HNzf1QudbwCZd9ccRTmE",
  "key3": "wujGk5tGQydqY4vWSLgzxRoneNEuJFmzUnWDMPPtWB6tzB6KJDRR3MgibRTTLP4GpLfPnUDsPAygj9P2WS2jn6W",
  "key4": "4TCqhF5nNwsXcCYyeLHNEEL35T8bfSSc6LpMrUjasYYkpkqCisDeRNK38vqM6GYGVbpTPVFvV6X7MiWXGWd7NfBa",
  "key5": "2svFUXHG8fvSXezoMRFWbAnoPkidodtbP79dbWsC8CrKpgBGKRwtAGDZ49H12wXYrbPThoyjy19Ham711a4KfMNR",
  "key6": "2rhuwwyUdiJZrM4jpHqmT1z7Di9YhEuTk1rzRDnhNk5z6zaiscsEK5HZaCv4yg8y1XkWzouLLWYLejeDe3XjBjMT",
  "key7": "22QRymbTPMQpGdDHvSLzyNS55Tbuxs9JHbjFrg42H6XXZz63TD2QJhbchmkYv97CutnZ7gZp7uKCrTfcduZotd4e",
  "key8": "3a35kMnAiqMK2aTvzXHknEWip5FtAwUj2iudHoxwBhZAP2XNwV9kb6CP72VkNVB3tyjUMPcmmGjXVWNbifkjdCYZ",
  "key9": "2ZaDthwTmNbYGcyqUss9fQ6oLAfncZYCSJyJnT87gsR8Yj6eHmn91cq6PuT42UjQmtrddM7QQcamPX27BnZcHbXr",
  "key10": "2o35XTec6PXbGM9tCUTXM1UQiPFbFUUnL4VkUrmf9qGcbh5GEcqk8H2FFQdgK8ENbu442FiWSKsAoEr3GyHT7U9V",
  "key11": "3McqGSYHpvxmgVBSsPrvbVvFHyAqm7E7M8Y6ai9u45bn8Tfrd1y9hwwckNDFNjJ3Jus4susZWTG6mfBNwV1CFwby",
  "key12": "2FpVya9edw5xV3WCpKjMYzsdHkcfoGRMq4Bb1oZN3sTQZ4SovrZTpjgxG4nbqyPuq6sUtZDHE1GYwFM7VDGfBfHh",
  "key13": "4SsoiLENqtxvFD9GYHhYhFzvLwrjFGYmkXVB43JVth4jGRsukvLvefaFk6pFSSndzwae76RiGoz4ogZdBytNAbxM",
  "key14": "388uw6qQwbsnPbm8CNWDQcTuy41AyZcnmKpryuQDWaXWgBbuuqQmkTfieHc9whPMSTu4vDDzTjPigrdT8FHtinzF",
  "key15": "4fCnK7oDtD7vq3BqK9aFTAdykbtZZGLEk2NENY55XNA5tXwMHd2YDqFnf1cDsDnGFcJn4vebhhTkxtp2UMp8rcu4",
  "key16": "4z3X7fuL8vX5XR7iD1EsWCHHHmtDDs4MEqw9Y7LLNu7x4XtUYtduws3rs7QwTczuX27Zq7F63ZT3ahsq97jU9z2G",
  "key17": "4EDnnNN2fD5ZPuRRz41wcFgFoGWRginRfeQ5A86BhEMj9cTUhPz8RX8qYTZzrQ7VHiBigGv53Jy1ZH1WACx4AAUn",
  "key18": "5WonhzfBq1AtcJKtevdR2ZCPt6ZhX2bKLFZokxMsUJmv3z5kDRvEriQvdGY2wLyDjyYpuuXNxSM4P2xPtFRj97TU",
  "key19": "2WoepYJF5NCPfPYUhMyB6rcej5zpZCn8cqF7kG3y8ZPDtvPjsFzqnMmXsPckR7Ryyphv2dY7kAj2ZeBzv4JNkWwf",
  "key20": "5FjU8v8y7VxpHFyT5gGUrig8TtF618y6G5aHaXubihKpTaSNF4d2rPVVDVCLCTDzPd54VSf4TtbxPh7kL2fQMmzq",
  "key21": "4nSKR9LdMBQD4vRGY18QUmYjHS1Ww89sVmFWDvGtiaeWKWrxqznEpppP7paXCF3K2yeNbpcc7WrCBn5T15iLumWS",
  "key22": "2yoFDg36S2vdTd8jErfHnknNfZZMYtjxNPie3WoKLX8vShTZPRuz2RY5jNkTucBWnHUZHiMYj2DmrVPbPjkWQWA1",
  "key23": "5ePhyTkGxnqG7L6y5oLh9JnFUxgamMxCxE27W83R5J5KAxbX4duD4vFQEkiTxAh2txqTrmvtrPm6ZEYmkXxnQtRr",
  "key24": "2WqLtvr1XMa4eZqXYAN1jMBKunqNvGjr8FksapqjNedio6Lq9mbPuvSSfoAe1nrdrAZwNm9sH1aKjt6ZqgMcwgrS",
  "key25": "2TiUVQDiSzQWsFac8VFCQBV3gpoaymn2Sp6TAHStMNYC11xmxW8BPH4DmvuFxMn5mMVyixNYkGLMPv6d3PvwfT7V",
  "key26": "5vtS49wxnWb5GrJUdY9z8udhbMHGRbdWPiPJD7fDjZ2iCysQUzz6dZFR9f64nENxXbCMBCjqceZKaUu6EHdd2ouE",
  "key27": "5Q1Kiyj1KPsqvWUWYvVo2GskGvdxCuwceg6rzTLuCwwMy17ZYHSS1j5j4d2gjLL2LLoYmdKAtdpb1taweN12GXrP"
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
