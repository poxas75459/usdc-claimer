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
    "4YLhAA2262fcjtY8Ck4z7hJGh15qkBLgo1Sb4Kq6TakLFT1xQNBJVfkt2a5cdVwm7NckGevdmPcwxSMn2A6SX3aJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q8rtVLgwYtcYKbb8tz1xosDnKDdjn1xCypELyY5tfBBoc2jdxeLGugTHNkYW1UZzkSpHsQ9izCMMJyYCwDz6ruP",
  "key1": "39o2xRMR4WAvtjFBizYXbBegkBcur6KXCyQy3gQfYn4k7KUKAPyHXE1oXadsMg78LNT2CmLDejfyNt763sw3xRms",
  "key2": "FhPtNFyxiGNjNcxPbFJ4KxMo8PDraRZcVGmGoZFC8Y3j1B35WjMWTXBDkYATB4bXSZADyjBfFt6hGji48XoTACZ",
  "key3": "5ftgv7dyh71cyxSJcf76wPxDzQ3WztGjHpWsz7fzCeBWnP1dD7YMUBRrWZa7s1AQvj626gELhLed5oJQ6qjG9uRn",
  "key4": "4Xj4sNe8BzWWqKV8mUarnDPmdHWASG1fJoiP9LvqBUjWY4aKpDzQfw6ayZtJ1YfhMHYd2kf9KQt5xkfeDPVuoiBX",
  "key5": "4gkLCvgZ9RP5j7tDBBfU2Dqs58gVK9TE8223hfXpk4DiPeHj7GnfJihbvEekHYW2Er3jKBUrjCZekrUzoxjTR94D",
  "key6": "4nLCLpzSWHotGjWSnmrVHSn87bhWAVhWntn5vYyJJwZhJkWqZZgFGkErMgt83H398Teu9Bxh9mTk9HBPSjZqdpsS",
  "key7": "3HvD5fcbbVTT1oBWvqYp8LzU166cfP2qPqCQmxqaMsPb2WakumB2UskQjRmevhWqebCDFkge58sQXxnxNtKgM1cT",
  "key8": "3tE8wTSEoRWBLi3zNjHMhAaVnx3aLpVi5YGKnjhwbH1owWHCebN3Eqx5QsSvGutQLYqWha9kx7ebKDPJ5N9gLdRh",
  "key9": "5ZuqVNf3UHwgG69hRxUfzibNnf4ciUmdDP1XjCrrmwdRYyYwzxg4gEBwE7wJeew4raiYXxU4fhXcxV2p8yWJhkdS",
  "key10": "5SytUMh1weDzSjskLMd326n19kxeF2h7eBVZ4EjALEh1UBEdQJbYqjs2PhPsHyM2aY1V99sRMb67PvXj9FMrmE3E",
  "key11": "3pkavjPmSpbZXpMy46oGGvJKirDQP4RfWggDEnp79691XwdG9ijvZYSgpXBs1XBdyoAT5mfUWPuyFKNw6YvNJ2hR",
  "key12": "2yaxLaUBo9rdDCAgjgPbQDdJYF3xxHhro6gnJ6fDkSLuYhhvtUULD6RhDPhqc4ZiHXMDLg1Eju1jBzNJH3h8RqUH",
  "key13": "5JvTTEJDzs9cpMbH4TFcqBDBmZ8B1i7Q1oKYLum785vGp6SiNEWEZ38RnWsi1rNsHc4VW3Lk6sN8BDwqLHK8BLUq",
  "key14": "35T3MMMxKMLpWtD58nKk3yHmRbi9cGXdwcoLYGo7qqYBBGbavS8iquwrFoRpekuh87hQyubH2gfNQ3nPXr54L6Up",
  "key15": "PFCiAX9RjKfyB7z6fDAK4bExqSnRve1si5RwT5imKCih6BGxfQNKobfDx1GUed2RyHyqAFoMoNVtuz5N3wkEXGC",
  "key16": "2n5WxkXoZ9zudrV8vPfA4pjeaK3Jbf6nQZjwyrmhnH4xDxBjxXPff2z8Ctth5AvwKSyPtRfWfhTCAXpDfGiMSocW",
  "key17": "2vHFodntctZZqvtjpAVYusTt78Hqo53prknPgiR9vY7xerJqXMQXAnT22K47DftP54P6xPvrDZYVNWeGZ7PBX5uQ",
  "key18": "5VG97yFf2nvPmcgaCTL8UB8xLrKpLW9C27j66VbYSNM9G2GSUs4MfRc4qCqbP7VNdAuMxeFRfb4QFKmpfDB7GFKk",
  "key19": "3XwHwqDkrw1xJ8dtKVfeotHktkcQv9aCUtPzfTETt49zNKXos72SnAKHnYjaNssVDx9e8KUAVW8KdV4DsgKTgEvh",
  "key20": "23hnpYsSn8v4i1SbcQksdbmPhnu5Jr53xYhSS7M131n5AKKE6aM5aVU7BgoDd92Zu3gWQSYtXtrSRgWo7Ha1o5yr",
  "key21": "5bwNUuwBiYMNXby2LGgYiW6Vt4QKSxC2WVUwi4ctnSUGoCRVLJ2mhrw9pTggBMLs3hxFxUSu44RutoxnE5ZkvsiS",
  "key22": "5hZ4dGhojDpafGprqBb2nXegD1m8Bsvif4K1pipv8GSb6pWCMtNvmpCpNmLZXnunjDDJLrkUCBe4YrMD7gyh6GEa",
  "key23": "5H8nu4JzDjTzPoo4FvBrfZntWBbFYhWxvquSkghXF3AUMKAptguTnp2uQwxz6Zg8UKziHjPqXemTrk9p7otAWUUK",
  "key24": "a6u1nr3rATjfi7Gn1bfLX1i7dLJXNhm9TEdjtFyLLTRKPoZuSiyTKPyhVZBZuWkNsKCCXYjiVHNo7Pq9cQv6RNM",
  "key25": "5aUxuLiXPJEXxwH9dFdJ3rtmGo1dtKXGjScFTprqUn1naC1LsLKMteCApfh9oSbCaBEtdMv3voe9BVbyoTwjbyqt",
  "key26": "588dXBYHETMdY5gk23xeJrYngnifk8JwqbMyKXea4vTABtxDDzV1HhmwKhRRbgWQQEULNdyaeCTLNEekaqT6N345",
  "key27": "3h37jw9JoRUURsZuoFox5gBXNDCjq8Ve9P6xhrvUxF9stzk6BQkciPzpVvk8FsBA6LeC9LV2izYjKAtWAuTwJE7o",
  "key28": "mRqSbsCMdTUG4uBxSRKT2u8pA2isQi8c84akYj9f63T4PwkH66tXVtfHYgcsucxS7GyVsWKzhaWn9wR5gvrQr3T",
  "key29": "22KXoox5juPo42q25Xec2hfH6YhgznPHSvWArDbBQVzZjy4hjbuiGPAqk5yXBN71zvRqYg7es3DcdsFks8sgNGzv",
  "key30": "2YV5UshwudKsbShUdbKUgYkiXrJqeT2bY9x5UWLpntX2an9QNaxDaH6vR2dS5YzX9h24Ur9uXAYMAABeDATRBJUb",
  "key31": "4ucvywfqKmsqqWaKwhXLmGfoyWQnEAs3DDihMrmHkNpkp3iwopWGtwV1kUSt5EmxhcCNbBoL3QunvrrttBuitQC1",
  "key32": "3Dyu5atSAr4FUJM16jiFHwL6sKWHm3DC5s2q8dEgxXrYt4yNPovqLkZTHkvwvowrc6C2vfLQRnubxYjG2FdNXJtE",
  "key33": "nFxk1jCMZ9VGwxvS99BZmwnyb8brCWkBVV7PDXxgZreU4eEmh9j1v5fcDhbJ2uPvEJm8ww9kTVDhBYgyGcsBEFj",
  "key34": "5PY9ev7kKtKmHGbbP9fwCyZ7cUSxAk1uGUXnLFAcdThVcdRPtQLNv9sdZdCXWY8PRJ8vWF4xcmVcVyTmjRSvE3uC",
  "key35": "Z9Qpfu2FdztFEoVEpXjCvHCtWzr3UDn7FPN1dF9dnbf9Lt9YYXyW3XzV5rFX2eWdZmxByMSshBt1Vgx6GnbBxTv",
  "key36": "Pozvn5mHT6vCsguTCvUTeHARsuCJBvFk62J4MdagxJxNCJunAswrag6ripu4jH7VpUoy2SdqaHY35UM8rxGwadi",
  "key37": "23zuMmDsJjpd2BUtH8x9wtienSbk1akMXsE79owWXCBYwxH7HjMuHxVxST77mgvn77ouHFzZtJtca5DE7Xj3kGC7",
  "key38": "2UhS5RE1L8FLyz3SUpUxkYJzPhqWhHJNybaqHvtgSDQ17bsNjvrajgM5wZKBhMxDFSzHgzaPLYwBtXwrAK5FXwju",
  "key39": "2tUhDSJoEmymexMpamAvHCJxpJf3qEPstVcnRCqnttfssFiQrrrqxN8d6LuxM5ft9bAsn9WGDjtpT6qSAcBtNdrV",
  "key40": "4qsjGLn4uv7BhW5qzwdtcY1ZmfzeM9ns1yCFBs77VvFVM54NVsk4pCQRUp4c7qwg8ptTBWxqqwoH8AgcxFSiPY1k",
  "key41": "3AW4gruQAgcpgTBppJ4sDpQwJ63fJ9KbMUwuJ1EhRkXsFougT2dJ1WcbhutXbmzYqyj4undXEwZYvpy5dpyXeLG",
  "key42": "2Mf1Ehj8Pk7da1ma5qUAp6uagb1GoHJGWWCj2HJXZgT754omryzS6pbiC1AUiJPkrNPJiyPiuLj3a393RL4dmi4S",
  "key43": "3YPABgLJsxyaJHzVBdw8511eFN8sFW5T3g9oqAYxtZ3pSUNgCamLFHmaLyDSb43ZFXDBCbx1t33quRZWK8fyaZNE",
  "key44": "4HAoP81AaWzs73CRZDERJD7wJg34BrjHLxs2A1GZaftjC2BdZ4W8EkuLFWpXueQ8u4HEcjnVYHikWQoNj5KkXAsq",
  "key45": "62cgPeQFL1XaBsheeyr1ZdCjp7LvaEgZEzZRCXNDXM8XMHi1mnixHdJUG1rDCdNPRxiForP5NM7tw5iu9KQFJQgN",
  "key46": "D6Qf9kpJdT5AG6inhbSPxH8rC2jXaQaxYMnEGkNHXvHxKZDqkDcKSqtW61M7ZKtRVYXiMKkbBR94AUouzYWPt1H",
  "key47": "4AjSosvxjiLp5k3ZrzrC4CZDqotSG4h6hLWPhEcvxvN74iHT96RXa5j6NdDKcTnBtLryiifyQPxKzzh8f6SP8Zdg",
  "key48": "3NBiSjiAVTQi7ciXRs9c67TobGF83Hifi9xEfyqET5RzxB1KMe2htyoVmNmejJ6xPLe5tGEYtZNo8mDKsbMHLYrm",
  "key49": "2RLiQ1KN6Duzf99eMaGHAmwvV7TTKazyMBesYTYrWLbG5tia55hwTV6vdmZqWFW9sZyBjUQB3pZ8Pn2GPHoECJHn"
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
