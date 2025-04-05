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
    "2qTA7npvPauphZLMHJN7U6UxJwiVP7WZCctHyqJgvWuTU19FHAhHLeKb4tdgKKS9gCbxu85pKkhVJsycqrqLnW1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9nfZENvxwscPsjqG2yFWDK9YBBVAmBqgXqZc1kEzWewMDjWoBcmiqPXGhpi3zGMESF4bxwBTfMXX5AiX6TPG9Ez",
  "key1": "5wE5x8DwHQ967qbZGd9FEjRsoMpBBZnvJDB2HdBM8VV9ZR12czohzHfkLYNF6h45RaNy3LhZ99mJ2WZ43a6uj4ks",
  "key2": "kUQEZevEJMZgFDrGpZcmuwq2WmGZa4KSerwp4SH5TgEzM9N5fGCsXCjYS5CEKhVDUyEauCebB6o99uucaPykHcd",
  "key3": "2agbdyhxGHekUrFbXUQjLjj7y7QFZTKXfysKfkMsXPr2XsKJp1eZ3zN58AqFW9xHTtxHbyCXWvpxJ3dw2JjrSwpZ",
  "key4": "VnkdacYWhvcRuTxj8QFm67wGtvqpzTaddNCqr7s7UMGcvEd2EyayyQP8tcVDeZnXV31LYpEh6zGH8wjGtuHACVp",
  "key5": "64eAgwfJBo9nEaCoh713WhXCuEXUKV61PZ64VNQXRkDiAUbVNQHeNiKa9fqRsBbFxDcZBS1ydq3ut3jyWDkVXbao",
  "key6": "32K9fwvtGr4Wzdd1RMSwPTLgV59vc2C2B9Ni4YqHCtPTPWEvxPGhoVcXrfDtEi28s5mN4oh4cPtMmabZhVhTjKoT",
  "key7": "3DUtCjxkuGbVnt3mjE6vJbtuzqp4J3tJ6Gs581QpKqc7Wy8N6umYe23UkfhERZxvWpH1BnzvLPJaR3aH9CXcT2Gc",
  "key8": "qeD9MCVBXXPYbx39uVQJ1iaoi7fMTn3j5D3b28y7EkT6Yx5eC9dwNPu1ko6aqqWCcoXrfiB9YsDwkSY4Q64feu8",
  "key9": "3txfQD35JPusZUBsqWrNz19gY7sBYzwiJ2k4F5uURxxgz6yA4sHU9vdFAPomV8k7GHgbhLw9JoAacjSUzJhLAeJF",
  "key10": "2Pi6fA8kdgnTRA7DYFVTrtnfi14n4KxMpffbrjqdxmHyDJb2nXy3h358j4tps73GE2frySLRq8vHWGLcpewTLdjW",
  "key11": "2byH7aadFQPDQbCWpTr3VM5K9oHzME2G47usmsty98QxPsd3WRFeCq7ACHGwDwd2iWCZWYi9JP5FuFZzC3ghWi59",
  "key12": "31jpLLgwSBXNKe17N9oDtFW57LWPbpip7mSEj49fhFV5JtL3gy4yW7AECNcQVrJp2NuK9VD36LGBziqxYexhGMgz",
  "key13": "5csf9kjDgRSJ6i4Up2AbBpyb38XvTixh2krPGYcJGMPzh6e5SmvyASPVrgneRarqiZML8SEPZYvQHfbX4uf1XBJU",
  "key14": "2fw3iDe1MVjssmjT7wA3DCddm4x78ZFd1ZgewrAEYJweJrfMobThAqiJQG7Sp2DPnbc5Yx4waWVayMRBCn4kjgC6",
  "key15": "4ym84uMwmVb2Mg5Kxy9h6dovmfW751io8vm59uYvuQ6TJpTPR5GyB9aNEJsMjRQJE1sVYM6J45Er9vuhQvWC4oSm",
  "key16": "vpbxfukH3VE9CES5JkaAZWw8sjMxKuUib8yp6EELSnBDMmyA24ugsbWm2gYqDSLzWppY2eFgacT8oRthMyQ9Zvz",
  "key17": "62qJZSo77gvVUbk3K47XMp6gWar81Fr8ZgrXJ9dubzEfZsYAU25v3PJmhJfqBbLbEhZ1UwK4dQ1VGngCgv1wrFXc",
  "key18": "4vWucixY9tUHdjeNnquUBK3WsDNF7z1dLMT7G1M4upDrXppkUZ3DDhGqUropqfYS96Xj4pft6Ww9CLaQa5GaneNi",
  "key19": "67BrkBwsfgH8Efb9ZHqZhVERNbDWMSYKStt253u6WFwGXPdAzbKHsFCXi3wFiHsbRsb77cttJqHsbVWZWyRWv5rZ",
  "key20": "4VnUdkWUJze19PxND9XdfCa5VW4J2xfagT1QHxpDzJjk3S1VomTHuGghTuiRoSWLHfWrraeHG1MJjp2s2hfMrHGL",
  "key21": "4yqYHQseKRdioCe4FsFFrgDDejgFgNcfNf1YhjGBpVD2tRqPJxdt49TQwhVcR2zLr4Gyu2WQYUy9vuTwh1ggmb6U",
  "key22": "3kEzqX7hYZubeE3TppMw5GZows8Noim6RuV3Xq1exrGsHLG74fq9XjDx2MeeM7jb8tZG58pCX5NXKSp7SXhAZufZ",
  "key23": "4GAiGSuuNdnnHGCbyS4k5XGE59iAKcQtVa9aVYzm9hU1h7EAicE2BL8Pnh9bRWcaWvGdHiUtTyh5rEFi3NgGJrTi",
  "key24": "3xr8GQ2QcA52ipbJqdL5Uc4PM144sXNau236twM6Uf6KSXgs4dLjxj7NCXRh5ir4EcZaedVW1BpryjQPGdkeFpzU",
  "key25": "3BRpupU9Qq9hkyeBqP26DtE7MfFtXhjkyEcH7btUUARfdxhLmCvamxC49bw4W7HHeNr9KAUcoEeWPw23WrPqbdDD",
  "key26": "2QWsMDezkwTiyzEbTf2winxBrQPRs5ZnM37YVLiNbw4BmeQsnReHVHrmqPg9XmoxeFM7oj34M7knFQf4orhQN7aK",
  "key27": "oAvWVxheihHMFDVpqFqPhNoPPzYCkULSAGtdaFAub4EPDpCRcpvaGtY8ZJjmKEevVcqDaFQqKQeKbeQ1nU1HqqC",
  "key28": "5qRPdiy7q8B1Z4z9U38FrnWQEs2AXYFe26EaiAfqZQLgoiZERiA1AAM5dd53vaa4aRXyx1JSofkffE3x9XZn5Pk6",
  "key29": "3tytYWvU6ULh4XRLchozwxH6bQPAESbVaamyU4pw1F1EqEw4KTowX8Y1U7ojWXzCnvrynyovRzRXVE2nCWR5tsgg",
  "key30": "5aufM5pZVpEBMVrjbmCkwFWxczGEZFKGXMuDnfNHFFiAX73ScepLWZAnYjeo3n95vkvRQbj9XXbFJor7X2Vd5NpQ",
  "key31": "4iYbuWm7GJi76sn9RhkLoUEL16L9mizzox9vQqN2TiMqaQqcyT3MPKAoeFjFEfUVHR5V9fquEYUnEwv5DtzLC8Vm",
  "key32": "4RVnE25QkHWgGYwEDs5AQXhXwWfPYbZz7185m9MoeVpRS1fCMhdnL7f7j2yQqvg4UncroQ4v46rRekUfQtY6QZf4",
  "key33": "d2G1CnAbrxB9JGd2mKAVHnfKDvVKcGWXQkkm5ezkaGzcrYtPoz7RbSYAMoiwjCUYNY4jtjKVkxo1CDMbeW5fWUS"
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
