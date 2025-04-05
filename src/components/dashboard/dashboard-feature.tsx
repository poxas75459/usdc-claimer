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
    "4gY6ScaKtAEn3Ey9TDSY8fUHUm4c36Rh6NNgM4iJA2RnWnBKKQBfR1E94tSRjVmNccC69wuCaFjQ16QRFsQLNkhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SbPsfCpP64QkjTJH2DaNJGriwUpbkCbDzWLvmXWn3bNauwnqSCLU4bfxLatV2CL8LEu71k6gDacYRrn4pwvmNsA",
  "key1": "2hxEDj8vrDRmqdk2HLhhLcygNx3uvPPQp6eFFW3cqu7Py4WB2sDofiPaAmoJEUMkkjawF8hjtkc5JBavdV5Gq1WU",
  "key2": "5Vsb6W2Mg13SCd7rKn7Q9t8eh1a8c4Fu6MCxi2TWPsC36bAJCN6yrF7HPEWzETou1ZYpDzXsmfuSXDqDXTWm72ax",
  "key3": "2LRfiNi3YzxCLaa6DDLKPzBChA98vPNkskjHuZ7nBvAjAw86tcXWkD4EPgyCDFzhfX7ZBSe5g82zotuBAU5Eb2mN",
  "key4": "E1fhZyn1hnKhCuvVA7hNYt3r42TX1cvchzruST4AyJzhENEAPbgR9k9dkreS6y6mMKqge2fREAQHBU9jatWgsSG",
  "key5": "gnHNNbnaMbAsPxggfEtFaHouaeHG81rXs8Bymb5Vm3ZppBDeUcQvD5JDf75VxyzoGZEgTbgqeXyHTPTMDXzRUEg",
  "key6": "2cPAVxCXTJVjgVHo76D6CF75AES9bLuP67oGVbsCECoCD7rzqM9aCp9pgGq4aLUMVf7KqiwxeMzrzrfNv1vYc1w3",
  "key7": "4s47qLoWDZzJXHUuCdmnVgQko2LoJKvKUpyexVndWfaVXnRBSLcWEBQAMBmBgJvPvp2uhhKAcgbePU8XR1r9zogN",
  "key8": "LuFLQEffZTV1rLB3XAvUoj8gJ8PT7AQ9omE4Zwr31SntHg6YC4sTLdaeZGbSSRWt2kSum36Bduv8LuKM49Ndjmz",
  "key9": "5qP7Fi4uLPkSaZ6ZSKonnFoCYD9NH2YWjCjjp31FdYDrHsq4s3CuBpyU6HKjUYtYyKU8UBRWoFPTGtb93K32Dz1C",
  "key10": "UYjHHZdKFXJvZ47qWFcgbZo59M8T3S85PVqvBuY4mwCzmJmGSZRXdE6V6Tnv9rBeeb6RnSosxZKqNWNaQRHVNhC",
  "key11": "5eD6dojkEuwKBgBebtad5n6NtUS52MUtXUk9jCbix6UJGnT9G2cRyJ9aco1cn9ap7ve2fmdncMLyrCpNgnbNXSBV",
  "key12": "5SHT2iJkfJaHnchp9gh6P2Rg4sxqiA5FyFfiR8xCKf78rrjhKwwwo5iBVpeCju4ZAAMrqMPmPzCo4ee93qX5v7Ru",
  "key13": "5CWpdpYnLicNWDbMb3ts4U3EMokHWJsJvnW3Mp5o25AfF74eVPTBH3AChKwidAnE1XgeA5L5XFCo3it5Gz6DBWe7",
  "key14": "3SwKrmQsh99GgRWBbthmSuLSQ17UGhUKbpNizMLxBUU6WdHGzy66HTAigdeagQQoVoCF7VV1MaYCUHhfL9M39Yin",
  "key15": "5Sr2KXr1wRjuDkQNzywQwaabxKNdZcX3C9xeDqm7Qa6t3759saJemPSMJMGvv9gzEc52V8RzuGkLe3zza7trVepv",
  "key16": "u97uk5yDoYKPD8TgqcYNfCmjk6f1mD4ggZroZEMq1QKMNa7jUAigfhDjzU3WzpmgeL9BzfLsiK5bGv6LJbJHCgJ",
  "key17": "2hC8HWLWsyXfALvH9wqgXzeaLjgV6UyTKWVA1NTYLj85s1EPm8e5Z6veHjUU4UtpmPGj67UUr7wSbzmuSCF8NHpd",
  "key18": "3vWdGupw712PgXdSD23ibrD3WqF7XGuhfdnRcvoWLBQ2SxY1nrJgzUAqGNw8GYvw4AUEHozwED2UWZHBDMGGzN7C",
  "key19": "4M2SpWSUNjcLU3v3fb9ztgk6G7esshUF6dhSPJD6HZasRaCa68bL4RZTZnNa1WLw2L4zxJbtSoX8p17d5qdt9bHW",
  "key20": "5AkShyAabsE1GNwN21sK3LP91EmGpY1rvCR4SKhxzciEagHTg35HEMtHNXVBJ5Pagu5B9CnERCEpKXjhjSrjNXDF",
  "key21": "2vpUYS6nB3JMCbGjwaAZFMmc9tHWNr1GjmPSMB2D1W8FjeADbw3ms92BtiDaVa7XVMRfCk8z7ZLvAd9pYM2SHUnJ",
  "key22": "5QC2fNytodGdQ1Cyteda3dBye2xxhSkfGjz3mw48CwxDzzaXxcNHjVcayjn2EteJnLXjFipxX3q4c9fHdeZtBsk7",
  "key23": "gSzEzwWcL4167XAYj6CnzEYdiP3k6dhpv5hfsfGdQFm4Jxv9dqQKFwMC75LtNmxiPzrUCDL7RnmzctzUNxZpAsg",
  "key24": "5vD81T5uTbw99C6cMvdbdeUR2rUKM2ieeVtmWZgjtZgDaxMvUCubHbKmhN574XSQDGsr2nkYDectuz5rBFnrtqYS",
  "key25": "2wQpfcM3vRt4DMjZKrkNekcbWy8yX48AJ7daRV6LGbe6WvwrDWsTew9iBKN82uRos1Tm1eJUCRTcxokQwk2Xg1K",
  "key26": "5jUCioLRi76Emhs7EopdvQhbzuZ7DZyqsdsXhfwUJv5znHooLPHDJRPUJWYxsKUppp3eBYcSaPPvVRAQE5hZmomy",
  "key27": "5PUXT83HMczeuZUv8BvBQU9CbLTZyp3P6kSrhy1L8KKu6p89KwHMYTUh8HPodHuACiE5dj6t9jkpz1814KVwHEZK",
  "key28": "5BtKi1zUEnRSdfaycBjvcJvj4a2vQqRcqKGYgHyeMJaDXeL2R79qWeWwpTq4ZxLDm1C9C2bS9QroPNJoF2jZYpR7",
  "key29": "2yHhNPdJnYqe3P3WKBchpCDosEem3R38enRdA5JwKrQ5Z8B4ud6VGuDcQzaxGMBRmL2ai7PUomS3MntCJQrKdL5L"
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
