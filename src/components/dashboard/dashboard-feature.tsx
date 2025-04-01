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
    "5zMdq4HLStb4QSApTWPLCzzaP1nRw2ftUL42onijiEdr9xh5pecmzrqzsKnZxL9XuND9ACGEswUoZz8DbtxjPH8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b75rFoqWm1hUEeagExw7W9rJs2LgNjvz8UbqZharEA4arG4iaztE7vAXZnnBtaFCJES1vBbPiCMSJS7JLbLwzf1",
  "key1": "oRg6ha62fcPfcVHatL7YUdn3gpZMdopbD7wyxc2nuGKvKHoJ38yyEkHdz5UhFQTR7t7BTeNEfTjVwBEvrBeHqQ4",
  "key2": "5H9zE5UtNUHvsi1XTffFcF12Kceati2SN3rW4dQbdy7Lj5nKsZWvKb3pQXJ1mm4UM6YmgpEwerEdQa8XPZ7UiBi7",
  "key3": "2cagmQFV8zQpuK1hWYyMxoXsR228cW6SkKCHNXzr5jHMmjyFMA4rMgiugXNDHeMhsiz2Cvp2T3RQkfToRtVHhwNZ",
  "key4": "WWMYUo46AUTBwGH9Pp52JB7GRLqzNrLd5T7LYdMwVQ5NBsuWYpyK7AVtW5DmN5cMJ7ieYuYkzsihWbVez2F8F8V",
  "key5": "y7Qx684pDonqRJk8NSQJEkBSsHExJpDME5TeGrjdNqPwTp4NavWFmsfkDDkzuJt6G76KhoEwh8DFrm24cYaEr81",
  "key6": "4xMNVt8wobKGUjfkCHTbGHfDdtrVxdhuhR4ChZkFoWJdmY9hoa3VEyycAVUKxrZ7Zs9Ch5mfhZGLJFtnfWYkMGVU",
  "key7": "FAaNghGkzadmyj29ULa2gLus3K8wU2XRfvGwwJKrhTo5348MitDP2H74qU34Ss9dBvXUEyyTXgGyweowUifUHJL",
  "key8": "66E9E5ZmnaFHALypGhRJCLmj8XGxyfzC67HUNzoZ6APf5xB39qgnDPkGNR2jm2RL7DtKqraA4Y25UF5Bu8JfDaxu",
  "key9": "3sdj9nPB2x5quzYeA9y5Do1oKKC83r9ndAEDQeESSFYLR7CgzoT2kh2a48XtzaQNL4b281Hp6z2r46NBvd89U6Cf",
  "key10": "4KqrGpJo9GnUuXXacHskY6vWxGyechoYmpCKrG1UzWhXHofbP5YpaHNJKnpeBCeaPdDMAKbv86wTcpV9DaXaLNSp",
  "key11": "5HNvf4PJX4GJveMj3VsuGRb2xrFbUymBNFCMBXXgizugfmYjphFg88s79VxXDYmAd9tGX5cKExBGortNZcfufxfT",
  "key12": "2navPVnBLLfBVH7MNiriBaQTYfEQfUuJwHcWFJHnWRdbLkAGJQYceGm7ovaDDsxxy7zxrJVJr6t4qzzByAkybgGm",
  "key13": "s14zhAVcrMhHvP5uMtyqfjokRrwYyKG1MJXfDHx9VZy2tjJmKGu84YMnevTCfs8yNGQtbYAhZ3cwyBTYotgVw9p",
  "key14": "4uBgnwZkeFtXGcqhdw119C9LH3Kbt8LYbknxoCp8dnKHQX6ser7CuGU63pQmZ5BWcyatinQ8Rnmpm1GybGeQdUvB",
  "key15": "3MDv7WhYvGmuqzUm9BVKmCfHkoURPnecnMG6GcSsiafMsge5hPrTeUkNhAoQ3qDyLX7cBfKsHFNKdPuNVYyDD2zM",
  "key16": "E8st49uW47AHRV49r7PkKg9Mg3F2jkh7Xmpd4o7MZiJaw8wfSaaf23XVTvSXY34tMWQeDbxt2cPtmrMkSgApMT6",
  "key17": "4WBqmbjnbqVd9LY95VZDNkKdKqDeUhbFfNrKiWP1RceCGNhiTS17wsHShoUrvYqmQk8MUMXjyaX2VUPy8CL1D4oU",
  "key18": "5TyLhVHjBKR3KunKhzwzXwJzcMLWCq2RHJdgmGkkbdwvRNUyBy74pZUTzVQaRTiVVgpSryv1sniSSNMpDNKzypua",
  "key19": "24mvLDEr6i5tvanPMKnajk4yZpLNqxqpVoM99tbHRttbEu1RDGxcA96n1pZbeRYC9pGD777t8otbteDT2MybYrYV",
  "key20": "2jkjxq85yZ9u9KjLQFncd78m96omBE2tdwrGX5DMRxesywtAxQwT3bviH9r48ouBJ3xKD2BxyUhn8gaJQh6kurEe",
  "key21": "4TruyNcbtmcxoKFwhiNnuSNrfNweL6NfXmqZneTe7XfAwdTfreEu62oX2xxzLD6UYkqRmah57yQy78FVZa2hNT8d",
  "key22": "5xUYpPAmvJ99FpoM6Rd8PYQrfSvKr9DrmqQxX84EiPv6YEVSohHmKNhUDoEJyZQosiehVp6GNxWuPSYs4vDDxZAw",
  "key23": "5JUFruRMmkiFJPj3Rjhd27eieXEkSg2XEaH9rPF51g76RrNj6XQkeZdk2FXywiLrxNyDu4k3YTq43QPuxhHboLji",
  "key24": "2w3bHbjyLnMr6qeu6umBa8vwmjXBSKvmUwqNXNwmvocmuHP3orLFEexE4ZZDoYCK7tzVasRahpb6vrB6C7WBd8hU",
  "key25": "5CMadPDHudbpGpV67ggzdxRCseQzSBe6MfmdcmFmt6Q4aM2sH3DjHDbkyEYxVYdxwzqNwFDcStzBqAv9yM1FeFwq",
  "key26": "5Jk89iABEhoy9px7F5psVHHDsm2RfiU6oRRX3pjRzmjwzsCmm7thvbUFUsEnb4eYzwdbgU4JyPY4vYydv4dqTGcY",
  "key27": "5JFXTNde4JCtx7MnUV32WXCKydMaTCZsYujjBF8uWTbDovyQ6pnpcykVrtu7L3V7SEqwrEyLWgeTZW8mN3D31LBN",
  "key28": "5bXcX2UQfYUZZcgTzirMtoWVZ8SH5QSQK8FcRnCr1HRcsNgFQSV58oXHvpSfjoQPoXjQW8TEuGVCc6Ri3yJHaWkL",
  "key29": "Mj9wpG9EZj8z8tV4K6eenQE95LP5kKExPK42zVsyvftGumRthtUJ8foiNSLcoE2776pv7pPBRkEUy9XjsqHWX8h",
  "key30": "67JEf1nDH5TqAsjpnB9WgUgjW7SUdmi6htxEjVNQGfHCDi4uSifzPSdkKVk4Drh7a62mm8pe11puek2QoF4SBkyj",
  "key31": "4nyAvEUJkKSo6SrQkRA9e2m7CP1kyyU6EVcARscdrJEqVgYDXh5ykBzwa9b74qrDLkpzjVAEniuHe7dyFf1uqVbA",
  "key32": "3dn8qyyKrec8waFEJvY6H6Kt1jFDPBz9CVdg96efxSUrQon34yFPiRgQndocoFnw8haXDqryARyGZzFyJVeVkv7W",
  "key33": "4igpfuTzrA42booqA7zt5Sw66DVH4B3YtzB1UJM2UMPQFzkZRbidA12J7MJRR6UfAwAF64fkjkefjmbsiUqijkiC",
  "key34": "5N8XFq1XFHbvnLx3Y9K2eA6NXrD4hwc4KM9k3iWcmFU9wq7ioMkaS5q9upknCV56JgYGXPCucyWCaA7z6VmHWYrk",
  "key35": "iibEfbEbmGSy5k3TWhBn8uKhikaSZ77pNifqhNzgkSFjvZmLvPHjKtLMgob4R7fA6NfwsMJEiSML1qPUjHfDAZY",
  "key36": "qtoQxkcJhaP9LQMhV27HqtYAxVYiQzBUxMpePmwJtrQh2tofQH6Xtsi2HXiX7ZyqjMLpubgoFjUFivbiFwfV7h4",
  "key37": "iAdW5WoaK1QtKFEx5q14vgWERAmoAm1Ysuyx448GLoD9dam8xwwd3WyvjJJwF2w4wEAcdmfC68HrhfuZE3upfDp",
  "key38": "5JsSpynry7Bx1Hzu3Nh4FVD2VHoygmmSHzHAgH5WE9xkuKkZUN9JB5KjRDiTjV5ZgHgmDyGAfZNYKPghy4i3sEgu",
  "key39": "2LW2QZgwpQWEDNEqwpaPkLnLBnu5LRVAucUaxbSmMRvTcbcttku3x7oGejDPC4iRz7qMaWfcuLhfqRMTuh882fUo",
  "key40": "3Jvw6pdfSec1GfUDuaRX25Y9hzGm9uXCdsiKHhFeKxFenLbhCLZ7yFaKBL3oAuE5shtwFU1nE4FRaHqchNy4AJfu",
  "key41": "3VJqyumBh12PxtbpM7nxPr5MNG4XL7F1wYRSMnLxBAgrEzpw2V4ksjhd3rY4oP3SMc5Zrv91Pg4m5nPLuA6jspDA",
  "key42": "47obeJbnRmgunRNxpFd6zRdtwzLN49dvpe7SrHeAAt8UhJgMAaoC2XWKJC2fWZBeAZJFYoMNuQ2SMcYxc6xKPY3H",
  "key43": "njGiQ9ijnUvy45G1L6FeDV1QnemEngkpfrSqZvvcMSjDuoBHwKwf8sowLVjg6FgSiApfBcn8b74Feoxu6N5M5Nt",
  "key44": "38v8Hvb4h63dRp3azSHHKe7bT3odvSG7ZHbf8VWZe1ZKtH8ty6D4SMFADUnaeV5zbqybpSB9nQ7aRBFJz8nbDgkv"
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
