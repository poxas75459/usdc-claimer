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
    "44JvvBcQbFKgswbTSmQ5gw4nz78gQmgyCPTAvQTeLzLVpvM4oRS17hCsunjtw3WyZj2pooP3Z6xSNn1BCM1RwXNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B7FLBqHETyYiRfw9VmLhueZb29TjCQN16TGwBkhLN23pcvzA6NTm8cXxfVtbzMxbfsnYY6QXaK72cQfd9Kz6HZ6",
  "key1": "2VU9js9gBQMHZWwVrX9SNqMVntJtfTPJ88dBqooi2UXXBKNJBhbGG5qDbRosyQPrZQi5kdXnG8pujqe22E7Lympi",
  "key2": "38QcHLgNTXFJ6orYtFGShWjNHHzAz9Gs3J5y5DcS2nYZxM22y2ukdmGQZLeZqJdPBt7k7VfN5UbRC7TS1NzdC7uZ",
  "key3": "2boRhz1tGhf1wvMqoYfBHu7fwXGVA1B5NbQdpcYXirYnacioLQtjwuk2LDMWAx5dYWvPiHdM6bvzU569SXs7Fib3",
  "key4": "Nihc7rrVrQ5dahqHDkdJei2369xdwQVvM2N9n23S8UxrBjCsT2VP5ze61JW24Aqb7iwf5HRmFk6Ao6WQ94QVDzG",
  "key5": "ukvciqeZBgzWSsZ13xsMi3UKB1mK1xaRrGmgzKknZS43h4W4ef9waNgiAMHby5Z6jikgM2r21FKQ3rcDDkUGcUM",
  "key6": "3CKbQ67MLBbqePogu8taF6XrN7C3NWz7m8EXTg3JhmjBZAvurao4uu1k2PFGd1VfKTNFhZXVgeWNjSzpaBAVrdtj",
  "key7": "4xbVXxxkN2qGL4PWRUWyMLJaBHsJNjHMVAW3C2iZDTvs7ViSeMXViu9XxWE3rvUBu3R7SBuTh3fGz19R7Srfqxpc",
  "key8": "L79TJTDrGG8c7rMF195LT3nRfKpZunU5m2ZiJ3N2XcFzFKsP2rWkKsqPENjZv4Lq4m49sbdhPEwRN1JrhzKCw9H",
  "key9": "33xLYXhPqF7jerYdYJvcabLhpG9iFzkEMwnbWZCxo7zQkgwWjkmgSVEVxkN5pNihq65sPNfWPXu8WwNUkGak6ghk",
  "key10": "4TLJzkd9ndcJbpg1Q2qFf2t7TN32haCzmX3bvsFbc99VwmDVdCtVmmaMJ9i1WyCSYTZE3gd2EXcHKvz15id5Dnd9",
  "key11": "5W95kKthSSnnoBLWPeQNQ8ovZUY2CqEDrEBC7kneGbq5fBFyx9FFchc1vz4BRYKrJcba2gqBNzKLWixoStS2A8fm",
  "key12": "4AUX4qeSNzXWy8avhg6xGU2d9iR9JXkQ7dk2BpeqbGp7P1TWbr1jdqPcSyQ5Si7TYVaC7rexPJynWtZifQhUNomu",
  "key13": "EpC9HzARQX5WcKzM34SVemyVoUcvb9au5GLePoV5yL7Uqf5nNMgj2LrvDf5u7ymwxxFkvjjtaWf2qyXYR8HwGGK",
  "key14": "2u2Bc5sxGC73AVp8eLG2TUuHyi8oTF1WX4bDhUH4vR4nDDqKAKcVoSoPRUcBsR6MUUmxS9xuZ9wVQyJynApCxPNF",
  "key15": "5ZdR6xjbWSwjht6waLY6b7iuJtGy65HedHFWL8Rfmw2am1bUWt9SYym1LF9t7H49e7t75UW5JpuxJP7tQveBRNsQ",
  "key16": "56HpFTpSmt1Jq7dxJcPydFFZgp4fXRPypHQiH58NJeigufnRXEe3Du43wt8uGRaPceRbD9k59hB4KJRfuWvVbvyo",
  "key17": "5U9SSTuTTM9FPbRWAZgZYepdT7jFowTAwgnJ4TRVHx6LAUmVC6qyHQhp2BLs1WykbYR9Rc6CNKULGfJnk8DiNxfV",
  "key18": "3waZfrS4iAW4utatXgnE9Wkdqo8Xspb4eTvgEFrbKzGXjaMBaJdRr2Rt6R8hFhUbymnzrRRyZ49F7H4s6SC2dGRk",
  "key19": "41m6DvM59eMTyZ8x8KAGcb5WPy55112bKN7HjNJbuMjf7KGLoz88cax26Lqq4VW6D69PLCRHK96XTqRuyETLyEtG",
  "key20": "2Z1RB7KRX3G9oQNBTKMBy8QnKvswoVkZ8kUwjnXU3Au6bU7zyCT7FqAGNBStPTZUcYgbhR581TefvAnq5pbx4w4D",
  "key21": "5zgHhqZUu5ZyiAca6185UFirrQwFz4hqUHXPaGVjx3RK4ThbDhzd6CAQLgkXoxNmJJHixhcjdZxZ2uw4isqhiyj2",
  "key22": "3pFDDWaSyCGnenjNxCf1RGUvby7vQuEnCCJqN3rGDznDZsBuTAd3KW9eWtnKTJ6UqMjcEPeMfAH76rUbaQfmAAAk",
  "key23": "43X8VKWX4FSpsnGmE1rDa2RMNy6FZrcDEt5QUjJMaaZ2AfaDYPfCScsHj7oYnmVzBEhvzhbeKQynQH4iuADxESLq",
  "key24": "SAvgSyN6DvhpdVaVBxk5d492i57vaFPbQ2JqQUcTPVzSazLgraDrhh7sqRXiHCjPLgFCFcbc1aLHtaGGcMcMB29",
  "key25": "44ZkKx3FZPBCGLAvj2bhE38fxxHkBnEp3GeiskQMTng6K5orR9vjGE15CC1MDELnf8W9b4wvz8tHQZ14EFnD8Xue"
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
