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
    "3X6urpkvnGTiH24Lb8sKGekNLrBcTaU1HRXDpj6aNBz7WrFXP2mwVrxYvnGxeWx6Qi1s8pfwQPeziPC53MRZtFks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34xZ8NzeTtsMy31M8cjyWLEdVtuDYbJszzrfKKKKtrpn1vWbUEgsbVV5V6qm2fkhEusWBFpQhoooY6gVY7UqJKSh",
  "key1": "4F6SYSDNw4xwmHwRXmiypyikFBZGaFpps4nirUknfsC8E6TQcoMwf7aCGDLXdqJ7nevKu7pyjrM9g5Z96tiumsja",
  "key2": "4MDdAD73tAXq4ciamn2ka2KF7TrcDRxQcibmx1BGioku38vngD8GaT1X6hiTw39VGpv8eaUuJdW8RWJfjFhoChpb",
  "key3": "37B7pMDDiQTDUGek23H9noMskQ86q8RaKbqn7x3DiyP6oaqsW6GzNk98Z2q41kyzCNgWjLqTuuEHEJcoARMdhU3o",
  "key4": "9xuA1nhn4Y5jY17NVjUX11CfCpoo2FRUbWPgGAvcfezpW7f9DoazZ28myh7Uo1hrXQVFupKAu6kh3h2J5VyxTb1",
  "key5": "4phEA8kDAZt68b9JF8rRg8Z61L4qDvKSpzzoaGopiaQykTYKeyFCmYB7prwk3Kp7rfTaCQJkh863dAvNdu1KfKkg",
  "key6": "5hREZNgZRCL1G6j2y3WhZf1Z5NxAF1TsLHDoXkHmT1ASjd96s5kGoE4mEGmEYMxSMmKCQBe2chazLowri6nC4yQJ",
  "key7": "fK21ZPTff6caGhjxQmAtusLo8Ye2SYgoP9W4uJ7yhZ5nBZk5uXpmfTfQx39v7As7q3vU5dgsJMEwWHWRMUZSEJc",
  "key8": "41w9dVANyUYJXEEU1cuefFdC1D2uARASchfhrcGVDFp7stnt69XpWTW3QipvkSqaJmASSrvmxrrA1UktVZEjrreG",
  "key9": "oSkCeSDoHACzDeksTridKUSpsfmXfk3SRjF1aRXz4mieexhfdpQxqhq9FS9tnNC3FGoReeo7kNFy6cSCLgjMmmw",
  "key10": "J2X6jz7rTM3D9gH1FHR5Gm1sojPBkkBXUsaiWfnV5hEfgqMvUBhzjABsaisekGxAisxAX71TjoJVk8KXWm13Yya",
  "key11": "2N1LyfYAstC1a9PrKn4encKi3H8DNqpVKQ7VHgwUDqueZxceBwPbamQnKLGMqxoTQM5XNczrBRVkgmewbVu9jCpN",
  "key12": "aFUBRY9mEgRbP8BpFCCuzrDCC9KfYq7aqhchMupJAafCaEGX9kjtz3gJpaukX3xkMu8nWdB9rHiZBqFko9JGzit",
  "key13": "2xrWUUR1PVTwno37juqW18ARuyZ6sJnqbKKNPi1RXJAEWN33igXeZZL5vAjp3WcEBdWJJujxR1TkFs9XKGtoQHpu",
  "key14": "TC1uKo9qMvNba6ZRiVNRUB9wGhhVtsDeYEHoLxk4n5J6L8T8wKhCqvtFnLo7EB38RhMtRy1jwtcSroLJkEDLtek",
  "key15": "2PqvjVxErLmQhM6B2phhb26GF1kcnP2VEgWLsaMgisW2Kdn8eux1UTLXDBawxYhtestd7tuuvqDQmbT1gveie35h",
  "key16": "4ESgc5WtBccYfD3gUFGGaspfDzEhDHzPLYvm7EC6hNyxhpNycbcYifCEfcpMiR1eA3s4MWshE4HPiKguDqbVYDi5",
  "key17": "5GVRWKEHGvijcvxCPHXqNay4KTDgR7VKV2RexTnuzfGkD3qp2duC1myuTSFzGZUkThvA1s6QWBDwouXdQfJtD29e",
  "key18": "FfyG9N1AwjQMjEex5i7F7vRNBc5JcscwJ2HmxJKozdwVfPhRDo3P6PE98nsXnwMSfobcG9MznvL3GU32tP1zJqP",
  "key19": "4iPC4iq8az8L4DwH5uTtBAZ5tnhq9XnM1pncmSbAj3Sxdx8WSxSsj3cb3h8fbshVPHUKeafJXYDA8weA6e9mvRA6",
  "key20": "9mkzwox4t7abYL1YyNoD1mophgwSQvwf8kMMNQGS2dHEkpEnE7StMfkfgLZfCLwnCZPb1rGCDEgzMMApkRYEwqh",
  "key21": "5YkRU6N2DkkLzWWDBdg45HRjFAzjuwaLPQeLMMBFWuBaTDSFz5XSheVGHiqKULdhGJd391QDnxE7MuEkg4Z81Yta",
  "key22": "Mw1Z9HDRWCL4JSMYv5oy9JhLQJi3JKr3VLVjCStp8G17P9tDzLRddTryRJMUUFnsUUofwENEw2k4EhedfsX3wTJ",
  "key23": "3YaZ673wYdJoj8mjpEanHDF1or4Ag2u7dGczr4ZwpTfXeNGtXQn8DMS9q15DowTSrUqxWXUXNUo8wwgmBGPxdGxY",
  "key24": "2Z3ucSKZxyQdFRNK4U25TvyoY7rg5GzMRyZgVrXQjx4mKaYmV6V3KDGCgBWM3TQtX89exQtBdj1SxRTbFaK3oP29",
  "key25": "NgsmG2jCBdrdvbSYKt1vsuMB6rFc9upWfEMwtknxsMYAQ8CavVHmn1S9x2H2ic68fcYw7yYRvtQHUMF2Ftg369b",
  "key26": "661B3Q7g635epEdQXFKXPwf98bdc4LXxHKC9DcNxrLp6MbF8ukXiKKShVwqXUX32mNsvt1j5CwhEAPJYXPTHMLwK",
  "key27": "2yNgBLqx2E14Z9JMrnuACHtE7NU9HZBYYSUhUBG766c8xUyCVZxYz15Gf5zywyfkbnz4NfaajZgtJSKRGRStVPNq",
  "key28": "4y6CwPob14GdnEyFU6ZWkR8PRwisy3SYGzFvWCYXyEE7cJcGqtpWHHRtqB1hgbue4sWjb1rRoVYrKoG2D7M834yc",
  "key29": "L6L3HCCcTRvXzRXQVxhXar9qMcpooYQx8UVoQRbLy5FKYRUbLHotrhnmhJe1uGcFKwX3EybFL6jDV64q6M2Kfno",
  "key30": "2res6d3VPiLjhLkUEGTyv7hh8T7AKiueyG4hbLaJ8M3VcsycQYbVNiBHB525ighUZETVHToYAVmw6n3f1C5uKTNr",
  "key31": "4FpdTE49tmPSzXn1hfM37SoL8hGCiUDxQD72B1wHVg48qycXEexb5Fpb2nuM6DAVjNbhRPLenXoY58nYjyk6zJ8E",
  "key32": "3R3G2soRxvSXJKHskougLmKcqrc1Hbgby3Eoyc4D1paDepzNR425q2oTi1tWtZinVZCvLF1bMa9vZgtm878phXHX",
  "key33": "hhV9j4uMx817iPhK1HnRzn1vMo925v6H9j6s1RU1wnUZxgZmybbUGY2AsepbuU233qzBQJVQ1bAqzbdu2Ttv5p1",
  "key34": "4owUQXy3GArSdWBhWYYqCXPR77ahReh1imvkrXnvtmNHQDGhPBd9DEH4ZyyqkYqQCoameAYRPJmUhganN6CuX6Ha",
  "key35": "3nenMGCRHWGHKttEx3MxPWaCExFJgVMu6yJ5b2T3NY8mUjvhwAtQQX8dGhToXF21XFPay6Jiic7Uf4NkHXXDiBtX",
  "key36": "3f3XaDd2PDfA2jF1W9TXvsiphyiuzb9ofdcWUPwh811mdJT6MMhDPnYtNcoy23ZTboau61gwHvx5HbX2PYLPHBcb",
  "key37": "4jP51CSJbJ1g8YY3uoDuJ7BtuDNdXpXD3DR4wfWwSVBJ5G5xdn1XSFoQm15bp7mw1dGWCdSJC6PUQKgV7kMajkfM"
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
