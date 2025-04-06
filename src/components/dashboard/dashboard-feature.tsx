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
    "2aXu3eMBWgyJENmSTyngtvEw8MErQaWM5KrrceJv7gWoozATkhL8ae8iwP3LWBMsBWxS9vCM6JnHQdf41J7WuRE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JrtmzxEfsnjKMWsUnygaukmBBvdaGCg8Pgs6E3YfVtkReEnRZLuNA3twNXxsRR9YYqwHdvsLLMzCZqQRhmkMTj7",
  "key1": "5bYep5Lz48poGqhZVSbe2EQkcnfA8o7HWSC2WmU83YLR6w6zZpTtrTz6qLnxPjwSm9ZfFsdkxnW2kk9TErDLS9RZ",
  "key2": "4TM3dAU8hjmZ3UgMqQeeuALsZYLb1cNLNZ62R17dX9VQPF5gjw6KabsHUmkUjr4mFSCcbu34Qi6TKDdP2yGfMa7W",
  "key3": "DN51G5ihoYPb48MWKeYwak3aYdKNWLpCkfrEQbvveEqTQcMZtKEG1WZ86mcszFxG7yV4KqzWDypRhtUPKqX29pM",
  "key4": "3UnYKKiQoQADqeVa9x1CrH5nUe4oqihACQVo65WeRtYaQcZEEctSMdwSqSCQAHYseRqanWJjebKXJWu6uDrpcqc6",
  "key5": "63fTnrWFX5RcSJ2KAgxvvsf58LJdPCAFbqCNRf7LkPYi3FDfaedHZAwvhGVh1oDqWop4Gb5xtfFz3ayegBL6ZbrY",
  "key6": "2J8PEvucgHtMvJ7SEKd4CyQ3g577VS2NbQoa9dPAi87vAZjNFujrfu8pSZtytLbUWLsJNTpzEhG6JWLHjf89A4EC",
  "key7": "2r5f2zBroHDtnxJf2p9JpnDP82Zh5w6tfTSp4rpP59ktHkFiWhdtvvxjMFKzQj9VG5SiG8vRu9JdDr5aWKEGcJFS",
  "key8": "2hD4EjD7GQFatjbhgj4PnkewotGpA8JxjvvDtRduWg2HN6958qETEVQEK8moJQHuYhp3Ygaw13oix3fe2bKfbvXU",
  "key9": "5x2WgSg36kodRLbRs9pFqvTEr5vSabqb2sULHAuyTuL7apSxJPK6Wa86NQRFfq2LE1n1WmASPDd5R2oTfcUwfECw",
  "key10": "4Sovs7zMjfc62EHCNPvdLMfRKiu7YM9uodqy2wUtjrwDuLhyQP8RuCpeyyt67Na3sDf9fQ141jXBhVEUktJ7x9qt",
  "key11": "3Cov5Uhwb1GR1htgnNBmBjZpipQdbPBgugZPsbVm8AeFLPPMX3X5Y9xepVjM8tBW46tyVMU8YTpKMV2y6TF6Cksc",
  "key12": "57cGLTou49PCRa7CH4DduPYGgs865PpcPeJep284yAEuW4DYFA2LHwGJY34UFidyHupbr8ew9Z1Wz7o2oeGFdgrk",
  "key13": "2mh22yDVLVFmVEk3uc5ZHTWgRx5acRxT8qeGGtWuyQEjdozsX4ZpibW67nXggjH6w7iZkfmvqLpNHVfAiRV2YLhz",
  "key14": "3npfRrR1SpvcBDQWbJJETUupeVvdw4ZDfR76qkgkpyGg1tspQMg9L5iFt6eB4jQCCQ57b4pEnzDWDFcdiU7KmEsr",
  "key15": "5qmZrYv8LGq98R7wcyKxfZR2DCjY7vHJNfnnHx6mD7FU7oGW7uvFWBwyE6HDUYrupTnJ1BFsYRQQ83S83qVnFJd6",
  "key16": "PamrE2Hugu2aXaWU9vmHuCvDnmmW9PGHZBBxeVe1G3YFTNVkJSpzbvrg7kas39pq73aDGXT4AMB2hd5HLiS6uWx",
  "key17": "4DPqWMXnZot88S3MqmsZjiJxFqJgVHBE43KRmSzpwyDJS8eAtxrM2vrQLMNY213AZhBdV3i2Z1swjVNuxYEiV6ps",
  "key18": "4ajTC45s7D4BvZ94ShLP6wRpk6ZuRYknpMbUmJ3FxvB59Rs3tANhDtn7pt2pFzu4nBhyxaDjfR4e8yjkjrPpdcCR",
  "key19": "4JELsjD69YKhCU6dnZpvjBh8MdTqcGmT4TE3C4xDa78mhT2XjHyZn4vXR9tEs5Hzv8NrAgS3za6FaoBCwjKESWrs",
  "key20": "zaHEBJVvtwF2vT87vvxeP4zSjKEYduiY1RDL4uSwftzi16fRjkiQhUkimfLESS8QBJwcT1TeqhmgL9wkUxBZg6Q",
  "key21": "WFRU2KjJ9zEGRvFtGMcBJWRwNb7rTYg6TeoNmGdznCpUwYrw388RnQ5mK2tbkdfJ3imUFNfk41VCJhF3hMd3AAV",
  "key22": "2QpfmPUBzYQC5YUkk3vaRQxUAfVpjjyraBCVRq2BCsRM1EwPwMzy59oesQNpuDNpN87zxjMZvga2jpbKW5tdUZs1",
  "key23": "4d19bVwDsRkBa6V5n8kwQbC2D5GZzsaaiA5T5K9W55JEuQTHkLK4eGFnbDT65h9fepCzxL9xtdruqn5gkByMXUQW",
  "key24": "5d85T2BGh6pvrjsDNbGXjUjgFpoBiQMp8MStMoxCXiod4ECnSEeohz9oSyCX2YfbYUWsyxDfoH439xc65KLTZLbH",
  "key25": "4bxjvsq83jGpMehXE16xDhyAU249rDh2RH2PEs7wKZJCpZMKcc5FGcbhSmKLEPzkyA9ydq6QUoSoeveVj98eWv9d",
  "key26": "4x46syM9oyByfmYgKT8SQnJdjSSngqafr5ALDjXkitZw3pC4TqzgY7Mqor7ky7xKmRmMFvuJ3vuU8X99nwogNWKt",
  "key27": "45FfeVpDgfTbm8cWS4cj45BqQayuLTxtgwXKPxAGUuaUaV5rtp3pFyH5zgSVu2URiKiU44MZTRSpiRLKdtf88Vz6",
  "key28": "5CxfnKsZYMFKreB2eRwtVV6tY6Yanq6bkdHTAvFpXucBMPjTMhquijHFyNa2qQZu6qS4mgmFaSC7GVmtSSaZaBaA",
  "key29": "cW2bXL6tVRXE8GXRP9VS4pQT12j7qAP4i4Rafn1jMdjSSA2LJgvZDaii2fgvL2rEcToKXkxtcv7utTqZRhYyHAv",
  "key30": "4nT9iFRQe1PtzaM5mrYwe4W3Dz4f9tTjhFLGjBYJdDdWyJVsyDRNgCJ9jrWF9zykuEqBdN2FCA5WpRV9YExaAGk9",
  "key31": "hHrrA9FpLyjW27AmwJjxk6qyhTzv789X8SrPkMNtdPC97KsrzoeL7wyDC7LmNYC5TY14yTRiiv4Pqgzvn3VCfvG",
  "key32": "37R4JcSj1K63StufyzMBK84mZqmVbsEj6Mg4J3hNzuiDxyZCYYH9ESxfqtE7vdAqjovcvDnra1GYXbR7Yrp5fkMN"
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
