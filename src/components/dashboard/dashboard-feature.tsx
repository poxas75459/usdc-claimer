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
    "5qBrHRdKNCa4yxTFWwxHTyJZFatMZRXRWNyQqxHEEhEk8bVbwBuxpAgeZtopnpVCTJeC4aBhiecM9YbQiZha5hkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hYS1P75hB31NUP5xVR2jbG667Tf2tp7wa6EmJwRNqCxxg9oU3PL9mGqSbpY6ehbEu6cZziWTYpJF9ypEniFe8NR",
  "key1": "3j4phsVDHSPGnnSPscdvCyXkAAZ8R34RqrJydUR4xnAUBHHvAwXTz49PdamaHqeVEy64J1vH4WCNQtLC7nnyjt42",
  "key2": "4En9wQGHm3qj3XxuZCFC3Sy8HjP9QcA3GMRMtspMWMp65LNwj6WodwjCnD48yHe4GxzosRgfSLaVd6idcS2U1fsN",
  "key3": "2WsjK7281n5tsf2piszbM3WcVJY9mNQ4VHzhW46gq9oLuMvJ6pmfRjgh8fzd8QJ7qDmVDtwtzLhzdJChTE3rxnSs",
  "key4": "3YY2LwNxEaMCg2qK8UdQrsesXAzZpFM2uaU5veC3ZY6oJycqoALaffipf2tFDfHLDE4PPaxP94ZwSdSEFSCGeHFG",
  "key5": "5cP6XQUjWNiWNbJhjgYdA7rWVGbe6Xc9Nx4dBqyKVuKCFhDrx4voFPdZ814e89bt9YtuLeZsPE7K1Aera9piRzkC",
  "key6": "2CL6rbGSiDbZngAMhVhFRf43qbyQF6BFBueLJ9wodjpSAvJJuoTq8owQL6bHxFrvqLLs56KM3AtL38HQ8ogrqrkp",
  "key7": "WverpENMSeaR2mVsekTw8QQi6SZmaFFZXDq83ix1AWXLs2uQkskq5ZV4QMNnVTyyTEZUP1CQ8tsGryYqGRMdG62",
  "key8": "37u9VZRZVLZ2XgY1pxxNrGZUUxM8JzvmY6o2ARrS9GTaA4nN3djnJqCCunXRuHbjPFpx9P5ZSZUe4RE8NddJZXrS",
  "key9": "67aqvj4YPwE3mBG3k9CsMCvxAJiAXwnP7CnwDdUEYvZgyR29vWTqm5TGRHiDhuw1uFybaH6ChC8DuTAYjFSGW6nB",
  "key10": "4toRPJmEUHiccoh9pkGJRSyxg7fJKfMhshQWyYi3t9Hbe34GEexsLppzeDcLQQAmj9cALUiJadHJi7j82c9Panzf",
  "key11": "2ZDiTpyF75bVjtEGuwgSG3pUMYq7M17dTghduDSuHPwsV77jmee22D4KXGLtrW3jwySnESSsBt4fe8a3fbfgupWz",
  "key12": "58HTifsUQF2RG1V2PmNGx6QMVTWUxYKXaGWPhdzHjEyyR6Sdok9P2dVdiL3U8mP1RygSTi1cXsiGkZoxRinZTB2i",
  "key13": "66EVtKCgd3ndGJxmtEwR2RPTfTWJ5TBrLPbSerBbiLqBJhshe7CBUxAEXaXJuGBioS7wkvjQsyNHvRPmwYtYjxRs",
  "key14": "36psD5nzGko1y191SYgDJz8gEsaKAg84GWDdMfFW6oWknh2zLxCY6net2qS5H89taksRAQUJWA6JEUv2C1v8bLG6",
  "key15": "sXAUU13uFnE6WudYQcD8qfvnFUvjwgY7ymjNzqBUHXxLypkB2idxR2N66ufkKE6Ej6WCnjpB5fEeZmnSS92DJwK",
  "key16": "3dzhpHkQctQi9MLX3HbYKPWDZN3PZ5Sv7hhTBDkdur23goTuXh9cAa9qqtZ23TYz921CmkBW4CKhkXw1Kzpycoye",
  "key17": "5rhVgx1CfFquDD1FoN9nWHr3FwrgDnC5UQTzin9jxveuK5P1GWussKi3bwXHnYReeaiNcTQ9V838SVzxyD5VU45W",
  "key18": "4saiCEjT9785eJwdAmpJatW9UZmdezLXGsdE8KAts61TfLhWqzfxh2ZefYHkcurWhdwTPUa8jYRLwiWyCPVqajQP",
  "key19": "22g2h4ivs6UvYQxp2XmU8WdKHwXNu24tHzRhA2CDqWyWtAu6756b86gwXkDWHMDhF51JfpJ6xBkZCMrJrMDh4yrm",
  "key20": "5GfQfMQhkjfRMtZSFJ3cGo5fVTB2ciJ2Ei24SgEFvYWx7PhsHQt9dtBfLXFsT1faYz47BmE7UFYiyndNbqaZKrfN",
  "key21": "4UsvcPfHNQwdM2DrdGNXwo24Bf3Euy8VjKD9JAMyXgsbSCCkngffkRngqNGxuvrmsSs5EfhSuEunjfszUeD1m1vP",
  "key22": "3E5jNbrapC1G3AAgtXJmfqTCuzoVR1hHEirKKh6h5AJHgmQZgLk1Le18njwRcS11g9xcMMDqr7cZPaKtbHwg1cu",
  "key23": "msG98zUYc7DHgbnn2V3mSTJX4Wh8aaBJvfq9DZaEs1EAAAmVB8nPWUzr83dTamwD7zqqX4C1TiFmr6NeKPc1RyW",
  "key24": "QrTbMgjZRwsYt3NHuTAHL8Q7jFC1LcmYpXK5WNnFoKc3wMv24miG9oo8m6sZyEmdxLYUUfZT8HqhRxEt4bQfjDb",
  "key25": "4pNSbQYC9wdTG3JzMFdzqRaU2n7LVJjP6Lw7PNCLipLmR2VyHHH7wABF2ZFSHK7YWhYzGyHcHAJA2Nqc3CAtNdt",
  "key26": "3hBA2E1QYyQSHcaR6vDhSwZWZrC1xk8vRX8UGoJDs82ujDUFgb9SqsmcJLaZZ4payCAf6ViddqvQVGd889nLhjzR",
  "key27": "3G4uaW6MX575vmRshBBU1XhtHFTMrzHndkssxmzywXMUN5TJhwTzby6r1EWyxc6kHeH3xdfTy6Vb5u2wGxpkFak6"
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
