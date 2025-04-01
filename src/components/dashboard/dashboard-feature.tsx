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
    "43DMRZVz4EL3yJnrctta35yZmVtELtNjcuerYVJcV6ut3auXPGYYGwQRQ1fqabkvKBAukM9bhiQy69Tnfv3tBuqr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RPxPmejXe7kTEjC3Ux9iTNDn6ZQtMBz81iGwagtvPbhoHbG2HYiW2QwqwEcAzhtzG81fz2bCRNFt5NBf4dnR1RA",
  "key1": "4hS8HAKXkmxzSGfdDkgg4N2SoYRprPxkSAvVGRpbNznBJ14aHYEK4WGQD8F2daRVa2Pm2yEPabivNTdS4tGLnhc6",
  "key2": "c5HffZYwkpGuuhPxYyCcsYiEPYiGyRiv52U6yAy6GF9fAUYoQs6FmcoEN1nEaPubta7NxGgyMA61qoD57huXw3d",
  "key3": "WVYCw6ct3ydkYDYLWgxMQ5z9476kyYPGZAQqXpvLeMyi89LsfHqH97QyShUCBjjWtvBuJUhYx9LhFHheU4T5kPL",
  "key4": "GmSqF6nZN2GfzvbWq4DQNMbfvMTrJBHVJ8CJjvH13aMEb6cxtjwpsXf41WniS8BwVjPzisarXr7djHDUEJMJkvk",
  "key5": "5UBRbD9bnNK2sUNsJSVNqcNY2UxgtC7h61mAbyqZAX3pZp4N3sH5ZTPmfEC3WPEQt5bbdSNA8VjjZJ984CaomihP",
  "key6": "4jru9ZJJWgQvrXgWUpUpq536Bp3n27b7jSPBPk4oCARpYBN7Qcrbuc8WrLjDBhR7fd9wf5N47VMtBtjJX4eBUuQJ",
  "key7": "5R3WauQsdrjXhMvenUHLSs7CMNszdmxCq5h2Ja7MAoPvzGCg6LVJ5smjadtzjRv6xTgY9DA1qmmLP16L3v3A8a3R",
  "key8": "5tB2KVCCGhBJuafS4cmDbgGSjZwVtTyorWwDsU5Tr9fPMRVELsg4DhTowGdMQHkXwAJJEzrPdp8rp1vsdAotwGzd",
  "key9": "TyAeJEDovzQ1LMbndbwNc67gTwBpcJgXWm1HR3xR9VybetqE9BtQTuKXCge6zuiJCrAv3aV9aCYwKaDoKdit26g",
  "key10": "R8DBz4WnTFvnRqRXnEti7AU9B3h1uA1bn6LTqtQtDqJ6eC5PgSnhcdLP9rrzCxPPBSq3DND7HD42dUd8aAc87SX",
  "key11": "4n53m9DWm1uA6FdkvpMxrNj7kmLe9d6NBqiX2fjW3VchULvReQL7JH6wknWYBMaum4jdbTFZ6761xkcMiKWypPk4",
  "key12": "3CGgfYVxo8yhJUXLs4dbbrBTdy75h7efoDgYZGVLnGS78jUWDuZLzYZGoXBPw1t5sdzBdUtojvBuW6drUBop2PWC",
  "key13": "4Sp4FbHWUM2uBxfXtzoXnK2qfySwdEtUHT4mRx3rKdKEzmEU8xV7C1jiMnYBJuYcYGbxm1mgqq92pbmXWe8v8Cdn",
  "key14": "4ufUyqWcsMsAAjJxpfs1HJt1KSX3UVX3wrrr5e53PQcLmN7wrC1vNuryBTmH5xAaNNqogN8DBweUNKsn2Vky7BJp",
  "key15": "5NK8FaJtcP7wWopWxGVxVyFK3gPETddmCHw2YBZeoRmQ34SBAc2WUKLgy2mpzzbF9eSHgx2YXqGLZjLFsLBH47MH",
  "key16": "5feEQdidbKsFkhfaMwREiUQ7dsdVC1uu11AWVkgCcxaahAfD4TarDx218ZfGnrNwvNDXWabTYyscT1PLfg14PtGD",
  "key17": "5bUX7yHyb79F44VF6EUDLDijziJbm9kUF9D7g8PE2FE869FeUfh5vKRDeRU6mixcCdH9ffmt7Ab85oYtcUYVSywB",
  "key18": "4fz2o7aeS4bteSFjBNL4dTVKm7hn1em9SijW7WRdhWGdZJEdW5rQbX2Mos6Y1eJs5DMgzkE3E5eBL5xqDpuyeQQw",
  "key19": "SEema57ve1vtbk1zYgUWFRfN7DQ7LoF7V6mi1idSt7pybS4qg3CngBiXdKh557XKbqQssXgM5BUtmmh38EekpgH",
  "key20": "5uitKvZfg1i2DL55TA4FGRxhznQ5wjBJ12c41SZJbN89omBC82CwB6U6YQcYNzjYwez9WykHXKQWbnJsaVyeYbGZ",
  "key21": "5T7K66HX7sVeC2a5SKUwVxgMUfiyEJ3eR5SbRmCX8iZWiABCg9NvApR9hgRfd2b8DpFLo7HTCQTsvyeGpDsfXtCm",
  "key22": "36ZzMD8MEm8tG1HRtdUizppfhX9aWMLPw1mAdJu1pM9pzyvzNg3X89yoooqp1eEbaPdmR4n5ktGFARyYmVc4bykB",
  "key23": "2q1BB4bpyn7rvrR5P1PM5AKdJ8qbPuxu1UURZUExVnsG9tcRsj2KPAAc5qcm6udPkpYWFLKsGAkGuUnj5ZVEuTXt",
  "key24": "3QH38Q2T95tDKon813vUx5jqonktcp18esgEC18mnp83khM9ftNrZQEXuspCXJDp4v35q2y8tsgPcAGX4iRuYAu",
  "key25": "MkwbjLDfZGNbRLhW2RrfF5pDEcEca6WDZFcv2Sdk8Lqnhu5tumJdgKmHNvjzh3EJuyxCosb79x1hkHwucXeWUbq",
  "key26": "n8PuMrPUDDhYwgMNeLS47Vw8WNhw5mmz7bLXr16PhiDywdhwJAPVAcfdgp26FfwMcxdGnjzN95cwKjqbicEESNy",
  "key27": "2BJ6xXQNeW1sgZgffr81XEp9o8yiK9fbURXGYRT2VcySY2n7pvb7xkQ797YXpExJGDzxU7wx7fPpHwsA9MANvdfN",
  "key28": "3EPLBtXsXqD2LRKeN7PARapgCXooVUfjHqZicwPkjoBNuQeZ1XF3wv5mrfZ96M8UdJXANzyvPkL3vJkPQGBV8Kt9",
  "key29": "4EMnKpE6SKdGxbP5jHJ4Kva1MTdntY21MVkd58FqjaDoHSQhNLwCCTtARVgbkxZkDwXdoXvyT2sNFWLMonbCSaif",
  "key30": "4AYGY9fbwsPBh34Pn9JXmiFkJMkgqwGE51Sr4NmgzWSGWtTAMVGe6JqCLCrxPxpRXboqMoUYCXz31QW9RKjM9bGP",
  "key31": "TJfZVkG9XeRFENw2MARUpEZYeu6qCjP1Ls6BWbQqoM8KmBSPs6v2yaqAALn7rvSafYon8ZXAkWZ6HfxMLisKuUm",
  "key32": "2BcGkdHZuzrJoQ3PtN8RuanWqwAPr2NAWPVRsUHCxpgVManAqef3BQQd6Ld47dyqcVff1VLHpYVkavQPSw4jrmzt",
  "key33": "5bPe1p1J6s4NaB73RssScCdnQ9y2hqJ7UK5Dc9ptfiCF6hgNKtZWhFUXuHQx49uMmcpUWbSLZsohBYSqQSF4BLXC",
  "key34": "LYPt33RS2DvKNvzKkCPG5gvwkVcVtfCzpbUtQnVsfVF3MutUR43teeipz5xoYD4pkTs4X4B2WNu2xNj6hMtvbtu",
  "key35": "4rWt72ceG64Dz88iiHgtJcYfAGBNh8D3bLPbTqk8z7DsKm15S3E2wtL5MWLpqT3scxSggm4s699kVZfSWWcz9ypy",
  "key36": "3F6eFKJiiPkykBEiHMHZZQYNB7VZHW783cZw2JBEYpAotRdRMqB2ZKGmSH1CLot8M1SqNmtHRCVFZf5TTDSN1uwn",
  "key37": "4dk48GgWQUqnJEJPCADHFRpAwHmBPLBsutvyjz3ABfFeGRB2fSZnZALnQwxR2yTZWXhnK82NjN8oMmms4tbyTaQ8",
  "key38": "35V7tXqoRdDTzMXSTi1i7QkFBP2EwbpXXZjxWekwfecxBAVYxaUxBFCuXeNhgHcKmJJszULzt19Nrkt9k9e7q5Dd",
  "key39": "5DM1XivKzFG12DZbVqNxKemqKuaURuDuW1wgL1Wuwxo8oKMjeRVjfmWqCkZ4jU7JMTvYnbVmbZBBVKssuMDFZSik",
  "key40": "KhDvnb1K5ersQVaALJo6ZVutH8zW43YC7hdzbFvYJRkN2rHqyjV9qGRj2siQdsWRkcPFgkHX25ywbu6UU3Yp3U7",
  "key41": "xy9VBEhYgiSkGS1DnWmuvhphoAiApDCEMBQDefzqv5H9fL1qMJhA19PPagHVvSo4yausfWjU5cJ3Xr2hUgKmV7k",
  "key42": "5a1RT5FuJRuRoEzWAPykcexpYLN67g9eeGUrGWn8aXZD9itvpYsPsg46Z45eFHr2VeddZXNAiXbVaXyHvzUNFsFh",
  "key43": "2QRa3P4NTjfw5sXkQYzppai1brUEbEouM9b2fKhEqq6943ktT6jN2UjUUtBpuKHnaQf19NumNwERrhAFPGiBJxuB",
  "key44": "5hByL2qagoKoNgcAtwkCQegse8rcUw1Y7ZFKeWJYKf8sUja1os72hs3j5P8WiB5r5dz6SiFkEraeyH8gaMPPyyJL",
  "key45": "3zsYJVcuS8xd217iBccCUeG7tx967SzgJzMUYLRKoL6nNaJ8sSsmAAAc3DQoRVUvCVF5EXmeb47NfusAkmyj3DHv",
  "key46": "5AVaj87J3JmQNj9VgZG1Caxvmdu3LYaDCMjyz9Ke13NBn36R1P39NZp1hHwRbSmQPTKmriWv4218Gv7wN4TYv82s",
  "key47": "2RbbgtxoA1AcwWa4U7krwJYUnFw48gpgjqW7QspGiFvG1QTahL1ThtXqf4uBwaESoYMfQFRw129QK8skUZDysGpT",
  "key48": "2pwL5z3CwpkrVmNh7KfwjBuMfNMQvxXzoPnrGFNyN8VpK8D4hjmhCVkWuNYUFRahmbPWLR2sQPR2Y3zz79wQGZdY",
  "key49": "4ga5RBjndhJZH2fgbXK5Zk2tKx5i3LfNBL3NjncWNEhYgn8YiEdyXBWNDmk7vb5mACvLQxc223tjDDot7qpHzVbU"
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
