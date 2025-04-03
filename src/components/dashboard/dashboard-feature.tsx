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
    "DVY4xSFK8jYYJfyw2Ta4ZcPZq5fZ7GRoA4h6uPanhc5D3iRM77drCQibVJNXpQyBrYkcd66zvwPJ3NkPVgrgx6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22Uz2a3PBQUpZhR6vwz1CfXQH1DzK8cr4SKFs4d38VuJoxpMtudQgTja71R38m7vjHsJ2JvLQrVAwL4TwUEUJ7a1",
  "key1": "MFvfeTsqNZVrhwwhmokh34wpjGnBVM6j3rNfC6HULxiBALYgvDZEWSnogj26FxZb725Tr6hVRwkdvSgyJ7ReJTm",
  "key2": "frx5t2WJtEAgQRbKfFRGdFCN2CiZ1oRzs1R2Gk8jMpHF2fTbRaHhze2mVzSGJpLfW1Y9bdB4ntzYEwUp7vhjSoV",
  "key3": "JMv5LdVrQJra2exnkMT5gygmL9vTFXwKWBt746E6pXFRbTgm5DYTvGEGp5UrQsFQAZWVEk6SNZoix41Lqznn4nr",
  "key4": "63ydELkTgpMD5oewxQA4apM8ApAHCPqgE8RoZnwrnj3QvFMPYDYfv7Rw7rZ4BX4AxwuFSd4dp86d7sN8wZsHkndy",
  "key5": "66W394kxyR87ifjEKy5T1Nh6cZFeUWG32yht8a9ozi13E5sBF33zwnpKfUitCcGGbLL8RotYDF2fdyxReqQG82Xb",
  "key6": "3zNqURpkacsSushWqWkZP2C317V6gBXGt7zjj9gzm3gqLZucTAcC3E2TXYkey4EC2VBLCDkcCjGqNQamfzKX1G9N",
  "key7": "GgAVYoRyntLeE8AxzFNCnrQK3WLrtqApg8XhUenZnJqUN7VGKpeyBmQe7V8PSrEDsGqSQLmT6UAdM23eWxs2CYR",
  "key8": "C9KP1MzdaZc54tcbVxWNu5hQVzEHqvbj5jvsRBnvQVmfS5u2giE8yoMD5szRrngAB2N9bWM2wFLTnV9Zv4HCSTw",
  "key9": "2W8hNKLfwYAJXrCU6HzjcSaDziiPykAUsrk4A9RkwSQRXBsoN1dbqnRNr64PNteDS3c5DQkhZvdW9wHmCv1zNR4C",
  "key10": "5JNz2TDukUZshfZVSLTpc1RoEweTzgCcFjoFuudhzyJFTmUw47LiVR9nh15WDJ8zFf1oPAHmDBEX4HpzsEuYk2Gr",
  "key11": "5UuExbxv5N7iCqKTBpZy1CrMcWbWQUKhDPviEidvdVHKNsYNQRd37Hg8uNtKX4MhWmZzzXNuvCJ55sN9X8kfx1M3",
  "key12": "5Y9YGz2XHGbYu4Qi6E73XmD9JS4a5j69m4dGKNU9Jswt1nZxXdnEZuMA46tBBypBNGyRwPnEhanuWqYe67MqWoHi",
  "key13": "3CYtYwgjYvtsLnPzkDLW7PhLyksAi9Cdq4B7YLMBikmp2fgSKPwhcdrdaPjg7pvFMo1w37A1Xwuk4ezKjtDk3PGG",
  "key14": "LCXQ7UbpD2ebzGTrWWQgon4sPF9GKtGxgAnZXJYQ3PPtT12989FzuKGhJPcrL8PeuasjUB7ephgQmzWcxNTn6P5",
  "key15": "2723h1yrhgtk753MznBRUPoBDAQMcUfKsqmUq91v2QDsiWq8oDJKqkJKK1RhR9k2ZhQHf1uDMnWZM7AGeeVY3ncH",
  "key16": "2ygmDxKx8YTRijG3iLXEURf4aJmoeKx1NLf5LNSBLg6Zy7hsvYn6Be2xrzBviHM78XMSHzXhbpFNyVEZLVTA1RYU",
  "key17": "3LYj8eGCBk3a6CMFZrUNSiCxuUCR69bhMLeahhwj2AfjgYBZEbr78eKE5pvph81zzXnhpc8o7EsR4tUQD1sHbStZ",
  "key18": "5JXuWktzpGirsdwzBXm3MczGCuvTHgiowTzA7Yd48bvm15LcUVQVZt5Y6orG25FeF7hKfZ9T1YE3SC3AJeRzjZY9",
  "key19": "4ZXLDBmPcwdMBVfbzEu3kJoJ24KUJZU7fnhJHMsCDUkLkBfWi6rVZErV3FdD5XFMWZ2NLQVGuevGLr8N4scZsNoa",
  "key20": "2aXtMQ1qER64k2ipZxH7xjPqZoB9kqhUho9xtD9txBUSHL998RKqvq31DswawaUQB5cAXGKRGHJnu55fUmAtWzBF",
  "key21": "5TWDE6HBFTRvVWgEcx9wsKduhwcShfBiFQEPrwNgasTBVabiKbS6jmYuuDBVKPcCVhCBGuPZB27uWQx5ZiL3Zk3g",
  "key22": "5eSW3rtPYEYbrMBX1ggFMHaUUa5ZiCmREQiUNTSjwBaWrDxe7ADyfu82WY3UJcp7UvPUZbccQr75RkXvhvYvX1g1",
  "key23": "22Kx9acgJJ3ii1GoWnDwR28h1PcRJB9LVUFd178ZQ1agvcgVJ2xhtndWLrT5k8hsjR1tQkFrCHN1bNJ2kH9DFYG3",
  "key24": "5bHrPXJEAoavPhXK6EuYrnyj5hztvzdf8rwsErrSMjVvcmY9Gv1n6csieBaDPK2agCTP3SspvuPCDfwNfaZAjKnp"
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
