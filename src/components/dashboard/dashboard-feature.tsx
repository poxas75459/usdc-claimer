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
    "479QDNYc9KjkWwgwKCWmX8ojVfYZYJMffEv2LyP2H2eYjNJbN4XnFYzbTFJWLA9xrhvbjXhZPrfiPcy7fXd3fhCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bxMAeEarn1RBGjVNAVkK8j5wmPbRjEWwv5RXp7CsTNGdJMt7ZLSvZMrU6j1eecifSL7bAVRDx3A82GMxtvAgNL3",
  "key1": "aTUdZ2ZrUSwCA4J5icFNc4skNxKV2DKtxtA41622SzJtPvTfsgU2JjBsCPLm4mC77Tc8jPaLwcm5aTi7QqeQGLL",
  "key2": "4fERrSV6aaM5VREKX1YAaLy8eWxaRaUxmPazzgRTQ7UmDSVxy79BRdNXZVnK172jhVTcsvrR8FBM7BJ4YQ6kjnqd",
  "key3": "4pmJ6qpNxFFBcixxoCgs6Kk8DF62pZdZR9Z7ytjXjwwHbSVGYovvyW6Zurb5TkSYsu96r3RZVgEpFcejkTFQNTan",
  "key4": "2fvsNuuvLmipvgSLCQp5iYik2DEFAW9tamvu8U4TkXjjTCB4qZ9auxHn1Pu36c6oEH4ak9UWveuLwVy6q63ZVgf7",
  "key5": "2tt2DXaMNeMRdjXXL3eBzvUGn2J7DgQPvQQyMAumyZEZ76YHdE7nAkgztKJiRQyhBWNRLdZvi1G4fSqGvmJsLEaz",
  "key6": "234koYxirJMS9YCkGGfshFQdwS2D9ZXhFNn5ijsr2GTrRcrQ8CzkJE95SCGy35z64FVbiiKysXz6nDzf1BKUj2jB",
  "key7": "5oVQeqmFxEyvrAeGuaMJNykf6dK65oPBwLUVw5z8z5j9LT5X9CHGETqC2i1qgxWduMVfbo6MSP6LhwHY8SLYChH2",
  "key8": "4k1QJMDjEW6be49kdDdLky1n8vewGdrpF5fGxGmAMZwybLLViXRAyqeNMvML7pC65ATJrz7HozACmnWcg5Txhubz",
  "key9": "2FG4GfJcsMizMqLSqKrrz5ymmKRTaBGBfTBdNJ8KBt6men5TrgdBPPJBQqkMnAunPYXL68iuuYFc7tFCYYmkrcKg",
  "key10": "Nb7yLfisb9BpS8czTF4kgcxUvUUWDrbS5esFWFbrn8LPSopgevJXhNPVHYAV3suKCTUpqzWCBHWWhomd4mtHWms",
  "key11": "3imNW2b1Vhk4VPUkFVQrJ9HWv8nVknp2DNUt3aPXYiRsd1Gf5t5AiytpgrW47TiyngSM2pVxcrCTf8PwMFP6QqZD",
  "key12": "2VqurYtHP2MJUp7b1orCEACWPnHd9CvdpJ2CmmRepLAbm32k9DRcpU7QmWhtjbdRAikeBDLgvHUvMAWf6jCRoh3Y",
  "key13": "mZSKUdJaJdBrmWrzo4o1FwXppo6pqn2pmr9uD6i34UTdxPQfVBPdyZcqRdbrBd4FXxwiqgV2bLKTdW3F91jsJwV",
  "key14": "5wnFeXbbnJGVNfa454iX1dxKVh8wusKQk15dpQXGAUcZuEy3o9h2JnS4RD2mZAzVSwhpsA61QT2rPLGic7vETcLJ",
  "key15": "49772CpriUNbXD3XzUuJNiWSwhgXFpYBmZ8y4o5KUMrcazDBAzyY4qDnu9XanhKFxEPbWBtvhW4ybXvGgPyjW4tc",
  "key16": "5vWTe6HoiV9zYrGjZYxVN7njJMS5EpCtVNb6h2FryWcnhKk1n3uCMnmCzFa2hSQ33PyD6XPzp9cJtCs4BV5w5fCj",
  "key17": "36zz3rMZX96Zp11t9j5oH4Aw89otPQii6vFEwUPbcRSCgckJSoTY6EBtA8xZTwcJviUb4xjzDD9ddfXjdvtgVtcd",
  "key18": "33owjFqfMUDZEiLykS8u4DVcwuRLAdUW9GRd5FqmFd2rz2gbt8gaqDtzCYdiaPBWdJeNssekGiui1ydta3zfMHRW",
  "key19": "28RVsRZRHVQa5NDrQKKp9S1ABxKXqvnzzssLHMh4QXgZ7b79qrdXG6i5sKRNKwuiMnnfSwJe493RB3YiYr6jfVY6",
  "key20": "2dSDw8oTM511JGfzJFWPENY6YnzUoXcDSaCJTjDMaZ8eN7KAUicBJi3ePUgVctuT8h7WHgGwKPNdNThppj7MoFPt",
  "key21": "5dMmYkM9geeuWFqfcPiGiDQKSsGZX5twZjVnhLaag6x6cd6jmJkcSo3qA4uNA2Ga33yfU5xPQSVSzXAzet2fq1hD",
  "key22": "fPjFjU6hE6JnbzcxuJH4unqWb3ejnZM3xvEpiu3LiPaYphQXaC1AC1fF7v3pkHMxzNFNptDUBVMnouKsmMC9LgT",
  "key23": "2CT53VuB8ApWDYLbdqrZJzyNdf7JZxJzdoxWb9E9HPhYqJ23fWFQrjKRhj1ZwydAqECDEASwRSQikyhy4Bw62HjH",
  "key24": "2K7HXD8t6BpLEc5DM5Mg1y3tbizbtbXwFNntkf95ZhBoHnx97rFQa3YbSVZZuc8K7zkj8ibCLLwrYHsGvtaihySa",
  "key25": "3cUbEWpgZdq2q5UysYKmGYyNzsYaVSXdnEidGoAMQ52NaGHpTwjJVAVu1jPfuNL1qvfbd6NSTrn4RGErNuiGyMDQ",
  "key26": "3Vs5ypev2RW84SjFbprdair3mLDrihGmFwEa8HijukcdyDRb185US4Amtpjqf45ani5G9R8z1PMNFp23DazitvHA",
  "key27": "4kcdv4JaoUh1srS6pubW6m7AJhkEjmtYSsZBCh7TeEUGYuUop1Vv43Wag6y98JSgDynoRFTYSbvkWppfV7RVfHZu",
  "key28": "3RK6vUnbxWSea9drnf6jNRiHYLdx4zaafn3Q5yJe8zpcoZdLKuWnuPRpBf7V7f4mqKLm3uq4Z33K5ydLdRJsUanu",
  "key29": "4tBL1KnhGMrt7oD2UB5V9a8eyxfJiYWZwEZo9sMxJzPvJcPDMwJuLvjnq6bKjaR6skDTkQcRohuKoAn1pQSG49aG",
  "key30": "9BrGHnjcpVCELi1D7v6ZAh216WRRpWrwGTM2nABis66TUgYRnLfMUto1tz38H1FSWYi2yKA4XMXGWFKfrCeDuuX"
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
