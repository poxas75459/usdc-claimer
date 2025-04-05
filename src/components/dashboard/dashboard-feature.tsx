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
    "5Ate7hmcHXKHMW3eK2pps6DrAxgfqb7mPPBkmc6ACuVyK1UjZYyHdp7Tw71NPUHVuX2GAJQSb6EnmErz8JLC2N63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PNBqiD8kh31tKnuim7YrgtEmBwiFmFUcyxRx6bT5ozFt6eT3V5A5vL39QY4wrtLFStd7rWtZ8StEVuSdqGjSzZ4",
  "key1": "5iTg6v8BoEru61gxXq8VL3Qn9iph1ohy3zcou3N6srWMu3czqKKYYEFD66JJmkPVxB7euSamamPt3skiAvGUUFnU",
  "key2": "3wCqbfSo3fVckPFPtTHXfhjrhR27n3QLidfFZUjpQxLvX1TAjHeHyAR6T4GB3bcfcC8SwEj3kuUqveiVUeUyiEpd",
  "key3": "2y4zhsVtTCURTyhrjtrZw6D7Rt2YvJEQnAuj4Pjc3NajVtcqUSA7SA3DDck4aRS1wDqw7UUbpn8k6LsDFUPxVgYx",
  "key4": "2kYXUHNnws57kiSgPhCcNK1VjQ5usdCVeFMHbGYqvy1UYt5LwvNGKH19B27DR2CLS6Nmkm2Cy6snS4MbgiMQ8FSG",
  "key5": "EQFdz7ZiAsgNAVhLyaVFxCczPvKirZAgMQDiqgCgpYD4Dr3pYG1zJm1aDKbrDCKKcaigt4YCWH5ThidmfndbszR",
  "key6": "4EdoFgwmaZJpSbvrB7jJyTW5craQ2XXLMcsci3rLWGHbh46o9ruaboM1qKgu2EVnLho5Cn2BaebUC9V2N9P61yH2",
  "key7": "5sqx37iem4DkveJdberssyrAmrQjVJmZGnzuh2Z5RDiPLYvfsf8K3u9BsQjmXHN1oq7XLs6SaJGsPVgc26nofPZ8",
  "key8": "38Vg5NYUFmQNqxnBVtecnCsuG189LqRuAAUkCCwEL9AQouVgF5wpBc6uwBxNbDNsCt3LUoxf2pGGdEum1JQZ8di9",
  "key9": "ycwvA8ddsPmNFXiiQttGNWL1Y36x8BUYJPsbkCJ9AAobzKeAC19oSgUr9mBanwon5s6ATVProNAHHiZnottz319",
  "key10": "27neW3fj9eW1AGEiiqzw3Qs4RqfTqQQthifSk3iCEbseEGbeVnxYmUCNSmACgYoJLDjxR5rViTd9dGzwpENW5kz3",
  "key11": "3Fcc5VK6gxr27iGN4a1vtZR1TnCBVWSnN3chf4BVv5kGH8TSTb22SYp4xSmsmoXso3wXE5LesVGUpnzYvruUiubi",
  "key12": "ccgkRaAQ56cqToyq5Y3axGmoC8vFqniLp7As5VYUesmkvqwWcNVX4AEU5tMMDEeDKL3LRYP39mLCootAX5JJmC2",
  "key13": "2dUsc6x36Xpqj3hB9Ndd2e8t8s32NiDVPngrBbdm5vuyMW7VYH8ywATdWJ5EtByWrEdHnzwtrq8PSRDdBL6nK9Ai",
  "key14": "FxSJ5xKkQoZhYSTwHs4k8jTyJJgsTQjW2K7ivBMEdN4drHVL9DbP5Qv6v84NtLbxLSegTipNvaUTXAhzj7Qzwfn",
  "key15": "2qw8VR3RUfEYaXe4TuQdbqx5SRgARmtGmgTo4Wd2Gc3RoeMCrzqTwWH5Kp1BMbpLvr7h4H97TGV5dU17fAPNYWj",
  "key16": "uiJmgnbfKjpPfK4XMd3RU3bC2cZ6RU3FDZceUpqQCBC3CV6SVcTttGnWeMauPTTExSAVQeYpv7E1e8naj6hCCCf",
  "key17": "2eFvTP6LgiqxcUXo7m6vfWyxi6KR4mRf1aDuXip4nPFJssb1Qt922VMpEi6FMgX4LvkqmfFRwL45BJefamHvDLKL",
  "key18": "5sMzPpPUenuU5F1zUkHtKdxZjkKqhN2VUjFT8C7dWCNZgzvicd57msAYkBwUuN6JhQGv3atx5T44ynqgMZxe5nFM",
  "key19": "4JbH2j6SeE5sHCbWTSmEV9Yzg4wA36BPp9h7LoXzC6LUqLXX6ZWXb4XFJB3y8gt55BCoZeKJHBqJEAk1WqKNKL5s",
  "key20": "4MBagNivDTJq84Xx9jE2BUHgFfbLznx7MRbFkRb68nETK6V7QuzeQTjoa2ytA941QkPQaMUV7mGPT2HvfzA4HDqL",
  "key21": "FGRcMPr9pSJYZcb6HNWijzDGy8Q4Rje1E8hW467HTtAiejmY7Y6cxEo2PGK5xKi2zhBWTsDtkVs1WcxFRHmVLt7",
  "key22": "4YEZqhXB6F7WqCigtCKuye3zxY3zdQLfk1EWuhTXdUQ4Ju9hrGkDdNsNES936GuKpGjsN7nX2WUSkk1DTXGqnhGn",
  "key23": "2Yy7cPgEjqkXPFbhNRZ7u1ZzCkRKFhZvckGgsbtit7x6ay9HCKpvEcj8SJkG4iMpYH2cVZKwijFgPuK5XowWPBrQ",
  "key24": "2DjwVJD1cznNDKpsPPK5yeK8dUPyZvEUbRJTEhoGyrtdsxWmKd99FFSC3pJvqf1ncwrnxcmwWaXm63eU5kMGqTJ",
  "key25": "pPcUpnXyXhSutXLruVxwTJbvv2vkiRCHt8tCsMdRPQo756PWo57NQqYkseUDULsZiwY3mHiVp2aV4Snp66tYvzt",
  "key26": "2AmX5GLdm1wsg3hVg7uHbE5iXcmYedrCJp7kq6Gwuza6rdkWGmsBpnMghTuuC84PQBvjjGRwPAs9vNfYJGxrKCaw",
  "key27": "5bGkHABeD3ygJjcAWY9YThPKUnF7HWfzej83KXtYnVq3EaueAgQtbMKras7KFcrhJ781kzJEC6V6BTB7faqJ2Lb9",
  "key28": "2Xq9MSPJyczk7m6YQDfEaE3LWavB9bNBXN34mwGDWZpQik9LAX18vfao5PJXMAFPwz5vZdaPQfKdXoTVWprxS6j5",
  "key29": "4gqixawAkxJWXijzmePLnYPysAJMzXN9miLfvrFW7HKddgbUhczK4VQPqnw9UpojuNHeq3PXvkA4ygLubGvaGBvQ",
  "key30": "3d6SZKG9QikQ78giVkmrGQd5eGVNarguyiPK8j2PBcH2SwB2jTKt9dgUuArGauQKESKbR4NJeQyNsGGYAL8MYw6N",
  "key31": "DKnWffAREk8bLijgAJrgZWwBkLe76rgbA4XxypmFK8kohwKJzJkvmAzEkvg8zrQi1kv3rDhttac5ZULjTwRg1gn",
  "key32": "5A9Rs8qCCZwpxD9eBVanJtoiNTVjK4bm2RMJdPc5zf4fnVe83Viq8ZCPMuYSKC1DUoubmDbMU3T6uNYfnB5vCWgY",
  "key33": "5nsVQZBkZzSQbcCWD8MmK6HPN4XR9sdQTKs3RFMNrVpFqmzPktWtAR7HsC1GpdruPTBeMewS6mgSGRXRvgCut3Eq",
  "key34": "3qxGBmdYqu2rRwKDfXGKg58QmcTHFSPJ5eiu5ke3vpeD1R7F62Fj2ybCVoTyBAVwsZfQPRQ571RG1SWnbr9SkCb",
  "key35": "46b5HFFRsYQdGQaaepLMctQvp9dxsgpnSHfbki93irkGfm5tNMLj34C9HLzcJBPQJx1AuzJoM2o7uy3A2jaxxcAi",
  "key36": "625g1KpJkSU6jtvj5b8fpVUHHww6Z8bcLbdHyDrewj3p3CzgC5bqCZvCytdDcnqrhPauDyay6ycpk1bHvsdbdh5q",
  "key37": "49KAmZijKaZgJ2EPCbDuB21H9MYjGcbZKHN6ktykJvsY4KrCNhowJd7WsDKKGuiACvrohFsaGFfnfhGgcZFPe84p",
  "key38": "4CmYmBAepninrhMsNjwKGyr1uNysM1UkN9eexLD8P8o6n2YQC9NGoQ8WY1Y1w6PTK4twrZEEv3KrkHt9j49V4N6j",
  "key39": "3MFan8EinibvnJiMvtuoDieLeKFZusazKE35ifRhiDiaYwJf2iGFYk5i2c45JF2Gj2qBxHUNKywcAonqYkiQQFnA",
  "key40": "5fXZPZVPQkpfstuhycCyfjVS9cMqGf2BdFx4k4b8JxZhKuXxoyx1MtG1KPUDv5Xvv4DVpwZskp6Tnbr6VbkFPVYy",
  "key41": "2DSD6sU2v7B6FESqUy8yaYUn11ai788j7bg1u7gaNKA4QypS1H5pSV8te5392366xCpSFx6A9ajLf3cCKZUk3p6y",
  "key42": "3AVjJtjjdBYP3kZomcMrxdAPm3D6KNp39zt57cxZDQYiG7M29VugmcEkPMiUKatoZrdySoz6sHFXuMbingeWK6fM"
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
