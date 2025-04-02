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
    "4VJWRQKGWRxBx3ifEvk5BpBuUxK3k2d1W7Abpx4Sn7honuSem46xrQ8QuMxgX8JthbX8Diu1yApG5rvgo7smMY3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ffX3kfjGPqqVX4oyUieSZTfM4YgtQjoPW9TRSnxNyCaQFfcmTmc68H5bfsQ9yEYgLgEqARW1L4HvT1JFQNuE8Q8",
  "key1": "4UBkiifarANBm3aCDBvD5b3mg2wY4sWMkjTh9ng6ns3nWZab1rqpYsjms8MatCaxPUnaMYcVe4yZgPMvUmPTz19p",
  "key2": "4ABVa9sX6Pfp5aqH2y6hHbYZ3qpVNWgLSFkTpL4y1WFnoVvGoiU9yWre5sKk6jkQJwdpmoRVBXWoG1cimr71j37",
  "key3": "3HoR2ptuJe5gt3VK2zKvCGUge9bUKbdqSVaLzXRPTjkf1mw4ZVZskpNvhUngrbGZ9nqb1vAzAJEnCqQmouDzvjTc",
  "key4": "3JpEJDNQDoJbrfRvrM3dABaT8KXU8Bbzody7uRK61w838TvWKFLjm51xANvRD1CXVgcfHdGBeKbrcNfBFaDtGEZm",
  "key5": "5M6H1u7h1wV1QFRGueigH3H4KvH3Wne6tUbhmD9JVyLQsrRVpaPCXtPPMLVfCzn43kxBcB4zUWwkdYhMBz4yxeY4",
  "key6": "5cFSzYuBScWcbpEwWh6vhNJwJgCBwp5bfKmQ1asnkpYHmo68TYcM5keEz8Ea219zbFq2XvkKuDS73f5Hnxioot2A",
  "key7": "3pEbVstuJFJNsFycuum36kmARsTMK257s4in46zxtTnctz6ECUcWfHbfErDibgrB2aUKFQxp8chJdhpBtLV2gADX",
  "key8": "5XLcgud1MYzpeUhmpEaURYco1AtLZ5jjetWZiPUt6g4bf4eUpLDXgkDtGszmRPwFvbMk2SXjP7QGg2Rqgenf2KX5",
  "key9": "5mEcu6Dz6v6hBJgM1zj5i23GXeFDF5YiBvtBfyNEURT47uryRJywrLdsooXfs9UWpnqwrA2SzzTx4dYZqWd22w2X",
  "key10": "5cZ32f9zrEWCMkj1J8kYfumst4Hr53toLN3RpqMarDF3ZKiw2C9z9G9cNAN9EjKt6rpWm9MxiugEQWGJvrCg9Yzy",
  "key11": "3UU7XAribbAVDUaRT3hxAEpew7gDVo9QB1vNeJyrPJqmsucQ4WTvc7zgyocJYrjHSPEk48Qose7djn6BVPVv7C2z",
  "key12": "64mvEASvyFsZbFeGqiXaJ5bCa2v1GkDjf7VhYc7UCvNoAGeCMx3uaSpkjJiJdc3ZkpJ8qFMUo6xoUPeodiWDRzgE",
  "key13": "2Jf8P5p2EzJz7bm7CzLoL23iWApDC6mzVmgMuQ8a6HbUDuxCZsaP3q1gys7W5CbqkDfwN4t5Ay4YiJ5wX75ro1Vn",
  "key14": "3bY1hsj7H2bRzes3msF8b4juFPWKbEYv1xnZuFBVejHjaZ55hc8uiHVwVtmQGg1mPcyH7TVfLFjbV1BZshcBkr3e",
  "key15": "2gmT2EMmy92R8gXqBTfh9jqFAgZ4NVBLnLFZyFkwrHMUKfeHFR6ewF2Qj1davjtycfHhtXVi3yCqTMTiaazqizE7",
  "key16": "4WN3RqPPzvN3R4VaqLJbY3XVDWrr8kFUk2jeuz7RMGoysDK9osAsVwuYvGaDLxQRZbV3MiFAU8XcUABpR4LPr7ht",
  "key17": "4cdB4isNqWu5RxRfNy5Rpx8Md1nVHTaK9XLBBkr3HKEj39NXerCrRGnVcUdSLxpKTdEuBiXzuYP4o4yEPAYGaebw",
  "key18": "GCMyv4FbrH3XGRRPkjA8i1UiH42PnuUrntGw5SNLbf8fH4XukqeFE4PALwt2MdeX8ehHWWGLfX6V3usmDgzfAjy",
  "key19": "Ux1VKYgPUCT3zL5YdKDn1N1o4DqWM1jfAGNWkrWmVAhZMfy8HcyEmj8vSEJQs7XTFc2g2pMC4XPbpYDFjjBo88L",
  "key20": "5hdxMdQ5BDhSDj4wepg6SLMXLx63hiSzATRvusPqTfZaCmBKAoTMnux1RbK7FY3oWiMsx1WtBQ9ktCm6rYhZ1aiK",
  "key21": "5ZNJsyBhkxtE6E6rvvZyF9Z5FV3fGMKaN4C3mHV1gvU9EULwfj2bHquouQaeC4Gttjn9svDvJyypcTnGxbLX35p6",
  "key22": "4b9QWjNezCJjC1DZCzp4BfTpxZ6pkagURi8PVro9VfAU6PEaQShRqSEG8B7rJsiovLnQ573rpLx1N6hDBunD6C1u",
  "key23": "4WuucmNfH5d5kmWt8ZVSgFUc2VhozZn9WdiiZD2XhJH4NPucsUJ4cUFNfRsVVfvPfavW8Ln6kmZ9EDraAh5JDfAi",
  "key24": "57Jia68cVTYi2qvWpj62U8AGzLHF2XvZmgrT5u3vtpnGjA1ozMufbY1NpP1XAuwzLbrNC8t966kUY2RGaFesaFyn",
  "key25": "JBUUjbg5FLabCb1oeJJiPzEwANKCt7aZ6T7mzn4qFctyzYa1ygd13wVsC9FVJozfgnAGCYvBdjKr6qxC77i6f2R",
  "key26": "3dQGutD9kE52T2263t27XBJcFsdnZP7pYV1J74dQVkkAxhY38cf6f1NcggPi48L1UJnrjoUWBFCAdeajYf3qzjgR",
  "key27": "6VqrifRpVN1h9JcMGLt4BYPRbXaYSoTw2yTErz4nyZGkkyMh5t1HDKWAyfJuLfYytASsELUwAkccsWs1MzGryJF",
  "key28": "2vrUMyJu6NjvL7Hct8U329tugMJXPiywwsp1DyabFHo7ihGxKhVxxNcUEnHtPAHvU4C2rutfCCXsXaW65XAsVUPJ",
  "key29": "3jF2HMxTdq6ZQprS3vdsJFoots8LE7AGeYrSusTcbmZWVvAfRozWj7pb72oXontimfCHco4jTqVrwPxmwg3sDF51",
  "key30": "3DoqMfXvGFLiQRHVikkG81xbHK9MahqrMcdNzbtgKPohWT96mjkW3YxWZzvUqxdPhxK3VrE76p9XpLTovSRcBNko",
  "key31": "YrEz12fKg9DaFKEbdFt3223gE8YcrbCvNiAtvQb1k8YtADiUajngjFH7PobvZWUZUod7Vq7gJFwkgb3EYwA2UEp",
  "key32": "4VBLmAa3YypH5cWEPZAaNJDSB6wRUjbdtU4fUz2n2ZdxGdXuwzBt39no7LkVo9djL1cZUUiwWGvjaj4QfaJ88zF8",
  "key33": "41drYmC6UNRGw6767yMtHKqoar7nmKmV2yX5Rngs5K5vF9yd5kySnE2vLzXx3fQSsu7uWXaoukYQsWooKfgZyFWa",
  "key34": "DYUNRCRZuWHzTHsRpUAREM2rw3RtSd7FcPzBJ3N73J5sHTJhMhNfFhmEmiUfmjcoToKnbMstpiWdJhLzMTgeqhH",
  "key35": "2Eg9Nytg9z4Hn4hf31DhaKD5mVAFYqEFDgVy4ugNFziWhojiJQhS7HdGvNW3DJoLNCbe4tkggmSUMezHf2Nij9zk",
  "key36": "4AkaomTc6PvqmuXS5amsWarghZf7hrXRxxJkQNeJHvSaR1Xkq6Dit1HyZbEmufaKaeE4hC8cSSmkEfnPWU7wv6MK",
  "key37": "38foYt2abdpLLxrmYwZkx2xNXKLhL7MHiv6bx9FMCWXzZyzr3uuuAnyaAUWJRzsrkmSgbXarEoNyrMzD75PMb5Nb",
  "key38": "3PHipvoaAtAsVUURf7ABoSL5g58PnZyRCEFmTNDppmZDYVQbvr5f7rXRHqkzw6p3Mfsp2sELGh1qzFqtF6ZWFLRU",
  "key39": "MgVwyz4z6QE1vRZVm1QhoQK59X29H1pTVkRYedTYuXqAaiR4zKypxfxUpcdLQDTKGFag3BvifZbzpfZTZErS6BR",
  "key40": "Ly25UQq9vcjDX8cYiGQVLULh78MDkeHUc6eN6PpBBa7BBkvjUoN6vcoyjGfMUoA6ibzEGokCv4kJntqh1LRiugp",
  "key41": "4sFUBQH2LkuRn3iTARXLiCqwmnViLMXMRAxdGFvKGMtcwM3a5qURaVZjrH2zVna4mvu7iXxM7rVhKyk1EJhZvxpB",
  "key42": "3HcYiSgPwivJXJmFUoP7UJ76jMJcjQwCqQwqX17DX4EwRXJdMH2V492Bt5GDcrCtCDEBxMxKAj1j1VSFExNVuN6W",
  "key43": "3Vu8WyBNQowRWAWptUGRHTgYUgDppQvxfCHpd86pszkw7odN7RuWutUtqUskn4WLFjWVKeKXfkPMh9tyrQgZamA7",
  "key44": "2QCwfhDB5r3ywCHMDHGZrwUjR6avRNX2mTRi2sfBrmDUqrcAqZr2azAdSgbwwkfiG7z4tXR7uSC5yKP6SxosKUyS"
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
