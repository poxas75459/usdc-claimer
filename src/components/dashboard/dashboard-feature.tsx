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
    "2zjSgegGtZSNm82p1RFDms8WpyrAFhovWFGWh9dtbxccmC8GmttLDBHcxGJFPmEZzfzMNzdcfaQ6QcFvEDaLEgH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CnxnmWLUDJoipQ1w7LZcXJzw72k5wiJUqzFn9QArPQRzHzac65gjDc8cyuMVvjKechuEtM8dQFrNjsCm3dMijGK",
  "key1": "4wYBwtve6YHn64tnwXz3zfiC5Hk5G3JnAM8akWjVdUAkTSZnYx2Kd8W1fkyDsWqmHbYHxRBtTqaFZYLXcFnzoKxe",
  "key2": "57gcrngT465voc3eXWspiEX2kscFR9YQnh4ihWUh1XDcRDYBbKJU9nf2y9pWxqmWpPm2ERPWM3TPvq5wwR2hjmd3",
  "key3": "5tsSxsoyHLkFrg4V2ejYYmGAfgoDRcyhx8SYBxbUpeWnta4qAyBUL1fT4ShWDkLRjwSAse6CEj1DgCG2Vsise5WD",
  "key4": "539YUNbv1s9j4KfJyqRN9hoEwkLsaNAD2r1cMx4wYxSa7DGvBVZh2LUnEMtmWiggQ3taaCFjTofAdXUYmi5mjhmC",
  "key5": "2ANQGTXywHc7S2VXxfSxzjbaRm438zAM5np6uQkFsSSJ9zG8QNjQjq8yBadGr9JNUigcDw6SzdGmatcPePwAap89",
  "key6": "5uMbvLCsxzoedFv1DmkbjtBtfVp3GW4u6FM5ppKNNwmGcvETrUUqcyGAbTocAsHAKEWAbSp2jVxDKXVuU4Kcm5WJ",
  "key7": "27SUnfbc5JnQdsCQfxAEYgq9xwpaRYYMLVvdQWVFAWs8ExaFKxBfx7uLwg4jHpSHWHZ1m6f1oBam4Ns3BggZPTzM",
  "key8": "3kWN7MJFYNT6ddA2ZtnwHTHq6TN4TMve8jq2EC2qr1nUhUBrBT8csuvRF3gCQahr1EigeS2QBk659XfdbQ6zHtnR",
  "key9": "p9xQs7zQubJmMGphir1iqocPhpiG1APLsdhWV8ieqfioFKdrqpRT9skEu4iWhGUAq1XcbkiKYcC8knVxRD9Wi5U",
  "key10": "4bCaF9BHHR2b4Q74KcKydTNxhjvh97jFL632UuQ8vGTxtqD18rmc4tBM9dXrbYHKt4kwnTfTwtUtCmJSXgYasrUo",
  "key11": "451UzZ85AMjEebGDfcibCmmpPYzL9VuFnKwv7JNnFzjr9fJHik2nULc1cfJ1h2RVyQn9BocvtPN45h1jRpqQSXDw",
  "key12": "4EVJdnpCkeM4uuszQd9ZyppTrgYV9oqnww7aeKtSm1JKFGXiDdousk6EgsfmvxyWsQLKfoS7UppU7W9SkqinQHyq",
  "key13": "2swjyxgBaLaLFWCKZjbpdHpMkJ8dMoSc8cFgCMFn7fQcaVwzA6E47SpN2wyg3qPUWg7NrxqHU3BtDGhRgZqsYjy7",
  "key14": "2p57xtXego6Z95QrccYtkrYbADCz7LWEyHu185d5JVS2tWsu7Qx2Bw1wTxvh5B6GCP9ApGJMSBPHNJ9n7yjBUi2r",
  "key15": "3twyaJbahwB9saYtvdKVF64AwCSURW23YVyJUKFDh1WdoLfUsjqJK1gd1JQmzhNkGvcNChVVhLx6MtoWzSZJZrFW",
  "key16": "2usbBS5YDUDvRx1Xv8XgEcTGbGXEVESCBKB4RXUNTe6iuN6p9hWPBkRaLti7LUSCuZmEn8bqL5AVsLcriEV36xkz",
  "key17": "5dqBAGR9EYx4Zb8LAqNfv3RoGbPjaaY5Dn8G3avUpJUBtcpcD6M5ZdKi2mNs698MT1RHuWNF7j1jJtuSS35Hi9MN",
  "key18": "qG9hsk6Kd7S38q5KHXmmPn9qNUDDJdff9ZRwaj3Sb9bk5YV5B6eMrW6Svm9aR8bQVJTmcAAoxPHcwcHjjJrcvwp",
  "key19": "5NoVkpJ6niptA7ZMst2qJwL9ryVzAh2ZyyGaqDqCuJ6Y36xVVLCSgWg26q5pq9rNVfD2bFg1pBnB8KpBcSxTHwib",
  "key20": "2BNKUWsyYhsxhW1gut6DFxqMhbUZc8XuyhgbMD91KoQYeAg7wyrxJq1WCqepeYDWBak29Qd5AEEVmfbRWxTyK4ZD",
  "key21": "4pXpuMEknRZonHtL3euu4uuvvwYEGS8Gad8FSyfHkxDAvD4VJDzdjTkzRuaMrYH9Bd5oZ9waQGi7SDnVKWKZ2Guz",
  "key22": "3JmHR5FSVf3Sd1AgbZ7UFoi9EVLq8HDUw22nBYT5T6TCc4CqyrbpuqkJeXhfGPkLG5RbTLAAQ2NGwwue9Va1KKTA",
  "key23": "5Ta1i4baEft24da7DiaaVYQfizPEbqoZsJBeTBF6tb2aSUDtYnTQ1A3JziwjfKAeA8nHgwN4nRxeXnkGKN2TSLxV",
  "key24": "4Ry96NDj5TL3BRgWH6XP5bhySTfXMynWx6Nua2BjKxoUCj8kG8Wag7pVzjpvpHDkQEQqmxibajuyUyUk3KdeaKzn",
  "key25": "5macBjiuYjR3sMFnfVezRT4SEbbec5iESDwJXXCfRYWqFn9fFrkWfWp1CEZzFnp3b7EYbm8Ck5ej29qVEsqkCQcL"
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
