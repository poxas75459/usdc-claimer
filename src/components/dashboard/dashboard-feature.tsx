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
    "5kUV5mDgcBWeLHseiTtALmgMXXSWQuv84Jc5nwkXdXnyaNTrFYWHmqf9Yyzdsuk2am1QLaFvp3fAiQ6FP1Cu9FRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AFVtyaxwgyceJgdSpJvw7nR6BG7KZyc3eoGdzFGiZjqokA68vZMNBUwsGeddnTi1q36Dz3fpXRJezhpUbEwbYyB",
  "key1": "4noMJhD7UtuHHmjNmBN2ARvQn22AmnQ21eUgNTHtQhgm9YHXRF3qFHw7yorjfULL7gDcvvBE62kCWgEP5hnZJyRu",
  "key2": "4YhNE5x1pK89FikssX8Ge3uuA6GWPUWNC75sWmdo5VWXxZJACLj4FtRdAGxX6qKxEHcU4gd2KqqCc4WkzH225PUz",
  "key3": "4aU4BYsMEi3R5Enaonrs5k24nue7PSbjvDa2gk2iZ8FzopcMCi8XQUK5baPnp35pKos5D9NXicXp7j35UNiivpEw",
  "key4": "2kKv9mWXNJRNGjaRu7W37MbzDj8FdoH39yk55U4MXRiszc2askH19MawxG5UYyeX1U9ABbJWyxvH9UrT6xDW9BqP",
  "key5": "SwL5GoG3opFGxZq6wytYmGfc4rrzGUwAFfZYetB25wGYQuo2FRuQxCGfMwUVvmtSUEgWkGD3pVzs1VnPnJ9mk7Q",
  "key6": "61h6Hkf6aRmzNU9YCN6VXHpvLEZ92ffNs9EfQp6W9GKfnvJTv46ozP7bQDJPgNFfCiMGe6iRucQRPJtTpBGaqVmg",
  "key7": "5XviqamisaYeE9Ko5cs3ZemHUCTYTrzEmzJiRJckHDrs1cEBMKoGsfiXYZmWZm1CYjL3HN3cnPHBC2ZVeGxvkkHR",
  "key8": "5f414FLEabYkX8SUKWdYPbRXdqkRJBasNqGvGB42jHx52XAGyZsv2UcCEHMusHaGKXMXdmnqEL33yrx54ufqYBLm",
  "key9": "5Q5E2MDEyHSzE6eKsqvhCid9qLj72A4T6faq7vCLkGbc4rfkTRTtb8KwuBp6wFjMz1pksEtVLGEnoXSitTa2nvjj",
  "key10": "4WFZpBrdsk3Pq9sXQQiPsqX3Tjd1nszq2hWgm6uA7oMPg8WxG1yvPoVN1UtLNaKfdJQmEAJcUnU9karJM6pG3xTw",
  "key11": "SHEM7KNCPDhTWTczouQLGk5DAFovJzmqAz6CkowPmKZ3YvjtkHpsQoMVZU9x9crxEEzGsd5LPnnjPN5VnuTQUMh",
  "key12": "evHE1qBTRfpsKkkcneKRYhma2p8fGVrqSn5imPcHoaG7u5sKCbWtsJ1fNfoC78F3Fdnrz3nZyN8fFrDetJmKdsw",
  "key13": "2zu9xJ1bcqT62wq8ac54gru2nBDAxhGq1AWcJfc5qRJfV83MZWfheXQ67QJvVv1Y79FrmpVPaxpo7frYZGVxqvKe",
  "key14": "55NvGa4rknUW4PdcXkTamNuFXSBPiHD22sWFMRPaFFd73rLKF8m48h61PxaHrRQzyQpUpckMxM1ih44FrGJNHqUV",
  "key15": "2o1VYUdyDKLspVqnQC1ZAaKSF6zT4sewQg33p2HhJcr2oemiXXtkHSQEgN8wynRUTEJCEnPV7xzLfSbVAkfcQP76",
  "key16": "3avexjJiC5jVVyWjwBHh99baSE3pSQj2Y1fLUKmhYVZ9Qvr3K7KfZmigN1oVUaSnYr8VBcPfjXTJEVcAwAGCaSuk",
  "key17": "hES1Lwn1dgw6oHHs63b48ANqGCKykTPbCF8LCGgj5izNhC2RgpxzfNUroQERyJ7bXSDkdid74B3q17GMDVLM8cU",
  "key18": "4XUzhDVLEc7k1HWKqtGhWQCJ77hq27B6aWx5JpnTBWUCEKUsJCaP5Q9QsEREzAHPgf1QjBmUQpDgApfcZNNBw4nE",
  "key19": "4uJjfm7Exjr4dzzhqSRkzt9RbvZmhaxhAJcyJeE7VqH3Jbf4aJng6mTn8iMKVRA2HYiA92ptG2k6tYcbrnH3iieL",
  "key20": "3cGkSwNLwnACc9CzzcijsxgACfRAxnxSNi2iEfv5Rn83F2cAU6rd184taEj1DqJG5y9pHn6kkXwmZNLibnugrYF5",
  "key21": "5iG3iRX6VJ8YpP4QUrnf1m2a2PEpCxrwkXhGYnr9yDA938qowKPPSuVoqNt7WvxecRkTqYxbNjJupHNr8XYouv2g",
  "key22": "5jUTCne5RnxAcfpAgxoQkfiGKHyR9bJxJr7mBhAHYUbHMoq4DoDXY41bRFFy54U7YQzB8cjTU35BaH3WvSZ5F4AZ",
  "key23": "5bti3dUmk3Ju2tL2SKovCyShF4j5TZQYVDLSqrY6wMNTTLgy6h5f79L3Mzqb3kcWfvsjBU9RDrpJnHAsBDikgJme",
  "key24": "5encHUmmzd3Mx2kpxxjaH5PWKh8WYo6nc9pqKxEVihsyyqZYUXZ3izbDtW6kspJmZ2VoxNSvTsHTwmBmVaPQcTtC",
  "key25": "2VehFTJkyRcrBKFJQYmpWRBnbHF3xneZbaE6yY1EgGSfYtxnY7xAgzujgtuRxZwCi8ZYQ2B7by3UST8XmfKMSugT",
  "key26": "2TH2pKC8fpLWFbGNnxviKfG5fivZSWTc8ZKdsMM7cBYmJHKj1HRd6bLfarmvECG5u9jBmf7QXrHFkj5o2EeJMRNu",
  "key27": "5KkeDDRFBpM1r4rbuhMwhdUqgWy5raxnYm83hB2T97uYQrPdM1G3QFsonJPBRAYwRUu5TCQZxbcQjbRdreyeXFtK",
  "key28": "3zknkGHXmUsT48HxNJgGsxRoubi4JhryhiXbNMZPdvPa423bSXYF5g3hf9svfBLxeBqnSM9i9CEGgiho7CMUJcED",
  "key29": "2MZbd25TGuaaTdHQunWVkw196DfWSzBqKo4YHJukPGw328CLx8m5TUSAyieMRSngj3wRopJxw5oeB7eGn6XwuETF",
  "key30": "4sxZwkw8s7yt4uY8USUNy7XBfPxzwwAn9rysaFAdzAxhu3hL5L9izAaPSpG1FTnq3jbni9U3qzoSfRhQyryEkGhE",
  "key31": "K7ULBpKFyH1bPf6bAhEfmh8xypTxwTSFMEaCXnDNEr9wu38eWGEem5StZ2LXDbw81bdTXiLZ8Jxztwywcz8eNab",
  "key32": "3vTaty6nQmVsjEYENNV6KM6gFzbq5aMC6rxjYot1QXn5FMUWcDkQi5M5RfKcwQDne2zS2aF5f3RvZJn1XLDyYt9L",
  "key33": "3w9TQxM8LbL3J8aHe4NQ69tBNTBJN45Se7Z534QJLzYpNCEZovMFeAcBpJwWWGq2aZse3Bgtr92gbdpiygw8WMCN",
  "key34": "5gZchUpzrL75upkB99L7iBqhWV4mGHPPP7UrSHkgbLXa7J9rk9eUrUJ7RHYwXonivPCYz7KxzNtnPKeEfNUh533E",
  "key35": "5snV2DFcQHV6Lkpe1tT9g21KJXatQcbqfSPkqxzjdkLwu75EbetJm2RBbsX344Tn5un9rUrcjW4EX1agxa1mZniA"
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
