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
    "2HPFyzzKatS3vF6sB5kegt6f5jftKh7bPvoMzHTXVYDmBvAhtQs2eUzxKJahDqWzXaD4uAoHGk2itruaMjRYjMwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XZvhJRarAvARmr5qLyNifvwp6QrJ7HmynKhoKcdkrFfsaca5omvvY6QLjuJG9JYWWeVwBcbR3moSMeNTLngNeUn",
  "key1": "3A12SavMYuFEYpFH7TCvMDCPP6kBo1H172La87RQjQT5FN7Qy1jShCFgqBYAFygMhQnZLZQJpHPTwabGVywP2itr",
  "key2": "zHpjFW3ZWp8TTUdyd4hx3hrBnLg7sto8pLqWsMyHvUjQKhgieVNK4P7VdUmf6ryn7LtMTnPfPQrMwXFwswfjCyF",
  "key3": "5fWCAdhiQMBbwUKbPrvJ7BMkypkDgoB47ck1HFWwRUQwtZF2ExAjXQgZkP6NVQb3kXsZ8quvr2c4Yxha1PubX91M",
  "key4": "3RF2Kt9sMojQYqHi8VCEzq6CXze7DrxqvBfgtCbf9izmL5YEBCv2wXaUCFewAbve5bAHdEbB1nFparRPZDw8Jjx5",
  "key5": "2vEZ7KqQqX8C9kePcV8zhucovQEVMB9rkRcSGj4jr1dGcCUDmiApwh5MQn8fR8stDBXoo6vdJiUWTFNYsNiChpRB",
  "key6": "4RrdEoxdUxLxuvx4suNiT1NvaW3cjSNx3qKZ2c61eai5BXZ7G9TA26zzbGcT8Lo9g1UfmRU6UpQre13Q57KiE999",
  "key7": "2NkfTo1s77oDuGsA1oDXJ8LGATCby8CsXUZ4bBVaU8njEaY7vrVA3eBAR1A3GJWE4f6m6aPrABSsc8gyB6qGcFDt",
  "key8": "2BVqo1DTWRN8YDbsLB86Pxqc3odqFi7AQaeuxRTCVug2UxwW2ZpxV9LjCuvE9rcZV1ccrX8PRAL1Eo7nXsY4Ncic",
  "key9": "3xxAwjST8V3eUE9YKWCYDhufZHr14s8vHKrs6goQKpvJ92oZGieh76QqJEvQB1gn5Lo8g1ggqRcEoruMmanj3NfS",
  "key10": "5qrZQ5hBemMLh2Yu1w56RUi31VA57LarFL2DfZfcCACrvJYRQzXZuvbQ5KfQLSxpYVVJths7W6eziCoPr8TAfpeC",
  "key11": "DNWL4jCrgXvSdn9UgQ95NMvmXzbDw51Ci4vXZChvry7eN5pSQ44qHhKqur2rQe4b2BE8pejaEsGTLfuppDT3N2S",
  "key12": "5hjz3z1avvc5PzR3u1ZaLRpawr2vgq93KmmicpxjYaqoLPZXPhi61GhkCUiCr5iCcTxsmkfQNgtRT2fwoJFxdnpG",
  "key13": "62mXRq1Vi5tQeduRwTfoawWEa3CtAd5bfcrqp6ziWQwDqLyBa5FcobJMqEBBxdUkbS3RWkbYadLxQsMSJihPXthu",
  "key14": "2y1xnQDbUQui9Yu8gQVmGHNLJJCN1V6RA4q5P7xPdsgXGEgwF5Q1UPY5vNkgFBcbd45vgz98YTp1E3vvHYE7mkdU",
  "key15": "FwRg1yDdqnQTaLmcpTY61f3jxVyC6EkGzRjYLVGgEjmVaGhXty4GmHWgaKyHEyTVkd6xf4eKFKctGQQdD3dmxzd",
  "key16": "94cWY94dnE5GTxSN5Lm9bRtGEbfRrzoG1pJaML5ueTJPsLi2MN3i46ZL532ZkvEp5tvfJv75D2syCgJnA3gTLMH",
  "key17": "tG3K8kZxcJPV25hohftSAoCDEgXzhpxvKBV47SUzqfz9Xd4jG2mszuEPAX7gAJV3uUdLes8MDA7Ejib2dDuxwKA",
  "key18": "61EXFSEQDJdi8yxHzePDva1itZnnPxPRN5Yq45ERYS3Uvu6aLhjcZNdBwXnbjQAimHGBjQyKP8KW4sTGtUWPGC5F",
  "key19": "zZLBi6A1Saq49aDtfmJP3FLBWsjJCXUUtf8sqb5ru4Gp1xvmwgq5rMnywM8sKQnbhmrbdPJgc1ce5uJConRN2QW",
  "key20": "3Er5Usr2WUUDiuaET9zrqrcAHL5WdDJ1GMp8hhzjkDRRp8mfskKCKJHR22T729LSktDx1FCpeKtXjNwNZdF9fh2H",
  "key21": "5GV3HH5tZpAs2PdwdEiSqU49CuHGkgQRwqmSErwVfeGLuXSvojcm5tTwevtYV8xwTBhdDjAunr7qLoDAzVqwfnyn",
  "key22": "29SLDqVRuppv4LjUyx2g6zzfsNoSj2cohJ97XrNsKyHgvGdAe62JVvKNTdDMvYrH9vob3pmqE4e2m96QJ8AHCKiK",
  "key23": "2CuZg7oqPd4Q6aPkFcD6wLsgQQoXJ7giiZ2UvUAywnM6bb2pPZkbw6SfWhbk4QBCcgsMm7dVLRwTcdoeXANsTy6o",
  "key24": "5RSNKYKiGccNMohcZrg2RK1XE2Z7Vy8ojpRQKniyCGZCo64BkdsDuqQiHBZoS3XdqKYzX6vYEmsDcG3xFxoqqJaD",
  "key25": "53yfVJHQBsVyp7TXmhAXwyvue77136gdLPPTPh5PikfLv2eysNDgpsBUvsEHRqfbfJEKbb8AfPcP6YiqwvyWtLug",
  "key26": "2bFtQ9HBmkrpb1UsqE53QNkBqW6mKR8PWeQ13cP93Z3ucQkKvu3fdWNGDgQBSKc2rgVexjT2mjwTwesbWRzQHXGJ",
  "key27": "4dZDAokcjmQqN23eFsQggW9bGczRAJk1vpW9UtCFRhQoPdjF7XDTLXujcfZh4marGDHuUU16dCurd7fMtyLwwQEu",
  "key28": "56gh84WdD7xDtL6mhAiyhHFBYDn6mPnRpNtPQi1tgYPbStwjRwbWarGWdT94NGp4sCC51CudhAdsMV2erPt4gj9s",
  "key29": "4XPqfPD1kJtXFE3z4w5mjwu8x9Lt3csc98EuQ2uGQuy6Av5GjCsbrFBaL8Q3R2w2GxtdxoHhdN6K7viAnBTLQYL6",
  "key30": "4x778VdfkcCe8zETyZBJowqM9k4mrCWnerooBgfwMxnv7SZQjbksyiQDAdhaBpbhdQ7Gpnx42QG2sGsHVrzCXnfv",
  "key31": "4zeuqZ1sSN6GkpWFP3Rh2h4ft42meAGpRU6Pj7VaJD4X2ynJLYMT67fxFnHD1KoC3gBY8ZY9frDsu6djR4nwVG9T",
  "key32": "bjAimQGtuCapytzD4bJmMjFgUMvnL8CJ8r4tuaHvH16evRpX9KixfXpnRAk3EaJdQyiGuK8LvUDunuLhDj4Ngtw",
  "key33": "zBX25MVDtKpWULw4oFDrjV1ddXyAB8oGi1qFwmUWELchC2vQBMVaczrh8Y2xBB6c3vNeL3znnBuBW1JmSsb2Vyc",
  "key34": "2PZuAQkDopMLJ4A28ttQ7x9UyApiiFBRA9DggAp7SSBXoKKq5qSLz8f3AfPV1nPYcPgEdKkHJNmZWGRYqvZDA75u",
  "key35": "386zwEDPkyzUXHkrrfXmKX5qZRF6QD9BenwtCCt74pAwuLnvXJ36pPS911MQ256ysGh46fvdhSHk7saPM2L2QvdM",
  "key36": "5wqJbDNM4RDiq2qFXgPQXSZrbkHBAYQ3rG4x84YrKsyn7HogNDB4Zz155XaT4wgEJ7h1fRtUFhtNSpZjhocFNL5Q",
  "key37": "mFpY1G7ryYVt1JBnDsxFxjmrD42dUgDjwGEBWsg3xtFoqCv3fZik2BCq9QYy9vqhGFbdqSDkAQzL7o3Yq2T55oo",
  "key38": "4t9wv82R7QyQWovPG46NgZaMzQVhSQvNgGCLF97aLi1dHbQ4KdSMv7yx3ipP4jeUWrkERHe5u67eWwjqTdL8Sdx2",
  "key39": "56rP2E46ULutT6mnT8WmSQzo3SxSUUFHPctVt2refmg6ioWBjHiJYW5AFuC66nJk4z6kNAd1p87m7MNHshQVYWaD",
  "key40": "2X8cbHFUoJm3FBj8mHnV2WZ1118uJDPbrB8cfK7kJVt8T335KfFHEEtFjZB9ZKqYD3UQaAJAnHkw4F1Bgapxm7if",
  "key41": "5o6Q2WgRdidDkUsVysPih5g9gkW8k24pXjaCFs2BWjR2hqBRGr2uK3c2VgTDvRb7NnLeZ8ZDDicRnoGQwDqk7Fgo"
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
