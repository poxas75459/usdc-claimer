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
    "KYMmb9ieX7ZfyskeXznzBEDU8DiVASDjcZJSGCWGjHczym6qTfPP1mo4BTLVWvs9xi7PMU98vzUBVBc8fA3mFbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n7q4CbR93cpPjodoqpQA2bCTCvR5PM4VdwenHYTmT4ma5d5DtqYo9RNdRZdCnqNZZKnLzizEwMM3psjEgQXfwPE",
  "key1": "4CXhhGvDKe7N1n7zkBAhBJBSK16m3bLybf23o8cktMDQQkWBpjU61r8bqAnNasjsrDEtPdLBZKr7XrQyUqMWpVGp",
  "key2": "3PGdWG4eXbJWedecYYzEwqNNkEb4cuxcYon8NN7Cw8MUeEvyc4hXxUYXVXnDyq8PWu9UuLsfRQTNujRTAiviNUfc",
  "key3": "5H8RN66vwF8sz55S6pAw82owcd4GcidzGkopsaz6LEsbXNJWsjqmPcpbvaR9Y9P4fRHfkxJtgBD8nAFTeY2kfvDz",
  "key4": "8NvZVwZoQLm7iWJqCisAqxtzc7y4h8wTxhkvh4E8wYBzNqoYnJzCyWxX6TYbkJMD3xAKBhReGK5kXqz2FVmgCT4",
  "key5": "53FgwY1vWPHNYD9zg8SYX3Rz4xDvMxKdPmXsqLWsEypnsFpu1JqDacVjAgMjc7MWnDKJ5RkgpganCxJqJd2yuwsc",
  "key6": "4fbQG91fGbdJcyFFsYazwSuj2Fi7mUShH4239LTozq4GnucbnSzJXEyWyYj6kTs81PGQiY1JW7nza5RkyQaW8WLx",
  "key7": "5JkmvU5ugWAteYWYXjurAPUFQxtW7wGYRKmdqgZhjkELNkH52EML4FhDBHpFka6Bnbo3KNL6pTUaXDp7ityEa5pK",
  "key8": "5yigFyqLMSd24n1JKwXHriGUKJJMqpY8u9DNP6trKUGDpTuevRHg1WYyGoDRHhTfcxERwmZjCdiprJc881q9YRBr",
  "key9": "3xgBsBkM8GV2SdzEk78J9rMt4PcKghZCgrpaKC2Jde8bZuoiLsg82YL9NBBk659cJSnHJ3aST1K6mAsqBx5CZpmP",
  "key10": "hjkYTUJE2n4Rr3GTftUdyyQVHkJ9f2j6KpWtEzBM11a4kbri8Hi3pwsNodjLnLWob8FiaJ1UuhoJqpPXu6EamNT",
  "key11": "3fDDPdjpgRFrrv6an1Yrg9KStEntrgc4TSVm9xuGejuPLvQp1Qh24XTDRJTwWnQ9vbkbYe9Wpk76p6swi2S1Z2QA",
  "key12": "2LjMdzLSVDuQmSzmRS3WqK51jfP54NtY1d7T8oh141ZMFbjrx827tBwU9WJie2FXNKhFBjLtsafeVFxeYLjMQVkn",
  "key13": "qsfJRojnzuXkFuaPvkwccVPkWwG5YJenLyUT7AmZzR3vgtVutSbzyHqj4RRGaqfvzURXpthNu6A5oeYsF7VdCDT",
  "key14": "4Pvxqx1cupNWmGRVAAuSQrTPsKXRb6XSeo7Y7qqbE67oaR2S9Qf9mpP2oBsXyKCatwFMohrA99pJejqwSABzoGDx",
  "key15": "51mWsgYTZBUakgLf71zT6porsC6voCNoG8X5uEh3qFYksy9gKa5qc6eBkvZGa3deVn3JgAhtfPysUvh73epfxChG",
  "key16": "5MQB6Pn5EBvi6ZTX8TXPsjarvJ6VPQGcrho8gmjVqNYemMa815pFaWC5AfVBwfDtkmXqWAKjhagUs3TFmAdfwWto",
  "key17": "5yjyjLeUuvwsLyXK7WeVYSRHi1oaDNVjDHXvxBmVe2g9wDv7wfCUAEFNzYcfXE7HQXkN6kxD5voZEwL3C4z5umw6",
  "key18": "2woTpJcqARiNZVXzMgKBdHHrvBRgNeWTT9Np7e6q21MvfqStZ7PSeRwcL4Af47R3baabEg5YejvJ8yQ4hs6BQJ5k",
  "key19": "32CZ9LdvNvythpsm5SNvZ85VHPNRM1P1xtYhLNLCojZgFqxxscy72mFNjHWXYSQ6KUZYxvwguJnPhXoC7gehK1Zm",
  "key20": "261jUyHCLCSgCF6N3PFMT4CpAvirntEZpk6iJdcxikcbo1d4GgGN8D4s12CZYkRCaAfaE6S8eRCkv2VHrAaA3h3X",
  "key21": "54EG1mW8mHkoxS7g2WFE3NGUtPFfXgHzTTtM2tXpaQPhSatemJ4w7HLhy3bPE4aqiBxcDoNsLxFUFCiV9oX7etda",
  "key22": "3m3MdHy8meFKx4jKJ1zrjshxZLpSPp7y3nkms7wZPsjTpos8fAzKfgy8Srcw2MJ71ocZAwyG7Vev7RosN2n6qX9N",
  "key23": "4TRpRE7di7arPk6nKZwtNMMm4C72BxE8HpstropXBcspSbzSszmqcq9fmeuFRarEVzy178soxjt7w2we67Ubc9pw",
  "key24": "4vzWUctrMXQyo5N8F9kHLmj5cvAg2rTNJmrwX39tUff3tKvydQKEW5QcTKWbVj89Wopa8JvippyYjjBeFKPTyfWW",
  "key25": "2dii4rc6DTELmdE3JUtUNUZ6imR3fUCsBC7y6TNQY8Fbpgj23X7Degwps3D4ZsnWM7hWmR6HVcA1wSYXfV9wwE3R",
  "key26": "UVUvNe8NSmMw8YPRUpH8sozunKykdyEqstjSjjJXJz67pSEkYax9dG6krFW9WYxJYc34za7pdVJqHU7wbPp5z6J",
  "key27": "HZwedCVjKZSS9pboZzfYPFHNmJeVKyrD4DrvdRJFYGrWF77HbQExDaCU5u3CPEmt475vRyQb7XqnJGn1JXUfAsS",
  "key28": "2fBxg8q2mjKmSkVpsJh2FRz4JKEuy1riKMDGmgjzChEREcqrPBG7qxyjEy3NRKuU9ymH7bpMmYWqy5kUa4qwAvYr",
  "key29": "4dAYRPizUG1Z1Ra9pH5TY9yGpGzzK6ZEchpdCaykUM7n6gH99ervHDNak99e8t4XNy9BVGsEAodPPQULc5bzW7rQ",
  "key30": "VBQbvygwFiVTGBeABpSw2H372NtV3bMnh3WFXvmCikiW9sbAeDYQWWsEYMfeZUDJvKdd4NtBef6bsmiYQv4Fmkj",
  "key31": "3yZmuF11nLYvyqR3KX9rRjXqfSNpMR6Fon1YrkHNEuBY3RvDuFX4vkfXehsb7VtiDhSPbChJ9moMf87ibiFEeG9F",
  "key32": "5fMDJHrV7HJ1oLh24aHfb4jaezffnZRnr5y3j5SNRf8hzuSGyP9keacubj6aXKLzSwqwxdH1UqZAsHoLRv2qy51t",
  "key33": "3E4vfYMDdq1camBFaJsnK8RVfhwE91i6sE9ewkk3UpN66dDy3WgmfAzJ7UdvAWYow2Lmra2q6QAayFE1BCR88WRo",
  "key34": "4XtbVprwv5UZwouMLRzgMmZmPZ7ftTezZQFFpj7aMPh4EJ8pq3HBuAesBC3TbUgE7MPJpibGieoxsfJf2XNXiudg",
  "key35": "5zoYckCBboTF4busyTmBjucHHHfx54CCE2prASWrFhJDKAuCeui6demx2MeDKbGC2GjBaGG42zCzuvMocSceiJur",
  "key36": "3DqQuJ3vyS5ekSqUGDzzR5k8zYBGRraduGmiE1cdQKHs4hKqVgg4s2eKmHDj1WCryb8bThgYDrq2owyuWRiCxuZr",
  "key37": "3LJd6jEejQb3yQc3qSrc28MwCcCH1F2vHGcHPGxP7kFAKXPtbpM5x9gycdP2zwnx17q9r9p3wo8wwenzFBGzqYWc",
  "key38": "4AFrkBaX6xoN6qr3csqqYrY7cnbaZnrjeZAP29aHVXmudkNe1JFz7hX3iXha8or5Djen9Vw9NqgQ9YsV1pWvNfRG"
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
