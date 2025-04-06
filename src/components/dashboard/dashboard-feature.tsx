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
    "2owKYrGwamUZCbaSYQtwt1RRmCJvjha9grwTX4F8LYb6ni85f4Nz3GeJz9R7fuDL16NeTrpH2nFMgh7TjYTiomir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i8ZLZTjcpQ7QgZam5BcFWDvjjvrTtEU64NuD2RuCYkMJWoZi8VRJtrUnz9zLtTBMm8ZCKqhYufe6CR35QMDBfm9",
  "key1": "5zBdcJMPBcLqccyCPKMNyhc47s9By2fXKwkYqmR3dowDyerJMJyvHUfPU81YdPRb4feovDonbGWytM8xfe47GZqf",
  "key2": "3iCoNExqqHzuqqDXxDigdkKcqnR7k6Zgan9PbQvpw6jushpw6Ah8Ak7ZhQVxgit1u2BPNyuToxMcmYgQ4rsQ7CGH",
  "key3": "3mqWDSZFhTfFweWSmPxaTYu94FLczoceubJzkLGoMX8v8uh2XhbrpjCxxGxJAcxrasp3Y2VrMcNVmSwh7ct6mi6b",
  "key4": "5tCjGvMs6Yq7i2nHszRQdfMKG3gTohTWTaHgXhvABzEDbKbpNJcZuAZFFrUE9CrZR3xrufCBKGujnaXgxtPNbXJA",
  "key5": "2HN7ce9weBEKD7v8bHydNYZAEDBQapZbrUV5sq8P8YPbJ1caAzGZFyBbQWyV5c2qdxgc2Tec6rA78fUTNqSaix1n",
  "key6": "2fKQUaCZijViZRgtG3qEx5u9iGLugJGePdqkwrMnHcyiNmR1uDy3MfVLfSuFAvdXq9aRuUQMbuvKXojH3RzYcMEm",
  "key7": "3PiEaceyJBVDnohhMTumTczLjBxTb2aigftxWD2eZ1B82LDdvtGJDkENchMpSccJ7y7sjP5o7PvrJq5ouTWG1fZ1",
  "key8": "tYv8tsyht3KFYJUtJKQ2q95DqsBkvg88R1WkzyCUspEVpMHAfCPuS4p7UkCwdLPJch3F9KZf5QXL9qx7zXGKC1z",
  "key9": "2KFWE5qv9TYxpwJa27C2Eck83PThW4XB87CcE6SaiHWd7DaZpx3U44GVJHVwPmZ5V2iknt8sssXPbt6MpP83ywb2",
  "key10": "31ga3GQ9DyMeYTQWJE67kstuT58ndDyb3ZW3PhbHb4CovuufpDK3dXD6K1yfJkWkQfQ1XQKZYyevKZ5hitFAiSVN",
  "key11": "5uNvQ4tNSbXQNmdmUnubCvc26ejJ8UyrGFiA96hgJxsfMTnZxsm2vBCDUXtkd3ZQvGQXE7Joepr8LmfoyTVwSSUC",
  "key12": "5ZVvNqymjQYaA3XvHsgcxo7cXFaF5FfX753WfZtDJN3DuZQoEpHdBp9GZC6oMWi1Va4f8QdyV8Nx531jq3i7itUF",
  "key13": "gb2wCpxcD8ZJoL2BNQXLrFUnk3Kx2y1oSAvUqbQ3wEYWq7jyMdNADQpui5Kgu9KBogL2en16AuDFHHD3zhNLz9H",
  "key14": "vLv6w1Qoi9hdgKZvutVnXKaCWqTvV9m9ZaYUkp98npRKUdiZh8HC95DsenCZsRrtjfSF1DTjjjr32PvC1si3xC4",
  "key15": "2AcNMKs2BM9mR8UynmHXa1KUGCtMB63pNW9iE6CF2yruHG5MzbimpagApbyzpYutR4ctcLrcEUnG5PZAZ7Q8xL5e",
  "key16": "2PnP36eMiqNCUPM2qD5Ar8vbTwT9JaC3Qhxs7gjj3WPyv3Kb5p9qH6fCGLAeN3hC6YBCA35e54MwQ6krK8TCWn6B",
  "key17": "5azgf3Syg9tiXQzYPqn8hL79b1ePjBeoFTPik8hDSPmedehStkqyHBUC2Nr8s7YQifcbQ4HgKSog1hiJxyHzamSx",
  "key18": "4ucqgcjvMabX5EX8VxXaa8akAeGsfZvobNehWaKke9XtrGtA8B5povqxqe8wSp5az7QXcMRZStMygwjgq1G3HQxz",
  "key19": "2NW5ZYhn2YVPNjFJGfqCnoKvVUCunByx7kNsjaQbNmE5SmRKdD9zFn4rz7R8Hdi3YRXAc1bzNKCdUD1GhACFoMSn",
  "key20": "4HD3K5bx1zn5ArL4xNYif2EcyC1YPY9eC485jwqnXLp6xFfYPPcySzZJ78GhUPoA8Rrkr7jxFxtCxrCVdoBivGER",
  "key21": "2koDLtKGBxKEkcb2fLfSWegZCRGzhcQZ5wLi86qN9ZqiiAg48vcCikVbJTyiwRJcQup8fyYmCkDPR7NyJTP1FLUV",
  "key22": "XbpTJGz9JbNi9QSrdZxCRD1PSfLpW5hAECwUs7pDXBiW4jY8H59pD5NaWmAueoiS9D9eavBXZ6uHECEAsCnidSB",
  "key23": "5ztwJ9jxayKPibXUCdYp9G9rSxKwPDiRm9Z4NLMDBnyZJWRM7UkDPGufxkTsmgSvfLxvxNYa6YiRuqgagBc7Rrw5",
  "key24": "2WNBMQs6PUH1zXP3eFQrpWZibDN551CBaYafkCQW89P4yKJktuaxCBkBLDXkmSaRFsMXBjorRGnBuSkJnP8YWY5U",
  "key25": "3eGjPuNCwnHzKS3ByHrrbLxA9Mb8uCV74zArkwnDLf2DkMBnNZZ7jLrtmXezVCkghumq854sYTqPniteRWv7mjcv",
  "key26": "5J5xxEmLLLCwfk7XoqGFKsaG8aVEaisghFop3RhEEbm97gnCMHmC2Kr4AHHbuwFXki8QDj9FhY8TBTg1yYDsxD7N",
  "key27": "3aJjvkrZCa1X4wDH9v2YwZf8XXweeB54UYARqEpuQDH24v9KuePy3jswXvQ3RDftoye4g5ro3n7yFD9TYQec6eRg",
  "key28": "JRXE1Z7HMGd5uv3pVNc2mj7ozGhyW82QJDWFSecjuQd64uiwdoHG2K5VZwwapzbJRBMFuw9sy5osuvGDhsnA27D",
  "key29": "2W1cbXDE4q2zWEpj5H7knKmSpT9jBz5BKAPLadiVjGaj5HhhLfRpLRzPd5DtS6XqcMnyEy6TmW4zqMMshjEtfqcX",
  "key30": "4mAkqw7NhKTxr3dSF8secvyAJHEPSvHZeDNQ14VQ3Z7aXdxEsrH1J12Dt34evGRZ2h7qUAcDcdxf5X19fpVa3g3e",
  "key31": "2B64JiJtzbXDecfA6kPUkgRwgujAR2HbkKNx231Ag2aJLvJ16FuN8ryJJQVgczrLXL3b1FrZ5tGDwRyhBTZVu5Q",
  "key32": "2ov6b66iNFW2xijBwLLj6mGZ1NPou4KgdZQ41rnMKppfdXftvmidyXiSboebccTnLuuEsSUiNJW632KE3kpp6H7d",
  "key33": "5c8UcTLxvzyWKfXeAdyUd8v2g2KFGQfFdNRP9EPUjy8xQnKLhBvAQ6PJx3Gucv6dw4W6casv3KEHWZ8ix8mNmAeh",
  "key34": "4FvVHcA59r54hDJ9P86L5xR9QdQobG6GiR1LrW1zGastGmjKeXt9YGfzyfEk75ndTWVepfhwS5mgb4xpD1UnkVVV",
  "key35": "5zxmsrvB9T8A8gJCPX3GfMLfkmQxEt6dV7GxJWxWMQvBYrxXLWWiZGnWy7iDrEC82raL6AJzntrrYf7YNZg29KMy",
  "key36": "2BJMXE1P8BaDGgxpSsznebwtcK6nd5QSDaZx319jzFQb4GWWbR3TmLMBkE8tGt397MzaCS3QJwcq2vNamnmE2M1w",
  "key37": "3boLDtWFtWLnXhHwZxrXM1hAHQehFzkhxZjbpckApQfJehL6sDYwKRSdnNHUqH9UvsYuaqq8G6yxs8BD51C1G6EV",
  "key38": "3vBYAfmvkZbMxfdig1N6qqdjCAbZUdScbsovAyZHbyNbYc8Ja1tqAYAPLrVQMGNqM1y2EVzQDg1G7WZdUqVGVe44",
  "key39": "2fraWx84a7yAeQqF6txdfNxgMQL7MNPsCSC7ADJXmbhb9cUuXT5zENx8hi6MTs6EExY99KW8yKpcGKgBmumoCdMb",
  "key40": "fY5KuboWpLLW93Tpgxk2RppHtWhEL2xcDraCWUxzGeQuAGF1DvEwk2dMUjWU4E7cJyg6mDnbAKs4kkCZajU4LhP",
  "key41": "2oPUrfQ9Jw9nAnA1hBSp3kduEpnM4jGB7W8sxbXPGoSBqUXDxDi6mTgXGnBhxdT79bMSqzXYWwpSMJJqhFAxxveq",
  "key42": "2r72Nq4Ybvm5oEgJ9DW7xVoomyjAsQQfCHwF6c9yMPtXLCzgjXR1BzHyQqNLWM1ANjjCDdtEcrtcYabL6qMRrMZX",
  "key43": "2wGHnXNkE2RDxgQ4uoaHVnKCBxcFiGzTPa4boXBo9M6q4Q2bHrQ58Tb95LvMjiPg8nA544hXsKr2FhZ7ryVBfczd",
  "key44": "2fT6hpC38BoMzRvXLaSL2yH5nnvgiSa6pzQrgRDmSGDnpMX8bT1A4zDRhy81FP18kGGr6yRkiLFCiyNLsBudqPVH",
  "key45": "2peVEWH1UqU2qkUgsrcgWrhSpEJBXb658CYa37ZbCyK8LrmLAksZ6ohh2ZvYtKn9LU3cniDDfURr7oUDJXnsGZwW"
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
