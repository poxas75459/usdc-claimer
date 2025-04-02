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
    "44GAAcAMhZVy8XwAVUJW6sCYXhezC2UvpKSBPUWBbTUbR18edJiAu77M1hBnsLgVrnDiRn9X8G5GScPwGBxKYrda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uDWeCP85jXXnpJBRWnw4GVPqEfk9hCdWyb24LyxbyhvvCfgoL571kbvwjJvW9oCFKqm5jCzngCLhEJy2q6yd4DP",
  "key1": "2ZQVHqWo5ABPznpm6eWtRXYFjH4g42nZbuy2XiVGFYVDp93w4g8h8BMAdxSyGR1PHrt2HrxTFhXCXCXzubYSpbe7",
  "key2": "33R86FGPktd9d7R9vQ9PuFixsQfjkG9MhGtXGN8nNoP57o1rzZrLJqjSzQLKnZaLkjFUFFN76Xe8AvFh28joktoE",
  "key3": "444FAYqN71ZAhFjed9pcxeiodwVu3QHAzMWyLycfV5WopXdGej6g1JSdmXnJbz78ucSUzB9yFPGTuMRAxxBFXtH5",
  "key4": "KiqZQoUDGQ58b59GcwJMQnj9qQbFbrMexd6vSNrF4Cr26pU9hCxMm2XEk8tjrRJz2a5Lt8pPrLfjgyrjAnYo1E1",
  "key5": "46ZzAhXGSMiPKnwTNj9apkBUhzNJRLxfB6Vm6HnsAiyWzERWf4JrLf7SR8mhhvS5kXqgHDVbm6DXMRd4tV2UC1ey",
  "key6": "NpSzNf3omP6nWEpb5z5yAjUVm8otpyTGyZwug6AqfhKpR3CyjjLVfCbJjm2ZPbrKUeV1JTdY45KKGWQ3vYXfcNM",
  "key7": "62ifPurinhTviCiCWjUL1MxqeAyqS5D71XUqQhMJk8KZGg6WHEa7aJivFUqAb6HbwMqsB4ZmYhheTFM773k3Hk6y",
  "key8": "5qS8gW3D46AzBeUfCGwfe8GQew1AxTzDJ7qqWF29XhbcWRACWyvcsSaZSBv6QDVJ3UoycMDcvc3RPSoXTaLcuMhr",
  "key9": "3JBVoJpJbKpv29n8hGpiKNXsUnzmr8HdVQQet5Jmy4JNwHivBL41AmhxV87y8cZFv1BCrnDh5EhPBcLHVu7hyzJG",
  "key10": "3ifvw1pPvYrfyskB4qPLBWgoKJR3ZXWmPQtNRM3PFkybEQFLcQyTzY9vz7sFCS7BfYZQJWSDRhqWnqqncVNe11SP",
  "key11": "3XvLBTCxnLfoKdrBa1gMZXKftBV14LEM2esbTNkYaRN7PwmcHLD1g47JLa18wKL98Qc4C6J73GWRUZkGf6QCNsGT",
  "key12": "4aZwxAH4YN5dpdKxt9Y1YiQzAacdjyvg6e8dq8mi1yNwz1KZuhZewtcKDUDD7g6cJ7tsSXrjEjhc7pMA87SqoDfJ",
  "key13": "2XMzw4poaQM8SL4NVyfu3RQHyguKKG6wdWcruWqvvqhK8CVx55zmrqaWcgbTvbC6hdH4sj6yAmFjFZFBCJG89TUf",
  "key14": "2Qom8uWpN2CQ2y3zKQxEjtAXDNpTV9kVB8AdXQvsezUQ3tQ5t21AsH7gZmZ3q2ngbZSRLcWzhPYrey4MRY2JT2KF",
  "key15": "4fbMSQ7H9Fc9AwuG5afGqFhkM2iPok7FYXjfVdvHRLJw7tUQXM38QSJmnaDindzWAxFRfS6zd6vKR1tSmhHZ3vdi",
  "key16": "5auQvRKULEibbAE9w36cCt9Nizr8FXbyRugWaBQH45du7HFesMfGxAopLxaMe8swZfSjcNu3vV5ChEYfLqPcQch",
  "key17": "wDnxC49cs1X9k3ow6L4dptxAcxSoXQZDHBf1fuBJh4aiB5c2GaCoz3Z61JXSD8FaSgqxurcHmpnZVWCcEHBcvxa",
  "key18": "3aQUk3StD7UU6XtqeeEF79SBeG4qR7tzC91uEiFTvB6rWpBTuQRP3YnP4zAs6fnFr1xvVsWpyqXJk5reZFdKzg1f",
  "key19": "3V36P4pXWBJxrpzkNBKrhZiy9uX7JNELjcwLiCwdW9Jihbiq5jgCabF96yLuBnXS4obUCNdkBtDpRNGdwVBHFVfD",
  "key20": "5joUT7FveQzfpVaV1WkuQFpPwiSrwf25X2624Zzw53mJiD23bMBRRwX1Sxiy2yXmpPMwEy7iTkV5KoFB653iHXPh",
  "key21": "2QLXfdXLtKgVEsBrgAsdRmJthNzPHtQ63C3zGf3jjd6ZeKKPTt6Zh4Dn9S3xPv8kFiq2Ns28m74GToA5P1d4UagG",
  "key22": "2SRBi3E8BxSKsLr9jvmJPeagzfvU35pkGrcJCY5ERxoECmhVjWBpBF29cRgxzSiagSZz2LqJbLwQsD1NSSVd2NmC",
  "key23": "yBEXcJ7q8hJDrQcR8vm7fCFTqF7mpei6U3ghyendk6RcJeqgf4NsrsVE7n1Yr2xeRhM2tcxUwm3EcR8oYq3zEXk",
  "key24": "3z8rHguVBHyDGzhiD5Su39Ra2NLGd21CkZfxW3P3vUprvYkqizMEaEQQj4qGhgzg2hsPui4hYhySwC1MJHpBztuC",
  "key25": "2Kbktoi9Cdj9hbVXhyDrskAMpbNdpfadMnKRHrFnichqSH2xwfoKi6qwLVW4pCPPcMttg3LkEH3GHJRdCWqmLa8M",
  "key26": "48LNNDKJwePmwWriSiBozFNACfAgMWor4ZXURTcPA7QkvSH5KdoH4VA32fdEpyP9UhQW6RSHkf5zRvMfVm7Qtczy",
  "key27": "5iUPu7nW7vvG3cqTrf3GpzgygQpSR5rYTZGeLZp8MMQAESYJ8oo96n2f9jgT52fPZc7vTWK9TriPS4TSsd5JW6b",
  "key28": "5vWa64PNhThxmxkPN7mBgQ3xhCjHHcW3TVu7BvYLSrgvpWKKFtinmpMTGphfXMqdmuNi6H7bsKjQ3zPFjQ3kXqpV",
  "key29": "526wk6GRjtnwzyoYjH4euQcSJnvp7UUoRR2tcVUCGTE1YeBoiANLqW5sKceLi1Ewc42VZBBMGZkoCSVvzHGwGo85",
  "key30": "j2VfNJYq4GXYKYw4QmpQfGMvu3FR39uPCQwnRh5qBUEAf3dWoQuVYhRYPfx46qvcAVuE9PoC6DR4Z7ubVHoXChj",
  "key31": "5MsU4VrJb5WJeSghyJBTpTshvA9rmgfTHGbAvEFMa8znawqGMrAaTGGZNhtsFdDzaUh7KgKQoqC2Jc3cYjFjSdch",
  "key32": "51ejo7vbLRnevGYM9gkD8PPA3YHqwCaaY7cAWRqJKpfZ31nvavVfoy75W6mUUVhGw1CuvkRdLNk1nFyjZhmc7Q54",
  "key33": "2zGpUoCcV8vGfgqhwUfDPgXbEseQHHuD1CFBmsQ9w2J1ZSpb9qTzheuaTNnVUwDuMSX85qWMmaMbuh5MgCg3Yejg"
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
