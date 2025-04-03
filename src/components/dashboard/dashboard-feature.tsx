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
    "4xtL8LCWMnUhWfRQ1xF3MBnZyHgVWSSJcus7Y1c47U5Fdaj5a3ZpMQUapyj8PXsAV8CmctsCyGF4YpTgaLXc9JTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VcHFv57Mn9SK2pK7wCP7jdmv31BFwRaYycqpsfnphfMVtubqZwJDszf7sP5FgUfFEbxVBHSYNnxrXw3cj11EXT3",
  "key1": "opvJ4k9kCcDymiePsJW74q3Ns7MX3D78ddWaeFwpQn4hJLQUZ5tDYZaAhrBbCXLayFKuYPgjdGXdEuL4Yg93z1U",
  "key2": "Jpv4v4r2YsH34rPbQ8F8jaqVk49AqYNnLU3s7U3ReXwXKepBXTuRFtcGnVtnUNMKTHgfVN1Nszm9iSWgCdXMw7B",
  "key3": "4g4TtEuLY86H1HDiGaB492f7jyqab8LgDEcsyNaakyzMbPjwL3fXu4BPNNNYJS3UCpSTd42BUwhHGGUndMjMptP8",
  "key4": "2zD4RVqMR2pgEaQP3PJKAwaQzd5SCUfMe2D4X5TT59B6pD2vWYJ5aRcE4zAse88A8VYbmKTuhcYc6jNaLoQQtmcX",
  "key5": "3ERHYJxd2NyL5dNFGtntdjxPMXRmTDMM1diSx9XLavageuMRGJGzXpC7h1VccdjzBa9VkGjFSk2B9dNoCUDcLFSJ",
  "key6": "62Mug9AbC5sdexXHamibTTD6yTnL18ZhWxSon7VxQB9KZqjDygZUSaCNT7cdyMpkHZu4FE6qwS5wqauXudE58Px2",
  "key7": "4CPy5Giinh4er2P1cok9qmYDxW7RirC49Y5qKUxSEx7AaPjVsL64JpraXXaxGRQDv4dVas1xDiDwdthtThkTqyme",
  "key8": "483w4vK9imqrgouzDF2rpxuBTiSzK5tp7jRdLdArD6BQf8zmnaiHp22R4Fs6Y64kDRDyD9CvVRxzpgbLZGc6cW46",
  "key9": "Wk1hhVHYv3SbLF8RvS5QLDKoZRtMfcv16QqnvmCDeQ1ZQ2beoyYekerMQavAYntrgg8aDLRpwwEuvTYsXXdn82z",
  "key10": "8hLwjYmwqzTJxeJHZDECL9whCZRhPFQ18VqsNowR1jjXso8S2azDcqqxAhGN8n82mV8xa3KuXyst8FhnWGrugbT",
  "key11": "3KX4N4u6Cgh8edFxtWrStDBYJd7eufAZTHgdnykinuec3a3Bc53wneD7CoGrAdqLAL8fVdC9CcutkchoyaZaeULT",
  "key12": "27qQHFcQSVMCYY9xNMeD1P9rFurF6pBxRZZcb7i3Rs1D6fbAZp5MtmJ8BwCtchM9wfAsn2owWyHU8UoC5fRvQ6ww",
  "key13": "5TzwggYkfKA5awUhf45FS7UFWV15ZrVk6Q9BJ6tnpJtNgGySP6X1EtQY1DKG3XWw6Wx3Fd9GMpNNX7kYrSx6gmeB",
  "key14": "4aZPVKComn5EV7MhBUybEE3yhaXpsceQY2ytTTSsv8Db3tUFCare4Fz7GE5QcYzbXXiyKj1zxf4AmSmrZiyU9FX2",
  "key15": "3vsTkHNg27fch5WSPh8FM4b85r1zPRRicjVXw515nCr9DxSKoeFGdnJP51FSKpDqr4aybBvKyn3A1jLmB15mes6f",
  "key16": "4Su8ap6pq9EF9PMHMqmUkwK8WevrbwgyEGMSMf1cF8owZRTos6qA6ee9eq5gibwwt6ZV4iC7e6TXxg1n6hYEAqGU",
  "key17": "49y9uh2sF9zH4curP5UGXeyXmey1Tt2v7PEqaQn8WUi5iK68WgiQKaboXsBBWXHg59y9ds6KnG8tzEEqy5UFbU4G",
  "key18": "5QfyHLRfk6AuBKJTwn4RRcNvkRv3LuZ5Nbtdf7NmsRFe51iomgkBqoJiRei5yhz1npMT5Xr2mWRFVyFkNRR85tQV",
  "key19": "5u7KugLRdCmQYZNaq8p48vYV6aUvw3xWXAcfhPDb7deWY87peBcA6diskNCZeDEmeHaSJzS93deewqNXBXhrkqVv",
  "key20": "4YbvQVccJWqjujkDxMeMgiSLve4GT8syESW95dwrL5DLJTfQGge2vj6dbJEw8kp77mK82WKCtr9gu4niwipg2FdS",
  "key21": "FPahNaZ8KMQJ7XHpfjXuT3gpHB6yyQK9mkTVa6HmMicPhh5yitsQZvVk7qtaC7zv9typ7g6DQ1nUVMdSJfFEe2S",
  "key22": "5US633Cr2V6No9x69WqbLSB87Mc21NBkjqMmBr5EEDKSrzoBhn6RfiZ2Y77sWaNZTx8SzPQLHMGnZxmQxPN2AYoa",
  "key23": "3xC42sqoq8uqNXcKFpSxNM8DpVYhUuhTCkZNvdE3DWP6tDSKvunuSuYgzBRMybNvPzKRbpTVoiWFNt3r826PybSf",
  "key24": "4mTNqb3spRraTBThw6MHqFNoUkhcqtT9Jcas4WPfFcR757hyNDQXXK2GhNNzDkJuVQVo9d8N5WaLb5m5hwghptRD",
  "key25": "3yCaCSu3FchiAv74w8W2TSz3hpQ9Ye6mNzZnQF4s9qrY5FvjjZF7oXXcsPJFnsnZ36PwhokyXJtTt1VwyR9YwAUU",
  "key26": "21rF7NuwYmfRjTeLSRPcHDSs44N1Do6GmeDdyz4DG5eFnRDELWf2vSSfnFbtUpcqnpiLrmSkp68WVvixkaZSesWr"
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
