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
    "MwADJ4Mj4RFjy9qB7X3ooLKdm6dwLKBeWFzGA3iZRfCdzgf8DqeCkJ5kF8bJBNcjiBZSWVypfSx53iFLa8ca3yV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ms63YPqhLFrjW4sbf7o6XAmgZFdnnPjRpDKiDccA49H6r74ySjYBo7bZicNFPgpiAvboXZYYr9AMpZQ7UDsDbcm",
  "key1": "43UXzhkAtnSeoCUheo9Pjojh3hQTU2cWvhbiCC1HnzEeEXT93ToukrnYcpkNSGZims2J5KTtq1e2TtbojBXCv5n3",
  "key2": "yxoevFMgMV1CJfZft9Bo1wywPvR7wgCYKvAGHqyKQRHmG4AqrEpSBiCdyqBXS5V8JYpErCQMfMricu9DoU4BpDb",
  "key3": "4BGGu4vGvyTmopfkFrxieBiwS2yynNC1oMrxatw5WEbENXqHc1nAhzQqdvACQVXBLy86J7ioJUqmoqYU4BCGcd9a",
  "key4": "35tTKAi5fZq5wkMtormdtfSwyr4SuDehcZ47dBzUUwYkakJru1FvC4SQobEXGLadGq71z4Qt8DqKMCZWVGVNfDZ1",
  "key5": "kjbcyJBy8mDDZX8jwAZwNHyicZCgaf6Ke3dZ1eeGbJVdaf8JKxVJsMb6VKnMqH6ChqGyD3r2ViBs2C13Fnvgcve",
  "key6": "3LLfRJ9T1ebEz4GCjjvA56A14CB7XQ763skntxNCpLcnNi6DKS4mcnFPU93pdJL7xKUjTxc5EMCSdUk7bLhxYRGW",
  "key7": "3MyEJKKDkxEPVNrM2LVLzo2zDN4NaYffFYQQwjyvBqcFTxc4zoRt8Pd88Laqujwxk8UEEN34o3tgV4G1VUPvhu5k",
  "key8": "2UE2ci4mSoAeNKPA6A1T5uifEsRBTRjTs3SbYN2Pn7Rr4tNoMAD5McnNzcmkjZPaj6m9qTSK82o9e6m72uqfu3zr",
  "key9": "3GYn3qZWeFLAXBAEQQn1Kab3RybDfXRoVsGAnPtxHNaMrpwaxJUTdZVSeUVBedJF3rLkoSANxQqErtbFQCX2bLgq",
  "key10": "2STjTcazFLFY1WEwWA77KHJnqkKvhYmdkoxcrZpUZoHQpmfmmZTtLM56BKsJvCTToVqPxWx5TvUn5AMPeQZMuUBn",
  "key11": "5n3srQ8ZA51gnXxSuWGHkaNrsjku2Gj91KPdhpR46KZDwPmAiTVtESPkdmxqQoRpv8Joh4uDr2maNdssaJY1Pkvu",
  "key12": "3h4MQc1UsyUqzJYNzwazDhD5VhD76e4bPRUiupKgdRYLPXtJVs1twm3nREeEV28F3sj3BhqBbL1p2BdZfhaq5nuL",
  "key13": "7pBDeehgiN8QBbeHfaJAe8nfUFemEzordaXpcm3AHEbvzdYgLceqWw9vseRDxb6d43ut9AsVmk1ekFA9Votc3gK",
  "key14": "2C88DKYhSFwaPATrqeazgbSec5xAdPcVt6UgJnnpt6NA81F4NP7zaFjQvyNYtw15Vfi7L3jaPU9LNgAs1Ry8vWcz",
  "key15": "2bEXui4zW5q95L1ERmpqEz8h9mhSPN9V5bz5uZ5KZNcT7758Rg2pjDfUgWU5aTdLc1Tpy5TybtRYnrD6ZaVDnf3v",
  "key16": "5unQdzta8SKaqHro8JjDQNFAcu2Sn6RHnCKpXKvbjDJzdAEtM18aACPsdF4ZekAznByF6jU2Sk8dsQXvuMSkioSv",
  "key17": "3dz9fjBrSUXCkawA4sGqNhTT6GzJbFpsSK3hoyjddTCTx1B9Z4qN8b6Aky7YDVfrk5UZreZd6WbwexvAUxNXX4NL",
  "key18": "iCB5R5hErRH4QMCnC2bpBUiA849qxcyNm5fLbHZqKzGK34Vqbz8aYoz9nmCUkeQRGF6USF7xdgcVZZLHdReuy35",
  "key19": "3afvKnVJ82AnwSnRWVhkfbCA1TZdjTWzJ6726wBHPXNQm1sJKoG8d7gmpk6kq75vkj5dRvTZ5EdgcfKsnrzKnLmG",
  "key20": "4MUKwK32XQHhJrHdh1vzAFLJmA5rVNKHTtLeeg2rYBJUzytPxRH81QTzs4eEqHiin2gT76YEuy8qsPGz5WxGTjcZ",
  "key21": "SYUKHN98h469Tpv1t3AwyrSUbtF2NcCeryftaKD9Ywbp92MYB1T34bNZXWJ971VsvJUQZDqqUU5A5g2jxcPtbWu",
  "key22": "4x5Gh3Zca1QbBMLnm81TMjpXRzk5oYbudrFjARmWRWvorQk4P1XmsFfL4TZKKEQv88twqebuPMA3HYwjiMqNppad",
  "key23": "2nQ6hRGTa7Y61sN2pQmU5M3zitHMSiCwL7uEMFpUoE4ngAkR3oh5QMhEZJvnT8h2ZMgL5vdkgzdGRtt2Xvx3VYjj",
  "key24": "4XU2SWGtohZtrehdrhxjqFMffFfUPTnbUFMyABiFaUv4naLTHzGtAwZeApb8ba48t45Y5c8aSGYCHC4Gr1dx9fQy",
  "key25": "4hjxxpra2wHE4RFxT3iLkqv2VwmxQdBS6qZDKyy6w5CzKpS2eyLSdKmewiisU7kaaPRs4STxAmdNWvuQpGv8xeN5"
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
