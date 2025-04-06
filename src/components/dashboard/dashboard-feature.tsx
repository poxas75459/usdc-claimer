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
    "TyazCdkepKvtao7Cuokx8rGPBpQQPsAGAW7vwCLmanXr42aJ1SETBhUPu5Yuw1DHGD4NiXEf1Uq3KLGdX3KEsv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51i1VwixGGuq75yUfatNaQVm4bxtYRUvKo1nTjPoXKWhL4s3VD9vhJG8RGEvsXhYhW7qz1A7HtVy2R7nVi4iuVMk",
  "key1": "4DK1ZQs65jUHszPLhg7YeAHaXvQ965n4V7sG5uhf4d9mWyny7tBY38HgMgUZjJ4uYLCh16F6KiULghEeMzxEDTn3",
  "key2": "2237Lyb4gsNT9saVTAAGmHsFXkQbof2Ud6iWt4xWV7bURtG2QRB8n9Zya36KUNuNVHzBHjwQT2f6gDDcTG6x2ySS",
  "key3": "4c5ENgrfV5xNGKhbHMtwRjBvcCbZAKDvVPXYuZFNB8LsMSFgS8PYe397Sv5sjbLaFHbqHzuHZGhdRnHHnm7qMVbr",
  "key4": "5Gm3SKuZdfgpFjSmFUomMYr6qeNNsHq6DtmQ5gtmgoUasvtWGmG7NzHdyBQTjpRr78zXw3GD4RdxaU5L7sFKmWyb",
  "key5": "5T1yRmUEyGfVR1548tVVck3enx9bfeUVhYmdsxfGqwJ8Pomx55j67ZBsdJCbkzRnfqC28m8LjdyjFCHWUZVQ3Jdh",
  "key6": "G6GGpYTe7yc8CCC5RR26sR7cNNUos5yhkLnjBWS4EE26zs5R7pUdb2EXGV1yNhBgiF6ryKBhdgaJ4LqM4xM5Exw",
  "key7": "5XKv9qZgEQwYUZ33CeuNpZYgjx2bvBABamAk5M1NccMXQ9buSjszZK379yW8dRF4TMWa2U6X8eapMkPMtmEr1vj3",
  "key8": "3mzLDbjsDQN891epZmjRCkdeiMZMBTDFPULN4caCHJ5VBwHS37Mzm4HcuJ8wpnxg5GjBFiQqkewA4RN4WRTJjvPQ",
  "key9": "43kADHFWqd6TEZ8DKJpgtHEEQU5215r34Z3pmXD2hEG5FfraCFcbEZQhabP4KTX6PvseL93oWhZUvXk7dw8hMFX",
  "key10": "5VDqBxgvg7UjLdJVC7jx8jtB2GFHafVBP5jDq3i1Xh5cZPjNhoTSZHAjL6taiaXo8thHsfzaAkaZPv6uQNNacF87",
  "key11": "xM9hgsRVX6y1DMgukFM8p8Ra5ftFAfcEA5sWUULN787tx9UNt15yZjMcmud9JPaJDFnw9QbYBSZnYE2y5QuLsDx",
  "key12": "5SBfhGv99q5f9o9uHFj8EVENfzyPd369EzqXbSca65QCD5ij7Yn9pZ2PUWTJiHu1nqTeZadApZKW86nEmT8Eajee",
  "key13": "5ZNt7759L7SRoKJZZBhaLRpX2H8hxy8cjWLHrncYQisd7Vieqt5Ad9DKPZt51daRf2MNAvKq6Wp4y42jvbXf9xig",
  "key14": "5vPRKkRLSoie3VUQkWsbx8C1jAh6akt8eZqgS3y8ffdpaAFdKcejxF4QLpFPxXwFSht3eaKxEpemmz7y6wc2pe75",
  "key15": "5rA84y7E1fyDNKPeiqUqF8jZTcGQU5vwBguDmdHnT2KXX4MXBsw9Se47wGCXzuA5e8LSkwnvgEXFbVuPdobAyEzW",
  "key16": "38DFKcgZ27YAcApZuR6mSjivEuWg56BR8LxdkUvvpkA48ZAnKu5AveUngbsCoX5zTCoejkhSUXgk9XHkQgEtNSzm",
  "key17": "3Mjn2ZNEiEPaxMUExMFWDUoWyVueiNJSufEpszvSvaSefEQYBtni8BirGbi5FMgJgcZGC8cAhdspKXpazSz4Eyeb",
  "key18": "58FN2AUp7wJEK8TxGdPwjy73sjXWM7YNiRwKpDYHQ4PUkeFMLnhpfE5vj4Qusg86w3sEgkpsy5gaccDKrmzYeT8Z",
  "key19": "2JTxVTLjE9VZPsELZB9K9p9AtDe7A4GSUjo1ryi1juoT9he7GxopPMDuZVPBbjPyLLEU8EvcHUCQPqbk6p3QYiyx",
  "key20": "4eysvLTbXUDJ4WeTKhBfcQPhkXkHEMyZKLEpou4cwZ7sQyYNneoZDgzfGRrpYiAHiKYZwf5ZCruUwyYxzK2Hs774",
  "key21": "2wABgcoGVv47FYk6RCL5shMeBBF7ZbFQja3kLc1Sm5KZx4fnc5agRJ5sMMHuc7mF9o9KBioWu8svWf6dk8Uy55kH",
  "key22": "2ZfRD17EDjGrQz5Gvm6ZKFDCJPuoWJXB5RR1FnjJSDTeKoRjwEEfNRd1RjHZk4SQFv5ca8sPqTkVQS54UsTPySnd",
  "key23": "Rh2HospakhtATnkQBcpuMznoNWAptA24fRxEP2YzLY3saYa8H7zPWY921rePpnBUwvGnX41CkEQonuUXYKfcpqf",
  "key24": "31LfBa1R5nfjE8c66ZMswy2dLSx56e9pycktSA2W2N2fC6RCCxjLD3ntC4d7C7RKRVbidCr1fLMANZsvyor6ZpK4",
  "key25": "SdnwwakLfLEydjfby4seZmobxnpyc5rj4gXfgTbGwFQEUDEKYbCkVLn2KG8sFXGhXGQiByLmQHgRQoVJ2cx1m5H",
  "key26": "5MkZTaNUvjf4cGZsSKkfPAeEvDmHSrs68jec3iRF8oQ16Xp8MkhaUewY9SiUCcAGRFThCGzshBefghCrSK6d1Lta",
  "key27": "22NoidSjm6P6HgKDJiRLYtRynsyU4gkSz3mvowPFMeVPgjAn9pD3w2Z2FHvyPvikjnf7zrVmub8SE14R7fq4EfSB",
  "key28": "4R96Bv3YLmizdjZZ8bbWwWJtPF9ChyoNZMJ2CmD171w7hwWZ9RVb9nDcEcEtZNt6w5n819XDd68PsTkTF9e9RJEF",
  "key29": "3XzV878ptm3mfJqHj1XDG7RMUGao1UejhXr7Q9rKLTD3xtV8Yvaeijgc9t7nBLk5KxPWfeF8v72VcXKNjYGNCu6u",
  "key30": "DQPTSNzLcSFY9ceKLdJxRLLTDSCFrp8GPoZBnUzPghcDPTVi5d2bRHzkXwgiBzBuGrbU3NccijSdfpmVXCYfYQX",
  "key31": "471gzDXPHBgwTX6UPnywEijxiLSJjxxbX8Ahkfyt9JmTDTnCLgpZshccP9gQNKizBtQAJsFN9SPP4iXvsFiYZUc7",
  "key32": "4dSQa9o88oCXZK7UZrgBXBCR26YaEvcC3XMRa6FTZ2m7baRAqDSKxxkqG3MuTKzApf4k8JHrGH8rjpCGojUv7jdm",
  "key33": "4PMZDa5awTu7ebPaSXwCrogikyaM5byHwM2gWPJcHWBj6JTLsRgLZpYU6NqzSRSULfEUU9YXn2DiawZaWm7R1Laz",
  "key34": "2FUo6ezUfnKTgTKC99n9eknLYK5tYv9skKDi3HoGHqiR6t1YUC4hxJhj2SqGYUEXuA1KrpEcFoYWmkwufEK7GvyH",
  "key35": "4LuquCp4rK54PLmKnCRqEvvskSX8yPcKB61Fjx1DTqxYkurJ6tD2Njc8HK2aiMo38DN74ANVak8FBDyoCi4hnq1b",
  "key36": "D363p1ZRRSNGB45ybwXzkdtRwhFXb9EDv923VuMsepZh44McSgsX5JxNt7Zi32ApwkYBmz8q1sEYXeSk2cfQwXa",
  "key37": "49RT9j5esFitGwM1PqAYEnrXdn4Fjef3WXhvsk7Q2ua2jfRjxF4mfkyU91LJpBAdJbtXQRLFQqdpzz8MuU92UJMb",
  "key38": "2XFavLewanrkh7Jmopd1KfundiuPqbtWgTbStwXF9t4SXmZRYExav5thXE6ow3DK2ZyoweYyQJMyQotZsdXMJ1EY",
  "key39": "5Rw7jXmiaoo32qKRMZs6MgFBo3tTBSRcoBBp3HVb3twfxit6wnV8NUMNZgXjgwHYiHAhPbYHW58Ro2ihYn9Y39qX",
  "key40": "49P4q3YeZRQcY9JsL1t4ubL5M667XLDo3gi68u1ygEVr24dEG56kBDPPFTKDyiRGTtAbzHj1FDx5oMSQ6ztxNce",
  "key41": "5nwjQe4r9vtZJd8kKqEXn3JygKBfqPjoH8nNkF8UWSKpsUSsKL3SWrisX4kAqxcneG2e2x3ZsveR5sdqzPfYcbSQ"
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
