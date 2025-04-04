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
    "T4DesBFx1ao5Rf1k9Bw6b998WVZNbeFUNpvASUhW7ypechQe5xi9WRXTQXrEiFR9eFY3eUL8zSFi2mp7YZjAUk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zW9pujtDgdPSvJafPtKsEcVjrBYDLJtY7VtNyx7w8MqcCkWfmupp9aA5muB33S5h93eCe1z8i2Aj1uXmRMJTP1z",
  "key1": "5WtH4jLhWxPDxveaX8R6saDqpM7XcQHJKQjhxhsmWfrG2LXVq89MdJTtpDXhvuy2RFWxcLM898MR1Vxqw58gEa6c",
  "key2": "gyDPvy26aeYqD67ETqCXm6KSVnwG3rtuU4Sazj2k2nqMQXCckjpAndxnSmhNs5ch3fmGf5ryzqDfqkFZEBKh9hU",
  "key3": "3bVwAEMKQ6WaaSYboaFKHeMbEgaTr1W1QY4ErX75AigzDHgBt3av7yijhVD4TL1sRLYimfcsMQ5FQ45u6AmnZxHy",
  "key4": "gTYdaLksy52HCfGWE9HY4RXgTX9QfbcCScXj8nuLMXJNQB1rT63tj9z7wH5ZUDyGvQ98fj2rQLKKSkagYUfmk2n",
  "key5": "2zjTjALQp2Qib8aUKhqjn6Cf5PH3WEcraAwGJjcVMa9S5yf3aBGArG12shkuZQHVLBVGHy9cCxL7VML7Eo6CyMJw",
  "key6": "5Q9r8x1eoRuTbuY7JQZBd8ug77puLL5qhggJBojjANXrxwMNtRAdaGYf5ic8zPumzQ3Z2wcJTQnNg1zNZhMrHE5q",
  "key7": "muchvpo8v7x9xt6fRm83UBzk8dQACR3QPJGMv6PgsN5R3J1djyJ7kjy2cLWNQhtgAYKwZd2txHegiZiqFwBQBQw",
  "key8": "5mTRk6M6SxqMfR6pf35LypT4Ub7YyRgMfJW2EV9PM7dZ3FhToAepyiNDUmUajYBwywxWyfvfMG6h4DTVWy52sR7S",
  "key9": "3CJZNmcojvttupZ3xkGGhcQxLjxHJU3BXBoe7zQfzQRCuYE8hTnttKggjuV3MEuB25XdPHD3oRgFdDC7Dp55f92K",
  "key10": "sDJYzWfn5yhDqGGMgPbwKTCpmRWputHNMsHHSx3AQPdxgCzuF8umeXFkijHYMug5i7o9edN9PFXWPy2fMwP2h7J",
  "key11": "2h4XPA1TGcLeKGN8b5Aa34xjvqtETHA7h1MedDo8rbiUfCBY5MkpVyo6ke7cyk32F1uwtZnQgJKAy5zFAnvpfE4d",
  "key12": "62gR1kda7S39iNmLSoShBH4Q73znALjf5iVYgyM84cTfP1B4pw1MBHpABK8vEW32wgbNesRSmkYvMUtrJsYd8sht",
  "key13": "3fBmYuP2vma5oVxZaC5GEdmeD393aNhV4WAs6SpU5jRMqrFN3c2pVSKR2gMCLuv1PNdpEfnSmHoCfftZ3yxTJwMX",
  "key14": "4Q7rnxXPLRpwwsQA5TAyfZGTYACCHaUh6W9ySYTHdBVBHr8jqwSfbSYtbftiZoSCiNgnKWooMhapHc1VAEc45XR4",
  "key15": "4r13u6vKHDJuR17aki4f37LrKkPVAQdvfZrUzMccd65F3f2cgVxVChjmGKWTmJSzrMXbrMwL2HC5HQ4gUToLFfTm",
  "key16": "5gBKzfUw7jQhggPyRJQoMG3nULYAYRSC2CK1yedGG2u4WXRexwwZRUBZ8svaGBj8RHBbzkcaJSDQ3PS7jeaezfoD",
  "key17": "29zGXyjrhMrAJCyoPPbrdoqUrVY4Q5evpbPnVLzMNELbQdMrfmpQUaNBxqEogCLzkosE2aiEDV1D6z99V2McgZ7U",
  "key18": "5ma9DeyFS6wfJNAcTHd8DrFtmdgnAcmuuxTm4hsbCadaMLxSGpy8E5oiLsbYn5vGP29dhXch9eQs3c36GkpnpyM1",
  "key19": "3PBKpDTAwqmXT4ri3ujJtehLZuwadLd3ubRJdiYbm1RiJJ8e61aojXxgneRD5AYTeWVx8naneGrGhbsrP98wELdB",
  "key20": "3FBgaR4bz9fSmo2JkQSz2wSBKbGzWw1zBXwobCjGeiocUfnh6VhaGjqiWF2z8TJf1eQKxKzzNLSnyjC7VP5WAM2S",
  "key21": "4ConkaL71bqbpc53yLGLSjAZBJHtHJhwUFSZrEUhzBHBGC9wePQ4m4hRybnprhn1jBR3jjvNxf5h4sDMpH8bDqzZ",
  "key22": "3S3gJPBPUdBzPPMosZHjS9zz5xx5RP9S4NitpJfpzP2gi8NEVYyFGtQiEoy4yUyGbbtLBecMxm2qvdf3h6zRmSfX",
  "key23": "64eb8Eq3efWFKH4ZqcfaDoXLy4udeVGWFSxSzy8YK8UFRxuWRJaPSABnHPe5A2YfS2JNatngtAZnHdFd3V1spr7f",
  "key24": "5bEBLDJi3dj8t8PAwZUF7M1dTMvzjemEoCUunYmLAoLRky3kwvpKSLHR9wV4pN4qrH6X3AGcpfB3YUZ1nCT1umSS",
  "key25": "5PgxgJoPmhHjCNgWgwvQRaoNMV6S7dRLhXVtEGgF4oMHV7MyFQFUqkmCJVV1Rpov26hNjNRibWGyaR13fT5TJQ1g",
  "key26": "61yLNhYjaxTMcBVRNbri3AsDR85LzZSU3rAKuyvuTP3ZSXBDNpQEmyRGvSBCgneg6cmFGpz1WnBhdpRXHeeWWUCJ",
  "key27": "5XvCk6R3QUhdZiKVU6awNWfjyjPCTc8M3m1NBGxuCnB9Aj4S76R7dUALKtVg2zceAYoovE46zUQVNLKjXcFr8vGG",
  "key28": "2yG43uYwW3xcopKz5yuAvR3iHEs7Aznw6o8nQxKWhQdgwiPDnN4otu9nf6Q7omi3CCiszM17uzNqXPCFSodmQvFv",
  "key29": "2ff43JEfWok5PpGBtKRKc6iG6deUYz6yZWw1Rfxse37VpFHiA1nCDCeiV1rxC64Vfw4eM6EqjY4LUdFWoQAXkjN2",
  "key30": "3JBaJn8nEJbQrXS4XKKjT6iYnYVS95GpjJLHXo5BqdtMeiqUSkGNiGJgydCu5ZoxYGxtyR2o13bokEr4v1z9Rt2x",
  "key31": "YXf28YVtAvscrXG3dLMCJtsdzhhFQy1aZAQSBoKWNLLbhtkHahEHyXBKdX593Nqu7LEGhiifz3pHDQRC3xWQuPS",
  "key32": "3fb1ioPaz7F2RV2fbpieuHz8QkDPnmGTqE1DNX6SKn1y7y5eqgoayRrboTfRtywkZwbJCy6R5Rv8BaEUwgwzHBcv",
  "key33": "3XZUJPJ5ywUtrTUeJvJnV6soNRvaX1YtXDsFTSGQQFChUWi3ipZj4X71n1w8SnwCiiCpBFhQBHFLZFX4qZAeGzdP",
  "key34": "mfmM3LfYWKdNon7yk2oEVENFKvf6dKsLWCWzuLG6wQDESgmEofzqMAKGQYdUeRG7spzErGtt4dC63TGqKni4Zip",
  "key35": "4eG8TBjjXpy7SwJkM4XtGzF81E8K7Hd12PeFCWW9Tig2nNqPTPG6WkTcAEBF5XPtvTcEdNoZ1PWJCQQeEk1v8Fai",
  "key36": "5pH9Nz54EHQPc7a7Fu2vvFktfHjJedpMhRcDXKgUjhuW7ViRHRoL4TRYRFBHwde8Ut822zgKxMah8DEhS35s4vU2",
  "key37": "rQUjPJSsH4LoiyUai1jZQvwfvZN3CRNp2Q8y7YDDspwkwkA6cxLjMhSfTWHNCpXKmzUiFrQK8LYsyuASmg6s6aN",
  "key38": "wEaX72FCoqnNVxNNbhmgMUMWotTM4HguBVRs3DmmoR8NuLJhJU9N1iE8tc5S6kRXdraP29qFAxNnjZb2dFG4dUZ",
  "key39": "gVmGFAquohUaKjn28Dh346cEz2crMQuADHcwjeTKJP8KadT8DTFVQGZjvfGengBAGHdBGWeyXYumGLhtsyft6sy",
  "key40": "2Nv3ro2xKsN6i44kKnj7a6iDu9Wa5rvTFpamD4CoFsDivZoNqsr2KJwZET49UFPqPVxFHENB45xtnCZpUuoximGQ",
  "key41": "QMeU84fygNkdkPw4ackcFrNJRKaMzWvKpEeP47a5ifv1q6tvVqhZTGTMNnPGR5e3ZX4SBqKhMj2wgxtZ8e2kpZp",
  "key42": "3a6Xa49PcraQJQKvijKJFjPpJNftHti1w3GUpXVUoQJS9MrYQTacLKHcAAtAosEd4y2s8i79mjadJWu4S66EUE5a",
  "key43": "397uw3sjEuTJUpUMnDuL292Ef9eeGWUkpUVkD1x6gFGQT6HVLAF4Gb3cTbv8zbDpW5P78RZi6g5a8wthrr2DXTyr",
  "key44": "33HULtmydwoZzaHHFwWNisGE8zKXQbBcB4MjoWYcmENcvyZZUGXopuEf4XjGw7gppqs9bximhwBpxRC4TLuqCzqq",
  "key45": "3mPgiUkhjuriTEx76AkvJhYgjQs2fZRL49SfjPeNgAJpLFBWYijpa6C5vUHetFpwLNTTfzuf5durb8td7Hv6p4Zr",
  "key46": "2eYurdkHXFHvAu8seyu536yCaCMZo4djPfxWoxHj8hyQGsqETLxFk6mRi7kP2pj2QZTcXNtqYEb2A4YbQEDLTAMM",
  "key47": "36N6mLotnFrK5aySUo9HFyA6oQbdjpo8LsSGojgKkPjq1oAYUS2eUk2xMCzHVRHnujVNSVzBrLCu65j7BpkXMmd1",
  "key48": "4rgM6Lb25CXJx2dPYpVg2axu7TUr8uAKSSrfZN1obXcXzjYUqnsogNtMAyxD15UFtAyMhn3uWV5SK2gka7FeExe7"
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
