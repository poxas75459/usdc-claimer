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
    "51ay5CUYMBxH25NR5SgNgrxG21HfxACwZzDtEKPmmkhX84NTcVJJu31ii2d1UmGM7ZJMcTDu9HUWD63rSed1tW5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UNuDPBFUTZAwv1YCwcRf7wLf8TJdHjW5wJQn5JqeW63ccVqv6uBgYwEWdZdNxdviWfMxvkXfNHH72DGgr2VxXFc",
  "key1": "3NJqounfb23fP1Qp2hHTLam6PTCLda2EZRM5UrM1hguyVByWPBvtSZVUfYMQzwxQ89RrAT5wBgWQewc74WhBJ93F",
  "key2": "5kGFqixZBHwDUoKKfr35Y9fauGFHqSm8hk12UyPbNA4NEo9MCmav5VCStvnZEWLeEVLQFF7vfa6KFqYPrU84vYew",
  "key3": "A47kY76C6uwGM7efwGEbKuSgybPZVVCoLiC5Wp1Bd65eZK6xBD7v5ZrmrKw1BmGYguEEJy8ukYQpvj3HzE7fdKk",
  "key4": "5kM8zPdhfGP6Uo8mgXzwCLsxpA6PxRUBAj2BerGS88BM6c5Xr9b7zS4xTwLk4bz5upwZmquf7jDitiV4VL8D2UAf",
  "key5": "5PaC4MbPWv3Sz2xz8UK92UsCSbWYj3vkZcXhjg4PzH97EG4powEcojDsi1GZkz9am9nfWPA1WtrME9kbd8NrDmN8",
  "key6": "49FnnyeWHkqHG5bA67GmQLN5WrCbjV4ft7dD6PwoxUc1Fn84ZRYnDByxTe74qr8SMrAXPQU7U2p8RseZfFMQ8tWA",
  "key7": "58Kr68oq5aKoGTbM9pTeXBe6mo5MKXegiKU2ppEwtStYesuU8SirjDaFTtZV6JxzbH7CipeEhPgGSMYPG3w28tiL",
  "key8": "2fnJtecLCRELLx3CwKJTQzF5mXG86zWKsMcfqJEecJNyPr5YsSXXNJB4VAxKG2Yx2uk81DiMFf1aDZefAWfUuK4F",
  "key9": "44SLJ2aaGHssxjPozhekqSbRH9MZWCXx2VoNT9L4vXzi8H6smd98FFKXNwEXovk6BVvmwz9Ue8XCNKxM4WkE5nfB",
  "key10": "49JWHwCam7uGMuUUzAmP94r2nK9tbfUaveXKVBcayq2UHjc1cEZk27skb62vGShFSM4ieZErERKjZJvjUtzxDCzE",
  "key11": "3r5ZdWvhbpatCK45tJqpcBCyF7rrBSb34rbTZFBoQJybJb45ow5GgUNZ2JHNDmYWCBGbpZYapaeqGKBQsSietpku",
  "key12": "55YtTjqcc3cikaZwn56BaeuRkn6HWMZBhRB5M32mT3oynEVpHPE5XjGzzBbjfBthfpGSdWo7wFzRsgosqKCPqBBX",
  "key13": "2jinuB4aMkRweeUmVHN4jkjag2Tz1vabq5h5ztXHLhctEbbVzVsMawwDTcWyjbekFKMpfFU43uNUkaKDb7Ykj4a2",
  "key14": "3VMhgzDWKGNPkSZumgYfahfQvYEu3JZe3KadtQ7Q6Pwus34jVJJvM9rvfF8S2PqV3tKPtvxbNKJ1fCNQjD28quFh",
  "key15": "3CSsS1xxFaUPSLcyD6ZsurtKcS9wZCkzv4bdLGMe3vnzfyZ68CyPrmey5QahC9NJ7ER9wH4GesqfMHij1nkJkBP1",
  "key16": "5R46w1pw9kWCnX2MKpYD7pMZ3uv5gf7CbnMumiu8GRspUrnsnK6n3gbK5pRUNGK82NsFcshr7PY79wM8zizLBmJm",
  "key17": "3pjt3AWpQ3iojuvVYj665huePwwNbgo34B2pwNhsk9DcNbp61NWwxTJ8ZhPo6dnDqKHdukPVy9tNjV8utBkwt1Yp",
  "key18": "2PvMEXCHUntNYosWWEtcJKZsNy3ns3fGocTjvT9FmxZtv5SKNUBtU2CcwaAy55pu6aUqUrsNZeKvFzjt5164vVdJ",
  "key19": "32qTkPXJhHjZpzJkCay8h322reSChJSKCiecDEc8zKUz6vDsqs4HzYdomiMNY16XMQowFxddMKqDdhvc1CsYe1gP",
  "key20": "5GHvePHDcjF4SnJcSf5SQcW7rHq6YrpCH4fm3hSjHmfJhrt3wmGokNsYQinbDWTeNACjuHd9Knu4pbqFDdzQpx6t",
  "key21": "41NprrWUX5qNFFm7Tw8FcKhFUsfHWrbksbbouygRSy8UkLEHELhJwX3moy4xvwRmoFYzomTQutXhhYESUqyaZwXD",
  "key22": "4jQWgusZXLjZVaSkHHtAYaEbZwyFk7onrQ1bn3Ye1oFjByGajedWDJKbH5k186xt2GyyMLBgfUd48wDrni3fg6A6",
  "key23": "4m8c5nMVTNBo81kjdxoAM2MeinzB313x65g4MG7cMyMuRAtZFL9yW836CDw3Jtk8K6f3RAs9ASo8wx4kiwZNjoT8",
  "key24": "3C8Ets1EmFbWryQ2X3Pq5SieF7cq5KBbXk9EuPaa92DUur4vm8Cz8gHeG8HKNhX2fPdJ6C6nPCt2uHdiv4GTgxQn",
  "key25": "3NDwCL6kaFefjb8xX5U4QF9SQhEokSojAaQhJvukggHTt2nHF1EqvATrAVf5skMM8NdnMZVuNDUKDGdnHaJBiFgL",
  "key26": "s87eVeZRGTA5cZyqZw66jTmAxXDRjFRMcBBXghW4yrXHM6RfWrZSNWGUEotjjBgogZ2LTFHuN12JLy6j6VZ2SDe"
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
