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
    "5fq8jufA7VpWfaFEvFunVdH2sY8ieCoK14RR4oFU6m7ZUyM58V7Lq7SLZPgHoYewrpkNhdk7uMGhAK2yUDwpkpwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CWN1aMfp3xZv23SENDencK68ATTPmeaGNSXyCF6HPGQymUDohCc3zEbhSVodCs9ySW62bv868zY3P75muxqEP38",
  "key1": "39jCWC5ZJGCMk7jVWD8qAgP3eof18ukdrVZ7R89KMxFt7vodFawrB8fkQskvbDrbZcs1hmKqsYamyHre75G6XmXu",
  "key2": "2mFZD3FKwkbtqToVSeJVrixDUziNTEbZMdRxki9TzEwmXXTP1rrb5diNAv2TEQynXBZgWdH6zCSw8rMY1d4tJ91x",
  "key3": "43VnSWb1i6sAFNmzNwygbjYWjdxJTaxUYiQdVX9cTkLoMFX3ofdFZJo8W5C8aLWzPn3fcKnLxm9tiKnhwnB7sy4q",
  "key4": "2Ud4z5xHe9WEqUqPkVZg8kZiHYUxAtaxrywC35NeR3kgP81eocjvbTyigQmroYUmowoQU695fDRMu2fh9dPndjZF",
  "key5": "48axJ2tnaFQGxw3YepjfbxDpNgdVD6U34Qbkx4WY7VD1uTckwhr2Jezc3QUdudJtTt5UmPkE2YMkuNhcKg36Akzd",
  "key6": "331xv3PEPS5s9M1sZioTZ3xxoCqEZ9jdPELqs8jPELbySUXPaswrVS2vtP5W8ajxj8gga7jhqEHKM1rDkyR21EXz",
  "key7": "5vfwNCTkT7ci9B57YKRMtE1nVTQeowxmWppUacSohd9tbewE42afWq1FawcZwXLH2uEAwZAYoTHy9M2jteoUpoQP",
  "key8": "2JysYvnZbQDnyGxhEkJfMjxNwiXUXTRjDEMDwTNaQFGTSmACtUQdVNm9pPyGUhWH1b1gx5wRqRKXG9d4PM9sK7aZ",
  "key9": "2TDQphBdP43tfM4xZ3isLYwQ54vzGbMwyXHqta9uA1LWV2Go1xRvqssRGgqxgQ2SA6QfJncqYcSf2ipRQjXwD7do",
  "key10": "oEC6sasK6oxvAHLEvJswFkiCYvLoz8f2zLW3iytCAMw989TDHPkAxKazPWgAhENz314F24Q2um23fbT6Puh6eS2",
  "key11": "2vtaPecLuq7VLn7pvB6fGk7G2uwcYPJka3DsVKoXVEGCZosiS6qR2BRpfQ3ZgL2jCw7DiPGV79YfapcH6mYXx78n",
  "key12": "3dxeccRFrP5F41yCR94t5YBAnsRnURpUZ2AbompqJ4XEQoqCrK67yynDxb6qdiFDPeniEwYdn7F4sGXynjNKxHEY",
  "key13": "5isg1PTssAybXgUiXmxXX9YWwX94Do9Sq5ci7ZGw7RqqT5bY1zChutNC48T5SA7ehZZbpTLX8fCSgo66dCJ4z1on",
  "key14": "rftHL3yCwDbBJefz6edoDV33S3gHH4ZtLYGRafDXZvNxqwMcsGmDcSjZeMaHmiEwFpdDJWtsMRnRSRB1Vr46piF",
  "key15": "2Kj1TrJHLCCn8qNMuWfxLmCgRWMrZUXrFx3gfSvZ9EzAz82zurtcMPxp1och58K7wWtgzMW8RLr4dfMoaHhoXpG2",
  "key16": "3uGikekgLjKBwojmS9HYZwMpoojq65yoMs5Ls9WBPA7jt3QpMkff7Y73YtFEoPUSKXgeCe6x4eXwNsstxXrnHhp6",
  "key17": "2BRLApJJH5wrkiPSmRPwaxnKHBf2Ei2GfJz2K84AGLmerRWByMA2Lh5zm1i7ZbatNfptWCrZ2fG5RZLV71hkBUJL",
  "key18": "i9CsGucZ2RMPQX7T4FAr5jE5gMRiUEZN7NM9sBhDAo7KYnAZBVXBtADGbnmu5YLakdD2AJpdkgf9f5qcDy1n5M9",
  "key19": "21JTKHwW7sbTbYp8mAx6DhqM4RXW9QCDJTwxCRhJFQxgTmPNnwadH6Tau48qNcwDQoDoTnPZqwsNkRj29P7JCXqd",
  "key20": "k4ibAkeRtAK9FPgtc1w8wfDfnwXt8qkCUA3bY5mL7Ej3AKmfac8PPgqnjB4fhWNukWAWY299RkdWaCTsaSZqCag",
  "key21": "2Ww4UT6NpwtKUDZqFYLvLoKaaMwFbgM7uyBNzqqZWSwZewc9Hk2d3N1JRBDrGcFhi2oDxuYwbvXyyrkwJaS3J2QX",
  "key22": "2hrhp1dCrLiDE13frwye2yEbV1JUJZqKbHaLZGBM5tEFko5YYMcGD9rN2DCri6jUy6g6U9DEXn4xg1CrEyhGZaoN",
  "key23": "2wyFbdbS9nMQzVNzeFGPRGs2pKbYNTHvW7adwDVfcviKzFpe9ECKHGHmJnza73ucmrApCiPpmD9USdx3H56Y9Ni5",
  "key24": "5YMb2NBpxkMpJZ53H7UN7Hbeeh7CQoXxCGNpF74bqXhd8TNnGYygXeNyy53QphFaEkvjJJn2d4Fu12L6sx7qusAA",
  "key25": "3egyyuVEVLQ2bqtRGFv9Q5NQrQQZVaLYEcLnQcP3AripwfqFsWDZ58NuetJ8SonRknaMQRQt9FNoxr8MbDr1GqQ4",
  "key26": "2WbJPMbvigjKGp58YLLJEB3v8H7WXmT1uez2ydJTWWBxcgNTsSdgKWduU2wCZ8FnLdRbfpyzhhEx93zPs5W6V1dz",
  "key27": "dxo8bysxXWWoeKXoRYKfiLqAp1ESZCagiemLbwY7jqjgtouuGd2JMKdq1nRDJPuB5H2XbgFm4t9bakQKYPmYY5Z",
  "key28": "2HxnbiYeS3jNQXNTDHDMaL8dbUe3WCqBTokp9xTtTPjoNmz6gs7w9eJrkABvei2JyGGcDYodPM1WYXuMavhwvMhX",
  "key29": "2ZGomuSdMnM7JmThDtHYCrgzye4D4Tnqarch2WopEPUUMwasTRCkiMV48uHHjEgNm48YvYAm7NT3fkxN3UqJUDux",
  "key30": "3aRoC4oqDWumCdw5oJnSdcXqQ8g6SnRUiTDuisUAXPPEwot8QUiQtKPtiJWVNdKTwAvsqhv7Tp1696R5H9A8MUii",
  "key31": "3D7DMwvZy27yWaSdbELomWao1uASHSqC2X1MkaBCbgB8CHwzFJeyNK9C9nRKVAR3JNyDejHQ1AMEnBYQJDZ1xwzh",
  "key32": "4ckkUG5duAiVwTo5UuXt4etgc6mYqXzxmM3BQZB4tQqwARzbwxarBLNZWXrZSjnNV57btGvE372BC5evs6KYcUMc",
  "key33": "2R2GHUHEA5AzM2u1qfdpajPYTyQ5bH1n6vMNZAZr9GDGkxmyepiwFiGz9eWe51ueS57uytXdc4NFVQigLwqtZWq8"
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
