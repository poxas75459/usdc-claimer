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
    "5FRhN3kma8DmHoj3SytgrxvSvKMygLadJhENSovdhhxrrisPLP2Hdo6ZEFPQEn6bMD4MGhE1MwP8Y4XXYqMMJk2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XpPCdQToLFbfcNQxEg6dj51fX17TpGG6e9a6JQhb9FB9oWMtGS5ucoCab3nQ4s9uz8CKRnrFaRFs5EEtXMMievV",
  "key1": "4Q1PjcwH9Mcg8JhcuEngMwZvsr4wc7opz7XnHhS943Zxi4FRfAzH8L5hdJs7Acatn39ye1bKkskYgzJL34Lgk1jE",
  "key2": "2iUTL9yfGHhcmBLTJRfee9QtFiesFH8dR3xPMwbFQWe7JBzDGNgGnWJ15ahNux8qiviyho11N5hyHobSZr4V7HFu",
  "key3": "3GtC9GqvBgtYNU15D2XHuWG8BgmM6T2YvfiGJXt9hDcyCg57b26UtGxwewhaXGaEPiggf9ub3hmLMv7LF4hdSpKi",
  "key4": "5cMJaqv12xLjS5sUUVwWtoB46FQgv7u5axJ5wyz9MzCYVEGkGsS5dE2D7y5fntHMdDqgUiQ5HgcKxQH9fbsCktbk",
  "key5": "2EHrXJT3KHQqsxdZHAEWuxzSUbi82WHgwuVaUBRC7S528LRenNfBZNczktDpBHsVneF7EY8qGCYVnAzjnUD4TcUQ",
  "key6": "2vAXkpLrNPrMdidBfgbxf6vMBnS5JFQgfccrjua6Q5F1NPuuYXf7xNLdZBkLGf18aB8Da5yznxYkrei43geQzWuD",
  "key7": "2ETi1W3VwPokY3HQ53QugfwKAEDVKG6cn3QmUVWNmdLYQasQvndbZLLtWXjMBh2cDd15cf4tfEDCDdtsCGWDwoZE",
  "key8": "28ympbgorNaAhuQWogHQnb8RzsaR7aU65CZtQq4t7a3nyfVaMor6ijVWc81mkcymRDv8AgKzT2rau22pbXJcNjyJ",
  "key9": "4b8Dbci3DtAyRWSEkPeBDbiZ4cY3AnrScSjhBQesVmNuoJ5XvXTcGXZNf4S3ETDgj1AyJSRhGhJaVCjXivQUJYr2",
  "key10": "256eCepe4UpBWGeycCZ2YErN8zmJuEJXo9vM9voA8v6vDUqu9P4RTCRuoqYXAtPvQUdTdvdWGa1Ei94wsD6mYGmx",
  "key11": "4B2nkuF2CzWgLe54sRnb1TZ2tSC3y6jNKpf76k1qCWRErRy3HP589NconpDCS2ZJDYcp54DVv3UzptZzryk3spgo",
  "key12": "2MEbJnG9BAhJgTc2grf4DqMszDGnpYB8hqjcXQPMLEZSvtS8DRaDxoixcoukAACZDohqavB7VeNpaVP2tEUAoQDc",
  "key13": "Mjd9HzpLcJ776y2rqEdGa6iyUurN76YcVw1xkQzbaowwNEfdza6DgMBBqWDEx22PBh1wJ9pqNrj6NohwC5P3Bcu",
  "key14": "2eGRsbApuY3Q8hLhhnpM4jS7hfTzvfia8SfD4MwG5NsmBLMS99APy1wtqmb6qkbzggtDze2j4doAfZoYEJE3KJ2J",
  "key15": "551Qkt7CA7t4993BtSknn8qsawTihaFEfLT5whKQ2pUejYkU3uf2wLEuaTqkcv8xQ7Fmeob7LmJzEj5jwrRNDQUG",
  "key16": "3DFvvFzcQvawkoDmXRKKL4iwjfB1qD8AJwERWs4mk9r8qFQaLFtkXVAiAcvrUvxxMQ7Q6zLjY6dft25kziNc75Ka",
  "key17": "2DhHBFLuEAoUhPxrddGZ7RpL9QajT46G6DMkmVXL8sctXXHwPfvxzEhsGQW4HMXs5RBn5bVaaLePavdBsRsJxngD",
  "key18": "3E5ippSTvLqP7hoeUfCfNRpMsHwx5aNyEtz1cgfpMgSN6wpSnAGj9t9JQQGUuh11YBpM27cKVmZMKY7wUVBcECXA",
  "key19": "2WQWM2EdjLBKGihEDRd2bqZVwX6tfUdqcKPmXnZrP3bwHnSfQ3BHWMwCRTTRBTbNtt5czjgdTvry4Ano44cu1Y78",
  "key20": "4wYeu7UCWm6wv64ALKnM2eZaHNACiJc4gEWB6r3ZVzeqdxDtLQtX5Vr5FHmsvseVo9fuFzW6c1EzRnvbUZuqErT4",
  "key21": "5CUUmLDsnAK6JRrFcmNb62UFXbGnx3rrbMHsXC8tiVYeiyYyGHqGGVVqWmK5HyCaNfFC5vxhPBEJZcHPZwRjW9XF",
  "key22": "CfBbSYWu2ZSxsJAC2WzNgXSRTzdopNkQLiEwxmBTXxkf4ztu7FBjAxxJsBhic25iUCF28kY4iiCzxpQiaVLWGDg",
  "key23": "3M44dGuuoaneGFHfDQF6CWtR7T4qaAPAc2YXxK1jSPu4QcjuupMiKEa33qqmFYLmejrrB9zG94m1ce7dojttCub6",
  "key24": "4RS9zHoyxRA7HNreKYhAyAzs7vwBk1gVJRkH4B6zBqwGYs8Hka3v264S2qGDbpK37rAGXp8n9GkRaFtmCA95VTjr",
  "key25": "5f9qAhUiHCa5J8rGDbbJmoU1W5y4LyBP1BGSJ3tyvfA44W6PXkQiZRcHecTjDKk9QHNfUt93fCTpUc3mpuGS3sGP",
  "key26": "4xzM6Kp9DDy7GZAdT5Vs3TKN9a5hx61YgKrs31crFhaYqaFtJv8D58UCKYD3jcz4e2NAxZMdwJBGyzcHyF6YzMtA",
  "key27": "4NEh2tM8MEdYJ2Awd6SwXykTY8KVFKdxp7JTMbXChxrMJPAPCA2y173JwRiyeKFUWk7Mjt8Q577YYim2sA1aH7c7",
  "key28": "4ZEyBZsSbtVHGYMG5mjfL8BpZXKeDpo63eahQkbp2pZmghvxzu4Q4jvKZPQsXwVpzbwvT2XAEAFkpUhUhuZTHW6X",
  "key29": "3d8u3txMv9hbj67C2iNAAgux2FKoooiDKRTxWhTFRYnNmSDQYxvGsYuPe3fL9fcQBJghiCscuBomuEr4ud8mPLL6"
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
