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
    "4haSwUZtYRjHX1ezTp5FWv7cHcXrDDC321pLe1rzWB7a7fxcDq3mH6KgtFcsKoeBwFfjDpRVopry9WCQgr4xnk8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ea2ddAecbazzPx1YFRcyD7TALJWcvKhiVKDpcgLFEJBW5MbewBoFbu2FaLN3eLtp7AUS5fMLmZk2F67tJLMQn2t",
  "key1": "3EDByAsEWeUyUisHoyp5nKx2f7Aie16zXZbV9aBibc8D8ocxYbcFeAb7AFQForbqkWWM53dDDjZiDRm6Ndkc86c2",
  "key2": "3bkCeTPdk97jsLVvRT5QfmU4tVMNngYPPtZ8m7omE5MzUTQ4nXzVuAss3w7ExeerivGPA5aWC4s5RLgBQXQtArEB",
  "key3": "48KtbxrpDhzyLtPnYMusYAuH2M1CSP8MdhDXvCsoGoYcS2i98zgCZ65bWek5eT2Q2gLivWvpK222dhEdq3JfGhFY",
  "key4": "3peCy3q5PFCQRQSuSJHD9eHWgZkkXHKGdECmAfAdbYTQjHCUEMkXmUBnpsXX9w8kPot2eK9gNZBsMEN63ZSi1eVV",
  "key5": "5DjrBd9G9iT3xGy73SLRLY6vfqUCmoN9axCexXDAUs2AVKSKLz21oAAHGcPsK5LMW1ZgAQYBKL7weVfdgTTj3Qty",
  "key6": "LBviPANoo4yNBHum5yg6PByS1CSshxhkBLmv4rGdhakS69yRwjL2q39XBSuCsXuvVzStXnqMyHd1zMCvhPHB5so",
  "key7": "5P7NzW8EJGjWvGEuomWUgU5gaA4BZNn86qfRKjTN7jiTKJryVgBwcWVp1RKitWSx1pg79bmtrHa58pCQtzESCqTa",
  "key8": "3RrJCTiJKdXmkZbExY17ZisMG3PMYpiWXvTYMf9MSAfu5EbKGNbEAtQy58CF4o1JKpFZN2eqtXXrZADCxQamz3Yw",
  "key9": "4Bt8Xifce9G4ufWtaSYnQc8sqzzM7ggAuryWqpJZLKvRfBnqm4HRrcjLbW2iuVMSvttHr3avLBf72MrRMoEHCmAq",
  "key10": "2wj1tKpuKcvw2nwdfex16rPxZZUhvdKoMbKDU5fMw8qSzpZKS5ZcP7kb6qN83jK3Ry9JmjRaKDn6RggF8vBw3GLP",
  "key11": "2ytGCqGmUa3MEF2cQ55FXyj2SGaGjXK8U4qRsYsk7K1UybjoXQhwouHsv9jSJNRxmhiDyWJMAFvxf3WBzQDZHgfs",
  "key12": "3UD8BvaPLCjwbu7bBEdcxSwmLvf5aUTHYmma2F6AQ8XMZasmpyvGAGuy5niVhZb1DJbrWqUTrMiKgWSsBV2eiuzW",
  "key13": "5B7VWzb3Pr2ohtzswfGA1kXg1zRcwf6699ad5j3XgofC4N3A4M3BTJhPdJa74gMg1RWkw9fDVBUnsP6SEZb7hGSv",
  "key14": "21eQfpXfGVohXNXP5c8funBbZ8y5QEjtcHTBbGzvmUFopkLqfhJAfxB9T4WkYNuagF9E6gQxzyMw1t4u6EE9cdfo",
  "key15": "35Ho4zXFvWSKGq4kXAavhcQKN6d5eVvYS1GKMWoDdkXoeyvzMg2cPwGBCB76f3hE1XydyY5chPF142qKp2oraaUs",
  "key16": "a6VQ4PxrNjFefEFdSEYFXqe7hPmV95Pcq9SZRtgfME1P8L5R6Ffo4dW7PNgz3eRAw7k8zexGy1eW5DbmfjFfb2m",
  "key17": "DPWHtFMgeQnJ7uFi2p7TX7cdTUSxLSRnCQQMivPbNfUsuT7wNPGyfdtWuArDELLXBydJ7Fspd3RLaTF4P2gZFSb",
  "key18": "Fh2gh39CEuGozumViNRYCo95EbB2bChC2xuSBRk9QHKtPA8jxLMJSdLmCo7nXf8aLNeiq7Tf4pZstg7ABuqMJrH",
  "key19": "71ezAKetm68Hwc7YSHioQ8FWjypqdY5VgpLCQbXdNeJNu8WTXyDNfUHvYqkWAeJRVSBw4h3NiWdscJnqhhzJ9BR",
  "key20": "5dVf8WVJSdhnfk4F1abatAaKSmNRFn2aRUChGXH9XM9Q91GBoYfPvKFt9B2gE7chCybHupcnWL3u3HE2j2dNzb39",
  "key21": "NaEMq7Y9P9Fi59MeMsZCZzQxMuNM6aS9kQ4oApmq1vwgRdFrrX476egVNQgSbqvjCmnQwJtWp928d6ycnkUFvmi",
  "key22": "35FgYvNqoa669tJxA4guWkEG5jUyKMwGZhxibKmDzZXw3tuZycfM3zRKqcCM9DceMuGxwCLki9YQqqvsrfXJGD9J",
  "key23": "3jZQjx9qM1BeM7CKUqiwpQRpNx9Yyo4oxmTn1jt1owA6FpKaaVPJXQKtxRrPM759DqetD9GKEmbxPyCaJ3zX838g",
  "key24": "5Jyd7CaCXafugdgoj438yWHPdYREkTXsKowHuZfmMLXCbYSdf3i6n34PrBfLxprP3vEy9CrBNN7mNbMMRpaAgCam",
  "key25": "5Co5wZj9q1RqT2jzYERrULngHg58m5JyqdhU3LcVjsKd3Cx32fVu17k2REhQQiq3eXFCnrVD9XCfmzoFa5jVUXTK",
  "key26": "5jRQqPTFMZUvQo4HHRbZHJgS1UFSb576d3xU4HVaQGXfCU5H1MaUMtHuHhN8T7nWyoUo1DmVs6vhNGi6gBH2oX5k",
  "key27": "zM8LCTdZUEM3ULJQ6KN9yP37fssYXmvmDtJoye83BHYuQVBx9G2USkS8uWwzFZ3GZ9TMqgwiWScWTmngQp5PJT3",
  "key28": "H4F6hPbvPTdgLVfLnSnvqPRcLgW1jbt1nJxUeaM3j9FJFopG9GtfrFpntRFCCsUD2zyPxXrCDBjB81k5bWjLw1C",
  "key29": "4fymnpQerCQ3GqbBXz2ZRiLYgnAb18RYLEEWZSTSYZmpJTHSjgvYepUtxFvgUcq99YSER3GjJqDWfjhSKBpGaRKQ",
  "key30": "541ZM5CfMB4VARjpUjdM5Laafk7xUbr8jXA5VWq5JXvoyGVemokaFsWfVz73fPEmZ5qMmEPm7GepGbBuHM2XCYpH"
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
