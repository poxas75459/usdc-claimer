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
    "2Q5GgghKbpYnyCFf6snitgbSQVPmGSLmYxvkf8sYSXa8JkTjA3SqhMzGx1a3nhP6djtSWutwnpXdUiz8uHht7tkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ktz6SPXjzSLDhv3Hs23wTSynUWQVQJrQvkcVHAB213SiWB3r9ouRo58qNYB6uThCkSHvJVmH4f7AMMDvwWAaagS",
  "key1": "4QkoyVKrCcWvop7cg1WN6VFreyEhJj5B4CWVR4Eb5heLVw3i6e99HPZPekvx3R65LL5Fd4eYeNWTFpSKEmtYKUU1",
  "key2": "31AqLYWFMc1kbe6keCoZh8sKccFtALAKwRFApqwVZesW27VpU6PvQK7mcNYqknoetV8rdWmcpJUixrwEiivSnE2n",
  "key3": "41KhYtpsBDTravKuJwQQWgenkVPDFqPhx6ghSLzcnWULMAB9uY2VdHqke4xng26HVJxNrc6RDGnDJd3M96vCffkx",
  "key4": "4y9Lgh2rEcpowb3PdYUdwegBTVhHG6LZzD5H5kmHjwiRjg7dqiEBSZpJX9xQzHDyKxbLF5JiFei5YaWNbtHywY91",
  "key5": "5NYb5FpWtNAFbrwj6pQ3ymNMEx42jKgKP9HRdLD4nBoxLBxrrh7mZAzD6Ethws5U97Dm56r93XbmNLFWkBRwkGtD",
  "key6": "5bnej2wyVmWemKkNZ6yRwTHgyEv7WCnVBC1z5byCh2WEZVAujWNwBHmCtZuoL8brnT5FvzLNt3CiaUtuHhXav5hd",
  "key7": "2Z1x7vMCEUSETDEttq87FqWCYE2ajdT11yPVW3FaxsTZ9G97PXgctwszCT7VwQXCrAZ73DWZRazKKc8MJNgEVNnZ",
  "key8": "2Wri9byrsPTJxEBAh9Tffba6mx73VaJa1GqcXNbGcUEixhTXEf8RuhoFGbwDrrXV2NexPR5d85WKYTtMA5SpCsM3",
  "key9": "64HgivStQiGttP8miZdEB7ETNgBoHUjR4p4FriSkDdSmzvKLz5YBQm2Tjx1gbDt35HfzF8Qb1uuzJqrnnKihAhop",
  "key10": "2L4fHdNiL2NGxZFhPccWKzn6rhsRdoUm4gSAYMxn3FM9YJjqjVzQ9tMMrWcSFUczTLG6yA4wJJZ81dVUhdDnQM2i",
  "key11": "4hrccUWqpcURnpMAJgyz72YxktqtR9yNic4WYtwQn6tXQKwcCmeYUhvPo6emtZvDtLCXcTDZ1JYuDPnfJ7XrC7En",
  "key12": "2P4bUUV325amRg3SZWUpubAhQY7KTfVV7vfqoxmMzsUjGZES4FZTbPMVghByRruevtfZWVgPzK8WZNw4QDnMfDiv",
  "key13": "3Pndg7TEpyQTqLQ9vhj2TKK9AYGqzSe8WFgWgshcfDFT9ixC9zFMZhb4F3sDzNW4LiYxYmCdtB1r7PhzMbRM6VhT",
  "key14": "2eyzjh7WYhjYkF3rdVWa51RTgrhYAfjiU5rj7jbtrM1FKu8dPgK5VRWeta5GxZAVesKK7h1cNsHrTcbUJ4JuNPuk",
  "key15": "55zjYTZZc2wozxkrsNYo8AXEAqfFzdUQojk1Bv9NNWweZdQLvQg7qTSpSRsAuxHM9r3bAMjG6WUukUBfYGgaXR27",
  "key16": "3V6V4XRNvUrURBqumFVqkQ4c6pLaTt7VDZFKYzAAzbxNhvrpsU9ophYLKkzatuNihpw2KYnET6CiLvo9fCRfc7t4",
  "key17": "fTd2YK4FidMATkmgKJz6Zap6LiWBEjZd262mZ4Lq67BY63T34pZJnvFHoms9Lhgr1orp1LHdqiFbo2hRHFhXrGy",
  "key18": "BhtP3oUHAfsEjHNpkHrgF3urfCs2zdx6mhaZb2BnSssU1c2YoqLQFd9JMR4F7Qk1RZJhzZmzyuEL5Qfj9PNx4Gz",
  "key19": "2a39agcCzFQcsupFqYU5ujSgRZX4xnpareSnNySzrbKz6RSVXCZHYHkRSHA5Q7M2YoYhU9YE4qYzjcWGEMXzoeKk",
  "key20": "4WStuPHu4tcf5LbYUczpB3mWmJKNxdbEJhJ4g9QmmPSyWBDjX87rFWzAU44W9exCWWFm8qP5doMqqy1kUxmpuJQw",
  "key21": "tgBoSzpJAG1scEBDULVMc82Jhfz3Qz75zFkz3h1gf7Dhcnje8fYF8qqp11yHh7CTEGLuUymBye18FLBJHgMP9pj",
  "key22": "4wSHHXuzJWbKxzeZiLoBsZGCxiMquuqTHheK5Skw1WXXAXi1Vpfxp6vQreZv1QxotWraADLWn7UX7rwWuWypVPqd",
  "key23": "4bi29mk6W3raRtt8t3741qpPqKLUtaTHda9uDvib2vPKjrdveLgRfPFapQ9RwDQUYcby6HfqV4uydNkNTp4H9ArD",
  "key24": "QBX5XmCCdQ3mCcMCpjNGTHDn7BSwy57sNdemRDS2LKwTaVnzVYSWs11kykZyLc49NyExkUKkrJ2TzsJhck1JKKi",
  "key25": "4aAdTdqDoBLgb7znKisjzpEFpF82Es8xMqdEhznZYoLWzpefixPCRdpfdHH2VgRHtc36j4EduRUd4Nn2SHezsWuP",
  "key26": "5kXHnWT633JgCThqpCAHyTmnQP3KEtpSk5ZLZ94DBf1BC3U2zfxRHpX2A97ZKPiVUMJDCT2MA8wBKhnc9gWvhLvZ",
  "key27": "2RQhw3WEYohzR527iz9eAJPgsj9RATnz9dcih5s6MfpfL26TQMqeYVV6L6UKZHn6Bui3jrFVns9iMTyC33TdGnkU",
  "key28": "4tk6RaESDEwZrdRAmXsUxcuGzBHg9QpswGncWJXjHyUZqTBhnhAMLbwejvimmVj3NVGDLVzftSDZ2XdMWmSSbcQ6",
  "key29": "2ekcX4wwDyxBGh5Acdw5qWUhmkzEYJphbGsnPsCsqhucA2gfAx2mfJLALkizWgm15iYZ9kAFRf3mE1deNvYDiBuD",
  "key30": "33oYaTi9dn7p92duSGMyf8tfsixDjDNrBArkustemT2h6QUHFrKeNGVUuS9L4AZeJZmgJbBVMWphPMwHLrLZu93R",
  "key31": "4NDuaaWMxc8NLFRUmYkWaTTDMwGAmt8TdQ6jpNnQ1CZEHiK26e4gRSqL87B8fYVQ1fy7AjF8eAF6k1ZFxRnXBD7K",
  "key32": "4DJbkBmxnM4DYgnC11EbQnYjsY2Ak8BkXGRo7mPt8WxtFiNtzqgbPGzhVbg2Dovc2i3EfAsLK2YEBjdLScdoyHng",
  "key33": "45xmYhNqXzfeNqi7pZttGeaJtkoboXVGEhjf6Rf6gtj3BvwC9GSfhDWtZQ2hP5XaUCszJoKaUcWc6eLC1q5xTzAj",
  "key34": "5fHzGi7EneMMKtegk65o45bLYm3dpiei4XZogdyhDPbyw7RKbNa53qCC3NXep3QGq15vcsmKBuTzFXGoJCBcHA4b",
  "key35": "5NrAfYtRR3h89XAshih9tSRnUAAZ4hJZVpHdJNo6Gt8YB8w4AiSfFB9CcR8se5YCvXuUkVhUTqL1KjZKh96w3FS2",
  "key36": "3CveyrpzH36hmuiB7YtF6CsMDCTgACvEqX6TPTv22akPNq1KxnVvaxuBihJ5RoJKLERaVikBCNUybMEtYPH5SBEt",
  "key37": "gCinEDGJTaUEKkCCztYtAkVAGbD6qbGu9NxMAMnVzmNhqSp38DDjVtMUTjEKEbVZaE2HfSFsTGEdkeBd595PiiJ",
  "key38": "4TA9in93Mcrkn3WBdADmaiC9B3pegtB5EQ5cEL6F9fzGQt9FVUH2zwN9a7x41GUoTAvdiPR6HeaadYbSML9MUzZP",
  "key39": "4ByP2AE8nxRy1KYvgLinoQHi8hgoJUYgDMqmr9s37x5rbcRbuKtNt5V6NtJcbnD4b5KFLzQ6pVr8TXgdaZr1j8eL",
  "key40": "2eciVCdoQgzYYmrPkQjnwWZhNtbnQV5VbXXNWrbMERiJtLJ49J1tCvkRcFJB2SR1bJKACRJhwJYqFCreRLvuFz4k",
  "key41": "3GVL73dB2H3ZAcqBB5nwvoZivT1EszDcnjwUCY7E7SFgu8YpD1SUqPyJ8w7ztevfdc3VsM5JUgQyvMWMrxhaG8u8",
  "key42": "2GDFBeWHePdGsPA8MEBaHYaUG2aSUrNQf2k4oKmtTXmCLsnRR5ApYwP4tzHHERYtcUCycDmoYZwgM31zh24e87n2",
  "key43": "5L6JioPAH6ye7e2RgkRpj3vZ2TVTZay5ywhgg6Q6EauHTHMfrBzZsMc3H3BnAtWYAQG3NfYMQjKQw86mJodhjCoZ",
  "key44": "3DUsZWXEWRwcpezhG4RjdWpSt8bEFN8f8Ns4e4YypvCtCjsJw9PNsW8efvCwqgQ3bCM1d77RNeg7SBNn9RD5bq3F",
  "key45": "55juYb3Z9AzYmm62swngSSy9SmoJjM3W8cpmfhScvPtQN5G77pmAqoUw7GE7cAaZURoxf3ZCutPahzQvD9TjYtpF",
  "key46": "UPX7LfDwe1UtekxCkRGQqG1vdxe8MRK5jiJE719DugCPLaB44SKoi5yhvm19DF5nLF1fLr4M8xe3xJHhTN1vTSB",
  "key47": "4SU3fWYosobVFP6TuWWRRxpbFmCdKW1FK6epZd48Gq5iA2FqRaKkR1hAti9HUqqBq74998vTeCrvhrEKH7vnxKzS"
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
