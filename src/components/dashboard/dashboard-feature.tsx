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
    "4GArwiHTuPWizL4u4tEEbz3TgRAmaFvAJ9dtkfMhr4bvBFRqsFycWQjn8i2YE6XodujoFjiGePB8gyoaNL9J2bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46DLz7FEMWVTjaYTbbFWTg5x8iwhnr119CUEDTex2xd4K3fVAyojEHZaAsmU7MCKBraogmVgFBJnMr2wdVEcBapP",
  "key1": "24oiXiZtpskNdFPbhXCo6nignuJdsZFMtpeBUd2g7ZsSitgTLUwSc49VBS9zJrFjobE3YFC7Ho7DgeGR2bA5GWs5",
  "key2": "5Vi6UdncshjqiDg9kyrTwQ63XwpsdKhuWax57E8oXQkG58wVC3g3ZbSTTFRZP28LJH8PhgYJvkxq9LZy6EtSNmyL",
  "key3": "4B6PX1JiYTRujMihDvVzK11TPxxNkFdwED9i6XaKFVng87DmuTzVq2Jqd23tVTquW4NUfXdJaiMmnhjdRrrZMSr6",
  "key4": "5cu9BaoqgiDaJcjWswZcAvaxctKRiQYT8UkDH31QcePoaevnjDpb7B46A1N1Bo5yssciVTDLybHa1n49TYXSGNuU",
  "key5": "3CbuTVatBL4hintvahgQw7cnJYPLR1jfC9A1xAvQ1PVpcZqFVr5RrXB1r7CH3mWJhhToHCQsfNwYANLCk35P61qk",
  "key6": "5oB5EaVpNRvpFXHmCQQUEWkcarg7RPbut8NW699MpREkrnkXZ3CTFfy4wZwqwpzFFXvzyqLsqzBXeXG8V3VryhTs",
  "key7": "4u82zB6wSPAYSLhjNAB3DgbTK2LaVkjhSm7GD5c4JCSRxaL7JVTPHED2X82bLXHYYG2gd5iiCpKizcEvZ6a6nQag",
  "key8": "4EJkuusDpeMp2TDRhwgRFmAGmCEphq9TRVy27NhKuctuYftLNHcFJ8WVyQjXKKCwDhCC5BaVi97QqTKpDUQkv5Le",
  "key9": "uWbqJ5a3QkVMzidQasfvirF8Zw9kbv3jLf7xyyTPPSZtr7fpuAxb2QNCKy2A5yD6QG7SwjCFRtCgrz2mzJsXtsJ",
  "key10": "3DUu6RKDFNrvuLv4BxdSfbEzko8H2DavQtknWRS8cs7n5AvthL3M4mFn62nBEWGzMM8MYKHoZUVppFxYypF4XRUC",
  "key11": "54T1AVBh1idL2cTkKWrAJXVCWkyGoDiueqDzyxScoXSvuNJpMQLH6hEkEbgepSka8gWR3Z8MdLPLSciexFmGqMvJ",
  "key12": "4iY2MfV2h9awBZdLLc7BgNEfQ47LwMvQr8oGA14sZknMx8AYS77txQdbJzKfRDsL3xa5DQaMu9TF84eWt5VkQYVG",
  "key13": "395rRcSjjobo6DVfV1ypJTrJL9uq8x5zDFCbap2a5QwqKMNQdQM5EsYTXRe4GPUDQ8z21pgxPmrfRkyo9ZV3Tet7",
  "key14": "Lq5gEhUJuiYUXjexkjKYFF5e6GAcNZvPen1cq9dcCBQ1vyKzpkuUX4NQDiQuptjw4jznhtaM1wiahkQCE8yaDfU",
  "key15": "2R8ExahAArPB5vCzcufoEYNZV6ZRUtE2xVpc5V2KpZCCjpvWvricvi1n5a6GoWBQP4gDdRZkzkDeRKyPc6RZn6ih",
  "key16": "5xK8pxDZgnLnh7HQ5w9FxaUzvFcKjigxmW7o2sjGd3WGaQgPR4iAyLQ7nEW5xtpYExiiPzsF594vG7ycXTYEWXnB",
  "key17": "5UEaNDTCbZsQg8SW7w3qDd4vghq5BX5MqERbgGV38qx4WPA14sEB1bhBvKEC2wC2zbYXnwcW8gW4PHYNiMH2nhEA",
  "key18": "2qok7W8S2Do3vV3QcL51KSfFNBBHQXq5nFVKM9FHfASHJr2kxa9CLVX4UHGiJb7XiwC9ywFvsqEbrr8b6Y6F8VsU",
  "key19": "4zxtGpU77J6TU8L5ebFLs5W9jYYo2SmbjEKTExytfNAAHnU5kz3s6M4NdSKh2acft1j4s5uTD6iFBXUKZiQYFbQV",
  "key20": "2q9eiWviauDo7Kddc12bg56JrpmK2BThouozofrMBNVzik7PcmGSi7TrKdBdoRGZqpoi73bVrGNWunwgMx7c2TDN",
  "key21": "4F7ys63KgQSkuPwr1cyE4fwiih8sJpSXy3MtTfMJyb3DN6PScAVXLgRz5vvydzUqtKVT1GRBRp5zgPQ7m6rDPFHz",
  "key22": "2aZ5gP8wpbuJ1Mg1uizWkk465fyJxXUwtg5ebQBwKKS7mAAzMB4Kxx2GtnY8Sdi4KJYGmLk6AqAv6py4CfYG4Ji3",
  "key23": "2xqx6rCUyreuDgpt66qpL8MQZAnFMRrJ5x7rwf1qKzaf3sw3aL1STpH3T1LGQhKnuveZR9DuFdnojEL5sY7t7UF1",
  "key24": "4UZFBm8sB9K25qbhNLEAZc8Enjafs5jGxG5htpq5dPAQhrXmjccu85vJTWmcbHHgzZVX45SswBHsQQ86QMTaMxyU",
  "key25": "4Ri7D9eh2rGQus1YJeRZQBKZEQ2xuDbv4iiwDywi4mLiCNNCgSm8AvwFpRjjSYaNPowcgLdjcfzDcxZcHS63BYGN",
  "key26": "CyFWg4SoZFgThyZCXbdKPeNi1pALyfAsEUxH4VooCmT8N51SQQbiVqgUU1gKcTURmC6GdHysNJcvfPg35tQDsno",
  "key27": "5nPi6C77nR5PhqrSoiqirM9jrFS4y1NRS3jNNrKcg7mhzRW2VFH6pTRuSmX2LmzY6Sy3vVMwFuVBitSBg4oCmy9r",
  "key28": "125WgjyuouWaXbYPB2iVB117uknnbXrAAEnMq82W4NWBEKxFWVQCEyyrcDvVStzvYZS815iFb7F2iAdqE6DvQrNi",
  "key29": "5qtFj7JCS1wHuJpvxVjj2NkaWKwRj3UTn3ewm4PQAzTirU2S5f2zLVyempNgVF5WTE5R25L5Vw4T4q59eZDtoqcd",
  "key30": "5tWW6rCUabcMw4SghAhAJT2XWurp2Gtnsr4gvEaK9EccfJA56qSKd7FRcC2ZfnpvTtRnuyWAhJDjsjWZBcfdWEdF"
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
