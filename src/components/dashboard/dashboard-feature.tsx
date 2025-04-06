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
    "Di8f6Z2G8BYBWQCK1dstYaHUdqoG2ktdBdS7asBuGafqxuWE3tLA6mHtmdDVBV1iPnF7CSJzJse1bwzQvHCk994"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ZHsoPJES32eUJj44CgMfP4rsTe2DByGgbqmcggETuFZQSGVUdZPK4h1bHyeTeyshhboHeoWntwiQ6vzaSKttxb",
  "key1": "4USbi5BsW4SSUyFQREhDVZdeEme5rt6SqtevCuBaTpq2LTQ8cQgatuNHNUBe8fnxUYoBWueHEwm9GZVdNHADXfCv",
  "key2": "62NgwpGnXVWgZRovu1gpcAKnCp1mBT1LAeCtpGrEVCAXoySAxdsucbccKN7wa4zZSBbv7QwhybuM6PaE4Tm2PEbD",
  "key3": "5tERcA2RQjD1DrfsLmE9Vw9wha13d9UDyu9eAXF2fLhvKrtsnJinocXBWaGgQuFKX1eHCNx55DcAJdg55TBDp7dZ",
  "key4": "4KpoXXdTUaMTF89uyvjqbkjSKyWHqDTwnhhNmpC55YyhVpGVrJ9gw2yyKDD7qNAhyBzZqXzXhiW2fh2ASEJKHD5q",
  "key5": "52XJXmuxhQ2CHFhpEwFWhFTJdqzjoSpLHTKCx8tEkd1tbc7G1HzHc7cTDdZMtDwKoc2YGvUjYcw3nWe4AhNqaJz2",
  "key6": "2nEm4kRubSVb3MwGmjfkf1ZPCK4CGUSJGfZmzfTUnFqk2AXViYwijXZBkhG8XnziPVDyWtTW5Vo2Y1ndgcLmrpTi",
  "key7": "4UiW5RXVCB5YzV1EDwAsajRvsh9kz1r4WLKbrg33RMv5WVCzPhecn2jTP69tCv2qXogpEDTaz1GKeuxF1tCT2iMX",
  "key8": "4jcyE1iU4hrfkjuPFEH2NY2zUfXG6UPqrevETwSFjru6SwS1oxwEuCL1dctahS9KNNK1J5fwY7zcSXXXcr4qAzvP",
  "key9": "2PadGZKRbssSJwCRVErx5uGdZhtGR9F2aLyfJYxyKZ4gKpWrR7DwQqJX2ZbPycgQnAhL1hVvUrYCCn5PmYUf9YGb",
  "key10": "3wRAXQMscvp6YhS2wtf5NLhBEngpEVbQvyy376duRJtLFA2nnKfg25hnA1u7pF93F3BRtLtp5W5JH7BKZQhpfsso",
  "key11": "4QeWYY5mE6iUJAUJFowgCNjZgMnKkJ1nA4GYs2Ua9pScsimiHbu5fEbV2h4nqkTuAdJErHput2rdGSrdyPKL1PQ2",
  "key12": "5bskn7pQQus4iX7yfXFX8SmQNLHwWrs9RGXKpFuxPJHEVtqUZPz8Xc4vcMSvBMExiwt3s8ymDw62ftGFwo2bp6Rh",
  "key13": "kq3W6NQntGDQdFVnkL6SR6cjpLTEQPYm1X8ndea65DHDPX38d11r8oLQ3z97C761kDFYiopnRxRLt8Wq4g9fQXZ",
  "key14": "4PyduqH4FsBXtYu6u9xXwDYPo62ZHgzWPsCGqaQCurEUw8eyXfnbhgMXky2NNAY4gw9CgPcM28w1H7oDU886S4h3",
  "key15": "3zwqwPsn8Ru5AypHRt4UJt2cTJWQNzLtwSG74eziwi33JDgNGVacUussCpND1K5JZePtcT3WZkCuHtW3J4pSnAEo",
  "key16": "w52Y2ugcrN5XjvYeiwkEMmkbPon8eyy4X5YaJJPumKUCD5G6v4FTnvCNGamQ1XPxfcDJQMJTf4aMAmhoaP1WA4Q",
  "key17": "5FAQaMDxVWssCmMXg1DPRkbVU7NSCYEpGXyuKmdY6teS2eikJtYc8qenvLtbmD9Un2Y7BQpQK1ieg6WFZVDGRGpB",
  "key18": "4p39nLbUyw5TCywPiTvyADMcnR6E3TX8jexAuw9229g97qxgcvS2GGxCEFmfrjEd5FX2beZwexTrtb1nPzHHKgb2",
  "key19": "p9fTQEwmWZEB8vRHkBHLHZ6qCZQwB4EW6mAWLBWt697nBCyq6Gp34f4cSik5ZwJrxEw6F6sDGufSbA47JtXArBW",
  "key20": "UKASVua5EeRkY5B32ee3cUmASDzCAxFX2xyxfPVV113xFr7ziLBvA3KPFU45PPYgBDkArg2j9XWxVwVBLqqp7JM",
  "key21": "5V9H4Crn3nUw61jYtZetAoemfSBjkQPAD9Gevc1coJMogv43QmF6XHsUyqyPo9iKh2DPioYqzawxze86mXHdsEsr",
  "key22": "4JUT574mCcXdPue5mZtU2siB8YxJnq98v3wQ4e29ouiqmbfr9BZGH9AxiEEex58rXnGqi61GSBjQVMgwn9w1PiSE",
  "key23": "3gcMmy4unQ1mokFmE7513SDk8yWGCNcQUn4gpYK5zJSMcSobJuw5BnDeP8zY9Tn6HFxMfHKWPNnNuRBz4Lk9tXLU",
  "key24": "4s8jDL9UMgPRvEug24nuGLnFZVZZdVUCvygo7c9P9tfJzdnK2tVFoJMxLy2Ns6T8Mn3bvfrHXWvgMr1wyBQ7dr1J",
  "key25": "2ni8fCbAaxBBsJk3pE9n1UVMerrE8S5C7QZR9CzeEbKvSioDswgdvkeZudvkyfZprmKZHF36PAMAeGTnEKFUVii4",
  "key26": "3nkP5U7ntnd5kVCygLoiB18cvR6MHB96c8NgDSgw3NhuFvepC7GjfNZWaHYefABLWKinayfeqJrLGmBo2Wa9LT4G",
  "key27": "3mwSSvt7AEMeXwzaM7g3YooWoJ2tHizjNNWnm2GwmsvEhyWeBEFSXTfjT2VscsvgJgT62GWx7jAhonGirgYYrfUZ",
  "key28": "39Qbg6313AzLbFsczohCUwq81cdwkeskP4sFwxFpndHeapD3fiCTWE4goUMSHgPw3FWsf8g36pbUcmJM4jaVnPCB",
  "key29": "4iZPUVVddKUjLo8RqiNLRhLKyxZgvydjxApYYN1q3PJauigN1AExa3pcgVRAy3ppWkKFEiZGhiYNXmYdyBWGXszi",
  "key30": "5bMcbfkWyzHWjZW5Hv2tnvwuCey6NToCz75bZybkzvybowuoyqr77UVWvcUvwoWbt37tbwBy2k8W6NsBoMDvg6Q8",
  "key31": "4iATcHW5n28mNXLaizPpqwypfbLtRqjBUuMsASfekC17Rp4BN5gzfGQd1UzUoHcudX78noZABhiMdqrYgWccPmXm",
  "key32": "3VXMd7UApVC4QpVoRds3EEZcSyknYtBMEvo5G6fpw2c619pn5y89SBTNfzywP24ymaTqzerMPfDh7BpyXVsVrbjf",
  "key33": "Ymnrs2HVSbRihViUP5FPfyY77n7oQtbAGnV9JcHfZQV1D87oiUAmJ9Ed5KTRBAnrES3Qi8dZzjHWmFVdurUo5Bv",
  "key34": "2yKuBpU91ydpYbrY6upXimS4swafrJdXBHytrXoDVAoqARFAyPA5nzBFmCcmaDkAo45fSYBX4oupKDRXVLaVmJwq",
  "key35": "5H8mD8t7VAqETmWa2XHYUsAwn7kiGCaTgMxJfZzqMQUHB6bzJVuhJw6SpQi9odAiv35sBcdiMnccWEpCYVKijTN1",
  "key36": "355jw2w1TGckjJQpJfYp7B3RaY7M4vy1tfewqhqnVLVPfYmD85NbjkFKpVbp7qqrC6JeMnPagFn2Ey7QR8DGEmkF"
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
