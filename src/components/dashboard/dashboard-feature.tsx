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
    "2bqG5aBX3Exm2Q6FLJ6BcNmSDs45sqz4dJzqiikS98BqhgJAwfFNtoqFRZ4XkKtcTEB22wfWmGDqiE86EwDRtEGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AZND7G2y2qvKdWbi4EXCUmUr9zYzGd7z9owYiRbLrT1CMc3nmrDfTVH8XcZceyW4rNx7hz4q22Ppcqqaun9vMLX",
  "key1": "4jp8wqst9sKk38mPnwcUMhe1TfviVPQofn9PjoGfhRhdfrQysQoikAJLbWUcLhunmhnfCzfNWQVDREso6ixu98oM",
  "key2": "rabnsZcYJsrq4tso4jdzMPKZpMsJdiU1x6qPgogtYfmCyipRnVSsK2NbdzFdQyWiR3xWwzTBoyEBouL67RBJ4Rd",
  "key3": "2tJqVHu8r5dWhceMZ4W8GdpGtc43LcqxHjKDeqRJ8yhzXdq8sPMAvbzXW6DBSzv6h5aNXLjNfC82HAxw7ZiZoXJL",
  "key4": "4rWTNU7TUQnhSgh7TUro3KoFiPME92vGq8W7DbVtArnLSNdoqZpSriFRp2MUY6EFHsCsXeVv2ZRkRi3EDCvvhK8f",
  "key5": "46EEpLLWocETbZiLxo9Af7BpYV2jzX5DverHtgUA1p697MB6S13F6zWncepmgaXsU1br66Lxavt5ai6q74eB47hf",
  "key6": "7vsbnJcbVBoSBeKPjqvw1u69iXrPBiWV9mwcrR8PvkwkRb2BfeDjSiZ9NDHVvkwXPxfT6xUau9EogPqnKW3MLRr",
  "key7": "63nYXmJKVoixyuXah3JA2j3MuF16YqkD4s1nkuTDMkx9rPuwkkpQLYXZ4rike2nWLjn6EZSRoXzEsBCN7XzZGNVA",
  "key8": "5nPaRD3LK7ULqfkHGQucwzzybhwEeuH5uUQ1mcFf6Z5skQWX2QV1Y31vUGUXDFK2A2ciL5GYSF5RMtiiEuZCJKRz",
  "key9": "3RuRnp5uNVXh1khHxdu73Fqf2cdq8sQa7W5cG1ZEvXYYYD6Mx8MfcdniwxBVcdiMMps7dMsFC8hr32sfqPZDqwbz",
  "key10": "3HvWYM9poSV3smMBT9w51PTF93y5gctz9yC9UsFG9DHSdBWpwNsArrHf1duuFJdjasYA2MKKDpj2daHuTrWcWXrM",
  "key11": "Lys81eXHhHecQ9Gt3cRP7LqMg5C3qRcFmh8yZ8XGJKoNUAQYrTcsjghn7wz9tXPpWrTMb7NUDMtoZEX7drrzkEQ",
  "key12": "KW7yYfJXWxG5hmYpNvsYTpLzj15Wt9Pqm3Kpt2oXLKPmxzo8R6EQMfZ8nBYHCSmXyR1KVcSfqUoNwdp91W6QxHd",
  "key13": "35nNXtuqTthDDKX5RA4JiwqGgbpXJdsGwpGQtmbigbTq312fxv97LbQbA3Ha2c3yMedJpYDYfK6T3j9U8a2xQEz7",
  "key14": "2yjeUiVAwvUhvoG63ZrDctC4ALXhZWEJczx9dgyrVRaumSQ3JZ6AYmy6fPioWCgb4fSBvqrz4M9FcScvMtjJYar4",
  "key15": "4vsWjSPKLnyS5wFfZWHToujJgcicdPMwZW2uRqiBN1iXbuEX4vHWZnpN5z5S7zEAVff63nXGWZyjM2yugvkPQjPQ",
  "key16": "2E7cPodPMdvGPMxhGH67CZt7ZpxAou2BjKNJDoxiw1Mv9wNaEfkcZ7vwy8xzX97Fg2jVkqoaFwvZ8z8wtvf82eQP",
  "key17": "2gUxdD9YCgzQqocSn9sghDJyPfYMjx7Ss1eeQHXzHBjocCAhaMzQbbxwZL3C96dPvaX116TXnHCxZWW8fzyP4gH2",
  "key18": "3SEY1cYWYdrbNpot5PiC4VFZcRzoNoYiB9HoPwLMyYYizsmtaRa6tyP6A8mzDsf8fRxbYQDRbE8Zg5uHNnRkSb3S",
  "key19": "43L1Mk6ZeK88ucG8E7jhcMD19GSpyQmwCyGqJgyXWna31wPBT1bA59meeR12xx2ViW7uzUWPF5QpvqsSG2trsVYG",
  "key20": "5zdeLFZkqTXLJ9wCqVU3nYYYjFtGUdaLc36VRUKJcF7huVfvJw6KZ2DyHCoqoHUZi8CqtoVYDd4oq3WXfJBN1ykH",
  "key21": "AoYh9Jy5hrG2jc4syDWVM4iaMjd8ptKFtA1kcBHzxkzoCkrCUCXoU8Hg7urq5a6oMZrk1mh2gyMddbf4ue46o8m",
  "key22": "tzxFSx7fxX2J4mEkSa5xhPzKZ3qBLTtQYJutnzgZ3FAciss2ubJT81okYao4rvUrzqAcnDDVNK5qM2UgHiXnJaF",
  "key23": "484tMTYhsDrUytHBxn4qb2XLsGcKMvwsQNkiSSCsfk8vRKN7DCkCxHSJZsbXAk15wSKbhj9U7mVfE36m4r7Tg9E4",
  "key24": "2TH4pqnENKen2g9Mes5tmLYFKp3C8SYmiXtqqXipk9sDWygoZ2ZAHZgvhHWRbEu1T3Eum9pRMSgYiTxzwkRMFrQ8",
  "key25": "3DMq7U6GZ1LTGWshkzuwrhXNxhwTLYHL9fdqZXiUfBDWnSxjaUyXEqZiapZkVpCxsqcaV459CbxaUHtm54VmGPjx",
  "key26": "2GXryvH2Q2kQ9jyYAYqqSYcxU2DZwANyaAXerCNpcuZadx1z1QmpVfaaNVg3ZqgZyqn3taK4vFjx9BfSt5pmGwHw",
  "key27": "4zdMMc9D29Sowpg1eZMwcY6jXvmhJsXCTQXM55BWE1ALZDwTb2VCFJnaBf4Mxo66Ga9aqUNKdnnRXTKc7zbVW711",
  "key28": "5KUwSMT2T59YJw6YrfxtjGbdzN6HH9V9Ymsi7DWrUHkZsAYgd6dauwr5vvAva1pVYJhPTG9UVnuTfLpK3kg1A5yp",
  "key29": "4yBW8zJfg7rKhXUq3L24RWkeSbxkEQE7dxjJHTRUyrbtw6rZxUfmMRcUuWFFsico2byHUR2Ahffg61yvL6jYeTfw",
  "key30": "5N9PFsfA9uo362L2KKWKCCNVmchn4AqNC3AdHtLKuHtx8nAwSGJB3pEy1FiaPNa1hevPvp7dpuueHoALvPWayjF6",
  "key31": "4sf1hwgBivyBBSknCfe52vTJ6aT8zHDXxKBWUzkU36qPeH6a3YwBjiVfZtcWdsKugjb5z3YvXspCTsys2EqDWJi5",
  "key32": "5fPiYxemig57No8j2xBv37Snird6SfxDjJQ7CeEEAb8Zmhg3fo9cdC5x4Zs6ZFZ5pXX69yq1r3TC4BEppe1BevHu",
  "key33": "5yXUWzFFpQ9rHso5PeQgBMRRZ8CkCP6xEcC9Y7Hy3fKhj8xWQRvdMU5wM5q71LPU1Q9yqtCoe2Xhwid63SfFqgCZ",
  "key34": "2U2SAKzYnRrMCpK6j9mauAPPybDMBZYeS5nzErkKHhwR8shGtrqQ8ixNRCwXzhAEuJs3oBan3czHx1ub2UafRLN7",
  "key35": "2DenSE7mH3jwMaJcTnKWWWi9Jk84fChpMZ4L358F8HMDdEWWBEg1RKGzperZhG3hBW37BbndFBWQGoJMu4WpvgPN"
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
