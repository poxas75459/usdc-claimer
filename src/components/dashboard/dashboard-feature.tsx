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
    "3B2NZdAtdFVLgq3A8Ex4WLCF7uPQTdmmeFgYwR6Zdecn7ougf4Wzd3amXqShLEh1sBMz6wq4XLBDZ5X7uxomjQrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S6gNdoHyt5AJJ5FPRFxG4L78DtfVgC1Y1DKucJnSQ6WTqvPdcFY5Z9sbgZ1Qn4AqyTNURoZSMrPNw2E2kJWPATA",
  "key1": "64gdW3tvYXMYwfRGKc4q1uTYQHmLhBwpsMSwU9pF4eEimZS8JFiNA9dmnXmApEaWxkSj8t1o6Yj615UoCQdhjpfG",
  "key2": "62VXC5ryWgK9cfeZvG8DzhBbNFw6QC6zMwZZVZL4DKJRosZw7jZNvqUykMt5HHvAfDpBe9ZmNwD3MhNfB1eB7GXx",
  "key3": "5rEJEJj5GXofAM89zxh5Gd1XPLj95mSDJWxp1D12NmN1mSsWRbdkFoq5BdTbCZuc89EYVx24r2f2CoWM1qrdfrKk",
  "key4": "5joUtaXNyi83jFCrjKwPpMPEXZs2VAVbwf8Setw1xSqX6qZKYUcLbKC6ey8zVfM13wV1r5WAJBgv9SrEJPji9YG",
  "key5": "2Jaqi3h9dp1PZmHNMPfZnLaYwEsLNbXnCjShyty9m84DJCcDNwE53xU88d3fE2vUSqUkRGJfAzsV7w5poxEqSFUA",
  "key6": "2reG8aqyfHNcfq9kL7PkcQcPx6NBZ8vDi7bg7p392X8kcHCSZpG2VCUwnzp8xJ6U9EVEQghiRuAaEoFGhv5XXw3c",
  "key7": "5y914fLsFWsd8sm1RisNnjqxS8dW7eP1e6BRW2iRy1p4zAUwfCjW1WLQVttLg14W4icYx8qQxLQbUR45oaZzq4CL",
  "key8": "4NKdCfVMpvmWvyaihcjYuEgR4orXENg2aJD4qdeqZPxa5kborbG1AtttWvv5VDQWDGfrtzHRiVNYrJiJFyRqFqtK",
  "key9": "5qo62SUSAoWHhU4bJGn8nPMm33mZswDK3ZRn1harMw3MPeTbVSodSjPLLq6rUbhGp5CWfwnpd4wGNstLA14jVnDt",
  "key10": "65FUkZdukW1LcLmvDzRr24GMXRsRRqg974yosWrZRZyzYCEwXApgzunXC2twr7reUsQUV4urbb5awBZzhV7UPNYW",
  "key11": "zDbhG2xWwhZCbHZtGxP2L5dogUZpJ2QzEH8YFNnGBZq2nxoigbKJgWYsnmZSghskDCw9wooB7SqwCWbLjmFqwpL",
  "key12": "CrfjqeEc9MCRsZLvKFphf9WEPyvMWiRA9FcVFNbBPiVjUszeZLRcpQNTSaZQ5DB6U8KrbvnAfZNC3HohsVR8YBC",
  "key13": "3vg6N1bPAXg9kgepF5iLehviGTRtnDp9ZMA73BFwhAQPuZAPyqF2KA2Avp9xXemmCaYDjjKhMrBw3FpKP9hSDDma",
  "key14": "25TZ2mTuhUDJMr5T2TAZipCYyh1rhr4Dy8aNSkLcMhf8BMww9jAYAipSRYqDFVesDczGq5zGbHKCE6e7pkaGS7ZE",
  "key15": "4wGJWBm3GYEwSQdxYf2mxksYdLhqjHq6TkRMBhBxVJ9zdcnHX5SS8gx1CumnaB3bSQ4TLUG2F1ARDfZUZZonNsSR",
  "key16": "2SCvLAnmfnZJPs3m9bBP558XaHcYjLeTLNHjS8sbcK77a8ztKsTnQYdqEJrxjmJbDZ7CZTYdVQiyviHXDb4hTREJ",
  "key17": "4yAa2ENYwbhFKLYG36ZU7eHyqytAGm8pgz66x2TRjDNf7sbP7JUkEFNTD3WDZPprm8TGfnfuyUirCrx1MQ9FbH4B",
  "key18": "5GX1L8ZwsfnZZDdFjJWL1Hi4q6az2Xr7pGeYHEdHVhQViz7pm295hmpetYfcRG3vFHHAg3bJg8h9ZEVw8zg1o3bN",
  "key19": "42Jcpgu8Mqb2jNjLnvqsg7jVJ7a4fkEHDmQXT9Ku8VQXfxwvfZqnKJsGESJYYVrGjLLKuae72uxteR9DfmS66ERc",
  "key20": "3FwCubCZcynxpRfeJCjNj9vQotkmW7s3LjneyKpSNBy8oKgYEcoNrK6tsHHxHQQvvmsurdrkYTPHg1Ra2m732Xux",
  "key21": "3jh79HuCEBeSzxe2t1rok9MfL4zt3EiN1VbsivXLqvvmDG5qLckYC5BSgfRRzmBaWRBqNzjyWpJUtDrW6mW5fp9s",
  "key22": "VhCK9k8CMZ3WDKi1JHMdhYHFzbPuWF5anqqeftc3CCx1x7ipSnwcvvzJWyvSJL8MEZL8dxyLDfeRrNZSFWHBgEi",
  "key23": "5ppgPTQSeRdN5JR2286mcwMJBU2N98M16jWD2e1QpQHrGMPfqdrTHmcsMXSX1nCwTWWNYwu8PhnoDNnJ9LCYDyrK",
  "key24": "vJWDzFy3xazoABjrbXFw37kFTkgpCDXpHBF2qj1dge87zw93wNwTcjF4myXbZKqJQpaBvqnH9LSPMaorDZLXQWZ",
  "key25": "4WNWQSc3SRYmBGagLxSUkz7QrhJ7gpXWC6gTqMQqiXQ1Kwa6DyJZAxHVrHnvuqvtRRhMQmoFqPYZdPuRsBwWcmR1",
  "key26": "67K73SwUPcUy2H23Aa2fTT3viSNJ8nQKrDooJ5UcVAuYAM6Y7sYSzr7jKAJUkJDAib2HEEsfe1XdHr3GTVCJqFy1",
  "key27": "2SaY3UkJ64FfhR6vgyDQ2KmY56XUmHX4qeUv1enmn1mVoqs4Hmvst99w6oepuSMqPk6tU2wJ5LrNq4FEHk7F92f9"
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
