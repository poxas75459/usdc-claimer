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
    "4tRKxPe13xLSVpH8SCkL2HxsHHEEXArobNybEuMRHmhiBGG7aj76jLbRHeNgSaEmgZMi4cgixpPMLXULrHWhvtE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VhvVce75LgY4WvpcLrUYTzT7F536MdqjR5KpaYgWdz6AoYi5WKZZBWhdV8vYsY39CxW6tSGTxWUq6uUZFHDLRyR",
  "key1": "67r3XbSsdb2gZRqgwnRqfeE9DzLf5PhXzEVUzTsCJyKt2i2ovWxTobFcRfKkHdUzwUTb1Dw1krFKutsGzX5t6gU1",
  "key2": "QZWP2EyioWGQyrGpM5QErVffPZ5aa4KLUmn2peJKiANcYcCRxDYr7hsitxEvsD49wPyeGJsuKwY1PZ9BGDHPqnh",
  "key3": "4fnBwoW6qxEnPDmnAvSYknsRrTXT8PoLGXrjv9sJtcSwNJUeqLGMkoQzyPj4ZKys56gSi9ShKvwzsvnFEXscF8KU",
  "key4": "5XCc2YLAuvzW6zgSQHozRXH23i4PjkcqyD2qPSn1gnaaVqDq5eNu7147a6ztsW9ahL2RTBQg7uaXBt3u4PEin3jk",
  "key5": "3LjifDZoCjmHKWHABPsUarr9hgw9Fse2fTwobiptYgLgmjGZ32z5pCSApDX46JuoZUbaTgQFNiV6dirDZ8gmFH2r",
  "key6": "5JMSx568qobPMbYcG8uSTWTAXQmPXoSAqNQ6viJM5VnYgk9kaYqbVKi1SwEH1FSfwGYL2Uep5q1cRDqdvE1dUuW9",
  "key7": "4rCRTVj2s6DQ5tkqtpS3mCexjSd5yPhQ2ex5LPaJB7vWBSaxbLnrkvKCy5G6X7DE2T3PgmrpRN814BhDYHbXim7w",
  "key8": "5NkewEeetuvep4PHYaHa5nrCStirkkQCYMX4iSrczyv83pNSk4fmVaFtRYoVqwMybYfm7Eq4mv7WqEGYJvvfWUS1",
  "key9": "58PEmkBoPDUjFReJytzmUBKPUDQ3sv645sJT8zfBqQuvMqW5gKXw8FyQqWpRQzvAJcRcT1UNAprjh9Gwd2CSVhL5",
  "key10": "24r9LFZJt9uzSiM9R93n1Mq7QFaaF1WXU5FBXTqAuPb5DXGYxfTNHjBMPUSb3NX8yUxixGzSKHCqJ3D7LFdmhVLB",
  "key11": "5PCwXHWwSac3mWgSwkSfE4VUY2nkMAS5nk41B4H56fwJdkj2Tc6PEwLM5TviwL1j1DhCZoycka9HsfS3N689wNdr",
  "key12": "52wSbhB7HoSXELHUNLqQQxRhVqoeW7t2N4idkWCABqLAySoRAZaQYS5uRXHY8xvwjUoY4Cxc43AbHGgkxxJah8Lp",
  "key13": "45bo51tmC7caaJ3aughXzNRVAMUVTmYA7GajC1M3fAdFGABSvoFXXFE423kG8fKnAq2aee7mY2A27rC1YX4UCr28",
  "key14": "2Ut8fKaEK2aWBJ9Z5sYjUgqACqk5PgenHpfXE8RCRkktNyWwn9T7evjfeHKo6aZipZRB3M766v75eqNUsfWqYxun",
  "key15": "55apXdwzLcHPu78zSA2yo1hQbaG9Q51zKtzT2yytdNUsGBoEigzkDd7Ei1KZrKHjgBU9ceVTqX9yE9JTREmCbSUd",
  "key16": "3ZvTvcnQ13jQyCzUPEivaF5FWRKqatNoAenRa7z4jQfQz4SvQkbfWnF85yEn2qQ8DghCM7BDsGsF5Rh8uPyxRB6m",
  "key17": "38u2LmzN9H9HFd1hEyoPgU9ZhwBxsiTFdvyiCfyCmyKt9R8mBGwRL7Jw2uBfJBhETfNkvNmiS3gjxiqx1E3GckmV",
  "key18": "5dpjDkD9eKMNLT4s13gYgP7VK425Yq9Cmd24CgSxxaWD9Wsh5YSmTbLnBH5ZxXVTMi5Dvb9NfMC37SZTVvXyoqSE",
  "key19": "3MyTKejg6HFPsHJhkwsqBfzhHyoDSycw2F6sruNELZu5phXv4SWB7BSELXwUpyfPkbTLVfCNPtknMY9R1YGUAKcK",
  "key20": "2HnoyMf5juJhH51G5Em2Pd62Y3sGRU58WtJTdtXT7xQYRG2i6MQEqEPc5gzwffyshsz4msZ6bYbj3ZmTN7zxqVtL",
  "key21": "2KBjeN5UQbMFYuzhTjBhfVqyri973xa21cj5c6b5C2ufNj8aGMhCTXeHdoKwAXNY5A321dxdPZzpbdtDrpussHxy",
  "key22": "54xThgHnj7pmBeNwNd5sbbZT1scvZdsQfL271Ea2azNKU85vVSvU6UZxiVGCxbDbfcFwPwdkG5eArni9vgTs3BkD",
  "key23": "22qXFrzMYuseJanNidgbQPC1EXrCGbLduZf16kyPbkePAAPRJRk5SP1AtiwJfadtr54RybRA5njGJRzwAik65GTQ",
  "key24": "4LmxhBdUNfy6TfjJtSVMpqmFFZ3gf7F3Q324NTeC3cjdQi7kPRkpPHhUWZdHwWFvxWmxJRUyqSY4S1gqE17QHrcr",
  "key25": "7Sc42QBKEQxENhQqkZ8JsAZvkMwnwii7PwHhCWhchaU5z3zPFNmAjrtC9JFdhwtd6ZnYcpwzddRP48bfyr9k3Wt",
  "key26": "45YJhK1JX3WGDuAQcm4JcFxMTPbYtFaqrwBVunrX2AESkrEJRvfpmTGyxdUt2Mvp65ubkenoWkP3f1PsyVfD4Lh8",
  "key27": "32erF3GUHq7ZWWXB68LchoU2jbaAqmMkuWWM5nLGA7xFskmhncKuM7LucMzGFKPmCBEsZMJBvwUhZ3HfZ3WEt6fc",
  "key28": "5i9viYbqpTTdWcGfQGLLyffLWgamSEUj8w5MiPCi2n7YmKEEshg7rRuu5CEQACqbsSasjspxvXsSFns1beatFiFw",
  "key29": "2Yx5fPYeNV3R5536dVJcQVU5bmLVYRzmzQNWHomuPLjjG1vBnxQKC165E1gdWkZF3utyrqBP3L45krm4jy3grKDL",
  "key30": "2YAoHUz3hieUbDDC8hY34PdXaB2hP17iLSnsJVZUJt9ayFg1x355DvAV4iaMCFtP3PBa6yDRH1hYJKX8hur4jtdf",
  "key31": "51bdRfBFCZQre2t9LPorURjTxB8wrVdvou2nBtGyWjvGCvMZKoKu9xHWxrLjxZG2u3oP9NtUKUBcV4BrjLYUp42y",
  "key32": "zz9AEFJhU9TyaGYT2MphHAt495RYsLT5YzYXehhF9EXCR5E1JTFK8r3TZYXQV4SFMyyJAXD2KxHnB9ggN4Z2h92",
  "key33": "5wxChBqEYiFomwgXUzwfKUBjg65w8AgXqC4csnP2j19W6VFJRozZBYfkqdTjU1XguyjvMfbrbq9G5JLsHUYYi9Rd",
  "key34": "3jt3T5ecY8M874kzDN99nSVanLEfyqew1Hama575ZVUgJELvNQtQJBeK5SFm2G59g7GszNj4afbkVko7LXhhCYmn",
  "key35": "58mULLZDgYYbrR3bw6EvmCk6kttcCPZ3wdh2UxX6rMBkcWwZCUHGukS3ASFCrZZFcPDvwvA8ZmTKudH7sJWkivhR"
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
