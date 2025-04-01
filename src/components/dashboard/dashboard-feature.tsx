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
    "46PzoYQVVyWxaarTFWRQXjjxGcqsMsECa7sx7K4QysG1Pg8yXJ8QL1oq9E6QEKZi18giu5sfALaH4knfdmhqsZFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Ae2KW7eqasYmoFFisurgPKaPFZFyBHhCKn2PEm31CFYhufjfZk95KDojSp99bYBZbftPKYticruN8UGWewdw5X",
  "key1": "3thVoKVwwTcs8geHxA9iiTV9HhpYqSfWBfkw74BVTNoEhYgBEoZVJ5LtxNYifDfEBSMu5ikDnkPayxaMxR28zMfY",
  "key2": "4H3mWYrPqxJ6vn2RNNnvFeJhF5wvJMEYTRqWrC2V98LCQsmEt5UKELuwU8CBAdwaV4yPKfCCMcZ7cEWzhpDEc5pk",
  "key3": "3rTRDhHcCsK4DWGPn1UTE2Adqq6E3S3G1tun34BV6ndkPPs4irhP13yWUjw4BVXCStdXGgx8Sk4WTt5grEKkFmpv",
  "key4": "4AP9g3Ci9RzE9T3o1Pv7udma9sXwpDQNq64VbeiUXsmZpVzEWBJdTUvaYZnhiU5NHFXqRucyuq8hQUMUfkca8Xh7",
  "key5": "54YiSQTHzYaC7stuthzmoNZiLBLiUL5VEQqFC4jqqwq1jDKaBGe1ztNFc7XBJgcy6NG1sR5B1mhzHzhHXJNmMUFF",
  "key6": "5JLzENFetBjKNB91UGzi5FMfiQH69RiKUBryuzMfHauNpfEkDe9rUhPHWGpW8p9T1rFbDem7pDYBsQnvAhLoQ5md",
  "key7": "59GK41CicFBgmgjMjkuw9QeAwqBRD4S6kXvsV6NnDbbWFeNbdFd9hPFWPdkPWemQZ8W2GtnSMuukMahNbc8NRuTg",
  "key8": "7yAzvES9r7oqosQt1DDzcRKchK28sxKSv54XkN2zkXvA3934ia6vNZoUhryNv4vy9s5juW6twM77qnWYzEfu5EP",
  "key9": "5RWJzPk9Cny6RTCmEXJA6gZSqrNgPLShZz94J7SzM5Z1EBssM68wEpkR9mKN8W8JHnk2LJ2xQ9noEJvNqTyNe1j4",
  "key10": "zZC6uZjGEh5gmxfxYZZL6iVmQVVEnXSs1VruGd764EkfjteNJoaP9vNfnK6WVLNVNf3QfNdSk1NC8egxcSHvzzS",
  "key11": "rmhE3nT63TUaSnNNgwHYcWwhDURusE4x4pCctakgQYJwbjK1KVq4TgU2HSMWQV8w1a7RgDWJY2vCQ2CJt2q55tT",
  "key12": "AY5ENGkxqUw2KivmXbkPnwyHojx8fCVniZFhXRPhyYoiVrWN5djbHobyNYdaY1A8pAJs2V8oyPGT3JCobMuwquK",
  "key13": "3E7h2Pnk2P7Dv1R4Zy9fUBc3FXicMe7s4ubV3ZqA12zETqeArAUSmKzVihMGzhB7fH2ed125v4Xfwyn7Q1PfrmVa",
  "key14": "4wpArBkic7nxzxwrBuWxUymovUdjtwmkaBzxT7ss1K8eRz4RBsNZicx4Wr9RBxdb1wmvMvSkFdJSMChvGNmCJxBv",
  "key15": "4dhBuiQFmKQuK8Xz9BjkGRnTDbWZQjSwFKB4cq41LPdYrcabnb2tQfSCxwUaaoeJSdxtpNuf1sWd1oiwA3enPVCR",
  "key16": "44gNLs7ovbWKUhYt83GdHA8Pv5zxFGHP5oRF2x6pUfKGiX5HFxq1w3J6Zd5Howz1QNeqq31prujmdLiNWKjGPGWQ",
  "key17": "52z7K3KzuPwqZXEUQFX9xX5bXFXS1y9qsUc8QuXujwTLNAfQg18DARN1r2og8sBgGcN3TtTC9z98KgPwGuoKUPxp",
  "key18": "5vk1A1eJudc9TB5FPK4N2Dw4Q2nbcvdZuXyAXN3SUDJr1pRTWqc8o2dfcTZbjmavKa4tuqyZQ3YPS3j4Ck9FcqbT",
  "key19": "mdrJk8PRT4PtXx5h3nGnbNSse7KX5jJ5XHJAVfP1rEGsyhA1hyYm7vbZbw9omzLmV6GXN9nkqjC8xg43aUDryhM",
  "key20": "5n5gxVTTc3yHDbnLwkbVZy6Zf9bE5jvPyJDaj75pL7Y6s7axsRT5P5MqJv6rQstG1ao6bs8UtAvgZfZFKUmC9Hv2",
  "key21": "2t6KfUoCme7VGebceidUMv6G7NQhvXohccCB2FsBCA1vAMLmW2ByHJvCiUu2zaRGVLyULeFCBTamTYXEhVBaPPtS",
  "key22": "3WaZ8w4c5YWd5UCy8etq5C6kDjvU7j6xzQ3rHPFPkeKJynfwh6p3uqjuaA6KnFJeYHwnKX9D4fZsp98vH3W9Fu6o",
  "key23": "2696n5jX7dJKFZmzTrJ4ctXbQBFhgsrbXnkHiFFrAmFPtexKMvKADGrtL3fiu1yNt6iYHx4MnXCKx1j43xpzDBB4",
  "key24": "4ja7oPb9TJi555rqRxag5QbcrBpFwBgRr7bSMVUew898dTtWXoQ7ZrWBDoFA8wizn1V2guYt4bNKYomEcaymTa9P",
  "key25": "5RmGRjsx6R6CxeWcHmuUZjB4GFdjefm2neWg1q3kdaeDNRrwJASCGHYx1FcKp51abtdQZu1MVci7M1MJVCajjU6M",
  "key26": "4naTaYMujsu5F44Q8pfozH9x4vDL8a2zMDirJ4n4d1cC59e2u33SY7h7UoYR9UiZTGNjSuGST9SwpiPqjJmsnFF",
  "key27": "bZgWy6kf3uLywHV4SUJjY3WPegFcqU2EtmfXMWeDD2MwrCq4KCpgKDtBSXyD3LkXgTLxgRfGwr5NYv2yAH1UyyW",
  "key28": "55pgrNCnC1RAVGHRL3ZuPfmEUUS9Q1GSDxf7CzCTuYXrTmLoZcBLKzuzmGG9XeE9Kpg2Dvd6oJ9B4oRKirUQrsv2",
  "key29": "5m8gbg2J8DHgHkej4HbWwonxw63HFmD1roAu882Cp6RUz7PgqHf4Cnfz2cvTjBHMr5VejXgzQDxQ57Kq4bB9DWuC",
  "key30": "3HB95xMcLS3BSqaGZSUJ9PbmroMtzdoVj6oG4on7faQMFvhhSXyCtxusr8oZLwe6jULUXYnuVAhqzfi4wsNeeomg",
  "key31": "5TUYwfFDry3oBcqkAtdXFRf1VuozYsouoawvc23mbsmQNzQFDT8STagS8BnqymCEedJTNjSQ9m25F4GPW2UwjdYr",
  "key32": "cFjT1Wmej5KW95SQ6d9DHsCZRzRyvxKEQS3ThwTKpBYD5RicAxZ8DxAaPMrHvBq46LrewEqgcP5xdMQVcuagS8J",
  "key33": "2iKjNW7ghBNCVfMxDuo1nkNxZXzYgTb4rojBNDDaz23MnaG8McPao34j9ypvFBem4nhBBPuSGEdtepX1SWrn7F8U",
  "key34": "4CbJtRDCBJct9swuEY5Sy4Xo1zycZLSUfLdNzsSdB9D6Fpr9tpzh5ysm9BVED1xNTHHnBC7pJW1Ssd3sMpLcnN5J",
  "key35": "5PAFyXAqLxFtEmnuBDfyCMFBhVi6T4egUX8yZDpzLCuqkvLmATHaD4mEmbhvCNN9RKa3d2ZjF38uT9EjUppfZcm1",
  "key36": "2FQ5wfWorqXfEMdKmFxQDjjrfzPk7mmfZcEj2C4Rs2U7wBPVZkR2xzG2QxeomDXpCZDe93QF2HunCZ22BBw7D3r8",
  "key37": "2bj1uRmsghhJ4wuEyz9EVPhimKoDTjuVDwwJ8SmKTs6w2hchBA6png8MX7FNfRjoaAnpxMrfLaULN2Aee6J9oUvW",
  "key38": "5gu7eNvyggGYCxKFQesGdRijz7xiTDsagX77CysR4DiMBxZAqZVeTJRNYwGQA6u2WcMmLSiBwJBzYaPefhPMyqHG",
  "key39": "xHgaRYe9kMGYczN9rhwM7nPpd1thTjLehnQnt3NEAjLNiuoDPW4zzYUZiQ1X1fv6n9c2tQSnR6Xojr8nv4ti2Qd"
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
