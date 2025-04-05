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
    "5RDB1JyqKsUyE5xFpQVqNYBsXTXTcKQXGem6Rb7TRrJKGz27WyDzfPM8EBTEbUVsuveLiUTCRfsAo46XGtkHmRG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ECkyoLekwMrmTPrueovdCHJju8yFA5jFtFEVhfvBGqCgtysAxXPtpWyXPiC5k3ciDUznLe2HjPvQFDqP4UCNx1",
  "key1": "r52FprpLL2kRwV6EXinT5sBFdx3bLe9MXD6PsUuCvffdcN7NaBVEdSQUZSe98w94miWVfRYifCq5bJ4PvuRQE7b",
  "key2": "14uh3b44eF94C6scVKWkaH4r5Z6ijCytDXG1LjeedPUYREq87Uedvv2iXeKkgdd6ZAFNSRUUyzhD8wXJTH8YwZH",
  "key3": "2R8YbgNRqH59GSpFFfH1qDC2yvpj52kiJ7vX3ksgx5gEs3k7ozB4ddb9zFPWnbUSLqJ8UvQQUTH3CgFMVpgxufGe",
  "key4": "5NNXGwpCRzxUacfDkjbCWXR1cHJeWzRbMFwgapEGbTBMv767NVACM8f8qfs3UsuqJeNwcL9cnJwwP85f92KGiRKZ",
  "key5": "3PkAe6eLSv27JXyeUL7PjFp7Gr481BFB6U66X8Edsc3WXRi9wMRK2QnrErovf7GXFJr8eeUeGZ9FohNbmkZamWKx",
  "key6": "2faXSQEwgVB41u14Tjk4D2z3Bxjzo8vvyGTex6BE6HF7pLg7obNa36xuMjZMNxJ9xUvZJKht4rDg9hZsXBJjrVTv",
  "key7": "FqvjFuYgNCKw3VBFiF3y8aVXyAtoWqJ6k2vj8FQqwEXv179tYo9bFRqa6HRaUcutbNhRzsczub5NZpQQ2ZEa6bp",
  "key8": "48E7tBmZLQ6nx64r9wHKdUAnYakTUUkbQAC5eS4mRxn2F84QhMALBTgC2i23p3QsPHcHSkk46UwaKszN8PGNYxeP",
  "key9": "4RUK4UyPgwmS8iojAvPnv4j5f13JLMzMkeUzo5684XcpdVAqfLAv1ZH34MirG2ggTgMcbZigScsN84pBQSRNKMco",
  "key10": "4W9bBfYxLesxdb3RjtQ5byH3Cgx5wAJJc47KC9G8QufZVevg97cp4AqNDUfPQWr74uZgFSWhgp5FrHLQuadPE7SY",
  "key11": "3jYPkmHtDDVBMCMYj9UFN3MgW8BeZRYN4JQxv8MzHFafiewa1EqT6jwW7QutjZjS5WbXReSTTVQshK1ihLruzC2h",
  "key12": "2X2RpFLXdZdKpAqEv4PZACkg5suZwA1BykypgK3FZPjiGLn9GH9cXbbtiY6e5rxEG4xDsAwjs4acfWNuU6vGDfTj",
  "key13": "3jwNxeU6t32SYgW7M8b3mcfZBmHRykGz92quXdmPBk1FLgFU7ZmGkERR9qzK1M18SvCyuBKw2JTs2cCqGEKKvHpF",
  "key14": "4bbCQEAn9iV12nw5a4BdZkForjx3sbUoVeTYbGYuiCFBviuN5t2dE9pGQu7cdMvLzQgDFTd3LeoDMS7WiZ7v9Nx1",
  "key15": "4ajmpywJwsLcXLd9RxjBVqWADZn1TscHjENoC3RxgM7XFJfeATycH7pn9c879dgXLTgMSnU9YdQUWYWHKSdwYADA",
  "key16": "4qYiRn7dmufqRq5SBqU5w7Y5XKwQbxD7P9DvkH25jWaWo1nGpTY6VUf9MjzX1xyeeDSoE1YFYnZ49vc7vRDWdCzA",
  "key17": "FoMwUxqTbkN9tTRTiTpc4SGpubXe19sPoMjsVapYs4L4Nb2aaup1CgtaZvjLGNGWvoPiLqcYCHJSZsdRBvwzGCM",
  "key18": "3W1ueZzixRdKmBD1gPs3Aods7GhmK8zxoXR29MKZdLG5guCj3iJrCAjgUo9FKhSPuyFEx6mLkHfzXoYD5jE2pNPj",
  "key19": "67ceQ77ygEoswS4YbNd4aMTLtdVbmxpiCVMYhHEP8JjzhkQV5aTCZVUDmtzeeKHgAsbYFXu4KqdNWjycfaceAmT5",
  "key20": "65qveZL8EH9W7HSDJXJeGt2TZSy6JNE3g9aZFs1ctRJqJfYoNeALExdrM6LpRwvyB92TgSdzMDBYhnsDnUFTLfLW",
  "key21": "4dGkQWB8V2gmMZS3ARnfrfGNcNqC71jEv66ayLuXPYxcQCUFdj91z6Ja1i4bbJYQXBjzFfc51b2NPjrUFeWSh9Xk",
  "key22": "5ZLTL71nj9qwrTaurXz9sofT572rdPvB41qXvnPfhdNM2X6t1sZduNSDaKNz6NQQmiZ3zVEBE7c7kAn4aut5wDNt",
  "key23": "fLMToc2Uhrao74fSL3Fe44jtpJn6jG18X4rKaSKFrhcjLALpy2p9NxjhFMfMVf1BdH5gKtCGqdKaz3gGqxqfbpy",
  "key24": "59Lts4SrCboBRQkVw7qYPPfjRoq4ZAAyGpiyCfaSAmathEhWAWPGe5XhehAWnufBHCWttWUiaKpVoxDFAEGq9yeD",
  "key25": "32xseZpLrVaQNevx1xe2j3vBbE2KXuGcyfaqxU9dpt1avM5z2smymzrcRTfoeFUvSY21FXVDfDZbFeNNWtjhMhKs",
  "key26": "2LhhpXnoxqN5tvMGt83WHdVAQkC2tjBHMBn9Zz3b4DbH2e2yz5NL8ifJzjfT3Y8b6AGQBYT1suQRmYk8C5WDmt1g",
  "key27": "5bRgRLSmHNCioCu8nAPuGhm8ToF7BxVwQKyKwWxgVKfxLDsuyPh9zrVLh7iUn9raFUxP9Q7oEPiRsSfm1mA6pwnD"
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
