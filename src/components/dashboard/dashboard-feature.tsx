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
    "51kFuCC8tEEnZPCZAnagg1BvLHjyT3UgjKtW5ovszFPwSw3at5tkWfjpVsqcPLFyKGg6imKCUiCwT3B8AbueX7Y1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zHyUL3Qi4M7kmAy5wDhSoRGjY5RE7BTkrojhc6KnL9q7kr2yoN918Enn8oun95dSQeY132jbftsHD3P9rtiMFzT",
  "key1": "5AmcH7adRCuUNLoWPWNccnoXmaMbHAsdA4xnDDkqJabeskfgmDq9vk6kVGxkCFjzbwE51h4QqYUW3JHbaD77hFpZ",
  "key2": "3jZxyFrgYRvJzMSve9ZVcgaaYHL8witivG35fbkJcqYnCbyqB7nohWmKPVmc6hib2G4TGSQzdJAiiyXqH9B5o4La",
  "key3": "58Gg3KyZjsCUbqw1vTymZmD4Cw2RasYuDXiRiBuGeEZrtTRPkwDPtn7iLMaYdPxPkUxgVTH83hhKsx3XdKP4RKMD",
  "key4": "mmYemXW3T5ss7dBSAn8hRKhaPTRJbdPZHdXckEanBPhTPwuxUEUDK8HEUcVYfaNc7XBGE8GiUqW61LJ8ev6F6oQ",
  "key5": "5WJg5yrs2fFeHFvDung4w3CEEjpWeS5kntxw8Dhhao4BSpF3VvXCDCjX6Eh81s3LjmwDs7T8ZBYbZS3MgpyuwAXD",
  "key6": "2qipNNti4mJvdkwxhG7iSqJhuM2YFvFvaXfpwwaxcysdQ3Rontw2gwT1baAj5AkqDSoa1DbQ1LunQEEwUGnWrjhe",
  "key7": "319hZJXGPdqWsvxgKSSppTAomo7j9LSjnm7txUGNQvVCuwKRMqe8kBBy1X5x5ccVVVqGV1o3TaL2ghYr9xwiDeNA",
  "key8": "4mN7fef8PA9vbuprGbFFidL7tXazVPP6EoHag8qBVf89jVNnLm9eA1gw9nknV4VEPfs3J5X4QtHqMxNhw5F4zmoh",
  "key9": "56XaGf3Ay3w3K29xJPQg8WAFYK6CxtjSAiuhfB2UKJVzKiVu8iyi6xMbKrPSB2E7FwkJCU3vaXAdXgtVCW2jvN9q",
  "key10": "2MHtLb7YPNSywhP8fH4q2y9Wu3NSxXxTdFFQ4SdYT5dYSx9TtQiJq8eEAy6XXmnZUSHYLQ5GJ4cBnq26EX4HYRMj",
  "key11": "4JaqgSJLJBV8cKU4cm9MymgxVn3WVS8m6XooVcN5aNJyTSQcdLA8iaLjX73FVYpsMPhTikfTtdGbGqxiLx3vsFMy",
  "key12": "55KorSuwRHeUEGogi2UTZYLhAT9gMymnMzJPEjHP3zywB4P22kFjYsD3uP4qpPAccPjJcjL6D6uafRVfxJkazeii",
  "key13": "2wZ9DphwPFwtnYvuE6DNyMPLfB1QW2d73NHZ2XcFGABGrWQvbNdA5xpJhbNpRu2NGDgbFNW4zKL2mg7coGXdTmm1",
  "key14": "6CB2DuhRtPFfbm8exNLfcyqg6vYfHghAPezWew4uEjBkcThthz5EVqZ6V97TdHSZRqZRszfGzy5KiXrQ9iQyHPf",
  "key15": "4Z76DXmAeJcDuajLBfhvabMC2HvtZSA7WGhsugSnt2p74NMYkNdBKyjM6JKX3z6foNQtgepCJrc9hPQcQCxky5Lj",
  "key16": "64qDusPDebAiuyqWsF1TFtFyt5VAhoT4ttjC5ey4S48Pq739L4sE4b1Q91bMtBXf42yg1asrHu7vKfQeMZFrbSey",
  "key17": "3oPmzt4gxT28MJX4T6Ct1WNXknCGsi3NBDEvSVAjQ2Sm1RyDRhae5ofjQ78HxpFPtuWLESH8346LmKhqNoQj6c6W",
  "key18": "4Dd3jFxQtGWSjmR7KGrXYjdsi5WunDy6y66PCLRSWgd38n1zqzCaFLoUGJbZ6GG8NnzTNFTkyPtGSjKC3JE1Hnsv",
  "key19": "64CUfAhbvgGWJwGf6q9YuMuC9oKYAPPL5YqRRkqDpNR4WguxorR7AXsS7BQ4pG8wdpisyQEmt2WqYETWdUsBBn57",
  "key20": "3oaE9BW4ktUT4PEEh7gQ5bhi5EZca6eHcYNipm3ZLL9ctvTMJoa9ksJvbihJXM7nCxYX5KbZhNvFWBcKkjck2qAd",
  "key21": "jffZLTviarsArzHccvR7wuGXkm51i8dvTyQMNY5JG2KU6SehhqGKSbehtjXWhCtMkneHNtTuoK9a6T6zAhUPotN",
  "key22": "4qvv7P3Q8sH6QZDu6u8maCUeS8FM5p3LNneAHrMH6hyzMZCHf3j3Fm3kbiANfhZdMxQDXwwjQ9152yuewiU6t9uF",
  "key23": "46JUqbLRxuKfF29GoA9VsGJWkiCgQBbWVabAbV4nNRFponKTxa19MW2x31MQMLLgNVidLWZHNFGPoJcUeyGQzCQK",
  "key24": "2s1pjzNrn4tMWaWPDTdzBXB3hG3QXVbvit4mrVHKzYpCLSmKJfj8SE4WqtwPaPBb2c1pCLRnK42gREgCagh5ZvxW",
  "key25": "25QMNdrRkY2tU6oMG9XoJKuJyuByVzep2aLcsZXjwpTvuE7z1JpE48TMMhjHipgXDthmowSQXaozMSr3D43oovfY",
  "key26": "3kh9e6LMZm8VTi11AetT6Q1DRPm8x5gxy63F7MxZvVyPviDgUt236wvEopBHx4cPVFRwD2ZqJccJhjiJByhN99H9",
  "key27": "DP4SLTmg6bk7N4gJoQtmyQHw5yymSp2Bn6b3KVDva99pZZNTh2Q7cx4TLWNQBZfunZSEeqjSUNssfniedKyzzBR",
  "key28": "2BAUi8KazXX4AXYmuKAkWQgjoTyKE8KVSBivHj693viakj3FEBzhNLFYqrgBXKDbBG9trNvHtrVjakRA2xwH4RRb"
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
