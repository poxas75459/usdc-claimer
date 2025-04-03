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
    "65mTAaMLyuZdkpSAKxhgkqvC5B28o1HfiEetxViA4gqfZbRdt9Sf1CGTQrcmf95eNtStT5399fLQUwTwy7qWKYfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q42MZcLFjorSXF13Y7F7iaWXsGgJjbkE3cTJchcBxXPiQTxUcnwgWjbaPEeV5bENFuKJAbpK1Ci7Q5c62QUJYoK",
  "key1": "3QkS2A7cDTKWFKQSwaMHVuF2KPaQPhw7k4ivMypD99X9Vi5jAMcqJ1zGS9cYdxxbwEarxpAsjbh7Zxp7ajvFAEid",
  "key2": "PvTGFrNTmNpptAJ5JKTv8UAAmV3cYvBjmuBNQrJjhBiS9KNUKpVLEFpa33k6fpMuK49mkb61qXCXQ66HomDhyzC",
  "key3": "3JtsSfDfSx8Xe4RTTt2pAm3BrweSqgc4U4EUZqpXCJWMDaTvusKYzwUzTwveix9SKsiNbkpiaABUQ7LhLJ2cRX3z",
  "key4": "4hepPuewdieAjzWJxKtyqR9NVbKcnqXv8c9MCuWFexZgbxhhT84GccGVXHEQFrB5JayLvgN6CwRqYkA63zST6qic",
  "key5": "2GSwCDjTa8wS6Ce8YVcE9QvTzWgcrJcvzeaxSkijScaxZNrmcKsHJh3rW6TaJ1zbp7XtNAGSgy6JLFhYUyGhrARv",
  "key6": "67G3gbJrEdcguNhVLKJ4eZ5i6qxYNghnALgrpH3h42tKnDjJxAkQVxiat9ZqmKQ2Q6ppBJBPqzD37f7KG3B2Ett1",
  "key7": "5t9SLqL8xWebd47PsxsWMEkXAZhrdsrY1FCmWp9AxWqfvYPGfTiphYCjc7JFZ2e7HGTtLWLqD6NwTQJRxu9jpBob",
  "key8": "dGihKTkxVcLa4xGGxpFj3t6QH9Ai3GNhLS5P854Z1pNrCWBWgWtd6HHW7nU4vQ2Q4wUGXVb6CqpUsaoX35zFrza",
  "key9": "4wkizfxdswNRHKvFMxAmLNCDj3xUymrtK3yAJUfvF4trMGwgPPMDtNNfUJsm4KCRetykHEENvuJAaTsZ5YpMHJpd",
  "key10": "T9EVE4BN6zmeLK5xsnRQMixXxEM9tAE69XRP5zP3t275e5kHNFmkELzMqSaTQiaEQcFqBFqptarnikud7oWsMYu",
  "key11": "XiVdYpzhBDEwfnGg7fjfkEETQ6r5TegHk4WqbxCwpjuhkqHEoQSd3vJcF3eqVfkv7EEDN3LyBhsKiqCZuzRA37A",
  "key12": "Dth9xZmo8MywiZ4GQRCx7JFtUJqNeL6fqiFVxLRNVCQ3tBq6v2ynY4WJQVRFUk7dpvK4PCnzc2v2NCRpsmXb6uE",
  "key13": "4jsapcqCUyjzgqG4o8a2GsvvcmnYrbMxkbE2yFMKWcRVbTDWPuX5vWY12csKFZVanMv5meJDzzFBKszHpSBtrdMz",
  "key14": "QqYsL52bUVF3CahL9ax2mNHxeezWgrri5hTkm49V7fdnGVuFUMhEfcVRJi3YVSByFmF4TeHgpjL8HQAX4vNMsR4",
  "key15": "3RsHs9oo8AWYAkkjyki1Mbux9VK5LeeR8x9RzmLbT51KMxC3ShjLqgfLT1YurXDuSkwFSP7Bco7gXqxW3CpXwVxg",
  "key16": "3857ctUGp3Zx7ghn9p1pRaWJXzfUgHo2A8WSyWuCdzPmuUiFX1ed1i9AqdaQWGFyLK3pLEohHL7g3iHbxWVQjg8L",
  "key17": "5dwSR9BUKsmpMq8KJYUAJxFavtJNz3w2yJqE9jspVGeJWvQ8HafPh4HTnzcXXahDDyzq4LxTufNu7zLeNHuDnEQH",
  "key18": "5BNyXDy7wsAFFode2Gdwb8ZPHNa8Ux6p5pFqWBLMTsVsQBrCDh3TwF19j3L3uNC148htxwYa4gxLVLsXqwN9EPRH",
  "key19": "3nBz4wPWU25BEu2g2dPnq8pdiqyiLqEHPtM1u3smQCLLAP1DJUtwrDi8uhfPXMvsvTzSUpRvJeHgwpeYMDHMCmev",
  "key20": "WtS1wS4R8XXQkcLSHHbRskg5fCNJJZ3sYGjjjoToeS1aV3ntXAoa2RrCBEYNinoose5XghKm2rMwmv5NCS8Vnkw",
  "key21": "9XEUC6pfJPCmjK3oaKnMRKxfrkUmSRXZyRRpyic2zB7ybCS1QWXCffjzYjao9L4JiMqnUa5KAFD6FCyUxgrpKoF",
  "key22": "4YJUiXEYLnVyUuADok8XYLX23gr8y9rRVNqzXVna7St7zZSgQtWFQTmZd812DjBXskYSvdvyZihtKFJ4G3vDwhG",
  "key23": "3S2ck4viZ1q2kzwPoLGRtBhBSZga27ExU8dh5EU9AP865VcXfAy7KV43KjmmdWmhQDUhbXJs3SPTgHh3gGnX2R9n",
  "key24": "KMBy4vDHPs6EMeN4B8AzPu5nSj84mdUbfsNu9PLDS48XxAs5VuXGE8WoWC8saAPm9Zf2iuQUsvZ5CJvJBqAVv3G",
  "key25": "316Y7RA5KRut3ukiGexEnvZHijw9yxj7CZBhpv1xpU6Z9WG4BzjwBzN5C2gTDiFVsEMLxp6bNumz2nzCc9yvJNWN",
  "key26": "TprYtTBKZ273GQ4ayRyqDzCnvAtWh4nJBKDaa9TvXEmzP3vgWtmW2ckS9nd9mBjv9UQuY2uQRnfNNFnZ8aV7csn",
  "key27": "5AGa7kDThsx3Qwx17eAgPKcT1kSrXBrkfJXrxPnyqxhnZRjybo1rcG4RnuuGU6nGohaxtZbYoR2rYW33gmqjXvuF",
  "key28": "4LwFcJ6W6V9LVqN3MVdWyD8ybDyVMnLhDBaKcK6y56BnbAtgowBKPDhyW22sgAj9HxBbZe9U8NJojffCFp5QbLXt"
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
