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
    "2VUEMnyjVQw5kXvw79NY1GgQ1D7PKLrBYxHxQrRmoAoj6Q2hS1FibApDtmVLZc4eP9EYRW6SkhoVYAyn5zqyzgb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iF4a6tyx9AGgjswBtznUZuNY8Wd3joSPXxdeQNnWJBY7Zj5BTH2T8SLb2F5F4CUWUtE4fUL2ozGtZBEozoAaLwg",
  "key1": "3cojWBnyWnNzFYauJ7W531jyiMwAqBzZGWrg7awqRayat7Wya4Hy689mpx9UxjSnqdfjxgKtEyXtdEcVYWgcsCyu",
  "key2": "3U7NczubtXsGsTJ8oquNiefwmSfVsZ7BiHaMJUHm5jxL2MX4a8jWvbEwYJAtqTofhweJiL2WezK4md1rFnUksRNp",
  "key3": "2MYwKKMEJCtwP6srJMStLch2KkxfQKsmwHtDSz8zsEbxQm1Xexg6CWSL3iLgB68iExZYf3jQo3AQy3gkMCa5coEW",
  "key4": "3pz32MRR3xKy4rCxFxyugMnXY7q86QPb3ytNpoMkp8os5pvJqPNEiaxu4i31d1WxqKUovQmdKgVDt4fDxCPvTZ7c",
  "key5": "3nAb1sQKgmqs3pQooZCk7XZJiUgRkeHfTMZdgmaLbCD2GCZtrGUim22tQMV3zz7QsucHBaz6uoSWtTdo8faTfEdz",
  "key6": "RrCaubEvynVZYuhcSdfhj9QSvAhsw3aLVZHWNsJd4ioLvcbty54EJyBZEmJoTMP87FpYSdoCEoMiDCv3wm9UGQq",
  "key7": "2oADoyL5LgFL2ab8cseaPupgZK2oLdXrFizSigvrtdqoSWmWf3UfTxdKoC8frY3QiBKpKQZRCVFRn9MFYF2scU7a",
  "key8": "XTpJWeY3Wxti3DDqY5GRiPiRziucDPVa8znakXpegYt7p6XF4R7z7CNfLh7VmwVSiAUvTtA2HGhoDDvcCenWtmU",
  "key9": "3nyeaz9s92jtdBxTmbNNC5MAih4TJRRSKjudhCQoGugyhxVcxWFmxMQFDmLnrm7cDTAEaqPvxXtLp2ovsqsc2r7K",
  "key10": "2RSFGRArbu9tNeJnMHjTxDRPNPYcJZnS4we1wwLCQyTktgYnZ9s33ndawx1btpH2YkeHqF2PR96urtCeM7nJaLtE",
  "key11": "mA2xkR7YeREQ1VUgZebiatwk6HeByvZy2nmKzwiWFMvgFpnoaRT6WUyQPc6seQjN8Zbeofv7XrNFXQ7spRXVgW6",
  "key12": "4uZfscbdDy78xAp1q1damoqxcFm1bxSEcJ7riztWQyiBJUkcg39poPpkVox5uAuEKPFrPpm8oQKpJ6sBfoMsrt1e",
  "key13": "3xLwxfzrhf5MJ1ZiNLwsa7Jd587fzRyJJMEAMdkULcNM4YCVAwMYA333w5QVJV3KNwEZsT3jnBdRVMGVnW2qESW8",
  "key14": "6iqnuZdP9eLjoZkiwTXX5fFakJPrMc4PqfoGmXL447dAiDGZydJanNnAWigEd4BoFzB3wJoUxZsw1GfE4Pgvicx",
  "key15": "4nJRmZKA5BTFc6znCv8i2WZNhV9cdj9mLAgVJkptFeyXkzTKLdwjetu7GedfoCKyx5oxUFtoNEgQBtPTCV1wUrgJ",
  "key16": "3tsP2wHHvFAvKjUwzMB2ZXpje2Ey3hfQ12VWVA2WHcYvagcGzc5dWpUei2tjGZJysVg1kSgu2AX4Cs3YPRTTfnUk",
  "key17": "44C1riPruqCqLdLurMq4GsamxPH3XFLH7FDG1TURyzq4eaNz4AuMYgpiqfp9nqmTkDAfqNcuUQFBrTtKPe4LU1Mb",
  "key18": "wpZhuhPPZ9GqMbtMEVUEmXx46NRxgf3bq8iNxVvwR1dpshDT5a5jEafw2eMYhPC1kaiTE7tAQNjQ3Jt4MDc9LgT",
  "key19": "3csNkGAJR43uuUivXXhMxoYD6iVFxydVyVSLWDX7NmCmx18GC5RUkCSzStAVzNFemdA3KYsBTTxhdsGoW71yzvbY",
  "key20": "22JWCPQMrArnS1VFJd8crmLwxkfntWncwS2xbrG5iQDWG1u4obfFm9rTUyv39u4po6ftYEdKzudWfj5yJSTFcXme",
  "key21": "4wpgwjuYZArULX23wqhxqW1xdvUrZDdbrJgJXsdEivFNQV3djCh8qLXpzBZxvKp1MhDjd3h8eHvE3S5DT57k9tTE",
  "key22": "2kVxaG7FzdiyfBwSStbojYr8v6vfVWF77Grsb6YQACPSvfELEPG95gVm6EvxxxMpULyeSFsCqp3VBA37cURBXGKw",
  "key23": "2aw58gnbGRWvuxYBKmXjLaRU91iYk3NPsy433LfVbov1zCCGpS7q7sRGYaQfSJVwi8RaEMqacq7KDafnufgc3C1S",
  "key24": "4VsXrqBGQn9VyBWi2jkExKfjJMpXTzRiDNMbWAHZSnhxtwUcrn3f2aPzeCA8R8iAUQQrXhDP6eAW5DLatJHuxyrr",
  "key25": "4XDVTG5NEZQyx13y62LpRgLv9T5MKkEPAifip1gXtA6TFwuU9cKQVD3ePpvvYweY9t8uU4Kokz2kvrvt2QqjKPHW",
  "key26": "ut7zUVT8zyiuNVxMMNHPqi7rg5cUQhBKnyrYrDG6P7nSq833uogW7GZBUp9J5UQbpzSURtXGyGFvcDa8krHS1a4",
  "key27": "4MRt93LEdNYpDyoGkG42xJ3CzE86PS5jGrL2q3R4MUqtNXSXG9yMYAeW1VyojtaiJQTfc1M3bWtkXBYL7sEfLWZm",
  "key28": "55Z6aXs4vooda27oAZBHpbRhkQw3keWDzH7gH5QqnzhzqK7TnyCvRNcx1ThBkSZX8vvWzYtLMi7an7r1Ti1wf1dp",
  "key29": "qGcetzm21rX2RKuESBmoeACKBYhwmtrv837jdqWLvJ3oHHJqqpQrRKMYfonT7tAoEjDUdAd3GpMJhmjEXbQH6Gu",
  "key30": "7mEcRDrJ7wyjdXoCENvCK38JgSaLY3cn4zwbkRwBeyaTYkDhtbDyDptbWkYqG28vg7pExpwDiPjGBBFP21rwAbp",
  "key31": "fhxfdg7pM4mv3AzrrFyJwm5oXyr4Si8Fgag5EGcJQTewJ38hXagEcGDDvKZ4Kvz2gT1pYqW2c2nbtM1g2ATG5jK",
  "key32": "xJ1p62Gy5jaq43cS3vc6pdLNnFznaXhaFyNaTCrR3TE4kBUbZ9PHVr8GoWkD6m4WcRtVJgg6YXZMQAssx85Mu8j",
  "key33": "2ih8J52KZZiChoyBgHsPyZbgxEQwj4n5a2AbE6mq6vGaNc5NP1SfSX8EHmvS31ym8dUBNYwqfDBHQzLtN9Xyuaa8",
  "key34": "5ckpGYyuAPCTJkffu8moH9gC1GPVNve1j4nR3VN45MrfkZJKtpziHVJmR8xtFYpgk4Dn5HzChDFzDE148jvE4MWK",
  "key35": "ZWpXJwRT86kXqVVRpRu4y2nny4YKFvhKpWRCWZtVASuk6V7NPdBb3WhRsjYFhxUW7X6QGmWo3Npg95NAFx8xzB6",
  "key36": "2fZ2GetJQDYaraxon77RiZ5sKZCXg6vPrkQcrCxnMFQXsmo3vAS89yxGt59CG1sP1hMsNnbPngeDzKh2mbpQoiDq",
  "key37": "5ZrWxNbavTFzPok2HE7mAkjaCdWJpPQXVTztpGCYvBzPg6iCPMEq9iThPSZqsh6yweaQVgpQkqVZJw27w6vm85UT",
  "key38": "5kTqmN8G71kc3yWv6bXo4JxPWwkEqvs7T2ntKvs7KR6GeYVVgvubrQiPoFRDWZSmWDz4gRNrrNmUF2gKh99tPKZa",
  "key39": "x2BycLvvaeiWQr8HKhEmU8RdU2KBjN6a7sowurCFcNvRuK1yZe8NFcVgNY1vjRjnGPgYdCMtujf54Msv8tPtUMH",
  "key40": "pmJYX961aHiWWjaXWzicYKhH66okMMbqRBX1uMZcxzmCmNcuNa1p1JNnnqCzn3t2xcercv2f4Unzv3UtxWQ3i4z",
  "key41": "2wT14uAXEjoQPEzWNVEMNzWMfjhQvEoaNAkYrXCY6L3ZR2wD2Wag2TMuKH5X2cSC8XPLdwLfgm9iWkybi1uyoAN4",
  "key42": "58KWhANNkUK8cnUZDfcGaCdyjFxjqfpj5PiakkwqMfzHNXS7ni3ceRsGkeZkhAobueeWBYtSi6iDXt9bPS4n3GzS",
  "key43": "2RieNRovfJdCHd2dCh3bFZyTP2vLDfuy1ME7P5tKDDtBFpAvTm94GJhXcqrFECrV5ZFerDonyhg1GYMWRcYBkvhk",
  "key44": "XWSW5P4sQ8zb4xjneseQbKRY2gXxfvHhgDVzLxCWvGHzHq1HcVbwyyqZ4u6N8MVXQDYWfAwV6hnshWX8Pvo8zHE",
  "key45": "2Z12zVQrXgpCCFqMzdnFCAaa54QQaryJwKB3wUvXBCNDik97qTZJSU5u4B7wDFKLhyEML3psB4AyFRhwy1Q32zuE",
  "key46": "5jQxs75omjbuxtG1cL21WUnDqYnYDFYRzSRjFseywVJ3eJiTj8MT96aV1HrsgbaJHs6a1KXZ8dBznFbvQucuwoR6",
  "key47": "4icZbrFyAFyG2i5rMStF9MutQ17uDsUBKXuehkHx1mzMNNd4Prv5aPWHKNsLgorwekGThM9vmvE5kkvRFWu9JGhe",
  "key48": "23FYH3jZfthNWWa5bCciF1QtazHemVAiwrbEZuNoov3BqRqMFYfxjXd1qt8Sp2MMk6923wwLd3XjCisCc9aW4uQj",
  "key49": "4PfrWYgMFWA3xWfmTVFQj9ZUngcv2xMMYtqWDoVNr8JreGcsVEq5yhDNcVazb8vo8nwgUK4Mje4NrDJvexcSJ1aN"
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
