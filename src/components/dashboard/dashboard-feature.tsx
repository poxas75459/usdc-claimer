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
    "2i56zGinxZspRKWXuWKKk3PEqiwby4zTebgNKRXMRcx4dWSCUp21xsmrZje9SzHbwFCRFRXtC35vvxapupYzGuy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W2AFBaJ7Tvmvgm1pnUgLoeR6K7F2JnN4uwtyhV7ojDsBtb1wrieeDGiRxBAy1FbRGT32v6KYrVaCWWrNUF6QA5M",
  "key1": "428brJJbAej75zaYt6PB8nyd7XsCYWzdAJLgQTnpsM7U8e2wm61oiFJ1J3RX9YSo2QpBFjYos3zwyyW1u4GEdFGX",
  "key2": "33pDJjjLtQfM2vbPuS7zpGpoBXBxo1MGREAAspUtF1UcxjhWb6JfsDBnEzBxNRvadB8PWRcD44Nh6qezW39FscMY",
  "key3": "36s8tCA9UEfhDuuvyo8hiHvPVtjPgGFCdyT72fBRMmGP8KYizJCCEhZZQUfH9hLniu12ohKMEauuFSkNKQ8HygPd",
  "key4": "61ESGBLnbxEhHMybrxZskqcEWqs3m1gRHRNokcNKkRBDsSaaDZFR2RHP7jy4ySKvKAcyiDtqG7ma7g8StWrKuBXW",
  "key5": "5bH1gTs4Z8NXnG2v5ar2ZdKLLEogNF2CHMygsrUpHHo5r1Q9seinCwZzop8LgrY6MYSLHFNpSjhRjFxVYvU6pgzV",
  "key6": "4uSgyGMbVunGoESjWptEaXcwJFUgs3mNtdmfVXhvtYri9FbFK7AQG6zjNXDuWWkEf5jnfQVYChubp7vJnXz9M1cF",
  "key7": "2UAVYPnPbjDm7jeMpqN93SwpLaD3EaSgHW5LQfuXsJFCPdnT4vCaAekYrsS9zQcVHozXwPZRSgejLSHpfHdMSYzq",
  "key8": "35abVrTsJ7NjEe2MRzH3dDPocPS55aCommqhbphdJyyhECXARxzRjCCewqWPLipPtdFBztinURzJSijWWeNeF9vG",
  "key9": "jWc5eamfdYKr7W7ZBr1gm6Vz6msbpdsRdMKezt5XDPZDJupqc9Fy8ovtBL27BKGuT7tuXAqvaxXF2rNTaWx7CK5",
  "key10": "57SU6e5QUv9QHXvLA3HyEmKm9ebHmwpFAJSxTuHCMnFb3YWJ1Yrqdte53eNwo3zLkx7W5Ut4ohGRdWeHgntNDzdM",
  "key11": "3vLYaZfviRquYm2kGpN7XcqXjJXEfXiFqDvFNaY1DqhubFaF5UvsHAQ3iKvks1vJs7hArJKn5mR3JqveKjxGGJ3B",
  "key12": "224EeA8PxXpffvSjfaCMNCYAdP1Ce4wKfYw8kUCZoypPPT3Z7jykgdfNjmHsFTzZabiNYysWyiiMp444GcGPHyok",
  "key13": "3FaXvPLSND7i3o7AwjcnCx2eS86yNXP92YvyFhZCU4whsw1tDrH6SWFedFnfCTWSGhpdZu2dw7G2msZyDNMjvK7C",
  "key14": "4xAa71teJ7DZa2dA7rjnZoA1UK5TA6P8DxoRybAJourEmRN5qmmbD77B6b8WEgwVBcdgSjmvHnB88eKBLMALTu6r",
  "key15": "42Gkg66ECR9zNqQgs9dw3rWWZYdhXMbcA5Hxm62p3BuHZBZV84ejtJjZmvPauxy3be5NHUCAzL4VKsgvvUYezPy3",
  "key16": "58fRWGfZce5R59pRNgj45Z4L3qWyReZWqCW6TbxVyrq6MXQTKsgoycVXdNu4FTrVAoQhSoJAPYFnqDUeZLjAmM9c",
  "key17": "qc8DDPn1Heeg6n38BSMbpYuup9G5SRHbWjbJBi4r9Kcmz7pMCUbTLeXY3ucmdGfkHtdms2odeKkcw6rgYpg1Gtj",
  "key18": "9nYsYKuRUnrxxmGEHNiMLr6BytQR2ZmrQSfH28hPbsYDw7Yxm4hX7fV3pMgFwiyDkXc7E9RrhFuxNs8CFDEdVrZ",
  "key19": "5yTep9ptL5mDgHroNndCYBLkAxWstmwmZVVMo8hAvF84j7ENw18d6U86iERXc4ZpwaDgFDMFR4jfku29rVs2xLSr",
  "key20": "5rBh2jvTGFeZfCjYUVfddUNgruWMmqzWiDF2wrd2AsXDBVDdJQVrmRvWjCR9b19Ej7Akdj6vBoGTioKAaar4WjaF",
  "key21": "2f9TuhVNg61ceszypoH9drYHSR7fUNXi7qMYzwhP5p1szrrQETkyWnd73wR8HTXcPJLRh5ULtNYTjNbv9MEqbQP1",
  "key22": "1qkEHZ1uovrPpPn3V9FQ1BennmeATmtfWpr8mmXmBsvxQHHqq9yoAzFrmnFSfNSACZvoagXW7ZdS9HaZCoh61Lk",
  "key23": "5SryrA1AgCsotS15BtCQEaD3y8Wv2JewgN2hQMptuRSNt6tLZMcxpSyCAiztrnxXto7voGTrbx4wU7YAxaS4pp4h",
  "key24": "5he5F36b6UQ9DW34dJww6FWWp5bFLBfzRW3JqfyBCgjZWZ3vS8RfDKEYC9zrhrQieTzndJ9SVeDy6qiyuDB4vd9T",
  "key25": "46oKRU6ZcAge4C3LWZqKgteyiYY82a7zmg2889ua4Z75XXg3VoGU5StJWeb2bhnJSzzBRp5HigLuUebFYCLNWWZ1",
  "key26": "5ZoVGv6imx1DxPB1PfDpoYSsaPKeEqkUnaJi8tr9jGyU4VPSA9Jx5C88evWSjKGQwQHbjHubP7pj62oSKUTDTdqt"
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
