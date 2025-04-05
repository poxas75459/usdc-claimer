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
    "PwFFKHVSAE8mfppMoyd1fN7KG9jNdZ1Gq6v1EUY9MggNF5HfJPivsn4rbdtnYJPrfrBRsdFJgwr52nvUDn1Sz3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V4KhoaYTj2gz9Xh3A5ee31EDbjSqb695sD921hv7SXgUMBP2hXuZgYVH5yuqWTYsjUftn9MqvFXxoAbFnCpA8W6",
  "key1": "4XQ2ipsNd8RffnmULLUXm8VGbNUua6Qf3ayVvGazaRZ7pVGtUvv1422dQuSPLedKDrsvBSfLsvPup2KFS87WH7ZH",
  "key2": "4admZaZaxxpPSV7wiChmvRyMu5uWphmMBcSZEBuDe7EUpvtL6Mm4Ld9LX9fudhJyxb8zYyWm91dmiDSpnbvhGUM8",
  "key3": "256JkZJXKzSGJDJtMWFhwmnk6Rqzz2LmvnqHht2oLmwcyvnQAWVWvpmQS1ssMnhYdyRsqZy6nonRRE4qdGqVmzy8",
  "key4": "33jGLxGPZTSAxVnbHvV3T2csDAtEtuhBs4Awua5DTshwsxLgRBjtKbPBbGq2ByLY32rzR7mqJuqdU9hqZ4Q6aQuR",
  "key5": "4QJHckDhz3DFT6JkpEjSCiWVz9p2VNNYoyGQ7zLr3J6XmRBrnbMPvuMQuu6Mqok1PXXBTfwCcBJi3gbjbzabU41J",
  "key6": "5kNxdDic1Hc9Hvo4V1dPSuxtCQPSzoc3hdJpmSQbuxnUQK6CLHMD9mBZThWVc9gWnVUpDApLzUidQTjHgQ6yuepw",
  "key7": "215tzpK5119WGxCwYA4uRKMZg6cnPZJHdA22XDpUKQeELo1mAgdgmMFbWL5DPByGJEp84jRcZTmEHvwgohvM6VJj",
  "key8": "2YW4Asiztwi8vF2sbiYePaaN7PjYmvDijZobbDdaTJb2gwGQ1bk2yEFSYVT2x1p1S9FB4tFQdFnhQLhF2QyGbmcn",
  "key9": "2zQTPUSBcqvBbiNyomdTLg4H3nmWNJnWfgPghxmhQwncLj82SYfTHq7dT8p3TUziUQfpUVS3EDaAtNv1XoLNcH7m",
  "key10": "22Tmiuy7j63Un7XkqQBmoPeUuCBScabR9un8dna1h6oiBJpbWCt8v4UDPz4aqBRQqVc5qn9asVeSGwadk3eSskyG",
  "key11": "oAmtim4qmZmfxDRLCynxA2UQBka7vTuqsEamf43hfTjxDRYAmvWdjVSv5NoEaB6rqZKxGT8gsdcevV8k2waazMq",
  "key12": "2d1FpU2TFix2tHQiGckSZVDK6bvEGrmm3SiKBsJcCbX9iqBSLk6Hgsyt3B6gg4X8c9YdURN4Q6u9rhq9jRy9SjNr",
  "key13": "3i9ChtCtbDzyioPf2E27pkXUfNCBjzFQxJtb9WaXJFFG8hLiWgmEzKyGdsruFJtv7RQBh4LxDi31wNXRt3xw64iJ",
  "key14": "2aQs1JqvbHbNAhKXg6ZyQpVvF4uotWxr3nAfV1gPn9J33D6xayMezHsEggDEGvv4epgKSob6yYZTxmwbXTJMHfUT",
  "key15": "3mGzHYtmh6cg9s9V9HHa88m55NZKtyNWksQS6bZHw1LkgCX6eg7jmsb1fq7PaDcEVH8AneuRC3ZSE3wcHLnjszdE",
  "key16": "2uJhnErb9U3ZiTADA56binBHRD1yAt7Rk7BxCtzxdh3amQZVDT8Cvqjf7QK4DMNZ9gb879zuj5Nbmmrc92oA9wmh",
  "key17": "NcFqfHqkS9wF9VCJNdagCZ1zi1hefUzekwAyZVhByPaeeogEtmQQcF39QxkobFZESscc1EKVb4LkeNrbvRev2N8",
  "key18": "3ZE2CMHw9YSVLQk6yxnzwBKsoeh4HGUnHXXD1EEwt28DUeqCJZkPGe78rZFpg5YoNXreAFTPUPzSfVVBB9QbnsVy",
  "key19": "22pWjKZbwFtD3C7RroTXQbzHYmK59vKKhsBPfHs1PXythaJK3VCDUuSJELhT3pnKhBZZAaufYJrXwvMqhhNPLizs",
  "key20": "RJ8pNShV5rSBhLFsEuBcUkLxhs67XzkTbmdP4TRk1yijXEWFqQLRX6TYr8ibAuHxYdaAx5qGLpnvDAZ1dMPpHJk",
  "key21": "5CsqxPnPocii7fhiD4w4KCgQrGsooEdokkmUhCgMVZda5QnbvPFUBiuXPAt1DuqKTrf6G8eDU6wdvavWx2dKuddS",
  "key22": "oXgv8whja6viBPbpH4fo5Bo4gq2XF7xawJgC9cH3otztJYmXVkPXrXcLMRvxcZpjpY8jwvZGDiNvbnE7G5Ghynn",
  "key23": "33VbMvgobK2owWX6vEHSncHQXrLxzpUiQUiMRs42DQhEzU15M8DzH9LJEFT5TbKHfbnE8QGnsqhXC5MVNTrWtGxm",
  "key24": "2E12fRxeg5rU1ncYYccShpipXoEPGw6qsc3TpobDdJSQvF8hNrdxkuBysJ1JkfLvqn77hkFB2SkyjZC53CPtke9t",
  "key25": "pU9Ppt7jfF3tYF3vgPXKk1hssH59BYvv9WrRCMN97T26nfq1sdT2tqrwSrCDpZMDhWJcodJdxkdAXg6RKhw82K7",
  "key26": "Bg5avEmbre4uFJ4evo5GA1ci3uzAty58tzyt6EfvaDDa6uWyoPMnAXFTRwbkyTXUPWNmjfbLBk6pZks9kPL9nvB",
  "key27": "3fdWzr6gzN4EshPwXQfZhMCMyLdtgxQVE2Pn3taS1XYQbgdLwXj2p8TGZfYpdiffBwHKh53GajxC14XGeNEeP3Ub",
  "key28": "4LRtNwVzDmUKMKWGouFSUteAPaZvzn3hknuH1rdLFd2zJXEu8aXB2cEhpbtBtGamKSB2S4Ksgy7DuMT99ZHrFBbX",
  "key29": "EKTWKBwf1CtAs2Ng5HHqNgMYkbynVCQ3FrNXXN5445ETuvNWTDkjMwzZer8z8aGYBNz8Fy6t6cJFrz6jHAnpcRJ",
  "key30": "w4f7moTViEzYDtYKibiDXChtjK2PY3cvH9XtV8gh9BhdpV38c6UNqeQzfhMy1qYc8a8NVXEEdJjWiGzHsSNFFcc",
  "key31": "5geuKL8KZKE41aFAfAikWJsA8k2eke1wYnDicHHZ6es8FYA9QoEyVyMSoQt7supSKYRZQoC3asxi8sYdcDiSXiCu",
  "key32": "4RxPXoie17FuQ2EMoACL43ReL7y2A5Yyt52K2An92TSkpuRLtVHhZzAHKQryMTLtad44B5psz3EXAQeGtvJ26iH9",
  "key33": "3gq6Q1Lbn2imQUj19ADzCwivxhr2JCYsRDhPqYhLezXMtVGKRXQMejPRpPLthD4R6LKJFTGmPx7F9xvueBWc8jiJ",
  "key34": "5ZfCiwtYau441WEjZz1paxs2xoigvWFQjBmg1dTTqpc6PYiBxEf1XSKDGrRsJxeBgMQQHxS9YSbVAChUAkKQDY5b",
  "key35": "5PctFMK3dRKFpxv8GFUhA6h2X6ySfjyeJFZGP16bnT7mr7XXaZLuWH5kGCReUJbmcTYKpZVCS2VGAEayxaM789Lc"
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
