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
    "3HbGYAAv85XJ947dSjkaTwt4sv8sxSVPtJcEcGiBhN7bdDDDn6WGnuPXc33PRY9yPBww8nbhu2ULnQ3GoNrJeQ92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46TJu3netbkcVs7s5w1Y89LQqon9E2EHSt9Y5dZNcu3RxzSkCbYF9yCf4qLt8ypJnHCG6vp6t8MB3U6pshk9ksUa",
  "key1": "2D5uTKBn5MukUwTAKv9Pqp3X1DAByAxP4b8rrAX1F2nBbYv1dUMwwDWLJVudw9ZfSFcB9qXPxnXdWVWgr8Ds1wXH",
  "key2": "55BEhZAsfWVrFye7mbFzJMEKJpeSsDVun6i5xv7n9dsXzQG5nQSwUVzGRz9E3F1hX8KFmcnVp1uiyrp3viviLMvB",
  "key3": "2m6etHfZVbCitwcFiCp781qiHJ8cRjS8anGTJJBeEydSB6WjMcrjSYBX8RPzmzjAcvad2KbJfCueyHie1H2xWMXT",
  "key4": "4tRDEVbQ2WrJNQdwGuvJJGP5xz4FHxCsCJgQiBCHXtdsAXEk7LP4dJRb1oLkxxNrrPnUcwW52n231fExY4HS9Wtu",
  "key5": "5coSDeV6QH2JzFWZSoKAwQ28p2TF6C8jxY6B3gcLg3YT57GQtuADBNLwg1ro5nsdNLC4rvavS7pGjWpwDG6uPgii",
  "key6": "4JrHn9qFS5eoUCKRnrvDBSY5nZWy3y13gqYZmHLv6Rs2bgwanWtavZea3jdX3Q7ayeF3xVN863iF3crXHW9Ej83c",
  "key7": "3VKgxKd1xeXk2viA2ixJZZieWkMdwhDZcpczK8sHuuXnxBRTrmk856KUaoX7d3WJpfxMo4nufkHgk3MtkLELfoys",
  "key8": "3jFgabMswqDwPZMyGNPAUjCTirToDWqBQrocfQJZix1zgaTa4dZrEcrVgzrbdZNKardAchvkxMCakc7dgjce6Cui",
  "key9": "2zXdvAkdaA9DizsMWx2DHR92S2YyHAP2ESbMBbeJw3Q7SVCQ5tj4g3BxESe8AmXKmbL36HisGT9nB3Q6wrzPhvJQ",
  "key10": "2Y6V48wbTuD45FbmuAMQbWD2TQ2jvmCLFgHPp3uFuNucg5YUJxSTooXCuqnnnD57WUDmN9Vr83JRfCWDGaXNcZPU",
  "key11": "4gUwU7s5NPMgDxMyQ4jCJvHZLb5sE5xFbxYEQkUFisbLby6ZUsCVYxQtriLf5VrCwgEkYT5nVgVC6PZ83BLdbH2U",
  "key12": "48w4r7z39QVFMyTXWJXTaNBiXBdt8uu9f9ABdujfwoSGXGatf2jnpuy6pUk8N9Fm9uK7gqq7uJq2ViW8ETCW6apz",
  "key13": "5uaC2Yaihanaym41RyjennD2JYdACvkgSHah9yoqgkcoz6H2BfWAN2eh5zxvqJv7YSJGDQF6BAW9cKYTYurGYfZc",
  "key14": "2KDw166SwTBYQWhopgckLHm7MuiUY1V2k7X8ZJGAm4y837hTPGt2ZAgmuPEBKD2VRp37tXBbzs331EoAPBeJAjH2",
  "key15": "3fqXRHVrJfgthKdrrQcXqL35FPmh8Rwhhgf3XavBc6v9XVrtsejhZ6tZ3u4E2z1F1C9LY5P6tNi9LyYUHJ1K9zhT",
  "key16": "66LvjvdgmmaChgYo3ygyrLoFMeUEKDrseg7wBdWdNUKrf2HiGpKFtooJguV5YGQNYf9ah1W263aUR6XFnCjLjHpz",
  "key17": "63UJNmchQ64sYU5TW6RcUL73eTFK63W6oeWiZZwjoUVvBmyYCJBmF9kLsWsrPTs55tWo29R7gcdfGnvibRYwWWtx",
  "key18": "4B82XnBwNWygLz5suAiYSFcFNyV2XHfb3M4jLw62Bq9mqCicFwnWBKQuQaZfpd5XRfU5qgifTqBMfmkrRBzXyhdT",
  "key19": "2oEy6SR22sDkUt8YHAEMv5jGG8HxWi1Z5B71PtWA8pvB9ivfcd52omVf1E2oTA8kvBk9soRZ88joptnwFdU5JSez",
  "key20": "2fA88yKHpYdKxvEZud2g4RmrRaXiVW21oRtYjAY26FQAwpgjc43WbG9i4kkfa1QsxjncBUiH8FyyWyKTx6BEXyCA",
  "key21": "2iHuWY9o3iAwALQDPoM4wVQXMp9dfkv6KYBKcnfHw2iNZnGwboyk2uKfePsj9YC6xu8zN2KpFiBVCHPwwAC8EYFu",
  "key22": "27JC2dwWCgUpsZP7nZ8r8BBFf8WdA6TPSej7s1sUBZ65wvcw53sxVoWpUgJZXUDj37FskwKyYMasZJW1zgrskv4G",
  "key23": "4oRbrRzy1WWnH1iTvNpqH1cKYse1tAQXKHkyMN61ps7zN5hVxkcxyejP5Cyjgy9k965YZjsjB7iCJdP4oJu7AXmE",
  "key24": "2juAqVja7zgQhrwDAjV39MdzGFU9SiKv2AYYoNHSzSsVwKtisUPKtFLGgUM28nvfcZAtaG8CcJNjd4UzGNrD9EGa",
  "key25": "5eoTCXYQmWusZ7DSjdH1ZmzeNsQxtv6QyxZ7HwZrcvtyri7WpEScntxFtjabmRdQzqKNwnfJfWFciR4EF8ta2J9E",
  "key26": "35sZEWnYRRz2xndzZ6JHGA1ThgCo71rgQUpjMqyu6iTeAZpBtRN7VTSq6CLtWm1fXt9qDY7kY3KscPAboHaWf6Gm",
  "key27": "5wS1MgQpFMf1FwopKZWjroKVVQGVqaytfGUCpGVZUUGF12Es7Zstsue2eKcj1EPJX6fQ2hLZbQ8LDpf96PjQcMCh"
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
