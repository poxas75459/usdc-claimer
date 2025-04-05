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
    "RvshgC67DQ6CweB68h1nrK2radWUa2RBUfb7SZzY3VyEgFnXkzAmMZMVRwU89XAU6y8mZsZSB2VsYeoxybCXDir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44QF78tUaXBWh3xCgnebTW1TwpmnT9FSGs9AFRdpYEZtg1xL5yyTdHGDPLBULLtg8diuS7bLXSYYhqDtcfW29NYf",
  "key1": "AG1MXGDsngdJsyac9jfMhFA7vtrTXRYaZbs6U9yn7hBxAi9rFsWWiecZ4LboXXRUjjLeVVoQtRF5Dt8x9YBpQYY",
  "key2": "5AMnRDvfRVvS6evUHAZuQBbPVUzXwvXznj9fAyVdzr23djFAt28uouiPxzaX3LyJQaxhD5rrniWiTZBekBuSXcj2",
  "key3": "3ewdaqjkcaJB7REfc41ExTFeEHrFSShu5iu3Rh5EQbQus5bYCnZUdJqsp65V2noywCZt5NJNMhT3w5dSSciAvsfj",
  "key4": "52GPpNuNSWYp8zVV8DmNcuKUL5Zt3j2XkrxSMJb9ThLwW5rwudLus3pSrbMitDyA3QmYzd8d4H4nJyjQ1KR1Sb6K",
  "key5": "9XnRJKnZ5wHRf8A1wYzPSfkuMTzckcAbWFxYKF1XFcgb1ycJGFpAirgLVosnJK5T4ob7NevQAXx5gQ68nwPZqk5",
  "key6": "4VwBtKcUh4tjCuXGAkEjWrFWEL1aQYBTfq7fVdQ7y3MSenDoQByi298JLwiHAaAjYkr2ziqLsoGjmtVpY4dGa9bE",
  "key7": "2QbV512UPuLb137kxxjUmvzmKg92Txi5Et7sFnaj4LW2s9fZ665BwNXbTsXcZGHmy61EwRt1R61s6TCvqMqA5Dqu",
  "key8": "4hNS1RHo2Ju95nuqJ9pX5raiZ21dtXaTNywPixEUDJcGLYwHcBnNbj1WFxSwL2fvLLhF38esZFQ1vnbGADYNFkyR",
  "key9": "5K1EoUXjgoqjPTnQjiqPReCuiK4JVmf1uK5XP5q29du5uKXUoLbkTFkBxaKtzABQ1yy4eWU22BxyrpTZGgZF9PN",
  "key10": "2wpXJ7ntv8LyyV71X2TmioBpGsTKBLhTTaz9V5ehUMszzMXJLL3g5K9D5Q4Eds8x1KD3HNoBh9JwVBki1V2UiofZ",
  "key11": "4J8EninbSfopyMW6XAeJq1C3188VwHSqwBd8bZbs3rnoM4pYGY3deCPkRAsYACTk4BawUjX4SKH5Se6FYWdsuNv1",
  "key12": "3FxvtKXzpbiwKs1E3hDD8EPmboJo8V4RSTc2igqYsiEZQin2EkmeFjmBrrnBUCEcoAAQ6iyVdMeR6nFpiZz3Dd4Q",
  "key13": "3Ex5atsiXdDQ9tXf9uSJkWURzULpFVAvrWBUmJZbzHBQvYM36VSqXPLyds5q3rVPbmaihipDe1V2DJ6DiSXz351Y",
  "key14": "2E9TkshhLPQijmwnM9yX6FedHMGaoPYiEMJfRjF3p3sgK99zYT5rHQumYdqUCrtJp7zd8LrQhbM98WdaADk2LyLN",
  "key15": "gHeFodSfzhrfN7KKD4RdewBPKF11bTgqhseEUnvxeEpKk8vPzaDbnDrqBvTFVaYRmoBGJ7Xa5LEx1ksqPaS3n1n",
  "key16": "5uLBqbQ7h7szbHA4DGJtdNVspHbCgFjkwPCNUVynj7Bd499ALduAtQPCKbYFqnfSSKaNqQn9zeH634syPqcaBQEk",
  "key17": "5xvxKnRydXSzKcyt77dpd1Sb6tDDP2ZvP3yozumhMYjyXht1qCD6ksucS4EiJJKPqUpScoNY9KvE3zNZr77xJycM",
  "key18": "3uiqmiZPBNTiAUPdHDFPHWKd72F8ukAMRZDvveMWuD6z6z5g7RwvNciRpQsi114BMabxcAEDjBUNzzjixJe7L15a",
  "key19": "4um5SMEepF6T2yiB9iScozWbwQai8DWFu2kfg6gZ3GeD3TJanxEYZJ164wc1MvAqPvtPC68ihyt9itwbsJxQ4HAW",
  "key20": "4nj63sjsPsf3Ds4wvnMRkaPQJdcbh1Gs2C5XS3ckDU6xFLgqv2xweHNuXq78YuKqcbL4CFw78iWQ9qj2S775QT6c",
  "key21": "23xAr93KJN6ZVBDwNb9RJA4ZrEuQ9F1mS65WtsokTenjXjcmZorz5a6bDqKCSLnGhirvBf2z8vFQkg3Mwj63XMxs",
  "key22": "2TW2yXp7G9ykhLEpkhSV7xHaibxvVnoaLh9ARQVbiTgx5JYc9TwuUQutD2qhrLuxKugWKJvFb17mp9vQ89CsbGqE",
  "key23": "XmwCpFn2jmRTRq2ZTVNtbD2EPxiZWaTdfGbRq85wCSYLrBYk2DjQnVDztMPi1vYRGRHVpxT8L1aB7hSwa9kNb39",
  "key24": "2Uyv5AkhDp8GDGvJ5pki5pyjZ68NMYdRhEgCzvksFAEB626cAagHCfnggm3HKt2mAznk3GKyAKZT1rhNxDXV7HUZ",
  "key25": "5Pjc2V9BwPMWxUwBPTP8Sw3VCANLJB8k1udCXS6qMKPrXvVw6TPwq6R2XzR1oQL8Az9hXtrhR6TuiB411DmVWjVU",
  "key26": "65oDYkjRQm58VxC8msc7DZVDnNeqgFSpjykaecMAJFytGQBKyv5s2PYydikdnLJEYrtChTehu195UgL5tbdNQXmj",
  "key27": "5GQbRBjkb9yhfscb5Sy9ShkmpHsAgGEaHdSYT2MhdekicgqadrhUaLJEFXhuCQ3pJ2RFaNtYx6TuWuHHGPui3MEX",
  "key28": "5D6HovnSP95tYJrnoA4cWxXR5MbqrAnL5Ye6xoLJsSqhKLhjZitqxzpvAwYFgNzWh3GyCxidNZFULs72YMjKCBv6",
  "key29": "35H4UpTFwyzfBWgrRJtnG3oj2C7YF8G8Jx1PE246PQCDb58GAGLRowHTkHgfv9CxHCWaSbsS9agVVW161J1tcjXf",
  "key30": "2gbPMDMMjDzfgNXtwRLwjibmh37sRHHx8SpYKnebnK86NNeSF2yy7qAGdMUamihBDd4SJVAw4j2ap1kBGymTG8N9",
  "key31": "5XTUBMaHpNuEu8xFaAQtbUukmSph9poGUeRS2aHgbcSaGyr5bgCQ6SmiguaNf51quiZ9dGkiXoUiL5GmcduhyGpi",
  "key32": "43b1nsMhGTCKkSJD2MqHZu334WHn3ACaa2L1SPs4MnrULT76KHmqCj2vXV31jaxFbTQEa4pG1AgqPYwJGprJUu7w",
  "key33": "uwth61G2QVo3adsKBL5z73NpvvVavpyazmRhjHao5Uhp6ABdDdiFRLuipSGna6XMFCCRrKLcfUSS5vtc68WLGb5",
  "key34": "67czGMFbbe6fyecgUnoSFi4t1jf3WHQPi9aWzVahYdhg4d4Qpfi1AX72ovLowMSq9YD1Z2yZZbKoCQFifM8RaYg8",
  "key35": "4yX4nnjPJTwJpSSaguEGymXhKHjsTssszEzWxVGjwqx9jU2e2hbs1TM3PrGDrnc6zDu8oNUSxK2sKRcnzF1xAHXs",
  "key36": "4mQTMXxPTQkw9cmoDBFwE1Z5EgJeLgrMu1apQbZPHAZaoB3aFwKFRCnS76fTgZHEFmwr5M9u3Xg22rConw6ugodp",
  "key37": "4EbE1exH8ZRe21Gs4QGkT6ZyhLV2LZmzfTy6ZjN3neb6s2GFKy9uF8s7c6trbJBrNCRioaCd2iTfTADBZkevkaqo",
  "key38": "51Mp24eYEybsNQj9pBN56MrbaMzngPAaqBAdwxu81dGVptJjZkBDgiHJvzw8KDma6YAy26etoYKERYxJHNNoUTP",
  "key39": "5nX5cCUhUrtBtUTSBBsBvc2vjN5H4EV8RjLxnafrGuG6eWsfd8dMqj1LrRFPpQyBJocHb4ctt1nJxJsBd2gbo3CU",
  "key40": "3i9FJJQsq4jgCdxj851pUKUnJ8KKsXtgmKbQrBFZRMtXbrpiCbqsPTRsAfhJrNQKqJnvqZHc6KiBmfFjEszaGkwS",
  "key41": "4DnrhiUmqX762cDGaP6FP7eb3tCUbGA4wMjN9vV31Sc6c49CmLBx8BudCwkzPTMNa4TzJ2dBewtXmKUdi667a24F",
  "key42": "2PrcNn8pWLCDw4SwC672VQdQXEotLB2oPC5yrvPfJr3aeazPiZVXiqNW6civVVYEZbQKJhbZ3tHdsUavnSMaTKMu",
  "key43": "66DESdw7vt1x3wXxEifjiYCahvCs5eBJyePCp7Afoux2dFUXE3nmdKGToVWhKLkK1SmSBd7mdiE7SRZnx9zBokvQ",
  "key44": "46vqrFzH1YYht6C4PyM8q2yWCf6AcggeDK7MRfbz9yZUifcHNtKygfSiJyVPYt8Wakd71dsL6ztS6LnCjdiQyeS6",
  "key45": "4ZmgV5a1BGr1t5CDgHDi2gBufhhW7W6pUSH1QNvRexiwerN8GFbArdjd3EYZTKKTKWVmFVUYwKSeK7F1mirhckxT",
  "key46": "2WaA4ZMKLdNqxtd15Rn245L2kRTosaYbbHaxcm39kycWDo9cCkxUCY7BRzZThg74gNCiMmWzhtkS22Fn4GyEA1q2",
  "key47": "xYunrBMZxcab9vqH6NCjcNBtsftkzmKC4X7x2RmqSXgQn4MtW4VgiwQtye6nczuXaqFpy1Eh9q6D8r1A1hEHj9g",
  "key48": "NqH2Gji415Po3wqHMeqMhB6mN66wjZdGPirQ2dpdjh5865EJLF2yMz5t29QoLen3UX1WhBRuV4DG5wfjsvjCJ7U"
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
