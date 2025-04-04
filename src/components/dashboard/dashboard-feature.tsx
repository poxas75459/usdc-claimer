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
    "4METAW8n1oiUz78w5V8NZuXeZcRs9xfS5z1w2amAZLXB8wdSLAYJz4RmRDnN5Rw7gyPui5REq91Qsii8qpDkRJpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aBmfuDR1k9B2Emm6HwNNf9yLUCtMoJugrGEay73ekU4BukKW4GsTwFtxNjyJAmRYsgrJWFsvca3zE5h4UAYbPCQ",
  "key1": "49cucKVaGVrV5eBeDTfP7iBHE61kT4wFMa3Wp9UJdkpbhzkBks6YY5EuNBAvxgBVta9KcdsH6QzH7aA7hVy1dmXV",
  "key2": "5NUY3t4Utjh83NgaCwyN2giugu3xRYAutMseiKA7ZzLVo52tHobpZ9HPMqC8raNPUGwt2C1NJtxKks4hLq6RQB7G",
  "key3": "4h79tLDLqq9qADgbArZKT667WdEEs1QsZruFn8FrM7fmmJowjVKc3vv8a9m59Xj2Q9ibJ6DL2C2syYXYVa9NMXzg",
  "key4": "sT1URLRPpnV4gzAZYuCxGi7RAbRAFLFH3xxXqDEBpZe1TEKeXvviBcM4BiVEPvt62xNJuwastpaWDPULVE5g2UC",
  "key5": "2o5yybwrS2v1TgH4nbqqRBTP8GP3vYztzuYCiGxUSFh2aHhdWKTGjaGyAwFW3XY9guAj2BmHmSXs8f5XnxbwvNSj",
  "key6": "2i5t2GcLJqjbDfY6Kvm7aCGniEKUu8K3hbJXwrnmrFt7URrq6CcX2sZnGPfA72uyp64YgqUGTqZaviAVnw1QLY4",
  "key7": "58GPYin7xSJRhfbV31wa4MZg4ZtHScqRbDQ1RHHua7PcCw8hqBBibJsSDN9y9u8AL5sKPB71bJSCtuGMtQTvucWe",
  "key8": "5RjXYG2nLzwtanCSWCnnFdRWphumpVGtHDjyqbskkhyb5wTZXHnmQFnE2yErdsh4EEqt4xJ7Z8Hvanq1i97qCdha",
  "key9": "aXpV1yJDYERrUJ8iGv4QgoWUSLSTSBxKoGiw1qQkE75pbuGmGwyUVLQBp5pCzSAaWeXRphZnFPU3GLK2LZHFV8c",
  "key10": "2Gxdp9AA1U4P4NkVcii9f15VNJ7LhugGaLfqjgZgNXrSb12ScEVG2SLh9Z8Mb4B8VxkRcZqhdfZsHZXKXRLjQ3UV",
  "key11": "2Pm3mUrZzKi4KFHV9rjqNTBXPWCCCGPiRDuDbXcTcJfMuTSqGDWjXpm1RHfaaP5RHrHcxWCt1bNogaHyCDPW5Pqa",
  "key12": "4Dw7nWFaUj8sLZVs6o7L9Qv8zJpCyfTDe8SWw38nL6YHfyZpYvgxAoQtu6Au8ssiL2DVjEghB5biELB9PSRtoA2N",
  "key13": "3srxs44NeQjGBFN87TmzQfwsp8EbbPwxdAshuADbbTwmPZeKntA5y1wpTnu6ySAY9MURs2w4CkoVWePyowiLaSuu",
  "key14": "3gnGftEhywhWkbbksembCQwjU3N6CaYP8LHWkCjX7HRGGaGSpS7WoFGuZ8FVUEnuNJFtoZDXcAQXpwVsLQKk5qtM",
  "key15": "qMqbEGm4ree7qPeLDkVbsrtuxr2mtHczpeQFqWVmrGK4h8JbnmWzqyP1HuxGiuqyNggujYPfawMkTf7ZAsTQDjZ",
  "key16": "2kgm5ci8zj6UZG86VEbRJvoQQRXEG1rfbw1JTUo5eRkXai4PD6Pen1FkgyAYWMFokJV5tXb2rDfegkkPeUomRuQk",
  "key17": "bRuX4BKDXPigWjjohhxjXFQ3WUdYJM4jseKKwLj1Wi49KYJEkMnFJ8huNQ2cvaAb2C2PfFds8B6df6fNvKAJvbk",
  "key18": "2TtEiDZ34pnVMyJEuqwpPvkSxza1ztQCohsitpjoJ1hgo2GbyTbvnTNin8mXF1zAdtj56o1EfF4gTPs5m5PuALnV",
  "key19": "61un9aTpsMLSxVc4jP1hpn4EDG1CPMZXw8J6CE27ofE7yUSfGLfbLniPGCG6RSyJhuyZZrYvJoxMgqb6PF2f2beL",
  "key20": "5UGEqYhfok31jvPeoi6Ye5V7D7ZvexHLrvQJhjvv8N15Uk8Mc84Ry1yAd2UubR7K1FGbPf4om4YQQbofYk7q4TPq",
  "key21": "3BU7BZJjMYYCcY58ZLjijgj152wqRo1Ejkr1iNkjYmikZiKuvHbFNBKgypyitMnEz3T1x7VJ5muaMJJe5dM1LDy1",
  "key22": "3FgDPd6AFmhyB6H35RE9Uo62Q2eVX6iaiheFE8ABiyY39BvnvmMwiPYcjUfZqA3GpcRVeMojQRWY3z6Gh76bNX6T",
  "key23": "tQUb4LPdXizznaemXrK4Jvk5nHMLBSSiLm9ArPetBFg4Lf4UeN46fC8qRgvJDb3q7iYw77HhE54nxG3JEdUxk6g",
  "key24": "3aFaMk2ZXpRevDaLJwPGszvHJ6GK8MZi4fZ5B2BuGMTv8ziRiFpmRwWqU4qP3tCjXxnDhbkJTdMyL4Y8azvJg3Kd",
  "key25": "3cunotFx6icM59ULCDzCDH7S2RJKVEKcZAjWZzk9grGB1aQ9wHKBF1KrXcBuj6wFM8Dkr4QWuSU3TkiEGRGvjztT",
  "key26": "hiW22CdaXfsjxSAxUEHxsnGP8HA6obBgrUjUwmR8hRJjhh5CK42TmgaAHgTeCgeeXKfnnmdfwWnsdbr4CPeYQff",
  "key27": "5fCvXfXWMciUaSMnJECTM348DoofWoFhuWBfLqG85H8JAjJoJCKNahp6GmzKXYRSJgjA35si7uAL4tvudkQuK2aG",
  "key28": "126fKsVUCH9d3cUwrsnur2KzExAShMmuvYsrDS2PPzE47GAeBmscAC7KUMWZ3PUVqNgsp5BnPvbPJmD5N67pLhku",
  "key29": "5nKKnXqT7EyHA9LECSzRWbp82e5KXacr5G4izezCjb54khVvAmSM4zxoUf5vcgffVci6FUNcm6rNr7RBiG9usCni",
  "key30": "3RWnnb5mkMTL3e8BCPQjyBdkJKo7VvEZKjDx1zngZfuWom4mQWMYgE7oxJyp4W1MmNY1EpuNtU7yD1XNVoLNPkNd",
  "key31": "89SrgKJsRFEsU6qxL93QBFMvanpTNt1VuBXSJjxm2DmjemdWgjMaLzP6r6xSqvXEew1K1bNpNKYDGaNdedP933r",
  "key32": "2uWRsPy5G4dy7rqeCnxzjV5LG3ZYRZ8egDLNkLMnmKkEKoZM43kxyb2n52sBW8KPRnDzMmr2Hr1GMDr9sJ2eZU35",
  "key33": "4judk67cztyNuM1hwHjvDVDwNXN1bCgXdxiiy6PXSqb8dq3tLb9g5XsKAZGA6PWcC9JeGxpLFWzw3ZRBjzciAWew",
  "key34": "bfsZnQgucv3j4o2mrEmm4dxrBsTwEb1SuPc6J2wz6afHn2wVgXvcWidbcqaaxfEr9fL4czYFrXY5DX3ctRNbVPu",
  "key35": "2gjKDEJifrk2vfWDqtuqdAw9Rn1SqhQYyYUz4RWBeBkbM68wakYg5RoPyq82p1wpnnBj1Hkk348TTwJGeXTu1yQd",
  "key36": "3KLBGxM1qZeFVZ5jy8nz5VHhb3VXVnFVs4EUK8Nj5qJqX3vit7AjTjk6Bbaq24eUsxe4yziLBGALe2qZDWYcaoK4",
  "key37": "aEb3a83iKuFAXuYvpUSnVtSBHnnjRqFCHoaVanCA6REGpdcD7bxkqhgqdmk5bVV9cS6L9j48rvDkGEqH2bKyuCb",
  "key38": "4QBPMX11nL8u9M5Yjd5qwhhzCAQuoCn2a7PQbQfix1jpXs3dACV9qQGhSig7etqLVBvgpKVyS8iE1FzG4bVoji7U",
  "key39": "3f8AybdEB6zKRcpzkyNJenmvh3PSYJwGm4k6pG8RwNTGBQ9HLuE5SDZBgCtNUQgQjUNxssWG3rxLrCNfVaucQGpc",
  "key40": "2rx9Ups9fXLmtqhoTLMe8X7v3nyx8kvyYXEE82ZZW6E3jFFVUdvs6EFEVFC75aKDgcHawydwsxPgZNpEd4VAhQuB",
  "key41": "5Mp6ovPyFy4cRgbS7Gb3UiHLumyqzYw1sv22wNyPfncjECe4mdkwLEfT3rZXt11cavnVuEhfVeUeVsvAYM9ivrbo",
  "key42": "3tDxLxFV5QgrGdG1a5NoNribZHee9zmQuscktZ2sJfZG2ZrmGEsw1hf4GGyPATXKz4cPL4dSJHwwHH5BqVrSmZwS"
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
