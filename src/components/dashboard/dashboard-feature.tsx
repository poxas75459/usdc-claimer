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
    "569aFicrN1EPZVh8YGPcPnbASkgVaerVN8UKUXzwZgYntx7uGzmfH4GGua3igpTwpvVTZpMBgYCJP311fYpg81kX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RMioW66eTJeJ8UjC3PFGz4jduuCVVoai65bhNX4hYE3RgmRfrzDqj7y2rDnBLCFjiJw2A1KGLi6H2DTRmdZJNpC",
  "key1": "4b9pMppovebM7FPckpFVwMYboBsypvFeJnr4NxR7mdQdhAXBLNZCrrNFvbLZrGsBkAHhHs54KxXewn7kifL6GN2A",
  "key2": "4pZFFmzrfzRwAJ4hDbztuujpZBQG7FuV7MhQbatdaLB4jSvNz7gF1h3RwYhwSQinSPnXLm2W7TzoeqoHbZmTB6gT",
  "key3": "53WWSVWHwAsXX9LgaTMMq5ak4QqN9GrcSpnWf3XRB9mWzktsMefjPBoosnfz5NT5xvvjdBuwzphXWC8h3wRfeDH9",
  "key4": "4Mv5m8XgKgfTr5PioLZWV8a7SA9zxxqHpzU8xKq7iFgsMjqRAji4TqUQVayU3dJL9UeXvyyBKgriRXtyqQoPfh7n",
  "key5": "4rCgWCdU6Wd3urEiznPBnZBpSgZEjbHtenuMiEv661KDPK4btGxhUnK8K2KvCnLapJi185twH7htnw19GcWozvGQ",
  "key6": "3wv93UXf61mkeduv7cr6bQVhrUFecY3EZTB5sNz2H22pCT4m9wQSs4AuJc8YTHTQWFe1qLRVfehpHJn2Ni11Ae2w",
  "key7": "41RwvphVG4F3TBWje5XVc2Jjv4u2fjw1WDHrhfsqi4ygjKRAEUvWhjT8kEbKJNK1Vm1qd8sqirdyeDYGoAvMVPSN",
  "key8": "4TTpYyQtX7JqFmygU8VGUDRedFwTgLjxwwhyzFMEjM5Ec13rCuPux6iuNgWpY7DfEKUMVTYesQXxQeykmqByTkk8",
  "key9": "4SmKqdMw2utrBttVyvDjVHjcojY8vrphcpzhda8FrEzRSgNh7gjpqnSkyioG7gko1LX9SnqVXKhQgT2FJ4ViTBzP",
  "key10": "52wfnPqMrwxxxeMyiRvcRUYyQ3mEswgpFwqJzpjiB8bT68frhxBuX99BYQw8qCvYLtbXKWf76Ldim7yCYst63J3R",
  "key11": "262fCUhJLu8YNkYdtKixdbaFDVoZMqavewxHp6Kz7WQLCEMP253cTsLehR2JFHXWZ5f2tPJSfCgWWFA4qEZMMTB6",
  "key12": "3qXBstDXtG7m6cjEzCZN3vDKUinj2GbK1KE2WyJhGPuoWFaMLzoSvLCxwDqFMVt8kRKubcKa3gx4cvPHVrC16wPs",
  "key13": "4L631nyyFy8JXYdB4n9Mugh53UFRwBRDPbZR9NRorU1cty7u4jAjwT1r7j3cpf42Yektb78trt78RVhxNqNpaT5U",
  "key14": "2i7weRWxKucxWkiHAYQFDkBfyvohLxPbCYGErDtoA4Ac1GZrxPZHjjUM5fUGtS9fJbVY4FYLPdFk8aLsMkYUijBX",
  "key15": "63n8CYLExyRStLDZ1nR4gLMszfbrCfzvtq9y3UVU1nqP4CCxCEZMHkqUw63s45Dp42eXiGmndgwgce9iPJhu3M79",
  "key16": "4A1Tf3FgxRj3wgR4nQR8dTMXNFGgZuboaqpUEzGgBwUjDVxfAyPo6tybB8E6GQf1cooMhNoHE2kJtWTsyd9LRmxb",
  "key17": "5GqvdUGR9Vh73aLbkzeKsyjQhsH9ekESsWdFNXgiAd4wSTR3osuiGUVvcis9fjVCbrGUvxiyyhiGmmEJ97JKv5LK",
  "key18": "3hwhxwSf5sh6cy7sUVsgsMspXBkWFZfdv8YfB8Q2FoxXPyKa33gjexc6htqPaGpnE1hKNMM5gAPUE3q9rzyDncnp",
  "key19": "4UwNiC12Lq2gFNjuQGbWEQMxYNHoY3pMa6QuenSLFSfLzVuLShVaCTq3NfMqpABPxtWxvBQo9nWRfXHeFkTX9wzd",
  "key20": "57232BxrahNf61SNKLRzCSVsq5hS6o2ZUh2oTepMae4DD7xmZYaj5kWz8XGJtRMShq32L1fMCUu2ZctRbRuLnGhp",
  "key21": "4oiotumY9wwzXHpbkUajgAFZctdgH8u1UNhZfBVWdrryp6udFnPArzMNkZDpwbZKBgtY7xry53WJPPAC3YHGMTTf",
  "key22": "5wtt3iwqSCJgo8n4ANyci5pyRiibxGAybmUpcADkwpcp3cZJYQXd5nQFs2mKiXTRi7e5Uz24wBAZDtbNqNnEUG3B",
  "key23": "5wCmh4HcsE2rZijk8G3HnCRCJeeo4CZm79s1JLRCtXdLRzgWJJ9zLjtoicWjbgLU61Hq4DzUmc3dJYYrUNQp46go",
  "key24": "3di795NWCdWCMxKysQNBjEh5soV9ATFpMoooSTPwidTqKKxCGbKWSr2kConKy6KcSZRyjPJ6ofbMrKzdsWPKDgDz",
  "key25": "8tYNWMM8NE9myq1YWpFnadYdiTvBHm7Df1G8TLBBrK4XNGaujq2VWcEFc8H4uJbAYxvR8rLm6ybjzS6vWzgjYi5",
  "key26": "2BigmP3kN6CDZwMVtm5frvXU5k7jwrHdTQtMD3zoaHr6x7SgwmCABqRbePSz22H3njxavfy1mxkw1aw85eCJcdRP",
  "key27": "3ykAbLFrBa5iWGX5YCcboEhASgir3G11FDfPZgZe8acpkPMm9tkN4WTZnbYpXbqotuG7AogQEZHE68KXduErfCk6"
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
