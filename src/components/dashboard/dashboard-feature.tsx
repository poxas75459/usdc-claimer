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
    "2SEUbLM4qkrwNW2hkCHhC6Yx9hvKrr9j4YMyQLevRNpH6eHvMhJjvV5RAyFWXbp8bVMbkjL9UA2ZuTMWUeztbyga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "16vPSWBgXjaggqTrciE9HSqYp5e6aW1JD74MdXDJ5MTwpdvcAcBSqnyTyE8YjaguP7MaUCBFnk5d6hw89ABpCFx",
  "key1": "4KyHyzPszzDT38MdE5qgSe3iXDvnFUDPdtqQUh7DWmAkwrzcbwZxde2EkW3zP9oknXjsbn5noiQpjyYh6Kez23t4",
  "key2": "2Uh4WkFv4z5bvLpCWV4JG2nDZZQT9sKDZTrCwgE94tnZxcK8dMF7JVTHyUB2KwrNFjGitCFk4SocxSAJCK79iFnM",
  "key3": "61jxbqpYP2i4x32m19xDfZs7ef44HsDDKuMDqtCRjyufiVyn6P34CruVfUZv35ssEvBK8ipQ5hMuZ4Z7zFHTNHCJ",
  "key4": "4G9A16geraHPJ7XXvxyhGk1F21UUxVcmNdY5py766QuKq1YMgVKhdwK721kXozuh2TQyza74Kzwaoce247PThiRh",
  "key5": "3EQAvPStcoxqyqvQVeatFq55pd3P1pD2kmLeAPMq7MHYyt8MvBLUrPxxEcYDtmuMPKdtzwbSdxN5UfWZQRfmJrNz",
  "key6": "2ev1JbTyVms7KTbBQ4LfqKiQHZWJuiwpcTWKzqYbQYoWwAyd4VkKF5Lp7HTMPJp6DA2TtuSKKqdpZi53mM57Kn5b",
  "key7": "3NqZR4mUQUTca621jXZwtcyEfEh8bRbdmaS52cqvJZzRYMNE78SQvCqQsL3wredFPNit9PXBcs7qZQMr5JrKd7BN",
  "key8": "QzUy6kRhpgFrfyK7cVTpfPkRmWdaSS2oSXRxAeVHfc1gwa4sr4dnHNjZMm6ZJox16eUBE46dS3QQEKb4wX2Ciny",
  "key9": "5bktuA6GRrmaj1BtVZypAe1v357TJZiBH9GwvW6G6pQivCJPTzTUHgtVhrQK8qTWos9EHycorDWzGcnkaFhLZR1Y",
  "key10": "2QvBe3Uup61zBWER75rgk9nhavxT2qtoTgnpTHGx5NUZvD97FQZLEXuT8fjZf4cE6omTU2J5vvkgdGXQeN6JTuvi",
  "key11": "4Xo8Mg66totKwUT9WHdkxtTH1v3UtwciLoMMeuE1Fz8bcjxNwb4ihrKZ1JH1o9rLb1USTaPLCRMb92FepGKSm2ib",
  "key12": "fYEGaNXbnywSfS6qf4sZBmbFGed6CoZNEzYzdLmTXC6TNGT8swTwWvTkrqe1AVSYE8WzoT8u1mnRR4cdeTaKfYg",
  "key13": "5cKGsPno6FeKYipmAZqhBYt1JSzdzUdL7toHDq4z1e2PnWYfEk8u8yjoueYcfvRrtweidSuFM6N4u3z8B1Qez38N",
  "key14": "2hvhte4K2xdA2bfuuKssEmYc65Dj6UDe1wK9wAZgkVRD6b2vTd1xAhExJTySU6pgbCnQM5sf9AWwBtG9PofuEfb9",
  "key15": "nYUJx34K5huUKQt4wXX4B6cTPckWPxbAwzuXPKDfL4FZ4CytWherUvGfq2xwU4rJ9AQtJs1igqTP4ambJg3k2gy",
  "key16": "27gwQiZwueCsxkgbSTad2jASfgKGnRNoXDeqUbTJTeHCrmvZn3ccXTzcmzr3FZxXDpXVxJUfJrNhi9LrawaUnuab",
  "key17": "bG5FSQ5fYQeoHXdphDhqkbRtWyTmmf3ciGVTwHr1GS1Kx7d4rKBzE5fk1q4iBDGDMqFkkWLrAmSigQah7hJusrR",
  "key18": "62CzD9QggdtzpF8Tk6iusGC5B76yeqHkzExoVjYdL57RHzL9eDAEPshVoFmqGKM9951nPt7a27dkfBUDkHGgZCsm",
  "key19": "3brhkrqHmaPZtTvL2bpxMhM3SJSA8n6qZsQcnB3M5sy2NqWB9QiXMA8BThAu7RJYrUoEnQNCrUqerMmdUPTHgBZp",
  "key20": "2RfCgUuaNM75zgtyZhsmAy1xCSyDGWv9tpoWuTQWn4caYgMBi9QG1L6YPkj6zGNAfPieycu7JFM25BxRCC15iwZk",
  "key21": "2vbLV7AeZcu4Dmv9CC7QJEJRWjZL9UAF7DpakGh6oxK9cDWEiprMH9UWhumU8KfThZHskVbXqJ7FEBawrr76819n",
  "key22": "5K1G1DM8Dk2mF2A541t7i718K7f6DJj3NXTnzSXjj17gorJaWYZdokFcBoum4kiupp94sXfGJtgUmaHzma2mNYaL",
  "key23": "95jS9wGtvUgWVphzQN3o3vLj2R3o3BGbAJFzXwvK1nEoMbgptLyV4cfECtg5YES1bKcbiwaNvJ5TmhFZQ4deSHD",
  "key24": "31a8adN9Y5FwyuowFGqMREYEgSxkc1u3aWjwRggRX6Y1QCesxzLbYi7HeMifuLXqTzbwG9u1WFsNQgxDQtWfWTU1",
  "key25": "5wBpfb6aTj86gjgJiiXxA9jCbwN2Eu74nFDM5z8sC5ntVffyaY9zgaPpu2mrnjYA5seo5gjQSGQeVZFkqUbMnus4",
  "key26": "3PDZ8jQp97vhBU5Gpu9WcMpbj2UVnsBaX88sM8G8vJFWTEwWkzU4U3yLK3uWHKzTCFNAcHBXK5qMCf5c5adEpU39",
  "key27": "3zH1JqPRMCKX1T3fRzN1SuGPbRNkhKEwHrJg1T6bR6abekf7PSUjmTqVhZuEef8M1ohJFtPn6sxooZvNL7PpfFnL",
  "key28": "5PSsvRCurKKMFHzkmb7YQcMFVLfdsfzvKp8yPYjYArbB18RzNXhPavZETN6hPRhBS7h7Awjj5xi5QqLBu8EpPNsn",
  "key29": "3kLAQPyUXeSdQh5Eb55Kspa2iGy3pC2Tc163TpBshQcZAx8XLP4rUhb1iLTwwniDL33sXGwTqK4iPMLsmv5T4Dh9",
  "key30": "4YChPaErX2czGY9cjgLYRCrSQiaoV3nFpv79bMbqsYED3v3nP6U3RRTQAPv1eNorSsm4wWbAgYWJENi6tHXSoFrp",
  "key31": "c8ShMBZs1om6V9XJYJtvkvo4FVSwGtPfMHuhHRJW3h5hDqT3bR1nTZYgSQpk3hGA9i83UjfkWHiRCdLZPf3GhYG",
  "key32": "4sCf5K3orRebk7FgYnVPHJjLS8mGVdA7jFJMCdEwujV66Mea6VvY6EMZ1MfiuV1dJUQhStwMZLMoS4HRy3Jyefc7",
  "key33": "KKhygHRp2vmb6K4rVrCLAS6BjxwTfsQ2pc2NzNWf9Ay39CgjMN21AC1KfdAvr9veSPMxfijWSJnEqZ7QvopYExY",
  "key34": "5GE2yTQbiyS4KfNdbQBR2vnRA4WcHrVESQMYJL4kiMdn66EifE892oM3TRWj723GAZxmKKNzk59JxVoo42DmWV6f"
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
