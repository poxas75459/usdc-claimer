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
    "2YdTkkid2H4QgiFWqiuE2iWouvViNJceYUvCamLzAKqKaqBm7zoKVii1biypCn1xQSKbfp3u5DGM419kfQkaa2BS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29TuXwtWJfictoSUhZXPJhZ2amoFwC8cSFJLUzQ53ru12rjZ8mi7KmgqF3dkB9qmWUVTabEWPj6ATv56BCfiHurJ",
  "key1": "zdbiS5JKdkoK8dSAEUitoJoDHPftZagj7w5t3yXcMWGZn97pyC7D4Uv2ZMM537d2GgCiDd6GUUvH4wzEvjWEUpE",
  "key2": "n7PqqwowHmmKPxkX7QNj69966x1YE7CPd57ZWPRVVm4hTSak8iE7jq5DAibamzmvtvPBwgfW3SrQtvp6mSyqQD5",
  "key3": "5ZrBaa2a5Vrg8Ny7tHiw7yrwmmDJdpqMKqQb2zwQUruaUfSkFQKGv7YEKdRzri7911JLThEDXhu8XFN6ktYpyvfB",
  "key4": "25mh6zNLtSpMVyo1oxnLSbHGaaEiWdU9LAiyFrnc8u9TwhAHMPTYoafAzCLQZGgBdpPE2yejQZuS6tvRJgqWQCSg",
  "key5": "37FTm81hcnm4QYeAfGwBqaxLVmAtL8kL4LyqG7qNimLU42xTXSy2LfkMbKDwzeqr9omry33TDxNuXHz33ZBmg1zc",
  "key6": "38skLXUhKhangy3XMRaWW7743pj5xv4HdnocJTZTXHAmhQeQtj7kzwdhRiazYDvSASRa6Qf949oQJJbJiVtr6UGB",
  "key7": "5Vf2wd7mqqg72mb6Qk9B34omjj2JF6PonXeZb1MPdGLPXpKwwmo3HGAgm1HbrQGRSXereHihTtenvemZQ1r1ucmH",
  "key8": "dfDK3GGKtK6PF2hTTLuvSi5M3LK6NF2tEaqxY14B4gd1R3w7QhPnxyEXkaTK8baRWjgN3menc5mC8K4LXwNGgwg",
  "key9": "62QPmMVLzeoSrer5mzZNTuqUdxDEQ7mRN2KP9je1JGJ4VMpyycm9ASwpHGYLgje2LWNeez4QHvhN2YmnF1fWZj6B",
  "key10": "46AD659akzHHRBbFzziCgaNykTJVpDzSEbd2rj9PUNFYcRnkAL6dH2wwjkCfeHx6U4xVL72rtePFVAe7FssW5Ai7",
  "key11": "67YdZHhgiZixcQomhBWAs7ch84VPxswvbwhaNAfCpsUYQoeFiDTQ4m8CrdLsshiEiVDqR9bPtgTkUcUGREN93siQ",
  "key12": "3rxNFgFHmTwArUu4t4x5XCDTAoozVgYoxkrZ5CYgevGpqNmw9e3HgdyhdqXM9rU6cgQgwAWpL92wY5CjtG3K1G48",
  "key13": "666xpdwtxofC7yBL1Zz9DACdbVk2U2rNQWuvFEecLHxP1BeayXP4i6vQkXaEFpnUoAgbGSVuwmEaMpUt4Aa5MDky",
  "key14": "54nQCGG5v6UroUirTuUJh5Lw7ivRzJzsTmn6RYLZtbrFkvRbLcJqHPqE9er4oyeLUnT9xs7KkmJKJfm7jWEf1GTu",
  "key15": "4tgU2nZa7gmZ2N7qkWmyAsN4BfLvDiQLBM7dGUV8qgvmATP6ctAPWATcWHXaJiSJqzkJZZuJsBqRCohfwxS2kudY",
  "key16": "5zj6SuBgesZbfbt6LDBvm9hdgnjadUJLAWeYVPXTbcfVQd9mvjwZa17NTxKCPSPJzfRDxpnbnNyPBLC6uiYJ4teT",
  "key17": "4oG9x5AgqBnKaVqPRmH5FRPed2PNupbZBc8nyM4GpD7Z9jqdbCi833b97xPtZW8xVrexUefBf5TLFa9PrKxETGw2",
  "key18": "3vxgo2XibkuEdbbRfuvFDFx1YKFYaay3B36MAhT6kJqUdxks1UvreVufgHAxqfa3bp8huD3DD69CSNH2KsvrWfBh",
  "key19": "4YZu51kbUdv4H6PFLS4tXpy26JWGthfSsnEQsyHQL5SSCHyF2oxeNk6DkTHi8iyGo5u4Ss9KsEWXtScP6Jaa75HR",
  "key20": "42JDVGW5R7ec2FreLDe2YMiJ7GGZi7EriMaSARLqEUBj9fEp1JLZfPVHBFDAnm3RocxVDHkchfcpb4rjUDKwRKmS",
  "key21": "28iEcccY3j7FxYUbbuKdda8JGDVkFCBAzJr7cZSz4D34tjVMJBCN5G6mJwwk8KRe5FHDTqxcFQVKeEXZ3rLP2tWD",
  "key22": "4dfa8wfuiJy28WcCfEJLzbgZFa73CABLew3Ro1pmjSubLz5YNxE93pEQgNNgkY4ET1JJEaKZkNBvnn77KRAsiHJG",
  "key23": "3zwrHk4VpwM5nxeCK3PVbymDiEjJyW3ab94JER9qESPGwZEQvjRuL1ShekRVxJXWFHkAVNJridvDuMRkgas5Jcnp",
  "key24": "4tUVq6HpW9HmdErGhA5wUvxPRkt1xWJ6S6Ymz3T2XYTKYZLSTr2brmwT4U7LPoZcA67rYkefi3UVZyWZqTUFRXX7",
  "key25": "4JjrzNzUKaZxRAJUG18bA5tdJ8TQBoqXwitJvBYWRX4zoDBfKzziV7vju2GaQf78KeKTnXF7xR2FWSc8eang6SgH",
  "key26": "2jCYQjnYqsmDChzy6uMje8jd6iHpgEggqVewLLHwZVpmp3h9qUQMk8sVJiHtx3GTMv9xvbEJLLv9JHm5pynntvw1",
  "key27": "5i15btbtDrSV8GQ1vxP3DPvtgyqZZzHfHfNSMPPjDWSU2vJCTXJARgJ9ers7JvWzcfbcjqmfS1NAa568g5U88Sbo",
  "key28": "3A1czgEZ5Rn6pCPFkCCWuRhnarYVQK8gkHFwpcfoV7nFUDZHzp4mENjHm2aQpNUrC4dLgzjfCTy1CEqLeb7YiuQw",
  "key29": "5mmz4og71eT2et8YXP8PYhm4rSFHWFffTTt8mZW7fkcWjFw5t6mC7b7N8x8HHte1NmfzU8VD5jxUqTddmnziAd3B",
  "key30": "37rAv7ZfehptCLCPKiYqWqUW1R2F2F8gUTEZt2eq52R3rChH4JBdYiKopGnjeX9tgCMpFBUxcUipPc6M53JkCCjM",
  "key31": "5U6Hyt4wrAFw5wZTP35C3V2hvJ2PKc4fEdVK2F7zsGiPFHkQ4Km4uETBCBSVAXoZLZfMfAvpUjzbBwmBhP7aFZpF",
  "key32": "4T4RZ8Ru1YCfcYvrbhX4gDfAQSRtiJ67nBd4dKwMpbJjR9kqsFZMLdcsFkvcKJdVWA59tUkfHh734u58Vwk7ogin",
  "key33": "GZW6RtNxQHqD5LeQYrBeaMT4WkpFPSFq9PXVE18jKHwNbmksKBR6HmwxcTfYNTNEiwiZxQsdnWvSMKw6UjQgjcP",
  "key34": "KWzPEumWm51wYwg6jFtb1q4ryriwMn4u3H4iuSr152GgHEqNRAbxPutjcF8JEdzTLznGq7HDoiDa6XyagCXN69T",
  "key35": "3cFcPLDWB4dQP9LUkAfNqQAMZrTn7HpY8YM3eTmm2VXFb6sjAbVxYdMFp9WyKMSdyCfVWTL2zZmTiAYp9g3TJAY",
  "key36": "21vRBrYpD5J9DGo5Lw9Y1ncDCJvgQv9VgJTqcfy48dbeo77wWfX3caEB2xRhnPhbpE6PdJVi6eWhCumtSzMB7ajU",
  "key37": "4oeQ5DqfHzh38rNpYqjP6yZDDJyA5shsWZk2aYbyhtCu6TYAXj2reogoiMb1JH6fHPo8vmUWFFSKkqvAqEJw8FD3",
  "key38": "2DnKJzk4yj6hnR3eRdRY56PdUzCsLtRqZowXavrrDNfWHuRu5qPcEw743CwgQ8CYWQs7FqK19MqCfxVi2i6yxm14",
  "key39": "3hFsZBKyo7A75bQiE9LEhgePd58LWFSTku6H1hoCUnwVjZVjajZbtixrxijeSbf6nH46tGtixxmsoAsTYMAmBNos",
  "key40": "4LRQK3S9vk4MSyXczfSxbMyLbsB6wRRqvPHKENCocvn7p81btJV4DY41MNHx9j2GNseKGGpsgz6zFWw6me6cGLUc",
  "key41": "3unuvJQuUsUDMJvt9SR8quQ1L6UY7bMLwJtjRTJKFTe9DPPfKjvbzH7pYhYm2WqyPJeBBWnEAbSnQ36MdDwdP7Uv",
  "key42": "3UbeVc7n4RL7t5bb73FuLKsDM5YrH4kLtJNB5Lh5Hnubsv668YEsPn9ttu18jMNE2BXXBf2jjmz8tTdaMfkW1SVE",
  "key43": "3rVbgY5w5qUNqBWbct2BsWFFbMN3NGr6Ww73yrdXub7Ui6eLRCYs19A6fT4ucP1sStt9BEz1xx1f7fBfLkzWxpXV",
  "key44": "2Vj1Qqr1ixxTUvPLUvaJRmfRHKGPtrRwHDFFYipjLkZoirhgWREuSEGWm1oj2VeHwcGZraRqbNBNPj3LP7edVhS1",
  "key45": "5chhe5DGiYEf7Z8ADzeiTDJge5XzP2h5oeiNWa2ytb1dmogLeHooeBW13Bubb5X76xDixnb7yL2TaEtzQCfui9UW",
  "key46": "38Vx6EAxQFpgb8F8sdrmkJBAdyt19fSqQigKvDHKzgiiGPcCPuUEdfVbh7oSxSQpuA2kP9nUpLKSuMpyKo4AG4to"
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
