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
    "xYvceAn6Z8PMmoPCc1QnJgLKv3PrwY6tcs4NbanYpjWvyNfpm9Xkyv7ikRqzybCGUr1RryswhwMdheAGm51m4Hb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rVa6WF3Wcpab6mxt31BSTuLjWnqdps9cNxFrn87dTw8btQZ3FcgCWQ4SvcCEKBTa8dSs8GfEVTfP2i9WoRLN6wm",
  "key1": "3kfRbCA9eYrG6jMnHMou1cm5gNmQRQHXvRQ59tjpzrzdSHY5Z9bDSbwiaC8SDVN7bbCLNXrHh5MuZUGCsFn2dLxX",
  "key2": "4uHsE2x2X5gcBcrLuCxgJhcTJLFt8t5rT6Ry2nLj1bL6WoATrhXq9QAeejX1iv2rFTdUe27fBFNnpvT6pfsqiRwP",
  "key3": "49ACdYX29BJJuEjTG1QnEudFLPivXxn1x1LduUcLn5jf9JCL5ZiUB9oHor3gkdGBHhYfNj1v7sGhVvJyyZGC1Wc",
  "key4": "5KgSnNaKMaoTtQ9R17PRfDTumQsGsQsX1z2gEWmKXjK73h18a1gSA8rqKBd4NRXgv4yTaYQ65yKjBJfsaSs5VZL1",
  "key5": "6vMV3zebzwxd4NcCvEx5bcJSMr4RBUg6eVXJgH7psKEG9emRVwdpfHxGPeosUZC5NaMEVHySxc8LCf5k3ybv8fR",
  "key6": "5oYz3HaMq3mBQxnJVKj53E4x7LnP8RQSp3AijQ18mxFQjK4Eww2CrgpsNqENsLSGpbPkDAUQm8mfBWHa9QCMX4L8",
  "key7": "4NnpwSEMmedT6gger7qcWLuUgB6dvKoRQF1bpCG8ZoNkCuBwfFEs4o3H8hUgUW93cX9HPHfWiuJ7DYmaoLtpZzMk",
  "key8": "W3XPWVSRsbCPm67p7GH2nEB1GzMVFnmkzL4Mdm1MEWE8uzt8VoYwxdQppJq9MiywbwiWtjtVxJoYPfSJxvs2GVJ",
  "key9": "5M5gVfqQKYefpm13amtNzSyud9q4qhPNuoNdW4xS27Us7amPH7oUaFA7Swuy2xipsFcJeMddEoeoVeDm9tvdVYFu",
  "key10": "3T2rWjpiQ2s2FPUV3MbTKGmsumQNYpULRaFJrvhhqnERQfRChGZi3CMbEKWigHH3LudAqj4htJSnmiUrZFMA2pra",
  "key11": "e4g95Bv4R33KHNvGsf7rmZJ42mc519SqvEjdDki3BZKzXn57GsdpfytUCuiZVdsadnKMdT91PmHsbUH3NiyjAR9",
  "key12": "cDu47eGSqKSen4RsUs2sVCrcy8cQv7xtciyf6WhgBmBEmTUp6JiNfy9ztn2U1ksCvo52z4vw3EN5CYpV1iuf78k",
  "key13": "7ogaA7DnSvG37uoZTBqtw5Kf2eU3Jpi5g4GXhJnu1Ark2pmh767Bhzbaa6fctEcbwPzTKvCB5Mte5E3mGfv9bXi",
  "key14": "2uZJgDYtpGWKDof4or4Jr2XP57CrkpCKuQtyjfU3PF4goAb9gywbmD5RZSmrK5Gnv2Gs4zn8vzmZF91RiJSdzqy",
  "key15": "4ZasAa6tTnZ6Fj5tsqkzLCwhnCkmEXwecuUhZrZiRozo7bRsJVLZLSpUuugZ1WRydTQhygak3YSHeqsZ8cMziPnz",
  "key16": "M4XTTj6ELg9bdWuLsKVtexjS1ari1qPcKv1xW3taixgTjtQtSQJLGjRRw7JWyhNHWqyQ8738tDdptb2U3ABcv3D",
  "key17": "5BRdYXfSrU8KAFcBtMzoxYegzYUqpNrdN8GfYY2t7JmCotStZeh8dE7L7Y9WM7yr6SNvvgY6rVyuVVz2D8WqpAg1",
  "key18": "3Sam3Da9i5mBDDEhDsVjgZXnzdVDWpS5HBT8xDbqctTfGTVZxx9YuF7hfNMWTVmshyfG3faMoARuSLTNmope2cpk",
  "key19": "tbwwbSrioENKus62VD4kcopiysBwYXP5yCD5mgtJDMLxPZf5o5D9TfBYCqts6Vq2819r6LqXm8zF9yvYL8YyNBs",
  "key20": "3ubTbgkgogq9PfNmoWBx6DmRFyzTUh4PMkeAWdh6GsZoWbhHs1iJtqKKavW6XexcmivHggWg6qCyGCGw5LrzyCjT",
  "key21": "4aomspVRPXNDy2eqcYUVwZCSojSNkiV3FbhFyANnf4DpazJ6KWf461UUci3vMa3L2rDaULijp1EGQVmZxeMYfBFf",
  "key22": "5wnPMNr5cNfxw8CHvwdoVXK2zZV1ZmaEzuwNSseTtWaYZ5zKRaAQrQxjXCNfzGo9qE1qJmpikNJY5kSJcQtpZxvW",
  "key23": "4cjCj97RwEy2KKwR1Q74XpPYAoL9CHybywLRJcNsR52hinTnxrgCJzaGvmo2uwb8snLavWWiB47cUD5jLFhQjKxt",
  "key24": "LRQNVN9fvRByhRzAwRLuCWX6URbXvScTZyLusCN8mhxGUrz8PFHCFDuXJwPq9piHGAQ2TR8xxhch2xoqqGHbh94",
  "key25": "5xq5FhGQnHtHy2nkfwVzN4ry63qtxWoekSVtbaZikuWMLvmf6Qy2HYAUQ8df5TfWPhWaz4rKJvtBWB5kyy1momCN",
  "key26": "5wKZPmr1enkRbMYxr7JgYKdp16Jz6qkJXRBJZAumoXHHRwxpVMwyYFgEfy1ebDeVSMPXhXq7UdrPQHMfRQ5bPt78",
  "key27": "2iHRRxnMk7LhUj54mxPnkXuco6Up31qveQLLEnQ9PpehHGHRBptt7ogAx4tHcf8mYkaJs5L1hAHYWJi6hVnsadJq",
  "key28": "44CbtjQ7EMwZvTMdZd3kiKq2mQWFtY8QMjgU7oPXc444ZjU7QQcxrkSU5CZ4LBaqd6FgJBPBpKpgFkdxTxUSWWjh",
  "key29": "fFKsJaUGPAikgckZVGagns4KpkaAwSLQ6YumFctybWoQrByhBtxbbbwA3Vd9TZzcy6Ho6b2cqxjaNDja5XRjCHa",
  "key30": "5k2expjaMu8orp6Qav77zDVv6Rg8pq7nr8nAu1jhbbXLtpu4Db5J39rzArVyrQ1krcCqX4v1pWJPvpMNnR7hoP4r",
  "key31": "cWkGquUL6QGz7uYfQ5TVdF6RgWozUpeEZTFvcDkPnrddKdDZBXEN24nHa299mc1PeRodcYqw6Gy6RwufpZzCc14",
  "key32": "46exjWpoMfBaT9wPXexBCqHaN9b7gHX1xYpn1QGzB5ooufiHPWwafJyETShgbSc1aCWtJm8KywErd7mqUzCsA1GP",
  "key33": "4FYjUeaP2DdrVh3NeAATpVHJVx6bGiozs3XZkREAGck6AV1CfgDKPWDRgY9LFePyLDA8tGeEsiHPDBhtthWz92yR",
  "key34": "5pxSZ7yos9VwNJ6zDCyXbEYoztyjJdb56m4ewLPGCg78MfEmYk6WtBDqsCNJMmXa3xuseoC28M33uAoSGxSXkz4u",
  "key35": "NfD1P5ZKS6TNsz5o354VxkZUjjzWt16kfmKoZG6B4RM1TQktd5tKCBFGefkRZBobQ1YnbxZh3dMC7cTvxy9iNi4",
  "key36": "3m9jXVfSwyWiMP4RXmH3wcN8i4m3CDSwCuZ3rWpyFA6mqN1MR3rSHVvjzuWxYYQNCUr8iBUJLYzr6orUUTgYXaxf",
  "key37": "5D4r86V7C1yVtWJB2zmbtLzKFqcMau4zG6ZYJquMh4JvCmzv7cSvd78GaJr3v17cgLWe5cb1jctY3dAEKrxGBbCo",
  "key38": "4KtoMmgcmMDoZGXCfFdRTqvwB97Aaiy1gAQCP2hLsgLQCwdzvcpquWwfmUYDVCsxfKTbV4NyAxX5Pa7i53fSjR5M",
  "key39": "5LPTTz1JdXELcn9cT5BLrLZBeoSZjLr6ofCsksV9VNFwcqoXBWKEnfYggatMoSqpmd9fpJBSvhgvdwHzJjGo1fGv",
  "key40": "2notGkuGHWeEM3TjF5ya4sbvSrQnNJ8gL71esqz8YS6Dq2MSxtGipmThsBCtKpYKSpHaz8nMHeMpRNQSC4fX6GZB",
  "key41": "38i1Yij3QttteSPvyWpmpN98dtnQNU9hNr5auyDZsxmrXedVe6Lhi4r3ztUG62sqh3qB3AJConqYuMqv4foYCpHM",
  "key42": "49eoH8xMkXWow6xabG6PDn289BF2EGm6Tvagafr2Q2B2P7NxEkxdY4UbGyZRfJVrjXPrp48FgSfrnaS5tZ2nkktV",
  "key43": "4K2vDU7xZEPQYSewNtGYNd8PVR6o7kxuJMSnnkok7MamPbd53PqxzPfHkjbh6gfeZ6VLcRrbVijNUj2iDwZFDjU5",
  "key44": "4Z3ffviapHF45VmB4jU8QZ2Gz5qvn1y4mHuDNdrrnYvYaohvqmJSMK9EoQDDoJyK9niswTkVBAQegg68fRyEBjj4",
  "key45": "bepHg6SKYBajNcS9ZVM1eGV8a4HtEgYr5DGVscmaPBNnhh87vUYsHSxrSqSXfDe18KxXiEf6px98xagAiSGBp3C",
  "key46": "54Bipa2YLbSStfSUuBQQWbeXDvysRqPPsCXLULYYnprKmp4LTP2GJcJC3P7qRGHuQHPQTCkYX9fsyB17XQ2zMs3B",
  "key47": "4Kw69RJ4fqAka3fDqfCKCjDzeMin1VxgLyGpvt11371WpP71ETWP1kDPzhsTqgXXwbHYE9jFhg9YSU6Gxfe8zcaL",
  "key48": "27W25XVzgDMwToUshjYGySwQTV55ihbBV3T2sEBppkJqkCAnqPbb4onFFcZQ76XLNEQqMAJ15DiaYW8BPWD3ES8C"
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
