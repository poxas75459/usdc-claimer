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
    "3bapS7vNGivdjMqzAepyEKxgtxT4Je1USUKeFRbyid5mF4p1DsfQxNXnhgrE5iw1Pyth7Ab27z5H8VpZGbwUwtwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uejmo7JRjEkMqMyviD5bD65V6Q5dgHRh7pjj3baFUbzYFknwNsZFNJU6QUAx5o8cnwdscNMKMe85jzAyV3Pq6Mb",
  "key1": "31dTVTHgvoF9ornnYU6cNXXGvkEfrYwgVSmmdhvUcShgdcJtJ1whij9gsr2WugKKn3o5YspsbUqBbNx77EZiQ4pW",
  "key2": "3cZV1fWoeHRG8LADQ7QvFXc7zxKJYpXPRGxd7P12zXQ2trWw1L8xY8CM938ac5JC4KMGhTnJnoR9XnLvPdJjPFhc",
  "key3": "5WWoEyiFJ1DUbUWUtiRkmvjkcGLxb6x81sSEmqUCRhKbX7E5CcrTcrW3mymBkDUDA3egGxhExMeaawha8i1huHRV",
  "key4": "5BZQZTa6mDbvY4PgCvVTyrj83XSXs2AXcUycNXfJYJLEMrnVU7HnBqgibQg4nmfgefxNwxaifEyj34vgsDE4N7Ds",
  "key5": "4sKTd9255PN1Y7MHkU3TNBV7WLrBJHny9hpKis5pPqj7z1hAtPaHqkhMy9NV8kVSu5vrngXK2DZrXdf8hEBi7BWM",
  "key6": "24xmHUsJvvcYTHy7myG1jTTup1cWXXPiiJpJP3k7BA6ZXYkm9RaiEfPP6k9CKB8n9JSfmkpW7oYgUiVvJdTuecs9",
  "key7": "3EzeLuG63VqroHKqp7pNQh2o66kaBNX2urn7sSCUSVA3Wdtcoh3cVC99YcJfqc8P3V4ZVWSu8yVsUHGmQtafRce",
  "key8": "4qk764N9PxPMzN1wVETriPipW2ymQnCC9rcf19XJ4Ci9Pkygg3JhvWczKWUuDm5xbrmivNn3wNN54k8SCLipsB7K",
  "key9": "21CvbV4dowb9koS1jSsAFYhPezZG1UyejNoPUC7hyP5v5rfbX2ZR3p4nLt5Zdn85HQ4DRemhnTXcgxJRuFDkcKsy",
  "key10": "2NgMyq4pEFJfEHWq95n1BfF2HHFSjrGkoCTvvwAaMDsbj1SmTpgM3wYMCHHxT3i4FPjPU8hXDAYR8cLUyvjzbZyn",
  "key11": "SWATuRi9KyFV1VWy59qj2YrJUG62UU3s5J2gGKQxwJu3KCjqku4rUZsswvegRdLc6kZ5JXGKBuin6t5ynajV7Rr",
  "key12": "56dLDcFTHJYTEJJbcmPDySB9eLstoJN2J1vyaNvvLKwrxzMKngV3WpyHdM6yevhmquFqvP4ZeGXbMAnPn55MoWmM",
  "key13": "3Mk2aXvFqCrfad6HVSu89pBNsZVzVVTwMHeW246ubJY87aCxyWpzurjFcaZvehCRpCcUVwNvaNjRVtyvUijrrf7",
  "key14": "29MpCHNymmHm26NBQhvN1ere5FCm8z9WqvqKbgGKBxSTDUbLtsy65wYSGuCLkhGRmgs1fvgngW3R4YyVp5xpSRaB",
  "key15": "3F47dybNmBDxr2zJZ4hThTnXfkfNstRitv5mGvcK3Xf87KHnyJuRvMxxY7mkHDEuDwSvcWcsMRKhrxkGE2hrPnZU",
  "key16": "2aed1PX7Rk8LkUKDKDSR6rQ2xMoz2GhegaRsgTJxHBu7g7iJuSps1NjHeo8dcP9VXBqdDYvzxipE9zEcf382pJzF",
  "key17": "JzdoGFMe88ZUfnHGFJhsERopt3A8fH6GnuvehfLUsYbCFjChk8Gt7RC8TxfptSxqpNK3rTFP8vDViBipBg5tpbA",
  "key18": "5bLdXYqZaqJLbnkeqLzFutG9KLvAStCzem36kLJEgwXnwq6vF1jHUyWCh1PdpZPjqPocZmcKrxrMqq2vME1iHCW",
  "key19": "29ypLeifMidYYKknCrNy9RahTwdzCcfUzBmYZPeindWrnkoktKWiUCT7ACmVFarcKqKAt3v9ZwNaK1PurTbiLyjE",
  "key20": "3DpARXkhUXbrsprqT1WCSq1pMTwcRSn9B7M8hhuBMJf7HN6iQLe25Qrqzoyt21RJYmyhuQqmFocxs9iw372NaXVn",
  "key21": "oiTjMhpTXLG8spjG1vkcc6KYxrR3en3M7Y9J5ucXZPyBgwWNbirieEFf2NKtPB7fgpXtKbtfHDwCivJbScbpNNk",
  "key22": "64jqh7yr86piCDNJkNxJQJrMtRTsaR34HzH234rdHgLLPfSh15pdCeYZDsJAhSRfrtd1EpeZW5xReKfgabpqhDfK",
  "key23": "4n7zfih6732A7YWMYC5iGooThyvwqsM2L9i66U7vsoJ2Dcbpsv2MDKBfCtQfp4BYnJEcR5r75DqLpJ5XYmxQy9z",
  "key24": "5PrQDFkat5DtyffR1uGgwUgs134NgkotzeCnT4SNdJJngSAVN9N9MxSfxMBju7RYvDsXNbxH4FP7LVhbhYD5cJ3J",
  "key25": "3H4RnFZPfhH1e1WQnPnU3fq5HzdtnYSYn1qtfYgyS1dTpnbJZHyugfgAGxstJmDg7iU5Qi3Dt6gjj4wTtZmbDVq5",
  "key26": "2f5fivdCMYtorwJJspsEPuBCc1AbG5EayEB1bp1sCq92Mh4s92SWD8jCq1vqJjsYeVvx8475seZKDDJn1gxJWsCy"
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
