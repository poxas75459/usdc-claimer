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
    "2VdnJ4MCqLcJQfwMo8ws93i9Rb2b8S3tEvtvbkZWZqvuzfcfA5yjuJXVkd1EApM17YfLi6U7UoaTud4kYFi8d3Lv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dd9rEUq4pTdTEsUrj1qGzwdxU1xEzs7JowJgmpXzRCgcZxUJQw55r6a9H2oagPUbmLvwr9zoAY1MDM9q4WMuQW3",
  "key1": "43R7nuWQ8BUcQyr3MYN3vxQ137sPedvYP8ufcu4wc7Qwxdr2MvLmfvTzLbPQafxf443dvxc2JThCwoL7PRVR19kZ",
  "key2": "3MJbMVXdWWwnA7WhgAdoreU7KtYLjXDkJdYmmTh8ktU4B2zvadBQBc3Rqp4hDpbDk5LHyhKCrPBTL9ZdURZMUyBT",
  "key3": "42rF4ok1Y9HvkXyZnsjLimFargKHZzoZHT99oW1YpZDV5sWc853nP2ueVk8s4fbLPxACa6gsYvpktHKcqRcfCjhM",
  "key4": "3ZojgShjJtbRSTdie2ewgYmTgwKHz4UTe9UkiYJGHjb2JCjHdjLnmjokecweFUrGdrFAU6Yk3ogRa7WsEdxZG652",
  "key5": "5UVCLmNpPcpWuNyruB6Tv79nSsAAFh7NnLMfYvpDUHe3r9XEGXcisr8TckXsVGCKm9Mef7CszCtygqEU5k3jq5tN",
  "key6": "5BTgFJdPKxAM1TottAEKFExSc3MjudMe1Y1QCeNyApRupJhpLXxCUx77DrS6FXAefLs7k6c7NacqdSuKG1fX8sKx",
  "key7": "2hxYjwZriNvoqbywzcQgPt6sA4TKNHAvq3yWxVfADuccU3SpxrQVbqvVpk9CtVJz5T5P8z9dqkTAQNR52o9Rcnew",
  "key8": "4wqSNNk5QHRPcpy4eUyoDZmsWBh9EEyyVRdQTfBz9YAR5LHm8EmyvHFN1riU9utL67ctEnudnRsxqA3XHePhfHfy",
  "key9": "5w57JrUKbigpUg4sQZMSrbm98C8wyUigXqGZYRFnzhVjXMnCJH3NaoGDR9q8r82arfwJ9pM9CCXujZsQLLvpyBA1",
  "key10": "5rsWtS5YYat1vUc5ixR3vvX2M5S35RYWC5KFfttZpZR1ugdzv92aQaBNw9f68e4PwNNkDAt7WvxB7dfyKB8pxYzx",
  "key11": "4pHVUodDdEAUBEMaa1sJmkfCwqJaxNFB218TqoMYTkbxWy4WykiKuR8ZtLZ89WXWyf2XoLH9DEzRmdfQ7cJK7vpZ",
  "key12": "2fGVHyKy8CAPa4v5tPsGzKY488KsenqTR2EcsWiCwmHjBom1rPp1fEcHY5TVG2XXfqLSHTwjuFfknoJbyRdSppZR",
  "key13": "5TR4ecGEdTXrKa3J3mjoJt2r6RKKSNKDVCyrrPdmHfDBC1eWPHd1P9Xew9P1Dho4JKQinNVxYFe5KaKNrbek5RFw",
  "key14": "VUk11e7sA7sSbxq3tz4cZTUoJ5s37GvH85ti4Y9YWsWAUM9AmpUedzwQksZsaJ9CGyQf9DitZZFUhivCxix5adX",
  "key15": "QouDnRRFx5PhDkEs9vbCmC5LFf35V3z7CREg8VVhBjCSa7XhNRMUPPN97bimnTZn5f7qjm37cLMQsL5xqgpXkj9",
  "key16": "RjsxzG3VrT5v16S9bDMGDxxf61RDArXJjAexZENQDB6M3ut5ZSMNbMMhJQt1npQpmMt2tgSLJxmP55oGhKH5txa",
  "key17": "4pTtJmdDwqKWBYiu3gGCLwbH2yRrFHaUD3DzJdirPqCaHZSkUZi9mLjiBC3SREyu4FUnx6aPgdAr44hEd7Vi6yGy",
  "key18": "2vJsq1vRysZ7fryhJQpbmCxTZaxN7f39duWEKXVNjytVBQk95UPvC9nY3t5dHMvpKgvK8wgMsg9RmMvVx2EMPGjG",
  "key19": "27QRSmeaF1VtmEpSwNfLwtftNRF7ZrDb8h4erK5ZstYxuBSNE3mtxrchySMqKWQxX6USrEMYF7ZLaqdpLXXr6HWP",
  "key20": "2zLbRiQevRSNN3xPtUZieZ4h8hHTX2PjS88FuLHjbWsjfXbhxa9XXSsyjW91LQbKYAyua6WjDyKc8kgbWsqWg5zH",
  "key21": "4pA9FpvjtV4SQPhmLUiah7V4FPgbgXq9NuBbVkxpznM9kcf3H5xqr5nSfibZ83CWF8cz6V9qUs7iQQHc3FikuzxV",
  "key22": "3dZj1917uiM6QCgDJaxHVN3tAhmMze23oFuTWUyPrmTALF658HAKuy7k7xxwMoVTTQriQD7BqkyJ92CiZmtbUnBi",
  "key23": "3DToXweRLpf8gfFotsrawXA62LexsnRCkRhNtEYC32k9S1hSddL7S9owxGZvz63Jgbst9UXJ3YDYfdY4xXmNFoe7",
  "key24": "3JNGKR5cvgHFTGEy9u58a5VCMdQWt9pc9nF9JFFKbC4HopxaemVWhA4eBHoATiSBT8PkroQJCTg53GinG9ENpucc",
  "key25": "4pGc87KLnCig2yKpF9cMye48wv1BL2E4JDwvNTZbmzSbQw7A3LDvvGLUH3FxfZboWnFs83amdJ3uzr6nsEzAJt6P",
  "key26": "5rAa3moaXcWQABuYVVprbp5gT6Hw9VTCDMjtqL874KksKVjWqJ4isAVG9D8aXniYkJF81fxmxUygnnpFSbqWvEpF",
  "key27": "3sn87ih8MVBPeGuSn3Yoq84iJFT13tTNZBRdtUWk3tmsBEeJWYsacneyJ3iry5wKbHazHiXiG7HZhpiPJ6YU9Ppa",
  "key28": "5PdxbBjESNqxK8ZUk7CESXHrk6CWcoQzWnDdfsLL2jkKG12NnZr419Zbq9WRHUYrtrHgcEf71784UhAnoGwT4vQk",
  "key29": "329CQ9morbPQpbtRR2u8qZ7HXiN5zdoQvEfZf9vY29e4b1yEuBoUfiHefssqyYaXNDKJkdFVAR8ygo582vUyFv1D",
  "key30": "2fJvPFBvZQF9K5mtRkAVq1UivCTTdaCVQTNFmhzUX8N9WTPw9hrXjAeHuyxbnphk3QZtJqf1S7EbC9wtW3Uiqg1m",
  "key31": "4zaBGexwuDo6q3XmS8zZ9g377GiAEcjoLPJJvuxMYh728q6pZZtXp3zmqy9G4MNscVgf55yewcZdyhcbdRapPxPT",
  "key32": "34QRopqMk9inYdavZq9ncwDLxY6WNWcHdK5uTKvTLCh74L9wQmj1MMrN6w8cWYTTR8RTW3GeAu5gaqpwWjn7i2ba",
  "key33": "4KDbZE1miwkm2NkrbxQ4jcfFT6qdQwe4Xi42HPdKQNk74zJu7NwbbpQXgqanYSFzpesfBUKDmNgXA1NeA1jspATG",
  "key34": "5PxAboyRDjLhjAuE2azMuBiHpu4Zo7PYtDwVX8F5yhiYD6AYPJMJZPAuoNCfr26upSvZFzcRaNdwkoTXm45hCnyF"
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
