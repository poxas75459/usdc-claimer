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
    "3qJUXskEU8KXh5hXWLLKhAmufY6Jz9j1q5DJpjyrxHMTbdxg5V9V9khmCXoHZcNgz75xoxQvMhCJmoGyqJPkqVMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61BjeYn57UGEyj8QgpJw7evvA7gKozNdh5YvJBbK5UzYbhdWvJ21TGNkkRJHe9MT3vwWVEhumv7QgmB7oYfgNDZC",
  "key1": "2FgR6h4o8NfVAuEKrv9hoPNhWuoMN9b6opmZVQtHjmz4anmawdy28NcQVtfkEBxVGNbY9oeVxto8w4Xp5k3mPcbJ",
  "key2": "PKMdNcCqJkGU6gHxJSNxcEcYnv8Z1ECEyHV4ZqJAZkNof3PMNkPk4ds31C38ddsn5GFsDqfgHqCkQUGknEeYXVg",
  "key3": "hCic7UdqFRKPb6TNBzPCF1qXBJiA9agsb46P2TU4hZy99cH7YdePRCrwJUfb2GKraXZLLe3iSrUEzbVUF34UY2F",
  "key4": "4Vy6ohrrcZh1KNpjiRoCvYnKfwFSpd8nRySq629DHZWVdWq1VuwicQ3aJwjwYL4VhUa8M96Gj1Z7Axnrv61c9C3K",
  "key5": "3gKVSFxJHLj37AK7V5awWkuZsRsQViDq2JoBvsTJ3eDH2kgt4iRio2r43bS6g5XUTDNJvieNujCE5iFepHg2hke4",
  "key6": "3sfgnYCg5ebY89TNUefcKsu3ARDYY4nzv181J9sxyWosvvJNRkK8Z9bJUi2EULXQkvmsGVCN1ickmPqijMftgGNr",
  "key7": "VGAHUdezCejTRJLWjnDZcyFPjimbPSfFNAjz55ju88sf4Tf4kCD9bTNKTwpaCGHpRZqhS3HNg3z26N2aeEiEQBY",
  "key8": "4mLsvpmCZG31q9VMwMwcEHFidud9KrPbMmmM2qaUFzu4QEwshHv7QUCXXz5R6bm5RqgQWx6h5bZ9dgxvZv6bo515",
  "key9": "3z5hoSFjH2RiLxprtXgN5jDWyMx15mgMQrsWPaButvfAWCr94eNaYWspeFRVwraraWcpLzQ4MuQmqYiwRBUJqjps",
  "key10": "4en7v7Q5MZn4UpuGALYJ7BQgJ23E95f2MPsfFAdsFJ43ere8tu4UJX3cQWo66cfWbxnWKwskwJAAP85NQQtCDHtB",
  "key11": "598eMchxaRHmMdSiXczWYDESdAbUvBiawT8mZELanyjcCdUibEptuEHvdJfCmapTP25hnwyAB7P8a7UW4znC8X84",
  "key12": "bUuPjiXHChKpDvhGq7bK5qs2xo2UtEHuhi9MkRM4pdYzm48H7SCwrYWq6HhugJDpaP8NX8jCoFMeBMk3uTrmhvi",
  "key13": "2rbGHFzURVCFF43Hi4UZxJcX3RAzjM9uQd6mMKu4nTH3N48b2F9av1bT19PZZQEsJnd5EBYt43HNtFA6JRKurs6t",
  "key14": "5iKuYnf4ajVA4WujVzi6xufXfjttxfQCj5jQ2B7R2LPx1tj552dMkaiS1iYau56LLTZ6U1zRyjcrxBRvYRXuskT8",
  "key15": "489wcN78XfKQbeqTQAqj1yCrfVnyRCCQZ8B3vF5SosffNE6nsRj6XgTAUhMb4uzvJzeRXbWf43LkejqKH2x7NBxr",
  "key16": "DxuEqmtJM4BU9U9ApMbvedHUyeN3mnawusPzvg6xX4NantXdJhGnnnFVseYLZzWV66FHQ22J1c3hAgexoDz5d3s",
  "key17": "CnfHrfni7nYak7qEpBixmjQ8pckWCpZZqCvPKoYgFMj94UFHUmzbGq1UuxRvDgbzBhVx3azTQwteMMjup5QNwQX",
  "key18": "4AtpTAhxtsduQAVrp63WnvdbNtaFyS8W7MyVd7xbuGALraqz44XfbXTcQ7xAjarvEwk1V5wi61pvzFBjnvZthCLW",
  "key19": "7m1wcGRFa8SnFJfBMwRbai7LtJNLSjaoLiDUDgS6XAmVpYGnUZQpgkD7FtFXECRg2CitwFWGK6pi18BjzZosiPm",
  "key20": "5ZyKWF6EoSK9LNnYJoFEZeNKPf5HcJc5iPjWDoDS2ygNS9n3RZFr3BXcMWECjDbUnJ1H3vTX9wj4ymXda6xcks1z",
  "key21": "5i2i2NE6qd1wUBt4UaWug7AXr4CBbqe2oPun8MgvZdiPPSCbhZyc3SbpL2uzGvsesGuvFc9A9SpLAzdGThYbcVaq",
  "key22": "4mLewv2ePncj1mSqZrcnoEKUYsH4J2BnT5dMUwaF7LzQzGRHHt1QmongUg8fwtaTNVrpwbr8ZcDmgBkjRvrK1Ju1",
  "key23": "3suz7PzzKV7MNQi6JGhrmqtM6fiZWp5hMqgMrzC87gQuBBvgAwFyq1PRs2sgzZvF2RFdCfhs4MRKhN6oHjZsumuz",
  "key24": "3HfPRLS92qtiES275XwmaaPdJuP6hn8jqohUJvbrTuaHdCTardESE11DRq22ja1nPjYUT16uyCse9tgcveKxdJBF",
  "key25": "JpUtarDQpNLkhRYC6QGBjtDgf9QfreV5KfstSpq8QfNfEKigm6uyihuSgZeRXfbnEkmcgNzWHpPTToz9fQoowJT",
  "key26": "4QPiU9YVpB4j6yHa3FcQq647vcNuq96uiNF7uTq4x1gfcAFrmdkXs1i9dCzhs1voqGK9H4Gu8Kq2azTviRAJsnJx",
  "key27": "4ntTk3ga5Nu9QXcP4bpkMR5ckgATDfCfYrN8Au3ePAGuqB9Z2N8yCgC5Q4JDGxRmNTdpUyvUS44xayXrQZbKJbaW",
  "key28": "2rEEe3Yb3NjousvSkS5oT6WjmCFMcsN5EBZJ1dHPEFgLz6gTBCFfuCuajU8uwpwJJkqAYNXoM7mLwU54k1mJf3r1",
  "key29": "snnDogyT4425wJ79dr3A9kkWD2QWdkUQ6hK5eacvyp82LoYbchqFU6oYXzkLhQJwBhmmxXvFbtz8TNvzJpuR3DD",
  "key30": "zWtVWyp7qPMm2iT2ZfEPxBXoffxAoTxCftuejR2m5eWmXVak59Eropj7ZkWoYsUiPmfs6YR3yao8kCrdGbqTqub",
  "key31": "44Bbq7JE74zxsigGgmEWhzhKnxLk7LpdiKRr4WiHXxcjctW5tWpMYTiSzUQAZjVYcELXgUqLvDNjHD67MBf7Ei4t",
  "key32": "4yYQro9S1SJk3JG8XZQxfuuUy6HS4iHuehHkg1uUFw5dt1GABgetyxw2qqco3KA2qa5qpUujcDdRJq1EY5nutups",
  "key33": "4KprAFXRkwYegPYMf4UfWpUKf8NUm1cRThyyqW97MexXVbhSR54emYHJMXfAmq3CGuGJ42PSJVKp5auir2ihSLNp"
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
