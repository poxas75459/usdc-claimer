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
    "5ZYWDgfPQM8kv2yXja5r8SCRWtgy1AAvzRErqH5m5Qc6Qz7p3a1V8rstwvCrMbbfK9Fjy6URt6iLxt54mLikg6Np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cmLRjoLbFofnu56Dc3pvtez8kaXmaQnGz8YgghFNbaoTt8N8W1xEvfaqGYTrPSLnW7Dgyxxny441GjTAPYPKsDP",
  "key1": "4AFMZ4pEMLSyWJoYjFFjP91Qdnbv7FeQCqmKFyFP95axAr9wvt6vzUicPcXwmTSgvxxkwPMrjKqkvcWiSDjwjZ7X",
  "key2": "3XMaRYn593mY6LyDXhxo5oyYijWxvGaEzKfGDr5wsWkXLorc9uNHS26gpZ24AZE58ySi4jrMLuib9Peh3DnGJKgM",
  "key3": "59R9EXfTTtSvNJeg9PeEJpippCLExP4Qc58QARyt5oFyX17P962v2qYrnCMbwaeRLqwPi5oUxn16Dvkv62diTBsr",
  "key4": "35eWNqPz1CBKVeY6VjmbgkDjCfapEAYSPsDZj1hSc4sye2PqY9zxnRhziWWr96ewHbkKSmgkJasKPJewmxXyoabG",
  "key5": "4mAQNXv7TgDYt7prSkpan1oAkyjxVCaHohxLerhMMd87q5Dshp6DBCFRPB4rc4jUYR3xDNDKk4zZo4qAzze9eTKu",
  "key6": "tizL3Z7KwpFc6XfRzqZbLM4qRBM49q2SB1mTVKLiGjgq6banjUAUdPEvjWqdTUQkzQBJchVPDSS7RAeRjANb4gP",
  "key7": "3Q8qao4SvUUHnAgeeeRuUwbwh7ifxBk7ECpjYRWbDfEiz8kXmgoexf3ufNryhXG4fWr9XcWmdKNL4aBJZhMzQz6c",
  "key8": "2UG1qc1eL5bPHGcJn4TY1B6wDfJo6S9W7wa9kExhyFz2b6varPmY8UNb4a4L8q1VS7tFiS7eGhpy6khpfiFnhFCr",
  "key9": "39Y3TitTcK1pJWFRZzXxUSFBMaW9QR3YaDtgo5AgUCWkZTkBqTAVvSDTvbqj1DoMq7DEbgbfDBgKEpBFDF6GSdx9",
  "key10": "4Fmz3ho29uGGR2oeTMr7pn5DjSs54uJVhEmwTjLPMvj9vdK7Eukqn2BA5iQvxmsxWtEFtDJgYuWthsb7phW2x2Pv",
  "key11": "5nU7oLnVpJs5cNgAmsw8fuUq6p1ZHnCWHpFNLwkrTkCotMeBvRiLW4EZcXWRbEk1ntCgzfewvvexpKBEsYQBUfzb",
  "key12": "5JJnasS5HHZQxnj3WyhZL57R9wBrnSYPYTHqPY1y6Ph8kHi6uqYVCNx5aYLUEcURL6qNigdaZ4gQyZSQybobnE7D",
  "key13": "4VJQcmZzY2QteXrGaVdBES62c3Fa6eP6AcH2xfL1f547LHF3rqKJvJqwv372xTxvQEQ8etQGdSaFGf7VrC2SdGkL",
  "key14": "31ndRN5NAeQEvzYQ9SEpkntPrsskpUKt9RorTaEYNYbZeQqcB1fhgLm1QRDUzvm6R7fDqdini78iY6QZX9uKmAuP",
  "key15": "3raDu3FDzn7wbGgnVJBf9TJW2cgYJmKmCXH2ChBJXVRwEgxgwLqHZ2mqmUjmRYpE46PgDdZ24Phgac7uvagAF6Gv",
  "key16": "5SkiWjBNyF7fQrTHR9mAKSts3pUDr7Ag8LuY4kLFnyMPUWHo9G3dULC3Wat4B4ZWkwLiYjk9Svu83QkcBUDLot8D",
  "key17": "oHNmT1XVxd3JwnwadJgiEsVRXigk7psF2wQSvBYGZ8CWdiZzYk6mjiQRdMektX82YTJZb1qc4JLv8m361Gd9QoA",
  "key18": "5dsFhhu78XktHVTx3oKeU3WY5qbmzBc29xEvEDfv5gVuAopUSKgDZwBMy6d7V9N6kqJPDzwsVn3xsr3gDcYCYNDX",
  "key19": "2ecHHELX36LRtE4yMdwQSiw3b4JRj9rZ6zNjMCZpoEMqBqEXPQyzir65qc2FsxQ7mozTu6c37VvYi5r262dVP6yF",
  "key20": "o1S7ce2P2tvhSNBvCJXsYAY7qpqPighaUG2FXkPkftctXXcLdQQnbyqNxYrFPdgNmUa2thXNKT6bYiB4zYxCxdM",
  "key21": "vhcu3Yy2SN16nr45oXGN9LfHUDP3Nasd37aN2rzKvezFwPXYekDdbRgAcQ4Me7iff7ZTqio1FjwuSCLhmLgvitT",
  "key22": "21aNAnmCVPdiDjK95DtLDK8iyC5UqUmt9VJKCoGQCWV3b5N4HXSdW8S49K9vuDno4tqH1bKTs5pxPboJV97xARy9",
  "key23": "5TNag9eMkWckt1PFqxBtWEotPzB1SPv1SVW7CTkGCw41gtLB7pKksqrafshm6kGNESnvfyGiEHXVYtbF3HMhdnEd",
  "key24": "5b2qK7kv8LdKMM3wA1Wnd8rzAbqXNW2cabrRFdoD5Fcd5NFr9it78P8W1eNxviaut3TBhh4qJHUmkGMBt9bzYMf7",
  "key25": "2CKMgG6pP7SpQsHsimYaoar5LXpfFLDopsCj8KCB5X9wp3XpKhcDnfDeGK83YvRkYXe4bAawWGSZZbKM5pdKkCba"
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
