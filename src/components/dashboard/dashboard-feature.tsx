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
    "2nGziCdXWorGkZodoYoPuRw8J4brLbWeWiermVZ5LN4D4ouL2uW2JYA9Uariix2TzWHUhrL5ThqXMrrxsLmv2kLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KPtBsekexywBrxuwB45dsDHDXWtAhe9hKoZD9dZQdSpS7XVqUEiUgrJNjJa5KSouPSQpBVLVv4CMye49niqbRFs",
  "key1": "1UVqew224gHjtW5ZHwWpk1UywUAT1jGbsRNhYp3KjzvFvi2buMVVjaWbiJKNsSGDgb2Uz7FXjfESJgxmdkaF3BH",
  "key2": "34HtNdxyDjfHvMY1XHbwdwxgPudDgEmX4dAfgybsyUXMnGYQfBvQQpQFY79Uk7zkwdwddDdjoUd3bwg49c5Mwau7",
  "key3": "5GRqT5Y4H4e1BQtDRRx4DFXmFtwk1XhovyoEvWVPaDm7de3DeJxT6WMcFANXz52pZ9a2Zu4Pwj7cUdSKSQr7sBzX",
  "key4": "3MGvnCiTRodDg5pTQxzNmgtoqfvRfePgG4j26i4ibZQT2hyFkaNAi648uqEQbbVvvWpWCUYi9j7HaD15vRqdb8Us",
  "key5": "3QSwApzFLXCBdaa9jxAt3itg4yvh37TWTzA9gmQX2EArdabr9DQ9sXeR6yoHVGL4YQw83pNvG421C8ay7uc6Lgfq",
  "key6": "4ouigB43LtDPmasxfGkUzBW3x4C1Z6DXjWhoHdTAnsKy1CNNwMkY9xJ2YusE2vyD9PFrf3yK5ggkYPpRYB8Nf2dn",
  "key7": "5jo9DkEWzJxPhKqPVGt3buygn9whP23DhjyZFwnoaxttTJCwMFPvRFQgKxb3Np1dH4yNhJHmEmKLpjLD5obFYCTZ",
  "key8": "odgwmVVT2gPti2a6Ms8JWd1QX9aGgY1yMWdiuQ2eCd6Fo8WtTFMRg6pxsiFQbEPaWNDEBvxp1xPzRSS9CyS4k9H",
  "key9": "2NRsecgrS8Fodyepm32TjZhM3kAY2LfXdhq7Dtj5mWdnyrdGxF9hLeEqPMkdi9dK68q8Cmx8Qv65YCLHWdNkzSgw",
  "key10": "48Qn9dSRistd8c7DZ2mSF5DsDwbBLmTCZYD6avemVpkpmt7dVCy4LJFycVCxgyMuMxVE2VnrwAgquftVj2KNveoV",
  "key11": "4ixQud2Y8Rf7Fye4ivpc9CP8bC4nvReVmFjM634FzWSHiZtFX1PREbMA37cj2QYhEQK7ZmYC9S6s8N24g2Q61xB2",
  "key12": "248M5eHLLxEzYmRCkRe6ojNDGmGY2jeWmnrYZ2vGonogPpF4M2Bm3phsjfawDUunFgxp912vUTRWPEhvxcPZNWud",
  "key13": "4JergAHv6w6iTCtPy7nYA74ykBTBzNGjx7nMkyBHopU7E7eCnJ4SzZew4bTexc7kCozvUwQovUV7aJ8fVt2oet5r",
  "key14": "2fsF3ZFuNDMDD5mzXMGqynkfLxdyqe8ncuBx7vetsDEZ9Z7wE237zmtESn6FoBnB17DD5qzbqZpX61gc6Evqjakv",
  "key15": "3c7wJfDBRseCPPq97xbfgaapfgojkgWguuADbmGoR6eCUzZrPfsvMj5rDnMW9EMXpeRhheTTRzsmQtEFX84f2Ln2",
  "key16": "2KFgvuuuZAiYsJ2KoKiCAjNwuaZwJTo5BniXzRFefkv2QbfcG3ZYCxjdGLG98SF1WFHzvUKwcD6aXrs66dHoDBmi",
  "key17": "ESbWSJqrVxy23FcwwAW9qUziqJH6MfJBPd3mzjibm4UmHgMD5RdkouVo3qR4wrgQPmZXTGDhm2f4gMsu988vZZT",
  "key18": "q7mKXbFdHT7HeBR8X4NtUxJPk8RxThrgDeiRZMYrn5AVQ2GSDe2Er7n8h82FiEJtrp1y98uqqCV6X7vhBxSYYhR",
  "key19": "8qD6cSQsizhoW31gub7PAoRNQ4rEc9zKEYVmQr7A23rJpRndeAGzP8eywjep8EVsVdDHfCHWniocdNZJebucwrL",
  "key20": "3EipfzkrZuvs9k3ALh4tU8rR8LbDTJ6pV6UP4VniuaJRVr8Z3Kwhuk9Auin2q6mkec1YgxtbwzGGsKUDjxsz7bc8",
  "key21": "5S2tCB2NEUmZxdjFf5GaqT4oTb7CVKVrFFGmVA2pPn9jZHJz3PSrqWqqWynuy2zhm2qAAkcibhp8FW5xJzBCWcqQ",
  "key22": "4euNAuFD1hM5BM1aug4GjmMPFQuqYSAo5SUzN6MebSYim9ECe3Ebk6NhvV1CFDWzjFxvAPbmFvTjrXw76PLa65aE",
  "key23": "3GnDKCJaCXUVs6czMoAEd4X7ZmGSkTW7MoQ86ALkVnupbJqyMpiLPrRrHGG9L8JGNG8QfUMGMzqTThbLeYJdGjzy",
  "key24": "JkxnQ184pHpgAUfNQYwA76fTTLtu2tUEQnVB77V3PH8Z2ADky1dKsuZgFAHq8TJYzaud4t4VGWAK8W3R4dHL4Uh",
  "key25": "4qytWLFiNWgRYdnAmEd8WguVZFTFuzQna7bRgmvwCsdcJdLffhKiGuE3U6pJzRDrr3i93cf8Y6LFW9Lf8CggucWg",
  "key26": "4GAb8EhigcfHc3YviJMEvwmw8RQPfn5FYocufyBs4rCvzi99zUm6BKZHcHnCcubQ22Y3eoNk5w6JrkcSuvKmTAvV",
  "key27": "3ue21ZmfKGzmdEzWPDXpbghkMQD4mbmU75DVs2tfxRCAXZSwYs4csQCNmhyxxehrH7GBsDqLk41SRngzMsH9iSfi",
  "key28": "jHH78DXEiuTC7xZBvFk1U2TnNBJ1L7kkvohT9sdscqPkfZxCbTQtJnmKJSkyFNSU6oHW4EAhxuNTrJKCUrFjDxN"
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
