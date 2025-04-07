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
    "2LQ9JkEdxcw8scT4k3dy5jB8FLgMatEjrH6JUoDxrKUiy4ej2w3AbhGXPLAsLyAoJpUqhS6J8nHxTWXJ6vDoF6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YaaGqRSVjvaWppHgdisBg91j9kV5671zGB8cnsH6iuh6CaCYRACqw7RyEZLNnKv7ZatmvS6qWX88Xyk5wRL75bZ",
  "key1": "3VpsoeXJ5vLLsA9BpWSWkYBwoiGWrSNFX83QzaexKT6DRXjfWPsJJ3M9g4Xatnr4b23gZP29dL55hnt1XVXmaf3X",
  "key2": "3rgPcsVCHreEUUz7iWTgGy83mcHVxtvoUJmm1QkgFv5kuVCFkVryHi1VY9Qq7Rpv2EmQkpC36XWMSH6vN4UxM9hJ",
  "key3": "5CtUWgVJVHF3Jj7xyUFTLosvHA5K1i88tuNmbNfeVcKPkKWYoRPGc8mkxokKjgpWMJjZC7Wsm7mw2iPuvA3fhiG5",
  "key4": "4BMPQY3GuVTHFzAQwbNyrTwCCqnAMvQSAUmrYjzREmWgNDEnLmW5kMuCF1wekSnGQL2PSoaJkRZ1aPvpG5fGxAed",
  "key5": "5uLYL93bfCRGopDMmXDWtTjBNKrkEqw79gs5zm6Raq2hrAt9G95Vv9LW2QA9ZUcFiVGaAa8Hmuh2JFirH9iqfbE9",
  "key6": "8hR39jSrtwjHKcrr3ATpptmLK53yV5rF4xybQ9SCZzmuFGGi55yGJFgwQsge2oDXJTwkFEvKHzMBGeAGBkCnSxQ",
  "key7": "fT3y8mx2DyyGoEg1VAKLZCL8EZETPEiA8uKvrSVsZVFDewYrVqNALmvzcd46kNXNoyMsWv3BE394B86CmGkSWAi",
  "key8": "wPRc1ZAH8sq8CBeopq1Tufd5YrJKfQPCQHvtTEG68bsQPNdixH83hgbvzTLEgXQ9dq9KmSF1iMSKETDq4jQXchF",
  "key9": "5d58ZSeaTmN8ukJHYpaquXcuehRowaQ2RZNmJWxecAwJV7uRuhv43RwxQwzUANBARFwAYi293FEFFYc3DkyXZ1Hs",
  "key10": "Noreex7obuH2Wb3dA76JY1rKiD2DTWFYEihwzggpBxn87qQwwxF9GugXfRY2dwFBQf37yqMhihKLqqx2vVwgMpN",
  "key11": "4nXtT8zDDgkMFHRtwByNcD8P8hiBof5RYtkYhQwtQfBsNB8GFrmoZzmUkqJGeE3ENhBTz5DgDvURTrU58riNTB66",
  "key12": "5dEjWAauArLSJBGEdrsPSRokNqk9vdizZnmc1t7t2VCBe9fscMVH4hvr1GNtALr9AYSJVkR96j56m6uy5YDvG6sw",
  "key13": "McCVK7E3BRaxZMKjRW83z3dM4SiPKyNsVcGpSG8AEcgGwjKvVgA2GMm2S2X3KFJ4h3P8FWY1ZbKDgaAA1d72aSr",
  "key14": "4bUV9nDVjWr42iAFt6tjZS9DiGKDemv9LsJzoUE4hMk2vrA1rbZPGyUyrNhaVzCwJoGfmaVAqR9M3FQacZYp9CG8",
  "key15": "2XnSsShyGtgUNa9CUmd4MJ7ogKN9d2iwm9DCCzuPqR9SSsToXZVKU2zaWANBoBBRt7vivv6WbNkGXZodnZ9hU8Dj",
  "key16": "3pMSFwD2rFCNvxTVVTUtubycTyu7zUnGz9qkyDuy1Z1pdBrGbc9nJEdvhzui4ddbP25KjRsUvLmAtrxwnYafqeex",
  "key17": "yvZFiVnajgRUABDGBpcqsooPTBj8Pt6aGWBcEEvczY7tVdymp4PznFGiv22NbAder3v4KJzo6ZJQVCLDseBQ5Z6",
  "key18": "3D9H2VbXgRA77BtvD9tHgRv5aL6GhJxbjeaY59CGfghBaqbSpjFvPzQ1BpuLjsPtZ6DPG8kcKhnur5Li3gnGqZZr",
  "key19": "4L9dmeGg1R4dXowzWqA2Nqb5TJVYmooGZZ6iPHeKQQW9GjvM8frKt3Czyb2Hr8woZ6cff3Ri8eB2D6YppucJ54kh",
  "key20": "67p2zcHsrYccDu2ZnGGq8CN1tzNxQNqVEK41UtFSgPF5o79Gx9kKevxyyZJ5HKsWRrgd4LWD624FfBDZ7zYBkbkJ",
  "key21": "5pMg923WYtTMQ2rKzXvwaYb29gYrcHBpJDxKR7wtJ2W2fdJBzB8GZYA1AM59dVRmQ6cnFwntkdQq8r2Ps4qaT46m",
  "key22": "41vNKKfRqovprBiE37ZjDjfbyjkhFBRoPtX8DEY8i2hFSECjFt3ArYJTqgPfS29TsEDAsAUd74RdBEkEqUw9Jpq9",
  "key23": "dJPRWBvDaf89Gs4iErFjPoGbHNw8NWQqNN2HGT4GcySwuiC6WQeusnzGsasTLhLReqZy7bCyKVKMvRNf7uo9rYG",
  "key24": "9hJvfe4rH5XDsSq2Gi5zYsYw1oePu4Krw7GAYPNP3rBtDC3hYmeRWidTDJxroEBXRGHTG9goio8HFFQA2V83aeA",
  "key25": "2YEh1TGmFhtdx7UnXDuzfpKSMrW6Ai6HEXM5zvMsmtru58F1YAqWmjcaYQSKnhr29iZQwyNKz3rC1ac9WvavrXtL"
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
