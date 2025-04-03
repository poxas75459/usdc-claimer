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
    "4dfdtYMX1rFWFSrxrkTY1Qnb5cKwA4Qe9Yd4tn9QMgky6iE3KpU7b616KQkc7g4CYA4CGofV4DS5tZnbqASpSgkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tp8zZiSWKDfqZ3vBr4T1nN7vKZ5K7MkuNH3ehrGtALRbdiEL71cBKHniLKDNTjn3hZHoJRxxW56ninrYncLrjA9",
  "key1": "3CaZ6aZwKpzdVAExUMAg3bGkW2soHmaSSCtE7dV9VJe6rBEKDEN7RqdGGs5TSN8xco5pqzKLywB4Sr1n9Vwx9eT1",
  "key2": "5fGtYB33RXLurbRfzUznAGjy4NQ2EQWwC7ioGSLyGVkMZs33trmesGtdFWY4G294Yys8QhhViKvAH812CKosjxcJ",
  "key3": "yrTGReRAnX4KrykgMWt5B23nqssrdVbqKN5zm1r85abW1n9ebJ7gqFSj9E8NFWMNb9sFzu4q3VMwVVjHBXnZCLE",
  "key4": "57pSbcWciec2kPA17bvfaNz2DmxNSbnh2VHGeW1RzmFDDbQisoFq4CDS3NK57LZYw4swrQgTPZAMnJuZMUAKSZpc",
  "key5": "4UNTZiMVzy2zxXsddQMJQw3o5nexLkYKkpwH4R1WuQYXKNqUS1ABZx9vFGZGLTRZdTvX5zmg5CES7Xw48FMKqpwL",
  "key6": "54D2WLpYbo5emWDEoCKidSTcbLTfrxVPuCDHH9xH9TMdwKNqPm4ow4FPFLC5uMxB1g4JKX7ZWejkUsBgDV1nzy8",
  "key7": "4XPTyQrWiuewK2kQngdTzn2U281nj4fcrTEQVBMpNi5KZwXBgjdzysRMiS9Ng1VLGbnHeZCkJwLG6L1RnFrpP7e5",
  "key8": "4xzmU7U9DfBskzgUHZEaRpGV23oFTQhAQTKaqNjhXoWv2V9y3Ma2j8wXW1Y6gZ8nqjCLByKvAbriKg3UzNXUM8jZ",
  "key9": "3VMcJoCe2VTqA8PtPhRdpNavF4aiAxf2ev1okZg3r28hEbnLkhpg6vG7UU4Xr18dxLUUmeq66jvHpeTPHwkg1dV",
  "key10": "3PWUXg2ZhQe2etrqyKZjbkxSDo1LVCKGZq5nA9jFq9pB8mUE1vQdFvz1Eo9qwogcPKU1fU1X8FrXVBuzWjbgQh8w",
  "key11": "3Pm2jfdYtiiX3vdrKt18dok4oQpnNfBQiyuZpaALoqktWWtj79mvZT1Zikk5C5iDNaL2zNhH7EUsX7NxWWRt4766",
  "key12": "3TbnuSgNwJsm3XhqY6Hqm7qvdtJcbECdCJ5crU4Ch3MmbDuNxC4FXqjJASawu3QVm7sX966y9bNsyEeNBYTCrzoZ",
  "key13": "4e23fGUEG49ddSd5XRDB8qG5PcCHsTefeECTScZVLqVksZk6Z9oRRSNtzkGJEjtYZvAEpopYjANLTZrzVfRpoeux",
  "key14": "No5oHjmj6MibQuY9LxuK2Unqd6NjVraje1E1btqcQNBatb45ZArxdtxWF2K3rMaFrHC4z5FzWzxmT2tq26dbDsM",
  "key15": "4pHdsNoJo9VR7HzHaknMtoaxtGLcxDG37mhkQVJyUzXg1QNH8s3HkckquCd1e4WfKRgbGVHT3SNHkumQ6iFiGGnd",
  "key16": "3b2cQM9nMnpo46F7zTh9W9NzGRo1vcTEEc4oDQW4TEdxUYo3GhRMCYcUSoJunuQCBYyPtTxEhjPgcdKWKBq9kFtL",
  "key17": "4HuhNzkomHeEGAeePQgexCUeWpDmmS17MHjnYmrDpCMQPrPkvwPkZPxfkjr9vgWp4HwtHVxK6C3mvbM4aDDFtseq",
  "key18": "RPqfRwMEiWnCa3AqbvbXV7XvcnjhZzozyWm86QExNoMqpwVcG8ZPFbaSdNRNbDQ8V271rSNfdNRTHRrea5iXFeZ",
  "key19": "3v1gSAwidNEqjdNnRFywN6Pipq5Hq6qqVrmq6hbYx4PjzsnK7VoafotD4WDhFVqMQFRd5ooA27q9GL4kNTibb65d",
  "key20": "42LGQnGUw9nZKoBtZCktvSKisbVkgzdWbfKjqsrKPXWPrffF2asA53sZQt1jZ2v8dGKhKKsTj6SiacrHv6CCU5ya",
  "key21": "3pmE5E7ULasY9vziZYbBzZ55QDEs2DBiBLjknomEeKEEtP6YLVobGVJNReq6AeDmPW4kfsBTb3PsyryrY52pRmS7",
  "key22": "2Hc6YgEfk96SM5a5AW78ETF7FhWNNzwf2C4jrwjwxfa8nE93XeCHcjTWVpNVAC2ynvc8eVath8zNfPwjUtF2qioy",
  "key23": "4LpBhMTEEjVVBWm5ycUqUZjutNrRbFWuM2pLw3B3mGXcE655tAKMzYoDdW8ovYHq2JntYzFPHkteaq9dCJfbNt3M",
  "key24": "irKSChE2SdoUwRSnk5YebchzAqfyWAUes9pbTqkJefBCMiETLqQ89HTKFxiffRdPqpmMrHbAHMnto5Ha3JgKvM4",
  "key25": "2c1wpJLAVKq6sjjNptwgvL5ojg7EBVDVjKDMA6iY4oD17uEchmtVKUtYeqRFbjMuuiBzzf6uymqxEiWueHxhQnzM",
  "key26": "65WYPems6zXza9rRzUG6ipjS5vTL7Tvjy6REeFoZKjZBGVqZ3rUudHgrDvzVkBSACEDUXKYdcNJTUUFh5qQnNTwV",
  "key27": "2pdcJRZhbwiM5bysZnBAP2ms5EGLNqm9s3t8mts597Xe98m3DfvCyQiio7cWBDLsF63PHgpa4aCLMXxycykBD2kM",
  "key28": "4Yojy8rpaqwpvUGfiL4HZnbsD1wNX2kaGoNbo8ZymkMD6QfJemXzEVAkzjkNAA9BZojiWC9gGCk8AfAff1AhDoWk",
  "key29": "5bjz6QhF7HS6AVap13GvsMS7pLYVc9QjFvh7oD1p2DQ5UYGgwb2ekReiyoctP2SzxQVkc7fMv8y2Rj4EmBDQ69kh",
  "key30": "yRSGWCZbvQFQ4boSEENsDqMkii75gXKrbq8zye3utitvvQBRHpHZa2DRNZ84aXAaSQek5VuHwfpqDsgCg3JyRUQ",
  "key31": "5iQqtCpmnym4nDGPayNuzgsdKzHSaX6xhpQj3smfQLjgKqLbraZuKRQRtFiEJc6k4Mx8v9AVD6JktST143DuigdV",
  "key32": "B5kpHdjjLngKjUYbRyByLLyrao3bnKZKuXHNh76nHaefTzWzTETvA7DUKuCu4wjRkWtHnCDZGH9gB4hpUABbo4f",
  "key33": "5YoPZQFkF3KJt8yzQp3UR7RsWSWsUFm7GghbDmANBs8bcv5vaPWU1PbT1hn3bR33KkTp813XQVdwct16i6nqCpEV",
  "key34": "4EjyM71FxzDx6qAjtD3kpjLjynfARxUtw5vCza1gDQRsTcKBuUTpTUVj9nF8hb1LCoPbqPwkE4t4Qr598GrA2qaz",
  "key35": "5wSLN9cuPa9pEx3XxnZhEnJrUUUSnxfGqQztDXVCp5gZgnTo73Cz28jqRVbzneuwg69B6PSgnpTn9izccsiGtpJ9",
  "key36": "446k7NP4y8CmyvLWdDuYmmkXT5CjuhwdDz5XhA2wJ6hE5sBtVVyeigXjZsuKDYJrQpWiWdRpEYKHepcsfXQmPfuA"
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
