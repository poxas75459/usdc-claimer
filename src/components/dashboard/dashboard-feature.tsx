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
    "2EtnGVL7bX4Pynpim12tSepTio4cWVfdcnQdZZoBnKWm2MQECFUCyZqa1of8CymHAcKtt3pJLdpnjZCnDzAWeJb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FufitJFmqQH8mKwgMfJ7UoNGeAJDgfMEk4swn4j8oJs4Tm1zXwUoY13crkr9wxT5w4RGDUN8hR3Nm4LLdnN92k7",
  "key1": "oZnphrY47uTRw3qpQ6mjkbcDD1qYERf2PpMWcdkTJVtAygZ7WfRN1ZvomM33qqXLKddUtpKhT2KfG4YTKYYjjJy",
  "key2": "stq6LWU4hyEcMU91GFWJH4kffJ65D5tDPP3vHSGZfU1sK5imWuxPiWcvGp4JTRe2vcwYUKEYMAobxqhFPtWybqo",
  "key3": "vdiGzGXnvVLYXVMUg93tjAPEA2DD4G7mQB4PnaUphRsVm7Co7M3PbFovChzxFVUjuvDDXmXPWJQiPNmDtBXdhWT",
  "key4": "29MhegckKRxx7ALNgV1hdYyod5yviK6WcS179Xn3rNzaTV33PyVQS3HGdY8Poh4FziQXnA8i9DjJvC3bT1inMiJM",
  "key5": "267wekqDRb5pBpNasUsmH8YVzviM3KuqVu1XVyAiVJhF2QLxY2LFcsZoPpEVn8QEq6EtfL5m7TeAh8FPkvsEfwVH",
  "key6": "yAKfutm7Y6H4EZpc3VRzfVmgx145jFtaXDZrK95s8r9CTtetiiZTaVFV56JCAhZ7QrCCJfFoWGqjyUGDsGYQJ4D",
  "key7": "3S7WDWTReyS4iytZWDRNyD3JZUBWsi9LmBdU1AEjxHA7DfSJQA1cDMHMDYyJ1xFJUVnURtGaCiYWwpc718WsGG8Z",
  "key8": "28m8dTpxffT8QsvU5257992eTeD2PumoEMcCwrng6P9munAGgkCmaTfBER2JZZKj83RtmfLk9LtKx1DqUyXxTBXa",
  "key9": "3rjiJ4bk2mKCj4TitYAE6iZzc47wdD8ESC5dApTTtZJZkcu5FUcunTUvdPKhcqFRVkRZguPFE6wTv63ktygjHvxN",
  "key10": "4FgHQ3ZJS1MgPBVSFuVCC6dwmLqiYxtmPH3cd29e7BTKM8wcJVSF3DQwU5LA46SRE6V4W1K7PiPU6tiHqxT54Arx",
  "key11": "kQGembpimJYx8XdVL5TYrYo5ka9pF2ertCDX3Lw2Akr8pxNbwnFBmFefrQk5Lc7xckrKVyHm99FZmDXJCS8z8P4",
  "key12": "3vyHSkyHwWmkQRCisP3af44LxnFwQBNtxriyY6FVbSgpSpu9kE6QUiqTZ4YG46gs5xNFm4cjyYWscRdwaBqtYC41",
  "key13": "5w5nnt9v3quWXG9jrmAgkWsvfdd9bqCzhBnSXrvL7MRN9nCJ8YQNo2Dbs9JhgM7FBZUUvqVWu9tafMYiwbP4gpNg",
  "key14": "3SdX3Nd79F5oSxD1XLFswygCdZjsDW6mJRzXeVTava5d1wXzyRysuq7KPMgMjrCHi8hduT9HQyzFyX83egzu9F9j",
  "key15": "5tcVEFttDedmDDbHUF2kdidMCmA82JkzEHRH84QStTg4Ciz9sasc6U9XCsy5xP7zjNbw1BpsuMSyKgSxZ5FquNcp",
  "key16": "4VVacQ9T1nzWtz7cPoFZqkPXep5Xq9eUC2jpPp5MffRxEUQMfKFkyqvWLervkeSJiVdV9bGxkonNnCDxTv69Nxn3",
  "key17": "HuzJYkGutMmvcB8SiCC7J9SoD3DvGRcSiTWyd2B5BWCuHSxPGM9pV7ePxyPdvThQZe2Qk3Gu64KtRrXoRPan3B6",
  "key18": "4mz2m1r3E859vXmVmAkyEnZqjcQNRf55pP92RR6himBrNihsPCGJqhvdDVjYQ7diDeAfYiF4JaK9wWC3Gy4ySnZQ",
  "key19": "27kVTEsVEmCxhGpQmoryhubsBWDSDgoRwTS621UFtPXPG7NJC8qwuPkSHmERQRoRmoDQgxQZDSC35wG9WxjKhvCx",
  "key20": "5Q9wRufnCKDy89VpfPKVx25d7HZAuGPgPPBqA5UNwnouhENJYHEPNG2SFxqpa4pRKtezEiZZ7jeVR8KExfhCPbew",
  "key21": "4h3NtuJfm2VppNVBXF77xszoLmpCL5hSZMA3ocfqaRQ3H7sw1M4ZnvRETXoXQHCC7qHndRnFQt3WwwxuK9kLkt5M",
  "key22": "4zRGFv2eDU3USoi4SZVAYUMN1SQqTEqHL38yvbXFsng5oJgg43oR5kjpHn4pZuw1dNyHCmFDFZesSijotm4adX25",
  "key23": "4yDLuJ6qV4WEyTABberhuCmtRRg4cGjkpi4QytdNW3HjbvuFBXj6vx6tu4RKrSLbDye5t5Z5ycMrNgzJrDYfQedR",
  "key24": "3VxeJbvxtnQN5WRAYPSSFkDSX74nLhSHvowUx6gx4JRNSDpCS6jmmHRUCoRbejhw8sKeVVHhf4VrYStHVjnq4DKk",
  "key25": "53ozUyBKtMH4LneQLQ5rMVwj5T4MDTDw862CjWLd6hw4woVYWy7MjQmJZQC1NvGX6hhzXLwi2MgXCZdH5tJ1EzLD",
  "key26": "5V8KQDAjJfXv5vSudnRoqevjWT3nch9P3jkGxgv76RY178t1ovU7ULFzZzpbdZgrsGVmCzndKsd7mzGK7bV4xyym",
  "key27": "4zYStGrS9MuAfSmR2STdHxmKujvZpnwGpwTUuSkcgBkabJTteeABEwYbw5Tk39Mh52ZpbPbMTPad1caGuuZ2pCTG",
  "key28": "61ubrJtd3VEWP1FEUT1df9zrw12cPpWsguYXvSLVuFBcmr3gUfYUqH4344XFWHsC6kA7MAfBgNCre6koua5Zn3to",
  "key29": "5NH2Wv252Z7gj56tRJn4i21t2XGFyG9ZXfC5yMduXZkgi989np8D4Z8W5CLYoWrfxe6oUzf8NscCa47rCPRSQnig",
  "key30": "4BzGgBQJEhRUzeejPdgYX5NQNmnLpuuR5DKiXFxKK2UVPZmJaFWjWH6GthEdZxkikoWpzbYjZKNTcawWoqqNYSkC",
  "key31": "56NZjfuctk3zLCnndto96RrMgGz1edghi3YR1TjNAUWEb5HmaLUAga8U7fnX6dfvcNnnQE2mYvmYoZ1fSeyahFa",
  "key32": "3wCJRAc3vkgRXS4ifXNKjA3ncbMS942hWynfjRuKJ4oCavki1MwFtBNjTUso7F5uAq3C2gDNhiUKSayASnKtAUBc",
  "key33": "5tnzorjBSKarH8rGY3EDxvnPuQgJXXi8bsMsbahLJmnuaP4eoFzf5XdahihvSDmMuaZAZPmQsmqnvVioTUNT4Ays",
  "key34": "4uS83pHsQQx1yQobNKigsjGDiAmC2d4yEb7d5BQWsDm6sG5gR6BKfSVoPj8Nv6pWChZmbMsouxeTqMT7AnrzVP2x",
  "key35": "4nmCJrXyyawJoTEJ2vTXrtYUSHhAknbcgNvzx6n4CM1zE6Xp9PLEn3Zw1z6LZyQjnTAaDQKZ1BPeJh8kof2osfw6"
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
