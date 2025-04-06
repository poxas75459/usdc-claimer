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
    "iVM3KG4uQcnLFDEtmNKgMeckYgTppasxCbJZmSStwM9pXKZt6XVzyjDNdHXAsfWftSLFzqAYb2XfYyvwRYktDXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SsZBPf4M8skJ1aGKsh7p98mVzMs5ctZhokkVUoPUDb56bMfiupHAhULGPKPrNkGshMQUNHfq7orSEwWWt6S2M8o",
  "key1": "44DAekjsRN26nDn48RXZtvFQFUBn4YmNMwkNR8RGQ3Y6unxVwMJtuoR5pQs813pFKW5niLeFd4TdDh8pipo36i5z",
  "key2": "4rv9y8fzPzqxD18H5yzYbvebqy2vQu2v7ZoGmNNvPXzJUswAMKtbeVimW4p5rnYZensdGWtymg76FJM7srdf4c6f",
  "key3": "2bubNtJDCBZEEXF6DzqNUQqrcK6AusTgtHAsetyhSfDgbWmr8E3cDa75x79S2ZdCYub9TnH9nXy6ED9nSqEU5anQ",
  "key4": "HDvHkkrxXKRFSrCubhup8gstmoCQAoTsABS7DuD7F2q9GMVGkgVPsKgsXSKaAteR3G7NU8mfZuxBZs2mECo9Dpv",
  "key5": "1cv2qfrFC2EXPLCL5VK4LgQ3ABmFsbJACnuTF5y7bwrRSjsBktgLrWpx5AKGTAHdM1e9VdFBb9zqEHDjoeQvVFH",
  "key6": "3e1LXSYoJ9a45Y8r5FkVzPRrxazJ8L9r21CNnnrcCzPwffU5YgNnV2FiCkiJJrEx6zHB2H7v2HhVb5UPFUj9gxUg",
  "key7": "5iFjqdpe5ZU11DfyRNXM6dhE37PpLJ5czdWXom28Nf4Euz4Ym2U4JEDk6hvxYEmag6GzBrDgpNs1JfedxZ99Z1yZ",
  "key8": "3QcyDXPM6im4BPkJ7N6xwD9ptNbqhwFCJqaK8V5CvxJ1PZ7r6WBarErrbyxYpG1uyGk8ubFypaFb9wajmXFegLLE",
  "key9": "4ZaqEk8Sq2Lmdf4qUKWTZVyzSH5KtEELN1XwoWPtqXooaHgv3VmjeM1jWDvT24cWLr9yJKRidp8XBP3CuMA6e55g",
  "key10": "Dg2r7s5Huern3pC2YD7wZGn8hxXDYXb9n3eDZGNMiC9p1cHQzYjWS2si4tDsfXEvYHUkv889HQneQ6Kd2wzY2HH",
  "key11": "2GiTJqee3wDurjqhfpyxW4cSGMZbJ2rz5k8Wkmy9ydSHc9BbeXoGpu7T6FFeY9tSwFoKFcnCdnDDYG4MnzfCEUXj",
  "key12": "2Yca87vYvT8mxAxqfF4Bj7Qtj91oJk9jakKSpxmMwKCLEWZom6qjYYpyhiVK4n2HL3oZaPQSrv535UiQVZUsqCXs",
  "key13": "3XAJGZqy2hXDzko9GwKr6o7gMiu4GG1mTgt3h5zyFhJhM61FZ3G7WcLK4CsEttcx42mu7tkBsV4UbaEqm7JmpmqM",
  "key14": "58uu44hM65ZuBTZt3BPpHJGiSbN6PaLnBKDXUgr57TuxigkUbBCBDPC5viGrNVk5iitC3LSLyq9pwQtQqKCTuJSG",
  "key15": "4Q66X98Pqb3KYJ8HgY9AhPThNJu25UV4v6rMzMVj2WqNxW3eFeMfMFdtHexfYG8NRnsKXpA5nLME1FUK7qxkkrvL",
  "key16": "VSqHFS3UojH2SYSi8BjXbEvbUERzPDoBm2KVmWWfbK2s8GhfPRA1ii5bBDigjtkL7TA2gY9nWnxZLYyn38dCxVk",
  "key17": "31knCbno4TR5r998z2ZtP729fVRPB5QfdGFZuqmJHeZsBeBhNke4HMcEu88wGC23ot96pxMJinKE3eQYjLepeY9H",
  "key18": "3bNYQr2uBsZVJ5gLscHhb4WwZBiFqkbdckKpCnTFZrc9Q1RFtTG1BYmATX9Zv3Q2qQudSzHW5dy3BoFKmY6aqtFt",
  "key19": "4dLknpLEE8N1rN2a1NypmGSjALVzzLtCiFrDRQUXN6UhQa4ZwVddEArmCVB7y5hadpJuxSVHoEmBiwXVqnJKAEoq",
  "key20": "54JTeqrQk8okf3b2Egg4rddwCqqCj2fBsSY18fFcvWSmrdFQfpj2SYPjxR4mQx2oGpRj47tzuZkUci6dmhtqACF6",
  "key21": "4jZGzH41LJZ65UQVBb96jaDULAacPtXUngAuxmCVe3JV5L1Lt8LtRLFe3KwBk5sR995nKPiHaRMnWPyd3tGp6VQt",
  "key22": "38f4p7mWk8X6qQTGmXdYsht67iqxsQT47QuAavrJFAjHch6jqkbh5vY9HGn9a7zh532puUYvz2WWyUaAHQToHBv",
  "key23": "25umW8nZNoBCc955HXLc1Yoeuf7Dorw1wtF6CAkmFAkmbSsycQAyttnuSjFniqm2hG9hWpy6Ft3zmBeSxTyK4iiB",
  "key24": "5hpRypnJxUurefExkAw5VACt6KKtGp9gwb3ESgXPTnhGn9tF5LVphhhQX4oqpAfxR6q5UbSrGJznwB3vLAvYhmPz"
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
