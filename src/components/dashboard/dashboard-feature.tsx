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
    "639FzwnByysTVZLaH6Mvw8YjQwHTNL7CAKrYjv2yhEyojRdtjBCjfXeb3dx1W2fzoERDUQcGs1xzEuAcH2Bf78SQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vZGpeAR6Nw9T18Bcyp5B6NaVzNA3BaAD8gybayLuJsDrP6q3ja2yZ3cP5AVcnMNfSxMtQMowDQ9T2o63tCXB5Xe",
  "key1": "63Q5JvwmEvcqUegS4mg3sNyUEvfBsJp3TrxLx2UDf1hp45wqdZJT4qsMEQnTdUrdQdoTHCdYVHztCmde4fnYuZbw",
  "key2": "5KhKc3jeZqsDnQKZtkvSd8voS4f6nEUGFjKpaH886tQUeZYcDVF54YqkDfxmgfFXA2UCmFVAvJdMivLrA2sroxpC",
  "key3": "29nPvDuap1NjejXK3oqCMY3JahEP5zN24YrRBTyV2sghqKkXKKLneGwyKUcMMvcpV4optLGYZFKQ24djKLYmTYWD",
  "key4": "nqTTBcm9RxujLmzF6taP31XwUSbKEPVRBvLeejpAsEkE7ByhHKpBzwfWV5qMqQKudtdYcmX1K1vJn2Noxtb3QYM",
  "key5": "3avYGdSuP3ZEeGhf4HKEH2WdBVZb7HNST53Lss63eUKJZAGfrjyf9NXrH6yo9eHPytWLSYBgzZziJ3G7pN5SFZkn",
  "key6": "4A8egUv8x9gRymdMzKmp7Fai5bCZq5QrRvwCRwdwrmHHvN2FQxkbB2i4XBJuksmjz1xKwprxXsBfB4QLfkhmv7a5",
  "key7": "5NaViPrqUuabrff1tGiXy8RupvHBo7zVnrPUqTDpsKruoLvWpcYSNL5GrA2mXWpWrXQN2WMoTVmvhpjVP1Lbm9wp",
  "key8": "3z5P7WtEXHMcWU5EGZmkBYnZryV7o2fS7nWnZkV1DY6eFqs4PkiuhQdNkunhVKFaSeqSDzy7gwFACE2fyNkgDB4T",
  "key9": "5uSmy7rZdZKWG6BdBHCk5rrZT6FU2XdtCCXHYKp7yKALPLStq5VWDQqSKVNXckDDeW4Z8izow4ysu3nmgJE326zV",
  "key10": "4aTRGjBCUpNuYfvQW4Vw42AYexMPNJcuwta5R4MXK4115FuyTA1E6T3qSWxmpc8KuYUshaFx7aWF1sNpCdGKF7eA",
  "key11": "3HZQiAjdLf3uDiPJpd7q82imzaHTb6rH6nKAMKGUS8PLo61QttiTRbn1WaFJokPpBRwZyR4je9sVur6SWeDFRmvS",
  "key12": "JC3E5ySisiMNGQjR9bEUqnn1L5EJHBA6ywQFcXcqbPBtnDe1oT5rHbXYJQihMVzbuK2CPWAtnBgqhhUHqJnQMqX",
  "key13": "2a64RW3QbPvuKDtBVw5RZ7PakBJRMeaUeH4w9ZbZCt2xNWVc5zUUxG9Cu9d1JXoGHGZ5a1LCM4uQeJ5EEJfnAjXm",
  "key14": "3ZHCGnWhRQqLz29NAV7AaYCRCyoFxFfUpLKgFvziduDzQyzHQ4CS4tpsaeVQgigzz6FKQPfCCELBybuWB3cHGqN7",
  "key15": "2UBeNubxN8ioLVTnsBG4YNx2dvWLAtpgheEhYY3S28n1TQPudAubVS8tvmJXxSGd4kMxh1aFar5MbDJzhY8BzUph",
  "key16": "2o1JYjnG2yjhC3yxtTeJvbKbjVi6BKtpYBkU1NyDSWnHwoYSKPYtf7ER4txTpcFK3HtfCK2ujACr9Pbo1iR2bik6",
  "key17": "8kdcTDdfddp3cBiLWkcpyZh2pXr8GdB2D5zxunMgoULhFZQy7VgjsY17MY6zRkzdY7H1BBVZBPoJkhAJgtTcvx4",
  "key18": "3VrEnN4yBT5RG5Dfxr51CX8Jyje8Wx7ug4Md2ciKBJCk1oRSAHJJXsNrZbjjX4Ri2e2kUUcxZXv6GxXwd5Er4Qek",
  "key19": "4P99MG9KpQAkToYEwAEojsm7Yc8YxoD5qqmDqMaZGEg8FTks6uwCuFzfrhBvQ3toSjTSiM7xEYMbNigPhE3XdCLj",
  "key20": "34GN6KnZEK3qFpQ3FQCvVS7MUywYWiiBTBepKSo1v9KtmGdcxttrQJgryA79fqQF9apEQH67UPF7EozHV4iq6ZVt",
  "key21": "22pnj3sgJJD1P75WdfYX5wE1BGczoXbpqRbnp7VfYbPicUwWxcDVzCwSH3QCpdTXkNe25BycetaBikoNstEhRCY8",
  "key22": "ysMwAuBESYQLzfPgzY9zhuNs69b829WnAsTTERa4s3sSNUMchDnumQSoZ4eibno1PsDfjUdMWpQWhQWsNV6wWsn",
  "key23": "vWCfNBxDPAdwAxTjkRcTniJXbWM3HK3sFatEbnFS2JnLTz9AJvyfVHvF3hR5NtPj5wT2mtq4jjLmCxdVWVe1AMG",
  "key24": "pehrJiH9WdzrT16ksPKYpA2yk7q89QQsovh9Uc1nFQydag2tLvKY3yG55PcEDGRut2Sv43qj6HDN2JbSnkQbV3J",
  "key25": "4nSYr8qtx5sE7jidf4fET8yfNcmU9czJEuVq9At2UDxnp6NwohatPE5vhFUpm163y1c9WoAccQuV4DfkH762As3x",
  "key26": "46snMnb6PLKsgLpZyK2bZBXdfrBZY9QfkDpTwoUcHafK5DK6NaxJXTG1K6Bvfm5q15ywTVQ45mt8LEXdxFU9Sho9",
  "key27": "9iHrEYz857nyDc4eNtGK3wFP8wLCuDyv7ovRMAG8EnQP2NfdxG6vtijqtDDcZZFAZtMxqFnXnziw7FkCNNhCqsw",
  "key28": "4QaG839UzUWxDUJimqjrpwQ7so6kkfWa6kRFKYuXghx45YQSDf1QT58weGEcSiyXsFTTGEVhFSMSJMRQtGZRMJCb",
  "key29": "4ZqPh4FXbc2dSEGModDMtLHriPpJz4dd1kuYtGX234B59DmZzovZfNxtG9mmmpgJ3NVARyo6mbiwxwN3WLVL7uKa",
  "key30": "4kFMNRZaDySFWfouYJ7e88UMuUV5qrGsQfiLp4eKhEKfjfU6tSDQSyMegUJCuzgT725fSTyh1a9CTS31NQkzwaoj",
  "key31": "3W5fzEs8wHtwQQNUJovbTHqUWFnJdV8RnC4p8cArQ4HiWihQGgcwePZTaAipqw9sUoNY1zN586jiWU1QovTEeoDq",
  "key32": "4z6xRikaZcisbCHgQxnnm9ZxDi7ypU72G3LAARvqtQ9JVS5ygDsrxxSeWwQDnJNg2MRJiznvKrkzLeUgzB7oSd7P",
  "key33": "3CxrKMM5am6AEt9LzFjfNb8YHAmXRYx1YmhZbwvuiQcQJvXnH8VcVfEZ1tnnxFfwyZn52c2ycpquaDRi56ZhSbvF",
  "key34": "2xNg7bFrx6MEcykwZ4Qygo63nynCx54mvpQWratEaHDzmVHiT2URVAaSqEq99M99ZCdqdKcd5AYdcNxJoCearjhR",
  "key35": "2dncsHwRWwv3KJhAA2ZgKkhJVK1qVM8KyJrnwQsXpZbXWASPmMMEbNbE2Msrsy2L4D22bbJdA6LgN41mMoEs9iqR",
  "key36": "5eauwXnyFmyQgpAHxSWt5fWeaV4oQRVoCGTDeyn3vYQSGmtu5oo9w9hqRyL3GBh3wj6DaYhoAiXDyAgHKcRXiUEB",
  "key37": "2zMGEqBcVVGj3e2c8deMnC2GnB36gmratHi7nEhNRn1pdBnAQV1tb62VzqaPW5L4f8JehWZrmDFzoyNnJCPqTGak",
  "key38": "4fuTKD5xEPYcNUTEaqixqVLvdq7nrLmiDss7URKt7iG2ahMjPXM81NcVtJtGc9WSMsMN4w16JKVxQBcmhpgoJtpc",
  "key39": "4vfyX8E3p99r4S6mJBDFNu1xiXAn3xe5v6E9gqrBBAQ4uyRu5ox5oTZh8vi1fkM9F7ykzrgGCgWBJgG56UoisLJA",
  "key40": "4LMUqomqzPWw97FcryAyLBD8DoVTUuCTRLgpew7DHLX1QMfFZJQa5VGHEJaF2VSVDPZ1kr5j54R8mFYog1Aav2yx",
  "key41": "4mMYTrRoHogBkWftyKVkNs8Nzug8hxRnhpfSYdJ3G7phgS65n7ozK1gxA4ceZXZerPc3ky13uWiwDEZoT5YxjYr",
  "key42": "5us1Aff8LysHdd6Ca4Yx9ZCArTyQbQByUsyf3XWC337FDRdR4FfWU51zRgPUYaVBez4FFJU9nE1NTnDbFewjNngN",
  "key43": "4KHEAWQiS1TdYpJTCXqKZUWzXvCw25ZgxAE52mLUjNvyu8JC3NEhhQKSdqxSEu6gR8PMFpgAuux6Wr7nax41Atsk"
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
