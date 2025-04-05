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
    "cAnmZSh6FAcj6TxiqUh6tdx2z4x4QpBhQ4nqpDMPpxyZhgEDTofwwAwnSPdiSD8XRDr65kZLcBLUxtmRWaHNMmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4427qPzezyCxNKvLS5XkFkzieAbGZaytKCWCEfU1M7veTGv2NPDqJPMpdt4C4KnrPanJKhuvFHWt2GTYvTjmaQ2U",
  "key1": "34kJrcr41pgdobSJcLjerJxx51n16R5da9abBiHTv1A2S2zoEh41Fq3jUDjuftQ79yUHBdK4nRfEVqMTijHyWY9f",
  "key2": "2zstK5nv6KcLSV12CTxpEAdYHGfg7efBrzxsGDSyBKjNztaSFKJD7P8c4F3AyhZEuMLkGeWuAzWiTS7mqcQY8on7",
  "key3": "2PGuiZB2AJpAWpchMSUKvHbpCPfAH4nAWKGsTjjDSmvpDbga5oJgdmbBjwpnAXkZb7dKanZ34n9Mdvf526ZjB6BG",
  "key4": "2k6iRpJshHY4sZLnwGzhV7t8yEyj5THZpWn1yboTAPkAp4C8JPRsAHcTZuhWVrcb4XavidxtaZhDPimtJDKxdtAy",
  "key5": "4bgDL58q14EAvhozLVmYGmQ2XVCBmgWU3f6jNR6NBHtqhT4MoBQ8B7JFRuqqcGJuZiLEvJKNQr2mnm63Y3FtFV1U",
  "key6": "CYfvngB3X5y47a4HnDmeRnuyeZK6tvtfyzPk7rgiruARdWzotyQ5MwpYDsEAdFZfmi16U9Xw2T9CFB24HA9AoJa",
  "key7": "mGksAKqj3CXXY6MXfLZHXbCJYtJATWbboYNvJDGChCRYqASrjd4GnszYy4vJFo2ERGYLkRss5suBj31SkjvfsRu",
  "key8": "4srA2NnwQBJH2LLfKamX9ysuEoNL5rhWjTWdugvzdEGeGuecBRoAmpRnzrTua94R9f6iACqmg8vqCpoTn2whTAmi",
  "key9": "3hfQAzR4237DrTk5EpefSyep1CnoAVjqFNSTV4iWjzbPmpbEuKDLxB9WnA7bsv6omhCuQRWs7QgUUsnBL9tiiVLx",
  "key10": "5qv5Q7bcgmQ3a6jm4UTgHSxaewDifVcxqhW7LHhFGYayaGEeWLvFhE9QzFTwNuKXgAXddStgc5VM7TAmra5WoGpr",
  "key11": "463f2VbmDEdvN1YukRPhcpvRzf8G59Mh9xs9AZYBqr1XnMFKCzCvdFhjoM65b3rjro2ke7L8avXeq3f8yzwqzLox",
  "key12": "29NiJv6Hn2FcGts9LaxTce1s9BAA7WpE2VAEK1QCEhNc5BcYtQqnUfjET7dY8b4Cp7f6HkXjiELDuw19pEzX1tox",
  "key13": "5AduGh3DybYqpJrG7cai9fkHm73QrZvKSYTQBKC2keUx8qkDybmD7sCveMM1iaDVunNtRpGWyyHQoBNJQqER51TU",
  "key14": "3q88DdWsu4kRKxBkMZq2BLw1Re6bVt8t1o5Y4sxwVNuLmcRCTCJT5jLgYj4vWkNaHTSwPh1VYQ3iKL7SmTQWGkNr",
  "key15": "5YRdg8nep6Mq1darDCDFxatf1ygqVG6BmP5rx4BFGoWhDcZZ5zpS3ngMLMpCEKS2Zi7wyY8Pa99DS8g44Yqp1uiv",
  "key16": "u5KdKJN2iRAcdQkr6kHQf2T6rSGDdE1SmF66FUDx3Qk4QiKqffNmnYTMcuwDXwv5qr96keB9xicosmoGGVyMjVh",
  "key17": "3Y31kkwshtGMv5hJMteBq2ChvaFgh86ugrDEAos7v7G1XRQEcPAbb3WWSkSY9r4perqv4Wf1oEBSa3dZe6Y2Zvuj",
  "key18": "4owfcYFkicsmLPAeqoYMG6Zk4yYphuCVv6dc3Pji2bHutMB9FweJQgonReM3siFUa2VGCaz7HkWbfa7bo4PThiQq",
  "key19": "47F4ib3NyQdS1pUd9HujMB4DqFL5kHr5CiwGtupu53BCDU6rW3iBuR8vJxmxfcvaGVfLkn2fV3VnweFWtWpA2Prm",
  "key20": "31hEbUXbhnDpWkP1vHijeyLdS28ToXjCW9veLo6rdvZMet5YE6UCRNKHMKkxnCm8cozuZKHemTdp82VWU5cjPfcS",
  "key21": "5uUb9zvnG4hfe8sF2K7cUpydBPzVxjkLqLRH1w2G3XCZfAavSEycLNEvLHgBmgJomhGTju9xKQ8RthJHqxw9caE6",
  "key22": "3FqqwQAFMf1h5tu3S9v6qyK24UaEUxaLCjRdEWAGmMtqUZ7TjJ8NKtfyGnKEcCZ8kUSsYfpSBquueKyZoNWWNjhq",
  "key23": "2WqKDN66t1W9vco1aB8LM2jjYoEMGAWrzFVXd78NsgYkTV9fqLJ8zKnRzr9YEfj5entyzz3Yk8DWp8zQBGXR8LF4",
  "key24": "4PPDNu2H9ocNGRt8FPUVsD5G3H5XsiSLFaTPktoTMPNKkorZM1EpgafZ6Ft1pk5rGHDYScXuz9A5AstpsPoND6dy",
  "key25": "uZUQGfZtFGFeHSrj7TdqWomKGnEZTHKHDgdq5Z2NN6BdRLvMKUC1CAndSJ3aMKZdnifGWbaTtdkjmt2SJdssKEG",
  "key26": "52vDGWQPg9AaBKr1KkKi7bBJnE58JHZfN7BaZ87XdSh9VeAadw8Gk8ZUoDCds36xY9E98qwx7CETkaVh6wzS4DfT",
  "key27": "BDX6YN7CJRQezQAH47eRfFVxna5PYBgPRYXn9quKcHbjkewDabpYfBhPj7qFKDNzXENnk2N4UabwgQtnBTeLP8G",
  "key28": "4GH64JsAQMyzuY94ndsUR4NfFVj9dN6yuPHKc3Rv3EVymdnijLtiDy1tVFGpV81ym9gTVzTTercB25JSKCA1daCw",
  "key29": "2nJ3AzKvi2Kj84XmUYgbKjxCog2aFEUVCG8WuUQRk1HNJKbhX1wkbKsWuSXSMuLwpM9AUEU6qhsz9NPje7MiZReY",
  "key30": "4U8gZ9ediMFpTckUovMwGrbNY2tHALkJNM2koY7fT7yU6RXqc9KMdhf2LC7usNMYWnisNzZPPUE5W8vikKTGcr71",
  "key31": "2oshyb3W3n1DvvWEKV54G6KMAQe2KR9dqJUTGvVH5YUgXjvKNPztZAAJ3V9iGW8yfxveavwnbaYy4VMcxqrkVpha",
  "key32": "21XSfssm2k4J3Gnoa6LhrAyJXNm12pUHJGpJ1XZucmmBgWTAszASugs3KPWrDUpM7o7UE8j34KwUE2abbZsiBNPo",
  "key33": "3v6H44Y4EEGj1fUM3cbY4cUHnnnAinNy1HjuMkAkug4LcqNQ53vbGuoUrGD2SsrWuqqMVXt1aWMPepZwCECQ9wf",
  "key34": "5GieFbQ2uu2BM7BciZoMRBe3NxdpuwDsTZ7bbTeDR84Y9dkfcZMccYB1CWLruLPbi4JUszjmCY64PwwZwPkRnJMi",
  "key35": "2oVrPaGYcCNmAwhMV28dLV2K56qbvBDW18dCvcaZsJDm9viMyfLYJF6vKxKuXAZLQynPvosDzb1HRYCUcEPBCHYD",
  "key36": "3JzxviuTyu8ubKazSC1TSd6znGjSVPyt4iGxxFE2ue5jGkN1GHCDJ7V4Axixyd2BVYe2LKKqdgnnLUXXagMRyqmo",
  "key37": "2xKNj63vGEGCzap4eJvwXxzN3kRCgan6pPUmBPxzGEWL5e29mVZ7NDAFsrQjHKB7obbQEhgBEkW1LFcYJmGYADqQ",
  "key38": "3ntvL7TuVHeNDXBH2XE3kzmjcQTznXpCtDXY1VHyTxin7vgvuP7KMHxqWnxBDysJ1N9yM71Z51Ukxw6yRQVxYbDT",
  "key39": "5fjV72eDfaDSkwYaHU59LduGK1Uu5EFbhuFfLQ8SDzaNCzJR6gLsQxsCji25jio1AevXaXurftQ1MQt8P1R7e1JG",
  "key40": "MCboCbvBX2W8jDk8YPmngFaeyEv1tAGAhu9VDDSdRpesdEELYvA6dMJ2HnESrLF9hYpaiFV3fYTmWSsSzNMubGn",
  "key41": "2CzAm9gTC6gQ8LguGbhx1YBt1ghnsbFYQHAkyKJteSAk3gwH9UiVh1trj7QfeaTsdUTEiuBQjhG4DHP7m7DahAyX",
  "key42": "s6oqqv5ENe5668icAE3hNk1siT2yfDxcmDyoEpiJdgatLmEMjfdH9bKZcVd3GP76knZq9SzoEz1teMegQyUwmMN",
  "key43": "29rsVhqtvGTGvCmUHhaD8utqqGyRjJ1CXdexwh2kXGRHoDzKmVxu2YhHXQhDgYc2nvz5wq96n2e27MNk4rvSdw3c",
  "key44": "4WVpZ35C36bzgNCMeo5gbJunXsdw2HieonZ7ceizDfVrANCAHXNCXbrGosetKUNcFDT8Urajsd31tG7vt5FrYFnA",
  "key45": "56gBrNJHQrMa32qgrSiuwRqx2eFgfFaMCizYcJgQjixjjHp753Xch7e1c79Lxbv4kFUGvd7RpqnMDMKph9K5TQ1C",
  "key46": "57J4DHykS5iUdyxSqKv5bhTygLXJWiTNCjssUmtGmptJMR7dpHrbfbcvtLaY8paCUtwLGZfaYvFEiPqjrU1dC1Uf",
  "key47": "2eobStcked6UsMkiSXMaq7Jot1oJZHwywuNUquYV48En3A9wTTrQmhZsvnbGFajUcNyv2gaTzUfewQfVbZDZfDZB"
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
