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
    "3tfLK1aYw3MsRfoYScw1YMd4feBAMx8mUh9nVxwBWCoT3URywPCcp7BR5qLmtBZY7dgBVLRNLFUb4Y5gV8WeLNfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28aBKYHgy39ppAVFEgiySBfStnwg8Ze4QDfrz2cArMUNGDmRjhuRDLs8ft6hRGwHihWbWavprfycbdheYMJ8bdqC",
  "key1": "3DUbZs6SfigrbuUZPQNj68QRndCvBhGHbxzDgWC2tzSf1UqQgM4tT2Za6pRq9WKpsXYw4QufXwNcrKfsnN5inqsX",
  "key2": "5hndZ7Yb2huDXSLy9KktGJucYaaPnniNXkT82N7GPnk2FFMPVZBtBUgoGDCWDh5i278w76mVMwVcULNWDWpMFqiJ",
  "key3": "5EcXjxN7EJmaMdvoh227SXg3fQytPB9RS81vaRCjuuBiPRdDJyz7G7dRXmQGsdUs6gQaUZjaP4LgtWR5rgSn4SP7",
  "key4": "sZz17ubU5BP5d1ruXDuNHSoSCM5rovamXZNpLsP6TR9WubB8tzESvfVwaiHDRFjiPhajV2YUZkUcD313DNAERTz",
  "key5": "3Et645Z932YPGt6nuMVfcyrBG42g7axY1XJzEBv5xDRpr24pQ8xJ3EHKetPG3stGY65hcDkWef9YuU2eXwP9qqHw",
  "key6": "3H76GvmXzv7c36uoqnx3jK2JiDWwCpVW2aRA5pXYv3v3RPqoqazWPisGwTfNwVpXLhoE9UKq8hC72p1H6eiopP8C",
  "key7": "3hDwiRtjkgEbrtCcZqaUbmh6hu4y9GCWVoFu1MpicXmTRPgk2J9sEdVqiCGmy3maHjBqEpiiJUTYz4DR6meh7kvb",
  "key8": "5eiPXSy1tRXaCFRBG6gWuSx97RHjLfbyCLNBLB1UcgvHexqsg9Zew8tZK5Q5cvBP1pFyYGdcnN8LNLokYrU299AY",
  "key9": "eWssw9VErNJr4TKeTn5vyYR96pBZMHdGbk9afmTRJhBZHtJWMuiNrgSxR8R4cB362nEbMakkCHs1kuM7dHbyu4q",
  "key10": "3z3KzTbovNRiCDwMjvzPhn8zLNSmeGXBW4YB1MftBZp78uhwFdXpU92RzwAjwS11kUcm1YPTEvgSPQJ7SPEPSzMz",
  "key11": "5UKrtdZJ4Cj2C2sfpnYKTSgjxtDCnbvJ61unicHhg2Vi8uk38Vi6i5kaqGcmwz7pRAFESntiKoariS7zTKaAgQEm",
  "key12": "2KsombezB1ieSDTv5qpojYzjSySEFvWtmbtfiBMJcS5EMweJi5BfFgSGjgWqobZdb7XcK4xNYxuUdsTWzTvd1ECq",
  "key13": "T1bYuanFUmLBjf6oPS92D7kFWoMc1n8sPT7LEFNAKgLY4tCPJajEnTtLDYsKsJXKMD3mxTequZCWWBxCLTfugJA",
  "key14": "5TkDegSCdCMzj7omxZLErJdcihojX2pvDpH8T1XJLrB9unozm5qkYpW8wUW7SEFYK81H7cj8i9uisbDhG7GtTa8C",
  "key15": "BBUUxmomnNZFywKbk5JU7jua1oCLsmXKueqTC3HCwcG1TGg8mL9KHsLsBgd1RdXwbJDuPKCbqoJqn9dYBm9m86K",
  "key16": "4Yf29Lf99TvWSDct3LhrxWg6r172EDf11jdrwJTAi9P8m84MMMNfhMWaD382SFBa6mpydx72XxHuasdXGdG7PVJ",
  "key17": "2Kd6EGgtij7tiSWxL7sGeBK9RvZeXnLgp1H9GRd2jN9A3FV3c64qGHmTdgv95gouc8km6ho2EuKq648TMmQb79hi",
  "key18": "DLx4z8qQBfcfjtNZv49h5x61v2f2ALmE92mgWHMQxN9hUmr4EyupZeWUTLFy86Rj3XRYmpVUXM4PQi9mt4YsCPx",
  "key19": "2Mw8vPMfyDPXtU828nmdiJRGkwx1Qk34yvVeCGyw63wMMcRcJtTeX4btHM356NKR6SzptiwjaMNGmsqUqBu2ZB7G",
  "key20": "3KbLDytnAyLKPyrB5kGsh8sgpTJLbGtX3NdDLFNP31pSsVWqg7o8FKRxRVyK6Bgr9kj9aH4pBQ9hNYvEzA4hxCkS",
  "key21": "26vi4iRdzm8DxmKpALZTT3NvK2RiYX1okw7wczQ5xKA6g6BUoQdcMizFEr39mnZg3ve8je8GVuSH73w8WKsHiCpm",
  "key22": "4hFMjU5QEjgVFRvpdjGgHTji6L8uLMJht3VxL8DjvNWrStq8EEpqC6AEnpFjfk9Zo19pbpAiLigNC9dXg776SXQE",
  "key23": "TG7nTed65FvhF1ocDUCreN3SfB9YQrBgPefh423sc5DTiep2rqGsNdjDUMoQCB6iUib5VCVqQVjzaaJDQnjxses",
  "key24": "2L2XYETECCfQCowxQdJMo53psmtztHiUKvzT5DSTptdPiJdieANpNABcWAjbwNG9Hw1oS7EydF3UApQgoAQScZD9",
  "key25": "4yN7JD5Bu3rFtnsb3Myydu7eo8ibY9AKD9hzBee9SANqmouftRSFUgspyAjxHJeNb2nCctHEAHWUXdcUpkZVSnea",
  "key26": "D3WdjE8ccXnAcmqGr4gTZnfy7FyRksQm8tkpEEgBjCw1q5MkTJhcEwXjCtgcZXM3U4xMsASvHEgYRaKL98GJ41u",
  "key27": "3dyVcw74gYtV4jogG5MpvcSJRahn96ALJRV2W4bZFBMySRU1VFV76YnToWSBh6pSb2WX6cx4UxLTdopYeEcZVusa",
  "key28": "2twFDPvEjVAtbWJMuQwYRXWNsZ7JZJMUvUVDHzTSg7MqNSQULTuL92SycG6LjGmEetjQU5kC9s3P4k9MGUbftNpx",
  "key29": "3dUEAZbZJ7rp6fsJUnBVii4ACroehCwhCYqh9HXBKR5T6eoDspGYNSa81NsyDET9FPR7Tdjheke4yv88XfEG2BFQ",
  "key30": "UKSA2vKfdPp3paTtcbgHwt8ByQ6yxGvjLoFCBHFS6odX97JjR6cWVpJ6k3BRnh472LGvTpgwWqWCP1xV9VSgYe3",
  "key31": "27fR2GCrs41Y9VwW8VSwRxF2QhAGVhNK4p2kxaoVeq7tRhV6rvC3f1Q668PreabJYeSKnpQbFAFEJUEKG4ECXc2v",
  "key32": "55rtNavPnBghwoJwUskPpyACc9a9FUi6p5CuPk8SDH2MKEaNfuFL2ctikseRyTWEHErs24bFPYVfoemy1rPiJH2s",
  "key33": "2pk4A6cAHcFVyCfHvBiAemWppKJeP7S5Vsc5BH9dXhwD9uya894HyWxj8No2epio3pyvS2EczPm94Z9NC7mg2G2y",
  "key34": "2UMdFpPXDhmMDR8hSHuaoL5WB8aTAjXXoauSX9rw1JBjZ6actnWEkxNehfpHNjE7itf5iRpeh865qZJJxkcDv735",
  "key35": "5i7BQ6zNSdYqeDUAiVUP2G7ZrQrTGbTpjjtYDXFHdzYz8hXQuk4PzsBBXGbWpwxsCXsQ167tVQYaruukthy97eVE"
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
