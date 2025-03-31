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
    "5TAsXet8qoZkfdMdVUXNUyUWYWDvHsCNbJk1D7bLRPkjJz7dE1ezVVBcb2Wnv1pzPerBYJfasjGnxe6Axyokni1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4boXLaQjyH8cSsbxVTiKwpZNPsg7c3ZxZK35oEirhBeeG6hmx5iNfxfRSMLRfMtkik4Wg9aTghqHZ8skBmWeVTnj",
  "key1": "51xAqxfxdL1upRgZbDp5smweVwYW8MeaacHFpAzZcfpTkG1u3PADsRH2W61UcZ6Yxq5iXmb8stcRXUaW3MwD4B8p",
  "key2": "4sqDyWvEw5hnAcWDdRnep7q3zXbLfv2B1wUecCBPgECXdmRNNmL8XTCVFfTeJuUGvEwfpNceKKEdZhA5PZGqXB1D",
  "key3": "4fZ6Vu6iWCsgBwS8sDnQshpdHYzaVxdDfdWo8MDrN14rmTjMub2HomWHRU2o6ZKCfkKDwkRW8V2WScSsTiYsCgr2",
  "key4": "3jrUWQ2rKG24jM7nKuAMdkj65yiFPA1SQzL4t5mqPofX37gktPVZM4NN56JqKXu4hpzKQdbZNhVGy7yXW6bydvwo",
  "key5": "4ycdzuu9nsH1GNcuVGJ5g9DihLjVvDp9Fgrh6fjzQf2tViKA4fBD4kYxUNcUf7LjosN6mfz2Zpsz4ThV5BjksSZk",
  "key6": "2gLhF3EPiF7w7DzoqvNmLZs8Khv36VUDQx2MJ8LF8DJ9BXomkpaGhj82piHU3duGGGssKesaQedLE9PhFh5oxuh1",
  "key7": "35psRS2reEr2JUEPv26R7aLW93qGhsRxZ3qqna3WjTCt8CpVHb31yyEqZ2LS1Fn8gGZ112KeT8ciT2Ca3EeScmhd",
  "key8": "3aZsqFbswSPDbCCYdAQvGffpzeLRsa2fW8nQnoxL7aBVhBcRgtJfngczvyU1xhyCGp8Gee5oxSie5xLx4TFNz5Wb",
  "key9": "4M2pssFdQRScf3yAfSk9c1rPTGg9u87biYrQQTpP4JeHURJwWSPzNvUnn5qfVQBt9BP2NFTre7ziosT3WknmAA46",
  "key10": "4J8x9qJi8U9LpCWsqHzRvtNt8ujoCNoAQNVZZ9pYpUm2iUb9A7QyPF6NqNWZKYnhkgKY58TjthWkEo2dtXnkW3MJ",
  "key11": "3Sa8mr5GSmvez4ehhd5WdwFUNsoL4eTk6zLZXNR8Kw7qUqeYBnrYPB64Do5kH9gxtLo3sYV8kK5rnLmnoubMTxMW",
  "key12": "3n52PNSEPahHhEnsWLvp2zqVxfqrks9WF3v7kFJHsQ5Auq6a43FJvLBqyQp949PiQVNPecPBUU8da8d2qVdimUXM",
  "key13": "u8ijdCxLKdJdvD15it9wo5MESwg8ADpLzMiFF4L87z21rRhWRwFZnH1Eam3UqLe7GnmL4qbJofw94wXia21mDGS",
  "key14": "pSzyTVaBgPqh9wAJr7d4aQePYqmWuLTo8hBZvH4TAQiG7pbyEHz14S9oVFMZWQsz1dq48qqMmA2v1tzbCNTZTYp",
  "key15": "5LkFexGArEmneqJ5chGNv95F3jVrCDuaQR3Y8qZBkFPgG3vCM7TQnmkgGrNMqUSdVsDxH82LCFpgxCkYFX3NX9BS",
  "key16": "4UtpngPb5rGxq8nLT7fjoR1EzwGUiwnvcTBmF4us9e8VEoYxeZk6MmXp33wuBXQfgVpnFZvQrZoZCxGBv7PCkhhD",
  "key17": "2XQB7kGT9Fov73a856cyqYhuuKgue34fbwkrFYTM7gH3FNRDyVtu61VDUeZRbvChjM3wbxKoz5hZDhYpbjjBnu4Y",
  "key18": "r9tjPZBpuiSf4p1PGvcfZVDEG7W6RGg1wmZXCcf7V2vy6qhjXUTXnCVXcAA3pfKrsa4N2JwFReq3dJDZsZreNi2",
  "key19": "2TMU11FUtgvyaa51e32fF9diV567fyaAvGh6r7XE5wauAi3KBnEx1egukSg3kiEqCFvCh9ZNUkgjc6p6HCQ9FSdg",
  "key20": "J6zEuGfUVMUomCu9vjXRPr4EZJ7Zmic4ogYf5j4DrWc7zhB5Z6VdUittUzbJpTHPoxfgAZwTeEi5gpdUqEEohmJ",
  "key21": "5njPiSrYFavy8HwfUmnrqsyWSbvukbvC2KYWMFwbAEksAg1DacmAxuPEmvfhRxkKGziBirFnENYvYv43r4KWd4w1",
  "key22": "4SAe2a9qEsT7B7qGP6UdiMi1PKahWA5LzcTVTQs3C5vwhKVjfHDyDQce2VkWoXSx1MDAsgqMkebHSmoCncabLFr5",
  "key23": "4r9fZrwmQ8EdyrsihV6bMQsTGPm2V2WUCtUQB2UZNiCB1n3FSdidEXZ4U5uwv5XSqPfirKa2aN4rskoh8VeUeEjc",
  "key24": "mQGsZBSJca5T49Cpi858YNxJT9nZmbkh9iRcnyEAkBCyWjqiJu6iASbCDWj56X7XJyy1gdaRkt9GdiKyxv3fhR1",
  "key25": "648E9tLeqgmN9KeA5zX9XWnbwkjxsNR2KYcrmy8jbLTN2aRJ7WsE1NTTzz7Z73XBhDJcf6Jm67oKKP8Z6EQed4dV",
  "key26": "67U5gT98FBvMZjv74TcawfHsCqdTDukGLeeZ2MZ3e4C1hWUTN6nzqec8PGkhQLDWqSpy5pr618ngttpzkFLALvBr",
  "key27": "34LhbJkdLGNRvsfqkqw39uRtZZSXswAMto2xhxy6agr26a7FNwgxtjodYSAURDgqzNgrEGKKPnrH8dAVnMc3URZZ",
  "key28": "nQLiS9Zv6i6NTX6ovJwiUHywxJTDUxayNMCQfTWpDPJwVC6X1itidhGtFbxCJcEx9pK4qUm3sG8f7eP6X5tsSW5",
  "key29": "4JcTWnAEd1s8UBT7X4sAQLKbToBEmb9Ar8oVSQ9a5Mz3bDqV2AHMEY4AG2t8xjEZjY8W5o2LD2G783QU1GJrqBx7",
  "key30": "5DxP5SBjuDTjNVymqhky3LPxwMy5vW3mG8jABFNEiEfazv4fkvFvCpgziuj7YzckKAvHzZCgPeovWQgimqmiL217",
  "key31": "BfX2a6goJsfDSTSzfsW2L9eFpJMAwjNcj1f6SDL1tbVLZjqxdX8Cnqcu33VkCJpLn2RXmwgZeujMTo599vqLAJH",
  "key32": "4kvmHfxDHjuVpMrg991PFjnWDAfR2cZmgNW8NHXk7pTNZ5KYRJbon6aeK235YsmdsHfTp1MMwTmhbhkAGWUJnxtV",
  "key33": "32VeD4kszDMpQtc3VLdoquiecN9vA3BiV8jEukUs5p7jjynJk1M6mujzYwmHAU7urFhynnSvx9gNnWwx92NAFHDx",
  "key34": "3A1aYWXjm7PhfYWuYUXaRcpX8ETFqEpfijmQFh83ri877SjJNzRzrmeLPPSkTLLAa8CSPtfes4JeckzUr5ugSV2u",
  "key35": "5FBjSmYDCuk5twYTSiyGgiiu9E89FeUjeJyNHMu3sewCaEaWKs3yievc9wWw7hoJCzNoRXmm6RLWqni5tYyCPe3Z",
  "key36": "4LrCgzF4vJv66mDQZMLg4cGLYYSvi3qJ2a4ZuZFmpdmUn63jnXUwt5GGxbD48HGmk9GmWwdpsyQzyzXRHNEZeC3o",
  "key37": "FQzhU6jER8Y3nBh4vdssZx3ocBh4cn2dNuc84vVNN84JcyNQhMsPe3iV2PDDPynhZ6LiWNN2c9p1fiHX5pGacXm",
  "key38": "54Fbxcb8bE582nqEJkaPdLMCwAGybspTMwZmCUao881BCGNSYp7yRnFndj4hktMPrkbiWZ83p23NvCQDfzBHmZLj",
  "key39": "5jE7kjQ4pfzto4LQcAvsBRJtS2FY2HKiBD5Q5xaEL1QHs34Wf6r6ibdXcg4V1LxxuBzbAVRPVhDbYaBDA1wtX5eC",
  "key40": "47RKjSaWm4rj1jJCLCxR1VyqyB4VHLEuebExMHwhCwhUWR2uLA9nbFp6yVpnJAaw8wQ1ZfdH6HnGbBp11R2aBWc4",
  "key41": "3itUsywdnott6LDbJ6sAQXuLRLbPzbH9LJUaLgyU4nz29K6Twq1XjRphp17XLtoKM5DTLKK2CpJnzXv8XnQwK4un"
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
