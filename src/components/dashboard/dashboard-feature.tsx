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
    "29pZXMcF6qca8CPm4qvT9W9bQiZ12z1JQVp1MJyuu6T2gg6T1xvnim4QcCpmXNa3hQwK7r5b3A1DuKw2nU3bsXfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfpdsfzu3JKhyoxykXZGVphSRMTMuNWf7JUgL5bEgTamri7x61mp6wibNsA2puCxY5k6CGAob8DS7hoVhpkyoXu",
  "key1": "4Vd8nAmZ4dnov1grymkq6D43wR4rmbJLWJjjV3FxVSvLzTpzi7um1hACNiCL2YQNnuCMsokFJiJMfoDqD2nNsc5b",
  "key2": "FdAWfbtYp7RtDDSetdnFrUiAg6bQFnXMTA83N3bhNgjyY929BqX98Y3fHW4rcB4PBDv1NtHxUNpgoXax1DJQeWR",
  "key3": "5YL23t6CUBaaCHNs6jVbjW92doURrd7uXRpb3rviSi8e38H1eFUuixnRpUacG4VfiyMrrZBbv3RHVqSTRBhNhBz7",
  "key4": "5NFBQBNS8w8D3J1KBvKBp3W79JFtiQec61oY6tiMocbsv3omwePLPT75eifhxhKgJuKQPbzHrNct6vYuLBRt2MfF",
  "key5": "5uLge4HZxYazLCsjF6CZYLwmyfeHHApLSqPtwDQEbeg1teaqVsiAb18wTDPGJYkNExxstf5kG7RZdaYzs9BKXUuW",
  "key6": "3HwCrtbdFLCT7JzwMyYV124eq2strAKL3Yo7U7EjgwbyVs7WgpSi28RBBC99vhmzpqEPHVzJuhcRkenvUokGnMX6",
  "key7": "5Bk6DyBXMwv23rvaTdXiTV4MC7sHKxvibb8c4eaVCxEirJbprFRNRAukkcmwuLynHMUnpuBqM5PzoocMzLbCwuP7",
  "key8": "2rj4j1nt5Z8R3JywbhzkGfmDVFck2JTkxDWKKzSWdR8qp3kzMxTQJtGGQYtAJWJpWiiEh6iei6RJW8iqka5FZQny",
  "key9": "3VShMMum7HjT8psDqy2R9s4FZXGLQi7EEqHdhBS2vHbrjKX4Hz7v1XjdLooTjjdByfisnbYPydpEsDVwrHXQZ46w",
  "key10": "4qKLzj4QCYgc6Q9YdQgk7vrAzDgXNxWaat1anUwmbSskHgiHq5kZkARz39uv21Bbuy7oA6vbhXCgZCmtnYxLJ4L8",
  "key11": "4gND7BCnniTgHvDaR7zEob5HcccsA85hJTKU6MyP26HC8BL8cFDd5Tz3hDJ3qNVTTsbihZnm2fmwvNrZ9aLKDhLw",
  "key12": "2XETxEoxJfvwbLuqvCL9PFA8K841nbGXy3FjVf2YZbRdtgvuPQHjokc8BoSEqfjGhbtiEWy9hq8TbnDF5P1gNrcR",
  "key13": "uiGrJmVqxYG3Kmwg7pu8Yq7Vr6AKddiZYfYJyKUZMxsXu3Sa3YXEyZCn6sfHn7ub57HDmEiRYaypMexTQx7D1Fx",
  "key14": "5pAE1JibSkWW6MvazrbuFqhWJe7Vv4b96rhVEHcEeKQVo58s5ZdqFiCQsuHdJ44p3eiKACqV36fhLjJKK7foA8hC",
  "key15": "4TF6Xzsbh3x3wT33PmVEG9E5gfootN285rVyFzxxzBV2mfybA59GgZ7AzM986oph3K4LYbaCZmZdYEd46XzNhN2A",
  "key16": "4WmdoxeuShsxhHz1kKrsoU19WaTxFixbUcpBp8h31TdwnNs7esV8EYYzf32UddWf89ifGkmZw6QohKJBXyKcaLgx",
  "key17": "4PX5wjSf7ZN51F9aadtpKPGK5BzEHUbA1igJQWkXdbiRSDAJBr98bMCWhYzJEVtQrKreff14wHVYKprMgkjdowcH",
  "key18": "2pBHZYtnNMLkzy9kSuGi8bMnp34zQS2hQuN3HKrGaP2QqtVNP2UPYwj6TjVjr1YAATtsvnKuYgBQYGMdx3ZXaCd5",
  "key19": "2j5qermVakqS9KnzepVNdyXYwc7ccTZkK3KMUTPeW6mZmatB2VXd4Bo7MuvhbxLMHgPML7etjMQD3ChfxBevz691",
  "key20": "2bH8J92dBpKpBnLPs87FcdW5e61K2Mfkn4CrUnsfpgp47gdfetyKY5a5trLZhurRgFk3woPLZu1oEPuG6tBZ1hPi",
  "key21": "5eQSp7GPzLnvCQ8p9TEeZwLQ15XkW4Zpu8dVqN39x1saoLZSrkDwuSzC7dw9zEQA1ZjwsMTTPME5F6h3tCsJJsfU",
  "key22": "4zZ9xvmCp4zKydc52NjKkiVKYZoG1FTAFTfCdLBk7KaX693F2EnA6M7HSXiZDNsM1HA46drtBckHE88LX4eCFQNk",
  "key23": "5HZjgzTsJ2xqyktavU5gqFNq1WLGRLBfAUZuyMLYMTSY3PfWwBbdKJpyQBBKz54BPZp7zeKfGsoEBgt5gFH7sTnP",
  "key24": "57fDMGxEMnY3Ccm5eeASpXcmmuQFLaFLgbLaBGECZqDPRpRycfKd1tBbwbG7qJFsGUBqDqDNzqFmGsfGwwoXcRWC"
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
