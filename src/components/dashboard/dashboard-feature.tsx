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
    "wm3XLFQA9nfCnGWpSXWkakBtAqvjYHWsc9iW9V7WG2qxLxWjAE6uzqWSLiHWG5bZJiXgBYy3inPrAKZPbmqBk6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kabNMBEMtVufh9PmtigzU9XKXxMBe8YcpTF7rxJLwB2ezaZucXbwezGMFQmH6jmX4WZF2s5TC7jAsqWD4tFfVHP",
  "key1": "3FAYLifNNHvTpGH835fFf9SKAaFvVEz6DbRKJRz5Zm9CuoLH5AtWa8uxDL5WW6bwmHPhDWp3dkMN4ATn6CnbCeTt",
  "key2": "5eJ8tZkGGbbyZFsAuPp1yRnCNvf1dEN1SYutTN55PXzZWDwsyvKm8LH1CGC8VffWn36C5QTL5g9ySu9zbgreB87p",
  "key3": "5UMFuZdJh2Sx69YmcYaK2zmNeSwM68ekHNq8SEt15jgUonsATABebkGWoJ6uBwc4iPH4n5ryB8Yq1GzdKGghPsBk",
  "key4": "5zVrDzAhssUA12vtAJWVh5pYHfWdCTkaZQ9ai9JPcVrPLqagKZ87RQiBSmGJb5tkRFrUu4TwY2enYUDrcin98N3i",
  "key5": "46HiAaMAfENuww7F1Mfo9KELZZvY8gm8nFMFapD8xpEQjdt1Sbm3ehwZzP3Q38H9JPNt3Y4sk1T2rBXb9kPNp3Ez",
  "key6": "269gJjJ7wwWUTVz3T3yzPvCJFwJhdRHht6feWkhDAKpvN7YRBTfke8F4L9pVXiNj7fCrFMAvwC11srwFqbLq3cnM",
  "key7": "4KopAUPKCFNUJw8aopmX6qxq6qvp1vU16ho4rSJJjuZrJLgjUK8Hj8duZDK2A97tvg6vLhGUpWbENjPsVrvuDJ5t",
  "key8": "4T8hRbLugz4qHVHHGdotWiHK9hTDj3EKBYeb8HpmCgkWaawV7KgmNMfmsAUcp2mhmnMhwzSAqCQiWwmdAATeMd4j",
  "key9": "5Ko3W4cLsVpwwgmbRgC37nKrFVXtWVm68TtqdfVmfK7ySudWi9bW1bgPPMRcn4xqAkAUNaw54zAfAgKiW7VSgerL",
  "key10": "3xrmf18PEpx4BsDRhp27SHESoX1QGBUcZF4qgvGCdc521hcDSoGgTNtZf636WGMXWQ25nUHoJRkYTKfzxjoZyBKn",
  "key11": "5SjeTtpe3ihYLA4h1GDYtRctJDoxkZijF841HZgyRYF6EyM4siZJGWkCrc6vr3PsLY748Ys1Ad1F59zVQHmWS4ke",
  "key12": "5RvZQeXJEREEP6gTvmexTUeH7XfZx5zHeX5dAHrfaMfbeKgNVrb1JPrQShxQSs5UKs8reE2Q1fUnXK5d4rpxAW9y",
  "key13": "3coqCCihiwuUtxgLhaGYYA8gEVt2SBxoTQZmjdq1SifUtwqTrqDhgTdA4rogewMJjNhno9rbMzpCxEWWpddfPZhV",
  "key14": "5jJ8vF7EvFK5mAFjpUZbJqQYZGojERHiXSqRySAswY33dQe3FqjTgtEQGW6wQHbnSWLPFwVLZ7SeytvZsZoDkgfv",
  "key15": "Hi1UesgXhWVXc7td4nNekKw87T3VJY4GQHYvvAiCDTKCWqMQx466nR7RzA4AUHt6bdSuh7dtVpBRwn7aQcWYPkY",
  "key16": "3s8JcHaz6622okfdLGBPhUZZdAVKxDWyhvyucAu7bbfaMKmBARGgjg4eTEf7TUCajiB6zc9VSnYURTZnR1XjZFHv",
  "key17": "5ViipfHu2SovCk2yVSUxuqEM62N2uqpRPrE4QA2LswQN7Wn9NBSoo81Q5Nw1QWBXhfTBXvW9VWfeeNu5BYXiMc6q",
  "key18": "2swpCBQNiuwKxWUzh17mnc795kHxprYBY5dFHmhPnZaHPhw62MmiYHjwbCFrnCKapmtE8jggsXBMDuVU5pm2d2wK",
  "key19": "4X6QzzhDLfyMjADxjas6WnFQWG56E8dm2Fwamc5dnx8AjagHG2a48fwPFYVDSwBUhpx5WLF1j7Kr1VWgmb4yWzG8",
  "key20": "62HKvYAnPWoF8af6RhhJWKXSQdHbfE4bxsQ4BFeS3FBkvm8sJKbetPqABjZWN4CtaZ9vgMQSDhbGX1DyEZgXHeeB",
  "key21": "26LPc31USjseYd3UbzcULWuEhmutfSKyj1h6k6FdadNz13hGj6LNbcxU5faMffwAVE1eNJAKtVkSMufUbN5ojjBw",
  "key22": "5X5ze8ewpzYQcupZP7xtHuRscbbwkLCZdvto3nCwjHEsUfYwG8XzWN4pWGPxjfdaLysAtFQRGC26hhaERy457mdK",
  "key23": "4sRz1hFLDyCysKiMqnkHixp37Mo4JWU93m8a5kitBjJVpXe5H7Cg83Fayt3x4kpsLmv5tQQSiqVEUEctdDkbiB2D",
  "key24": "6xMwywXNjjgiVsFkfsMQjxJEUwVQyi41uBNdN2GTbtBQAEN8PgMnGUkUURcyE4YXRchJT1vijs5Ns3MbNs8nBxH",
  "key25": "5omM8SXixKYNyGwbN1brs2okqMZRAijtmcDpGkcwYJPuZoe7HZBFsZTq3AaFMcvnv1hMcvdFiJMEUjLy8qVGvy78",
  "key26": "4dpz3hTdHXpg6JPYWfEqyWHfTVqvmHSov5muF5WBfTKXShfJTuq6AoMU1q1PTjfsqUuqR2T94T3WhtxPPGQjDbsV",
  "key27": "9Eypmy5ekAsVvqHuxDbCpD7Z6QrrRv2ARefAPNSoVdMNAACzVjq4u3zHHZyxGHNPqv8eNfkC59TAQ9szEYBfDDS",
  "key28": "2H9MhAsfUvmcnCojPPaKvUZzpcAyrXfxuoEfKS9UrXKF2TqbHGuDzPneB8xu2G6thR43Rgd6Hq8SQ9YQ6rwdu54y",
  "key29": "2qGqso8sq5npszKR1QGUTRUacxnDT2zKtYurRLTmfXjRedMYaDdefWSzgyjPiFjTUFY2visd3cCRsEUD92n6S4To",
  "key30": "2fjDMb9aeWKzEngDptP5PTcSJUTTK2hHjejYJFVecujEsx3vhPVPFprBQUv4ABTSSDSaks1UuijSSssZNX1uUjH7",
  "key31": "5tQeBa7fSkKHdU5XfpLznSMSgGrfR5U2giEsf77A2s582VrDYhn5FqdgZCyxkygmWA9fAACeMawGeMsDRMZ2rqyo",
  "key32": "4BFSdxz2CRMcCy5eSSLzVtrAjJb6iirKwjxPd2G6ZvucaXiJJRwJZwj4q3YQACWz3Kfd2xVkdaTqQ6h7WpsBdn3",
  "key33": "22vCxGFDGiHrwXSiuqyutLTAvLBg6ipo5BMv8ymmwkrrpDVmcUe7cDT9ATAoQAMRZFtL2uGDNycmAX7RPCH5RqAg",
  "key34": "3DJNisUHexfis4FguY5rmnpgsKwQBgxRdc4qHStayrvRMU5KG56x3QbuYH5MDzdiYsuKMDfXDcEYZLBukzyz3JYJ",
  "key35": "4aUJhPfJnhBnmFyh8Euurwmoj7ibngdXfifXXxi47kgNmXhSp8EziWoN2nzs6deNqrhjrRZkHqKkNfaHJdEYnKaj",
  "key36": "8ABfkZN3VmwAdr6Zsf6zT7KtLLyTBPsaeCho9gfkMTUbVoTnNEaBM55udqqzEGn1eAGJvpeU3f28vkxayN3dQoB"
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
