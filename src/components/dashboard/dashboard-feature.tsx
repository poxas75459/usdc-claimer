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
    "mNP65Ro3nREdzJZrFLLiQpFCpRN2aU4gr8uCdUCtox5AfhqkKUc7BW9CWnRstbuWAxf9esmix4VBRwpYRwRsA5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65JLkwSXyRsMoj1EFZgrdFVph2aQ9nakxee7Tqmy72dtmbRNRvXLBYsPRU6ybPGMnFQH2FZ1V3fpamvjrLW171DA",
  "key1": "33c4trUjU9vzTCMzd1PHAuNxBkBPyGkYJQv9JeWb9BGw7seSxse9e6ajFSxSWHEXCNqXFAYiRsa3hvoEKUTr78LP",
  "key2": "4ztAnnwe4nFGMpTVSECFK1BvAU1ZUbsqjmvzaFURx5oonc18591h3erK3az6srRfTSSQnkJNEuW22WqASxZopDEd",
  "key3": "2ParJqLKHeesXvSnRobRhGq5dm1ADYnX2VGTg9KXSDiJRkxCivLnWYLm6fh8fTZDxpfQ8G4CxSx3ZTwyom1dAUrF",
  "key4": "dZZf3E9FJwBr4QBCmWA92QjSFmcHX8kffWFnhWaSqbhd4WkdPwRntWExE8GbTGZFav7pgtTcX5ZTsrLmWXvVsnD",
  "key5": "WEXSrVQrWFMG7tSbfDBHEabXGevp5jqjWFuuyZ2wY7dtkwe6SuPfDJ5AXftHGiBoCToBTHsMYSSdNySYfo2dDKx",
  "key6": "5hG4aBdESmiQLi1c1kaTY329j2bjLWrpGri4HXUthZjtnZkyidyKsyrLuvLg9D8JesdbeJZtnzFRCajAChaMF7A3",
  "key7": "3cPKuKWPQUX5bsP1U4gsmqhCGAMUpU9QqbXG8opekPsb6vS1RQ9rpLAufEDVjzRUMbz4VrtVHRPjZkBzRTL2BeGh",
  "key8": "4MaCPi6YPDZK3oNJ3YJPfHrhBAyjxAuFNDofYDu1ukxEorzwYmRRFkxZopLH3VHZe1T8hKgQnzahgw3MXTt53XnS",
  "key9": "2Y9BVr74ezj3ateTKBn6y5rCeP1TUwMTbYn41sPCKmfZwts3MxMUVLgfpwnmFyAsnvXrxhk6ThBbfrN1k1imtMyU",
  "key10": "4fdKFrAF8Na7C3DFkrsRps1HGhxgno8YfpP5otjPWiDK3ck4dnyDUuMmAeTL4LSEKXMMgb3RsHMyJtqffhuTnivj",
  "key11": "2Lt1RyjrxjN78BasMRAPyMpzQtRKqvbpdvDYpSnMVAso2Z7gn7MUAhAqXBrc9yx4BbhnMCCru2HochitJrcuq6Yg",
  "key12": "3TAY8v8Y9BY6fHWDLid1hQcTcgyCVe7kJc5DT9iFTqWroJC1Qfdhpt5MnJKRxPNXbG7BkhX3zP17qvoBBqae4QNi",
  "key13": "GGTucw9X6G7WAoLEk8TZ8i5gTziobacrSVRNmM16YH7KnV2hB4ChrxcQigEPsnYdARS2WZWgMPpFWYN6AHuPNrZ",
  "key14": "5h8pvG32mzRfdjtb8VQGFD8KqCzmraHvqiJAkebsgQ6j5kz6vYKPMgjMtyeCgXpLYB7vUzHs9Q5F2Px81TkWkQkk",
  "key15": "4EVnjRS8pc1MkoC1Gh2w8kpCT483gAQAkETnvL4PzsHsVigp7YxzSn4BYuwYSGD6nPzdELMBrVyPPBfiWw5usbii",
  "key16": "2X7Cug6okXJ5HmQtR13hfTySDPNLtw9XUk7NqoAcckiRGqxxD732yAU2vsQpC549kmHMQwiKbaeMP49a6okFnV1i",
  "key17": "4zY6Z1hwF2LC74sLSPKji5Mrdpf4pHE5BuAbYGjZsHsgSRU6LiUQBn8FkCwbidzF7WdXFZ7NettRhUzJQuqo9iCp",
  "key18": "5xJtAkHXLQrj9wJZbwApbzFJ8HsGKmJbvWAf624CQ4j3oHLKNZBLu9rFLjiKVKeQ4oVzvMKzW47gK9xFZkuyyvaB",
  "key19": "2umrcNpGv5cZt8yd7ABuDCWMPFjTyDsc1u7kVqb2Mhc8AanNPRFNdjoVbKzuppsVEUGhvXb7KXz4izZkpyHEPuE7",
  "key20": "5VCiB4fWikgkxJzzY3Z1cZXMvS6wisSvC4f3jjHGFsZhf2DpHhzWLzYQnU2VXwvQDXZdu8G11Dff2twKg1aHe38z",
  "key21": "2QRuNtnmK1jV5YyrRjxgP6fN9kZCv6TAa63cN2QprRQ27PW7fPruq4N7qfs9BnJ1oYEXKxmVGR8PUEMP8KFeiDES",
  "key22": "4dSpo21Y2k1sq8d3W2Q1Ed6gAZMQc97QeSA4pWRD412YTYyphJYo1m74Ka2RfsrrwbxaYcZnfG6oFRCygN8C8f1a",
  "key23": "4K3FRGwoZd4JEBefq9UhEv4ndUREnmAdBs33bDth8cM6629ReMqWviNzdCSWQqR4MBuvGA51VCGLm45DP3ssVmeZ",
  "key24": "25i94xy6L1zKmZv9ZEQwyJuz88jsJwm9szdZBgQTDEiutYKnykvECw4qrhNShYt3ha9rW2NnTKFVNk4k9D2WPmxD",
  "key25": "s6uCgdyjFdVhEwANjYr3hQAJSC9oSA7rJyMSfZuGuV8S3te8FijwmxrEVAm3HmRTc76Ej26WWXJfLjDxu1HHj8n",
  "key26": "w68UgL1pfK1E9hyXhs3Njtk2vmiCw6Z3F8EbaVDZqNy2Cj3Fofsep4Pn1wRKcMra5bWCLzCqfpq7FPpFWrD6nKx",
  "key27": "5mJsyzMuCBHxW67BgZ4vKK5UGKEEGTLnddn9PZxAa2U44rL5p14fmTakXnSUtE9rGMSNLojrZ5S4gW55tWr58YCq",
  "key28": "4Q8BSEeouhYiLrekZrd1U7funHdjenqqeaw1Ud88AHqzvtKjQhEybWxT8DEa52hzJmwgKziHjmVuavn63PdkMqz3",
  "key29": "4smXqk5mawvmhyWgsLrUR6rfyZtwq5G1Sd4noibLJ6fZDbQYjqPYuoC2KTzbuXDN8rjziebeLXX35zxeKgQEQaD2",
  "key30": "5Ux85vyjM4yR5gQyB3bC1uFYPeb9VXnY3NA586aWmZpbYymJGojpYyKq5Gz62xwPY7rc7KymY6LyVBejEzZKBpDZ",
  "key31": "4QcvHPYo8WoGj3iUk5YgcGKtxTCSqgENYdyB1Jzk8nqFTv4d9T1QmTLLU3Ts2wFpFvKPeSSLk6hh7UgHTbH75LYC",
  "key32": "58W4qtKhfydYUYvHSWUwwbhGLWuAKgbAYLiJoQMP9vPwth7tvtn7DJ1aTJoq4B4SjUfoMZPemiK8r5y3RJwT4Us9"
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
