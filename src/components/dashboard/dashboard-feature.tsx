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
    "4KNkrxFMcvLuAg3yQy8nPVjbgZezo3D8Bs9KtUgWxHBQvucms2vmC1tgcQN6FM9DrP6XguJA8JJPcG6eWaEAACUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hKFsjWxs9EqjXJepfiaacnXYnBMors1PK3Ry45W8YTNanBMyEzcTvuMmrrPVuy7UbM3FmUdTsRtRrq5Xuu6kJ2s",
  "key1": "3YZZJXJKH6HFb8SHaQLsAt6J8u2AmQkUwu7B34Kidb6GT5mCMWqs9Gibn1VdrffyFbCT7UEEjLxfaA2yP41kRrZZ",
  "key2": "viA8Qo4kgNJApu87mZYZpy2wcRRdZQhyotoSFMwWXKuc6kd3inDe8Ko8tJdiEdu7DGBMcwD2nMnDWyp7aDDaR7A",
  "key3": "3vmbpS6a7DmJLxM57VW64jQRMr31GPpXrskLvS3gPzfpj1c8AeY5wjqhhd3UExjxDe86r3s1FrX1AWSLWnnHNTbM",
  "key4": "3eH19LsZHZjYJtAVGJw1QDMNLiWTyRuSoPvkUxZ1sjVNQdoPehqDshNfVTKiFdQz8LEpa2G4roSBwedHmjtmk9UU",
  "key5": "27D6J11ZZg364bM3A8hn9XybcHfzZazCqx5yccJZMqrYeGSyyvpQ1qEdMaxSYmuuxabWfp2oVXVLBv2L1JNMcKC5",
  "key6": "3AWNMXiSaP2i49bRJAyuYaHvSNZGKohzrDGFHGBWMx1PL722ywJfSXA6aujEt4qb33r6cc6crjguJbCLSFZWBwB3",
  "key7": "2BcyM2NVU6Qf6i9pNdjD74Z7MvZJVgMRB7o32UqbjHd4u8HAstAJi9VVm3WaU81F4BF18fzdAqHYY6SaX9oYRMq9",
  "key8": "2EugdrkGKp6urcfMRVVRDUfmzvoHmAZW7KGejBL3UscHi2CezjvUdPy5nVXMP39dt1dW5zoZUF2D2fZqd6CoMbuQ",
  "key9": "5KCAesjfYJ9CytXAfQRKA2xEEmQzKdU1pwmB9EK4YWrEJ3ZXxbhwccGfc3UpEVignsHr4mn1RAuL3siTrE8n5NjV",
  "key10": "2fB6MEU3sc3QQDMLxbTAY8JdzqWavHrwUmCYnUnE2C3R6qd1oiYykL1sv6Ko2w5muT6TqPFTcKK38W99TCnkdFZQ",
  "key11": "56XDw23PnptdZcKS6ZcEuqp8GE8Qqw8cditBdEja3xxvTAcDB4k2KCLKF8aFc2PD8QqswoC3ELQ9G5yD73J1Sudj",
  "key12": "2bVtDRpd9oEaQfYvv1nrAdfpYKXcvoB598Bs6Dme7CNjzaWkUAHPmuAmVie4PU9FMZXxWN7uK8iBTtJ66fvjqNMK",
  "key13": "3DAKr4pXFJH9z2mHwJ3jyWqkZGNGFUXxx42qh2aC4vve4DkCyeALY9DGd2CLiasSRRdBDN2MTeWCNiXGSjnN6CQ5",
  "key14": "DHykZKdmLES5PRr4jAgxvXbQTMK71HCiSnaowzq5B2wEV3ZDRendf2YvVAGbwSmSkz5RVqmafRFCocrZF4NZCGi",
  "key15": "3VWwgA2R5dEtYvav2oA2bnkXoroztHuZLsw4oA4GoLFQysrbiTZknnUYYCg6SqWFNvuEetdEBajah9wBwk8UsBmd",
  "key16": "44Q5HRXNEjeXfuDs7LviVxT3Mkn9qpbkngcKmFHs8rKRsfjnbmKMsFQWwTXjZD9hDCbBhyNK76nPLmj7xbmiduTL",
  "key17": "3zn2QQxM6br7bQK8SsQMuABYyq3ZPbyrQhGUdequYxZqRSV36auS1pk39wVmCs3PnFNudFZUuwM54AQFRGxDStiK",
  "key18": "3JQ9mqUN13usCofR1DrP7P47MpjZBePCjF4eBHtyByiw1vZTCVxYTqSjZWUoy7oZbit99Ru2CRh6UZbDZr31LWK2",
  "key19": "YHAYmjq9NLcZP8nu7cC1i18UG2aYKdR1J9RkhumgfpSXs2SvT1DYSvPP4Rb8MmskRYugRSuxY4d2XmCpo6LUt8U",
  "key20": "s8bN96TYbQcTTqFfnvmM85FzPStsLu32TdxY88PVfrASGuUGCnG9FbBNk2ZLLyodYUYwabCyJbrymGbkjjH11W2",
  "key21": "4JsJxuRGYeBmch6pgK2ui5qyZ37h6vSnAQpSRnJTngrZYTNaNnFeJS3PCKQLq6VAGY9ECz76gbimxFSuEhfRq1Ga",
  "key22": "51tGL1s2EKvkvngUe8NhX32KS9ixXHsjipKeQR3h4ismg6tyi5z3opoqyosTZZZ3tyBpvemrsUiJ1SNxr6EvuXeZ",
  "key23": "4tuiFbHaguwdBkQg6FUWo9DyiPCtpKpawbYgzzJpSvtkL17Cv8XpLoFyvZXJG89bdNJkM3AY9WPTVZfm9gsxffPu",
  "key24": "5U1uRy1tD4QuKJJNisEZR3yJpYV4GkKhnxRFMdFhKXeY7BHjud5AqB1pxFi3vC9LnY6GMcRh33wjuubGmWRPsJL1",
  "key25": "483ucoF7nkxvDye4hJ3Ff8ePWqpeWhmAYKAaXXErTcQF9oDmqgJbLwbyWBVRESA2kLu7NLf2so7jELfdhhkDbEsw",
  "key26": "3wtUm8etPqs1FJMCn2tUMfbRf4AJhqWk5iMmAXFzdcdwizXmPj4yS3fZaWk2pWVZVbDwb1tydbQEmJmUnBnXPVSq",
  "key27": "4iKKrUQLJ8CqmZGbzJ6xwCKiKavMLUcGS1Hxrgrk3U4P2kNNN3ZfSvDWyHhSYyK8sJRyqsThVAMRAGwxJ9GS8f9Q",
  "key28": "4Yuk7KRbT4uQmaVkS2dAheYNwkL7XJkcotoMspvLJZ5Azv4CUn7L4rEEoVKKNCdZWwRFme4oNKkVipVNBwsrSq24",
  "key29": "261NkTvguM3fNCz3Z43Db748u58mWrgU27b2ZBhm7HNTKrG4G551gLqNgP6xN1tAjaMo5E7fHecGpit4iS8RpqCs",
  "key30": "4SzWnCDDgdoBT6Z5UF7sFTbQNYii43EsqggEGXyTqhBkxWdc6W7m9MXxRqLxATZkwd61N25FKiL8iHNzTyLgvFrp"
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
