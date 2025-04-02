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
    "5P9j4DifJ32bVHHmLn1SmUX8WkYm4Mr5HQWD8qrPqAL7kvDsEAa3rh3tALDFJPaXnA4aFwC5kSAc9CuE5dbouihD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mL71beBcttrreUVjwDs73UMFAMCe6ajKgHTWzJ9nzif9SUk7mNn3dnAY6eYD9WPQe3Uf9TjJyCdgDuD8ASpHJHm",
  "key1": "2MRbzZdTvFsx7C3mxPmE6EtZAM5ofb6wVaxHrzrVMHuDhUeqSvSrfSHrS6hqvToSeX3eP1Q6x7AM9NNei5KCqxXT",
  "key2": "2m2LcxERmp4AWwcpNGK6tSfvRnRYgJMqMcxCeA8hHzJCa6d4C22vykjFeovFYgwxPBm8Qq99z94tdRTQJPSzAv5w",
  "key3": "33drv3kWt9Tv4BEEQfhz9Py2ELgfWRf1XGtXQPNZPhNKqZfrV5rEF2smum2MY52AbJt5jVG7jEfPwmJqZsH2b2eR",
  "key4": "2WJMtLHzcpGSgmyewWJdxM2TLWe6cdPzHC5ThjNLy3798UUyuWbVLKwQwBztn75oupXBSZU9TiXs2MHU1PAjSXux",
  "key5": "5cpg8YRscUwcmLwrPYRaXX2FjbQNiq7E3e7e5SHG69DxSxwwi4PgZcRCHChqa3SyJBUkSVQnRMqZoVvZUKXzYXjC",
  "key6": "BBQh8XuJap1wGoz8SQRNv7dqNAc7YxdA9nQHmt7sfqW4AxFWNwtA65THnguw9xVto6bybUsv3Rp6AKpP3ynQDdj",
  "key7": "d2zsAk34irgSNmrBvuefU2XB2ipNA9ozes9AmMV4EpE3hKi9A21Lzf4RLHuKzS2dMXmqv4NsGS4P5p1qWhaBzdj",
  "key8": "5BBVUX4FcvUPXywaS8MtJujLrKpZHEPehMRubGPD8nUMspXfbcp8VRb4s3MsTLrktWhYNYcCZs7YbBe5kJFyMYnh",
  "key9": "2q7FV6rTXdNSEQaxcrMfao7FEHEFH1KwdFbbnd5Q43pqfTuTGMBde4UtY45bNPcABcsL2bpgc2XcsEjMzvrZaooA",
  "key10": "3MFJHbNNR8S1GArpCyEhSEMWY5ybPprMTQRM2cJ8Nb86ZoMAR7D6sPLUUSzH2KhcdFcba6ajUNdtC1EART14VPg",
  "key11": "7Pr55kZtpEtV3Kj8PW3a8Vif9HbPvVSSc2Xo4GoawDFFC2fC5juiKEFGBBmzdMUxbgMXjTo4kjZqJsdx9Ne5c37",
  "key12": "5s8Gjb6fCjZfZkYcdKTAJqX2c1M442h4z9SRhnojpagaKFQJkGmzo8bAsUKbHpDgMuQnqL1WvBT444vXVQEGYzEt",
  "key13": "4x4nPn3cZy6jYvfBgC92c5ru2ZspBEcCLrSqdNAPmDR4qR3ovPCjdSwq4yaJu772fqJEh5Xp9j7gX9ZVJCgocuvq",
  "key14": "9pRBhaNF9YbBcMfgJ9DSEpvi9gBaZTaydFbjgV1hAVMr4KfsTjdgZu25FogBnUnHiFrV44YDKGs6oVHwTk5EeJm",
  "key15": "4w3QhLgmDKUNdMVy97bTgqut2gtUETi6fhgMhFfgGVvQ24WwkeF5R2AoniFRHVy8voaWXNuPq2LzdjTA99eWQp3q",
  "key16": "8PZDkAx1tsRwJBMuVeegRsRjKqtLhqWDshctf2YukW9NfqWwi6FrfWMtDATU6Dw3eA4oeKCRZXf2ixavJMkpuAx",
  "key17": "vnYb13NPowcpESMsuQQzYizQfTsUVYjrt4tuwocGT1nKUezhhXM9dAqAjF1F3MBJF3YJwUB8tVkJjwg1GgkQo7K",
  "key18": "5tsmQASQ9imRPsBsLQBohQHS5GG4ykDdxzdVCTjoS5G4gqSVqsMaZPhKFeCMMGv3hJRYYGxJbg7ndmFQprSsXV5n",
  "key19": "3zTzuviayUfQnSnbFWVdMxTghfsRdb3PyLVehNVotMPahfgYp3rKiH411o576n7RZXtJBwuJ4TBxvWV4Y4EkbsC9",
  "key20": "2gu8E7fnKwcfMzq7qmsV1pd9V37XQB52Jq8eY3iUe1tYjcpeV8Hyp464coAui4HL8pNHJ8Wvq18KQ8UMeLp92oye",
  "key21": "3rw1ES123XSQyip7mZtVBhayxBbsv1k2r6hntLECfc4AU91Sp1BoSMVcfPRCbUib4eRUXqZXdcJztkSyfEWsPegz",
  "key22": "5So1B2c43Q4FTnjebbZPCotexMhaptSkUyPDzG6xhex98wZY6nXYSzDqAjfAQk4j3h5QmYpv486BRvk1Pz46aEiq",
  "key23": "2yzKpJ6zPkD7qYo38QpV24Yq6gMnEzowtuCBdfkF6K72Ev2kW39bmP7jf7iVHm65HWeNc2Z6EgiFSfzQfuWFRrWh",
  "key24": "2CZ55p2EK6hrvSAsehxcqM2iVPm9wvohhAfA8G4ve2aFMT8sPdeQwhj7hq5a5Um6H1wv6URL86F7qugNvQMTzcd2",
  "key25": "5HzZoCCZAdMezeLMjzLUbA8osWjEEYWPZxx3DhnXwUDFu6KnMujhFbssxrVCQmcKdmQQ7xduuwpybxCqeZtqdcvg",
  "key26": "56q1nTgguQVuMYZeDHYBcj4R4NEbgjdRMcTQuvYnZaBJLssTdYJjUQGcLeo2SXU1pXoVERsp9TC16bRTbGF1zm8W",
  "key27": "2aE1xBRdt2wo89wvDCUhWEB6XmSdEdLrWesQzM8Mmc1EnjJ8CeCbxNKdavCNCjQP6Vpx8DwfX2nL5YEfAgtF9Mi3",
  "key28": "5mnd5FfMfC36PXQMuV1etMNFq55i1eXRWvRWbJiAnJYo4CAXgTsDsD3QD4a8xgzAXUx9AfoXcb78FDUHY4PiDJto",
  "key29": "5vu8axUXTL8cmgbGNkPPh8guZ4dKzmZVnaHDLcnAW4oHmsz1id6apXiMy33vkEVY9M1hKYy77nTnYt4MpjAyDr7a",
  "key30": "4mFD2nuC5kARvEEo9DUhpoTCuhPuGiRbAJT2u5VNothcmPFL7pcXaywnnLv5axy1yPVeKJdLT59q6ziYTmHzqY1i",
  "key31": "N69wVgisx5qB8HKpx278ScJRJGEi5WZGt7DZmVFqNeBw1wAz3UassNZv77mhSDtzzuBHxLD6H7h8AbettzSZWAv",
  "key32": "29N7uySFmYNdemSpMbU22JWgDhtG2dCJYLzDsb9ovv1ZSjTwMEcM1EXXoPhcpGht6GCi44ChAuKGJxdYzByWov7H",
  "key33": "55GHbzAo23fTXieT6wVYVGY6uynkSPUYAXp67hEcDQ5KDpxa39KogpRoEjWBycQ5AV8qMnGTyHKmbMqv8TqUNuGW",
  "key34": "5RoAzDybPyVNyLop3iQHC5MCVZChzGMjPBzZtevGGmZsLYxMUdoiL41vNTWpncALTogQep1yyKMPkLFDqRqRNtom",
  "key35": "27Ac9sHrThtVHov5dX5Rh3XgLoRoi8FyTuVzQEmvi43TCZinpAMPHFSfLq1ARbMZmg3sAa11P2b4JMsJM5JPm8Ky",
  "key36": "4nVU9AFvG2AR1qUyt1ZHS4CrMBW26cdEuA7GyJgLih1iAdYCFs1BLA9RLVnchVVjiCnLp76hVCSydwgqpXrNEhFV",
  "key37": "5nSfE4hQ9q33GJR9txR6gcVXyw6XUR7mfsxm1q667Q4yMJJysrqTdkcVRgYHP9qoF4cH7ExFtEeMF7afsojW1V1o",
  "key38": "2E1jmvs7iu2fvmQgUbDBTqoMfFdTzjKLP1VMnV5bZTKsTh5MVnksifNHhhanL7Cju3m57qDDNhJ8UJcioQbm5ED1",
  "key39": "NYacSLT2mRC5pZUXzyAN9fvBfyqtZSvDBMBrzfneYoSr6CxWxJfrywC3fqVBdCcP6pHgoAKhnXWf48fFPHDZPYM"
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
