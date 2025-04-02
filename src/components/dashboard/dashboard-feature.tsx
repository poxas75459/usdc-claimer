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
    "5RZ1BiksWp7yS1Uji7pDC1YZoneNDGU7Nx529ACBpdb8zuMA9Te4ZtQ3pTi7mNUgv2JyK6xs2EMRPi9zqTHm8BTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VW9Ya1tDbTLcCDT9Kss2QE8sHePR88z1Dodk6MFkkEDt9QT4S91AGmm84Z9HDvZYbHVXEdVw9CvZkdmcctNG4d1",
  "key1": "3sdiwDgPBg1MfsFxqLHKTdW7NVK4FPKaCEmyDNmRuJfQ7TLMgBkFdTpVZ77sBPspBzBmHgnnRpvH4XX9baMWWEL1",
  "key2": "2YzKSSikKQYodqfMWbt8PkyYxULganMaUDAMbhUC3bSxLta1rnm5q9ptwv8GYpNLLZSQRuDJNDSehmdxqUXneuPT",
  "key3": "4bXo4FuswKmbKyyKY998x2ndgEg2329WBcRSH9aWVW8J9Yke7noSz45JBrP7mWAnpGxMpvXm5Q7dfjEXykpGBGha",
  "key4": "3SoU8GLc9UaFee2Qz6sHXoyWr4aW8hDTgvPT4uGxjRNG1NbFuvSAqHE3w4pa7SpXCHdozQk781ZwSfhPc1mFLqqW",
  "key5": "3YTc56ExXxkN8xuFrJEst3x9zmhMWUkC32DmYEkxDVAshtKD7H9sbYMNxFWToBaQ9qU4GipPTjvwDUbC4Zg35ca8",
  "key6": "3riUvmJpkQCR4bkCTifiJpc5DwEQNxPGjVQ65RsNfKR6sd9kPE7fp9xA9nMSpm7UK7ahwBsefCMWpiSTi7JQGUoe",
  "key7": "5JEbQUPrYDqWSURQqL7zK6UZ3CqQWrBzrW8tFNVp6fvMFenPNfPR7Boj5unq52buYyomzQLmwR4BeaNyGb2AkzXY",
  "key8": "2k9u4zvKPh2Kz26LaV8oj6cC5spGKBFHxtdJ4UwaRvTHScnapw2MzYCLY6Fs4NEiPDkJGC8C8oDVpVDVaxX84Jsq",
  "key9": "3KeXs6hdszefYBVS24Mw9gZdiJD4rFFbN6V1k4x8dRbVUfzLVUaCDjPqiiYXoBTGsSbXtR2vWqusQJf877mxivxQ",
  "key10": "5CDsn1ddZWYvTBbauAHvFqJ8NbXoCrB6FfdsMQZ69TnspzJ8y2SgaTqTdRV8vh8gtE94ZgeMNwMj6qhEUgwARMuz",
  "key11": "37EPMW7NJzNuQbg5MxLvZNvDi1zbGnrJxdfjw9urKR9hrcXyacjmbD7r5YDdS5APX94gMjUeoVwwsDCaaPE1578d",
  "key12": "28w2YBMjF8KouwjKqNSJZ5NBZ6TQ7Z6BNgXqeZUc2MWNHbm3eU9hJHyC7Gp8i8q8VHVDDdaozMR5UUijqdk6TtKR",
  "key13": "uFMPwwVVCBtYTAQh3XPWwvDF9Xq51s18AMGGZDXtyvffrCPjVZcuEfKEgzeTyjwqznoTYf35X1iepPmPVLVzV2h",
  "key14": "27Eo8bgNC7FtVPXtoj3ryv2z5dNBCHXfSGFeBprXgmTjDs65RPWHfRtV6AvnKNdvHunkqaYZkn6ZapNy1YFYRKRF",
  "key15": "2vRVBKyh9ZN1S9UQ24916o38nkrft8jdZJpbREEm5KgqvHWzuDiPoSC5M3ohr73EdMZMTixPCp9jrTNXWSNXRVZM",
  "key16": "eaVPgZpscXaXZ6QWkvoqfxEEmoXhEL1fihnWv3ZS3tEjUnPgrhSM4a9kaDsSgSSU747GCsaXq8zjs1zNrVfh1ro",
  "key17": "2Lu28zqmAmCezB2er3ms7kWD78VmA88BnzyiidZvkw8pTd568ynVp2gCGNkF6FGuJMwJKbgY2F2NEuu8BKdWCVrR",
  "key18": "2Rym2uqRMjgktVS5JCTx7Tf5fu8u5Q2mHhNQcbDYbn4hh5iMjRuTqtgaSidUE6phKpRavQXK6x3AV634xuMzD7so",
  "key19": "4gqjhqnBdR8UzqUkqP1tedcqRZuLt9Aq2LULBL6ho7MjPtyRyTCKgFXjED1WRKwRRWmwtGfAum1btJ7cuwqa8VVq",
  "key20": "CE8JSzmEzGdvpFc7MDU7aVGieQJUkMSv52YgSppCuJ1AXJo3pyovQR83XU2Bo9WPNS7unS1PmqoqXCwcyi9c3g4",
  "key21": "2vfNa6x3AiHyjCDvvrjT7mvJpyJQwG2JZt4rWJfoeb15MKYgpQVDdUbKfEEmCntLcrAMPoTb16dFqJAkPEJTbGcW",
  "key22": "3dkVGtQF6Ld3ArMMtgHC9FjiRAu6RGqAJs87i4PGA3Ju3sKndXLemLNd3Q6Kv92BBrnGaGFcg81t2GvyYLwkrGPJ",
  "key23": "rswFPVv7q3VAEDPpWyKy8fCTBENGiXKz8Vg1Y6qhiGZ8iDiCLHRpkK4t2ph2ZHrfz6QBdALAdfd1v4BUBvHGQPb",
  "key24": "2GdcmybKio8JT9Mr1C3u4p9xm48MjA4rMrZw9NcHtw48vazQYs9SC4YJtXzNDUm3Areu18piq3EHcJZgRz5wFHei",
  "key25": "2V258KhEP25F6NBLQGPikCbfSMhTNdG63DpgShNsKos5HUTGnLYLz6Yv7jqQXfs837m6MCmA8bQZYsrh3aHR7Ejn"
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
