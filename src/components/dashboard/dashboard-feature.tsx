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
    "5uFhWCRUFgxRhgnDhHgDRw7yNcRWkQeVB9SHJ3PYS4VoGgksD7piNVFRSEVELf1WX4aDE55c1R3Q6gRJ8LBFEgj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PBj7M2EdaJ7TPqj3yrfsJeBRcx9WpG4RTP95EX4GD8yEJ8679Tzxm3daYDhCwwTGFfxLhcTve3fsLT1CNtN414q",
  "key1": "5yPwWBkwx3gwQ9cD2W5HT5BLWkQbvhbhgr1mMhxqsU1qj3ykCpQr3i2RfeafnRFQ57cKiUr4x4oZDCZb4oAq21wa",
  "key2": "32Rxb8oAJ63JQ8V4BS4h8LvoQV4LFeikxGNaCBUKVgFW6Nr2PA8Tw1em2kSwmMV9PEPTwYsxXqyTuss8rKZe8N3u",
  "key3": "5uKakCtsLhzGiLNAYEXUfn4x9vFF9pPfDhQS3fuDTYFMyKGqLy32p9xyv2bPb42jVMLrRae7BV5U8SRVex5YJDwu",
  "key4": "5D47BpyC9KnVuqeZUCyTi4w4YAvbmsm8JD97pWuSYP7XqyntcLZTd5NB48Mwk6GAcyJpnPk1KotAUksWgzK9NHGX",
  "key5": "5rAmjDsvzcaJB2hmiVUuLbV2UKEVrhVZkHQLufDdAdALXK6LAwtrnavZm1zHNBCoCkV3sTo5VagXo7G3obJDnF66",
  "key6": "3pZQpstSWtstmhVdMUBum83LrPKojRPqdT7VWZZaPnLpWKcusbPTtJSoPYanRFAfT4nwRoiNxL5Qk5ia945jNJpH",
  "key7": "2sMLC8uLESZdMT7eDdkSh2CKPXDkHAMDcT2Vk9n5wfSHjvNU9ePvFj3FzXNvSDDscJ223WLjvhU1eHL3K9RLeez9",
  "key8": "cVUxqo9qkUZ2pQg51aDwimBiF1uP1EEo43CrbDocybZ2jaPMvd6jz44gGvGfkccUr5pAr2rHyJhqNwP98yC6fy8",
  "key9": "3gjcyHhJBGb6xviuqrgmuMiQ8WnSLccVZ9LY8QESkEyKLfDMYDWyXPCDCEhn8UZvdzpbEAAxV1wngLiXEAn5pyeD",
  "key10": "2fqM7qp94NLg3b6BCqVKFft6B3mUTtTvhh6CX5GntWFvYWXSUDX7ckVcyKSZQUB2ZgphGpZW6bM2YDYFT7UphTiJ",
  "key11": "3NaoNqE1meZ14mNNuyBMfqyxSny1tshFWEhLmZgyFDdwN8x9vSsNMaaHuLCdfZz8CPTwkgE4W6YjikJJV3jWuhiV",
  "key12": "24tpHe9txBTpMZKkQVVQu8aog1gWZzAj5GkpGZSKuFr9cYmch5TBok5jyVe6CyUEASLBCyG8Kkh5ivzgcAuzLHLT",
  "key13": "5CnF2h1t4pS7CfDY61HFA5xRjh83iC3yAJzLzVvXB9bA5pN7YxwCE6amcuif3ggU1F6RCMREim7VUZX6JUtnAGTo",
  "key14": "3aY3fppCj7MJDARDmfaY5q4cKqWhrNoNtZD7GRUoEenfx7f8vU6ikGQQHwNQdEiKKzF6wm59bCyAHec3Np47nk5S",
  "key15": "VV1XQWtGiPTFYkEnZjJ9SV6hNG8hY26DHuUZnfZDScTVQtt76DxoxwEBWhx3Yj4unZ6GnkPWGTBRoEfq3FehHQe",
  "key16": "5NvaJQh7rMZznUFehMU1QEdnmccLwd8H9kyoxpDe5ZYYGukbq65ZJm7zi9EQNxPwnxxWhPPZMJe48QrM8FGY2ks3",
  "key17": "2g4oEafNEiVxLNGgCdu5Po88yxvdkvJCrriMEr8PVu3onqw6bvdSQtQvCXC2deeBV6NrWk4mbkpsoe9RkB9EBGfk",
  "key18": "3A5DRNZtPaTMWhdvYLab3Cje8UJnyG9Egi2z5MGTjVgBMc9uLP4pYerzjX9QpiM7me55AQZRsALgUVHLyZVEXV35",
  "key19": "3nLgyA143pRXT8caAwfNTD1BaKQCAiKWo3QC9fDcvhhUAW6cVfm1EWYGtXFy9rfTCUHCpQV6hiycYeKqJwn9UezC",
  "key20": "4e8c7CHnqn39wDMtfeRSHHs5baisNVtVFaW1AekyVu2eSoiB21it9C5jRDFEYnNYeiT98ndkTr5ghxpknMfjxDJJ",
  "key21": "3sgvqyuAn9vWX5UbUMQV1nZkWMYYEhQ53ZZ7WuNxgGTkK6NWm5DLECPmDcYnKhCZJEzYH8WYgb5e3tbzDMGo8tNC",
  "key22": "4YWhbKhoUmJQxqJ9JeCLmGCpgR7PBhQhqcPZJxiAx5LND4zYdZSSqxKJUaxpSb7aqVuind8pVHFdTJutXBMs8Usr",
  "key23": "3HneJqrtkE9pNusx2HLj44AUvaGghvZmt9EsM6pAhZMGEExjXEpE45cFQf7Ujg4JmeRvHyowSEAp8ewCSjLiX7nG",
  "key24": "28LC7AF467gofKFwDozB195nGmmiQ6j6hSW6gNtqxMbTwYEgHxWiJ9g3cyqWsnGVA8aDF5Hve3Vd9RGmaKb6HiT6"
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
