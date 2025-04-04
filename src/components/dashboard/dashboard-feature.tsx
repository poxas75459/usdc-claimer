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
    "4hD3ScpGxbNwvYiXwc5WhQ7CAUFkxhyHTaNKtihJ1j9c81vvZTNX5dWu5P6BeiQvNJFfNKLZwPax8QQGAkXtTrY8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tvHqEwviwRRTWuGrm4h5W6qio8XMMkTpKADccNurxB3cWXfHxfGxUEbHUyEPHdSyRCk2VCXbhRetjm3KK2ocVca",
  "key1": "2Db1r9hqj9qrwoyHvKmN8Lg144GmQzP1MsSPFGcUbiavEuCVkJVG5RCh1KJbcgrnW1PzMeQBqpgy2knpHRH4J6Qi",
  "key2": "3Mr5LCG3hKMsC4EyPrMg5A5xVZbTa6XAMWkh1o82qsffY4zrpNWZcFTuxqxGmM1BSWi6V5z98oyf4BZ1G3VmSnWj",
  "key3": "VPGWHgEmMiECwaPvnRiQWEmyAXX541Jiw11jmwYeR6Xjk9NZRNX2Dn5aF8FGHUts9xjxZC2pdMAGgDDUqobfwQJ",
  "key4": "2URHd2oEqn5AzK3s5u4ziL7K4j7pUVV3VdXZfKthkALnfYMSsLaVJmHvB9rmP8LBn2oySQPik2kUXfC4FbpkGzYe",
  "key5": "4PYNK2y2Y7LSP2pGVZiGU1dfU69N6gTiXmgmJrpCZc9Xy4kfUw1jHoFSQ85iBCyK1TwHJgqtPQeqscaNcmuog9nM",
  "key6": "3GfvAFjMCKvzKvBEq8FfV7DhUtKCDUqvQ6XFXkUwntAEghSEFVYjGPxv1hsEfqj81RESbpGh14HuotwX8imjATUe",
  "key7": "66ohBBKanRd8AtPQj379x5L3yBUYf2MyMU7ji74qMXCtjvcfT5e7gfhr1BADUQJ12TuxwC3rbow693BGTCnyR8yL",
  "key8": "2RFvw7oMb79NCbzYa1Ai7Kn134kobJBkSjYfVhUbGEHfqYhsVgM772PtMS9ASavEWkW1KAPwT8Dz9NMUo75MvQq7",
  "key9": "2XvWAMM7LkmKk3L6mqjL3FDWtNPiKidkhdDeaDwr6WG5mHfURK7copLeXkEbe4mbb87Zt7vNC5jRnzYwr3widgBd",
  "key10": "5Dw554Yoxo6krswFhso5Kbj1zYBmQjbNpUdg5DKb5NCxQFEnMWwEq4VPEJidERvZKWgiNLAgsuNKvHi4v1e5X9Ar",
  "key11": "3CRLGE21qmVMyjQAMsUWuKYNt6o5jDRYCx9wggMxUyee5XcEys5Ro7fH3r1hfXEtmAr11zFpp35cRZeoRTrQzEgD",
  "key12": "d2PAQsHHKPvPJnRyriQi3hQtm98hmEQZV4ZDwiksLB9BqpN6pmYVBSJhLDWVUHZhCr6mfDjJNCCFeMq1S6Sngz5",
  "key13": "5XUR5Ppq4x1qXuM95cJhRi4guPMA9KikqxrLHnfjqfFUjpSeat3KsymWuZF95e4vvGZgSGDZRXgzEciVZjajHiTF",
  "key14": "43xGPze9rdsXdmAQwPQQpjtDZJ7zWd4Vc5ZnrcdMcnCT79S6pJscmXQVkxidGeiJbf3QWYqaJskDutuB4Msz6od9",
  "key15": "2fAEFUoJ7imXUqUSZy88dKmy18nDn3UFgQLAnSfi5snzPv7bq1BEW3TpVndLyLY3r5tNkY8uj3ZoJsFwRy6MKm7Q",
  "key16": "5kYWNV4rdk9BzCx6mzp3zeEVTbwYWChpDwUJJUZ9vzL3Wvaf2hJatVmUvh32fgNjqxe5v25LT2Ro7MwQZiCbVwQf",
  "key17": "5q6FDHiNznZCjsYoTn49urvT33jDgRt4zXAuaQM9g2mGdx1tSSqV9PDMgyZknb9q5Vxd2kxqd4ToEaTmVxubnvpG",
  "key18": "5YzQiYVUi5dziBV237szVTfJccd1ayyJ6P3fNtfSpmGCCNgmq7oLcE9kpaom92ZJ4Rpk2L5NqqHVzvCaMPP3bAdq",
  "key19": "4VjuYxTtTx4dQRTgmNra13yX5rxdzrxZWBy6BHtmWZ34NQPuqNEu2E5b8SU8sk9JCKP9cnUeQDBWxbnTpsTE1X8o",
  "key20": "5JgkgNsi3NveBkpuwVVPR6fneNX4ykxxhDwr4iyyUinJRK69miQoKd3w5NM2TQtKHTJeXJvs3PHfCXbgqVBRo5Bv",
  "key21": "67Yo968mnhTYuPkDWi2xXwG9bFx8jENztkE8A9xQHZBfX7xyW9j7JMo1rbA2oXmQ3oUuXY6rcCFwmGJdcB6vwdDp",
  "key22": "2fpzjvBZFykLfom1JAE6HVH9zf8exBzo8XHodqYTZzQFbtfiV2BsKPrKwApZ2TmBwQs2pnvRGfmGbGsGAKrMF7hL",
  "key23": "HrKwyRzgHLkxRXKwafvtCnCBBB8KrqHxApNyzEcYbFtQRrPFCtoCXX5T8jGvLYpNrHErmjBS6T9Da4uxNbPBjm3",
  "key24": "3X1v6XV9hvrGdvsE64DdyPM1KY1AdsV4J8ACGtPm4emmU4zeoQ7BeWmGERh8EsTVpDUj5zs4p961gNyKtVNfesMu",
  "key25": "5Yha1TG7NeMzbP4WgyiTb8fy1XWBTA4Wg43dFE5VjZr3sxyQeHezk8CqgwhNy14AfE7yEMD9qPYzkCLFRRTW9L7M",
  "key26": "2FGLheAkpem8m6fKcamFoGHVNo7QRF6EmbBeN7Eqt5hm322GL4mCo3Jc7uB6SHQ1FH8BCLyYiuK8xt3Fx7nJvQGi",
  "key27": "4q4W4H2BjJeWSXk5mkqxUtVXg732yimY78sZUc2TKYvQWzu7PqDzptBkXEi6XWpZHzWhjKchZRm6QaJhBGt5vKda",
  "key28": "Gvo3kmvRpEQiPSKsc8viPLSPDjWknGnr3Lon17UeqMsuEyz1bnNnESZ9U4V77SgNasncFv3THahxBvN8z9ekfUE",
  "key29": "f67cV3s1xMNjbMPva3AAS6XGqzo5nWt6ZFcdAt9sZPmwnNk245HV9qBSCzsqccvhopiTpQfV5z1bLpW2iX96Yc9",
  "key30": "35yf2XnxLXZbs2BFYCTnJmsiHMTQNyyYErg9ziSUUByZM9UkkxwZH8dWrqVY2esvxEKpJqE2Me95bUU7YKXtPjv3",
  "key31": "61ACHyVmVHGWx8CgMEJCef6z54n26WU4gjsto7Zk14k9L3kZFRBL88ibp3JZMvkK8otie2mMXxX9f6ZToPdtJZ9n",
  "key32": "2Cit2eTaAkMbW84CnWNjX8ejEEmLPMViyH263mGGLbddJq6BKC4eUvNuZC3WASc77nhUysm2yHiBYSSJGcAV7dRV",
  "key33": "5WFjFu2g8aLNM5suDZL9ZwnBGNR8iV9LoiSGFhpiQAisENQtA14xWND4JgFuSKUdu6yA6pF2q1A5Tyq8P3jMSBBM",
  "key34": "2hjRVzo79ihRLdjqMmRLXd4ynoy8XMZL5uCqdQkVtwQ8PktX9ZRYMuFb5Xw9y6JQgtEAjmPgAzmwHykco66zyhsA",
  "key35": "TkPSQviMPSVbp2BNpCuvpthVaop5Muzgots837CMbv85PqpJFq8Yvw2N2NcLeHN4aX7WPXVAf76TXzSEhdxAUbR",
  "key36": "21zHzuaEj5bi5mxYPhqoz8zHyBfvLdRcjik9yTxygGLVyLyo98WDv2sR74AWchuYUQaL28AQhx3DG6m3jw3CuvMk",
  "key37": "2GaSiAHA56y5YkxowkbPhJn5hDy8z5PGrSepxvuKSe7SwbBa9tawdBbDuwhayTjnRhk1Fz8MbcwE2RTkVSYGtg4y",
  "key38": "ebmYPVGAbrnJPbFVGYdT5GkeaVmNonThULovCefHhSe7JjB2Gu7kc2XDhpZLoiWqC574MZDvgNgmCdbR4oSH1oi",
  "key39": "AFrNjnT4AMm5nVJfTjuEc5LKobjkruYCdh8tUZQxWG7kQtFD2ZsGZLTkACpTp9GXp61HGgEpLfTL8TgJxs2qWSU"
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
