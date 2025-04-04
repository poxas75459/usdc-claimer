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
    "mLD61tMKwmhLV4FCPKAdN9T8XkeenE4Qs1MjfjCbjYqnjJ1Q1XPFE7E3a32iAPnhcmJYu527KEKgyfhYWoX6VMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qzgbxzuj78DPFZt9DnxowVxuw3Sd84G9FLMCwNbNJVAtrXqxTq3kCgEYfP35hxnBS7YKq6TEPF6ZsciKsvE1qpL",
  "key1": "3SuJAMR2MSmLaDe1BuwNGkeFYgvSPZpS6EwYB72nFeMfRhwhBbMev2VLxtUsNf7KHunbFxMQWdWCiLkExbavCAJB",
  "key2": "5R4if6FGZ1B21vg96uN54D1kZbEXGDr8WW1iuHhS6tPP6a7dehtFEDBV1FS7Np5GzLF6RpZrZCitMWs4yGAoBJK4",
  "key3": "W4iPRWu7bKHxmE2ZCNthrGLygDVvsnoDhA12uKamht5RnVoa453rWdvWNWZEU4hQLyJ2eoNpRtXdhS5NJFxUb19",
  "key4": "smfZNWuS8Vr93jDdHhc26ymFwuUAeerdBGeVWDg8DmxLZVMJeaUwjJAV3HQh4zHLABDopacHekpknTLq9uub1X1",
  "key5": "5X2C6smnBqMxTdRyqQR7HZFtUWFUgRLWGNvYdykzhuuScpWQMn3qbzk7zKUMFPPuXtVRD7TfAsZJvChHVodQFseq",
  "key6": "61jaC9U5ysJZmnCgNquTH4WTzdcBDgH6jVpJMjPZredMxYpjHPcg3CMfX57RNfPtvAJmwdUqp7gd6mXndqPg9Wqv",
  "key7": "51rur9Vev1RRUtJvwdtGTeQ1PKYNnfkYQHzfhbdwksiq9EUQZzzztJTy41C7CEYtC7ARdgyebRPSVAeayqG8V69D",
  "key8": "3iVRUjZv3np4eEsu1yMSJnWH5tSR3yhdfUCK1VPneS6vGo5Hr76s86cVtwfWNDHBCntT8GbNHH7hehWqyySijBQo",
  "key9": "fzpHemxhoLWC1XZ5AHw4eacYbhD2nc36FaBH11r39P8swV2QRHcpgT8CiMSpSaJMDxQtf4H969hTBRHrVWj4aDL",
  "key10": "66oNPwg5XLfzHi258UJ5eQeV8Po2BnCu3K4aft3xASgwsBDxgpxsdQGXon6F63HvJJzSrGRCNSmLdyfaTTM3FRdP",
  "key11": "4v5cBtEZ5YLrfqe8prMqo6LZY2J3159FwQwQZnNB3QPE5pWu9nNwa4eoUhP261CHB1cxD1QnhD7RAL4m1mrc3W45",
  "key12": "4avzJ6DSPnSkay3h7Rsxypj4De4rVedBhb26G4Bnvrv3TCWJGoGgrm9Gip4UzMVKeJyG7WqZ9dXcKswj5zTQZn4p",
  "key13": "4YxYipFAVY7rPw7dtbHJTUMcsf1AC1nwZpGyP5kLSuuT8hzmNMA3ZTCK59GJWQvFaTzwm7r79KFkAjMmQgC2qm8V",
  "key14": "42D98gk7Cvq4DqHNBcEQsbMBeH63fzvbqfeBP79bngTnh4979xz3XwoJLbnTLMnd9c8ZaaHGpQMsXeErt1oT1oaA",
  "key15": "4RhDFHEVrGJFjegKW9reztQrD6YgeJKm5VgF9sCDLjuzSXhYcxRxd6i8Wfo1vkQFnaHgvq8Gh9kL2HpX1pMHk8JT",
  "key16": "2TVGP6SpYB31M3rGpCMNs5Bc4EMs2rZemqxwGcV7d58sDPPB1GkqG75ijdWoGX8ockZ2GJRE8uemFNCVm364paBY",
  "key17": "2BU8aMxicWMjruPRVpf4KoAs3KcKmgJYDGBMjcsn1p5kdcPDZkZXaNdWF6YJgLhtgdRHw4c7YzwurRtjb2AXV9o6",
  "key18": "23NucMLzWRMHfSBKBZ8kuHyoXZMFaRNMgfJBA1CHXeJaCBTLKdrh6esFaMrHnh41Zd9ag7RXvjBMnf2vH4npV4tg",
  "key19": "3AEeCod28B8jgVuMWcJx6m8Zx6Utz52pZ3U9sxWDtmKkFWNETx3ckinrUS34vdD3Enm3wE4ELRnNtRUSiJdub1M2",
  "key20": "V7AKzVFcu3M8WjKB9J7KtifW5adHJen9ND9vktjbp83qwjMMxGtJ1kRBUGdyGJnANN2K4NSwdxvhXQMmgnXzcSV",
  "key21": "5bfK3B6xoR7byFyff3nsgvRnkGRXP3RhfufvstcosT5GzZLNGyH8TTxi1gZF9HpU5zKyaSmoReHHEsa1ceSR68m2",
  "key22": "334KmdD5ymuKrJFjkmpL28t5Fswh4wujvJ7R8uEdriZWEGnymXbAkGaj48wh1yYwtPPP6fTUkCJgVrzokcjdUGEF",
  "key23": "2YPM7xAhgmuH4jgcwkrUPwaxytrxvunJza6r3EBkqj8vPGpSUF9mmKHJkdfNTwqsWJkubQaM2ncp1ZBUjTeYGMjz",
  "key24": "4tRF7zG5ASh56jJeYpYyysALgSQoMnKMnh6DnTBohk5dsXijHdTQBNETjijvC2ZBXhTtnDEpLuVsjdKG7y8KTkmD",
  "key25": "5Buu7x51Wsmvy5x2U3dRNhc9oxDtKjb47pMTWDR5CjerMqZmB5LqrqB4SmouSA9Kn4skUKzNmczM3dHRFGvEz4eq",
  "key26": "3UoXRPfnV8gsHrZcVWp2MQqVQtt4qxz11gmsc6ThbLj2UiwCiwCtsQCeCBoe3o2oc9TDJVLKrJZpceYfD4rj9A1d",
  "key27": "3E2y5LYcLRi7Ax8UutCoibHG2WC9ajN9AqYo9krsWZwvpRijGx63K2fsLwNA564ztjdtAbs2SUNoLJWfiDQGXpbT",
  "key28": "3hFcpq3o9qN38CnKGXEgn4Qbi6yaJpNH4n4APFVv7PojbNX7NWwZAV71tq4NMRQNmAcoNcqMB2t3z4AWovJfezTq",
  "key29": "TCgx1Aw4b7cxEHhYQ2pkGEeyehMHmFwbWAKpAx64dJx7WVYnLjW3rSjFixFQxW7MVWiKDFHZu3g2hqUBEkrBnXH",
  "key30": "2KpoQ3oy6rDMVtZfBcaaEHnfNfdFzVt4QGtCfXvu5ZBMx7ukR3Ad3WoLgZ3UW32apYF9WbWACaMaEjKbVNu6LXuZ",
  "key31": "5hNBC82vawHWR8ab6CUQDQzRKSeN7ftWxzBrJV19my2MECzhtgGagrG6aGcH7fwYVBcXACBBg6pvqgb6tomnEykT",
  "key32": "4fPY15RTM3YtbjVJpgwzZn28xkRk3XFxRFJMKWtUhsGAxPFY7q1fr4rqsyE6xWrY2C4SaLph746Bsw61ieCnjT8v",
  "key33": "5UKfGhLZ2bpyDvXhVQEBoySjPGPWtFryydcY1LJSHHo5X8QWmkRrbdodSSkuvsuWav7q6JyNvBpewSoGonCo4JJ9",
  "key34": "21vhrXFMh8rxsuD8actddpWTz6DBY2vEzB3ouwfK5E6Pkj66xC9gbcCSHPJgvxaC88G37B7veZ9bGRm9L29EK36z",
  "key35": "58HWfQM3xmPQ1SxtfsqVAt4X8ziou9wZiv8uVRhVWiNr3gwPubgUwjmu1hH3ZBkM2nHxHnuTtCb7ZTzrQV7Kpchy",
  "key36": "55XMguoTFySo5gS9oBX7nDbcUskr9C8qLA2f5UNCYYq3zofxPqpHPj26WZCpsBk2NJePerU8vKm8TP9HJBh9483K",
  "key37": "4eD4KcfrLaRPxwUn5SVXBGtYCU5TmhMphZ9wEwNqfz7ScSss3Wzay7MxReFjhpc6kbWsVXWDVeZV5qA1jumCeiG3",
  "key38": "2oQCvPUwnELhNxd1trDoQU69JTkwvLUNKSak1V8VAfMzQcbt4oxfzXuBv2H6ZQKUqoe9eejB9mssPVJETcSL8xe1"
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
