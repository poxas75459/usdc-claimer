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
    "rxPNggugRyi1mJNbgzk87kMqWHBpjQwF9DYqDJ6rA1UcCteZgN8u2tVGHX2r6TfA9rqy2BNnSGkpkiPF6BcLvto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nyMfQ6BLf7doRC6sa6mbtYPRKdRfyE2KhKxYhdbkETDqHcweKrKh1F59b2bu4d8LmvGGtQE1EQw4oTJxMwBJUcL",
  "key1": "5uQtCWyyohcedLcKoNE2BtapZjM3omsPqFMQdxuDjMTibRrbTJEJpRyca9a4pzmD3qAVeXMSHvTChWy7QDgXgFkr",
  "key2": "2PKskJoAvGRsQXhv6916HnyibH1gA3tZcrJKGGj3nnDpGfTHR3RkCW4jfB7TPhh6sRNnnDdSidJdsJjow4L3ftNX",
  "key3": "2TiCJ87KbPHM46ifLX1iBvDrdALsN6y7amcQk94bqZjWQFmzQKzgsFrkAv5pDcbgPNC1t7jdf5jGPgzQJS9r7xsU",
  "key4": "5cZ2zSNSKtgSKjQwVYgRUgqSDNSrDiaGPGXf2TZuZzsvdpWzLm8TEnUDUHSsdHn3yPetRUJ77yQEeWgXUfFdB7Xj",
  "key5": "3Riv2GtiwEREj76vfbSLnyjXHHwKSM1tvrvp6Ro8ZhxmvhzNYFxsGz2eBaLCk4xquTj49nBj2zK2BE71fNzSYjtp",
  "key6": "357hNgXX1KQekzXRZMsBhE4xDQVWeCjRLbRAe21MRF8d8pEcDRJB3nZe3vBvcyrmHhUd42X9GsiyKqVzQKR99gNv",
  "key7": "4m1Mdsnqt8SQF5o1kphVZ9wGYvAtp5AHvA1BefgLruWDXiq5jXJY4aJuZ5URPg8f4fnYppR6o2bmTVhEXYeHQz5f",
  "key8": "2RDM6Y9PwvpWCV5j9VmsZ8PUKmocPBYidpvbjUmNVVcF7oGvyiNDpbdhhJPxKi1x6PqUsjfgSnfo2fxKZXyztKHk",
  "key9": "32WJkz1uqSZLcKctHEscKifFj8HBnzLf8DRsAuciJxJxEbKGC62dgkymhPhvKgkLXucE3fyJoLBdJF6yhG1T1sdm",
  "key10": "5szzHXovMT7XXcJATxVhs6qBA5Bfo5qpxCuBEPGYvjyZbFTzFbaudKUqZZC7FM1jnjPNYc1kzgTmVG7n8u8Yfi5K",
  "key11": "2SwK9rGcwaARCDbCeyTwzGfPPrtnBD2QG88M4i9Zhez4YndvLxhFT3wLovVkBfeHmnrHFAbPAUUBUimcQZYu5zka",
  "key12": "2xLodJxJkJBh1scyLZjcT2uE1frcdK7dpaVJyXGEkPBXhsnfoeJWxtj5QM9UpoWygcAfzVJ4Vo2CZujsqaR1pUuZ",
  "key13": "5ygP92AJTXDSd2F3yPuDK98isdi4t4kkr4GSYxdkXr71MMBkjbhms3QBYFKKKWpFbgq4bmsWYiNaQQih8EQXbJYn",
  "key14": "27ypKnf59DgUyFf3AysZtSGzg3cSXLbsN3ztrDSXNDJ33wcvG632ptfQewtgqfA5CtjaApnS4KEF2UhuB5XRC7Aq",
  "key15": "4Y78rtZLTChz6nqWQkyiZzrj3KgxhHqTGCSyLowZSmWDUyboZK5C8tETihkCkJk2wvQLrtViHFXerQvkc4o1f8Pe",
  "key16": "2ucT5vVNFTbL8MuyeBXU6seE4S2atgHBzyeLhh9chifcQui6xwsnASqDtzzN39C96cbyjXJLasDo2duFkDvK7tWC",
  "key17": "rsWGCJtcayGQBPJaEqjsJcrPeiPrgW6RMMtCnTSfiYXcmn31ZJf3A6dnWvwZKYCqDjj9wXmHLSv34JAoy7nL4Eg",
  "key18": "2N4rmnns6dp1YmrLQ5F95RSUhZNLCEJxaAGjzsXJwEHV6ABRmEzYkpd4sm8VXhhGxTWSntHwrcfHLxpR1F34N1ru",
  "key19": "5oE9QyKrBdXHq2BxdzYbRcMUHYAMKXgi2K5KZowuvvcFszhY8TujiimyMNZqYgP8pYAEiURBXvLJMyMS6VcAhRHc",
  "key20": "7Rgn2ZcUL8kPzg8Ggc5krFgh9Zvi19kYU5dV4Z7dwBRmWCfK56JQ7aXdgwohF9ttsCg1N87izoyooafxzUT83d3",
  "key21": "3CF7r7g18nNwNW5zWvtHQxHAY2CTyzyHsWVyhk5REoTjpCFnCMiBbDeESha2EmiN6EDAvxWYac2JQJge2HrAFXiK",
  "key22": "3ZzXmxYVW6yLqzenEdjQTvJGkNwmSuhakuuySG2cP4DXrp989nNpNEgktoAGApmbWBE3iBzZxBmqpC6RzzoTzbTy",
  "key23": "3f2Y4WR7XprYwFtL22o9U95rCi8wffjjNiKYXaSjNG61YSDd2WiRKiz7b5Jp7UuCANDKzifJKDYgfxXiTvQYHjR6",
  "key24": "4pQ5Z8hEjTDAy1xTeeRM3RPk5TaPZBAWVeuvTmsUAXBxhedFX3c9GBM6q4qx1Kwg6Muup5qGaEwZHTpsHXJUDduh",
  "key25": "5ovvkJVbAiRGY8rV3FUJzKmTsdBe3xHtSm8rcFDgnpq1qw7u8NKUJTD73rQZT6eHv38kwxsRDsgS4gCfuaqyiH4b",
  "key26": "2hB7jfhfqNBd6iy6CtEMtxPsHYPHFBqmctgQ7NDCy2gxsJDCCjxTyh5ktnTjwcbGJCRPVdR323CU5EtwHbjBUAjH",
  "key27": "2X92dRHCapViR2qXPSUr1krFdUyyUyKu6iKLiihgsNMxmEFmqAHz7g8T5ywuYgkHPWAyQfAUmLMVyzDEVyYjmVUA",
  "key28": "2eiqoWUikCnv2q8SkfNBdLL9XSPFyaC7DRWpi4domY635nZjpNeWzeQEsqmg336ynQS3186rDuP7g1PLt643praB",
  "key29": "9yE8KCnETd4wQtca6sDFv1bGKvTAA8G69JMMa7CfWbe1ybFM8To4xseirHqXu4W8QEAc1w5RqFWM8NKonWx9Gnz",
  "key30": "PPBGd9Kx2io8YYVwRxXjrbPMXuJNV1AUoDhnq4hayJ4A3d63XGHoJ3JGmadCYBKqgivHhxNFWBLwYBvkBUkkXKJ",
  "key31": "2LHoJYWjQXU3LXZuXtXXyJPQuZ37fNqJPMf9w7BPun8bXTnSkYQcHPCzkR6iubJFEtK7hGAGea44XTeVbZAZ2sDk",
  "key32": "2993Bf8GEr5WAXAPbQoGs6okUhkWZCNzScd3jow7QDqwdxTiMjtggA3Lnx38XSN9Q6sSuogZN8RBLWTDyGDc9sDf",
  "key33": "651agM8FiW2f2yfYv5P8tEyb6ZHoruq1bWKoMYR2tNZahwNp42ozbSjgCyyqcTsUT5GLjKq5Pdi1ZvpvhUfdCt1t",
  "key34": "4CYDoicACQZWsgkXcijUoJX7W5MT6dRsXQNhhbgKSQbAVZLhQvMrbrMewTYesJAiCqgJCegDWSVfrCub5Vr8EyPt",
  "key35": "2jHBHbpsdGydjVsHJ8KhjM7UJdVzrP3LngVH1XFsLiy47nxYp9br6fB2Zq2GrKnxCMdVfyaJ7x3X4MdB44VnVNMK",
  "key36": "3upx5AwdhHjCDm9UAxkgkPxLngeaak6cdXiPLcM5D97JPo6KgzxyFCnPwQrj9p5sGxCUsakqiTv7EUEE4JnkWGcy",
  "key37": "NsopKWVN3mWamYcFTKSc5X4ZdQtPrfzNMFMjERz1etGFeWT36AwUHLQrpsoDYdnCCUeUJ5RNVDPernPTKoMNEzA"
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
