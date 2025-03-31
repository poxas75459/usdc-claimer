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
    "5eDqheJHjZuy4cGFFG6EFADa9WU4RUHR1HvSUukmmir1983fqLPAjp7umoNBFnE7MNsw2jNhwxkKPTmi6deQqYei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oJUK9Y67vcQe2tbn71aBiS19mqbJkAthpaexCmNF2gD7LGJ1RyGyDy7YHUqbfyojEB4ragDNuvjkt4ckuYtTxJ3",
  "key1": "5iiQb8DW5Ao8L1qDAZUxfGdB95SGFd5X2gY76W5ju6gn5cMhsYTzQvNi5fuwhHTWmKAjH4pkYcw8BJhEXcoNkaGg",
  "key2": "4wnsTkuVKk3Jykj5acJXP3Wfm6U8UH2A7yjbSs7r4c5FvKM71TSCqnNMZEP6tPxGstCf8CP1Cdoz9S5LrfHX1Jt6",
  "key3": "3AN339jug4Bwq5zzbPUDxeUV2CuaxyiZL1ZxjBoisNWBZ9hWsh9CCiwPjYqn8XjkjZwiYekzV1AaFYocStjxdB19",
  "key4": "RuwsjiiP8Md5E6qGo37ujQVxGhjf48Y15Fd4Gkc7UCemiGUQNbFWH2in85GiMfC2DA1pKYpifkxrhrxfkyweppc",
  "key5": "3eVcVwbgeSXCcfzp5EbDBVCdLH83qgkbTMsPGLVMxh9Xf1A49jL153KB9iZ75naqHrVmYJFPGse11GQENjLmtUoP",
  "key6": "4f3UJbsx4cRiztbK55ekLtoaDGnTN4CvTjz63yHD8ZekGo4TsB6jYroX7Dy9TV87wDgro9nKCZqsofKsDeaiYeQj",
  "key7": "2xoHr2pVPCGYoiFdwEDQL5Fqug66Q5VNfWALj9cQDsgyxipnWCR1Y5cnYfCwJPV9jYfEu1QJaVLapRw52eu9CPuw",
  "key8": "SaibkX8HEJbLohHvckkVLzxaJ5BKYttYE8kutaMgT6z1CNDSBuVn3Qyqup52ERrC5C4icHwdEQmqmkAqrk2nhjj",
  "key9": "243xQy2gR4RhtqSakhCKyfeZoUQEaY4ncu463mnWzycWQrSYAJNHSQa944MgPSoF6ukGYUed6AU2xsQzyAbnfM3N",
  "key10": "5ajMYJ5KejChhtFM3E8rZ9nMviXMXhsbHpwCCT77zXHVA4BcyuA8V1a6AHDCURGQvKSRYHVEzfxBamM581BLwuDz",
  "key11": "2M2T7ps697355GpAYgu7TN582SW8BZBeWgst6KgN9U59y5AkkGXBetYneJ3AnRnusgDFJybWD7majtKJYyezMzBZ",
  "key12": "33KTpqepeCgPgu7EPwW9pfEePvDQr7ZVBY1KXK4XYpJ5c5Akxj1eTqyhTXjrKuayvB2n6NSc4A8ADm9HhUQKiQxp",
  "key13": "4sfUGDxxNhLj8FJqBGoneDuxg8pEcrXjqB8iGAC78CUs3PvYEUukam3UoHk8RvkKAkkx8m8HeH4eNq1uMJdecQVR",
  "key14": "58Xmzz3fdmZxgzCr8W6RzNwaHhcHxHitstBSBdF3zPmfdKJBbRg1aSpbuguit55YNxRZD9Xi6nFB3R5artzacKQ6",
  "key15": "2yFPsZb2Vu9uiNNcz1kDeZ2ugotC6U7r1aDYxQcauwPDypFxRxUHDaPeSB9NVp1XUBcFLCHjbjHRdJ6pLphuX4Dj",
  "key16": "62qTZBCuTAbAcaoR7x1NRedYQLqPoMY2xHdBy9kHeKd7oYPPLfdD4Hb28Nn3zJ91gB7VSk7DpVBFDJ65TbUmh3wx",
  "key17": "3WcBqvAagHDc8bRKX3Yum1ojffe8RpwWqgiU7moaH4QzcazviAcK1Mv1pegoBrmj9W3vMJwknYVqpQNADsTiMo2f",
  "key18": "26coZtFCV2Zv1KU8PTNAkzwuL4qiL1eWBQHmXBcsEgFcwTRcwMiNgh7381MEVfJNLPnNGGAT9e488d6F1U1sXM9k",
  "key19": "2rc5NTqdXqGK4E8t6pUVsDurYQne4etj69ivcY8DxR7Sh4ZPpvYb3bQ3TpYC1achJ2QJAaNfKEsoKDxtpRVYdjzv",
  "key20": "4EKJ4WQXy8fGAbuVAMJrSsLktL5tNYWUaskEnxpZPeWk7E3ifxt5d4Und7eVVX7MF8HNWtf2ngjy1rCfaCudZdUG",
  "key21": "2mR9Aq9Sh3jtxFeigLQz3TvAFHGdhbBCzizw7SmWoDLrKr7xviHHL34fVjT3HieoxhdGbPbJpqVUjpjpCRxvaG2u",
  "key22": "4WeyYjDcDmQqaZv6k7GiEDKaWTsLzF7WZzj2pUVF3isSaAVietQcVqkbDgzSHG4jdMiLBBFkw7fBCDCbFt8EgDRQ",
  "key23": "3wibGE2iF84QSxBtUuJu45esbjtPXX3bhcNK5XRKKgRPCYi6ketdKr8x1uZoLwQPDFCrG3jBYyLXTEii65zq2zsp",
  "key24": "3EwTiQQGzZWM2Bxa4MCQbwXBQGerYmogXeyDw5HXYtyPqnqjzfec6TtYrCKqecVJtEDkT9KsoomvkUpYaZjrt4DL",
  "key25": "2zFtcvm3AJLaf6pQawxih3E7uMzAnu5hCDp66s3ZS6AAYqjCwmomYXkHTu99p1iBFCCGaAmpWSBRwG5t3rNVc3X",
  "key26": "3nmQ6enrmj1wbQ8N7DPGhMvLUtL4Qwwo78aGWyvKn2uUbxLMBchjyUJuJ3WGH6ZYu1RXvzB5vU3Paxvq4erzN9gG",
  "key27": "2pHBLmUrDSgJBvxYk8153PeFZU2BQ8v9MHyseBFYZnnQ8ESmwLJZ24JKBgidPh4WiBLLZ1nCYAh7U5AY7vKRJe4Y"
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
