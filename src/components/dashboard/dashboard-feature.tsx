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
    "42bXFybeskdz9xrGkcDkjU8h85YmEw8yTwR31CueZn3ybyWcCUdLXnPAH2ouhiTcvPngY8Ss1yngF5ck5EP6c2kb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cJAL11w3GtXQrNGa6DcKbMZGaBDXWAfxBfiXNAizmt11vFiSh3ZSi1kYMuaGxqPnGtmQGAyKj3gZ4NWz93AMDwp",
  "key1": "cmERrAbo4zbiZHmfSvuJw6Pei3PGtc8XyKq9ZqwQbmSnbFHkoMrnfMiw2RWGZGdgsj1H8vEj2zwjkATt4WvRWRc",
  "key2": "4QDxHRnu86Vk4GwnmzMc79MTSygtx5tQJW4ZC9Q8Pc89r3VSoWtGvBUzFUwNWQBHruEqVwCdmUb42EVNPwDKwFUe",
  "key3": "1qQS748QZQVQMPe5pj1xsPJD6ReuSwLLqZrqCSjmYHUQ8WGbHogpsEre3q8DcuHUHgVh2GDYffXR3D6Nsc7GWp5",
  "key4": "AjwwAozL368GTrmswH7Hcsr9PetFyfpDTy9GWGbn8oD4cXPnRpERcLUPmCftyhYDfEZkdb5ijcYnSoVCQiHDPHx",
  "key5": "2zu4iRex9HUj6VQTLTe8of8XRjzPRRuYojktqQFhKgAqqSXqqS8AEJbzggj9igQ4uJoB8tvqtHZpuXv8ytBcKpPU",
  "key6": "2HScsAWkj5VoQAocg2ztSEivgQNTGquKwUd2XCxhWKqDQkJkqEu19gRgzcQp27F9cFQhiJQeitxuDGS6X5VqjvJ8",
  "key7": "3Zvw5i8K3G6uVkZwhUYA1vK2pmNcwRRN7xQ5t2AN95ymbdtQ1T8yHibYFcJFwsZMpD1GjRSEKRBZJUpac6dEgJJS",
  "key8": "4WZEeAEWHfh16ymLRk8a38bSFJpwdZvT6WPAP97bwyGjgqZmPbVSJqL1HDydXebcBBZxN6NMFrxNf9MTghyPZvho",
  "key9": "5UckfbqAzpENfmFsX8Z5KtyJhiVgzBjKfQND7VJWgrYadPZpWWNGjRNiq1xaUeB7Njn1Xx8ech2LM8YR3yr1gywt",
  "key10": "5Ej7pdvoDg8R5VeUXbN3CaEWRby3PqAjN5Hdv7c8B2gqQE9wtkKKqY96powo7JyWa8gLhfG6cekp74j2Gk1ucY51",
  "key11": "3g63yVnMbzNg1xFtHoYQL7AJ9whiYpcygR2yrMEUgRYSq5fchnWyBvNmx1KKox8pSk6rah7AA3yPyc4cG9Lnzf3o",
  "key12": "61UWcqRzbtZPhDhgJrtNKaTfbpC57Pj6LdsyErpkNMN3b5CuWs6q6RHVRs7drU7heVeatGzkJ24AF3ZnPtLBPtDR",
  "key13": "2jY2QqLFpaES6dBcFd8PACjzdMuX7DgKTPbPm2oTdzoiiEdMJ7x5HX3ws8Lq7pNctnNCBb7auWtTFXwrhHUQxVqw",
  "key14": "57p8b3xxzUHPTja46eDGhvBrXzQgWfZqRzGLtddp61dnkuSvKyHMfXR7o8n4aGyLEFiQKEwMN4k9TScDZ88FxQrq",
  "key15": "4YUMa4sE9m57CFTSBF5q856uTnwre3vqeWURPXVM7M1F4uNfxDyfwXsmsBo4XNqV8wEq4JhgJG6KNmpQrgGZEbFF",
  "key16": "2GvgZG5Fm6siqoCYqH5XwZjJiFHyqJ3K7CcTuRWcxAHywNT5YAzzMt3951a5bi6vaAog11rwWUqvJUUXTsc4Tahb",
  "key17": "1i8vBnpH2JbZzi8g5VcQooDRyM86JX8Y6AA86tnvx3GvrWFswCubcS8JvLrcdSXvWEUTzy3pbZSFktojCfrkSiY",
  "key18": "4GyJHKMUL26iEmkoxbyR2vGtGzKk5PUMsuvrVc76jyWyJEZwpei2zdi6rFmHx8TDmU15JVkyGVayLzMs6YuSheMF",
  "key19": "3SF6qgqHc7UwqDH39m3zvT2KE2SUGtL8KgamLoaBNV74JeWT9N3RrkcxVtJUdwg97vc3mCBbyWEixm7he4XEEPER",
  "key20": "2enwVv13oz91GC2owCXzCJ48AM1QWJBW4HByGmRBVwFJFV8NjS9F8GNGrKZRujRVrqRoXwf3hSiyyxFbze8vEdL8",
  "key21": "2XxtYWrD8Dy9fYMup2iMF94ekq5mHqwnzuf8kk6cJw6yTiUGT3qA8hdHQoBtveizM3qKnLpowwPPuZimSYvy4rzB",
  "key22": "pPmdajhaWaVJQsDrSuLWnKiwA9nezpYVBYx3nzTZF1vrNiJ89GUv459yVT56FtA2VyNhsKkGjCAqakjhtCVSUDm",
  "key23": "5vDBdaWPR7ghJHAZJ38aouRGtfnQdJtQEM3VWpbomeH3tvppAHHCdDet3HaYpS4FwXiGGSxcrQpRJkna3gQB2PiY",
  "key24": "4UVrUHsay1PH1QgrrZHNt48ahWKH75EBoo4Le2diq5P3SP5z4wyEiHPuytCwGaCFRdz5Qhn35P7eFnDtL7HVL2RG",
  "key25": "4ho1dujMRbH69rmmJ7cfM5b34DSRuzYaYk7gvoUxqSNz6cTgkK16enrWszSJ64Bx1xLErrDY1Y9ge5F7NRvumTBn",
  "key26": "3i1ZQVxze6JZJekp929k6ibxvH6soD7DioFsGkV1g6HbHBiYbepYa59CZwXnkVwxBtQB6ABvd9XFAMYEdbf58tnp",
  "key27": "2ffNF6Vckk6iAXbzgbgcnjXbjGyH24EJi4r1vVxBxyci6Wvgin2ExMruJYKjJZCRUF1uAgyJYAg6mbXr9GV9V55f",
  "key28": "2SVPUESBgXdFUe4tqPGJbQXQ3ZYo9UjQFKaUGhgwUiQbLmf73nVXGu7xqTzRU6d52BvN49zYuQQbYFmMmmAoGXXw",
  "key29": "3u88fNytjN8Y1BQ8BkbVFxorWGAaLk7gSE3iBZx35Dw8bEk7Q5BBVZNfZ3Nt7AesA7dFZf7AG37SCohYaMquwYQQ",
  "key30": "3AckRAm2i4dZbcbqTwi6cXTnRhE5vTHiT8vAggPYNPdBHnR6RjzD5p7N5v2Rd1LgtU2jAvgqXc5D8Sy2wbEVEtj",
  "key31": "3XGw1ekdqnYzKe5AAAhGSonPmtGZfgAKgpin6U26WFEt3NR6jqLyCevDFmkNwReyowDPZdr4c9hEYoAmWwcsQFGJ",
  "key32": "63FpVMzjxZeCu21HhFi6zvsv2mzZePYEJUK1V99kbG5gVynRRd9rofq7oHLmRQLpWcvDpxY7naGrU9fvYYJXRuNm",
  "key33": "3V6e7Y33qZSMxPS6cNbDyTzsZKyFVGeXPCTJCp39ZMxW8PuGbErdtgGsYQRZHrzrXamnnA94vWzv7yfnEfKVx49T",
  "key34": "3hs5x9DJ5916eg5QrPu4FdkiYTV5Ln84npKWGKBL3kpFSRoL6Dwz9mY5qUAJk6VUmAer8KU4RCj1kZ6HRKvG6mg3",
  "key35": "2g3YM25Eeaudkh9BWyGqcU5bP3mfufWG3afUgCWNf8c17VSqtAqCYWq39PWjn4EW368scKHFyEJmvGvp9WQ2pryG",
  "key36": "rSUU3FgG9L2chkdD1fJSfSapBRquJHuGXKXy3FRXBHEy8smAX1mcst6feuTGVYFECYC3RFLjBkJgCe8gGGFTvn5",
  "key37": "2LYePkeRCJRnxKAqRjtiq8GBJa1MmhTCkz8yqnJjWGQdkXm9c4vg3hfnp7B2P9C8nApvu7f6fCB9NJ9RbJRnZ1WF",
  "key38": "2vjNJtDAAwiVEH2YdmHJ7KQWBvBLeMENJKCLJdgY1zCyetGerwCtzMutfH2x6ZyRjcRGDK9maMcDMEJHLQRrDrq5",
  "key39": "52zoU59BLeuiJKAyWMSmjsXm1AwGyWM3wjbQpiQMSm6QUzWCyiyfPtE7e4RZwfYpq3Kra9E6cG3e3SenUqedqBUg",
  "key40": "3queUiYgXcpQ5GSb1SLCqBJnJ5pGxfNysyHTwrgbKJVmdCo6iTZ53k1qPBHVs86VEs6bGnLLf4uoJ4Dsuqr3zckn",
  "key41": "2dmZ4B4yVEx6HoidvoBG7UHwatdCziBG2mbgwj2YF8J6HT2rS6M5pzuNFFBST5LFMtycjCgBtQLRNH4R6w5AU8xu",
  "key42": "wVrjLo1YzUUiX6ooHvYDzCQpPJXEL9hg6wMUgg7s92SHv5SWBuV6MEmATY5Wnx5jcb5Gmszhbku3BfTtZ63tZyK",
  "key43": "2a2djeYs9HfyViqaWeWvFf3gegAbX4xkDTuSFn5T1ARPkimbZemYHnww5DgkrbbsbYF49nB7hs675GVdV1g6TTsx",
  "key44": "LMkH9xAb4TcBuYV2QYvt4bdQC5Y1kgRUaWrZjajph1XdqnEA6qLqghK3z3UPWnBGpmMdQ948pcaYFmXitevuxJQ",
  "key45": "3fdq9aNcRupMftSYDER9Lj3WER4EhSNC4QSTaiAPLdJiKrHc4QRB4USi9cqFHaMk4CwmTxt8msd5hLHztdeQkEqs"
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
