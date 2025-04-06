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
    "2tNvS1j7VN1zMttuzF4ancdcDN2hdFaLPjtnHN1ADvAovpvFU3MdHuraFhHUjhEfuM8bNqNtdt2ddo3JQ8NatAaj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LybkBDLGzUwMctecuLgW5vd7vkgzzGWpERVa2Vzs7LzQkZHC7qf1EPvnuYRaadPKU6h1o8kkH24aYdUo67e3sun",
  "key1": "myWrZuuWfCu8ZkniKDonJM9fAD1fatFQ9SQ88oVsWxUTpuiDe5SJySYPA5e4VC4EeyPMSv3wNERJtbBuKGqxyDx",
  "key2": "5MuVJt8tqnfMYU8U2ejB6WuWEsgitLPHBBAPJuVMaDXw8Qq7s8BBFSRCSmPjpX8aMGHQKsgyx2DDswDmrNhWi73e",
  "key3": "4bfmP6x667FjnHRiDiJRgHKcag8wyMNSYpekLV1dfq8psEdvHyn2pxKNHtUoaXEex8MTNZJc9RNDrJNm5eYiXfKG",
  "key4": "4Ctop6vrFNnc6WarPGVvik42AdrTYKsPZS7DjzN9teUSdyxuUa22rknFoahs5BygJ3yNa49y59ySATpscgJwZJTB",
  "key5": "ABLqeRNkMv2vggL4mAZzxMyqppc7BMDMdCeCZnwKAyjcoVWgtEMpaKsW6cbhYDGBq3sxNW2GVr136pM5ErXYDzV",
  "key6": "3ZC1q49HeHhWBe6vzZmaA5NDX7wZGX5kbqvfhs3hTEYMkWhNtEoJV9YnZu2fWxNA7mCuQV7ZAQNu7tASgaPqahtP",
  "key7": "D1CeXXUrPXn2cX1Xit7Fzk7dUptnD55eBcxRnUq9NRjznhbtBCnUfFAJy8vJiVk3PgJJWNvfyXm9bcSdyWQ7T7T",
  "key8": "4tneJAG1p4sa78ghUmEZ5bDG68urWqMRjKQUZQVw4NmyKbbBeohB474dNh44uLMjkGXuPJrwJd4dEYfy2cQBM8xN",
  "key9": "2Wihs5emQAoudgxxGqTskgQzFvF9edkG8ZDHRk3mMXWyUAsHKQtPcTuvK2FzWxfkKLQTnsKmBob7TSe76iy3L2Ea",
  "key10": "2CdLT5J9Mu4MwBNyiPFRtCwizKxcKRsEs32ChvVDmFiqr2g1uqoReoSZkfYod6UK7SsBJTzH6zqVDThD7twsciQf",
  "key11": "5Bumhn2ZRDvBHz47e6gCHoDXbakpZrbRLzSf8bLr9u2EHfptK4Xs1bmLz3ak2rwZ6gNmehstFUfyj3hpBa3HSGCE",
  "key12": "3CzZ9Rf8z4fYtcP6sXR164SqL4ZR22nTVBemWTGzvbaZn65My4HxiqYKt7zSSLE78LoepkVmu2Q57GbotTV83ckm",
  "key13": "4EgEimtDCF9JiKkY7kexAQa3JCuaNjjpH77tKRdLbPw1EPGjocdVP7P9pV741BuCuBXgYkRUheHmgAUDvuE6geXB",
  "key14": "xeY9pxfvy9GNkYo83Q4DhLimCMQshXngRH2zKmqyw6rVaMQ3ZGATXGuwjA3LViD8FVpjXruN7uvN3ZL9kGM6jSn",
  "key15": "4JDHRw4wWRrBeibbuCUfrkX8HTAoZk6dUknnc4zfPHJFc2EECbFfmpVHUbuJFum3bRbBDdQvNkhiXcksPxqA9Gdf",
  "key16": "466ojfrnnR6ChpmgBMK7xzWmCJRwoeUzk4yPZxGPB5CGaeHJeN61gmrHAtspiVtqEYijTet1ffo29CJWvpBpngu4",
  "key17": "GZR1rLv99iFShP6wokzp2ieLwgFFKCZPyDSEEp7oYxMz3YYGAHgSBddsFonuSVDFFfUfktcU9igkFxQp6YNCuGu",
  "key18": "2qN6edL68oy5g5f9dEJ5fGiyQ6bjCrPMh2t4fQFBGYMRUcQFk3wZX6N99XHTELs3U1Q7fjSbFmqbcaz3vT41sj23",
  "key19": "mVWoNq4mKUdexRpFnDiVptR1gjtWGdmfMyPe829fpMrtbA1zeUprtPt8hHP27SbKnhDzpWzzZPyYtmhGuXBsiwF",
  "key20": "2jfHdSgwqsb17XnGVvbnbcydnNpMNGAisxb1E1pzG36nQzQPqDEn5Bv94xr2VtRZUgdXRqEXZ4sJE2zUCUVUGexS",
  "key21": "46RMnmqEdk3vfzLWGZLmaj1mC7jVaLhdWP9JJNYGL8pZozHfHFnQC2PtWL34D5j6v4QUK5sVtp8w9mdveyCLKwRh",
  "key22": "4gGmxJXDu6zoAxfECHgdHv12md2bBjEUyAPirK3gcAtHsk4yobQ73KXHLZmP1t191xfKNuDEKvnEo8PaUHYu729P",
  "key23": "4h24SQ9MGRHF1U1XMw92S37G716ZrPLPr7fdbHw8HrezMe5H4bCUNjhB6BrWYP7VJGhkGTFbp5voYbXSWCh3V1BA",
  "key24": "53Ncqhy5J97BD848PAH13yPKRKMSdMDtQEJRUHckKRkKEjWFSeFreBqpveBTM7LmLRNLkPTp78ZYEJ8irTjhGMTK",
  "key25": "FqK3b3WLkR9jihdfwWvVW2TbAg8sUxc4p1cSGdo2yMgwXRZN3xrKVrmRJ4QW1s9gE71aY4Tqw4Qj6pgtstAFUvr",
  "key26": "392iUqPkWTTu2ig9QW1FX5jgbHaBR1WL9m5D6BqrpXHfgppXw4T62LLRxC2Pivyu1xbuzbGKbt63F2CmZpzTGJ3i",
  "key27": "5zrXg8YUt53FE5mWsZ96W94mtkQPEpVPVvQGCiGpbFfCTzLwAUfoehu3gUnx6XPyZn6DcMwQBxBjkKnoKgK6ojH7",
  "key28": "4fmafGjMQowR5Gc82JcsqSyFUk569v3MBkdBBA3it2WJ1Jq8EXkq9EqFCgE53BbEJLuoTuQbNzvALEdkRkvtzSzC",
  "key29": "31bcJfDPnm8BNWPW6NiJCETmj3pUZpry3nSjPQF7Rg2xcCE59trzeW8moAVZFg17PxXNsv3v6mbqKC9dazF2apX2"
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
