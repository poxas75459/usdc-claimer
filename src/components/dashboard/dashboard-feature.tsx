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
    "4hDeLFeahSU5onykdr63SBgwd7w8fUvs5peBGzBTKKS2cWuUZ2Wisb3Stad8oia5LzoNxS15xtApnLXYgvUkxTFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rYbWAhuiww3Xm45xqMnUQmDsfFgrxgi6Zy1Utcfb744NaPwuWxfeQhPFKUgpCNpw6PLstUbuJCKUPMtTrJHsCYn",
  "key1": "4ioYSYm8nvmGeTTrAjPnmBhohXjfZbGi9WXhWkv3a7ysYnXaGKPv5NbquqMJH7PxVoff87pyRUjXvUWpKSfqDxna",
  "key2": "3TQeCdcjearA6ZhpPmV9nDnCxpjMfqvnLZboefg5raFaPfR9hopkMhpt56xHpMY54U3jY3yJ9ArH6RkDaPinmesa",
  "key3": "3ruikEDg4gjkV344fR2wEuJQLZmxzn45Mq2CHWyReccyQ8Y2TWjXDq7By289e7EZytPKGNt9VSNupouYFyPx9q2L",
  "key4": "AfALBmath53UY2y7oeLYbEMrhuBdygWo6BZ3awP4B5dWGyyGbizqf4GSbkf8nsjSP912sLwwWGXTyk6Qi5ck8NR",
  "key5": "ShHgXuStgJyhyuhKna8XCjjfpCLxFJz25ae6n14F4FpPFXNvRgezW5A3hu4hnXDV8nzbYoQMHXpFSCifsMxNAqh",
  "key6": "nzVW6uuKYinreDG2mWoBA5BQrTzQUFdHkJxRpb6eYqP5zRV9hx9548kURR67sxLi8MWoD39Z8P2mwRdu6DnkLYd",
  "key7": "2U5Xz3zfBK5xmdhpdJQY2qwxpTXRPe69GPtvvbdArvTjC7QEndahNfGznA95H4cysbbBTqGtR1M7s6FK5jA2aAgu",
  "key8": "VSTrTx2NmCWsS1KTHCzfrnKK5Sj4ji2xYuPocJBVNrvK5Sr5axtnSYwS8swHWpLf9Ure1CVUNAmZGLheg85oG7q",
  "key9": "3WZ8P3iiTMrVhGvr4wp9L9r3Upgm4Av3BzFHVGjctKLNwNx3Zsf5wiYywHs2zNMGzkJv7K6EtQNV9U79gHveVMpo",
  "key10": "4H9iruU454dzNdvFYLTkS9Pt4J6yFeR2T7gUR6GVzrZAte5jTUw5n5mXqKPz6QU1Zrx7pCwqMTegXn8YT7qb2srk",
  "key11": "2dY1QVP8EqUwyH7VE3CL4Ao3y666wHN7injSV1rqN9wRMJwXR7gq2ktAmishX3AYKtGUTqEpZkoLAYmxEzCMSHPK",
  "key12": "4rFyRybzTKejVW9HhHT3T6a5rZggNqmZV57JL8LoLLmscGNMcB4XbraieBguFTPM3LJUN9pRvdkqZJkNBd61Gz6T",
  "key13": "481YThB5THKn6cQT2ACzx9a9CP7veYSpsmc5KReUtz72aCRJniJMzXs1jzc7ARtoxq6dCii4c1K1rYS3n7CwNSw5",
  "key14": "5fvDEVDeAwkpvRePyf4xHUFrUdoVXLbWi3GJSPBvVDUZCc7BuQixhW4G3n9wXkgAiv1X6dTXCZF1CLrAocLE7P8R",
  "key15": "5Fn5zvN7pHF9HCf7D4xe4uJZpRS8bVeMPSrRGBDeqZUhf92afLZXJy2yRa9KjHwKmQ9Y9tgeoD6nugwkGj3RaJnj",
  "key16": "56ZzsK4zz3NBVxC2VYHrToYKmzpZWEpknRKTf1NL3kNH6jm66Q8EnBpQpCzwMcj3hFsLfayksJH7itQUrfsS9jzR",
  "key17": "3NaF2dBpPU5VWjMPfJTdFTcejy5sPMeM5sC6mj8REZLZ6Yf9n6K9qbVmeDRKucTUrRVNLiGp8xGN18w5DCAfqv1S",
  "key18": "HptZSf3gWd63hynhKkbXajpZ2i2GpwE9sVBMPeuYcs381vEcTtJqEADaX5y3Xr8zjXUBhrJTVomdSmKMLxkgujQ",
  "key19": "67W16WpoBFc2cNkryJYK4mWvZtrABWYSSt9j8WBhTRaxQX21y3ZxGzwVkCkFHUcQn18cDLYgYM1UJNWohT1cwEwV",
  "key20": "5MmeHJ1dwrHLcCvrXTjup8ip1P519zgAmsDG3pZdVQuuD9a24F6Wq4159p5LyMSDy7HSjhTNgkpnMhtGt8GShrrt",
  "key21": "5DjpN8kk5MDvf5CzwyS49qT4Zkx67HpuXJHKUyCwevq5jyfPx8gN9mwfGtzR38pxA53dj2SvHZPgAZq8x7BG7WQx",
  "key22": "2dFHesbUFZf7F3vi66KYxtnAKtAD9f8oTX4tJ1bYocxPXkgt8mdHXU4sVCoTZFVLUAErCY4yoBBBbhmduNemkkWx",
  "key23": "53qfx4k8GYf5kzsXCqQUCdyKd7ay5j5E37t58N6En6MqV3G3KeNxK5L4goaPDX4rhgV3cLNYrMy6QZ4V6Vv1vTxL",
  "key24": "3GoMgGwS4s7FgDLmShrUK9KY2FQXEM24JdXCX1ZsoGBqPQMc2UYTicQMoNPTcGBoFy4fM7K3GTeVxiZVi1bMtwTR",
  "key25": "3hMo9VUnygqyZm6LNyLB1b57ipBTuNaXXbsLKVkDQFqRwaGxyqhzZjRAhAmPaPkpCp4t2PDADFXaoDbkqMBPdc9J",
  "key26": "65DpxafrCQTmUfgmog19PSPLtFvSLH4GemZmfg1GAVLtDqsWdU3An1Uy7HJMUvY67STgipSKsXDbhsUWQD76yvGa",
  "key27": "5DTrmTcsYnwyKz75RcxhbjzB48qXgychQcNTX1h2bAew62oS6bmQkncSTb198yrWTN9u938mWpwmseB15qSnZkaJ",
  "key28": "651r9mHGX2szCWv1CTBTL8p8YwYNwz2Vx4P3HYcwDSPrD44pEmzh2pDntbK8mWLHArAiSqCgxwQuRNBo99gqGNR1",
  "key29": "StcPPrqxJKEMfgA5MuvMkPH7YNyP2FooL89shXJn1CL5WAjjZLthE3A7fuWRCj1YAKqUsSaPPS344WYNMSA9NVr",
  "key30": "2uExoK7EmpvRyYsW3ejo9WpKWD9SQ69jG5gTgfQAA4osMSj7Vg4W8E8cnUar6oTcfMFvtGA7UF6K4CU8zDedfFge",
  "key31": "5GKwoa3NRAUxv98nHraGUA8GgGakXb3kGi6kT3B76UTwVQiatD8JHFTTL7XgJ7WZ5Sz7fMKvXEVsXZJJwzSuxQf7",
  "key32": "G6XLER4X8R1mmYV8xvq2Uye1JXFPdtVU9uMvwH1g85gAymXnUosW5ja8TWjKFheBrXUR3jXRSXDNW7v1cADCLBk",
  "key33": "G2yAxBjc1x2rjd6Aa7iZQACUktqLo7wMqG6EdTaHuMvUvPK9GNokPbEhq5XR83kLX6JT4gRG4dvC39oWBshjZY6",
  "key34": "3RUcwBq1fGkhuVWUY9DQBXv1W37viYdaEipxBBu8aJPPcneNocSQXa4vTZeSGNYYBPcDBWHv8kDcmDd7exzyjVtf",
  "key35": "3RNU6EJ4X2fWU6bEUmB53SeQejbBZyQBsWjxYJJbXLooJUwyNTYgR5mhEsmx9LK2T1ChkgJJVKEZHyre32YKJwbs",
  "key36": "4LjW9s9JD2c9NTQXETAMvrwbPuknMty3Qc9MMyXaLbpqBuhzUtabZ91heKNdYfQBNXU86kwYfr2c5aUW1w6RBBNt",
  "key37": "MDoy4NY6LYYk58PV2qqHhZS8vNb5hLG2m7RHkTbpnQuyxbw5z6xt89TeFgNMUnc9eaNsQJA4GdBL9o4RcZAAWhr",
  "key38": "FcNiqdF3CLu4vYnNxj8e1B126h623XnifYiv4SKXDGGukrw1idsbSbqBhNRJAzX9TH116tSHgbyALtYFdRVEUN8",
  "key39": "3yxbNra2tFTQYSUKSKVs77yBB9Zi1Mq1VsDJAfKNSMH8bCHuSJybxQ9hDWBbCcKLqgiijXUowxYKg7LBrzios4EK",
  "key40": "613H5CHA6nhTPDMj9S8qtUAmryrjYDXdSqrVzGuTQHtCYuBWWFBFcXJQfjB8KPJLQtZCcKyjDmRyKYBLB2Snt7JN",
  "key41": "pCdREYjVERP4zZEmkiuNfXrSLBXeZF8wjcNcFSSsaLdytu8f9Hs8WL6fRSSH9CdHMLtNhcRzVEF1s9jzFGHFpcW",
  "key42": "39xnXmg1vqNgxu9bSaFvd3awYqoBrwwi8dHkBnv1D9UcbrauGGXR2fzfwhgpHYt9nHr4YhQoWYFfC63NCKUYyNoC",
  "key43": "2UbYUtmxc8Hazs1e6c4pT4X3dmmrxxPPSHdwtUaP7nNHqJZ76MNkERX7poYfVCVc8wkuneh4z22D6BDAn7ifGgZr"
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
