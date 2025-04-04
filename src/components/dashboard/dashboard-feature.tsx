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
    "PQ7H1XNXSjGVmDPbNU2C2TrfAvfzY3jnz8ZHwt2JuHZZgqZidumXBykbC1j8SFAajhsKCXTJSGWiUMyEnm6cUV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LXNLPpiRk9HkMCu81XMqNz9NRb5MpCXXkbXSaB2Pt93oViHn44R1vQzbCqPbKy1Lh5FshMNvGGHDjZYKDQLR9Z5",
  "key1": "5iyAbRn5BfhRqNNY4bisQXKKCDLqSpCjJ3xzb1x35NC8KGJZrHTMXn9PDhHYsPqqSeR43ZXp6nPRRZc62Cinzava",
  "key2": "57uqYisXWDipaeGqMPnDA6DcV3si3teghUEr5Hx7kotbFtrzJBz13hdMNi1KsHMFJQjjU7xxhj8Xbzq9eit5azMd",
  "key3": "2um6mbVbKwpcN9BnzxvU25uomdVy4NpFdwqcDzadSHkgxgrzRXg2123XQzKSmUau3vL8mZyPp8cHmhD3QQmZZWME",
  "key4": "AbfTTPYcvGrX3Y5ZnRh9uNb7JHnV9b3rq9b6yX6a8iRVW9ZzhfhSZJzqqTfDS8EdMM5BteByZca4HKtLyc9jYy2",
  "key5": "2fNNBivQbutiPciWRadkdNVnGFzWFVHgLrnJZmiVPA8pp5mUCuyDQRdCx1tLZJbHXAiULzPcMGTkwjxj4mzLFMi4",
  "key6": "EbJd5oCzp1yrNwbpmLUZYnk8X1RVyeDBeTVjYarWVMVuro7Cjtj6qzSwbfadMFwzMRnsEeJQHAFATFFHV5bzwZQ",
  "key7": "LKZPzF8KQmAp8GEvGfKouNxXTwn89jBZAHbJGs2Gxmhwt5fmWPbzLPWjJgyr7qSriE9LNs1uxGzfhVACvpDuScG",
  "key8": "5uA2QTv2LqQ1T7doPjetyq8jZUCb7q4XhV8oLZQ6uSBtuf9R59GsRpJW8GXguse2mUxEENUqGYETKPp1M25m1vqH",
  "key9": "L4LfSKwj7hRBi7X9KptfuGkYMkTFpAnaWG98yJ3cVDQhqceCjACZ77XGeMAeq7coge9ku16JBqSqb1dXha3LXm9",
  "key10": "5ZnBQoCwDVedFSJWvPqjHJjuXZdGTnqvi72pY9oAXVLhoytnuhcCK8nDNwEyZRP7VBmjtYhrtyR1XxpiUcYrDLT1",
  "key11": "28Ph7iwxDYtyar7RXEUz3oPAjZJWfCjbyUwxcjvmNoodyhUUDhrBxBs4VZh3aHjeEdEBCeabahx3J3JPHHo6gUDV",
  "key12": "35UZSyLbnBBvBmgBBPgTJFuiUpifdduqHmgT2a41ZRpo1MLVGwvyXnsZf2Z6b6p5ckJ7M3a1P8HXiUXkRhL1NqzH",
  "key13": "49Va9reQX5XT48e5F1kPy8PJYKpcDQByc95yJ3tvGK88MXRjHBi25tajEGegJ7f6dtWsRdKVVSHcsnDEQnvyfrcZ",
  "key14": "NxLWLpN37cgiM3PvW6J85SDjYziokSQYKNk92XQ2nGo7eupb6Tt72QXNh8Nn6S9CUwpUeYY6FTbtjY111DzrUEA",
  "key15": "j95ok7HLZBitZ8oWmoJcdpxYMmE7QgTeMhUuPuRWPi4x1bdf9h7p9P9sjMrKPQsS5Yd6pcetvLjBjbJPNdfKjpy",
  "key16": "sCfFKMJbBGXCpsVod6US4MGJGKjnoZhPQfotPHY1EjFKRFJpjkqBSFzWffnSs2MiyjY7ZEMULadMvoYhsSbYNnU",
  "key17": "4irimxB2WbsPkuDZbE1nkWfZpCDRETYPADs5yLak6N9xdj2RF2n3qPxmKmjbdMJcZ7Mff3CjfQr9SRjDfBrUzR24",
  "key18": "65BGNLkDdPcC7maGoxtwPSRmC3tF9S7TFw86qwudwogjXEVhmNztt4tjBrrKaFZ14UZLWQPcSs3n6wCCGeb8rVu3",
  "key19": "5sUqL9nS7yni9EmD4JdYHXqcFK9rqFhkpViRxipSGikZ2eEDjLXw52srgb65BSvZTocmWhrMspTK8ddvMxMv2KTm",
  "key20": "KvfDjHGstQrmWVtPj5enucfhbcwfJ69SHH9N8mQbcSniV5EHvDZb7DN1omFsMg6DExSmFtRAZCtdoF9FeP3K7k8",
  "key21": "Jw42D3YtRVVKPwv6161A8ESTAQPMnZBi1tvMyaxYjh1fT3PXuA7QZBUycBFemuJaH61CGymwBMXZ8a4q1J8fP9G",
  "key22": "46enFt59rb2K7d3mzzDkFD9mcYNHQPRWS96YubjnT65Qm6nnik67JYVSrPwu23jXbcDfwoaKxzLo8oEgEQCygqUu",
  "key23": "J5EHdjNNCcoJAhVFiMTdJtTHTACDqumpD8vujoK7234sjjHjC7yhk3VyiwakdoBZJZmiVdTCJZ99ZG5G396xrhy",
  "key24": "5EtPb4FZMGjGD41fcJnDvsgCLaBF4MdBJLNqaRnhk9wFgfg5dQVacZZRzpKd32KskZHPQVxFKu8VwutsQP4wxt84",
  "key25": "2g2f6xEmkxNbUMLry7Wz9ip58bjCgJdUFP6st6Axk6hULtKReDJsRBj6rWJ4maA2fcT4Z9rhkE2an2JnkFuooqsC",
  "key26": "38EsTtdCx7yEBiaoT1qnPFddkZw4pw6hZzJ76DKXQLTbJD1ovnCcZP5ua8jXJcpWxirb3WoqEFYusXY2bDfXsESR",
  "key27": "kyENMXW3zNfJ66kNtaYJKYsQJsQmiLySFNHvLUzYqXjbJP1muexVSA7ucZNbSpsjeTujh9LvtsGV4ZC1kugo1wa",
  "key28": "3QcgfrKSCcUTDZ9cDTtGciTqkkqYSYmSDrrXb1cbmFimRWV5Sr3FLL5UF4TnrjB3QBJMjMgbgh8dPwx2nun2wiLw",
  "key29": "5Ur7Y6HHa6pcQh88Mzog78iyc3NnfedRNL8FSmF38rqwNNACredk4aSoYqiPYXYy4VMR6Nu3VvbgyasmH9V769zn"
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
