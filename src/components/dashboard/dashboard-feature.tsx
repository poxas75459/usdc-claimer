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
    "4MAJVbGVkRYRhVABSbBv1dgFxTsMSrbvuxqpnwbpwaXHMQk727kGSJ4XKdMrsL1bVq28yKEFWUnH2X9f626xBdb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66nC6inod5KywKESNezdC1L5v34q9NEnmFJdsGTJLf4vVXhLXqo7L5BR7ioYScWPXZW6Y5HkFCJN7akXWjsQm5W2",
  "key1": "nurvq9FpUaiDrcQJnDYxbEsxwtPfkWs9DGdXgkZyTW97PjxcfxFCxcKByit6b8MsNKtg7y3uakmX43GMqfuRien",
  "key2": "ecfgHnHvTUhqqKDiRLTmAkmPtWRQN7DNso3RJrU1DDM1eedM6B436fYudXi3WDyCRxxD2UYuzuoEdb5oQiQqu7K",
  "key3": "fUKWhbcYcaEXHDS35XgdtnJsscnKGH6o4GKdx1Z5U6URPQJrgHT2syHmgUCbzBxZNtco3Wh5PixH4RHEZyt7HA2",
  "key4": "419RpBgM3DkrTcAKSwo1rgGN1LajSqopkBaWuRFdQh4GKJkv51cSiTfpJdr1LFRZ82RWdqkJP6udHgyhVTxevqzK",
  "key5": "3iKYhez1HXrhLFkTazmWdzT33rmZaj246EEybm7SMrTU11Xux1TX8Fxy2fQZ8ofT9tLgR6qfLzLW3KtdfEhSSnXE",
  "key6": "F86RVLUV2c4VvwUWcCBGqLz63C3FVgRTA4KGMRzWBAPQHAKXD95CSNE96UVcsHQoCeT4d7fETtxm4wqaAH1r5vu",
  "key7": "5oeeYan4hojcYfLaJiGDYZTT8TfZrPiKntNvf92yGLdUBZfMTtrBq7reZqLjoVkPGMfZMJVCWHmu2q6g6JUqPbc8",
  "key8": "4g4XiHgwcL76aH47MiQbzx8UiZc9YaauL565c4nWwwaExu48ThNDxkf3TVnXKPWbsQNFJeEFVQvPLUNYLLdcrhn6",
  "key9": "UGkxBYRHTrvSrQ6QD5oqGxLrKZegiHhPqBL9x8CnLz3XxVsad9k1a32xaoaagvRTYsovKHDvNMxNHe96CxkA5Sw",
  "key10": "5RwycAnPFov9cKUZ2ATnUaLgyT2V5FngkYzP9b7qR9cAr83eS31PxmWFqWRPVdcdoDgaZMZau2hTqX61Hrin9c3s",
  "key11": "EmEbU3RBhmE1RRZY9KmkrMYfaCGRKXSwXyCQ7MpHh5uPnHTraLYbJT4ck8FJk6M2pvjLMYevxncFPqbJkGtsxJ7",
  "key12": "41tEk2AAZxY7j8r4ig3rW5GwPs8oi76Aztu2Z353UcRwSudfNg2tJjyDFTvvKigYWzLmfjsQe3jvyFpFVnm4SXtU",
  "key13": "3oLXdMTQCY6z34MKp8FL49i4oVdB7D57L7zfXZ7KRSMgfXtPFMTv3SxPa9w2RCnPBM3K6gMH62xRNFLNaAWBPy4X",
  "key14": "MiKyyhkR6kYnLx1GmAcJ3GC1MdFmPP8irZ2PjiouUBFSrS6EFQTjS7NrpSpQ8ZpTWtoiXPBfL9Ucx9Ptq4qTpNk",
  "key15": "5K2gih4YZ7GZ1fnHPQEgrThVEvGN5dHSy8ta2yfxSKUMBci4qdghECy5ZSTGNWL5QaH91mc5aDmS6bwsEAWEjG9g",
  "key16": "26J2pyHzngyLBqw5Znvq9J3ymrJ1GmgPH5F2tn2rwuB9mKuN1s9ubwxG4jSyP35jkCXR6zPopW2cMmD5p1QenGZT",
  "key17": "5zcGaGW5hbhZbXUGCskp4aBone8eWxLhZbcscsYEFtyZwhy52wu2K9pLsLTQUYfEDnQ4Ke9XUEhLVgFsNTWANxv9",
  "key18": "5YgJTLEg6ydJjcxgsHmEs1noQ3bWA8YsVRjJMfN2pL36Wr4pEyDDcEizSczs71iVNQ8FeSu73FKQtZiwUvfARygX",
  "key19": "2EPZxYifGdavfs6MbYLYtYsegQJ4Rph3ogB5E8zzbVfHd8dog692C9xar8kLB7mBBp9pirNnHdSmdmUkhoMehpqc",
  "key20": "3sSqbF7ZnRQGTE86FY2LwUHbH3TMV7hZrEZHiv7RKsovyxY7Tx7NQephHnj8oYDY5q8Dmadu269eueY3KY88qvC6",
  "key21": "wyDQyy6KSyQGBMEjM5tKFaP4rbogqmXBHXs5saQnTHaB27EyJ8ccUBSzDbmoRFSN2mKaUUvcfdj6VEbr6DaCX7F",
  "key22": "z3ToFmkX5uANv1JaeD43wWyqXu8BzuKegpuQMUZngU8yKuvLoJtE6jkWGQwLmSigZAgM39xePGcctWFbgMTbvvX",
  "key23": "r2cNd4dnJwbeDRDss9bMm6yLcAxUYdctTLKpRT6Dou9qqFS4vKFNrNGEvEUisRemaePEduPJWTVhH3n465bWWQp",
  "key24": "21wnUdrcBSbhEUeE7jrSbh9QFCTA6u5zAwrvsSaAfRYkXnPQgzaNHdx216KmMby8xF7DDjyj6bTsyNrvdVPD2pKn",
  "key25": "dB99v96Z85vx4uYn8hCr7wWqHYHv2Vq64wknrjfiyEyy6Hfemx71ejS55iaahn4t8UbindNVpaJSnKJYRFseNCY",
  "key26": "5wvaoQ1ZGD49RKnFWDbAUQBAe9oUdmLhPwudLgPEGunPxstYz35pcWtqQL88PHrHVPpT1DLv8yJ3SqLHytCmfbbK",
  "key27": "PsFSMaCoNw7q4Fwz2TmFP6cmk1FjA6Zykg8pRHPw5d8ZykcGvL8UoFHcbTa1287pPvp22p6TR2qWAsMJZnW2Hk8",
  "key28": "7FcCZcX7eUP55f6PhEFHDrL8ELVHxfZqpkyvqwUCcKTek7ay1gxdCykqf4kwNn3XndWygEWH62UMk855vU7J6G2",
  "key29": "5GFPdfFhEv3PksfJKXUDBCg1FSDyZAnwMVv221XQt7AWgNaaYGiPJWcDjvj86cR7pGAVH25ymC6Mmb74FAha2GT8",
  "key30": "2RgDcz2jiXQs2p9DUG6X32a6GYQBygzukGoA1H1KoZuoGaxCS1Wed4UR1yGTJMzNaWHiU1e3m61eVFuRba4BEvbi",
  "key31": "31ubRXhCQaqdHdXwucghQFfZZ43ZVxNY81rQYah2oBCV7znUHoDP8a1VikYAcntJ2xQGdtQnaXXgebQovAXTx6ck",
  "key32": "5CaUn54xCzR9PnpXa8BJxwiBXfRhUgfsFmZMy7L22b7LorTb2ZU5Yd1QW1vdLoUdHMAPiVmiDBoosVHuXevG647Q",
  "key33": "2M1EsooMri6qGAb8LEKbFRGyn4D8bExENnzHv6fzZBrhhtFwViExLYcEeaiKXLjUFurSZmJK3WJs8WuQ18zT5o5a",
  "key34": "kHMggLcTiLFPs857R8eNXUQaCeQhDiHc1qFrALM1qaEzvinFsZMdmWSTFbKfZjyxfm3poZh2KpFVUHF1zHzUhVu",
  "key35": "4yR1q8RBNkUmuweCF4Ppj7Zqy3q5f7zuAMLg7jrPg8F6zcAmGepghgfgw7aS6zExNRtKYJjTfpL3AR7r2zR9kv5",
  "key36": "3nh97F71YtgsCo8hTthLbfp76TdEZjeJSBN8zvXiPEGoNLDvKsov7isZNTqyEMds4bBrb2wQYzUcz5S8bpcYN57i",
  "key37": "4ocpSExan4mWoB9vbxvx7vKsERWNjrKYHJLjp2eVSshfwA5SURtWwcygCor8HbTZ5vmEMp5jzJkyCKqBnwCp9yNn",
  "key38": "4mitU2XtnmYb6TMkgqF3YpjMxdYzwMVcUNmNhHcBFuYeYeALqxseZ6c1Und32HsPHdyQmVXYDLogs8WceYHJh33p",
  "key39": "4j4ewL4Uj2ZY1V8XnWEnq8s7g1RpsvnaQxtDM5vXsoA7hd9NJYJCpUA1nX4PEUg175SN9fiZmj939DhaWVEiHVTC"
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
