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
    "5Yhm4Pu7jZq1x5ZQmjsmHWPDzV5KttuumMURXSeELyCZXyiTV9ww92J8fwSj5u2eQo9kjm4A7LdvSwwNtmunK8Q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EbP5FiSxtwMwN3X5BCrTzXLyLGZ4o846NC3R4KHXtTbQK1mTgk58uh7beEYTSXbt3qkSw8MCvwfYkR5V8kQrmGF",
  "key1": "2YFTj5Yt2T6hP8yksUvp8dVrQwSJTzyPoVUqoLdEoRoU5kpJr8AukPQeZ2kwk43KgH3nvJb5aRdaTheYRFD4oMxn",
  "key2": "EywmgSdmgo4Rh31oa3728a3PF4c4YsMHQggSQ17UiBbddYDcDSFTgMiSycfQteu87hSXMmAxETZxAAqHF6DeiKD",
  "key3": "35FuPZKXDXaWTfueZeX8zeud9o8g7opg2NCJ9c34i3QDRDmUgFDTrbs9GWVFBYBBMHpdVLZfQMAvbCSs75mrN4yy",
  "key4": "Jey87RcFiW8MqEVdY5ieUtZB1wcqJu1iYFFVMBbc8NNRnYsPftTvYqqUSNMHv26fFskrkQNhc5Wr4GqJByfSbqb",
  "key5": "4X9jtQqEhLdZqcXMWckq1Vpbb5kBKbS8wDchrVrazK84JRuSQeJgLBLQpzzNNPvDiJetie9w67ZN7UgTXPJ9Xq61",
  "key6": "4NBuDKHDcqaNmAg62ccpg31zS1TeRe3R1Xsq7xTE7VeVS2R2EJ7yQvP4CQPoMz2SfH6CJkte2B4DjtrMSr2phC6o",
  "key7": "2DokLQ5LFPk8VU7THB6VF2SujoTvbCtkieJvKgBLqLTeDVLM86Mr2S9BTpUPsVecBtDYReeeiCrFXGEdeddN6Ao5",
  "key8": "ttt4UDLPRuvpr1Hscemnns7CpCLf34ynhf3vveTuyqPsEf9DdRWQmrNav7M27gwXL7VMig4Cz3fm7JW7H2B7W7o",
  "key9": "59mE61fAfCYk4cpvGkMVcb3XYq6MazW2WHBV9yLVbDB3c5d4hXbSHQQanHTukYiiCi8FhWQCNS7LnN6GVq3pWbeE",
  "key10": "5kBUW8vxxuJUaeQaMtbGpPdJoeo4h8urEBMLSquLi3JLZiBzLkUosvdFRQiVy2DignRfDUh7jKAM2jcyRaCJ3Nbd",
  "key11": "56Cfc2tWquQravvhWEfJesC3Eq4k8KfWbKwowPquW7FxvVzWenLzoUSd8TXBSbmaCYSxQ8tQDNdykibnoiwUB9dj",
  "key12": "42eAvmeJwQ9ybY4JyTujm6HWVWDAb7U4EwfdgS6VUh4Zs3hD2hX3MuEc9mwyjsWaog3SHMtARvA4McpexQb7enC5",
  "key13": "3BZGvMqqbmKfB1gvGQ1ZzEHdapNSK1CBkaB44a5Nt5a8gAGsQbytAskkbDgHGq9h2Xo8whP1ukHK6RvuN7h9wSqS",
  "key14": "oeX5MZKgberGf4okdVttygG29VAiS2ccWQXjzFLB5LRZegvMPQXMzg8m1jjMkqcj6b52ycRudQTUcBb5JDr3HyT",
  "key15": "wpvPti5xWEaXjCQp3jsETr2ZYTRGHqDmZzF8w4fTKffAnU8TchFKyb6WKBFVS8VfpT54YXjZBHHf1hRpACWKG1P",
  "key16": "em9LuRsENTQG6ubAFirgByyYWJurJ6MfEMv6mPcY4QAZ33taMhtPCKkjx1HoqMuPQezQKxsz2HRLbu6i8mtwNhJ",
  "key17": "HJFsZMAwprg8bYXVKo5h3rLfV2WiddBAcScGhWaxffLphxSThHJyuu1ndXcUkMtYLRkXxsGYcdZZYx9LyfkZJRo",
  "key18": "4e4BqD7jaNx8LHCsCYN8G7ggsGs1z7eH1eMnqBMoJpCESf8THroobqo6pPRG7CsQZVLxmTiDyEGANVRUbxTpjea4",
  "key19": "5fnACu3nQXzeBqRRDw7nGtThnGdMQw4gaGQAQige1LkQRofjgh3paVJN4xsXMdoXuaZ6Aj8ZxGjeXafxFDBMTLiP",
  "key20": "2BnUQzF1jMTj6eZvqBBMeN8RPdJ2uaYr5KwitVae5K4MkkGGeptt3XVGN3iHZmQvRMQiAwGCi8Sq67MkZ9cPHRAy",
  "key21": "4GMVL1HAUR1wxPCrHwLyzwVsDsQn2EAARzizeeA1tse88gow4YsNvVBV8JAMApne6cD5uyYcvC999f7Nx66SwJA1",
  "key22": "2G29nDMYYq4ahe4CDVCnqXnp9Gn3TSULJ8aJgheD4s6Q7kXUqqfKxtHHJuV23KNfKcwLpbx4QgP55WZxuDyChXCY",
  "key23": "wrVx2FGnnweYP25yVp9KfkmdkqMjS9a2ciNWLMBWY9wczSMHaot6VeuXbARqAYVLm8D7xJZB6H8zhVirn1PrX7x",
  "key24": "5mAnRq1U4JgGsuaP2NjHkuCABbpu3GnZVZzQYnCmJQYPyxn2cyV61pppxsMEsXQ12PNvSv3LaZzFoRMeJ5AqKmV7",
  "key25": "5D29jgKpDbY8NKiLCo2mdUGAewxEZ5hdii5XTb7gg3apB49ZiWT9MncMfQMdq72GWmjU7XQyX844gkoKMUZoQejS",
  "key26": "4JwDjW2MqWzGCQkn9JbKbpdsCAGzBPjbxTg4i9ffqGwyYP3q7iX2tAHA7qnpwqGCAWvvbfjW3s4SQwGNCPL6ctiC",
  "key27": "4thEQnXqKf9DUedcenqSFmB9UjhrbwNqHDmadKyQs7AaNFoDdLQvvBvmMvJv9jeYgTpiTT8QGZUYsWqb4mAA6MVE"
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
