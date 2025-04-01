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
    "5A8bf151xfdQDb3QuaSWz6hiV9VFR1L3JrjPVz6Yq1EKr2cF64zuPYdy1xh9fTZnSafkrND7YXg1wcwkJVT7F3uV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D5JH3fewqx28RLpYPKGg2PnNgNs5jrVbak1yJfRitEK5x3zNtLWiSj8KkDE5cbZd2SXzAzJvA8w4tfCAKMMxRJL",
  "key1": "FuMvxbtQXz4qg4APZP4o9inompSXZ5j1iNyRocY8vS1xuATFq4CTTV2mQubyGjJnBmf2GBDE45aCjJbEajGfedW",
  "key2": "5849kq2CM9Jhxj8A2ouruk2avhQ8Lxoca4zeVvyjwFdsHBK6xfBsewNheEvwKSRf2RpVGuY6EUvqsDC4qTY8nRvY",
  "key3": "5NtWX5ZFdwjbV8rc4y8Bt4ByhtcVkrbp5kU5sR7gb9Jn2gD68WJaCnKgK8L8FaVWVGmVHZyvHFXF1wH7VXM6qaie",
  "key4": "4Nct7xJNFr4NVQ4Ud1rTAyNNu4sGcWL8LrPftpSM3SXhFiDNUnqVo7Eb3gVKD9Cea8eL3CodRRZJmwf2e9bR18Xr",
  "key5": "4Hndtpobn7axFoNdKWHBxhTbG2gtMYFpbxm8adBHBNrgbgV8TWqUB7WEwC9RCAA7t1c2NyxtkSm8Ayz8574m7nVi",
  "key6": "4jXr3g3WzqCjrbKHYY91hfq5m9Mck5togCDj6tNfe4RDWuBDLAeG4ZKp1K9GHb54q59ib8NMDTRoVj2aC7nA3ebK",
  "key7": "4a9V4cFJ92qbwR65YHsNnR8yaqA5i5pEcgG1pQwRshD2CMVqwGRGDMZmDEgz4P9qp15KTq47SCAmwZPcdetNTRov",
  "key8": "4ujur68ehaFTsTg7xSD9x9ir2y2gwt9WuxqbFwWZNZapeTupdrvytdEu28AYhZYyfRkLjr1XAC7QvjsrRfRByc7s",
  "key9": "5FjK23oEUrhA8cZQm4eX4YaqC7PmG3YYHqWsNXdAhUWdeyKCeQmscaEMSbZkCZJkJ1nq9QtWxgabvTYQEzWJxqKc",
  "key10": "2QUsGkUbaMWMTqV228skN3Go7PwB5GnFTPhz8jpd3a2kK8PzAYLuH9MvMrhmkEEbBNeBx1wuC5Sqj9MCxnu8N1qQ",
  "key11": "23J5hH7guuoyumNDoNQB6a2c6jBsnmvbAuX6SCskXgaSRHRAENwtVobuqtpNiPoq3gm63akhDo9pKNGntprTcViy",
  "key12": "46v3UvUzs68mKMhTD7GJaY65cDvpQSt5x2xZhztnr5K7jzYXTPod1AJbJKDuMtQojCPt3s3e88e5eHTeenx4RBgo",
  "key13": "4PdzRuFCcekzzjB61tDRrJUzMh4sWNGL7rGRqNe3QWaJd1gWURFjBzubb4AAQadfxJY7XMoFmhmboJjeaRfz3oWB",
  "key14": "3kvYdmZpLbeqsaeHPd9EYpCPoyp428WutcZg7PjJ7bhFGPDZtBd9WiUXRVC1gfoYTDvqPvPT94nEckXB8JsMgrB5",
  "key15": "48U9RKyqh7ZaNGTcGDDaPSvGDLRJ1JEEYHJAXgLAfDKbyeRJnZr7FSbh3BjKNcWovkp231De7cVZFqF5SC4ekpXQ",
  "key16": "2Kb1xR7RFsYTg69QcuDUz4J3wc781zDTRBaSM3viG4AtkQBGGC3nCv4C7LyiEcCmxyEL1geYJT4g4SxpxL54M1xt",
  "key17": "2kyWYB7tGz868d3bUHmBr3G4i2ZfPfbNDEupbAHyQvCzpvMZq7y6mXVet3ou9tZSFbkeR4PuVB2mrriTc5NbCfha",
  "key18": "4LTABUY6PUD22J7T7HCpR8bjEpxVXsveQekN8P39QQKYo1bULDnt5AzN9dL2bPkZQyAzF8VCFGaNwVfhepaZhJBN",
  "key19": "63JQUWznsxUTt3z59k2KMoUT1AS5mxKyebNkJkAWbNzc1qBZfQEpp4c9K7qsm8HGJLqTiFN1Hhspk7LW9e7sgzf8",
  "key20": "4WUYYCyjhwdRwd8A5pB29Ar3GWLfjGZS9EUbUojpteRLmagzH9bxKDSmy7eX3JNdMczQUdoWsvjaX4A3UKfNvJZz",
  "key21": "5AE1yNZzWKGMNeG2TJcqW8ybX7rT7bEHZ9YcuDwJ5vvpVaxCjr8B3xYwZHjRKsFXAhEBqs6NbyKRySoD4Sd5AEyA",
  "key22": "8fYfAwnNv1hX4xUGKprMGDJim9mUkYJPFfQqojMmdLaJQVq9W9NBcYCTFoLcgbGFmam6YntNFZgTh7YSwsCm2a5",
  "key23": "5TwhNZPKstnwnNaMhPeP5RnRFZAGUc3HyQyPx1zHyFWJdNu5BJeVzbBvuYgYnLewq6WjreTgy7Vu89uUCQxmTY3L",
  "key24": "3UPKczzFMd4JiBaRUmDyAE8CxFJwYpM3mUspGMDS9PKMNCmDwp1hraeMY2fUEUjkKpseSnUpkZAt5GV6tSgbBTzM",
  "key25": "chJgtd1AKSU8ERZnXNuzhDWHGVte4cUcx1dQ6TQY8nPpd11VR6ZFYVY3ZYG2RwVj8kagS8hmHb994fWMkH7wNet",
  "key26": "4xPruo8p5ZYYbpv6MfaXJjuw9kmSJ3RZc6g1dvBLoU5ASeiLNpsfJpoc7r2RqArsc9SqSTMDFo6feUaDmHBJosDy",
  "key27": "4P28QzwVycgG4iVwa4bDtEKU2tJYkGFpiXXBAzkpazGbbPxZ2Y4ozsJDn6PPNn1vFfK2yks6jC8bHnPiqZ2F31Ro",
  "key28": "3YP21VTp3f9fueYuVCQKX2VCDtq2wTMcLARbZnuqC6SmneSuke8qN6Q78pzoYUFR5AJSazrHpC5UmpvWCnWHVaUA"
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
