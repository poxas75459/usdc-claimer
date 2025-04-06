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
    "3H58pJKEqsfPy5zgT4wbW2qfyQYV9SWQn1LB7a7EruCdm9xS3gQjMkimn5neF2Wb8o6VxBLACwyxDko72Ai5HQ4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TYgmpkwbAvpfmLYxv1jvr59ZaZyWKNdFPfWkqh9wSxVdBt41esE1EtYPZ6RuCZU2aiLWBeUZYYmeuLFLJYJCbCf",
  "key1": "4GGHy2DaJZVEQ6AxEf3VooC8FCfoF5opzPdtRLEsFcKZBqBvSZmaJzX9YevbU1x4AKMcFbCGcGp79yTZQ4D5nhLt",
  "key2": "3FQ78ystHvG4SuMZEDT2X3o14Pyzfa6rgpZfPNz56MBi6NQtQZ9wnri3awVfcfGE5hJs67wTRDxMKN755GuPkFRD",
  "key3": "2prunYAvRcp6aQwFMwZPPL5LzTWR4EkMNdPRDiTwbjpeirjrnvdNZ1d8rkH8d9suHG26ovN68PGqpzJetdUPGGH9",
  "key4": "5jgXDvqMhzVG7kwN2hTiYwLDavr9yCZS4w6Tuq76XYpNkiewB5KeLSWNZamJcBXCcg9MAapdmSifA71dfFXGLsZE",
  "key5": "APHnvcBi8kHiNQGd2C3C9eecKdAC4cS5DiwdgdozknoWM5x9p6iHT3c9qkAkxSS4rFDD38oTRSRbpBgtniyAbUy",
  "key6": "5tghWngt6xdyiuCgJeG6FpkiPKKNCfdEZWhTwWKwvoYzcwSSfUwyhMiBCFZzDMEm1DFMp8wwQ9jB4rbCHMnoVy7Q",
  "key7": "3uJ8AxMxAGb58XDZ3EUD3baBM6Pxnrbs8UBYBVSEuH7T4EymAMBkAYXNaJUxEQ14EyHxMRpPVaVvvzzmSeB1rEEv",
  "key8": "5pvnguUp2ZjfXWkLekGVG2knLBjUpQkNjjEwcqWdfSuXoYVofJr7UHVmWaGPKaCq8tUXaYjpTZxdDUu2wu167bym",
  "key9": "64hjPYooQJddFpJ4VMaU4ZLt8yTEJmov1U577VTrogf9ui44ez5EhfykgkGKayokytK1onxNrmzM4phVokjKUFzT",
  "key10": "4PUgsjnKFqbFK5FBuTRU4brAYMijAdYEEo5E7d8vpEmp8j4Ju6DgLYSuDcfqHaNnVxcDC98vQtxHbPbUG6XMwBqq",
  "key11": "4hLHfVFV5pL1YqB5rt2kK4NGCAJXPzVEsUNLpX3dA4aCbhnBeAVsF2Z6FLugaiYaqVA4vdPD5m2FaJDNg6bm2qtV",
  "key12": "5naCV37ZJxc3QqTTuw28qYfC1ryWTGjNdzLoQFeHVmbAr5LvMbZjHydgC2S3N9ExFCZMSYjDmLGHpAjjqhxDw8UB",
  "key13": "3Mfwpyqe5Bah7UucaqTsTTLBqGr5GksaKNYkjjpcnKZLZmcT76gHfgi2dL7uz3rVRvEF6AC6hm5vkDn2YUTqrdgg",
  "key14": "4sscZfmmcrViGpnDgLf3sUWxZECFmi9A7tyGBZKc2sLQQmi3Dq5gHecBMjsanaGCg9iqAJJ9UJwLgJZQmpwuVvJc",
  "key15": "2DNnWzwkZb2P8mZAVKA7aQ6eqDrkvz1UzmmYnYfpkTsejK8zhmHuoDeBg2obG4s7gR6Y9Hdf1AcDvFgm4eEJre4E",
  "key16": "SS3bv1GvXFYPwSXxsjButnL3PxNxkthbtA2Ebaf6b4JisvwMdPqgdmmsYsBRNF47bM5jh48aYUu71u3BTUnUvva",
  "key17": "37PyrcPBaqD4NxqQofXvqsSxymBrsaDDvx6pDQ1n5aiDUym2QErjk3tbxBhUjEbvoH5KsA8thC2sqV3NsjCNzS9x",
  "key18": "3toJjt7kVfSJ6xAUKFNAYrt15mzsk14xcntQtdG6fJ4wBrMVCUbwtfkzJMNXQw7cMsnjt9uJT4badAAvs5FMnNLS",
  "key19": "1ztQmg4Vg9S5XDDeh1niKMbhhenguaJxFLCTkTew917SZ6XgmhnGtV3QFuMvztHdL8ayjB8ZGx96R41EDoXeXw8",
  "key20": "SYEJM4VehhSSEmYcosi5J1mB9G8UUjuwgEg3at5qiAzk8aWNM4FLRkshTvi8ReFo6bWYv5QvpLaAb6yjqpXjmDG",
  "key21": "4WHmjJRr24B8VWw56foVXQgRUwXajzE8cK6ekUskcWY3qGEx5MWd4rXpjonFHbN7TXknzko7WMEagisysoUNXye9",
  "key22": "4XJhYtJz5VPyFQXryLitAsfYTrN5Ww1FAtY5rE4NLmCuBFihNxZcK7DrcX1kJtQEVBu5hEWq6JjKtQh5qzmastta",
  "key23": "517bFrMBPJax7ai7YdTex1MfhqSs4u2H4qXQo36RgrGaB7Ku67RE1T7H7M4JDGpKp3kMbZBBCRVj9ywPSvQfG6kV",
  "key24": "5m8wGDUdKB41h4CFHWf5JdBNHzkVStMZgbadRz7cHkyaM9HqGuNxvjQDwZqMgSGvaS4167qptrDcPUBGpArzv8SQ",
  "key25": "5L7ucFWt1VUgAqFL8cCkRvRQuLmN43nFV7KKuUbgjZTtCjBoSM37MfCX1EKCTZyCPuB7LLF4uWf2vFqRPXZVMswh",
  "key26": "3Ns8o122pzyF4KUgAce49d1RSh86vDKLsfhUD9B5RjPtB9q22CXzx3iCZ3WaWFXpU41gb6XVCrzt8Y8uARH6Fkdr",
  "key27": "3f3bRcpwdPKx3ZjTZY9u7YKhv6xqn6QBCcJAHcSCQCw4iUx2vkYXAWE951zXtYdYeGpvUyobS7vA1uNh3o94JvKw",
  "key28": "5ZCo5kUd6J2B4zq6zpwSvpsNkXdLK7uVUQYmXs29cF8nEA19wXA4NgjuHZ51AS2f4CX8xs6oC8Pt5Kq9QUoLipRw",
  "key29": "4zvVizNLeFYvCZmYGipH748Kg1BnDQPaoFyzeTNZSu2kf16N3uh3q54PVXXYUn6SZFWYnptk31pHj21t9yuYkW76",
  "key30": "5UgSbEW5NBsmQwvb5ptMFneFkhpTBJ15dz5WeWfLb9omTECKRSJUMRMQAGopmXgHnTPBr15jswXteGF3mDo8fwSq",
  "key31": "dbUoUzt7RQxKbFEdhqdFJwNChAAWqpU8ZyKgNBExFW7atY8WeoZxQAc42Pp7F58YoCazTtsxpQReHNQuHVoFGZ7",
  "key32": "3pC6krd52Dfg5Mn7kXM29xeoGmDCmNm4sbi2fBhkYXeNPKTdJ3mErDtr4p9vHAEub6abFSzjEkUHWhEHqY5Htm93",
  "key33": "633sLDU948NNR183PwAvshrYPAhf1jq4ZY7Cw6k9gm6vKsgj778DA95MYT1HmCQBJu2GRXTp6qDQGr1HQouSci8t",
  "key34": "2eiHBnm2a9pEHKihqVUZq162AWAnJEfsskc5U7LBa3ohYqFKdkKGQiybYoPPb8mK5Kqz2we77q3HbHbhU5DXdbhg",
  "key35": "2XFUkhqhTgYZe9qpcKqPHURipJaKBrzdKh37EKWTzpg9zaTQTXSbce2u4trN8Qg2NxrjWQaqK8U61HTR2i6rjUgn",
  "key36": "4EFJE2jTV7G9ugcSMM3eh6NHHhPgLx9cyTL8M315vJf3hfGgjzcfcSDmPdh6G4PhhM1t7HKeTfm5AZoiWXiY4W2w",
  "key37": "8hSNsW5pNdaKJvSzH6ABNFPoox5vje6yMB3YAcbtLzrF39iwaDZdxfsVDwUw435ZnqwkKHWLU9iDoFnvsPWbPU3",
  "key38": "29fmrjxGUxtMURfrPATTdwv6UA9TnwuvFt6qtrUZteSwN2oMhohvWdjDz5z63MtdXDiMkR2Qzqcz831NoZdoozpd",
  "key39": "3oZ5e1YBNVUaxy8xHC1x9nxJjRx4YDCWZboPjFgQ5utRJTz1ctoHcXM25GZkLWS5PUEMButh2Qah16RFsSa8XAdJ",
  "key40": "5U8Lyo79vuvQTaKvDVQL9pdi1tLYPUoa7P7sLdp2xEbS8TtV1yLuC9acp6CS2xfS8DiHwnUd8uCBst2P9nk7aFmz"
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
