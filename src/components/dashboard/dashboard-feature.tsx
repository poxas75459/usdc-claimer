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
    "3p1HSdthoVynQmjFnR6BXeqcB2RAEkRN6P5E2tWmwT7kVe4LfmBvbC7yJaoQz9wXwDM8t2i24XjtELpDAtHimF9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TZhHtByfvPRwsSf5hb3mUCM97Nvb5AzoJFW6MvZQjuAoHHZ9ejwMbapGzoz6K76HAjGgWAdis7nUDxm9ciCQmpB",
  "key1": "5csP4UwQkrzmjGHX2vjMpH3LQxjAzqwDB8Y4jcpwha3UDh3bCHadY93VS2L5xS3FPG96a9wtZ5GLcgLdhUT2oPhR",
  "key2": "5rM7y65Rsmwu5SGqFinwfPUBs2CReqpT7kQT31RFkekmxSF627KQq21sHAT39hdQvy8Jhnsr3jvpMeM1jHmvXrEJ",
  "key3": "3fKhbLLB6TUcwrsin48Egd9WrecfHYMm4ZAMWS2tBA758B7XqK1wCkmnoFHpcFh87R4WT9hiEvU53sChX38LJU8r",
  "key4": "4JSQFFoEnPas8a63AyUT3rN1jHBN6XGBpVvctvjEvMPKKpptJchYRgNdjBrtHeyLbeD71GtcJj5wsfA8GgEWJ97x",
  "key5": "2Xg5PY3DeiqUPAUTeffy6DVB6WngbmQFrvwbNTrcWGKNVUk5PRkBJs5hvD8T48Lz9oQVLRLJM3JLX1BKQ7wgpenK",
  "key6": "2Gidh9toGN1WfnqKxQ11ja1mWAYasYaFZ39Vx75vuJ3LMTvieVXZBNTPj7kfe81ZXvr42Jw6bfhmt1Lo9BL82N4z",
  "key7": "2aPMv37kKFhVdbkLag59KMFfo3v5Gs66UqaCmaPaxkrCCuqXGbwaTpfZm89VhK4oU5uKycZATuWMbpHMfHGJtDT1",
  "key8": "237jHmgnjHoS76bVrkMkJRfycBv9pMz9qYLyR9c3hDBh5JqUvXMsZAAN7JFVEFoEEj3BtZZmmAVTFAsA3DkbhJjK",
  "key9": "357hFZbPjZJBY2x9pTjwiMKPfPMY5eoEvfKwVzhVseZdwwMX4Jem7GwiBEF3ui1zs4SohfGpdtUMU7yNFP4zrvd8",
  "key10": "4vg9kcQTfbYNsjmUpXLS3CypLtdaC9iidv5qchN6YYaBZmD69TWxxdoXkAXRhfPS5DMnCCch1UtGA8snChPwUz3T",
  "key11": "5RTkAWr9ZaZ8gADyQHZhAXnVLBCGjFmXTASafcTWTrCmtBT7xroh7p57mbkwgazoxASWqqfrdLYsa3HvZAP1BCKP",
  "key12": "5dPy1ijNHpPN8PGU4A5azfNHD9jGb3PETfnmCwrfKmqqxPL7g9iakTCLX1d9in2DFXxy4gZBJkcMwD9Aw7QpdtrA",
  "key13": "5dPUpAYz8SFpuKEHZKU4dX2q76wndkxSStWTrgKjLDVkMA5crE9BEEWuKgPbwiJ2esiDnuZGVGzxEBuWHt3PSRG8",
  "key14": "o6BSKGdJPPsngjZoGDqw1XEXiTQoHgfcQHfJQPQK97v7AF6KsdGn584Fom7oRdPu7EDHwt3qqeWCXMzh9vmoiMZ",
  "key15": "55PmuammvRF5F1QtKDkr6HS3n4y97TjuqwdNj19TKDmjtGWQfa46hCQRg8tyXDK1QFxkjtpnLRBEsjh7bYx6xjtd",
  "key16": "3ey6nMtzf3YwggVC4xraqM7r3Esm7TFqLVdPXBit1mAnRiFsuhgtsmxbQA1PEd2WM2nPy91mBaLjqg585L1cfF2P",
  "key17": "33tcXpUMmXnSQHmpzqJ4vwcwfwFwwdn2UAnC1PhD1iZtM2wXukthpuUva7iBHnyLFX3CCupG4gYryp7PCvTQa48x",
  "key18": "2FTCY45jLS6ocfd3pXTt4Danyq86b99471vNtkp1r5KZQQW7mRNJEmEv5Hxze8s98mrkA7H818swNw13RhgCxEwr",
  "key19": "22webMiy613tGMmgN9Zxg4Q4b5y9UMMs8zn96mKHEd6zK4s8UkjVD5xpUeYkh7eSj7XXBuxJDXwZjdyS2SHUuC8t",
  "key20": "3R7WDNELqxS94EVzCWVcbKZ735W6nYLd9vMJvEKhsM9o97s8rPbCcG5FwS5onihuaeSHUu7gurTjs6TEJJ6HtsWe",
  "key21": "4vjRCWT8PtHWA3eZ721W8TTx5YEwJ9LebRUbpmD96gBzTEd8bm6th2RCP5215j6BgdDF9by7XT44DxTFcGig4Pbk",
  "key22": "4yJzibb8ncWyhV9d3ERPSLBTv8N23ft1k15n34wq8mSrr8AVZQBC7iSE1nKESQmYsyEU53ds878EsnzvTdTakwJp",
  "key23": "5asebnpECGppVYMJdDM7yRRcaDdQbYMuF5neCfdTpNN3Hm1C9bjj8KQzNoz4ZTaR9BjYRZcRM2Xm3jCNEqmPu5Jw",
  "key24": "4ayLGRNWhmochVVFYh5PUtGmGUmyUhALYgKUB4zyws83Q5KoGXkWAzwfQZx3yGcDewXjGwKtqrbFEB4srPsaD4F4",
  "key25": "22cfFcBSGjTZcASDp2dstg4TomkW2DPekzK2sJnWXMSaugf48KPioWr6X9SwfzcCcEvyy6dP9dLv4Z8yAwytoncD",
  "key26": "3kAkATJQDm9otAgg7jRMjs4DCbSbC1FxnKGduDoDQL36zfPXyKuJJiEBYndiY5JRAhnHp8MbYQbZHqxrUoPNDNkB",
  "key27": "sJP3zXhUz58DBqySn4s8Dz8GaHr7YszVia6XzMWJAAQjcTXkmTZbLHsER5CSAY9vSs9SfQZKWqgdB8qBmKCvnFj",
  "key28": "4PfcfL7TKp5MEAPGCo3xnMSjXRnGTkGDKGDhN9mgqp1WBu1CWjs8BkzzfRQzW6nrwKTggvdx2CpQRnUjkUSHQvef",
  "key29": "2mcXc55aEfLzTZYkozLVm5Y1eGkcHM8uNMpmYDyBiT8dTqbe2EDwbCvXK7HQ2HPzUjLk7LfY6zm3w9FQAgQWsT5r",
  "key30": "2ZZuofJbTK9LC12WsS7MDS8MyaDtnVpnXho7b8pj7hgKzi32ihr3TmXZD463y4vLK5kHPuLg1Q1f3HyL8UgPFCjY",
  "key31": "3VZdMjhNtnU48qAgQWwvVaXms5w9VexZVWU6dAGs29M8DKnixBFSApBbFsxubQheDg6sv2XZp85mGSSLxKMrKU83",
  "key32": "3gySJdSfJDVADkHg8SSmF2Dv1vtUqizhqkcvEvZBGuof9bYuFMZ3AVfjFZM2GggMYqmtLx63R1sUZSnrbFSmgb66",
  "key33": "388M52STjG8a1CrBrkj3s98a6e14jU3iZzUpWAGTXp2qNxvBjiQWfRxp23KQFoK3uzCjJizWX9Unat6tvWeVoFC1",
  "key34": "CZcfX5fHB4LrFxyCQCtCBofgcwWEFHtaYs2qf7WShST6HNhH9DnxZSXxD3e2D2D454XrCMocsGyvEjKvW8cbpVf",
  "key35": "41bvoKd7KJVNn23CT4N6UME7oNzwvD1kUWhrg1oxLcHN1YmEjyaX3qKA8oto6kVBkguqXP9Q2VfVCGyZgT2Ax8o7",
  "key36": "uzy68QDohLqhN1tiq2k4fzzbM5M6RztL4Yf9x7N8mR4y16v8Kwt59o3pbVXYdHBY1PqKzh6HjJxKn9CN1EawbcT",
  "key37": "g7DQs3XkEKREb2WcHrJFVY9vvCVjwzuUJR3tRMjHNxRJvRfSjZsWiQgVjkcWARzHdaEREqtQexfQcnKgCYZM5s3",
  "key38": "4C2fgeinm9kp9HZ9JACSbKZaub3uXRkZPTBaWqw78QU4rLEnTuLvtanCLQYJiSegUT7bW3eciyy5y4ycU3rjFLzC"
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
