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
    "4tkRrkCcEiaNdeWJHRMzpXu2jSpeDqYQ7vJYRqjwNg86jWrzgg5cNnj6JXUUaWL1N3AKUCH1rxHsvqWiAUsMJwu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PjdvksBdgmQaK6SypE6DA8CUY72PHcNBeGt8HfvtjrDtoeQsi95gKHNRi6SrUVhaamwkKC3fZCdcNm7rpH8kfu9",
  "key1": "iKSA3jXgBGEEz8fZqaGwiDCv5TiopjBpRYQ5VtFtgcEGbR3CzkNygBnLh91dqwk36FzCDpwhXXfioFALoXXZBHa",
  "key2": "4QdDZun1aNpARDTXFDSEuqR2euH1tt27cUbfvQChFqXyAx3goSv6463eiYpZcyN8dcmvYbSqevxNBdd6xuVxBKV2",
  "key3": "3mgCq1pvaJ3iYBcsKvHRotcRZaFmFuunFLRY1wVivmYdDUmrA4ngtP1okfY63otEYzDRzcqqj8XWR7tyunZGXnYw",
  "key4": "hoZQnoNEDziUpiKX3o4dzYtcdgYpboxosDitaSpk3sfQhT3hty1P9acau2suZ66Aghvq533pSvHk8WsTd5zmScR",
  "key5": "aELDQGiPyPmLwbkXd6kNEg1fxApZ9ZrdphbUYdEjWUMYcFLt3MJTXxD8wkDR548Nwi77jnGkm1jsQaiSfJbmr86",
  "key6": "2oj1vPz1ZnJpJLi6K6oBJm9SqFJmbq3bnTim4PHrRQN27nGqADfbJW4QnaXZy3tWmoeqXp1T7JqmQ1Z1mbbtT7RX",
  "key7": "2Tbi8UBDMg3qU4cuLfZvrUbu2tzQbH1Ga8g1s2xsi7x4yevYkik7qW1uN3dRb2QuyG89z2Tkzzqa9cidbUvDV1NU",
  "key8": "3qAY213zRtwX9LFCJ4HL6MT2iJAwHJqkT3RmsaYAzdhkHEUJLa4KMT3cwFP3rbvzqCejWB59D7LSWk2MUDBAooek",
  "key9": "5DpqGNuNsSQC2WUJWkhygY5LyHUaFV7bC7QzsuABHwBW8a3hAKX128FX6cQ3fghmYVi2gtp3vGkfCHadGUuKh22r",
  "key10": "51RnuqNNYZ3FaD8TNRHDGafzwdZgJmpX7MFwNmtr87r8q3KBxqV8gqMQRhSgpJdRQhR64e8xa1SKFnfmifJqMmrn",
  "key11": "43rpzyMvUJdWmU23xFsqcqS63aicmAdbiftx6fFLL52HGLoh4hoPGwUaMojeuM9LUZcU2E9oozdSjgz4xkV8Y1aZ",
  "key12": "5eiVF6VcBjVrYHSpDJ16siBwB8UcDPuZH3BWHmRSei6zKeAzJ5yxPcCmsYRVs6UkMEGJiEaxBVYnS5uYkpbU8qGU",
  "key13": "63jZ8z4sGPXQ194pLrjmmtNihhbMQZoYDQxERonPK514HEHS31UNVnWt9x2NSPgzZT5LqbFEo5DHgivrrw43jV6D",
  "key14": "4Z68wVs8mouhV4nCu6MhkHLbfSoTaz1daKEaXhBXvjasAwtApVUriDAuMGT13WCDseRrCvjFSGyaPSGdrgSSagSX",
  "key15": "2fN1rZpxmwbBzF19qqvyZajK5y8VAp98ZHXubNGzMgDjGRS4Bxdh2ppJa2G3KGeJVmTHhBrKfJHE6HABkQftzuRh",
  "key16": "2q1KwrQBUiCWmVVst4TW2DmgsAg3KjLb2cjYkHZR5gzT2sybuonhjyqjqtAfjhqxkCHVUb75YvATFoG6KRHubbJH",
  "key17": "4BEBqUWA2WZFLonaA1LeQkxJ4G1nUHvkZHZW4P8yknG4SDA5p46nDNStenZLn9i2AH2XJXCGBymwvgqNBUsnGHQJ",
  "key18": "3wFqy9rj5217hYEeGsyTmDWqwCQUccMroJDomVrD6futMUgzYqYTz3Lw13sa6xmTiyDq3iVAo3AcJuhjMA6Sa4vm",
  "key19": "2k7HsQ2apWavxUQmfZhDxEo1zKpyPog3KnpmqtjUzUVycm6xrHo8ZDoDMEFSr7tNSgtGxFg69vZJ5VJD3TBdDPkA",
  "key20": "3ZD1KPRZKU3Tv5fhq8mUu4GeyCQ8qd8V2R3zvY3AcznuziGWu4iDapi3zvhrxS5CCZPWpJrQuCuUAprCPnSyxKQh",
  "key21": "4YVyWZjxzZfY73c1S55BjS6uASvzSST98nFaFR9fap46L5QYYQDcxdbx6qF8neK3LpXZ6m3cHdfjZwJfH2KgNgDU",
  "key22": "5PGR4hzXnceLRuQvNeoPqFxeNHSwqLBVycjgghQXYveV3ZuS6E5WCTHr6v3j4CQy2SdtFw1FmMae7xjqoVu5fpdX",
  "key23": "4kLkaLgp6kMabhRYhsto1BHc8XVNaXHe2Q7McY3BpioUFdaKhyPTcKMA6yKaToujA5tkCrgkJ1hC7FNt85w8vYq3",
  "key24": "23QLPapQMeDX7SBnEsBEZjJTPsmNTh3DFwmX8dYHtX89jMXNLarMJAi4JcE2o3EYB58hkhQwau99LzgNGqiAjfDD",
  "key25": "5Z1UKReqXVNi8Vhif8obN5uMLii9BsusYJ5Tdh2tJxanYiL5wLKFVqtAxZ4LjWdkmLL82dpqGpH7uxhUZpDeMrUG",
  "key26": "3fKvdGqJNCBgrug1qxT4QV3KtSfY1ULVGuW7sMJLQrQWeiCxfw8FxSLn5rK4rPijjLxcL1msDR6Gf6yBK2PBut86",
  "key27": "5CDJdU64sJAjYcPmrvATsxhrhZtYNDhPDyD6k5BzaLtFjthSTRSByxTEW9XoAayZBhZk8KoGCXJ7hPxpwn5quxwQ",
  "key28": "3z7YtBwg7K1ny4yRyFeTAAAqctot2FJqicXVUCuagshgjL6HhVMDioE8fJYe4ckHqMZi6kDPZxQmSnUDVQTCaz5P"
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
