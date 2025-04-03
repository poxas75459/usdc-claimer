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
    "5PC1ZbMEk3kLUP1ngppq3ZJVhWCVwViQAv2Jmtf7wmWbHDM7Q9ps9qjNt35covFgk3787cwJXMyytJCAmGghNaGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2euE78rAZPzASJVewnQsrfQ6paSd3Lbq7EoibCvx7pN2mipJvcEFqMmLayPYbco3GiwHtvHaXzDMXgGxGJocTAhS",
  "key1": "nEWo8EqRoU3Zrnodmrx5XfQPqNEsfanBzUTqPTx56DpMjvA7c7nr23j3rNZUzP9KE7Hmz1jgewfitMDkPirHzzY",
  "key2": "hhwVaGh3LHkhBWmtxBK1wo8hicsJja9hufwKNsKnPCmMtat3GVh2RWnzXVbPm83UwNnyQL2ELx4GLgXDPPUKQaV",
  "key3": "Ar6epjV6zT4MiVTwZ5SpRFr5nwAhKSWqpTEDEjn8i1GFtgC3Jc42DPdm52tACuGztJaKbwq7764pFvRJiTARpR8",
  "key4": "3EpDLqA7xri5kzrkQJZGmRLPhLxJoUhycNqfBL459WndBzaefz6yaMvjbLnTiEPuUhrFWDCyTdfjcvRSdHLnPPP",
  "key5": "TyZoY4fMnuumoRoeKzQV4izh4T8szgepfarpaAkbkRhPEnUfkaMz6hZfpeytZCt4YYz1Y2qGmR2uxjpr6vbhxUf",
  "key6": "3gFhgkKNi3rVTYKLCWAdN1uWdrrJJHAwCioj5nhknTuXvaFhHRvasTvqeghaBB51FCXxrUUx2MvWHQfZJMYNLeMG",
  "key7": "4vaFnoWY7QKritc6ivdyadRKhfNz5wonykE1CxpMAm3qQAvgGEEBRy7f3EjLQ7BFpxTi6SzhXvuPQZ45Lt15SJ5i",
  "key8": "3KU212e9RHR5UM7obiUzw1jPF8aF3nLLf5a3EbHp2LcQCezgxugeMNabLm36qnDiTdpkgySH9xKDQY7qEaQvWdL1",
  "key9": "5BvnowpZVu4HK87zHXpkKJjEwgwAmffAYKkmwgdiVsVdPt8JPv555DBScc2H9xpR8iyxySX7ggDg2gQrb96Zim99",
  "key10": "2HZV1iHMEVyBgyvoTFvwVgFJ1eQJJrzy8yqaDvASf2q7UgaAwbXmf1nQo9sFjoF6sx3YS8M8f7SKGGkemp8AAEjE",
  "key11": "LFUhdskwSMwnxc6WUdZ1rSe8EcyoGXVkMHbRVivtsLpYv6ATcQhVYTcT6drEoD7pRg1EmuWJ8GF7bZMitMZruvu",
  "key12": "5Eqjet7rwKoFaRyhiZqwpRuVdcumDbpsKDwpC4CbUHXumYSkQdbxKHGhKe2AyQ94jf2LdKFJhnVJkCUaTLKK9wQ6",
  "key13": "2fFvLdCmz79C7XSeYM9o7WBV8SbreMXsSyG6LkUmKY2Pf6PtEL8Y1tPjgL7kAXvoaHQcxGdiPtwr7MekXSGGnNxi",
  "key14": "5n1DB2WpWf9nKckhUNNKbducBURwjrsPRbsCVtptFfN9MK9oQzAtr5XkT9DZB5hwgmUvd9wYz42CkS3etBFC1VDf",
  "key15": "3vacDM8rqh2supSztqESV5VjWFDeQ5WBrGpcFCUwnffsG8TBBrm2scKcUGKCSpabM6svE5RUT5HxMnnDnX3LvQsz",
  "key16": "3shXYJwtxU5ru5XepqezcaHzxN21CKDX9TUYQvaNVk9vXZHXu7PVv5zZ96qYntpgCdzvUxjjouGbZB7Cn3vNn45Q",
  "key17": "2sCUXUpzV11gSEjj7fiHGUhjFhaupi45J3ex42abeusWmtHQnGsevfGkvQMiNQydNa5J4kgYyB8axd5MZvPzgUTd",
  "key18": "3hnpoKjzrP1jS8FGJ73f2NWMdvzGLmDESpWrEGmHNhkb17pSS2JXb28ej1etakCqq4Z66GrENZHB6vGGsebmDNPn",
  "key19": "3vsmxmPWZ6yniXkysk53yTRSP8DiqjLVYNmPCTJHDQXf1ahi1v5bC6kcxikeCMAwEJy31WniQL5ppj7BoE7F7sMG",
  "key20": "jyfPJnd8nGWH3GEnmLdS6hgS7YzWDtFmFCZ8MSxM333dc9dxqxjnmthFXQFnVHNcoM2CW7WPkjYWW5YcMzpRFGa",
  "key21": "6hrMMs6g3Vfz6WcqSXFakroKfQ3omyjmntbnDVo5F2H9KhZqxRd7AUrp9PGVv55Fa9uQPquJZGEV5vjRoAsV15j",
  "key22": "4UMxJMzaKYHnzVFD12Xq7yBg1HTimdb2YajX3mVQX2M4hnJE5wP72q57WT69HZcdUJU2hTwE4xcj5oR8oxxxQS8",
  "key23": "4GA8gFKEbeRJK6ytTyvMVLCPCghYLAcTZTgTWXg5V2nsV51JET8B5ue3Vvhrtwgj2oiX6vKpMZqSJLN73GgnKuH",
  "key24": "J5qdHy9wq7rpytHLAJQrXZCJdXedTXcVmPtg5rUyDW86U9EwsZcYxvUUwDwzo3RKmFszyWKJgwj4Cf72MmBc5av",
  "key25": "647QKgVFxoSVdK9Er3rbQ9HJPMLE4R8tKFQm581615VhoYRmkADN2n2u7kM3KYWGJpFsoYUPeXFPjaLZ9dM611TK"
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
