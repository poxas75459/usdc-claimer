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
    "3YgxoiEm54FDCc2B8dbdu7c1g4fWe4VWKdM8PW9B1UBDBkjc7r7gqtoLzweifbmSib3ut61AMNbEMA1MCs1M3zfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wadE6jziY8BJ9xDV11R4n6Mhnxr4ThXAMCZvM8ZcGAFe1QggJVqDWcg9SKaeVUvGN11vVaS4DXegfDqgHdc3x3i",
  "key1": "2ncCd51dvFnHThtozVXU8NswTnPsEcUPYGzYzWrswyKGEtFLKQCTg3er4GtQ5khtP6pyAoMyb26fpF1AgfDrN7mC",
  "key2": "437VdY8v8bu4sYm2Ey9RHigxHh7M3FEgDsGZDypZ9hcECEnwUm7vfEqk2ajYwTwQ3WTbtykcm8HvBSAoFcgjynE5",
  "key3": "5oyaQgAiYSTw98Go9uiW4o2TdMudDwU1sQ36Bk6Md7vqj8CjgWGUKyBRRQ4SbtdmTiDktS7DyfTNtqpRZakFbYMu",
  "key4": "2qRe8fgcNNqiQfsKPRJERu1x8s2MWd4a2N7CE8irxatKryccWQBoynGQ1qiHLMLxJRcbaxkkTCVnNcjBc59yyeT9",
  "key5": "46wYTd3UkTcX4ibuHo7reqP3kevPDD8zvearVPYayZY8ApKuev4mECnt2nFHxFnymC37gdR9h4X1W9xWrGpeCcKR",
  "key6": "5C44oZc2bsNoRQm94NQ3VcgtDuHSWkdGjxBgRVRsr4nmnhjCYwojm3wDxBFRYdaMYSkVrrEhZEdMWxtdDY4urvzW",
  "key7": "3sX9vvQ6sC2sVWenxuZmENpREjqsNCjrbyuCHJqkhRWS7sGXJL285Ny6eANyUSCV7vXsPf7561CK6GdqPzZ1peYN",
  "key8": "2bS7P2FiVxNgAhY76hdiFYYWSzW4SydB7QyEmx4t4AqBXTBgpYK2c3LKxxx4717nJSdndkygE7Rog5r7rA23FYrY",
  "key9": "gtTg2bWn1663z6Q1o5upK34cMHHHqaRzLbAo2D2dGbPH9KngWPz6t6quWKiS2wuNQDdTmQwG1iSQbRDCGHhxw9K",
  "key10": "47Z7PeZsMjRYWYvW7CkcE9i8aCWJTa11pktHyqSoBUCUtjuvfWXwhM3qc6eyvBZfp9Ljwvx5Yn2rFyM3gjiLPTB6",
  "key11": "3PszLSeB3smdGawpibho4Wdpw4aQxpDp1MKjvndbSDTkUjjNj6cdmVda9v2GBEWtDXHU88kNWiKu6R45A8kiYgqH",
  "key12": "3XGWSv9wSNeSiZ6npYo5i8YVMa3HfpRPMMsAq3f48SpDdqzW3aX5Ha9CpZckd6FcBwk89T2to3hYNkSzC6QXUMt2",
  "key13": "31nk17uL97aCP3h9vqeHjuWcuqWhWeSEsSG5Rsbt7gLF5mK2rNs9onteo3pGfgRvztz6ny8HBJpmpHJVVvDB3hSm",
  "key14": "22jdgZzqC3ZAEzXhKP4Xcv2z4jHDvSMofXzWC6VUbsLWXiPRkyToY6H6Tga5HMbW7PVutYtobzisrQzuzYsTM8Bh",
  "key15": "4mRyLGq567Yj3WT7t9PQwgoTMhVkLtqonvpDAXZYotJXoZPGs6e7vEeczouE7cpbKRKgkTMoBchTrFjYMjiQhbYo",
  "key16": "ZchYKZ6XT3bYuoF7N6MiYxaXVzn1veZuMmU4iF8ZdFScBFkJpHid2WMTk5aSAc2AGbVpkB6edsxFeQTRE54wvHk",
  "key17": "4qu7uehjNh9rC1YW46CqJ6AxRnuD2fnLH7yGmiSTuMtgzCaJoeBykEchZ66zfDTDAqrRNmzDR5dZM96rNP8BYVeg",
  "key18": "2EaUZ3tjTJigMho73gtVUYfo26sKmURxGQByeFA2y5MWJAnbWo44S9vt9nZVDTGWXQsNMcG18tYMyRixwfofMBpS",
  "key19": "5zCphDF6h2XVEpfMJtaiaHnCY2THU1VPj4vdP42EcKC1W5Cy6sVnrQhAKThDmegmztdFzdpQ3ZTV9CCcuoQVo7pe",
  "key20": "52qjzNhFmk6kS6QrULEpZKq8GyWvweESH9qqhDwoq9epx5XEwUubK1KBhAHTQrQuKny4KJyjDrYtwWpPXgNd9eWG",
  "key21": "9eq3aRHYMu82gW6bTdmuK7RLxC3GejNRf5j8x6W9uQyB851h6rBRD4gUJ2nanTkCkYqCRsK4ztWTBk9aHoKZQma",
  "key22": "5ejRsTMocSGse6RnGHF7dPCurX32fqva6R9uFKKHtC5vx3zyzs9jLhqDBf4e5fwonddpo8LwABjDjybgy6eroYM",
  "key23": "3jiREdTTtAYkF516qoH4CH9x4aJfSa3TzQNg7MepdyJfTxLXNx3Fmx9WhR4CyAdFgEYq11gw6DNt95hijvoQtM1W",
  "key24": "VLV6dBg6zBryhwRMD4rvLtXsqXkwFzcsqfkWRLn4J5r3rHbnsWqe18LmfqgKvtLBQWSW9fbSc46VZREdDpupW5c",
  "key25": "3phbRRc3MgtQcJtE69H4J8a3tV72mjSNw3zrB1Sinf4GwoPnB7UHT5ji7urjBCjEPBSDCQ1GsJzyJ9QiLw71BPwK",
  "key26": "4unui78CoWXrhJ8UukbUeoGp3s2k6JCoUe4WsCbFWHsT2X5d26rCT64G98Dx5TVY7XNNCxW9s6X2R7VM7dRp96GP",
  "key27": "55YwmQUkx1uKiE2nJwyxtSebf7FE2kRPS5vb5NY6xAXP2dCtH5KT1rAs11DXPapFEjqQuSBcuNQM4dDoxQnApCaz",
  "key28": "3oigssVYUB7zTwDPNyrba1bRZNqUyzBHQtNoue5jFG6pxJEKT6BUS8qRgvGXxY5dH7paXH7gxVF3qfwnX8ica5BT",
  "key29": "4Yr9c8Fk6wTP9cqM9SpwdV85tPmgYsVEjTYoYmnRFvrksjD9RDJzwToAVp9sQRmQUaQBuu6oCjVXpkygQVctCSJo",
  "key30": "2a5c9MfawyMPwUKweNPoXd1f66sggLqavYTwo2Y8wrSdods47ufcFeybFzEv9iLFLJh6D5TCF7tyHcCEdhV6XvuX",
  "key31": "5kqA47jRsYb5dHJ9NytDLnqihNCoki7RfA1fd7qgXrJT8DXV3B4xDAMWQQn6KRHuXLfYWjiqgWwBP8tXAbpTXeBn",
  "key32": "3cJs7uYxXLvgwZ5xWMKXN97VGYFapBZ4BCPew9UctRz2UGAsFhCJQ9hcSiR1nX1ZFkzW2hmDErLbKbfmcGmihEzk",
  "key33": "35hHRrhH1Gw6AAYzzf4CSV1rQE3xKx71o8iyjB2mf42qh3g8LGJRidtmEx4PuE1nLntJnXFuEYyxwsMpvW1RbNdL",
  "key34": "2uSyEbaRLgVx8L4tUyerDvRcxYUTHtpQTgV5VuUmvcLHPHEzgHcUDBomLzeaKNJ9C9xwwMHdWdHwxxFYRxerPjoS",
  "key35": "2s5mr3HaCBQbZMZcSZ6ups2we1J5775FrJpBXe3noVyVtFrv4yBKDbhWJgGECyGzwy7JWS5qzGHdWsHBx1FDnkcN",
  "key36": "4EL9JFqWHb33D8BPAzcS1DUZWY6qzasWeiDkieL7n9b7287EG5FYBMxR3jovDvVKbbcoHg3MGjoYwvFMWoAgQV8g",
  "key37": "5z3KvynpRiYSudTwFfyWxXy6j1ftVBih4iLTwqZZHVvydRFppVZkRtqo3dYpNNXU6Rrj9YNkrvohT6UBMqmhGNqk"
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
