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
    "4RPSG7K2QF9Tr7GXwogw8rPxCeFV4BUroVK8XD5uhqaBfzh1kjggUTjFbphQjYFioigpevgobZfghRUDW6Z1DHn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pnpx6w8TEppvAbhksvxaAATkXBc661eZqQg9XgLgSsDtvQ7WcR4webHmCkkczJ8XkotDRYdpmaUDjdEzPho87mD",
  "key1": "46yJzossN9q6GsZCG6E2PN5sBWvMAwfHLjeg4K9wiDRuP8GUTmBYvn47SuPWA84iZTtwffu1H5oLFAWrkt4iPCEq",
  "key2": "3Au9CyCLp4X1g3f6eTbrUAk8UjdR1gDiY4PEB5cjHNjsiwbJTF3PXH1yG6yLg5kxpjLg7VfdWwnRiLFjCTXTpNia",
  "key3": "42vxpj2M7ZbsXKMbcKF4JDZqK7VwDAM7HXD9yMhUXhwaaNWgqm5dikt7n7RLVfG38axLoKwrqEm5UuUpPBsphD8z",
  "key4": "8q2FpHCcrrokbLa17pGtCxnJTbaFvT8CJTbgsyLpzngdjDRAQLFdR5o3svMXjAuMgxYwmwzQLM3uE8eb6U8VjUn",
  "key5": "5gLqS7AgDSiLKRDLVEKwpTF4CSkiN9mkGRhLRm6qhbNVBc5XTTdQrufJLVtniYYGKgtBVXM7Hzim8L6UXmE5yNA8",
  "key6": "5RkaEoWM71miTHXDkLkCxzugeUudRzcTjJ8mDmPZBABYC8cefhrN15vj7XBzxYNA2iZLyDR54t5e7Z7Ahe44TgvQ",
  "key7": "HBFdCn1tEaV7NbatGPQuoh91vszSwPQhErgUvty41WixRbtGpzSU6H3umrPRVMgP63AzQntvkC2YGxJtZoW3zrF",
  "key8": "hwArRmuJFQsEAL4jUVDthUEpgvnb5ewej3VEeTsz71UsqNdNE3UnjdGFpNiEYofNYLcvpPdoEvvGF8ksTBPbi8a",
  "key9": "EZLoXsGeyzRtTu6gGJU9udFpbdjmr7o6jhzFmdWH4dadtp7NKE1GutXZCQnHuTSkuoRuistziXajBuxEt8DCjRt",
  "key10": "3wSC38v8gnhHFcgaJ3rLsS92zR1mMDt9qAWDSHN7W3GzRNUjFcFhtazBn44rPB8Bi8ug2MGBsgPf7WhszZ43brQJ",
  "key11": "3HFsukS1ZwWirXqesFRvchuvKSoEn2FNBiQsUPv693MshnwQuz77GjBxWmFHiHozHFMxDhWudr8F3HUMi1ujpCk7",
  "key12": "4Kw8CfZrFHvi65zxW6b88p1ZJNzFs5ckAJGcA4YKjmaswxCZq9c9Mio6izux8YdBWr5Gc16JJwrdaXtkj6RDTYoW",
  "key13": "2EbF6i8Ai4cF8DHK6RiSjAWjEoAAKQ9rRzfgjh7RF8FEnNizTKXemG8GGbySZfzJKapNrEiuEs815FeXkqQLoyAS",
  "key14": "47twox1WvddKViZzMZm3fpkpcYYU5umXeWrB9TRvS811qk45wM2RM1PJmBCQSfquBWWEAjYeoPGjXTvTi4ZZoHy7",
  "key15": "2USoVf8dYyMnFkTtzJQxbZjGzXrXZkGJTo1PXCu9HfMeuMH2CGEvKYdRjySuVngJSSoTocyDE4V1ui4a9cdrM9fo",
  "key16": "5Bm9FJb49Uha1L7vBVdcAWE1Pcvqhvr6NxQh2rRRsa1KXT1jxJzVDMCX6BpxM77iYPqqAeHqPe3RsBuWvdR5ruqZ",
  "key17": "3CeAbWWnnQymLDvWhB26tTLarP9K4HGEQZRud5HUu5nSdZPZToqbxrchSuQ6wgq2HV8aPbooNpfLKWs8UWV783G5",
  "key18": "yVtGWyxmNCN9Y4LsVr2LjRcj7iV4x8JKEK7ke9g1dz8s4zzYT8hGsqKBrYByfGkYPnYKh3eKfU6QUxzb3V4FThD",
  "key19": "qJkMPLRNH9uhYP7HKEMb35b7ZybxGLPiGSDW2mngp96ZzUsyxvHqQauzG9cMPJ6W8BV1m9UGHRvPzX6kUo7Bs4L",
  "key20": "32x9EzKq9bNmayroWzVtMoBXcLyFKRKza8Rf2TL3ARjqRFHCHPR5b6bHTu5LkaTSQC3ckG9fkpM8XEGmuVxtur9i",
  "key21": "5d72WpV2UhLW9s3EyJaFXrudWFpPa8vZMkKMUu573e3G31oikVwSz7GBLqRN6w2Xi6toqU4iMFvtpGjERQGUHSf4",
  "key22": "36x3Lfmh3KZektchtXxaMTLMbdNh5HhKm2wwPZSUS3w4DFZWZHwoULuaXsteFJaG6yqnSrvDfWxuHXref2Wa71Jn",
  "key23": "5bqvRhVMoThX8Y4Mj7XiqyhbLirr4hDvS5o5equSDjV2tBh9dRF2fqB1PiH432KT9xgyiXarDgbmnQybcQVz4dsy",
  "key24": "5HUV9ts82eaCnkR5aHco8TjAmRb6HPLQarH9UeVyfpidcXxAMg128QuyH4usp1tCyyiy8n9hzPBfUJfyFD65xDdr",
  "key25": "hh69yahp3BcYvbMDfNzkAj95MPn2AmybbkQFSVRprgSQvKk6xrnTQfU63oZqFeHvaDiSW9LjVNQCoeNFc1Y8A7P",
  "key26": "2usHau5hxyQyM3VmXHpvKtD2qv1Tig9Ms9tWtQTuVNPA8iGCo9Hm9fgGyssBbeB3s8SeptfVJ2bDuMzebiy29uDt",
  "key27": "3L6xhjpe5VpedGK5NNfaniphvNN5VmBzKzgzjNQtQBBFRzoyVpd2JBXWwJA2gPEuGvRxsEjA6a9aawdEpWJVbYUs",
  "key28": "559dKHKmzULJU28yKjuYELRTevjovYK2sVMmUAcwkBXEfxAUmVhxmYyp75oYiifn9DqVP6ZZn5LVtZhbZ2uPG4rJ",
  "key29": "JLcAPGWVDQraRd1QEgPFy6v4DZEaNxRHgC9p2Z91dvDZVcq1BxRjTKk1wbFqLaYMwGCUsTarBpgtiL3xg8vnW2w",
  "key30": "2uVLxFJgqQtHTjM5BZhd4oJ1BjeJ2E5rQnj7vHJqDK2XjjobhFVUN3jPvVvtLP7JkWSL3ZyTX2wHztvxpqjxrA5q",
  "key31": "54wRE9bd2MEwxKq78f4fXLU9GqDD3sVChhBgtEMZ6VYcx79ipHJY9Gdt8pghWcoJPkmoizctuvD29rj1wJaZN8UH",
  "key32": "3YUkFhwMe24p4ajGt2TTXwy4gmLVW7RmnTGcTwZP7oPxacEqVsuHfAENutwY2B4CtqtQKyFDNMUVtKt5Py6ttF6T",
  "key33": "5Y9YyddzJBaCPFWdEt4sPZqWcuQ7dywjmHKxsuAarSTmcBzfcB1HnYncsz2AEnD615Q6MpRqBgD3nWpSBGxxnpUC",
  "key34": "3fn4wLUBs7SkA3dqyegp9y2DQCxTmLihsmS2hP6YEBqacdkcak9HrF4FtpF8c4sq4LhcWXL7xQyB8f64wW1b66sy"
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
