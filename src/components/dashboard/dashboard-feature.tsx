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
    "oDmwG5riusykLD8vtLcn83siRQQtniz1spCR8F6mtjArhuHcaZkhc3jKLvvSnYJPGL4eVXUApCg5trBHrt83uvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t2m4RW22nafU2nuJp9ubBVmihZyz77G2Nygro7Wttxfute4W4TLvXwCL4xwyE6ymHSfJot5ucSKmRycZwYwwSoc",
  "key1": "51um3Vq6tiVvhfkRoeLLa4UZBRVzkivVRcHvTfYyHJtNGyxDkYhQ9E7UwAB8zyS47MoR3Twpc2hQJyMfqamcDU9w",
  "key2": "5TGuzetrjr6BuL3ThZJq1xfm83v9GhfNUXa8m46N8AMdsFg5WDWgovJdocv5cuwUvkk3HZ4bAVzsSJyHZk6P3wru",
  "key3": "3xTdXRNLKCHc79Um6FKRt3cGa4f8mbhPBYRjUGGHjar24ipCCicQiU3iHJYif8VMbVy6bYaGBdzW7zu9mtx9QiD5",
  "key4": "5mMXH6S6PMFLgrhBvJ3EafbxK9rA8NJ78252smY91rWwYjQoT91woARfF3r56S29YG7VeeB1c9fxfQiF8bRJ9Asy",
  "key5": "4nRzN9QQhoy1A37NNtxUDABEYz17CttQsr7EYgCK92kUueuNBk5myFp9i56iV9BrcjUbdVSQKvD4UQr2p5QeRLt5",
  "key6": "2Tcz8JBMr4KAPeRpXVJ62oScf8jUB4kXBfSadumbD79wvZz7j1MYckipsG4e7jHgHSxJB2kjCJ5ALBJgpe9ax2gQ",
  "key7": "2gNuCrKgX4md5RrmJpeECx2vGQzB8tVXnYAx2UUCSu9YdK9tuRxiXL8gXrXfKPR24a5RQzywAPJiUFg6NenSkYtr",
  "key8": "QJL89VLKqBgcbJjLhwtUFmXWisaMTZvX9vd982CVSz7HSnL7eVq8s6acR4RqckR1CtvZtvEV7U4PKCQ7j8DDQTP",
  "key9": "66nQipAvu6u2inNkqsrnFAXk5cjfndbUafeos2DVF4oxmbgeAVzoGUchBEEuemvJAUJMzWfH9GduJGbfVBrBT5rq",
  "key10": "2HF6GtAMR9916H9rRDuv1Sjq6kGfEZCC47tHE9L3r9Mro7ejGLwNS8Cw9XppqCKnhSZKqGYwQAh7RbSaTEMdEKqM",
  "key11": "2snNwGkopwpvTagQQNxCf5vUbHncuCQZGtDUhK3nVLgrnsXkQvEzD5yhiVCpnmBXFfTv2QorFnbs3qKHyXZWiMK8",
  "key12": "42bEUuPTjF5bhb9RNmH8qMy7b16CHFGsUxkXowGnqErTDGxXrstVJB2BtFBTpvHrFBKYGjvyky5rZjWaGg42vzMP",
  "key13": "2cacABWdah17sueRCYa1cRwFgmRwVRqLRpzKUwK3fkeK37nteZa41SkZjvT497dYyr9i18mg7g8Q41EsTcPXSxgb",
  "key14": "3L6HrZUgA8dRcaKep2BLR33Bb7bng1h14E1AqMidY3uaraJzD7G8wn8aJ7m5JyZV8Jrekj98maUrEcb8MuTtZsbh",
  "key15": "4FJKKABUx28cy6kLrKpxqXSZRm3cgThystngc62DqE3m3y73KniB6Px3RcaRKJeA7EsmWLHrReoejhuhJ9uusUn3",
  "key16": "hm1MsC3dqsKQU5ij2bYxDBcqbZiaAhFdqdJSb2tFHWmU7eheBWFtjhA2tdSPrJAAMTEbHXZDZ5zpqpDh5zkFC9t",
  "key17": "47yDoKVtbbCwbitJH6frTAFT2MN2ZVmfYhRPnrMjHfbZUoP4GsCrXh3kxXcusMaNjXBJ3hAyjy7Ee387rKifvfQM",
  "key18": "29pppkcYM65AF5D8xwWzXo5RN3oU7opeRS49w4LdvGaKenonYfrx2LoTku1XojWcKzQELQV2jSFW3SUms47ebCYB",
  "key19": "2zm28s9GhhQvLycpcEaRph2i6HKaAybq7tEy68u85oUD4qTqM8XgvLweXeEKMqZcRsCHJJUVHSka3N8rHdiDjerK",
  "key20": "w4nkeamCsDhh3VYLjASVrMqf1ryvx9GaguwZqXmWHdQD7qD4BT5jakaSqXWmgeRnCGeRmBHm1c3Byi7KAuwY9om",
  "key21": "2vjkW6Mn5zSnUbDShNRmw6wGdFdy63ESGR8bQqKpGwFyw7gAXRjvK21Un1LxKfhwCmPEdHHG8ZX1Y5VYfdFE5hAN",
  "key22": "3JLdeyfTes1TpKpincqqve5ehhSH9KQQ47SJ91ThswswrWeUBF5qhhswDDcGe7D2yNEBJyGRUHgm4LjSLqwcWdMG",
  "key23": "pMF9J8up5UvBU1F1A8R9Qg3Pmj1Yza82sGQkWRgwWemPfLEFhV22x7s1fxpHxS1pw5KYRyKgFkiCK51gdqLtSrc",
  "key24": "5ymMtvJojxANeMc4fekbZLDM9ZhRukNi8PsbyNU1FqUizA7nWPFnBRmBKXciwu9yHszjoeao2FptVW8uLZ6JBJHL",
  "key25": "5a8HHojVP7UeHXsesx81iqE6aAXMqBbZxpKPzQBA6nXrTpWFdc4Rd8bsRfzD1xwPnfhs3YjapP2caK8U2c9HNqv5",
  "key26": "2o5hqmp4JrTR2tuPup7CcvoocgcwgkSHYfY7xATmhzeLSKQCkYQKeBAEyJ4zk21cVzPxeqFCG8RMcRzoH6G9q7iD",
  "key27": "VMyAheVmAqgVTVKXZGgH1XCiAAgzZ3JbCQzxZeFmxLhCaPPr1rCp5mQf1uRBEsikfCTRGw14teLZVbrFud6R2Cw",
  "key28": "5X6b7ZP2o4mQZXS1UdTTi56wNP8FopWg8Tmqwu33WXQKdbsqB1ExTaN2P3XoA9xYrACbveFvH2FXa1faHfRWnc4y",
  "key29": "2f2rXjKpHJc9KZCq4fTVReL4PbuLPSph5MG7KFaU3jJgrfZcyvpehqMD6gLuQjKYK981ptLppyeLBaLDgafNSBMP",
  "key30": "66Gp36sqT735QPV1qqXACuCvb8LfkoHX7iNfMtAbE2nW5ridd8T4qg6GSHSonwaz5HNT8fMfpQS55YGFTKRaPfnd",
  "key31": "5KiQv9dXMcbH9uy4u3duZ2xUkB8YrH8cCvKwe52jqHq2f6KDn8gYejuLc2gthJUjBD7SDEfV56BLHPdEhyDiNFXT",
  "key32": "PFHor4r7kK39FGTHKR8hi4irFnhYnPwFEvDZ7zKVy8wn8tHxWdkUYziAigD9XeTPbySdtx6XfBTGVjiPcVRN527",
  "key33": "447qLvH66HmYs4NQqADAryoB9u4EshvHEehFCjiMyWD31B3TR5nb33ny1yEXe7npkgtLSPu9kkEVXo9Yt3oxc9wb",
  "key34": "3XPdc4GPhrN6fw3trGfcduhbC4PZCoCFSnk9nPujvYvxMAWna3KsJUde6KwTE6vUjrwuBEswmsmNESDM4QspNLtE",
  "key35": "4rFN71S5oBG76d4yprYJgTjFiPgoKV2NPvUA5Zf2FdxajehEAVibErbZSbBEbDQ4uELdyaPZuaN6TJUSDnJoLAsi",
  "key36": "DqkptoBhYMpeuxyBqL6iMwwcuq4uWHpuHVkMchQsCExadiY8E9yWkWT2HMVtrtoYZpJedyv5mYnARCS9bqqg7Gx",
  "key37": "5Er7bt3RX3qq2GRLioFv5meehXGD9GeDYoYR1seTyM4UvBCePEWdh6ZZLZkHRj5xSbC1hHVyEFiZyZ2J45evre9q",
  "key38": "3VCmm8ti1i5aHeeAo7q2kRTnQTmSWtUbmaaJ4pkGEpHVtjuidtuy1FQj1LX9X42fRCiNrW1xvtShvrMpaaijjbGW"
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
