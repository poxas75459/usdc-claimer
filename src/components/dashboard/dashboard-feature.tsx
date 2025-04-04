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
    "25GAwfsqF9Hy1t8HuGJSskHABypth6giskCYmhq1GmHyjZVX7fqVuuAmcrp7jbUBNdn9ZqHFxoB9gEJfAwgaiXPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RcFuSxZzYZQL8m7NG1pX7FvFqiiWPdZQCzMT6vH7tghbv6rZRSiqqifeWr9DNN9DjurTVVeJZzCDJyrv33VWgnh",
  "key1": "23DdA85quCtKj7EtYsr76tZCjfFYEy9D3JQveKZXdF9yanN4LMXeMFmvybntXZv4fauE7ocwWSajubo341joMQc5",
  "key2": "5rHngb37eRjd9QRAhrz851U1SeLq7D68eSCZAHCBdXGqZPXSJrzEUZd3FSnZJiUZ8WpyAsvkcXnGsbLztUFP2sc8",
  "key3": "3ZAHeB71tXNcrB6rthdV4SzUmkgTmLYYAVhSFF5hrFctAXvco9eNJmTn7H2jztSDc1eMsoraR1nyriHxjcA9Aepx",
  "key4": "y4Dj1VQmzxVz5iJUmwQeuMfCUAFVQ6zpuWHuThpsJWGnvgQ6zdAwR17tVtx2grUXci2DWgfroFt4XrBnbdz3TZk",
  "key5": "3HBpSqHMAfhhfHc6yHLUebqAKMd6eskaeyE5KBnqYYQJd2x8m2qjwspYBLuSxnBFxtoXJdodeHoUG6Pbh8bv73sm",
  "key6": "43sifaor5bV4tVq4xQ1opss6cptMtvkFS1KK4wAHKoFjzAX4zvHyYkWS9F8w7fGYfFniy61kDtNNjcoDYPN9J25y",
  "key7": "2ynqzq1PCiFuEaEhbQ1qTMWZXmshGBVmmTeFBxeRV38CwSfGw2sKhc2XK9KC9QkfniSYuu1JR8gy3M2qeinVRccZ",
  "key8": "36kA13tmFVULXV5JXvAU4Avoz2o18RC9ay4PK7RJci2ni7s5gBqtPmEi19Y8aniPHAgRDBHVTj8s89j9Xn4dLbw4",
  "key9": "4bpuXxkHYiGGV3Pjgo8AKbs2M65CHWfjSYXetuWzva85kMnuYMJoX65AGnsMTUMcZCEr4YGGcdLjHCD6LsNri3eV",
  "key10": "5PKGwBKN11KughphBrGmgFr5okUgdfVyMEj54WZWqLKzJ1pA2fY5nYJU9Rg4LvAJjRG9pKGX3NNhmxvXdhq8E9fb",
  "key11": "kMDvkR3cScgeVMMQ2fFTkyaQWHtMczNpZibXR9ZvuHX7tn39ng6CQxq3VrLSWyxsd3LNQh1viUFiAkT1X6HKh8t",
  "key12": "5sVAyNCqvPPZgLn4ZGpxFDaaxoGZtBP35u1fECm7dduidJMDbKcGehfY6PxhU334pKRcpAx17nZBasYWobKCJtCz",
  "key13": "32TZbucvQKm3J1Jvn9tU3d893XmUMdM4AAL9gRFVRRbLDm6uiD7m8sCVmYEtKEezV47PnC9vi4ckMrZBv1w8yZeN",
  "key14": "3N9gKNokPbHCWQRJqbucFpgnmT64Kg45rfszzDEn3MYHSDSAybJSHo5ihmsA9ULSDn9MGzK3EucZSRayENvXRAkj",
  "key15": "5XLAyqDyP8D6tv2btTtNgSFugsoYwxWbtLTkEiJtjkCJ8M5zmbWLMjA5cVADrn9V7LUak3Zg9KxKfhGtDxhqSibd",
  "key16": "4osNjiBJL96h6F15vhFv7czZB56iQJAZSzFzsjZeWEcGSVNZDF1zVhhmGS55fnAH6ivrd38n9LmC9z5Sqp5q85Tz",
  "key17": "4h8xTXiQBrqUeNQphXnv4jtoHcLrbL1oPSdSn5UkyKj7f8kMD4FWjMQpYJ1ZZYXXnFDmWqu46h3dSdS2Bi3q5ftK",
  "key18": "CuvndDrRzz39P1Hpsq6Ra8DQcDERkZfSDtyvmkZUcQDv8FQuhBZPx5PyBYsSyGUXfin7nAGjTd4BkNNB6Kb1F7y",
  "key19": "3s4whSYhqgWfatjBVePpA3WX5CkgYUT8HZ9Srwc35mza38RgTorYvRVMPVmuLK7KwJduw5aaH65uKnqq5xB9h3Zi",
  "key20": "2MQy4vXTR4aqn9b8Kp4uZ4236vWX9QVmS6GvFBWkpLc6rSaBrC6nGwwQrV9drcfrrQPSh2aHAC3wGZDRQj25fk4i",
  "key21": "5WpNQ126dUk5xssktt1pvwSkqmWZTQ2yBv3gxwKWPAe7VDYMSxUQhtYQVrD1C8dWUtyuUZfp9C1ReRDtiWacRAN2",
  "key22": "dGeDvfnidbqNaV4JVQYHYa4SYw2XqwJgVnHNPeMCFTBndmYygMLHNhk9jKbfkv5SvBU4GZA3eb1aNwin62t5abz",
  "key23": "3YizoaxQFdDx7Htx6AJAKW6mVjSuMjnWBL7jrTTdYDFxPKtkaCmnEH2crMUtvjpRGoJHg8WFLhJV7inEY5MZnxpe",
  "key24": "4vqKaY1aJaxoUHjMv31D8DDXFu15NohyzPb6F3kJVCgx1j6tTyVthwHCw2Yv3gS9PjeQkwUaaQ82kLm1ewn6Ed5V",
  "key25": "5WMdXKSw4y6CZbcLwhoZVde323ZBhX7VzA45S5e7UhTaPGkqReum7eLmEyvo7dFdCixWAyZfemtGFjJHbEj7a8WF",
  "key26": "PmtVgLSoURNUpPtbdKFZysX7FCXwPe5wqjPH78MG6DqnwZGeWbVLMgpisvYLVtMM2bc9RGRh8UhPeNMptaLph5n",
  "key27": "9bjJGSo6EEKVgmrKCv3hge1aWTe56GmLEpLQVEg7kirbz8HotMMn5mLTp5TVNLyDUx2KrKWymVq657WGscViDps",
  "key28": "638sD9p4tQZz81Ky7r2kdmsJt6j8sGVzCmT9fx7oFtdw8QonmNRgZDRVNHLpzPTx81H9Y5kxGMcgPymNQB39cD23",
  "key29": "3XpVQakRuqgmfWmGzs5TbULzEugp3qezupX63BwHKRY3QxUbKh7i59f8U3TEEeSUyeSfda79mYdGmj6wANwbSmhV",
  "key30": "51NX5nYW17vdEqYctyNH2uSRpPBDWzYevwjMXkLdcUCmF1uQ6QCGYEJ7YKRLj1wPMWyQgCN7iWcA1BYBM4drrE1v",
  "key31": "53JGBZcDmZTRDh4D1dUYr8kJmEhMMsU1NDjP5T2XuwikBx9ZhvctpDbM7zq9HsMyQsVPyDjyr8L8XME79AFdbTt3",
  "key32": "2AnAcdCfkvmgVC9sGPRqV1cMh2qQH6c2B2hAMqhKkPQ2zBrDx6TsgAJ8zTJ4zVQd4iCfVEZ1fVevAJtDz1NHhfmm",
  "key33": "4953LA3B8WcRqSrJ17GobsrWfoKBGuR6u7E6cM4LCRaFbvShEYK4ndRfyFUyBjqgY5ubFM2CdTHUQTyskaBGV1Kx"
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
