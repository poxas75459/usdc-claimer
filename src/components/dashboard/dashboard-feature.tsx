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
    "44zTDvvJvPH6MTrzXUB4kqa5vaU1PpQ3Q6tMNhawYA7bLJG91tJqZdMvrastbVSrsw4e75vDdy7Y7x5m4sQEEvkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qWXinouQwCtPeamWAWjKj7BVWE6WjNUqwDZUHxdyXMf9SeCWEWEjcwJMVUt2hJwC2pFLBj2yzimSg9huYDZdy1R",
  "key1": "2drsXXe4Re16321rptTZmR1hnKzHX5RcjcULxTK8kdm6bpCgPpLCJM6S3MoSCZPgZEk1Bb3WVLrdTJ3zeFxbMmRB",
  "key2": "2aEPjLnoyuDp4Vj92WaM28Kw7hz5fnruwYL7bumwtdEv1Ysvb31HGfRNRiSyFgmWkMD136wiPnU7xZR4uW4qGC4e",
  "key3": "2WLQynPdHmwurneqX2B11BTnHAqx6XMde2Dr5YUvKfGSHieJAGgEaSFQThqAqRqjwymAbXkA1Rngjw57jrKVx9xz",
  "key4": "3UbBXteq4PDbTHcqjyYKAHrz6htnJPwWmotp91AksM5r9FUfMQjcLqsGDnysmXC3cJfJMh4YPtg9sohCcsUwxjm9",
  "key5": "4QG3CiDHoK4zE6aw6W9FL5ADBXYRQaM5dGiPhrc9mHjVrLbWPGobRGtKzJuHH8Nqd4vo31fzRxYi4vndUtteP25q",
  "key6": "X9Gb95jhEeCkejTeShPYPYhj8uNngrpqDSugUTLfi8aRzWmS9FeFZNjwFiGumB5oVuqtaVkwEZbN6xoGBkUcKCG",
  "key7": "48is3911H4P4mZUxE8iFFFkNdTDZGRcZ1YnhJbxawD7gRemyKeLFWdK8aUziNWBtJhNN8axvT4wkUCThbKDJKkq9",
  "key8": "3oao86facCgj5ik9hqZ4SpvNqPHR2AMmkHpEwRGFKsuuS3ZQEUh2Y4QJeHwwzS8xDiJD25Zy5B65Lx1gPN5UXGQm",
  "key9": "2WsvnNV8shUUjpypFt51G6ogw7YD3pGHZsaNck97FtQVm2JEpLuPbQp4kkccXfmrvD5tnHUinBoHVnbEviCFUAyH",
  "key10": "4mEqGfF43uJD7z8iMz6XyL7wZV3JqZc3YGrkCH4mCwWcqjkGdfa1NpktAe8bpuLZGUDMmMPhKzG9HDyCEwjU1ykY",
  "key11": "49DNXDmBuvrCotPsjzdANVpfjWMGJHLy8m2u2xRvRbtXRjTFbEDMpPAwdK56pxJKLQNNovBKjJg637pRUN9ZMAnc",
  "key12": "5TYXAnez2FWcU5a25aNV4xRZpNuU3xSjwzeG8WwpS676asD55nimQU4Uw3E6Vuj7WWNkyErkJG5iPaL6bbUD2pKg",
  "key13": "4jgZnd3VUveDdjYkD2aSE2oSa7PfxLRAfgsyXwsFgKocdZr9FHy6hQPKEPwsZGeCk6TYNWCeo81J7mRMNPUPziGq",
  "key14": "3vd86Y4mKLhyJ7tZw72wX3WYESmwVy3mnPPesWyHqn8Jfp5qKusHr5sCaD8zMt9zdZV4KNWRJuXBFLqU7VvqYvKp",
  "key15": "599QVxAQ7wLFWdYvJGe6sKVa8dsC4EPqZrrNnaRtsTJEpAeFEmn6a6nZBPARTiKF1mhUcyW5zWgo5VzbDvBwUdaL",
  "key16": "SdsmQsEynT2Z2KKaFkFwEBBQZwcHJFxo9yMermWvPLz2bJpkViihRdKcG5xRL1ZqGV5qe7wU4nzPghoCYKgp1k2",
  "key17": "iPbVgsn5iH9E3BEkBxP75fU4GB85tHN4cjvAPnukP32GAqTeC1zoKnz1BGT25n6o3NYKdatKcjo4SUFFzjcdjbg",
  "key18": "2bHk34fxRG4HSBZecL9arkUHe8SFLaHJPPr8LZy93UYgFQBtLDjxrr6X2TQThf1uwhyQNbXwTbRFrCmewVFNmwEE",
  "key19": "3AsqQ3XCKCwfwnX2CUYcg8UbagLKDpKcUNNQjGXgVh9EySEsSpBRn8GGGa8GMFpbQMTVPKHWzHpLBPSgKvtNXhUy",
  "key20": "XPvDGRNuwCvUo8v8XjoNkzfCGXApt9ZazKY2apV8fmWzb44w2qAPqCH7WgCpEbfHaMvwKTJ2knara4kyPoKSZLU",
  "key21": "3pJDhusGrYpcQaWcToPfnCtuGxeUE139RCEPukWRPqEYKjXk9KssTvKvA9hhN7KukqogL9iG2AvGuXo2DshzvfFJ",
  "key22": "3FbGf2XLP8H5P2N8So7Ehy5YsxnQzRLhJyXYK4DMHUUDrn1gocAKPTEkikNq97swk8ireGVhvBRSBLP8my8pa2MV",
  "key23": "3N8hhdxqQ3hKhgQCZc4gboH8YF7Y23T9KVv8qQTehEeDdSKHZZdsGeEn4tU7SNK1tp64FYXbWUCmg6Q8NzKd6SRb",
  "key24": "5LgdGeLsuCRZynQTaYWzEVAWhBkthNuXBZmdmGv7SngHHpiCNfjwP8UjcdFkD3fGx5b9oDbmY2GQp1VEMsqMrny1",
  "key25": "2LDejR9mSx1xyg7CmrkUmgY1vZm6kBMtso4TNeLv6mtBtaxDmY8wYVK6u8MwWkirNmdHbfuyTdKwBTiETnKxCuKQ",
  "key26": "5K3B9xAdpZLTxVEBEn6KhQMhZfu4KroQ2iePUKhFhS25NmVdGCXVsLPuDdEaP6UZEQPVVmSjGG8vNbepUZmydfZ2",
  "key27": "4mMaTjZhyuFSBcYjV1yfuW9t3jhqUdxMXA4raiC8sGLecv16yZ6EgsJtRtKBWj4mJ4J1zHEw7jFX4H85sKq7qaDP",
  "key28": "5ASmbti2GMqdJk6wU7B4xgnUK9fqY76kL2NQxG6EYjuzyhWD3xqpwwgQ7AGsu7TGkzyM6qFrbBXuzfuhPd5EXCeP",
  "key29": "4sxDAGdTeBjGLciSRcg5LZaagz9knKFobacCZqBKJoXHjghDiuxaCiUKHgw289bVnKmHhi5XCbmzRbPdmHJd6KWy",
  "key30": "4ab2JUQRr5jze42E8R6TcBhvNvjP5ujMe1ehfA8xMP28gSBAsQCDb4iE95RywYbVU4FjyPwF1k5SqpbTG68D7GaF",
  "key31": "5cANX2b1dYT8DedEoS3eHsgHLkHWX3biv2RYsmmj8gTxsonqsGbzAkF8PK8RYGGyWNZzVNGU3kUSTRnQnoQpPsaA",
  "key32": "5JWTfPkChnuqxze4JBb7cDwxjbkqNjBh9xH4Q5pQqRXqCPFrunxYjSpmeACEXG9Sk7D4JfM7UUJ8tLxKeKgvA7B4"
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
