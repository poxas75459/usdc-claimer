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
    "dqDHeT15TS73fRH1tVhs7Gb6TKWFZjMSfYzo9RoMXAZh4GS5ABFLoT2y12Y1QX9V5EWSoG14ARXNGS5WdUcYfsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XTWgeFe7bUP7YsSv7Q7oCT2r5yPvqKZcVe4zrMnzy18PGRxLoMNc6aGjeRMSA3P9mGLo5xx8t7j6aMP6gBqUpfj",
  "key1": "2F4ANjb4x6epqw9wTtYYTHQM888L2eF32LdZ1zVRPxEMTw1CETpvdHW83yWwvYe6bSBF6fScuaoj7HoJ1zkQu6E3",
  "key2": "4Bkgx4n3kcgMZPzQmgAMfvL1x4nTVKuMsT5NiHg7dAsj3ECVBimHAP6Ti5e5nwyRpupFhQPMCd2G1JqTL6n7HtrB",
  "key3": "nUyLxg57CFbyXmyuyzRLgu3ARboWpA76YJ2rPvV18G318bE29aVrHf3AzRMfK4gAw8fdWdpksExECvUuJrGD61t",
  "key4": "MHTNPLrdW8WnWZSRh8bWSy9UbfeGGKrS9QbfLQWQXP5j7TwGzy2LkYZw6yKwhiFjDaxuRRv4V2Ci7KLZUe7yELM",
  "key5": "4hjANRvCzB3FNqsH1JUMDm57fpaWzp1d6mCAf5mTtju46Cpj9KM3uiKLMRbVTFJkJEBeVnL1zeHvSS33j7SoQv3K",
  "key6": "4wACVnGY66pJVZGDb1Cc2JgCdSSxYqVCqV6A4hR5SHPYkJVQgiAYnR6uyXQ5JZCNj1yeaiPKtrTkyaaJGZ4zg896",
  "key7": "2YGcPnM8gq3EkDSq8VaK2GNsU1swt34cQMKNEbBsiYtFXuTkHy4YTTaJ5qjNTxSfYK2p46FwiHMNUR9N7dLqmbeZ",
  "key8": "fgcF8sH5q2orMjbwousWDgZnTQkUR2zPkM2XhLZJJBMxMgqjbB5GdHwV55MPyBM7nrDuMs5yF7hnTq4dizDbEWW",
  "key9": "Lsaw7tQJJxDjvrYVtT7jf1HC7QwwSgbfquN7eE8GC1zPg6vrpNsCRo7fVwGSjJHeor8nkYYwLdAibXh53Leb6Km",
  "key10": "exXvoT6VpoE3aK6EVMXjeSCoWnn9annxrsgrnRVyUR94mmHp3EEijZ9CShWUdHGxuhvB4uc49JAQwEGPgwbWskm",
  "key11": "2pc4wxNkr9ZJFM2r7SrvHsxraQjy78iBZ68Ysqyy3zY6hSUzYbRAhu7MavnpkNiSTjx9CCZmAN5GxDh6mScUXTCq",
  "key12": "3UBzVTg8aRKAC6gTiQUxWoSPmZYj7dFfpvj6nG6hiA2FJQPSzVHE7vgMfrv8DKBx3ofSkYEpc6hJbduaiJ2xLCf3",
  "key13": "4XFgrR8JWmfSb3LFqaTn2rTCd4h2pLBDFE9cG6Yt616JPAvtQZpNjjrpaYZiBBhNvRUiv3bYs9zWkFHC5wavZAiP",
  "key14": "2SPA7kW4pPG7beEwvmV22Jp4THp4wn37AGhtnBhcE5UiQSnnLZDXJkapGKHjg2nYmt38wH13zYXbme7Ewae72QpX",
  "key15": "3TcHSCCmJiijGu4BqZWqHWbsHk4RBt4ijVHQiLGmyuPUqfsvBQY6SfujwEDwMrn2e8MHwYGqtvJoe6eP7UtjuMxc",
  "key16": "5zcaBuZ8whkspTAVePKFZKVc68HoUjtuTRYzDSQodv9QFGmcfLfURtxuf6UDDkiiBAoX2iYKMQwjvKgJQmn3QrWb",
  "key17": "2Z1hc3enDJtw6YWkkZd7hgzWL2RoVKHxyB55qePsCYK3hEFYACX2gji2ipstKjMY3aauHugYMiSkYhyAyufoeYh6",
  "key18": "33jHpddJsy9NoBLWdVT3Gk6bfyHHUW95chZxJbE9gpMaUc97QzbMKmhiVEiC6D5Jtr1LtCvaBRFBHK6zLB1Dr8Pi",
  "key19": "3ETaRyiy2z6ugsTb9wTDnwQxXffZ1Ug8ozjoXa9MEjz7QQt3S7gqV6B3TknHQpEdzfF3j21fHs5guMfMzu3SyKb1",
  "key20": "2YNd9fd5ExstzqYbdi1wKLZKPVs2h4ausc2EV31EPqF7Zwt9U4fAaEkjrt8duBhNRjq7G9NVd31RGwbfoq98sVX7",
  "key21": "4oNUNb36JdkyQj2KLTZPHW881K3EpHmA7eBJENS66vhDzZ5BbQA3gqSdy6TgyXm6622o89frLzJ3kc4iZhNwFpNy",
  "key22": "67mRSwS8BDjDcBGsPkkgsKP5ddyjuV4aSjJto5nFk1PF2KXnjJbnTKnx3jKt2UdPuREhWgiLY4cUGri7DNhwvvoJ",
  "key23": "4YMqWcSpZ1xpUeedvF4oBEpoDM9tcWs9umAGj8GixdT1FqG3MPbqcmhE9sFFhHharqHykQoXtoSR23v948fGx9z4",
  "key24": "4Awz1ZBaYEQTADDgUMbTsgbUM6GD5HrhRrx849yB63a5wFQqAYFnpfXSft46CytTQYDvay6ftMeKVASts6KrVpsm",
  "key25": "4AJtZsDFZQEDQxj51DKinPa9GLo1DRF6JxG3rmMbCmqEV73J7Sz5MTS98a2Us9vctSsarXpHmG3TWS7WJ2w9WJnK",
  "key26": "4LjAWcUrfUPdV1iPp4PwHEnhHEQcfdfCXtZ9pFUy8fMqqctQFncBmU88ZfkRXdb2ukUgBMWa4EWM2rWToRx4ortB",
  "key27": "5NjknDAvGaPkk161J9n5x4ikrP4XqP2MZfPdBnJp7FAKPwsD2qzJVafyWhrnfrkLdSjLYF5AqrpaEP3fmXnELWZc"
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
