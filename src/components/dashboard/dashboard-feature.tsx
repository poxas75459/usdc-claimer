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
    "4kWLowsFV9S6a2szELsn47qYzzg5HnZhbNJ5c4W8kqQt11BpWCztSCfqn6ZNYkDsUiGMLKgT5q7KgkudmDd1DhHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fc1HafxhhphSPsbfTcG7xCFQNttZFMLzSH2vBWnwX7xjLvUXgfjfoKSa3XzGB9LZn7AsEyRKHoft9GK3VDxVAZr",
  "key1": "4ZB1L84SwhqsubHrtA3efatt1DGitVveQyzJSjYzJfjBw2J6EC1hVZyiXNRZVQDoLwJ28ybE1EAnov8k3zdBvMqt",
  "key2": "3cJMDsnnAhW3yCrkp2whN1twpeFvy6g2jAynxjQCNwPtLkavCxN4jq9TBp9DtJCuDL24jcJHHxewg4JgmHJ9CPAU",
  "key3": "2WAQAQUzSb7fBtuHUbpskeFdZCs3u5k5gpLRcSMxp4vwcZXpJqjmG65FgLynKxBboe5fpARoEpECNb9e8yuYQpSr",
  "key4": "5tJ9C4jwfTg6bVrsVK4yAVG2Mbs5N2bcxrMZZ7DwfPswwKEmiH6LBp86ya8NVNM9wAQ5UMwqjjvrAWuhaVsTQi4V",
  "key5": "285vLGBm41yzMckAoKkc5SGeSXfoPdAn6bsJ5KY5kJc2RMmwqPVDiw8CKynxAsTr5DCahWfaCH9ynm5MuaCwkBmV",
  "key6": "4xLrz5YqvxRGxky5KMrDhyv5Sf1pnRAPXcPYHdFZMJWSopP9AoBuGBv2WyEfq4zdqobTWDQKw3usjwaUrwgkCpFh",
  "key7": "3FWZoGc8e5ezqoNMW37WGqnkpoDtgi2HKgogncqoUixYpXfLuGeCAgaHD524MsmZRPvnCrnypKdwv9gJohtYvvE8",
  "key8": "234ikso8Bdp6E4nUNpiDmoN1nrWGN1EXyApa8tLV7XYkWN6JHAL3THXAW413FnUZzvcgSEfrg5oTFXCcgHgLC82W",
  "key9": "2bBKshMu7vr3BHberoTADz3fxqnsvGAKzUxiAkZaVxoESiZxSMjG92eAZ1SGR6MpHnDY3CLf3Q5tiA85sMdRG1A",
  "key10": "5JidU4yYy5zBmQxBt2ABq6qUL6APTCrTjm1mohHd9HgmwbfLjNSgeMD1pDt4W5Z64ZR7iHM7PYECiCheAy5ZEu6U",
  "key11": "4rV5HdAodzzEjPCWG22HSNxwFM1mpdahNHeVNDV68P94DBZsXyGBTMRjJxgDsR8FdhDHEEqspFP2WKUAaCUojt6J",
  "key12": "4dAF8QFLmbPwrjJHcLUiF6oHqaeMumkHv4R7DEtTCY2gMFyxsdSRKcSaqP7xsBcaRFQkYxqhvTqZ6WdcjivnMR89",
  "key13": "62kKFnCi9L8SnSxXFFsFEfkpibqoftoWzY8PYgm45XRCD36FugeNNnXfgEzbjes8D6TEw5wbGC2NXz1k9h7EpCv1",
  "key14": "SJjWmoRxdM7Ln2Z1ra8DSP7ubs1mQ3HREf1ScD5u5J2WUDNcuq64B72V7JRCmAoQNE6a59pep8E8BHx6cqmgxhf",
  "key15": "SBrFzFxPCKSKJkL36D5MWxMuJm4bufYGGainSVWhWCARQ7CCsZqVrS3FCzkdtEtvBW7s2tUWqNxf2N4ArPtrQXB",
  "key16": "3woRHodKU5ZZ659AngqFDnqXGwWuLJauvsudVdECBhXnX4vY2eqQVjveXyMTeEkZfzX8ekrHY4ZN73GjBySYQbjt",
  "key17": "4EVMS9tHWuzHVKvQ7mjrmbrpMBs8joqxRTkGgYjugy1DVdTM4AEgx8H8Q9QdG33AUmMBF9sPf4rXHdtDDM8xYdNr",
  "key18": "5DZkXTTonBDnKtPk7RDDgwEzhah1vH5fhD3aDoH422SG3pokuw4QJgW7X3UzLYNQK1ggFT3BywzTpU5EWHc5TQ6b",
  "key19": "fA1RtwSw8NiAvvmokfRPKZZR6sSNN1zjSpyj26pex62tin3TUdyrxD5AtT1CR1CyE2KQzd3Rud9uvivtP6yk36x",
  "key20": "28Z9k4CkEKDiRE92fXV9jduveqHLas9tqM7SeX2MJTAYgx5wP3PE5wtYQtSA8nPTa95eLaJFri5bJ9xVmYYVLjTD",
  "key21": "4zgTppnmg7XoFV1Nn92F9R5gQ4pBEbdXtJs9SgvFCEon2KSN3n9Wk5kFFGcqrG6LYv6gCik2zuyPTRq8VpYhYdt3",
  "key22": "3DpwKYf7ntvEeUfNorhfnpNZ4cdrULtkKMgw2MmDVCQXFDe4pATy462zad1LZwh3whJnb5sf2bHPqU5fLKEdL5b5",
  "key23": "4YTE7cidNSGfYnt1u3PQLDajc3m63JBRCMPpUkSi7ArdBpLBBA3ootsG9svUgAweyJH2c2Guw2f79TNaXK58PQQv",
  "key24": "23SRyb29RZTkJs2zsLD7J8b9MtjXfoF593m4fMz2WYh7RxWy7aNz4hNZazxxpLLG48Zr1yW1UjeSv56ePxdQAeTu",
  "key25": "3WiX955KFkpxhVxMaC6JWWe6aMbD6UinP3tnNb1oJV4UDx9PQVVC9a8BYVnRG9Xf4Zqp8XnfH96eYKC6cE348sUz",
  "key26": "XUrqfUnW81pE23tP7n887n1G8wWFSNdBzndCGbFLVbnwnthEEmqcZNVpESVsgmUZAxQdzEGYrE7XWRy9xRdP7Zf",
  "key27": "4vLRBLbmNmrnnoDvCydyLTpaLjTpbV8H9fjvUTD8Dkd1NSNymByxxRSMySyNNriSUcUHoCQR5x4FWyWm7NN5ayih",
  "key28": "34LySvdDLgMaieeH7kozWvjPPdEE8AL3WXfPB49YVZQx5b9iyyEieCUFJrsK1d7woUyS5FJo8vhC8WDeEU5PyvTg",
  "key29": "28QRS5eMbmStXDYqU4Gq161tuDMSk4Bjp3hfUeonBXxy9ySEWs6CyN8vAXW53MJGdX1k6FpwvmCfS4BAKEEAaEmr",
  "key30": "6mMEfDf2pdj3Yr5WcBMML6icVFquN1NJa9Lu8DeeTAfbXHBmWEeJUG4iTmnoeWj3QyToiGPfmBD8MYzUiHFfpMH",
  "key31": "3MfExyUmxJ3F1XFU19REQt4uvtJ8ud3pDZXdf4hF2NzCRimbpoB17uxtBpLvGzHF3vXS2o4JT2yDus7HJwSmoU51",
  "key32": "58wYxmAeUzsrxJkqRsQTeESEnsJFbcWuoPuX7HhdsU5JNcwgqqwpTzGnkW9hYPBwXCrRXE8WiSuu4HZERVAbrUzK",
  "key33": "3NQoLHRYraeTjXQXNdenjuoK3MFeqTTRmHGPvpKE8ZrMUuZ4Krvo6hVg4DumEQFdFgh5Lc46BFx1oNPUXsFUfUSn",
  "key34": "21HFfsM1D3UCfyNB9Ket9EPeZ4EGKf4pEX9Su9L6MdRM2SNFd6jAAEjfjo5MyX9hoBJ8SNubBRntevAkS1AJxPGY",
  "key35": "boHTwf1wyXBtV83jS3B5gHu11cMjzpVR8vjUrH46unJm9QBEaBNmfH6N3j5md5h4gwtUrZKZ5GWCaHn9V8hoUXs"
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
