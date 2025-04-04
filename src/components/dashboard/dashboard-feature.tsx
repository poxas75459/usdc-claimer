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
    "QmcamWcPyUVKEq3mYcgUKG4VoGzLQkzj6YrFU5dJJcQ9rUZVDJBosziUYP931HPpNwzQ8vWtcT7s2SBfPAZSivk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mGqyZ3WRn4w2jWgsKMhNiWTv12EimerijL6n9Q5mXagbS7GWQyBHgVhteyYznjQmA3MXWVRZWYtyLeqakPUR8Ub",
  "key1": "3HyneAcSK3PPpoyYLfDXStaFv3FpUwWG8oJGukW4bdxWAxjcvUozLPVagFxU2xjoRfqN8ZJkzjmLFtHR9D4u1HQQ",
  "key2": "5hum7cqjuu418oAgMogtetT4V4yDeq8wgYJ9tF9odwRsQBvGa5tHSMyBLHq3PtLxQsmRLdTQFLbJy7Qoxxev9SCF",
  "key3": "5zMSpxKy8ksboaF2Bo4Ltc5EFELdy3jwHgoaDHyHrr8UyKrJ7UbhKpi8japiTfAXHt9RVKsxKvmw5osLY77fge9o",
  "key4": "28QajNtNkZs4E3EnQjSW53zcmAiHbSzpgwAWtWaStCrhjGHjKQi3zPwGjJBZmv3pG26Mn3cVD3m1vAsmyGz73eUp",
  "key5": "TyCHDHKUDN1JkKZgzDazLMSrMc7jovMxSUfHWLsp5Qdc4xeHQjQrXoDRcArgY3XVJm5JarhQy47GS6kSAkQsS9N",
  "key6": "2mCVJP46eqt2zpxwTDKnw3y8Q5eGKVoFo3sVU8Y3Akfa3LZmBPLrgJbcZy1xiwA9tTGHr4t4jj6WN5pcAGcgKfsH",
  "key7": "3TgxjkbWiZ2GxgkRvPeaKQD2YupMNgHMuT9QN1pkg7Nbjz4GuvD47MBCRj9Q3JK5n4c7oAT1C5qE34X5paWjXnuG",
  "key8": "3AzkL9qPuGLSJtaTuQbr3Cbgudhetky7kcDjkgAAxDsQn5jmiKAatLuMjcNADzZBZumD4QcPybrKCQx2emA479vD",
  "key9": "67EmwAWDC1XePcEmDY2zeTNCKw1y72CbGTNytp4YvcthgxTQ1gFDvvZAmPoBE3iTPYqNou9DaVrvAfZho5kn9KcH",
  "key10": "3tEcpDDTsudsSgpGhduLorKEvvB8LJQJAz1SRL37MZ3KUY7FBcBQLGf9p4e9CVHtv3pzCnjyKqN48WZswyzWK7zw",
  "key11": "24jLE2v6WdBjJrx8EHek5jjEHjFSUawudzBmkkSqYebnwJRqNaHRKwthqw1pQLgsuTgHRDHEy3AVT6Xa3f34MpSF",
  "key12": "5dnfskdkYpZpqBReMQFHtaDqZ3Ru5n2buE9YzmvrXdcRe5iY7ksp9Bcmd1yiYzAUgfPVAAkUSryjT2DVW7Wmr1wr",
  "key13": "4X8ySYuUK5EWxYeRbixLLptmwv1akCK44Dq75kzVwX6ebVdVKx4qa3dPXJciLmHKjBdDkgZWfeF7ZUr8ie2y2zHD",
  "key14": "Hw4aWDzRy3MLXePyRV529z1fbCNvSJi99BP8uTzRVNBYom9fgY4cGZw4SYBmNtWPsS186eMFauhpNdKrBSLphoc",
  "key15": "66Qwr4MXJ5A3srMyEi79pHf7wwH4phGz3ywzNBwGoVgZoSQCgY6GBTZf5RoBCuHpKYJi1vh4CSvJRrnC7kbvRZNr",
  "key16": "4xgzxc9rZ988eHZuNSFdSfi3mU3cc2uQY9VCvGzKiNZjD7KYKugZNG1r8HnxgyvXH7vKbbZy5iKHQfLMY4xUWKFe",
  "key17": "4EM537pDojFsVHrP1ViwG7KfKgxxn7aAkcFX5ZSEc5krjTiq3ccx2T6wtj7sTx6oFa4Nbv34roQCCcAKvPbd9MJT",
  "key18": "4AdxRs3Lcn3Sn6Hw5h9hhdNWj3YQoMfMvEb4a1cj8rFJFgzsTFFkwR63RNv5Sim2iLTZkozSvYd9bUfjNwUSoaSS",
  "key19": "2gjQQmkZ4H6zM59qzc5uTumNAine9Cb7Wa1ZpMCY5i5yzqJQCFtEt3dzSsYAwPhCYkZivwCQmGu658MNs6w8o9Kh",
  "key20": "4FsNVUMRwcYG4zAfLAFb4X8ZXXgeBkaJETDBwXDkErV4HqkLxrNUxTJXDRsq3BGz4tFbevphJ2MtQujN1uv3mC4t",
  "key21": "4Lmhb5URcJLUh9rhJDRFhy5aNjPLoga8YTDuc8Ex2z69BiAxCSPvvehY5KSNb2iLCskRuwSTbwSJWg7rpMzeMuxg",
  "key22": "2X2MW9vdaWTh8zE1hPYw5K82yw1C7uHhn4qqquzZir49TSJ7UqyS5oh9wfE8ga9Z9GYQwV3jMBFwne1JAgVLrx23",
  "key23": "3nF4STMDLTmkA5ejbuWAQ5tpcBEiSnAaBUqMJTPrqzVnxqksMfHtEZxjgRTtFyZ3yvLFfczJKwAJFctvJMG22Z3D",
  "key24": "4zifzXddkx85WCkYKX8qSETggTnoyhXZAyp6kyPdivq7CEvRNrDFUc3WXxCTwq97tk5rWHWgfcBaFeSX9z6VQuN5",
  "key25": "2VE3bwbgtGk2kn6YezBSsyj3yhQ6faYWE2WsALWTiVjajEki5fxLYJo3Kr8e1L6wdr6WMkMinj9s1aMe1cZYGZaq"
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
