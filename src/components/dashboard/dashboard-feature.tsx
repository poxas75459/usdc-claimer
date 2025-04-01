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
    "22YBQjUka4h8C5yZZ2DUBgnnbrdWvUXx7VFQy5nGMWijPYh5q8gAktTXarAYJcQZPzidJJMkwPYJqCTAzopfEHqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qze8bkr559zzG2opTERQqsjFuc8jMnLGvbdcaGBdGuuAvuCXMo8tTHCnV3KM9KRKYTqSXapShnWytzTLHbcTZkq",
  "key1": "28mFkBQ1XTvj84vW9138kcLeRNNvoEsjHXn9DVQGk6drjQvNJbkpxtkJcKmrNnpTaZcgzLwN8BFgc2pAQ2knf4FV",
  "key2": "4AaAXYzYh3Wt6vdai79VNvJ89tVYktxsFnuxTbSvvCnvfDBD9BsYEn6bPrY3bNyQfvhrUugfkYLGm9kMo16WuVCh",
  "key3": "3FY8CwkPyMy52PbzCZZjxohk7TFgcbYxzPGYnnAcweSKRBus6AqUGiZMzaBBexzN17YFFmbQP1rwfcLzrSZRhhhu",
  "key4": "kCTqRqyuLpjFPX5iHG7hs8sc5yfH7ZxawNWVzNGMDs9NEo6njxCiGBK3gSTwrhkkvBeekiEKXXTtAqRcvJNcQ2W",
  "key5": "4FAAfR4oShfhUkZKHAaeVU4jkk4sVuMGHZF9db9kx4VsGUNUbJqbcJGRPNui2UMr11R6YUpJLpJXgCxyVgZzSpxL",
  "key6": "jtvTsrp9BDLA8kCBteXS4X38vKmf8Bj3tJJd7isnme2Waghsfxf9VL9rYyS5odp9qEMRY4jJNrEP8tXzDjUvmHk",
  "key7": "5f6wFnEmBRNiTGEv12trg4nZCEfNs1f7ijYJHTj5oqwTsLgjyxXPqHhsirojT9t3LCFJ4m4pkdvHDQzyumVbYRRz",
  "key8": "4gzRc5TJsoAA3oBudSo6p7MH4rkrR4DNeNSMovzCeaqeCUueV7xWG8p3B9PsF8SJtJRR4x9SEHXh8wWc4RpJCVyG",
  "key9": "GZiBLSaAFWVW94Bu4Wtax8jc77few9PvzKsqiw4PCgYxvcABK5KJE7Cc82pgJw9wSAkWap4Pcoc1oFUL5SiYtXY",
  "key10": "3EprMzCmG1ogLXCMYpWmz3eQBGXjpPBVQH962oBpaHHme4iubKHkjG9tzbCBNNBEPt56N1YEcvwDHFAtBFQQ5gxR",
  "key11": "4ERy89RvD43uxAWwrkMscvn8UCZTcFKCsr6EVndZx6AnrkV2xE6iZpP8AkPg7Wc66Lk32qhiSf6VFvn7di9WcsB1",
  "key12": "63DPpRV51zH4QzQKcGEEf7m6YQ7ZAFuF7oW6vKg1pmaZnciXeKFxY5dxC8EBKRH3WRmNqwvqh2XjQ4iG4V5KTS4D",
  "key13": "4ApG8JAU4FqeAsHF3w755Yir6YLKQTTnq3ALaFWbVn1v8zA1yU3KLNtACAqNhWwEp1RPdsHM5YmQaer73LUpSyy8",
  "key14": "BVSn64eXr2EToTEVbjSPicCgy9HJ2h8YBdgbpEvx4qYyDLfQgYMtGnhgoKtfR3DGQ1jrt7MmvH5X9ibrfPnU8JF",
  "key15": "4btdEf2eYaUzng4exAtSbLk1XbNJvkB8om5AjiJ4CvsLob9RRc5QdmaaU8dt8T8ehDgSycjdACDiuKfgYw7X5fSs",
  "key16": "2FfDPoSsnWTseRYDumBfbYrPxmQzbwK3t1ChjxvLMsJ77m897Ng4Jo2zQY4kJ5MgaucgN3czXURskTAebXLfqmtr",
  "key17": "5cCSPL4EXVXtUh3J9U25H8twYzQWjmNDaHFLv6S5LBvbdAGu2kGyBicWXwHbirjYpg3vmcEQDm3sYCVcV77EEFnT",
  "key18": "316ZToNcp4ZXgrCqjdhYnPo2NUsWnbgRg2fHfpRVwsPmv9iyKSBa68ViYbt3nsNvua6dfVByycXuQRDhL6gCVFet",
  "key19": "5A1Nh4xgoXDdwkj9jHvzPWFvFD77eGTHN5kvnuuwm5UeHy6iLXhHfX1iMCw6RMDqCzWH3gPVRawUo8qs7XSaCXG6",
  "key20": "5jPsd8EFfhs3r9pmy2Nj3Fpe5Fr8iKEZkwejXSYhTFDJ7HWE5PG4TKzFUXgLQdzADLJXorHWNBgRqHKjPA9M9MPd",
  "key21": "5AyA2k7oyiDkVVuAJiY2h27hHFUvbCLR52Zh4ehTgjZEMS9cPexiD9AbXCrTuHyFHyxHXMqwGLtKbDsqYawDXzfJ",
  "key22": "3hJKuDFbyu6BZz9R3vGAZHVNM2Cw5jcEugD6SP1tagPsevcHBdxMXdgesw2qFfCQ7cNuJyfAvaxR8uYVe1UKJsUL",
  "key23": "61i5ZEQGsFvdBs2DwPNWkJNx9CDcY8Z2YnKvPA8gb1r2i8Xi1Xf5R4XyKV4KmPBpgvJs9zVunB91EresqdjLNaqm",
  "key24": "2dtAyRRvTtXWJ5qHtR26TAq1ywDQGhG9Ae4yvtB4EvN5gMMmMMNnZgehswuAjSykhkuMFNdjRSJthfD5UKNhZ3Y6",
  "key25": "2k8uC8qDvtCYrT2HYdWsE8pEAYiugEZiofNaXcgL4mQQqMBnYyvKfyVRYjyvAWMQjpVn8RrLsGALuTXRHqwwfk4Q",
  "key26": "25SVmesJcXhBvHASea9EpsDA6KfY8skyKuqApFd6kas45gLYpRS1hmFe8ZqtVFTgivhtWLHuU7gPSNdhBKj54CPZ",
  "key27": "NCe2kdQVtdWc1cikwGjjiZx1KgVRSsJL8zw5KXT9dBjuhBJr9tPhVae7wjVZPxf5773Y5eN44BhuskFSoeLyQk6",
  "key28": "22acQgRbEYtfaDQTUAtz1VvpPw2qmEKMmRpiqXoE2ekvkFvjWD5DJYh3PSRuorinUFYo8jcTEVDWWyCdrs94RMqi"
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
