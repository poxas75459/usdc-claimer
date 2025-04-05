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
    "4VSe1g26azQStEw1N8sczsHCmcDnReuYH7TzvnP3VqPRt3nZyx6P5tdAH1cnCSDJby8mWbX9h3rnQt8GrMrNHTPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52LBcrY2owVJykWcyJKsyjhVDwv3Pe844ygVEAQsLNuNZPYQeit8eaXjPe6rHwucKibmmdEgNFaSWQvEWaHuXD62",
  "key1": "5c3Pc9MQviCQ9p4KyiFqqvWbwqWtCNvM6pGN1MGR7xwdcwZHF78uFEkNjX4fcS4AaXwaiNqpMh7x3uYK4sjB4T45",
  "key2": "5gtqyUcMeXfamh9NfeXFfd5ApfJF87aGZKczfLi3nBgpfzdtQ8erRwxJMhEpqN7kw5TzXcV4xLe6188pSrV44Lou",
  "key3": "2auPpF252wmUkJk6XbJuSV5dHD8VKjGZjqeQLv6fP3LudcnZW6EEXHYQuNiqxDpxSegJ81WcUGsYJgSrZzv94HHD",
  "key4": "3hg5HzsqKorN4LkhnHWA933zTay6TfpWDBvx36NqyqCdBVef6wfvo6djuWxwLhV2fnSmUE7epNvFMGeJ7HxiFfHv",
  "key5": "2wsNHGYqT1ZT2s1euodUPzzhov6HU6Dix2Je7qUnVCnk8NGAd3WECBhnXX9qnCwYBEfzs2TUEH6wzTwtLRgyVbTc",
  "key6": "2Spg76MsdQcegi9kRDb12HpqP4Nz9QZ46dRLPtamRMhi5w8ScNRNmhg6DbN26AoWLTDMwvYzR5YYMZYzgQJLam5N",
  "key7": "5Tcii7MgAJRhBCaHXACJe1KSFoWHiVk14ZJTYS5rqQfqoCJq4QSSr4UtBgLGyWEviz99M9FfQ7y2EEpdFGCvosH9",
  "key8": "39cLXsXLnsCKoY9h8hiNRd96koDqp9fmHTPednmqnsgt8XsUZB4PbynJyF9hXUjKuoLy18p8zjQGCVQrxAQjc1JP",
  "key9": "547b4jarMCipSsQ6qgubYs5b6M2HosrJhWKwMWXsZBX99jUBuM42NFvc2hqTAbAEhZ9sAtcK9G7qjvB73c9BicLz",
  "key10": "2Xd8h5myEHNfRwNMLSHB5AavU4girNHzX5KP13g4EAEPdNBgdsGWZnr7uPtTtdxjKDDoeGSTyaZ4i3wNeTT7sLN7",
  "key11": "2kpAvSwB7a96mvvwXNRG1aDbMwuCsy883CcP2GAtNv22eDscwviXDTKrqGRfVAeYVMLbWZgQmQZs7TXRYK3aSTBs",
  "key12": "2RwijmfeJVK2vXY2hXjUKQe973FS7uhevD2Ha4MucuZNbHPz4DSVG4xQ1tVrdzNzcnp6hDsHDvjdDULZEGRhKVXS",
  "key13": "VVbxLKj2eQ1yS2jRhi9Fpajbd3NPLz3PZDykJWmBEv6Nsr2CjPQPwP4ZTD8wAdHP8RtHzRyEFriZakHfAz8jJip",
  "key14": "4sC8Tr415bMwqXDm3U9MKYeZw3Ha3XtFx1yS8Z4Tg3d1pDnwZ8arXbiAYP5t2XU4C5qpzzNzVd8VD24afJtGA12T",
  "key15": "iAq4yT3NRFMgQe5UHGeAmXsvTxqcdvqMtUJVWRtBSc4nRNTXFu2FDb3NP55eSCgWpPAik5D5k8LqyVaL7cVYzGM",
  "key16": "42ePiQ1BTbHiCPZaJmVCE7Gxc1kY2yA7GYAHnVTxk1F3moKkak7TSxksMHE6eqBrpMrtB2GA66zGNiKzv4Z1bRXe",
  "key17": "44TeQ1rojxVyWqF4u4cA19MvTqgCozc6EtgzdYtf9A3iRC7kNZBWSfPZ5JTcypfoEzRKePnUF4zqK3RFvWDnGdHi",
  "key18": "51gUCDkvbtk3Wb2bdFFukSwgcVgADoEQWKi7tYAF6FG32BRbkiVRU5a9Tuu7V44gW6grhKXUdUcCzuWnD1YoDwgF",
  "key19": "8NNtXD1V3RkwqxkVBHMN3kdE6HRQsGyx5Rv1MuarbtdEePtaFKsZkuF3Fjmku1NsoLNwLnYrUpDALuDPBhDp2iD",
  "key20": "z4eFhZgpQTuzBaxhvsGDsZXbiXt5RkJikmCvBYEuK1sL2KVvzgRFzQDhwQ5PRd5a7WmXVfPg9XGEsk66yWjCDY5",
  "key21": "27T21XBNFrJsbmPzC3No1ec6HoWx1cXV4iiXbVUEit1BDRQNfopB5997uhwtoUBppzjdpHPaz5kUnMkHa65GjL78",
  "key22": "2jSBbPwmv6ULrheDQwjwz3b55VgmqeSHJvgjmjP7XYqoXVtZMik5LEDaukHm1jwuiRjZfhCJoKH9B88TmzCY4H43",
  "key23": "55Z7RNw5QxfxMXzT2S6DThNQxK2UuhCSFBsNHmdrvvWynFTRgfPWk4k8NVPvP5NTQir7CLwD9uSsi8pLRe8LCJUD",
  "key24": "247S5BCtdh1LqvsM2poDr8Nd2Rqpy1t7RmoAuCfvt9fujUpfSEau2VfC7UAeFfDoghzoM1mB3dVdaEAGRtn3qaZ3",
  "key25": "4Awe2re4rPaBUuS1w3Uz8Js1L4ngx6BGwH7NkNc65h4rrz9UbSLPQsLEUc4uEeqirSs2esTsg4ArhgXfWq8ZzdaH",
  "key26": "4uMsba2HvKGFsSDrNyAqxYf7GUcnagUZcPrDz5dF2Ub5yXz8hQ1UvTA9h3xZdRzubtptVkUZXeueF726nd4Cv9SN",
  "key27": "C59nHLoWSTpkHyWLwAk6nuB573aWpEW1ocRaTAwKgBToyTDBDBiaF59NM2qaoxFyRuob42DaSjPCTycUvfmXEUh"
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
