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
    "37z6ELQ4fkivC2Pay6FnMkooaK2h5Tsff9VhNRt6LAsUzyERT5JpypmuffwHg67fv1FL742k76vso6WuoVgLapR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v1PxwFv2qEaCfxJc575wfy6tM3RQJdvwLG6qmQJknFYnL2hj4j3boJimH7ia4T8RMJPANJxUC7MbfeJg8DDz3rJ",
  "key1": "2mPrpZjrm3ydp3TSifaZGUssLPDdAjRzBozqHXY3Gy9P4xpLBtKU6AonFcbwfwH1XNnVmST1yLQhgZXmSt4WHccJ",
  "key2": "kCZSfBhLarzJVyPuodD3RJV9SNt6BhoxhjWkvJ47GNAgP7wZGNpaYmztHKBq3FT5D2fUpB3m1mGoKnZd75BGkCm",
  "key3": "wWLQYxAjCVTZ11hqHeitfRci5r6A1QJaosqCYkfdceRHYz58NDvDjyJr5uDY24DLPj2yhxVbXGm6HTVwvxKb5xt",
  "key4": "2txJDu2QjpEhLwZifrNxx8U3xPXkPGHZmQs4iivrM29cqUTQeepGGrCpHbq8qDtwnAJZXuhi1KMMZPjnpChdGaDg",
  "key5": "Vwy6nRSGhAqx2PXmmPetQo3qRUnDMxYfxnf4H7HQbT7S3cucEWT5UWh4zJHxfjXgJCqjjvVat3FVo3R7GrtTtMr",
  "key6": "3wvgXmNFG2dM9Zzw3WufhpZqFiceuqiXL9jsnZRs5o2grcyYZ8bCg3Hmmc8SQG1pMnQeMKqCFqTTbCdbAgMrrKwK",
  "key7": "mYPA6TShfnY5Yhkzck2BZMy46CvjuW8zU6XTqbc9pzBxp2JYpoU4P1EHHVg7pcZ83HTZByyi6zkFH1tdsb3AEqD",
  "key8": "ygQMUL66yg6EG7uAxqt19jPuEPvt2snN9eRCWyo9f19DB1aKUvL9VRi3i1dekY931cys9d6d2BsqjtVbmfAgFEZ",
  "key9": "4SivCWALkZ4b2ibZPsbsSKFrg8nghAaZejbDWkCCWita2fxznQ5KVShChij9USFMjBWedQUh8QspwmAKA3ypYdMZ",
  "key10": "317wasQhpSRe2iBrwQaPtPaYiECyQJxUGHHk6RwquCv8E1Lakmw2ski2FxSea36Nf8yNdavdzjvtpYYmkRWf7chG",
  "key11": "5BPx2vwMjvjnxWyRckNSt3aaMCe9QdKco6WSYquRBDo1nsXWdDyqCVSxAfxMmtk7URT6DuAz8hspAi7ygqGMikxR",
  "key12": "3i3qLPbb84tAFcW3YRgQeThEh9PusEjDfE1iPiT2fJe1QcrKbzWqgQZvjQbagwQj4SYFeyCfF3SAPWnhUom4paBR",
  "key13": "5JGSxXDwiEUaU74zHoCjBcTN3Fej86tP2V2BvP6TWTk1996gvpiGX9hhB1rRn3Vvqj3tjQHUETdzUMnbkK1TfCHz",
  "key14": "2TGUuTBBjyjZNEGBCFYQc1FtZFVaqvmN4G8fGDVQsTSZmZm79XL8VDdAUvXWtGJPun9uyXNvtFmsdrZssB6ukhj7",
  "key15": "3fSsnN56fNqBRoiuUY2tUYcC63NvFrEvpaiVUWyFATBCBq1AgKxiMnbGuf3JCiKQAicMwzcYM8No4gy2eJ5HQfT5",
  "key16": "2TLf1MhTUKb1uXhNT6FWW9jK5o9U4aQkqDugDaL2Sf11LefmrL3KWn2CSmmDwQhAYUErvgmTdnAD66wNQ3n6cKcW",
  "key17": "21HxTToFWffzg9TwZn6cJ7L1SxXKhXzMVFvqux4iYttHirtizvdami4r8hvFezQUwfYMwBeLkUeCFXCw2TmB8xZE",
  "key18": "j341T1CyEeuKuczocaP8rAueStYNn4541vrGv8iV8Snskp9P4fftmLttkZAtbeJkM88FQuwY2cyw2Gs2cC458aR",
  "key19": "4Ttd9aiyDkSPioonwRAd1KFSi2U44o3FWyJ1BEavZPbFb6KwLXjoVmttxYcpx1A59FTEZp2Qf3gf6xBnpv7ZWgEG",
  "key20": "buAnkki9v4174pGrkNisLhNdc8YsUGnBouQBg5j3qz8AaBUvA8BCKeBvgvQ3QYP85u4kR2a2BFTDyfmF9dcNJuD",
  "key21": "4MCB3KSyYmYZ9s3fMc9AhcHwPj4Qn1QDZSckxacYL91hyEtSAk75GCE2oAAex8ovtao21L5cZpSaE6SVj3ZUJNDA",
  "key22": "2zvT3FGo6NPWPUjS3iWyXW7FH4eBWg7koyRoFTgfxijchqmZ3uYF3UsgAnxpe5PvJn1LGLDYsULKnaMubhctALwq",
  "key23": "2sszvnL1azEcpUwupUJ53G7nMj3fGfRjMfDwM9dgY2d12qbBxmKCJrGskcudbaKtKEuAZp6T5q6Pdj3F5LX44n6m",
  "key24": "4JtMt3wxvnRHcRRLqggcL3ehbaL4znQ6KdK7aZTcuUJvbu71hxJiiMrxQUcMTC1L9eCscVstxocHhRvoSAvRTt2o",
  "key25": "4GpgLNrWJWFGQbJvWjAbvcsZaku8QVM1r862kDFG4w8yiHiFJYkAEmdbt9veM7huKVCFGQtKUdKqiVmMTvF9zsZC",
  "key26": "4ddBw1MMUEEy4fKBV8GAxeB6mye3Z2MPZTnMHxZsP9C77Xgzi71Df9spLeHwaZ7rRn7UPPnQESVhDhpRgBPGd6Q3",
  "key27": "5jZ5bbU5yJBXcpaRgYY98CdnwjkBqJsFp7v6SWojQLxGcudXCkj2LgCa47AZBCGqwUbCpkbjGfAi3mFDaKrvekGN",
  "key28": "4eDsngnN9nFm79TYw2Y2efbLRZAs6Ga1iQLoxGFHC19kaER2WMfp7h95cuax4uSW7zAiRaAiN2pSwNqjFRKwSurB",
  "key29": "2of87hWi1W4rDV34E8XU445AyngV2qMYKbecrA1arn19RTGBRrqum3WFZ6K1JDu1Me11VcnKjtcXk7SngdxfM5qk",
  "key30": "62HPjiyBn2Bb221hGz4ep1kUzRw7KUvdEwvATHroxwZgLyFZbavutyLiNiNaj8m9Z9RFmFzCzERiLXTGB1t9tX9P",
  "key31": "5EJWeY6zmsXyXdKqgP2MdKXxkDXrfmCDm16uVrEKrdMSnby25fUSBBrQRB5iqhBJC8tigK7gmDhqw6fiDrsPVfaz",
  "key32": "4kKQ6sDTLF7RbSgiBMBJh48XcnAz1LesJXM7NpLjaCA3Gq5Cpki5Ae7iKyURQtmucjtKjEkQchp2B2XRYeSdSUDb",
  "key33": "s2ryGAdD3XR4a1qLDoNp6wXGoa4JLSUpjEr1JdmxbuWfD1unzGwTRwzwbHgNZ5HgqWWdtAks3Y6TEzbpaYPXehe",
  "key34": "2XJRSpvju4Rq363YZuofEawfFn3Sxgags1TGfJ6bW7FJUfSVELgDF3zs295JsiGgYBg2PBg4KbAyS9TrpycaWV6s",
  "key35": "4mt1rars79jqWzp3kSHUWmHC9UqcwoxjBm7wHHnceHccU1EiNQkQULFcGjAP3wvctGASAMBHKy6oc1hGoJweKBkC",
  "key36": "2GedzNJcVdjTLBShqHHyydQJpQycLnc6FErao6vHfSHSD4kseybgcSeWkG2wGG8NSv825fLDyThXXGyW4q8T85uv",
  "key37": "WbKFxnTC7ps9sDQwXAvtG4NXRTpjrBpbGFBeRi2dEZFbvnwXKfLqQgnnBkJNPY8DUQrCE6Sqd1ir2vsJtTEhpxo",
  "key38": "cXMCuLLTzxHHHeae9ibsKpA2Nys3b7hchJAU7K5JMKTuDyuyRoV1hYwSxDGG9TdNu9xUrwZia8nJCxpcwc64Ha2",
  "key39": "3VGMDj4eVcRBHX1nbbtABJQSGikFmyDyCbdMxWjV9TnjfumorNjtBFoENi5XWHonKvAGqcGySLeh84nk7SgwbkT6",
  "key40": "36fqKVtehqtAo8Er2dhbGWwnnhaGvVLTP9yJpBsmZNtFaqnqZH9KFt7NR563HH2u1aEnDNG5qqtbQvRjYDQfYj5c"
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
