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
    "4BmpjXikt7k929zH4VKLxTWL6NmMcjoQYAFJHnP58c5yNMzTUctLwj6prW3BXeqLba8CVXQZbH6X5NEA92xAk72Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25twUJwgnz6qvhiK5tTcx8AjZeHPvdXcKotxrX29oTeQJtnsFd8RfYYnTg86qUQnmnLv2j7Va9VpVAC2RQ1RFc58",
  "key1": "3mmaEtUMPDb5K7ggo412cQ3BjvwdBmGDV1zSCdPqSNbWkMhrQvcKjsjHSQtuZJK5dEZQC8AfAFWH4nsvvGhWn88D",
  "key2": "3uvJwAxyN6nZmcTCxfU2ebE5nTY8DGweuPUhR66oDC2W9xoTCGoEnEaSychgRNcB6Ut7Kye2rerXqfkLSP3NadAh",
  "key3": "2aQfSShwFan1Y4V9n41zbYM9JXc4hmdM2kKYAHhhvc82XGdWmchmmvCAFET5vjBNSj8VK2BjuCq8VJHC9ETp1PZS",
  "key4": "5jmbAkB4146r4akcRvpqvvzTkmGdXBk7txpp2X3pXFK7WnpD9Sf1cyAgKqhLhJGC7ZbJhmPwLGJeKFm33n9xjN3w",
  "key5": "37rLCDoShUaXbWy1z5VpaRSahVQ2pdE25G4TssK6CBMQKNESJwakgqtKzRJjHq3JTMhxLbPG7StBRFVaqwxCGdj9",
  "key6": "oLT6x8uWr65uEGn3iLYea1iHtDaoehJLdpCP7WpR4owTzRdbeQNFwakomZp7fWrx3Be9mNy5oSM52t5y9SptSrD",
  "key7": "2v6kPHbjbfXQHxEvXEov2gStt8Cffah9mJufEC5Xk6xzEDPbTU4MeEjJkomtht9Wa2JYCzUTaEJFJgHLXU1VRQCv",
  "key8": "2yyggCg1wJRgxMPxEyuEsHE5WoxoYQoX3FAnDfb4wMCbu8yKksMZd47tNSTbLPHYf7qxUHRmes8Xgus3eFofCnfG",
  "key9": "4pSdUkwUqKgL1Pk3Uwga9G3qw6EWKZTwGEBbES4VCNHRnwPDP1aq4btgBuGqMLe787Wwp98aG53Jv8YrptZLQPEr",
  "key10": "2gsNhJskQfF7cHJZDTrgEiRJgNS3Wz5xV1eHp7dSaDSh8WxTfdkcCLe3KakE6M74hAob8STZNgUtDenxYwpwtLdX",
  "key11": "2CB25wHLzSn3JYEG8HPAUTS7hHwWWeh48VUs8jP51HC6ebddgsYWwrTyYVtMZaCz9dBssvuNP3CGeqqFQupm5Cqz",
  "key12": "4AkD4yXUkPqDA8Yd4H4ziJwo7kFyNjNhkdde45mNw7sHJ24JqrmWr8GyhwQLXQJjP9pEComgc5BnWWrr87dN7jzo",
  "key13": "3au943a3g3hYY4VaA52LFyqvudArcWz5hhAcK2AHT2Zb4W1eDGPJUNXzf39rCsdZr2UCJSwR6tJS8zs658J6cs4N",
  "key14": "aHJg7eTMvBxhmcErV6HyXhvfPwjTQVkAnZfvLeP7fdjz7ETnFDSP81fcocyyWp8wGQUEWKpL7scmXB2gfiKYLTC",
  "key15": "3bbLt2W7BLtZRK2s5t2rt1XzDbsCT1845UqYY1UJ6Eiyk6h6JCfEgvZmbsKEPCUWr9LuZ9Ax8Xf58ZRQhtbr7V1Q",
  "key16": "31t6axQL3nsgJKm6YL7HiqNQnwZpnVNf329QNj6NEHDZqBTDyB4RgnAfisphg4b3UXi7recQAxfwFVtVCuD2Kpw4",
  "key17": "2axFumH42totkRMg8EeW5TBPMfs4otBMVAzSn3UyVDxbxQbWXbkHdHaVGVJPY9FdsETU5P8Xbmpx6PqskaLHRjUR",
  "key18": "3m3P2YHgvn1oTyamviuHTrzsuFhuHvB3d3bKNGfWXRBiAUQmjZdaMnwAAnSEpkLQCgki3dDwEudQAfgqJMTisWEj",
  "key19": "38hEXLT7KLUjBpkyvKWj5Xr65mt8rXhbB5KepCBTygpmbowSoy5mpppPaU3xJb468MeY7zkZ6AdUKPzteTQ2vheH",
  "key20": "21pfgUfpQtRYPTRQPFzzSZjb22FuhNZoLhC1wwBjNtGSQ6esTjcoek48FK2pbCKvze1U5J9kQ185YR8bUF5YpXTY",
  "key21": "3hmd9i6YYRMec3iDbSRMPmsB78FLR9BpAJhygvDtyLBBj8c8C6Fmm62JzrivsM8FXn28SCsubB1q7hSWqeyCK9nN",
  "key22": "2T8wnUp6T1RTGtgAMd2xFkoyzV1hfiE6UhH9WkDuatsvrc28oktfxQSqvD3woqabL4crDW5Q7sURevJFqVask85y",
  "key23": "3JY9Ce5RpjNf2YTo9Ma4xLZ5VSh7bzn6kEy39bRviFfphFDkEy1SZUZLHDpwYMSmdZDj5ia4Co8DLUKKBXVi96Ct",
  "key24": "3BVRV2Lj2Vt2gVzDg7gMjGPWtELR4CYQ6VJZvyVw3dyrEYqKs9ej6RFcMXuX9f6ctmZQ1nrZiuJLKiWP3w8DMCs6",
  "key25": "67ULcoTwJeZh3QkAeJvgQtRkxpfVGVZ7EUSYzMeNsSsHv9Ty9wUVRUw44zN89UZniy5YSxCewFAzDz8QPWoDvejW",
  "key26": "52MwYiBQHFwMJ7fui1FeowwhHdnPXYr6PUCKvfZ5MqMDjx8JUnPhBVUihbmngw4JNC5BJyZTZJSva9S6P34PfPqe",
  "key27": "4Cf7rq1dB8qectGhNmDLnaEVqR3D1WceAFecjMRgHVdXUzW7zYFg1EbHNPmHNpxVHXXDQgYwodtkd9xFLjcSX8zx",
  "key28": "5LXLgFeTte6bQx6AXxbpShmirTAVRAcZa6d9feZsE5fbb57kAcoz3aCntSWVwSG2T5m6QwNGHZSKabG7NdfrqMM7",
  "key29": "4yEJ61JgRw7zijaoSbE1LFpDqHvkMcEtTC981RF8JzEq5LfauQB8Y3HY18Q11AvUDJEGhvyN3RiaHdVk5d7cmiiA"
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
