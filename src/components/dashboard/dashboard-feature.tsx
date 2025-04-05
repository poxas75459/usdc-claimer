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
    "5Xt22Bh8Qstq5jckzDHeP6GQjDA5GBZjcJ8nhTKgWGKjAJ2QFYweC9adECqxXQUmpsAh2yrug91ZUBMGa7L8J9CU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FERXkSLJiqJNyZxdN2RgfKUMo3zs5gQ34Yr9k7E26rx9DwvweknnPGheTzBVuPaGBkksMUMEPsVXwitCDvhXvcE",
  "key1": "52knsT4YmKmMrK3HKMdYvL16Cy4QUfYHEqYHe6vutkcmU9xDWvX9igiHmfibrxecPoBPt8ZWu1b9hDUs1kpM7CVN",
  "key2": "5eBdyh5DuRpoCkUjeh6B5KQncyHqBQbwGSMaGJsLry1u74ZKQWvoRPidyC5gke1sXR2kddRpe4nXubn5Ko98JtLV",
  "key3": "3VwPFQQqxsjcXyEc4sH7zjWCabzhdchpq961iYRXpcwSFgkX44eKA44cu3C3K4oYfjDGFNV64PLYVsT9JahBgDri",
  "key4": "5JUMWDwpAp2CFVPRtPywyzxEZzoTdnADvHmsuYTTEzg7EkuoQccY7TL5mNeTfAfydYrNc3jqVKxGVe8LRVrGrS3L",
  "key5": "2Jr8YkENg8iWQNnREDC1t7dmRzaWVYgif1t1zJv9TfqpBAhKpSYpKcbKRJ2q7kr5JNkKpN51NTQWzxCBJg2vz28M",
  "key6": "2dzKyJUxyu53bDVZTBxX6LcsqSR1k1duvcT7GNKxdCs6NiewFoj2gW1SbRZRrK6c5d4enJC22cxGCKS3rfT9QmbJ",
  "key7": "4H8J3iTpgHVTXDfMzbeKc7YqX4W3yjHq4CMRqXggPWhnU6CZkEq15S9Q2QDqTmrygdDitHwNeaETg8XaFEUFg6fR",
  "key8": "yAuhoDkQSRgEbGtpq82rkoDiCU6ybzN7cUSWmMKEwcxJuf38KA3oLoBfssgZHHSYhBjaB78CKJugjwa62VP3NGn",
  "key9": "3S5MCC9xuAt6oMVi1pDYB1xcQgSRgR34Yzuf1RjvuEP5LkuZ83P66Ay6Hc284vBZzEdxrHrnextCXvrA7b44jDfn",
  "key10": "2Fkq4NMVrLikRe9rn8cboNujo9rRpcuUMysHRe89ryngct1L26QmY2P3Adn9rnrv8RbJJY45sHKSDpfEcBZSb2xy",
  "key11": "GKkKXSd5Ak7MVyf3WiqgCm1BtMbibCzTRwgzajNMgZbiDoCPVTZkGnfoBj9JfJ7zG5rrCPuZsjCkVxNTUrpT5tP",
  "key12": "yFKgLw6cnesTwYqUoGjZ4mYe5KFK7heAaG1GGjs3QpoMKZ1om9XroWEdHsi6kd4cThYrEs95YCozHknGjBwvc3k",
  "key13": "42VaKfG6fDpLwwXz9qUECJX1AkxPDZKzz4WUsLZGvuAwqC7PvzE6LuhaEeXFtMJjrqxWJcVarNJgnfKXMPVXbs5j",
  "key14": "EbYxXWG7iC15eC1zU1ihfD1EDAjb2RUdkuKFU5gk1MHFJu7mWqGHrJ4QW7vDQGFfa8rZ9tgC8i7XpG1v9zzX8KX",
  "key15": "3qSk8tvSsBnS6yZYc42FUdH25KF2jTwPnGihw18QxXC4Zs2oh3qJWpvsY5dhgRj1byUeT1AaJ3XDDSm1Lm67N2z9",
  "key16": "2W5ebGMZufxK9RgfALTc2nCv1hXK7oCPbKF2y3tbzZHPmZ9KVgaLG8pxPhaiyQFTx8qtRaqbouS5L6vxfxQejMv6",
  "key17": "5GfL1CE7oANoZ4du8Gu4R4Jfxn3p2CBWTum6HPfsmoS98tKsEDsrNLjZGbSYXtbcQuSQ42GGxwKBeBdUbrhdxvow",
  "key18": "44p4Fye7mkXbsS7zBxzuZEJLFGX6oNvEB5UdUik4knNVRU6JiT73aKRvC1nA2GmMKeASTs1CpXzoDNQgFbooz4EW",
  "key19": "356AL87xDKFt2eim98nusXPHoz26n6cvNUXesaMpwqLS9DFHMDi4ajjR8MyJWNjAGFo8zH1NensWN5KnkXeH2Kco",
  "key20": "3RGHT1KwjQnD2gJsJ3t8WaAzuJhd1VTKLWNFMrHv4GtApAATqrZfmCsZhVgaFoxJvTeLSxTxrooTcpxN5nHeK3o6",
  "key21": "5qTrMZ4iHF2z6ZKAGMrfFue2rfspB7Wdp7NvP5ftKrGSANzHHMdaXo8KhsQq3hhmKtGwxsxVfFKYAiCL6R4jM9Gy",
  "key22": "4Q6WXTS4NqQyzcMY4Xb1gWeL4GD7jPeanQKLifQRo3tBoNrsMsdxKZp3g5wbCUjszhnHXxGsuz8YuPgi8PLKzVtD",
  "key23": "5v1TRPSZtJgx4CGKYy7bmaENPJrmwXymYH4BRkJ76QjafMgAndJBmRZvQVa6zki6Uw6LR1vk7mRrCaNrj5kMQ8F",
  "key24": "4KPC2Eupkb89MuUNWM5qhFPvnuxfP9M6sxkEKx559hbft8qtnRXa1hQrTVAS3JNN5awga6ba6STp9gUhvkNkx4Gn",
  "key25": "5vkbUy11H6VVHEXWvZWaE3EVXZXMY6J9DjpvjVr5Kpn72mPX26wkW5FHHnBSFsiMXRB4BrErK8Nnx8PZBG4idowq",
  "key26": "4XHnhW34d1bdkUXCUQ7tZhg8nei4JbnLro9YW3mpooFZCMtfZLVGuNMrQTmsZQrxfCkHQsA7BzrCJZchsWz6Q5ww",
  "key27": "aLdD4FnzHoDGwJrw9R6eoFqXzxTenKbnF16eM2LJVjjakzixVz8Xtumwwjcd3HXEmVFsG69sTXcaqUPiP7yPtcp",
  "key28": "3GWCLRukMPUfJJritdepRD1qu8nfvrfYVGSVPhYnS77PSLxefS5B1vwDJ6emF5jyATeyyqAEUUTqNN5neDByEG7m",
  "key29": "3DvCH2qQxLDrzumwWRGELrDHHpaM7ASSUh9JJ4XjPasG5LmYtsbkf5iitdsFrHprzLa3qq8fn26D31mMTtrvmpg",
  "key30": "4PpVzbacaJPsbd7foW5LmwETdbNRaKm2gShDhWpsJhJ9J7aF9eXwCru3Nb49XWebUH31GN1mfNeq47Hf7AntP9A8",
  "key31": "4RHG3y9GDiTKtYg9P95HCNzAZD88aPCxJ97ZNGTVFMNyTv5WUGHoyTei6WGFJDkKw9Q92WskbsNgvio1Xw4jocJx",
  "key32": "5k2tDmfdXcykcBMh7K3tu7pHfSXM8BkeHSasH9ivme6cBvekYTiUz2wy8uiQDjPK9GwkQouv5YZszEwH5sVTHU4a",
  "key33": "4AoL4Xhb4Uosg2bkutkhBmz2ZosjGEf2LffoSp8bqZ9rE7TmjdZvADg47tuykg3GsFY7Nv6s8fb7AuNcC4J4X64p",
  "key34": "5ZPaEgWJhFgTMWJWaaguemSvWtvQwHF2T7c2vNMPTWw9BKRBqwFA3t97RMyrgJ3mUH7mUJqFU8ArfH1x3k7RmiYx",
  "key35": "58QGqnsDr2Q1BEpUxiicv41jQjbbkLQfST4RBdqno6UWGZn1wWJBptubtAo8G7Zy5bTwY6xXLSFN33XMgZA2FcfZ",
  "key36": "2y5bmWP4BwHJQoGYwYkaBxQ4fknp16NY4UcSCEG3Usc5znXhSxeLirbmtt3kRyxAubXTnY6BuGfDYHUQTg8VoPPR",
  "key37": "5fTr818ZUi5cofciw2LgjZ57hAywcgDM2BGqBPFAmgKfUC7nZkMwBRkKvwLNJ2NtRpWFf5xdWh7hTTLtALv2Kz52",
  "key38": "3EwZUeaaQb684P3BYCHMKESMHcLuP86Dbtaeiutr6dcGLLTQ1PUtNXcb6Skc9zWj4Ap4DH9RVHFTYqSTcmNBX5im",
  "key39": "XtgnmX6PfQGmofjUQJUh6U1fvzT8Bj8S2qGNZd8ip639YmAfzNuCHqPQ3Y7g5rKTLtBdc2W64zoTxXZYNkzz4fV",
  "key40": "4Wu3h1kcsvW8Sgcx44QPXRLZu8PX72zjuePHTogHN5o2V75CxYPrXVPX9hy2mnZ7YQ8ts9XNky42T4RY3o5NVNMa",
  "key41": "5AGB5PG8XnpQQcXjqEGpqsA1XkB6efjHytJyGJWciiqQ2PxAhX48Sop63xF4KGmCtr3hQVpfwVVMWVzZV9TXf4de",
  "key42": "4WUcy9BqeL4usA5KmRQUsgdCyjaJwMeaV7vEionyukKnDjFwyu5pG54bTm2BGLXGf6rmhaDTkQzDCjxffqkhwjJi",
  "key43": "5rsrMHn4YwuHgjioxvq77XR7hAMKTfBZdMbYzjX7CmmGxepFnNyJVxbj2yNgb4jaPNa45GjGpCjrEVaSFFSVzzom",
  "key44": "hxDf9XtWyJDm5wP54eJc6uxkRsAM3xsWVaF1NhhH1J4WXA1Akd82nx2weRx592idyaCvRZ5vz2JtGftcqUrLsiN",
  "key45": "44d9P83cknLXjjzMG6HN4H9KmdfWYnhaZhnVuAehZBUV54G72owsrgVipmsigNcHecJPpom6AsV9gQXbzNaBJTUT",
  "key46": "339gUrcmVRCVRnDU8r55TsPqraBhUdsmVWjAMHeDn8pFcu1duxQPPhjocycd6Xh8WLfN1XxhuFubP64CHQazLXpV",
  "key47": "5Ywg4zGqrLEzDif8vid1DMPjm42X38Uxq3FCQhCYz9PD3hiHcZNCujdcJ759467APUgFwwAgRYh3nBNJoThLUM4o",
  "key48": "3f53rZ6L6ePgH7rkrCPHQQecPuwY3S2gAN8uY1QANGNbssVBsH2EFKMMYeNng7bXHMgvgwiENAdF28MxfASbVE55"
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
