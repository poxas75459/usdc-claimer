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
    "2ZtchWPgpo472SSbseYrtdyRkpHTU581e9fvTvdEBh5d5bJNayH85BZ1YmMwrNE5n4Q7DyA66FxwCPa7jFeCGky5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bsNFQXHodth41G1b59jJxKPZAQwt3ekdXazz36GXpJ4qbWa5bYToaysmVXCnKKbZdDVUjrouK77WyVDDJD9BHuK",
  "key1": "2in1u8p4L3Vapw8ocGht6vV21dGHLA5GdW7PxsVwmUPSmK17f9pdqiKeszivt4cd56YZsRz457BcQNbw54eBDKMA",
  "key2": "63uVVgsg8Wk8vq4RFtKcKwrcqXwMAyvN2yMJ3uLqKKHCeC2mg64xn6fPqKeFPpUu6x2quoDptBFPX67CUjgXnQ9f",
  "key3": "4Lv7vXtwTJKXmbgqx91gmUk8TDyJD1SXhKdy3cUcrQ59PrifBhQNYUNF6UaLbD2Yt8DJNiUXjgCA1HEUByJa2Jyf",
  "key4": "61MH6WVW6wXH1i7vGFJziyta4k4A36RcxY3mABj3wnfUnXzxjEVkEZGd5xpvLYTXsXC5fSgUUK1rh9kzM8s8M9Gi",
  "key5": "5Y8tw2PcBbmNtMocLjqvLrNDuJeBLNF8bdLDM5Fp12E5vMWazZHXvbw96FkStZ5xFRPkh4TKGS7qodPtdLBcNf7B",
  "key6": "4Yn4zx9mkrm6J6DudxPwXzc6kKweWcJfjgM8pq7bnGGBcgvpzLCfQU4R8xefKARS4vi6kbhrg6LZ8NFqrkcQFrSu",
  "key7": "A269QNkKyd63XyqSsnCatQcAuv49tVF66UZyz8VTX78pNXLTiaKKTLpEqo6MFk52ccNB5DZJmw73zUkGF1qZGLr",
  "key8": "5nvmCMZrKgMEVkPqkEP6JnXmECT9D5giQTarTPh5r168Ky2rK7vu3osZAmzdHXxxrZyHWzxLaMf8pE5NH8Dw64fX",
  "key9": "2ELNmxYRDf69GmcEtLRh3VzZ8oQy6xtEkX61xnNfp6irnQpbnzdqHc7fyavg6hx6yrZdTSKXu55Ba1RrQxiQe2sY",
  "key10": "67EnmzFwakgpcdV7g2pZFTid91q59C6UU5dGh8Chcj1NKfcZ4ZDa3nohpRguEsThhaMi7qqE1Cm3EGkYqdE1oqhz",
  "key11": "wNT5NwPiztZpLwTycAnnaKnE9C477XBCkoWsn3sqV1BbJu26tv5SDhmA6D9fL6seiSxEyGFnTQ4fNLHouz1YP7F",
  "key12": "3eMzp6thGb348sQPmbmi8zunfPhbgHSZ94Ztyjsix4WCoBbGZVF35KNRHpVPjwsQZUPyEkot4BCu7dkPWtDECkK",
  "key13": "3Stf9RxjspjGcRjUSwnksdD74TTGwHpNzx3PFjAdPMK9Ph9J6eNKWg8HcpXk7hRAe39JvLE7FJDmsMH4F8KBjKBe",
  "key14": "5qqwSNRhnms7HHDYLhSD3D9Xb18FreGmrUyssTpyKBF9MTQSdVSTmBJkbNiGHtxt33sFyWPpsLFF7jRJHKNhcMTe",
  "key15": "62fQuGnYFGfuJ1oe8BpAoEYS7bVP2zS51sifp1AQQsPUT9hNJSXJtEz69fC4ujGmGqDFhpmhzR4CAAzbAMD9xCAB",
  "key16": "3ufRysaq3Zbu2jjHEo9r74zvG5EmYuDw4MrCJ8E8yAyp1KE3mTCXNtpacTwjaV13sMB5zW7deKtLQzX2qQaeDejv",
  "key17": "3jW13sntjqBqwLYc6jie79eD3MJxt8zRxr35qQ7ihiZmiWAKHdHSfANTqH9Ytdmdowy7Apbtg9pWTDAJeMUNgrp9",
  "key18": "Dehn2rxstrfHAiScvd77XzcoG2zYXHhLncw7cjsRUxShhGFzKoK7DifUWgHTw1LLZXZaUnaWkQhbznwuJjE6yDp",
  "key19": "3khxPewqn28PZiZfUAGryjZi9XGnmxymaPGKPB7Yh2VE7G2eNg1zwach6mFRch4LTZ2qD6nU54ZMwp1BZFf1gsoP",
  "key20": "T9rWURgi7SXes5FU5upqLPwa7sZKWzePFZr6RPXUinwjFJSePa9Tm1NGe5hc6dNasj5AinykqJ91b8zwiAQzWha",
  "key21": "2nNfgjsbJVpyd3WFwCW6xEuwRsc31UDQVqo9G81LrWV2ke5sbyG5YgY358JF8qPVijbB4yHArw8kRQ43r4HgLqnK",
  "key22": "4XgFEsycxErp7ZF7hCULSFuxnbdydw6cpKCQM8AtRMFsrDJ963TSbXj4HJjoGjWJGcyJtxTueX7JMfJqp8Spnxhu",
  "key23": "3oHdvR7Mk4wL8umrdqW9o5hHGzVyah4QiwLs8EFESTcRw38S2LLhqEt1j74w2zTYb366Ks59fkVy5ot2YZjEpbRi",
  "key24": "65ZFXBBKdQKgGHcTTonyBe3whahNr4jhUiGr3P5KxmspEqgGr8i8ypa1KWMigYFpf7DE8UmwJCftUdV1YRgAHbFk",
  "key25": "4t2cGkfzSMyyfJpRQeuC9mcvNqueBQtp7FaqP7iNYstPe1RthZpnF8NV1hpYuE542qqQWHRDRnKryjhjk6otHKZa",
  "key26": "2ZDCDveKBaW1ie3STKTGHYgkmNvQyJHRxfmCtSxPvfboTASQR3HWSbzJWb4KwiHkQioiURUReBwSKdjn7XpPcVEp",
  "key27": "56g1thU6XKuLBUhCaSh3Z2USi5k63Y4Db6LC1oKxkiUc67wXyPUuS2vbP2vtndoQ7uxwcJuvkgDGo2bMGr7AkJZx",
  "key28": "3asBgKFw6K4U21pQuEpwQpgSj99MrV2Sa9cmaCyhk8EWKGyGptfmyfEhR8NrhDzMFwqiD6KBRkyvVNa5UGsVPjFA",
  "key29": "2a2Av46jLSmYkgFEujf4DkQ4DieveynUWZ6jh8F8jxojkExZmi1o5GNf6CyVrxkjwYHLFdQ2QwbZbisUd6kX57tM",
  "key30": "5CTPxun6Mrc6BaVT77VTry7XFgQo93wZNe8btFD6iu6WnknNSsjf2ZYcVuCr6W2e5CAZX2wDXpcc2pz3zXmC5WqS",
  "key31": "2phDTKtVutEwVMa7LS2358todaF5zNbv3Cyacf1uSAhHWBbvbkKp3MruaTbaiREi5gz5B9ibGcanjrYWhLsq4T6w",
  "key32": "3YeyvRj4kQtgm5qwzXUogpD5LsfWhmMh1a7mfgBYsTLrZLJvnNrue4RSJRQaGEyH3BvGwjDQ9aqTUsYG8FDDiuUj",
  "key33": "4oDjgAPmJ54SYWS6Aei8LDxpzTxVbWkKs5MSgiRYuHzpevW4f7vhPHPu61SUvAzYiEpae5tF2KhvCKL3hEcLYTyJ",
  "key34": "48JFq157KQKa8ye97vcjyEo1pdrHwMaKopQqzJPY52CnKYF3sXKtLnZNFr6uDYjQFSVzLCTeunFVY1W9WHbBZcwG",
  "key35": "61sPkdkTcd4QmHqT8TK7gf5gNAccQkj6T1ysLFE6wRBRYK69pADyMUWV9LRsEt9e72AzUWCiGZkAZF8R7Rd1nvCW",
  "key36": "3S7V2MNHAi6X9vaqPBsauT1bG7AcZXXK1TYDMT1eWf7hpnkHzSjMLxkZNuE9Ve45JjQTKQZDhQQVGMwXpLivQyoT",
  "key37": "JsbkebTe4S3pV9y8YZqFgLrm8bnUxBEweintznjJTJUEJHGDevwSVbnNAnVjwQJBxPjb82Gojc3Fgdg5S3hmp7f",
  "key38": "4pvTj6gC14UFoUXPcWtgq7wCC4g1FcbWo4hpnPbfHwoZ79wJLY9Gwkk7aFFUt1GKUJj1sNp4rVgc46RU3YNR4sJY",
  "key39": "5PVwNajWsJTBrsWBawthtXg9n2GXv2x8MZPg3z2qrAjyWyLSq745vB2LeToXB57TBrBph1FJQGaakBLQLn87rhmF",
  "key40": "4f5SKutB2GVSwzCJeaba4ioVMbAdWYDAvdW2CjkKoFhDFQ81XBHkiVnQEGzRPuX6o16VADVLsBkhLtAcuyoLBaPU",
  "key41": "4SdYH2stR42YnuzYTjQaKxNbzEs8dBrPeoB9mNRryx4TMhzvf3K4w4A1xEDxx5ToQANqXe4wPg5f5k2yqUMwHMNZ"
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
