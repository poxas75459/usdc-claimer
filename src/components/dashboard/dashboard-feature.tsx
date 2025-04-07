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
    "4aL5LXPvh6yQY8HenNGyew6G5hEt2PLrxm2YyGR1fTSJXoqjUVN4hvxurEHh7vPzTkbF5DLkaKqnrf4zLnQNt7sZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bDQZ2unsnbyC4zBREySFhvqE6ctSewAkYHAkySKTfaLBYcxHv9r7rBXFJTWs9HqTBUxyt3LZBUbnngVXuQDkXyL",
  "key1": "3pqpLaZmAL72EGoEJmrH61gouFeBFRj9dj8cYD2bH3nADeSEfJ9PPyiiowqB1iaBCM9DepUTqL9LgDGdnhVMf7SL",
  "key2": "3UQ7Ti2qaNBsHqcwF6CZwd1RVMQ5RANRDgoXnCSXc79fg5vjYq1UZkKojsQCP1WnizpbLeMsn3MbvgpuWfHmSB5B",
  "key3": "515geSxiVUrUgsF7TLt7WjyFZ3ds9M4zoYcmYbNZS8SRUXfvVRpRpWabvqo7Df8gUDyDeaBcf22q9gJrUa4YphQ3",
  "key4": "51sMtcpC3X53LinDJz8XDhbhkhzhDU2YuyfyVFceWabZACdpFBFjNJ7ddwwyjWgupo6MJD99XVA9645pVXm39UJx",
  "key5": "2yawhuaSbn7gNujeHPWw7tRWHTspfPtzni2rD9oGgvdFG4MuwDENqBoktC4JTDjHAbwm2aX1M1BrUVzhFQHerpZR",
  "key6": "25agRZo3eXBHsZ5aHLmcnYUcJesVoh2WGmEyi59H5KUjfneUKBhbkdhK3jAX8rjgWJWCPwwLmEAju2Penoc1pUoY",
  "key7": "2zWWkiAKy7QGFqJyeKDrq41An9HsKseefs2dX6R9pQg7jmLxM1T1R7N4159iGqA64J2UP7dGBaoZt94wttH6N8dT",
  "key8": "3dphvY8X1RxdVMVYycZWaPMDoJkdhB3k5a2fxNSAcD1PcmHCtrqnGVkAYR5243v9mS6XdbDFYDKb3WMHXFWJVW29",
  "key9": "3QraDBHJZi4TbxzWS59My81uaBtpr3vVBE1SBBVS7Tg2xWdFGbJ8y9AdEPHx3S9n8qi6EUeRtX7wzDuis9tjQ6fR",
  "key10": "2wt5voDPoZPGMnkT7m3JEhS275wKyCyKXzpV4hg66iazR5QrTND6XWz847Rj8JJHAHYoEHgxtSJVZ6BDCcpJrm5R",
  "key11": "5eX5etQp3cMmEKS6cJkcnG64ycB8xo7AtSBygNrFZkkMBpxdaFtt1X7i27wKL89VTEeFrpEENrDYx3RyAAceoif9",
  "key12": "3fg32qoyffVfQPCDqrFfDcG5Mk7PG7w8UoNk518M32SbGkhGUoEP3867ZbdQbtcWcFJ3V4HMevfS6A41NAPuozwS",
  "key13": "5sbmU7xuud9sXFdKkqzihTn5ac7vVYavFPn1hSn5XVexVX76MkBbMdbREDxGiXMnxjev9zgSiw9HPGU3P4njgb6D",
  "key14": "4TpUU2zEDABAt3Vk7E5Y3Hep5NRuoUyZz2tCCShaLsuZMTqiLe7GBxfoCoprNNrD8S82MYG1N5nfNTdH6HES4buH",
  "key15": "2PYKxq65j7KJ57pYHcQ7FVkQxAFLLeF7m1VJ2UxqrpPeLjA6dMn2AVFYkgibDhLuMzGT27gP3FbdiWqJ2vU64MAb",
  "key16": "67iNKap23d3FNhZfVYTDeL79PZgsgnPKrithjPSjuUc9McRxnRkFHgRCi9xdqd4H7Trepamu4xiLYiy4buQLgK1j",
  "key17": "52xhz4T2P5PL2JKrfgy6SHL6rMAuVCRhybPRp7i9TZ5f2q5AFxeSpxBqWVNSFVcuyiYo1UZRYKST1wnkkhfen4ZT",
  "key18": "RGqpAA6zE4Ko9CkNWgHBAyPvG1oFhUeqWnMnPQJVDtKaBnGaYeh986dJwnnpXqqh9AD9GJHKY22uu4yQFyYVHMY",
  "key19": "5twbwWe4Z59ymCE2HSN9MpMV7gNxsyi3im45cpojpWNutCacxLh8CJ4kmhNnM9f4f999EaGVe82PvAyEc9gHGJEz",
  "key20": "2imf3mggjMgmNxb4KC1p6gLAZeFas8kZ31zvejXATN1T3GByEWz8DrL7Lc4PofGd252xniVd5uzXytNuZH5Z4i8P",
  "key21": "ShkeSC6ywiNMuVHgBBuQzzB14QKDRKakeXE9M2FQHyEYEXYtSRPfxQGAKfwBHmpEUtTgbkPksrMfYLnzsd1E1F4",
  "key22": "4GYLx9K6wbfSYmfMPj7Zz8BLrhL4rQFy3VUCtvY5uy5HPi9S8SFoTdHDvYnesYP5s3NGvAN8V3fFfbprqVxygQFh",
  "key23": "4zdqdXpvPw77X6VcjUfdJKjUyamGCYFZM2xVU8YssgEQf5TFeCFL6psmLaGBodDFnaGy3xZ18Ks3Gw3tM9RNmGrF",
  "key24": "kwF2CwqiGUSZaE3L2ky8JP9rRkS9tDTxNnXwnUxtZ6Ko62RKULYcyp2cGrwVveuByW28F6Tbd4fouFjkJUZz58y",
  "key25": "4HmBdY2NPxhnEebCdJQzoSj9cQ7r7FHbu6epYJKG9er768Q8qPDBBtj3HyJCfvs3ULJY84sZzJqGir4MCfaMdWjb",
  "key26": "GB5oUQzymiw7mnfpdwC9u1WtuShwZK3BTpAFLsfHXyuzLoGjhVTWGHvhsVKaK88gW1Vatuo2ecaiiBkHpSx5cSb",
  "key27": "3ahp7KJs8a4Fi4gQiT4At3gHh1mdKYnEA9YNmyjSP7X4mBUHAyzAVF1NNyk8S1aPe7pXqYVJZ68DeScbHqSRCs6x",
  "key28": "41cyhoP19hdMoNfHSySFPw8wuruJBQh4xyGrrU5BoUJgXEHZunGsER5MNJrf5dsEtqs6oAxbjT5TpHoEBN8UQGvW",
  "key29": "2QhGSHT76jZAER9q9RpbUGQLJQcK7EGSxHWPRRHBf2HEaYEw3J5d7MMixjqu8Cp2BRKVJFeY7rJVbAHJnee4VHUn",
  "key30": "4FEA6VtqWfgYskue3tBRjnnFL6JWZ3NRyjo63Nm3Whzbdi7h8ZPdrmd6U9oChkXFP3uCcTcDgZ5WWqVbCASoJYHn",
  "key31": "5gxUdzd7nR15TEb12qmZpPstQ1aLat2kHzovEJcUv4uccnzEhrXoGviGA9m4xETQGfTzW6APwErEXZJvRde15bcw",
  "key32": "5tLQPrcCjKWxxCPM1uVEwkWBNR8iL1irheKNHq78e8jcJERq69EJ4snz6GKDgGAV6rzY9cLMEbqQT977CAACxtAN",
  "key33": "Wec6gzfcz52YLdhjycTNp7onVEUy8ep55x3qaH1HRHnpc8QR8kR3NregHHoeRr5y1iF4vvVxY8Laafz2vgRHG7z",
  "key34": "5x1bPFKS4J97QWeUxxZEAEpG3uUmzcJuKnosYadPGU7hu39F6gbyUqxKcoJUNsHJW27S6LE3zqrk5RzbfJhdU3fy"
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
