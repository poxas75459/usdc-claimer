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
    "2idhFRuxgxGMmjrYhefrt3i1C84abHus2jP3QCtMdJgwULmcWMfq4qfs43SgkuanuncGqFvVocRLbyVKqfyx7Gh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q3fjfBtKNJCGWGJSDzXbTdAYgmyXwScUDhx1ewVLCubQ8uCajvzBt36UmKdYz6bmPSBQTA1oP1tnHBqixFtVEcW",
  "key1": "39YJiTQ8dFw6MkYNaBx2QyMhdk2NX4wAikJBmA9rjXuPXZTz1C9FbidTACALCLG19YxXvKrhnYjFFE58LwVWFWyr",
  "key2": "4ErSeNaZMbnWGifXV2nky77VbaWRYha1TAHzJe8fEB6Fdiq8Yn5WtbKoBxHwUFiJ5KpHtUFNJxWXyoBrHS32gnmk",
  "key3": "53yzke8RSCCvvRM9TesKT9HfsdLnqCKTVbKYKnfAL1HBG9BTzcq5PD4LZ15QZ2oYvnTo6uTp2VfdDTd4PcqJAMzy",
  "key4": "d8m8BjCLRdPU7XcguXDQtvcCyum2kYg3qpuNEvChbkRANFYjR49DbqbbskdU5PQP9FSBX1Cdr1VQFRED1x7KWK6",
  "key5": "2SbqEDNMSJF6gyFQRLWFw7FyQrKxLNWQJEL1dLDnE5mfb91FPXKgt7g7G6FanUsjHJ8ZMSxXQ9cYyEbPqB5TY9F3",
  "key6": "vLFE9Zeo1PUjHQs3u84JNd2U5W1xXQVCWrw2XJRRjmzz5Hq9cRaN2EWy6p6RFNJVcMVJk5NsxJwme79ouY8W7p8",
  "key7": "SsHyBKjCS5UcropUPbwX76VW6pj8eorZYwQKUjrMv1pXgZYikJFoEDNiVaczJ6bfMzsLsNsTX2gATNKsesYjdcX",
  "key8": "5891c9ubWsx8nuAMWEpz21CPtbraHkdaqwCkoe55XgJwy4zMiFyFn3FFGys7P4ZwQBnkjf5PmzkFrc1kx3T7XVKP",
  "key9": "aYtpYczGPWcM88s5ueaxbFfsC7xPCaYQreWK8gn6NoKSaHq2MqjLi671FMmck6LbaaiFCxhH7BjxwGyzZnygcYU",
  "key10": "2JvUGj6UxGStBazTrakDyDWmpA6f1AmFksSQ6sLBGfAh8nMPAaDGFxRFyEfZnjdZyuvonDVVr1VLYmfeBV35pKvL",
  "key11": "9Zo4p24L7Tj1T1orMTsEiQJ56Wu1c8AUZtZRPeMbtzk4Jj2yorKqE8asoesm3dy9t8f5VeAMT63c8xxKpK9UjiL",
  "key12": "4M7naXurR2zadrJs2k6qwA8uXz3tK8Yk1pfbsgynSn66xFicPd4UXyQ8HNvm4aQBBcHDkJ7y5afxFkvn8nvNDEUm",
  "key13": "4dPGRvtMT1DPuowkmSXTfwmMuj5wukjAW93GQyNhTFuDdvEXEcS1yGjPUPYCVBx61A8QbJXZBHMwPZb4rd7LKpy6",
  "key14": "5huXJuLR3vZPF9FoTwLfkKEz9Gi3MGS16CpeUd3yu9QLpiTMXJbVXynPQxHBE7eEedRVLhUun7x6J8bCWv6Sg5TN",
  "key15": "4YWpeXMBmWML1sZa3rUU9kywt3pZ3SLnLFNRKqBT54ggDkGLGCgyf1dg1xAxwP3mwosUFR33wQxprrXQUi32XsZK",
  "key16": "3npZdcoxJzaBoiB4y4nbZkL7eqKfpP5CSbW6g8mfxkFqZs689VkxQs5gXmpUqadd35TDmnsYDuth1n1WyRwHEUTH",
  "key17": "5YKG6vwkHKjRZkqa7wZfd2CTAEhh7mB9wTnCgYeMrmFxatz3rbheJuunXJZzouUtfSp3qGsnXhJ2XKFepWDASpN2",
  "key18": "3DxYpuzXGFKadQH51hHD2YntKGocqb7rSRH2npRaZEX5LRoA8sNiVGvEqnZmXFRxzYLBCK79YgsmScmuHM4vC4wR",
  "key19": "A9SPbSFbd2Mvx4LVMUrWtdhPPQrrQTtd8rcWC74x4qWgMpdsJBiyEzc28hy5EJH8aDpgYRAnFTTfKJL2qNt72Fs",
  "key20": "4T8EMBEV9YXUq2tE1yZpgtHGNvmNsqnR2PK5VQcwQaz8DrnQ1Vmndbho8Eag31iwaUAFPu85bnmNwExyLHyQNLzM",
  "key21": "9s54BfbjsKs5TgkKQgayUCSa5QU9Kf5Uxtzf6vKXaVMeoiRvMjk3iRqq3NKB3sxvSept7E3ZmMFnEhAquPbbqie",
  "key22": "65Cirp4cm9jopqtMsGePVeBPvmsYPKrRMFRhyR6KTP7R3VEUGEqbea4roaq1yKj8YihCpbWMhMNr6wQ8vZxi5qte",
  "key23": "VUGg43aYGgCDBA6ZZXZWsb1k3sqBLs9WsAXdpBqrDTZEtpUKxwtzfugnBwumEqxfPmapCrx8xF4jJky4SJT8hfE",
  "key24": "2yGgbCFS79wikomYuesvM8AQSPqoJqoFFm8MVZajESTvWbERaDNfprBpEwqHwpBwgW1MfTj653S45woCsiJ8NvXY",
  "key25": "2wh7qnzuX1gbvDCmJAmEVPTbMwr4vb5RfGu7hFixMx86s6uf3V34mrVH6KTAFC4dCxhnvnYuWozGLpdVfzzjf8Ds",
  "key26": "3c4S3VKPLQAg2sAaE2eeEVF4fy2L791K8f72LMR1Yo7uKmyCXgjLFcRfgPygPYXVjhEzsGYVdgxJuvg6qsB2kgEg",
  "key27": "5EyKfgwyiQCSYXEAbDZfCcZ9FEKoTsXscbPMydNoxREJUYLqZMd1jnBnpQc8Dwhe4TNNzHYN3xVxkQbbsR2MKxJg",
  "key28": "2tmnK5UY7NHKRJs1svnirjHLGETjfjYuCjsXrdf535JjMM4JZDWb5GodeMxcW1DG7DAoH8Hg9eWUqiL8gWtugnuk",
  "key29": "3XRiVzRc5rwVLbwnKpFmeBkY4RJAxAVs5DrMhQRkpgTBQQTZyYenkLWs74uU4pa2dNg6yrSWWwvWnC1iUmLqaeQo",
  "key30": "4dsquy4U7o1Av8X7B6s7boQAdxD4q72EuGAvYMJxxC8H8ixpBggmYhxuRQedULsYzbmgeLXCudnfdM4pm4Arb1p9",
  "key31": "4T6Mkdn4gQTCC9SLc91CuiZWG8UdmbrU4wFeZsUpPJdgUYKDAVeeMNfSBcajbHyfaMLcdHSjYp5WVCvt4nFZFo1Y"
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
