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
    "2sekeAbXHeF3ZwxUAZ387c4hnk29JjSsJYN3RjZ7qYRzvFjDm7ATFNMQ1psGMabCAk14u5vcdXmdLjnEUYRVDUcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z5UH1X2wfNWZ9X5JSwwaGfiu4135Ts5ZFJXadLZR5xqxKmzvkXouspWpgMkaRxQntxnhRTc6cgV1Q4EPckyjXzB",
  "key1": "3AQNKgHRNf5bCXEryTPmRg1KDy1F5Fxka4Fkec6f4zbuRidyu9K6NsSEmwZ5JQ9bK12ezHyrcxGbR3s2RWy3vNkP",
  "key2": "5dTUV11h2AH2XiBqTyrtBqvn7DMsXPqvUqc9ezh57xcR4AUaz4R4pMH8St5W5GMzHVzj6TnKQazG7jjuUCai2Rwa",
  "key3": "3qQRaYdrFxqX3qa98W3bNwpC271BhYhEsTSG5DuZfSRDeB32n3b3EzxFdGUfkDoLFncNqBwb531qnkvcnPqs34jL",
  "key4": "4r5txHLBZ34JQF1GrATxz8sNQLZenmJ4V9As4s8L2Ad78wwLLgtcGTiHb1PFecrpCQqMLjk3x81dDcZrSjtiX22f",
  "key5": "xJXf2m2PpfAbWWBYPgAPzdb1GsuFx1aW8Akxou8xKFhLstW11KAVf8mefbHVbUkp11js74Y8JgoD2YzVgRfM3b2",
  "key6": "2sxkc712mLX45MK6gvhguNXwbPcwPFwtUbHsW4TtJGwu3mRBjickNbJbfpnwmLubviKVLmDq7DvTe5VpFtV2DdWF",
  "key7": "5Q8J1uV14cvPJRMbfHjoQD4wRjpNdNfYnPhT1oDmvdmZS7ctaE1sxuFkS2XezKgsDAD37uAd5GHvLshbUmDfDdg7",
  "key8": "2zEcq33nPDcYwppPf8PAwdvBps9QkWaY7vz5tRLqwYWtgRwEDEsXBwZh1uqe6F2J3co6hf4oiqjbvAgRB4of5dky",
  "key9": "54v9N1MzAycbssCXSeg4S5C9mmLtQpNEkyRDNvz4jT4HXjZQH7ZniLaaRCEgMgouTGneMUwDUpVSY3JLkbmGC5qQ",
  "key10": "5MDVUXQJYh4RpU5U1EDP1PTCs1Uv9ipwtdykfXBSSdwLyRuzWb5cbe2HQ8EYbiQMMWupCSuRLsZsG38mDaaEyW9Z",
  "key11": "3Ud7cSP2u6g6AcMZWnxyohFQ3vPQhaFXAKGFCbfokQxH2NWhzbKP3iBDkit3rgsq1rttZU4H8nALjd72mBYsudt2",
  "key12": "edZ7kEBFC1y2yMDhK4dSQFLjmPGMf2ME8R9i3QkSKcx2YkFfeN7hCF3hfBqi6udpGt49xJE7oSY6JDCWarq65y2",
  "key13": "342WEeJGcyNzx7wmpB6GXBuKhm3x8JyUtV9BSyg9K3wftP5TDb5ou7wAoqkwZpKm9MYhTkfqhDcA9Y7RAqboi2sn",
  "key14": "3dzzJcuUqsCoEeUpv5da734cf16wYpBdpNgY7tZtJTqZCoEXvCkfhJhZvUFasvFs2zQXrSeK8hAtWqnWQCaVXnKQ",
  "key15": "4dPjNLhvH4RZUY8U3aGskxygRK6JjjgV1E39WeQ9g3NEFLhYG8W8pzau5TkZJTb3SXsdd1oDqXh1jrpwTuYYwp9e",
  "key16": "57TUUwiMpXuBpR6QgicEJW9FrfX2mvCtArvJQytuhJ39TmM52k2JQhCus4euhrmEvo43n4kYak15HuNeHGnjJu2x",
  "key17": "x3HFJRRwPZycv41cGEYpXjxNSYXFFrQ6H5xoZFopQCmBaptRzb3JAowLVQ5k27m6rEWvgVUt4TbhrrpMS4wg9Bn",
  "key18": "29wNVk7eGnty75ndcifUbGLx6ZDomTT2EDgc762cZB213G3akC72GzHUtBvzabS7VDUYcF7zbseGLtzhohcW3iRd",
  "key19": "33VHC3UYK7b4xtMHpu4qp6qTtEUUWWivJ4sYDjEp9zwdgu1umChRvxPhdgEZsAUpqFzAAdvKLuwNY2JPKXT5fdsi",
  "key20": "5KeVL4F5jqMTmX3cu7JtbnkxC8ZHR9a84TkTfAsLynx7d1NxvYfq6JafrS88qKMoVPtQ6eGMkA8CuuJJ8pbzkYyH",
  "key21": "5E3zZM87gKfLjX2SwkBrLV8TBDPvRGpXhbGbb8xJAytQ8FTczzMNs7fao3Nrj2KWLF2H4SC6J2X2iyW7UDXtsSzj",
  "key22": "X2c4MNNBSUuq6BxeKwK1NUmuGfwbH5G6LdA9u8eiu8hD7BwTTywiFmWnXm81vzmq4LDtNiH4Ap7txvyXuV9BbX2",
  "key23": "6pLTroHA1CwvcvEWgMbFxG7ufdgtDVv4VFXsZLt2AJWUydz7rJZpaVAsBVCxg1kZWCPXv6mtv8RpcKxiCeTjbQq",
  "key24": "2jYtU9jG6zi7avTUBv3LizsGGhWEbpTGS6kt11UoFpigBNyL3ZtWwApCmXaEjdniUPMHskUTjWe2e4RXTv9FPdj2",
  "key25": "4JZN6r4V9U98xwSrjDcc8yPc4Y8boaVVmiybQpSW63GdMjY2zV84J3XYdFMv6ewRqTjaxw8deLE4J2WuUafJq9Ga",
  "key26": "4QSRtRJueXqsQcbdi1vEmM2EkbD1wAKiLdYpWWDUByZ3mJ2vVRaKLpRw5NXhwKkoPsUd82r9CND63MksYzk4GDAP",
  "key27": "3gXVqFQLdJbz25t5exy6MCcACfTEFrzSgTf6yZdERADMekdTUXnSPbGWEs2HdPu4s359mGDggt4ciJXK1E61caQ3",
  "key28": "4AXLFVQNBsZzyqdp3FZBgf4YrM6mQF7s1pqqw89NKf2jjvhNpMzsxv4vJ3oH61hKAarZkqzfquGsbcH6eBFWqvpY",
  "key29": "55mFKMpQPrd2SVn5FaAYmYBPsW5B2ncUmiNYRRgeBtifJGwfofdB2sJ9cmRHfexSQxx7kZKwXx9nt7Uo5Lwfm9aS",
  "key30": "5VgprRw7PJexWxKJzsCKB2eGUiZgrUB8HJ7unaKSa6cGHyocQPpgoakAwsfThaELrvj6tdC3aMqZq8ZX3YNUPRqz",
  "key31": "3gJt63PVeAYRrUpi5xQ5TEt9hc3PoFWsAJWNeSQRNLBinE6ATyZnTTZ2SbJ3YJx8ADqdsYqGbkjdyWaYEpAwRG4S",
  "key32": "2w8vMnCT94mgZ8cF4nFu56xStpGph6L8eHXPrduW6Wi5t2sCVCXuM9fnZiRMhT1X2U3vr1twCU24EDHqBFHiU4RJ",
  "key33": "47nBhGQcovikd7AHsimKv9XCtpokJemKP54WXikgtsabSRjQ8zmCkcGimVN45WdHksS9cqBAT1h6RJF1g7Xmf3mA",
  "key34": "35ri2pFenDSp86sHoewr1oo4RE4abM6aAyBfpMjwkfkN6eiQ247U6Czq9eePaYfRxy5EHJzJC2TFyZBY97mwzRah",
  "key35": "ha8hU1BNvoRQtMDyiTQfX89x8gQLNJBSKfyTpb8MGrR6BFWK9tZNH1MaMGrBnenXgCXxVJ5fQ3zJVdaLh7yqm2W",
  "key36": "3bgviajfkDkZQpy6wyHEFhvKXKb9dzW63fAwBZwvMny8ddAHVVPrPUfQwfBW8qEppkGUXcjtUc2rrCqg1vqM1cV6",
  "key37": "2aQruREEvSNY6SjuSGNzb2PrXouvTPB6utStPaWEJCcjF5k8MBufVjm9ByjT1kbn73WJoWmUhbUQ6pxqSbTX5oM1"
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
