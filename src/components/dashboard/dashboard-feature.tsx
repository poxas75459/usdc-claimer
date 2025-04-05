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
    "3Krq5oBwgPNickDUf2LDC4bhVBisSfi1kS6aRTohaUBNhwMrn6Uqik4xjny3tyN1mSSiqrbXFMu4RZCqgh5B1hUY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pyu3wmhzxnz2tk5Ho9CJ1NoH8WxgqZSLtVbLx3f87pNPUaiPCZoAPEL86gkoW7VmrSEE4w9BMMNiRFpjkbxL3o1",
  "key1": "4Ec6JGkN8LZChscCdSEwyRBgkLt64p3RCnK1casjeaRRfVYcCe2cz6rtotNQnjaVtSW4LAffHgH4HxtYBn9Ntiya",
  "key2": "5rVc4553i8AbyuobBYDz6A7VUQLQbGVaSKMksfGriHqNU6xqVYBsdVjppyhjnD3KE2MHDXDdfD2nHEo8S39FLLu1",
  "key3": "3cz1Cm1TVVPwnThXmMno38JiCLNNiS3555a2AppUaJircRTs8VYRjNM3rGqdesvqqQxAPjaPqAHjJhNXJCg78p5U",
  "key4": "2bD96iiMy2Lj2ksRzaX9rtp2YDbwUd8rswLJQithBsJZG1bMr4bFuDac44PVgzM8f8WjGhGLuC3UknptSvFgqp7v",
  "key5": "5bRK6ViUY7GtSgmr6fASprf3A1huYnZvMGFLQZVHZerybt4aALvVHUKHt9Z8BQeBvAZNjJCFME6YPhYUSr8qd12",
  "key6": "56ME3eSGRWpXmnHjrqcz3r2nFKzXkMeKEN6U18L5F6i8XHYmHjbAZGmj1kqUDBkgyEPLAiY1ZCMfmbeyYKBo4knc",
  "key7": "61iCYVReYPDXJ1AH7uAGCfoEKyQxKZ3R5cgLaSpnhe3penEUefmRHZbwLrCNsRew1RWpCdbY5HBpcjSHb1Tu4s8N",
  "key8": "25LURfmaaccJwrqWXUtA8BZVeHLTQabYpD3P8ZQZKaG8m9M28SnjSyMLUWhgmGNDxVKJct7V8kbgTtiESa4zxHp4",
  "key9": "3nCaebrgdy8LWf7Foui7YezAu5JKZZ2HstNd9z6GVq2dBGqivmfJcfcowBwKo8z4YroZJ6FitbAjYgmxbU72pWBM",
  "key10": "4Y5XppMkkG4qbn2hrpeGpz3BuhFCZ2hXawrT9aAhHSqNtJ5KErVA2umZKp1uD8cbbhKvYtaUb2o95XvoaKZqwapL",
  "key11": "3wVvYGL9N9iip7D3K6PTu4pu622XKvNhdneD3MBL4kRwUjExkG4Ux6Ku5JVmwq9WTXjarHxG5HCUzRsKVDcCDDez",
  "key12": "4gMdEXQUPiPHuXFFF21fZnFt6DmGdoDGRogF8tx9AxELa6ExQ3hYUf7PSZZcNhNmfD8qgmsqGAENYdUgEpoTMKPo",
  "key13": "4dA5zjJ8rE9ZVVMNLySByJuZR9ySG3BbDu1H1VCWBb5gMuFhoubF9nH8ackxXfxJoZJXwh6S8NLkcNuvGtHEG45z",
  "key14": "4Myxma4C9MEogmGCL1qVY6pWkXxYZdyR3BrQiVZuccbCiq4T5yQnRCNVWa27FhgtzR4hZ5HG4KUWpsa3gmdcAgEP",
  "key15": "65texg4NU9UFvZfhdHaft8cgLpXHBw3msUhrGFy1B1aq4H6ATAtmqpSqi4bxkMHmhWDi6rhyMAia12UEC417pUyf",
  "key16": "2Qd67h55PXwETPmt1Mc9MEVwZU6coNzrqhtMGnJmdLmLg5uFXNZdSYSmqPvmDHhbXCVFrJgdPiyJw9icqoV1Sdye",
  "key17": "3JdFiXipvVBFEtGiCY81NCxfAjeVwNRUe8gL8oattJ68uH89wDhw2Z44vUq3BDzv6pRKyesRneM1eJHEpdCfdz9C",
  "key18": "4WN2LQDbVa15R9SWRzmxajJGBfwiHbSxECFue7tmkujHZggmLVJAgqVzGogU8UUQkEKKpHUppPyGBRJui4ikQ1Qg",
  "key19": "47FDXDEAThqvNNrZyTxKSZX76VLxvgQTyc1UzzVyr8h9aAHpGt9t2wKi5gmq8X3LmCWuZEfpo3aNRGu3oj4fwJb2",
  "key20": "uWx6rTF7sT9CDPudWNo1ZjpkkxooX5PFnhtJT2N7PqYePB68rEen7GzCyAx5n46YnsPpHzixwrUzZQgLr1wzBve",
  "key21": "XXWu69uShD6Vz8Law31dmBc7KC8voHYXgYn5wB2CcizbkreA8f7uwB39ofSSiv2wWgNGn8nTDdihui1L7NoWXao",
  "key22": "5rFfzjvZqnTbpW7LHbZLbNyLNNSNu6RvxAc8EWAXvmKg1YwuJz6pgvwVZzWzbfAwbBjERgDhm3LwLE158GqXGkpz",
  "key23": "4ftYUHrJruGxqDeWjrTUKjAqT68iEFhGj1BYxmSH3ZXMujrenMbuW52h9S5LfFDc1oStNr4gKXsuWZywjRWvMhDe",
  "key24": "3uUntQqnK6pNejFPiQtje19SQ6XM2aLEAN5fGDWU5xNxwKsKVRujfUyTFjLg7K6CQwY3TmKEpTvMyz8pFdX7z3Hm",
  "key25": "5EqNTrdaC6MpyoYJmb2vDwt5CyZcFnasj4t2n5goVpUTa5v2fJM77paerptgR8aVZ8kHhCPRnVUC7548As5UqcTr",
  "key26": "3XqZTR4a1webw1CBwSmCVLDd5kCPnLdQqLs4vMJs629nfcMwRDrYGHLMqxnwqRZEvnVez8DZLQvtuiAYUGSipK56",
  "key27": "2P5brMPVaLFkPmgExDbbnwsow1bA7dV45gouyJdXvvDZBbJ1ejRvw9CW9AER1FFSBJHuoaqqnK7SuQyqYKLuMRj",
  "key28": "5U4KR8HTKTXdcVt2Y9nZMe3Eqv8JNrAipgrZXGULk7bcYtWJWCJ6LLdgpQkh15U95Wg4XzWLi3CnwVtQgCnEr4QV",
  "key29": "32XhERTHGhVb5DGd62qr6XALzAVHwHKwrXfBCVascYEmTjMTZabXe9DM4XYP8FVKY2BN4eMuvn8DJC2iK3hkhtC",
  "key30": "59BnoDT1wuEYhvp3F3KytZmnH6o5EaU6D48c7dPALqk4Dnn7YVBkR4q8igR7AvjebcZAb7JS37uNyrytFjJEto4x",
  "key31": "3jP2U7ySEMJZ1ZgLFtgcCyXCpRwPVetwq92KUE3eEwE1iG8MUVvR3VEFqhu5jQQvm1RqcFm5cfLHXK4U1JDJUX2J",
  "key32": "5V1q3zfLbmpKeYwmE1TjKqUVYBTUyNR4tv1fBAvXUeGT2usekVZb7trhoSPhBr6FCU27YZhvVERYRf2kmnedLgFt",
  "key33": "5aHxJ5Ccw6AtR1e2Ngcn3DquadLcj21K3nEc4b1CgYVrMVoDRY8DuXRGXGTmKLeNPPsnnx6YLuYVj8xJhJYUNU5",
  "key34": "2ms1QXWsrx2GZ2oGwirNeb6td3AUxx4qmPn19uisS168ivap93uZ1fENjJj7aFJ6NzsnyQaMPXySDKUuj8QRQZWq",
  "key35": "3TseLVe8VyNr92UZLRc8kKvzor9n8JWDWeWpYuP3yqdN1DMmRDgp4ELfYU9364iDwyCwJawrF7oqrPysH5CXHMpd",
  "key36": "4GAUGTWno21jv42y9Dq1gG1g7o2YjKvU8frHaSRsTt4uU2reFdaYonYBgof7egq6LRiBjVZjrDakoX49yWD9LGpn",
  "key37": "2fKCSZZECcwUyvvrYQm7uHSoyTCgCqTCMyXcejq3FwBT4MsAqMD4KioupqeHowKbZE1xydc9WTiN2H9Ttqcpb5zj",
  "key38": "5tucDaDuZiYJhXpzbMHbeQwCnTffQSFHpwUemDdgzwudn3VThsu7BcKNtHvC6qvMhmdAdLKgTzo4QTSFXqBdSYTS",
  "key39": "w34yxwbZJkZQHGemSzf3dWEEb3m7QTB3xSaEcZhL3vxikpvGhLTnPbkCXBqydaHbxvcr9HXoKSKXHdx2kaJcHSB",
  "key40": "RidsTxFWJrCHxB8AZZPnrchR8zKnFLE3jkLvTFgbVq4CqNePUJN4QMYnpVJxTYweEaApwSTfqpAe5YXDeM966Eu",
  "key41": "39DUFpoRT33nDd3Kysjdk6SfzKrETvLc3JjuwSHvPr97iST9Z4P4YEXFniwEfGbKnv1cFQXdYhEoyWK9o9mW8E7v",
  "key42": "4NSxT3abBtucq413H2rQLcAeiGJgKpXoeLLr6wdsut6eTx6mvnoSjXguJiSTriGfZkJJv6nZ6ujmGiptMEQmgN5W",
  "key43": "5xH161oDTwHwTAFzXARjEqkYwtxsYGtopY2Ei9A3WbGaJeVFe4ZpZZ8mZfuGRkBYZofkbgFSuh9v9sFwZUkb48Rs",
  "key44": "3EPr86RqKaZUCzYMiDz3oyaiBGTGpeemcmb2ZjHeCUPSwNKx8Ah5H9LqojJ6XwiUtHCNsc4dccc6Q6w1NDj3S71q",
  "key45": "2UyzmTBwsR2NagwcUQ151ZveHPgCfSWVNJUGtzPJdRWKbZrCeS6t2FtBraYHNHrfWUi7jfXTFQGCBUmoDn9cDEhF",
  "key46": "3SVmJU7RwJ7yT37iU6vxvUw9jnbNjQsRKK21SykXM3hVs2h96B5x591viqL2RgidNjR1oQRYSzapZS1yJuDx4jcz"
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
