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
    "3eDrCFWhkFA6Ap6NY8UWPj8STsy3mWg4oG1nDXK36WWmpAn9aoixrXkQPt6AuDrYrAuPSRUfGLgEsBqyzVQwYJ34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dezGJsVPqjGbM3i2MEn1b1NGbcfzamepCv5cwXSP1bim7HFDqmNbHF2Fs7snbvtc2nmzwo349m2R444ztewdV13",
  "key1": "2PgrKgPK2kWpSpWJ3m6R2Zz5f921MccmZuJmkCjTrWNv79Gv6XWNjftMoVf6UAjA4Aa1wUSth5VNTMb6sUhcvgmE",
  "key2": "nzAGhzgnCLvKiNcQ4ZRQycchsym9uPpq79PKipz3e35uP4YofytNd4qPNgSnFvixKtPVRNeMt474CPV2PY74YB1",
  "key3": "2naaUf5yYCZt1Mvjke1JVZQcBQ4npd2hSwTiuM7nKV4Bu3i7Z1i3YdhNMgJnvqyHKbdubB1jDd1isJjefDXxQ2B1",
  "key4": "5yhWGdtecDo4Kv9J1H9AEwF2415nuvzsJWSZrZQJaXYZ2vAtnqWRFcXQ1vQ4AAByBB3wNpGdDjJweXugfeWcedwq",
  "key5": "3zFsFshBNWKsEYA7H9ty4RrFFhN3KJZ9DUdgCQrraonE2WRucGTuHJSDcfjgFHXdbzaP59EJr7nCueHBy2BCddgm",
  "key6": "59jZDn6dQEYnnp8Gd7wBpFQZbTCsQuTxV78vyDxhZgL9QNGYrFVdquXuVYhYWV2TqeMqfky97N6hYHLe7sPRNoGV",
  "key7": "2NuV95ESzzjBWNEZvR9uucfJANk6XL2BovVQBvqx878KFHwPwyP11YZeCuhnf2KAXEQ3vQu7KeXTGgtMxPaQ6tvH",
  "key8": "5SpAgTAdFZcNMojZezfFk85B3YdVoMt5VtjCmd54gkM8wjb1fifYbGFiDbSH8aPDAR61WRX2t9NBfrYGjPmRhxDR",
  "key9": "2MYNqX1Vh8kfJx86KL4JJFN9KhhbDJ5LP5UguvQDa1YWAFyvMYSVqMQxXXmqn5UWTiAtDiTRWAEWxSVuPRgmPwR2",
  "key10": "23EYhUmpfdxxfhLXJZWdMRKE2Eh89jz5LUAHWAUQvaGMBjDDCRgPcWU6wnW5Ju82PAVpzv7ddzdPuGK3G6LNYfMi",
  "key11": "5sFXorcQruCPsshwQGCA6aCeP1QwCbwDVKSP5rav3sHnRKeJobLyXjeVszteKriHG3nRYDj62PXnae8or1gcRDed",
  "key12": "3PPPH1kXGCcipkj1xSZbPuASu4wvuxdVeiXHiQLXvEzqcgohL5VXjqFjmJpQ9y7HHPkwA45dEiKgta4XE6rt1G5U",
  "key13": "2pcxSgigxC1YJ6zz78ajmtt7FoQjjQMVo8omJ2svDNqtVHWJTBbpXpta7WJwMPebu9jtAgsmteJfDrXFQVPF42nA",
  "key14": "2Sw7ZMEvuAu7KicmZfhe1d8HQDmhqXb793234zH4SX59whibqo9R3iM67ppEo3beRa7YFu2eJsWJAxutGox4Mvru",
  "key15": "57hZ1zD6BupGis9xrXRK82TRzFEBDH3Ni2um1CzfmLFm3ji45wrkXzm1LUHsKsXHoqSSv8t7C2m9PGGgeqqYUnbH",
  "key16": "5ERKxSsxTsu5UX7S1VeBhdWa6LWkE1zHWi47KqvGpi1PEGLWBwanPw371UdKpd6r3S5hbzfCief1kJjHixuHSbEu",
  "key17": "5X47TkE583naUga9BDjpnAC7JNQsWjnbumX2q1PDwbtRS75YbTtdRSts6hhu1mezh81UbEwWXs81wHcr97yK9E2u",
  "key18": "5KRJEB9dznCwv2G9uHoTWL3HYBPnaXguSNjZ1jvWJ2P2zC1jnFnRcG1UYS9ZyQAXdoxshr4MGE2Xu3RF7kPuvbkz",
  "key19": "2DF9eXXhLkXPvCQg5WG9ZNECBZxx2o7jQvStTS5yThMXEnm8gXRW1VQnDJ1WqVKYCmoULkoZk6ERDrnyit6S16rS",
  "key20": "5xuNM5cBqXa2bBydoSR9tTDzfuDenvVAHN741nb5MyDSvGeYFXN8ANP1voYkxzVGfv8xoJhmPbacWv1f6a6mcqHA",
  "key21": "5mGmFCSqYkcxQFLjZ6KwtE2xEKjBC6oC8tGmNffAwGo9zQgwSTcqY3ngPHiufzqVSDNfx6yoDCg4wMX76Jmq7dQ",
  "key22": "3vWxfunTdzUkdMeyDtnabvYLLS6HK7V8D7a1qQiJisUxiF8q2x1qt6V7KzVHwEy8jhaD1cwZzxTmPfGP2CyHuohm",
  "key23": "XRHMsP5UckHNJJzTYp3tezTyLdE45VDeEBDw9BCzTfsx4HLV4x3FwWsWkjsrSQ1FEXV51eEkFSSzEz7GsFNvN7X",
  "key24": "zfL8CnziiCnXBrzXH1jfdjfLovG13yBZnydDNqMW6bRymaKJiuV3Y2vL12Lqupfb8zLQT5SgXzfNyYJY3VArsAt",
  "key25": "4vhmy1w4YGadAxiS2Wpust27Bh1GG7Ln3eNSDELXQpxQbNxNRG2drcZXUAH5hTAhuSuZxLjsDPeyWF6oN4WqdXPT",
  "key26": "5UHNsRJoNRsy34iznJwMqaDpxemDrkdQGjiU4iu8Fpva2X9u7SxLJuNtTCV4SYXwRvFYiUSuG4VcUTBxDNoxSFPm",
  "key27": "3KpmvfJQwkUHmsCxuS81YtDNxnVENE9946ttVNA2keawBJyp1cwbd5gM2JB3fY6MAXg9gxmRuMRhMhdBwg1RmNDJ",
  "key28": "5VdLxRCG3xB2pxEdcUK9JBYqq1CWv3EuGyH2ByGPxhmSYTZQbgM77r9VT5iB63zKmomnKZSgXZmtCmMz4Xha5Cad",
  "key29": "33tvW9iWE7gbazzTWziN7WiJxvCSkbzVWnmQNgXWjYU1yiHxfBm3trrmznRpYkdQCntn9dWmVcWqzy3NqF9RQUvB",
  "key30": "XdKLDG3bLNdwZ9gtkDq3SXT41Q3cksdync26sibGTLPrQy3EHu5ymUS35nyniy6pDrLUCn2HPPEUjz8qBXmBzKn",
  "key31": "2aA8FwnCXu6ExK4fGE92i2QZbM5pGBwins9Fj7uR1hhh2anPayndeRy77YPCQaasXVWYQciePNgeDnbaYLHeTvXG",
  "key32": "5aFLnDWAxyEfBzxafjcDVbJj2V22U1otDQH4SQ6HzawXT7UGM1MvLAXsD5xRJJuyD3bim31XKti4yvRnkf2GEqj7",
  "key33": "3AxLvu9U4MSd2xFL6a9qYs4g1i5onjVFQ34CwupLZEon8zBwv73bCAfFKrVeiSmf76e4q816KpFYmujvWCRLE7wJ"
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
