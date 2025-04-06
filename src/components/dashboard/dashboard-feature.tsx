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
    "2FFq5tgEDKTd2A1ukMSVcZnJQ6xZg3nKjtwgZidnaBdLMMgCmLyeaK1dfdRdFZHyTK8v9x1GDez4hKpGGFD1XScU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RwgK6h6sWPyHt9Q2DCfEd3pxKLLUMHk8WJ99ggAxzbQMUF1nwd3sVBpTF2YxqRTKz6u7ULMaZ8PHRjovCEgjd9a",
  "key1": "4s7sQEYzbKP6pngrnMvnTdFxgWDDGUGsiQ8NAcNEJNjn8JkFBBDGPC9M1bCGeNrYo4Z5r56JQTbY3eSXX1AiwoyV",
  "key2": "5fJCnK82nk7yFfFKu9G8unYwyRGG6a5HkhRqq2ZMtMzTUbkJ7ZwenXCmjJxHbGJ1BPptwV1kz27BMNUYndnPV6it",
  "key3": "4caFLpHzB1cVcAvij5RF2NnqGnCsTQ18yddBj2gk4vjqCPAn9az73QzLBnZM18yTw1gfg2p9ZLauRJtty8tFL6VF",
  "key4": "5pGGueuFFNnZSg3tHmGESjCj2q8P3FJx1Bo41u8sj7wTwxj24Ttd9aq5H2WiKqrxnDNHsnkYNp1hHaXJFFHZVaRb",
  "key5": "3iy8WY7chPQfiiAaZdWdF7D6fhGZz6dZgMCxt3eTeAdgGS2kpzX5r1ybmkmFR6eT4g1FQBGnThypC47gaKraZMGA",
  "key6": "57AXJLKB7mUH7QUXqv1g3KjR97uNsRxdoTVdN7qCW1dFvLrFvHVZ7hLgSjNNghw6uq7s8yTSgzj9vi1TXaU9vKAk",
  "key7": "2oWwHnnopmmNwgekqWNK6EFKSATTd1r6WfG7JHhVqhGM45DPnqDZyphVUzb1nuntprC3YG5QL7MnaF28PQgUdymr",
  "key8": "nZzzzoFftEYdSmjoZ4BVBjZSfVC3eEv78Ae6MqLmrP7BzjSMF6PrdMbzRQJxhKpvxiFM83YdYKip2N4ngdztjxG",
  "key9": "4w1kxj4HgQj1cp1Fo3GkWLUE86Sz5EJPbo2k3onSEeZkAFg279QERQyXHgjiXoEmF8UtL1kKkprAJxD4mLk25bbs",
  "key10": "5y4R68YLtNCftCitT2ZEoiwFytzvfmwg4KZbsShKgfNZ6RSCJkB58Fkopv6Rqtf6FasihXX1VhiC1dNMxwFWLVgu",
  "key11": "3uDskXpomyTsvqYLvuncvxgUTNDUcn8xDTaodK6guEKNipxTtfo7nZKFfEKppLYZBwAY1FhHM5P9LJjgErsoY5Mc",
  "key12": "uZhDmBEP3dXpXi1YuQTeXCHsRcjRdg2b8Gr1mWC8NJtcf1Qnh2r26Jx71tNMYr15Wi31EW6vUdmdUCLTfG7aEsZ",
  "key13": "4zSXJ5v55z4vAHFQ9EhMEtd8ApfMVsRUgh4tMvCvj3DVHfMJPcTmDsjPHKPbeTJXms8qrqE2Awr69MFYC3U52uFs",
  "key14": "E1HbYTzi9CDXEwPe4GYtE2iisfcxdzqxk4gpepD4ak5fCfTDTSx6jRc4dji83sbKUVpm4LVxn214gLpXt7ERher",
  "key15": "1JKhYSDB1Xz2trZASPjSEHBFwWgoViihq8Uc85ZZaWxf86NJG1pRTzPVCBkQn2nez3x8bYge3oNSfA3bHPYCKgz",
  "key16": "2HEhcixYQBGHofpxuB96pgNsS1nHcG9etV1JSRk7H8G3J9Z8eYHwRBTS4FGMvZaKDZ6B9jLbFc8vWqfJEGutHgNU",
  "key17": "3ffd8pzBP3Tz22YGYcdANjv6ECzp8J9JcbEYczU9yGfwQ6KcwNqwKNPUMwVWr4MPNQXHcaPNPLbrMWNgUteVtjGG",
  "key18": "4LAgxb7Afnz3fYZS3jJMFkPoqtrwJNmu2u3TVGyaUbGAKRZ4btMpEMVrJFBfjZjKiKtvmxnPUhdeGfvdRVudC7eW",
  "key19": "66fVaenLJ5PizYwNocZ61SH92C57t66zhEjgHds8CFmspgusfApXkoCBGZRNumRaszyRtTcrwgN94495LPJnenya",
  "key20": "4wMDrKkWrcYFmXNWMSYCQPEoHFgos14Lasj7WPzvuHEFGxM7ssCpmyiLZdxBDZGogD4CLYiAK5kMHbrDWDiuSHRm",
  "key21": "p2wbopiNt5Qvxy3svDVuo5L5o1EnXLTM8pYgUh4UXLraUfjthKr5U8o5o1knXWC3EAejiHCaySgiWGEnvm5F1XT",
  "key22": "3gBzTgRRoxnxGQAzhavNeVrfHie4V18agFMNXTqft1BpK5tDLjk1b4Ssaf84igUbdeiE1xb3PFQZ5uw8Hmm9rDZu",
  "key23": "5ymndMixPf51nhyKVE5hSHeXd8zK5AcwKqiKo1pz9U6Ct56bUcPAsTDke1KSNtCBx83C5YC5mAA8jtekpGeyx3mY",
  "key24": "4756ax6KUWZgm5MpYMBwq45NqqsGgrHnwAJ1PygGWvz97fgfZ1diryc3oSkcvGd2H6aJuQ1tZccVzBVNp6ddvnf8",
  "key25": "4Yo6od6Fgem8vP9u8xqweyxE1ijS55PZbdXFQk9LjJ6WbaHz3w3qEpyGKSAbRM6uMQ89A3sJBRAEYprpfVSP3Hzw",
  "key26": "2pHVpvRc3KDCdpwdenXU7UttwQxtfYUNuyQHQVCVtUMxU1wnVE1KXxyvC49sHQ7akkMhXRCwRoVh9BtEE3bhTUUW",
  "key27": "43SXb8MQ1AHNVTjBMMrEABKLxqKvrX9XPmgwQtBCaWqJizcbcE8y2YSHLN2fisrDDWaY8eGtSsAwsWMQVqK2AeiY"
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
