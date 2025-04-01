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
    "5xtM6RXM1nYYhFUEp3CtQ7YNVaZaJpPPM1tUK3CuyxtE89i4PCoCKKkfZSmgeEooWZsBv1eVZk3h1m9GjTS1ffi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NK8cyJC8XRoND8AzgUHdW5rSoi4yhJtboZ1spSQFByoNJ2vMMHWmHLWAixg4khti9CX12ohbzvN6fRbvGbbNYZN",
  "key1": "4hWFCCnXvEnckrq3sfAFzV4Fv9mbdxpuZCdZra9dUeZHh9v1HBVXrydb5LriPVw2JcbRSmYni9qWVt1qs5HxEALx",
  "key2": "nAispHijDdgNRj7C9hpfe2SWMDmieA25gK45XUvSkHFLdHGfqzzkBoMiCfjf6MJHhMtSgKTkVsJJKAbh7Jzic2e",
  "key3": "3gvuYK7wYHhmRPxk1KAg1Yno1AoVTvUcUfXShr1H8UJE8P9xAGAnLSTtVpmcrYDR4HRXiNrpD7ErBxFN9ugZx7NT",
  "key4": "22iGTaryEqSHJdaQMYF9ELSYDGcCkwUF9FfEVFxhw6WJeXYNjDYdF52dLNAzE257cUqVhKZkNnsTPyDc2RrFfwuw",
  "key5": "4TYifrxL51D6LPonsaDzWmKWyWoK9MPTHVhLKggXkz8T28oRnzCBBz8SEDw1uL1csYWe6rvJaZCfSvbeC33L8Hjs",
  "key6": "3KJ4aW2LKaMyBGcVrknT8uaCS9iJmNqkXzT8JV2Gbb3AdptdvbZsqhLPNkp7Et9oXkA4S654Taz6gLnVzPXQwwXs",
  "key7": "5XWVDBtb94SAwiY9vmrskTZtS22c7uqFyeFopRScCouCxam1qHqkpR6PhGdzTGaN18E2df1sNf1WCfV92MFbEyeY",
  "key8": "QbypLks8m2k8ZS16jR4wLfBQR1q6WEjoLTogYTPuFVJKHGh3ecYdTtTqNFC3cVHR2CzVQvuyZuexR9rfeJaaFCf",
  "key9": "YnqRsacZR8s6cMPLjMPd5mJpF1bvqmFdfxum5jrf9KNozHf4bmcoteUa12kczSjGFriMoDmTwWPJFggzp7KLeq5",
  "key10": "5Gw6C6VrcpQ46iNf4UXjWHQizB1jDcLRCktQcc4K3cGdWxWggAeZ23zxCSqipxF2fvyUkiHBQGZjRqDcgYCTXv3y",
  "key11": "4jFLr2DdDWX1ciFGvipRXfj6vJiN7GLDx7kd647sJmCzCzb4tQ9a5u1NoCxXzSdcE4qNUSz7xzmomMnE5gcgpfpH",
  "key12": "5khDPt2GHwMFVApYjG3fbv8K7EDEfVk2FyucnLtnTGgLMDPYVMJ8irzBJFtEHaV9QPmBLNPiQewVb3VetMKregSX",
  "key13": "5GeTVdoCam2df7pX2pKKThV4fGp1U8Njd5Nc4mTdocG6ZSpvfm35KLBrBXPD1t6pcNPc6hKUPk5dX3hf46wZtwvC",
  "key14": "2RMxFrQr145U1dFjrL3NdZXEHhJRyY6KfojcjYuY1CQ61YZvwUj4gn96zBucWWuXyyiVGEgTYCCeo4S6YkYFmg27",
  "key15": "2gHdyZ7cCPvCYHDc1JpcMmwAmpNtguZ4GBfKvwBatojoQ1r8i49p95CKXVKng94XqndkryGCp3Lkt3ae7ioJ6RhV",
  "key16": "3EsdbwNUqV8sdkrE523dRwTC2XAm17ENuARtfnWDMYxDXTVJe7jMZSywYrzSrmGnYhkHz2kZgG9pKgSp1pPkKiEc",
  "key17": "4Ecz5Qgwv5kydV3xN1UhHizc4V6LWQVcfwwfk8uGM1jHVPAXJaucJZSJDmW2ZpZ1jHRA4G8wwnd6zHz2kyHstC7m",
  "key18": "3ef5J7T15J1XoBoT8vSWL5MduGqeQ8t3aEnoVVjo54AzzrYdhEG1W8YV2LB8ktpRXiYD7atsPmimSaTNYJksZJFe",
  "key19": "2ahSr45A1GEreB5xEyYDgqZACQU6Y9SAMgvK87GA2FcWqHg3RtJpxacDmTNjg4ZJM7KWEsHm6hsnMMmGVj7oaCh4",
  "key20": "3qTkkw2kDkdQq7jpLim83rv6tAnCieVJT3tqYzy4svoteerQaUaBtbnRXxH8yzmQMqto25kG2Ap9tZrxBAfgHFNG",
  "key21": "JCPMu6GVJi2jbtfhJ3GzA7QGkWJxf5DAbLr1FPPzPv1u6DhyoN44KYSrfnBu5SWFn9jNAkoFpY5sANXGmmMLYAZ",
  "key22": "2xxWc16aWTAzG7wGgTGFaedvCHbifuURe13ss4B3dCfnsZvEJwGGG8c49Ac63PS6yQjSTV7ua12a7F6QFKSqSnjN",
  "key23": "5sCcx7ygAfxhv1ykby6XxH9J1WDCA4Df8hVv9vuDgfxyVjjBreLyiTwfgrR2vkW4oqQPBMe6trPYEXnCS4jjB17o",
  "key24": "2GTzR2QALUmnTAHhggP24hRayQ7soBm7gftXSKopbFfmiNjPnQw8ZH7LQQxgPNF1hx9GuAWQJGJ59zKvJtFR2FG4",
  "key25": "9LPmuY9rPHNWzpXkife38FEbj7oBJAaeno8UtSztwjwCqNzzjdGkASXvt4ABcYc6KPbsKLL6T4wJEeENbqLLW8P",
  "key26": "4cXHnwKzcAC2nwkXn9eYE7CoDc6ZbvvbsEYqKdmpeXERdkshNArkD7jAk5NNmkY63gtuaW3Y8FCndf8NxzmpNDvk",
  "key27": "27jcm9to9wfYtCK8H1SdG8Zn679QJ7d7io3AmmKjbXadcAdWiVY81ECNR9CJrSsx69C1Egh4DpEa5TAEjPyT4oUW",
  "key28": "3YmAe9dkKJNDwkZmTS4Woihq1CV78xPCdHcubk5gpodhwk2DaCNCBG3daVy4vSbKGUXZmnFAsZJoYsqBCLnhsaSa",
  "key29": "5hDPEnuuu2pmBuKos6z4eqg2ZaezDJyxWKxpY4nyJEWy6HmxubDcb1smEZ87uCkmgy7zrCt3o6w7wS2mstoZQB5z",
  "key30": "2joykjmfFNSPWdhz9xVnB5oUDwCCQug2MCFS93bFh7w5GA4yZF5Jp3RBVEFhnPR7xcoH4VSfFeDNd2n96RSS1dH",
  "key31": "3gHvhoPbmraZqhGUsbEDXZWpJ6hwtWtq7ZDSUHxtT7UCvP4qTHrrro5EigBLo4pJg6DWuyKyx7ogRoRaDAjLjrnQ",
  "key32": "43sAne8Zfr1mexK5W1zQH8KJU9F2unwZFznLoJgm7u5trNVDtcxfC3EMYqnX3ScntNxbh9jZrKxeYatjs5RkqSkB",
  "key33": "3vQQTeN2darWmgtGdPRjPGossVRQzvniFV3cW8KXwZkFDwjfRLWMC7iTkGM4WmWgatPAggt7jy6ERKaUx4mp5X2n",
  "key34": "XJ5TaUqvfcbMQKRR8eeJYMPsDQ9WGiSTM5Wc3ubPBEFCpKz4FeihAwB2JSibEAxSZNERvwYyASaDLnYDMCqj3nJ",
  "key35": "4ha5j7wsLauXD5qKeN8FSmcnnNV8KCUwEk1BsmLPvjUL31BV2pW7VaURvHK6ECBKq9i37vKdce8EVjCbm4r9sDrt",
  "key36": "3eJN9BwnbJG6xMZ23Kig5JhXirsVu4U5RqYFeZmTzWyAFA16LH5WCxSd4SNsw9ZjUvDjaPNHJsPSoJAZqkN5ceiH",
  "key37": "yGu8pdoBUzwsxZNf9Gtt34zcQqm53fFSnuxmudvE1G3rqvWAq7wcvECDKKhn83t9u3JBEsWoJdaeHBdF6fmpert",
  "key38": "U33AciKi32AsdYZ8kSiwrNFtqb6V4UohMrJE5An6rcffWmNKBh4NypsVKHnMsqXnWi2KJhwg9RJKyGwtXddEtcv"
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
