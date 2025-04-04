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
    "5vTY5xtUPm6SmsUQZZ3SZwiSNN3gAV2wfD4rSYePP8hh4hspaYqHAdwfNgXqCEgrUY2GXu9J9JSTdHGEw4tBebxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YtbA9ZaXNmtwc5KwT919vbCS2xKHGEYD1DBDahdj5UGYMxEHYiVUCmSDiizQtFH88AoxdzjyydJgvAty6pybDJ8",
  "key1": "25fQjLnAmKzGfcSBDjABJmuz7fpQwRK6SCSfjYwDr4V1Cg29UBb8JUSF6c9JGfsq1PjZEFioiz48sDKhAACVhVP1",
  "key2": "5Ky4bpSdpYFDU8iGEyqR941UW5BanCTmgLLuvabhH3DcC7jNEqyoT2VEqJQAAv1dd8Wkuu88fUiUfeNhDoCbJdav",
  "key3": "4ZvkndVb9Fi7GLvU5CW317xojkXCVJPMpz3ZV4M9VT25KarCKHQ8ZeYBu2Zvfckuh5dosHiTLiiN9DdLT9ahFvZH",
  "key4": "yGo9cXrSsLniSuvPWXQwz3wompRN8Bx3oZGcwh786rHkEB3nBjxUP6LB53mLrjGmSpwXq5Y8WapyHq43K7Qjv4R",
  "key5": "4SrMcWB3AXGE5fUScnhg5ZVkg63g8fJN4UyA91vNS8mFJJAAn4hR2BE2GpdGB3tzFxd35fbEafoUtbCTJvEhQPod",
  "key6": "kymefBAavyLXnaTJCUgfvz9ZLMRTstCrduwr2KfJhrvUQoojgzjdkJhwFbFKBKzefSMsBosvj7xinxPPwZmbeRY",
  "key7": "5T1MVf1KFwiV1ZMj8hBw6pLMckQhvjiiuEzznMr6aywTyN8hMdgNwNFL91fTJGEXPYHs2ot9HzUJHxJEKt71jtm3",
  "key8": "4LwXJwyyHRXDydUFJjBEt1sajTw7ZirhrYpepWn8Btdtv9DYAWayaGxy22wbPnqxyZ5hQRv1r3W9UFA6PLcZoSuV",
  "key9": "3YFjQAda2EAKA1UV95q71ZfabitmcrAFKUC4ozPPtZDW9tGELK96SwhmV571EuhvdD9xojDP3pk7T92iamrJvNPH",
  "key10": "5cXqahfSJ2PWhhR6rgrwQYYHFKFg85fNLKAkWF5a49ZMDTLqBZoC5GXrr3tFDvgVDSX8jbc99h8RFvNpLcjdpt84",
  "key11": "5Kpica46rXmMxCFS1BRADFbGYK1dXXFjqQ8cruHAU6PMaoZbFB9fKHtnMC8654i5A2zw66XtmCyEdoi2BP9PUC5h",
  "key12": "26KBZnfAHvFiQo4anVSCnw3qjNkGsAKvioCz1GwVjqCe75pFRoGaEZdgtELHLUqeYDjnjS2pDnDTW9LxUg1YFHMM",
  "key13": "2UzKszGnmDzFt3EWgU7Mo4WTbQHEnQowBCGN6VA57H9G4zVJjErnpbi5GK7GpMb15ZLNUZWJnUBw7WqjKUbsA4q4",
  "key14": "wkyRrpMvvqg2C6ihd2xi6nEubG6rCcdzTn1Ds5HF52UMh97sDLbkS9WqsiinsiRYu7EKkRnJfT7GMWKAQaGq35B",
  "key15": "4jR646Bet4f52yTHn6MTGa2JhJdwxMTkMr4T7zGUXgzCoWCPy59kTVpqbL15cwQPNn2N99Gnaf7fTS7hKMZ1uDZ6",
  "key16": "2NaJJDdL7BJbtFFD5DydfNrR8nAXXaKZiyAXCfx7CSC4BSnLuFnDPA1NDYrsSte9F9oevbgyrruyqGw76uDRFau6",
  "key17": "4TNjMbiFUs1JsELfkcZWK1cyhaUM3kr1ZcF9EhzSwJahL8x8hfXtM9i7aKmcpgVw8qEojg737TjDfRkbmGcZi2Wz",
  "key18": "nBUa8P8d9pt5VSQWuto5FyhU5CgWyr9RRb5tETjhxwF7f9mTowWHkjbSWv5nFXtGWTXc4ncb3LmuPbqTZqKRpwZ",
  "key19": "4KtFLTtk8mHFBcFh6NMk3bRhEoNynQ3CxjnuyhByQ3gHzXT6hAXEQxLQqGf9BZZeXAwNsfpAYBDQ6NJMmC25mJmf",
  "key20": "3mY6kuHbpzEi4KXrxen2iUdfTmzrwC4MQghQcXT43Fi4vWEs8nF1qJrMPTgiEnbM4uQNjLyoy28WrF9chrrwDYGc",
  "key21": "doRdCcCypaXVv7c4WiSxLhz3CnPdgMqqYyvkXcgRs1SY3WTEZk3s5Gf9YqLBJ3mHw84EUH3CsN8yTDvRFfawJ2F",
  "key22": "45UfiEAe6Lqdhm25WL7umJoDPVqQ3ydaecFTADS9wn1SPbxp1i7cghwFeKvBUAkFQepmMWJSZVNPwUvRp55gAMxi",
  "key23": "2MeebjN7kCLN1hSaxHFBB6q7yrkKWhBWn6G9CnXqZVtGv1qUEERbtyzHN3pgdUPBTn9xZQ2ow586Raqw7SBXorZ4",
  "key24": "4FBEvt4yLKV3DpzxZkMLFFdb7qSad8pMr8wjF4DpCF6mB7hDpq7k4JCbG5bNQotfS8gG2VHGH3ZUox5EUrxN6du4",
  "key25": "5YVJhhhd81j7KLaP8twFWAiDbU66Qwg7rMBFhd9sviZtkRcfeuK2tph6mmqTWc6p2uHRwUWsn2Se78qUA1e3C7Qo",
  "key26": "2HgzR4wdcUq89iV3xLhfSBmdbxK2nAiUPqbEbouY7MfX15pVRmgHK5fTWZ4Rvj4qS4HBZWjtfNeLfhKRTk6GNGmu",
  "key27": "4HE5jPKe5MjAYUU4wbQy5dfdmGACPLBRFxe533J71qm89DGXr3PmXAfrGtk47um15bQdVK41hLnc3sRVYQaPqdTb",
  "key28": "242NaBEhoY7ixkoZaEQEfrNpbd4VU623vUSvGL5m5sXJqm6gkp5J4QuoNFfF8iEXQvzkJxLcvGFGgeu1ZiGzxrkS",
  "key29": "3mooaCUTnhzzg1NtmxdKMx1m8fHeDve3JHPgaSoopUvNXEJV5YKufAc4eQkoZJ5hkusqCT3iGZW1qgWUBAMbP6eM",
  "key30": "2ghXZMiL77uPAYU8SSKjSyPjo2whqwv9fEbXT9bGSC4wXn3uEzbPg2RX7zXF5oiP2PTaPuqrKZGmRZZKxCf8n5Xm"
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
