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
    "5bzqCDFbWdwfYr5pVfGtU9mm2QTNbDsU9VcD5GBfc3bBUxkZncc7Kjfoq1cTo2oqD32J15EBmSbFssW8JXc3ZRJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "onzCpqpYgd4BNszLVboo2X15quTeN1Z21e9ezNYskQygqBCRFN6btgQ5QYCcKVmGDf6tNyApUDEgi4bNSFRwuQr",
  "key1": "2GavEAhfGicRWN8RQGBVhcu3mtkVxqrsJFJiuspCRaCXZzxXXjDuVuKsMuLzkKqCRt2VczBYgsjagvSwWF6S6PJK",
  "key2": "5854cKoanNoZyC7MefJTghUaNWWFyGCFu42cBit3GVwnBzneD2yriweySdv5igDMrAADfUJJwgtKZxNqgNJRVutz",
  "key3": "2EyxCr2DcKM7jtvJ4YAx9Vm2yFWHwQqZtGUazG3YDYdW7SpPcqfmmgYfXJ9cXdtScUPPqpERGHwkXtdNx2m7y8Mi",
  "key4": "21t5xcXqSjNgGDLLTV3h83ZWPz5oRsZEVE4DYm2kSUPnAsRwg7d9hodLMaKtRx8R4sbN4muyFkNHrAreZrpPv5xz",
  "key5": "3jDtptzTkQgYuiLGe9TUmZhYy2zYyyLBSZtCvnJ72RBUFnherC9ajXNmG8UHcGvZRea2sBDcbCtFNz6zrMS6RN71",
  "key6": "4KBggGx99VBthe1VQaPQVgdsikx9iKhQVp8tkNeNTPw8VDke8ZdnuZL34W38QLzAPSiqQvkq4V7Aq9jkgYgk8Lsq",
  "key7": "2aye1nwLK2SzE9kUzZpxc4GsKWFConomh8HYSiBsr2dZgxXYvHY85pZXQyYrJUcfadKPfLZU65DwJC2dJyEjboeC",
  "key8": "53pvdmLNURHht6QmFme26Hbc3By7tnNJihjkEFTP8xv3fUeV8kTqcbGCgq1jwiSzsZE6ZMhh2apo6a3agCefsg84",
  "key9": "3hX1wc2iaXDgyLx8xHBQiLVXhQBFmb2dBB7NuShsJyJermef8B7GKKRz3KxLWLiKRQiU4UU2ZEASh1PNrWs5GiQ",
  "key10": "5VK8WzBwWGp2aBzcR7Zc1F9BW8APdpmCeAoVM9PgLxG8bHV3vkC8NXVZZZCrhHJRVsmatrhKYxGWnBbCPpq7jNtp",
  "key11": "49WvdfDM33LcLXE39E1NyCT7DV3sS93b1sPg516uHTS7qgQvvNmauPePQAePBifkvyzPY5a45hDxonZr6r4PSc5C",
  "key12": "27rABK4TAyYWKBRHshWAmppUfoa1zGtXGoifLUYoGC16fUXrWR8x75mCueobRdhFAy6cRJQgAf7sa1bKeHDcEZ6L",
  "key13": "gDzYpJvrTtQG6nYRu8F6Z2c6MXjU64LiMk8CiLEGWMjjbyGYBA5BnhnQTvaNi35RqUknA96FKnyiFtBbPsVbLBj",
  "key14": "3XmYyrXkrjUsig97B8UMgwUv6FkJQLdD4L69yHt6yd9GUSayTZgSBiWQrtbQDtKYvUw7LvqmavAyCU7LDYsBwrS1",
  "key15": "PVYBgdAfHFYMeL82dvdfPtjUjZoGQLB4Jx1Wpo5HUUMBTBSRsPQ7E1LKPkckGkgjbefZAADh98VKvpdroWgr6qc",
  "key16": "4Kpi3HWgYXbapqpEayhpUeSbSpRiLEdUPT5vgimsdjHVjFyaeu8wwMVYjPrpPWbiWneoEbNRgn8jpPp7uo1mxm5s",
  "key17": "3KAJSkZTuPc7giXZwi8Tsf7pryHKuX9W2XVGLW1Da4FJN83D8KcsTq9UWzuaaVoykf2ReDTACxtRFii9f2bgSj7M",
  "key18": "z9GbGpHRsLaEgqkfpYeePAaogM6SMArKwgVmCYkL6hppMARucuK7dsn5mrJxCscgQzwmFrCe1dYYGQ5gdEcUqQ8",
  "key19": "LE74NKsT6tGbcFX3khYZfMg5KvJpVvnyvJYAURSVzo28KGK5mdEfw7EFQrRYTJptd7DHvJ8Ym8XiMo11mmzEjBq",
  "key20": "5NABxw8L8JT9TMF6k1jXppa2664R3AjiMB1gbBXAKH8GJ395eq17v9WhaUZL8JvyijLcwCJZYhwvntR5isTFUF3V",
  "key21": "Aggo3q6We41Fu6GBGyxvihvTk7ty6aBeZgd3qTUAGzhfxqRQCqsqZ7Dybcov4nnWrPzjo1Wcr3YovuCtM4a9obB",
  "key22": "4qf3yth6do3hYA2kFw82ZPegzBoRbqKKYuRp7dHVfhSgFgoA2khhLtNTQabUDQcAwW78QrTNanPjYWsTe2nnL5oy",
  "key23": "4ESxAxLAchUgHBxf5mwM6fALkthPci2uyqVm9FpwxSbVP3ZmA5u4j9a7AVprzZGNCbVJdJ3BNmkCr4U3yRGR7MYa",
  "key24": "3Fzs7nhRAosNBkq8m1vm782bHJPm1LtCvCWNPdaVQ99jrf4TYUp4XFC1ENPq1BDLhpT9rvy4P6SnNZNjKkwmpm3t",
  "key25": "5E4gJZgjZyko4qPSF4mu4kCmzBLSx1W6iY459DdhC5Tos54ah8Vr3PG2R1HBjnmuGGYuSW6zbiPSCftaUL7zFZWy",
  "key26": "wkUQGVFhghdV8dmanYsAdTa1D3SPkn9xCj8LYcJYvv5qa6QD9tzXCiTBcJgr5yitx2Jn5y5dNfRjfgZXnmCCZBW",
  "key27": "5fxXSYisCusB5FCnTBwB7oH7oXbGnqRyrKBzGGXRHCF7iUutDP2g2uBrLnKkRGgpuTG9vL8KaUULSqYT1xcgZaF3",
  "key28": "2w1cqoqrQbWbr9aV2kdMnjoPoEnmobwrKkJniZmVJ2DZ3cEf9hvzcp2cuVYh5azrRUyEAkU2YgVNEpsAwWfQV6m5",
  "key29": "2d6FZhZ7EeMCxvynFpi8javuKEazK3nHpSWweJYaHJiSVdX4t1Y1SRS3U3b4LJuAUkXnMd4k3qFavkSBgbkKPZTP",
  "key30": "5jb3XuAPj4MuWdMFoV3o2ABfJhcuFuXoehjZTWDXsSQcvMWSnudZG9BwE4D445XeKfnbGMYKSb5wbtkqxUWXgzqy",
  "key31": "51PD6A4cBKZH4rL8GPBbNcavWN8RcNYrtQQXY2jCZmgfY8gUegztLiqRGAHXzHAhRHsptEqumfCCgF1BKBdsH7bg",
  "key32": "DvgpzNuXsPVwUVjahcFfmb4DqNWn3fjK4bEXTEs417TWunzUWoR9yhL9xz5XYLNjhHak8rRGHWffQP4NkEQefuk",
  "key33": "23mfbvfmPTH1aC9bRwHGpxjzSbiiwdWDMLhaGQvYkz1hFu4L2Kz1UmKYvVjHLHa56GH2aJAGeyckjy191PamHoTj",
  "key34": "4bfQ8WH3fpWNr1vSpCXWZP6ksme3Yr4BtuPWUsiDDTMCMx3AS47CzBew5VrvmvnMVwFSBFL1pzVyyKgBLWWPZr9F",
  "key35": "3taxoqCDHqLxVaLRFWaK6uwUfvAN2YHR3RDee9o2jwCRp1m5np1pcoCQdSG9j4W11RTWS1Va4rHWXf5RZE38jgJB",
  "key36": "5Qm73Nm3fZ5KkFgFtYgjr6EFiaZgyvVWdMdEFS9twCzsGKBzXqHbrFdEdL9DoXYDABBQ5j4VDpjuMXp2yBoNJdSJ",
  "key37": "vj6kUnQigHLZqBZ3SDUf3BNDKw2oXvamzFfPNsBBHn4nVDs51SeqhmZbAcrNhc4iQK8EK7LTbTG1hiFyMVYSu9p",
  "key38": "7vJyee9pf7ceip5UgK17E9NeZSE9NBT37HQVqdkCXuqFAkRyvGytzYbqfaDWMhirwBTBSuULmpvvGgVH3CCU8hE",
  "key39": "3ReAKyP28rtEdhju3cqywcFLCSjPi5geGVr8uqJxTehj5H2qW1T8HUc3Dn1ciTNp9rX4mvZMmeMT2UENKtbHryYE",
  "key40": "5WjuRuqQSPb2LkmoNP9i8c8De3A7SauC24uEnQstw74GE2fhi8QnasG82omTN8Un6biy38YQPAu5bMLamyxexWy6",
  "key41": "BzTcoUdN6rNFq31vv7oJG2oS2tM745GhD2VFvY7mdRinpowqSDdaVU9efQvFEU9Z5PGGimdMAPHGYJ1BW4r7ZC2"
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
