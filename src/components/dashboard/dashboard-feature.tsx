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
    "37MLaM9qitQQicvkSo2Jg1SMi3CV6N1HyUFPNUxm8pj95WPJ3tRQcToEHGerbhJz7ihN1rZ71q8mu6g7ecmdBSdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QbQAuDnZyDuUixRvPmCEV8wwniLrAr4HYdAJjF8dGidyNDdajBmdbSAVx4nxbZc3KKdZwbuduwVvaaMQgsmKSUK",
  "key1": "388VdKwQ3QbcYokWdcUbiRFKv35N1aF8ioTtHUFzUjs99evz7xKVuxQme7zzsEfmM7BJ7brpyqSsyuuWDhbtjPAh",
  "key2": "24Yc8PMYJ6RT3NyobqLKVWpShhaCkoyHhMY4fBZa83UwPtv9osSdJ4ZhubDYqCkp7jpUhrLtEkhYfAHK1f8LkXLb",
  "key3": "2R8GqXasUoSH8nZtALzsbGdFQAdMFWBwsqodUs8zGBUuGoU7eVZJqkFCQCfY6iadiaU9sCcU9Tmd1RgQxiYpYztf",
  "key4": "67jC1u4AApqm4uWHBbYT2wZ9PY2Sd6AYQQKNduegJyHuJC2FE55xSqonBAHKPKWeWnBDXK4b4R7tc83sY7Uq4zBZ",
  "key5": "5C3i5NQRb7d5yzjKFSHqeXYMR3KbDqKKSbCG8HqKm7HmEbkEmLKBMu2xgXKz3bGMaMsNA7YgusYR13FDqGqDBgq6",
  "key6": "5fuCi42L4DT9NwP5dpXjUGYZEVHLvp4ZdwpqJQAaEDNDNP1sJV5uNvemAbeSLV4sBi3ACZ4pV94qLiDL8oevxhpN",
  "key7": "3FDmudq3mUxeonPMVbSaHZXojMMSvYP2xVjLG3u6cuDeqL1VQtL3au49nQoASkGaXiC1UoApssTYCR69bL7X2o4o",
  "key8": "2xmZ2s8WgB6JJj7E5uroHPUpezSMUyzys2LdGkZfrDDvTizFYKVfigrsrCQtjGXPUE9j65ygQV85a4zUaH3Tw2X1",
  "key9": "4jPVZCFVtrWYt9hKyEHWgtHr16dCDycoDASiUSnq58RMovpgxJQQyA2b3fcuKQTxYXESDWD5cLWWX7r1jgHq9PQg",
  "key10": "5NTGHUt5bNqTbe9yj4opDtFJyGCXCRRaejMT6NaQXbEe3gVLKbRsMWEYTsGTR36iSAzwoodS5kB7Qn1yhmK7e5Mh",
  "key11": "ZQ6MhyetxpanE23NNbRLiXG3PhhxLFDvMq9NCwAndTYPUYUFGjkNZ9smXdq2ETH3E8s53LJgkYJhG2prLM8bDhu",
  "key12": "63uKG6YtMdCQoAmXA2rpoAVUaVLvm26cSF7BRDjNHCK3NE62VXax7Xawdkcdki4rBmeboW9o3zr1DQyTQnQRqVuo",
  "key13": "3PsKjf2brvdj1WT4im7RuQL4APASUmeAXo423eSnwrLxWT8xVbHmcmqLeJHQdKDQDsbhbCmJMtKNUacoprDiqEBr",
  "key14": "2Lok7mcX4M5MaVzSvsvdEpJvUyJLyWnRcQmZZ36WeL94nndPeEHFbwMiW3wRgXuaL4aDeN3idoX7eJ5zRWui1Ufx",
  "key15": "6NGdJHUQtekdxWgC3Ws6aoMKqn8saNKwpqpkrpayPQf77vVEUDQMKbUhHEEWDCoSZxn2bBDe2NmjQ8sWmJYz93e",
  "key16": "2ZWa6GAyyqQKPUppowF9s3Ex6wfRYVkrbpqo5bi8XdqkWQktuh2kVTUNjpMnniSfCDSvw6mzw74ThY3mL15wEwf1",
  "key17": "3CV2cSRXG6rSR3svzJhPeyGPjiSF9zDWLsXQv6iQmX5BbM8goKQjTBvFTKqG84nJbYk7VtMGWJ2Rg3XtjYWN9jeo",
  "key18": "3ei3B8AYKLK8pHHAyLS9dZB8k5vU54XVp6eMiz5yBq5KwbFFMJ5q6F9sbuENEfdrHG42j3m4VAXr2zJVMzo5e4nm",
  "key19": "4g5aYecnoZFiuZ3qpxPKCUFVjjTiiWRPKzmEegGdzbuK7UDryBMsUmwJKk6hF6gaLRyaRfK4M53wo7ifJiFVhRT5",
  "key20": "u8pLkdrRwTXU41gUkYdDrT4jMKUVrNptMFEM3rxczw1kXAZZ3aqVwyWvks4K679UWYGnX8KUXXkmGUxmuNVnMDs",
  "key21": "3dQYJPYdmCAGL5q3Ejg8NEVrXeJ9CvKYxjCRSyRdoU6RvUs8FqG8itNk6bmjNRTggrGGcdu1sqYnPxJ3REqYEYRd",
  "key22": "3YL1EDNi4aSfJa1deXWpBPeDMFdJsvydhm1vQt4iTzgGN6p8K6V2hWTKhEG6sMNjqAkQ8s9LtLfArAUNM2ubKxCL",
  "key23": "5LcFN5RCLcPpeX3PLG2BpKi1msuWgCB34pjxEyVMjvrBkDa5WcpYUM9Y7wcDwqpVFSisUjvHcg55P5KGB9yxaMbc",
  "key24": "ZJCByhqJhvoEzZgjPmmpWYRWMH7aNHco3H9wGkrDnGe6jvqfmaw58Bk4QkXh9CrrD8vUYhYPWSggVajKCKbshZF",
  "key25": "956bVWnzoFdyb2AEMBVYrSmXWAYnjsArgSCYktgPFp65ZGcANr1nXRZzMGu2Fj8vx7S7B2gv9zsAuwvDuwroo1L",
  "key26": "5a5apu5QsMXBo2Ffy5c7o9pw6YKJumEo2ibH3zfYiNhTQT4f6u7rQsqrSLL98WZVvVvZGPhMr3hCT2raokKFyVbk",
  "key27": "5F4oUBwjFK1mPVjUNnBDFFiuBUozKUZY8XNv1W849ctdXVHotHRozgp8bpGXRvnHn35TNM5AW4SuoK8aq8QzruGg",
  "key28": "4kuHXF7zJASizV4VjvhzESv389ZQPSUkF5A3voRSomhYoBHU4YVEjsSMvJZfYSMZb8wz4ubfZG8XxCc1AAT2E3vs",
  "key29": "5XirRe19976Ru7dNwSmkp28aBx5PRmtbw5UGb86T5119DVxiLDhpXrqcyW2zeCxo5D892ioR6b9DwaZMH5g2sv1N",
  "key30": "67ppyHXeGK58sjU3aEMVo8Vjd3p8VsQpepGtXnh8GgfRZZBVb7edWpyxtg8NtUr8aKsijWEC4AvFQZuCqcN7LZ5n",
  "key31": "4atM1u2KWyhqL3cZHou8d21kYAzrPQFfsCU5jRMBdhCMqdEa5ET8XEiVRq4bF5bCY1mTCiNRGkmMoTDKM6ZaQ7Te",
  "key32": "4nm17ovzK1ykdEZ7vMNmHMJWx3TqSXEPqMiZkNnF8kSMVo19xmQAkEA515j9hLwjNr414zhksQ5z4vMsMqJNc6ju",
  "key33": "58xuE281nZGupprd3t36cLxJZ24CnDDDxGFiaQ6gwN4bigs3kVUmUo3NDxPWVka2HA9FEKdxNM6FsCxrfKtgikur",
  "key34": "67DRJhnnB4CSPMd6rUiuLKbo1NAYtUd6CMdaeR6AwSZN7Xpx7xQJKKUPgarvjGhptH6KeEAE8xehojpDLj3ULebf",
  "key35": "34dDHBvTJnGnnbjyavVFJvxfeyX8tzNy9d2ib9gWsYRrWKn4ibnjnKXVnS4dB3MSXvvnFmUafxtBcmcazVPJtLFd"
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
