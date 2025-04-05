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
    "4k3E7imbtfXUaPtVFruPcCX9pv1ByWq4jcRptACxzvSue5KB4S4PZ7JCNB2QFKVBUFTX9q1EfFBANyW1HisTskFY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZPyhmbh47bLzgJF68kaDrzsiKaU4w1VwMbNZmLGztS39tLSNn3KbxEkSUw8om6JqAyndKmKcTA95PutDG54iN2E",
  "key1": "26HAq3X6LTL7puoJiaVv56a1oatzENaPqa9nFiPeoqVoGF5Tcj3EBSHhQF7XN8Db4D1A76K15pxpex8oFuRqfi13",
  "key2": "2MyXBojDCh94XUbb8hJoodp24fw3Jt4fLHD3i6b9qoSUaSHDFFSpDnftJd9MMHN7cYUzu8D5TmuNEXfQJfJcXnUB",
  "key3": "48mQiUG5s6sRzMYd1X7Hmaykn5XEJSsWGd5KdxTyMpAqn4aCQy1vt3xvXzeKDHVMJzmXxawPqDm44rRBVxHvG81U",
  "key4": "4Y8ACbXVU5et5ynPXK74edreKcVQAd93we9HdJe6DtHL3AX1HMXhzNGDbjV9jjYdTmhZtx1KaokxgBTKAm9PpbqV",
  "key5": "65QXZ3TFPYbG7pcNs3ERVNsEUsRwVfKkf2o9usiejLnJERSmkTWban8SYBG6yNHnmMyNfniUiZAZmMfd8s1CMSWx",
  "key6": "47sgL3SK9czZf1QQ1wgCZsSdPo545rUQk8xPVqQXZi3HrrgcaZf4BvGCumgEvstmMFcxMGfmFQecWhMPmTtiaSsQ",
  "key7": "5DhCbzCPAMJCmUVG25vuXHZhqRzs9q8hJuosoVghsKBkXbfhFFTn7u1xjvwVqsoV7sYgN6RChtwCFc5JQxeE2ghw",
  "key8": "3LcYzMTkUh4LTtf7UccS18fytjxGPq5nztay84qVPazyBcJXekwjm85j5ySW7TWXaWjmrXYick4Yw5iDZNHCLh91",
  "key9": "63TFpjcwaRzw3apfL614EmNXG9WWvn73CXQ8qYKyJsRwGL1A6MqnwVaW7RkAtnqmJhxA73LF6GdMbRBVGqCHHfML",
  "key10": "3zANrywJE2yr5DDovega4LPNrFJppEdxb7Lcgyec1hDK8zy944oZUWhtzZ7cF32459ACU2uNm4QHXgnQWtNnb9JX",
  "key11": "3vfitLctvoxn2HCb3FHXmvvwBHSiEdBABpVKrGJxkmC1rAoxouFDH2X2ytAzjn467o7ub7owE6Xq9WMLStqqvU1P",
  "key12": "2EzcT5PhBiLKZv4VzpHZvsP5iRYwGng1htAhJjkUFWGtXXzEXgFxE1RuGRzZdrhToPrNXYE9ubUDtDBEpFQUR6Fn",
  "key13": "6tGXxiB39qggaRsK94gDtTiqR73jzggyfuhPGJqLBWdpjvjozeqFsnEGossPhJVxc16mz3vu84qEbbuh6vWXjh2",
  "key14": "4MVpF37PXtHP3VeBxtAo7USzddLGte67ChPFx8AyGJh33y2gCMzS2giYbcsekUkUU7bkZRPEqKJpSE6QTf6UTZcM",
  "key15": "EWqdFMxbUjvWkr8S2Pov74Nax8ePrcLGmU6ji6PJBEWAauXZ49P4GR3MuxbPLs1ufWrAqArhxup5RVDw7WJ2LkQ",
  "key16": "57sbhbj7K9nL3ihyuh4E8RYFw2atY4butCTpeGvSV6L72N4yvLchRCyZUmp2g3aEH7qjCdV9Rs89VegckLXgjoFR",
  "key17": "5iRVMMjcMsNeavecDwagMFRTRFmZgLtpGpNDefHfRg3prEXDjjzAP2wPZd15HXz46DSk7j6q1nwRSgymuhrpdJYZ",
  "key18": "59SP5EDsxSPQLhvBgZMAKrzX3mt1UDMJetQnSxnwA2jFB8FkuKpiUXrnBeKg8BVwDruGYUiPKu7AfmhE4EznNLDF",
  "key19": "4kfTzwQAHYj5692uGj8jRtf5M8p1kcA6vgxkXNCWcxZXbFQBUMGcbGH64uFmmkHWPsJawR8L8ur6GQZFBNcwvN67",
  "key20": "58CFnri9tFaR7kTdZEJgKZdXTshbaxvT27iPEBAALfQdZh1J85TofVwSHcVGJ8oBDzeWiUqJJuDmqcthFigxi49G",
  "key21": "4HjSP8oLDb7owJH4mjc5wMBKzHoKoDkWfMVvSn6i4mXeRGPiSot6i6RzfRQCMadrxAFS1hV9J86mA9THVmKWoS1p",
  "key22": "65aEH7S3T49nCYAVgh3upb67aZfn4Vmeu3tmFb8Rj3YWKCsJ1QLKkyXUoEfKNQBE75sQ38VUJBscXd3N7gmvZ99k",
  "key23": "ewfTbdh61r6tkaAdrAMFzZFfYRAHfqu1jkB9Xm7yz9tMa3n31rjk3gUZKoowB3TKZS4YW24MrduNnMbocyyxvQa",
  "key24": "2vZvAdtBtmK5QMqwUXmsfqcF1Am9hq3feTtHkPccH63CAyYYPizJVVSZEr49WFM4nBzNBiW3GoQeJDBpdbq2LChu",
  "key25": "61Xt8LuBHhB3zPNxP2nezdsdCXPtwn1KQBtHgzF9hvTnoWcgKhnGaCSEinsw8eZ8uSY1nTRQdTCj12u2ibRvKuD4",
  "key26": "3pJjpi6HnpduxEMD7Si3whdmbV2xqVAPPG4sRfa7nJA42WzRECAf175aYrGQm8HEVe4YkmLFyYZyJ7FHYUQTAVog",
  "key27": "5HnhYxNL56ShW1KmfHJ2QLwNPUZDjupwTucFLB2YxKXApwSFBdb5mbNtPusZgBsReg3Z9ezNe1fceL12oXXfFCwb"
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
