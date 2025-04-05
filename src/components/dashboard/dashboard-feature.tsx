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
    "53H4GmAVrPp8bJngE7cqpxS5msuEvceByRdR5gfi9KFs8vx9wgYdbtz9wX9tQeFaryzgdZnj9UNCiKrPbYapD6rW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xw3m5991JXTLhcWvTXPRZ8g47yzv2QmnLKZ9mcWLyif6EVGtEKyL2fmoCWzvxDVY1C5KyvoWUFs96bHKr6k1ci7",
  "key1": "4mWeAWoyiwk8mJoMYRfHXuPcmALfkiDeYG6Ev1ppvPsGXDXg7dpcUZ286iHhoo4w4xdgdkhsP2n4Qx6nyHPyZC4v",
  "key2": "5mXf2kBZkguh9BwCPs5vtQfLweXikrvui8irfdBvtz6mChidYbbYei4t2RQiZAwGN1PYXr1fzmoJkk9hohRU4HGo",
  "key3": "P46T86bafnoDc8eKmnu8jGkfDS8mMkNL3Q4kRg9VeoRHXYJum9oyepNvXnHu8BDosQSxFhqGarVK5APW46jVY8M",
  "key4": "5wFU1th4t1dxnJzJdgrMYyFH3P5AB7FxDHm5vst4QJiKrMdZNqRa98iXFMnihR1hPbLBFrrAxZgKXtadGeydb7mr",
  "key5": "5jKpugaPavmXTHt1dujNWScniSogt2LehPYdVUDVuex1QV55FKPYbT3qkdDa4TiPQGjFXLsUtnPcEoKoj5yKwztZ",
  "key6": "rRF29JDH5q6fxWvvdd3bZhBKTKLpyTzVzCWt6WQq9zg1qU3XQmkme26oa1AxqQARzR8DMxZfxtgwu3o2TkGSzHd",
  "key7": "2kkgNEYt2bGvws8717tGFXxB5w2knHyzDVCnY7SHjLbq81796cfLcvUcCY49RDvvUtFPnUet1RgCvTHN9dYAk4gB",
  "key8": "MzgGDGQe3gH88cKgCkdWio8DhPJj2rLBi5VCBwXCPetoUpDW1GgTJpHzZtWK84N2qknF7r5yvj9HejfnjyerGZR",
  "key9": "4PFwLgJSL2jvAhisVfYVtRw4A3EPaUuhf8YbwZXJTtRdkpVfR4GnmKBTiEpHuGVQb5oFtoknouCz6KTyGjTCKLzf",
  "key10": "4JhuU8XM2sYTXuncFZVYMnAaP9w4xmtesQCR62fY72xEUN3NVpnH96W1y88rYt3K5WGKqoXs8pVvWdnTV2F5rD5P",
  "key11": "2n2NPD995DxRM5g5hMSqMBp2Pv9wQJAuweUaUzoX6SmnEVKoVC8LCE6cnUvRG6LFJsWCjXC2FzgiGXUxd8LDYhsy",
  "key12": "5FUE3bcRu3F4iCyh8URUr6iJZDa5GQHhxjJxZybiHKVsvhCZgNgeJrznE2Nw2YsVS6JmDLF7ApwRnv5o3cSm46vK",
  "key13": "4WXRa7vtugaoQo7jqoAyv5uCxPnJm3KqN9TkqCKRauDy6iZuHZCQw5De5gUMJvgfZ4nRsBzXATZgFTebMdWbMBqU",
  "key14": "1nxjR4g716pGAV8Z8uDuLrdvERrw641cb3f6gDoGWQw5DrHQujc4hkXF6ieQh6EfeFGrTMjGgAsLspNKiJT9wZX",
  "key15": "Poe2dhjnBKsbbjxkrTnuSjomssK21qu4sFHTvpatA3knyVa29aLA2jGQj7rxjdumJCnQBEqrCLd5wh29fmvUeuo",
  "key16": "3Zr3zt751m33saggVp2WEfwSHKkNNstNGkP6gVBvTsTuyJ56uKYK9xk9EGcqoVovM1XcvYBWZYk8MN1pZBR618yd",
  "key17": "35o68xLhPYtNmPLxDtAPWwK2dHVRSytieuRY3mP9meSYRV1zjPvamo7SpcijBAXXJVgReR1H87rXDYc8EXePGX8R",
  "key18": "5y8NgpHnjroWFwTUbYFk3t5M2G7G9ARYmCcGT2pMBu1LFL1ApKBvMEzHuZQbgjZdkajDjLN5q6u4QyP3gWWLFN1S",
  "key19": "96NkcKyRG2scV58FabtV2nRUoEG2sn1VdGCvRo2AN88sK3AYdY5kDSJsBYv97e1ehFSZW7TfZKfbthoZSU7b8Ef",
  "key20": "3KEpmvL9uc2Z4mYXZmFTugXht3Q9btFBE2Dr3CD9WN8jbXegXSG9BTpktnApmA2L2hv3ZjZEmZq7aa1hoFBxYEb2",
  "key21": "4Juy323JoPHkSo168jGSU74cPrXYWkFq8aMWNZZ8fX86wdsCPbSN6TSgZqrtDhiVkbpzqcPAKFNuNXejsU83VuQe",
  "key22": "3soxjawNwkjFYE1RAMKd1j3yxiHYuVjcUmnk6TajuAsZHtsZzRDmrewAnr41PxAu8yrxyKpSHf3Ro89TweSkqnuq",
  "key23": "pVPFj3ZUJ69b7s7xPvdXvbgBwSG5AmY6Hpx753Z6RFKn1G7BkzRW4Kp3E2WU2kjajWECP1n4LkKRJNcvu6FywmR",
  "key24": "2F7sMpADpZxKqshEJmgugkUSZuMYnh9TGa4ycDuy2LWn3ciBq4Whiox8exc3XR9V7ZTaEqnEYu6P4KVovMkqgZsk",
  "key25": "22RyPMXwrz16bizoQYP1A1aJvMBQrzayqgA87h8Wbwo5B5atAt98beMs6vKJyQF9T9vHaNEA3cznfJrj7VRcGgsQ",
  "key26": "25nmXbkvKQXqqsVNBKdXFz7rqtwY5AY43AgsRKJomSMGkVR4f6bfokhNxrLENRHccLgV8mJcNMKBn3bBVRSw1kAy",
  "key27": "3cMDVUszA342wqvXSniqp7bU55WYGLdDT6JjtPdj2JKBKcvGZdTDSA98FXYh45KKbkV5EVcWSHszEceVCcy1r1di",
  "key28": "q5eQuJzgRaroaH9gP8M46Hn42V3LCsvDkTJzM2Weo2ZsnfJeRAVpGN2YqDVvasyLbrC6PZkkxYsqSYZopE6VBde",
  "key29": "5yL9nhGC3PT8qubjqc1rTDpFccyvGtkN81qvyhML32SDkdUoEXyxQNcxroVj9stRvSRLTHjNnRrm1aNa7TTqmTwJ",
  "key30": "ZnE56m1vuiK5i3hYsuBAZGFsnep9QCP1htFy1Y1cZGYpb5PGA1YoYCT1NN2uqgX14XrfxcvFfDwp15smdhXwFfA",
  "key31": "5uRtg4Mkz9EodjJ8bBzEG4ywNW7uKD6gkVnnActFUDw1QHwZCQxqEL47peZd8AiABeqNzQcYSjQ7RYNC7VVK4eLk"
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
