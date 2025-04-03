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
    "3AjhxH45Hi6PUw4M7ekW42vWqiTvS5YRVssPqdTB6cUqcmWyRPehAXAACsqsdC1W67XS26ehn3ox5Jjr7drPiYvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FMybvrzd4pPTfpRsNgu5yJVdq9XVjmgrA52xFeYt2n4doV2U6sG3BxjVZNFYCoY9LUjsvfvbeAEx6Pv7zPJGoTE",
  "key1": "izAhj3PCvmGDq7Tg6hwJftXJMC5X13j4A8AxAY3hwe2PUXe13vdx1g4K5JjJ5M2UdfGdwJGZUM7Qibga86w3rer",
  "key2": "4F7txTutHp94JP1a1MbNjSArtyKB9q9wudf46PN4BtVt82tFJMGWGtpWB3ckykghQybKBrWBNYx6eNUZ4apiY8a8",
  "key3": "HArRForeU9GFW8z4uLhgT4wMfs86f5cr8rfheNW71fkjBJnkZ8dqDscvtFd9kYM6P9Z7Q7VXwm5524XE6JySPQy",
  "key4": "5zkJY9aMRje7pu86JJPE9h56mfKZYGMMFoLkNeyjXu8x3P1WyzdXmxNntbReaKmgtVykGpZcLT3eowyv2s2cPH1z",
  "key5": "4Zi9fGBsMyq9e74dpCCArKiX6ss1c8QmiHN8NxfNAmUeKUE5AFLN24abi9aABeFgLqFPAySJGT956gbfnH5p8zcq",
  "key6": "2o8Z3KCKCoT9zq4miNNzmQUUWG9XAmS24Wvig7CxNQcyFB8qHJtfroesSu1sNzsTMVCzv5QkTYEChsbbVnK4Eoia",
  "key7": "3D1LFzqS1dKkaBVs9wq5XFicZzYUpMQBt5TFnESdyNA9Bo12Ti1zcuhJhCUJGsAMdEnnxdbx6YYoESYiL6iHaKEW",
  "key8": "2WzX4g3RyCzv7ktxa3w9BDvt1dApsez78WgXHmTCRUfKWKLmrac5rvhvHLi2KziXqSGSBQzKdjyEKG9t9FKXFt8U",
  "key9": "3u169kKfFTi6gQwFB8CPZtnmz8hTP1uouAzE2RwSt5arrVseZoatWHAVwNtkrPWrvZWnLkaWdNcPRHhZmYvgF4w6",
  "key10": "4PETE7EYdcb2GBY87AHHUCQ5a8t3YgrxQgDLe7LAWikFSWszfUuS5FgSzSawchiHLjXp1SeAdBXt4JqtbU2Hcwgz",
  "key11": "2da1j1Mjk6Pm6VnMkpwdxdBY8mp5xqbjnNfWTESkJC5at6yBLHL7tbUHJuwTUFwoWzNCk3Li2sFFHmRwKUmZcRAe",
  "key12": "2CEnUn4FVEvo8mgy9NxwCTN9fb5Vghjj28Nx48kqn8Dxhd1PhcSAYtHXznUkVVxUoo3P6ZhsR52CPzgd4HKoUQqH",
  "key13": "4SVwDy7qJJo3W8z8sG9SoLZGWaqPvdWp3CdsAfxthA4539BTDjZJ3ZGkXP6FHEPEA1HmsSThghRVDPBTRKJTPSEV",
  "key14": "4ZF9ptuxZFtq1JFXyz4EkiCKh5EARmy3NTRKsxXsaUreW9ahhi8G9ZZa3aNi1KCLWvWjVSJUrSK6cVGSfST268vz",
  "key15": "4U6YzfQzHF6Q2moD6CFP5RBvNGPejRqcovoWndGtneAvYnSXzSrkNxFbPi1MVSo7XL3fxGrFPTszbdgfYKR5bboD",
  "key16": "3pjmAYNY6U9Zw68va239yS5s1LwYM7czj7FU8vCJMFD8uy67ggiNmcMcgkVAZQdLhm4wEshwEu9rEHkxoJ4mX5cr",
  "key17": "4rKaWtH9Y7JZ1cJSWyuqPqMvBrsN9TsSkp8oTzNPDhPcnqJ56g6dD5kDmrUsNydCFbm3kQXBGqMR1ynPWnV59cqg",
  "key18": "3zasDnTKtVXDR5FPByMC8wPawd1WW5dkQhM2sswzQakHMkzVodvhkiiEovwqNawtNXJH6tbKopGGFPQiv1yQ4Ksk",
  "key19": "5bg8X6VitqxNwhWe38JAYErFmejb1ZBAA9KBPBTcpCj8yEL94KEcjPRHMV7MbDw1RLykCb4GN8ScuhLFH8mtpVqk",
  "key20": "2mEyiSZd6XfBgPW7Lnp38XcAKCG4PVUYarixTT1YwfAA1mtUKdGsoJFjfNA2aJn7Yvi7Xc7aEpDiJBoYq8UYPAb5",
  "key21": "6EmAsPL1EWiSX7SoxGJ7edyxN2LxzizmQ7fbZ29ycXfZ8DJk9STm6uzqyFXuV68z4TkKmrHZivUkW8gfaMp2jpE",
  "key22": "54TW1eLrJhEcFwQ1Toaib4UWKLPPW13BWch9xSqrL3xghNACtCvLR1os9nGtwpb1G7u2WnA3HxAGf5xzPBEfaU77",
  "key23": "4b8CrXBFDKkDDnLHhpeWHTcePmkknjLZm1N6WJ69Ykr7YSJDGyLmdHX4WKkENCuqauB7z6TurG9mUaH9pE5dAGoS",
  "key24": "3aJfdE4rNcin14f8YLKJHPguFuU9mQQAPdUYszsuG2QQMLuH6fCV216duED5hWoAn3sgUw8fYKjkvDpzzcjfVYHt",
  "key25": "i2i24xfDtdUp7APtLdM1bZqYmr1eFvXknJD4XHhmEGHZTmhzQzMm2zyaAitRAMEZeLRLrQqEUxyz7pghPxxxHrT",
  "key26": "4EhZ1Zb8WFrGBtXNQHXPbK42FnHsqkBper276yxNVXyAwJxrdonUtLtSuae5WfpZnAU8MaWnwztoPaxKxwA7BmsZ",
  "key27": "EyzKU6bNh7oQBkXV1Yv5ckctqnGf2NTHe7tqjpwED1G3MYajTmSLhDnupU8k5ZkESTCxRoeM4WxPPJs3qoJXy8q",
  "key28": "65uj165JoEpLd6aVEQsyNvDE1PXv7B4XLKFXc4vGFAXMSMStN4jAgXtb61CCw7Bz8BGXMc3xbFDeBntJPKtweDD9",
  "key29": "3Snp3hvvXYdc4zqNUSBhgNknzBHkRw3diQfLhbqHubLnsZP7wL5xdTrcuKMMLJyiYpRqGye487WLiBCHXvoGBmSk",
  "key30": "5p4G85t22YcCHY3vnmR1w9neo8tqv6XXcoQEkBHSg5hX2CtC6pZdtJ9MndKTVtucqbdBRSzwsWGtk1ateihaxGkB",
  "key31": "67q18zMSZdLiMMrxRe2jTXShod59H15J1jT3AAi7wgEEsHeELDV6993RnPkp119UKJQx6zXrgfV4Z4Y24JdXJmUu",
  "key32": "54X84GKPbRDnjGGyxRej2Y4uVXAJhGjTVuNzPSp6vr82Mh93ffaJ1JgEY3TL2khmwcgDGScyGsSsmAutAYKkqyrv",
  "key33": "5dsyRWNUpFAoh4PRJEHnp2Xdekjfd2Fd71pD6XbKwia4pSJyGJuzxL4Am8ngtE8GTp83fQFctWFMZV3PNTPbDt6V",
  "key34": "3ojvvzinjUMD2mVo8pkM64qpJTXXKexu1EU2DSe9u7wFjvnKbQmeN2huVHbERKAaA8VZK7JDxDBRdYSam96RbUW9",
  "key35": "5r2GovKfouRiAgFUeCu12Nk5TAQxpboYL5SM3AMg3PVk8aH3SCqvx3eusfH9y1h2jcD2G9B7EgjTxxoXbcTtQJ2f",
  "key36": "54aut7iBexStNuK8RPYCvTPPuok66NyY7XQULFNFcvprq799HkDQikDVbi54oapPCVsRtYBxsSmR2rmZaCujNXr5",
  "key37": "23TseduputXM9uApopqUiNKJKBTw8nF6Aghz19EbFCxzcrtzFEHqSuqL6Kh5dSNYv6HqWebdZiXHJS4gxV8oBUvT",
  "key38": "2d6SSuyFqoXwVAExS41WtArKzukM71MTW19yJj5w94QeCBodvgg8qNAxycUagNgt91vUGLgyHVPKogSsL6c52Wng",
  "key39": "5Xa4yTpeDcJWozNjoJHg298E5hF7gYPuEDB49N9Vmug2uLHGei53dP6V1XU9qBqjitcZnm9WdUrNJjMed1QSYDDx",
  "key40": "2o6hpivrW4UQ3srkLkZFgKzqZ9DgS3zhQtA6n1PEcNNwW7G6MC3igPgRH5qJe1YpR7aDp2TFReCCziPRRieLMoYi",
  "key41": "5k7ZxbgJeVLuVmMtr91YZdaqENRmxMbv4gjm4KUkABLJPgPoQ178HZf4d8LLwxYzH5bBWe4o8BEK2BM4gNW3iDHv",
  "key42": "4xMVGy2neMZDTc2jpVgCcqpLD9ugGP6VfR9i8S3MHPywo3KztvH9BD8wYyMkAG7YFd7vLzPNFKajED2dZ81QZERu",
  "key43": "5haYZcV9LNG4VinYd1ssazJYDrP6Ds9ZDarRGyZmuqBZimZHtw8nWuv5B8bmKS2BqTmtJrPZCHpQ3BJSDQpRyTEo",
  "key44": "5wiXL8q2UBrp5bsEAHf3JtMf8ES6T4MYEwjcfUMDyjREMVjN71BkK2vSA5pSiFEsKVLXQVCRL1A31X5NEKENZp8y"
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
