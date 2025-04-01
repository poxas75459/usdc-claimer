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
    "4yWCBJwq6cfe7pAHTJJYQDAvUS83Gg5yHchBXxECi4L1nDkqMhE4JhjWv7QEp74SJFtaPpP1fbrH5U7A3puqyoMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pQFqDwL64pticWtRrk12FVZNCWkfuWtT82Lqvq6Fpxrt71xajFfRTSEb8ShAbMwe6RynomJaPYD9qDYvrAPewj1",
  "key1": "nXmGN2HHxD3z6BFAy1C1wDrdT8XUw3w4k88QtTESqdxN9QX8gruZZpxzj9Kke7hoPV18pyMpJbT3EgaSdLdg8tZ",
  "key2": "4jfN992mrV1qTmJPDPkm96KGSALsgR47kVx7tcC37Jpi1EYjDeJY4QSQePdsGRuUepe7Csfps5G5JHSZvQWHPGHs",
  "key3": "2G1G5BEGoNHskeWYmZwyJ58wkaHQ3Ga3M55TQZUDzsRANBipSK1F89gcR2DBytyX2AqHciZmXgin2H19c7yeaaJA",
  "key4": "5hfWw4SDqgrrDVXVLRqNJgA1EiAbtm1NQGLVpCT4Vw1gMmko4CJfxbCzvrxQ7h87yNron6EmQeCkkqWXh1dgFaXJ",
  "key5": "27PCrwpjpipMqkXH894PWsaZdd9iFffB19JjPuK8BqeNv6oWXi5DcoMv8sKEi8ucuTYGC418tKDEvQKeg4dB14VA",
  "key6": "NRZb39NhCXvwpPar7JVEkphfbP1iaN5HSYFWTripSxBgfJYy7rboWirRNyCvPxBu6NjUKx8q4VfNVotst2uNgt3",
  "key7": "eZkUHkJubJ9TJNr6j1kFecnwzyZA61F2zJqbwCPQW78VFQR2FTae7Xsf6iKbwT1APzBp2QyfaqhJZFqCTVDL9pn",
  "key8": "xkuPXZJ4RAZ711LXuC26LfUSRqwk9QajJMaEe7bMRzuTDnv8UYoZUXZGsp6fQFpH9x2HBTUWgBYviHJKuiGBzCy",
  "key9": "4ZcDvJrEJLZAceLXt8Zq8wNBA4j8DsFzr11Ybim7gUfQTfEN9nzJnmZqrAnAVg8DUGo3GQ18ka18TLgVa75qHPsa",
  "key10": "5Ly5tX7HEncQyxJwsux3gNnHMydpyJfFbZ8QeF6mAkYTH5Jcz8vtYkZ7W8UyGECPV7iATo9dLFyoS7rr4QecvWUE",
  "key11": "JyTQ6KwCKdTJ2ejME2PvVBCid2e72x7ryvFuGPsQ8bNPGyDGBMv6JBLT1jRnDyz6yuWv3yBk1YmwDRUvi1QwDb1",
  "key12": "4Z7znrRZbwwHqVjcrGg8AHtJ19kzu2i5cfahiCT1LE2J2bmUC69EfSvxev9izsazwSWPDqWesy1Pm28syxfa6dhY",
  "key13": "5MavqpyCgqnBsrpmJP4WLhmyS37sbQRQvXm1cqGPEZikoM5fWC3hc6KQ96MbyDW8SN6Ch4N2DBfetkUfsNW6QuY6",
  "key14": "4H4iJBCj5RSSvp4NVnFbi5jG41SMbzmVGxsECGjj6SxqZ4bzwW14JK4eVJzbndrfxh8DVqK9MPpL3hzdPwtG3bJm",
  "key15": "44EK2rNzQyXgdWznFt2C384ntiBjCi8XBE5z54RmANWScm4tJc6DrFkJAXXCmteqYtXswFfN4MiuvtGWgYH6EouX",
  "key16": "5qTsH8Pq3gJWPdd9LC47HhfnXgfuxvexjR6DxV2X63gLZ7ruYcwYcizt65sDdbywXik44xa4vEqCegmTzzsTGKMG",
  "key17": "5BP7y8vF65QZNfdkfVgHpAxKKMnXGoNF6ns1R1htNYRrs4GqMYMUMj2jGYv38GTV1CW1c1NzLdL2obiuavHk3Xmi",
  "key18": "5P4TYELjkgJRav1KXWShg6fVGNxttZHbDuYmdzdGUoYC8RTscsm7WQ5w41KSsoKhcmnCupgthqkz9XuJeCxyhYdV",
  "key19": "XhAKe4bahk3aShXvaHwpp357dspsrGLUw9meG3P8RPXpG5rcJ7sx5KSMsKnSLg9dtcfKHShjLA9DJQetpsr4hfD",
  "key20": "5q9SBzHh4BD6YJYLUsKrAim57wMhiB555iCxbzMfhW63XSk8TF9w8jaN1cYXYa6w9wM8beMphcK2NG4SxZBDUqg8",
  "key21": "2yu2SqsE2R8KBYr2TUPHuY3R81uqvAd2VSYRUPq7sTrYKiYvqUHG6C6LR5op1KiRZS571CFU1iWcRp8UKGj8i5z7",
  "key22": "33LSEBPvUuMH9wcmXUxgAzEQdpDtUvn1QxQPZamqSZv9h51ZTaLFiW3RE8RshT7hF9SVxTMhjgZkNLpx8YAnWjEP",
  "key23": "3Wbp9R6SQ1uGc11uTbagLiF6QY7z9mSCvfSeDzD4rWQSUUDda2Dx5qWQGAzhJ612mo3VbtmmBVHR5pTdzTydbeTw",
  "key24": "2VyF34s5fCVqhskwdxKobvDTVq5iTJRDKwTXxGvKYkTSdrg8ffNQrKe7hyLHxGhnTVzPxjKExteuifEUEkEsiVCj",
  "key25": "Aygzbw1ifU1kY2xa3S7NeTi9UZs6XZHAehbGoXnSaCysh5VTjXeRC3SCV8ygv1RUrvxun5B6ckcgXAArksLSREw",
  "key26": "5XCRjpm9N7ZH77JaPucEzY7hMKDuHpscnPHoRRceHJ6d4cqHLDqrNhs7hWaA3fyCzP9SfwH5sW1hBpuTnLMcy9DF",
  "key27": "4d59d14eDr5BaZ315rNLKVjC7kDA3yfuW6mjqV3zzA1orrTZUGEjdYduMWEBgAiLGVhmxcNhHRSB3Et4ueTU9v2e",
  "key28": "5evepUhqnZLHKH3dwtchvqfd9BJTE1HgJAN6HH9ZzG8SzvHfLjpz9GJ6eaiZiL3CHigsyWjV6nj5kXf2Zx1gnURt",
  "key29": "bxX1ovXHZExtJtTkA8isriuyFPwmTpp92UNVHs8bdMq28i9r6c16aGwKHw1x1PiCE2YMmUjLTs4JxXhn2JC1w6n",
  "key30": "41MzcBeyPNUuLeEVy9gnYkcvGVPjbhGwWBGsDTS9doq6xYN5kiSXTbU3V4t4NocphQKc8VaR7aYnniAPfsjZx4zR",
  "key31": "5kEFpCECiNN2kzJ2ZU1S8iG6hqxr1PDoLDJN3Nd4ybyNPETMhEb2i1FzHnsshbWdH7H95Nac4PgcwuswevqBtze9",
  "key32": "4fM6RQvwBmTYLRdGkyRs4XPJt8Kzw3JPCq6DqUSdwZTkfvUrfEr6xMnuR3ZirGaqSuXC8qzzQxCHgrp9TFQw18P4",
  "key33": "29ma4Dkw68KehALUjUY4Ej9yeN3cunVMxeJZMHKJWFdFWnitiss7do8EVQ4cJ6j2Ms1HDtNYD9UKWdN2814sAaax",
  "key34": "2NGL36HxrdxZvSLkqeEePTQeuotmK5DgV26N5yLuWXrULP9h3dNSCye1aGEyZuXbbLTgY7eU7MhWT246V1oYWb5a",
  "key35": "61vD9x5PVwiHv7wYD5xSRVr72Yf2E44tM2exTReXc11zYaGqM2FwxPKpUVagPbArnDQbjUuXWxSNvKfhp44Zehy",
  "key36": "ReGnE8HBodsjs29jW9Gjq9fr3YFc5FWECa19dfxyXVDicVXktRKrVekEBrECR5whVmLx3r3zfAe7gEYFvDtckE4",
  "key37": "6HSqdwakjDM4ssrAHSRDHLRL1cPgmjMqt16nM9iU3uA8BX3tiCQgvF1j2uEAtR8RjQb9J7QnrUy7w7qXXJ5ZEiS",
  "key38": "TzPg3HV4SzgojSoJMPUQCgSAZXGTjjejoyyyt7nABVfmnnMRkNuniTdD1Sct9LKkpNEX6V8HoZpNftzrzqdWXLT",
  "key39": "2kgENtJCCLvNUyjrVxz8rPvVg1FGVc3JCMmnoGe714D9KPJgP6CVHPxAq4hbe3UBq5ne3NY3JkRVUUyv8F8Zz1h1",
  "key40": "YFM6nZ68fk52xEHNvVB2KwLCy1By8TfDxhduPfCAKtTV7FWLXjKo52edzBruLcnNDVmVPuma7U7vHkHEwtBevSs",
  "key41": "3TZi7m3KuF8iQVBe9u7zWJsMYoWXsSXubkG9dq6heTHCAqiwitStqRr5b2uQ2smYByoUw5uF43DzyL1KGaAZHGNK",
  "key42": "66xboca8VmajY11zCtxRAdQbVcsEX5CNSPGogmUS4cnHSjk44syTTDNZi3XfBnkiKYVGmkrKaisK3Ur4NRpXqcK3",
  "key43": "5g7Thj9E8U3rcZWmBQxf1KAGXdfY6AKgbas7Kx563EzBGSDUywGmmxD8kcYaRKBEs6N7bqMjuJk1JkoPgdrr6hDj",
  "key44": "bNhmh8oVaoJTcYKoZG5n1NuJRaQ4cKjDWDGrQ7EemNTvbT66wrC5cKX25PQziP8zSJx9piBUweR7AAf6pbECuQh",
  "key45": "2VnEeKjHHkVnE56QSb84FASCW4DH2D1kUCTAxVUA3p8iQCbTyBj1NbLgTmL2epxWmXUGcvSUYHFJgiDZnhj7gryT",
  "key46": "2SGUtgUjHPE9DkWbyBVGMuzPqH5MZFy2b9ebwge6nqLESpfdCjSeGqqA7kbyRi3gE8ggYArB4WaWCXtvs7irqMbh",
  "key47": "2ee32G9TLGJit9hfhrJHRsWsof76NMfHib4DFHmmeENNGdabpMahF6BEkenZdmvvLUEVEpiX2KnkCYsDi5Fud5rL",
  "key48": "5prK4RtVRW81q4kuZpYya6AF8g6r84ie8Rx6monkCLX5dgf4iWMBM1VyEedQeegfeyZbj1Cf4cSZQNcKR8kDF6HW"
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
