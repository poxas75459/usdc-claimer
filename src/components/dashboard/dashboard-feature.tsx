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
    "4GzpzoTRgCPcUf8jUuVC6S4ZCxPG3foeqWyPeg6KZNx3HhmPpS3ggf2td2WKmEfHVZTLAfGdGDf6Qh2R2MSQ3QU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39XDQ2z4UcpbqB56V49anpFz84kYp5UFLCqB4mVW5NbCacgXbF8pEVPRBsJzGF85hbFDW5wjjvzCZLEWqGZEMsE3",
  "key1": "336J57BGarhL7JF9VbSSiLqrhVS5g8XfYHt3v1M4RnGftJCdRpe3Jpg2KDyoAtAV8USxy52NSaSnK1iQTxaQNnBA",
  "key2": "7j1NLKf9vaHUDHDPqQ6LuBUnBQr9RpUC6ApFSugBKafEKcqfbyABv7L2RDx4jbpCEcZmV7P35jNY8csUSrE4EEV",
  "key3": "4DXMAGfWtMyoasVQdDvPorN8XnxgkqRLiqosgWNjPnXCdGu8tFk6eFgySDgPg37SnccgxRGDkrfnHo8s2XJNzGyd",
  "key4": "iQwKCjxm68BauWxG4CXfi3UQTTBkF4AdX2r4xFQqtcLS3siSQoFnSeNLui6yoMvEKPn7hNigpQ8wtq39Nona3bu",
  "key5": "3MwUvQyS3kYeW7hw2pM4ChH3ChaKS7yzZiELiiuGA6rwYjH1dkw6qYgWpVTYMA4UyEU3MdbKbWQHKFLGFFquopFm",
  "key6": "26TsRMaWWssgngTLYXz9SoPs4QQEYJeuJEUgSCyzN8yJmnXURvSvwUbwfm4Z8gJwRxnMWVmwrAappcptDo8Cuvq2",
  "key7": "2tcLqKR1zfPqtF1qm2RoRftHczKsV1h99YkJYsidZ4rFqkp1XpKQCtYK6N8PTuQ3tcd3u5e3TCQPfCuauNsmxhm9",
  "key8": "4kuVveG6Kg1zgPA99rvZG8SrrucZafbCjTH9DrU8eeVFPHjq5oNsyYYnTLceBVPQwvdWtv9GBYDHKN78xC649Jo1",
  "key9": "3vJX8gBPECimU7WAW1hsjLpYyVEDGEVqLAUsWDCPdVNqLgmpEiRhV9YFHQijWgGdEXaMYpvx8ZXvpr4coWyLb9vB",
  "key10": "TpgS9ChEJs1RZ3BZnXKkSng5fGxxQWHfhEQUB1He45hExVV3dzS1gsNSyJWJK1Q4gQMHw7una8nUkcukgeMTpio",
  "key11": "29rjwEkdqM3xQ7j3ALUmQLW9R98hXSWXPDAkB9HoBML1C7BW5qWogGVtkK281ZipN2euerPA9KiVvGGLhA9Hpr4E",
  "key12": "4C4NuQA4t8hLnCc7EhcNdU1ZxiaYVETubmxVD49E2RSpUrABx6oep14Lfrszkh52j8ayv9GBQDN7wpPRw9pYT7Hp",
  "key13": "4GcPdh7fiUXeuiKpjPe7bJqa24RpuiTxPNv9nTqeUxmgzxnhpkqBRPfdZN6h5aAzF3APvc8UaAbFAauFoSCihhN6",
  "key14": "3kjjiGv9rTqpBBk2etfNJU7H9MLGxRwSw3Hv8Tc6FyVa8FPoFSpuHvkCyjudnYdXDLybraERn9GxLt8XBz9m5xo8",
  "key15": "1xQX7Qa64aWrCkCPGjDaNTdzsEQUw8HgMNf3M5vokJTUQSKWfq5pZ8NRrt29yiihLH69KtmCxLkYCL6zkVgVbi1",
  "key16": "5A9k3b4uS65NhrtEFgXfmyzH3EtdKa37WPJCHgS78R1m6uVenXwc4WjvQzDxFfsXwzKER8AGyDTFt2MWwQkmUjFL",
  "key17": "4QuDjgiTocXX3Li8MFUMirVDygPKJNZPdRwDWuLg6aY6F9a3q5hCoDJdw63WWcFypHY9TbqBWwxYZcJAdsz87X9Y",
  "key18": "4NCL6WondfHfPEkF2mQEkJBJ7vMXEkgsCR9Yw7CcKgz1uzQ5wecKKKPpkr9PYzj7rYBbAJqtYW9BxJBBvJBeTCip",
  "key19": "27mLS4vEc5prZvxAV1XSPYbXapnZBUPdVJjED1fo6FCitQSj3cbPS2Sp7EPtdMKLFFwa8Sfn6FYjEBzUYW4qcPcB",
  "key20": "491vTNWRGjQGJ81ZJKuJ6thYXeJxAuRbhtLh973seJnRZRupys5Crbw9howR3zdw6gsevaidwoK7DBodg4oyfRR9",
  "key21": "5VRxFBwApVaUTSdMuGzZieBff7DtVrB2bMHqzD3nM5fL9pCD8a7iT2orYKGDLj5p7kpYkE8i9BERFYkWQb75bw4S",
  "key22": "AubiV2n8tqUR7KLU43ZLrd9wN4sAYE5qwnhraot5g86n91y7vk2SMWSRyvL1U1vQmTjbZy8mY7pbJJMPXv22Qy2",
  "key23": "4BWDB2MGSXKQXnyuNtLjs9KLNL4ESXFNrBHkpAvAuUFPRnULBCG3DPJxbw7rzAstydnF5htoPLQKXcdXrzLJDQkd",
  "key24": "2DEd6b17qZJiQeMuwKUxzkWfCRLhQQzcdCrsz3WbsWxXD5ZZqJpbxFAHP1XDeF5GT6TnbKJSh5mybKtbYJj4Amyb",
  "key25": "UYQwTGpThtyR4Xcb8znWnq4KhqH9J6riy1kisSQ5Cwu4S15RwF7g3dhSzXhk65GbNQDwebzx5BmcSBbjV9n6NSA",
  "key26": "41hDGGgE4wmNvdNREQgDjuCQw2PR7DsUbc5LWZxGWLY2UsojUCoH8C9EKtgjjvr7kES5PWs3zVF2uHfTbNqWmfcQ",
  "key27": "5Ss8anNRneK25c3M2rRu3gZUhxJHXjwJS2UNV3LF7pT6Ldt7f3XvX4jAZum2YokTiE8stPeYT3Zze1j92cMnGPDi",
  "key28": "5L1iaQhs4oBvKLnzjSGAAS1znkKRdEwpVRhkA6xuNSiUR1trGk56VYMXjWiFAbcuyv7W5Dw9BkQ1gJj3awWuYfNy",
  "key29": "5RRTRCofA3kJP4awVyqK81RADbiqg9uznuV7NnxaCPzrpJpKHrikBVDT3G1XDGdRJ32AbnJD3nVPpzxDHVtXfv5r"
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
