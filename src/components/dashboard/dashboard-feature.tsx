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
    "3w7viSbQHT2jrxD7WUpmEEgNDzncjynWBXTtZjuBiPBHteA4RNYG75j8RZMCAZ6ubCoDaCJAvB6NXYqMiCWfAtTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jrr8H65xrgam51i73G4G6qATTwipKvVGHZrZmTLHyQo6RTgaLKwZRXSda3fTsAm1HWEvF9oLCE3XYboaQhNcFYr",
  "key1": "3Hu9cTsXjza46vzbrU8FUuuwfgTTBBn4wyZfKx5NCzFgWkCv1v6FMtCatqqv2wnAYao9kRV4T6jxgQEgckBVBeUA",
  "key2": "44YS6AB516aSEWWKjcHHZiE1fsbX78AN5XAscgRs4eDAt9cMXJo5K63PCriu57NAXFpfp78YFTvB6KYNFxCNGRvK",
  "key3": "WLqBa4Au4fgzmp2rTnf5geVkNvdGmDUgBmuWhEcKbKnYZyAPjF4jSJ2FokdPFb66BSDWLYC1CTAvjFscUMxCNh5",
  "key4": "3EJLPXAjbrBtKmAgkZTpXf12XQ2arfD74C8ChomPvqf9c273PkS8mxA63ZSrVxG622d8oYQwnTGX3eUSQEPjJUY1",
  "key5": "3RJQHFG855VRxUdQuzbZXZfytAHJ6hUATf5vkFTCwnq6YcP6ddPoftcDSky7FhwFn2fh9cQa86bxWRj8kg2jx29J",
  "key6": "3HCGy7m8AbbDdVCjJujqM5wyjwmJ1sgCNDekaL7FEXqSvR4rv2ccjaa1LLosDpaiJ2LXfwBC8CycSo2mXBP8cuDR",
  "key7": "5DX27giJEXe3XqYWPH8eJpbjDX86GiHo3C7GY7YW2zrSXTfWxwgvtApub3Pq9TfYTL89D4waT6biztb18qcF5VFQ",
  "key8": "4FQvyGCQJYGxTgqwH56e3YW1wy1hd57CyaGxkXV3h3XKd6NzMZsAbrAD65ty5upQdobMhhT2KQKoicmv1gpYGdZ2",
  "key9": "4GrHc9jV6NZdzVdXbbyqo9eHgnoJvofiFqBG9UmjPJ3RVwmtJcQUL7oQGf8v9Pg1bgfDcBgnHa6iV8BnuhGKk4Gs",
  "key10": "5j1fWHz41w3E3UD1rRcis9fM1Ufh6Ji32TJGi9tbUcXU22D8MZotZb69S9bG411RZuyHsc35fUEJUgih2S3qLtPE",
  "key11": "9UmqCDGa965Ud3j6VjEQUYDoUU54YfQ5ekB1GA3eHCPJDdchP1pXGDjBRjnK6N3P3ETyUkJpmVJdwwkXaVaN71e",
  "key12": "xxj8KQu8QAVLXiidNMPXgVAvrHHyp9KcVBi5B1xfpssAysxeT22qRGZMWvybkF4exvxkumgaZnTr6Wurkem5tLw",
  "key13": "zWwxPoP2WLwWcFkhJvEY8N9WW1PZ8KxXm5zkjkJc6cRSuuWgAySP6tF9cmsESTSHNmLC4jYoaxjyMHyZ8e1zoVr",
  "key14": "3grHp95VSRG4daqu4sgjdq7pb3jZi6ffgvEyH3JcTw9Noxw5yHRRD7963RjjX8NiXFNUkRPSifgpSxCzrVVzXL1n",
  "key15": "5Efdb9uNc4cq3Dzzo3YSx8cHiZcGogEpeDEpPTRzUbUketMkA8KKsXiJbxUdLM38UucgMW3rHmqZzHLxBcaqpgct",
  "key16": "5F2F8Xgxh7Jp7dsQ59dM4bZLZMKNWNRLLjTgnupbosV9Qh15opJr1RG1kuRJMSnmDMHtXrRoS3C7WT2ZaWkQrK32",
  "key17": "5NPATxEYshnhnEHHdFkMFNTTMquyNbzbB24kZEyYxFitazLngKd4xMhXDbu5fGMepPkW7ijb7yyDw1GuLLwEvbHF",
  "key18": "3isH2cQohNSXXWUCwftNijSU5oZ8zSgvFDa9YmUAReVXvdULemNf8VyXMxUHxQ3SbQYBiK9Rvr8EDzgmteEPzaku",
  "key19": "3vx83ZnSanxNxMJy14fVQfkn3j9R7RELWQYe9AbnudnPYLQpjVtUNANqJBB1Uj9cjo5fYameL3mwQ83WtAhRFGFR",
  "key20": "4mZK9FZMDABoDuxwVwxXdd1JHnjKskTG4NUvNyE57F4dUqw2i32Man119t2mYQYPSCiUwKfZ89hJMweR9FDw55uF",
  "key21": "4fpyxJJ1GGkR4XwvCxUMKhArV7NnJ3WawoiihXsfwPRPZ65VW42ExVDVER5PnYiBb9hv1iYHD9LxY9WV9SbcayQx",
  "key22": "5boTFY8nrRd5Zz2NaMq2ejUcCyDMhXWUjsvJoPfFaQfMSbSg7EEU7XedUhMFCygsTEigskSVyjeWAQhcnYMNbce1",
  "key23": "3BSEL34wqFbEBKHyLrkUtZz7mEZaKGpikvzW1pii4LeMsX4rF1FqjY3nNCPLHsW4mNr9tE5J765cQ8UxY7uKTxUD",
  "key24": "57mx5bf5Pq4FXM8ESTEZQu9xdzgexdMWB8THn4JfuFL241CsMz5ABaGkaQez5ot8WqYk47PBJdSSJBPZxXniWAt5",
  "key25": "21YsJTSs7swcWQbKMYh3RYDAAASWXbtSnq1ZLz1KAojHYcDJNR4CUcgaJzX9VSdQudzFYjR1ZWjMCHGxwLQzeNdz",
  "key26": "2FtVaEWsNARCzppJstc93CCMsCMTDkaeNQNqLLcsUMg1byU7U7oUfxvHjd1yHA8LbzwyysEpJZsmRMo1XCewbpbA",
  "key27": "4LRXiirG7vqNeZ4o44yqZdQeQMPv8TETk7YHRmk1DhdbeSfCznk2JhJXHMzRAKRJ8kKQ2HW5DYo5VH6ANDfbYC9Q",
  "key28": "2P8gf7USe5EfrpwCB3cFfnvVPWNmtQwWbPVJd9xRZMSsoMVikHQRYNxSfBSekTK13ffWsvHK1M7PSaaa4VnVK24w",
  "key29": "3gEj4KKApoSg1BdwzfYeELcroV1kQH6sZSdVCzZLabT61gdQDtFP6PKku7DNs1iFe5LHWjikzn2Mv9ADszzePAzu",
  "key30": "5tLs43DUsE6S4NhbYyxu8zttdpiTGUDKXcnKeTDkRM8uQ3CRVBLpfpaeaH23arryJrXChv8vF6PQxQzvp98mzjUd",
  "key31": "4cJLKD3aGYpnJe1YnQW3L3abcJags94D9pjxF5MJkWUBwfCjvtEPnP2A9ycoQ8Mah4BfYnx8sm7maWYc5RPmEKUN",
  "key32": "2kovGeYmg9t7fzTxoPmge2zR8b8VWFRaAXdmRNveQD45daXXgZ4mEGLZqCauRARU1DHVjCrN48h1RA18EEZwX6oj",
  "key33": "215oAN8h3XLkMYGFojNAAS7NzBYsvfXXThDqZufnLrjEJx9tpDKeqMBLJQ7EZ8wDUDR84rrQrG56Bcid1exaiFux",
  "key34": "5pFVjWGzcpaCjAVc3eSAMajqgEZr26g5W17x3gWzVQ3R65vxFeCAbcGx8EUng9s8AwoSuLgnVWkrnUZQ3weEQhtx",
  "key35": "QTQGhUvFTEw7gextTD73ieaPVrmttyLjGxrdBt2yR5qmK66gY7tDAaYrSLH9YVGpQRrCxXf9k5kSGhyoXFRJSrH"
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
