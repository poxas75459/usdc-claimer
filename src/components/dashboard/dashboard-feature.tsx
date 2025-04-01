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
    "5JZzDvJVFEW5nwWNfA4qoaEjnJJTvCymZamLJ4Cyo4taA42VwUixtyWgKqnJHGCPt4mDvqob9ZREDSUBgTUhvWLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j9VCmt9uBWkEE951qNq9BVZQymDrFDMPjJi8irBQpRJWyMKvFH4HrtLSBYV3YH1brK7L9m7P2o2hpsd5f1U9ebk",
  "key1": "2qdv4jshiwyyXW2Z27ys8oJnrgzK4aGp2jpjS2bvnA15V4GMGTX7499e1t2CeCdCuE44m8f8QpxUXmjz2MXNtDYa",
  "key2": "3kwXLFLwcv8dZQwKf6cwb2nwpsX5wVu3FdRAq5ZWPsuhDDFFL8XCf9S9MDk7KBqfiXGb5PyhkdVGasJ3ECC3Cn3f",
  "key3": "5iaqTkfurFq6SRWGv2icFJAtmLfqzHXuSQvmE5MPkt3E2gYnvC6xc198zTDVzo4ndJvLAGFQ5oMDSP2vZ5NJmZSL",
  "key4": "5gpLPgFyjm7WUk4McxFR86rEoyivNEpUZCZuPjHHhK7wRyUNEukRGYo8ymvsfXsUbdGVgassZeMiYgSHpvSaS2uY",
  "key5": "4iz14xUkVGua3HqcZyiBtb6ioqSWPW46RD6JJUkT7VKkKf964x4pqSDzoNkgpttEPNR6wPWm7f8CL4tusETrJ4in",
  "key6": "5K9FSeCJ485YBJ4nwB82CCGJE8ktD9iz3jqTcTRzr2fiavTNFHsX8LPxZtEhCUyZQfnXGV8maYUFneCLm2GFx2GT",
  "key7": "2CYVa6SCj5rN6hDqRL4upcXDyRdCUrYCm9HNah5k45p3gZPAj58osNieBAwrUJrAp4QRj8AVFL2m8NdG7tBrKpRb",
  "key8": "3R2eWDfZTLx4gCgksSL2bvski866LAaCFqJS86yrXmEnE8uhitXmvSBzwGo7ABLTyjYqXwV4vnbytTpVWXkPnwj9",
  "key9": "5PwGuqpuSXfCobwJJKZ18xrpb1pFay37YN4xV2y1FpTs2UmZCoFde3o73o6kEwrM5oVj92hvDyH1rgUBMbMWmVXE",
  "key10": "28eCmjXQ5JWqySz9hWSheubDA21UYMDQ9L4uVjwVmHHq6tH6PWg3Kyq2kSmKgxZwJcYXWLtD85dBUTqAVUCahgDq",
  "key11": "49z79uCxqfzG7AzCHBGhWQ7KvBCM6JGMcV9NBScP5L9M4XYqSUzusvMbGXBCnmwXBMQTfcdRuxgqY2eHhQAuin4h",
  "key12": "5szgcm8U1pWnXrvyqi7mHhUVqNsx3DiUt4iHZpYzQ6FAb8eBUW5GsQtmTNR26E8VZjE6bvbi6RFGRUMzm5GoA83w",
  "key13": "2uiyHAEcBzK7kQpzxAQ5mNDVyQCcpx4NZxS8QuX5Cs4rrXHBQkMgtPZWjMjxfb6mJpxtA6g1YJjMjLNnH9UwzuiJ",
  "key14": "QmzmrLpu5vGR14BTDJeu4qhFcgwoyGCuLQoRrzYyshn3hvKF8fLG3Q9rcZMsoVwGwQ4MTL2qPnc8GRz3LJngemB",
  "key15": "2BtvEihwTC3Uv7LemoyMnnKnQFcQrJEpUzgAFT2grLsX6aGdQ6wDbhVPgwpy2HPJvSjGEKEaSpiRMWLCCjxZdE4P",
  "key16": "2nqPDhsrGzrgwuKox5dTxj7UNXgGKrHwGT1BGjYYnWejA66YZWBnkHKPiVJvUz3dPoxtrr2r7opTSXb1GC6pxRh8",
  "key17": "5pGzd5eepaSA1r2J92v1E8Q45jxkQ7fwQK64HZzD1aARd3WwnRGina8UzFhyBzFcHc14dyf8bV2nS3ANTtbKzFuw",
  "key18": "5fjVXVTFboHy1zz3T2Z2vd4hKpyc3rtdYnXB9ZXcStD6V5pcsVAg6BiHz2jMP3JpDCwog9bHqCu6UJ2rQ22Uquje",
  "key19": "5svFRfhrP6c1YNAcMCCUQbPb6GqSmPR1SWRshtEZF3vm7YYJWEz9Nq2PV8wACpWhXFN3Efn9VpfcnS1g7hac9WuN",
  "key20": "2nJpZdJud6zr6hGVRB1vxJvY1aJcCeXuNtkyRvR586fNzQdUox4FyG6sgFGzB4dTuFrk2yBipePvtFxc7V2dBgyV",
  "key21": "3Hoez79auTsgyZqkMPRmaf7oATYy3LokTjqXK627mqQTM6hAhxjvJynJK8VT4N7ocxbzj22pEnStNpezQKp6Scos",
  "key22": "AvcYm88qEFnPNiKGSD5fkVRqVoPXnRSaQKi24TSC5qh2a9fnezESUij6H8YWdrdCyQEVwkQtzM7s1PPBjPhnQNn",
  "key23": "27AD4CBiJXmqUjvJZ9jEaiE4mcLpGQ5qgFmZijRd4kB8ZtpcgLCgbfPP5mp762FngHmwjQ7RJNwZcJW5yE1JvBuT",
  "key24": "RZQbLj4kwDvjje35WTzSup4fNTwPmeoSjEdMx31WjkvgDcdhbKd2EmExsv7dUmi1B1fMCcPgufm15nWy12VgMDf",
  "key25": "447nygMKsNzBvPW5fpkP8WWaVM6jyvhT91Q1CWy1Bon3im6eLt8c9gBD53qwrdJe6oBpHr2iGZimv9Y8qQMpJjXp",
  "key26": "3rtkGyEo9dzEQNCVawuCPVN6YDW79M75JSvMaXiy7ZfuK79WeWrAhXU922LCUue5GMTPEwtqt2oqRZBks7Y9oaeb",
  "key27": "mdHwAGPNobCA8SW7cH6LFqD6jLqZJAoXCRwtUy7rHPXkDdHWVWC2bi65s8gW5QXrDrUrPptXKmjiAUgKstaDT3R",
  "key28": "41RrevRo7XiuCapkAuZScmx5GuRWiiZfeNhjvuZT9GEYqkbfQyGLZAnQVeJM7V55abwoNcvF8LxRjBjWvVq216Wc",
  "key29": "2KzUKYWprwTWqS4XfdLUQFKgjftTXgCQGqHNVrz8M9k6WBbKJ4aSFfs3DVWjTAV5zcr7TaXpC9J1VWYyeudG6iZt",
  "key30": "oTU36TtRAQowPYy48gUTkc25LJ4wymXkVAmhVjLrkUW1f1LSHH1s5hyY1mQMBehPXA2H1ebTH4KLBSAnMHoAQWT",
  "key31": "62tmgqSEEvHBPCBUvWtjK1xehvtSYKQDkBqxhbXHjnJV2FjX2Nm4buav3TgNX77k5fHMwbnD46LgRGWCLiqndcWc",
  "key32": "6VjqfNz6pDBcwCWqAJaFPLCtjCeYbk8Q35Kc7mMbLgAimX7iJHkvvGNRYYjYk2CS4qhQvoZRDgK5RnmPKWAXBJD",
  "key33": "5pQikWu8hQkM4YEMnCwUzvyAhwWJ17vhwwtFbNBfy2FUu8N5RZUoiGTeaSP4pspJD3ceJmFJLpHqRDxGTPGr9kg1",
  "key34": "2n3PsJmEMnc8csM2PGTtQW1ukcyo17RTeBDsEoMK8omFBBbfW9ExSzoT8kKFJHzPyf7ckuEbVmYj9FSwwvYoJSXW",
  "key35": "3JMzxSbubHoQZQkuzFB1N64ApEpeL2trgKKojNuys6h2FAocscKmJkRccHvBGME5AnQYuuji1hj9rfJdk4GAbejm",
  "key36": "61D2KvLW6JoaSWuQpM5k6dWECnsn1NNguvJP1cA4NmCfv4qPueHvAruVswZAnRwELGZhKq13kVoWj76wMbAekKSg",
  "key37": "4x564TdkudnyNNboLRS3RbnNLXr4DaW99YB9NKiMB2cGEpDtMw8LG1tpesMNCWUa7tUEWt2d9kbpBLtbBmCVQik9",
  "key38": "27WWABaH5TJNtqZM5YPYJQxGiKo5yA5PsCizkXk7iUQLkyBgNuYPVz3GuDncn628LuPdNEHiEa8HPZhr4SoRsudV"
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
