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
    "4rWHsNtYVRsAHHM2E3mRGdup7PPTjjM9qckp8nsENNBMg3wN3MYJ7JVW4Gso41vSrDVuib8TDS8MF6ZECG7wqFtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61yXq7pmmSDGpwnEbEdsA6a78HyDAtX6kYajnXfinRepV81573uFQE3wU9WNf7QHRHeEiU5jEBBdFqwpveDTLFKz",
  "key1": "5Mnwn37r3ocQAVfcrHR3earzzr1wX2bCkLfWka1zDXrAtFqTHj6TLDeum29qZfvUF9cHyB9YqzURxSsKftADikoC",
  "key2": "5QPqSXhLsYnFZ66aC6ENi9aGEKhBWWM7dfFuNerMiVv5ZiXiYa1xv1HUwxo3PuGifER2HvLWGepEgJK9aq8k42Pd",
  "key3": "5CJxkaXN8gSrfZ8AXzWesrCJpomViYfM8KUaeUjvMrZvSXQdYa4gHTS8ENmNaQwkvHsE4LLaxm9XPRt2ggHmmhEW",
  "key4": "2eNpkmkwvBKC1jFXKxiTPZ1h7dmArE1sNizgMCLfDroFZiZP7ueK4QoBNst4R8QSADAnxxCV2vMHXaBKSWuT5fYf",
  "key5": "5jCjLD83mQhkBhdAAWTSrFN5okW45yJctVvLoAZt2cz5QYhQn8zf2YtpXh375tYcpQgfbc8Nx461pffA5NvzfsNY",
  "key6": "4SksDJ8oETxjBxU2SkZNHmVyffRJKrupNweGnXoJzYpeFgBN6PNggoTkjF8S6ZiKX3PehNn8rWaZjGSik8KV26CG",
  "key7": "2vdCDQg1jDQWgoWYa2WJJN7FXaErmraekEaqhz6WHwKneKMshtoK5SPRRDdxFRYDY3GiMPxQEVsbrH4Rt8LP15Kp",
  "key8": "5bVmLAaNZu5jejAjrUgu7xZ5Lje9tjNSFHtx5XTisJrcyQrtt8xUq3sdneCbpcCCbKzqmozjps9T3SVdKJRxPBi6",
  "key9": "23BzGwSLPd2fHKZM25JZuZF2GYy5xYB7Jy6eGE7Km6TRWc1GkQTtW8Ya3ABcmrvwmTxgLXjVUYSLn1StybbNiRMB",
  "key10": "27Md8av3paxLJjL98Fy2VjAciZEyirnsi49GU7NM3nJ2F6optDJnTW7QJgErGr3jY91mA42UwoyQWa9CiABtRhd3",
  "key11": "2iLuEeDDHPiz8GWFoPhAGYvqQwCoNCPQNYdbhSaVcKjnW8ZBrtpi3BFVT9nc64ncHiTfnxJFpp8ufkj2MJfRwooZ",
  "key12": "5QAyFdkXnDDKrruVRVZVBBzGQGH3xskJx8m518jxMztrYUjh6sQRd4CA4rP3WJWstjLBJyKKzvddVK4tqD895kRu",
  "key13": "3puJsKF26eAokqpf8dLYUYjQfnG1C8MbwvPHtDhU2JuHrX81MmTjHWMAp4dSCBoJNAiGSGANwWaMAykSxjnTrseU",
  "key14": "2Bth4Up3YT8whcWUpRrTZWAv8FfRbiwLGBcYrR711q2D7fPRWhD4gFr2Zkb6H7Fn3xsPhbAwJCHVxmWFQiqvWRGW",
  "key15": "5spGXQFjXuvFcEYeneBrqLUSQp8mSJNVwHGUwaZ2HJa2LjdR9CFuvpkP8MzLVfogkVajxZvprqyQ872bBSMboKuN",
  "key16": "5ETN2acyEHk7UNKT7RrRc8EsqWoxE8DG4gpaKYnxucH9698HWYURBWkKgdf6g4q1Xo1rX2Q9msPqfKStApvHCXzK",
  "key17": "3fFqBs5iHBBDfAKLGNMVQpDjdpNXMNaPtuPXGYUi4cNeii6TZiq8RDHNWPDbnpqVnEQKmKqSSmynXa7UhVZEJQWi",
  "key18": "PVwE4h4q5rN6zrKKjpPLugE7aABRg2d9FHzKgGJ4p5doqY1KFYrnfgkBxGZXxUE1wfLtsnEeC92dFrFd8aQiZvR",
  "key19": "bRsdBaYcr7ozdDuqKnraNda7z7LbZh7cwRELZA9VQpsAxz4WYBtR4b7bJvpLZB12rGuhaWTSo2ffCDkPyWEJkzx",
  "key20": "4NPEMtWregW7cgpUHyPmbtv2QHSgkWpCkURNUnJTb13Tzyk9Pu6irP7Uj7hoXB2MfbHgWcsrsFvNpufFiv8pfEid",
  "key21": "2WNPhm29eyqJfqUQ6KRE7mi6WmaVzLcgJPxNeE5gxLeZaoHpHHFSR4dA1xvo9bzVX741ZYSWZMLwvewaXKGNNJoe",
  "key22": "2rqn8b4n1BMmjs5mekowJ2ScnFqpL1x1heyCpQDQVqPfjvJSdfDpqVKJ57hG6aLy1FxCoHaRd6BwtU7srU2vswRE",
  "key23": "3RhxtvQ8RRQQiDUCRrqRKhi55SyhBLqeeSRRcZ2t8PfkhhvvcTDwnRhnMXTcaJFWaCMAgUiKeDmdptVkNBDe5ZVx",
  "key24": "5mSxH6yitnhDRNA5na7AhStgyw6WgPbM6FSbAkVvR1r9icdJdfhcMDJ6MYDhdJa1QB54fpXvRJcJxm2tScukpuut",
  "key25": "5v1g3zTm2m6aexNAcj9fmG3FE9fhdBBGyEfrn5KCGcGZMGt7mUFU7NTeB9iL3AvwUTeS66JTF87qhaQeRpWcsp61",
  "key26": "53Xvhb4kMmkDfYUHx9T7eU6sakZ1MDLSdPw9JWCjjjnaCSEzvMNsfExu6uLU1Y1WZ12zHEtcZvU3rHqz2PEqYbUt",
  "key27": "2LybErrRs1SLTiRY3KCWrPqPb4NHdxv3v46nkkVV389iupUAMD2KdnAHdeXjwYZ5pNvuTHKQxoHJ18vWvC3oiCcU",
  "key28": "4sbtxZstPbh5e4xNjFyjeBN81epxY2ph3uEyT37m8Upv9yBKsienHU4w6Se9f8aphF8ccx87E3gzquZRWGmmfaPb",
  "key29": "bZ1FD3DktNJ9jYELwWQp9Lzm8zbWLq1XpJ72h8UFwWdVKSe33YKMkDKssfATYpURoC9Jw1natJfiVsV3SnvxisV",
  "key30": "2A4EUrBTSSvAM15dguswBR1idAUPg9gxTcS6dy3HASuAWgvJbniTLn4gPzmy4umHTNNZBHsTwZ8QcKBx9zL6nbCp",
  "key31": "3RNzmNx6Yj2be7xVLPKeZEFWfxkR9VuE8rKFKGxRumxy9cdq2Pi171KGuGvAibERmvSpQMV5fM1zc5acYgS3gwxA",
  "key32": "3m9z4J3oJn7JH7TQdwrvGFJh5K9YZrkY2PZa9foj6amCFjviwDSYGMHnMKVSgK8KEtkvoaznVvhDRbZ1sAtsAZoM",
  "key33": "2a9RJwQaeL4PXac67PZoo6eNwHVV6b3VeHjrfpGCBb3fAtRHkEfMFzeNESkXCoQ4pYE5z7JWS287EUbnBBCWoyiZ",
  "key34": "4VvEDRCXHpuaS6ehXjcTxdj3NhzDwjuaCFLC5bHVzZdsGuh3cywtw7sLkjWUtJvT9QX3BFxVEa39J2gehNgGz5HZ",
  "key35": "F7U5phVp8GF5bNyVLiHqHhaqE1mkB4WhTqmHCfJwDyaYgvqNMmVMM5xrLDo26SKAnQ584jsvzdJkfDMLXaRyUx4",
  "key36": "3u8ELgH9P7SZexLda1G2snJebsPRB77UbejpbopqovqD6iEdYBjp9qhFsGx1C3bWYWuCGnT6mGAaGgnsdiNAaZR5",
  "key37": "2ZYicJr696e1vV2xUz9FZ9y4NP7Er83TxJPpGiJzpf1kJyrpNcK7AKtn63TQsB8J1dLeuYDw4HGZWVbr3WdVobMZ"
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
