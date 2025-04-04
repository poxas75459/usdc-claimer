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
    "QBGAvBDZRh94QSUvTG1yfaCSSpvVJxq5p1zxCUDVt7PJhtbTD7gUxJiSr5zY1VUcWuVKhmJemo1H3cNZDj9kEaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hpEFRfNaZ2atDQ4FETafRQ7fZrJT4mx3SdfXvja2cMC5dMJYEvZHXiUZi1aWXA9NEB1JcP78PhXgUJWw1a6mK5H",
  "key1": "5exx7cN5RCPF5gKDDRQFRaCjv6sxrnQ1vtr5jJLD3KMbu7UoKXib93yUe2DB4jPuoD2Gz7QZ9Capg5yHKk5yL7ru",
  "key2": "4vXnuknaQBRgGskUDBhno4t1CfTNgcoZLKxyzpCNCPsw893NDmZvTPKZey1QtvqqY3pdhx9Zaxh3EnkcxPXMs7B9",
  "key3": "mZZxo1Sjhb7oBGpEcHKdNWpj1kydNBtVDR5FZpsxk5kfAdW7ccpy6KtJoAuxzGT1C2juWXVww2H2Ja7ZdeQMqme",
  "key4": "2MsZPitJAMjn27k3XoEoUmUVu65WKDVJWTJ9qegS2SS9DSJRhFjAXfkMtwckmUSkotVCCVSmH2JCkv3MmNncgpdM",
  "key5": "HTy6WJoTy7T31NGCAPtcT6oT8Atd2VQRQwnap3pp2yAgR9uJFwKx7LmMRjabZamPNtLGP84pkDjtYvMnrLsDtYT",
  "key6": "37boKvofDguvMK6RHhPg9zjeuunkSRgdjDWsaS5VYCfcbE9EKU4o52y3rHS1qW2YHxPAhVaSwccWfdAe8KduKdXc",
  "key7": "2uTtmnSvqv2CEfYgrH5YqWrPr7prqmUT3GAtT9F6M3N1raaVh9UaKWtbzfmGevnFxN5bcXmxK9s9i3RxrPX3R3MM",
  "key8": "2jgi7tCndZGcNHK6hWF799w5jb83hyUctTCpyYb1gdyQ1Bjn9YUAAx1bx6wK126oUgF9kBrg48xR2C9qiJXJMi14",
  "key9": "3teUXwTJtb4W1AJVg3YETQhRAVWX9YdyzDPBwsakkzvGCLkG8QzoPHZaSSv51RRfSx1ZR37SVzJUKG1EkRF98i2C",
  "key10": "4QxGca3Q1aK3vQ6DZxi67yi2A469cXMggJYZjUa2eYW4Yf6Ld5ESMA2S4HQySeawumpJ8NiZB183XHQLL5br6zMz",
  "key11": "4Sfvj121iyfPK7uah7riTRo98Wnfchm7VZczKrCpGqkaRRaQbm1dH742E7sWKC9dq9vsqajQnXnh79p9YhGequkD",
  "key12": "4u457qAQLDxy8FJ1vqRL6ZDcUVsAP45Xuc7axaNX5NpZWXKZLxG1xkN9hyKQV6hn9FNf8eVqTsS8xXYJafR4aqtX",
  "key13": "2JecgqK5MESasTW44X5ebLnbue1kYnLyvEm7jAJxvHyagNEz7ra3VWZrteG3LyDSx3dcfb3Hg5ExnBDZkW5WVVGo",
  "key14": "2v29KESEchHQKgHA7Cx4Ce1TtjBPiqS1GgxVmjTVx3yYQbc8c1hJiv935pAwDmgQ3vM8rUZqAAe5bi7xZRZkJmFC",
  "key15": "5K334gw9Cv3BRQWCr4wuWWB8xKrrTtasgyfwVfxsMq7XKJ9hdWbcdJbBzDMFboAZzTkdcvhnuFuTTMJiW26pQkFM",
  "key16": "4qmnsZL2RaxuNHA5Pdcj1afbEzHk7nmpdiq62BGJaF7kzqaGwAJYTA8UPPTGX5CPyNCBY3JRmzznXmikjiBYUmDU",
  "key17": "39h8BLKa6SdCRbJ1pPCCcwiiZNceJuH9WwNdKcBQVpmsZ1Mo7srJ9s8WTvnwkqu6KTNM8scwcfJczUtHWe9FnBLU",
  "key18": "5J3ZCt7tHZWVEHqQaadEknGWB6qr6rFm4qcfEDhmuoGCJdeaVinfruMa3q1eTgZ5wBLnpBVcgLLRvKLLX6d9z4ba",
  "key19": "4yue8ZoyMTP6A7i1wvXt4yUW2sbtgDZL7hh99JxNq7Uewc2NdeexUJvk9dEC3Ws6MLCpRgSzVfUMEvTLV3PYsnoE",
  "key20": "4yKmoLpE96zwuXxMrj9fvCsu1WQebtcqyqC6tiAvptNnnHj2cfZyuG84SW3A2Nj8C27g4imapVyLj935S55aPEgZ",
  "key21": "56iZdBc5xKt6wsPXLLDuQT9Laz4JLsG4q4qEjnV81Grd94nLsXcUZZH4pazNTGYE5AB9njKT2zQCgAnTwhiT4ZME",
  "key22": "4W5rgjaRB7sydqeTKKfa9W2wveCfh2pY2n2NfB7tuQ6AQVWfTYG2ytYnrPUf9uJULVefoGtqkSp7FA2Z8yEih5JK",
  "key23": "egvDJS2i5tCkTY2Hj2wT5Refvm6LRUjqSfnS9XJQoUomVFKKVFYtHgec7qCzUS7tTWHnSVzY4zNVc7LQfmcXMuq",
  "key24": "2vz5ZfcdMz88opAjEajNLwruYx91vdWLxgPuHMMHMosoapnEKsjKqFwuzRQwKCJk8HXTJQt1DkRdCHwBRGETnweZ",
  "key25": "316sQmyptH6Ksqa7mjVDKcSeQYyLU1roke2yCETGfQCRo52RVhE6iccUgQjezLemwCdvAkbGZmKg1wNcF7RTCrr4",
  "key26": "5PBKw3zpVZiZB5hWRykS8i24yTyiiPZBahxzDcUFPTDKCVYXZ2MLp5NxVTEh46ySHPXYZWZ77fceHA26Rxx56AHb",
  "key27": "2mHmUsfX8cr7FoZa5Ls9MEaFCDZ3N4m9jMqYHdvaddaSopRpQZuuPEeNs6vEczf7MWjyftTMrxMkEtSUkFBWVMkN",
  "key28": "28LNMu7KphVzcGao4TR9ST96xdEJcimVtrR7oBv2DvNnTSGpTTgZJpYuLopS8Jq4NQdvQdMGZKKp9gkBDZUw3YYn",
  "key29": "3C7rEYqFzwcH2WKMpQvQnYA8R5tJ6LruTccQft48ppebqUTobLyz9aisZRnXTmgxYXWguPvicm3YxxQVrgfykVY2",
  "key30": "3hhahaiWGc7as1hjkkRiTL6ahUZZFV3vLk4ZQRTq9LAj74y5yGwXGusUd8L3nFVgX7NuxsY7Ap6yspTYEYRYF9pr",
  "key31": "NQpf3kGdfr35quh9PR44U9wjHrd6sSLSfFZfFAycEvfjjWJNeByivPPpRQHaHdutHsrhxoAnWYMAPrtb5a1qoGV",
  "key32": "4LqxhTnqn4CSqixYUKKhc3tTQJJH5zzKnt4bVGk91FfHo6xk99VnBBTXm7JwN81BTLtRGEG2SkQ9a6qufYgtTPhX",
  "key33": "4TcMiLpAZui5Crzp4UYk2cqFRfBmc6XvJMcHR4y8NhmqEhF2v86xhWNbdr9w3zxgW4hhrW7uv2o9Wvh2ukgbY48k",
  "key34": "4A2v2SRNx4SZoqvPNdtSKGbg4pFPXjdkGDqtNf4DvpDLqywZgq2wbNB5zfiggRRULKePpdwxKXZ4NLmPkMYwGJJt",
  "key35": "36dSdSDWG86StcNt9UeDgySCPQ4etBNyWzz8PxB847uDuSaTJ7z6RKf31nYCKcbhHjPpoQbwXjpKMpGT6onp1C6p",
  "key36": "2Kmpes9DSXrFK8MdwEMzC24ay78rqJbbyVy6qpZir8xzEuYmhMNYhQ4HfFse5nmt74wERbq7W9ZwFuEvvTjQ1KgS",
  "key37": "4m7RELa7D2aHCvNNngr1qukYwfB2NEyVCkfmJB7qC7EXs9jaFm3PX7htrfF1wF7tLFEEMGrAzVkGSaPdVRJHT9E7",
  "key38": "54psd3HN93mu2eYK3fPKSmsKNWWKfcF4tTXbivYoG1wHhxsy9QghzodxhxBzxhLqA5sC3M9Z3BKbTq2kzYkGPbkN",
  "key39": "5XWa5JMRFH9xNqp9p4nfTnGPevJ1L1Xfy99sPD8XGNuYosTN431JwR7PxxATJKNp5sMKrbHDmV5zBmh1Vc2UFgRK",
  "key40": "MDTDJMFde3hpYvLq1EXFVzj4e7ZYFYDQUgpxYaH3Zm7hssYZ8SC1iAvzQvvMSAA5rRzLSWziHMTf6TURj5sBCHT",
  "key41": "37UmcVSjuubyxkKEgXckvQWRyZun2qRpzDj2fTr3Vzmyq6FPQgCGsuLcGsNSwT9hFXrgvoe1sCAnuepcfPtKRwoW",
  "key42": "5iKzbKfqvYmiuKmLf3bdkJThcKLXzUXYTynqDL8j5C4x9cFfSJ6mGfXqkVaLKYhjXNbhWBP6rhRqDYwiHaSeUj4d",
  "key43": "2FPjWASToCWVuLmztyFLPiPrhBRhM8c6snMgEFGCphKMp8UobGfz3WbWq5w5sXk2MhdtBEUikJjrQ5ZmCfaw1iSm",
  "key44": "4bovP1T7EaUxyeeNgZyMcwmu6zVbW3UobE9YXLcYDUQx7izTQZGe5hZVPakwRG3jVVVBKeNn14A1euEt6bEN7W3L"
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
