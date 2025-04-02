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
    "5QecdFk6WxLAHbwncqu5XKUwhuiPXbVXAK99CddHbXaYhu7n24kDawxBGb4cUrVro8rLvN2FEKzLBMp2BAaMYmB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BYL22vdqfkGYbKXLNZeFR5dJA4cpgM7dziBqwnXddeY22X2bQoSw6sRhBtFKVS4W9kQFdPHHLNfVRhvcs6y6Qgg",
  "key1": "34p5Dha8HcfxkA3yo2R5zKRZ5pA1Qjs8rGvbo1gqmCuEkepcxagKp9gGQFHg8VkgY8jvuVUDoUp5RPhPDfECheVU",
  "key2": "oCdA8U8MQFBJ2tj2E2nP7EEZjNPCSsQZjqssWAhTRY2GGU8JdbKkHtDbAgDYjn75LJgTKrKyAps4LFKFSBvN9xn",
  "key3": "4qXv1ZDLZ6k7orudtsBYMcoNv6L457QNFghQCggbaCSTtKtWye2B2QdzEGXPiJQAHjNGbm1a2GK4mqACmN8gE5Af",
  "key4": "48AYNRtWgynkWdydFNqDqZKryws7WpgosmWMDmVaHRbeiLHjnk4DPvg8m9ehqoN5jcPPxM7Tpf1bTfjV7jTFJmVv",
  "key5": "45fpvT2Pn6o6ZiveiZ9aCrYsKYUihkcAdfRzRCKPEK6EGajLFTuKWhrEmqf5wdEE3YjDM9cYebgnY6h2b9vZwBfX",
  "key6": "56NqrJwGeN9fFFH7457VPYyVPF9r6LWGSioAy1rLeZve1HNTbrG5Wr1w1r5x1s3dT99HVyCChFafNP33kUAgp4kc",
  "key7": "4dwv8yNsVePJe5uwCMLeET6tVob24Lxn2d7fD62YZHi3CaQsG68DvAJkfUfRLUXxFertqyrisY6Sk7XX3M4UHXfw",
  "key8": "4t6aCKoeKQfFW4rwXBzFVwkzKjTMjR7H2GUhnGzqN5GrcPtrdMWiXPMBB8Ac5FeGHZTEssUVGWkejf8bhsCtdCwA",
  "key9": "5sdv3JHCrArCgJWDCXBWPi9M1oidj3ehMKCyi7XpcyHsGhcA9qYpdaybx7RMZ7PVii6K1bzHdL2YpJHnpKo2aGSk",
  "key10": "4NJBjtNYZbyaRzMaM4CTvDii1YGMk14wowC1DnXLezrMpqPQHVZnmNVfa6Kw652qk2Sv2jJA4JzAoPFD7aGYCiTc",
  "key11": "3872RNyDqFMhn3UKuYhuC158WMf3QUpNrNSfYCWnfSUVVzYCT6cfEdmkousxXJ2HbprAnuBhCzkSF7JBGVgHrtSd",
  "key12": "3cZf6iN4woyWVMf87MMy9v2rpbeGg2g3F5fD8UvN1bxtoFEAfjBnpCaW9wpdgjE5zF3GU7uWaSRDTKyczJYK7i42",
  "key13": "3Trs83iU4VEE8H7TLSY2XhATQPcP5tMvdyCEGAz1pC7MVbUuAsh3gMmoixaZntRvjpYiaxoYvh2oPPQwGSrT5bf2",
  "key14": "4kzLThaFZi5gkZpqUg8JjVBEbP5bfWjNCpzzXFNZV8wpsHwAhMVzeGLE869V84NS5MyB94K8qm8mVvWF4npPSZ3F",
  "key15": "4CxmLuZSQixce4RQgnnt3kHUmoo4AKqs7ss7nCamerhSou56Sbxfu5qfY7LXQUx1LPLrbjmCQ3dmKeX7zPJVThWi",
  "key16": "4SafD528P6gJLSVvHCHgRhkLcqVJEfc4NW9Q6YAY2QKYDDbDonDnemeniKz13mG3Tb3aoxfAhY68gNeKjJwZkMka",
  "key17": "2SP6mge5ydCPXLX2KYRzDht6wLRmmEDoNPgZ8tdeZXE9kKLCDVPSXTTB6QMY3kqwrTyRUdDAeKRfkvpHmQVWf7Cm",
  "key18": "UJ7psSNYUrYTJM8CyczvMzjSjZ1Gv2Az7cFriWjnPJBKW9PuqCwpEEEPWNGnBv7pDHCm82LHYwF8jXGWHkDujMK",
  "key19": "5vjT5MscaS4SnWnCZz2pbgt383AWZuojy9BbQoMCyYTnmCCX1kU8e9YE9uLue3rvTbygjZUGzTSYVCtWTjgqZECN",
  "key20": "3MMTsUiPTU5PYoDs2xnoUiMFki9UZZxWwnft2fPFEk5eEyaJUFEkyZvwAJ6crQtgrmUbLMUpPpAVETjUznmCsHzb",
  "key21": "2FP7CbyTDV7efSigDC1NSwycofb7ETnBWE4yRVSg6SuELBeSTFU2sjo2n1PCqyFSuUbP4eLBKscQqXzVcYps9pEh",
  "key22": "2wzCwRJgtxi1MURr5N8xMu4E9q4sV3xR8mGtLZ1bFURQh48uz2J1ugSiwFGhP1gzNJfNheXDHaTiV67ZWmVtRuoP",
  "key23": "3nAoxX2rKcbihXXCoVtBXu1ojtniRrz7iW7m6sJ8mYGRxZH3ZZUCN8kCAUy8pdaZmKbWY9BdXCPHFmsqzdaKXH3B",
  "key24": "2Tc3uRNXtsssWqcxcpbGcX1zeFmhc7184CHR4MujvXHdmzwjs5m4EPKJ9EkthhdK8Q7221e1mmkMyNrMHVaiYi6k",
  "key25": "27WNf5NgR2gwAxzihPxdU5Qt1dJGs7GaUaeMNDZkb4TSuXnVXjyhbbcAnVF5aWVVCkWbiV7EjmmQnjUxS5AxWEv9",
  "key26": "2qtCrHCDzHksMqBVog1S7CTEPvfhshQ1FiVXXZtZGUTZ97xkJ6ZvfWzZZTiwvpGe7XmupVzBau4sueYoeTB877s5",
  "key27": "2vxjj6rd3BGBFoF479f25m1dg9eRkCtWtosC2o5U2zqgBngtsbYzQZGaSAa3937U2BsxD9N9VtmcKQjn6qELXkzY",
  "key28": "3rqeC5EGR1wL6xPH3jk8PYaLxHuKbLboA4dRq9QacYZiknQtchjUAtCFZTGyW7ZPCVWUUBqu6CCnshkpvkwNz32R",
  "key29": "3cuuWKSjFhDmxNUswiv5ydutnjoucab7hRMsuwr5U6sb9toRrwGUwb4av7FHpkUkCSn2Bj6M4AMk2toHzBnH3zvt",
  "key30": "62BMo5nV12ShMDwmg4WQjfi6dE5cEE8mrC9i3nnjrC7N11racFDZJFi6oacs8dasM9K8fHmHivnoAt9ULENaQN4T",
  "key31": "mdcBg4EEY9K5kX7yWVkM37kajiv1nhdcxa4wTsLL5UmsH7hXEuTco95XH3qRcvN4kx4TLbYba8YqfyRupJ7CZWU",
  "key32": "4o4TNSA4MDNJi9FWhYeS3qhE9ea7jTmaZBbnWyUkjyt31wsmsEJwM9TLTj6VAht4pd3hcmtnAhaAfizPuMLYHn5d",
  "key33": "3tzyqFt9LeKCJLE8s6Bd1ZkdUwXz82jdwfAjfMd63mfSrmRr4h8iW8AWWitC9vAM8yJRVGoL4soCx9dzPwuMa4p9",
  "key34": "3YyW1v3KkR9jLv9jy2jpAJosfoMoJ1XuvY9oWLGaEhd9r2ttocEnsEa5ToRVxMx8YUpRY1LUiu2F247558Tdbwre",
  "key35": "5kxyaamGFwrARbrU62k8FgRDNBm9QoXWuZLLARYqZFhRFeAHoc8iVgh7DewiZ8VXcgQHCfE4vDq3trBv5x2yZ5Z9",
  "key36": "4NtwJEQp3sm84JPzxKWnVjmSEwGCXSjT6U4xuqMFCk5cfYw4AJ5eWCjTCeu5drU8g5zkyTUXDH83szGpsXFpg2Vs",
  "key37": "3HeUAFQT7YKAR2WFb7K65PQNuSQCF9mQ4wjppAwQ4ahLpG87PnZc55BJpmgjV9eyQgpKRvcZoFyj91bjLEY5pTLg",
  "key38": "Au66XZ6EsnAZW1expWaXgd6ShJZX1pLUrKMk3H7teRx5EiKqu7QwroorYsombmtvyEsiBrZGXTkg4fv9bhZmdep",
  "key39": "5BWcj9BP66LvNsTMKFsPMSWH9CZQdhTyhNZQekZahTJn8mymHd2Dv9WK7b3CQtJz5dfAyUzGyZQAREGec2QgajUE"
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
