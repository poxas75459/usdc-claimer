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
    "2rgUpLxgvxyns7BPhJQVxTJQekKYXVZLNoEhhaVNYRd1AwnGRyoeHBYEqjG6hgAKvGbnWu1RFhY2APctB46trQw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62LNCvBCtwXitYbNuRoCPHJbmHdAc2vCdTgDujyUq5AyGZYF5qu116FY519GRoi3HLduz2ZiLXtPigEmAi355JLX",
  "key1": "223WXznjcthiDkMV713zDFUZxW5Mq6gCPqmMD2nLRfxRZ5gDPMjyi9b9dmWh4AhxiR6dkff4VokJXWvrvnqF639k",
  "key2": "4dMqbAnJubKdC61LNmY6S6m398vc86w2T7AQfvDPohm6A4LQhkbXqaF5iAk5yoLpBXSzFWiYypkjRUXR33c7QtAj",
  "key3": "5BoGJ2FXKna5iVXeCjvXCAwCJu53cxTziLjif466hZrhTGc3t4FytBBcun5vAn1c5CCdXJhazHXRnTadTDhPjXsN",
  "key4": "5T8neWqRjTuuDudL53DdHjERGjxKinp77KM6HsRvHMHN81SHP9tTrXyZA3hQzX6TtpwnDjsyBT2ru1bfXM4nLfPc",
  "key5": "5TdapQ7EEoFsiJzjqzYiaLScFwBxkcRMEZWFRiscJtRYZnVVDMaFYHRUy3nuYyDm2x8XebYEFeVJiK9Df2zdWrye",
  "key6": "2ddL4GYq7amacyjE3oz5eX5uDdaJzFo29qcSr1miTDsc2oynM6mjASKSb8QmVjRFqy5EqxABUxQ3dfMZ4HfNtDw5",
  "key7": "jzc6W7SHVxg7bwTRyzdyVSphmdQ72W6qecyCj4CN43KQxbGojdJQXR84BCMYxR5V8bP8Y2iJ6XQndY25tqJ8Ldk",
  "key8": "PKJeBMyr7BMHo2CErqfwbUnv17mHtvZPwPuz5BYLcXquCY6AvrTVxfJtYjLFaDojdcpXNnMEoAVBuhya21N22Yw",
  "key9": "5XcUFuUR7vednqiaU9mXp2x5r358UurzPGNyvxJJCT6JQouWf7ree39FYWs9SR9vuoxtBU2EwGuNvcAJcyx4YMRZ",
  "key10": "5NdwtTxtGqmbrkPpsoMr5W2gqjwHoYYgcZRRhRhfpy7unLo9J8iXzNMjxQ42xMVjSfsHSLQJnWMHEPj1UNBBrwdC",
  "key11": "LE3wAJrsAtgaGX4a8zXg43QFpTMu2uycyY8AoKACoGnF6PprLwZCzissRsMDsnEwsjWK8ztaroSAhtQpVF4VTpG",
  "key12": "5u18UUebeaJqt2fZQ4hKvLD4JeTF4csKT4shDRTD9s8h1W2th8hDtK1FddFGTfGQxHRRgCDfFYY46QGELPrGhx6H",
  "key13": "1RChnJJdeZqcTNgJ67Fk7jgdoP7EKNr3YCgXfU4N6tAgKBwuUg9pqGLnYBcDxavUaQ28ATsEPzxWCqcXp8tT5Qw",
  "key14": "5AoL5sDrNsLjS53aGV8sZtwhdtmkh2L9eLvYer9dapM3DraZaWsMh1aQRgy6EfDsNirSbofLrVL5SG1D9GrsnBPm",
  "key15": "47x2UYQQjcn2KnpFvUbtt8FCFzwddDizPAJ3cMrqKCGLkCZpLXUUEvifZthpnKN3egcvNrVV1SnHnYgHtHLnzMbR",
  "key16": "5MhtiwS9ZPyfdJgMbanGg6u7Gpv9hLWRGniqQEGtAXCYq1qBdi1Za1WWDipJxVMGpCcUbEzN6HEx5oDGAS9qVZWY",
  "key17": "61LWqLkVBkF1pASeGqL2gaRjSaMeNzkUjJzE9qJj918ZF1oEnqFjsFahLoFGFp584VSheyGDhqBMCcaqB38jFysM",
  "key18": "4Ftzs886MtQGk7RUz2GZz9y9xw8tmr2ysQF5dAPxR3Kv1Es7hqmiFBvFkmajMXXznc9GHcntHCmyi5GJGwvHWRJr",
  "key19": "4FwhqHjEAArnHTkhynH4oUUdKFJ5UbgBRobbT8jZe698E8ZmdTCefg5rKsFhF8MimUmVcBA368veefLLV8j3U8wc",
  "key20": "3PcrQRM1VTg6afEwBvFwCUZQM7psmqv7xfPxp6rMJtcYtc41LY8QbKtbRanxcuZ5bRMUPZ57NNU5xMbj6DG5e8Qm",
  "key21": "3kA4q8AzqhDhcQnAGd93mztU8YvagUwxqRxKMwf7zSLEZji9qVPV3zXJuaaSJ5PNLwzELvkBjH7uaaaYNG1R1c9D",
  "key22": "2AB5hAGK9xDQuYZ3Zw26JrmVzAwrn4r9YWMwa1QES2w3JmBXXpAhH2TddGPWXfzdknsapxmmfcttX5ueunqXXszF",
  "key23": "4EfsEsz85fj7dWSMfq3FehbjJrZXf8APkWPk7viHdWMfGdmTgByBsCdJDbH8t1R5M2WrRyEypwgFpzFF2QY9PtbC",
  "key24": "2ScP2VJrW2vdzXjFGhfZuy2qYz23em1eKX4UDiskVqJrULceDYNx23Xc1kWuyx7x7zxdskiK3oHChwRtSih1ESS8",
  "key25": "4pREyiEdpCetdWo4TyqKDYmNDny89dJ5GpZFsZzzhZP5VRHTLRti43bvvbWY4QyGdoJGiGgDGjW3qNYNFYT7EK2u",
  "key26": "35R2BVKPM17nUDpt4TZJ5ienCo6fPm6jkbdzvUvPnfwtesWuf5KpD9DSc7pE2yyBqvc8q6gd8cibhh7PcAVoULuL",
  "key27": "uDxvCpCaj6cmvoh1iH1QSQefYooavg8XTNmGBXBj5hB6f9tAH1ePsJZuxeFNX9jwUBQKB1o4kHY4xexjTTXcCKw",
  "key28": "5JunYHnYJs5gcpe8QRzWPMqCzc2VEt16RGXzt9v7GL6Djo84T2EmPub4x4vmERccLPkLBN6nd6ZKbESByX7iMkfh"
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
