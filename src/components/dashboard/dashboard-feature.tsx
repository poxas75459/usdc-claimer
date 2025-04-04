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
    "2NJ2ZEvWi3YdsqcEf2j9VtofveSHPVnHxURbP3gEQ8Xgot2PShC7KTNeXDeMTQyDCh5rUvZyNdanp999Pa43MSNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "586kvvabZrnujX7KQEK4uzFCX6xueAdhMGTTooWJbWhoaEqFx2x4wwMeXXrfL8W8jEqe2YQTsBhR6prDk49FSwn8",
  "key1": "GdnuXhYbLkbVsc73KuxBqRZRdRt26MAuDa5yn7wSZvW1GJbkyNuUuXijZbrcN6s1repsY69ccPEiH7nCfco9Xtn",
  "key2": "3nXT1yobqhqq2q1MMfgjoN8WHDWpRfLFw5KL9TSGm7Fjpb9KQjAQa8FkN8PbuwJ9n1CewNRgv3XCsj5F3wSYptRe",
  "key3": "4Vu5ybiirQy9AMNaDC3kSp39xjwnmm7iTmyyPgTBFC5MGcPLiLobH19PMmjnsiXvYfQbWkoVV2twTEKBDiAEsv7z",
  "key4": "4Az8nwZCygMDEiG6XJiRVe8gVBz9igMyTdP22MezUJZMzarPMRKSqG164dhku6fMLBswWa48V7248ipjxNmYzas6",
  "key5": "TxoYHv2xZouGTMJh9eU98GXvjbMDWKtMzgM7fSPmxFNxgxjEUUN65dNnAp3jDNhjf216rmQB6hWnJiSQkwLRxGS",
  "key6": "53eM6qW757BQ3BMWzTRnQsa2YJWbGJZJ2wp4wMRvhoxKhroYN7s2xDQuvCn86XyEG9kuVabWuNpZwrksSQkHyxa2",
  "key7": "26QPJd2rAEapDPDVdr8gKj4snpjEx3EnTJ257b12YqV54RRpjN7X4RZgMfvxuszNs43buv3REin1TqWwNJutCL3s",
  "key8": "4rmDc2ffk3zVeXdTaEcQaGz5ks5LwErFyNQZyieKQwPaSMgdXfYps5gxiTVvZuMwKVkVQ7rzQ8ffmA6TXtkixoaT",
  "key9": "WsHQbsihTt8iYcppXYFuTGe1tqFLuLXSERMYztAg6HWpumXdwKaMw1MWavfqzoZXWBTk3ba1NEUDeD9kSegWeN4",
  "key10": "3Hcy8G5MNxP5TuHnBhwbZmTgpVP9W6z2w4dmzMvwJonPfye6WteybtixriERfbuTCrpx8EQq8YUvhxBuGzNBjb6A",
  "key11": "5RiNH6PSCFYoZeBCVa26DtdbY7xjKcXjAj1WA4NysiS1o2LmWyaFExFvSdMmLKfhCqjuDucmW7CFBCfraYAuTPK3",
  "key12": "N1scZxGMWzP8aYFCFGxjzYasz25ShKooUF2dkFmi25RSLMz5qPgWJavSSGo89RjaV5iwhWtwrsrSJUJZdQCSZGy",
  "key13": "2T1dGdUTtrbBywbFxezZBXZ5RVv6G3eYoNtnZf2aMtbGXcHNLFGjaeZ31JXoLnXbeH699ndeNWcffHsfaErcwMG1",
  "key14": "36Vc54qtTSJZaMD7dsDZGLUrfw8iw5RDzcVZHbpyWXhB4Xe5Ja2jq4mcLvJRPfFJTfjKVN3jiMnHfgosg99y1YVH",
  "key15": "2gX4oNovVRdmQVaSZ95MgAMws35SGBqCFDmuQZti7L8zPCFSdTsePpejLkNkNkYBtAHYDLiVxE4b8tRmp6Ha65Af",
  "key16": "yzfTgoV3wVHrtH7bvHt7Pbm8rgBHCJvLEfqQirRwhTwwRDHGo4aQ18U1hX1EJ8ci31NGLXCDd6p8dgDjZ195rVW",
  "key17": "2Mtk3ftQuf436wMQCmoN793cMCy3GkkHtbTZqU4s899PQaVZxQehxrphifA5Ync52iVQpXpxmazDPGzfwqKj3j8M",
  "key18": "3WfxKixcMEcQqU16kddy2PnQ3UyfUiTG98hLQAbNozZLJz3HeT93Hj4kgC4yfUi92fsaEQXHeWtvB2hZurkc8GUm",
  "key19": "7mrjxKUTnXeFQHKgwoXhwhrh6JW2qAzbZmirtJZ3RnkZ676E3p5isxFmKKyKWoGgpuYTqVcyzbcrcmyPKf3zWrP",
  "key20": "2S6tamsyb28cGY4SyJnwU1YboGNZ5wJwtd36DSkKrTbe4ZjALxviuc3p6CdzHdbP8qNPxz6Mve3tQNBcwtkMb2dA",
  "key21": "hxY8sR3YDEetvWdnjwWNqqENqU4Bgvz2vx3hAQBFNWFyon5jRabyDe7tEb7McEEYWe8B7fop66p7cy7pojDSg5j",
  "key22": "h9FpAi36fXJuRCvzvZznp3B5cR6ZrwgqLPocqUue1u1RMkuBEmFDc9PpPtou4NYnRpbdj7XNJLMgj5iFgjrfpCN",
  "key23": "3JtkXSfcn5tpYEmHoPdCtruVBNeSkVCyr8bVGmzF3Mo43sSbEAP17GbYAP2idZZdSNCDv9DTSYKdWG6PNJo52JoT",
  "key24": "5c81vfopUGtuR71gymXvx5qwTfAptimfsTo1SMWjJggD6AsmpGPerqYsydAYiVwATgXwtvgUe1qn8dA9CsHJr9Kf",
  "key25": "5YezdN1ENyDoQdjKt3ZkqM3ag2wEiJsranQKPQFJz6UEsDntq1FQLk7ByYdTDxGTkYUZ7ekNWABKG5oCAXP3e7jW",
  "key26": "spNZ1tX9KwKKM8BhCvrJUPamKTTVBQxyZPiT8KKDrUm95uavQEnMggi7LrDE8r1iNGnmshQ2P9SwyeEZz2qJEnC",
  "key27": "4evw4jiyGeoFSYFKTYwwhjhQZJAJE4o8Q2Q2JtJS8AGKgLNWPqms2Kn6Knm2hyu6pu1RHmqL6dSwW1gNCfGBzjCG",
  "key28": "4Fshbi9UAZUvwNuMtVEgpjhtjbcDRSSd76oPQsHrPKHoL4LhTRtgT53TpYuk44ES9Si6VxyoTY8tiYXxNamPTw4h",
  "key29": "MyMbemwUzXhfjT2TTqTW3C5itWQfX3WfW9Neeo1BCRpFtZocbCfiaUJXapLfuZxmJbm66TL5yhAZM8jPGzFJVsJ",
  "key30": "4fPPVpKxFfLQ7tTHDcEL5bmWn9ZHujKJ6NfYouw1YFPH3WczhyUAcLP6YiifRVu8cf5JPC5E8jmdvsRcMUGSt4Mq",
  "key31": "24dy4BGzgv3MV37Y8qiutJZiYABdiFHrapba86ZjTYuoLW1aaJQLSv3waLTB4ysby7ERbBPvZoBpK4onAAECmyd4",
  "key32": "5knaKX34ZLmQbZ1XkrNhPHLd2eyx6LeGHZftBGWQkRh8L2Eu9jzpPjR3S66eLiXtboaZaHYGomjuTKi4urWQQoL8",
  "key33": "8qFD5uGDHCkzFUUBcV2Dzo7rizd48s9HGgA55JHkkv3GG5j2HhUvZWPs1a1vSeSe6nJjnM22ajSCmqoHJPwiXEX",
  "key34": "DmNnYcdrSTLJvENc9n4T5K7grwyxMo3oX9zdNo6LCT8ePaYUDrPKNatnyUrZnygyyiWuSBqGJzysRWEmkY4cmMF",
  "key35": "3emP26xxyryUyec1R9UxHuXr78nMURnTiXf1atPicZG5vwFc56y47uinubUSv39YYFZH7HrSaH9J7r3wFggPQMPM",
  "key36": "335KXf8VRuq8oJeJNQrdHjr5uZLrLYbU6NgFX8cCZc1ZFQDfb1jT7gbN2YwzuaV9YXwP8fYGVHjQs6PpT9LatHvR",
  "key37": "oJJ4pAt6P8YiNJA9RwtB61gNaJ9ePEHHaTeoPcEZmBDzr8pL3pTiR68DEKQgaXyWeqE4oJshj1vXx8tHW6pHhsg",
  "key38": "qxWhRyRRv4535wHhqDg3uL42KLmZTc6VeqUKRTWqPbwLNwqriTdiM9iUnfJEXX1UcfFzctLbkLhT4Q9Ld7Arrcr",
  "key39": "x7mCKpb6vpkiMiBocwJpfsuMsgR4YQJLyASMsLPjXYbmSFrCiYmSwoBTJSAD9hf46FVGtyyi1imrpfg2o6tcXyL",
  "key40": "3TWoxUjxmciJ8rQnCiR7atBmD4h4ePveGVbY4MDGdAeDZAKCrr1NttrtpG1HbiCxU4EGukR7xuLhk3o8BkT3UHHq",
  "key41": "CQGhXqNyd7uKnWY6HEhiumDvjtzskY24uiRvpnXrpSTbkShrJyMvYiHL2zkoASuR3n4g2jS3qnVpuL9usxGbnEV"
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
