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
    "42J6ZcGgr6u1yVPZ9YBUczsz2ZegXZ1fnm3PwWNpieLnnegQJ1SypooZz3TdPEGyqitStaivNpGNXRDWAvWjp9HZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XS3eg3bVDcu7dpZYhvAs8rPA3H3YwFR1UyXjgEHdcjRAhh2MEa5DuzC7y9N2nfoEYxzXUytGbczUaNynk5tmP1r",
  "key1": "2LTVktKJVRwwJywDxxPcbtFAWtqr2P8uR4aH7qseYgPk3v719vT3EsCarL8uK3cBoqqryF9cPCepurYUN384Bjuk",
  "key2": "32sJ7qMh7KHYrU2pNcDcbaFcxq8FPzuhRo9b195uuRAMjiHgPNageZFUwwLXDkB5G65pmYZuDJ5P3DyqCykyGVzx",
  "key3": "B1w6hYVnD4SV5Ei5oXGdFgBmWRYaWQaYupHs1L7cYaq53Yi19epCdtKjEmp4699C4MBMzBVHME47pvNvSkF5Q2T",
  "key4": "4HonjJnNHUtd26UBXk5Ehiuy9QWT1wL94URjqoT14fiXAGQ3ap28CTWmZdntcqjeN6YzUYgTZKxqr7wQFdUHjnVa",
  "key5": "46Xo8qV3CaUkPLVbuT44KVNJXMscbb5YiStuMLg1zFb7DyUqdhtU73dZ7e2X1YFzjyeKusjp5UvWPWsyiM1apt9R",
  "key6": "4VUvUUN952KZV4bjC4TU2jNjqMA6BkMbRKXjmmKZxWpdUXqGj3rAac32DZZzk6DUWCJdoVKv5ZWY5dUvetJdVgNz",
  "key7": "5NN1ppnQeA9vhnavioex5qenJZvd3g4pFvaUQCAdciXnhrmcS1ecumLbwwHusVQSLsamoHoe7K6wqpJpofBFH8gj",
  "key8": "5rGaG4BY2LKG6ADpJKB4HBsH5rypJejgzjAQZ5oWP62J8gGiZ64fZYSixhZ5maUoSPHmjGXG99LGWHxXyM4UY6pz",
  "key9": "648oEMCuAFyHNn254xjqsCXbCQjaj1NVKUCDnZVxNk7Piz3gk8E84KpETiFLxJkRjSRVdVzHsbg9EVThp4buzAhD",
  "key10": "2hgFWTJZsrCWn8SgJ1oyXUEQzCbdt7qyNXo6T2c9ybiih4SjFcdu5V7j5nXQ2L1siuEgmBHMaQwu5sccGRc93dzJ",
  "key11": "4AXLnGytg2LLp68RtnWJe7SMHYvmsjEZZWqDuEyM5uFFAp7JGmRbxzV42Xu5QqLwoCQmMnv31hbRyovrDg9KvcSb",
  "key12": "3uohsC5em43VAQ44Z65EEVZPFESpzcivCBWxo9WWGaxUWeo9hncf5szqrx1pr6mXmyBKn6PNnfhxUNQGDLjvwy5H",
  "key13": "GC2affYhYdjfGHAJJdbzUiQqEvByaFNgeyAjiichwQBS6ubbyfMZpeJcmtuRuPBUaG3815evj5LJ1nzBwBbEyZa",
  "key14": "4xA39NKE5f9nQJd8T8sVzfWrd9d8RHW26brskDVNGPpP71ah1a9HmgZyVF6spWN35DtWBaaucQEtWcEEuMoQ1MWz",
  "key15": "8wpaZsbCfWwzvMCGcHmm5rDVbwfzipi6uoM7UoRzCBbbVaqhWvxWTkbqa1gNUNLQRgTW15JShLpApyjarHtrETV",
  "key16": "5NJbkScppSRMkKfNPhmKXSPZ9pcP3RZdw8tTb3LuESW8xCrCwhbdcEh4bMXWSbuNyxdu8hwsbMF1rp7eLXwoemWX",
  "key17": "2xCxkZWSorY4TSZyWqp5qFrYSY9jiU3S5iNRmANyrxuXoCManydeXxre1UkCVAo4DbEvApEQczpCq8vBezpjsn8i",
  "key18": "3WLtLdJxFWij22k2rQ1RgVe73Nwz3RYQVEao3ButJwT1s9z6mTwf7PzQeY7iCSdWEdeWPgoeX3EAAAVLzpQ5Lrr7",
  "key19": "36kDT5JotTVvWPNBJtrZHkwrWSjBdJzdgTTJX9MdEBkc8FVh5NZaNvJ17UwGLfjV4CQvFxnJnnqUokS5oNqQ8tub",
  "key20": "ATjULMmaCaZqHwv15Jfkws3hZZS967dyhU5vNL53RWQ7E1A9LeA4W35h27MJAzr6Czmp5DZ4VpVc9BdtdQXk5aL",
  "key21": "T9FB5vuhZ16YDmjNQfYhSYYqXKa94Vc4xcr7aNowrzfCocmDZSXnHXwq89biAU6SEuLyRjNvodXQWfhr2SH4ZTz",
  "key22": "2F9cvyPgW9tqxWrgBeKNtoqdJYuzNbnbRAnKypZ2xrdBR77spopCatGPW5AudAXU1UJc1MaAGBqeixKNuHJern8H",
  "key23": "4VnW4UVTmfx1oeB8MAkxmYUVHJ6dFALfabpUZt1xTRtmCMrqhh8Loddjp6Mvd6LztnG917EHzniQzQxKWZZQHDHy",
  "key24": "2bD9Ct31sTLksYwVsKxEu1sAKt7gn9TPr8nom6hmqmvTmcyWKqvPjjJNfyA2LWaHQFqnSpoaoPrnawVS1dS1deTw",
  "key25": "5udEbYWXP6jHd9KHJpGhtr1VPzkcsR5d3bCDbWtjyQs4HQ2zi9M8KTZWmCvxGstu61FdnVuvWMLVNLcGcLRGjDSa",
  "key26": "2LnZNZHXEzaYq164wCsB2Dzn9fBgHJWug7rwLx1Eoptg2LmwjaKpSxRhtS2rt6esxMcsm1ZJJitioowUfSEEwBRL",
  "key27": "uJbD4qEoWxQEMCAdJfRTvR7Fqbdp9MnUhN9mhtHzufQC3z4DeS6mtt2v3umamLaKcAGF62E85A4TNvgpqHSctJs",
  "key28": "3ZfPqBQR3zLD6rRDte1QiXvvqekedcxQJ7QeTdqjS4VaiuKShmYqgv31otuAAtiqB7tmTpbRzj8TN2ATEEYhpL5f",
  "key29": "4RnKgwLQ3qm4M5oA87fDYCfCYEMhY14GwLSAhYd5kuKdLWMQwuwQziCbfVqtkbnLEgeQbYP1BwKzmiy7Wgtz7AKr",
  "key30": "4iRUfex9bVp4HFkmXujdgesAzMNZpDNVm1LsbzW4nCDW2a7s84oa3MUdup7SfSsc8VQfLcRHX5iTMH2dEoqbuo8R",
  "key31": "2VZ88Vw8G9Myhbn3ubNoaGAgQdDuWnwpR6osdKSoNTP7Nh6PoGCiK1bh2Av4mpcnPyzDKkaPHgiT2AwUSPbhWVFc",
  "key32": "Kq1NSEwtLdAt5XxRBdmHWXUWBqm4uUuMKsppLzHwxJMX22VpYV8hY4j3n9Wna2jFtthV2zHdpQ1UhuifPNHLfYW",
  "key33": "522PCvkE8hdpY39UyMujRweNpMsm9WxjsDYWQD1crB3Wnck2y8pVbRtLsRqTujLk9eEzGvnvFJcWJE3JwNvZPAMB"
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
