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
    "3yuTueymL9icDbRXDTTq28rYuJYMHeDTbVSuFUMwPJcp8kj8jbte6a66DodzXGNjx7eXseVbsS4CKwd71vuKQPHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VWmG8LzriNpj3f4pKnmEPatkXzdmjsddP5kJLWbwy2XBg4EB4UCGfMnwQ9nHvRyiayjRSorbUNjqRDHStgPaTBn",
  "key1": "R2agk4GkDdUJY9ob4ESeCoZfp8cvUorVMvMe2Wy8yfCGTY4sGNjP7RSgN6JywkeY7arSq6TJFDfEfjwAFXDLtBh",
  "key2": "389gh6KT4MUxFXwgjjzWCFv8HUKda6UKq2oDnWU1KzYxZD7Kutf9se1c23M1LNoCWDSDahksi8z1HxFwm76jKWTa",
  "key3": "2LgRqFhguNFedbNCkThkr6GbANzhLcYsW11M8GjytDu8vwHsFziDkjyyhMhRKW2rYH6pDQQSjZDBLa4US1CCJt6M",
  "key4": "3CVaDbv9LtEVTryPYpA9N4n4ros9W8kgyUs9HoEWjRyt6AQLxFERNBtYjiwpQHjJds6PGe65jMZQqQpV31LQ8Pq8",
  "key5": "2vWk15BQdHyB4NSjkcpq4tTHjpEy7XQUoYyW5Fu7yM4wb74cEdCZ1RxydJgm5fq61c54aHx4R9YwhhzH9uBAcknZ",
  "key6": "4kB2asHWhZLQHUvuoVh2s8nj9kePVGvzDdV2VULBSbKTUftMBLLygaqKeoHWmGKXwqNcteBv9wN4gUzqa3tSWHXT",
  "key7": "3qawuBe1N6THPPnvHAVf8LuZL4jevhizH3MjiE1Qhdn6WS9Vjv3w8uSBZTUk3t7GBTUJ9FmbmYbbViRAyeeXRGs1",
  "key8": "2gP6cwwFtMa8X3cs5qCxLgKK8ysjrvchQFj6HJ7g6zwXFp1LCc2EbhP1M5N2fLo5A7ZLmu8E2SKsqsahSrZyyGtq",
  "key9": "2y5kMo4D1q7zYt5VuB66HYKkjyxekDh9m4oTEzc3WxzgXdCUKouRqs7wfb9mjcz4S98u5JUmYT7r5akzgTYCcba8",
  "key10": "4dNmbpND3WeWSZb9QCmXQoXVLReqRE6KpaBrt8mo4hvDipSFcZeKPBefUe4kxmH9wWURbLVQ2kJZu3KgZLAARoN9",
  "key11": "4GdNV9USZjzdTFfusJia5SFrqnXnpypNuuuTZHNrTw4zdiDtnsBfZopXoFgq6UToN5Hy5Q2fwHmTqmA6yKRunACy",
  "key12": "4iWsr1HuizwodNWEHEQsoWLVqepuYPXDUas3RY8WFDGTkeJUgoimPcRyCA4WJt55Sk9z7pYR4qfsBydkpGQgbdwg",
  "key13": "2FaBpkC68Z5yNrPwEazqvWd16vKLtsax94SXE9DdVErYDCRfdxbbw6y9vbrDoHvDMWkVVa1eJKVfvdHEnbkNkGNj",
  "key14": "5Z1d5XrD8Ri5RzXw2vjXAXqbujzZot4PgZeKmY9AHkQpAfMkVtaYCgYZ4hdPyp3wgBQS5SSe5ruhft3kGwDXAjx7",
  "key15": "5JL7WjDx6Afa527Ld2ctZCVpT3H5TqdVCTgPNy8SrnpyebxvVMFyvgeYC55PxRqQstLx76w7Ke4sGVoxXXYfnxRm",
  "key16": "sgoMxYvqBodEnGAW9wuhzAtD76oWkx7G18PGipT8jYCyLFMTH7CgJrQRAt8yBepMYb8g2uNWBQHjhAiXpL8WfYE",
  "key17": "26CHFmVt3PuYGnUKzRR49mjW6pVBFUNGHkf58rt5gnWSdxLznGrx7xTQFVFmXGtUMDNbBuw91hwjY8Y8PYQwkxbK",
  "key18": "4M6QrKbGasr4Fmo9mUWBBdRtDScm1u1ZzErpP99xJkRFf8tTJ6YNeqRNZLYDC5QyBaoUtWwVEx1Tw47rwhn8Act2",
  "key19": "2wFc7Q2TJwYmdFBP4pXJ13mWfL1rKYvWwaQCnzS95p9ZYkRyfrtx9U9C1SadT6Cw5qdL4MBa6VR927JE8152yRM3",
  "key20": "3tA7iqQ8B5DXnDaeYEMsCC29LQZPjpZXwTeSLJYn7fKPGmtS3xBUvJGFpUvumQeSLKgq7bd39ic517NkreBbpPH3",
  "key21": "5bf3Nxgy3Jyp659w6KzfnfJN6AkZsDFne3qotjY9faTLatHZczp5kx3YabZQXGwuYB4h1wmxh51VtKGQcztYfvec",
  "key22": "26h242EiwUnwj9nRciBuhZ7jyz1iWFB3PBxwjpi4DuV65YVp1CB2JTidTfsqqNq8AbpRsjdp2xfELvrkCupaqPy5",
  "key23": "24xLWD4sLZANUoSQQ99DjcdmxqXNaJ71TAkGPiZEcpkfGskCdhd4ZbnNP8e8W3UhxWvsVyZRitHaWQxJAgUhtpKG",
  "key24": "5a2nmD4GAzqLofQKty1ZU2h46UiLa9wSSGDo1Kq2rcUFrSd1ocmg9zQhknPfbrYM3hVXKACSFYPDxjxZD83qRqwp"
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
