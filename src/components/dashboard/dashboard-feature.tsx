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
    "5s3rbUwSCYP4Mh2r4hGuiXhcmPdkwh6UiPjcGK1N84DeUKfK1B1KLn2Hs5EbFw5wfgXSN41yAAuDagsjoAfZYngh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XUeJQWokMnZbRRrcR8nebEKzjmw8dvjEHn1YUYALaRDhwoZuF12hJN7V6zayErnvjUSfQBFKW3ySCuA6sDV1YWQ",
  "key1": "3ZcdQ6UKqMadJbZj7LfybsgtpfWJATeYWRMw2XF7EfH4ieXnheqobLUzjaznqjkAdzS6W3o7qVDDT5Z8v7ZFEAQw",
  "key2": "4KCqA6HiTBuwuXbvT69VihAve7YdCfU7mxuRPpxufUw1iWurAHibiidWMrArfmLHbq19835P61rYttKqUidn8ozY",
  "key3": "5saaDAqVxKoBm75bBQUYj9EQqJZVevpdv4xxWTjFBY6zpv52JudXHXkMveNL87pFXnQ2na6rW9Rm8nfXnHZsr8tR",
  "key4": "MjRzWTqV26GgnimPSR29jX5fedXbX6hp3Wn242EC666fzDUytJ88RT7Y6k35Djrw41xMDtvUWsk2vMe7KusruoA",
  "key5": "2EyumBqSG8m2sjD5LhEjyzjHbQyBTR9WF2V7q6EsxrvCjbHZiJBCpKzEUrBgHA7iRzThupAnqQzDN2tQGUm6BERh",
  "key6": "3EymKed7DzLV5FuLyWknjwWyLFuAa5tpNjw9o29P8L4PzBBjjh3sycnTezXErbw74PZ8jKYHtbHgAaLfqbaeYxqN",
  "key7": "3PAwse6WeTnUBnnavPhizjN5zHN15yRRxNGQhyp93Ra8XZHRCGem6wcYztaNJVp4c4xMZE4CvfdEX2KnvA8BjuB1",
  "key8": "FKnPFMYe4hUAGF32637NJ8Qi4YQfmiRZf7iPERXJxUXHgLViegacMPyWv8iHoqwQghjXLkwV6t2Yq6LTZjrV2rh",
  "key9": "2Fvu83uanEWNwqQVFKmewgj9njiUSpC5qDYXZE3EgJk6CGELDorTWv63FJcsuXiRxb5EjuVv494EVAcPfPiCM58g",
  "key10": "3UkjiQopXHnQR5994ebbUgaPWq56miMbZLu85MceBNqZh2H3cq2rYwEWXz6iubWuMVNEnryqdg3NvGYMEB42wauu",
  "key11": "55d8AdkwnKCMiLV5aoGuFriim5dWqtx3rBz6YA9JAX2b7XXY2sDZqv3fKBdC5Trq9CtKpHxgN73ZjGtfi1PqULqV",
  "key12": "j88htGbAwbheTnUgS9pbJKcMQNPJ9ox5iTCnvJKiDZJCvdCayYmrGpapeYGbddJsAghCHMNL5RJBg9cz1ZJJPWU",
  "key13": "33ZAJURVo8zryMdRHxthdxm8GKFVyfsumHmuGL9xWCDxeJPWkWb5dab1xH1QSonsWorioZ8ndc2i7KVaQHsE42XX",
  "key14": "VPzHjoUfhxHV8tbqx3irNVYBji1jMoVtF28hfDLLnY3aRavB5LgxZtpTakJpfuJdu3H61YuvMq2kZKkseHFJUfG",
  "key15": "7oFFFq7D2NmJAVvjUR5eH3aMDvSLd7LVKYqinKehGGQgT7rb9852Y8q4ntQvsads2TgxDKSmkTX9LNHazzVNdvb",
  "key16": "4ratVAL6pZKd4dzg7hP8knm7m44nqTV2ozz54xtm4pZiYziQWvsm1XGAjdBdadXxQ5ZzBWQZovqnTVbaBwM3ZB64",
  "key17": "3TG78v5ddAwux1WHVmTtGSxrjTD7hJExubm9RnTNBFZVoMJkzrKDUm4mDr1KjKnFBkZMpADNzvd5FCsYA8oScKeQ",
  "key18": "23S3RgawwuDg8A8eSUbPzvHRz4Kv6rDgm5tjXznHYVjhtpP1uAzTmieByrrdpGUzgbaynYtkKdJimo9BZKSQfDbM",
  "key19": "2wYcEQTF48X2M6C2fYeLvkPRy7sonj2gP4b2dySfibebnc9Ptq1Zbq1zp8A7rXfUR3uJ7JeC6uWEwtEfSUMYwEZs",
  "key20": "3UpSRXcqVDrv6wdpxnJSHvxYH9Yrpt2B1KzZBbcAVTLc229Rrgk49pucxpwMr9MSe2q3v44pt9TFZr8wFJdX6BA4",
  "key21": "3xE7iFVhUzsYmd3D4giFMzi5ePhj2Ruah2pQPUbS4upVZpxPdFKngVVJrkmrFawLUaGQWJsw1tKPXmB8a1gdv1LP",
  "key22": "3AgLUL4hVC4nyDEi6Pn2K43hdLZJqprVvZHJhxgm4ALWujQU8fGUQAo4Bwthqj3T5Kcka6wu3B6tXJgCGf29GwNe",
  "key23": "BBi4huqPby4T15pQ5Vs8YFR5xx8eLBNQkncTUhtRwvJWGTahmVehaiv2JAep2f1j3iFAdoEyg3Q1vjrHXwLKavK",
  "key24": "ekVSp9ycXX8whXu1wdLxGqdiyKqFJzpz8bHV8QFqGVbqNBcEWPS3Vi91boktfstzSvaT4MLucqLJHmPC73nNaWJ",
  "key25": "4W32VCf5sPt55x7QrrY7Wv5FuMoHdeEA8p4FysG2AA6mSSLRJsBqbEUgf2tBeFT92uLBHetXiaZqvkzGzGanvrUS",
  "key26": "5VVpdjJZy2R98gis9BW5nE1r7DUKwmrBeUtywWHqJqrQh5WBmgYwn1jdFujkVDXzBbqEkxixcm4EkUGrPVDoFZHc",
  "key27": "28P9c8VVwFL9BrMyPAGPtp4HWDz9wqUb2AtV4RY8GuT71ab3rHsiDoN6fB8baYLiczckTQnCAdy6MyFGm9xTWfND",
  "key28": "46XcsJnqQY6TQzKZV1Nfk6KH9W8wYKT28sRfa6xJ4AQMqgrxqpGCNnKz1gGbva1escCbhzUe1TYg7FiKSTMjnW8H",
  "key29": "2CxN6ZPZZKKAGf4HdDb45PRumfH2Bg8s6gzB7iZfdmLpPb6SgbpVz9J8eoJcUfmfCgr3Pv4aTtZMEf5g56PcdZCz",
  "key30": "5xgWQhs4hxf4oUmWAi9GSxJa67RchxuC3uknUCgkXTveihZwEH2pAibztYhE2p7Ws4PnLfvN2wgKQ7tDt2T6uQks",
  "key31": "5Tn3jYx6ATsbXVGt78TgiEQB4idwXwBPb75ocDgms54WwPHD6LYS8M4U6f6ixXfwfTHsGRmr2JwQNQ9QhwU9ppAf",
  "key32": "4RCKUFgkgnSBepNJnQ9F8pcQ3XZHcr2D2TpFwkC9sAz2ijbvmYmETvkX5k6iPQu6SP2TYfDCrZmRRktQS8nYLZ9X",
  "key33": "4FJhn7NsWTn6WawAspkgMTaHZQJZWtoJ1MZkd6H8tCx89LMuz5v4L512ygFUT8UWsYRsb2nwp2GHU3n6NpZFbif1"
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
