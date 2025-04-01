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
    "PPUazeNf2ELF5M5yrG4zikPVBf2fEQah2zhBvTwY11Mr2HNCv8ihJpeEzGWYemHp7At5XrzRm7v89xgzZZw4pVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R3z5jDr92w9hKtsRz4m3Bjg7Az9XhyHucU8Xjm9XNLRHFBP79XUA1HKCyXAxVj1Hju1wz2ccy21NNxH4GS8gK4Y",
  "key1": "65J9SSzs46XRibumWjCyrZkT1EmdRoWKpFRrwffFgFtsL1U66prd2wt5WBd8HyLGNganpwqvr2qRfzSdwv3KLk8R",
  "key2": "4MxHv6mpxvuwsssMbQdWbtGFxvfrGryC3QThr4DFCSwKyaiun3hbWy6BoWTu2uHTvfpXS5VqY6TV7H5ijcuGHASG",
  "key3": "5uKMBS1zaUJKZiYnPzq8NAwjLGvbnRc3oCGtkKdT8uAbLxs3f4wF6uP3mAfozgytGvG8gVKWGGmbSGGC2xMDSKkn",
  "key4": "3Kb1isNUsKjecrzWSqPgeaB723rmyeG1YbPCSkZUT89qSGjGUifQxASvWof8hBesRxfAuHxSMS1YxcpAWkN5t11X",
  "key5": "Ugm8L5fTQUtCpDAZsrudpy8WhB5apxhcHDUpdR93j96qm6huN7x6eYndwn7RBM8qqHif3FCE2YZPWBFP8vsdTFq",
  "key6": "4E2NncAWTfmATPazbbAFv66E5wP6gr5EDQAfAzH2Ntwmikn8k7ECPBiJK72EpNWYXEMeopX213h2Ko2JFJKp1r1C",
  "key7": "i872mahCFUBsAVMpEZXiAotFsTJ4xHUJXEWf7UeTMbKcYce4f8YeS1TfuLNb9tuGwrhyAkyH7JSXtJt9H6Aq7Yc",
  "key8": "2edZRyncwsn1o3w4p3y5J1F26fECVy4sk4wMoUmBvDx1w77PpioKQ4XZiACeXXv3GPyYAVAHCgkNKXyscWvtfXqp",
  "key9": "4g7SR2AaQB9pN3nLYxpEhssDWmizmoQyQtbUBCqrCfTbaxJx9Yg4rpCnvzxTUELMgQ44jWd2fRyznRY5nbqs2sUi",
  "key10": "BTUMhN5bLqx43anMsXZBdefuKwZz9kt18piD4kEY9WBVrHaXmpqAZ24gHih9jA2yH3hBucFc4xdgDpYSZczMSYM",
  "key11": "3oyjwg3HUfQohPGBU4LdA2hJFcTE2BtaXY23iQQAAeP2JS7iR2tYxZfSn874VR7pHgAgPmaUah3ybY1n9CeqWTrD",
  "key12": "2wQu6dBYkN3L9SX2Na2x2v39jMHjxFppf9FD91HCWx7DW4t14cLrY1VnR2tEaJ69BMPQkTWbTjyMAy4hnJKVedP2",
  "key13": "3K3GjsBPHvH58qVkbr5zuKrvsMfhkuYRdPwyE3sjRZvLTW8mxKqo2iZ5k2o3w19Qnm8oDmNkpnjrmjiWLH7WgtUm",
  "key14": "5dm1Xuf1JyEnUWHstYbYr2f6wTdNXmTwEXCd6Lb4W49tMBkkANsTxoBJ8tAxmVvwgrBBxSoKzEJ68Mn7WqQjQdD",
  "key15": "3UZnpMGcqfDALTHLqX8kNoRsHdktGs914PVyZD6gWeWMGVgWxsmMue8aimpLbMANe8UWHqTJdYoYUtHNyQc21xjM",
  "key16": "3HG2vHsV3fvdvYRMWYttGPuBdp2vw2YbTDZSFpmBBPwyNjGGiAc2Yxs8qTyS1gw1NqTHH5zsWcxzohTDAUWYXjjT",
  "key17": "3Xisvs76EMG57YDu8hATSfPTRLSP4taDtqQ96xTAHZjJmDfqrfmX8iTv5gpCCixHgs8DEDapwkZuhzUTJ9uvwM6c",
  "key18": "3McqhYqhfqa6Wy5RdSwM6zbSXFdvnB5K7WLs1FXEtSdypcjkQ82Ezbh5EzPmH3ToZRgZq1YjphupKazw6ZeCmjeG",
  "key19": "26iLiaqAJpv3APTUHd6S3TTe4Gae1QZjy4BEeCUfJjrnjomGAdhXyRZ7eswgJMrdxuhyByT72fd1ApVk8CLA3JZk",
  "key20": "5sa5cY4HMHDMzXq7hevvuR5xMNTCeEiMCc1HwCmzYotJ69QSN3Yt9aMx6T6UgoUdjVASiB84vMjkL7zuzyKwdbrt",
  "key21": "5qipRwjus7GjUP7FMLn5MDRwqovdv7njn3vmJ95qbkh7Um88WUkydhn7ufygLTrhzVP5B15XU2B4JwFJrD4gErr2",
  "key22": "2XW378KX8xWHgr1BVGChjcTCFfwNkaqznHKeyAZZq2WsPYxRxuLKpYNZ3yRm1MPXuP6aDq64k5ngTtMhAJmJZHmH",
  "key23": "5TdN2brNt8aepHycttnwBy4Bw6pvr2zDTtTk533T5c6yBhLjg5LTWVmZTW7mNP7rCCrs2eY854u3csNdtMn4cmqx",
  "key24": "2GwU2ooMDMGyTaDMEkmjhrrMVeJezfMoLPMnmDS8VjsDptUZqbkfpBP2VWtowHrJgWrMq6apkUjEfY6wuTKfiq7r",
  "key25": "4B477Tw7sd6V8UbrtpRskK8xjUFz6kbKjvLtvEfXwZncZQVbTcP92nGP9oauKejZFLVsAgpSpnXgZN3H9SqXLVu4",
  "key26": "3MKqTgRye4HbGNwqqug5xaSVmdXduuHJNzEzGKjtcVbjCtVWVkPzEM93HXDGaoniDbeuLDVjrNx13ni9MXUdZvNc",
  "key27": "2c1KWA3dc5MLe5RWp7q3CF3zqwgmCQxjCzA96Wzpg2qstB57oyTdZZqQRzxv7kkd9N7PoiTcLqmzB7TXBzWQhGmp",
  "key28": "5YQxmmrvba2kNp6yqQhSmNXgZW5bPHyzeMLZNQ24gpDY97ewgd2nF5rTc5uDHzVnRKcTPbnTpFKM9e9HfQJSxiUY",
  "key29": "3PLZRzCKNEfL1ZZstY5YiziczY2uVeyJdKrSJyFaA34XFkeqQq529LFDx7wCj8zCmTAbA43Hcqz1YLvVYhUikjQX",
  "key30": "4vWpmQ35YktvhwEvxuDpg5CbvS7so76PAMsnrEYgicrouwnp7QQPti4qsonBtbiGTTD9DYca5PNQwGhnbkoGgu5V",
  "key31": "4Hzmc3YjdaYq68gKfRwJ4DiVAZ81eVeJzBc6vSWY4ywhkjYcCNUPHAMUWkz3LCDrKe9rWVyWFGubuTgU8PManuda",
  "key32": "3bWLmizY99REk5hX4APFZkVEFNnjxSrmvzTHYNdUfnv3DyZB1Xw8yZy3rvhzK4aYzmjsG9w2awezVR2yL9etXC26",
  "key33": "C6SHRpUDLkc7JRCarGbuDNhmSoTgFkCv2HncrZGxVYkUVCSXqmkfxKbs26rtdEeXQWpzFrUVeYduGWmYxrREgU8",
  "key34": "4aaEvDaARJg4a1PKjZVCQtEBnJmvuJhjkCVzNkuCmV5mi4VWJh2FGhXWFTMunbqBpHbVCGVTggXmgFaq4vmT4TRD",
  "key35": "4WQ5kBGFPE5tYSYfKUdhAhygCwiWmYVodyuHJuKVjsaazgwJVfSTCrY7pUZN76Pk9YviNij7dn2iiTt9ys4Yv8FG",
  "key36": "9d3WiKhAapDBYF82EckPPgE3QLPfnkKYzPoFxHrB3oJyZGj89YZuPGJVGZ2EBpZTupcpmEV4ZotbmNvRBu2jFFP",
  "key37": "67ZcEipCogggGKfDaVbbiufmLtrenSvW1KDZBMXnHQhLmbknAMUg7Bcc6Ake8ZWC3Q1Ha9983Wn2N5g4avgpk4oA",
  "key38": "33jGqZhDktvVJ742v718x7q68nbunJ94wGB2Hazp6kHA1x4XrCY7gbCXBJXTDo2rhwidGooTnzZbMaEdu8jpKiHc",
  "key39": "5szo2VyBS26GXgJHEkBvQ4ar9aXxdtQfWVMGkUzuNRyFGzB7CeY9YoGZx2HPHijUCnwMgAq9DnuzpebRmzBZnitJ"
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
