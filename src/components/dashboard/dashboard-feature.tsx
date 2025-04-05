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
    "3G15XShiq3zBStKxeqta7eFEv14RmE7UJnDqDJtqfEd2azAkeDDQda3Y8D66j5RUJb8PwqiwwcX3A6JAE5Ez5cas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eVMDJuKQjvWWqokXxpPvKNNrGkfBhKLMqwWfV127cqPYJF4ZYHjTfoscEDvCaGS2naB6TC7AarFCACaWGhi8rbT",
  "key1": "5HANNqhcvN5feUTNhyUVRQmVgMLfX4HHoczyNRjWb22KcEz9dZmK6wut4Ua5LaokoFbB5kYozg66jmQ2v5miQcrP",
  "key2": "5jmvR45x6PNimxwQ7nrp1eaD6eXgB8kxdPi5hvkNoLCH9wWY3CKEnHxAq9wuttyAPQUagQarNtvwsoLCTMZaXHjw",
  "key3": "x9dFMV6zfRhZ49JvRqMrMWRyRoWxnrTNjQhc4qdXmrQPfpnNenTtiDk6WAsEZqHbFvWzatshYP5b8VUrjeNgs9U",
  "key4": "4eGkpSCNKCceortCbtoXYMoSKes7nJCwa8teo82CwAvqd1yutLabm3zrrfnGeVorxmr9uMbLnwAJiVVW1YWFqmRS",
  "key5": "5jNy1tL2wTeBsohd5TNMFccbrN5XF6rC3uvQp2AXuydPfknbBrbqXBZBWjh8bWCSS1odzgAhRA2QX5bhaRLp4GSp",
  "key6": "ryqrbnw9JepeqpUy5ZNfRiHx98i89uNouc7aiKminP9Dksx5RT2iwMMQWjdf6j12TixxRoNw2L2CT7NDRPoybLo",
  "key7": "3PnmC8tcHmtHAAgVNbvEM5uWnsKrYDUrjwcKw1vHZifsMYe4bBP9GsHZaFKqQ9YDd4kwo5dccYAQ1A9J3mo2Q8pG",
  "key8": "48HSM9uhj3ZfY1yWMZtnPHrxPgTyVjDGKgbu2zWP3hFj6iVxjSHandiPQ66gsSpWQyTEYGAFywGQ2AzpH9UnU86e",
  "key9": "3PsbUEs5mUbcYd7fHoseHKa6FYdB9khctfYUoLn6nv1cDqYjmf4QJbrW7FnpD7k83sdoUKBiPu1pmTYZSCnomzxK",
  "key10": "2AQstujyLnRLWq6cmGgZy3MoQrA9XQWXca2zTRrvj6nTVpgM1JebUnWCgtXgbiHShrfXL15xJ7tv7UkJcHAgeJFk",
  "key11": "3jdS5kohJ8c6BhfF3rjBUNiR8gCdhfFpa7NGZiJVnzGVgJa1txM2NstrdeBWYEweXiLpHwgpJ1H8pheVcy9bDK18",
  "key12": "429ehQTKcLKQ6s16972V777HbN4sVXeoPL6hXK8Vskqn8MvEwxiohhPHXgUxJf8cEoSdNapneA6aGTs1rcAkQmvA",
  "key13": "4Et2eV87en2kt6b8M9GgmZua3PbPnkfe7rLhEDayAo3rbTQ1yRdTkTXNymwTrfjbRGBvDw68AJ8xrTjdyHKgSicW",
  "key14": "4HiyP2Vy8WJHF2s3dJ4uJDxCrpjk9XjMKA6uxN2KF9TP3yvY4qdhmW5UzkJE66X2qaRYi47eJKi4LsnM12tobRZk",
  "key15": "5uATL8PXuzX1WP6ugmYvdBQthxhA4bRZURSXAV5YvoySUj3SkVc2Dj1GqarMQgxaMrJxSzq5oyLn66ix3t1LbKTo",
  "key16": "5qEzWeZpsHtThv64bpq4B9CGvhGn8f5wgjqJ8oWKdv2D3gTXAGATemtKZrRWVxPPaUrSdEnryM7idNXZSpfjBHu7",
  "key17": "2VrfCH1JHeZwupMajWyNDCcbx1h5WzrWAUER4V6KwK32b1oQFTSbSL7KWH3xW1b3pB77rmBGeh3M7gF54UjPJ7pm",
  "key18": "tM9JwrMHLWx3tzdyVki1juemiSNtLFrwQvgxLRVVR124FKTCcKEGjJdio3eiMumcRnVCct2q5ETW6iw75CCjD3P",
  "key19": "5pe1Hb5EPkPuU5VbGK42KuGceMfzd2qFmgGtJ4dRXYeb4dHWXjsos1GDdWAAY7a8Qe2m7sHc6FHBdyGBYUJkG3AF",
  "key20": "3VBpavfW3pmiYH4b6zpbtYCAcDLqkXLPPVeBTx3LnZF9hzxoySWpRV4eY51LzNQ81RoAyHE96CKxvMnpSzr1GnsY",
  "key21": "pxzheuj2XqnxNDGhSSntvr8ZKVEYMb8Ry2Vz6DoJvpYBwEtbxqmbutq7hgzofXXg2cAUjBVYfdZhprxLvj7iUJe",
  "key22": "5FLMzgvSVVhMmkRq2ZytVwobzJ8XYgjtcgzTfEAzoXdpGUm7DMQUCvyGPSanBLnoBKf3Uo9rNihaMvcNKEKs7Ve4",
  "key23": "fDQaiuFThXGgdmqMG6mJu26LisXXRXoCFJFXSHYpYg3dDvNa69EKdxZ3ukETN1VeEs6iD1jrXiemv2GUPHew2Ph",
  "key24": "4JF1Y3kXFGSszkMTMkJY8RHfsup9suQq5PsDRPTq6spxdjraoUj4Ggia68PNVeeW8Mz8JFY2m1vWR5gpZgqopwv6",
  "key25": "38Ajda52Eaw8tP1cBpQe6qBYDpnFoKnsHu5nQdV7qyy4gbpKKFh87jsktSztv6TCWSqVgfctGSHysVvhRcbVrkXk",
  "key26": "VTKraRDhYpDtnkLmND4bJftcXRbxoWThimtqAhx6X9cLF8ZmeP2XkffyE2BfnSq7q9mussU1Zn6yYmEmRWysLRY",
  "key27": "7B1tGbPGCbviKba3SvV9it5a7wjmwrNyGYjzHxNKqd8bafJSxgUJdzFN5e5uDUqp6JnUAyv6dvqRsoasvwcLKjA",
  "key28": "2hi2EkWMiwsRSTrcpNpi8rzVNbQVFbPLJkSAqtcotaYB2CvS4xXSwXYeoaYmgEtJN6FiQkRPPQYicGY744i7aFrV",
  "key29": "2emKWEddpg6JKDymY4d6BDc9KghcpsEJfRmALfJkVEH3aWLN4hrSZ3zgBRwnfuqHZh6Am9XzaPCu6b9jbzoqLpFE",
  "key30": "3rmUPUxHgWK3saYDJR1n4x2KU5eWD4iqN533rHXdiRsgPXYGvVXSVsXDqVBFTxbnfzyKTj9bstyxhAnHpNkuBJGf",
  "key31": "v5rypgRM5DAhygpgq1rJAf45ovakukJs2xMZdwvBKNnRhDSBgEUhNmSwSRGgbcoRQoEoCZQZ17T7e13DNsyXALS",
  "key32": "55dAYCvHBS2Svow1xv5GS5hyjbVBDNtiKdp8LMNEp1NXBdhyNKnXHFcMwoqhq68YdybBFBUb97xTtadiznUToafH",
  "key33": "kqpPc3jruAcgU6qY9CQaHi4VwKGkS8npqyUjmbSCeXiiADEgVAZZz4p9V8RsiKvZdzNcyR9szEE1KjdZ3MFJkpj",
  "key34": "4aXLoHwK7WR7rR7WvZqkUKKHmSBPBLUnxngvLVXTvV7HisaMVfDbTyEcweeMj5Aq5ngnoxU9cwaM9DWy4d7PBYtL",
  "key35": "Ujc31JMLex23cahwW4JhEUcDhi534TbRWKd1P6YcX32NjeDNyZZ3gWgm7piZ9GCByC633CCdSoY9TJXfNMqREZZ",
  "key36": "LE1hv86exA5mJpzFYk1sbAhWSmGNMgvesxRiDeSubCVQek2e2Gz7goFzizuVcirrtYanhejFjLuL3Emp8PD1iBw",
  "key37": "WMZuMqc8o1GxKb1bASr7Tr2GyXyMo9ibR6iCJtNq6GAvA7V8Yg9GgXA3LMB6JswBWtHADUcUAHJ9BRr2q23bMP2",
  "key38": "3jKnnk6AwDnjuTqMbjL6NpSTR8fYuKR7VdN7hy9FNDiVgdRZdsp93Vgn94ijVTqH5Y7rwnLuY9kFJCDFfEz4xt4r"
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
