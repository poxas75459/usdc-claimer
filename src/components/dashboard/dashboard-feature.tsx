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
    "4Lo5ybbUSaomEQkv9H4pNgoYAhcgyMM9wKtG2osPxmBiB44UgeYniQtLtZvmbknjHB1pTrgmRC8uqXwfggoTpLS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LJBeE8zfdyNBjkeAKqc7tzSSsQJw2ijioJCVMf54Wj6VQZ8wG43D1tCAJYtc5Jun6GMTUE8GGmTFh5MyjYGCeuC",
  "key1": "5TcAFrzN2vcDa3MFzoeLtHqMmQxkH6ZpMpdoff3iGidt29uPv3bApi9eCBmpjFfEW7CFgXtoRPgAVvyZ3wm4rxW7",
  "key2": "5HBcXpXJ7mQULUC42341vWm3SVrhFriFHLkX8D361heAGLGiPLpYiSuLgi3pJQDCB7xyD6j4Y56xwMAnMwm1Nwv3",
  "key3": "5gnyG8Vxwbj97U4yFQZdJ7gFHBf9hcsK8dyGvZsHmGW39Paar7swPZx3mRS4AnyiT7zbnTnAWvVZTp71FDth6UCn",
  "key4": "3nxnKv57Kt6FfaBBhiP6ammej2egygBURoKPvaE8oZZHWxPF41fX9b7JCq7yNiPGcqsfAvKYDH2nMTbEYSqEzCqp",
  "key5": "37EH823L1RTXRa2zASDivcimBt5GGybfZB5F4UJXjPaEJ5zqVoqmQX2aYJVxdPCnYYG6XL1tWm8tfsYnpmDckh7V",
  "key6": "5WbTQtRC7MfyJqtnuZy94vWSVvn3jNNf9tx1uXeVxTQwxKNjexjMLKb4UHFNu97b8kvyNFdByesmN9iGLhNFAW6S",
  "key7": "5ufnaGuXa51QiLXArm1NTsveVWzD9EVTgQeG56k2vhA6okKSVtt6EsZbtiWYPgzrhwM6NdAnALbXP12r65j8qtWy",
  "key8": "uvsrtMWKBdAMHy75z1bZTtvUPbAMAeBCATXEed11QyundftdWSdzCGs5osSSeMvXWjdy7e5sSkSyR2LnWbaLjfb",
  "key9": "4N9YxjjuSRFQGCkLYwiurWMxwi8hBi7QAuhzRaZ1E67DkWceFXEd2mQp5XyKdeu6udMNYwsvJHmzA86NPDC2NKts",
  "key10": "5V7NsvnTqmmwheihyX8GBi3gjq5UNpsUc8RvYdRhvqC1UDjC3B5grt2TbXZWfRaNWMUzuSvviaejFGbcjzoAR7Pb",
  "key11": "5Cm2aqPnC36XAfZV1ujsvhBKRCW1bfwX3f1N94M8kJdj5rAyZLT9NNmGj7rsjsCuaxeeA4dg2YiFr9ZyqX98Qytc",
  "key12": "A2xQ7T69x7RAiZgJhVU6snZYzGFcXmRhNgrL7eVvVjbEZAYWVeckQaajREoGmeDYvMZAJKYgVyvRQ3WMzaf8tb8",
  "key13": "5TnfH33NBCa2hEkAbeq186aaJQua4FUdZxYcU3TQqXYedZDpbpHTgJPnygeXBxjqzBtVCExHAbkhnrQr6EHTyViE",
  "key14": "21vbHtdH19NQxg3yskZXQLvsCM16W5uyN1cjYDy1v1FJR8Nxn9nuu61PuAkdzzmt1LapzR7BAjsi89Pig57WPK3p",
  "key15": "45NkK58nacbVFd5SQaeciinPxd23zrExhNNu8jeQFQ9wwGM7PAs7YY87gZNoh8zoUVhzVMH55WFDJCEPciQLaGmc",
  "key16": "5QY14w4MUYkfWuVJNQrxfH6XwuV62VSEPyyaqAqGgCdPma6musTvwE2AnQzmmgch94BM5H5kNa1zrgXhXUcwAd4d",
  "key17": "5C4ToeYWXcHLhw5Rp5YTyAJL4veNwV7yvRoCYbe7QB4vbML9Ri8XUb76vaYfq556qLfaumiAndnayJQQMPGPVZW4",
  "key18": "3k8uVtPTAJekwPQAfcjGtd61EbHpTukcQfRy6b9E2hi72NyEGA7KcmYQghmBFNFe7fvRnsCJxcEhqH1re1FGpXAZ",
  "key19": "3ct1757DKyA1EJi4MuW69cRRsq31MG9mtijgtXoRRq8Cs5Hh7z8dpQ6MRSWYbbrujcrmTfhv6F3PbeeAp8SiAdjR",
  "key20": "2oQdzWbUBayPBrEiMenE1VcKZd97qtHKYNiue1uQevYD5rAj4wcrBAKfLkyBaSNAJoHsdB8UM3BxNWhffimxsAtS",
  "key21": "5m7vfQVKx2qRzVm9ReeyvGBF2uF944YU4MSRYtZf4TWuX9Pqryc6v7NfoSApjUvb5PV35PMZEcFn7z8rFVsmqhzj",
  "key22": "2VX853tFe6QprpSGmQJ5NbSYdsmYiRk97fGLzs82oWBJ7rqAFZyxncqJ25iNZxM29Yxv75KRFUHpqcoWnZYMSUwY",
  "key23": "5kVkheozL2zTrvo2NGiLN6DUwggPRxnFToHYUJDP1FjgZWqRVLCGf3sic8A5DL7pv51tV6ToW4XiZL2TS7NcW9Rk",
  "key24": "486WqHhKgwSbbynPaUbfhGMSvjreH8ZLMSVvEZcyAHuUw7znYhHP5mDmh9HaSh4VEcKJatpZx3R5WHS3uXLx2bsc",
  "key25": "52uoeKcbFHAQ7NQbdbWzAA5HZW1yy41tagudX7JKkcgX1p8kjrjGysRa8LtCqU75MWeA28SSaVAXwAJpMLCsmn3Y",
  "key26": "5qGc8spRc4GbkDi3YnwzqX4Qzmh1hJs6zKSQyXYenhLqY1dSZiGdstWFRPUGj3zyYFEsBxgyjTh2wEThnKBmRvFb",
  "key27": "5bgB2ihqarPiq2FXPWRC6XSDKxEtTpVDRtWPnBJfx53RQBnDYAJYUQZ3j5h9QVrAMWuUDwVejmsBMhUMP2qxGACD",
  "key28": "WRYyASbLqAM6dBKkgU4H3qnYWbxs81FCzXYzMuc1wkPRyCuHYxLxm8w1mvS8q1Z6ZEbMTY4rRvPRnYeajpMmQK6",
  "key29": "123LFf5pWfcG6RQtkyuvqepxgE9coo3rqbfYe8B3hyGNBrZTZiQJcPbwnWhxQsKXjEqvGH2HHD1Wg3NJWkAv9euT",
  "key30": "5attq2Dt3zmDGHCyU8BgZQ7tGAyu9wb13y2hyaThNyJsWxHmNaebsmGPaXEE2tcPXgTA6W9mHmpFKh96vpiAzfLp",
  "key31": "5TM99K551CVF1t6EPvpQ91A9evpxwJCbdeJAzXeBRWE6cN1jCWVH2QbbWPhAX3Cp6HAgjvQZZoAa1NecfXr9YvhJ",
  "key32": "5MoPr6mXEJCWjAJsUUtrJvwtfRzqG7dNU2KFkeArQP55YSbsDJbMzrXMXd19UjmJQeJci47DZuQkH4hG4TqoZRXQ",
  "key33": "4W4b8m5Sx8EMzAtFAfueFC7Z2P9YZhdmz21jYTYmYvoQVV6rjdE5J7WAHyW4dmFBpMtN72MSiXdA4VosbYc4iyaq",
  "key34": "GWZvULinXCWV4TdcbWbcEUXnw2hbzcKD1LxMwXYRC3YTDGkbp5eWZsDZoxa1Jj5oHwRz9biVxhaFcWwrWGS4qUd",
  "key35": "Cxv4Rx49pHWKxQ2c8uNyuR7wTBwKfnEJpcm7APusVhqBKkLt4gukZHrntKiGSSWaLKKXLn6Xs4fTnj7RKcGu6EE",
  "key36": "4jHhUDDevEmtDJQNRy9t86zYkNLiE6Paa111z1EUE54MEVpRu4XEV1ASTqnASHMhZLyRVmKUBA9wNhGnRdUYWhgJ",
  "key37": "4UJ98kmWUz6MFJZFcqUeV4tyYYpdMuefftw7Yh3obZMYt1TeMnpCvKM2wRfcPxvsWTq9LbDqt5y8CU33Ry2794PQ",
  "key38": "kYVKTWHXjny8MoqecSqHY66vmkvyTUfZeAgvJyEAUQpoAhoTuSqB1EUFFWR2dMh9AKRUqWFCNnkHLSP9VbDJ2uS",
  "key39": "4i84zYp6GhdTGBkrsrBRmepGUghsZskyvfzEiv4nJEzMq5wzevnayNGMGgzFUtV3VA7m1w5PFyj7t3QoxxLLh71J",
  "key40": "51xx3auwmE2aya4Wmh1Erqpces4T6Mc475YD4H8Myixde7cB87X2gNcx5CBNqwswjgPKn1Pcu7UmeFWZ3T9sw1vG"
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
