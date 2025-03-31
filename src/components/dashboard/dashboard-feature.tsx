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
    "5WEudwM8ntPzH96i2K8wNjetWZ3R7BXVrVcBopdw32mH2NiCAAP7qSFyt6n5KMUSpkvynASQfBqmoH5FgZ6HKa5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jsUhMmRwDmiXYxq3hiLvtzwo3UcPinLsoknNs7ugXXLZTPYM1RoUbqz7zfGUpJC5Fc7ZApqZTivkdtQUsWcanJ9",
  "key1": "HnUo2VUf3knb4ChRhEZMZyBnuVuj1TcoY6Wv5WaJspBHUusCz5pKDWPkZiKWJovioxTo1SvQq3b4FxGviKpRZCc",
  "key2": "4sHmN7qAXhoMY3u8UXnr8aGvCBAt9bU77a1binA1Y9GoKy4HgpA3ozcueNBAiJT3Uxcxf8FVeQXBkc7ZEh3Hyyeg",
  "key3": "orrpybFkx4DgS3PfV93CSAavbrBHQoo9sbfxavz1TbQyuHGERBZs7zJpqPUeQVaUmeiACk7fM3BitcwGiytxNAB",
  "key4": "DXRnP2FAXTm3jMA5JaK5jcbwqmGYsRGqeWPeURGQykMxs5oWqSZY9Eze18gqsPBqme49L9zPr1BQWw9DYAnApEe",
  "key5": "knoTsNToA6cEib15PzmoHQGZD2hSRo5xTkkNJgJ3M4iUeafbRD7tZ1s5FHdaTvpcztLPQ6Gyq2rZoyBPtiSJTL3",
  "key6": "2zRuaaEzZBnjZqK6xrKHwzYoxH3w5L9jE2P2H14ovt1WLW2XjFdpJxHZTmzkTGzfRVFeFunpM84zwzfhMUbd1yeT",
  "key7": "Z67gESVLnXTHSVDW4MGRQLJvjdaAWVt7kERsDYRQ46shHDe4AgFUSQccxyS8hhDiNM3Ke8LEhZ6U2wzZLyTzQgL",
  "key8": "2iYmG5uJX4CbFbPfrKVCo6Nkm1Qq2FgTrfkk4jYjcuBrEBmG7SN79Kk5N93MCB1GGWmJoRWUh8Bp7aVhitXyfuia",
  "key9": "twHKMvBoY8Sz4BwGgqUCAPwCVqJYNWGQZQbKkahjJktj85r6CkssGL5DFWLdkZSppj69qKKX1ugdDm4DLgmpcxY",
  "key10": "2xQMkza8mCJpXTofgcTuwEqosspaZ11Fzh46wk1qD3GH9fyrVNdvtHnvLzXpK1A4YmayDXrvdzr8kmB4TD62WUFU",
  "key11": "JMp2Hdvch9rQWmBLHxs4PP7HoYqVhfuGuFFAK28QfvP5eHtuVfrDYpYhE8mKrMZ4oaYrDyJQf6RNiE49W1tfWte",
  "key12": "31zWXE3ZNmzzpHgX3Y1SzweLQyDYQVSf2zbrGaz8EaKgDJ1Upm9mRRtwJX71JaPBatASXp1rsj8VURSqTkft6DGC",
  "key13": "3WvYKTSmZn4yb9D65tP9f5kY4Gxn86kdhdF4gfTfVSMxxEkNCcVkAZuv1yxjVRUoZc3MZYP74G2bMwcKP1NV9jvz",
  "key14": "4HLCxYPnJJNsFm425e7jPL7v6ceGp9VTDDQGe2VdkfpNiQ5yoy8m7pXN8Yjh49ycwcvXLoRYAvHbqYRfiuFnkDCk",
  "key15": "4vty5FTAR4eFiK3wSH125jJgBxPpaXhpw7B6BEZ2Q3V74Ks32aqqai6BRNwvvgp3vnxzcmukVnsYxMt2r8FZ1Qz5",
  "key16": "3yFxcebCxLJBmsCMn6YGMerhyDT4qfg973Lo7USAbR4dvirQei7to16Pe6SESfoSu5rmFLHgn848otzv3mgb9cpM",
  "key17": "kYRbGDbBnHWXzUKGPCM8UfLsCncyLQ7GWM4MrPpC1FccJJYgAGMtMVnnHPjeHs3sydt5aG2iKBRxZeQJsnBfh3U",
  "key18": "3jRiBHxFawDDEM15kX2CDeD8gpM4B6mXFudZfK48436umXEQUSU2DVHnNot6VNDeQZGw23Q5Q8eErcUehLy1t1b9",
  "key19": "4BibsHcV1zGEam4FXBUjNowf59WVEEYYCRj5k38faDY1cdE6D7ndGkC6XwzaGWB6rJ5J3fxbxW3g6mVLUfLgzxFm",
  "key20": "3JNuYMu7nMdQ1kNKNavvKH7bVbiYUHW1q1gDKDYHYjhcWEu4t2hDqgdyFxtSemDLzJni37aogTN1zCmDu4TFg5pZ",
  "key21": "2MWtGcg4AGhAHzNVVbZvgW6bC18RBvtLPxiZHEQZyyqAajiaj6ADWQcL1EKxdv9iyW5AejNgPTXZszHkQnbWvEHB",
  "key22": "3cy1FcztTauaQ2hxVS2ZvEz3WhuuNULtbgryWsC7sxYcyxG7Gwg4jUtDdxx4uL4zGYfE8FyqYjGcgWLahc1WmSTt",
  "key23": "MCJcgLGACe2JV8DBt6YF6T5yUWbFd99Th1hyVQBdzTkucTF9TiXz5F3ySJqWXVpFyZEZkvg1gnuh9VBerTCcn24",
  "key24": "3whPT78vAVK3PXGXwnADwNdP9JqNCkH6WgWu5Aa3XQigAN7FV1bnfgnrTont42aqTDxdxiZe7NosET8YLQTgr4xg",
  "key25": "55TfVF9xCeEJ5DuMxb5jrBRyAM4S2NoCMWLqarrGAzkdBW6UnCcWAMQNkDLaXyN1iSDpaF5YAsXE7Zf8rHjwU25m",
  "key26": "2sN23DP9BRQh8rGJ98ELEUScMRTPHKHeNc2cnUwRPogcje5uHqqQXvhhahdHYBRNjWvWjk9FmBA6R3w7oJDLofPB",
  "key27": "2ADrCss8dqeTh7XKQa75NwatRRqf5aGV5vLi5fPYzz1EfL7n5jomq8cp6RNipR5JTMjvZ2m49sXevbF4eSAHu5no",
  "key28": "5HdYqdSkcosRawRhfBE8f6bxtyjaWaHfaeEikFoERRZyJFUMbCMciSSBDYhyZP8L51CZonc3m4pADAAFksrrjrmf",
  "key29": "3ts3YtBpBftqtzx8gt6RHJyoGxpUV3SWfThrdCvZTwZEtFgUR8q46LbSTjpsPWCe1eVrL8pzHk17UpmwgC7KoTFY",
  "key30": "i6VGMTv27baZiDvQbyRWGUnFeEF3v6LSfUSdMaYLyxuTJH8xL9MoCaPwfCKbVcoTDnv5oSdaqq89Z6QjpwbqWXe",
  "key31": "4d7g6rLDThtGMnyFbzp45KVirpQYrJKkUy2Fg5niVp24YuR3tA1ZUGC2nZCxfiH74PuTK8WfGQ4JSQD9GzfbwNXy",
  "key32": "3KzKQqwFEYqGoWmhbmYpPopeZVCBqKxBgyTB2GxDAU1VvY7TpMzfyTpTX5wTZSgf3LbPRgBYHB38p3NMZ887zqSN",
  "key33": "ynpU9DpmjY2EAmMsExf1JJDtRBQo5g72AWHmpvvYXnnSJAinyFbv779WCXWGj1YvT9Z1usqNEYw1oHWtBHgjXjc"
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
