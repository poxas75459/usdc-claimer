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
    "4sxo6NM6uWHSqyk8YpgmGxYtHb2VYdhi9yDkeb3ZWYkSxJm6sEuZQgqHW7j84gSuYeRFU72rkeUrreg8L8C1foK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54wbvMwj2mgtvfFKw111KT4EAm96tEgHXA1jmmxw82557stdVUXTW65BSmgxLtwywxu9y8CwDXkwZzx1v3vcdxoT",
  "key1": "2DeG3wTMY14t9Zn5LqyFeybSErsyFApfZqcmSEaZBLTzECw1NoQ8ZSQBWeVbx8aZ8SKB3mXVvDZSrAmu1XafKmD7",
  "key2": "3kSfdYcMfwUXT131eQaUvZDHxJegp6tKbjGdLLpzt67HSouzvvrMjKzcv4YBgxcTiwppXQbmbvfqk1h5Jbbv6c3L",
  "key3": "3gKkAW2KwjMBCFFZc8WkKbNcaLJFxVwFsbhrvsWDuzqqN4duQwHATjMvWXGxcVgAEyMZk9Hx6suKvo2sQfvFH5u2",
  "key4": "3vyp9x1ki983LiRbG8TLA6MyqVUrBDMEUdFvbfzw1zNidgy1uNPri1An8Fo6zampuK12nEUKNQX1CKSBCjytAEpu",
  "key5": "61x69exPD969DiuYj7jtQDahTfrH1dppRMmEKkMyqSVJrcWGwe6F7dJdJkBEQif2TSiXgBFgzcJjeMgxr2Q67dGH",
  "key6": "AJadZi8ht3mdjNUkRgfziQdK9e43xeN7WhVhFSD2kG5rLu1X1SBGqgx6zK9eJkXTZPEQ9Q9QokLRSqzgajkk9nt",
  "key7": "5u88n5NAFYmVoxkPP6sLL84MzfE9HcA9PQfQbkPgbngqiPuJjRYtDfpdKKRnHvDdnyv54e6DYqx1UvBHqt2ByEiM",
  "key8": "VowjDLtcuN1AyX3sFPNDpWXM3QqSRU83HKpewLjcNdmQoib11yaU4uN8Lzq71m4Lbf7Qytcqr6gBsC9Utu1cc3K",
  "key9": "59h9MxEGcY9a16YV9hZqrEuMRUsmErDigLmqMrVo22oToAkgEU1ruFZRvUfu25Tf2e4CcMiY1qbPLWoDhTgMwdcX",
  "key10": "5ifeShE8cn9Spwbq71d5chwJM5YaFcTN7Nc1sAqFam2vYLNv2HoRpHC2syQ9vfGo1QPbBqxUxxXcK9442X7ri3nL",
  "key11": "3vxgtxoApcgsWPFEwbTs3WpV7FVCaFoKxSp1t24VAAd7UyzXa2CoByby1PzHHK442bGf6fbHu4ixAiTe21FDGymu",
  "key12": "5aCopadhRAtdKzQDGDPjPJHpdUtjvy1hEo96HnzhCR3ejx2Xffs7pFA8DaQX4uhi1ANBTiGP19ZomeP3Smh8t8q4",
  "key13": "3ZHkTGN1FGkt2DDwN4kziMZYsffDhhPzmAjLNqqvdMVjcHAn832JGax4Z72Eg7sCGxhQZNDXDmooT8jS5b9icKoT",
  "key14": "33qCCEo9ce8UwibqqH2ZCXSEiN1nL9Y653wifSku8yBkapxnQCkpqdonRFZ3gdv4pN7PDeX6oQyQN4nFZEH3CPHf",
  "key15": "1oTdg9oReew6753S7eHAww8vpuEcAUNA9wYegYHtkz1dWdjyFHRfNX4r79qHvHraKv9o9w99DjRnmed8swHrS8t",
  "key16": "BgaXvyRWrM3J2EPiFKq5VvzXsJ9e2m48kDMdMGMZ2KZSJoMTSwFU4YBuNrSfJxZH66wJgKJNyqGM8pCfzUo4AVS",
  "key17": "27Yxjao6hyEy9qtZYHh49Ym7jnoTjoP7n1QVinoqKnXP84Y8ABwizz7tEmb2Wgptm316v2DVy2HALP1uUxJjnKeN",
  "key18": "YULG33NbVRyLUhYBYF6TpnCSD5VGqg9bi7eRxGirUK8A2Nbri4jfLCHrpdrNKK8w17E4fNutxYqVgkUGdEn4KdE",
  "key19": "3godMCNBBL9zBZpb3xDJQAaVnWHXBViCfAL8SmYgwKknhHUeNYCTZERZBWEQTLz1ywRgZ3bQVtgqT8XVDTQTLTbZ",
  "key20": "3NCjegZZZcJDyCZagawazYgEnZaG3LzDh7HPaLowZ7BABqPKB2bmnND1QY2szcSrLXSw56Gs5HyGNaayjR3CUsG4",
  "key21": "XBztRzLwmBGKpgNM2Zooxrh6MAhpbqEAKqU9pcp7GjbX9t4y8Mu68V99db9GbrLQMpSzuFqKJGeHGaEcCHcshjn",
  "key22": "3oTgo7783xa3s5eGtK1BBbKyBWHugVuBMwAYAvcpmgkKeLKgQfvY7c3DF2QJTpN5bGC5vWgF8CNoX5Syy2ErdNZk",
  "key23": "4z9zemN4tFVVZ2RirXGjYL36xnJXoREXdUrmCBuZSFpTzvGWCKYfkQnQSKRtp4Pns4yimk57Nooy7S2SvfZwtJxY",
  "key24": "BBRQrTBH66z7vD2wC26tCf54k85bXjLtQKTddy5o6ZhcMUJwvhNH2dfQKoLCUYrec5KNWN7zkicb6tH69N6LZCE",
  "key25": "2DDPDD7o9rGbQ85rh2ZsRCekK7SU2rjMefqv9EkuoXv4D7cywCKVEDJqjR8xhXtbs1Xrsfvtuce7HVE1gC5gtZyW",
  "key26": "2LpvbMUvMD7vSTuhU5TNy2hnHUUnrWZKFJcdvVeXB3CLjDbe93QLCpwC1daYZGE11pV1Vx5QQ4xVfwNUrt7fvsaT",
  "key27": "2bNLi2p5aZ54k2prprfeuGVhifC5iyFWCoXpCJiJR8DvCvxPXm3pL2Yn7pi3BYJETWpJPiCAmwQzkk32L6pxcfqh"
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
