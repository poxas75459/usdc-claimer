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
    "RtENiHjQYHWvjfR6ckKiF5bvQcvUF11GkG1DzuaKjToCp39AdaPjQJe1Xt39jiYQ74BVkWczj3QbhfvuBBQDoNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X4yM2EEtAhZcHWxQAgoqSjCBNpBiDd2PVNfuN1zQ5SwKM6pwBaPHmYi2i29hBHBXuWJcqApreT7PpevkuempBwm",
  "key1": "39Uz2j4uc2S7ULEFdBsYguJV6bwsMzvKdS3xovccNEDwnTg2KTVAyCT2pfduB93W42D49YJqVwP7x7h2wksXc1px",
  "key2": "2PDGiGZb3Pweku1jRZYkmUYStm4z58UNz8B6hYaQnNmV3wpM2hviESgU3NGuC2wd7tpz4ysU87EHPGisEZfThG2U",
  "key3": "3UEkrDej2gRsmAmMYdGeCUFgwcnGYK4iRYkxNPsgva3mRn8h6JCS9rAgS7i13oxEbCKwLE4a6rpm7KdXmSdCMX45",
  "key4": "5GHBrQFmd64TBcAgbUgL5ETeaXBvk7YdoRNZSeDEpzNeU8Keh4JwFZFxxnUJUxgZSF49osnxeqLAVT2j9e5eDKvL",
  "key5": "5wNGjnDE1KSf6GabpZcUJVBEb4BCc8oNoA7Yyz1KZ1W4baoCGnhEw1Rb8kAzzgxASMF97P1Z9U4VHGHLidptf8uD",
  "key6": "4SLSLMjKmqVuFh3TV5EuBkJSm3t5LWvwG5qUySJcTevK4NiM3WWzf2hCCGCtxTZoBjXcMoztjnGfkCpHszDSPzsE",
  "key7": "4dPia3EdPWChbRE7xEEx9z6KygJuGvGu6wUY62aiDXrg3gG6anxqvKvUFzc2RjxBqnnampogGgWU5x98HSrCCRkm",
  "key8": "3ByZ3MHwzurCofZGDQgehFouewPxjCjVs8qNdWgdLDt5NPYh4YVL7ngUm8fnAF1gTkMUtda65j9ac4e937byuyFQ",
  "key9": "4xR417FxCeGyN9TeQrJ8FG7AdXyPxAo2LLZ8iF6uMmTWNDv7W4s33KqYeEg6y7tf2wPsgy2ziG3x877Jye4AN7jg",
  "key10": "vt2CtcBfW9jNfQqNQjXYLbwEeMXC6RMFdy1ejptjPvdqoKo6QY3m4tYRmVLaBMM4s1Pdi4aD2bbnvX4F8ZCgk77",
  "key11": "3pJ8W1JnZTT14h6L6VSoGeTH4pBiH4F6dMQVLQjNCa1hEneR9F3iSVxujGBwquxvpeSdtZFaTD67YNNT3M9gCf5Y",
  "key12": "4BDxSj33jbU6bqBUz198YynvZc3hdEZsthsnegC7oxN3xMHfbDgMxoLDfUbpYpqHaEf97m5Ncq7wFtvqbDhBg7Gj",
  "key13": "5jeMcm8qfqHsd3UbMXQu9XfJhDQEzRkLPHghTwQqdW8SrvacnsdrrBC2aDfMmuP3h9Wd4tAxPibHTuZCB2jykm2s",
  "key14": "2eFSCeUK9fdjjqaeKzGuySdx3F4uMK1yEiyVBD7gPJ3WpdgrhVdbRkAeDumyd45cjmXSThVwAPwVLVEWL72tsCu",
  "key15": "NgLfjotq8ue2gbY8kqmAGw56bCTLoiR1SikERRJvhAD7GGTTofoHdi4M6yHa1WusLWwKfnQe2TRi4QjiXXKBb6L",
  "key16": "3NpB8qYGcabPx29cjwncedpu6srKFGrNK5aJ5Z2Km219vP9Hfbqggb2gxYjp4k4jmKS4RjzpfP7qpTt7tgMjGwFU",
  "key17": "43zSP4xxGFU3g9TMcRh48WrYXqdAGLGsLHFhue7G5ZcvYE1QMeqTVyYNf4gK7TAUEKY1kZd2f1rE8wpJGpVnod1",
  "key18": "61vwaxDAz8AMgbmBQPTd6ygcBWzaFwwp9gL9n6rWdkx5CfQ4w19b2UhuNLBmb3ifY3d7jAxTVgTecJoF7y3NNNBD",
  "key19": "5F82cZQb39GpzbA1a5J1Y2QPndAMterYjmTLohmrE6Mh9oeCQysirvZJp9b4SJG58J9kDhqgBLni5hkKvUihX8EF",
  "key20": "5yzyejTKzELCnwdPnXiGtHUVVUiYoDH7kaYDg1RAjDsZAyqjsHv2RvwPBBfEijQMQWjjXQJ45uF2FNhunped9oyC",
  "key21": "49RTrjCXxZneCSZbowVYYHKmpC8nPhW1NBpT6XHvEdc9P9CD2toxmsPCgyiN6rEXiP2qMocwJChgtXs5wJEtPPGs",
  "key22": "5i9tEpCAbQYtM2rdcL3U7SZrpPGydD3nbWDe9o8RuLggCCJ42s9EW1EQ4aKmc3qzc3CCVH9jKc7Hh3DoYAMdtJDx",
  "key23": "2xJastFewgHSacJPf4Wvkve9QdwzbcXxUxY5kuLmAfbnrWVFLjMaS9fqxRvHgehADtRizUY66HtWMQLrXWXt4voW",
  "key24": "3MTXyFY3K83WXvqz9AJFY1g2RqQhVaArqbTLjjdLwYAaBdkzvw6ATn5QwM3sjAj71Z9RxcuVK14hmtfUAHdtwscs",
  "key25": "4togfn55MKqbPCt5PD1vFNvstinRTapQgRPS98caUAXaKKSWf4zawLU89Vy3LqTRmgmijS691sgsA9trB8K7sRo5",
  "key26": "5ejLJxTi3zvHfeGABs9QdmPQPPhxLQdfTvLpyNgFprBeH7aK3JovtEQp21QViwkWyraimXd7aT3b3NRnTAVBC5kr",
  "key27": "4h5KfwB6z8WAobbKMT8DqEMQooSBeGntrPC4wCHotG7CxJfb7u4pF7yjU2LJC8k7CDD8ufLyfFK6zw9ketKbK3n1"
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
