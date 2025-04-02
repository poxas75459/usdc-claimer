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
    "4GsPbDurdVdqoL3M2t3BFVDwKe5yQJHc62iDzqYNxWioEg5ho8UPPMwmQaqC7RKuGoUn42Ejv1eQ5RRvEYZHsWvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vKyGnJose9KYFL64UGQskVWBBiaQJ65TjkkVxS2YPT36ae1JQXJ74Se7AtWwz299eaNucmJpYertvLtgM5w7pHX",
  "key1": "4gLmM7uzAXLcWNFwAuuoobaZabyCriGpkbomh5EAjveGJut2BMP4Ak6bLqBQkD4uMYFQXJ4aJT8hQAiLnkYk4a3i",
  "key2": "4MraqExHnmzWpBjRjZQVrxqpdihmhfzMmPLRdn8ciBV54LfBSV6HDGVTC1LFJCp1zKfCv7YiBh4JHyZqpJF2kRSk",
  "key3": "4532fjFrFVWyBHCZ4YpoXBxx3dnoXuWqR6unbGZW1Yqy49QAQ6Vk5HC6ktC6cHALQhxee8j1asxf2nmmTPoYiLPY",
  "key4": "5Cfnx7vNhj2D9jTRkyt6zvuNTiPHvGNUXsaXyBb9Sk6GM446wwwzXxgTSMaRunZPQe7ybarFLw7A8SZ88AYfQZoj",
  "key5": "2xHE7N9sH3Dpy3GuYStKsATrj5KZTYEpx1PFjoNFs2nZFwV5f4ZFnkFjgfXJ9N7T4E6UuriuCQVnoZXRtjpnqZsv",
  "key6": "5Unbsz9Wnuva81HDCcWUgUo5s6fBL7ausDwSGZRBjH3tTkc5rYDz2r8kNDDUmHtryimyvwj8PJUdYskKZeVWFuP7",
  "key7": "5ZiCu3Qvi1WJAKr1X1q5XPH6Qx3YJuUHP94RBPjY4EQjtkHW5GBsR6qMWW9GfB143ZSBeqZ34g3FUx8bCAvvHhzk",
  "key8": "SJE3Q53cgaBdzumJj23EnNS5heE3tqiRYhuz87kupaKZHUkVnPjoTT3vUUqgxJjDUyWLB62PkAmH2yvQZxW9mzT",
  "key9": "2xoZ1D9LZ5qK7LLtJ29kK1kWKHeYmrW1ki9T9NAczf3EEGhqUC4h8EFHLEGtwifwAzucvy92eqgoWJ5U7HpSuxku",
  "key10": "3usqdK3xjSg2YMCrWagRzcT86iP6CjaS7Nkr43gZ2MuKpVcSpSLUrZHEavKLcB7mjgBFfptrbuoWw5D46FP7r97V",
  "key11": "26DbEzDvvKKEbfPW4DZaYHnuuUV7fiAKqkLntH6ffDFVPL7uUu7PshzB5VL1wsSFDGqDMWHBmL16EycbmjVzEaQH",
  "key12": "4UfbTdAic7E4aYBBq8zXHjDAJNqpPQAtZMnn7aF97eEsJNXtYEv7Lua2Gdta1kGDJQMNNLjC6TXqYtYsoTWPQyYi",
  "key13": "2pswP2pH7ytjamKUFgGXYNvDQQP16ie6Z9ecJAnXy5S8EbFQyvqzYtBjxn15CEzFpVtW69JK4ue5U3hqpouQNYzg",
  "key14": "UoLBntGKEyhvFTsTLVPNp1fuLNxqSw9NA8scA9M3EGdc4cTmfScuHwsgfWHAqGoDRGxts9xXV4GHQARQUgMvCSS",
  "key15": "3i69c7t1czNvybgqL9pkQo8mFuNXnJ71Uz92NVoGYRXi6VCDqCUXML9yyQrfj6KiqkoQZ3bqA67RSrscYMCspP8n",
  "key16": "wppjgXdccViTfCGjtQA8rs6CVWB9NpDzb6Bq6LEQBeEfk9rWYaLhthAqCCLv7UagGMzXgAPB37dwMkmBmarmae5",
  "key17": "2w5hwWSuExPWGSKshXArq5kypxARnXC3SMhaBUD5v7QCFYDV9S7UM4P8eA1soeJkgNhdhsK4CPktqHat1AWEFMz9",
  "key18": "2jKbx9r3gk8kpP13eJjDjUqZmb5CfrCHZWnvCgCcd7TceyrXu7qP3D1jee5TzZ9q2g3tzuB9Q81fRR8gUhsUXY2E",
  "key19": "hdQHrCtGsCgZBJWCmqvbVMyCvuhvSCsb3b8r3eVVqvFfH3unzV3YeUc3X2RJYijSU7sG5FBLD7oR94Z56DcNppY",
  "key20": "2nsEZUgxH6uJaEMXNA47NQkapYPzAYSfh8sxaBZ52oUcMia3p8MYa5Hqc9AANhh5irDnbsYu1RU8XQFcij5VDzrz",
  "key21": "4z9M3PkFrejDS5DcW1Thkb747uBjjVg83KPo3teyGe2ovYuuac7PCsuGFmh1QrKTm73DzfUDnUkoA5HGTZZ6bTXV",
  "key22": "2irE5xwHXVKX4JCDyerLGdeNFRV2rHqrckUs9z4cDJfFtdpw7kN3n12VWHaveJYPbkBXHwurTgrkt2nvkCBm2Ljv",
  "key23": "22Ey6WCE2yDMY1M2qQ989S3Xtvo7fXwm32qdqZFnbmjTziacVdMphfSkMAo6hL1r7AqJSFzNxU6gJ6k9vnT2rPSj",
  "key24": "3oUUwbHCGEyqBLDB3syEVLbPCdtpj2fRCVoti1SY5gcee23xmcM44DJAQ8m28S9WUKkdAFLRHeAc52w8M2tps6Gv",
  "key25": "4PmtxBdWpsiT8dmmkb8gnY3vzkPqkprmRQFVgPLfr9MxCk7HdNnjczLwcAMkRuhfmWVNMRkjcE3AquksdmctUQKD",
  "key26": "2Y42KfkzZ1GVmduXuJDpcsWU86P1qwgwLrKLjrr1b7VoVRjgrCDNAqtyX4BL2meBXbCFoXGR37qV28LxRHEABEnu",
  "key27": "63tnwRjEKhE969X2cUGTEU7LZ9HAisBDbmwYjizZ36Ec12LEtUVXEfvbK4cWLR4NZb6SY5C8EmAr1aJqatD5wFo7",
  "key28": "kmja9zkQgLj1aWnbbhKJ3RdumFdfjVWdSb9kF3pYwFUQKCjXyPxs2SgEzQLGdDsmWcE7DdfVFVygSqz7ntnDwhp",
  "key29": "5tZJoc1oz8Qr77q67mEKUtAn9m65MK2bdQ1Ct4KBtZRf4K9pBaPMf4wM1Q4NLD6x713ZWEzyNtiBx19HgHgLVWWn"
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
