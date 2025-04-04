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
    "4YVo25unVsFpemQygaGYtoXV9cRqHRZzNfwiMGVdawug7PYfXFyZ2KPGbx9VFXgR1Vw5F4fqAs71UV5cSqkcYBnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eCY7sm6RtN2tL6jXGREwuzy93gvuiQxDZLEgcGB6kY5vQ1q3qJ1W7TPqbTW67M4tgeNUmW7uCrKRSvhBodXGyYS",
  "key1": "4XAEkvD9ThaDxj51mJz92vKGXHiCmxd5pcSVyxoXk3EMHmM1R35TwUygM1SK8Rcqu67LVDN5P8fm1cJFe9hJBMJU",
  "key2": "nCDHZQn3m2wGL88CkWPw9Jhv2bz5DD9wmZ72e78jc36uPXfVML4BsxRyjZrSMGoFGCeSWXKJEyby96fxKn3h5iW",
  "key3": "ySs171WXRrvBc3SYrZdg2NfZVentSZfpBukcE7kMsF8iUo1zyiBFWNuJ3LaiBRw6gUBNjHrdKZcggQg5Cm78y3d",
  "key4": "2ww2rF6C3WwHiPCuuCEm4MEU9GYEtK9WKEutju5c2cfw14nDEpnhVmfBsFnL55JqRGhxaFGPdee328TV4igMHprG",
  "key5": "2AYwQ8XLJFMugd5EbG7m9LSnDZEvp9qKNaa3gu9RVQn2W7jGphmETdJydpEm6jRy3AygGXEqV72XeHFgaMRkzgQx",
  "key6": "3xGBmSPnGVDn4E5t3ZESn2M2BKZCp1DwKYAjAYnQW7m848wonD6S151EbX4d8qWPNDgttffijAqrBQGghqpHpYeP",
  "key7": "2gd3HQqyxHAmCUMemesPRd95rFBkzvge2cjxo8quxeQd1jvgb2jqSynheqVWXDtMBPdK2F5K5TbW9nKg5isveK9A",
  "key8": "4Ma2Cevng5czuaroXyPdqJFaPqMdJo8FYdgaFBhYMGhBtHRuxrTf6UWzMyWvXviDWW5ouZfZ77jneiUHQW3yBSNT",
  "key9": "59emPhS8EXWZjBwh7DSGZ7UQBWYPaC96yCAzdb1xcTSTNwu6nithjFeUoguq8TcRqBzeUKYVXhtAWC9dwYsgbF2u",
  "key10": "2ozwF5mytvysSEXKK6B3desShggLWS24hjb1WdktacKgrwvuNfKNEe4YsfmpULZv9Kj7YnrxCfvdMUELBwaLqxxZ",
  "key11": "3qohnvcgcYK9AvxyssSFvEbiFY2Z3fhPNNp3FFp1YkrnbNydtwDpc5pc2ZJdAPNQ77tRsLyR6hSWtgKnBpptuFD2",
  "key12": "39T3rF1FLfZicr1zMqNaBbix9BLiVeztANTWtYqZoAyQXiuQdQ2VKPm4W62WsZ76uG3sxKQP328qLQ4T3XJdPjnN",
  "key13": "3Q8fFiC2ESYJZWj6bvdNizSjYExizmHYVXhhFxuB5DeFeV71CashfkRRhJ7v5mDzqeGgdXZrn5cigmfhXpThceDY",
  "key14": "3AHe28W6C1oj4Tur667bmoZUVksov7o9PmWh1nQMbn5ZFR68V7QTjiTWQym6s2GMi8D7vooA7ManFqdmakXpe9Pj",
  "key15": "4ZhZcRLLWGpx58VRdfE7x378d9PHXHJrGfrCkRdG9z4g9BwPwkecGeVtDSKMS6RcF8ve3Jon4Gb7x8RhmvDdTzWE",
  "key16": "5jcNkLDrsdk1fnxXSLg8RUchtPwuu8T1U7DKGofFaG95JzxqtxDiuEZWgNJha18d3vYtBxABgvQcWkJv7VNNfEMZ",
  "key17": "5gfsQdNLzjLxUSdNqyqSLT5XWxsQp6WaGct3rUgVo29zG3VbuFV41ZQMVZTSVEno5PPbiPsKVq3gd4QpJt1R5cM4",
  "key18": "2giPcT1dq6KA8VNoVrh5URdBQYKWjw39fCALryBAXK4CPfjpfjhejtRxZ9gdmGnoSkM9UGY6SQQrqVk3fR7nVuNz",
  "key19": "7VQjVqrh2CPDMHaVWfSGm4wndp1tyEh776FnMT6DoYL1t239MseRC53YDmCt6c3V2kz3jG3P81Ayjr4krxNnnHr",
  "key20": "4iNM4A9Vc6ABdwVcuG2bd4rRKWy2KQEz6PxAuEJnrwwKxb3rbYGbrPHgfuEjJWjfKzfoLtRCcCuovnvRLdh5XrML",
  "key21": "4aZwYHMsVwikemNG1ujUM7E9uoLFwERpLYAofgvMNkdNUCFrcZBZQgc6p3EWpUaMTh4vhLcJ9JCcwdiDDN2GPah3",
  "key22": "2RtbjVzDQ99XKJweZEftmCJ4HQYjEjq28eDCa2rEPCKo1iuwwzuBjsQz6xGwhDLMLaf8yk5Vd7PJAQaGoe8Yay3a",
  "key23": "285PtU9EXpT2TLXptMbaLiXZSwWVoFh6gCYgotfw13TUKyxmdHVqZDX3eNY6wfLiw7tD8rkUBkUhkKhye7MWbSgB",
  "key24": "ozCHsEj2Zq2mqqhGST6s1Uo69krSAwTqPkuSXC3BMyVLr1RWbS3R6mrRdqfDcx3HicbSmAiEDsnXnfvEjFJiRkK",
  "key25": "2rjtbgEdjiW6sPVMu3Kdfqzz23yRSodo7R1Ym9ffrvsHwWHb2dJxnEPWoJHNxri2Kv6GCzTVihnhNmu95MJet3AC",
  "key26": "VjKraryRc5Hf4irWWrr7QHY4k92x3r4bfhme4vm8sVa8BRqiQsNGwxxVvq7NMGPT4ASfVRketqaC8ztcL2mFowG",
  "key27": "2Qxou9syXjXcTSZjaCXi3NfLTe15UpfDzug4Z5dka8QdK7cG9WtbPa8tpx4MUfUThd8YLhQLHVfAWG65mgTYUeZz",
  "key28": "4aPZDscma48ouErPLJawpL5jmo4gMKZVFTCqgikrrUurUch41Mcw7FK61KkDMW6ci4SmcsM5R17K8wtEgajr5gFT",
  "key29": "mCT7Nen5asmSdHF2bDUZcW4EYpkLTNBP6vAuDXAy439SyTZNQyrzu2gb7dJT5e15q2nsZd2XwJ7YicBzfR663fa"
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
