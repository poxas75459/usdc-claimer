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
    "2UNHtZM9fHzsGaLJek1R32YrsEjPcbuLLbtt18mU6LyG48W9rEDctvRHGt9s1UvKepY3ErHvsJyDLRkRSkH8V633"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DG7twtZopXH8xxdA19NmhP14yerNPkGo9kBAnYLKRBZ8tbEJdNX13EYMsd1XdfnypNLQkJYYDNXPaAwGuHWLSCH",
  "key1": "3fBKrzaVr5gELjE9Z8P2DDV1FVtyHZjmPG9bdaZJLy1jk18NHthUhWs7N8twzmhTcNSc7NXfmcwhDKTfLJwRLfBd",
  "key2": "4zsWKGopuN3KpnPy6mDxAdTUMh6Sn12auDU6N7WZucjbTXy2QvJE3gypESZkcvNGK6Hqx1G1MpwuGbEfJ55D2ugN",
  "key3": "3oqcCmzH1EHEXgSwoHxRGUHVNPXSPjPQoGurrCEdhaoCwtR24cQC8cxiBC6vEyHrZ7gD6Ruu57agenUtdqv5UUeT",
  "key4": "eda2CHdHzoiantC4gxHgBpZCN9bN6dGB6kZF3cKXRoarV6RAA2LUWnWwurPrNHdZVAV3hCawkKtTwprr8YaskAY",
  "key5": "3BN3L7ucRVAKQf22xwTtuZnJLX2QKxWrY7Bkes9agtoCTkwbLivNvU8bSnXeDiZvpzVvs4FHT4cg1VrF1BWwKyU4",
  "key6": "F4dn7SSrotqKW9Uwv5RaeFXWFaDnRMxicPtDBjEBmoXNdTdsLnxcZF2kAJP4uuy462AB7UpZHKyzEo7y3cA6h7Q",
  "key7": "3izQ24NWJ2efubSKJs1HnsJwVHva1PjmsidGF9aW8e8c4jaBAasS5mmGzhX6XsAWw6pn5Ttp4TyZrh54FMQLczEh",
  "key8": "356UY3LEKbq4YhxWz9dW379Aj3RJ7yDkLxAax4L8xsqowByCsRvtbCsjFsVA7oGwpcffAojFzQohiBsMybAhopyx",
  "key9": "2bzxcgzuAPej35p8tiHkKnKCen4uUFY2KQPidPNXNFXsVwhCiQsfDe9AaKAtUMCokJupvwVESqqLnqK5op6SZQDx",
  "key10": "3hyqQa2fHtG338wWCPBtSZ6PqxFzEP1ncaeujviitZy8oRg8g9fXiPqiSJ14Py5k93gEgMLvvceoeECdH4FRE5VZ",
  "key11": "4BsmaS96KLkCyt6Mv9A9PF5eqbxgAxa46wfz5jXpxermD9MzMNSSenRS4Twj2wc5KeAELyHz2eAntne398QrQUUr",
  "key12": "2atC8Q7Qt8k1wdRoW1pucysX6GK8mJUUePh1wxKVioAtTQxpEUiZZt6LhSExHstSkSb2EP8j8qAnsK36XSBhhwJf",
  "key13": "2GoGbUXdkfMGznmn2ZBm9Ys5MCca8Vu1s8UXYzSr7nJ9QZpT39s7Zd6qsLz8tNxqAzX6oXsitXuAzztjazN21kCp",
  "key14": "3Ef6sk9GZkXe3TcPTFo93WHapHUaqhMyXhXPiBcoiXxxKK2aH1VBZfnRuh3cjKG4QmoX6qA9d7nqh9DErGwCxFyC",
  "key15": "5YPkt744TXgK2tpLh4Q8mbtPUEtx8Jwah5Mh2QkC7VBp2zyAucRn8rgrtfC8tanrbZTAYCXTT1enNgvfHRk9uzae",
  "key16": "5tMRqrJh5WTG1xYfb6T69HkGWpT6gAVGnwNP9xaDYs2YWhZbbxyXzZZ9TzzPN9WgMhmamvwK5B8tvkxNteyXhVHw",
  "key17": "3yEcr8tdC5c5UV13rUpQr25UZC5uBY6ai7rezFRUTvranQbG7gbC3TUcHHCBS22KeR5iW5VFrSKjuVk2uY4KgWJX",
  "key18": "43SXzrXLbzSSFwZegYXZm1j2oZhh1c9rEq3TFFDEifq43d5CWuBtY5c3qWqeKGrfoWNuNz8gPzVgdPXSB75hb57d",
  "key19": "3nmUWffvDC6h8KHxQR6kznbAMFguhqpQVM7u4NFXL5pAUYYso4yNTfrfdYgQRtWVvDvYgg6vhaBcxY9i4j6tXdZw",
  "key20": "3xbZ6xgpFbw9DttACBoCzvDDtAtD5hUMsXb3CiW5mi58oiEcViKymPCHxwPYBG3HssHSLMNv3sLokrKfsTVyLsNc",
  "key21": "5GNX9ndoMSqQCYEQfSbW5zbdkz6Jwz96qv1mMei3QcQr8UvR3DFfnzY9fHL2GWiwB8d3Rko965g6CUMzjvuWErPK",
  "key22": "x5oBrLMKdJyyCpLwfEhDqqi39uMrNXCQQo7PgP56XT1TTbrNKuYXTCeY6QrzvbPeVsXDsQtryqnCi2EBnL5LUqz",
  "key23": "5Yo3TH2qQx2WMWDZx8eZiL4KqDUCZE6pH9R3EXUjFq1M6iUL9ThvVof4mL4GLCWXXdn7FEcddeqkJ59YWdwMYBHu",
  "key24": "2J8ZjEPVFnGsPp8VdBvcDnyNE5Uquif24Q3q6L9gkUEeBA12fxN6vqqvC1SbDFUTwKCoMVkuSNXtK6PhbL16yozF",
  "key25": "4cm7yqc9KrxRZog2x3sBvadJtS7X2pNRtu99wYkTm1fXAR8KL3WN6WBMvAJGbanzaovJ3HQVQTzvwtRbiZ1m8beh",
  "key26": "4o8Fmk3JGWdUgx15wgy82NK141SsFHYcBU3Zhz8GgpDate3oiThFbRm38N295mBuejaGkuCgUZvo6FzQmJYnVoHD",
  "key27": "2EYcTNEm5hG2Ra7nNmcb1kmc7L7Ehy9P1ngRmaAiLJAD62Y6gHzY1jpkCtQdH7NhgvpukBEUzXugu5rT6RJ2a6oR",
  "key28": "5nuGPTfxEiaPpUyMKoqLU7CkGd9ULNBdCLor5QmyMpwZxCz7dxwZmdRJntwYqg9iPU79oyJuwbTh5yZ1sWouPMZs",
  "key29": "3r7vtQXS2LSfYKDRjZbKLRufRvc94sNjsGML1m3K3P4pbRm7CPekbhvVhmxsZGbWczHWiP9X3mMRTffBoHwsnTKf",
  "key30": "3EeE97hYj9aEwTSTHxzHhmXBi7WymFvwt1xFMRXKJjXPLH8RnQYjfdQLXHh5B7VWRXMuop9BfwTXBfDH7WkjZwqJ",
  "key31": "2Bz8hHVTXkduvoDAjDHWSCWQ8di1TUXRVnnhAeoFMwyUnK2Hsy7DinTxtkdKs6yzQSwH1piEfPt4qCXzPf3uFjuT",
  "key32": "2Q4CTVesYskWWcNHQLQeiZFULPjed8scqh2omA1NenoUUfGTc7DZcDzT9KpQMtvJaFMzun4PuCPJYFihMFHS5AJ6",
  "key33": "2Yfdy4LxThr1FECwmMcx4e1DHTq5AW2BUdaUf3nzqk77U2GdaDZadFavdPDr2mUUfnGLvytrXCwNctDnsyzdBak",
  "key34": "aSerYBRX286TTqdWmSUyoTpxKq1zngoeGd6ZKsaK8UdAVRZi2qxaTMACd9ypwY9Usa2tfkdQVJsr6ZzUo3c28vW",
  "key35": "59EV3C5vaTcgy2KEqGZVnNe3HuuAQ78CDS8Ssjgv3fs33T7oPHtdW4WS92YTUDe1hAYbHhmdtpN5SqNNqaki73pB",
  "key36": "5zT6XBd1uMWtiGXHkika7ut8zRsEf4MtxbUYpQPRNjbi7ZBrZjRoZ6p4EwvGkNbCD3LrncFVLPcMcFqXR5Pgzd8d",
  "key37": "488KjX4RjNu6u72hMpTLPfHNhHvQ3iHLGKFSBxQnugjHw6ymfb1gMjmUELxeid2xmxJY8uaAW6qiUxf8arvw8HR4",
  "key38": "3mu8wSpgsPEXHVE4ZhpqRyGmZKKFgoBTyGhhALj3Ds1p2wCBBzphooEb8c2Nf5si1rjZJ6o343NM6k6WeDjS36Sa",
  "key39": "2UUGQbQ2kEdkhv9Dr92apaBXoEmb3kLxdhSv2AJmgpamPnuH1iWkfi283jBKQjfs9Lx6s2piUbrkSfB7HimmZNTv",
  "key40": "42S6ibXVGGHLaZsY5QpQ438sHFLdswWUNP1BNnGc1B2oqQvUyZB1tDC2sY5cs8LBEh4w3cEsp1dH8P2irR8uszmV"
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
