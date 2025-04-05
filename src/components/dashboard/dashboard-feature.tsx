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
    "8h7a9zhSCnncsX4EuDkvPLJoTUXxNAfoHfi5sHFqUaZz2U3KsF14HUT1Lck3ZezEygNzaCrbtLXL2mZYaR6Jmgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZsCMW6gDd1bVgqQQisC2uP2ts7Zj6VeVq3qP3eMTeEAiSEELHdmfbNEkVqAzJUF8hekEnJwvh1UqcwSDEt9uwWS",
  "key1": "4pd4TWxvVo3KYSsrm5QoWfDhc2WzkWL15PkirkxLoYxpBZv2XE81QGT7re9HmNCuAf4oj1ee5RPKHVKmx1XKDZ97",
  "key2": "25jjrnm6kmdyydh5E2UvmmvssDo5ZLeS8ZboPtkbQ7NsmrU8kwokpiXbbxBmveWzA1txbWV9AgeSHCtu9SPE4WpJ",
  "key3": "55tgtcDB32bTQXdJAZrbjDLcMVURMM6xG6e4C5zHMFSKbEaKa8EMyVT5u9zur9FJgzSs8r8XPaTiC6xGDNztXfnV",
  "key4": "yanF3X3AzqEFNVVw9JRSWurNZHHMz56fe9YuLTEpps2NwvnkTitbMDAsxR1kv9FDhrovNTBPN6QVc2fzM24ThMY",
  "key5": "mSf9WJ2Vnsm3aaVmr3fiErrEysKcZnnG5MAMJ29NNxqw2tAJHLesXzyb5kRs7PEeBzYhk7Pkc5JJb7VUT47opFP",
  "key6": "2W5ouMyfj1zwgpU2h5GukotDqS7ssDtfC8sSbXRwqaczVy5eyuZGfXXSoXqADgf5aYsBTtUgkDD6xK2HqW5TVruJ",
  "key7": "3C3mehpBc9XGjZRcQMeGsCcDwbCbKVyiiqt3vADbMtGHy974uwSUvMLwd7nWzd6N9tM4cBDvS4GuQYspF1nCLHbi",
  "key8": "4VnzFumXA2HizpBfchnVFpfNaRo8WD5aMnKdT3tcveo9rbMb9dxdFVssbdZufXoq5ZyGmgTYPCQLw7npW2u5HWi4",
  "key9": "2veKbKqg9pAi1FYr5QSow4EybE9S1jvchZrfEDKwb3AXmiRbw6nYCsVCdTCfWf3kRyL7aBMAJwkqJev9i8JX9auf",
  "key10": "47LY5UmqTu98vQpnhX7zDcnijJ2dukQiuGT2MhEaJprmH5MaQTcTjEkz4j36exJfYvp9BXsZT8bqGuSYEPi79M6C",
  "key11": "58cyaZUqLt7XULniJjrhFGQbaY42aZqtRgxhbwskTgpMYx3o7vmUG6MEuPJkYpdnf8k25xychQCMJjLHErDKmhQV",
  "key12": "3Lg4Yg1MmH6zp2YJsuCsdpLWnK2wMoMc8mQPGnA19RF1tC9qZwgdPM6Nsoeku4uen7pDAFVUChMY4J7ExgLfycN7",
  "key13": "3xAcwySDwxiG6kvNv924WX8tZQxvt9XUvdrJio3jPJziZNwLM9d6we9BVzP9C4hskiauryrXseVgxV5KGTUwn5Er",
  "key14": "338USbz7dx6gmBByudzyPCqh1PsfRxuXVAkaDH8yga4y2RgsSciAfUj2CZ9vkzs8dP1Jgi28nvoFQEFWepqhDmt3",
  "key15": "3DQmV4C9o2cfJVuSViBf7eMiVd9X1RS3a1yTsVwWH1FvX4nAqijbLzAxiBQKh672iL3Dbgrx41oC9mQ74VggsEfg",
  "key16": "36TgouYEPDaqGhRGqLXnDUsvcNkxhWpwLP1ayvnm1ipVCxZgc2et2gGbPYvjGokheoXPP5iD8nCKriqMudqsvwis",
  "key17": "2G2FKPjvfuJvSRUZobGq82NdmticR3j1MpFm7vwWieBQcSr7wFaYjFDCytY2Qb6x4mq9kLUVi9NLQPF1UKdvbNBq",
  "key18": "2tb2UWRnv63wbMuj82uxqjRXtubXh51mtB6vNbx7ChcUZNEHzSTqUGKvgMtT9xNnKGFaFaCCKtXpPiq9bWs7HhjR",
  "key19": "5uRxrfAJ83enUeat5atBMJaJf4ujLBWwDyDASbyLgZozFPx9c2TuCLJ7GPoUXJ8tDxXoAVAhsEgJp7Boe1efbUep",
  "key20": "4k5sSAwx2czb8vwes32WZ8YAtf4tf8XDrHM3J6Q7hejsQRJgfUvHzwtaWKNidcHysG5BogPKgoLwMSf2FJzRgu3k",
  "key21": "B5ficf62cHZrCUaGvqjVi6p4mCLsNkduFiqAXveMMrHia1pSLbn7MTMtW2fZadt4Bk5ZC1AX2Vp5J6WoK14vUBk",
  "key22": "4k5k6so3BjM6KmVXwLfmUXd5U4dMa3WMjwBevZQmBc4jARJrVaxKD9Ajh2PhqvfzwH3kVvjEU2PBZUDj6Xn3gL5m",
  "key23": "4GMN2w68BQa6acNbT6acCTjVacFEQh8ncp1BsM8iKKjvGiXBePnu9bcni1odLobMbJQ7cdZtpkzkVucnmjVTHny2",
  "key24": "4ZFvRroLXcJgkkh3Upo284GNaJzXFwyrWAzg8WPtTcn3UnsXVhHmFRCwZ78ap5NdXzcheqFXgCXqyinFtmNkG4kk",
  "key25": "3GUc3aXLwNr3dXQT5uYG3nnGB9ZerggAg5LC5BFUFvMg68CVW5aWtjREmS2Ey2yBbTHxS914MnmwKfYpobLzHbe6",
  "key26": "4ds7csgvfGm1XMHEUzKt3Nhs3DenUG2UUMnxVeJuB4uhPFEE1LjQnWeKm3ep6z5VUCkUmR3BQcvA2hhrEKktV56d",
  "key27": "4M7QQ3R8KQQpHtrX5uHXzriuVJe1xm8qQWCWEbVSpErhDVkShJu2U3cYmKT7YryCVwxpoZCMRCc2iNLrZCDkbimw",
  "key28": "4VHvsmxU29fLjRPQ8AxCsWFPcnLMEmAKSiKzgxr88s5ZGGMTaQhtFKSDXSM7wn9uKZRLDghCKGnt4Q5dNy74hrhC",
  "key29": "4oowFgqAZyMhcee9dJ7z81uYSL9vkMQrn5JwqpY9qhkvB7zV7w4sccviwtDx8c6MzefW1pqVTgKmT1CbAQZb7CUp",
  "key30": "Jox5AJhD71Pd2To27SVBBzWGmN9NB8Fp59fQbQ8vJCoKG1MyQcLsUNsqvTq1ZtnL1CDN63ZJFLPQTDMz7jHKLh9",
  "key31": "eRVvhhMZM9iVNH8xEDa3Pw2hW4nELsTBGG5B2eK4cBwb6TULYQYnPkcUC6zkkYDB1iLaHazC9uT9SUbgGZraS9A",
  "key32": "2dwPdg9LjdozsqNdz8a6TKLawDv1jL9Uq2xPjWcmR7RrYftTu8pKATPu1emKtrbyHnSmQgGztuHR3rn8HqmngKmL",
  "key33": "3wPSdiWT2sUC5xn5cVFgx5n8rEWUbNs4oUHfvdFxLoQzGcZdEqjnP5MvM1oSQmL9LGaQvQcs3wcruvLV2hZd2TzF",
  "key34": "3QeZUBnviTXSLCcBxejgsbYheiXzbtJRKPwBeXmwBczFiaCgQUx6YjL5yUFxkitFkteRiZNZypU9thcQuDUB5svn",
  "key35": "3uhTsoST3pbDfbYjyUzyEtyXzLRjS2h265NxZsfJta7R4fVbS4e9S4cpxtXEkBkT4BNSB1jZfvr3Men9nBLTnqvH",
  "key36": "uuYZE7brcJeniLQnkTH6eYkKyyC19YYjQrywPEeTaxtLZgDXdsfsuWeESLggLsJDYvBsioE4xLdBzErNoMbd4gA",
  "key37": "5LfkanseosJwz9LvPYqHKVdfdBn9uTh7EYqgKBYPbdTuWmCVoATERvbzE58Qg8UF9Cdq6U9Kb5EWVDJnr3Lu4HkQ",
  "key38": "uezcVHisjqKk5xWKxoXrMBjM94d1PwLPS1okMSXG4Ca9iGg6W7uhZe8arggTAwFxZSZppVmAtw5P5ae8pPUabqm",
  "key39": "2vZ2LwZh6CMp95MTNh2UHVbqnqDT2FrZUcaMXQgn7u3F95FDnQSNDrDDyJBWFj2eGU78L8XoKkedX2Ac45MZ6RbJ",
  "key40": "5ZxBymgX25ibKZCwgEdBg3YmRagbZKA5g8cn2PZYfcMDZTrunVjLR4o3sxxwvoCfSEXtXq1EaNUbAQEkromKakk3",
  "key41": "5Pgx9iG8fRVixHeB8qY4fv83f5JCFMvMDFdZNTett5NT8rPnURtFa4SeWPTs9gQhENxnGptyVQsaJXgs3C28MwNn",
  "key42": "KQoNt92SRCqQamDzzgjF1vR5o9vwrU5M4ugvUjQS84cwwpwmTeDWcBqwSPiRWGL26mvEMJMm8yvkMDXXqhcqX2W",
  "key43": "5PVoL5pSykesbxTaZCqZqop29XMiXEFpqMLMEgU8LWBXtywP3pMTK1yRu1BEDyL5KJuPdVjmu1uzzQdbFs5Wrfn3",
  "key44": "5dHRdY3zCe3i56uCUx7vReb5oAZgfhkGTVgF86V2jqAnFmWGJvYG7GJQ6Ctom1JT2yt2ESTFYZcMGmyLQVW2RR5P",
  "key45": "4WUdq2A6jj37gkNfftyx5pTXJSNmJSctx1w4nGoCdeB895Yma1yGDiuTsV5XSxQMsD18j9FpgqHmCPryqUiAycLv",
  "key46": "2HweZpv3rrgBmkK7LV91VJHXruCCM5vFLfKyD7KhyfBahAc3zHmyCfwKRW6arX6LpFN6AVFErFX78M4txtMGLYKD",
  "key47": "39Qor6rdReJNs4qAcW6RZ5nFGoHYE8HEGSExKAbP5H7koHkawyA6AtK3i686TVbp86Yjr4UffcG5McQnon3h1KAS"
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
