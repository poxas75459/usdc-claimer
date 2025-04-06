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
    "fudhiNaM5XBz7K4ME4A16CtwySeYAwPG34Zm3HvNmfSHYafUMh7oma5Ykv4BTRsMSiQqXA3fLbs7dk8EPTbCEvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xsRdRpbbLUga1kbGDUTF8TTEYxJNx7MPpEwpFXELWFbWwVvnHTYjBiTRP5hGHYbmuuxdJWb7APoRMPwK8WA6rR8",
  "key1": "V4YRPZJi6BuAKr7v3w1djTiu3maCJkoHNnWPXBuGfS5QDNgp2bd6qTum7qLG3JZgchhazotvc1ngmndpsxBZdw5",
  "key2": "wKChoyrU48UKUpNNc8Zj1NCDBQusWc3c9d2mZJasSK21kbWg3bdRLg9DvrJdwT3mWaMdgEUDXcKPteuryK5L14T",
  "key3": "47DswaGwGxYDV1Uh87Yfk4tyBbAbXmcXEVxjBM36jNjB4awa6X5jYcznBSyu4ksesoQkcSfm8zCCCwtz2LdVzwKb",
  "key4": "3sqEau2Cfs5QWq9HRWm4EgFPayLeWFcB9Tk5uBNfpEtjHCMsPkH4mFioUFVqYQCVSPwVVnrnaTWzMst3db54z2yz",
  "key5": "2dg2pX1bpyS1pJHvPRzEyvJaHgcVwWHwjoCNDJ6Wf4bb7TYtD5Zp3yDvrDgu9gk2YC9gbrbabXcJeoDuA7j8LtHx",
  "key6": "4g62kh2mSwRwGeTeYTkCpLotFuCCa9ap2QF3iGys89ZKdRYA2xhws6uCy6xtefdGLbKGcVUagP7mD1UTmaGegxgM",
  "key7": "2iFzmX7EcSdGfHuvhz9HNs9fGEx1TU1oNGv4YzzFAWNG8H9Z5y6Brskq9iueS9yh9VHu8WQuRYqWAD1yC3pB32QD",
  "key8": "3zpTDEsMepcKe8GQ8ueZ2MHoNJgG1vLZNJ5XTSLMZpXSC5A1yoKBzrEfS8WzDfx8KiqS1Q6ruNBqtKtA4mfBvPYX",
  "key9": "1H2D9XY83xvPzbspAvyRLLmVHyHQis7eXmNRT2mNxApHCfKZmhwSTQod2KYorG1gsJAn1L88m8oxYYfPGhbZMcC",
  "key10": "MUXDS4EsBgeDTmvKVvBe2kjaoBCJsaLYcnPMFM7NabTxxGjhWjZSCgEeDQRcY56jvGBoM3F7Vc5GAUdepiqYCw9",
  "key11": "3KKx4WzBFQn1KWv53x2iFRxWMTkDhT6pgkReYeZ9Q1PFdnWpKVbS1kVSqCRnCKNfA7ENpKf8bAxwN4TT1euTqFqk",
  "key12": "2hxpHtWc8J7kbTQbFUFssM9xt78YkvBgi7Q9R8tyA4C6GWWPm1ig58AkafUvsFXab8XK3mNqq2WYhxecCsFVfWwT",
  "key13": "5NfnExMCpRrLfze9oaAz9za9PUo8USmqF2sCggV5Y6UGFAX3hceP2S3KuPGvujLZXuZN7kismqTioUaP2JqEXszu",
  "key14": "4PCkpW7pfpadU472DnX7CpYA7xrVc3CBtNQNAt3hJCKNX2oJwzMLmdMP3fbNXVc18xf9qannyoe92LpTSoFKC8bc",
  "key15": "3yfn1aVixjJZzmiGGJeDMcHyrxwfXM7oCDYvRJsQ5oMawNjCkRmk6vb1xnv55ymi7GumP8SqfEwSmJvJSDjDS7iH",
  "key16": "8ftukPr2BPY6RgfqQsoEMW5RafdJPJprS3Cm8tRw8eQJnL3jqEjmbREeZpsNzJb99mk8fpyTvhGyQo74HX58NWX",
  "key17": "2nt3Yh9kc6MvhN25Zb1zJcWxcw337sem2TuzsbmvVcSKmzzoWydBC94xxYoV78SrZXZdhsckUWFxJauNXjxuSjwp",
  "key18": "qoBU1jHSSVFHPuBSPvnXdSwDHM2guCQw5Df1omRAqStfrzj6SX6XE58Vgbf5GQPZAhdQeAX46TyxPX5dqSEoMYH",
  "key19": "5EVoVJi3HmiAdVF3c78wgr1rzs4RhFFZsQHvAqADmFroKw57n9RF5W1SLFhFM4oukaByLkDf5d6smgtT6Wu9EGyn",
  "key20": "5myUxN4AP7VyoGe77Tw4ST6BtFv5BDLyzGXoH4UVmjhZB5czBZZ2i8cXcrqyjQ7ZFpJZSr2yedkB7CGSLFfNmUcZ",
  "key21": "3r1wtEk2DtdP6MVhJMbQBg4Y3JXNcg5MvRvsqxRE2uLYTnrHNihUq69qpVNfftScbsa1knpqkV1z5CSWAxfAXx3s",
  "key22": "25FynhHhUjA7M6UT2S19zsqvDeHD135uiETaqag2Md3XmXNVNZLzww4kvL7UYT8TkZrXPkgcytwcN4mqD7rG4EJN",
  "key23": "5QjAj9VkkwY4CGCE3Ld5QcBVW5fKHNALxKoJePggAFNWbCTSmEDKaBu32XmC21A2pQ6n3LdjXcxoXqeoG7sBJNd6",
  "key24": "67a4PSeDfWuhT1pEcu5944HgojtjGhNXRy96HuyEHggrVs58KuuM38qfTJdvCHP5P1yjqdQjgBLRRM3FK6nNmdhj",
  "key25": "2GgQyeVkVVntf3m3hpHM4gV1VFstwS9bdk7nrxWPrWUJhFWyzBrdkL37q39wWY7gTnyBm1SD7Uo52n9naV66Sw1P",
  "key26": "2RvBLBSpxD32hAG8zAEQrpJGsdb3sbEGnfqfMLF4kkQ4a8HGq1Tc7Le6tVEhGvotwsY93B1RL7io6LENEvAoUNdu",
  "key27": "zYhVdcqx9Uvgsfkuzq6Lsu3WbwraWWKHHSJ3wYiiMyiDAwd6x1pQ7T5GgHdrMSaupZVdwCd7MKBX2eWLwU5FYkK",
  "key28": "4EJyLVXUV7ZkmzFSWu9xfuEx2cUZeqmSVCdATHwv1Xjzpvfx91a61g1FgZPYQPtJvH4GtY6FziK4MjCZxbAskyS",
  "key29": "SGQNbAyzDqsz89FKv1z49rYURkmLzyYk2hVjzqwbkVhok49VyFDhe5WbMRTaSqBfV4rjVaErJ9DMsnqCuuDzfD5",
  "key30": "3CVTsZyBkq4JPxzrtZdgRY6823m6VetVZkYzSvamzphATwuFrQXjEfH7gVVfHHKgSHicQncaftjDoa5eJqG1AZap",
  "key31": "46dURF4t2cibJBPgYBEvjTqfFu6sMtCHAfWzcJrDFKPm9CE6z3R9g7uLayQihjawidzhD17RKkXNhZ39LErcL5EK",
  "key32": "YLCrJnSoFmJjsr9anAT4gpWBUBAu1HZo4CqZSdiBgwATFTGRcREbsDAmDx34tGUubmQ5smaTZVyVdWJmEedtUyG",
  "key33": "eeQhmqMv22hKSie2f3ghbRyxPH3jKZX2XyDEwPMH8rKtDR91TVfsFsn4DgcnpsumaTT9eVq8gnSdFGAEiRWgCjR",
  "key34": "2xH6fxf8z9y58EzDuEDfWbYRdziKDwZa2DPCR5TfnKg3aHahidwUxfbex99WMHVjJm6RfsU1Ch6vFsjNKk7pfNso",
  "key35": "4q5h9nEWyMUvhENKaTWr27sLuDRioKM4gu36e9auSQbXWSM1oy4MJ2fjuWBDBvHyFG1PZqey1pMFPS4tmVsEyApB"
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
