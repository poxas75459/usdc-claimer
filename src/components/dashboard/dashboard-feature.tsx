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
    "3hRZkqfrSjUWdpgwkNQF73eGSwPyc8n6o8K2NvnL1V4EvxrWZR4qmhdK88vrigJb4oRMZ1ac8Hh7xRPz6xrL9H6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5APJLtc9UnuEW4FNga3AAAq34W6jTskz7vqQuzjkiXKPADk7Q17h9siMaUH38Xzkb63Dtpn2dbGgLA9zfS1TKMi8",
  "key1": "2EoF2obnmbn8apNCcZHCm1REpsX8Qx8gpWM4fBM5hQVDpDJDE7jA3nG6rf8xFS9eEhjnADTEko293RWRWnTtJVhw",
  "key2": "2BF4ccPR2wNBveNaypzq5K6unUT6UiVff7PfSXZw1pzBZ1voRHR4S3TQNrVAmbm1yPZN99ApR3DMj7AmbWZehdpG",
  "key3": "5nJsd2G7zWABYEWExEsyZfWtHv2QvU13Kqh9cUqnAdwTmfmCGXrvffRT5bzKKXRiWhotW28HMAZ3WTZEPCXYFbTX",
  "key4": "2wK5j6FGZCX3PvgfcjCX4qbPgT2HX8VxL2GFgwzMzvqh3cn7BtSKJhu9rt6EQFCvcpu9DCHcKP3jz82NcQEt8qge",
  "key5": "4P4bpfrWUMbSKM7b4JLCRKYNpzMjrmvGZtE2nKbnjaTRoFWAtJNKxDTD4aYbY6d322HwXCroGAu1qfmRSxRMaTKy",
  "key6": "2HeA1TJLkbvvKDN3T2kwLkh16pB6HqtfCsPdcCBzUmkTfWRaLMn1UYmqq5yQWhrCqZ2bncmnNK5GJqdFWqj8pxQX",
  "key7": "SssbeJkiYSBGDjChncPapQMA47BZhQctMtX7179u1NbHPDXy9VZLzjVxRXoKSVRQo5wKUnKWq3GHDU65YZ14zxT",
  "key8": "3qd3t9W4KB7N6gseFQS2ETubczWmLUWL1E5CUZpLCUnq7n86x34ViseCidq2UEwVpPuDAtr7a1ui31pNV24idLmn",
  "key9": "3AntkWF1UPwrY1gKLbK3j46gG6Wtjss1trgyRRxjWZ5xtAwa6S6Nz9M2So4uTBJVuCTSY8eEZ8D7hKKVkVQjnkwA",
  "key10": "3nUMxsEQyex1AVfmJz7ZksWXSth8GESt7KG9NG49n3QAgLrYTA8EcYpg4DwTNY1qFpx3kePNPDK6aW7Txbm1hqgQ",
  "key11": "5u5Azpp8BYh6ZXMAnYtQ4dmCtwvd382pwDyaU6EdK6dH4HQRE8ZGft7yHRiEaociDaRfeMRG3pcotuaUWibHZiMm",
  "key12": "9tXuk5292wxinZQUqY3WWvnfEWqwc7TqdypZUzHYffkernayBei5ztVDizmiRAB8gHh4Sy7kw3f72EyN2r2Mj3M",
  "key13": "4rzr4131rgx2Zv3XeMa7Mfvxk4saFFrVpJGmaU84A7vrQW94K9BtkVPTQersz8djzPwfXCG5r5jcSphwDAxgsX2c",
  "key14": "66hffSJWjTqJqvehYuqbHYpdPggzq1GsuDo9cYro1JhonVqBuJdDVaeM8kUE4k1QTUBFdM2p7Qk41VuPHhDB3s7H",
  "key15": "4NxpVGd3e3Dyuh15bqUvpDvuAT3dJVyaftFDLzNCoPFEenKfdtjey2ACyWAX4oQsiw861cs8qxU6oRbwM85cx6kU",
  "key16": "3P5xkZsb3DjhiPAb75P6Nko56Mk1zYWrKudiBLrqPohKjEUcnwfcjwtf4TxLKdJV3FpCJiiZWLsiHv7og5kXPmdG",
  "key17": "4uNkYdCkXvRz3DLEdEJVV4MkKp9DstKRkBJma8gHZvjWbjt3i8UapuEHicCWvemcsSc5p8vzhCdrMoqbiMYeDbco",
  "key18": "2oyrDNw4sLUzV4Mv3T6kuStPiC6bHFtzafFDtzRJyxpjwQ4RJKuBFVKb6kHCLvyQmUCtP42McPUfNHXA7asgeFLS",
  "key19": "5rLobvNRqv7RbULy33L8HiusYPtgVKG2tqEQmWtEKzBqe5RNRevxsrPmvCoCYHLbmoHVDfk1hNxqJ1jPqJY5qnqy",
  "key20": "YdiRP5ZkV5KXSwKac6jpfNMGrcpt4RMimqqSCMATkykFz275R51MB6ovmFTi8pDByhUhpd5TRfqu4ohprcZFWX4",
  "key21": "2dGxWYoKS36wLhgyfZB1defvRD56nZcSKSm6Jer7AgYt4NRxfEztGuZfvveSYcWFPAUGTB9JXDhKMjnkktV85h5G",
  "key22": "27UaevQkudUQDYe6hFK7bumLUS2CdAxPEiigt2S4z8ZJgzbgsnbxwVrW7bu9gkwnQCY1o86ce46RZPgm9PV7QV21",
  "key23": "27UJis8p6uF6gRsjripsTnhbL3Mwvx7JgMjv5QFPYK6HeXoxGbTr5iJiSgjdWMJM3Jj9jq3tjWJS8gWJeVpkNqXj",
  "key24": "2UJhR7Kf3H6tA7RthzNoHQpD8a2hdvaAUniEVNjHNKZMxgBQs5DT2QUz4dMmFcKw5qZpWmGxqZYYxkJKv8cxrE8G",
  "key25": "55dR94HArzGZ7bWAE9PWPZSxoGUJn8XsBBrpoXBFMKqGcog9zok32nPL92VBRRqbbgMMRQt2jkWQnPiagzK4gnXa",
  "key26": "58vZfW2PXUdHoXCNYvKXosT96qJgToXNGBokcJQU371XyYdpPpTF9wiLzDKohXR4q7gmxSNrprbWpuNpadSpSUqo",
  "key27": "64QZnCc8rcr77djw4SNSFZjxykzDNQCBgoiPjzWmV6aNFgFBVcEmFxgACjvrDtxZgXhVhvJ4VTLaWN3JaNfTuNuU",
  "key28": "4wqDeWNcpppViNbirGxTgSy5Tj4z6GFxEXsMEXnG9qA5JjZuFVWdp9PZiQ3qHbuSbJfJ1tg2s4M82fHgiM9CbWGt",
  "key29": "3A2YdoYbE3RZqNAd5gVmsUUE6rJMEyKt1dqZJRFCxk2nzSoQYZvAXY71iCSky3Gy6djEknph96TomZavYQhA7Z2w",
  "key30": "5rJYNGgLV99CGJeQacLQBuiUdsk1fXp8zT9DWeAPwqm9JwwLig77TDEWURJvg4oTr1owaY9HbPszrpybnmAJjHTA",
  "key31": "3XYgZcFQLoFCNXL1n1VLPWZydZkrBp1x14VLmwNYonCG6fxVZfkWgdxHsgTDbNbYB9vAUXH4wbBVKArHsNCaDEmr",
  "key32": "4cwxSQtZdCyJmD4yjPq4tu7h5DKWxGnSRzgi5BYZp4fiHwr8SnMMm59aRMPpmcBfmqWqjVrgT2tZtKr3Db3jXM4w"
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
