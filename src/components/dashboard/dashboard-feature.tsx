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
    "2oGmwWG6nrevQ5MCj3gxKWZNBMkAVbtnPs33ic75Pb5dngT7gSo2ME3TYezsqZ7KuVd4MuhN2TKZGDxnEdd7uoR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tUMxwhRe4diRpM4exXXB8PqayjmvoTx1ADeuTmLLUGqQjDJgXbhGqTLTjM4PBxfTQgXxC2i75Q5WptCCPFuoxg9",
  "key1": "43jThYBJjRBz9ezdDTzLYVsEPdptrUaBesC49iWV3bZTs7nayTPUBWVyq9WDyDADec17j9NVJ11FQiS1jNTr3Myd",
  "key2": "53owfsxtyb2X5ZFRQ5oRUB1YNyKhbb5rjJ56tn9e6WDMimKr7CzEyv9EhztTdEfdp5eV9L3GTW9rL2gvRMed1qmq",
  "key3": "5fsyJfgRFP5b4Sywhq72947VCUs98LXH9ScqNApoXtT1k3unyw52Lfmuc1c6pGiG4w2SDtZm9Md9M8jRytYiy7i8",
  "key4": "2jUkBAcXDQ8ATYEmxGesVTU6cKcsnZr5HRH2DumBPJGyeS7ck8XBT7YhbvVnqSUd2C5Wez5pydqWSFT7KnKy76Di",
  "key5": "5hetrKZSpQURHCJP9XkmJiSUVipKXxfFRBrsc9vqL7jhVSforrXVNXiYKhFiGMgfGirzeYS9Ax4xmjapH8kXUPxa",
  "key6": "5duY7QMGY8BLFLG8xxHqp3NWUq4vR3qjAQYVuqo5rs5Hr8YxsJa5H56GWt6dqVmnT6fKubErLhxWL7obwuow4xpk",
  "key7": "3erN32c1hvUoi5SrePPrf1gqig3gJdVR5mapwV5XoNMeRNzYZ6qM9h8EuZfKjA6m16v39jQSmDU3j4M4SHDUsvL2",
  "key8": "bhkzuEsRSfRjNEV25rTdsZfL2bRuoYBzboJCmzqEKhDaTVZbFSQkbLoUSStV1RcwBxCoX3TA71os8wLY6dw7Kt7",
  "key9": "3RBf53wDzxphrbrhJb5avPD6NZmp9d2838rdRmM7xzcfMNVQUdh9HKHmJz6mvwrfYx7cqYH91kYyLdNZ9Qhjwn28",
  "key10": "4dc5yvMMYums4wydXN6PMbGVjjPLSSySoCJoEijWJNUNWxaLfJoZR1u9g1YnHCDfZHTEog67bh943VDoWWKVL2hP",
  "key11": "5RZ1fx82AarVUGHiDFeYB568D9hL9sAHfE8iKGAdf7DBPCSWxjJNqapnreAAV5HYcvt5Rek11MpJFbTbekSCriN5",
  "key12": "2CYLfAvvSsETH55B2BS5wkwFH6QXxfo7HbXxCFfVPuyEZizMer9myfsbDARjxfekyCskJfZd9p25Zev2YaFCi7qJ",
  "key13": "XqLiSpaC1w6sVDWH76eqSiAtrdSSccQpfya5K8kEPzRjQFYzXXuz15s3avNj13hfuP9ymqZq97gXxg5eZ9mcKmr",
  "key14": "4XHhbVRRLv7bzzGdKuoHvpoi9JcmWLRuKY8x8XSADmTsRWCK5MeZsLBxp69AyzhPNvTED4tZZxM6U2Wn8RDzbNG2",
  "key15": "3fVtCh6LytRRxNQSGMBseD1CBNytHeTsW4mGSbYVqrGiGRvwFb6i7z6JQE7k1TJw7FahGcqas7vBJr1xjFYdiNYY",
  "key16": "4xELmPsfj97CzLWsmZ5WNyJn1puNq3Nmrk2APSLeRSJb19YW5yWrRsFjb5C9gZ3nh8mAZdAWcaFqAGougcsBNgy9",
  "key17": "3Qvgu3WocWkwGqUSLYahvQJTY6S34fCDJUXiQRFb1hBgfT31jzGczKk2pUbB6Q8rNsE3hRyCaqhur5DNGMN1gxF",
  "key18": "28L2UnkzFXd6j7QNUHQdDd4C53FBQ6xxDx9muc6EX5DRBTJWfJrsCybNox2avYFYHZ624XdAdTcSBRZpHWzHnLSL",
  "key19": "2bULqmw51pGAcREmyNytJCN4XnDW49VrvQF3VCjeXZ2KfFtQU6NREUatYygV84D7UCRGncZ3SNSSXtFDadvvgy8t",
  "key20": "5NsPsVNzpoGfNf6ATBz3PDDyHNyQrXSgMoiRS859D2MiRU6RhEuQGQjg5Gjs5giXjZ67ZtwQyXSgtMppS8anREzu",
  "key21": "5sxMkhkzt1JQAkqqTMdcvEqgjT4zsA6R9fdNUoRvqm1QStc6kt59Hcbpx9Dpp77W3EcVvHZNjEusLzW8i78qgGjS",
  "key22": "3RJJfEgc6KkKbY1dUdZbxaC842611PNFRGBXCHCqQDKwrhrLZ99CgHQsAEGkd4EYSARoLxAtAkLqvfrNJRRreLaZ",
  "key23": "kC67R4NmDjju8PeVhDQHG99HkN1kRYaXCZeqetVMMgCjfLedvEyZEDVDcfCmHi442hTa7kTUbLqhsBBVbANb5s6",
  "key24": "33P8eoLPUC3CeC4brTPnALjZDaAsyJTeiVYF4Qh4UxwPA9pQeFN3BnKA27QVZyWCYmEZ7BpWgCJ7WHMTSM4GnyHd",
  "key25": "5ksCPiXuNfZNJAhKbENEZ9Skwj1u1EAyBxM2jQUr3oDWfhziz1vgjYH3bRUgi5UUmbDbcFu6nFx4wqHmmPZpYpjR",
  "key26": "5zppJyBzfgE8hd9bJ4jCRsjxx8LyMzzp12apqKEzQAjwt5H4KwosA1rugoGMs3HCY98yaN5JrwoAnz4QK3Z4VrdN",
  "key27": "2sxCbwyBpkpHAUPrFwiEPNtRBLK1dWCkkMBMHs1fua34Q7mnMkHyJzwTkMj84EQaefnLZcV8316fChVRDN2bvFpJ",
  "key28": "3tv83JXFZtzDmtDf9Mi4rcRTzHteUMpZZaXeHSSEtUGuSP6BfyUQC7eEi9qAbUy3S6b9HcqYLq1yDc4bCSKNZcBg",
  "key29": "3eewtJp671jFcnxxdx5xbWXCCt19grfkVg6mXHnar8T9JmRJhLbGLHhRubRAz9R77NVyvk4grtqgFjaFu3f9QMzX",
  "key30": "4bLxB9eFGHdhAipFomi5us2Lnz4xNvAFU43uorxRymtgxmcUvzeg7hBc2AcRRegpoDepFLA7c3jXxCD6Tjbjdd44",
  "key31": "VCaAo5bGZXeSk3ZyAEr6P7u9UtB1CmHvHzgrUDwTH9qHXakYMyqHHPoFsmV1PqwmeXvyJuNusNkfoumobj9z2u6",
  "key32": "5f79Khjmc2JDSny9gSagBZtjgc5tvZZMhWTRa7wAfqWCzJPf2AfoLFmAsgRCoYz7ubMwJZQudXW7uVgeFAJVZwQs",
  "key33": "2L6CAyua1HpPoTBiEXqHVuYyxRD4r1BKKbRkv6E1Fx773YWt8KKQQ7to5KfSwG1faEk9AprAFPUqKpypJoqzAPq2",
  "key34": "3b7cfzEm2WPWqkzJoqgG71uvF1wP3NMgC5TQdjMiX6HuzFXFYjwht2FLmcC8baBKW19LcywbgRYdTq9CgPhRYtkD",
  "key35": "53Li84ttNnqKgiY2asfjAxnfPjFQvtUjRW4KgFWzBy9oTqNHjdS5pH355phnvfTrfYJZ3rgzbphedqkmHbsKeMka",
  "key36": "4SXiwQDcNuyX8BbyA4MChhXPMnvKCzWBgDB5J5jq2cBJvz7TDXHAa83qJw4EqWX1uRzBuZPXAjBu3crAiRHPk7Gp",
  "key37": "2CEsvYYSwiWcW8EFA9W6HPB94nWidR1o4rXktbDsDimxsbQMkNL3fC8BTtPUHeokuLekmgnp1uPDsTMm4K74UCA",
  "key38": "5HPTDG5zhjzAeYDAR918siWVKq9azzGQqwTnZnwWJQPJYJ1vMEJsMzrZZPJ1keouNJWUQACdggttBLhGitRupYhc",
  "key39": "2QxnwywyjJDMoKXkwkYGY2AEjTSxwGCwWQvjnGgqm9p5DoiJyEiSX4oW1dvnyHSsp4wY792rxSihF5oNCzT5nCPY",
  "key40": "25uQt7rKYiJ1yYznE5HQVZ4xeUe4J6iC5K39igcizDiP4msf6ZnSaYHKJC93VvF1Q7kS5dZZPrfPE31cUnpDPXqf",
  "key41": "GHDgGpaF9gkdtBCJxnNNWZAim3yYfGTJAiBsyVNQvwoSqzvZMYXAJgLgnZsYbvEwguo6HWjbdoNCSP1HAiFCfgA"
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
