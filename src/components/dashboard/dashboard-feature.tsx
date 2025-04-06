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
    "321ws6LBKbt2JwmtBkd9sbxbGWyoBY4JfxiBym54GmxP4GpqPaW6zDyJ8SfgDeNudvdv4wy9P6MK2BFxS7swEnka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W9sXyxAd3zP55qGZhPFLSZ85yjhNSkqbGmeBMtNr4TxXyz2MTY11Vo68bzoS9jYYPMVvKTK4kUNTeLmZtDKutfg",
  "key1": "3B5zZYsW9QaA3NLfUnpZ5E77pRgFACvnAAPWoBGUsRgDjrT2GBMaYM2ZUaySwvEVFFPJkjNCgUjtkiqriYjsDrir",
  "key2": "2T34VVTadwsV8BaSPKfiwZ6UJZFTgkDLs5mvf6Zztokc7rcCXpQSk5SvkVwyzryNt8kPea1zEwb4TryQM6j8SqDk",
  "key3": "3BvgqAfiAW8UAYuL5Ccbf28cmQNqDaxqkq1VK3HFCcv1Z4Lzr7LQExfDouu6ELxPPTYNPT9D3gMgguAyaah96B8i",
  "key4": "3YdSRaYnM8z4TBbpMwHVvxWVCwuTXpE7WF8PfpAkjd6FG7r8wHeKGzG3EBG68fCiAkB99fd1YLXr4fLMZY1e2Vp1",
  "key5": "62nUFn74RdghD7rQAX1zdR8B9o5U7rYB8sXXBrB2dmZCaxYYLVDY8JYHvjandcHaVQXqVKzf4QYQQt7kcXyDJ8zc",
  "key6": "F1xW2Lvj5SaNHZU144CXsJgPEES5hkRJHnfoBuSJuBNUKqFgJxXYbsa51gvuh2DEUVaeoKYyNCJPEDitxeK49Go",
  "key7": "36T9HX5dWoK9g5He96zxNfF5ujkUos3AWE64Wk7z3Fxp3PumbtrFHKAjEftQFDvRK8gbSV98EtUnDbGDuWB6WQBM",
  "key8": "4ADrwWiNVyUaTS4uYAFaUMTKDWoo6i3XM7oEzwCrNuwg34NNasxSg1u13yb5Kc6ZMxjH4fWcHky3zrUbwuVGgjH8",
  "key9": "5wShxbiw5MK2xPoYNkkbqtGVrGwSz3pDbatjJKxeCZi52CAWZZzbLa4GDvVoS5TVfHK2Whdb4EV2fNMCULmBDb3",
  "key10": "ZZVikcVucPNeAHaTMyC7hYxgrDtEZUHcYzZf7dS7D6YdMZX5uXTXcj2tf2wV8ezkKabbeKejhB7CL4XyZb9Bdsf",
  "key11": "PpSvNayyKd47jNNfNRFGGQtXsVg9dqRpFXpaLqEQua9nBzxKw9ueaNv9ajfZd2vis1xKNoAT2tncGSZ8wgGnpQt",
  "key12": "4FZ7JpbMaUHnaMzw9g5HkzpFQxfjDo5YdvH8ovuDmiJvV51t1DoULwBcKdZoLcfwa95EBPDVXnPPyx7jVuoKzDce",
  "key13": "PdLtqRCMCV2HjM5hJXiS4saxf58uCJhVmnh35ja1n5fdUYD8gSwqXDDDFRcKmrGcWtSvPHL8cWc5ECE6Cs64uJ5",
  "key14": "52hZiB9uv4mBDfASyjitRHTYxL4zZ27VDZY1UbhYCp6obT4XMKaazaHFcoEJ5fpMuhoRtuL2XgPKvVcbBBPZU26T",
  "key15": "3CySwZnAWwpXetThSdXu5vCcpVpdWEVK5Zp6RfiwysMBLoNiGsQLNBsSVEdweHz5QXs4TBEUCAmHRm45jDVFTEK1",
  "key16": "3x28DcoLu8cayuDd9CGYVDuPQumBPNBPyqvvnRXBUEiAWagMCw7ShZuguUmwK4zpvNp1xWzkJtAroLWrEu5TcGVc",
  "key17": "3oYEEr4xdU66c5oWynqi2VjFWKX8HQy25kqRcxVPpFUsuryHE512EoLqhZTQWWC4PENuWUY3kGcCEgxCWvDXesXY",
  "key18": "3zDGwyVNNyqqKy1a9gtmcAvpQdXb2XwpfnL3rQ6o91rM6qZMC72CnU5WiNysasoCkgJYNWsHYeYJSJzysQEKRqK6",
  "key19": "3wwbCNULDyKoVqRZgrZgxqkzztLLLB5dhH9Tx3oHPJxkpj4EuypbnNRcgwRqZQLGt9UUqvVNgtRhRmGsxyZy2vLB",
  "key20": "3SKCkkNNdQYxxXioUje2217T28Ri5rM5yLkPzPm1yFHE76bye2L75DKdeegn3xfSFhbCG8esSkaiF66hZuwKSUMZ",
  "key21": "z4KaYpGPSB4RTqErvfxUe1NxPxtpt57MU3cJ9HspWkaCvYvWRowTpMBgAzunWLFVtiCc7Thb5Rfu4Hv2TwwT3HK",
  "key22": "5RLdxjcNNkHJkUETqZPccjmLsZiDbi54T1cSJHJo7HKSJZaphKN3zKifXfqMP9QEFbFZkFKENvuKRTpWhuGEYLjz",
  "key23": "61VJBC8RZg6VVbnPssUgrb4EgcnUfYYC4AGtchbdv9ACpxe54x55yeEhbh4bULP2opEJCNNiSx5Qt15sNEmUcpYk",
  "key24": "3Ua74sWPiM2yVRinHgkVog2wksHWj5rYjZ2sbmbh2cJcThgsrKfD8Uf4YAq8ikaxQbosZtkqw7F6mqugL8YYR5k3",
  "key25": "2xfJfo2K43jLac2t45MZWxtM16TAdyMugT3oK75tdVKiuroqd4tAzYvqoa7SAvzPuLrepLKHtuzyegNukEyoyCK1",
  "key26": "4J6mR4Hb6Zwuqrf9tpYxtXc1tCzz2w3UyaVQemAhuEMMGqfkLYTVjmnmgeFfjy7WBtdDf1Z4CNgBFYtPw8PXZ3fU",
  "key27": "45tqku1QamfaY6Uy9NMCiGrifPJPEzgGmeC3FVn7dfaodgXC26NYnhsuMQubZvfDn28NYqHtRxLYzvZcwEdpPeHT",
  "key28": "28ZDjm9FqfjNGGmGqvgGbcR8wAssmTi3eco24boR1GiqHFYfHVZRwsRCgY3y7TMGtPkZsEowf85ZZNbDEJ6xbrH4",
  "key29": "2n5PQBHuufB6xWjBExFYoR4jiQ37iSxJUiAo8modgbaWiYzNv7haFDZwWrFK4UVqxbozKj7UfyJ2y18o3krth8zo",
  "key30": "4ivS7ChStmSNQ4q323ZncG4Ps42DTn3HiUxyZaNwmqtL9JB53M1USwd8GsMUSBvJmjqriRdmZ5GzfTMx7xDKtZGM",
  "key31": "2ee6bCnowArpR5WogS8TgGYhN3cqsvmzXhvcm4GMeh5tNT3Tiu6nKQ4U9kdzWE3j2QrB3Araa8p3UJSmtN2YgAeM",
  "key32": "4iBwBkoVrA1S2qvZjCSt4xK2eyudaKuE4TDx7FxwP2zygabSj5CqXmifWyK7hcmKYB3SGoy1MjwCZJHYibkso8xL",
  "key33": "4NqsavEJUDNr35L5PqMeUZU4MTFaXXX1KBMHxhswgjxyAtQawGF29Sgy7jPhzzemaMbteZMpBxF7YLxtYS9KkuWM",
  "key34": "5C99VhGc1uHeavyBxGz3EUCPxcWaok8xs9JPU1fnxZuDK3QgSP3Zpza1hTq5NgxvLDzt3W9mPFToZrSfy59EWSXi",
  "key35": "3L91uhsY5KKFkrFcZn9w5MG5swAVVYHSQkBzb3etJNC8po3B5AUza1xyKwt6czWd3RmjojSPLpd4r836xrniKRtV",
  "key36": "5ramAcfYz52mV4mSYkxAV2wxVh1VdGBkFPnNyqf87wbUjiAyguwVR5L1pPJTE5AmHTDG66an9YKRtZwBfjwvBEo3",
  "key37": "3GQmxRpQFXRyiDcmabQrkNvHrAqZEzqMVcDuVK3iBAAh9g1mBKn6ybtM9TGxmXgNYE8QfwrfAEh6DkhgHdBin51y",
  "key38": "7Gb1wQjDZAeYqwJ7MTKSqeNTdtqVXbM5NQYwMP4BEHhL8N27hD5jvaJAdGoE1UPZ774eEY2p98RHz3aSAMrDaae",
  "key39": "65gWnxGGALeoXDjc38Y9deFAmqrQ3cTn48d7mRCPnYxgTi6G8V3ZKars1FHdMNSfwJ97huBneoeLQUpR5T3Pj9iE",
  "key40": "4ExCMVrd6ktre4n3sNLEtUzPZ5YbEuK2uhpgJV1qr4KkctcZcdJi5RDWHq1u4wiMiz6oxZfKVmJvoq1RL2xLQhbL",
  "key41": "45X69Bm5ArWxWrmi9JANtLUU7QPeZbapTUdLLkkxTApsQ7RFCxvXXLsFCfiwNhWSpLEp9dMioNJR6FKAkV6tEmZu",
  "key42": "5qyZX9aT3YhyLJMRzQ32oCSmVhdmUbe6PXPEmh2MJfFDFDcT4sSVv2jxHAbiKBPZQ42M9f7doDhkZiMbGX1x4w29",
  "key43": "22iBHcnZreCi2wpPWmbCiMgBUcXU1xQ8uGDdaLNGwtJi8j73L1Tim3vfUCkxQDvmZnfvTLXPV5PXowXfMSJQ1BHf",
  "key44": "2uQEYDAGnLVusyeuU5nhdVzGVmLaCfQ9Dp94J5pEZXBx27rGjjcQbeEmuSvEzidXQsLQnMkPuv1tDicPyUFbWGsJ",
  "key45": "3JyqkeTjguqGuRKwGPMQLoYV1wqWqzq54nhwgmiJKyHexz2ckMHppk8MqYPC5BC4mhPzf3PuMi3AJgBitzR6Twrj",
  "key46": "2BdbSgzY6RZdJYuFPge2urVzQiZdXwbhqoZTrsLexPmyoAUAvUUhbZWfrSvv5DdGAvSVSDw9gc85Nzds19Atv3Ug",
  "key47": "Sz7KnqnWBsSBNnajZ32hVauLK6BuZLi1nTDH6Xt6zCf4jyYBkAWPhzckonwi27bD2gh3KjAT97x4vqcd7mrKYaQ"
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
