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
    "34AjWvYCdiMicsWaEoFtNMxXH3zh5dzKCXcPkNfmTymyWDXM5Q9je2iCcUdTvhDctBXjh3rFSvuZmkzdT6CTN8nY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "s7vSPqq3JmxEuqERdcbrraGqz5FdMjMqLwX7Jr93zFj9vkq7qmjYhGafF9BjnzkaT5j2u5N134amRWza6gywnMP",
  "key1": "52N1wBq9pyHiw9sKMqkD9QNsCqzxaJjERR4g1TKnHhTVPhSUpmXBrzMfhfhgMMRy4NbodVZgoTzntzmKy1LEuyuW",
  "key2": "2vFidGrSGg29BvCHJSPFvnutf39FhMnpUzNeREFhryTZ9scXx6YW6QTSUctsX2rGz8CY1wMQiFQ4VrYt6BuG5uH3",
  "key3": "4r5Y9cKx3QUsu3MBeH3bMfYQm2pCGFWLnCd4axR56ah1i4RotX6S75MEDTGD1oL7Q9YU1zbW1c9uuAym44fZfHf7",
  "key4": "4kgg3faoLynERzKQmugfZz9f4GKZ9xcxZCsZmAifX6XY8bkiRBsKMThHCZhekwTjUwtFae2AFEVf39rh6oH2Rodg",
  "key5": "3kJZVHVeoLvwE1YRHgFMb6TabTvRFs8CSojHBdghbxCQRA5d53qbdfXT9PLF7VMNbqD52BJSnVoZL18evtR9e4Pu",
  "key6": "2WyVEh2FSq6K2NP6suGHYA47cAjQbwTxdU2Y98tGcwt9aiAB15PfpBk6ypUALvJz2VFw3rztuZGwARPYMSEgdmho",
  "key7": "5zJn9ezDwFeBSSVJ7YXvCPn1NPE9mRvWUvWV7rJR9cL4QnKCnsmHKjrX8vHNcHK1k3YMgy89o79cVNGX5eo2hwqX",
  "key8": "4bGqu77Bw64Jocywme64DXmtwPJ7UB4xeHJ6kytME7PTft5qTF3LXLSF22Fnto9whUCe9YQMofzhFwSMyxWEALkV",
  "key9": "53DbL6YtSfv9NVmKPgozaf7ZfqBJD1cJoi3jJHc9aKg4RxHsPiNG5TDw3577hveEyBJz36h4YRidtSkDxNsB35iA",
  "key10": "5Jqp6GQgdd6ATNxbrwBr3beQBT1zKBA3xt9VzLUrCNEbtzRaetvmFNPYxG8kD8zCjmyJWgkUJZx93BVqm4yBJn2w",
  "key11": "3ggfkgaV99t5GA6dqboHEiGpkZMk3smLK3Sq17J2o41Nn7WwQ6bGmDy4XLq3E7hvcmLTpdC2c5fd8byKHxHvqm1g",
  "key12": "3exW2JaZLR3ifjGD8ucoAVrx8aASuCbjDzzFwDgdUGqinssJq6VikvaXjMKWPZM1RtawhLyYZFgGWH2hgc819Rt6",
  "key13": "4TW2veosJEkVvQCmkmfekooDqkp4Bo7uvQbxnj5E5DrkdXWCjwd9XRnTJ5hXWqSqQGcWavG7M6pG35A8x5zYLSKa",
  "key14": "2ZFEGu56yocmBa9M5nVo1i4bbfivGmKyrBtTBiuYAbgXsVD2wzp1quMJGknk3RJDCzBW3a4DMNayu9TSKVus62Kw",
  "key15": "5krbBZkpbmyT3GYKg5tinTxz4imKjoBVJZcsSCLyuaBcjHXrbzBU3h636x5NBNhmdqZ2WuaH3Q7vJwg1h78dYiBE",
  "key16": "548wYqkA1tNMb7KB9V1aRM1jtqeD7RLrtCwYCAVEjFbftQ7NxU7kimigV7cKte7tekDz1rhc7txWPuBZQqphuWXd",
  "key17": "59RGHgTDgVquEZb3AALZ6LoKyvvXHGpBSSScesQQbDkepK7L5PDPSS3fNLNsQT5j49TBXZaSCEZENauVtvgwVfdm",
  "key18": "2Sys7aV77JCU9MEkvt5QgdAaurFwvaWbm2K2FKSUKLxN1M6kpkkC5U4sTaLF3fSVTAPSeTXowp9amGT1KnV9crsH",
  "key19": "4GUSaXyfmyatRMmW1tKTPnsB5ZX5YGkviWvuTtMVcyACazSQV2kVUpuzgxny1dnzXAbhLid7a2dt54Lb2PBQpofP",
  "key20": "2V9eFvdFfhMRGv7XFkXeqEVsaY4vAStEzC62LLyP6CrK9wX1shsdZrJfpH1yLJYFc7xGnrV4FCi7EsmYMZJm8LqB",
  "key21": "u3cTm4Jm443UMNfYBmRUACRfk7xfaVUvmrd3WFACJkAztmwYn5iYYvjBdV4D1verN8jQHimmvuyNcVnrms5R9xi",
  "key22": "GbfcQjm97ixEnLGbxPRGtDaqG466yCWdGdx3VGvQXNM4VWG1kGuaVa1LSYgbCsQAtkCLT7RgMrYuaZjMg6nmK2t",
  "key23": "2DMCPiXaDvVU8SfvSenZTz7TW2PwjsWwhoFjyj6rJVz94Y7ddJLHaqgjCNEPvSnafNKTNJKKSe1hnDX9AU7fSiQx",
  "key24": "65bRF9Yc3GkwQnbRQW9n5RgcKdX138uXVWxBqBupkW2RDjFHP7D7bHSu45pzpKjGjvjtUqYeZh7uXfTDE9ExizRh",
  "key25": "4sLbfXhvGWmgbN9bG4XsnFJtm7e9gHLRtty1cghhkXsyHusUxAGTYRRhYbrLqNVBPh2vZ7aR6QY4tEaq92vuv7hx",
  "key26": "3BEQPmxyLbz2sVeGMCfafbRcckFGjv2opXJhSiZzUZchqvia4ZNT8An7h5hLm2CQfjpHRUCofkekc1iSzRFET81G",
  "key27": "29juY4SqNM9ZySTj7cwmt9vb5cpiTiir1Y7s9xBTLrAyc4uekZiR9GZDd2TMKxpEyqC4yYQ55u3exc9Gm62b9Fif",
  "key28": "5XiLgtZb1UfCpPGvMZAtFg4Zytpg9aNEqYQtHQQA7XkTS7UGDFg5KtVQAzMubReXL5guapa3a3nh2iv2tJ7WyeT4",
  "key29": "4d75pyz1pzBByUNKHReDASwByDq6HE2H3qkXVZN9BqWdfsWop28KFFtmhnfzT59D8yW7g7gU1j71S8crjK59kSsT",
  "key30": "gcukW9L5WKGQ4LAGJZVp4VHFJfm9A4XUDQn7UjSKk9UggNfhsUepSDHr7NSdyaqRDTvBcDqvhQ83GKaoHzLVNq4",
  "key31": "x1wxJ1P2KyHa65M1Gx1pQPqLiDaPPTcZmay2ANbUyBLJaawgcDaAjDmaBhgjPAUCBq4FGbfijCogsVhkLjsZ63q",
  "key32": "Lv9WAGu8iAZnPCa3m84UzvVEfKRqdQGn7Jfmrg7AhWhfj2RpZ4VMtf3XjBWDJd1uxZm8GoZmPBw6f45E91vdn37",
  "key33": "fCj7meCzYXCuBJQEVmbbWTPQ6myGBRfGpk7QxNdR8GL7dtUiD6gDcVfzY3PhyzCuRUKNnZW8Dp8mbATr8Xe4fN3",
  "key34": "c35u6NbiRXV9u3T7Zm237ZPbk6AWcGnCQspKXmaonLjDBa8XD6HFziXxCDnWHxFivQag6Jdu7cpKFHYV4YKjtyN",
  "key35": "46tb72vDgioXDx47zrMVHFvpyLntknF66JjR1nP2CCKFdeFcgKcP5AzPyL5dikJ6puumhq6KX3CFZmWHfPXBTcNz",
  "key36": "4coSQQh9XEBSWsB5qSW76ma8n1co5kVQ2g2VtHgvEEesmmLC9qPybQR16b6ef5g1CveF6xZTnQPxKxFTeQCa43gJ",
  "key37": "4BRvubZM4gdEN64epw8dZnnB98WxMC7hy2rjLcoBTrNeELycJ2MvqJwJQGpXNHcwMZFS6iaV5mhsK8x8cFDgqXfu",
  "key38": "5oXBSADU2J93uizyy6KnNo5omdbLzMixsuaHCzHhYzXZD4vu5dytAsAERRtG1s1bCika1yuyt89tWBGzYAtM3brf",
  "key39": "5mcHcCYWcVTD9SzHqYkUT9ynYsZqXfzbxMxK5f2EeaJ4C9AphRx8PpBs8EFt6MdtoU8sJ7Fu31LPaiXhwbeadbCx",
  "key40": "5L92by5gGjDPqecq4Z4pFvSomzzFSkW916ifEyQk7peH5kzbq1UtGMMk9r5GAmnqe1GLG7fQjqPv3VLArJ31rfRi",
  "key41": "3FTn4LTdStNxLdqznSWwkQknqkDnt1NKyQUgszhxsVAGMa475va7Wy2X7Hr8S9DJgnm1EGs2V7fR7ZTtSi6Q7ajp",
  "key42": "3b8CFmoPLnUr4kZBjBsbgD6pLLiYwuaSf2XqUZELCmfw3ixHqNMNwsPG6ve9s2tSzeHG5e7xhhrBkz3v8VHBuHkm",
  "key43": "3SVeniXP5Hf6R4C7DHbNmckscWNZsG9mnJfweoQxos1wuR5RjCqCPvUmAUCk71xdPu7CMUDvR7m8topLXcU3ncro",
  "key44": "35shuit7KsmQJ6f4tHrRU6UDnUxU7nrBnRPf4sA2zQyXvGNhGW5Y4hf6AyUTq8DvTdY1b7MfNn7u4Ca1UHeTKR7L",
  "key45": "3p9XicmJ6Gcjwaic8JHBbev4gs4z73akz2FeMbGeivbJBA4CE9BLwK6LRaAKX7RYgV9Pa57qsdPx4XHRu5DMRqW8",
  "key46": "fN9nNbi3Bm7xynaM9ptrxnrcfs5ZK3jhofsAK64t16bjbW1ZuvD9P8K9E1rxau9gFvvAEbTQWXaMTrif3UUXFmv",
  "key47": "353LQQEwLEFdwbMXHerK2JvgfBcD5oXtXnfQqUbD8WitRzVa62EbxXpFsZHLqfxUagUf6zUamjRruFWje939Q4xE",
  "key48": "5XNWcEgoMqppF1hZpqLKRVAAx6ApphaEPd2eETDrYbE7s7omkqPEtdjzzX8ZoTyqwoC6tB6jG7HnjY2boettiqVg",
  "key49": "5NJQt6FpL9vDXk6tPVCsB6E1eyMcakR1AbGJw5k2EXi84c7EHkZcX3TiWbBgAA9mAvPiSUvD1jxDrGSTsyoaq4qh"
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
