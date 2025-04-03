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
    "6VB2sfKTwmzKvqMscGC2VNDNpgc3kAtSM7jG2Er3gJUsxvN6A4jiGxQPnFs1w8JtgMboSvZguzzQALX7bBmW5Um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sNdZH8qcARvUdugDeWfWpRwMB5De7esyunhqScEjnB6uYy41WBRidS9wYnyJDVynMHeAymm6AACK9tXWFg8K9my",
  "key1": "4UqRfRNQfbad8F4WzPbBCxT3rxzK2zA4ATehWgbkidHRyp8sbnQ8oYiXrHjbMLiyWyQfAbyhvAa3Ka9h6xTNEVpx",
  "key2": "4RdJkGs4KGCpFwafkN98NsbqWMuZ3M9VNSBoqQkX99mJNhXMvGxLKCaEKtQbHcadp17BCbYu3CqFC3tEY8r5BBxU",
  "key3": "ckcHmxz8UozvYvmM38mF9HDoEjEWSUeE6GScsLwK2U3L7wF7PtoVz1Bktw3Vrf6dEQkqAucceVWizFfAzAoYkC4",
  "key4": "5PscUubVhDWXmW3aWss1WBouYB5msg18TF7Uh2kqEh8W4BDKS6rxDDbYoqZdFjpHUUJLicxhz4ia5nx3LsXFf7m3",
  "key5": "4zHa5RwiqbWB4oGpTYmav9gvdyQ6N7rJ1ECM8vcpusjhPLeUpgjf4t2Ja6VEi8tcc8vHtMJAgcRmo8tsUDsPKqa5",
  "key6": "CUMWpQ83rZdR2SmSWMkCtMN8i8KBU3WVE1KktvDtZse5oLM42P4ZA2A5HHaV4XzPWrpWcZt3D3DLtvacXEuDwzE",
  "key7": "4L3yuG3YJZNSVKhyTze1osUWJTPUybzwoPDMf3ZWifE5fRpkjL2P48J7Dc5DXJsXXDQLbVNCjUKczPZA4a5A6yLv",
  "key8": "2FFEwjSxVHtnzQLGM8uduxKEucf2SJFQzkxkrKwmwqHmVTP1RYi9jEv55YXHqKwon8QxtQi8kCtZvgbGQZUWYx9u",
  "key9": "2yRP9SWpZ2XaJNJ2J9FoTCZuP4xfKjL9h65SPYzBL8evuvEozz1gPrYNRiGntJFkZoo1nYwANDDmSkECdGGWjtud",
  "key10": "4JQoGrWQ6obCEMWDEfaN7miVpaPMbSW5bpUgVH4mH4naik1HeacCBrj7aTZ75aJxhMMTyJ56fzN6WKtpAwWWm7Ae",
  "key11": "4T2XfNtbz5oXmFzoPK19tbWsKFBKR1o91sLSJW5ccp9iCqjTkmHrqF9yY4RUCZUs3MHoaaY1Zbggii9g1nE9zKbe",
  "key12": "5fVWWE3dHzYtWGLCA9K6bKBDX46W99icZefQEd7UVbNZF8N9FvkRiD5pmCHiboa9KXcPK7aT9sfc74CJgNY1nb5C",
  "key13": "K6MskHhoe5zu26GFgFQiDiS8ZFXcG8mBT53tRaBSoWHhfmwPnZ9iWeeH7hHthdQF4tftXuymCxHedf2TZQRxp1M",
  "key14": "G1mqyyfxXCaDxRUwu7nvP9zhXG6bzzrJrvM9R1NHHymVBTx3rt1sXZZhGPxaqqiV8rFZYx7dQ4miDnCJfPfjMkW",
  "key15": "u6wn9vNan4wPHh7wSQnuWWY1HNjrUXyFdrrfHZzHvo8AzvXa4pYbPADBd5o4pJi6GDznRifCzLfvbRQAQnfNgqB",
  "key16": "ffqp4qMPEhY3bB51XTxMtDcXMFzFbRuPvQMSCojLkynkjPvnAP9AQAariVs6HpzbGNUNT9yXYzbjk44ERgCkQZT",
  "key17": "2fHikoWJHggDffGj64cER8EvQgpKVeCHqiK8aGvMwa3uZUhM71AbUQN7QLk8ZEWPFNTqzrRx6mSKbWdxTY8Wfbpp",
  "key18": "5o8qBXTQJrRbmXvfSV297vGrtBbiGeKp2ZVnfqUZqj4F7irKCHiWQcXn9JCBJvUCv4QDSqXDTqVEERGmJWd5sJ8T",
  "key19": "2H4CMK8FiwpQvk3wwLGZghcg2crEkm5fZpVEkjBzW96NjaJ3xJXBQ1T86Yd4Wx4zVD7aZuLbrhtSA878tS57vcne",
  "key20": "5p51agp41LTrVAmzKJtVxN8mR8R8A9NcYwCNoXkeCqPFxgCsnBtJoSZkiMWXn6tqZPuwMt3NYwcVHqnGsgUvtiom",
  "key21": "3KbR5Gwi4FXEaRsNf9obD12GqoUxicB8hTPrPDG3Xfqmzf3idmmU9KbXCrMdddjwbG63xZLbERH5H5s41hcMTJkg",
  "key22": "PZEZtLKB5BdrH1r2Cr8RriSmU4GcheTSRSESncmfD42BntppnSXmTeo8adB9RATfm7RLMLBCoekgYjFcsXew5jC",
  "key23": "58LvSJhzp8U9L2c34dnVVsw2bBEdk1LSdpmg1MXxS4hBjGcyfQjWq8PsvFYgEViLnnfqfc3MCqqtEKAsKqXrdYpQ",
  "key24": "vBc6YLE5k2pgdMBvDcn15wBP1gVivSw9ouYxWLJB2gydmFD3Kf5svXuYNia6CnGarQC8QxYVgLWx24D5aUiP1R2"
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
