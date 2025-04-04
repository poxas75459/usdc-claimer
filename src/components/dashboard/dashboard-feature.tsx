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
    "4Lo15uupcMQmeL4nNK1CmjNnLBMSJkTRgg332CrQZwawFCpfLzsiQUXXUzviCMfECscFtGD7SCkpnEeJJWugSbnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dHoxKTsABf1B4XRQBUz1pzBcyeSg3G94STSrZvsXTtfozaTuK6iaigJyZU8Y5g4cqiEXZHajWJjHFJCYHujH5Vc",
  "key1": "2DeZCKs1bpEgaaZSBqr34eeTSzJ6k3q8Jd5KvWpeaurj52L2fgS47Bp8JtGK66S32fEN7K7pr12v1h85ECCG7rTJ",
  "key2": "VSkAa1tHaaowa7MebFmxVFZwWfpafUxQQYddv58JU9iFxM6RKW5a9KdQ3mFYFaeXuoFDPp4XZaEG2Tt6TEncznE",
  "key3": "46ravoUUoF6kB9tJ21379sUTvobPJTK4nUidX2zwTJe92dWG35t2LvPeWyrasmukLtq8YUDpHvu666CyHbTJ9YJD",
  "key4": "4ZSN1drReRYCxQoWm7ekb9ZnfqSosre8uQ7MG6gm5T2tQTHK4gqC8SYiUKeEM3yX96nzGFjrkzxjpFzyC6gfGxxw",
  "key5": "4E1q2iJHr4wAcKqjb2mduHr59sryVhSD4CZhUtgDYPaDDEcTKnvH2TY85Ws99r7LwY3NnHDxdYsyfgqqkBxQKoYY",
  "key6": "3JVw69eEcYF4CV5J1YcCoRh6tuR13c3xw4tsBZojmiyp7RpFR3nhPtZCjEHfYnGwLppurnf3NX1CJWCLscc37ESm",
  "key7": "4kG7z9i7Y4iAv2ZDihNy7p4mf5xNwdZ6FUGyGcHno88KHX6bPqUBa1CmqDVPRt6auQs4VniWzTiRKW2tnQF9PeVk",
  "key8": "3w2bMKPHJ9J3TadHkXfDqNGrTC8FD669Rsydb9okfyUELqxwq2vBTygrnnhGdxjgbd3FHG76sCk2EH6hivDSTURZ",
  "key9": "5EYRW8wqpN6WdYQhdRUtekCmKubqKCG5cXiWza8e9krbRE3VDy8wJUw2yw7RrFjXF3S25MrxL9rgvBVziWr8i9eG",
  "key10": "VpDXXvMCcfG896fUYrKainiBPttiKkDq59vNYjnm6uvaHFYcEj3cULxHyuoVSo54GwywzWd2jEpTSdQifUfGphd",
  "key11": "2Lqfw9owHqKAZJuVorV8218zpfk6mY78jKKi1W9Wn3tTNqERJK8mXyfd7BxmVSjKcmXL7CWnBdhSRgWgb8LCjpcp",
  "key12": "VFvj8VjRxMZ6xE4X2JypdF5DU8k8urxNrky2Px8JLjb4AmsEXHZu21BrpXZqMQgoYjS5c3UfKY9HmqYXbeprrBH",
  "key13": "4gs3xBzCdACb5XphKfyf17m7T8wyejEDQnaJpP8XeMKFa9o4kJhGXv3eKZu3dJpY3CyDAd5T8fBZYmvHFsSFA3Cd",
  "key14": "3L4LCFXHFmXaxrvzW43m6s5GWa3Fhyxu7afLhhssEV7s1BU5x4eui1W7hYSCt6H9Zky7PELVVP8KpHFHHr9tq6p2",
  "key15": "4Fk4BHnJnpToFNE9ACzL6DjiYwshT2xb9n6gW4dwYSRHNRn4R2ZDXF2pSkn1Ukdfy2WCzYPnR5fk4iYBVjL4oQRj",
  "key16": "44sk3MAsMf1b4ZgYjg9NRLDENdNHJSBcfzQxnnEB8SeCzhhCDCEB6RmdnU6zU73TtWrnCFgU6dqPJSPtDPkzprwm",
  "key17": "SUA6aBqLP1atvvbCCxDcVJN81LDTBxZkzmEZS3RgYaAg5Akr12qS9QkqafkqB2FnFnankgS5vdXHZgcZaF95MJR",
  "key18": "2zhgUrCVYtFDuoRqjR5RDHpUtvDFHGRAat2AoL1c9bfX9powf4oqyVnXH6gybLNTWAmzonDosNGqWHfUDhqxEVex",
  "key19": "27yPDgUURBBNwBfjCv3vaog5DEDZwWP2T9oYB8HHP2WvAdx88kobzZ8fCy479HsijmwBMtKQeyvzLbRo9NN2nVb7",
  "key20": "579ndw3EDY8rYCesRD7gKAUYU9kHsTgJxPy6ApgEwifrSUzqXAYMkqWuLirySc2Z4ickwgdTsfuUzbzD93KTmE3h",
  "key21": "NTgSgBvSi6QJaopXo16YdJvEj5DKztnFxXHnhLzvEWQsNTvsRzKaQpXvibG9oxsb8iJrd6vsqUkurVkroKP4WGm",
  "key22": "EFPYuo5dwq3DjKAPPvBK7av8kjcKdmvq5hG8sJmNaxCNBdaPSdsGd7YkrSDhuwxC6k3cKSSUrRuAAxiJ6Ratpjc",
  "key23": "4LfXzMAGeG2kAG1p6NMqQXWMck88MubT3rFLPRuKx6qBGRfe9hxSA9VHrpLWpa4rxbYNmRkKpJ5aEkGEaK679LNx",
  "key24": "4ttBtyRHj23B7E5NQ2kTxDf5TCTK8oK4SegTK7s18ScL9QRjZDWmZAFzSibTPGrVJj19nzq2V3ukifozHWrEhCns",
  "key25": "3gsWmVa9P8qipgrmpzfjazYBGAGtJzJewXNpsnVC9XTkKex7qkkSUYtLTTGdCvewPom7yLX8UYjDzjeeMqdZJVoD",
  "key26": "3r3EMy49mbE1Nq5iF1NgLJpQuqfZkZm5JDgrnmW8rFFmx9vgmZQDxRqMnMoagxgahzt4RmHXdtsP5Yk8JDBFhoBT",
  "key27": "22akCbSKumG2HAVt2wNoog8UUDk7JvyBc7t9oejDiJUeZYSKTxKxnAX6vJTfFZAmRf7u1b15YU5J6VPn1h5V8jnu",
  "key28": "gfRPVTWrBEhXs6XBBpHREymdiy3Pdrqp6r4pzjY4RMZmD7GGheN2VRwRS31d1n67GxCwQqZrXg7rqiGBB9sehpv",
  "key29": "45e4XkHRgsK1FRyYyjLUsKXUCMaQbphqXJej6uzb8JoHsUZsx1XmbivEiFhkKL9WntzLghkZcaiaF8cENAxWysK7",
  "key30": "52UdyZo4vT9WmQguRyKVcXqv6uhQZUVLE7AdR7SiYr65juyNEAfKYDEqBBDTu6qWdmszMqMcNM4pXaE7io9gx3Ma"
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
