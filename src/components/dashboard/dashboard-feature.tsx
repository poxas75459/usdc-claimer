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
    "45hBiZgk8wFvZtCK7jYdYPoMAM1GesY4fQrWLU5jqR39vqA2HFc9VbtwjS22Q48C84Vz4pX9ktjqVq5ZWEmove8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qxvfYfS1tCrorrizePVCHmsN33MNFUfiRWg27sQR6sN6ceVcnsgCErqpUEmD3YQNw1arSSLM8KCGhyjzu6Fb2da",
  "key1": "4zNCbj4n1GsNoG3urbJApEmFpUGygfzUSxmp4vFgw4any4S69KULuCuCYAKbavac49yTCQ88s6afQyA8uk1xR11Z",
  "key2": "5X3qyTzV9A2iFoizXyX6j9QjKyfqYpHu1jweNAtfYz2MVjTmA29rdbiegn1LPb1E93UGJf2ShShHMhuceGdTwg5S",
  "key3": "4PJsaKEmCMMoZzgzbm4ibJLeFyjAxPsyweNJkzYAK7NFy28BgvUpkgqfX7cbgET6Nse39Ki13yG9gCxdf12dphV4",
  "key4": "2Zr8PJkQVh6tDNbirqrTAGiVBe2J6SEJWisPATW91ULMCVoukCSAd8CyLSJQLxG5ZRYSC8FCerwScgfYKBqTggDu",
  "key5": "4pgzNFStdJRFZ8xFxrK6WRTgdkUKs6ms9P15LoUNaZShnetDpY9KmuRnutAML8nymQaB3emQ6XW7v6W3woQjbnT6",
  "key6": "4ryw2oWgc8gV8u1ehZXp6W4iNFtzi48A82ydTtd8dmG3N6A3uEU5uPnmvm73Hb2rh9UQ3Dr7HZ9gw5DYDvzsBpd1",
  "key7": "5Kw6VjXsfEqabLd6otgneNCiDPY3ifFXSdg5zJRjTCZVuy7sMANwd5b4pXqdR7PekPDUNK9oUHFdJvPm6oBc9VQU",
  "key8": "S7aQn4kCB7tjpX99Mrr6R3oAvpzZ4vnjiDwazrmLPG7K9rC6vSctbwvCFL6jxJtNmAQfAxpXWwV5GDDTSG1YntH",
  "key9": "4aYQtEMk72mjRZTXgTMxgZMuwvyVdbvP7AKjcVids94HrcFSFuNa8E9BXWySqsQXAG1HZ58L7KuHnPKMGgAJ9Qj2",
  "key10": "QpdzUGbz3x267GpxhAvhhpBz9PN6AhPMunA9VPTjcewChBHYjH35e9WiKFYS4a83aofra3JciQZpuoBictXm3y9",
  "key11": "DjLg9cCZzVkE7UZmkP45hZRjQqQ7kuYNSQ7PQC1JKB6xYfRmDmYCX42uVJTgskedYoGD3edXyJw3jiNbfFWABX4",
  "key12": "2vgHM8Ue9in5vGMzZ3deJXsa7ha6vgnZL6SBGcbEVkiW9fx539DkB9RbFfnhS1T5HD6TrPTdnyEnAH9eZy875WfC",
  "key13": "3gCHPr55byS7jme9n5Ax2sDFEozJUgNE4zGsGeYNsaDhpkxdv9uQnwfnuJMhTWvKUUfhdW9beDdBSU7t73DkGkan",
  "key14": "h5zMvzi6nym4UqNwbqv6wVLuv3L12GrQDADQdocNKumWyMztRidogPQkdWAHf4j6ocAjXVTqGAGiqpGsW8zNKUU",
  "key15": "32ZpFC4cqrm8AGr4iYkTUhyjfvexUKgxvPizyh2CQvosobkczVUtyMeroS2AFdLnDuXfy2GRAzenu3aeaUJ9td1u",
  "key16": "AYdDU3QpoWGYt8hA84CqvjyH8zYFucqrX9wFbhHdHPELTeLPNwBKQuj4ZPrRYBu764oNg219V8VAcrNxW2jG6tq",
  "key17": "2KJngqjEnce4YcwMFYh5jzfxwKFpCVwzPTkYt2wc2V9qhw3UYPbwJ6eQzx3JJ4LziGJbckkzgrpVdqGfjZYYfeMg",
  "key18": "2qE7gHCrjcr3EXujDKFRricUVEcQfKwUUv55SQPxr4x24m54dWscUY1PJPFQTWXC2QwRB8HkStJMb8KJmqXKfcFr",
  "key19": "2VN8Aq7BU22xf3VhV3ThLizciMp2tHWLhLUgQhBtwwau4ZCb96DNyPSNz7H53hUbSXpJbyUdMFFJqNatgLEBEUKf",
  "key20": "23w69K4mcERggMG621xdDac3oGRFWR7GqWe7q88FavAmcvhExb8ViwRVEEp9csDz8JTThZvtin6PPYhRa6A9qY6J",
  "key21": "5yse17zqtfxxL2C4XxT7WWJNFNfmyidUveFSPkyBtgkyi99cR1zyaqvnKhfSj9wBcx3p2iSS3QwmSyNDYXTap1Vr",
  "key22": "3teUyEbT5y6KBJmNLjUSHBUDdoV33HvRd4uiUbPgUp5CjpREWkzux9XA5LxHnQCoBNR5TzEJeWbiSxb7yHx8BAjs",
  "key23": "QtcKRWE9ptv2cYqRkqN63KTtriLgvLvGQxKR4N1hFS5YdYdwgpCWqEaLgnUZJhtAnybRruB9r9UDNKo3UoheJAV",
  "key24": "dAPdrecHtE1P8VxdTBhWPUoff4EaMj8vzXcRhTqeQCKTAGKnwweJs7Skyn5B1Y3WefGwHPZ58w8BgbDu5CGzokS",
  "key25": "XLkTNTwiPvELpDK76FrtVptU1oKrCYAzmh5Lyu2718i6EtngnS5c8rj6ZWNU9mUsaqzq8g1h4DRVAYeMHEhafpe",
  "key26": "5HyXY3v23iqmdne5FBYss6RnEmvMq6VuSCdxzemDkLz9RJLHL9p2L2iDtXpHykZpk68Dvvv4X94EhHYG99cbHA9w",
  "key27": "2S3dEAbhwcfcz4z4hY9wX6H6Ms2X87WJD6WYQVhetKjK2QZh5BLhRKDUbh6otL3wQD4M7AYJP1in3zhUqnxoXLSW",
  "key28": "PT5T57C6zh9cNeo1RQFXuHnyGt3Bf4ZYtEJKGVED3thnYSKEq5Ud6PeAxpHiqytBs3UaxVUCnb22MSgcgasxzFA",
  "key29": "2SGZwbofbpcwoWatzUak4SMeEWQ7d9oBRZiz95AVu8MpfWTV3V7cqhsKmsQRTTXuAvswUUugBhwbCyGzg3yrR1rX",
  "key30": "4SsdVUL1AugFQLZHCX4ctgrcwMVjXh1PuY2tWahwqGG2aM4S97DERRwvJecYCfPn3YKuFz76s4Ca8wujBKTnfkTd",
  "key31": "1e34NqaxVQxhkhAQJSAdtQ7rZ5toT9Nx4kjCQceqSGBwbN8iPGPd9mTrmZE5rvY8jP9rhYXg5za5k5AAuPa1t9y",
  "key32": "2oRYzrJfgPxEHmCrqbMFA236P4KfJEPPa2eqpYeeYfWB37C6GbLpNdYmRpp3yNfQjU3t8XGxHnWQ4B3YKzvNejRR",
  "key33": "4ymELnES7f9P6Bj9jVg38aGbQyYTmH89YUAZQ2WCgDoLSFuLTdTpGTePdhMwUG45EEKYD3LQJWa5t7MBu73gGVhw",
  "key34": "3ESptnFKnjrZ3y4toSxfF7UbSNoJWvMuY3VVuBrQpyy5U8QPa1qdcqJMfzcRzpg9GUhAVJtQ723AtBB4uvfBTuep",
  "key35": "onYjb3c6U15T8hMgviwMLJ7GssSu7WHNy4iScqcc9hTxTagu733VfTSXYR4w6RBNhH5JV6GGo52SR7tohB7BUHa",
  "key36": "5sLyub15YW1Xuz51ay7qbrK2E9VDGYBASAjVn5EPWCbMf8b7THuDKzFSMQtxRS3PuqfMouQEhJMFefcoWcNKxQAy",
  "key37": "2xkfzpxcCpnxGdgfowmwUbvZnixUydL4uQdVU98A8fm1eQ6KfeaM482onjiW5NY13QxFwVTPQJ5jYjVw8dagQBfw",
  "key38": "rrDfQaSXTV1NMHDibpKuPr4xv5nxTAdZVqdB6j27LdFXJwKB9teDKNkahYV1jzdHgViSMnbB96yg9xWH186NdSY",
  "key39": "3Q6wKZFUdNQnUyL97ubJQQuQVXtNd26kf1YKToJLwMaU5ENn6gRdcGm5DmW2bMBmWmrRcVNcnQYP3G18K8Jqqani",
  "key40": "5296ngXKkHDDLpPcPdCVMMP6eJvZJWKZaVkviqvQKVRVGZVH5eXFy4DrLNSHWm8B7mYjrptSYB1MHJW9yScTazUn",
  "key41": "4CkszvRuYVKG5U9LSZ6W2xHutgbyuoesff4ZoT7UxKYHtXGieDt9wZv6DTLwceBU3HctDXEZi5wSDcry4havFbS9",
  "key42": "3Cz78uSUoWgcvqWvdRDjmVo381U8YzpjPRAN66G4rKjnZwm4Aub7KM7UmzfPYSuv4S6DddeJ8tfe723YB25XZHAz",
  "key43": "3715CAgmbPE8hygrohT2MLHHaMMHqE72cECaShpEdtU3QezTQ45JRyLWYscFUQ7NoTX16zkTKZ8SthQUgZNcze3r",
  "key44": "3Qgw9MKLh7GFi2VBZYB1TBBntP7oLjmypTcBuNksHyotzxbQULupQaWzhi3tyduffK69pMfaWL1hrLQ68sopP5iy",
  "key45": "47cX3fSYpDVALV8wx2B7NSr1YAunmCkNtZuY1PXY8DYsB4auLEqUbbG9VCc4qz3puY2djaNUjPKyJtUk4f4nCM6i",
  "key46": "2zb8UvQWLPb22bjMrYnc62HsAwmL4BbMM9NrbsupvbETncxRViL7ZusZmbyLAZy6MKh2aY8xWhFHkP1RUp13iDCJ",
  "key47": "2uhoTKWgpQZerUSRbk528b1BqjRWKciTWMzezrhRG4mCqZ4jCZFXrCy7U4UrRY1Ca2My6s8v8NN3dCPpxHVu6uwi"
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
