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
    "vEfYMqbUchxtf5dMfsctWCAQapRWfyvu7RUacGcFsi5hmQFjaFeWTnnR7ada99hwuNQxxyj3m6PtrU32TnRQhUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cprHTQ44E1xwQaMK4MfkHTpWXAyLaYkbxUsJgiT3x8RSC3pjVpwnyCHw5wp9FT76mNDsuxkvcbpbZW6Ns4gutZR",
  "key1": "bGT3Uy8ZYj9Vr9n5gRkqzj5PxkEzZNUBF9Ea6p6gPr3nBYHhZEM2EvVgkqGKcHEZzBTa3rf79WjGj6mmZmEXH4S",
  "key2": "2AcGdfY3wEcULdp6CAK8Rp6uKRuGAmu8iymj43LKni7KCSXwRizjgNmiz2ahENARfBPXcXy7X9SvwTpR8s6VrFWo",
  "key3": "2AbLLux77gzPPcF7AT2Zw5xstFXZrQbyi6WyAdZe1BmGqVfmK1TQXKZrimAJfZX6hqJQWxHhoqQZAsFGh4Y2R4mH",
  "key4": "Jd9wVHXvf8XQ6ABZtpDt7BnSz2zXYjDB4SQ1LXWoEppW7trLt4HqLeudHka6ocSATpoKcoMbi9LWjn9TJA9UHGw",
  "key5": "63qLjgsaYLonxKM5Md5EJQVjUrBipSHtkufTADYBirawT6zjQ15gbsD8bX36ncqTVYnrW14aw5j9qhJKXYY5CtxJ",
  "key6": "4dY6rfjPypCsQd6NkmC6q5evL8Fa8xSmayEPozkh2PN3m5D4CTMiLHvn11RBb3A5YugBTKTWp4gafk5DhCXj5gR9",
  "key7": "3UHrdvpnANapBjv2nBriXZMj236aB51MhQRJCeCSkvKp7ETUBMVrNe9LChRZBEWxaXxjwTf3Dp9psracPKQH9Xup",
  "key8": "4PYYtCssMN9jctjYjnes4Rrh2hvZLBbtFt7VdTFZqpXzeoEF33kncRJPyYqNmYKnTtZButrUX8Jo6yzeiAJD9GjS",
  "key9": "5rRG3EzAqW3zCogzg1FZGXmVTLC8ieqX2DBREB343sMsbRSjw9vXYAEAHVN7QWjNJuoD1QWAps9uJ1MxifUJx3T7",
  "key10": "5BU6BnxDUEQFXgZNRyn3WLCYkV1C3KBqFcqmL8BkMXjGBJuSwi7aHTw8Py2Tma21UrxacG7bZFFWH2UU6NG9C7Np",
  "key11": "4Xnt4A9WYxhADDVmaUq4MZSsAdGX9CmekDqwoM6n9i2heUP9ywKvwTzjt72MUwBGos9hsaDMXrDJzyoBKZrjigA8",
  "key12": "5v2tdFf12hX9A6upFh9z1m2MGkHTGtk2BsyjK6ru1JyzCtNf7NXRXsDtSkMuKpSobv5mfW4BsSpWBHku1C5G1hsf",
  "key13": "2rTWQZY4havtfX9S5RpZS7ib5hZsvDq8dcoA1umTewwiETkzUUGC7yaf9Wy55i9yK4RFH1KnqF42QZQPbbH7ivZ9",
  "key14": "55KA8qnLjkQ3gpJwzMdrdf5vK6Hj6fPmvYpYCg5PpiPbwBDR4hHXBj51cHqpZBiXeaxbmx1CGCEvp6iEwRMHtwe1",
  "key15": "4rfhguQ9t2htTUf9grSKP3hpYWs5epaPSVnimW8CUoPHJ89rDaiMCAJgqtAshyn7js1ZC6WTfojR3JZUiWvjhC26",
  "key16": "51d5urMtxSpsbMU2vabJ1cFbD7o3wirxT7wR6Eka6xB8ZJTvwph4QtduEYx49xZ3AAAB7ZSdiZgxpCWLAufYQHv",
  "key17": "g4QScbjDAtGYUR3S3DjPTDzmFpNTwY4ZWnDzdTNLs7GiUjXbaVEW2fXWxGhXjjs5BXoq7LrB3bjomG5DeyxwaM3",
  "key18": "5aEHm9VLeP8Evyov4ip7wTjK6Z8MA7Kw6heG4jCYfwoVa5riavtXrGAArniqYxNyimzjijatjAeMyhWBaUha9VxZ",
  "key19": "vsNEzh6MnJugnBx9RakTVeGwwVVCEVf8rs7f5GFMqEJX7woPTwQF6ZpkTj6rU3SCY3KkgVL8YWChH3Rkjdp2AzH",
  "key20": "4PLGtD7t64SRzmcqZarAA4ZopS7qiJXQX1Aa7jGkLzCyJ3EM17RPQmUBuCC8rKtd2WCCEpYkyG7CjTpy3KMjWfMF",
  "key21": "64Fo5sFtNtD7uNPJvhhhkxSC7121sXYjJe8XzPDo1VPhsd69sFHQAkn6wbx861ECZfd4Xn6JqTNannsn93p7yra2",
  "key22": "2sStES61rz93L8otHcwJxhbhkEwabgn3yj5R8et2dDeB3QokVTWUQ5Y93TY1vayJqucXdD2bsyDLoEjAAJr1xKka",
  "key23": "8VUK2xKVVAn7K8SdDpQsPsXVaFrKewBqCHZHSKXD29fUuuTJ3DhaXb6oRsWzHTdshMpgPrggBGqqR7Q6Zf74P2C",
  "key24": "5rL9bPGtrFFRC2isaCutg5wMrDiEkfGKNn47JaA1dK4DbLpAPGGbzUd6ufM72xic5MZgzJesQYqdXredCLgH7Rs2",
  "key25": "2A8Vv3uAzH5437Yc9nmDefvZCUxkz3nQyhwtvsAhn8hWBivEvftXTNp3GJLffcR7XEYE3vrRvxvSU8CQkuc2Wiaj",
  "key26": "2bKriYNk7zFe4eEh3b3drSvCakgZp5pHaFaUFNXit6hbXL7bZWP1gh8DDF7JVgKqJkUJndFYo9c7b5txq7bGm7XF"
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
