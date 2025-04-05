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
    "27G7wmq28x1BCTN19Rk2FDam6JSvZrW7UAqEERPjRoCwaHUB6d8aXmbLp6VdHCVKtzoJkabvkBabdBwqPQEjUoRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kvb8Qnt8iWLSB6H4a3xoaKKxyJK1ghwHgSnJhjNjkWwJPMZ6298sUAKfgmdQBknV998DgpgMY4fQnHAY6TaJRbx",
  "key1": "2Wuhr1VRcJUXkkigMoYyMtexMTCoBkyaXEZ7PeUzAhTitgDSVcF7zdTmurhH1AgoXap5NJF6gpiBzewNctopuEB5",
  "key2": "2odLxyQzyDyQ7Fey5aCMygRfzSkPkjBtpdj97sJeUGy7vATXdg75y9r9bMqDMw9ArQYh6WsuLmjGBncCgyeJiuU1",
  "key3": "5cchK9ySh9SVoaN2H38EmF66JJYngY4zXfDfY7kVEjEw8E46PwoQ1hRVETiJdED9SfWPjjnemmTiyHtNvdPqkAaW",
  "key4": "4612uZN6tRQoje83fHSMoAEW58qV4dohVnA6KjqwtrpV2CEjAA7odJauMJXyBy53HmKcd4CWTZmAUY5UFDuepPZB",
  "key5": "622QkNAF1mNR2NfKAg7KTdMu2FKS862QGTa27SBSsmzMxzpd48kqTHMm4nGBNitQBxH1enzvK9nf1QbqUjQ23DrF",
  "key6": "3NmMY227XF3LwFiHmHNbB6LSA2g5nbHqomWHqTCoFHaoAmtSCxFYXtBL3AMCm5R7Jm1FqyaKnotHoAGxP3zpyFTG",
  "key7": "41CgH9Tzw1MsNU9VQjKtTYjTvd5mNwAAhfm9EZ7PGGDqxTWZPsDWvdKcjaiuqJXf6aBw2KtaDQFbV39S7x5b5rXJ",
  "key8": "36fsmB8XYZxQCWRhczKmeUBjqdyhbJkP9wRx1fGXxgNf8tHc9QAwbdibTSRNHKJPfLwrMKX94zk5NrwbG3MXmPtq",
  "key9": "5Y7K5c4pQxC2m6shf4b4pt59E7qtt2pvUnRqupmCdiZwY7XTRGgFW5su1Yp5YrJfgRRzVZVmJyqvMHrzodB2zM9H",
  "key10": "2EVRm7Po3ahpKrmeJiFZz4qL28ks9djL7TTmuEED2LLDEkxLVBW9DmXegckivSZ6ES9CAh1qbrgoD893gE6ynFVQ",
  "key11": "4FgLSm3hCazp2VyWbRjKke9FR2BZPkz585mSDqvmgpkb54JhPJtk324qZPZ7RhXCkijxiDdYER6dtfJ2y4Lxrp9M",
  "key12": "4tgQrJHiDsrVw8ZmnKY4yTgK8YnimhjNkNANr9YYkXTtoj9hADax3vM8NHdnFqSZK6eq4CcXiQAos1JwL7H9MMJw",
  "key13": "2uVPqdnatHHrtudyS73wXDjbKoCkNKvT7Ehae9CLyM7MqRmpF8PTFzTU9oaQRo5KUA7b8kj6owz6a9GU8CwiVtKV",
  "key14": "5fyP8k1QVN2HKHEdXXSUfGHPYwBxCFnCN4Txas5ysHpTwpDoBMEW3njQQrLyF7M8vRQTtYWkAiHWoVpagkTRzcWv",
  "key15": "3jkSQP9PEwJDtqax6vEN2G7ASRtSRB7wjMVUghFTafGoeAELh9rmt986teNkf7Jq8qM4aVcZJ8LUZSKm48z8QKGs",
  "key16": "36EXoWMj2gFdAqbTgUMXTeuTmFdoSrxFiLhH4DWKMq9K5w1QqaK7T9bJVZv1HZGg2iuPLzmfTFNtsHekBxMmmnxV",
  "key17": "3fkE9Botq6DopBpnLXCVnTWWvFrq2xCrYSDeh5JU9q4CgoEhDfnwTPBsEDYhyzhZ2fo31WoL2vwt1qXaS8xSNLu9",
  "key18": "4wYttmadGYgg5w4CyHc5hSiAYhgfccey6AXcbamamcenvCAqycjjbMo6tf7V2cYCdC5NrExDpRh1ioLaZGQQQVPb",
  "key19": "31Ansj8r5UjRziuDjXYcu5ktokpZ4p8xZTS8erueLeU4uP3hnf4TDW7nZquwrwkBHep3TVZsuZ4PB7EfLbYuoPim",
  "key20": "3rQ56Cy4mM3817AdsjyntNRz9zavu3UQNgxB6WhBfK5kxmkjFMxLcWfsEAXMN8UiyKL3kYPedSAUtKsF5wFzGD3D",
  "key21": "3yCWhAy9DvF4YDzjers9Z467jr5b4gbj3c64ytSQXAnN7DuWpvcAvdcfw5UCt2vejHzcCKwTPNpd9zBgHiKX5Xqz",
  "key22": "4ms2saRW927cwUEx8QuHE6naEuPge5F3svBH5tWezSh7FVYfUJ1gtPMzg8uMike2irQcWV6yqmMvn3peXgJZrvRS",
  "key23": "331m3WQYyW1TJkf2jZFGZdudXvJytgaLDoWuCnKJFk8qy85mwa1fohZb2L9p8EQc17FALDBMMjA1kmMKtTSbMFYp",
  "key24": "2QBye5pw23XyMCtap3oy76cUg136WcJS1bv5B8JYNDAzUBr7JDFPg2d61Gtmp4sD2Cx1z3P5fCTtWW9LcrNxRxYo",
  "key25": "f4zYXe5ebPeqoLw1iW23neWmn3y6LBMoj1Awp35GsmaXPBc813952oPN15kSDz3HHNVzThZCdx3upKsvWeAeMcX",
  "key26": "4Qv5xcGL9a8CPy4ogqizKtN7EWVBwQuoGxrWrvgffHfqA2FisNzZusgL5iqopeDMtY1mPCBHwgFit7XUnyeRTNnc",
  "key27": "4pDVcU5AV3j6BDTYeUapWjMQu6exx6hRU9H36hMfnDoexou38Y53VqkR5ZomBhV6XPahJhtprRoLjWsHBhBkei4U",
  "key28": "4gQNTUNikBAGzLkaHLP44gsun3niik6zW9aiMzeTVm4bF3NZ9ULTds8WocMBh9niFe9Ct38LKFngbbdpsXoEFucY"
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
