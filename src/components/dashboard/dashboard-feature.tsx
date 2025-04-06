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
    "2bhLH6c6QK5e5mEmW886x4JJ7kZQxkYeaDaUqBmk6qT2iEuhDBbA9RbNv2A6PiBeQqZi6LLAK5sYiYGKrRihgVpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46iSGvV4Lau6BstKvBnFsheLXTYSBCncwwcwVpfC98eGCY1GNUuHVS5cy16VCSTbDDcuLwKUPkQVvBBK8ESbpDhu",
  "key1": "2L4CXtS5CXyfAUkt9bkBoMNebfikyUtgTGoEyuhvdsTsa2jX9LriFv6qXNm9xw31DgPJucF8S9hDxsapnHYatBq1",
  "key2": "4TrKerQJvELbh1y1x3YQbDRLsWL15mDjv8rgAMnpqjLvsJ4KH8wGTeYr4hsGncYgvooeGaZ5HJamnUk2tb2ZdShv",
  "key3": "4M2iPNW5NUzdrhFBKfnceradZ1KVz3C8XD7fjVCMmcTX9n3EDqk24Yquf1Ui45r52pQPkQ7Zr46zk8nL4LqJWs7L",
  "key4": "3979Jwhh3E6FtRyfNx5pYZ4871BkMa2xd69p9gB54MD8ojYWp7TWmxfpqYrdaP4FFUKXfbva6eJfF6EvveNKzSiP",
  "key5": "4TA7pP7zMnvkaxjtRVGMqfhskpErDBJYMmQwE8wxpTWt2ApCggyFUasFqeVDYrGQ3eoTJPP8LEbWnwuQAVUqYPcP",
  "key6": "jtHDBVG4WQefKaj5St4ajhPJb7PQBJf938PaYckfCQzGMDWk2Y8Q2S7sSxJYc7FVf93tiZHSTcPHpYckJ69VKUC",
  "key7": "2uN3mpuGASbK2xXPmux22gYZLe55ifJEBrxGaVYDWNK3PfqjoSgEoub18Tov2Sr2c2TBcVeyfFLTh3cq1TkttZ9s",
  "key8": "474j82q1awx6rSVVdi3vV7zpxwtGUNZUKuf1iup8amCriTGzJu8mjVm7dfB2SK9dVJy2U3Qzm9Rq6GVj73ShMwMo",
  "key9": "3f55nszPyotJkhhqxmXbUcbAxrfAM1Bjz9ENLusdQRdnUz14QFLKnfpi1WtPtX4S22e3N4VjCjSMy4gryR56TSEN",
  "key10": "31JRGb8yn2kQp9nGXWEkgcAB2XW4o291kA8hpYkG7VvHmz39LCU5XaiDupYgFtZGDFWo9sWKZy5pRBjZkyRsHV8k",
  "key11": "4cVCAUUPay4PnCEipxdai4FmaeZ1UWNb2CPrYS3FDcbRdQhqqzU4AenyY4AcD9CkXR2FRGQYWVTEtiV5AAe8RHAa",
  "key12": "28zgVFBsvTAkyJ94bhUYu8xFDbTQNZQkxUtyGN4QBTGErMVzKKXAdAYpjGM4vPBPVToLWGVfWW6aGMyeufrqsRvX",
  "key13": "4Z3bwMZyV6kGgy2TE6uzwUirLc9HpQsrzVUTU4YJGyARyEzPMExf9hn9UzTKkQm6H9jfFt5sPpZAdNHo3SVSp3VW",
  "key14": "3kTwhu1nSUytwfEtTJb18SwegYaqumHHDFfbde7e1kMSRoT3cbsb4jyGADwsJ7EX99cyHJub7tT3M5ryny13pFKp",
  "key15": "44CPF8PJeS4UThQSKPxpakYok34VBG6jqutymvDi27TUE5MMjQiWLqfGazM7mYn7qHskdr6Ntvzx854aDQtPGByc",
  "key16": "4xexn22HdVJ97BKbEXGS86DYP4np5MhfikPRQti1c3cwg84CoLMif3ZhVUzQQmrSaaju9Fyu5X3kyC1JvoF9sh7p",
  "key17": "65yHevFoEhocdYNTByoeCWXRW9M3M7BAHP3thBnC2wzpGKXjrAcqUVpUeDU28PWQBNAgtD2hnNQHt1iVXdspqDUT",
  "key18": "2cpnE64gB7wcuYJpLZsAsnGiNfJxPK2iGyL47VPH412rzWnZaJZfahhMMBsEB5pJAexy91bzdgGASd3gs2M8WHXi",
  "key19": "52xZhhdqwygDg1VW4paqPLx8piCrLFktxxezJAkAH6o5VPM1X23tXj1beANEKTmq54BJSyAydd4donPgoyMPuJdJ",
  "key20": "4JnZuhytbNFbuYiM3HjwDg6EE4w8Ut9GDwzrwV783hXpvcrXQi9JhtR9E1u844wkTazFHrDBtPHNrLwbhSdU2TAw",
  "key21": "4yvUtymemVpMtYrw6f4DBck81cV426A7RtrXN9webjjYnhZFDLk3TY4STCQxh6yHypwCyYKtpQumwW4qyLkMpN2Q",
  "key22": "3dqg9cH51irjS2aenwuWerZzzFd1wbHm5hxJBGSpDZXtEa9jzofEvTAfc8UJbAzy5PvHL6bnLYiXSwTmU18BGm52",
  "key23": "5UqvCCYW4fHHPe1UTGFLz8XtHhqThWXdrJq43tmHfbLZenb21oe59jY7iXyLnb7rza47ZUdJKUa43aaZgGBrf653",
  "key24": "644eFWs8Wq6YzehRSUd1UM5PkN1PzxyU4G18zhEJm73vG638DU9zN7TvivitHgZ3wg5akzLSqH4W58yM2CyDMTqz",
  "key25": "4HWkiNNZBwsz7KPPPie3fwzd7EUUbggfvtc6YpfdZ4obNqnAYCXuzEa6xCSgrbTtPk5xscbAHxq6wHeFGjeejXpa",
  "key26": "4HQVNDhyy5CJWwy6Toh1JWnoMQ2hNhiUVmrgQjXTsKHFonXmJo5UW6acdwDRuhh5gkNUnaSLk7MfVwL6vpsYHL6a",
  "key27": "3npJyWuGhBzDokvGeUgQWzTgYo7ur8mZb742jQ1G9XCtk419i4YYsSGFW6uVhoDwDfeqm8xBg92egNiug5LeXEZn",
  "key28": "LCxmpSEfThwzB7ZVqqoT4Z4FbGVckTfVrk2JnJ5jZ9najuoUqjQ7Co9Z73yQFVxzD9aju2NaeDkK1P7gPLVyPhe"
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
