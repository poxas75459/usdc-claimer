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
    "3hWXdqdqRN8EwbEsSgnjzp3tKgoq4a4xme4DWfGDjfw9J3naHzpm5K8q52aB7XAqWqKvQtdGbapndHP47fKYwaXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kbjjp3iKZGwihVPkvvSVmgUvT5f1ReGNnBoUtaDe4udFH6nN1UtPxNcH7xNeVXVKQVN9dSrpMYGR9EYfvgZkyvQ",
  "key1": "4skNon4at63o4sVuQ5CwCG4PXZTP8fiufdhijpYpdGtVzY7AtDcpWDZwxN3LJP5tTauHbYebub43rJZKgWm8JBcZ",
  "key2": "2VZhyHEtjZd1B5piAepzWtBtAbynTSu1oAAyRoRDr51bPFzkHPFefh6hUuAtsXpUuGaJpyWmtqqtrC54VUxgVA7S",
  "key3": "5JRoayBivtScujVmYGSieehfVHWZrBR29bDYDC7AVBjWcXpQ1HWpR9kvJWYffM6qd7Xwo1D58fVZr7wubZ2YqCBu",
  "key4": "3VbcGwRz3jw4Z8Yfsg8Me22bq3KFfMhUq2FmixNu2SjrvpvJW3TokC5GrpVguKXn5wMWVRyfYzdJ7S1L2hNCrDmw",
  "key5": "3Fkn8BJJwJs6WNjtwPivSSDjH1WhMGbQt3BxDJXcim9mzVqGk6Uas39Cw9B5J762Gi64pyVK7XVS1aSwVTWE99g6",
  "key6": "4VrtGHcj8DZHtmJQ9YG4A7gvz9bzetkJJr8bAAnrsUzUbb6UUBqUGd2LVbxRd8zCbczjwd6acPawom6Agvk2HLUh",
  "key7": "2GK31dPc9iv2ouW9fyRzRkyM63kX22isHdBVRZ58wguPjiMHkwSUQe5qS32sL4d9LQPY33qfiRdSMQHdagdtwDDo",
  "key8": "5v3zuZR4g7RVkc5J6gyHRG9yQpx2J6rKh9npMoTjfjcrmPJy7sYL1zKzfLqCHMsNB2Cw2nSrLGtFbt3LpyvFKjr8",
  "key9": "5aKr5bBMFXc45YD6AzhJsuHarWDVC14WnYgDnsQomMktSuWUVAmPr9RUH3VdN8mb4Uoyeg9zBqYXBYQyh3w1MvWf",
  "key10": "3gEMr8G7dCruXQUrfMS9dpLzFtj1g2LGBZaHSNk85Qhm1tNubBpJKVfuU3F5rPKb4Ehr4MVXFLzL7CNWF39xAhUD",
  "key11": "5YMkCmeSjrAp8FV8nRDXsk5mPT5iah5HvSjkToBa35HVnXVt9jphXzW4V5CYSjv4hX2CR7Y63JXZs73T6N75ceri",
  "key12": "4UmomJMgjJAoawiR3NYf44JRmNA7SHvqbxHeoUsaVWpBi1tnEeuVWuP2CdgaiQSRMp1rh55epw1jvVDWJLgbboD2",
  "key13": "EaaGLNpUwmmHY6t62hMwu8c8rG2GamoLip4D8YmLjuaT2y6zhn3EFJkXhD1ASWQ5GpWoWk4GSm2FszgCNjEr8z9",
  "key14": "644Ahne5oLk2CZKR94Zh2drWgmAKKdCpcCJeQ4XyzjfkN2mXi2YjyTXyPjcgDScc7p1S6YzdVjakadph2eeJQKkK",
  "key15": "4vyEz9kncMwCtpgg7nLuH6yEQCuqhzyHMd4SX3zDHB3cfpbTxqSh4ckm86aN3gdsgRBjns79XipLM71PYEUnUs5d",
  "key16": "5guYY6ErECei1M76LNMndMfETWj5YepsDoLn8AZZuNywzy4BHohzoTyWJLdpfR6t8c6nMzNc7XGKhwo9sc5noucA",
  "key17": "3wnRwi2x5HmNTF2PupGvrQHKX5P2JEJpLAC9Qja5CyS1227wFdXkNnTMFEqTwsACGz4HeUAm5axshVv3ibJUYMgi",
  "key18": "2Spf6CTAxrJmvkuLYeSEUqj9rGGa2DotM3AM5WAgMv4sRnQS1SNmVpvHVLVuNyYYTag1VwHfWfzpoyaYSyhseqEd",
  "key19": "4aHfHmEHEawHEhMb4sya57STfggVtYVvRLEor3ydLdkbczeKvSGcFiZeGahvnNdh7BCme5D6CBtQeUnYqgpR3v9L",
  "key20": "Q52GeF5cP5tsQe1YW3jRpp62hqSzpqSWmbN1Ys1eZYZhXi7DrXsiHYFQTvUNvRLNgPgv3Kxrcc4FebjTqybN1jH",
  "key21": "4CHSTdiGzLNpNZ5sC9YTiPeEiLkaHjQjX35VVQTFqLkadaaKPnq57DXaVmRbTzVHf9tQj5Azf9uAz3pZBYgK5X2f",
  "key22": "d6cCyLBqrCAXSD9MzQ4U2q8zXkt6yxbMTjLFo1NFQWMks2ZrJVt3G8ddAJMbqefe6iTQ5QU1D88xVjHXk6c534T",
  "key23": "gcXYwecmkogxwfM7WXoQw3Kjrx8wGVyJtFJpERvEys7ctar57sEe9eMpPdj8phgyzrMK4FWYYfmTQri9EwFaB21",
  "key24": "31eebG8PLLcXRaiLvjzfJMRkWA5dmiBcgDJiDu4REFMQZBR5wdQs4aS4S31hUF2Day6GSuqPcbsu7v2iSoCoN642",
  "key25": "4SUMBAvrMi8ufQWno3i5zbENJ7NWFF6dbZsWTZr5ca6Xaa7LeAUxA3PbjC1ybNHpfCpUexNMJpwqG4YXxdTguMoj",
  "key26": "GtKUtfJMysFnjsFYFe2saMMBwPoQCKyWtAqc3nyWJBwLPas4DPmWXTm2y3Dq2n8NoafmK1bPvJX4zemx8EHJNWp",
  "key27": "2VcWBd9ywNCn9tgsuyUAXGAvs7bsn677Biub6rkB2D6kKyZZyDdR29DRpajVWmMJWAhwDyXVut6Va66iW8SyQknB",
  "key28": "4ice5znaAes9cBgV5FAnGckQC9xDGhZMZdb4BBH4CCRiHwyhqDdfngEBFwGLZubyfjfyZkHBG1h2nmmbEZui4L1G",
  "key29": "4bTC9gkviPy2Laekh32vxHZRfBQZZvfkwYKef1xmbirnEnnu3B2q74rpktq6nT4U8MkAZs2DUkEeydaGD6nwK8TX",
  "key30": "22C7Vs1oh5kzkNhACNP2varXwAdVgQLX4xxx56ghWRBGk7eLFcbrd4pVjGF8mGBU3sXxVFN7nVSET1A4wE1KMbX5",
  "key31": "5ah3TKJC91t7BCnxnrvfQbGxa97UYiMenz8JoAcmgNJRtfNocwbQE4sQfDyJzgH5jMN4qxMcUcnBmB8ht1LMcL4R",
  "key32": "2hGvfY1DrCaGFYdHxBEbWrg2zfQkbDB68X3ThiCNJPLSHQ3c1tvtfymqGhAvM7MKDYkfirUGkbLzqPsMqGVB8Xpj",
  "key33": "3msW396HLK55nVgEqDJvBFvVgsS8nLe5LfmAuAXfSEiTBowfscLHFAKC3A9HqWzWBeNLE23BdpDKo3YLBe3Nfvh5",
  "key34": "5bG5czg54DXdRiHfFdEKAJNWJvWabQrwrZfUrgQnAxMoeEwMhXwNYp1AB1DRy4nn4xVYY44vg2Y9AVtzujZyw9Z9",
  "key35": "13cUe24RkGZuF48AQgREH6gZMgUuEAfiNaxBspLBsJikeDWhAxAujzgc3DGr7YnnkavGqYcGtxXaDC5ur6pRcPj",
  "key36": "3qecbUzuN86tijaLRrJ5UTFCFApuCheoEiAQ1aZ8ShGszqPYa6Ed4zutdTkpAE4XMpea1PU8gL2CnWE1x9iJRRJj"
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
