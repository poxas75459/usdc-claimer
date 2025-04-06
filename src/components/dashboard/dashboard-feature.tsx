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
    "52uxqkFXwJHg3xgrStkRZgB7FZ9jv45m5f6UKYvcEAcTaVoYk7sHDHot6Z9j8GEMbFFLKN67TQkYbLoB6znEXWdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y3stkmUffUtRQ62DS7ABjtUKoerLoJGd1nnpd2X4SkF9SJd2ArcpBMcTka1fvCb2s1gvkMEtMSZMpGQB7CVX1rN",
  "key1": "3b7Ga4yx6mhd8J6thJXmRGJCwjWQKWGmfmv5rvME6pTcWCDwVxA7PaSo9yKbfxpnSwPWWSqhAiKPY9GNqutXrJxv",
  "key2": "4WCvSJEbPjySJYoVo9YE6CD5Q7GLfb2Uy3C1Qg3Wf5BEYaJZwA5obtWauvS8CCCW5ezrbuotBAniXCE1fu3Za1mx",
  "key3": "ex99LW79kjN9BNSxBm9grWRpodyEW6qRWLESNF6S5YXd2Y6X1oNL3hakM6jDtjmCoMgCDifDZW8iipqxYqiGuQ1",
  "key4": "2t8nWBHjLDtG4MVD4hxHu5KbwwUoxHB3jKLYQDF6FMT82jxQkD5UQzCtFibTkauHQTikz6uyAqrBDpYShcDqpqou",
  "key5": "2bAYuJzLciRaBLNthbY8QmbcWWgYMDPxnFfxUjgahcK3xgAG3k1MCoD2U3B8mbBuxyY6JetyBMVURqmrMwyuD5i6",
  "key6": "3PmpbZWDAvtztemF517ychJRQEPNXy6LvtAXE4himEgXQnthoynUXdzJcKmJzp3zgX6WdbxJAvDBHMcVCyiaL5UZ",
  "key7": "kqvyKV9iRAtYdcQJneMFhZuzkNzp6DiJhuv2tKNkVsWfH6s4CAjzYoo6kRuQ1TNT42YMEEwh78YiUFMf2PmTQHn",
  "key8": "5wsmPA2MH3DsBBc6yVE51q3BVkMnZodF481aibTbg5pEwCtKbFFS9yNyexkepT2AnHYXeWmX1vmibtvYZvwoquPq",
  "key9": "5gvxTycJXtL9G9aBLyUT9GRRU1Q1pugij5AQCzQHqe9fp9139Sc8wgzTPd69nzp1AQmRBV3q9YQQQ8jUdWmcyL2n",
  "key10": "3GkfRaKvWx2gim8FZdLHXz6DoJDCyrYowwLYSJE1u3nGM4EHxdaRcKgQXcWpeZDvPdLQca9p6bDYMw4LLtCr4QMF",
  "key11": "3iyHXrJfwy3u3dAJoNCio4cYruz482qh1HrnwW42efjjNqG9sGcHbYqL11CjaGB1bPn7nzZ9CoURL7VvqzrmWM9G",
  "key12": "3eq4KMAeWua8P4ww5cYFpKpCptJ3Eywrzh14KUjtz7GqF9Dj6Sj9TmDYA4Kst7rqpjutnMF7TgpMxRZ1WzZsy12m",
  "key13": "MHFzTfLZeKbgWSGbfEjGDQuvKsk9sxNgGc4uTAkDVzJaD8i3ifEZgwQZScabJF4Q3LCedhATNDEgj8y42Azmuw2",
  "key14": "5oTTT2gGN8pQqaBXw5KF71M56Vv1mVzTfu6N3LB7yWamkzi313tmGeNfip85Dc3iK9cLj98qoNv6WrXz6SAyCQyY",
  "key15": "Mdiq1xtovnd2TNkzzGFzQqi9u56ZNuVZgDrH3fzVkf1o3BMjvPBtpmVKWg1QCAn6GRanACVqFUJ6m9TXydJm9zW",
  "key16": "bd89KPWLwudEyP4MkiNjQ8sJkA6AgWYuX6C4WqhjfKr8tC6VEoPXc4fmbHkrLzeCcYeGisy8RZdkJe7sZcus2n8",
  "key17": "45JHp4GxYE7ewp1nsBwJRtiV6iuRaShmzjUgvEF1cve4YgfaPi2E2PQcSaPn7KXDPMBUSimwu9Tfm3v1qnWJ4fjZ",
  "key18": "2UQvKqR9MURc7VkdoL8VbPd9YuEYNz7JrQkeFWxnUxhPVKhRFCZHJ9roPaBW95gunEvrMGACJHDUb1pXAtM5fFmt",
  "key19": "22Wideri2SbWFKqMtov8hSyRtVkchYbF8Hm9vAPvbbw1iXzw95jjorNgmPdahRRoUB2XJgjNQje9PRWxM95yXHKS",
  "key20": "3SmzDvAZs1QRiYvSscKa3JSpct1bt5rM6YE4NrcT9YvR8wmGpRxboRrxyL4chMZaCY3z7KjuARvEmh5ziWvYzTpt",
  "key21": "UMdCU7JiceRF7tHifTzS4du9jyt7GFsHEsMNhbjxz24yKzyWTzhvSDSrqQJzycdTwNbmGGWrzkEEmGei5x3MtVF",
  "key22": "39TcBak1cNSgumjy2DSwMLjiRtQoQsmE3c6M39cvD6dkr5U4sSKRfdAdtShHjF1fQvYzycbhBvaMQYcmBp7dEHDN",
  "key23": "3Xa1hLsS1hr3e3UJwo8BZGub8hvSwKf1mUMUFj1mCiT8ovtxnJ3RGphAiFdkMHjU96Nof16cWysoc3Ymqu31Zut4",
  "key24": "X8oS2L9qSdB4YfbHJMkFrTJdzD7mVY5UBz7nMP6KavG9oSAWyadWZixM3FL5oFyFEFfcvjNKLk3c7sBr5L4tK1p",
  "key25": "4HzRw6znerrtaSamj6gKrfaq8dag6yMRd9dacKB331QsrJzjVVwHh9oaXxL7yNfADMSLYxcoCrUJbFe8ct3pdTDL",
  "key26": "3DzdkcfvvmteiuNHxygCNDr1uZ1N7y4Yx5xbEzBEUcWa9WhSLuihMDmeXnksavZdCK3u7J1zr8N1jZDGPF7RajVr",
  "key27": "45GLpx9VQGS6qTWY8XXtanayNHTMzqXa8K9RAXTNLyq76aHfwa5YCBZ5auigNrwHYiVEsf1o1zQB9hAj4RFZU4zK"
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
