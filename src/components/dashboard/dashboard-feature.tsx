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
    "23GcBtZJLVa6JFivomK4soNcNHvKz32JXJx9U8eqWUJpx1p4hSwwaiEXCe29cJmxx1cePQ1CzMij2wXMXpG9nzc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YXsbwZpkZRsPx7N94uMjeLhGiAeZtM6wMfM4GAvfxinCqFzPhDKZdhyrf5F1RmZxDAHAa6tWYFk6nn2Vyyn2gJW",
  "key1": "5zWDKcPkoek9SC5f1yhL33QMA7QHNbRFA23h77skgyNXGQwSaTjxDQbZPC5eVxHuvPRCh72LX778gANDzxMhYbKn",
  "key2": "3nUbnnWpSHWCC1vYarbhSa9o94c66dAdZyRwQPaF2tzZnMKfrosKb5uPa8cGFdng4tn4KSoB3w1tyhTHGQvVyQP8",
  "key3": "5SCnoiG2Pcqh1jjiSiFLUV3zVgUQFiPAwFdefzr8PhsuuBmBANx4B7qzMJtWZwUVXVvxir3gKNUddgwyZ2w2djWn",
  "key4": "3Z8YVzsSJVe9oMRdvHMkm1Z9Hx2YNWDprCXbV79hcXCWyATBgEyWqBzdj4aMw7ymos1nnr7gpGgcE5K8UWtDzKj",
  "key5": "q8dZk9vUUsknnvsk68kr7pDqZF6HmFArhMJzi64pzyz3gu81VgLE4nTqJ4c4anFKPQAkrZWdcDHHH5nwh5VvaQb",
  "key6": "4A8zFZqb3eN5MDqs3TgGgjG6JR6oiRAkUqzJaG2meoCZpz9gQrUFpfzzypAzH4D7N1HtPuxeXiKytSfTUhLKgxCD",
  "key7": "gJNnYbbBstfGbN4un4ApF6qYJ5vVu16XAcTbZ5KD6HDqYmvrtAJ3FQTuk5sSofaDDHX6nPAPQ79ushmAqhGspWb",
  "key8": "5t8DhnXsQh9q5dUg6jkShxqdwo7vR5dbvczBfhq4USxuUZcLS688phtq9nKGHPm1nadxAqtskijVjwM6aZsLSPj7",
  "key9": "659kBwgmc6AfhWmevVbSUhTvT4Zye2vr6WPDyp21AvhP8SKKMK9dKkmd3MnamKDQxXBwr7tVWGP9K6x8t9eB2Lyz",
  "key10": "3fLPWfSx3E6bAP7MNWVqgF8hJYb4fVaeeGbRLqEFKpVackmxxFBfWedNZhyMSVd9tGKFaEJmjVXPCMUuAg9SXmB1",
  "key11": "1mizQczUPqHc2QLJNtAcyiuE7nmeFbDkv2U1G5GXDm5dPHV2LgHBR2yeemy7zWXEatmkAbsEYRDQM9GpFxq4Cwj",
  "key12": "4Y1pKEq86SnMqzgAFniDLABv5odRCi5pEzkDHwj5wL61bcv2uVF59e7dZCredpYJzRzgarB8HweAc6bGN95ahJx7",
  "key13": "3wYV5ezutDKnQzFsWxjk6v7jW8TEJAoywP1mJbAQG1HgJj7jo9YgHpjzanjChcEGJFaXcwVvcGnxueTEvihHwwpJ",
  "key14": "e9SRgj52TQTtscPNM4aYBn7XBqaNexrBNUetENHaWFZvm65f5aFVTVbwxZqSx2mfXomhTcWfeXW3a8sLjhuXBWB",
  "key15": "5JPRwQENhpmSukoVLn6F48dzmRG7sSqSrTStg1BhySB1jWgVxNMsQchTvYbkbw7NL9VNXCLEoj4UUX4BBVe6rHqv",
  "key16": "8GzTR9tQ3SzUs6Adf3yDXhjBucogksSPw5pobFEF9X8f1uuHMEoPk471bwaRnmhMH3HWjJ2Pcz7t5LDPUNnKLyp",
  "key17": "5czz7sLdawrjg7VmKBUpkdK1GgZ7orjcdUQXZ7n7LTaSSuAEbRNxRu2wKou3DJy1LvXhZMDm8WnntwpSic8qSmML",
  "key18": "sF28D9sr7ksXax8pNy76bANg1Hzp8v362Zdr88N74QRDWidMAnjAnYSPY4LLopuPFrdzeagt774SpZYsXyL1JrX",
  "key19": "4pa4AVnW5kRrsNLYMTLdFXag65X64UtQQMfSgCXLaYCtRy1xKpoyLCLMBP63vFH1neKZVuhgJY2EQDnm129MqJsD",
  "key20": "4fEow8E2Xs5oZT5NiFhMQsqYZGEfi3TnUcP2fFbx5fzo2aCTrcoDntevQ8ZzBNNtjQMvoCBn3y7GtJjPHGLGms5H",
  "key21": "3QpR7gU8EUESvog1My3vER4H5UXSconeZJS1qWuq2KPVEnjtX1U8F2c8Bz7sxm8cqxEauCW7P5QeH7PN1u42Ymma",
  "key22": "6733XKThS6GRcy91kveyhAzZVG5Tjdi9trbwm51i12ybzy1zFgNvNe1N52jhHpKtt78maiovRHrNMfeBBfAiPj2k",
  "key23": "3sbyM1dqRKuo1Rtu4Qp71XUJs2vLZHyN9j1D1P65ZdDLFreh3yQWvQNHFLQidYEkqQ2TanihE22M9SAptdHfkWbf",
  "key24": "QStyT8FeZJpu4LnuYGbX11GaFPMp5mbNV9NhcwYxJTzV94fC5ZazBRGJaWWPagnTmfDLcXFBEMPcZNG8syaX4Tb",
  "key25": "4tdFwcvcMJMtZj1dZi7exrtzeR8WSceYobdFqADAVDeRnHkQkBXic6TQeGhBXRQEaAwkDDmvfK6WHiehXXFq9LSb",
  "key26": "mZtHrWQZdqV1c9LGRiVYT8x4fVC1bh99qLYGjc8e7bVrZJdUDgKZ2e62Wsiout1Q3FCkgSgLXdyJKqxqzY2P8mK",
  "key27": "2szcAUMxCvFArJLZa5esFKm52ZiETwXCL5MzMvGCHFefzdTZwP2B1TRHDLatfnsKGXjZwT3GAoYEuRCZcPZCpWti",
  "key28": "4HDKZV3rK5xh1bc3ieEzKvUAo66KT7VdkoYCxC8EyhfffT9v8DYvAJPGYTX625S9bT4WdxtvYY3QGVL3yoMNixQ9",
  "key29": "4mDPjkhoNuCmShRBNwRXkVbLavjNpA19poF4ujJQvVbU957FD7vw4MEaKFucitts7QjWb24KTu7RuTg1ogSRxkNF",
  "key30": "2a6crmyFiyH1T234oeEoDRisxy9ghv8CLfTXPSazppGEJiPq3HVh8m7QhB68JLxQLeigaMr6M8v4fnw38KPeLkYd",
  "key31": "27Bef38MSdcrewJvwvCfPPGeh9vTc5nU4nQyc9sr6941s1j1S6mLSgcFE7mddN4sdiyws5RZEVhqizExfRo2JsRH",
  "key32": "7ciA7LKy1uEJfhQiF2EK7fqCb1ontDL4EGrMSg5qmKcLQ9cchDMs4APfefs3bUQz3DWprwraURPyM4BjHNFjVGv",
  "key33": "5xagoHEwkRmy3Qpifti1Ve9YpX6SpzzPiCoZCNfKfWGxALTDA2MSaVr6gSHE6dW3Lt4tmQDShDespM3smbVTt8wj",
  "key34": "2F6fCeQEG3mo3G1hSJwFrj6f8Ni4Nwr12p9enS2uZZ3aTHjDizoxrnrp6nDj9p49WyrqCpkB4GjYqRLdfqWPkjNf",
  "key35": "31Nv28jEokTz8ykz36xnpTDeuyBQp1dvLkm9Ph5L6eJyaBuWUUzdSAYn2ui3xWm3g1CqiEmBMDhurKyfvoqeiYzL",
  "key36": "24vJpCp9p96nCux6AS4kSxVuugXHB8wkKga1Nz7EJZ9Sm1R8RzVFNUnFeE6KqrsN1Y4kTjHCWNcBG7TT6meQE3Z6",
  "key37": "2iC1q3RTtsdi4e372SA5ASVHrZTD2vnSsbxRsZYqTXGPf1J6j7nLh4ZuJ68wJnAAZdYGXLYzCvuJcrXheTCdTizx",
  "key38": "5JpjuAJdmrGhNpo6eFXug9wgKBucMDZ55tY766CWr7Rg2psGSp68W2xFUeWmAsdsxPJiuGvJXksPVfcRr1CdTMCW",
  "key39": "3S1QAuZzpEPWNTbtyyNUiL3hrubxh6z4V7Teag6aht39ib44xoDfoob3MhFaZYXHioUXgRopRjuYq7YhMPBoZ1Q3",
  "key40": "2eihF8ge15E5T4WQZjA3dE4XRknKMRuMAPBTCV2a6kDLqwa8JaYqw1G5cedwADaWktFCQhJTSZbot7iJfsEzrSRf",
  "key41": "5Mp9LyTzYenBFrngRZkd4F2MfCqZ8N8wWKVLVKcG18SMbvVm2Abnhtk5RRLHPfprCy1jRm5Z3aEdHk3MRrmkNGh9",
  "key42": "5s1RNBAPdJwg2Qn1AN1cGhejjfCZXkDJa7AxsWJCeK5L9zy7Ybk8gQATX3ppBJUw2QGotngPgCzUwXWTAfXZE6wC",
  "key43": "3KWUeHdk17dzknk9dvybYwdJhpSErf6R6EiCgdCh8FGC1WYWw8iurDvEeWeXbUZ5UbDWQFRoMDPUdm3jSptfkeHk",
  "key44": "3aExuAPeZwB2yfV3wsH6GFVcv1kCMuYJfeSdDY5MDfkJZcc2L9vedXaabnM6M7WsW7hHpvokEtK5AbbRr41V5RqT",
  "key45": "4Z8gEQfGvjneKMroWJ7LdX4uQAT9sxcs8Zq5p3iiPzK8WkJkWAVRkaUYYuZTk1kzR1wrtP7Q6EYMugYrRx5SPXyV",
  "key46": "4ZVww4FNscRxSMiwm3svAkWEWAnHuvroQyCzRC7Jq9tEchSdvMNrP1VKm7ejhWk86xixTfc3Ke3idHX5A7XCy1zk",
  "key47": "3po3fYPQ7EWek9Jmub8XtFuLeqndTQhrVkAK8cKeYC2RapRv8NyEKCvU8GQ5MoUUz4SGeLmkaRDgUwmpVLJehMzS",
  "key48": "Y7v8gjJNJDrK52kFthX15phTVfBoNDaY9qRUSs6cCVicZXzFoHiuvhD5KL722xdQjDPAdxNvYWzTDnCztDdbDyR"
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
