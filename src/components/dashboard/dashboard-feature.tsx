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
    "2kzv3vamv9PXD8bZucokM7QqXH3oikC3LBMdBnHsPwwThNBua8wFG3X289FJ3eAoDqLXsT4kfgy3kbSd5VUyuH9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E6TWWwHFYpLnpeeEHwjxwwkvBivwV8eF3sBBFzguw5RSbb54PfGgJUB8J1Hv7MCYXUttHvFRtiJo2d298dSuvxB",
  "key1": "fqi1GW2YuCw1XjZejBThqHWj9uMbsQbcgMTtfWWzmA2zr66agmGkFJgDb2JCDKfbqjPHHCaTQayrjWSntKh5iE2",
  "key2": "33BuRKTgX3dRF5Frr7HtCiytYmMouzc2abbJEewKyTf6m93BXcczYTMeQxkEpkcM78VyVf4ew4oTE2LqLxTLihB3",
  "key3": "ke4tS5h4PnfyCk1yeKiYYPRATnRFFRnoNVU94qZb2PLAhUiSucC6o2C3xTvXVFxn8ffMu68CQanswdUuZwWCMRH",
  "key4": "2xSxh7Z1gQJDS6CvspHqmEYTrBqAHsjA4rhgPzNfvzpR7QcSCNW1RhbWQcsSqyrkJqRPd8Ei8CE2BYFp9xPnEL9n",
  "key5": "2wpWHEAkRQ6u2ByHNhiAX3rC4SLPZzZdQsR8z4okg2YGFSCGTaKvNiktNdmFdnajBZHuQG4KLvEoFmkCr49ruSep",
  "key6": "2UBubHY73zmuXn5teiJvj2MABq5kfGCC6rUKeu7vfB1mF6g8vJ5Qb1K9FsoVoVKyk5PvNygDGq7qgudwwkyaMtqY",
  "key7": "3zviYswuwm5UdWB8J9co6gN5L6grAiT55LKJjbk3KxnSKLgBGH7H2icLzQRZibZqUFEJD5vpsGMZF33fbhugzU27",
  "key8": "KPBDd3b5gdxsQJ4S21vMhSxFXCzPPiGBcUdpPeb2faA4xprsSNJfBt2oPZosivaAKfL54TrqHiYNY7oJdX4tPLv",
  "key9": "3g8KRLaRvMzSPw5mAtSJVVYn3vVR22dDMtWt9W3BfGN9epG9ueWhJiZGdnbtZQjEfiKXZsr5PdTd9NgUdmkBzQjb",
  "key10": "5g4MxekVB1sTyg8Dmdk1w7LWTFBQKdVyS7PqWJKsovmZzAh51XeuP5LoMg2cUTSFmvuvmQqffGnb9TyJtEWj45fn",
  "key11": "2Hi2S59j9vQo9sBvYauwTmSWYDrNTdmGHiAy6jRJFBKLt4d5yiN4Mf8roFWF1TpRnEC7kxCteRYK33d7q2WggQwN",
  "key12": "JgKTMgXhHqQvWbdzy6jeW7KWjLiRqiNKTbog9rvoxmi2V2TgfJJq3SSRUsvcQ6QuCwgyFKoseu1kbEQArHjwVig",
  "key13": "2yqv6roZq6xnhcmbqaKMaQZ2nyPhL5jkvUqxWscKCDEm6B99xApQFVHXdWBtokZv5BxAgjdcy1sD7Ctr6MCmU3uS",
  "key14": "WJTDvtTF14xvADRnyN9XMQSSn7bTvm3USnDRx5KqrwzqMgAFbRnjyvHRMxeiLKEGBxJVkQCappVGtEQM99uVGMs",
  "key15": "2iztNeGtQ8RPvSrShDPe24oRkVH2fLAuqqqNyhtHHBFTipXfveySTLgTw2KnUvNLJfup2yQV7p1wagLEEkRrHLVm",
  "key16": "61cfm1Vf3RujTrnMbUE7iq3YshfMkTWJZcdVHFHMb7HvJgupUZ8oiKAsoCNMGg8WhoRjbXDUsuUSBuJrGo6QCEZo",
  "key17": "5gmv5yngxFTVMX52nDTcsSr3sJmEAc2PKtPhiXa9rch2omCmKAXbJqVdVMBonHoKEsDkD4tGyMBaq4o7xPy5kjdT",
  "key18": "52BZU4pNzFyX89CfNXPX6pqhy52LntH4tXaepHLRS5Xti7jkvA8FBezNAGUxz56NhpFEdzcNCv35WByZDqCiaR7t",
  "key19": "4DZgvoYee8YnEoEFaLPSs9XWwtXeYJQisHdFxueDucdrLmCGkzwybrmQB6yc1U4Aj6zPufNf8rXhM7iT9P4kEbho",
  "key20": "xcaQfs3veW521WAkVhoCX7vYSRvAC12v5zT6xCfygc52QMefyVDxn87fF9M1ihkmoA3sys22st3b2WhGd51hXLX",
  "key21": "4K2iJKnRREQRnPS3rdv3wXmdrGdD9uNfmY1iPcbpNJoBFVPnFZwkcYtFQsyEFFs4zWt5hToAi1cJmFbCxwFsUMNT",
  "key22": "QrLJbSM8KwBg9c8BcuSwakFkQuqCChUYdT6d16G1b3YoyCGGqPuUJtUuVgiRVtPKzhe3hKRHALGWgWrx1q8dSkE",
  "key23": "24hmtFLrdfb5NModRBZGDKipDiHndg3UpsVgh1qJjvggXdm2fgLb7aMQGKb67eBvsiwS2haE4nSqv2GjP5WfCRqf",
  "key24": "4ahcovWFWK9aTAFNaE8wDiztrfS3rbA1PvtsoDU7yvp1Lt14XSioGWjBEpmXsjrtK26UpEGgnbqVBJsVA5bbdXLF",
  "key25": "4ENrAWBYSPQvqwMA7T9QhY9DPxS1xSH18kEX73YpQvLmPhYpkKwfo7zfd9L3C4cZHu3zWVUBzrvst2eHxZ3k677f",
  "key26": "53k4PWEG8UYweJwNHfNew35BHBXQEg3fEuwcfFYZuoBq8cVniScRDbBvGTxT8JyAQ4tSEqUwuge4k9imJjLYiCGn",
  "key27": "5tzFfDJixstaM8GQsvinLnJ2PpokBwPDUDeXq1c6jKMDa93Aj4CC6diqAnToshRC6yWhEegT3vBdtLwN1ff1sovp",
  "key28": "tMD93gWjHMkp3JFnyjXy9V4dZ1TQd4ePQ1pRSqREi6uztNAANseCqfphPTZK117NKgZH7x7GPdPDhAqujz7N7CS",
  "key29": "Nd2DtaCzSreFj9xhkpVjW7kmvvtdAHKbUTM9GT2YviHGFfBWUSTu1F3rpyF5CBuopjwpV2GVc5fw58xYtJZFLg6",
  "key30": "58rK1y6yBmPqPJyZcPvtswkpgzmq9WFUfLhmGYrCqTE3RENvc2Sz93tvWCNX7F8J14Nyg81V7xiqTiEEBUNFs3xL",
  "key31": "3r57DpaZHRWPc8dp39Gv6MWmEhjTvtdUknKKjpSk1gD5kL9wB8j4yZ5bVPkP5LeTuJAbWdgbLkwjpX9Rgc4BT43C",
  "key32": "2HKzP27d2ZaRbGVzyw3ubFzyv8sSKph2stpqHHPQWtrphkgoJdr4GWnLX7pc7Fz3awTxhsrePXYnhhYY6bsKtghn",
  "key33": "zdzAPx4vW3DQMnKSujtECQmnTMfkhvvm1T8jzVBE7Wy6LrZEBvLQC6pbkrWmKVUswZAjJDmty11k6MNbFRPshtR"
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
