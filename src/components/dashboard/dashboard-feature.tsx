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
    "29hVXiDk2LBNMen15bx5zQPDQVuXQMSFKqVFQEKNX9GnAWVmDWSGvNpKFiHWS9se8sHvTweC4uoE9xkJzGhBniEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Cvwkeaqy5emhpba5ek8eDMNR1T1bR7mq4JuaqMwY4VVxdFqmBnG2wT2ewgSBbmWnyz5S42HdM3dJsJtvqy5zp4",
  "key1": "2zWYuinhtSh86Rw1Sa5RUatVWjrgPoRL4QrCn3mJCGrHz1yLDsFMfVcVY7dp5mVLVxPZM1VmVyz33gGtKRzYJ4yR",
  "key2": "5BU5V7bmZ6CALj3s987b6W7MvQXHEHHnvFHJcX8sAvfM1E2DViZg7BEfk6PkFMGL6eJPV8En5gX6osHVGvERxYYF",
  "key3": "2Cv5XMk1BhtueKMaP3vtVWm8bG4PUjPDkHBofvsk9VjYczwgqEKmYkNdieXen3ZeRuNntXYJmNJ1G148PyDa7pmD",
  "key4": "5bhFMZn4UAAFvLW7tt83A4nwqGfLG8dPDZEHQLsfzR61DKKbcWYgiFAjLZCHK3ki3iU4ZjsWoH54RVCFhak3ud9C",
  "key5": "4ismgBZKop3YGgFhygdV6AuchajQEcDMLARJJreDtTcwphGAW2aSc11DF62U2aBk7DQUiiQitk9PSkCaeHNMDozb",
  "key6": "2hv4encmpQTAYuwSjUtrxjYPBtZAVtJCYvdXRnHVgQPJziAeADyqKWheigtXTjTM9g9Yk4imNDNdZbUiJqXVNwGR",
  "key7": "4B6YHcgMfCzQtuszJwMK9TStdH9GJhZahwe5cRQrWNgboYJBPHEnins4pq64A1kzdiDo7a2BsUKmZ91EHng4RG8x",
  "key8": "5esGSCjutgBfRWGuxjVUArGQpBKswcbxQSWyd87QvWgm3oBsB4eVf9yVPVEYJ4FFW8g3MviqGfEL6G7ZyspCx2DH",
  "key9": "3373s1joVvsj1Jb3g4mv8MV2uBCrZEELd1ifFR26bffYbY3p5VpXJ5pcjgDiBYaMRyoRr5dkTcoRMSSxHK5BriVG",
  "key10": "3Gm2m44agGaZg9bmRVEgyQwbV8UX38cgx8VPhXYuPU8c9Ry8k6uYPYmJCMZjBMagpLX3HY8G41pwCrQ59rzFpNJA",
  "key11": "4tyRMTaXJsPge6JcCvxbXMQUFwhk8nX67EHpECAq5wxp8vWHqdVdUWgaqn7mMNJ3CVyVLm9rgKLS1RLRumXQE7BK",
  "key12": "5bFYLZAuf6MFvwXF3tfezfsnU3bP3Fv8jNXDKy9NuiYiYBvE4pp9k15cEB8TjhwGS2HyEzCMCxeP2zDWkNmSgMMi",
  "key13": "23DJG2sesSo5Axteu1rZ8ViRp4nGaCTEhXwHSEe5qJ9UP1cGab1mYKVRnBPM6Ag7xVz8HTsPMebA2Kb4XtPZ1kXg",
  "key14": "8RVYJxxYC22ehZTrARPoHPrx3u59TtLrBRaXHTmfFMG4sJZHZLrLgEfHEV9w89oenJWu1fbMifu468Rs95Q2hAa",
  "key15": "bP1kbcHqweuMAUkXsKRYtjLzFD3vRDkZFSouwZ6FFc17ouKt8BSzNsmsNSH4rY1LAFTRoFEvHK19jG6VZRqadyY",
  "key16": "3gUYXM5qTejF9pWCZKBtxCzWG8ZnT3Xse2Dbc9F95h5Wz8ycJHoS5yjo8XfsHkr3x5V9qSgUwaWyUSu9kKxvMGpH",
  "key17": "4g8o98CyKLX1kgHhLVTwyiJorKCZq1JYRAdxR2Bzk3Pf59ouFoYgNxz6rgjAWkEnHqcRENMgRbndjB1NDkQ4mVMA",
  "key18": "5ezoKzbFNHK7cYcJ9WWTPobvEK2Qf3v776z5AAw7qvWQ32iyawcgo1te62XBEbhmVen2Ho6NjsvzjLMLS8KAogn1",
  "key19": "4koY6aY81EKE7DgnZuVz913qznvhJXtGmQ18kzSxNKQ8jSwe65hCHTioJX9QnvBze74v2yFThJ4RDg2eMJy8JJwH",
  "key20": "2qUywG8VCsPNc4YxSPAfww8WddNuTdAYVVZtPJhRSbR4vMN1VHoeqyDrCdTNW6h4eDtawTEQxxd3husxvyCqnuq4",
  "key21": "5BzvW42nH1dFsk9HTeZ6uPHwH5qxAizk2nFg2pcyesJ68ArRaPqRALFuWAAkWeea5gwbQY94hhKD1PeAeeYwjPhK",
  "key22": "d7REMNHxNsApxCsC36BUYg33MC22djoErSqEzLvaCWrUZNjMdLHQyKB37PjXy71tPSzq2attjoepUscHGn6AiAR",
  "key23": "mqtKw53MeGuPKSjNp1JsQJpmj3ruhMbseF6tySpkqRyYofUt8hBs79DxMAcvFteHwznxQHTPefpxTKNN7gz2KQq",
  "key24": "4E4YaAmyyYMHhmnQ3YfAVunVG6XdDed4LcekfvAseKbNZCkAKiZvmrfmkEJbg9gAJd6XSkAE44h4kp44h3YaCqhx",
  "key25": "svZFYbV8DdF48JmMxCkMoiJ8AJhEVg5FV7rzwXoNfywbSWR8EUn3HNc7DAXpNB4HcbNZXTPzt1TMcU1giYwbMeU",
  "key26": "2YJ9D8vQpDcMFwhPYJo8Zzwwy7wbcVixdgbkBMaBisA5WBcP8Z4FbSdkadw9EfuMzJus9jUTMYDM5Px7eapRGH4H",
  "key27": "3c1yG7pw7ftcuaApCc1hYoWSHDHzofqaxwQ2LYaVNkxs2uucLcHRNrSXLpDsMGrFqwoV2ubn23GxEKuWRBZJBwG1",
  "key28": "4QFtw78B5RDkos2bdvbUSeQerMXdKG1Dum9Lk7wVQPXGbbp8GJWh5y7LKMGeQSZcBf5Wwm1M2PNzwoSfv3bF63eu",
  "key29": "3f9X6WiTNvqCirj7L31r1GVfZyDkaDqAGwxdSEdbz14Mu1DSqZjdn6CCEWHuKFyzeXUHCAUSK515M5a2yCutJvKC",
  "key30": "3u9DtibFWPARNa8fjzqVCDsrjBptmSRPidMHs9cznfR9mqfc8ikCBJ18s6HxdAvKHGaLTLUnV8jCoskhZY24Yb2K",
  "key31": "5h1p7nfZpNJ7EmXX5sSzAmud5jmvapd4eng78pzC6WW5huMAoKZsRSmrxnsFzfvbZWtHHvBDXqZVDb6ACKmxmxww",
  "key32": "4ZJM1X7J267NhYLia87ZMBJaeSM92asP4C8SXQiF9Q3TZPVdEsNsU4p8UjHbYkh61rErVw31pmmeGk9g7agVZhhS",
  "key33": "4mMtFX89itb4Uy3h9EcmY7QdBRzMAYg4Kxjrz2CTUSohAa2Sda71MDyDPkA4h9AUy5bZhaYXebj6uAGuLWsjcZnc",
  "key34": "3Kdn1wTBEGRpTh1wEsCVhvVAt7t6XbFENdBwuT7Ym96wry1ktxuPBKSS1iGZfbw6uML5ckixwH47r3mQJVD7tZMA",
  "key35": "5g963xHTEhSn7cBRR2Y8zDVa4k333gMQHCssDeDM8rfsKsbrombKH8FahFEC3NWdaVTJKjZXdPagt3yf5LffQkBN",
  "key36": "4nWoP4qX6AKejounp7VJNC3i86MJXD4hicnD7rvsYxgSrnvh22JviqppZYrQrytT1tiz4mAMzN7ZgiGjkatcGXtH",
  "key37": "2gprZkPnc9BQbdmB5N1W35uJTEe3m4Rkh7MjRXwQFoUpacQEqSUjg9nLWQGsg3VWurcJd5AtHVSNCNQds52PzQx8",
  "key38": "4sm4pa5aecTewmc5YtVsW3b8YM5pPuavdPk9TWaNUeZ7PUUkRVW7PrnM9goM5X5m2CZ2FcU2wPk44oXF4QioCDpJ",
  "key39": "3MZicRNewWkCUAWvcEC2c3jsWAYbXTaEk6aXbUr6ebxnY7pxHMF4NqFZZnPKo8GuTBMe8ggHJKBtE5aYu6ZbPAnn",
  "key40": "xqDuSW4FcHzYFkG2uPFtzz7sd6kHziQTL8JzCND1t6AQJBYkdFfz7FBnowYQrgUEfFUHu8nHZWzVD53cKnYNZpC"
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
