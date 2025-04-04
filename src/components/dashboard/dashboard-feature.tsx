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
    "3GDkpvWWovgwEiz9NrCG5A42VQLumb6atXj3kk9VEQgi5xaAPTQ5ap4MM8NQqSxeTioBwtyyhZYaYX2Wv7ys6wrA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XwVXDnLJhynMYZseNNDHc5TAqA9EtCBuEFCdyk3mobwfYktKFHSNgb7YNgQyxYhStBr7tDm4VXJ3i9agyFzBFvk",
  "key1": "T8EP3bw23cnHvbLcFKRhTxLGs7zzgqsnSru8aKE6ZaqgWTqTZ7mQxZy2MxnzDfc1c76eSH1DwYML2vMX2hbutE8",
  "key2": "4rVcVxizHgCk34ttknJERnFTb4zXgBhJCyfCsGFQ9HZbVDf1Ju2kp6RTwLhpG5xxUJJM2Cv5h64T9X3bE9FJEcxF",
  "key3": "nCdnm8zu6xr2P9z5uqrtz3D9awTMfuTMbPbjQHKEkGqQoJnQCSc38L3ePQZvmYa2Th9UK5D9zus9eGrm9bbeH9X",
  "key4": "39x1UHZHbReTXHiuj6Bo8Ad9e2BmwQBzN1QxCueZ6nxmTF7mZ5wigJHqCCjabBauLZqZPvZorDXGUJVTCJw4DFMK",
  "key5": "xfdNe9e2c9efzqt8cr1yNQuoevipamfqzFBwYAEFATciDXfMnj5kjoNWAmFmnH5AFmFXmZeL5KW1mGPweYwDK8E",
  "key6": "3Byda6wsp37mm9dDnjYQPjVY97wVXYCVYAsUQaujw5edyRX9acFb42RDre6r21mZ2i3dBKQKsBNBqcAk9S2g7iuj",
  "key7": "4dP6FGKzzHWX3jwbtd2UrfYY5G3aBDJRfF6ds4hueFsdxrZXUmH1oN57vNLSoi3A8pwpN7LPpyJusN3hARmhLPLq",
  "key8": "5FFaXtr4n7mucVLzkQtReDpWKt6XC4Vjkyr5q5DSxfemHYPZcpzWg7GcSkNJ4ykMtmbfnmEAjunsBGGqmtQNGTwc",
  "key9": "3yCRswvK6DoQemfUTnfRPUQQojJRUonw7yGSBQjEHhvMmaurp8ugaa3bwiuY4ryooiTSHrjzC5vk934gpT76naLU",
  "key10": "SxU5YT1MdasCPSJAwBWytkpi5vcznYxLS2w6Vfhr2inrUx7zTGQdGNyrDxfobsu59i9fvvtpMTqnctdLoHzNwMc",
  "key11": "tCoz8YwjAyyBvm6sR17euYaw8h8HXREiMAEwb3batdWRpscKe5f9tzey9NVnY32jbscsh1WKC6ryKjoZBxQt8kz",
  "key12": "37ixuXFxAy1eeznJHmq5xCxYF4pbmUTZbb3zNXfZH5kvcRGbcWyWFA4W8gWis8efLyFVV7LwkRstWLWW7cfZQjjS",
  "key13": "jZAWa4b4YuGU3ZNPN4EjV4Z1yyr9vSsayH15aykuu6K8Uf5XA93Vf9GVqAJEkEvU3ievHEemmgWy6JXDXmFABrn",
  "key14": "4D1PDyenvsyYZCt9ugk5U1PESRBZsuaVqUgnoHainejvCt3Jt1L2vUiFcN4jMQnrg7DEV7SELdYbMXsDRFB1Ziqs",
  "key15": "5wsvQ5XdfXVnRD4uWgvork9FvSYei5Py4iqmngyze3Nmqk7vgnZxaRP41BhSVE6QqwwD5mpJZA2vQyvu8kc3Wp1C",
  "key16": "5FsnD96YKRqqUscVSiCDSHMMUxpXTqijfBkJp38rNWFSjxf9Gx6uNSXRkLSUEVo9dqmSH7txJHTYfXpQg98YPoRD",
  "key17": "2tQ3GGeh6Md3w7rRLzrCdgSLRJ7p1AMmrmroxEwuWtwtz59iM5cjWyS4v74UNvdzK2Viy4chixsDQxdrUDv563ep",
  "key18": "4X5M3bBqakMqnpS4irLwXAQRK4LvnD1hsSWHG33A6WoZYgXGaweAt7rE7Qb1H58EKhrLBp1AfomrEPZrk7jMXLMd",
  "key19": "BVrhfdfyFpXzj2YwcXogjiqavLz2Hd4EY1LARJVbhmgoiHzSvnAy9y96p9MEzq1tEdN2D6qDj2b3T9z3AAqP6th",
  "key20": "2TZZmsQDadQ8Z9LVN4LsE6qmvGGTMwd94Jyje2BHbXMYSwx7f5u8ciMN98NcHPdg8A8GyjRHeVUJEv3waK1UwHvy",
  "key21": "48TWqvQYBs6xiVPrgeRqwessywYz1RNgAMVDJXSZTXG4vNso5DUnAYBbreyfmyrwtimPvL8gWg7yqWhXcnkHHf5w",
  "key22": "3G5oo4wnatuoVamXJTf2FNmRP2XjxdxaXfxvyA8maV8tCm4o7HSWGnu8jUuN7qm5efyVbvRyMyTkSmNyQt45XzBv",
  "key23": "5gkifzqH9vcsNiosDawCvXkhmK4WmMwE3mc4Wz7gN5xBnMoJXFcBn2cP1c2N7CRUeVPx46tYms62x2QjFuDZ6ans",
  "key24": "8hWPfnL3RkzUQk4K787vgQSA7Bt5fexk6TTex1TyZfKTqp4yidJ7W8AEBt8A123AhLnUVyrjRArJAZEyZM35K6w",
  "key25": "38w6W1zYbgc4wqLMS1nAVeL8aHGnJk2xQe3STamvK5qFmfVURbdUHhswk8MBwe4A5AJKPDU4pUFtEZh3NcUrBGn8",
  "key26": "5BJczB5FfqmzDGvrbtjyRaoh32FX5poun4eofbeDesfUD5MgBcMhvecyce1sSCgSRLFedHa1HVLP6badky1Bx3Ma",
  "key27": "HvxUEUSt3NadboLy9KL3EKCLsRTA7Z2N9XtsWpZ6WGNiXMcDBRrfv6NCLkqXytA6vZT5gdG5hB1gnVPPtv9adaX",
  "key28": "3RLnEerAbb7Nc4jpbvHWN9NXvvnS786yrTDnrNJA8RENRukvNSGxc4xgFa6yEKcPtgRYzsvPdxN9BTdzJFrv1Kwp",
  "key29": "3awKVbArKB8GZiFvLx87FLRLHMAvdDmFfUp5ZSbjaZnH5kUrrv3C8e6A73r1RwNigBzFBtNExC8Sb7287LaEML4A",
  "key30": "5nXfYURTh515SbzWBtZXDss8tSUUnRUrP7AFShzFZc8HdU82GG3CpPA8Ze8kzJGPXUVkKKaDKjxYdjsGr7EQcwKs",
  "key31": "37WnbxQ87EFuWJ8oxCrXsEA4Jqrxk5jR9KSxSiJ1Z6k5sVXaiKkcCqwqDCq88UDGcdQwrKfzfHW6uhtdvWeha7MJ",
  "key32": "3bEDK3Kvp5KkCDyZGc7GvqM1KM8uje9GqWwXkUyLgTb6vwzxJLXA7F866wHgdPmYF35csNpQfmocKgXjbJzJ4zyd",
  "key33": "64hLtnw29BrmLzvSEw3xBWZW1PSLEYkJaDLfd5r2W1s6iybYR5McdMV1PHboRSKJBmhn5DKBb3VtPoRQttnmoaCd",
  "key34": "2FyHryEyPauJWi1eMrfqo9w3p2UXd3Z7tjVPS6MunEg1J5ovjk4MgdZkseyKxmzoeYdkMBFHuRRnPPSYYimtSjwo",
  "key35": "3VK8yrQoQhAZsssrLr3kBYWmBNKVCKGpUd8hC4p9JRb6DVzxKD7iUM59UW97osVfHCUqPWbbCde253zMP8AHC14L",
  "key36": "57Fkghfy1E4D5F7oCBCDgWHZs7vnXosXKSrHoYySwQC7f1F8dv5T9M65pGYDkpwDBRvp87MbyHMcN1Lw4VkM3VmH",
  "key37": "4jcEWUuNn2tZNkxPRWGcHpey3nRsqagu4kyXmqGqJPejPVzbzQx6ps1HhYhCKmGqfzWCTTiYENhLNyhcyR6aue3f",
  "key38": "46wExq52bXCpedWbL2Kp17r2C6AhDCeEdetwu2Zp4RA27vFifee5R8LYZgD5sUyfQzxPehHkUtiDbEAwtc5aXNjF",
  "key39": "2BLrb34RZPYqRhsv7VJAUEzVdKJpmW6ksF33jRFQYsv1GNDc2EcCxnTz2VMvSb7VUA8E7efy6DaAMyMSpcvg4ts8",
  "key40": "KvCCrsKTJpV9k86HV3nf5RRyF4SVKCenaWZGegctWwa9FVZgCQcBfjBZUYM18uVDSvUzLBquAHBWyGiXPPoMoxq",
  "key41": "2ZXXm4oC25y3SsKwEs8USQFo31uE3RWcgiq3Xx1MBjE4icZxYCVSnV9hL5UDrTfHsyYzqieq7gmtVDXrLw1x1w7N",
  "key42": "2r8ZfwpBZJ6MwsRoDybtSjfcKKfZwHUTr4jWBms1BQnwxthnY6c2XAQp44dkJmgzNNmAHH5AVj163dmx2ro1GeV1"
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
