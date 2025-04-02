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
    "2v5dudc2xK77frHVL24cTQagAvuPwyLXqNhk92MQkR73gX2sGKdvzQuQ54Q1EaxDt9PUTbiuqzBW2MAx9HiY6x4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b19C6qcWyQLziy15642Le7aDpMoPz35GRj9NotPtqvvY2mEjc4ojpkkvDksn3NnrEanbNxhze7gkanc8CjNHDJV",
  "key1": "2vtuPwdeS9rhdhk1wovyvWQqgURN8GjkS1CcUXPpVGGiyDbwcsiEThvfKnLztJpVRgFE3SUYMty7mchp8guUMbuY",
  "key2": "41ixg66xvDa5vPXdFyyLN5nZ9M7cRixUrAJc71nqA5p7dguX9uc1ir6nRdWfYhNhsGchu8EMaSqjUECBcaP4MVYD",
  "key3": "2DhHjg8d8r76fE8tMwDhdXi1rm9kHhm5bPobWtCWxyVqtjFoopxqKy4BtA1YWmsvBLG1xwXYVKfjyLbiFQzvTfFu",
  "key4": "2Mp6UFDB7GQC67kQUzeB3oWKvHSdPxEzC1NJNNcP6Prt33AiHkymimrdDvuEnCGAfJe5FvT5tJHZkTxHmzZKJfwb",
  "key5": "33pAx7x3rLDgdRbE3ATgQAeC4NLqRcyEnQ4vckMNXRLPhsvDtv8EHRNh8X4w8dFSVciy2Z2ibBaCLsSehQk8PHwV",
  "key6": "2gHHoiSbqQVxuCqM95dFp6eoxRcyV6uWt73BwGAS77ZxhUE1rKQMXLD8gVZt5sM8QquVSa1fwpnzK2KiTGX7ayu9",
  "key7": "5yWcg3u3VVemPeiRVyYi1Aidr6bkcz51XeoX1PQZgAym58NUuCNX5YKeE7xC8Hzex9RVctug7YfNNbgtiHcLiNGv",
  "key8": "1UH8bV2Nic18mzgg4SXzhhJBCNaSqyro219knom3K8fJfBd6qxJV1RHLcvcX131GGqzQ4NHX5jmEeEXgoVNRiNc",
  "key9": "3oZzTTWkXmhmzXVXYWoPuKZpET98TkdCjgSz6GCvvvd1v5A5tNVVs6CsfCXTkegefdBJYhjVzot753ztxLDYQdUp",
  "key10": "4XaucQbRCn8P9xGdHbo9GRF8im6tLUYhSDUhKVwuZ9tAoxAJWTznLihMQMwYS5QzExhQGiaUituRBWehbYNwXFys",
  "key11": "2soYjvJ5WFj7joLeg3QZCmD6AdapsYoExiUevZgLQnBdynn24goq5jD5aCdn5z1eNL4AT6QCFYjmckaEC2MvtatM",
  "key12": "4Ubjcyr9hDxBTwksYmPcWLg4ALE1vaPPwgL3FSfmseaHrsE1J4Bbjo6kKS1fKi5xEDND5spiSCkw9bqcbdfdU57U",
  "key13": "3WHvZqXjrsFEWqwJLAoGiBxoUJZpzeWfBUx1h7Z3YBQCJGjJXDftmKj1at5f9zpyhLr9Zj3yJL4UihsrCweLz899",
  "key14": "3xVVJmNsayQ4ZUAHjMPK4BJiEUVh8scejsBmA2k7raLWPTSE3vcghnhEmkZadjhFmSxhm87G4XPNjz9kFAwDfowE",
  "key15": "4uT2zqs4qwNR2xmJenRxPkEVjN6U2LPPiJwsxeHYw3h6gryBM6CrApyHm2jHJXogmZDYDDpCwRJZyJ2cg4zE4PqR",
  "key16": "3tArzC4RsNaTZJeZ2qmPsWhbRyCC7HkKpww8Ki1GAKSnqDQVhrqDWaTnFrSH9ZuoaQhoPDkVNNBHZHBv9jQqNjRZ",
  "key17": "BCPBkZgzdehBEPjvQzxFKiG4DvNUp5HvxtrGcQyM2BGgbPX4q6BYViZZcZYdawngqtwjwSpgDYnC94UN9KWYonu",
  "key18": "wmev6x3Rg5SLz8rykF4fWNvawawEVhNvVbqY3vSKSczaNT9Jj6sKfENFNSy8NWErce5HnBih1U3hhkT37ocWvRX",
  "key19": "55Sw7qnvwAhrw6SrJZhMBuLPQqkL4sEnqkNDpQoTGuMdsAUFvevzhtWZnxkJdCM3PNhgss7Eq26tDXcbKbBwQz5z",
  "key20": "LDkARPRzNnFfq8Bcajat5KQd5NysqHmf8kzC3iLMx2qUQd25D6Zzmxtaazu5k9kg4NAtMmLA2bdKn88M65M71fx",
  "key21": "27hw8n9bMhH7YiATGZ1fPAMnKS9d7gAFpr2W1kMjgY2ewZNc2BxkC7kK8dHWoz9a1gms1xJYbWWyksM7cr5cv1S1",
  "key22": "Yp5Tfu9ta2QnRLHeN8AmEM4zDfHKHFGHRLQPFJxJ8xzHYzo7xhUdh5ws8QBTqY5QXaaMtxKffSUjT5MtatViC3V",
  "key23": "2YroGPcmS66e1Dkoja31ppwedEGvV5GkK9vnewu2s67PQSDqJcBr9wLwvei3ChtMtmTUFdwML7ekPx5UZpYs5aKK",
  "key24": "5CTNPzyZdMNe9zzRhYEF2FDgFzi5axpJPjvptV8t9QtzCKZKngoeA8EDLXrm8o5YJb7BbjgBFePNqJxXmhvWRL6B",
  "key25": "3jGqeKDu8YRPTiUxh6TiVPtgG1kwLN5gSbUL3bEcDF1uDfRZDuv7qH513DPGTgchkrWrFLdBRmhaTW3KGGZLg1Ev",
  "key26": "wzeMUMmyYhnqrvCTWEqYHUeb8e4f7MMeoFdou1WEfpk2kbHVWJwtwrB5d16YHF7AYr1SYCY8yEhcPyArwrVYWLq",
  "key27": "Q2G8tK8pxR4Tq3FQVrxyvHPff9bgvB5pfaVxzm83UNir3rziNnxsQxYvpnudujQHUGTrAzL8nqMxPQXK7KfyBwB",
  "key28": "55nozToiopBUXWX1iWq9iyFnsMJjjv46xCniFmJx57sfJxP9GmELoRh2M2wDuM8xA4YmrT8VGhVLG9tQh1VoRJ8w",
  "key29": "2nrGfzc5p88pviNFXKUuMNsS5axFFyGoVQbNN2RLJaus5ujXfs6VezdwZsM7NoEnu84hTnUgGzGnmdxs29Lx3Ka8",
  "key30": "3JMaBsmsg4HTUAd1N53xbWN8oBhxmaorV6KDH4VanKLjiiPuZU45Fyr5TYXUfmGsoVNvrwp8Medr8PbfmS7Gdj5x",
  "key31": "S2tSdyxrfbHff39YPTox3XWMbMEePwcbquVmM2Z8kPVnwUFQStz7As4TEEs9KH8FWCtqtVniLxorST4fNWkSbsm",
  "key32": "2vbNDjhhfkY7tWJRYK6CTZ7nZ7n5yPFAW9iKuzXRoSxGYCZpK1SE3CEndBUmL8uF6nTBVSxNdhvc1HWS9ASo3zzE",
  "key33": "5YLqTxLgKakAgED6WNkcETNwbVtxqTRJghddrRnu2zv1zF4dtcWEXejBJSGrYqfMW8Qve5pXny8q8VnmE66FoQCr",
  "key34": "58XjFUPVCqtHBo6EKokDmimpQePCo9CPHFYXfWpTUzcJnsvXDQYZ5G1mojxd3dkj8ch9P12UH5y92SH69Md62RPa",
  "key35": "44gM9HArfEaoMUK4cE3UmMYkGAAVJQHgDEANK9pff3j6AkFPr84s4avrSH9dRp3spRsDSoTKW75MNSQUE2inG4B7",
  "key36": "4bPswcvgUNYBMpcDHQAYs61mAZBkyvNJAauZtZp1sNHuaSihoysLG8sfch3F1wNqf8RsDqtEMQw5DL5hpr1KLhio"
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
