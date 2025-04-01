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
    "2cBueJ3hC5kgrtm2hEFreLttGYJy3KPDHQ8wW6ZGjZtxZDymG7j94x3JH3LBYAusuP9Nqq8c5GWEWntYNgt1yNAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mHNUXgQdt859TTiDEhZrdDxkhBm2u1kJFyqyLerrDmgpRWfYcHZ9J9yNVuZGRvUFmoARuLeeLYGBGCzWSdNN191",
  "key1": "4bKwurYpJLZrZA3mheDvt1VHjzJdGpPtX5q5H75MqZv5qLmzapT3cnSHvz18qqsdTFGyVoD6XcYj4vMxrt23PKDf",
  "key2": "5Z1TipbzBFQq9994RgQtqVP6p95ebBawVUtes7aAn6EPDy29zPJ96bB25JpWEe86gP67cST7L6ez3nUCW3LPAKxK",
  "key3": "4ZZcxnjA1WC9pZX6et2JR5iev4pRkuboSJxgCcsQ3GudxuPbtMyw7djcrBn7iv7FjQ73wWoq88JixpRMmvFYFmSN",
  "key4": "svKHgRHYMkDESWqg6PpbVPJ52PDmKT3ejPY9UB67VkT4U4xRGRtnwHs4BDMHURc5NZhLoWSxtiuY5uozungLZ8s",
  "key5": "d65wTb1kJZJvgwzZyKSgWrSgjxGMwVotqqQHPVj1uNoREN29A1jxKET6dQYgrbgcA2FMRZURFxNzYxZDgc1ehtz",
  "key6": "63mHoHhubETZ3cotMHJXT6FBZCtDLEnU4z4zx6YiAKAKDszzx2T1sF5WfspKEoJudvPtJK4qxxtQGUFDFiQUasiJ",
  "key7": "4Gsq6HKFYfEC9pWhPtzyczQUEo7gGJr6hno8A4e1cF8jBVh2gGtrasd3zmdEMaNFMNxesxozif825Edtsj2b2FbM",
  "key8": "4a4WnqeCKY7RfAvpwNoVC86xqhHWL4yU6rgHrvsfPjKzowyJkR8dR3wEMoSwAtnMh7eMPSbM1AJ91gzCwDNHrbTn",
  "key9": "4VHEbEhDDQms4rPeX56DAixU9w8sHzJNxU1iUN2DgSPUfscuoj18GVueUNQXPmQ6CzpJpqyJyzDPx1WcKpznvJjo",
  "key10": "5SHzGNq7HHRSvRzKkJLiQhcUfa1p32uLbonhufMT7bPgsgs6mPbKLLuSStKF5ssBG3t84NTxz2MJUkW4eGkGpibV",
  "key11": "5aMFU5BsNKrP5WADgmrgisX8GnZhEqf5mvVWjj7kTEsJGMGJGSg4E4mKsgYEyE1KtJtwmEFtp5DjSD5eedAMTwb6",
  "key12": "4bFNezDGwrVPLuziQzv6ybQVt2X2WHuWD6xosjgVW8s3vYsuA8yszCLpoWnuvFSZ8KTHLxfe2rUoa4gxH5WzKjxq",
  "key13": "7Hw1YFqjS42SSLSkTfqw59YhutAYF2ZFcgKpLBBxLs6z11aTpDmoDESEGqYDkzjaMZZVWksUX41SkTTdJyvaBQP",
  "key14": "43r1mJbJnRZbb8MyVWSfDx2qmpehtwWwMYCCrPdqSKUWcRa41zuujKKgZuBVmGgNB3U9zLq59KqhpMgZpgz4ssR",
  "key15": "4VSs5PGkjtPrXFbfr27LYY3KJce2Z2Z5fZNg8ZWcP9ngrqJg7uaTVCZLxrG9kSwzw7NqUVESt6kRK8u1GJ5Qx9Df",
  "key16": "TjqaSTuTtLiFRi5FE4gp375bYaDXU6rUn2K4QiTExqqjP43oDyJpGobynxSLypqPJGK5nFXXkxkyVeXEobiYA1u",
  "key17": "Y674MbT9d2fLyvj1HkWHeh1FnFhHBUBSgZYSm4s4fs6L7HxqYwCrJLqpCfvGTe4S2JZXisiWsJawZsaThP1i1zb",
  "key18": "5faRyXe4midoC5g18FtaDYoMEjzm4ou2yUepd3YuKedeT3cS8GiWkE1zkdJbEJtq98SwSgdJyx9TKFqQJPKPKdKU",
  "key19": "3ZHSJmARSsBaLFZzuEYiuNASPzcxSTMkhWUzWhrRgqQb5prtELvGaHWvcBy48CmD9RWdX5oFsoCy6RhPULp33p6Y",
  "key20": "3Zd7t9Ckg9yHW3kYecMjEYxpAG5fWeRzev4iaYRTVCnbz358AHoJ2Us8fYvDpDAH5LYW2RUn1bVhR6MNk9iLsU28",
  "key21": "21baeeEkvMvcFu3XbYiaXPHkYvEqaUfuyc8Mhf1H38cdycShxPRjdXVu9c8pz4Tv2ku7Hnb1puCxZVxnbtZ5KQsb",
  "key22": "3GEQfxdrHMxeG4AkXwY12fxsziF4CdSWRTRoWrx1k88BpuFsGFfTrF1AJKPC1KiVZxbNpitH7AaEt4zostiwRfbp",
  "key23": "4hs5PiaTs9bzah5mopiwpa3GxEp9oDWXmaMa5PbCBSbD6FNGXA1NBmx5JZ5kapAeQZTfpS4M6WKu1KxKz8HG6bP7",
  "key24": "47pnMWVeBr7UjnkhDV4Q5XuWfZG4Jmi8d5uWbHGvGcjvfQfkqC1guy57y1WFkcLaZtZ4VFJqPo7LrGHa92FAE1M4",
  "key25": "3GxRqCLGFa4s8ycAH9a4hqZTDAPKF8vWiQviUq2omjSHHS2EyQTVhurbdBviUkLkGnjGj4n42YEhpdqAW2WUx8ds",
  "key26": "5ax1Nzfi1x3PdcYGFRDDjKbxPgLuSWdSfGSFG7WkSeazXfDnXHNAh1vtYWTbZ7gF2Ravr1V8ER5XBZ1YNgZpznVN",
  "key27": "2kRzU9XkCakpJ9kR9eEeyJ4Dfvo4ChbLmLXxKuTEkWyWJEaFe5WknsrtoHgHsJwj6Z396Ja578PWHgFExK5BedYq",
  "key28": "4dYZbRpGmv9y8n7EQGoH1a7dkFAo5DLftoZZTPMHeuVCgidoNZuiDcrF39pfA1AiyoNBqjFkBEwkcP6qE5L8gXe8",
  "key29": "3TpAnC1tfUK6Q8NZAxZzohJNG17cLgbekNQcpfmzS3Kg9uoTDE5NSCiYSvyPnF4JHJnsqUFftSmgypCNtus8xyc1",
  "key30": "21sVVzDKwF9yU7Sht2QuRXz7pxnNnVigfa7MTnkzNrPQfg4ktwYoQ8VgEg4pdZ2UhkwYgibe4RLxhQVtTxUni5YU",
  "key31": "w2FaV8tgQK1t984kkZJGds8QvwdzmFQMqCPRQkNXHndZBA9Fy3FzKa8w2bQpkVmvtogM2iLAapw2aQoEEATS4Sr",
  "key32": "teSX6PjwyCbJqiWnqHH5XzCG1ejqU8Ttc3qeMSDsuQxV9GvW22a7s6wxwggVvSYTsqntKjV5ipkZqpCX43f4dkj",
  "key33": "3Htvsjo3ruFj7YTdJw97rNwiSphZT8gazjb1FsZ1JhZa8kqX9D2BarqyZUvcuPkBDsikq13B8EkSJ8kEQtbuyvUn",
  "key34": "3AchKv3A8HzJ3Vw65cq6wXh4c19u1q2Apy6Lm8DwMswAjp7FUdDfZn2ZCFcg4F5A2oh9euigSg6jRNGS96h26g5g",
  "key35": "38mybjDxNgTSqBhT8qPP7WA8YprhbaWjDP4ozmr9WsTkHW9Y7fGEhD42WSUk7eyoJxieCTc7TyHJzMifMsXADkj6",
  "key36": "3fGQBhdSbvaZpgBCbxKaA11sTHajUmkZ7RkSQG3fdAtyLpy6i4AyefYGFz5XwSRU93TEgqxczd7rygKXzANmbnud"
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
