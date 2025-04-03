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
    "27mrk9UJLgbGCwWC9raknnCoCfQUdZcTSkacxTnFkPHn3cft6v1jD1CHE4gseiWV79aKwcVhcYniSscifMbxWfGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23RuUPeWkHbuuvpL9bWCeUar35cBQQMpAfqch9AjFUAxhfRMaNbGywapAWABqjHwLetC48CLZB9zPHkaDRd4dVH6",
  "key1": "2nQw89p83sQ7rdbKeDBTwH7VxrkGJBnsYm7b4CSzrkWD1F8Lsxh1Thiy2mf1vvu7A8PQXKh8zTMf1VVRcD56CYvx",
  "key2": "3XnXeQ5y4j5BF3p2BPkstBuVM7dAGQ6MXu8BuppreGeytu1M191EEg1ybRqMcWfjBX7KqsgyM9StPexBU4QzEKeu",
  "key3": "NJD5HffZC22eFk1jXmFqrWCncikrPSZ2h15jZCL18tXV2E5qD6vdKFzaRxNncRsPPmTdcv6Eb89nHjPJ5vUZfh5",
  "key4": "3nSWaxFSqUaKRDji89GGmNwWWL4sSquNPePXHf8LhHGzCAZMF8Zrjgz9sPvHEUVbbsw9LoA9Uwhj9zi4ZXVHtAuJ",
  "key5": "2ex4HAhV2BYLqWrmP9B6gmTgNSKsUoxrh73Bt55F8M2apP6E1SGro8g82hRmyDHiysiXQq7biWfoeE6ri5hwfNit",
  "key6": "4axh5KroCGpRnqPjJu13YiKr77nMbLkDBdXW5L5ermdAnPkgE762QyykE2Lb3N5WRVN8va9vHcEGDfZkcA8sgGYM",
  "key7": "3un3ZH6K5w9USZchVC76chpJ5xBZLwiG7abRVMhUsAdyor5fHPD1GdBvBM99evfvzdRqGnYEeeDv2ez7rtVDMkuT",
  "key8": "4mFXqV5Hak29Q6Qqb2wtXk4fqambvsU9heu6d2qQnMJ5aMyzRFLdveCWRrGZbZKZ39wWqq7297qFmR8ZWy2jaHFj",
  "key9": "5Xr2zWwwJyiR3v9JD4FxHnCAU2BBaDaRcFaZRCLw3ac8CHXfLLKQ2rYNJEzfy2VscwZWeACE9HSB8GvLSgqW4CMh",
  "key10": "4sUez17QEcbtr9mFtKpKGJJhtXxjBN9skza2fFrUqSfzFjLsrYT6cTL7R4C9vxWam75HFaUfaRH1gMYvvirv8L6q",
  "key11": "2z1DNs9B7Dhs9qj7L1Nn1acFq8jZx3uU1E9djELCmpCvTcjvxD8N4xXn6eU3Df8Qtk9wNUZXpWkmJMfHGCciexie",
  "key12": "2qBXxu55bs9sTV6Z6EDXU9W3t97zwTJVyWLsgwmL7TbCSuCxG17Jb72hcszwfx1WfHGcqsQtsvH4BBRru3ypKCGj",
  "key13": "2p7dCXoYtkx6BKLgxSrcSbUNyaKsxYo2XVrYFLxBK5tbqZ2RDKoUj9qstaAMqEz2nhkNacFwzLe7hPNXkVTnSmC8",
  "key14": "3HXzwvptSLqUczePSNWBLxcAE3JEMNsB6PJhHUt7RhwJJfFBEBYg3fEtA8pebXBtxNeY9a85FBBLYAtmMKdt8q67",
  "key15": "4UGwfnD82kQpu8sbVykCdHzTPjeuc87Kz4VcSA4sGBQZ8JmZcGdPcfRTi1my91GwPv2soGGvFQNQi7n8c2Ms87rA",
  "key16": "2gTVpBba92PLENoNzQC5V8N1gaDioSsRw4RMDdTSNsQKmboTtK83jGRCvdJJzQQK2eiLN24ceYqDWySMch5QLfYW",
  "key17": "RLbEVZkJxYpPwsDcU1WBByeE7WvXZPo8e8q21USatchSySQSHvasiWjRZpkhr94uxGwMhXecUFCPsPtvYopXaVU",
  "key18": "3mxXkUVzh7qEhtm6tJzFfyPgdFvkSVEgiDf4GKFEpt2swdMhQ5TiUJueZZrRQpqLWkSEnh2K9cDL6Ln5b3eHm3xK",
  "key19": "5YnbLaArSQCPrTBw4pKFbsTHyzR4dS6v9VxZ674iR99xmUejdUtxY5YF3gcYU8XLyhGx57Y6Aym5L3J3A9fNaPda",
  "key20": "3LgFgdCuHMaRf3WvGvDYtBr15tRJuacWDTci3Lp5J3Mw6aWUqbbv7JzNnDCFNqLjrFCaDmcAyxn9gAVBrr9qPPTA",
  "key21": "4PPkFBy9mHwJwTDYsXYLRtQK1r7X4KUt4S3dEbspuMc1zvUh5SL3NMrtpiXpfurAWVQc2AKCaJL1Ag6LAZgiGRof",
  "key22": "4YFmKRmwKVHhe94Vx87vQbYd3FPhZbXf3Wk1tcehCnxMmWRGnJoNeES4Q7ch5F7pXvFoXJyrvAiUSnCrJtMHQWoA",
  "key23": "AsMpBkaXY8CcFZKexA4xFURqT1mLC292aAcq2oZcJC4JnvRiHngKDh614SY3Y7aNxZpWWPnADdkTCHfuLVeXU2H",
  "key24": "5T22tsYTgPc3vZu7XkZ5pEptFDj6GayRMG3knUAbSb8SZsVsaVj7dbRGQ1XoWHh7gj51Tsdmffp4ZNXEETpNxmSt",
  "key25": "4rHFkaREn88zMj7ZJNLSEiVSCfRtB1Fpy4DS4JYR4e3dK8qBKyGYng3tK5STMDu5rrsULUaenAJq3gFL5awfnJG5",
  "key26": "54QqPvQcQVLwYa9vCHsjSBcGb64EqWNFjsESU5sBhVKWq3NnAHoaZLC93FP5PQH7SCo6evwjbJzrN89H95Cte8SX",
  "key27": "3P3WJnPiG7m2WCVV4jK21568YVQA6j6KGovbt31SjviMTqbzxjdxY9b5BBTqmmXaXkJ1PHZBvtNeewbKMCQ7n8Uh",
  "key28": "2XXCsfHfN657Y6yLWn2oQ9in2qSzPE4xq8fyv2Zc25bfvSr8NWNqR3iDVNdHBhUFTXJq6hgFXKNe2WWrhk9sqmDu",
  "key29": "t6cenDGcM7vdRsbDP3M7CPi7mPgLdLNE3R5hraeiT35C5M6R5mb8Ar1Y3eaGqVeuMBBytdxDzB9jqH8Ki9SGnbx",
  "key30": "2oQ8G3fXX8E1uKZhnKQ1DLgaWnz5k5xhb4u8s4h8DqhphF69zwY1y5LmEyaYDTpfhKYGff8YczziC31pD8h6iBU5",
  "key31": "4aAPxHXBXE45V8gi5G9N34fE47EJXck2vxjtVq2YB9RMqmpkAXDcA3LEUwnt6YYPJFY9wx3SJ5Fqq44KG6GBsYfe",
  "key32": "2Wkf3xLSjsomSrqib7Ca1sdimtrkNojwmVgp8o9WacfrMt6bf3cNiighVDBH9fv5FiVUMj4HJSaK5ACygEzfE3Zs",
  "key33": "2qNjPzVE92oG2GsF63NB6q9Avm8fATNeJoQUrChoENGsp7opHmNyNUjVCnKnNPsxfALuVsVYSU8zXvdj5aczg3XA",
  "key34": "4xQB52wVRNm8zeCbdnc4fWgz1mmhERsJCvVFnataqkYEbLGmgysXLkQfkiV41fiGy9nakGuPNuAbtHwbq2YWb1Jm",
  "key35": "4TupZaYPyx2Cv6v3EQYF7EuzwUtjcHLthUHabAtcuZ7RkU4QNDgTxjha4keTLZTWjF61Rioi6cxev764cgHnCpJt",
  "key36": "4iupxXTckjpJo1pHrmLacvuUf9tcz4FnNzyvSKApiNa1pbWbxbjRt3ubiD8X88a8D17hpVXAZjd5KSY8XERqDLrc",
  "key37": "ZkzAQAyDzNuyuTRijBKPKRinapw7L782umdXB1m3viTrGvpfUrQCtnJ7mokh21oDPvLpAMeXyJpxJxNXRwxNeym",
  "key38": "5Mo8E3hoZF2VtAAwk9qwrBmV6TPP9Q1aUjQGiNdFkBtmRAWAxkNTXmaz2LnUZ99tFuu9H8azx2NzxY39eQPH9AsX",
  "key39": "5dzmpdjvNMvMGkmSBmaPDtdMKouEpZCUcp1qZAcH82Q34pYekFuK3hgL5j4JQa4t5CjW3feGdvP6WTRTaa9HRx4S",
  "key40": "5QwH9sV1v1YkrvfVhfc4CEzF6uYbjksTxtKjGWbYKiEfLZa6wfkgNSTemweJCzVf5SxtoRpdnYWt1EtpwJu29yis",
  "key41": "4uHkFHg6SEeY4cPJu9KgKpraNoq3cEvZT6nown2TnMznJabPFQKbEWukUsYT2BaCxtweRy5VbQyrrzUDAU3PpHTC",
  "key42": "5ddmGo72bogEzsUrvJDG8qDcDfFXVYptfgQAG65JicWFAcUVQxRGktyzJa3qif7SfRpWXFKafkveDWtPsnXtKHH6"
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
