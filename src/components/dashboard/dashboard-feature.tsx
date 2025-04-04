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
    "3ofm8Tf6Tu9dtbqRvPkmdcKJvKn58mxDgFJDEAkd5zDt2FQYXoqtKH3UzHVAXchEDuHFNzrTtFD8jBqebgupU5uP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53mMKz81tCdunmJdmBhLS54KUnfyRVWQM7jrX38ATM56AjCC1Kkcn5iDXdV2S7D92mVcCnDjqctLVRGNXPgZwayi",
  "key1": "2fhLpatNUMdU6RjiJEnmRNGHuHh6eNo1CvEmnQvc53whAt4LfRvuD1fPqCe43fw6yUUPrag2YAuD5XSjeDvxUAPd",
  "key2": "3zpqdECkHHxvTh2V9iPgfedEhfmP3Zdmjoz4cCsQXnSRtSwWtCchukWFLVz1fQTbfUZw4Sq46vpwMLcnqwye9xgB",
  "key3": "3TpA7i8JX8BJqJ5bE7vpPR1Q98zRRA19Lp45XukELe5ts71MToY8pWWSedwf3otacwDU2B2owgEQ7Dw6Y5KreFQ9",
  "key4": "ycuyKtymXj2gzyuv3UTnnknQHTqX1WhWM4k4TFCcGZS9xGEnnJjFkmQiSeVhj4ebxfrh9Gut23terzeNPZvQi6Q",
  "key5": "5Sv9a69Q4Fv8D1eFGewGJgC94Athd4R1oU3mh31wFV6LWx2ENBF8h17fU4zCM6hGJqSYoMLyJtTtmo5rTxr4FXZ5",
  "key6": "w2yxtRZZ7t6SWmboxTmsxjDWKXqYDRZX8eMMUCiqcD3GydQhKjzsGuFhxKhFcg9HYhkdZKUtS8gecm4x2rEc8QJ",
  "key7": "KgaVwpyHtp3fprfp7JnwBoVH18H878pVThK2BGwPBHQY2TGTgAjBRZ676A9b98NYew8jnWrJrDbamiAKcsV5v4E",
  "key8": "xjeXEjtkvN7uX8nnqyacFWdVcqk1YEBLkKgvEkf5xYSmY3J6QhY3w6ZemPDJJ7f9f8KdszNm3zqVZNh22Jkthaq",
  "key9": "4XGSQXDUo4VHJZbF3HpJvQ4Ja9S8QTTGuLkqLBtVA4a6yaxmbCCEZNTQrFpz1uKRVG3vrDL3w8JnP6f4AvNLh7dJ",
  "key10": "3f1LiMWztQ7M43pACyHYTcTpH4oBAA5vSH8dLZ4Gd6P6pZTSDKX2CJrutzHnXSzGSybcKioCyfnuXFE7Dsp3dDZL",
  "key11": "4jH8mvNjajH8eeNH4FNCre8VGGTnEwP6NMyVUqbb9ehhRs2JSEkyG6zSj4NrQxBbczVLxHts9ERVSGYrecnvgxBG",
  "key12": "4af5bggtjYtAryBUUPU4iqdVDDVB35xNkTimJujVypQ6Mzmu6mtJXMH36a6bskCW9KbUL27TkfGrGCDSTXCxcUtL",
  "key13": "22sGTDi6fg5kvyZB4nL6EXPeaoAZfjWStVFHdqU1V1KgXSMr8MR1FS8j5wmceMwgcjzjQP9m3q2Yv3Atvr48MLpS",
  "key14": "29k1VirqKNCB4L9oPRbrWGLDYsDupJH4dxSV4dGZeAuFG32QLhcwttptAJ13ERgw88SDWPKRegAZRiz9f3SugWps",
  "key15": "2Qgt2t9zcidNP99g3rjKY5fbouxMBbRpSh6Nc3fGYkG7Do9xjKwiLjcMvyMyXfvZUopPaeTwNmYJn5JbRbeEPas7",
  "key16": "8dt9SSSeRcyqeoGpQCrf5zECDhnuj2b44Pjmve8WwLRDTLdtKeNaKmrn94Qwg1MixZeBAVns9fMW8cu8GomKP9L",
  "key17": "5hMsbt82kiAt1wTHnA65LnLnCvSwvmhpY7nW1coGMuQzim9CLamo3mxQmT5WoAvZDVKA4aQ2eiShDrwZ6RYPotkQ",
  "key18": "2Z5MYnZtcdYaVKaw2aoQegsgSmJU2KwoPKerWjjhSNLQ2YJba7vwAHr2gK67u1efddLUyWDoxPLXDXVJRmkSFADp",
  "key19": "3Qag8WarcNL8Gq8XfVBN7xXQrRtTbfGqjfxTLdDji6JDAJbS7YspTXvqXE7A3Po4fHwnUKsPFVtmqg7DkkSfAoW7",
  "key20": "Z31EZFCkNik5Gu4KE6a1sddJWdnZMXbFJiT4YJE6zZZFffUADnFQuZhKXRrnKnm1C3LnUqofNKHXCE9o7eHj2Pn",
  "key21": "2snyN1XhCMmQQy9rGFkvL5mznF8HptA4rWp6HHGGBd2oj5K3RsCbVjQFhoPJq2e8HMWLymru8Bf8QoF1ZrLxnzRX",
  "key22": "4KqrFLthb4P63PnBXPyjZJYGcEgPqGoMecPYPCY3zQx4B3td5kMWjPsf9g218cgZPkWf2Pwi7hREPBZJx9DafWTi",
  "key23": "51qpVnbVMdHg3w4y8w5aDNbKwLpvF7zLUnzf3wtxrBxJrjWS9Gw8LV1ogkwVQrND1gWvNR7sf4vmknyyVE9bSWZX",
  "key24": "3TkwFPDb5YAXMd4JS3f9K6p2SGYD299E3W83yz113UgGMFTQPsMR5TsRXcyPbVJVySdGLiZXrRTLZw4ptcaqF7P5",
  "key25": "2efzBezrn9h4aWgmLkJSB7vz425RCJW8PEEBfPJ7mhh4F73KEaqC8RX82oYksVtL5PkHnLqgdWsqZt7brwpMKe1e",
  "key26": "4STFR8mLLCmYyEgcyzjWaAAfA9VKkUVFiAAzWFBhASpHvTgbnPk3LEyuhqYEuQhbSUuA9jzXis7yD1sPEhtyRTkD",
  "key27": "4SMeqX2YNcgUTqgYQH41r5mVbxFNtLAnFhd47nA9z5WsTuDi9nAHGa8PRVndAKdpm1Kc4jcjd7AFt51idwuiaqGd",
  "key28": "oXkiZbZRuiHjdVjm6aK72px6CMGrXVMT1UoMQgL3y5bqTCidCDyopeuGUG3Pk3DDnedGJzTW2UGVwS2FaEbL5z1"
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
