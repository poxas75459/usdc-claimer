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
    "65RJa9m4iRpscUFKakwk28YSyNi6dRVwTnBmijNrJDXkxR37VS95GC3q3m4UircTKrud5M4r1ot5ju4PUbMbR4MJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pBADWEMGoo1Tutuct2nZ92Vu8BrFZac9FxybtamizJPYBbQDCPPF3Fn9fxFCXPLHukJSD7K3CRRL8xqahKkogqF",
  "key1": "3SNnB2aSoNEVfDUZu1RU928cKePA2szrJkUXdn2KTPnMDS8M41BZbUnrbeF55kABe5x1wLjxmLtWBb4cB2MENJk1",
  "key2": "4VUKC182HXzVMGKdp21kfzzsG4Aa6fRDLZqaZXAFT2WPDtZSdyzv3ZeZQSiPaWLqK9od4yDxzuhEcJxca39YoJfw",
  "key3": "3G28Bdn8bK8dCDE2XYqUxErztsUq9hp9cRVzomUCNpQNMzkoSUWWxYLDBFWBrsW7RbocJGeJsE9Z3YyyuXoTVxJD",
  "key4": "3iRbCSCdEiADay3LX9Yi5jo1XBn2hmkSHgYppYyWfXQVkyJhKrzSZLAfjywmD2GRBzEq7bUaqBx3pWS9CYLyuw5o",
  "key5": "4CPhnqbyd1UBcZqYiQ3KNnAwKkKMyYjzcmfCFUQjXF44vTz3XGMVthpspK2dioLxSo4h4UKdKsGVcqQaN1AZNgpp",
  "key6": "58rRzDu5EVxWd4CGAJGUe9SsbVpJFGNJWSf2e8x2NETn95EWwibsdDGZABHh1qkLfYVseNhzJZopPU28uXrVwTPe",
  "key7": "2znt8seQ5BC6WJoeMVYmRXrYmsriqK2J8ZbhN2CQN5W4CfHrWTq9zpK44MdLMcxv7rEMTb14B522FP3TREFsT2nJ",
  "key8": "4YMDjF2FeNi64uWo5xXyY6DxQt4KswXfZ57wi8MpG9iEt6E2kzj2HtzEmf7XXYeeX3n5XUeEiou9SiyrvVNA3trV",
  "key9": "3mgMSqnejixsPk383GgwkxFuKSYupLcCaLjFBsKiQGpRGBMx7W1AiBefAwBhHRi2HF7j3jqYiJbZxEdGHNwUG8Bg",
  "key10": "ovEpEaTxuCqag7SWmwqgAeq68PprAsgdbTVTjhEMVhuqjVBA9eFzyCJtoKtenauSV8TPaDqyCKZnneXAniUFZ6r",
  "key11": "3Nw5Wr9xM5RjvPf16fMu9wpQrarbbFTymuqiuSkGgvCeWDyRVQkS1MrhVAGQJh2keGHHA5Mx7NErv8jaPP4LZRRA",
  "key12": "48DM6g1WJvtQXEskUcwTm4BY87c5cX8fBR3QM6No3TpEcNU3QEkL8j9pL8pUfgseSAXhmGDPZGjx2jD4Yty1754m",
  "key13": "5hLY3TV5pmLwDnQWfrEuTk4pLxxxtTwECXh9ocyAEnSczGixK8SoTHntQztVg9voyXSzh87twj4dTdyaibBJxcWB",
  "key14": "2V1Ez7XCX2x54KuEdHm4uBnJuTTZ2HwghCDTppqb6su65KSAdsYs3w8SeGpx47yp5eLk4EjBM7N7mNcpTUMDtWVJ",
  "key15": "2KzSSoiK6mRN5X5WWnWFVfVryEveP9EpEMET93t54vf3cxFpQJtTDoyGhfSFocbZYcb5rSfnZwvDZjW4T8nxX3Hg",
  "key16": "436tiinPfdiqdymu8JnxLegjfRH3jEdwnV7C8U7h1Wee5acCvZwVRirX4AKcSKkDsgck2Tum3FY5x8r9d35ZNa8r",
  "key17": "31cBxHLwfC3XYXo3ZT4iMLTRMKRu2TxPpNuY6XPXPqooafBf7uE4skojiMy9MxvfCspzpw5wFwL6NLAu9EukaWxm",
  "key18": "4zr3hrGZBrxcPueWjYEEZLJPf83auhR7M6Zv9gQWAFqLzAYAvn5NAX23NBRsTREA6V99avKZetX8NPk1Wp8RGrMM",
  "key19": "5UxeaUDTbWCfxqNnoJcWMpYarPmHo8JTFMg3CYd1Y7qt7XNZb4HCRbYdKcomkVjciHN6sH2uxMTuTQfBg1xb1s9g",
  "key20": "253q5UUXDY99eY6MdRxjiiX8qq3bhoDRN97BZr5Y1a1z5Etasq4NyicH4bYq8ZPUbZbZmaKEH9zaF9qz3erAMR5z",
  "key21": "52RXhX1dw1RUyDyjA66FDZEaGKPPiKoMGAKCGsxucddTioococsi6AAEKAojhjR7rbectsRvaEVxu8aBWXTy3zqh",
  "key22": "41WFj22WzoYgE1nk19j6QSMwobc82PtqkKhbhi7iAzouH1Y8EF2VSRyVz28mGNS3s9YcntjXEKSjxp3MoZtbiqh",
  "key23": "624vAsgdWVoAwSqsooFatDe827T6jFNVeHoL1YbPVZfBtjNzv8KZLv788PAk2X1dohXWQG3ztvx6ZmgNEx4gWRTJ",
  "key24": "2AFLq4jN6HCnT2WaudDMgWmdbgF9L5URq6znDZyb7DLcN7FuhrVFBrEQ8r2zmefynRCn3tfJprq5sd6Y88FkFbnC",
  "key25": "28MwuTS2m7KbuvnbLTY81wd1nF2uBaF1xxtpC2tc4EXQAcV4x7ZBx91JydgkEh4iAJTSddMt9oWb1QzHQNA26tYX",
  "key26": "2tcYx9QLEx25kPUSJWUDiExTmYbdhiCvmUTgvPaX6T8nxbUHpj9ik5KbYe1NXCDSwjXKKJkLCRVmxy3aZuJMtgEV",
  "key27": "2Q11sGXr4hhgCsW5acSMXGjK4NQZdguYnSVJFuKemMD1BZXpe9YGmX5NHFxUFLAriKMDCUboE5iSXQvxGp4tkKg8",
  "key28": "2U1HUbBMq9uzVrj7MM3wqD28rkqFUhHk6vfQTxbyehhXg9GwzaGoGxJZBekFPVyVPBYZqcPy3sr44WHLw6XZ2Mse",
  "key29": "47muAJVkb7qiKVByspCXVy4Ar5GGpW9ncZU3pqahw9KkEhJP25pD6rMt6zvi9JpS9eTHFasahDfZTD9RQ4yPvHZZ",
  "key30": "8pnwYtbW91iZnxVREpzX1YrSxJ1mSVKqm8KHg7BPafEWjqv2S45MnvbZBDMxkw1CaWeoSeszaUA3LeFwcsC8sDP",
  "key31": "29DuqAEwkwBmgwP6GvmFX5jgcdTu68Porviq2y338qPhst5iw8a7ezxbkUzJayHMxMmt9sSsQnGPXBixq65pWrd7",
  "key32": "3j3T75A5WAJ2A9E6PGnfXDncsvMjoHAkopNSGcmSkQ6jFZeuytRRdk5vrpdLdn9Ja7aRioJgKkccAFLnS589S4B7",
  "key33": "32yNq6mxem24nYGraVS48D3yZQWk5HqjBH5SrAVdtpsGT7irCJuVs2ova1cYa5Af6cbVVYxLxZrSZtcfPFc9Zazb",
  "key34": "ZCezo739E8sucAddwsg7agDLVa1JdWST58mXi9MgAZVvTGspSSsvWWYh1p52n1wty8mmYieuEfZBM8Jg69USfXi",
  "key35": "41Kvbu93LimzW6XLNgCY4oXWosDHjgGH1SAX1ekCJjXzhspp1sTDtb1GfpnHh6mKbgXNRWVNtbjVefBdXUZbNUVT",
  "key36": "4YZjZpdSBLiCN3iePgunKkLFn1JFV81bMoRJKU7hd8HzkU8MxS42reuZmTSaCdaVvTQDaAJv19PwJfjwtTMzcwd6",
  "key37": "3m3tymHAp4mzCrZTinkyVb73sV7nxaBh3dyt6XQ2zKd2BdhgSnwv47sAThWowsGWwvzF78mFLKpZLY92HDc9EAxE",
  "key38": "58vS7s1iwM8F4NAP8tkBDiXUuxoDYNezEDHBd59NrhnJZpsZ8kjPPPkQvFFouyJ6aAqQ4zJPUbSzG8FVAec4mQYx",
  "key39": "mHRwBMotpgMH7pqrJ16JRJtZam6PfL7nvTsQwBGPiNNLPqi2cxM6AoDiqzRAoMuzHXujzk5mhhPeysskvhw9ApL",
  "key40": "raj4GDrR6uAy25hSHKYCx1wuosz4ihzBmY777HF4fYQr4uTxjg1NxW7zn3YLw7PB1WfurUM9SxUqAqbphpRPTMv",
  "key41": "4Y4C3pMwxjLUuZ5nFtRnjvH6ExfTrWnVjw7sbRts3GZYeJ8s9C7omk48AXQtrrFGRB8qqZAmzM6LLE1NYZdQqZhw",
  "key42": "tAJLPUNFwU8oKYuPkpSj7vBND8TxpnzG25FGhkwQsyDHWZvnVG7no3zyopoMF9HDA1AsLpLqjVVrJ5dbw4TJ3Mf",
  "key43": "dRtFByJZn8bfYSzzGFKr6tPp5AQF9bBti2yMaCGRPSKXc7uXtdx9kqoYsPofHpf9rs3ZgkmBv6B8L7k79PuMxyX",
  "key44": "2pf1acQgPjHg9rXzESmJg2Dza6yjaGYcJd5vwKUW2TsiemWofdTetmib9FGFQHbdYa4PXCe3cJe7JPgFzMZ5d6rQ",
  "key45": "2z2YrcknybjHAvD6K9tegm1EvtBBNSYtXhJAFA6kah5hXJJQfkSuv7nvTEiQLXAtGZnB8qBYYHdVPiFx5DqRSTZ",
  "key46": "5yEhnXxTPcqqotEzoZ5D6x9EgJosbqsmrE73SUjSr3Sh1oUWJaAP3u8CwvbtfC4TQ4W4UiD3Em5TLfuoxeD5Jb1x",
  "key47": "gBnbmCEoDyNAnLqSz7q6bXLnibfxGsWgG3EkEEbCpZKKLPF4akNkwQdxNaUfKUs9S8HXaBzQkL8JQvvwToEnVPX"
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
