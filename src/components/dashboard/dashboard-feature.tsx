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
    "3BixuWwaZrjrP4VKRCqY9At6L5S13sGpGcC8ie8SRiNvDP1H8kuEqPPvEZAKHtGN3WnqKmA7SvQh2bjT93VDyWwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BiGdUD1qzdvUYtaW3pqPR9zsm53gyEc85ZarVhbMNZ6ZHqpH8b1XBPvnQdYTNFZwdgnA6Eegwq46R3tZNipYhuN",
  "key1": "2RJr1qFHb6uXw2myqMZSKMoQhWqmDzBZZVrvngPuJhAgL6qqp3jdmF6DccvCSwYdQdu9YxX9vkWCmDp7KVApSG4t",
  "key2": "2nqqFPfkd8qKmBY82rojzu28QuXC1cmAGERaKWzbksWayvqxzADtisd9y45vqJf49MqcWHbFeKFc4HE3gd3tLnaq",
  "key3": "P19K5EZtzcqAuwQc1TdGjWEvVP8U4M3QFZBQNtLfbEK8figr6i7G5RUZ27PDscKLGh1wvf4HyG45Keec7MtkmQy",
  "key4": "49eWheBmLFWEp6d5X9CLkVUwpPdayhh41G7mo6D49dpCgrTqDGm1863cMGt8Yb7scQTMqFbL6ZhNwWNKsJ25ZsC",
  "key5": "4X1LSusLA2tGdpprYjsHziZjTmefATStQuv62ugiZHSNHGvCzcZ53zbD1AhXn9XCYaj8afFh6tFGF8LeatBnVDUF",
  "key6": "42ewtYFwCaLLSyHRySHhFv8HNNrgTDvMfJjYLZyWAkXcBsp2jwgGcMWAXE2gVJqJV41qdZQvBxKzRLt6V6xZ1EYn",
  "key7": "5WPwxp7SttQPyJYuHGXiGpM1tSGweqKouciQQgtkJG5xWYLXgDkuQorfJJFdetEJYnctohb6M3dCo9ei4ToyBUHt",
  "key8": "5k99EKXQqJCJMbuPsKiZHYLhacYE8NwBaGSiUmwM8D9ea5rRXLKSk64ttN38wzCjkXLHXQitp8BkpfrWCAV19E1h",
  "key9": "2ietJLu9N9mSCwxMwgkWk2sVM6WzQSBBdhh5gybUWVHvDpJJR24ZB2A3F9YFDSZeV6sBqho55CB2aH3taAUQmeRK",
  "key10": "TF6P8yj4TTY8nM8JFJivaxmArZeukDyQj8BVZiUwv8TnZnrjntWYujC1aj4VnXxXDDgjjtibcGcC7KvjAUHPM23",
  "key11": "3jRY3CojmvbtcHVFG7ZUZH8cZAZXgYGUQVQDgPiCLPUEb2kbQSuYgydi19HwMNBD46tBZv22NpAw33MtwQqagQtJ",
  "key12": "5D2eaQU4UF3EELFYcGahpnzQf8xGbTJbaqiodnqX5io2NqhHxjtk1ffphhR1E65rYXvETRxyJpCbHLYJvh64C7pp",
  "key13": "46oVdqenosK96XzKsrvDGQEnFxt6E7mYnjsXHgewkMczDYjkfwz9oEeHCvw23G274RDzgz5LMh65Z7Lug7REUcFN",
  "key14": "5GpvjRKtCY5jJ2CUEQU2iExcdXbXgjsjsxQaqERY4ofjbJvKCHKhd2Drygu11tekh2QYwc11XkVymbaWzwUiiWpV",
  "key15": "ozZL7Y5fp4k1Prpt1jkCGYtBVd88ZYHGvicAhKc1n4vmQ8REtcm979Td9wKfViKaKXmGqDmXpuApbrJ17BVw2ZM",
  "key16": "4TmMt7wTgQ1hdUFCZuoE8KpxMCHQ9EAfQCFEYP78T98FfpHzyhUEoBCfnMES1aCinRA5y3RryQGNaKirczhdaTMG",
  "key17": "47DQc3zWYjixZXTfCPPUaBguBUToGVgNohhyYC4sGmy7Yc8MQrJANJpHfbU36uiMGZogQoqr8CwhUJ6iH7uoD6Co",
  "key18": "RttzVpZzEFi74YLgqRzxFvCGSsE5nVKNuuv3jc9X6S5jgQL52m7uWMo6SbEAwjJ4agd78V2fZPXikKaTuPXWmqt",
  "key19": "5FYpFb729x3dKR6tWntQbuza1wYgdzT3eHC3nw7nWBXR7kuX6vuhoS5HiN7p5AqZYbbxcD5NCaiQTC3Vbr8U1mEa",
  "key20": "3oc2rHoxMDQUQtgYVyx795GnF7DPHNjpHTNJKCftAiTyGZJ3J8mZ8A3fCtq35tKp7ERQfgV4F67pZfbRRGyYW9Ze",
  "key21": "7qHx3ECXWHDFN844n2CKB2tBu4oS8baKMbVg1f6renr7mwgzSjpDob6cyduxwTvb6mcJvJtL1PArPbvT5neRpdw",
  "key22": "qZtqp8a95rt5oGbv3fw2V4o2zbAvSYZb7ydXa1WKXYvPXg8KxKrRUzxwgZ31r5zfzTrP9VuqXNTwhNwcc3HMe94",
  "key23": "EJ51LjFDehjWLKQvDPGg2cRKsy9NZDVSr9kG4JFLHLPs4v3U63cmxt9ARsCBtzecx4mN2Noxm8MEPzJ6Gy9jFxR",
  "key24": "31JmNmyTKd2u3r2FJbUh3MwfZXrBayPTvu3AZon6MPYLvJ2ZBffoxMfEMVrh2dBNLyo5CBTJt3vfecCbRhV9c3XB",
  "key25": "a3QnLqx74jLBL3j3yjBZFjpQL1cQzdk67bpGsx3EG6WWkCk69rw8o1fUHhQSsSD8RixkJ9S93yEaVZAFWDcZpQ9"
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
