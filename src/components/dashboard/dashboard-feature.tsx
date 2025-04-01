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
    "3xgqymPJTuBGQAMxn9FugRkTcm83qW4Tg2KHiabVnqAJ7x5vW5qpXgziXW7DyCpn1KjaoWYioSAiApVKJstZHDEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMRfKoMgnJtiq7X7SzSvG9XqmW2msBK7W7MfihuY9RBpqYUuEhqCvw2Ya9E8BZ5A3DaSnYUWweRcTqBLxmK6nhw",
  "key1": "5ijub7evTq85g6ufPiUfM7aCJQuLAjV4uXpHqpMuE865Tk3JJRYbgbpBLdpr3EgcWLs4njZENLvNuH9srwAouL9X",
  "key2": "5wQULp8X6ucM1ZpEVJmbPXbGFcZ9mDAA2qnSLejqmwingMg8RBttq4d5RcyP73LMqL3qHpkNVwWiJNckXLVqjQBe",
  "key3": "3UT3wbYuVfvjvgod5DsRDaFTrGBGphj65qQ8VjSB27GX3WCZ1cyuX2v8yDUuBNLQKeHPWrJvXWi6MoNx3zV2Y1p9",
  "key4": "Awd9Q9wFYEq23xRbubbh6UEArCWSLc2Vsuqm1kzsRpYiwrYedshpTDV7Y4CcpqKkVfrVZGPjZ4G9xpLwjQZcxfm",
  "key5": "5jwe8m76ErJkYduESXqUWkxVDa5coBVoiAw3utyz9SPJGC8oD35pekEeSjfNaK1kXZnNzzsBxgFNckyWKE2hmmCZ",
  "key6": "2EEk592ZMPsNMXGduPDQGJdnTkcWfuXALM6H4X37EhhFE5AwBiwTzYPd7e4TVniXGqbhBt7u4PHNuKY8Je5oNCjh",
  "key7": "CyE9PQSmybYVUHdr55kLnGsi8yF5dTW6fYCBwnL1f1WxpHNpW4FgLX5Hb73ssQdfS999WiXS1twsjDCfAE3Xr9f",
  "key8": "2QpwpCUsrJAXHJPFufSVt2KyZHdtdzsuG99MHi1NVweGWb8ZuexpF9AHXgGDi4GzG693PAadDMERMbnVMqXdWaHL",
  "key9": "TFgqAXN8v9asiwQf64ZsYWLi8dLBSKdr1ZWLjwkxXJBf8F4RTrGFkjCX6RCPW2BQtYtPu2NwMts3Dvr4J4B5wbm",
  "key10": "4brFJZXRM5np24EydphbbVytvSZofntmPh68p9i3cFj7K2nWosT82av73DvpVMo57MxBTwJUkQUPgmAtSHdSaRHm",
  "key11": "2nZ7Z1Nrrc4bpmudbqgaJiXxgna52krMZaToeY16uTfTFUNXvZ2tPbA5LFRHgwGLMoaev7mV9FGi9Vd8ZUpNkwMx",
  "key12": "KESjoYRFnemB6bXtLFiKMtjHiqCb2MuZDuQZBo3BYok4dA8LzW9sLPGHCajo4Bg2pPLHE4zPJM649YjchCuscFM",
  "key13": "3YTse8WYDJDyMSwPHp1ws1dVUNg6Fx2n4kHrXz4Mzvczu77AtJ7zqH7hhFGr7GRpuYWUNCTvbY9o3sFUnZxSEoKf",
  "key14": "5xHMm1MARRUd5oqyq8vUvk3ijvn7RamXBZZsgrcwfcX988ubK6bXCjKh7hR35XxVMiU3Xtdg8KXXTu9Kn47oH6fh",
  "key15": "xE32yNJUpD6yTKef2QGXMaDkaBA68W1DHUdFZuRfFUDxfrtc2MYSxFGXd9v9TDjhkbLguEiyaL1k9PT3AZTafHe",
  "key16": "4aMTmD77esSNMHcnxfBoNq9n2ZdB7JHdNRWNXWBDFCCS4ehhvSX3x9CfQP6epvbxMjSjcLeX99reVs6eDRpi2QSq",
  "key17": "GZ6SSGNakvQfTPbfRZMtJfAnqSScExM3QZa69Kw89Xux4HdZcd8FW8VDZ8LAf6NUcuopd5D4jUz88BEj7DSaHMU",
  "key18": "3vhceSwRzMBcp7aSCXQzdbQxDeNXAH9hXYbAUhhbBNmokdiroJo7HNp4j1bQbRMMDq8kzGCgNUXVSVgXXXcN8Gaj",
  "key19": "2APXBinN56GsF62w4SA4Vq3ciASeXR8BmFoZba93yJWk5Gjr44XMRwsZ7x4awUXaXFdq18n96rJL4kmwoMdTjrF7",
  "key20": "HFFczD4WjD8MGgBPsS7WvYcCtGYRdGTzTMTZ1D7pM6s5rEzCXpD9mJGYNLW88Zmhmczq7YD1iLrxA4f7wvfvLJj",
  "key21": "3FAi3n9nekqA1QP8sMzp68j6EyMDCrNtRKzszUbkdHzvmhYD6vrQAw4JPtp7mhxAaFfcsvi7MZALKhDYv49mdNpf",
  "key22": "4FocuF4er7rCfsuBQSDncqSVv4yitvomFPjtC4GqijWqu8fD1b8LeWmjZSsavDpG5jSnZkbq7irDTX5abtki5icc",
  "key23": "2Vz2LeAc1FVqwqVF2cDqo6QtWexoL7YzRsonDEK7jmpHDorD4RiQfr1rTtiPMaAVtvP4bVXeQYzBGcobTJfsMJ2R",
  "key24": "2xMza4xtmVHRsNMswtJg3ZtEypvApqqR37sFhufDuPWRG8P2kkTutbJPXiUXdxLh2ojhn6n67W4FP5gUeEsviWuQ",
  "key25": "23KhPAr4n7uUzmoCRgS7peG9UkgTfnhpPL1HM79e1oM4fbvLriNfRoxY7C85u3UdnkX1puQhWE93vLHQBQXC4ZWX",
  "key26": "3PzZzGFhTBvZKScGygiQiJQsqzqFf3BeunLzat8RUSwLLXxfMbkSpYwhbr3gHXeR486fK62rGhLpMLrHRjXw42Bj",
  "key27": "4H79kDgV9kt7KdehQhwck1UfZg1DYv1o3NWu3jpsWSHSkHdR9GeQUyzGBspng4ZhjZ4yiV8qiaTkRc3AFzcGAqSi",
  "key28": "5TtEVCiXKyWqJQZat9kMYBLviGXjxDDU72WQT5ZBEnQwsrcLMkQ6xp1VvPyi1eDK2uGAS55VuYD7hLvc9BdjgVfx",
  "key29": "5cPD2b1LBBQtMx3ySD8ivFm3QCQFZTFi6CANGzNf22FSr5yBczbqQfd3PaRGeQ54JiFTZmfcwL4YCWKHpP1hVmuA",
  "key30": "4DSRb5XfbVDXKVKMkdEUQPC8s3UxZwu9GG1ViSbTk9ssG7ezEaUqsVZr7tcwYeRTA9A3fQgQuqZwQECGVt5veVak",
  "key31": "64bj6mNczA4vQAyaTJbobEh5zZG9rZjcDpxkEC3Pq5qvvm2pr4GqEK3rn5pecbpofKmo1G215xdb19WUACKxxMp1",
  "key32": "25sqrYUdaf7sqYxckpG2TKCbDTC4fy6v6FqcHhYNsrgN5U62yt2PEPJRXqjt1v2nmkBCXxQYqWVYA7XoqXptvDg2",
  "key33": "3qzaJZXfZo4eHtsuEBZQCbhFxwDsUH5v6gJx2W91JjeGguz5zpaYLiPL9oKBSSv6ERdj25NhmEoiYEdf8k1Lze9s",
  "key34": "Ku4gPVzMrrQKiNSbryqoM6o1vqCbZrE1ZwqNfjEv7MW4eNbwjUMc4xH5yKVuZqmehmZkBto79rRsYXzzwCssEZd",
  "key35": "5qoAFcaDH2N29AK7PN76Y6Sag62JvDqPisNmYR3NvY4wDU8QAXLrTHVqqFq3PgpvhyHnbVaxnD5HJ5hteA9jp1w2",
  "key36": "38vAjVkNNA5DnK4fathiUdEFirTDBvvEnWwQkAoeTvvNe7QC6Wgnzf2u7bpFKWnBw6NfKc4BFJhAbUu4X7ZEk5AZ",
  "key37": "26YdZY7VYU1L6YeogSVLokeFZNG1oySjU68Cc7MZhUhSjviCQGQKpmpnpMfcCNxRAfnVvQdn2TBVgwb7SGAirVE5",
  "key38": "2LpEvSRndW4nbfTCMDLgtksmY22ymQsYAnC7QXK9tRKJFLHY7mgqYptv8Cp1d9UU8PHoH8ipM75hzTpztWAppKGt"
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
