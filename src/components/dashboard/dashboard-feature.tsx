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
    "34ipzPNh57iF7itDcKBbZV7waX8BkYDqTdXC83SWMeaPYJcqXnSeYGNRByN5sm3hsjZm7vt5xtNa9ykgHzhVLTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xp2211kdhpiKyWtB7daoA66G2H8TcTbpm8jaHRATWvpXrgZDd9okYtaaK8hVRa1xqMpUU4fdirUa6btyZRb5YSz",
  "key1": "3H5MykvQ1DbXQxoSLejDH1WqKrT3RtrdzVVncXj7WAw56Geqhdmmd2TuWJJHwsJe5dW1n845YhGdXS2yfescV2TW",
  "key2": "4MBHMNSyvKjVbE9DLxKmLgCMWPKCXtXLH65UDxxH8if68nga4tQ5nbWgbPaLFzbqeHc4hSN6EtxMujoP35XHyekh",
  "key3": "5TFKDjW8iYYPvtB6Qh1RgCDkuLXPy46PB17W64c39tJ3kCuTP1yq6jtkYxFFoPMN54hS3S1d5eSzK4ts4Jh5Sbkk",
  "key4": "YzH4pafKrZyDdDgBnDpZZ8QVyULCEzCtrLwN1TCZUTwphfNkXbZ14TSQ1gY1TUB5NzCGMuk1aspM9KGSYTLYSfV",
  "key5": "2URN9JgpCjuBEnm4SzNacTekE3YEzjzJbozxkKdqy5CTgFEq99Wsx9gqf6NV9GiLaYmeDYHdJm8spN1G1vSuMJhv",
  "key6": "2rmbvi28ZiptHitCivuFSSEKFmdH5AKRDUK2mTh3kxLEbRkWvLJYBZiSYF7cjdkqaX4mJW3ZyeidbdxLzWW4rDhb",
  "key7": "5DFdVU4tszLyVSRXnJHL7ZePtzAfSKzZfuCgBXmHTLwMB1xqAaifusVDjsMGvUHnWGU8vaDDcbPVEvP7tWV33QyF",
  "key8": "4wJJbTt5z93aQbeUn1dujYctub3yUDEJErKFojbxzYmz9QqTFZHnWwc2jrAQEom4pCSczcfBDHJ3jgBcwXHJApHA",
  "key9": "x73qqDQVZnZXf1qQPeHm4tBKgBKHSG7XqcTE6BxFZoaethpb8okaGrykBZSmRPgAdzyLZrVdLtpCrbdXXApiLE3",
  "key10": "3b6396UsJWwkTAC3Nd47ZuuDnaL2SndjEJdn825HbxxGZdt7PN8syhg1cYUAjbSAZwNsQEDkQFp3j4d8235ate8W",
  "key11": "2MofXQtVKUDg2eXfcXY3WxLmjww2rgEFujmjNFQz11kxsZFhe6cs1ZvErwLXdmv7Zhcnjo15xWdyZE1giA7xPxNL",
  "key12": "2gpbkVWQcCr961aR3ywyirSjkES2c2D3kXDgRa5e794gqQ7VVt2v2ir1JMFaWaxzMFWboTo2VpsEHG8xHU8c6HZ6",
  "key13": "5Drjwmkcwkj354gvxLNn4YVBEEecph5fXbhvsdZAMGH3t4gFnDJLbQrJWTPpPMWNZtvVU6NExwy9v9UWHJW2fCxc",
  "key14": "Zk4BAbcSgVAehWbcNMfyrUYj6VkqYukoGFXKyiw73MmieEPzutCJ2vzbtm14wTXJVFWJFiqDuSeq38bFiSMPNiZ",
  "key15": "vVsd8ooYpo3Rb2apSq1Vk42JHH3bAJHnCqpmPziKDqeSPoPnhxovCgjNJnrDwU1CaKaMXz9zZ2vbAWrtko9F3NA",
  "key16": "4HodZz4eJu3cBA6sBvP4HaRpGFgMGQ9VAyNE1mBfazjRBjddo8SRiysksAF8pTn2TDVDuHE3oQqBt4FrAQ9stEmQ",
  "key17": "244gi72sFFtuzQAu5WYhzhmWUJMBhEz7DgGYNNozQfkrUP1YqgJHEp9tVhwJZ7qshmpYAAKW773Xm5dDzXNmEdki",
  "key18": "4fmnHYaByqd58yPJrhPnuthKnZmAFXJ2nmg2Nhr1r5EvM3DzMsUhY6arvmWgFDZ8R1wW11WTcXUowvZ5aNeKv9UQ",
  "key19": "53cnpA2ggHKbBeM15wc8mDv9g3Mij13brtfKvu3pcLW9FoXxxeD12g7AFFzt9dzpUikEHmhTUtAUKd5rcvz8KH4u",
  "key20": "5bWm8D7GVUKd88CQQsEYxPULLcreT231cjBKHmvCvAiHhhAfmQytFbd8KQhNET9wrQMzyd2BKNitL3Mo8QFDWSCP",
  "key21": "4GSJroX4uQBicmXNEwBAZ3SSrRgZGbL5usaALLNdXLMmHJc3XxnPewCErEKgw9xvTuseipW7w5WsHYf7b9Y2sNWH",
  "key22": "34KmjG8ZkMx22P5j9ELRDa1xF2WmPWHShWASA1zWyvk965nyJQyEsQDT6sr7duM5TSQUJQW6sm8TLR8bBbVKGXse",
  "key23": "5fm19kTQy8wDaKBepK7J3VaMunfWHSoKntxxTQhE11W6ZBcnsE2UhsryuB3irSuHiuPQDfjLVM3exQMQUuTNdHZc",
  "key24": "3qb5h7WLpTk9yMdRqJxcLWroAgfvsQ1Rxps1RRrr54GjCrjWbohnn99sG48fus4E2NwVTGqAgqZrFV9dKqYpDyPr",
  "key25": "YU721i2DwdhPgdmYP3dpfL62HBi924bndnxxUTFzTQHvBdGRwKNQWztjRX6LM999MdZ4qBwfL7hDzHTfxNd3Xrp",
  "key26": "Sch7RK7yAjvfFkeSJdRqVyaoP7hn3fPzKonwbpMr164JxDw5ZWWzmuo6fBRKcNnjy83B4hchXXU4xoSfhzUfVu2",
  "key27": "AZFqjyrGM3z2VyTw79sNUP2FHK8ndVFXrSKZjrSvYYUHBGf8HZ5eUHFUNroTD2J4wDFLaN8rLJLyiv2VJUMGwPu",
  "key28": "3LxXvJUQPovayAX35Mu1oYy13csJGpBLWWKaZ3ZgiRV2u9b8nGfyGknYgLFpbFEef8NuhVtyeXc8z5WoRoU2nypH"
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
