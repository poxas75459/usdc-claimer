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
    "RgPyKEeGqbQyJ8u7ZZdJJAqLrrAnwL44Yi9WgPRbZJFrWoLJNZd8saV8Fcmzk1HkNuRxkjB2smWtQZHdjNXr5GH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v5um61r5BXdTgrbXacc4uZpGLptUHJy86ZNT8YS9wDckct5BpnPGK3s9pxVv9FoJr3cgyMJr6Pn1uGVzKxY8sdu",
  "key1": "2zF9MQSkF9PAwuFDTuXLNwJGqhqtTVqZrmv9ctcorWJMVkmTh99WztijceaAAY3uMMmRe6YpSiCMUGcVDw4F8mtb",
  "key2": "3kh9XyhvuxLtwdfWYz6dLsHUmUxJQTEaYRGqU51JWqnRUruNmpcPY5faTvchmw5nEYJvx1GBGZjoPmXUE8mxkXt1",
  "key3": "sFUkH6zWvxHxR6yLC3QGrkpbQybGU7YJst6jH8ZBF9FGDgMoxZ4s6LXBaapbgsEj7QGevBJKcQXvQARbuy6WcS9",
  "key4": "3QatiwBTokBGgFSS7GqaS4nSt8YwtXpPRd5xZj7oMMhjUyguK2RpKPZBokoZR8LKfbetQPd5g8R2TYgiwPMuGYtr",
  "key5": "3qeeJLLYWRi4APJsPJL9zqWMQbUd7j59y8k3EJzNRGFT3pYNFLWVnhcz2c3DCBpnCkyktajEnb3MvWHdY8CeLJDM",
  "key6": "5Li4XaxfPRFDBnACNRDKfzB1M5kPJuQ1aVtnLqSavEFaYhMkPjFDvNdgy5ZYJwp6YSfjRpyNFwhn6e5NrPFziBoz",
  "key7": "3L5rtEfUnpoQFz8AAoJvs9sZZP5jBV3XYBHnNZA6vG4CgrKS5zF2zcivAzTBm4sGr5RsmHRHo9vLHWYsqK9CrbNe",
  "key8": "2pn8kdrVK8FvA4EPb6KzmxNrHgLVP4cSXwRi3gbjCLB3NbV1Vk8sD9QtWnbqZEpSyzz6zDDERsCRECuKtCJjAtBV",
  "key9": "5hGEGNxWAdJSZuMJX8GPDMfLs8drzxRRn675W2wA3EMm2oFCB9yDk1fJt9roGX3gkbQyFvWyAbgK3j6LG32cneRW",
  "key10": "5SS8PfJCDnWEeEQBEhx1P5aCeQrRNrQp5CbepYYm23d7btbGmbwSnoWxMiMxvyFg38vKJ7VD7v2gdTyuQJx3Xrab",
  "key11": "28PhvG3aP1buE6pDaaMks5w93JWkQcjhWvSH1JCFazQHszT32VDEuUcsiFUXknBeuMd1GdgAWGijJpiGjpndbuEE",
  "key12": "2EjS2akxcpBK465WhxG9NMQLQnztj2wUAWxTxkCBtdaAP55nzxGKcQxsx7X6ZwXPKo4LYfTzZBncANHhgVmpzgcb",
  "key13": "u3frH8fKsLEJK9RA8ZdcjF55V2USL6xsS6cRiBTExZFNqzQrsVYP8tGyLTbR7HBB1hc2UkNsDgAHJkoeddVqvT3",
  "key14": "Hx5ATMZa3VR55q8ijuN1M5bQjvD5mY2YSPU7UitwNEAHwxAMnos2RYdN9nQHwNrEtcTe762Zypsm11KiskLBM6k",
  "key15": "4gjK7c9LaF9xiX4sp7c6wHLF4UUJVFBJ33fCR54xs2hqfxoFdwJaS6gCa1c3H1QjumxhNCUUZKPyfTGpkWzdU68H",
  "key16": "55fpo9b7JqdQgEnz41kHJoLKP3Ko6hiSGXtBgXX6PKg3kHD3GkRxGt2it4fLhD1jDHXEDUVKuYDgo1RNtAJy743W",
  "key17": "5UanPZ53ryuhaXbthuMaWbbJFL2M6rmWHnmDXx7kKcH6HCHyGSYd4vZBRuXNLNfNmzJmWJCcKxpDRkWfmNfUucBm",
  "key18": "2BexzGWamS5m64TVUPUWBaFff8aAzEXkxXy7vvaRG9uYVB27qgSWzV84A8stYerYXwPYLCQT15R6sNSBvJS2QK5",
  "key19": "5N4bvf2DA4u4w1YrxUJD6XjB7H7sstGuh8bEWYEfrEB1h8s4SpA43ik3GsKYnj83HvpfgZ78qHiqPDg6xTBRmS7U",
  "key20": "4ryAHX8gbC7APAt4qCQc4BVJ4EqhgWGLgDxF1bpWPrKde42BkTYhrnSG5LLhWZb5Gz5usSyUemxsgjUxe9Vgcshy",
  "key21": "2dMSVnD6wfAUJ9E8igB8x15i3zneRrJVUZMyDXfBdp2wyBiYpm6vd84B3YDNrqocMjg5r2VH9o8YHRh5WrSSuNkR",
  "key22": "42h1L9imNWf9PRgMsh8A8GnGUiJurG12coaCYaB8rQrH9o3bpkZPPKaXWzD8npDwm2Zyn3Zktuujt6wjbpiy2u5u",
  "key23": "3EV3JrDufY2PXZR7NPdKjyPJXmABQ338dSt3bLrfhk9QmNQXX3daV61FKAtt4TinWpT8fitxDkdUQWGWxVWpm9zQ",
  "key24": "2C4kdPCg261zBMq67JFnC7AMcVqmVHKHWAtHBmbPR4NwBxbcT12u1dYbB16856adVnztGGAkxhuZJsv9sdmZBENe",
  "key25": "43z7TNfyFF8nm3V4nBuZZ9UvmPYBnCrRP4296wdL3XSCom2tQ72HxRjKiLMhwhCCt75rt9ZDXkXmHLjrXXBLE4oW",
  "key26": "3H3AbqK1ZN7cQCxwRaK2RZxfvyBGg6boQPLsXN1nAj42i2BhkVTD3nMQHUyw1x7dcnvoZY7rPL8Jb9m2jCrcqDxg"
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
