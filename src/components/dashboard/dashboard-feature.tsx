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
    "2qrg5BeiEuDP6DFUYRsC3YYVAM1XcUNYjbynMAcZPwRMNSHpRGnU2q7brRw8TRaD5qbQGHuGRAc39uy7of6Dh9YQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v7Hu6xvrjv5ujtAozbZuUr1QZJB8RkSZEo2tmf12G8uKKzWp3D2ucwAUkWWW4vDjUvzJrmCegH6H6otFtixJ4br",
  "key1": "5QM7rXRT1eF46kPYvHbFFfKMD3wQZ9qWZTeDn2msm4icozuqqWufTLj4tNubWkTanLHYVsK3kK9cE1t7T2GDxT6a",
  "key2": "4nPrA9CD7Pstwu8V3jaTzfjbQiGPnBqWvowjXPt4ZHnLvpyrt9s2ZVgmFbgThWtGPVCfMnfphuiiYRqApVn6Yf2J",
  "key3": "2Ri4Ce3TvfT8amKvetWQsFMcPwaqF8ymDY8DvYifEwqAcRr4UhXJdr8y3AEmHr8exY7YBLTzDTf58EHTJCFddVps",
  "key4": "4uafBPjqgLcWaLhx15FYSV32fNL84pDJiGS5o4DhjjUKGvfhEeE7qFnzW3MTEYi6esDzTKN5VHJ3HB5vipJ3LUXk",
  "key5": "5GBywdoQ4PzQ2Th4euS85PrSYnAtxTvZ12gsWCdyia1b4LmUGzpDXwnmihygbhSRWvtQnfwM49YeGQG3oP9Cxi73",
  "key6": "5dkfyv1rPdcw8rWQWXqn8Q2vBEVgTf69fEHpf5qdnyakGih4UVLeAXyASyzzd58RFVAaSuwXNkr3Rs2SBDCTd273",
  "key7": "21YAJPXyAnAQqmd2HYhuECET2FW5pYBFZSg1CSNSM3VWx8fxgkTHz5WuBhDAvZEbPgrLZugF3E5htvfv4d9G64FM",
  "key8": "gNaZUeWd4y2aNcHckDrKYx1em6qoJrBHBv2g7itsUmY1Tjwf7ECkWi9uspuQBibRY55LGAd947UFPnB6L2XV5ik",
  "key9": "5ckiuDAzakPcxx5nJVWRDbpjXFCEgD3AsRMPtud76hahQAjFsdjJkHVnFqT3fxEcBjw4hC4SU5BVsrQMHdj8uT5W",
  "key10": "4FXRvWs4Lpy5wwhYi8seVDEVDymWcYdJAdyNGemUVmKFcAK41wHwwt41qAykSvJSqpUAJtG4SAb7tNgKxR4Bfhiq",
  "key11": "2Za3FzzXktuQ1TvL5jDWNWP3zkRbXXRumK2qiRU2nmseBiVRnp9eCqYREzjbAJS7bKnAyUfrgoiKQAseJZpvwz7",
  "key12": "2gDWTULYMwsnLH1B1qcgc2asskh8VUZE76JWmkUFVQC92h446ZJe99hVWwBm3NqgV5LcQ6gSHVLK126wEk6fkmo6",
  "key13": "MrZCBLWCUQGnhMpxfkkf1MvnCo25vGVR3rsq5GmUktLjy2xoU8GGr8YfNhPhbJisNKTLo93xUGkHTEWs13ayLoQ",
  "key14": "2yq1ZqJNgp99QFKxgecpjpStuWi9yghfwPwFnax6SHWxLD9aE5Nu2JLazR9eSshS2s9E8e6xSF8JM8k7v2Z6apGE",
  "key15": "3SAmxSfv2A2eLJve7yWzRLCyT7fXtgAZXrrLbmvS4MKKX5gBa877hZae9ya6gL4soJi4FriugjCbm5TfiYRVrW4H",
  "key16": "4cgrUSHA5NNJ31uCYKq3wtT8upBT36HsEEWFtFU84mgk2sxtRAwZYuNFhKFbLWguZ9C1TsyrjEqS8CSzv6NVu4PA",
  "key17": "4PyU1Crn2fdodu8sGP9yPzZXmcXg9p1R8QLkeff92siVaVNxNH7Ri3TVXpqyewEmycVaS8eehthuq5MTCyY3Lq8Z",
  "key18": "2Gzz1aEfsjXRLsWQBzqSVzVKjWPNXoNDMBe2NSy76fW3Hevb4c7GGUr1uvJM1gb7ko5MJkWL4eAQidg4RLGG5HSS",
  "key19": "2uq2ePmBDiJPY5SherGTBxBGxGP7ASHacDZyFffnM1yh8otGFpsVNU4TPqiFhQjNX7t47i45Z939jigYnh5FYJw6",
  "key20": "d6sDeq2FKqt11LFy5rdneerJzy3s5nXcoxPEw2NF6sKt5ggBkiDKxWKAiih8uh2eQUvAVwBXdMwQEp47Edocdqj",
  "key21": "2mJEtS9hy8qNRGvDkreRTKaW1LoktNFpRiS4ne6x5PexwB9Ndkk9tzzALxMmkiGof4bcaFJsqhuzUnwvgUuZEc9p",
  "key22": "4s2qhgvuP2XhDTWgvvPEYYXgArcMTZCGXQkzk93raChWPzNZ6EcNBq171QbYRG6LehVttD7yLj9fowjsQTjm6pSn",
  "key23": "3vdt1MwE4hHgm1anfU7L4pF1FWo7vhKYjqyPuLPUvAHMdxiZHbXzWwYLQ4W1aHoHe4ka4ovGU7nD1DAp1n7Z26yq",
  "key24": "4eh1vdR9RJNiiajK4p2ThpQDMEaLgVgZGBrUsAspDrQn8XBioHirsy1uQCLtq5b6xKTYmEnXekq7tttYPjaJxrND",
  "key25": "3yQB25Bd6Ha4MG1rDubzKPA6ZUzoCzwNUDq88LfuaZM8qDjhS9LfZMxYt7stFCVQm8SMinBMXSYa8ybErsTC5PRE"
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
