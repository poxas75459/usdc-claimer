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
    "2fbtn5zADaDABNGaoCFeGHmq3YngDcr22KtVD3SDWPc6mYZAc6bVf8nHLcrs8mZX1nNopYRBCJ4diUsmnM11tAGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HAcpdJ1WyGgaMr8BoQSNy3Kaova64YXQtYcTFMtgLkqoybZGQDEWjva2AgYizU9zdemZ4yAWZYJ2XgUrRFbCxS5",
  "key1": "3xj3HQavt2uiLZzYYsGn3jFAbdiQtdfENqfdvLubQCZpqziqXDidbC6kc7TfXPdRybGsX5JJ8tBwAgourTrfqTGa",
  "key2": "42Sw5XbbTpTCdreQRVYjTA5PAYqzkvPqeykVpTMx8hjxVEyPBJNQju3WbPQHbQc5nrqDtb5jBxe93U25EewGCP3T",
  "key3": "4cbCZzWsFcsLUXzcASR5oVQtq564284yA3HYNSamMJWVgwLkSpJHYyd3r92wj2rw5ymEzigCtaypvSXUy4E4XRLg",
  "key4": "hmTXeHXjoPeTzvNAuE37Uja5HDp8c8bCjgEd7pjaQZWB19XgDMTDdBpJFsf96JGM53xUbDsfRzkSeHQrtApCs5b",
  "key5": "3Di81QQwe67f6CPdR13WT6pKGxHvF21ypbdyszwsEZb7k4vSyeQL5m3GkowNtM8uRCLzy8x6WJhJ3ouxzP1UquBD",
  "key6": "55iLTGfvRuXJfei9QrziYzpC8FPwQsCd48y5SjVPj6G1PKGSY8X7Ljmt6NQjdsc5UAGK4mzfwLPnaTxTeBBpCZeg",
  "key7": "2TtEgpeYhNTbofdqTe1QtdQ587ZY4BGzDa1mDdBuQ82NLiEhWcQriU6Y6sCmXz45RVBq8EwtEt4yTqFNjXZFgmcT",
  "key8": "2yx73iPHpMfBD81YUWnBDUWnBhfvF3WNjLndsaR2NDx1cP6hDDmDPxmWV9aPt9Vs1gp25uXxSeMD8RWv24v81TeZ",
  "key9": "ZK1JhhCNuLupfCc9Z2YLjfBMYFnt8BiMrXtJFbdw831cZM3LjpvEqRQFDq44zRzXJPmKDdd7n4uqR4rpwnXT1s4",
  "key10": "2sbpKAU8GyDVXNg27MiAzYxYLocEoGTe2v9KwtbBiL47eUMQzhUDLXiTdDbxMcHeEwCanfXYkfXfuxXaneqPgwke",
  "key11": "23BLA9VyrQBd14XJ5vJEfvJaWGrF8mBKoCkGnxVNVjFspGqvXfRh5A9rtXMhztFG4b8bL53ve2CU5Qanu2z6zBft",
  "key12": "4rW2kkryK5YyBwRB2t1oDqkMSzDsVvAxRjcYLS8JMzC1zJmaKKEwwuMjASi9kUWc6zPhziVDSsrFsJ7Diz5BLbom",
  "key13": "5mdGKdFat2zjKACyd6SmxQE8LwcjuJQJgjDm8Ubz2aJHgEkZsLpv4jQCk3QMf4EpACvjJfn1PrsBLMGr9Gw1nKzj",
  "key14": "3QWd7snv6xh7xsmvpJJ2yaW2VEGfvunApA87QNbKyf2RCUdU3tHbcMk8xVHJm9YoBsJcn2W6Sdzy9B3xSfRyC2qV",
  "key15": "2MeGbfme8AGsShygaj6tDTUQEfGUCNMHbE6sRdCpC6AE7heYT3VpPqscafptvwyFR9ygQFEUxSRA8iSSvkPxETfq",
  "key16": "43tk8qdT9ZbvKQW8JbqUox1NA9ZKxkaD2g1FvLMFm4fgbCr27vPjNpnD42ygxHXHdRdYm1wVchNxZLo5t38YmYUo",
  "key17": "2QpVFK5Ysbmjn7sdoiZqzsgAe9YF5iQjmTSR63c1dP7my1EjQTo77PTxnyf91d6txFahdQTw2eUMhsEK3V6E8xE",
  "key18": "4X9mXCMkn5RKZG87vYVvHAu2LhSHqE682Ka6FVTHxqSTDFLjxTiwYdmRyami84QXsPPbEtR9W2ewvZ4GFUH8bM8C",
  "key19": "59L8t7HURNusYpkc12SqGHQKHjXyeezDkRLbCP3Gt6UbmSmaTiLPNFG8oaGzfhdJ7GxuFNJLV1tWKNnfMS93jS8U",
  "key20": "5JQFt5VryQym79Q25Za2dYPvbFxqFZ49UcW8XTAdU85Ube74Y5zGAhwWuEGfQrqxvvW9Qr3Lk3zDtYQHRTuWihZF",
  "key21": "56iWAqjj4ma1TFrZBBvDdBzoSrdarGbK2kDLXaRAunXFEW1Zj8mTB9KNu4p3xZ9rDTYdPnfqw713obaQcn2n6Mn",
  "key22": "26UNPj2bPuu3qJbNQ9GXboLPcw2Dk1fXk12fDSi1Z8qpb7DiKsLEmajtX2uwMfKPjJEVSAYHfZNQ6VFGdv9oSfFW",
  "key23": "2i46eRQrW7jPiPhzRuNzG7xNmEzn9Qc8R6R7uYAdBYGvJ1V6KTki2WR9uEKnCJP9mmQaD36M4f7z1avn6JkhgMX7",
  "key24": "2ejDzZiZ9wa65CNcwTsnNVsNkeFrceoCfJp4eJHnr1gGYN9PsRzyttoMQkhsvujf3G1xhieLrATf5vtE21CCqDc8",
  "key25": "356eZ7UksDFQxScjnTrHVB91oYxRmfUyQ2RZM3sLmFeUf8ZNWkXExmeuLPraEfXW8C5neMzzQnphCfA4T34ySvFi",
  "key26": "2DqdfNpirGSfdaKWaWkjww3fxsiBF6FL7YkAhLEgSRKUXQgJKULseLCBjNFybwZt8WnDyQzYQpEtavcS9MTxW37D",
  "key27": "3NmrUxBkQkW7rRJQNFhhHxhz9TH8Y7QDmpoW7gF7Y1VCrqzbuxtsuf6pkpn5jJjcFG39QW5W7cER1i2EGzsvweY3",
  "key28": "5uwRrcfoeFrm4h9dhA3KnUXTYcE8ZpEzBVodWYVSxENuAbaQdUiucF6kvLWPuBzwqb7CzzGBmzLPausYc4N9Fot1",
  "key29": "2Wy1SzxM8uSP9AyCPSTnrYvsH2QhdJ3Cw3anVZk1c6D3HgL8ay6HvuyvQsMBLmquCafmYPi87Tbi6JNEeUea7Mew",
  "key30": "4WA7z1kbEMc9j2gVPHH6SeMSQkQdXcVaAWBAtJUY2PBDfxaZFmyGFMHmYyoqXdtLsHKQ5Xb9WrGTCqa4B8UAgWBJ",
  "key31": "T1gRdZQQdBKctHpyM54mULNTEJzDka8E2nnf6Vq1LSrZUqwiSuYJ4iRFV28PMScjatm88mhhMhU9JqHQwnSFSiA",
  "key32": "Eb3mgeL5EPBJm2DigDwQY5tAxZZ8BGBPQZZkkcmepwPB13VPjQ7eFM9JTiSw6usPqDkuHoJcoyK4rQzGr5xfFxX",
  "key33": "57pu6cf2U4P3awi41LotrF3xquG8sxVJQWffxVkv9JGkPCiYirkZq8YBpmyG6BiS6rdKkk5VfnY6e3C7prccFRsf",
  "key34": "3YSdZ6NqHjZrjWK6CupyeMvDgtPatpSKobWrBVfVvBPd9x4ZNJQRY7Nkcw9F6Rv1L9HqbGnbZSmQ7NFue4aB9jo4",
  "key35": "GteYsmvmeUmHHjoiFzNJWQQN4E4eTBbRJq37DuwXct6ihMDxfvmG3P39GYFiBsWd7DiRAuXQxwGP2v3cfJRh8h3",
  "key36": "noMFgf83RqTyg1M6kUU3Y3pGHMQeMYtqmsMm4DCYYaVUC37zocjyDg1Jp5jCH2XhAjmAL4u64MmfGuAmcojGg1g",
  "key37": "66DAdUWD2K7KGYggBL4wJsMzDA77mbxFkCHAzHHH1QCyzzznRVkvtYDo4YmvC1r3wRn5WFuXJjBhZ4eGe99SJqaV"
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
