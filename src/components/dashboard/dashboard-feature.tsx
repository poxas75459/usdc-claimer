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
    "4tGoekXa4sTUjuD39LCZmWvK7G7Y1xJNkHMcMTppKbyCueKzY7spQRjiSVnuXH6ZFaKHupMSGVi5L6YRKH4aCSYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KW8TSfNRV4UA35ybyee4MhvyhPA8NWaKjXNp2oC7Z2PbUrDDB7xWu2rqRctvmWFfb3mwUwhBziaw2UGQ5K1ogif",
  "key1": "3yRrECdYVPbRtw23VgVeEZbk4X82hGPHUoTzKDuNDDTrXmYTfQamNnv72uxXB1j5CvcBJTRtoyyuGXLiGkszLeyj",
  "key2": "28qCAmuW153x7zoAn7VbVq72FBaHBoNzth7DqSP7rymKwwtMp5MJPFifatehc9gbjK9neKAk8E8CJE1infcxL1YV",
  "key3": "572WEWTRu9NcJtcphcvXkdRoXHJWcLWwbHnwgBn1cRcddkt9px1rRo1iVouAzVZut8PWpnQYvmY7aFr1tTwVkQ9Z",
  "key4": "2uG86697rPXMLgduXyuw1TGxiNHLpyhKmk75TuoZpMMdjaZFYe7GM6d6FR9EDqaiyFrmc4iE747DkaxvQaAGNzgD",
  "key5": "4uwXTGKUvexPNkf5X5nZZbWT3WP3LuFeSwGYe982miqK9dTdBDA6YhzuU9buSEugos78orDmm8QpCpJ6ZudZkpis",
  "key6": "3nwdZQhttHs3dPuHYP5Sbf3oBMorWLxQpg4HCESeBtb9MEdf6kMGs67Jk64rNUCs6pU46Q1vH2o5RT1xFU97L3zf",
  "key7": "61PaPbJDhT1K5cDSFHdRHrbrZJNPj8vUV6bZwTtRduspJS4eWR6ToDG5zVSbD1u5paXsJaaosBwCqMdP2QoVj6Ui",
  "key8": "59wTQuVzs4VPgiDxMoUrjitqS7KFmC8hHLtEVkgEhFDML2XKLCP7AwFjLmH4VybpJbDQm2KkmZkqRJXpmEa4MH1C",
  "key9": "2tsKDbKaRRx5JZ97hpr5jMxtgPbD9h714jLBmMgrgDmoASsABMhyGgo6Mywu8sUvysu6HCvQa1tjjE6KGKrpbcVY",
  "key10": "3LRS21ZWoQMwCjXBvQ4n99D3jnYA7RGrdXQH1RnwwEBVWKKGNrrzSG7Pw8jN5D6E2aNqrC187uz8WXfp75YPK6FC",
  "key11": "5xbzDATBmhMMhHjZK7Xfd8VatPHLTtiTKvLwFxqRNSsr9Z3z4sycTwHtX7iVfpZC8cMGMbQD7FqxoUJVVcbrA1JJ",
  "key12": "3G4h2jMwfBtkshWuQ4RsqnEsSRuKeKS8GvnnQjQ7QxG1UKcU4XiNuzj6i2qmxkCEatWyvSrYP7vdpFkcVVN353iM",
  "key13": "Lf97mkpcKMjp6HuwhNtdJvgNVz8vFweu97A5ZUHAHRoCMutbAv13qcvhYGvPs3yJKp3RyMqy44cGgnJG5cozyue",
  "key14": "3W967W355a4hQAzPyVTcZV7zx3e4WBHrBZRHr2xApWfTPa8DE3p1AsxbkCLLKJE9PUWWmL2PydMc9FEPCzXfxKKG",
  "key15": "ZmS43YqWZmbKzRb8Jdo4DkNrpN5p22DqDYzShVr5iSonTcNctLRHMo5HkaQLw1saCvC1uiURoUXHcEgMB36747h",
  "key16": "5yA2Vx6U46M2ydzKfpuVTuUU4xvyBtR4arzaL9d4tVqUEkJDWmab4p8YQVhhwsooZbckvJh4f8duJNfcVD7JvpD2",
  "key17": "55NR5FCuxNaUmTW2qAV9u4xzSGNEtAWDRqVxU91yX2kYXuyB2rjX31DvDS29kRbWKwf42FKTBKSDfoHxTEQzSRqg",
  "key18": "MM2w38nsYGhHRrDaodaV8X6aQC4iWpt61EjT5f9CbF7t86JJyYThP7px59uizQnqjtX8WyyzRuoeXrmSYD6vjUA",
  "key19": "o1Q8XcGCQ9KpGyPhMnpLnbz3qkWkWZaKT5MQ1mJZ3nDYzVpJwuGDN5vMEGxD81oYGFfzPbF27p4xYzmNKWMWRdR",
  "key20": "34i4MjiqQru8suQQ1mbDe5XA2Prem2YTKDBBGYP5oxgL9NcoD2BmCH7QTnbGAG55KdGpxxoXb8QU72Wkg7rx2SGg",
  "key21": "4yeDyvhUhxNhj74L1nGLapy3cJCFGZzoCq2kb9JrxwrxRM7W9XfvsY5mDA6F3jGmU1idJBf7w4krFUn3p6TBn69Y",
  "key22": "576XKwdGoevqBnyMN6PMi4nRRb5Afw4XbftXj8c24ovjhTHk9EDmRLocuZsrFXLwE1tJPSYTiUzmYWvAkXcDaZLB",
  "key23": "3KQaq7R5kuw4bBKsAbyyckp2NE6FTy7raCfgu5V9DWQ3BxYeB4cprq6RqpcnU77vXaNbFxN4ErwsBZshsAveFJg",
  "key24": "GEEVZJGwG6PYv9iz55jVuPZP6be6CmTXXn6xuybmunathdzUS3XbndPjECmdwEouGfTw1EhjhF9RK58wnvwmEVK",
  "key25": "4YFc5A9YHVdUuPVEXbAWKHc8JV5U2mhzGkqUfcZT1noFnR1s1JHjGPxkhiq72BwYfJzVUWg45bNAXiBEgh4sRWkw",
  "key26": "2KVfqQN2YF68KrcXBo4S3CyZxqBpP71hzsSEWjARa543oyVDeYXAJ8YofGKq1rjfXkTQZk5tk7Y5dD3vu2nw7BLZ",
  "key27": "2XPn1QnxS2JpQekS7pTpHkqodzKwCf3oNJCToEQgWtxabYxqNFBtcec5CkAMmDLYqY2A3CmoKmtYqAn1KUSLEZCp",
  "key28": "4ckUH2ztDGeGYiAbv4e2A4knLG8Jjzy5J6Re1GRYtfAbEhJyrXZVn2KDs57sZir5ef2oZNrnpfALEu2M1KJiZk4U",
  "key29": "5EgZV9274togKDzF4jHNMz4heKfHZs6b36Eh7xn1Ta6PUW454WkMkVw6q4nG9Y3Sta2u99cXS6TcviWiZYG6WugS",
  "key30": "47etRpN4CVqE5X6u7QJeuaQytai83PPfPyPVmKE6WpHWEXBYUr3k9b4RjNJ2QXFdShkMers6zjipRqwz29yX3Kqh",
  "key31": "3QK8KmiSs7cpnhLpJG8poJCYcodG4k1MdPMQ8s8wXn5KaXU6upFMpKF993d14gQnVi37zorXkkb96WiRvsGnWn8A",
  "key32": "2osH7WQZZLcKwXTaEqbiUjg5Q9JbK36UB5jrjWHVRSyUMMtTMBtj69dJFaBvM91fJ3hjzqGmsdqHiNpQHkxnCDct",
  "key33": "4egntK2gYHAyXZbpNrV3u9NQ8wQNniHr1ivDfBcamH7nnSjyq5LALXMoJQb32x4X4Lt4iziEGVnmcehtWCzKvw5i",
  "key34": "5QWPZLr7rb6RpTmSX8eKCP2pB1pktcSmtcuoNvjAAESh4UkLYYEtBhHXSqt8QcZZjMKALzKcuMT7kz6mc7iyskkZ",
  "key35": "2gNxzmwVzyxRCtq2yZZFw9rLRCgZk5vQ8ZxtfRYKHVCZcJfQauVWAhj56BgqdeFWb6fCQkHs9z5d9CLGWn3YHRzm",
  "key36": "5F3wJT8dRmbNizS29722RFpM1amnybAXv2UWSPZSPV8ZPW8LJPpcskceG3UUW6up374X292MoUMccViLg2UHqMDR",
  "key37": "3yHTNtwzPf6WWMUJYvn6FZdc2i3VG3iF2ko11dTZEBbFtThexnRiHPa5yVibKqQ3dpr4tK7mHeWrrGWWh5GgmC3K",
  "key38": "4L9eCTupEcyMgLiFvbxpfgJGJHuGCK6RsnBMfS1AfHJFV5qoKQiA4wJBgYsUaQtCxzzBJCvB39hr29TyNvSqbLP4",
  "key39": "Kejn1hwEo2u7MSsG4NqKKGuEJcveK796D1CZhWL3h35P6LXHNz9qHbqWbnqtALsFRUfwDvqW4QmVFJVaQLzF579",
  "key40": "aVpRm5jP8vpqJiaimjuFw5LehU1DkfXa72aNCViBjgbHQuguBvRQDeqBo7XkTxjLNngSG1uVHyfLxfR2PchNeFY",
  "key41": "2GEoj8yGSyiHmwMpkpEWbaoB3V3XSYHQwrZCu5YHWqWWNkcz3MUiWWBrAFT6pe42cs8WNZfKuMnqQvzsYduS5YE6",
  "key42": "3dgyE9z6VCAVM91TEdATB4Q3uVDkLz8c7tgrCmqdKVEJm9WgwMGJsDMCESE3b4YVLdP3W5wR6GEmZziN7Xe4gfrz",
  "key43": "VjRUNfKDUKvKkAyfno3oB3QJou1SeBt3Dvesedsnw5KpCQQ1ry5VPJgWD8PeudMvPZKYhdys8PvC9smQ82CwJgA"
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
