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
    "3PiLPJyPKmQaF1FyCKotYqjZ4Hojy57FAf3tGcYoU8DZ97FR9WtEzRM3KjFMd5mFSo42pFxHRziLC1GLLKspPiFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7P178MuoZ6Fh1GfuV9Rw3H8TCGPJpr5333xpoPcTwqpEKM2r5wv1nRvjBVKiVvAVgXa3YKhNKQQsBhzLBLTNpxe",
  "key1": "4mqvcKXmucEHWqy1aa1rH1CeGX4kQdYvNi6kvYj4Bj1hgpnM5EvM7jWHLLp5BnHwVMVvZNuH3vha9jz9BpSUiy4o",
  "key2": "3Fn8qZzfcZzvxj2ePfmTspJKPANYYtQmk3wKwWidYrUndCH47VnjPC5VJjgkiXX43C5ZgTbC14q6Lypzr7vS8cV",
  "key3": "3bZQKJ2Vfrqxdp7c7ambaizDy2zWXKKwgqQDD7TWGspTbiiA7i6hqwrKLMe1P7VVwG2aJ5tCMCHVjaVxCJM5Tf4w",
  "key4": "3Qx5dddQt29pf7Fj9SHFUeHYhYdfQizWaEE4svqN4G8ENp8FDUFwqt2Cugehbvvfm2oCP3XqpGiW9qvmcYxjQEoG",
  "key5": "rEvBY9yFz3Fa5duJbKThrJvsHrcjHDiAUtQHBW8tuSByviekpPWoeaoofYKG5RxsTXXJ5srfTrxJETp7huhYSTT",
  "key6": "FRmgDJ8jmAUK3jdxyGNLp5GVLvcK93kSph4L3Cyx6Eahr8HjsV3pEm9xHL5gEifQVayc868BFvDx8yUnSBpkVFP",
  "key7": "kdLfuwRDbDMdRdLWz4BWGcKkVXJhzypVLndnxzvqHC6goSeuLzq8bGDW8urLpBxUhsuU62wq1Yosdqd369zyprs",
  "key8": "42sgXbW26D999oJj3hPLJULxDrWTisjVzCJ4qMxRv7ywg7aHWxXi2kKokC1LHMsyv1q3T7LH3X3haLDrNTZHqmXr",
  "key9": "Yjd5FS74hnrsrDN93hpNKsn7iPed98Gp1PuyoJGb11zC8xdprJmVoebMAmuy3WWysBR7QPvksymqzxVaJsjsrQD",
  "key10": "3zcD5LY3UPoRN8MhE98YmGZcm33opQh1tfGQcFUVEMtKkXLHgPVa3HSqkPbZowAjKjhSeDxWbHFoSBY2UeaYpnwa",
  "key11": "25CY8hHUg9UNTZQgkDZSjEpdwxqx4pfosVH5Vv3jHSHtdXtnm9DB1zhqXFZVxhHUNKgok5knDkeL6VTpTXYefiM9",
  "key12": "5XuqLQSzT18ymT4MbYmtvzu12gkSAj6u9syT2Ss1C542nDE2hGnru6GEN739qNgYQUxDLmeeCBHau4uKSman5WD4",
  "key13": "3NcRfyFj7Evb2xMjtji1w8r3uE6JkaXCePLp1x5nzih9BkCys4yPjsXeZcZpGAysc4JqDvanJyKfB5UbSBUuWyjf",
  "key14": "4Twc1oWkE7xwAcGLxbmXaqSz9ZZNYYzeEek3M2xXfLnjvLbXRZGZnTznMiWBsq4niygnWJe3xEZnVZLwaVxEFz3R",
  "key15": "2V59HWczQsxiu92YJpZMB3SBZmUoyvyRUGiqYJUF4s3bGRJdFah76XQa1pDdj6QVxUTGccc1Cr38jpTXZUwR33bq",
  "key16": "nEwybLPcsnsEG3NuJGS4hD3XA3KBBgxWiWPNkuvkKHvo6ud1FSnmss99W71dZFZdQ5co6ku5ydFY2CEuK9UFGK4",
  "key17": "7mocNTr8NorV6qxcuhWzCGsFWVtemiwXYzGqWRywx3m88VL9bhAie95H6tBS2LUgt4aTT39nUcdUTBMpq6jQAGK",
  "key18": "4fg5skGyL6NAJZNMWu8fKyD9D9Bpo8SfPSAKh9nPCJqSZnvVqgcAaEQGQ86Bg2y3braQ7yUKrKJs7LfhzdnLmSaG",
  "key19": "3VDnop34dC5H2FXFVRFoNuDwGcfEH2rMtJXMLV9W4XcabzvJXd1D2qQ4EwLgaXGtL5cSbXXc515LoXWXNUPkejJS",
  "key20": "Lh92UkWAat2nSKZvUMRu1F16cdwBFRfdAHV2WdiWa1TdZCGC1FDPpGmZKahWBG6jEavLoAv4Z7Q1VwRvpu3BkxN",
  "key21": "swJLAzedYa3T6XXVmB4rGMABdoKs48A7M4uF5BUZf6EZMdZFMPFco1gABkBQLfkzj9oDvXZNakLiwy2hN5AymS9",
  "key22": "3kktNLAxoY7Y71ZqUc7Pk48xG1otKvK8tYsS9vqyRQ25pughw68XSJrHsDSzUJZSXfc1Wm2jEHwrjFkhEQyDd3Me",
  "key23": "2WgTs1c5jFTbv8ps5TVHu2tAsUncbQNUkTv7VQf4Tw3EE4HFBLgZjcfCoWmpXgT81kQyuMt6ZCnALdMJrpXd4Cj5",
  "key24": "5ATRyg9d2UfJoS1WCjLHhN3EJahYBBWkNkVq4c3NREnHL9fUj762odq7CVZkd6Q4KgduKuGoNzhkMudjw9TwB3Vv",
  "key25": "2PDM4jFsgwwBRwt3TQkseFgN6mr5xwhjnoBqiu6Xjpb5K6ZZtmPQJa3igixg9nNgAsdLjupEfHBGNtKtWi4ead5e",
  "key26": "X1ZMpPccUUqcd15FVTkj4KV6UhZg7enmGAHpxeKSQhgFMZ2MLXCiDURSohJhZ1AwDXyFFUBvBEd9VHQnEcmzuME",
  "key27": "TvwJ6stuuQNBMP29wF9HgpxYcvnWTdrWTnGbkovBBfUTTiiQPbrpsaayciqYbjfdH1wQUP5rYVwrrf7f5qU2cdD",
  "key28": "3Qabhdc9RuSkUcD6f9Pg5kMBb4V4jdJ6ufRU3VmZEUeXHWrRyZHVLE4Y64DJZAKFFEvqrbEVQDqjhdBKe13ZGfrc",
  "key29": "62DEZA4TdTvGomLYaiPBnZKAENYSvA9rHAqg3gL7MbBut5beYNM3pJDQNhgRcgcXcaij9Be9C5s16c1XesbTwpfA",
  "key30": "XKeDDqn9pAawAoEgzxMeJqstQhk2w8CrzTTD3kybXzAHfFy2mNLR4dxEfJ4SnLqbXvEuNe22aW3K3wAnMCjF2jp",
  "key31": "3XNSNbcTQrBnGgWNvtFgdic1RVezs4oJJ9WuZpieq5t7aGhFKNc6KUoUbxJcUG4KzyrYFDDyi77asLoBAny3CEfp",
  "key32": "3ibZA4eUy3g9TLg3kBzmuSrFjnScauFh7zm8dP52j3RFcGF6W9RCvnyRgDc9GtbYtQdhEBmkprPXKrqC2wKxQMfv",
  "key33": "5bJjLudCqvXSiKL36MSpLuQ1gWoHq6qhVgQnAuVoan7t4Ry6Etjz3aHgweg9uFMeupgBmSazuRgZvnT2fFnzaHtb",
  "key34": "5EztAp4CkZqKfYnmsqdh2DQEs3WEvuptmDbY45CEKjUXgzD9ZF1cj9fY9FMdPNNQ5fr1vm5SKfuSpKMFc8TfGcw7",
  "key35": "QoFYLMxDFwXrwXcrZzPWGxFe6qprBjrd3uP9XPq65unAnamgCgMEbqMxp37P7qEf6ohCkHzZGbHSMM92QvsXus4"
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
