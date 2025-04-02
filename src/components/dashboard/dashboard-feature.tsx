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
    "3yCGkGADJ75M1sB9CuQjNwUHXzowLQMwudaJzZAi7cj5kgB4KDgeNjzKbuNdVTKLv2HfqoaaELXi2nq9tynsju3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ANT8GxEsUprikJ9CBkocbR132mcJU7bXQkHDbiMRHBJtt3aA9bu3tpJuKGKtZ93eT2DANJDxDcgnD1kdbWJiQbZ",
  "key1": "66mrFKyVJE3ZZjcjMttbUcUHzh1bLGg4Go93Yuaefs3PeuiTdYSxNPtGzx77fwrWDScKNYvmgH6R4PapZN12FWrc",
  "key2": "293VN6E3ey5p4zgM1vtuYJahZdetmmcDvdMoE7FpE4d5grBoB3tJuvxJGi7xRzBxoZcS7YC9NsUYXqW1RUVCJZWh",
  "key3": "4vniCufzFXMsAoXGi7CjvoWnyP2inb6T6nXusSut5W1vpq4hpo5hSpyyzWvrp1yGVmTYqVPybw1fa1UtHT3pZJcg",
  "key4": "3TrT9ubBDQyq8L5DQsEqzC8JWuKVdWTvA9Q82EXMcBYLukywb2mxtPzENcJhL94iPZKGxSFAybjaPkhkcSfYb73B",
  "key5": "3ja98Xi2fZY9ChuA6m4uewcJBYL2Li47KH58bwgFW93VMudZgzce6aLWRqvszcycqMiP6v9NWAbu7zPg8brH6sMs",
  "key6": "3zKUNHGf6nGZ4XwMT1Th21GG4325ZLBRPMTWbjkUA7LUyPyLoKuEe7tcdELtpRSBnP21hDBWjHTBGeJGd8uveBNk",
  "key7": "22M8VoUu8bBhknaFrRJNyy1jHQ4WX7CwqTNYq8M5z2Mpfhr7AN9zXbcoaxErhReem1Y4P7V26HmyCF5PQ7ioBGg4",
  "key8": "5V3aioNReLXQBTZhpWYfSnNTduiNRoKFmvA6ABovkaCykU6kcsEPqYvvvRtxzgYbXJW1hd9uvr94wN27BpDyCmNL",
  "key9": "2u8Uv4wWGDKNzFnSjxe2diC64zBaGJGLqgJotQoBsHeudvJF5ZJq1ac4DsMaQhBoKEjNi6C5iJr2aD1nHVR6yEJq",
  "key10": "wESTzm8JGEmzRfC2uFraeQspWoTTxXJkJidgSDXvLMJfSLW2czTa3GPN4zH5seHNxqsWPQg3suvhcGTsxPNYNYw",
  "key11": "62ePF3R5fFaQAtUq4Au7ieiAuRJCLuyfioaukvRHMxT8bwm5P5zFXYkCBAwPDc4rcZRYBCEn5Yd1P2Mh1xTkodQT",
  "key12": "2frUitJBP2fJx9aoFXH5H7N5CVG6vad7N8bZLhBcn2t3jdHTa2LJhG7XVRjY3aMw6NZ5u5MMuMWrpL3k16Cxrm61",
  "key13": "3NwUNBLo8w9fUszWV8RmofusndmFdarrMk6uChh6L73jXn9KkcZoEVcfYRtGP3nLrrXQYYQN2vt5WLxZuvX9B9PY",
  "key14": "5niPnk4kEFJbN7gDWJMNuvmxgSzDmsqjHdGQ7JVT7DV7pP9swejgCQhXLktJahayW4rXhDPxweCN76de4Y6ncnkS",
  "key15": "583qwAu8j8iNh6VQ8s3a5mN86qMXB6quuMyEj2Z2sFMxWZN1TcLxvHQGzZiMXrmr6BKF4fuCtr552UkjGUPi5sui",
  "key16": "QKfUgsQUKBbvuV3miBP9SadMUkUix2yiVXPe4fG1YStfHckpb36EsB5WRmzpxc2akYfixT4cK5W8mB4aLHHTTWb",
  "key17": "23QThXhfK6xb9tjcPQZq1s4CSdCKzkNv7GMkPm7KDzSnG44U3EkZvBotWmaMfTXVHvkjitxKCVztiUzHfrYsAZHV",
  "key18": "28HtiV7yj5ZdJHbJj67ToMzsqPWVtRe82bQ7gNHdcNQGzMELrYvRxiQj7yfopUqfgxYvoXm9GcUp9cDJ74Q1iPZf",
  "key19": "2nqi72zsptvDQdH8sCGVVPpjzGWjVFrNtgVprySbKL7hUb4dzzvPSPeh3scd11F4VBsbwLqaPYdk5iV9fXrQAU3g",
  "key20": "3tqkdQSA5X4HgXRrXfnXvTM3nQjcS1iitdBPHKKky3vg1oQwKgTgRD8LUNE4FaWt91H1uxKz1p4aUYwbFhXmiEd4",
  "key21": "Nmw3fW2Jdc3TLkC139aX5V1q8PZDjFvsRzzDNu6LfErRGSc34EzjUhJsg7oYhz9ncsdt5JkV83y2jqGa5UfwBQA",
  "key22": "2nt6pj12sDo5678Y2eXaM9p862Jny7jQ85tDa9CMWU9GaZHd5LpzdFYzpN5LVTUHumcDz5BhGsCJaCb8W4z57J2E",
  "key23": "5whDpw5PZHnRaa5B1eLbxDH6TJLKDDRTmuz6fKoViuHMbZyz3X435UH2DyCTyRJSHnNjYnSnabJNCuYsAuhZNcYa",
  "key24": "2FRqRSMVppqzYmFifrr3vu4NjUmr71dubuzoaPLQmru45jnm6AwLbaR1JZycgU2skwDYyXuHjvJdtCcaypQYufpe"
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
