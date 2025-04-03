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
    "2pqU8yryFxiPrXGS1Gw6XY3S4FDszUuHsJaoCMDnah9Wq4ihAvLwYPd1g21LS4qyAvjy2UVfwkFqp4iHFutY6WJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xoz19q4vHT7bFKK146NT5aneJcUB6FMnneL1SDMUK5aYpHxRVAHMHYRDHwVikgmtH3uf46kuSV8tKnniXjSNMRq",
  "key1": "3C12m29htowkJURdwgudYJnUuzpW4yuYRz6zFsCjSjsvqai1XHF5XtGCiSjJ6hQSF9oUx2D7pXRsrYQoBkXAyMXJ",
  "key2": "5hsBdnJdiHJwdrtjf9UkEgFh2HysWkohhmh1wFb7qW1TJqsdpyZ3PxpixxYnffS2nxFDYTF21bQectSudEJDo7pn",
  "key3": "5zG4gqkCVGkohUT696BfyQfDWed8GjVMJ9JoXvPmBhKHKZdmVApaddXu5F2GCacmH9GtcoLbv6BHAbE5mTFpDwBi",
  "key4": "31m2eCtpJvMcfufmbdD9CUujKq8QK9shbAPUxeqjXMXuBHi822twRZudJM7tiUeLagZBwcusdG8eY6VgNcmufjML",
  "key5": "5Pt1WhTQGXRYKYtTrXV9ME3ftTzXBa31c1Tbn1qW96d3XjzQWmd5hHkCDHTaFt79s4UTZxFQaT8KcWKXThpvA7cq",
  "key6": "4FawG7u4qypRtiGRUrngiRkf3ZBXvEJn8KQeVXiPgbpx7EHYZzvdZ2FSTtiGoSxDg8fxoFDB2aitCgY1v6GhGcde",
  "key7": "f1CauQZLfvXb8SeTjk1p2GBvDvFr6CJdgxUzFEHNdZJXmxbTJo99qLFcRhbWrLdiD1VoSv36enSLDoJwyzFRy3Q",
  "key8": "4PjipmESkVchWtQtreZsn6GzSKuZx6Go24qDxLuwZ63MBjJzEKnsNWmEGCvDzbZVrxbvMiqaY85jPFohp93eBbuP",
  "key9": "5ovURhGQQq4rVZKX5VbSfRJqvgpgVhLnmHwbUHdb3ipb9rwtRxVdGuTMJZ11jFxEFBiYx4uifT67xoA8BxfiRcm2",
  "key10": "2kHbUdf28EWf58Pc4ag3Bs7PS8dBNE24zNCJd6hALk6K6GMbJNqoUrrTxmUv4hybagz2pCP9TJSk8178kqV8dhJ3",
  "key11": "CmmRaVCrWDLbnukaZWPrSJFBQHon8j3wfxszE79qMZpUwwkHAQmjv6hU6t7knW7HmSwqRZUq8kwxhHGAqyxKUE9",
  "key12": "4rXviL5FQsDdb7Jyd8fDRQZgYtgJnhj8eAKaoDX24NDXwhbRZRCrBzg5rZtzTPhZWe2V1e2N9PMEggTfKEGPPy9A",
  "key13": "49WSReT7ekGSSSp7ohCZEygJkngn7RVCDcUBvYchXFRHT14rvLcUuZzuAj48cWV2jASjj2dZYayoiGGEq5X8jdQk",
  "key14": "4FZpzfqTJwsMDi4VgHoP7HzC1KcP5r8wXi8LEXefqrWfCBScM5r2qEwzoFhtKpDjmuHfBw3aVXw4x67A27DwmuqB",
  "key15": "5KkYf6DqiSgqX6isSFqVADNwWGcqRWqnM95rEk59ERgCkddFBvMRAPa5B146zQjv2KEsAcqCPbX2SmDn4xZ76pzj",
  "key16": "5yyToZNySFxoWBR4AzYTQsybKtdjEhePUjxKh2WCdV1MJM5GNT4iHitT9hZ1q4ABgEhH4PaTwoTzDzJPJRfREh12",
  "key17": "fcRkHNvS5WSzGRxi68ibKXdj4wSpsq1unYwr81Wk92Ei2cJA6AtTxPKWJXLa3ZLoRsaqYbHBCPGcHF1Ws5HJReW",
  "key18": "4gYcQi9vpqMC3rPsiDf23g8DHPwugvU1CbFVFhC8aNXsZpCurcaFm56qbHX4GpZTnWwhGeSHvgfzv6XTNuYrvHu7",
  "key19": "3m5nBMYKkBwAJrdVLYYmJWggQmnFB5c9rV16J2TSZ7dWeXN7oXpBFzFBb2KLZPXvAbhgHRnrHrRkh6B28LcNgttt",
  "key20": "jhKLofMEs2MYTndEDRrmQWz5sx9wKkT7SkEteJkzhmL36BM62bWsiArimwTY15zT8wNpmxxT4TBYWtbKRs6ai3E",
  "key21": "2qagwQod3UpbTVWK3WJ8A3AgxETif9FmxLFeNhVEUmDUnnzN7dnTkYay1u6ZfEZJfW3GJFCqhazHt1Faerp2i9e2",
  "key22": "2Dbmign8BuVbB4LXRJVSFaYiAKeTz7EjseBy9ehfAZhNm3rLM432x18okCm3HNQLuMWEovxF2H5YSTaLFdEhCLWn",
  "key23": "g7ZoEAjCJTA4pw6MiQyyLAc55MbTR2LQgpvt1XGJD7mwJaojErY3EtQ1gP98B8NSvQEzceHe1c943yBVvVGu2SK",
  "key24": "wExhs5xzJrtFybhKxHHkXnzzrQFiMyp6AbSNP5LA5fUVpYbiFcmCwMCZ5Z3h9ry3vhCjAcz4nYZau3e3xdF3Bry",
  "key25": "9qHyyioQpX8JR4Bi5GdRL9ndWQZUH7ygmPNtkhWXwRVXYvma33uvhdo3jhzz8pTnWZybUKKGytPRmnfVoiB4TDi",
  "key26": "3VL4ZXb9vBimSwYnnN8Xr8CeeJRbtEKPhyQumX9DqEgMZpDHJWkxHzCDTCfvjnpKPtKJHTciyN6wM3Hr1m1zHQ7z",
  "key27": "MYJrDT2sAxdZy7ughLAiSh8LpE4VPEcEBZhzWDHUnqAoKsB7nXrRroLWriJE7dXkfmbDf1g1LvbtbUHLWMpNhph",
  "key28": "3Z4o312ziMFxaKAjYoHibyzFXZ1XJP5sza3bvJaEphgreRC18B6aqNumJtdXFa11BfnNhBt5PZjf7Bxj2NdLGg9v",
  "key29": "2Ba9SLGN4kTA31ZL5K9wbW1Gt9qVdHCc8HXB6KM6XAMnvwUwS5xrSjrLwnQaa5x4R97BY8f7U4i4y9vPBgier13V",
  "key30": "4ozrohXioGRKLn8RqEfmpGGdQPzrFj7yunBAmzj32QrkGqvc3pdDM7zegmDAqKcNvouQXLkmoWB4zL78rSzFqGW"
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
