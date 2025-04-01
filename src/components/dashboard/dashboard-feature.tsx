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
    "5v4cbBdjfRDRNTtRHH7LB5yMLvDR7gorsUBKZNdar5qUw3vWk8xd17WjrczosSTMAopFqebK6ShMooDJrzMxTnRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L7F4GLRhtw4Ya8wHPvMhwCuPHrFMRvvtqGuCWZU4DYGADXEcV9JyEdzcscHiXc7N4Rt7gkcDkREHMDM7BveGihG",
  "key1": "2hgVLBqTjs8QMvfH6akECpRjWQDbxyZME214tS23Qpa3PBhCLdgG4pGP8xDEHEs52tpDQAj4zjRAeU3ZwS9re3pp",
  "key2": "48HhhCLxZJmUyjGV4nSVX97onDmTmyi3yVpasZq8m8r9TXAcxEBq4MQQxvFVyss3LCeNWDtyrDJJDVJMKYzJLkUz",
  "key3": "4iZqeWqLZwxq6CqASuNfkAYj4moaYi4hcfHQKDX3S9ueMVdj3K8o81V1ASw76o6p5UerPQnvBfq1AkCR8ZGpQ6yK",
  "key4": "Xv7taCU7gapDa7du5SvTgubDTcUHJnjWAHBKVHsPw3QY2yeH9dnd7tWVR75Eu25EPxEg4ZaeWEUm6ncESEDYk7V",
  "key5": "43M8ajwa5SZXB333cEp7QC8jqxXqnUcipcThiozBSnjPS23QdYXK2uHPtAF4yCvtgwYYPi5Rm24fPrdvBLajwMPs",
  "key6": "VueatNP39i8PLYtzENuEbXyXcQsDp9gYjTAhhCLT7jWdg9omowjNAsArJCCLeFU8CuePUCd7GZnWF2Tp8jqwTZu",
  "key7": "286AfFG3wpYf5pXgYsFbHWLskviYqcnvR6pawFY1jYRA1VNynv52SBjCksureXtKGat9HJa7fCaEePFib2vAfL4n",
  "key8": "hAxqm8dxLeR3437gdxXWYx36ruWCUmnavDj9hc6GCtVR9un4Rs5UQQW3BdG63a4U3UkX19QCBexvj2R3NVV5awV",
  "key9": "5iHe23aJvfbsBgBXooD2DCrywE14eYHrHnwd57GKhYiV6RuWeaoH6W7PBKrqZxq6Kpkez4NHhaeazD4SttZSW1fg",
  "key10": "49LPJKMaZfVoS2yzR4Kf1aJjKG79zNyJCiPu7CAN1BpFLkSJUkiNkTVETwUagtJsBoW89BABbaPyUkRj9VXCnGfU",
  "key11": "4ASDhykRRcmbsyPZmhpUUdMo9z6388QLrZvnWwuJVQQe98WSvahqFCpfGMoApDjSVgdqzXehKVeFU4wjdcEEooja",
  "key12": "2rrfYaRKP7jUfvdRSgUjSfGGJepPdnT4YgnBxJ9ABHgsSnNZ3U7yQWUa3MKdHu9Vt7Y21XnfsE9c8MmLj2rbmTD9",
  "key13": "EGNghiPuC7zntMDzcP8xFFWv2gT4y8pJEmpBBLr4XwoWB4EqtGa8wLcePFyN6VXEsygU1QSuJk8N57aaKBSe395",
  "key14": "3cAhZFeSLyKD6VYafxHanrvo9uWRYSc2czQJAg6Ldhw9xgjtdZk1rHRsQ5AjpFqB2iMH9XQfyGd69aZoiveQoEo2",
  "key15": "QDLo22SDrSD8kvNk58ef5yb6zXdrApL4yLHzpha9iNNkpV3XJVYVKjSSrPfmX1zKgMjegofC66rnUrTUttr6CGV",
  "key16": "2MVSkYMxsvrn8LxRwsgZeJgjMkrsGwoZPLNave7ehTRE95C5pb8QJ4Pmw9WzUc1Qf6vKHgEni4wnaBfernqUoABJ",
  "key17": "2rDbgDaCpgwiCBM7DmnQBpc2EQt4M4RBS5P4yH1HMErwkkijZTjpXXayERqgwbYqfH1GS2YPAVmrnfmpzEQJ91Mu",
  "key18": "3K97TnGtK4E28r9mqigvfbWNyupXMHXeAxUzgrp7qHQGMe1Hh4pFz9eaRsaa84pBMdTMv2xLHWRc6xD7UWAoB4YF",
  "key19": "KM3ZuwCBzSzJQ5CEsBfpyUWTXrUG1wkuccrytmw53h7X2hEvpbJjXXdMmyGs8NRJHo99uNJSQMW63pzG6Vf3MV1",
  "key20": "2Fbwy1FQjLhWS5vvLQTnr23sBcsxTYd9yLSUanqFWfiotw8af4mCXpkKuxGErbqpXBcWMQEAtjN1dE7SWYdtpSbo",
  "key21": "52g1A27JLHsK8vbiPnmsjyKHwq152CMqMbfnuJRcZ5sdK3NCC6nNcf2NLNFxLs85gfWVZ4pBSrEjVAFfnN1yCgcp",
  "key22": "3YHwxbDSoUYT8D6AmDB6pdEoKnTSNsF1TL6yeSzkf5mXZTtBi6im1mJS63YPn1261NuQ8KeHzWLvzhXDrFWhDQJy",
  "key23": "5DmXuUZwBiwN1U1dNVb22pfyVLVvRk1nNHo2XZKeyvpnALCAK3NMH7qHNxY8QbYPkgj9GNJW8qRHnY4oFTcVmgkQ",
  "key24": "3pruEdZ7pWSjL5W2nE1vatT5ugpEDNDrQeEP7VGzTVgnYUhbjFkq5djV52j8cWZsEwu44ntUXZ1DKPqbEhDom1hR",
  "key25": "4B95sW82qKzCFDgjB4uZ4Ui3nTCXwHz7pQ4eNDY9wEpB7E7rtZ4o9L3Ax3PfDLxhU62HrgELpUahwU5n5bqCNuLE",
  "key26": "5TwUq4TTc8tt1BojCgE5VyPZU7ggJwREV1FTWKtbgQ8HMeQbLNjBcXBhvoN2hX5WvW4kVyLusDnMynCrK8DZqGad",
  "key27": "2iJCEQj6mwD3ioqLKYjaZTMiaAEc2wzRRPMDeqCspHcK6zopQEfJGeVD2FpNUPiSXcV5wLvP2XoBjQfSSuWaYUcf"
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
