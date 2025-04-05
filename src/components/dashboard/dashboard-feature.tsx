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
    "3Eo84GKrZzpGbzzRMwQMU7fMFrdJt6EjhBxXCQGqunNbmkYtJ2pm561e4HS6PhkgThmFMPKeLGMGxSLdV4UygPq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DQCVQavvB7E6nKhzLXzXPHbfFMf7v3ApR9QKDwqhkut4nP1VuU4JNaits3gyZjysoJgF5pzFKXcWYLDGXU6vf9c",
  "key1": "GcfS9Gurd7TCvKyzQNC5LWM9Bf8GcpFuxREhtjeMoeq3LKbascQRL7xddsY63CAraKyLjXeQaaEppdA9RWRxE4c",
  "key2": "ohmaCkmwc8DrqMbHpwAmBwofrFySdsKM5PmtMZhAQoUoEJJ6XyMVV8WWiSYbW3q7YscqpzTW6SFejNwQ7XxQnhf",
  "key3": "23m7TcxkhYBqQYMWsFRxKtZvmb4XRtEYEqrHanLuM9Ppmd6NmuvgLc1Mvbdky1hwLPDg6HQx6kym5kfdXYHKmiJp",
  "key4": "33MHRsUg5V1vbgQSY5SyA3TLk5eqfup1yK9vuZ1yzGjRrPiDLdkBKqq9MsyRRHyV8vNCdXG8MgxtnmsD7KdrhSYZ",
  "key5": "4bGtSwoKf8BZPgt3bdPNLxErL3duhUDQbiUcYNntxSyisiVMB2s1uG2zptNErsvfoc5abKXyrRMZV24abWLgoHAN",
  "key6": "Ew6sQgMf2wGPsC3W99QtkpyVthBx54wKDF63rCVdqPJDJHy4pamK3PTXiWXqtWjfqEcHoATfsD9MFPYsCJNFqYW",
  "key7": "3HLkxS9612A7paPJjpdmNo249DUijgYseGXvi7mApsZoUrBJvkLYwVR453zdnaot3h1rrvf7aXRRvcLjYpXLDajN",
  "key8": "49Ln3sjk5khJfPGpEAEG3JYBZQw4nivn21r72daidcfuc6K7n9HJE6UAAtiATvR7rcrAYVRbJ7mW4iogM1g9B7Rg",
  "key9": "5gAZrHRnnvZ5b36n8r6Y3X8RJX2fYjYJNGyrhXx8EBQQfkbvN7qysoWRR5RuKSat3cahvZqwBkDixxJeaDhAvxu9",
  "key10": "252Uh3fSMRR8Jf8WyNKQqm7HebTqKMsL4RHiu5cfTq5m37cKMvjgws35PcF92FJxDXMGqM6VA14aD3VSQDgKYnAq",
  "key11": "63qnosfCKjwqhHBzUv2zg6tH6Fhu9UwG8SxJmL7rvtDz4s2hTTT2wQEpwc7Xg53sK7iAs4RUbFDzaywmBKxJdVAY",
  "key12": "4L9GJqLhq6jzb4ZaP32LvgfpQb5GpQAwsZdgFoGHrYpaX92U9vbPYbNYXT3Ti9kHdpq4MGuidtNHLL9v9JVLzr9X",
  "key13": "3FCSN1DDqRo6DK73Md5cawudZEQoMbCmJDXF7mnjHzgzSLKmiGqK99Etas1C9AmPDfXJJb8KUppawDwBMUgRWDX5",
  "key14": "2NoeXPmyTQYn1H7ZWHjMhPJUkmkFkSWgq275UQFJ8KEeAi7ZnoobC5C55SHZnab6SU3YVgGndaBNui4VvQvUmCsu",
  "key15": "272vDLWCB1U15Yom6ekjQBbMJzYBJrXcdqEni9ejSqUVACtmqdKdcVYPi5rrgo1Fk4mjBGpZWSWeESkN61wys27i",
  "key16": "4Z4onBbGbXFfPjFTc1kjYhEW9Jk2sK3nd5JanGSJuCEz2NX4sfsG83og9gMDx2XW29EgEneSCBJRhTDPwcSMHVvs",
  "key17": "2gJ2oeXJcY5zD6iBtX2ujo51KvPVWXpNExpCdotmFRLsqWYzpxbQw19KEoHgXgMSotJAVVNjivtLNiwjpH7caj1e",
  "key18": "2pi7G3rHWUCvZFs8DSgPvW3gDGkF1vLoUg5UuXepGUnkTya1tuZuXoLYgduDDvhkco93nvjdoCdtiFzs9rusbjVT",
  "key19": "2mQnMGtf3m6Dci9CVLX1JBmcuKAgpxY5d11eaZpTTkjzT4a6RX19wJztobwhSzDcSqKwDQsdzBnLiG881fvz161V",
  "key20": "5AU1Ngd4yrBpvepqBedGbgsJR4z1gH3qZuJax62ZQkM75hBE37H8n3cWtbpDL72uq2dm3Nhrh7kvPsdL6jJjsBCZ",
  "key21": "49ANdZeKcVYKfHevVVPfSXeCuNJJDYP1m7SRvxzYrVJQfenCca4PZzLvNvbJPb7kTLMyKrbDZZMyUpujcRZPZDQV",
  "key22": "3cgWov6WoNKSRmXhCm3hfPWGWztxd6D6iEhbEGBpXDyjR1CzwR8LjDG27UMsKEKYxaB62LZK9yWhNJyRKqQMSPFi",
  "key23": "4jvePY4FNtcmqyzKCAKVncccFRtP9kAsw5L53VN19dRuvdDsJFWdSDTY59ivVvHiG7ZyuyFo9YLfcjtRYSMEJnUh",
  "key24": "57YCTpeimQWvNGPkUACsqkp3GAhWAHbq2xhfzQWrjfCcyoSenCnbr5T1jhwc7TKuZ7QpnofpnzFBcePtgHxuwv21",
  "key25": "kAbeZCJgXkVBgAZCnjqJExWkzy75aE5GENeakkSnPe46uxF5SBEmN7fhTWmSryiz3UMsfDs9pQnwDcLPtSMzUaZ",
  "key26": "4Snu69CHgHyqMD2aVgYpU9CuydtqCDBPBmNiTepa2THfN71KoogjGjrNevFtkS8bAoRbVk6jccoZ27FdqrM5nJYU",
  "key27": "opViMLVd5DFcaCa9WCAmyvQbMNESK8LuDyw5T6dNXsRyPYfCCwkA2AYxREJXkWWHKRzQ8uwK31sq3K7cvoTtiLv",
  "key28": "eF4PQEeJoYDA9fkM9Td6oFAnjuHEmr6g9XwGvVr9ra7yqFkJQxZUcEzHCF7beKmUM9whMdokDax29UdjrEPsv9C",
  "key29": "4XZP3hjg9JPgWw73qMaea4ZWnpPNpEWCLyaEdy77q9hVhx46VjcMzmaFcGB7Yx9Au4c8QP2kj3kf7QXtMtUecNwJ",
  "key30": "4vNom2SoMFXayhrPJRzwfsT8qugT4SZdHKhD5HJua8ca4cMcSUE271U9GcsEUrNBeaccaxMdFdkyXX3h8E7HQjWa",
  "key31": "64gJDVr1Xm71mEWRm9FvdANqgZvoZ7D3YGRDguuLHwpbPJNt7dwEngDrZxz3v3Mt7XeFKCsPWFvB9Ji5wiZ2omcN",
  "key32": "45jQ8V9BwxFNVsBFLZiFAqT6hC5HPVsYkidb9zGzKQdKAwzMEXceLVUbkYZMpNfJeVMpXYwTywLYEgqngkhmrbjN",
  "key33": "2qQwzW1GSkK7WWbBnxNTbKZqVQ9sVRLNSsJFTqw5JprFd4s7jbdLSr8GHeVe1Rp9E8nHEBRqAGQUUJH5njYWizqC",
  "key34": "2KnWXCzbGxfvGuTdRCF7bFSr3C1tG2qrhUJDTSPR4Jt39VWCTdPj8wXgU6CD4jiUvEucbneQq7rSQR2N3WeMqwNK",
  "key35": "5vL3RgTCiKTFnJ6qTpbhG8Ca2nMvUY85jSshNnGjQJid9Bzts962X9P4LKzBxA4Jk7mj72zjHc26SWRti6FP9cHA",
  "key36": "2bP47QgM16Y2iL5dCVwCu12ZGL4yPm76FYqBFYhYCoS95naBy36nqcKuVpVD9XazM2K1ysCAGz7xZ1qLA73AkUwU",
  "key37": "3CxVywKo7kcYbHsH2iYU73jNjoQwUsgznRm78kPPoeMi2c5Y6L8vdxLeowCEqprQuybcWuhwcwAb5U24fRcKThSM",
  "key38": "66HjausshtQxf5eKDDRB6LCRFmqLKPCEmyeqycxUCfppxfq8sAtDSJodbB1GghE9QQaKgzWoFGVrD76zvcUMX7GH",
  "key39": "neacXG4sKji51ZgKQDnHaEQveoMZoRoAfWvmSoqy9meMfumooYEYD5AmM7MXigReaCSW6HP6ncV2gpveRFatRSg",
  "key40": "2zXcf6uYd6tTSfT2et3TCShixdi8z6xzqx7TPq5CAksL12jiMZeKZSXyuLvDPcVgP8jkefLnzVp9yc924RZUs5wC",
  "key41": "49cgfmQw49pafvWepf7qdJE3hecCvQRh6AFXMQL5GD5PuvpdePZVArRDkinXm3CVqYgokm7a4N1efDFUd482KYV3"
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
