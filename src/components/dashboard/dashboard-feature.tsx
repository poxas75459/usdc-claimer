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
    "3YdX7fPEtQas3Tz7oPt3Qh9FADXMJWRFyTeZwQ5GDk4S43Y518vnUKrcN3SUDWh5p2LEmhKJXAF3m5yKfzhfZrwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k89QVpVMmb5QWgRx6rJiCP7fh2pm2CqxSdm5XaKMUr21rUWRRfEdTebtHvhEkgGPVvumZJxqdUaGCAHreQRT9Fx",
  "key1": "B91HjJ6aTV1odgpyHrS2ZUoHhgWkTUUGmqwU4EqsZQseryevYbjpuNBxZB15ABJsYXccPGeWVL2zSNDT1Dd97yy",
  "key2": "3ZrKaBuWJMTofdDcKJTJWvorALfKwuK5YJmRtvRPYZJVjkNbCLpCQrCS7NAuXohZfBorbNrUGvkoB2SWoEb5dBEM",
  "key3": "2SC8Bu2o3kJyTjgUKqKZJCJo7KifZm659HHE8CH4y68ZBXNFe4xX9eEEYf4E4VMdfofMNkcmdypGj2rj4KxvUm4a",
  "key4": "2WqriPzVAbefSh4353hYE4LSqX2YBsrdC9tu8oBKVSECrfR6q4iEJEMmwbiR3qb3pCancvRLscZQDPnM5AxBR5wX",
  "key5": "2Fkv3ZzJ8AjD9uD9YTpgj7kKB5gtGGTkxpRxW16frzr827aWT5anqPGUn6WSETWS5pT2h8PzgzirLY5aCKpenEhE",
  "key6": "2N8KxCS7eKGu5oALyJF9yKMMHMDpq9Sbgj5ENkknCWUSWoczzULuaMv4qLcM2XL6qH6TQaqQSBqJjehQcM7wmcBN",
  "key7": "651jWXbkENFHcYYTxPGRQEyu6QLA6BRCxWb1knYMQzo91LQgTaa23aWmRNUshXM7wXLR6ugnTGGJHe43LHpQKSs3",
  "key8": "59M9w9DHPaVh2Bj4SkGJ2m9yvk6iX4LzKRoxPajosELEe44fjH5Y8JgevCjJidVDCoVQmismDtBKFVmbbBpkNF9V",
  "key9": "2Pb4VZWfXubwT16Sp5LK6gPA4naXcKmFb5XjRHHXSEVbwJA3QucTgjY9p5ukbDptQptukqHodXXqJBA9nX6ZPJAw",
  "key10": "2QKB55FT81GFqm96hYLPsXC8kaxU5H2ZtWs1DtmBPxAUjemmoh6zDM9dur9zp6ijcodBx7Bi8bkQKymL1Uv1GLp",
  "key11": "4vMKA3CfPmdSwWXvyN5CbWErynMDPiRpvSTQTyXMJC6BjfwkFSScntuqGGg75MFm8kmq7T7cVvuEvXsVeh3FNKxb",
  "key12": "6T9DRmAro3pZBYoNvnWNufFhZGwLaJfiEe3nF6zDHfGLwX9NaVhfQG1UihzAfVsmFKden1fareMqbnbsnMmoYGB",
  "key13": "3zBtKioGgqrVcHXEiqAPw9oirw68dzmZ3DWi7nnN6vamTJ6cxASwUFuza6wq9j1xihCeB3ikg3vb1CJFkh5eEaz8",
  "key14": "4WFAse8BHRhXr5r36MSHK7L6nMtsRryxJn3t654tucAS7KjPRkhLC5khc39GD2qwbewXJ3KYCz58kJbc77WHcJCH",
  "key15": "2WuDiryredivqqfL8zd9Kq6ZmLTfCgmWttzCHrFAtX9gqKHvTs4dCCLQ1GBUr58bweL1jbmJ1jetMi7aFbYUwLsw",
  "key16": "2rKL6xdp6aurTEYM8p6eXHbSndXPf8vd9VtNmTo4grmKKPHkbxLvkX67sy1kWFmbdNFeyfcdx3eZuG1vDjdGhyuT",
  "key17": "3iMD79NM3LD7D3eGnknzRG2draY919Rn43A2ajegGxvfZZ4p4TCUieFcqauRUgXemhph1h8UFJ9wxkb3PhKFu2Si",
  "key18": "4FjeUTWstx7qMYxTYV1pR2EFzj9MutkZbksFCUdDarjBBHneTe1Zdnmk4YR5QK3muM7NEN2STcefASVJ3eMRWHH",
  "key19": "4qJkuNZ1wWhsc2YAVmURZgsAJ6B2MMxJUHXLoo3WeL3M1xdfoioQwttEZ8sakVJPbsuztfudGQdw2EBAdFhKXx7y",
  "key20": "2yaorasB6SpNG4G1DJbP43ZSzeCwb6RedD4MDfvCyN4f5b5TBKb16yqdFJyDUXXSa8yqMGrmWcrYMk8xX18pWiYW",
  "key21": "KUWXxfeZEviCydibcgCNLZzr8TtGRKFab1NMUMqL7JyxbegdtQe35YdMC3Df7QjzRNfNLd54cHvT1HY3CFf3YUD",
  "key22": "4GT1BL3d9sPSgPkQXgsfZF1hmR2LLch8BFPFG1uDRK65xwATRrNLDtWs3SmJxaKYd6WnduLdMqMvqCYdpHxEbXiR",
  "key23": "5SAupKaECL4bVhypRRy5P7jbx2soijw8k3JGpd9vDPH3atDvpzBu3n554AKWAmnHSfo24Q8qZUUbTtyQkHumiqX2",
  "key24": "5fxei3RwzYQQSHM5am9Df58MUHNU4igADnZ8iCaV7TdXT7UcwqYPmLFFzD3Bnst1mSAK6LpzB1aRErjdc99yJG5P",
  "key25": "3sCn6m4JuV7SuFPWzdnVkRanMXZmJtWwmdaN9EVbRLgGuta3s3mvZTngbBXShbch5aYbaGnEVfrXYGdRPN8a9Zpa",
  "key26": "ev1TV2ghHxzunyhf84wWCjdZENF8A4peCTsRqaH1GHnBwcwCwQiywVTPYu37yJxJRm5pQoTLyrMAN397ks3CDxv",
  "key27": "4YyVonedxKPrvHv8anPS8AAYrY3wJhZeonMdX91rMWNJYvfQTqjmnKJMhPJk4J6sJMBtjqz6Bd1vaLNherxof5ug",
  "key28": "fQSCkqobAAK52FiRh2mKQKDH3xj4vB52ywjQRZz9zh4QMymcPnRpftUAaWFQWE8d51i8Xy7gCSjKpsWG424KN2G",
  "key29": "4THiEex7egKhG9FFTsDRK3EjR7VZDLN1dADLEK7mfd374hcEGM2zsC31mMaTJRW8mnxqefY9k1QQJyVYTNzjrAFG",
  "key30": "59uRJa9uLgj7SHaEsKC7MSzasvq5hQaCsH62eEy4vaUAEewTpiGxaxQpPGhFXvf7h4kgSBSJiRd8QJQ2pDRGkyV3",
  "key31": "5VJhxiJfzGYSb4kuzCLDRJKFLVqTv4VFtwq7GT1AYEnheJWECxd9UrCBNf7RyxYqYouaPM797tvvtUCmdiD6XYbc",
  "key32": "4SwZgZu136euTJgfLetZv5eTWT6FL5PmYdYqYkJ5t9Yx1kRrkrqxbV8GjcyVQ14QRZcWSC2XaGKAdCtpfzSLG8iG",
  "key33": "5vX2StpCsMRbwq3hZVnyPkayTsniVBZfN8dVqAMkSeu8WDiM2xLNoJfYoVXK2QXSqMQ6ErhmAxTttAcjkzERH3HD",
  "key34": "53uT1QZ73A44ogFoAHiMJ5h4SMah6gL5W3R5Cc12Uobvw6JMGteA2e1sFcoPAFW5K2JfkrxfcjdPaJYAfBMi6Chq",
  "key35": "5GYW6DLa6dCCmttKrTuU2cWHwoBuKvkerx7r7ziGK3qvnkHBepxW45dmJkA462cfXZXjXue6AXDqSF5ZcdVQjTbd",
  "key36": "2LYt2Ac2Cy5T98BqWu5RRyY2GJ3zpQWD5juymT7ZkJPcqeV5UGCVHa82BTuCxhzpB1ttXqdoaPCjeqJAJXYC879h",
  "key37": "2r3Ai4xYZ5UfEHCUr82XTNuPsi2iApCUkhoUVd84xwgYgdsLFCoCd9JHN7FTUdouigZqUrwfWmdJ1rQyVTcPDXN9",
  "key38": "4GbQCRoNVcmWmUJVvR67SPXtD9gn1iicHt2yD1oMQ1EmSYCGaqeYgz5cKxCmpUK3pgw1Ze995vUxqMgr648Xrxiu"
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
