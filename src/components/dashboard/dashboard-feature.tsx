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
    "nNdDreenRdpHorqgCC3pnig5kt4hNMfifE3iuMTigNQDQHeZmD1ZKCJ2YwdrGEq9xK83JfEYMiJFoqSkXLtGyoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gDqVSUW7QAG7Lp8a1WVhrzgCsP9RRTBkUYErXbFNnuyHoPFPFLzCvTD5FdEmhH42J8H2C7eD8M6GyemkkHJBPmC",
  "key1": "3LjkELvT4BX9qYUGMHH1xhgHmBUccuSqhNfRiwnbCJHUDSSNqGRKikU8GCr9HJYGgJF2MGSgZY9HUDb3PsGZnyQ5",
  "key2": "bxtA6nX7FJdpd84DJKKk8SkEq5pU2etLZ6phN2jrjciDVC5ZLm79SYN24qUaZes64gTErn55e7JEqHnX9FwAZrp",
  "key3": "5FXBfYTrgECjnr59ytryySarQRp52RV2xd46H3JhYuVdxdqa9DDXusncoti3pDdSDHRJfrKqFo3jhS8oW5K79Gkb",
  "key4": "46ifGGV6bdBBcxzdAoTCrhPzn7f9BA1H7YLUTfLAZ1hozWtgdKnYxEWGiqEbFeJjkr2MpbnSLmxq7BF9SW5aNgNa",
  "key5": "4scovRUhXPJ1ffVeos4WvSLNokZbd98NT8jKx4DNSL1jHN1Y3QsqFjo2GkP2tWDWvC6XnuJ6CYvCvLeQbV9Yy7C5",
  "key6": "3jaoAytFv81y14ja8P3StAZnFLmUxfEWcQyJzEJNaCRxsUDZgJgeauBvV3u4w5RQf3bgxMck7CHUaHnGXpyAw9EH",
  "key7": "5n9jBhGde4y7U1YfdBzm9fb1LjdkzKBYssQwgJCQGekC6n1cxH5PziF779Y7PmmjhLLGCRFm8ePsnTddf19oszYq",
  "key8": "5841SkwWr8b7NSJn7qqCcvR182XwtmejzwTgCCJDwijhwP4s1J4QucWBY1DcvMn5ty5qNfDye4FEg1XfWyAKcwp7",
  "key9": "3aEs1TmtwhoYvKGn1wXMXrzkr9QraoeCDELVd1br5oE5EBgTi1diaX29gjpUpguoenfmkcTBhdz6GLHeYAkPChes",
  "key10": "5biqMeivFPkZbmuvLy18EXtrwaqvUqeThkEz5KBq97cqtEr1sNeqk4jnLPGitDBgEZEFk161orX2CMHaMBE6McWm",
  "key11": "2FqBh7Ms8yiFF1y4hz969vDgMp9C2QuXHeSjsq77v3SXacEjWyndfs4ywVJd32QHuNbFpjsEPG9PKSR1J4ery2Z1",
  "key12": "4kaNwafScZ22ugJub8diLcmWoZXfz9sv78dVM1aJLtFyYaQC9p7GTfynU8tsTuZc2nvrxsdsawC1Hw6FXpqKkkuw",
  "key13": "2V4gupbYshZpejjmTCkLNGgrFJnfbk3vbr6zuy6Rqo2Wrx9JRK5rkiGrtbHHbGPfVcmKS1WvamqjA8D9wXMz6PHV",
  "key14": "3tHpM3kMjSWAmpy2iAXurQuteoRLcrPK7VDF4a9v4huguNNxzfjBfCpDeFBZPwPhYKpxmgLwtGu1UKrZQHWzDETX",
  "key15": "5WvpJNc3Jefb8RM1x9WdA8MUsTvX5Kpu2STSe7odC7mCK8D1uJ2NLv6fKWMgvKHZVR8BzWWHwDqkwfqTj8YBGGuD",
  "key16": "3Ln8V4yzva1EArhDSPeD7MbuXZZjdoS2VUGH3xSP8C6th1cDvgbTX7P3JAsZ8XQbqd7MKURvcELXemaAVuf5rqoh",
  "key17": "43jBqVDBVTzXmk3y2njPqk1RfxBo5ZA34NJzTzFLnE35pXMgEu5RuNXUS5e2Gq62GzWYuNwFNoiHKEf8oUrWPVoz",
  "key18": "ZknrkxUJbUXszUDGeLMEb79siRDvu5AfxAJmsf2NjcLvtdZ6sc7LGrwu6Dv2cmap14QepXxM3w7Di6WMF2rH3Dk",
  "key19": "5EaLrEbq6xofu8SFPUfDgMwKodLVFGEahqVijk1JjmxT2vn82W7xu8bfzRzK8tqqrN46zHXTpXUfT4SELahBKGU9",
  "key20": "5HEsBNRr9o3JcKnvhkjaWy66CTBgMCGHARGWQno7FcobJ9wxJVnLXkGiqsmpNK9dhgcjBkW6gyZwPE6KBVMD2XnU",
  "key21": "22xtVtMNy9bcnLaa9DEeFk7kZ2GtvUqdMp93pewazAMRFUqPL3td4sCC7cKTDNZFJTA7Nqcd9hGacwthjJNRAv1d",
  "key22": "4Ar9QS1A8BwjQXuKko8VLzpCSX4e8pKjhdupZ4sNvGxdSM7RJGqAezQvHojtDPr1u5NxrmPBJMez39bfa7EmC2T8",
  "key23": "3PdWtCzSJ5JBd4wivQUG3zfy9iuxUq1WjXj2MvApk8VYkgeFnhhmgk3RimMtgYpJsUopHWoMoZzqiC4CBxDgHQYh",
  "key24": "C1kRjQU1kgesWLKLP4Y6rQUHrsJxnR9quU4EAGz5ypvDXM2PmHECbEYzdSEwCJPqAqErEPTB7LDxacMtqDhJLwe",
  "key25": "4KULZKwUJ2NV9VsXeLihsZaTeUguFPJon2dptsj26FkrhTCR8Ycnnwp4THWSawBoaCU8MpLnK9fJhZHKeRbpiDPf",
  "key26": "4YwiVHxFMWW7t55q69rHTZzFxY4eSDS6v3rUNouTWGYPht5i32QmpCEzpxuDF1F6gJCrCYz9YLHymF9ZACumuSTY",
  "key27": "5LxgdacFXacyTR1sxvFsuWxyGEbEnepXLXHYpvmWNNcpyxvNuLRbrnBeJ1erB4t5fxWgCL1SCtYtMyB9FoFd5E2R",
  "key28": "4QYcTus3SsXJh3CMRXUXBHLKPsWa6cjcZSPB8DJzZSa3aV15rKJSXXn56ihE1ZJksTDcGnbzQjK2eLeBFGqmuY3H",
  "key29": "VxMXjCi2mt5PSwgZZ7ySaEV7AYYeoLiT5yb8z685KZ9PVnHysTGH8GFikTXfgSeimVrraf5UQePawAUasiRaJiC",
  "key30": "5RaHQ5mgNzgEjEEJxiW1eyCF183KT9VBqyHmGurjcEgVMUQEG6An7x2f5PemhRyj1PmwzANTr1qmn7bT2tW9yews",
  "key31": "455dACpqJbruSKMrgMdd2zqvTVkg2Y9NAbpJVuQ9CBCFogofBXYCVstNvZBNZUUrKLPSwPiPUFMkppsNm93XFzcn",
  "key32": "RgBXK3MFgbTTM6NjgSmE9Vw82gjR6LsowXzCNu68fUXboKXtS2fdzepN2v4e84mkSXEG1diY8yys1WnhRofvgTA",
  "key33": "4BQoc35xzvLArp3ZbmAxGL69aT5cimqGrdrPuXoMzsNau9Dymv9FtrQoruV3HKAgLP2fth38FuWBm4Mr4ajaPuiR",
  "key34": "5axpMswFJCge1pVPYNJRy5KBvmdoNphaAwAnLyZpSKgBeUKZQSHSxbbriE452xuN3C82QdnZXZhBKrqUgCYM8vxC",
  "key35": "2rWe2X7YnH6YohF43rrDmGfgFodBMTJuYZGg1XMKwuW2gKd8SKPsjaFcNPp2ybSJBBJDRN7iX5W9ZgRXMnqhNxEn",
  "key36": "2NPpdKGC4Bfr3RBoF4SuNzbHzmsqhojh8pwAf6iox6NXWSQA5LVmNm1nZqeefU3LDmuCQzPQkscfrGZPMcehkerk"
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
