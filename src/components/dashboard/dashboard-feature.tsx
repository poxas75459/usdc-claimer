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
    "xXKdbqz9vkKhmg6yi5tEpMbgxHWwyoAuVqm9nJWvoZ42oakFe5i4d48LTGPZ4zKuS8E9D99BUmbaRtVBxa13QJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8KwAGSxdkt6HD3aWJo8gnaWDKqfc6i2UiuSP4zdUU4mMdHZ8jrwoNgGgJyMPNEbwLvyBiV5ezzK1aSL9n87UVw8",
  "key1": "3zLZCZ2sjkb9Ui1jLGRhKfWTWCtbnbPFQr4Ahs2oQZgZPa2KRum1zTKK7NZcnRqFfQvPrt69YtR3rGe9dgqVFeqm",
  "key2": "5ffbnSxs1oQhn68ML7P1ssWeSqJF8newp36oLYkmkb17BhDQ2EaHVFD22fQoacsjpyAL6oUPQNKaGKoJ4odUskFU",
  "key3": "5NsWRKZiow3SNrboej2voXXKF1PLN4cpTKta4QzNrBZ721fwVpoAomzQdFwJMdwTaQBR2oWZJRAVEeqmbbXEFSdk",
  "key4": "55GFNwHZUtzrGUPMmSChuyMHYyjrYxuxdNW7sqyiu7fD78Cim4zCehvkU7MNV3vAVZ3WU1cr4NEaqjFMK3ZxM5a4",
  "key5": "2rEJ5VSqdkP8CdaXgdCDXd5MgMBcxeviuaZ2pyhEhwCvkeEa4sx7qVbazP3vnEJzfirzk6SnBoevB2R14juHdoZC",
  "key6": "3oA4Ng4Q3QUD9XRjwSqce7bK8xeZni8wj52acgAg8dKxwTQgz2sCRfaCTtPZSi96bWxHfYQPgP6DevtH7Uj8sFSo",
  "key7": "22AkqKLbjQoXn3pBUJwZ63Jv8B4SrNN5V4Y3NNi3rrbPyo2uvxbyyRwdS6Y52RqGAk3sBf5riDhD6wK1ciC7ZbHK",
  "key8": "35qZS8VrkxDjxdDavps21bEyuyo6f8moE3fwoap7HuM3qXkQyaCed498SwkKMqQMXE8HBKv17YmqadXUCRZaKt7L",
  "key9": "2QEhvwsrzo3cHp2u3QdmAn7jaaPgMrbGyGX11mK4s6iZbEUjvcujxYyj8DGgmn3QVNSvEZFs48qrjArjoaNGPprA",
  "key10": "2jp2vspxjgdsvL8z4kk2TrNaU32jZ3wrviSFJkegLBbjj3rwkg3PMpVn6QHdiyqv2jSc5oau2n2uPHb5nn67Y9fs",
  "key11": "46rmK4SeN7Jm7R1iRTV49mGFsdbC8Jcdgu5BFjYocgvQ9mNe2fn78LiDrCJogCAFnZGUWupVJsAN4dspzMYGjyV7",
  "key12": "4u2D6TqxRLxkASu6mTte174zkqGWdciUtqp86d9cXJYnqFZQ7x1GWTqmxmF2Uq4S2EKCDf4kxxtrTqpv8XDog8Wj",
  "key13": "siqtj3rU5iWNA1RoEy83uprCvG9qwp7Vbv6jJMkTZhSKDAs8Vqc5vtkWBgcefMPecWiZ5K99nBMHjnqYXYmap8a",
  "key14": "5Ei7UyUajAe7WWkfrB449D9mvvKBHFJkvfQ7MaUFqoWytGynHT9e6igijoddyaWo2xabNz2UQLXraKWcsHXywXZr",
  "key15": "4J1LM2ktmjeFG1jb4P2NQmVeBouKQJ6mub7PA5YgToT7zqzhNNVFQR8F9LBEh3sbH5pKka8YYwy9bjpcGoMVboRg",
  "key16": "5HpxJdkFKUHdsXzeWB98UJnjKDvSQFS5YgYTfVAUSBLaRYsG3qG4fSAueyfsBGSiivpTYtNXxqXyvy4L4Qsg5GUw",
  "key17": "3py6Rg9uNdcPegSwG6czBBBYhkwUXcANqqwtiDTcVY5ZVZNd9GbXGMw2ANkPhynxhzyK9eH5bWRoy6i9SMzgSBQ2",
  "key18": "2bspmxHBAcYRubG9anhAaLMBhiUiHTrohokHQRuvtFLwaSuxYz4xvYiwtDzND2N8wwRbaYi3fbwF4TdcicGVsyKs",
  "key19": "4S2s8uaR1vPBwaEefjcU2EfVHFdUWnh9HsyJz97SyMYbQjnGaBWcLAtWps8A2FBp5e8QJg3r6AB5FXiLCyXrohVw",
  "key20": "4vMnxUyhKd4fKXcToCgMAfLaHN8Ecp7ChbKBeqCW6Nuqeya9Q34gC6T8KCsu7h78qAMqUqQYLuyat4Xmqb1UJqGU",
  "key21": "4xJqCstvX2GJBJWcbd6EGF6udZxx9CLgeVRzTMb3Dkyj215ZLDaFTHFyGMqLdZ9jkp3mMRKqUjUoa9ngLJwZ8W4Q",
  "key22": "4wzaVkfdVajLVTxcK6a9w54TZVFcysWHxah3PPxKjJ674bvhwcm6usoWKz7dxdnXPiR6xm8zFZ8R9MYKxwxQWnQy",
  "key23": "4gGeWm1eELif9BAankNQmRmj7yXjGQGmXKdZgnurRbJg5HRAuDYi4MV6LXKunZLxsVudEfqKz8N84EV5598jESAU",
  "key24": "27w8TN4SCz9P7M8szHEPcjsWBPpoysN2S6BustopVDmnMacgMrsF4Lzz1HXR8hECMcBrJKoHs78qq3buEmcAQ4XA",
  "key25": "3bV1ruDkgpQFPPiFShvVXzz7x8MCdNmVJ1wuRowPzRC9uokZAFnnLjCNoLejSymtRQ7j1G4i7SJyDAndbPFX8DFT",
  "key26": "PxGZas2h3Dv99GCkEiJDAUyP4wnatLoWumXxrny3MWxdTz56bru1yEN6m5TJT2e6u5g8XcG6fGUMTmXbrZnoCsH",
  "key27": "2MLzjjDmfojLAzYs7ytdjmnMTeYLGcYuT1hwnXrpNHDN24rWTudAgPcjR1rLm1MiMvrYywipsNiqLs3senXAg68Q",
  "key28": "vVGxQLojEQfaYdYaXjiBgPAZcEyH48e8QzZxEXQ5e89ZzzP4PYbZ6jUD5gXFtc7YGPEu92uqLDBXzCfEdCtwveL",
  "key29": "2kCYfrzYuS6xL4LdeHUxi9GL4gpvybEkxiQR9ydpDKYZwKAiv5EXZ4jA8PTW5ApPdC2NfCBkL48JoaRCdrj61d96",
  "key30": "3aoEpTmSG9CKxjDxjfSsp5VAev8bVAugk4cpSAiwkf7CbnbyCuyxEwhDKChpvn8q8EpJd64prJVVQ1VpuzKf5J1Y",
  "key31": "254roq3XQjy5tA9Bz11L5YXgdSLgSxbgVUWAbMbqNbxx4WXu8sKEbeLo4CGdZ7cpT9jbo3L46A9fXLgEmfEEKosF",
  "key32": "rd9UJnwqijcunmm8XkwA5UiT83j2mQ17hYjH2YNnjvS1HmxmoYAVaJMYLQmQPyveQPrB4KZZbE5h2AUarr7HtNp",
  "key33": "YbM62WmZHLcMb8Wwzs5tmu2pwtXjB5pF7pBH7rAUutTrEfyHPm5o4CJCeDCVARRkfJT34L7cLsLqEBZoES8NZAH",
  "key34": "4Uxk8WHRgnV2o7CUCsf2JWip6RtqUad7rgpQLDi8F1dWSdH2Jpum7Lf3QjtxCAtosqhemhTRi4BSKrdsAC6145th",
  "key35": "j2R5DuXw8aKbaVCV5EghZQ8xp6DpCJVZPDq2Xw1JyHf53KNLETRZ1XTErRNcPsnXiDAWtiwcB6gnYvP37AaJrRb"
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
