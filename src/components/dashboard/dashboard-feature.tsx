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
    "5KEtWNbU6kYWJ38RgMbyMbSDn9oZp9X8As2jZ8csZakvyWi6ptk7wbEfMkcSXajxuXzEJ2WP3pfhf3XrgoCfnWXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KnKpA1JhEMnk6esuJFhVkGti1sAa5iy3keYy5pj19huGPvMEGAS41ygZi5evmC1Wm54S5uEa872j7MeW5Ci9Mz6",
  "key1": "2q5czaTK66s9LEwHSUwbDGwgdXn3nE1jgLgbFFsRxQHN6JG8ctncBRiQF2gC2x8QZCikKVwp9kvBAJiHqt9tLZzK",
  "key2": "2EYXhoM4UdtRRKnGB6Yx7oVtwfDPXvEhvHCbZEVsjxZo9BsFV7ck37jdoj9KgWNa7P352vQZonbPkmPcktFuxEHY",
  "key3": "2Y76Cf4bv3DTNg7qKuQEZJ9cqUdeF9ZnZPyk1TCXzomrJqdGbuadbsswwGHCQrCKQ9mCP5sGpRqPQW9o2toKDFFV",
  "key4": "2ThmVmTZKpgeuvn97GAntm72H1vo38HF35kjoWT7NUta4HeTS1WUC2jc6ZKLAZNZ2xJ9jDsJtPYFwcN4nvmGoJ1C",
  "key5": "3iUbDzb4GNnzMn6721FUN66RGhqpyQdsHKxKWiN9cGPE3EXvMJPtjEgmRXVQYjCnU7AbTeAQHgUynWxyaL9cQm6w",
  "key6": "34cRXi8sCyA8XgZbao2AvmMXgriUaNyvc1UVAxHYn5ZT8TaqJGeyumXbYUzg4pLfSJ2uz7zYMkNnHMxTjMUUWF9n",
  "key7": "4E8WCZB41TXesfTH2uxxi3NX593xbGKpCEvSoXCMVpy1aTrK2FYxC61bXFCQ7Ud36D3pkxbUq3WguJ14uoSeHUif",
  "key8": "4ar33jjZnDXsN1CzxRoG7bE1imd8bbVYMBWkzVPURbjEFBdaAvFxY8f83kqpvvTtRpmSfxdBTcZBsV5ForF6JLaU",
  "key9": "azFBXRWFcmZfHk8kLM6aUQ7DenskNa62VQbkQdZzvQs429oeKpUcNtUP3X4wTD2EEUyNDEBZRpXwpXfpzZdcRop",
  "key10": "5um8DaGVth1DJmXbbr2YRiSxubMxnaGtfS38iGbkwSriwnqAWYfpdZRY2VZga2LRTpR5ybpXCkMiAmm2EUQgE5F4",
  "key11": "KijXLzc9iBZj8Uua3oj2uraaX4j6rRtH994SX4gjWTPya3aas7ECfht4Fje6j8gTjMn2Nw6BQdvnKWCi9PHop8a",
  "key12": "4S3m9QMrWayaEfpzZvYBsTwLtw8eun27WeoEeHLxcLUtvWBBxQ3w2RkH513HARiv9GBtgjBzvEYj14CRZNbJdLVe",
  "key13": "2b43QYZE9x6snzzPw55manAnyYX4XaYG8Ee1VPL7viqMh1btgRdjUHYwHp4VMFffDWHEf1rvHu7f2nUQt1cvu9en",
  "key14": "5QNR9818d1CHFi8jTmeVkDirYpbZc4ZcR68nCYkDZL9APcwhGs9UjodUR6hhdwf8d36ziR48wSGDC7k5xr8qSce",
  "key15": "5K5Ko69Q4d7huAVV2NqwoajtUFNW99RG73vSUv97XEji5RVyQcWeJPY9FHRozFzTnFDowaXQUaGvDiQQjfeuBE7u",
  "key16": "3iX7t44sfFxQatQjXgwR9dve5sjdMCHEApdq7vBC1LeuRJSL6UgySdYnp9vwAod8ZpMXExAQyp6oELq8CAJiCdyh",
  "key17": "5E9JR3HH3qi6qzpso4QBGadAZKKSe9VWZ7BTmyjYYwBxB4FJTS1uiiWUKRmZkq6aic1eSrEmV7Xk9dKVJnchdiCe",
  "key18": "ADQWh8EewD1qYqyPQFm7oFWoHxDBpehRGKBuR24FqjaH6Fbh6bArL982QNCT1t58mmmYSFeaXyQSyNTJinrwwN1",
  "key19": "3qqzNGN4VkQUzeRvrYJ9wu9L1CKdJR97Ws9Yi8USJnzKtA9y1ZtZe6fhdKhPLJikFSh69Yns2dkPN2CC2d6JKXZ8",
  "key20": "2d79hs18gP7avBwy7nrMKJSGcVW2k5n8jtxtU1XYZMDmxwjT3njmF2kfAGdRARKSPjBHHmMS32KTn6vuDwFGXbjF",
  "key21": "4N4mbtMagfdybHaXLrn3TWFyN2NXuugASvCgS5Zy2MVMFhwaJxPwoaPDc8bEc2vi7wY4uFav4eR9YoLHgxUPeHEV",
  "key22": "3nzv7bvywCpsAzCD3nBWvpMeG3q3SiyTWMmeQ7q6cnshxMSEC59vPoPLx29jWFWvmmRrLZCKFFjeEzHv6NCrN43P",
  "key23": "gEvnMfDSxNvBSdMAoJDdaiyq3sAXbgAgaysuNHW8Ew5S6ZGFUAR2GyTXFNgC9o6KZpRrZuao4TbGfLcdQkWU3z6",
  "key24": "MXNtXGvxeHFX565Ru62RUhXuNbUaSokJ16aWheFv9QMi5e6a6QT2CVCoyMAHfeVziijahuoWVSEXKVozHRYJstB",
  "key25": "T5vbEZSZRVofmyq5EKtcSGSTRFgcBRSZYStkWTh2avGrLgMHF75viJTfMuXYRqnFN14Tub1Y1RKdCBfpdY9Fxfz",
  "key26": "4WX1fSM78ouE2hrjhNJsWBLxh8GxYZN3yhqbA7rb6K79c2tPAjNTsoLSY4gzv2D7AhHKvtSJywEzjhxREhcrUk37",
  "key27": "2mkenCHjmsZuoRarq634HVeGHEKYUfzkqfaYjXF2bxoVV3PQHnzCavi9YCryMqo8P1iDaq4TGMLYvckuHWLwytfX",
  "key28": "5pcD1JqT9kDfTwJRs3YAtMqq1RLjtEn5K5WtMpZnnVbjvCtfmgSpnow5pKEK2r7bL2Jtk4krNJqYNhEHTgvzaDZR",
  "key29": "2RGCkRHUyvYt64TcsAHcpgMPkkr9DbzMcnHiQC6NEeZ5fs5iE7zB93zLKGdWJshYgC2f9uvX4VdA9tbEHLyxXvDo",
  "key30": "3d5uEpnNwsV8odaVBsnFXGRgyFB4fP77ZFTgh5KpLU7yahkmjasEkxnhuMDDEecDmJuMwfj7u9Bt9m64ksH5X3AA",
  "key31": "4a6MXznCUB1eqvxsY5WbKi2jJEmAFxN1t6YL6iY51HVtaB53A4Pt2kQV9p9Fxm22STwYHV4rALUMicKUZJW8oK5R",
  "key32": "5kuwiF56eaGoefZyVYALdny1bqQJ3TguptPzK8TBwGPyTuPpQwaFuzfNVepqdKjLZDh1ZjjH1VuJtCEDzPTeXbSm",
  "key33": "4TDjywzZzHdZ4fmbqth1UecXifRuMHRFzWQRCwghaHBHwjQx5M4TJaHeeWspu1EZC93XRhfBV5LZ4ZcJwd1jjP5R",
  "key34": "56wsQZJBEhjKqeLfQAcn9qFoKMzzmpfi5StmUQJhoRN6YPeVPoAKUCNJwaBZqM7kRioGoSUmxpVxaDPVZgP4No8t",
  "key35": "2b3KQH5Vd8nKNgYSbwLBBgYLdCn5zEDjsQmmHoG6kqQR9F8nN3SdPoM6VuyXw4fADpbRoyyPGBSrzPQXm1B9WSQz",
  "key36": "2YxLv5Dx4XHtTAnuwTybys9fSH7bUWCpDn2mUnTzKgLm7pR1pzcs878NMULPzG6E3ydou7cajwcadCVmxtfichnW",
  "key37": "3vGHRRXRtjXW4oi1FB3wvNndqqKXJ4SLLo9BrQsEfrs1ybBnr4Xs4BMs47UNjVD3WVgNjGyc4wG8GRx1gVTFvh5p",
  "key38": "3otBURjnon2j8mtTu6xxWuzN7hSE9iuzUGKWjTKa7yQXm1eEdUvQSGC8E9CJcoPBfhg6XznyWf6yu6CSqJ7iur4a",
  "key39": "2peBUd43B5oKpFBBr8L392E4z2JmxgdrXZeHcat81YFXcL5Yp4dq6vDWGKFjgyXFsWLm6mCUm2Shemv2ktqes8B9",
  "key40": "kQqwWi5B7Krn9RTTQQHqDPHpf6NgBFgcyunoYLqY8x9yqJ4b33VxLX7ggy5LV9rqUFr5xaEZGJmyHC24aREN42D",
  "key41": "5hJUgUWfAhoATNRYJ6warc9hHdTLMGN8GdpKRpuzrR1Hb89ud46BMNQhwqkF1j6MxZiu3dPnAx3qxb4oEv6K1rUs",
  "key42": "3cYHw2eFqwXAQcmL5CrUE4VUjH43tFYgRm6JzSsUjwozdqNVmCr793VjRNSM3ioNeknWQQye7iwEXYW4DDSAdJuW"
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
