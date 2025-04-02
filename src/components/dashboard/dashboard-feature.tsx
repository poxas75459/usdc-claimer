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
    "3DfAXqbQ985N8EuXY9thhPwkuAqoZdRU7GqoENraCaQGZtwgTV3NouYqzPXYDD1XVhKRuRQgK15yJ3rfNQHS8kED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cBDVdFmeGqbKwiqvoNvGDRjBupscdDbfB2Raz8sbU6RzUzx7Q2jN9GmvAWfVHxCEfWxDDR8tcLpy8RLZ7Gq6nUG",
  "key1": "2K9YhXBRdbfWonj9K9hT5QPpPaLdWY2yV842HRo5FDV7YfXHv4ToaSqWsd8S4Ghg9WbrgnvPZSddkjAgd5WwTwVS",
  "key2": "2Nmdj4vb442EQTTVKC7zYQRtuYrXsL3A3ARf3igfcYc1hMp8AgxXvjvpmHzoRUL7q32d2UJepTySk4XGGqVtpruE",
  "key3": "tVSTV5zJNNBdSp6SDvVZW3aFhfWa7g4fu2x3sEBtm9J7q9AGiUaADgSsbtXERKkZXuSmSUTQKNdyrTHiCdNvUom",
  "key4": "4Fgqst2dcZEjPXbx8tkAqhReRhWdCXsqhjNJ12XDk269EuSCoPE2URjrh7JZV2DfVLgat6UdKip2sdaYC3NRgKQi",
  "key5": "4HmYJHDeczxjRXoXpgo2cvvp9Xv58yaitLexopBQNQ7ocH6zcLRMtVC21FFGFzuFVxcGy55HofhL3AaBMh8kwRtn",
  "key6": "2vPynGg37HehK8m4oAZ7sKgWuckqrjc2K1ETRV7toz8yZQ2s2eb6sveJ3k5c7F6GXa7bfCM3XfmytNQjjKEW99kB",
  "key7": "4wS1xV3SWqxNGW9AyoJYTQ5wXc7x42iJi2GdoYZEm9PVWWqdaPtbpxrM1AJPBbA57zq7UNQh3qt6tZaUfGRLxWK",
  "key8": "5e7Qewfzm77CN5GRjV5iyqLa5RFbz7HJqHup1fzzX3jjj1Fdwo1H4pPc5Ytvd4Fat75Qqq176PX4Dk6bVvawonPw",
  "key9": "67GY8fd45svywL5osdXoFE2kCnSAiBzspnQbeRE2GRLFhFxzHL2LX4j75spridLgFNBfx6x1Sx6ZvG1Nb4HY32pp",
  "key10": "3iadEaCNiLpejwVZKwcNb57gvuwcg4h4hmb6aUqhsYBCQSiAQYATsVz8Wd7vTbit9YQb6XxUrAe1wZ7KBbMs2YbZ",
  "key11": "3yX6z2y4uHGMedookKoLPEgmtScEpUPPX9T5gA2QkqEQgSiFbroWTRgkGT9nLshqKnjR2iVjukKyQhSRiW7z4qsE",
  "key12": "uHG9Yg8YKVTqUhe1gPTJakry6QY3Spg9jnJsx1YkjjdNYe9GrtWX8DGfNyV4fdeXqkFYWjB7ftLQnSfcpCi6D2W",
  "key13": "zFQXuk9RAC749RqKW1JXnK5TTBs2pFrGJ7ChvzSQNe7qZfm3NMt78AB7zb498VTBunSg3Ki8Z2fTFoEyTLx6k9K",
  "key14": "kQZqGnFr7xMsoPRVonL2SLur6pxNDQq6UPs7DTzirnYppYMXUtyLUTkgwcpsVMtbwvqz96pk3kAHSm2mHPstLq3",
  "key15": "3ayoDpXg9KEgZwuZXrQASBirxrZjFFngTJh6y8DxfwKh86An3fUNiyZN2xnbjeCysYsbgDTe9KDttMaBvMY8ofUB",
  "key16": "5ohvw738VYrtyXHNwTF4DDnhY7nMWW27pDuoibeBYY3bV6rK4iCsaPjenGFLpoBALYjFfHrpkYvQBYXLybgfwA2e",
  "key17": "4TUSmqUqbuRQwduUkdFnv8SzUjhBUxpoBf4ceDHL3TBx7MiEna84U78cgYHSLA4ef1VcaQdA7yLeFxyGR9oxv4qh",
  "key18": "3CXUwYgEi1qjK4VGyEVaXw17WFCEmumTRXZXqJohoffPXeHFJgXAhFpYdtHeeQ6tSkdCihrzCzqVev4emZ6uG9gH",
  "key19": "U145y3fWFcRnkSjuj8pUsEPsa9eudPxxedJ1vbVoqh897a4wE1N8WHSyKfduXf9NfgGMYwszyTmjgiEZExfnSAQ",
  "key20": "25Av1J5G3wuPNJw1JmiSB42Um3JebwMSoRkupxr54cXaBQkUqWmnaT7oeupBLmSZxfhBGh1efWkmYr9nViZFCSJu",
  "key21": "2hkBxA5qqT57FdT95omhnSvCzZFcmFfgpg49u8JTKZwL8wLFnuGS8aUdKRz9y1pbaEARy6Hj7zUUPuyQi7aGhUj9",
  "key22": "4mA1hGfUhHp2nK92WrKqGsRHcZu3VkZAqycKia6euu744CiJrN91mb987ezRxXZSe2AWBSf4gE8pahPbpKPNLXDY",
  "key23": "4r36s9mpWbzmb3MJD2JjCt7jBR2yLugVGDju9MA3H46VaetQutf7FrJCDUhyyWf9JUfHHsScwRouGrSbBCQmY8u4",
  "key24": "AHaTzM6ZJGsJ8tsqN6DiA3JYqoVnC7NX2G7aNjp4zqvixWzRr32Qc5T5pwdzPbT61DoMvi9utfnH6ABgxennU8f",
  "key25": "2rJc22oLbEHH47vcapgzyMwszdocJS2cr3VegrVS1aLpHUBBTLEQxgPd1Qcxveue593hPG7VQJBSNE3GLYxhmvaB",
  "key26": "24RvhECaH81DttE4kTwmwnsDUxvFmRTxM122LBGXUgNih1LDu2EjFJ1KtLG9fbCCNCJvB6Wsbwsu9MKxXvbBqwFM",
  "key27": "pSD6d8f71DnrUXHuLfAzxEN1yLr1Tqvh5WNxnoPmwrsUhvgSSLSNvmX83tAx58EbugiyDwsDqBbTqwrKi8RBdTs",
  "key28": "5czSLFbTtxUmPzxhBDbsgnVtf6tgTmNWjqJZ1esSvGigCRb5dVLaoDJQbJ4nScXkmvEVD6RSSCxEsRYQ7S6GrXaE",
  "key29": "32bduU8ftj1JWYNy2UmFDUUhif41PjXASvsa3AG6wKxo3cVmMAusfgUuSiiSyxArJTmPThAYav3gSkRq3zUDVprs",
  "key30": "4SBDUPzHCRRgvGd8fQQvHeYGC4wjmb3EGtuFLHwqKzfPUEsF1uK7iku6NXgg9VjShkAXRXiGEtmB872VZSLa2YW7",
  "key31": "3R5bDXvHynpiADRUW2mWVSW4HPmTA7fHbTFLnuTJjoxBdn7aeuZntsfGayqBcZ2mTgyfofRevTUHMA7Bgx8mt3AT",
  "key32": "GwLs98hP8WFez2fsvsazY8bGzzFHpo8QLdE8NpGHxYymWpR8ZjWx8CpXVuKGG5PRd2xWJQaPA1EGkN49atuDURS",
  "key33": "2e7o9ZiL2iBeqovjoMsE9S2Yh98m37z4JNn2soQJFyjtKuTdB7n4ikyJiHKVVkKmKa5ZgxqDQtF72FXT4HVByovv",
  "key34": "TnVNkwYpLDaKxQeE1Q79wucU2rwP3onoAyQkh1NmcgqdyqRAtGremgnn7onderYBySxmTzfTKXavZhBZeUEAQ87",
  "key35": "3eUfBHw4FVHkSQQHYz3pU28rP1kTfpgH7naZhYzrPm6egVmSkjv99mMA5B4FfdZmRmvETkP4JeXU5ciTLs1yHzQ2",
  "key36": "4sG7JnfE7bcmYseHnATjLGJ7ygcAFNMrZigpsGTKvuXPaE9yTH2g4sNsuT4miAGvFJZtZdBETSspZWEaXyfbu4if",
  "key37": "3mmSmRZs14TgMiWh7Vo2JZdr2obkvoiQKtnKXSCJjJ66zMETRXDQHxiz4kjCsfkBkBt27ayU16uFGA9nXLyz6LtJ",
  "key38": "5KCBmjzGcoPMW8pBsTfUZBCCrJfVVqTTgRPEzJPqw4E859AP5LtPk49GxUVdDQPfXqTaA9mknj6EehPVwSA3uAVW",
  "key39": "3VWKrzJfBh3sjAWhR3yYDtKxmNshr1qoQJvNWQQ7KHPyYvG1vH5p4JyGM4pdBozdCVJ1XUTzVV3N2JPMTKSZjTyC",
  "key40": "iST9GWYSZeRHq5YDJ7eUjtHat9oCfjXNecwtAtiE1kSZ2S749spAufjJvkJLRL7kvRMndUz87RKWcu9wG9thTHm",
  "key41": "3B9FXU7nT3wDVDr2qpxpa9KPwtTrUxhYE4MXvXiDnBJKLvUdGReAA5AW6L1ynQgCV7rgX4qXRAK499LxZvK3Krm8",
  "key42": "A3PjD61iZyXBeyjR79y4H44L5rjKhZvAb8V7RbgTRVbXfrVi4Yrv4FSGSZ5kuim2XmBBNbftuiPu1gcGW4qLsLL",
  "key43": "8j7ARaRMQVCiPT1pyxNcn2sKh47pYjpHwmpxXe3qL7uXm7TBxf4UA7Pt1buTAmWEcYvmawiyctgAyaUZKrTEwZA",
  "key44": "5KWVHwW3sWpYs8iQQjkapJ6qp2SLRb74wfqjmNZhz2pCuVXDeK1EJCwWWLx2FKP23jBwa5GGrNdqnZcrwPAJwFNz",
  "key45": "PWuU4zJzRQtgrKsp7mj35WYjqGxkXiVQhzRXde44ut7j6Szad2iM1e9yZABtGhRoqcJ5VySPYUnPH7DzTXUqfr8",
  "key46": "2ba8hvpnAqFPcpQd4HbvNW17fZLBEtZwErUW5aHaTvKUHtFBAjhuuVTJynF7nqZ2jCEjAEK91jKCZq9GJvw4tDq1",
  "key47": "HYnRXSapjP1x3MvVYJBsGpZZZMNm8LaX1fqgxVTrMqCK9PfjDzzQfMRvw685n8sQSY1vAcuTDHLrXhPWtouKXfG"
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
