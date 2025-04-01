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
    "541B75gTF96yJTm7UJGFUKJZyY94KLxSVHe5mjrjcsSikKY7byzdq7VGRHLTn4LMUcArhVzAt7g3VWJFuEZozYGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j1TqyfA7Vuusb3atrm8JE5zZtP8R15zt5Nb4TUPsK14PtWx8YZ2RGK424CZdvumwuSisyeYGhn5JHg4XSWJJ9Do",
  "key1": "5Fc8TZZvoc8ek7dRnkRqJSM3uh3tJQR7RXTdMVwqhHEr7Kb3aqCTp2mcgdVDEruive5y4pyVMftt5KbuwvfdJBE8",
  "key2": "439ubzZTZF9iLax4qQUR41WFHuFGWKzw43dF5z7hnW1j7ieyRmJRy4fHWnFd6VvKL64JujKGHcLjYLV9pRp2zyHf",
  "key3": "7nU8Fj518quMjhxYWkp5XHJvsWYTm5ufWU2eB4snKmKSy2d5TFQ5PDaoboMPyy7m4vrtUuid8qvX3pRku7Htcoz",
  "key4": "5bytc4XXmm2RUGCZZshCdQVfNsgTuMLsMPfgKHy7wCAvSJ3NKPoPNCW97qKUqphVrgHChsVkNijjeDcbtrqXaiy7",
  "key5": "coKtoVJXrj7F15NqWaMAt3JwmxTvJZeDvEb9MQL9dFQYkVEKMVm6DdPxBeQHSE72dXcqGCgEqzM8vHXn9ExffXK",
  "key6": "4gk9akjVfrQK6GQtqEiLWYFbmLgC2MDnfJedFJfbovQK2hzSagSGF5DMTeThco21CQWJj2wyJAt3XkdVjSxQm2G9",
  "key7": "53BLnWMCXdfFeJGLs66vLsDmPUvDo5tB7wbKJE7QTmTiwgUYYcGwii8nhcvmWbo9ihX8nQxaPsQbpp2KoyqBjHCp",
  "key8": "Pv4c9uhoeA259k9TDDfBxzFZHkg1sBhDsY17Z29iNWepGy9Jy48AsyPe3VmAj6AxSWJnRfgWhkyKJXcXgZv3fc2",
  "key9": "4w1HMfkRSrdbw74TScSieVeQesBHmN13utGnV8AeYwL8hf6fUxtsvfqxPUukacpFMu7R6iEVrypvgWkxkpNyjuDs",
  "key10": "3QQ2ZrjvQGYYZAotZSu3a2tCgTzASykqhG9LJNBWHRftsbHxeKft3ZzVhk8fC9Putx6HoMd46SXQF6Mo3WDXo1tU",
  "key11": "4K23G9xLWVwgAJxvufmk9rfPNvR8XnVVqjTcoXEqpV2HhuGaSUtahHr4oi4awUD7m2pY9rAFdXjJPdxvsyuqoMK5",
  "key12": "333JeHcS8dJzmTiJPRR48D2V9YujiEmBE8ipjkKuc8iSdRak3aYHwxHica1JPZP4EE2xHqB7LdDHKj92zgEDMjxA",
  "key13": "FMkmWC4BE7KDfDbuooFTSQQbhjrArmSQ6dQEWUGgD75AeWn6Mn3PHPXkAG6TsTz1oxmUx7y7nQT8hk57mMkLEv4",
  "key14": "fxaGyLbJ5RVCLKCqNuU3TpjS3MEvRN6ycKf6RQehxsHL7yY2boAFjtUKYrCRaEwiS256WXe1sYQvRGVEdEwTvNQ",
  "key15": "3odS7PLog6ddchdfGbsW23WvGce8Ra6gtGuf9tjPKcY3YABqCvCuET2K8HKGM4JzECMR9U3Y6fwKcY1CEqJJSZJ4",
  "key16": "3foVJGMt4meVxdkjpTtGfwieQvrB18rhGeAAaSvun6tHzX5tW2FkdD5nTT16UzM4t9DvG378w1n663TGVzzehDaw",
  "key17": "KngyfCNn24uAytVHeJ9hkqR8R7a5wqec7X8Lopk7fRvKQs8PQL4cTSaUmJd3kUTEevJwjTZG9PxutiXbCLTZyUf",
  "key18": "4WnJaU1K9EZmGWSrXYkAyigANbTmtY5b8tL2chPF9evCJYSnitRxJZzSv4Bhq42nF4Utmj6jP6F4Fzvg1Vqh8pZn",
  "key19": "46q58nFLmqojLo9Pxnke2tqnkq9ahTsBb24nakEDjyEq7KsB1g4Jqxioxsi4anZmEpiS98riPmJ1qFpTvVR23C5a",
  "key20": "56zEqNMgiTpKzxDYpzA8Dky7ifP9m8ZoZsKaQsGeXWfK969BaMTrX5ECwToFe1XEwSX7p9r4h5QUjEZsCf5CtVgP",
  "key21": "2Y3P38W2DUVvicfYd4tcZoVpxtVDrZZ4yt1Z5yvRgYXiA6gjG7GnX29AdcakqR8AP18wFQtoPgeaiMCvUQjRYykA",
  "key22": "hEGYHUezpPd2oYhFfJJRJEafFsAy7gEJvFhBvPzJfL2KX34rDD9zWea5tieTRgdUZMxMpMxqy6Sj3jDdMoovoJ1",
  "key23": "2fX9Qpn6aU8jKG28mU9ajqs3XBa1ZxTr5owwJ3HmYgmR9gzZisNDpf7QV6BtkK8DgyJAtG59JpCgNGanHdzJqEx4",
  "key24": "4RceTad4FCckkMbHZCcmtLUV4PA1qdhCLXUvJYSiGQXejpywdYtqnFWmoPDQ2WY2xC98fkjfWPVPQ9WJivXK2JGv",
  "key25": "4vxxqfnH8FBCswodLfLX2NYxL5EE4U7SRK1dfCBHsXVrpnEozGVv834Vy31hBwiKNFKUdB8RovjS3FU2KTEJT8Jv",
  "key26": "2QERMqRUCMdnSj3DgBGWVBnhh1FT3zgVkguikhudmNooaMRU8jjb1XJPtTP5MKEsNtjTfavSYjyPZVvqhCwGiXo4",
  "key27": "59rZ58NavcWyqbxTPL5bpSxxJKCsq58kbFQaNWYfNTZ5MiZu2hBxoywrtZ4ArPpxjxKtWoHQCnRxnrsxUpbxAFtx",
  "key28": "3mY71WQRDzRnipBGXX5hgkN4q4Mz3Hg1GH2XpBpRnCNFjWvJs6DCn5DkWMQmDfJo9C73HGfvC5wAXf8tNDCiLQ3u"
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
