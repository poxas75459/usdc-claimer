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
    "5tLjQb8Ne3pYoX4UMioTeVPfhuQwGbvW17byEaqLAHvFSkn8iA1g3jGxpsLbe2jrN1VfYW8VvkPUXHZASvAGDxfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X1DRAazLhLhcebwibqhou6FdCNGoSYk7K6anU7bXcRNBBf1TL1JcvKKBWdWG561zQfwUhgN71wPTWvrJvjmFSdW",
  "key1": "3nzWmzjwotuzBWALuyPa6RkwC1sj8dQZ1Yx4tvtprCTupsN747fmzutN4ysQY5PF2WP9RSkFtFWWCgkeychkkxcT",
  "key2": "2wrF2fXuo5fwkmfsdYzba7bVaGzUvMYDFDey9YzLDoc9HA72kjEu6d2kpSbaQsabNiYH3PyKFcFH9mWaRkktsYL6",
  "key3": "498FfLfNx14XDFyFZX5stLtQaEAqLackB15EPAHuqC5jUfLC5BUPhqSpiJwkuxGyydAFZZ82p5x6Uu3hmnjw7rsg",
  "key4": "4bh26dkVAjHkrrLKweXgAQCg8bW2ctCL1pAS7cLUbRdSrxnFaDjFhmhr6jPmBvxWKyaztJGXLXCvhVSRPWVGmPAr",
  "key5": "3fd4qgSy4zjPo2LdfN3SSds5iUTPw7t6NKE6hsWGsHtZocPzLVXerqWowSMUYsfLJ51kxebLzcGUbqJtTDDCUfMw",
  "key6": "5mmUVCaFnvcd6xh8VpREhueMd8CuwKkf72gpNtqjkeosSLzByt8AA3gw8ecDVozuPEkt1mce3eDyTtYHbdekvyuW",
  "key7": "2GGF3DZfy3FkX4CDdi33jFC51r4VQDxCLgmfHduDDWnzkYsT2oMHes3G9dJaULcJ7QHyuQdNAnSzWz1PJCTyGkhg",
  "key8": "2C45iVb5DF8P8TBUwCQPZ2YXExKtEmpV9tqwUBB9Sy9g5DyztjebrPQW8g97ZLP1opHApbpXY69RbqQTbgekm2gp",
  "key9": "2ceiZdWHfGba3Ng4qXFFnrmyahvsKbUezxjcnP5V8TjXK788u48Vuis3U1SrJvsw6jP9YtuVmWhyM44UMc5DqWaM",
  "key10": "4G44y2xGxSHk1vihCXsBLcnAU9fmRYQvYT8m4dRDDNqXnW8cbdYcC8WCGmAuAUq3A96jxgfTVeTEeWeyyAyzuvmN",
  "key11": "39ESq8U9v476oSDapx9JVH49qmuZRcw6pnDTPJTxAVEJ8tAzDwTdaA76Qn59VnFLKvmqV2weLQQRzm1Ve9Gr9Wg",
  "key12": "2WXyNbCNSA89vvSKfMr7g9iPFhPgEfvRGvVGLDxhCu3hsRGtHwARRDh8JYcerFwSHhaJ1iohDs7bAan4nexdoKmk",
  "key13": "AJpsUzhy6jEAVSMSxYzb8pr8JFxnqyfezRgud6tWRiTGmSSZoLRAh2KpJUMwN4oZmp5Jj8hR3qAeqsW8aNSN6Dg",
  "key14": "2NNs4e2q4nb2vqiDpvU7NpTWLATvyHZDWMWydcxbDrDbZuprsuQdePb5KXn4x34xpthyieZrkdpYPtB9Tgq3yAjx",
  "key15": "t4ZY9CNHtqb5sM1VPviKmkumgV3RYDBA7RUMaiS7ryb7QGA91uYSL5Y52FTZKJwAc5b5uNxe5Bpytts76QuFfnb",
  "key16": "4ie8ZqN1U65UFBQQHSNft8Nm3pab1FCAeSWvWeM4TAXW5Xoyz8HRs7fxipiX4a3da9k6VzgJmEkNTwGnQmnvRjWE",
  "key17": "UZFjFFLuzq11Xy3KJdtYkR6EEHoT3PjFX917qi5tyJuZtgARSn9RkmGxaRzrvN5o26SHhQg4JtPSm8Nwbc84wzL",
  "key18": "4UJwDkMqRKgqGckg3ddig1tLk5tZCsJvjzmwUK4b4NFmDxMgjgNtdRQZCVbZGva4R4SwhNoBMsNdz3V5xFsRYhbQ",
  "key19": "3S1xWgYCAoVxQT7FQNmCcwambjq8UXdwWptdEsfJgurCf8tuszH2Y7d5a15k8LnKoEvrLUcHaJmS3DCmg8yJWkSz",
  "key20": "67Kiyt87bzYkDpQUpue97XkQ9rggdz6pk8moH5LkbPEKAERBNQHcuFMjLNQfHF8LNipV4b2KuWPNJReLmkYmxC1A",
  "key21": "2wmd52yVCgvCTJAGwPEu3xgdACnEJNfLCqhKXD1VbyzHtSq3tk6zCf7DYncJuDk7nwLnUJKh9VqAk7udFVRA2weU",
  "key22": "wxMgTNTiYSjboc7FNoM9VhmEqwYnH68eKk7wJWSS8EsgpMcB3zFzAEqT96kkdLCLDmswmZnttzJoYGcLcsv3tmg",
  "key23": "3X1dTruAVsdYvbVdG1DJGizpJLRtcZRJBAnzeEAgAhetv3xnZ676BBeH44YrSJYLJJsHr5ph9Ptqhm3VYgxWEzdW",
  "key24": "xLLduAsTG3CSBu5ZEUyyh1rizmRDcLcdVMoZcpd3F5Zjzv3naB4gUukhds5rV9evSvFyUK7RSt12gTYM2GgMuwu",
  "key25": "5ynaGAG6CDdUgw7nBMkCzwtH4KMFwe2ey4rWzFcFe2tFqiLwN55TUrGFQXDqPqdmfgHnwkjzvh3ZE6aNCtzvQJQa",
  "key26": "JEV4A6g1dGhyPiMrk8B1ZpD4nGBYEbufo38VHMko15f1wdZk3DeShzzcvJa3xXtTgne8MLLbu8ovTvP2kbmjr2w",
  "key27": "61aK3oWt8pSWLAuyu9RkVjEPasNZ9SF9Mf8bZvMkLU73HDFz7BNQxm1JLc9ayBDZF6iDZtKs45iF5SNPkjHdGJbn",
  "key28": "5qP4cJhD3oUW3J6sAgxTyzLEFqzPQQ8X5XqYMHjMqZYY6CtDF81prLJ9EaBoJKCTeoGv4F1y7RJp6yyjLxDR1MCv",
  "key29": "3xVK6bb2rsDWai74wuFF3pzRzw1UbbmBMpieivshz8g7V1mCWjTbpfS6k9Dgpz5WP1zZpywfGR4fUnnfeBrf5Fyb",
  "key30": "2yju7t3hiVTE6FMNjo5sCxj38Fcm9hcLAHxNPiY7M1mmC189YahpWcRKCYytDahBWAdSa4zLCS7xXSJVHbvdK2a1",
  "key31": "55kYaVuyZkrmDoPahQTMqbFLd5tgx8QKepGifRtvp3oHsgaNp1aL5XNcVqRfUj9QbC5FqtzNC9dhyeW6ehEBzscc",
  "key32": "4EqsQ1RmA2UxcSYd5AsQDvTN8tHBGVBPGfuGw5NDth9piBtttJGrnpKQ9YHX9FDFpoBp9kFSsPxdj3CA81JRMdAv",
  "key33": "mxjcHHp5jojYpdbMd37HT1Ase3VUCnsAMwFxQbfKqA1LdcZNCsQA13T8wYJZDjLaVkjENEGwyRY9XqJAEukULoH",
  "key34": "2fi1tTcqvv9jxbvR8gAXwd1dXojhNjcLyYb4ZFWNbHe8WwuSB6KqXjtQqTvHf9UXDwSQ6g78mngocYv3Roym4XLp",
  "key35": "2FWcr1btLHHD1tTVFMtrrSv2k2a2U3shXCpnYjF5jnTSBCJk5YvHcxByQSCMUcV1cdA6VHmaZ1soANLbW5Udmunz",
  "key36": "42vw82L1QYXbkXbT2bSuL6F24ucL1rNSTZgQmmGqZD2srzFnf35moGKk5hConpoEyckrWyzpXwH6fNS2QKm73F9R",
  "key37": "1W7CSbv4ZrL5mCxXMFbNWHz3mHy67Psvn6q2zBuSHiSqEC3FEWTAqHWRGuKH9A4aJcXE5Nv9r3YL3pFmnhnXXMN",
  "key38": "5LjVNL621T41cZizL3LRbKWv4fz3dLmvLJJGyzQHdE9NbSqQEzs6hPa5bTwvrDULtUKckGdJgQZ6gCbY4GE9E3Bm",
  "key39": "3ABjSHqdqU44xE64Py8zLENbrFph5rRdVQSaRo24JBs65qPmh82xVmFTw6Lpdm8xMj1S1tZZRCzhnBSdfugFxkNq",
  "key40": "23oMroX3i2rjHKxDUnkCiebLDN3dnsKVfbt6fZgH4dEyGVSAPNfABvKLA9NRmtDWC3rjQNLKXJJuRKfaZXsX5GXW",
  "key41": "2uoj9LEFdh7sGdFwGndrNmMyUiS5xNd6CwE25wmVGvD1bGiTftYvVqgSEJtSbK8uD8QWok6C5j9ZcXeUaoyidude",
  "key42": "owiZ8Hyx3rPYtnTYgYStWq1LfBzN2z6KRDTVtKv5DwWaTZd7VCcMHzd74RgNCpxaGmtXHmkcubU3SELZbwnvDsL",
  "key43": "37JdojqitNxVrxAPjgGDi85eYX7T5zHmx6wj1SsLiVM2eAueg2vJjwXnsx3GJUaYQrZAvCitDNysuH55v2vfeK5m",
  "key44": "4VtHJg5DWyQ7BjN3LRmpRH3f38JSbFFwaTWor9wcpT6a7s3J8FropvgB4gxLFFPPcrLnLchWZLEtGsZ7akjMFqtK"
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
