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
    "4ijjmBnibacjznMddHYXRHXYXWhtYwTdXJ5fL7WXrxx3iE1wxTYjMrs3JxfWfv2wMQ3CyeK4LMhg4G49KpYdKg8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ze7kjAc3UHmuV67BDvjKxmVDo8ifa3HExvdeXaKnFE4rFoT6CPacNjEkvtSzatVfzBoWyRsTPLfB66xDaJJmPz7",
  "key1": "56moRgJN6nJ8QHPdwarNHm7VgNZxniUQRdctxG2bEZNduqRmKF2ynHfiv4LU6vDQPmHYr7GVAyFnzJ1ASBsb7Yq",
  "key2": "Uno7pF3NpMUo5LHzSqRm5FgxUJUFswEMiSzJSu68GE95Bty8u6m2vFTMkNhkJii7RUi3vVaDeisq5akUXbdMX61",
  "key3": "3e9Kg6nF2TfeuoszXkxQDdCSu6tR4sNvCsw1tcxXidK4U1LoA5m3MEgd4XtpoCGSkaYiJRgWuZGjtycThWzzLSyx",
  "key4": "5p2n34n9rL2tfS8PNqZAQ2zrXFaY1HyGYKKKgPQy11yKsHrowtSEc4jxsVCZTrKmBe5XWN5Xsta5yLBaDgnib3cn",
  "key5": "5AvzJrkndayVbKh7Z76xcoN784vrjhcxFvvK58NLmVkhw4RzaH8QcrpVFA9JqrTbUbv3VVkeYAWyi43RWKLPMtfs",
  "key6": "9gktcehGbmgTWvBvizsLcb6GXtqTYVaGAZY81fzfvSAZNRKNyemQfdKnsXnsDdsFku5vY97GqdqRLNYhPnPqZ46",
  "key7": "5HQCwhn3MhEhTi5KfwvAp32Ax3vmrDf5iQkqx8AJoNLzeUaT6fmSkXCaHMv6ocXp4DgBhsh29vnpwHqmf4jRME2p",
  "key8": "4GdersYQSw7zYyF2J7zPBHVBtQPV4y88dDaS29xDJoKiDcfE3rtULbkc9cRc9aS3VVpiiYWSV3RD5jobazSogiqk",
  "key9": "4sVJjZs39qkgmePwsZEXfrMFWLTLf8o8Rjv288F9fgRJ6CbyC6qtthzPfDDf21pVrvH5Lk13nJLFVhuXD61SjcxE",
  "key10": "2kfbWk3chwMuJmxRirQJhg5SW3feCHxDw1hXphUrdnjHXZxAL49Ydb9hrozc7wivYwcS36c3tDaoCpzqhtfuG5fm",
  "key11": "3RnT3rQiACaz8CXxStTRbb8rKPBdYiKNMxsrA4uRmYQ6xTLdB4EYxBPYej4KYmj9tg7y2zGwh91H8XonVKzn9tJo",
  "key12": "5WD5HMUTonPwCiBooATiwJcNeifCvnLV4CXo92GTDx1JuAxVhB7MNy3tX6PKoYZN68Zi5DBxHWxxTdg8oUvBKEzA",
  "key13": "VPdvs8oMQs9y4qqcStghumUgK2WwaeUHmiLxspMGtUyojegFERyMdFi6AkoRpCtLoRRtwTjmHnmKQ9ZQizkk7Vw",
  "key14": "3MTWS6YsbqT9NdrfcTvYNci7VqZY7zmAe5dnTJCxGZXMYDUbDA2t7q7hdt9mMhsiGjXwpkVF2zhTsoam99ftMTWx",
  "key15": "4P5ySM2ndv6QLQrJntKyFNnYBLSQWVB4TDFh3kFHFaJPEHq9spKsJBDs1k6rKJCHw2p79LdP5asu5AcRt6EMzb3h",
  "key16": "2tgLkedNPBEEPmFSrQ1HBiLc6Lk81neANeQbukCxqR7dhHcAVpSxcxSCdn1CQYY9P8eGv1x6Gmce3KCfmCMHtmcn",
  "key17": "3AGLYLNsARMAPFmix7KGpVzBUcc8vo7xwL3W6SQBzZ8JtUFzgeS7MsRBQ7ZZzZ1eeURocXV6wAF2aWBSQCqMXFJS",
  "key18": "x8k6co3YJYFU91PQAQUXtY56F1gvVSCfVY6jMmJPxMnWy7uxPCh8GCokavGmj4G3cyr8VUs8FiTVp25Ewr3CuFd",
  "key19": "4smkYr884qR3W1Mj1m1uGL7N3127YYwCnbP1VcQz2zjB6y8d1a8vcW27feqUNztKyqGfAYMQXV4gYNG1THRBwjzh",
  "key20": "4kx9FqLGLZTk6AJ5JAJH3L9UBLBL46ZbBoWZ3AeVKD8tjxLcoHuz5W42nupfAGNamibKDmzDonhNZzxStkwUEkzw",
  "key21": "3eA1ozcFop9yZHYJJtNqzZmb7HSjkYHgw1tsVYLMwA1MMPT4UQ6xYHUGMczU4GnEnQZgvoLb2r7VL5ePYiWwxJJW",
  "key22": "5TBHXvFE9WrHdF44C4GuKrJM1fv7fsN3virYw1vBP8xtfUFJTRTabKN7PTz5HQN5XNBDRyEWtGWpntyS7h3ZtZDm",
  "key23": "3FSGjC1hrs4M93NVuXw9AfRgF63fNGCygxN24yX66F9y4qUFDAj67DUEhysAnTUGpswiqUsJFb9n4cUaZCGvdu5i",
  "key24": "5YgYhRjfLCEyG4FhmeS9yngSfBznck8bCaiYWnjPGvfUVbX212JUw8jH7e72Zy7FFDMQeQUKBaZK7WDgARpNZtz3",
  "key25": "4CavZQFL7U8xJDrye58RkCjKJRaQHT3kmQaJUW3sDo8GreZQ2wRxtrnGgntTYvV5mRWmFbQfH2i9ZHxykrgxLjYb",
  "key26": "2MxjtLWEFVgVaPsZkFSepyo6FcM8kTpzt9DQpKnGfG2jZ27VnEzTynSnVNP6osWQ8y1Yt8g5wYLRgeMAuyYCDCN5",
  "key27": "WUPrMCrKLnfDrsSdm4xvHpm2G8yrLkCBCMA8q73A6SvBrnFLL6UBbYvw6hrQU2D7BG5yN2u2QFjAixALxz6UaVu",
  "key28": "5BpvPCEC4mx1XMbqUAfapDUXm4QKBzRX6sUxehXsykrVppW3zVDUiLPus7MtxVBVq1n1ut5RrKWz3deG3qVtHN5C",
  "key29": "5TiPiHdfpjkPSNeDZdrkxDGDLuJpBPR7AZ3h9t62e2y2VJbUvJJjToKPCpAahYUqY7UcX8FtcDP3Pb6iR74NbBn8",
  "key30": "329yHjZY6Zp9csK9rsH39fGSX8BRzYgk6Bxtzax9Fb1WgHsUTTETkZEpmyhRxTyggf2kYvAuPE1kgPRLR2o8y5Nf",
  "key31": "KzwANRrEtzjxGPLAMvJyojreqsrCiriefFeJ1M6PLmYhDSFmRr5PUGysVQw99bje9gqCt7BpyJ56tF482tJfk1Q",
  "key32": "4TkztoLChWSPo1X1oS17ArGMDeBHAygVYeRWM363wQryVFU2bGib8PAnoL6yF8rTyrfry8K2r8g7HiWK2CgiKawa",
  "key33": "3ehM5Exp87tdv59Ux9kh7R5iP4F3i3hsNLWQhwgbXujbW9Z6U9wbw5GJHSXhHJe2Sh1wAHgwkkMX4m8NwXD4WptC",
  "key34": "3CDFVU28poJHvmYVaSvkEZB3eYKPEs9a9iqMnmhDYG4iKNP9PeHgmpzxdsD3GkkeDLpuZ2kk8LjjW5yAQzHuU2LS",
  "key35": "2JtcwGCxwdki5HxKzgskeFA4PMpDdrXUWM4R7dwChj55NYs3uiusBCRyPXr79YjR8a9NXsKNWqMb6TowgRaor2M4",
  "key36": "4xFqaqQSxaVMByRvuT3w9qfo48HSyjSMTjc8qrqqYZTjcFXVomfMLgwi9rBpeNRqeq8gNzcafeBNweKRHUCFLPts",
  "key37": "2jbYyhg1ZcUousjPZfgsZiRto9vyiZAGz7GDT9RC2K3neJsYQtYX3buuHMn1cHCtCtun5PJET3euYzEFWzpaFCYA",
  "key38": "2wjiYsBCdZXR1uFMez8zv65vut6xhb2kjnzVH3fPjZrKx49CF2Q8sBD9yCi6afuPcsBiSGNRmxJPxBfwhofCsCzH"
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
