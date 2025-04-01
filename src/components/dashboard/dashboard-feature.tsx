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
    "5gYsiW85fX4Nf6oAFMpPvzis1MatAPb9KNfJgsYrLU46Dp3qr8X4h6DqPxwfknLxDZ5c5s1b7BEK6MP7mocGk9uo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Q7hxVn8VF4SU4HrX8z6fFcx18FsWWKwXEXEyXra43bxsHktC2JbEFGUdsnf5xMW7hWafLjey7zwAXvnUdenCi7",
  "key1": "3MHXCc9MHGUUGTN2D1ZUnn5pHCLdxFQzEru3AnFSsjufnTBjbyxKckGJif8aRdKRXkkys8qjKPsG4svqXBqCKG8j",
  "key2": "63k3gLHpFsnGF4PDLAj6n7nQD1UVkC9DJGhJwEdpEmjNppRgBUohrymcpYwtcdn69bqTjdmCDmiWvSiKwDke9TZA",
  "key3": "34z25QYym8chABn9b6PngdmBjvXEfanAhDr6PFdDTim4YDwhiand73eDEBhsZyxpz5E1KB2vkr9NCFdcEfskTKMD",
  "key4": "51SpiCt62c9sTtvFJNbQpWZeRNVywB5k5LwbJG3U2LyqPDWKAYHa7PGdUMKa88DMj2DkWK3ebWY9hqFfv7jiaCPg",
  "key5": "4HUVzyft4ds5wJvcRpTy7ASfKNMDLoNBF89mAj59t7ZQH1VppBvJeXmAERfuaJeEoBo1KUmzSKP9ht4CSxqLhmCr",
  "key6": "58HW8KNqQGL8rrhBzFi4ufUQJrTyYefcVf2csA9yP3D5B6b1j8UKa5CsRDCz6FEyymp3qikaXGvXj5teHikLprLr",
  "key7": "2vpERzaTnC3Cn91yV93kHrKj6MiDLBVtq2c3G6KaexVNVwW6E7ET3abDpPr8yigy9QkQXoLkqTs2Vao83v9cfWPm",
  "key8": "3XpaVvMAzaUZAoVrYxUNP52L2A1Pym7xsB1x3a7q65ButZQWf1ZXgahCadKgDhLY24Lw7r2zE1UPd6tfsG82BavP",
  "key9": "1ekGr1nfWkRUnW8UQ9qFes332LwGMqTg8oLtGeZhB26NoXwPcGvPbCJgyF6rFPBNrCShBXdXxe6zpjaAE359wo2",
  "key10": "4mwvD8ysYnkxrzuShS3xsdzJ6KGJPmBFPNLjH5jeY2nBb1tvoAnXUHwEBM79uMDy17yPuBBgg8CBmAQij8SEwiGb",
  "key11": "5oetKLrLS7A4uvvbybFcUrCoJrUMNNfZxitrBcVw7B46r5YYG82PK9htSqSvoDfno8x3jQ2upwx5t5BJAzjrWDFA",
  "key12": "4NxU9aixp3GidxJr9HG7E4Enq1yXNspo8P9xNpfxb491BguFbwM523CZgkCEKpwhRZU2jwua7sGtXUANK1s3dLn4",
  "key13": "3Q6NXT7HZjYN2mnsm2ce36d1u8ENWL4JQLrRkFYzN8y5LdffdS2YoepcpDnBzrtH56qmf4NLqbt4fFAup6rRPGGp",
  "key14": "JsKXZKXzgyQJfajLyPYs67DaHPPsoNk4oYcCg1pdpbNsXeHSrneYWqo216M3mgedAujQr7SpAcEL7iHDGveF6k5",
  "key15": "44Boc87fnU3C8VpSa7cw9ks23CBmQd3ZJ4E4B7mEh9bhhEaNAMPTB4Ejc7WowLHf98yfJBzYjahPd6c5rYHWFhP3",
  "key16": "5LAKxMZjsdfxRA4ricUsedmfTHR57qP1PiwPWFuYX7sGQpSPPiyYLgY6i5gtzC8tVx9chSSrz26uFagjg8zAStto",
  "key17": "472ei3WwF7tep53XHmyaURoANrMXo7z1KumdzutvWNRtdbNihxvum4yCzTQ71p4VLzx6Yd91GcA1YKh8uWa9Rabi",
  "key18": "4dnSNdk4Lrpk9CZeFMeypZRKTtm2j5Q3HYaQSeYbBXZ1C53yjd6nmbZQZg9ksePWgwi2t2bKjypXydcMiyQ5j7r6",
  "key19": "5o12pDTdir8B7QhS6DZ5wcgEwtkZu5nFnAvmS6CMiojYssKwN6hVWyTmuvjHCWnGNX6iGctHCqo1dE1ktCj3dwt9",
  "key20": "46sM37vKZztpEpX2q2GAm1oi5tvecbSSyMG82zRvfwyZumTarsR2dS7Sh6BYRVj8t6HM1cPGv382pwPy55mqcH6L",
  "key21": "ySTjhD3dtMzR3kurRLfom6QEiFf7izy4nQePxKR5DkwiawJTiQbKUwiZ2XwQXehpZ4DgPiSZ5GT5WH1eCsPhXxZ",
  "key22": "2mJ1hRXeW6jmCoSLCpA4eQtNh6d2UC6SyvVxvzKmkag2tq1ZHJmsWzrnafYcJKFqCYJFZPWJLkkHAbXmcaTEyVTs",
  "key23": "5MUKwhv33JE3hmZfhxKE9zxmRocSzAypQ9XqnN78MEAqBth1GvxQTuxGn5Ww43QEXUWTG5Av2GK9dQxrQTjBmGsP",
  "key24": "2K1548HHhVkAiVcDXrtWvWBYCxY9BDKx8r2jKcDYLqPRXgAVuCzcXyV2R3XvSmHpaa1AjMWCMpVkWe3NoVCDhUrN",
  "key25": "54Q8CRXruWoSazCZKZKaacBTCMukHWoTZvB4pEjS6kgyd5iW8nUzz1PYAXGUQ8deAodHXmCbzxpaHDGZc6NpwtRA",
  "key26": "5r9D4d87A61YtfAHyhBUSUuvvLeJNCNawVYu9j8aPiEShVXe2fKgUKKdLREtgU9thdxB1L6dxgEkEgBugR6ApFVA",
  "key27": "41bCTapUWEArQFGBd63LfhD4oqgu3qvrkn8FKHyr8k5aqqvRZrGYh8JU4CwXeks5MpktJhyKLod4rEjwM2ScNQJy",
  "key28": "21GCYPEeTym14Hy9KBbKPgUPHSuNhzGBSc4Rmbg8usudvRu44zq8sZDebUdVN4N6QBY5pyKiZnyEUYFC4YTsaaJa",
  "key29": "5k9renBVT9PLf9hksC4UT1tfEyJifs55MKRuka4rKuhb7Z8zoJgqfQbLegmg4FP79m5ba55idvT5bnf26hk1SAKA",
  "key30": "3HKukUGLWWLg8nZSwYuBveDMCykMixzhuQeGBSUiBY8tGJDLRmAcJqVRht1zVm6heSKVYT6kqUxYh4fGhnezBRcq",
  "key31": "4scvpwCst3ktdKiebHD59m3ASumfzLehxtKvTbZf6CRVh1B6bfwC5EtY5t8Srgxm2vfi4ZHvKAuBiVyX9FogS1yT",
  "key32": "3bR44pnkh2HeqEhdaHBAPBKtQveR2Fy8nggxsUSs94HB8mcBB14LPkXRuiAxV7T2RVsxiYJEH3hDy68sSzWp7uns",
  "key33": "4hD5AxDDJyiP7ruGYqnSQgN2PdNiaSbd1dJn7N4surcDWuV6TXHZjbYBwntEfhZbMmty87UuRAJoirRvopBR4614"
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
