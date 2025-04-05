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
    "4L3y6Lme3VQHYkUMbHXyMYxmhqUNhnR6TNhLnm8ZwzaJZsZiBigq1gUsFneWGiCLoat1sxSc1G43aCZGRf8e8hKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ABV5LVoW1k64LgJYzTgw72RL3WxAtjbm8eTGjYVMUhEe5ApNiwLsMQDopXgbH9WSn3iqeSAq3SKs9L7y1xDosVj",
  "key1": "sZPcozn9BCaBvESJHuCk6pdTcfe28UCawvEtUJDteeDFuNM9HkU3uyQct3QyyypPrQwEebWPotJD88qzXp26bUW",
  "key2": "4TNynexprHvDsdLdcnxdG4oHgznEBu2XoGZ7TZT2YhPvh2GMvDJvdoTZhLt3NZxN6anprD6MkCKryRTL1pEukhGg",
  "key3": "2nQQwgrMH9g2pUFsXft7pikSLCKBzXtbhbpizKBHHuD5yHo4J3vkVwk2EvD1sRBShe4oZ83T6LsNzLyfSs5FHHsy",
  "key4": "2ySJThu3Z3q6AAqYSvr8FM46mqRQDRH2kSaVUokGV6V8sEy99eav7HBWjgtMmJ8iStdvd3cEDpKRKC6LryhivTjR",
  "key5": "45Ztx33paimQSk2C6zWsw2YC4jbeVaq1WeHT4iUkwEXxVAgubAJGGm1TAG1TPd2Q2RCNP1CqWsQGE7zw7WBh47o1",
  "key6": "5qe9rmwLhpzxymcVkGVPjGa87oDyNJ2cbPJ9kctktqDWSMTW3hLghEev38t3SqFsbwuJ1r7ZinDrd8rkX2MPDsv9",
  "key7": "3N2TzH7zVNeGvM6wxD8dzeRwrNt9sT7SqDewBccQWwpvV6qNbDcrcEfZqo1Ltt9CHFuu75b5ESz8atVz8gakZGVa",
  "key8": "2XUjUuH81E563gt1Pw1xHhLoRKRdFhHheUpFKVVrLW9bVWYDMQhExgKMinL86BixfxEpWUiVrJ2wk3yn4JMEZWFr",
  "key9": "3hPTDZxW6mmvoaucJHuzuASiw16RoBUXQMCh5yX3TDYu2tfvXzBdxzumLk4Ri2k8oC92W57dsK66ePb3YFVUYd3v",
  "key10": "3F173UYpDSibDitH6Z7v3HC9u9wAzd1veJXBzFJU9FU9TT6g2BwoFfLmHKj543t3HEGFjWvi91YctRwrCMme1Vqt",
  "key11": "2wfby9Adrs3iU6Gdgqa16yz8LKM1cfTePVPrYPQZPSTm1aTyntU9W99fe2iWtRerMKRRP7mfKdpLr8Y5jf1hJwmt",
  "key12": "Qszo1jGaTrx8Qhd6VCmCABXB6Qx5orCoygQoW1nFJsJVnnJJ1CjRaL9QrQPjF8Jo1VrJ2RqcWh3ytBRNTqLD69K",
  "key13": "5BNkcXzakdAsDvyAD3vBuny2bthczuJ5XdM39qqc7xFUnRZFtAmuTNiv6T3iZKco3PCNTTZLfk9695X46HziXmTH",
  "key14": "2P8Jan6cDKVrbvYxG8nNNc9YpDEJe7evFbRuemQrUJ1jUYS7FBLYw48M3eBomm6733Dix5Y6UvhC9YkQPhzxKtmk",
  "key15": "4AXX22s7w4aGs6HhSSqKzDiha1cn2e9XiwEMYMTqMUCv83EkiTRhBgPybF44pVUmgT4sn8uL8158ZyJieVpVSJhV",
  "key16": "3JQ5u2VaRnCxeQjvN9wn6NTcs6NVjPr1eM252LaH7nDbSw7XwmbjVVRXQ4uRwin6xQorAeoNsCyxiCPLxKG3oMTZ",
  "key17": "3QkxejX3cC1SUsp92z6Z5GdqCntEng6MswBTN5YaQawz7VFFK2SAfqA7DnB3Dfq1YHx5iEL84XAcXJH38XmVn3Nm",
  "key18": "4JNi4W7mQrnYuDasS4XkYFfhd7pSjpzYqrN1s6S8pBmaaRW6cnoX9KBb8YAyALebXMBtAJ5wsXGymby5KxU5dqQH",
  "key19": "56CjcRyTAUCHArWMgERRAG6sv2Dg2mKK5sWJjk7uUumMjpE8uDtx4buM23tCZHpsCmwQi3wLUFtC4yj4bXiKo1mB",
  "key20": "55E3C4cS9H7gyovY65XdVq46CbrnzQ9tzbBjLpBKYWz3Dg48j1asi6fjpa3t6ooSGTe8H3xTL85hKh1fd5L1H4Jo",
  "key21": "59uPQ8s7u2EEaxcvoZPdrg5CeqkdHsVoVHEHTQhBRv1Ck4YhWTEgxurcmB4TAv86qbhoNQHu2x6AKW5T4cSbWfUw",
  "key22": "2GZA2iSKZtwGP6k7ivuvce8kVHwKzTG5oTKagWWopCnEvDJgcG9X4ibqxjdMsG3KYg1hRfdjRmUnBEnfuFsjP1MG",
  "key23": "3ChJe3pm4itWnzWd8V978S5Hv3f35aUjvNwHJXKmoRqxFtMpk5udA5oZVkdvhTUCbztb2ig3PfuVKMkXNz7kXX41",
  "key24": "2W1pvqx2VQk6gsGwsapLuSyXuQc4KLiv369hCZQmHP3RXa3MkViUq4EAwnUZpZnHE9sao12XRYxfEgCFArLdBkBY",
  "key25": "4WSBUyEyZ5BivRBUqMt7D43hbYXPUV6fNzqzqeuseqCWU65FCLBEtJRprMaE9t544tKwZ9uNLpSAuS9pHPNDDQUJ",
  "key26": "26qQ8GzsykQZfTbRSPbvde65sr7FZLg2xYLrz7CtPk3fbPDBifU1bYwn7ALKoXMnWFzPhmXSwetzPcxrWwJHTzGa",
  "key27": "DhndSsap1Xu6b9qKWmPiWDCz3Qw1AhNADYSHhUq7juyVYzWbwJMyB39fH2JutDRuHRtfac15xVWmke6vk4FiqMP",
  "key28": "AmvBq49iLHh8jYiJKpykNSq5zjeYzNKgY8R1SzH1uTpwNQehdUEY9Wwh7EEF18PR4BPgokzv3KNJ1WeZvHBg6ko",
  "key29": "3LxzgvYxKSyF7YFr1bW571zeWGsH7JzAvGa8HtbBpjJmETJPXLiNZKaWo2X52h5bvb9HCNztW2ZtBkrnKJSPVbDz",
  "key30": "5ZsfthiR3deiihLr7VA8E3ZGEgb7YwkUUykMp6QH3eWZKWKDy8ZYbfBhrGJsAH7ny8pCZM1MD9e6BUxXCY2r2K6X",
  "key31": "8QAv2cwRQLVBQ4Dz2otah1Jqkzta8po1czqSryPpwsD6Xf9jHNuG5yjCivATxdXxa1CEz54kbrbJjbdBZunam37",
  "key32": "3zTQxfagyErbZqcC9LYZyxDGYjXCtdhVDHVyB7pDXFBV81X9tgHBDCq83JMpJQcCh89qEh4ypW1yeMmHAdMfjytb",
  "key33": "64ztwmwqxqTKy3JHhmsWc4BkEZZQjX76UFAZjcZ9XkEMrZ5HueR2JzNQWLH2RPrEKETV8XFRc7PjSUZ2ZCHiKNCi",
  "key34": "4LM38hdLdV5ZqiFmF3XdrJFiuKpQSRxYa2vwEvgukj57Bjwv1PRiaLgsByQEcNkmRZFUGmUfJXwGJ56WU7xTtfXR",
  "key35": "5gdn5TpGZvmzAvVTkvKdE3RZ5P6Rkq4E93vkLxCVAfqiA6krLqJ87z38mhrDTmdYwC2p9UDYZcXjPzSAvG2XK4bJ",
  "key36": "2mwQdQMNxBaKbRYR2TYYNMAtrmiHto4Pp5vRonsZJbmW2RMsTEDnwCB2CdQVFni9rAUe8DkoPQoyECPPARzQBFvw",
  "key37": "2hfQdkNqbMP7oN5Jyebcmqjnz8ZJhGCGW932UTsjJLPwcgFo6Xyvv8ikvnm9sJP9ozvWdLhRyen1G4822xRhnYcK"
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
