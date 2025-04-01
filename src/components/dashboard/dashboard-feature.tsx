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
    "3Y6cLjDyNrQ15eGvpSQjhRTuWFsW65Nf9ugNmiwsh6v5bDhQ76fodiZuqbPsNXTkJu5BSfprnBeTxNXXomnVAva8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KMHsbAX5mY24FQTVFtmNWBXu5RiuWQh2UF4XoWDbiAxYgNxRLY46MV9drzB6voTkJVcUFLVcL4CyTNYLX14TmFU",
  "key1": "3WVedPRHWX34iHSFofkmRvrGDjJND4wVFRrwkmNVe7cfkDxvBwqKjEUDg6MbLBBRW8y4AA6Jw8yYHgC2yw2KfFvL",
  "key2": "4uWVwYxZ7X93BNQovxMrVk9YAqQH5775r1HG7fM4GN8WDwFuPAy4TeEXbJkQ5qhgPxJ7jhpc2HmG92Z6Qb8PbqcW",
  "key3": "28e9mGqRA6ZjzFyzRCJ66AskHBVc5LeDRY8U1HDSa7PDZ6adT8VNJ86HEgfTfQDjyKtN6VDnUvxU9Q8q1vZFVA5p",
  "key4": "4chYPee2AsWyqiLCvwCiDwtpPAszcdQ6i8Sk2A7GuQt5iTy2rNZNhpagpv85NDAn4QYodz7pbrGoqi256teuqR39",
  "key5": "2MZu7kaApgrU5C1ozgPyp7WFA8ZnTP44D4JtiUJWqUK4Y7Jo6FqnM5pDpZtJzMk9YC7LcDvt72HSTnmELwDHCZQ5",
  "key6": "2cnAUyBCyKbftAaVYYCibwk7aecxh39weCsALVJtX5dKrTjvi8cgrkEZwLq4F2jLG1GqcBGEyYvXYy6YPpYR5n71",
  "key7": "nQt5WqoF2KuE32BUn6JESiUfXWZCjSHv84z8BVsMnbHYmhbQuMonhDDsmq6ttjBsYBG7W233qnJHwjRBJA2NcAL",
  "key8": "61goCAw5jD1okrzzXVeDmneENt7hJ2XxeJ2o37FvtK8K4JJqdTrLEXapP4WbygBsqmjuhmbutGauMGi17NEY3MHK",
  "key9": "5ePUxeg44xb9D1AFU1fWKej6EmccF1WhT949H9mrWJpPLsQ3rYbpF8LH6HrFWFpRZwa4fPVqBmXK3DUP4nqetByd",
  "key10": "3ZCvjNGKbFCGyALN3T6DjDYL4P4LWsD2ops4F9dq4NhCbbGJFKfYn1EaPTZUPMwz7rpdK33LjmeJ1KFSBc9CQjES",
  "key11": "4BB2hH4ejopYUTGNmH2iJ5YefwAzpJyxipt9Bvs9HhXYhdc8zbonncBaZwVpaR3ZaM2n68rgNSvG45Kz4yLUWYPL",
  "key12": "3aPeZC1jizkpKQWG4SjrLSrKFwVmJMGUqftyctnPSWqDV3c6Ek9BdBbd6FdXv67noscQbwPtvpx9Ze8nhBLx5GL5",
  "key13": "5Vt9fZdhPo2vb7AfgF3WWZJNUKpnjbCyzFMBipc9ppNgiQLsHKZ8r87PfAQ4gHAorgD5rWEDmT6WSEXGBcRpC35C",
  "key14": "3fjB5fvsrAmC5RtoXzJeeuxmP8L5pzmAuHmXX33H5rbMXYJEdD3bGzFAsj1FFkTFU7P2KjBdyrQPxtLTFH7D11b5",
  "key15": "3RsdMMgg3DB2sdNo1WLAmd12BXqeput6RB55bDQ2HpxvPPvRmbDNmbAaTAKJSQKGQ9hyAfaBieVQ8j2N1fZTqCG",
  "key16": "2u7PUpYbeDjPCu3e3Qp7KgEeQ8JgUye6FjYDaHrf8bRrj1pLUF8Z7fr5TvjktTSA9ikEMMXmRxK4Qo9diA31tY8X",
  "key17": "5nQstmaUZt6UGHuVyMFpUziFRRdTb9tKP5qj8MQD1oA6adkntLsReG5iJX99cbryahmnXbgq6PTADtfiHKf4wAVo",
  "key18": "2oTcrWRYGgJkExuoWkQyicjjiDW42kaN4XaBY2M81AMGA1EUnbim5Xw7VNQ1vW8LcmoR7s61vuj2tu7S3svy5aFw",
  "key19": "23xNaanNe7vtw8KsYACT7bAb6uzbW3iytmchcFokjxvUPHhJR43nvsxMm6JMMAEFMxxquxnqZAa19nJATCEze3Gg",
  "key20": "4Hh8ivQKJhVZWXEBUwvNmp3piosjMo26Yi34rZxdxtBN78xfmcj8cYgPk1oUBZzDBJkLGYg2XPjAreYkG1sN1fsq",
  "key21": "2FTMMTCzXfJ1BsyEzLuD9Jy5jhBKDCAJ4We4GFUaJ98Aq2WG7Px7NK51qYic98878ygcWCVDM5JJBG4x4nS9S5C4",
  "key22": "4b1Eqh2ykXa5wvfenVTu9u5ctkbLtpDPfQpMyU3eAhDZJ1XcJLujBjgwZDmxxNnEZ66jFt6q6V5FoqC8DM7TuEBD",
  "key23": "2BcE2KCmhVakfGeoZWCnXu3NLeXsxPfw9oycmhBebXZF7hRL9qVemkJZyS39Yzh522nEt2N19Cx2SzBQiRW3HVKc",
  "key24": "4MY1F7XoM35icFVPFgKqS9hm6VieT8odB854dxxTfZmTznqh8WTk1Dt5EnBPSGpJiiqxVzTPKc5oKN1AXFXB24fr",
  "key25": "3Cs2fMEHN9okpEZ3puMmcH49TSPYKq4rW7SRA4D41CHkxbn2a56G35zgUv6ABLGaxDatvzL6ZkdN8aAHW8aMuH7j"
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
