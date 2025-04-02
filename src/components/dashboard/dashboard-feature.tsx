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
    "41ZS2Vj4zyf1GKt79kvjLGgtA6yjBRijktj9uHJfWuXA2srVFvvN8BhJtQ3Ke2FEDBHKutrYcBLgwo3cyWfk7da4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M9ygQECoMhiWGBsf4U5w4Nv88csN8z48r35T17Y235kWMXXNemXkG9NrUE5xmzhHvTaVsYjYEH6VxnuT4XHknZs",
  "key1": "6fmLKRo5VPqD62u3oePJZJWET22WArAhj4Rs8Tc7UtCAEC4dSrJtazDL9rBdChhrL5EetqjHD1kEKrpxTfktv7B",
  "key2": "46b5QS3VNQ57hJi7zXZgEjQryAAyEWNWYD75XQr4EJopfFvfc53DRs794YaxeQ6BLpW4c85d5taWaBSH5Myie5kt",
  "key3": "3CzFkXppFymQtQSV482BjzXFt1oyZE9CrVdBZHrKYKgnAeKQZMYhvbNg9tANbabVARntsy1RwXykHWcyFQ9oRe4G",
  "key4": "KYkrf3aY6WeSoohs78r6QPZJKwfkWYSum4QpYN65qd6huGUAksoy389GQpMvA4b7tHg5qKyYRTdqvoozN95U6hS",
  "key5": "2p147h5ti5tm8WJtWqhXkXXr84W3CA1rZZC5ersLd3YC5ngoFj4rXGFdRmsQNDrYqFvEodrJ1sx7KFLSQrfmMMLz",
  "key6": "2qRexxYW362J7iM1MFYMrzBpgwFmYag7wbnMCZkU1MM3ejJYJ3GBR2eKUcbvDZwqiU1MSYZbfPqtisVtLEfeuCbt",
  "key7": "5yKLJmKVSSRSws16xaiXYyK3o4LinLudTKoqpEpNkhEqUAUURNDubbziiVhkq2CE8WEAHUgUxRm312sfoUirpnDd",
  "key8": "TYxKTgaVVserhv9AjEKW3E2wkdo5anZdD76KEkmbtfzc2Vgfp1eCuw7gNJFv9hUAyjy3mHZuGB5cLFS7rqGr8pa",
  "key9": "24jm9ahNki14KJZhzMV3h37jpR2AhLLEXPMp8dVtGgw2hvrXkL4nBVFzShPmpkadGzEg1cAaBHYRMXTENZ3y6TGk",
  "key10": "5nsfJnreuP27eiuu6o8euFyRGcmcJtb2Ag8FtZLUxYs6puywxTb9hVGZDdi7FaCgXbAwYPYPAs126upfrcDPT7FM",
  "key11": "MKpTZuD8AYsACmGpGz1Nwc9dNzq5YxojJZeKjwS4PaZoaezbefjnhYkThbqiYWbtXnGVAznbdhSsVTRLzYgFGT4",
  "key12": "2NLKDccHDWE5CPMN4DNFdknjXceY4pMcSMXFc9Z9bcc52K1dAmkqyoWjtBEmeBYumEJAETP468EgtQNpwunrVHxh",
  "key13": "2ircVCLGotEjcttHyB2RDtUjhaW4ZiX3ioH9c9K5vEb6ja3VksvtPwkrLMDuy1mS3o7SeTARG713o6JG8YqgLq1G",
  "key14": "25tiD4hCtZHaGr7UeT3k6EWkEvLPvkThJx1ruzZ2XLDgUc7R8Y1fv3pJWULnYk8wdDFrqr1Afy9GdqQ1okXPen3c",
  "key15": "3v1octMxfeXyQcfZhUSckGGkFrhLrnNjVhd6EBwkRboneFq5KXgn4gH47AxnE4XPo2THmbvJKxYJ4Jr3qXX4ktYt",
  "key16": "p3ZDndMh379kBVP11YNbZ93pmfAmKuGHLCXLzNq1TCDGSkV3QxHRPDpV3VAtb8E8wksj1ZCzesVBmtiDkKXCqea",
  "key17": "3wN34NJUuzWCRXRwx3vKBPNzRoMQqUWFksWb36xQj7yApjPsLXAA6EdbFmTkma7gMevMKjbbUNKbx4nS9YjBBQUe",
  "key18": "3kTkwTGZFJi1gaWVkEUNFFad6gSi59UoN4mYTMZQ1eoJrGJxK53sS9sn6ppR1ZSk9NoAN6c67xZNZE6NGKGsdjsi",
  "key19": "21ZS3AAtjNi7GfhnQcU17TBne1yBH6obGmraGVSKby49nqTz3pxTbxsqpBjHKJiwdi2FaSRKaQ2QQVdw5JT6yKmo",
  "key20": "2xkzX7RzRKoJ6H7Jrr2FjGYYd7X3wLGNt7LNBt53AMSbXM4pvLejUUJZhMcW4cvyNxRwen16sCqchYXyQQMBe1Ls",
  "key21": "2yB6VWBJEXHfeqzgJvcvQdoKji3nvy3fnqZQsVRzsCqRt7YuyQUaeH8XdeXatJTmqgY5NpQhc69ym2bq874xnazs",
  "key22": "zZg5oNuXruesLkBXkoru1WyrkqfkVRL1JqG2pBx5q56JG6sPmSAMQREiGvpPF99eA7ohJZ7BCwfc66kPuU97zno",
  "key23": "3RHMeZeRRUhNkbJUV85bFYkXrfWL7SL4stRfFbvYrGgR3jQjhbT26XbiFBHebB7NKXxnfck6qMFwhorg8J5YhEY1",
  "key24": "4jQ3dBx7N79ZsfWZ5Wr51o2M96AmDGqCF9JDSKy9GPSMD1pzJvx7cVdrZadQAA56QNtnR9uxAc9fSAVfxSEKxK6v",
  "key25": "52YchpX7kEvQx5c1mTAmsrCb2Dn734hvXimxRMnKyewHaHuryoXGwuSW4t11vpECq49nBndkSJGamNydMmt2oHZR",
  "key26": "5Y8DJbZLxLCkSpJqoWom7X5MDNcws81QiTEwMdxRfLU9stVUxQjGp7xSivbRmaWDECVCC2Ry51iU32AFA8xmzewu",
  "key27": "3kTb4ZzxUzb75ehN42QtvQFFmtQ3MaJNiVZZ177bp2F4ccKgyAYX9ynC3oYMxHgMaVxziBYer4jCvWaNhF7KbBss",
  "key28": "2fZUAa8tjzPLeULM62VreUqDgQ2tpzpXxubihaLVQvVRHECMgby5KLaNfdZyE2hszN2zhinfk8KLvEjch2Gnca1S",
  "key29": "2fACMuMtR1BRp8NnjBoEPoAgKuvBVqPzJGqL4AxvjFY1nK56Pb9YNmLkDsSpxkUvrNucKFeVddQfn6apcELHP7sA",
  "key30": "3JV5hf7wPuXRTVEb1TNvs8S6gM33oALB33NJ9oc3sY8LGzfJesaojzTnpF6mXS9EdaW5V5e1238be6rmEejc9Aru",
  "key31": "2Av67iNRuP1AgS8X4fKEBnE4jHzusGE1hK4EyoDZDXt8kFQqk9CaKAjSwpSAJjAhz5X8eFdXckPnhh545GFGAEdA",
  "key32": "3BZXuCvR53qqVqkxcNGw3ZuA3eEBC4anWYx723LXCpNub6ZdTtUdf6JT8UeqfwQ4pknnKmnzQQg3dw7TVfTKhyrs",
  "key33": "3n198abPH8nh4QThZUz2aekNiCMsGU1Rqs5qMytid73EVuggTjt2hDwW2h6op2Vi9HHwF5kVU6JYscVUCdjmVmbq",
  "key34": "dTBtRX491iVePsciABsdzPsvA5hxPsmMa9f4v7ezPA5WejoNN53YZvMpnatRM7xXsJkm6tJtyspN4wwFk2bKUfT",
  "key35": "3HHwWEQ7Vk1QVWNzwD8MoVoZvLeLYTTc7zc62oRGXoDxeoZGhQ3rQBftYZyffT8RQSkJTvgs1J5nQe2QGT3c7CvZ"
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
