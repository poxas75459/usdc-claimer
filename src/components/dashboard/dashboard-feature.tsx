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
    "25d2EvNCsFsNz5o4CLhsSDw9DtoSvLf45n3qQhpKhujDtWJPHsE2WzpK1srPXfXbvj4rFLMQQyuMMnn7zqgLLi49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EbjepVTtFQiNBnYoD9jEYECHiWom2VYMpVMnBv4LjhYxMgeAKZES4rgh7r6HSw1iKqP2PRvt8HRrgdNaxiBLSyF",
  "key1": "2o222v5gcxx2PyUZEHwfau3jxoAHYEN7WB4jHi7RpCAqsCwekMMNuMnBvz4vYb96P8kGnbPmBRxqM4f2wu8YUSKA",
  "key2": "4wRdy3VNayc8gRuPHyNzJVn5jn5sJN4hnoEhPN4w3Pf6h6oYXJCgkV8WRq3CopJiLevKJZfS5jUzPyMWchCSijf",
  "key3": "5ptdAdnnrK19HXTbsHHCDXtATvNhvJRqnVevyLKXegogDAcDJvDawspcEahrfx6FfPQTwatXvZ4x9Cyb5abMwWz9",
  "key4": "4QRUraJ2japjGcaBn3uLaX8yZA5Z1jqbRRuaVgCGduv789syMn8irc7CftRGBmk8p3LaBDfgdbGEd1PJCTWP3VCk",
  "key5": "p7LbkpEKzHT6gMaXHeEs4bmJAwHRoNSUqg56xQM9czgMiz5hvXcPzUNi4WPe53NbS2eX1dRb6i2hnjK1Pb4xXi6",
  "key6": "4tyoSXpsnqABoSKSTT2qi8kXVFop58Nrn4qRKiSXhpcdT24j2fRo2S5ey1eEBNt9V1Ud3pf9FGfTNvDUA9CVBCgh",
  "key7": "5daJjNfJxsoMTTno67iTbvAnSX84EspB92wTHXuRe3Sxda5ZM1eLenoSyBZy91y7BqTWKEiAkS6L6oxZFAH434QY",
  "key8": "4XJRoR79zpyQbXZUnueR1pRVTqEgV4TXKGDjyFEaokDLxAURZ52ZatZNXco4GQUyFPYvdwvaa2fRTg2A5pabeUCq",
  "key9": "22a46rajucJZ8ByBoemWPjFuBE7EPWqUzBaULLfCLwQi6hUJXWHN8WyuooBvNopQnG8CnVMQk9N6z4UFcxbjEjCN",
  "key10": "635fK3i5LFEaKZ8oRamEuRshC59E4nnvLPRjCU8SNUXVXeH6rdPn2ZxZ69tA7Hcp3QnTR6BMR2riSwaPqtn23qV2",
  "key11": "3FtZesrsAJVxaVLx8HHd9DKqTjEPB5GXcUiiNsz2cr8RmpL6Hvqi6hLsrpGzt6j1e2UNJK3Qk9mipdyPZwvBbnEF",
  "key12": "2JedxZa1cFbkwNeK4f63ejiwyiUHWXAmVUFzd5FiV6q3eFQeLc7MMDoJWMid7t4msmedBk1j71WRPbmT7K84JjBH",
  "key13": "64PqgysavNGMJ7QEu99FQAZa8ebaZQxUiztGYLiZ94eaUa5p13tRBJVwM2a44dpQUDwsjcK6gRY2jRkWFRhnWUWJ",
  "key14": "34Pe8XgV76LWZ7xcwtYqXc1vLvMfXux1AALofbWMQya7dT7eGzJ8tAzUT2iJkAFzX33gZBriztbtTdmsyEFscRMU",
  "key15": "5ojJA3D3GKJDkgjxsE8hcPViYWE3F2YzkBL7SNDYbXwWad2nTpkF2fMWxK1k5sfZM1f4FwU4RTaFDmZJ2Pa3brZ5",
  "key16": "4aveR5XtBbvTeQWWwJDtDieZnDoF2L1pNjCwrGYSy3GPPKhd5XHh1WKrJUmX9RW2ABZazgY4VhZNsnbiqeX1xHPe",
  "key17": "2zYuc2TMrhL8Pt5BYVxQFa4MsMfit1Mhdk7amPgEFf9gSTSSU7EgAJB9B9FuT6cDaJkV2ffmFdUbKfNfvhWiUq1F",
  "key18": "2t8vx34JEsM9Q3tD4UC7vM8C2Xf7JCSg9bvopAtgDRbECseWiQE5Vn3JQNUuNgZt6Z7keneU2nXFMA7qh7hdG9XG",
  "key19": "iQAyYMtUtvGawhqiCwvcRr2ztACY5NGQvrTE4joNMqB8QRJQbLNbNWQoqjX3LALs7n6g3hW6BAPVbSjRgHZkxSq",
  "key20": "V3x3rEEMC5JvaC3AE57VpPKaXPJB1trvWHiJdGHEuajh87TX27H8yxabhdc3Q8ze2gpyPva9Y5f5t4HYUbKHwjk",
  "key21": "5ecTn7KWXTmBwHEE7d8yoaGRasFctngiGC68hCPeaLPu6JA6CwPaEP9z8R8ycC6nS6ufqe8zirpuEHaXX3TjcAPu",
  "key22": "4z9U5T7pWUfYYw1riuULS9gTy36yGRe3N6xnJGS9ndgCQywSKswk8FXq6GfzYxZD1ePD6RFnq3pv7X2VKXcBiX98",
  "key23": "2ktGTbmeukgqBBrDpuqQUhLBryGH57Pr6GMEeCcmcY93gg8no7XHKX9fi87AXMhAq2PJf1HYEdx3JbGUSYUTp9Ln",
  "key24": "Rmz37EzGY9tiYLq3fTtt7wqxxPSR27wdEJC8zvpatoSMb9rUeHxp3SpcQ3HdiTg7HbZ3SUzdAMYaSn9CJqsyhqJ",
  "key25": "3HZmqzL4UJHa7nAzEatJzXNARY72gCs9JvJHBuVtYgWT22rQa5HCsbT9ekG7Pp1WYwzzF8bX9uskN3h7A4saAwgy",
  "key26": "xj2ZiKE3zXAhD4nUNfKwVSbydRW8ttJdKKJdgAVpo6L94Tccbu7g3mz7MwAd5dFPBCRvYbmKatszSxdHso5wuFb",
  "key27": "5XkXMTvQWAJm4SUCuA8XGjVHLgua8TWcBDiBMUQ9x8LXYzv7U6WyehszoGvXZonsTGKYVbqPoaWbiejATgvkL85T",
  "key28": "3Z6suyGZt45z2uxt8yvYspKHJnAZuDLsCcTYYePCecst8x4LDRcDH7U7KhpKejzw3y5xepwgFR3oujKt7nLzK6pu",
  "key29": "59izzGzLxUSK3qy2JNnNekqph9FAJ16hnUxR3qfEGNp6YHRj7YTJdhwNufJ1ew17vCK8L5A9SaQJp1okv1PtCPRT",
  "key30": "38CMxhNXatYnKmBudqSCKZmZYkMB86Yz8TBAxnbjFjBBKgVqCArD9jvuBR6MxZ7nUvhbDGwXDw9axKEQoehgp1fM",
  "key31": "26yYt85rwAGBvuVXPwSLad9mPnYCT3GJ2oh5pVySyu2HcD4TBR3j1VFyeut9HuLxFHBx4hnSiGn51r7n3q4NQrHa",
  "key32": "3TCQqeMgjBR4rfE5TWUpDxrbnvMJGdPWRm8DLjiia15B92RjQMneTHuyaEviR6LsUq85LUo6CNJMc1GoQFgEtXpu",
  "key33": "2YWTwBKNCU57sqWPqvXAm4mWezGcyJMvb1ovu6kG2D78XksaaZKbLivyUqxDDJW8vkPRzKYd85tpLULeb23BLxps",
  "key34": "5bh2H8wBN6RAeN2JStKwwj7wXy3f6D8bVchmC5vjpypn5gPDoH8naxCesJbrvoMDEyqEyPkzxUt7z4mUTUtaXnPA",
  "key35": "rwuoEWaHfLKE5wGCHjGGSKhbHN7piquZkwbj84KQFQZppMYWQ4HGWgGsiADaE7szronwrH8KEFp6Quecwz1Ue6N",
  "key36": "3pYMkBrdNeNiV3rMtJ6D1tXkop6BD7S8rfjreaFtRPSWVrEerBxjSF54tCwSNJH7BspTR3p5RnH78ipnTW3BSeMd",
  "key37": "2zxC19Js19jngsr9TtKqSsotGsvuo4aa5yZPXPGJbh9UfxJtTjoEvxMbZxffmrnc8ruDuMDarXcddmXtFRff2fhK",
  "key38": "2PbvQkfUDFGoFtjgq4iJuMg3oos5uywBW8NQq4myfweUciBvhpxjXnMxj5MdwUXQS2vGRyWPWvfWPRRgZ6shmNfB",
  "key39": "5q27uufH5VkePqD5Ji2z1bzV7yGHNvamtL1puMqshajk53gdgU2251yC8GCiqyQ2uWa82DFoBwfQandc1q8pav1S",
  "key40": "5vHR873XJ7BkGTN3kytVA4TPNrD5EpKipCdMC35DfcVAZr8kUBU3cm4jSdkLcAetQgaUg7JfRgPUeWGvMgxJ1ERj",
  "key41": "4XVGnocPg5AabGredXn7ZzjwzfGBgn1NVMksVEXQB9VHdRLXNerFbv5rgVi4QWDx5zjCyjpTAkPEddVXZ5hRXogK",
  "key42": "3uqotXSnjgGZSj3Jj5qfS48kyRaq8WBSxVovEUTjNiCUzgcxVdgjSyV9f9kEuRiiwy83S9qTNwYzdByo9svyVduN",
  "key43": "65XUBRURizxnjRr84pSZZ1YRN3TyGWfiThY2T85M19tVHS73s35iPLo6tNNKTvz4gwUWLsMw2SRm26Xo9YvjVfXz",
  "key44": "3VeK96ZT3Rkn2t9FDdsyH6PG9UzSjAn4rfNWCE9ooQnyAxFtdtPPrnLcbbtaTSo9rzEFDXbTbGG968uHhpqoEgnT",
  "key45": "4nszhtLUfEUWKyyCCgWPxbb4JMyhE5n6Bngm1xDiCdiAnq7xJUwMmabf9B67xWdgkG1kP9zuFoEgzd7WajDXibSK",
  "key46": "5Gs4hcBjrVjhp28cGGKGYpzBHj3NUqsDnYZAb2d8PFHH5UY8PsXX9VT7TK4agkoj8mQ5F29r5XUahMWsJnSfUc8M",
  "key47": "5q5Nq1paUyXnU5bjsKGyCfBMU6Zmx7LbGKoLYMynbcNVFb85EtJREfJ7Yf15vPMgEGQtmb5J3A53HEe4FkiTT4or",
  "key48": "37LAxZgWumpxYWfRXzGVo8pn4KkKnyFFb52FqBAXHWhJ8JtpKQjanBiiZjn6VyoRpP2yuJNsziyRK3AeaKCrBAL2",
  "key49": "2uWHVffiqpiRJ9YUBxhxgpKJt3XkfSusNSGnLUBhLeFVEu88e2WhZY52ZWszXptKBZWd4HgLkxvrhBPnA8BYfoa3"
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
