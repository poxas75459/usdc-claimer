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
    "4MtqsgXywkZcAHAuJAdQzpaiiQHjGPZSLPZLzLEEHNwbng4SKw7YjAjtoVMhK5cLPzuUpH6YUMVCVX6Fu2xunUi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G5ZYuBgH88XQtHLNC5zjhWc6sYebDs8TscTKHuV5MxCk1zvBAAkpPW4DaqPsJx6Cx6W4jpKrjrhCGs9B3m4swra",
  "key1": "5WkG7Ntc9UUWFBPp1YYFeM1ZZ4zPsqT8rphnL4S31rpuaQpmgKAXxuvimpViz4voiTKRgVfrJ6dWmFuCSrsYtjow",
  "key2": "3jA6h9H2XtfbpDgZiYSE1goJPgPn2qhoWZdVjqFSmuq6JchTwGjAriEENrmhyvSbQYyYrYvd2TzivtEXH1cZPR6x",
  "key3": "3Uc7YhqLZJjn1dP1t3dBFe2YF2nAPZTySYB14JkxTt85dcv6kKU7TjCQUWwXB43GzfZD9oM7NrEKqhqjheVEFgU",
  "key4": "vZ2ot8jEvBx39gKUKjvNgojQHDgZH1f86EvhwPBUbjEQqb4RZ9GGjdJLyvo3BV5oEKnMsbr4UTt6nQu1Uj7yMDn",
  "key5": "LkLoFE7Ri2d8A9Wfdu4vMWifQ82pRTCSwnn5ja5V1b5DMgZJTGcrutG3YiKJw2TNMmcsb3qDspsnPo3ATmzj6mV",
  "key6": "5XnTXungRSBRNqsqcSjf6HQCrmbQqrKxgzCmJQMtEoXtXUfLcXieXis618rMGx3cD1SYojp93b6Aq6kz4oW9LMwd",
  "key7": "53v6P6ECpv3b2HWo3jssoCvhrZqvKXUvvmauiqkSmFkgkzUQS1qfTsocKCJwE21x37HoT8PVK79o56gpRiMGLf42",
  "key8": "3YHsFh1twj7vMsvZ9QnqYYUqRRbwtuiTxvRiqnSZoJxJyToUZHcRA6b5s74WyrwqfhqaYTdsHn1r8c777okFjtzw",
  "key9": "3Lu97exwQys5yChkMADdvhjgoZLpb5prM83AkBMNecocKjP4voGo9z4iE6uQSRKhQYKpHMnWHroD1pY3QQgjahmb",
  "key10": "2EfmwNKjZkec42gSxisYvfMMphw5bCrJ6TFrgGnU6P3JbpqZwQcz6yyDLDs1erkXxre2oT13T7K2SVhrTRjQRYHa",
  "key11": "4cirx6TWzNRAwJsgErUaw6bvwKgANSUzjkCHjkriMNt4o3aQjFYQ8kDr76NTMWvKuDvntXBPo5nh6HoFhimY7wgP",
  "key12": "5SdbHFBMTn3PjNsP1qdFSuhK5dAHwLpqpiFVUzZd3BPgkLjq9N7h2LYeFAbwoVoXe418Urju3Y1uP6Bn7nRT6nkU",
  "key13": "2K6r4A8ApghUaHWBVdG7CU7fpZi2s5MJRKPRxvWKu9uRf4ZhpvrR9zVCUMaiz1aqsipqFwHEQRoiGE4hAcffqQUM",
  "key14": "AdrDCWQ2DmH71Rs9MCEjURFz1L8rLVhjjtXGpkvcTkb18UqemNkFkw34khyLjAZrSeS8vYrfpUtqX9UtvmpkE7T",
  "key15": "5TWJ4RYMs4bEYz9qmvDTwrBpNgKF5H4BpD9HvrQzLm3sjFg8smd42xrZxmipw2FVMrLh6vSL6458CG6r2WTvYHWh",
  "key16": "3b6sSZNBgzoDTt2KMzGSDRfZKSTfebuXJHUJjCqRSRzJfaS2bNoNnZJ3myvDzJiabjKJ2VUuB6iJieFSJfQQimY7",
  "key17": "4e6Pe3DASYcTDqNQEh5xG47LZ5i9v1BKyJ5kYBgBNbn4PzxvGnsLR2oTyGdAUkLTAFPkP2eWWoC4Uu3p4bvG5CbG",
  "key18": "4NSVHg1Fxh6QMh42FE9rt4uNFMwzyuxRRmwp6juGx3xACM9Xbcdk1CzortEvB1KQ1AFAKrNTBwZVLhBiNdbBEG77",
  "key19": "2hA8geTeYugQr58tC6qjNSdWTvCTcqCFgqtzL2fTheNumXmxz1GAzxzPQSR6LFg4PNWNJRKqzaLqBBUFjV1sPLcZ",
  "key20": "DsKyQbcQQ5Pqv8xhfkBxtyX54hu7ciufY7B9u6fBArjP1RfwxJA12owVtUR7U7jeJq6yHTqsPir6Du6fd2J6TUK",
  "key21": "trtnjbWQrBnhGHjuXycKMFX2U2SuUwidpses86hpQEbMeNTAoz2x8PSwaRb9SpTrsSD8wMytdtu1SC6vx7QaHiQ",
  "key22": "5LRVCYqYaWQP7hjynzFB27uxb7XAgG7De55FoS9nfPChkkFMiKcYMync6frTsL94vTzX7HpB9zYwg9MAVEycg9qy",
  "key23": "3Cpu4ZrpitKemCoCwb3VHGeN7RwgHjUPYQP7ZRxMvovj5TLXq3h4EVPa47LH5QQVL9EqheKrTwBvHVFgN3Y5RWir",
  "key24": "4XrdE6GCM8A3sejCYjrrF2dzN7CbNT4HJ8pYBwvsFw86VeUUmaT7uL2CUxGFfdy5xE111oDSzQt7myiTCQnNNg9K",
  "key25": "2GdCx4NqRn5rFz8v81r5PXwxVz2CUsD1Fpfvpx7ZeitRGLZxrG6Dmhj3Ps3jewFVnAuCmRcpG5LYrkT1oNYVvRJW",
  "key26": "3sagcrRykKVu9veD7cVuXzm9grtw5Ef9V8UmLbMBCNh3DNAw9pqMp9jwLHyUu6NRJ3fXVka2j937S3ipLsBH4AYV",
  "key27": "HdNH9rpNNkAWDT2LyPWq7hpGcnu4v69RKgPNEs88smKYRybvcs7Fp74BQ2dQZpm3ZH6G9GBQr1qE5TDgcgq6xPr",
  "key28": "2R56Kj5Q6vtEXRp8a9oXQzDDFNbdm16Dkv4F8jcwxP7vahdTLSRC9p8awcxFrrA8WjTdv9GoxgS7oWqhJ54RKjv7",
  "key29": "3gDxwb8M6r6koGna578pVh7RhZzJhQRFa1UUqHeXv7o6nfvMqKC8KUdVDaSJMZxmZjUQSfCftB6pjf8UNHH6jxXu",
  "key30": "2ahZShWdhokzSoKjeM1Jsrky9MxALjaWKot1MhnUsmZnnUfBabfuiK5dpLZGimPeMX6Ek7dch7vVYWx4EHfeFLE1",
  "key31": "52ui1qpp4tCv4X4dmLHMtEwPqNpH9rZDt45XQziJHEHRFxSE3d33Ny2oQLS55hEtEFxmydMeY5U7coHC1ZEvNUg5",
  "key32": "4v5YvZcr8Un4HLBN4CwxgfCA4Kg79kgReDBp9DS9wsRUsi1JLUmt2Z4vqGXoe5Lq3mNn8rhsAAXEbjMwG46STWev",
  "key33": "pgeEKwaAggqEztMjnxoHjaYyrYnrWMSGCDaoAMynQm4tariib89ej1dFWYWGUD4CsBGTMxiJ3kR2ooJMTckzqjm",
  "key34": "2AcdgG51jr6v9uw8UxTk8Me2DaRjTCMiNpTuT2TmwG32M7Xr2KfEJs2RdZsxffFdkxN6SiWVq9EM8sWnPzpG1GqB"
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
