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
    "2QYGMcB56qNyq4dyCEtnSZvtgFpEnrHrLgGXtJcTEk5LZcvUcsUbFuGUq2FfPgkcrfxo6ro2sbzvryGHkpAD2tzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VzFzQgRAS2YSzCFpUXu1jerUzjdKSaDzBD32BA866M7BvBXzi6GPXX83zBDJ7CgM7Y8G7vrSENCUs4MyozvNaJL",
  "key1": "2FNfyoBi1amxV8pZLJigwxGFWyWmXAxq1iUQRdiy36HexCWtVZYuV7GURsN1HxJfh92cc2KjPSk14J5kZ2tVFaQL",
  "key2": "2VgZR732PNFSo2saVKHfWALxotDEYoBR5LqJ5nU5189ropG7YUmybix5YQ6yWx6zLsSoAqMd14w63aT2Q7yAwBBk",
  "key3": "4Szo72yx17jZfYoH2q6ucJxHuQboLfS4rkU9TgLmjnfwRJAAqGeWUHDKSJxKCA14csRPkjgPioXcMYoS3uBFnH4i",
  "key4": "gq3KQi3UqjQWLoepRk38K7NCacJbPoCBmxjwkPXqPHrcWPsz6PsuHK1UAGzNbnEFHRTYZnYB1sEpTu5aDNSr7pf",
  "key5": "TPzvHULqGcDsfoGz1JenyBPKWBhtAtnFGPUnZiaobg9FZWyJt5F2sN6MAauPwH7rCL2EV5vVocmQmYrbAAhaMMd",
  "key6": "2yDJEjKNdVh6ee8YYSm3ETySAXxn8hMpUnjf7sZa6uXtuaucLEbfUsdAC9thPyoLxRQ1t2b2PS2oRFyeD4yZ7ray",
  "key7": "5tEBKNp7C93sk4bkymt61fS3G3rmYixLbpKvDZFZV8tyJv3jskYVy5Nwyz3buLxi37hCvPpBcwARGcvWjbZvsuMh",
  "key8": "tPkjJdp4nJ1CncRew8GTxGfFpWFniR6rhXoucSYCzNFpfisgeNr5TgDCjWBRNzpFZ6CSWXtMFTaiCV5MVw2pPkt",
  "key9": "2LkzxJGF2fLPDFXzuaHw7WofcLVUCLjSK97MczN43SywqQh7v1vcQzqE67dQg4neDtEVLXj5VCPrCDiuM2e3iEJE",
  "key10": "C7wnVe3cfUxRN2J72ckWB8bJdgYqsS1KwB5mKvDdmaaCzu8iUtr64xj5cHTfHMz53ASxkvyGsdKCgC7NQcPsetZ",
  "key11": "5d8XCPW1UdwdSdBxBXJnm3ag7K9RRxctsM9Vd1QFm6JWpdTGSA3XF79Qx9VhALiq2r2ANu8MpyVraciFDqM6JmgQ",
  "key12": "5KcNyST1iy37y3dkuLjKMnZUUECbUsMqDxQrtW2UTenJUG3a3kB9Q8Q2eUiKgYFPLhs5yvd2WirNH8SztTqZJYup",
  "key13": "2Q6QA3Dc6XXUDNy23uHun513Vq5EPXvnXQnPdoa43h9BXJmuj8G7Gava415yjGr1tz2QZngY4rt3kR3egykCAbvz",
  "key14": "1VnLkbPndSjuXpexhyj91bMzE9Hqtp6ij9S3zu4jCaCUfzWPqAUVAPV5eqsqkhtXBouEfeMK3WZC4tpAuf37Cib",
  "key15": "39LeiNdQckDgyZ1VYxCjvAbSHf9wJ5g76fdTt4tmTNkPNt4edEyyGMUn8yxe3YgXEW67S7G6ZVfVDhsaLCbNn2ik",
  "key16": "iCpYAhHoeUiyALR3Lh9Bi1gggJWLpnXec5XyRHGe2d7zPQj7hbsJnC6LSMCDZ2p3K7HT2chQPKL3xcjR31Zr2ha",
  "key17": "3k6rMchCJbaDrZDUGsKg514tjcVZTZb2vC8m2npMu8E2TvuZ7rtZL5TmtBr3qeWwiWDsubr29mMqkVkXBhghAbr3",
  "key18": "31oZCec3S1hkU3j9syaQUC4ZTpTbYdUnYfhQh4Jt2NBTsuoJAbfD3ggJwYtspbtXmUJiKejL8bkBofCETceHS2tR",
  "key19": "2BjzVAtKFsbcLmJBxQf5VdfN7TT1Zg65HP22r2Zhxj1qjD8ZJvyzPFiyFJeo7NmurDyyVH6dHpats1RbWmbC6qFM",
  "key20": "V1asYzf87uRLNrTXPwLteYE5WnCc2tMRtJmMGMKQtHLgpQ2FKjo2nM7WG3vtax9o4d4Lqn66ubot14frjiXnojz",
  "key21": "5nGtsWbbW81Eh4pHW8cb196XMJ9dkWiXZQDPgYvdbin7bGeSeXpeb6iRXWUuFuWWG2gbMEZ8VXQ5oALWu1hmM69z",
  "key22": "3KAR76Xy8tt8FZWpm1VPJgYzoUUsYrcQnS21XrtTn8cgtDniVjeLEBPSsWMkJk6L95vjjouERHrrVEFdhPxaJZYC",
  "key23": "3gPrEJsUwt1fdfdYkKKgaTVQPBwSX1j6rbrgvNXNYBK8oj5hrr2muUPU5HTtaCi1zSvXDGBQfPxvtWED1x97k3Dd",
  "key24": "3iYqdfi28sEBGArz7yc8H1wE8jbExsaQesWCifqhzZ3aVXVHQLXBoQbSox1kA4wuLqqNwLMNvbNvnT4tQvjnHveC",
  "key25": "2Awuf5XSWh6bby37xadmXJ4aNwgM4vsL6PASC13aPtK6RD6MyUzA1WP4B4wG51woH72yKDmHKSzGmQqfzNCyNRcf",
  "key26": "PUJyk4LfkGW9eACnC1AFQYE4c72g2yD4YNw7D8xqxKbMPi3khgP81TvaQsVoAu2BeR3BCUeGHRahDMkQzwzZT6N",
  "key27": "4ujfqDiT3tU681XUWNLP9QrASRgVgLzcWh4PPj6T7nZBVYPGgYBHJHEb3LoCNp3A9REeLFcZptx47KhoxWogGQi6",
  "key28": "2qjQAu9vS11Zgs8z1vU5p6u2sTGEXELbVrT1n4sr438qWfVzN9PVPmH4qD4P9rS12W86ghpSBkNtU4K7xGCRHjrT",
  "key29": "2SaQNvxhAuq6dM697dAaovEtf3cLBsuibdzYVMeLd7cKMUtU2qbGKZooXLTRPxs3KzvW2Ko6AMJYJNyBcmdsQ5ZR",
  "key30": "hXuCQuz4Qmv2b6fwPKUQbqYkAfvAUfdSVr73PgC2PKRGohVtoGZxsE4ybkavEzzTq6UKApBAaeSggjw15c9G9Rp",
  "key31": "46kCvA6swwenuB4j3Lyo9Lqz36VLVC2ZohphD4QG1kS4vec2Nrxd2iBkoNGApSYkfGdortNTkyDvEn9EVSVQhgBd",
  "key32": "D6DkVsDhjUGnpHQoVkNJsfPm7QGg9CA8h8HARNYu54iVUtDMPcMnNxy76QoSr82SasE51nQ2fRLQeS85V3DimLj",
  "key33": "4fkNDtgGjvc9XuMXMeCB7p1ej5bA7nghRHHHyZ2i6h1jA5VBCWLeME2wxkDUu1r4aAHAwrSN4M6Aj3T7hpH7J2Vf",
  "key34": "4ywfWJchyqDqogqhq2XksZweiQj9oZivsZ4FadJpLVN9uBQHbBo1XmHNtJBQ3MSQSLN8ULGLUcjewLJRrupvr1wE",
  "key35": "3PfKQ43VhvFD7a5MCQsUb3PUqPsWRMo8mptF1ED3w743vMaLwL2W4wdckG2rLNPy4wkqhS7JdGRxfb7pouLUwDyY",
  "key36": "3rSyTVCAaPBTga6QHjuES1Ka348gNWFUQEG75CXRPDvetrkBZwSzqCRxdSxiPSdXEuqzEXAotRxzATNuxaU9wxHe",
  "key37": "28dAKXAcab8TencBiPk1QjfcwQzTthgEC8bb5jqyMuY53G7G3cAcaxXDy3DVBmCdsMBt2QJvWsThiRry5s8bdVaB",
  "key38": "8VyzVkUkb33NdxUqjYCNxpXDeTeUxFxdu71sSaxnuy1SjsV6BUGviZ6LJavX83yJjCeCKmZBmNP5JrGKmBUhvLx",
  "key39": "6e8MzEarybHzn2uVfBA7CRNTjXftLdWSguUquot3eLNYuV9wD79pnzKxboq5moKaySjLtWxMC3khPovSEMcxwA4",
  "key40": "4TPehUL4c56BCQPj9nPMEYxDyWsmNFXYHwAUfRpi3kPMKCMfuPmbb9rfmcvFXW2KXu1kD61CN5bzXduKW2Ev7EsD"
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
