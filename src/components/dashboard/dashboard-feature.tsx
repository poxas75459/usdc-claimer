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
    "wYWrQc4F4yCCJFRBJqGfdBpBAk8RKPTab2mTHtFAHWjiQoiZt5TYKt4sKprB3xahF5Cqxi3Y6pGZJm8AtZMEmdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QZ4tNmgWdfpTyydJR7vFCx7WYSigkU9YmmG6EMC5FCdeEVPD6MhDscrUsuLvJ6mLZpth2KqL7ANVrDu8sqM1hak",
  "key1": "4bVFBoF8gPxGRo2qT4eXS8pkdrJbf9vb2zNT6kEFp9vPdaXCkQ9QFfC8mE8iDVLfuthFkHhdyJW37yNLyd3EnxSt",
  "key2": "414rr1AGukghP2pskYsr8SbuYDADVTN4Yunf2dr2fQ118FpMd9RFvuvwQ1LfF6JsswfUZp5wQQdx52bprsqwNFaj",
  "key3": "3JjMq2DwiaifdPjSkH7urM9f3k7kyP8DKFCQECEjF1SJHH1eN6YJAxCVhL3RyTYvRCRpUExXRohPcGtDbcTf1tQq",
  "key4": "hbWMwnsuoBmSWDk9dFYdq1S4caUcvoawbtPnQ4gJJ4mfBPYDwvq4tLrSHFf3MgzodSTwi3usqpDMg5T6FuyYvmd",
  "key5": "53haxaotezT6TEN9hNWK9z48AYAVGAxUz16f2CDCzhrQpaeQJTHmm2g57RD2WCK3KXmHrbLntJPPFcFy4ifyZWKk",
  "key6": "3dLNMLtnuXTUPAP5nbUpa1iaZSdfL4f6vJBeottwdrFZxAGVPKDohUqNmXy7e9A9NRedDcSq6XAAC7CUFW7wcRfj",
  "key7": "3G9LZUgbifmARggScXdSR2NdD7GaTTtRfYffa3kbMxf5w9PGZQ9c9wsnY8E4ZgewsiuBienJmoDD7bsLKM2UT4WJ",
  "key8": "55dE3pV9yRZxC4YC9D9QVSUVtdyNGKGu62n1D1mQaykFN4YrT2DhJnudywhbAg7vnzZGVbQ2CUa9HqnH5wgc5svb",
  "key9": "2ZuV9jZZy1wwy753nkYciqB3UEsmYBG3yHz6fDAuTJeWYd25px1Q5YziRR32zyuBR6Tmfb1CDjrTjDGY5gkhFkM9",
  "key10": "5z1TV4EfohJeQnS74e27VXNYXt1XngRuwRSubzHQM5r6T4w4vMPgdsBTYpUu61oe8ZvDhYDFRSDfUpdUtVgQRbJn",
  "key11": "2fzaT62XUpmG8x4sPVpwLzCj4VUPJevc51iVpfPp4B5Cm35Qf2Ud6eaM8VroHa551fRmmEtbfzbDHbuUzrvGBLXr",
  "key12": "3ReuiDHQBo4MZoQeQN2Stbki3mc8mDbQtWwGzZDmaAayUUHJnojkgQ6AX2cCVw7CGyqUNMs9FPce1FZJKtQqxCEx",
  "key13": "KvnR4YHLFbJEbGqzDeDjrDo7LsMx7MMDF2dpJ58xrjsB2HJSkfUgBzeR7m4kt7CkEUTPwUMSNEhiqS4YmCtHBTH",
  "key14": "2YeK6Vkvu1upuMWWqN5e7qF8ctPempCnafmUtdnzTfnoDR3AagtCv3svJLSLzdrHySZXE9QCASbYKbM3eiiPuQPF",
  "key15": "4idy3Tajczp8E49LU4dBDoMVEaXA56a5tTSS2KNjerbEFe3dYX67y9D1bGooN9h45vBtFAneoPuff6kSUgiyVTfP",
  "key16": "5qagMVdbmJAdY4GfksrnzXyTEyjGTZpEtHpxy913Kh71mBWLRaRNrq5Lz9xeN3D8RcadnGWu9TZf5czqEaqhCG9Y",
  "key17": "5h8mW5MgpLHwNRNLWK5q4zMJBBruH1zB9RwXCdhqNyz9cHsPoYGvXeciS6b2Qudqa5CiC9gM1dMqWdXaJP425jaB",
  "key18": "4qi39TAbM7QKfdZTA8yVhi5iKMn1FzipgLKSKTf21LVTQ5i27P1nQLwAyPU2GwBPHJHpSkDH8xLj2BYP5ZHB4rvj",
  "key19": "3RkK1CuMfN4UPmcr8T6cDWdWFU4his6EctT3VTfkxE569Wh8giKYiNReLshh9qpDrwgbr67DuKskMRvB2GpNWZHa",
  "key20": "2ePLJiY8uubjQiAP45X2pJh9QWv2hm8CrWqAakJvhkFZ2WZ66NgYPkZpEkqc1MjswcNykBQRBVonHXt6nuSWBaFk",
  "key21": "3oFzMw795QpyaRJZz6etAiRpvFRWQP7eYhYE1rANarz2KwKDE1xb2GxfeBmtnbfXeF4tXH9mFv8BeKkGkEszEShJ",
  "key22": "3BU1ELo8wpeCLYszbW1DNJaPaLMBmpxD1NgDEi4StsGkzvXbiwnWDVkAzGoinnRLXXcK4qj5zxXXkNSqCqKKMSGj",
  "key23": "45YsZpkTC81GhAYAQAXxNz6Y3nTXgWM5DRtURoQcRbfo1h4KxrnS63PvAA7Cm9BNUdW7DcLNTz8GMb444bFb5uex",
  "key24": "4WSuY473aGs7RcScvG4ajWaFjYtxGSP851AJJ9MTZ3GpS5FWJEcLnHtgyd8Sre3jWmXpxLsJzsqiB8XiW7dhgKph",
  "key25": "4XasRaxMER2vaYr7koN86gssy7PeoZvFVaRUwjiowzRH1fbjyNXjaTZo1GTMMkuYY7f6M23ExYmohdApbH3hJyGT",
  "key26": "2q2H9FHXCB5ucVQiQkptq4EgYSHkH34posMTRJe3Fd5Wz7BwUTRECtBsP8muiVikBwPyLLrrFK5b1hSywLGR12jd",
  "key27": "5V9Xoxg7xJmGLVs9ubnFBGXeMRWJfth73r3PQEaQje7QaoyF9vhsxFcYMV8kmbKmvxcAJ3t75UZh3WGPMthwpzxR"
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
