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
    "3ucuVaYdZbgtLGRVZksseNuhCQDyMT6FMJKg2piX78bQcPxgUBtTKEVowgM6BMiksVodvhWKT6tZanwcYmiXz1Ck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SNjRfa9bkDQGB4ETbZ1KNVeBX4hQLNAq4R8NhJtvsQHkDRtC9pH7zv5qhxehEPp9W1eFbUnxEqZe5XEyvmJVk2f",
  "key1": "33n5daJ6qvcBmXxCdZB583VQMN6q2byRWbjKyCahXtbvwqekaoxbVwMdftZUJJzwWMjghzJVBeXqaPba8YHaUnCA",
  "key2": "3jxgrro7ncvwtL7R92NzRSFWS4u6yUZ6hFLS76pbsRjeHXur1Ph8eurti6ZvVQmTBFS7g2JGdCWgt8dpMaCScZx2",
  "key3": "4LLQqW86fbpKJKGMAFAy8E9mMmrSsmU5r1425TMKPz2hsZtwA6MkBdu5699BvuZFdTqjHDxqcXvK7HFsuUG6HURd",
  "key4": "28PueVPxUA2sZFmoWPN2dQXixHDqL8DAw9zNp3HzLkmdoRDqm5BPPXYtySL3pqGqCNUavVdEQU3Z3WpJM3qEHh2q",
  "key5": "3emasW3wcsoZeouJseRVESykfHAkbBSNGTvwRrGaddbtp1dwq1ubyqpzweHTKkwN2xXN3yyuPDF6v1yYMDWnZAPn",
  "key6": "2Q9vXjkk2X9mK4fU5EqT8JD3xUTLp5mFw5nRM1EYSgtgGxwqKo7Y2aJiRgwg3mz4zfpHgUqVtRJLK19bzfpcDNRS",
  "key7": "2vbmYUrW1NzjqzhHJBC8Um2eKp3VJh61d53TDrnNXu9vWM1AtZqrd2fniGz4WAnLC6Kq4i7t3vYfg9Yo6oWf34Je",
  "key8": "4Vg9BjDXehnUqCfJsxFYGguJzuS8cr4vbwboQHobSsJi3PCeqpK17zpNBvbbst61Z2nr8wWekpGLNMLgGVX887hQ",
  "key9": "3hAfpx9mzbgNUCqJrMcRBBqsu9pGn5s3ExNjNia1SKqSxShFbBSouvn27g7N2xEjdnr4QnYRDgmghAkd8xJCmAva",
  "key10": "3JB612pDYcwsBDfWV6UMpGp434AMeB97AV9gaBm49aMWKhRS4XcBppDb9GisqLL6RR86UvyECtgbKfgZAyYjo2XQ",
  "key11": "ihPgJ3whia8dfbsS1e9NMRHhtBiEWXC2iLepyCJdZj7PYjuDeUxMrWuaLBvWZruh6T3iHRXtVyqPRfU5kXRQjLt",
  "key12": "4n5WeLzLvbcSsMCVDZJGrpKDWNyHY5H7nfiethrnLH6qyLCgApLq52tY1vsN2uZJY7RRvr9tfbP4LjRc9V2KV86H",
  "key13": "3u1ttUDd2pa4jomu6NM9aczX841E9ZagJ2hAGSAkEqBAJxZ3gP3ivhLvupk56r4hkLx6dpmq3TCFwpyzbzBPL7b9",
  "key14": "2cfB5FABJpR89veKM297YNHAs8iJ51idiYw5UaQ5aRUmFXhGenxQur3WheKb4PpE7tD1u1ankxZWWUZERydGzuGE",
  "key15": "rQorU7c1SXTM4mPfo93oktwmrFiNWWPfVMkyaDkRygtW6jGCkJk3Yv86rRVF9CxTpDuF5Ypo1qmnvi1oKCiQB9t",
  "key16": "4gUik52G88QTdRBM5CTF8HFoZ12H3THmQqVxeLMtVqhqaHwiup8EF3e7i6LtMLqzYKMEk3ChCZJfUNLtqtgFuoZB",
  "key17": "4aL26agmvce4kfEoF8EdpAGNhBFAoi51hySDYHoXkWP9zst63uTDf9Qo2Eu13LsenjjL8ys9w2v53TwdfLAuEKsy",
  "key18": "65ixMVv9583yiW4ifd4Mw3XnV192WCBh3qvctFo7nrudzP4NxakquGUvCMLAYZtnwrqv9J6QjuijKkjccd5KTgkH",
  "key19": "24BQn6QeUjocBrn9PzqgajRnTzQgtTskPYHksV7u1oRQveEGAD1mnguxrehZe7Tz54SzMSEBBzBgra7Uh16e8ypV",
  "key20": "3HG7haqvH2rzdWCqFDsA4iNSmMGm3Gi5SZfknwAnVZaAWEKd8Ei14F1preZ5cg2JT2boj6MsAVXaaewaxycG9unz",
  "key21": "43TufTGaHxsXjpBJinQSgPA3Umr7JzfCehyGwCMrhor1fkGf35wSHxh3qmMh2fz4BChYtquk5DvvfteKY3ZaArAM",
  "key22": "QccqG5NMtLamZqXjd2T51hXLrGtb1QMnk9vRM3h7nYeTpNpmXZVkh34PSgEWfvGC9nm3ubxbz9RsRUeqWQvFHYL",
  "key23": "4oBnttMZVE7BKpQmfGLKjy31cwAK8rLWZYqxnwT5ZThm8WkCAVm7FuFyYJeACTLDGtvVXzDidLE6QtVUX4Qb79Cv",
  "key24": "2rZAfR5MYRSqZ6qYWHWG9mEvNKjHcTaKJW3Ymgbt5LXDvfPpji5brfLvjs7mkM7VyDz7NZ8KXtL1mBYoz7hxmsDW",
  "key25": "Fvp6KV74v2qu873fr4rigNEFruMNKciXVVm79NQJWDrKnjYMbB9n7zU5WbaEWb9eLeCkaah1rRwsCis4A3XQde4",
  "key26": "5Rw4MebCUgZYHcWDfkbg4L5g5mqTLzYh5S8iJFvCxKRd5BEZRispRRUJkHztWQMYbM9FHceCAftKrAM9nuz9QPyi",
  "key27": "23g1SXyTZbyMwDd7UDxCYzE6cBfpc7Cn2wSFdX5BxrFXWoMN1ngj2ete9FLLhgKAk7zHRFX39c7ZdJXzjtd2knhz",
  "key28": "3UtSAWX4sCaZWYy2ahN4v8qLq23cRUywKsZaJxctuNCV47x3auRCGTjaBYqqndPPedPPZPYo2W7oTPZJ9NRAaWzp",
  "key29": "3BiHDw2RFavy189NhBTnEAwFQk8SpTt7rWH56JZzKzcRy5Q8JDCcfC87xbsgGJTJNaF1sejEf1gMWGkQEzBXWN34",
  "key30": "5yczhphfdSansMZw3v1xPpTKGL3LBkmq5vWJyU5H4Rz3fiSZJpaiCEPgZEK9eP6V4RG42WqW17jrDnvVsvkAemg3",
  "key31": "rebjZJmWFxMHp7KNqvokoxxPzMPh17kcsaCmSi19stMdQweUNUMYNokoB2MdAXQdNAj5A1ha5FAhGAaQsa4ad1v",
  "key32": "YtBNdmgsD1w9G49b8GKgqocnt4E4DxDnf7QV6FN9vsxaVMHwgc8pG3BtMBE9rdvQFxJQr62CBHiCJePnjWAgVY4",
  "key33": "46fd9sf4kCM6dkMWexsgk4oxRkF7oNk928NtR7bocp3oGXtRF9jHHTXHsKBa7EXdEwEigNtvKVrLm9jitvfjBFTC",
  "key34": "XuPWsdiRwY2yn1LHRMMcvPxYgMx3wsVTP61o5gKzXzzgBigV4bkHLpwmAGmXmHU5Sp6er4kodCJceGPAjs1oZao",
  "key35": "eBNktf5wdmUjmZivuPVnoiqtz8i6LZiP9rgffXg8DuMvscJ9qgTUDrFQufSp556oeb6jC1YKfVinXHohWRtfewp",
  "key36": "52dR6tbeogp4RRDdHjfUjzq9mfn9isa32SjSdL5GjBNBjBbTenYQZmvfJdAKKRG5tsqBaXratMaJsUu82ei1Ck18",
  "key37": "4bf9CAg6mhZuMQoYGhfjNVgLGkL9xswD8eqL961sbQxf441kURQjX9WWnzv2UMbd2DHy6jqBLBXVCdcXSa6ZTb2b",
  "key38": "4QM2dnitLbm5A1QSbv99Dy7Xjs8TSv16gJ3KQPcwH21dFJiEMrPnUtajrfzsdJisB1G529QfASJFJ7gPePfvhZtw",
  "key39": "2NVSa3EHTZcqL2tVeVa3A98E1YRDg6vAzyGJGLp5Meckw5KZqRDW2kNGYhso29iV81CV2mx2vWCcPqnrtKpdUBz5",
  "key40": "MeCDA2mHNFnagAHGprEKKun65Em2ndB1CaJAEox9AgHrToBL8QhFs8V1D4xNePoVacQAfTf5YB4HZnyAGwBQ41r",
  "key41": "2peA2HRSGX9mJsJBeKQYC9LaWp7M2m27foBWNSpYgFb2hdQEgt2vQ2CSfQoTKjCTujZ5eT5V8WqGVuYsuoEvzz5R",
  "key42": "5ik2DuesbNtmcrHXJ3Hccfrj5VrHQ3QKfdxJPnjMarust7VYWTkLYRr1GnjprG43hN2DQzNCoRuye6dP8BbdvBZn",
  "key43": "ynXY4Z5QV4Lcb9oHjECZL66N8FshyEZYCP2Qn3V2KPyN3TdiSzCiRmapimar7CzBo2t4z7hhQNAWECsoyeUzqBi",
  "key44": "yccrtpbRZbdXt44dSG6rg4Nv7BEVWDUgLgLqQTwTB1Qs4SoLLDywbdZ4fhYh9Najxw4A65ZCnnd2BAVeWhPPzXu",
  "key45": "tNaySZ1DCbumPtkACDJw5jCwcyUAodTadmGuxW5o1QwQkqBjePP2UEEiZNgrELVejcSzQ68eMKaTrJU6HMc3LGv",
  "key46": "vmm3qDFyShhQAcz5dxu2EGbkozvmTHLzw9eUSAhvxHe6z6fsCdzmbzEzoJp1NBEQqGJbnR4VwQvV7wJURBDs7mJ",
  "key47": "4gtjZmRUDySnidcNYJw4vjUbJsaB3bVLohGqsUokpAKD3k2ugo7BVBiYutd3aMxB9c4dhdASUrHQSfQz131beNqN"
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
