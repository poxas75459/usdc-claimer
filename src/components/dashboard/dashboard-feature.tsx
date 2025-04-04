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
    "2F55FF7FS6KcXxME8auunBkM7ohUVgrPXjNukPeNtQNMBFhKNko3yGisfX7tG236BwEGT4fWtr4M6NfWvcgohTzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QPWdcGumunLx3TPTXWXTcjBkBADjLtTS62PZBVYNUSHNRtYwZ4sgD3qsmSgrc3NHGgQkKUYeAnMoLcuv5nVq51f",
  "key1": "5YNgwTR1SgBL2522gjiarvNfitMXFF9peNRYGGQbbwXv6334dosBXvAQZCsMq78zbdWaXSawVxmqLUfqqNuzTggq",
  "key2": "2hyRykWfFUdpW2EZwFPLt3mUQxrc27FjwbHUzT3mZCEvRgYY9SFoq3NnpbWkWPeYLSSbM4Qc3tg6ZAGDHYbUaY49",
  "key3": "3gwY4WcdnqNUCKLgHzsmzbWQgsWF6bF49nGXAXxDGdWqiY4rAdPcynxZQrG6vzEBntWpiXSZW65FZ7myyjVA61S8",
  "key4": "4z1c4G74nYwGjgouXLyQr1ULWicqiarumNK1sY4ztXMhLmeMDTcDvatqc5QMdUazmcRBVF1jY1WEE8R1XWHtc5Pg",
  "key5": "3cD8k2FiBAkmszN4ZZwbDuHvirSTGXLaxLURzq3KsgwZSD4Y2p2xBt4cwyWSTe8raVq31XMfJCykm4iS5ksMUbnt",
  "key6": "3mxrqwDLYMjqpGadsLfRpC3zG9TPTScUnnKe29SqigHvrJtCVwTvTJZ47GPtCC3RSftrnbitWw7sAqSCSLHtWVCx",
  "key7": "2TCiJyw4QcUczWspsJ3hhsc3TLXK5w4S591GuBicEudJ8EDdMDEjyVfndYY15nUbPmZoXAtKyGeSAr6mq5iagaKK",
  "key8": "1TRJJpG4ujdvtVW9FE2prG7jbpizJD1ZavgXg8MRHr6fa53EoZcATHwg1PydfUBuBeFD8RH4Ke54RRGqUt1B38C",
  "key9": "5Z3paXqXPZVqqvMyzpV5nYHSBDz7Yz8zLhaZWdUp6ybCvMSKucZSTEmoRrqx2oJQCqhpfFgCnEoywe1jdHywNSkA",
  "key10": "ucnwWKB84jUWxoBesRjxhyNdbhnCWnWy8i7hnzDWRe3opbitx9v56obGrUDiobKM3tkjtacd6x9LJLEpqv9GqTq",
  "key11": "2xhxhvKZzDchVadMvnXFipUJDg1ueKs42TcMoNFFjDQp78hHyQ9Ld9w7ZXu6rUGTfmR7E7rRWXGWGBVRzqu7fqLx",
  "key12": "2pJfKtdxYC4YWXdDXZyqJkCM7qW3GfH3f4L8AfzPmEDBytEQCKiCCj4525NZmLUvX6dYLBWgYvZNskTyU5nfC8gH",
  "key13": "2yJo9GEpAtpc6jk81E2yFU7ApqAtVCgTdaLGsEKx3fHCQhyPfdjyw1QDyLipHQtCwTde4W2ziSKKBs2vBcnHGsW2",
  "key14": "4t7P7Jkmqq8czwSGGC9XyYpLJuWJqDMDDc3Ts6ZDR945xSsLPazufh4B1xPQQJnC4DieeYeYVkAC6UaZErptqPeD",
  "key15": "DLohxdNVjqBonbTPDQmZ7ms2yWmFwXeK2XKWSVHubQno7VdBiSeoNzotUm5orKSyqeFMcn1aHFLxNXRjwdBUsQA",
  "key16": "5akEkCWwUg5MuiZYLWQ7T7VddsFe2ngDccBgLZBLt2LttSYKMjZSaWzxNHdCyTebYKztVNjyzz3dEpvfjszTgmq4",
  "key17": "3xqTbG5rAAmwxvj8hquo3f5rxW8utVEj94VdPxrAydG52buV7CV8Pidy5zTHUEDfK6ewXRNSxzU2vpnG77sNP5Va",
  "key18": "WSoASemwzu3Stihbhz97Lv2py847YDGoM3psMcwsW8U6AscYh3iBMrURTh4JgcXZpsLG5JgiHw4txF23Qh4h6Jj",
  "key19": "2pNshHgTjdUQh5Tv19nms9KjnVcJiG9QZjDrRNm9rknbwq5ri3vnzagdwPw17GjBHkFNrUfUyv8DKo5Gwsxm6nsw",
  "key20": "2VzMNoFBaKbE3JVU7nho9tBazD9UFxrC7iFZyKqMKfC7vTqHDHhpaixfdirvjdoEVCCi1DPyBRazXYQPVMwdej8M",
  "key21": "31f5TupNom8rbWQES1mrHAse91vvqMmJobSKqTd4qk6J3CEDNkAATft7tHuAMMwqRyZDNCwVEBSUjqA2Z9ipR2Uf",
  "key22": "4mM68usQ9fHUFYmuD7z2T4mfd2ES8wxS6cEKZABW9qKXxW9TwVfXSSL6USKgHZ9qCvYAbh1dCFkLCgodD6mkuu6f",
  "key23": "3awYGwrsusQq1Sj7JQktGdGYEb6MuqvFqv11hh4JxnFgcC2LJqLMezEptX8NxTZ1PzfMrmir4p4T33PDXZCRRF4C",
  "key24": "25ngwH5CSN6sDfjXNZavDyK1arL3yRYhpG6G5RuwNuz2XKCfgsuWer54uN7LENQ5LtzdfqqjcaKVHFrhtoXPCQhn",
  "key25": "9pXTS9DwtvzUSTopirMTLng4RDdhGakv49zfXZxEDDY3ZvvTFJVWpfJCbTZibBDPH4uRHSqYaRQTq7bvUsCNARj",
  "key26": "3ej21zgk2nQmubCWXzcNBFxKUXL2xcgfUEuxwGzPG2kYLgYetpe8eRNGtCCWMpebcqmVN6B4ENNH8nhw4VLY1r4n",
  "key27": "4byL5dMNdxKdTDbV38YBcN85R71SUZPyWboJ4GqdtJxWze18Aow68UigDMkDHLu44NfZFMZYrtW3RnK9rALE46Hk",
  "key28": "6NKHkiGBb86xFyvQASye7KmHjX5GsArECjUvjBN3X1dp7D8XBu3RqLtV5cvqAYX4ahKbwNMgBnLKC8cc5Tm8YAx",
  "key29": "5SYC3w76bXLWPSL6GcuswuVwc7kX8ZanXq3ZK7HVPPvUtFMDnuZEgMsage6Fib7smMPafVyZeXdiF8tJMDwXhEQu",
  "key30": "4KnDN2rsRD2akkKZyDBHZ5qzxgEV4EQ4hRCjt8Kd7hCfohV1taUuw9XTioN5LpvwUw6TF6UGtSi9FFgXnHJVqWHf"
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
