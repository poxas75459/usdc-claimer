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
    "5EL9xT6sHGYWnZ7S7iNEWvJ5NhYnMUq6QNMuPsjBpSisqNzqmEyJ9x1mDcEogTxAXFam8adbcwDrjNBPuVpHU7BN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NTAE2wvKUhvXaGgWfgmKHB1oiJjveZ1oaK69CMedy8M9QPvq77s2K9J9KtEtEqVVq5zewUN4SPKNEhKEAeS3Xdm",
  "key1": "5PhiDw5QtuWaXxo1VTRkKiBYRpa4AZ8PjAr3U4dMK9doxWgcbNYp3FTGZfhEgRbsPWee1YBN7bNQVgzsxmkPpoYw",
  "key2": "3JLyrpPBRzrJtCax9yUtoYBihrV2uqdZoiCbnANNJKfR9zchpDYL1jxxWENG3UC5q4fD3yd3ayCJdL77XURWyWL1",
  "key3": "5LJhktAehdioeavhPZryFmdcHdVQTjqEMt5ziYrfL59jn9GA78ssDsdqHjP3fYrqyncVyTG4YA3KBarF2kJ3ZXQU",
  "key4": "4wXDz6LciDRzqRSXdVcWSBNmCJFQN3QtUmxCnGvQdycF4ZhhZos5nrLtH9hTD4rhFfxwemwyxEzXjd1B8XQsXfrQ",
  "key5": "5jNM4f2sLZts5CGvySSxQxEsmj3kRGLw5sP8owi7qyp1vMWybnZ3wVw4Y1FbEGEztj1cBWwXd9uijZmd7BAaGc7u",
  "key6": "4nwFqDxfvSezKpshDGQcw1kZPVYibUpMhdSczHBBKhppyLBo1GAQKBCWeXSHB1rs9JPPVhyz4DCnUSnDGFWVwnR",
  "key7": "5AEwYc4166r1TYig6zvq629r7ZUhTA7ECLa7XMamyr6Xh3pLnb7AUzUGAuWwAjGTkhQt221Eeh9EqM8VjWLfe229",
  "key8": "4nrWSVxgDMqMhi82LvDxQeixJFUKVjMG7Scdv1mrX1Td4TcVmQnDD4sL38E2ECbRVLQdQGQhehH7RACzMyK5ZaJF",
  "key9": "3EFp2p5AD6kHut1CKHv6tnarMnzop3K9XQwjiedPGB4VoaVNNFTaHta4LJBxQSESAwNnhh56hTZ6jGA7eg9ww4AH",
  "key10": "xaRW44Hjmxbbh83mPn59kGWVvuHE2JzYpRJSJKxCHUNWZ8utKPkCWwqNX9CPBXotZKaaC18vTLGW64EL2Lq5P96",
  "key11": "2iYx4D1W1wqzS2aD8yq2hABhrHoA4g5xBRf5a94gZ6it3DhNdeCEheDFTfSSCLzxL5FdZNpqEB8UjZVjTK2QGjsc",
  "key12": "2gXfKi2iLqbsHxR8GqhoXWyW9NAGQHMi5AQiQGVqhjN9vE2gS3pQSFJmSR492WNjm4bkGTjgc49BZfe5RuR5xKvU",
  "key13": "64xYCPyxUgcEcKATNM4jhnBhc3BZavRULuaKpiShamUWmtENBkqRXLkHdxziqegUi63r3gnkyrcMPv9uuNfYZ9Fu",
  "key14": "5musy2GySsE29QaKftHqo9TQ2mBY67VjUBeV5v71aDaEZFCEE3U4GryRZaJEsWCh2XABzj61dvQcvw8XiEnyyzzW",
  "key15": "3nkAiuMTbELrzRSofp4EJkrAf1wXMysYp5gFAP1rNL3JnwU5qUjHtTSD2BwTsHPuK9JCYvpb53KinE919sa83ZWw",
  "key16": "2ym7ew1jfaqFJrSdjrH4GoKb7Tm6gGBKgjkifkSUzo5t3P9k13B9DywVK251W6N9nzQXYbaYENwGeYYoArujbnmW",
  "key17": "59F6C9Yo32WyXKDdnDKeaWAqvoyR1VvdkiKusoc1sDEmpn2LV4Xe6Vru2Mox7gNGAvPwMC3Aj87Ze7FSTfXKZvDe",
  "key18": "2QsDA3TKPX8XsJUA1NcRaMe5B27vvePdRrKHyMvP1sFdEj3JTXxe1CTZCZQjm2Rz7JLRGXfU7ybpCTnyVKiS5Umf",
  "key19": "3zbz579CKGLHb5J1pdAgarPeVJmFEooMkrZHq6u62zeqP6dU8uofMyxmryt18Xh6hVdGTFYztXDyAB2E4iny3Jx1",
  "key20": "2WwxTEygajLW3rgBnQTeNDa6SH4vPf4tHQf2SvuMTqHnvKiQpbakia1mfL5Tz5t5gFMGF7EuS4EDMwHD9cT8cixR",
  "key21": "d7eSSYxYNj4VKqFaQHWRdkfS3ZVfEyUgd27JZzBXx6QZyfg7AXLWpSko3Demkgpcthahhe1BYUHFo4JYbcGgfU3",
  "key22": "57bWVnsoW357icA7py29PyKpLqxh22nKxjPMbrNdLzhsfchNW2xvtFSN74maB8nGD9AbPtD5tHoQioxRuX1A4CMm",
  "key23": "AMs4Rd5LT4tU7paBA3xXHCAJ4vwyckJGZknnuBtHSyCCD64tyVZrrizqfStnfmQb5PqtZTUcLRszHmGj2qQprJn",
  "key24": "2oYwu5yhhtayMJWd4Q4XtT1trVo9fmszTq79QZrk2BsYahGNuZARbb4ixx5T4xw5jAcoEpvCX5ZXkPzNZJWBAQfT",
  "key25": "66dG3w1cqMvjyiMqV8wQNUspYSHegZrLMGc61bwnN1a7XukwpJitAwXbGJcfp9Lb93can2f9H4aXnYJXFPtNhrFV",
  "key26": "3YM77uceoQjipViuXPnFHJbBJJ7XpPh2iYFADjq2ExvVwRF2CQp1RhqShEBqnneFzya3tEpmvQJ7Y9UEhuqJtQik",
  "key27": "4WStdKujzTG8684wQFeBtTcBM7p6bWu7FHN5UaKcSexYzpagJjiz51g17hzXDioW9UCiNt9VgGenqNcQcMUcmSkv",
  "key28": "4druubJoZWbQ2Q7imAg3y4Ppw8Lo9GhEuPjd1aj8AbHxpZNbSmZkNp9xTfz53iE8XMm8hVJ2p2mnHQw5sHciPasC",
  "key29": "2rfrPATUtyhVYg4iA61vs6SMCLZPXHZ6N62q5AgoqGS7sEjhDQ5uzHJkxNmRYLU44hHvTRAptTsmnGLxnxgtFmdk",
  "key30": "4VNGLw8fDrBCunaEu33LjKdj6CbuKjsAr3nyJavGew4F8PAFNnR3p4HfJ4HyK1po7kj5kTnR7waQJRzuR1u1sxCn",
  "key31": "4ax6Qh2f2UAygHENCiiby7AZ7QnuyptQ4d1mdwczXz95UbndWH8FSEKzm1SVdwnKpxY9StsURj8yimdSjWqMTwA8",
  "key32": "3JWJ23JB4gpYj4snPXLDzzp5sU7KgYsZRjbnwSAv4hsX7wBxaWxXcPecsFcGxo3mk3N6rwjQiVrLtGVHJmCrVvRc",
  "key33": "KTa4joXqV5GUojJ2qTBKifo8QAVChwk5CxNGc5ZSd84hBHj1mg4kYDVzYZcJydDU8CVko9kCckfchwa7FsXFHnQ",
  "key34": "4gfpenibgM7DmcPgwZLvAzFhkoAX29LaUnvLK3PcskvJXqtsU6c9Vd6RbXrixN77imBJrgtfU4HTeV2K4PK56P4P",
  "key35": "MKHstg2YKxqoZFuhQEZWG5ouqWBmE8no8vNg4yMpttZmwe4tBt4dFLe1mYJrpEPZrWLpf8UXywDnH8DUV3ySgmr",
  "key36": "5R5CU9mLDXbc2HxhNXDSmb57NtX2pXArwFKBaCC4gdKVuSLYZGsNFGVgLW6YeCLVdFUKuhrLvezf9VyKv4TrBbmW",
  "key37": "hBYPUtoDo3XKpVFao4AqhPpJArbKYzAmivRyiZr5agQ5F9WUGsQjafCyhhC49HL14vngtH9uJiRxoy1mziFqDVc",
  "key38": "4GgtuKdE5K7bVQJZQQS4eNBzCZrRcgVaDCrUZvbDsV1Mbp73W24xdkEPP4figeTZ19tXLL2mKx4nRW9bne2QTVPz",
  "key39": "3UuTJWqHZsuyiknw8jvTVSC5b3tW6b1Hoa85WRPVcpq6dmCmUjLaLKVYTuk2PNSRkRQKJMXYCCUhxRZku4cYMoWS"
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
