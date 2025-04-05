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
    "3SPu9Vv5EjLq4VyY9dVoEQ9LKSPC2vMQAyCjstFa6j1grFhUtHSeiWLc18Rw7ZuoqrUU8cWzQwaiYnE7ysSPcSv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GHt4tJ3MxotBtZotY4QznZDFepBtTDu3YVHNtKCEJKDqrLFq6ATeKFnQaA2aXtQjoyPpyWkrKkcndhKCXZnYijL",
  "key1": "5GybjTL8d6Umu7pUWZGPXoDDLTBC4bRpMsr96gpp3FRn1ygJMupkcaHkorihusewji9R4o5GcFQfzi5xJixpVVeB",
  "key2": "UE7ynGgQa4t7auABd7qe8mRivy9YXimrL2AWXAtfUpkC9AQg17yyQh3nLAwsoyEJqsvxbgDR8cNHg7F87kShSu1",
  "key3": "FrmGqYnFGweXL82oGZy3Rrhc9qoQp3GxkR81MQaT6QtH1TSr6RpgzDkeLc6hcbUfcifVaebHVNisQ12PwHFiDY9",
  "key4": "2jUswh47xSYtWxUL39Z5JB76TLYQfinRpq2oePCetWAhdGFBHNnK3CJS8AyzPAjMPdUABtSJhCB2i1gy3GZaacsA",
  "key5": "3KNWAyyoDv6b85EMQ97bjmr2uHSwrYgJzLr46ZV8Gj4VAQzSfXkrT8qFSgn99msnbm6rHizmsDDEWnXH7ULNgFij",
  "key6": "4rvnmTmMJ3vgThek91GdyAs4baLxtb5sVYwBeUAyMZ28rJPE6aVpqhwTHr2J9zAmzFv6v22wBd1CpvQRPP5eE5Jn",
  "key7": "2u8GcBAk3qXKLLyVocRJVhb3XV5qDxQJYQMG9oL2mKeMuzx1h3piKQDmnG6qtvumUihrEVRevhurA3osanSQHCFm",
  "key8": "5XXLf7QeBGVNBmVLu7sSqkVgDFmUtSKaCt83FmBecpSg9owu7i6AEsgqGR6xRMtthjddiVW9gXtZkNuiSLW7Bm7a",
  "key9": "3KN9aSCDAArovRNJEhcZKH5PWVNo9nWRHBNoS9oHCUWA7b6B66cuvMYgPWtPKsG8vv8xTXS7VdBUuxqTSU7GeRdU",
  "key10": "3Vx9dbQDZpAFBVCb3UcVYThyKYSNGpqajnWQPrqWRp4xi7dWTgWJHDLz7UGiwHQnagefUsS9AT5jeFWbhjV7y89K",
  "key11": "6C8mQzrKdNbRsotGVnBtryJcgyc4duEKRRbSDAetezpV6igqV9iCehDTKFXTEXZbCNzEbwbvs7aZnPD7LMDMXjS",
  "key12": "YVxW8cDozjuVhqfCi1fwwSh4M6K21pop8GathmWevHV5omsqgUQGLEawMSuE83adhhAJddZFsqszdX9UCoN2Lqv",
  "key13": "3kV9ceZpRFoo55UG65v23HeMrx6LjUBKXcJ3waRLzSKcqLE6X7KHwWiVwnqbtGs2Rbps6AzbaVLqSLpTeZCx7nog",
  "key14": "3w8vunemzZqcrj4XgQjfUS7upNYg5tJ2hXVuPs8eEkJgfgt6jysDazRnCXzD4dupBb9pcndHz4aM7W9LhEL78YZJ",
  "key15": "2ZUreK8JhQKxVvhSZu8C77suPSwKfC9xVCCNj1KpgwKh6r1b1JyGJ9FVusYF9U7yLCEgE6av5hvxkBQ1fSLavD6T",
  "key16": "bLYQNeWCfdVc4XCx25mDCqFK5FkKMDMHqGhHP7aWctsnVkXKBT9ZVL7GtShUD2mKYx4G97bZAFzDa5FPSHqmTbz",
  "key17": "5GMx3YZaWaZ1a1f5YCkXmk597i7NUK7tinD9GxFRBFWW6mmU12omHj9YfEp9jA2m4FFrYMFWZmy5XAngejw3Xx2x",
  "key18": "3VPbK6iEENSRGAeK5RFdBry171qAnroh5u5Mhvci5bQGW6Nr1LtQq3Jc4P3b8QEuhwzJggVrhboWw4or1b88AYUD",
  "key19": "nDoLP2MuE3HzwV8UHCpfAWiDsgq2cKs2UXdrsqWfULrTEUAno4FJD7XAi86G3EV6NsTGsTk3o89utXSV48g8TP2",
  "key20": "4su8ijKTwJe6sRahmtHzjCeYfEeLgP3MjFDk2iUJEo3uGj9FfP4KWeR5JsX4L1wgmXX6xokAzmAee8FAD6xyFHR6",
  "key21": "3XVKVaM7wDbLMvnzzD1Y2hzbAQiKAJtTnFU2o3tzFxsHHYq1Tmoy7PqYLdD1dcfnSmiYj6MAPinqvzSCANC8iJoD",
  "key22": "3saWi8B9ctEw3giQ8Lo7Zftd89nXp3WXhS2t2NNEAAMq5rTbxeBN5kU1R5Q4RFJNdiD4vPb2NXv2o6kTAVsqVUPb",
  "key23": "4u7P7FRFBx9LEPW7vb98bHjVVzmPDt6gRux944tQKhzCMKmJBQhxyXPc22H6oq1RLtQo29VwBJHZSEoZNmbrJqho",
  "key24": "3Vv9eFwW5sdUufRUXRV22ktgpLfUJuHR2DpeF2PatJUAzdEmVWJZAjGZnq5wEAYAS5axaDeD8YKSX4ec9BuWcosw",
  "key25": "wu7YbyucdnLv86xKVYTgXyeWpKjcBrZb4JnnrDYMisFTMpYeG6XppZbupRtQmEMDHkXAbDC1f2hLjfdqokqKeGW",
  "key26": "pncwCY83MMPSo4Kohij3Gju1BeEYriyfptjihEamcBsSbxuu6jWbcEAeyPg8e18yww9wvhBT5sdsd4JyasWnqVL",
  "key27": "5JdFzhwhp1DBe84RwrsPj4YtAyre4jCXH8vM4ESLnzMeCKfztBoXmmDWQZ4vLVzMf8wcM9sHq4YbXBnTf1AzthzE",
  "key28": "39VK1d3RdowWghgMMAufRMxdqkqLLNkjFnZguJzRSyosyVs71d7jki5nUBVd4Gcst9k4T1uMEDo57yApuFyQgRQ3",
  "key29": "4WhCM2Wm2BDXWXtU7cjY5582hqajgs7y8pADrTXzYvKrCeLu2YMX6FTgawrvz1NmYwp1ndFL9nXU5qWveJZMMPz1",
  "key30": "U7vVoF6EUcw1pWrxeAKDuUVymMydKpbuvxTmAHLeTAzDFLC6cWqJBmHNBNPhgnfge1Rwi7EtW3qaHc4LxBJPur9",
  "key31": "5wKC2GEVfz31ihZ3UvNDfdqKP76e56JTURv1cgsnAHSX4nGLJjhFsEHbPJRDvkCRwUuhbUfebwRFbDYsZG4wurx3",
  "key32": "3ZQ3kpBe8uX2heof28U5kV2KfcgEbkoyGm3NjxFkhxiCfbDwxoARx5ciaUSZwvnWEQ4ioxMEjaKqQvmnbngVCSBU",
  "key33": "5yYSqn9gtKzPuCmCDaHmAc1eViaQqjbgHo527uCo7RNHMXQtAH11x4QyvWUi6mesyndtT8mYFPyhQ3sh8c8HKFio",
  "key34": "2KF85fEg69rXjJ4Hkvz3mRzcyT3Vq3gFN7vaxWZWSxrN7T3m8tbw3tLSkZDtnDyxdn2ox9sqhTU7s2x1PHxTMFZn",
  "key35": "5k8z4JYcRkvwg6WrBYCo9BFifyTMcDdJJ8Loh1B9EQxqZVHw7DWg76xwyag8xrHYoukdsZ5XMQAukKJxNu4Saoeb",
  "key36": "Q2cF6wusKNNGpFay8iEiU4acxpRfB9se9UYKGFzMExYBFNqXw5TyJ31dgpFiJkf8iUwEJ7nZToAm1EvT7KPsqGg"
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
