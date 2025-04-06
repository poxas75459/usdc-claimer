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
    "2qXG4aWMc58Bqmyo9tx99aQ2xE2wq7RiuawcxiG2HY5x51DFK2RpqsqmL6jHBUCRnNhNgoZX33QXMTjwdqHiNh99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WBUH8NmWnZ6AFzq66WL87E1GkZHt9RZ5bdmRFxtePxr3Y2wbihCHCi4kL9VS7x4Wm6dzQT5fRY2dozgRN7pmZr1",
  "key1": "QvEcYjkSmVnB1RgNDyXu3B6A7ugJ8SpThoRnsoreNWPe5W4j5puWL1FyQ2rpcMgaEyj9HnCQmq9qexn7L1UyKAn",
  "key2": "5Pq1pADzQqUpTWkhqt3YfU4jJvHPo1fC2p22LEdHw8YKMY64KT9cWkfX5oNTYmsEzeKCMyEHa7z1E1r5ru2Vi6nB",
  "key3": "eG2TPZsDGe8NSxbNWN4gM4YfKPLZZQ2Kws1yXbM8XNjgeH2CCXqXhWGJm6YD6e98GhQcLcJspHjRH62rwMGwtue",
  "key4": "5QZDCz4KDbTfH98NBwzVi1uagaWqmTMF1EXDfJohQjruy5fnQAePj2YVp3U3c3vVmfScW8NyNHhezsvWvVejKSV3",
  "key5": "81g1VVAYhUrVfFGzPQNjQqU8iWr2839mgC1Lh2joxCzbXXFdkMuy2dsq8QGjZKKao2bm9AGMA319p3gWLRn7X31",
  "key6": "5WuxKVqY4fDhXEBy6xdrbk4yx1WpmwsCwttRqqdqHZXn2ggJV5JGJ6Rz3Q9YvmafQzkLwsoHJ6M9pB8HvH1wj7He",
  "key7": "4TRmdQv5phdYzrvUxmskvL5q2TBGqFKDgSmu3418a7GXH7jd5rQyr5gbN5GFEWzuiQNNfAncn6muKR4NjWPn8dm5",
  "key8": "3yzg7WxfxaiWHTED7K9yaTBaQjtmdwaKZZ8NFdgwfq3VnU33bQ3cXNDvixZXQxj7oNfRjGQUYRULYoQNshJGWc36",
  "key9": "4fRRh5QBrkTFNVtPrq8bboYFSczvPci8bgDFKiETKRFwdG6tzNQ7nFQY6zs33Gq2TYJoDJDxjCcLjqGzutTwQi6m",
  "key10": "2Xic2LjeDnTcwZCnkNgt1irF8SwQaNCMZ24tqjrnX9G7gbFh8aSTWkWLumkxuS2GMhYcZNWneeDXnpLCWvCxLb4k",
  "key11": "2ZyFin3qLEzZe2upr88e2qKQ4rAERrY975Ct8A4pisr5JHhzp4ANsp2eYDMDu5gbSNybeqQbeZyAfy4QkJSX12JC",
  "key12": "3J9A3QfmGgCJbAJpZ6y9zUgMUN5CoG8q23ba4k3GA45oAcKXqkqqtGjfdGHx4XKLtoJh8XG6CJzWVCoVoPkcFd8d",
  "key13": "55RKvQqgwVGDPeKtX89BCV8WHkPo1u3Lc21bomC5SZvJiWFjT2iUxbSjyMPYDNFcVYkRFXGSB4pvWDFyjPQ4BEXg",
  "key14": "5Vs9pkxSMaPRtgQoDBy2t3rPdbPckPt8P5gwCzTgGQEcykhcRkkJDMoNDBFyUuQ62rgXQFAa4SEoNopoVRDoGNU6",
  "key15": "3yvzos9t8L16DvxzZmAMDdJUZA6VkzC9dFs7MVb27AEWMWSNaBg41e9Zj23cqPjQmERBgMHtqxykTWUqgNpxL938",
  "key16": "4HcEM4RgQKDEmDqcHDsbANQEo3JyCq64DeB8krKm7tFUpWuDVqj65S9sNsLkwMqY2CWxack41ZQkeWQ3jHWrmKJe",
  "key17": "1j3eXDTqPGW7djvqxmhjHwdAUKMVsuDB6FRhEmzP9qiojGrPK4KTCD2fRfutKu5R2nt9YjfTr2Pv6wsUxpwdeW3",
  "key18": "3ByxVWfHWyhyCk1svxvQSUcyKhg1jcYSUfvXLAd2tEj8zMfYrieuXMRKSV7gzjfZ2XqKi9S7njK8zTL546sARaAn",
  "key19": "3twbZaABXy9WG71LoB5PHbFmqX1WeNr8s49sJdbE3DrwNd7CMq9eKupEcFSUb2pp9QuopNdrcvgApnoKYbRjnRRT",
  "key20": "5ZGamfmEyFbgapsV3NqnYoxZRizm6Yu9qRrnkg1j6nt7GE4kMTZZtuEnfRCdMxbdED1K6yzZ6LhNtVMRmEn52S3C",
  "key21": "24EugMhhTDkgq8dTexVFfwMFihKy1FcjFX9zph3e1vnx8oZffsrf2L52d5TVze8bmsRE6aRDxk4fBit4PWoqa8c2",
  "key22": "4KXa4QTHRj3q3wBu4aMNvLLzxQrPW2t9s2352n3bNXLf7ZEoYJk8aHSjVGLYh8AUNwNWcY4uU8pN8XqwqM8fb1Xf",
  "key23": "262gDvqvDRvRWDsvkuAjx1L7Gdm9PksAZV7T978qURoHoEpwFjZ7yTZjPEqE43rKYq2854YrFQm7mFVrdW2ozqSG",
  "key24": "ZEbjhURsQzDmkjthAxWE7PAGkc5sEh9QrCnKfQbiQyYKuhXv1M2vX7JKvnGAjZJuB8MdgbT4XttbMxYhhD9KqwE",
  "key25": "5bpkW1RfwbLbUeiEwY4ZjbfQR2aoZa8HYAYQPjmzmPDmbPqcf6fsqVubBmz9vo36rQuRNz7pWqjx7wbf4iytWCz6",
  "key26": "5eMnRqSRNpLHfeK18TTN5B7ppTdXQK6TxsLKDNHzGw1i6sSeZNXE1kSDdHzAqZ7GTWgPpRHAYrYV1LskSAz4hL48",
  "key27": "5ntSdCbSUF8JFA5pEgpxvsXndKoTV26Qvm6ovQcinNpVEeJAEYGtdwr9bzziW57BoDuGLBDDTRMAFnmbLsFoxuCB",
  "key28": "3gb84zWwSbQSLeA3RtVNJ3jVooyBfRDbNo6HW7iJUJNCvmooAjLHyr6TYita3ChH7AWZqPj9e3CLE3YiKQabGok1",
  "key29": "3cx3sG9ao1x8s63kEE1DqG2scAgFMWTTskeEuW5Fai3xxeHMLuYzNhvADRL8esLuqdicnYTaCaXi1eEKRWiEnpMK",
  "key30": "28cs5gz6Dvyi8fTdA9jjUoHkZGkW777C34zzV3g3DydDrx79Mv1eDBS6aXMiU9M86TzYSy2URtcZaF9SEUPcLMoj",
  "key31": "2oEXAsJzJagmPjgbiAdFd565wEe8pkZ7UwEYxSiSu1TA5JWSXKeebkz1Xu6WxJ1fxSKpVeUKxuHNq9FSqcQvE6AY",
  "key32": "5mrsdLU2sBNoREYrgpcK2vzGbCkvYHsfSKQ8fJBs7EnsQWroM9PSTqxNBNT9gGY7qPfBQgkz1aKK7qCefLsMemJF",
  "key33": "3zQrCdz2TN6b1PXLFpidP7YF142J18kPtpWnqXMWjEp8NETPUYTTvKijubtwU7vvKYqaRSEua3viSK73xrbx6n2x",
  "key34": "55wbhyjJ299SDp5p2ZUuZwzP2zJuRvZ33hACFgBRB663n1yrATV31qG8nMFEJQnKFrsbiyH5BW56oEf3BVQxFBrH",
  "key35": "2VihN6tkYSB82zJ7UEkRZ8W8gaVwJSsvRtjVa344g84Fx3NoQMVQ9GGUvHDfDR2dxBoajwRAT6hBE9sUx24nFiqo",
  "key36": "8eiDQzcD46eM8vSQMWHMfn2LWfmXhS92AZoAP9ZaDVCAFftgMR1dhmwxagN3hw4jkXLztZuC8eLWSgctY2cZaWX",
  "key37": "48x8v9GvkDJo7aC7JKk8NwNzEWQf4PigT8oFxRMvGNHXYrzJCi2xTC3VQDMqGiMb9RRS5GkCPrMhZfd658t7CeEb",
  "key38": "iPbpwXoYQ53NAvV13gNVUZFZd99WV6e92R3Quwe4tZFRGTe4gHAWbFouuviRANJF2m5h5QpCdFTfgAuNJydH4eg",
  "key39": "34F9ahJSighhSP14xP19Es4URv1Tfbbizc7kzhjK7FZYdd74jvkhmQYtidJiYn7uEtyaVu9KN8oXuybJxPwfwbgb",
  "key40": "4cGZ9Q2guhf3t6GWTi8oxUPSRWiaZhW55ACWaReNKPgGVhq5tT4ajpPrajRTxkqBDXhQRbQiVJvXqUSFWbWVgeKe",
  "key41": "5f2WvzKERCtQgpQV6DjVeT7xvzhXx5H7BReEUgqXFefJ6dSCLgSjgs4t3guzKd41MV6BPd1ZFNzSfcFezNDW1Jex",
  "key42": "Dz18FJDFu5FDrN2m884wZ2JA1brrB9cfezYCd2zvCbTmz52Dy9xNrbtxWEd9i6yvAwdk2XwzjzLpyAXQdTxJqGM",
  "key43": "27KGNyqk1wfvFs52sT4P9jBf11GwHe6h1vN9RHomeAZrxondq4uJVJmRQumorEX58sJ2agTrtdeKaYvBatnd2WrW",
  "key44": "5ZjpMxrpKY2NkAgzWNeNGjVcmKQieCnqWByRsYcAe9KN53agDCqPehzvKYu3UBoStDUSZYMfpe45gzF6pZE4iFa",
  "key45": "24jvSoshpHaRPQkFhwGAR9k1yWDToPcGGXvKufwR5t4i3Ax1jnxTG9qna5Jqi91GXBxbpXyFfFgngWe8DnJvYqmq",
  "key46": "3MPbfRjYwc3JWUDGxxBc4me7a4MpPAYmVD11MK5iuZMP8JEbBS8tPF4KPMdScez3HgC8g69Py8PuLKARa9uzKGvu",
  "key47": "243phG3im47yHLQNFKQAmJqHG64SVTyFjn95E9WbYU2ZFWHve68oCb3FBHsgxJMFQQULdqb8NmPj6AMESwSd5N8B",
  "key48": "5KY4RJqMg1E68Wat2GEPgPuxqqoCziKKzcyESaYKREUjR4hHGZG7aZtUTVgcPJ4UwBHndkDXWsLonFoMoZdkgrQ3",
  "key49": "2ocQ9rGmGBc7ZGoauAy1RC22pTjoChTUnfQepAt735Usztq9cxpZ7UbxCitGWgf5jK3kqRjS7kZkuWU9yorYFwmR"
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
