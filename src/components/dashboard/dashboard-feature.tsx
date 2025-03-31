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
    "4WYqQvBEYDyBYsjb32sacje5srLBfinMWnniVLhfoqRf1Fhfv7HGbxNQiuEc6MkgXtNyGygZt3wv6groZo4sghXz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bqMJnigjeSGdVCbWEVh3G1NWijf6N2EPT1nTxWdf48Yw4653rYwQUPXU2tVPawYEYjLSuiSfiG5R4CLPFEavdUW",
  "key1": "22BSDNVzV1Tuh3f14Yj2woTd4kR7NxTYfS6SdenuXi3icoirHEDRqGTQVybzYi1XsfvVdbwufxFAvoExHQvP4xqC",
  "key2": "5jMjXtHFhxvKfx7HQDYdpN4QLDAzKvpwiHKapivyqo5PFzmXixFn176hWEeaRSyiQzxyLNz2SWTHP8aW5qhbbbTD",
  "key3": "4PD3VHS2ksb6FXyqNBcGiKQEoPFXHGt6ZTzdyS3Q46EqtgbMkQCVQ7Vz7ho6NhP2xs31RMP4FeQHkxtg1QuAq2vg",
  "key4": "Je42YVh2iDfjRuhz1Atv3cx9Vt2SpuYyWRQ41XJDDjcoCwKhpyZKaJUPNw6DPXRQ2BKVw9F7sXRku74J1BkVqk4",
  "key5": "3qAFiqs6vjYEEepz7S3gJr6GMy8ZKeY4cYbqkh6DHomtHFV2sRpTPGU1EBac5RV5n4pVDXSTH1CVrEAfzbvPrQRA",
  "key6": "3X2BkRC4g9zUK1FNRkcpLxErSvVrR6VqLdbRw6E6u33KByZdPH6PSKWUCcNJxi82RMLCSfYT1LHeeLbXGde3zUo6",
  "key7": "5QhgEuYNTMHLXBcJDduTX7ZhPR8CdBCSDSwUWpAQ5HRenTwqQrbQYKdyn1rQ9PGxD5xqjXis91KE39BTC6YhfsAH",
  "key8": "5Hyy2opYggaaPnPVfYYyMgAY6SjLC1CZCPBk1LkxA3BVgYLKKYQAVKH9pqWXiCc9zLnUmEa1P49Uqa6ApE3FzhEg",
  "key9": "2aJgYHMhtuNPtJGyWyp41LbspPCgQmdiAW4P7PfbtQ2t5jwLPUpVdB22UU8kS31rDsdrW1yx6NFtqmsRuid2HZwm",
  "key10": "UmHTYYYg13J6cgqfDXDcg32ZqKzxMofT2xztxHPsGYjj7AQRv2SF5dwsWvK7dARY4CLMGzKaBL3gA54T7ZxK5SA",
  "key11": "3Mu7hvXN1ZECs5hjyx5unAwYLWES6yMmDvuprEQU6ZrjZDeGZ6MvHRzorJEqKEqSYecbNeQ8VM6yC7fpdKdemRZ4",
  "key12": "U5fi7p9HyLfJp8EnVGyut5FpqLtrmqrpdaGKRp6bQRpNt2pN5z8GEJKuXUYzCgLAMk5s3vHqFNvjJcUS7WXaFYg",
  "key13": "5q7XBs7bkoPhdbmFz7f5XmJTWy8dsvdAf6QoGP46pk1J65FEzyGhPgjFhqiU361aMLBs9Gtof7hZV5zz8hUo9ooJ",
  "key14": "2k1LGRnn3NLqLta1Z33SRMo8F4u2bh2Wsq1pxBGJ62cHhRTXqEz7RcuPBrsVnofuTyRGGEp957Ti6oeHLsZv5TzF",
  "key15": "4JcwLMdvDfDSzg5jfBuHteZwR2vCoNxQ1vHmmeDUipYGPSxTN9kbCg7s4ptbazntSk3PXYM84nuJ5H1Up8zXZDfp",
  "key16": "WtbJZJt6fgFJran8dG1LgK7ufpHvvmDadxSEkKqFmAMEGbkoHKbh8oq8GLH8KDDhS1f5ebGkVcnyge1XCM3R9Lx",
  "key17": "4J6nsP2ziQAg5W2BKe77yA4f2f3eT74fKSadfHapMxhyau6Wx6qWTB12SN7teazPznu65UUeVdswcbBUJUAikVER",
  "key18": "3ztZ8KoYBbpXTvjXVeCrkstu7X3VnFBuxMZBhv3zuVyLvmQ3AwcoqmMZd8cwPzDqWUJyTjJny9SofrVcimnFUu6r",
  "key19": "3hPRvYB5GZ2w3gM4ZcibuW1yoUGGpvnm5MmB96RywYMaf6L6ZJBxLs2ntJ7LaDTrJWykgCwqY4yAo7TLT4yuVpSc",
  "key20": "4SutDdMTA7vx4xoa8vTzmumHVFjAyEjgHWMwfu5yZxPLA7tqKQbf8bWaVNCfPGCkRumw359cdb51Hsa1EhD2BgMz",
  "key21": "4q8xkXrYwmumhyPcwGmAh3oAqqjRhrEzt7Dpyi2e9kYRw64bxNaV6Kr4vWnZrKnrzNdpiX8bKC3EEzkeGUEfVjy3",
  "key22": "2uRFvKRpqqNk5dpxtQXjrZWb8EojVLsA69gYCSyU44TLrC7me4XBFN7arcRUxNHUMXSkLW5HjJieN4Kz9VjTka5d",
  "key23": "5FXo93ycsjTVSiC17bCKJmU8EBziPR9E2zcRo55o5WqAj62fxmF8juB4nLgS9kXmt3p95mwcSp7LYNt9Gi3xRipy",
  "key24": "bucT4C7j6G3KU4Yuh3fGnCXmXM8u3xVi5cvvKGFLU23T2EvnCZXUUynGScfiRZk9SN9aiAzzivtFP8kyjUM9BNE",
  "key25": "2hn9CnPxSetF1AGBL6GsuGyQhGt2D4uvFWuHL6ykWVQzWMrH41CtEFtYVVj2AHSsMAADEKQJpwVgcdkKJhoWSSyU",
  "key26": "2pHggZ1EfoVpWq7AiWQVqpYsXng8LdodMXu37QydFCspcuboVaVXKHrk1ENVeY6E8isLgw1VXnXK5RYumLZUczn8",
  "key27": "5Pi34MBWDtSoSKEXkjMYb1SJififMJ6fpxcNXpEkA5GBnDu6AgBfDwVa6nkmdyH36P4Wk7YJWzUUrUMhMvfXs7Dc",
  "key28": "4CLLg5z83zrSm1XnYuMZakbfCcnFqqeasFeQEiARs8UT8GFsU2UiHM3cPSvVNmZx4kqfRZ4f6Hwn8W24g7gTVnnm",
  "key29": "2Hmc9HrFANokGsvtp7nmBQ9U9wqy7BtRDvqYWeLEeiwZ7KSchoCsvqzN2bB3YBGtqjr4KGBp4bTc8pXVNQtAXNuk",
  "key30": "5GuYZMsrtCahzE1BvUPpyHvX7KiyWzzkMAtvAD2P8DDGNE5eMkk837wc3VMQtMUyMj25omDBsSUeECPtERi2UE64",
  "key31": "3KfckBdUNrrMcqsdTnUvjqibD11sjzT24p971Xd8Pbu3QfPpX3uAhsjjnUwDSeChe6SPc2xrAbDDD56Hn84k28ig",
  "key32": "2pwv4981qzPYiFV4V9TqpqraViv1HrZH7QPKLDWdUqJXEp9kmw9gm9scMcvW6SP688wLibZwabLgzqt6MbSKayCu",
  "key33": "3wRtc8PMJTnJfDhLsws8UB194M3cwCSb7PSu69N5WhVRzH4HcuWpQSGZmrdT4M1bxYTw1o6ZPNnFAxaHxoDhEd8F",
  "key34": "3HzJTMGypaDr88YHpM3iT7pTWRBcwrPQ6yWccy6aNTmCPfQhDudbM8bXXprVTd4ceuYCaqTs21KANMEYtzAH7qrZ",
  "key35": "56iiqK4mk9xjLFByM34gjmnCwssdazT6TFHk4DGD26PgUoUeS8Hvf9w7xuBt5LnEGa4NFeEs2fPMsXU3HeMXq7Dc",
  "key36": "2BfoKc1c69cAhaJf9LEdmwBRSLNMMYKr7bJGsBPN2hUJembHStSzQy96k7vqNmWpcDQQ3SJG9vfcJPqJR6HRdq7b",
  "key37": "2Sd43NACSn2fSk33Kyuy8Kfru1PZLMdMdvYefdCwa2VVmzvzTrFp6Pxn9i3ixpaGy4XaXS9Gcxjeaazhw1PZZWxw"
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
