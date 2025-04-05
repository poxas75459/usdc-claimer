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
    "5hn5SHK8RLwsCZjj43EC99qTupDPoEyfmnorYeDqNPHi8yExAnyKB8coW9oiLZQP6nwM8a3XEwK8K5fpUvBSWkVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zF6P7ec2YGrArwVAxUw4YCuDbRsvLKHV5sNTt2KUzeuUQGap4BibQFuv7thhromeTwGqGUS1vQRtD9GuVHvvJU",
  "key1": "4gvEn7y6X8VLzjeB5eL3GukBGNpjZg6Mx9QihfypZ7XDiKC69SzGaQEzhfEFwHa2Z81MDgoSyoe9aZ6xpTD1jH3U",
  "key2": "2sgPYdM1wqhzCy7pQLCBfbPbjRVsAP6BV6orns5jajPzLqvSWAJYj96Kx8QMGq5y3HjosacN1YoHfmupGkse37DP",
  "key3": "3BvCvvQRAmV9tDGYmniwLnax8FJNvcbUJHhr5MniVWPaWREBeH7uBDH4hEYwdkM2EL2Ec622ks6xUu1Ri5mUHQuv",
  "key4": "37L6CStR51iDhwTaFFNX9Wc88TS4Bc42t6CF2vAcwttRMEA5oDHJXCWZ5qFKGMhDPYhYDpaH9xf5rA25iKadn3YW",
  "key5": "5dJnkU2MwdPFy4kFbJsh8nepzp2FHpowAsuMDg2X8iKzr6DgM6iQKin7Cj1QbjKAb9sKYPhWzyjjLa3tnx4Jn9LE",
  "key6": "pTRKncSvJxY6QTNtaoipqaZR7uUQZK74HGUs56HQQ66hvHBH997DoF1Arno1Fen7xrhW2bFMx5en2R9VVnqVTCe",
  "key7": "N8Z6rxEG4ggtFQ2z1NrcEpmeizko7NRUqk2LJwfZCEYgKMEUqDzsvyiSxWXs7khHskGvmr87Z2tsDcwFLPyqcwA",
  "key8": "2kqciuWGTftHXs8rktxSbi4P3dYzmT74FzQ53wTpGLxxKEBceZf1pxANHQJFV71ZbAsMMgMEfu8XNuqQ2XRvXno7",
  "key9": "5Vmc2LzcfvbetFXCRiRFvgX872Auac3m3Q6fZVJFgpiHxgpiKDz1nQqDHSWM3m9iQUYYB3fG7x4VUQnao7KUJNtj",
  "key10": "4AHZwwDgaYwZrQBGDf5wVsAFBkngspj1nU5kPtTu87rzmFVt9vjmWavRK9ZbTMAG1ypRGx4tvt9SRgwhumy3gRx2",
  "key11": "eseKCkNAckPAEaMRjiF3okpGX7hmsuMk73D5F5BG1hctzpc2XbbnVeh6UsSJK9DWTcpRkfvsoNeU5MFkcewNSar",
  "key12": "5QFF8HBFpJESNS3cegSEArEPi4d5h5MkP1sxDvKNduQpdYnBU5394Qcdd8s3rmFbiJ9rmWHdZVKpnYZ33uHtwZDD",
  "key13": "btoxifJaLWxABYvq14UQzNoWharSzymGQMxnDDJ94HviNRzYzegpKTPsk9EhX7HnTv8G9aMWxhGi8VdH3ZwPkD6",
  "key14": "bUzHdteFAvaGWsiC2J6nVFLvrWb9Y1zyFF7nT1kVLYCzdDH7NoytppEDz8qvA9JxSzGntrTe9kF2qwCtYPjMUVm",
  "key15": "5BDSZKNsK5nnQWZ5QZ9c8vmQXA85wbKdG2YvraXaWSQZyajqJohMAsPUtduDSCRoCWws5c7b7j3pufe6pJ6i2HWq",
  "key16": "5pLNrdDXGo2yYi5W6Y9TcnoGdJmG6Um3QevaKy6GR5h3QzXh2h5czcM2uWWP18ZrtSLvakbLcopZnFx4xipwYDT5",
  "key17": "2GoCromH7PAZxG8156ZPUbFym1HLFoevRpkzdjgco6dR1VXrzAGMP2darfC35sjxGghHhCdgE5gRM5SxMLSteHSC",
  "key18": "5yrTB3AiH5T5kwvMuNnPywVyfC9jGLpAenGEH9RMoHVeKbM81kH87VshM83hsCQTNCydASyUVfRMcPaLJAxQxDPR",
  "key19": "4uqAqTTSib8LqXidH5EB5cdRCFdseVwcQJShbJkdCJLuUgMgCZDEnKYHip5iWX79gyAwau2TERrujJqzxkVDoyUT",
  "key20": "Emeyg1sq29RRbXvwjW14juwhkoqwy1zZKVMknErNcJ84a9SCMUB2uSMdDU3J8PQyJdZSqBUh52PomXNU7toZGZt",
  "key21": "VuKqXjtj3am8u3YcUorU916eeTdDxzW3YjT5rEpRaV2ThUawUkGckTkuVtyRhZbiMWBZ4kazQwveVL9R9JGawyf",
  "key22": "2xTxBdu6D7JVQbA49QSRcb6DsJ9gkp51UF2tNrpJ8PFh9mptwgQp96HHn4RbNHE34vxE3yJmH3N9P2Z7hjaLGNfy",
  "key23": "4RqQJiMJHi82jpSNF2fiR7VdvbWnHatbsHYjRsHhAzwMEQmisVKvjh7N8AkjQmguvk3nywgWDQ7CUAGS95HLKSwP",
  "key24": "56GrfTeW3j9QhDnm6HjXs85MgsFXfn2cyocsSnPseatar4wBuN2JY5en9rnunPvUUYsvtTPM15R53GwxQdXiMC4A",
  "key25": "36FbH1ougsPmXbSzGciyt6is494LR14mrW1EGdyXziri4MiaHefeGkAYrM6GoPiFdFm4LeXLwSRKiF1xE6pHPFpg",
  "key26": "aqzJQoHtXs6CpGi4TVyn7Jw38QRuES3rY3GDv1VTrHvcTBTqHJLr4QDkfFtK31SwYuD5y8MurHpRQeF4258dhor",
  "key27": "33u6sNs5qsNfQ7UmL1iuDFMrqfQ28fBn5PapUZn4PGdnmgzE1pvw8Z2GT89EL75znCCfoYjPcymJX9JJ1xeF2DEy",
  "key28": "5MhLoCpPAxRMT879t8QD9f7QAEzveG3wni9MwqZKqKVxHfoopJBimMY5sYboERUWSWCNG3U5SAKuRQ5B5jPuQktd",
  "key29": "jnVh2MnR8FVxDCcyXovfnD8aWhVdysoSpRYSRASxYDzZ9xJvv7ZCwPKEKUxXMxc1TT9d4L2d8GF48475RAHApiv"
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
