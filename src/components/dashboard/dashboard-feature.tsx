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
    "4WLapgdDcyoAkaduuw4DtXmpCzde2995ZLZhZxvYX5Z7P1Gq8ev2X9hrgRKypxhWXwd4HJrxx28rSk9cjnT4HDp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bR4pzwNGLA2Bs6yoNWW9dahtiCFKqz3SKQZxWrUmp82k77jVfnGZaMK8D2qRjKviZAMk8mdw1gGM7GnAFCpddT5",
  "key1": "2mp5Z9PBWJVMF3PxEsZhHUMdkhTKXnfssikEkqgsLmAVkj1x7QQBw2ZgY3itmNqKvYK6rC9iKARNpGvCV2SXs9zT",
  "key2": "62gSA79Ke1YiDfAV9VPszWiHEJNkKMcdE83a5ewFGVvP4RXfRfNUHUnh3mXQxEEjKb7cbGbyThdfzR1xnhFdjBXx",
  "key3": "4q1nZjCsR8UGohzsx4ToW2ndkWrtoETm6xcCZ4y2yrgwfvDnfMt9yBsUpq266sPZVLfRYYC9tYFdNdsoyRDfJx14",
  "key4": "Sa1ise4we3T6i8VeT6Rsf1osUrexuToEYzUf8X9kQvVzSvn2zVF1syMpPWczu2QX7f7Nfz9mSEEhsLqkdGJqCee",
  "key5": "X4m46YXQVRE2VAY2SKuySDZjLLzx8SWRaPsG5Rr36fwRNiGGZaaeobjCsTyUKzpByBXCK9JMBMGKyBoh9A5m2Dk",
  "key6": "NGdfXTCSSo1j4QSy61TuYuds3Vm9LFFiGG7AhAAJfkfPNzpkdCemLv62Bxz5c1Q1FqsEc2ZvWB8yX94pNtUaesV",
  "key7": "5bbAjynJrYdXgSYg3LdhX3yKM5P4SQRQqBAzj1yeBfYVqDFPDYbSPBn8RdDCTkHWDy6Mf5sedVPf3w1nejuhqKPX",
  "key8": "5qZo129yhUGRKa8ZK8tZ5tVKoVkfRzmwfymk7yX1Me3phAdMzVMJeB5qDYaJqpepbVtHwUoVHmUFArFrWMwb8U5d",
  "key9": "62Mo7rTEmcH6SkXs6nz6czQ32GARbj7yA3jnkLRtonfvfzrRA73TJkdaGFTDuf5ADLWDNfeMXy7UFn7BaFD9B2vT",
  "key10": "3UK3gMjqX8puybmCW8yPaFmfufAVPu4R4XX9qcpsc52DKcnuoxnAxL1ghuRTcmYQdJ8um7QuafTAS9rK1VFwQgqV",
  "key11": "2NDfKEAoAUBRBTSei6Ap5iLiApKJVC938CMxR8ADinUHAS5rZX6s4soPT5uFgxQ4hd2JM5PnoiSyWCSDXCBMmTga",
  "key12": "3vJRatovvAU23gXmiYuAmBKpXeCY51V6tRwywECUdQiGewb5jsroUsxxTwLrrVQsbm63er36gM21fSHdz376cfRw",
  "key13": "5NteJst6MK5PeEmiBiNE1LrvZmrNU79MEMZZhp8LHqy8JHyBGXzneAFp3gQC1jcG4og35vrkHzynn9jJ3dqURuSu",
  "key14": "kW9FVRq57ZasDMuypqJLYC7JpEzxeqD3HyxdTLFjTWtzMRx7A4LvnHZo26117CPtUaVt5z6z4Z1HevmHfzLj1D7",
  "key15": "5ZdiSypq2uqqC3oHcZGpUUeh3CxULRaPwDjrRNaFyYZYbXf3nDxrc62KysyzewkixMgTVD1wEdsjjbF8mSRT8Tkd",
  "key16": "3VQDc6srYfdmDc8e17eXD98usk4Ucky5xBdu6GfRjW9A1j1LyepXvCYyDJwtKaBm5SJRjc5tzVqfWPdoXcxgF3yT",
  "key17": "4eRnYGKY2KdesgjagFpKVadERtRvEjRNkuA1a3hsdBCSY4PUNq6peghSmjk3zK8HrENFX2JsXDRD7YBs7CtPqbeX",
  "key18": "2gbRsKYh1btFgxb4qZjDZf4Uapx9HUDYxitNSkEi8PMhv1rc59VNtSRAxAcqBAffn6VgMPMRvaZ9HcJPFwt5TMSC",
  "key19": "5iwcG4BgwQpWbWrbFAWJcFkK2g8RGbhnEMtezWEhXJ4vQb63ccaeySRQBjHkBdQPFsWrHTRH9QrR2JG5QTEnfiqo",
  "key20": "5FCRth8roYj9TxLVuWRv19yLGNbQP9Xb7ZLBrWEVvVGzjgtauXmj69DjtQ3zrmVQtxcroWC4ZbiZMvekpwLgqote",
  "key21": "4AHphShTPqXupTB9xCzMDoV8f4HhgtVQtPDGZMgjRgXKsbVXzLkEpej8yhdPC78Kwu7hPDWdL1d6o4gFqnkVnsS9",
  "key22": "3UP6WuQzJh7xf9SrZKGhTL1cEmhqWyt73kiAdPRMNFjddYGPzt5Xjp5UATVaQJnLG3SQx8yxmLpCGJka7fVXd6zn",
  "key23": "4rWZA1NMFCKyEhefn98BnUrbTwC6AC4MX1ERSdx3mXZUzWQ2d2aBZUha7mGhu3cgbiyTTZSbryvcY79oXcfj7iZh",
  "key24": "3sNcanRzBhNqD6nWhCkC4S7wEvF43LTv4wfZwxAzZhbNFohKCGpiD1YgHL6TxnicDn4fWpGRDGR434Kueb2mz2rU",
  "key25": "5a7yKqJMEytptWvUnvqGD3e5uLhHKkbmbtpEaYd9dJJPwQtYn1pDKe4rbnjwLfDBy4KMGNNEV7hybRmERPDiqJJc",
  "key26": "FALfHnnyJ9PuM91BvHRd1uBq3mgMre9fm8TcM9e9QHQpBWpw8KA1Jo9wXw62MiL2g8XW6VG9asEBQHQiiKQHvhX",
  "key27": "UwEJ25RtmwFiUPZtptnHEjRjN5BRpCpHWb7c6b356rBPtMRtU6tGmRhGDdn3GBEV7tSwdrsFiERcXS4EpDpR5cK",
  "key28": "5fivpSx94UtNKA43FmZqHUB5pgeuGiSCXC7rr1VrkTechcsLXcFMgGQYjGvVAimipChqaWM2v7Ar38ibgzdtLDz1",
  "key29": "4WRzkKc4ZHYhhrnmJn58vVNpaQKyQvoKr2yatKr4Vt1eLf1fyfKfvmpyqs15odDJbRbLfYkW6TFJgnjn8P5Q2aY9",
  "key30": "2mLEZWTT51LgRVRjPFgEy64i9dREJkBUmgmKEKDm1k3uNEVGUa3kqUcogRSXevhkYEJgkaHtzFz42ejRfjhMU2dP",
  "key31": "hrPQCRFCT9StaG82krKUtikqFgogt9q88N9XMTpEDDtjhPUPHSDiVbFjRqzGCU8NtPUfbCeJnCYk5Vcf53swdfo",
  "key32": "2crNuhsUzwsa9ZhTGDUR8E7CCuYnUN1xuBsLHE8jp9LwrA1JQwzyAc6asNHM2SntfA7jtAcT2oB39x9YLT7YvKyY",
  "key33": "5NKtRPU6bdcGVTq1qWjiYsKHbHGWH5xagogMEEkBac28X8FWBmbV1PrN4rt6JPgSQWqrT7K9ZnxxwN11aBDRu9st",
  "key34": "2GiyPzkJajSxEB1CdCECQdLQ4pfE4yhNpRT2MXuwxCCR7Ld4v5dHsxHi3Yt31bsXAaYcoBkqnusdYrtb1sHZ5e4V",
  "key35": "rPjaB1vTeEA1TzsNAPxkZZK4qfaWVJBWviq8CYkWCaB11WgbsCEGYQFRY9ZCEXdCtJAc38RVBnyQNqYPrKEeVZw",
  "key36": "3tzDmvsUyxBpbXxHVCrQXnYk5b75fAo41EcXgjhRTkMgMbtQofMjgZ95vhQBf47cSNMzRxcvrQKit1DWBQyPg7EJ",
  "key37": "2g2YNDgYnVL16ubgDMc8yjqeqiEGwg3kV2fNVJ3FtwYBva32apagdeysrSn43gyz99isTnJfMoP1SwY3pUue4gm6",
  "key38": "5euxkvyUCpUWAWAffvjbDQBVsqyVdJBa4WodHgUmQAATKCpx32a9QN99rtttzzLMiAiu7eFSwEyQKSet5vj4YQ9x",
  "key39": "4R1fsZXMZFQta7mWNAVDUbRF5eVxJ9nK4qy8vm4M29buTXUMLeV8KeQCom77KT6BAGUEssaMVZfUsfmST2B87QX7",
  "key40": "3Hmcx6Z627AehkNUQv1TMZdmbTQJDaZHyaV6tHn7gPowopJXfszz7oX45RAmreyEsteMWzYbp9718k3r1LwqpvnX",
  "key41": "2S2A5D4uHhQZFuh1dvFJBuUr7JQWj5Yo9Ac6Tk3iZhy6sB22nBevFpZvcx6s2m6fXms9acrjGnYN356A1DJydzy9",
  "key42": "5x2SPMTcUv9h6hP72PXhqGuV9gKu2X1MA9KrdAsmsV4MkikTNRikkpu1XHkojJv5za1YHkyw9B3EykVqtHGgHq6E",
  "key43": "5vUna25Cm1JKALt4KffGXKmwqiD9afYRhjMiFAywcdNGZcwBs1NKFbZFGPmfZahamjSNewtoPZ1N86BrNRmRbVJY",
  "key44": "2BwGTaBabBDJuTsgzbyMHtuYppQPFHJVBFVMXKeFMbvTdxzHZx1yyzGVYnfhJg3nMfcG9fJgaALZ6HsJcVkuA3R3"
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
