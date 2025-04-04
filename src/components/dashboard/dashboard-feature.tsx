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
    "2xMZs6T3cKwUzf56TcopLDnpMYekjRkA66DfganBuCSoZ6p1mNh4m71TgSZ93yfiuBbkZi6iRdyJesPbG9eqoCrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dD2VbKf4f2dwHL7i7bP4wBJRRr8beuhEBZCbXLoDu3RcrgHQR31Yu6UgCexxvuzZYGxcDj4CCkqB3FcYX77V5Ap",
  "key1": "Lv4eLmyxKsoimPJEYN3tsT9CpdvTucZGh7Z4fAyMzykVzsDgSBRHULKgMGoSZakmetRxuGGxkM1z5yvCd5JawBt",
  "key2": "3Ldyft3FUvPrZVVS4r6ZLxKVAc5TEje5hXbTaTwuu53F5KH1wXRN1oR6WQH4PdV6URbeV62xLESjUWTFs2S2eMRB",
  "key3": "52hGkVHzKBJXQXCh6zmk483xFidUmKtSmS2aTYcPoicmxdJtBNY92tPi5wJmR4JmjW9zg1zoSyvVf5HwP38fdHWS",
  "key4": "54wDa5Y1dw4aqR6pezEMic6j8vT4sqfDHgpBBMMRLwUp5pAC6dMn736emchFQ22jy6QzSmaMomjuFq3XNiv55heq",
  "key5": "cUPyBqnaM3x6wtmJq2DoNskDsQW2PphA7bQPN3usowngnCFBSSyVZPqv3dGT8xAhdcuZMqZbBRs6AXwiKXEaV6d",
  "key6": "5KVbeDKbdh9VWaVZQqfL2iQ9iMXmLECmpU67WvR7zW16A1rNEQZk2zWYd5amqDi88NQrNFCGu6CQDyUPoPHWmD8k",
  "key7": "5PqNoRF7zWigFFYnoC4qKwavTT3KCcUU7KAhyaRrzpnyiSYhqmu2EdsZkbKJGbPToieBULAcxFWjzrdrqX8GyT18",
  "key8": "4s1Q9eUu6DHbQsLxW3tpUWhSWFvZCyNzq9S1q2Qve6hyBePeC1ZJSkLn7E5WDpZtwf39AKN7UdedGpLxV4yAdeJN",
  "key9": "3GYfkAw6ffwwcRjaG88WqPwioYL7qW7tMo61kwS9w9QfwCNmCB3GbxaybeXpWtwFUHHEu4pYN97yDF2yZxmMugXr",
  "key10": "33GUwU8NXBf7kQZjAWcXtDMJVkkkQyT5Uh3Gnv9HwiPuXRceNNaESATKo7gZS4Mtzjrh1gPezifjDuVHpSwNeaZS",
  "key11": "3hZWt3wHj6sTXewMkftNRM3JDiATafujXeycw3VHw77WxWcFhiVJZBUk2wwKco75muXVDcAUAYFHyaUnvpTzp3Ku",
  "key12": "5r13nrqx9CfDdQ3s6vdb5p7wqwQmzTDFtB4J678dwjahRsG1QeY2wogW9EMRTss6MSs1pDnCUNaQkxQDX4B82t2F",
  "key13": "2fuyKc7e88wds5Tb32Fs6CThfh7uvrMWjASrzAh96ek7zMtVD8EpoFF1f1ZeeSkK2pdA5brdUnSCr2x73PujmiJm",
  "key14": "aGPAZwtW2MF71WLWTcrcwfwG3My6uFWDA8JYa7WMMTKURs6siAhQdASiqdHr3kbFwDa4mDj4dftgztJpiBNyZM8",
  "key15": "58pHQS937fuGmjMMQUE6jEHdqE3RJKVF1DRmxpVZhWxyVLUFfwxTLcppFY8UfoyoEB312kREJUZECyFPVMhDENY5",
  "key16": "5Lkmrrkfgq8JBDYdjdfd2hmnidcNMRo5NEAuyRL9hKJ32QoUhvYFpBF4ZsYvePbam3MyBpC79WQVpMuzMScadXpj",
  "key17": "8CmDc8Pt3TRVsdvT5HMJafRLwYZiXpUDCXwRfLGeQMz9hsR1ra628XLX7JCXjrg5vkSpA9db8KJbP4SyaFfwT88",
  "key18": "3xFw2osxtgk3gcSGJMjsirMib8ZbFMJU65N6dW4HgLD46Rr2qrd6oXBZVaBS7cosGxcNSVf7AnBMKHxQCUTbzwPS",
  "key19": "4FWPdyn2n4bhe4ZWRYryeJW8aVA2Nj4Ews2FmokYybKKJjetfMS6QDTCPcZ2M7c7CiToKrbPmZWrQgcS9LR9RJUH",
  "key20": "2Z97dbQv995Xu2tZvVNeHuxrEauBHLwQnFoPG5tBJVjsW7Nd48gADjeccHRB6pspn3HHZ7X4e6rbvZSqpkcDUnB2",
  "key21": "EjZFzcjmMHQZJWMRJCfw6s3j7eH3kXxxy5PJYEAo6FA8t6wjSLwAC27k8ti1juZXfTh79SDx3tz5cXf8xGN7B83",
  "key22": "64g1SeEYXPTV23fdJzy1wxPhhaFAzQfSsn6oQDU3x664t4VLmU7eKoGjB3anPJ9dcVP37P9BqqZ3fz2gPromcqgY",
  "key23": "5qivoarExhwFmdqJnCFbfQfmS4Z9QvGepUVTpVeVx76W4MSmLE5ZnM63YxsMBq1bexo4sYUdPUbXCFraaYYBrduZ",
  "key24": "2R4dMbR9SDUoL5T1ApHWPf47MkRVwcVT3LYbBAPhsV2x6AVrCtDMPFKD8bRj5gveuVAJbm6EbkZE89ACm8N5GGAm",
  "key25": "2iTkx3C6g9to5ASeUQa44XFis2TrA3Nb1tGEf3cNbcqJsMQVCmZUsLeKGLZhdsrwbS8ebvGJ7VYbStYzJw9gy7HQ",
  "key26": "2jqSptsWoe4nV6t5Y8DJPoNDoL9pMEBNTjFXBM5BpQtUS3oN6ypaee93cHa9zW5PCGwYvQ2wWHuCQu8fFg6ZtGpb",
  "key27": "3KPG8dTk5JkZMqSEiVfC8fBKGpEJF5U8evJyW8uUQwxsqNaU9jGNxjgaWUuaVhn7YYauVaV6qkzaqnncAUogVP3E",
  "key28": "3sLxhX4Tq2eTZtW7PP89E1qrv2YDiwVWYzDnQJVAmhSWWwv9F37qnVAFGndVPkQstqzUKFjz9o7nMZ8xGaKAn15m",
  "key29": "4R9Mit8UuDBkMK7c5Z1p8kytirTWm8YCAmskg7xVHzBujmYDzEQZdvNZXziQuFJhfExiQe78E1YiosbfCKYh4DHT",
  "key30": "QTCRVwXuWJZFn4cYGCQshJrn9k7gexPYRFzBhtpYmDFxDC5Z8MnByV3Nkqqve55mP4KvGHPYbernwHuo6CHuGH8",
  "key31": "2znY3MayuyLVbvMVgDojoAde3VKQ3bn39TW7uVPmtk2cp8EuMvY9ywRJdsLWGY6oBGNaJuTD8y61gcLzUEuFVBC5",
  "key32": "3ZTEFN8WXo8hR2Tfui3YXm26uoebcZTsHvCr5bsv3udkBiB73WMciFSCePNY8ryGdktc9jwHfW82UTQ1PgdRXeQj",
  "key33": "3HS2bf1Cot3Zv4Ubm8xbn9W1PjDCZwXHPgijtgyEXUchjBqLmugroKRmeem8t72nNt2eV99Gb8ECp6aDuXEky3JY",
  "key34": "3txUBmJbi4Us9SjP3ZMSZELF29Cgj7pBQTJoKNrzX8CeVQ2dw5B4B7ww8LLtDYc6v7ACRX6Jh49jaqq5Pn3Asd4W",
  "key35": "48Teq1n5zNYg4ascEEF8ihC7rdfaM3HYZW97sf8QNiJP2ErPfSAT8a1hVEBXvnymF9hUT9W7HLxWVtPkDHMZyKmH",
  "key36": "2454ETNm55dzPZerfHfCDZBMzLVEebndiTK7WGtJAkDCbadj6SJYkqGf4ey5o21En7YeXWtNARPfA4nadtc76si7",
  "key37": "2ugJJpF6mHkfV7HpHBx6g4MQBKvR9oYBKcndoq1gUwcfNzEwRs6E3yr1GCe6X8pgFkx7GtweYXpeBSGdacE1dks9",
  "key38": "3LoAFxA32P5sgZxjayBbgZDoTygNR96jcKCRHap9LiZjT6qsGstLq6igVqX2RxxNcmF3XfZzmuLMBwWreu4ZKXhq",
  "key39": "44uKkyxf3ugDUKcUiDJumz5WEvZQMZcF2yGMCgjeUkVjhjyNkrRtrCRkctk1mMmPt67uGw3kFXiYPGRqCds9D66D"
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
