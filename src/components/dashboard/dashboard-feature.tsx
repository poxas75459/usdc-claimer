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
    "64QF33tUi7AoRG4wpFJpauPZU31hLuNUfpkdv67TnyyUGBF1eG71eGe4y5mt7mCt54jhXbqjweVA8Cmcc2uG7XvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AzFAc5qiTi4LVULiKw6EvKdFHdEyMzE5xpuxr6tckyaoZG2tvYbFcdJaFvmg31Yq1Fz9zHGnrivyZGVUxiQjHDQ",
  "key1": "4wEWriUrjUVC7P2T1g92HJSJqUbt6Kwi2wHmrXVGVreNZYj9dJUfPYRVvcknSSgpZJLioLiYim4PGFaf2SBRqtjG",
  "key2": "4mmzqNharVX2HqtUpr8f5riJAQUYSLSMUdT8HMKknNEjHmStxvBsdLEkqxmxfB19xqFUbjzfeK2sHxR8xASgHF6",
  "key3": "5DhjnQVfbztfL5DSZzoxpT87iDHzZgJRxfWpEhvxNxdzNPJJes6FmZgyobpHRaJmc3BuKTAGUsW25FMrsvgYEMe5",
  "key4": "TguGC1uzUZhXcuRxCAnXQa1zP5cNb8YqeD7M3hpkC9FAMfr7QN6WUTKRV28QvKNLNdKBpMqgCuzuuHsoMSYMsiS",
  "key5": "5iTc5B3CBLtCNzAK9SNfCQs26J3uvv8DFxarbiGtSX1HVJBLbvENmUrQQi3XbN2Ah5qaQJmx1dTLknT7kisxWPfX",
  "key6": "4zVDcDakxdMZGjPsZegXEEYLePXAm6JUNfoFXjDNBXJs8r4nXj2aHAZutqb13QZUeAWzxFk9xjv7q11tDM9BDX9h",
  "key7": "2K3xg5Kx6auxgwjDBrr8fKtapiofSBskJXNPBLhJxgeUMd3JxhstDmBno51g6XxNrYvhDzgCrFdaaKfdjK6H3owx",
  "key8": "2uYLATRQqEomJ4vMhyT2NJipTgjpybVcEoTAXXhaLjszXXcm7cLudAwxEKYd1LDqtnQtRqfxEhRwQnBoX5iTGZxr",
  "key9": "3kqSHkvqvpm9MJackVKB129kxPn7BnEFPqDoYyt9UCX7suYZwJFoU13NioZM7MyGXMW2XAXks4gJFWnAzbuD9CUe",
  "key10": "3Xazfeb9APHe4vANhjaV8ztSDbtwAA3UXZDantpy2XPQePMk8RyNiVpSuTxHEKY9uFqAQsAb1Btz4NSgtxoe42nV",
  "key11": "2xBTcTo9XdDrmhFoMgZXHMRTiDtpPYFFgsWkf4Tx1HHKQECrDRQ2JFEUije26amVhsBRJM7Mcp2Q388TRWDpN2Sh",
  "key12": "3jma9XTEwzipfGHgDwvuPvG4MxhRmhx8MS2kFqN8HpbiZipTKZTTnWZHAvRDhtUBvJjdzz9sN2e5PzDQFsRXAwFh",
  "key13": "pKprFuZjmYp7d34aMCadMh77YhTsqzYWf2TGHPqp171NS21QcTAaz8FSsXVQZxon8VrbWrdioJM2NM2RDeoHRzo",
  "key14": "5znhLWCwyA7cvyvxpLdVieE8UkjEEgqay8ojLRBCEqEVtGaRaUe4cHf2Z7rgh1UtMkLj8qH5DVFxDV1gUmRBfJ7e",
  "key15": "3BjRAfL4NK74ggApkF95BHUFq6nb5DvYRWuAeQiL8DNPvLRTJjjyNru6Grnwi6qTnqqtRfRhv93YNtpyLtoTFwiE",
  "key16": "3pEVgZ4uasf8huc2rHSsLoWt7ow31bNx6iJVDyCP8uFDZAV5D64AAEqZY4uUuUcraRGy6UCriEHt78AsyNMXVXh",
  "key17": "45kWBj6PSSsDfsofw4uGutM8xZuCTu1MDY5SQazDEEbnsaXCZz1BUhwejVwZahPGVMMLvRzxKvqM2awK2DUQ1GYq",
  "key18": "2et8PaJWmQAWCgjRYLtB4DwQSUUPPdrtyECaGb7w4WFpxgBum26bXp5dBhYDzMbRaFKUdAYeB3xaXJXZMRdcMt4j",
  "key19": "k1rAiuYV526jGeEw5rF5o3k99TRyfRNC2ufhrRtFndRFAiEDzfBEGPYfXJ7GVRRMgNKWH57dJu22Eyg1xaQWsfP",
  "key20": "2azDoECmyNUheefyKap9YPW5UCacMEDxNK2kRrpweHXMZywsKEUh9trxGZHAZa3iteDSwHhpZPwsqZXFX3E4ha8Q",
  "key21": "Vya4WRCRrxmFobaQPZ6Dk3aE2T98No5PMoXeNAvt7AydotzYG5mhsgweqZqGJicxHcrXEPsm7GmAhagRAi19fZ3",
  "key22": "fQTKhXyY9D5xDxb9RfxyKXAc2gs2QS9qXdFHtaQPMUZrKGE1vqXWCQZZuhbvefZ1eP2pCiiWyHozz9Spr3dBTqA",
  "key23": "2kPVJnVufAkgUgeUNHmaT1kMj6rKPkszcPQLkF2kEHimhGZaMRBAxmtD9dpRJqif4iVe7KNzDdSnBLVVrAmShBbZ",
  "key24": "EG8Q3P6MryNDjJ2b8ifHokP3mdq4DS56cc11R6jDuaFRb4s7jtBkGc86iKDAhEtESAdEAEHk8ggn7ZFGeu6Egfh",
  "key25": "5f74VbS8UspfG2oFnUkRAZukiPEWgdD2rmi2pxTgSnWgkKCXW7cFRCTLPymEXjwzE2f6WN1332kit2peY5yFQ7Kd",
  "key26": "5eVetEbB5T2dMtZcRzMCTc9xy3rxmzrDBsWqg7Kir3YEVjzG5WHVjUcff8qBAzu3iCLoYXup5dtA2xGomC2JkRF",
  "key27": "64AiU3ZcooTJPMwYuh2DL2jY9RY64A986KcFMHaFDgFAMzL6TUw4JRhZbRfEhTSG3i8xKSb73NRo2p6mRh8RCbQg",
  "key28": "YLjT22Mq9rjLugQsW3NkaZjLt71YzYbgBA26PHVvokP3MKZarE32NrPFsZF6d2wpxBa7L9e47ykWBNk5C1KJC94",
  "key29": "46kB1BNzKzpRrNdxx232SxfWR9LLnDfqQmakUjaSaYawMUzDU4DuMLUW1ntzinZFp1iCuACfg5CaJdKEqB9ZjK4n",
  "key30": "2Ly556wdEbixQS6dKAH8kgTYhGMwUugmiJwtKhACgAi5hsKQqaSZ2Wzyw33g3pUHxzSKJxGpvncXDtcWG8emDR1v",
  "key31": "29xDSEUCy8gwuqC3decS5wvGqK1WtB26K3DuTjny5BE9VjkyF3ycBPWeZJr2ejwaxtvndjfGK6CnXy7Bf96KU6NP",
  "key32": "57URAoZfHz6KpqPvLC9tf4d2XAYEh6KbVok8UUsdqRzWEp3fgygVPx79AfQGpcV5qQAk6k6SJSWSnDWMr3WMNFXy",
  "key33": "4zePZPzmDdmsP1ZyEUxMFtKe9iqAK8f29iVb6yJ63sZGxn7cRAXwYqKAWFJXGWFA3YJV9z8vuNUvha8BzcUpacxU",
  "key34": "5a37sw1Hgz55h4v4E4twofP4ESH7RxFvwL6XR3AXPVWyqmMZaMXUfGfpcG2VEV8WNJbhyg4Y8fbCkFVnxSEPJe3T",
  "key35": "5D1c9qERX5ndU6snFinAP2Q8LW2h2yX1aJozZYT5Jof4Ds63TX9MWZ8JDNqpvRQeYBGYiJnKJzyBGwNbHpzGeY8K",
  "key36": "52nBv7FkHP7wUb2s4fZVbENjYC8MRKBig223F2V4rXKWvaLLwC9zcv8gudZcDHSh39hgExySQ62xVQcqdgnUBQBR",
  "key37": "5w17mj3UJ54v4Xxpddhb8ey9tWegD3E8LnXzWp4HdM4Lfo6DTk4sSUtQgY3oA9YWfhbVnDE7RjkswyBpox9w35U3",
  "key38": "44gtEbeRm85rcoXZneaKMhWf57c4KPZqGEHPbm6hF8NTuA4uBhSuZRDMynuTZjuzhxcBLU9mNjS4WTZyyTYnfba",
  "key39": "2Af5h8aVRzReMRfDGj7ctAp78DLcW7SuBg6XRoAzwrLmYdfeCqmC82J1VZW9x1K2UQL9t36VdBVfd1He1rAt58rR",
  "key40": "2bi6cHt2AZBhVwzmEpTAA1WQ7zx6HPTUpHNNLQKps7eJ1TunAR2tepXQdQSbN8BazQui3CaSmErgCfQkY6KGWaQb",
  "key41": "4vXXxWY7mYnRQE3z4gJsE9Be1SYpzvPHEXxgp9hrd3JMEGhtc2ugaJ4ZEZ818Y7wS8GPi4miBGrja2t5WZKKQs9f",
  "key42": "2hLRr3u6z7eMD1MrybEYcWAz8ufFkUUKbYXDoosN5Um91WoVKemjYvS2CjTwZhjhAJLDLYzfYqUHzb2tC3VCpoKx",
  "key43": "4whazm5RVW8itWCUXcAc8dgA76HomkZUV1tdebbNf6Vm3nEJ8cTdrUEY6VJ3vw2Q9tAZkGZhm8MFJu6D1kP8pUX8",
  "key44": "3xp5bJGcuTEFAjJqykcGSyoUMo5iuwXtGRYfcnYR99Ync65EaQRnvZ7GwTDo58Aq11t4N8scSLBniawUNyeBCCTx"
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
