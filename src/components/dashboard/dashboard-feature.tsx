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
    "3d8rHBiuFaHu4aU4VauApBQnu8jb7HYxSdhKfZA3PtMsX6tmhSsJupdAPApdG1RRi23ccN95g6fadaVFiGCqUN39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44U8Hq9UVitsHhsLa9LVfQMqXyjguoEp9sWxfrmviRDBiLWayQNcHHgiTHNuiTC9DVqn1rffMTRZ48ouGXA6QVqp",
  "key1": "64enck5ehRJy3aapi7dpVvsmc7DCp6pn1tXPtvZkzDNtQqcG27vpQ8YQPmDY3CLzux1znZGm9SU3x3U3AHV7u2yc",
  "key2": "4WcFm1Gu9zGuUGjgLtd1YJD1PGqFnK9nQijAqidWSbz4GkxNnfLTD5fezyC8hANpTiNSqxz5r2EFZ7S2uHQjaYPA",
  "key3": "3TFwCwVQf6fJ3Dxe3SUaRTr7NikVFgvCW7czxJr1kY4xpwhAVFmfWCW6RuZBT9t8dgymQV97gccgSSE7WcrgceV4",
  "key4": "584swTxYe17GPaHU472krXZ8RWRU7GorEzWdEpHArRAC6R5gLoBAkmSp2cxRUuDHkqpS1mweCXRRYxp4uZSCgisc",
  "key5": "4i7n6L6GRrrLi1WfvmV5aJFYFpc4U8TtPwY6Kg37RaWPHwU7RMr3ycFxRBoMXvw4VLzGa2cLBUCEDaiGjFoZkXCs",
  "key6": "5pRpRkxh3G5MJiAp16rF8gCCRp4Pya81mVwziAaZPQMs55ybBYpYkbiULUAU1wvGq53zFN1PZc5adjWae6GCM4Wb",
  "key7": "217yhEuE6irV6fj6NjoL4o2ysNZ5zLvUijB2nx57Wfu83NwNNKdQJtQFVHWeCCC2DKPyY9RcYx3KFWHcipcfTTKF",
  "key8": "2daJLQ3kPKHpSQgukphJvBDhUG2Y3GwpAFZJMoSCfeC1FixDqozvLYTzVHp9pWNh2JJLRc5oqaMLWL8WDsd6zw81",
  "key9": "2pBtokxJGrLddGTdtie5VLLWKj97Ap8YoARazGKkDWSTbFhuwgaiD1vasrKPxyg5m774dLe8zp8uT5SLmGTTKQZK",
  "key10": "3SvGH8rPGDfUq1dyJHirVAypphEipuQgZ6ZgcoPu9kzdwY7tnYPuu8E2zQedCoaDknLPbMqjYVi41y7FFNNs7frF",
  "key11": "4ozwY6XdEPdvPZdnLKDwDcrnaLkaNaFbFPtQyun7UTdAGuPY7aqRLSocqgNmVjdMXG8w98AqT9HP9HwCJSqFfjbn",
  "key12": "3KNMuPfMMhqHSopqLC7YsaXqmQqcXveZ16KYNeHiuKNurWPjprVm8X6nhythr2Y8EhmjW7Neax53PeSbuveb9uwA",
  "key13": "414jsbAGN92RDyY5x8wVnXPw8wQq937XtWvJaTuZbtK5HAGefukPWaRP6KMLEPhYnfyb3CCMHfLViREoSxS7x32f",
  "key14": "5sYmLQyx3tyZ3nWxX8Wme5WKLWzR9SGqiQf7sCNJGxuCcR1tWq1Qc8aorj3eqNX9ay8nTM1x3LnUJCBcrZndn9Gh",
  "key15": "5ovr3AfMocqhwuPiYMeitMJbBpWef1FKP4XR2XNpdUFr2grbHC3XXc32MWc2XgD2C8trJU7uUvj6n1Ct8ZjguXVy",
  "key16": "62UUrFnAEdkRFEUuuHyG1SYDP449TDAUtRD2UejwSrPk9tiVDxnPXEDH2rHGvMvvc6C3bTcDTzwWyG3ws8Q1VHxL",
  "key17": "4cix1ZSfA2XgV7UQhps7QWoM28dJPcE43cmUe4gQV3dNDiZqAXaGVanpYLmh4RNhicza5LK2iUDJMHqGR9zuPGv",
  "key18": "4uQaxD6KhZJQW5cHEWd3vgNPLQwMfNoJtWS97m2hLbksPB6jTvDYzjXXdrxJ8dPMwBSgHDoBhTAf9M3sys8CoUmK",
  "key19": "4h4fbvDk8HQs5FqrhLjTzvC3MteBefo2cH3jT44116t27BH4zHFeLTRihFuLu4JpLAdvMwNKFBghdwoLebnGBZgD",
  "key20": "2e8kDXZAi26n2soyxH49MewbmPxmqm4txQDBticidcTfqARzHx3ssng3mW5htL1jmB9aSnYZCsCkNCfhK6Ldu6gH",
  "key21": "3zpup7MXUyBsNkhU1wCgB5Tjd2oSe19EH3zf83iAkikCZWf9deWiBidcgj1NzhTwG9wNAobetRs3xFwjLWnEMigj",
  "key22": "4vCoJZiSRiJkk39mTqmdNixhkZuB3Y58gxg6Gmvzc7Ydc8A8Tu6ydqjpYVw9n9keYXU672TLSD5J2yk1vaQ98McP",
  "key23": "66hiiWMvsFNZ1J7Xsc3DhAsknvkmQG3wH8mdRqmzvXgAgHNnm8J3t31pei5qG667PVFCRsjndRGEcwnJV9UNYFy",
  "key24": "2sctpgpM7BRYJhP33H7m1pN1YMCJw31FVc5EtdWXJELtsVzUviPUTczJKYhtrsYecSWVxEwH5ikRdJ9JPNMBVkQ3",
  "key25": "3xPMhPbL12RNVVP6eb6fJrp5gVpamrhbx4to7V8KiXFvK9AoF1VxY2JkwDSdTxJAZniJtWwTKnzuHxsGWKrNPySa",
  "key26": "rxnPNHnJmRyVL9GaqxsX5r6eSek8sMivAZ9sYEfBqcyLv141cBrS7bhtCgjSRJNkyaMfhgcAJJqKPEZrnnQT7ie",
  "key27": "zxDHwJaGRKkmoTF4cRxLXtbh5i87SPvysR8a4cWVMxvFGp7xM5YtWRadmivJA4rmMoKJxQ8dj1HTP2oxFcLaJRa",
  "key28": "4Ue3EeQJ6qA3W71jFNwzgHoEhF6YuQ1ug3bQ6Xx1XMNC9ZdJoZ9mbwhBx2oLXXiNotiW4j9y59m8Mq3qt6tXuAeK",
  "key29": "2Ap6bwtkm2a1Zb8qNJYjWmeGp4YCovbMQsJYminvksfkdvB2fBZTMzMoGx17GQkdzCi7r6pu56LgmTP9QM68CA3o",
  "key30": "2jRSnHp7PRK6iZ2qMm2p7aFH8X6Fwg9Mb2uV4NDhEmAXzkrEESipiWkw4PrKJZLK54sJ8U3mTDcJaAT7zaXK634R",
  "key31": "mg4D6uMTdpqw4eyzxPZXEi3D3rrAJgX5cnHAv1Kp7d7SbndLGMWbWKvNcyXeekmVv7MV8KrpPmtmEjqysjSnHBH",
  "key32": "4kRXjr37XU7NiPfahpakzdpBFg6ifnXBuaubgd8JpvyGTM6UQC7ptXSKk9grmu8MH9nXmVTgZ4kqst9u4dscpbhX",
  "key33": "dTQUedxmv1DyKbG6LjVhYxLF9CmfAVzUEanXfaSKmQWwE2veqKz88invgEEdAu3iNEwozUo7pKCYRqYVYZu1ePR",
  "key34": "3nhHBSNimD1ZXegorAZHcMQLwY1Jonr5XvtVPcrjFv7BdQj5kiMpavQspdwLAEErwadimWTD2sXjjw3EJnZA2AoQ",
  "key35": "1VpiSTTPrgAYesUhmnbM9Td2F51UJcmYGuusLmjtq2VdrC6vdseoKUe7vrFuZFJF5g7F271ShwPjxvt61KrAtrD",
  "key36": "3wQDhtCobw17n3QXxro7tRy84vnUrDB9jLjfhQ8nsD34KiTJrnW1XYFHz7U1E9fUxjDYHpRrQ1sPFcgh6h16Y2hw",
  "key37": "5EyRiv5kxrWGKwv6dsq4bEEiwcDzp8ohDLXTWYx3GqbeH1JNVPwMajWhcfP45YtMqs4n9qFzcyYg4bkro8vywvgr",
  "key38": "22PT535pP4d2UpAbbKSMB8F3zFQxQxZXDXyWmYA7NRdQJYQJif3jbigMmMKR6NjsjpRUiDiDJZZgc7jc9iRu9iN1",
  "key39": "3w6ZA2Xj4dy7sdvHp4e5nYa4HKwzpxGUVq39vrfD1ZFE82tgmwpGPANedqvtmJTDk97RmHCCcnoTziSycDiwWrWK",
  "key40": "4S9j84pPiWnjJfXpNmTEgANDWHVdarfVoVFqYrAkp2Uv1NbXJKZPcAYmtjntBAi2FsuM3AgM57TzWnttUHKioBvm",
  "key41": "2zHoPVmiKjjDcMdSHweyb65X8VwNCYYed2McRfGfNWHefRyQDpSWL656y87o2Ax5CbcbgpFhXEaicPxaVnq9SUz4"
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
