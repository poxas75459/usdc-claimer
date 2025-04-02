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
    "4VYhXXq1HC5Y9w9p5eSkj2ErKa7DP7tHzWLFv3ogsNZmVYj4JyLSNZm7Z86NkMNttFKsoyZSG5cAdTzzma7zY1rp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zMzGq4QLn8tim3JZ7s899aXwmQGRYPMKnXcHRrCgLYAat9m6NBuFMgQi3rcr9K4PrLsCNNCDJz71VcvLk2bfDYL",
  "key1": "5kmU3GtfLWQNfuW4MGBhXhRiwmgYQ2eA7VrByUeyySjojFPj3ucKNfrskkJfT3XCStwsn7dCTcH6ARA41mAQa69R",
  "key2": "2KCpcwsakLE5rjbadvkgMpZP9pQPJbCR38pLJJW9xjBnK9p813fJhRLaj6gzrXZJ9idrccNhgqH7Z29282Ww2cvX",
  "key3": "4joTpCEYwtuPNuWXFLnkX4C9Egn89Vjp15jU3WbusnVjKvvyPivf9WMi4hSjFkT8ETT1TK28bTsCBCe3mD3KZ4TJ",
  "key4": "R75siBamJbeh55kFkhAfWwD8b1ykhtx7Aw672KKkrmDhDrNXspDj1f5j7HhiP7e4mJMtQ4HGDVLKMYA4FBNLYSV",
  "key5": "2A6yuA1WG65HRcDC6PM8fSgN15j2eDrbF9mbhC59nGc3g3m9uxUASi8qYWp8DHMf9VxR7Cq8u9gRks6Pq6EhR6fx",
  "key6": "3vB57BP5dqtVaUtSGhvQmGFLzTpVxFqoHLEkXmVDA6dJUvi1E1CfBu2iJ694wmZC7h2w2HpR5LMZuDwmdGvd9cSS",
  "key7": "5eTmXwXsmJ5uKM9vRHuAtTGjhQsgyeyeWgU7NMAqWVKpdrhkYUM2aUg7CE2Zt2tL5RJR7Q2XbSDqjbgUpiuCxadN",
  "key8": "XZmKfFVfeE35uniCZjSKsReDJRQASiAXpSdeKZiU43Mq3sMjj98uW2Vms5r6bMMq5CqiKsE5EJVjmNa7Co85GFy",
  "key9": "RMewC58vDcPLCefq135FUibmESvrNFhUhKeQ5AacFfLGiXNoDnNMpTQFPMhEBFtk6tftfesyfvhC1B1V7hd1Eeo",
  "key10": "45G4HktUNU4zxusV5XP7rFjx8aqaxqv8Uee71UzmBgzVhGxr4wX2sWfsyWUATph5mM7Zonwufc2w8SZKZmNAwJzx",
  "key11": "2hgwyucjzAWKGJ3DUgYiNzqEgYy4TfsJriRTjm4BxyWZNfHA6nyX8HFojJepqHrFfrqJzy69oJPn5Ytvjxy616rg",
  "key12": "3imShfB5sSDMYmpeE1YzGcayni73ftC1BiPGQ54Zivowe3u9uVUxvbgUavtYrNVW8mqVY2w3ZJnrH348DiQtzjdZ",
  "key13": "5qSSgTMmSzpVY5v1iKKddL8dR3LzdfXAsW218HkvZwjQwSqKT1xsGYRK8vdxWbQFR1A4mbvmsq29kjcLr2c4H5Pv",
  "key14": "7oMPqV9vsXa8ZjWBAr1QDh5P3Y9aAt9MuTjVLLLs6yo1QaeWPTUnRTA53b4J15DmQKGqnNqD3F46CGEfZ4eKGaC",
  "key15": "4tEcCMto84QzKSjNRDir26KzZekPaYU4X7WAsByfMviH2j5iLpLJHAtQMatH55eRLahHVJixas1cHY8madA2aKZw",
  "key16": "sDathKnhZpaVQLrAEK4ZRT6y6xuye6Me9huYFhv8BN6TQoP79bEKbWxNzFQ1QwuSaYEmY4QY1TJHJhMXjtAe4fY",
  "key17": "4VRemjzPAqYjkjcXXy2pA1chUZyD7ZW5hKGWX3UeQxyAX4aDuNZaTUSHFUhc1Jz4S63MiwCkVCvHqeW6uysqnZx7",
  "key18": "wpHy8iZtDiQkw5gnfukUbTYHvVt8maajER1r9nhkkxg4y1p2mQot3H1ST8bGwptAQqvHSr3mYZvfJjavQhuuXT1",
  "key19": "SqQvvui9Q9yE1hgBASDk5T1DVs6ZgtP448XhQwh8iHpwrFPYB7HVxsmR94Fi7tLwEACP58E9y9q9edSW9YDQiZu",
  "key20": "2NupeFqJFAm8p5KbK1E6ngyux7fFgkpLnCEkwUfWHKH9N5sectPLwPhcd2m3kTdQW9s9RVSgzpVC9HWVDRdzo17j",
  "key21": "4qMwJsLE1rtAN6vnyhVvxWVSc4dwzNFxVmoWW9HBhwQFQtXZBNEueTPcLYisJeucPKgNQ9Z1mLP5i4bMX49wRQW1",
  "key22": "2P6T3PLhLPmyGkU8Dwh7c78zVtiwT6qAE7J7Qk2mtSJskDn9fPUbQe2N6S9gGkY9AQ3TWtJJN37Sea1bDFizS55s",
  "key23": "3SCmLmNNYjM84UfPudezvrZEWH1YAsMRFB6W1Pk12kbyyho9813jLSYJBPYkBTHoFgT8HtevLdJqGNqt6JH4dVS7",
  "key24": "32dU4g8ENHEqmwRMrG9FkePtH7X7U1W7aBhV3XMucNnXqzLCNUkspT7FevFKmzbPiWtHHA2GGam6eRtHUgrkoByM",
  "key25": "5V3GUUaGv4P6PyTGsUSd7w45qR2gE9XG7qZrm3ZtAff3iQJ6XWjpeKvVaSCi7RWqoz1MRzRxtKjbT3JGKq4wf3Ex",
  "key26": "4dFu7a5zzJifTNRNhz5RZ67dSKA1ayqNCc1K8xKr8S51TpTS6tp3janYxdyRm42FUPzxdLsoi3gBQBzXPmR7UNwp",
  "key27": "WFyCNh5aNtz4UGJGKs3P357xRZzTjoPWuxdDK8FfMWFe67BwHARjNaMrg57DVxx7jQPdM7MmxWrdGPznDuacDkL",
  "key28": "3NZ2H6ERL7vRgj7EsFke3Uia4JCKoBKdZrvPndvx7iNMSjQU1YW98Aq2uuVwsTgvXvg3Bge7AUFHE21YTjqoewxt",
  "key29": "4c1TyxGu71hToyrBXExQFW1tzxx5tQ2bAsNirbMTciU1NV4sVxMDD1NMjahek5irAp15GWdNSq6WuDDVihz8Qnm8",
  "key30": "sXGQDbohdQkPdDNuq291bFrxfoN8F8MStmgvcM1kan2un7a2z5FrNbTyRzJAg9zaybMNmDAAAEyb3aymqgZ95jN"
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
