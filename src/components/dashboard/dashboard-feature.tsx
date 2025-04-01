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
    "2LNYywd7E2PH81JsMHBRXtiW84B2aDxi2nAjvBFNn9LFn2sTTLGdhUajp6yY36QekwB5xWjEFJUVrLrUCDdtB69G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57MW33ueF2rU1cEmZ5dpY4Vr562LaEDQWGVXwMarQgNaqrXjnxKGc3aBtHHrYMdvMqH67rwVEVNcyC5WRhDgjgBF",
  "key1": "4DexXunaLxpniWo57tWvkfov7FBoeSFDyxU1K5GSE7e9WY9DQqrSgKxLqf6SRZim5upxu5r8zrAmdqyHvbePMmke",
  "key2": "2Uyj8TGbD7jPTQizAjmuevVww559k8cXc4mRbyCNXkh5huy6m9sUuAQoEFAxzFQHaRJei8pYdyE4rBz5MgGpdVw8",
  "key3": "3jdhh12cspFRokXAWm5h7Z3qimhNs2PerPTLExFvcgMvo8gUEASWeiPdTU5RurA9kKCYxfcgRev1Xy3GuTZWjtrg",
  "key4": "3NnKca29kVHWnYRGnV5f5uSfNr3mCFND4PpeagZrdNeTqrghjQaboiQZX6fRF5gsJwSXRvAzmFamun2mjSmY4M9i",
  "key5": "3e8kS6vTwgGtx2SSP7YJ5aV1XRsgANQqFCdMqSWRtcKqhZsKjKpvpjJvVumBHDL8uy3CcA4AoNq8KMPuCnqhb3fk",
  "key6": "36zMfq2wnfek7ZykyNEYxTTCz1FvvFma8RPmmHc59bti2FPMrBh12cKcWSQBws7HSV6cheNteZ3tSJxWJNFJ5LaE",
  "key7": "5KxPWt9dRJAJKGYY8qncEAN3LMYGkqv6x6mvVvydC2w12Bi2AmpWePp1ezm6qE98a9QzMCsuJQqbCVT863WmZPKA",
  "key8": "mzMg5xdREN1vwxXKeg5S8d1FZ9SKiBFLC16J4bfKCvCjL9QG1DLxRczsJRmuwGBCTcDXvRYh4eC5mxwE3zbhKQK",
  "key9": "3WPcCF71DWct7Erxhss5kpNrAfg3J5n8GhxWpz6uyQMqjy72uaHnKY6ibf3Ga2xfFZ3oyF2nSUcZXGZuic3SydBk",
  "key10": "E4ZFpQw657PqSGiBv9WbWPyVGu4ygKAqGzhe4YBC4esqCmnEq3h1dkpGj7yoChXCX9XFHsHbM6YjvM8gn76Agpv",
  "key11": "2DXwBc2QAC98UvDA6dsnRxHvZe7JPosgqcnUuqzTUQEw8KS3GxHtxX9N9atTiF7SKmP7DJWRXZp9cnTVZ4Rk4SHs",
  "key12": "573a9DmWdTWYiNbUnRG3anwUcJpTQpQVuxfZAMWyY9noAWwz5KoZ5YFuSEd15nwGcxTGi8bWo6vxCkG6j4XDom8o",
  "key13": "4dA4ratZEjej5NyUuuA8KH3UQKQzEm2jA3hZYPLL8PrZDfXar8nTjn5HcyCiaHMYB7Qx15gW3oJ9GjX8WdMkkxSX",
  "key14": "3G13j8PfHWQRcKC3LHnS7WTZaVeXHyPojn4tBu47rhhrzobJHNKMEpyhTi61hx1noa8XSmFXE3z3v5GurfwyPk7R",
  "key15": "MNDbhG5JodwvsYhqdnwQjhYZSJyvVG9Zyj6dGwJMapJPfJtmihHMsFoktCBV4xX228DvbWeadctVa39zvr83krm",
  "key16": "39LBWdcajBrYZXRh6r2dUYQzSYHoCNWXNDLQoxZd4TiqiEScnMus4YV3FfhWEpYyN8jhyar1qSQC1RCgHvVEyunz",
  "key17": "5ToWQrU4jcu37vBhDaefTxU6U4EVYwoPWiztH9p1EHS5Dd1QLP2b8aufm8qCTZNW5CHe5tXb7YmBWycN8jtbFpv9",
  "key18": "56bHs9XAMhXQ6nvrv8RrSSf95YTqsijyoiQViv6wwUyTyn9JVwVHNbEHpiJ9M5JAaJTFaGSnbKwXPWXu7PgnJC89",
  "key19": "3tu8GM9pqXqyEPYVGxzAb4dvcg2Rmdvv54Z5KMBJGZDunu2DYmgZbdZFtThrGcWQbr2t4QWiYD9mm3JF8KCx8fb",
  "key20": "4y4mxQZPvmLhvEEY8EH7EeotcB7LfCVvckmqzn1RppDRG2gKsyhdURMMD23BbA9t8KCSxPPiHeomZrXda1cCkuzK",
  "key21": "mreqjxY7YLQEaUz6G1NbTcTiGBZLvacQZwKrZfwiScydwTLPV6LEGvpqrYuJa64oVUTtZcBW9PFXdV3rfvnUfQm",
  "key22": "5wmphfeFErmiHUVU4t8HY3pAGu2xgsz9nh4aLHMiVDMfzwx9ZDeoQCe5vMy4Razs99DWzj5opNCVTYF9X4ubCwjH",
  "key23": "4PDrXxqJg6pVwYm8Gc5Bnf5D84GZTWF12LEWcjpWXEmfCw66bAwVt4GLwmcfccUHHCBN6uw4PWJCA8h3y3e2McV9",
  "key24": "5YvDZsutFaFDWEX2gxoiSSidkAiJ3hkgHchv1UEoEX8BXSjLYQAmU57ve43vgMUN1T4eSf5rqWhLmgkTxNnnAL6j",
  "key25": "65qFUKmt5eEe5zQnLqh1mh8uvnAKmsw7hNXxcXipoNvNso9gCtCaHeURCSjfaaYAvkjT7ZEtVq7dTTatMy6XkEJf",
  "key26": "5E38SMnpgdzLt4p7VsAGKR5p4Hp4wimS1ti1xts7sLdPJJUsTdGBo6LBiMkHKV8w7xUWEe6y5MbngMN5gtsZGLUj",
  "key27": "5YannZEX2944UXu7fd6dJR9jthodC2PLZuAjDXHbz4SWFi6DxdZPHoQMHUffSvFzJovYSS4prwzMhuzUudYjncLZ",
  "key28": "3iBPnQdF9X6UgMXHbw7HC5DMmX6FyzL3Ubh1XFLNQRgNE76Yu3uxPf7554HLq8BGT1UUzNpBNmXXQNkYYAtihTip",
  "key29": "4jYyCfuGuVW4yhEEFpD8C8c9VKioRMERr7eRu3C2xD5ToNDAVXThtzMgGHzHe3QVjsDfeWk2CUDV3jM4kwjWFgBm",
  "key30": "CYPWLofbB481a7C5tpVkHkfuaFdo7BZ5E1gzKuTYBx2huMrByartJC2TRng5ZGd2AYoYEjc28T6CJrqjibrnFXR",
  "key31": "5cKCmJDHTaMSBMVL9gU1yXoavz5itzSdZSFoCHg2Sf5spE4LXVs7pRQw7W3kW8vK7rSearJoJmYHcrJtMwUqFnVt",
  "key32": "4be896CyKt9mK8sntsvDuhyFmypG7f5WoQCsnEXb6cL1qxUhVwZS6qdaXXunWK2LpvRHtr2jaLjMdAYtSkNRLsKF",
  "key33": "4Paphf6313arfqNABh6A6MseVPKwjDqu2N3t2Y2Dhbp4b4Lmy1L8MLCyUY3qi3S6UQFgDQtpxkvKuW2mEUZWaVdW",
  "key34": "2XzRc1BgWVAmfLkDpiuM5HDY6FVENPwe6fAHoZejLFVuEHtVLyQSpT8kpbTkdgipaipEUCmDHZvFhntVB1VvMUSR",
  "key35": "26z5q44GZh9kUBfj6gQZrRxG6U7zzCLzoM1KL3tGtKDSHGmGiqS5CB27fuztoKK14J9aqkiWR9QD9XUF7GoAymxr",
  "key36": "5AbGUC5DPEQpACFUcoL5JoiCeMBEmRra8DEE98ewKdK1Ce9573bYvP88uf1mqiyU8sTAfKJmvnRt9cUcVEieWv1k",
  "key37": "45kTG1N7tjyXkSsB3J1WkibPQTJq3YxwnNSoiTTpSHmxUrAziZgcTCv2ewpCEFrRCxaxuFavA8egT95PnyE8FHCk",
  "key38": "3bhjm5VVxZRf5DXaz4s2J4XTbrqhejuj1atYAcmrkDKVYKaZw7vf3YCG8WBe6CBQJupLeWWLxEcm8sX5WNXG8hcs"
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
