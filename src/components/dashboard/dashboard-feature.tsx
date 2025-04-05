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
    "516abr3dxpxYXpZmKpBDS417nyYQiLgGatfLjftV8LopQaYutomjZD34Juc7P5HFjsEvGd8DF7Txh2VAhp1ysKB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c4y5U4GHusVmuGMPGW4zaXSgqJBNNHLzWf7JDLFERvHkx7hrKn2aUTDtSMGYfH7YRQP8eAjfkvQXKTh1uLAbCGZ",
  "key1": "RgZUf8xyNpnoWn3e2QwRT9CRhZKZxAxcj3FrBSPJL3g5A4yRKpipK7PZtRieQm6nBDfgcf46htgsyccMSbQYesD",
  "key2": "4LmH6TuS28HuvRB7CsRTUQCy6zodCuMVbMc16PgPaRGwiSgMiBgQx4E7RENsZYJyMsFrPALGXg54RSLNVjDsdfJ",
  "key3": "4LTXyqSEKvoSwo4K3DpWn3rqcS4wzrgsycGcpxH1b5NHeUCiFTrer7CsWHt242QBCLC2iHCK9mQLHSwZ9CigaAqu",
  "key4": "59yBYPugwmvrwEkxCEYioTMpT2vqnupnBeCRHCb7qWJCnAGayvSNmGcPwdkQnnJDzXDd8X5hQ38pqJZHhomS1dCB",
  "key5": "63SB8i48nM2vMQActT71bettyXbjiS4y9xvbLLeDqt4zHRLRRTGJ2Xe9Ce8xyskmk1YAPHuk2UJsxwLabYA5gWX2",
  "key6": "3dqaGQ3PFSp3dAUZP2PA8g4GGypUbHaYtpEQTHxR6pLBLnZcYM7YExG4j9P3W5YxQuvsPe83cSqBX6UaqmkKY82a",
  "key7": "3oKjK6TpC8AZVhmHwMzoueUXWqGdei5PzYhUVTeHLhFMupaT4dfz6by6tdawHgSiuTbPfM9AghwDT5Hruw64pYbo",
  "key8": "5RxWpdSnq2byd3CAaEGL9GNNepfu3sm4LGuNdmHfWqmh5FYyhLNZRGuYDyVMVmG7e1nFi15ZCU2fFjtnxox2qa3w",
  "key9": "3WgBVRGqynCChvxddkDAmXsCgBaTPUS6f3iuf3p4jwefKaqVAX32rb9eXNGEeUHykvAqPyRvWAtfFLpmRWi9UDnr",
  "key10": "MzdjMmaGsDYPQmwtR1s4k18WP81oc1F6xCrx5AmKVLEC99bWgD9bLnxYs1BucxApqS3aNRR51NbatD2bC12YAV4",
  "key11": "2GwrRBDEBgMVQRD5V4Z4EPsdz44BSA5aqHrpGv4BEmzceFRDSi9V3BgyZ6w5KJmMTkXecHk5hrjeM2BQmXGJtt5U",
  "key12": "3oiWbDQrakac6HLaCevAn94bLP4whjkv5fJwM7GJNr5ebeX1pTsbx9GdRbXRn9o78wNKmVNwZ6bjqAaxYm7ojJtG",
  "key13": "3dhUYEATrdhnskdcGzTaGbczSTzrtetjpVjc3WZpddoEXNdAyB7369tB5KLGkReMxnTtFxiGZa3cpNm1v6MbrPsw",
  "key14": "25FPBDxA1zztYshj35D8JeFeCjf3Prw2PZPWcR94Z2SMRV8jg1gg9pW1B6UAcukw69ejLEoQRf8dtS1QYUX86ZhF",
  "key15": "5fSGiyAGRoRRikizQHyEpw2Uxb8mZtEvCxmqYQ9EAVgdbNMuF9P7fUzn6ZFr1VE489Q1jayKMArGkhb8xgyQyqKu",
  "key16": "QVehEPu9mY4C23FKH3qeQjJ7CynVUHYFzBFo9J4bfaakSjAhGfXJpiCA8CWg6sieUBMYUAHSCL8cHTNphByuz7L",
  "key17": "5ynkr1EYyw9opBjf8skkku4yMuCif8EVNij6rXd1PMm1Gc9SrDgxaC7nb46rAz76CnqQvPL4R9c6KmnvV8rhMPqf",
  "key18": "573MSFwxHrmiCEzeErZacpx9gpbkAxmABUCG3UTvXB1o22QXhtvVw91sRDcvPy6tWw69RUcn3NBv47ykmBsdwhzQ",
  "key19": "4m5zBy1DTqEitVwTQFwLobfv9QUJKrLgfYUzrspmkf5GpET3VZCBr5Po2SV1iM7Xs5hTC3SnVWhrEZxM3VS4VHM8",
  "key20": "sGdzBkxKbqjypifidRwXTnH3wrvHYYkyNhB5Q7rB1KeoETZdn5KfjoZY3nRfrPcna55jQ3UkyzTKht9GSZCc5Bv",
  "key21": "62jA6DitSY66FN1XXKjp2jvABSU42vBSHoukpaEQmiEKLsuNBXRGxQdbNf6Fa2qvHLKEHCpB64eTPrAztm3fTH4g",
  "key22": "3hYumgZ62T7KxH2F4HbMV3Ea8CpjN8v2B8zahF3F8DYBSehdFTmqNs8WjiiNKvksLGNmf8ijiKRnWnfDyXjkwLCN",
  "key23": "5wPpNTVHtCwTEvtiYFN3Xqw6V5h6XRArSZ7CEfagAvQPyDrZVnnthzQsnZ1bxDmN1t2hEKn97QnYKi5B32L2xwgK",
  "key24": "U2mXWophs6yFsjXagR8hgBisynqoWD2kNgM7EoVqU8SYE4FgjYx7XHaRYsxC5jruhokkWu8mFJv9c1uXA8sE33q",
  "key25": "xgDSKPNSAEzUysQTDzETqHAXAHS1MsgRd2yqDz9sGXVjq9FyaqGMjPvBrXrDBo1f1WJHTeohLguJ9ZjaokJm4h9",
  "key26": "2TtjBtfH1knwcxfLySp8XTFEYBxZ392GLvZZvxJstLfY1x3QnXmXFGErCLsvz7tRU9UaLsoNsoKRcmdyxvueUMty"
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
