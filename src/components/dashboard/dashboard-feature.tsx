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
    "2xbPm47W5asxXodbezTDtyKYYUDC5m5hcVEbKbtf2Lb9nKW7WcjgmWhuanLnWUWKwr8eAbuThPtnEo8xRrcLSpkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62CBtF7rJrRvEXbsBEJxdhHAvJ8RwYXbfqsjhRTWP9DbCs8hpGpbDWZUSy2MfvxthV3XqCMqxwuQmXMSRKD8YnFr",
  "key1": "3rCEb46A9QU7WxejtZpwd32iJmu5dzXa2YSWauTFaFp1aX3qzakEAMqx8ZfXmCeBBavH9bQRJEjZ6A88ScQaEc6U",
  "key2": "2wntWQAH937sjJFLpm1VBV3qWZDzTMpnAHgdecpBb3iM9m1ENNBfci2jpUBWiAx5wqFdkyv2ep52yM1HNwoLPJss",
  "key3": "3K3RUqmRVAU6JLKgPDjB8zSt1rvPe5WCWFFocmnawxLeNyM624eEpeHKZpusWWqtJMGbo3E4K5mUmh4vYse4ZDE",
  "key4": "5ALzZfP6oU1vMqPhwmPMyNvG2XVosnAkGpfKtMrbFxN3dq1qx3iG3mXykPb8h7bjULM46uAZ56JPgQpLiQ6SA229",
  "key5": "52dcK3qStv3v9s5ECHKxFq9cTRXA8HzKjdWnoPGqGX3DUaXAS1cuGKyKgX4gya9Ep8hwG6oNAtWJGz6HiSfUZRxU",
  "key6": "RjxusRKzpwbaxuZMAEKmkGsRAgnde6PZW4L5rmqeHhSvz2unHudP2uCjfRz4KrLpbXXBqcgKYroJkuEMGVqigud",
  "key7": "5xybqruL3UXtcGEibAeZDeMQSt8CEYvLVftfktzMhvCmdECGStYSfPjaxxkpS6smS4gyuKpn63yzwu5xTifaa8So",
  "key8": "Z98qeu2XqYr2Ks6UnAVTppby1UF8ozQ2QLN7KogV2imkbe2VXvx2GgEg1oLr4an9SMNDyNeqmX7ccAtSgejACqr",
  "key9": "65eVLjTwCs7xoK4aRb1vN7gFqf3GX1b2Vdi2kZ98WLeoBG7YQHWPUj2DKuKJQ1pTcvvBFygbiufU5L4KYtkWixw6",
  "key10": "5A4CEJvcKpekhVZqC1MyMWVjruxrNx3KArrx4ZxpogS3cVMPat4hrwMAJ9pKkhvvghgqTiKEtTgMdHQYPU8Yxpdf",
  "key11": "7XS6mi2uNw7sZcweBW4ntgtckQYjkHoLpDy3DJufvhcWJjPqHpuxwY9yA4hZaCLSPQ7zzA6gD9zZ6RoFc9CkRtT",
  "key12": "3zsXJUzq9e1eAQdsP1tWXAj3YuMUgxs1tSY9ed68r9eLL8xqXh9H3pvTqsahFi4qmVGJ2ashrEVLcWXTXWb3azTN",
  "key13": "2nL55ckChKsSdRbhBPfiZEpKA7qRamPNcguJRoL3VMrJmNyJybodmJtcQ62UFamxu76UekaBAicEVnDVSLz2WAtW",
  "key14": "4wKYK4XzBBabcqaoXw14izt5CQ9oUs4WUtgwzgNiEjPt1mwjWYEK6PiFDQKRFKuHm7oTb6qf9d6FkyNnPwQrtqEM",
  "key15": "4VZL4FsvwhW7YhfSXvTaTawimc43iuEp2yJF9fJxyzgRABNE5yXugnouxM8VcDy9936HLW2tpXvehVToLStAXZ6w",
  "key16": "3hU8TcpS1H5T9djS4uXU4WJhDLDdHVheN4TG39BgSqhjLxxvjYfAwyZViFMJyLWZi6RNCnuiX5kPNwMFyXq8RMPc",
  "key17": "2mz1a7kmYA314GucrfZNb2gFtdhmuPbooxLzHF6sDTJAjeYaopATcMzAVU5sZ2uCpT96iktiP7viJD4M1Jjj6NEu",
  "key18": "3WcXbTLNRPesZLCxR2oU85oPWyf8DsV18wcKPMz8rCnYoK5kAGgn7pwtiiP9XPDJVoQ2jr8RvxvgkdhgPyCsEXKN",
  "key19": "5fxM9h41dN34wvhUb24fXnGtSzk2UgWZXYenK8MP2NruPyeU24r7Re95hVcGDbBJoB1dvq7SCijacZips3qT2GSf",
  "key20": "3MURbdLdhUmw59Psj2XBiPB2GTzxAianGCZskuLz5akG4BugHouzaZKWUUhEYwaGTmVnsroiVmH4A3wczrW9aeyz",
  "key21": "3mQB1VFCroSuwkgFdTyAM6oZpAu4x9EoQqfVjVA3vEHwovV2t1Pudhiku7w1KagcHKUUzyjtSgsY6evZdW3byCZ3",
  "key22": "5iD4sDTgjsdZQsFU8uogWqgYyebuphitpyBSxs6cTSYm2bZSi7bhj5wEFiGTLxr2un4wWZeJpvEXQRhXt9nfWcCy",
  "key23": "QsLA21gm7KGaRjAzbi6VETdJw92X8kPmHTq1crSuzFtNRQvWk1tAp7DPubdwJYkDq9j9YQJCoum2UMs39mfrYQT",
  "key24": "xEEXyrFe6CgAxLAtYRPgbAKCJ7bGWk7F9JfHVfgnPh9WWtZ4TzX4aiQPmuvgkUSFeWGp55Rd4QyVZqn7c59FMrs",
  "key25": "uVYuQ97WMFcC1wvSt9xw1jJXG983cSdNctUrggkz66iMDVRGPjCdYB4jjAKUsVnDFxjHjRoWorMqWT7C6B5qeHK",
  "key26": "5te5U47QDCh2nLgpi11TLwihnRcRtvDSqTfPk4YzMX8PCGBzNsVkfcHR9w6CeC7byCzNVejTjT9JAnFvreS7wRa6",
  "key27": "385v6YKwcKSAHEXM81CMgPoScd1VJjzxTFArpjH2XuFsugDTM25XCXL6q26K4SMCRoMJjSRV5nes65bEQqL5h1Pm",
  "key28": "2t5bWQPrnoJ52LUxaus2VAaJenedurqUaLhRp3NfkKFeWTZKwTHjrVU5izEPZGLHJEBou2ytAs6vRKDrWJJKSqDs",
  "key29": "3cLVmR7ahFXG5iGi9QA8BsgEgGF7cBiPkPqBUirRiyHxyG5nSnYtYeo9bdZLcFywJa7ctQpRTM8JjVFhENbhbdDf",
  "key30": "gn6UcuRtiUNTjNjNgtKyRc4qKNU9Y34CMsaiGY9aZwrve2PPQaX2n49pEfMVpufXQH8ttF6vrgHe9zwfpGSA41V",
  "key31": "363UQo6Tuy9JjkqtSbnTmnPYuczNkRuxvnhGpJ2YMUwESgUmUyreX7Bf7g3vAF9JoxzaEiEZBN71nJngAvvebiRR",
  "key32": "3g2UVSfX7wd1wzpJ6Xkiu9k4bH7hzpkYY1JoDhbwp76EptC8oFeeu8yUp9AKPxhD8zJF7y6GjMYLL1fGNhPzgK49",
  "key33": "3JKgGvEsryjWp9jvG5cJr9DoWkjSdRJ29A5kvzbPnbKVHUznrXKC4oM6u85LRSDuUbdfZHTatQ857sGzekFqfnHA",
  "key34": "5LDFit8KYBv3eKWGMuh6ddoHKL4n45aSa2Bk1DJtREgZ1qdf7XtinQNgXixhtkgzDuBBewHntWw2o6MKuyQ5gkDf",
  "key35": "2t4m7GBHnYFbuPBhFHKFQVUb68Xz6CZM178q9LJJ5FZ8tQRVBPrwYLJdqv6WqnjEG6dGXHrH2Phx4J2BvcrSKcjJ",
  "key36": "5Cd54uY4HyYu8v2Nin17oT8wNGfH7zCArxSNum6hRAVTQZpWnqLyWetFDLdPHmbLyWEC3VboYR4AfUGX4THiH2mG",
  "key37": "j2Qh4gFVwDk5ryTLo7CVBTKZVKfwkgkXBLmknFKT2mK7aWqsKVTh6FJC5bwq8nZYhobCHBVNJg8CSwsfVnsYnt1",
  "key38": "4M82LEzuz7EB7miDX8dqycwXvwheKiFvzCAzkLULATWiDYQuqLhgNVceJFGs5rgzBXwaFozJGDNDBAPwenyapHe8",
  "key39": "3h3pKbKcWJ9WXhBpjththuuV87u8YwAjAqJhALezk2MbDNwKborvyFfEMLJcfAiNHYVj19zgMKrs78xiFGALr3fZ",
  "key40": "4w2uvskDW1UQ93DUBfVRNdm9MQji8GdBy41P1D2Ng3bMsdBkzrRNscXYMRXGHTS4CYJY3YeCnJy8D53CaqFi5NCq"
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
