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
    "5ZYQn3qyRTPHEvVrwS8PVzsJzrFSjHH8qKudxJaYR6Q5CSdjgJsUhdY3EGgGuCaYr3mNdkyiBR6LbgLzLtZfU7A9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KDg2nz2TqrjimCMdzq7YkLhZZmaTdCG3vkucLNHx2vMgP8FUZsajYe89GarxTsXucKTHjF4Dj3xrB9rngjrLPBB",
  "key1": "4CU2ABJG2NXm2CqSCaNTGV2vAkUXfNMprj9iyfHNCDpQASe8JgLxm6tHssjt8nToh8sMsS7mJtEKD9Mq3oq5LKMR",
  "key2": "2Tx4WkBN5Du6nEZm6gzzKxmH96QKCxXJmbx9qUoKLBcz7uYWsZjZ36noq7fWJYPoMMFaok6H7WtPrPWE9arRmUnK",
  "key3": "3uSsbN2vn7HAzgvQbAGiwS4Z6Bbaeqg5sxeLftoN6jqMWjHVpz1gUUA8EbP6vkZLNi1vR9fkrM3pjkX9yEB8m2oP",
  "key4": "5n5ZmcMspD1GJjhw1frsyrWqbo8MVdDz7fxGggAYLfnfCPXVAc9TY2GLLdxUYqriUYFZ2SsvoZTFj6axxQTvj51W",
  "key5": "5oQHZhCFFCdh5PnuHLmPJohrUVtaC8EtNuEF8SvmwzwxUA9TWKtodyL33pbUzjcnTKDm3HashKdBq4zvgfHEtDLd",
  "key6": "2fZTerXkxVAWVaASSzGdkCgoufX2hVGryRnPzPxVaS57gCyJj1hZEKayGVPp5oWPpzjJ2PwoYfj5f7R17aRTKqvA",
  "key7": "5ccYoPQdYEZJ4Vqs6EwGm43eCrPb6438YoUT5sY52yFN3F2BezXB9KnqS5AF9FdybCmkDd1WPewkwu6VJwjBhmNH",
  "key8": "jLKrQZYLaPNPhuVo7kdgwKGauGv4kQdG33eAgauNX29HACCWZCpnqE1xHLU75uZ3aqGnAgHPykoocRLKkanPiDG",
  "key9": "3AtbYMzeZdpsuCULWABN7TKEgyued1ZTdfjnbF34SwcfvuGsdtotDRX1ZHRDYQfudmc6FQZMeiRzLDH5a9QmPvTG",
  "key10": "4qLibocYNydLZZC9iBWQVYHndgZVEwXm7EUaxrtwXn5bidMQ2x42YfGH6drdpd6iaRPgMRyGuQvmnqnrG7nRKRAs",
  "key11": "4f2GiEV13ZvwNF2SgwHnDGouwW9se1fc1GiTrwyKjtUJw5MjiMg58p4YDEwsCSo1GiUQeB2eBHCEuJq7ckKpTVau",
  "key12": "5Q9y5pP8sSGdHrRmR3PzS6yapmcZVtYmALeBjsEdgas8essPtSaZWj8zffznfBKWL9UGtUmEHTqFov2z5bSCsZmE",
  "key13": "3Ejknu57kUnNE5cAaQYHptqV4rSTZnZfKfpgPFM59xRBzJQKGXEqGFJSSCpgLJXRwVaf1i1PbNSu2RUFpSBQBSjU",
  "key14": "2Ym1zvYrbogEud1ELvAhLnvnSUQdZDp4gt4RuCA1C9sPNGfcdoteWHeJNzvdkG6zWXxMgCqfKSvfWg3CWcacjYSE",
  "key15": "5vkm4ofWAW616xhRAv4iWxQGb2mEpfAdJvKqnDDbPMQegdmYCxcoczQ9TLFwAA1C4tPEvPXRasBPYYxnXdSL3rVX",
  "key16": "4TDvXEU3ZVNDA2xLAS8t7SoNyN1pFWDCQp7JVsWZXAd53GpbAWJAAF4kwzYpkVRxrvRXTTtPn7z368cLsYvwwwkc",
  "key17": "5FcTMsAUB32NzHxAFAPFtG2yAaeNXaYR5qQrW9HfC9czauUuzTXR42n2TmnLm6zL8sBXVKiN1UotRcpU3DgikL7b",
  "key18": "64Kx2NJt5mB3KjJeHtMVPWjnN49QcBApCV7FFk9kLwB54XYoJ3FCFYPwZJMg5VyadgHvHM4R4qcLqNnJUwQpSpBu",
  "key19": "2M6Ms3gQZnPREb2LkGmFiXMBUkyXvrpFGBgPDBgrBGyZtM7hGBWvCLjLZM6b2qsjkPxfy5zH2sBHB8BERYW9XuFj",
  "key20": "3Na6M9W3SbjgaYhjhowQ4sgGSKLhsieuxXRs8DYRzF4xiHd9kBk4RyjnAbjNWmDreCbVMfhyj1d9UoXkf27DTueR",
  "key21": "1fTk6EvGmd8LtbZNDH2UzkecoPGbvM5Ghp7vwfygJzDUq3CbzbX3xj3HegnQ2b6nyVjfbF5xS2brwFTww8EfzG2",
  "key22": "2E9wdEniPRbZcCYWvqsX7o5sB8GYKAusDcx7nepTKoG3Q7TxG7zVKno8SStKpVLDbr89ReNa6vWHav2b9L8VVria",
  "key23": "4NeM2NJ497SFEYYbGFcgUubpBjXNwkYxnpEiDXQh6hkFo1JnYa58hKZkZcwiiLAdfXM2q4uFDiqbYcuy3D7YPFVJ",
  "key24": "xRg1TtoaKD8ZzcfDcK3fH6XWtfTx7L4eWSB4tDgxr9jGkifY7vipVXZy4nNZY9EbfKzPoLMoz6aRzV34LpPKzVX",
  "key25": "35xsAY4g8cBVgNjzDfLg44YJq66k5sVDm7EJe1etuzBArXk5VQpZeeH3ZrU3sN3PAmJ4MoTebFLZ8owef9U4nY1J",
  "key26": "3Bzcu6WMsb44pKgREPBctU9yeiKqsq1oXdF34eMXJs1pdP3LJ7vUN7FiRunM4wuzfNjbyf1VVrb3TLAPxPhKtpCY",
  "key27": "2DqFb7pwN2bn9BDThvdHK24B7JanP1mQNK5fARZ3oT33jTWmESudbwsdVtAMvK4p4XySKFTpFRPZiRm1hRgjfUwv",
  "key28": "4bGQ1hEQVnR5MenjRQDyfcrrVYA9fAxvKXPCfXqdnyD1P82cxYpqvQkjC8n9a9RMrKEkUeFgbgJx7kxAWUjGKZ41",
  "key29": "xv56YvVKiCHCWm6ScQmXDRqDuccr6hGhZxuopyd1UtzWbXAq1GCoTBf8pv5BKynSPuA6bAmHamKXKjyDbTpabUW",
  "key30": "2JeCukVXP83a7dgBDqSQ93C9J6wMk3KZmpKFhkyqZnQAg6C2osTu2w9sTk43Rjsrhy6fZMKHTuNgNnbTY5PGdvdS",
  "key31": "5PC9bdrResxK6QEUDov8oXiNWTbBNX5L6aD4VLNQr3EEyqXJamYnFnkfGUvxoLkGNxQAnC7k7vzLgRRJnGEyoSk3",
  "key32": "56CbSmjXWZrdGxYAfuLFtJriDquTFRYryNym5vk11RZ8qqACCRL1Fd54ojvTppmCWHZ5j6AdaaVVPBCKvKksbein",
  "key33": "3xGvCe9FZVoqqmAuH5FY2RcSR5gjbLAm2yMFX4LWy2WhBYK116dMDEWYmVPFXSKvVPX2WVNigWHBTmxWGCAqkmkV",
  "key34": "4cxLJVtk6mTeLSHhH3SqqhsyY6iYCaJnYJytD9qQcogTogHD2AH3kevrtBrWsBAeejFMnzTJcCAN1nRcJxQ53yap",
  "key35": "h5KMvYRR9hfofawyHJ6aeuthJsXkdAbqiUPaw9vVyL89fStET4u9AzRZ9BcV5A1GRLPNhZr8fRUPRYRT3yPhT2i",
  "key36": "2B9kT9mBqHGHPC5Zh9m3rnLHdbqkqjnCD2shvdYeLAabgZH5KQ8NnYgSKBsg86D2aBGVEFFk1kT9ECr9bQ2JynR",
  "key37": "5xampMWLfzytTALE5XzdYXG2rK5cHdRFf55NAaaeGcyzcsUoDfEFuZ3v27KP4L5VbARa6xgK3VWcLzTNejqDGRF4",
  "key38": "5eiBaMyQeUBNe3iB5pkn5sCpZGJjohu7YrUuZiJtMDiVVmi1uW7cc91aXaDxVY1VkL1T9nDQFvQ3mo6GNDxjtEGS",
  "key39": "SXEZij5npfH58SVRV52QkPA1Gzwun9BXQJ4Cch21gruTvS8sHuVYcwiYPNPdkrGHGJq6Hu56t8F78aLwPTKeSjy",
  "key40": "4cH2WUWbcPwBvu14vqK4buoQKcf4HAHPcDV1MULDvuXpYL63auoZsBgskd5nnsE2mHMMipKQcgZx3gfYqzR6gC97",
  "key41": "3vpxhX5XwLyoUfTDH34udF8R9rE7CZfDvW9CtzoWzCb3vZh3kkfZphFzC6igJF1hN7x7AN2hXeh4qhoeCzELu3Nr"
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
