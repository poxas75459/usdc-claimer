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
    "5pU27F8VG7Jra7Xu2nocmyswajeE7z1Rk5k5xiWPJbmc7v7VmJmLm9HFdHAASqcw6EWUnBnq2yrzFCKQ1BfeQzrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h48GdfPP5CPJ9LvnSqjywjyGvRz59AKqs37KWFhcYVeZZ9AuQneWN9RaPDSedi85A8kfqo1sQrMbhRmhB46sQBL",
  "key1": "375rjVQicQUkht3Cp8bU3ciKUQHU9452LfdLwcwDP58S8gRaLkVcuMuktAY3sSqNizinanJT9oKJE2crPFPYQeZW",
  "key2": "2oqoawNKpACiczuWtuyYMgpF5UMmzKHcnFkiznEjNGGwhCL5N64GKsTc5SLMLTYe5V9svxuBZrNBVMHsE23XASay",
  "key3": "3UXgfKFgpK7TpvXSTFcouM6Eo9vTiyRZBoqCrfLL2iH75MDsMziJ6LwzXjLEd31zvrVKvGs3zaaDbj4M4ezc7AoE",
  "key4": "4AD5tFDyw3tDWmRDYBKZvN4QqrLeZnEtsxFUqPQzKRfUa71kwbrAVdREtuxm95HQKw7ZDiQEXL99fVPJ6R9wZfs4",
  "key5": "4CVXXn8iv89fEgabdNFjTqztNP7aKgk5Z7aH8DoerJngNHiFQwDim75nr3HoNGH9gx3DXEATeeyw1wccGKwjwaPn",
  "key6": "5UpTjYKG5WWsJWdpJ72KFR2GQe6vq555CQKxYNYiUXPJw8hddBnbGE4wjoL6udxKeFnVYnMrv3whiukeGpStvgBZ",
  "key7": "3oAxbLkvRays53ABFo1CHFADSBH1KemnpvB8YGMxW2DFpH6xh9dpUf6K1SdKTFQiasCm7RKKKn6cxjN8CX24hGSn",
  "key8": "4xGykPExGpusnkB8xKvyHwXDjy29SVV5pyGSJJcQDzEztEu5kQg2GbKUnDJZFpKJfbGSE4m5HyyS8xYwnaYBtnWw",
  "key9": "446RMD6CaeZ2hT6HgoC94a51gR9Y8k2ianAGdDfq4XtsuVCMDFdoYDMq1CW7zrNLTGchYBGtkNXjxXiae8AhiHgt",
  "key10": "5r6ZWdHFxQZzE2AgGpvDbeAEueLG3JiFPjaqCxxPDKTSHEjzsJc5sx1h1LykPCVFqEogsf8YYprnqkJ2S6wvYYgx",
  "key11": "3SgwTknsK7w7V1zHE5h1yoZHEX9KkmD3rNB9Zyjywog6q1WSYygzh2psCrRPpaJQXsioQdLjU5xxft3kpLbayH23",
  "key12": "QXk2sduns7kG8QVpKVDPeLirSUzx2ss3PJ2U64uA5TH6DpZ9gFpQbqYHY6BvgBGE8HyAzhSdDi9WUaVbu4xxdmW",
  "key13": "3j6pCRjmiRfrfYEu5i8vnbmqAFaE6Snf7HcMFVLEU5mM1WwbJ3LuGsEaRNvvkdZxH692DyrYC5wWuv2zxmLZKJSM",
  "key14": "3ZwzPrb1G2EFWSufDabj4dSBPbNDP8CLYVWiG23gc5maiuKnbtvNRFjgnAhyotXMXnK9kdaZae2m6TnAC6mKhs5S",
  "key15": "2zzHShhffQ95g1xAawmfNRfgk2FSYtyNJVzZWQ1DcAgZXNR2xh38Y3LjLDCxWQmtVXaWvWLoHE4ddPWppE5HojXw",
  "key16": "4Xa6WKJUm4YugYsZrEykhbi6psAgpFnfJUx78cZKa4YxzPsd45kJbGvxBDVKKWkDjo9aZo4gfiBL5y1U4qVVfad",
  "key17": "WJaXzDgAELvU2Zg1Ei7ET1LaysgdW3WFDp7djxD1qtrbsTHxMKGWZ6bknQLtLXaBmnUxLfkRNTrS1xPyywTPh7C",
  "key18": "5uy1fUrWPbafGZeJsEz2VRjavwgBY8ZknsVEf2usepSspAA1UKCDi1mxoXSn1Z5v7J78GvRofm1aakd19P6MvA3b",
  "key19": "3Lyq8d1CxaYMADwUR67HzJ2qiWf6hAo3iG5mZtEqCLSFjgW93oKM1Qmc2PUJM2in3SX3VbKbM27FDJSeqh212kEb",
  "key20": "3qfCRUQpuFbZXKpsajUfM2ikGz5Sun8fA8W6qqMa1PHc6BHWc5y7JHF41SUcZBPVxJRtX7kX5KXhMGQgUwEHiaUQ",
  "key21": "39tohwsoLSth81wDvAavpQibnBTvtRJN6FcJDYzWrjd3M6rVhfJ9bUmszMKJPgM2MTKjPoodq9kA6gfTwKPLt8Vk",
  "key22": "2ka9pvEoP81zxX6E3ZcgbyocLMpUhVeo6BWm646V6RoDR7QD7hJFKKyoSRMBuyLSdmEiu7kwLGqAvzhBraq5TMtF",
  "key23": "3X5Z5BWiixFzeeruDLuykKVLtqehjoLe3AhZ4CWvSVFdZJjkftWPLKviuiygQs77aKktVzL4YuSvrCo4G4AmBsp",
  "key24": "VCuHykC4JHmKVUNdkL4YfjkDdAS396C6hQRrb573C8ZnKRmhbdZAk1PXtLVCfdpFSFuBZmAs6Z7Qy1nfVZVNs7D",
  "key25": "3gygbA2zp5Yd6MMXquTowkkp6m29Vo9P2eQXnRfk4EEu9uZMThTsUVs2Sef6smj4md9RmUEr7TvfUNXvW6QSdkBF",
  "key26": "4mQiD952XA7rDLYZ75D4P8zSQQEXJLYsiczEMTHgn5jSodtxxu77H1Vo8az7ryT9rPDdpXpZ4pNna8Dh2C4i4f83",
  "key27": "2W5kD8CiuQhwWTccmWP5aQ1af7x8xhG5RvGYaSycA9yt3ENHFsKH17YMog1xsBa43o6TsSgoZsB3FA1JUxxyEgPk",
  "key28": "3oDtfsaGEyv6kqn2cu9vf7eTafaf4d6Tzb4dF1j81AZD4H6kr75vU913cHBN8649bXvcCXHkgTKZQWUyx4xXa7zf",
  "key29": "24tTtGA7AhYFMtXLuoqhJ1gUsyTRPTSedq1duHMGsmiijUAZa3gymnGdEcRqMSocfLnxVe3LPnQP9NCvfbQs3q8z",
  "key30": "2GiS99Ax4omzAMc6wCABqyJ4PPqcrzBpneUmiBecSAsj78MhRDZWiMFkbgmNiePLtA7ptP1jnH7pfAtuNdQ6f4no",
  "key31": "qsat9g3SDG9uJKxx1dX4tTbwzaem717G4bbvwZ3ZcQKkpDqB3BbMPKBv1tYBRY4khTdDHrYcRNe9GHk24AweEHz",
  "key32": "xViX2z99rHT2kFZP8mGsT5kptHi7C8CWTP6x6KF3BpNGKDCeKzM6dF9RYk7MjjVPxztofMxTwgdLVQa5JrX1kBA",
  "key33": "5Jj6bxk45F7oyzDESrh9hjfk9GEuUU2skwxpRJgQGEF8iSEwHMZXpoXg5Ywhi1n84F3aX2nqaEohaHQJ2zcjbu6z",
  "key34": "3D2Kiu1jXSdAsUdvKESihrop2n1hSUjD95VC3zEC6iKXiXCikwy1fAxmycs8LyXBTpPrSnbuLFzZghkzQUj5pHnr",
  "key35": "2CySSEDEvtxX1C9u3eNJr6bFbSreyMXLSYepP8tMyjMDgwgoTzy6i5Xaok7yQBerPySoEoVrm9d3t3isQopueFN",
  "key36": "BLEsBmGVBNWJTD6fVwd376mm7UEadQbSZ3S4pLftPnpB8eKb5n9mHiXPcJYRaVRqAWy9EphefNH4qTR1VP186fP",
  "key37": "8KE7ns92zzPDD9iP2FGqytZFX89MJ89y5EMdLhxAXAP1Z7cbzNCFb3GJ1oCjpw9muyoUfzPHDZkmTiwbQtyAS8V",
  "key38": "2cCcR6LxXidjJCN2Msr6U5vX4nke83HqqjYQBhVD6MUb8F9NE4Yv95RmsasEUPp2cXNYmykztWGgtZWgoN6Ss3qP"
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
