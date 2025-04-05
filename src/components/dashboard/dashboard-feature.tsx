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
    "3mvhTYsw4Auj2wHYwx5rRrJCMugrNLsSvNpjGkAjbcQyCeWDgToYMMa5p4r7yEnFGudj3g1DwVxtVJ5vtT8tiDVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "579k9woa962Qu6ymDWyr3pS5qRPVHaqkyqvXg3rRDrMPBwZTjpqAXh5tWhCGMVqA3soD29Q4oaqFMBqEULmJn5xC",
  "key1": "JpWrUYoqTvg5nquPRRcDN4ZiyB8h6NsN3CuDBdccELA9f5uvs2ZLLkNMNJPW3PyKqcvBR8ePZ2uSAzhZ23h4Dyy",
  "key2": "5nbd3nfoWDkaYEkB1vAsCzkyBoE1KuWCvYG3ZgcpwNwHqcSTEcpJtrCs1HJpzdiBDVEcoiEyPcTJUcJa9KY2fQKe",
  "key3": "18hxAKZPwJ5hsSoCfU2QhCy2vcPjxk2M177cnC2gUpYRPKqigUDo78nfj5JAxde66re5h4FDbomw1QkKtayVsPt",
  "key4": "2jyj3D9XB7EpMky7M5RDyXA7zjAyZF6U3TTLp1qqqYE63kN7KQw2n9i1KpcGD8Fkc6oH2n32UjqPSTfTr6vT6bFu",
  "key5": "5MMAAkAMLNcjj8A87w1V3Tn6tgDQ92DqQQpBW3LvKwj9TpDcRrTQFAne1VW9PEvXgGEuiv2GKxNN3UtCdnCUG8tx",
  "key6": "5tbyF5K6f9dSPmVJsWgpcqgopDYTYUnpY99W7WwqnfLQxqgwEMaaZRbkGHyS4J2fvTQ8aABWXN675fiePNK8JaoE",
  "key7": "BeBqBY3HgByZg262wrL7Rhb9pkP8KQgBbUyKFGyeW9dbZToXcUsZKipYBzomhvbRnY4cF4PQbHYVF3TTXkRFuTb",
  "key8": "5YrsZ8F7LUtgyVofTXFGgP4w4N84UnJFoFTK65uMtnyDcys97dD4YSU537e5SWEsZ7pya921QecY9dd41DVg7yoP",
  "key9": "3Yr2uCAPyj5n7zXsumpxmW12eveG5txcov7PzSdVSzAeEtnow7stvgXbJHm3AR3d1xjNR6nmDxxWPUstpT9iPJGC",
  "key10": "4poAJQsCzQTS1xzLCviJdiga4goRnLo5CbMZL8hSUB17Liv8is2CGFVeL1r4XPJCEFqS2qiBECf2xXWRT2GsagmC",
  "key11": "2jGGJVuzgHY3V3g16VtkPahjN2KbY2odCGE7tfFfcZ7cHoop7FqPprfrLXFbxZ6Px9WP1KSLApAwLqn9ZnJohuFg",
  "key12": "2C2vNe2kYeyHjfcWQ7nJZUw6xaUPvZbNxbf6Va2BJyd59kji9ovtXyUDnsnyixN726vKxacuyAXowfdvmTCHJQFd",
  "key13": "Xa618w92GR6nqBgJG2FyYuP9jiDuxN9ciztKSvRfN4y1Zr7wkioPuq4Pdf4JU7NbftRyLNzZEsaiUvZNLxBCk66",
  "key14": "55X7Q8KnpGeqGd17ovjApG8fS9XbUX6DFVWw5AorqhvcQtaRvxGwsPyqb8wURa2QJFNAkBKJVA8bYWoA488nvk24",
  "key15": "2Et9q8jwvzi5fC2djEPbpviCS2QJJL9tANP56TR1Eyxnfb2QDAsgYGrtZjhNrNmg7KayyCE5pRZHFVsmC7jPdeFs",
  "key16": "52j2w3ptAc1AJbxNDY644SdFBDv5273h5ePXKiJLVSfTqPZEFejLLnuvFXUxMQuRQXvQsDqjZyZ3pRUF5eA9GRNk",
  "key17": "5mktUNCX6wYd3eKdiXXkFAkuUU6ffdpBgjz48B2DNfXT5DRy23MgiZSR83D3UeLKnXLCyCyPpTJQKqihdSSHdryY",
  "key18": "4EaEVu5dvJJTL8zkPRWwXynGACjHNruA6HFYcKpa3siyaJefbUEDGyWHcB2R9TbAcqpxZHKUW3unEgy7EAiD3peH",
  "key19": "oZtN7ToNAo1NWD5htWCBRRqtzajUBztu3fhjS64H9QNV9mgTncMQkcVX4v2JQinieuTMVda3M8Q7xb8q3eaApAu",
  "key20": "46fWndmXKx9vqn1kLxJu2yUbQLv8i16goLAPaemk4KmKs6N89Xe64b6DLHLo8oXynK8v2uE8Fgctngt573vFvnXm",
  "key21": "2n4aYHMiCmKhs3K3HwCNWSDmMmuaKGcuYzZmvM5DSRg7FNu5jSUgUg9bMvENzoqhUmhX8bWsEmQosgqfB53xYLRG",
  "key22": "3dfmtU5FoVCpqQPh9i2JMQ1mXXME7yBFLJGY6sUkSv6iey4kArqQTAE8m4QfmcYaWBzXFJPmgSMvTmdrY2djST5D",
  "key23": "53n1RG4dnTzKBZ9EAJGHXFudCwhi9CRqPf87Ty8tEQ8LiJZFhJPozMaJt4tiAc7bP8ESdt9F3Uhv7T5XYKDuGaWk",
  "key24": "5ufgDwJK1sm5oS6a5igQLDF5YekfCEoqaTd4x4CKZJfx89huHiqnPZgrfFBfGyPxZNbDu3Msmy76X7fhDv1LmsCZ",
  "key25": "3mRXqJ4JKRaUHbeTtuaTcfMiG42ThJYH12AgWDsheZ7FunKWFqSnwexSDP9vasYtkUiD1dKYQ4d9EdtLA6GJarbB",
  "key26": "3wC9H4EuWDYo8sgXFo6PjvbDx9iZ9opiNFRF2Gy291aSLWiVf8WLnBw2KWpjZLcLeXG46uqdkzzTVQFFNLrxaDf1",
  "key27": "3HtCJKRqbF54E9iiVYNdJDJuWWrUgY5ssESJu9FsDgYhEV8QmMwcQgp6Z5ZBgRFRFF5eMC6cXKovcDUeDY1j3aK2",
  "key28": "2SLsdRsCLKbXKz2pvNiwTuxr6FcU42BzfAk1xkXun9ybGqK2jwSyvSa1HFRgxWcnosXWn3mXjnNMFHGh3UeViRj",
  "key29": "3XAeJq55n4KuPLLXxNu1sgtQrMLkM7DcAMgCWEdGGNTuknwyZyn5Bq3mnU4xM6arUQW3rFxpWxh7keg7gEvRFDZc",
  "key30": "44rLDzKVSYXCaJ3XErzyrYoCLG6kLboyy6MQqH8qXgAvfbEcbSTv8BouNaAM9FrH5fMxeyFXMmMe38AifokwFixn",
  "key31": "5VvctEtyCEvfhMHf4QDHo8aW6uHm72V5nyxLpATv3NGo1qjhXKgfFqGyVJbZD1vViBuEdjPNhwSDKEkGnfzLeURs",
  "key32": "4tSZVCrRXZGqphK8VxK89Fu9cqq9StXv9GWpvxcuVZsBrckHYisKt1zQ3CV3537aBgB3Luad19M1MYfzCcBrEf3a",
  "key33": "7wDxhjB45aNMvxUGHy1n9LCYnzDhE8x81WhRV6T1KkFbq9yKGTBREa8RibUbax93PzYq8xFR4C2iMTnYuhBgopM",
  "key34": "2vrfXVnXuqPXVXdKvArXwckNxbdE3sq7p9y6ffR5yzbEJvESUCYHxqvXkM6H2F7Qek27Y72gwiPZDW5HDHmjxNCU",
  "key35": "GJQUjtMtrrPoQjuTu9SVUwc7QHvYaoR8riJjz98W4TzpHoTWVNy4hH3pauKkWM12BXFCP3xB47pdP9ZxonwfCL2",
  "key36": "3vkCYwSHHhvZ8KDYNbdoYWDefLMp2rHHWEdvmew4HVex7oxHCfi6gAC83bcDkoKL8TTMHVo9yRvs1HvToGk8G5Vc",
  "key37": "5yE3MnYgYb2iDCg4e9JP4wDGdv3ZKjhgSg8GuDkkUpUzVvbjVRVdsY9KT2gcMvAaZr7vbYevJBiRmok1Rp3DUeEp",
  "key38": "1wLYaeLaDwRRhTsTZL3pVKkeUDhn8b2d9x5eZRWeT6qfA9W8c4oKapz1XV1WvGRaPdcDzJqMV91QtdpPqogyRBN",
  "key39": "41auNqEtcubjD1ysdMqv7tyFji9HWXvzRaTLDYqAUmiCJBCuwkXTjgoMddgmVwTYB7tZexTskHRSWeAJBrpTq4Rm"
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
