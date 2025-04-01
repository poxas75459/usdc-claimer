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
    "3psxoYmxC8YhCRR9NJvLPsvb4QDmapytoBuA97W9uvW53rWwLytj4gCsENr44CtD2HfrG2DVwwrjuib4cvZfknL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vd62fwaDjdL8jSuUWDea5jXKtxsdzHcCgdf2bPqrj2f2JysWfTZNGaGBQKgUThhTBkkDJHJpe3YcxZ27VnJhbYh",
  "key1": "4rEMKe7s7RsbAwcoeAYVVywmRDjzHAmW2VHBhw58ePFoGzvMR9DJkEZCPWHdEHQPDeZuuEDQrF9o9YCYXTcM61W9",
  "key2": "erBQaRRKm19cSvRdWF9q2CfJziKVxsw2TZ1GQasiBuTSHXbidWjY2euXbBUSHXpFAHEX1iXbkxDVvzXrNjm9PPa",
  "key3": "2oYVsLo9YEuHcSeemMMk4PNAxgkjaTAhJhtCgo6r7S5N2cjjCTi26ZYyFnW6jXdZZzvCC23DpRc5ebKepcCWpguL",
  "key4": "3NXTXYkAuiUpTrnfacgBwBQHPCW6kkCEB2vokgDCTeDXCghDbRaQmHNAvYhVyqhvM7rGD6hbP2accE63qN3uA1Yf",
  "key5": "2M7YR3s2vwhriiUkY7tmYS3YmwjCJSNPhHWJ5TKfqTEQ8LB6KY7QrWsQTf69k51V34Knbu4dGUBZuHZKwNEk7PtY",
  "key6": "66aVePxPhmYa4XGcezaaYeqUVi3ceVRTL4oRoNEvLVeCdHKC5Lb4ktTfkdWtFTpbJPt4LQz6fffpTuSowW2ubPPV",
  "key7": "3g7xtjifhL8AiNEzMa7jF4yEKCe2AdBxRMEz5RMmKb6bcfVtcxEegUe3Ub74AdnTbEQRYtztG2JhkxAiqvBmcUsw",
  "key8": "UUXKyzGc6jGspoHJiRCRQfY351YFZZSVre9P3RZJsjkzXF8RrsxKgrhGV62Ty7Fjo7hAQFHFZbJhTj2ebAohJ5y",
  "key9": "8BhAJg2PuMpoPDCtLCqZdVo5jbhUo7tnTLsSpkG7WFNnbKLw6Z2BZd27JTs5YWYqGbnaWVDEKRqLTFDpK4yXTok",
  "key10": "vBXy89UMzSoCyoSpt5KurB4rXBP8QccFwFjLvSYZYkk1C8Fsgv74fpACLY3EM8SdkXp7uS7u22N5zgoJvnFgB8Y",
  "key11": "5hjjDySazDAb93bLVx49dbcUzNGSQF1aU83t3fFFPd6N1UZKBrgG64T8xyfChPDy16Cig9KE3PnWuPjHxpr5ZXh7",
  "key12": "4UNeREC1in26C8qvBREu6ebnoTrvVT8Nt6PMqZc6rki4VbBUD7Yscr7U231xSbfHnCExG9RR7mZt82jj5jRfAThG",
  "key13": "TH4HYNg3pJpgU8WjRGR1KP2aRy7hnbv2e6Z6JjEh2mU1zW2daoAUBfmFC8FfrjHqwZSwTNANShoykbyBtYsKdyA",
  "key14": "49dy9f1B2YKts3nqRoM7CpT2DE6gkCGKLSHueB7rVmqjYVV8GLJdhx7JCSPE4QsLus94zHW1rzJLKTHE1BWs31Uf",
  "key15": "67M934pBfhUh6b6oL7jddWtgSV8CJc815UVNtYv4df8fyk53WHvMeYwGVhwL1GnMgG3kQeRvg6qvYX2DkfpsHQUX",
  "key16": "5PP44cBd9eU8jTDTG9o4pn5SPh2SwzuRvcW9AyhdGzJGi7GSUfxeQhNxxBkc1U6qr3xN8FkXXWZXrXUjbHZa4qGx",
  "key17": "PbLsUETKE9xRtxXJejh7Z4AXg8t1zefStcwbsCFGeGXJtrUZHVd57ADf3QGzoh4SM8DBTTeSdZRb3Bk3d4BvRPF",
  "key18": "4mXVUmbovpW8b5q89qejPWGkh8Ppaeo99aDZ6djabkQea3WZ69y1RMY3rA5nvt4cYr2ZY8UHq6uUes28X5dtAA6W",
  "key19": "5PiRK59daX9G5yGerA5qwgYQWKJxDjrcJrCgw1cZ1wDAxta8G4FPxPAQsDTT1nUHA3mkixpjYTVwVCTL3vBrYNGN",
  "key20": "4rkXdoGbVeRpJpQ5qw82WVkTR3qi9Ai7TmP5YLx7wVMcXUfsNvvww2QVn5eiaarC63xSy3s1wfCQn8Xw2T7fncoG",
  "key21": "2XGkj6sZW6TC5P1836Vpro9Ui4c5AGDWeccUEa2GokkTWgDPEvpTdJAFbRZLfgfTpCNKJJjGpc1DYuesomgtn34D",
  "key22": "i1N4uq8vBUWcrh2Co3mN9EoF8fsHheRnHPpqpLkqpK9GG72XijPGpmrNQzyH69BrJG5nVe2T6nGLEspDZjobJ9J",
  "key23": "3YHpCRYQxru8FKWsq1tKkSu86QFQLrQucWWAx3TMM76k5pWr1dFq5WUx8YAyU8ZEcrktskLc5ftPjozLfuK8LH8X",
  "key24": "H4h6EGhxJNUyyXJKNPmGkgBgRd4aN1ck8NSg3LnhptWkAx96HEFT9pUEkicGdMwhNUJWjAECU9ZRHMfpGwfGctA"
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
