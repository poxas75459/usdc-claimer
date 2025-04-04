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
    "AKBXBL92QcDHdRMTtePFvKdEHk1HVHfoUpiZYfFQMH3mHnFbJzcAEYzrR4j3dh6oicqVaZm3WhWzkq6JFxbuieB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AuwtGeHcMmp51CfLUrVwcmb13Qu8w5DdV3MCPZweiXZJoGSxooaxLD1xHy89U5HejEqTuMrzEtNXLhWq1fusswv",
  "key1": "2wmmTS6t14Zd6CpSj6LA2rLjunNJxWnN9D7vfg37xFmYax9AYEnqN9yUuJDLPLceq5dxjuru8cs52mffXUGq3hvm",
  "key2": "3H6NmiEQX8Y129xXymt3naRm52EtCKGxoruHG5GjaRHmsfyksbBJjMSWzzYyaoKy4dJVr1sA9ZaGJo3uUPzNhABm",
  "key3": "2sx7VxaLwRd3DyozxawWEX8CYsM1VUeRRv87DMWmE6MSkocTKBftJCtR7z4cvRnk3L2FguaTh8ygnLpMTFVfJCJq",
  "key4": "3o4LErYxr3bGApT2WJPAk9jmHzRoeGjWZfB3Vp4yNEAi6NxKG9GGTje3c7RcoehbjwTRJapyqPpzASCDPq77aJjU",
  "key5": "4azFd7ExZRmSGM3eSZqTPwctcrhcv2T2DeiSTUbzy7ji8RJ6BmqQGozeA2RF3Qwx7VjuqRNLziWNRZdPTuhrhYBM",
  "key6": "4zmugjjVvGBr5KzpRJtw1HvAFZpW7c7HdMAx2RrxxQdwi8TDiZk8cZkEr6vJST8oEymXsu4zU4Fh4ufL126ZHaRu",
  "key7": "3kK2br1HXWRPYHU47om7SyxJfSVWajESZXnDYs23iALHk8nx6qkn1b5WsTLSv8VQFoLxayaf2jFL6YcsCu8SMAs7",
  "key8": "2WsWHcjCj3s44aK3q7iJbGA33QvNDkJ6Ykx656RQsUMrJPkCkHe3QYYB2Sgg1qbpyF16XYbSWLjTnXSLhBRqAQ5G",
  "key9": "2TuQv6RwwFWwQ5AuNABthFytzDCU1LuCpLceKREodgtrde8whP5SZ5aMkbxaVMikCEbQbJvrT3wkcYZGxLKuKKVk",
  "key10": "3LduJ1yG9qaHtq4K45AsJobKwszfpg8tq9RgME3dWVMqpLy43t1TNpcoh3kLSAE3LbQaiDU3BhJeGpTNYWr6NKDj",
  "key11": "2oqk6ENFXmupYYr13H1Vf1fQ3kbaLxv8LWPv4761qDbQ1oMxmuBtJiP9E9CsHq8oyjC4VmVqivCKM7Fh4B6ssr9q",
  "key12": "2AwUBK1vcoNMVXjcpxDBmLnSt6ZQXygCDy9MzZqatYpUE9PJE876C36TbAXi8pT2qcDLzZLPDcpJwQUygXCQJbs4",
  "key13": "3zQm1sjEDPXCSQUYStPd3XGGDgAo3sYuK8NrMF6Xwy4p1Univ9EoKYkMFjB3BELQroAstskqGg38dZkjBDMrsMoi",
  "key14": "5kxhb8uFzREd8ZrpFrYznFWpL8SB5BUCiPWxYUBRh3XxJcQKHGNiL8jgZTEraHd72XKayXq1irZZSQ6fTDXE5may",
  "key15": "4a9NGPjHwcypZd78gKh5qhvTK9EzuY8kQxGfqWS2w8r96hX3wJcZbTSwZWgSKxZt2T1fw6cJEQGBSyEVpsrwStXQ",
  "key16": "5eDRx3DEeBVoQAM9LzZDvvK3YVHJKTAai9RnRp2MeVFQD7K8WGCdim9oZH2J75GSaq4RVpeoWVw4yRZskNJrf9QH",
  "key17": "3g1arcdAcuWjWWFZeW4uTGSkcDk4SXpVD3wMFZu9dEVk47eAJ9ESo3qUuZJiihGk78azNcpUud6xrtKgqLr7bU8W",
  "key18": "3DBd3rUkEmaoaz3dXF3cPokSHWXsb6kFiyL1X4xVY5HZD3iUSubsKkQW47UqRLcPsRmt96ozUjZFXJdNqcrAM9LQ",
  "key19": "2x5Ve1UzKwNo3mUxRepqs4bauMmUBxQqKgTSrYa3StySDzCgtZr5V8yKBSCPKoxkk7FBNGfSj2sdCnXin8CQmPGr",
  "key20": "2sjsHXeE4WCXNoYRyNJWH9gxyBfnwZ3WKLhqgw6WfzCyTczWFPVLdaEHmnGZRuJuQ5RNAfcL2HFKaZkB8Rxbzbqx",
  "key21": "3921HcEVJ6W8f2UZzu4h19tSQsTviSNB4nAYeVUxZ4wdJPv8PQF4aHJTTByqypLc53C3cbkD7ec1PJo1qRNmBEGs",
  "key22": "3TyZbFptH4CzpmVbzzMG3nUWGJj7ajRFTf8hsTzt2RF1im5WK1cA7twbsnV6pcppUBdC5bs486qJcqHJ6zM2pT5g",
  "key23": "Hq49D6T14F8BRQzoDL3oXytNWpeGDfuNumhcCUg8YpuiqQPmTyGYkVsdA9cXAfXBY2UMVmfCRLmXMEu1CQVDYfu",
  "key24": "2U2iFzoUFAgj7Lvtt7kR5C2TACRSiuf47ouJ1nBo6zXL5pvsPCHgkYnjkF1AWXXAcoWSCqyrUUk7158Vpzsi9Mk6",
  "key25": "3R32Tp4CF7s4oXCe5wacBfJaDM8gKXH785BqKwYSiQ7i9C8wirKvG7FGSRSy8jxNTUoZXMXZEHb9MJj28f4BKeST",
  "key26": "5AS9KAeG6JuYnwoqCgoTrNbNbourj4kVZcDJznMq3PgdrrbowM7Egz1kBEJomE9EBosUE9DosQQzKDPnbPZxGj4x",
  "key27": "4E43UWQMyvZUxriwguwkoukQzy9cnJSPTRykRpM1iZDeW19Zv6ywSJ3moZRtZjhUrPTwC7Je7YQQF5aSooQZM85u",
  "key28": "2pZ7aLQ7QFUGECrP7hdVoZw4hG9oN6mcWgfVMiuNhvLRJJx118ZpmYs6Na2VMyR9nUV2z99QbaHuFeuC1bbWG3wt"
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
