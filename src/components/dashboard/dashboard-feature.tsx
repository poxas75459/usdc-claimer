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
    "656yoJYZqvAR8xEeYQXi9J5aHQ5ctaxfnmrkMpuB7bFVYTRm3SJFr5msbhX4wroYHs5B1EYxLZqnyhWoKtbSonVT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MsoZVFsbXKih8WkYuSLJLVxSigGwhwXPjMDg4iSPVLzC4HwzR8AboAFvV5FursyuQRGEVLP8hjBE1HXzktS1om3",
  "key1": "W74sKLQRjaFBUyLnzqrjCE5GZmR2DK6qPSiyaZ7AyxBdXUMadM4atguKAGvRScYKRM9Hp5T5cD7iJ51HyNw6Faf",
  "key2": "H319RkGvrn1uDGfktFk1o3sgXNAA2bqgYjeZ3mA6fTBJZjG5i9cadWPKYqn1bwygR6aed67RLM8b2ByBdvrzjvL",
  "key3": "4te1MjEZgbYXEv4fDncvo6gunTduJ8y54LhDHgEjZJui2iRzHJARYCEWaU3iR9ubt82kz8m73Ed5DoQiGSiqDSEp",
  "key4": "5F2f7867N5rUPq8qJycMk6CkECcZKQvoXcyACC7cgHtHZJDqpZo2SkKj41CbkAp7TYP9bKUQNSBA3A6NU9WA6rHn",
  "key5": "3TB8g2s6pCAjabvKku8s4rJMSz1NHVZ1V7kHyZFBJjXzm6bGVw7GjAU5u58k1NexgPUWaMi3iS71Z1hwDYcZsQWN",
  "key6": "3maMJa1wqJj3Hu9aL333Qtvoy6rzcFPNodFJWmBceBWzhFGZnUVfyx87cVenQCtByiWQoMgvHx2DBt296V7hEneg",
  "key7": "4HY8DaK8onKdrpaWG5R3WH845gs6QWXejmDpoV4wFvRZi4ThHep6eqKwtY862SJiPj9jiPhmgXRu4pMQx7VdgsoX",
  "key8": "8ZmrBwLKS3a15QsoNYfAK3D4Mr3rDd7nS6QZEo6vxfWVf9CtCo8sFZatuxUcMbaY63La3QR5iT9svpiKkqWsy8J",
  "key9": "5mcP8bpsMfrsTcrZUmNLF6wb9RbTDntFnNFEgfKpyeSwb7igwps3zzFQhjeb9rKRvAeUhzfWf1xoVLfujVQEFpy1",
  "key10": "JEycJtpYbcBXhh9TMDRJ7SjCiWGnnrksMDa7ci9vLMEdWfn5TbModrBqCFYj7ccURHgpjPGKAjcVsy7StFzHH4A",
  "key11": "CRWLTTLuARofUjTagx2jxZyvHsDwXMgLniyFsm1134vMw7SQyDjSkkerodD7M4VBgYKs2D9Z33VUzAmdRmMFA5q",
  "key12": "5qHKppfWg88xdANxJtUHzTPSCg9DASiD72LEJu9U5NZdXXnZkaxKpkdc8fMi5cG3vcFzb1g8Jqy6rURu1Xg53doL",
  "key13": "2wCs5WgFrgKBuNm4SbSRGX52MgyHseubGbgSVVWjFV3XV7rrBcPowV7BF5b5kyfugLv7uL7uDKh9EjDVqAkgKqPx",
  "key14": "CDgxbkYUXvyushMVhTNa2Fabx1QfLcGrnkqPGVzQms6XxMPURDNytJ2hTHUxGiT6XnDTMxXWPqV7DpCu86pHDcn",
  "key15": "2dzWaKBYuijPoHnw6wchqmvfeHa8J3aAwbyx7MXZ1Qm9qQ8DKMMLRwGdVDvzxE4xBMKJwqAsezqwCQW6WHjdb7t9",
  "key16": "3SaZEoNqf3kSQqzhH5BuMkaTMUDCrNX2zEggsiv1Y5kHHUvMzJXL3b1vLWuFS3BAHVuh4vQnig2EZoxe5Gr1g3t7",
  "key17": "2sLrsfwX7HTb4t9vB8HeK7Dxw5sopKJF5vBFpxp6FufW1FnVSpc9tNUNhTBcBzxKb5Y2Nm48ySYBBFa1R1iaEk6U",
  "key18": "2G7r3FEgoPDxbmrDxXPCBzXioE6pmwrL1Yckt76d8uJzMPG6kaWmaGx3KQRv3LZZjiuZU8gGWBfUYPteWunnzaEh",
  "key19": "4QuPYUkeKaqxUEgxNMNLqsSKWQhzRRpVvmsWknH1BKPA94TnCHoyVcZFDky5MSuY5SLkw5gWddxbPTQ49ARWpkuq",
  "key20": "2r1TVH84BLabqwLiEzx11kMXdePJfrLmaJP2kX4WD8bAnbmsGBCi4Sdrga6xHZqPUPuvYxaqfUTwAmNJCnQxoVcM",
  "key21": "2VEXoXHj71k23iJabYfcBgnsxGpS6gEo84Ch2DjAVNudsTxorfefQUE9ArFTiuCr5Q1J3SjFYdUeK9xSNuherhHC",
  "key22": "2wJ93EnGUtF354r6sVasmwNHoKv5dV785udZxegfQsePGNjqcn8LHH3X4Y6XL4GHy3giPcSf5NdCEmaaixSFJtHN",
  "key23": "4sA8H5vkf6Ze6cZAY6TDrrMuBj7EEVPDZzaRtXY8dXgmRFZbyoe33WLtMWxZSgd7JPDWfBbnJLv8XtJ9qvhMxTMn",
  "key24": "2kfNMkiM9gQBnrLpnSCSvZs4JVzyah9tbKsjwQURMzu2DEUCEdatgGijGo78crRDa5qDnCUQH1TewrUHcu3woDpg",
  "key25": "2pyPbEH4EYXH2DeGQfnZU3LLCn5AFsHhhjd9sGHS9ReCWMBKtwuABgHyDSbPesco4GQEbVV4RGEbLU7JbZMkZzJL",
  "key26": "2kdAAoREXJ8YDfxtWZ9uTgiVQM7Rgj8Gi1LwYgEwuLsuVDK1u3NsKhm3qgw2ztQuhW9XjbiBd3GaQB1M8ucJgZV1",
  "key27": "4beZ43Dg6u3Xm9ibkBMhQrpyR8pLhcs5XPeZk2AT7hSwHsNx1ZAMYrE2ohTQzGb81RhUDHyFzq4vqovvNpRLad6x",
  "key28": "4p8mB5YKytJeogj1eLhoCazN386srtPww3pVPpRUc4ggFuDt9ytrqujdpZgLXZNtULFj8XPmvC7LDWZ64EwgqxYe",
  "key29": "2btY9WUvY55W1en83EptoZd2ceBdiA9dnoWJhmVxXGiJb9Eb9T5jg1RVdcq6jY3hLV99Ly5Bg9nN2rSu9GMEgR6D",
  "key30": "55uqECwGfkvKFQTXxpyLr3izTrk3zYHphRLK1MS7nHnPz34VMonV34CpJmbgr7fhWzRR89MGa3CfZnZ9S6pHkDP9",
  "key31": "4SuBxgCRrt116gatEryW3PgaYHtwzHUBJ6R5noiP873PKagcfsu1eHnkDVyPP6AcUYUYn53zfeLEL9X2wZq2pAoh",
  "key32": "3Y25iuNqo64DrHx2vqMhuuTZRsZ4cKW6Tm9xkA3sYRWoQU8CzyVs2GaqRHfykFKPogKJKY4jb58b4RCPyxkrFMTJ"
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
