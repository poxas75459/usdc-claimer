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
    "3S7sSuHWt5LDkvzgegQDBTtmpYeyB1kd9WLm19Z1PngFCdB72PyGzGSXBQ2SCaBb3pnrHs44g8BCs5mA4mqJX8B6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fg2K838GMBf4n5FeRdg1Sw6yebwy3qiEt2nw9FKMPhxsKdpn8chEPYVZYMGWEiyV6xZn81LBLad27zK52W7a5bq",
  "key1": "5jRXNdhBPgrkvhzoyMTu5KVsrxXthcsxsHpyqUwYeWC73dyEh7YfuTBtoZLRq6eCT4V8cdW5igJAZma8inCxQMNL",
  "key2": "2cdwtGsjRBoXSYCPUuKDZZF8H6bj948SHDgZudHu1p2VYqf9qegzBYNixsjwYaWaQwX1a1NAAFyfM8LVSpEh9SR5",
  "key3": "4vj2Nmz1YHenBz78w4aoWVWJHvKVHLxefnAxxQCz5E6tv71H4kQkNECPci5jeSBPsDFGUN2MsE3VFhyYHqamzkYk",
  "key4": "5r5ovKgDezqW2PmqM2qqv7AKkNy1E9PcoGjWECJXXCJcdQZgesPiAjk8XJyqDziNEPS8LXDMwvW6NQf7v7o5L3Hs",
  "key5": "4cXFoRFg9vk8VttgHmH1JVnBznkTWC4QV8qojiMiKpcmSZR67B34aHkMTDWLZEowku8kBfjG26UPzVVWsbzPJ3XG",
  "key6": "22XNzimEUk9BJkTxrMLWV9xr8kxwsAbNfD4JZwzfHAwJVJi2JjPBUc9wjqMHy33h9vDpNfAdpo4AJBqD2nC19rck",
  "key7": "2Ex1whnXw82Y1hpXUgvsmvkNmCFrVTwF1UHNBy9AbaXvAXQyixzPRhc6qN5sshWHZZELthEvmTXEx4dmiHBmsoPc",
  "key8": "4ux9JZdVFKRDEhrcBW5T6t3h3pba1D8dHp973XZ3fAgGkBcas4EDFXmF2hrF8i6RLWqP6bcJpNCihGssBScpf7aS",
  "key9": "3CJEh6392V9j6oKqS5k6qjeHTMcpnropBuLRcw82NVJEXLqqSUBCpFWJEnW2qu8xVYK456dFPxWcMKmNXctE65dN",
  "key10": "5Q1ys3YEX9JfbyeBd6aCcarQPeCxtPwvgR3ZWbC5v5Hkp1HC44X5vpujkWuH9VFgZNheGAUk2AAQ5hS15G4wZr8a",
  "key11": "R2hBxazqocpCk8UBT88Fjg26o8XsNPTxwk8T9Us3TZYURcSYZGw9e7EEXv39rX9Q7SfURNSx9Hb4fzowiixKetN",
  "key12": "3NB5LPv5KZeK1eG9856UrhjPHfc9VyXwwDbiZbvv1F2WhDB7r9A5Ufb2YLzd969qxp8Dbfw7Y6WPCgtQuJV7xQAo",
  "key13": "43R3Hw3Uur1XqvQrdvVZE6Z1b1kEmihaH8uWsESYdafKf5yVXhqJn9aU9FbY7VJHtYcETF8jYwZZtGEjrogoCv8a",
  "key14": "sTGvNgNMWuqWf8oe6sXjmXi5eKhaHAtFtLGeRhRy8PofXwcgMWPnU6SXLUQtaXwLQyZpV2zqhRYDRR3NDyUssiL",
  "key15": "MoRMEAqcURjEWqgQQZeSgacxKd3baxBDLJXHMKTcSzk4tCqaHAYbhfAqjVFM9jRqzApEj91KUb8pftn6tfgzvb8",
  "key16": "QUzE4dxkbf457cPCmpZw8m3Xg7n4yx8pQQqaYAgTT9r4ftHEtoUfRN9ca5e94CP8bj18oLBGjCghetYrWeNP4ab",
  "key17": "3yUy1YtVnAU1eUaeWkkV45tP1tuZPZYYRNpwyuTBthmrWCMEjiuJyjs1MiBMo3WVCeLz5zWvhurYUZxCzzZRFUBF",
  "key18": "59Qmk78wV7DArrnN5EYdeMEoh64Z7NSekawgxV2nRpbGDxRoszsNbTodN4KSpZr8iPHaQ8epByjn6ox1R4UXAMKP",
  "key19": "3UjEybRLj6C15VcrQeUd3NmsQH2uemfmv63ypVK5rsp2FXtfg9A85JJBQMfpCF9zs2r4H5MhEKRRmMpbD51uKoGf",
  "key20": "4gZ3pbNYd8t1UyW2AAxDEhiksdmaGwdP6RniWuzNtrtwkxaJi7BHKdkWTLmcgBN3ESeJ8hcnuCKHvA5pPJA2WDbQ",
  "key21": "2jeZnUYBW47rvjPXHei8RPH9FXzBymgeSm6fKy8neAYnYJm4PUZKXgf5pEHFQGL6mF13Z5SV2Fq5WeKLuxQfMQPV",
  "key22": "2hHtQq5URcTzxLJMuHcsd17WXdkd18VC7thNkPBHFvkyC5v5DFSLpfabrCnG6YniGPPh7XtSNZtBZXVyCZm5vRki",
  "key23": "5DXxe8vcTybFmwCWVKE3YzkddfANnqZhnmEvreAaMqP8nAWR3Mn588dRFkXREhAt6rqmdtFPwRMehbMi7cT5rGTT",
  "key24": "Vm9azPd6t8UeC8hV8yQ393PbVCeu3yvqy84YXDZgdz4Qi3i2vvBN5gLEM4n5b5UVhYKPpqThm8m4TNGhSLV8iGK",
  "key25": "3dRCgjanuzrSq2Ssx1xSfr9hfrPQGc6QQMbPxoiPKwhn9x7ZhsiFwiQd4hu269QbTqC2EbwN4yJag8ea1n9kmoqp",
  "key26": "599CUmR688YRhjHwcRpZ8CB7tyUWWhpr39NBXKUEcHkzNaU7KUvG6a7GUHwEtMP3w7h1g6Z2cUpwVpXyS2C5o3Jr",
  "key27": "SfAJJBAyC3HtURHMFgwD9eg9MHLFsuvDVfuJXrWvRTeYJcESRCJFAKRYh9qCme4EKBp7NHsgEgEL7wEgCv1yuf9",
  "key28": "55yMBRD7omUs8q3FUecKe1oiTdruVLLefTPTrjEMsv5ZJ5vBuUq14Mkp7hJDdvpRsyHBfqDCeifxS9wFsV55opJg",
  "key29": "33PiNVdV1ojX59RjqYZK6DFmYut7GmNmoAWKiJYAKX4emF2nUvXBYZ5Mhsx58Y8JWTGXGum7iX13vzVnYMePfhxi",
  "key30": "4h1zhFADfUj3XgpJ1jKHLLmUgPuvyNufWemoyCKL7L8QSBCmfoZ8Qy8jFNUj17uduY9vpBVNVAhnA9TUfvjv48st",
  "key31": "5TpMDqHbgGv7ipn7LuUiE79nyxZ4H2XGkGWrUVB3FCMjZ8QQ58QQYJf8h4n1URD78oBSCo59H1HukszGh11HXkj9",
  "key32": "n2gkzgutSCqceHu71ydGiExUfhJquN94Vyg2LuSyRwb4Tb8RWFH2DBaC1NjrgHR1NnEuTSa1k3nQdFtpSFEXcJw",
  "key33": "2LSNrkcy3iscBNq4bi8sryjrZuFmhd4LLmehoxyE2JDNn2qseYZ7HEsgSZWJ8UkAo27SeHaz2ApRARhr5PTJXZD2",
  "key34": "3Zkb8L59TLTSkr2yuAjTjVB6zqyBniQLLgKn4fmUovaZVximvkyLGXQpAEUMKNzJkDZVaapKAnFrYfUgbgZbqC5c",
  "key35": "R4fxC6Q5KRZLgnBGLXbcyDivMys85L5y7hw2mvRDtg6WVcNHmA3Air2hEfEzuMirQ8nnBAU5JassL3bpmgTgQu7",
  "key36": "5DN5vx9H3oxhDuNEybr4nnjCzE3aFUrn9gxZCraPSyre3tU9ddSCQYSbogG1minLRHeQh6tV3LwxdnQQuBitVXCr",
  "key37": "3KQgyfm5wJeAuiT9DJcDZSRoWDdwCsTuoxoi2b7qZbzyNYvhX2ut3dGXjrujrhng7eYhryrLEUg3qjS9xQqtg9dA",
  "key38": "2fvSBnjvcWGZNKkYT3gHPb4cXY4EN6KcF1T32f3Tz9AXii2voL8q46aMJjtn8Z6ghQiwmdodEL1i4exZfM67vMsd",
  "key39": "R7rCpoSTnBjMdD8eZGFAzUbHig2RjRwnNSsGqUCsnEWreFdzimwhgSxYkNNgAeHNPZSUDNw35TFGwwwkhcBf1fu",
  "key40": "5d1w6jQKoUJ6a7QvNWNHRjtvRe1tPCosBeL6Ws9eRTTMqXYi7yciftdNuw1dnDFBLFXA8GQghYpQ4KDrhz2f5M4S",
  "key41": "35QcYz7pYJjYJiJjqgrVphfgEQEYqU53xmgMFkedvMVAJrsWsDsWosqWg83MFzp7cB5BKawe9W8PBQfp8Fs2aC2r"
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
