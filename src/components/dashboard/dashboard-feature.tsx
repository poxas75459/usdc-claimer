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
    "36J4u4RfowNwv5nqfH5TE7BzR1mh2vSR4Fy4PfjSYBUVth6s1xmdHPxUYRB79mzmtp5Kkzj4zfypQcwZCj72rW68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iTJJRhqpRnyJ152hGCk9arMGChx24aq3dU4omBS8xaBFb6f5yK7iRZmxyCjSQBMf2xDhCQaZ9XZWBw5BsfiReKM",
  "key1": "jmD79Cnb9g9DZ8AMuxhpmo1BM9Amch5oo9uNbTGN16pJaWGjHzFDqE3FVc2d7mCr67cmNDGkqo3w6HZzXiLDdfy",
  "key2": "TM6qBhtz5FNyFccMhN7zQn8pyr8m3HRs16HBWU2CvTKkdR5MkWgqS5Y3iLqvFGj9qWWwZyvQFFB64zcet5uRyRz",
  "key3": "5TdxdrqS9Rf6os34zz6fprPGmsdahJPECH5z2aAs4cDnHrvhmzGF7edLmQ9HUB7Ekuyi1iTYyFiG7bsSxYduBe59",
  "key4": "4u4TL3qDB99w5sMxmkNDCpZqfFFCWfFrTSkRa2FmMrrxUcrhoiuScrGZEqqHDavLtV84VaNZrwHzLb4521dh5W55",
  "key5": "3bL94rkUMfLjTMMpveRe6NXDttuj8XBAQQ2omqSmTj5NnWMC6pSqeBHdbVroM9vMRadShPjGCwhUL9CvJVshuDFM",
  "key6": "5QKcYRjARTyvd198YmJczLPJJdVGj6nDk5BLzHYMqUB8JXRTSiuzmBD1S3V68SsnKzsFcq6rXtsMio9scnRusMMK",
  "key7": "3sPuJqL3FoxNKy3N13c7P1buWRLz6Z841A5kgoWmd5Nz6xuo7kXjbkvmNNPx7tWkDWUA3JL6LTmgywe6zW2gY3Vu",
  "key8": "3TyuD1axVbqPR4jfocDvdAhKH3i7vGnxBi2PbHA1245X46Wh3UMKzQDKv7Jx7D1WmNpRaDZpVpCvk3Um9gQwiZ4B",
  "key9": "4FoTzeLX9wfec2kVt7UQaT16Yj3bybhAUP3PBem3U4EyVXhyTZ25oMnHUvyWJPRviF391WvKNqRBFresUhG8TYAF",
  "key10": "41DEwnppnZjkDt6XsFaNSQs3CRtd7EfJkfs3iYSHhBxVXFgpBhDn1HcnRoiJ82p1pX9aPCTUNd7WRu3VGYeK9osG",
  "key11": "5Hw9PzMrH5A9wR9y6yN64r1Sd6GMRDMgu8BQiCYb4rprPXgLkzYxffrQM7xMB6EXt2zBG3EUy9dCQywRj3qoZMHT",
  "key12": "3dLcXBNyfxSyX4JiaBkiWz7fftZAGU1SMt47AEAJKGofvVntWfBMif2MEZcKqxuxaprVxSDcQMr6ofKHXrBq47Sz",
  "key13": "5o4CjDVhUFWoG275f8ZfFJbq9rPTYftwzYqreDyJHBeREZ5JTmEYTxLPoLsYxkVrirZsPut3CD9vYk6RofZKJ3dZ",
  "key14": "62wyVCaT8NvcTwEHkREa9nT9FNa8jA41fpquSqZHieMLKUPCENjNhixSfW3R2B1FXRD7P6XCec77CZbsKcV6iSbD",
  "key15": "2XpABecxDESUEK32MJn4D6jFckBR8d1WN1QKg8MKhwT94ovEkHdTCNipBGZvh5aGNUkNv2DZHA18yF2VJvr8KGrS",
  "key16": "YvAaymihZNre7hrgPaT6fozW2AEAEvDKm3W2phgCjccdgT1RZroqvKuqdH15W7D1oENmJu9PcNCcUUgEjVM3BGH",
  "key17": "5XYik7MnF9rWP9vvUfqaFoudW4zdTyymNNUvJkbADHZfYRksuv5EcY5fqGUc2ToMurRU3JQwPKFViB9nxroyVFVc",
  "key18": "4gojDUudURpPJenQpeqmmWPnCts2jLD9yxiTd8S4qGSWYtVxk8XdHtieQtZWqSYWxbuUhqhF3j1Dx54NLTMoV4bc",
  "key19": "3vMBfNgTKGx1GQLHPAHhRUAELpGM2oEQ2i6vP6MrfR5BmdNh3fir4uxq6ozdTuvMxsMDQ5PR4wRPoDQvyoXJmpvt",
  "key20": "445eGcWDu58z1QykqQFyGjhh73rZBFcTKzzCwK181ESq8jT2btTeddcajXhvaeRvGNVK5n1g92kzkzGWrcwt4hVo",
  "key21": "4PzoV5eVGK9qGuCWycLH4GtoZFTMQyLG3oQxidP8wvnyhqk8QczGeunTYnBHp2ArRpAvXyjErwsteTDEGjNKsAYR",
  "key22": "2r5d7Cp3YhQJsNEHa2PhBdpUW1uVj3dofLGSQsDtSy9S7tPzH65tLHE6JQBN86kHwzpNkdQ8ZtP7BmQddSCZz2tZ",
  "key23": "5wdTA32xn6bM22ApQhWh1y5fgFnFNPeJMUabX5pgXdHbmteiLZN2WyYXSUStiPmBP7esZ5SmoukvkuAnSjKJFG4c",
  "key24": "2YLPMYJqLjA3PKSiKea6XBXwdfqoE6CCMzdw1avRd31SrfbbAFUq8U23qFfmSzbdjZZwGuHNWssrQghCmtay4tWY",
  "key25": "4pwue5TFsth7tykMZQkb8asLPnK4U3h84evVnAxCKaezEBn4vjxWdmZ5cjC3QcWdTR3su1g1njkMmbyawp5vNpgN",
  "key26": "5Ey8DETcDqZb4hqz5nMHYW2XJ1uGMMuWHGAU3XaEBctVY1cnQ5jkMgKc93nn3tQsozvkB1c4MRDYcd6sZQ617KfK",
  "key27": "4bSAreekV4DZFk7S1EWiQn5K2Pb6J7zrw8qTGZFzUKTgarEvDhmPLk6sJN9f6gJD8TGneLjmy2a7BtBS7eZLnYCH",
  "key28": "2eRc7xu1UZFNLs8MbLwjxzDtwAXACdJJ6tRR6rNkWQH7YUAMZnsYTG3VDknsKoAS4ZTdEkSGif7ugbXJLVXoiBeZ",
  "key29": "5rTBgnjZvktqRc4Ab9iH18LapQ5tfxR7BsXB5wJ4H8whMKxBzbJ723ExDdipv3LaTGsS3xFzS7sZNq9EeoSje39S",
  "key30": "5oeutn7VYPDktPnQ2jyBPrdYQTXHND9P51ugBtuSk991jWHiyv2QLgLMWE45HA1eZ85rHY2jG5J6XmHyWdLpRs5Y",
  "key31": "26QRDbdDg6hiBAvzc87SPLdifHcpC3UJd79GaRFYhjX9APnNrE94BW8S1tVj7Ncq3rwnsQ7XfohFcWcWXpwmnJKh",
  "key32": "4DDCjJXc87qgPBA4uHBwU6b6YtAMyyXQnkWC5rn8D6EwaFUw5oyeALHdE93AfYCKGyM4F2YBes9Gibyhj82WkZWD",
  "key33": "594jY2QaBuCckcpEFkV6vxsnRAA6umkaB1erfxDA4QsWR6EnETQCWqB8xwZd8eAKsqESMQgx1T752KaB4qMNueYQ",
  "key34": "2NVyiHgTxpJKevSU2iSzg4iHBcW3ynrLXm9FYWGQwdGDCWTZTCEBw5BPSqhzssq5ucaGXKN76xtcY3xNeYAMtLJN",
  "key35": "3qCwWGXTuqwWVZZo2KB9fFBsqVU8C8ajivcUZoEKmtcaVTvhbYhHCuLKDW8mu1BhNSvkKmbsKPDp78D4Dwnv3JHu",
  "key36": "kBaTLFP6FpxRBai4tJjU4LQEADJQKeFzZbjXPTbP19o8UU8EBvGj8WV4FJah4iX8PWr73SnvJrFZuHsCQhVNnCu",
  "key37": "xwxiXbWR8FWufCRJAAqQZX6noLqJafvMKcWRQz47UCSmUJ6BhfpfERurCwMEtwApYb8cXgQSD9k5r594fqzauGC"
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
