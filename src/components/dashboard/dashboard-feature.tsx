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
    "4nwjAF1hCGgrYKR5qgPjsSyfoDiEcYxSA9X91XyYXeX2oDZjK71AJHm8TPtL3sYLTCoonbiiNYifcpwYa3gESeug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KVLuNVHycsRFuB8EckTxQ5FZPTzZSFuZXqrLT6S9zYDHa8Ux18Mh1kUZiywEYHhaCuyRZhzMLiEDF9BiCdv32K2",
  "key1": "3c4Mp7iQ4Lq3xeyobvv2isAvrnyeQCzSEcc2xGJhVMyWaXV7kvxgwYahmvQk9HMXy485KjySY5PmsbneLX3idwLp",
  "key2": "2GUeRzi9dc9k6hSiiKTTSXrzYvbrjS6obdNNeQsv8gvtLxtx8J9t96kj9jce6cyznwwTG8fEGU8ZCAyeJZbx7smw",
  "key3": "5d5a225365yMMBMmTPdUsk3aiAwFg1yqRJHksp3V7DWrs36WArYVAcYwpweceFZiNhBoveD8uMSJyJA6z3i37CZW",
  "key4": "5pxk8pJUMz3YLSBoJw9xi25njqsFSqyE1h1aTG2Qx2gLXBuYNhu9LyWF1mio81U98SHtfA6faKt954eFn5RDtkuB",
  "key5": "3K4Q8xDqCohFnvuDydHEZELB66sBfUHr9boz2oeVacbhLMguqdrivGnaAZReMoWoGjkYKEGct2r8swcoyzpxFWxT",
  "key6": "3Rd82NnDpgnjGA9CgxPVjGq6NZ27jcWFxmMnv6k6Y1vFun25Wo5XBTQbz5Y2bFDirx6s1yo7Agi9xemGTFw6o2B8",
  "key7": "3TdaWNhbbUj7LcLPBFRnepjpk7EGtw1nnvVuBvEMTFxbSGXcKeJ34oA4ojqUvjPzadmuCWfdqCCxsofMEAyFoy8t",
  "key8": "3uLMn7R9u89xFJmyrKg48j3VqV9omKkCzTiExn2sKW6KRfmecTPgjteVXFW1ryvw5HufBFpTDTLE3XzKwurkBAGi",
  "key9": "ZLnsHPTjnzn5ifMk5CXzeNAWaRd8gCr9YU6mJvTrJtzDAj6L2drqGBaZAz3Xcape8vdHxViQoCyy7mh21ZSTgpX",
  "key10": "ZteBBEff8PfkR8pWPa9tnStrjkENXDtrEHXgVYvZN8MnenMe63snUpuDD5NhJHctxRSWLo1PW9HuWis7XnkpGGW",
  "key11": "23hnKojjmBwNDJYJ4PhApqSp4d4HCWRYXevS79XEj7FY5WvpDs9eDDfm5LscdeyhpBofFAe9wqkbGYpLTCfZ5V9D",
  "key12": "5q77DdDvL7exZZbVMjuigYWFm1XWx5uDMWKLtucH5SBS8Dpe8wM79ssU1L5xQsh3w4gvr18uhdLdwWf6NATqutSx",
  "key13": "5jrLtTddjecQCkhG5YK7MQQkoprLe9r7qpJ27FXBfiBxT7eK8S8eSUP7Rru3Z3aT1WKMxPUumQy8choXSarqJyxC",
  "key14": "2nUkp9K9snBFeas6VidF6YU19VGun9TtpHb7XezUG1zRs9okuwt2bDzJXyeqiNGbvmgUPmDUq5h6rXsEV3hdhQ3h",
  "key15": "5vSWr5pPgHMfqG3euMZK24s9Uki5TLCrzmWLptkjpA6XxjfQyzDFpSEdVFozALy3GoN2h8JoWmshiR6uRtuhj4WZ",
  "key16": "5qUvepJt4DiwDPB9qK8tSjkqUU3Ay2ahDiej1GMtityZHcc9k1RC4Bty4a3Hu8gZkponMRdujUndJpCZRaooUGsu",
  "key17": "p5ZXUutkMa6pCs4s98UJrQ2Y8pdcGYVhJcG7wSpneqQxGJcq5Sxy1YLQMvF7RQUYnqG3CBX9HbSe3e8egqVT9yR",
  "key18": "2g7jGMqx5HyDMn6EykSp61uvbnk1kkHUuszjFMGc3aGGMb6g29eUVf3RevQso6NEEQXNmJ6zMnDRupbG5hb7gP12",
  "key19": "3i21b5upfPgNUCGgiZhaDq7JY2NRPM2iDxYcmfUehpzmBheh8v5mEK5NeBTM8NCw7Pvyts12qPy21XB6h6USGmGd",
  "key20": "2o66gVLkEP9UMk4e8bJAUJg64Kbj3wqrqyJTxVpJ1CSxUittPZv82vMLTvZ85xvdHo2Ni8Re29Na5kqgtpxixSPV",
  "key21": "4GyZnp8vJXdgzCgUMBSrWa4d3x13RPZwiYBpzK9S7RmcyTdJUonzbYLinPJobjAJ7tme8KYJ9Jozf34zapMWm8HC",
  "key22": "5GoEGMAbAaJwBAvBZUcQn19it752hh3uQEUXv9qDSgxm6hWTz9JWUFsSP4aoNNRC8G9T9wF23UKYQ16iG8pF74Vp",
  "key23": "5w2ZuWEhzUMEMd9AqGWqDSRnNghxpVWcLzoF89raZqFFMzc8TGe9niYGhDGmUZWqww5VoX3iB8gtUJBZydcKDUYP",
  "key24": "5quoQq3WCykwmNoLYZAZ7iYWBowyeLqtoWCzsHbCqs7NHVMPtP7MnJfcCYGgKsVdThuKukQVqthYigyDzwKuNfLf",
  "key25": "2yutMd9idrwjrALGzes3FEtJgXaHRayXqhvEV5rB3BhZUuWQcNaPfKQ47xpXAicG229Haxuk8RHMZnNJ2VQ72gXJ",
  "key26": "uvKhriA51iwSrgDt45prK9byeJEmEedMzFZ9RAbVtEFi4WsHXzmC8gVtMRnwuz6AwKSdyJyRFtCUiRPKptEMqEr",
  "key27": "4cU3asCSchBXPP3Cox6ciSzS1q9X3b8v8njMBWjdsBLd2T8s4zUZQjsQBwvNBE41Hkx1K2FAH54yFdV2hvaF2zkL",
  "key28": "39pMPujVcXirYkGj4L8NzVia39w1rXnuhDyZEhXYmoJFwDMD6CBmLsfF7aHpnYij6Ea7R7rGNsvpEgrXhHEqXP83",
  "key29": "49eBXJ7rwXDR655s4HFPbjDJtbTuZvywxxg5KoKipyaphJ8mDoSXp77toax8EbKjkn9kUPTy2JFjkbHUt9BiAvba"
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
