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
    "2po45CawD7KAbXfPXTokVHb1ghnV6wYqkSnDnpk8znWPmdoAnmgZJVNuD3KVthbmUwGFLvpjs4s4XkvdeZKudJCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VhyHEvhNYMt9mQiaAdA28MAa7iBsWdEn9HY3VfLugBQMMFjn4Jk4ReJDBDysfpn8osnYi4na1xHCdGQzqM8JKuT",
  "key1": "2jfXJetBqei8ths669zV4NNGx36czZL93Dv2vJvZMFXNAvyunEJPRLkY1thJGqTuFZNVzmLiaMfxxnkLtgG5KD6r",
  "key2": "2nbCqaZAAvkuGZms1SNB2jdrfUuCeAbKypfp7A8gMZhT7bk4wvzfVVHqDcTveWq668Kp2sMaDMs68LtULV7GuKzB",
  "key3": "5u5yZwBjTAvHRp74xPB29oaqRmNn6mdA6qn1UJy15Z6u56uH3zZQ5oPLTXJg56afgHMynBv4TNjs88z9Nta2Vbtm",
  "key4": "5Mxxn7QnSNK88dyafW6ZJpgebYrz7doMay22H46wSqxU3NXsseYFEyQCoc5kcoqRxZU2Ve4hPohpxAxPo5kNR4Un",
  "key5": "2yqDhoqyF8xX1vJtDfgZcBz9MYF3aWmdJqDxFT8nMzR5riCjWRrYKL2qBAC3u5iCekSLqb4gmstZBZy9JicGsho8",
  "key6": "2ek3NDP3D3F3QZ38VxFvW5vUNG6atWRKc2dkta532kVNhPHf1zEWughUuseXdU2x1Gi7TnMXhUrG6WLLsv5u3Pp4",
  "key7": "NY7VCEFNW23jM3r5BuVCsA1w7cZvEVX4ee3q5PEzDUmjPGGvCfGWbyjgGHMaFTs3VGLAh3YPPDzu2gAnxecBvnH",
  "key8": "28pgfWmd3YKkgsHrdhyYrVVR9wTSYsufcTRHBhCPN1dadM7nw2AiLxQgEsbH8eRrbvhwhKVPyQKYArpVis9KfZV4",
  "key9": "4kB9r31Cu7d51bZx2qMhrcB9egVnbv8KwKx5zaED1paMBFzfqEcd52NfiFzM8umEmwPoThJK4tFeQNo7PER9TWpZ",
  "key10": "5iWf34TgNV7SU73uHPYZ5D7xAs6mnuVcXZwF9eid9FtReXvLQ2fqTKnWgChpYqYmwnChAjs7opSfbbikuRCU6Rk7",
  "key11": "5ssqL8mJ4jwSJHyL9zkNXUteCMsAPs4KA9aoThYpQxzPwTsoTRU7MncdbGpwaMtgzV1Cde9mf3236JGQaxo4xLxZ",
  "key12": "619eSfNtnHAoMtjQWopaT8SDQbWUA82fwht61iMqjxRE1AsXvDcQwGqL9CVDc8m5zqEKE6rUqBYxy5GxoSCwTX6L",
  "key13": "5EUqJaUSix9Esth6wNeqBwpaS5tf9JpxuCxLSiAaBjwkUG8r5e6u3JDSRWuBiVD2FGefvMVMbn4rE2hc9A15kDNv",
  "key14": "aY4H1u7zmiqdg64KDrE164TVSBfLd6s5xHRTD5myz9dizBMhemsvKzJ1s681uAJNk8FZcsAAPLFU1FdM7dq8rWS",
  "key15": "jynBmJTuqXvdnoXUJTDyrqpJJx63Q42KAGWT8EXnK1CLrjqtMfzfTAj8UXvjKuibCHDKuDzjZnymWRcRTFoTCUr",
  "key16": "37vxCcbUjnsxBVXzW3VYJrjU5rLQPNxyWBuZCnb8F8Zf4un4UJj6CnCKVb4y9z7uossGyh8NLdEP8mGhZSHJ8gqg",
  "key17": "5Av3x6ABG3b7zVqKFQX1BBNykUawnwZ112E7z2iEe25Sayorexqiv8jpHKRTCMjpaTqFBUEyJFwJhNWfTz3XSX6E",
  "key18": "4GEzzrYySpTyTNjbjhT41qVFayuHDGd5YSrBBeCqGUpguDqW2ovzirqnfurpaSwj69LBkEBRtFNTQmrbu6AD4kKn",
  "key19": "Zw2ndZo89PanLqPmRFdEyVHyfCos73sL4K9XuW4uxLxEB7LuvDfpJgu49mkWNd3TgtyUDcwdAoJYeAY9d8FEdmb",
  "key20": "5aJkP13hYbpsuyVrwidW5zbhbvgpLbkmfzspPrgvJQZBfmDx2goa84akvt4wgX7h8abP6BqmYrsKt41KAZ76ht3M",
  "key21": "V5FCRJU5wech3tAWBa54aKqkmjBisnQpULYZc9UagnoxCdNanMKVm8FAzrzP5YakBQLu5QMkkr7aQLyFm7qRf7Q",
  "key22": "4qQqvBDkCupmJcHfUWVg52oU6jDGBTWYapGUzMnxFgH6ZY8NT9jU8uDznJSTyoW9SHms2Xx7bJ9FyN9Y97H87Npd",
  "key23": "5rddm1f9qULQfFdmUvPxWYw1J8UVApgEcSzhAjQkzosuenxJASfHjr7Q2Ufkgqyku1WBbV4dLX6HvHTsdom2kRUt",
  "key24": "59pxKRmGKNEmz2WKcQEfPf2Z7ZepHuh69czSdxEA8yLrSybhqN2amY1fW8vDMGvwFgRAyuEPG2CY8BHEPqj5SgdW",
  "key25": "2bLcsC9g2wFEzuDnPfEXhvtxkskdLjjfreXnM5b1RWgYRis1o8dvjHz3gZHiTtNM6cRKcsWFcP7PnobdP3SBNsim",
  "key26": "4nP6RRaMdAYgXsmLYdYf1Pwk3UAPSCUDCR9avy6pCWmqW9gJsHEvgRpyKYsZ21fDtMg3g3Ny6iWYfcFMpwgadtgr",
  "key27": "3t7k4g3R4bbsjz6RfFqJHifyDhSVLHHqh6KdrtqpUEbHTW68KDAGcNsUUf6pbGQVaMY9CQCEUben5uLsbSDU9VVo",
  "key28": "4BMrw6uC3pWauEWaWMk4ZjogLq5MmtShTfWJQqdhfUjYJTNqmRfi6xvyLWpu3mtXRgVcxkbvt9aPTN2HnNyitHMK",
  "key29": "42JpP33SAEgvJGXV2dYBeMTwvjdKtEM96KreAh9q1BFkT4LvEkFRbhBGxwRYjuV7RxoH2asXxyoBvpPTwPgbBRWr",
  "key30": "3dEtAMh6uXiP4ssKqtREgQWixHRKpY37jocMzCmq7dE26g6aETZcUw8EpghkcEm6HWu2QH6BocxS7CAs2KnPmR6J",
  "key31": "35GykRSVM11nnUNGbD84bf1QLdqtV2xyjTx6aFoPWxsaRiApejmudwmfZpGgx8UwDkaD1UN6uWMTTwBWmLxjYdvc",
  "key32": "4iXVwcfDuz2BBG2btLE2xNwcHAqcHtM9jzHuefAEAS2UekBi3eJqr4yDq57WMgbGTn9yEWALAARnw1PDtRf7ZFJa",
  "key33": "3CiGaR7DtBZV6zSyiNAKFmCCYhv6kqj3AvwG1DELrLDKqLf9MLuSJWVtcNPcv1ef8YKvUCUawsgb818ZdDQN3SMn",
  "key34": "3YnXR5UGNpNMDzxezWNQcqT1F9hWgJU59zLijTMsghvzuuzPSwcPx4jdcf6ohzphxN8Vxs6K2tFQCPaGsobuqUvK",
  "key35": "5KjpD4R42qc4QJ5JrTFVrAuPukP4fphZQV1bhexBvwcRr1nHa53QoMoEQQ8C8E33rf9sdbeVcGSqGkuh8RY3hFan",
  "key36": "3xL9Up92K1Shupqq5yueJi92oy4r8pqBa8JCS5DN3zvCzusTdhbBVpsk9ui8UhNntdBhCcPtJ8GCLKBPVWduiqh2",
  "key37": "3gzMmj7ZxmcCGhLy2FxVxsDGgL8vkYFFeZnMoByfDVhtxLzTTViAn1RywXd816dpc6juKSV3n1AE49NB4pjGbCvW",
  "key38": "3Zb1MvgufWQqJ7JS8tVtJg2Kghyat9Nc7Ko84FUKjyTch5kGsKDU6zbaKBPtajvqFS1zxAhzwzjM39GedG4vbEYh",
  "key39": "3VZRkSj18SceBtVP6aKRDnWnmffNaheRhwGGsek33dwv1xWj2dr3LcXfwuautJNSYNKenEyW9jTxFeetEMrMdAAS",
  "key40": "2rGNG3CVtMCSQrQwm1mmQ7NsQkbB4gEvzEWA2Ce2bqe3HRYZWAsfz7XdtM2vN1BJS2AJQbQFistQCgns7Q4rE8CQ",
  "key41": "Csfz9TcC45nYPpZkKj3Aqi8DxNwLo4F16M6PDTQjtJdD7igkU6dDvyUgvmZmJsELRprEg8f2yUJwA6MYvciMTrH",
  "key42": "3V8Uw1JUvn3WbYtsa7VKiqfKRKYq3rorxesSa1LB2uroTZRfQSBNhqx3F3VbJuXw4UPi5JWXzruitkdKbRNHtx82",
  "key43": "2he2APXVN622ePyVzFCPAtgEUKhrNU9p5r2JSmFYAM2gvQ8cqEb6xwoQbu4YfZXysaDh72iVjTCjmZWR532WWJfm",
  "key44": "2B9ky8rQ5SmMH22TJMzdWFSrPKkn3GEJDdLFFWnN3F6rfYFPDpYSKv86CwoDiHKUTjqTHEewCUnK8pNbXsMLnDRf",
  "key45": "S6cogRJvczTecNsEmBx6GorjucEqH1fakbVTKsGtjvQFZGpeWgWKKzDsjov2KEeBj7cYYwRYNkYBzn3Pq9kba5H",
  "key46": "41zKWpg5Ld3Bay6cg7j8CiyaruFWJKNC8DWXCnxFDj9fXwYYuXfdwgwZnL5LwFcWFLNtGeYuB5f3ywF3hFhGABBM",
  "key47": "4GJTVV4R5TiuNk47wg77QGB6pK1XidFdGRPxnyLHzdxKzWV2MmjYNKpf3VpVC3R8VdGtB1wuTpXR48WusUTGF8gk",
  "key48": "35HM48Bxt8z5KwBzM2siYURFT3f1udn6GTkfS96CMqaEkBCVjpm9BDo3KLKJQWaS8koT52N5a2iXdNcJi8K8VqPZ"
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
