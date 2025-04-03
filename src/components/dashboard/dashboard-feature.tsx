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
    "t2JdJmsWFccjUshPForRZY759VW5ZV7boKSsg6uMbDZ5rwvHG7CtLBDbcz7yCeaunCFzfvXkLiEo7iHFYNa6X34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qxosuua3M78jZMsKdtDLKmLxGot1rs3crKLTGuXNYHJhvdprLWmHFaZkrLaoXgpV72npcBY6JwnZnzsqGyfLuew",
  "key1": "3AfFYnHsW3MRZqur2keQiVUcBhUx5Z8cHkZbK1nWzQxNhgNrXMzHMhJBMHNZh6D6bq1oaHDDwrEvtd8Fb6wYWGGW",
  "key2": "5avXnddKFPKVaPE7DhdBdmvmNWJg1vSzLgx8XcCiNarjY3Geir5qjewiFyn1uPqbmpGWP7geiYonQszDGpRb6LrT",
  "key3": "3aSxnH5rbb28TxQ9tERRVNsW25Sj92t4XHkvgEvAwT9bxDgCR5wJ4Aemi5MYquesSg7JGrGscA1ZsnvTqGBc1uDN",
  "key4": "t3S4XY4hH8BdHjGsd55pTxLnw8ZQuYhwtnDVCNxJm6reCZhC9zQDod1BC55TQvMZZ4wvx3mdbzDvXyrw6tM2nkS",
  "key5": "3B8s8TB4QhLvsrowoeSDg4LSHXyYeHqC6L6Z8em274J4VDsAhCD8qaCR7zZFRJMBD6DsnQoRrRpLqoBG8vSjTf8Z",
  "key6": "2Qc6JdmfqFjt4qD1Ddv9c9Qk2co3LwZUsp7vt639TBu9d2g5KF7TeBAmLSX9v7VxVbBJ1mNPNyWAYRntbm4Z4Sby",
  "key7": "3DDPXx8NiYxvf9x1qWCyDp7znwpPouFRrfNptxnchN9QVQqcaPhYmBfv5BXTA4mu33CD4U5t5bRj18rhwKTSU1wj",
  "key8": "3MU4G9CXhVHCNWsG4Nw2qL4MzfAb9WkQcGPEpApRBfSydiG4fTyriUJ2jW3wYFcay14HybA28834Y4RrANuxXMQT",
  "key9": "2VjSajoYrPWR1DK1XXP6tSGQKsRRvUSFj93aMvPshwgmwGGt8xt6Mcia5wvNT1MTVF4yqoQBJHrU7rcsZNfD1JD5",
  "key10": "4kGDQV6dHCAaYDNJCtg9b2SZxVs6WrpYbmYtLtLF1eNNspt1FQdUNicB6qPCqqxYxxNGWYowZRd984uNZBwVcb1Y",
  "key11": "4uUGmcuuBzTBvrmBUtr7AAy45w2dmc8jUGngXWVdu17Az4rifXXPd6qLEtT6mdMhgePvTwo59DzQU9zX6SUaqhba",
  "key12": "2fmrAyqy1fCMhG45wSHh4LehbqCwqKrZibHNZazTYx7AT6cg6qD5H4uPQkgNzpvSftCcRAPJNaVLXA53x8VFQydd",
  "key13": "2UvM2cDuDdJamdpqFP1Ehfx9JKDrxsJKyHuoGMhZTZh2V4MMJKkAFrbALwqxYFirLtxDDJTeCzK2qsdnkmPigHwD",
  "key14": "2BFCvtFVZLvRLcTxxvm4EgWERsQvBRsahh37R3Jpao6CxTy57oZg5D9rTVXoAs6zAE2rG1a5nnJDd3mv3qEuUfjc",
  "key15": "5imJnRP75e41d4fWD4w6qDu2wRQxV2KVj44pMLKpt1bgTVPMNoQf1WpsfPDgRfavE1AN7fRekz9MSeL6r9GNDVdS",
  "key16": "5a25BC4wUvtZfx3kEm5Ge6LmWvoGHY3Lxb5djer22ckLQ7fGC9oN2ZUuAUJMNPNdmxPtZPzKxLt2zF8GvN3enRZT",
  "key17": "2GG65vnhXozh6KyAX4EarjcQUpBL5GuwYTjsVmfsUkLNLGiciDBESLJbe9CtzXnKL7XAFCQC9idQC1yj1vwyjZAx",
  "key18": "tnuceiYcTo2a6bHUwsJTKx7b5CCNxUApXwjfEf4LSJDmhWhsA3htWitGafzQq5vMksXPLefAL4WzBhWwjTXsKWm",
  "key19": "2HdpoNFAd7F8q5y5Zj4P76gy3321rPWdRyvSVrxaLEGbR31yacv7sEtZJu2xYP1Y89JXhBvu3cTRH7zNsh8sP5vC",
  "key20": "3XNwJciU32hSEHDYCyG3EcfSf1QMX7NXUT9dmBB5CURAqGp6WDFKHJW7jrTBTQGQjEArbqZgsmYG8cCE3c4QtPVi",
  "key21": "25YDMxmRoY82s44gFUdY2FNVkQkyfhzjKLuGhKZ4NotPq4d3yWjbJq1tkTE8Kyyba3hykrm7zzR5mSEnfQG21z9D",
  "key22": "3FBBdffuZZakYfzrYysp1UAnHJXmKVgDHJqPKmPr4U2GTuDsYM4ApgYwkNs8UnQH8VW78eGbYbdRdn73htN97oWL",
  "key23": "3bezhdPgNVJLoQLEyKPQKaAf9MFkuDiJNNBbFZ1EwL8xfC2VMrmWiNuswB91HMfpteUUSZNGXshQWT4LcFjT9FMm",
  "key24": "5s3SChKKZExa9zkWEqByZETRNU1av51Qd2aetJzrjF4HXjSFoypsB16RQKR9Xz55hKPDdhoshBQTjpqJzJB1useM",
  "key25": "4ogxxpvUJgkTMuYTGqDfcDp2S7dLUWipJLFLctiZ9hUyJdzyexJMY3Rx7bCanZ4W43jBdSi1UNaCWgnZKjxa4eJi",
  "key26": "67My13o68jfV1WH2HFfwM3DSG43CyJiiLUqGE3FJwcZedD4jBnpgz2JmbirXFceD8UiXjE2UeAztRpGt5EDpNrf1",
  "key27": "5GAFyXS9HLfoDvg9vpMHqCEYWnXTabJQZPZAhZXRTtbox8rj2MkpYRTmmS4AadGhRJqXrwEKYph3bLTMLDAfHmVg",
  "key28": "2GBVDE1DNKfyVwcEn5DY17msVSqNX9bWM9nE6YKxi83qKRv9Z33rLUAA3EzrXfFFFp3eN5Lc9PCkezxQbgCx3ay1"
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
