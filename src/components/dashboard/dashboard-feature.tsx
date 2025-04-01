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
    "3a4iBcWsZ7QohYEmTRS6b9zJM2xhbV7iQi3x4Zg8AkY4mJV68J4da9kdtau68UmsNv6tvpciGbeiicMmuBp6MdNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GnT4QgtqnRUaBAuiX61bqXc9ibDRBbaeGdRz8uoSJ2HS5jzN5NE2pb92yFwrpihYdfY1KU8zyfnt1rmfroD5bu4",
  "key1": "5v9JkuveMAeRZU6zoFQZ94jUGEcevPR1mrNuCiKs9Fs8XMkXeUFFmFmR1iYvUmEJf7v47A4Lo6wyvspHy3pbmqxd",
  "key2": "3JRUH9fRTGyQrJ11i5bZjo13oC5hcZTkyzDRViVwcbvb3zz5tthg5h1a5EU7rx77ETysWpNvpuQ6PRFMmpcadDnR",
  "key3": "2AcDDcURbUAgE8oJN4CZhcqCEoocNZ4xA21WHLaLswpam1qPzDnsKGXktbuYt7TfnneRxQumVVPaiEy3gjLv1cbE",
  "key4": "5dvKap1iMpTt5berZGGnPTVY1YSjhATyyYXwPsMit3iBsF8tfGStMVNP4A1S2Pdwwynd9KH85Udb273uEUTR8XSk",
  "key5": "4BVZBGBH5yUbHDFgRU6DJdpBXZX4nCeCZcDWym7rE5qWQ93hSjPw6PFwFmYSAuWtfJxtmknazDvN9TE2XPTUJK8x",
  "key6": "4wNwudH897nDkhZN6ezXc1soycMNeiuvxo7M4rrEt1sKSaAnrgPpNb8mHwaQfVoJG5roGKyqdQrwC8ikbTWqNFcx",
  "key7": "38hyHdSPckC9Ta2Jb2TJhePWhTwmbUtm5LKP3tuNXgjSu62kMGEXfyrqKMr7kyngf95Ve4MsYbUy767kvycjmVQh",
  "key8": "25vT1GTTuBSBq3LHbCDzDMiEopumkPNNx5rdwWb8n4tcpyzCep4JTsmoZa6wH6ykiwrNjSEQtW4QifHS5uBtqYrb",
  "key9": "4ZcafQVNUJLrPNE54CynhgaeQMw8rF5ctCEPwBHRfFbodwkRA3zvH7aSSCjTAUtiqQRK8vPbPyN32PNmQguDTPq",
  "key10": "57291D5DK1Jn8v7fdubtp7gabMR2Mu8hu4BqsAj2aCDPiHjBuJJt4ATvC8YnJdPXvZTNkPMmFGZay5nPY2GFW5Wa",
  "key11": "5KYDaeKAHzu8BpED79TH4PWSRz1krqmjAUyweCB8utU4UUmhxjVAJtU86zHEemViXbkJK6os2hSy3uF3nkf6JDc9",
  "key12": "3wiKMpKe2ABhpSNXGVe6ZwwLrJKJDFqeURvZg6D1dqY6EwewG5eepRiGMJDBvxizWZjgqb7vyFzN3jtGKsgN8LF",
  "key13": "aH5hQZ5LvEZmcSwdurzab3Q5T7wDmS2fFTBGjXBEGehBwLJnVGbSreuCUQZnkrRN56w83X7XBXzzSqV3uKR4jz4",
  "key14": "5ntfeEStQd3XjRC8LYxz81yYN8k84FRiLt7GTBiuHXPdyqvY2DgBYVdvuLvrkwaNsTGNBsNsyaEXqs4xXmGiBgLr",
  "key15": "58kpwbY7FUvgFA44R352UGd5Ezp7Y3TAChDNGzhFrFZczt8LrSjxuutSSvSjbiFt4gYUAZos5SgFouFgdZUkdMjB",
  "key16": "5dGvsygSeG5Y3rRnd6dz7GYm5UkDQp3Co5HR51TiNrCu2rB74BnXsTTQ9t4gL31M84YdCywmJms7vBRQA9Mn9169",
  "key17": "2BESAn3RnVMj26Sqq9fg3b6VQsn2pQ9zawxpTfGCwaqYKusNFPpa7q4F4fZWzUzKnJiUejZRwMEUj9EDK6y7cLkN",
  "key18": "4a2rHwVGZDJZ1xYiFdMeLZDdmBNfTjfbWJ1wAuqdPe6K5dCU4xW7ewR8SQS2ncEHnEJLuS9nfcJ7hVH6vPVxPgim",
  "key19": "2xTEWTC2idV3un3ouhTkHsVusNQ475esePFHaszELEvzTtHcBypRVCKkvzwsAX399cjoSL924mnYoq7eQH2qkotH",
  "key20": "2XY7Zit3YCbxhr1cYEaBoz7Bm82bnK2WTB1cGY81YdkHcp5PANcKbubMS5wS3ApHrXexU4oWwbW5AG3o4aKgDaji",
  "key21": "3PvTjC8WLAYsCcZfwsJMZYb4j2TLdpAkvVYZ9varQ7gLjgLrWA8dz5UKdwWdynsCwt3Da5YEy1CQiNDfb2Nbyewk",
  "key22": "4N6NvZxRojBq8uMdwwdUwVRhC5ViWmdPXVmmLyaKRdAMK4V9KcL5BGvFbX8sPcwBHvMrkU41bb1nv4DY8WEaGZZQ",
  "key23": "4bcVR6w9Zm7rZRFt6j66NpqaSt5CibCem9YZdYZy7Mb1qETP1Gtt222MgidaB74TAAiC13sxYCjebUZnUDX2LpWu",
  "key24": "5z8oC3uvWRfa9UMgPM13WhnRgPmprtGQTnhuUcasuD7MNZRZVFdqBdRrDMXA316vyj3cRtWY2Ur95eiQFDWnqyuK",
  "key25": "5XSxktuzbuarjAyKwKtxopXTcncxdHzxXYXKMKdBWKtcY7aqS1irAZHk5wuknyUafr76QfosW4oxrjHQABGWPTHX",
  "key26": "4g14YwD1zkYwYjinujuNg7PUbukJyiGYNCh8R817SkHZiLKvjgtUh1enNdPTHqDdeDb3oEcKRUZJEYKNw8nSuq4u",
  "key27": "2V9u1kBa2cNSeP6rWtnS5Cds5LZXcdksuKgaf284HAHFpKh74Q5ewixk7cigujt5vKyxWbozQb2Zbfup6nf3QEZG",
  "key28": "voRtwaSspKuvb2BAmauAZENSF9pYq4gGhy14LNiTf5dhTwzcSoJCewrjHP5WM7zx2Awqp9cAXTmtEkKeS8KLyWN",
  "key29": "hmfvuyjrH85VxyN5Fq8JYjs1u6KsKQCTpnfNddcgDMUVzReBp1Sx18BsWyJSTuEgE8WUdjnfc7LgQyhUM7AW2oA",
  "key30": "5nJZVpvVtJT3pS4N3Rnpo9EAMpvDD42rQ2gnrHcKvvWHXJYXHseAk2oYXtJN8fVaDXWV2DTvpwtRB963edCNAMZU",
  "key31": "4L5EF4hULcsAyBJiRRXaY2GCmXkNiK8AkjFZ3EKQ2iUfhW1JxTo5zLS8kmYGooaaXKm1zLg7cmW2yoK9mLFNj1cn",
  "key32": "5APbTs64mUd3AKNu74pHGjBDQdnmxDtdksqPrfn4YAK8SeAcJqJqMLWJRShd23LrmL1fmqXondZ3cqjVivXzvgxA",
  "key33": "2gPCFvGZ2DxDHA5JpEJ2XuwK6WhdNEDb62dyK3No71SMkVWkCQ66wCzQgqCRUX1J2HwpJPLEhHViP527qbb6RWat",
  "key34": "5FHCWegbWWPrsHDuLvF5XPu1HMN5ctS79NaDBDxVamaz3MSbN9EFHaYg9SNNo8kwWrSbbquWGhYPrhZhNKMpdwAZ",
  "key35": "cz2bRAA2YZaxuuyKHwXC1J2mBHhrYV2wEMfF91huWCe9hAf96sVfi1tww46Xy5xhLGA3FQPJyygA3iQcZHsCcDM",
  "key36": "4ZpvYw5nYRxzZsJbwGmwbSHib4KRNuEkEyzH2qnpZY1z7Dc7zDsYEGSzTFQfMXaH5MQdkmMMhAMmqj5NrpVVegCC",
  "key37": "ZP8Q4Bw5fizGrLxLyVeEDtKSMGLNxDQ5fja9V2cBtm94BSEh4pz96zuRTDNnG6JLfqbEekytjn8fzsnXpobvHUt",
  "key38": "582HXktMhbonLfysLoqmzcYRhm2gPUYi9KWj6s3o8EEU8FXGAJgBfVYZ6w3sGbrvJwMAqd3xr2vyYTRWEeVFMnQY",
  "key39": "3Lz95TAmNwu58hzR9XftXiZ6NRS1UZ8RKyZYVasLoQ3MFLWbtqmRhtqE15n6Niz6C6G3amUW2y41CZnSfv6B9ihx",
  "key40": "4NjVN7Gxqojaq3UBobqFhREDkoFUu8WHN1RVcpfF7FhdcF5RjrXPD4RNhycYTETPHRyCVLdLAfYtJzoJEjVXcokk",
  "key41": "4kTEJnHBsTvxLKqSByV8TRuFR9wHmhryR5p3wXTVT5xuSe8vh2PXvktCtNgDwcdw1sZjBMD16Zrvq8gCbvHi9GxV",
  "key42": "5ynwj4g97hPtzUi1X5iCV9AJXmvpiXoomW2PdGziTCHNQQ58hhYc1NKdTMuRyhnjaWCcoUK5QQ6HMKD6tghAWPe8"
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
