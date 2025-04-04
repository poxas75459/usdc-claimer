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
    "5uxghX1SpZeJkWbpVkrSw5ypaKbpdXYmj9UodXykvXLzAMbttrCeLAV2qhp8NymVmHbha3w4wqDborK8iJoBy53E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZHNycPavkExu2mzWnUMNqUY26WiDg1hUGM5fVQjpqqhQhputNiWQ15gaT1onPykVCRbQMgJhDThedVnRk4b61yT",
  "key1": "3iPwyKEnzJGA5n9znmHxvFkYz6fV43g1MEu78hvmyP41r4MVNSkxkSxf1WvuaTzLP7HKSNRmeru4egnw8cCrb1nf",
  "key2": "5dYzghqFrHywPnV7QvooLv83pAd5zGthHPyjMviYvxK8U73vC7AKKuG6wfm85dV4CMcvnRVvWXYxzMaH2LVitZ3N",
  "key3": "4HtGEmwzgFQjFPaHe9D4iuiunwXN2XhR1ytkbgNhbYhvRPo9YQwspV3QBiebqJtuVrjfyUT2mtxrJkf7qVG9Z9b1",
  "key4": "iorGPgrfUTrNxMQnugemrCprFB5GXo9Pbhxiv5Gutm4ou9keVo1e7NJ9N4ZyQYGT3icCLZ4a4ax6TSYfnwJc4qu",
  "key5": "zPT9zMvT8dfX2Mga4QTFtSuaU9dvkriDFqaSETEjFRwCjdyxyu2yzrfV8K9ZMs5tqNBXcVnKy2UPx9WRwnVjuMo",
  "key6": "5sPE1PgnTi5BDEMUzhYDNsWzNqWpMTUytciLiJvVbu6ynepFwiJb6rQCNRXfopxMJdJ4m1wWDSmf18TNaj9KKMuw",
  "key7": "5ziHMRGqDwdo2pdHTHkhASNNMqysjeLrXboL2GLTVqk4eEroAhHuSE8sNNbrYQeNPZ4rwvNv9CJvpzRwDYL66Evb",
  "key8": "dbaZzatg2cWFWsf4raLUssfUpQy4gfP41sT9ZxP8PTdfMMDPXrzDfRFceML5o98dj2rsvfimZBggL2h7ofxxcKA",
  "key9": "soXtroRT7SnVN53RMGH9qjJDnLg3PvnaFZfGwsUQtbWmWmsQ65HdND9quV524ZfNzSMdwgRks9M7b5W19TCDUWM",
  "key10": "4Z6VtwrgC95ixzSsXq8kPpJVrQXDgb5ynxygP43cjiKcu7SbFuTKZfiHA1qJqidYk89vWs4Qkbus7PGeBReVcBLb",
  "key11": "2KMA7R3AehTehMeqhf4AoEeCg3EW34R5uBGwYdsDK4ND3WBm8vXfBv9qSXmEsbHFPXKKWwmXuimwvyGDcvKb9Rg7",
  "key12": "5SziVhvRNaEUHpXGti5PpTN62ry5vKhRhPf4A9BjYNdftgv5t7YXUZUQkDYEYUurCmhjrsKfWiMAP8z67AD7Y47J",
  "key13": "4MoTBSihuzwmzp5ufwXgi6ZevN7AhecBzcdoy4ZjrYTrK9vwrtbkf1h7nybi3cBvQZUDrp7XMjkpUfH3SeZ59MxG",
  "key14": "5H7Tq6ENygfw9aUhNWkNgSsU11QjcUAdArh4ybjLK8b5aJW27mMUxtokW28TtTLHWLjnj1gG8Auu31yS5782qp2R",
  "key15": "5czzHpy4UaYQoGJ6V7BheeD6YJRQEuYgve8zccXPhdygnfVqNcdZZ4vLehQPbnggF5Lr5JrPHiaPjePgFdEWmyPo",
  "key16": "2kjQTruMiSEfYuRthN5wAgeKsWPQPc3No2L3Urx95fmf3jFmwtoAEaJFHNtirpzrkaYSbDPxiDvKVMzMahigwPss",
  "key17": "3WjQLwPbYM9K4EDWrHfFcNbKAFpFnM3P4gAnabXwfhTnbqgwKF95PQbW8L9BkBgACe6L4VYEBttBQoy5jySP3kHq",
  "key18": "46Eu4rWDtHwLhPFYRRiGnAodXCuVn38BEbPdEkw2ce4PMtqAWtxrhfpb2RmN6GJ9HwSYJosP5oVPdZpzDLEofnjY",
  "key19": "5YX81emuG9oU2YgaCQ8x3FxdqiDTUz2dnUs2K5kZfXtBw7rhrRZcZtVF62sbA5y9AJvyENpBD7aBP2uiSg7Nvi1L",
  "key20": "k4DL73eXpFpUCQuoNdsp3di7ggMqoAphZ7wbn37rs9iS14vxgnFoXV7SkP2wYVKoeL7ZJq54f35FiPJTPrtJZiD",
  "key21": "5KgG2R9AKdbUgWaubsScTqZqDdzWF9PAivseLNk9SqpqmmtnCuMRQmdaJR19GGGkfxAS87JFq9zWzgo2Q8rFNiTs",
  "key22": "3yTvkrA5KfRuQEdYQDw6u3kgenreR4DZU8MEb8aBVB6pRaZwD6HdQgncZXTQaJvwiFBafWfHq55iiU2UM2veEPgB",
  "key23": "3aehXnRRE4rAJYB2VszEEuZN9WK2YZXbemgAB2Fr7V5a13ZjEXT6PNunGfaQucXUeA2aQG5nsmwG9uCz4QTe6Nh3",
  "key24": "2jmP2BRCVfb9HLf3L8fMmZ59qeCBffCZoNoy88Z6RKJuK8JtJchPBDb18mjzeSZmSk7hDQz1DF8wBGRKCsaDaNqo",
  "key25": "s5yn7t5iuugvnxAnHZ1LHXtNh7fjrHEjnDD5SBwheKqJKkt5QRHbRzq5mBPC8ZkWxNmWN1qfjcyBN9h2A631oH5",
  "key26": "2ivbaWZmj4aj5h2t2ZLiWxMzqEo9vYvNuCnhR1jik2Q5TJZnhMF82Dz57V7mPjX9LWVwjNpKgMsR5v6FJCdSBDRU",
  "key27": "2SA3JZpF9odfAot3XzNtG8qB68db548tES4q4aBxN8TZZ9xFAJCxLhoXqjYwbVghpAR1WPJGrx7b1WZkSfvDfVgj",
  "key28": "5mN1VA9mhtgXNzFL1xxDSGvyjwEb5CDrGVxiCMTUDbHu9UJoFYa64AztFWbozuGqRPR3BGxtCQHkmQm6BMKVWqmk",
  "key29": "5Jw6JchPjXbqu5nLCB8zvkPVGJ4bnBVsGLXMeZb2YZY3xhMzfH4Q196cLZf7bM2G4pG8BzpJ6Pdt5bKLWuQYGy4S",
  "key30": "4fup8JadDk9GWUaY37yoraAPYrGwBGTp3nueAP7R2NDCYHySx4NXchWyoNtJ8GmpFxtySwCKBYdZ8azPsdViRuLQ",
  "key31": "x3daH55zq58zyMvZNb9cqPHtJ1DAqnhihPk8eLKEifJzUsfVfsKXhCeKUhyzCu62aBKX5WUUdbjB9DbG5jcqV4m",
  "key32": "d3oaz7J653YdcufSNr4APXFUapGsCmWzKAu8Y8p6YcTY3X2j2B1xDmMzgWg2wmH2PLYp2WYcFKpwsy1nVMo8Mdf",
  "key33": "4tMxZ5omVYaVDr2uvmDcEniqvPnZLu9N1XhqkS2TphvagnYvcfkMgF2tFJWDw2NBUStuqfPufRVxjtR3856i2pzg",
  "key34": "28EVwZXpLCEsJXZafNagS6djyBSbQHeGpgQ1s48JGLDjpnDENgJCwNJxDym2usmTgV9Zx7apJfN9znLHTnELEo9j"
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
