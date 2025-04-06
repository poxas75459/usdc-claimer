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
    "3RqJUGw8oQM28WdpzTtpxh2FszJSWn1NYeeYnAe9rqB6jeMZtdDC8DR8JWSmQ8BP1faQLtkCpjUDKhjxeyw8XmeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hXu7drWesLKbpyUj2osyZrDhC1jZydLtTyZESimSYyeAvT8aQjUfPecuWMjFYCjNrjPAgUKu6ViUgH3Y5JvwEr2",
  "key1": "2PuyTvWyNjutMfowuNfjFrqduXNaju6JFGyNXhKizF1PcDCHKB8XXrrX3PtgnH8TCDPoiAV33CsDieBezHZgDAcr",
  "key2": "2jJzPYPpQ98tyhM7S7KWkzZzsvWFz5V71hXnPZmeHgWMvcdT75CDiPPQeP6ae7hf29SvMyvhgfC8sdE2vW9JYUbT",
  "key3": "2AHy8beHdwsaPtULQUJN97csNZhKNEKVDhsdxKdfAxRwY1BMH5CESaHMoke247uCnbdhzBHuy2gp4uf8DxbeD1A",
  "key4": "429fdrLvWPkuJUDq2VYWDcqFu1LTxMWmcqdM2JSLXRSfqHaDUQ2RCvKU9EW3KFQGE5zRRGTTfUfWVNbgtHbg9t4t",
  "key5": "5uH6r8iLBYAyGPJbqChtAb65aPrkEcF6jvBWtHmREZDgzZYWYf2ciMfs3DNAw1cDX61jDfNpXAKHJJo8SFVJ1R3j",
  "key6": "5TuXa34WDCLJLVjpAAzneAur4YUAZiFzfmRtd9EV7XpYNpT8kPkaYiUMhyCCz5Kht4Pju73b8Yfj13zPS28vxuaj",
  "key7": "63wm5xgw1hkRAfFcvf2W6Yi4s6iDjujueJD3Dp14sySSzx9skcxfKG9CPod8buuMss3JDw6AgJQu7T8iN5J1aPHz",
  "key8": "5PUGTDTjsK7pEJWn5xWreXF8iRnond1fz56DujSjN4KFKipyWnQR7aj5oY4k4DiXH6NTiK39M46V5MdxahdGiMMX",
  "key9": "4KMnEBFY2DuWyv9KSGdeDoffaW5cLdi39nr8hffbq3SYivFeYNoNhJvzn518t1bQSXvaV1TXehAWRHhLyXEsuWue",
  "key10": "2yH3rJhACNtFNuXSuyz8UzWb8kJ24yNzq4PdT4WCsdmKi1uoVArKrAzVKHsP6rGJVDtaokdNNtujp9JM5LrDdwk4",
  "key11": "5CcnNctgusptN39yRMayiq2sKCEhKsgyCLPyvsuYHNVfgg4DRgyJRGyqH4J6SGp839ALn7UjEXhfEmeXGzenhcYF",
  "key12": "51DZzMpQiEPKXfrZa9vvbyRWKYYr2G2b6g9BAQphcoefxZtxVBC2o2okPgLXxxNkJaWBsGXcMg7K4RatGNW9V11y",
  "key13": "5pjEFMMQFJSoPgFRvD6rY6urFQq9Nia7NDQ8zs4Ed5edK4j1JLEMAdaJ169wA1kL7AYn4wS5yoiFJJgZ9mLarypP",
  "key14": "2T6sdsf8UnCQSb1HzUntuNhpu1opPSEAy7vizpsvvzY6xr3ANPKrHPy4y1uGyxe8yVsD7z5SZckwPdTnq8VpyqbS",
  "key15": "5CmxFCcPNdBcLFT28SYpUHt1icwYuVvhdWahi52P6dbbsRHoYuyyGv5Fxm58R5r99Bks9wDsC4MFkxeruBa9CmF",
  "key16": "2neNHvqH6wWGqpfNkRVnnNRJJbsKhks52rSYbRcfuD24LmkrUt1BumhyKKdd5d5m666NZibVPRX2ksf8adJeyuLz",
  "key17": "4h5SkrheFDQwPmdNefXb84BAc8rppQbAqxzXA4b7iZWgD6GThr64TXV9mc4LQmdMshmTfkCSe7Tyg7p56y9UXjGN",
  "key18": "3do9BR1LH7trCtYqH6Wt81zaeXgEHzaFWTzm3WYgbS3DN3RaDzos9ykquo6g7ndHQxfrk8svXPNY5q4Z4gUArfka",
  "key19": "5WS24vot58NbiWS4nm65RV8EuA91AKBWGo9ZU4A9GPzctER2g2ST37orgT1Bcj5NvoGMxGZABtafLzyQ5jUYjSJX",
  "key20": "oX5wAdKnxsz5NJHnmM9nJ3rPGCd5T4p6P8aaN7YjUZVVrS5ZUJrVUVM6yiVMq5McttxZjHSivcsryFNVacdqTxg",
  "key21": "Vg84QRDrrFrPSa2DsauXgo65oVgN6x3db4eziwJmWwx7bUbMYJYPNYx9g1NW1SM6Lfr2cw2CMg4CZxYmvCX49gX",
  "key22": "3UemAY5Akvm5t3KVUh77nK6LSVzwCQF9GNReyTbNf4fs6oVVbcF1Bq7GH1aADsi7XL9sb7a2yiGuu69WdD4QKFfH",
  "key23": "2aRKCCKWnekKCwA96tE6oCpfGHSq9Z1jj2o3JYBFF5p5yixzUphQ8RK8i59Jhv4hPpwxAqfDA7FUwxhFA6uVX7G2",
  "key24": "5eMBhnhMBnF4aDLTTF3R8xZcvSy4Kf45KWrQfFb9KeGkpqg3DAdbb3R7g38nnaF2B8crcjuBacokgFWV7EqLxRfh",
  "key25": "5KUKD2kYwmcyjZHKiFoFkNQayvbJG31Eo1Y4z139VQwCqXSM8igEtsKFLvibgGMxFkz62BDEQ4pxFeRFDxGPY4sB",
  "key26": "3Px97PjX3xmwGTUomXdRMuo49iEJXJDvMy86jpzsTTq5vAKkQ8yCHdhEsbDgznTsRYAefg3PpV2hDhbE1vH4Yyda",
  "key27": "WzosNuHpkSpERHasjodKdigxiraozw5q9vVMpTEmXiGoNXqhZL6NYzdAVcwSW4U8SMTuJzRaWXjb9uTNoNN3H3E",
  "key28": "2mc5HP24d4n7PeH18DCVkceaLDwSj8NsUjMn1nGf23o4uRWjiv22GxT5wwC7zPCwWkaPtfbrHyx99Dtp1iTaPKaa",
  "key29": "58bLbBwj2cjW5DeRefW1PCeDaWkjksYetdWaPc1JfNphniTZqn4igdpLPsFYWfkJxqozM9iee5VGj5Rq2n1ii7XV",
  "key30": "23ZBDfrduTRPdizWxgn6NjjUCa9a8Fr9TgKRTcbKoRW94niEY96KMDhowG8qg7oCnZdynVmx34NrDceKT8Fxq9Uj",
  "key31": "5jBfa2MkNgyttCD1BLMpnTVGtFbcsaV79LizrCiuwMPKAXSY7DkaCjoJP4iA5hTQF6muWpwNALr6TYRB8zezydkf",
  "key32": "3U1uCp61zyyXnWSnQx2wsbosw2R2fd5vzsbzTur1VhET2FkEG8dnXS5k2Nf27v4Brw7reyio5wPXUZF2Aj3n9cu6",
  "key33": "2nait4CpAvFkFMQ8iFf4R8p8iVNmvfC7A3Xd6FdgNDXC7z2MmRkjYNvDntRtdhDGBiEefTvrMpNSiDEZFUGhXmy5",
  "key34": "i62CmWKRZECNno7uLJ2BM6wS6Ww39gmv9qhW6v2ma9NrzUUEksFeT5h5ZCLmU2qAGpKb7QbDhVjjZvN9cD1QXcz",
  "key35": "3w5oLNsNcDB4pxro8ofaiEtNXpEBrM3Zgi9MjDAn2DYLKtSyD6apCKg8GFDjk6KxUkwZjEumxmviJV3Lk5TVoX9A",
  "key36": "414hrhG5umnSCYmZXFbhRZMk8ioqx8ttELNnLooygt49wKqF4TpPC6rdXng1gAgH5pyXYFsvwRqEVvs4uJLsSiRG",
  "key37": "49DVhv2vZkYCVHkLT1xLNyBfW7B6g69Nsi7ih7kzfQ3Gtg5NCYKvehFNxsiQ9AAjAXD7L8XeMurWkmmWNzdjo6GW",
  "key38": "4opKvx2GBLXXPbUSMBL7NsgBd2yBgLXG46sDNJi9xUQXn6XwyMgXW4yhtHGNnXmDc4a63KZxa2QjEvx9jvUzHVuP",
  "key39": "5PfVvvWe1QgtdjCBBYGYJdhp7VgMDZGGENrxTUrWmurRNSUitE6dpfVitP1hyAhG5DwRs74hWa4EXJyktn8E1PSW",
  "key40": "3tiH4sHCed67ZMgBHLBDhb1TqYbE8NPZM15WUbo75nD7ZaFmPyU7SKJ6q7wQW6b4ZeVMou189iT2kaijYS5LqHRG"
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
