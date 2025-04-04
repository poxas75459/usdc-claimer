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
    "5a5o6MLCmRYCWFxiVqRcHT67AZJXt2VDNsxdwhF8JrKzSBYM9BSUqwrqqPL5pgjfKSHCsQhQKaDsVUzT21zZzHPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTbKQJTmC4BTnHgKdAsZUbgbpWu6uVcUreh6CPRNjb6NtFVmFYkgLK4QKyiQSr28PVzY18UfxdGBsYXSww2nwNf",
  "key1": "27BQT8ScFw1u9yGFZGkVDvPJdwdeyKLN29uH5Z1X8b8USb1euSzjQLHdA8wfAFrbWTCqhucjuEnLF38mZRjzDN2k",
  "key2": "2FDnp9w6sdCn1mCKWjvZphamuRhNE3HKYhUSYFwhLZyHkL3DEv9usjbj3wa5DdsA33yzCCmC9doC2FzQPUzJR8qc",
  "key3": "2QUC2BN7uPK8adfZ4r5yLM5J1VRiZa5AnZSn335yZo86q7axmb2Q917JRvREckzHF5njvgTrBxAzi7ie3NwB5mEx",
  "key4": "LgGT7kYN5r2jUXNkB8CS9hS3XPVsxiTB9xBfNCF2x6Ao1e8BYRP7GSwL1qiqTSmkJLCCkT1GGPhkakCDi3yFQ1Q",
  "key5": "3vNECw4k9n5ex2oXiigZMitom7bpKc4hLtNJNnTFg9CwpbwJ38U9rPm7pr7k66YjW3kPr5Kx2c4cb7VLcW7F7sZq",
  "key6": "2JH8peFUHdyMxuEFJc2ekQaTigzeVDuey4b7fCbgfPUfMGv1ZEc3mzaPP6TyfcgMu1MMEm4qfkAUzWkgHRJjTDDT",
  "key7": "3wVdSctkr1BVrZUArNfaS2NVPU62753mw3Vvih2NptxuqvNTYHxUNMJRufBsPMCTZ33QHXKfA2zfSGNgNTkE669t",
  "key8": "3LscgWh9iQKd8EJdccMvG8MsW5LvUNBwwB2ggqzsGFMB76j1PcNzS9gjRgyCCBTYYv2mX6ch97URtcydTMFJSDmq",
  "key9": "5M3TctG2WFsKbxBzEZ6bjdZVo3TnzHCr9Sh66KKSnXfmiMeA1QHvWwoCKQhia92oqcf19CvDmTHFYw9YbEKmkHLR",
  "key10": "2JBb8iMfwjUkJyp8MtitapNjrebrM3Dyvw5MyLCwGeMgWhUeFEsmQiqHxRhqgd6nU6aNTCUjHdXbK8qXU4nfxCic",
  "key11": "2LcaZQUaengULAiBqjsvXyQjyoASGuVdscTEWMRyWiX31yvbD3NfaUgJMre8yspe4TzPiyWfCLRbTW1aem5MipgM",
  "key12": "4sgxRypswuHugt7KDr5WyGp55os3cEP8HoM2RBnTLaBNJQYFy5uBEFTxzXKhsxHHkKFFDfFxYJR37DyCWAqCZ6Em",
  "key13": "DCza1KfCcnnec7GaQMxQWGmUhhvzXXKuX5wxC3KWsdSv5x5L3QmuTfrNEEqptTUBYCBxggBJ1ufmQLEwSDHyqrJ",
  "key14": "2fX4NDgN9d7R1ZwUF1gijrEQapwGnp2rXzG3kXMNPKkeYeE5v24V6eSZGiyj5HyFxSYT1d65NPAVR2Ubwh5ZrQrX",
  "key15": "5kpsQVGHiKriXVDm7LmqcEJhgZ4U5Sautkfwh9unrCSSaGJqxGxCeRiKRWBkJ4vJ92nRpwWxgU7CQTQnHjUkNHA2",
  "key16": "4EpGreDL4NT5Mb6ZA68dDXj3GTgdzwML5waKAmiea4jzkKLvAhSFEEeshkKWaUbrX9nHXwBLXKDsf3P9DAR15pph",
  "key17": "2cJDjmCYZUNbcaGotK5YLXA49FrEBftCJjC55VNjQbmuSmD9qenGMsEVSjG2V7BSB88vQFKv4j26fvhbzsNX1iTo",
  "key18": "3fMrzMGFJ9Ms94v9BdHcG85zL6aXV3YebUZeq1Z97RVkfnju9SrnxfGp8NqLKTsLAvHeu8pKCsN7pH9UhFtR2Jmk",
  "key19": "62raPT4WpMj1SMK8gBuXDyzeL5i5KigAFPRiJNQZDeruRcSPgpP7CbrWbME85qcbieKPfgV7fhQFvYTvzed8Q6bm",
  "key20": "ZFjV71T8yV9hYpFwV1Fb6keNeK96gNR8kGwdWBLFNx87Bdg6rTk1CcZ8HENstGif6mZAujrnnRU3xTZUwfyuf2g",
  "key21": "4FF5kFoaiJ3aTWnVeNvjPjDecKAv6W8p9r6N7btejke3Z1pw5WmLTT2Pfcy7xfjoWaLPSBvXnPghn2G69qquajpV",
  "key22": "gwC14xy5dQ8Uo2GR7RwPZNcdKKsEiZTHrqAJiWJcjZL6qpbRNh1whVT9Txs2X9FuVECZZzJsFchsLi4jsWdjA9r",
  "key23": "2WEBrJbnJRN1E3oFb7HpYEuQm8JTAnEYwERyyuzQuvzews1r31C4uGMpx1sw2U3ewcddSmZvaS2isVuyNBoaUgcr",
  "key24": "4qfPMuHBKqXjnT2HAcaZAcFkieAnjqXwqU7zD5BRhhuXQY57zo2EDYJD2A1Cx3yPaZNccJtNzkZRjpxar1kwnFLY",
  "key25": "GTpjhuJqT7p4jB8Mh7kxqnmUHpwK5dtoMhomaQZCgn8BmwRbzncjH7cf21Tb585Czoe3pxC1Ve3jcpx7purxw7H",
  "key26": "45omy5yLf4M7z8kzbbtVfRr2f2szQ1fDfYDi8mS1vfL1wyb2ZHHtvM5eb5q1CSwZiraL5UiztpwBqdYgbSFvqcJB",
  "key27": "5rvj6Gn6685L2rBZzVnis2aDbNrfmZgSvkccQzsN2QwaAENnqF5hyyWaPPgZ1dQ9Tq7Vujkd8xHtfSBe45xPRvhs",
  "key28": "9SKaGAqNGnhBTgaJHoU3oRJK8aWSCgaim9judSn44fWHQPh5ai1GzoiYZWQRELThFqi2vmPBfqKwM5nSkNzvA3S",
  "key29": "2Y2p6EZ6UVS7W9c8iuWF3JKpPr7J5Y7ocHYm85ZUri9JD8FNxm2MQ1PPu1iztVxAoWJV92CSxwqaYNgrXBRoedXn",
  "key30": "4jkHERfxhe5SHUGsSQQ2rcYV8fKj6J2HV1hQ7YXbhNyuF7x1Q5DdEDhky7Ze1D1WcUq81kAaf8yjN8zRvYi4wTnu",
  "key31": "gqS8kDSvGbozNnQYengp9anRrvTk9TezToJjsbUUaQDTJb3PaBQeShQfif7qH3oh5U416KX3rFvDvMUFt7HPHxa",
  "key32": "5Gbh3kwHiK3uL53thogXdynngXQ5u6hWidDiopS1akb9EQAWLJtnn4MvgCpddpdNdnHhwrXdfCgTaZH4ECQjsKkM",
  "key33": "2Pv1vzq9VPCanf5C41YH99Cm41DmHSREo3G7rmWnpwgRGwULZCN1ZkdJsbaRMSNtVfsC6RMVtzJfRqsLT7hNzpTS",
  "key34": "4KnrGnEoF3F8npSy8YstMHKQwZcQTRPUdbeo4r3TpGMYpg8gjEYh2pNBzkVR3SGcxGEEgEB52fMXnssxmZgEmcw2",
  "key35": "5MhSw6VHT38HTcQQZ5jxmDTbkZbzAvAT9QaRe63WKMh4Pfas5ZX6tnqndUJvSUHyPbaz4E6XEdqPsdDtrxy1w2wb",
  "key36": "66oQ9AD87xSge9DMMjyF11tk3R9d7gNNJuieojEtGeMdzttvMqkFiq8ZeYWAfiQJeyTbgTY8FbgWgS8PA7MKKZko",
  "key37": "2j8K3a8p4RyBgbEG5agbzF2dVxaZG3ELDpt5Vk2D6xv1gtfyksycysFyGxaYoZNPqLFiSEgxW6qeRR5BPMrSyvA4",
  "key38": "2QvMj32CEJy919Pd6gyq4d1kMrJFCFMDMacHHi5tVRg2xQYsyPRF1AYUuMKKt92cBYP7zCZDyfjC82YFHMfMAgsb",
  "key39": "5X8eTL3hJuV83ZFB5GtsuGEES8j4Q4BvkZ3QtPP6pGpBuVgvz9QKZL8PXJz8B4AezjW61qoW6DVLp3W4AQjEYBts",
  "key40": "3jT4Gt4nyyvZj4QmD8v6DMbBQqV2K1MxhERhz3kzjkdsrCfj9TpKb7xwC34AKsQiXXEHCA2aoaSZQn3gM9qPiJMD",
  "key41": "5mwXqReQhpcktfxdQNgyEo4guHuLeMu7gQhcZzwP7FXVFhJzYLiCS5YUn1Kq9QsRDQREYbpKFKZ8WpqQaAnxnHmw",
  "key42": "29Mczcbfc57eE72P4nqsfBGfskEUnVM7FkbuVoGJxS9zAy5PmDhcXrPtq1HVdXvym8zT1Qkx4PMoiATWsDNXwiVT",
  "key43": "SiZzZfKHJmZnvTYFPJQgnwriv6gpN73qLhpBkWn5k5FQwMw5m9DSMDR8rsNfJkHMvaA6SfRRCvQamU7PWza34fj",
  "key44": "4MatwbfSD4DFc8qSfVrZeuyhNjFWfoHkrFHGDDFND24u9imgqSDmqkv2GuetF2itc26g2AZTJCuxQLghxuGJhbFe",
  "key45": "XPKdBgpJiLnKtd1cK2bdH8xwRxQ1aHxY6aoqTmTqJc8CrniHT4WVaC9GV1AJhYyQ21WW8yrcZYKWwPv4ztJso5b",
  "key46": "4MYUoQW7WYuaGtT82NUHTKgNgSRUadtnCUwoxGzVatGXosiuYyPVZJMSzJJzpA9UoDKvaJxNazdReuckbKhDdpYz",
  "key47": "42ETeAruU6ic1HGvMDWjHwLnUMJE1oHoDc6LnYNvNCHnfaQguwoSqdBYcp1s7yVw4mEeKuSEmkYFF51yWzepe3WJ"
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
