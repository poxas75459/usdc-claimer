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
    "5fapx4fbm9PoayAM9avFF1vU2JEAunBAZh5YuzsYR92Fcw8Ve9rMXMwDpK4xatdDRHJFYcc4SWrrebwUse6n8yP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CEHiHVuVug8n3492TbCc4BRbi3TBwnsmhXiohwFD2zZF83FkmQ9GhBHveV5evVn2j2nCeM9GLWh7gWYTjPf5ELb",
  "key1": "2iR5cW4ivs72yKqtZc7AFZ268t7vjGQJGNkMFhwU5JtdbH6sHiquxvPbfx1QFAoCBK9WW9LPvz3iCjV3BJYtPrr8",
  "key2": "5J38SR9pT1tN5yHRGETVL5MCuozFcdPSnkymZT2fhpth4n63wn7gRhpGxQkV63RfuEpt9F3XtK3GPmsETYjPFoVa",
  "key3": "5jxbW95VagEZToqbSHJYJA1buwTf39XJ5U2Zd3toowD8tPVB1t5bPZeNd8QT5CfnvnphPRmeB8jP7ADDRMb4R6zU",
  "key4": "5FM3qrE1NuCLG1StEPmHQjQ6odQWBfEEVCNS3zhQFxZ87Qz7EKg3waigxtv5XYbLvzESumDT9Qb27iX7MeqA3F9B",
  "key5": "ZSjQ22k9gP2wTgLEotUmXDGwuJoDVnxgZWFRhTKfd4Fx3Zo4ynaFryjg2fedtMXv4CjHiuejPQ9EtU8L8giRFKp",
  "key6": "34u1X6V2bqFwqvF1wKjeSTHRAG9MjijK3ZRTtfJDQj8aG1TnQxYegEzGjKLF1fwSivhFEWH5Gkxbar93Xq72vJ9U",
  "key7": "2N5jfkGZBh8yn9TH9pVCDHsGqCdtGqK2A4LCAx9QEsQ7Cmn59bKswHqpaSfcQdbCnhgZ5LRidtD96PNoH1GMAji",
  "key8": "4k5dHz69Cq6XwCN1TjDqfotLT9mrRSiikEPkKvXgQhCFCrsNAvK16rpM8JeZqhZ54Gcv9d77gTTRjSjcu7u1KLLo",
  "key9": "428htpKhe1QLwuiCREz3oEs4kWpeJBDVzQKvp6b6tzWvijYvDU2xmte5kYXPA7RBoKVXpw7oWeEKUwiZfdFjT7Rr",
  "key10": "5df1GQGimLebUdnYnuAVbKBMXgXrDVhRSdWRpAvLzSiJAn2x4amJ3dxD7FU8vrBaKd6an8MHdsXfFj1uu5iTifSN",
  "key11": "5wiU5DrzUYbAXfKdJGx42Vn18BaBmiVqsB9sJ6jRN2EYpsgUmttZKRe8jSaWRFfN4E19A4sL8hPZErr4HrDZ1jic",
  "key12": "8Tgg9hGfLBGL4RHbBdHVHCYMCFUf6TqfM5qa9SmgKS1rrP7obqs8c7g4eXCtzztDLQDT5cMTb3K8qAWTisrZiha",
  "key13": "2b9nT9CirF4GoVMTjibLb3w53RdJXGJps6MBf5RzcdM3QbVTDdUDPexD1MedcbtKQSk4GP9dBGSGv3AcYJvhx8ec",
  "key14": "2hmTp18h9CPdRESjGu6SzmzJZxAK92sxMVv5q1YkAxgEyUJ9ZZRq9V1C96AyMj5tn2mXxFGarz8fUoSNFNtpBBi3",
  "key15": "2da1jJ1ivDyQ6szR2cutMzNjbrJmzNbfwgEWiVSLKjozc8dfshYhWKSFN3d85RNZfSXkcFogongpAJNakdk71JVK",
  "key16": "ac5tY9GhT9USoG3tetJdj3CGjnQnuUSQ238RLUHU2Ns9mUPPTcRUC82idVQMomEfVkhMS7KZWkCYkzrSX96iJ8e",
  "key17": "5zSRZYv2ufBbJ8jWTUhRaKcWYbdg2xZFB67iGA9QhM2ioQGM9deMSCSVNwHJ338dYbtFHXPuV4gdQLkPkAjcDj1y",
  "key18": "4FXRJ48BaY6iUehss6z41xwz1eciLkgCVffcMqXNmC9QWf5BSdTx9dZ8NaqxwDP7EgqxXh1kEGwhrqiMYVcrMPZN",
  "key19": "5r3b2nEcTMgZ2a3S3sphrKps9WadQsQjuSdPbDGgd2mghEGYv8M9Tdxz9Pe4UChf32mzer4FQ3Zr1LuuaELZzDG9",
  "key20": "5ZXXXc1UKkpzpjtaGBDSjL4QuXdrZrSWSRbQ28CSbKahyntWvN9Hj12mcKM7yMnehrEqni6aEQnCQVyX4WMDJitC",
  "key21": "3qviPe1kLRG1w61rnuovR2Fhpjz5EMiHKuGv7KfXAXEk8pxFhw8eSNhg1RbrFPtxYF9cDZgmgz6nDfJ27rSTEZ5h",
  "key22": "QRiYN1kHhMNDuaf4k6crcy81o3X1srQ5LLTQ3bKBEjravvS49pCS9EMfePqon2wDhD2BTJ1U4i4tJCNCby6ZNfK",
  "key23": "2fEBFuWCGBjL3Ck9rf4DnL8moycoD9nKQwChWi5yUcXKfDJifMUnxGAQ1igVEnK5rfaBvNnqLhVKzdGvmmQegiL1",
  "key24": "5BegCkn8UWpxHcYY8eNjiUrKCtx48epuRmgS7kcb1gwS3JiSY9w6ikcBMr87Fa4kcNg9HQQgMaujcZVrDBhaJTdB",
  "key25": "5ziVy5vtmXWL7uTsNxrpWFTcUFDAKRKCvWtRZ4edD78LjNKmJv2F1YBXv2qMbQUFfSVayKfKy2HBqtadMfr3xSbK",
  "key26": "4jKx2cZzs8DVjN2gQxXKhKu6wqzraQB2kPdQLweSVyPdA2iJ7pCAXN15rEP71CxgvK1EfYmEh7hqAPYCWM26hFGA",
  "key27": "5V9r3T6RNDo3mbEeideEz6y8pndo7AiNTkEFtK2uq5Mqhe1MWjTnVZA2SiRfyZd6bpHSqZEFbhQBbomgxj7LU9KK",
  "key28": "4wK9deTLy3eZ55Us1YrfxbBfJNmaWLS9g6B15eJb2jogxAUH4m4gXj6vPv8y8gUsahQfUaW8uxFmmTUf1QCWyBfs",
  "key29": "52WwRZFFXCvYuA4awjdwf22NEqT7ShLepYb1TGxVDoRWaq4Lp2x9QKYUEqzG6ZyyShhiPvm6znn7ZC56AnWGZCj8",
  "key30": "2P5WQvsD7eeDa6Rfmzv5X3Ss65ksvHnKaao4LzwweoofmLDTVL5eHyKNQuBGiSQohas9NqojrRucKqnsN3cxWRZH",
  "key31": "4ZQK7EeGHi6o3YexBtLz2rN6qU9TKPDcSEhAC8NX8GszH9p3LL74JLdDCwyHpQ9J2kAvExsodPfPjTQpewc4vAyM",
  "key32": "3Zx2vgB592suiWUwcVfCGjjeMUF1KffqFGRAL1BqRKr7ws1mNj5vPi8NaGdkAvkYnsb7Yd7kgbRxex9PRURTuNuz",
  "key33": "5e4fRZW5eXGnzDM65bxup3A9dunTbp9gGBHcWrzRiPop7sZ7WFf1xuagjeUA2mxDFTUKDu4u2T2EZ13Xw54tVU2F",
  "key34": "3syzGEkBYnwfusYJVF5o6mLSPtz1awzqynj65RQLfjVqJtwQUjxULbBGSvh8iQc8c52TRtw85qwJaBRfxiKZvYgR",
  "key35": "tRBhWDwLcSLXEDGAYugGuDZCpF5D19G4BkctNUDnB23kBTW6PsQzJmh5382PW3EQyaC8EmuivaP9ZS9iJGLc84U",
  "key36": "5n9sEULXFXEF11PUWkL4vYUWJX1Vx7ySPBo1Gyfa7sgbmZtXbMCDzmzRXdZ4xhVC574LgjJcnK9mFABRd6BCEjZP",
  "key37": "xe9e557zhh5PK6FBR9uUMrs58Dm42JvoRTV9w2A6z5Z5NkXKbQt6JVf7QQmNXQFSHHu87gL7t2LSdb29FemDvsw",
  "key38": "62baELAd2XoxkZ9a7nrBTugpbn3km8uCE9nkRyfCX1PP1m6CdLtDtjPhAkqD2dJkvweuALjtDYceiRjr77JhGPY4",
  "key39": "3Vx7WEr8d8qxGXae1YEKYDqPmzikm1coJEFx7n3niS1LiPrvj4N4f1nmof4EaZDSz1WyiyzGGNgCaJ63XeUsLTgW",
  "key40": "5AyT7xv3J1NsPf58DgyU8Ni5V26B2XUotTviy2ihWrnBC6QS81CaqNfVfMRaUX12bL561oEmb13DeRXNLCxHBsg2",
  "key41": "23KSBkFt9h7rMP9oJs5LVjXTspSVUDWbLMVj6Er7bhWWn5ugtgQDkKCrMKeeB3jZj75oN44viGEPT9JKddExzRV6"
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
