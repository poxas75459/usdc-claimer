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
    "vqbf8MPeuXXf4ezjhiAiW4qBRFUZFqzkSVvvt5tvjFbxK1Lh8GvfBjdTDhAd14GgakhMJiJzcmDL9TRzkaDrVJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cmtgMS1Qq363rWxUtg4HX69nMcr2MezeV7YKgcf9fVyRGNoeAy8BPbVB9jW2tJ1J69WMG5UW6PfXZgLSAgLRTAn",
  "key1": "49AW8aijKuo4f859XEH2aea991Nw6QE6JjGqKibViwL3G3uXDRHwMN467X38vPjboYoggCDE5UiXHMbSinrrvinX",
  "key2": "3JiU8bL6VmHWmuikRmSawXgfdmhuuLZcKDZgqN7SQdQqKtaApx6mo8hw3koYpJGGxuA29M89ADACTuH5iRmSKPuV",
  "key3": "C6ou1vc1UQDyCT82WRKcRqBj36USgMqXBmqfQA5o1rFVSErCeoK2jQDn2RGsUyDLTy1hpXjyit3jmvDu98w3ubn",
  "key4": "3zrtrteichpsyG2MRSE9vE2hymULxTy6aLyvjegas9jHigfJwo5uksunRrpEXmaBHGCQo18hQa5FVpEJkhYWLfJF",
  "key5": "4igbjUCiDzBxQAjXqVuv5LHREUcAPE8XEEpHNef37UAmZC1umnLAN6D8Ng6kN4VkXkkreqo5rHBJMccpK9vj3N1M",
  "key6": "4Yzck7co3qNYzuH1NiWAhPQZE4TXaugor7oTbeXGnj1CDybY4q99WqsPCTvp5VXtTzeGsg9Fyy38VKY75kzXsckm",
  "key7": "4jALN7p8y6vc3SywcUmQhmSs4LGsHX8EzDaSVqSYXtV5XPhYceCwpEABtVTcFza93cCSSAcsXF3GFNjQuqJ6fUhD",
  "key8": "obiMKYxWASFSaxNiafwPSXuUdazJHrhMj9JTR6xD9pxb3XZYKbrsMKvBQhmtnacm8G7TiomTkMixRSGyjq219iv",
  "key9": "5YNUdmLV5tNHR6QLPhfpo6KKQkpBBVcMLKmezZftbzDgesZvtrTV8C6xutuDqFzHMnwqcWYvepY2GCMYKV81jtk1",
  "key10": "2hqxVrxqM9fgvawGkrUKEkqxZNw8XAzvR3GX95h5ajHsXCoRqg3xoMbidF74NZekLKAawa2XAAwcEokRF4deDnyP",
  "key11": "5SADqoxuP2LjBUKiAZpgatZW2RT7gvA4f3VT4d76nRyZm18JeCmEVmjkHeqmLfLhHbQpM5qBdyp9RBMQqNNFJjn8",
  "key12": "eGDEcAY8kb7DAgm1nFqjttGwJQEKD9LTazL5naHrE9bA3N3bHeouvQZYk4vnSnf4N6gBA2xZonhDr1eoU2vWp1s",
  "key13": "3v1h6hDhRJs5ZDhbHsvedjf3qAXBZhT4u1DbbzEpNDEfzWc2o1axEFs5oYdWibGAyniSa689pBYcPpgWL1bBzpP",
  "key14": "44qTL42dJGyYGCJgL7WrvhpsvFyrRqweAUBgca2iwois1sWcSRYgvBqwZzRvzeoPhe6oeWrfUxkN4pdV6syVU8Pf",
  "key15": "5PL4RcqwKq4Esv72BxfqUFJJo315FfACp61eNMgGeSnKVMQDJsPHWcrCVEzhNNTioUWVbcVsAxWMaK8sPmxnjFQp",
  "key16": "2jy1KsLY5NdVaUt5Kv8o2c22SmkqKQPmde45oQQnZH9HraF5fPY8Yh2o7a71Hh6qXxeQn5LigEvSLKbe7MEVZtbk",
  "key17": "RaHbPMnE5BcyQc8gwTaza3Fp155p3pWEcosWWpC97B4vf6giVj85kVLixj6BtQXwwzueMaknF91AaoT8T9aP6Cg",
  "key18": "5jU8sSnVezvVumTzygpPS5oTHjJH9xU914be55ZaB11XEDyGgE5pXqyoX7QQtuW98LBZSEkwRqQmmtDcciErrRwT",
  "key19": "RAkJP4EqhFqeXiKgptLCi5kymmhiFV6AU5gbNxnjc4ND4HaZDyPfhCEUni4zZkbMeXRL3tspWvLwgWZcuX6W6iB",
  "key20": "5LYKj6mTYRY2DfkQzzgr2gt15Wk2XEWMYJMB79uNqHHX8wqF9cSDK5jzJrYyGN1MRm8G6WRSuqC8BCF2UydDggZM",
  "key21": "43mj7NdePG71Xia3UL5wjk87y5tQwdiDrCz7R2fuQqR7gRgpwU3YGBYG5wyvpTNafyciNNi9jXWW6Dy1FXqaLbY6",
  "key22": "63U6gd1Q27aRUq2K8moj1M8FRuxpCJhNxKAWAGsMXqRMHdHXAb45HyfVwvh2jAKTKfYRCy5WHSd5RW51jWiKQWAp",
  "key23": "4ptJ8EAyUnsq9qWsBgoEzbQFPWXvLxpLDZBimBrxkdxbuZR8JRUEfHdpaWKZUht8MF8aVgd4Ptvff5LNDg1RJUY9",
  "key24": "2HXx3fL1K1Fr9DinytdyAQQmU7ivshKofh2M76XQXG2h52ZQe4cGBhgbW8a2hivCsJ4t2ui3vuEGaNfhU6gDt8gT",
  "key25": "5heNDqbTxBj97yVzcMvwRZ8M242peWYR98ZNoCtAvC2ax5Qvz8jx7kfpUPJpuLDzaENTGofAaUbuS1Ekhho6FdNV",
  "key26": "5Jfc2pqewGgBxjoTE51TADDyVCgHWnu383ZtPzjoSZUfgmcEVZuT9SFs1mJVaa6Mn7VHcEaDkj5P7XhqS15qUnkG",
  "key27": "3SJWJVsHd4ugp3o6cdi4u4oMqYRazCp2F8LTzXW67RUsEWc9rryCPDWZDFoLtntSF4tJ5ij8oSspwwdpmEWHKPAA",
  "key28": "5LwK9nbnRahpYtTybcTpuNTUmHLnQMx7PcRNemo2fxZWXwPjHxpKa3vcLqm4xLf5uYUKXbKFuSMG9fTqbg1xD8cq",
  "key29": "3AmxgorJjdpQZiTXgYqBCWb8zDnRyKwMcubKPqsKeow1cnaK9tnGRKuCn6B1DpvVko4zUuW7WxzHuqZkqZBbm4o8",
  "key30": "4HXP4XqvBrwwgAG7aYhwJuKVk1TaHcPa3PJ1JMGMYC5eNfsWBn83MLxEd9XvBdGNQgqaKRWsrRoGjmMML6NkCW24"
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
