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
    "wTtC9RPcqnJVe7nZA5wtVcZV5YYQP1DNfatcaGrxTjqAQkj7MABbQrTNiSRR7SkCVMNMYYgsFwrrKy4Q7wjb8pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31JvyDjPCXfkgwQcHmBFSz9ihS7AGWj8XZfxZQ6uBMHeQatTk2C5s5xdaxPwqZEscwrz5MHxgtrJT7XxGAi1FM3p",
  "key1": "32sgEkNYXABXAajUxqWBJbrZPwJEy87LGQySK4YfJVzyjPcf8uqrXEYvRWyxQxoviZTtnEoJX6dq4KDzoHoJ6RU8",
  "key2": "3F3TePqXBxJhPT5vJByuBPGT8WoB2U4XoG5uUJb543wNyd6jLE6vui1HHLSvghAFUbnn8Qwa73zYFcYhmWt1jnNg",
  "key3": "2P8jmSJEoZkh8rqufET37hQbrvbmgXh8AifRwuypqHbrZqHac2iA2Gse8dZF9RL2FBrf1D2KRtowvef3C2xZjHUp",
  "key4": "3dPo2JFhvjcbnhP6YbWJGz1NPzCY36e7gh1YQJV1Kx8s6y8KvJhRjZRsVAiRsnY4fiJus9hfgLS6XDw4M1S5aFdX",
  "key5": "244yCLSob3n9SiLacrRnG2XRMpZ7szrxxtZHfDWkR8nzbmmB5VrVCCtYPJJUk5eAGCDmJQWvLDs9hqMqxiLDL66L",
  "key6": "3kcEgwS3LiEzPAq2U2Gjn1CftHuRaiWeNjY6ebuf3Gpu22DCtJz9PCekTitb3MaLdNytif8oAroxpDEEDvAR4NEQ",
  "key7": "4r9FkA2WfpkVC6eX3fpKp5EgjqkpAmCxHTYQS2KdAJS38wJBfuXi6brhfNikvbpzHGD7JEGARw69qv6L5ffzRL8k",
  "key8": "3nULhFvGJ6T8VghhRebvHoDEfWM3jfSSsLbe4NXru3MY7eXxZ1PGkBjs1LGBEeTAdzPzrV3saoaTg8JWwPJxnLG3",
  "key9": "j2dQ2vJcAMj1tPcqBWUD9TfgWPCW39wZKoGzdUrzw8GMmV1qZuwiwDbTBzk1MZxhPF9nAabvjhWUj9871VaHUDa",
  "key10": "UTFcDKV3wEiEEtm8yJHawuDvo5Vc5scsF8682MFVaqzG7yFjKthC4BhGn54yu7xpjipMpGcVNRJcrdVzjiBcLFq",
  "key11": "67ouHnQXyuuT81nhiRfv8uqD6mTWYvJRrvzQYko2g2hGGEt2rCKqfTwnzQdC2n2ESVFi8pPEPBbrP3GYE4N7sSLH",
  "key12": "2suhs9SyBdbV1sfYkASprbwf1uoNuCPz5A639vfd5NLxHcakm86NpgYmsniCqY7V7q5GkXARNYKhhCWJ3665S8T4",
  "key13": "2mH8a1KUEEnDe7kxNdN9kFeM7ZSoeUHAYbs5nFAysHzdTse5e17BWoi89UPZuVU4SymtuFj2X74Lem8YuFeG4nL6",
  "key14": "5uzafFoUBXHqptm8mX8TqLVA5uBs2LNYGg84JLz1X5p1Y6MrnawgfAXZew9KcQfbpYSHurGTZXP5qeASaThjJv9p",
  "key15": "2YLZZVXQNe3mFVSvrU72xAuSRMV1AS37s1z9JWDyQrwh7e9wFL7mnY5E9t9zD47yqGMpHZUXNbfZCeakGTQL6yoE",
  "key16": "PbpZeMTKL3S35VpAoZwxZxEcVZD9qYzLnMmAdHnrKwpz4jYzMQDtWzNebXWzpnWX7XUq6cBYrDQTxPUe2L5zkwe",
  "key17": "2zpt5yqroUQg97vwntW4UwpYjsBUsKqjTeSSzqaU4WpBfNNcyh1CGbUDHipQnGjLgHrkjiMHvsAj4ARnouUcwdYL",
  "key18": "51Ftf7AimJq3jJzvvGppj4uTNTC6ohRmZEBTaxD1XC4RLMU2vB6NSfbCoYzrGC3HHkvia5uo1ynvYikisEkCEtiK",
  "key19": "44e9vn4qKurgUyjbsSnzsKup7oGnDE2w3HLWBSJPketEuJAE7VjVy9ZZv5qwo189y6zbK6VwwJix2SSkYfFEWvY4",
  "key20": "5jN82LEHGkUUQBBM9xbYSZ4HGqcJ3FZrcMsHDYXo8ZaSjWJRwTzKU7r56h46H3LDvz4We85kMUu2cLgHoFwamcPw",
  "key21": "4RZkoR8cmqd4VCsS78hg8Q2NgyoprpXXjDgv9jPTpcWHQNp1HYRXkbh27kTNm2E1ReJ1THQw1MtTm2RJRMaM2Krn",
  "key22": "4dANewXBRkYDVMLiCYnC3vEeG8Eesk8DkFYy9d1fe1iDA6gxzNvUXjKivPUCeq7SpiMq7eFWHm2sYBaE3gU5KQD4",
  "key23": "3p86YnyF8d7Yn5JyRbgnTuqogho3eDEpK5JXqtW1M91FAewAhedNs8X2URWFb55HCagpMs3xmKpP2mTSpoaQjzBr",
  "key24": "2oVYVz4Cwvu3czvQQDLtfge2SA9ssV9Yh4vLbofH7MetaSznTqGdjwrbAUtDbuE6vPj1pNfVjDbnfSZ8pCeYYmqH",
  "key25": "57yrtBjUwwCuZaK3qF2R1D8RL9DESLatViAS9cjhjCZHmyGXjuM9xKdS1aTDvqA3FuVSz1Z1E7uqSuXrnZGEDmzK",
  "key26": "2o8uMxc7iv334QWSMcrnHBTJs5WmMBEN4U6wNg6YLgBKyvNMBGbypZZo2LT6rRJ7bNe49C2yFk7MLm9xqk9dCUjW",
  "key27": "5JX2aEG6tgAB26gvKLqHuCit3aRvmaa3shLo74HruaX4TdjXDY9fi1szqxbU36rezKUaSVKp2PRiBXbzkL2yem28",
  "key28": "2LR8P8zaLKkBJt6VcCJMvmuvssLGXWEwC6JL3pk53NMQjZ9hN7xnHBNAUY49TLoRDmRR72RcBwWrSmEWtNtqGRBi",
  "key29": "4xrMHscBVJWbJjMqZxZRu5cFh3o2dGPn3V81iEDYFk1EvMJqWU4myf7ASVWjmBtzdjQpUSLgqU3ycX7GxaAokaAM",
  "key30": "21pCdEHw1cWUHbuvXJHjc4xzJ8e3CW8NteJauQqnEbp284XcfFYDrbsdzmYhjAqMtsxEqsoCK9QNdjsxgwoWezT7"
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
