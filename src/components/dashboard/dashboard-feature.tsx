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
    "5gVqF1mSYfWefrLSVJiDp33WEDUjEQYWvT7XzCTQ5xWWg5dBMbqhtdNoUbRerxgEDTfgpT9s23t8dbnBrHDbULVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56YFKHP7S8thFtPBaCTFk8mBEmMA7wNLqqYZp4xbnXVNyi9RpjjpQTj1k2Zb61fJN2d2x8Mo27TEyvzzAUGLgEFQ",
  "key1": "4KSZdjmGc2Zz17eVMzCSqEX1mtB15ALPFriB5T4jBDe8w3Quyq6seXpUT2PRmojLdEDvv4PwUFb849BcACW3Mpms",
  "key2": "4roiRYsU64Rs8AhH3dEheueQ6dJAmoftMSppKQEW1mbcGoVxy5rVSYW9ab6iAXzjB8GYdevabR9Z8dajxrhsJaPG",
  "key3": "3bwmxnJYRbWk3fF89pBjSW6UzvnLuwLSD1PonqTNzCies6xE7gEisFoReuC76ZR4SQfWHNnnThiGPuC5CcH7qp74",
  "key4": "3994jZRVDh4LJAzZ97DFq9bSqfJj7KXMQFj3vcxkjvSbeUqZZ5PuYtiDxEkSqQZoruDCks36jDfhpe5R18dbwGgB",
  "key5": "4hD66nkmuHcGridcgeYXhsn7mK2DNJBFBsYMZJ1SaE1gvmau96ZxmW26BxF2QHnMuK3CQcucfPboKTFqfsEyma3D",
  "key6": "3Q42Z7vNRpdLjGNMzsRiuxTni6JAkQaxcBMf5gbpa5J1ToDanixwyjDntCSThPr3WzmFyFTFPZa4EKzyT9zRprkg",
  "key7": "467eeisxbDeqHuPDYF7GRF8PbA1pu6amdMVDpmK4c8eyjrw1MksJAQJEeiFZcdwxLfd7T3CoNwCMCXvytuBE3Nt1",
  "key8": "39p5YTkPcbqaeMKuZ2XzFTNWna86G3wXnyzkPui6qTT1cSeLNY7gBuFi8WEbjQg1NUF1ovAE9fiHfcwGgtPAZTbf",
  "key9": "31o9jKssLrpYyxUwoKGeuC4V4tnKgn6Z5k4y1FdfbC3F91V1PpizbGprgQ8veRgk2WHpKXwTwDByECByZGR6DiHX",
  "key10": "54ikCXecL7x84LxR4VVPRGKoMf5trLNksvHHeQf6BY4KQbmbvoQ8puid2upVxLxCyx14HoyRrqJm8GTfNX5w3Dw2",
  "key11": "4A2KCTBCPMiDSr5GFjW91Tp9ibJhjfhPBeyKMGbidc2VCA9nvQB2gFaSwuXAtRtCCdyAzwQbEu5ZcjmW9b5LfD6w",
  "key12": "4xnjRwkNjxepAJUZBoUyN6qEwcPRDY5NH5VBUwvwZEgGoNsrdBxBp9JVfTREiN5rn3GWbSVv7zcJmvT6RA2xTenF",
  "key13": "3c8k7jnbtXKMc8bLdVmSFB4qi9RB5szobxXZjh6rb3JG2Kupvr2yth2ffokzZEu8qAiCCGBLnEfhCtSTqQQST5g4",
  "key14": "5j7Zzw6R95SZhV8e8dTW6cvdiVEox6BBqfGrzWVh4dNYxCwzAZpdhpd1E5i5QbYACYXUpRFUMEEUZE5hhHzJRp2y",
  "key15": "52kGRiCT7kxZUUk61r3hyu6CudRwANTd5AKhGbyQjifDvwLz7ivPXyBqtd7Sva57YnPpCE2TWybTVs9H88JBvtGw",
  "key16": "4eEc2tfAHxqmPDMeqDeNZiAGbcxG2CmGvAJvZnztC2Uc3PW63uRvQdEQiFXbrsbNJ9mryiofXatqhkDTKZcLRcpt",
  "key17": "4M3AALAE4M3D28w6otqXFPcyCxLVtLwmWFeY48F7euKVqdoxgNrgfMKefoPs863xPqEhxPAZrDdezNikuRMVji8i",
  "key18": "2uTUq2uBkP8n8ggqMVbbFXczh5cqKRMHhDgWthRywpwhJm7JwLiBMsiL5SE3itymzUpybU9ZQJMSaFFdaNnMAoH9",
  "key19": "ZHvafGaCjSvt5Ui6cf4ntaLy16ZtD9RRL4SaEREhRxmzC6D5toG4TVzGUzX35tgRqjd37tkFmvfa9nrrnZoh9c1",
  "key20": "4asLjUAx5ys7VBZjphHQkzK6HhaHCfvXJYcEgZiMMoyG2ANe28AZiKvuKAN5xLQtZaBQoJBcSDsij7p9ythDWtn3",
  "key21": "MwgoVEiSQ9dDDixnAPW2bPYX6EQfFLhKrZUQQDckpi8K9zxocRLZiSPEa5Z7rwjDdxNjr5QBM55jsdYaA87eFmJ",
  "key22": "4mxf9vtD4U6WHVwtLTqqrEkPUbG4sHJEeCpTks9aAoz4e3BdD7DCNNubaqdoZypnMnXziysCNhUGLiwBvMSx8DzF",
  "key23": "4qSJT58eYgMKFAFvYbUKnjaeFC2g4aVtF7op1wTGxr7B2HpxtePnG1WewBx5qpC74vnnta5M7eVUnxhmZAR9C37B",
  "key24": "3AinWj5J9eAqkufahHazVRGccgMH2cTjJbWU5ekynGHUe97RxFRY6u6eNPoaemogLB7FEcBYvf4NzG7GXKpVv3HZ",
  "key25": "2Qvcxdjd4C2YWxbWNqDZKCRkZY2T8cKqzwAitmMVgnCWJi1CyW6D6PVuxwx28UV9tNMVLxgMDKgVExHNR4J9dFCV",
  "key26": "4j8w1EV5gaA34TLWTaaTWpFejCLks1CFtydT8Zre79ug2eomKFt5MsXxU6QjqQPmSVr7HUVbAtGA37G7YpFSHjDy",
  "key27": "5GDpe4f9RXo8Uv6rHMEXtDvu6GTn1iQutHzDuW6DVn8zB3W5J1pYruWckLu7vQmt1diQH2mZLzzHbqQPZWXNWCYc",
  "key28": "bWwxCZMxyBNbMjRgbdbFfT6hMMyZbp8HeNwZEDNvXFJKoKYQyXUGBRjkHQuSiqKJ45JYyT3pXREkin5jy6uzPEk",
  "key29": "2gLhHgX6wxZ7K84Z6LoDvJ6Uepe3k6yWy3gSugK5t83KnGLooTAUg9rTc7PRuUA4Zt3oCx6GiRtFuL8fE5PjvZKU",
  "key30": "4dRsEMiByE7gkjWPvyRynrcz7ZuG5Y7bLYcsarsoDMLeriChXfj3F3pSczq4atSaC2w7iZUkBVu6QaUbdgvq5PdN",
  "key31": "28QPKNgXtmUwhVU7TVp8YY1pRDyVjiKZ8Dkhmtu9Y8EEynbUjPcGiKbR693aheZ3Mhb7LCVZc69GZ9X5iNMSfked",
  "key32": "3t8d6KL3x7DvCCG9byBUhhKwTycdnATc2PnPRsJeRqowBtmU8AdFGMbw51hVFGPA5kMkSnXnA7J6HTyQNvYty3pz",
  "key33": "3DMjwRzS7fGcjZZTYTd1QnJAZ6iDjH5qxtVAFvtNNjXJHKB1JB95tmhXrriZpbN5iP7Er4Bv9hLyPbXnq4AfkkPt",
  "key34": "NmYkLw9YU8GUgkWix3vjDM8Gy8o866kdKk7ttyckxcXnRS7BZXBQGoyvFnv3fmxVVwDmjawX7PzMPs68Jfk2igW",
  "key35": "4XNudMWRurFzCS6cr31m9YNVE358QWEUnJbV9tXmWeD57YegpED4iD3guGjw1ZwzHdNvgdTVWpKpnpaFCk6E4nph",
  "key36": "61ddhbLnqo4NKerS9cFJ9uWwsY6wi2TNbd3xapABSd1Fo1wR22dfk2esC5Dg62aqB6q3DpLPmwCAbfKF7HsozGbn",
  "key37": "4nmGPatpR3LLER8Ww7rJRAFhrkNzwAHPpYyieyTsVi3n2EkZ1tNnCu4cJhoQw7ifZpLeZMH8jQzWi82sxuCZ8Ha7",
  "key38": "5WtSTdRJZrUUFDrcpFYBeJzBxU1GpU64jgZ5CU7tyhgSEn7u2eBrNKU8ad2che2iL6rTRCqi2NE31TnM6uNYGjzG",
  "key39": "3JytjKCpu5M4zdhTRwRgCjUZ25ssWNDYuYPnDEHhiRB5SQSVFG9VvaEh1A7T7USwKdg9eNU13iDh7zyW84JWarUK",
  "key40": "2zKwfHSB3W7SRVfFZybxRjXFq1iFjUvhQ1kVZ7EQ1KL1YeAc8mJoQEvrHnD8xD71fiY4JNdJ7RFhXiLutgRveoL1",
  "key41": "du94AC4DKMKrV5k6F1LGyG4D96qyCzEf85PomS53xZAk3mWFxdHojYnLFHBGeNBSxdXUJXfJuQVfLQz7qSbj4wX",
  "key42": "49G3aPSPXfD1QzZ8gnR2A3yWYb9x4qKE4Ertt9wSQAA1zbHsrrFZDwxfm5vg9MqKypU9npQWEAum43ZbsaSJetzy"
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
