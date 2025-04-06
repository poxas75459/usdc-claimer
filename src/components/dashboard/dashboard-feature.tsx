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
    "L2hS1XPn3heeLc6C4riH1FtqNimVVtuJZBQUxM6AnriheLVjtkN7HmMDLHjBbXKW36SCgfMAWZStZusJMaHExSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uknNds5mje52EAj23e5oN9jaYVbokuBhr3wREguw2jGi2qsUuihrmxYKYeqrJRyahbxETHuR7EwwDtyyrRx7JS4",
  "key1": "54bC7NwGt6bPf4Uy1aZhs8oqHaZVe2LTfD4r2tSZw8xEhBymc6mPATgm7hLLnRBkDmu4eEWYXkGY25Ckgxc1hjKz",
  "key2": "5HmGzeiUSzPCp2a68zuaMMGGRmgr5ZrfTf5g1YiWB5DTsgznEBu73FLb8otAe3h1T4rZi6mSjvrQhuhgA1jbrG57",
  "key3": "3swsKgQb83tzK9ngCNDyGjvj6fk648dvQccFi92kk869SW7d9d8TvMkoFZSCaxj26SJ3y3fpMkN69Z2nHd6CmCAT",
  "key4": "3oiZCsz8TvkJabN6W7gYfKuXszqppTXkBHwsNUuww1taZWdVqURvSHX2aSVeses1v5Enaip4iBG7RHxshudC9pHq",
  "key5": "4ZrrqoQceFxf46p98mDvPXLuUm8hqs7wAStrqd3EeJTBeAv1SX1XYzPnh3sYNmpSTkuR9RNstW9ezRqWWUTMLK3w",
  "key6": "4bqQbe3LNGZwATVtj2DNa61KxbP4KGVqiHWgoJfGFdDHZTAxjmLPfNprV3cdVLKH6XoHTSVjL9bvCUr7jK97dugf",
  "key7": "3tXZTzHohT7Ai48t5F6xTQuMs7VaK7u718h8aZrGyKMNx3QQmSLWVzX9eRNKXCPDAh19iRG9gb4uBwFc4WTnsczC",
  "key8": "2xLuCzKW8FbukCYKk3bb2N3JTx4CCQb5o2P7mhbfRbqqu7xAJGZaPxaf42VkLqGhdecvanWvt8tg6bddgZ84Hn9m",
  "key9": "4tLvmPjKjMgbuaGpJ4JhhECKqaG1Xn6NpQ7xzQopjokvPGGFPENHrg6eXBti82msCnePpuNQUbXhhZxLnCDDs2Nf",
  "key10": "4UaWPb7pB3wtVBoT3gYQikEouvr2DucuWULfv2nwsvndQSEn8kX62xYpEcJhfNkNogNyM29mY7mTbPQeWuhLYjbV",
  "key11": "2awACdq2mxxuVThQCDBAVbbvLWAfwwQUJMsCrTv3yrFWGLLWrZdXAFwYDtCrn1manyJKJQHqFBhN9Ki74vp4B9xP",
  "key12": "5VLZdMgzrfyPNzCP4PveYuX9tTsXmq4Qmjd957ErKvuYKmA14Bt5QJzxa4AzDp3P6mpznySxZbND3hoBzZBEZrEw",
  "key13": "5A6uwrARdiWBgKQe9RfchJcgq9Ki6UAJQhMYSXHD1EzbsNNkdi88iWKrCqU1EJ1HLZUrENEG2TiQfF13WwtvfCKQ",
  "key14": "37enujR2vapZvsCScd3rufEwwZn63Bkc25AJoUg1PTw2p6Ut9w8vVh72aRAfN1U32xifRRBqZD2HH5WsyH2SUcdx",
  "key15": "5g5bBtgHr9LixADthbSQPWhmkDScRwSEk9yK7WegC7zbGzWuQkaCiuPdhcF2D5ncx7wDfm5AaXYupaoFGvUrZpDk",
  "key16": "3JnWYvFNhouosXfGyMMbziPWj5WWZvyiK3JpPLNLLtURZ83DMmqAeUmpiP8nEdBBSwndRdeZKTfY9CsEuw6YZgq8",
  "key17": "2UjXCs6EG1AdAoBhwP3bZxZEFCrNnSicftspSzQwVRRntdpvED267eTQKeHnThoJ5ZTgFKVJgHkvRSda2iisjqxg",
  "key18": "wU2cTRM8W2bqmALLLxQXQ9vAkQ6BAVfv4ctQk4b76BzrBudabEtXBsLyz1NcS9HFmX1Xsi89aZT4qixLS9g8d3X",
  "key19": "4waKpoqDkePfsnyg13EYtuPvXmYsueanYbA9Ny1WuvRNx5RJawkMchQi2qPPA83KJLJizf1mWLCuL5A7px219C3H",
  "key20": "2xP81Db2bDouBQMdMnGxRVt9aK3BooYVTegjE7LgRqLjmjEdG4uyWQtZwfckYhkVdw5jSbgjdVENHUArRsbhN6Kf",
  "key21": "4vVtcT9udPZ8EwhGqs8LB7nHkWvEFZNy5UZNG6s1bdhuTEnkzfipPs2pGFe4DPFyUCncyLdRAo4USdmB6LNUq3jg",
  "key22": "5vW6H8X2gNGdyPwgBXz1mjow1KmJqjMb2GFnD7y2rP89CsE4Dbkooa1nPf9DYuMe3UjxjWmWCwTBFEC8hHLsRV9F",
  "key23": "q3pGkK9wbZh9ibRdzFtxww5NjXX48ZaQqwcLampTe6k1ckC8Yd7xFnagKC3rz3q6HhuRR9ZhV9Z8eUF5gjwbWuR",
  "key24": "3XVcaKkwudxkWqLG2jFTRvQVUGZ45e2XPSnvWeDgru6vEaMNp8RzBZW4i1ykqDpL5T9ttAuRuXipzDpF5AXfKpQH",
  "key25": "8d8wFw64UzWFBYKnRNKnhwCG3CZ64f93mcQevvQmzAWg218Jr2pjCHeTS3vUtd2hnx4hPp6ijxyDt3QrVaAkP8T",
  "key26": "4NQs6vN8PgckhRRVYkv5wTh9RNQGZcwruTVnFxyZZJvGfRLCnGhr8MnUMxr4hVj1nEz6WjmVLmUGBtLuRs2sJqu9",
  "key27": "4SqYAyn653pqsNg8NW7chjzQkCq6F27Bp5t28mWqixmMHCWmNFvTup7KdSnarW2nhAg4miCpro2voSd2EVgMKVDE",
  "key28": "2Ld5FuLpkNzAFQsasctuXCT5PdiMRbo9C7F34vtsmKg2LygCVpNuniHFhLpf9qqRBuFzBqSwGWrbtcv6yJpeUTo9",
  "key29": "xPtcZkRUmnZ8i7GWNjAS1UxmpCmSdrtpnWWRCKq55VMTAPT9SndysJeXHSPxnqwKG2G34EopJebFaMc1VXdHxXR"
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
