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
    "2Lt6XmSPi44L8bureD1JndbpucFbE9J5Ba3GcFKnuMVC64bQRrUNBwaeMuT6seNjWV1w4zH647Py7Pb7fJTQHKSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wo4wUJEURTDVPD669T3WvjZwmdTq2TFEQSaXHoYtjiB2R7yCaZ5GeLjcQ98r2TxLdVyKB6gjrP6EpeDcwmH4imw",
  "key1": "5a6mPNDcqJizbcE7WU2V4QF7iDrWwbT15wNrXVJzHYyf6Tf64GJ1zXAvsDsDtmkQ7HpWP7Gp5koecyUiiDN8U8Fw",
  "key2": "5n4THZpzps8PQdhuw77Rq3HAAGEja6ogGjQ8PxxFMA4DWs4Nr8BUFXvHF7SSHKSJS2fT49h1sJZh8Gag3eFU8hHs",
  "key3": "57sMwiV8YRALXUpLfbsYTMrGbXqLPcpQy3vCXCTjBbcQd8XPDfMHCFSVgQLjVZjEGGHg7aefh9yueMa7L59Dbtpa",
  "key4": "3GCmSbPXD74o7k16VFfaKkWLHs6rwzC3qVH358vdd7FRMDjceMRvth7dtWg5sUhfjehQx9N3HQvX5gJNNxmHWJWK",
  "key5": "4ndf9Tz1v5vbbPLqs3SRFfrrnL26Uwo7mxVcFtfEwHVAcTmT1tBtfgJBRWpo6w8R5Zz9kCckxa9VFDQZAubqvyP5",
  "key6": "p7ZE6KjnBXKSE7JEUdhGnbuJFvGVVaR4jyz1wh6ecvV2y9odfNMbLuWbLoHNSYuv2iS3w8amkBE4tPXsumyehW7",
  "key7": "ic4KCXHkyHAzyZSyFUMxbBuzVmLF2qNBgKGns8Pkjchm23iLHRXnfy7XEsCknYraPYEKwQGRDCHZ972vRMSj7xf",
  "key8": "9Bcobh1g5fJZ9pC7egtEVWcjednMRs6Fx7tS17P1rgjdKLXgdpCksau8jeYiL67f63jDqvAFS6BgGVr7tQUKx8j",
  "key9": "5WjqQZoZPw3bNM1r9EDD8wo4HAnsThSFAhSQ3ihVucwbVhvrDFoxuENqQekt6K95JBvDe5qaYXoQk2DC8sWckTkn",
  "key10": "5K9HuDtzESt66GhoEguVoxWctbjj58THcjryvZ2tJyuNM4c1euhdnLDeCpyDEmB23C7tk5RHNLYbRbKMxMaar4Nv",
  "key11": "9TLBwv5nKkLMy2RUYkUrjASKSjBEKVag6EN4ddTBV2d6UH4hqXgsiFQdKE2WBNmtg5aUNxEPumWa6jnhaAgDoBx",
  "key12": "WnfR1LXFoKwvfFVjZ7ZjQzk7DbrFzrEEUk7k7nxsNe9VW7reAB4u2NX9FyUjbWhp2PeeuByfHbB8yL4L2atqZTj",
  "key13": "3hLs8KWhgn3JPU3K569QHgSGvH4MTb5J9QtcHaMVsCmmQaPFp8A2UradNmPWLiyEuqXmP2R6QK4mHmDDGUem1DCt",
  "key14": "34mWX64QoAgh4EijLG8oYChi9XG962MzNVxYRCeSFiwsAZZL6Fm1q2EXZqq6HLHfo5bsYJmVYRBFZo8kEw8z6Z59",
  "key15": "chkmDV5kCsP8ZwayAi2eyZYzYkfg6YQJcDhhGPcYNjXVAXozv42be31QyrPASYU5sLSufvmiz3MomDTqXiAL8bB",
  "key16": "b5Uz3Ezk5nWLZUwWXytv9eAKtRNeuHMsKd77a3hRZu1xajEnjXecfTdtjtrtcLE9SZhS1QUQqaWCv7QWMZR72QN",
  "key17": "5KcFM135mFAMuFAYREh8HgikPawdzKjZyEYB1PsdnXQyswfn9yavuxKirVu3UG2ECDPSCv9iKi5bNAm7n57YjwPa",
  "key18": "3H6tZWxEhkh1EA7UoQfy9zwUgAZutRQtXNVkgJgkBWAvSSsGbCmDQqf3mdFCvaQeBwzYtr3cxKxanvfGAiVsnsdT",
  "key19": "5F1RMpD11qbHGk55DxUKbBoZkPEWrt6DU7zYWi1w6SkEEU9TXoteiusfQ83nwej42m7sZZ9cfyFqNQEA26fBVCud",
  "key20": "3A55ifMvH87JuyaaTnee9dabdw7PVU45AMhoNddMd4ctdz4cEyTeagERcSKDLd99SH8Ysp1FzmiNrLGvCsbDNvhP",
  "key21": "5syd6H9baLrxLfmmYdd4Ut61L2WRDineDfYFpAM2xguRgjpex3JHRtm1UsJ5bG5JKZkN5ro4TxsHr6SWYx2ojG1T",
  "key22": "3ZgbZFYV417NgkD3RLj7nREe72hhhe17ewhnnxkNrwiu9HUjvPsFYzb8ADXz8kxXNbpUKF4oxy948SDkXGzHGCoV",
  "key23": "47pRHXs5uKVnmFLD2iHaHyvkh6AzGL5we8d4KqBhEX2DEWhrENuDiwpVHbkRVg7RX3sGb73iauWBGoGKjH2m3pPt",
  "key24": "4R9vtvVc4yzGXE5HhCvb6otPwJdiJnLGACWre6CArTzNcbEEmpheYrwmW3DXW8nwwXCqe8rKGbMrbffR4R6u5At2",
  "key25": "3wLq1dx3btVZ1yXhVwft7F8LU26hd7TyCKawK3NV2VGkULFXLyh3B42zX6Kv375UdJX8GzXS6bhdjT5iBPC5XM7E",
  "key26": "3QhWN5rjVFGcBTUfiUbTCHiZcJBtR9uezyVkoVpxEcPqou3AZEuMyyfxudu2Mc4m2iVpoRnr77KgPCAqPHoaUHCU",
  "key27": "dsVt9LCUVkzQeGe23S6dj8rm89smjLRLrGYDgVbfMf4E6XnrUkVdbm86sPMSsHYXPdqsqBK8fCqhgqEoQ4viHET",
  "key28": "64V7s8HxrnpMDHk7EzWsBGQo2EeqsVb9RLd7ANbA8V6QznTdjbr885q3n1Er8bxb8MsQicQnrZ6Gik2CovDwV12Y"
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
