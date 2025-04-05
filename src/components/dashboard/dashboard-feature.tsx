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
    "2fqbQH36xxZN9ZvDQTxm9xKBuhqSBfebDU5WBnmNH1U1zSWctRypjnftd49qBFEnRCKrQXqaq94CbFapyQunCQ5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iNMDhig6tuFSyGyZQc8kmCpDvaWi4CMysPLZumP5kXerznb3uNN8TxrnvoH5Ti8GHAaZt67EbacVmHj4YwY6uJw",
  "key1": "3vKnsuNeK8LmdkDT7KzujsgPHVg8bHZeStwq2sxh6E4wEzvgJ3Gz5jm2gsPJCqosrfps2tymZMDU4AruNHdc9i66",
  "key2": "3emzTQPpG3fvVyG84n1BMYcCWeKBqWZTUDEJYLmcCzDdgnpubfCAcdsTMVqjVZBaFxP47HwnsH7LTUjodyPnsgDY",
  "key3": "25ek5MjT1Vrv8nMy18QANdjNWjMebVKwyXrgaNbMC2PE6htDJ3VDicdPuK7MNAu8Svy5Vi8YWN5x2yxxtq6Kyuno",
  "key4": "47d2sdTNqSBJ6K4gKCgofcJaMEZzgQVaMuSBDhDzu8MpotWcqdbCbFZripWTrNf6hEqeZGv8kJVXRXgwZLn9cJey",
  "key5": "5GjbhHqZfWAY9Fo7naK5AAatU3tMPnBdrnQDvnhkpNjC9WNX3BxUJyKbu6paejJrXMzcfWNpjJX4W9zCMxR6MQZE",
  "key6": "3qLxna3X8nH4rvjqbn828CRpeQ4c2JUjQ1x2RbsaXwQuGfHgyn1D5bEhZoDGQ7167oJZu5CJFRLVea7jhxUBMDRX",
  "key7": "27RyEBxXzGs87ir8bFfNDLbnupknBLkSJTEaqv4LYKusZbtmUoXBqSR4BenPjYP1wDfw7snK37ahb2vZhvbJabDX",
  "key8": "4kYJhUNqU7H4NfoT31Tt1wScPcnKeqSzo8HEX5qjMnh4fepxKoCXbURCJ932zy2oGAC1yEJR4ZcjYfmLgoR2t5WF",
  "key9": "2EsmiqipFtX4Ra4wVGbymrb8dSHsq4bbdXL1w9qfy5reYVzboV1EsSXABrDu9feLmPwszHzv2XNi1kwszgpBAEax",
  "key10": "41s8Z2VAPdTjvbABDNh1nhLyRgQZoeK1v76VCbiUn2jaSsU4emWTDzyT1vgeBz7Bd5yK72XxK8LfBAM2EbrVwtWu",
  "key11": "ZYyN9xNM2N3VsMc41dLtm2W8dLguqrxLwZYRftkfy1qE77SqEQpBmbK4JrcZLvGpM5FWo5Df1eSa3SnLW9UsMUK",
  "key12": "3Gp8BGifyYfK3Aw2QhGc1FtHGs5rQBrVvZG51PjZAEcJ6fdjcy945pbzRk9Xrhy8bBd44E8mBtTJPoJWfdTRd45h",
  "key13": "3BsUxmC1aVkqev4hFsisnYaqDoEeH8kQpnjcG8iNzTSvANwpZREdF6J7khDV1VPxjWVzGxx5tScMGd4azpABnkze",
  "key14": "22U35EyC1NXvWsGPRaJPHuzNcpqdKX86YTFf1V5g46SCQZjra4RzXSjmMg23Eu9H3LeuJHkmJjmu1AG7BMZjT2N1",
  "key15": "tcJVGsfPSNAZP77uaSaESH1voKiHqDb9G7e6YNen5mKbdSEJDtXvsfAG2tCQzxY3TR7Dvo9mtvRmdxPHjktNRN3",
  "key16": "5MFo4J7VYPUoL3jA4bjZfaymGCBq9MUDGneJ8qPd7tY17rSG7HHAhfpMirNfYciELvBNGm8YYchG4dKa21EbHgyT",
  "key17": "2MFYaLptdLVFL4CXxdbPCsWq3GoTBEjpNiqPn17sR7JQYb3yRTdEVFw1CnHHsBRvF7bTfv529Vcn769pjvunviTC",
  "key18": "4a6vTBVVPAjQgNGMGmg5KerQfiY2cLJEpYw1Hgobub2P9eLRihkG4sNZ3rJTDZsbS6mQiyoV8bftRvci3RN44Zdi",
  "key19": "2qtjFL1a3QHyaPhiLs2BVB7NYH77kJqN91ezwC1Ds6HJTgX4bWWQN1QuYsd6Nm2Lz1Xgunae5yHiWYMnXGoE7sbX",
  "key20": "5geeP3HbS9mY8LYiroxXyBMEY6M6QKijYAUJUjC3P2aNLZjB8Q11jVYzAwJq5nS36b9mUAUh3skabYkY1GvzmfZ8",
  "key21": "5gHYcDh47CETm5iwWSnX3szTryujJmBwTLiKNtsiN7Vy2RenesyQAoNJK9miLqu8psK7y2sinUH7bHq318im3ttD",
  "key22": "2u4qW4dDGsDrMsdhBDhX1hC1FKbTN6crtT2NTZge78YoVj4cgFg7ZFod5oKHULJbkTgF9eQokJBYBznUn2r851oB",
  "key23": "4tAW8n4mRFqR6M6WGUt8dsdgUY6W68kBzLbi1ULbVMzobrM3bmcQpegBzeJeTAKPvKZxhcZj9cmfWe2rBnLg3dEX",
  "key24": "Z2G5Zukh5UiAQm3LfLmLSscgn7mzKcBMCLTtB4CrxbHR2Uif7zDGxzHJY5kqMuzwkpKLC6gxJs7HrCxzmFYEPVw",
  "key25": "3CFk2NBED3iivF5DgcgNiEHshQ4CgmyBhQybxarMFTBvnBAfZgNMiTFVrgmH4m7S8HufYDqyfb8n9kwEsBndRGU",
  "key26": "Z9pA9mB8c8cxm6UDd3oGEMnyrk8DmdNw24pCC6XbFxibPA9maUQZJMnN21jFu359Y7ZAxVXK3fF3T266maDi6x8",
  "key27": "u5p6pBJWcXLeJhkAioUBfWiHoCgPNGEMHQfHNUUWXvGoHWygvWnpynMMbb944x66RAMUiPVY4rRteNAFvy6tmco",
  "key28": "SkbaKFugyY4Sp2dkWTbdEa5uQhCQBkGakrE788PabmPGhnCjN8jGoc99iTeve5ry1CqoviVngMPAK1kqw1dXkKu",
  "key29": "3zRMv8My4qmi9ZGuG34honNGaoLiyuZvtpddDmRDeWrA4GCGhD7NE5bSoXDRNGj3SYJvCsHBrY8g8yR4B2VUgs9",
  "key30": "5bMZxkfxrxeMo5EuorQcnPqcvSBzxf3C3ykGr9fMQp4tWKfJM3nqDCiENA1x2jnv2c53ZH5TSTb8wMpJUYN3g6SR",
  "key31": "336cWgzjxWtB1Yc2bR1LzpTz8eDkqrrjNDEadrr2CMHLe8qa6kS5o7ZbKc9xBSiP7rwCPqj2RhVwRMhHgup6uYVr",
  "key32": "4ubqLwR2Lx9sZZpA1pj1DoEqEzQ1NDWs4psnxaYa3Zz522F6jMZpp2AHQsUoWodDXasSJR2jF3dLWo1zsRysHmWE",
  "key33": "5wHJoiDkivctpxqt7vADQTckiPT5USQSA75d9GvnH1fj7f1MzUakiXpVGef3dRWZLghp3DVaJp6AZ49hBNudavh8",
  "key34": "VDK68eNg725VmgMbG3GZKtPDBwBvBZkLsSizAbATvvNUv5jJRzsW6Ce5aTXu7jHx8FSRq9JswSktYG7PW1suE6n",
  "key35": "2KcmCgEYPCxBJmjTJBXhQ2Fedv8U8AmKz4ETFEfDNK7ff21tEEccfGgaGYTRaQ8fGigahHWqkNRW7hJemKb49LKG",
  "key36": "1ZNX3kaBU6wiovBwEkx7dfYE2fS7hRR37zMoKXW2VmoPSiiSVSn9HroSqBNFMNVx7LbrMMfofQ77NiihrBT6ecS",
  "key37": "2Tz7QBBLH7nX942ANtD24xotiXHcJfunwzY5ApNDUHPtJVTav8E7bqhTzs4D6cF5JqYu4BKYo3zbqMb6GLw8VnNw",
  "key38": "4PyhgxKycEJPVP8aHzXdY54ZhxBAgnEyyxxHUaVRwLC3WQWLmKsj39oFwLVAHk7zZGNZqFZnooq7tDCRtWnaKEWX",
  "key39": "4iPK2LRcAeF5uuUiw1zP1aiemyoQg1vGjs2tuveMmPUk8x9GzsGe2uM9JYj3bQsDhV9pgTbsCVkNTikg8v61Looq",
  "key40": "psqRQwWGX7Vev9G114oANN6A3NVP4x83RR6Ei67r5TeeQGfVfggy6cm8UG8XroMEbm5nZ9HtLXKWBJNqxUyGm2H",
  "key41": "2N5WoriYdNyV5ZfsaJRYdw4KmBPzGAJFDxBYyq9pF9Tj3kLNY4PtK38Ed2Mqr52PW77oRH3X7mGfdCq9N1v7K7z7",
  "key42": "2oYr1B7vEWfqXi5gvyqBsjfviqvhRpkeUbNbE7svCX6ANJeJRZpVsmw2f78R3NtYjok2ZWedLeQTLD85MLdHKgkJ",
  "key43": "3271uM27E2r1EZfAPbPYtVNnojErAREzrNN7vfTHFLQS71sHu6BeTgesjjSgwsPFNSCQXrAZwHcZfgf4CW6nscrC",
  "key44": "3gpAtxHDWBKmB2K99CG96r8yodbVrpygi8f6JvoaTQTM9oCQzqYKBMSXYPaaZsDWAyZYj7eGte1DcUH5eN8NwDms",
  "key45": "5S18LhvwuERm3Yi51zCF5tRX7fuiU2ArxMmf4kCAGLMpT7Hu4vskjfHhuaAvVS853BjTyVFwL9wbvEWWKRUutnKs",
  "key46": "4iC84bPfBpMaPxgMM961UpUa42KmU4BdnYhiFsqma3EhinLoBvKTCzoSSS58nxX7eaKwsraes5TGj6jKta4S2U9c",
  "key47": "4gWEG4AfL9Vin9gnHnDAsEh1tbC2AetShGkBLxTnjNxgV8VFatTP2s2VeKuaNPjFoN5sv4Vd63LVKsWcpNUB94aP",
  "key48": "5V7RdXwBsLVmmTsB3MZ69A7vQqmnjYiiN1jdFgeHmSXLBwQPpzUuRr5LDsLu5gpAAs1ccc3YNSeX2iME3j9er3tC"
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
