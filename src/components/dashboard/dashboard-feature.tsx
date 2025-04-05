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
    "bMTW64C8xWhC4M1qrJKZk8jAb2yBbSePwwUwhE8uUQPytpzm9V3E3sXB8SrLynhuUP9s1cw8b5GFe321WEEAPnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g9J3jwTCTXsWoCNy2wu7qM8swJGfvrYLbErpfLRV7EVAotcEzDqRzL2fAvMv2sPAJob4tJhDBxVRpeQDDduWzJx",
  "key1": "2zbhxHaheayGoW6bGr3gnZRzHbBzUd9yv5rrzJ6rtbnBWGPQHndvFrAD9jpZQ9b5kPtRM9kxgaouBGo9b9dcqaDs",
  "key2": "4341psmtvZwJB2HTuViD3UWryqU1aJFnQeT1gfVHbDF6Rjhro6Wnz6UBGqmaW6qZ3PwrL4ccgzhcjTnKCtxR93NN",
  "key3": "5JVsWpVLS3Wqu4LeqVEnXT949f9gC3bDSnSUKajDc14qBBaPNCiMdy12sAjqwheA2842HEt2o6LtoB67hrxV7xD3",
  "key4": "45ZJtnymSCg1pVSPVNnqLRYCfPH2eCUghcw3HXY8bAQC7j67QiiUJc1fNpkWo7pq51KUjBet83rpQ1iV5jsurFsh",
  "key5": "66k6HTRFAXrd1L9B3KuJdkx4RKtdQEgrcfxSd3Wudsm6sUpri2i4iQaE3NN8ipbHXTDmUDEoTdpywqsdYFSkccg9",
  "key6": "3aG7DgqwUvAnrKSVqupXci2MiWwgU3qg1q8HMRNi6WFD89rqvfhYcW4qEe2BYyJ17gzpdxipVW62CBoARGqtN6G8",
  "key7": "JL5deBREb2i48T4ZbSDikDGB9cSASVTRpK5f38ZT5gfm5TaPQqhSGBE7T4TZFTVrZxx79HYAbyzFAM8aKXbJHyQ",
  "key8": "oDgoUsxfqfCrDtdBXExcJUe3eEA36DS1E4M553KbgmZPigzxgFNxjEKMFKbfHKHywW47eqJFGmybjDuGdXUzuKi",
  "key9": "2VFRJHDcf5enB6fjonNJCGoy1mpHMWHKGsH8DEMD71LCBbPA7HVRH2KosRqpB7QkHJKbzBVnYdJgUZr5XVVkujK5",
  "key10": "4WrPq5uftY4vZynHdRyJCzPy8zKxn9YYAKYvf15RiWFr7gqeV5G3F8bSx4sFJjS9cu97EZf4MFEgbB8ofrSMrmr6",
  "key11": "2BBSPgCGxX6GkANhfw9JckAvFtMuPYV3F1bsGFfys4XVauyTh6uL7cijt7nBGN6bUFyFwGpdnxXHH71tCkmnqMXr",
  "key12": "3knKrVnwyPbp9JKx9eQNCjorth8i8CUcYJNTHypos8xFE1mqEYsgQwnUhown3qRibsvu4noyk6yvJDJML7HV8F1j",
  "key13": "4fZrNm7fwXYPL9wBre5Q1q2wWU5kGP5EVkq5EDCCayJf5Wg87tR3tHScj7wqdH2pHTK2w3JZue71nwzgbCxQzqDo",
  "key14": "62grL6uBA5XS8auuZjJYghfsXH8VT7crtrjZZV9tyn2MMYtTxRHnQdfu1hSEDCxEc36vrVtEiurCR3q7c2Q7knHJ",
  "key15": "5DJVnsbVMdcgNzAekc6AtVJExB7xuAygUxgB347Paznn6BVkA4QEpWwdMgRAMnnLbDH6xiue16CfXuNjrA65ihn3",
  "key16": "5X13ToErLipCER8SjSXpvcz5smWNLXWHLTktFeURrZzeozS1R6pNnWQEjW9asdGiFyDEcQgdUf1mnnztnPu7eYQz",
  "key17": "311iGwk9FirVNchTHBV5LBSCGNnJ3Rxo8rLuY4YyVYC92GvTnQxPWiniNFR7wGiHMndv7Wdhb4desgnjoswUiocC",
  "key18": "N5bjKsr3YngfUNEhL75BqE2mvT5x22krCbft2sMEiWJZjKQM6gfYL65XMcENNcWsru89QDkrDYDkfRk2PX83P4t",
  "key19": "5TNpovm3P6xqQ6epTwFNXdXcsHb39yz55DWBZKdszMUGckJK7y7ze653znmKXgXSE2vibijHaeod7vmhtL98jj9T",
  "key20": "kpurjVM45AC492cfftc9tBAJJdHtdw6p93hFw7SNErgMBZ6uH6fLgKUgo7fkhn43qW7EEoTMKVgVUWria6kmvy5",
  "key21": "573jGFJ9oZKhQsviXk4a4zCqvHiQPvPPAVjtfhNAy6pJMAdc8AgUXBP3Uv4KDZKWPijRDMgw4VjoPy5EgRjh3x8C",
  "key22": "2DMvcdS8oNkG59xopqeriiV35AN9yopTm644MfGJmbD8MLSD117q4Ynx5oZLgouSCYDRvBXmaGq8m4wUDAAtam95",
  "key23": "P6EhMT8eh5KXp4vdR6KtmPCqQgHKf7p6k3kehZB4jgD1x6qDtP8fRhV8ErQasrJ85tvdh51Wk12FWcw45qLnwfv",
  "key24": "Ru7TPj9FWZZa9fEjUc1xXw4LFNUZBuMUsBDyQsV9P3zK3rEXNu5X4LfZk3QtaFVmiC2cMtTATXn5ahjy7hvoJ6w",
  "key25": "DicpTABk8eRQdEPmkzb8kF4mGWjTZKvZpZWyGuDtLhWeasZMpoiXejV6UkKCni8fJhQQ4VYVD4c7rLzS2NPCVwL",
  "key26": "3wXJEou7KLCmWL7fAie9fRQWMhtEmoNVrUKxrQZk5L4ahXV4sdni8Lvo8B7MzDMqwzQ9FJmNixhFHWRHXmWY3vLW",
  "key27": "42Frog38r7cfiTUbp2QE3JXxRJrRoWHHJ3jGLRTxzhcNtoXjwHPMyFRKBqVQ3WMA7RGGXm6BigR6aXQ7XrQor9R1",
  "key28": "KRChbvzPpc1e5gabnrv2xYnAt6QtcTb2DPXPMABG42PQ4U9eLfTT7qVBA2Nbiqos9v7z5MowSgSSNWHpgz5WWfU",
  "key29": "3P2qb28Y7dZoBJBMBfcvPRujbRNb1rXSSau1HP7dTzG35fN23Dd7i2oR4CjVsEJUdFVGC5QSR5Xs2pmeQBPv8BY6",
  "key30": "4cKhUnmZUpWUGLwkNN7SNMFshbKgYv9X69JX2SEjeQC8PXCuaL6Wi9kmdph73tfGG2SJ3LyJc6ADehyVpLYKizGF",
  "key31": "49cQLhJR7UYhd4oZZeJMBSReoKh3nyRJJJhAkCDyTdcuNasuboCTHzS8nVtvJxKKSqyexNUVQqh9FxwVirGX1unF",
  "key32": "3sGgkCj2xyacPrwxJLqA5cD4dWJnM3Fe8zaDRU4MymKZbyE5qCnj4CUgSJzY33DfWDBr7yRt8SFoAgHE1DHC6Dgw",
  "key33": "48sQZj3atCGFw8mAvppF7qKqi92SfFxAHsD3kDnDpHUDT3a2FsvydWw2BBquxTD2ZKsffZPM1MXnECvoEXEfyNs",
  "key34": "3teKKiakPs5Xh6avVWxYHw9BvY84pATZ6kNHJMQudshLXGtGYUYsSpcyMePdLmuTnDf1jwxunnxH7HhUGQ3snxrP",
  "key35": "447tCx7iSLTjqNUj7rkxX5ia2N1TgSw3nXsZt1u7V8XFmAHqnABKbcSsAAtEusfabgjWBDJSXThvLLutERMxMDBn",
  "key36": "4xiNeeXGgF48F88APxKUfMgt8Ym976DoPo8iKRcXvB3LVqAER3EQkDTGZXVM6ofFtBk3ikmNiUVJYbfZtbWgCcZ3",
  "key37": "5s3Mc5WRnJJ2G6HbUbatqSXmB3wqpAxBVo5HsVgaxacf7YJDuqUjZ1DvZCJtizHaQQuDQK5EyEGmqfhsuMeKWXnq",
  "key38": "2fsiiQSGFAwn8MgDjAHgzGBQMR5GzoWsVtbQ4Sx44wKbVRTyS6veSMecx59dcEU45cpiBGQcU8o7M11odvXdrphB",
  "key39": "3mJ6uvv9ZkHYiNouxjWEX9RVr8V9113kZH2w8QtNaSGwnQrJgtdP4crS1d8eoqRz5w9fPSeL3P9nvMKHBnWvKNxB",
  "key40": "3x6VLZ6SxRRXQRReu3AHMLrkmkonxRREXEPvZoftK2vxyT6AkU1vTwgkBe6CzUGPuHKNiUQ2GkCYm24fNwGR79eF",
  "key41": "3g3xhBEyM6pokdt8Y2dcgXbiEBbNUFct5vbsh4zUG41ioWe6PftH3wYieUi8cTWGDcm6zQhSQWxVvENsffifvGUL",
  "key42": "sw8DUznpipL1oP3nEYsvJhEjit7MFXgn1aqSxa6Vx7KmkDhJbxZ5aMB8Pcfx3Pn59zFeP1UcwjJLXnuxBBjij3Y",
  "key43": "DaAkt46y5ajEejekagnZ6PGmT2vgnf4BYcgFPPQfBf4ZzoH219AbhxnfRYtoyCUSZG9e6Uh8crNSirzgvfmTFwo",
  "key44": "3SvQD3nTeDn8pH15sfqHuiiQ9TqV69sPd8useviF3X49Tr7BFP1nNpXv2fZMTcGDAAQJEnJoFGfqBW5Fnm3XCkNE",
  "key45": "3JRg7R9ojGHiYTEGjjLH8kMvjTZhZM9aQGFYF9QCFKBtX9JkGZFFcJxdgtEYaiuRrnYbUFtrxPW4xmbf1Vbatrsr",
  "key46": "5WNzXviDdr1JfQ8jpoDKtnwT8qhYfhdHpf7evuVLj2qzc1Bogjs3GECsGEifay6VqoMbgoV8XKKKAUrHnvPgJyD5",
  "key47": "38JRbUipi4t14ymj7BbRS5UFw5DCB6htnBH5PvzxMLyEhxvv65G2o3rPvTfFFBW6QVKDxQyqYKRo9mj6EYFVFsXX",
  "key48": "4qL1u2E1Amb3G5nnpxvcEtCateQ7Fr9hFyE8sriZfQfe7uZHciSm3wr4x7woXFW6jiiUZWW7zrZRpEUr8SUUpP2Y"
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
