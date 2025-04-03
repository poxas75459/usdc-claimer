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
    "55M2RD7hmxg8ruEXJr6mN5sMJVruaWkNnHjoaUvw6RFYf6g1HfjSkbgPQsucTvibg6Y6FgTnyks5za2Zm7MoD84d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJ1uiC1rD3cYoFcVidBhuepetw8wv4LLY7CnK9baL1DeWQDhwZ5GoAhHW2aAfUeZV7gQncnUbcCki2rgcDQLRXe",
  "key1": "58XTUKSMNjtsCevemudgS6wt62XYp2bcpkroKwBoh2QbhNZqgFUcK5QXVpKWAJ8XHvAmLcwrLsg8GKhFwv8RQ8mY",
  "key2": "2B6ke9KK4uFAvDen7TrgR56zzDxLQACd4rEAo12FPDvd9tQpChAh9pjp7zGAtdFR7j2x9Y4Z6rfTwKvgXGDfqn2V",
  "key3": "3XHsuMB1zdgYs4u4yXUZPGHtnUmJRNY2boJaguzMLTBjRNYMWwaGU9WBi1j7S2cqknWBiKPeVVkudGT3fPJ1DdBB",
  "key4": "2zxCNbxywE9jKjVk96AayyifUZd8F8jKcuVpPdmx94s8tTXeQc56tqSrC8KDrkzQGmSMVewUpdhxvBZcr3kNUJ9",
  "key5": "53sbyMGVRqicgo9TGgDmgXGMzPQGjN4z6z7PddiFpsqEUTqf97uQXHH31jSNiuwZtoTSFJgT87B92QvsZAXek7mo",
  "key6": "2Jz1HjcnpKcrMtshCBrizVW3r3AXFzFETYQQRkj1eX5eAs4uAH9idJFkPdgguJpUHsbvtsDGqhTZ1uvgm9WcS6kA",
  "key7": "7Z2rtA79n9iirNUNiK6KCPJRfQUqHcvq1sZkiMKV2g4dtbDQCxfw3ZAM8SYo4xiS7yrWfgpfbPaoEeEBwFGK59Q",
  "key8": "4VhwDnvqNyP8FV7twuAQ9PyniHao6ogdLCvT7ZTJ15AYAwj2uEGsv9FXLzPC84xy7LHML53yPi6xbon3isZjqySP",
  "key9": "52Qoqc1grxWxubgMvThXATKEqBdmkaXZLeJs8fkPxS2REn58n5dGKaGPqjdbyTfASxrqgYtkmU5xup7H5jjQg94k",
  "key10": "5vKpBSN1nXcQUgJVsGvTKSRg3W1JugQucy1pHUTznjxEmpe9NSkdwRpEoYGRPwjAJ8BJnVEynYZzzdcnaBq1EFPb",
  "key11": "4pQ2dzdNVrzVGc9qUdwga6xu7puMb7FnJdNmFHDDmTtXNkMNEc9BiBEhZR6xZPmiMMDUKevCsRkiXnX2rqf8F6tW",
  "key12": "RmmH6ncZcn6hLrokwz2LMbvabmfi3De51m9MtxnYmixvgQCG57shHjCrqFzczyxKkEhho5KJ5oicUrAbWcUSsp2",
  "key13": "4gSLD8hMQh8eWETnPo6uHYhFPJruEeZwwvFkGZ2ocgbKTD8fESWuXj6bRUqDA1MsvgH42bcFcKmc9kcQxeCAYD14",
  "key14": "2tofbBq1WHrSNmKKjbWo4sJpeUSLXAK6WzaWBg9yaTp9c1Cu9BwWvdqrj74ucwSEJMwY4SfW9HmcMrXmJdXCPPCD",
  "key15": "4VcToACxemTS7W3CFY4LXBLkWfUSPnsKsG32mUWD19TjjVHt9SXFnygD5MCYY5up3Fzn1Rkynqjbx59bHTQBFhKN",
  "key16": "4yM1sXvCSySF1VjYPY4utjhgW6YjB6PFMdPQbjtjAunfKpZYLUeArazVw36xViFFJgkN5UsabjBVn9jwpWDUBKxm",
  "key17": "2YFpdXteLBBDNTfsXEYCaHUny9ai3DhJGLeEZ5V1yAFFdF8nMrphs7HgKteauZze3M5c2V2CALVTz1YJS2vq9BvT",
  "key18": "YA3taZc3hviWSBd4Y3Rtgbr7spEGaPk6n7PtwCv8V3WQx1U6F9iG6SAdRive6Uwrt3QAybX2vUuZR2Zpnb51Nzy",
  "key19": "3p4MN5fczrunzb67nzQrYFEcD8sgvvqhfi7Xrr9esmknvpxRopK36TPjtF2eucA4Cw9ZGxKEoyhxWy4ftwmEc8BC",
  "key20": "311vCZPpWAFCtgiY5LQxrpi34iUvg2BABo8S1EWtUn1BXMvqZKKqq2ZmDpe4d1h35XWCfFSRfiUakK3G9H6sM8MY",
  "key21": "35TgA3t3ohAkp9LE1ptMpYB4W62AnZSYhqK6392gSCryg1K8WjU6QP72WsPS39HCgSjhXpvScacUxH2yWBqzm1RK",
  "key22": "wBX2EwkbucEjig28hNbhDaf7vHid4BMrEz9c197iY5EioYrL6XyTzWgJC1MSvQrU5qXj7JqPZfHftGeP86EhHo6",
  "key23": "4RnVGNzVDX7GuzfBqjADw1pNrW24xKzkVm9BswcKzbGF2p3aACvFUooiDAZyfxo2kUqCMuqKAWJJmb8VzCRpLqiB",
  "key24": "xN4EDetJYCU3qUWnGN9zWmJ25iN2rdjthDmBuLaRCB9CVwdpeGAxe3oF4gSXw8z3QUHQD91aCp2MdJQYUhin3KV",
  "key25": "652RD7fPJmvo3FtwWrWbsMUipYAzxtyjVgc9Kwv946XKXvoa8RxyVQyZ3nzBGojP411FE2CjFzmTF4FRvhSpQgXt",
  "key26": "2AfibDnRRP6dP4769yQYsXcGTKXaj9GsRcw6o5rjCTtADyzpyExGqDYW3ZB2QgoXixojKWY5LTeTzt59zFeBG6Vx",
  "key27": "5e4q5oT53iDXKXhxawdDhwZxdMz3nuGejr654PpJFWU2gUtdUQcmULm2evLXTv11YE4t8fuR5K86PaktEgmS2F1A",
  "key28": "84fuU54RKU85xxXP3yUX2gicDaRbKqzBx5wC1p6htsPaiVoDDhKRSnpHjUzfX7iqtnS33oha3FuRg2VKgECH82n"
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
