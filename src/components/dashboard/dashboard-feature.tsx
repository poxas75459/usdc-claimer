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
    "2srAuJrHgzMTh2DVBp9yvFwHNeu7R9KVx7vJt6UGzREYg4bJL1w32TCpDbdLt4WxqZEp4bApg7Q4vLD1HgXQZrJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N4s3n9pkDNJnDXEMoM2E2sbRgtMj48BJ4iXSEiNSyGRRuhBqEpjHAEkitpwQcg6TW1DsW9C7aUoc2DzCcjaBvj1",
  "key1": "C6hy6hEATaFPToUYKWLK8cL1tpTx3FRCuTimsucatA6EHpo8oi4WpbNE7UW4JCs1xWvw4DJm2mpmhEkKF4KudLT",
  "key2": "cgunVbLfhCHNRkPPnsrnWZFe3EaPnNbfnafYRMUfN835eQugxrmLdKanZztcMnDdUSbRFDfKMq6Ej9qsEr6iyBo",
  "key3": "5BPfHpgjD5KuC8B83APaC15Ei64PGecuNSK4JAa7xSSXB52dcfnbiXPPzRwWmDf4Dy2Dc6gs6Dh3JFdjZJbwKU5o",
  "key4": "S6JKBUiNsC1wkyjDAxSWZJm3zVvUWkj5zXySJpEDZW6qF1HTqSVy1qJkTtiAqAdfCsXvpa5RWW7m1CcyFgMpSD3",
  "key5": "3FXoU9V8xczFrPkvoNTC8ZMddaxgVZAVRMeNweFQYMZKFyEPUoq8uX4yNVd1v3qubnUziLVST1wvGfw9XyyYbZHZ",
  "key6": "wJFSTrCqXTvnrx1iQ84VCdGXEwxMfxNn9CtvzU1n9kiGXCa1DHf4kCvMbRKiJ36LfMrVc8BrbuPqnxbsi92y1i9",
  "key7": "4c1C1RQwQVEKmTkSCq97jB4swfe8QxY2MheHNCrmPbDZifCMdyvV56CdPULjHkCDSRdzxkxVzGCxnTNwnmzTdiWS",
  "key8": "2iWECaVmFVVa1py4qcQhbJdfvpWNNra9FtHtWHA3brpkqxXGKVd1VXTFCWB5chaFEwTWET9saGiSJA7oxHTyt9GF",
  "key9": "2quzwkMrKJCrbqyhhfGhdLyEaqRNjTBTdctKr3ybWPCo1uq2EGQV6kRbGpRUKd9toqn8CyowWzuRbdsjk8dTyLov",
  "key10": "52L289MjXh78EjLk5ZqMKfgi8ckNJbT1UaFz9zsnYoT1QYGjMHhW1XW9HMoVG9y4ZUFShzaPeETetLTcVmAaEMZd",
  "key11": "4RVuQEmActHTwJVdXWFx9bsqXcEt4RRqcHbErnz1jHqUXydDzNbCQMmAjsSwWVZY7vRL6JdSAp7D1fS9pzFXJy7Z",
  "key12": "2sw4ZxVWuvHakbkNovcKJ8Y2JjQq44KdrC7aoyWoUpTJiMhbMc9xBK2YkaUPkWDPSBJEYNoZ55uKSxkWWSV9Wuqs",
  "key13": "3ZcF1ksrduzNQnBhvGpCPYz1BtkfJtRFYc41b8C4Wdc75pPN4SP1yzbbuCtqFd8Qyhv6MFPvyxKS2Vz4NJ7NBfvX",
  "key14": "pdfAa6EgUvChR8yCevAmXKwUtHmFeBTruSVVCUC4YmkgL4FtkHRAgF3RSnZ4U3FmHzRcXe6q6DX8M9wzRXdgtZ2",
  "key15": "cxjqbiMwckYzaDGX7uygms8UoQp8aUfkNtCdP2dWhwQMudmvMoJfe9ve2wQSw66sfwFpqXJB1tD1w6Fhgesotuq",
  "key16": "4tT3CUdBG2azqF2EMsRJECfQFNdvVxqjRRhaeGRyHs1SWSnz6bpSwsLZ99bJDF6tvf8azpQbt3WSKhCaQYB6Wgox",
  "key17": "2BEPCB2WPTUbY929pBh3vW1LaKm6JYmFWuddSqgmGYs3Fb4HtE3vJyvjhyYj4bzuwDKmC8CmagTYfGMaUKN8LwQi",
  "key18": "4nFF7zYVPeGJaEfUujNvDeci6rNua7edEGcvPYV9Y78ZAGtykXJQ8Vxin938Jj4RjRcpUqNqVPrf5XvB7pfMabFd",
  "key19": "3J7Jz8YQuvsW7tJxdSCCSL5Wvx1YpXekpKrgwffCzAGCo1JzyN4Knggw6rRyTfwFuh6BssYR9qvhtJ62iKYT2dL5",
  "key20": "57m2nRcE5rsH1MgZas9FouTbr5dXUuesJd7YdXRq2PexwdANcvhib1R8m32PfZnz77e9Lj4gD3di39HwS87QacV5",
  "key21": "42CrPzMRef9XeK6wPcejKJiDUntExJ1CRdiANYFC4krKc4sukWcQBzQ8kx8959Z9oS39igth7x14kgCpstsnFWvU",
  "key22": "5aKGQGMVPijDbKoibSHiq6gqvfa8Q2rCStnBLxUr6Y9bMvYuFf5yMDaJwPGBnu8ZJSVxbD9CPz5mft5tHaheYMRE",
  "key23": "5u9QwPWP7bTyprCsC6yUuV5Zki4q8r7XGX8sdoUtN7zNC1TG1U2XsFn1AQr1ktH3Kmv2nnkrxTAPYfvdAjwjhjcw",
  "key24": "RPTX1CU8uwnhV7TNQ1DKiqKPFAWnQAuV9ysJB38Q7JyUNao2ftuuypjxgMvY4LE9fAqQxL5LxFQuMCsSoyezqoP",
  "key25": "5tCfu2QTB55mJc2vzQsd2X41LVWS9N6LpyQDLsQXMYTUbfj45BL5zGaZKkWdHwAYC4dKFW2DTeDc8E22jjuSAqZb",
  "key26": "4V7DkDzWBp99yG5B7esUcxAkCKpxemKRQ1c5EyYBNXYkcj83oC7qmJF17iEQGJqb9F8Gay29FFtDN7Y8KoFXuRXy",
  "key27": "5TbQyzzZrZdpaWNQ4xZvYiRVSq1mxQVbodihrLoLf1hpYQhMmWvqJNSLqx6L9q5mSXwaPstK5VwTyDLidmbr2YN4",
  "key28": "2izggbgAL1RaHad4nRnkynq5ywJJLD3ArDTFy3cWKiT4B55p53u35DHwywNChpdVitHJ6q33PzRaiMes47mCvYa7",
  "key29": "57MkiHRDRppck7gwWLX72zYrhiT7awCauqXZnwp2SgZ3gYvhQDUirUQDRANrdctPeiQtYheT1J7VXz7m1ZzQCAWs",
  "key30": "5AQQKNVkDYN78x1Ktiv36GTP6caZ81gbpPr6KJT8WP6R1g24HxYfrkicDZxb5qmsRX7fCDaDuUodojSUZGPd6rGt",
  "key31": "2vHzWADocBnT7w1tvSZJHcPx58EUynYvBXFsf4yCoheATx5vSwMGQA1GYB6XD2ekWbA72hkZky5JwZgiicgGX1YP",
  "key32": "2hGXtpBLDuDmPLw2hZU9bfDyBYPP3qek92d9ne3Kzn8tBoN5nHVRAYWHb8SoZCuKevrCq6sKXKyoELoT1B8XNdv2",
  "key33": "4hYwXqoVBMePdV5mEYZ2Kkx8D5GBFNVG8cVEwgcTr57YiCNhxcPRJWaVtX7qmy2B1BGmj86uAAs9ipH8HwVxv4v9",
  "key34": "52n3AbhHQrDGavUQgyNGbmcyTBsHQMRY31fkvbVo6kuBGK6qj9VSHQmYfKbAmCg9DkkpvkLThjzWh69MTNmNAJg5",
  "key35": "X8g2powyZnCCwCWwBHzbGN9m1KexZ2GFwZaVLRiZhhTKmnWRUao7oSVCpcmmRpfYVd5SN54R6L4zzam6U6Jp1Zr",
  "key36": "sSYLLLXz35g9zsPPyPMxznKd6wJez9Qh6L5wqx6jg8k6CVDLp9zmUa5Cd5su7WfPqgzHqMSQMbMhHJxs68gXyC8",
  "key37": "3kCXaHHmc3rTb3BYKnWVHmwsR5KFe9BUGv2Q1obPZVVFALCiwq49pyLQcUnG9BbQ8xTP4Aw5B1QJvUa9xGZuyL53",
  "key38": "4ag2U4PZfVA6v1YkK9X6UgYHysjQqmJDpRPMSeRLHQz7quUVZ3wKc2cWi16YVD3Yr3PAQxvoNkhwmjUba4HSE8u3",
  "key39": "3tXBNxJ6BNZdxeQeGUHBC7JjagG7MLMjpPyVnwokF2MdjgpZPocTFyjSarCM3wuqDtJLxtpcghxCCrqsqwQt9D3M",
  "key40": "5DJK45xfALeBLhyHkxpm9YjTrqbnbVFTp7aLJnewYYx2WEAcRfxbfWDkGGSqD6sPx7NKUuGzoF7j2DBpX7dUgdwp",
  "key41": "3WcRHhhnuorUEkjJBTKvXZcxr5diHCazqqVWfVDfDmY9iZKxsYe5Evw48rq27RMHqogqEJ6kxc3GMw1WSoCrvatC"
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
