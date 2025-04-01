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
    "437Sf3JdAGuNUWoYjQZvUhgP5y7NwUe22UedQ6ixbb3UH7NBPHApaLV7gAZznUs5nQjrred1i1NcAwenTJU29DAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cWAKC3pUe6qaraUNBYjWfCorNEk48yQMQVshK2c49PSHoxG2aNkSQqeT4RgK1wkvThqywZ8QjAbe58UgTE9YAD7",
  "key1": "2K9AiiPY4MN1sdR4F7dhPYaEpBQt91W5DJo2tttPiakAQWWohZVv5B1DitJXuLGX8EyRArGyjYVNvomxfr8xcE2h",
  "key2": "ekBiK93gEp76WtWwobyWhGNLJ1s73eHLXcW3THY3gFB1BAnFBiicaj3EQBryhbv1knGkKE11R8gQvkm3usUrgYL",
  "key3": "5rVZk5ktoEDjPFPfB4P35gzvL1gBAVuAhrdQ3PiVVk9mpB5d2RN7p6UMRn8SypSE88CFHzc6e7wMMXppWrigjkCQ",
  "key4": "TbeSeaYPJEQbLyPqBpGwwsgBc3aqxLwsrJgKyKX6vwKVpGCCZamGxqbQmzCtJY4fzdfHJLAU9Dr4Q2QBzNVKc3t",
  "key5": "4zLnENRAuAFv5RB3gnfjQDYfQxB1fQgt31YbgrR2gNqXge89VpGCzjVQs7JvLyoLsBhWyvubJZfPtjNsrvaG8Pz2",
  "key6": "Hm3NSEF5aRubhQban2nEzh92QLEWSz1pPSgtpRZ8Do8LaJhzaPjGkEvGPC9zMg3mY5nMarmyHfDnsECR1iD7kLa",
  "key7": "4yHqs61eYH5AUHKrgMeR5U26kbWARa7hWgCNRFuAawoAM95hBQeBwHkDAYPjkBYA4hdaKd3ASjfbLNdqqFfehvHc",
  "key8": "FiXSJZtFGhEEpG3APGa7deDZMAjXgpGrdhYWZs9WPegQL2D6KBy5BDoh8qF3mYJNnDoFD32HYCgdv7byuaty4k1",
  "key9": "46fSy9KmM4LwML3yXf4tXQf32XPsNNpSDgJHCij6dCdnb6Cy8AmHAV7fmbbZXo4R2kekLHtnpWjuDdbV2883LW35",
  "key10": "4CATcDrEL1B525gve4kNuBFKbprPrwt6wwKt3m7BEXMkPbSDpCtGDs1NGpmXbxDwQm7gswy1DpzkvN3Wz2hHnhas",
  "key11": "2SbwU9XSR7yCqVRdTD8WvvTCuZwwFgFZkGJJKSNBc3pYwkaAUUkyP4yXJ8gDpCMxzoMaHnACdVvFDSwGjro5T9R9",
  "key12": "4XYiy9633fjHL7BHJRHoN9Cm5n2479CUrrecZJTqTqJGyGzHkfhXxymPzvJuw2pX43ejM3K5XZbp5LbfoxSoqNnj",
  "key13": "3uqC3CurY2FCfYezpdPxmvcsab1L9P1UdotETdDZ5uDuHuRLmRr8FxwoQxtwwVTAJ3pFUGixEDoSMj8cGpKboVm2",
  "key14": "3oUvZTcYQRC7DNSsu3c47LRRAtr59W9Nm2wffo82ZB1hTM5FaLyd3THpUCx7By3mLQyGT4kHvp2voujFVe5U2G1y",
  "key15": "3EezXmYRRywUx4XSnRergnjJZPYXpjBSytzuUZpD3KCVE3SP4caTRfpucACMSdVqCpD8eXthcPY1SWWgX7kPdtXq",
  "key16": "DGKRZavruMkxbrf8N57Fhi2vJAG9q27dbqXqXnXoUtx2NpZNjheg8zvqTgkgtwzuztm1UD98Na2Dx9EHYV8Fs8k",
  "key17": "2SK7daDmWvWbG7XFM1gggjYUPb4h5BK1FyALKSgwRyPU2XPD9mLGb6oqhz7uqExd2k3QTtcgA1xkqcYKWfaPxCpw",
  "key18": "UahFumBQX2UiEpykUk4ZDxousouSSm2GwpU9rtgjVQhnEhPSLHaCL7hLN41AuFzkH2sDL7zDXwT6UhZ2tBLVjvB",
  "key19": "22AHdD97vuRstJV4ix6WsubJpSYDr4Dy7932Q5rGLerMSV7r43RecDjhPd4ugVafXFC5QyJRJE9bkhtHJ9E9UDpR",
  "key20": "cru1nyByxwyK2svFhcnc4UKAxndT9ZSAhW6xi8JGHB8NNCRajdvoWhS7Tnt78TBjGagpthXZYS4S4fn31LyZ89y",
  "key21": "2aSdcvQdQ2EAEK9ptdkd5G8PRcN94Hu3182szjQr5MLVW1vvLSCPvK6Dgsehh3R4jTYyyT9cxmM3e5gPwmy3871k",
  "key22": "45XULJBs2X9d6GsPe5EzJmFkWDJciTJfJTcyZJiHjJjsfSHAYZBNPUG4ov1v94ZvYzyonk9rSEotTHGqca28hfXs",
  "key23": "2ZHZYeuCNTxHMnxzAYHjd8pYwVoFXxzVbQHCLEh3tByBgU46A4QkK8T68dTZ5YdHhwKRyEwNFQ6ATGBda2oK3pQA",
  "key24": "4LPE8ERRwQA2oorVpdWvs1S6bSGB3TMV7wfM8TsR1aByxSf42CP2h9qHMHLwtiRJxHAssQToNG7diEEjdnvNr3Qa",
  "key25": "4mFuTFf4KgcD27kSw2V3md7RmVRfrv44vejFRydkfMSkLavFZQz7pVs6dAjvpCyxtm6FT5pnWuSY6D3PALN3Ydp5",
  "key26": "4R8F55zA1D2ANRMyUH71vAtmaE6crtvnSFEUfRZbA3v3Rbg2QdgZW6TABnCQmMpmhf9aeAwjHSHKKr2NyQQero2U",
  "key27": "vZX8LYpFGEdHC7b4Z7JGcEecDgwCYkmW8zgDh9sGV8P5VnyPpKNv9mFckns4gCYNYQctt2ARbM2R6NJYWixyjxn",
  "key28": "3o2xyN9cLkgYp4w92RzecvZysPKinJTrqL82nGDN54qXwWfZro39zJMbPLC3tbjxAD1XsDFCB9S4KwzfJun3jo6d"
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
