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
    "3ZERVuo97nDranN3zDyYjHbwbH8ZegcVMh9dgQSL6sCEcufZMYbxj8VscdT6EjVvbms5j8zMrQ6iasfowHx6h453"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46NbhEo7rz6GExXhyAR14iSNWnKpsUUX7yrN6WRSFKuzv91zhhMHZJox41sUhPw3HQNgte8P7f2q6JaavnN6Lbqv",
  "key1": "4LiknAAWQ1aiUJCug2ERtmjAUJpfhd6btN11vG5E7Tea4tjwHWVP8EgLx78otQac2vH5sVMRepUzNZxYRHcu4eyf",
  "key2": "TZ3jxrQdzaLAyiYcoe4cGX6qke5Ct77aqvhkAbb3nU9uAyFHWRpWLHiJm2tW8rRpC1HYimBRtJq3pH25b2Cu7Qc",
  "key3": "3UeRHm4ff7NzKxjyg4PWd7ATgxGzkNChZ2ieEd917hJZRKie5hFLLCq77ANpufT85q1t9NeVsDVMaWYMpwc7eXVm",
  "key4": "29HokMe8UYV4kFvyhtLTNvjbG7NJw3yyUpVDsM5RJNGzpdyF8haqecmV3HFBv1cvyeCmdC1eLkrDMxbsDV6yw6UV",
  "key5": "5XHB9RCGzCbtUN64RgX2m9XHLNR1LyAmbd6VqmND1JNqaGJVrb6tCULjc9Sj7K8R6rMwB7dTChfYYQZo6aA2wYt5",
  "key6": "56TCUvWvrnQXEcMyuMSGWLg22Fduw41b2erVPURqHjTjXdLxUEXTPeunRYfvJFiAc7D6VjLoMpbwMTwRP8UxC3bi",
  "key7": "3s8UizYDjLgkec1y1TZ7mKjq6macrkZ1vFo6bpYXw16ih5qojXF8avSdrTXZUFZ7ahWkgjeZNu2BK3nwkVjpkzwT",
  "key8": "4aAs9RNRiLDmsmpbwbVR5YQhc6eLetRHmBSbFtqAy9SnudKQtfzQN933vo8ps5N8zFTX8mdTr2WpvmtHyvY2ZqUR",
  "key9": "4DSaQJ3wDp23aV6gFri14L9DNba9f8mB8Yxyq44vvAfKKTgKkoXKKMTnJdmkAkedRyy66jFsL5uvmgZPE21Qw7CK",
  "key10": "46eSRntzeYYrb1TAcE8d36GgDKPPPeMWsu8BRQAZJ5vMfUFNtfAQzKjufB9q9vo81qQWixd4aDiUeibWpMorP8me",
  "key11": "5a1jqziMt3tbP6823hqid5mbCHwADg2AmD4bnNXRX9N2HTrrCMvPBjZNDkXEpwRnGyPyX1hYpjCczHHEZbzHJULK",
  "key12": "4g6ZoR4vmz5EXSy4sPuf11WyQWiWcUaudoZiTxk8f9CsuRMKohyY5segoy32rm7PBP9bpaMUHMaiHBBWBExR3BqN",
  "key13": "5djKpKrayH9XotdoyTxNqrQDUQTx8QySc9TPkBttA7U76dYg7eNnSqA5aeEoJjWfJogekRHupzi3ZoQHKQmUUhUs",
  "key14": "29j4KXzCLF1yvZDPjPodmxxVgDubFefxN4kFeh3XsS6X5aUZJe1ziqaK4KSvBttHRc5uAq4ypcZnKQA1bt9Ey1ht",
  "key15": "5g3foeprC72kWfZdHiHELqqMQXhwD2iEgUauJJBFXQem1nJhpfBMqTKrtSe2jnSYcZSqp2EKQ521Ms5UoLxuBTqE",
  "key16": "5M22adjV6FS5G5aUZujuUxHyxUsWifZhVJS3HY4dngANVbMNoEFcBUH2A2uEe6rmiv1yswTBPPJ3wzp3AKxnsPtC",
  "key17": "2qnDrMHCVfbz4KAZdcKHytes4g72snLwFA3Xr3cd72CeSGjke1P2DPKh289p9ozx9QEs4Ui3R8GEi1mWUQCBFaVD",
  "key18": "4hLpu7wC56cEHV5HF6qEcLMKa4MqbGCaV2qV31zB1cLj4GHchXh9eb1xYZWaV51FEs1h7YS9Wb32z11oNSXLpjrL",
  "key19": "3EQHTHN4XxMo5AEaRBMwh3SGT6oPTpXSTmV3imp9kvdGSM29Cokfi1iswHinAjxgcxpo1DKhBQNYSXgs1wdsec4g",
  "key20": "65LkEMjYrtZ55uqXmhmK5Nko9cNkT7wv3QsCNxkhHhhNwR3Fowjw8eoxgDuBZhjWSvjRY3YXhfebaMyfcphdNsDR",
  "key21": "48VrRersKEBPkZaQTYC7ADnncXzjeueAwPu6onUgVycEuJai4ph2VZVuPfpdHhCnsDABke4UBUWTNDaM5psC5F3W",
  "key22": "54HD1vmTpXKWJM4qVCyPwedgF3vwxmbR4o6ta9MdFHjHiRFBcEAY1SKk74qTMADeScbrFqLbApDfJBuXNbwN3Rq7",
  "key23": "2zK3B23kbz9GjaG1ytyo7HrfDJJzmEVACg44NisXLwG2TM25sxN7F7PmCHkKMuCMUHqeSYr7DWK3uEr6qYNPRCrw",
  "key24": "4Gv61AGyQ1FHg41F4taZZtkuMRwSaE5nRV5VrGjr3fJZjkc6NB3PnsBHoDyjPW54xgfcrkwTYQMRpq3q4YPyXx3R",
  "key25": "9y9KJj3nRTqQbag2uMj93f1U336Bs9eQzuJD9hPxwiHfeFWzKvX23yunkVcqWJGPoZmPVr8f5ToEdokzqjdLU9w",
  "key26": "U2nr5fU5WCTwGTs9rVuPqvao3gzGxVVHtqMh5UHrY1FPk7uerBDUTSwVbepFZiKMgX3g15C733m7F3TxPnTCB1U",
  "key27": "Ac43wNfRBsWEhjwsSsq1a7xZcWzUHirXmBnaVGjgqWRs4epjKNUfwJ8DAgVrwhnLXfiWckSknThSDuDCZGdzdNK",
  "key28": "3c5yPJ8tZFECrbTrbj9gbFULXBjEXTVzYsy84mpkM7YsLfECvKkJuB7YJFJu41E9G5mJKtMmTTaWGMsi84Abgjrn",
  "key29": "5B7BzrxaHjFGPtwbUnWRxqvuWYfHH5Ta7qp65gcc3wm8vhGmro7h61bg4D7heEcJw9cswBz8HJbmc6nVeTEDkL4b",
  "key30": "5Erx9RsbZmihfqRPPYUVE6gad3UdjAJQUiHjU8wcoLTUtx8VuPUYPEsJrykutVCr4TUyu7M1dPNoKB62GvCA8apd",
  "key31": "D14MraXkBRCxrMb5P4YZAWYakR4pVkXhVL7e5r44DoxhE9DGh8p6mHFzbmvLsqjEFr14PwgckVDzrwWZW36Y83w",
  "key32": "24zb9UJviedtbrDKb7teVWQE6Din9HSNsDjy4WbJ8gSJV4dSuLEYjf4oqhckXkYFpsYTLLcFncumX2BkLkQzoL42",
  "key33": "5kgWzTsBYYus7NghhGtF9HpwbYESrLke4JeEEobqM6J6sssBcjqcrxbJy6pYUnDnu4GReU45AhJBBEkKY1EzXMMo",
  "key34": "2yJP6mqGcVSzayWopRnUbaV9s7n7QiuX3iYd3bND5io9DUFcgqRxBn2uP6NtJ2Uvm6qT3sgqGgZF1utGhLqFP9o2",
  "key35": "2mxKXXEmyaVKeSEQ6zRuQfSMTP6LxfFWkFgXd6Svx5DKX3jgXmJ8zTQps6Dh7r25tzPi17oF3yv8EhmnckDLyM4o",
  "key36": "283jhds3P6ughnedyXFqEj74KQKMHvqx7KgwZTqN3Dmxp4ANF4kLPpTyuaNQ2rNqQtMM2GpwcrcNyzG3gL1x4KGW"
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
