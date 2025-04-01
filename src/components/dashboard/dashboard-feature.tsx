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
    "57EcRwSsEctUaRbLeTekjSjaP2W3uQuPdcWcjm63CScL9hXQgQJmHxKuo8mQAVkvwmH5YzWcnyMu7rt9xzs1TTD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ms7JAJkd7jQPF3MgUmWSCD2cGqhjszDMuCcxaDjGxzDgGL4CAgmoXZaYP6AwML4SHJSdStymNHmMkVv5dAhp9pR",
  "key1": "4boaB8faVdh5q1q5iufk7V7JQdyxTHW8WEo4zSt8UHCiZD3PQiqYAzHpHQcM1HiaAbHVKk3XRd8rVc4QuVRtWEqT",
  "key2": "3YnAaCPMQFnLwExrkoQkomNoARJN8sBnMRLQywSwrUsVsdzPfCSC473iPYrqhvYuye8fvJ2KkP5F43QpHEhdUkQG",
  "key3": "QbxoECsZMBtK8UChELWApJcT1uixyL6NUKw3DTaxnpDAktNxftLa4pCNMHgUCCXevWX7ZvQDTh69TQZPkFit41N",
  "key4": "3BiLKcajssDx7PNyWDYrCkhiMDr8Yw9mnZdUAxeJn8NTWrG9T5kF55cH6JfFp5oAPNRUzsBxm6QBni3TKM2GHdPh",
  "key5": "53zpkX4HwtZStAt4roTi5Tg1vW6sGyW3TWB8ePmLoSvkRjtjhykBDe2dns6EEKH2M37cpfd7NSRMKxbaKNVii68V",
  "key6": "4XCfFAcRSciw6APBxXjUsAwX2iMitYc9u5C21s9CEopBtnsdxDp6C6mFGUr4QwxUrww8YnejxenU8LJCiWMwDbZv",
  "key7": "61HfeNBEFqbk7JHdojM1amepSmQdSEb1MhLU6qzHaW7QA58t1o2M6wSFS3PU1NDKTZgz5XyEFzbn9J35KDdEXvtj",
  "key8": "m3xKwDSwrRqTxVwT2e7NRetsvFdievrnt166yK4mzYvHW9dveYnoyS16nZoqTtALkdCEutKg4795RFcNetxxvrg",
  "key9": "3JXaKaDJYKAmwTaJG6WDpoZGijxvHzEVH9iJBpesaQUfUH5SCVMb5CMAB88SVmnsWyGibGCwsxT1i4uUW83Qzxnd",
  "key10": "MvrSF1fYCvhSVWevidafMysfva55VfSK7zVY6rgCeGDUgf69tWjRqqz18XEH68makWFWr8KNi7r7784ukBp9mHw",
  "key11": "4qNyzPSR3Hw8d6PpYytnYy1owgZQ471FCiFKHiZezff1K1Dahtiqt8kaD9WdFiHYsW5tMGVuennN2sUq3nAq4GQp",
  "key12": "5bYSaewF4CFQRdPEi2asUPn4VntrPhBenYFFdb5TrMXCgZKjhobmMrjYE1rNSv7hL1cYDkudtMrzgyXS5JATK8JQ",
  "key13": "aaMa4qikYTj6rN8FvrvVE8Atr4Jy7B1VyYQwk1bV395X3FRGntPrVB6nVPQ5JUB747j7AAbSKG3tzgyXm8KgCJF",
  "key14": "5UfHFNdNuaPHWRwnYzfMSyuWLVBjqHrctshu8VKEhdPR5EpHkyhpBkJT1GJwkCEKHLBfVPi2n8H2xE4KmSGAjUX",
  "key15": "45Mo8EuH7ShTdTDPD9RD1L5Q7HVdh9BqbhaQbFh8fkactPRbzSzBhzxxyNAt2TqFKHpgvYgU99ZSxXHTQRFpNiez",
  "key16": "4HDRiMMXUm2HTsxfsWLqYDJNZLrZBa8i8N1jCZsxheWBR3oRe8CYfakB12binn6uPpj4sPv1LzLi8MDuE8uQDwff",
  "key17": "5KM7gBnaLRBAT2zgyxHHeeVRCpVZHNkA4KzJXdYLeiPk8e49Kso1k6eKJ2wZXJgVPEKzwkfqokNLLkMkmnps86bj",
  "key18": "5j8rLkCfBVoyirfV45zKY7mnDKeBAwaGbz4RhGq98aqch1hnzrm6NrUs5ZsJCr4TzMqe8adbGPwqBA6HFTSj8mzG",
  "key19": "5wfbAYMLiQ4Xs3rEekGf6wkBxeN4BkPhiQ5GLRAzq8QwopGJb24a9yGZWDijX44ApjvGiqzga7oBbMM6BU8CzQ6S",
  "key20": "2vxuXhrKDsQ93Few1YNe3qBvYEvAosahWHj6gtnKg96xjF1xUqGvxZ8o2rb22WnBGQtydE6GCFUYtk8kSDpx9mBD",
  "key21": "44rsJEhNZKR3Q7wNmLE6zA8dBEUmNQJgYeyUoTxtJYsiPiynrWShhLWoynL1o9yyGKWLkAUDs9RgEBYEhkeDMdwi",
  "key22": "3JBSgfXKpYz2EAiQhfeJcXSFqVwhmi9SdjiMevxBEDaqnZ4yXsbACq6sio3T4VepXe6sscavVqsxqWBBkL7ToyES",
  "key23": "5eyDRifwXXgbcoySMbq3v5bGKRdLJfMmjDVBLpTrrpDpX7kKfNgtZ6PzLDen6hRBuVDmQVR3ofkjW7tG9JybnxZD",
  "key24": "3udCfPN76tCB1ivykc8LicBP5ZthwsYWaVeZGC5sw43HYoty9H7aha2WsuYt1WkrR39YG7ErHPmAbVpZMigtP8MJ",
  "key25": "5D7MPBVoGxGiYK6s5Ru1da5iYiLmEPkcbk9yUxhcnsPa7Y4eJSTo9cfe6BQN14tZmMjQJwamQTgj3eohGLXyWmci",
  "key26": "4iTvhWfszYPm3WGYmKbbr3H2jvVN1Ki1WJYX6hKAzoax39vtgVXqx9R9Lzoszp5uGCQveQ9QLDVcQfdZ6TK2kmYx",
  "key27": "3odmpC2WXQLk3PrLHVCvTygwCGeUdZnSyRt2HL7PZ2dmYKe11KfXYeKXSdAQusRErMdT5dZCc2MHksBheZ9hEzW4",
  "key28": "zpBhNLdXYNNQe4eKcF53ei7YnyteYk7Q7SgRhMFdRqXaTPrTGECCXDnFQsqVtVK3hioeVbewPN66hxLy11afYVz",
  "key29": "4ywXEqZrvaT9Xrw9W9d2fYQ1jjUQnFsfazDN5snbEGbX4YnmyMkVTqyay2JefLuQCUmcoBqMstzM4NvrFa1HaPdT",
  "key30": "4RpZJ22j1tXgpjs246efgfqWurwDS9vkpXraQhJMvRJEuYGkKEh8bzEqF4hHa8AnrkieXPum4LPHpq7nxbA56aqu",
  "key31": "zV8VABhQVisd3Ec9CWKt3aAJjAw53Ta7gafYH9xewtKB82VgNbByUgXMyeywwsYihCFdsjYrjPmktniThpyHpkU",
  "key32": "3wWSRK66Liq7xTMr8hs7cGk3ktj9zxGE1fE6P6LjzstzgeoB4TGhCQHpfW5KcirSg1CCuxXKfA65Q9nbSBAuVxn7",
  "key33": "44drkpMdeW59MUdmGGboz3nZkBsHPG55StkDPdVCD491GAvc47FczNXP21HwPwXEeDif53LPjQgTHRT716Q2ngpv"
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
