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
    "2NAnYQaU5gU3az2w7s6HAjvqfdvXyRVz5nKhapChTPwq9k49vGw9jUH6dm9Q3JM7JRaGmZ7V7sYJPCszUgDUzigq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZJHbEQzGnf1QooDeoadNgZREs1S3LM2Ln3LMVWhWhLBGLzMa5yDb3c9FLvsD6Q2NqjLNTNVwcXfbM3K4jPHyu46",
  "key1": "5yFMurwzLnKWjm6TYu6yvYZKZmzevC6jxakxT8UpJKt9pyviPcsVd9Bof9x9dSgehTmAbyi66rDcupz4toC72P18",
  "key2": "5DF2rP9toyVWFxcrqJkf8fLVds8dGE5RMafFRJ2jgXgRRCCgBZFEwsUp5PWTa4TThcGSu9zet21DiH16Ahv8oh9K",
  "key3": "eDT8CJKwcN4GacDVXCG59WGJZTBmfdK5DN7yGf1NJNH7qNKwNhio4ybqhoLxRv8UoyG7fSE5t8QTuJWn6kXG1hc",
  "key4": "5Zbmw2pANMw4Zyy8uiWc2A7BEAmXrRnMvF658umKiPusrVaZAMWoLWVgmzFRCsaBnkfsq94Yq4up8xSu4BXyHBiT",
  "key5": "2DUNDn25AHAeHSZtzurqmWwK65P8WSpmhnaJDX114qJdzjqEBpT4H21Hgjq8r2TmJaUxjdgYPgu9mBi5vZM2RQfD",
  "key6": "uSZ1uPir4dbSuziLgXUa3cFckP1tedKrSZXtFbCm8TMi3C991jNyrT4hNZz5xDReauVfs658wBDtwTf1dcFzszi",
  "key7": "3qBYuqC4T3GVsX4ywKCziY8eZFrjbid6i16rnwuiXEbQQgbdpN14UY76gmRNeUaQrUntfAYcWnAtsEZkeooSD9Sx",
  "key8": "3Z5GVNPxdpyrgbiJ9hivu7oys4BE3NuWmeMpQyCEd54iZDzBsc5oeLoQcJyuGMvtQA9uZbMjET2gmj8xTA7pgevs",
  "key9": "3QA6VBzMu8PQPXRv93D2jddkqiSTvHkeeA8jX4BUzo93KeaEaJnPuknY2R1mU7Eebp5gHgFoKkSquSaWm9V16iwA",
  "key10": "32k37pnKHqsBALPESfqtX3snRuAWvzLC7nAfuJVhtW5DhgJLav3X5h5uxn54oHYJHQnaJsycssP76CckAhGdfiEj",
  "key11": "2obE1BCtP3qNNZAcDMScctgjzS7ecedBaHmGsa1cSh5h8ynoqVj3P39tnWQ2nB4Scbe8mLbNSjmsAXs3CApAMT6E",
  "key12": "3dvQyUHWzJQ9AQcS9LncU7df1Z1SKPeSrZR2DMQ5w1Yz9hvDaCu6S8EXUdnBkjq7G8BU1HYZkxB3BUue46pBoiaX",
  "key13": "4Px2GtwCyEeNCxrfs6KpyhyTptY4BzDuZDNWYYQntEXbzU6xD7Ts3zcyamioRv2LvEwbTiakhFHwnUuMWGLPG5ZK",
  "key14": "5TM1ApXL4YKnyBRBb4tNY6PRXWQbZjqBLtrRSV2bBWc5WNh7S6pCiWUgn7W5LZZeQx87oPutEUeb5khDa39oaJEa",
  "key15": "4A6GXaka61ZiQcJJpvUASHbi7ttCETEn3dZ7qGSKhkhwwEKQ283hxmaUUQ5PeJb6HqWLEpV3Y84hqozZmnZrQRwb",
  "key16": "2xn5qjCaH5x6qhY3Y5Rx7N3v5hFhykip2kq1PsE3JxYdZTCdBDXESyCUiPbn29h6yjXjL6KE6AGDEavvAapWefmE",
  "key17": "3QUVoNpSdmgCYZCHUxt5APociskEZpycU2gia6a2vs2fSSMmkBoNwKr5ATLvoFWzPoy7hecTyQR8XKJdkTwAedCU",
  "key18": "42x27ZEXJvkxKzDpaBeGtuf4e34NXyi7P4BMbJGJRANFhLgY1virFvbjkJXTFaRxS8xf8ArXNHTAJtYZwLzn6bZn",
  "key19": "veCZk3U4NTesApzNGRpBhhBXPqw3ABpfMcjYa9UqnjXAtdWSLLmBnnVGyQxBHMg1RKMvnQcmq7M7vkJrpixx6pV",
  "key20": "4qg15Jqs1PgaRdjMvDhLwK3Qe9vE7MAS77GLfkzb8fqCRFeZ8NdwNTq8gq9j2wX4k87MRTYsrhDG3E5CMm49W5Wd",
  "key21": "3R2Vm7AM2bRXV9zwTKZ9zpEADzdq24fvNC4VKkjKLHYCQrZBsRjMqYPXfjwqSrBvASE6ZnFZiqou41z8EGdwQMWR",
  "key22": "g95CZPySJmya1N3N2h7wQrw8NSKq4AcFdtErtDwLgpBeJBrU27YYsDmcXa6y2bmkfSHxXyBgfXSXZoxr9eSSaUM",
  "key23": "3M6JGJpwNafToUdWNTUXa5VqEiTpx4SSsXvNXTHMiWsUN6bTMkkMmwyKzsvHcxAkadSywydAGm3nZWSfpAT9CtN2",
  "key24": "LSU6T28nNE1FJqZHHRahKpi4mvvnR75d3PbjSdUzCBJ1CpRZiEevaQv8vE8Xra4VVWEkRTYzhDYNAJy6d6ebn4C"
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
