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
    "3CjGs87iLyfLY1fnLvDTZ7pRY7J4yL1gAz1yYhnEH3sbkHXtMviEzRyxbGxpQKt5zVWZ35TroBFzd37esYhdV1gN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P83Y87iuUdhpecSEyWmhXHR8hSM9d3E18d3YaNXEdAKLkwkTpNK3QvkUetuJn8p5Ugyx5wDMQN1qKqGKbbXLwJG",
  "key1": "4VpVg3xWPzABq28wRBrpVZMCBgBq1Kgu6GNmASDii7NjYSDL2GyFdpcDx7wTrA3H1QA53sTzhSLcgAtheCbF7wAp",
  "key2": "dTbxkN1QdqGBNMoScYaLgTzSMMo4UJF9m2bG4z9tyMXJpT9RSMoey6yaSxEi62ReX2CLGMS9bvVv3eMTzwEcMeP",
  "key3": "WeJaHwkpvGvJyqtP54DErgXxLoqDziFUUCdw6hmNknoajaiRjyuwx852EUpDS3T8k6sELN4Y1mgq6m4hw2E6oKk",
  "key4": "3iR9ddoPHSU3TXmUDkR52B8YoN4ANgMHUXnTDn7dQ6ZS2MF4q9g4zzcBA2QGHBeA36nkc7TkgKVDyRh5MjSGc2E9",
  "key5": "zgPnoomYCJsRdsNkEHA6ds45sdzhEabujPMbPWhcdCm3RRHyiCq2Ri2fbatB5daCsAWYetedNQrBsY7nZTDrmdg",
  "key6": "3icrc8fMvGFgiXWnjGbAXigpFhf7hghFX1pAaiqGrqoQsvuqpJjGxc8VP1uSw6MKFHoe5XPo3gu9qs4m2edQm5zU",
  "key7": "5VSnbttpXJjVEyJ6h2EFqN3zD3TpHoicQzKyh39koBoTjGVv7GNf3yum2QcvhBiyocqeJfyMxXHt5K9fc2f8Pg8E",
  "key8": "25qfBFrMpZjxvsqurQ1aYDRsXSJxqqaXsoyxB91Pvwg5UKYdE4V5cg5h7316NVzoeR9kpuy8FwQzEekzSwU2nB3U",
  "key9": "C1kD5kHTFoEuPCRQzpbvHcd4SutEhnDx2tcAtzeiZJu8dThTjZZ6gY7No9oQierq3xtA84xwKCciW3oHre4yVxB",
  "key10": "2Ee67XBrRhG3CmVUEurvmCcNKRchUoDiDCDPc2D4BQaYkJzRPUB7zU76aEpqcd1sxZh4pzbHTn1VzaEh2L4H6mPY",
  "key11": "2nLCVJeomKJJy8oDSMctUgDenER2a16CdRa8PTFnpzh2srdAHcXPKpcP5LhCakhY7M2MB7Nj5u4aMAq3nqtB5gvQ",
  "key12": "5t5JrfqpTdSY7aQWvW4KQAZeNPuEmVkk9KeS3ex1eGGyjKSoL5MYCNtRCsaBwNwC8qjYuNEre1DJeDfFJvxr4dST",
  "key13": "3PKVNAoVWsDQvjmnhFEiwa2ZvrMFFn7F6wQdt47gU3BweY46qWA83AGBttfN6CFUJvExRqbPwmNuX4KgGEWPFKfe",
  "key14": "4oZFwuRAiVMVwrDhNju8Xhb69BLu3Be2VinciVUeSCwYxnW3o7uE9VM3oVUoYdqGrjuCMWPKPepefgy99QjYFjde",
  "key15": "5MT29v14DtBwZstZtpKFeFTEQkzzdgKdEgygyDCBHnbNJ2QxmN6vwSHTNNoZaw8McZtZ3Uq35yK4KPcaXqQ36vdi",
  "key16": "2MQRs5tScCxBNT1VaRqmU1CpvGMRByaCMYQqLQkwuU4oSn7MGuVkC2bDUt8ku8VpG398BerFcKJnYsJ87xFnrTZV",
  "key17": "2wGbkwttVerL7moUqJGTf1UeAhV9xLh3XngA7W6mEZjP2x6WbhTDmiL8pfdnK4P1Gh2uRjU5zKUJhh1ZJCCEwQSV",
  "key18": "mZAqfcZ4qgDVaENeaL4YpLuHynRZPngFHVEefoeUo8P5BwCUdgaNHxC3w47gg9q3ufZoCZadjJ7DrpZqdzt6t6d",
  "key19": "4N2v8b88a2UDLYho37RYLD8mRavzGn6LHkoGrvkKucL5PRfnDpf6g4Y5WbnhV1EYx4LWqgJjwRtxxE1ZT7VR16kn",
  "key20": "3r7AqsVjBFNnHBNH2aFQnpHdcAG5sadPouqBuuZup7gxboyHZacyEDGRcWaK1G8UY7cv8d5JYQfFDEGTuEJdjK6L",
  "key21": "31y2KsMQxwbTshqWyQ97ALnSaYumcjAYmMDKjiKGCmB1AtQ71LWZvLweJ1TkEwc3vGJzUWQEhfw7zFwQkKrqxtbr",
  "key22": "2TwxNAYSkwoZovCKUvoXtEh5H6okAbYUquXHweFBmszvrww2zkvvmTSsp5K2jA7stxwHATfxqYV4nr5g585rfWwG",
  "key23": "2b8y9dxM3ZiuYZQhBsZcRkFWCeuw89isLiphSgEWt5HSRxM1pPjzbYguvogbER5bgUVFXAqHsV4Psbg6oQLizCJX",
  "key24": "2Zwudgkcp9FavMDLVxEN65ho6kRZ8y9dhz3zZxtsJoaLk3p2hZuX1Kd1dDDsWY2V38VFS5ZJ743DzixHDwNgYSt3",
  "key25": "3YWkutAeTYb2ojJZsfNiq3kms4ps3bgVYyAtaFB3CYjzBpngt4CKFCYKubpoKgfH8oVMkcMY75yh8qmHoxT2FiWu",
  "key26": "37hswurQqbyUB1h7nKiNqWJcj8ZbAFxkVg247vAak3qLwRrMYRDNKjKwHuJNPUTvei49EZDFXhPWaUSXn4QNkcjg",
  "key27": "4MuRsZ7BwDfHfkiHKgSfhFmRwu2CpgmJ11p8UZPfJxtzVdmta3Ex93E4GGvaiBBawcRhsYK64mgzXtYex5Uzb8KM",
  "key28": "2DdsefN1nDxp9LcZbewerZjzYPpRHecvcsXmeHf7SRoBd7pgTChPHnR2FTSbMRvTTkjTAQ2Bpics3tnowSzTcrVQ",
  "key29": "Z6zLg5CKDy69wWiBMbVPCAj2F3EyBmT1ZsWRkZtX54gbA8dYCQjSuwxgpBn2X5KSsHp9Vpq7bGRdXvUnYwAWHoz",
  "key30": "3yNS1YbGheRp5arFsdpzkcKKxoyfHFNrrN8kEoaTwJ2eQQ2k6kq83Xw1TWrnHhEmKRTB54xtGXp6j7JqeTWSdBMi",
  "key31": "4AH7Uc3HqnUKNmnsrJJG56SySKBztx4oexG2qQegkJfLCLMwSABrxntWcsNskAAkw6F3wVnLZCYL8tuyfxKhYYN4",
  "key32": "5GSrJdLpoFc3kKFbLsgdqLyckMVJwhqsWfeVmRFtQ4gG1GX2rp2ezuDNio9dbXnJzQP9rtu7TcQEGxb1ou1LDNDY",
  "key33": "bLK55U4GPyX2714iKdg49tiSSHRfgEKaoAScjhudDw5iwCV4munWp3mtngp8NHTDNruvadQZChes8Vjxhc6rvJR",
  "key34": "3nen8oiNviyZ7oQNWATci1kEjBB5zVwFALcrNLDSfS9i8yR8UUF5Nf2oPTHTs8mUtVAwd6gtHY65bku5M2dUU9kW",
  "key35": "2e8L8FqXXPk3oSWNYCGKLHJMqPXfWZpPe4nwZXL2h5gdoubkvtBVwh2jRTaTZfsfeSdeQHVhCFmp1JTZEPNuu7yB",
  "key36": "3YiSuXaQGtTqknF8DxH9g5Ryo4oNkyL5jV5zvHSnT7FGj3umeMsaKpUYpkqYQuQkLSkuyuuV9MgP9diyM5hVNprM",
  "key37": "5it82Pqp1sbhuvwjEi2Drp2yirvvKwHcnEKS9LdWroo2XUu1qR6dZuYL3TVAPG9tokvt7k6PwWjX6V7TH1kBo95t",
  "key38": "5mc1EtBMq1Ugh8qXqiQuSvuNLV78Xqa89cEauGS17ijdjv3hZFYHD6G3E6SPrzjYwjE4NuCsB74DwW27htD3rJ8q"
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
