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
    "5LW1Ntz9xuTVbGKg5juWEYGsfdbtucXq5VWAHXz2txyPi7zotvAz3ecsyK2A8pQXn9hZZR6n2gBtZwitEVfWetu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EuefcvCKgHchJ4RJoVH49RiJuQVyF8sm3QFKC8P97QKh6Mfc5C3foLg48DuJRrt9oQ65uFKZy6GLFgbkpb2djiP",
  "key1": "2j6SiwkxcTz83ScBvW7PK9jtPTKeYsLLhFrHvmb8i8W5MvdTis8eQCpuFrRDDF35nRH8TVNtZtcERt5mK6Lju828",
  "key2": "3jPDieoRVWc6TrnP7UGvcJzAnTaDf516FC2fss9fxqbNRRG1mX185m8bYFteNFdSwdfDpJgwBuuSywA5BjLjxvKr",
  "key3": "3KWHe3Lp8jKuJ8veHdWJ5MKXY3HcQwh15bQN88NWf2vpCNmmPCtceYJYUVRQKseZ4WXhsGCZqyWVmVuYAtbDPWAF",
  "key4": "4ptKmaWj1mHv7NDUxvDXg4eH1WB5yMNagEkPkXFJ1ebByyDPYo23f4ZrGwRXu73bK1Vufz4Ub5X7bPgV3VrVkVg",
  "key5": "Sop3sF3hArsyEbcvaiT7B69acy181xZiv3jYFBpdaKmaVwhBroFXuRkD1HQutX2AsXVUwpZBb1E39kdpne8Aao6",
  "key6": "4QMZ5ri5ip7d2reDBt6dW2r2WawR1WBnsdw99UqcafSthkM7b3WEX6s9iCHuz4LWiHTEibKyh88hA8kjiuCnQUK",
  "key7": "24rtemNpraQztE16c5oNxF3924JQ5drP8AcgmT7DPDQJKPMogP8ds4vC7uw6SoJWY5KUhYfY7epvXxMnPdsfp4aM",
  "key8": "3TmwAAmtpgArzD5dsLbEFrxAwqkvStyNuvKmXh6orvDwK98mEPHz6QQdedgKExioXTVFuVptiQeeQeC8GvpagvUT",
  "key9": "3g1uSrvYs4JGRLDeksB4B87uLksjGFHgiUd42KUP2NHFi8vzB2p3Ma2RQpqACMUtwZoubLVnCn3FA71ySWLcA8pv",
  "key10": "3xXdHf6SPfuT4QgAJeihnxUntTmmhqrtnhzxPAyy8dHU4T6n2tKyNi6DbK2MWBxW8rPBSMnbKPMfWCCVJrGvz3Ap",
  "key11": "4jYjDnUZPdj14Umf6iSjxbV3Z8BkHmUrAyVWiugUrFJmnivcnEstLbx9jX8Nn1rmPLupLVaJTZyiRoxi6rk6FTm3",
  "key12": "2Tk1uXotJ9AHpszC6YADj2HTQmQhdEqzJA9X9LSZAjNx9CpRVpdeWkCxv8cQfZurTdj1z7TQnGc4HbYuc5XfDp9p",
  "key13": "fRsyBzvyw7ULhNkt9gwfC63pDfMmGQgdFQWLTvh4aK6WnmMA1xgndYvpGJzGzB6fNiUZWQ3PQpQE27BJizU8BYu",
  "key14": "3jeJGSQ3z2EfDL6kP7qSQrRzAJZPRv24rnN4bq7VxMzY3GSHbZsTNZhzaQJ4EDQcAdz4uV6yd3ZxkgYdmnh9qmzo",
  "key15": "4quwjRZPzj1wGkNeiQNfjqecT5x3DuK6sJj5F24cTZprocZWS6M4Ltib3CGimX69wBBur6QqyEkZwsMo3PW1mLGo",
  "key16": "2KcVgGDPYnLirzrUo3J93mWSnbiYRBkf8DKL418HPGssNfUSLm8q4UPRMsY8bzhMWX5kNVJcMxsyDbe5ubB6merD",
  "key17": "2EPUB2xmxgDyiWcLybtinyh6kmruyFQytnrkQZsJRn1j118bxweQHiEyWXbxsCKZ74DXECRWGY67ZX8nG1cDrLWT",
  "key18": "31mrW5khj32kZq4W9fzRyMe6mZtrsMHXCPeaeN2HyxF5xNNT5yiF4eEbKScFfnFb5jBR4BnNay8zNCpEwhUwxKkh",
  "key19": "2JZsA1pDg2XmPSofL2fqkHhpXAr1PEYN9zMgJYHv7A2nSmjiGpYnY8E51CVfvHWe2S4NB5hMjL1xazMP4BzsvLgJ",
  "key20": "33JYufNtft7jfg527KF7J9upVad99dsunkLkzQVFPRAmiLxzX6qbEjHoVJYAoVrnTs4cn5zzUt5PKJ8VG4uRTds8",
  "key21": "4d5yaLNVJPZL9czvqBccXSKKyHrtcjMwk5S2UXw39XjSTQrzy1EeHLJc96PxpKZL3hrZYDpRnoN34F3JzMWUXsGy",
  "key22": "4rZaUc73Axqvq33i5xrhVC6SQPqZzDbzeiugHzQhHeg6QNSwd2HWAPosWmPhXKTEsVfWmcLFj6JAvcmUJusetLrw",
  "key23": "3s4LgAqcUvxLawACBE7xdSKp5HVk97oKyrYmAJG6t2YCDqV5dj5JgAbDZghLh6ETNG6BrVWbtVd5PDLUPPL7v9my",
  "key24": "5r4L144EGZBxksUeaYX61tYMdEHMYfsb9smGxJQgZEwuhQXZJjyciuCrWdUzkbfkp18bQGKAHvBiM317xo7UEG1j",
  "key25": "KGKNEkiYq8HRQ1bfLRXfSV9oM4oK1QcbXCxiHQGA6kjeFkVAJRrA3AE4hFjW9kk5dkdLD7Hz2zA5qYciAYjj5TE",
  "key26": "2VUJYAdvmNdZAGCWJyQrcYnKr9Uc37AEQuFgTLH562TpVuwjVWVXyR8cdaTqM5CKF1q2FGFxtE3fD59ovhcR6xUL",
  "key27": "2dw1GH7nJtCvuZ5kHt9KpcAMkWf2bVHF3QQx6sFAYJfejHpqy7EDFBBJwd4zfDzaHH62Ho4QL5Bw56G8L8ch9KPs",
  "key28": "2nALCQHfsW5gVQZNnRvgCybyTPGBZ4CWoEZKGXbtchM8btGgDzsDGBvctbuZeoFh634Hx3z3dp13hCAFHNP733r4",
  "key29": "2DUKMKxgdTrwzwNQFyvPks4x5FmAqgx7TiUuyqPZkn1eGugWLcQHyNMzVQY1UjTs4vMs6A4p6DWq3BUgqCbHLpFC",
  "key30": "5qU1EJSE21Ns1GBXUp68WpD6fnoT2NMm5rR7khz7m8qZUGZYH7yD2zi6E7iX8G9XKopfSxEPJjhb2UQCxCXwcAna",
  "key31": "4WqhD1QCFC4fNubHXhgCwjTDUJu4iABn38qt3rk3mALHxUrS8JoH6Cq5heb9ifqNPxyoHttes35StWLULw8uzdSo",
  "key32": "4jDPturprSkCHKkNPJ3xSxnLGUtGMS1jayWBodQMxFikQ8sCxex38TvbXzYQq7SWqL3fPZvh2DdPF5tT6Y7KeX8d",
  "key33": "3R7gpmK1zn6orLNSdCkbBuSX8jKq7tqvzVA1F46jYnGeuutJ53UF2LA6osTYWMNfAUy5MQpxsV6QQQCQL2zWJcaq",
  "key34": "3yTQ524M8EeoX8sGa876d4DQCbuSfefhKyunEwRSTEQWxzYbHcNxmv3uTxM38ViQBVpJNCDcmzWDQBAtBFsudtFR",
  "key35": "3V2W1y6EVMejNa8eWW28fwFkH8FWTxAzLtS98xT3fVVcSuEpKcoFVDMTovWoRK6hsKL4i1v8m8tibzsC1zFU6uj9"
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
