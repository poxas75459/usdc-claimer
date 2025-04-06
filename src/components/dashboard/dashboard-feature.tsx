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
    "5GKDCQ6Mq4Rv3ktCauwR8uNYkeC2kRGn8tBcq1aed6VS8efKZPKrmVLaXqkTSNZHPieqXKJZZUbZTKPD6BJ2Dtd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MkgJhrw9eVbsE4pKZfahssPDUU159AGwrmf2mVVJzPc6W7nNQuMtsZSibyxGpJvafLFxZFou3gYYBYbWHoKMVfw",
  "key1": "XpMH3zgpdt1nAX1ZGL4q7bkpEY38rYsZUQa8aP3w1S9WLpepHMuhaLtQsK3uKwBB9jiqiXbXQQm8r73Dn8W6QJf",
  "key2": "27B6YVsnMAmxyHQYANDZ9XMagWwmuYxXkPyEYbhWRQKq8czPwAAbTLo1AzAC8xXvsuacLxMYvfgAhWqjNrg1iJbw",
  "key3": "jGYB8egD99N1wW9hgDK9AJgE4kVSTmKYmNRWDki7dzwqCuiTDB7Yg8xbKNft4KKtBUDrvaBHFjjgVKobJarwfJn",
  "key4": "huWWTeYavpJbaY2MoQenNRyWcWU3dwsGAo6abKMDcKwoNiWpdcrqdvdxfju6Zk6rgLCPRwLJiTKYpq5YqDEDVBT",
  "key5": "QNCScGm6PYshovXXBuHTSsAPAs8y2ocLci3BGg1hZxm5vbkQNdPwmBFSbXCgCAtJ6sN7VvnNVoLy1LyS99vZ15U",
  "key6": "37wF7c2RSpQuVRVdiHz1gDcLbCAKfRVTbwYUB46RiJQu97GzJw6SR2yf8ndUxRNqmyETFMETYnHUj4H6Qgyz8crT",
  "key7": "bDZJ47xJ5WauVYY38jja8HAayhpk7b5qJ4r8mV4pYEh9qVY6VesvB1t4MX5XfoPp2NxiJMts18JVCHWiFhKNtqn",
  "key8": "kKSjrzPMn99muFWNNeWEXWaDi7tgSAY19n94eHJaAnwCA4GqKXc2L8TDvsc78TSMRJBEc3TRxvQUsMgTRminoZr",
  "key9": "rguWtR2FCBR317m9owuctGd4fLccaiRrYjsk6TkeLSEPs3XCY1xdxhdPoVs66G76XGi8BDcQ2BDhzC3qFhEh8oz",
  "key10": "ZScnQDi1TGZbzb1F1PRWsV9nuvVdVh35pyHspTv4XQrnG52jzhBBMhjnjUXU3Wt2KazWbTZPkDBnCdT6kbNpsbB",
  "key11": "2Vm7KQsZ2FpZiss1y51ckEJkdjQbXmBcnq9CBifvQqwftTgud8SHRaVCH9Udnt9Ya7eDsqmmPc7YkQXzhMjxoF1",
  "key12": "4PRz9V96HX74ozJcN4syEc8sTrRDu8a72jupXbaXt1nM36WYGnRQjPYR7W3jg5X2zEijkFxErnrTeZaGreZ6qsD7",
  "key13": "5GngMAi5v1zbNJmHUvMAvCaG7BFC9tXYisyTLva3cUvadxLY5M4hX3TZjVa4WkxRSAByBF4mfAT3jydrvXXh9j7K",
  "key14": "4kxEhS3H7VERtb7MEsaoSYB8XAQgdn7Vdu7nSUqiibDRECtRVY5wZ5ZsrF9ruQ74n1KdUCZhxR4fYPQiMhF8qeGZ",
  "key15": "5mqg9C7tSuehpyUuzUGJTijbnBCN5FcutE3PNzbYY8yy3mAaY5ZiwFreAMm8uy2oae93NmzBZTfg4PkXeuyFhrss",
  "key16": "2jDwE8DUUoqeY6ph7PWEyhUSyJbxJubwgdncxFb3ByjyTvh7LdpE71RxFykmqfVqDvKZL4ibzqfiGuEJJmC6BJ2H",
  "key17": "sCbNJRh8L4wq5QvPZpQtmPE8qdxDtbCBcNdNrLyazHPxSw5MXqFYqWpAHBrsTcREe6E41kRBW8Dq55Rk5ye6DcM",
  "key18": "54QxsfpAo8uTTKFrsVsXyigvFsUgBhgkFnh1w8gVX6qemwhfDQfTxsEZmV5HvT3MHaAho1om9bc1gr1cTozUMsYU",
  "key19": "3VAVv9qe9JimMMH1m85DtBNmtpQCEY5fZ7pQHX97bSFGTzRSVUTxbEFMBQHYPB592eyK6N8HZKL7rbVutiU8m9hL",
  "key20": "yrQAPweRnHk2mLzgioXTPy8JKm41qyL3YoX7toTVEGG83eDMwWeBPbFj49hndAnCDY1CJ3eBJWvygQrKDUkEkVv",
  "key21": "q9EjDQ9ZHSiWGQtWWvfx223poCv3KebVJ1KP5XZJRQa8EPN4LrGsNSenjgB1yaSXoWwqWfbjaLoaE431y42XhJu",
  "key22": "7jnpBTWC2Hq96LeWWVHHU66BFVum92XYcSspdHp2yiBMVpkQ1ezA5FE4PGJmSKKn22DEdw4c4u6jrgPcEUyWPcP",
  "key23": "5WrcwNRg8yWs2mea1msK3KdgxzF6uM2Wr7jU2A2aSfQ65zJHNFHnWzb592Ts2jDVCY6TRzUsDthsMvFeQuWC7ErC",
  "key24": "3tSgmRhYj49UpUjct915MrjtJL5Ww8bqQzgqUJJr9gpUYWYF7KdKmG8NdF7zZS4JHgz9QGG42y7ZYh4jNXJLh5A8",
  "key25": "4bTrxuSmvMyY137Kopx3ErVoaFRvzUnug8auyWMkRnXkGJaHSBLrzaDQy546E7WkUK16nQTc7RY8soSQbfLC15Tg",
  "key26": "3b7pmDeVb4KwTbgU4vzmLqgxqombQSnWQtocnxbL5q3SZJvKBxvefTQtmdePQpWqBRoNWDjcNi4UkkrLF7hQ34wk",
  "key27": "2u9YftH5MtVCbJ96ua2bxB6Bx73TrT95c3ARn3mYEYieVHeDdFYyEaLsFWQKTU4ctg7kPzYzDV5hFXPDDFVYcJ5e",
  "key28": "ACwVHm9zCxToHi4SGQihzdi1f8oXFu5aAh8Km2FPrUEeysyRxGpVXZJyxeySgWQYSXbVwxx9Ur3e4AnQCVGdLgG",
  "key29": "3Qgj7Ra7R1uVKXNXA9Gy7d7ktxBmtiBQ2KJUFZXD9HXxGu1WtBHqfB5f61aKVncqNWmSa1GjbZLBVzkjZMnZW1Sg",
  "key30": "2kXg87gjdurS6hfvcWxgDqJQYVr2fdZn75NzRWSXTwmBuGwhUJoW9c5DENNw1btoFDkETYRTWQaHYXVu4GLG75y6",
  "key31": "2fUJtww3WmymbTvHn8TQhP7aU2hbLd5LLoynsH4S1Z1M7ovmpJ8RvLqHZJzsKe6EguHoeqCenAGGVxkCsnLC6VsG",
  "key32": "3u7GLdpecjnuoAkYCiL5ubMCJT9SsDg9SzvJV3wp4bpogudFb7uo6xp8imZU5YJ7Ac9Ud3YptPV9S5t5EhciJjKp",
  "key33": "3hhibpLo9qPa6sF4iHF1V31yNKyoSAFeXBzBab4SZ1r1muT3nVXKqJsPNVmFhvsxzJpMSsvRNusd2SqLrq5T3fm6",
  "key34": "27EPFhjjsskA6G4td4g6cdaA7iuERAmrHYVTw2PNAGcaP56d2DFeAyYQHfpNm8VToh4wtg3yfuoVudCgwuUmAypS",
  "key35": "2iy8bmULypzbDJa2uN6QeZBzo4bizxpfEFKeAmABG6uomx812KLTrXE8tJ6pdy2WjU2bxFmE7z3zRBPegkauWEVQ",
  "key36": "5YkL1pAjyufj21Evp7hMhaassRLU7STXqKM3DXktjdWQw3FxbeWxJQkHBsZywnu2uNqhWcqZzqpA7L9kuJHwsxEL",
  "key37": "oy2MVo94LmdW1jRrinP3U9DnWThRYAmgTYuGS1JuKMFnBpQPjQHvpKvnVLvPkQxuLdqw12t9d8KNCTZs8ZLjNBU",
  "key38": "51GpDZBmxjLKbvMCyVi8GEw72RP1qom7bH8bDhnV4uSX3XUJoCrgJN7TAjy4kqiJ1ym6CKdHgJVV2F3kpJNg86ut",
  "key39": "3umrmyo6bhfzYaVm9xSB81o2AGx39bSKcZZEpK8kzgukDgzJDej6Fpi1QY9fFTpAr2aAMYKDme8LbtJ2cEiwGRDk",
  "key40": "61oc3JWsQbPSDAQSy4dSbYZTegpXycq3rpp5cs8mDdQMEGM7DHGHeYqWE9B3XF5SpqvpBie915tR4PFNpwTZheda",
  "key41": "3YWzbYSkYd6a5XnMoDYZjGkWyWvvf3odLJUvBaN2dPYX2v7WxoxtATG5aDy5RcyJgvthbHSCHWAwbmcGijXUY1im",
  "key42": "5YSRAXnnUqrdF5ujKXmwYb3oB7596ARVpUrWNhQvpCHPw6wKev7hV5DUc3DmdRXAERgDgLnDYBvVcjaDiyctasC7",
  "key43": "sYSydzDQw67zoBLSc7pzVERTdFLirX5PikadzgmXDpBMJPpWwTVBXg2S5EWFYRqoRVKsr3jNeNfVTSRKT8SSN3Z"
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
