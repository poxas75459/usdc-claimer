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
    "3fJ1YcysWuiShxQrvxZ6Z9rvGLEYCgsXqLRcf9uqjd9JLN1Hk35g2Tsnhbq64iLdyszAyLZTsgqPjJJdJEPGpb6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4giaPouj25azj7gB6A8GXj7uj4e3AWMVX9okxDcQWvPYq1EUgHxfjWSYymESUUzmDLZJzEAufFF4Hbr24APCFoxi",
  "key1": "22d7f9EVihWpjFViVopSBHgSDFgvRHZ9t63SfPVmdCAdwYNCEhSXdqKC9mapfY8CH82KXSUYsF98gzHXe2RRmWnp",
  "key2": "2n9mzm3fkGBdXttDTyPaBku4CQEtp1keQjHq19BQKmrfAo7EgTDXqXkgYQMWL9NrvrHAFybqeQCaUU8RSuYYKcYK",
  "key3": "2Ki5mGnWen2jhyqU5CmJx9nFpbeRx32P9auykjYi53ZMy5XkhmUeWK3fUw5qbkodxk4ifMmv33RraPRjSAJQMDdZ",
  "key4": "2M5MFkpTY2wJDzvpTn2GSJTTHVN6vBm69wHPdrjcMNG6VbFv3e5tkWPTKgVNGEZkuZVsGmjThf7FEV2rF34nZQpc",
  "key5": "4jpwz6R2guxEidBKWwhuravauDPeZGa7iU32KBbWTnqthFnemhJntZQvFd18BqQd9e2xM7LfhK9FdvztSJsMabe7",
  "key6": "4g4xUAAFT6QMV1cH2UjmTRWWnkYUzM2nHZHPMNGhd1y3aQbpow5foCQQYVUmKRrFNptFFxumop3SNxxGkrHxy78q",
  "key7": "4em2s7D5wpvYpDfsfx3AeJC2B5QXKH99RLXc1gaNzPdjH1Uw91ukoAcQEPXLXDtZGhPCKByj7ndB2ocPkTrs3QoA",
  "key8": "5Bry1QXNctsPcg4Pik7YWSPGhSQMz9eM6QGV3V55APnpPfKEVoXu4hxrhoSeu7UmRmhnkLDdQFYusUmGCkw7WDv5",
  "key9": "3Cc5osHfvZypNtoLJ9SUHCSChHpQesoGf8kWVBybffH3X829Gw23tgKWbW4YL4QGdDTEtfvCiPYowXMxYHiPFUE8",
  "key10": "4hbEdyDcYNcz1ecgG8Y8ZRdW5yXD2JeUSTc7CtbxezBGz8RFGzKBzWNtZDG9SMjTUCrofdanEWJRkST6JutA2Zws",
  "key11": "56zFLjzrjoPaqMqWcMS6cN9pemgYkjSUkRdiH3BBVKkzJsK2nRJYg4zmzGYhdv9Dvx48EuyihEjW7hYGuZRjfxxJ",
  "key12": "35sRNN4KgiJTxNihQTjXEdS6P8faT9VSXyEWSLbhTgtU8nUDE9cmGE3JWFqSGkiQXvzDx3DDPEFgCwhu8KNjLzk4",
  "key13": "4sQSYEPBRQtNpCBRv2wL6cWsznjcEkFTxtzHK5FbgR3Db8NZqykDW7SqaPs3qyAXMEmpVQF75hSLbxTtscSPfhn2",
  "key14": "KVbKq5Lv5PWHR7QvjG7gASjcFc4fGheoqAkcQ1mSZ5mnyrXKFNZxXZiJzQkNGsyxZDTZTdTtMUBhhu7E2TYjeDn",
  "key15": "4RfpPaFtvVk5akzmA7rzxeNCUAAignLD4ZZ1sTM1AMSr1ppartrSvrL9pJE9zNJTZAHo5fMe1b5KG6xSSCdLw39B",
  "key16": "2VvpGsRWSwpaSGimzNcqjvZp4YMBFkUswiFC96ZvYG7NRBcBwvUtoakhh1JX7s4bxArUqNhXBgQkzQYFEQTtyCWs",
  "key17": "5cnTwJJCRJTffkY4A2NQ1EVbzfTUMrocUdZ1XD9PVGrk6m3BFyt1jbZfRnG8nb4sgWhh39UZFU2jVtg3QTnoyDT5",
  "key18": "4mk8jYCD8Fk4NM8GykXt3qnPx6XCdQm25MZ7DFQ9vaoH1UaauECCE4MPitnDtY7i41zypwv4jgiSvEFpuZo1VgeP",
  "key19": "3LrLSr1HgAj63eHDNAV4bRAFgL1sUv3CcdP4SNtxrfDC7SAaSS4CegCJg3joGzKw9K1wo5q1xQBawa3xi5o4Tts",
  "key20": "42N6CYrJnYVrfmW9WBPgdW2Wh1MoFt1xnyra9YzrMF5izZg7GRYqbZHGsm6ADh6uHLPod9MAavscdY29YwXqLL5k",
  "key21": "4df1f1XCuV9XPyW8ZNELG4VTiuF488cureB8Fwd8WN9zgcG8mFXKGG3Hq1s91ejPRs2RofETYtkdSM9L2m89YDZ5",
  "key22": "4ncKuVvSjFBZTcHPxGGB9mFhRMkgSAEjcVDjERMFwvimudiMZwTd1RgpWLpWaCxrUBS3LPWx2rk4xvr9eWkFFkma",
  "key23": "2JYVrN9JuPvQwH18cKkR2prwfuEXVYAPGsw1LENXYT279b8oveELShfGHpJHGckKnxkyCj3z1EpoTuSDaZv9dppm",
  "key24": "2mj1o7GPpSzS5jtHX1ueDXLQJGd9zZdKgkj5yprkhmVyfXhiDsuxpdw4tSjfoL2GkKnrDEnu33C4Abv9CXTALVic",
  "key25": "391AheY3SnEqc2V6koUV9jBfHhx5fTQ7jXN5JAR2ncXRcQ9QFNRHhiSNtHNYPq1A7BS9WtBGGxDZmjCmFLa4cpvf",
  "key26": "g73a7pR1fm2aP9tFxgxH4GtHCXYyvfaqnXGnZdDjVHshu4v39AsJYegDUcKMfzZ5P6VZFD6DtVn7k39KNEDDgLu",
  "key27": "5d8136uwzSQ2j97f8gemyXs8Hu8zwzp56ybKM41b6dnw6zEYkBHHcAwa2ZPX4ypBqnB7mHcAUrpuG4jmcCT6F3F2",
  "key28": "EDqcX9dfjs8cM1E3VZ4d9WYLByZhDADGjRtKFXR6WfKPPLf2T9Tf1kJiJTmWt3b3yoN4oAYLsKu73tT5qYFSQLY",
  "key29": "2hRYT1mqv3Wm88d59QhiAzqJpiKfxni8C7EqTHtGadgstnH79onbEn5QW6hVVf1mkH1KenqcnmCtgZS7Lq47HAVQ",
  "key30": "42i7nEVbXDuD9LeAJTdAbhwQkoNs5fw2oN6thajWiQegChfC2CLFrNtA9WXTtnBSgzefVWZTr7KweCYXbkzrVs4V",
  "key31": "3QBT5b3pqRh58bEbmE7Zmomvw4fNqxT9Xu51fgSbZ16oMnA2mb8pduy8tF596rfcbYKy3adDPYDoUUdbPRPP5uRn",
  "key32": "56NYcpes1TW4gUJ4EKytkz3CSfM1irQKtivMrhDLbuw5fFx9HZnLCn1HKxA8Hr7qr4m43u5PndY7nH8jgfpzqzEc",
  "key33": "4Bg9MEKhPdJo5KSygxCSQUeLczuaqqPw9MVVGMq1osUhbDjqKXieNvnvrfpVYpVkxirsAfV1yk54e7HVviMDaysW",
  "key34": "4REdc6nsXpYf497AapXCcnmzHc2sqStsFeShMwmzJXSxn5fuas7fzXd1Q1GQdUsE7oJAc82SKA9BAifCif6m7b6e",
  "key35": "NSSo4ZaDG1BFj48Gkv1igPRxLJhCcBqbLqhvWDKCXjmQaS8vhYETiqkcHvJh14G8nZzxfce1bpdKLfSButvEeGu",
  "key36": "5iKK94Wc2H3Kpvya8NJUkp1j9aRtNo9HsRRAx8XB1LJSJwvvig9w4GXuL6unoPT5g7uGWbyJg78KXJLWA7awibke",
  "key37": "bmytFiMxZAxJb96pqV7jhTUt9wgCq7TduXPnZMrNXKP61HFkxKQ24RuGVZ3EsfEi587vyEPV2Bah2Azz9EnbcQm",
  "key38": "4A37Ed1qjifw9GhVZLayYhzzGem5rWe23SYCsbbNLdhGZ2sRoWAcysyC9FaMyGd3f1hpXiBoQ6TtELXKjCMuePcX",
  "key39": "3c8eiwjqh4SRozscsXBZGyxmAS3qqQqDcBgGYYjFr5Bh1QAZBPMsVu1MMLQEXxCZEMsdDDsr4bVXpaiuYDnJ8Yjx",
  "key40": "nqX2APnEW33G3wK2wJgHrXk68sirMfFg75tnP2zwnoZfifSPwYcAkwV3EAYg8mGkTe2yEyZAVqs3i4gCPS5HEyA",
  "key41": "2YME6eUNaKoN7DLbzFMzAfTBkaCJgW9QXmQcckh5LKSk9maWmrpC4nk151p41U8MziGtsr6P9Y2siLFLH8iu827z",
  "key42": "2RVHWxfo96CKYZf4tgBEJQ5ExNp3PPG53vAEmHELNQi1JQ1paLnFKXwPtZqLNu4xyVYU65WjhfCXUaEPHNuMW1uV",
  "key43": "3PRmjGJGxQikTxmp248VY9773BquUxUhDmNRfhgv4ReCYSy65TmmY6QySGuVbq8LQc7dSXMoC1ThwR3Kuk8A35y2",
  "key44": "5LGufn8zGCUcrksHNCEdQdAMyAPnCbjz3Ts35MzEipBBRNipmaM4z7nKM6tjtLF9zN7QGZdMi4L5MRxnBzqHQavE"
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
