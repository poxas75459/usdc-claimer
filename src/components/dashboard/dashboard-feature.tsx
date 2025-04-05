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
    "54yrQp7dqwKz4Uzb3QbiPDQrsAE8MFvubz2amDoCgEqrLsCgDQxtc14UPtk8inrLyRQgyymB6f94iTPBuAd5w93c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TzURA3oTPxfLEn7reqPWiq7tSrjbMmmvWEuYapPFT182cXaN6P51XuH2s51pmvCqoxwNKLfUBixG8LPPR14DQwn",
  "key1": "2iCw6SQB7dve4ytT3GZTRwiskCL7N5Zn5hRBGbuCffgrS9jW21XThmtiYUpmq9yqqB3QQKLt4hLgtPhW95roX5AN",
  "key2": "AAVt3ceTiZFvT7KJimRsdANc2ofwCrzM9iwwawPJT6UWeX2FthbpRyF8FzX7xocP6rJS6prQLK9kqpjCrivuGKG",
  "key3": "4q5JhmvBAj33aTrkiECR7RYTNivCuJiWjvAfE2eHQwh9ZboSJYB3aoneAHdmXnag7jZ3K7vk9xRmrZhHREDtWBMX",
  "key4": "5PaF6p35Pp3PnMKCEmJFLHYaVjHXAgMmczPY5ZKSPFF8fAMFXj1N3t74HAfPcxMjz7iUK3rTpGkZghZEMSUghDte",
  "key5": "4gsppR8LEq2FtEc2xM46WM47RS65sGjVpSzuBqr6NKuya9P7a6TgFrg3Res884S9B1LU4ajkd4GVc7GEBnuNJJSM",
  "key6": "PBta1G4qaHjG9fDQdQVHp3cCghUJaM54mpvbfumJPi1sx2uMaJuZPbQX2uhNwPy3pksvsiifc7dfoTEksRHiZ1t",
  "key7": "2E4HvHQcjSpJ6noYoDDDJgEb2yLYQCsVHTyAemaS21EzmREZK8mtJmzBF6tmWgxNAVJbaYkgH5huXvAxoEFRJmXa",
  "key8": "2bpv8jRauVAdKVKAHRDiSM4CKXKmanXbQkuR1mk49W87kpFxy8aF9dcs2qiJ2DhDyqfaYdcLxtvrN56LdeDnrma7",
  "key9": "5Jcdw1NWqqe7k4D6PNzkmPsXYEVUREnJNFd2x3Ds5jxWxzNz4GkGLC6LdaEsRTYM26GQNxgnd7dVLZVg8hbE2Qxc",
  "key10": "5K5ZVw58pwJZHfqvD2DsA3dQEWfuBfv7yGkGHabemQxNGKzZ3P95dAUPnKtAsPAdoYLYUx25HCTsua1pB9fxyDG6",
  "key11": "3p9hUa7QtjAjWozYU6AM9BxNSduPzRNyGJ5y2VsePicqD4go9sJ2AkeHd3yN5G4Ab51aaVkaA2KQTbVq1fijJBCk",
  "key12": "4wDc5zKUqsKJaFPBqGAiA91th6C6begFgdgW3hdqmQxMzMjBACs2QQmPH4wZyiCtdPkhRnnyKEYTHeQcJF3FBrB3",
  "key13": "3y6AKtaDpVjRpwLPJQgZpGbbZsJ1oBwpniT7XmVcVuuXpCYhboxXg8uHGzRGG3PeENDjjKaquB8wAk7tLZWhfQis",
  "key14": "eTUntTW1ChxxkHdS9ME7ZM6sVNHHxzr1Duh3NcD4pTBcSemUcoJpMMFXhugedk7aBr21zxTfHywSgHAHFEnnbop",
  "key15": "5fV26QRLxDnszG3H8dzasLFAkNerxnDWKr9MGm6Q1KYaCxveYjNMuapL3QJHMebFSpB14yDxhJjyRLzahRAiyGkC",
  "key16": "2XK3dCshdLcsNjp3pXfpPgybQWese23LFLBLLXsEA8hxP7KGoYFfEGxGALpQcspdmKgqU66gyJcGvxDUYyN7U8zD",
  "key17": "5fZ2T5vA1w7K38qh29CXXKpsweaME28yezpALRkEDAZzzp5SQsiE3yZ8Tij7Snfz31fc9duNWkiYA2Gh3z1PXByf",
  "key18": "3vdAQYeCF5HHPVrjgPW6PLCuZsWaRbQXc2MfpZ9oUmLfzLHy7fGyb1NFkvoVojDCQpDVosiwwQiayJ7caaCS8mV",
  "key19": "3BZsAfQBdHCN335dzZhmWmYXFDKmRd8axJfxFnbVkxS9UTgVmFAUTMabZ1D8119PUF3MbaJHLkagC64oCM3gJy3W",
  "key20": "zHNzAv5o9XCsJGMy4fx2czRxxDqCKPPbsMYCXe6YfGAQLVNY4bEJwrcMjFhDcZBZ4Pig2fw1GayrsJYf96wbojC",
  "key21": "22JTfHHKkVG7gSHWtp2riMxarY4tXQZPXzD7CR2xwt7ZcnEBBuPAHveMewJmJXiJA84uVNs14x9439LVt4EiHpHo",
  "key22": "37jF8WC3aHgGigsYb66ZmweW1iKCZ47WCF9DS5oUN7Y8jwBy16YuQkAw7dA41BhTcHRbLQh2yE9ifPuyREg8WAMf",
  "key23": "3kTw2CAMqdHsG4GJqyqXMMvZPdZyCChQpgrSnLEksCSVc5MbjYefC6if9xLX3N4YoVFmSiPKsVm3aqMsP74GY2ST",
  "key24": "FrUbhuQ86Kj4KEdHVDGxqUaZtJT6pAv9tqzCfk49V9EE4aTjgQCpgVDPqwCsMa5d6Ej4uLTonykz6mS8y2cNmMT",
  "key25": "3TPiewUxwkVEb5YHA8624UzgwBFw6VfYkaeu3S4DqEy7HVeFyVyS6WENyu5iTXGcgGWXmU5DgCgbLB6VZfYiJ9y8",
  "key26": "5CeFLgZQTPiBMFLPBAM2PHczwN4kbv4jAWqeaoioQf8VYU4p8y12hEmLKkcLjBmgoHNksypzdcCNkj9Ciq6p9EXK",
  "key27": "3HTcJ3BS5wsvcMAtssVKuUFiCsohG4z23UmAxKq3cPfPstkLrtsbMp7wXw2uf2CPsK8QBEpVdNJhQ7XPPiTgbrQ",
  "key28": "TSTnCUKcFQyMvansqPFBXo4ePZR7gX14TCdm8pUYkLrsAb3d1inLqaGE3hacX8z1tsvcRnkn8WQTXkTEKJrT4Dg",
  "key29": "5nJv86zMiUpnuChFuxgAMNVeLN6fPrVyY9bCo5SkRnRcenwcXmVK2T212Wd7YoMbEXB3Qvv63FKxxMLSNkYoohHf",
  "key30": "yHjRW8cAW7NSKdzAjY7my1QYWSwDgFwj16pNJr5Hba4eVfMcjJydB55hZs5JCjKGfDeZK8e7nscBTnkaJGTP8ej",
  "key31": "2pu2USTChtcqw49GGQE7DHe5VVST6n1Suu2PBkSnMZMuMcEC4RfGHXUBfNvSajyPP81U6cbpDNhzvUAnB76Sqcs1",
  "key32": "BjmBx7hjvatcTw47haKJygLNVj79VHkHB3PJPhbkwvsQHYavC8fqnnVPjdfWuQLYLnur8jiKEdZ8GGV35ksdhAa",
  "key33": "3aJRcdHrJYWpM317q14xH1a8i7o4oKRxbPrz5pnQahVkYSMMrhVbj6XC9Tz4AGZPbpTaxjeotKqhVkhPjf25pTmr",
  "key34": "5GZSW9FXt4Rqd6rzZ8WWxzYWmWXYac6YXdRaZitSpYeojHQ9Ed96gUjh74i5bHURRbKPiWZtrRAgr4Y9eEsuRJSz",
  "key35": "5qfXDHVPhkQp3R7Qr9cKH6PxQdgrDbP2u3K1FaRb1u3YJQLp15rgJcPdQyEZzCF9JQq9TxVEksMrzLPrECzRuFgd",
  "key36": "3S54woB3icfNa4Qb6ZVg7vFtAdCfLWqjhj4mKmj6u5H6khSXV6EdXNX4BVZzDoxCxbAFLsyffYvvq2KdnvpmiH2f",
  "key37": "2XBtvD6XEsR3UvNDsPbHuSRXExPyfKMERiwgdSr4qo4eBigKgifGDBEcqzGYJNJvoth89Yqcfvf7DBXob4MSw7bG",
  "key38": "2B6viT3rDT5VFDY17SbSvNHGXrb8C74kg3a6ehtAE1ADb8MkCgd1uLuRy3nfhtsHjdByu7gdVvvKYSjoPbjhTmPm",
  "key39": "35V6C3EUb4eugBB8byHiBeKv4fcCvs8uazuf6gx3aKaLtAgfcnUze2B2aN6rvP4yxQdSL1XNFvNoGG99vFvTQQ4W"
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
