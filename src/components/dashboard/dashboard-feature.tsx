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
    "FeZEBn5Reo5LKHgyKJLRXNZwq4hMHGiEcjH3qhsPj3AuaRb5jZ8Vj3inpdok1gSiEd8AZfm5phS2DRhmS3VKqor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mwjMyzUnQczJUo7QmJx7AcJqY4pGYBeodFgM7kFn8yTM84EjXc6xqPKY5kPeFsGhUvUvyZFzuKJSUoorJ4aWNez",
  "key1": "2epzR7SAVtgRUw7ydRUctxNNY5ZVzEU9AnvEGKn3htrts6qccSuGEqi9e2yPjjasxpzTdc7WBpfzWpm6VfZDRK1q",
  "key2": "5VaBYEGxFutX9RVBjZ7aRHJ4JFSwtj9NxZ1FUcC4goF7DRxJ5fpRUVCuBtoDY5CnaP2DVhjZnqjriinJpAM3wWqQ",
  "key3": "2i8smRxFoeSJAmFQ3wy6u6grbXqXiyfzjPLjCHAu5qRfzBcQHwuMPxnMv1AtBSPeFUAMqZaBn3C1uEXNHCxoskKY",
  "key4": "4GAovpL3z2DNhgvY5f6WcYCuWqT6iFKXHX3A9FucWquza3UFreKBM93KDjCLowSFt2MCRpZWTqJPQiQQoE8jBUDv",
  "key5": "2ZVSKTETNtF4KtWdnSV2diAWSCfPF8MQ1EWrsd52U39Df5oFn7NQmKxznkVD4EWiDbWq5qhX6P8rmp9EV7hjpg4E",
  "key6": "4FDNyL9iLzREAketZAxJoWEqGVcUCPfuqevc57poSRwEUDY9fSv1p2LmuHCCywdCUPeddTJMuhZXBghviSxtpD6e",
  "key7": "2P7C2jRpSXcDwoswDGYrToA6wJRooSrpbwBebeKyAco4DhKvDjcwH1SsFiV9Tr1o4qa4Y3tkoz3J7Z3bRgbJmqbM",
  "key8": "eAAJJRXSP3Cbzi8PMHGRENnJya5gkXbejbNkxst2DMu7k3PwyFRth4R5GWfhUo1ZJaBFPbwKHxUBBAWnJSJz1hD",
  "key9": "3PazWyqAuzHvNsbwhX6mPPYcjcGZH5CQYFYQVHbwLhaiL7ipEPZxdjdmKdKF8hvrWPyGUYs8zb3amDoQ3HFtqfi7",
  "key10": "3BiBizsk7g6Qtx3zf2yZJytoahsBdX6yLmMAMouokGBFQKYHcFFNeGUTMGZJcU2rAdXsvps4K78N46HmEdHdrxJa",
  "key11": "4fHrDjL6tpj4kvz8TFUgQZCdgaxKcnKEGJWfJK2XP2NQxzbRPatgi6KpenYuWr9DuZQwVLF2bJMGEjTJ1KxDz1Ax",
  "key12": "4TUuSzKBgxUAP3hkhCipQiDJnHM4LACcRZp9PMGxkMXnCww5i5qBG11JZWiBRYj81Tcntvh14Xpr4fN87VG8vozM",
  "key13": "v7ZJ1oM9oH3un24TdqHyPsT5Cfcg5oogNrPYFQZPdkRFG6AwxTzVJzG7vaNypr8Buz4CSUjZFMFLqpMqjKyr858",
  "key14": "642e2NJsSyQrnorA32iYgyaXcZ4zP1EVwW1uFwLy57g58fZVSicCvtvXakQae3ZahxXjYzfjyXN2SXQ44SUssKj5",
  "key15": "4mPMxnFew52oV2tNGucLFHkQrm8WRDyoHP52H3E1cFPQNmktnGEAj6D3FVcDvwnbWdyU6zy1oYgxzhjKcnepH9fx",
  "key16": "hqxzt7hDwPCZeemzBJz4Y9G61bWn62ffiLAp7ynpQesjKLDvcN6wZo29tLgbBmhsGGbaa4wR12aqpn3PzH8Vckh",
  "key17": "4TZPvX1S4sZKAWqLNvmroYJLtbYibjaxMPjvA4gFJx8u5NeM7fzSBocTccrxCSeW3YEhjkoDQwSmfZoe88KHcbrt",
  "key18": "4FPUKARRLCpxoJ3er3tTbFQPXnrxKhLJeP3B8wFWtAjgUawyTHTpbocHYcUk2XpGXesU31a7xhob59BLcUWV6E9Q",
  "key19": "4jmB8JaUUiHah1B7pgnNNFuAx7wR2tkChEL8m7MLnRag8ABSdyzdKFTVX18KBkPKk5kCxM1btkntKzGFrM1SDA3F",
  "key20": "2p9zaAxe76f9nPjCEYtcs3bEXUDRrr1h2DmsnrzkRZT3gtM9Y8vqYnTaH1HxhgRQsQhThdYNSEz9oU6ua3iARJPF",
  "key21": "32gaP14BZ98S2kfjiwAbh22dLrDDxtePhgeYkNNFyE38vj9pyco7Q359MWLtmdhHtQDBSFcwKP2w2vVzKwuDsqF6",
  "key22": "3wwUaPv5xkyPRxhoiSe4iUVpCNHPaEXGbN3hxdtw4dZP18fpvyR2WRdM2eK6dasRqxBbyuQsftnBC3MFRJsFuT38",
  "key23": "55FTYq9aSqQtHGpsZJvu3DBXvXoDipwSLhX1mJvCSS4dFhEv39jrRULUbPakzKkVSatCGTwptT6Kxkg6Qh85h6T1",
  "key24": "W7hg4xeE8vXboSGqvsQDMDWFNExNJXMVdVTsFr7o9bXYuKr7DktzH2BfrTgnaqqhYGUuzJ5hzkGGVTYLhmqcn7L",
  "key25": "3sADNu6fqpgPTEg8v7tDKhN74vgKxZZkuRSEjWQk44meQrtQcQhabraifjKRETjmMGTzDhzAYDZuqKgU5szMJGBU",
  "key26": "5NVfo7RLsQ62NWamKvivM9YqTLXtvTEXte7GGe15GyRYdy1CtC9GD1LvS6VixCp1ReFVVXETRs7QY7SGtz8dxH5L",
  "key27": "5XEMqBUbfXgMpf6oJmtoBBMRTneY5nD1Dz1WQcz4JyaKajxYfVr3HhDKiY3eUvxouMzzaBepyeJTczqQjiCDzWqh",
  "key28": "3ycLaHTWjKou27nu1ZLzKjE72eE7PXVJN4uzM3HiBdZLnu8XPAPPwQL9jUBG6Cy69p3oS6FCrGYKcr4XtTx84J4B",
  "key29": "4RBqQCHnGJESQCSA7TWXfDzVL1TXfQhKRQk6j9iyxNuSKFp8qJsKuwpwPMmnwtrEDd4ibjaqCrienUxfGmcPfstp",
  "key30": "3DJwjLh6sUaoR2AZAqbbN5AR6Y7pGnSsHqDojSLFHPtmU2MD3dYfxF6jtvZMsh9Dx6AuzHrKrdCzu4qTSkBGvDH6",
  "key31": "3ADj84YKdURW17f6MfpRUxRUNWMENetVfhr3GbskkTaz7cDW9sYSDGMdCP8pQQxkyCDBTqM65aJP9TTeUCJnzn4v",
  "key32": "257XLMy5j16iebKCW5qyKfWoWHsiSipvqnbdaczJGtmJpbqN7nAZWQ5BPoiXEx77oZD9r9n35avXQZc2DfTgSHrt",
  "key33": "2iqxZnm1TSBUbXMM56Krr9aGx51GwkeJgiHrA2Emx47MH27bm1oNG2TWaCFk3NmgUvtgzF1ABRRJHTfe4692pGu8",
  "key34": "5eit6ktn4PWqacBFZPCrsCHZaw43mqKaTdZuuZpXSSDo8txEV7LBWYw1LwjZf6uj17DWXRCsp24XnuZTSJFwNnib",
  "key35": "2MjxaVz46FYA7GbrEPdHtTqqrGpz7aNXi48qXxT3A2jRPEYrjbgfM9o2ZCzNfTFDxfGpmBmtVAtHm6SrkkGWgY8C",
  "key36": "3Qw1ohMgtMpdSWEqt7S4tuo2KYWDuN3uJMLr66wWrEA2D9zin5kTiAKyWdLEpQGyUbW15LNnvYGyMW1TTrCHJMzj",
  "key37": "28q3JthUtuNGZ77hMzqnZrnAEuzPKbqYFmo75a4p7Z5P4RFrPEkCZ3vAofYYKKAYUFf3ZZ8ZFjnRY6AzdJ7K2p2m",
  "key38": "4pjS8k9wgXra9rJWcYwNUE8pbVJi6LrpTAR9ysuqv2tA1N8AQxoenDLCdRhisw5o14baURohm7BaxXovHdTRxoNM",
  "key39": "2fNLhmjngVRbH6PrpHgLu24hv6ZFKbxsCnTitwuQqkjfUoG1jnA982Xkwn8qSwK6wjr2mz6x7FQMWEKY9RYX43js"
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
