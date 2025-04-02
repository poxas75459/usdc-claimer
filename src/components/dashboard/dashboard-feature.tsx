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
    "2yQ2Zw23a7cLNcJTVH72n9d5AonpD2sciDdeAbpYgze4S8zBktTFjiZvQ8KRWZdR9pv849WwyBfsAgpycuVsAdYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LrSQdy4WXfVPVM4Qg8JbhXmXMTZfiYEyxacLCZpGfgmXYsGgNxKX7EeuFboC87SSAvLDbZABvuf7orerC86sSkN",
  "key1": "614LiDTEtz1EbYXQyda49GwZtNr5uFSCAgu8WzHeCQ1nC15KHcZRguCSTFZ6h9iauWjVqKPtZv18kuMmzJtgVt2S",
  "key2": "3tADYJbBAAaNW5jEVbPaRNPew6XNvgN5mpTZrc8zSssWSLALjF2SzTrwJ2bzeWV7dumi4wASDQxdcmUPpsD9Me8U",
  "key3": "sMxnqjR6eBFbeB9sHMnGXLQsgCDycZnuNQse6twNaAbehwsVpCBvFQwMrwTwR3v5B8WHTMfe7zN1tHrGGW9Rkxc",
  "key4": "5DPJPXFqX4NBsYFE36Q2MmiDVGLPXhGdfMUG2rqN2inF44oVDAXrv1NraVk1v41mAohnkWmPN8FzaA7S2DaaJa2b",
  "key5": "2nafttAG8tLTmEoz91LGnHbgk6pxtmys9tthepTsqXmS6FY74UHtHZJvvhq8mpTNJZQabF7TtRfMC8psi6AxiaKg",
  "key6": "6gaNAhhMLQFc69ZoApPERvW7UTVsWHyvTxTa8GfrqyGHPiUn8cZVSaPecgB6dt6YQTxEyhMfVyvh6dhohGRFotp",
  "key7": "35ACnQGi7Me3iPH2ziFUanrgGjBLaoFjvn5SnzVDas8qW38wGNwGHAsLyG5VER6yXquYSgeBq8W7xAhSTGTdajwQ",
  "key8": "sx1zRsmBVjiNyKc4Y9YL2gFofMj912tCVyfqbenix91SMYwCLEqc9XeLFLJhYjzXvFmQrEdc9UB1Z49oJpkTMNx",
  "key9": "2wNqcwyZArTxaR7MXhkckwhuiF5816C9okCMFNPhEGkiUVEzDNVtNzEXyz2nrUocyPoPnhDAp1gWFrEPr1Kycjm",
  "key10": "5E4t2oCQ9EoUA9htPg8mWiq45crbm4GkXJbpSRynSQiipmMpNYRHwnNGkdNtb1uQTgw4mCHxPcr5uChMXHwgk3jb",
  "key11": "39JMfwS5PBnqaXnxEaNYqkcX3RWF5b9FWm2n2kBsaRcojDhHw8GQ7sYozyU9oZV8gtEYwqKognkPgtkQ86NFHXTf",
  "key12": "47vxwE3JQgrSYt9vAZ2uHGBDHLnkV1iUZY2MmxnFczbitPajctXFJ8XLUvbpjFzqqEpvYujD8zHoSXHbdXUBJPzs",
  "key13": "5nz8qvaPUieUkd5qPYPY6Fkn1qQGmEgdkfVH2bTKc7czC1eRJ6DTkM5aAGL7NRhVMwJZRATwLuNRGrcydgA97nnm",
  "key14": "577qzFaGXGe4p8F2koGd9RScDUao4CL5GzfUPZFYgXowaHia7gDQC5zpgVTxNpF7FT5UQ1ooYEU5KV3NBets9BZc",
  "key15": "vGmEEgS9TL1u1Xwdb5NCfkEGK2Sdomu4NgG12ZwnAMBrKpQ7tsYt7kCGj1zWYcASrJyRNKGq5rywm4ABSkMjYtC",
  "key16": "5SHhnpisuadCncCdj6o58J7jrNfrRDmF5No76Rk1iNKtJ2f1fVznRGh56E89AfjfXrqFN3BKAx4DQfpQxwmtmmz1",
  "key17": "67kTeZo2j8CNdoRS3Ern3hyE3YcQNrTc6Z55h3F2QvmtK9BgMxuXXR6EgBidPG1rPbT4RWNvw4NfPupxT5RYa7cu",
  "key18": "YfF9WmZnQagb8e1omBMuK7HNpvDf6RFtiYwo9m8i5qVc6MbWpMPFHti1J381b3Sz9KVcqxpjj1ZYV1SQeMY4RTU",
  "key19": "MUM31badmineJ3ZWgefHNes8tT1tCkNWmMRTmJUwcbKud2Gmy2d3LQjiJtztyA6RCHoDoGnkHaxdXMjCkvf7Jcj",
  "key20": "TCH5XqwqAYP2BfUF5gZRzk2RXp4ySZzs2CQVQhUzu787A521oa6rFSvnBPX39LmxTnXqBgV7bJA7K2QKeJHuLBe",
  "key21": "2fcGLZFSnB9uNByAikiBP5CbPTkbhYU2XEkPAapiKVKAKRYh7VboVay5eNwB3hWqiV2FcfNyLZJXqKWJKr8u39sT",
  "key22": "MKmmBXn7Ro5X1hZ47czNMDrqNWnhnzVMipn4eQK6CjZUWy7AUAWz3pNnYrQ5RQnD5sWXfxjx3wRqA2ARqi58Tw7",
  "key23": "3dgDrR5faBU5vDaiQWiykXN7HuHeqphfyiHChg8PHYxn25prqcpp8GTBeyvbFVBch4uz2YDLMNbEkymuEwRPpvrW",
  "key24": "2KKyguitWqPGGJR3gF3KRnJNmrjEkutXMtVCEqCfNyb2UKZM62SukRLaWjoDw7r5PW3RsTbrbvxQjb1oFSs4uD95",
  "key25": "sAoZWvZ6Fv7cjexPQqLn36ZVk9kK66GTTUE5PtiKBFLgm5Q4SobopFsL9AYAftCQeKYW2dP5TFbttcGNi61TUZ7"
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
