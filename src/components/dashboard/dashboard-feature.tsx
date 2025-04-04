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
    "61cAbRB2SA9fVGTUfTAXE8BnW38LsrGviQsfUd3PnNBuXSZML1RYBPiBNHBrZwtc7ACoUpFmyATuPJxefzVifse1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F5B5XUY4QqU9gSnSWAstGspWH3YZgceMFLVbqz3g6WEcoRTGxzVeV6DkDbWFCcmB9YQqzR6vjW7z25jqpW4n7xz",
  "key1": "tizXGywciPACCvpdBnNtzcVdnfXMnPUYpGFJM65zc2zmvuj7HWLvVYo82Y9CFbrdcMAD9w2DkfsVprbVT5qH7uK",
  "key2": "2WsmceUTxS9GHQDPoqSLocDGJVHc8B4tZjYiK97t7jFzwk887tZ9rcu7N6xQ1Qoc3W7xvLorcQ38Ws2j2iDhkBYP",
  "key3": "4BwWUMYh4ikoWz9Mk2zfGmCXbjErrPMPohHG9ok8sErTW2ZsXGhpLGNtwUGHNQLh758E9yjjecPaJeH94NkSMBUG",
  "key4": "5tFdrEGtPxc6U8nDosTEuuaqHtVV8eug3ZQuwkD3eRzQrpDiFoC68F7FgHst4WunPPc1KiPthVkQkmU4UCzmzuDz",
  "key5": "4zjeNHefoUYWFLr2a1fPndzK1fob8tCccZudJMaWogYyGvfoX7P7j5dYjWQrHuZNhAn9FQXcvdQ9H7RfwfLW33wi",
  "key6": "R6Y9WmVxnHRtPa8tRS3ALeEYC5FyBLjjSuxY7KcesCSJ42EeW8TL4HRNCZmGx6yrmFwb1E8Lhq1aV7SVQbRxMxG",
  "key7": "1B3SqoWb1ujnFa5xkuU7v8Ufn4W6kiULTRnPcugFkEXpmAEZ2GWzUVe3B4sQ12qsSbPGySTCWysS7T7H5wDRpxb",
  "key8": "JTAgoGePbiTPbpLg92T9pqYMu231nF5iyVFCUG8MsUz1iACdCjSAmj9fGVfQFRj29UHtZTywsPuYu6mWMAiK62h",
  "key9": "5UoFTcP8ZZk2VKNLwz1dom7LMhp65uZK7RWoLem9Wcm6sRoxjAWqi8BMviuFaLaps5atTUvXeiQCnY2wGTzTfVqn",
  "key10": "4uySwQrEa7TmqXYX5PBX6BoS34eGVpUPcdBxUL1iAEeceMwfbTte4fNTxtkoG5g59NC6KsQiRVA59U7sq1SeR6Nh",
  "key11": "2sPc71BRgXpoDoR6EbhK77kA2LSPEbPXxmH4vpr1DJCAykpheZwKpHvQwCuK89ky9TZ6nxEBYPVyM8wgRupEtgjb",
  "key12": "2XtLrW5UHTZpGVQ5apE6LPhaNXYhBmMf1DKa3iKyAj4LeZn8kxekf2xrctB2LMMpotXB6Uf6uqmvwscbZoqHXyfc",
  "key13": "48DacjfgC8fdZbsDvXh1TPL2NDyjgF4vLD74BH7jfPht2CnyHDSXEiHSnKPA9AXvSQkehRUDARH6ZGmjBzoHKhfG",
  "key14": "2JZj2hhJxfKTcnTXxSVBcFo4t6g5c68p51jMaVW26wzg4WArbTu3GZ3viT9qYPYyrPbVQSb3NdK9eYWWLmpEe82M",
  "key15": "4LDf8Npkic5ywYbrpsv6rC3m8MSuQYM8dx6RKz5G865g5Huc17JLJnaQVLHw3y17rbbr4fyyAHLK2yp6iG9BsBnX",
  "key16": "4Urw7eQrgCTvb8Sz3SuyPUm6zTb8gARKnBchVSTQrAzDe7FYwrUmkxCCisf7eST34VrkLjNybv1rZrKMpkkfLBgA",
  "key17": "4k93GKNuzL41Bt8k6Fspk4ThuuMkQT4MTxn1yibpXHEdHL7FyWvD7qedc88Xmd6uKw7gSq5Qiz3coDn8UmoQLGTL",
  "key18": "5q9bk6mUQo7ZBdT2hszG7e8yGZMkFS3PrKbmKMknDoYS5kFUCdbdSyqbyi9saVzuy9ZwUKZaLXjput3mPgxp6rcZ",
  "key19": "3S2q9pbWYDwc4tMU4J6nintxLbAb6wdXjjgQKi34hvwpSL2Ffc1B71P63r7pb5hyHXce9V4fGcu1Bv5LZc9KtvmF",
  "key20": "4QaVRJx1Y9pHwwYmNeoK34kX4ndmPa28AP32kkjp8i2a4G2ZUfjAPJz4eYsZmGYPFMyMQkMrmAEBK3gv3SXy1sP2",
  "key21": "4dpJ2v1a3cgof3TUU7ipvr4W2Xp962KXvfd8pN4uGbSqGgnDmCwwwuxYuBdxuCwxjAtJ2iyLh9zGFZ4BJ8XUm6jT",
  "key22": "21tyrNujCqo6FBzPG4ZPtwJYNZchugXDrRehQv8nLe7JN6Vp5CNPzy8gGDo3zyRVTZc6u58bCjCrMzd56h3kjS9Z",
  "key23": "35jteXXi65TKqCZ4dpUQtDrgmhZDvfhVmetbhXZpcaS9kd1Yzy8NRtsPFbDkGC2faFJ643gsU32twb7jcBoV39NR",
  "key24": "xCP8ycjgXBoz4cEkDdmvJTeo7QNVHZUGURaJjfa9MmsNBVjBnSf8mPiw2ymBQm5AyQyrugdjjf73Ch2GT2TbGfz",
  "key25": "63KasmjVMdXKfnw81Zr1Y8moyoqax6F23c8Q2VJFryHg11rYWGsTAJR9saSCSpBd2yXm63QMVELf36xFhuKr9k5s",
  "key26": "4daeBYcVvdBWweQtFrRzrFZPZf7aYYHtSNmmitNrgUVf3d4fM9eoHrbKgdkyzqqSYc25Af7XfgyRpXSmRq5ufcXJ",
  "key27": "4X9JXG6W5kjhTJuEGNbTtS7LWaUyWYefD7JXk4AzLeJ1qiEMr5ztA9SukFkuznLnQDhVdB8BCJN1fTh8RRNJbn3L",
  "key28": "QhTE5PCqs3vzZgA3ZsRjCj5fPGPoBv7JwZnnEhx37am4uhn7YLVCyHzDAZ7xQrLBXdeZebcoeXqgHzRPPLCNNsn",
  "key29": "5tJPnPH2cKMrvYTNsDEmUgfdMixwkz2KUVUJhkujZH9uwhubkKFA1zBscFshwkaGmsbQCKB2d3RLnKRYSGDa9tob",
  "key30": "2437pPgNTMaihWFTDk6mSEXF4tDaNawFRQT7krBxqF2N2sSj3akjbeG8i2Njp1uwE95zCQFMyV1xJxxHA6vF22nz",
  "key31": "4uoWRi3BFLctCQY11tvdCACMgUwrjz1UhUQXbTYG5SPaaNKJMg1dXEZ672TpHnFgcCrPWgLNWP6ciFBontfidj8d",
  "key32": "Bi4vSz96bCCZs4nif78qSNVGrsVA6voTUch8mZaKqrJTberGThSEtAWPU4sJg4UuteGykvAGYPbfUeo84HMG66Z",
  "key33": "51BPMVMeJybwWqKmcFDqo4CQ3roim7CExz3BkVgrbLbnxqKTru55vMiovSuocWRD568N6JZYB1zpdkExJkuqsaLT",
  "key34": "2XXAJxsk4yx3nCd8TkHbBL5kh4Lc9BbEuaL3rcJhEXekXgtZhP8LMRr2duyfHTy1Ck55PTZzP3YDpfzuoUGC7F8G",
  "key35": "4k7DayB43KDuUsu2MaNC1JWUN3jViPbRQAFuAbeGXbpdCUTNyvk5oPu7Wc5FgDyLkWh6c2PFN7pLWAsYfQs7ye1g",
  "key36": "2hJkSqxeQCMVGhR21wwGSj2typvatnKFUTA4wxBpCrszmV2T5vR7j7Dw2BaBwVV7d7f9jof3aRCE168TeMG4W6N1",
  "key37": "3VothSyhCEkgWBSARgXWkLBJv1SktNggRQhjvBfXX7bboD3xgS4P8dFyMBEzL938D6V8wY8FDK2jGARdPQMhWgsN",
  "key38": "5ssVjXmeApPS1Zb1ksrCJXhKWUiBXCERZRrXLMXBDWoYebfPgrJTbx5LEAaBGHgrZxJ73JLxZ9S4PCkvuZa6BK82",
  "key39": "57MHQKAKWZj3o5bSpaGMUPv4keNpyuMk7fELivAHuaDocWtwbF9rRRQfPR1dfQwzfTTZh8JbPGt1HqffTGPBYBpn",
  "key40": "3R1ajP8cFF9Dez2DWZTTQjoAp3Ah4GiSy9AQskSjb3BgJdGHE4GnWs6Jwv14v3LmgEet7EZjLUy33r4fTymA48RB",
  "key41": "4Fpcqf8RZTi7V2tQjt1w9CgKzmNsd9Yix3EfFpdPFMVBMdQwfUMf8YAYgMhJg1b8exBZaRgEUszJAsMLPW4LBRKv",
  "key42": "5WgSyV85jzEHVcX3GDiVG2LizjYMFwE8ismhbGRtBMHBPoQdgLmg7XBnHLfmN4f1po92LNUMP8gZp8MwgJ2Q66r",
  "key43": "48CpHsT59weR6G7Hpo6GYS2FZAULhq8K9Bqia9hdMz8rEsWKMV3SmUBupCFAMZoVFLfWGPHeM5gMpiT44ypVAEUk",
  "key44": "4zeV4ZAqyWBS2fgqvAtmbP2xczFwLafvvARWyjRbTNo2JkU1ZoCmcTzD1vFbsr44DZGWxDN5JaP4abz3ThFyzZvS"
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
