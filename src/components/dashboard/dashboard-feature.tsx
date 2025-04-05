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
    "3FKuqHK7toWKF5qBtdyasrHt6HMPXeoVg7G4vUY1Z1E7nmZRnwfKecm6uhzXtPMSTnXNowmicbgsVAugmrQvJb1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jyMePKw54Z5sEvjB7JhTY2aHQeWHW3v3NJsP8Eygfkant27Q1oDoXhF2i4Qmb6u7FpaRVCGnwVGkPyGKpYQLsX9",
  "key1": "4uv5pZY9M2WfZWAVxEEcKAu6FxcaajksbN32PwVSs6WPy8dgjsvRXpqxP3tteaXnZ8wB3yP9jArXPjEu2tGLFSU3",
  "key2": "5hw3R4RR3BCxDCdeTDE5o7rNEr1ZvPvhJeQiZp6cXvNMxU15KzTWv9vGmDbXN3mg2nzmfCHVa8EaqfxBQf1gAwtA",
  "key3": "5C2eCNwfXHAUCEeypWn9mcKRC8WQvS2bypspqApQgKnoxkaA3xXAVv47fnHP3omFBnktJEa3oPrqhnJuBMkSykRu",
  "key4": "4mUmqgfAtVEiAr8dCSMB9LPyNSoX5BVqe5rr18rHTBn28RNB1bCf6mCcXpndRdAQdCvpnTGdGRPs1VY51jUQ87u5",
  "key5": "K6qDREfesENGuktLiXSRNz46KSxKKhWRVW6KrVHNb7zZFpXT2GpLJt1qKLXS91bDK8Hc8rSrDcr37fxpmZKXz1Z",
  "key6": "2WfPDcrb5PkrjhjzrB2yBVZk1gD8MCo15od9oo2ttbr4gA6ui3HYGzh7CUeohnVTHD7CDgcC3gg2XGAyvm93LiqQ",
  "key7": "65X4FdeWccSB7ivAkytJcEF2pS3P2uLhRFbyUh6Dkrz922uSdeWenaaNi435tREFzc6isDghsSHXDzrkkDUmLxn1",
  "key8": "3CjFzmgEtzYMQsAbe53LrE43W6tGkaXn5D4bgd3HucFwfV3vsjkPZUYgdQtXVJwGtvN6E1wBGsgN8tpjmEhDdjMb",
  "key9": "48yQjXrfhRwb3KyBrSThth8We9q7kv59QySYURaahkoGLu3BL9pxTznPUbBcm6Koj8RiguDjT5YRxthLHmUFEqp6",
  "key10": "3puanT1M6SqQ2s7aJDjjYHeDZEVG4yb16d2rztAYJX1QuspjZwH6GMJG7J26D1GrgTxK71hZKRpUkD8DakG25TAw",
  "key11": "QWq9ERYMU5eYPLXY1aiepNF2CupmhGdFAGVkwu7Dn72u5HLwV135BcbCLSfJMZYFuASSy8AiJa8QMWx2KnP3vEx",
  "key12": "2drEDXGWapjFz6D3jd2nRVJ6gNR8qKFHsLGmP7d7taxzwNzXQJg5xTkJoa9tb7RzomZvE5DoRGFUZVvp3F91UHh4",
  "key13": "62gT4zxtEN543aAbwaBzkSaCSMjiq7PjjzzsMvbi9AJakJkLzLSTHccragq42T18jq2A4Sy9LriwAXXaTA7hFrWB",
  "key14": "51Nf6bE4RK8cBaJDpzr5XeGLVHfUNwMRoifbP2NKtYaHz3BC978eHbVnri6F6X1hoBYiN1DRzsN8BQwXNur4XNRx",
  "key15": "3KkrTWHJjRA21AdfgNzJLtxphsUajbbTCPZtnWcRodXXxi7DuqxJVvKKPvgWF7tddCwTwgmH5Ck3WuttrZPArwvf",
  "key16": "fDH7czkFPgfKVKByDFsNUmSAwRt6ezZLs1Hog6Zs1w2uvzzHQ9gBqmJcq1hVU63yXuJPsGdvGzY2Ahdeh6EHpgq",
  "key17": "41iByxeydBkwq6w4mu5zYb2LFtpDX3Ag8akPTVAPEZDHBm4ARL5S8kfA6ezPmFHPpTXc9Axj4waj2L95cghT1b3h",
  "key18": "m9bjq2Ax982e8sAReyBZgpaKibMLy9fdJgbH4HC7HJda1SVyzLq3RtBNiQAV21gTDq5QHskBcMNkxqBEtuxG2c6",
  "key19": "5As6TXbjmmGyqEuzGjtSHWioS8ANkavEneq6AeBtFwZtawREGqjJ3ZhfG21qvNddn9jdcYPow7ExCQWMPXaFe9YU",
  "key20": "3i1fDLbmeEEWr1kcxqw1cMoUkjZmuzdVBvo4NfMk8FGWe2rd49uCmhacGj2Ms2PPcHZcXBQ4JBQGxdZCSCkEhLEa",
  "key21": "5ttNvnqicsz24j7dxWwzQji8ZtB5uY18V9Y9joXmvd9ZU8XCyKRx3R3XVhafpeTUn64EgSoF4tx3DHfjqgARnKGC",
  "key22": "3cvQbD4thnyL27Y6rpGYTEaVRdoYL9fv7TZHN6MXQSqq1m6jkmEwv52jzbe4EwbAPjZ1ehmjDCXefTe3ZM7EYoCJ",
  "key23": "5tB793RMoLk3nPRFsqscFv6vKqQ1PMJ7vHU6JjzH2Cf4hA747Ab8zF4ZA31XW5NicqpYeTJGQHU2GMsbgvJhvQ7o",
  "key24": "4pK53MgfobfYD3yPQ9DVgtUdyWp5owfRa12m2JroT6GC9bwVZiztNBS9UT9Hi2RHACjdB7G7cetHkjXHwo4kGi35",
  "key25": "8uhEEFkzKKXPS8CJB4eiE1duJTSwyA9d3JzGg9AH9J2VVz1zHuBd1U9JTuoN6iJSV69Fzcp5B7jrGuceqcvqELX",
  "key26": "5QyLokQ3dB58KHjLzR5Z4Mn6caLPKid31rERXrYFLcrr7eZP8XdQX6FdmAdN4xZ23JX9gpfBsFt3eZPnvq962QQs",
  "key27": "67g1wesXp5xmp8ERFVnhQQGXtknQ3jmMUXrC7hoggzxX8M6k5Zxq6HHFvAeTP1ACBNxQ4XVYq9nHY6CCtV43kn5G",
  "key28": "54dvtrRiWB1MAAymSivy4bHibuBRxmRhugQ3b8td6J7CUDn1nMYXVMNVcRR2Z1Q1JL6iwCfjGsEBZz67rU3vsDRp",
  "key29": "ar46P1i1V2JtaSufkWp7wjuqWGkZHHSiDizxhhk9H73PPUBNiJTTZutqyzxbp3kJ1sVUKAxymcxpxLDRcksmFSM",
  "key30": "33tDwFhBybU8NzTm9ChYfdmiQCWNKjScbSxAFVBrTSQZa7JLFLRFtp1SkPPXFmcLMH5tGzKUmVNuPtzUX73zvYTL",
  "key31": "K7beEJRqninPeqkMd6px1fbjygTFV9i4k9k9qyifhDNLigBT5feNCQVvPVcf6eEKYwZcu1Q2uSqMUnDkEJ57U5C",
  "key32": "vhfryocZRPQCPYTEFJDxk3BeJ61GekrTS9DVT7SB2VUVD771pRrrEHTKc9Z7XQbJZ9k58yRhhwH1iPh1DziaL1H"
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
