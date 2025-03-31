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
    "2bZw9VM2KPE7rSMGjRCx1yYWYGFHqVpAEcWJgiSswqe3PRSs2bCHVCnYiVJ5Ah394diZCsg6rYcRQPYRqN6QZbpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9qTDzGzwkQ747KiHh3CEiZ2ARhy3t2KDsXMCb8JvYQVTaVL5JJRv8ifaUzk9h6wpxwbMBiD2WG5LswNTwKDjJh3",
  "key1": "y9kKXwfU76gii3Bog1wAF9eKe11WCHvX3aRr2AH2rSN4mx6N1MbVpYNY579NnMPLG3WbTUAyTZKQBvMucGHJ9YV",
  "key2": "24GVZQ45jnDK2xzkSxYoeubpkoTzhs5pR7Lx2UKs6UnnZsfaezVDBy9ZiuE1vq6cLr9cPrKTeV9bjk8uvzA9CGsC",
  "key3": "4Mv8zvYHdyTW9kENn1tJUQYDzk6XMbSvcuzpMsn54Rt1yTwg78dpHX1g9i91Rq1D8zGs79zbZ1QwX2xRoFu2UaqC",
  "key4": "3vDkRBSYvYjY86XEwvnpRAGHB1bfixKwyNn9piicLFy6vv8jPT63kbZDadUGs1mGyqXzfHV9BBbEiRCuETLgoSDy",
  "key5": "BksBSzynSe1y1yd3TvpN1VCcuEYD4Dh8amvMj1KgsdpfzfxykbJmNbJR1QCjKJDyczR6adUuKVQSjaMYpsEsRqS",
  "key6": "2wrUxx86xoqzDRzXb2uXam5L5BUFq9v8CMUnrhUXGpDPA6H14nnGcSrfbcn32hBxBMbabsftatnMaUuAa5yRxk6J",
  "key7": "t3CThtpMSnnKiXM1dFSu2vsH4GUYxswLCNviuXKFVXJeQTFCuFRtLmfsYgHfCcDdz8EYKKoZyT4JVSp9WV7kC9n",
  "key8": "4nZ8xZKnWxAhMaD2f28qN9dxJQvrXe9nzFBCoPyJrMumga3o7QM1eCNgQALeA27M4KZgyWkD78jaPwVnNmaMRyfc",
  "key9": "4GNnsG57u5ienm1TW2tLL2kXjwCeoFeazmpi9Uf8NhycX4DxXnwybJJemBBawm7pUFC7DXs2kCZ72W4LNudMCZ7U",
  "key10": "5ACYNQgFuHvTitixgEF4a3Z5BFeuAEdrZcoU65hj7Q6TwAaVQbu4HnfXCpq3VYSEGtSWDqM1oVcze5HTEmHx3doZ",
  "key11": "2QqmWtgrFU7YKa8XhryaW32asA5TeCAnSXptvcboDhETk6RGuMNAC4tjrMQGK7vNSSRjg2fNkQkANyjLm7iLmmVZ",
  "key12": "4knnCd5GuoPPJ6khQngVHhh5Rs7As3pN6F8qLq4RRp9sWP2rPgFAuqAtVWXLM8XohLGh7fQQ68EUMekPWpDbUYL9",
  "key13": "66sUjggcTdpteckXbcdbHc4nbjuoVJ7m4FVnZGLt3FnkQUMW3bYkrsCNdvKhS1N25rTJ6ySe6PtbmFC8UEHi8vCn",
  "key14": "3Njav8CLx76ePvaEUrdCDh8NwBjZmBQHuttxf1iEkamrkSxGKCu1CXTCrTxM3ZgZTx5qj3Qwbd8QLfTxURpHK9NL",
  "key15": "3mTdhCuwfiPWhUgAKu7LfqCa9WeufPWNRUzsQWw4BbUrZyWtuZ7rVeFkEbD2EzznBg7CBwuvFbUKtY421rRfGNpk",
  "key16": "zmvtagVPF5Jj9N7TrU9GBeD5U6eY92UCpKVoLEeHv8Fi818Rhhh9wwFeRVfpUCEgkdeVp5N6CPawcmLWfGVkxYS",
  "key17": "3YDiTUoScL1Xv1GVwfuUamMUc4p3Hw4xNMHc3VSJXddPZMmsxmAqAXUSno2L6wLW7jEbBQpMHYNNS2EYZrohvzBw",
  "key18": "4wsw7GQNBJwrarpXRve1TkQVVdv3MQzgdYnKGLiDriioPmULTosuxZf3LEh5Rdhgjbcd9jR3azyRiCvWAMce6sn2",
  "key19": "37jLcdVGSbnBp17x5QwDKpBojXymE6FjhJCLS8znzBRbaw2mkrd9Azi4hbAXVXNGscqgoFd361u5erskHuDsr6v",
  "key20": "3ZSMeZatuop35KzRBW1nLZ3XmZrecYpF8UMS14KhgJ9MeNShtsMceR7QaHTmkiqVeP6CDJ2WvJdJsJcvQQ3iK5k",
  "key21": "JAZ3rG6Nz3DLH5oG17uLjHsL719wYxhRjGmUkrKJahoGhqbYFPwAQesi9vnev1XTgunRxH2jkv5JFvqeHB2LfR7",
  "key22": "5NeAgBCjRdrz4zyruF5Demwf8obTjrdwCCQxM646rhhqGvbCCVNSSsatfVYHSFd4w2Z6CKp7WYpb74J26yKFiXEu",
  "key23": "5HareVbT4hPSxadK14NDvaypyHXdYBDqFYKnB2SMzTmEcZtBXQG3idXNvPvTXyFc1RKj9rsx3jgvjBGUUvZ2PDin",
  "key24": "2cgCUHW8HEWJe8UskuntbqS4tPi84xpYRKQS8oDYboqybrx5UeSoN3Mi12mQzM8dNFj7ZRvi9YBq78UoEPJCapev",
  "key25": "gpaqE7LXkPqBH9h8BAcrg795Gk43mMBCggZGxGLE11VaGLVp6exXWyniyhcLA9bchE9U48H6FAqNT8xTP6iLra2",
  "key26": "65Kc797GJavZeHZLVvm6dfNEkC5mBCc3etYfpV8uDQm5eR4NAcJuWL23PVbeindE8DfvUmmh1HsMVhxHCqhqkpZ3",
  "key27": "27HCmePvErVytVnHRqApH1iJnXWGdACmvA35Ma2Uw9TBBX2w5B9FETkRqMnryn6vJRGotvhj9Jn7rp2jW9b7zdVg",
  "key28": "4P5t9FxFXgmz39csBsR5KA8UnmvjanvERUq149XQAA4MbTtcmR5R2mQxaDagMHhUaRHgb5LcnCJMvD214H5isN61"
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
