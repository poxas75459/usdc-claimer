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
    "5gsG4FVmenwSsCj6YvCCrgvsDFXAjhRLZp84xzi2Zuu6mW1GghuiQ6guevjMnig79Tfffuo3SPZixrEXhc8C9W6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wjjEVbgm127CWW1M3QhCdRSBVxsVynF4BWAZaPKdi2UZxBxyryLmDEX85iC7UBwR3oKUojd4i48T3GfaaFeAfGT",
  "key1": "4vEnZjYwmDGE4jgwduxzXaiATLXPAPmdAv3gBFRXAQArN52nhTbu2gf3PZXTmSGNjU3XovL6sqhJsJzJ9jhYXsKU",
  "key2": "D5NTJk7ofh76YnwNr9CTRTPPPVFd74N5dgm2i6SDNZGfXJBcCPpDmUGSTYj29NzgKUXAXV5BCLtEkirDE9P4tki",
  "key3": "3KyBuwLyJHzcscZPEDAN5rUvgHfvFa7PpdxYJrUCakrNMd3ouXTiXkQtf5JcqB67DkgW4s8MydeXznFinsLnSixH",
  "key4": "3XvwwCN5XMRZ1s3j6xV5825NirDS5VoBtbwex8ctZumRGtG4XupGMwrpjQN5xDceiW1HvVJPivphGJxjLwG2bWTd",
  "key5": "4oPbBkH7fhnSjw33xNppaWFjvaxL8TCS2LC9HUeMo2hiYnmWrnL3hJ4xFAAxDraFX7g9tBZGuscTGNSc9XkL8uXn",
  "key6": "3w6LkJQrVqXboQhKUKPkvb5CQSDJCC625WxnN7b1aKLi4DvgevT37hoSA1PL7bdtjDTChSJJh9YiXZeeTCsBUb7J",
  "key7": "AHeb3ejcZ2W3VPzrydy4tQumtchMyYbstCHhsh19bFvKRwV68RgkRvH7o5By7nfoTK1HgVMtGVsdEhbMYoQFVDW",
  "key8": "2APuKwnZP5mopD5CtsJLcUxgzCYGYEDi4ugBhJqMixPY8qDvMeDx5ipmRjVPcJStYgKc3xi5N4iEy4UMZgqNSzvX",
  "key9": "5t5NqEFnChbyAL2Ezg2V6mLYK55wqhnBDGgrCbkqHB4KqS2w4X9UYUWkczQm384THQfRj67WTnyu9g7xgoeM4nYT",
  "key10": "4JWyvhyuF3AtEdzNvShDCyPNRyrEs9f5o7c7Kf7yRVZecgsatTrkzDvcKZxNb5U9eDEve9uPGb4azVUR9tq8FgaB",
  "key11": "LjFyH6SrAzZSjn7rKN2z42EZ9K2hgm7vXFm4eypfeZaX7japCZo59foawRZN3qiYfNmwmk3GxctgxXpA7TJA7rp",
  "key12": "5SnbcaLLwE2EpfZLUSvYtfMRrtva8Nanh8P73xKo5eLxiVUjmenvrZjDDZFHzMP4NMC8oeJiijDGTFYNhYrBCVXe",
  "key13": "4uQsovy4G6BQAUACReV649CnrHGPQhESkdjNmkXJyizYovywiyDtuqUtFNfGifKSLc4wMTohrgYY5ebfjteJznQy",
  "key14": "4HU4Ew7fspXjG9qMixGX2KFTonC5XwtHKT2RhAKZGkwEeMw9FRLui7L5jyhMPBhxbPW6RMgPGRruRnAGh4QNZdgW",
  "key15": "24o5FYGjfQAXs85ZoiM43Z2CEQMcqMTi6hhDnHXGQowvzJj721RG8v7o7nxV2CCDHdCvY3i1LYYMKRz8j8JMUNWy",
  "key16": "67XCKv6JZXNJpjgAbTRK6Q6Yc4DK8rFffXE63utT4GUC8cgMp6NitRiXJexPNXqDDaygPYR68bKAFd9jXapM6gKA",
  "key17": "4WGUfsFSobXSHKwsTdQasdkTNuheYzmpXWNjQY7RCMeWwAfbGXRBhisXTodem3N87YUZC1NixnegVVDRPUMyTSEG",
  "key18": "4VvE2tKBu7RkscJ13PZMuh3DNWtVaRgjC3s1Yb584RKGqyiVGeuTFbdWipPM8s4cdCqJy6br4XChGYGoYepqLjFK",
  "key19": "2HGXeM4ZTYbJUH4iFYFWg5M4EeQ1ZrrQ2Qb3wDbnWHcKQuuMhcdBiL8qtwHAu1fgE42Z4Qt26XKXassSj5Pv1H1R",
  "key20": "sziKqz1Fw5ZBe784tacwYxDRjm5d2MsjhFpPv93y4SL3CKa5HQVqEsEvq49bn3x7rb1Pxs4hr3RDW8S5spfpzoZ",
  "key21": "2KzsL5EMDs6a2U16saqNK3mePB7pnJF5UkbXwo61q9kiSRe1ewANVbcgYRBP5h65RbkY5KYYUMhZhJcZ4k7LvHQ4",
  "key22": "5dNL6ikno23YVjWiuHN9zk6eATPD7h31e9nfRAvxz6gHgoTcxdnagunwmC3QtoByELSYNip4K6QzZgDvimJpL3fG",
  "key23": "5ePybCxWXMbrTbPprNgVPWBTUJavjerdxJmRt2Z5VnFVGacuPDfvuRVztpwuCzNaC7NeFxKHuVp6n3ExPbCMUpY1",
  "key24": "kiT121Sr11ST2FDNa4uC7fLRKdA8rvHQ3xuiqvH33hpZtG55L48DZDPqvpkfEt2Qk1icQekomLyRhLG2DkjgqVU",
  "key25": "2tkhNvMWfQnQvdZX3GZbz22UYJvAYqoHQKWpBYghmiQaxYJC7XJRbBDkz9JYFpJ2LtnKL6zP8SisrUqgrfyhKkk8",
  "key26": "5rjtxR86dgnN8LiqGFppvkP8wqHzTLcSC9h2yoFUGgQwnTGFU1rYdMAuVxY8DC4Sbs3CThQMWDVH2Yzu5WfxGBRs",
  "key27": "um1AuQsTzRqi7YbDQbAp5oLiXriNPVpnQbfmrvC4y7xKBtULVzuyhTRKykFAKzJFbTZGtCgDKXFUTXrR1hEApYk",
  "key28": "3D3E3VUHLLpBfCWS4Z6RueK7xZHcNjSddNftR86Y8uh3THpo9Y6UxEcimdXFcyrH3rBZHLmRV7dywGJd5krLLn2V",
  "key29": "4xHsLiG8KvcVWZ7eShmd4L48sViUb9dFNUH2iH4nDqpbThdsPK5ewhMZd7Sdw53qwe5g9UekbAvPJb8TXLtymAJ5",
  "key30": "5K7iP2mC8JMgGnGRNxFWqMCR7NpTVEAho92B7cVu5p2KeL3GZg7j641aBrR9m95FhqP1VexXqDncuhQVavFJwFm3",
  "key31": "5rALw24MEQteAJjgTdhcCeW2A86uR1tepeU48TiALCi8PMKtmxAq1xi4NsiSReEL8Fr8T49PNRTLivk7rwpEwA9v",
  "key32": "3hKYnTqAW6ALABz6sUvVG2HXHwoTaZkVghnrgB7wBWnQ3pgmiSLp8sL4qaRTNvMB3VcwupcXxp9CY5WBvsLv8Qv6",
  "key33": "61NFgqPaP8rJdqMEyC5yjTRk79fF3Z22qF3WYim79a2G3MniLDSevYVoBK5gKpwwgMrc1HUkvrYXBMdeZQHQHgAN",
  "key34": "3C2JycQMnuB8SWRZX1MQ4G9i9SbKxMAMXntgV2Bq1SupJvxZifgv2dtP3xHV8gHeBUkniZHK1H6v8WXcDr8oRQMm"
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
