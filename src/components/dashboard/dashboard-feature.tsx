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
    "kj9ucqxeYAWJNpLMMNKjLXNs8RRv1rRCMA1yFNQBW5RfuPdTYbRXBDgkSM5GJhrqw7sRJyGFfzEqesBXt3SehFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wrfPyTrj6gESev7eQ6xd6Zu3ptuCYnXsuDDEn8xCHzYNaWkA4na8JmDwr69FY1pVJ6JoEnDGWB4H8MdUuADgF1R",
  "key1": "6fqM4Yv8KniWQiDwC7y5dYuQwh8DADkL26BN5eb9QS4W1mDTheQSQknkuApkSTcDUQ2FZnzA7F3Xy2JTx8z25zr",
  "key2": "3Vh71njroCr81XbphwDUSwrwAz9RZw48ECzoYuZ9AeEN8zBKGBKq2YfBYE2Z1STKtPfQQX1XkVpArPUBD7kECLEh",
  "key3": "WoRQmF6pWKtWfFJuSsHkqhmjoeFLURQf9K5WTgxeGNwDPmF62jiH37Qmxx2BbAGR5KAVunaCMeuLkpKMtfR1PbR",
  "key4": "4SLkLpMsWWeGpdxDUeNzb25K1eymXbssRoZrLKowCZhyM2wua53chRgXAzie4kEW6NrxRGNqirEsuqix23yybFbc",
  "key5": "56X2A8s5ze9YeyBDVMvWRvMLmLB7T7zfmUHTx9vboD1yvCR845Li35DosTUNBvY8jVpfNkxh89twZrg4NweiKqbH",
  "key6": "5q5fYFVYtKiu1uJmijWhpAs8cVybd5eYXG1LZUPAqfzw2Sk17Ff7NdkoBXw96iqxfDofuthDGjC1hS7By4vXtu2s",
  "key7": "3KgQmKq1WaQyi8QSMyNEGvtkqG452MMQovE9NyJ2NAaiivEZxJzgy8ZLdkbNg5yKHkkMgo4CduS9mLwvkedBcEr8",
  "key8": "3gczSZmskiPE5dRUUPQmPL5d8Vyes4o7XaygMebC3uKU4xFxj5YD6HHxJ4cmWE48GzMqncpcDJsbzDgsCF5MxyQN",
  "key9": "JSkCG3pdk5jMtyhTjrUVt4CERjcrVS3bxiQBM7Z5M1r9QmXNmmtVU57NHhtH5WxrsbrmFDq5ZQQR3aCnwHFM6Ht",
  "key10": "2MdzCmHpwRkdYxbkzQJA4ys21jV2B5NtgFS7VrQa3TfPN7bYk8U3D6uCNhkbpLiP5iUT87SKQ5iq6pVaxZq7vHrD",
  "key11": "5wxRf1nWA3UF9cqotviBQxJk5x7d2odGSmqbxzsCoQZdhnB9EPCFKFg8XX1MypTvzSjupUF8LUNnB4Q29zGLeqPw",
  "key12": "5dHEFUQsyC5PHHZNrgbkk2HWikEVRgBcnCMbf7ef3hWCAK6HpnYzcU95bjVkijhMCSMVMMF8EgwhgJR5ns7rMHBA",
  "key13": "2eKUwysEiW5Ypug6Wx2kn1c3cVpjDzKBxrL4Ytt1rPzzmwE98D2dtpLwEyFqzNCWnbjgQqDvbsWtEfTxchU3eztG",
  "key14": "2NVj8DdrzY3fdjyYtffCiDhnEahLJsAitJ6D8Wx4iZSjE9fTNf1NoidRcQZ64zUK4kVc8sRepy8M212Nq5Uu8azs",
  "key15": "4i577mr71PoQaG2qrioSYPXJ9wCHTm3vgrZgheNxxYkkzh4dUzPJT4VpP5QGEvRmLjvW9kwVnsYBNm4zTjPFHHTr",
  "key16": "3ox7JpzjdTojbQnYCUfoN239KXuasqd4CE4fqX7pt76EHmkEpwayRrynf5hZH4DfHM2tBYEvu9t3DUWi9xauQxAD",
  "key17": "AovHpbRkPJobWfEhuArEZDoJ7f6F8SqqkZA1TAkb8d1wo9UXHwZ1sYJqXEkK5BcjPMTHY4SzWkbNvn7CtULQH5c",
  "key18": "5xEUWA7X1bpAQ4NcyEbBgzdmq78URzehGddXTXv42M89uTQ9TWbuKwjZjz8LuadaeyC9KTwtxs29qKQi5pEgDLaG",
  "key19": "3MYMmR3NSYaGLbKd3fSacR9gvFGPaiJkhBo4jGym7XAfRLc9Ht846kAge9tDhJ3v4pArD6QThj6vXLpiR2wz4cTL",
  "key20": "46qEaNMzZ5NMBD7HPErLM5BU5ieVAEGrYY8dqPu5qtJUzwtKFVQNjvbWz5MQkw8nXQSS1cM4Zz6sf4AYFstLpDyL",
  "key21": "3thHPRWrESAAsECdVM9fLkWRC4iq3uKU2L4tdocdvYddhhKJ5tXLA3kBCfRXNFLJ8KRuXjUEpMx2akJ1WC8M1cyK",
  "key22": "4ZBZ1W7ETEpsSMWEpx29bjRpdNzdtP69wcP6Pt9FN8HHm19995SotBKG6gHM36LXM5sNomenoqchFVSwfvvuN8ub",
  "key23": "5xFB4xfD79yUsZvmMEjoenBQX7o39qsugGyaT8haaEbhe8niuaugpVadHMbMcspauqRV6PV3AYYMAF8JX5KLfMyh",
  "key24": "43nqcqMda2k8Wzag1tqR2V7Wr7QWVqoJN1u1A2LAW6geujfZqnBCchnAqYf1LSb5AAznJhKiBr8cQQNEJ9HsDVt4",
  "key25": "25FvkdDNgWeL9JAw2G2GZyRmzxPjGQj9kAbuG2M51k7jTVebugo9S8t6Mk3ToTsc91SXJGh33hWL7cpM2RobNtDL",
  "key26": "hPGrqgcUBbbkz3FQad3okiv1LSPCDx3t5i3qxhaCfqA1z5NZXJLyMofazpoezv5jHyVeeRAh9JfRJnVzdSfERFF"
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
