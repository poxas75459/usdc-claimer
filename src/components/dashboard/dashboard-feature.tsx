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
    "4vD2V7Y8ntNXYqBh24eYfxvtnPNCgGjL221dvXnnwK6MyPEfkogu6ZhDXzPeXrxTNNUXiUDRaNQj5SEExF1BS3EG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LTRMUw27AqtSaHQfWmbcsS3SEbzuhELR8rr9CJ7c7Pqbiexms92wpfu7vbqZHt5AXGfDEc799ixooXMewTmMvzN",
  "key1": "4tmexDtwRbkJi3LDWSfW3sFf8xR64BzBFzA8rZhJXCbmHbSaxtdm5qWdSNL9pqs5SbzfycVfqB5jDnctYsaQugze",
  "key2": "3LjUqofSLHQ7Q1UVFvhhK1inWgPkCjZTxoEijq4ApuPXbZnvmer9KauUMJjCVFev6kXaRc4NSo98LR51wSZd21Ue",
  "key3": "45kYX1Gx8o3XZYM2CFNL1dG266hUcKUQ2z6ntnFuoXyASBWtERnshfp9hwwYqvKpKeiucJkfeyRnQuQdHusBmKps",
  "key4": "5S4wS14fssV19md17iJ1qpz8D4pzrkYq5c85WSKFVfBSmvsnwpwrZaMhdBkHtxfXix3NyAtRS9Tvuuixr4RorFMY",
  "key5": "tD9pLXEhaYhkXMKiyky4E5UAUV2naiiFva6CZTKRDGpJhJL6Y2KGEKuihgG6N6qyfGm8rey4nWYbBasjUjGz7zE",
  "key6": "4GRkAtEpUG3yjjT9VzcYUgxghupcSVqt8pnT1teYZe7pFar2TeCTJmj9G94Cohi7GosxthnLLS65VSj4JjYA9umt",
  "key7": "3fpZpdsKaiQv7wxHET4DUC9DpQM69x2i3aRL8uGXs57xfp3LuR69dTfqi1Sf3VG6wEKYMKux651gkV2ZhuTdyB3T",
  "key8": "4eAeagZcmi9Wfnxvf9MDgDB3FRvpoFsJ3h87X5MtVkPfXsnjNSNoqvf1PYbiwvcTk2CipaDwCJSf5y9xQfeT26zG",
  "key9": "2JxfmzT2YMQGCb8tzf56CXZ6TrroeXjPHALgBSJHLAcEWWkkK1Aop42EvBMG9vKrozbtwuvESKz1V2qNTodqAUs",
  "key10": "4xyYo7X82q2MzNdkRBZzFCfXjfJi2RHCsWoeJdZnGzaAGnV7oqQAAERt1P3B1zTs2YpEhGNKBNuNfqixDMxoxjBL",
  "key11": "4bgKu2CtFE2ZVdjUNpkYyUwPG2QNJzGTAFQ185eXjZ9F5yWpyD2e856TmECvWCnLuRCiZ1GJEmi8UznxhvjoVwEs",
  "key12": "4theXLjRSGC2Yt5SvW7L6MJNvYMnCT37kZp4hVfU239RzW5YotQo5Y79qvXfnhpTXiAfkQPxyzu6YS81w2GEJPyi",
  "key13": "51PWR68vxuBJ4CGEbxyZ2CH3w3mRt8W2eVKbzfDq7E8wdkBZNwX1LWUHTnMhWsCWSeg8oAXCBJuKhjMfsVQuYECH",
  "key14": "4QcKkJN1FymESS2D3A5xwqjSwY8tTpG8W4CEoMJGgynqyfTquvcFrTxuNuvecei8bquAA7cPEVhRSGV5VCzcVHnD",
  "key15": "5aq7TSUvg7hXrRCNqtXmf3fDLyBrNaLi99ZX8y9bXzxWXPtF1Un7vaPAQ6MqwycJTdySeBWhpvHmrycY9TK2BZjT",
  "key16": "4KmZKoLoJ7p9bifJb4CJ4AsBB875yhaXte5NfULw5JUoGbz4ZyDAvt5WRB6TDsW8jsz9jogkYUAVsXyCZXSnSJLJ",
  "key17": "4ZFBom51baSQn6MYFbbQdZxJuLPAGxhZHuurNv4rV6jwSSkYQMhzsp1TDNmFcMbHzat1Q8LfCtVeKvAx32fYfQKp",
  "key18": "5TaTpWfNqAWAgmE4rAaojtD8faAJKUUzFbb2Rsi7Pyw4JbT5SqFFPt4q8Y9m4snhPLkeTS5cHUzNFKKVvMRGy3ae",
  "key19": "2zyA39YK1Wys25d8MjnVntCzXhPbbp5hXuyE2WnwMpwUZSmqY5QXomsgB2N9vPTERnj3Uou6taGRGUjsKwNqJx3z",
  "key20": "4tMbtuzZQ3VMz4FP4vSf1zTeayTjzzsi8otQfp9onN7MDVad4tL1V2eFRwVJARzDehKNTgMrALustAYrvr4DNEJP",
  "key21": "58WkG97sgwrMMakDoy3PvT3VKF71U2mTG5p46uAUUawnyiZ6xshyZ3N98qJcRxiqPPYxtk6HiMZN5GP8LWsoT5J7",
  "key22": "33LktRp27u63rSbRrnA3hj25jrBSubsr8DbVYGqkmLkyTfDndHSqpZ7iYmBpYP37JpoNgcYtigXHufouHTW5sTF5",
  "key23": "2kiN2bHXdok93aDi1W9Rkghv95AQo3Ar3AKn8NCh5vr4E3MLXgd7od4x2Wndc6oShF6DtyAmuU84whAhTio3DwSQ",
  "key24": "52YjbE4iw1BzrrtedLxopg8WvJCfbERaDByZRBFXkQ4YVqtUPxaQucEWB8pKwYjLjGBJYDMWeXhz1iGfhjfzTRc7",
  "key25": "65XCPAtY1EkEeN7MvFEducMiNgVRdUKpr8w7VmvCBZGuyri2kdSPUr19CuFnWhmJYTRFR48sEsAZJHSQDn1hAzgk",
  "key26": "5VsJnJbpov4jy1ZKWcMTXUjESzAQTqtJMhFsis6xBH4yVU7SqyysgjmyWXheneGLh91JrRkYEEEhpnFae1TPsdKN",
  "key27": "2UfCBkqFeiuwiMA4xhiDH5K864FyMgn639VtgvojN7HjVVkMAbobyZJz4LXfY7UcViSFzBkQvj9JwgvmRkkmmSFB",
  "key28": "2pN1MC3Buyin15qyG5nefusCUpjKxpdWqn77e4B9C84CDL6v6R8Lks1EmxYr3FTanuJM5Ykq5ZVyqDyxAECwsycZ",
  "key29": "wZuNGe3G3P3AKbHBHe2sUooTjJoFGbA4V42GujAfpuyGwcU78EhvcPZTmAfbCvUzXHbMTPzfozMMBFbQ6AUidQn",
  "key30": "3kBx7tNgBMM89oJEDZDQLB3sUTAkVUtURFSZ3zamPMcQRfC43uKagv5wafFDr7MyGRX3fRwZLCCy53QYdu9C6Lta",
  "key31": "5HdfFfHe8nXqkh261xwDMsNfvJwqjgYDLonb9n2KErR4vtunUKTbg9Pd7wKKutbdGnJjtJ1WpbFFT6qSq8sQsfeQ",
  "key32": "TaHvSyTZaQTZnNKGWePVhjXvqHU7h2YMePhN38ZDf1bKUKLg6PGh2yXEysMak7fjbs2tHRcCnJWCWtMkoBz98WP",
  "key33": "2UzQ3iDvCwEDczFn8hCV5PijFnHJBfoH2aSCk194DSitNsqpm1fSSs9bKjYJp32MLeinCtbK9QjRXXPPXNWTn7Re",
  "key34": "54QcL7JatfhFJEq3jj1LZc7C999TPLNEsgwuyDvZteiUNQTx7zRkEfA5ojrsUSpRbNgnS5GutCq7jgrz6pm89pZM",
  "key35": "MboXHzXTsxVCGZW9rVKWozXcyNBnTU9NVGcUMifH3FTjtgb5mEGmi4P7HDvnm77Y19ohcxYTMNgZ3pKQy5j4rkv",
  "key36": "4rHmC9mWfj7RQWeGGEBrhjeRP5AbrnGVnQo7LtbnzzrhEBsvHbtT14goyNUpcZYq2RctoFS1rb1FcgeQ4UCGVJQp",
  "key37": "51YAiJeCj4y8ifgqzVA1qmcVpdcD9FfEY7TNajEX8e5XED57kmh2cpqE8SnHMVKeMoLxN3zCJMhqvcZsGFSwR1eG",
  "key38": "ubf5358jRw71kiF5rVWmBa39XYVchoj8cTNa9iMMwxoKx5nUXqZAjJfREgExhTPbzwhwoaCntPdPp9882nnfKUt",
  "key39": "2b4TtEAMumD8YixJozBGdZERp1MYJcgr4Vgg2haoLbL8o52HbwcCBeYNVQypHoFbcuiySSS4LJ4eWM6QNQD6xgN9",
  "key40": "4zygowoU7SHhpXENYV55RPQF89eqnV6pYZpHYZP3yeeAanaqF1BakTBTW5XzLsrvTGqzx8NbbMh8h4RZXQXXmMyd",
  "key41": "2yFgi6cTxirHAFBBud57jzy3eh4z5Ui5cwHnYaNT1YHs2cikuCxMmev6i9hqix8ZVh1rMs5C4Hq48y1GoMpAiq8n",
  "key42": "5hUAsWzxLkHSPUPZdKunyGrzW9BJYc7v7aapakYDGgayZdvf924wUmzN7yv52YUnw4BN2XZHfmi84RiaJpevuqA4",
  "key43": "51kBUCGJRDKziojkUUH6nnXY9VEqE4QqAJJTb5Cx9jQuhkbtAVSCX3zJVZbUzQjVvVnfntdqaH9qbFdjXr3hNne2"
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
