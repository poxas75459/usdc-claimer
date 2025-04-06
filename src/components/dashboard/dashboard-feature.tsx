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
    "2DsjsKAG9JPjKHruzvC5XVxcDVCTaAyXbq4P6JUDnAxowa8Dzn22g7ogDwydtKQzFkfnEXv3BqZYfj6YgcDn8e5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "473eWaoxvZwVwKe5actpYcFZdG5afEFXXqu5492NKWw8RPygjiWRoVNDJLSdgdQugYb5dXU2DsT34gykUZ6nrgDG",
  "key1": "vWVZX4nLDw5CqhEByVK7G6bGvYn4kV62CdG74PVBDQDgHXtqTXAj7rFVXVZoMPiSMAASKEPWEfWD5snUrE1iKt7",
  "key2": "5mYF3FTkQC1Dsxgg5jHX8nhoLGpUcBPoB9Cv5sUdEdJNGT3iqnrSQJ7YyWpaf7jJ6Hct4Wbz5SBa2dA7UE8jmk4P",
  "key3": "4RKsBm6E2i2LpjUkW8hvCYsHz6cNg6ivSevYNL8WUszzE1sXwTwNWMJkbrJvgwmLTkuRPD1zauinT47zp5RT3BMf",
  "key4": "3TdHPMtXoDAviTuPHujga31JT6gQP74V26kW7AcQ973awer6QDDGcviBb1DvtmzT5JiL6rKU4WSETb8hUwAnhaWs",
  "key5": "5WEyHgZR5sqMuyz8cKcLCPRqpvN5obH9pkKQsQz59AZVXCdosaqUcVgifdnvYgoRJ8R7tAjX2qrgKfojyy8fi7S1",
  "key6": "4LiTd6JMF9cLZGitZhKmFVXjAievJsLTPL3PnLG8ihwzShe4kYY8oY4c4u1X4Wo1o15auEHP5ojpmLdisPRPcnJE",
  "key7": "51BJbMw9VpiV97NYyMnJJB2LavWPZEcbkStYut1RtKEyDFdfnReMMQjn5vo18ynDDhY9sDGZ2D75U4i8KZ2Zbefj",
  "key8": "3fa9gwJ8acwwxsTHpwVXTKjZuN5yaYDS9jxy9wSA6eM688ZtcyAKq17G7p4sDGNuxK3Dd9ZK4dSyhU6xipaX622Y",
  "key9": "29UeuursMgzPFckF7Sb4rzoRjJzmD64CkqGJtQnuyMybLLfnxYpia7jfBy8VkRHqiEG4b946p34dz3ECsV4DdCYh",
  "key10": "abJmNqPczwnvUfMgL6nvmMwjDsiJZkdoBCjqczMJJyfm4wgBmg15ZYJwLJpo9tKedEoQnZyCGbhRHzmEKxaRQXd",
  "key11": "5nmQJtgfdLV9mXY9xyMRWLDF4HBbXEy6A9xR4P5SNaZnfmTaJTaCQ1QAh1S1YwYwHzRFt7wP1fHMZh36EQXrqvHZ",
  "key12": "5FTNR1VM2YNNniVgBxHcXdtSAZveCuBTPjcuVFy8UsBA3tnEkGg2UMMM4fqGtbU2eAhggCGKzXobPYR39X5qZed4",
  "key13": "41YJUFmHbAZngkrMV5677abVdUvwCwQswZjKNTy3fUUWy46senuPJTs4djfd5RzsVYhhtRNtsPNXVFJRUfvLRWAL",
  "key14": "5revoomHfyKJgLzn6bnSjPCqC5Ut8RkYhojDX4Eu9bu1jCPbWDqRPRXYz4z3mSkPdf9G91QZKvUL9Wy9h9CRTVLW",
  "key15": "2SDZKAewMZg4fw4UFbqk6etWYYaWuR5ZEk3jZDCedHYFdqxjQLYP7RnadDTydqyoDJBbYgqCzhQpNBy5zGxFS5T3",
  "key16": "5wnQCxGhmn5rUaEdpAjQ4S2MHCVPKtz9MQE4zJFAdeSLMbz627WBvGSVvHtiBveCakzNjKxGFxZPMMHwB85UyeuX",
  "key17": "3wgkpdXMNvZr24Yu2H8bTYmMiSo48Ap3RKdDE4hGZSXy7zPhf5qSNfFQqg9Cfak42MjxVc8yPp56ut55GnonS6CC",
  "key18": "2DMxKUdhuz3VApT7yHeKubM4BZ5dgDPcY3DyUUb1fztPTGEoc8QvwazSRdK74Evg56iHsaKBb4MKbYy9fFxQJ3cP",
  "key19": "4MHuRTF5XpUMM6QeE9k78Rew8AL9pMn7FMqS6iupokt3CZ78CAJpsFQ3xsQJxdYLvszJL29gtNCBVfPi29zqVPvx",
  "key20": "2tJRommnfugmh6Zsv27oUA3y4GgJEoszaA9i65oj2YWsp6Wt47jSMpd8R2YbsaAhkLSkwoA5sbtHpb6LYzbUPiok",
  "key21": "5gAg5PyphHnPLkjRYg81qWfdVZvu7zmruxnYcmCkb2ihAsf5nmBvqwRYg3iqs63ST5yAQgUtdwzwc724XL9TYrX1",
  "key22": "5Dk1JBD2YyJcE6zaroAd7oXg5JkLuvdYC8fJF73aj2oXBLoHnzqF4VoVT6Hm4D9Kv5k6zTGqkhr2ckBVj8wto8WR",
  "key23": "5jMThLsChfw2PDW54vBp3nw69NM6Tu2dAYsrbrF8CsVHL5nGhYADyVpqris7V712fKxuF3MPr3B9t1o2vER9GVXK",
  "key24": "3RwC4P6JThKUAJxoi7SXytXY4QqSAPYSJqYFxFDXRA7jdCJ1MsbfFM23yuQ4Gw7pMuSo4vvyTEkARK8QQjHpKk3k",
  "key25": "4C6f4goxxdYapgLN98uxX39YWQdqUQmadga5w9vLm7fFX6N8ZFbF6WtVVuTouZHtXowi4kJWFeuonRsjYcPE5Xm6",
  "key26": "V58FC3VPMhyrKmT7ZeX3mh7t6Ep5GvATuyDguabv1vGRD1gJE74ThzHw3keK9p7SqP4Vr87S9fWhAjjuWKgNZwe",
  "key27": "1yBuT5UG99W2QrVgLEtskisQQXsk8u1kmgDyRJLsP7jeVJYtRZCkXJJ5fWxt7oc97nDYmpAsQjqoUSMXWrgbdud",
  "key28": "5xUmV8AfKMh7p4NxdHqZMgkUabeVM9h9SRNvELE9miqAGdwvDLpWYEvEDSavhEdsSUVedAsf7k3CkFT98H5vo689",
  "key29": "57qLyseSQVFYurWEEwDdxBFqVR5Hu8Aco7eGopJZbmcWmWsDVZjPPfct9CU7pd2wGowEkGUMTV789auT9yMqZ7dJ",
  "key30": "249ZW8MDrWLtBoJwhxftE6MfDYMRyPczTPnk7v63LLSfwLcQM7BUKcbiFvCCotmgeX2Vhq23V1KW6t6jBr8HNkia",
  "key31": "5JCFhzairFkEDPUuZvHi9Q9oiMKn1esokm5fixbpFghTY7dCYEQJVvu7T2jgN1vGPtSYfh5UPk9SLoXduzLrfktW",
  "key32": "JCaRcX8rP9tp5jHAQGY9K4KDGoP5uj2HHX9QEHJZTJhcGEVWWjCZSjbNJKjbfg2QCPa3gziHGPT1343oTxF9UDE",
  "key33": "4DXqH9vA4JqZZ3wy3aY8DUGBs9bFEYRpTR3egHeH5eViiEtMEd7KoYQ2snhbZ2it9W6Lv7AAEh7gJnD7BdrSLmMd",
  "key34": "2XANmZGuqVbh7tHKwcEDuz3Qen3TJA9r46N1J8o6mEdB8LLwzUif2SecgLCr5sDBZ57Ry4LUtDzn6XVEcizMJLL6",
  "key35": "6wyMqvvtLHQQQpzGeKRSZTjx77ka1mSa9GJZiAmw6gPxQ6aAeEsBVw4x8tXVjWqAMiA5X7Ugg5d8KNdHa5UfGbU"
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
