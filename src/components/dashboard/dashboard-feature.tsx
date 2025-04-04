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
    "5hEesALLeqpaGJpRK3Huwi1LVvhQxYjCP3fJKQYnSUBzeaSW5JeBq6y1eVuuJM79D18fnbitD3rHLFtnv3tSUfmu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59xkpPvtPt8bL5T7pK9pbEGhDAd91aw4fJfqeHFBypgKuJCavMcuzJq6ntXR4HaWhMWLXyakK4PYr7GaY876zM8C",
  "key1": "5nP491Xo2AuNJMCNav2oM1fCDVV6GB6CWdTiyCh5twDVh3b5YiE8BJbmTcwBnjk6yCmGoSJtDKQsovi5Z3DjXtQV",
  "key2": "56pDSNBTc4ZEbFk88CAQJYDutgUFHYYHS1SWSoB2t9472W91u42WWJhT81cNMNje5VGGp5kDt1aSnvjuZvPR9Foe",
  "key3": "2eNo6fJQEUqhCcZurqsvNBbzTsFAKvw2gth9BikCkEFtaKRzthzf5N1VEeCFumT22qx16kzj5vp3vUz2rEo8JS4C",
  "key4": "L6hEitZGu18zCSYSZCY6nZoo5V65Tz7irM9JozCGoiGAoLS6pU4v4fwdPkqVGwrdfrTahcP96m5AQhYp5KabrPZ",
  "key5": "355fDb44RCm7GihosggK2VwRS7gyrW6tfnQw8LxCt9sjR38Udey5BsLJeUfmFSwvrSPcWh71zfbojwLP2iQnRkQP",
  "key6": "T37t6VGj8XmpncBt6kzVJxmUiBkuofCb9KpHcgbi2ixNzuGLjddLvXRLb6JuGLN8v2gqKof2VHR5vgyxvEme567",
  "key7": "tKneE2WkbYjUJjwEYvdzUUTRp1zZbuzmvK1qHVAUrriLuLfEEumRK9i5BydTHRGtGhWbsuJUGFg91M1bhzuSn6E",
  "key8": "NzDyid7PWTPoTAkpBFtAboX9ZiYzWXusuPzr7ng8jKc87vD4EhfFB5uWJ2hKPiApYXj6i3Wj5nXkGwzqvco2ZSd",
  "key9": "46hizvUzuEfjR9yyCt3SH6WSuDWuTEfTXX7p9CEGooaFcrKUpbRZYVn8Ppscv71ZpeqSwHfpuQjN5X3Rb4LjLsKA",
  "key10": "5LFue8vmPaTjwknVrDxWycFLk868ukderv2dbiUPoHYEaMkbMYHpgYixmPmxxqCmwjVBE1b1o2t2cWidUzGszzRK",
  "key11": "5gYCGcTeMmbmzHpLTHZXsMgtkvkuciNsUJuUK1yPJCBTNVanbi1EWMkusZQbPSRbqMBPiaoC6SfmKhjMW5R8BdC2",
  "key12": "4ZbJ8zL4FZqeHuwjWme32Vau3NMnVNzkydfKHCkE2ioSKjyTbqvfYSwXGXb8CAk4FSG2h6g1tGSJm8RAnnfq5gYc",
  "key13": "58ChnDhSq9XwVZyzo1YfEbhS6DY1v9kmA9r91QSwyqcr7AqugmgvxskZRYJ35KcWNEEErTpaeso7VjEeGcmHYfvV",
  "key14": "p4EwQ1GGQUuAQq8k3nHphizLUz6Sm66XhPE9EuFWk8u6H8TBxArWxdhPfwDHFRvtgsgp8ZE3zzk4DCbbpqFqQ5s",
  "key15": "2ZnHEYeMk6RPMJLiJCh9Xwaus2vuu3QfBV3BhzscJb7xshpnPt2U7RS2xFmkKBmcD1eQtgC4LFxj12jkYgHxUatB",
  "key16": "5p3AB7xNRFAHgLUCjPqfn6y6nwm1jG4nzSBYVzDGMiGF3e8HKLGSNLAP1T3HF7QMLQwfahXnYeDyxkBNkBWqMu2J",
  "key17": "5Why6RfkWLLC5z8LR3G1knE2j2UomFZSMNCq3bYrHSgqiauYpWnhdg43opkufndupD65851qz2DcZbi1tTYZpicN",
  "key18": "2WBTj9rfajut9RyMJ9bdNSKXR2vj7VGpmPS48egJsp4fqCikXojP9Bbs44iXFdkHNFV6iSPydaLq4B2HjoLUJkeD",
  "key19": "2cRQ4zP8cXxFGcxxNBLMDiA5gG7CSq3vhAMqTUdBLeck2VtX6Pot7dr96ohS8i6gwf5BYGahdidx79BE2Fcsq7w3",
  "key20": "5trFC8duwrZ2aJTYprJ5uns9JB9sW7x3si5KCZFqQ9xRHDzGDbRaTKo1xqLNHDnX5DFV5MTSkLuY63KKuo5ZHQDd",
  "key21": "3GpH9eNQbcCCdi3SykymVQi6vwJpbgZyVU42aSjP5EsaEFhhyRJvyZQThQZcFHfi4HiQQ7gqJkpPk2XeqGmE5H8L",
  "key22": "4Z9Epx5VYGyJAft93bPFyw3Z7HQGK7wtMEfNyMH7oC9RBntoNPBwK8v38k6tTZuE9XyzkQ5XRGE4DfkqgQ9BgsAu",
  "key23": "46Z22MV3xPur9jsBFLfd4q4RnqZfS6RZVPdZarNTJtYddNsswddLwxbwbjftMFeQwnTNzK6ebcXGYQTFm6en2jVh",
  "key24": "3uCYJx2GDXyDvq3Kzkb62wi5mRsmf8JJkau7VECwQAvzWbyujWqvh5XYC3Nv1dVW6VGEWEPM2a4Fo17Kuf2vznvP",
  "key25": "fN9HoCCFuu17VKJoYpdtoUHpVhfM5qx24w5aNfuPAPn42x8Wko4CgQsQUC9Ek76JApWz6Q4dPJim4h54nUPYJAq",
  "key26": "4nMeGFg6KreCrtSHVc8J2ZNuxRVRvf3yHmYZ1Wj5UETxmQw6ZQRHxbeBNURrMWpm5KJhFQGaz2tZTGcviXNHe5uk",
  "key27": "5c8orgkguvkyThxWazuF81SJPKMECzzoyVrkfJtawu4tDB7rwRohbwPeqnwuGxNWnvUXaodaFp6RCmrYrQvX2c52",
  "key28": "5syu8aPDWFF9wmvFFWDnsas9n9aPLStvq2WEmKiaCXBZDXKxzHXFRYVG6DN1MBDnHpXAzKPUxzx3Aa9VPpBQGxL7",
  "key29": "2A7etKrcGCNEPtdoJjBz6uUgVTEHSMQXjNmvT62gVpnVQzwerjfTCUt6y9q2u9FdhvThEsRvaZGe7KWykGMp84tb",
  "key30": "3x8BKrtUScrUYw3whJL37rCnzuYyccD4D3XSgNUbohhMwmrLy7QjtP1cEBAbZmX6ehDymj1F9rfZD35aoTxNEfUh",
  "key31": "wVyJfZAg6KngycVuHZPRWMAEeJFaDyW4DUgeNYHthHyhgjA3ac3X911E6BQRi84sjp1bXPFhGUxoWVNZfg9qAVK",
  "key32": "2yvjTT2A9rRG9ZEExxkmGGC1gxphpDFb1nMnsJkQp7nUvZwcRk2PAQKM94rsSkjMZ5YYMiH18BvANMQAuqSEaGsh",
  "key33": "TepHFYYajMakY63472rvsYjdqHT4nJoBvmtUU7qJ7D5UCjiPsdUZ63begJed6BSa77xm9kbdrPd8aHpjAqL5Leq",
  "key34": "4AXreY56xjXhXJabbAkbACXBSLe6hnfS2ffpGMPEQwGwwJt2DtfDXrtFTsYAQKxaBeJQTMJ2qXhe3X3u3Pm3Shq6",
  "key35": "5GuiENVc11u2KraJ7pjTM7fTuewHUBebA3PqhpBWaykPU1sAT9cwDc6dVpP7FhQs4jRXXRSQQnCa1zGiRMbGttPs",
  "key36": "5CRkBQUc6pwd4wyHQDprUT76MnvaJJC3PyAbWbci3Wy9UMWpRTx7BUEw5tCQPZfB52gRUuZyAscQ1NUqXLjCZ6pW",
  "key37": "5iQuLzKtPdYngvRE6hDMnjsa5S2H798bNwFpmKuZKTYUB25HtnzWfNYw4V4aCMPj8akrQFXfWBdPExAZsBiCSShQ",
  "key38": "2TZpGGaypFDgayEMwj3n4sWb32Ct6vmRYyEyQ6a74rNYRGG1gx6QGHiTZpkQkduxkqFFMjRHdoeTkcYQpPZ5Peki",
  "key39": "557ZCP3q1aheGZvrPcm2JYCqNkqureSPamrGa5RmvU3tazfVBpFU3QQMGQ4jikCUM6qvNVHgciC9wqSWG1zaYe1B",
  "key40": "gPtYnPn5VBnXQsThTNxcK2CjY5QehUUdy6DhZMtVmaJQqrVKVk1gid5xhtLMwdThJqePynJy8LLTA3MsLBX4Uir",
  "key41": "52zcsXRdhEgN8zUZ3btzsjYKZzXcf9r3xk8tB1bX5AVwPNzMDqj6nm8V4KzHzcXn5sBmFpdrhKGpZTtH7B3pj8s6",
  "key42": "4PYUZLAydbGm8HvWEPwuuYGa3qpXiRnpxAFSoeoFhxncqe25xtdmiKUYc16e79thyVrzdn2FUL5Dces5snbSueh4",
  "key43": "3bzPZv1doLMcmhnLNJiH1zyxU1RtT6tuv5PhzzLwbALDtdQqbkfrBsjknq5q3TftuefXhXCCZzs976xiCiFRrwYE",
  "key44": "3jepE2HPJkygHgybtnetYXkjwDwoKstFRRxXUdisKUsrB9qz2egBoJvMyk2vdop6YvLdG29iG5Hoa9yWLyWctNew",
  "key45": "3jGKH5SS1U5UNYiBKnTEwsXY6VbLcjzknonm9hkXYwax7fYAr4Hch21FPCdJwSuW7c3N2WJdseAuESZp3PiTa69J",
  "key46": "5ngRMoxd4iEvbadmEsJ3fRrHJQxVwQcJhpC3fEkKjLtjdyjhn6xND3u7ons1CW5BLafGg1EDyhdyqBJLdcYskHji",
  "key47": "Vq3yVorE7BNCJ9eoKgy1sVnr4MbFB4y12Fg5eKDRWuSiGQjMKCeuUGDTGo1i9ZreYq2uFeC39FnNpjiT3HEiQ3p",
  "key48": "3wscnD59QGPcRxckzob4xJYT8DcqjqojdecLdzoeF38CKTgEeMTEgBe1BteahcmJ7mV5GjKevCtMHNAPx6jsY8Bu"
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
