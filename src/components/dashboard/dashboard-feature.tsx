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
    "3QE299xt3nMSUXHBqm8LwD6GpaTsBaZLbYtp2V21hfdd15PMeee4Gan4cDxQ4ysHHNu5VD25qgddE9uDxEEcUAZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ja8ertdCdBn9UXa9khacGUgVWDBS48qeKvzos5sfvatVR7YJmNaUEF74s9vzqCCbsTEkteR5M9c7W9tuQb6djkZ",
  "key1": "2fJdbn3mTZrSP3U8xZz7kZcd6Gu6N3nbEtMb8zDkHmKYyDEdVzJY7c7bKbwoNLMe6eRyyeJDiwRUX5CPwCbkexyd",
  "key2": "4EE13WVN58jMgWJ7fxHfbGuMokAS6YRWn7uJvFNMr9eB3CJm1bWiFNB1s7jnuGjWEHsipwUa6BA2VVmWWgK31bBk",
  "key3": "2tTBVmsre4YbxAuBZ1JEGyuKG19X3ZAhbhkpEqzeUmNBRrUop3Asq5ZP6NMDpcDmB6pbLnv6EM73koKUtVMp3YQf",
  "key4": "4NFSfrXA4BVGuQKUZaTNfUxhKZR5tgzr6w5eemxceseQEZsxZz81TNhfqQfBQQGCiV6RhUMzoyFNzpMkubiY4Fb1",
  "key5": "3owtnwvGu5Be4CNutJdqYjtF5GaqMmdzNJBRrg8wn1AzEiktxwzYbiMtYq6PSC9MNnCwLFkEtDf3EggHxuxQ9uGe",
  "key6": "5q6T57fX5ef2KnxGdtbSDqJCKA8pcZhAbK2QWBh3gQRAE3F8q2CPCr9RpJTV1vGNq45GxfxkXC9jVRYJP5VqgtLt",
  "key7": "2aLzYU8kGBTfLtdwhhXSSNSVwdcvYc96f63gNBXzgXkijqzxP1132MjYL32is27mUWRxKF3hqkWciGv7osChXeXw",
  "key8": "vjz7ysL4b1HeZDLLk9b9QDhGHBgCCNeSRjoGgDnQGr4g54CgzezdobnBsCQewisisp1ko6tjmskNWx4PWhCEwSA",
  "key9": "2z9M8UXyUpSbeDxcFrehbNhe9P2XtrsTtLct2nXiNRq6veEomQSbJVivuAzaeKR32Ng9nGtQJLH28jWBtpi7a4MD",
  "key10": "mYiqm2GA9dJKquF6y7i9T21aMbKeAsZpbch762W9W9j11LkMD7UTaqsXAjaANHtDfYgecmQzWfBMrVHRdDW58fa",
  "key11": "ByYNbudLsQySfT2Mfk9fFndnnse2nTqbrMLHRqCMiUZVssyuYUhLTRreVKT3YZFkiz4dUHRtVzgxgX8x7gCUyYc",
  "key12": "xXCBxwqGBHoGbn3qUhvjcHPKa8PHFz87ZBsFQgYoHefyG5nM9JJdP6eusxHAqMx5PRzSvhLwLAssT48RkDi86TK",
  "key13": "4A2C8fPPdBkkojHNqyCmX2pchF9cSobAXuRe7MWA7SmLjZsyaFW2owZ3kSjgLK6KtL7obxkpYnvNKfJmPF9bbdgk",
  "key14": "3rLSr2j8aTCzaSUPq4TU1RShtUaGgpGY5mLk6yLAUjA7FVVKTjCJTJNWoCZzWgkkLLx8TTPK2fVaXTWeoC3osiux",
  "key15": "3nCQNpZcggDQAQPskM4efHcDY7PGSFkz8ctchhjS7MYccdj7hTDe5bN1iSnzgjvGsBim2b6GRZWVaszN2LW7j6Pu",
  "key16": "91SSnUT5uCPja6uw3nVSgPgHDiRYcnBabRks2qHKWWkj3uqH3jFG8Mzh5GBjeQfdQrmi43UpuuWg7212Gyy3jnG",
  "key17": "amQR6kQJ4nouXFTXHnHtN6ysuP6DYKxYGNFFqZuYUQDanzNpaRZ8zv4m4zJ9SLzG988Ju8ViPs9ZAdcyjWCQTqP",
  "key18": "4h9ZLLRqjjbnJPk1zccfWyCaBUh4rTekzemvRvMBXVCAcc3EbHWXXXYEszke6vvqnX7SoTFXm3idzVckouUsL9WG",
  "key19": "251AcUkcWrTtCi7G8KC5CkReTJ9Zcq7kkS4gEtV69DfksBqkgWM4Ez3DFbg9FT6AdX8T5hD9mT8anBxgc6htYDLy",
  "key20": "4yvcLdAuQGX7ggUpTkeKzVckcDqzoUEpiAjkqStNUbXsDGM7FbXtBTKjCTfqJaccBsRqz3jAmb3GGGwgKzpTPu9B",
  "key21": "2Dpv1uv88b92c1aGedcGBkaB8M6ozuGE9hhniTNkChBsK5qMgeRvRkoaBYVEWuUkZgxiGe6tHXsz96QX3t7583yj",
  "key22": "5pYfN2pzLGj4zDQyw24D6Pvfen5YC3rMbdT1NjobbnLxQFCbhD3oc5HvYfS9UXefivAVhMV6Kxti7cwh56n4KPhd",
  "key23": "588PXeBcdMHknJtFUNTAFhCHgmZ17Jd1akEvS7TMPd9uiJB6dkuSBdf7BaD5v8uMy73daxQ6UQm9rpP8qTwUyJnw",
  "key24": "5ueHonTHMBNCyqxabfw38kkyDFfnzRX7fPBfWw6K4N1hUdbPVvPpPLjbFc8TY3P3TaL1iBJ1wTJUT7iLX65h9myU",
  "key25": "5VwyhbdU6U7xhysV9ZFjGmAtYTpguLPibVFEFgeUPcQG94T1ZJAUmvcz5GDM75hbYGgdPwUZF5c2jF5JTuGdH6Py",
  "key26": "3y5MeWzECA1EbizguYWKjvXPeFamvsM7mKE6r5YhwsdTdgtxsvt6xCn3saRDijHX65aKATt8VanHMZ9tkpzvJm7K",
  "key27": "2GZRUyDbHqdPRrpZYspPPQGjcQpcQBX61NzgNC5n8KHzbEhL8DCS6jPJZuFWT6WeTJSERssXP6ipyR8ERbeEnJhJ",
  "key28": "NvSGcMhvfLgEqPd6YRGg81y3DkysqCKT1oKSXwx993rYYtw3A1FuJ5CWb2ccftjkAYDeBSLi1r8ALfaYRzBhJf7",
  "key29": "4tzasKwWotEpUUKA5Byza9YuY8CT486QjyVc2kXsP9s44kNXrgh8RVNMjoh2n9sn5ez3kYPNEEMam6msvMXK56UY",
  "key30": "2RU3mJFmMnrwLnVdS9eot1SJ7majy7Scfa1vFCzssWQpmi6vk8ZFfZ9RB8NmaBPyW91a64MsnxUvBp81JeFVQL1M",
  "key31": "33S6yuXC5EPSKYjJwxQcQkZeX1zN2K4sXMkVrNpdk4TXSSNiiWeFfUWn3mervDHmm719ewdoRahrnoLoGnJNRxvr",
  "key32": "YJvGXoYFq8BhsRhF6Xq2FrJMppyc9nE2Yan1yoePy6kzhawoyQdM2fV9uLn8pmJ2arEpyKmsGXaqeHCNo2PuHFR",
  "key33": "4rRr8ixff8yUXfSu5bSYDVthD8p8H5mCyE5BHatAL9H4Ni1T8ExSX1oGaoKUtU7fUmjaQYUCvdSeNemhTHjqvQDU",
  "key34": "2L8XFRoKzwhTYKt7ZJKx7ku6MpViii4G3ub7M4kEDWXZkRe3Sow7xj5GemEWb1YWgBheTRmmUsaNKd3a7B5ar1xc",
  "key35": "328RgfXCb3agmLJkjjZc561annNbfbT5qU4aYfhC2BTDy6K3JvyBt7UysU7gEeCFG2ZmRBvY2SCAUbbo4h6iB3XC",
  "key36": "3D25Zk6a9iXaLRvgoMhwpEthtxbGY19LwRhMzQ15aVMTmuyVsCRpudyWzH7RJAgtr3cDkmzmWFg7P3TgXBj39zZ7",
  "key37": "24iN1SfmPPLgoxnBnxVkwRFosmK4Lx4BnAk2KxkpWgGpmHowF7D7THwtJDu4RS1SoRDtfLSPZuvmde9N8EJkhY5J",
  "key38": "HFGZvgjGZ816xqHHexn63MLQrRbReX5hwMfj4MvziSgtmLHhf92fMaLgPTsAVp4KCbrS7AFNcfpizFqx1mFv5Cu",
  "key39": "5FKtBDydhSW4dgVpgq2QwupbBKmPVQcAYEAQ4D7ZNhU3gLYgVCN9aCojrdnM3kcUujHgEpGFeDis7xgkHHNjktFP",
  "key40": "4DhKbw4bNzj9UNc27iKateWeJ9eW27tEfQYdhuY6ScFCrP7ax7S2RWsBfx5WVnaBzhGM5bD9QLDXhNSc5Y4CgFN3",
  "key41": "2AxZkb5K51pow7ci4JT2hSHK4rtEPwPb8Mqoh2eeRoqH7EUVjWRyUA8NAzyhUiSrH6dh55edw1Z8FBacU25ug1HY",
  "key42": "GRBA8pv8cAtiuGy5CqXAGycewT15cgUNF7TgyCLvtzNPrcPbEDiiFJRgq4BCYKpCnKBKcnZBjLrMorfT7yWcS7s",
  "key43": "3FzoUCwVaszG3ySTXtxxhjeGXQaysPsZUP145Q3tjYPKAfCDdL928yTcQfiVq4cLKZemqZuRvi8g7tYbzS7pSjNj",
  "key44": "BuTze3M1xojG3nvG6JNkXSBBYqPVV42VFMoZ6zAmqUH7PYUd9ANwYCtgxhVmBoNWG53xZtaoncLgDpm6UaSrNhL",
  "key45": "atReHBXmfNRWufUozsHQMto6HB55VJ74KZRNrDrN1XswWtgdX9H46Pm666FQfjgRNf46ZEeVmu2MzUoMm1xdezL",
  "key46": "FzKeS5vgYyWM79GNnXSrNtKGzgN8VkJG1F8D7XaCByXTXYkgWERsdMTobvxS6F75tFk1Fv4gS5c8QBhktRkBSX1",
  "key47": "4LyLeDjS2HEj58Nnh3FaUyCtzLUAbCvUHGekoHsX6ccCKW2JhUNuDmWfgAtmBviko8k1osSsRjTwKGByWMHhospw",
  "key48": "2YP5KvwyEXuTZDb8rCXwLYJLbbrvqEqeCwL4TEWyNpzXhBpbJSwMY2WvLYycdS8iMaZnic5CHcUKyoskvvx2kepc"
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
