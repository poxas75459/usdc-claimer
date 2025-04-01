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
    "46Ldt4JzzBJgb9hphzJCWU14frSSkjpNQvg36VWnN8FnzndTzEjc5sNkfdbEnw38Q9xLtWLdGE4rRngUBqAhCHuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aB59pxQABTeN7CQTcRsYPahdZPdaTCAifRFRnC5pTXyFUjz7bQJeq13sMxxi9p63BqaxKKDA212RiZpuofQMvAm",
  "key1": "3U1rDWfjfVSaQ3vZHFzjS7RB6fM9vgnRJ7ZpUTVz33WqdiUYej6ERHauijcNVsjEfZV3r3HBCiBNrCvXiBAq34sb",
  "key2": "3MYqESkkCMxZf3JNswQ8RA3LYYxQVbi138pK5ZgxtYwk4kQzfRexfkj3VVxnJL7KAnbJREgAF6FFKRwxajbkFisE",
  "key3": "2WEXXEZpta8QZZFixQzXt2uepeJPdgJLSNoCGCrUXVtFHWvGFaRyv1QSS5kaKEj7o9qXXYf4PNPyoVzkPHLqsrc",
  "key4": "55XRfCikof3quqwU1eVtRWPNRwVsbTsim7V71DLYXCPQwz3giTJijpUiPz6eKBmUqCimyMZ1sWBJwb5PaHSaLasV",
  "key5": "3riK4tkjx1QgfqmwhWyGB6FbpWkY1SJ1EdWLAqBnzR7hnLzuuUkJjcFbvrv6uhH5GCwRR6vfiyeE4NJi2UCUFjNr",
  "key6": "3PWLETsw5fH3SivgqBE87x69jGKspD9KDMcpjfCycxqvPjPCEBiVvJvETKAHdMqUrT4CTpA1rw2db9cyUWANhTi1",
  "key7": "2ypP85iNSwAoST3kXxgtJnSfKwLA6my9VwwMBPxBBZiPaqSzcpR8ZSCnFvXWhT3opxRC6gCS8QzsxhZo46919Yxt",
  "key8": "5BEeiXwumUTATsQbjEcZNotfSh71RHfDeMTyXJRHVvfp46iSRBhyUEihY9TsCK2iQFn2n3wwoQPZepf4e8iK35Jk",
  "key9": "Zbi4RKL2NoKtAHECDeF6y8yXMxRvMgg1dE3aqJhAmakCUjwdP9cAS4T6fUT4uBzgRpd7hyDeEF4Fpaz8EFQJeUS",
  "key10": "4WoGD9SLhduUFVBBeVwPMamyPsBj9HtjW1Bgrtv5CXu7RiSUQ1gJiu9XXUevJv25292KpiGVNZuqmHj9cD66SGGf",
  "key11": "3BF2b85JLUbvxVGHDRDyeG8z8rkzUxe9XHMxGGGz34FwGR9pXJzcqxg6xwdxHA5TJo3XyRomaJ7JqPcECYXbR1Lv",
  "key12": "3jmgCjzLpC6DNN2Cqp6Bf5ZkdWEoE5KEYzJo8n9c9RjdG7Th2Zpt1XuWGpz3NKnsszzhfmYP7qNVWBxSWAMCYQSf",
  "key13": "3Tnd8P169LHwfypXBvBXMsfaSmYP8HsRGkEsVqGeyg1mtvgUb7Q1xRxuEmbYPEy5h8jmGTkJXYtU3W4KyXXjSH1A",
  "key14": "4cxDT1vSihCdiuybQTN1GxWdUV3dgk7JqKpYFVpVRmEapVJby6wvuMzUGTb286fdmXkKSo69ucPo9Wi9fZ1bKZJw",
  "key15": "3QuwtNhxFHffEz14pBHtHYgXiJ7MqAX2ZV2b4uFRokvhAhHTekTqWsQYvYM6SnGzGEVqJQcUDdA6BAbxbqMwTPWL",
  "key16": "2XnXsUJj247tNeG9TuJYKU4h3vC65TfV33EEQr5TXLZEe61zxXBwKPZTFm1H1Q9bKSSFqZywj2fSrpxPK51Ue1Ak",
  "key17": "sqeqFzvJRSq1ZgNY58X9gpvLLzXLyWzRfL8WLbHpR82njjrwCwARseLxPKmxs817REniiNXNPx7kk43f8njWgco",
  "key18": "4GEaLgJ82fjcUb34jRjvA7Mx3vkq9toxununWEyaCLHLBq9hCasbhuLhDCNCUXRULYJfBpNv81sWuNzr2ZSWQVBR",
  "key19": "ud2RUf2RLoPYHLBQUELo1Zq9q46jMmQFZm5MbL4Q49w9TQBZBBec4HnZajsCJhBWGNApbCjMpgfgaJxodkPcq7i",
  "key20": "3ZEAFqKTucNCPHCd64MeaG8C14jSACLdZxNgMCQSu8GVmtSo2dsk8BUJHBAqFUR1a5o2QgFYvAgrZGypt2MCJURW",
  "key21": "4A2St9LaP8y5PihHtYDNXwKFyeb2ngYrjKzfwVSV4ePGrm1WwEmSNhaXwbzF1zyGNx7bjsavzpgUp8wCkhvUe6u1",
  "key22": "iL2tv3xciJ4uARCZGLzYfV5bq3Hxia1oDRHLMbjkpUxrRDvKSY1bZMt9MdjsrNapqWtkjF4oeE7FpADyZR751Rk",
  "key23": "phhEsegLKyjfqKS2HxwDAi7mEPJmCdpt39ba1EuSCNnetnuHpkGvX6y4Td7Yf11XbgeEPvJ4cYL4cqZtCdL1Bpk",
  "key24": "45hY3GXJkgUVzPtUJs74yMaNU9pA8AvY4ZMrr3bmZ8KEx2bXVnT4Dn8kMd7vN3GCbpqVAqKewe4jkU1rg3pzLCmv",
  "key25": "4WrXvAP97VhdzW669eAH8RX6NjjNTTGhHrmRe2yDYoyQPikfTz44GDfcW3RqDwUmuD5msyJVjFPrpZAfs6U8ff4k",
  "key26": "4zEtFc8CaWzjyCUYLFi3pe3zch7LVxHTJEA8WARu2zZkyEVMTBJHT1aJKfSRfg5X6bcd65fD7jBuYiHxBkjzL9gr",
  "key27": "4NzkANNJ1NEJtBogdAYZHDPL5oXSVSjbYa1zwvojjmG2Uk4rnXwBtYq24xrrfPv4DQMMGhnoxAwbgWNR6qsWmRK1",
  "key28": "2d22JoR2nbGbtA9bHKFzuJv7wZQisoLS9YJpnAh9Cap4fx3MRQyFC5Lrenmsg3vKHD79tUdnDKGYiZgvVgkXhoTo",
  "key29": "r1b55CTrutEt57eAqo3K1GeafKG9QcJ79X3pJr5iVXS27VsXoDytDyNvebSHcvbYr5wTaGsCZgsq9QEqa7R3XLH",
  "key30": "3saaDhxc5ffKRph8bjjJCtBEKawuaybt2g52GsUG5tBHep5ZusMDS9BpZaXaAso2e9Xzp8jQm5nshALdAs4ufiGV",
  "key31": "3gAnjT2Hv8cvAwLC6Hz2YV43XVFtuFdwHbdxKzAgdnLgiSKduiTWfGMfYHyLQqRN43PzgR13pqd1widw48oqhL82",
  "key32": "3N4Pb6FBkwxZP43HVoV6375zHdxExanU6A3gohh6G5vzLY5uTapKu1DpF5adznQ8aw5Ftw8fqvTjm1pgVdMy557m",
  "key33": "4f4dKxzAuLLFvxiV4FPBsejeo6dgYH2tUpJo5N1anefpkr4zu6z6DDvjqtVRNKVuCxSPpez3a7BnpyovPRjAqpZo",
  "key34": "5xKwbEiwTFUzCkrN8yoArvfAU1xvP4C6BZrThiX8nb7S34Jky5BuLW7PLLRV2Qd3esMR2MTJGstZx4Yuqci7QNYW",
  "key35": "1oJG7vgWph4tuaApTx3X9Hgu5Qf7Ee4Ye3igsvn4eAjL7HB5Nqe3vA3vzKpUk2eVoavX6aQ6cJF43eXmu9DENfb",
  "key36": "4rxQxtp5kLBiabuRWrEzPFMjb8GN8S7sJvKN99h24pdEeT4HGsRF7KLsqBkb13mDXhPYrQ58HnGVtnFomZ7PHVWR",
  "key37": "3M1d4qwC4Kjv8Tpa2uoAUaX3QXHp45TPKC96vsLH8gzMsYZxUZY88Nvk9UHuQM4zKmvDcLaoajQqikZERhfzBo2m",
  "key38": "1BEGyEG7bSKUa9S61e4gKSH9Ctg3hHq148x2ZbMKYU1mqePNa1VUxfjadREFmK4MV5ULnD4MKLfqTxF77vrhXt2"
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
