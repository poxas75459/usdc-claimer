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
    "2RasSKounF7rT95Sq4tWZXFkeeWdFonJeNDUE5n8zixatUaxnVitdSuX4VLFHYuUAJFchmsZgkLoZAkJ4U1pPGFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KBXM5oxVLeS5tqrLeY1TaAiyEe6CuzJ9VNSAqeL6Pzsb4s5qdy4Xz3diKVEpb2JH6cXwMqAvyipvBgVuFbrfmsa",
  "key1": "2JmZqAc7cD8iJpscix4U2os5RT4ZjHPtVDNPhk43FtDJ35BJuGBfkkmdfTUXSQovS39XCZT5NJYWEaXcvkDp5HS2",
  "key2": "2ABybAb3QFdSHzruuQky4EA33BKhG2gkwsQqWX4fdSebrULGeppHohtkP9S6g7WZi9HWt4TbCLo1gnWDweHiJiqB",
  "key3": "5nNUSiX67cn5N2vQ37DPZYjCAvTcSG3mTQRUvkSXUpdmU6DZMVT9p2zzxegTYSsRrxNCD7d3voWSrbNFcsExhdaY",
  "key4": "5PrapbE9CHqCECZHk9CzkSRcCH3xHnAhPfSjK4PoEbbCkTvK1gLQxujdWThq3H4NSL3jAUDbQNqyH2xspmbK9jA6",
  "key5": "4VsfuKmCRkevkvvVA1Aa58vj6FYFmMcueaoa9dL1gPx4m2KL2vuuXJ9KkGZWtLqxMpSt57k1T5KFBHenKcDsM8ME",
  "key6": "3Q7ntBmC7Ww5dDdtVm4b76sebZcEqPXU4JkLZ8isxFQ1GxAx8p6o8D13eXqVkvxvZXzras5DMR1fUSCDyWjfjhdA",
  "key7": "Kj2LZDKEhPkzhgpbzhkLWTbneCa9o9K1nHe9QTonFuVb2BYPj7xkMx3oDKBu2PU15tuCTTGNQTU5f5JYVi6CtUS",
  "key8": "63udUP5TEkxpigSHqdzQuZnxEg9BmzonfqShyVv4FMv791G595axmtYEVx66nYkyMLTt218G1EGRmnvbvAHCMXt4",
  "key9": "2YQzLjaF8Z6CgbNpeVf8uooUYRyJPmNfpPDcR3H93gx7aUByKnvzv19AxaBCU6CE9sSJLJxEvsh53ptg78LME547",
  "key10": "2WAXAEieMLxJQHTGVPMdgs9HRJpRRNTfDSzfTvacpzUhJxFiVCPrZFdYXSa9opfLDNYAyieqEWt8sg2qSX4vjxzH",
  "key11": "39g68TvbPxAFLSLKa6NSvixrs2g7KbWmPzztbqXZEBfTxgw1X8pWYWbqM8WFEK1vjKXBMNrU6BdFoVifU6iZNQY2",
  "key12": "5a8xg1V7X5PzLGr7wqsVw5s9xjpsiTmtm4w1DvJp8iXAzC9HUynd7Q7NzeUF3zZ7rzdwCp7w3vjwXTMKWpyrNRta",
  "key13": "2BfexuDqv2kz3VtK2FhWZsT3v5ceZVGLThhimGBKt4Xwwv5RBsvKQRqneW17EBY24gfVwb7SgxQmx3xQAYMPXs9T",
  "key14": "66xrYJrSXrsQ3RAGSFtCreTySmqv8j6qf3CqPndouFdjQ9Hfem4zBCdZq8QiXjvibGkK7BNGYwqtwCHppUhw73HS",
  "key15": "5tfPrZDA4LmQrrhSxhioAmbKNPufykj8aSrRieUWs9JheDi5eMhh24dsR46f6HRauvNBYmySDYsZYrKL8UxsPSmb",
  "key16": "ghMFXHsUfWd9KdeZNU8nK4BKNcuxtR1jtrEvzLNp9NEBd1FmA3ZWtsxJCMGMUUNiZwR2PyCrWv2VmNztoToAoCJ",
  "key17": "3CMnuCgCkYtJZaJwq7gwTV3ZLMcV8TVJ65BJrZNWmHBKvTDDLrHNnqFHTeqcEikGkAoRR3Di9KJPEVAHhf8fpEg",
  "key18": "5PX7QGGP7zczkhRVD2fgNKd2BMomn6HKbgjVpvGFWyDdQRnT77ULitCNLdSpMTnufAXvG6Rfo18owULZx8rtmEjm",
  "key19": "54o9dBmpjd5z9bHQ41KPWmDxguU7QWwXw2y96kagWnqmX8rfpLL9viBciBNzw5k9FCzk8fmVQ6yTfFSpCaf5VLyJ",
  "key20": "3sVUHQ9L1977AYbsDdx8BdN6DgMDoAKTCvujREURpfFPSxyMKMDEbCeyqqRrXDHNwRVF3BJ8RZ9xmMPXkaYRNLJa",
  "key21": "4inCzrQDUiigXKjvRFoJUhHoexbfPew4noGGpbbtE89hh49J8S99iizPmsAQoZUprx6Uryz3wWrQGyKm8iKCTV4s",
  "key22": "2jtFcherXFN26ZTPVZUzfe4zS23RPrZXLg7JNEKrnsmqjBPwds42AXrwRzaBasJ1uXPNAHPwBB7PRCFarC6sBhuu",
  "key23": "nHrFesLtES4pmUCBaW2fJ7p2SuNFr7vTtvhLASKKrCmjDntJYGhzgrgWDbx5GqjYN1KpqfxPpifxFxmfbbJDTnR",
  "key24": "2pwCALftfBMkLb8s1iCLeajDvFKhQpsPDb8mdPmmiVBakert4KZRLzQAMrC88a6LEAXtb6iy5Mrdy29jHXHWYV1e",
  "key25": "5TWvJZJjzJaJfa4YPCvHSwW1VFiT3PSE1Q6n1hbZPpWe19ECiGTUP1Mtj7ZqYY33mBXHN7TnRFr5W2jPoGmHMKYh",
  "key26": "5g82rJdLUYaNrHsJ8vyeWLUS1vnxHmYiWEoE6sAnzAL6Pn9kMgyE4n115mRfn96LCSey9ApyYTjtWiSE3R4Szpi2",
  "key27": "3z8ZrkU1F8h5bVkz3EZxQLncREdvzGmiXiRZiXDMeJkzvn8xJzh88LQYPZGZwUK5PZ3mWXTxZ27f7NkCDX4TJZLx",
  "key28": "2WUgWdr96qVn2NWCgUGhp8jPq8tBs7n2PBfmLzyvfW51hmoM3EHNyaEns7Hy68rJDx7ri3ESR8cDVBTZ8qVoKerU",
  "key29": "evcJ7xy78V3N9f4T4UJz9yZdZxHHik1uF4QtdiHbhyoKC9EMeLgg2QYaRgfggmdX65pzXHi7gaNFpg6jxAjSNeX",
  "key30": "zEDPGR8oi5T5RXuhKcRHJwor3G1chVe1t6KSRCg7rbxMxPonCrsHMou6oA8AXNm6rDjKymyKe6z41Zf5Lj4jTSE",
  "key31": "5yza4DwVw9udTXWFd5nET5Cp7ezvNGmTWkczcwjLPXqoThYe1ZPUnMDRR9E7HSizEf3Di48upV5GNkzgLnC4Q5ya"
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
