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
    "2yLnXUB5u4cAdE3w89d5PKHaozK2iZWqi9eLzZrj92XxQX57NiCm9CJ7bX8JKZVwJeUMkXhpHaes5Vzf5dYV4HqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SjTmExEXEyRAj24efjmDNV6vHRMffsXbdm2UmXV2A3VgYkjeBedr8zgy3c8AC1gFTEz13fwwR6sGMAR1k3HVnxE",
  "key1": "4Ly2gCQfHNXBRgZqktMB8wGbSui6f65pv1PgCA282tioKwbLCcE6AkWpSnKp7YXWeUSVVxbxNZhHg9Ymtcm9ZKjb",
  "key2": "5APiywY9jGTsoNK9w1XjMY72o6LfEmgVXpYAcCypBhNA9AAm2gM4dziyabJXbqgNiptnGd4WAST9i2DR1WcLJMks",
  "key3": "4Xq7LE9MzEkWLYzMTHU8pkgBPsnADWUsfT3aAkqnNC6kZziGVfQzjcRBRytCKYQqxsm95grkLiYyFcpTM65BcMm9",
  "key4": "2NNYgwaUFSd1xxqeYuWcZSF1odBGQLyiayPNi6ZEyoH8G3F8iVtMtBd4bgUtx3UveWE19xNXbNYhUNne1yA81UkV",
  "key5": "2pNFvK5bGeuB98SQCayefBiwXCgESeJGKS3f9SJ6Q2nLgr25kaaQWwGv3ncy4t5KKCidgSvPRTSv8Y3XkNAVZ9Ds",
  "key6": "663KMrnJkertxzU2hmC4yG4kpigDWEd3HeFyyZh9Mska9uSgdYqK61JkLxtaK3JcR36iVNdhZEynevx6rSDRYL5P",
  "key7": "5GDv7XaLjAjcKv7sJyrJtQ6ty6iYeZo69qgZJwWtvYbeSVrPbVa1Vn7JT2HEXch5qbURaC1dYwG8BDsrSzTMbKPw",
  "key8": "127DGTNe8gBrtaJPr6t94TsGfZdpy9hnYHzZxw8bGU92YeWYQaD2Latu1DYZ4N3mgVXX2PZH6joBouieuDH9BXGb",
  "key9": "n4FJXMTKB4AjFFp4gobqXnwSNcCnbE6a19RjngJpphSQed1gJL22a6bgxq5wTZFLjWwkbVHCmkefR4sgQH4DwRB",
  "key10": "5nacMUDCJ8CjCDxSecgnf5JH4Lm2PuKswDxfP96DVs5rqRPn3eLSmUb46qDTA7BLyoSGjh1j1S9pcf9ct3JaNTbK",
  "key11": "2c3ehtUtnCYJPwTMk9cA1sSVJntfCmrFutSHJDTAkX432qS2X3W1zQVhqAWp2WKXzV9JHYG9zmr7hduC4uauXkbD",
  "key12": "5S4h2pxfMRQNpMKDaBR8EKxqSQhV4DSCbLz51EHtjspJw1NJwxXi6foQD7uvMDggz4rgAWFKF9rwtJjYS2r9fQSd",
  "key13": "3A4EXc5ARZ4JYyF5dpFZ31esU2Fm6urCa8QmVyex4MT8ZvGLc35jdr8bWUtEXg9tv3QoAgCLhefeyk16pGHhsopY",
  "key14": "44vnvcL92x11L1Db6yuGAQHsHRostJduiDYuDUiCJmuimMsosK1fJg4MLFCWvLQH6sTSmMLgqN1jCGQZsPbEgqda",
  "key15": "3A4tepUj11u2qECLFjffdLpPUTnTFA62trQ3G8YDBtWtLK2qbgPsXyx5z9xxDgqNCXn6i9moARpEBGb9C7foi8Q1",
  "key16": "nvMWUZEpadRHCvgzHcthL8A88gTvdu45UBXquwTTUisjReE6sBe6fx2pKhWcXtt35r8RJaLEQ5EjRerDdKyKe2K",
  "key17": "5n5Za1BqjFx5EKQ1mqCVaj1k2WAPUZ5skw22Yefa3QhFGJGKe4ueWGEMAT69HwqgmYr78PLK1vEBD3VK6khFTsvU",
  "key18": "3MDNEsuaGDGuvwJhxXhb1H7hL6bMipSfnde2KbuSabCJyaQeKhLukv8yMwrQQA9GwPHtwwTPQ4Uybbj5CecbzujS",
  "key19": "4EehbMTirkaRvPzwkGEjZ5TAuwZvPMFgke6NT3JLpkWUXyEdp7GnUW1wNMvMwrYdv8tTXkArHSJVmmJcNHYbKmP1",
  "key20": "2JJ57RsZjgVHiyCbFgbjMMSUgBeNqjs7HVFPScMryTappHJwsqdPjNgDFschQk3bempPQbjLRhLM4kvMgEoD4huf",
  "key21": "2pbTLsXmzuzDG1rYURbvdQ5M1NZwEtCoxi4x4iR996un7xSb2R8Vkanq9Z1Jrd2fQnoKRw3JDFzQZvE8R1Gs3yq2",
  "key22": "4a9CzWrUofGDdcy2GkkPV3za2oGysxHyqgxXWGhRcNsDcq2vg2REneuXRu9dpu6ypho5sxvmsxteWXhkEfyXdhsw",
  "key23": "2mSHUT2WUqDQUV1hkMhZEMfuuaYtaraCT7mBaw3inXCSbkCrdp5f5Tt97SW8AJTy8r9YCMf7ecXxE74RS2n8Eg2E",
  "key24": "4JbRQ6fR44oj8QJZiKSynQDUNtVkjEP9aRPSjWxay2UNbirD6xEFWimj1QMtxSRnFNLWJ8zJFbhgu5PhrexpaFpA"
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
