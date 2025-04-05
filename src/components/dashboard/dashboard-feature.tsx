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
    "5MmNmCceQbF2jRxYz9W1iapD2FRrtYWwa5Vnhympm9tqD39TBB51U6bMyhmi2cyJRRyuDWccArkPJKnjXf84eaHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47i4uo331csxUPVNxV4iSbVVURmHE4ukFQFomeUb7ekW4q49x6wUtNhd7U3qqEzNsN5HGCHc4SLSYwFHhYLx7GdJ",
  "key1": "2N7CDHthjkAFyNDD5Qsps4y9iLQwwty4cd1vBGLss7oMjZNcPRBT6RCWggNE5aDNyXYKg5MhqcDmJihv9aAtPSaP",
  "key2": "2ZqqKW6kgLbwQqv6diPb5nE8cNwvBFgBdSDbjSc7amFs7bNLhA1QbM1UqTBYo5k4gSncBfkjeWvpWvtBN7iMLBN4",
  "key3": "4PWDeoD95iLyBZz4ezZPcnvpLf6f6HrKfNHikVuquNn6BhGbpBzc8UCmT7Mc1NQxF6LcC3YKTeQgBaqZCpLnHqey",
  "key4": "PvJMdjyUFsCaFekDzPUoDyJqzY8zCXhdsQrAzb3hfT8A8gj8RJKrybD6RZNaH5w3CbsXZS4Jq7Z59WVybmBrwLQ",
  "key5": "3YigtNA2EYnoFwsNzmSj9hEWSaoNSFY6RLc3wpy2NRaCMG6sEFXbDtTNmcN49MNwgWE6KFdPD4NsbkwXLyNC2ECe",
  "key6": "2tR5noVau497oajorZJ1tbhZpSLF69KJeF4JYxX8wMyN5QzqnCmD9bypi1GZB6SUzoz5b2SdCwADc5o22mSuYwBH",
  "key7": "5P11hphCG5rEXse8eS8RqvBMx8ZfEqpURnsedHA7pSKSanY7hHpHFAtq9LdqprGfPMHFtfiP9F7JetwBtxSQ1qPK",
  "key8": "21DzkVcFbxAVWRaNvhXu9jd3bWobCs9UeoAHHo4rBbHonDPCrJLe7mspUo9gwWFgcXLekgZ2Eh1jskXpnepCpf6f",
  "key9": "3e4NfWcP46JjpScfZCjf4BxQYwkT4RTs5CMhL7zk8ZWi9iDXeigDfN9qTASKRLFpQQm1EqU86jn8Vp7TtZzukdTQ",
  "key10": "57kfzE1xLGJapgyM2HSx6at22M2KGvcv3PjpbTGQRfm65F53eHm2C39bK21KF8Cc4cY1sb9cep8N65MBdjFuN6Er",
  "key11": "hCucd5YpVzwbtvbvtnLbdzMK12GjEsqbrTLL8gWrPNWtvSCGd7m38M4A8cXN2DEuk67cfLLmmjFCp8bvBWHqZjB",
  "key12": "1j1NpJoC8xKUwqudd6Eh74qYZMxCg6HWhTA8hUaQVASwcNWPXMXvcvwnvu7tUdkaZiqv6wJcfWyK2bmSYaGkods",
  "key13": "2UjYrniCZMHZiRFvwxJZFHd3eD4yv9QM2AFuR2U3jfAKsvKmmoWpv1tGBM3AjKgY86QPjYrrrCZxHWjcqUMYUN6U",
  "key14": "33w67epcFmgLnGUgfsukT3oj69Fy3KRMLTiZCstJvfK34DW6FHML5Dqp8FWB2H5P7sHjWx6MWZNDTMu8KY2NSFvr",
  "key15": "3Vh8jAJgUZM612NG8ctzvZYgZ57NVkfDG8MVoTDeBiw6ExsK7kqJDjtiCEp1zXYbtynCwiTf9hpNbETyQ79B18dB",
  "key16": "43Raa9JFtnpbN6UBnj2CJ1Z5yH8p6KboaBkaFXN51qt2JhmEBUTfqwYqDcmbiCu4wM7f7Ui1131PbrEk9oebjPfz",
  "key17": "2aZXrvFWaHXf5t5HXThGetTYaqbnEZmzhNnpjhKPSi1ba4fyNSTrDSuTVrGGXYWPkZ59ykqaQURfFp2Jw5PvdM9o",
  "key18": "3C17uMHBsGyTS5y9r3E2M7N9QJmTGb2vRHtJBsPAePB8rDLdiTPBnFZhfmRHeVMvs4MZd4nTyuLqVejbN64BJgHc",
  "key19": "BqLFi5QurighY1AzaUJtSEgocxm1smeGiR3GM8rUTi1Jb8Bw7TSWx6xouEzNgc6xWhUxGnVPfgSiRqgXF1BqNhV",
  "key20": "31e3WAtBNEmvqYNkrdt9B9MLEWVShL5aewSwDGhCfppQs8xKcuRDcUzJvzzPLUgAuwYG8U5QZqCFxgqXiHGSXjZF",
  "key21": "kv7bmdbGY1ZtJYymaW23MwQedseij9JEL2beQhkbpkujfY1DVBf6uSomsVPrFpYQM4ENV9aHbyw52z554uzRLfM",
  "key22": "3BRjMfDdUDYMZygPpxsKRY1Up9fCrP6hTCZ7WgdPg2wcfUZuGa6hAbS3gB72tWRKVPEEXU8xaAonD55ccytJeYyJ",
  "key23": "5YZbhMP4tBkjiyBxyiHGBoz8qSHi7jqJ4xctDNisCvaDDAeZKwtiV2vnrc1FqSBMMi7S4tugMH1KJ9ehes4s2jQu",
  "key24": "3LbKsKiV6ez7ZcKG8kdLCNtjHVHaCZRMvs9ibubYmudFEZeMbKny3a9DRzY7yVYXgPKYJFbR29ePGjUedESfn8yH",
  "key25": "39EwNuRveZYGv5uFRfVWdYpNnAY2aK2Jbwv7ZwVc8VfebyqyewgzhTCQmXVFCLY7ZNgTWC8PAjyAqdkxxgKGjzHf",
  "key26": "4ibrUzvC6KuQyLAHQgSc3np1VecFEgnhKN4jLpxThZTue5yc1wHuEVxwuhrKuLczz44X4A5Qoo4HNyBrbkexV74i",
  "key27": "xKCtqRoLWBDBpP7VnAXT4ZVmFBZKpBjK5E1aMEybr9hq5hDEZhJCyGcqkPx3DPn2YxuMGA7xXCmrZ4xEqLCcybi",
  "key28": "3T9R9iu2MG7mBQpR7ewEjXFFGJEh3HoNEpHFtfqMRMtq7UWKELPvWLcKqeHzmTu66Wz23GmJfk5mBgWYZeQwZi2i"
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
