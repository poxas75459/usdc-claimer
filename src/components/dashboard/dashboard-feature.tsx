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
    "4qdBiTLjg416THXhk7FtphMM2n9eh3qZHXRzFMPvW5HKReNpbtjUozWZRpqUgb8LKkx6yd2VKykmjGi7WBgv5Vhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jGYU1GXgp8N6hZ87u5yyFKBhyq8RkXTVYiAf3ZuJSHxZhEMCsHGjwTBJNVQKPw8bYdP1TkWvDa743mJfg7AKfci",
  "key1": "kcgKeDinNRrUSHoyihsWWsAJVqBKgrWXKvUMgfgzkRxyecvkoZTHzR7u9g5F3a1TRv9bpEG4uZAG4GZ8xppZixH",
  "key2": "49USuQK84AtV939EQXEagsoP39j63VrFPQAieToH17LMg6uk8Fjg3gJNRfnwvHwq554C5udoL3MQKHdiKvsTAyTB",
  "key3": "4baEHwGu7jDJBsJXazv2BmT8QGcs1N3A7USSW66qgi7HAVfHKK8pj9z2UBKHaAtn2scrzUJvv6yjPsscWuMzVRhf",
  "key4": "8i1XG6EjqFTFkPQsg3qxfp1emQfHguvYGdPyNNKN5koZw3jfB2f856dbV5JcXw1UrmhBzwd2QMVF4U9q5Z32vqj",
  "key5": "5G9eYVACia73X1AdDqmrpM5YSVLyT3UFZFUrL4JgRVPrb48Hr9LL4oiXye8hT1ippH3CDqrHGoxDGyZRRWNrQpLF",
  "key6": "31VcF4UaRzUmUt9HXrMtzxH2xC3uRQCTjLxXWVAdtVTfhrWQtr3actrJbqAvgcruHv4D9cnrRkWBVdC6NBTiWPxn",
  "key7": "5wodHzj9C2sohv694hUh3c5nCz62iZX88s3G2BZNTkdhv7Qr39TTUCoBdgvUeheX23o4fNGKDHyNGauFPppRejNm",
  "key8": "4ap45CjesBZE7A8oqxUEejjoBoBqKaTwWWw3pK9EBtgSznFuz2ZKsYb3DKUczyQfGPYRd5DcouUD8enLgH1QmMkK",
  "key9": "2n2mddTXPTw7iZA6P2pBCZw6Fqyfc9aMaXscfLLnGrANJcUjJz83ms5Mgh9PSdVULDHh2ZjCjrUQHa8UizSTjANe",
  "key10": "3hawtX2ufa5uQvaCRtSzpEfdd9ov3Ff1BYrow2Tu2evbsJUn4CkzV8WHfZS1aLcJen8xmy5UbQsMDhqj7eqpjY42",
  "key11": "3gNuxPzV7eGJDu6VZ3LAavu42Hy28gm9W96fD6YqDwG7mj4HHmyCN5VXNBA4x7eXWvLe62mk8Va488MHdTNxKec9",
  "key12": "3KpKENMhE2BpcuKkioBu2AWCvNYDf7g7gvLen8xYZ7udnyJnS7bCcMSgng9f2y5B3UX4dx7x1JvRQ2M7roYEYfpQ",
  "key13": "4PPhJSRpv1ZjGzAwLYx9kXkzYrm62ug4bWyNXN24DkJtr3fMaN7dxbvi345LGZwbQ1uk1viHECjwPAJi8Ax8dPEM",
  "key14": "4qJsdpju36NHXkieW5FjXTwYgVPBVCy9zsjUw4gKvuNxhKYgwEhZB2nVo4kp8nW3ycQ7zYsksNkJK5w94a9nQfug",
  "key15": "52Ts2udosSHvkDGHyuqJeXtBCYqKCsBER1e1RxM8GyXJdQyFVt1iSgLeiQEfNyChGx7FRpEoY3kDhTU6w6e4UdwT",
  "key16": "2cbXPiGtvXrktt4EPxFnVBuFw4GneUHrpVKdjo7gFUaoD3TRkds9fADaVoK8TYAFSLLxuZgQCe2rDHJ1qUcemZxT",
  "key17": "26EUGece16GmLDAvYH8X92UGcH4DQpinuupSYxSNDJvAYN4YQg1yKbZBNkMGkpnsQEjEPBjcPpS5FEFgsnaEHBvC",
  "key18": "3eXnL4QbJf2EdekSBmMyGmGYSZV76JKBVPT3vqCqQ6oJV5b47JAyStWeRzzCYzc3QYo6rDT8zLMDrgvEu1MHePGk",
  "key19": "FXudvzdRKcAkR8vHfWpTTFrzRY6j3XtCoVt5wQbzpPtSPNQsTnqxE41rfgEtRDYhg8EB7FCZ9NtpLqxv7rLSjpq",
  "key20": "5nbszHtk6CXMArXtMym8PJhBgTxAwk5NMdboFH8DMvxKVLx8efgbsKT8vquc7RJVCTszdaw1cFxSXbG28SXjsyMt",
  "key21": "5jSxgShRLoEPaGkuM3YT8KUHHkHtDttXAhZn4Nq1UZ49QSNUGeXxpNnTLV38EZvD74EnkqchsXJuWMg8KkLMkrms",
  "key22": "2F1hzp3Mfuhrv7qFtdQEzWp4nwG9NuRrvc2KBND5oPsfzpNb3L6WsJNAGQZ5AN1E735KSnG3BeWyxWgNF3PW6bQb",
  "key23": "5dg8Y9ub8PBxncX41fKgHyjy9Rp8rYcUR7tSaqEX2Xf3hLw4KFpf3aCrZSLgZz5ytBgbGThJEjYbuUVxej63fKpQ",
  "key24": "5i4XaTKvykWZ5fUzVFh5r3W7YJpBRxGhdVnYB31TxPCyhNy9uGU14gE9g7bE3Ufh5ZybC8mesUBYZVg2uyF7zWET",
  "key25": "5yrp2vJR2WTf9oHKQb6ZFxsoiHWQWqG2N84ZdQFjPjeTxbfYEGzWfGThT1BYsbDvV5akb1zSgd8WS7xdHtYKYqLS",
  "key26": "3eCJvkP78wgE5YvF5nqrfWX9ey9AbmDYWWSRSaLKj56X98PCmoxVWuupxiBFKCPkrmhVm6Do5NZ5EV3bzc3gmZWL",
  "key27": "2qCqnM6etvyzgPDWwLYq4rTTyzpupCSsWujRw8fGbn4zM6125aHdj6sQXNZ6EMSQwthEktuNcFVzMMrioxGtZwgh",
  "key28": "3WBiwZd4pBxpqwXjNFfA1553Wko3Axs98gk24vLjwZChjMNC1JTFuWwFZVtwmdVkNCujRjL4UZNggqAMd5ywQVoe",
  "key29": "GsZ3PRqZJewuZ474522RBiFqWDiYSv2kYhBZ3HSfbAH3xSLSNoQBrzVdFScoBgWABbmSTE5C25GNguQanqm2yTV",
  "key30": "4VC8bkbQRn1kZmwF5HsUNz11oKLyGY8Atneir1c8ZRc5Nki5Y8bHB7ycuyTesRQpLGjhhuBeyUdE22UKwtL7zTWZ",
  "key31": "43fGHuqwA4ewLFY579VDSEnw248ejp1ZuyXDmXKTkjpmvyzsLsd8GV338YWrR4J4peHwXRB46KGwWgaevSYrKYPa",
  "key32": "2eEPh6TT6FxEVA6u3Wh5S8ZKLCGki2LRfkv5XwkbNsEA4k4SDFhRuVRHgQ5XMApeCuTPkpgP9r2xuJTpZhdDkrsp",
  "key33": "63R8krdWXeF2DVKopgsAajSmKXyRa2Xu3JUKThW4LX8zb318jLG4UQbYtzk58kbDXticYoHD4wPs481BrKoyTHTp",
  "key34": "4DXHFCzbTR8mJd19Rw9egYsuSKT9nxzAKnafbb3Ebmj2co72oEnuFjAZxBMCcgNULVAPcU6cECRBT8XEBkCnFkjg",
  "key35": "561C4anPmh1K3WfEECSBJq3T5SZmcru2PBKS1dmoUToVas6zKMPerAEgdmyQM6dgkgef1hyLfGtQ4UPJaxry5ktj",
  "key36": "5CKDSH7gtrPmrECk43VATDo1GmcpoY56mVrPAwvssTu3uXnuBpfStNz9X3x2MtgbuuYSoLQ9en12ZS1KevGQ77cz",
  "key37": "4ahoWizfimXXRaZwaCsxv7PygNqa2HjtNnFeYziq4wiWBVSShr1F6Q72TAnTNDG1HYNH44idvnpwtJiHnRi1rhev",
  "key38": "5bmE5ajXfpA82cCmSwT8AJjRW9REPTQbvzXMbZ1fkpTqTncpnKbj9FGcomNZnD3VifUMimCaj4mPQv3GTkQyuXyJ",
  "key39": "bKTsj6fz1q3kbZKyJN8Qt4RNpQQAv73psRQjNKDyuf2BVHmDei49pyUYp63S2jyV8e9pz63Yc7FNYzCfaAJCYjc",
  "key40": "2hESCA6rERJb3dVMfoNfUnpDX38mpRX8QtVCkuiYR7LVfYrwL8NGtXsrYr1HZQDNH8SnKFvLZi2D7Ljj27jXYHvQ",
  "key41": "2sd6PVxX1MEtgNXP8q5F4MiQETP1yAUeBYzfsD1GEFJbqvrNUZGWXeBq61XrizSbacrjqfCgsoTK4qyH4VVfoTAR",
  "key42": "5fQT982MHYEGwTN7DBggzP3q93mP5fSqqQT6zZKJVBUTTkfLb2sFcvdFE1kMBJ7ajJLJUHWok3eW76TjqCFcPAZZ",
  "key43": "3JfcjLMffwj2nX8LhJ1HtxSrTeHb7Y5bBDnaJQuiTqWdy6NRwc82KKSK56G2cRE66fwYCcsNgE99kDoAXdxdjF1b",
  "key44": "4GvxTtPbuqSg3VhcoWUGp1RADopjpsHaavEr3FxDwAqwT13ooQDvhKQ824Ls2FUkp9qEiBY7QkrrjB4rAkaciV1y"
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
