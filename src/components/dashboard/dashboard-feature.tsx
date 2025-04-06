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
    "jbC64QqdqhDH4daAL7D1PAAaXo7zmYQ8y1aHAXpDd5Cz8VmX1LUSor5kp5MWBbPKWJUX5vFKpuDv9BS9gLGSPJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JbAfMaf46r4KAW9kpeixtYqyWPr6MVGHrgDU8ucQzcLGxEahyYCJws8sth8rdWD4RcNCk5RVBz4xhdbPLGwgUEj",
  "key1": "2X9DpXrzfqREumhAvcveHnn1DRg3dm4UGj2YZ7ybTQzd3GXFyz66Y14gAHj5B4LGzW2ZoPu57jTdjw8yWp8p9fp5",
  "key2": "3C9UMhVPgb56yTYe2DdvzARq1PcNcM2yK6To8TkndSBEqBExWuZEfXkzDt9pCt5xHtnw8q4CsaoWfTLwBcxx1b9s",
  "key3": "5tgP4mXoJz5YTPhdirdbMJtDXRdefMEHFhboge38dDsqyJpEag8Zzz45UrUZbYnYKwaTa55b26TExy9HqDoPhuhf",
  "key4": "2DA7ioESj3UNLBFZGj5SyumZVxod6mvHt1fN84GPsMEv4tF1ArsGGwTfPERfkeMS3KSqc23WaVAzrzcc4h77VdRx",
  "key5": "3XTaqQLdHmFgssKAVPqPrZyHr4U7w6792RtDNEt99r3efncawo5DWWhoG54YfvzK3EbCf5kB4LGcj1kKQk6EzmVK",
  "key6": "3oafdDNgayaC1rZwXMfTGnQeUR42B3Wv2fXdyqHAcuYk3QCjq8vvidWZ2eEJjqLjg5YVzEuadMeXjZuPLstzdqRg",
  "key7": "67FwRkpwgtKNsfb545ziMquNjbpUGhAX4fDP9E6gvorMv1xeXnuvv255tKTwPPCjGvd1djGupVvHKxnSWVzeUU3t",
  "key8": "5AT9VwHekwtnxGh9PKHdRXpRTwfMn4qAZPWGRipauJA9KpoWMq7WFgrWwbSJnjTUF4xdZ2x1NxhNWwJ41Z3f8M27",
  "key9": "4NtHczsDKoCrtKXu7MnA7NNJ9EkuLePommju3S2aidAEaybUHRVj89oBgCnr1bVXfu4ck2t4rH55UcjDqWSrzDG2",
  "key10": "2L7LRpGu44SDNRDTAYVDHmoBbecJTuxKcLfgUNSbe7uS85LpHWPchEs6C2TWhAUnHC582pyavRXYPbyG1zchBAqo",
  "key11": "4cEyjkDknqe69sMrt1ArMfCtyMZvbQeBk3HBtHvCCc71ioddD9WEceCRY4wtvEwU6Um5aZA1UKs6B13cZja5XKwu",
  "key12": "2jbWXuQTay21r9YbAkPWjdwmTrZGUXGMdgjc5z8Qm94FzPmtppdQBGbA74zt2QWg9U7z5KZZc98fiyhB2cY2L4JB",
  "key13": "8gFx4vWabvjvcfhcm4iQav16Yfd5FEiwTaxPA68eggd2Gs6E2kibAMkqGDsnBHnKuGt3NexZetauBmUxMPAdTcJ",
  "key14": "26LbyRYcFJuvZn3ahxYQGjwSC9GX3MFwQUc8KyWgJ1GLkk1VCcUU2bxTnZsskhs55DapR37b95xgfSZz7ix3VKpR",
  "key15": "4cqB8c6jwFZbZpknBzgUcgqPQyPzLg4oim54a2MhtmBgExk3rWdFECfAZciidbiweHq79eu3khnRNirL5Hkyxgxb",
  "key16": "hq17E6USWdEQZfXdhQMhtQS8GL1BHvunMVmNyt8xJme4kGqayAiAn2yvyXiBWZL3DurnAtnJdxVh1kB6SovuW4A",
  "key17": "62gEyTN3f78SPyiC65hRWiEQAHqi2CG6u6hfmXU4qqtZ3mjFGqVRmBaSvpx986Y2YrAJGjipnx4kbSvGfaix6SUd",
  "key18": "65wLfDRbP8g7f5k9A2Fer8mBdrFxQFJErvwNRm6y1jtXHYCdxW6ty5ibSHiVqtRxYQzyy1qXTQTnmn3wafGo9Xih",
  "key19": "3u1x82pVSNqkxsBx3UpmCeV5xVSYvAMDN4PDx4dWndMWCWizjaw8dJxmVphxDqfi78CtfxQdjb4XpTrLSmw86EHZ",
  "key20": "52nHNJp3SL8ZnReHapskdq1NT6eAgu5wpCZHomwRRGAQpsac3jWDsFkuXA2LP4U1Hc5qmcgMJzP7jyXAMxyc86v9",
  "key21": "EBvyNc9M1QGJnMNLy9i6AUAGyYk1wdPiY39aiJQWqtgnFLFtWNd3rBYDCRe3QsxGBiN8dV4Kq24Lw7nYGyfuRbc",
  "key22": "y6aV6pKGu5gkRapisD8H7SmRK7X2FFAuqKbwX7U2x1rRx1Xph5hCbJcHZNAVMtTjE5eNxC5X8So75gRRucZyRpm",
  "key23": "2Wy3dxRhQBW5LTtm2ANnxQhCbuw1EA6tiMW8Rqf7s8pMeYU64xQW3n29MkKxmVpxtPkiCPeR2s37bp2tjPN7DesM",
  "key24": "5A1cx7r6UjW94rak1K33sj6BBXRQYooB5RoZcYYpbZefS7bkNXgj5K64pk1SuPQn5p4CxKy9JQy1xesQLb6JjDXb",
  "key25": "G8bRahiTKsYkMCd4N6JtYZPDx3fDo6ZmhXHZgwkC3JvHpUcQLPC54vhJf8CTCKg6WWyX7BZz4nhWBH9Nee1fF3T",
  "key26": "RTzY7UMkU2M33pWGiWWTq3kqA7pk9jwu2FGb8yrF3uLzNN4FdJznbD3yCiMNyLCXhPC5kA5CmnZ9YGLJ3q3ZGwm",
  "key27": "59SUypF3Dbj1ETNWgb7CCu9uiy9PAZXoP9SN3b1x35p3frfy27qKo53FTv4vab79sVYe96nHjbYAEqkpb1DD47tC",
  "key28": "5f5r4DvtvDNGFo16jVroiVQZBt3XDHxxjS5UnxNgTAWNsfZ4BULThnsEUnhFyW2yfhF4T6uvRHiKg84SnFyafuke",
  "key29": "2oSysRSxWTBunH7rXt6wWshuqGgxKs2CGS1PnfNjMxzhbNmKqs6ftp1vJjEHcrQHGgcRBu3K1kME5NgvJRXr7qvB",
  "key30": "pUjzhAXzV2oQ4Vmwcf8sXBLWNMksijRVWntt6yHGWq19StYH8hphEasD4HHDDy7N42bDyZixHPVgHyyMWvgJbzH",
  "key31": "5jvrrva8DEEp2GmsiGUzomA8PBNRvxsoGj41gmv3SdBepKdBAZvJU2QNKpKQ9WhR2nnRUP6YVaqecLxGgpX5LYT9",
  "key32": "5nBsE3NNsUJjmViCH4nr5VuK6myzMSeuUVqsC92WXfX7Qw2vyiRrDKSuxwek94ZpsJFwBfjsgAxHoCoPwi4HoVqb",
  "key33": "Yu5juASELT2u9zNotojoJ8SAbM84wEeKUZjmsuiETTy3igtWCXv8gSVgKgoKdTPzzbzuASudJUjwGRU25TrYeg8",
  "key34": "21qV41ndVXNQgLLh3KNrxPMsCxcZGUttFDvHG6Lfo8nDHEG6B8zcYoCtLQTXygkim6qVVUaGr2ZwkxVPh1g4zqYv",
  "key35": "2T4dzbmWEsmrARPp9XCgTGe6mJCJPg34SrMUJaGHxHVuiZ4K6XmVQje6xLvwkH8tohqiccoBT5qQZtRCTKhK4M4C",
  "key36": "5BjvAf3R4a5pA3joANTV1wuon9PS22VVzamXK3xbCeCThSBfRpX1xHJDgHYCxujXA81zubw21DEYLs7UAa7A9VBH",
  "key37": "PZctS81xTyJ7SQ2DS3H6LZGJE4euEvAV83SMUHNrNTny8YSCJYF1Z1A9sz4BTKcnDUbBEPLxy7imR6zaPi2WEfL",
  "key38": "VXTdwtPGxbBP8B6KNPbNmnRU8QLyXb57ieU8cJL9ZRxSXi44Do3cXncLmuNJdNbQL7f8tV6CefSvVHN6ghTejtS"
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
