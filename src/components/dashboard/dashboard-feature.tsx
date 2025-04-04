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
    "4ko6TBKA5cxBG8qrGjDohfJMnuKxHFxwymv93etYtd9qBJLAfo9kduFbAgQGph7kqqDxvESN8KbSoRk3RdsmkvBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D8rsb5agiHaFUUnJhvdYrWeLs9AkBwYevaCuweHD4i92p4EFMoXj99JkU1M2McXTwSUtAV3U7sZFyfNgM9qdJ9e",
  "key1": "4vapz2gq45FQDQMgkWRbBRoAVXQ62rNfdwNvjHnJ6MYA1GoHVwyMuAFvAgxNkfcGk5ku8cfT1XgiSYH1ty984pSu",
  "key2": "4AGs7pR5p39j5A8Bwz6Sav5sccy4hK2tahYXg1brsoLCd7shdj7Q9rpfL9C3JcdajLrDXAwD1G7FzBb5uprZLTv5",
  "key3": "qwF6DypfLZ6EbQS26S8QK6z1rsQxncofBWibYijvD1updB2uN4vPtsZvvWZBeQysJ1jWLqCs6voDK3zyKzwD21C",
  "key4": "wdRuKJeJBEB4aQkTvrGeMHZ9kxAXWt63AVCmeTVhpEoB7UE378wvgmRTyHWQmEyJ62vokEvT6BHocbnB2Y1GpWV",
  "key5": "24B6U2EsXnvmA8Evwg2VEdjJ2ZfnuQ7girNGd9i91rZZCztziozmqSZ7k6smZG5AKLw9VUiWg6oxowjDQHHpCFQ7",
  "key6": "46BAzHMrSNKKujmq4VzctewW7tWSqtFR1773juWETcmmAZKPPzB7t7yLJftpseAHMz2hPiUVRviLS5GgTAnUmNNb",
  "key7": "2srwEG7aSn7MGdzv5T5v9AY7QjLHubxZozWN294srK3ewr48HTpxpCnt7wVnzwRPGwdUUfAiEhth9Cp7wUZ549kd",
  "key8": "3w4tdqW8Yck8baQ2Q8B8C15nRkrzB7R2eX6Uk4LXNYmpNkdQeyvc8hGoVdbUcnWJEy4B6NF3c7azoJK33WccHxGf",
  "key9": "2xLM5QDarP4Ysr7sJmUbCAUWrCSeZzGKLqHK6L7WqevHfQBdBCTDWFv7M8dxEKNFSAfvHUpvNJKkhtS3Q8z3PH2v",
  "key10": "5BgFb8h4EobvTKNp77vAt2eDMPvahnsSCx4NarbyRGGwX2ukYsDBSMvgMwAwfejYCrq7iMDrqsh4BpAzpRo7LZW",
  "key11": "5iyypEb3suipVwKTWzKNZ2PNELeUPDGtMkuZNmNiWWeNG98duJbsYgTFLtgjRF8Z9FZkJVPLc9TZpVLUww3whaE7",
  "key12": "3GAV5g8k8distRjBvgZihRbKZSDxDhcoFTDEH5ZJ8tuEwcuc9pk3iFJMA31ZN3nUXdQpCBSHLzvwYpiTeYFDvSEF",
  "key13": "2FFYKPYXfRmyCjNWmXhJ1uLdkhPKX2Twm9FfEUd5aj192Hm9vVdc7qmqDHBJ7ZoBtpHYxuj9P6p5pqQp8j9FdXiD",
  "key14": "4xwkjbwwbtuDwmpwXMYrpQgGmo67cLd6t5jvcKHkCxAdcwgDVcw7ugdoy31oXAzcLweU8G6osoWLExvqXjrGgFLh",
  "key15": "5wk8B4qF8Yjj6X7mN1J6NFDkA7huEg5EsgptmfAep1QTNrQCYMMK4ydXNcQq9QY66pDuDJmXTk6bzpUdcdYot12m",
  "key16": "4LcvpkdxMd91YkkQ31DHFREnDVHrvgtJrMSpd48WEsJuyaUFk6KDLrJdj5nnC4QK2ruWyMwYTcEYiRCzRqYn6Mzp",
  "key17": "4RNFAF23Zeq3VxniAaGABESiR1TgGUwbRtiBTDi2hiKkL19jyy3K1kRibZaGPfHeHUorMhJbWhFAQUMiw82Yf8Mf",
  "key18": "7uVpPTiGeakM5R4stVsub3TPRZu8ZYxEQT1B2mjud7e4vykLz7oTMJt47Ktxw954NtYcPt6nd7fNmCwHKuENS5N",
  "key19": "3FzjqacpPqmFBHHjkQXtJqUDt4rzKMxp8nHDRS45dJG5VNmVNmzmQi9VoZDcwAa44pmQEVU85VGXaZXNbLUHb7m2",
  "key20": "2LxzjthYGwaLsAYuiHBvFyatXBVvHdAuEist4DvPSaAofJPbD1rNpNptaCGfXfDtoTRPCKXh9Ttpa2NPtj4J3nif",
  "key21": "5FStuzYYHkbNvmeoWKyTg7PV6JTWpPiieFfoujpbvpiMfXvqdLjvHCqXEo4fqpFpAiQVabRR5tgnuHM6oRB6axSy",
  "key22": "5SUZY7HfkWpjqgddkKqC1kR3fXQHz9QA3f7v29CNvPmgxrAeR37ThMFCTqexngt61D8SUmbZg8XWJnjGZLL6erkS",
  "key23": "3XoWZwJg5rMHSBW1JvkiuZXi6V7gSQbDbog5wJzcpJTJSP72WnSBMHSdWisvG7g4xhiVXVZQCF3B7ZHv43AhjxhK",
  "key24": "BVmf9WuuSVXf81razqTjxwe9fNRdanDJig2YM29RG6dfHCcRn5FuQ29EMPJ8XVG5muzJXUmNSvjgzuuiba8Wz77",
  "key25": "5fwzNXKy4LxqgbZwrdtrJ25WCePz8jMmxEQVD3R5V9dCdL2tYX3cB4Ljd4YDgXbLmks7PB6ycVHaobrHXpbcEDu1",
  "key26": "5MCGWRw4ezSSNUVCwCJitqLv8sa68zBAEcYSEbKWBMgcfoVnPBZn7ApdghHCvgJza2GCVTHii9WKQ6h2mB1KBko8",
  "key27": "3sztVGwD8FvNo8cgXgGzXdVrGjhSdo4XDRt5L7Axz6RfodgRkAyGgV3rFxEYx5otT8qJDkykXLSbjgnULKYTwKon",
  "key28": "PunohC4BofJKkbVQ1rWuHsEd9GdunX8tNj52KB7QLyzJvFkoeLJbDPDzfuZmfsGJcRega2G45AiQvpVok931Fk6",
  "key29": "5wGh1ihkctGiuvW6K97rEKrm5GKcbYEgDncQrQsGzPCsWWVPMRttE8P9qcb2SRPuwFKFyKUJjJVqVcs1AuvEAqgP",
  "key30": "2L2avbPbbW9Tik33jUL818zTdwdy9ZWrZiVaa8W2HPCmuZToDjkNpYcNy5Yrd4yUv6t878i3q7ZqpRnJiaun82j8",
  "key31": "4WPB7o418uV4fkfC79Ni36vYKFdZmKNAqoiPkwFmi77yZapLr7CGGvxEattL619eui4ACXxvLnFrfZewsyL1smqz",
  "key32": "4BJNRMihXX1tgZqdBg328Yvb9DqCWUZjYHF1prPGSYyoTWE4f2Kz2pq7SFa8g2HDk7EiYwmd8NUxXRp7uHG9VhCf",
  "key33": "4HydcNWQG23L2THavUSouHekYMunFftLFWLVhCcM8MP64NVjUNgwRimtzC72U6smXFL1KBy71s3zpzHHd9vwoRKW",
  "key34": "4SVycu1oLzKjJNS13Mm8CoVi26vZKMJmii3eDZdc6C2qM3tii4L4HK2dqZQpa9Sr4BqEBCcCGdieCvP6irwb6jTw",
  "key35": "3jwxAwEC1n8X6f1K8gXEH5N5KXZioL7RwmTQkiyyYfeRhKmfAQQQz9NidcxZyC58vAYFWHhMhBMN1RhMKpSpE9i",
  "key36": "4uvgQX94emXwuSwawEQEQQ1jWwUMV7yTy8ZeLKwYR3g2H8UsX5DLhoagUur21GB4FbN8vTC9iZ8MLhoUGz3kFGXr",
  "key37": "4AvJ1tfoeDzz6GnPYHmiHhefq8dn1GDN6myoywKfkThbZEn1rCFqQctSzSs4umYYJZVkp1kw8YU2hcETeFL1x2Qx",
  "key38": "3c5uxxHJThBQk82r9whAR71hXtNNt2aQcKSH3bJVK8LR6Pup5iaRvXKWhRXd4q2x33nia13JXy2KRk3v9JVsuYNj",
  "key39": "2aoQ2a1upyyuqw6yNxRbsEXdE3ZF5gXnmk8xEfSE5saN8G9NMKP28P5L5Hxy3Lm7m9q5G9HbMGW9MhQ2R73yiLar",
  "key40": "4jkXTCRKGeevJ3okQHri1DU6YWvs8TwHxEDVpQjVAbbTFbayjXyfqG97syzgjTVoWdXeJ94L2sZ61ZujzUjh4YUw",
  "key41": "63xRXEvsv2gPw8BzYtXq3GZmAqDT37US6GjvAmAywQAJnxvsCfXymEbt38AJwm34uq2YhnRPwy6KbspqzYAD5JdA",
  "key42": "2FahvBmW3U22jWuG2FDhXqUZghtVTQvbT4euK4ZgaswnCsJKgzYnJ1JTjXpuFJ3Q9YUKbwT13CW18JLvKby1kZpk",
  "key43": "4DANFqbzyP4mc6rQ9dr9j3JJ59QEZLti7MLdV7yKLfzKB2b1JNaC1b8eQEJMWbRuE7w3zarAsCkHMKXKUXD7Q8iw",
  "key44": "4VwHpFtcFVtb3mTVUiYjDn56c7jQHP48vky45ATuZG78k2YNDX5izL6GpCxCLjdNoNWGfZG8sBejBRPQzoFAnnkT"
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
