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
    "2oHK6aMaUFt85uqnvPtA8JbrFQMGMmf9H7uZyrw7C3QPeYFLjK2RFZvCQ2tMB5pkKmQaZRKN4Xb5JqiQVWKVuKJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ldtf6wApbqq6H5RGmp26d7RcPY6rSzbejg1HN8Yw5Hm6i2YGwCiE32VPJJHQBQ37RvkvY8LdbLBr5JYLxiaByC9",
  "key1": "3ezqgCaAcr7D4ezXarEqLK93fDtkimn2FHfGqDev2LmWG4EWyGhvtfAN2yTCY7VnFTU6nBRNS6GvBUdTqUj5hS7E",
  "key2": "2otVX3Bsn5Q96h9BKjiRMHXUQ69Mk9BaRSai1hjr2rY4tQEeLmyA6gajebpCVRwXSMP34Qx4CVJgS1tzSBaeJXG9",
  "key3": "3b9AKzTnAj2LNHWAqYuJaU5fZkH2s7E8KVD6274rJ525aE77rmK8jC19jV2HwUSaDLi4mSgNrWohswAH8yuqNDjG",
  "key4": "5iJPShhmVaKdA1akqwYiSRfPqeWTnMp8mD2VDPHoa8eHHdfKDj3uDfht5Qkc6NhsDzEBrC5gtSg6CJsc29i5wZ5L",
  "key5": "2GBd3vJHJKfTowTNFcwR5D74NdvJ9weuqT88yWbTgPKx9iYKnUwJW1qvKs8v68U93JY2VjSprLv6Dsfd7iZnFM2H",
  "key6": "a2YfP1CP14g18fcLyEah5fxYL6yKZLtoX36FDAUWQji66Nf55GfKSYMdw55LmiUsQ9pZbBZVbbm6ggZ78B9q7zi",
  "key7": "4FLRjSxKneYb8q46TevRFUEtX8Ne9dR8DVDqXZZJsZa3QfAnwbQVX3SPtmW7WN4pKJkCqL3euHe7PRuxAKgKQH8W",
  "key8": "3e41jeKEacBxXEAaqQXeFSDBpUHUwUcxEHb8Z54zJ2GqCARiS4AX4x2kZm6sEWrbR7v1xSXvaU9kPsvTzGQa2cQw",
  "key9": "29eKmhxcRKDrt4aeWseyS1HyFbWeEEoKjudRctnsDgcn89dJZeuJzAvfyWFsj2gLHyKQ4cTiKp91cDsoKF3GvsbH",
  "key10": "2hNweLB6tnGLWkTC9bwaMKMP59BFUV5wFAyZCwKWYjFixpRAgTGa2c2jMPwzfbGwW1eVUpyXpmTtht26opAHXK8n",
  "key11": "w97nwKRDi8UodBFiEAxMFbEJYen4vTy1Ts2UCjCdPLDGqXuYSsP7Sz1P7PWgf5PR4fpHq3svPPERuD5tEcDtmMr",
  "key12": "2jskattuwu2wMGivSsJtoc7J47JkJp9SQLexv9tGxu9g4LJLGNGBg4SmovGXNRNpER5oY8V7kHuxkbVBmaNcxyxN",
  "key13": "WKfXBFdQbJrg6WNWvKSx6naZhWJQRhkA9XBEiuU1WUw2rv2N6f7NNep1rRawn3bECmd9nAvKnokmekGPPP1ywjL",
  "key14": "PAAPVgNMtfLuedz9BjCYYpEf5QQ47gn7n4ap8BmAQT7fBjSh18RAnQbBNanNYFR7AKDdB3vpRmUnWnDaLDRkYPY",
  "key15": "4eqnS3XQARh8C3uuC8ShWRRnP31KY3tWwK1coYj8pk69yztk5Kn2zs3ASCvtk7KKU1EkzDpoFQf8zsPGfCbVNwg8",
  "key16": "5sq9s9scpLUqSnpcgUhoJLcjmPg92oBtnX6xTejer5ogjLXsmDQtTYc5qhMcxXvpBYuVdwzPrU5Zoqk1At1awWcc",
  "key17": "4S9xjvPAsqCMiQdiXjHKYfyos2DsXytWxwSrKUs4inS25pcwkrWrpmdbxkoP3rRqSr7J9hUoRALo6Qe2UwtP3hYs",
  "key18": "3MofMAudzfD2Y38QMBpMYUnRgWhfe1KDHCuUgrRcmshxxur39PT8axXcfvAaGCEaEuWde43P7whwEqVzMk1sNjYX",
  "key19": "2TFWfAEL6zEiHJd8g1dXRyNBwWjAooZJNPnjmm41EyBXibnkEVcceuoRJ3DbMgh54VgEHNgz2bCQF9egaZLJFtKU",
  "key20": "KHyNqYYvSsykYeC4NaiH6qBs2xAuLc74RGoFJHYSkzmDrPnLqxL1Nz3RiVj569z9zhCKF6caguZs9RfDdNezgcF",
  "key21": "2AbjLqRbLn6zLDHJ1VsABZz8r9df8tazNNh2kHDqhkCVp5axp1fid5tggCURbYvGy6AtVbpb1tcMDbH9ERs78bwH",
  "key22": "3FikJ9MDdzu6tudVgUDTdrbWZe8MEW7L5xNZEsxSsyzucf137769dKYopX4y1xbBKpLazGXhsq7qNMf8HUMR9g5E",
  "key23": "49qANf7ybzUdkZuN3zykF1g9m3qa4chRjHZ3e6inCiCvnuegJoSF2dhKeyWkrBej3FJp1QKf1dooVzRx87yKziga",
  "key24": "427zwikGkESQHh3b4HM6JKvjX6ZX27zNWDRzEh8FmS5prnqXfSMgswA8swSo6cTd6Vwz1f6s2sTpm4j76xwkZznv",
  "key25": "5QntcFUJmDPGd5CNgNpdy8DnHrBJKhjX4LvNytmCBUtXEj9Zd6LpDLQiSwJAzmnGe3yVVHKtt76cZseEuxz1yVgB",
  "key26": "5fP8DqJwFQin2yN8zX4hbTjWZ6mFpbenZ3TavYeWjUBsaZ52iF3kg6MYHvUM6rEoxADbfc5wwJqzp3ZSDWmqe2P5",
  "key27": "2WzyAFTj7YmoLiXjUSHFWKy8fY33JkVYqmhKXnLjZL6dfD6kLm2ucNMxLQWKJYuqQ7e3pyCKrMMsC3UxEFKpky7Z",
  "key28": "5TxeaNQhvyMvTB3yEhNAtnGfHf62LUfsoAw3HEYXUvW82XBi2wJd3DzDeYRviv5NSy1L9pD7yFnkU3Gu4FMLsEjU",
  "key29": "UNsFp1kVhkxKeEYC9uSqsdy3GRFLMh37Q8wGPchapRNNjVcaq8DVkXp2Utk9diX157gk8bYbb8qohJ4hbnopzZg",
  "key30": "rt1SnisXsDdmaoVLuETAc8mCJAMFgRXGMdeUqYbWVUEWW1bTcLKroty1gQxUGxmitGK4wmn94nRNWS9wAcspKAy",
  "key31": "3BQ3tJKRgEqNxP8Dryx3bpPaTaGDkoQGg6D7Gc8nZwH8KrCEHn9NEp6fmp6zr3wWKMJg7B4nE9n7idJkCJXtMx2b",
  "key32": "2magBayS1XixnBunvRzkgjktaJ9pTg6RoWiWsLaM4vEyUumserNA2eZfkCfPK1NHMuAG9j5RKC5J7LmcDf9HNLL2",
  "key33": "48EtoGA46cKv63fnwuSQATradbSW6aRmKkVvyQ1n1Eiqx3oxAsAwXyn5NSrxDa7FTNQrYN2Ru8ARzifSBsZFwkiE",
  "key34": "4VhDBzcYdFJHzJeHjiWP9pFxAoZDdjSNTch2ZcxtkwzjeDGS12mswR2ThiCFUfyoes4WYGSNzNgmEdS63FZAEiAo",
  "key35": "2Jdrkk42GCb2B7ZXSz2WFH3uq553b1TB8DUHuoJ9Nnen1xHcaksYQ7ADsV5LLtMsPR96xS9vEoBXRDx95zb1mV99",
  "key36": "3US4s1gxND1iQHeaj78PhHZTz2afUeA9NbqYyNxZR8cXLB3WE86csm2xSwx27MSNMjNnjkr4EDF7SciMuN8HHbKD",
  "key37": "2GGDtv9UEFebBbz4cTWGgj1jZzp1RLomjS1Vnz75DUuRTGy8oN1M7xnegfyffnjt67VjbF1fw32QubanXxCr4vqp",
  "key38": "3XqhcwXdehu8eWpLm4Dc5hhHY5LN6j1TfaFwY1HPxsQqbdMPpiBt8Mne9EX6QLpXWo5WhfgyDm2kCxvR2gjYeCAp",
  "key39": "gm69TGKdw85Wwz4y1fJvgyJRJBN9pUweJkVBeCcez5Xbvd2QpHxoMzm3cGPnMRZ5UFDGU6PCKyom5xniLQG4pB5",
  "key40": "35rv41UWBGwSi3Y3rVU4TgGDc9Gpf1L4gNVaTPNBJvKY8sFR8xAHw3gHUaVCbocnY9WrapuEGnsKGAQxoYzKzRyh",
  "key41": "4cV9BZo2ecJmymvtURSjZJLCjZPcjajK2EqnFkom4twiUpeMoVcgPFNXR5LWJz1o2LDhDococtqot7ybqzXDHoJe",
  "key42": "2RBJVj6gXGbrVmHRicHu3vHj7yFfU3xQXPeqekF2vbQUut9oA6jDWyascFNJz66ZkCfxXJyxPARrphCVketp3BTA",
  "key43": "LwZ5yYwfqm6GLu2nEUSCQr2eb2imHjop5xnSTh6r8Y5s1Ng9j9uKbFpVmGBQuk3t2m3YtimVhbE1rxc8VoMCvY1",
  "key44": "3RRrPihwdtPCyMDTGvJunk4yHRYHZ3qsAkFm377mdQAeLEduUnSkXZP2NP2wtL9Xi1HQfqTn2LFkNW6vNJQFTHc5"
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
