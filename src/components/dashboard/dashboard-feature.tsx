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
    "2eH9DTGFpGgLsA3Z3sD9REXsnvk9LB5kxByc6K2GW6qXRUxQqHrrHXv2CotGBWJYBrfqx2uhb4W6wrGFWvcNE9Db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qgifaezuPQk9BBqesvhnbQV3Y7DL3f9RB4v4Rt9r5FEWPMvf1y6wUZJooPMfYbZbt95Sfp7HyjocnsjZhbiP6Vp",
  "key1": "4RqvgPfE44q6wb7Q1bW7yUNMC6aniJLeGmRGUSjNhGPgk3dcjKvgqrCvvFRvVkz1F2FpetJ3RnbZad55FmP6a13K",
  "key2": "sVqqXhFea5PnTV4SnZAWJpMqnsU1FfisADbDqnYQckSFDfYLRo2WR4CBWXvQs7mBDqrVn8HqbGpdFQf8JteW2Ab",
  "key3": "Ba9oJeYxBCQeQEk2YGzYLua7qdLMezgYjGWsFewvRWn5JPqWhBogSfeRqwnVbWggeWXQq4J4B3gAAy3pwEhGLLe",
  "key4": "mt4gjq5TU5FMZnx56S9p1ntoss6hvhS4TuSHXjqRG1C15qhaLrMupy1cddRQiE9zxrcmrTbn2fwZjsonndGJvEM",
  "key5": "8FeMGSm2tFjT4szQ1TTa9acgCSTvpZofXu34hbF7VZb3zA8TNuh5oP6RXza3A8d1GBZASWnAPrJpmAVcCAf1Cap",
  "key6": "5DB6QVMUhZtg53yeYp73hBoGoTWUBx6fqxXUReiLWssMRADkAiuFDV4xqLWTJaw6K677V862CYw85hX2GYeXqB7w",
  "key7": "2FvPz1MmgwewJb7epE5qVp6g8QApLfFHcse86iHMbU2gw8gHi5Pp3v7jd3fwHch7YKcUcncLkE1r64sgKpnMjV7r",
  "key8": "4fTbtMp1sNHnjEZwLHVujo1we85GujSQHXkWj5MHVsYoMvNK2HyP2WmE1S8ummurionT9Y46e7QgbRvefjATGGUH",
  "key9": "d42FnrU5QcHZjU3akzkWfpFhyfJpfp37JNxhCdS8VRkPu1DSdELTxo6rfRaprCgdYFhecdPsBj2tb5GrxUg7RLM",
  "key10": "TegcrxgGnD6PzdduSJAgqxgYoDqUdt99dJGcBB1U6mnsirKof1Hs8yhxXHxY8gz4Dn5LYfEDNCtNrxSPKmFGqxy",
  "key11": "3kQvZUjadwYudAqn4vEBBs5Ru89keqKbKQLqw47TTA1qjz1L25VaGbWoSRRJ6h5gFvkw9HUaiqF1eKJ3vYDfbwrm",
  "key12": "347WMWMU73kVM29QdYwbirQKxbQk4iVJ4BDcAdMw5d4vTnTcTB1dwQZvFo83iwqFtQr7L2wvWCaa7xBu8WUKQ3xY",
  "key13": "2xXXksdKBc2Fq6am6NZW9cB8dFeZ8NQUSdashF6HqwmFnzXDGHR8UuSuktATj54U5i916bUhGenNVzx6SB5DQT9R",
  "key14": "4AfhuNSJ9J8jzLJvjDqowPb44KxPgbzYSvrM2B7dHxCLK64D3etbgK8FXVvm3EVJpFtkLvdQy7QS5eJzG7hSKoix",
  "key15": "5Fdv9CgvTfc7qwA8mnCdT3d3Se3QJPgS7zD2VuRgx3TJAJiBeaaD7Bi2oLtt7RfFEdikpprwYhWWCALkQvMvGGZn",
  "key16": "4P8nWqdDvQTgTjRFQ7rSsfnstThKodkvKMpd6mjUV9SWpkP9WvR1X3edV9oHV4Dr36o3w7yZ8wbPfVnarXSb5UNo",
  "key17": "34f7hCSrdBMgAewJVV8FmHUGtsffsCZqnVXY5avUmuVA2J183cBoFsgSbLSWKjXrTYGPjoC687ErfjCJiMzjwr4o",
  "key18": "3acyYYDz4it2yP4qU8KeZE1S1K16KDn1RddjUAMirdNEDgzQ1KwPnfBqePTxTfBYWkfnA4R5Z4owmLRyPUSQPJcp",
  "key19": "3Wcx9zSdC3G1bJwhRt2NZmGarE1rRMjE7LBY9jXJCzsHATEget3xiy9eV4NSFZCNb3a89SxD7RKmShyF86wxAg3R",
  "key20": "HE5bHe3xNiJ9AyRrE7LzzEwomKDPVKEXhfcrhtxiC7UYFFpWvBvamkNijYNW6jUPLoNHpd4RLzKdWSjTrNvtfY2",
  "key21": "B4b6DzALDSVFD5VVuHrNsxTzb4A4voBXX7spwKhUKHGjzUpnJ4ECWW9m2cw6ZChHeoLKc6s5SXXrRFntG4sj43d",
  "key22": "GJatKEbmp92taiFnkTeQ93jVLsssrwVxamCXDdhNbJRt54ER2Rc66MT1nRZK594NXg2UyQswAozG2wBKTR2Kugv",
  "key23": "2gpMzpJEb449iwke4dntNkDEJwdpADoDFcVAHkZbJYsfmokTE6fFv2KG1UAfz1ESMbJpwaZW7AJEjfexW7Mxcfy8",
  "key24": "5pedMvzC57o5KvMqShHdWhib3WgDXNwcFjyYcCwq5qDYGr8Cpk1SVTVU7YihynX58QKeYGkv2YuJXpYVq3pwCXRd",
  "key25": "4rLLNoZiZVSuu9BHcxginoJ9c6TTj6oEHGii3KL3PRaiJThbrdUwc8DjYNocebPz3jqMRnPmfrzjcRtfuqqrFQZ6",
  "key26": "56kVr9KRL7SHht2oDwQiuwp7Aua3Ma4JaBShLjb6ud1yLyDnCStc8vYUGGDE7WD2ukXZASc9UdDmTyyR4B81Q5o3",
  "key27": "2NRGuRR1nbxq9vU9EPcgfhB8HwNWrRHX4g3cunhR3opCoUESfqKcunb4RidWAeuq9qfUdRU3SFAUuuBK2qiWhNfm",
  "key28": "2CTNR6DEN3mqcu3AK2UyWofZoQqKynsPgag7ZhMAPBJXGDvubk3LkzMJgrgxwPtrDLmYShGGD75pKiURwnNWeJVf",
  "key29": "3MpxryG66VAdRiUvYgtCywjtBhJHaTewRSizQo7nvcebduKjoFQtEekqKhNrjFmaoA24y1MjZeDrfBW3VnuZWawW"
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
