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
    "4SL7TNK6C4XC15bHF3GUPU4KYSHofpCqAxoqcy621ygzuPeNX7U9PiQiZKzFGrrvacDQnKgJ4p2D9Uw6H8ZkobXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fWLyeU8iv1GrcAwvmeduPp913TzzuXBHgMzHqAiZtbAA1r19srcUtq51RRh1JA8s93gNXkNBv1fMiWLDwA4B95N",
  "key1": "PLb4Hp5dwNKBCiLP2UDw3jDv9mqXhrujQNuC9sm5D7LDFPnZ7NLv6SQF7AViALX8PP4L7Xf393rR75QU76qKvPF",
  "key2": "5MWTQGx66Q28rvbwj8oJZjwbeRDeXcWPaiak4NdwuuWMmpty6kW3XU7wWHBpfQVYDQw9JemEqiJZJK3QMzdfoUtZ",
  "key3": "vtnE4aC8vXuxeYPgxmwX4huDh7AXnW1a1PUNpRCZjNgfTJG8HWWk6KejzywzEmgBig2JuxjUiqYRAzdXV1iQEpg",
  "key4": "3ycsN6CbTno48giR2HfYiW5cuae4BXcWUZioJ5gtdjpYcES8oX6XCcF8ockdVBXvaacp6b12nHCDXQ9UWsCDokiL",
  "key5": "5GqqfNd9zsCPYm8TCuG3LZFSN2FLQnUi1n8gKgX3BVQotfpqJC6sTMqSMG1tVq3Hv5irDjNJSQnvsUEVzkGy5873",
  "key6": "2YDwz6Mi62Cfc3TVgX2waNQe3YAmPaQmx9jtv3RxsszZxhLkMR8JpgWsSbbo7fu5FRPC2uiyM2SXxbyWzKkodQqP",
  "key7": "4xhPZcccor2vcY7guWadi8ywTDcTTsEjBcoDFAkqReHBG2TFzeu5XnUckuJK4ZTShRGEJJGcUpU9NXwqDVMRGR1",
  "key8": "3S3A8qo4hEya53sL6JcfBhufYWwtYdvNrSMBmTV4MzqPiJ8SBwGUeQspQc8SLDgTy3C4NixCpZonikv5z2MSA52s",
  "key9": "4gpmD2rwrUfs3is3JTW9dyPDn3YUYD1KhVRvqYzbusz99K7VKkjehtQNGE88c1XfP8bSFQkGWckWN7wY5TW2sVdR",
  "key10": "4EA5SagVubaVDbin4PEcKBG9fv4PxNTaEYomE6zw1soBjUYvRT4vuVajJJiJ4D1y6TnpTUK9bWj7vEJF9Qe3StLw",
  "key11": "3xjsu6PiREkvaQAQGdauCSUK61DtrVEyt5LVDKLw154LJGVskpPrPYQt9wgFi5sq37hPqoxDBAECkZLiiMi53s1D",
  "key12": "2rLWM57x87V1q1T8gFzB9UkMs5r65LDvm5GSYs2sW6ViXJNTD3mg3g4eCs5qQVifZ4kREnuECD9uozT5dBcBvhPy",
  "key13": "2t7UU1JTbgFeKRmc22uUtvXLDhodrfqMHVVd7G1DzFJqLqESZJ8HmppDBLmqAV9r1V3KUzQykiSynpHMYoFeqtcX",
  "key14": "2Fpna5J1Tc3VAoBs4kDteYYdi9p6V2hfHasrSA3Zw22ayEpdBbjDbYZ1Xk8KbqgfXpdGdT2CRr1tRHSNcTbsc1dB",
  "key15": "iErZj4mdb4grGE3mWQU8KGdcUXm4Teomw1Q2iGF2b51SNWqNjyfYN4BacfPsA6cyP92sQTQYY6GsE6WmDB8fzNn",
  "key16": "4bQShYe8PisZrodFVpimcnd2MxPrFDVL2ttJ4zXQWDi9aqdvWK5xi7a4MqBoGPvFxM3RV62YozJutmEhTMq2o7dj",
  "key17": "5Za82PYfUsAEQexPTEZXYiL5bQBWckkeCCr4rZbX1dLxYJS8YgmvNetMpNEiCJtZtvy343R4fXpJqa8YXfat4TKH",
  "key18": "66gq1NPokXrqd5sbsDCoHiv1niRKsZBShj2xtJnaiuUghDdoaLxQh2yihJkj4fMQQDJymKMHdmy91Y6L7GBddV75",
  "key19": "3PZCgKAkQ9MEH8uBUot565AKDVh83h9kUoyNCQuBXDhQ5hZFSBrjGFQWQ1SymyEDfW9nazvD4c9S26SLc6LNqjSN",
  "key20": "3Z2EhJ3fJEac5YpLiDPqFr5W6ngkH7dHsUeYMj2xAXUiy33z2XaHhti9sYHZ2MAzZzFRg7f1XzRUQZdesxptcSYu",
  "key21": "3mHLgGLVCJmRmSx2jAsaCiJN9rHvsAgT6qAFfBsJvK2ade8jDzXF5EUUzG2Lh6oEuagVSup1MLTAE5Na3KyHJxcK",
  "key22": "2unMsEcvpr4qfunLFVx6fuzMDXTrqTEU3ekMYPfpMaEM4K2SLvNeknJJEX9q1BzB6fAwf3j9Zdcm4WAhx1emFmbW",
  "key23": "BZeVpzsxZvvaqi8L5efYEu53KXaZhBUpLrXkimMvyUFFJEBdvMbHNHEjGTfKvPgriRBaYYkRbcKXwfgy5JHojkC",
  "key24": "38bn4jXLPsNATGZkQzGZnqhwGen8bkF4M5B6qBpnmsNzfwJsrvN6Uk1kpEoua8w7zWPNRdQrQkZc9MpewXnwCaXK",
  "key25": "5WSjUFHnnx5xZ2waXLWj1bDm8CqT7Vdmmd7t16aDKJegJJCbw4gW88MVUZEjkX7o6r4a8Qp4nhAouYpxb69NvPBC",
  "key26": "2miabj4ABRHoDWmJmZJ74CbRmJCMf9eNZKaC1cHynMpqoZ7RMv9t3vV9PCJ7j17qMcPVQN9VeAiWzkUCxrmfKqee",
  "key27": "2tGfSHrwWPvmW4XHYuMrsjCxyHSNYTqaGxJsEQampwBStoe1dwvX6KxRCrdFSayF1jZwL15wawKGeVXJ8hUVXbPd",
  "key28": "51BTFTKCe1WVi8zcHzDbz3dcq6pruTFBGTNvYTDQgSdrQxU3qJvTrFQMNziVsrdrLpDog3SszJbejuCh6CvhoVmK",
  "key29": "55CvCKcQpbVCgtQDEupTwK6uVuEZnpZkjjVPKgANNL9mctnWDDbtBQ9GUhZsjz4W2FSfUCkb9QctCArFFe6fFW2t",
  "key30": "2Q6saM2fUxM5Tar9a3UEv4wGeqNSrXDwmpr5LBX5E7HB5M6XatwrhGJMVuNVNUJaRX3M7KWot2DvPaEQ2oA4qV7Q",
  "key31": "513LADmLtDuF7Z5KGg3bKUVtaNwKXEH2rs1PudvEC7fAcGX7skMpkGNPoiqt1wzhNjwhpHV976BqrvH11btT6WEC",
  "key32": "f7zonGt3WWp2bnzPWPGVizMUJj5jfGrXdAx4sreGgG6gHLMg2wpAHZTBVgpvDpb1w4E1KzHiNMnAWbXcNeY7Vwu",
  "key33": "2xcyrWVV768nc2TvKhMWTYc9iwYivSerhnCovKsbytNp127UyAbowgWarCb9yYFTZZoWoMZoMBs6YKeWmMaxtxBy",
  "key34": "4im4mcHKXuw99YF84r8kB3iw1dU38w6NZLRAmKYixbsVzgjpqyMi5rf3ykCjHuJjDbpbed4Y2hgZg6tMRrfmdcni",
  "key35": "2zzRB5Ks3NsdDAqko6U7Zb9qQkL5SWumePYH131VemnFPWm8FdaKyj4RDokoy3nGAJA7cp6gbPJsd2qkY778e5eb",
  "key36": "4dZfBu2wdGhHhkW1b5UwDcjz8WemZWzbsSoM5L9Ch3qkAHu17mgPSZefMdEUiC3WZuPVeokak5fGz69ujXv2sT1Y",
  "key37": "5rK4AMrMj3Yvhccc9HjC63pwC4BUPfJG8GoRnxCH5Wa5pjNjgWyfmSXxpaLd1E8GA43N8HtE455dWyCaJzki84FQ",
  "key38": "MetMr7ftWGdWLHKM8GcgmW5Wn78iqMuz6dteCW5mr6NBGkjVroTcoAj2ovADdm1nr2LsZVvCGxYHEQ5hECqgdNp",
  "key39": "5u3TZx2J48qDRkZV9tCuRnLRg95yaEMApaBG2JpShTLG2vJhLgWr32gqCH64zxPy53biqHd93oVBN5CC4HX8miKz",
  "key40": "S41RV9K4pEfKm6VohewGRHtWX9Sd4c7RA5NZLk6XMrUxY2x7zhQP263De9rqauTr3kDsyfJAYJaRnxwpwUfnBoz",
  "key41": "4HSJXr3fJAE7GEEjvX4jXmhCdkidpmxtKboBURgpo48qd1v1svPHZxmgbWsAeaHrsNsF5X3268wG3tcUk52BFjK1",
  "key42": "5yUpud1CRUPfb17qgzwYhCFJZriXZwGymDEvD8sJX2ZaYWXsJL8bCcKuApw2zYv2qktE8iR6y7Q1zFAnhCmbS3FY",
  "key43": "5spwQVnyTvwUgfRrV1j6wVxsy2mfgYfNDCX5KSJrmfNiXQ8Zp3fh71MNBP9SAqQc5P7UQfiDtLzwj7cha1dpVg37",
  "key44": "51TRwMLequxoAYwkL2q54fhKu5n2V9Mja1iZbXtaBa34xY9S367jJEPKD1V2DA7wMoSQ9iCgvTqqYNeGHfazwH1Q",
  "key45": "WJU95tYhBA35EdHHmQggDL5cyqhwr8Lqi2frms8GUzHppSCKGF819CUwW8tENHB1ML34mZ3Un6qi7SJLtqBPVMK",
  "key46": "3Kozk3boQfv5rHbMXGj3TWUVHczsxQddiNoVgm6hnVo7CWyceHiXHvovk5d7gy2ai2uN6cncoeU5M4VVemS4BASb",
  "key47": "3YW3epMRajja2ZjLZ1dSETh9j5cjSkHSqgdxQpm4VVQ95TxscqMhrErK2oHR2tBjbRMQs89RVwzQMchoWWqNMyZU"
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
