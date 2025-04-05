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
    "4H9ZAZmqN23WtU841rEZcxs9E45gqSfLjrqCAws2Ej1kTPTLUrh1kZQSPYnd2PLc4qgq4puvcAZWwnBcsZsBzVxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JSNMHzmULLCu6RysakcoiedzftcirXkuqceQNdV8aT7ZKcwbiRuUQ4BkM1Dg66eVLU7MU7RMTX25i54n4phGfn5",
  "key1": "31SSTvWWCdCgywR46Uc8SqkPecR1ihCc1fa9gT7tsCVmyEHU5f8pn41aetQKijf1K6qJGhgtoPRbiuiz8W9ALTyz",
  "key2": "3uzUa2AFyfFfAzMf5KXD8PFxVdJkk6CD2XLqtXL8cnsPCn3bgxand6qjQHqKwPP8b8n9KsNpLxVgga3LdCrENXdY",
  "key3": "2DpUR4NBFbWqyBeBs7S7G8tEoMrh5Ltsoozp9mkpTyNZXZY43htmntmwdkaCWWeci4NdJQgZ3im2uioG8ubmDiKG",
  "key4": "3SCyxVRUEjpagqx2pRMeqHMokoc2CV8if5us5AnevDxzuwouA3g4WgzTWfRjUdAtwwijrQqpgjECek1E3owQhEtf",
  "key5": "QFtK8C4VG76EPrwb7B5JrUqgm5GsaTycvj45xH1fxfqTFC4pweWpu1tyk7Vy1jyr6Axgv1X67PwgFevbn8nL9vT",
  "key6": "nWZtmNDkRWCed1BwzJbwQ72YkGgfdYTi8qRukJEkXEhNY4uyiEir7equ9edx1QoAxvCtkSZ75WWe2e4FMmcWt82",
  "key7": "2GUtFcJbr287tfmZzQgXnoDHrWMCdtKzjJ2ZcLuBavJnGDSKwvYXq7F5175A4gLtexgtiNwt3xFctkP4cUh6JP3p",
  "key8": "32RxoV1y7yLcLA6HQbJxSP7CsXHJyQcA9rc4EcFDiSmEnyfN3V6uFP2m5hiSs1oC8y4U7TDPX3ogjMrEkYTbv4Cr",
  "key9": "HCnQNdhTdPtFrDAMBALkSfmb74ZzJg1Y89fc8trmxth3Qv8F36KgG8KrdSUdq9NvFKW8KbJS1s29GyE1s6EwV8w",
  "key10": "4W8VDndSs2GCGrwtFXnRnQ5NMdjgTarfRp91qmgA8GopuDKrBRJnpD1W3BQsz7WY2JT2HAEEJkRwysVf8DEbNhcn",
  "key11": "2wpsGJmFiGGuKFurXiprViGPhXSd6YUYYeX5NNXhKWMTqyBchRnJY3Wj75QiTeYu99j45Km3v3SoD5DsmJWfs7TT",
  "key12": "3v238W2y5PjFReuNeeCuFBrHYAxFXhXPpKZX3bFEGJebrSHnZK75seYdLBUjdriaLZ4hDtGoK7md2AfsERpeVNzQ",
  "key13": "8q7e7xmysF61qvQdaVHAn1YhkwzCfQchJ7xJPWJD3F1Yp1jScUPPaHGbkAwAgU8EeEozTF4rU7fGtct6313gGoX",
  "key14": "43cukvHt9gMf5cKcXWyQxVrLN5Xjd9PQC36babuNPELYNVMejJbFh6grVdopSDJkEY1qkJXssx5V4wYXeSZHfAa9",
  "key15": "3JvFAKHh8tLD1EVQJoF63emBaBtFVfVbidEdYKmKK8xqCb4j9HDyRwNgdhTL2BtxyHVYWtJMkZiUp6bCXurkj1yz",
  "key16": "4o5QPF9ncY9M2z3tu3bqq8fMwUh8DY7QWgJi2sdB4v9y5ZmSkeDZg36d5rPLATQjndgbAa3xrqwbRQidbJu4fFjb",
  "key17": "3FsMpuzAbbWTsb4JgwsZDgDZ9cGGX9W3cmsn2z91CTftXdb7w1vBFPv7g7B8U28Et9dyDQeUmiJ13dmNp6DKCE7v",
  "key18": "3NNWQhdUNSDZhGwQtafjFb8ULBWMavnQxKqHwKwMPshVnf63PzSojbK5X3EyGd2MDaa1UHiznaSs7vWwVr9JgCnL",
  "key19": "4BFW7koHYjCcfxC7ZwxcrQjX7mbwHkDwjg6ojb7UeCguY4MwRuaTmHhdTPUhGiL95gap51JbrCqPKdAu5dJvU8Qe",
  "key20": "5s1wu6TUhuHz8HJb6wNUyXQ4QnGQsUbgPJy6Rcr2AqqqcsLeBhgf7AWSJpDoVPKSa6VTNbX3eXTPZ1s4ZxeqkWdf",
  "key21": "4LPFwDgiodPB6F5mkftj5srUpDAMCqdCDfSTpNSmSnDCJHNQSuJiP5bXcJrZ2pbjex9H4mQtruZBQQwarwAVJqLo",
  "key22": "5vKiHgvRyJTsUD8KvyBqBMkAtFQq8kh2wVinDorZJisZy6QRyZbK4zdvKj5wN2nTCgDtn6sQEvtRjgfPeAzxsk7d",
  "key23": "4KozuyCWBWJVh466PhBQMgXhHWCbUUAHqDCLrq4rUGAKXVLzsMuMaFcvSyygXScHxbp3sjhaxzaXSpE4BDKVLsHa",
  "key24": "45cvNW9ywuvVs5UEJgQ47sZJ74eHrzAVZSCjWeRaqNXmdeM3cLp28Xtw88hqeXSfWYpqjV1HSCZ6D44LGsXh1vEA",
  "key25": "4S64ZBfvKTDbqAkxYwGxuEx9sk36VNCEfcckBKN6wsKgjV3nj5XWGNSggMxrUcEy19yA4BQjCZ6RYfQCG9R88kth"
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
