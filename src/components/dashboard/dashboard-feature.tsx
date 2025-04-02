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
    "nza2ikRcfHz6pK359q9F8foeXmcMhsvg67C6i1U2WwxvQ9LFcfZALrPJVVcsQatVavXGepssdVdnqrhujcvyyCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p9iChV8d4seun2KNNYAyknudWyk3RVrd25wys16RFk69PMxw2YSYk9cKH3HNkJiJqFLctp8iCqauLd7RycNdr2n",
  "key1": "565A5gLb5ejyG6gXSK5SeQKUwCgkS8MD7NryuPywDiTUuZhiQ1djRTQy3A3tNJAK7rBF8NUURX19Gx6yoaEXpi5L",
  "key2": "5cXbXJWKKCNZH5yEHp5JLwqeTYue8NFY1tmrdHBTiywwMk5w4NNTq8b9knTs5vPYVqfJgkKinH3d2VH9VouKeSS3",
  "key3": "4jGeo2PMPmHzYg5qZvtT1oER4weAY81uAmcqoL3i1RKMFYBYRroCQzPVa912QFLz48ZzejQWpgHxUReHdSbc71EX",
  "key4": "5PZKx2heiAQqsZCHwLmiK7mfBqhTvCdG5og1Q95kM1neKxYEycX4e67cjGkehyxyisYsoVb7qsScxVK8pLpBd9kq",
  "key5": "5Jfz7Wnbm4rVBjAiyAfghjWqsrsdYL2VQP4qX6GQC6NRBZFv4Pdw2LfQvknFPJ4HWW3ru7sLUpgayoMRTR6DGpki",
  "key6": "5mZXk8MdLdfRZVttrJtCm7VXGBHDuiRKGUu84stBcmJpmMEeuTPsMh7bbUoyrh3TaWQ3UhqnFAotyS9mSgTjKtd4",
  "key7": "HW4P9KfLp6SURRLthxMhQSmTFDaMyuGYBmQW1MDZZCCmUACbHkt1E1rpYWNwsrh7WRARwHPzKS5UQEf9Kxg7d6D",
  "key8": "AKG9qYuTDS3DDMTb3Bpp4R3ZVPnfFjkaMtgjS1dwg7bKZMwkAHviG7Dg8ZNgnUm2JLbPQn6Y4VYEfcXdGZC7M1i",
  "key9": "2jQyGxUqZqwPKSzoVdxQrteH1QUtW6pGCpyqhdknWZfdGUAd3hZZvSrnHf4roa58s4DgMNLjDQavZM1u37GxRKpB",
  "key10": "5Q2qdwGAzjVsNt2Z1Nf3Vney1wa5Bu3K4Vpt7H2Wn3PXK6HtLgBQpSbaHQSsfdxw3RcL72H7pd4LHWrbFH9Maj2C",
  "key11": "3wd4u2ZPQNdgVeG3zLco3C8zFeB5NnkQaUYyvA6ivotXCHmSvr4cGHtP8zLRxJcBFazkNaXxX61HNnhLuKm3DjTL",
  "key12": "564RDvQeW7KQ8HWaJtjsddAsxDTt9tQHyz8iBzN1uNygaeXyFkvzWykUmsfi9mtWfwVHVQuKb7GP5jb9uzrEBoFz",
  "key13": "2zYymV3p1x2TxenJWMGz8VB6pTrY4CL485kmrwodpYxNR2HwhzZ9B1soDMesZQH4VY7RhvKjTPUmtQGgqXpd63Hi",
  "key14": "2qniMB8PhkQ5MfiuiLHo3VcRU94hD1oCGSUHHTXV9fXJP8KHWjep2W3dx89V6wS6LNL1CM684tgNHQq4zxycgyAd",
  "key15": "5VXX2ALepHh7rsJTrN8S1XhpBYCPXehFT83ZwxMAtk2JBrJnCbdwCPMSbiMcosgSLPELTFvfoRRo2uTDwG5c4ZCT",
  "key16": "3Vj4DLisfKvtuoukLkK36aVKQNh1FkMFJqfE2qwSupLLFavftCAydjZJki6BUbirPnvfSoeey6zu4mXvTrwbYr2a",
  "key17": "32Yp1jVnCArrVRgMTvEaz8g3DcMa3jXAhHJSyvjTizCKGh7DzVS5L7civydnJpAY7B4uM2BoexnB2GLgKfwJTwGj",
  "key18": "3ve16Xkr5q5wQMm8u2ebhMZXwwbMA3efrEoYR7ieBP92Fb5sXm9shdoMrVetr3qca9rNif7bN2Uc4v1mXTG4CjZr",
  "key19": "5mhBeKu6rC1ktt2xA2s1mTVkSC86McxYBcuDZajYhfGTY72rFr8M1nhp5FtQ5HRvDXUS1p3vLXGMqSvpHWHzRqVd",
  "key20": "64uEbbqGeE7mpK4ZVTzteqK8dsMYiEvQ8qf8BdMtTjrs4Heo31AkfgiugDSY1RaQ84WUUbR1DDd8MGohcPaUyhUf",
  "key21": "5SoqvqHVofU7WZqXfEDa6nQpPc4Ux4VxEg7EAFK2weHGEKZXoaRwmGQkz4DYtVzLs8MHBkKKnc1fRt9bqgpY1Tya",
  "key22": "otPZf6kVmvy7Sqrwy8Y4jNP5F9aA1tULw31TebrwtEdoQQ7u4H9qB2Dk9iFv1ys97bR9T7Xs925jZKKN2Ysj6tF",
  "key23": "3HzpqsvnCt3bJ4j47YWF1WpJJG1eigEfE6e8onmG2nYDqmZRfNKrPufYYQxXWeHC8LrYK5D7eyFAeFPLeWzXaqgF",
  "key24": "5cS47TKHdVo1N6TYmq8ckUxgHEfLcvVRHM1dbCdgmud4mNJYruFzyJn7M3BSYCTxUUAUoHpCHzTpBSkec6FrW2yX",
  "key25": "5ZfGQSWN4t2FwND2tmnx3XRmYFhFXuN4yj9FdpLV4sHzSvz56AbrSD2b8yYkWNP7DpKBU6PkR1MZvpitUNJrcVbn",
  "key26": "3b2NwnL6m4wMxw8eLhUJndX6RNVKLJM4K51HKFTdiKKLxzo4gPTD5DftMwGaA1NRWQ46YBsWCtzy7HnDeELoX2cY",
  "key27": "5Q54u2CaZf5JkoZtvQh9aVBmbULcWKauktFUztzVHNfakrZmykq8VHbuyrUqkwYXuZacE7k6JYznwB6nSxAH39st",
  "key28": "3XwWK1zZ6igMCZNQd2gJqTWqyc14iZH7p1MRwF1fJDXwVQeYXfBj9haaKXYsBcfMRBUMpNukwSywnhBxHQoHKyjD",
  "key29": "4D9iN5toqkA7wYwsGpeFmJW9MAgJfDbbmo6fhf86zGMsho9tqsK9pYWTM9usDR8gVWudqPRJagtKNdPaZpdx65eP"
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
