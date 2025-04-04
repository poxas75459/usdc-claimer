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
    "stCWhD5PxHNcr5hpRCqsxt2doKS6Jj5muSCnzP9NvjPgQYrUaNTRbEP96wem2gkL3bjZnWmaH9sv8eBetwS7Zkw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YesmnyukevktEGGRKZs2Q9X1aAGZsgxWzwbRhFRADRMBsdGu9RpDV3QeQC6uJdjDGgYVB1tM7mFzpgkD6XkKx3V",
  "key1": "3wFHP5fvhJd95jZuwrMtp18uJwZUHtr9iPLgc4A39DtpfJSHVqN8vU57Afh38QftJPLP3A9xaSahFyT53xZm1Fc5",
  "key2": "3q9o3j3vUdtLjmPtHXBLTUUcPWs13rAm7ahfutwb3xkqyuCnZ5nA4PK3MPEU9vBSTFJuQqnis2WssS9ABxkGZqPL",
  "key3": "56iypLnduHPoSVuC52JocC4pjkUPCPEk8u8g5WHVBXNFz9r7swf5cgxgiFA6UfSRZsVnCsJsnKRk5vPHSjiEg4ig",
  "key4": "4owTCn8NUkqpJQ5bdVxKYFC4PPquye3gaHouua3sAj7Tczk1bSMJvGSXbPdpVpZuABuLfTFzzvTDKmgwKjupszWq",
  "key5": "5b38ASsD1vjWqcteqLTDsVvpiXmcX8iJ8p6maYMvcpXzkQkUC9SVGxk7wrUeX4NVvwUXCuwhwtBVHxVj12uwLz2C",
  "key6": "3UBMsbW9SjbWGJ6gcitkGYwviMabMHXmzbHkVvCHWyX6J8T3hBtM2iac62Q9Gxh5vJfBTZ8w7h66pqRKs2AwbenV",
  "key7": "54HGm1mvBinApVyZe3FVX1mHiWphzVADczv23Xfzugwc18sFjgEUbWSHeBVkm7ctXCqSSFb1yqG7YCmkPTkKhREr",
  "key8": "5vurGnKHLrPGVgWN721EEo1RPyj8PAAujpyV5MqUygQGB7GTr2Jjvcq3UyN24FFV6qAXcKbrNJekgvcSkZzYMWep",
  "key9": "3hoAzVEC8hiu8VxZiJBUjTVS4doYvc6wf3uGCdRk3FNLXcc8BfyxijyyRjbPGYmp3Z4KxUQcE9SJfbHZfUonAukd",
  "key10": "LUwKYiwVVUeSnxhPACD3SQBtFpBBhaEiQwRzBRBfNz3GMaZC6gAEUJweUA9A4oubar4w2NJ3g8p1G1skbSCNBy1",
  "key11": "rRZRTWBBmvKaxVz8zi7fEE1w8jdrAtLF6U2sTvwbLF85gK5hFVAv6VwtbQuTKtsWHHzvDE4sHwcVAXXGu566LZh",
  "key12": "649fBceek9y4imvQpLmGYFkUgX6GKFV4iCUqGPBDartvGXfJkfRsHdVUtPVm8gofXqDfPpRcpptL7sdBUMXaiEJr",
  "key13": "3Zt82iaUpaZKYTjfXAgPRS7ktAdkwu9UYXrFajGaqiUkiNVeJB3j65Pprv5Q47SxKuHbb5YgpVWohW422AaLWo1v",
  "key14": "2MNVBFXf5of995KnNMqGcsYo1zkS4ST3rFGoXoC5mvrT3wFwsL1fL7w4n3zZp2w3DNh8pjCtJxGZ9qaTCaqRrNng",
  "key15": "5xuvJqWi4KRtKThqnPnk2kXvkHqZEptZfVLjUNiCfnF3QSmAxR964HG6wDTpen9YdAWLibjbZDGVaCus2q9wGzev",
  "key16": "5U527GoGzLVW7a9SxLm1uArMYNY4uJJpEuRVsVJXim7FXLpV5AkavaiASAtQR9dEoMiLLc2UBvCS7Lr5aSY8Lav1",
  "key17": "2JzZjtHbKdGqGDfdorMbE3BzmkXK6MGADN2C7ArRotEi7qHUVSwDf2KPqt7nW7iwNuSko44GhWPCMdwQoahoemFM",
  "key18": "7erkJ6SuAjBYiZ2yNcWU7Ubjr1RDbC1gy8dzsLZBsnmsRu7qWLp98hPtLuRapXxqYELNyS4PaheRaZBUJEyrZb7",
  "key19": "43QUFEPckF5XS4d1TTyj3HDtZ5PgisYJhhGF85WF8tXU62ZafKxqnE5YukUB4X57JXfQPJ4fpdjWuqPJtbjjsE2i",
  "key20": "3g2Y26BL3oa2CQqCFsrXbf6WBoCmBs8aXQbU1KFbYDiVgsSULk59gJoQV1qzf85RCX3hfm6Rjh7SmMRXrfNpNvCU",
  "key21": "5biBzPHFB8vidPerYNDVpYR6pQjN23NLr8Wh9yePdx5GAtxb4Fg1bZ6RZ2Tm6xLfCQ16nWuuktCAsrTPZCXzF9X1",
  "key22": "5TMnUTWQdpezDxPiJZrPN56mAUZTmtvvhr6bS6mF4niHwXRcajZv8LSsB97ZyY9YKVgRisDxjpGGGkReEJaSfoVS",
  "key23": "2JNyiV3mokqj7DuACewqGDj4krtTrMtP6GpeFexceau6jdH7Ko1RoTGDXbtkv57gwCSNNiUZNxoswS1enaNcYUEs",
  "key24": "3z6FXBadg7REvQM3Gh9M9NSXs37nyfnckPirmm9DjFxiHfQYJLZBHS5cyCxpQUjv1bS84eHH8ciKPGACPTQsT8b7",
  "key25": "mwjdTtzMq9yQwxvzT9ivhonk89SFTiQw92dXXTp3XjJBSkjg63T1BHRkb6KDzNf99AG3XzuMVZNQ3osh27efLKa",
  "key26": "4sDwyiTnLmDaSZh6MxNvkQ4zzs181n2wyZcWLdsMEef6CSdr5ZPAavsvqaDNQKVkt6HfxZFiqbQgeNj9qohD6BBC",
  "key27": "3tkajzB2RdNTVkg8SKirCi1ZR6fd7h3Dw5fhUcXsX2MtWVFHa6n4BHj4hjmrMRrENvcg9cUkK2T33QbCJEieH67s",
  "key28": "2aLTAvXQucZE36cQAyGRwqzeCdqGKEkyXj5KKfXos7UZKMX8kiwye8j7doDMbWvPXSJzuKVYdZTuzaws89dKpS4t",
  "key29": "2nErqPfxNNmLQjbVP3q3nYvYRQKbAmDWnDzzdAVDtwdqvctu6fcNVtR46nvzbraZcwwaCZwNdBqg2kNmciRydJob",
  "key30": "4uF42eXFdVpTDGDNtgx6yb1NiuLVLgGjNaC1hrZQm7sLwjQAmhCBM9F8QGRFQi2xch1QKkHHUiCyfinT8AbjzFrx",
  "key31": "4T9B5cYKwhxCtBz4EfwPdPXztBP8e8PPK2RFgUAZ7DNivmKhFPeTWbVh2R8rq1v7qNu5C7nnoURayYAAhpxM3HdR",
  "key32": "55n4izcncQ7baDAMD4bn2PdT36vMJgTp9wXAJWZRYbBP7XeFj8xvCapzsSBXdChfdvq1B1VzUZguSCZRyjxHiFRX",
  "key33": "4dcKSWpUeo44eXRSUWDTokMA4b2KgyWRKgUCzmU8QtDh3JP6T5Gg87F8QNYrwwPEmsKWTRV7LJWeNk9GoQBuVLT4",
  "key34": "2CWeqA2wJusREdBRQcXtkQcy67ZnsfkWyDWrGxSW5hJ3vv6rhKfodYSe6DrH5ZjRbJZfEBcaowSTsELpQ4GfpKJ9",
  "key35": "41jsFG3uJ2HrarCySoBC3ckWu6rH9nuTL2tEZbR7kZvhzJpNDMpkCF9ghb4QFcnrE4CD9WH7TMfiLVjY2cUZfCPA",
  "key36": "hckFBsJHpvaCbfZraBKUWPcvqQsoNav7ZcAip1kWb5huAabH6uguEtSKqSwKto4kPPPCzGBM7UZ8jMB7jYevn8K",
  "key37": "5dzViJq8zUnWq5ibmqBWNFsKY21ZKz9KVnsU9mFcrH8WLRdx2CqtsEpsLsfU9vGLwbTQ7gVQoVr34UK1KXzrRoZr",
  "key38": "51dwYoQQLCqKnxFwEU91bqPfK2TB33BmTK1p1L5i6VmNjTZK4t1ixb7vppkyQCkELXVPLQuGpCrorH9ZmFFUKDPk",
  "key39": "2zWDpy1apUwwTg9fEN8vQKcZfyLw4tm6amtwwbizqu3E1tu37VAcyThtJcLGAF2ngeALcHFKye1ncUiwd3jwmsMn",
  "key40": "3LKazBd5HRaMdPTtME9YMcn2Jb3LmBSLczhL1TLJSY2tFdAwJrbmXeh6cw12rJMqxwVpa8qVwvpxPCpVrDJZkDeV",
  "key41": "3VHrE5tuYWPvpPb2xDna9n16fXSNTihLcjpfom92xjkiRgaoT6ntmt2mcsRa2XAsKZeU9bU8oq4ws9TrE4YKqXC8",
  "key42": "5Xs89NDCr8RGAD1pwNdVJiPv2oEQABirLEjQAdkUqg5TkhGfydTUytAhvNn76AAg8RMKuncfDqXbUAYvQQ966kuU",
  "key43": "2njbAKYDjG29Rcp3iFqy5XCVxcNcSxMmqTccKN9EeNtrAPodzHtiw7GAFypphE73nT2tXEUhGgtW7kPcu2vcbVmz",
  "key44": "43NTdRSe7Vq46PVKsZueKMNwqp7WFyNmU2eosiUziZQoe9wCdqtUbV7AQumBGUkkpBxoRTtojGrKVWZcyXW4ouAV",
  "key45": "5ki8VpmXyAnJLAN5a2V5ed87VyKsb3FTCXcoN2vS4heCG9fydSAHTL7VbsGFyFdp5z9URFFogV97gHdP3DE6z4vB",
  "key46": "316N777Epd1Hfu6WPQkrCWy9ZTudKdxhBJp5jSdDYAMULUwoYRKJP44EMom65hegoBdMxkq7LreURFN6yA8tjttr",
  "key47": "3tkck7euqBapdjKwweUCrZFRhhCx9pUe8E5jtrEeqP12owwcJcopWk2uy77YDznNpV3mhx2rqD94BRy4QcStKuzh",
  "key48": "4XXkTm24v5vnutKNMjoRyxe9U1z3BQHKyKLXyn6ZjhMKHeEXyYAS3QV2Y7LCBqhBNhwWkFpecVE1AP8TMAtGXMoK",
  "key49": "3D6AMeRhCofw1RUX9kvTfB26ynFyAhUqjyrxmvfg4frheid8mb8LV2yRBF4grmFbrAvGfHH8k6ctnV9u4Kk67HbG"
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
