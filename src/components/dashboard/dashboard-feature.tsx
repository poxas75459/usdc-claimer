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
    "qmamEcrbteURwJm6MsxDgrFfbpk9uZUQPEtbh1qRiAoCXGKQJxazyTHbZWkFV88voNACpAsBqBBGZUqJE7VfBoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BwsWehL6v4Px77DKCycJKFcCpWqc85YWzDbJ8CaZTDo35cu5M4PFBkCVZhyMfBkqSx3k7vf4gfFWvFGQectk6AG",
  "key1": "5UbriSn4X7Pzsn2Vj5ox7URhceuN27RrYiJb19Wqb7C2E1jYD368rHWtbM2BdBhdJnvgMTAnrWeFGViBmXme9eWY",
  "key2": "2Vg6BsHEL29sWD8jufhGE1c5kxKAGhEXEMguJrAastvG5K9bp5qdSVZ7qoop9ge8Q8QmVnMGrZe5pa66T58odKv",
  "key3": "5GYnuS1SxVCC5yGEjFA8JzDiJN1ss2RuUQrDfEGYDPJV4CPHdeFPDt5YtkiU7WFQqkXkpnJFztEMFeU6EuAQ2KJg",
  "key4": "2u85WAGbfC8QuYZGJsjZMu2NXUumozP7r8Ugt64hNdVJH7vJKwyKsGwkQ3oWGBaNeQF6khZcofAAx8W5Xxk2LTzw",
  "key5": "5AYDbppPqhXyKuJUJ4YgyULMEMQ5PJbifknK2xzW48q877j4KzfWBeeUj6Rtc7RhBAmdhPvyj2cDxDAiLEfcjtMN",
  "key6": "3ySsf31pWupuBoB5X79TwTYPXWkxurnWTpTy8JSN2ow38drjHN3HZNa4QGWAP7aCH3sT9UxzpvitVQqnnF9jVKL3",
  "key7": "2BJvM5PRgEM1BCqNsvL2AKd17UR25us6L6MoaaZG2PEn69L7smWNr3Xttrx4TQxg1BQABaRqtbufM4uKovBzMorV",
  "key8": "3t5dvGrLG2FjSPH343gSQZww9rnXMR5pVT11bPnBJWj1Ac11DpfV26tD8aoK1k9acHqKYYXkJpwJpMhF2xg8R1aD",
  "key9": "vu9xvfA1NSbAz9PXesxWiR9TaZzL2gopdGHNKS2MQZ5KUZwqZj2usPUvCP2gDDbEk9atNYkQ3a9w17pbMoFjn4p",
  "key10": "3q6RhwA7iMF1wuPWNS3U94iUTdATPz64SNcjxxkpUovXHMsKYFatz8eY77EQr7UqBq3DfvRwWXAiRuH5aFK4ESRi",
  "key11": "4qVdim6wiQUw9dW9xY6UmFZ4a816iStbvNmVoU3A3jb8nUGkk21xY4vSTZp4W6GR3xBy9BLxWfddMqYnLbcBExw2",
  "key12": "3pL516HcqNTKh5yRhhY3R9pC4CQ7Pqy6Q5fiKq7yfhfrV87aSca4Xn9fYSi8s3PywVD6YjoRSSMQR4rKmjWzwDFc",
  "key13": "3WNP2qwUZeYZBnzGoJKoCxZULkvwoL2rBCHaxob88xT84psq8sfcvWfFk5DzfBbrwqoZ2uyDMCyM5GNCS2FDhdBr",
  "key14": "5TrXuRiHvm459v2cMskCQfHgpKPQUdnp9B9D19nBBNm5HY9E8wfA6m8Zky9AAueXhLkY8C4czgJ8uB6dgQH2Hpav",
  "key15": "U42m1Vc3ozqhPM38sRVcKZcbTf6gUtV1tMATfF1f1kRuAFwRfsouENdfULgJFaFeufXWdot2zBYvGJew6x9cgyg",
  "key16": "5y4tAfNghQ1PFLY9fxnRK9GaApCjzMC7URDEXFPzX1TrhrETsKjBjtt5DkyV5tNbJUVTvFbsAUovgXcvzUCUHwH4",
  "key17": "2BuYEGCj219rmcmgzDvVxhgtrgi44kD14zZLKsWe1M93Eo6Cqo3Dyn6yw5p2G1hh3xmSe8Zc8fggjTV56kd9Jbet",
  "key18": "2JiDk47NN4QMJ1zuiQFHrH57xJkatDkEAcSMKiee28biLNExvExWupwv5gxqaWxit8uR7mPgwLA7m36edFbuGQNQ",
  "key19": "5EgBdjgzYubTDL8rLPQWGJt1TQUCU1SZBQu5fvYCrSTsgd5hbyYPpujNwz7HuwrLEdd4dhyAiZKNyGbfWKaH93xa",
  "key20": "2wZRQ2QSbPNBnnfYw7JTxXtrCBCZrCsCBqwYZQwD1xaWDVQZGNFky7oyepQGhnaffFbG6WkT8CpoJMv8i8MSV6wT",
  "key21": "2JjFGiGvrSFj2DSk9zacTWdnrgMhvRaaeUZxs3vGrJLmW8BjQga4xBjGBDxMDwrxqkE4tTQM9z94BG24kDxcwVX9",
  "key22": "2pNGgqUCtr9UrRwWvADQBdP5oL8usJPUh6PL3CsA3bqtvWUUFcPdJAo1YS7JdhN3PTcGG5cXA8aDWPQ9NLQq8wQV",
  "key23": "2dpaNyCxpqH3b8W48FKVMXoFfrNwNwGEMZVW2EtbUufj5idXFMbQnPBkYzUJoMEMyHUnMExn2LU6hRaciCVZn8hk",
  "key24": "3ABPk82n7d9CLJNQ5M3xUXjkAYqJEegpEvumfvqc82rWq8qNGsPyKPuqWhEnjA77VfDfswavh9gSfpVu6CT2a9Bc",
  "key25": "5mX1sqp2WwZpkq5z6CdSmr7eaf1Pe4uNPo8DQs8Sf92RTbcyAdjNed4BdEEVmP8vEb2zm9WksCCmCaqu8cMidHgX",
  "key26": "3g3dxsRt8AB8ghNPeRkA7bWaXbiLM5MQuXBa5HnWnxqW9iZNpy9Kezak7pMXKNFFd1YDekVjKLjxeF1BZHdEM43S",
  "key27": "3SmtmptA2WFVCDEqpmZMYDae2AFM4eaH9Eonoc2t8y9vUgmLXobWZKmGzrFdZfX3U4pXPcvQxooGwnDTDB7sxCPt",
  "key28": "2h8SxtpUt3JLvi6C14yTBEKsxPsdgFpshJh5p7VENhxk6bWEzdiTGeBbNqvxFtVBJbA5WwRB4R2P4ShN3g9wUGtA",
  "key29": "5o2qRN3aG6QQGa6JWPMuWXXLicPRxMXkeReSMfYRuiG5kuX9ZmLQNds7ot5XBLthcVvMH8EUWTub71Wr5xJgcNdL",
  "key30": "3EP42PvHTpqhFBwoeu8k7Mqiawe5ZMKvFKfa87pc83AVXDaTABvaKFUsHD8mDtE9JsVGhQiMnsdCT4DPRMT8vGnL",
  "key31": "4RywhncoU1iMXPU2yRhenNhyoW7L88PqzqRe9EkvTrrNJb1CkicendP9oXPKhQvMvbj98TS7FpEmrGV2wtUR4iKq",
  "key32": "5jkofXXhCx6FL6inGdXdt6gTWEbz9BABMTFqpJEX5NsWh2x8PeqbFupBBJEAekATho7WcdR91m9DHZUkhDXYS9K6",
  "key33": "5Zj5jh2auE9aGEGCH8uusUL4FXu6uFgbNcXy7mxRCAf3JXD74NpP9uiRM8V6GWL8GY4DGPyUsvBCsztSKapQQcUu"
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
