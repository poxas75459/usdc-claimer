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
    "2nEn76hTyq43FcwEZYGG5NCagrxJXW6fMeiCjuehymkktSmu67dvVgPC9LBb2YBUNDULj8eFgXTPkPPFc1Mpye3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JobdweJE5PJKibw4YuqWNkfjaePAWt57U2YhUuns9HBr6UvPMnDwN3HNQ9ZdT4GvRJRberefRSjUvC1ZoueCntC",
  "key1": "qwmELaN52zrhtAjBWx38HxVNpHdUYCfPMuYX9XebQ7EfCJ2n2KUqaaf8EeZDLVwL9KM9LFgK5j9uHJALaq5853x",
  "key2": "sqHSqHCebqDFqGjVjKikCQWdXD5V5hSaUz9gFpUN1ZSV5fG5V9fgG2ibM6uvJtZceJj8151zA7K5N8yPPKak9N1",
  "key3": "3HkDQoyoR9xByTLo53xeC9i9aaRMYwXQizDcVdDfsQeLNB6SZ3e7egAbPmoLD1ARp76i3ST9o9vibNhQGZSaNDy",
  "key4": "4Vt5EztPtPmYpnhezsekGvgXmNzJ9UYke3qeJVm25FJkNb421T2tb9jKwBC5x9aHJ3ib2c4DhSR1JJqQU2PTNkLi",
  "key5": "5u9rrXP8TNu3F9yv9MukWPT8ce8ZEQUJGx1TteqgjKVgAwzWowuKvK6sevgmCDjgXjKpkHAJcQYJVphNDrMA43fr",
  "key6": "5bDmjeVQHUKtmqPD1uWkVpFy6254SwZUxT5QifgABHn1fFYgaK7u3xikfQ4HAoUQVoKHonKem7qFt8kdveqv6ZzS",
  "key7": "2p96aXJ2bvsGsPkYjSAd9WSi6yEaNbqnY3DWef3cS5dnRo2mLuxKJcLkuxZGk9h2s9boub1Va7NQB9TiCoFnKP9p",
  "key8": "3yDJYS7B62Ev8Xhnb2ca3WxwErgZrxVwvLpe27387k8xdj8jumHt8qGqjZfcKCR8Y4Gek15Dxr1jFLDT3QSQXEG1",
  "key9": "57ij3iaXVdJJuBP4az5H69NUUiLzcsMhpYyjckUR9oaftVFKpMJQz1EicbBdH9SGHoGS8865ZwKw4xqAQRW3rdfb",
  "key10": "5kf4LFGiPBHN44zLAx5s933C1XwE7HoJttnjbpjgoB7zzMupnyiPuR4fK6owMWLYZtpssqs3tzhG4PHVwp3qSHjA",
  "key11": "3gi5eFYFHnkSuPo4HgT2q2XKJXK3qhfrc9KQLQgdrm2LpUw84BX1s8oDDNxDA7qCskKs4r1C89XTUrHDp5pC3wbK",
  "key12": "ANx17f4zeVaMVo3c6JRNCrSXt5V9Da4kPoyMAtMH99K5MTHKFmkhdLcGrSLtFuHYGp4Nn14bVnuNKqu5dpWWJM6",
  "key13": "usuNaHCpTkDPnr4G4mL1NqZbNzYacEk8J9ZmuyWZToqMcHtSoSeoqGL5KFkvp8YqiSi2RhpToGxZiqaYgbNLJ7S",
  "key14": "23eh3uNfmojgTtJ2hjLvtnHSFgdQ7zDaQ69s6BDfEEKncSuDsKiaYjpbYcoKU88Xrd3zeL7szwWavzVVNErbXVei",
  "key15": "28Nh8q3YQ1sTKCjcmFVqtcJtKzgNbE7Xxq1X4QnH1WrDRf4YXmoSy4znpaKTrXVVnSV1X4NtLfSFxJtB4SYHp2RA",
  "key16": "5kz5aVsvaT1SK2uhBn5ZJ9xQ5xoaENYqEjfUPQR9xeb8D8LBEKEpknwZc2tyqpLDngQb9dnK7rH9PXKqeNKBRNB2",
  "key17": "4UYaUCGiJoRFPuZEtGKKLXyAW1FtSNik2jb1yULhpFVdMgLHcfFMXjU3haH17GuwDs7wuN4bSb9WxqLP8rP3ZteN",
  "key18": "3oSt6usbMv6SA26ohYKawkehCRywc1V9NytvmTv1HD9uKR8UUJdnCGKMnuim8W1EoCtvTfMukmpM7TYb8B9k6xqP",
  "key19": "2RRw7yffGb6ZnazjneaSyrEeZRjBjaqoCD5rAwJDYXsoMayGk4kXuzoAPGvK4LPPEmz4zM5X1yJQddPmHusNBiRT",
  "key20": "4rHSjYUcU1YdswJKxGBVAEQnMevM9GPx5S5P6gXfuspgoC8hKUBmSb4Pi9QifC8ygCw8R7z55bdrG22VJFdbgiyF",
  "key21": "3Kg1NnA5UMPCv1qHruZGhuHHoCMSp9rYAwMD97RJ8YZG5tNkhKxzRiQ8X35du3AuPJVJGZuRAd42ZaEUUY67sxu3",
  "key22": "5yASGbrb4LR3iPMdtGuySWHC99wjex3TWjX1CZ4bk4jwX1Vm4U5DsbVzwCdsf3rHofiLa6iXttFvSKnp3kquekLA",
  "key23": "2Q97LgU8Sepu4WtHpkdWBT91SQwkBgvbnkLc4B9kTQ9B8EDeNNj75DeYhgpKW914djrxFHm6ny4NvPwavWbosLjL",
  "key24": "4bLcYasd3bfLJVX6KBm1aui4bh7Jggw7bN3TSxWdLtSzLKUzmYK3WCWjESnx614G2sCp6mZ3MvFjoLCmnSUVUWuf",
  "key25": "KoyTLinaFtcUevPqB4Uow4b1DELYJyQzqVW885tjoRPQRVEsCPrjQH2hXnFmrCzkj7Wci5uyAtdecWzwZUeuRTu",
  "key26": "FohfAGHsMsxxWzpoTC6eRULpY7QjBD9jxmZow53iXtEVe2Q3RRPZ16aCsu7Ac7GX4JGQJGpR6wgkv7duc8io5iN",
  "key27": "4aT3CSRhSjbgFnpkbdQNb2joYpwtoRtbRTjVY4nUgnd89CqVk9PFzABHzFkFrpjZurdLWxeVbRG9BDgKoyFbm8Bg",
  "key28": "3cnkVbzv2TBRR9BvaSrHMG3BKstGhYLgRtfQiBMNnnBNT1fYDnGCwzJFrnX56ENBLnZ3jXYD4vb3cx98pVtfNz2X",
  "key29": "A6TeH6iy9YhXSN7Kn7UmHTLbnXZnuP4vddPZWgxBJmSJyZDXu8SUiDMPnqNBjZLn6t298sJFN7WNRMmuuSNXh1B",
  "key30": "3wxRpXAmtefhB5fqM2XC4sPmg1jRQ8MLY6YC7qPuDA5yQgRXCfFywBGA729Ya3bhJjcS3aiUs1BdFm8SgGNHNcnk",
  "key31": "5Hi3Np1WQZGWm9GJmGr8WMBd1515ufqv6bdPE2ZAh2W7wFnSrW3HUuUyyFyW8vSZXfRJF46GSFRRmPiYS7d1GbUd",
  "key32": "48KMtwyF4byKch3CaYiea6EXsdu4EsiQFbsnjKLFqhS8uUAnip6pvypqfq5VDP3MQ3AsMj6ZgVFCx4JAha9hozpm",
  "key33": "25uu269YgngN4YZD9B8tbwV9MK5uYZKLnt5idJ8ERNX3haNsaGaEpRA9zH8zkAww6hBuaDsgZb6J8jRHn7RWdk9D",
  "key34": "3CGXNHtVi9NKPfGdhC5PHCm4ftHhHpBFRRokoX6ddUdJUHmc1ex6agmWTQsdLJQXY4yhRTktcKzUHzPoDPggu1fh",
  "key35": "4ypou1xuw2WjETSXSwbcXWbi5sNqpJM7kUHEdnbn62U3tu8sAL4Kmw6h4oRbgt6uggc6RQ3N3adt7xTKYssHBJ7c",
  "key36": "4coDjwHSiySiap2sTEQ9ckjXEz377f87Y8K2cqDEc5ZwMRDjF43hK26RHutrnuJdfCzT4E9BgsEeBneo5DssLhKp",
  "key37": "2WKRZAtPsz5MDUARGH34UgUorDfakC4k5iTdZHT37yhDDvtL4EmBsrdXWr8G8i7zXvTup17ygGFDAvV13SqJnZdZ",
  "key38": "4gditz7NefahgN7RA4KE6nD1AFZDdhXApteSxbTRwXVRSuf4NRCVSnCjFohAX3nvQev7cLuzRG3dDdMiGzTf3wFA",
  "key39": "65kwnMfLC5MyF6z6JKSpyihMeezGijo4NAvNAN3doEdHNzBDsw1L8muCcj1foFiUBKFmRsZvXiRDXFMkvvm6q3tr",
  "key40": "5f38LTgAuY9TweHmN7scS6BcEq2X91EDzWRa2Ydp95WraLoEjiho8wUwpAdZoVQEL8AvVT1BtuY6qfdQpuLviwq2",
  "key41": "2YPHyDciMmRHkJWLa8DdtTDqFDdZALzv3Z3yXiBLpyvjTo7cxzr6SsbswTJ45PrnawywpGEw9a7WPXn46TM95VT8",
  "key42": "2PjEUqJuogfvWcTb1MkwMxezwGhRz6tDQXz3aeXFp2Tmtxd3whEGn2x6XMHYCpQGWGvTLmc2iEXfeg7ZNwBeEbAX",
  "key43": "qM6NYLj9o9VDZbcaPZW3PEjXsmP5UmmtpyzLgfkVSejXTweZjc81UvWuKA1rYdzB5KwfZMcLFLmyjvAnGGQmFH4",
  "key44": "5cvNEpQXUxwMmjZN4Kjk5PUArR2jfbDbzS91eBuaPmy28cR7Ld5o6u1zA9W9mBYbyrZ6h3Ggerh9BgDVtE8jFD4S",
  "key45": "5CKqbzSVaKBDzzeDbfP6NpfDXudD7rdBbGeMPNHPqTdNivXEDFC9fKJi9BYF4x1pJmJsVFiU7NVSEYenioGxhUWh",
  "key46": "3ao3h2SMvAt5hbdXokPscKA6xGaHmMAdqS5qrpgDNVWQBxZWkU4FFueHeEb2uoYuFNFJXeF5aUyGX9YhutKyLsJK",
  "key47": "3DH6aV53gehMfidCVgqcw2bpRes6M2sVmmiXQuLHBefo3DhJqaNd9HTgXWnxiPtGKw8zunriDMwc8XZLyauGRJaN",
  "key48": "3A5xPm5zvUqrB6j5Fmrd1YqpXjHFEh3sQT7hUNXFpFFF6gx5Ejv5NUqjrZJk4inJdDnuBuZR4jjeLYXKZtVmfd1e",
  "key49": "2bYG6RDebtL5HFV6e4Usr7P4HQyHTxUbPqvYrxFTiaqGN2TZg9nQFLkrHSroqL1596E14G1TQvSD8hKxQbUpbTub"
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
