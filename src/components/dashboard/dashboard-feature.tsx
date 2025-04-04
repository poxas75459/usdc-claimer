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
    "2F1cZQHkK1xnLv2zesbGTREHNpfhY8KUN9nR6DxKUuqtEJbUtA2ARpVmhT4ekAUcdEUvqwQDHB1XMRYM5g7g82cF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FahmZjBdxhRdSDZUjsV75b8AtVSm1v3ZbF65ktMeNdENmQxZmtotEyruMT9UEo2irYh6fLgpSQY8UsqiBqscvg9",
  "key1": "2bkbeaYMdiSnijxC8v39fEcEKFeQ5Ei6GtRdRByvL5nowjBch145GjAnhUr3XXLBZHjdP1FEMvhLhwZ8f9fpLYGe",
  "key2": "H2ACYxjhUkzeSqtocjvcuv76cCypJHZbaf16KEbEP1MxEpiSMpfgLJUYym5YCkjTJRGRCkMsxjh17axT3pUgHZ2",
  "key3": "4cksStrj2rESPuEtQc92WHLjMSXdhybhrn7VPjMyBes3hZF7T8DeKUy1fe62dgnBPqq8hojYTbpTGCGdvzgJJMaB",
  "key4": "3j2x74CxWPu7tKjWJjEfGE17A1Wcf953XLQ6hN1zQT2KdmePnj6tpvfh1AkMx49fKTCFVJjbJpKFerZcaWnLixJS",
  "key5": "5M4x8e7RKP2CzGz2CjCTkMrVazESnDS6mepLVyxXmheKv8t6epE1MLeG2HReYB1N4KMJ6HPR7MqQxeeLAqrhU14D",
  "key6": "Mn4Wn1GCA81oDJnXvh8sTR34wVHjYzFiYXQoGWfJF96dnvYfTYB4HPZTAnaAkeC99cw34Wwvmaqo8Fapyd3LLPw",
  "key7": "4QA9qseUZXhMRdMfmRGNyDv1AtrU93M9LoSChRjDmteZpp1HqnWrTFcV1k6Qdd84vB24RyasHwgLLSFCQsJHxXYR",
  "key8": "TMrhzEjh2M2cx7M85evUvLjM7VF6hCEfYyX2J3EZiDS5jgLm2HG5pxteuJtQZs39Ab6EMPJE56WhxwMq5J5gJQo",
  "key9": "5GmKkgofSJRGhpsbF8hLLAbx9vuZsVBNQqGLUFKh9WuEFFxh56hcF7mAPQPYrkNYLkj2bFLZ2Duf9czywWYVHzth",
  "key10": "4Z4AKzGnQd9Juk9gWVuiPwy1owDg7eNKkFPXeJ4UJ85otQfMf68CsmahsrsdubAFT9eJghqXebYaKZAkDBHn56dD",
  "key11": "2x6ecUGxugvZxyGnZN4jcaFbr7A2tLpeBLbxeg1Wr4NWRwdaHkZjdE4HGVT2vyiqHRodTGVF6J9owA9Mv3a3ZuaS",
  "key12": "3adXFd1SSULJRXwAd9gPkEgQRHYm1GtqzB6z6Y94n3vhJqYuRaSshePj6bFFgwjGvaYhBtpcd9E64digmq2NDrfT",
  "key13": "5Mg5o4ateB5a3VhYgMkjh6WHES86S8bbhtxt9Pxc2kKkbx1KsqLPjdwXu7DxGkgpXtq8Zr6cAciEpxppSMMVoH5b",
  "key14": "4RZmnNJz2cThzDSWmEkeQ96ENpUoSF768pWwsoT8CJMyeSbsHJ2eyok3VLvvwrtqPQkxAsCG5T4UqnaUAwUttK4k",
  "key15": "4vvcyMmfzd7bRcRpyW7Vj9JWHNwypi6ZgnqV6gJiHSg6pi2ZvSuR3ZV5AgN81Zv29Ne3oteCDV4Y7WwBBh9dBqXk",
  "key16": "67ixQ5VopmdVbkj2FjA3gWKdHaN4JdntNevH5kaRSGFitpaCoBonZ6CZZGMdik3JB3WGqnkeW58JwNK3UDaPhUTK",
  "key17": "2sddBPKSs4rnGddhSPKQSXt785fss8AjijUMD5UEc4GPDgzFc2Y5rX7k6obrK6aurAkMovGFvg6e38MPHYEqRc8G",
  "key18": "3czcnaXigbrhpKhxS6ewBQ6stGkXkkT1ZGFBcpZix8JvjCDqF4ZeUzpK8aFGr4wo1zZMV1h94mjMQKFVAM66W5e1",
  "key19": "49bSs3D54UMSyPCp56NadjFpZm6dRnbuEMgtfSRLjSQHhweH3swb5kphkxucm6WJNKboNnvZWMAJpXvm6N97rSga",
  "key20": "2WJz9uRyVtVDPsYsk8iyuNR88djvpwrzhEVfgvTGHpwMowg5cRBLFxyonWbuQetSoMGM5QRYzPsqzc7F5UQdu2KY",
  "key21": "3byW5UDc9YkHzVUw2rtEAFJaPCBoQoT8gJDSfR5r36QkkF8Yakbsfn5aT2yRGe9wnzAKgYtFGQEcj32x7WVdchzD",
  "key22": "5C1DKu9ucKrGdESiJoWuEKY91JoUvL2HPkEAR3kuJ4DTZJe3sw89Pos9kU8m8bVxAD5LDuNokwnvPYGHJQxQcFU4",
  "key23": "4L8ugLBZz5DUVKJ6TSUGxFKrLZciPohYEn6xwJRKs2wZGK4TR59jmc3iTU9yy9hUUMjE2kJ9PKFxHhVGHYs4MkKS",
  "key24": "3G9NaLTG1xW9boQ6a5SKs6H6MDjwrPmCQRQ9qSi4RaNMwNnRtMH8DdgJTSsXxj1cQfX5gWLcaGxMYBrmK4SGXpmi",
  "key25": "5D4ZusaCxrYA8UrjKLiL8gULjooBUoy1r9R4dX9QR2PHwxagcfYzTfMAuzgYTpeEY8U7EschxBFRQXGhWqgrVvPc",
  "key26": "5FdZRuXfbnJMwigq8fpsaZUCWmEGW11BhoTfboJTsaxCDB2dCucqvMJAXsH3cF7jaecgbxQrhuA3bTyFv7hJ2E2E",
  "key27": "4JbNtAjDt5CD2YJtdrdGPgytmTFiLqicZhHqTP5W9TC7f7Afa3Ab1ys8sBEbGjhKK8f99qEGes7juqxwSKByWPgS",
  "key28": "VLiF28wco4jNA7Zq9EYtebihrwpPaKwNWARSXZhiwuHVk4Q7bszsxRcJxJeJUJmq7NBCw5XkTB4JrxqSYYBFBqD",
  "key29": "4TPFJ4cnZaWGYEfEfLvQhgfLeHaKiHYNtNrmszSG9ZGw4f8dQ8R2VWVC2EsRC3sxDwSHKL1UZRiBuiss6YKPfdt3",
  "key30": "2V4Q1nhZaiya9zrj25JM8uy4v4jfxoz7d3jWr9NddTH71vTnmrEqs6CMVDiahJb21Q8fYnkZBNraA1ssLuT2E683",
  "key31": "LiXZX8reeKR41LAn3LNjQAWx46gBUhtfAWaFPwymX3iPXyh8Emjt9aLT6ohCcRMDR1P8KsonPXKdqTmmJg5AWni",
  "key32": "5HRAeiQgcwsYFujJehp45DfTELApAATXhn2yVjVLMzW5p1DWWyct3FS8J7R8yhjWaPpyCtNA2f5rCczqXzHE1FBq",
  "key33": "2Fg3xkodXtJbdKy2ngzE9e92V6QJzn4EHnsv8o6fsGjeYp6jkERvccx6PcXcrdyHDtKP35BsBPpUZszHoDDRcYB3",
  "key34": "3XEiFjDzrfBdpYVH8G7obJug8w25qzUTzx6KaoaLaP99ggAccifW1Sf9rWci8BKfDGXLyKQAxzo3Eyhry6x8zo6V",
  "key35": "5kZTmTsjCF6YCFu5jx3V3emFu4E2uNgiyXRvoEbnf8qrU4DRdEzCxcjeiNCm9V1y4hLs2BJYKf1hyK3bkALyFceu",
  "key36": "3P4kAyk5FKJzxvgnFtg6yWj8CEZFiXascevCiag6DEhLhkbwzZ2szQLQLbEx8w6apkjTqUd4JbDCyWyXGcMEr2VW",
  "key37": "4EtQ5ivR4xYbg1Z6BxycJAaeXf3jbi8NgEWmpEfkTi6ZxhLkNEZDJn5rgwXG2NUdRowSLubcbJNZZXs3VtXGtc6a",
  "key38": "vZwRBWNj38cQjVUbvQK95TmaW5Hrzm968rpWY73gSeannXFXnvXqvGUEpACXzP6hLawPrvxhzmMi2n8ufKtHEC8",
  "key39": "tnhQmNtKvdPoZwwown1utnNqfmjWdA3V8TwWJLfg2A88vbxCgqDzKnwS9Hneb2iJkWC9urNur1gXB6MkmDhXRNo",
  "key40": "4kf3eSwNUpuBaFqrNH43zGr353DsUx55X3VTwLjoBMFaWyNvBffdyUeq64BSBbhAgqA1aAFTdG8WiCpHqhuSg13K",
  "key41": "3zeCmRHJRbZAf9wCanJMJfvKoRpy6KUu7XCRA5XMJuFv1mJXdPQFpbHFsRWinAEQZ22WRcUKDJTVXois4dMPcB9B",
  "key42": "4HyofiFECpZuYYjGBXiYtBJc5PRhpZM5PLB231HojCUSkHmixxM5XuEZs1Qq77wD1fu7WYM8gTW2yErUh6nqtZS2"
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
