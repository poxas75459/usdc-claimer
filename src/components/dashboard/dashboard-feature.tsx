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
    "hUpYorW95u6CxN8znAYzYczkS2ii9wZVySvfpkEMq9ARSX5g1R2oBpQUf9daXHsoaanLWP5CxsHnwFzgYEwemjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uVdcctwbwFpt4A3QUAJ4VaDmExJYsswRSq5pWz62JdGUAWKLSJjsP21kacczWcKY3FEFfT7TBXQ4LNCphpm9Ufr",
  "key1": "3vwvWi5QPCexSy7KkVgJuLVq4RdRZsZ1sS8chwfhixpctRy88rxRbSn8GjeRLTyo2U5dnZRT3qSP9QRzzR3Q8tQj",
  "key2": "3nrPuSi6EAoDCSXLCijWPqpB4PxyaD8npboPQXsqz6kjP7Y81CVeffxMLaSEVj4bqQVYNd3hBKDW6QNTpYRnZKYH",
  "key3": "5zF54nBkLFmoiZMm63NSMnAZsSmkaK9vNe2i5YMbhGPZxbM8KZNWaCaWndGbUU5XYaT1RTkHgLL63QeFzYW6DjUn",
  "key4": "KVCTyzcVnSmBKPQ86M7bS1WxiTh21JpUB9maRHPZsMEvEeoV1GfQ9YoUBRNMdkxAjKz3MBwaNHTd1XXvnT1weUE",
  "key5": "5XH1nTnFAp9Jtcfxa5aYJhrn5QkpzJQW7qZbyqFkajeSv4dtVYZ8UmaQ4y4ndU4cZXKmtZpWrGQK7ZeCBYXdsiEo",
  "key6": "AbKkfEodHHbs2ASmuJiFvD8rMySbCrTZLM3krZSw5Xsvvv2vWdHL9Asp7GdXrcEZ1rH5a7uYYPKVEbVi7Cv1Hb7",
  "key7": "4BBQJppc6GX6j6o8zDeMcPbFgAiK8yaENbM5UQfEDBqjasVvv3SbePtGNeYNoAUfFKfBEbP1objvApsyieZsPK1R",
  "key8": "4JXnUino4KCXi1Jxr3vQGaVt78xNv3UH34g9JW7zf9Yems1E8fwfZmRj5WGzXbAve2wsGtTk8G62wvEkenhc5nfP",
  "key9": "3BKbDBM58xaK9EXybyJ1dgP4Kt1YcfFr4JgTunvhB7dgr6esaoSScaP25zXVuYieKtv3LXN7HUQJcsBnuGSB7Syq",
  "key10": "8uXN8gq1EGP23CG3UtCn9m4ZQhLZ8LiKYjrDjoAcaAwoZo4bNvFCZQH5orTDWUnpvurnvqn2jttPH6o4Ru979hb",
  "key11": "4o6Gxj6fhGM2KSPeADpa9sAa86vgSSQMEXeRf6TDVphJzbhVpTnH4caqd9c2hd7kqr173FY55Paw2vYJZtX42aqb",
  "key12": "2pn98dn9hNKzs89gpWFLaVEYP2GUvL6s95uxcYy8V4aZZpvmeT8HJjz655kmQxiCufW9ffwYEG7TEuHvnUSKuFUv",
  "key13": "5Y3qs7ENWyuqHWsH918jke8UQwSQ8x6Mc4pScEzgDHCdJHdNg4w5mkj5GBpqnZB8AyLznnJPycR1jGrBAAGVr2Un",
  "key14": "5daSjWAXHw8jL9pQGY95BmS2hvvpYtTc7gCARqgErsgXm6nEc9ygLrZGieyvSF8YSUgu3ut8Lz4E8mCwuZef4gYJ",
  "key15": "57SXEVkbsQZ2PppS79bv37ZLkkVFuJZsQ7wsDc8evSuGydYF6wdqxN7TYmTHjpZjy5NxmMyQuwitCNgaemr6Ad1x",
  "key16": "2FVaWvDFHLyJL73N4SLhRRzxTuZUjzmUc53sCsC4d2Evj2aK1NZecvQa7amEeUv6AMkhjsdfKEowUyRN2YjDTn9s",
  "key17": "9dFy1GS3kfw4YCeB5W7ScvtYG3cw9obBkTrRjdypPX6uUYkD9GpMQcaafiq2kiY5EoRakPisQ8vvck11ZicZW4T",
  "key18": "4V3MXDoQsHpBTQw3QGfwPPSMBwBMSSWC8i5wyZC8uNqKWLAxfQDwFoXB6K2ZRxUjr3LzV7429f5QZbSatTWjF3WY",
  "key19": "4ZBvx53AgxXaRy9ZvuYQtEGSog3VcAN2vL76jDYCWLy8eJRi3C4xU1Afpobxq6ojZCWJVMAkXKuD6Bpk2g9zxTv1",
  "key20": "4mxjDCgNMRUDtR9MEUZGxpSo7j5GdjWYxy3TRM1AaJftL8T8iNmyc8MBSXRn9DKDcU87gqyE9dAUbwkSHKr8Axgm",
  "key21": "38SyLSsf892JTkuJUc2aGKahHamud3bV3TCYL837XkksrULZACdusNcJ5PFSthdt8cftheK1qMLSfTowucbEsZpf",
  "key22": "3pKEANMZo9k91V1AtvhptezLjBnxSAg8GfKPP9cwUTPgzrk5mPyzCyTb7tJc1nP42eejPc3icyznCVA2nqhhiMBq",
  "key23": "3JHi2XDrqZxahj1CNvk27uhNNiPaiHeksP1gb8hC83YpLb7FAkZpjV3TZH6D4nDV4MV927RmDG194GjYmC1k6bFv",
  "key24": "39JVfzuNpAQDuqUzAaaKNqXixfYnfzRg4fMGentKRkAg9JUArVFiDgtPCRPKN91zDcmNdbWy9zSZCFrttQQXX4ZY",
  "key25": "DkVxG8ZABq5v1SW7qjdc4RsJJCntj7fy3nBemyKa5DMZfUhyAjAuKjKBVFaVPYRWVGGx935TDyZQuyjr6A4kWmK",
  "key26": "4BhPUVhHxXKiHHLunkyUTexnRT1S9nPzSdaB2SMpMWv3kCd6FwV26XpvNQRQHifdc4sQdX1j7ok5w39X9KGQzBJH",
  "key27": "5wy99fipFxF59vZr4tNQk1RjXxJYq3mbqLcjZ894Fib4vMGdUZRoc2R8CjMZDki5okgVCoQNETowHBmzJn515NiQ"
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
