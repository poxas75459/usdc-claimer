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
    "3UhoxyZEMwpdRYmS9Q7QZCzB7AANTMCpzHdLmzyi33x2virnq2ht51oxSsvEuVCHFhexbcuu7Bcvr2b9MPkyTVdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MHwNuDDM66CuYyPnxCF8869FdziXaYgZGmWhbhGtmtykFZzKsQGKCHDxVEtjWDjsr151BGDMgK5M5SV7sXTTJxo",
  "key1": "TBtXVfiGFXEk2YSoSCGRmLFhB6NuGoXoZFXbZ79aUwHG1xxTz6L8Dni5oqDmvognrgAWiPooFZVmJhJjDeY29DH",
  "key2": "p1GkfX9mcPsJDW2mUYKo88mWV6b3TfWLWR3kZ2t1vdcNYGx1SazLCYGmnG4q9zTkE2G4ks9gcrxJppbiPe9nfov",
  "key3": "G33VwGisoHEvKLgpk6Ep3Vebm92RMWkjnkydQ5bxNjsSUJmtXQn59sCtJGmEJ61UMiKFmvj4yq1jBNB8JMCLYuE",
  "key4": "LRUh5DJHzN2iwKLpEdooWvMDDpCfw3EpJ7Jmc2J5vRVthsHiLiV2D5wyHLXYMfjA2mZhYxivtMmRa96MeHnygZR",
  "key5": "38sPmauozKXN1CwP1wu9ScrYkXTnwdgMhdSoZ98wvdb85Cwd3TLuCek5YUU3QktFKPdyHDDTQeJyC1M7wMbwQLmY",
  "key6": "3tMwUqHCkzuwkWjJabjWnerv6PzMnLRbmf7RbjXG3KLFraYhWyAtci38jFUoTwquCbc2kucdEXoYHEZbBu4kYjBT",
  "key7": "2hiXuD6FscWH4fzdfQNNQAqMvEA11QYs4CZ5UEJiG5CkKiNdkYCxQourqPXRJxZPKpephZTDDb2AjwD7wABPD6Lo",
  "key8": "5gG46WjfnfqhtLRVFsBh6MfFawJ2LFfpYFYvQ3vdsDxSfF1PQXNqexv29u38wJe6hp5gs5SjT1jBKB2b9ruzRvu7",
  "key9": "2r5Wa6SCP9F67wnhDfX9gaMq96pzmDt1b3EdFvLf62ZaqJiYkuuwaY8Fpmpmm2EfE5c2UvHcrvtxxVnNgPefhk3e",
  "key10": "5r8kGgjbS8cLTRgcyV1bL88ygc3jinLfb7TLMVWj8f6N6aVsgyR6GxCvWeWYsbSC1FszfKw1m5LXPqYzGkjK6cY8",
  "key11": "4Q6jjMzafQnaU3Yzf5c6yisKASG68Gq3wvvaaoP48mBJZDcF3778YpN6VtUph1Xb8aGUvmT1K1etnbfszyq9Puix",
  "key12": "2f7RRqMbSKyY6D2DcDECHQ1FuavZipT5F7CyTYyUK86VnX6c735rqAcV1cjXfSJJKFGYGuNaYKC6Y1NRdC61ms8R",
  "key13": "9CYhBFFYG5NHRPQbCXN1HUNfXw4RzwvF7aqaouE4PQpz6oq9kx2r1wrwnT2kPXuDgA4Qz58A3LGogk3g2t1oMhy",
  "key14": "2XajqCGHjbDLbnnyWuv54s2GufLx1YtHqq6po6DU3Q1NHdiwm7hZirE6S6DrdRdwYaktHBhCLpBFqGBiaqXLDKh1",
  "key15": "yxzyQ5RMrqiWiyx5eHMspPETUE61aM2i8HnMqrgBPJqVPB5bsshVn3t5HzgcNWqiJuwwNxjAy4w559LK3VkMpMu",
  "key16": "5ubFpeBGs38cuCeowqwaarCmQbrNzgvZ5XPZiQStZWSAK8oLgXR7dSwyxtfDQMgkva8s8xPXYMKVZBggqL6Afaz2",
  "key17": "YGVe3E92PxZAtSQ5e4JCBFHtP746gu1BpjtUC9n2o4bi47eRoVpVuEvgkeUzewUEWdhUr5frcLw8RyM26HzBfjx",
  "key18": "3ZwAdQqjgkiP1e9vbKnjGZ6PxypNuvZH25rJSZP1NAoRFPjcWfaj9r6B2t4QMr2qvzFjnSapY9jAiejdfGaWwDbH",
  "key19": "61KXKogrJHEqSUHbmf9YUykdJogNayfUT6eQdS69S2DquabRgBzuTPWvggRhNBGXfpxEkXhfa4VHXj9a58Lmfe1B",
  "key20": "4oXcWwzDHQLHsaugX3aBvX4H7S2xfn5es8xWsPqMy4XMSwMyaThRizAyt2e7AJfyLbJZAuuJqWdAaPqyRBv7tdW",
  "key21": "42Vk1memovBJtopX2KxePD8CWqbjg3tHTTqDPL43htHhWNfUDXxW6cGzVX2GgDtHQNWTC4wZrCh8EC2QcZiihnLJ",
  "key22": "2FmeDyNdK1b9wWZQTbFbdZwDd8YLzpKTXd7uWxXgNKQmKP74RCmWYSEz173y1LyVcNryrVWxcQz9njbkxRwsd3HN",
  "key23": "5Kfc83nCAAdfsz8k1atUWCk6BvUq4WU8zJp3HTKeZ3dN6PTDAN6LqBn8SaSpWkbnU21EoAidNbB3seFkdfFub4Xd",
  "key24": "5mwFhTWCJanFnhaFA3REYZLh3e31kZXeod3Kfw14cJVbKSHi3P1GYHX3bvc4zyo6bEFHVwvDBA3ukHpvTFrh5ECm",
  "key25": "4oUK7WqurWdMouJF1oGL4p3iVspb2bSvHb6RJUs5iApojzTbRSDjaXGHDbq6T1TzSfVajaRZ4TdHAqtRv9fiza4Z",
  "key26": "2JyqnG2nmX45oqqy61YaXN6S6WbSRkK961xoMkGqA41NdJ33ErphzRMtzo7L8bNjqa4no5TPDGAiBJGAeDkPABQF",
  "key27": "Y1mLFmLjhXyvFypoPBiCs4tpMuWSoxe1g6KVg7356sYZjPNvzhU8CQohmPfjqzpM65Pb6vaFha5Y8kcBP1WgU13",
  "key28": "3Ay7BwhxfkDJfrFASJd1yTMUd39T6Pn6XAMNuQeULJSZik5Vy2uQuCKu4yCSTV8DqaBJcoWRKEnvY5E6gnYS7bZb",
  "key29": "3e9KR2tut2qGEcR3UfNHYM7kx3gSnofwUDPMcg2dqLMdNMTVtLf1tEatCdGuB8ofCU1EJL6x9e2xW9wjFisFQ7MA",
  "key30": "59VkEe6TTD7ujnFm9m1RvjQ3QNpJYqd9bVse5zTaZnHRKTts33fS9hboUdSsQJTqa2kMbLBNzPLcFzt8gpxG8uLk",
  "key31": "4yAbeX6A7PyyjGoqiAn2PkJjwJF7kzuVC272MojQj6MaAWqnG9JZsp4FsUxgGXcpmjRzDYwwd1nC4UyFFXjusUXb",
  "key32": "2X3vaWga7TQBALHSRzb6WYH7XicWiFgssQ1RqUAtY3u6QYhWLo5s7PqJfxpX7yJsobf5aWqBcXSJiGhVsPFgoBSs",
  "key33": "5BdHicNDEZT2voFfKqC2E5PXf7kjUMmqaNyJVNzmpYNcUg2Henkvb93ameU48d7KPCsFB825rQjyeDdfszHwWKGx",
  "key34": "5qn9kFyHjRuiY8shFtwqEk84KEoaYKMygjuoDZ5n1umaWq66Znwkz8mzygRqHb9pkho9kx6SyK49SCRV6WBsZSHD",
  "key35": "2iwzUj6BMo4CKY7DYn5M54Uru84q5gCXFqRSsqMxAyqKSWjJM6dxF5F5nPqbQDbszzfQeXGEuhD21r75n7S48F3t",
  "key36": "jTgyb9EehdJxmx5Ey59JP8LbJHPfTFwXAuRZpSjKR67wTm1fBSYG9QBiJM4b9byhuP9yyyWyxAcCwS71gVf9jK8",
  "key37": "VFNXcDAxntjKa2JLLBGFWAx1G4c3QMFkSYefYgDk35MHDzZcvbre5RtDfuPfcVThbKwJriybFBEHh1sYARUrSjW",
  "key38": "3buSGz7LrayvGCqEEuNbkLr44Njyi1AkC8gJJFyti8iNh4aNuD2XLDVe1BU51J9wQYFeoNMQGccnmuAbx19yTCcY",
  "key39": "65dbKtiadaVQLuEB2WA8Sbfon5N2qsXkDty8ooDberB4VxS6i5ruF79cTNRPHPi8ecDJf9sVM7vkJMmVGkbSQGEi",
  "key40": "5eDMXyr2nk56drXsF6EYDjii8BRZ1a15vFf3BmvdtX6wccUXQ3mDf4qTqfev4RumQMqiSiS5j68QhRFwUGeLhHdh"
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
