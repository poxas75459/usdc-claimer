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
    "268yuSaXptCmTgtpasn75cjMzK1peV5BNQNs1V8LDtv7B5PrU87KLW8LEBhD3SGYDJ3SqtViq2h3J66NncyQCKhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k8CX6ccjgkUXbBxMrtZkwAX89UyNqzcG1HHGm5LkvdXRmqD188wc8aytnU6QnA68mLNGpT5FkoiXZ77pkBqvsai",
  "key1": "269VLgp9pmSg98qL8aQx9R1gatHhZw1yTiwGwKrRWg38mvVJVYwMsr1m9Aou285y7b2e8yF2EVHYn5Ey8M97rYsB",
  "key2": "2HPXFj1A3aVPjY4rWB2LL5SDXXXi1jCD6tVJDxLGnxAwJgSnVZgaecZABvdbgF5eCX6SNA8oibWEWZk8GGZPTKvJ",
  "key3": "4obEh3dE7S4K5aopfZ9hUAhnRCyVqiny4PbYeV9xQ8WtvXHrVsM6SNWjYiLGNABxvpAZVZyuNBUZJj3QvixeF8Xz",
  "key4": "sJ8L9fv7d9MBMUGhK2gMhDEUJd3QSBqtbeW2japj3LpMu6bhTQPfpzyDn8mNvNB8dfLcmg9xBg2oKhtc8JqgXUK",
  "key5": "66UhyXQ6kYJFZ7y8spMVLnfjHZMNHf5vmsNALeMesv8DHHpEoXvzoKtrpoEQo8T9dy4YBEidECsuuqSLyhK4AbpR",
  "key6": "6656CeAnpKSXjEqjLuomoJScFtGNJysHV6brqo1yWoS8RyvE3TXtywrt4uEByRzYkKG7RYh13eGK9Lv9f2um1qL7",
  "key7": "5Ng9APh23jhjeQSNo38UzMZTQdZj9AtqWgUFCbtV6cHaR5oF7AZWuNGcofuv9yJCYhWAg3PwibiNHDavEKybe2r9",
  "key8": "3iMCxtnCGnR2rt4RRXdBvj28ZtWkPUjAibMsxZuHj6e1G2TehFKGMtddDRWECicWSS4obMns4PxY6oa79Qt1RhRw",
  "key9": "2D4JvNrqKHZptVuZKFtCWkcAGhh6KonoMU8wW8KQTpPHd8yYPmpSz2mNihiC8WcJUGPr65VZkWw3KxPdGVQrS1Yb",
  "key10": "4W1GJqnpQDNjCsJPbZgQZKiEGhvSv9GDZLkAShvRNSse4dyF2MNhHgQK8fDxDARd6UQUKELLXsmmJH3yGiyLbr1p",
  "key11": "5Az5jnTdcJvvJQrktFouCTMEK6QcXpxwvvFSVuX2au837q67C1tMnAsKJ2HSva44s65tPWHRyak6xDF3thQQRV7",
  "key12": "4jajsTaUqvLfHSt4Dv7C1q5AcqaJCLu7rJLBcPYSgKt7fTaevkftHS42XA5LbEiRtjbM29gpda64HwTeZgUXqsAB",
  "key13": "5DEj6FPvKeNpyRwpf2byBRAchA8Feg3HEF9RwM8PoNVd6N34cNMu6zza9th39VWMKJdi8mzrBJ2EKzvZBiCyrxL8",
  "key14": "Bh99LaVwio3umTe58wax4L5bdfHNeqtQiV2sUCpWqQ2QvnuoSH3sn3NxHvn64Z3TeufvVSnn3SqnXKBzt5AiqQg",
  "key15": "WZrbyRADxJL5pxtPKFJePF4B2VMEvVRkBJXXBEjRRrYeR8KjZU4z9mNajHBidJKemG8P1oR1hcSfUwNShSQ9Agv",
  "key16": "eFCH8943qwxGNFr3ucWuWGstkSyTigmVs7kUgFer43yGMtbmm2CFj4vTs4SumNH9euRSTNKBTCP5W62tiAkDxzg",
  "key17": "3bF7FgcmEi9qAFviZEfAXU5M6EBX8CCorQ6i9PfEsjmwZ5FGAH3bvqeg8G5qwtTZEQmcDUfPVhVwDSSVoD7cpyQf",
  "key18": "3sZBWqHx57su8bfPq2W6XQfMt2qBFabJkPNyde3D1Kp7ENPHa21avvhiYsmNJ8QJ1mk6U3dXGDsU5zJEBhYKM8kR",
  "key19": "9xY8s9CqXEwXCWKSbrUBRoWDnyGhJn44mvUUwpacEjZtNQYABC5BZfz18UJj7ZS99sMSWcMXPp1UB8symY4wjXM",
  "key20": "LPA4LGAsmGAUQYix2MVsz2MwbpsVuS7F748ZigfuiVuGSTMyzsbtoBeN33cACqbtRCYcBazr1P7qr7HsXN7vyNT",
  "key21": "2FHfamqiD1wxqSLTWvqGJ9BxUJZnaNSvLsyXfdEEgbrHvFQpHUDeiDKEYEvwDPh6KKvz1ta5Dra57EqjDxdVnVTk",
  "key22": "53dooECFYfmSc5EPJ1pSiRJfLbAsQeDUhyCQLbcjjf1nHmoPbRExaC2Az3AU1ojzkyb5HvVtRZay8Z71ziNwaqKS",
  "key23": "3cPeoeVJhgbQaBioB4ctnmdQn98TCFjz3AWVohNP6USaHdwvoaPUcLvkshiuJz1qJNuJxrBrgpXXChoEMoMY29VM",
  "key24": "5srtLmjkJoHjfYvZQ8DSi5bAqfFxt7LuXt8HZwEah9yAy7VN1DLYcbBx7F5AfGBo5nydZiAXchaRGTb2uEqdhRWg",
  "key25": "52Zth5xYwpjqNH9ciJfH5jTPsXNDjjoFynWfVmSzunQ9LjeMcKajxGAywL5k7xtzENviNdwEq73yFEe2EsVkoeDZ",
  "key26": "4UXSKyRuMi4btLcvfWppYtgwc26ZyZW8HbGwAz1gfnJ7hJZusUKcPrH1mgD2pt6napVLWF5mmcfb1F2z8NWCoWhq",
  "key27": "2hATL676tzZxDWcqewcg7Z27p6rsy9Tvf1UE5LeFkkD69pj2BR75HvQpGBy4ycXzHB8HiGhY1AS6pB9D4dBAeyHB",
  "key28": "3TEEwFgUCEazSsyFYS53Tb4qzyKpJYPLVZwh6YADFU9EGQ4DmSJE1NNWtAZeXZp5CEngRsrm7NNYdwbKZYSXD5QU",
  "key29": "LYbX1CGF8yrooExGWjerkb7QrgTc35yruNrcipB4zgCtupG5fu1sbXmBLNveqrhRnUes63FH59a1JyeAEqeh55b",
  "key30": "4QT6HgeSjBUnFCKw3ZihsAB7RZbjxV64DGv4AcSoahcTockD7og13mAHcXP1vKyERBgW5ZwFZ6wPk4tATKBDSdSX"
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
