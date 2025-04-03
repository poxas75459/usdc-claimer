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
    "37vRn7NychEw3deuzGQZqdyfBdLwNjo9nbZwdMAeV9vr76JLmoBjRpt46GCDPwkDmm8iS3Wwn2wGdzAQ53uTKWgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AACHRfxN8hbedxK4kJgMiZoZ63tEhvTdZjd8GqitgZG9ee71zqPrDHByFnurgfPbR2s4kwfQhBvajpkp9BrBz4q",
  "key1": "254RmTub2EhkX23txtxgJcG7Ekp83xFdn27iUH9EjzWXUKbsxC6TdxhusvGaMxomWHXugyrR5N5GngVGgDoDUrLM",
  "key2": "5E9zNLHkyjhQBoCxBoqrZ7mCFBJzKx1G3i8SQehDKKQSEgeYGMJyNetaxzZoazULa1MiouNJsZh6KMt5p1VjbdG1",
  "key3": "2ii97aECMWpWPEg39jbsR8T3KGnLSXLjkY3CHubJfetW39xzqe6tz8mkAQexa4m1P6WGRAJdVMApNAsUjHKvGVBW",
  "key4": "3WrGeJj8uGeutysWdR8VH83VoZph2wky4tiKuYgMAwHn2LxPjvXocHnSGpoA7pp7B2Jq3e6Ajvb1n7RqzGBUL7GP",
  "key5": "34yS8cY1HgwGxZxdomJgnBhBy2Kn4m2bg3CBYGv4mZSnDSDrNjuYVkLQbt53KNGQqwp1SS6feHPu7fr61fbN12vw",
  "key6": "3CKWcmBpssjbkerNh3KU9AmuNWgUcw5QjQxdfJHtCwnTaAd72n7VPDs8LDoJPDir6fYrq3EPHyoAdVXCDgRCGyT4",
  "key7": "3C3dSSNG1AA5RBMgsRqCnBjMXyJFGZ6ibi5gHWeQHmnbC5TECFxNMUNYv9gUMm2ow58j94bLEwop7dUefkWj4Q6T",
  "key8": "o7fGgTiwtZZkp61pzxnhEtCWNWWvSjd8tTPopgEFvJoFRwFSRmcUcWNUZtktpX5HRLGanDbuL3ZJ3xLhhTwN7pq",
  "key9": "4eiUWQLTaXtJ2YhuRCcXkurpDRSFTMCCNLHYvB7QodoYQcnFEV8vWzFuFbAtLdhyN9GkBMEgosvYsBSX8YXQttB8",
  "key10": "3Xba5k1xiRwRC6d3AQkhK6wBojD2W8816xJV1enJEebyV6zRHuvj82gdwwt3rfjvfjjS6VvH6qKyAdZYHZVmaSgU",
  "key11": "4qnEN8m2a22JTFYW7vhqkH4QbbApZA96fTfPeb4TzVzuaEpDvhzYsxQjqJHMwdcwrnBmwMSPj5GdDrDgudZ7a6f5",
  "key12": "27oGvES1gTho9x6Zsm2grx1ot4BV6crexyMegJpmiUJb6b5uAa7hzfs89JV6CYFrdR1mePbsaMorERCkY4uHnwvS",
  "key13": "4qMzJmRCvK1kGe5zqtgTaPPzZP7MrTF11cvs8RsVDghm9iPhdt9Vmt3gC7i66T2DapiPytEbEseHFMGiWAVCPFrH",
  "key14": "wrLUKghrdGbWDcbTSm7qLNxgkevmwuLURcGRgbKaS1ngQdwF6VDCUi3y376XnFcmPLmXTKpdVdeQrCQdgogAU53",
  "key15": "3E8TNSGiABnAh57DeB8G4doY8hBAEknvTNuNdfasngsh87qZ39QjocSnKygyG1BVrySUmJbZ99VGDySTPdZSasgK",
  "key16": "4pLDrkjMLdDcafJj3eCFNuDqWS6sZ6gUyqh7KjTfuLQ1aLCechRty4Ueuwop1rLpsaVamw55KDVa2wXshcLitQtm",
  "key17": "4wdDLTRTQVdLbFh2ZXahpAT2YeXVmdZPqnxAJyg6RtpjJsZC38JH4yZLA6iiYuJxwKUqQVw1byhxyFiXb7DuqXdd",
  "key18": "vCkPip8S1svkvXnD66opUv6QeDawV7v1ZwxZrC7eTmXxBsnCB1Yu39ydfQ7eXQSkjX4WkWGDCHpf9GZxAFZhFY5",
  "key19": "5vjyoHET7gD4LtN6wZz5U5HzFMZqZZee6NWpNZaWH92YTcebDUCss8UpAUgMZS8beGEueT3HP3AWaAVebzqMiscY",
  "key20": "4GGVD8dZif2v86j5mcHFMJmSQxbzvNweuSCQ6gcqehaRsF2UJeXXUkpAKPvpBXqycdgoBjYDL7kRSVSyKNzs9TuN",
  "key21": "2BTrUhvvdyooYUAWpNkT6mZfYXWzEMeWGHqzbP1CGnfFa56hVssNemStUJfb5nfPfa1JbgiaV9wNJYgAdxKqVmmR",
  "key22": "4vfrS77xj6HDVYfYn5J91LJxn9tpHaSuQQqNTH7MA2YthYD4r6xQqSWEF6xx81A9mE77shMLRBL6FKBd5PLFCZbB",
  "key23": "3eGGQBSw9W8P59QSB3QzgiGMdDjuijt49iyi3o5cqdXWznpqhcCxV3Zhd7E3rrjpDmiME2eAkYxhNeGKqb4PKP6S",
  "key24": "u1BnVkrv94xHP5Zf8UXxdjZPyLDJqxfiEbgtWkFSs7LU6MVVKBb5vQ9WLcXX54Db2jpRRVvhxNYD3Yxtmoyua1D",
  "key25": "5cLQg8o1qYUdPQsEBDsRkFPMyMruCjzDGQoZo75xokRsqFLGANZPjBSRfsUV8LA4XaNT23d6nsz5dC4bmwiqNYJP",
  "key26": "5cpRiA2J1vceEibP7ECUwfKMZVjxqq8nMmFmurMBZYCmnynAiFbFfn8iVB79QPfTCjvXiPK3WS2UwcTNrURggmeo",
  "key27": "1jHCTYLBsNAfTvE7LiVLV6PCakuiaoXWQYMcZnCaKAUnUXBNLLH8zsaxqkGXADBYvsHat8uMqAsEWuM7kzvog7a",
  "key28": "5imJBdnB7KcaF4gjSs34wCWECDVf8qJbYe8GXbJ6bJ1Qpi3QUbW2YfVAcD8ujobB3auoiFJsLMUJHbv8QH8wE48Z",
  "key29": "26ZR6zHzo7vxSH82Rwr5x6G2iCRm4TNXihLvkvuTJUew76tsjcw5Gjqt4R2nUAqy7k7UU3qjumQV7pqXYw6XhYej",
  "key30": "46fnRPvYv3ZpxmU1eTJF8Pe3y8BJBKPrG9YVAtmNyuGMy5TzDPsDWDReApwyoZQ6XPPHCFu99eobLajuvZP9GJhV",
  "key31": "3wdrpn4EQrvEigUSfocQXpJjqdtYaTPHZZkHYqpZuzrNjWjNyTvoKt7b8RfsN1BvFt9oVPqdbAMRMLLsMKt9mzgU",
  "key32": "2TWHTNaQCTKviNpTzdyhSKkasKka7ya7UBJyNZdhEpV3cuYwsepSM2qbXNjqfDifs8qYMUpKg2VcvU7ip6hxmoyD",
  "key33": "sZE85KUh2r8q3AuXqNNDiQWhAgys9pLdfJWodyAFoo2eMfQEkye9LVwBz5o8LBQYqTB8oxF54wzL5sT2gBDYiFR",
  "key34": "3zvXuXSpEhBTDdvrokD9C4Tsm3z6Ppkp6dw6EUKiZe1xGqS8Q4Six753ha9nyqmHAKf8NpUSbK7qNHT8UdoxYQSH",
  "key35": "5DP7DSPVhd2FZfXux5DPHogRvWK8qWwE2vptmAbfuYaEgvPCTHe6UY5AWUA97Ai7cFcHMi9pS7xxXjHrJpwG5gFf",
  "key36": "3Gb85e2vGLyojzJ22Zo3a9f2qa7cVJqb8fVrjZ8b2xUiMD7DYdfkkKX4w2o5MGpRhcaBAip3zDugT6uHwm2MDRrk",
  "key37": "5qt7omFiYM6rHNQheHZ6yP4d8WvDJU2sX9GkaQHzkRPJnVHu7JBV7VVSqmVc73oozUS4zqgLcYqec4VbGjtWkLEm",
  "key38": "2zXJj3bKqme9eok9QTCQZ4NwhRcCLL2a6dmr2RVpuSXfDyA7bt4gzaJ6kZ21rQn4UUaR9pLSNYEWoec1ShbBY7CE",
  "key39": "3rkNTP6Hmb6nt7E9g695WA4pzjEjpJfNQ2iqBQKapo4S7DypgYqGGj8AUyWM2gs6Eewcwwur4TrziNNdoE7WYXDi",
  "key40": "R9CE1GMJZGaDL3RxrT3jyG4KSpdAq5XzV3QHHQvCVSbe7mdz1aY8CWDSHbZUFQNsWwAbmH7hvX69HNhZER63BwN",
  "key41": "5jECt1R1Uc3rGMFPHJdGUQSEMdsuXhf8hmb9BprMicCJMxQGMX1zZv3DocgoyTPvdARy46GSKitNEM263h1jikMm",
  "key42": "4hz5w2kamAocB56MWo2AYfwK7q9BYxo3BJrQ676DtsyE3f3Vo8X9zpxMux8Fn9e2ehfix74CT7bzzAuNdioTxVXk"
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
