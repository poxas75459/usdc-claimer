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
    "42MSBjMWpA2xgCQEpWtJwqXYyFa9CniXs43PjS7emyyUW81wALobFUWEqnu9QRHrM5GxjKozsMnG1Ut3bfaWY9cA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nQigxp7rsDzZov54woVDE932aJa834BR4QRu95GEsYeZjHmYFDHXzRKZbE2EYRuSthKCT33krYLGjtfu73RfVM8",
  "key1": "2KbpKyAj6f2eBMCNq3n53D5ahzu2k3KWpdPGh7vbWUEYEmhN2RyuKNS53aqRpmXQdWbsHHDxicQEuAQbY5cGjskp",
  "key2": "4DAbFhwoEhFQrqtbJjCiLJh2MVEBZipkw118EWVgDQMsGiPxKqzcn4uEAVc2oY1zFvYtGK3Rw1RHVLBjEQRLk8Do",
  "key3": "642sLz2ziAW8i9FvrxxEAiEYJgWffRLv2iTacZf3TLra1rk7u8RK7XQFyfTHUEGvCvsY6K6WrA3dQ2pBdkRLhwGS",
  "key4": "3dc6gKB3naEpQzZtRSnJ9R8MBN54XFP7ykdpFWrPey1X35JbHfkso7yPFJUd7jPukSiRF4qTJMML2oLsJN6Z9FqF",
  "key5": "3YFKopNUedvZHDfJaPH2a7SuTTeaAcd4mS4CFQfDGZ19EwWsTwwhmi8Fa1VqGBF6b86wQDhwRuVHcHKYoZiDXkb2",
  "key6": "3MbQtf639h7E2PnJnjHLcVQhGjJ9z82KfCAeFJEK7TNpQe3RRiCkFFmRhXGxn1U8Me7veVBbHxbFmodKfXxNF1BV",
  "key7": "22p3XY7Mt1MxbLCa1KK3dmgNQZiJiV1kg4T85VEEcy9Mo9yd6KmxCLGHhncaKvHsT6nJebTX8p6iC4zynisiVcKP",
  "key8": "3JPK6Gty5SxbqUZEXyF8MmA6ijCa5KBLYCveErBUfK9i3iw89eNPMRkNFq2SDCXD4p7uUX3Me8Jd8G7AmY3xWXKo",
  "key9": "45qXyiYVWRgfpUQP9aC2WJdejU769jdozQunf7REwxxCoMqEgTU7nGM4q6kpBH1KwNco7qmJYtUZuxZuv47WC23e",
  "key10": "4RiXAMdLXkXmW4Ujwn5NWsrJ2QCmZnNEKscTg3jvkkm6VB5grR6XvREY6SV2XAGoxopYSR7oYiMbCmUt8gAN1czQ",
  "key11": "5TiewnuzJigcxiVNzr3qfuLa36mhxukVCXPnm6zTCq6LTpeeySKtdAKzFKgfc536h8BMyBRgYLExM3foSVqE5wWX",
  "key12": "yGJ8GpM6VGjwBDpvXU8L463sCsBmNGJZoMDeNNK4vd2NjVpgYfF4ciqJJqk2KxrKWwmBs3qkK5ZQGpQKLLfWtsg",
  "key13": "bGSSMBwMoBxAiV67vjfuPskBTUkreEtaEcv7dCucNd6EHMLfQTD3BcPsMvfjs69cAnGFG8xuQci7E53Fu2TbEXp",
  "key14": "5nHVbZd4zt4GuGwwGLerM9iFLk9GkAixEVpK6EsHnrJK7wAysE31Crd5ACwLDeDWLcshaqVLma6ataof5mXaNBst",
  "key15": "2g66RmGcbyCUx1nk4cmAqyGuKkHQw8g7dC9qPbuLJavLxPJkNP2U1ascDk7f3PrhkFZbkcazqtSzjWJdD5npbsbv",
  "key16": "5mE2Hf86wPkzE3vTBtXDYzjKdM4HkKudUFZ9Hpt24vcZatnhYz2K1xMHqEWrD7Be9tokLZoLqgRi83MNHA9hkrpR",
  "key17": "3p2BaDktSQ6tx1ZdaiK8RvYM1cmdboXdKVy8bzXwLkGtGM97zyzkor6svynSVe7wQ1Nq8VFBpTyCchYdqDQvNL11",
  "key18": "X1ME8LG7PDphxLncVBSiAxsKiUqnCJXBRn5pvWTDsq5U4c5uPNqtBYnNm1AFR7Aq1QodPKN3JADNfJP3HDZ6pWQ",
  "key19": "5DLT9jLREqbBedzK8CNrDFfyzGA6TdoP7x9v4rBxHVQMsj96tEHkr9McrBYaTJqfLPHC64jkRADsrfYfPwxcUS1f",
  "key20": "3yZers7QvDo6en18RBK7Jfvminkt3WFExczTvq1pqu98mv38daCDkZizrYZqsnebAiLnokkJbT1GVPe6aU8RKK6M",
  "key21": "BFRyUi2hrKpkLnkHb9S7GnAkMgfDTE6QCSxbmE63mjtvAopqqLtWQrRgYBAZZnzfitcJR5DiWdRJS6b3zV4HHLh",
  "key22": "MUwUjLCRvA3eJ8umrPF8DopTEduk2gAPtHfE6oezHELgquQ5bXVGYn8bRf3EW7ba4bFMXNi6KLh6FPjmwzMNRzx",
  "key23": "3yRioTueK11U5mvGyJpvZghXkUNcaKpFFqvqxWBMxR2kNEhGmLw3SfANurb1ruVcD7krMKWaH8MKduW3eBdZ4Fg7",
  "key24": "5ViarkLPHEPdRRmVb1RgfiusKQsmXi912pLVWD4NjdsrQE2EgA2KZfvc9HV5Pvoh3Xqbrvu5BJzfs7KXKL6N9XbB",
  "key25": "4umfqebZ3KwkmVAM4UCmk8B4wMBY7qFRF7DBuW8g4zhFFWctogVtbsXwgKcJ6TMmgrkPddi9M5ooYvtsNZLoYoo",
  "key26": "3N46AshpKEhRFX34CCjVjs519tJ5odvHvR24jtiHaG3wuUcErHUWLrpGHxBu1bLdwS56SEaQd8ZvYT1JvDvd3Q2Z",
  "key27": "5ZU8ftXG79Bu4dR9sDvwCreih5VrEtXjTsttJtsJQLA3dUWg8GPQpCqdoPSDyj7Ge7T8dbjpdzADhZPLUrz26sCb",
  "key28": "5zqr3xTYcfMUReSwMkgvgxpU8xjmWgLhTu8ayFUEkFnVXzioWikQAyVo14eAX7C27fFabUfunHD5K3kfhTk4hRSj",
  "key29": "3vzFkd7Dp2pRezQ1QnoBgzMx1eVhcdWZMrPfCZuZMoEtoRWGfCXjYPnTuR7R1xWv2pGUAgxojq6g87zftRAaFrbh",
  "key30": "577Qz916GgfkS5MWbD42KbELb8anQ2FLdMqM199WtZzntmdKcoRhpCQPDp2VqSNV2o2Hj66WZBBmCUXzi9qFnQ6i",
  "key31": "4HUKjbA73KSHVhNVx4hWw9PHdAWSgQJnmLs7PAWgUCk3XuHe2FMPzh2iB9iEtj9oMrgZMvcF9r9f7yukfHn1MpAR"
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
