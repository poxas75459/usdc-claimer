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
    "foyXbPesiw6icJJKCDp7WMXuMQjUAEJf7khPWrvgBQx7wWWaFs1bbbrwW6poNtv8BcphBZc3KvMEfAhkaHFzTZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66Q2ZVGsEL2G7c6CPJ7RFfJoBuQAQF1gv6i4DoBZMVkXSHewXm8aC8yAi1x413ikvkmybgfHfJhjGFGdzn7gEfSB",
  "key1": "etjiuHXsqMAcGTP1qBjpVZYnb27mGxpyaAXxSgCLT47X2STANQfMgvZqFmaghg6xXquCdgSChYrnZUP6XTNdxBJ",
  "key2": "5KTm5fPbn7eXfzFt6Ps5cgLAUsJLghaZ2dMzwkZp2q7HHY9eESXFbkjYyRyJP8NUM1UPgejPdiF1a2H21E3nVqTs",
  "key3": "48Y3m3RQ3A3wD2gGUVp1vPwXcEap1fLFxNQfPLfNbwoppncygfj31t2yKsTZRpJVnoyT9UK7GSPwiKnjEGR7Ni38",
  "key4": "5YXEB4ZMtJ3PEeG8dEj7pTya637eh2feMtVGiPTNCjpsrMPRkTcvwoZEVYgYYVtMyN4ZqjMKuj2xhRA8k6RDRrFb",
  "key5": "3UisZySxvSky1NY28zoSEd2g4s4kXeqjYfto1zvSkijdN1hPPjpv2Ji62MBXL2Q7fdzVFf6CJx4hnoLM3XbSm2Xx",
  "key6": "36MDqdphDoqcBMHhKbiZYPaEfXXEbSv3khkLtGVf7aWvAuT2ywUs9bstk9gbVRVZhkifUimT1M2KvgNFaVJ2tm8D",
  "key7": "2YdYiqqA7PrcwiprLVaAhcF4uHprEKhwFMK6fcWhnNYSFtVBM2CpsbV6P8da9N9Zv3amArmUwPGWn3rV9RPvoLsi",
  "key8": "2MUDyb12B6AwSyE7gnZWuy3VPiMnX3sCrN5TAH8dU3SMJ4iXeUvmYApqcrs5FqrXiB3k3nAqbpYokav2MSsoZm1q",
  "key9": "2S6m87qwtd9c48unQBVuLxuA4uwRrWs1mt19Hsdd8zM3Xt3H5bV3RakxPCU2gGTYRKwjhXZnyHXSdU8rT5oxKJMg",
  "key10": "33ntr9pe2rVEWAEpADXphzFEjcNCEYVrQQqMsd5bJXgYELpkYx7kXeVSgFPsGtDKgkGUPbrFSQhMDo3GS2w6LwBy",
  "key11": "ZXEyoFBBT7h5CXCTVL2GsNX1vAE72w15WjxFpeozZjJZZrDj2bMTd6fLXhFpbo8NnK1Z4FLkCDs4pvnc99c37zE",
  "key12": "3tRiZwhzjeSBzLxCuA67eBcm7xEoxrAoZx7rhwkqi7cC68fWmkdLnLVaqV5zrhD3yRUntFUfW6vBPaKsUr5DKVnt",
  "key13": "carEisnMvYboN2sdtVqJwU1mJJCqapojkS8JsNECHwQDMsvVZynrp6RZQ8dAaxEfKtzHtDpgnP7Y1M6WH3Su16f",
  "key14": "3nDooedQqXH6xid1LRwtbimn5gbRYXqRad4iNjMwqWXgFThxc59zArUcR9CMWhu5VDamgA6kJwLWM7crBoDCRwbV",
  "key15": "51mtc9759FiFWEZCzxiVwkVvwHcqCTU9fnS9gHas4t8MH3ygGGdN9to7ccBRswU5YA9DF5EXmXT3WeeNAYujcoKG",
  "key16": "2r9hmSneqhHoaqbSLXLtuDabX9vFVLP1eo7cRDyd2w5SMvnTJt3RBAfehqSrKY93r1EfTS1qUmsrURTKJYEvkvrh",
  "key17": "4JT5b6xc3EsTDGEQWN5NsaZZqqYVULQVTgJyBaQpxJsuWZYdKW55jD842JPtdcs2r89MYL5PLJvr9DusN8fFFyti",
  "key18": "39HYe43eoxDgbEY7nNUMS5hefL3LiJB1k2ZHT44p6xhNz19QGNunqmSRnHA7rXJfVGfzvxrEuiz6NRZq6GxfzkkS",
  "key19": "4HMXbhtGsemvkNAzCSEqYFKvRaacbbWnKWfUyiL52WQzM2aNRcnJkxw9434cgE3t6wWWffgZz27mrkV7veHeU6BY",
  "key20": "2t2q3LrDu5wYk1Da11W8QJYAZ5uuDDw15VRPhbAH76u5Sw3uFuErt9316xTas1KXVHxkBRzRm6s7LeUv1Mr8WiYd",
  "key21": "59rJdFLu1GNUUcAANt2XiZk5r7ANWx5c6CCHvUoVadXu6vp3cc37WfVdfmh6H3fiKMB6FPh76feFHyr8EvDCddCe",
  "key22": "2mZqJsyq6aLSAozGX5WDT2Y59bg2ADk6xvhdZV6ZmEfiCbKiJzKyHkhGq7MwW2AfRCdj1JsL4SYAB4EfkBwmv8QK",
  "key23": "3wHWp4ubUbWrY6ds7Cm4Hr1tqhytpyW1W6uvFcjk6bobJYfmDiY9TSFjqXZQ6QC8JWtLvThbeGaLfZEy8Qfn1r2R",
  "key24": "aYCprHqUHGYQk6NNtZRGLggDxvqnqo3CjJSTYexJjHkFgTeGdhqYuBGpnGJmWmkCxmAM9jr8J5zQYf7XmV3bQwK",
  "key25": "5A82DqFPDrZnpoypbhMc2nPEK5zgDYaWMnboH86hkxDXWLv58Fsb9uHw92ze9bMMUKBaDr6SQXDHPuag3mXxmTSb",
  "key26": "4Bak9AJcWNh3S4QYn5Npa8EFNPLcRFggPjmntMekQGzyuwfRxmUJSSaJRveJx9gR1CUXeo5ow9guXxURPcNzdJVM",
  "key27": "2vHf3WMwbqYiCbTuQCkZeKKmUnjMXYR8wzqTh7X6AnYjYeu5RGncs9zb8PjE9MzNqJ7YbuiUZUANdikjz5tEzV5o",
  "key28": "4Ueh95hAoupgafhPYDDPRCBP14AMGHsWkE4UCKsAK6wBjsXSyXuz6THTrXsJhmNiTKNxdAp4VD5KjyEtL2TBdSrH",
  "key29": "2KHREpXsW7W4jTRcqa8atSeeyWYzWrVG7x6HiuiA6qpCdbfw4eKQ8qHgP1Xb9p3ahyqF5aCWcaDk3q17ooTa7tYD",
  "key30": "383qJGF3Xxho9A2c6sSgAZXZFxH33QnRz58gm6D2xdw5mrSL7PsMMJtdRRDAtW9nc45R51opdhyASUiyeYcAqWv2",
  "key31": "3rDUM9Vrxmsh1pgz8E7vKbubmn92FFttU64nWoZLwDHbBYvFAbvR1MkDrnbNNQPW2HQcCHCbspdLMsJ5z62yPee9",
  "key32": "fYn18KfV2FcEi5Dya3Qo8TPQL1HYKg9t4YaVPVtShc3chcdVf48ERmReQdKo82WVfSVWPgvDiUv4pkArXRj9CHC",
  "key33": "4JFeP3pTuz8ZH5ssmTLuHvZZjS1kPFFLTqngseq9nhiPCETEUcgQSXgRtBuSwSqrvHiK5jN98oqGsdQatTYBEbxg",
  "key34": "QnnUk7UNq1Yr9GWNdExMZjkZjrUGETxgFDqJE5ZKJideMQRxXtJi6m7FVRCm9k1bsESenC9hye1ecW1anzAWZv2"
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
