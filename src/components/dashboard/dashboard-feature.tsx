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
    "661jVXPVdLfUKR3Hk81a8GYQASsdnws376x5BCnTM9nuUcTphCd7ia24AGQkMzYfGyY1wmEUTaKsAeuT78ewabsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yfb6KuoJ8uB3DtAxsqnnshD3qVzmizk5cC3wMUC61gWXGSX57kGXpAsAhQkUXiF6VGbuyUHnRTyuC8NKAzorAZ7",
  "key1": "JvT99E5Ww4wPimvq1pkyy8c3AiL87hsVFkXZQskERmhE2BGcpwHb26cy8vLTTnms7YLTkuRcfwdE9qRq4cgkBb4",
  "key2": "2S34vn5z8Bsw3UaeuZpuukr9SrqckivhMY9Zw24ADULRVSxPHxoPTSVtWydfhVskSK4tuAqmkoh6p6C5NvYoTLXr",
  "key3": "346tFPnSFACPfeLHw2K8uvydhK3q14rpVPqrKfiEAgZC2763vMRUs1D1aVGyiGoqEoSWPqmLhHRrkysVNWvi3X1N",
  "key4": "mXrTXkHinCzTEqYcuiur1FBtvdBmrdJy7RrheJHC3XSFHCCJt42Pstwngnr1n32rvzj6LJKL3LZaF2J5kRSL9q2",
  "key5": "iWFgHUXwC4miG1zP4U2EXJEsiqnXMBHfxmnhGDrwUYWoxvznfh4LqquaimpyoFbhAg3QVd1zggjr1t9HnaYdxZX",
  "key6": "4UpAPs1Y5yVkEVaRuRNuNrGXvWXZNz7VyL5AGm5c4XW1gDUFJnfStmdLF99J4mUHuS8mAP3gtn7mC9Gm7JwsXN2V",
  "key7": "4x68atTWqSvtAZKGSxpsrsH3qRr53WzTD3dS1h5b39GzDsJnHVz49nfFh2aPmpUQMnUEdGr9YyRbc84bbuYQ66D",
  "key8": "LCLL78nibhmXbc9CjGntow8psf8RrfnFTHSjmbomafUpktMaxSS1ZJfFSa4GG2XzwYprxE9pLrJa9tPShJ17K2x",
  "key9": "2pMPXzYst2zA1dEvChKUSCEdgdkskEaHCQBeZigVkKcxW6qKjhDBZyACTWvt7JDqJi7HT5YzRrmxnyEt9TX7A1Ve",
  "key10": "3kesBU4Bw5Po6MNhjtVCXwXg8FJCUM9D2Viv1PRmctUv1sYuxuaF68s4gxTc9EG7jV6BiGJvkevC2UPPjMun2arw",
  "key11": "YZ5SHprwyc3eYWSirAPKKGoLc9o6WmnRYgSiVgbPicgNZC1yCxNpSiTqdk7ReqH3aDxyJaNTxVVLizm7Md1oPG4",
  "key12": "51aZbZPHtXqaXsz95FohyqhW92PSxfSSGFJw1a2Qc7yJhfyWwUcVSPwsAZqE3po2r2qb2oJnhfK1wqNjFzJoVjAE",
  "key13": "aNKKzH8cXLvWxoJdYFtDabahubLxxkrVbicC9cvwbLL9bpPK31nVoS7GbJ3XiZHPXAvhuwUthENjYoeW8VGD5W4",
  "key14": "52MaWsWcZiQgeRbgDjkpYiZKM4J6X94xbpAFKbhaAc22Y48ieZHiRkuY3anGXJfN2syALqPBg9kmm8MFpeiQRNXk",
  "key15": "SkKbENuSJfBtpJbu7JiN965Y9cdYfd6o49QqWQMfD92Aebdcs1tLgNfBrLfBV3kNCC4ZDCUM5DxZVeucyqfRb8N",
  "key16": "5jhs6Tt7W2rUsuWUxFhbEMjVX3i9iemKbMaQQ6oFRNZefdCpizG3qUTffQGRUJjvSzPapgFHvsXigV7Fjbn2GCv3",
  "key17": "4HJ3UwwnRh57gJrjoSdKYb5g2tVgCyaxVN5oKp5pB7HPMwWvrhnnLoqumLJMgcWehBDK87po5NtqdSWXucBy9XXP",
  "key18": "2h99ZHHd6EmFh9Vf3bZQeABxyrRsdBKnv31LGcT5RQnkAHWhpQ9F6QvpUqdsdDZPkReVKx9nBGQwo3bdKYZLZcQ9",
  "key19": "2n5NXiCAQNuvcP1kFAG7RcH2wQA8dfDNUghQDRbLrhhCeA5WXG2ee1hcwDppTCsCpuVMtSdkmtgyphMDMQJ5PaxH",
  "key20": "nVmPFFvkuaXy6w2Ek9m59zqfCinLjrpLVfGWcsXaePGH2cNDwyB7b8FrS3Vcf3Ba4HdgNq9dGe6BHT3fZTi8Q93",
  "key21": "5XqZhb9QmqukvqULeicooAte82tZbdmMgbsP2fEpGFX8dZBSRStMFxJsizLXYhisb2CpXFb7dgQznKNXTqkiJciV",
  "key22": "bLLAGnJUFncXcjr8TwZxU6pYd9zSetzNsz3rVeYiNWZkbaL6Verdjg4APPZi8gv6JVS8SeWmh3EMCdmT46G7bLX",
  "key23": "4yz6auAGUMMriYianFdC1GzDTtyqo1cxamVzFNHkSTwqVEXjnAFe6UGXYPg5f8r4eTJnCCqUmpv8m2DAseR8S2wL",
  "key24": "WnmUwxpgPfHBZ5QzSB1wqkAbMHjYCKcyJENBsqUmBmFxki9XCV96pTCPQn2fFLxzSsSoRb5utrJ3LugivuXmHeZ",
  "key25": "2b5M5MgADPKGpVeb7FxQ1kZ8qwtxvu62oaDbPtZdRHaJbH3UEazqnggy1hAqSH7MVDCPfYM99mkiS2tVg3aMWTxP",
  "key26": "4N8ESRLD6baVnsgFcqjkzPjtXaPbDXJbvWmLk2QuXCU3tMwY4DD5V5Z2k4M67R4H23FxVzyoZoVBh4ZsSUSMq15d",
  "key27": "4ebeNEChzU4a7doGHtzgBcW4CTy4w8R477hyHpgdf3xaLYK4bkQPcAJjW5fhX19XCmyj88TEQNdggUinBJuVL67k",
  "key28": "452wJcaXn2eHFLNQCVTGRhuai7hV5DHmH2bxtjzY8UV3v5BPyKh1dxZy5BV2cskpfSpoFkjaAEnz9oFKjZAiFvgg",
  "key29": "2E34qsQKsnTucJvmPcZra1haoZKNBm5LrHQVs3fYQvsAFvxqdRxSbV6gVWxQgRTiUxg1ysV9vQoti6yo4A2imKvp",
  "key30": "5FqqUnGx9BUCdVw6SVsz7fdhHVjFGL3utvGhuSnrU31DootRQ5g7jV3dc3oqg4nhcHrX7CSbdLm8KycBTKiQ7yGA",
  "key31": "4L9rPuJwXHpenguYjkeDNWH9CZNZbw3i9uekzRiCnX8gCFviDLfKBCV1YiXT1puTgjy9bT3cPAaYwpXLJiFGReHL",
  "key32": "3EC3cu6BwhLj15TByr3mTK15xLCw8ftWVJTu9j7zyn4Lg42Vu3NDkNvGue8Rdm9WhmtjSVRXJVLvbbbDnYqa5cVh",
  "key33": "4nQQwiAhYmqPAYwQ8UaYwLMYaV8SWqhsboJfsHuvCNXzjTP4WgQ5zm5ogsLL9sP8Eh3yevbvMbr3UzS12BrXkSnc",
  "key34": "5kyzg6hTPgAHyXVAbhuEdFy6yQEMhbBcjCpJcxPg8RUUBsgN1VA8EsK7dHBQoKhbUxsm4X3ru2s9o915CRSKLDnA",
  "key35": "4h8pt7aQiEVzpdJU134cRAcA9GjM7PiKDjyxpTttjVNPWuxB9M9khmQSnjBMXV6WF84Kr9V8P3EJswnJJ5pFCLy2",
  "key36": "5tUwC3XYt5K8SUqfCed7u6SWZZzR4M4sXtJB7TBT1KWLW7pX4z3AhwvNQaKEBTwijP4pRk4h9hdrcQGYVMAXqMMt",
  "key37": "c49yEzCrM7d1FcJYevEiFUnuz9Gjb6gNfFBWTV1FikMX5Aho8q6UbVqMc5X6XBhtywBr6a6hdbrnTJ9ttGo1Y6o",
  "key38": "WHbZNuA1DD4uPppVxCgKhVu6vQG76moEcQjwkHcWqJFjQFTRhzrwDqChB9hJiSWANFRw9kgovM8jNje5Wm4FMTF",
  "key39": "nje5EetoPqhb31Y1Uje58KFw7HYgvoAGiqawrXnAFo4NTRjBa79T4rpXxSkiB1iwuqhZ9u72mB2GkeKY7MN8YvB",
  "key40": "3fdGDu8ksPkmi6EccnbQ6VARtwZ5iC8scknqDDCM46k8fRELdjhs8LtTwric69EdcWeF7wttRa3MjPMXYD2juN1L"
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
