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
    "47A4nbYtDScCNEVvSonV8aFSN8BxYRCT661iiSWbXvLE4UpBu4wwSE3hJPkTcGsTCVTJ4co6LUkAF4GiXjkVw7Xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XL5Apm5qaf3CKZvDPd5Bx8Co2Kv4J72sptxVXAZWmuzgzJtsR9uzuyEQwvy7Wno1jtaFvS9cwgpKcDYdUWi9t5i",
  "key1": "5WDQcSYJ6k7um87dtwMBzZUbrVgWx2kVKTGzRXwt71E9a7yJZmiYHQ58vSmhJGvDMgbhcViznW73asjm1Th1cfif",
  "key2": "4Uk6bRPZpUjoT5ewxtv1GLRTXfgL61Nq2JQy2T4ESZhLtdPNMZryshPagRX9UsVW16HTRb8xoMHYBAf5gntARbCA",
  "key3": "66kLMsU6eeTrhj5F3B53tCT3u1aXzb1yrSWgDLnofHY5gYrVpoG2XqBYVph9ssw9imBhk2SZseoHbVWFWYvUa2Hs",
  "key4": "EsWy6UyGSx6CbbwGAbr8xd6P3rvN1fB1MJTHWVHjVFpYCLocbikPAcqiUeR3HYv6T3egx9Z3SuvrD55p9zgvG2N",
  "key5": "3nWfes39vsbR5xrrgvekYWemh7GBijLuGvXSAFA1rCBMsJrj3XCFoWr3bMKWkPazUZZJprn6NtERVWDdjaLC2dxZ",
  "key6": "2difLaBqUHhuxfrTF66dZFCpxr8nTJKo1MHWwSepnce4hXwHpFWDcqciddrgXC5pRjprX2bpvcZnkTVEe4u67z8R",
  "key7": "wPdMmKLeUDFrB4nHJyopShzYiQfpxYrYUPQqq7ARkSMN3uSzofwrd8EBetB8Cbe8UQnWyYjk53GHxtFox243Wga",
  "key8": "65XUoRrtdnEyRkqM4sy15wBMDWCM7GvB9RS1JK5NEADLs46ThmoGJrnkN1HoMZYj2a6ZqgxSKDxr9gmj3uSwjs8D",
  "key9": "5Q698yPuDXGVDQ7YESZi8XY7ZhwLBd2cAiaiRaYtnxW6Zo3BGxgcvrV1DskjpfenL28UdfjzuVeLcsSHxNANd9Gp",
  "key10": "4GRJaNEVpydmfmwN2AX8KzdhFi2hBkJfpysALxGQdhh6VLFjtQCeSjavJWzH3bmA4f2r8kH7kdXVa4mmqRyPqgEx",
  "key11": "58RfZirgFYWMKPURY8nTGySE4swaQKbowJhHPuNiLJ5hZLGwmoL7xPWnRtxa1hvCS3A4vRqgze76meqwLCsAznCm",
  "key12": "3Fiz45jgCR2wScCBE8moN4HtpejuSkreYZkAu3Jpb7epW2yXfr5LontZBTrfTySgXuHiGN7rSKxb7MfMktipnfmL",
  "key13": "52HVVY7yVDCnjfrC3549txKMdR9ZonSGrV4cUT645iVHPZNNPBTU3aBHFGfFYvzFx3bdzzhZhf8we1qhqtWnTp2k",
  "key14": "3WtkmMqskgkyXajEyUycpNXvSDSosBwknQPDLBvy6k9AQX6vum6bpeZk9NkEdtqCvRibjwy5YqHEFB1B2Nx5zkan",
  "key15": "2vU9yn8vxeNSoGWVj7LPHScC3mV4VKZdHQowuS4N7Et2wymwbQ1Cd9xfpp5odd7ijycZs8T4vLb5rcerwUni1vZS",
  "key16": "4Eat2jMVDQ4GKGXbVZkdrGNJ97yZN4in63VW8iY9uVZcGBVmpeSqNCoUx9RGBV2WEpvJAQDWvv9zdGeoAXLSxVFf",
  "key17": "3ZjHMke7Kzt8K1MXZH1LvkyqaE15X4opCDoFb8poLFrbNend5U7kf5t9nHyFGzdSo3AsDFK7271W83r2oTVEnRAg",
  "key18": "5Zno37aT4fovrXEV94qXeCVf15djnSsjXNMKojP6qJ9Umw6QUwNNfg5n4aJgT7sb5QTkY5y1wQTpFct9FmwV1tWU",
  "key19": "3WvcaCdV1EQJk43BR4ZA6CPNiWD2iSphwVU5RUs9wDbow2VCVywYBDXZjuEkpTPNCDxtnM54L82MQiLPZMPB5Pu",
  "key20": "2dtUarjBzYPrH9LKrZF1H2b3FxHjKdi37NbbDv2A39LrZhUeSr8eJExNZ61TpWHStua1KHrrbZ5PaXVtBpWxGM89",
  "key21": "5N5vMD1do2T4Jqq957g2Sq9ka26g1ecZsDVobxypWWE2EW14Kc6WC6ZBsZV2Z6j6M2NfWqa1x1pto5ML2Bqeq5Dm",
  "key22": "3Pq3WFvZbvXid4oq2V6BJb8jssHJFzTbpA8LW6UWZSep61g5d27YSHqrPDjzJGNXxdn9qdThd2Xj9GpcU3xoVsCt",
  "key23": "59787tqesd81mvgTP7dWDQNEmq48yaV4nxeTfmETLJtBtoAeAD9bGBRN18G1XgjUY3eJsLbjaTb2q2xZrPXg93cm",
  "key24": "22kSuUcZspJC7g8MSZMHxBV6eucvZTb6vR76TShH8xwpojMRDiSL7Nhgt5qTTA3droPi5x8chpU1iVYAY2NPV4aw",
  "key25": "5Jpevvt47MfzYDCUnZyxDFMSDoNL16SaDdtbdTk6Ztmn6B9W6sjsYT2D6wzBbNK2zcfVGycxr9DYTcsfigZRJqk9",
  "key26": "5iHdgkHVN1eLqMqdekozKa7PTD31ytkBsfXvFjiu5eDHhZjFypj6kp824JFCSkxWGfZqmhiZ5kLB2tnJ5cbWFEQp",
  "key27": "2s56yWGbxJi6y2i2icmNkqoooPQgPDiLYWEzT3L8rix4BD9S7xNQtMpvostBdTytw4teJnZu3mSEecuVwvcA8398",
  "key28": "5Q43xKrvtB2sw56rn7VHqdMJ2qCWbz7idbdsGrkKMUQPz2mZ1H3gebvxmUqWPhbQT2Ymnjpf1EmV3u1LshZhovrp",
  "key29": "3PmmKb8D4D3hCNqM1HpT8aJjN7attBY3U4EFabWP9YdpkAdMATLQcfnb6AeYUXAkhRAXnZwdTFSZWbtmYvgVfbJD",
  "key30": "arcByVMUGgRSqkNywYNjZAKKNjL5k1WUoYyQgKPhx7ADbysUpJHg8SdUq6ye5NaBcTLJ9qbCto6RjaNkWdMPxc4",
  "key31": "3SpkqH1xdME4euQjAzvpWge5Bsk6TsMRjx9EyQqX8UKn36scuPFZTEcSPzE7orbPKDehMmhJRi1fYYN4NZnuoKkY",
  "key32": "ucmNnxXP4JNNc7wR567CudHvtmoHoYtdUtsRnzGLrqvnpgbEGLGCSkU7WyXrr7nx5V9SvF4Zd7gczUbZAJVHBDs",
  "key33": "2DQrrQg9WYFMq3cCKaNgdJLPrctvS8UxcRnS5sbNZmeT4x91uMnpGoS6ZpsRt3Mm3Huv6ADxAw2nqhujMeZ5SGPA",
  "key34": "vFtnWZ1bGoEzURBDKqLXHTat4P5jXLd6YZPr3gUU611FmLhnUSH2u7c1gGXefSVWnLFvoQsmvpdu76pjb6NHURP",
  "key35": "5xpFqdKJTrD32mmnKyfhjJhFiGiQ3ZK1rTxJzAMjHPcoxe8V7yP1xEFjveweknwLFzyLgKqaAybhjD5n7LRpR3di",
  "key36": "54qDCqFVVWZzcrApeGdwoE72XGRkDZDPZcmnFsS7SXg49dmY4MYMqvdhiBoqDsMUotah6amAwu3qqENsy7JQaQou",
  "key37": "2devM8Pj85cesEdUwoSptJ5GYeZtDy11uGCtJHP6akokkYHVRsfAkbDESB1KVa1fmM9aVfxV8SBZWso5nQnduPUx",
  "key38": "2PxXxvytwCPqfiDLXuW9rBavnYrxAYm7E1zpNXvA1HzRB6aiyQYNoJ1aB5NGwi1tQ3BFUCNdJXVxqhxRDxZoA8te",
  "key39": "2tuu8CoRdJYgwbfV2AygnWAqLmxpMibnqdxufeAvvVBEAYv56e1VdCmW7aySQrgY7hxahxyJ847YsFGUpfM3Fe7P",
  "key40": "4CZAcbHqEVEKVtEwKLnKpnRLjRuRrLR2ZgZrUKAYMyEG6Y1fAgUCB7TFCQdzumJotdV2wVPyvnW4LzsaFuwchRN7",
  "key41": "netcQ6x6SnzyZ65sJvaiCnEuCrXwD5HERNecXJRYvUmH7wuzJJGkLEnHNCbjhaJ2ZPLuxNgPzwvLVWGvERvXZjH",
  "key42": "5qRM2xEmatWLsuzwEGWFpt5YThZqeMtyC83WSWGxb58TPHLdih4bspvjcTreieNMGLkSWDu8tywJE7CNFryzrJKw",
  "key43": "2QUmUvM1MfoTRbkgLYrMEkvdXJ9aRoRkDMN7TxXjyKN3RHXE7Fv9kjZ92bof66QB1EtabvU1rS4NGLcwXsPKrcPe",
  "key44": "3FtaEj41jX1Sx65fNJbd5cxXCQWC2PCMbQS3oJZ8KfswewvxFfh1CQTecfRjaN9QBHAqx2js832GzkAeAhraCMaH",
  "key45": "4Ca1x4djgcbx661cYzpYLkrHL5ZWYDbmgdAJURiAE9QkVzVyKco8s33yTahp4ZXADs1WmeTBovEYoybUSWgy9zMn",
  "key46": "4xLPX7jji7K6KkTQGpz9sdoEkthmhZ1kYR81zaNZi265XcFigML6nTc6Dze2UK7QQjsSqvtsm9jCfJyfhq2ph99q",
  "key47": "3aqvsPbYuXEMrhKZWoXfkdBVFhHXryaBaETz69upS7x9TipgYYM3b5MMBEH531NvopAs5ZhSZL6zWvdwNjuw1b8e",
  "key48": "5feRiANsCusAKfcRyEZszqF9pv6CxPvzyR3onBQVuegEdLFY2w59KrXJ4X1VkCQ9NkDVaxhgUDygSUwE3mrTXBQB",
  "key49": "3HwKWuRZqjtsRx1go8WK9DxB2b882VnUT89FBEcmwDuDpQTrjrwGZsTEDNDfay5ngtcgxERRnFnWHH9oj9Trfmgc"
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
