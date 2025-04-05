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
    "5nz5qbSzEwA6AxNqCE4Gr4dWi7k6e5pMs3BGBUVq8XUbZnGvPsTgsaTPL9hM4TbowBJEVJm7ja9hk5pqME9SmsrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UJk5gcf16H1j4Cxv2cChYiYh8vrCKsUbrkkWqudzDrQQBikpEQ1V9kwTLfn2vnNBtfLFTemPPV8BJijmYrqGDpP",
  "key1": "4jnHPmiJYRxMLNk99zM5HKReHPWcco31gufSM64NdHrz4qAJgEj5Xkym9pCK8jWJyguGYxhiqYNwPN1vsy418n8z",
  "key2": "49Z15z6RJircBsgZUKY4idcGwwX2fUBwLrw3F95SMm4RGwh4oV1sxVTUQAvyxDSrchMaY3kpjFyrSoJdidQtNq6i",
  "key3": "3EtPyfSkdSGABX74Hy3jwAwDVgpxC26iq33Cy4pN5YdVQcmLGr6R6ej2p59PnzSzF5uWLvHiYd3nVPdCsZziRG3i",
  "key4": "4okNPM4ovTYdXn9ZhCbiy1kWCvc813huwL7NL5dGBbffuYMpCV53qWj6FsXRWroH94Z2FNc142J9mVtYssLLaCsD",
  "key5": "2zDfQsXtaDNJkSTuiGYJHiSkrmENgTRbhqUhv1wcqDMffugmayiDHLJBhdC8t9gFfUge9PjD71XyFoM54LwdcFcZ",
  "key6": "4auJPcvyx8smtdeFeij8f2Tyb7P6podM5hKL97QeznrUzck2CXBR9EqLMc6Z5RTCeHFhZxVE9zspzq8ytjCGoqaQ",
  "key7": "Ymy8gcYPgff55QupMK4nqAXC4fYZEDNqvcAvVBn7HQMKepqngJPJVz9dTyjfbWCmqQXpzxeom94eYBXRdQvuBU2",
  "key8": "2ogj1bvfYx93bDUqPCZHqYBLyqqQx7Tiq94NfEzjLD4i3dLFGKzhfk9ufM21vvtNhtM8N4rPdx1mnE662gPRBEZE",
  "key9": "Zhp2gK8JsgFfEaQSXCsFiTFWTqMHuVb1LPyfJodAVWeEn2CJUh7ugJDCJERzgc1JMM29DcudvcuaNfTtsVoR7du",
  "key10": "4B4phJRjpQkUYDGQoHWso7WZL9LKnkB8mXxPacNGUygUHHiufPj3SdDGNnPmhHDjGRcVQXYLjGsayWYQw56f5CTw",
  "key11": "43MJeCWze8ZPCxqfXKSKz2pSKEaKZwHQsGki1yXKJGjBBtnG22JdE5ruKnGQ1dv5tPkynCCkDKcdfRRigRJgvnBx",
  "key12": "3GahsArc6wzdYYFXfTmiX8atD3P1aZSREx3Aa6ic3kSHRxzE7GDvjnFsf2UvHJokMKnQQcBD5oAj7BHC1FC8sbA1",
  "key13": "2NSJkyimZgw7yhdHjZR8Ug73sZBjBSFsy5vso3HHLMfZV8PnAueSURpcztAzfZy4nwz3tAsuAJr1BMQdzV6hbZsQ",
  "key14": "tHLPFdjsispKgAiwyzgq4NxuP8j2xtWvQVvAJhqfgdzPZRywLuiEFr3qTfbB1mm3ri2jGkXn62e9tK2zt7U2qLs",
  "key15": "3EcRKM9mEWBkiPu6kc6aQZ7wJp3uohoPecqt3Had2AudDiZcauMarnq7ZBrXHWoMoGPypHhhhaVadpR5wvCNSDyP",
  "key16": "58TDjD8YKKDzqeZdscN5EQKdYst2qtLtqDPNWgieDLoNp5JXwevJXNTVV2vKgU6MxJ77LqTmVkwS5VxN6U2bpzvV",
  "key17": "2DqyroJ6CPy61cvLr1SNcigSTXru6Aey4VVbDF8iZakCeLMrP7rvMedrQan3nVPVQbVrYp63sLUqVAXDSTmEPEh3",
  "key18": "61zAuthEdBj5PQ4S3qKkSr9sncrCA43GdRSbjP7DZik5YS2BxsRBKpxCGw4cLpDnqmmDQyj3eVvBKFbeJCuLUfK7",
  "key19": "3ErpGZjHm6WpBBPkxy9WgCqsmmkvaYF1UHaceJf3PWQHoFtHjc6zXigtkgtigo3gntHuHABXPRixjksmXNHcBWXZ",
  "key20": "65q9baBNT8eD2Bx33Rkk2FqxTi8aZjgA2KwaeHCsCZPrqMqLUMn7X894yPG4HWCiywkwCLG98hzNseo7B6rsxNge",
  "key21": "3PiBnw4P32K91AVxBZaVnruEkyHvRHVjinm8oGPyS7j9U5989s96bu73fWtNaK7FsfdGRNu23AebpvbWnbs6EBS",
  "key22": "2P7stLZZPs5MUpukwodBXpU84RhhxzKDaYymsbrrrfjNcJrXHjMJ48DYA2cNpAzUWnQyVNeeFjWbmVFgTanFz8bK",
  "key23": "5EajsFHxzpm7Pmd294XsrHcmQnXv5UzfiJo9eGzy4AkjjLv4HJMCdGMCcKDgZ3DzetqgmngF64EqTX1XaHTDXdNW",
  "key24": "5TFmE74XcRR5yMqTgXonPECDxkQCHCcmKE8akMuWLuH9YDPAm2TMeLjZgSnfdFK12vFTHVF4uTJYQRBqm2FfiQ92",
  "key25": "4frwgxiu1CFMuFzja7SfAqVvyNQKvpGUx98Y8Km17tnRFwxKfngmhPs3845ftrk8xvZHhwKHuxLScbmioCurvXrk",
  "key26": "2vMVDKeTVdLBWADSFjz5vdC3vSrE3cpKnEe19wD3gX9P31k7z5aW6aMCYkXoGHZrFrDZntsShWq2aYJdYvyXJtEA",
  "key27": "5nhXDcDcqwrdY16ghKfiX3BqFHhxxFd8g2iPueEvxQWaziVW31yHLVn2JKFzEYoDy3hcouDLuHrUCVPPA9Ahu2hB",
  "key28": "ng4eA1n5ofSFA6uGC6hg3Tph2xwTQxZaV5YbKo2aGvLdejVyW8GPkyrrvVcsXr9d6z616hUwD5sTsAq86nu1sPe",
  "key29": "3uAJKBzAi8j8vj2SiauAdYd5hqjm69cUgtNTRAADgLHFthYvsgQhGf5sjBuLwr9bbWaKJKwe3ZrAYX2F4iTHfBUz",
  "key30": "4WXzc5MNYFXE3hnXzTy9nqFuXCUtNJAwdaegxDPoQA9uzwdAxaFh6MefuRrM4zn8ePDws8y6B85UaL1GQMQ7zoGy",
  "key31": "4cos7oxy16UuvETw3vtaRYLgfWeH1wKHREYWi6JLuhB73BCMHYbhqczUGqLDWT9sUxau1f4y8wEMpi52RRjDKN6E",
  "key32": "4U5THxGjER3fHoCUfy8NTJdRSnw6TqZjT8keTfipeknApw7yjvuJJ5JYnhnV8MyKSuWv36suwno9SB6FPoPNBg6y",
  "key33": "4ZGMsstcM7tSTbSLYgoVa6tJi14KDkycujf4iNAxCDkVGg7HxVETPQ35JTgBguYHgL9Nmu1LWyoNfo4ubWUMMa7H",
  "key34": "7FYBrVZofSJSbzDCXpAD2z1eAm8w8qUtFgMvWDPPvaAZsjUWTXcFWePFpqgWby36CWc5g8HJcmssc2wFrM86Tom",
  "key35": "ShJeEhoUEvaEXhFptb3eNJpoVJ7LXRNYw3x62ecdCqzv25x64qHpq3JZv5BR8mGuWNFBm8BUwu2LCeuQHAk6vsr",
  "key36": "efNnTL5As8uP4vLHyozKMEcnYKazeQJu3vLdqkm9yFzWvv2d1FuLevDFHoajnesnxso9eJPA7xe1XPD1uSYhwRM",
  "key37": "3DAvfojrMKbWfY5oeYt9JxDqMwxsEDjLL5hBTdELurS8SooNVRVBmDmyySEHjXKivhv4fihYpWaXGpEmBwL9baCz",
  "key38": "2VdNohE4LYmRS2wZCpYGsoSZQD4ytUAyvZu1zty1Yziov1HKTdaM1TwNnryS5Adou53DAXmLXMWVcLXdz9rYLsNd",
  "key39": "39kVi5JFF4Eaeh8XF6SRhiqg5eTMZBTeDaJCiChbCTs6Acz3nko91oQXFawiVK9M7XhXbgirgjuP8MV9BKxVWNBY",
  "key40": "5uY1HqxrrkrN9wMq17sCNymZQ5tMMQQQkN8T9crqCgUBNneb8ktruYNvVXnbjAxfsbuKkViQeLH9qmXHtNz7rnKd",
  "key41": "24JSubyGtZttFJ8Y7qdRJPc6MgNhivLFtzcoUY8YgPaXr4reSsrtLgY5Rz53bdCaFCrFofKqKf2gPVW1k2y3bW6G",
  "key42": "2YWWoEA37igenJZvWgn8btHigWyQdPGt5cY44Lb2drY8PMTnB9gdAtig3R6E73tQ5CJGx1JxfyTcs5YGKTvmB6vs",
  "key43": "U3sBerrVeX8opMKjZLt1PWmx8CkZPqtuqa1VnCAxT6Ng5y7sr7qvcCrDvZ1kfySgjB8AmG9oxFxTheKuBwHgnQz",
  "key44": "2XmP9qHLLcvBV84q6nG3mT5526Yf4Hh7HD3YPAUSM69216GwWJ5fHCgeXiG5AdSkuMeFAauGo98Do1AQXKmEMAUR",
  "key45": "5FXAbeQ1sFnzq3WvTcinoeq6sRiUUi4Jbw2WbnErFAnmcbPnfzbTRF7ZbH3Aa6NrNXNruUwnhzjq3rr7eKepFhKY"
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
