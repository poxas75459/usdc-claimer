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
    "4MeisiQ8ygdpzxgDyGJHmueNKErtaUtUTcpvzcwkrRXMy5edcjCa7jbLuWEC9kg2xDUMegohHG8GdbKMoEWrabDg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ViNdxzFAef4xvUBV2NdK4cW5XeEu8FaQftbcVe9YGE5AHvgxmT7HbuWuvj17PR2fSywkHeafR4nBY9K3JUU93Ny",
  "key1": "3pP3zyAePFCBfTyH6jjw1fN4jYhJz5YTnGsbopsPji2ETZ3KdGbtsQe8cvTz4btJDfJURYoYftZyw9BPbqdCCaJs",
  "key2": "31E831hUb3n8TAdyRuR5iDf9dcR5JPUZPNNXmc7jGQPNve57saRbvpu6iowQPpe3uZrRzQdCMteou5bhFFrzBEzp",
  "key3": "4a5wS1HSkaf6fHGcL4jBDZWEAverQNhKZKpxoNavhijJXubxUaTdFYaS6W9tW52ndEXwzVRtfCCXXqLxNpMGhMRt",
  "key4": "5U2hjJJfxpLuKAzD6XBMxxGXYjMQ45atMGx42hnTVAXU5kaeWCCpwXowxF2LE68BrZCJGgckUNeghzhVvMLF8jBz",
  "key5": "4djnKRJ1a7qLwrdiPfYq8cAR3iAZWkD9dozqHCZ1fDbNsEpxTVDAdHXtPe8iPaM7Cq6yEA4wmsgF3TFLoe5Avbpd",
  "key6": "23NdjhT6ZBUZGQ5n2ssugtrfpuBcQACox3K7xfocaPrCnWBbmX6a61uYM6LRG8sojLW8MTuirZjBTinEem7cbTgV",
  "key7": "5SvmivAZYmri7VvR2wg4CSUom3sKjwsJvrALDxhp7GSaurWNdj8KayCUQB9XrmwCfosw2TFcVznqGFnPQkb1gKN1",
  "key8": "21cEofdcmopza9FspU3xn51TcmyVA2HKc8qBVMax6FNA8uXUyGgKBT7ZpkKFwgXdQFD2VTonryYrMyisboCs4y6j",
  "key9": "3JgJPppxH1WvNQRRiXN1XkJHSgzUsaKEbNni6DpUrCD9vN3JrXpgT1BvyMMGN7dTvL6ELWtXy857BpFKNz2iQu1V",
  "key10": "4L2XnuHMfWaGhGBWthwZ1Wx8TpnmCFy9PwuceyHvvDzs1jtkEw11sBLK7tHNQ9cq8FYJ7BKoAu7Koi73Y75pMuQY",
  "key11": "5ad16d6w7moLorNbyqv36unMFbDNR3Xf4tEFDGT8PCtMwNbVWMKgKb9tD7v4N3HokKRJLDK3QHz6NFb2QjbXRrQa",
  "key12": "5MzmhcrkPf2kN9ZcVqR9DY1QGv1kZ32yrC3AMGZKWKXoueqdrE3kmAx2c1g38o9piYgdesuPtgEFzhUYKBNaYPkt",
  "key13": "2gT2Qi3WWw1WZveXFhz9dVSygRreyUB7bRUzPdKgLE5VytdddfLhNzgzquU5Y5FVBGf8Kw8aRETqnqtptYkxAK9V",
  "key14": "4TghF9665UJ7461dQbNJpvgwgCutzNxjqDf66Z7cjUyNSPeY9R7FWaUCHGmHMx6ZwMJg3EAoYaq7RxsEfaDzg5LS",
  "key15": "j4kPRHTTTeRjJYLyzttgJEi4KsMbmPAfPqzMgRm9CQWWJ9JkZY1rQvHSdmCffTVwYpMdEULoBHH3HHau4e7nKrY",
  "key16": "RsXiBW4sBVo7jJDSEKA16X4FHBztvNN8nWz1FXdAw3vLfMQimDxji441qjDx1YVnrUr4bnf6DomrfXdotLPXG2s",
  "key17": "47MsS25gCWTR5tGjuQtj1an5dkcDCuwB4PF2R8kbw72HgUqMM6KpizKzBDzzCEHL4wHh5PWHiNvHMd8C7xDsSiVh",
  "key18": "33HbGfyT1EoSJamKpZ6S6YdjrjXjjrxFnrGgvyZEXeT8aaFRTokrZGRJVTHmnZVJ4ziLZ51Tbtf3ZWPHrxtKDDM1",
  "key19": "EWwhEiaNvSNBRpWnrPb98LqWeqn4Hr8jiGxczqEa61KrMS4CZohC5T1g9HDxBA3C1dhCzNhZgbqjArKxMPqURkx",
  "key20": "ek7CiBajCr2ATRKzGZ7izFSzFzsFzj8HdNX6n4umRAe7k2GJMd2yvuGoFM6ZkP5gKK3c6GYq6LA7imGwUmQeQ7q",
  "key21": "3PUBCaNgfADSXkPM3qvwfcJkL7pZvvbb6ZxHhMUyK6fSiFWYrvATxtwdm4XMuajDMfLMF8eLso4TLtxFoFMy9mHr",
  "key22": "2PCVdX8XCZxS7LsJ4Ya92jwpiAsWrFBC5mWX5swG5ttdm5XuWkApTo7kaxaiZnuTePmvgx694QbbkxmZzH9XDWa5",
  "key23": "4L6ryRZ8ov6uagMy1f5jrmPbT42MGAGWpVmt1zzhEJHYr1UzAZsNZU1nvbmAarPeRLjS9FYQWiftzwrLyUf36vnh",
  "key24": "uHW122NU7fZu4yZ2erszi2opkyY7KqnPft6PkTZ5FX8agfhpP96JmVJoHs9pqsB9E7Y5K16WQor4dukDpaZm6VD",
  "key25": "cKWpbUCYPBG6hD8Qz8ByqER5M52uQsBFqegZTKyLsZioGctPdnQ86vVDcBsH8VXsfWPhpnrvhLvmLbPYUBUJbyo",
  "key26": "5N2LEgsfz7o7Wt761HcHEGpDockfJtzcp8XHWMn5AbRURMwQUc92x43izwf8zgUBunqDwZCQdeqRpqeRLBMheWYb",
  "key27": "4NqNbyGBxLjaP8HCsgm7Tb9xvb5TkjgbFy1JMneVnG5cPHYE2nfWeJnPef4gL22qHCMHjvyrfkC6EPeq1oZTq6Es",
  "key28": "4GM376qCdJokSXLznENrN83wncTRkUEmG87PqGbqWTbuanhSQ1VkfuXfLeatbiuxAc8ZbBo14XWbZwkuxQfekiQ",
  "key29": "3ER3Xk8SSKUh2rKAU3aSheXUvpt8QMPWGSr4FPSj7AGSRNVc4rT8XTkfg1rPMSA2KUBYhJNeYeFUR7Tod5FgWp7G"
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
