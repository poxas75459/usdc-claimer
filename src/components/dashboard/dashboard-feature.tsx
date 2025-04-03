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
    "4d1MXD2QwB3D2sqsoDX8BXK9T6K7Q8ey1aNa2iHP6sDHobqp7tNWFwPchbfCVj37ZLgivQD3rwAHTEFt4ZZe6gMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "591n4wXGGajobuW4B8zJja2rsPPZW5cSoKcepkcjnNGBHxfQ3HTW94y7283tsKs9fsu6jtu4DFd9NSNNmzSJ9XW8",
  "key1": "5jweX8eVv1pef1Svq5Y98Pg4eTdAA4kJL9pBmkPKi91pGaWLFLa6Ky74eAUbxRcyFnuvRTsDFGQKBDvuXvy4fByb",
  "key2": "3j47cu2HUxPLjEQtANpc8x3ZJZzHfiipo1ZFNHQWqzY8KwGLYuGnsmdGk8cQpXsv4e1d9TNLBSQpUcLVSDgFgCqM",
  "key3": "23jp5zvZZNfXNXygDcKZoJMat7222KTPY27mRxSernHqXuB2S4zvqvC1Hgwkx7eBBkzPYCXXVudDP2QuEtZgRJck",
  "key4": "MCQKd6WYr4zoh84VHwNJFpBo2q19bfsyLnbwit2YTUbkqwuj5DqwkJ7bAPSo7tCgHAi8YdhcwwHq4KTgxhC3p5o",
  "key5": "32Ly2uyPp2ERkRCZGiEcpET8DHFFC2c8rSSffSXiBd4xVWb4VLR5U2SkqfeegJS58UUDQEETH1TRjr1H7dtVH5zN",
  "key6": "AKe53rRsdmRKLzUkourFqgxwzKiYVeHYMRS38H3CBtFRuRk2hctyXK2YLqxQq8UKCWY1agK2iqBxY4aUCGfQvZz",
  "key7": "3K1ray2A1hGcsLnNNwGMewrMBKp5vUiQuvGUpQc3QarXkNH5ky1pyESGEDe1qTAdw4nxKfEF1ui4VfbqHaDcycQX",
  "key8": "cKRCVLgkWbFi7stN9Bmu62ipgxjR9MvESRiQ3dXxqC8Grx6nRfFyKwevi46XaVxPBZDv1Ji7ecoFoyCVR3W9mPv",
  "key9": "FXd2BExCwXNGBcVB75UzpNk2Ldiq92j2VQJaF6hYBxDc8QNe9gsFx1eaejiW8oyTczmLemTNoPoy2JQEEc3t75Y",
  "key10": "5v1GLFwGep1vsE7o87MGSVYXYTxWGiYsQJN8g51c8hbWiUMXabr9J9j1mdBzEKvTdyB9eXW2GVq2euiXTRy1hy6R",
  "key11": "4qoPQ2TqC1gBiBE39g7zpCgAxAfzPrwRPPj34PEhLs3okVCdYiJiCAok9iEkTuBFXqPmPg8dfNdhhegs2MARveRn",
  "key12": "ixGceeUNbmT6jViabvPQArnn8sUq31inNqRGAZ5wafXWEBaa1B6H6Lvma4W9ADEZ8yKgPvAsSq8KGvUUURvqn4Y",
  "key13": "4enTdwz8Q2froyNv53nJURJg72XBrqhiUFVqYabYyiHFddhHcrgEnNmMgvejnPpUA6MeeYc2pKLEzZJXuqPa6Pfj",
  "key14": "2QK2z8efR8Md9FuLmXb9o352vDEr16ECS2KCPx7TKdfGxDcAWRS5kk1Cya6qqbjHw4aGEznus4tamwSEjp2bUWM2",
  "key15": "377MztW7WComAfKRd8Tw38rsaH6SP7jVF7Aug6NCBnvUM2YrRWeKdUABUiSmshgkbZVFNFkuWT4kPygmEqYEsaeS",
  "key16": "3mytELUEJGPtJXmwb7KnrbdCa1pFTusQwhycZ7NKZDAKKQ7R3FVUe3drd8dJgmuuZJC38tQGv6MHiGqTpHYAbuwX",
  "key17": "5evUAi68TkCpRWJAvfXuXwrTajfVXKndqGbbJno8qQXM5H7YeDW2d9QxSEyCYactbniUFMgg9kWza2csjkr19RzL",
  "key18": "5z3bMQNJxg8nBr7bxiphfzXNUsZrm9eGn9TGn7xUnx71N4QgbqWrwQrcX3HDbcWyJYQkE7Nxtspr7uXZktEiMaAn",
  "key19": "AQGarfYhBUw4UYrs7JdJuEPMB2ZN7opxjmXaGmqiQv74nmMfsMqkYGa12joPUJR8ptJPqoCMcJ4kGqUfhKtdGNn",
  "key20": "5RCwun5Q64SUVmfU2JX2Cjr5ns6wkb4C5vQ9z2VhESU6Qz8u8GPU856fvWyGw4zA2wevUjMb9j5y66TYDswHryWn",
  "key21": "2tg1VLhMzTnNJgm9KHmtJeyfaHy3sBd6wReeG8jNxHVbnH59yQ4vsNfLr4NEe3VQyQeKiTZuvQHYVHVdsDhAxFRV",
  "key22": "3KtgsHab5gxyC57sSGsneQh5seW7J5uB75eEGBDt2pybVwG4LAtdy9KifjPavaNxDh7YS1XFpuA5tQrq1nt3Cpm6",
  "key23": "3NM5uVLtGgAQMjvfvEExy88UDod4u4cLj9QUyPTkz8TuDUXMMQdzmaQJCbzKNEY6CowG88sJxquJ6M3eCWJRsTgc",
  "key24": "59fZBh6YetgCacgxWjJKMxcGccPGrepQc4Sd9wm6hWBmgmy7TnXTDsru7SUfQG7izNU85zAY5dwXe1Cvod8WGNHh",
  "key25": "5QdYbyPnHWX1JsCwjBmuZaYEq3PVK8vWGqQayKS6Y6atcVaZZbPRnyYVWax8rrrAqfN6GQmJKZuYLV6cUDss8pox",
  "key26": "3j91UCxFpNC7CMMaPboNx3dvnhWFRBjfaFuWshHNtrNkvamuZyqKmtHtP49Q3hqZrd128AkSNypyNdfRboQrrqiE",
  "key27": "4xNGpjK3F11JUti2qky2qtxPwBUpMsFFUyEhjKHXR59tji9FqwvbGRzvpoZEL3gmFX15XWKzpTUeYce1K4cNLrbJ",
  "key28": "34719eFZ5qYojPC9tjvHQeP8L4KEUhjQsLDK9fvDL776PppT2urf5hNh9GFcBvy5q22YdQaA5TAgJH4umt4jZjnK",
  "key29": "2A5iUVEGuyYod1XAdHMEHVqb6TZP6spc5qTpFPEtkrXix5DVpKNrNDFyAaEz8NzaHu5QsqYfr6JZD24YejEd2BTn",
  "key30": "5CY2oVGTojyXXy9Vz7fqp6PjtyZuKeGvL9vHvQrvoDGNhFYpjj53oaib97bVTx1BvtrBrkbBoDNKvKxgqNSbfYxM",
  "key31": "31UUYEAVp97t8xPcgN18EEEYK5rqd2DXm53GqQ1evKVijvdERZyeg3WLeghJ833RU8cSUkjeWjpy2wPyxbgJbPX5",
  "key32": "5XH61xQU5tmhzr7bkeVXVovD1i1JdXrbWE2dYvxvow7J9N4s2AQksGKXg8TzzSYbgei8aRUsCUAc9pYY9SiMpY57",
  "key33": "2QwmSQ3sLiMWLLjPhau7NukZae3MhSXVNXsrHj787TAFCprxsbhkjcumwdkZrSquxJywVV8QWieWiLico4VhmwDW",
  "key34": "4JFqL5jSNSZ8tGtNfgxtWPswpf6kxuedjgPo4iqNFEUapYfi9GFz155Wu14nYoSes4fgD3cAZQNADfZYyARCNPhq",
  "key35": "3kJibXi8FEvy2VUBu7RuAxK1898LpRbf6kTMLpdZubzfWFvcGu5LHQE5YADA6oVPkQTpyK6GGjJ7Lvt4LGYPk4aU",
  "key36": "2sEQud2NAis3Maod9qAaS1CCcqYQgti8MCaKBk33kvSC7BQvBFMDwUXcXzLYaU5X5LgLNXvGbsGJiN5RqhPHHwRm",
  "key37": "2PbS4sWFPnG5dUVwddwyCumx2acXAUB2nvbgAvYUGggrtCqNXNAd1cdJkYAVsw4km4x4gMNghK9uASBb1oQC6tit",
  "key38": "63eWtB56gSTSC84b4E1cHiYQBi2Cov9tMT2Q6BshA3rMQzq2M1m1Xe5sWPVbLbCYEi1kkNyKKDW8murFfhQL7yUN",
  "key39": "3BhWt3vB1htJDWPPaH4BtHHT8rQaKcxfoePapZQWfu2cZkdzBocUqvMTxnRBAW7963vJ9qzqzuLLU9jNS88E9FMz",
  "key40": "4W3J7NxmWAfZR7T2e81z82Bd3kFhCWFUUKNdGCLycy5r3NbpMoqmciPd7Kj4foSesPJiddW3TA6Myigc7VAktU7K",
  "key41": "4XvYZGbrn9phXgqNF75yz7QrDSmRPoTj2xcGbSJLfXTTyMumSz312fQKFjccRnj5C5NiKPE48fhcnFh7M5BgxAps",
  "key42": "3KLN5Yp2J8cbBLtYgNhKBrZewibZZfPpvVLFQCqv8QHwqSBM9JgGoxbnaZRRDhHGAtudShcH7tAEcbpHMvb1Enpe",
  "key43": "5ocCBbqGJhEqiXr5i5XmfunaLHF1HpPtM9Dfk5M5fMwjijq5nSPCg3nyHw5ree5u8EunCJjVmJyJj9hLSd5Pqt8W",
  "key44": "3EnVCVT18B8xJ9fXAcsa1qAVuCbnVq4VG8rabe2byaPFiCE1LPmV2KK8gCBxBbnZgcGy6P424DsGtjtPZ4VqWPkw",
  "key45": "2JBBoBe6rdyGXedqJCg6mYBLdRRqWZvwgedkECkgqxJgR4HBu5Z9TtTFFUpuUL87cFBNW3nbeXcQWLNDXTGk6e9f",
  "key46": "3Jz7NbzVQG8GoiwhyKGWDmU8PGwz6jz96Du9HatiRucJswHKaQMV7wJTx8x6rs9sgXcAomYfD9XPsgMxipqb3qAq"
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
