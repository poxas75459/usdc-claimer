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
    "48YV2duQwsqkkjRjDS8PQTxbmhFaKYqfLJCMfKEJZwTjdHmzrH2aesZvzwQkUoMC5LJUgh4TngQMVr5xD54CVaMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "84e8h1v95rWvnxUAJeGbjWwZj8bZs1YBb7KeaBchFHr9kKiphbh9ECbsrG8hv4YDYqoMCrHXhk9CMf7mL7GbyQ3",
  "key1": "2i6HncvpuahAAiGDCfmarqTs6ca3KMsfopihESM91iEBBoHPDsthYgvks9WRoSMCEDPHa4BZGxKx5muReNEXe159",
  "key2": "3sepgxoAKFTGvpZK5E2VdqJWY49hDK6z15hvkRAaTZPRFdDQscthjcyasoHkFN7j1JzHbxVJNf3wz5BAZ1FwybKr",
  "key3": "4RoFjAczkAPx7L6qivGEbhD588wZmFN5zAx5dsp644U9xPPZTa5q2kCqP7uTdqG9S9whrAedHQ2DZxAKvkxFpCji",
  "key4": "3QDxvGCBpU8o18Ro5m31TrGgmRPbebzx9SdYBt6qLRqLAtq7BuB3romRrSq8ZUciADs1aTnTxHKESsCjMhLKUBYp",
  "key5": "5ForV5rH7LDF2Y3KKXaasskDwM8WSdF8UrWtkmEAcaqptTt5UrPcTosVBS6rm4K1K4W8zkvs29X23dp3jnQpDa7E",
  "key6": "4ERNHgofsbQ7BgHGUndZSpVmu97QWGiJdLPzTjiVRtggex7pStTfQj2QR74BnFoS8YpQgHQH7GLNh2k2aQsKYbsS",
  "key7": "4vfvPGoaFA53NiQbzxpJbnBUwnsYEpzNdNBAe9dnVyVYpCFoHejkT7ncYFknUrbAV4HojCrhpzn6sBsVk72b9zn5",
  "key8": "2gUHufxGVZ3YyhggDirehKK2FZRbdYx4xcqVifehoVe8zYaj9MVNkeNfnkuXrwriYh7FZ4oJSG12SHJpsjrBPokT",
  "key9": "2vAUwVh126nskEfJTikkkTQqN9cjYpTyZC9cmo9B2mpekgHfyQNvNsx87BzFgiu7qGoNNHcZsuFRMh1JhCdazPck",
  "key10": "5dMJWMX6hzZsZJCS1N1aSsQ5p9jq8AbGTDZEu6bCcSr3Bb9pKRJFcvb9F5jarhxd9LHBY4kkBmxiQnkN6CZEsVAG",
  "key11": "3fxe1SBMapxrNmzqSSN3Y4Ak7rp7zih3PDnX3ASb1bbCzZWNSWL6QUuPjQgKV8Y1w98WreNjTnJvKCwGH13RDi1a",
  "key12": "63Sum9oN2w6N2VtGvowyohKviKkhvZkvZQyZmK4LSSsrfrcYW3MYDSg1hYQdGAx3FBjK46sX8t6wDKssuKn8Am27",
  "key13": "35Ci9hitWKYcdC3syvZ6Z4XN5ASnvmiEp6Zz9QW1S8BSp1gfZDYGffmMkkaay2STVKfgGrR9oYmaLaF2rfH69XdH",
  "key14": "67no9bFWrUqMQsJCBWzzBkuZcX1MZ8TYKpnEPjZ9dSiK2ta8NrkcH8sYNPcJBEdBjNiXZJCTRwtoAVbewBxXmdRY",
  "key15": "2N3MyyX2NDukEnRRc4K222R7KtDA4irwBKPineNW91AFkKtz9qji2yxqCeV96MaqpvPDLP9R1R5Q5XgNbPfKEXgJ",
  "key16": "3o7brWLZsmJp4vzLsjfsDULZUwfK9VMLU94jA9z5iw3hokHUpGgz5UUeEV6byokXRTBxpVdnypCE41jmdtq7ZjXH",
  "key17": "ipY6UDvT5z7FJ65qoDbkmkzFKQ51eQS6aLL88TUuf7398WYAiTMXhMf2GpwghwrdrJdWCjPrY6TYgpzS1LAZLdj",
  "key18": "4ypmUciarUkraYPr15fzp8zUKvThCEa8MSAE2hu6Hpjn4mugGw57b2JTm8imgF5rr8RW9SMF5WmV5dxzh9uZpaRg",
  "key19": "5e1nAFQpm9tbNBbP4hBH6von8VDYXLeWya1FFudNSx5DgZG4guQBNXPsGYkSL3CB5mTNCxiD3nctXvQoyBpNbGa7",
  "key20": "948GhKJptWcWi5yZBYVcCXaMKFJuYXwekSMdVBZfGK9J7bGrTDVRUwDZmGp9QNpHAJk8uRT43PRH9JubWpVdYtV",
  "key21": "2efoCAvhL3WqAZbH8nwRYZFUX9iyUiJCkDz1vsvhyCDfLELBJr8ZST679FG5jqCksKMDSCcpxUcLMrC88kfZwumu",
  "key22": "5MN8uXW2V92i831K43Bes8QwrNBzXYu1X4KA3kWGELfziF9rm8zqmUvEBPGuxoqBmVMao2qP4TDBZkHEikGhDpFi",
  "key23": "W8EPprGuSajfB754atWJFtghDQdnQQyqJWw8r6bfTAomuvmXzHLfxyVEnyM6BN8wr651HbzqAHB9NzxdR8xB3pg",
  "key24": "zaTL7DuHBZ83LivP3RL2zmZcN2w76jYM94L3g2dC65Hpb7KYWdYASq11iJPEJexSgxB8yErjHMBhjv3LUTEHrUe",
  "key25": "3dAqhcFddduARfEc7dzigTYLCZ9oNZRpAg8sLPjUs2FP3XKdyCxywL3RrtmGZJsCT58Y1xnip1cf1HpfpwAkigzt"
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
