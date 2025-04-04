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
    "gY49N4aYhBzGcHMFwRQYBJS8j91ffhtX7rgJ9PxoYqtYnu1nDJMb2b2zmoiHyjiFTjKWYAqawS3svX5vg1JSREU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oEjJwHrWJ3bWoe9tWCEeLPNxFmT23GmbZu8UQo9K2AxzrxqkixMyzfu2E51AYiZEJdG6KnwwNyFcZgkVBRZ7Dwf",
  "key1": "3hEkVaCPnLTuWEuBnmsALecx6e9p5ZyirKxcRbpDdsSM5iJRSGbboWH4wNApPsaJnJYZEmQWYCSvg9SXsvicXAFd",
  "key2": "4BZBfCKJmcmyhHozTor5tFZXVqRPpHVSUoVDojbFp7UTbo4tGthwRfiNm3HYzHchGHW77DEdSYR9VuSRNkFjH2JS",
  "key3": "3L342xxMDpw5Pxr2XHd4BjZiHqTuqJLSf6T4vhWCim6eZQvdzZ3wovKGCdgiQ9shTMp83sEhZx5b6eYYk4TfEtJu",
  "key4": "5pxG9Za7x2eS1X2EAgWxR8MMzA4AqcorZscLpzoHsAn3RmfLZxWf6r3pznoz36cBKx8iYLCobLRL8pwQ4E17B2tK",
  "key5": "2aPF3ZPBLwUfVTATTTb7RrXVLpwHcqdyMxbVwMzeyPSymcFkrsoDzS5QoXe6R32vbdCaR2fLLJ7XqjNFcjYb1bz7",
  "key6": "2riGmRLCnJi2U2GgsTzDMwt1JAN4rfCZcBqYarTyNERGvdW1yW74SsXHAEss1rMaxMsk9xj3eajz5ddnYnp2SnEN",
  "key7": "3jZx3eARHyqZXTjwoMZU92pX1JYdyXt5i9PAP6PVFyY1QpJn7VVYVMX6zt5EkTNw1cRTzsxSBuKccmbUuf14ZJMQ",
  "key8": "rE9zB4TBip1seKqkbibkPehAqVBymUgfEZpwDnyi5S2yGQm1SwTZN7NWiEPi29NexgmAWmPj31qAgq1VTxeZDxD",
  "key9": "2PUT8qMQU52Te7i4xoikzb6METrtTfYPpPGjJieToAUNPUSwVvQ8tf1vatfmLEdN3aW8qzv4vHwTTWED5qXM7TpM",
  "key10": "2Epf7bQ8FoFttwCyDg1sd7z4mpggSwh65mts23QTLMS8sDb6oU8sABoe4qJY78wwV5hb3yQwVtxEEQVGnRVCivGS",
  "key11": "57yVnzuqz4jNqsFLVxLAcodHLpmXYTN2HhXL6iA83cLUhTpv8TiNF3Sg7mL6xExoLs4nEhySs3Uadz5DzPC6vikJ",
  "key12": "2chQTTG1h3aN1yGZGEDpsuvvE6fivhUUAsJCHd23xZ7XvWQbCbt7C7FizBzL5okMETSr5eAtRe3Nbgg9Zjdg4DVs",
  "key13": "2zUqeKPXk5K3ffeDaqmv8UwP5fiab1rjQHTJLdCvcKpaiAkjg5HjbTRYYs6nFRfXTfgKnZMWszYDJXDWuSs6D4F5",
  "key14": "WJpiL85Qj3owdwhimAM8Trb38RgHztwQCae8wZL8fE1usxkf51k5AfX7yjybW3JUpUzgqQKxXQd71YEx9JAzYfT",
  "key15": "53vVGLfyEMcYfk9Py25CAYtUeQgxqCcsuQXP6kwEPnyzWedenxqACSH5Q9jv4tjoQ1eM9bmQey7qpC4MEswLNdbJ",
  "key16": "2EbTu9gDvf651Z1dDLmtFmJPyB6sKw2dZzBaKfdziTRRvSf1SMA11ChfBNJkK6NikXH6kiHA4zPWofyvfcUxTmvA",
  "key17": "5e5GaJAisT2ALEticdFtRXrasMfMqpGye8hLPmhDWbZCatC4PN6marMbRnjffGFcgSfCb4qRzN4CFodf1ziye2FJ",
  "key18": "4C3j7jLQvHXJjmvW5EVY6tQK9A7Rf4AE6BMxmtsDUiUuLdhHARQ8PRsW3M2EwNmXv4pHUFCW8HEB45tmtxy5nwgi",
  "key19": "hbaWjBwufx89inmWqcpGncFt5yXDzroBqpespDHJCofnTMZJXQemX9uQ1LA25zG68CrUzPnbyf7ECiRAAxqGPXS",
  "key20": "zz4HBcRD2pGX3wujUQFhmLHVaiA3qCPq2wSnpi4KTL636tVGkstT9YeUtpADmGRCs7f85tCaqzJMjeFYu8SwFh6",
  "key21": "27hS7tUoeffjZcyt6YYouk7xMSeTLmdU77aZmnJV2jXPBm25i9bWnm7MF26xmP2bGpvySbhy873bFSxwb8fwmaHf",
  "key22": "3mFG8nzrujCBEAtQU1ny3R6ZUP9dsSGmDHYEzvKFUFmX3mzUi2gVhriHsBAchrCzvF8GFGM3UHLLKoPRJccauAyT",
  "key23": "4hbVdhbfH99eu5TsLfigLsR7mgevvfU4HHiNcU8TaGZv2csm11ueL24JYGU5ogJNTGukTuKWj5VoNa9S87fWJtV1",
  "key24": "4iJ4QxkTDFvjMY37Cfw7Ge9d298TazyXodF5Jw33MdZweAzrEyxMU5z8uhCq9zDf2rSangF9oeGexZ2CDNvG5L4V",
  "key25": "41NBmiMNKUqaKUZqwCABXSoQMyCH3PxyvN5pb48DYG25xZbafL847ahdfVzWjdrwjTn3GpHKD6KfDYeGuiWWwLhN",
  "key26": "GKkpH5NDo65Mm3wnGjtv87XJ27fGJRCkRvbBfr2o7L2Z5pQDVirhp7pyz6qeKaypT62HDLdzs9rDB2vFxsGwzYS",
  "key27": "5M2UhAaTNmytKU9Kt8G82kRgDVjZhPUzv1u6yosGdrmzaP1YSLar23PyjHANtAsEiaWQ6fWhFejqbXnERY1TsDXw"
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
