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
    "2FbrKKJZ9tsWx2ybAkArNgusFa4kD7hQUNZAAn4voELrM7u48RZ2qvubcrnvwZtWdZhk5g5CDDroQUpMJuihwPm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rb3nkhbwn4k8ht8QW7BuwBbpy5f96BQiqnbHXmQv6uWAQbtHnjxm5rHxjpgw4bLAUjGTSWELaMDwBNo4rkhxTz",
  "key1": "53r9JG9746AXr5xokhrXKDWusur17ZVhLyQBvtWqjRC32p6KNXaFmm74K25dvwN3G3DhcTwyXdC6XFebLQD2Dmfz",
  "key2": "3NSonPe4DP6HRJX9xXrkgpMfUndpc466zojfJvCazu5xLokLyxVSRbTQMCc8wyK6EUaQptWdiitdoV7YRuVvDrS8",
  "key3": "5Ebj6msv7mJMJ4AzSNgB4dvs6Dk6SgQX6VJXsCV8PbD4K7MsEred8NLKmoVXwge4ji9V4j1mLbRDkbQNqDTf5cz3",
  "key4": "xWBfBX1sCLbrLF9KuNr4UMSpf7re1ETbcyRJ63zsrVgo9DWSiDcKzDKJt2xfzxzJrPkoyUgniFR4xcCV4uqNdha",
  "key5": "4nUNTMGKSM3WP5heuFD7jrshRYmGDGSQi9BAemRtiKNehttQrPP1Jy1jPJw4yiix6qm6RHmFjS2vKTGqU3A29yCQ",
  "key6": "C4mfJYCU9nALuTRxbj7JCayVRLr8AoHYC3xT6SkT8hB6gRqdMAoi4gmFAJd4R99TTtXwDLgyoFYeeUMqsfwuxEP",
  "key7": "hnCoVPYYevWR93bS2AsiGLV8zzJakxgziVR137nVdtCLevRgiwS271MB8FWRrSVjgYoCHtQNY8boh6AEqegDczt",
  "key8": "5iFgRn6NFsH4ahhgHFub82fWW6yyevtouTZH21rcLLcZEFYiaNV5Gs54wcDqZ1A4BsyDBXzBwJfJCiz3APmVnQhQ",
  "key9": "4j1moG71KaeCRqRq4t5ZvFKEVFd4EEFXQNbTbJKNgzDRzZ7iFqZtMZwwvSC9AQQXjFXmpcnX9sH1RQX8WNJydXsF",
  "key10": "5H5WohzNmyWsggmUarujF84TftaffVLswRFmH7hWL3rPSmVrGjfSPURdkjU1gUinepr3PmhYdHDrKpFfEK9dzPXP",
  "key11": "3cjabwtWBwphC9aZJhsjvujwnCr33eeUaR33C7CLHcUE3pKuUp5cKQaqnwEE4LiQpF2P1fjUw4xhSrYwwWQHJFHL",
  "key12": "4k3dGviskqZ23HcHqtWLD39jaXnYGcfPaabfRWJu4Y9NB8ph5jAWahafcyPj4w61j94CJKnpH3oXxpLfgdYyMSSq",
  "key13": "3JhcywddRFmTZWRjZ88UCQRG8s6Mm2XmVgL6Q6CD6JPjktF79YkdYwPz81MKCynxEbX4qo13tJLzvkc4ASx9NvXi",
  "key14": "Fm41gyxe9HT31N3Lh4TM2xia5qEcUCTYXGXGM6svTRUdqLvLCmP6F6Jg6GDwu7WpnheWDiP8W1FTH8WEdsCc4D3",
  "key15": "KDdKAh73YUFG8kmLixEyHL7UDR1wWYyM8apfcequSBF2eZRzzDaigS7XbAAXs6iycAdSxTCPdA2Liz6ZgAiQ63o",
  "key16": "5jaKnMtwdEyVMkgyXUoFBxeEseRFu4tojS6X5ivmHaaFB6voyZUSfT1YNKfz7gPba6xPVJnaFX2RTTYy6nXfJ6jc",
  "key17": "5DREEv6wQZkqUAvyAMmkVyVrCZwukBFERaEh4dhNrHWE6L4Ft5ujmJVqz8rvgccps7nvKTYJkHwQ4HhsFPGP6Rmb",
  "key18": "65RQJVRX3gxdkaRajJaBTubRiKWARuGAfkRmz1sSL4ndN2TqsSj5rAVdo1bAUSQrUH4bEvetTs2Eo8Rz8LytfBsD",
  "key19": "4TD6Qn3GaDDimB41qEaHL3svVnY6kta9dpBhG5TZfKyoSgmRRWuVX9GEecDG6AMi5T2GB1E5UKw5kQ1kScMcDcvq",
  "key20": "5rdhiChYqAR6ciWMhH3pT48bCUZVsinkESgNzX9YW4reixD6kCqw19K7ha2pyyMMGXqo9D3D8wU67DYwh2re2MLA",
  "key21": "9TmBMj22TX7KZjdqg2gzmBRPtgdf3LouGxiiib87DnDnPLRVJtgciSKzNfuCYY6ftHMbtXaULCZSYyNf1DBC5Bp",
  "key22": "4yxov6E5r7WFscQBZitrwj8gb4nbYDiNCcZX3z4E4YS1ToGynUVzeH6qyxXEfVNTnedn2fhygNMzcjPFSrdnqSi",
  "key23": "2j1gHJ8b9NJgVe6Shopyn3WurortekN8tQWdiZsbdHCe2j2cYeMphoVyBhRm4Uf669qyAVTYvwrgWMLLvVyuNkvo",
  "key24": "42ShVDZMviwLqfNQFNrfguYoxTse5qY9JBpTVjwo2DCJe33ageKGVBwAiFNBcTUPamYThJo2ZAc8k5ao3dTeKcfX",
  "key25": "2EDAH8obkBF4cncnRiSwVMmVcCabB9g3XMvDE9PDksXHTGXrh4kmfEBxrCactVBmdM1VKDSMakp4ZykQB4t8xHtQ",
  "key26": "4xvAwE3ApqJkjZMwYMfKExUSJFGqoqqW5GTKWSxw6gCjBA2rDouRmqvHKCkPPiEZvAHpbqJtkihFch9VfGm4UAV",
  "key27": "2xso1N46gEUgWSTYyQYLfDjQGmJhguV2mPsHBiJdGwnHLmQoZWBtFrWywaTekQLPex9rAWfLkovGqAoDpGfq15FT",
  "key28": "1DpvwRKD8et3AfHjgu18XvP4hbozwEkpTBstEnnrjqf9wgqh9uuib3ZpFEVhYPGss87D9orKkRxphJUn4Lc7u7Y",
  "key29": "4VQLtYYuRdKzu7USNtf7kW7Ch2NXeDhrb8yQwH6WqVdzwubwYhsShxaXUF9T6WNPnTodXD25fD96HcZEiGKoC1Z3",
  "key30": "2cidpdG8PWRv9Z5ovpgyELhGnvgZP6cKgjwKigx1Gjk9R631HQUWZKLyZgUzuajE57oRrsHmLwQGJDs5tSBXfZxa",
  "key31": "3BFN56iSWvBDhhumkqt5oVr9xpbr11szCo42LPUkh11izGNKGk6AEfRVZkCr1KbbTUox3TQXaGDiBk8ebeRZ12Ts",
  "key32": "4hEaGKT3C1XFsLuuareQJ2D4eAn92uUtFiEo63fHSUDpSSTfLt6fB4jgSPaizGwWCXG22WHGMDqEspoNFJBdzkLb",
  "key33": "4FdmSgRCoWHGZGPe7SNKW1UMaBMosHnjRwyQjiNSzLZ4Sk8pAWE6rbg89cTdPf4kYrgoBPtpKJQ8GxvhNRVZbKYw",
  "key34": "3erHiRusWBDbQsPjMqgsq2yRFLqp7eiHsk1Vmq32qd3fSpMUztjus75nPnUg3mYkBE6XvFRB7cjhTnNL4Pxzfn92",
  "key35": "4DEij6fqpWNsMt1qUuAwWtkmF2PccLLR4czqs41ba4yKv4J7BQyzUUjCDTv3QMqcXzzUpeLvYgGS1KNuop3vE4LQ",
  "key36": "3yrJ6QKRmMcFCtG8Ch48a659nFeRxS1VvRc4cxbyvacwQWSKSqiEnqN9CC3st7AgGkpfWycCJc5giXpjScaqzbsr",
  "key37": "4ipQZhL4nqUBgjs3jv7w1FNMuL7vbJx9cyk77pRNC3Mqm8fGQnLKTKutb2XiKA8cmxtmDzLxeyY7Xo5Mg1RunVHi",
  "key38": "3mVgyHztdgXkHEbHsLKetcKimsjmJyEH9G2Gm6doSTk8b8yFmEaeoLRkSgMJvZEyMPxRpneuvMdZ9nJwcr6nxStD",
  "key39": "2M6BHvKQPgkq1QuY2qoaariMGSm5PrLyDUmaHzTGrPSWwJHwC7bbvw6UgbuYSsX7yVrgXujHsz98vAEu2idZHdej",
  "key40": "XcvpXH22EwAmuZeepFfu37Gtbho1HY2Q7aJhsfLTntU5szY2mVBHXLjKMkQ3fAnJGw5oerMsiMHfzTyYwNuMPJ6",
  "key41": "2GV6SpfXRPkZn5sg6y1NedyE16rEmjoynFafDoovpFac1UoSQdfHB7VrcaxNgVgnv8zqRtFWtVkf3ecm6Bmj3Vh3",
  "key42": "4MAczhTN1CoGrUd5AhMDDa58PxB1aVKzSPwwTeYdLRUrAGQtRRvvXJYRq3ryzL3XHQx6JK7R8v9gBA7wNjGqMmqb",
  "key43": "32K4ujARv731d5GU1ktvJTia5jTesCgxnDJ8QLfVLxNaQYnUZtgTomh92xpDvTySVLoouFgNrTCN1bi1zX8J7sJr"
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
