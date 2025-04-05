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
    "kPqCwRqM9B3yHiHuDhtD1FK752qUjNUmJLQzGoYwgMZCA3o5N7krg25mP6612VmmhMFpQMfmik5nNrmhv9DZmYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y1Y1Vfk9uuzyZZqsPGLZA3Vrcy7LkhehpMwZzShNkTPjjSXA5fdnuWYehuYsmN2Hj9BxrwZGgM33L7CVyRh5xjF",
  "key1": "3sYRmrXToazqE2SvvMB4oZCfjBiR8fYHg9q4H5wYCm4JmDiwPrJCAphVbcvtPufzdU65cGAcB9oChwB8yfea24Ks",
  "key2": "5ycHnvLqm9qNT3schp1DrrT8ACF3pm99yDp4hLPutjAxWARsBARsigfNCET35EYSVHykhRgmgAnbaR2fmHp2c9Gp",
  "key3": "3fXUyMrMjm4tJkH4LeYRKNNuoHq8DksrVN6Gr83CL8UGq3TkLKk6HYJEtu8Wmx5xc2DHPuVYaFoZiaQzLT5HGqT4",
  "key4": "5u6CHFsKBYD172pmQ4NT9jnjCr51FJ4TGptQgf7MvoTMGd3mKXR4NyNWTrm2HGeBPSWB3Vp4Tz6UaJ9uaDc68qht",
  "key5": "5ZiwcNsoFaRuoWT5LJhcLigyueDBXVx1hnZ3Fr4y31svHdT7ckoDuvxiyNhyvSzDKxtwDNndGcSDd72WZk1TCwuZ",
  "key6": "bmf5UKWDZRbYxoTPCjX2U1DCGUfG99h2YaPr1oRnkvRHHZSknpS3KJt4BdH71TaanS8nT8yFZsFMytr5RvCXags",
  "key7": "5AaPtMiRmXJCeyRczquBPwor2hJTqCvrtUq8xQqjjDrTp81pgyUNQHYmVwhZGMyBNxEnFcZeouy2dPiGeiWdQcf2",
  "key8": "2WAjWcvBEgn68pCUjK7drS4bmMU7vrAwzYLkVVnkK7i9hUL1tLnQiE5793tSTicWFo6HUJE6qZqEYExZKkk48XXW",
  "key9": "K8TDauYR9WYcACyjVz72ny6gEbBXmtjr1L9xaNc99jR7EKHjtdptwfm95PbwqeBXHALVjmpcKAzTVq1NxTLk7Mn",
  "key10": "5MJsPaCBsGgQ9t3pxtBrQVDkNDYd2MFTx8K3zMs3XfFpZcBDvgn8NFbnvMwDZREAZjnVfnXGEkGasYDP4oh2KhJo",
  "key11": "2a79Vw3HY7FcWg9QkQ9zjmQVM51KCiPHpHEAYGovbSv8MERnY5Am7RcxQBg9hkH7BNGmFRAg1ZJTnZJqaN3nPWkf",
  "key12": "2XuCyha6tpwibKUJBWTjd4N8wAHs1Nz77b7z5nDpEcTFR4EFAcJ8XQp5NUE8iYCHBx6jG695hjMBadRbWSRUgdkv",
  "key13": "2NG6mvZZwZUCm5YUeCoTQneWQqy25a9GCPTb4xSGJbazWL3xpxwHH7NBHkYhRXptpaXzCGqLFufST2s852BuYUSi",
  "key14": "EpCDprJX4KtTbm8jEaK3dBM3rpjJjSR83UMVEw4RAGAGHoUVMgd2muXfgCP5vagRoNorEjFLmjKDTg5tTwjJqDy",
  "key15": "6wHqAuXt4NsPiiQCZ4buj2wN4zJ3qM4CfGSKw9NunvFN8xF7qt61g7p5HGgvTx4eX7MXYcdqbwYje5VqTWeKw78",
  "key16": "3XFem1S8hKYDcx6ggNznX4paitdVB7v4hbV6dvtx6pUYK2REhcVMGLoq7oY2aCz7FSgYAwn379BAuGeTaEeBW6Va",
  "key17": "4nXCR5kVh1YtLuE5Set6GfkL7E5VmQXvv3ViFm48ftJAa6o2QKAHFJ7tZcdWUToy2c1Y96abzuvkz43U6RUcEDNt",
  "key18": "5GFywdcpYSzWpdBhQq3n6VunfWboNsx9Azb2s38HsEaMma7H9sRi6LGpPmvYn5epQZv3WTV3fiMnqNT2K4yX8AqS",
  "key19": "JMV4RpePfrqEBaA7bQtqCrWLubZE7zEeDuuSCUVAVGGMJcwEwnu3gRnR2XrassbuFDv4JJbm3HuzmL4saJ4W6cM",
  "key20": "4dQAYiKPiuz7sNPWPpfmtLjVw9YPD8vQSs1SahKbFd2taFBXNcwzPR4mS1PcX9CzxXvYk3KWqDN92JDC2oUZq7X4",
  "key21": "3vkS21VsisohnThCi3MmGpaPGtdNDkoeD8pkxivuZbcHVSLt7UNW8Pz2u6RHWG7iiwkn1hzR2fHZWN82Pw1c386T",
  "key22": "FxTEjFucNmZ69fHeuxpGiqE3cRozzdUfHhPhyeeefGBoahxGvn4QyNzVkw4UdLHfujSKMQQf9Qqw7nkcp23gPjc",
  "key23": "4jp4978rJu1fv1FkkP3BKrQK6MNYJg7QwRw3HSAJBtagZ1FYS3kkF7kg9SrE7EvHjPVwJCA5PE19j8yQ248iZMM7",
  "key24": "uqK57cB5YPQ7AyfeV4Y56v8S8jxsVtYgDyX4XRLqPiM7Lh1on1JiEBxiy5aFm3JWePQR8gAyxuvReHX88JVPsND",
  "key25": "4NvKy3syqbbJMox5oiLRXSBvFpcyYe8ddn4kC27YZhSsVBMWTHzRz44f9g6tfv6vzF42jMn9n1bdN1ca8NZ8vZkj",
  "key26": "5Cv34566KJYDGZ7vHBsodGebvjBjiza4buV99wCBjGLgNxwoB8qsfWdvKYohRzgdjhU1qCu6Eg1b1YTfd3ygEWXY",
  "key27": "5ikb8vcekTr5VZJqA6SKRWuiBfCqSiV2mP5KAE8QQz1vtCJFuAU7iBXCGtAWkSw9GvpwxyLkUDzE9pvSjuGUmytD",
  "key28": "B2ywHobpMsUMyc4n8RR8uxHVEHxUsBp7mSv6PoNwPPffTjqjNUqprc5yfNz2gaLvpqEZ1LBB3Gpq3p8kBd4a3UV",
  "key29": "126MYhm81sWGvyoHhjuYesDNCb8YWk2NB7EKXNkkWoR6XT22TKX77KaLqhP4ejEKxjDpb3iZuSULvi6DaxdBU4bS",
  "key30": "9yhM7n99orkHjVVXSJdDYDkbsctwCcxuN3roE6Bf9SENFwZCYLiWNqmuhZjpg9LkTchwBjZxBmM7tfJMo6RB5dF",
  "key31": "76R3aCi1vmpBWn2jdDDdQmGJisGpDVU4i5fHdawevMuLDPw3BqpP98mbAwAJNa1N6Uq6ufkabMmxeUcuzDBnzEq",
  "key32": "34LaNtxb2ZPsHZtLbTczMRptpx37rt6AtsGwVTjR6tZcgmGWrQWPeqyRyFtcw8cYYCvh9GejaVRHZqqhQFF7qfDv",
  "key33": "5sP8t1ZEaYxXX1SKyk8vwy73k6wbvHxZ3HETJDR9g6DqMKKwCx1M8jTcuGjF8eCTh16CRX33u1K3tRutx87KAfwD",
  "key34": "LtHZutZWqbiDfVuVokgk6LHqsKdrbbmQp3tYNyanhnL9Xciba2bh6KxiNboPZkHyZpBk4yB9ERmYebRAm3VUJD8",
  "key35": "3KneMkWwjQq3o56rMnYQD5C8AxQppzfUJJqJ3EqLHbLy1eFvSkFGpPkRxS36LBy9piMVUo7azrDfqmNAiB17V7oq",
  "key36": "59iE91bDxtKUCnkXcRawST1MCXTeuJRMvvuKYKqhHkdSez2fZ6U88fkShkriLwHnd5Fj4PrY44XfMvWobB1tm5UM",
  "key37": "2rqQAf7WFa8RWTvw7jkooQQMGXZEJf8hpeh9GtmAE1h2e9RzKSmeU26WYvQ7CUuFksvHqMVenFs1xzGMuAm3rtbk",
  "key38": "3AvtTRyNkJ8Q4Ptm5dGVmXitZW2w723vA2shbdHe2xsijeDEUhM2YwsXJ2HRGQuQ9EzQ26NsvbDLS8WXVG3BjAqw",
  "key39": "5f7sNLGsiNqAfsMxTaqTMuZzQceum4gU7Ps6bBny2qQ9wn42st1PepjbUWBxq1FGGTNXFEusd1aCSvjgtZTGJA4f",
  "key40": "3r4RGnZiaKXp8WNeYD3RdDrxUKK4XJALb4WAdZ2MDWLP48234U9nePEM5uj9PAgU9HQBYxygqJNJqCbish85WsSr",
  "key41": "2Cyt2W815uU5MJ4BFobRGwamfFPFtCnzMetLCu5MKsv3EsQCcgjqKFQhRcTrMhgqLUpkfs4zTZfKW2TKYPZykwks",
  "key42": "4KWQAUaLSjbTwyx8r6Ph1XxC5gTShbHQy4Fs1w8i6xLD6QSA2HTKVXG9TAAPfDfg1RtdupULnrvJUbYFmo7x3jU6",
  "key43": "66rpKatQYPyiabjTFTEMthPT8iY5ooNuwJFdNq7vRhz1wDftRs1Zoc6Kq2m4Dsti2j1DBdJ5Da3HVPoD2iPyuF2m",
  "key44": "3o269DZvYU3zvixdEHQehK2SZ2dVJSugMMnwWTwLRB3xjiAiEw9mKprAs93KxGkfKKP8jYBp6Li1PUqzpd2aWdJ2",
  "key45": "45QJXw8XJFfphmB7EoHaJ54FW1VZRQwbzRfu92vrVdp14hhskXAFt999MyUfHeCa8cvs8hTqnFcjAnYAq6BMCGfA",
  "key46": "3x5aYPdWHaP76zfz5NJno9EFi9fy2eJpBXCVTen9uRSdNfHcKXfUD5XK6udyTF3MWVKJ4RJuXeT1PFUL5UTAaHho"
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
