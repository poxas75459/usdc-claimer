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
    "55hwdNCYP58X5CxB8cjBwr4BHzxo46kJupy3Fkh3kcVwLULpX6DBKUuGYXpsuHHEmBwHibkFS9qED63XemPLF7td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D2LimDAhsFkj11Udfw326ieYtHuVdK7z1e3NUNYHxzTxCCBHcxxe1zkFeVFB9XJrAzfyPV3JNjDVBN4UCLm8mni",
  "key1": "CmkkBKqyW3wWm4Zip2QE3jVPV99C7fyUkQEj1VXd1FsZNMEJkeiaoufrTgzLa4yEHhxFaEsDqd8pYqSKriZjVE4",
  "key2": "3QT9b65uWkaz9VtaqNzzZB5GVG5nFYFRyDMgRcAhUdkoPsyXeuPkqymwLa4aYqXXiCZh66QVHx8wddgVzhL393z8",
  "key3": "5AUP8V7MbN99nKnVTUVqaBC4dry5BKFmMjEPzZgD8gtLXiRXHYGnuhpnosptfvTYkZRyXdkcTffYzGXqtzsx7Rex",
  "key4": "3LCFbxpUHxGf7XgVm2oX1bXEBaJL2weFUNd58m6FoSP55gtNFBVd1HAsMoTDX8N7S3dz5bbgZp86qtZEZFrTvUNt",
  "key5": "fmkTRB2E3xW4D9RKmUwSqzxS38eDQ6h6xoUMANwBmUUSfBWuyMsxs6Jj5Q2V8WqwQHVc18einTL81BDbYkYu16a",
  "key6": "5ZuFqnydSLrbkQDwCe7t7ihYLBUf9bwNUsUvvF52E7qnhpn8VPELNJ8bvV345Bym96MjvkeuUWdTWxF823QcRM1a",
  "key7": "3cFzKqX9q6JAPm5LDDmCqYNhJaCU8ehE9iHqmAGAc5zSs4PPXokuxQpwqyEmomeXWP8RUhjUPrW2wvctubGhzafn",
  "key8": "5bRLyLr6JMQJHUVnHyHXPQoB6Wg3t2Vn82XeU6dwgWKTetoW1jnQDGK5yZChvCcrgLZwKE6eYNTZQZbdp17iieJf",
  "key9": "6Lor8HkxY5f3tnMMKnQBw8q7R6643Kdv51uPMhiZ9A17gxesAYyeYYPkNGbeaM6NRscir9HuTeTaqonxjURHa3m",
  "key10": "3unYmTQD19J2oZTqscyaJtD8MUbMsV2VE3Jxb4qxVK1bNKxaCrDM24bVrTriyBgg5BkrDAMWSUSU3MufGyfH6s2e",
  "key11": "4SVwyf5v7qNQcG47cxVAY2sJqmKyqkpdzyXF5MTz6ihri4MfXX11aH5fCbsWR5scHdmmSCNvt5NX5rY4nUe6CWoj",
  "key12": "MwvC4Hys5qFPKxzzsgbCrB5MXjG9rAaJ5umo6k5WvmJaJt1C9rtMLfhyuiRgah24eNjFt1TwznyvktmUYs2X1oo",
  "key13": "3aMxc3yiuXXp1F2E7HopFJrYpyK4M8XbmCrxdFujFzfdtX8LqyeEZJSGdyahSPWSNEUt6n75sS8cfb6o3RVq2M28",
  "key14": "2QNYc3RfC8oVXDoYDdPFjWVUAob5unqJmCdvzHydcnS7c6EYRZinEqzott1PJMTBb4tVatwFnVZNcSwEY566sUtC",
  "key15": "pwBfRX23dwsxLWu3sYYgaaTAMvnm9p3fWjgoYTz2KxvdE9igruUZPsbZkKXKCLRSy3UsAMqeraCQ9HhQDetiZfF",
  "key16": "3FxjfkkDzwb2wZpd2RhGZCU9vr7Z88wjr4PPtpUJyXCzqtFktWv7XL49V1YYGwLauhFeBcQGD6aCjhdVyehR2Zio",
  "key17": "4mZNSLRFmy3suuBJRwiBzNNMqst8RtYqWz6q78VY7cabVQjAQN2qdsVWBRDF4vxJxV3uan3EUSvycgsg7gPNLT5h",
  "key18": "4b7X2huAEUd2CGhHjqWguruDrLFkQxhoCh56wa78Psg9mjasLHkGCGXV8m3dP9Kk8Ro7cv18Lra9L2CgEMbit3NL",
  "key19": "jSgtDTukkcBGrin3X4WWj1oYuPPG1AvKQVS7T7Jg3LAFN5gnJYZXCjxXfoJML6TzMGNHd5CLaJHmQLZRoSSkz9j",
  "key20": "aJp17xrjsx7Qkzxb9TyfbsUbTV713TvVLoe1KB5HbYDYn5TmTd13oab6zfW7Y2nNfTZAw9mh1WC1cW9PgYbREqA",
  "key21": "65UMvsZYedEcTAAfAD11AmTpPBC4PRcijBFXjTfNPSj5aLw1UiVMzooy3k3pJQJWTzxuqwiPG7ugW91NhAwCqgBJ",
  "key22": "4Xj1T19nR68RpGjeRhRrZR2yaNs8h6TKHLPTHnAyoSsiH2n9JSi333sEcnH6ojTKYtqEMrcHKSuZpp2gDkv7iHb4",
  "key23": "2UuqzkPizcFLe7BCGx1wRpCBRtjY5jaZXa82KjkAkZ3MMYBPnPxBtfJGrbzFdFzxbTgxG2eMdsGTKyd5nS5Q9Am8",
  "key24": "42473g7dPcxA6iqGzrXXR7cg87xwWjdgdJovpcEDzjry9y3dCp74y3mpbraBZskXsp8a6sg3d8mTAyD1qC9zDjUe"
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
