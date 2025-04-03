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
    "BP3bGAtvC6WfKk9RLhVRwvmYhHyVFJiu1bd8i2KUszoNNWHNWrufTCs6aJSjeYBKf5RamD9DBDeFmWkc3FHxNyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41qnTVktSRonKpZh5XPdrCBNjqnbfAXq1jJjyFcMeZmCZvDkpzqZVtzJr6Hcv2RemFqhhCYw1EqBm5SYrY9Ah6sS",
  "key1": "5k2Tp89sYe7M6EPuRxtuPkorpknoF8NAMkeWUhRUdySXN5pbTcdnzd9vudbCxEJN11qFFzWiSMEsjREgAy3uDiXS",
  "key2": "3f1e2hGeZNkkHAwev886AaoqB1g6XwbMTppmpVvFzamcxPgZFgmy6rVZtRKFtR1sCoFF43yS2dy4Wh5A4EYM58we",
  "key3": "3gMYTvxunyTotecmQx6DxfLnZ7zzt9xHJfi8W3UofY2FjPbLBfA6G6WgRDa3jMcCKofBkfvwcqPrY6G2p4T54cKz",
  "key4": "5k3CEcM1xZd4KVqfqrT2RPR43c1u7jAYpkwi1YbZovWNuVgYV2LHRNCZmSMyFaMcvFtb3i1QeJLBNuR8SA1bqwja",
  "key5": "5BKHmpHbjk19sCSczUPWJJ67snuFTWy7XBkYK12nG3fEivAx9m6VHtv8vV9u6evSHv5NHznG2FCYdaAjPyTswjhB",
  "key6": "4e85ZgN6vPL3KhHjLstL8GgYBzdjqXuYU766wfVNM4CdkGsZMB4kjwtav7jxH6KG175V2jEMnHpTF8C4vU5aUCmK",
  "key7": "3SSvR8AsgGdeS5x5t4RM7GnLdEgDuULYLHzv3qda2BiBgwAYZcxajkiYjwjixH9P4iXFf97aVkrkYogfoca4yGUp",
  "key8": "HUcCREuXJi1CMM1dzNGvH4b8iuH3uwnfxpk18rKbzum2bYc7b5uLDc9ARcLGps8z9eHHJ5BGVj28yuP9BuNh67p",
  "key9": "xrT2yvEP89TbXhmEdZ1pzJgnJMDNQC4wmGNr6Dx6vJAcbmk9DLvwhCL9NaM5u5sq6eZG6kqVLxR6SgZtqCoRyJ2",
  "key10": "2PeosjReBpEcTNPG5QGNg2fSm1GX8XR14JZ4PPUrQ1Ceu7qGRuk9PxkQWcxNNLHr5R4fvxpQtESnd8VAPhNF2R3g",
  "key11": "thYfBdDp11YWszaBnn9YEC931yqbqZTYSmrNtzJXdfwTHAVfWmQBnSxc6ZoT3j3C3cbvsS2ooChVhLjDqKKWYrh",
  "key12": "44FcJohk4a5sawS6KxpNzgZGtEizekSuVV4xsT3W95V3DVgzDctPNW8UkfULxHftPzZ1ZwHEhSjwmuBNXbJgpuSg",
  "key13": "8qvkjSU9C64sjZt8Gm6HsczzyMDVrEX3A22idyoRifx54staJuvgnMHz5bThgAhdnw5yDRnczELtRk8U3RkJ5PK",
  "key14": "3QP1owTs2N2nNrP81B4MDMdjQHuoyxBuCJ3DBmE1AeLYqvpoBqeYoD7QQsE3rf41APjNF8qvJTpUr9ZVbsMvX9Sx",
  "key15": "TjWiu6usNUoSK9YrQNQQ9HNn3J13xDVihLmoCMN1u3Fs1RM4yG1YfB7BCS7C9gAD4W9hw3CPH4ogWwj2B6vLL7J",
  "key16": "4nRh1XdrtHRh68JUXc99swv5XsS1akn1B8DJuiS6egqPqhtNV3izks7KizFpnt9zPe6g1fML9vLiKZ24K9SyHCEw",
  "key17": "2dcmcFjWYBWhFqDodtBwY96xS4bbGtzRENiNRoywsV1rAD5CpxerqGbvNL8Y3b483iR9kt16MLizpdUWrrSDptsz",
  "key18": "4ccfBg9PG1kzzRYbMNf5XNjnjNtb2mw1LYD7aPqwdADFh7j9kRzvcQei3pvViN7yTLG8DrsoVED4CKKUu59d21Pa",
  "key19": "5g2d9DBQ7AW22DW1eRAMF7mxmgCbLuTe6G5CmdrXNFUbVLh8utzvDADdqpYSvPKo6H5CabUss45TRAfk8uM1enMP",
  "key20": "4Ez5CDDrdsfxRu7pzjyPyjLzBqo2nhCva759ADm1y7ouAAWufCw11UCvAvjWH9WSZBnvRY6ycaHq6emifcoxGLzL",
  "key21": "2hiLMGaoHmvVtHeZephczAQSNfzkUezUaRKqkVdEnUCm9Xt9CHYSoHcvwtzJnWpvuLFkXnePycgQUCsU7zfZ93Sx",
  "key22": "yyfYm2PMDi72PrbYEDD6CKz8R34Q9yfevsYvdjJQgeBNLHACN8jq99daijeeR9jYK4qJiCisxeU6Thun7rNwrLq",
  "key23": "21igfvpTVJqNqH8QCHbb42ppcuepLUBCiABC56Pkog5c1jTyEHjMafte8aueWEUWNNyXdYPSbgGzMiyhXGJUak1L",
  "key24": "39xrxNhEmUx9Rajjn9h8cSjQ4saXV61T2niZ96cUEsQ86Cj14CCxQsuNr2q9gzQTzcEbxQftwM4RL75q3EAJFymE",
  "key25": "661fn5MxWg9fCbLzMTvaGgogmewRip42A8HQUbJ4YCjV8DaftVdkkvPp5QEevpzterkQ4irDgr9oP5UiqvKTNSaS",
  "key26": "2mcjS7n5gVLGTMwc9Q3gJcZqTnvaS9Sioxo68WWT2js4it3RVsnM82zyHiWruP4vxbBNa5oRAz4NDLGSsSuyW1fD",
  "key27": "42Tv8bdX3wy5dCEwuNERCRkCx1KJt6jQ9hkgCnk1k1L2JSqjzUz8p8pmkPaXdkBCBbh9zB7EE3BYwU6mMpiSgdbG",
  "key28": "2JcCgnX89pe8hLpYRvjbHSaCSKrjw3GNDa7AjGYWgj69C6FCeUFerDhR5mpWGp2HYqNuBgb9x6LubzZ6rroSWdD5",
  "key29": "mA3Lp3fKVfZHjqawDvSvFZHgWLs5gsvkVAieZXpyA1mzuXNvuwzF95CQUi38Tn3rZjd8wfHFJJo31DjThzbnUyy",
  "key30": "2YNxBED8KdbtgJfSrSaFcWV839mcSFWLwnpbBK4R8PyzQUoo3UJqzxUSqmVrFBavyrBjzmRhXkFpbi64sGMKz3DK",
  "key31": "X5xkxJqCPLM2p3xAaosfgeTj4v54nAQ6c1TRUXnmvthHtvqfJTv8nuK3oBVjghszaiGHV5wP5sxp5ZgoVcwEQzm",
  "key32": "2Yt2efUtE9wKnv2zLMvAqPbxJFwowaiHUEoB3DFisDSfQ9yvhHkA2DzGtS8xnfYotUphebqovb5vWU4tqsLnR6ik",
  "key33": "37G4QJR6fqFDfdsFpyuNNb8APMXxVkNVU42PAEt327LoPuj4WsYfthx2CoEzNrFKrxt2rsm51XHzkrYvQSbwCLNT",
  "key34": "2LpYEGL9UsbqpVBRoVjvLeSWpd4JRPFHibVyTEMn9cHPY9QEHiroFZkj3e8fERRZFQQYT7wXRbMeXnhgQmN2Ky2P",
  "key35": "cTmQt4x5Ua3hyb3enV6PNA1mmwPFWQSmwWBVnrouyvvs6qjN2KA25gfdQq3JAFRT2bnUWC1JerhVBTsdGoWZdM3",
  "key36": "4gafvFkgxkmwA8GQ83ouhcQN47bQNMkxsUHpBEYMr13mnknocXt4waXbEfjj2FFfWcvqXtNUfbUYJ1FSKYbae5Ys",
  "key37": "441t3nYhsWBsxVC249hmPwCahvEGg2M2yYCsx5BV4DKNamcVHz2KsSkFnh59Rr4kNTpTDSeDExyL7eX1MSGQb4yK",
  "key38": "3ZeySak13ZRs81HZEj4u2fUN825SCPn1N4tq64wFJDpf4rP4Tv1NCWrMXfU1pXcyF2yM7eV5mkBbaA4RTGKRXg2J"
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
