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
    "35NVCyCZJrTQtGXyQKyKFRb2BGqBUzmBmVRZk2YEoQ9RN8949AoqDZeMZzqdpsJt1wQiLy7JyUePQY7N8bRuB9Jj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31oxc9hrRKnw76eD77Eycey6tUMTrk3atn6zBZipSHmc4kdP8YULPXBzuWWBDozQFXeQXYB7eqtsXxzbSkrYf5vR",
  "key1": "Cxd7BnJYXDSMKSdsLCMBPsHricdGowLhLLqDuCHB68pKAqAZSEevotLdTjeSCQq7sHB1HQ3M2A8Z5TS4QypvciB",
  "key2": "3wYjDVwqByVTgju5ztpiHTdwSuRXSQGcnR4hXN2HeV65Q5Ks7vAYsUSCwzwq7EPa4RKAQkL6EiuEPg4CxYoxFL2E",
  "key3": "eD3viffbjCqEB3sJpUkJSXHD11Ndm1eZT9ru9UhJE6uzPxtCfR4Ttoc8Z6eDiTtBaKBAPvgZ4TRUMVBB32FnWo4",
  "key4": "4ficBrxyh9dRT6Q1tyFgJijd5isau6UccXmxCWHZ8HXpmxnapA7cNH6AwHB6TmHW7EnXbdCTJSRu9YoopFCU8iPw",
  "key5": "5GnUCa9Av2p7g5tWDpKTZrxUPa25EVZgoZESszY5Btz1NLRs2d91jzNLEJpVGVYZiCmYH9cgHYqf5mr2NNZCdxaS",
  "key6": "5p4KcTpcTN9xDyDbNYvwwpv41fCWtRDhUj4uKwXjo2Csou854BBawCV8aVNF8tvjoSPqxCZr9QLe4NZDd3DSLL5a",
  "key7": "5jFbJ6edExbEw7iKdKuQRmEAELnAkogUuHfj6bcaoh1VfvffyobynD7ZQycKhaxVCjChCSxB5m5LUEpsZ5q3Hw6f",
  "key8": "hWQKjvuQ38GbjFwgfM2yitrT91s4ryQTHrjRwmMT5je5WcPBhZ99YXCGz3LbYZt5YRMKSYcn9Z9614RcwxjmAW5",
  "key9": "UnWKTi3PCEtaV9NviQRPJCJcTBknrxVbYmQuJyw9deKfQUQ1qzGwxBU7QDoyhBQA7c5x71tYsZZ4v3iVbL6LjkG",
  "key10": "dryKXhiFEETUt3z1qrA9ABBLafjp9gSBinJtoXrcwtVeTU3DjdYgjxrUBKCWjhp4N98yBnuzER8S7A6hHwmBuDx",
  "key11": "sXENAJj4sgVYVuiFZzpHrmpU6G96wRWqzK7q3DSneRu4meDfsWeQuK8jz4FtCGEucoJBLhXfUucSwzLDB3V1pWB",
  "key12": "398wDuowtaZC3a8JE11VhyiLrKZUKVwup4xsNQ9wjhecp94PxHuLDa4P29gYzjBvzfjGNBVaQoSiksXoc1pHAnFF",
  "key13": "FFZiXngpvdXyqZZDR7ZYWLwe2gbhi8g28rDVFCXqgWeiXge2fcPEwDnTJ98CwgD5nBy1TDgzfRCKePnPSh5EyRh",
  "key14": "2XrEMo2c8jd1FGpADvh8iFKorLZRTzeyQBFBCjd57uhTHN6A7JGGAxp4bt69mkji25iDtDrmS9ziKPgXg395TnGz",
  "key15": "7JJtHAN6FYYWNikUEdhrkopuRtqH5pQiP17cT3dwcEt6tri5WZAZQmBZDcg59ouegskXi5FkfSYqe8c1xuTGtNP",
  "key16": "2f8HVo3ZGFNqHGjndjWAJPqPx1iqDD7zivUmnYMGRfiGzT4hTp75YW3wkmqKsHx4xUXjTtCYSbDABmJnBT7nn5uY",
  "key17": "2HWxkj27vGP6s2RwTwBW7JnsxwjqvJwunQWqWAAMw3HjpLDS8GTStT4Tvi1rw9u58NH3WQZU4EXKG8cHvVZx5Bv8",
  "key18": "9Wiz1tYffz9BCcPUBsGxEUUAFrWJ2ak1KTDrRQZbQE1pS3TF87XmKY5XHsRfDvdsjkiTK4zqAHHWRVsAWLmRyD1",
  "key19": "2WPBRFTRjngy9HHrePU8iBNS2QDv2zM4bCUb2LXJBW1oRyCZk2N1RAwhuskb44sUh18DD9F7RNf79BPSZG4DSccW",
  "key20": "YLpjTx2ngWdBvWytMWuYAjey19V4qNi7KQEVnn9RViuyGg9kPLJZ8MunqLGtqt8c5jEmXQZWu3sBpGJNngzSQbF",
  "key21": "523VxFbFosoMPjiigLwwTDq8rXTZVHAXgHCDeyV18NhmQv7eQDyGoQgvJ4zKMZbF7TkQHpzgfyaVGvk2UtrTBVoN",
  "key22": "5dPBQdJe1AnDanMakWUEF8CVir1LZv3ZcpR3eAYTRLnGGbqLCksZdiL8svsRkrwazPbGJ8Ha7ECPqvNaxaJcasYX",
  "key23": "2MMDdgr5R4FhLjUjMwWRFdeqqgvidjTv5mg9Yk2NuptDpz113t7zFSr6xARJMa6jp2ivDAWJxfnipmVw8hHCGe6w",
  "key24": "R2Xy6tMC2HhA5XqnkcrGb2RKYMNg9u74e2zQnWofWvVbJzVHhGYQUegQpWk9mFmdh667mc6pqpufiB8uYhG2hme",
  "key25": "2vrBrebD7cENzgQ9zcbWqfaybvMmMyJEFxnADxK1Nc7XZ941SWwW9C2ne1zgB6Ggo29KSj12Fufpu1aJG6K5Sg9F",
  "key26": "5CiEgij76DMDM3ZKh6gbHxE4U5PEH23We1V49Tn9gppwnUBYVKT2NnCDsa5mRN7sHLqTPqyLAVy2moEvNRHkDr6S",
  "key27": "32oQEB8zak93124TfqMTqQaCrfhyxpVsudga9B8REh35jnZ74eKzJJCzy47ijS3rsucA5ya2Kjt1cy34j7BySXiT",
  "key28": "3uMSKHv52qcnyiritf3dT72i5zgfogdQHTbsNvzezkrPKmRJdQBacPfruzSownoLa6oF9gMMByvhWk9Gdct4mijt",
  "key29": "2hyhU66m6DT8ijrtjZkteVHfXayHZcCU7GAEiKbnCBtsRwrgRfcthPpFX6gLYtzooFkM2BfT2Wpu7sNShSrx4b25",
  "key30": "4Cf9zwTTxTKedGrgzT2cSS2RaHwXn8VGJsMUv3FHJoFhuSY2nqwnwiiNyrKcgL9QeAAayKW9PDXvDadVGQViWQnq",
  "key31": "2j4MPrMmU78agi4RF62E5f3PUXwjdGxUfaRH14CG8eypT5DSToG8iso8kua6FjP8RxTzBrwov4m5gKpc7Sqk66wh",
  "key32": "67h6P9kRavBD8cBiHf3vZ2WHVMNdqLsW4vtVzasYAyCjkiKctWFw59aDo6J6nVHahd1uYKq4RDdQvHx31oNX5bSW",
  "key33": "5r4bxK1a19i8MrnDjzoXqqWsEgSc5rGagzNUczzYd6cb269nEzbWBWt6yuVAhHQSkqzVP4zmJSpxTL9gftVcVNyq",
  "key34": "2wB4S1hEppEK7vYzrJmvHmKoTeW5Gy19T11DDbe9M8X6WMP1Uo6sKpYkZCKi3CNsvqjxyz7DxTPtCzoktwP1aAYD",
  "key35": "3gryYrDNfQkd7cRjQgB8ZmqUCqeBHKHqTtRZ7H3cPG4dmoVekLKKFT6g77Asjc83shzdf9EXDSF4GPJ5rXAyF6hk",
  "key36": "5FcmHBMNdoajBWpvStc2XVSTJzBHuXqYKaaa7yZzeeXPUeKSa4KjQoe5t5mJYF89u9BYczEiRPnFKzJmn9DeRj97",
  "key37": "61tgJWNhk7ZEzHJvpcnqCXGrz15UWDktiUhUc6aYKikQSnY35N6dT5DeHk37f5JCx5PoZ18zVhZSVjJc5X3ZxkE7",
  "key38": "5rKLjuYNZZNpSXQp8hanGCHwWKULvPRNWgU5iH235vPW161Kzhs2tJPhgc9V6YZi34v2n99ok1KRCTFGgaLsbCjN",
  "key39": "4KkVtcWtNEvMtyTbCLGkhhcagAvwmt2Cp7pbJ4HhKiZ9urV7qfupsy7XsPw5swpKm9WBv99RgMkiU5XyVo8XsJJC",
  "key40": "5fFHwLRVcLSPegLVXEnFJSePXgtQqB3BB3vdyQsUpYgSMqYTJoPfUQCFSH4MBxW1qJzQNZHfXXejYg9EhiA8wXf9",
  "key41": "3RX5Fbq71UJnacUHPmfAMz2m3rtzGRCvnyPaiVugriJVCwpMg48LsLq7aoautktYfERMBiqQTvVcHXYHdZ8zWg5w",
  "key42": "n38mopGPPWJ9eDnvPoXK8AVW6FKzBefMyafm8eBguyBcHnovByKYHjBiVrc1m97T7uhYeZ5pvt61t6PNystBAha"
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
