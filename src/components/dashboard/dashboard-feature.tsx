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
    "2oJ5S2wSeEMmNdDtrSnZRbjuCpQomePd6WGj5yvSeFMQupYHUD9r5RPPg6u8NM4MBGcgfjfCdkAKmh38uzD8uE5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CKjj2v2PgKs6wpfb5A6QM1yNC1heC2nQiw9VphPT5nmFqR7owqXNYYdETEPBmQRNnNUMJTP7zR9XTLnacTZ8crG",
  "key1": "FDYUAxfsjUur9gXnnTajdWZtpEyS8RyXJdEow5wTqA9HLJcYAaRjgBXU6Yejma1XyBhUezxEa8mxvhMezDcrX5x",
  "key2": "4HQ4SQd4NqfnPe6VQpFitRTmBhoRotTY3rVADufeVzuMYSXyJJEhXKiRmiXp9LuYgR4LJfsUSEbVAcQXWwE6FpCN",
  "key3": "2SD3WtEzvZkbFdvbUBJGcsBhCArq7PQk6pYTcwhT6sJHuzCanGqqvFCnqGg2vBMd3sdvtbsjj9KWB2PZxBH557ED",
  "key4": "2QibWAMuTh3T7cEfpX99i5xMqmWjY9B6T7MztiGKwhHjDuhAxeDTQdJVYgHt3sJi2id2KEYAecToRinSgMFGqieP",
  "key5": "4PAy6xk1ZGA95fZYrW1pbVj5JDuzqXn3Vn1E6WRSDYfD2YuoEFteYGXu7TsBWkY41bMebMT9fcFu5NMtrmTwVPNd",
  "key6": "uL6eveg9hpVxqF8RAdiA1WKyPPTMaewb5Z8cPY93UZB6rbcPyFGQbzTpRET7LCoFgvUPX4Xp4ZvDejvJaZFzDwh",
  "key7": "36JQLkSoGxzFP65WrU7BJN7MKxnBcQTmyTdXjt94tKctSpJTcZPKuZazcPiZqkaU8SnQ77MPV8jdCweq4d8JX5sf",
  "key8": "3wKm5FCKooXpUHfeGYe6Ef6uxJYCKsMRKagYXWHCnf8ZDfdNd766b2f8rNruqqqt86ZUL1Buuzqp8dB9SE3BixvT",
  "key9": "2ANWS9aLoMeGi7vvEQBTmc8XdGZdQJTbw9Z9HQ3de5oWzjVBdHkGDaRLYS9bqPcUWAZ4gWuTHSVy5BRrU3X6EA9C",
  "key10": "i361KdSAnsfqSEUTTPwK8gnigRrSHvirHMzFJgJhAoXQ2UUE4FfjeK5jHXy9EFEn4XydeXnoKRJ6qR4SQ48z3ET",
  "key11": "TvMFRYJQARhkcaHQa5eieZXxnCQeRBop3pcpLw77yTyXrVo7AHNLmNz1xdsmajAmBCqftLZvrMtoPkyfkNFGyAT",
  "key12": "2wzJ4RCszHwbpHajQbGGs1c8KKHrKPon8JoQf9HwZY5dGYzVDkqC9asdMNkgTjKCZM2H8fQrbooqCcuXHMvcLS56",
  "key13": "31AzTZLRJFYQXHGF2661dCXRrFbmzoKmGd1jLhY4qhLpuj8g16QotUkAXnkGxSaUixHbFZuPMtGjiGrwtStKJ2yv",
  "key14": "5G8PppSTnkn6k57hH3nW2mA2ZH3gMRYixLqFKiEm66HHU54ahbM378YeCKPCnAN5opvzFmcUAKHkzWWEtw7NQtDT",
  "key15": "5CSQMj3PFDoAU7FaoTwhzTujc9KJxaEDVyRynxwoauZeSuYn6HuX7H41WEBXhQNSYpqYrzgaoQctw2D9yrNAeTfY",
  "key16": "57GwMHygYKnPi2KYa6HuzWMjnGmYk1ujVRW4QEXmRPRWr4v6Q3L7A4BonJehLZoZestyJTnHLFcFkw6D6xxsGygi",
  "key17": "38TxQPfHx6Ahj48LRbux5e6B6jM7Sr1NjYcV4K4sGX6BevwK3dSyxeK7ue9PCLgEPQbCYVsieXDo3VQS9t1oHGWu",
  "key18": "2g37emimRtDRfpQxRupd8Bx6baQXgFRCXj6R4ZxpLTp7jHyejdm4tZPcBWS6aFB2HmKxV7YyrinW34ibFk1mToRN",
  "key19": "3mPP9dLqtqV6irbbLKZZJ9d9XuJpSzLFBa2s3acQhTvRFgqib6EDPewsWScqS35d9sL2nroUHjjP4KbPBfpsQgsk",
  "key20": "4ztwYfuPNin9GcUB6svHEpxBSuSW3zRfBsVmn34DzkebzTD4Y2PiGERPdb7YhwbeSfMTe7yJdqzNM5uqN3s96eLM",
  "key21": "3YreUCtetdGZNpJJDDDueWus79NEsbiNAsBSXuyVmymqJGGUvLSaDc2ZkpwBCNG1ueocQ1inP5qdP1teSsrdCnev",
  "key22": "3zrGYUh5ZYRvZCGuPKczYPRko1s2o2n36kQW9XRdGGRNY5j79X2UdrxtKhjt6gV5ozCmvr6AqWEBs56sVb6tFFCz",
  "key23": "3bvAWvLBn353MddXyEvTq4pNXkjrtCDXwaECGwamFRR4xwV1eqdFU5kw8k4vLbL5QR4yk9nRBTXSimrje7xPgfkk",
  "key24": "63pimQcQtx8QWxGi2awz9j21E1bTQSmf6gTqEbZtEW8AZ4Kj3mpq5FEGsNX7y99ivjYZyEoshGu6RF76sExKxtuY",
  "key25": "5dyLsNq5RVtXEGfBXPyso75DydM6CQVYvSs6mMRBT3dVGUYGaaUtTZ51quijR7soc7bWKJBfGYHn8wX86YpDegzb",
  "key26": "5aEz7PXhLXPSuz32SduJbr9RnWa3KcooRUGCLR6bhRYLPHn6Fda7MVcge6CvwbzxCEiC8TcG5Yd3GWYHHuLWMWUv",
  "key27": "4tfcvcWfaPRmpMZvcvzV2yfPzmYHW6ETMjydCPRpmx5LrFSU6Uwa9fSUiqxP4aihXFXi5Ec6GukoHQZY3Cci1u73",
  "key28": "3u4DLFRPYoWEGnUYuUrvQVDQ8pzbFyeF6r6mjvmCeFYFamvrHf6LqEZgnJr8zQy6DrWGb8M1HRjsnnKcgo3f9PzW",
  "key29": "2Jri3bdZDKxaUg9th8EPuc1G6yrrNUPJxJrezej3euA3TKMvPzQEC8HR8Ykf3pGyRoFeuhhUQzyGRVXiZGTXhdrd",
  "key30": "66GG9g1j4eg3PNjTMRpZZqwgHqvJFKJdxAoHWDe3RCTHbajWD5xFvJe8ZHtH7gZKBGSbeo7bCzNN5jxXaKqvr8sz",
  "key31": "3ZztozpbCmUXya24Wj8tRAthArGWhNraZ63pcZhMcUKR2V31Bs6yhb1Uf259R8nMLUTkc2H8MJhDZYhxqybu5byu",
  "key32": "3ZEZgq5oWaPCkzHcmHtdxSaCK3Pj5pZFVxGk6DvjFpjQ2KF33vLJBE1697zTFwbsYDAp9jhH8HF9dEUaAym7eE4P",
  "key33": "27eiCj4hNJz7ir9owTXEpJvV7ugedg5ToeUCMjdK2KJDsiEo4Lr6SH69U2mCgZ2ZYnmjNTVRPxdn3Ms5mdwwmNws",
  "key34": "47kNLk1DJ32jc5AcXU1trCDFQMLtoSJUMiZpQZNV2gSaqUdNWJs6vCsUjUuVpU4Q8m6Du2cUNx5GxnoPMETbwzfc",
  "key35": "Vu9yB2LCQTvYyjfbcipXALC81L3wRTAXLLFVEztY4n1D4FaGLihdgEoAby5ZuxPMZrFmxKdbWcDnwgUenstgs8E",
  "key36": "2ga9hagFMaThcyAwH7eHWAwa1imEpMxCBnrZ5suPVxZK9rWYTYhQckEJHDUvg7To5J22C9HE9nMWRrzz1PGxkbDa",
  "key37": "386KjpxNdBeGdri9twdDbAX3zzcPNpSQrfgBxqgPhdfoNrmvADjLzdo1atyEdRwFuaxYWRWqWADzdHXYBgTLNunB",
  "key38": "2ZtGcSHAPDnKZQaJvrc9psGmEzCEFUTuURt97snPboe3nNQCTsg3ypbSmZjxyryeGuUsxb6k88sbYYZdnnZwJgG",
  "key39": "5xzPJmkVRUEt4qiVotrpCx8V1D3akxEAzHguY1BxeiptUhbDFPs28aTjjJtMgLytnPabC1VgqMd5H8fPdwn1yj8Z",
  "key40": "2fWv5tyH4dQA474JAANn7PGYPkqQUzYhHDEA4GekfTBtJJvc2fGkhMEJDHLLYkt33jNDj9rhFw8KoCMuToJJTTdV",
  "key41": "2oP3Uk3NVD8mXTFvEKRuSj2r7qY57Ztkxa3SL4issEpuUdM1jMMzNjdWLevKyKcqWzxVZJSyqSMy4x8VZCzZAfM4",
  "key42": "4th2hPibU1wyAeUNmjHUBM2gC9WLRB5s6GiEYoPZsHGXRZ3fXs7VKG6Md9A49jKL5o7uhSs9kxhdKY73SWwMrys7",
  "key43": "2rqyezojMJtN6Y1wpWSwUtKgUu83UCmZhudrVTWqTmvcZdyENsvJMaczz4DHcdgaU9bHitUdJG2qtc79t8R9qrH",
  "key44": "65n549SyC1dU3iehNRabhguQFs31b2Vw6KKXQP4dQDJ62yP7W3inCg7FwNvkw6mpFVPJkmBQUAYPaJZBg5H9FsVA"
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
