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
    "5ghDd22eF2Brw1hqrnDdeGxhsgVh9FYifoucZUmzh95Ym2peXuJB4JNSdzswrZyU11kFjSS27mjGGVuRxVy6U5iL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AqmU7yerVCFZQzyhka2hg6TAeAp5bs6b9rxkXqfEYG3P5Q5oFQUMdXh4YadT1s9MaHZ5oMmSEb65JpNe2wpqocz",
  "key1": "497WGrBku3iXYvzJxPyD63Z1jUN44UTY2ZoYnTBGwe6Nb9ASz3UTNe7mAfCgUKyD6pvbMzQJbc2CVKyhjXdjUW3c",
  "key2": "2z7wMZ8zgShyhDtytJ5sMwzAfjBXFiDmgZLbvCehkqkQyQzKgjNms7AYxQacS7CijWKnNMDVpZ3QrbU2GvPzC4B6",
  "key3": "4UAn9WZz9TRaa5C39LMGwaT9T65q3MqCpMukhJF9TBmLqLGHHUhYdoLZmvzvjcSLHcaoQoxBzVmVYKbykd7LKiDM",
  "key4": "3XYSnSCxANm78f9ccJZ9bayEK8pAehYAhs1A1z4eXr3FsMSjWrZtvjQULwwDYS9QJyfXttaiBT1ATtBMHf28FfYN",
  "key5": "4AveQ5JUFh5V2RmW2KdzGLLN1zZMT7XQ6k1xjBDGZCdQLjYwHWQmiXsmiLne7KVGormE9WaqsPjNHv2WHUBs4YJr",
  "key6": "5C1bjWgPx1nyr62AQye8qiSYCP6mZEDzLVB3acYGHEUAzFYKLrFFLPfJVQSwKeEVc71Za1MR4GA3vPd6q3DhxVJS",
  "key7": "RTA1tN8ZAZo7egvE1YYSQPVfPjxqy7nrs5kpHvEE42k1wDKbXDK4rkoJYKogjw8AFxrgoB9JYdcaG65eVnpqv59",
  "key8": "Xmqv6jYiDz7NGDiUFDCkXKw4EbGfFmAtka8r1M6tRJbB9pvmUTdYAjkvmsW7ETjE7zgPU7fh9ToNPX2i4fZGJ7Z",
  "key9": "3PDYZbWwNYcXJHtWRwbRoyWACZiMiFYkeXvSg7UXng8Rf9HVF5RsMCTsKbLXwZ7eLPU7xbEGCBRmrHjEy4CHDvad",
  "key10": "4n9cTR1XnQ3VV2cm81R49DKJ1iA9JqgYWPMNgzvRU11JcNekx5rKd4pioaC9tzTRmSEcimaHFU4PKeow2ZWZEoFE",
  "key11": "5ENS985ewJ8d1DULrJ3jqJXZ9BadYNWqTyK6Htp5pzCpLo7pLsb7qniBqPGojqMxkKYmkiUh7o2LdgfwxEirY5pE",
  "key12": "45M5U8pNksC8GDcvdGeGUp9m74ESVHkjqZaw8EyTJj1D8MVad6AgWG3mnuCo99HdcRK2FtK3VvuS3b32o1TBGJ5q",
  "key13": "45qrDSZf1zWNS4Fh3DFBw98CnT2pikEtfitFHRTQ1eAuVnTHorh9L2MmWKgPek9CpvhkWtqnxLSfLPqDX2BVAWVd",
  "key14": "4UV61dH4c4Bd9a6JoPmiZ3JhC4RXSJhGgQ7oqW5ef2VBk7eBPivmrrA1gy5HAzipkdAStHPMfXG1U7RkAWaZGmLw",
  "key15": "5Nkb3tNX1KReozJbBQbqHSvy4oPz3sM9s8XqdooqMQ2HsQBVjqQa6JjZXrHsedwj3CY1QTWjxSzH9m1XjDihzzM5",
  "key16": "5ou7oq6coV4TMbqhbxehQ2v2Ks2asC6e6nDWyN7kkaX7stvvwnGPJJNX45UQPjmbyuyhAxJcLCVS1od22bas5Nwy",
  "key17": "5DKfxiedJ563ECA75KVsgaKgLrXcwpr6d61XLkYrgySi8ZAmkKftKB1Jr7ebeomv4HuKdSBSiwBs5LXeFWiUKctb",
  "key18": "2vQohWPRo9KmZfdCcdYJKhZBDmeCN97MrRRpxLCZLPezha6WYG8CHqeJnmKkLTmkVAgtLsx5i4ho5eh9h2vdvFpN",
  "key19": "3mRoRvMCnGA2uWAzLoPrWdjDVajPQEjMmp9gGxPu3WjABK7p8J2E99NSzXUnfPivZPv2hX1U2RgepAdLCS7cCHqQ",
  "key20": "4V7UV36xDFRP3uMT6aYee7EC2KNCXEkCyx5AX2DNvmCNApZ8rxsHbdHudLmztammgquswQR2sSDVRSHotpRTkTda",
  "key21": "Rok3yJwfSrpVX3C7QnZWiCnNWtqXK59EmMqu1ouA9SoBpNvTw7xTdY4RP24cGF1AYG8SZDmB5wnez4bAsAghh71",
  "key22": "3qPNZPRvPYNduUpUPjduBL7JhmxzNRbY5pMLKEuenTCyMQJb9M7baFsw3zrVMJ5ZZ8dJEUfDCS5YZDaHxhtpg7AD",
  "key23": "2QUUVCkvYQKW9MS4b4eWMPAPPSvJfhb5VGHdgrN7rWK8W9he1KGXPwDXGtwPyqJzybH5QYyCcTSfJirhDmSpJZoK",
  "key24": "ziiukbz24YGvrcB8oQEmJt38R2QN8sJT2y2upcRpJ5t5uMSDGVCQ8HxEURv8m2MC1uLwGpS5P65SPrFDJSqiFmQ",
  "key25": "45wc2a3AjJrZArya58J9oathgHoPeCK9Jhdum2gRU4PervzSo7m5rr3H1k6h9jeEZuamgq1TRQLxzsPgpv2XT7nv",
  "key26": "23kQ3vScX5UiF84EHvz2R8Q94NAefD27v839oozB4VhAykbeMLSsSmuX6iFBmxpbziv6bxFMXdWei3va6rJueZkE",
  "key27": "5XR3uySg4fTZ8utTtuh7e5wqGd2aXcUAGmBnhdpEAB17L18xnrBBJoADLt3P1CqWhTrCpHPWD5UPSUi255kvCQZr",
  "key28": "29QxSwb6NeuVukewMvnGdjTUwBRT4yP5zU8WuprSULw3ugaWrWn6XFY1eghDin6B8BV6HPREfHV6qChnLqySBuEo",
  "key29": "KQhxB4f7mUrMyYGtSaMa8682ast9dwUpJxv2c5GwAeyUaSijJNUqi9HZWJGsDHdrEo4WpyM3MHDzgBfbPXqvaqf",
  "key30": "2epiTYSax5M1u7y3CUvjhYepQ3AyoLku1sfXe8YpzboZ8dE9XGPAGv6nh9dsnXU737fbYrVzLmV9yd58o2KAsW4K",
  "key31": "512SNnx3EMB2nCEEffLKva2CUDiY6b83i3uiCkpiXbykxpWSXMNigEs3qwWqY3vx15abtxynf7yckK4cDYdMVv6B",
  "key32": "2wDBUFHwCSwaWHTMCNoKw6XaYafAHTNG86REhMxL7JsHvXFYRSSPo47gYUhJuopaaFP9SCACAG8YXFjxxqCgyTiD"
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
