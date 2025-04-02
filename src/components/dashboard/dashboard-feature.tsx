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
    "5UXJ93iDrVeNVQDPUSV4N3869LVZ3uWUdehp4jeG266pcTYuwpQimqJuMhyHyuJkuR7VSYCgnPBiNW78WCKBmdp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31y1jaDgrzHp7oGqCYjNBD29HfSKEo3YDaFoJowFQUBrrNQCo4tpBR72Sy1DtMshMTMsNhUQSjMe16wACsodJbeQ",
  "key1": "24DNgdKumUVgmXVgNXXrMZU7LvG7W3ePCyQjrXMxqSNcZmLTjN9XvugK9krcZmgpB5ga7ffRDbPYo6gRQqYWDDc1",
  "key2": "fmF5wzKRJZ9SFDGwJupddJEeFJRqhHULv3v9b2FCo64cMNRTCD5KLuuKTnD2bvXimg31gq56uWDn4cJeV5Zbg6d",
  "key3": "2DXyaDQ5FWTiw6etLf1XBLTiZ9EQX8ptMm2hT5M1weP6bz9QvBdXpJdkj7BBj1y5xQ6aS6ynHufUGt4hwewuzvax",
  "key4": "2rCovofsozVEHM8N1tUzczpbEMMc2vimuKvRo85GZnAbk82cQVZzm9Zno97Gy1nsP7tVpghKYi8jBuJgNnqVAeQK",
  "key5": "65Qx5AC1pk16rd1WMfJMh2Y75C48Es9VurPofHUL6hVUVtrjtsL6VAEfS4ekEab1GUu8s66TNKeZPLsWGG3PKYMe",
  "key6": "3XEmxEv1NZDQuV4zK2T3cu7Gx6h8tK3XWjj1gMh2WsTfBhc5a4TyDr4wyExEHhrqdzj3xVUwHhCwHdBRRbt7JAZf",
  "key7": "62fx16bxYAjN5pWJfPNB7hruLvJUPJyqff5Ae6Zzu5nJf9RL4HqcnQcXmYChyqyjh9a1SN9jVmsruzVtmgTmZXcY",
  "key8": "hR3JY2b3En1atGgysuBYyjuwKBoqzrNsBrpSTJtcQS5CgLRLk3GvRxDWkceeUTqcNq2ziYEpWTy7ozWeaaxwvUo",
  "key9": "5DhUQ2ctYt1P7ZTUpnNwEZjViPyU7fsyN2rMZZxuhRrMhGWCScPJqg65x4v4kF7xNCoFpFWKKEhy6RbCAxQFrArd",
  "key10": "4FM48zR2QyuCuW99izEyYA3B9A62uDadCfCv28p6BWyU2jFrt2SRg5TnSwbsiuHvv6NophYBRqBLGPo3heEz9cze",
  "key11": "3K63YkqbdaZfyzF68ojEtU8HVAZ4vGhtA4KaYcTp4PtTiwSH64cgy41HTPdhSftSRRSGWe6HXUhNDWnhfmUUxFMU",
  "key12": "3sieU4wvXAocHHbF3aCbiK4k4nf1ULRwrmf2QDZ1jYJTYD4P72akVnYDtZMDAbDdogXw1ALtmEzAfjkhMqG8RFAs",
  "key13": "4efAqU85YN8SzK2MBmQ4pMprBdVQNLK5dzkfA5SMANpcnTB9xRa2gbgkUDbHuWTMcnWkF4i5BiaTtmpBWL3e1FUh",
  "key14": "4bfT9czBgNJecL2qaWXhBrs7fh5Srs5RSkAg8dK35m5RwSNHpHqtcuKrXifkL747743v7MxH7q6BPVn1j4pRHfhJ",
  "key15": "2SpX1vG2qqDkdbEiWu1ZcjYtRkZhmQeTAB9gVRz3vEFrxNpMpA7PFpAny4dvT4Wxbgx4vVkVKixDJGTJJCbfCU4i",
  "key16": "26EBTmAGph1gZnr6kKX32VAPxee1vYy8E7f6EUe9RHgBnEWpge7QAijcSvpqiJacFfWfB9m9xxfiM2xCwhWd9G5Y",
  "key17": "4Wb56SiXzqEmdzUqvAnSrSWwuHu49jGitHoburVy9DX4rtukLvpUzLPLicV4kLKuUpvUF4b9zEXKYGK2fEmDKbek",
  "key18": "5ALyomnEcN84vg1LoXmecVSeMnZf1RUXDPRa68WcEtV84YWDFcaD5hpjnrYckTE7CuhR6yvcf5avKyun2kvgpifB",
  "key19": "5vDpA8vSEdef9N8rHck1idvuGTV9RkLb9FUaEu4QrHMJxqxMdY6UoPzQDKnMtYpu7n8WtY4ueBUPVTEvkCFTbGwG",
  "key20": "3vMWJwfWs4XxoDksorUXee4R4JUk9GiH1KPkFpAeUXfjC369UWNc897pBNwQWu4vgi7mPR6jYGBmYSkvTCNHQiCM",
  "key21": "tPgy7NuyfuNc4dZ3kUmxyH8Pv5odrKNXUo5KB6E71WyPNaz1DUK5zCRB1bzQUGe8Y4xqLciEMaf5yB1WVhbQGNz",
  "key22": "632DwHa6Rh5vzcLfYHSNfANBTuLRxECqcviTV1krxfMh1rcEtM5mWy8oGw6BcTFvP5DxxWH9JetxniYyVpGJErJ7",
  "key23": "2BAoiJNqjU5gbHXsJQkEaHpNWEdkS68WNHGvvHfymjoDbU2fXxsCpG9AQ18Vq6AZYKMrrqpqsJPSrLfHmkhuC3jH",
  "key24": "56WbGdgH3ctkPYt8B8KKZrMhRrgm52TgWAZ3uE72D64tm4vZ8RymDcVbTQSpAhdmaP5mBbQMpVZaD7gXYwyfGiWa",
  "key25": "4WSY1iADy14NVGiNmbiGMae9qTE5tD7fnKoPW15LcchBkhGXHgvrx1SHEc5qrT3q8xNCu3dvKMbry1hgiA43jTJp",
  "key26": "3A6dnVTQRA2kvjQ3eSDTacj45qK9FA5BghiQogrdcuU7BDVPSin8diwyuS1UNpcREsZ1AKekiHigbgsQMQe4CQN3",
  "key27": "2Z8uDUUZAkbV4moac2N2KMtX7ZKd8ytcBLim7wWQxethEZGCESqSDsFSQm8nTbJwCk1KMwpV7PJ31PWyQuzd16uQ",
  "key28": "pPrC5qA2SQNYCrtFamjTovEtYuK9eSC7TjGNq1ZXiGHPnLRfNZQK8TVtZ89HDKDvZDg8VQoCAK29qwCEHg98ooJ"
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
