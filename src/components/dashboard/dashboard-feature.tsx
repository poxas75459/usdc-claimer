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
    "WoBfVUMSbAktU6GBBBcwN1Rjgim3UkyfMV5CD3GDQib8qbHvbKuhqDhAdTwHfiUJ8MMYzcuCTQ4MvKw9CvHauZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rAwFxDddXja3e5X5k2rJ86Cpdqga1MbFzuKVhYxR877uTbf7iJFUhijX8QqfGiRoidUv3YH8fG3KbZDS6epPauY",
  "key1": "3ydm2XeQBbEWEX9dVHQGaZ62QQFhHrfE4FvTwrcMmaBgtdMLXXRFj7x2EfyH5e8A8MQv5q1fsNgDn4QXNKvLeJ87",
  "key2": "53VCZNR9nARGDzhfYkKcxFYgVSDiPinJMdNaeYmeSYg4rkiTLYb9DcNudjq4jBUgu5amQj1Cti92E7eTdGjmrKvf",
  "key3": "4NMQVwsm4G5nNseteM4FDk8V3NYroHP3MiW6S9W7z2JuvKV3fbNmGepy9JLWKr1bSMwMuHcZLwB7sUt7rwazhJB1",
  "key4": "4xEZMEH4uDNvWZ1RWdFRVMqEy9f1X1Soc24jpm5vY8cxCecUoZHwrNdX6rnYf4CyNa16rWNemBXLVTns8N19E5FM",
  "key5": "3811XEmnjJducroxFkxQuRrwdA4cemmeWhkeHwGW4NPKBGDtwzskQCEEydbNRUSRoQa8AmEeRFMAYgUYqcFBBvnD",
  "key6": "2QAntVjaTzPh1kBKUEDTykmU1mUHb7FjhxcZqTDDySNjqQQM3SURjKVwBFUbzpC9tzp7fdxMtEUGtEW5JtETbns",
  "key7": "3N5YdCto85UDwkmSmfxPTvstih8jERwMHNywdsb7bNTCDJfsSBzYK6CFdEqBSdmQ6sLXELY7fE1wrmdGNyzxTsvj",
  "key8": "2MY67KedttkUH49pZUdgme4QNcoZhnirrT58ThTyKVwSqGgnZopTdNQuhN9g2hUCwLqsxQ4SXMfStY6Lg7bJEG2r",
  "key9": "2juPG5UbUEAu67SrBfqbiCoUN1JDaNMhg4V6SAkTY53wCRP1EWX5MzShVK4dJMwQeA64CujntZe6edEZcp7dspYV",
  "key10": "3Jq6e9gMbC1qyK89pwSnkZq2fzdADuq96Ww8CyCCV1u6kRccskKhZxitrRkGr8PGD4Zt34cd35cgjtmrv7FpqASW",
  "key11": "3sXpu8q6rKwTSgCYAUyHg1WCPP6fAA4uf9xfCvSF2Ac6FfCExpDMsC8uUfifJVj6RpBnxQGy5gksBtS729Njqrnd",
  "key12": "63juvH4G4E4Ma75AcYGaNgSACud1rWwsdaUbe1WNRCdmN2Aksj95hPwPRGhXwnVqJUS33hH1gq7bxsYATGMpbq7e",
  "key13": "23VDg3G2hcQSq3xpJVNkWKNRKcXGFwn8JpfcS6MgwzCYgrwfX9S4c6K1bhcDm7iAMMziSBD9JA9KzpmjgtSfaYWh",
  "key14": "4ynSEpJ8Lr4PStHZUsEko3YPP6iqtVzs9AEpgmrqAuJ9g718j77B3wFgFRftLLjJe7qePoNKR1EQym2pxJN9BHQf",
  "key15": "DyRfKw6kmGk9aLrhyFXx5XuFX2Gm5uJtbt7nmg39cPxUUHsRZF6gt56THcsnnL7g8sp15TvG1bbgr1Lhjn2xpsy",
  "key16": "3p6WtMrqg94VAARWq5b3JxuEj5kyuifMCUGaiMERMEG3VJvTQqS2THQ9rq7yqY4PPbbhx9yE9QyGXKC3ovYXaYDn",
  "key17": "k1EbjMQ21DhJh7K9yuBem5qmWB68Yobh4wSec22APnRPsAyD1QLFJeLRSJKRxmEPE8skLKHZTDvbLe9YwkhknA2",
  "key18": "2GkYHe6jKamQ5JAvfLbjJFWchUr1UkLzPYyAUGQzc4iuq4hyeVTm3cgtm6Wy7yVz43Ldht9eqD7zD7JkX7BypcJa",
  "key19": "43tWonXqczLWAdmN73esyQzW6YTVS4sYMbYwMK3wbKr8DiYJdteTDvnXkrF9SY6V4jemhy1Jtcv2RP6p9wa1K9mo",
  "key20": "49SJcX3gno3BETL6ZuunVsad2h3Sr1j6Hgr6gGsptnL3ixm2K1pGMTe6KF66xWYVDGa5yQ78xa91HzDiCiRKa6tG",
  "key21": "4xurMmuFjSrE3ZfAKTmUwoG9D5xxAsWmeu9n2jzhvRtbzS8uAHzreD5SVvxHo8KKGYYbqSk73UVJSGiZpd221Tqi",
  "key22": "3TsazqGcZwpHHKW7ZCByzBUhz4BLh6bTaQGeMsaWJ4wd6uMYNJc6swzWEXuKHQ5yQ3xYDa7T4zQzVMTQuxvhG1t5",
  "key23": "74sqGqMigJia72aFWwXrQSjWzxWfoUpCmb5pSgfYBsdHtRPu2XBHBHrouksPwUaoDgwRc2gbmtod2DyikQrYYeN",
  "key24": "5MwHrMUVYZPvHrogoNYu4hcUUVE9hsvgD6LPGYbNvgti23hN5LxnrVfkrRpJ97vdkFe6rETgnKSjKQcMYUJKBQ8L",
  "key25": "5YTPZFCxjk3939hfkYc4wt2EoCTDbHK4Xx2G9yDwrmCHztvWAyhCAipejT3By26KtzrmKokWhjY8w77rCXUffwEb",
  "key26": "5cHGooXhJEkuAszzz66VmUbmYZpG86iT7u9UzbCnYAxvscX36cieMABrZpcwLJvZUBeo2YM8gNv4pzHUdegbd6QR",
  "key27": "5nEeAyyc8cTvKsWaST9kzrJTyvztz9DbcHvAyYN4DgVwCzxgP4CDTTa1cvajSids9enYGAyTd7b84yhUyfiSEQvj",
  "key28": "3WHKDgMQ3ZNLDnknqdhK6bXdJVTdq71UuMfMfQsri7RJD1yyB7an5Q6wyVi5GjvPHPiXNaDSTiuaf85rieMYBgis",
  "key29": "3UgphULshj6opApkGQkAM2qT6SjhvscV2wJGBJd144Bs9wN4ooWM5VpFUEQKS66gFDau5tQZAc3JfquRDnzZEyvu",
  "key30": "2ZwEuozWDiWEJ1XwRR3DTfX3qr4DGU74hzjivHksBbVix1vATh9kzFHSwsz8SRfTnhFek5hEMmUicxEgp1jk3KhC",
  "key31": "64eEb7nXyCXgokCFrZQzhUhEejUDosvz7XrzTmpyErVtS2GMUhDqmQrXu6KkGBSXNNDfJAPu9zBYctYsd23M6bME",
  "key32": "3oqznhizjKFAXgMcfoULTEEpzns2zcrKb6qeSzERqjX5SVBSMkEqtSauAKA6x6K3M3dvwJVJ6iBddAgWreSt39ZB",
  "key33": "2mSz7F76iHMEh7WkzFJGfWgBn6tK2yTR1AoCnEovJWNsPSEbYoYMUwQcasTQXXu2w63PXWwPACb6eJw3SCNaAVSD",
  "key34": "5HMapNtSVgMUKmwUXSABJmZfySz3nBos4dwgdSp7FKtk6p3Ucg2sVbjZJthXL8G2DyGkfWaFefCfgc1PK6CFvugA",
  "key35": "RhnLrmpweVugLtvhvri3TzzUVmR65DQHKhYuN6rL6Mbzw8AUvptNBBYSXrD1EXXbRdRgLf1rH6eDS6xw7QXVGqs",
  "key36": "3inuwzGjW2TKrLQResXxnPJZt6cRZq1wo6YXLhZveHpWBFexLy8BsNe9aj2pjG6MWttusFCtufrFmJ2KRe7NSbY",
  "key37": "4Dd32F2fyJbSz6FDhyQAsXu7hY7hmstP8qh9Wuh4vWjBpx8c9yu1K5MHC1uwLoCukofdMHvhTGMgjWfxYk1eekqi",
  "key38": "UmRT9fE51XZKiSNyetmVf35HAU8RJYX6rHMctY1tsErqaDSQoMA1p67yVEUWNXGQNnmT4hxA5gf3KzoBKRAzMzi",
  "key39": "DF6QhpnJay625QfBBBkkEwU853KFULay5KFNqbm3YprPrFadkQMZg6X248Gv2rhqSsNkYHHyiL2DqgNFu1C2woM",
  "key40": "45j8F2NkrP51RG29J5a4TkV1GjEpmHwDZQNTEnGRvcAYWddfU8VHRZyzkkZEsoBb1sZ3UuCjkD8AguBg8WxCvjTD",
  "key41": "5dCMWVHzKaF88YkQgqjjorEmiy4w8DHVNNXbeKGcEcLtkarTJCqB13dGNQg9VcUhQbvTyrDuzgojub5nSXgPHnDa",
  "key42": "4ArQcUsEMN699AiGms1jZUAzYcB6Sn6ECqECidMYp68i29qdji7dwA9jv81NS62b9FAFApm93bxn1ApecmvWZGt8",
  "key43": "4FSTtksExro6XgNMqWaLAzjsDEPcr8s69rUzSkL9tLYpmdC86EKYdaog1LgZ8CjwjPG32DxpatDP43i3MFMRo4Wg",
  "key44": "waBrBdGdYSzWDiTJF7Z6xkLCu5goxHLD59QMLi7JRECa82qwweyDrSNTyALAdRMCHW95fH9YKfEYeHx8FbUJE6J",
  "key45": "2WRjtGSFrJJ7NvAw2sAuvoPH2K3oWYwCgi2o7URXrMZ1iMKhzufgheV6mbQJHwFAcTBAFPDpdRnMrPYz5iR2V7Yh",
  "key46": "crCPPKFwLk183Uuyxeh2skyzdXbaBP37rVat23KRyMDvnKWJcvwtsYKdH4PFWR8G5vaaXffzPT7gsSb5dtCtDPF",
  "key47": "f2nuxLjfeC1ketYnAQGtLNfjpE2e4uKK9QpzQFnxDRenEktj3vzkyPBLWPga1nRUoubuiqHGdYDruNFMKNrSRau"
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
