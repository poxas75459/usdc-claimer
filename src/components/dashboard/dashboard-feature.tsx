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
    "DNxpNJQUfnTeqYH7WPdGK5btzhh8oyjYnGdPbvgQqX4SzFLA7mg6KpkKSNXaek9inFLJF1NBX4Wy1HVaHVzP7df"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M6M8jNZz7sohpaQsnvsc9uARZTYzs1ABg27Q9aq6BerMLGM5cJBYhgFJ6oqZWDGpu9Nftfi9Ghuaxb9sK78RpRT",
  "key1": "5z5UxSzvAcxzNsm9qdtHv2c5aN69q6LFaeqXjkMu2Z8qAeXQYLMJnYiTzbjpgTJL89YQTuZKfhp766bMNwKSTSh4",
  "key2": "5fLSiHmjzCGmyAszW2WbqZpjSUEx6oP8Sw1BWRFHEnmWEP36bbuhwTm5fHqUd4nFQrDspAFgfpU56SBtTytkLmvb",
  "key3": "2XrH93w63Z7GB25z8WoDCb3rwVkdK6SPtGyabNHeHohKmUoJdb4ZpUfwPzY2V9dCqwc3xYjwx8itjCitouvvZ4WC",
  "key4": "3bWJxAkTdTVhtbB2cVqRZ3m5QcfQzDdv8M6WJRzsiA9dK69159hox6VkPCK7943qZfKMe38K7cAENr6JzA5Xj2bc",
  "key5": "2Wytrw7Drmb3GCyjNeByExwSrpscBm1s6kWmSKR9XJFnM3ZdXLs8GXXz1vi6fnFAT1k8JQgeBi8zfAznj4tNhi5W",
  "key6": "39iPuAu3GBruzBvmvDKpkeRPHiH42Tnpnbd5PVGx7dVb35zWZXgmwYyYB4ZCbvEoPe89UNrH88zoZM9VXnXMLE3T",
  "key7": "2ymRraffz7w2HXxNZRunhXGLw3nzXwtHyMYoFrmUPLdsKZwFQeUz3JunZ2dRAps8vDSgXBhoS1TWA3mNCQJDnur7",
  "key8": "oGY7SzwetdiQiot2WvTS5dMdhXMZxFv5LeZzcQCKfJ3yamE8T9W2id8CqbanYXg8NS6gWJSGZc5bB4SKQo4fmPz",
  "key9": "2E3NtmTeuDtzt6uRYrQpF1adSM9ntNzW9vBUjKMguuxrgS567a7J5fi3fDhR6hjg744NjocCiH2NyWsmwfx4a9Lh",
  "key10": "yZJw4W8BLJ8CmzBzKK6f8NuMJBEpG54v5pPf5RsYNF4p29zL4ugxFhC7jywxYsecwhSee4bcm52GnSKZSXkA7oN",
  "key11": "3nv9tJxke2Kgvws1yFYCUgAJKMEvPK5LPFAsBSVF99Jczcg4gxbXfeM5WvsnrZrQCw5jZ9mmJwswHALmqzqrh7M4",
  "key12": "2jd5gmsarkT6K2h6mjLvTmq3nqRAdafxi1s7JWJWLQSKABjprktuSsNQen29PGkQiQVNhRWsYTF69xm2AE2vHCwE",
  "key13": "56PR2tAG46NJ22yEj8cMz32fmS6CmfgPPSS8FwXWzL56tfdQywhsjK2X15yxkmFzMhXkEgjAYQR1NhSoyve3LZgY",
  "key14": "4V5fbbgGqvLr43G6PfbPxc43UofzEGNgSyJBUXynmkbmr7pik7A7u9grRnVdaepmP2PizUscJo1dgN1mYhxs54vG",
  "key15": "5b2AdvH2Vx5eegmx2FMJGWUg7qXZUcDPdyxHqfBM1rQWT1dfQWQL8eQMQzbAcQR7bGQe5SeFZCChd3KRdTgeBx9t",
  "key16": "3u8DNStyrEUUVC7y7eYUZKdvWkK4rCCuntBj1WyZKpjMqwgAVEX24gyseMZ9PM4kKYGgSqbDr6MzPcy4nos6KsBn",
  "key17": "5GiHyjvRU3ZksGroNKrYSwmu4TBAQgBK1NaQ3HB1TwDkvWwibwiRJV2ceyCZx9tDaTZ8t2MZR1Vdr3ugNToJoMJr",
  "key18": "gx2u8vr7o7hYm5mEaVWzzeZSELY763Lih2vxpkbG9mTXYToSWBzPpsWpRmNXAD2VtLdkzbzqDwxJKSDjYG5HS7u",
  "key19": "2oE6vGLsPwpKkSxiT6SgjEEDDc9jvT7cwQafgfYE9HX4sgehkrYdUX68kcMYpJzr7BdfKm5z1VFfaBJQu4ZEATfy",
  "key20": "61EX5x1xS99zUNdge8NTLvuEdrttR2f6KBtMLmGsRUzreK2fXLdikp8UwtsprKyQpxQt33VCJ3Thszi6EACcrQJ2",
  "key21": "3PAsA3CT1LxagP84451ob9oovGvnSSipjjDeS9LkSihpQzVk69yxDvwg32fUsMknqV3mBXcq22im294QcJDCccLS",
  "key22": "2fdNdH8tCBJhHeLNyAixJ6f6cyuW3jFMWLg1LURdFwm39CqvBGfFVaCS1MJ4hrtoXYtFjz5tuwKkHpdcb8PsS26",
  "key23": "48ZzxLKuD17DtUwJs3cGoLAgjMrsbvm1aSVXeYoc4o8gZTUBmm7uW8jr36DAUKyDUcoJoXLPmMkimNKv1pEeSxWM",
  "key24": "2R5zEMRSZ3LQLPtbxVB1dX1bSE9ryqyCRgQ9vffPTz8n2VZgN5Gq4n2BGNRZw6J1YgcHGn9StDf5ReovaxYAi5BD",
  "key25": "2pkXumUL4bQbYoM9nd86awJgxTVgSXw2n4ZMGgwxjgCUReXVS1TkVHX9FvQwKwV2PkwJEZyxGYTQt5CDRDcHiATs",
  "key26": "5NTojK3qmMFVZCN7ysqwrxKYQX3eEknJbt3w1n5pCqgdoNkgWNPSeNsc3LDXgseLzHUhMPeBhzdM5mcKS6c4ae9r",
  "key27": "4zi4MhtppHmgYmW4XVCMvZec5Vg4aqh4V9y2cRBv29XHdcZVM4v3njBk6x8gWYLiZUMjreZNqdK69Tn2vG7YVGtL",
  "key28": "m86MuvE4unyq3ymRTjq12yeB15ssCcQsdxMSPbekkccPTwqmC6mH2ZQkqPWCAnadp6Rt6tPwukBtYuPiaHzMNPa",
  "key29": "bJG487684JjLiHkZVT8Rb8UUpQvqMmBht41p8kLs5wJn7Hy4LXGceEKShqEXEdac64QmVaRXfiSKZWGTr7gr7MU",
  "key30": "5yMUrVnsy4GJ9kU9LhsqWq8yJJcCuuoyY3oNRsa6SmsWy5reQGzoRCh5dvQPaKGKqpng7t8JJSZnsdmvhr9iVS4D",
  "key31": "2sL1kodA2ic6oSvaixDXr1X8nNVrCJc5kvdjXH7fjQMK6Hkx4L9D2s1GQZqMGHb8gY9eYQPFtP1N4WUCDi4cLwUy",
  "key32": "3U8ATJDqUvuCWKWjUiusDHAhg28dJMeyDD5i9vgvwA9VicB8yXkhsirt5z8Z9rGvQqY7uLVRyvNQo8eosdTiYgWA",
  "key33": "4GEq2Dkv63g2yQrkPfRXSX9FUMugWLjLsekBRJjpTHQK2orJDkm3tuxpqxeDAceoWxSsbAReUEj3N8kjgrgE8DVu",
  "key34": "rPx1JYiB3iS7mkC62kHuKMSJkZnEVL3GyC7MTVeNW15xE2J6ZB1vr791NMRfnt4bHVfLkds6y8ngZvatMJBHxz7",
  "key35": "E6tJHok1jZJXgXDfj7wa1Ad3NQR5sFE61Sk3k2dQf7gVEyjbGhEbZsK7VSb19rML7vTNshyrW5peSwBWqpE5Qiv",
  "key36": "4psYD8Mj279V61LwAs3C3HoVykHTmN44WUNPDFHUFhwi26exzCjmhLhRsCVr5LFKr5m3FnsJvNy7eXcJ76UD1nDp",
  "key37": "tdmrFLvDAXBh3Y67Seod4DyqbSZY2EDwjarE1hexBAtc2QHyZTFbozDKbJq3eJ6PZprZarmfgJhEJGp4zpQhGPj",
  "key38": "2s5dswbKcu5Z85hoL8fceErjZw4KwPE6esMHS9U81xJ7UCqw6FbSVmwMRb1ossgQ4GQDMs6FVsQCWsV5BNi348G4"
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
