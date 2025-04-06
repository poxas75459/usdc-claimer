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
    "4wSqupEHxTGjG2RpScXhWoJnU6ncg6yzXeEQHDN3Fq8hAWYrQuMHkZWG3RFo9yxwAJQ3UnjTcS97pQdPTjzxHRsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NPmjKmEcSkVxRqh7ewRU6KNc9zCaTdHWpHir1nkVt9EZd8zHdttAFtyLNKoCEaaSQ4tLPZTuERZRuWcWUEzLidU",
  "key1": "4Vy59eZQaAqpFB6DzXMPodrm55iYPFwxDaNSSauWx3HUNs7Q6r17Lo8f3CkoHTqJMPeJh7TRccQoQoG7Gtynd2GA",
  "key2": "5aKKgv4WpNCwXh2bkbfHX3xkUwAt3hDnXjWnbpFLGKC4wkTMXAWpj5TriDHvPiET5V7V6mmhDTPKQgBUEK4RHQzH",
  "key3": "3hVMN72GkFRpwJupiwpMavHpWXiHGpSevbyHDBqRTmcpEkHJGKjitfTxi99jV4Xj5emA2S77yxd2daFtDSHxL6UA",
  "key4": "3WPYN9WdTjuif8nTG5d1aJNTgAgp5sYfqj185TAnGybMwYyhgVHK6tCQBurVGuT14jyh2oRCPEkCrV9uXDwtFVm5",
  "key5": "5oek4CsRzEa2rCEwqUJZR9HYpfqFsCqDDHHRWEWpusbZW533z1mznHekwbRN4LUVixfbzeDSE9bqxsAtKFsHC4my",
  "key6": "5sMHSidZw97YR7c6GprghxpL6ZBT8pd88pk7ZrFjEWHDnNmNLv2ViFm3eJjcSfd7saV9c2vekJnUrrsFmFUnWjPS",
  "key7": "4MxaNPsq9DiV7cf15p1F6f7ZfE5otSmVD5LK6rH9VRUkdTkw6PTqDCmHh6pH8wT879JNW65ogx1thdnsdt7rCnFg",
  "key8": "529fQEzLE3fmzSVtaeE2JF5v3YyMoW9bqCJyHiqi5tHeLniSwsV2SUdDbr7YJiN9SJSNRwwmHkgKHz6XGD8jQRaC",
  "key9": "2EJMgHgC9rxPfVvCzgWycKVVfsyoWByqCTo2JMkExLAnKpvniTPBJcXgYr5gDei7oyW16AF82Xz88e8TVxLaDyfX",
  "key10": "4mrQ1hqhkhTtMQoo9771EsttpTyi4GQ8zrGEhYTDzuoQjWbfzBXuogTMAjC6wKQpwhPmPP2jP6FmCkesv6BLd8Fv",
  "key11": "2wPq4DFKWoaU1VE6KfmcMcTFL9LXuhnLQRipztYPAcUiKm18usXMXNKEpHCdCtjNdmUqTsmk65KjJBddxhNKHrTM",
  "key12": "5iEG2Y7z4EEZx73bb6s18rGdzMzPdshaZodqQS3vRnZjecAeVVDrj6SXqpDaRd5dQENpJ6hdWu5xdzinyjeUWFZZ",
  "key13": "5u1B3Mo8y3v323ePe3N5jQJapVpBrvurJcTQCfa8tcPupZxcf2CnFncpssBBqu9vnU4bGhDn6h1kEzUE3JC4xi9Z",
  "key14": "2uWx9L7LfStigkEgefcKyaYdJRMDtMGzXzkW3uKXJhfo6CiiNjNBAwEugVrHoDjxXNBvPBxg921ujcqtmy1sD6Wy",
  "key15": "3iCgRvh6pmnGmdPHAVPYEb3LfY2W6S5SNcN4MFnzjAotTFnPFNa662tJovnHN9atM4L1YxM7gR4HruhFaJPPy1UN",
  "key16": "26H53hH5ny7EaAR7RHmqqtgLmXgJERBGbJCq2auXuaEXrvMA8Mh3T6Ckj829qj9HNRvDCjt5vYnw4utQsHyYwK66",
  "key17": "5RqCHrjAJix8bZYrRZiKzhudgt2psHzXFmEXufs2wq39VGrLk6ZreVi1DDT1c56HdSjjYHeYiNnPkz3Hx5pwB6nm",
  "key18": "4TgkBFjYEwVn5ZN1g8RK3a8rv1EAwVyofuaaAjiGShKm8ZgwuYiF4mXRNw16hHShapDBxrh9D2d3WxZywEzQp1ko",
  "key19": "2umwLEpn1RxghyXerpGBZun3yhmEqhL5RTfZ2geLMpE7YfNyPUzx5LD7GPgia5LiRfXWfUfo3Yavy2t8PaA2HQmb",
  "key20": "619MPVAEZ8ToDDLeAnbRtJBxpNC9KEBwG6HoqgdMcoou4VTQuo2U4X32Rrntkg7CHX8NGaGJX8KJaRHVLmzxKwUA",
  "key21": "2zhmoF4TFhn5QqR3TyaHu6VqmHW6CtLo2Ww7eUZGjesfQpXsWjDC1pnXVeLSNctQKk77MtgdXCfs7uMKWUT41hDf",
  "key22": "2viYVnSKrfF13PKTXK7Q9fByW9fQiBUsnFpmkueBYgoHjGqm26eA6fWkxrx4rRW1og8fTnGAiB2ovDWmWkTwLHzW",
  "key23": "2MG2Mkvi6r22nC8knWzrovgZhkeTWMXuN56jDKQRQbnxZ8kzrkXmqwhZNNuL9GsBXY3Tf3xEVE4RfmhtE7Sk3UZh",
  "key24": "3kK3bGheKBK83NagrS3PJg9HfawL7xJ8Ko2CPmYcnU8Gmcgb2hQG5S8ZCWaArywTcR1Vw3VwADb4fMjCXzj4FF9J",
  "key25": "5n9WMDSUfy6tqcwTqAaBDPjKAWwSefMqPvg2NnTVasdVPnqks69JWsBqEBUQTzXWneB9Z9dGqEks2jWfWCeJoFnr",
  "key26": "38HFhANaPeA16pzjvf3Bopeu8DAc9UjLPhXgiBrUwGW1krhLaKfdwsSKikQkrYViHWoquy1MWPE5LfLTd72k35pj",
  "key27": "22E3wHqZ8nSKGsbCmPgu1Rq7ysPcB9bZhQMLX1u3PrfAMrGZ3G1HcQU84rt8TF6rJpLzpgQVmFxekR6H7TNPEDTF",
  "key28": "fgJQxvvLHbdGh27vZsJ3Ra7roTGr9SKpAerbZRBFLFk2cZ1QQBkJt5b1pjrDeV4gM34AHAWeQc3Rd9GSPkAaF85",
  "key29": "645eunE61xWxZGhCniJ8B3NeXdGvXbZ8ZZNXCK78y1fSfLNrE9iztGSbnc5bsU8uswAdXbG5a1KvKxf14RTzZkzk",
  "key30": "2hFCgpxkoVnqJgi1VujByjtGXy6aJBGfMeTh7LvjYEHbYsMNysSPkCtFQ8tqdmRDh3X2NeyEUi6twXkoTyk4DmEN",
  "key31": "5d7rC47tL8rbzMwhHXRZ6gf58MfvWRpntHhjGjK5rk2iJZEQD18w8mSzLyoUT37BA9tij9FqiVoLLxVmqpZuhhtg",
  "key32": "4QA4UbT5mx9e828UNAncDsrHjaYZZJw6yUX52CWT9YW32ztjAUxwT55QA4Jksz93m5cqaVLSuNjaT8WvKamXLi7c",
  "key33": "3jLDLfdPfndegtVvqBkiwp38NMvr6atPL5UEb7bVWCUEtFqfsfdZQkrSvWfh6Gw7fK3LCBmHYW8DrzxB5i6Ckexm",
  "key34": "66eXfk6T7LCvKP1ZoFedThTpgmW7P3dExXdqsUPDxyj9rU7wkjQzVLrSX5xbZ3Qd2H6t6WHXTrtxVm637NhnJ5HM",
  "key35": "3qprDw9yEvpMzdvfyZ4GKvZQ5CEjJ5M4fALXF1jZTiyHH8cB3nWAoC5FD7AkNrmnN7viZFEqMTKiGg6Dur5RVPVY",
  "key36": "2LmEksmLJumr6fDbsaBssdKeCQdpWEC4bc16TybiTRapHEm2aJdpbremMuaBV2UiaLmxycsECYHVx89iXFnyZ67j",
  "key37": "44euoyVKKK3SZQp9gA4T6oTy1ouE1un8vkwWmCbVFJJaT2ggAd4bcsCNpxw8RpZ9EED9MChJHgymKc4QLYDKNgJ5",
  "key38": "24v4sf9y7pHDCAJwqs7A3o7Wh4aJgJ7AGBi3jq9ua6PPr74sgpfv1XzjcCGKEepBAKew95694eBEfJNnYZN2Ye6o",
  "key39": "28355sUnvECXrkVVMcrveMs2jxGNSrkhF3dt6xRGY9gGnCFqodVmVkSSi7qEh8NrjNSpqut2px1X1fYKLq7EMZRA",
  "key40": "3Dot4YB9KStDu8pCb4beYnHPqSMLb2mAtBpxQLiNZKqcqWAxSNz8S5S7gfx8u1KN7Z5gTWR94peh2bJSeXaccbPE",
  "key41": "3BfZRZUR3ukxMUpMhyXLtQjphkvFezmDB1f4s9eYrdQmQUCJx96pSh1zc29eK6y7fpnaD6wkDEPfXEz24ziR1Pub",
  "key42": "2nphKSmfdyNZst3JEHuXD6KdRyEkZLhqgPz2SvwkVY4WWNAfaY7UjEQy7SWPGGXU8dt4oKnAYov1EZjXiCigrrSi",
  "key43": "Arh7RUFpp1VvEHDoZzrr26jpCFkzfir1vjStJ2MPMV4jK1GchWS9aAicHC7goxg636bJmrKHuLuoYn9dEAV8kmC",
  "key44": "MachjkQ5wsL5Y1TgETDDECyherVhoznN4RuQpviMPGs38pT6i6s5EpcWqHfpYEtqxRhDCsk8L6sh4JQiMggGPz8",
  "key45": "4juJMT5hvBgyNwhGRjT8x4igqyHwzeqFu2zqKXndKEK8VfXp1Pk9r4GcxgPJeCHM14CacTxhvQwSrsWiVeJFc2cZ",
  "key46": "Fwtx15a9u2zR4sPcy6dcrzXKs7UCGb5Kc5sBHPTmeDeDagrmAjQGqukqKGGYqzkvcjV4SfqFiktnXUaB8UhvwhK",
  "key47": "2FJkmWzMkY5SgMJpZ1yCco84Q4EdBi6koedXBajz2KgAMWegUPaNiKffMGRAoR41fW8sD61x43nxaKjRtGLAZXJp",
  "key48": "4XoqDZ9saC5VWePTo7fwG9choKMRvXmVi44p8gHkKrH9HZsinjf2eLGH2bmMiptFYrZi7tm5rpvnR37Peb8Yv9k9",
  "key49": "28nAKLcYSmYt2nhALSW5A7uTm1ynxj497FPBpuZo3haq2aUekWhyH3Um7MPxtr1Z95kZzCR9phmcxqvnnDR84ZLG"
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
