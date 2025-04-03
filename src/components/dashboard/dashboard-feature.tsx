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
    "5B6Mho8AxTefzFCGKk8YqpKFXnpYbYg94suvPQYBpLtzDeyY8GyQgzgoip1D3ei83y26W7xUr3NUkYcBzYVnxwDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nkRwhgAK8dEAQaVfde7ngFnTPnNoSmQRNMRALVE7tcHccWwoDdKUg6Rteo9QjhZ7JQjeqCvZUrYc4tpG7LsMKCg",
  "key1": "2TdEgs2fbrYLi5cewV4FgimxayZEU3eSoPAQ5S5Yy5YkQjNyXikTu35ZwHTqfm8W7fmAqLVUzouCyrzFaQqWAkCE",
  "key2": "3saurDnhsNmqBTjX5MfMs2Cyr9CXWNGN8Et6TXX25Uk1ccYxoTJfnrTzevBNPaqSHsmmKW8ubPjgUbcccMdvohE3",
  "key3": "E89DcEyAzhjfDWLTVmU95diFRH8KHLuaY4FYyHH9NZtvFsN99DRjsCnyQcoLsyBJ1HZT1yUuQmN3695oZYCgJWB",
  "key4": "5g91graTLmTtDVeRDrez6hvSGKiJqZUga8cHDGx61dJcGjYnnuPdDYDPtZbUosxpJzJcxgmaWyJ4Y8oebdmbJTTi",
  "key5": "2HCUZmkkfjGUM4SWPVy3w8zY7Pqi5dBCcwLv7X3de74KPbHt2yxrYFwTcvhU8Z62KduqbNDkPuLyXxi3bqHoEtd",
  "key6": "49k6WuSwbzc7xjqJbb9zqXMDptBJCUdmJwp9bS9ZqkkY22SHcyPjDEox4RHbnQUxkBqRVnDW4BawkGh5m5JvZzZ7",
  "key7": "3S3FRLEtYQ9gpiwoL64tSXN8wrdRKJhiwKqgZiGp1t43f2Kg7URBXNgvVCaAd6Ym4J7gnGhkXQSi2iRQhXLd38fB",
  "key8": "3CK3d3jepFEf3aeZpjv8cc5eJdTkW93cdPk5jAAEH1FRjWC12paRwmYsBBGC2ZuUaFhooqx63XZ36ApcLVNAYWXR",
  "key9": "4MtaTKdSLPqQEqKGUrmyu6uJUy7LoFHSvZhTvoL9dHE57JqmfdG3zdJt9HyswUuTpddKniuGXb9WJyeRRLTNfJYW",
  "key10": "MmLmAoVD1WnuKsADD3S6eRcdvmbKYDHrhgPugtTMTzCHcYLW77Tsg6MxAV64eTVFLSWiP15Fqg3HTmo7sy9RCRD",
  "key11": "4jg7BcBPNUNR3WYPKfL9mUbed8PiTzGHLWFFhZ7WQpF79yhBX5FVG1DWQBayLXdb15QGWFqZthtHL2baaDEiVwwW",
  "key12": "rLmD3t2m4nx1jdYaBZxsxZRdFmBojUo8Kfmaf6pJUJJv3qriyQJcWX359BGuAkCunycrZq9KShu8X3fqzrfa7Wg",
  "key13": "4vc5najh7K9dmB2uHievwQhyWvDfEkmQa1gqcyEKLpPpzmeEHDtRU38jvqUF3aVzKwahpM8mZqnPKHNvqCChJ4sM",
  "key14": "2iyt5qPkuwGhT4DRU8j5kwGnThehNPDw5mk8V2mDoyUsEq6s5EwLpqafaf4SQRHY1R2BrzdZzJHVvpYFaq2jkUV6",
  "key15": "o6R3tEaBgc7MC5KRndMffL5gNjfKptmfjNfunGt84X6xRnqq5Sao9Kgqovmc3feGJZ9YThpxKg83fV2UELpnmM7",
  "key16": "63tKmCq8K4yin5UjMUMFGRB3VTPKZw8pvEDemGFQE7YgGZjKADZCn3g66UuUysAQGdYQmBPSmD3tUqqfwANUhUac",
  "key17": "3AGVnA4n9h6sEiNv4U72x4n9QkgY36xdXYwNQiUvps8BQadjZJFZNnTT4JgCkPQmCy85bVJzybx4mU8ywCHUhqv8",
  "key18": "2ov84EnygrA7BCu2DDxoLiQR6yEaF7Esg1LgSZFtq4QY23JzyFGsxtHapvnwg9acBAjeuc7yMWue85zZFeZY9a7U",
  "key19": "iRhbRjZ5YAzsz1UZe8PyS9gxHTvDYsLFgXMRkrcWwgCarRApzaKUtmMyE3EtcJrx24J3BgxZ3R4gTyJji6vVN43",
  "key20": "542TGGzGP5fYeheeFFVgykpEuo18zNWcgFtV5znyb6VjBFwbgirTybs41Jgr4oHxbw8kW9TjiCajnDTYwczTSGXW",
  "key21": "B8dB3enqeY553oRMiAohh9d1kmboff7F3NBPzoQLSVHUmYnUXShxiAANJsusLgnafsbUzTNNcisSdEafmtZTaXx",
  "key22": "2DWqYzY1CKsyHTsKUSaAJb9iCxx5pAS4wt9ShncHPxjxAi7WfmqhqWcp418PYrnE2RB9iMApyYAZt26yYJPR4TbN",
  "key23": "2GsZWGjUTAQ73Wbk334Gzo7QDkqR4RhgUkVrUv4aDxCVTKMw98dtythCT754wdWUr6cwJLhKEoWmYhKCvozsPmjW",
  "key24": "8MtFWNRcocGsyW7U3GBsV5dDo7bnk3KbQiPsdBtVtf5j3QcgGLFmGZqoMG4VXZk1z7a2ANU1K11VQwef1dSLyzo",
  "key25": "5r72R7YSECgqp6C9LYahLvMFqqCt6QRwFxpEBM36JZuJncNyJsc3jdD8TDJ38mq7bx4jKvJFLtPhqAke2pRckrKj",
  "key26": "5XrdTq4Kxo3Rp94UTWowCabAnSZN2rjAsUzPpDPk9WDD5sgh8j1HWrQj8FBYYH1RiVagzUeVgjcr2VSmYLDxGwpn",
  "key27": "36isxfKx7oSVfj3GescqiK7iMYSe5BUGd8sywpF4kPp4Uem93NkJWTZDVa2GQs5MnkcSrGyGr9zb3LxPvZQFscMC",
  "key28": "ddCzsmRQBhtLKNHR2tXub8P9MvsuQRKpVAyG5LyKdtSYrzunQr8sPq7JTro6VKG4fbmqXuTnRQn1bmeX6P6JXiM",
  "key29": "22U9igryskub41g9DXB9QXXnztCvYgogNFyMVsWfUqKvJAjENeDVEEHD2H7pEEqd6ws64VWa8n8CjBQJTEQQcCqj",
  "key30": "nkAjkw99t3LU8tSPNBdrnFo9xHy5BFbfixwxuLf7ZaNwdwXE4Pa6RC4pCyxx2Npyhof36LhTsZQ98So1eytcRfw",
  "key31": "MjsLfuC9FhXBPS44LjTbvzqHrY1njqPHoBR1k66qq7Bu77tPyU8ZpAqAHSJFto83rLdeFWmVhYkXoAv3eA9zzG5",
  "key32": "4an1iPVsaC4kiuRQdaGdNcXrqj8UuYsJG7tmDwAWDqmyNacvRcMKA5Xoe7gB5ZVT4Kw1Fb2d7XLFxg8UgjNVAzpd",
  "key33": "2NoKKkTfYSJBg5rZugpxNj2CQi72ARnvu2rXCjNZiZWBFPCutAz4saKw7rB25bNw8uRfQNtwrUarH6WuCW5h8g3e",
  "key34": "5dZFfNLeBJyo7evfGtFXm4EVRdb72oFbBBC96Upz6k8sk11uyXZ8h1LfPp7cX7jif3QzjVmd9sKAJnmP5QpXXdXm",
  "key35": "43oDnZzs53swXTSNYSUJgQVgwMGVTEDrX7Y2BTSYHbamKCfrGfuJWpoqRtBPq4Y6Ehu3VK1nJGUgmMiTQihYcb6b",
  "key36": "5BfhN6BSnqMkAAm8bqnSiEk1K665Lvhs5EZrfaJLHTJ694qgEteCDxr1Z2Yuvqczz8PXwiTisHwVZC9isKXAiVZb",
  "key37": "HcrH8coznvoShvnSETbgG8i5nkiEjHbELKCHQPLUqGLrpcvyTTgw9C6yFGyKebNnidBP7HZcRfdVBX7H9MM5BdY",
  "key38": "HUEXGurV8mAzQ1ep6fPNEh5djPBkkm1GHDcrqtiKZUuWHWn4hy5foWkFfQdHxHWuYRCymdp91t7Nf2PpCDWTyEv",
  "key39": "4m5FdyY5SdxxmjgbGV61QfpwiapmJKnZLcfmy1MAb7F6qqDe9m1HR4doELd4TLozLwSuZwfcdGhwNVGof7L6GfCh",
  "key40": "3sfjT8N3U9c12caDqxPm38FezCE4kvYnQKMrty1WHidmYrK9N55F7MDhyzGg6NXc3RpCKfA9Xcy2zDnNGyiWokg4",
  "key41": "5YAxhtc1PhwfUDSkXs9Xjm7LJaWzRZh4cLEk8UJdPitruhVbw22brD98nv2wEKS2u7UnSd7wWV8QvdseA6fsfHNb",
  "key42": "Jwxgu6Ujw4kPqiuY18FvsZKTDHP9pgrFzZxSN17D3w62WFERtwa4nM3tnyN2JiSFGMX1f6dczPAZTnBWDHpk8mD",
  "key43": "4FggkZuuVEZNdLNg26cjPpwzLcsFZ2jr2j8eeqtjmK4SZUZpD915cwUZ4aQPUQKxs96HfNkeWF5FqLuBwDmnZS4f",
  "key44": "25T38dV82jTQrSNdeR6vomKQq22X1tLGZxq4WrBfWMKG8piYdUrnJMEens1TCULtpXb5imdsNDan4zp7T8R2wcX3",
  "key45": "5xVyRvBUZqDH3e6dSnKBC64FJHsvXrdHmsMX19v1cWESKHowq3RdxyQ66hF1FnAjsDKXfLuuZeTCQjf8oP2qHR6x"
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
