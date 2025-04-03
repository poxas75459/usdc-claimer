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
    "2z4rvu4dK7mgv7mCcTv7a7hg1ckCDcjpKatX7KbCtnyS3GgN9VzCqDk7AfWFdZbf3XWRBMGTS3taFuL4v5Up3Khe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rGngNYP2aC7dAS3BV9pHZL3dbWhjTrEoRzwWbYiPBRikvf4zh5661PEC19NVo8nodJVpRo5zBqVsAhyi7mcxknu",
  "key1": "2UfrFUPVsDWU55r7nCfkJDqkj62TSr3kZhE6CQekeRGw2QvH4czqnu1v34MtiW7H4X92SHy1KYCDTH9LXY7UkDgw",
  "key2": "5YT376VyAXo79CqvEJhQtz6YPGDb8VpNorv1eQoX3hwKtP2KgdUP8XF2ET9vDWFeKhHJe5eRAMyeCNK6PVouZeFX",
  "key3": "55M4mbwRoxpuaQVzFfXykKMhYsFR37AN5vbgYU57Dd4c9b1gpcJ3gtAqPU2q2GCgaUEhhj3xqzQX6pdzr3EPaKqQ",
  "key4": "5LFf2p2JcxZj5wNXw6WJJrBoDay2SfqtkVzj7uZ3xQVRRYUuYUtVmnKFnTpoHbJumEKHtmpuJ7PacE8dcU4TaxRZ",
  "key5": "51LaBCs4Yrjdackwf85UhC9J1HGiTnf497VGYGvqpM5kkUo8eNKcxF52QjQCmSrSAsdthctRwmRr68yoVXUxtwwJ",
  "key6": "2AhZQD6SNjg2wG5KzEm1cMdq58ZsE8cU5qjL1TNvbJhBonHHMMeVgyRLj7Vbyvta4xL3mxVK3SBj3vZEoSVFUqZ8",
  "key7": "5dwnKNuX8rQfwBUbVzTf4UPjZwsm4UEyEKZWViNv5ED4eWuD85fSSMm9NjqWJttWMvD1mha58sC3ba5xgi1a4nQ9",
  "key8": "2vxHZ4EJ27NVH9BNE4bjLrXEKL3VAWEiZ6xGx2GHVTQsymyW2zNysNfjmsYWuySX8JyPpjX4F8QQy3TkGPL4C3cH",
  "key9": "57CkcJk3YepQWmwoPfggoNV4LfxD4HhMwFUB4YPSJ1hGDWgsqZVUMkMediTwvhSLueBqePqBFMoXH2iQMRi56RMD",
  "key10": "3cF6eU46cd2fSENUjhB9XP29nJSSAs4g5W49qpU5Lz6zLYK4XAvTgsGVyYryTKKpMjJaX9jxLFUHseZnn8C6Qwhj",
  "key11": "3DPLKhfeVrXZMsyfNt1VUjjSv5BCaRCk2WDMLP4nVhuafhtELnDLMC5p8w2CtoFAEMquc1aEh8hA3ZhAggMebbAk",
  "key12": "3VJV84HQyK5vDDdChyiTCXRAybRsDbyAv2nWYrKeEWQr36xPfk2jX3wGrYxdYXbDB5pNEW2dWsNAhhbFXtnSH5BK",
  "key13": "24D9f8kaawb3s4xSiVvzJtmDwbbQC5MVNrQGZuhYrWGmA3FYTGtjcbhBBfVVcqp8Pmxsour82zM8tPoGf4KhsoWi",
  "key14": "2NqJk24SZLXsbHtJMCn8ByegNaNLUY4tnxSFfjjDjBocs3iv2LdsuVLZnqTjfGjbxnMSGTyjKyWyVuDyiNvEk4tV",
  "key15": "2AEk3NEroBVVNGQFwk2X8RgFqkqoZRbWQsVv1mDEFGDqqWppjw44zmP5yBcmzVYqkQLDirHzET5uxZdnmrbtKntd",
  "key16": "akw4yLWgvPTFJT9GGocr6KAg4ovimbneHdvCpKby2ePHdRu8jLwZ9bmb8D28wvRu851MfkfBAsr91QgiaYVJGgH",
  "key17": "5yak6UbULJbieQNpkqMuyw7gvixdYvbx99YVsKcUmnMU67LgLforYMatT14kdqXifYnbKcgQ9pTLFfFtssHTWq8e",
  "key18": "5hRGnrHYfMSChjR63KpmSXF4VRpW5eae8AjxwwAqj3j2ijV7m18cbzXBnJbZnkPX1mavKKz9J4wyGT8aNy5xsMEZ",
  "key19": "3JLYazaPfUXDR9qZwFnYzjv931k4MUgMDZ6vZBReHBpG3pyPc8cqy7Jfij5UbSij7J6stJKjwJaZgBKVMtyKemVS",
  "key20": "2SHaKq7LFs5Wo5RdJoNXkBs8JqfbLjwfL3nnHXW5gV2xXaAek8xMCgcCtHXcKsyBJMBy4V28d1NpLMMbMt2orZ2n",
  "key21": "4Lk4ae3Nv1nC37n9B79knHsdY4QBV5opbE4jXBXq4JMWE5KjpxoL6MtSQyyKmAPr6Br4yesVMdSKwc93zgrmLYm7",
  "key22": "5ACsb4YKHMrZPtCr4h9h7AkfYVJp5q66VyjR31rjg89yvxMdWoNvQUXhd5ChFAefWS144nKoggyERVmJiC7KUVwJ",
  "key23": "4tUqaqrGyTZuSE7XsgLexTHFbxjwks2EGUxWS7tiG6PWaLDdSwiRGa93ffhgs7uX3HSKo9nY4Rg1BgvydEqjzwcC",
  "key24": "rtWGzzeMfxgVmqiibT27LTxqVv4J3qwgiBwGkE3mo1cziNMCRsnXtHhn8861EfLFfGN6QbZhSuZJjMoXnhLnCoE",
  "key25": "GZ3ZeLJD1HQkzuhirqzK4GJzhXvQjZbKByoyU1Nk8F3QZCU89grQWm3HvAvxoTLAW2qRMnJoYfJrqqBbKSuaS6D",
  "key26": "Ams87dBEvRcJnGTNpwcqK1taJa4D95qv1wUdg99GhSQhUSkNdpGfHUoJDHoDKo9KwL2QQ7PG7JLMPkvr8bNcaxt",
  "key27": "2aTtYE7Euud4dMRyiWzX4PK3VviU8uBJW8p5Ee9BDyViu1U2R2kNVFVSpbf35ovDmoipBpc2YkgT4iFBWaRYECjK",
  "key28": "4uQWZRppY7X9pEbqWSsBaRszcbDRw49jjgoDy1mVo7A4ChvTXPxAMTApDNUAaueFdAaaNgsy9cqqmrfN5ro4at7U",
  "key29": "6NiAGfrPFbq9haGvTbg39Fsa6LBCSjPXzrta9XRQ6ii29N4tzKCXVw8zVaJxrAwwtPhEEaokmfnAnngBvWfk1F3",
  "key30": "4wk7ypRMTsLhtxRYo9NwGHUFRjW6gr2MEUCXMHuzCp4NPqZ1rvjwi295dKpsHaeAA7cL9n75cYPeMaTyEKV7B1KY",
  "key31": "3sfDgUk7864y88ddN7X19cCxjrg1Jizx5PuGZZuN2FcZyCw8vCffVY2tNJQnfjr71yMEJagZZbdQR9oRTraDjUcP",
  "key32": "5FS5m8qujFAw3i9S1EcbYBZhRiuH5qRGkfb4x5H2igqQE21kVh9TyS38EogDHhbWWKonzZJjqexFKt6f1soAvkAB",
  "key33": "5JQfu86nzcTkXp31c2qsypR37eE8tieTfTcgm4icTDicuUq1U4VbgBkZ8m96z7Z1ngBKtLuVa922zJR7KjdBhgjb",
  "key34": "5JGrzjDgKZcfgFqbsZQbiADVjTED6AVvfpbV1gqT3jyovr5dJRr91Btv447SYQz1W6aDEzRpqJcvjeiWv8zd3eJ3",
  "key35": "3kdTMu9MmsBPEfH3UeEb717PRDCe5LQEiRYHNtNZ6ZPutdge15QrsuuUCi9jbLu4LNnQCufDdEgr9dRLKzWgsfAN",
  "key36": "3FzoHX5Eh2dJSGQURLxEBdm3B9X9yUkD7Yo7f94rmTHfaLXQitrr3yNskPDfzWf5SLzT5eFVr6zFFRUERwwa21po",
  "key37": "3Tv8QrUefpCoqaZaLqDr4QY3bbhYPPC4rguTZxZKAPb3qVL8WWeXmqGKMwqqUFapReqEqX8RHEZGiWF9tK1QvZcr",
  "key38": "5hBPiEBj1GfeSgXpsJRGg3nbtfqwiJ8FDhDq2Vqhdq7Q3FeDyzmbdY32TeUqCEo94kH9LF5S7CKK9Jg7mNMfdWDQ",
  "key39": "3igc1pEqjwJ86Yk1sq9uYrpbj6BZBX2SZERd9956q6TM1C51K71B7fqPLiHDu6SW29Dgx5k9GN6QGVCuFXvoD4mw",
  "key40": "XZJYDQyTjfHneY6oWjRj1vvhM81JzZqc83EzmL6rFTWZSqsPhLqZEdQmwqTeuo8NRnaRd1cgXuQu2e7NsPxsh1s",
  "key41": "S1iyypUEYneSoJ5he5kQ19A9k1YKG7ZiWJSE1Nwpk9xVUAhNEwAYomU3g4UExHhYRVBhVnzy6x7MXXbZoCRQuCZ",
  "key42": "5HaZCVrwtjXrZRRX5Eu5UNisAMjuWbv5kG2esSeZxcBFPVaSKtvHSphBXpc65GypAJevua2mNxs18coqbMCuLjqF",
  "key43": "4NmU3GngSRpQ14qK5GbLEqmSbLKvKJjUQmNcz9CkPHzR9qZ34n3AJc44z3rvzg251TpD4mdizbXTw8ZQnPfunT5q"
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
