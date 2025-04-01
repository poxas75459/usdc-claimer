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
    "2WYkHtiF3bxv92DDctdBkepdfuo9wyzj4S5AEzYuVpZVM4XkCLLPkeU3LCxFRk2q9zF5furYdhYG9A3nAftEMj7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KtympRVi1VMYeuprZbtvUUahQwpEvf1vugVNGtRmpPbvVpPq1ouJK6naYC9a1nWHkGwAzTcSchZt72R6TqEAAwT",
  "key1": "C59yWurVkJuz1ocw75hVDt5cTky7BJLCUuEG3dUYHYx4qx1Xc4H81cmvWPtad8NacQKggq41bfixjJkqepE3XpY",
  "key2": "2dFcrrLVniC8yZ9xezGjS6fNELGqpgJ6zHvJKZUSQpQsvsp9xg4LDShuEE7YyJyUewFoTaQ4WTy4prHXZe8QfZnM",
  "key3": "54tsx65LyfQvSErzF72iB4zSs5S198TP3aSNz7cwtERNgq27aYmW3mCMZvCzaddGaVMKcScnBrpW8BcuY6ae5Ahb",
  "key4": "2X2QzLJkF6jonhsqS32v2RQnCMSGMbe35Rb86n9xnnPJwu7HeSN4Ho3V9zG4c1qFrsAf5yyS5USzBbqBqhkRKsX2",
  "key5": "tEzvYixf7yRuXD8yTEAextNtZyAnLqWmxcVPq2kswwVQArHhWtncnGvdBW3AU4A7LWxrMo1VW2b6QKbEkrrQZG8",
  "key6": "2TZuWejtqzyQNVX3JixuDMvUN6Br8B86PtGxHagnw9j7ccfsJq2S1TZy5z3Trbjpmz1HENzUG7xTxFNqbynsaML4",
  "key7": "4WuakZecnCSmPbg44y5RQmrtpHpUwTa2zRVDKzvxVw1PWmTNcemrrSYWu2HSCXRDWWoTwH5REFWr3LhRdK4BfA8q",
  "key8": "2jyFuH7Y67xs4bH8R1cCt2Y2FAePEFQNtsJf1wFASjS71qabB4ffRRfzk2BeGNmXLWGQMcHv6bKB6Bb5PwBMWcv4",
  "key9": "36ChzHedUXi8SgKoqHtaQEvUo4CyJkKGvLC7ZrFLAPFKEqvTCXhesZ2AKUxC2sKpsxb2u36ycAeYEmvDihneuFZ4",
  "key10": "2Q3cbV5wvosc25RVGwNs1t6cCUexSiHYwK4p2E4W1atNUuej1bw63o6kBN4Zm1E242RAsiseUrEcsK35sgC2ePY8",
  "key11": "5sifQcFpJHBmh938g7BaBmZBpTT2BCgBKz1ZM9y3eewGVWF1M6u7Kk94qrooqaYKv18cYnbZs2jFru5WqCkNMhmB",
  "key12": "4xDdpTM1c9Qtmv8uFkLYCowWbZJ7vnkGWif2UjUDEkUVX63m7zhc26LU8VboSBWM8tQroTN5qDf1mqmy7F4eNHKs",
  "key13": "XY1PQwh9Hdb2gufntbJ3TaRPXKUHFrGFyweuCPQUnvV1dTpoNKXrxr54JnkHPZ6C3EXL47dmd176qmYRxJDvx9C",
  "key14": "3DadJyGaTnLVmjUFRhiKSduYkjnEk1fhUpC8dqfYq8PsHa82Jfzk9F5wxrYRgKGLznaxFuvrgdJngYmsq53FvJxV",
  "key15": "QSPRstjJsEKreAEveMoFHPTgHvvhKKF2mHWeYAYEkL4Zdktb9CfA9RWEK8ZLD5tFCwPCLjrK1PwohSoLP6mWx1G",
  "key16": "2BMGbyy8HLW1yeC6cNXVwhZWgrpD3ozMMEA9EkXT4zF8qzYYW4Hw9CN5KcQmFGMckmdm1iGzdHMFXQTvMD1wFrUs",
  "key17": "5yS26SbFX6VKkP71RcrxWBPsMebuFbFzKzHNi32tu3gR5qBo7E12QLThqBfKngtdRhTKEL6Szip26Rj9f4eYW1TA",
  "key18": "2J9XvPPxdCFuoM755r6fSRigAqHScbH8t5k4vyD1rYMZPKxzxEufTSWhL362yYYwffqzjJUck8RXNbMBU5PV9zvg",
  "key19": "63Ht5i9foVb2CP1dZmDwrbsymWA8sGxpywsoXhG5YUReSfHkuCKs8wzw84NHPDNcL13mEJMxYsiH5GDUYvMLK2rj",
  "key20": "3z9ZxoGn8Nm5KAQDL9QkZDD2DdC7GmSfNbhJtQK2mf3jzFLhfXtLYZTWQKowT9QU6fffvkLpPH3ycktGpvEQ38k1",
  "key21": "4VuytDCwcBYpyoP2S6QfcVpqPoov9WPtsvCHCRFdgQYHwz7dD51ciVziDSmCQeFZr2kfyzyrJ59tzxa28eN4RfN6",
  "key22": "3M2VZSXgb3TMxF6XsakQm4bJtHjHCbCDT9A9yZVsgk7zfyLEYnW6wfnGZyc7BHfWnyhtQsjdgzsnefuwAFbvqMLV",
  "key23": "5WmPgVn5AMR9ycj74DWUvhScwZjxoecBC828Mk4BphKpFxMR372C3muq6eoJ3cKnZgmFC2JBzm2wDSMRHzbMACJu",
  "key24": "4Y2TBfSHUgHweFieBYiJZwRcSPSm99QzLLuHXyXUabNzPMA4UiAgzzjXVD56spfYhijTJNDnbbwcCN6fTySofWAt",
  "key25": "616vRfjusdPNVhugCr9R25CV1Jm4VDJsF5DE23DdZXhy8ngJCEc5NjZ52sTAc4wmHVuE8jqMdNhJTXj8U1d3ehM5",
  "key26": "2vngWNC25NtgWDzX4VoMZb2g8mNLHnxUybnUWn3tKCT8i775fJzBRs6r9jKjz847YwcNhNMiWRoh8atDMH78gBzm",
  "key27": "438xcAsgbXaBpqdfpkHdMxwtwJtXyv6npKuBBs9w4vCDFdcdToKoweFCAGmohuRpqL9J7a25HZZ1PYWVjJjwMePt",
  "key28": "2y2tE53u7zxRMpCaHb5LoZkuBd5gJMUCFEGPHDpKs6FgtDmjS9pW4RWrrwFDLVy5ZdqJPBwhNHK8hFsz1ttp37W7"
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
