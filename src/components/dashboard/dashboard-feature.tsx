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
    "4TEYAqa6J3PNPYftbWmGMD28s7VmyX5gdCr6uMHvm3hNf8f2KaydZiWyQL9exsFwVTq6Y8LL9SKQw3Zh6yyqE1q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a8LwsgvKGJ2xVg4cjK6AeuTgFP2Rjq3KCxN2u2YtPBB8woHvhn98fe7C3NFasdJt86Fhim6yrK7Rbo2uEfVRNwC",
  "key1": "4mjQV89E4qyz7y2FzToHszfm12H35o6VbCCexKR9M5dSpQcBq7HDQH6J4NYgRA5zpfau4tTFdmGv986ehyY9MzLa",
  "key2": "5aHAkt3sNnpG1jWhFtH73erDcujsUt1bMqxRrw2o1abDRhKP1cW8WzfxMZCxjKVBjKy6oMES4i1RwWWgCfZvSgoh",
  "key3": "2db6A8DniagF1fkxnEkCA8Z4wYsjDRYKFuYfTcE7AJ1Pn5BvCazJjarEMgzp9NPBz4ZkWe4JBpcdm5pBtK2q7kat",
  "key4": "FWvVq4QiNxxSbxCnsX9sDr4s1jbskqMTJG2yUeE1QkpwpRy4jef1x7xJFC6TQXEJXwy1QwDqhxX2AV4UVaoCD9R",
  "key5": "59ctw5dedqYta5EbQM8YyYDirBLu9YYEAUyW9JwweDwP8pmsqU2Bo3RXiyFSUJ33D8amQJmbP8qLVCH6K36C9R5o",
  "key6": "5e6wdpn2AUakFtBceigWVy8f7ggQvVJq48rLQjeXJRgeZ7MFVLi2dYULuphwu7qoSXrGt8RaQi4xkTCPaGb2mGb3",
  "key7": "2Xd2FLqb41uWnwnXEQ4ywypnqFoYtb1hT3sE3nzfdoDMkJky4bgnn8wd2PPgYYVQ5nmfaTgMrVFZDiG59jEyFGqc",
  "key8": "3b6g6jxKFVdGqybBZ6cxXtPQWNVkuotEZAoDxZFPU9hyQvFunz4DgdW66bXEQi2meu28Kzvngf681MtJNqg4jTad",
  "key9": "2QTVuNcmHshUPCA5ZxPF6SqaoHaMqMKUQsTLSbp9R5vqh2iUcrkbevk3hNxjjX4xPTA5CZwYUkrKUdfMJW4jiWSZ",
  "key10": "3wto85ZtKVb6j3MxzyPc9HyzYvj5EySbs4DrbJGziuKite1v8JnbSY7KLGpkdU4ggcLgVtpT5w1HjCRd2TjXrLVR",
  "key11": "2DLt7bRX7ehjV49gBxwojdb2bf7wdbZdH1pG2E6XDtCbrd3S1E1SwxzY4Rntc33vm9UCukuHZZqLqSFpYRpS9HwA",
  "key12": "3Enhg95WvQPv7cX5YrEM2kZj3Su7MqrSKr7oBSV2hAPCXhmKcWL1bRBX8RTs8JYwsiQivDJ9XtRHkssruoQY3Lf",
  "key13": "5iZR8cw7EQVziXjqdHR9JcDkGtY534TJKaTaqAMcGcbB7zuxjGCUF2Bkt5XbvrQhzQbyKWp5h4eeJb6ty7vSuVhL",
  "key14": "3JQidtzH5n17XinyVtRQVuZzaRaFXkEQ1vuWJdnBLkioQWPcoRDBEyvw457JQbTLDZuB5N3VFxxzSaMZn6Qebyyp",
  "key15": "65LpKVbHMJS7RhxhGP6Mh2g2EE4QuMD9CLRb5xccvZrf3a3uAdr1VmhwB8qUujdvNinDxdUXVcmxJPfpJBH7dL1N",
  "key16": "2e8mo5txprXad6u4kiSuXGuK6nmnRtyTKWALWpUMp1mGaVY8rtPLhfmZaeuwJ8AvxjnSDtcdcy84GhSbodzzngz7",
  "key17": "2nQJFwVM2B3Q2Prprec6xeymfTtu5wTMqW64ggMB2adYDRrFKTXByGRVACTXu6odTzLaoN7BzA5aydyQNpAVHPMG",
  "key18": "29HciAXyE3AgnzfgVMzCpu7aoA5zR1d2DrcF13SFmCu4Fx3Tmwv22tppuRd6dcpc8SeB21dVGPzozwdCMsjW7bnR",
  "key19": "3HAWvJGZfSbAngLasafg8GbwYS3JuD63i8kwndckd8Pkjpy7RQkbfnwjzjWyuNEWCVqrBTSs2GrSKSNWTrZbBhnz",
  "key20": "249aZ8ijNaRexn5CtXVi774E3NX3K4PsMcPo48dqjhdoqSTzLyPiDk9X8FWTduNYQJb59YctrRyKTetncLi6av4n",
  "key21": "2Ab9YiRw5wunZBEPmq5VGjgCWXpQ7Jnx45Wivvwmro32SKisc2qwhhCDLDwWSrUqrr2Y4ggxMYxUznJJx51nDEaL",
  "key22": "3qUyMoyNvbEzv3g1xzve69n5pk12vqTfVQuxhesEECYcPer4bP2gQwucnoVc5YeRMe1Hn2Uifvb27JKseRHTsoj7",
  "key23": "2FtzQ5qrwWsm9TMcmvxwbmKT64AbpWuBQPijvtFhAWZJEBwqARXdkCuBg3m4Wj8WLFEhK14XSbpJ7V7audW7UdTA",
  "key24": "A8zDUcc1eGTDVUFC2gdXiExSvvuYdetuzc6hRJ9XefTz6i3mdhEYGWoVqMMD4zmVuUYBme8HEGqd2wkDHiPkKZi"
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
