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
    "4tDng9EvVSoxeU17bSzpVwkmKJ7HhmQdXiAULkVpnAyN2idmck83yQ7ZuCGhuUQyrz3AC2hNT4bZoHAKnit5HsRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ooGxp6ubjDQibnNH8JjgzKSWTNNT7fBwniFjihNZP89vQtVcnUJwsAjehXDpkS5Vo217DXLPZV1pBBRQZCDsJWH",
  "key1": "5LhwjdEWicCzYJASUB6iV9HBWHPLdyNrbpZkPwMC8kNtPp7zNuPQcxhaEHgokf1WJUm6HG9Ryky2rWQZBsNWE1vR",
  "key2": "2toNUCBeECESHWajqLDxAT2Wexf1DaSrdfoTDrYKT6Q2zXh7wSGXjwwmSorktHFqvk9CXjnkeCLQWxfviL6CvjV1",
  "key3": "5YcgDmZtCkZy84PjXstrnHXtXBkjKwCRp5TxbC1FtVFbZeMDDqFmY5DYAaY6P2j67GbLfZi5dBpAbexUoX4dscjd",
  "key4": "FBkipJggVqpcGQ6B9fu8qW7pkFxCoXQLPGS8oMVTWQQtFxfwJsFJm4APBFLuavSdmoEFhtveR2TXhTkpv1ibr4F",
  "key5": "2eKULMQTZQiq5H72KWYiYr2VZXSXhheiWgScCYSJY3re5v7DSENDXDSg7K7opqK58c5Dq6Lis5EWKUnrR1QHXrKK",
  "key6": "3gKQW1tkKqPTsLLWmwy2fUqZfuABMj93u9dA5rkxYCSC1znS8NDET1tXQQ1ZmYshmTNEQ6Tt8DCqSfm2AHUoGA3G",
  "key7": "2GHHQqjX6kmtQ63i1NmpZYTMWwYFxENvdPgZL7h9Smv1hM1TJNY9dWcNv3Ha13MkUNf8DvPBtuEovrBDERRTbeGt",
  "key8": "61fcq3kbDtksnXnS36uhTZXmCRBL9nUwQV78aNjPasRXK9uKDTq4UkkkUCjeeirfgLaZve93YR87KCjnBYmLdEMC",
  "key9": "4auNkXR9ZoupeBeik26XjTiLo7BUiXSWZy7ZDdZvmeBWsFEXobxbS4YZiExFsrGS3DvRmKfZeSw3mVLRYEqYQtVM",
  "key10": "5vt8v8eR8szMXsfKv7MQRT8u47RdtdiA9X2ZHqPB9tyRRXLUUAGnUa5Mw2TiVbGzQRwQGDF7qE4JWTLEw7E9FusV",
  "key11": "2tqmau5f4r887fNhM6yjocV8iurGxB25xv6qLrxJi5i9MSKYPUFuCtugKytPjgubmqYwTsWUwYAhnmDEvuCdneGJ",
  "key12": "gYD8PMVTgFspqUGPhc62uVAaXfroXSLa8zpQ3j2ECGPma3EGezmrr5TBxiHPoH3DR3qupqYqdpWHCAZtmqwnoDH",
  "key13": "4A9YgmUuKAhmanjnbZoLZtd5r8RXY8N2UZ8P48xWWk7EwS83o8Rt3amVTGmRrn113YGWjxWXfVaL4cMKHr1VDyYx",
  "key14": "26wmfYSD2zKqBds91SbFis3erKBpufVifpeZSox61XZEidem7iQqpMMymZFX6Hi9MawptzijxSTGccnhD6iNpxsT",
  "key15": "2TUYoidPu1CKb6pakcAtNGogeQQNHyPrXBCjtUdzsSdLLBhsn6nvEXq9Avpd7nSJFKsKW7v5rKE6x3K171ppBdDz",
  "key16": "3YzDyGX3Ndyuy7WGctdiEHyvJ4ZZPTch1MwZ4Rhw5aps2Tc2deu17a4FLmDnA32EfoQwFGvWRaSWZY4JVB5aFmZA",
  "key17": "3x6mTEtGzZWrttEjycpuAzdb6bJPzARsgipCRziRtbuNc9MNpwK8zwdfoPfXbE3JCD5p9debggjBN5UtRym7PiSY",
  "key18": "5pGWS5v377cYXoFA8R27VbBfFXujXKBefPswcBSe5RdE3ic8HdyE3QF129MQXL3jWhgoabp3vA3v7wNRDmAaWXWX",
  "key19": "hp8gzfD3i49g1tJNhsbC21CExfKntmpitKPrWo65v6GNKzMj1hoR2yaoxaafLMEx4M4nCgCeeiwXDXvMTF3AyKP",
  "key20": "24eYPFS8xTTxBo5vpjuhTSS4kHFZAKjTBR8bfMswxCbRfhU6KHmUosL2eE3ssJoffx7Pbix6aTQUTNr24Q1Gto5v",
  "key21": "2oehsASogWJpiN43YMKP6gJ6FXXfttg2zdTzkW8XDXzS8tzM87zAD5qR1zGy8ow3x8jKCsYP2F48GNA7vcEADRhU",
  "key22": "SAe1mSaM1jtbr2eaFw2ZFcoosHRHEM6J3j8zZ4MEBAzJkk1E6MxDVMHTMo5vymzPaXfDjXc52fQXnWe5yEukJE8",
  "key23": "5MXxdpgzvWTm9sDMnN1uxDuC3h91aCHWEVA2QWcwyuyK72qbzgSo23Wy33kFqmPtWSdfgkJLNpewcRrBophQTBMo",
  "key24": "66SHDtFMrZJXMQnr9shYwDh9ajV9ukkFS6xfivYhJjD2yNQu3AXBLxLAimG9U18H1SYUCV7mPYdMwJKUqQYUwNk1",
  "key25": "W2RvMUgWmeYZFRwzHE1DJnj4AsVoifBk2ddu9ziWRET8BSy2whvJypWw1JAzQrbsP13szEMwLhG3j8QoXF5eCkr",
  "key26": "5enNzh6ScSBrTRu751mhLPSk2cm5ZDuN6tYFhs1xwBFxowWqYHUEnp5sQFSJA28eEAnAayfMrA3gyiqwtyYWv5ch",
  "key27": "44EF263Dpuw2peWZK96Pb7AvYfJLzEzwdxMMf1SW3DDmeNdCtTEtEkqzq6pZmPV36xUME482w7ykrh97TgMQMUWS"
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
