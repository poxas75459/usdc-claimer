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
    "26gqBWGbrh3txveam9E4TWFEU6FU8KzqoeBsWqjFYZD8GoBv4Kracn5XXUhdZjvxuUfyMTueNkGwp8AG8sMftTAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Ti3UfpAUJD2RYtoyEGjhDu6URB3vkn9aHqgdEMNnpXwi8pHje2ikthhfvgFW1sB4ZZ65noVFbD4iwVJzskJFK3",
  "key1": "4om36paNRDpN8wiT9N2GnvKZpHZBEYuBoVvwsfQCf6oJyTKFitEENEuyEuYhUDDMCXRxdmGrWtaksc5ZGFrjHbF1",
  "key2": "mhX18XKQGYaGdYn53NTuS69xBnAqS3Sr3MJg67KeNt3RWoSDzHRaYrYJCzVRSwyAbERD7cWmXvkhkJKtDn9X656",
  "key3": "3cJUXc3LWkKJaF9dsvorTckP6MwUX4fmGF77WGUiXM3TaLtDgk8cFAD5TJqnFp1ezujVE6MWY7zjDT5JXGyKZRLE",
  "key4": "2ZrxXjmjivUm5prF8rgGWJY5up2FTDQSSAwCvRRnqMqK3Z7zcxKvZJzm61KZxeofP3LGfRHYW2hYxt4X7PDuJYBu",
  "key5": "2J67zqpfKazqaythSARkXxcbKK7AvS21Mn6ShFBHEVe7r9HLt2hnVTMjY4D2QHCnWb6KyaR18YLREbMtZonYMJB1",
  "key6": "5vuXnQxi7wMXWZkBZhAJ23BfYQ9TMNXCgwqG2L1WCToGarsqwEpeSgpx8RHzHHoeHiXYUazj6NxUKcM2CCewh9EB",
  "key7": "73KqrDujU9bedkikA82mYiQS7owHNz1pyVEKKELqBcqmYYY5i3tMxsmrTWSAUu7dZPRbJrzDHcN1XTbBoYRCnFQ",
  "key8": "7rqDAZBwjkSs8GZCkinBZVk8Ymr5pAeKMj4EVhNKgEW9a65GYFdfMJ1JBXz6cp2eBcsJ7zJ2crWnQdDsLZRuyPu",
  "key9": "5XS3DQj262ZGL6qfWpQf8sPUjvALnZNbDHJb9SF3qMTtzp7xExgb9t8Jb5sXKAjuQV8efmS6eu1Q5Ejwgxmdgj9F",
  "key10": "4esMDQsGEGWzke74qRtqFzwDgzpBA2q7UsKkGuxUHgfHRYq1TzXg1Vxz4piKg5fEwSBLwxLSwg94CDDiTFUTDVh7",
  "key11": "5xuouPcCFX8CLiedEQGGoEyrSVe9VXQ4x6PEuAGEiVxeu1E1oE6vmwe1XS2dg9KpMrhq6jra8R5hEhMxJKL6UmMX",
  "key12": "tj43GUnzYGxYGt7pefCqfennzNwmeRYpAg5ZpMVZA9EKMxD8FU9Bu54oUHGzsDKDPabiBgSr6aBkxDGwBjiAeHx",
  "key13": "4tiKHiAbRamAFF3w11ycF6QbQFgzVPKnj9JqkvmZwL59hbU5rD1LVhk6h7wHWicyFpTBcQbkdRZxxzyAXjebpDnh",
  "key14": "4sWn98x4Q3AsgE34C2XuRoUZeuVg7cyJVrDNBxJoaBrYgXa2L1m66Y9y46FLiiP2NnQN6uXeEwDSQqn8ppTpGp1j",
  "key15": "S12FxYJzQATADEsgtooLBa1YiJt1BeiSHnekaGHuKKqWiNK63JFx8AZHhqpyCvPcPXyTd7vK6gDjUUAmmMMS92r",
  "key16": "2j4wGtdXwp9TrtMgBwfeJiubHi6A4jdnL7f6qk8GTaND1Jkh1mhYQG1RiKDLwoFXGDesjzCmnnNAjZVQ1bCRGLuW",
  "key17": "v66VigRgrCjJ1YCqxBtoHtMwrpoMWgWFWMFcHTv3wJB3GqnoTX5bWb4buyjmYpwv1T4xZ6oMRreG3XjpTK7m5Ri",
  "key18": "4VkDFEhLaJY41kYVJxwrh33k6SKnvTnAKSqnLdZxec1x2HivagypHxZBJ5aosfDA3phYKqp2on7saEfko2LSbY1j",
  "key19": "2ZuURymyomExjA7bod3aDT6rnFPUpCeNnjNxhzXNwa7z4KD1wXWegUtCv7h2WQ6jECy5hGdr5MfXR7JHbatBPJJ1",
  "key20": "5pNehVUfUXZ6Xg2CdpSLy27h3N8RyumsK7wYXQ1R7eZBw9xxHfy1ML5QperqnxZr4U3BDHmjJda2M3RSnpH1aftn",
  "key21": "44N251ruzyRSaZTJ9aXuEh2LB8KbLdKoQisQTY5t8XohKNVmBuU6oMzwneTUb1bke6XNDwoHtUZxkooATCkYeYBS",
  "key22": "3kkyW78qXYVKRy3eBd2h2XiRWtkZoYgdGqYvKUqnZt24E4gAUKjQVKydw1MTRxnrbUwFrqow7LigszkAojwXT8Cd",
  "key23": "AE6zMmeCT1gVXGAUjiGgzBApjDCvJczGfXiKYc2NSVphM2BfmecjCgvy6GNW5h7o8ZxAYCoD42d119pFXVQK9ki",
  "key24": "32KmN2W9sKMCMo4Q3A6BXZAqFR8fqM2JVwQxM7hmqe5ZsvhMVU5QTHAgZgmJn7GTidz5RuJcrKq1TCRbjGmQ9Xoy",
  "key25": "cF5SAVXTLHzhzbkPTP3YMVgcrNJXPSPm2tKKxBxpJwLuawRykcELtTUxHbQvkac3nLu3eMDaoSpwZqjPpiWTzPB",
  "key26": "53eyZJxKmkP2sUc1S45d4hc6VnrbDuv4ySFDJhFRDuPBATTDzxumzLECZhs9zAwo8gryH4S4qX3V9cmMz5ES5WWe",
  "key27": "2AnFvGBQSW8Yxw1KS8CLGFrmhY1788dBcyM1ifCewhxHZUArsUUSBwRXn2f7QpocNcQMgredkagMrSWX2RcmtZZW",
  "key28": "4zh5cNgift93JedzAGT9d6H3NbWLUt6kW8RAJbHhDuQsVifC8ubD3s47hg6WLJtBPDT8kDuADtocPP99wvx7tvk6",
  "key29": "4nSoYw64fBB46UspmshqXbfCYJ9MkGrJKT7ywCMHHVo9uvMQVh8vKR25Ce3iTgzejsEdHwaJUmfFouRVLVrrg7JY"
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
