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
    "4MFy56gTKheXWukBe2RqG96aenGnQsSDxwSjvRA4GTtXuGtSm4V7HEstewA56xnhsyUnK48TED8Ywjw6xfxgG9an"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HGFZsxWwKmeyGRr82BhyFtqhCFQ2aCHq2GGvLDHxNQ69xECenzPzeGX5mF6g8iDy7K5ZgmV84FKsgqrGQEciw7B",
  "key1": "34PnfhtchHhctVNf3N17vof6E4fGrLT3Tefz2fckkvp5giBvJUE1EgptqcN7oo2az6okGMiJ28T68BPwKEUyRwSk",
  "key2": "V9x1tGhmZq2QDmnybQoZeDjwtGSbqTHkHRt3NNXdJJvummC51URtHXz5SXdwkWv91KmihVhFCV16mbJVPUN7jzX",
  "key3": "Urb7T39CV7sXk5XyrbdbGXzatUhHM9B33q9jT1qMRn4scTQctfi4C8a6AdkbBgGew37JEnkkf9x7KfKoeN5SiX5",
  "key4": "34wcpcjErg97hkMT3SCveboNPVhkAPn8j3T6kQ7URLwusZ6B2AExyDyjoBV5sX4KHfZhTQnxMP9nNqv6BSAd3Zs5",
  "key5": "3RSMhjKBd4WrgmnxyJBCNaQySUKjYDHxLtgG59qfaDsJxKt1yP85Cw8gaNUQwgb8hMue7gUC64qjmYpJ7sfcYR9t",
  "key6": "2HGxXCXoNuEm5ahakibgaAF97bJYiNVe3knxWqHtTn1sqLmnAvYe3nioKtCY5BfMSnJk9cRF7jvNbsmsMYeHZSXg",
  "key7": "3Sgi5z1hEHodNuHp8Vku9HG1GAw3gqonosrTT9sMysWDDptmpxHBTb39rB3Vc8MwA6xC4f9jEfG3exVxB49GTTrt",
  "key8": "5K6KR7mht8xojMvvFHLpkVjQNjtoExa3TPuu8ChebmpwMAENnR8fQm7Sw3ufPPUuXHtoF9qcfCKn67KidByudi6N",
  "key9": "3AvGQT4Payfv4yFDpjbeuWHs6bqWpLK6WBwPSf1vLiUb9TLihnqPTxaUFAVKuBhQ5VwEtEdsB2w3Wzq376KFs3ci",
  "key10": "4mBSAiWAQiEwBS5xXuHveSgZfgkQ75FrYXmbpGJCXoik8ACTtkN3ge3YREqz369Ax6FwVLVhBWrwpe3iSvcnWxYG",
  "key11": "3Q6ppLP5aqoiEQmwktMeV3QPGWHPiaqNkb3JUrDuvXo6ZjWgqW9RbNzpPekZVMtELYfvMFmBSn3Uepsn4iPqzPNn",
  "key12": "3ffMxuQgbWfbfWFU1TErp6TM9jvtXsQFVzaGevjWobNvqUekKmJocPcjUfvJdDa1WW9D6kcJnRhULKaLKtcCPvuA",
  "key13": "47QC5KATW7oRgkRFgJmHFKpBmCcTmwn5RGHFWzaFNq4Ld16eBCDjcGCER4R2DJ7xDmUnukdvbz9B1hgSSdQU55ZM",
  "key14": "erFdfRGXELysRVusGBvYsyXdR9RJPaBQ6DHkvCkVbNGZBB2BZG91voKMnPYRSKSKWhQEDkANp74T2d7ZC8gWPqG",
  "key15": "4AaPa6yQXoCWqc4yGrcWiuQe3suR8zsxuKEJkGWauzMUQU9Xz2LBj3f4edLnGQSw47f3C3jmMfo8kt6DvLsvAkNr",
  "key16": "2RfW89p6CWvHZzMUNDP126ca9wGSKXYC7dmgmXgvrHv1h34Vpa6semXqgMqzoTDDtg16y9YtVGwmsGNPJBXviSVY",
  "key17": "2CqocvbPZoH9UVmG6up9Xs9KqB1ycQERofXmtBAA9eFqsXzDZAbsyKXDHaroCkT48VhZGbyWRY2b2tohuJH2dNvF",
  "key18": "4QbqTkaY1SB997DbLTaqYZM5AsCixjcq6sFr1Qu8N66WJpwTtnRAPYYcUgjVuuiASVHf9mvJyD5d95YGdCWzhC2Y",
  "key19": "5K6MMg2mhv8PNeeMWdwtjWFar8a7mMKHMqUaFR4p18wX2dFM4p5KRunxRcvHyYekjYpabAdrPdB4P15EiAtHdYNw",
  "key20": "3SvQq5jTGK4YaNnQ5KxTTXQLZnwBExgKxALt8dV2zFfcc2jHkGbqb1SDRxFDMqfDUaRG2WUvXwMhJhLkL9CRkJVM",
  "key21": "3SWza3nodqUW5bEBK59j95eQxq4H8TafvHFriF99A6UezTaiqNg2LUrGDNxsaf3wkddWwzVA7JWU3iFEywRrmWQD",
  "key22": "36mCLo5L16nzo3iaFiLC3miKUArCE364nDgmPfbH5xiNr4j7bSZ113h594cE5FRCXvTRPgdB5sJFwKLsUFGA5Xoe",
  "key23": "3gX1ekVAfcv6kDs1ccHSk9a8hSYCgYq4KGybtsrqgy5LXoWAdWXKv7M3LPdPqe7oQLkDAQ11dy9MuMbKvUmeqckh",
  "key24": "4LN1mUWkjaohYkeD34qqpU9ac3q6KiA56qXhBdTBEJZkrKDHV7Ly6RAM3ga37vXHVPTpXo4DpL5n9jiuRFVZx9sj"
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
