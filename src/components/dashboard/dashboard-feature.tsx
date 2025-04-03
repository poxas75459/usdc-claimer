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
    "4yiXkLy4NzX8oAPXbeWLssGYGUxUuXutpnjdVYmoGnt2iqmG7CAqh7apuyqT3SUQQpZejhLraX5XjJcewaVAV5MH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aZ66vwSiKXq3Ghe5kP6gVYsBF84BgkMqK9375jKrapAY6s5WQ94SRmYMRhTaJ3KSRNVBvLtbtgww6U8ebeLWCRu",
  "key1": "48tw5EC8Ad2qwkVpxEqQbghCsedYz8KewkzyFmL36iw9dDHjavrksMAYVQNJusAPtwPLhAaxFqPnYRK7Rf3BqSaZ",
  "key2": "1z4PxcFAYHLMAjbhjHcJdBMzqymccHHgmGe5grRRR4zUwnNPzmqUWYpEcxao4wNiU4b4ktSg6qjGHDHK6An1gVK",
  "key3": "42aYYjHL5yqgSzkv6hMfwafv5geiYJuWkg4RFshpgDJhTLsok6FkabeUMNfFA98o1tugeHumfKtSyg9H772ss6BD",
  "key4": "fnDWLrudpmf4kCvYVMJNB57rJPfbbmHU4pq5VxvXQ1os4GtbFH7npD5HHSdEicwuNHfzLwxzNoGKLRUCmkHffsH",
  "key5": "647mkNCsr8r9ktb2pqWEGAerEdmGnyCpLFTGz5ivaUbhPJQYQKxLX82kqrSQMvgJiydgwrNEQRyDhLt6uLxunEcT",
  "key6": "2NJ2ce2NEmB2YTbCPmEjAfZqK7hCfcYGDvmNRRptjdjdFHQUB267AL27sftr1ruYWygS6SPk395xuBwi29kbagwV",
  "key7": "e6YJbwgreGn7XA76uHjTXM2hFmZhFZVxCyNY5NvGcYADA6dMSry2Y9C1p7YTgKuER9edpgHf3Xv6VwAKjdAVTEt",
  "key8": "mUsgcKdF9tV9vNdqX3m9ha9GVvc7FXtMyb3ag7d1AYrtb7YzfMUZgDJJvxJhvavMpMVfjnVohNRFsKqxCXMTc2q",
  "key9": "23ggJk5K5Gx1PbD1XNDZTojNyXzR838esUkU8dBTYcaxGDpu2qoq7ZCFPurm8HUdkDvzaeA2zqV1idun6cXe1okJ",
  "key10": "5Axgd6Hi98uLDab2hNgWLqX3neEwoCG155dW3nLQNcRmspGtLsv5cZMwPqUUrxpPnvQJc99aL8QLvZ36GStvK8xX",
  "key11": "2cAwd8NYTWBwQ6m37RQ2fnDUu97tYmH7ZGsqZ9nrp1HE3o3cRRiysh7x8Vx91GnaYNFjawLBNLWuwoaquJDYEAFX",
  "key12": "kRak4czuPmAspCLaUsUQoSctqCYkuh5n9Yxg7RnPFnmRwxSNroupQZE1sTtijrpNQQjey2aRYUShLYVbUsz9SNh",
  "key13": "211P9c1TcQJEnZ31HwxVjT839usaK5LNjZMd91e1R2UgCsawjHnkTCGH3BswQqai33UZf8nb8t29HgX3BW8njSDF",
  "key14": "4Zbv8Zkh4KqBMQ7urh9qPxw8kEzwAiwRc8P9Tx4shBCWf7EmfGJosTeMg2LiAaDLMEAuFaP8R2JK4YCkBW3b5RMA",
  "key15": "3v6pwWd4SNTtSAFcowGFniMUHj58QQMGUJFs4wcTKmrePYVB1PEZCGqBqjD3J2uY4ynEaVYt78x6rLvbydkVQeER",
  "key16": "5A7zjp5amtaDNCUAbkS5SmctB4GYeCZ3Nzio5PQ68hVwS4av5W5qyogHvWLxAHaH9spp6AiPQAoCc9Sczrd5Qn8e",
  "key17": "nGqaABzb66FTDNWsL21SwBCWH6yLVo5z8XzVSkVsZfCAySbVpoBqeQs4spwzwTVcWfYa2ui8mYXz4pmFxsufErA",
  "key18": "3T89dAhLUBiq3y7NDUZzgvz5rABYoQ4QbfjL47KhDMbAZswLKzHXzWbzq3FZQC379w8575RnrrrEN9BYTTsr8HWf",
  "key19": "4tWJvrJV3yPUZAALdXheEmSUXpGJKVqMdpDe3gbnUn7SKyoHd3Wdz4PVdDHLgpZh8u37qS9dNBvwT48pqJC3xhCm",
  "key20": "5Hj88XJxgdjTrZMAEftPjsypTnRCdn2BaEHhKLFJFovxut1mDmsn9NTTsqYoKvM2BtUdAycfuVgn5MzufwFVaMPV",
  "key21": "f3Ug3JkA33xdVccnrcEbahh9rVwRNxFCtWVLPgYoHqEq9riypZSFYWvZZDJAwkHFqfLj51mvYNaovdD45FiJXrC",
  "key22": "3D37w8sHBwWaDVqJAZc1afCG2SuTKdvnL9G9641jzQmXYQQPgdh4ghz7XaWbtJFPfJfdeCdA5TfVgBH5nJkuSqUD",
  "key23": "3qMpHbeVyTEqbFL8hTnn4HCd64GBci2k8cVi4esDMDnXgbK28WRRLLAmu8HLSPfMJgPEUjYiBc6FeP4b8yozGDD5",
  "key24": "7XgY7GKSoHh4Y4MCAkkoGtgXyY8SyRNviAqLBvZPvW9m9bPrYZMtwhxH54m4M6HaUHqc3MWpGkMSq6wi5xuYtjC",
  "key25": "37DHTrUMoNrMzsFbb5jzYpbBYHmDHDKuFjAgM4cTppQigeXP5WamTJA4tN5bQ3ZHAhogzRcnTiAu2QNz3iPSrhWU",
  "key26": "5ETKEq91QCP8XsFmzqhLNNad2ho3P4QyQGxSSQvR2CtzMsr8YN9CQ66JYskn376uyoapaUoFGu4tsQyHsZnDMWAD",
  "key27": "53UXxdDSMjD1wzR8hVQKU7wWGYzABo269fQPL8oCeigDUZakMqm73KawswKJEMRxjAZT3xvmCS7WoAgjAsRAUsZV",
  "key28": "36ACcJKWyeaAs2bRKCuMvo16bZomeiTxhgphpnPWEh5iXeBzpudovqSPYUEDcyeP4EydGtvVNGM9ipoPeZTMhbA1",
  "key29": "3xz94g1nXDVsiXVx28gmoxkuy864SeJ6ak6C6KrYQZ8rBUGpaGp34VEj7Sw9c1nr64qMR1aex9fB6V4UstEWoCLt",
  "key30": "41bbW3JYmoPouJHBccSBTNrsPo6RwFnMEd1sQaCyf1UXw221NbBArn9Bxbw4eKZJTXQuwsmC5JBs3fHvboZysxpb",
  "key31": "2ycyH4HQAcqvuoKQRWWnv18WGkrmk871Rpk2avaYQrA6rBGU3KnT4jiduwJ7wFCLtpJEPaTW2AX1UV1Q54DPLHVk",
  "key32": "2d7DN9nn2QfZurMTVQ8ntGs1zp6GCXoLvZxHtooNAhcyiNpAB2yQSq6g55ZgAguQWMMWb8rKxHF7qnYrfL5EjfuB",
  "key33": "5c9EkpapLw7RaMsRUBoQji3faNPGFxiKW59MReatvP4GpbfXfYLvK1Ms7dK8RAAqj1XXGCHWkHiNnSv3zUAeiHb6",
  "key34": "333CeGtALxcWnzWKsoyH9RPG5V6hVbpbWUHzZfs5seL9kEzw2Ty7KZ5aS2KLbk31SnwbvUP8vbU6vYQbepYzVa5w"
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
