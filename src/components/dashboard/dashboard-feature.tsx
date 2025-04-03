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
    "63vUP8LCu21CQqMgb2pok15seYEu2pA4tgxQosreDcEwfGz8NJ5ANQf796Q3D8gCHzWwLsqAqvHt8xypYx9q9EC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nSzGtYLMymSpED9Pj9dKdcNPPKFWNJeFBb67R8ZNBkB845atSmdfKdaA7GBGJtu8dFom661FakKBSuRhouDKMkp",
  "key1": "5wBFUtVJ9WHaprhDYV5SNAzYEbBaoWvkVxmjJbnW1cV6qdFG7Md3eoA4D4E5xVenxCbfT2455kosBz55YEYtYZEM",
  "key2": "5wXbn7yRjjBaYzV9LHrLNfjgByzvybEHFakXVyf5CxWtGTcJW2g9hvc3ZB6X2rpyguX7KFU4Zt3ZMAa7DEjE7YT7",
  "key3": "2dDVEtjS5vGGP3ALom44csErnhBNV9jqo7ybsWTupKhJg12aTT72HRKVMxyaVecvJHhfn634eUKU4TesndpubS7F",
  "key4": "2NNoBLHn4SoZUpMERWXfDfDUrF7fTwe7Zc6oQD9AQpgQgeYW6jPAL6FpEfD5W9PsZtr5bBrcmXZ7UNwAaELtEmcU",
  "key5": "3UK1JjcbUJjUA1DXQNPjGuy4vs1D2rXE4rdtYWbxwENW4JRnxGtKVXidkeKJ7YuptnEiRCzaAPXDaswcYWgBwQPg",
  "key6": "5oZwUkTvj5CykzAG4poDhxztTqWbbH3oU5aVtQqLaVgjvwVkzuN7JnhPC5BvZNT8QFj5n8Fq8AsSo2xNhzTGmyrb",
  "key7": "c1cfMCpAfMwpnmVqDMZpmMXXvNg84LAeGWjpjR1g5bcxr1scYYN7Kn54sAFqjTAJw97EwRYoi4Y1hr74UEQaa77",
  "key8": "67dMwaLzRW7oXWreuFGJKKSysQYRMqSwcZJYHPtCweCC3hMux3Bg48QHGzBC3J93CTfHeaawm7eh9rJ1Dir6Gvge",
  "key9": "ysm9fwEFjSfqin3mfZyCEuxgqcXyawz5R6Lwwqq6d4djshmzTfx99QV9PoEGt8FBxaUZ7hNj52UtJbkh8REeYra",
  "key10": "bn4vwxq8U8ArnW6f8x35aeMrzgnUhR7b7VVozzTf3b8Wp6Rj6KvdzzVQmKR7u3PpzNJrRfF2qfLnnfn2sYWyjEE",
  "key11": "29wj85iZE1feMYbyBxH2wCLkKGNnyi27WPnmKccakH9UCRUYKm74kyY81dTigs7VkhVzTobT6eKMBy92qcZKcTF4",
  "key12": "4Y1qYxM8RCyeStoA2xie9BGHKAfAFMHTAPeq5gVF5D63EVgjpKiz4AYsxhzdRtxKyyL5RByonKXh2Uh3B3tPvo2L",
  "key13": "1ciLz7K4NqDDigMUxfDAUcpSWcxeznDvK4v3VWVVmexGHdZ3gGuysfv6bZvAG8cS4eE63afFYaiSEvGZNaCZ9Xm",
  "key14": "5EhvJNYNwfG8yJYMfRzqTEtYehrSJzbD4okZFyejrc8usf7HphDZ2yNXgjJeYyv6swxyw4Y3MmYEzmezDkTZME7R",
  "key15": "4PNmxGV8WPA94TimjUgmhsjwwxmFLL9TiXSbuHno4WKrk4zkvNpsr6JoDt8GNndndpaa8YWy5ToFwGyvx2R9uDNP",
  "key16": "sfrqu6r9yRvYDUG9ojgb3Jub54MtCies5h2pjNEsQHv2HNL3zC3bTk1ER8D98DtAwEZfsnXTxSgVGwzVCz8LMdB",
  "key17": "2TNw7hKKd4mbmNfugyNcLKwPCkFi4SQFjjHBX5K2cpjqWSG1RokK3zNySUnyfDCcQ7GWT8r8AaKNW2buWNKq1HJc",
  "key18": "3jH2YFb3dYskTBYZCbVqQJV29BHPBr8U7bdQUuiA1pp17hrPjBT8RXnBCHt46AFht4VjTxDMDW53tDPdSsfsLKJZ",
  "key19": "5F36jTnTTCzrqd1gxPTfnpBxjb8uEFSgP6EyLqnAv1QJtMGoTCNwab1LhczgawzY1sdBKD3nQt8AZWuXkiAZArnL",
  "key20": "57VNmAGQcBU8vMeQgg2VTN2LqK9eZzMgTHTRi9XXiHjbXymdqcuacziaQhk45nuvvHmjZ874SiGhfN9GQ9LU5myz",
  "key21": "2aZyeHHmA4rkw7mDuq9kbTyhf7v6K5LpQ6mWEct9hst4K6EKQW6TyGSLZRE7c3ziNcX9U2d8oTMJLvXHxbWGv54m",
  "key22": "4Zkz1CtnhVxVKT6T1wiBbyR8iafDvLK4jK6nRdZihA72NuDchptJgqD6zjpc9RjFcLxXBdE6fNmUfzPDcSU7MXru",
  "key23": "5M1T1u2QAAgt5nM3VMvHdyR7pdngLkxUqJ4fpMBDgAx1J1kEV86RJ1XjuBbxt4hWsAyd5oXttJVjWtZMN7eHqHiY",
  "key24": "2KXy4WuVAGs2begTg1eAFot8wxR94LgfmtifGXz2RhkHC8WYbz93pdmkTwQPMpcAk75FKLmdurLpWeKPwnpyrhD3",
  "key25": "248U22s4RHXwPEC7BgtMJPUD4aHyw8bfU6neF8uiiwCL2aoXJKGAfbVk8CS3iPJiaUkCeMJH6QaU64XwBq3gwusP",
  "key26": "LGNhxNpC3JKF91efs9jWfLf27kBcZF6BUKQRDvbwzWzaMT31DHizcWArDk1CcZ7a6VraTnVSVkJHg8iHQSoRZoG",
  "key27": "4NdKtRtqzpHvxJEKTBbW5eVdUriXhcFkAGjwSzCVMFKPygA98a9Ho3mUNNv76HoAMTmHVXDSQT48EJyLdfCByjG8",
  "key28": "3yDkFMheq6HYCQgzVnzXuYwCShAMP8w9ubcJ6qd2wrR8dzqLt7CJpPmbbr9kyhLA1H5e8LbUmgS3eBWs6R6disnS",
  "key29": "XVon6CwtYeuoQEpVpdGmuFBL8xQvA1HZ3LWtsUsHbS2EtfRz8rdneXqog5zXyNbEEutBGmMVDgj2GADUSkRxydV",
  "key30": "54UPYCvshmkQP3nsxRwxfqc9cMF2RYLoFRsJ3S8g7X5tWuVmzX1nfv9T3LMzeBy4oSWxFNktMrd1eS48Y5ErRitT",
  "key31": "4f7TZphM5WWP4yJs56vzxbogBshEcu3nmuLLppeotmA2NBdrZ6Mc1zoyHWLCvTyxSfbBt5EVXfsHXicuwE73HGcy",
  "key32": "62kE5Ep4dVeuD8YXaEWDL7aVmLu3Ejhn5QnU7zSq23EnpY72zpqDT8HQQvKPQwqwbzSY9ryiASnbA9WoiGtA8DyQ",
  "key33": "32fg3rCWUmoaXAvmBC69bRjg1uHtQHaCc4Q5FCawGzG5izMHvjEijVdakPKKH9C9JTUTUPJfXo95twjNRTWsedwd",
  "key34": "2f5NNVhBunPhXWM2MjZGBkGXRbMzXDAk3Tx7JDmpfAxNdxNG8o1k4yppXGAoVfCmycjdDY1v36mJca5cXxS4yRpx",
  "key35": "64zXugHRyZFQEMDUHULUXVisCbgCb8RXeZijLAQRDQas2Knjpk8xQxQeMMLZhkyrcY6ez5foUicdGriuEWpqSmKN",
  "key36": "DiCa2iupTyrXX1yz2qhcruDW69vRm7rg4v8fir3GWG5mKkFZWK2WCTbCqFbQWJGwmCNU6FjEZsbHEe6sjKyrTCT",
  "key37": "2Ro7LWG1JHPfDeJWHGuCbA3KxbaNxt4m9PeBURqNNtRtGDuHyfWc9hwozWhxQeYi4pjmN31HAFSX468uvuHjcSAv",
  "key38": "2s2HYQT3GMK22hyyrRoxiRfUyMiX37mB84PaRioECsNbxaLEpG6X3N4SLWMtTqL4hwdaD4HU79YCVyQ3wbDXGqie",
  "key39": "4GcJGTZU7JmKyiYREEqGpzThAsQQUGYurPfgjAt3bDMDr2dKQmWCpmJicHvBAdj5yHamwbNqRhhTYpDf8nwZ1WAA",
  "key40": "QmYHKej4gaMBooovgbDJGHUkLmEH4gXrqExzdMshsk3r8bUQB5AfkBhn45xVxN8b5pn22w4SBp7AbkDNV36XSEm",
  "key41": "ParwEzzXgqRcEPLvDt5LYNe1hLt8TeKgaQtgVWhBJjvFaFh4rAbb3mYTPPtd4tJFXmCPP9H6sFbpvgP7kAnaB6t",
  "key42": "EHjDFPrNP7KqVjHKuXzJoVB4kY3A2P2tbBTihPYKcXxeGpTHYrUuVPwr4iChteEfTfb4B7eTQkYFn6ZVL2XgQzK",
  "key43": "2iGsJiEgs9FvDLPws8psjvhmqUiTLdhoz5kax4632v7twudEr3msw3iXFjfntZ1Z1hbKz2BtXsZzZTvaA1E7A8fe",
  "key44": "51NWBmA5sXUz7Vz11NiVug1bRQiGWb4JMeq7aGu7bz3oAphsUWHwFHCjF8NATGcaM3CYJNsWExmDVD1Hk2RRzwqS"
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
