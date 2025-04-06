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
    "2xciMuc9aQ1YasYY8FeZJsro897F8jQ1c5KSjLycpBF7BNuS7CgGh7uwjStsD8GmKdRwP6xr7oJJhZ54SwnwjiRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cwmsXkv4PL9Nnsi9R389PdHQw274z2kka77NCFTw4PdzX1RUCvmgSWmybLjZAyKVJmQQGTERpSH6eDNshuM7eSL",
  "key1": "53qbY38opNC98Ex8uahjxbC8GJUAc6rBRK7PUyCJkx79BFW1dcRPyyEdoboUoEoAb5w8tvgvkdYjrGjkozUKoXpf",
  "key2": "HJARp4r74NVgyrpvLAEfpC6riFmqzMDebWPsETjQmXPCfTzEbqnVtf9vATXBR8iN1dvVXpuLPeKKr4TkZznDqQW",
  "key3": "4ZmBArU1QHPD8qaf9e5kpxD8X1JChQBVn7PQq8uFracbzo3x8Dr1MvWftg8XhwEMkmhAYzRLPNf3SATspGDFfiU5",
  "key4": "39uQwWUhG8rv15bGTRgj17NcUdonLLrTzb8LuaW7jXuA6QByqNbm73sjKgqg1FAWsAXfwfiyHes7cfnBYuK8Piax",
  "key5": "233JNjL1367ezu57SHGJ8BVYyzdLh28FFToTujvVmoiL25QggNRh6DSarzibpsJEGMhgETYkkGbxnNRxGtqzBpio",
  "key6": "46darsDrQrdBJBqvf3Eeka9EQ2QyCg2EvNwD6jqr6ovw8ophBnunfrjRDS97Kr9aupUou2nNJMX7zZTURQycPvMC",
  "key7": "rsTkr2GUxvrzDBTqJr2jv3wctHhPDJ6cKZ9XXLXHdwGjdFvh5jnZCpejePEVWW9jjr4xgDQqzQX9ecPpPZ53mSw",
  "key8": "5djkxi7XfruVvo78vniJwpLPG9Cmp6NqFxjqiRXeNuQHtTJQZqKuciPz9b2mm6KxJHqpZCrCT1o2Y56yeEgdp2p3",
  "key9": "4yNTpUS8wttYRxm2LFMynwhhn3wCT2DiMDaUvfG5LCMkgnhxQktdbcfCPyZ6ZWhTnNrG1cSh4xYriM8mxE76JRi9",
  "key10": "3tN2ux7N5hexp3FF36z8nkD71Q6uqym8aUvPsP2HEDT2axJwFVwdJVc43UEQhtPQn9ipwbjqEFuKJ9V8gt6qA7i9",
  "key11": "5Qpr7mp5m8c8SPhNckxu6W6ho3hVTLS624dBfTWn3oqocVqv7BqLrgSnhnFJYbdY5nAAReZBDogEKxaSUENWG1UD",
  "key12": "3EkZFqGe4WecXCxRTySNYNzjiSbWL6NiDW9uHPw83ZDKSzahPMaopNANrReuDXLqGikZMYCLf84Ro1L8SAwCrd3m",
  "key13": "5UmxgVQH6vXb7upcS7SQN91eAStMkyngS4vrLNJFgRid9HVkPz55sWPmZVcBaExvGSmFCNDaU8LjgfidGjDMZU7Z",
  "key14": "38xKzCxZ2BpY8D7e6ZEJyUqdziKechDsfpgpe9cpcBBsKqdQGmyNmPvWbkq5MzQitGj4mXqf6nH1iUDDQYTcNvYQ",
  "key15": "y9ukHiPfCjPqd8bcwUQqGDnqseNty5m7csVskpPi6HvfkdeM827aZ8MKoNEN2isVLDfQbuonG2W9PC8GfAtJgYZ",
  "key16": "5JPaZTafLC6HPCP6DSxzTeSuNbWDtkT4XvQxZ9DpNbCyAYA8HarJ5fH2hqDZY272jyLxKchZ3JJNqVBhTQvmXUGF",
  "key17": "2dYyCv9mxQ77CiPYGnYzWGGQDPqsJAPLdLH3Fsm8pVhVhd3KjQV9cuxd2LF5tMiykVtsukVKELiwVpqpU13WhRrr",
  "key18": "4778TBm25HPnRxTaDq3VdmDMe7nnxT57BswQD69atmXtyLdWo3N7nwjx3jvSiSpNVePwTSW1qJ3d5UNXXJyHXb3Z",
  "key19": "7417tocU9o9vj22f2L4ey9JR5vxqbKopANkAntyJnE1i1tcfVRsimuntj3Jb9uxrvLcbH6pqbJjLxtkwJFBfWjz",
  "key20": "3UR6pp34fQcPRQ2CBxz7AK2ZmC8YJBiDR5UbcqmjJnFzKq4hSmdjuewCYx6oh6AcPGrSnupPFCJbrcZFLYAfkDTQ",
  "key21": "4ZdJ1TQSjRGUFHCrj8VQ5EtStXQXVotJLL6meeRfeWBrdrX24gQkKrjm37shXW1QfaDEgZRBBRsEJgf6HL2mtprL",
  "key22": "T5dLZ5nUDtyajhwDXnD95s7EXZHiVgo54P2q2WukEypNUXqB5ndVWPMYgX9pLt1FRJBcm4Wa3H98CjN3NFu7jMk",
  "key23": "5BfJBp51J7Zu4gm9yfNv83qshewC4EwBPGWA3vx6P5M6Aozi6p4Vz66Ne1hCPoE57HrYV8hNdGS7tKAKdBvPCMAy",
  "key24": "2p4F7W5LsX89sDFdiodAfFw2g6qWU8GTEJhBYHw2YPuJ9uoDDvxYcdsvGUsk651UUvS56hqSV5idxjtJ4TTMX8ZU",
  "key25": "3T48vA1Fajt9nbwZM9fY9eDMqKKP8ocQw3iXNS9b7xbM8h46yz2Xub4JL81RZer8hb4yLhpTZ4nHQ8R8wJfX52ir",
  "key26": "3nKXRXSJUNyM15MRsJPsB2UQ34bG1KqnXxgUQRfBPhLCvW9QMnMaxuUsmtQ9oubtYP75w2Wx9Buqvf7vsFUgf1Wu",
  "key27": "5sRrss2EpL7roTmW6vTkdNEpSPZRy1hDmKK2oJqAL3vVFMRBKrFLAcSxnsN9hoQ9eSeAFajuwQXcuWkzCBQhvDXi",
  "key28": "3WPTeC42oYYS8JUsq5Z3Y7bofyX8WkYAr3o4jjWcrN7EoiHVKhXmuhiEnbzFjA9W9erzVRgrCj7FP687VAFP3i81",
  "key29": "3p2x9fNKeTREDtbgUirbWB5NngFXPcBVjBS8Kp5TfZkaRTTbvvB3hFgR4AXEJ8rmUgs4g3UmrNPT1pYZA2wU8Yz9",
  "key30": "3f9Zg1wk4rXbny9idkKUDn7khotBDyxg76dfkfrxKs5wsSRgGL5RhC8HcFPvTXcBJQnBFcA6TNxkQuM2FZ4NPU8R",
  "key31": "pcHmeaNX25V28GgYXcQSEtSJ4e4w6mBn2PUh4i9H4A6r1JQcuTNi8c3kTVwVpmMCJoYUZbmbvL9nsF21FoMi81Y",
  "key32": "4JLUn4UE5B2C6BtRYp7mMSr3faGSwPk8k5iL5xfQsX2rzf4vUFB4KVY1FVzwDKD1Vz2oTnYWwS9mWYipG8UaUffk",
  "key33": "RUGnyeCgqGvnNUG6X5KrfVpgWw5wg8EYNzWkBvArvLf1DvPTd8jzjsVyjVMyi5fExLXe5rFNt9RaSeC8PaPPVdc",
  "key34": "oWDftFKQiD4C5PAw5ZAZsMb1TvM3EXeupv77wthS7ShMRqcy5FAFUkReuUn64B4ad3adgXYqGHgPati3fiTcSmL"
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
