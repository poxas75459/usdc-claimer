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
    "NE6ASWe9UFSpi71V2P1Q1Cw4W6vQYmRzz5W77w1SE4jiT56pmnjyBiKQtNig9n9UMdP4Pnj6dk1287erAFUUjNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7ND1ASHL2xnNFe6iidbaPC7knrZfQVYsSScmpXQTocSrqR5DjLMdqxhtgE3vnDPim5QeLh7Tej9sfMLjxKNHVq",
  "key1": "5382zLJ6CConwAxXyhzWSbnHNkMy5rjR1XhbwXTfaYMAJkcUR7DZoB3iJuAPfTyvuK8x9U59BFftAsdTGMJ8mFxz",
  "key2": "5HM7RC2FoX7EJ3qKq9m2JtJGt5En5SdXLDeG4KdPJqDTUYeBWozH3C8kmuHJeSbExAdtbzt6WMuDhVyFw9UgBide",
  "key3": "4nTrL39VuyA7Uhmd5KRwWWndDt43AS4ocp7qktVdmzqtMBAGX7EfTH39UpwXcQtLwzE8gxWmHDjucbBWKdhwZJ9Y",
  "key4": "RnZfAGBVyU2Mdp8QCPVBcxBDJMYugYYzGFL3LbRwjvp1hCJYKrZ6vL9GVvjy5B5tMwkp3TLuFPg47NYfgoCqmg1",
  "key5": "3Lw4VyTJFjGKTJAw5GmfNFtMaHJ9YSf29LLjxbgs8jfHKY1XmrqvGZqrWbB4MwLiPjasEJUQ5kaxDRJq9ZWCTGqb",
  "key6": "57jhU3fPdLFxHB1mRQs2atigocQZiTjQhwHk9Rs1PPvjdJ4jDuGBFTjnxUQAp9ubvPFpzNuqt6jmsfwBjaRGco3Z",
  "key7": "U9GuAtu7GgbsMgDasZhWgyMZUb9Ed6qudcW8CaFhvX4vYVFdioZKg4yeTvZzwbekLcDbYYEJp87hyxwdorzutEg",
  "key8": "2CGCgRfvWXXsbgyKa1TUn5f3eyic8HdDrXB5zoRji2GsF6KViQwtb9HT7F3A123GBFH98JWbGSgDNVnSdr28zZrc",
  "key9": "3G4E6DpEYzDENfpdqELvT43cfjTrGrzbQet34PeEuRQc3iTjWhBbnBF6yv9s5kW11nnWMBiscouUbVFgwFYVLWGJ",
  "key10": "tbwkoj6hvMsqEfi64jgC2G7SCwGcckSCF7zsndXwaXSwJes19k3TmrJ1ugcUKh6dxGTu9X89FFyGo8vVJtRN4jv",
  "key11": "xknxLLfE9JkXBSyz1eK826HwqQqpbQKSRoZi4RArk6D2dMixYRtNHjSbjNgfUGSPVm5PwoRYBZtRcgMmCnP8x9h",
  "key12": "4hXXKyDrjegVMxWAHb5K9qQQnkRLDJ19nggteESs8szttDQCKSWQAoDMBQYSzj7UbAmo1T6RgB37gLDrJXY1KU5X",
  "key13": "2DZ2PDtxhgLoykyVcZPU1AwCPoewDWZmca9rJBT7GVdCCuiaMLY7ncQiRUGK7suyKG8Vk6YvycBi4mFyyq4vJjU5",
  "key14": "qUD7kLf1f73LZ6teKB9UwnJf2KPbbBt8Uay5QUBTxdqFf3w3LYAKBuTvxCX4nv3wL5CjC9ncmpEqRwdLWDrZaAr",
  "key15": "5wEMNTBwkwVJF9bC7qXG4B4vo2kQeF1nBEbmmu521dZZWd8SEgFwwBadkmjYiU6GCWkmhRatNMdwaV7fZsbvNMvw",
  "key16": "2gW7Mbp6DLRU7ibqvZNX71Hb172iNV36XSimQkPcMv663urYVVBEWwSDSxswZsjy3kRVXe91LkyiAcc9CF1Zhxk6",
  "key17": "4TAA7wnS1mKegJuCFmtuBcfhFKdYTVKsWqmzaK8dYrxXFQe6A7QLi9GoEP5bQ7754phkQ3kaqq7xWkUd7zVodYQr",
  "key18": "58SdEVwkWdGsAjHVH6pzXyBXMBmwk7UZrUKUy35rLcRq6HRmKCiYNeDVnvhAypATJEfpq8RNUgeshCc2nNFqN8tL",
  "key19": "4to5oDtbxQfRuX13T795SnhB4f6V36ypkhWoM5XyH22wsRHdGPyYsm3hvkfKJciqmqa8cfMEsNeJyJUggWTk3rT9",
  "key20": "djgw3kv2JCrmqXbSwGfFGhAVg9zhoc6F2wEinBNDLpt9QnHrV4mRWz2Emn5aVWCv2zJvGHm4fAwGB1Y6JJSkt6i",
  "key21": "5bXLCVf8tZ4Q3XUXDRBXYAFY6kERmvm7G9rTWEs1bW2HSdKCsDcC3LbregRYcBb4jxu84z1NbbbbhQeCy6yCNbAP",
  "key22": "sSULbZVu48JbEnUBXjxSd9mMLwnBCfDU7wkr1WLFxpshqpp1cK4yL4hYNKa52K2bcMJ4PRC5djMbCpgxTBUn6Vq",
  "key23": "5NxMULWYHEVz2dC5mhYbKDErHvRJqrNvezowg52jkPfaHofQkaQpJQcQibQJUAkUaL3FZeaRRYeM4BM2VFRwYBe9",
  "key24": "2pmd35JHufBkNVb4wQYxUHsNmsW6ZkqLbr7ghkUdeH9dCf8MsmBAoBJiLpwukm2db1Ju9CmmwZHQdZ4u1eEBNnd7",
  "key25": "2RSoyRmJUctGPaFmi5Zk14GurguuuMriKUpUBtwbGPMz6NsLx76gyW98MvwPWRXKxyemfPD8fb52ZoB61oyavvnt",
  "key26": "2RFypgFEMgVSE1twr5q7Jr7onZpXCzmeiERAL7RFusXEEPfTQ3w5m6s4CNAK7mEiAsGMRMrWT3XukADTEL8DTH6o",
  "key27": "UxcSWdogn5ef5njh2RWwHS9qZ1q89zHGpocHmpZrjqqtdTSZhWWVdFwKgErcx7o3moYGiQyQhbA5jdUytfYykv9",
  "key28": "2AqaaKzzzzTDgWkSZbV1qMNthdvodkLS27s2t7By9VS4A93a28T2kgaispugPDHtVHRts6mEZ1Ra65XzeaZSqFdD",
  "key29": "YLYtKwrwGEm7phjtvhHRhfkXC6RTxae7T3UaDHpWQjNA5EoAbCpkNwoLRvEW19nLq7N7eAxRqp7cL4GkCwjjL1t",
  "key30": "5mSgXsZuzmDcfqqPyN7RzzjsewKY2W9Jxm3Vkuc6vTL4UGLoBQMw2wj4duQrvgjz9f3gJGxTNJuePL4RokfY5Tzh",
  "key31": "5bVhQXMVpzYyVDgHn3q7tRUBC4qj6MZfMay9fncWdmELFCELdJEdBXYGwVMxM1C36jdfWLsepuZBaZSBgf24omRr",
  "key32": "4hVq7gom4BRZXt4qYYMRr2ornF9pb9qTjAFAzGhPu6NXKgyEUDtVwNDGSxGeZZgNxTjmJ94QyNtdMFArosGwyrLV",
  "key33": "hLqhfGDpLzNfeE3vPrLrQQFFUrh4ZxgnWeKokJG2ozhK4yxfVp6DqeG2J9KByvweVbWPXb1Z9ih33iQE6V3xdZ8",
  "key34": "34RypLAbtVVrKGTVJC3VZFsmRs18o3PVecJ4zGUAB5TqD1uACwDZMqsJLJenGTzkMedwcPwyhPo3zt7KHxi4fqp2",
  "key35": "3iDmR9egR3RzZ8mPX42DC96wVBJvK4HXwiJyVRnwvdzqzmkPa69RyUXoBbGZ5xbL9Fy34r5gpLb6rKeaBUHFhCLk",
  "key36": "2JFmU3ZuPrS6YXuc7hsk9rA6bHZZD8vqqgCfFMxurFQMKTTVkG3U3q5SLQQjEKzpiTgF7ehoXpsaKqYKMotDTAoT",
  "key37": "55td9cTaAtkhSF5oYp3JVxsT1Yky6WpBCNL2C2H9oZpLyqW5wxezdMWMXLi89jcxqjL5j9WYkYt3ohHpvCY89Ks3",
  "key38": "3UjoB9gNTeGdSbL8WWRzZGZk7crfiu9UVR2F9NmuhpNvYqongsa3gKbywVYT22UvQsfiDMVDwCcURkek5GEUo9dw",
  "key39": "jzQQ9d6YZ7tKfqZJ9eQTWKq3XBwad23xhrdi31qM8Y3UNw99xgmAr7YwSP1p66yfJdmaA4eBaFRVgZWtNTtJZpf"
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
