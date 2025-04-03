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
    "2Fb45Rrfj6EVqnR77L7krSw6vWLW5WmAToiQJy7vEfqh6EH4Bps7MyDyEEsWCw8fHjjV1bowQLJyTwi6brZvN1Fh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WdK3nehHkKmo2eM4uTkbLzeNit41coCqBVNkWBmy9bqXbP8PNXfXNkVrwCo43a3Yp3ZZnuTnqP3bY3z81FBvPBg",
  "key1": "2BpHfjSEw1v1e5NV2uDbhgNRJ1LJYqFmZdu6kADdNofdFs4ApcZagbCfw6s63XSm9xV46mNfbVvYGqgFnwob1TBo",
  "key2": "5dbjmqtSsmGecFby2RewyZ4tWkHeNcaRHFAsC4MHBtgsS111s8czn587KY8DH11YcGjMqzD2K4VbxzdLK4mTH1m5",
  "key3": "5KnfqGV7P5EEmequHiqihYemkxWsxwVegPxT9dHCwVpa5yqGWaPETBZ7V89AC6sMt7NppdC6ScUCLWVSDw2AEQ32",
  "key4": "3TAMVowjGrdR6N7oK8pND7Anp47cRv4sen5jv253TqnRERz4axFFrb9Lh9VbCSuSPj1zo61cX8kdXSVGuUFeXfiG",
  "key5": "3GRscm3Lz23xyxAVu4ghH4kRRX5DKRb7TeUofAVhaqJ1FirU9K71gb9UyJKQF9P9KMU3BkxLC8XkfwdPFNEkxss9",
  "key6": "2YZnc7piV2tjXntZ4R7XXxcHvzkBbKF1qnG358Wgq6oc4PhAuQAbNmefmLfrHZJLuBCrvw9RRQBYtKGtSonxLaih",
  "key7": "Un7XmPQH3n28YPFjUhAZvrNAfjqn9Yy2geR7LBD2P79xaLNduVCZBkdhDa9fMX8ajCgugnPkeWndeJUac4nqnj3",
  "key8": "5NE3eJ4VRP9wC4ZFgub4VDVMsRVQkt5qwngE27TJt9awpubhzRxsxeL9AEFcxG8KWQJjSYj4pCiD7jSroTjXUKNR",
  "key9": "T5EaMbzZeaDzeoFhkAKUdBrMigQZhNJfDJsk8z59SrYWukadkQiVsuBEPsmM8SXaA3qHwhfmPi8Un8RDEowKcjv",
  "key10": "2tEgWTYCvSGWJ4cDicXFtYNgdppRRbhhAsWN9CThsTx6kda1UQLfNmrgWFA962FB3fWq6GW6EJEBLdNT4KZykDpX",
  "key11": "3VAdZWq2TPQhZUfESe7yTx3bVuFt48ArRetMvqACAq4yakmH5mpf1EbVx5Yb4rMbJHNEP2qQbwHW9GB9yi3E3pGc",
  "key12": "5LxoD1KLmuPDP5BdbfrewEU4Kb2Gj2euiXoF7yuRVEiSE1Gv3wL2c8KcDxAA6CvDm35kmQe9yv5aNgiruxeVqBjv",
  "key13": "4fX55KzAwBj7K2nXMnHetQRKAUZW8A5oHzo8FE4bL7Kx3mbrWXcLxWMGkx1WmbkPbfCZLMaNm8vraV1nFqtakPJc",
  "key14": "ACiGWBG8tMbkMUcJ8TvveQmHFuZbwDREVEHEewoGm4kC87hhkL4ctb85rEizk3jz4Yp19LBsqM3kyTZoQpbrBSg",
  "key15": "t2HZ5WbJgaLPgjzq834aqm7CvprftagF6myqX144sTRc4LY9UPkJsbz79kHo944okXhKS6zDcS6EUdL4BaMuLfS",
  "key16": "3tCX7VEFwB9PDq8rJALYTvvizpGtDtD3YXShCKFvBhNJVqWKUDNCtbgvZ4xk69zPvxp3MmKz1YpjwXpgEtYxWwTq",
  "key17": "5RSkaqe6yQAZLjSRjqtReHqWvtEH8ZfDVrNzGQrUjoEC5ifNFZ1LcjgDKurQ94zaHg8DTjnYXPeJHXJvhaEeiVcY",
  "key18": "3E5raYhKj8jtAT6bHPgTDZvrPH5JU6UikMpUE2SSeKUSnW9dwq1c91x3ksPX5WLRvnaEegwMXipoowjTeJ2N97d4",
  "key19": "5uq54hYUpmzaJxtMun69DeDaAZyBB9HGmVGTmX3EUbmBM7TiEAtS8KtjL2yEeUnfHcBfwneqKRVMcSLRvoPhqR7a",
  "key20": "3NjubizCA1tzJedtrBinwcCkVL7TvatTq5w9pxj2u9xmVZpscduBXyCGU1hhbNNqWaR7PCG3o5c6mFhnera3q4pd",
  "key21": "4dHFZjwrv1JspPREfRt2RCKyFQPXY9p4rg9Vxvvh8YN5mCzVFh7LLmUcnaMokSLcgTheQdyiNwrLKBNLABnth3Qp",
  "key22": "28kP82BvTjbRqjATLgYmrw9EKyxxaduuuBmU8Ub418cDijcKJf3T4VRK48KiCiCMyp6ewLpJ2hMXfRgUQF6QvDTJ",
  "key23": "5LWfVuYjFCMZ9hWhV8LizsBXJQxqdHLLvcCc47zqdhMU7M6sXgXmGkR6gV1P3F2CFpMfAyDaj3tKyG3G54FhuWpz",
  "key24": "2YmY3AyncpgfdiNuE4zbbFPEaAzyCReVKiBGt8UJKWttExGDxXVsNts6brRAW5h6e7bz1eiRq9afUxHnJ6TYg3Uj",
  "key25": "tkCx5U84vyU7ZFuuB9uD3sujAgVcFPQnFsFYGcQiWsWSVXRJJGpaczuG2x3z53Wndk6myF9g8yERpsyxucQtZH9",
  "key26": "4Zou4eHBQnuuELeRGNLrYzTTuww24oQDuZktRfiseJDa9MQxfZ1ADYL29QQzjwGk5VDwQZS93hrC4fEWLyk7D37n",
  "key27": "5tctgfAg7bsu7QVPpPSQXUjzooHAeLgaAkorfBA6is5xRhFcHgLqxzbPG6Z8ubf95zNui1Gsdpep6N1sQCA5fpu6",
  "key28": "3shMSYRcKswhewt3Bixtt6uevSFE7LLLNaxTWpiisPUvvwYtMB8oU8rueND8JapjK3imhYThsyqpZEE94m6GKyRj"
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
