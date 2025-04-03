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
    "vHXv25kPXHHPXgboaionxG87egwPAmu1bNP6SLMZc2TanMfiUiZVDfFz77AiuxhQJfpy8nfxMGVNByuJgXtChqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vSzmk3ycnWkDmLqmiHdDTvS1GzTUHgThdurohzfsncEhT2o4DbNj7RqL5Qswo64fHFwDzx3F3UqRNpEFFHCya1H",
  "key1": "4z6vf3x6ZmzMtyUQSJb9b44o7mgWASQpv7ZxZmHb27mfJNQ1WuLMUnQq7tmtKh48AzNVN6JG59AGTBuG1poBLsaU",
  "key2": "4TT92BgCfHJVxkyHriFf683Bw2kzKMgp13B7jbuD31RbVfxuGJ3dHZrK3VgnM9ucuDa4P4WNSe9bJGWowgxCxvMd",
  "key3": "3u6Uwdu7ebKPVit7CycLCoHtT4BgCWXYjyAMVxcwcnhqRHobgNmRxRszH1FnA8NQc9nMAxrmmpcre6QpGuw4dNM5",
  "key4": "2Aqycm9q4c9bM2vxqYo2WTjVss3KgyKiWfn8yy8rh39ehZHgaBsk1hCGBdi6mKdiJqwn11V8oKWzHrAZ5MeKH1RA",
  "key5": "nfAdsJCc3unCZ6KAo4bF2iafSGWtseTRBjuNx5X41TSJS1iWWr7g3SNtHLEtCHUxPxcSEVH7GtW3Lp5qGXpjBdx",
  "key6": "2jLt1cEbpTgxRW6FFunmGe7DA2g6tYZxecpswaVy1xEfmJVGusAMYSXLQjaeo8zhfkjEc3gCzvXPa42NBwvJhP7F",
  "key7": "3YaWDcwfNv3tL3xTe4PkM8GHH9wTZ852ECBUnvt6mFenRJyNqgjsCe4TsderyBQ1uyDzD9GgFQpGH2EtRTihNhax",
  "key8": "4TyN8VLSDMhwbRBSDdXGCLiVcuRaAppQK3KLgQVtvfxCppjWUYuWL47jTw8jbaasv9aiwoWD1noGfZxJR9gKgN4g",
  "key9": "zpfywg3gjJtFWVGSPSQcxfDzvLxHPV33H8sSLBeemTENchmzCgNm3do3hQT7b1adFGQ6oeeWBrSSpSg9vTt5D9J",
  "key10": "3A5DzvZ3XK6TokU51YUetpJT6paSZkCghuFP1wYKSWcU4TiJTPydMHcdHTqBGYGGCEja9D6CeXnALzZjb6rmo8gr",
  "key11": "5Ljdhq7gg5iC182JvYJmFjNRKDnEuuVArp6hipgDJhvouPKinPCjwKAQtuus1MBZYLD24UMsGmaDo7Ytj7P8iyZP",
  "key12": "37zTuYcsRKKzHgD6mi275eicZB7Tvh37M2Hc9oVB4GpB4eKexoT4UkvmR3YZsQnvJA7fb8Dzecyf1eorkKBH3N9V",
  "key13": "5ouu1oazsfREjfG45ZK63Zgu3Yo5cVcN1ezbHUEkLHTf5FDgLDLa6nvDuxDvumhNW8wt1FAX9JodSufjL5gJoVPZ",
  "key14": "cEjqRWbaEH24G1hJNU7ufVygosLx5pme14U8AdaWP2FfkUBpAFCrB14dnVPEbsvw8rXo9QXJcGdmQWBW5MqEpud",
  "key15": "YxpLR3hfydEPCpwg6CyXmm59bmXEDEbizg948DbDW1RYkM6pXDvkcK3bhBTZ8wj9RKL793hd3EhHBFiqeL5eQMh",
  "key16": "4AaSYEdDUk9MECLRCLFZ51DCn5rqWFE4CdzpLZXT2C5uXwpZQN8UDHr96Bm84CcgmM96wZYPjPdMuP3e11r2ez1",
  "key17": "WfsSBtNavMtQTquGwox1BTxgrUs4GMrSVw7z7VevytivCGfX2thWyr1e29VDm5kQwVAyKRDrE2iH1QKcvbDatXb",
  "key18": "4VWz7HBkM3T37FGgU3zL7FASAvDz7cq7MeeGvFZsT62yNBF9VdpvBCpdukJfXJjFGcc8D9vJ9xYz4pxoqJZjknZU",
  "key19": "4VxLNuHJtfSWdCcqH7qRpixRGAnS6eW2Vi8QJohRyp6kQunorKCrxbgfQsUSVsd4TMdJZnL42N7DiA7fjo46fGFt",
  "key20": "4T2oHtDMYKHHa5e7Mk78syN8guYUQBWXz2aw7sUQ3Bg4aLfX6u3cS52XiYLbYNQ65Bp19Hsyy2FoMSZEtf7rWLbn",
  "key21": "4KXgRdGrkDXQvW8UjLSC43biiTi12CnDKgojGfYG85VFhGTJtHztsj1LGW8AWFh3HDTC6wB6v2Ccv31duc3sogmL",
  "key22": "2Ph488AzA64dYRquc8SMKWnbYaSUMsrW4NUq83RqEM9K327RffebXwTF9bA49GL6oR58wBPb23xiy4TGtGsZFLCM",
  "key23": "33kXgBHHEs5QR3mCuwoxeQNf8ytWaCP5o8YKb6gSf3Hr7vHZx8hSiu9HEsomkKLb5wAPDbKVVa95uyASLDiqv35E",
  "key24": "5N93ZTrmpcNithXArFkddvEXNYbqQmNsZwQ3ogzSWcKzZfXfEaECeehZMw4eEQiw8SiGMvgeBmjcQ59ck82m1Khv",
  "key25": "G9aHGZr8wyMRjxzEWjpadRguuZFugwt2c7B4Dxfkrw23embpzss3FExqXbPC2Nm8tkoryqMoMkAHUoZfWYggHkN",
  "key26": "2Qvd2E2mvmRd2h9Xhgg8uosor1KERh463TsksFtgsLuU12daguCssp5EG2j6WGEkpMziob4j9SXFbn5S5yhRWwPd",
  "key27": "3qUwsAUB4PqWhqUfXX8Ap6DtrUszkntfwRatri7LR7nEuXsRpeSXatV9AxRJtALU7q8LtVK7bDhoFpsGT7ZegnwY",
  "key28": "52Rez4pGHLHW5WtTgU5RjRdhpcu59CvvpLskTKddVvFsqWmfR7zpSYQNw7tdp7DavSbjCPCT2Y7CsL2ohBHewHs3",
  "key29": "2HEzdPn138eUiwPpBNv31UUi6NjTuVkAdB7uzngxdcAi7uzV623ihUdH7z8hT7nZJMn1EsAQXnqVxCSYLvR3JrUB",
  "key30": "3BzyczAvEMdb1eB7DexKpDj1B6ksoDrANE3YGHCrxLYTAPR95Xq6T8DHPkmizvCe5uKBq5zFBSguD7UHm3AGP7BZ",
  "key31": "42s4t5z8J5mLW1FyWAfcieD89gyrgmz2DYqqv42QRr6syLCPmTsmu6AAaYSfF4gRir7Hzvc78VDbp7aeGPN9YpS9",
  "key32": "5nzikXYk2gfUuH66TCe4pqgoZZqcCWuvJXE4mGYDdL3AGBeim7t1YQb19mjNH1QXRtZJMK1YM4dhWLn1Ndsh2rAe",
  "key33": "3C35HBPRuqBHyggMSTwYvWhTtBk3xWYnk1QdgS4m2pmqGpQecahmGeQZbmemySvYcBpcWL61w1wwch1Zqn6rJz7j",
  "key34": "2FuyRZuYo3rN5fvVEkfnrh3LTZUuCLoUmYcKE8VDkvKF5GPyqJboZzq8CkQMc5zfrJ4z8ezkmVvVSy8ZB2U4ZMTX",
  "key35": "4oXHQeEU4bG6tcUvm1ETMq5ii7rzSFQGguT1q3c8XbHtQEpBqJeqSctBk3DqsepqRgSWTgHeiC7gRH51ShNaPoEk"
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
