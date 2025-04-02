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
    "5bcPyk2Z3tW7uDpYsUWrLJPVxeqpcTmcprkvrrdup313Sa6fmdtyFzjaecM49ECHNGHRSeNgjSo8xN7JSysmHFfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AvWZkMaEiKstieuDajdjUUTD3LFAWJXEsUyasRyQxUZgDAUhBYSKu1h58uAErDDAHFWCvWVWjHrq9V112R9CsUD",
  "key1": "LRveUGQ99WwD4Ei1hyi7y5nkCnXAdBaJG8DLqJD9B7sgXj4XtYdMkz8j3kB3Q8eFcjcpeT1Skie1cqaAkPAweHh",
  "key2": "25KfdYwJjxDhPcq4Guq1rQ5iiSaP3CGm2vSGsuudooV1ixwdTBKeYSvXwJiqmyBpruGZEZLFpCqRNyhWYZqXoiiF",
  "key3": "4SnAKg8DyjunFZ4S878ap9jydxGuP8C7pP4HmPJ3TpJfc2NQvF8fo9FB61igszeEtCiGAQ7mmCEU23hT52LPTfq1",
  "key4": "4jmNEUWh4u2n5r2xhAW6H6dWhYTwGNp18h7FpF1xWNb1nxxxArAEqkgT6uyujMLK1Xs47c831ata3bzACeabfuJm",
  "key5": "4QtAWTh6xeGffYY3tYbkPjF1jFUqJLozaUBP6ofG5e3AJy6Vzqtco5674q73wGbxG7uBHz7UyHtBuLPTBwsKc67y",
  "key6": "4wMWd6ivL16KKKGqm1QKn7vakL4ZiKMb7BiQi6W7dwf5aLuUpPF8MZardTjhDBft9WktytwhoRjotZpd5XD2BM2T",
  "key7": "4iVjUuDD8iiPBoRPtj4pRdDFKd6t8MoXJGRQ2xexmndt6VzhobMoCuU6kUL4ej5zAffHfA5F4P5JGojoHR2FioHp",
  "key8": "4xhfKxoAFrpTpVScpSoRevDiwvbL2u7SVjdZFMQ48WUixa9GpF6SvxymD7ut7nyJfKniQ3DavXijmYhFUvTHkcGo",
  "key9": "MP918QCjDSfWFF3cKqLvZ6ZGTDzpmCcgBhTb2SKbXb7aUPwj1kRazi7pkj78hhMk2LbJ9cb7Th7gEAiFDSyXfWr",
  "key10": "2oDQRc5gW6jeWHwBrDDHw8MXnHv23CEU1mBCWTsSADUwKx7x93EVFALPeVkpVqFfdQnVBP9mgJxy5Z7XVYsP7qLk",
  "key11": "4xvDR8cUhVkjhqfh4HNd6SRdQU8Ubm9ekPvRP4XmmeMLkY7rhLDBL4xBeYNBrx9K1D7QTCcbyZogc7Xihiin8P9A",
  "key12": "23EYkitBuTroDEtqZEij3QdpwiCr2Np8eZ5SnxDFJWS9ChVmtEVHoaA5t6XhaQ9gQNmb5nUE4NpibkxNbQZYSUi6",
  "key13": "5fpPor8y1hR9Upomga2ELGqL4F4Cj7UFo2wMJ3kSMu4JmuBt1wZAJnox8q4gxFPYywZsUeyoH3Zb1U7uBjzEvwDC",
  "key14": "5ejv8zaycD5CiQxLuSk7PSrvQX1kkFS63ucmGRuFBWvVwypux4gjpC3LpQXtNLUxrKy3uTwhXf58yqqevxA2Lvxn",
  "key15": "64Tpj8GfSqGo5B2da8gWGFC9Fat3Yw2pazBBHw1dPRXkK9oKmViz2453fJnV6vExyuYAo87w4pycfERbxUVXUqUZ",
  "key16": "5ajhuYDAbkqSv7vbKMKiagCrcHdtqBGienMoiCtZwWBvYvQeP8RQEwhWXUZP9Yj1xkYwxcJxNuRd59aW95gCTuy",
  "key17": "42JatPrmLAnmdLnt2EpDmWMydyv7DhRa7oEUk3UieEKQnqq7EmNv1u7H1EcRzDdffdwkuooZz5QqYuVMfhTTKZN3",
  "key18": "33urgYNxoTyCV3vvMhxpjp9bjnrLryYfTdbR7pjvLZDZmqVx9Cr5PBruwwG28uFjCgCaRrqvQxurNdfgcES3CffY",
  "key19": "2SAWPMEYnyxLdsf6XbEFm7WsW86LEtbNfurqTNq6AhxkNb7j7yxZGZXzwtr3w7hnQv74vZdzuRrzQU8YdbfpmwSS",
  "key20": "3NoXzS6r1BhZSeHZ9F5Xy8VAMYmc5c2HMtbdBxezuWiNBD7NqznRxYEh5tQR3LAqa15wQVUywhcJBs3bK6dj8aDJ",
  "key21": "c1AVuNSghkh9QVRULTr65EzwAqK1pCWrHLcHdraBwEZss79oVtd6pxXwA7HLqVwhxuYMYqhVeYbKFDNzTt8GK79",
  "key22": "3xF1LhjRYmjLnfZDux5JbXBN3z5MShKHgkfbsYiYk5cfV3BFRUpd3PfCcCTviWDQjGQMBNuvKqZvYiJWnSmBPMiF",
  "key23": "t9Un7qpXULyeeMBctPrUREVZPCSEtes4S77EA8YH19rtrSeys4KXA9FLNAKMWemWqYZGzT1o8Q8Jf1zgGZH1jrB",
  "key24": "mBQYEKSbqU9WerN6AkqhJqnopPCxpjYJnLVBLGPhMFNgWqqkXpgAe3BYueVe2SnNa9aJEcqMAK8TUP3kbRo9nSG",
  "key25": "5nQnJ2qBa7u2wPNumvdrEm14dCicY2px3HYnEk7E9gDuxTdFG6KxR1YjgzgEQU1iQ9zofzVLE5BeqmM2Xd6MVeGu",
  "key26": "5Q1dFYioqrvgrTvs7gAcMEnz9bqG2U2FcezbYL2X7263UFN4txuzg5jfkBnHzY76hGxEeM1F4e3oU1Ydewy5JM9L",
  "key27": "4hVtAbmYc6PAKoXLLVpQL17iFHU2RHkiwDnepd92kxZRPmCFjhPwVZx2aPEEvFTqLTq3WiLrXfsnt8Yrucd5QCPp",
  "key28": "2igZTSpsqqndCEtumLgnRYiPSvAsiw4hCa3cxqyTnopJGBnHYuUfMWkv7CLAqCigEstjEJ1qSsarJv87vWG5tziT",
  "key29": "tnmJNCUtv1uekcQDqTjGGbo83QTRjZh9gqpWptJiGov2NKVoU1TNL1kpn35cLxJtNzjRqbdhPyrwZGEKSowLJWR",
  "key30": "2tYCQG212sYajV48dM2ZTe9btrrRuCnWdKyv6Rb9YYE97R8eR98mRHEPCTGXcefwfJ4xDqwMyV4WMWecqbqtWN5W",
  "key31": "2TyGpXyuMgVaqys7FLeJANt4iK947G1qUwssd6gh9DwevbzygcmfcV9QpbjLp7XeZqZixkku557KLwS1Pk8rNp8h",
  "key32": "2pfhW7vNXYcjVchRPRqp3gjjgaguAD6qcbNE69XgAhCL1NnjkKHp1VkMkqCKuyPBEZKv9XnF8Kn69iPzYM7qFd5n",
  "key33": "4quASZp2irpTAcKrPXGL5GwB8mLXj5Gjgey8tbiuURSmJrDCMECVaZs1nMwLoBV382HF4XrsrGNa3ggmcvwm3adH",
  "key34": "247D7g4EQP4WZCbcfDfsy8uSdtBx11kdp2tPvGbPorEs35oEc5qdN7ozhUAd1KjgHQbW1ygXVLGQxkxYmWLixquq",
  "key35": "4sv7b3Ue7RC4c74UgsDjtNdeZ3S5mdh28fznJur1jymLFJGc35vrySsG87rfYxiUAu715se7D8D8Dn3tgo9y9K4B",
  "key36": "24kXd5zfQZafpZJf8Ltiwzod6zueJsu3uYwoNZJiie9BR1azu9LGZYbMHNxvgjE7xanJBunqo5Zp3fy83LSZaafi"
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
