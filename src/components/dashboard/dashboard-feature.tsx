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
    "PvwUQtdHgtjKBfEakQ1jy1DYPXM4aqXRpEjkeDp8HaJ2cNHsQP8FTaCi7CVtf8ZApkhjeD8isoWxx68KVsWMsmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ynbCcYb2SjAvaJf3AGhTghmdsEc93eeiZiEM91tetfaNGmvLL3XkAUbszN6u9bquyUCKPEnJC8y63LZkJDcCQMF",
  "key1": "5xnYFZnzT1QFU9TkrbGcDv1yPezxSfgM7aDudVv3abFgbXnLsrwCxuEWytfNV9rYfnYy63CJ1RJHhiHtYH31jGjR",
  "key2": "4dF7kB8NuSv6yPBoBc3yV2VRjckjQ6HTijrCToW3vybF9sz5hEu9Btedu3yAX5jJEJ3MCtZtBvVDKe3YwDJn8NxL",
  "key3": "5S3tGZUCw6S26jzEfD8BSeugUjmdEX82VEcFt6cxYfGQsHKGxuL3YZGMZaRxrSG8Xd36eyBYRBBkWgMCLihJZRAf",
  "key4": "66LLA5hEDtaZUZUUTPsPxtAc5EunDAhNpfp6FYuGSFHaKghsjMXWM5nvpPGZS3mhjgDwhfNSGtq32RZ1TvFewdzL",
  "key5": "5WQmY8YZ9jUgJgfrQMEj1z6MyiUhPohcbduEPafyB1Y4fe3xmAisbzsNMTRhASTLPLwQyEiEUGhXg4XcfizvKpJX",
  "key6": "3rEe9ARpbY37gJctpwbTx2dRf49Yt1yMugfQ2vbtU1zyZRasVjhT4U9BtCsv5K18KfGBzFQeiAZDkLkjCmgqpRwH",
  "key7": "4XxcFeGWuXhS92HY5EvCFq5bQRpdfTSRf4RQcZfrHkqe1JA55PSwH8iUiyCS3HmRGKmDCsYTMCpfCGEU48PF2KXn",
  "key8": "2w5ztk4QnZQGDNsGeinqCFURK1oRDKnqi7TyFthLGA81qvqyjwPBoBS1fitGrQ1o3vznFMUkq7R6u9wRcBmfgfMr",
  "key9": "3eQkizxmMoB8L1mSn9vpy16XwYftZ4zZkEqCSG6KReLPgAsTzQgmoCFaXNQQW8yudzFhAZhYDTX9MtkP8QrfkPrv",
  "key10": "2LkwgYR99RZk7NKSDKs8G2GJq2Y21DCjyBGTxLLiSw6LiQk3kspXEEnTNcUnTv5YLcqaJMYJixYkQo6BRFfEM3dL",
  "key11": "4EgdW45DScfZ4Qt8h7MFCKRzBfNKJRPyyxdSSYbXTcWnPgp2H14fypH6kuud38K5QG1yFGwxiTq94d3mN3cSMFG6",
  "key12": "4fS7Xau4wMmhCSPoyL2smEA2LSjKKZ1fwh6YVEvyBxosKfDcXpe1wkDZzPnyAKuhNHviZDYcDCUecVa3SCYwfsRA",
  "key13": "2Laboy3i3UpAf8xVyvNQJLjUhWjoaWv3esJGQ9QjpVEd65TNurdgKof4QMrRxoNgFRdJEPfNteTqMP2G2AHyYqVf",
  "key14": "4pcJjqTHPpRLkdNnUFNrqAVJhFdWZU2foYvVixZQUCXCG9jk1Y1cdR5RPp2fSuEAy1ow7aASx35qcxQC9PgGE7eu",
  "key15": "5xZf6kn4C7JQodW1jy1D3ByPxPD7hU7pYK9GDXQEwGVMeoKokD93VPyGzaYE8BRn8oYuVz7qNr5UqFQz6i5KuDvG",
  "key16": "TGvJfr9N36bJzCA2M7ULqkJECiCuf2Npzitm1yQdo8L8jioEmvFy7KLsJ6gw3uyjPWppNCNB8yigHg8XdLwTPnJ",
  "key17": "4puZFhRrocaPLXFckzjgyETba3VPUTrxTjrf6WvHecbtCpYcNxcRFEp82NGzfznbm33nPghSqxezpqAASnWqBn6X",
  "key18": "2G4AnY9oE5u6azHJUK3BAfeiUmYrLkayXkTc5kdcU6np2taDWLTxQpjBdoeXLxv4t5Ms4h9yyRcvHpd889KRix6r",
  "key19": "5Pj1P4FkC4eDY4nTz6TN1a8BwpTvA75xUkheFVuCNLChF4dNUEbHnfE8h66hoP6KkSW6X2cmjZ8o58VYQt2P8rcX",
  "key20": "3nG1qccfSvKaNed8BQ349NbFiWMRoAeDbxsYjLnzWnamaAewuAA3zfRUHdWgjLvCXeVfP81YYssn31thQjTBK4YB",
  "key21": "2m3UgiDRBYSMNNz2vVVctsvpMcDRU6qqa6AT4tc3hytHsdA1NeqcvRY4V57kszHwSFGzA9MEbc818RVsKep9HNdD",
  "key22": "2WZtoo3na7x8kE682XnragYPUFbKjtXaKW8SydwHvShcZ6eUzWH9g71GqF44cb6jJkMVgwb8ZdWbx6Qbu8buweBK",
  "key23": "5T9WEz1BfVwqERoEEFzSb8E3WL84oYxYpwqFgWV6q7VPo9eLZG5bPouCmYQzsAesqPZi5qdg6tSJByptfw9ee3Rz",
  "key24": "5xEajc5MNnzsEgjvRX53Zx9PmNV8e24Lu4N2qvH4XoNwzUsAHYzX5MU3s3qf5NnSgzbLZLyT9L9EyhJHvVF6wFgD",
  "key25": "5yxN4pQzjdhpvQptm9BEy3LNusKRXjgfjcPTTNh3kMcNDQDBWc4PoUdXBSkKjFprhKRGbYPNBQMXkV9FMwnYMGnM",
  "key26": "3h8J3dnXirVCf5nDp2JfiQP8XJEYjq3U7QTi6HWAKmJngZiTDP11k6dLbybERYifGqVx7Bo9LGn2qPXFyhmHSoSj",
  "key27": "4a2tgu8oy1FsFQ2VgkzrR7VkCxNLBW8MvY87NDrRxejckHWyBFHwhitJpFxZ1SArZEugnAvXKpTzo9DP4dGbsPk1",
  "key28": "tA13UdRghxvMUVfWbHUDh1Ruuzeg3pjY3UYvEqJANV5BQZPi6V5txgi5beD52h5aD9P2dSo1hAAH6rfVT3U8m8d",
  "key29": "2EwRnzxSVqjvtPq4G7AMZTHT1n4FwucFjeWFurRuo4Wc5gRpe6ouUEZ2KA5PeMXrnDTCVx4kWrtDeuaAxPfB6sjD",
  "key30": "4pwiq5jThffG4BSkKSov4WP7gHnL4QJnSM9i6TeDmxWN96zJWyX8be9y55Mi3KtBGcb1eMKn87aeWcSRJNssjKFn",
  "key31": "5dvSnNDG23iqF1dmcJB36RzMemhavJFw4zq6TYwCdhEtAX5xJcrjomQ7LangsPvGKnjU3F9GPEE2f7jQSTEEoS3i"
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
