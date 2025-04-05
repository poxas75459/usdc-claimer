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
    "3XhkRDjysuN8bBrdjE6aYUWxhEBz4mHUkgqD3C4qsSMi3yw2VeUEHdrnzebqWj59LkNF5qmecUr6dxfS157XgHbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RJkrLjbbWVXsHZTRRq9dygXZnzgbELM4zapMuCrcuzxZVZtzMFt9qA8AChSwMMzh8QEKmQTndpTF4smcZPVzV7W",
  "key1": "3BXTWnKz2UMoAYa1hkdooqZpD1B3NVzDbcP7Dr48acuPgV7tGGtst5qRSW6HGwgYZhTJqZJ4jNDvF9yfn7rbwmWf",
  "key2": "3oxc2eMGQ4Ykzs91WzGusAu5brnvaN9HSXEJc6p1EgioBFtX7PtLJyeiE5W5HbVeB9jg5DV3wbtchAT19MERZb1X",
  "key3": "5B5Ezx7zhnNRikRRRYxvE399ANmSRPTJDJQVWtW3PLfGXprcGoMvsAoFKf2geWh3mEzH164Pnt4qoKw4jJr8Ac9Q",
  "key4": "35iZzbAed4XeTirin2gxQraNjVj9wf6Gatu3xYqFAuw7Czks3BSA1o6cyT4yQAfm9U5YfHrnDM4rGwT2AddLsCiS",
  "key5": "eKSgzv6jRryNNx4zXHxHP7JgHjvLhNYSCH1eMhurvUkv81cNL5BbWzesQ7ebf49AR3cVmQfkzDoAttExQPZM1ms",
  "key6": "4JgdDM522fu1bMYScxjjSRV2LNSKE8pFnc8fpcbdVoUTr8SxwjpRFGhJBifGCZWv8NtjaTUqCBQVHjRwuE4PjpxW",
  "key7": "2KrHijCdrGnnUzWyuQSmvTVZZZJsciM1EuS8qK3g24t9EcUxUWJqrY7ZXitmtbxZLbdjq8ybdxq19EV5St5J7MRn",
  "key8": "2juAi5STjgSsMuSNVqmYW5iNxmcq3sQxbPFdNXhnvJ9WLcR4H9oXCuynss2kzbiG7uR8LSNhT4DZ3knuRNKfDi7w",
  "key9": "BeM7tfAS3Eigb4LjkJNBrrBcsECsLNBq58n3BrE3ZHJWTTiucK65FdEasmVZQrucxXfDjysNTiY8DnckHjxBShC",
  "key10": "fQyWCthMRn3kym6hBqXVod7SSsTpgGLrjhyYCsdAEyt4fHkyru9Afo89k7L7Cn2n3er5tNJodgeEnP6vVM1Tvwv",
  "key11": "3VK6F6qSKP4j3F95jv7oqscmdqr9MdiK3TuCGnN3VGgAm4gsAQ8RxK723Q7Wz9fkNufCcgVBWURCBz9c5t46hPHH",
  "key12": "xZPPzuMAbv1a7Gn3GtV9j3iK3f8QHEM3hQ1Nn7KcQFpTYg8poxGwRmjypY8zBtZBybdM1rpKz2HmTroUG7DsqVG",
  "key13": "2eyg5WUxk4AAahr482vWatHg87i21r229TGbHMFNpjwZGmCCEKuWo3ZAJCA9Ziow3iWC47KNDfCYdHTcVqJhaQdN",
  "key14": "2exPojsSCkiLavTjaYoPzrBYpcMZYoDTX3rBxd1oCc6k9c5yY5afujwhzYi4Xryc94JxrJJMUn3rswuz7zaCueMj",
  "key15": "2dteEhsMJcSrB2fM9Cmybg6CVFLUYSBcvscSr7u2HSTvF2oEkWnN142SWAwV5S6zZjjbKYg5ioPkX5Me9NfP7uYS",
  "key16": "44xGxcz836g5nMu9tHYC8my5KcPjZazXmkY1Lw2BhY7MGpkpMUargURgQ4J8gij9rXmw8E45xnRDnSPMQSZrRH9S",
  "key17": "31gdPMdPCBELDj3U1Kwcst1F7WZspYX1oc257pB9k1VuF7pdrx1t1SB24ctRBbL3RTfPxB6XLp4xRuxzmqYDwCrn",
  "key18": "5D7wdGnjFDSFPhVTGAcKm2emycVGY86HdzDVpW4EHExJb8fcUscG5ptjHxS7emVadThTDTeGshY2MSsqeYjjPYeL",
  "key19": "2mi74H9kfnbTQkLC3m8KtAMVA1TALbG3wWic5LnZn1KBRZEVjBYzQ4g3h6iSjCndhw9t66CGUwotxfrd2yRkED6n",
  "key20": "2Hgwju6VocyyujujG9VxhbaWbBJtQavYYGwToGLWmcybxZD8w32ciDwe6cRm3GHCYFotK7GTFFM1jkjCxn28mPLG",
  "key21": "2mzP2ZPVR6T1xTvLHtjzmwiD8VWKYrFF5sCCACXmUwJzCDbMiW3S4UfnPxhmE6cNWKSo6nzT1bZTrycXZsMVUWmG",
  "key22": "5qMSgtVxLyZ7LGLAZ8CrEWXxRYZpEmitS7cBAMZbHXbQb59guZwN9L2TR3T9yvSmuAJjNn8CWFXABnikuLX9Memc",
  "key23": "3spXfz6F12Qoo7jKGwwb5zfWRrXQrUxrkHcAQBJ2cVtUZ93jNvgHi4Fayob5xpP42WgLnQ6Z2xwZKj5ECm691KJ",
  "key24": "2su6jRT5uaY5FVWNvDL5J7FwiQLqvePki7egK97QnF1C6LYXkzBZBs9Eaxsp8f3f5q3yrzfUXhXLZGEaaAwofeZZ",
  "key25": "54u5anJMi7EauVGhZ4n6Qk74pJWK6QKuzmwBMQ63MEa2t7rPE7GSdxGu5LdbsKUnK9HsCzfrjAboEhZmNf6bUDrk",
  "key26": "3qySGeMB3g3NJnVzWKnmfKem5dbkVvnxTtXP9wTCAtD3RCQwPxFKPtnhMPJsk1acgUmCbmWYZ4vajNaCjhEY3zgV",
  "key27": "Ki4TcdM8KspFi3S7xBHAkhWdFZihK9G6KEtAQF21U1QGLej8tvipJ6AneCLyS8911TQ8ojykzB7MZcemjSL8Wt3",
  "key28": "5ngoMLMj1KXnhMg5zyTx96ABSLt2DVDVSxMbLQm8W5GGLF14w4jQknANy5mWPweTne5i9xDi3ozgnAhevhfWZSX4",
  "key29": "1WgPzW28amxkpgQJwZLPtH8Yo24BSiTHuEFbjtwvTnwHY59sK3AFkwjtY2pdn1L27XQhtDEpC57EV1RYW4oaUA7",
  "key30": "GtF5CdD3NYqjGaGZZTAfGHbANEhxc2MzF3vq9skBT73tMvKfGy8Ca5pxJWKAardJBzbvVzbxWQDcswqGxQVGg6P",
  "key31": "3W4UGENVDUuVU7b1KCXqNefMsJJCC7mBmaQvV9pEoFFafZhT8J6FJ2URPjKdmJi31ySQXLXEH19YMAvgyteiKep",
  "key32": "XR4eGKWCujAVweQ8JWXXh2BdwNMr4Wee4n7w9zWiPExhxsPNV72egaRHUaW7WBu8iktDjbinLfFxo2f9WBFFB3x",
  "key33": "2NLaXfw5hLJmGbxNbaaCf83sB9Pzf1MUmmzDms6BqDRppQa6F5Dsczq2u5V8HoJ5SBnyaprYbtYJEk41kQ8njY7n"
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
