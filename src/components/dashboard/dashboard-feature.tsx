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
    "3fEc41zBxjtAv4YGeXtiZ7HyaAzQZgAEru3yo4wb4qTudh4eEvYSGW5LUP1Du2TdCbm6BDETkxyyJieSvg9iXDmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66G6o3gyn76e3gtdRNtR5tAFp2MWtbLPKnrxKJpByi1YmRtWg7XFnrJcrhthZz6VanZiJAdMdsaUEYg6KcBRxLr9",
  "key1": "2ZhUzyZ1niec7VqJMvuQ5eQNtvTTSoK8CTLLnW4JG8ZdTTNrTmdtyPDyd1oA4rNYNJGi6q52LCLfyxcKn1u9KdQM",
  "key2": "2i5drzFtFBcBRFkVfw9rkzyEYJLjgkWNzk8PzFsY4yTU2wX6C1Q5FHXjGp2Tuprmcvgei3QMJ89diWuut6QLq68r",
  "key3": "PTMeUt92ishkFihE29sJTzmetVsGvnZBMHHviKUXcpbKw5NzKjzr3WARSrF1dVne8VMaPz7nQnnkvoF3jtF2DK6",
  "key4": "5YZQzLakZ6VhuhvLTHNHX8YFo7RTmySS43bLf5bDyt2vKX9mAjLYFnFkDzArPyWJoD5RCoLp26BbKMvZvJAWPyXF",
  "key5": "62oEpPFEqhJKmLNrecf4RHmZZZLubN4M5cqsBMnVvvDzcnNoZtpaoVo8xRebRwydhSNCB5BszyV7B98M4QtrNoY",
  "key6": "2eqzdc4bSKJBUiFCtWceVjMaa1iY4GDvrBpAQKH7WkoK5jMNCvckn3W1roXZ9oTJH9KcBNugbKo6wQsr4ifKG4Ki",
  "key7": "Bd1BDvYbuf1BTLkWs7Y3BVPqB8rFYe5EsUrWHY4CfrzC9oifa2SwS3xdzGxURtRQLrUk3yPmjJhHBBWzmufPhvz",
  "key8": "2qctqGyeQHMmFraFYWf4wPPGDh4DanDf9AUZMy1n9Kb1WWwgQRLcVeQDGmnGBh3ucdn9pGJfMAA5nvYtuag4hBpv",
  "key9": "udG2CA59WT5HxbeznVPtAahgcUHmf2L3mpLBEbhGG491wrVByYjr3pzshwfaNQtcBZ77hLUA1ZMW5hDWe9gF9D4",
  "key10": "2kf7Eu8MqaQRV6WM6NK6Sgw81UzVpBvcdSLH7gWcPKxsQoW3yyyoMNAJXiQRXnKi5qCXxt2YarJj6JgBUitenBC1",
  "key11": "4r9xgdh7818ojgaksxRUeLaqRKd6JyW1i6Y3bsNCgBFfGYUWo3Dc2SEVbALpd9PYwFvGDFqupqNE85PpoKHoTN2M",
  "key12": "5mVR5e2VXMVV4ya6WAs7ivQVCnNNsb2qfcGk5HGjiNWJZwXUL9oSEznRrEXdsQbursCuawPfG2R5ZQRpBjNBuAEq",
  "key13": "4a5q99ZTccWXcnPFSjNGrn7NxgW8M9PPsyuoyNknaA2hJESX3PX4DLG67WGe7tHguS2UYmjNQsVE6GHb7ZMzKFSj",
  "key14": "3kRYtAVgKV82QcLT2HFn4LaHYWaxr7vZhGnb6tGy8h4Ax6N3VQFaR1FHiMe1QnfypV5JHwZ5EoViCJKSDtonepmf",
  "key15": "47SX39YTtvFveY5ZGtRNPpJ8DZy4o2kyZXsh52FtuMenaBpv9CcydUeJe2p87jmMUvycgagPiYVB6EZXwEqmhmd4",
  "key16": "2DEFCv32AMvNKMwdnLoyrG9zTFCXrbbqw7fCgKcwCRZKnstbN4UuNtLqrucg4hrxqwKwMyWAdC2B1Sobntzp5f8r",
  "key17": "3f9ZgAQ6n5vPhk58K9uPMY9TjWHzWBceadFPcveqxxS8zb4nCNWwqfKzDzaf7LjfjCD6vBDKqNHHRegHehpEMRBa",
  "key18": "2LH2qz9r6JvgvmK4xVPh8gHcJTFckQVRggrRcw479SLR9LqvnLdc8rd2EnmoSKQUHZzRXzTjsRYRVYQdu6tgAhu7",
  "key19": "5tbmQRYcw4wA4cphQYfD36TepFMd38uFEZa6VNaCaedVfv2D2h3MZACncvLAK88hM18497egxbYBXUVa1JieM7Eq",
  "key20": "4zCfZJGrUiDVm4cf1RKEesCwo2xyjE5JnfiZqre1mHYzRdT97YWvF8rb9U55BHGHnmJpw2LjhkWUXC4VDTFgfavh",
  "key21": "3jVG1RTRwD4nyGP6mFAPUctqmm1nbsSxfavEtoPB5HYQKjxwFyDtHF4EriGQTxWLU8NWCY7ZfER6fBFQtKByXwnW",
  "key22": "5VLQ3dJfXLvtShXvsd9hiiuS2QmRcSPFAJxTCBcBJCc9mft2AoazBhBif3zPNEzpHKhBAtiq8h2TsFvLPn8g8NAA",
  "key23": "64pxBgNDVRxLkYRGw3v99qMwvWdmDA9XEemZn6fQ5gCTVhVAE7MEXDBQMUz5eYmvYeLuaea9Km7f5AV5Vn4gMjDT",
  "key24": "2KHT4Y4JEKFejZ5Emq8A1GqqJXsVCYQccWPvvtP3zy5Vz61Zfr71Ecbc9nSKhDBbXGB1J69t9QE8Vk84XZiDZ7RA",
  "key25": "47S6zKrSi6EKaLUfBX4KSz9Ht98jmKjrnhQvTGgGaW9pxwZgwTHTozJHW5qnGc8wcCemHURiCgUzX55mPS2jPnau",
  "key26": "5QHKuhhJSrg2yi15DzHTu8K86pryVka2xkpxP5iD1AaSvYUJ5i4Jds4sbmZUXhNoMhy5BXuNeTJMTCqNiCPjjdeo",
  "key27": "5Ai7eNZnRrBa1ShSwVSJgKdwCURCjXXkpFCXsrw4Frbx8pLXGjp4R94mEJPbih5Mpv44UeuzWySiRgzAvmsYrZxC",
  "key28": "2eFKnYUjQMVoJ6yMpKEHcfSU5rJwh7Rh7tR6bBfPVPxJa2aLEBwYXqngPgJLDQ1e8CenhqAGF1J9YxXKJddockPx",
  "key29": "5c8xFmxWKjaAgURK2hPFj9ZwrAYUmJt22qHN4fxFzeCgE7zRySzc8z3tfDBFJmobMJRzAYWHkjLDSbjoPK3DUG9J",
  "key30": "4cf1oQsdrQDKs1iHL6w25pgnFLDzhqRUPvBnWK6TU7B6SGS9u9XiBULJmRmMSxHTacZ6dVFaYMaHHTQAy5egsMQ1",
  "key31": "2y5sEguSSuZ53kVCF6sAnq6iabLgV6MwgyoUxLQLrS1wfMrMN9pdpq7wwke9LkKExs3qzH7pHDJym6RuohzEeXo7",
  "key32": "2vkzgNUNY6T5FYVjzhxj4mQxyxcPgen387i3SermAg5kUpMGMRA25jyqoDxwQ4vKXueJLbzdBpBh3RMsYMKBeNZL",
  "key33": "3ndewdUMkQ8Nvr6Si4YXhVFYpPG8kJLidXGAX2fSf2QS9hnNh5ghyvUzMvxTCkAgpkNCS5zaG2jhUiH9BCcszLha",
  "key34": "4Gxz7sKrVog1DcPXHmjc2F4ZjXPULSvYDzR3aNHZdRNwQjisx6RnPXdgPQ2vueXmQBYdqURjhDzvqdZ7uqHFTswG"
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
