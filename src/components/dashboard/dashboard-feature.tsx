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
    "5La2KzWFXFdbjPYeMk5bTyXco48GzTdZuVPqcDxeG4qD8DERo8RDHYJ13bew9L7t2jZx8N4DkjiNb225driDdxxB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yVbVMLua29Lp9xfjHXUJe98ckoqLAkg1UMuvXnQyuHwTsLQSB3TgLKZMnEGfrSs7REWowTRJDufDqqyXazL6Z4H",
  "key1": "3rGZmawtRmoNhvYGX4kSs2B87EeXu17gYPqQdpFFcth4w5aNfJXm38KmuGaR1aYCMkDZovetQjWsn5S6btngxiax",
  "key2": "4EvciUf8W5aH8FM7sLEt67UQ23fowiMJJdbPgZhDXeKsKPdcwvKbE63ADEdVBHZWadjwcxHbUTMUNwRyRdZirQuQ",
  "key3": "2asXNXiyXZP6RHrBTS4bmEdfy52r91NbSXLEWAFfY9i18NMR558xDNZzw8dhcdAEh2frSetMwAMU3WnnfEYTP5vZ",
  "key4": "4WrroKmr9U4vy6JsuzMoAjcDkjVwYxXv9m64zgLjBZb64isBdudyM9VERY8eeH2HVmo82iu3iy5cPC5rq7A87DnH",
  "key5": "R6fHAVZkS1YU12k5q5wymYbwYkDRNUFMFU1xGNFubStb9Kafj3dRo2CF7uLtdiJqFygxjNdAqKzr2CPfUzgzWtS",
  "key6": "5uftcmJ3tdtbgxpYj8KvF3m4arywgiwgeiCSEPqKQsT3Td2QXTg8c2GPMgsaUQegt5LzDEGUkosp9X6JFYLr48k1",
  "key7": "5VNXHkjE9uBCrHMwQ7sD1hudVz4W73DVHgHjVjrTSvpqKukFdGhvFrL3D5KiLisKYVuXN3eViUnGeTvc1eGP86TG",
  "key8": "3xXVjVFDoBN1Wa4KiV4f2AgEfxGmofikRMveEWLMy1TfbXA9n9vrfNwHhbuDWVj5eb1K1B4Ns5tjHcmsq492mDhG",
  "key9": "fCA19Drgce2pYuQ6g2DPVQL6AB2A1jPdWqj332A6rGGoGaxTkC8QRxjpx27Gbqv3uPWiJr7MW8uNSbjoBZZhaWk",
  "key10": "2mDPxqEaX5C4oFNNxyJ1JEvbAY2Eg31NsSubsN4JGyoHo4Hr1VrLi94FCY7SNJNaGoSd6i9cCy8BdxzzkxQ3sMNv",
  "key11": "4yPc229sdBanEnLez3b3asDgCAJjUUnhzXd2j8o83oZMjFytKim2J3eJnC4H1nTw7YStoe9gCV6tjxRzD28khsse",
  "key12": "2UGb5e5UQP14vBVMN1sQH9pqwoYDtUKKxWYebeYNYRDsdAMXpWYWFNPZYAopy4ZYJT2jtLEcX36GCVBGQwEp8SNi",
  "key13": "5c3EVEENCViouMLRU6AZkThVpQ4yfUBnKRyMzZKxijKuv7v6xmYmhBDUdvM6WnKf3La75yaEWdABzyiuRUrZbLx3",
  "key14": "43aiyitzhBxY7TdSxBvLEKrtc1RCHGmo8Fe92aFmGVWeryv5ZXyJZyRYCTk6uo5xeYtbR9w56dhRPi3hAda6XgwL",
  "key15": "5rAZ3fi5x1rACRGXJjdpBFCfrfRapQKFKEVSPXVWsHZt4cx7SeHQ7DGeihq8dqXjdkZeX3VcQeyptE9oXbrnKcBs",
  "key16": "5UEFrzrzgEV3Pt1GBr3Q5YyfJ9ViyAMaRdSRR4KgN8gWNhGpQkg2gaVNyAuPSBA78x48352RvCZwRPMssT5pTtUR",
  "key17": "3Etm6W6FAMEBJ3xzbKLg2NzZANBQAafm69XmvNdcQSAaGAUU7fAW8ZeoxURC2TB3cCdXhuG7rbHCgNNeBqgXNzTd",
  "key18": "22X1wAEFS8WS7oNmLRSq17oasnWsnGahQDygKqEkGE9CH2H3tV2csvPsRnZ5Fdb7efRPVeiSb72hL5auHsrJghM7",
  "key19": "5zgXA1Ya7Ume6oWJxq5GGFEFJkqoBTL3xsZqfJXEw2dMnh7dYncS28TNT793MSz9asRciCoJ1BU4GA71tfiPeC8t",
  "key20": "qYfSSAwADUFPfCifUBQUi2mvbjvPoWh4dmpxR7eDpmJMN1Uq5tRWbgwV82WzkeE61QLp5UcYYFePpCuTSro3XJU",
  "key21": "CkTpmUQVmEL5TDPerKZHSUtHbTJ7LkvoXAzvGVM1ryG3DUUFvDr8DjEvJnctUYBPdeqoFmWnYn8qqRwML6KkCPH",
  "key22": "5U7KaZRUvbeQoWvSBotiueKiJge3pRNDJnkriL8QGZkNN2y7AERJaQkne5x5q8sJ5mr5LpPuiDVMCghh8bnvF6pE",
  "key23": "4pkiVVAjKKjmwqz3ghD9fQt9zDaHKKNxR6BmuAwUoe8LcGf2ZDYxn1UFihCnb8z73mCGH4fmCno4KqKgJwnsbUev",
  "key24": "5HCBLxqarhutzJnpUfuTDiGi6UTCc67oQpgP5raWpij85V3kmFjMkZw2JR3brNJLrpjAgxYB9QXxiRosGjbE7qPt",
  "key25": "3kTVuyNASQYfDk9Km6QupnQJrgaz6WFCpJjLBaUptg9RwghygbtmVoMVPrgC5FSqrH3fBw8FDREejMBoWxdkpCQv",
  "key26": "54KR9mEvXLXnScv9AAQvezv8WsbzUaBuas48JH4zNfe78LXJrU512wddSFMFw2Y9PNSHgvUkFojLffkyDuBT2M8R",
  "key27": "5QGZW88Q2FpVybnTuTnS9C1so7ho39aCrX8cZ747kACXT1KB8beC5rTVmW1dMkCpkuVZrcpVn2Ah1aRNQMTHrrHk",
  "key28": "VZrAqfDm3EKAy6SG6wsowhBuHALR2NDDxyb652gFWgNLFuwLautyLgshXCmKMhSkJvnNh5YDXiWq8FsejdiJM7X",
  "key29": "5qGmYytgerNzUz7cDgPrb5TnZUsnFs5QMiY7CHjf5XeJcw6wZHM4mKzxD3anxTSPf2X7nW6cGz6PZUWPx8Kp8nek",
  "key30": "3ShtS5f2FLNvoVoqxjGmVxy4buzFy3DqWy2pKug7HAvrAxSffYFC1UmeLorUdDV5yJZ3L66B3xVu3zKxGccwR28n"
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
