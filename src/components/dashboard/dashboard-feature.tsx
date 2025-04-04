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
    "2JobTeW4dsz49PRWq7kxdV8WGzn1XP5gQjsp9DM5xUiy5KNyw9XUAN9L8uDu3aa1j2MwQ9kx916EpGmS54vEsmGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S3HSXAyQeiCLfDj1A72uCydcfR6EXnMyHwBS4jkaZ6bPeQDbNvuJgNxEFgBTTdGSXZHitApJzbZZbs8Kq4TzU28",
  "key1": "3re3AUPYkxD4X9Tzj9FjSWafAhXBKazNjkbgThoYuUxjqo4MVHsu7Q6WPCxcXhWz9TVWn8LngT3vcDyXCg3qQNoa",
  "key2": "idXQqG4Pt9pD253gAELe3RE5iVFbKEvQrXTurtir14Cj9vpXb6YtP7DussG7ni9DqKP4jnsAsieV17FP4caUZp2",
  "key3": "4dEytyRa9KbYSe9kZyi9sMYKAEfVrnMdiuDZStXRoExuyaB7guDeJ64uVHKpzDiSaHEWQ1JaEijq4tm2XxhsbWgf",
  "key4": "3jR2H5Npby9JVLKre8c7K4cKFaHGsRWjXYD8v1LPPkdGcsLAAjWNBUr7WMCcB4HX6sfavMY5TSV1fU7M8MGABRJs",
  "key5": "2XBFzazY2K9gzbamzAHW4q25hE3pYCJjrmgVGdCFit7kJAtcSeaKTKRT7kxJp9eXVCBbx5npkc3ie3vwdxDyeAgJ",
  "key6": "D8EmPEBBMikkJ6uYcD5x114x8v7upCpJvfn6csipxQAdtZhJ4UWevtd46SqpfJWSt65dMLQZUL8t6paBEAB5Ev8",
  "key7": "dCD6kGTXg5nLXNuC5yX1YwAN6iW5q66ZaMi7yG8zQEmWgyKkXPhvSL3y8SC2F3choHJhCbyDehhBfA4RyGStSNB",
  "key8": "hVaLpSkrMbF4UKwJPTjGAuT5bvtL5URgDa4o45AEEnEVz3RkB9hxSEftGroqyHua53m7k61PSgFo9YbZw94AsNm",
  "key9": "2wKDkbEcNsdDf5Y6Yhnz5Duody3fvcNBVMjoTA4guLdb8sx63nKB9F35nwF3kA1k3yoEdzoA6Bh87wSVNj5P1nR5",
  "key10": "59pYQ8Si3voJZ3xcYk3TqjStvVBPU3LJY3BCFKnkmMVAx5qJvxUo6yHwkbEtNTp7VnYE5ucLWi8KfhdqverDF8Qe",
  "key11": "5vtRFV73TG9J8uZGbfFc2WZDSuahFfRx73zpPTLZeLEoo2egPSBDYyrLr1pBcyKMoQ4DW6nCA7dms8gX4a7pDc8g",
  "key12": "5Z9Ua5hTznvgWVYnjK3zxu18i8vJcrnjkqT8ePKRV826wmRX11ysfGtWtgyjWSyCvZuApmg6ez9vJuC75wsTgUUr",
  "key13": "4kVHvp8ea6fqbRCR4kqB8FLA5xwpsEZ7BPa3fus3TpRvSGBcsdWxXNdLaRHwi9Gtj2XAeBWuquvEPuy6mS9zZ75T",
  "key14": "2Jb2X1YYU1iz1qz7jj3KVb7g9rPf2f5NCTsjbkQ4rTqRfvckuEwyieqtBF3Tm3RxJhEPEvEeFBZAHCzvSNcQXcfS",
  "key15": "2ERvFdH2qoN6p4QyzhLtJzMwanzjXpYsatE8WjANgRK66isQSZjs2bE53rkT6NSNmX3PZRgMRW4eyinJjEdBc3y3",
  "key16": "26ik4pLkxZYyAz7QzknfYurfDFv9Xz8oejMU55qVr4tywM2CSriv9SAJxHfrVf4cGKC9fGjJGHvvFZ2kDUD53Dcx",
  "key17": "4CkQQv8QGbMJ1YfkJ6S5zUiw5ULJRgBpXvyQyktxMg8qrf2LNKbHRgZEK3rKpEXBkVn6iWXgovWfUtxo3NhetUXm",
  "key18": "4JMQNQwd3AgfpYwf2Ezx8oF38CMuENAZVpSSYbtWKAPp5wy4kUUMGU1ptWpySwWD47NHgBXLq4yXSFo7Q9EUoYW6",
  "key19": "dXp3gr9e3j7syNVQhPBq495XAazFeSnzUSg3cEGjadUWa6JXpLd9MQ4s7SfV9sMjGQM4eDXRV6YjRW42RiEEfQf",
  "key20": "2JmNX8ovjT7QqLfqh6jMbnaDRUoEJaoA8jBhJ2GqrFdtPqcJ4qmAnN1DZKsyrzXV6viCHdY9KtxCWyUvGydSuWDy",
  "key21": "3DVt68NZXYaJJmD9TqhjAVXy6auZqtGAVN64HuuuAFmZFivKyTLkP9cqNpKnihnZH7vSeXRKoi4Gt4v6JsifQpU9",
  "key22": "2bW1wnckTgrHNfmTTBy4dMbytJEDGAuftVJXJhSRYSUqESxhRKG6ohzFgcenB7G6DBo1BnusLcTwbpwXQCh9nGi",
  "key23": "4DLHW3iDQJRmdGsWkpr8ume5cirxrDUtZEmJurKpXruys4fd87cGykMzxjiMWa5RTvdygZCfBEvDjLJV1x473viA",
  "key24": "3NMkDA3aDoc91mNcMMU3Yj1dH3LpUMKt89KkePc7mP7NzwfkPXxSoKMm8KCBiKnkLgx2H4EsqzC2t8A1Tvae3eC3",
  "key25": "4axnR9x7Wrhzku8iNZcVcDXn3ZXfUYpjh3z6gDThq3zPjJFkmMRsvkuRoMLFGCX1VBg13KxyqAds1SJdEaE3HYVf",
  "key26": "56fDF3hLw3dZrfyDgrTBGuuLprPdnBNCkzLQEYhh8hy2fpfedsR2ikJxmp8AMQCsbadGvebCZfdsZ5xw8VGJ5h86",
  "key27": "65VtFVYMM47THg2W6rktCXUnbyiguNJv9dNXUMGXTYMVsEJfXSebQtbSuZysDzYLjUiNtshK7GMkPJEA4QsHMxGM",
  "key28": "4JuczWyFieM7UeGM9me1E5o95rJc8dZVcH6h1FPEQCDtxCrqYrHc4jR58X6hKYT1q794prm1PP8oYhr6p5LntQhh",
  "key29": "XN61P2zhwASSXVErYNc3Gai42ddBmzxqtKaDDLs945bC3pNM3RawBnNBPFgE3Hzd16ZyKx1Wi1GX3hQ45MmYkrN",
  "key30": "3QUayWu6GhnEWETYrhy6of79HnhwUjCCMC2g118NtQzeQtDUkZuFMx3qnxdUcpD3jJ2MeoMY6wMfTMfB358SWtFv",
  "key31": "5Mprq3TKe7hKS62jr4ZLDpKz5jpuY1XBmwiTGu37mBTxXCfwm5nXfHVHTAZKH2gCQxrTRsGRMGMxR65QfDQPKzHZ",
  "key32": "B4XnD2nZtkfssU2youBc8cUaUGkFKithcfsavco8E1FrJBSUUoyxYfr1k4Fi7RekZyzrZ894gm7uw3nzBe5JZUr",
  "key33": "2tpiNZJu81fdiuPMiSh45VdrfdvUFXRSUtfGto1i4q7s8f224f8rXRYtRFLtSpSJ5ugEndm2jmni7PUmgCXQduRc",
  "key34": "pMF3Fj3J5hRK7feuHykZe564pJheJ38dchWzrkiM839AKmzdb2Ejpb6pwdbhkkZAbQ9e5w4V9LHCxAcQBcRZu2E",
  "key35": "53erJWF74JGtRYoX5ye5AtVAQ5FuzKMX4UQE8WHkP88LxaSo5jktbPx6MM8VdX2mDHSKG5pwiAEhVpsj27zLnpkX",
  "key36": "4a4AXn2nPoqtSWJcCKg3hhWZKf1StFa4msKo1KETzhmcsYDYc8SQv634R2LQoxPqu6P3kHPFjkoTHGrPNBk9s7b3",
  "key37": "dCPNUZeoXgWLXS6rCC8qKeXrSTh9mRC6jwZbiiiGzyHxDm2WvsW6WgAeBy9DAXjnwCV62mB6YFRCX8zXiTSTg5i"
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
