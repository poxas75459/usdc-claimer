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
    "3zzoEuJBG9R84HFohsEFCLRmCYz94yjZMjfJpbBvfyGBjKGwyeTg2HtouFuZVuEAhVvYeMWznWMnP3mCdaW7qgya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "664fR7XKkozsMxom1pz4joAWDsjaUFgTowxEok4rVb19zSN4FdnY4rzXUsDgp86GpQHK9XDvh1RaZG3F13yLMHZM",
  "key1": "54tDgjTxK42vEhsBe1dNzszcdkhMtmL8gn52YwB8MrVBZhHWRzwxHBFY2KhaKAGicGevms38NeBiYfKvxzhYRbQr",
  "key2": "4wT9tS4qXB6dzdtrTHrXBj3oWPpHcyiGnXUNxdsUWFvXdtrKudRjWikezUDBPABsSuv1rYwUqv33hZc3x21M75Kt",
  "key3": "4cSJJWnRVEeSwpVQ81Agpz3naremTJdA9wPjkxxu8TBrzmyXT1VXPuTJ3tk6H8RtewiMSMZgtY6j4gFUab6jEaoj",
  "key4": "5jj8ihrTYXdK3FwTfZ86NFmAWPFSFdmjYwznGzU67X8Zv8UJKqsyhCVS1URAPENteWuoQxFsBMt83xW44PshPKfm",
  "key5": "2gwiMsqYarBeLrGBJrvEDjFGUZ9qdCBQYnruX3ng8hyx6pTtn2zRMgo7D5XioWgsGqd4zct1DW8uydhVqxThu5SS",
  "key6": "MSwTAXVzZfXo8db2RYaEbRNXvmxSfTo7n9wisuh6CSfD1L1KTQFMiMqN3C6BH1Kucx2MobUvKVuvGj7jnaFoHxa",
  "key7": "4wDrWGzRWTv9bjnUd9vRJgJUss6Eowcmx3XDJ8fncZ9D57Kq28V9d9eDXdqZZ2JArZ5wQURmQ3RNnUAmAaya7RZ5",
  "key8": "3mmGhyKPRuuGPig57F95i7ovTU1yyYaVUPR8sGmUz13ofuHvNZfijzTcKeMau6JMP7bMHPsRBGcwohbjcGNcXQcy",
  "key9": "Zub3bkBQ4kF1NAZ6d3U46GaKrCrxirYkoZ1RNoYGoZRdHj1p3SgGXrAJG96dt4fWzKGbKiCUUyvryGvAmUXc3Dh",
  "key10": "x3Ar9crrrvio8XKAqN81gP5ty5V5bK5RH64KVnvbtPqkwgtgbgEYaxosSnfuZiLyG35zT4FbWj3ESoXPkLqurmA",
  "key11": "5L47f2yYosa5xrwv9Hqc7Skey5VXJ6piYVtwxvNn53KpT5kjCPsJQnbreJBXh7whMsFw3RM3sYwvmDPpqWnuwS8Q",
  "key12": "EFJcTWAZ1qWXXk1PnxeGzBvLqVkFjJFudS1UicAHdrEZazY91uUhgdobCKpfAzB29Pk9JXREaH6YJPWENs3VGtb",
  "key13": "4xokRVSnLEZMygu3PmJCKpf8wxsbusS3XdKrffQqUBiPDwWw9M26bDf5csp1eHJkcumKa7r2Auz2ksEhtJTzrsuq",
  "key14": "4KkrvVDrzmQvy5ubqZzWuPuDZp774YzDKyuryAwQoFGPcW6gv7PYYCYEP42Xz7ssdKg92bm37QzdnEgxbrArXSaE",
  "key15": "VmH9jowgz8SEwAjmMY8BMXEXbY5Yhb6zW3Qdo1GkTSsNggBHgXWQgTdFY9rstPt3sBVaNj4q6zV1fGVFtYkkQ1m",
  "key16": "2JbEz7GK4Kv61jpejUZxfuwewNDAG6egBxEAJgVYSH4hoj74ofXcswLpXFmjVxoarXhsaXrMn4iPddm9cnQ1JGoD",
  "key17": "PuP1JsE1LTvZjzujHvFZtssgGC6SaVCLcMyGsPQm1Ru1u24vDRmAvxK1eY52jPR7HeZEqbiwkzRoyS3F8NSArJc",
  "key18": "5cVLr8aUA84vLC432ZsAaaaWsHp8hQ4fdkX62TecyJWSv28kjNAtNXyg1sBxP7p4pAGcDuMpNv1VAPi2HzuLjUPn",
  "key19": "ME15CJtiUMaMaxDnLB5ZacF273kLt2QEMNzfajsHELjZ47GCwXtQi8GPUZf8vfPnZmV5f3gNYW7uzPLuJnrReWe",
  "key20": "eRh8rKQyzGsyJQU2XnSqRsHY2nXnWFELsg1u3K1hV5oh3Xq7g1zZJ7EuiJLibuGpTuCuE6uKxf9FQBcfTDPYS7W",
  "key21": "3YaQaF4LejrMK33t3HemVkqvuM4bC3fr1EiLGiBDQF5AvrLDMqVPEyfjJzMG4VSrhW83wSBdbpDi2hafQGVuNi6b",
  "key22": "5nqH1KfVRQGmfrmfyDSJcYn68bu5vBSqZ2ciQxLR2SjXaiTqEDgU1NjUy7cGnaSpdbnLgayt57A8yPMbwgasuNjh",
  "key23": "QE8QFpS4xSv93nwRq7nZBM5WjnwjT4VpEE1xskBABs2JpcXY72UDG3RvLVQJ4xCQ4SjoWUmJPgGJBxZ7ZVVwLAL",
  "key24": "5osh6WzkEqxCXThVHaDSxYVcJPpLdfvy6Hkbbpp9xEa49De4nywTqVpKcvCjubE9cXuyPA2Z1pkuBCxH17TQYhyQ",
  "key25": "z5Ai1ZNxHjomJWzZZXgbdLztXUdih5DxzxWGmRXTKKTxPnoCkoRX2ZaZNkQeViBruDFweA1hXttiyNNzWfvuyop",
  "key26": "1JvMjFXdRwrYDeqdPPqtsB1eg1CZ71AZtbgQ4JW7WRhZFWdWx29BnkzcacdF3yugrCgJjL3vzLmz6V8utHkTT2U",
  "key27": "2Ndf85MB9SBB9HwxG5CqW5bnL9v9FSRLNCvF56svqb1Z1tcFBwGprjJ7QCzR8szZbCicpZsRF4upbLVeVTVdKzH5",
  "key28": "31LEhAFGzecNERo1be1TMUTo6d5g6rka3JRYpkCCMNCi7yTtGNuLCZ5kdoyKzBQaN16rBDNuE4zWtWr3bc1ixpWP",
  "key29": "3k5HgCih6e4syDNsjjC94nV1ykeEWiQbLprqbChWdAca9HxJeMKawiP95SbV7zgj3TMirEHgsMGApzxwe3KYSjmA",
  "key30": "127BubHPBhj8AiA88SxagWxmK8pqYz2URukKG9aTrXAt5zTkVZnQNxZFJHNowA8utLGKciwq6mMo9kx35fhpf65r",
  "key31": "3CnGVzLJSNYTDLVDGv5AoGqMWdtT4v5WyWFFueAhvDCxbZqc7TaeYStRSsZ9WVP4nVC44efWhMb4DeyzWJ5rDegb",
  "key32": "4wThhKGm8zC9ssJuh5wSVLSbortEmm3HJMBBnjNofPDQQaperBZDhiNzWYKgyVgp36kgKpnL3TXXeN2Tr9b2uZMS",
  "key33": "fPoZor9V455nJsH8zXWrfAbARFzA44rqrrfsGkg4EsvAsrquwo4sGYxMCvy7bHtAmAHZv3bMisYgXCUJrQRv4GF",
  "key34": "43ovAAXPgTsUFCoFYGk2ijMsenp6MrxiGQdM7BsQHL44jx5nUUaGPf6vYJwYF3DQJ26bVck5e6XjgfMYci7QGXwQ",
  "key35": "2HZdsQpxHLEts9aovSbyDhMizgdLeV6uHwoQpr8fBY3C3KAcieArz49QSs2sXvQVJxgyWgUcXFNL7EfpKyGD92hs",
  "key36": "4rhufzNQ4efMcaX6V8tQvccx4yksgQtgQ5bm4AZAbR5AqHiAB47Rd5N4zxq1cy9QxDgSYt6euttAVcnutqZJA4Wx",
  "key37": "58bWnCy1YNitvUXESVUZoDaQTCYSTAxqeiAZjfrzHXi9bi7h2gnSZTBVn9TYdULNdhdxciTWTxfhhGBY7cRkXa5Q",
  "key38": "34HWe9g5BnFJJkPi8P6qYDiSyXPKiitzeNDXv3EWT8VDoH24j4KK2afUjD6M7Qe8FTAvjjqxokbyc43JueUnCqT7",
  "key39": "2xifhf6pc7A6LvzMXQTpSJufSMUFEKAhmxMS7F4UB4Hh76Sdtu1Q3bwkKgU5SS1Xs7tdfcspEiCQRmL8r2qRjdw5",
  "key40": "5vavZbr7aEvVtp7n4svHDRWGK2ijr4ZEUw41PUUVyx2Tyj6Kg3TpygFjRg2tqsnBM5FWtP7B8yhivmwAQQCkEcpL",
  "key41": "HRghAJR53GNWoL6vw6wFCj93u19Z3eso1af9P2AMciQcRYjUqBESVBmWfyxcrEnsNSzsX4Sv1srzPVTJsGHkHKE",
  "key42": "2AJk5arbfQNeTfrhnGWTx968kxdGvPAuLp57XquugVjsMabGpQ9MMWBSi5twKEWHeVjU5LqryxqYXwdsiAnvBzH",
  "key43": "PTTU6sWsHhDAxGaX1MRaE7rW1Q3af15bNbLZYHd6cRxHFZZHqbj2mK4sCrXt6dEPJhhgB7kNkVTn9ay2kvPFS7n"
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
