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
    "2mGqskA8opDJWMLSbSXr48w6vmJyDrJe1EAyU73x1FMt3RtA1zZKFujhwdKdegYjAVvuKXf66Hzt398xNDP83Ri2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T9VyrqyT3JEo8JcTYMhYsVx3X1WhTZUH5rYNLAXzgf3K3YzBaUUqNAkbiXCetQ3YpR9ACRu5zhMpARLq8ZXVmv6",
  "key1": "44JMuUQJ3Hm2PuwmG3Qqz6tXkk8jDzPDwrUUjcYbfzRhBo3wxyG7tQak7cfSr29sB3Dy61mAwN1T6Jaf6CUnW4wK",
  "key2": "29evFxw3Wka7nSSPLUsnKPvzeFjJtUkvJdwP52vkPpPe3Bjj928uUqMwsMBX6ybDNLgCHJjBGrWEops6SEkxtCWS",
  "key3": "CHaMdFwPB1HCLNs11KrtjPME7wK7piDJQU2cwExZhDojykNfq8ZGSEcoE6UzP3LSwXwTT7PRmAr7TBj74qPWw1D",
  "key4": "5TbDNRAChARS9dCYzoAS3TuHfWZEmG6o7tWn4CfGHKKqL7YnAryRJRe4vUzmeTWx5riMdXv9CXre9x1mgCL77egz",
  "key5": "26YubBeSd67TwXWjRhNohGZ8b6pH6GSGeSw3hsALkTZFBkFSLiZ7GrXvPDk97KfcPYHNZ9HX4GyG45HtZwYSkpNP",
  "key6": "uKfN4Mukzn33hi5fcpM8z75eWf925VR5TrWycf5uRSKWgNupQSiMdrGxqkNWsXWP3FfHoYeCiwvbMqPuBoNpAeu",
  "key7": "3FxPFmwcLSNw4VbJHQh3BB8y5BPNRyChtkiz5wNgzCYLkqkaV4J3FzEns6zDBmGTqBVLeidgFHWCPyNcVCpecNzD",
  "key8": "1yXLy1QmY51zFWQxRnVods5e9CbqqxyyHtMAT6gL8na89vBhNbSsKLj2pocJxbWULJ3DdmoFk6phfhtKGzCmaJX",
  "key9": "3waF78FadBZM4Xzc7E3zXo48vybJusXJXKj5nUMSWAnnhrqhTNigPdzweVc9DUQpi2pjM8BZLC8SmvUwG5tpzHrf",
  "key10": "28zoUcrsaEbZJYNt87RmzEQqG7pjoWzZDLzKgYhN97z3B5WWiNrXZmALxLYPJo2xuE1xunok7UHsodNZqdyC428B",
  "key11": "treDFSqFxc4RE2b5Wb5AHU8G3SCnRrmMLYcyTVa4ZH1c7cDroV9TrLyJPSvnqmq7WCo919dSNA6GHDxaRQ7zj8u",
  "key12": "4FQ7NhCSa9C7pHD7k662TRPPBLhZ3KzcS3YpdY3h69MDQSWMhM78YUE3HbFPnzsSKC1pEv8JRt8sEcgx3gh7dLjY",
  "key13": "2Yj5apBJ9KuDgg6wW866Qs3MsHzY8tpitKNaiFCMmq2f37qD5p37pknBzkYLDK56bgk45ZnntX1561VpoirpJ5Ds",
  "key14": "2KrPm1EBLLLnvQUPWb7EZssNdoffbnydmwmC5Ky5VwSzPZ2x9y6zPLBoyynm3cNqYvbVvNzXDrC49XY2NzNK7hDy",
  "key15": "2bLeevecp2THc9Zyuzm6tAPT5mjdQ7tSjDnHCzyEXDXa4tAguSRsDbJ4gmtdD38fkDVBEB2J2Yr5hLj3bb9d6say",
  "key16": "3zGC1NjrLEvifsuFykzbV94EFr3LgT54CsHAGjWcxCT2AbKD2joUxkD2fNsSznvzkrGcgC1kQbEiMdcbx4KZENAR",
  "key17": "2PRKWP5JmDsxZZRu9EEDDFfHsnnrEvvz5TAr7dosJpY4mLvyYJ19yczX1JCg4sthpEegxZcQ9QejYax5Wup45NAP",
  "key18": "4wx8V93Jm28XbfjTqHCTMKf3VGp44jTXGED1kuPqb2Qn36onBeNVUDqSpTV6EMFwn8FES2XweVp1kvXu7d6VLZ5U",
  "key19": "22X1aG8kMZEAakoMWsgBzYvNASUHd5bS4oENeWEeEwLSj1ddjhnsmzxwnGKvSpjqcMr6wii9GPLNKZKDfezwuDSW",
  "key20": "6gjZrGzAU4p8q5x2HLp5iqYo7fv3M8p8aUtqM3e2HKrnEBEAZ6yWJGCwUrgwKcr6W576w1hw7pvhJsUt8VVRSrd",
  "key21": "4Mi7qsgtzhgLfALHLEyBTGuncdzdgW2ktpT9GZpwaYbHa4VHBMfDJUubsuJkYsTxDBx9o5JxzihHGv4MXFd1aM4v",
  "key22": "4T5TCKTFnG6wb21M9shiNXoZQT1wYUsZyXE5jqpLA6cQRKJd5Ha6r2qzKjUbptRvD1Jg4a7DABSfxxMtu8u7ed1R",
  "key23": "3hXeBKaqfxHiYMHCzwqiJ9RM5DQ91EBkZwrhAi1ZzS4evNJ2D12D8DeBFnw8ZkwQJk5LZByGCJQCkD8BVWYAf6ej",
  "key24": "5866ohua4QcWsfEuCjHpMTJw1sYyRooszgsZiL7w4bJJ2QssWC1KXMr98ZxiprWFG6oJH22eqSewtMMBNygREbQg",
  "key25": "211eiCx2KKKHWuDQrpxY8wLJPTKDL6VC4TaMBnTAbFpDkmb59qKkr3ooAVeBzewAfCpZqkom9tJbu7xeES9rAN6j",
  "key26": "5PqEnYY3fxAvVAXyFjrKDKVX6Nszx71ZqTwYNwTJ8bY3aojmzJorfjZoTiMVGr6uorA6LojqzgWGdqMarkSSmC5Y",
  "key27": "2sce2HNYFLfqfohcCqeTSs338NVQKXnZLJV2np8mVjJntoSEKQi3VJnLs3gYq7FkhhzUeu5Di6S8imt4pKVo5Jq4",
  "key28": "21Ks37PWPb11Wzgg5uvYwxg7rQz3bwfNpuQm2Us2QnYrypDMxhCC84ti9DVseyFYb1rFkNs2Jig8CL6AkbwceJmu",
  "key29": "34r5zWtQ4dqpacqTaUuVbDt3fduvLivRXM1GDwh4KyLbj8SYVxeZ6Hrr2BLMAT4yrSbbbF8b6nUvtW9FvwRXkRb3",
  "key30": "2dpHfqtYxaLbbNDMKuKUPMbesork3ryHR5BkugWtJ95trwKpjqLiVYJVeRXyxXNSVJfw9QgWowwvEsGHbNTwjAkJ",
  "key31": "4cmRtt5dXLPHU4NeGiKCfNRFr2W7yUPpFcChX4qCiT1dTW5GWK7MJVwybV5tnK33V6xNj6MeN8EGDD34EQsi4jhF",
  "key32": "bxCzVR4m5penXg8pdxqrCeuAmgUmuV3yoiRgLYkDJpyVCWEMBkb3Z9XFNVe6U4gG3FZp4XF919xeW2MDtTcngNV",
  "key33": "45hj3s6E1Zi375CcQh2ECS37KPwUHK8MqECq5YKKbXimTBT3mzanVQzPMPQgrFqmKewSj5S1teWTZvEXwoGSswdj",
  "key34": "59gajv3zgiZADSa3krbDnRadp2FH5BdEGVbpnTHwVUvC5mdT6vtDcjTLyzwxTWW23WCz58BgdsGahoF14iUG8uv8",
  "key35": "K2LC15zCgasJSccFEe6AhSmzHkbrHHAa76Uf7auZTDmdR7J6oL5v7bakGb6vx2bcbwUFw3HakMvKMcjuHafSUpw"
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
