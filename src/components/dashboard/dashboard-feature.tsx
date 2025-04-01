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
    "PxGdqgCHrjTEJBYqa2gGnWHPQaMADqnYGNwi6EhMFrcFoX2R3MgLGnheL3c55itohzsDdgmEHr8o2qSquPhXZDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LvZknMbxbZbWxnxtER2ciXvoMafNutEufpfDKd2qwhX4eXZSKxm5egv4qpaxnuUUCHnqebpwXWxa2pwrGYMDhzm",
  "key1": "28fAfEsd21jkKPqaNbTKNP3CPtncQHpatWSdkup8VBupQb58FQnFXhmwYVdCGJUwB1XUdaWc5wFAiV5UDF7zHaQg",
  "key2": "4G3jiT6kERLsoDaH2hctCP2t5VhH4WSoas99vjdkig1L2WsmjB2vNHLbAUYM7T9uVbbY84N46ZgxZmfikaPqsR6L",
  "key3": "3YwRXH47AV2e2wnDm16bXBAoKvAE8YCzbdHwrUBeo41CZcQqWt4WQatVxJaEJkhuXoEa12MYj8ctWbW5H8LzaLgN",
  "key4": "5frN6r2w5QkUhB4LTnQF1sJ6UQ6vVLxGZKGnobGJ5nqDGbcYTsiVvcFdTAGvebvwP1obsd5uWq6mk4hrNEXZphDr",
  "key5": "4KwAPFBWYFMWx4rjHemXzmwfUQSewBv5vCS97V91TS2LEW4fCv2C6JAxtvMjUqc6xAxuR71p9DUWGvrkCTEtzGcU",
  "key6": "3YjhDmF8LHR4DkD22jXH4FTjvV2i9UafYY2WPUcibc2BJdLL1UFfVf4xgMcxsqBV6zPJsDh1tM2GwHtf7kcsuwxH",
  "key7": "3bmVhrDZrnXFkAAb74iLrKDpLX1n8Ydu9AtFk8aRwoc7wgepk3xFAbdQdVFskTzKMWtpiA4ndRy7uYjsE38DB7Uh",
  "key8": "5jVJdvgZBpvySm7rBbNXdNdr9N6Y7kFxktdxEZB1EZokeDJCtZV8z7nkoKPDpCKeFkxFWPBwaPTNATaqrzqbkSXV",
  "key9": "4wCt2QeQxoHkEduG6PgtUY7PwHu6JL21foHZhwW9y18emJz7CzHyBFEoPaHBrEd1GZzCRM3gkmeTD9iX8TB5pvnB",
  "key10": "54c6qjdEVDwAd1g1fx9nrGFdx1C2Eu7K54n37H7PcodQE5MRA5Ekmx4M56tZzzeMjGY1Xm347LEhb2cfn8JkMWf1",
  "key11": "3Ks74hayrUtCf6mGvsmXfgksQuzgLHCA4iUryVzPWWW1U57HoDD8NenvP68Y9UUNJbdP67rEs51TKpD2PSNp51kT",
  "key12": "wS5Zd4ozjq1mwWEpKMmPrqPJ2iGefT1csHANVevxFvzR1doPxRMJyEavwSHa7KQK1tzhHAZdRoZn3dzH6oKSyqa",
  "key13": "496B8VZSWAubEXngrsopPzmLzrJ5m5JDBizfWUjRVQEbAjoe3tmp8F84v6Rt88KkjdEupYuwFQAkdU7zF4td7Rgp",
  "key14": "d8adMTYqZnFudiWdx6UEUPZMvESNYjrTHbok5D3PrvBjSR4W849vE1WGkU263gVGs2sCMn3kSDjEWSExg8Gx5cj",
  "key15": "21p5qav8KdTh7RhJmMhbvt8a66opFJxHpvJRNebz1Aj5gQJHTHPn2Mp7kEL5XGkSGGJzf5nqjxfVEyQBpmAsCdxr",
  "key16": "2A2sTexXTuojisDM2ier9B9V5XCB4xyGH5NaKqfyHYNVaAVuVZoxVUinpHgcMQ9CXwNXoMSzrkLMuKLxHBLgdKU5",
  "key17": "2JMSx4RHePfvdnyDQ3QNzX92vMMCiE5HFd4uot25DGdiBsnuqPBPXbsgBhuXDjzG8SY57pLFhpf8HW5hz3usiBmF",
  "key18": "61dFipEzMjo7SQ3zPBEWoBLjvZzF3ewdky3d19UmqGpcK8ujpXd8uQe2bTECotFBeSbw14YtwY9ovqBuTmMK47rG",
  "key19": "5uAS1DTV83DnuZdjFa65p15jvnWkZeMBiji8E1YAXktkcTpyjwRb5wx9NfgAEicsoxxwy6qzfwqzY5eQbV9VZkGT",
  "key20": "RqQRcYGSRKf8aHznt4K8bBvDhTCa953VhpyorxeM6YaRhi8E1ftawP4d1aQT38UiiELFj5m7kwp8UD66RzJmqWF",
  "key21": "4671XJt5YsN2oLJLRDd8wBozCND4TPaKPZRZ97tNeBkH6vTBQAYRBL1Na4JuEmYvoiWD1uXj1wx937r5XUaDtYWi",
  "key22": "qijYyjLJcpJ3hh9hyDt6gpYdWxdqU9QvBKFfGRUgjfh6Yrr5qCm5LdaBMwCrwvpjyivXiFQ2rXspCxWy4bbC5tW",
  "key23": "34gAwJvJCZHwg65NL7AuYnRBvwCzVTzyNiBCUmNezmJmrHGn7nJ9bBvcQ9uKzoHVVuArh4DrZ6SX7BJiWvQNxnV3",
  "key24": "ZumaaAq1B5JJmLZP7FxVqFxdyMq1pe4jjb4xbcGR3Q987DRuHjs2PgSDUCcjnao4w3eG7yFBPgwWnPvVePY2Rts",
  "key25": "4frK8E9H1NZ1sopTjHdFkYvhKKvY9eu2witztuVo36cE5wpDW67nVXZ2LW3gKoFLem8tyHAM8nQwNpYERLyKZwDq",
  "key26": "3wESzJUnqaefR2wthN74G7XkpZbNNAh8L99ezxEHovichQiwoctS4iqcY6gTEnniP3gjffptext79adqe8vhXm8v",
  "key27": "WG8cifmnf9ZUjCebFWRhmnpzmEheqKjLjgGnowJoLLUXXgPpu85hfUBSdWkmjuRpoMd8mM7LN5Xw3U7UWMbE5f1",
  "key28": "5m6zHPxyarWykyuwumTKrFHVzrwUFoEsPrAsUzfkRPQTo2a9ST5W7bD4kLpzdj48U8L8EpisTg5GdR8LURvHx4Me",
  "key29": "4nQtXjX9NyuswoJJrrDCfKpRFGbPQTkuA5UwmQ3WvRbzwYkB7cdFjmzfawra8EUzorhusbEAGw3D9mWaNaYToJbE",
  "key30": "5JQUP33wYMd1955zg72jKr7j4kKBfea65kHnVyuonEEdcGdEoRk2oECcQmgsamdF32NniPtMvRjvKrhMdEHCLjzc",
  "key31": "3yzmuN55aoTjM9z5rQWp3T57uiJ9tPvoXAr8S6WakM2EPZvJ6uMQmqZXN2eMMX92oF6EBTJSYKeh2D57UvditXaU",
  "key32": "3ttWkm88upF7JEAzY7nMm3Z1J2mETykUF4SpTzYhDyrmCRn6Bqtf5DGgn6iRComomDaJghBbqDFUS1Hh8fxdPvnf"
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
