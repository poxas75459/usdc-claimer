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
    "6pDQuG2SgstyZCxbkXnk3bormp8aP8nDDZG3o6ecSWJkTBodLhRLWbsE79X5YtKcz8wByyVscbcAQ31T69EqZjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AkfTietFcK8BmMLf7vKntfwhG4F5X1nS8Th596aHZPHkCf7jwxPexYosD5YQEBL1TLzDbzAApXcEumdaUfcYW5E",
  "key1": "3QfoYLJ5uYSTaPjANV5bm2UEvXKqTKUGazR24hCbN7wfAy7PgPS6DdxkNSZHo6PjKJYx59h7BmgMbfXVRRXLKGng",
  "key2": "fKjwLhkGzfy7esw1cGbyLm72P2oPYA6eHbmf1F9q16GEQd9GoBUaTb66LCK1mub4fiQoYTMPenj5SqEt1WizDRb",
  "key3": "62xwKN6UsZda3fD39LmnHxet6HrqJkaGv1vPw4hvtMWCEXEGmEAPaQWUaGP7yVDkU6bR7hY9Z1SomPqVGw2T9U8L",
  "key4": "62eTneGJytAZcV3CMTyDNyTBHiQ4XUU8edhnpkxowLGMcb4P4zjGfx51DivWLXKPVJm6h9CTwah7R33HboMQe9WM",
  "key5": "2msk9GPL4hWPXRdshe1ttvT3edoRQwUzHeZ8XyaHgsUzD7aKvgSm2TQgdQ62E4Xa2RJNJYzuBTkU1rZ8UA8uPjmq",
  "key6": "WuVAuBv7Mui1tEFAuKxLM2GAxBHcsRMik5KkRSxZWkeErajZNPNkZQ94zbBRzHbczWG5Jc8ABuvNJkt39EG7nzs",
  "key7": "5YsfXp68wDB7eanXSPFgCe5AFjQgLi5tq29f5NNSMtecfivcGiMECdJzF5AG8whfYrbd7r6LJNbGuCF4WBGYkvkJ",
  "key8": "2LcfaMmxM2bjAhcz1PNMgG3HV5RR3Eks3rqnQ436JQy1K6XgkQNpqgCtVXg1dfBudYWzcMjddX79KYtvPgruzqbv",
  "key9": "3isStQLCo4nKhWmsuYZMgAdZfCoGimfzADRjvjqntDaBZgBEdsw6g7XBEPET7Jv1kcvVZUkk5oJV5xWyYNtsS3MC",
  "key10": "4uWKujYASsuSRendeJGhpNwS8wpxqXiKMb18w4xf2mgaujZbqZTGrQVx4XeFWtSLTud6FvxenTgwqsHirinG792o",
  "key11": "5GoskzB9GM11bDRdbuMWYHKaJ9fJDdSZ6tV869EJKLrbR8WNvuu6oozoYf7PYuwWBNuQmLvp8wuacDUB5bUbWYwe",
  "key12": "3LrugKeXt1u95JjJxXmrZ2i6QsfNaxxuhEe5Dus9tQ6yjsS6A9ceJdCp4zRWd8fr5RnKfHUsHc4BTCegjFNhky76",
  "key13": "336hCq6fynshVQVFArozrSXTAew966xDHQJkh3NVVDLY9yKwfiCppqtPrXbizWSYTBTRA2nR2qtDyDUDiL2VzRLY",
  "key14": "fKiCincyAPLRa6A6K1R6FNwUaxRNPmVwhFktKhQV4cydPsVcyywSZdJxAaXVLN3Eg5dUfqxA9U6GDiv2Zo7vYoK",
  "key15": "YZqZCFXVb7aVNK7ucv8mAkFHM73nPjj3sAiM9tGtEWqSR4smoTaodkpWyRatxREc1f6ja26pgfuhSqRBZxgNrxn",
  "key16": "2txYmjNYbwVUbYweeKsNipY7yQBxdFaLpqA4PFMBKWHwksceiqWXD6WqXWEmsFECdzMcQQ35aPphWw93mf3HLeZ",
  "key17": "4wBKFTSsBAXzZJUHWKaJehsszHgohZfQg5pYYNzViELWcX6gAE2zQek9SvZhJgWAJVoF6syuot6mqGfTgv7DDYny",
  "key18": "4HaKW3eiPJmH2R1DZdBXest3SBq3EwSjcGRJF4nxDML7F7Bin3p98dpxYumwcQyb9xkzF9Mq94JqUnkkgnTHGxW2",
  "key19": "3yULzgrgnzniZe1ZkRDmQmbmJihAufaamSxXAEmBStLP8Rv6zaCNHiaBs1SuysaX2GUWabeMVRLoYZSjo4ub5Xbq",
  "key20": "UfpU4j61fif9Uk3MLbqALz3sDSsiP5X8oxkXhJ6v589GsXpSYv9R5tu9oJeZZRX3NZtENvHDC4uDHe29s1fhFBZ",
  "key21": "2W1cfDSsBMgtiDm2vPqiSsrqgsmfruNoByFARa6UJdQCtbHgXi8rj5FcuhYBaZV1DeihrDEZf6Hb3cigQsTgyQzh",
  "key22": "3LthcJdqX6Gm4o8HvoitaTWu7GUSkabJdKXJKcfS8oKEFWrtLvqG1WwiVDrugp4EFWGUBRafR4MiMJwypR5RKicd",
  "key23": "5whXiN4dpA7dKXb3jC13D6PLtGpXWjSrhc3Mym9u1co8daUbkND1ZKRF6nWn8SqjDUp6kAjjnVGtaDHo16UTushz",
  "key24": "LGAfMzf2sEqHhw1NPHThNz4Dfh5c62F3oaSWdaK2RMoBSKLqzbRuv4qFLH6sMnq5mM7VnC2BHyyPFH5BNB5zE43",
  "key25": "5E8hse4SZjGcEYRKxBCDVUmC5LB2EN6qVcdsn1ydvkbiPjyYpThawy3siiyiRsRAbCnTMSLLbm5kDsH8kGKj8jYx",
  "key26": "vzWyhUPEah5oYhUpskzTTftqCEtxRT72otNoECjxB9zEt2ywbHSEi9PKhTMRKDJ9Sebv8HwxjfkVp8Nr4GoaJCg",
  "key27": "2xThKKZvHouWCDAno7SCkN9DjJxby8Qz97XKABk7JHsWt73hhc8iDzFKxBaooxwyDTYAQmenx7aNpBb9X1SmLua6",
  "key28": "3TpEAQc3YmuEBm6Vu424Sf8yqsjyBvorsBfYMGJgdNinHibfofhTDvyXSReGyThmMKq1xTXretpWYT9U9ea5Efdm",
  "key29": "3E8XY9p4Mrak9QrDhzzGpLzxEpC54s7hsiyt8hqRBHQxfH2PvE7GNoJkqoPKiSukkKurkF8zKEosmR79njW9rPaq",
  "key30": "2hFZyeMnTVGp85fiFAzJ8Mp9nLTPgrH34ghnK1MNDw8v6QzTwWkWKHzwcWSYboAKuGb8p3WJcmmKvrAhy6VXiwoK",
  "key31": "A3AdJ9Ljk4MHHQDZaxJZrNPGmbSRBTQEn43TCYcf9EjKWYQH27AQmJQpEQDg9CNPDwgpGdTcVrLW8mF84621bdN",
  "key32": "nxsuYz1yiJ8Ndsy7HnCUTcHWdyY9n6PfrNRBGurBgFZARDZQXmdzu3yCqbdfCyqgx3ziwUufH2nJKwsnzxvcFTG",
  "key33": "2FiD45JP6M288SaQBwkSMVYgC5dqTxUMN3wZtJpe1Loqc8mknrMS63xmJrGoS1GHHsRsmWfS6xLntabqYcnkwhDQ",
  "key34": "3WAZwhbwS2HFrULx8XCV32osfkszyELq5BXpHhCkk6Kyb82CeLFJA5p7V2jHFVM8e3Sa7KrLafzM9hFnCD1u15GE"
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
