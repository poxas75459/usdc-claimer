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
    "2LVEHNerMzyAoPjmdcAmUM6vMJB247TeKgxwb9SFfGC8WrSLnEAw86qSsqBu5bur7K1WfCNN1vr4MAZjcKqiEix8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MxrL4gL8hSYiYTnqvxgCWAnacUg4SvJb9VFLEp1rN7VyRTGKV8r4ThXLAkLr3XrkTEmkpUqbHomQN6yE61bvoNB",
  "key1": "2UVnyfzX9FGiWaNf42rmYTCJfZXmrx4NQ5z9GYBYXFKL2z2Pk2kjkmH3N54xT62D22DjWT9asAFhkLyTb2vooVHn",
  "key2": "5Dij5dfazRQuCK7d1HoEGQfrhgx4pg5xy2fie85TFy5aP1CFsJ47Cvj72dFnN22QUcVEXbsKWaHJ6rsvMBrkipgV",
  "key3": "4AYdZsrzrsrcnXVm8kXTbmWaRwoJ3aqPgQxKWk9gYaGfR5uhEsEUMinZh5jF9XtDfALYxDXcECxkRJhr41ykh6XJ",
  "key4": "4V8Qf6BciXuSXyWYRsVaik4S7dSn76Nsmed5zbuxjiF2D4jZ1tqzFTjCbnuaUJUdmmA6vWQeG5y7DLN16CpsWWVV",
  "key5": "3BYUWxhxQCz88A1eqkF8J1TVbDoiPdHegxb7gYNm8U9TfewNu927Ue7fAL4DWhschzKPE4Pb81v9f9MyFgoWEGLc",
  "key6": "2zChFUwhUbwk1uUM9dPA94sQ44CWmLv3BhzjT7bcTCTxdcmnxLnTqnekMaM9DgFPF4p4SqRmcVLWSKDNiMgkYkkm",
  "key7": "ND69gk7oLvJNGFQ2KGsjGVNgzwGQQDpjKKWwW92A73xsQn5VHSXjXv54WzLhyhTfBm1R8EpV2SwT4D6DLepFshn",
  "key8": "671geB2hrsmLjSCEQA2cHnUG8kWgNrenuyixnTG2496gwGLADo3gs4assodEhySvrRvJD6umJvcWivLqb22C85xf",
  "key9": "5S7EayjqWfd9ooKGAW1izBaoiVrUkzQts5gLqpnK3ctFmUvEwD8JXm7VfeTmwnUq3jWwKSa1nP4GrXXzXZnGSSYC",
  "key10": "2qe9DeumHino14pE8FNL4KTNiD8ZPmgYqxR91Fsw6WhRTv8jniVNrHWDdNhUvyrDn9yHdDYRgdgNU4ARdgzsSY6Q",
  "key11": "X8sHvdHV3vpjNrEEaQy7UrDAas3i3GvBPUtgQ8x5vAEo6XjojfBg2H6xwYdqSKfnPKygAt4gAxQDHJpzbQdLENT",
  "key12": "622CwKT79PrKhiGZwYW9qx8MuK9o9FC4XzcuKL7MNxPiShNyMQ6enCgkRFYafuZwKWt4pqihxpRg9kd8ReH1tmk8",
  "key13": "4h3vpeLU7KDLeTWNHGVNWwcxXxdZAdSTXdYm5GDTUQRerdys8wpScGw3rEhn9hwXk8DDCqXUq1Zd2n2YsGSZSekR",
  "key14": "2riPiEEPocC3X7gyAeKBzAYjotgG8B9ybGTSYwbkNYEtancVcJUvdy7LXj1ubRP8Kf61MSUDJXCS4nNqxz12rnw5",
  "key15": "5E5TD51ZcDEkHTnurEGqRqT4CiYCJpNYgbnoq5R2YVkRr4FRZeo8Mh9sDXDMHuXg1dwuSD5B295qVSuCZJMopM5A",
  "key16": "hhCvREYKedkhDihCvCh54pJ4JrF7EoiticNKkhE8LdhGoqEvCPotfacahLoVFjUpzfidPtze1d8iUvgcQnrvdFc",
  "key17": "vC5VHJtMGEPDLvuGZxnYYrCaJCGHPWWDS3VehQxD3C8tHJ8gT9m4XLR8fiHMD6ZZ3HmdXSbq94LLkXt46mhC7mu",
  "key18": "2eLFw2eiM9AZTAJPuDVdQvvYd81vfuYPTmmb2svuYrFNsovHsJb7jiypDMFqzmQWddLdMrehQ3VKk9Hvv2gpHvsQ",
  "key19": "3BBgRo4dXHe5vv9UiVkSZCaYBitMqXtmsdqQgpuwQwjPxV5Ke7ToDbueQmLiTvAa8jehdL3VZWK8WtK7EuyQMEx6",
  "key20": "5LjkdVkMnQjjS6kqbmoLRes5qoRMGGsoTdvgbF4N8VXkE7dw6yRrW1hpBDrVsT22BTsiBfrKrjuS62c73XWuDR7L",
  "key21": "piczdsGT6Qcyd6K73NBQQBPpgYHT62VqDV3fA1XNnCx5uNeQBUhTa6FdDgSbbdDq88NXrYwcXAgh2sWeNuvTNC3",
  "key22": "2gPGfLU6YtToZtr4NAzNCPEarCSxzLZeKYiYTKKXCQV8FzyGS4QGkX8ZHNWvUBxFEtN5pm6hacdJSjFGnL9rJa5e",
  "key23": "3onFVozHajYUwLo3zfSZrMmQVD88TtGgyfDbj9E1uGEWyTfPfvAkvytXf1nqxqy24Zurhbjed3Tgkm9Efd7yzb6f",
  "key24": "2Fq2zPT7Eitp5BZj3HQc9vdZdpHb9iwm38eoeC173dKNUXDyyoWPWZ8kuDz6kf24g353beeWS12BpZrgkTUhyHsP",
  "key25": "3AHooe6AYPyr2Nkfng9CpRZzQxP827sLSCtRRxLkRx1W9FCK2i7wiEPFitxQdxAZG2kry6rUn8372UeW4mKKAJiF",
  "key26": "XWsevMmDFvkTom7nyxLRATDzYF27YbKonVF5SG8uKFJTSKpWq9GZrzD6yGVFapZfJL1ALekeBabdZ51GuTebHJP",
  "key27": "58f9xhfpwavKohWM8acjYBtQ9UGLkAsuLv37UAuC9erLPteSEw6v9g2dt8yhZyqKXyNhwt8MsRccL22ftLDRUqXD",
  "key28": "2LqVoHH3nF2AeViDJmELsinRs6bPuN8twgHeSfYBeRNk5cQGkETk3bCjXxGh3ir2AjcnSebajrAfxNdTZJg2FbT2",
  "key29": "2SoHtUzaUbReA3n5JqmUUcYmW9Jt8kqTF8RrngsFuqoKDGqyh9wDSgQ9MShKXGJHDN2LotaMC2ofqMLAPipmQqnb",
  "key30": "54NEa4hMcTf2ZVacvD4xULJq1DUQMsR99Te6V2LM89Nc3NU2KbbGQB3aCbKqgHfojLb7VMqDFz2xSSUQfMD6jfZH",
  "key31": "4kiPVn9784bbGGCGxgA4dUpN2Eykk9sepsAm9bD7j3DjA58DBvp7LuUTJh1f1nNBaevcSUESCLBiHKmMm5eBSgAy",
  "key32": "2b4Ndk3vCcXPosDCpj55gwq9XkbUzodiw6NbozqPZBCNSHVcfeNnyMWe1fJxR4fzwZ5rL6rij9D5qTC3D327VgCQ",
  "key33": "4yGBec4zgT9WLgy12anFCqQgqsELmnHGcTrV5UsJHkY4knbbU1km3N7YvK7uwyreZxpp1QtPcXG9M8heexuXhFvk",
  "key34": "3TgChTFR4Vf9PVzpZd3yFVmoaTU2sxW265swjG6LhKqi8LAHCTsP7VkA6o7A4s3sf4zeADbqWDjcvwxxeSJiEHof",
  "key35": "3evvSZa1Dhddy4bx4FswbzKaUxeaT3f2b1Tkj2jpSynwsGjYqBKQ4dkr1rHnGTnC7tyPC9915Sd1Jzwd3rxUGXZp",
  "key36": "5ubt7RadT4RjgUF7kJZAst2dwnh8hidAc347gMExkBVwK4X18CSKD7t7isUi2TyiXDEQxv6CA1UdRFiL5gxCFHnp",
  "key37": "2qqyPyxrqJDQafNLx31iMwhZvzRGVn9HxmzqQHJTKcdSVLKvSP9bZFHVcyFcMuMqKHqFRYVQzC8wqYEuJyAcT6RC",
  "key38": "4DCPwuCGUb14YFNcg77gk1juJLX5HK8juJjPrVDR2cq7Abi8wv8XM28YNEFPGCJKRKmyGQcbeTc3drpc1q9MdyEP",
  "key39": "637N48GH4Fw5wzJAbiZ82sqeXMnotxTQCUWftRWZVxeBGTJrd3SNyDr6oWAt81aeNPoWd7fwNvuk6p5MdEMStJYB",
  "key40": "2By3PW2h6ZR2wK8oCHPtr4P4zmfAaA92rw97eEdpMJxKzpV93sFhjKbzcpBEL6B42x1Wf4T8gD3WNGQBQ7VSBgLe",
  "key41": "4nxxLQGzsZCyiHxAJyDn3GRko7otCXvivtQZwnksnmMF48AoYeT8PmQXoFm7vwWuTGcQ9PVDQUieAzeFPo95pQzX"
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
