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
    "4aL6dN48eYSdfjuYYacejen126ko3c62D719cTYAGTQHdk3cNzmdaCYjoC2xrqVzjpYhyRVCuwYf24tSRZdB4UCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s9mDvhxkJDGNXyyCn9K4RGuB9pdsL6KzxuEP254f9Yi6RykU3TPYyLmQmt6nHkADNvaMBG9z5DyXZB9g8TsDWXs",
  "key1": "52Sf1tBLv5YuUxhDsYAz6sCb7M4b8VczKcReFJf9fsNHFdqTQziKaNML8FUKQB3WCBJXzr8y4jAkZbrfzSrNsNAY",
  "key2": "4XE5XdYBWz39fXsLYSFhWpvyLJyKUPrAHrUetYBV8ZdgXkFwJfAQ8GGZkRuhCZBueq9ckMxMpwCkPFRXp7vj7jCS",
  "key3": "3HJAkftUEhn5aoW8rVv6ifdwgfjB4tt2RYhvp3kwThULvzNsmmAEkKW8FKR6xN4QAJfdn7tbWC3h11V7qYjbyBkZ",
  "key4": "2TMPw4SxeLawkz4GdvCKsidBdhDsk81GobPSmwh2abVetA6fbHSik6eRfC4YZaMJU9vdpGwdzMZaEmsxhYev5LrR",
  "key5": "dB2P9Zn3t3uTvZ3Z4We3ifLokD4kJJqZQJ26rzbjk3ZBAeh1ow41J5yb7yUtBmhXcTdFVMTJUjePzwUsr3WRuiS",
  "key6": "3uvjphGvvJ2JKcACxnXUu7JDpj3PLBWdVzfNYCXL86bKq9fiVzz5YMVzac93tAgWAKRLiRjv2R6RVu3aGKULukGA",
  "key7": "oKxGPmigHuFvKYfFVpFPksFFFbkoAEhJqzA5Ga4Yvx2VmohSVENP5gtdbuH4YQZM67hW5YYfNAfbpDNMzSWPWSH",
  "key8": "HpcNVaMxoFL2yp84Sq4W6o4inbeLQYnNu2xcLpp9Phercbt3AWLt8EEJYEUxSzrv1cDh3gKeAPR6VJivDk28PnC",
  "key9": "5Kw1Zv4q7PZnPmaM4kCn8UPQp9AmvScPPX3ZWV247aEtLEMcLmBafTyoars82xw2sCjr3cJeN8zhC6Jdsfiq1z46",
  "key10": "Gxs79CPjcUXxpYrYHN2ZigBKtjTuEGsfmyLSDAWgekB5K2suq6Vh4vsC6fvWDeJ83FJwarX92Kq5Rm74LudqmWy",
  "key11": "57mDY6b29MsTArUpiiA2gkKSYxsy7uN9ZbNbwx1mRYakvrz25EKqVAq5Ka1czcTnfKJBu6sfWNzq7mKPTinza9po",
  "key12": "3Lwii3L8goQcr1UNNSKJfYUAydzGvWtMsKbVmuvv3zkN1LDXf1zZeR2eNR1fubAvUBgX4JXsmxGPQ7JM9cC7TLHF",
  "key13": "34EHDcGViGoTbNkSEAbZU4LDStLC1SnHq6mWxAe9bZc5BifdzXk2ohsTwLC3KpnBwYXbq42w4C6DiivekwRY1ysK",
  "key14": "7dykyQPYSytDVeMskXqWofZ5T6nxerUDMxfBPQ5DCKtyakRsDZZWGj8bN7EPbxybPzHzUfteSAmrNx8nztbPUva",
  "key15": "3qyr3nHP95eQasRctNsfV1xngbQG6CNDcVNyjRsJ7uCLXFhw6uq4HNYQK2L2x2VYJJrSzEsTMpHAWncics29EcMv",
  "key16": "wV9n8CqgeNHrjwT6muxo7S8MwYdxhmyoUCwgUsjW5WuvY3a4WM391StVQBYQH1mk4duKWJcEgERPRxxKpKtQAPa",
  "key17": "3zhoMhLp3CFspnLD92Vn6zm8cg285moYgCiotwzpdHRDyJGcuuTVDpgQCJiHkPxSGJTUnBKYJ6xy1usLMN9vcgdF",
  "key18": "5UChT7VZAbGd7RaWozbhpt9va2YCQxfjZ76JiMwDeGYrybusG4acY18pqKDQgqzQrqqoWfYzzYGnydBnacTUj563",
  "key19": "4f2cPj11eNDyywt1Ade1gfyuD2j4L5UvyPyEnvai1SFZj8LKrefPsaY3sZ2FEM2qtDiFNhyPaNsC7MPWzXtLHUX4",
  "key20": "55MqvoMTzhtPquqN6aQtQuXypWvo1kZ8gYWiP2mqpkiP8nZC9CQiW4RVyk1gn12ux5HAutXoMKrUEitve79Xj6A1",
  "key21": "4uW6KdCRXwssr8a46GKjiQkpqbkMaLfiiFFBT6qo79PLHnVFfLXfSUkKw28uv57hUUfyDTtah71HYE3nVuMbJ5VU",
  "key22": "Aeihm1m2NdWuNcejd6gmkbzPAVZa52SzhZGniE7GSXG4fcehxUfYiTGnrCYQc2czK1WtYBsPeGbBsTzJTtyuEjj",
  "key23": "5wN9641LbYT4BhALfeDXxUBCNDwrrRoahaBkvL55woxyjiQVXmNdEtcrtqQqzV2wSxXBskmARQqwtumYAiU7CJw8",
  "key24": "5e4aQc77T2S4nioeYGPbJYNzQ7RKWcJ5yKHth3kFM3A4KhvTk2E5oT9TmSqBHCqAdywVMkUxGkZ1Z82zVfSmfEwp",
  "key25": "34LiRVDaJKfxCyMDZLxLJqsLzYv51AnU5jmK5TYXEvMBQuQh8v93jpqG9NPhbfUppYrHNvYFz1N9YXhqcRYMANbZ",
  "key26": "4DFNAe2WdAhgGpp8eJxZyGwoqCxZHPeYGXm9C8FtX28G3oBwmyBo63iYCuRMob4ctpSC7fPqWe4SXPmqZry28kEB",
  "key27": "y49yzDxCm1zaWBhRVCR4hzVQCc7pEKNJBjkLvoyuFWxvm8ea4E4HDzF5iVciebkFZyk41WRKkb3TGHyeVyAekVf",
  "key28": "2FPrnQjbNtDepP8WHcf9S2LCDfxLBAYmvXanQgF4xhZtwguxo6L8RNwJja7shXJQqp4GnGHx11Ky7KTHjjkhRPZr",
  "key29": "2a1kYUi5VuBGctHVk7PRALoLz9JKdqbAwrddemBkSHhfcidSuswEtxLcHwq6mukqwjAR9G6dXhngTC6qRFgMxRdd",
  "key30": "4oMnmi8HsekBymoZfK1VoPsFwK8nD8U49kbHfjg1bwM8qN6fmho1ThkZo1csr1rt5BWgXWgFT8hw7E6hAL59Z4ep"
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
