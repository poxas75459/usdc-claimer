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
    "37DpYhX3EHjMVVCJUpXoe6yKeNPv6cRyKe7y76Xs7Fv5mx7UA7qxnEWsbLjoK857ox5boEKiRBbYUUgTAojyzWYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kgSQFVTmYsws11DyLP11RgHsRPRidM8BWqQDDrcU1CSW4KX1Vk8jMh8hFCsLnM44EwD1pSCzbk5BrMQMP23BYhF",
  "key1": "4DrEKwEzRnVKaXsg61WP3UARd73EmG8VzM1kyEStwTn44EnetW12YXw518Lz8CYdV6VeMi41JGGMJBucBQYAyNTi",
  "key2": "5eV6Uygea9JPY8v2axFawLy2SfVdVnd36Gc1SnyJ1ZXbXDqNArkfJwutPkEMPWLCYe1dQDxMmE59SLxv1EhpyGt9",
  "key3": "5f1k4PY5vT1KF3SPRU9rdB3Ne8ggjXgsBPCK1z4cNhdyHAJvXDwZUHshA8sexhdUa4McuBvoim7jucZ8ir4HTVXC",
  "key4": "UXgvvpuAzTV3PS2VBxgsHy935f6wdjSDdCeQybNw6RAZueiFRtNzSHDFXsPLtWwZ7V6grNNvrwuJXBGM1EzenTb",
  "key5": "2DoySMNcPRAEurr7FqUH7KGGTgeo6ffKTX4b2PVyP2xniwjvhY15bJAHbZXDYwRLaREuo4bPchyNAzBLmi66TNhF",
  "key6": "36zRBv8sW7YpiuADSSZ46ssG4KMd9PRRRWEhJp5Qmc8NLYRWpAYu252LRHy1vnYUPi8dwAU7KYy3xWezj3ofHTbN",
  "key7": "3uQGeqd7NE9t5pJfqWsMY1iDKiEkT1N4tZM7osyHFFnTzoV6BsqkQNn4micbEZeJCpbr4pKAdqfawgnErUSgvEb",
  "key8": "eRHZ1EiZFRwUrAXkwsqYCv6grH15p9thb1jEMSZDdjtXwHJQmMKL3BBtvgPT8DFhvXfrchj7sRY9B4SMepnXSpw",
  "key9": "5NPQL15Wm14JvXv3fAe6Moj4sZSkAG6SjZwmgjqK1WDGsnatZSvvXcimhmpKEWdzFTvjCtfWKU1JXddiAZGzsz7E",
  "key10": "27ZkANXaCuzce18Ub7aw64xwHwUXjPj5uLfFNy3DkLS1rL6ZX2GEh37iq3N1DjKciJwvBSm75s2AmN1uSha97MQQ",
  "key11": "62PVYX7TZ6tsUSJnQwL2ZRTb9aFafGz8w43wbXNcudNyiYJb24HTn7nV8MGraLHem7xd6gDkuSMDg7cci4QQRH7t",
  "key12": "Yvjm2G4o5kt9kY722ipegp7g2T3NpKm5tUMRzYnxsA9yhTmUgsgsk9PvWjsQxokxtCNwg32QbSKHeNzQYPvEDT2",
  "key13": "3ovLVeSaFQMMa2NkC8HgRTUzaxSRZibEmUXAJ22ijhTXAumq39mC9iR7LxrW2Ek4UfpZJ1y7GpvmsTaNGRxE5eVX",
  "key14": "2VwQCGwCdt2gVGi398T4qrH5ZfSnx4SkcD3QwQ7NRuc1pFEofLfmb3BscyUNcipYUanfZuiqiBEdyiU2KsYAZRL",
  "key15": "38wjkUkQts5EHtBuGcEtcKVj99qfUrJQEmBDGPUHVWctxvr7TJDryG3q8oMugRzhDee9MFyf96ocKJtHGTdMiz2k",
  "key16": "4PMWRcZiaYyS92ez7J15T3MwuK7cwoyHxbrwiiwAxWvu6yERH5ZwcwgwmT1yR9DDSvo3TkfhYXWsiRCD5cokRHLd",
  "key17": "BLCLxhuGi9sGNyuYkhEX78wN4LpzZmhLGqMMXTb1aqUq61jgsY7d6yYGQ4Tz9Gs6XKyJ9Z62RGURS66jE8u8KoJ",
  "key18": "Gd1tCTZEftG181g38FoiQXrdKx7WY8mns6TkJFAVxWxAJvdtLv9RNgaazvqA3VB2DBT1hWU4767RqLG6usitArw",
  "key19": "45d59WF4mK8FemocqBJbWQg4yFdswf3QsS6VDzECLFQGH8i2q9FsmQs6yVsUmF898oAebt8xZ8AS97FdbZQPM9G",
  "key20": "4HR8Z2yUE3T1CgW6Zc6MH1B6YCc5uVxY9eZ6WiKNGiGx7CopcBinCt5eQzDDKNQ9Kk7YwomFBY9QhQbLsFhQX3Qg",
  "key21": "3ABsxKhRww1uaQqXwN1Fkbv6cnw7zMpwKfbz5uCfVK8sXSiH5K4qMx62RUio7HHN4TkWYNiL4k1FHvwDuLkiyyvk",
  "key22": "2uGLdFFk6Nj8kH38rkoZwWwKxK3RreR3rtU9T51q9GRoytZxNBizn9NofUankiz4LSrKWYoKuioVWkAUyaw6XYg6",
  "key23": "5X3rFvi5nMPFpZXQSF5kiauPHx942m8Vv2s9gRRt5ebuF9ndTzBMFSBhHdVUXZPZuPdbdd6fu5Mxg314o29p1QUW",
  "key24": "5dKEKaNazP8RdYL6xBJeJsquMdPVh5JbJokLq38ySj8nHkkfmwwR8YC6biBzSH9VX2ADnrxpjFWZ2i2fPLDzWfyN",
  "key25": "3bm6CEB7Fn8TXCtbV3kjeR8NAHaB5m3mDyLudkrpmfzahwhEV3m7j8YswVQm8WmXzRKRDpwzMApadDHN5PHuwR9Y",
  "key26": "2NmoXx1hHwaAPMNsYsihg2vGoeSKX5m1ZWgFYJY8YPYmeyxM4BZvM2cTgCUyMs1ch8JiBpgvZbw29KFLwNLGX7QH",
  "key27": "4ATeek2pWBiJzkSMdrNRyQACWMJBLJb3dHt1oNBRv593Nmg8srRv4bnRcSSfDezxtjxbi7CJaSoqep3xi51FPYj9",
  "key28": "4p3iV2ZPU9pycEYLToS1n4Up3YgYA59zgPjzw1EWwbvMXpB1xGPDxXsxetQ1X8R1XiPJkyMYhPYmT32xWFQQ8YJK",
  "key29": "3PgFugwcWieNbT1SGZ74WuCingakb2QuDaVS9bMwBXfco1wdrNQmHeVwg69p91rFNoqPKBgzhBSmQfAhZ6bpGh92",
  "key30": "3cPbfJziH2VqDb5V2mN44rH5EMTAUzysNZ96dWyF5tG2Eh2NrKfUdtb1AsnmizG5txTks7dMUskYGZQvj9aepVH2",
  "key31": "4FWP8qJpFKB8ZQqfYyon71RTwxy1EfSLE99XX7ERfXVH8fgKRa5Z1kjcsqb8whQDWA8yMdGifGbPKjcWsug1w9Lo",
  "key32": "SKvEK15PVn9roTyktUUjWsHQguiRnnhK5iXozMfP88ZjyhPpNRT7CRatvTtkYSXQjrD9c2khp5ixBj9tWD3XzFU",
  "key33": "2BCmDDJKQRcLQEzwZZY6wC9aG1PgKD83UXSz1nrS2CfndaDVwzjLCE4YvJ8c7dHVy3jumNa9oN3pTHLdp9zr6L31",
  "key34": "41PWdcbjgGeDpjA5wK5atHgWXJNsuzPpVuinWfbySSwy47LnRqX2oc3ALNk4BN248bsH4bHGYDXwcrLVaT4f7CKf",
  "key35": "36Se15SwgiqKxb2faoKvV8bNV2eZm3LCbbt4LWKr5W5o74Qq2SrgvFSdjiMP8VFdmG7ai3xvTbAcip3cg13GYw5T",
  "key36": "3FvPCRfX8tiFeev6qbAh1XzAVS4QmgPEcLcBnBkRGQb1RE6moNUWWR3vqWdpgYQ9bGAC3nGWXyjumRhooEEnUBKY",
  "key37": "4dxZS6DuwCzwfgUxzqx1KVLNTtqniTz4hTvuNBR3ecbYHes2SaiTK5m4MpT1hJK7e1Jeq4pRJwGcpagXjQmy7FFw",
  "key38": "3R98HQQ37y7BGGZ2KvQDxeHP6VXmy7oFYuQGti1bo8NZ7SrGvoYoErvAnmBCKunpzuZCDWdb9aLaVZteyg2pT2H4",
  "key39": "P5fPG7cjXaiBV1hj1jMWo479aRMqPoqEC3wAjDsyDTN9TM6vXCw5df1nMzz8SYRogQHDuLV1ksDPbQ9AGtqeUJW",
  "key40": "5mw4sWwb7khzDD3rX3sJ2rsWnbV6JWu4Q1P5idpZWm1X3KHjcS7iKcww7ddKtG386sSmuNMpF67kGNLD14Daf8g5",
  "key41": "4muogXUyLjEUomTHr6CXzSvGRkAx6FQB8gzVZ5oLx7P1c2zMkgbNTETXkPVY2rtFb5Kn1AZMREZCU4RcfuBBXSk4",
  "key42": "5NFvb9YfKCT924wLbTHuHiiLyJ4boVmi2uhSUkh4fh3re33MhnxKHPByX5WW6XvQWWo91kk9krrCeB6xRzcaF4Zf",
  "key43": "4wzg7WE4mf2Svuz8HCC4MW45UTgpi8wsB1MpdkJ1h51K5iejaAKANfgjsq74eTbYkPZxXfW3mpXHvzx9fiwfSPeu",
  "key44": "2GWVD1TfFoduUo7vevbYkS7YKajTtZM5YfdAvrzzeGWJd8NPneVYjTuwT9jr892rYzduUrL1sMqSKTT2iZbPfXng",
  "key45": "5vT1fEPc3TbgvsG3x8Ab2XxdXVhWUtR3NrRYAsEbUUrxdSfStSB9FLVUfhraGxQ23bqzmxR3rpnWDFBUN7v264v9"
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
