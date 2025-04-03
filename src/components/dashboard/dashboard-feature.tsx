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
    "4bxZTXHvqMDo29mXHtFn3iukXSMPguWqMK2ukKpbeAfa3ejCRwvKX3YzaNK3uMUJqPpwnomfKSAsFZP66xeZosqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FBY46PZz9WkiJJgfUyJZUjteY6MizwWdBen7D4RndBmsijeEvxwwXVvpefeKSiJxuiJVgpZzupLHm9hcf8wAAaB",
  "key1": "QrL385V72izZhwBj3P2G3Q1uK4Zpp5ToADY4Lbx5vqGFhUbW8WxBsVt9NYcYEUAFTufz7sGGk1wGT2NvWjVVHmQ",
  "key2": "4uuUPRa2ZyfpCsy3UennQ3VarcWSR2Hy7KZxMCP2PSq9P6Uhd9kpSieamjTErR2FJMwSbkxNETmTqAZmPm85uRtB",
  "key3": "L27cc66XHbUVjaukfgzu9y1vA1E1VzJoMcndEb16ccwPwb5NtPX5DrzasywBse5NVFRsZE2LnxaXaBos7QVAud9",
  "key4": "56cejSc6vEPZni1Tj3FKfo2FEqo8EbBrgjtYMLaoLHktunpc4uhyEtdew6NPEorw3szkTJkTtAB1SWrvoPgErMxh",
  "key5": "GRkMEcgZLRLzS8WGwAKxRj5FKLnrEc1oSyuuJQa4jEg5T6tgp5zeS5EYEqbaMeEFzmwwMAEAfr7grKfJ7YB1dNd",
  "key6": "3MwXsbzA4ZvaetksGzRZEpuT5GmfMsyKPNyiYqsbtuYu6hjo6MLWBmnqf2P6MzNXmdiYvnzUJYqv17VhAhfyXNAT",
  "key7": "3Mm61FNZMg17ybdsPRKKvAR2AdQg9tVw8oaENb1mcya27ivi1W5T8BqNzZfpMaX9vBV9yvrisBRERj8nj1E9pfsC",
  "key8": "m657wikgTJVexbeXaaq2hjpVBM9SfbxzNm5wYEkSuhw5b9A6UYSa4ym2StiKfeS31KB6M3jzjrcgEAPnErEzwPS",
  "key9": "Loqx2V6gsNRThgZWF9vjMWcmoqUqAN6RdjRVoiujSoMNKGN4vSdbkEvemK8APJtXMHxQFoawJbiTYUYaBoyd1Bf",
  "key10": "5t1GxP5CP37QZ5AAyQxkV8di1VsTrUP8D6FWsjcL1HM1rWiXjewfDiQNCKAHGRpubtrr7nxTqfwim8b2RsGhExCA",
  "key11": "3vJ3XaFHS1Eo8uk2D4cN9nJebDQdvWsYZCrTc9MEFL5hr9ziQsDoKsSzsnYHCTLfNjmMeFWKtoLCJ7VSLpGiJdQP",
  "key12": "42wd3hMK6z8xKTR8s3F64C21HjRrahZ6Z8xgHmVq8s5YKNGKjjNneQMXtmg6iKPzRxzv8BUjK59qtRCUQrCTx67K",
  "key13": "3YiLN4rjMb2RpDsFrC265Y52SMjEuMX9U9AKqBmAZChPNfXLM1qGzUT2yjhhHGVFrUBHCa7KCDZCX9FpUojxMWc8",
  "key14": "4tjUu6GbkzTEUNap8UMiViafy8yCec5of3oXoPF4hq5uxE3vJx9m5Bn3fKjwi9zsuqDeRJQ1EDcg6PT81MUoXon9",
  "key15": "5S158fKh7ka8jAXKjsHM7dnncUtGjU6ZDt1NgjmFcLTHwX79meHUxZgAccUD8ykjpazhNPritFHzQ8zzZyVKsRxi",
  "key16": "q1vS1qLeGkCz9DxX5inE5PHzwkmW66o2vEZpwsx2nc3LZg8avHZToRwnzneWd6ZZ75s7Z9qLiV64JEfvwTFejDV",
  "key17": "3mGbkW4v2eiwXR75SuG8MZAUVmpRxpxpkYNujfzgDMkZBoo127rQ1G6xRZsAjD2wfu8YK6EeynQpePu7vgKFQPMS",
  "key18": "FnwWK6zPpJjRSZTacbR4tXzKH8KGL4exURxLdgRbzUfdrPGHQd2TJ2Z7oUQRwE7He7oivPmiZcnCeMeiEwLVjvZ",
  "key19": "5jGHXjXSZny1h1Q63PsxfVtim2zorDG3KwRY41XY2JfB75BgHWAz8Kc7Tkk3nnB3cvLNbaPUrTLPByMoYchZVTSN",
  "key20": "3ZFmDZWg5ppFWcGzg5HZA3VeqnwMPW8kxrdJC7jGuPov5uoDwmfsmefusTU6FpEWCSCoEe368TYYVULa5NEMwRUN",
  "key21": "55EeCor3K7q3D7wBGRNg79muAv96EYV38U58MBJCE3P594jhdu9z4emSmcHjVhkv7CPnv1xXoLAg9TnDtMpDCncu",
  "key22": "i5iEUQQx48ik4TaocXCxQixfB82LtEduEtgz5rGmLHG4HLHTQeDDzJZRZQnc36DicdYzN5XA9EhVJ5YpepBGrsm",
  "key23": "2wcSWRqgFsp9Gk4gcLNQb8XCUh1e6Rn9jTtNHdgo9qiDgXRtJHMZQfgSFrNN7pQpgwNzdUV5RwQSDdDn3jgiEKgw",
  "key24": "3efHnHbkUsgZSNiTx56qHC5VPf5kHW4HpGJEE9KcLpWcZerAACA7Ya9cwYMrPVBWyuRZf5qviCEST48jZA7zNU32",
  "key25": "3qQg3zMdNWzfmPUbZUUe5CK7mPUZnwnNXPLE3SX49w1J4uPr6wZL6wywqgdNerGMbut4jA3X9fGckKUw8qsdTuZg"
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
