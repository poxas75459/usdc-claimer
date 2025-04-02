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
    "4F9mQnF8HVuvzP9BbBFUL2FutZvLzoNhVC184jUVvMR7BuMHLKiEiWAbXUxatDBWaZ7yfjw7yRsDUo7HRjKq7f59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eMSgeH2Evey2GHUpF3yzqNoC3ERpoAeHFrUXsbFhT63AWkdRgWgqmvtb3XKMW3ZE6WbQeU9AvAHeDGuYNehTz6T",
  "key1": "2qJiY4RHTL4gMESXhd1syMn16ZqBRLE9sNH2tbwokipbyjJdD7JaQATYrz1WHHJjDUsz3MwEgk8Nu3Vi3gki9SnB",
  "key2": "n9FyqmQNAKRDirwk4isYMfA9suVmArxYVEgeD8MkoZbFwVMbGnLAdQYiE1uK4GGLGtA1hGMj1KMFgXrxMde6djx",
  "key3": "3DEsRPYrZS2bb1aAy7Ca5MhKrYMDeSPLnyKbeMzmXTWZjBS2cKxjxuoTMm3roF5zdhEgyh4tGgrVmgzQwABwe5RL",
  "key4": "4gkqEvg3Xf9RJ64uD1TA7phe3eZWCsiD3oxEns12tkYWjomXw7MdXYrSzk62jYPf54gC43wArohQqJfBSz61sn1L",
  "key5": "3BMuTNWt3YoprEyQ26CgXPLdsx49Exgv1SUNfA5JwwXtB9QDNAv7FytS4EW3YiaFX4fyYCbGutSzVYQtzmLPM9V1",
  "key6": "gZc1pSBcNMk6XS4jU658y3vZKiBBjq8aYRvenJjik94fhRbKNTQo7LejoxnwZwesUGKT7CEo8Nf7qzzJJ4Fi2Yi",
  "key7": "5hAULw2SwTynrVcQcXH35PwqhPZQPzbgXotQhAHSweijpwrSBjiZxbQoXFoFkJYsEAgtbqcnUZueiWyvSuJjSgdB",
  "key8": "Bxo3V1AKGiAsigNUMMZskYsu2xt19Qvca7ECCTsoXAycKZoq1T1zgdTWMjxpZPVqWyGSqGxtfjcetGMWJbUKWA7",
  "key9": "YiMZ9Xq2nviZuXFN2HUhnd1grW3f6XDMmjt2hj2Q9QodN8gVBgmYkY37YmeLaVS6d5EdTSjbhUDAwDgTSK28Uo4",
  "key10": "U4Mhm7g9ha5seTsdyYmLdpjLg2UNQBkgDBCpJ6WpJLvQsvFfp4XvA4iXDEoL4MtsikzyXTJzuE8uPEdjmmzg4Dr",
  "key11": "2xVd5KV7yyFifPb28DWLuFd1P4sHo9TH7TZHgH3oEoz1q3hT3kydjr4HynUr1guAF2GRFq1wGWd6p2pdeW3iqBW8",
  "key12": "4pvi3XYoaUEEKw5ipLJRFT18ftSkmorNCEmGWK5UBxTdcrzRFSMqrMh4jEmzVMFhTpemvUqKUDvbMF4X9gqAg43W",
  "key13": "5rrGirmqeqtj7yiPg9zQKuLEF5Ytrq7kjsqyZZmLSpNRoX5atcQSBPAdDUv6tVke3zFf4pHfvaq5nKCY7UvoRwL7",
  "key14": "65iq2HkXMjctZPvkHi3zrYQzQV6rKJeyY7GPXbYnWGJPKszpKXfVE6c187Zn3ckhXPJJW8E3WqFLsB7mniWjfykU",
  "key15": "3dj4StyKRtQU1YzKmnNt2Lat8DzhLcnZ5czoUDggcPc8fic7pHtLa7AaKykiHxyf98wdbNtGMGoh7va8CNhrAeVN",
  "key16": "3PGRjSsiny9uiDkrXdnimoXwNUmRr4QWWdju9wpvNo6T8rVnyaD5bvsJump7n3174mHo8JaXaKwJwcAkACBTD2JX",
  "key17": "4aTey9BvWZQbhCiCVq5A1tT4a4bJwYrFqAtjPFUnhEH3XCQBMc82WCHqjTbDn4t6TWfaFLnk3yDhgQb6MppQpbtZ",
  "key18": "2YPng349zFeXj7aZrsepbvShYqYmih1pFXopAyeH42GhyP3nqPxH99hGvx8TVzFHvwhHRpXxUdJepgAX7dsjVLKk",
  "key19": "GBACEhJ282zzfC4wzDaCAJ1VLcGmV4HtN8wYD4JnQMWPWrTTmA6hTiVqb1r4dSLazDxn3nphm1PRKaYyWRRQSJ3",
  "key20": "5Ub9DSL3qvKawzZuXPdJHTNS3Ud7SXp65cm2fMFmWp8h7YsMwoAtoZrWWnfSxpReR53nnCZZuwAP9Lzw2ShJVWPy",
  "key21": "4rs6vUnsWnsXFe4Y9Jv3xbHkvCd78XvKqCeT2JqixpECxBGrJbYijZtdAGQVngZ2y6y4gi9Zd3zh9oVVYT1WLGtB",
  "key22": "3sk4YXpvdDBLc9sWaip6RTeq6udZnodxKKQLVmq6VGuqAtCJqPJrfQe3HJiNWiBmuYahvbBSrwYqV6WbTd6pMNDP",
  "key23": "5iftRxs6mJg1sGHqtgRUGeaQpezRBvAPsX1gVkFC7eG2YBvhxEk2C5gW2o7HReJHw1iNTym8Z47Z3eXUKBgRkWyo",
  "key24": "3pKVnwFh7ZCceqScbDTBaahmR4T9MjtSUeoGWEfb264nqoFbAtKzhcHMhFNnrURmWn49TbnW3eES2SFzz4tG7kNM",
  "key25": "2JunP6FQrc7AvJQGRDeUAxhBFFqNbYJpFM7X7jJiUzpvrTvrrHQWL1ShH7rkaeJsSeqQL7E57ZqMcFSLpRv9pFZe",
  "key26": "5iJUWbUmQZq5G7hyES6yy3MhWCBcBYjCzWygosrytrvSGHtVPGjgCcimVKu858AVAQLD8ZAx2NmzFuFkQoruchHG",
  "key27": "5SdJQEpyN6vX1GQM9b3ZitLiYvkDfN4jvh4K6tUixk9fbAfUxHCFv4V28FodXBa1V48hXBxiZNTbKDmaJyjrwRtu",
  "key28": "6315m9tVzZG1wGPYQTLU7oHBhkYbVLWqym9XJbetMbZAADtDMXeBw68HRvuyjBEvFCNPabTsmvLfKYb2usgieNYm",
  "key29": "5rTCyhJnjCqzbLpUPJbuW76pt2mVZGitV6FCRUaRgYGr98mqejCFnKk6sZRnj34bJmtvYiQdngVUv4PQ39j3D56e",
  "key30": "2HbgmZFkzLnpRFuXJYPK1kqiZH9B2bFu7ax8VwyZ5XGFcQNgRVXs657LfWFLT4242TcLjbsBvgF9RLU1DtfLjEE3",
  "key31": "2akhEkxzqBQXSsKFQH2N8mHSSX1KyXKpN6EjSP956R2uq8SWgg4jXp8TPqz54p7aai5TgiLp5SLi7rAqijvNQY9n",
  "key32": "47aJpMX6fLxnWx8sjDKjsNSt2MHtgdoBhKdJtDWQ2EjXzD7mxF6cYHV27uPN4HcR2DkQquJAhtkioVT37KEDABHY"
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
