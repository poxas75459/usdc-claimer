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
    "31oenw6apaKY3iLCNUn713p9AGsHpGT6ohRW2iMAdj9DW7x7m5tkyasvrsfR3dYytGPFQcbJmXYrB1gjRjyQtgGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tQkyqUqSetmHtdJBn8u6sKgRibofm35LuejCDVX2RERtRb7cxYoMTRTcPCD3dDJwgRHs3cbm7RRmWbdnBQjZ6XN",
  "key1": "2XWL1FBz5Buv1WEdiQnaGACyYh9985iZAvbyaLAD9iBEAaSzG5M2aUHhB5TeweufuDaGbCGsruBYih6ksYDJ3gh6",
  "key2": "2iatmCAba5AeG1Xi9TRrfDWmoTKaYEFc3PZvbMvAS1gW7gY1psTE4oxJ91JCTKScJG6Az3KR8nQ5JUytXciKxiu7",
  "key3": "G2Z7pAgNMVnNMGRFVKveDH4HxkghKhHo3L6UM7smgZP7jKjJGK4TVtZPb4m6xMkif4g9jAYddiRThtrrXh9AGq6",
  "key4": "4ix8PPXyTQt99SzRJDvBH4fwSCgiogzNiwFisZM6XPhZXiUqXRHn6v5ufpXnuZ26nCLSnZEkiaQvbnwRrKHpw42F",
  "key5": "2qVKzKaacgXVxGLfBgCrjB1rbPvLg6YtgwPcmAFMxg6S9fjwzy7WPyPFtQjmEHybV6VDLnJhd6YMaTiDwPYWYeaJ",
  "key6": "2vmNvb1iMidp4Tgii63JCQRcXGZmZvdnXwqzRQoBCEteA5AM1HqTJJ8bZTpUg6ba3wCDCKsEsJZSFcydEBFocxEy",
  "key7": "BkXoUj9jxYVRT3rj8q1ts3vcoBayiyQfRpJFN6qDvWcvdjZaBAQd8jbUEE54FuqrZ8kiCFkB4MDLNHheaWsEaS9",
  "key8": "2wmd5mcupNa3Guzds58Vd7tNuxAEdpc6N3dynb2XMaivM3nT3bSZ4JL2HgbbFGWguHLfdTeZQP3zAsaVm8vLwBnG",
  "key9": "2f6vs9m2pLuu5USk6xoc4WHWWjn1SUjSNJZvRCFeig1awyWCmWWxqoqb6pRpbBESeN5LFCzSPxECKGuJ3gY21k3Y",
  "key10": "4pJtj2QUgusYUABNABkjrPNJEFAwsXtSvwPF7QpG6YLGnzvveXqSFRqWCws8hXEFNdQtmwfFJZXGsernNo5cHdUj",
  "key11": "52FqvS755x3VngTY49tJHqXe8znX1jcZM8uwXFcQbeP8pnh1dATFeRzEQFA7ym5Hy7zGR3jm1Yi8RM3BcxH1rM6y",
  "key12": "3a1K3UbZ27s2q8MapHNGTaRLH3KTAgiM3MT859CSocjcEhnb1mc2b4NwuS6cgfFLdVoCXBEg3YQCHCTc5gBtj21s",
  "key13": "5mYjKqbQ1SLk74fqqk783RtMSQAM1W9p5RPiEuiMKe9uPGwRvJz29YAiekFz2SWABLMmvDRBttjYcCH55Q16YhpS",
  "key14": "nNo8DtwoMnqcYy1AaExBQ2G9NdoP2Gnn1fGhvBduXEb1JtVzVgKU8Qah6MVbNaHc9BLggP78Hdma9QFEy1poTYN",
  "key15": "3NYpag9HbZPm6MKJBV5DFgsNAhLFNzAJAj6nbwk4KdD4Y6TUH2sHQcdFBQhSsaWbais6snjco6rXW7nAyFwWNM8Z",
  "key16": "rMeACFJ8ePdXh3TZtSmPg578AJpFkobukXTaqrNM2wuMEThhoC7aLpWtevDxtJzkofwpwtgcjqaLHqFLp9E2CWF",
  "key17": "5XDiAW5b3jebNbrALAB3cVQXPgxzRyhYaWRwSfvBLbLr1LfhnnepPiRQhmAfwj4pUFc94AWQuo3kVjN5kjVaUGuA",
  "key18": "sPgNrMbPSEmLLNV5e2vQ9Hrrjf5BRJ5ASHivKn3gU6dRYdMV1hjYAXSWK1ftebRBDZh6CBDhzYqAb7N2FnbqKB1",
  "key19": "3Y2UV1Vhqe2sCkwpUeR8kxoVzFUUbGDD6B9v1zbmee7JShEkQBPbNqtT4GEbmou3YfqnkEpsGoPe5uvTVcS6JjYe",
  "key20": "vzyqWhAEAjzw9Lu1fEkpC9rkjG51P4KtfaFeJxjB3HaYamtGpjQhWUPQmi3ZFxwqRmH6DyFSPa9BxXgjgumnurA",
  "key21": "33K22LmLoByW5kdoPVrkp6hjE69agSTLNf82ZzPXSKHTr4VJaXn7YgnxmzhoGHPQCJgrJ4UkLrzzWMGCNruW4GNz",
  "key22": "2xYYaS7832vKFQXPAPyyUxrowrsDwJnf58k4dkSav4akKodNwuRBXdCcSQSpvRgFxfA6g9F5iYxbAPryKCvbxDpg",
  "key23": "5cLcM3VAeUY1nCxhqRfuFkPfHBoDT9LWQ3cX4sofFWyWVVTcxwUk4nhH7BkJHh9NNARDyHGnJhJJ7C2eDFdrD8Q1",
  "key24": "2v7oaKv6jcyohRifoqP6MmxwWQ7V2L5V1E3Udzqd7e4ArRaVy7fddwFabxNPcJaefs7rQaBxaeZ1s4qtEHtJjyuq",
  "key25": "2aR3bufBGMST4sUUJhtoKPuHEouRBwhE9M72QngoZGRkqRzocqFxHugrCUUQN6B3sH1crpU9SHRhptzfJgYcxdkm",
  "key26": "3cWBJd4QBLpPV9QKDNjNrjEUa8et7a89AyUpRBX8GYGBmrs69WUVKpWXgBKvdhyn5zbcsPsJnSvnC87rcmM2PiWH",
  "key27": "rPzbLeu8Cwt1ZGGMyQZ6CrqTqGrrfpB6Mkmu6NPoNoATgBvUzznqMJ1DUMvnwJ1u3RWSKGqux9i4EMV8ZrMQLPq",
  "key28": "4bQ9ckBL8NrTY3erYqTjvMVU5LvnDBfnvye1d631DwWv12V3mKaT5SEGXCxuU5AGmYhc1H5ygUKaZueetXMW3YCb",
  "key29": "5bBpJ2St7aqjNkSdfR1GYuEikTWpRFgoojSA5NbD47iV1MxiCeD3AKufDBDc7wkqnBx1AoKYfhoAJc1sDF9oHTs2",
  "key30": "5vMUUs3iQTzVrpXhwrSVZGVR2sUddSeww6SpbF98HztGBTWEin8zHZ2buLttpx9P2cCJy1Mh2gErMDGK6vUjvHF",
  "key31": "3KTR94VzUbknRpY4nqaAsnCSCrBVBafABCzZ9VU1FydutnjiuqTh66afBg7RL3NQBbVHAZLwQDogvJSuLnUkUDCu",
  "key32": "4sifFc7NFxtoeCTBfa7hSgWuUjmrvMDpd9s2yTcd8DvxQ555ATZjmbLcCGwyF5sx467MQJASo63Ar9eLqUwTi4eM",
  "key33": "3ghsEc6Akjzq7xBcZAYhmRntfVowSHdQiB6HMkj1HQwJxLMs2UGJ2usjt1qJbsDkLfNT8Hg3Wmw4Xt72mjgn4bev",
  "key34": "bfq7iUeRLnTE7jHTNQuK6aQyRjHyMbf7ryrmpoGzoTkyganaWeDMw9uvdHXJjHqC13ZzEknfjnDYiL3kNPXZie6"
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
