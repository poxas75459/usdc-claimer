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
    "31W5Nc7TwDtHN1RXxjKb8UoUAgsRqmS57NnCAN9F3DkBC8T5EjMH8N1Rqw8qY8dJ7iMYRudcJQ6P4E2ubNgDW6yX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RYxCPjU8g3PwJAzoN2Y8fXFvqJzPYSCBaUMMG6W2k9BvQiEfdX5XEE9NUJLVBs8RSzSAr1SRqhWrGyUs9rm66SJ",
  "key1": "65ZZB8NZs5bHvtWurjn8kbPhVbhCK3qfcX387S6ahZqSzh1iX13KYecVhhL5dBAPac5Y2cGaEfaptCHpnHHcrALb",
  "key2": "2rgcntPkRG7XP37wEaysrYKiuhVR4gS6V2T3MEiY5ELxy3Ek74F4s9a2Ze7h7fegbJ97JJzsagFVHy7oD1NjcNWj",
  "key3": "2Uqo2w9goe5d29xBueikHPWDD2sEg4yLnnFiHvgEdayGrqynHdT2fAvGxrr8Fm3bq94BRocbDm7QQwCjV1dXw6rb",
  "key4": "5zn7nMkxkRB4brjTXCZQneFPMGDHVxahKc5KZyH1DJUdXKCyqKsDTgLN3QoJzgqJmp4m6JekdaVFQn5ChgTBLvyb",
  "key5": "5GhbZRsT9FqtVws2GLiWWkN5kJCSRhHCvVD7rvEQPbgbtx6xcoTLUA8Z3jyecCh72G9a4A7Vz2RApviDGEDAUVCn",
  "key6": "43tCUr29GCKR6qEHxu9CCLPotGTugSeR4nb6CHqzMitqgAhKUa2cecUEFjXgJVnaA4zWH4AdZZxwmSFYbFj32oN1",
  "key7": "42GXbxFjw1pVtpdjYy3VDjUT3Xp6PmUS2Tn4vw1o5gkEc2hxHmdzMZJnmb2jT84ufqTFzCfGcWav6LNqVYiFVjb2",
  "key8": "5GrcvfaveQe5yazmA3FQ8knEiCPm5aF5etu59ksxE2UZfEhFL8Lj8Ygxa2skSdABhbaeRrE6wkKTNdfXmDKxrxhU",
  "key9": "44DFRyTcDSH5D91Y3esNwTXSoLVZCJjAgSrnSq1xnC6vhPtHptBTGXL38Grz9p6g2b2TM5xy17XHSJteJQiiH35o",
  "key10": "5QYuKEiqHgJscf8k6QeHQKa3N2yiR5v7TAtKMjUtbbLDNWkppRoPyMzcTYHW6VkSmEYzLQNwcoepEG2V16M6onmj",
  "key11": "2xc3QmvyfmMUsnn8dufQGopH9ymDc1fZSCSoSWSrdJQ7ox8iMVfgkc9KVJWP9QzXWSoYRMgGw6cJU3JnPYwJwiJF",
  "key12": "rUZL91jGwfW2s4zvLgqYnEoZAKY9DEDGKLfTA9CJvrFUK3pRisK57wdcUJvhagkdofrZRWQxnv2iWs9EY9sDwbG",
  "key13": "64wU2aAUKug5yqwvFrCL2XiB1r1wrBTeUZ71B5SeUc9R2x6aYWyPTYvHdUjQMwLnW5cbUvRZV44LQDSYQeLN1LUv",
  "key14": "61txBEQiRB1dMR3DL1VACSiV5roRya8NBneVmsyNe8VFKYfK6jrsNRiTUHegk6FbfiyUH8N5pkrdKaHfd4nPGQ4S",
  "key15": "2JYTQArrWDMeABa7LVbd1RL1nmnG9edb5A6uHneCaVmCfHFLwPN2czKJTLNUnyG1U7SMBnN1ozWQFJcvopAuTYis",
  "key16": "3Bfz24A3wce9fdwRpbGZUUcwwsrboP4ZHyZ7SRvsAZXHXc6ErfTt3CJCRJnWKFKxA3YtjnL75UKQGXtKx2isq1Ew",
  "key17": "5pCWwduVbaDQErzM7fXJPfZNtx2vuynmACijooRZFDG5cZLzTkh2meWoqZ4BSqjuyNaYHTwXkTEaVQNUbd45er9H",
  "key18": "2DDLVLHjgojympBoCtNEmqBfMsoY16LN6263jffKmSimXJcg1xRp7tyPtQ1BNpYSKqDA9o6bM2ezAbpHPxEk9W3o",
  "key19": "5YxHxPfgnn22dqrKryKJufMDNGuFtEngeQPPVweda1EQjsN2eLKAco3KHvUgRLuRZGcgHwXAsWx39RXG8cxAdrsT",
  "key20": "Eu9unDZQeY9jdJRkiMYYh7wKtusfU77LytbAtMKnQ9TK9zPXQeM1w5EwGrrzuLZDG3D3nBPe1dTTQDRo5ayCufB",
  "key21": "5toZxAceuq15AJDBBxzXnr8813Q1WYKyqAN1p6iepvhrmJ7zW6sWEx94yaZumhpPFfTtsvYCQ75N2JqFauu18rPS",
  "key22": "ZARnKb5w4vuhHvJUDBPinQhQQsQswBBHSJnqoKsiMmdf1NaqjaHJHkP38npKH4ZdvXBZiMfX84ZZPtbNFSV31PA",
  "key23": "8gM3HkL8QZQFLN8NzJDHsMbGe5Ucc6bvfAp74FWnt5HVxpCeH8XzSdScWq1t6Pq9dVEf3tHsmamoxRLhvGrXoQC",
  "key24": "3vdENREbn8aHGtTUT3hLRnt7v5WGXEDANDT9AMoNQSg3HB92Wbq64kLqUQCVePT7NyxbATPVNzQiTYv7iFkqtzhp",
  "key25": "4sH6ZRh7fb2tzCHZvw9bgrqT1LBPwGA36KQcx9zAsT9XHUTucHuPYfxk5qpfFXnKDe3js1KpdtVJtsX5QdKTfJbM",
  "key26": "5tjRTQCemXFuNfGfzpKyw1tweWcpsnqBAGG4ZujnLu8DBBEBCaWd4QF5QJg469Yy7EqaCK6sfVe1joJrSkTBEVbc",
  "key27": "aY89xfWrYUj8jYRJjiaPnjhVDJBKsFdKaFUrojkmTN12vtCJekxbFC1fhYsWMwv1q4pNvsKwxJRXEPm5nyNsxrw",
  "key28": "4sLQ4LTHH91RpsNRFN2AhbnXj2HWeZva8DyZcwpj92C6hrcdGbcL7zEvAPj4hcUBagqU9fxjPv69q3ZjsjjFduN6",
  "key29": "4Ek43WirCk5C5tp1g7xrMufXNxjcxuBcXnc5o8Xw1Cpym277NKK56G7E8EgfRKMZj6gcCP1CCi1MHeHywbf5e9Li",
  "key30": "5g39FpsWj3z5vcAFP7znt6CHjHuH7s81VVd5XHkZje2xDTeQg4V8TzVCHXAQ8Q8X7RggvdMcQkysSMKVnE7hKDs2",
  "key31": "4dsBxn3aZxxBGpsokos8AUEC9b2uQVLNueT3osRj3pSBxBkzgeYbAnC2RXMeWXGVq6WoHboWXL7uZjBCYoDrR4Ee",
  "key32": "5XPpKi9tZzt3oeXp4BjNeLJ4PAwRheQsVc5rRnFUQzarZYb1nE2z8jh9n34WXhPgyoL17GnSAytQ1fcZ14yuKWPm",
  "key33": "rSRRF8BWX6w48CJtJi9ii2vSjVcMy15yUrJsPa5UGg8po1rwgzZXDxxKjAQTSpWxaGwyn8oYSGHCWLnmznSmmbg",
  "key34": "GT3QxnaA4bs9bXeaPPoQZSxgN7HyLSN5xPKZ35eCEyx2HCqdJufbFTmTD1jeDr6VLNXWrNENsmCNQDCPLvvQqj4",
  "key35": "5io7GHktzEU4QDfZCLv4UbH8sdjfz2nHfo5jZTkpJAxg4tjabg665kHrEGMukH9E9XgwQwKe9nvpAGbo7gU3WTk4",
  "key36": "3r1rJCpRv8ZaZUG2VpkvQCJEYK36xWCGECJiNiFyLxWZkuNvsx1TQ9uadrc54RgvMj9j7Eo37A5xJ7oLTiPVTwRE",
  "key37": "5YCqhKP3hvFVjhQ5xdNTB1gYmKcfmNd1cQKVvoqALLkGrsfQLvDfac8tnv6LDwK83x5wiYRkW2PyBDREopsC1gcx",
  "key38": "XbTSchj1S9fmieXQhU52hftdfFBDM2fb9L4qYzzZkaLvsB8nouFRhr4NVYv74mTM5ULK5JVUvtdwtefwrQxAjJX",
  "key39": "Fr2aDNUJaUh3QaJL6SzgtFkQKirdra3hthkgwzvNpwZLtVZivTEjNfvPDnZ4BbDzGEEesZEtPkW4TtPy66ki2jf",
  "key40": "5tsfmrmKeCdStL9mL2XPV84WrD96286GFBq1KNH2H9MCoznRqzsJ3fTYLGvDjeYus7d3DChK6DMQJeT7PX25s5q7",
  "key41": "3wZ8dXmWUbP7R3FHY5NTGAF7o5YoaRmACe2sMTiPmgPWAnv2T87Hq274ZAWCxergjLHHtwLbYwtqSjJipcwsiU9k",
  "key42": "5tAaAfDpHKreEgyj4wvE5U7sZFQAMEw5ywUUuPCPNJczsTGDQwkq1VKN1RNVAPkFCgoynvst1GHBmTPfeqRvQwV",
  "key43": "582LBJp9aq7hBCgakSCMLXYgBbMYBu8gtM2nbYiqJgwSZuYSojkbBxYLPiqne76SCwS2dq5ezBY8Eg7z53F3U1oV",
  "key44": "4XSkvTLfDzwhj5xrJrgMazhkdkUipZog9eWegijhmGMXEkD1ETZFy8H5RcawGxibVbQDK9mbNvpiCu8ENxmRzcEQ"
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
