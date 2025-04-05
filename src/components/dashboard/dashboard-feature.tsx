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
    "yw5e8BNFk4sAmef6d52zsj8EjmXHspHNVnDxZwGg7FVHz4dwdrFXyXkyidSdUF4SPcVXBtRLFPGWHDPuziLxMUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G7Z3qNb8R48AiAsFe7M6WYREBRnHB3s177NDvCQomaD6U2dWi9j4fCmmEXbe4kjLdL8acXDmEePekCQrCd1ocBp",
  "key1": "589JoVZYvTpSaPvdt1ChLKFZA5QxMj4LHNUhit9w9Ps5aSNSoAhESJXVgUdP54iJ2pbRopnCLQTzrc8yZ45jPEw3",
  "key2": "3gZERaRQfoHnb9xA38i7hwmrVbVYfdeAuSdpY3CVxnP9upJxYsDD5azzZ7yz6bD4enmCzxPZvLREmX59Cuk71Lj7",
  "key3": "5VyWVmSFprLZvcQTUf5PtnNKJUmvnfUHxysRZBAp2pSuEfAPW6rZKkcC6cwmS4YpGxXbFvRKCtoWNAkYsaskL7cE",
  "key4": "4ashBvLnEgQWZdV9ETgd6vCuLbXVqNpTmuvqT9qigKphg6XqEhcLnKpzEVHxJWGU4cqG6ZfcctJ8UcqDichs77As",
  "key5": "3vQrkfKrzFvNsqVzYWiuuFbZLkrmJcQWA96FtKN83u6naEmjTKk3rFjxr8dRQHYuvEX7VMh2Qj7rhWRVVu259muz",
  "key6": "8LAs6JNd1Th1vdrP8G6p8BL1kg8mHCro4JLWbZh8NNw8kcNBA6HH5ZqibMRhndMQM99JApdo35iJuLqRtnvfCGL",
  "key7": "4qR4GDCh68HNTFzCVcJCVvFgCFsxKXgWHUScs2YzfGoZNhNqecrAHrGYxvovM6WndEQUSjEw6nQ6Fdd98mzRSvuN",
  "key8": "2KF7UhiMEptBVafjBbzxFCgZqkfX6DCxGRqsuftHbQdUF4Pt1JcdyTjgnvuw9qS1GGJJr3mh1BmoKGNUsABq1stu",
  "key9": "ZKRLS4wviM5woD8tAWJoreqAukbqXSrXN3gV7Wzq2g9gVraE6iH8poAtjU6KvZFzG4gBuJzXGi9B6awdDXo3ZHE",
  "key10": "nw1kog5iP98quNmAWdK1NSgDf9cFaH9vHUin6JGmf4E2swuCpcGnZQ5DKQnppRM4xxNczFoXZPwSVZfrLeCGo8o",
  "key11": "2pgvMTShUrCvRTd3EgRW7twRHAaJPUm6TeQBbLmN7pqFd7NmQbFq4WaVpr9KcP98gCJw5MmkB4CR6PuKBXiiHhvn",
  "key12": "5BViSCCDBiFFfJJmer1irc6e1U9YtoRvkBou2WWhhhnF1dTsooKaSfvxNX5LLBTxbdTJfCZS8mdAx23m8mQjsAiY",
  "key13": "2PJ9w8gc9kbuA9ia3FiywWWx3DELnx51AWzvD7NRQCabjerdCwVDNUDqzVHV5rto9wPsnM8xHWLLevnZR9obYg4C",
  "key14": "5svUVuMRxpMph9qcVqQavFsmTbNYUyPEm3bx7dRtaGLs4Kum3VsVHEDuPWPg1tBtLNhknHKkMtzdJRm9GsJXyKv",
  "key15": "61yPnotoZ9XS9vg3UYQvkRFFwJJN5R6jMHCv875HKxK8bwyTjg2fqtywTCyU8RaemZocSpLioqWRoAzsnz8ia1Gu",
  "key16": "5noYqkeVJNu15Eqa8y78ofrYbSDMFxgZio5qc5PVXhvzt6wpzxLrcFL2aBSWhGZco7JLYn1q8eXN1SDNQ1dhD7Do",
  "key17": "4yh4kRjZwGwQWuUFKqMDRNKdWV9ceyzrEgPBjiTdH7vWCtP3FVbxV2wSfUvmjqS4CvQpBe4DceENTQyJGub6jqpV",
  "key18": "2ST5ZDCwU45oggWuwqAXVmmC1QUV1FU7cjVp4Tz5wdMDt3c1HW2Gc4Qm9KeQer6dopeVaKgi9RevMxtSTpFatAmj",
  "key19": "VCAUJaehE33fxW4oqgPHhDY9MoNzC2RpQXdWLzm4gUTptDq3bnzifvPn8wwPQ8VYpHsQEJ6XJM4GuauvvQMrT49",
  "key20": "4osYsrZ7cVxWfpYwHjbdxU5dbqYR4AtHiiP5LW1y5PagfNmSAcJXmnn8KgqUpMVZcbVhrErG9v69REAv2Y9qYNmw",
  "key21": "3J8AEvdK5CzFKLM2U4ZjW2i2mnwkqPhWmRxqfcdsVEuyb7WQ77KeS6UXq1JaeWDrsLf3R2dbqZdrx7ZvJSdNoAg7",
  "key22": "5KUrefNchDWu8iE2GG5db8Fuv6TyfFCVmVPmz4PKztQTpCArAwqy4HuhkHQDyLViQUktbEFSx5LYfbMoTWxTXLwf",
  "key23": "2hmURJc83WiQuQxmkLvJvgAwDJbXkJti7kt6hgTCNMmZ3bSEMLYxTZHmVQJx8ko841hHGkNenHNQPpiGBWodNLvh",
  "key24": "2t9uaVAMYDGZUaJeuansffd4bMibY7aCGuH5NGU5Uh1j5G6s1paLyRAyjizYBFXEtXkXjbhKwqkMphNNzBUMcHQH",
  "key25": "5fhHuwZhZDSm5U4ogamn2rYzGiAVh7xbGkudafT39c68uZkzXtM4TP9DQpCd4mwUpLbBvBupdzxkXRszhmjMZghZ",
  "key26": "SEPGvwkw9YFw4qgkAzjzBG4PR5ZVASYh3FBzhwP3NEaNzfbT5GzMAvfsVGsJ4rXL4byZdkCQUtAwvsMVa6PcwZG",
  "key27": "19b8LVT5sL4oQhuPd72wrzAcW4Nf6Vkeoz3bPmE99e5VRTfr6p7K2ExRuNqiD2fK7Tfm4w5yPv4pdxCQMmCSQCk",
  "key28": "4Rp43Qhs6CNL1EG9xcvrkPMwxEzUYPLTUbzmQkUY5SzxavJwKK4d8ehoLaW5idDopHgaS6xAr7KPfwua6faq1vam",
  "key29": "4pGDTeuX6dSdaQVUJh37BeZWEHXBbyZA83PCgKyYuJMrjQgxEp5ULbPvusHxh45kuaU4y7Jr45xQ7WxJmABtRHPg",
  "key30": "2WoitWgdeCzzmC1AaK8YFTVXqJwrUu1tMLJmdPydzvG3VS9Eza7zmuDxKcfD9ditLN9WWXG7gbHKKG4BfPJQvnMu",
  "key31": "4iVVKM7U5eGDjbSZbphe74UizShTnUwVwZ6vLanQR7JrdNeMaJ8w33gf1Y6uzJGt1amuGLgzTfeNyXZHYXG6UfCS",
  "key32": "2yJQxG1dmJxfuyZfN9QTzdh4xXThcDGGi7KRXqBeCzyPWjyq1s9Y24cvtYeBnTyT9hMQ9n3a137iPrJRPuD18vWB",
  "key33": "zznC1KZ8HwAYpoQ79e36Bfr6b9kv7JT51zuDhHADncy3qvZkRXUTc4kE9U3Sw38Zu2j7LURRzY64pUaCzYV8nHX",
  "key34": "5T6mocKKtRzmNSe2eiMt89mGwc4BJRDzA6hN435dpoeKa9wpU3Km8ziiKz7Usxajmxp4e5XxcCf2FQffAH7JmcUo",
  "key35": "3d8rSxW1fVq4rBsFTnhVcS4JgrFLLGkEkCexSABLJzaT6xtYT6NCXtsJdvcUGjk32jbD3DSF6RQWBpKPaJGFxwNy",
  "key36": "4Jj5xk82zwx33jkHVrvBudSYAQdyLFfzPASntZy9Tr3o1Huc9Xqb59nhoiKUUA9rrJ3QaBTsK5BtNdEDA4HWuLco",
  "key37": "3WQeHXPpSNSv6H2ENTtMuCus4czCKoF263tXn3ozMNz9yWFBWpRWL8g7A5EjVs5EV69CkrHKtzP1ebS3T45W4aGL",
  "key38": "4EGSfzznhmvJpTNGpfCTV2AV4FBxiWfc3nBRH6VhwtGBpZVLEfXSabb7R1c8mGoAxFjBoYacp6Gtos8XfLMyJCUp",
  "key39": "2CcZiNKMLpL6ztP5EnDbdK1bazccAjZEF1nQaDeMnwMRhHh18kvCPmv6b1b8U6wFQGBZ8rLfe3rycXNNzqbxhcBM",
  "key40": "5em4LRVzBs122Lbs8DQP49TNHVakn9JW1KeaVJcACQTcK3vSXsjLzdkX6VqqKQgmUXH5rhZUMcqeLfKhUKV5Xpfr",
  "key41": "4rQ8U65KCABFwMtL3iPmaQGkcTy1hpA1sDWf3ysSL2A4oxKae4bBuMRGBVtPppFE3atsV7sBWic3fcfySdvPQ48f",
  "key42": "4F1dcRSMSB8pQyT1apJ8wAxR44VYM9wAFzcDFpRWMZ7PCtGK7Ntg4vhUGdKDVha3ATbFrN2bjpPjoqc8NYmyKbb3",
  "key43": "57VzhKviMVdDrsAiGaTpj8LMAgg7DCSv3UecY4soFHxwjqQdEfKSBL9R8B7X3s8U6s7LB4Liumo4ytssTTZr3wp6"
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
