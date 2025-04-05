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
    "5X9HjpxMxnGLbkNGtnNx94S9kTG92rKXEwXJvN55gtGeJif48WKbdDDoEdr5ETocT8eqwFa4XPvAwVY78wg7zn48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bUymZDQESQd9GMf7MbjC5QEZ9r8MxT73CpLhEeDYqpnpErEfmKQ38WyVizYHLiwkAjs3Z5isdWKj4KHTqycTRU7",
  "key1": "4JmacaVjVCrPtHcsPFnmWmhdiA5AMUNnTUZgBfZhzTEJkq83SiMfHik7iGzJZPS9Hm4M6VgHP4TFXdd4ciKM8SAF",
  "key2": "2gnEadF6EHTL4P66v6T2XzdFy6U7nyFhxP6Tq5HXJiyfpeKWrC53WW1YuU3NkcweX4BKJmYvAaoBtQwHCyjUHb5q",
  "key3": "LFoHm76qDBxUnqotD6Tc7YNVtdH3EWai7gjpgA9KqpzfJkanE73AGewhhsGbxkAeURi4chqtBouyNgS4v49KnoL",
  "key4": "3k7JW1nwxWymhwjf4mmBcatZhA9n3KEh98wHNKzYth7i77w8ZeVYhFEYAr42uHAtpcHyFHYQHHPXm9U7c6yW3ynS",
  "key5": "5dSYTH87aPKn8d4TPQNWJYwnRLhmZmNGABHFS2QiVPBaLkUHe15yCuyNLji12nTW7RgXCD45HGMnX8PeQuRrs9Ws",
  "key6": "2CmAXZYoXgjegRi7JW14LPXjL8Df8LCK7iryMumFzsYzTiAwnR2dxttsHqQJdCuRzvcrcrYfHFnd71gxYqTaWMpF",
  "key7": "2zNc2BeaX1hr2zD6ZZ7qUuhKmasptroDYSLZwQPnYhR78VmeVmh26FXtpySypoLjXDPTZCGGh517ErE4RbeWF9dP",
  "key8": "4rfK1cxk2rnvdF71EAuXwsxXLeqGFsrQYUvsMquyNHUFTRYpKhVrSdRttAZ7cQc3KeAG6aeGmnJq2Bh7hGFYZgUA",
  "key9": "5fCphMtDJhnh3hipHaWVdBDD7LTf5Dj9A346Pq1rBE8VjxRoULYjPkbnY6AkQAZdscjS1iEjTCUHh8ZCBS3VtfXy",
  "key10": "BQH2NuddchWBgSbvL1eWZUUBa9fqx1cR7vW6xrDtHHfbTcLqt7V7JBC2ria8iwmyUnPj6ZzzHq57PAqh3R12sFS",
  "key11": "47aFv7RdPc6iZqAcbpRXhAemZf5k9cyfx8x6TZUhmJaw3fTzKR3PFmkDknXq6X5scdi8wFdDhgXMxkhqw8y45SZr",
  "key12": "5mxRDzU3ELNqkBG4RmQStPsuhSjjFophCaHuWjszVFBLwsShuozeWaYeaP46tyNhp4W32xBJQUYbWN8nRTYLzRTt",
  "key13": "3rWZr4gw4sRot6YYxDn3YnVXnkMKYmAb64Kp6pWvBechYwNr28SEr98BVd1hfGd3f3vhf5hMzrudggZFyaN2FGzm",
  "key14": "3LzLvdGDCmpcnkbXiwTesjXDVsoZqLidHvB8JVDYWrtKBP9F8TZJwDiDi1TrXi4Sz32yzxMoUpXQwzbSZadbG7Qg",
  "key15": "5PhPPJQ3MA5fbSS7e1Ed5rUeCoyynPUTwo5wcb1oXN5qUUHZn5rP49dUHFCurN7xCcctQ7gqmc3bscCdjKjrcWkh",
  "key16": "2sW29z9T5zDiim3Tq6ES7pyQW7WGjugQb2r68DVGNPi9XWHXta4N4YYzN8MNYWvS46ej6m7eFFBJeJgvboet1khT",
  "key17": "66NXsvLFGRTgQdwWYRNogpSMZ3LrnuAoRL1MshjtvVKWPDuVFu9PMEzgLwATczW1HBBhFKRTdvn8LcsZfUSnno2f",
  "key18": "2pBCVcEN1q7j3MJ5e5Zhykhq2jBA2JvcmUCLeG479mytXctHGj4rX7Z3WTWHjkHUPumqjxK57CKg1g7QdfQS5KKb",
  "key19": "4y39vHUMnes55S889nNs9KzJKWi544aQjaGeiJJ8ArysPa1fv8g2fTwnYbmXUDgCV8VEu5hgqsVyfecC1rGT12Vm",
  "key20": "5jeRwtBJQAZJgEg4U4QE6ShxQXfUvKE1em5RWQ8gPj26QsUfjDkJbNvptTyLGgaBYpFpbq8K4knft9Kg96W9fKot",
  "key21": "5181QsJtqk5NtLWacf6hKfpdee9G4qf4ZU6kTMgzyhmzMsop27M3erHShCo9hZCzZ7ztT9XgwRr1QpbTMbscjZNo",
  "key22": "3ghakYz3jSevH3TST2WzPg8TZkKpysKnzWm4zWP4hFMdgyUf9PSBAV8WTdhwSJb94zBAUSiVf6xMauwhMDJrstHd",
  "key23": "5WcjM4d1WsVD2xs5FxRQEiAt9QhfGFbEbCcrapwtRePDzSMsiLhWLeqTBZcZL969avcz28DGaJWKpsED2rC3mdQA",
  "key24": "5Gby5Yn5PUfRZvxzQfLaFmq93qFBKKUdLuwo6ruetSQB6RM7xZyb6mqJwzFVmkQaS3GrmtsxjNVwpYq2onp2yF5i",
  "key25": "2AE2rB1R9HkLWnJPdf1J5x8a7ssdLH1Ga5qeHC6BQTD32C9Ct1J78RqEXFn59rMuGMSd4b99zQp5FAfAZUf95FzT",
  "key26": "H6XNPfUjU9ceiiidPzBc7JqE1b9uNiS1Cz2GY6i73vtfb3w9wNrbGcCrzCGkikj7gc6k8WakjUX97Kr336z6XvN",
  "key27": "2dWd8QPaCmJDYvkhEGJ3UxmSq1EZeks7e3b8vQee8SAGf6348XBuUtM88fasUTx54bRmg427f2Mc9xBMSwwPvyX6",
  "key28": "5yfC8SFPFFUWz9v3cp8yYengmrb5sfW4YU5Lx58e79sNxH5BmsgHdA6Jpy1i77zrTJWzdr5rnpPg9MyUZqyLDvhT",
  "key29": "XEtABYsMeCV1LdmPy4U8XBo1nMphGqdfDw7b65nGMpBvYbfyCjXS1Hjw7yGXskeLY8PeKNRYfi5EPeemQhk43WQ",
  "key30": "2WK4ycaZ1Sxu4qHsw5CXhRmoMQdzNXGhctCXgLzSK277nAe3H41kYAPM7J3wXN32NHbJVd5drQmwtdjZfG4FchB7",
  "key31": "4wimzyUzRpLPNCrpN21VY9SBqFtY3xT5ejvMRSqUmbcJyKLTNCDM5cKTyAUWaBoikiRuvrW2Yxe4RoSygHsTrGKp",
  "key32": "5jhsbyrto5KghCaoDSsWugDS5Yve8hGBfrbdqdN8f12YkZXPCt8RxBmgSUVh6yYh7rDeX1nrpgqiyMNvaFsCTbRD",
  "key33": "2XGz8EWQwjeYynmYbxvHgNaWv9bBgCF27vPQUHBpP3oxyo8BQ6mdLvT8YDnEWXhBQaD6LrykNcp5pWybynfm4UKJ",
  "key34": "5SaB3TQxgu3uJogy8shbsPX2PbgJxDJhfz2GqN8KBtxVq1j4C46Ex4nWLiyYBgQdiJBffkBmqiac8djimSE26L9B",
  "key35": "2qYiXPeE4F7fW7xbZ2vL4qh3DX5U8v1PUL7Z1p82ghBwLn3RFtXwshnPrjb4v3ZWWC99fFM3DkEBh6Tt43xmzyw9",
  "key36": "3jHN4fGnQvPNFwmeXyQTuS2iFWt6zq3DGZfUZtAPtGUbe2af6PTK6eFdh6ALptuXFqkWtXNX22TfVxsRj1SqzAmd",
  "key37": "3cp2KJNo1PFkmjG99v4fnMKzBiTeh2MrsiMwqxS6cgi1P5RGE3fGgG5wpo4oCcw2HDPYimFdQWqNyPiSHHqsSTWt",
  "key38": "4vgrJceWbMABjUE9mP4ApmSCrmAvEZ7ApaKQBhyvN81LVkYMkxWQSUEfEATCSxJYuvwfzKNVadLrk7gTGivnVzmp",
  "key39": "4qd7QZkqpATTuToFtDsZFRPUkFhXcRX5htuHTgh3VZrpqgjQpDwhQhmvSqBctdXALM3GVfJdsb4KazfdUoU2qGej",
  "key40": "4kZS6nisXFLHRhF9jmrai8zY2ozFVg4KFTs89tEjVjA5hsvG7gK1GB4Dmi4wbrNg72yeZVYDXTtFr8mojwTtuNxd",
  "key41": "2FWSoM8ZcfDmw6bVJ3g54M2fmowfPV1mKt7YNojwfMd9FhBDGfsLfTJ3Tb1ZzNbzye4oG6ubyNgJC4uAmzCxVz8F",
  "key42": "3L7TdqygtR2y3Kf9GTRyzUXp2NoCcmWprRzp19d9wpQypgr7ozLanFTEmFA4Z1KBJ9gK9FagU1s17ouzsG8dLxf3",
  "key43": "2yzJRYsXj5BzLUpJwzBq2Lu8uNqacgc7eonjSAWEZmYid7nsQssHEgrAPpg8WdceUr9jQtV834iu1Uysbx5LpUaH"
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
