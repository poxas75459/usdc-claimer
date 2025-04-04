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
    "95eXQkMRb9BzqnnxghCAEGdm4RkVgkF3ri6cdKc4rpPeJgWEggGhNBjyUzJvhqy6mPB1NNhRK9ARNBhYwcGmoFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h8PxNX29MVqrsC9p6Pa9QZckXMYxybVuKCAvmFvgTPAEPSMRXwG3WUEY3gUKj9z6jebgY6YGzhkPzzovRKJebV9",
  "key1": "5F4776SYQaBU17GMU5hLq62vHQTekxLpENmh85VAUd8dmiH85v3DzCu8sfZAnMHyKrsjiDfFQTSTqFsPQygDPh4r",
  "key2": "627bzVG6THMdQC5RAb4SRjCkqZkcn2pRzesGPZeaZcxsF2CRJwF9V5kPQnrjE6PGd1c8qmRjexvowi5bi1hHGFBd",
  "key3": "22VYqNJspTwYkGGdSvCX1Y2P2TWKfB5VTb2kAfvHWC99Eag7KH4ePtkADYq16Fg4dXeqwwTcexHPZHEmEheoznYv",
  "key4": "5q2mQp35gj8t1CgiBfKoR48DRBNh9QRmZMf1VwCLPDdBrFDyAHcQRTAGDdyLShG2czEMRvYoFR6PwYgLrXYbYWLU",
  "key5": "2VZCkptkrkAMgDgBkmYB4R1iCruvoXsdx4UwFxa8Hf6rNSniNJTFqTY652bcdpqc2vTLdq8R1PGVR4oU75ZUwTKt",
  "key6": "4NUVanGMM1USjzP5PvMVoESfVML2QFznRsQwEiEhVwigj4iysXZ81bzUPHN2YNYsC5qo4mnrQVvNsMBaAND3oikD",
  "key7": "SbkzeJ5esonkStEmsS3U2fxdPmsiNDeBPcZ5113HhwXbNs5BsziMJuFHq5enYBo7jdHeRbA4Y7mePSeJrqTTyA8",
  "key8": "5XAb6nRSfQtYbvyACrYQhnYCKYRXbrCXNVcV5wTgjiQNxRSmye6jkmsR4fWCyWHDgvC6VAg2PeEkv5LBHTxGkLRh",
  "key9": "21h6seDB6CyNDAQTf6iSg5fwVaMhhrV24RR59P3vHF26g4RZu1UuBquXWfxeSyhdrrLkLNYgYwM86ugD1HzQfgWB",
  "key10": "2i3txX8prETLzW14XjYb1aEFL8GzJNG1yitNj7cmGB3jFru8UQcn2zcMRmwBL7dGYiLbEMjmwJyPoVorQwaXpZAG",
  "key11": "53RWJYvcV4DDPpbsRpLDRFYgSzsgtdfU2qu4GZ7XPFXnvieg5CvTtXQnXN9KSnkrwXwoUDDArLkeKvXdMhcAPCNr",
  "key12": "Ui2uTRocCFmKCr6wcBran8c4yx1MgPo4JyPZ6Cism4eJ2osUC7SCxVARiaUS6XCw5ALNs4KdLU3VL4euYXTCgfu",
  "key13": "323HMaMKTCBSPKVomWsNyhTfgMJPUw6tYGsb5sMrbNuixySuhxdRA8VxWRf6kaAfowpjLJ3qqnphbxsXLGVdhhHY",
  "key14": "3uvX39Het4GDrw5sEWqrpKR9eP6u5hZ8PYbtTBE8vXXjPVaR3pE3DvhsJFhRRd3EwLhc1BtW3Z4j1tRPgfzEVACR",
  "key15": "Sf6XTXrByrahUtNQycDNFC864fTYwF91rK71gctztsivRk5uWNLqYGJrASiVTHN15zwNJ4NQZPBhB1oKBRgmJTc",
  "key16": "3ykG3unJD6xdZyksJCpmLgKYcbzYxB9spbvS5oCr9imCvZ651Q8VGLmSzGjWeD2cPSJ5YEWLYQJgkbBE9xbWcADG",
  "key17": "2Usth6SPKv977Y7JzYhDuwE9uuNyF5c4dXPbVfXU3L5NS3qnmevAYcDnmZvymbEs83WemnsgUf77CLCnZxhUvBB9",
  "key18": "3cEEouVorXsvcywauMF92GcpQtiYo9nNhkGLGL78N89mAXP15FBG921KqNRUXLHVT7tffN27oM65mVr9EsFwXciy",
  "key19": "28n7EW7wQM8vrpCVecmcogkFdS43DQf2WtiA2yg6ZUErF1c4nerDVWKMeaq1tchjw8YRFGhLbZfdQawdqMXRk2zm",
  "key20": "4cpCzQprKeWqbKqU9PBS9QkqWvs7Tb7GKCxHdqGatkSn2CYuPnub7FPBENVhgNjoKgM2AbKDFe4U8nBTX6tKLzZh",
  "key21": "4S6VmdnHx8G49SjTJiDNNc2gNMGqKVxBaQpDYimszwRWTA7tdfoUfQ4ycWpRByimRJ6pEZo8wu7J86D3x6BwD2C",
  "key22": "5KX81HkKmb4fHoRT1ZfmQXvA9ptgAfEwJxiBvVHN1825DAA2nKWkwTSoruL3chLjPTApabeptgcmUTAN5taRbgTG",
  "key23": "3E35SEfdDVFnSCAuCKJZe3u7oCPP91BQ5Rs6RB5dVm6uLuphxBCUFe5ioXkXdLmnfTh4EC4L4mVh4fn4KxqxaZhE",
  "key24": "nXXzTDZ6mqh8wHtpFVBPFrAWgfj2GZqzWG5xDrTUcNAuZsHrLnyqSHnXSb5Aw9iwQEV3FdP1CPtNoNW1qdo8c19",
  "key25": "5qe8L1L555sHXD4hDakyq9RwSohUMKKJS39tgohCFTcne3Zt6xNhmkehHmqkV4LYAVfX6wuopFyHuheVezvft1kn",
  "key26": "65dBubnDsQpLVZ2Nh3xwV98kJbSHv8Wcs4Se9zdwVDzWyWNaCxGFRonbJZ8yK43CNBiiyyMA9o4XnWfjSnhiFSLV",
  "key27": "54cLvxrKbb6n2FRZAJEP48bhqRPDpGv5rycjJWCryUaKR6i97ofioyXhTFYn3idjMtdorXkRCkSEgJUJZpHoBxfp",
  "key28": "312tsniaJAw4gR2S8yHtNKN2kuhfRUTkaw3r4Gn2eriqEsjCAEdMugp3X9Xu28QMB382VEGn2h3VHEngiJ799See",
  "key29": "4Cao33uXhLSPHzaV4DF4N6DrGtvKUVfeyi17AB5EcBCS53p5G7erMasDSMxKtLoAe1ZAMbPS4L4hoh5MpZMMZXFs",
  "key30": "5bWAZYH7C53Eq6a9VJkZieJjZD51TWKMkZJZ5G2mfbDKbmpzW7bQ6MPpQaqELcCfuinLFnXfQ6fy9GidPLfxQuVk",
  "key31": "52HnPCVvYesbz2KLnCxewXhBKxDQaJaxkJ2G5u1fnoRHisjbJkPmu8KzmzWgJk9TZkVJn5MhuHUJYTCkneJQuURj",
  "key32": "3kAdpdYNp1hZ2FUcRXA6CH6jo8o6tiwhuXsZoVZjRUZDp19ieZTyKpANsiTauvZkMGoewHpU1skF28SBf8HAjL5E",
  "key33": "4KboRBAZ5gMU7XuRxs5ZBgV559m7NhuZcB8hfTXWhNNdee4Z7duqVSHyzjVQ69yizyJ85xXtL3n9RuZudmsw1vTU",
  "key34": "5LRj4reAWiZ5gHHTT969bAQGATp1UaTXD3sPNMLf37AxSBN8xuDRL9tfmq1cd8kMsKZUYYwpyYkhjkjZHxGMnaHj",
  "key35": "2L7DQA35Qoxiede76VN5ZRids2j8ptWRjm7DH7dvC9rU9TAjCrY2xmTkxHqTx2WiktiMcZebZD5FEw2ZA9KWY2bb",
  "key36": "7AYkgVSXQ6x87m7u1EPQtxeKh9THixQ69pHFGgujddAECGLRYmEc1fiq5RP1ockmMfboQKzBE9GxsXC8wCFmrML",
  "key37": "eExkhWV8jZPZyRoWbqDZsdDYK5hTqJ87odfZbQkugkZUoasw4wggsiGJYb9iLJc75k8fH8eq9aghH1jathJsni9",
  "key38": "2KoDqjwAs5SL8pC2v6Jad9eUb3mvN2eskVAM5Zi75Gb2mHvchYzGHuzTdEhLADWAiMWMFBU3KTAr6NyJWBFpw2FJ",
  "key39": "2Sx5c5AopCBMsaYZY88ezm9sqgjvmLntKm1BP34CDaKGGMyZAE9na1A8NAc4yhtxnutnbG7bnLEVythhVjCddHEK",
  "key40": "58ShfECaawT6j91YyMepJyQqPJcyyzcHinaciGMauBUf7Ux6XndmMehL8GzRAwyYZAEjA9GvT6gxQ1jVousP2sME",
  "key41": "3K8LeUqfWnvgVyG48BjgKAan1KVcrohXEQ1tRsf4Xgnsio7J3s97THCTZxqkVDs9LFNRKzoZdaCxp6QWkMKoXKPP",
  "key42": "2d8CKDyYhMyem8cHZVqywwYkkGK6wk7ebzsmmNSZ5LjQNNjLn3BF8b6tLg5bvFAhxEnT9Dy6wYf2GaN9tFLKoext"
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
