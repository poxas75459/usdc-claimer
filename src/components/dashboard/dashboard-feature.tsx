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
    "4yNA2zQXad8D2C4wRoEcxzhNaKGvxCRBewKFR6gKCTsq5zwZH7ZLazRy1f4YYiTS7tDUdU7YErksijvp1Qk2oHuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34QzvKnrf11VS1vXVvQHW513ruwZtVSX7ffG7Www3tN5H75ayNqtvsL9ZiuXTebny2PamfvBU1pypswQbGMJ1XLN",
  "key1": "wxkr4JbtVAoNmT4vSCbnXjjDR2yULUYWPj1RUbyQAwyCNuMwUaS7BBZVwkvtD84DEghXebAKBDS6AMayqakxHqC",
  "key2": "5K7cshSCDZDZuq8WYD77qBrcAB3fTHWL4GT4gWQWRJmbZT8JZV3M6xhzgWjUJH2YgJsiafvTyevj5g7VShyENXxS",
  "key3": "45ctTjQmSJbmWFjBKeFpPW3nN73hJU3vJFaexAg1uNFMeMzyJQ9HTuM2iHbAYEfAH8zU2KmcPBJxN4ftUrL73yAB",
  "key4": "yjDXy76TyFUpg5hByijzuxYjqxw2rMVAEAb53kvs2BzsFdgchyTQ1RboH36XonjHnP3UxL6GbShzRu2MdboDiFU",
  "key5": "4qhytfFocKrNn4bt2LdDDqygT8xaNXBJJUQngrp5JSVF2BYmcQfEaFsWqBKdRgM5gkF1KFoqGomR2W4GLoqmLaFX",
  "key6": "2HWTzq6DGn84onbddTXVHt2dAbnhjXCbo6e2Muwxof1QAdUeEV4E8v8ZyxKnJfCkaMtT5ZvAiPKWYveb7Xjkj8oo",
  "key7": "31SanJNPB17Sp2CpH5gCkVZkNaQcjrqhD5VxvwjTdVr9zfNBu7Ma3sgsgPUYm1EzAoGVPavsaqrJqYkEqzV8qGVf",
  "key8": "2LaATsQ5fdXYaF5pwDpxEe65CJWHcZYTmnnZCULg7FxDZ59LQXcG4efoyMqm3NpW1Rmiwh67eez2ysHTsx9Rhb61",
  "key9": "5zPu2kuB1FPQcFpST7KdNPQ4tWz3PxFDdSNjxvo8TiX9Cv5K5mhyqdFW1TAxPyErUhuQPgW6xSgpWJGP2TdenmV9",
  "key10": "2C4nkAoHD7w25jPnrXZHgH9noQK99B1AuF4VkaKTKY4UW4V7aoFaKMgEFahWkWta2sCLFCc3t3YXwjSFCi7LTtqC",
  "key11": "3Y4ej6aAsZ4Xw3YCsVxzxJ9YgYgM7NcEbHcHqgbrdTPDGjHLbQ2HWGgLcchfF2rDWyA5XTaqJPuLEUmq8Jw3FCpr",
  "key12": "22KbYNM3GTKxmUmZzGZzAPUGGC89bHKStGVVa9iB5VWhqjt1XgZTu4HycupEiCfDk8s5W27L7VrUEAmkKdGSoMKY",
  "key13": "58r2hgooNqqdPbmSdPs2TpUSNgnetRYTrfanbgzSqe6CUqhMdSggsGMhcFyZNHpm2CEd59Q4QvoJrXCcH4XzfSQJ",
  "key14": "5dYgRbddpK2bprbVL6mntxmrf6UsvSc5519oqDKBQPiwMXHRNqcQKTxHA6yjQ4P7gVXgFbfNdvnTmrvtRtjmQBW6",
  "key15": "36bt9wX3D5sE3nxo2xV2Epfp3eS94ZgwRGZYz6VLibs6xu48FVFdixcxqkYB1DjafmaQxEhHwV6Qr72F38XBrATk",
  "key16": "3nS5qYh2L4trQTqPBzRQoi7cNzjVqj3hjXdF8N7H6b8Bfm7Fh6hdrr2gUAh21RL1aQw7ZTpkj9SEDW7uGdNYKJdd",
  "key17": "Qqs38X84JkhYSnLDQGPc5XWhqCehrnwVW2Fgab5SkAPsJYWuPz6SanwsexCKij7zgcyujFHGxehUCedNnTnXwVX",
  "key18": "e4TCeGuW12UTmbHniBWz2eEZ1uHL9fVGW2HE4tEjuLHt7deCLKkZMd5S382UrF3cgxP5iYy1o5nmW9fTgTsV8gE",
  "key19": "5qoWBe49UBvf3rJ9VqS5FMMmMainc5DSm3LkfnkyoNEfnuDhrGsYG3JT6TAYeLAvR5BQkc8SXjjFAt7Ad6wsa9VR",
  "key20": "4tTVuNq9aafvSUamgFHqUffvTVYNyQ4rTSPPumQmerMZDe7UYxwiWbFgi6aNpNUbRwMUeSq4KoyWjdm9dgbHYZFA",
  "key21": "2Wrh5DHSq9JrzsDLcPWjxsiu1Ggh1HigwNotRjptSmDd5AzVyghr28wmRKUo3n2K82QJveLPMJ5gpT7js7rb9nY5",
  "key22": "65YeVDdYdxiWeacRVKd37rGKaAY8N4VxGoxybe7oDSsjotAdDpXkQCGQznGyP9Gcb1bZUNDiG7ouUXeKxUZ7iqyn",
  "key23": "4S62VCSa64HCc4B5fCUhWtwQcsqLgh6HMrwnKZSf4xb73fGHY8RXHHhV2xyjTC7SFSULFbZRRWh1B3bAee7ZkCyr",
  "key24": "4A6wU9vAebtZi4yGMTzxkkVnQQQGKhpB2Xt6nVtUevFvvZoyK84qEQA6fB1qZuJzAZYWSi9krVGngVgtLVEoKXUw",
  "key25": "2KsgPS6EZMy12LyNRiy54V67zHGFPoDRr5M2fzP59vstdeGrHjMBE7scE9bsxJjAwqEZ43ux5kY3en5F8EqhUkvw",
  "key26": "5wVvoi7MqBZMCf4u5SsAEknkVo12DKR5tqCMdWW75oe1vN5jAXVXqSBRdV42tSamViEZ1pJdnbJ4shyPjyxphzVU",
  "key27": "2JD95YEeESwvyBMa6WN6VJzFcffs3EGmmysAWMm9k7wJ4oYtri1APPsmui83SozAPNfYqUQssADxw5AD2PNiXgnw",
  "key28": "4UiMiwB5dKDtCmLnKLYFWp4z3QzQdXdGAzRq8J7jQ8Jw9mDUE9YYFM8dRf7styJMUa9nfFZEHcN6MsBQ7bJhaVrf",
  "key29": "eYZTZ9FjC14Z9krKtvJMW83NfXXEMbmpGRDcsCcCYQz2A6vwdCTcAFTKyWynXJZVdtgVztXi1vATCrVksYxv7Pj",
  "key30": "5xz8yLt1LNuuejZuT14BPDtGnSEpeifVKQxCjXdnXA7krYmGb8PvsAcZzyg5FvZoJgDqwqMqKKEeKKwh8a7AsjVE",
  "key31": "4C49NT4VwxMScfwV2Hj6Yyf4mnYdGgHoNSY8pyLByusSRHGzrLM9MJu9cFpeRWnx3jVj9U5FmBCkHu7Zyov6iofx",
  "key32": "2n5CNAnQ7rDAmMKvF8mqQzJacs7aWwiRHpQ5zc9PZmypNrPazYoq4GdfPA9UeiBiwdE2cZxKN2CuY1xEXRDxNspu",
  "key33": "5UiRg8niF9C7ZS5tWs3PURnVZSFTBWkVJJ3YMynVp3dUCjfmFT5ybattUuUN8vFW7n9kEZnBZbn642UsYv2AmF7Y",
  "key34": "3NXDwQJ5cDayuGtYzaKc3WJsM5Hswn4G7Y2LNQXYBz8ULQokVfouJw8817988FHHJ6VyphtW73yJEUehZtZ2vRRV",
  "key35": "4Vc6Ai2d3Bbp8zk3MLDk4nLDrvCQfbG7HjSqUcN2GY7Ve8UwhWK3APtZAZd7EixTDX7z89dBKwAzGsnuqJyRrif",
  "key36": "cwH3qtHqG4yfUdCieJZSWdCa6iZs5ctt5c6ivpidPdYPModAcEtrkoux6k4H84waLBN3U5xSfyaEahPY6ZqAFyN",
  "key37": "28H51cQkLPnWebHaqYvgsdBs5X2MLegbs7cDjJqjA6ohwCjiY2biHe1eY7mnDtb41feqSMdj9c6QxgJ9jPUC7BCN",
  "key38": "e7ybKcAk8p1XWDYv8WLjLKQM6QUpM5ukU5RyeMu38iSZHJrYCUqUirjw83bE9Xz9LHVSpVhkgQLw7gF2c6rfAsK",
  "key39": "2dg2RxBmN2TgHd5j41xyDZnhJA8RVY1zhAzPqDjmfr5Be8Cg3tWAjKL6f3pkmDH9krUDiiu7kGxAaaHYG5sjKdPH",
  "key40": "2nM5MPLXKmEj4JdhtTyE4utWZwjDEjt9awCrSVjj55wXjFmmd5TRTYNYq1rWFdQeTQRQRp19JzQGxt9qQvzhBBut",
  "key41": "4vW1MPfNEHYg3i1zo33kB2mwGthUw8vBzpSGCUFco1qCWMtDxh2A9wZ2W5V8unUtLp53qF2zUQenkUH16hu345d4"
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
