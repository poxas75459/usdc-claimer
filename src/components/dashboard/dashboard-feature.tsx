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
    "5KayiCSRFSzPSsPQFPD6Hb8vZ4hvvcdVSvRL5H7pH7bXVUay79fPHTx2JH7eCLT6S8JfhvSwmadbw3odgMR3Sd3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sCExSeh4qPai8uifGKbVVWxNa9FWHtJzcHrzCjh2gpnYU94FrjKttQCiro7dTyBBx3oYQfr6HRuexrrqSiYWfYs",
  "key1": "55qFxW2pvSMjdAk2LFgHbttV4VzuxW22qmmdca5R6JWjWRd6WcRh9Vz1gBJiL7AQoia8mArajAFZqzCfuHT4UagT",
  "key2": "5K6cjnoDZAkoeay73avdtHQ9F7bLPLhuPX83E5p7THtvkcyJZswuHygVZPTXfSY7z3gJ29y2JzfCDVrniAXJhVGK",
  "key3": "3qegdHreaikbkrPAp9bWFZwNvsgTeMkfGtH8euNo3y5yEK78riW9HYm8G8fSGr5b6utMzR9NP3PdNJ6Gc6E7TwCc",
  "key4": "5gEVR6tEGTBxikdmjQhHYWMzAF1rTFvmTi5Qj7v2eM1dRXG1889auijcREvRpDFXtWsMhjtqmxBVANATT1RRa3hP",
  "key5": "5pP7x5hzRpHDS5CnVAVskCp8MsPimm7eGT1BmjxWP5AqmrQmUzNME974iHmM7swW5PPR3Z1jcrDabCGqELWYHAYJ",
  "key6": "5UzDYgQFZTo9zGh2HQd3ktChNpGzuDjYjGeyUZaZnATvRSJ4nAdK13MyhYtsVYXbhWSkgWPf9LGfJCzXHXnpSJS4",
  "key7": "3HaFjfs2PKHKdRDyqMATKrf1F1yYbKrx6Gz7hqY9i26byTsZktzApAjxdXEjVCMDbB1Z1J2URgKYSaNSLSykyDKY",
  "key8": "25ZPh4Vetr8LRtqEZFrHpjP67CxAmZyZoxhNMCk4PKHnqxVcT8DfKFUEnUvTFabqc1GrdwryFgoSKbXAaxvKk9JF",
  "key9": "sgVEhDZJns8sEinxBGqFeADWU7gxEEhY3rme9qFJmbrnixb278C6d6U83JswrEWDYJ6v2Lce56GoPLxqDVAxEi7",
  "key10": "YbEYpe39BG2n8CXXE4LKuP4tsbCuWMgaYhVXyE9QZBF9WRSNwGMct8F24Grormkox3YobGSw3Q1jhMzpvia6Z13",
  "key11": "C3yWZ2422bnEpZBETZMJ5JtnGYbidL3TJoBreHESz9eVa6FPnBayumNbc2aUJH55M2aRV7uLCAHwxRLAoUoxqcD",
  "key12": "2d1jwrf2brQZjvKhsWCtcXaTpr3VCEmBeAioQrpPHzaU72RGTdcvXEG7kNypK9pEEnVHjbwrzc7nQDSxK1ST7hE4",
  "key13": "4DBUauTgATo6Zjb4LVaku7hSPY7Q9mZMF3kog32dAmffyYuviwLwtDK9YzJsd6fg333iKveWgLYHMMVvqkjvyifm",
  "key14": "4aVmFpp3pndo5nfBP8RR8CvPgz2NfpJLeiob6Uxw52sszmDyVJCFc6KD3xYEABch4H3uEVDgyVZjwquysUFmiSC9",
  "key15": "MAHs6SnmvQcdv4XXzJGhNB97bJQLSXwpZDHi5z4zM1eiX45xDi5SZG7QMed7kXKaMjnaPNbeuFsTMER1bfZ2xLP",
  "key16": "1YH4iTeUdjBpY5AF6BzP8Hyp7ujEByBYjRbZpcHvZXY5jUEG435juih4YLdb3wGVgyhNqWXXQRtyAUnpZx18jhw",
  "key17": "3zd49bd3AZ7EApa6WEHE83FzhwtDDRxhem7EFrMEWvfF7dWeEQ76bndewtsRUDe7NbHJsDUdd69evfJ1NfLjUgzp",
  "key18": "4tDtLrccGdVuuWdmDyXNjX3wJpKtRfds4idk5VrGyHrJSTP2WsCu3vJjZt9S2iF28eFvX2W7K1Br4k2UesEEV9U9",
  "key19": "4N2sPTAazXW2M7xiUc4eg7eKMkPfGzXyQUds6H4cEKAND1qAGNtQ13WjnXPc3o4zF7ff5axkD3ry3Z7ypQictGeD",
  "key20": "5Rf53oLPi1XxbTHVpVyxxeoYka3JqidcjhVaaWKLE3tkoy4bY2jY4GKnmZHquU3CYH6onYjZNC5TksvEwuR2PFmp",
  "key21": "5nRLMNJxAKVAA81FHaq1C6J2rU4a8fNvyy1v6UTYFimxLibn8CAhaNRtzmvi3Y54gBCGjS5ZHcYpntoZd7CXXeTM",
  "key22": "25MX1LbsaikATALQVNnTU5nvUoT1n96FMqs7GBY4C3bfypqFhDokNZWxHXMVepVJ7Yk2G7mSzgq2WqdUMcSVATPC",
  "key23": "4jPpBJN22UU1gkbBwu33RZev17dkS95nK2EvypzGddGCxd2xpDX9xruZqkGq4ZXYJCJtZaXiRHEYwJhzrC4DxXot",
  "key24": "2BKFrh6VtRryBXMArwPBXseWuyqNLxTrJVeZGsUAo9WwUY8HUS2NT3bEGh7PUQSGkv6SZ9AThu16nYUYwZCMwQwy",
  "key25": "sYaeRjmzbRiLp9h7G5jw1SXRqmqt12PTHXQ4rTgCkYPBNr6sCpNqF9Yb2oSQuhGjPWbQ7isSniRohtRmMAmK5J6",
  "key26": "bC2YSVLSuHTKJ3tRkC53Gsej2MhNGLZUpeWhXyRpZwgx2CVcCfs2Q8YmTYZFVD3jjEhywSqxe9fY5eRcibRzYzX",
  "key27": "4NEvV4rged5ftwt7CYN2QduwEyJM4vNWoa2ZFtwSf2yud9rvT7dtZfgFTosd8Afist6bzGRCT8cJQd9cMJ997m1W",
  "key28": "a6qT9k6FEs1dUKvZiW8V94XcsporEJoLRq82vvzm3QskGxsfh1wH6nrGVqbD94vdF8YtJRyMyqbGkGeGj2ZQRZb",
  "key29": "4pHiFM9MzW97CBzuFE5adjVrByjSisApK5JSYo2EN8q6fpU13gZJQXkBsXMtsdCzA3J3NXfj1NNh165JVBn2Evfi"
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
