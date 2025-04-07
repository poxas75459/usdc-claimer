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
    "4yGLoJCfjm7CrqgqDbtr88iVpWMZiiKi3Jkgm1EiNojE1tUmoMDJwGFsb2NpDjuML3MnPBsKenwN5hHGDgTpCFcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JDmYbX6huKzbza54qKFo29WmUez6sAQYueyePktQnmRdsaiSfcNXuvRAQPVEZFyZP39EPZPCvzGGkJ3r24ia9aC",
  "key1": "5qwUBmFguRPmQ6WhbiJMf52YKy5ADUBBfnrDrmAYnj8rfbFKV4MuUjr6uyaLza8XRBojcUAUGk81UGTgyfuVKHru",
  "key2": "5zXMonut1NtM7Y3Bhv4FUbEkt6k1WA7Yrg9FF4ELK5Qru4Qz99U9iwsd7DFAvYQ4H4qau92b7DZAmMnjqizYt8SZ",
  "key3": "2pdbaTQ1reMeRFNEHRt5N7nMkQrS7R5QbkumVzpGBvy76iggfBd9nM4U9wRPsiBtqHvcxdPmnUjUNxs81yQ6q2iU",
  "key4": "32FDH5tYgosm2SaeXzY4ogPrcnpHmgmLuERCUzeb2XvMSwab6XakVy6NzUNDojHksW44RGU8SFM8Sx87jHFYErQv",
  "key5": "5tpJm7mhuQ2NdHzdkNSqC41jXQqZFgpdxWZTfBmx29jkAigmsrvJfgkPJsnuwdtmkSutQJN6whHBWY68DKF6uphq",
  "key6": "5UtT8Ffon2jMCFaYF2TZaeyBr5uzJftnZ8netiM8Koxki8rKSUCWcYaRf1CTEVos1op4mSpMJZTrYo9DoLr3ZAmc",
  "key7": "WyWvWw7yfFVf2qkAdZttf8sB3SzPEdVHqoa1vyghn2XJ6ftc9NgY8FVsYxF3NZaswZv11FZQJmpa8sVLGLiRpAU",
  "key8": "3L4kPJ9YRTSR5fju3zCAT7aNSadqY9TPPgm12KVM4ycrp9L7fv3h7aWkCx64ddocGMQoESzLGfRES9BFjn6AhNbB",
  "key9": "5oZt8HVY5oG4w6wtT9T2zbjpKNkoaLifEdRS8VpmV9eAUfdixh7Xy5G1bqbwwJoBvkNqcjL8xXi9JHEgSpLiDrKU",
  "key10": "NURNq5PjAa2XtztcY3vNuABTfa4ssmGzWu4xrPsK3T8AGHe9s9y1wGXAHDYvj1KgtCD64iEbT9Tzf36UAtcWMSJ",
  "key11": "4e7tSs5eqHTXrmsEE4NQNBHoRA8ByvAdvujAyogBu44TWBFSGVkueu22HH9Uz5QYpsjKDiu94yiNNGyBCky7HWUh",
  "key12": "2timvhPuka3xH7tp2q3t4TrYhUrkEZ5ALrnZFJaDZquZc118R9L7UWAsTnEKLX7xs6aizoDmR3YKF1pMqxQDnrex",
  "key13": "35YZHEg6UJW4JZc8kHAxs6KS8omTT8bmX5UdWve35t6oNwhzyZwgmBnkKRiNjWGHPDQsaJcTEpgBF7e4BWEJLdUK",
  "key14": "2uRphkULZ23bLaDHCgr1XVF2nGtetzYDuxZBsoXtVMCRi4raA9T32PFY66byef7dX35DmwmKGZy3wP25xE2sf2TV",
  "key15": "3WLaw8Vvnjd5tRXWHKXXesHjbPPzCD1q4kB4h3qpd1WCbMzMgB8PyuDugDQ3Pr4Lvd2RTsbsZpynuk8k6Vws2p56",
  "key16": "3236umDP8r2oGpSW7f9ebt5Cq1GQ58YrMBTMBSNuxVQPAwJdE8QXGQ3Fby277McpEe9D3efXNkQBmhNyrfQnvtDY",
  "key17": "nqXWfrjobkAFSKXiudjoBAfdBiHsMuwzX8VvWXLCBqJY7Ha47BaUqmN5FbfTHmpzAqS95mytKofLodvL3L4oCXJ",
  "key18": "4d36NE7Ep2DavUvRHzp9GpJjeY3UtXUmU45DkdvkcMoqjQMB17HXYNmdaywXwRwGC9qMbpWK4n3FkZP6vWFRFa9N",
  "key19": "5ZAfWL2X8svXNPNVc9SEwtZ1tgUgd9hi8U2VYTE2xxPxAJbGVeJeypUzjBppYiijUphoPe1ptsXgX7aFyTXKYpZn",
  "key20": "5UJHPpyWmX95V9hhyP6ZqteuK2Ni7opcdAHHnMzBxKcXsjo6nJyb4mVH49V8BfD3uDT6poBGwCA8Fvyp8b5Qt5bW",
  "key21": "3cKy8QvAd1361Le1XnLK815rrCmjAtUrgZsR5n1cV1MWNwRFSSTXtAb9aU7xZ8UU481JDfgUs7s6vJHuoWuiE4Mc",
  "key22": "5vA2Sx3eSu5ogtL2XHzLcsQyc4uFpZc6E2SGJVTSxRNYa6DXu8HAqFKrzdeuixeawViFbGTGBMnzA27vvUt8gQyd",
  "key23": "27NR4rrZFGHwvF54npYdWpX5L3SxYbio8WytwbvfJsrTYJ4vgH5CNHbcCRofaGAaLP7xHsvKwjr3DrJkCZ2xNZfq",
  "key24": "32EWhhWUFHEuXBQuaio72FuuYXvSXE6Gjs2FWPFmrpuixGjtuoMM3N2bYAqgrVbVX6tE6YEe3k8rpojjBHcsYxtq",
  "key25": "y24tFHLoyaYSgL5typGzw79B5Epo5efCEpRGhSkUC5Sj4vPhhrwSgUJBamJsiWmkNvidju5jAf64y2uRhZW3s1w",
  "key26": "ai8BuMbadZTFagJwKQMoHJ9zPg7PLeo6GJ29gLy1VPUHVx66hery2S4aEc7qzf2xBmG7sKapy2N3Dn6NgeRJLv6",
  "key27": "23xq7NVdeZjzwSGst3ZdczwvjLhScAsi59wrTYW3z8hLzpQ3EAFhMHhNFQYaYQyyh47Uiiv6vzyCZhcmzRZSBkX8",
  "key28": "5wrpJHw1qbPLTtPUPWN1uKGqMnj3RQizFdapugxRG21KDhcq959SwiviEXKDTWdBsiSzb85sPaY48jwcAzFtpR6K",
  "key29": "5Am1Bi7xrg9sWzc1pHPLGnXpDyN8wDihtfWnCw3aLpCmkyDg9rawbv5MDESK3urvrp38eLUmP2N8xy8b49soHoy3",
  "key30": "3Ho9he9aPQqGnLxaNZLoJcJFaRE1Hhc2C5KLK6k4XvUwK6CPi2ZELP7RL6Z7bnD3ziaPEXX5ov5s2H4iGZphVkbN",
  "key31": "2PeGnz1ezcYAN3tU9RRKurRTFRCJ56NnDMBzhS31pWom4FGCqT4Bzms46hyryKeLDESKLzUnL11Kuy1gT5z6MKCE",
  "key32": "pAmxgeJtW6v25XKrMzXJBjB3WS4ZRNmz5aNS5rx5RmRPb8UZ34jghoQjd21bXXHV7EKcX9RKmFr3qf64prV3Qp4",
  "key33": "4iwjUQTvh6w1nMRACMwtqYrCvy79wXQJnkMhta5c38vzBfwyANBQazK3ypXbpnKjk2LmjieYPXtguMZYY5caTyA1",
  "key34": "toBxh8KhN2pk13v15BtpiTg4RXgr5kvkxp8x57xem2MoUv2WJVdod12oAd8sysxNa5ootFrP2WMvsXYqJThzzqR",
  "key35": "2yvZpP9BpVQfvnorTXJv3TnvMsnWhFp4W7ieqALPcZJNuyCdVr7cnemFW4rSEwXgwYxFMTkyA6V6huact7YYKQeK",
  "key36": "UJ8vYTx3gCfkkJMTxwznArovkbMSCsHWnNAJFqGDR9qg6SKNtHXhXeytyvArzpC4tuVo5pxBeXa587QUNEBN8TP",
  "key37": "QHksPW67icQz3V4Rrz38GraKN1etkL7LLfymjZT9nUAk2nrwZYzkaKb51Go7WNn5D2pRUxbQoE7cXxc8wRFX2BE",
  "key38": "4W6iyWquXQthQHy8ttvaS8VfenrnFZwVYkMiLEJg1uZc3EDN28oEQMAEhPFdNLT3UgadmzC4A7teyGZbzCLzAk5v"
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
