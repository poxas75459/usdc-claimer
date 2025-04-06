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
    "4ceYZjPFzMi9YZdWh9KNuwYR7F3CguqWWNCinNk4uAjsYdVrgEnmKM1jt26rVZumVdN7u2ktvfnjAAV8T2ksuA7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66htx6nz57mNdkXNAEGcTpZ9FYxhfyD5umc54pH7W5JcEfsht9E9svcHZA5tzspDL7YyFSZSRHwBp6yxg89zEkRP",
  "key1": "eFe4zUkLci31vQBQJZkgYg276P75s1RPgGpMb6Pbz3bzz9CLvtuYixg3qiVMRPARPvDUTSz4vaAdgSpRcxPP3Uv",
  "key2": "5VtvV2cDUiCg33gcGZPLAtFz6QqWvEn5jrJeiCHAQtWBWgTAeTSTXELCY8gwXahiVxCanKgCVqKi7z1r4GRoWB1Z",
  "key3": "5MW3CAvhDmmgjtc78WSukbARsDn8361pV9Aez33YWMXpAGSnrvB3W2mkQSSyCULy9gd8xBQJJVgRXCJAdrBDMmiq",
  "key4": "3ihP5Gt1r55yNqx2DSBdWxDgBh2LCMCSjZMKT53p7ffFXuhCt8UNVxdAyUVzixszsgtqerzBvqXaeDoFR1RWMHKN",
  "key5": "3Qv5KZmYoa7KfDHnFERxMAzMPj48qULrGfHNHXnensCcQQtkiCM8VLni8NdKBYKPTiPjeGRyak6TJ8AnptfHbSYP",
  "key6": "231QUAfrZQb8MyGHR3ogSxq1gN9fwLX8qVyrJumjrb7zECVDByHSk7GfcjCFg5ms8yoNhv375nkcNnRpQnGJxTpf",
  "key7": "5Zf91qYMKDJJptQXKDHiGiRcLJ8nL16nadwFDK6nasDf7yU4AGZPvUAf4aXnwR435mr6zNRGXpbDXjKHMrTXu8vA",
  "key8": "37QTMtsaJoyAvDJvunxQo8mdz75QM4TxofgskQ1CiJzRb6VptHuztMkme6RrzT4kkx8bhdbYT8RfdskXGEhrciuZ",
  "key9": "2DjMNFXVrcWg9rM3w6aESLn6XvXhVno9kqiJmcVcYYn6H6a29pkW5vnejBBFKNWA5E1rPvE3ZJ3cXpcy2bRRaFeh",
  "key10": "44wpVM1A5qUN45g67GqUH47WxGCyu1pibgeYcCaEEZs5HvFVLyvCaR2rLCgFSy7VySzc26xdG67qX9ud3CTyCq7g",
  "key11": "3teJhPJniUcsunRojsbLn1bDvNjFvPoBjm99SMNkP5ot8Ei5WzbQc7dShpEL32eVXW7j1RePEXoLD37E5s2MuaAq",
  "key12": "614pZUTSoxUUBPmJvo4MUoP45y3z8qytpfxcCwttZmBxgDfZwEvX2asrnqBAj6EGxhHzqwQMDfQoLj8eUpVSsPgZ",
  "key13": "4AQuTogEE1JUZJxsebbpwgC67YSWAHSbTsjTfHXUkG2UU98ajwNgS7ofhHAMb1YAEFXsQkYWDsuMy72PEYJZwqs9",
  "key14": "4HEuvqdqBW65Ln82smBku6m8ejankQv3a8w6nnD3rFDAqQ5mtgppHzg5z74v4YCsNS5771tJip1HUzDwnv9yFpFK",
  "key15": "4p1WqRM4ZwrWyAQNvKqxXC61pPdSWgnoakSAhfSJT5u3WH285s5jTsJwe622aAhvH8H3ioRB3cNTsDLe9ENDqTdk",
  "key16": "311RJAYQfUu8iPqaNYYU951HX1boQmfgCxXnxC7TC96BqbfSWLPJrM9uynrdxEJTvYFFUpHjb7XA1pJX8oj4SStP",
  "key17": "2oYosriBLVHAV7Wf1TDeV18NxiJkX6xW3KE6GPYSTCG3AFVSyrfhZMEVpVQaHnkdNy1LwBEfLekifG2VFFTpMxxw",
  "key18": "5CDdnvxtSLMqktrQmemAKrN1G9XY17LJKWPLig4sNNgZT2gWH5PBUmzw4qE7F47ieBBoh3Fg2hLNgjXE9uaUPe2z",
  "key19": "24YNyR4JieXnig9TUCSKKftNbDq142SeJAM3jerzrot67n16oLjtAEgR4LY7i1tU5YY6g6RijmRBBqQVxVDuaFKp",
  "key20": "44N5miqXnwb1U8gxXsQhwvY8cGpjQSDcC2K84i9gzTvh1wFaptobEEtzBuMkKSshSskF4iddggdJZZr7WRkhTi2y",
  "key21": "5PLYdHYsWUhRt2Qa94Ex4TXTX2ocJz9EYyNxnLKW1wsxwCPYLaVBJZSFpXU1XbjocdDX3tUwzP5j4JJtiEpP5E9h",
  "key22": "ywTFWVFa5eGLwRmtJXt9Sqi7YiiCquhgjrDBm8efUCNWster1QsacSheRRf5pWrF3Kg3acsPUNXTbnW23dX5K73",
  "key23": "4JFPg44zFHeTk84X6nrMy1ngN4LZAZLuzuE4dep9xNqrvZ8AQu41CMLPcQ3Nyw3MUiEg1APjtPJN4hB1Ep1T7euk",
  "key24": "4McFJ5wKg4rjKFpX6H2FEmY6aUHQbnGMcFDD3CbYER5vJQrSyzFCERmJDWjqykBtjU8XFwKmLF8ZcWDogaL7H1xq",
  "key25": "3wKeZRD5yLAPQhEwTZUeAE6F1ks6P1YFKDX9UqMYaYMQuXZDDtD9CWLpEZMuZnxK3uEDPryv6ATk5L3Avkpks99d",
  "key26": "34arhQruYEGfgrhkCxbgXh5zLwiBorbTiAzHS2z3k6eceNffFSUcBuGSkoWZ8MFhGMstfP5ujSD6zCnB18Cj6cHi",
  "key27": "2VrdFdDtaY8TbEwtDu3ZBjbDGJ9PgF8RE91aJbW1a2wDY8qSxdnFeogGhEEZfgAu73hm8rzYjzhKPdjNHS3AMo1i",
  "key28": "qpy6Lmxu4jb9zh6dztWukEn2BAExYwDVxatUtzSbbuas5m1LiNRGjibeYvdLT65mg2KQqzaAr4zjyssqeNEeaib",
  "key29": "3pHxgrF3z5pVtnJteQd269FMwhdH6AELfusnfEtr3GgCgDwwTvBJ8WFg18VdNmzeTGJNgdf8dQa7endbEExT8F4F",
  "key30": "2b7Kh9EDXNXErZKAXQVjvnY8iaADF6FyKmWfksGfSoyyUbGMqPJUuo4QT3TF7Qdu52WxWAJho4ftafEYfK5aJzsT",
  "key31": "MrGvBsehEbDmrayjjAfzZhqShAx9BVJxqWnvFF8nR9rVZAdciBV3McdUQqkrvwU3SrdfgCEpqzAxMFJgNm4Hv1Y",
  "key32": "2pF82TTCx1rA9ncRRFGhD8bKbUvJDCU2v4Ldvyy2Sty5wrbQ9jdZ56fET2qj2RbBA4Tw46txUVeDZT8Y7eqyeVqA",
  "key33": "4rt3HYNqLkyPdJ1j5cvA8BDcDALd5CbzZAKn2fzUs11YQYkFLugpACgMqZdfUYzJ5aYDmnrDFzeUoKPVzKomsfS",
  "key34": "5aPyqhZ1BZaJJabMM3M1uCkrUZ6Mz3J2jcvGP5MTn1dCCJJ2Li3AXgtNGJ2vvUM8CscoTYd7tFHGoGMh15KQrQ7e",
  "key35": "3uWQ3ndEVdcEEB5aXpWxbPgBTEMXs3qC7aBTmBhpW9VBBKk79LQLtDGrKAs5K7HW1QUcuyLBoqwKRNewiivDpD28",
  "key36": "2cNHQNGa5vmqgeqkxzJes3qshXcKQ2e8HAERu5MLMJdFHbT2f6Tw1QZzJPetubH1UqpWVNeFuLRobk7fe31LHgMZ",
  "key37": "z23RPxFf7oGpViXrKnJhWzAbuDEt9GDhzMaGHv8N5zYLvJ73sKDS7JfsAG6cpdrS1VP48qznK8xg1hs6sY9sSPT",
  "key38": "56EfacHvwyS9FqrA2hCzWF5fPze7CNa5sBTfEYfgWKoVcSdyknbQik22BdPjikvE4Zpnb41xirPU7TxDDXQ51rm9",
  "key39": "4NpMEHAz7zeXJZybsSiWr7YQ6kLQ1y9kPxS4M7GoZXHGANffEwMFFmP7HDBwcB2X5DUN16VD1HhtA2T94dxabVX4",
  "key40": "scGbSQCFcPQJo2CjhkP3odJGqhmSp6aN5WnACE53RVpGrG4rm7nanMD3aHSDakpfC8oESFLndhn2hx11CE5jd7Q",
  "key41": "yAjRStWKJ2FcAhnBgfJ7x1rM7Zap5XasRSY769FYz1PCjTnMjVaKbvLpDSXJn1VUdX7rFDy2ggmjf1Gswqpk1tm",
  "key42": "5ZTBa6d9ZQU8rjC9DfBSCjUMEupK435FMn629tsQAH7uRHT1wFAY9tTerM9Rypt2gPdyHj5e7vrnW1WssVpw89oe",
  "key43": "4cqMuy5uBWwFN48HngrKiycSrjwgvfkQ9CiEztwkxFksXrkF8VXxTDZgvKQjuGFB8aw11kdq2ujSp4PL6v6zUevV",
  "key44": "dQ4yKu12VgofttmEpXhE6n8h9mq41GUygPYyJWmSEnbwvSxVMjbrNq93eaH9RpR2Wgd8D17wJCxgFcVab4dn7LM",
  "key45": "2iygg9pzCCgCs5NP1erj6DwmNf4Ww184XxnDYy45Dun7yJFWWr8ju46ZQXdzoRXZNoH4GrxAhVCWjHRBV6UGVdd4",
  "key46": "5qU863SgFBBdkUY9n2XTzJodxBRwLXnSTm3YtCoHGC6CNbGf73pQ3A4UyD72fqWgWgNhNMsmppYqmqZAqsNFATX1",
  "key47": "5u4t2aLNLLg7zuuKwsHKLNuCcSfbAAg3h47wAS5hqwu2ribHENQYUeCskJa7J75BQixsHhgRzYfPZrRcectygGXx"
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
