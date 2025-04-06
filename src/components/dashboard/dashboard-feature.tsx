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
    "NRAeyUVYqwjr9fWn1cepp83vwz2vXh1RZk18hC1zcB1U5QonzqWJh4S4E3dpv55brSoPtsnGE3bZXXvmhEUFAbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5933nJeH1WxHwPoemcWjecpE5Gcu2AmAvEpMErvzrM1P632LFLqRH9mE9Jdw2MWBi9JzkcFLmxnrc6R6QY3cPg8b",
  "key1": "3tZYDyzc3XMHic1JpWV2yHjrw8QdviCa2BW3XMuXEdTZjCvLP7dV6nJWmw1DoU1zWWRRL41gNJQ3hf7AZjvUNoa1",
  "key2": "25fePzZxJ62gw3gENLRTBFAEak9QJcAAVSCxpQXiY4qNYB2rFYmyWHBcsDd3RUKpZEWGXF9a47NdmiNxaTeEuw5U",
  "key3": "3mpe13WdGeZF7PCV6tQWo4qDER7gwEsv4TYe6WYrTUb4CC2YA8MqhCZXNLAxXMx7r1eA7KANZHdVTWXNrDYs1uRD",
  "key4": "4mhnmATuVx6ubTTyTKxe9g5KCF96d8zhnT8N5Fc9Ga3n29ZDhRkKTwDQbtaJ6VbGBYJ5miCnzHDDoS75VuuQmQzF",
  "key5": "BpMUKyNxp5hgmwByFRayJuhd6vFfcq1Foyk7MhkFLxkt1KpeTvrCsMJgqZvG8GKf3NkP1YFTBdZmnYRcN9NtUJb",
  "key6": "2S6jRxagSmeQgA1CXhASAN3tV86HtrxXD1tWvjka9xTGeknU2dZDg7JfKgP92RZGtNSUt3AH2tHumrEiscfqEcSi",
  "key7": "4efKnfnvTLW8qMEgBf79Si3tFna6kFS11ARiMsHe1k3axVtZEMYyxLZuNndZiqGbWU3uFz8fe7xpKXjDqNacj8h9",
  "key8": "5xxeVE8YgVboVmqQnE8C6YzHSuvoGn7867AwGWULsSHwnAhKnYvHw7Ab1ocx2zf7CH2SD7ebdWYSiUThXfRhh6rC",
  "key9": "51oXdw6LyTRpp7AnXkgBFW65KyBNotKCxApejEvh7xB4AvK8CG7QJGHHJeoRajScbaTpVNW9bbt1Afnr2QP6TSwK",
  "key10": "527vfu45vEDK4RUUZHktySwS6FDYQmtj3b39bjUvo5s5Z9oU2Yx4RwZPbSP4X34sMDF6rrFsKBFzMLF84YV14U1k",
  "key11": "i9H2wZCfVegg2s3RT5NpHAKjvTb2U9NvwTKGRQbzUqRhkH4xYkvSN4FnN5hybTv9nGN3ZdDTB8WAvxzPEjBTVtJ",
  "key12": "41kcgfBv9mHqRm3LHBaV8aT3fptRFTjFDooipm5XavU4Yf3Lqk1CMY3p5ErWZD2nHAkaTMeXHGcxqt7w9DdgFVfA",
  "key13": "MgyJBXTGBvKs9cf1mBNUHxKLoD5ebbEznUe4pujTi48GpnuF3PDUkxiKcS61RoSUyKWtDoZMk7gKzYcUQwwxYx1",
  "key14": "3UtiRrtHrZxbj3nvULiXqcQqQwwDgBuQBQDCmnQw2fJ37TrkHKJQZVXcAkiWJ648ro5F1oUizxaeQAqAwYaHGGkn",
  "key15": "2mmcZhooE1jcXv2hLeX1HV6LVPVAbcnmSULWhHDQ9Mqca2Fwjd61pEzSmDNnQh3QgKzf4eoW5j1eChbjbiVm8Lsh",
  "key16": "popt7fVfbFY7wz4grwyim2HwAnKyKV5pyQi5xYvLaeKyMeipyr6nV9Zq7v4km7ifq76t2uG3zJdSiUi8vq1XHtV",
  "key17": "5tdfo2XmnpEmVD33qkUhxh7YaBzQU9zoehfJcuckbP2hEanZZe4F1Kj9wYt6QfWpxSCaTFnXqpitapiSkLUBhjui",
  "key18": "5fWRhjCKV49UarGRCxCWjF3YpzLzuRAWB6pEvRiDhA4wEtdqXcRA6qbPAAJa5mgSzTetnQXLtCiEN5Sxo2M6aVAK",
  "key19": "2ZrC363cUnUCXPvBHKjrvNjMpiSRkpKxpz4DsfFW9QrH2MNR3Gqut9vf3QfjBGK8KGr6MjzQoKkT9ccDuiNKgqYy",
  "key20": "4KE1HjrYdaVV5av6TxuxNES1DaPUL1597fTRg9F2FMqmfHbU14cUvqSL4EATzQVVZuAb8My19sWWs1DxapXD6Cme",
  "key21": "2cZgSRRNrWC3nvFCbmbr83H7wNPqyuVto2r2Qf3scvRwGWnjABVXp5cbWPiqmVM4U6j494dy13aUZzDme5294yxT",
  "key22": "nFa2MEfx5FwA8hDsQkPRgqYAr94yTaUv681AVut3AJEnfQNPPL94jqPEJ5cqrsqJiyyxH4q4JfFPvp4FPVLqV1z",
  "key23": "2KUziQM3gjeApq9pfqz2aYH3LUyPykdBosRQfLXgzbKP3kv2oFQcToMT8B6r4e5f1s28v7ALeCnCG3VhgSgYuEvC",
  "key24": "4EC1qWk9EBkeq2EVAMAaFUfxYgx4m23xbWxDQQasqL7svp4ist6F3Fgps19BWNXcydNd6vYzD4WyrehgYrwXsvU8",
  "key25": "61pDoa4wruBEsw8YuMYoZVn52nCS79oMH9vzf3g5bpRooE4xNQcE2nxFFxmVTXxNa2kM6MckewEPiEkmmbqBDGo2",
  "key26": "tEbJLNdQsrZ3YHnUxVXqJbhTRvmUvVJKNdCPaGmpB3QMMJwhRZ6M5fBe18b9pjzjFrk4R1ikEx7wCrVzzD8H9SX",
  "key27": "2UexVaEzhgPhCbYPBHLRkTF2bJp2tr9QeDradHrnJN2rRhDPvdivweM92PLqjFVUL7G9iFVVWTfHP6hHtJZGrL4J",
  "key28": "2FRAy6aWQSuywJPGToQBb4bCGNkizv2oqZJj4ypWXNrX4CbbZbeS9ZRYUS1wDLcmZfFL6YTgJPhUMgrD7jbexfj",
  "key29": "3bbtFaDKKzrToLJRt1f7Tsk5yujGKY6TC1mxtZS87geLeKvZvaBtwzaZ8z4MZtK1tNDgEZ1n1yjwj73LWYTZCvm7",
  "key30": "3vpzrLByMeSeHxo9ibib73PpGXRKotBk33Q8hr5cCS2NV7mqppR7Sw3MuTscDgeeSCLMD1KWeJQfzdtrGA6ua193",
  "key31": "2mNhGiQh92vNHL5e42XXfLk1UfCG5ECHGvfpN93sGApLJWL6SoV2LziLQfce1ZdWU9zY1o8j3CcgnYg4DtuHrDwu",
  "key32": "4XCRea6s6iFqTjMEmSYfGU1CgwbhFM9shSW9DUv4BpethY9dN7kxJ1e582TDbZjSvZqiGbt3SsEM6RxzWvzNw4br",
  "key33": "HEUF7LZYpXnfMBnSQN11SzhJP2CYQ8DAGh8tKkCXERSUg6nXs8KmeMSvk47mvi4FVXR3ZHfvN8uZmj3cE4He63r"
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
