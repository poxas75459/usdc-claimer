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
    "GPvNnsf157sidWMNBgKDvegtP9vqAmAL4NVCcrLt5xRZHLpX1rLDp3HZYZQEQka7VS1fuzpNbnWToQVtCUwru1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FX6QnRGB5h3bTtFFKVSbWSrWPghSMwb5sNR7RMhDYgQWFbamQespy8ijSzoCvfzo6uarhfb8P6hWc73VJUv3fxd",
  "key1": "pD5QcuYaPUu5348Y1cVJnDg3oUxK1NcU4cjswKZHwzkkto94sCmBAkorjnEHZ2WKa8jyUmVawTNGxPWEvpq18ZK",
  "key2": "2n7z3jhsmTp4bjud1X1y5UHrTY6axQxuAnpXUyvFeAVeNo5jJtRqccbhq3wo677TTSA4zrhzwLYye3ysfLpnF4sF",
  "key3": "xK4k9kpoDR2T2Ni1Ye7BP2gMuzU1r1cvXJfxM7GJBp4EGWYyKMtx9Vk76p6yRaDV2Gac3DjPBq72ZYN7o3kMtgw",
  "key4": "5KL5ShnyahHKMZ6TBg4kude4Qwchn7iTqUFQFsYuU6x9A9bpu97q81h3mo8bqxt3E3UsWRHEqPUAXWbZ7CPJtv7e",
  "key5": "4JEAjR81xihdgXVPELqPRPkUxxNh8HT7vynR7CcYrfZ3CbswE6Rd1BCeVZHLW2cvsmWmg4JAAUXWfpjJdLtdXUWy",
  "key6": "4ZByPowS2y37UEmZGuhJVguecu31M9cBix9SVy8u9iHwCniiV4ssxqAhJjRy48Hc4nPjzJxfgK7rFE92BLhW38c5",
  "key7": "4HhGWNEoEt1yenfSfrhdwTEBakwCfQXr4JGj25t9qGYnwC9hKFkmVnbDsUGSphaKF4nSe7m5yHNXi94ZccTCBu5h",
  "key8": "4AWT5PKfyjYULyQMrFtNH8QdnNaPdywez1DBv5YG94Hz872qtnUpMuuYMVrjmawUrTYvExU1bgasGjfcCA2atyjA",
  "key9": "587Tt1Go52nqKkvXi5nk8YjKdc2eKiczv5uyWwAwjxhiNtsTjTPYtCBt1NfxY3aYde1jS2TdaXvoDCuLVtXWNSeH",
  "key10": "5FDwrgHBuhvPFkj4bLKsDN8WTD5PKMHyiBBwLnuPkQxECBFMtSLnXBE4zWrTAHp7Vg4jn3F55nT8ukXwfj5qGHAD",
  "key11": "i8xBFquZjdTVdRFvCRtcWP7SA3Ywa5Yw3hU7cGm4CE8XonyL3nWsuZvyMKkSDwLv5m6fNCY8Rf6mG5RAFsAdNiD",
  "key12": "3wVfBbnWs8mRkJzw9V4mfqLkbK3qwVLfN3eGR7S2dYLHc3sVUViw5YCnB6tpZ3sCyCGFmSPfGSoGzqLHeAvBQmJ6",
  "key13": "3cQ5QteqvenPWzonLfraB8D7tfiQ5zuyQuC16DEpbJuVyyaQnQ3jueLfsnNdkcHMfpn8yMAJCtw3Wf31cBePpqhz",
  "key14": "5QEnGcjnAu4rrCRMHsUX4L8VLYDLoEbvkLXU1C78CZMzh69qEyPSyjKdAdjpLccPkRjwpCNzKt4rbhNNVGRSRgYC",
  "key15": "3fzGd54U5NTmuJL558cp3dZjwFLVMcnmTSVRB6wfx6vo4DPibUZpGiSXEks9XxEuYvsaQq3KbLtrHgCvkQSLZvcu",
  "key16": "4s3efTtRzdFwoEsZ3dENwztErrsJLH6MM9BJDwqB6jm1GgBPZzX4pMZPSLarKEMtY2wdQfsoaLzpufke7fDwjbWZ",
  "key17": "7LuFA9L5rtieJExffBb9CkBeGHsFTHV2HbTbznUsdALHhUwSEeiHmbZeEQKEUdxyzoXCFsSTYpFixfcr2gVxALx",
  "key18": "5ssQtSfjZhBRDTE7J6tZ9bKruinzVjLYobFQUyLVzoT2K3nii5bsD7fvPVFNtZved866dwBemLqY5u8jQNCD76yu",
  "key19": "CGmBd2PUKvgBsgQ4Mz9NJ3gMGWntLfx7b8rXkTWStYrAfHLSde4MjUJRM3tLUkbLoSDaGxBTZCLTjxKmGW48HKN",
  "key20": "2VpBfmUX7yXXDiRdyfwAoRXpmiHnZ1SiMRRgwdc3m9AmehK1sftwvxQYVFnLncnL9hDTAG9TzCz8w84kc8a7hmdz",
  "key21": "2tWLPUQ4wKJB6m2Ek2z5oRuVoeWYJZZJEbqpswsLJtP9fvAK2RpuxAm47BbfinqL6CsAshE1cfeimGFwKTVuS3TM",
  "key22": "42nxbEgTGBYmWj13JRdKKmpiQmxVqRb5ZrSj4MQi8VrRAAL7Lzookcm8A5TvZ12oU23A5ayvfdb9V443EX8vWabw",
  "key23": "2FubdxhMwhSGFhvC3zY59iu3QtMdzAqjpRkcdXTWJCfukody1tDrgSZ34Gct7gj5wtE6qkfrGwJpBW7VSMhPUXwX",
  "key24": "66rxqAopGG54FpGLkcDT6vLQtv6Ggi5ypx4Bd4erui3tqKZ2zW1bT1BqR5xHZKtRN1XGHJtrU3dQooktEHRgoFhG",
  "key25": "2WWPLseSELrPcVkRbun3DxZZrkXBjEKpmCPxYH1oH2uX82HwsGQTVVpH7qThcjnC1f8bHZAPYYaTAcsx7D8zYRxw",
  "key26": "3MsxWdy7DEdDDTV123bnDufLz9Gnkb3MVqhxp3hDBx5gVg7fDrucxKhh5JnnK66uis3FCEnBPj1csawHtZkY9D62",
  "key27": "4YB3jmdo3z5xi44EN3p6MnrL2HSmuoN8ik4QeiauzBHAK5eZhijBmGpMGfsnHsu8YQzbaKuRUB5onY7eng1z8X4T",
  "key28": "2PxNbiv8GFH69o1NRDXNNWVRjERfJ2iijjWwsfpQDJRaccrNKKtyizTkLV8E32xR1LTqp8PVazLeMoXETJriU4MG",
  "key29": "2NbRJPm9GvKX53DCag4ndSnkAD4FhauqfbhRyyxxf15wrMHABAuGcH2vhMAaiTy4gVS4y9EMJCA4BJ7UGkbbF6P9",
  "key30": "4a1MEoq2vcdaNx8d17tDZte65gAVpcWxboxfHMQtdXwWcq7aJw6FTg1p3nQiMKLB8GiMQDKhoSRnJ2KommR3SnAr",
  "key31": "482Z7wAd9vLY4h3vj8HTyRwaPPhVnq1uBxr4ozj4cwrDPx7zjk6REp79PqLr5UYnrwXbN65kqJNKT6wdphHxqXLw",
  "key32": "4z2uNFTkrapdsNioTtu62cs6EEUYosGhDCYcBwHrRGeZaYoniEKrWhjUGhUKBsk3M8tUcuzQWGZNPVqbjjAHQrAV",
  "key33": "5d9GxCcbkbUdcH29dR9m8aPoaLVJnikJHGo3dYKevE4cQi9pzu9TskbxmHW3rYp7oj6b1b5vZGZDMo81FB8KsKxd",
  "key34": "5iwTPGbkkQmdK8UBWjaw5hfMrJP2Xp3ejPW3QN1d6ut7Jkko84cDpM3aKenvcYdaC43x3psCSUSwYiv5VkbQjqje",
  "key35": "2tDiwME9aF4Fpd5E8aVNKMvcEFkLZwTmCkumL91kCyDZLv2YG9XwegtkeKGTdz8okbUfY38PkATTkh1Z2w7yj5Dh",
  "key36": "5HgLR9RtQtwJRuPW9sUSfR6CzeDRg1AgKthBCdzsQE5LhrvhVeQC28uNnF35Ehpuec3eMv64h9dnrJUkdw7dVrgr",
  "key37": "5mwgZeryQfyCzFq1QyjSzgVbC5tLWgdp9ES32RWfYkxER1VEAdJSuxG9DeV8HATckUqGw2J8kGksoBvr8xjkpKEx",
  "key38": "4C6BAmX2hgAEXQ1nvV8m5aZAUM33CmNJh2MipQ1mm7N6NF6q9gsZjms1CrEmW4ViH619GPXTQ3WkG3e5dw8xMZP6",
  "key39": "5mmjFyWiz2SVL38RZYaUCMQpKYpLs98o614B1iQiiUDpmjP7D8coV8sKBD9MUhvUfFNY6DyFYmjD1mRZ8T9nDM3E",
  "key40": "iTjMpAWUJ7wy4emKdTosN9JMB4cxtzHaMXqFoNgG1NoYatsnPCUHWrbqyZYPApMP4NdQVKKsAa5kXMxAxqAZGnw",
  "key41": "56R1J2htadNYndPTeamTFjKEGDV9aGG6zuDr5aVipECevYbHZXoH4Z3kZNSfGvLVoCndseonSF5Rfsud3ACMT9LE",
  "key42": "26L9wnfqF6ffJ6UUEFe8EHBKtdQYwCFDKFuAPpdFdRpoak4AJL6dWJ7rvZ4vHfqfFae6yKg2sNDmnEYW2TZGE2bA",
  "key43": "3wjWAruscjs51yc6DmkbNdWqy1KgZGGfmTdeXaznmFqDorsKEEP1YtQtX7SrjKiSqvTDEnyzoYxyqfKXF35Ap9vU",
  "key44": "4BN5xkDNgDTdoadCeZvzuC8GfKazG4xDvKWMUVi9oZocAJHbemnvyygyUjypSYFSex6jzy7TSTDYAbFkkp614qdm",
  "key45": "2HCp5wuH8VDwXftNDtvKNaHNyWh3FR7MrZkEnYYFP4ao7ztKGnVoAMCaMZf5N8vL6VSVcKWRFPUWeFZZ6TxiHXiF",
  "key46": "4Lj2oBbHTBJADnegZMBGnAshBCzU8c5wA6nv6dVEucAY3TbwwiUCv4BMoiMJ6qU9W1wYubz3zucSA3HG8zqGxcpN"
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
