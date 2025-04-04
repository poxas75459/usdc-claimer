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
    "3GP8FBR2GGqiJ2y88UgwPyBrYBB3ZGgRffaTuuaQkmxBawVUgj6NFNYu16Ehp894GbDQpnxtSqoemixsna789tJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N7vLW8i2aC7LBqUg5P6ga52ojsDnPVhF3mBrDAPWKpbaiefhYeJvZdJdV4cTPDhDEw6iEHDuG18UXHNrsR2Pj7K",
  "key1": "5sg8qAzuFTRxGKB5jPEvHFvJfcXR2DGv3SS49BTibvNMK16QbYit985sQLQXQ6YQi931ZWXdj8gyKjscUaV1GMfq",
  "key2": "2Cc4AYTq8CjnWoN8k84ejNQPwSPQwwfYA7LH6aPLTPyKx68FFMQLUbNfZcTYEdgqr43LWW3KT3AyVSUu48hZT9JU",
  "key3": "4tavcXmLEpoQaLczV7BXrcCC9s9DYiug8pWWcdJPzKZLetx8ZAxNnKLK2fP8R1hir3Xvmbv8yX14TscudmDVLY15",
  "key4": "3Hud7eqWGYcycD853SHCyH4gakg7ZCzC7UTXKPVBv4P8nPhWHhAJ3k4eVXZ9b7jRyuuFFExWfgS4yHFiKn6s7VpP",
  "key5": "2LJobMutQQpBDNf61uMTCiLJ4agKJ5pJdkhjsZqFEWvoX8YJyatF6uKPwyYexGnbQ7vFLc1gbzkBTb9r1q8V7hQd",
  "key6": "3AufwjBAwGXxaPA8d6fp9JbQ8iCj22TyZaPSk3WjrF1UmpEWpisvrcymCHaLNXfVPnXNFZtSHnrsWiosvNJ7uJWJ",
  "key7": "53F7UB49PDaD4XxchudWLWmUGcKFFbHGaiZnxiMqEmFWYy5kiokwmuW8eSEFSqj233kA2asFw55zabvdDzsxt4H7",
  "key8": "oVaqRFMDEPJ8D4CiknAW73H26MwVJCj6H38VrPq6sohCZASwyAJhAxPDMqU3i6pPEam5YguHMLCkD69Fo2EywfE",
  "key9": "4oJCFM6sFjcddGbbPCyfWHJZKahv9QzYgXHGiVNHprHF8RdJcFsS5sPdKA8SvbgLP4f3VRsCRmgtYphtCTMDV5ZA",
  "key10": "4DPaaybTdjJ4DkfvPzaiN4bgMQZheEsXMm3Q3uTW3aYUJWvtXb6Zv4fzABzRZVdsnhkEkf25YNwGFp1oVGnuxmoe",
  "key11": "2j1YWKbKJYtMZh7HJwJE75tdjaT1KzGveC3nyMkUJANYK4tCpB4NhFBBQ7aymUdrdpsnhLRNZd9u7YR1Ez5UvSnc",
  "key12": "4DeDyxbeicPeE3Di6BrdRWRXug9p7rgxbCue7PCkaf5PeQHWZgwJ3UjRyU2HRwvtDdnCPmPoci99xCuY1XdYShQY",
  "key13": "5H4xWkKx26V7AFVWa9eHjt75xZvoNwT4hiQQahCmwPaaLFhuhMQXWxsoCQHirbBQeXhrihhiaF3Tqb6PgiFm6F7V",
  "key14": "5MGaUjgGknEFNqy9VpCpbnJg5sQ9GhWjCYFPQpTbNGcEzTzpmoD51phheKCxuud9oSENaByNs8L4RQL4xvaT3M3U",
  "key15": "3josC97d2Et4erZUKbtH6SJXXPwTnVY8Qs9iKMrXJ57EisfpW9xQ9YXeTTcY8AFzachPJPbRojpBEstb7wJRsfKv",
  "key16": "5g8yrnkdCRw1jSAJLFjGz3AaKwBAj3nhJLAFNuSMT58kvAoLpJsVqSps6jN1iVeF17xGgFXR3KH5K1eXNEXEAhEx",
  "key17": "3rqLvk2eXNR44nMYsuA5pzhdpk8NEBnWGAkRpJwwCK2Q19M5pb2rsgrZAWDLFg3qzCPv62cffCKEFKBXeDNvo5hM",
  "key18": "2oh8Dn6Z69QB6pYEUodHY2TeakzjeG7WwwneYHHhJbR1qCDKKusBTeShgCTH7Prk3VZttqbvBXVsra8oyBn1mCbC",
  "key19": "3LFQ56eSrXaVQh42skt9mY5WhqUmtUTLrDDa8N4t1y3rvnS9QHgaGFwFBEgsJxayJhPitBe3FCmptBHVR86hn62F",
  "key20": "4Lwn2PgpF9BBS4ACsRhXgy58J2WYF9YtHGmdebxj6DQySsogjyMtm4nBmgSqFkfA6XajEeuGqBpVnLAbYBSkPL5Z",
  "key21": "cRjVws1yJKXd6sBSzrEUrbQ5sMxZm6T2bcSD7PFReJfWRnSvx78Ugu7huLXf6ueMF1iiMi832nAUufipepWjmCw",
  "key22": "2VB4Hnua8KWzHP3q62LcpHxZiv79hj9Aq2TrXEjN6pSrN4iiSzWmmHopBAsd8aUX9kG7FEpPu14rmTApcQiKAfAm",
  "key23": "5vjX8sHv9FeemPuX7HW89ygAhzc6HLPsVHhwgXmqjWABzLsCvUAgSBhx8htopGbW5g3Nw6JwByB5PWZ9nJmjr9K9",
  "key24": "29TV3w7mFiqiyRC9wt7ocXUsnCUzRyrgLsfPbtYLcB5m992aikzMq6mCc3kcLQ7HPx9sCtctAJ7aVwaNSWY7qjxu",
  "key25": "4KNVVz6j4hXEkweCMbb7v16dLeVsHYMQusx4F9EbynQZpmzGL3xP8Wv216CiEK7hbFLFwn8Jqtgt3LbGFRd3BcWJ",
  "key26": "3uqZtPaF8YpsSSrNmaWQJ48tb6t42T5Fce5eKRp3Z7BkJJE2zJa9AifciPCodZCSwZJHTq1wBNTDmJaZPZVZKwWy",
  "key27": "3s6KVEcVfdWkXze4YVw7cJ5n7CDNteMdzNQhZYMcEsyUVGTNCkWH1W7qyzJU32U8Z3abcXyuYA5n6FEV3nJnfu5G",
  "key28": "5zeQ1DcY1qmEevyAbkJjMFvRvtqNvzUG1aDhyhEavJBnR9qQitvk3Pbm5PttKvbJrFxoUz4aqHpj4qHYDGzHF3Vd",
  "key29": "6y9daSvivcnw1HCVGA76W8gjLbJHwWf3hitbuUkaYoms2WvXMMEYifNBvDXvKA4xD323ndzYjnzvwQddq1Tt57y",
  "key30": "5Pyu9BKujABhZrhMY27LsM3Fbs1hsk6wPsqbV4Nzc38iRkZf9HVgH7qMmxfTHxqaMvjV8PHzmndbxdFQewDSsEHM",
  "key31": "5pt8hKtiaHiCoMdTY1f3XjgG2Lf6pwCKyeS5eH3iTwKR3QqEPBb8FFkbfkxAJEhEepsSurs46UGb1NdARqKCs9q2",
  "key32": "3zjPkh41TJVu6WraSdeXS9DMAt1JTxP2aVqjMHm9ijd5VSZA1nwuLVgiQezvzLWMsmEUQZnmmtwwFLaQ1jT5da64",
  "key33": "67eGZPy7Kbe1Z1qpwf7f5hXTzYDUE6cYsMMdXKGnNKDaRTj3o5SiPu72KaMh1StJqJNZEHZrUVNQJn5qMTyyhEgH",
  "key34": "2S6QvPujp3aXfLVRcP8JPPU6dB2Zw7DAokV42eW8MTGNh7Lj9KPiBLWyaCCvFYxN7PuKnVzZm75ozLhGN5xQqcYr",
  "key35": "5KsZVfrzbgNRpYJHigK5zWtzmmbdeuSBP1uvZDjrLq9aKZbpe8ANa8fQAZoWkX87EcP7Wi13NQmGRDHeN6RWVyGA",
  "key36": "TQoeSKUNKj7HNjTz6oSNXoYEzDAJa5pdLAqRjMn2vHZrKTDXo4ZrKRNVPfmmDf5oXf3jsRZ5tKm2bNGxYtP8Xgq",
  "key37": "2NmZThxQP57cTYyGd4EZYjiys7wmPB7mcQzGXBd6xcJUiRLFdAdwuWzgbVRe13bEj2XoMBtbGVjr2goHkTopS8q4",
  "key38": "4dLVAoRhYz4EKnmM7LAc6441PWcT4pW5mrSXPBZTUXnB9NW4z2WegrbqZRwWQrqWSLM4VEFhkCCZsZ7siNVbP599",
  "key39": "5Rkgrc23B6uKcMDdUjVnpM5gcJU79CYqVpb5Trzsr93pRtZFhzuEPNV7X4bMj1WozF4AqmR5rwExAdvWqaLeKpLc",
  "key40": "4EQkTfQavU8uyXdsADoCT57BqVVHpQnb1iwuP4fYUPyo7nCVGXcXowuhpY6jFChWtzZccaR8YwKxzdqCBaiKmVV1",
  "key41": "56QNNcDZbN9N4Cd8Nv7Co48Zb64RTdzDUTZ1ukkYkdCckb9P3pVgWMC6Ec2pMjtEpfT9pggdiYA1LAJMsN9HCCeW"
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
