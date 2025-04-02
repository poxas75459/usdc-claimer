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
    "3BZtgnaRDRw3ShUDAc1QjTX1QGxGgTVGQitaE9G6Tzu6ZGmnPqCX8Z3TGwqpxFzHm3emJscVXnwMQTe6f9sXjBy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66iAFFxVKjp3DJuk5RUDEh8HysVAEceiPMmZ4k7X3MYy7AKajKxNDqKmj6XwvJA5VhQpTvbLDpvZMxr22JkZnoa1",
  "key1": "5obedqyKg9GwN3HVSDmLV7XMSNvHGU4BtCkPRvdnC1Et76WuzPHDoLJciUWqgBidpj2EogTBrfhWJW8wEncipzy8",
  "key2": "4wtDo2stJLTL7ow13FgXU2M3saT6HjJq1fePAobELKgb3VQsMJfk8kpCVy16HWLoTL329fGpAj2YsJemewNjDo4K",
  "key3": "2iU2y4UTHe9cTjMt7maPqVpDaLN5ocQnz8MTXn7RaX9e8fuXR3qnaY1wLPGJLse5WfxFq3nZ1P9oKn6Vp7N8QwjA",
  "key4": "32WHA9Mg4iX51YUqmRaPUrWqoK62bTB2yiVUyjc6Ax62wjXtvVyw88nu8cgRyUxYYrzbzyftcNT3pWCUUg6hXDJ",
  "key5": "5DsGoNYXVLmxkRxKWNVqmrhmAvafbFZV1UbcfCJJNFop4j2qx6JTVgCA69FfjZUFT46y6tGmbybBwNPAtQhqv9sr",
  "key6": "56WzTps4btmgwbUQqYwS9trPjoQSHEcLy361822MTtkDUUqkxA8dxv7mgaw58QVqftQVieLuNwamup6CWxdBh4yN",
  "key7": "58ToVFW2QnfkzTm9jUGZtcHA5YsmCe7DSGsL2utRjtRwosUZKE9z6um4ZDjYoaBPKp45dDhxtw9CQFCDRKiipYb8",
  "key8": "4SogHnksmrN4CWZ9hh5GthjG2yP93Nc6mZ2ouhgQsAX3AzKob6txnbGeZ2UMSbzgQio45UhiECDV8K7ss1ckxyj7",
  "key9": "2JDpb3g2hTKe1r5mCjCB5Qi1Af83EWfYGsiyGPm5rFK26p2SJm8sAMGtCUuq3gi7KvcKvkNsVWe8djRc36R4notq",
  "key10": "2wJF4h58KdqTvz9EB86X4KZeKQWCKGSiWLLR4sKmvEx8FAXo4YnaRY3p25RYXssKZSmhAr8ZW2TgVszACpXYmMZY",
  "key11": "2rpaxxPZoMPoJTW9yQukik2wwMQE9cHgJsBJcaKZ7H1UnxCmXQraRLiTdmdLp2tFLcLA2hs7xvwKhDXsNKsesEPx",
  "key12": "4RDTpFS2eYVyqJ86vW4qDvGUY3TB7XxeXk4Q1aYegQGkMev3yc4svBgq2SEUqK3z3V1DeA1nwEMrma2hLLj1vXt3",
  "key13": "464oRfLzjPK6MY1tdq6TgbANhhjwxzz1VCJVRMkcYtC28pBa66BJztib4nHPL7Qhh8L68jWm1iUBkSSXPFXhKttt",
  "key14": "5x5iT4sJ8CiA68EeiYmHmKKEoMJN4HpRhheGfwZsCCRgLSxP16dj3NSQ1h93ZgZu7TLGw9CvNdpYnoUPzDocNfFK",
  "key15": "5hjcM9F1RrB5J4k7Y14k4pBujQumavhwWCJX9p3JVeAfLVQJf6wrBSyymTrbJqfc9Jx1bLKACTJM1ftH6pxfPyZZ",
  "key16": "3epxdGPQ6rPZP3YsLuFTVQzf2PRd65iC1YR1mar6mesXL1KzXojSuGUPBcXuHfBkK1GSmApRstet3ADhbh64poP1",
  "key17": "2k7bzDpq2SEA9S2tu5M1EnAnu7P8Ufx2JAVLS3ndfgV87BzpFa9Bff6wVMa3ef85MNq1yCwh95sVJMfRfeBreS6S",
  "key18": "2oM2ydwxZXNfFYuoeL4BZT1xgzomJ4mfX61AerjFj4NednWgRHu4bwtoxafpG6K5iCF3WwWNoPCj9owpj7JQuncg",
  "key19": "4CynqTnJ9Nz8GtEazzF22Svmf8ZR7DHWWPBa1CUURozjG14aMQSYwBDumxQm7Pa9qrvgPnSXcYgJkDadaQNsbcLQ",
  "key20": "2q24eTJx9Lv9PpDCPbU2kjg8Rf8wjjFXnSbxweLu6k14SxgX436XCnAS3kcX44ZuZqnndHgXStncPqqEPaRsyo88",
  "key21": "MP6fraLfLevz6yvbT6VfbdhYTZq1mxhneKv7BAMbuNGrypWvzzoqicMcoQ7AoKzF8CqkM1snuVwNUpxeeyXXCTK",
  "key22": "4vbr79ucgRb6J1w9T33pmvhVBhb4db3EgRyEPVYMUNoFQuczhgRahmqrtWEx4jQbTuBY3u4oHacpTbNaXZSqP9T2",
  "key23": "2HBFNkaCgGuuhdP2CtEtdmHLTzUuqshofwm1WbiAY7woXA1Pom7cEwHY5PokVwvg2uG6ED1xEi6LvKAJ9PexuY1q",
  "key24": "59ZLChz7B2xREeNdDLk25toLi2NmbUNmumzAdrqvED3GG4HL4kNCthFipstKziVqPeZqrCFypcT5o9SknMKLFYvd",
  "key25": "2waRKuBBoLZSEW8WrZZUw7jsgrm6QMZqdmojKBEsu24eshyh2NAwGn2afLX5KKUqDs28ZXXEbH22H3RpiptY6PZE",
  "key26": "4WzQZMgK5vpx8iiwZXdLxFwKFP8L6Z3ijoy2NxiqfykCU1jo7aNMJsFXCvKnCxxd8HMfYNiKyWnLhyFKcsEFrdmz",
  "key27": "43BGJEtofXfYAM68gQwV24DLAWDBBrEhMiFcEU2385mm7o7FYB336VTS1QpzyFjKmAdEuveirwiCCjkitdNCDXji",
  "key28": "EazovF7bhsiayuNtukN8Hn4heD4Vhfz3Kz1fWryXhNcg2ccCDYTCgRVEwYaEoMbY5v889RMFQ5ku9ctcoU5TKsw",
  "key29": "8qQeTyKtPnDf8sPgGTtWNHZNzX9gydd7KBvfkarCJz3hqmK4XuczoNYZnZVgaermoi8FbyXoGBX4Lh9z1SFnjPK",
  "key30": "5gihDKGEcz5XDVdnpPxYTVgBVCjPTTDJvusxBUE22Mz6Q1DEuLTa3XMpT4LE67VeXCVjGqpxAnz34jJbjNxphEdU",
  "key31": "cWTss4oN6kDuuT2njLbZ5puqeT2XuunL6kbqKGDWUT2y19YbZZAfwkoaoyxhVXSGBKUyjZhsas5qNgi8SyE7YaL",
  "key32": "4c9xc8YGVXgrLtMm7vwWM9fwxqfV5bJBjQHsXko8XDDdsLg8WjRD3ETNBFQzyaCrrbHC9fQQsR7k1EwtsVynE9MU",
  "key33": "2u7KLmYYZVcp1ajiS3CyGvmBKe6rYBCTXyaWUvzcTaxvhjELd72JvbReea2nnDPFTqmrLJrQcb9EzrB7WC2y4SZf",
  "key34": "5nSUg63TfptmV5k39HtzPNP2pWdx3dJ1V2dzU4ov6fyhRAS9Pree7Xrebf8s5BMdwi2hRiB9SWFnWDWsMFGMaAZ6",
  "key35": "5qABxTWiXbsepqDuB5bEaPgPWLrqFHvsa7Khi3BC1qnUHhVsttaWNk6aUzUJN4E3441fLDDJcXeu2RxwNFq2xKQV",
  "key36": "2y78CkgJrqvrPziGB6QWcKzNRztrEjSZR3NNToZ7Gjh3LEEWKwTv52so9CDRyBpJDtjTALewLssZRHdqWS6njHQP",
  "key37": "25DMJPta8RjptmNSdnHjP4wj3DpYi83vYkGnYgHz9NkKNhq14R7dJSNRtyAzPTiCiE6gY1zS9uT65ptphvqLczhA",
  "key38": "3a4RZT6h2EZfgm1npfX7Ehwvc8C3Erp8kJaFEfLvSax1Z8QFtVsEZdmen8jtXm5dPC6hsWtsnQcaGHeboWmh5hz4",
  "key39": "31PTxj7fkd7AKT5XsWK9wXvs8vSZnijRaTUterq2qaAGsgG7x4i7HuJewB5yZfRahSwDobksJuQhpU31jjZWoo3D",
  "key40": "ZFa6jq8P2CqNaJNP42AyqsLZzrg3CQSRcYTUyMiZGzt2Ux7NTnQYi4gH3xLuzqxJ6TedZ994Kfszto4atnjeXv6"
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
