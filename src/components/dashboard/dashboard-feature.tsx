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
    "5e5kN4RKkKfJX6uDxrucLcqBLC5HnuNboAocgECC41Jfedo2TYEzTUBFMfPnpw4RUrw8d6jqK1Vy2LB5moUHFGPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47P7ssDTkEGuVM8kMggqHvoB9yrLQfTQbn3ezES5B27oGmXLYZHGaBEs91sSRbjBjdHNxqRAi5r7uV6JiVEzJd6W",
  "key1": "5aTbipojHprfgxHJB4n82qjLrrLxcUTwmLTBfsiWH2c96Z6E1zKNSRCLUMTXx9LkZTQGi7a59CT22JcDJGi9npQi",
  "key2": "3GfNrYUcnEx1rjzLFf4a5DbXf3wDvhhqvZ8zRh5UQjkCELkaQDSdzC7V8vzxXVjDPi4vc7bhpdsa4PkvuvAzMjXt",
  "key3": "2ky3PyLTrPPw922xTo7zp7fazdcPyAvdbjCoAzAKdz84A8g7NNRAvVFXyjtEJCP7n141HmpCFBVoht8vDL7ngEMV",
  "key4": "24uVxsGBJBqxeCEL8pyALJe7gYPDbirLKC6CzP27ZygVUtBVSjzX6Nhvdajae2Gi9eTP9joeiXBi9Eyve3hsuzv4",
  "key5": "38hFbpTjihgR1ne93eu2YsAiN6bSGNTNncZEfyKiDC5e7FdJ1fKAdGhPuWNxZfypQYtw8JHFMYE1Y5rLDYeMJnQG",
  "key6": "4KXDKmTB41kfqLMSXNDKcytcGK5SWahoRYVSJq1Z7ihMELqCmDAqTBpucC2BN27ARyoUNXK5cHoGAU24pFkPTV75",
  "key7": "38y78mmHKKzA1AhwDrnjfuvfTE4XzAJ81pSDeyf1u6KwMrXkZq8PekB3errjyTJqSKZFJSdP4q2sqnwWk1uwg7gu",
  "key8": "KgAFRZ9fTVVh9uJ9ToXPPQ6MS5zedC2fhtkQfCt4g8P3Hkfyfh8YyNgYn5CJb9QbdLmdGLpGrBVJ1xvmaXr1ANW",
  "key9": "5ka4MSBGWEbztJ4Ag5NZMabwHVyURZfSyzHzgbYhYLs9caoAAG3e69SoKMjrqCdw9YgdNipo22B2ka1PqT3bwHbV",
  "key10": "P3KS9qdcAvr8SSGCGVttvqh48xu2pgsFqYBnjgvHVX43VJ2Yz8qakCLUXDc2yG3ZbfQavVkb88JyRVGeJ8BSRgq",
  "key11": "64amKd6o2waRCBAZKy9kTbXW3gzy2P1EcWKM3iKMnqPmAcikJHEuZpH18yMjTXESiypZJH2P51bw2E95dABqV9u2",
  "key12": "QfVdpqazZoE1n8NMsAGejFy29YJ23mNzzjscR2y8pS6bDygCCr74iqHtgbgvxjNBPgE1gfZ4yVdRxZzrMNs3B6o",
  "key13": "3qdMDG8DjgAVxFyRxUBSxxwseeN4WriEgywJRuRyGJZdZyNfZzbLgNgSsfUqj74F3Tgv3Qq32UnLHKxsqqkr71xQ",
  "key14": "4Btv9VnyxbMhekAmmhLbfcdtNPggXxKEaA1PcygruCszPqA61a2wADcirJRsjcaFiJxasQaMsgVdLD5Ddm3fq3Qe",
  "key15": "5gUsYcn2zyxfmBCSnH1vDbPp8Po8LYzkHFm3f7yhp36jr8RtuAfwR59xp17sqd2TuvCVkB2Sj6GVPYoTJGV8J142",
  "key16": "4bZrC3D2GWUUDNMEVSs7gjmhFso5DJ2UevovjzryDEWE1SKDu7UpoKK9RAt9EKLPEqSLA2tx8buWmcFoMNZt9Pxu",
  "key17": "2mb2nnfZw7jTceB7C1UoiwwLjRyATFpsPtM9Y3iGZxT5tjLTLkXN6qWta14vcuAut4RcQG8Fne55pSUVU6pVyNTe",
  "key18": "4X7M6UgwF5EVCV4iDmTAapd9T2SqU7bqKfRZGP694oy5hWCEoiZiYBpzVruCG6r8KYMhj2aw4bCHBVFCM7CfNAQp",
  "key19": "5jzeL4NzMKqGqhJU5r3b93QvRxRDEzZU8BAYoy6m4mjNt4b2i3eG3QqWL5h66SfkesHU1buvCZckUGmAZytiiSLZ",
  "key20": "36j5ZWFVTLprw1My4CWorgFRuMe7963XEfLtgHq471zq6CtJKeUYi7cCRMbaHe2fvdNj2ydvNJWVcR4DPreEv6Sk",
  "key21": "3WzjGqiCmFWz1xxJ2nvpdfqsKCqvLpJ5NMQBuC4sMe7VNthWEBDrkwJH24j1RXQgd47EWYkRukczwA6ZxuuYFSFi",
  "key22": "2NS6RZmhMV3wyme7dydMNPWDy7X4TMUy7RKGt1YmmT9b2ptKU3GW5QdV6UsQ92dvNpCok8CWx51mg9ziH276kYdT",
  "key23": "63tynTZECPDAAAakinrmZx1Ntk4dPyG6Z6jtw6qQWYbHE8ch34bBAS4vzzBFyepFfQGfYqFeMy7BnC4QKmvXWaZ7",
  "key24": "2Ucaz8PAoW3N2QaACquBddGtr6AvaHU5uamyqyJWSN5uQEuAcQdqffSQdgGoCUxTz6nzfqB15tGhoEWjgJFUgYfB",
  "key25": "3pWgGSmsXFr2CxQYNt9hhBxSe2jtG9Nmo3NzfgXVLKjqCiVsV6U5bXBSsw6FNJTHLifnqjuot5aZCg2gyk4neYxw"
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
