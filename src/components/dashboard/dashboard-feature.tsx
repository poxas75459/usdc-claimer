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
    "446pbnz53jhFVY6j8bjFhdajNJDPgKZff3U8e4j5hRH2VUXn1oZtAyU9xGzwnNFN4Z4na7oYtp6VYBGGQ5S38HT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ACJ9CN4RGv2LWyGDZtSj4E2zwm6GnfwnQPdLCEe25AoDmFHVVFCu64tXLjGnDDKf3D3dpnE2oLHtwcR1vBJ3rGB",
  "key1": "3umAWvoNVHfbEoZ9ZpPJzgyrqRbPHJgx79jpD47mNRTQTtRSNNeceUPGfsiuvZWvnJFH6W4cHPafpo3RDFPiZUNu",
  "key2": "4FJwoUtkFyzHNjPkt22HcoHwVWYTebZzsZ7ps1Q9MvfmXHg2VQcepRfaZYbuHiH8DvDmEhqh95e9531m29eD4Vmb",
  "key3": "4fsPUrjDQEm4HdRZYVBzcSYCc5NHEPV4fHfTkYkCsnWt3sxzJCWvHbuAqL55XR3RunhYvPz3fMVgPSeJs5SfqPwk",
  "key4": "5zV6q6Khbv4yR2QCqmJDDiMfZL3JF6TMqbeytWHybFdrdKkYzL7JPjFZ77jYRt18LZ8crA55dBnYEFTnBcfi2svb",
  "key5": "4dzPD9shFFqA8o31WiVbiLRaKYCidUvVF7G8P1ZrfSUTctvJCoPRrHSqtR7Wr8p2PZ1ksLqYp5kNJC76a2ZECutQ",
  "key6": "5BDiJUAo7yQytYL2uAB153qPJNNmw1U3UUvqq9iDF8tztoorsZ6hqc4XUeT2gM9g8CpkfTfns1GeXbiaPXHPr68",
  "key7": "38qkn1ab9jtg8NkkgyvVWpqVRyDAZ9SJ3wNofhozout793HShp9C5EkTa9npdeXe1QodUs4qD3DZGJeusfnvAhqh",
  "key8": "63DwGnisdLsES7ro2LvHQTmUxd5t89NJEErYLmZAkPGtRv8n2r2tMathXL8BFWzhLARTMcmgmCQ19V5vLa4JN9hq",
  "key9": "szTBPvJmMPhj7DBGZFf9jxr77vRT3hk5sXj7PFSXEM4ESXp3qwH8nLyquZyb9xZEcxVGn9wNfJFANLvm1UBDQum",
  "key10": "5maYuJZp1nMpZvQPF7n8v8hiK3DpPmbrcEGDgAtdAP9utd4P6tZ9h1N3SUBEC1vnfbPvdx4hj5zXiNSKgJQizU9o",
  "key11": "3AfxDkhEgkQcSftLZAXh7uQ9zga6CBvK9XkQLaTf5QoYCNhfNtsGR5QZNvT9c2sSXr2egtq1q7joMmHDujp3eRQt",
  "key12": "2xtyk3veEyeBRUpsPMxa4gwLbXqwEum1BMjYGsxJsaJ3aikr5kCHiyf2Yb8u6imKoXqvVXSv4xzXuNWFfxqQU8kB",
  "key13": "2QLGUzQbV4yGpjGXWWJWmbgu5o8g7ExCSrSioCWJh8X5KWoyXviytGLM3fimL9MLBWeN6bWaFQtxJr5LeGnTt81p",
  "key14": "4ev5jAvVRG3eSmNBHL7Vg88baEZK57Af2YkWhY9LJv3x8SdvESkFwFknLZmkukyRQA8emH8pqHAygHNeYT4n3Df8",
  "key15": "5x3dsMYupVofNxN3LaPcjynsieNbSJecZyoWmZNZ5chNaghXMwKRajTTU1xB92A4ejkJQfuCr9D4FVyRRdqt7t7K",
  "key16": "384munLefijYTwJtL8Frh6LY5H9jJHb9WjaeqNLGEZc2tpKCBbCQtZEnWMSjYk5pr9HFbuGSAsvygu4drJgHtWif",
  "key17": "2T6mJqFhyTu7epxVNPFYhE4MKVQUhuV8e2ZKMYLUNKSawtaijzoGGRqoVDnpipSbPdrjTVp5urr6pRdEALe7JzWu",
  "key18": "3kkE8rXjByvw99fiUsuGtPZASMKZNbVMJgpteqg6odbLmTxCJuP6vZoU9ptEC3SH4J6e7qbdBtNZAaKfchRfkpFK",
  "key19": "4SgvQJLCssaR5Zdz24iWAbkSHg3HVuP2y7jx3nZEwLNTCR7M7BcsJJBe6HgWm79a8ywFFnqwnw7C29FyA9YWt2YZ",
  "key20": "usPc13krBE1yV8tc2LK4uK3X52stUWRxGgsU7kAkt7EPuiNS4fS2pe5RYX2nBosAHUEJtzmA1JHMAwPK9UUG7zV",
  "key21": "5YzGtNo4xJvLhqtBzuv6kRCpEGFBfjpixEk4eGNav3avhg45PotQZ4wVj7PWqMZkjvufpMyYtfuQvZGfwK4qzaYC",
  "key22": "4nMYWBW5VbN4ACunX6nXBn2q7f78ftSPKEqvEqw84wBqE6t7GpG6yMRzZbtpdVRFuRHpBe5ky8ihNXjGZy8aLBp7",
  "key23": "5SU3y71TQYTAeBw1BLaSw6Y8mAFzYJj1LUx2f1XnkWiESYcPZ9D9iNnCcvC4pYjst36GvjFb2x2w2Mvcs8BRsS7h",
  "key24": "53Br7PEwgUqbpnxi3aumvVeVzFfaeEZSsMiV4vBqz8p1LfyMihUKPLxBtJxt9YQkKSUEfxytGPBdXoNZDkbg8B1u",
  "key25": "2waNQcZWZYpXBEwMASyY3G34nS8ojitNrE91iFfhtqLKQt7uLmjtaA5h5Akvu74xdAtiuJCuqm9L2nfr4yWuVNfm",
  "key26": "4Yqq6Ssg2DfixrhcnmmMcBMt3zdWrQmKCK8KaZzbMmYtNnJyLc9JWVsbWuKs3x8uEqNzhB28pVD22s4fmDmNMh1S",
  "key27": "5HEQyhy6xmz9EfPU6iquDxrh2Z5pUodmBZnZw6MQrWLC4EoJwMYs9iEJHyEnhzuEEU4K7B1eB5VEP4kvpFdK8hAX",
  "key28": "33WSGmYKwM1fGacDpAHiEATgw5kL5RFvyhffbh3VowhtZm3kv2qSHMwqTyBVZEbZKLT3CGGyr6Bcaj8ehjxHXDte",
  "key29": "5KFh4KssbC1n4DhqSCssZiaq7R2NCWQtP8z2dryxZZASw2gVnj2qSKtvuyiiaLWLgZYNvEquASGVE8GLCoTxDE5V",
  "key30": "4TWbiiNN5UnFuCfLUPGa3mAGHP2hx9NpB7fTsnyewYspJSJ5XJBbG1kukbwtajmXr4j5Eem186Y5K7Zkmf2mAHSZ",
  "key31": "X72NY99LfVknUQJLFq4t34qyq1TBWe1RyUWFrgS73XLwPnsPFsecDAqkQnwJdU1tWCTCogHLhFDu6U8tBzD1q33",
  "key32": "3vVwpzqkjFwrivg73sc4ujEZTQsDKq9fZt8HhPL4XFHFDAYKmWjPm5FGEFh9H6kinnYZ4FSzUVw1FJfRn5FHok96",
  "key33": "3faL6C7fzQDcyQ6eE3vZ3BWtYW6oj5MrXmWie57NPPs6NSZBb5Esy14RidGtxcobTL4CPFJRGMvL8C2HWR76DLJG",
  "key34": "4XbhXJqrGVWi7i3v7bNoPKrjXBYbnPqg66Ha5B6Wmx8kG2MCDr3BGwXp9Zz5VG5w4Y1A2hbj4f3vAEFbLwGDCKmY",
  "key35": "64rsgn2YbAj78sshojtTx31R6EMwaCBJG1mXMG8qB2DXMyAh4yLeXCV1jZXjn9FjGY5vQRhN6KpvddDE85A6TrhP",
  "key36": "2wzFai4kMZxezh6uUiYj2fJhWFbGzR3u9tEf5kvNWZvvJiWMWhoEZ8uFXGd7n8pnvgy5xh44qmv5ynCPaaNUzoTp",
  "key37": "2dwyFsZWj3EBcdHnHRmyWwfKktQzkh5fRzKiTa4sGJG8nw1pJW8Jk9eh3GP3zCHEu91AV3kaNjnpJqHfJy8UBBdL",
  "key38": "3T3FLx2pXS1tHiv6GYUB2nSduKT6kdyLrpd4C7MDqT9jed5XPdFbxb4123J4fTdf1rffSmY8wmbiXkcpBEX47McU"
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
