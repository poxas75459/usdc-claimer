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
    "4FhSKHGFHoVxy75N2p86gEzrEzrJnxC8z6dHWrkGx4xr1Qp2G4Ur2wCCaSjB2cDdM6oBnuMAVW5HJFVajDRW7NtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AoqeNmiL88HJyvZ2MLbnJjoUSwaphb2m9DY6VcyCPcWPofmNPsib2T5xndCgHnNZPUDmUXar83k6PpTNHNuJuhP",
  "key1": "5beekde9xEDiZZXPidwVrcaCYdf5gM77vPHPGdiEsb7XQwTydokLPumUoyRaa6B2zbUr6sv9K6qftu1asV2bfwiv",
  "key2": "5fbmGDtWmdSM7JZ2imBay9GpyBowiaXFnfWNvEwBSRPN7Q1dvmqGzqaFd16zp4DK1ugHEFKdgRA9e6JMdQxfG2sK",
  "key3": "5Rhie2pNavxjbYvqV5qPozm6x6MEDdYrPwmdnYz4msieJi85iimGyNQzHqn3LhohcfYuVWnLmfbhPdUeHLrJHsQC",
  "key4": "3cCYhH6mVxctbw6WFkCn9EhamozMV63GJ7539QdccqdpVnF89rWYWd32GsDfbNDMqptHjnJSBdqPAc9idsuZHyQh",
  "key5": "3C2GG65kNnxa7mm2y5VtCSNenN6qZrP55Lz7wmrcCpfxrsmN9W1hoacxcmnoV2dPkK1xebL2dgj3EreqFNu5nSgz",
  "key6": "KwwZNUzLzC7zzKZZcdt249PWCUKxCa8UkQGhoxc5qr68BBdXHewLDN6bPcHqXFhprs3q5n8L4NR9ZeHWmi1k1JT",
  "key7": "hYVVMqVp11LN2omRgAZZdTEknRDjf5YJw3PJf3S6xrxrpZv9MB7XaMxoCrKaYnfT8wZ4XVgfq1niKZ5angCiV5U",
  "key8": "5ksdx8PjMxaTsPw8XBTCBM1WT7y8DnbtxgLxFNW2gMnHzV1tM5yTA8ZWcWgxPvzNgkDJRnZirxE78hmSFtB4gPxH",
  "key9": "3sH4FsaYMCnYMLsTpynJnk7q3eS5PofHYkopU3385ekjGbvmMvMRE15NFzkcCgJAyHnEcxV9BeiYpS7qnqtvnNMv",
  "key10": "4TFFJETHcRVsAj8tArUAMAB69j81LZQpNFTUEWbXhD7xMxva8HmtnjGw29kSuw6Y4n22ZTpwPFuhJqn3YrUr68Kg",
  "key11": "28V2r8CwBog6L9okao1XGzRMXiwgo4BDg2VDnhZWJwBL9jJMrP8HevrFfkHnZyCvshnpnc1a1tF5Lgo4YRRjDaQk",
  "key12": "4fHqqZqHAam93YSF9YpjjPwCLztFRH5wHtyAFNNdPicXb9eYehffk8rR8taSHLz9qhaRSrxeKUUpYtDaAaGLLNKe",
  "key13": "4vLhY4yYxXwfPi7SVCuhR2AsHJDNRMAH8GqkHUjYdUg7p7UWKQRX5XkBAM3yKDrvPeX1g1TqUzL9qPFpznPsGVKp",
  "key14": "3r7a5bHVqrPCjBLaDMAF1XyvpU2xikahUpGs5izTeE5MTpsYw3wDRvkkZRU81NVE3eVZSofPKfD1zm88UG9GfiVP",
  "key15": "5gVc5JqBc6x7Wzy3T6crpsaGa1fequ75dckBoETgT1u4LNLPR5KUUVBZkv8q1QzJnmxYQJsPJJebKU6jKwfAwN4P",
  "key16": "28z8E9PmueYJarkAwXVfB6v5KU3MWnfffpxMZAeAk436jGrnYKypBFjEPz1vuL8bnnRqAx1FkPLfDdatPTyBcfwL",
  "key17": "4cagT6sez3MGukqL9387Lr43mECGaHpkyLGwZ6Q66T4nmRxzjWrVtYS1VbcAKvCRoUSL3DL2X1LvVsVzZvnG8vr7",
  "key18": "5NDC5xUR5oACnbQNy5qwNC7NQLrEJ59KW1zJ2dy1eMzyJudzxkjmcJaPByG6qaxBaqNd7RmpL6Lfu9DkQyjxtCi2",
  "key19": "53j9BWseABbGTYpKEUJ6vLmnc2h4eqUvVXbjaBhZ281hftrvXNWVnNqqQqBYzjY9nPQ7EhE8Kv1d7RGwvcuDLghe",
  "key20": "4j5QyMoM3DUuvrVHTKcgGE8crS6cGjGBJFBMZ3ozxysHm136yTWkWWcNNDfaf2cSW5tLu19MbhzDDrHc12pXZy65",
  "key21": "5g8ABajRXZdLWbMLqgZyjSqCJMFbhBQLsn4SjN9vVDHYpxRKtXpf3Pn6DWoDANsGqbuE9DzFqxPyUK4bAmJeN2Nw",
  "key22": "4kyMNnQ3Moxw3LfhtRZ2xCVfCwiAqhFLdmKHy3PgNTJD6X5pkGTVKMtpAsga5JmbcsvfhZiMNUC2jRskUX4WXxgr",
  "key23": "64LzNeUb2LpuHfrpV6sU2Z1xnzZKQAUe92jLqHfVBqzgT1Wu5F8tAwMxm62UNqBeSqWyQ44TQMNt3h9HXC1jCzbA",
  "key24": "ipHZTNMpfiVGt5RWe3TQTitP1FiTZUSexBUfhKrPh3E5MnufkMTxkJTJq23V78QDgae49Lr7oy1hQM1dURrBVLA",
  "key25": "3uLJSefEKag72W37xtzqKvevwVMbHz3QGbiT2ReDFjqWXYV6hdb23opw31SXR47gKpFRQpHvxNCqx4HTHPNrbyUS",
  "key26": "Gbe9TCP2ML9TDSyqf3D1KaFhhjqBMZUkvefyfcFy6ktS1NPBTN5gzmVR5avXwGfroMsngU7x4u17jtJQ9XN8Qgd",
  "key27": "io8gXV66HGfz7u8hWhyMUpiMRNwvJHf28LQa3kSNuXjjyRhnQoKGa2JmatLFLzEgUKepMPLAS47TLSsvKg9rxpy",
  "key28": "wVw7cCmB3eebK7ZHKLoY1e88jEHM3GDJrrXXHbwVyTfMvAr2Nts25RbvBVikX8bEPezQ9EXRoJNM4ZqgQXZDSCG",
  "key29": "rUVYQ1utQyPVj2Thuc95cbZUifsQXXtBQEhb6rs3bVRh5rByA8LioiDZN4uSNpxi9apFHJJPDcqB68YFxaTwLty",
  "key30": "2k9JgRVtcb2chKPZpdH9RwCidvcSKw9QCNLxf35BtNJrNN7ZPvoHPsCeTigdAv1t1gifQ2s5mEBv82V6e2U8NQfV",
  "key31": "5QM4XoCU6sW8WMzduCumHEAM1pDB7FoS4YAdpQZaWfuzCoZ1CndZb3Rbo8Pj9YUVZHAb7NDCeLHYeCqT4WG1mQdK",
  "key32": "5nC4WHbJhDzkZXXFnBxijjZfYy4XjdbyLmRcbCKm6j4GQyUCLGP1Xk7ro5My6t8T3NqaE6r2ErQ245H9tJJ6ASti",
  "key33": "4egUSySDim7GCFjgJQJPtTaVyWZUnfoVy1dDdpe7WkGj7LoPBNhBKTb3vxNszCsGqMnAH443Brh9fr6adJrJrvPY",
  "key34": "QU5PQXreKF5SKg1bEZfAp71iRGKPTZ19kQLDVzPjbfSkQDttC38NATLjraipLbFQymadyW7d1Au4PggEEzmv8Dj",
  "key35": "5BogkAeQ6NY8bsdmNDtzBqCp94bDpYRDY2UpMob9hU3vXpaZmMTaj97wixhader73z8bgCGtdZ5TqUphKEyHAuf",
  "key36": "2F3dRwMFzBJk16bgvkLM2iYwug3EjqJc1rPPkfUJz5ebJ4M9HNLaDRpJKhjdeESpz9NNsRt7XxdWf2qXwhcHTsKZ",
  "key37": "5dfnN5kaLE1JxPFCppnGiHPvryYo6ZSVXsqzRnokTDSdvkYvcHAp36oUsU9j5hdVkyWSvngTJEsXKPrsUEUgnaaM"
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
