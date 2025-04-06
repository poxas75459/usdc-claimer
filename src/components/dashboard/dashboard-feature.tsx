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
    "4FynFiFQEdK6hXttDy3f6DdWNswivT74Rfuq1jP9MnR8ARqJ8XQw7NkvMxWEWpY5L2BfV7wyNxBkHpB7LWzVp2Yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3isxJKJLBYJqJGrrs3VUTGrVBZrdsYPNd8v75mcuPLEgv1m4aTphcs3rhMWNUMiRNMBURbftWwqXBZ9WncEJupHR",
  "key1": "2hKGpeWSsxDicZQ6odXYNe5Y6vP2wV3mjNNsprRVPLtJz25P18JwnVs1awvAkv4CJ3r9DPKSdd5LMwS1xG92U5i1",
  "key2": "P2ACqea1yUctxnKgZLrRRZcX6TkNGoR74k1YzPPrJ8wsyUjaVgUVuZPJ7QgKk3vJdZRpnL8cgatyCUChjrxugq3",
  "key3": "4PY2xhwwyMNR6dvDsVwGuvJhyCKYjPPFNThXWmqVCrGUQieXXG3f5bjCrH6eetayjoQLG5WnABjKytuWhHN9frCx",
  "key4": "5xwr3AGkL9whQ6SxjRrRLJNQCKwALEUoZAP64AR5BU4ZWoxWKMkSUJZY1aG5tN81yHaG5MDUv9zmLP6eLRFaaXpQ",
  "key5": "29ng7YCedruYADn1jSJ8PXe9xTummv9i63nEXR7E1Ruq5VS6Exe9EiUhAasbHuLvZQmagEreDpWB2n8RDTFBL9wR",
  "key6": "2Do3Lmu4cCQhR7o1o558c2kB5pmrkX3ARWsBT2G1GNd3R4oGXkuJmmvn2naC96P8awTYJv7Maqj3LXPyq31SkfXu",
  "key7": "4XMtXz1atuhRmYg4NeyixmSVszu75UvgL5iP9GPnH8EsGZEmKrYzPSBEeeCbvfcM7sw8BwEbVYG8toWGBU4G2sxf",
  "key8": "5Fct8rSTomLSTv8YS25QpL76RTQGKnCW7jaaiQPuamW3RWH8FXqTSHCT54CX7ieDkBCfU8713cGFKYmQhDvQY9Pj",
  "key9": "3zDuPM8W8rbFqXuL89Svnqrp4G9ARTp8y2KK9FXK3jCVB5gMrXapTCDPDn6CrkgqLgBgaNecATzxiWo7kRguCDpd",
  "key10": "2ZCnBiz4Kn6fLbn12nG7MRmQKuXVv5jGGorQDUv2PcHZ2AxJ985jq152t5JxZArsGidYgMKEbD9ZfS9Ac4f2KjiN",
  "key11": "gGGY54tx9mw4fmfshczjqRpHAUFBek56aj94Z1VuiY5GKg9PjxrVEYCPMYgeTxvEzgBX5ZmsuuAhSxVEVNx8NxK",
  "key12": "59MfNj1QFBXZfQGHWCZgavnYmyW8EVYjxbfhYecqk7X2dJ5kRP3TqRVyTAsNRT9VeeWwDxoht6PZkj85tZQubZnu",
  "key13": "24WhyCNu5P2NP7kYNAF14eRz2kzp26ssewtwZZyPK1VTevVPdiG7WnwGsMNPHmh5fbcrEcjHjrpFnHr8wh5ZGJwK",
  "key14": "3gxFXUk2DdRsunu16GfpMwJFZ4U8Fz7nstdfJTgfSDncJrCtG9dSM7BRqubmg6WzVjFQ1S1pJdSddwexJRtvx6nJ",
  "key15": "ArwT8c7Ch4WzySJ2EzXaKH95Bt9KWpoUfTjBbpo4KFJjYC94aW1H6H7HDp94Mv8iV33FZ82q5TV5hEggUsWEEaQ",
  "key16": "3y4Pgbt4xM8CwHdaifNy5N4ikSL7A2ns9QRtHNZ2eiL2FAX1BdgMy6gnxedQtdvzKVJG4kYNBjavnQaXJqGhwkPT",
  "key17": "2hDvKJmuxrYFc1WRUeHTUTDo4GCmmQDZxrmZUaeqUk7GSqtuuJ7noaGcPccfNVxaUBHQDorefgaFPcJCzSiDka5B",
  "key18": "41q7MyAjbQrp3PP1pcvTmdmLpr917v7eU3yW6fD2njkuqsKcfLp992KFBzARDrX5RrjHydg1E3S9bg1jjBiLS3Tg",
  "key19": "2Zj2irbu29rGCvrDoreKxPyGRKazPEpfu2kWqka2ifqYfa5183yNUFXgXVkP31VKV1A64WWqvMeLXEpXCbqVpEer",
  "key20": "2sWj95dth6DjEZCJyQceheQxB6j6emQw4n2pU9tmrxDBNPv5aRjP6fCE19ah2cbqCKCZaxa54vHpF3J8LZHcao47",
  "key21": "APWPLE5sSbmMBMDsqDYk8B6hTPsTWCQmnPw2QPPwwMopRFuPTD96v2ARZgVDGAZiSKYSVkjsArPEoCFvNmfEQqi",
  "key22": "5oYhvNh35CuEM5F4jBmCDAp8CvtktTkSJmYTEM5qR6Gn5463edch3YsK18ZYF4raRyd63rNgcTD9QPHMUstPS81i",
  "key23": "2LVCaZmEFeB4DDMVHNwYgg9ye7pmVEnaP9vqwUBWKDbe8gf3JAABaBdrgA1PyYEdUk7FJh8X12izR6ouAfkUz35u",
  "key24": "vZEJcyMoEmdrnYdT3sndZoGB8XNvz5XvDz5GAvFjc8QE1SUmA2uMsTiMHt5LQre1zxsKB9koXVFz5hBie86yE22",
  "key25": "4uoY1D7ptKMeiZp22vc6SWronW3sVbNCN9KGbzm57Nr4Xie4LFe35eQ4DExftkcCVhn71o4CjCNnfmArrEWVx1fn",
  "key26": "3QXMqQjaEktKp5rrKucoZfZUmV62mcktszhxTUPG1xQU9kit6KxQ4WvC4fUXtuXoiSEDs4hB2VSDasLGc6yYk7YZ",
  "key27": "5FnAjvSVqPw6KTso6mAPrJRpkxjxDfigjUi3o1BUJBRW96Avf5yqi5EgHjeoMpmimBm7zb5qfo1izkWEiGeCn65c",
  "key28": "2269Xx8kzP2n3BQbMkypKxdvYt5T36w2dtLxTR1EbzFqeDtjGMzPqRFY2FeQLrk8kKUtLLF2xk8fRpXq9AMPjjpn",
  "key29": "5PGcS5cvbvcCkXK6FmMXqXKHZN6Fuw4tQxpaAkNqupFSeUJ5VGiHtC913V7mUMVH2outPGeTgabHcPe1h2arGyHa",
  "key30": "2CABdrLVaVeyacQsXbaqE1rCte7vc9WD1Se3dDYQJnbZrjqts1ujj5PokQonBXj7yHoTdoQ1oQVQ6MqVePhM9cfc",
  "key31": "1X4zpvqEXCEgi7nXhP5ze7f7xbKBjpHvdg83gqxoGHPhEdHcPM4i3Qz2V3dQLRDeobDVu1ovVaCUDvmRSDBTkgh",
  "key32": "222hnf3ZLYmExt748mHZpb32orfjCDxNwsRLWj8S1nxtrojqSeChrjsgYSVy1kgLPWqxE55pUD5HTWZ67Dvh2if7",
  "key33": "5UtChgGDjr8KwUCXV9F4CQtJryWuKN1mQMThvBYsxYfzzJyfheXmVe6uSfRCr13DF2bCWB6vNswj9jJ3AdovptY5",
  "key34": "RHgZBs7WBGnK2GwFtbmDEengbMHBSjJw5qbQfYJ2UkaaLsTbGrZGe25LtaUkVM5fHMshLg6tW877ZajpRSfaGBY",
  "key35": "4kmVmXKAxpofNx28rFVMx6gKzJ7P94HAhStGxWGahRYsFWAhc9NKWNrX51b6a14JtKQwp7ydy6GkEEssJgZgmA9Q"
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
