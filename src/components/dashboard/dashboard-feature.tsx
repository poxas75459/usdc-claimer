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
    "2H5Y9tEKKR2TVjXGsz1Va4ia93vMhBdnGfR3RhBFoRRCWHe1528eGB5T3YxZ1NhHnJ9ab6gTUW6ikEvpvyCdu8Fo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57x4DXKCMRDSZwnLbjdVhXA2qeAGNvjhaXr6tDZrSrBciksETr6CQ6zhtZbZn8cJAshMzujuQ9cXYSXLppiXsnUz",
  "key1": "2m7P49SAGkJaZa9CMf75UFgWPjms9GeRTNFcNcJNLE4i6SSyF7hekXhqdZB7dhdbjNXyf2HY6mtJg7ZiaHPU5TAV",
  "key2": "3LtAwAagFpB6w3NTgW594wNemwnGUBCvPb3DbFxTiPvAE2GUihrnuszF4t5JmS6MFirsdTyfDqom8zKVXLSdA4BD",
  "key3": "2zWiyx67jv1Cy1zMB7bLW4Vrm8gzqztT1sK7e7tcQHHz1gKBNrR5A3eKyQghu7YRmKbvyeTxhYVvHfWxrBen5WX2",
  "key4": "23p4qaRcTg2TizAUCqydxWVXaj3t7esTXbtqiD7S5dAd1AEjuuCtqv1T7cVguhde8ekuLVR4FcU91dHJjjTxVDzG",
  "key5": "4ezewbMGY7Gpvw6AY2PgegQJj8yfLHA4EEmcgmCHwEyx3uwpnqGf7qyRfWMvgFLPobxcZUr4rFf4j34ozTism85H",
  "key6": "5dVrAxbX3yJXdMciu5Xo74Kp5Bdo3znhp6Nvmi9bFvXf6qF3q1gQFuMe9ySQPQ5ss7Nuj4vGU8VjePuL8aAhrTmj",
  "key7": "4xdbMHFHtJ8gWkf82TWoBMzdP7otRGjTT3bifFMqqezmzTCmxNqSg7L2zrz3rqUEz8x6u2jidPCW1whM2qTbZddR",
  "key8": "nYdwByWG1Bt32RCwybjP86mQqBYGBNoXCsqixm22uYdQeWdc41VGzkP8am9yHk6RPyQnxGCqgPeSBbAK5rDEDnp",
  "key9": "5givEwkooXmQMrViA79mqdiMbxkzhBiQRcCZqZ7HQGkBUo1UMsFUNpifRSm3UsSgrfjMokHYUNn1TE6DKhwymdrz",
  "key10": "5rJPGMnVTsET7pDkxbRCNtKhhF7uRHhmuDyp8HVmthzFUT3a94HAGx6ip74zyXbryb7yqWdWUsBctjEadS56Nseb",
  "key11": "2yh8mzSo18xCYg9o1pFQyv9WzMHaGq8FGpK55Z3XdXv1YyEZvy66oamRjm8C9L9rwsHpF6r9uy8fu1jC82pZYVBH",
  "key12": "2PXdtqaUJpwwSDjSGWZ4u471r5aRG87i9rU1XRhqCtjVGbvRijoDgMMfw13PPZaDguZLLi3qbt88BQkGWzGD4c9M",
  "key13": "43U8MtsLZizJpQK9q8Yiu9YuK3v2caeMZK7UCkeZjenibNRJhzzyQxSysvVNDoK89va6HN7MaWkB2kiVxpJQygah",
  "key14": "EhbCce1nY8NDyhnH6jj3J4Gvd3apymjMoKGPZaLjFYXwsesPw42aALYHfniTuPzUNVwAm1eLt92kX8N53xaGh8Q",
  "key15": "56wNVYF5sUunEKR2P6PS9CSSnf6JJ1LrCK8pASL9P1iqz2Drbx47Gytjpd3trvgZ1j6fRRGidhwY3mrwLcQavekj",
  "key16": "5s5UwgAQmfivk51EQYTkH5xejAxKC4SFXHSMKy41KQQt5nPisSQNL6GHjcZNfLuNN4ZQqKpZkrTQko6SSx26p8GM",
  "key17": "4e6YAMKWRMzRoJkbTbiydDcrJqczEi9awPHkjnzW1rzD33utMW5dK1RkSNJ4bgZnLNbEfep4fQtWRBLBCsenaGgf",
  "key18": "4MRXUar1KGSAdXpGLcqkqXqyhwJ6eqb8c8H95PyV6pkWPdAhMAvRpxwCqTaKa8SXDvKcMsynexxxGtELSCGPLZoD",
  "key19": "3ptitPSkTRLjtVptdcHeAdwmkaDBkDomJtgj4kRFEQ2javckw35wtHGPwPWvmZEaxmZM7eTH4vkHyx6EXn5uSPSr",
  "key20": "2Wp41wj7CbNECp1nvJpic6uFBNfGsq7Dbpu9nG3v3KE6eBdJwFEdmvueeXdtkMV5ZPZifmWgfptyzj2x4po64HpX",
  "key21": "5sznpJT4B1hey8PCExdMyqsD64HKibmNCw9i6mkRGp43y2JMcAywyjvzkhnP5iSFceGLhSToqmtNUEmAxZ2JFUXc",
  "key22": "foZ828KyMTe4HESfFNaWcaFei8p3V7VbvB9nh94CjsKpBGRbgykUWGgRSCLs6gfHmkBAcJuz72CEpDKMeVZPwyx",
  "key23": "teYbvPrVhRkGangmG2vN9Pgf3B6Sg64Yr2pqy9nkwMic1hUUpLUi8gSZgkjinfktqENdciawQ1Cut6bg3A7NPaE",
  "key24": "4VZUnpQCY91QqmztsxcnVMRW2CTGhAA5bdUWVAVeKAv5ucdZuJrphGWMNJywngBXC41HKvbnjz2VjJZcT2FDTJkt",
  "key25": "2ufVPC43j9jQF5MQaF772DabePk81x1Z2KbZaPdRJ6Fx9yoeVkjcNNiP8SwaCprj1PenUhavqFVCUjABQhduCgKH",
  "key26": "67qdAK958YdkYKyUYAVQhhEp13if2ERxLvVybeXEfprbjCZjio9LDqwComryPAG15qKR8EKSDbfSbVD8hqCwEyiz",
  "key27": "5abZL3tmEgXqdhrc6ZRzqGeuSQhyNAAHkpW2c2Ah4XXkUumBEMimGd4vJn88DFQnqHbHdAyXFHVMawZJxyKFMrzQ",
  "key28": "2kxZ5eZ1GYTHurRrBkVVpKMLRbYDYNEyyAfBeisHqNfAitZKEbXYagZhHF9ubwv6YFXcEtKBG9GNnvbWNAVH5qr9",
  "key29": "5fZuDEEDJHpFXQ35mK4uFe5wQacCWo2e9cBmTXmgwY8Hq2Z3d2Y9YtXfSifnNgAeU31f8QMU9DMTKmnsfzbjv2Bi",
  "key30": "4DVnvf3nmsdvpeTnvgbob4ebsR7NGS13rdbhx4JdmUoJfnoz82jsQVUS6NZSyrvrd2JZpFxUCmstbeZCvYv2sVfC",
  "key31": "2uEYVW1chxZVSwNH6knpSraHEvRLeD1U1Prh45dXR73UXHdzjCtfoN9dAgQUaZ36R7jfhthCyobBTdTnTjXmU2Wi",
  "key32": "3oYq1LhURdiz3AQKb5rrkR1k3LRbD1fuL3nUTyTgm6TVYjdqSsyyz3qfi9UkUWpx7nDWUdUdJREy64Wk1kXbewsr",
  "key33": "4d1ZcwWZFei1zAh5vW3Sx86kApW8mpKX19KfvxnKWeGVuzW2EJewWBBcezjiFc12sHfEHmF85uYZU3fihrf6QpE7",
  "key34": "36xES2YW3hh68NUgpUU7tszW49g7P8V1JGTj7dMUPMfLU4wb4azGrNQ3zRkRpmUehffvoL6RYyXqKBiAbVkRu8nk",
  "key35": "4FBthhVRuz8LR6byu9aJ8nh7CjpdGbRow44LXaPLG7jrtPLBHCeDeP7L5wRrqx2sdKok9pH9PQJGaurFj2UAB4fG",
  "key36": "5GdGVkE46nmdLoYaqrToqBUamS6Zp4X7ADnfs9XcVS5gqh1wPZ7x46VXr6g4vnnHeY3tyiyXAmNeK8cWP3EopR1Y",
  "key37": "4buNJsMMv9ER5Q7i5v43EhQUncZFn1rPwyoHfENUmBsGYWo4AQTmc3BPuCv6whbw3ST24ujvtAVckPW5CHEF656m",
  "key38": "JHJ3MmUC9aP5LtrARFY9HTC9g4mSvdzT8F8h5WFmWxGLGdivNaEsmNLJRCd9KB5XgWcb7KJXnbUJxhTh2u9Gvxp",
  "key39": "3pkh9yPbtMEGYA56jLLcM36sePyLKiaMrCtFnvyVMupfu2eugUjGXR48vne9KiqHZLXtkKzLfVqfDdi4fJfXvKL4",
  "key40": "3dqRnJysGcQsEdjBvtV9HVgcVmvXkjiMpxrspioM5ubwC5gXR96U7dUD1umpCPy7s2bCCPSKh3bsxsyPMxLK8cdo",
  "key41": "zCixtAYifCC2ZRVGxHwgWXqP9pXbHn1vKwwrmhPsEVz375vuo4cnjxiqQKbEqq1LA4QKDsrszqXDcHzBAwamqw3",
  "key42": "5jNfJfMeBA7Fs8TW7F1y33yURzF5LbLXWi3m5tPemAnQVffqXijgjWqN5K47WGUcaETUdezHZKHieBgPMY9X7Sto",
  "key43": "4wnuokFu3hHDFopqJnqYDzXyf5r3bR4if1eTAHfmBLG3A4zSJqarb9TAdpPdBRj3TiWoAtUEVEbFFVnzdumPgYd6",
  "key44": "3hvq7we5LVR2MNK2pvSdUgir1BNnXUnBLzXFEJ2QdTSgjVMPntzqAXKyLJ38usanDfKhFpXsA6eNMXJ14L68ScX8",
  "key45": "3c3wSna7d8PkaU6WTHdrQy7WQgRax6M3H944XRhe1b9Dic5ESJsmv9PxCCWUjg3jTLN7oFCav9ZimiUeZAL55hAb",
  "key46": "3rcPpxVigyHrEavzUJVCgLXE5zjB4mWWwV5iCZp26nnVUSMEynunQuQyySeLEeRpBPBHGvEpLMvfrFHgGka6dXAw",
  "key47": "4KUZE2bFhNEUWn7a6hskKJuPXFX1npbjQyedhgqdUr5bovL16AEMmwWMoKPpV2h9q7UmUHn8J6zBMhpv68pQpiM6"
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
