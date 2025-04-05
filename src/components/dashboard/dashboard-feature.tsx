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
    "5buh7LmVAPuZKxw97HGGAbLC6QL16vHkd6U67NtG1AppwngjQdscUCDSm2SFS6LJ54vo7Q7bJUMsNSJ9kUM2xvhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oUhXsfpdpvr9Rh8ed5dcwqch2CsSmDjxE1YhVD7Gu9uXcmydxjvfUTBc2J45fuyunVAHWA1paBd1UmpQSDmhU9T",
  "key1": "2Pv7R4yh8MyogmTzC6TsrNvjpG6rk7MMvquusLZjxAWJFc7y5U7SHgbncAVH4aXFKuanoLfrmbY8q4QymzQG38rE",
  "key2": "3maUK5JgJD8qLn4yfPHERJqJy2RHau4Cni8ofqT2T6TM19TPYbRuU56hiUTyvNV5dvkeGQzgEJFceRoKmrVNb8YW",
  "key3": "4iKops2R77xkC7YH51Zxm1ctPtCFa73ECbDTQLY9oLuGQDfFEvyxg9TeupyvvxgyMSdXPb9Mcf6HnPJNxRYP8aVY",
  "key4": "61txS5DSUtjt6UBoiQJfHQrRWdsCDVH6wUNTZ78H9rCTv85j5Fs22qgH9dhjZRzHEkfgMqnKktLNCAbp7rP5KUnn",
  "key5": "253RajpumrHe8p6H8m8Ziws2j3JWbomYouTQJAL1jS4TznHBVz48RrqCUacYbiUPhJbS7GhqojQ7Jk5rFeJAqNRk",
  "key6": "5n36UYxTYqb8FcHcZakzH14Ga2ykfXWwxGiY3vxdoGgNtTFBPeaij2v4BUie6D3kwv8V4puDtHMtZKo4atWK8s2L",
  "key7": "5WmDCkZb1f4aobRnZRZa8fse8Q8a6VVgJoEkeRL8U16Bgg393Ydak5K846YtrXu3HaC3KT5fjJqfYPcmV1M2k83b",
  "key8": "5vBH8KGhWuSbJULeeyPtyxDWVijjvqMf1mgnknh6NPp8m38jAYabUNyQx8qyfsBQ1XXcKk4h98wTMvm5euZ6EBLS",
  "key9": "5NXL2LAt4S3U7Hm45pU3rnCFzVdXCQcPQg83w3hTuwPSfbY7uwSnYqWv9bjNxS3vQrCquZGucgnUjAQ8BsNKEaeU",
  "key10": "5mskYh3BAhC6MgrJYUGZW2CWpJmPJWCdu6oxRUSaQWMFjFDMNu7nKMLDRLtwL4czRmMoLtLvycfAX9AX25ScFN3n",
  "key11": "5R4PRXw2kT3jFvTcqR2zJoWCzn1joJhv5zt4PL99iaeYBSMTdQMdpFYkAvuF6Xe85MQ1ySbnoN18Y75MivoDbugZ",
  "key12": "4yRnHbLCQAw3bdRDFBJR4gw5k8cdnEvafL3v5QqJTUkZiLiANS3h5YG85X8xQQhJT625m2GzVXz83jhveW3ukrkB",
  "key13": "3gQHVcfJhLYoEeR4e83iyEFSteXV3yXcWJ5n6cPdKEJhTPd4Q1whJF3yYPbkHkHwC4oAEmnQvgKzwTvuBrAUf3JQ",
  "key14": "4BbsbLZPxi8T9ejUKVhGtUDsDTS1cEESJxeo1MPNMMQ6816wEzEFi5L1EaJhQ9vnBGqoq2PXXobMWM6bMsaVTxVx",
  "key15": "4QNKCF6VPScnFq9Fcmz6GF29QYTtqkHtmaT5PKGhugQBdD3h4jVwfx8Xy28zKpDiy4Ddzko5uiaTcdbVPgKzuHXB",
  "key16": "58dn8dWREmoJZ4h6mnqj1Ryjd4Jheof7WxYrQN8e8MLzXwWgSWJKSmeGjYordasADXY8gwCTZhWBfj8oBxzMqPpe",
  "key17": "2YQDqDraXmCAzsFCZnkTxzus7RS2sNTnBPDt3o7jGKiCzPja2uavHMS7mQ4i9ExrxHp4iPYsu93qc421dJsL8hJg",
  "key18": "3TXvaAZPeipvzeT81mkmrY93jCaRDYFVUuDM69CVKSj3vhMEqchtWWXL5Zk6AcLMbygLmVpn5dvYUc4y1H8cFMTu",
  "key19": "2nRAExVnR8dKM3jmkTyQ8S2axzSCuBihqjbRbDBraK56ZdEcV8FArRBnPH7iJA8zbouKSHa5SLsWzGXmFgQnwkA4",
  "key20": "2yyS5AiBsEocKKVbL7VZhTv545eXEzzLvsvsiUwNGutWg2S8fWWv64jyKbftiGe14DNrb69W1bY2VFeurCke1RaK",
  "key21": "5jyCPSPLu9X9Lr5VigkwUy1NDZnV2jB4vwxgZNtAvQiRkGiA4g5waW2ii8w2Sc1uAsu8YWgdhH4ZhD1PPLKQDPNG",
  "key22": "44U4ybE2jEQw8CLdzFDoh3FGFVSCXJt2Kxcab5JyibckuZiQkN5Fiqj2sgpE6XzsC1ZQpx5jbREW2HqrhQ9dq2w4",
  "key23": "19nMZkq7tahAPzYbw3eK8fP2bdGDsBdCe1vKsrbLe5AtVtWHrXHGPK4BmDqn2VM79x5kRauuSXhGLkim63UEtc5",
  "key24": "293ymkBnDjPNipuSNRQce7p4e7ijvSmBCpykWbf6KmjNu4gRAJeMrC6Jd5wWKVFGtx8cXARgvmb4cSbhCdHjjERz",
  "key25": "2Zv26qmWv76R3bhT1nFDJogNLi77TsaK169bQSM5U1WRfVocEZG8pQP97nLzNDAY82FrkqVJLCMRAuoFERwmpZEb",
  "key26": "2PcLgzGL1YykcBhTFcPutHBvu1xDvRojxSoHvCjCDLyKBfHvd2WNyHfdvvp1tAHbhHz6p8MHtbKY82GW6h6AVio1",
  "key27": "48ToPSipodAre5j5kTnBUi3K7UA1KKPsmE9CvjXtc1ujbXCWYHKy4RD1fy4N8WXzRJ4UzBiCABVJ5rKS1RKDkWnx",
  "key28": "4Lj9TjFMRNvZpVHQBHtzHNK7tpxbhqj914VANtvAPm5zXpmNgBxdwyyn2wkHgQzopCYhepdYBKRhyQvv17tE4bm5",
  "key29": "3uLjddYGGtpDqpS5rBkhNKgevoGZDbe6x4wVnQoAB8z99G6kDDFYKN5AvvB5YpQpyvCLuhsCuJh2jDVbMVACQ8yt",
  "key30": "3xe8nYyJWZikNPHLs9RWX8QAf829HL68DVwAZnMJvrYABseDyEg7NibmCSHsESgRadtahb8FRfosi4nDcL78kNLE",
  "key31": "5wyk6RUxKSkqm24KDVqjVwomZdRBqyEtT7c5mUUTFqhgkPUuRRiSpjZroppKSAickTwSXubiMToxSkbXqcqdW6qu",
  "key32": "5a8yxqEFFRSLtBGJnjU8Axe99MBioDD48yMcqMQreAkTmkKr58AJj3rh8eGep7WKj5FKUpRz5S7qmXkZMoBGQetd"
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
