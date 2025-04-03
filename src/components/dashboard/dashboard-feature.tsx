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
    "MpjEc4QWsiTWb8Wx22nXjdQvQ7UbQPXYHQm4irmLW9gfYyCoWDnyYhFGLYiVBsUAhewikoUBdZNLb7js9TcTYWs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DUTmZ75MASKCg7izoNChJuznPgM65Crm5tHCqSqYGRY7qrgHErAXCWFieDPPZTUgJidPNWmyRHUAwW7yJKKs83d",
  "key1": "3AJ95BjxE3rMXPDXq8kEH9KyJeaQM5xuwndx6FA3c769FZZqNEkickcNpenFKwVDAWWRAXzpXA6LKei2RvszNXUD",
  "key2": "5rBVDY2aAFRdmK1aGWTEHpCFPY181njikydSoMSACvzUepWMsaTqCF1ym2CjBHNa8tBZYnnZcWJffk58FJSxzb5y",
  "key3": "2WRNwRqcEdyP8f6AuS4fMsUBLagqnwS2byazQzRp26TDG55yCX68f45qHtvCFMSGuHZpoyyaAxv8YT3E8rf11p1w",
  "key4": "HpVHxyXpQSeZgvmUGbvJAecaVEHJva4jidbrweFL8JoeZeJnyyJR7v7XDr15MyMRDdizmQR7LbwUm8uk7ZdTP6o",
  "key5": "UEmvuXJf7MpckBbFXFhkxxZSeDoWhcXFfmJd3kSpGYUKdwNGxiF897o8U2c66HuLDVBRq39CfE9JPhAnvWtCSVd",
  "key6": "hhrFW9FVbXGgJJmid4JKBShRYhZqybachBsn28ixpWicexuUtkCEoLJQj1iztKLGfX6QcRnnwvRc31sccfkCnQU",
  "key7": "28BFDyphAB3nBLbzmsLr9sVf8LdGYsLG6sVne7gdTj2LoNb76BmYmJgzqwaXmRHishNaAU5EDCbTrTxNqtf4pavk",
  "key8": "2XzwovVyHZDyMS6e3NdBP3aEiQRcAdoPSJ5VeyVepAqfoRdBGYxgqnsDtiPXPazZWfxE3KZHg5NFtDeyrhAtiPG9",
  "key9": "W9fbv4gD8GGPzdPHjJdbr4zGkAsFymq9pyx28g8QFfekV8oiWp3SoAjyZZcuLdE27fRaRYRTH6cXYazAcBBJxAt",
  "key10": "crX7PuFPvRzmLVQzC2jCBYrDcSMCUzhQq1Vp3tiwXgyUydZxF3BYWVGaobiPkGDfoCvm3q9yAahSZqdtimM9U6U",
  "key11": "XQCamLET3XicAkxnb1R6PGKcgTTH1scU6MULNtVHSGaq7cMJHYmtKo95UfaNjCq1hqRcDtG787JYqojxBUJ9jy5",
  "key12": "3Hh5bF7jMZvLTVayJcYYMAFsy8FDtS5vCn5sd2ZmdNf2KffPgvSKYYEiZEH9td4aLjJGcAMJzTq8sC2XNHPf3ePT",
  "key13": "3mYGv8g45ZEEzzAL4Awmy2tLpRwE5PWx2V8LmorZq6YdpPZFSzPGahaJC12BhYKG3o8XBwtoqtCRAKWHqWDxpGTN",
  "key14": "4TKasswMao1BRQhSGrUHomLQ1CmZf2op89AY1qiaGa6Y5TniSj7rgePDZVEk14u7vKHZKMaNrd6JqsaKCC6gFCgN",
  "key15": "5MUd5kjqZGUfKXgQpjWxTGjgvgJmEBK9EutXiVuUEEWhomVYZdf5nhUbemgUiPW4Af45izfyZ3az8xAGsh9xQEoh",
  "key16": "2cKAPnntAfw3csNUdewcLwRMkEk6FtZRHC83growY9QtPWJCUxXZodn53sbknGVE9pGXHSohbFvaceqYSwjBpEcF",
  "key17": "2WXg6gowDQt2eoeoEk2ZU5SNb5jsJEXJBme7Q2DbsY51WPQnLt44HnQYgEhQ9GnH3ieVedyzsFnhs2shho8HZim3",
  "key18": "6A93Cpabr9YvWprjuXTbAAz62S76NLLL21vGUPUkkBAWLAACkS7MXEFWGfJCWQHB55UP2z2aE637FHWvCnFJp4d",
  "key19": "2uji3JRd2ABtnednnWsaufga2uQcBAdF4CUDvkyZdiKmNJX6MVRfzP2P4YdYPFC9NyGuvXQk1ytnPznEqnJGXGMn",
  "key20": "2LWCYbmtDYBajxvxE2EmBgquFEAN5VH8Tv3hEhzVz19hcxxPsW5irvVmwT3QU33f5FJtwXMnGyVWBro2VLobHYZ1",
  "key21": "4WiB95csmQbkMhfxRauLb9VtsKyAGDyNm2HCoKsSqTDBoTazKEvac9TbkMgbqofHwDLAz9S2k7R2ee9qfivitcaQ",
  "key22": "3RrV5qS22ReCZd6nsRs9fgBi2TBQ8rpjzDFZjb8ywsWKz9VVbs9ZTY4bw4q5LC4GmvaTxuo37Vk4kcXAj5cwV4aH",
  "key23": "CksnB8xACwfksAThF9221AKrem8LTCJxs57rX3s3dGguZaPX4BEoJjAiZSjAmz1kWEEqGstTwuAtkL7QEVxuFAP",
  "key24": "ZghSzbzMv81FW81E2niHjDSmWkM186KD7C26n8EbKQGweTEXMRCtUQav7pKfgWEbVe5UpBbDq2ZuzZ3ngayv6TM",
  "key25": "2AkxrVv4Q2qrLvvAtmsWnfZVmxteBmBXKhgGjvaVzh4B5G8k2ff3AvepJPXxKgujqF4k6j3qm5ngC4YoKYMUphrE",
  "key26": "4fcykifpLB43Le5jFh3kjkM2DhetFdEYuJSREd9bxquTiegXxjoQ32VQ1P1y6ne8YZjfDmQp2bQSkAKDFNX8Txfu",
  "key27": "62G4cpq7XUc7oMV2KuZnYLwDZj5CHfYPAbZn1T57vSTUaU7pTfibr58nKK1k3onFwGHmiWdKguWn4aUD5jVy8Y85",
  "key28": "25NfDDMPjDTdvwJDNQMXa8ZwkqGbSwRoDvUoDLMKmNzuc7iSp8ED56f8W2KJn2dmurJx6tbUBnSkpTZGVsWyL8GE"
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
