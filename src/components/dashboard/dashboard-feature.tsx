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
    "LwKK2Bv9hxTjsawPCA4eKiCysBkib56ncYhKypWtNShTyZ56aaPdNWSJg1ca9BSEcYPXTSRTWLGTLobPuUtw7MV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zjf5xAcYJm5BuWbsRLy3QfGSFp9JyfoMTZaQgn2NRChAQX4PyysR3dVjfKXjcMWbpNGCkVGNKN8bXJ7edoEu19a",
  "key1": "4yG3cp2jPtQ3ViJU2LR3HMYncdhfh4eeDfmqmMUqriHNuBJ3rf7PtuXhtFJEoh84uvuVps7wmQuuk7oGxZp7B6Uz",
  "key2": "5q5PzMjKJj8uJAYEP6fA2Z7NjFiLeCUoomBKE5rwtB7GMY7ynyo95HvQ8qX9o7BW5mAAqMW4QzqUaWpGs4LNnnAc",
  "key3": "2ZSdmLtxUX8hT9HoxEHN5sk4aCFyDdxm14jxmbVF9xKDkCQeNTCFM3RtUk2JYDvvSGUJtdhrMzxPshCPQ2GGhZob",
  "key4": "5qQoM5Wz7ddtG5vwyzpykm1Rtpb7pPdVFhqcBa98QQd7gY5hCvy7rtiiFMLNJ4NMvCtJLqftWJstVy5Sbq52AKAy",
  "key5": "22nBHeLCJKtFoktJjQccf4CYoYJ1VZaG3KnJgioVV2C4f7hHqKo9EDKhhTqU32c8v68WmWeX6eBPgh31zd6ze3tH",
  "key6": "5DRAKJgn41DPrErFeP3pKF9ZFFmkHCGDgPon7P6cwxeqckciorRsuGbN15UbKotR77zFjo1jjjP4SnFcTm6rZRFe",
  "key7": "24jA4GZxeUXuAhN5YcLJQsb5gguY4u5nM1XFNzCci3z9pjevT85VVF52kgJh7sFtwUuhUtde4AisQmky9SnvZgTt",
  "key8": "37wrZYEZ8rWv5E6aKKyXempRRhusuVSZLCate2VRBMLsVheaiNMkkW6BUedDKBzUF759cqwG2pRAdRHWQY5xPaEm",
  "key9": "2UhL8y5uDdKj5TTyzEUGNUc12sDrgxMsKwL7MsiiZeYyDUphqnAci1MbUmZfHHkcqGoA1y8MgLhxHS6JZ3iLT5Za",
  "key10": "32k54WaBJPC1uoHhVfjjpJDM97Yg1zwGGvMJUJswFYfsUzqZsCn8ofo3TxpxSP3XQbWiyhJiTG2HarFu1W6jJW3h",
  "key11": "pBTnDz2JcjF4nbwvVox2mghih7MLBV5Pfw6V3tCQUdGGa1QpMsAb2PnxXmwn9xbsaABbiDmZmXxYsqoteaDAmLx",
  "key12": "4xjz5Hp7x5FHVGoMEzw3PtGrLRmiND8soajBq6UWCGKo1PB1bDA1upxxPxnCqGVPG8Q613zyEGEfFFRx7dkkiUJr",
  "key13": "5Dt9MTC199r3cz17gj5258aX9s75kfFRpvbNweYsk7hducwNFUHjQZpRrY1p9JRrnHngCWDYDydZo7Z9bye4p9iq",
  "key14": "zaPVTHsdntDmJtfD93NuMbT3hZPh8usvvqe6aMKJgvwN3RE2indGqMLSjhycVa1jm46E3MQH5p2QtZypNSZcNRe",
  "key15": "4NQPigMu47bKhdnywLrLpCt7VGdUuyGSQFepBh7qFzf9atKpdrdKfLkxL5cSBdCzjspSjYVa5ARmp1kYTi7frrCT",
  "key16": "5jYAeDhMUeTbDP5yFTTKbPLTkwDDEopwks9BAvDmaCHH4ohurPtujwjU3M2zAqUszC2cqEaRcELVAH91j4DTpf5E",
  "key17": "3aQzysparhK37w5zXYgoW214ffp6nF4FfmBQK4gwvnvo7fmVGCLb3sg3LwPmj4r73edTEuMKbSPfoPkLtQsWUTyY",
  "key18": "4hKZoYRWa6YdmMTvWAVr9A6S7rVwrsgdgjBW4ctDsJmVZQJJgMQF3jyD5Vkef7Yut8KmQV1Y8RUyPo1ibQvykFx1",
  "key19": "3zJ2EqdbvsRE3MuZa4dcB2QJcsXmxzh59c8DtZ1H3K8hwVT1Uwf64z2FBKYNNpvxs8WRN9Z8LGD4C7cRjZxUYEeo",
  "key20": "4gioFf5wiQGt6TrYC2WJNUR8p6vxQoRzBEfYdB1askLGoLe9aq5QkQAHph1KCXcbjiYEf3ctyN6fBoQysj1YGXmB",
  "key21": "QQ4nvcFV36rNMS3abQGMnRxRn9kuBD7AUo3T5R3W2X1zKXS9djSzufkTdfrfN4LibR3V2WrJKmzuwb13Zw2xQMT",
  "key22": "2izzB3oiJ9CwDARC8LaSfpV1YmE535SYX17Z47SUBDNYkxUhENjFaHV3wxSdT84fW35sZmNnskJftF1UJ93dx55",
  "key23": "CFk3NBp88TN1ee7D4kFp5qjzwF2vwEc6oW2vsurwvKnvJp9s1EcVfttLN7WYbiWDe5fixqxCUepTd16z4KYudjH",
  "key24": "4CvocPoPc1qYeY1zgerrt4vrTmc1rn3jECBHorgVHq5VnDaDLRVE9hXQEi6KGkNywDrPerXKB6DKMJZwY2dVvca8",
  "key25": "2Kz29dU8yBSyGNNdGLqqjQhGjTYEAX1Ki783oyyJiHE33pAvtoaCyxwsxk4iigv2eL1Yf7bmFsrN27uZLrebFJdo"
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
