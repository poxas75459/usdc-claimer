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
    "431Dv2XagXfQY7VinUJygbpZRyxQkfzPVhgt2xkkP1FyiydxdtDeCDtFStJY278aNU3kwKQ5NMw5xYwamGi8z1sb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ziDFdZphsRT5N9uUu6YVcg9CC7HNWXjFv4E9v4kjhy79cXcZKpsySpu6gwTNSHP1JLWXL69G8ei18GnUuaRHGpP",
  "key1": "W1LYrLqnkfi1yrYCV8ppLxY5DULbiQxV41zyb2roABWeTQsviq2S3464mdU3KFoWYW3JgpqzPqgZE3bC7RUyAD3",
  "key2": "4TZEK5RKuXt59mGtnMEqg4xkH2L3gcU97gYc5Y8vDke4Adh4ti1BiqHLXqXe8g6cGfNFqoctAUisx86bYpGEFSx1",
  "key3": "39fWUQfxdGqwLpxh8j1wZqzKUCi8CmHj3HuqLR1Cd3fssprHCZzdqDaGrKjDPwKvUcR4yJGQ5TaTwUU1Kx8WSRqP",
  "key4": "65Xb7HU2B5UMp15qkXMjv5RuxivsL3CNUUmXKDGDKi4JxLH4m59EuZVtfWNPaBEPjkmScCjjbHSk1K8RJKExeezY",
  "key5": "4XdsLP9Gyh6pgLuq4zsxGmd2nSsty4wzv6rqd4xJjAnoEeJ1RuncumhBXkn6bh4UwD3CQjpYTCCM9oeL9vq4ENve",
  "key6": "4LgqJHVeLxDkJLSZdS6rjoUDcV7UFLCMft67bpACwD9Wc2ujqGpDmHhqQ4Ccrem8NtUEJEjrcq16iMwEn39BvzLT",
  "key7": "j4EKzPBoGGtWvibTHzXoAhZXhHvJXzdzeUC8Q62pZD84PL8E67Bz1XkPCnrdQ8ZPioFqZprNnMgwL8i5wRcy93K",
  "key8": "5Prg45uxaswF6ysfRLE2gBJoG7VLss9iT9PD24wAQM8phJZdbWBXKUtDyHu7V67jKj76tUuPFVFg7WEgvw5nmqor",
  "key9": "sRYvTaTchAqkUtsy7aMSEjHcWM7s5Lv8StP53uPAMUxW8MRHEKLKUbv8VYr4UqusB26sped3Eu3NPJNHcGyxwoX",
  "key10": "5GrDCwgJcw54TeXjKZiKEFBRnci8f7qHYxU21mYWPsAwuHqvUJuHrYGwTEEfkByLJp9YnWAt8dmekUN7vc9BkGzg",
  "key11": "45j44ccawLeyJfV57RM8Vhg4twfSbiJAXfDA5g8KSc7zvc1g4TPRwi92orWKDCxLptkJBSF3F5ZmrZrQf3FBXqC2",
  "key12": "5t4XfTSjoiCMorY5mT3eoCpTHBWxYXWMzPZNUD2s3ER9geAE298fmYPkZbbBwz6jQLBNGZdTXKMFkK9mzm5B8CQ1",
  "key13": "bwPJrQHuUE1EGoStYXT91QKGLHR8eoRMcZA5V2VKnngCZgEVTRdo6cW5kHJrvbQvB1bS1VYTimzY9nuK7JBoH5z",
  "key14": "3ih6MpqsV3HFm5AYB2jpJVcP5H1cpyNbntpoLiELkXxsCgaAFEziEbmentQxu9gbkb4qGFXBkwKcZ47PCkywDC8B",
  "key15": "2mPi87sZ2mRuKKYeEqvyH8KUWtApmFy4Nt8kuuF1KHNXsVsX3jMGKg5MaZFqbSA3RUgJdusiXvsui4wANpdjxXrD",
  "key16": "3DaRprAXCvBwB38TXKE5akse1JTZ6dyM6TDLGTDX39aQ3UGvSmctEyyYYujcm8CuQug6UvRUeKg8wyDimWCaiQ4o",
  "key17": "5gSKXM9LRf115ZJ83na3VUHGh4j8zWtaTvETv65S1tK8mhZEVvGFGZuZtLJd4d5wDZRmJZHir8McvJAi9AvDBExq",
  "key18": "2bqkwavs5faj1BbdP5yjpv4G52uFXtu9qyDVtLLdVgToXwHDb42cNp87UaSujpLHNwHAPXpvikWHAYMkTtyRD65F",
  "key19": "GdbhrjGvHDZr9bafwpB4AggURgshTjHimLbPSm6KB4Vy5LjRA7rVMgF51JagFgPVPgyEEHyFiLacwvbPuTpvmkJ",
  "key20": "26rjxksMRUkMojBcBbKbWHUrREgafex3J539UPogeYX2Yc9QsQv44GFoUu1LKatgu1yeYtUPFP445iedGoruZPNX",
  "key21": "H751E8q765WRTXssoFeARYKKhPvkJisP719a8WM4bAa46tGfhSReDYkLJaLktbwMatXy78ypemdaVpxNPVLC7Gy",
  "key22": "3QTMH91sFvHRX6SjqutVdeEQ2v3HhuP8PsH6teTKAmNR9n8Jbvu95uTJTCLePgvUopECZXpqdPx1GNmGTS9Wqeoh",
  "key23": "7GJkREFSgkPQYxHGdvSKgVe7FGafXYmw4ZuFFhtSb7HR8HxVzKaL4CVzCyddLx2PsUfSDCFDdzFEQAWJqhzAxNv",
  "key24": "2KnYM1ERTcKx7N75N51vSt28jJyk4U72uBik3dFVE1UmQde9MdND3MZFvghS6bWtnFhvVuJMdenyKd9RahLYuaqQ",
  "key25": "3Sgo4K4u5Qg2gHBDKqxeNTgzzKGaHLJxJPHsBZGetDQxUHpbqCJNdBD2JYLU1UhcRGbb56ccaZHDHu6Bigf52kmD",
  "key26": "4bcQhnvQjmHoAR1wPF1Xp1h94osi1VwQ793DTwjJU9kvNA5PrV1npM3u5bnMjeUgy8kUooZMCtssEiREdWGhAdAb",
  "key27": "3CczPN93tnTApkHE2VxXGxHHzVS5qYMSz4kLxvgu62NVLwHdEmdvRxy1F2LttWvAZidLkgQbixqSYLWeJx9oKmyE",
  "key28": "4i7NuVf3Gk8K2zhgUVnVDEQP7eZpdmZcsSJ1iTgojyEb6o6KV1Dnrsu171Vmw4uiFpaHzZPrj6Gg1xeCjZTXjNJ1",
  "key29": "317jvLuAkDq8g7Q6tA1MbkTmd121uEwdc5AzE3ddaX9dFwEPh6bXj4pmxHP5Vtobk25YQPeFDAotPQ3wkB2bKjTM",
  "key30": "Me8m17yDy41mxYKasJTVcUrhK4a6eRxYbMG51wsahgmmtNDXB8xqMHi4cRNSfaP6vrqBL8kXJ28PYF1vGMUxbSe",
  "key31": "WC1hAak7TZUT9jZ8Wp5cMmbn9T2H3QvY42yhSj12jUP84fZfryqU5CbkDewqDWyL9wMKBWKFA6LNvwD1CLf9dmv",
  "key32": "4M2y8ysDB6CSTVWQ3vZojav2E8ojTVF5TkjqC83uAQoNE1idpKXybKD5nPQVf9ANHseNin6DJSJ7Gvw25jR5Ud5E",
  "key33": "2HjLxzRLb2x3nhPeVFrhWBc9nQ2ESF6j2uxwKLMEPsToBeD5GL3kFuvLnQawJ6CFKcseNCG33zDcNhLAgAd14SEM",
  "key34": "ppCs3iCFioU3MSqfETqeSmNrmBKZgW7kGDfe5EjZgKimLenr1BikZyBbbc4Uy5PjgVme3uSi8HUk2HLzLM1w4Ab",
  "key35": "639RTFzjYqnMiqRJ68SnnxcwaEXxSaPnKDDVbMKv6HvcgEQoXx6b6hVCKZQc6VsetGBFTbxjYRxsGoK5n2FYTHV2",
  "key36": "4fr6A2qWJAr7gU8cK64SVdgbpJZmTTctTkz6YCTN7JVVsnftKFKJ4Ne5AviK69F6UQqfcBG7Cbf3EgU4RZfjLR68",
  "key37": "5fvXeTtp54FSWiXepaYcncmN81YFE3w77NJqQnAq4aWWKVY576ozVpzBErrw9ypgB3Zn7BMbnrSRDVqVmQU4sZGQ",
  "key38": "i63yBvnWW43ajyXTaCJ6yfvbzTtQk7wwS8kfDGFCwC2xq74bKExHxdzeq7Nvf6kUtgN7w5gtSAQV4vnibVeF6ez",
  "key39": "3yp6yPomm5RpoQgacQvw1EZnXBKgrDv6g2MotM2jZ4bX8aZgVs1ThVFzhFj2rQWV5WzW2UTQtyvxyiGXkpZScx4y"
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
