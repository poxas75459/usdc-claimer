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
    "HMLsXneqmvTFJ6SeDbr6vpMpkhH2JydiQFwUMzCrrWa13sQonErVLNQz1ya3u5VMTFYDxHPnpcrELkZtDNsfXh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Kgm2fGTAvykfHoHqLXDeu7rUdxNHFHSCFRUN1LsFW3yNahgZ4HbQRVuCT2ML42VFCQx4vjZzujJYdcQGyqK66BQ",
  "key1": "52ZTWLc5R2jp2JCeUUMqw6gmgB4NkkBM8sCLgYJZ6ZvhTtbEcTKGVs6yEsSHtbLSDMfz8h2n3SvktLpmRh3i1vBf",
  "key2": "5rd8Py3vGHXmaSPmTXuVYDA9aCCrxt8qc9ZTs7wsfc9gupyeY5F5CCzu5vdwLWwtRrS7wuDyqVmJgYgpN7f2Ho5V",
  "key3": "4ru9nyKzvCRMNHQx5U8NFoNJ5rp97vJ657FMpjF7bwGHHtajQYajYKEdYDvd8R6Q9S8Dv4U8Z8vbmeTuGYfyJNo3",
  "key4": "4iKFV8Am91LMwNF5fNQoe4Zf6PZXiayYD1y3YQA9WpNNRAb9mZgjgjuTYQjZRDjH5o3sA9d2KCNx7Si2RJeWwd6M",
  "key5": "4JoMY5wx5A8RTaF7BfsvokH6iF8Lo8SJcVJCBN6xbf2jG9wosd3oiRCeT3UKMmc6RomjnBfv4APRjdcPnrzT1v4F",
  "key6": "4dWcWGtZPBGkASUszYAA4mgm1gcNc5AGD4xymZbVdiZmo9FKMQWnXpj7jnJEuk6bMw72xqVocDN6rH9poKhVy8jT",
  "key7": "2WZXkd6xdPTnFBdKavzjDEphMoTt2b4dB7CyVLqivbTspRjb3XK8bn3U2VmjW612LokFoa35qWDrf4SpEeY8eQbo",
  "key8": "3i6P5nRZQ1xVd5nJjonW9x4j6UZ27BioJkbosEQjUBuoxADBkSNnC3sRgxqCsocrBNosRNMbxJ18FQccD9Ed7hZf",
  "key9": "4qT7CNWNjZT7SZusm1tjMmdrUC1tfYyeKAdgxN3xUtmg4x45r5L8UC5yN7aDByfV38jDQ7qfbGA3YV7q36Z5ZSXc",
  "key10": "23gB2hSNDZtt6MdGNwE8Z31fdHZej4SbXfvq89bSTQj7Q6hq4uyfxHd43jr3EAXgUTvfEEoAV21GCPdKAxvT7qYB",
  "key11": "5ftA9YsQ7HnYuwL4T1Uw7uCAq2dhrYF86q1Sm5J6JmASdh4NPEwxUT6HbN41ysh49tUi6yddHyYKkrK65XH6yB9C",
  "key12": "2FdUBgpMkqErMmUCLVAY5KZmhCsC2ufFjfCwUgganmPdgmMMmW6qF7toQk1Y3XNeMkaYNyfhPRaGHJDXPhwFWW5p",
  "key13": "56ofVEWDEfmp6kDP8JVs6AR4HXJ9JETFtJpGw6A6BsUNchdB1Ya346CHc9F1HziMMNcAS5t9T62k2yGgb2tMAqgb",
  "key14": "3zR1DcQUJLo5xGmVoAT5jKngkdgzjf5idYP6XahcdN5A1VT8BQhYXtMY9ZzHvxznc8o4XVuCWqbykunaxdpKGCm9",
  "key15": "5ii619npoR6YPuW6TPVSTwk1AVE9AjFdcEQ69uz4W9u1akaKqHMAMBcqkATN6Uk7fmgKfXFyapXqmxLaWTe9JDFZ",
  "key16": "gsvkNHnXmHZ84ve86nvMXJBrv9nqFRKPCMWtMbZgzA1CGNmffHxTv8m7SaKSbciTjWDADzCRSUfmncNcYfRoZNd",
  "key17": "2QKXbHsdMBi6KUq9k2b3MgbNzgfBmcYN9s1LAbMWFCUZQ9ABQ2oAdmNymPUQYMQ1NPSA5LaRY7ArKpJ2sShPeyNP",
  "key18": "GZAowssBX6x4YHPHr8PBQ8fZC7ivgsJhTNsJwJko5QAebtQGC1DoFZkwa9nxnXqmRxLi24xi1tRgbKCETAVnRvG",
  "key19": "3UDP1Em58vhvjNE6qJq9yXYqKYgm8sMMAfyv4zWNNoUg5ovExH1rPUCPXhgmsFPhMyMfGvN9VnbkZ1WUW6YHU3R7",
  "key20": "2ydY7P7nFB54svHqaZckLmLrx38k8tKS1ukCsByLjkGUb8JuwicQVMeFS3Nr4597s8NaGUUbjDBcPhDgGtRy7Z9c",
  "key21": "5PfngcFs8Ukt6Fiwya2Jg443Ww3XepDk6d8NUNXQUE9KnceQrzbamoQDFk7FuBvbFLK9XVPMyRuqaXphy8KAtUZV",
  "key22": "3gB6j4kTbuzm4uRMVdbGCTvvqmy9mnrkhrj5nzawP7je6vUAxki74bWaGDHqMgg1JwHCqZ6Ltm9KggF9A4vpYwFH",
  "key23": "3R4m9KwjgsSxmznmqj6J9sSucxNKKas9ZiocdgnGZojaFZrFsjyvP7RkVhrrQCSAeBGgtXZxeUw8hFvmoToZhieF",
  "key24": "5bDbq98kcLkcTVJWgGZXQyu5TQ1DBz2rSu5H6uqFgX6rKwkCvZNTMk6F9uMNd4cGHLPC67pagzj3axqWGwTyRokk",
  "key25": "2wVdCsYGPK5rKp4LFfYcXATaDvuCozCuo6NHDgH9s5cCKrHudc14rTLWEj5X4AaGK9Q27zjZDY6QNvGtmhCGQyXA"
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
