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
    "3PRa8jj3mF6nfSYDTTDGTRxwYVyreDyCWi4uGugmKwqHyuQLt42WDEzeL7gwGJvWMYKzSzR2xMWL2uyWXyBtuwSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QUpXkiW9hxBr8Zn8GVLkX4ZQ3MLD5mmWF3hBrf69bUVJtJZozLCqwHSvkriaLjapT8uFpnvZDArkuzpQJbVLDsG",
  "key1": "5TtNvC4EzokBdrR38uoR1nWm2yr4T6kFrCpBXX2a3kVYCF7c4TQKWfGsBZSwBzvpUzHU2xkscrEwoQhok9hfUvUh",
  "key2": "5rgTrikH1yWXu6DzjdbVHe69SggAWpXPr2NFPSiJiNtcDoYkFDoA6GYJkihtaaAvyw9YN3CzMX8VvUDZQngMnuRX",
  "key3": "YzbVA96hXv9bjne4Ww51BQACbJfXaxkWPh7nYhZNtj7bzsggwa2mdcDjkEjYy3jNyhd6sGqyg4fXs2kTDu9jwAD",
  "key4": "2ByjLw1y2uczw9GBT4w59notKgxE54AbbVAvobAPgF5c35SW7JyqQbhxM8hwtN3guJTk8jr6YWWYsFpNdc8dEpZm",
  "key5": "aFdfj8ymt5nmAsFGbBGsvzc3dvpDbfFHM6FNEemorcXH6GoubDQLVzitbFifiMrDj4edHj38ePwPonXGjQGHndF",
  "key6": "5pMjcAhHew84nPZ7UrqGaQZYrVy9Ee7AZtscWWfuySq8eiscD9uuhGjcJFVrzCTyefCGriV5KZXCkHJZBDesPkhR",
  "key7": "5iEzsWWyaXDVoynFcPmHa4Zy9jn9bZcYnh11ygn5kaaiKc8nYTypp8Fg1QHmPqYPCwTF7AgtxY38jFzDpMe1AdxU",
  "key8": "3gj1KRbiZ45ign7PuLHA9eNF1nipCqRcts1wGj5T77sEpiCFVJTMYoinUG1uznrAVWVE8tQ77uXjyEX4oaDxCrcT",
  "key9": "3uLkvFj1M1MNzQTUkCGw7FaAVCprWcmPDemPbNhqtt5MzFNEzSNjbgsdD5J1CQAXTnBo6gyD5Qy63KnJrV1GBjtX",
  "key10": "64noC4Dpn22FXUNxGCewZiUKRJssjXz3no84TEXPswrmpUUiTjiUn6PdTEyy3XFB6xzjjuq8JsEdyKSGZKy5D1Ni",
  "key11": "4cVh25SNhgFSPbbi9AB34fiV1KBjWaMqYVsvxvVw2rYiy9y8KVa8Sy6LcKVMP67kbSXcLBj9WCaMbzHFDQ2q61JU",
  "key12": "3tmK7ZfygBvTwEnfGAwypDyTBL6zxy5sPW2nLBExbtHRajAQ7F7h9BDQm12142Lnf8HX2Uz4c3qiDR5hJR4k7eLF",
  "key13": "4qUBifsqQNaUFt1tQcFjPuQUo2WW4oX22JukyPuFpfUXKkDGpp2G1zvN3DNWxy6WLYPDRomAKPjdDijN3NBVqPcE",
  "key14": "kPA36bQYQuhj1ckA5yAFYb1apE3zeicaUuCUB79aPMez3pDoSEEugHkUUGhEv1b9LHTEQw2ng3sRpHHswGUrNc5",
  "key15": "5jjJZAY1Z4ffDrj2YXH5zBvxs9zLsm6HAyXhzDr8fk2u1rVASPPB1XMmoDcPGRHAWZEenXMjvZ55vkieyXjE73t3",
  "key16": "2L91bdwhSxcQGLXZyhsYp91hVMYG4zx3e231HE6TrszhUiLkJi4aGp2gZCwxiGxAvPikLokZsFFH3yPxgU45ZbjK",
  "key17": "sa9xb9pH82ssLfT6tCHZsJ5LWwkFRgdmmi8SSf5VDUmeRDvXKAHPRbA2maSUVzgo54f58V78EdHY6zXLoRafx8g",
  "key18": "3GDzigYLiYFaEdZrWr51jBRoHMJMUQ9wzHKKcRiU2JNUQrLge5sjkJJaKKqJTr4uXJARX9W9kuu7G5eiRrsaRvZn",
  "key19": "4tajYZh7stqi6xtpjJeweJskjQMGFEwrRjvr1vvY6E8zYJkfoTz9o2josVzZU7MN14EJKQnfHw5YvQWXXDKh7b2A",
  "key20": "2nmjCfr5jo3vEwLduQZxafiCxdTjtvmSv1Rx61Zqh3m81pYFSkzZUoZ1RMR5HByvW4Vq137xgDhd37voqsJ5LyD6",
  "key21": "4Sg79DJg7v5wBZ1EQJaeM9dNC82cMRT16mBsE1iN4285KB83y4L9yyUCpEniA7VvZWry4jJLjdZ6ZDxpM2ngfmN6",
  "key22": "3P9QbgwkgQPBqkJ8md5VZAQicpnpjLPeMuSYD63g6GqMyXr4KcDV71t4URSbFugTV2DE4EdPrb8DqGXkYYifbZ9j",
  "key23": "66tifA6Uo46bbzkmh25aPnBCwxGUAr5ZCrjkjruGSsKNDPrBqpPdhvWdXHAnuqM7yygDNjENzKzQ9BmBvQHDHuPx",
  "key24": "3MdJZ4YgtSZ1qXND42yAhGUH7d3fHcFMXFRNH44utXH8xkTabPHjqj8QXNEKndVYhVtfUKGFvNb8pbvAXacyt1n5",
  "key25": "5HAJD6PHzy5gaM8c7cDCPAeuFFCGoYcwhnq6TcYkJCH8TYREJDq3zHpjtLTH6cLX4LqpFuom7tWZehcicsMiXqzF",
  "key26": "4TXLEMxTh2FKmm9vLqkTCe21ggRRic28vPSneMURdiw46WamBiGSEEhbmv9Jb48e7YddUVPuakQq1iDxV3vX9J4y",
  "key27": "3HcNaXDZ1mzni4sZju3yqg3Rwph3EyrNfokn1gDqiAZcwdz4FEKThX2a2wfVU3WWHahpHfkNNNxMjJtzXKwvm7j",
  "key28": "fBMs7bzvoRbosecA9vMDJiatjbtG9Mk7dAbsjhAb9QEprqkWKtUdc2SZqJbk2q6WvhCcBeL2ySERPM1jA2yvjXN",
  "key29": "4513VtNFLWNXunTz19oYbQRYCnq7oBPh1v1b5vjgZjg88mfhCd6d7qBvqgp2jkLEbZLKHqoA1kdV87hai5ULWdyZ",
  "key30": "3QajMZc8Sp7KX5E2U6btPqQzuTusRr9uGf4EXhWJRd9wDCzD9PmZrkLgS43kYz3VT9HHknUUW1TK88rAevbnXTh1",
  "key31": "56Hve2DeTKUCgDvit213PgviGFndSPbX8k6XqSiFRm1NT2YEcV5kGguERdsoQkKRJv8VNCh7HqBRZgyBLb6ABXZH",
  "key32": "vUvJXPpzjwmLdEvy9ggBMyxMx3Mbcm3PFu2k8pGu3fXYTS6sJLv8yHF9AqsNShAmhdySN6f4QCXGBuHLBHUz3vM",
  "key33": "s37UXGNWiehMs3KQsizSrb5KnHwx8SwXHcoJYpt31g2FKQqg1EgDhwoJGQRrkeEtUywZnFp9cCigzHT3DtVt3DY",
  "key34": "65Wwz52omnkevJGJM2rXZxcDVG1P5jbLPu5wQ7FhFKgUKxtJ6aJANqsLdhxZkDJqGiFAjesEVpCCdgEWU9bZQL3T",
  "key35": "31qBNUcXshfLYknDUZ34mDU77LoZMkZvHFtCtkRpWzyEgtapYU9pFGWzd9jhejXk2PahRmybUzxtDJRb7hDMokt7",
  "key36": "5S5qXRw8QCkkAU1RG6QsJAKixuJwLjFy4nPJh1kuz4xHJyK5QqU5TA57hWuS4i5oPeBEq2E2YtukGcK7DYTncFut",
  "key37": "3dKdz5aRdXFLxoK22DMRHn3UJqCoeVVC6rFVqjqd1fZL8ukPb8wjqxtMPuUMk8FeuaQWSS1pkFGpz2dKWwBniJwV",
  "key38": "4GyyrT2sNmpWZhWvv8pBzopFconLZuw3RE9waNnRpJkvinEe4Zt7oVsPxkjbKahxNTWZD3esme3yQMM88JWyRuGA",
  "key39": "5BVWAwH6BZh6dwJ6ng8jg9Mh9hM2Ya3WZoGdZaXU3KbRu6FgJK8aSxhtsamiTA8QySE9EZcissLpiHqp8yqeJgyK",
  "key40": "4BF2aUT4ELvJe6meM8fw5ufAvok5fN8nGXFpfYpMUYT3uPXZ1qfsyY7ZP4dRrQeFA3qq1AjmvM2NMkpwapuYwbCg",
  "key41": "4MyaiWs2zpokesyYfKiwnU7YC6pfGy8J4BiteVccDvFmfNs1WZeUUkVVjZdFG9mhkZRJjn4czZzyyVpXLqAXiium",
  "key42": "3M2ouN46ip9B2dFzsDW9AD4SU5c8KWtF5VEwepszVE37bTxK9Z7Uu6dL5dH3tFbYCrEjeS2qrNGTeeQBcmNFwAbY"
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
