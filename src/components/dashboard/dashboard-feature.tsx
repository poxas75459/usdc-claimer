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
    "63qPiAbwiHFTbLNwRSNdHk5BEtCsMEWpPN87azQPdpqfW1yEhc6L2LRYPZKGmD2xjYQBhvop98aBSyAdFxASfRzD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PCV6Lz8RdHAsRemz6GdhghTJbqzPvhX8kw3jr7kRs2DhwsoKsVRPiYHYeUeSJ4vnPJZ52RtyyLfNYWSXMVRjGzH",
  "key1": "5DXPaBbshetkgd7CdmLjBbJ3FnDPEo3qpwEhaGVT7Z61EbN7zy4GsnCMJzisRDYxRBNqdo2mSxqhbpscGoQtgqXJ",
  "key2": "1k1WEPNx8WtnGqn62YPG9PbjbKccSJxTN6MsdzBeDP2AqVkwwuBqS13k1uqKTx2ofHequsBgNPgiwTxT55vqP16",
  "key3": "4rBw93ZJNrqWZpGSqT2nDMWf598XNtCjoHUq9EAkd577Dq1w59KJSsxoeJffsprAQ59g6ejj4ANct1e96n8c7233",
  "key4": "4duitrieTeRPv1mMRdb2CWCcuPLT3nKfLxYjtZLx3828xMm3TFif79pE6JK51U28RmH3oht66qHethYNJZ2gN9ih",
  "key5": "KvXozJCA7wcqamXkordgR2tg7H56JodP8aiW4N2ZEXzi7PyM2r6Cb33nnFrcpcee4ZV5q6xZrhTfHejVcrkVyK6",
  "key6": "44biyCaagpChJfh9FRMJmMpiQze5uzWV2FpwWHi8thoN1nbhRyBdnJWEbqUvLLsZt7G7b6BLVu3x4PoAhq2ZmKRb",
  "key7": "41j9VNvt7Qbzmt8qrECGNLcRGaaHQfn2Xrf6PiAwJHEqEpDu7wZNZGBsCcfD51SiMr6WCd5RJpXPkTQTd9xBaYh4",
  "key8": "4XKSuiYC6odaWPKnJN35dZy8ka6S4HmGK6vYiE2G1qZjsMmrqsuFFp6wo6BHH4eyYA8Mcf7TkLN5H2wDFHy6TMGK",
  "key9": "W4vcQK3oC1VqroXLCkTNeBkpfKJEmt2ouogzWXbWA5q7ZLdxHS3WB5qTLcfWZAY69kJVsgCBkyixiq4doGjKUJG",
  "key10": "hAqF86fGVEEt8GAPvUzomMQfseYFH5uyno9LWNSqqPC5jX9hxWNKgqFCcoNFZvKp4kjEwYpDHcGz67yzxJGWMSo",
  "key11": "41vns1aNS7TzvJUv9oAc7og3tWs58hPd8fTfsHDYXEaphV85af4GcSvZWbPnzW9jffYDTSpsf5t4PEEYRMED3z2z",
  "key12": "3bab13FUDucU92NnP9Uuka6vXG7mDNAmCqyxC4uy5SZPnP8X2SvyoVHxhQD71VCGsFDHRny3aHekpT4vrdNGv54U",
  "key13": "3hJrb2nAdUSh3VuQt2DGaWoMhQ7Apb15aKxHoCU3TgL2Cd2ccEgjMPfAdS4cuhJgb4toLUHX59ugPSq1TsRx46sJ",
  "key14": "4yoB96NdtzzkbdyfozH3QMSd5wMmzTa54ebbqH1HWS9ELT4DpoUGJabcPSTEaAtMz9AxvR6z2dN8gn5zNaqouxtb",
  "key15": "xFKTBEPDeGomjSAT5J4mvQbTY4SXMrx1BDt5AuD9CMk3DwMQja18QmXnmJjar1wMZQQpuK6zPXm19WkriujbSyF",
  "key16": "3sn7mGzFFAwAFvfWxpSNp1WHVz4uQDooFwnFad1932UFQDDdGuasypJPvcbQzarEZmTcgeaHtVt5DrzYxo1iQEkS",
  "key17": "gz4C3T1P4FoZF9vKCqJgG4ku7YxNEzn5qEA35GwWUsE4GyG5SFKvfHWoWUBrysxUvGTDcfBpjHCbYnfvKmjHqLY",
  "key18": "638UemWhDyBNBh3aPY8Riv6wVV88JBFcSWKFAomGRiK9eq6VVDnouMVfsJisg5XcDaWNZGgdqaQiDSXTtxiiCTjD",
  "key19": "E8zmTF35aCMh3U69cS5LBMnyro8bcGqvPB7RkT2iN7byNWYLAbZhcdnMLoX5aaBGrSEHEQDhkYZGyKhZFCnzFPD",
  "key20": "5HRzAZA2R8bd3T6LvX69sH5di8wQMT53TUi3SnGLvkjcB8bF9fV8hNQT7KrLivu3rmhu8nWLRP6mubQySbDT4Y2C",
  "key21": "3bWjc9TX7pgHthehVSoS2JZwSe9wbGMo7a6GZJjoCjnVJJkUCjnAbbmzVhq9moes2QCbRi9yEfH9MmNdgmZH3fXB",
  "key22": "2XxE7f4NrmAXvPgRh1WT67mRmaBZqfYR84SCtrE2t8qj9dVxVAVybLBY7LpkpxHCUEgZ8SLPnYpoC89SV8VXHUgs",
  "key23": "5eu86BCYkSzun8f6zyUXFtCCZuzZ871pgmbVvACvJaPTxivsoWA8gD2RqzuJ6hhGTim5tdpRC28kfK3i3LSY6fKK",
  "key24": "48h8z6dcqSERFuWYTUtCwdCPrVDZDBrb5JrjpXXRRKYe7ttZiBEdipibXPcUiMws9z2LhQArvhyzLiousRv2cPUD",
  "key25": "5L1qUXRBPexeQAzwVMbyBWaprtsaQK28CES3W3W6yfGEDALDVct6NGEHKg3H6Z8U31CdP6jCJyJ5JxLQ1fRzf1tY",
  "key26": "emBwMF224hN8SUYzuu8dRsmmiF1pkpaMGNdhjTqtNbAbNbRf2V4nVQ3KiDG47eM11iJ7vAPQqxEt57P3QU4py61",
  "key27": "2iGMvg9UzCshHg8osj3qwrVAcRreEQZPiG9HndkbQUKo41uYniBieN2J6CKARA9ebZQijYtcAziq4oEEnfXc1V8q",
  "key28": "ZQ8wzyfnTtQCh3v8au4HBXvjdXqQgf15YAPbxeQNM8PymHFveZmeictYBA4P9S2oPNFS4EEGSinHQsCgZNrWD7W",
  "key29": "2wJpqs9upKFbnixr7B6zgUCC8UnUMuYu1rUqaAiA3xYcS2WcP3qQXNDGvt8XZqSUirfWhizp49WHtm4TSSCQ5mYQ",
  "key30": "3o3VrL4vEoqojtibqxHf78aJe64yTJr29PRF6yxCzd9AkeYmkeMQmUU1r5MfL4CVpyTTtTnHGkzgZjyAe87u192s",
  "key31": "4bq2s2tCeAGVXZiMcPdFNkosHp6CvR4XE787So5ExbvmP5EVBwtuyMpx8XykK1spdWWrbfnWes79BPijwZS16GgM",
  "key32": "4wsuo9m3Zo65X42knPxjs6DfZSQixuaM3b9Lfc1yge73ejrqSePk1HBBNhWZXQW3YsApoNboiq94V1MMvyA4q1ZJ"
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
