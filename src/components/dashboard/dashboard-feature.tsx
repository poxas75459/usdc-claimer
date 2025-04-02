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
    "52AVeJYyWEgrpNofzJsBSs6ksb8bBWZR9MoVQuEpJVHDbYD7GtBV75yuZhFu7p1fhv3ezy4a2Qxqp61Sy7Von5Aj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31P3cD2vHQAmcqhKGe6BSZgTasNfTE9UbHVHCMPziBMwD8oY6MTdpYJWARsEEf2WZK1JDCCDHi7Db1Y39ko6JJEB",
  "key1": "nYFUFQUFREttWEHzPrFuBVejtLPnqDZ42mpUZds6vWT19AKjGocMx7pUHnBGWZEZwVphk1tWASnHPanWGfWNHKW",
  "key2": "2zkGQwiFxzJj5knfcT1J2ZzevDRvDnhFS5g4bQVxcohbfxTMoVneV131SyqC1YyYDcUf7rovQC7oW5FnabxxqQYX",
  "key3": "iEbePKryxTw88haPLeE417vATJZy3fMpJmP4SYvxVg8TGtTQBmJBQDiztFJ58rLW1AJ2BCcVf8M2YZKBYAvvJt5",
  "key4": "2gwQJ9P4xJKcokSWQBd9sada8M3Dhn5ma4bbnHm6MGkysfULrRJqoz841SmB93K5GhHPhKgZZCmime8NJ26dhftR",
  "key5": "3grhKe15sBcBSfnEw5XH9DSvyFJvuDLcqQnqZX62FtPbaH8HoUgsQn9U9dV3432r2guPdY7xj4DkC7nb7uaTpqGv",
  "key6": "3PufbL4DeEuJxxfSq4FYGrM9LaBo3UNX1ukshyaJzembDkYRqS2DnwEQNNwQrgGf6ZY3RnN151qMcT4VNp1mLp9k",
  "key7": "2xQtZ9D2AbUm6STDRbkRNVWhmYoRswnx3cGCYq2sEo1WXhiryBQaaKtscwV4rv5LSKAmYMAu8B3kDXJxvuL2y4wU",
  "key8": "5is4VYNzbWD4UyFpodTnaqogQbbYkaTzhJwdeyn4J27cChj8WX2mV2pFvDHr3GzswfhocF1JfrSLjQa4TunNkoY4",
  "key9": "2HeNDGRUbGyVxyneUeuKJKeJ55M3fHRkXwvsVgWP9pZtZ5Ec4jB6ifFvR66srYK6y8R216zm4mArouHGwwBz6Bp6",
  "key10": "4ZhVpYJ51yttaEhiSXXG1y8kMRWaM5XmTp4kFvB134UdJ5wj1YSXLffggL3LeYRDv57QHrvnY6htBBzh3rTxfcMU",
  "key11": "3oxk1ES9QeY9JxsHCR9UMRm9MGeiU6pHy5Bhg2gcWRpJbE5uFk6EBch2ac991eurwHTsSu8Gb97Q2tgaA3s8P8S1",
  "key12": "48Q5hUZQsNXTkjp7TPz4WNwmGjWLLWbhftfnsf3k6dXasc3i381qdgbpc8dB52T2QciHzxSfh4eajFzanUN6xDEi",
  "key13": "2AUqu9DudJLZV9sUpS5qbVxSmr24eWoqM53VTzv9Ff6twQjyHVLCwGsJZjD2nodYUgqqfgZrnB2c91DSkLxRChU4",
  "key14": "2QkQh2iVaEQToK6bhM6gQW4M39x5MWKbKtW9dtvMB5igKYVkhxL3w54TDvfHcPtfecCMr5QzYU9k35FizdAp4uH6",
  "key15": "3ieF7YvLcHMmBWaV9UcEWvKUiqpfHJvvGgHRjGQYm6WGHV3ChwyKERJ6r4RNUGWxjxuLZuaqBthQCGwqbqvwtnJu",
  "key16": "2QwSyoYbphfY4vfzv1mX2xh1ubmsUjmHpUkEgPTAuScgAsnofVTGYJL6hqgjy7jC47ED53LvvEDMKxyrwr5HrEtk",
  "key17": "DN8oLhkugeqrkk4dzccf76DfAcEpGyUMwyjgvJSVu2ESRhHGe8rsQpu6BqXkcvA82yctRWSB8eTuAHtrWTb6xQq",
  "key18": "3qQ4fVQ4Snxd37etcWLTuuivvr2sNvzkw1XB1acBaztntg36MazfMWgum5iSRA3QM9Kg7z6A3zYaQxV2kAqb2Axs",
  "key19": "2KYm5AbvoQQw9TDGjq3gGSGrRh9HHyDMx4dyJB2L383wRrQXnZbHMxRBYakb5cC4Admym4FfqPyEpY1TB2yxAFnd",
  "key20": "4JcTeYveZtqc5Ewb4VCXVxxbbB3UVnp69MYXYUj9Q4peFnY5gax8uJrecqSoz5wkGhFBYrkd3xs8gaNz8WhPYx1Z",
  "key21": "4rtZ3CFHbFGzQhbVrWc4bD4Q4LMWQuuz3CfdkAgmbvg4feYc3rgFwzXXSW39Eb5Pd8LePLKjv4xdQZStr1dSthsd",
  "key22": "62SxUC7XMPFzm5d9QvpFSGqUeqWEZfqBH3A2Mshx4VsRVkz6zV68oNUE6MWdFptsfGzEGtZNWJnwWS5w66VwQE3Q",
  "key23": "23AgUjZnQrzJorUYeh5j3K28VQ7AwceJUdSm4uHEo1y5A8CzB1TRvaKZC7YpuAwZ9ruiveBWnXQpw26kCkVVGmca",
  "key24": "5ruVJCz9eR6QjsAsBn26NbG7jZhuZFpGwg4V1mqBgQMg5xkFQePHGLGnfezFUS8FsZBAAj2YkAvgp4GjQ79WGPaR",
  "key25": "3NsbquAmZDcc6J6sPj4mciFCEz3fQnSEpHditwrB87wHqjCnyKVe5LqiV3wBWYt3fxGqnFvkyCEc4cG4sDJo6swE",
  "key26": "4tf22fNUQ3FhGQMEsEqiAbiKJ3LNw85YpTGzQV9iMCGbyUTbh3qu5mhGUikJqgqaJF1NkX6iDxpsegjU47pz8BQz",
  "key27": "64JBXpRHDDHrgQBj3aNWgxYxXpY31PvL6NF7BKqPAcGDHWyffdsSv35tJUSfs8cmLBsBUcXt7m4sYLp1aWBipFqf",
  "key28": "2DAUiTxMDEJaweac7c2uvvGrZhgCD6aFAycK6Zkm56HUyWekkNFk8JBaUPMabhFyVViLcAnGbyBbvuu2agiQkCAL",
  "key29": "Cg1VkydfatyGukT6vVYTvycVwWzJAvRwqwp4jZigUocfxQEbeYCQRvNEVfGAmsTFiTCouPJeWGgraoFWxzGRss4",
  "key30": "dNeUyJKHLzqxtbgaRF9MtRYCvHBcPUCjj7QwcNwxP7kCfkkktKh4sRdwVUFxYxf3sE1mmZR4bVLbT2chz4oNzyt",
  "key31": "2J1qsemzmdfGAn2rSoKh57c3TYfCmvCcSucwmdmzJGUmP3xsmKAmJoHiMYn5UedASRZ87XmVk4L4R8BWNV7aQytb",
  "key32": "4M7fBAqVduugNycZ12A6NGLfgceMuFa78Xf6zJsGQGcyatvjmJqEUfzbWXAHU6LoCsMHeMN7bAqQ8ze9BuCk3cH6",
  "key33": "uE2xri6xZFDu1YgB8euKf6TavzcsYszJnbz9ZHU4GnD1FD5qz99mXHwvMSksUTWfPeSHV6RN9WSa2yWy7bRNZfG",
  "key34": "5kiqvZLq8xiJdsfbCMTsguRZqQwtcBohFNLW418cTQUkYLkMatEhc3cLpvvbeBJDnV8cXTQwQMH2RETLfMgN58yT",
  "key35": "39xE2KobZ4RffbJbC3EuBjStRu69pLrtgJ1m1dkcqJMuP94peVnJBAC9Lop5zNiEUCU1FoAwznW9HgPJucrnWJVQ",
  "key36": "2y8vA5yXMAs8yfXycXJhNQUDEQueMLyhLMg9H2DiNmYddpSHbxe4LcM6TS1pC23o3KWCQaWoHM3To5zoL9Du8hAx",
  "key37": "2NGZbr5uZS7JeanZjnJ8GXykWhV7oXuBdihgNDq8Au1TtumDjhFeXVnUVr7KzotyaeLT42HAMr7xB7yBeLcvDtk4",
  "key38": "2wR1vioqt4gHYuayhGLzb7UewbDv9gNtEkDoewcJn43pgnA2N1HSCHju1C9ynn4n8XV8HWPNAV3K3cCYQSDRUHQ1",
  "key39": "4LF32G3Gqsxa298zwFmgsfHsZsfoAovnAz5bfU9HTevP4g1QYWWddksBUouPptGsEHq5gTkQzinAkKxD82P9C8hp",
  "key40": "4f9iqKasXZNpVUiBaaX9mCJrnKJGWS2wDw52wfbzLcEErSetTpkvLcv9xmw3d7rEUCUuVRaiBYo4sSr8DscuakF8",
  "key41": "31UqdYTQkNGKpk8kCtxBbtQdbHV272W5wioSDGXzakeTXWmi4Q9eHfwo9EhdyfNGBfGvKkiHV8SrxDrApkTDuDUJ",
  "key42": "5re66os1GT6hcMYcVvciMyYvCCvcmyewd5sPeooZQcmi5CwXoeBgVTaAJkVfw8MpMS1zGfRyEMHyPffKHbfyEWR",
  "key43": "3rYwW9Xxx2d6GXx5Tp9uC2QAjKACMednGRe5YeUzrK8ui7gS6wesJeoQf8eGTGVjHzSDGv5YfFUSQMTsFewnkR2a"
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
