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
    "47X3yDZpgA5eADz8i518YUCGrZxuJB9fQnftMqNJQUemnZnR8gfFYvd8jDZpGR2hTZB3kGB4kYByaXPyCUjxSH1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qd8rmvLYzr8BWX5eGc95cAMjnhKkHH4FRfHHCKjt7sKEZaGYqxF2YhKmB5Q7JHPbvMq8LPxqEPF28N59BCBZozb",
  "key1": "2ce3wkhiikKGqXsF4gdrkgdnCP5J6yrJNKsj1eHwSXWvYqe7PRV6nSFXiB74s4oCCZKbrwp9woSHeuiVbbs9azy8",
  "key2": "51QEjm1DWEWZkqyk7gfP3rLDr2JTtP6MYPahBLqVjegzdnLi1eaNtG4ciT1a63t7hbrPXc7sRkyEDAhvkJ5UVvnX",
  "key3": "57KbTSmPBupZ6eo7UNeKcmCVeMeTt8fwQHELVmvNwLkgYUUyjyDZmvRNoryMNJv2ht4BEH1BpwgP2gUtRg7GXdPb",
  "key4": "3sBPp52Quw6U3Z5G7AS5uq1X5t41RewSZxDAEAwDJWeD2tonQmxJxrmracYKEjBKXJRgR5u47n8bbkoFHSz12jyG",
  "key5": "3Wx3jwG4MHpMqtxPRcAKxnhRQMVagYnskTNTzmCPnkiyHhiTLnZn7naDE2VXS21unZWXbmREGNyES1rkmEVXGs4n",
  "key6": "3h6Zz1ujDw5KTZ1tLkkGKzQ1mfQFPsCekcXtnLiR5CJkQUv5CmDuSNtWa1yJrnLoktkukdgH8E3Z5BEo5K5ZrJHk",
  "key7": "Ga7gq7hkkepE6mQqZTcvuSomhkRaDgpGPuYNY5b2JQi3zzAVc7cigngNuTPwGVY137SEdm8zgrox24ukswXdCdT",
  "key8": "3mNinrRQm6ViRSQ4zri2MT9jK4yxKBAMTVRhkBy8zBqS2CrhGuEkaNTtkm3tsPfuEfnSEh3XEPxYLwnctehAdRnc",
  "key9": "4CAYTRWYZ3ErbPo5cEpDTKULCQVVovuFDxMrcVxKUYAjhNHbA8DNTKyxsMwhKi4Kzcf95x3wQTSTbZgzxj9chQyw",
  "key10": "3n5QF4MzPT7GxRiPL8nLxzp13jJuvgwzAJJ5UDnyULm5k1hBzJ1713dh5rB4wsEwL3eXj2bJMTDvVWhwjzo2eaRh",
  "key11": "shZvWPpfysWfDHP2q1nfVGuTye2u1Fc67hZeWrQBjeSFJgYAT5cqq7maMLPNPNGbL25mKswJe1AnSxHUJJwzo1g",
  "key12": "257wv2Twn95DY7YuGWaprH7FayzocCujiNRJvR5EC5NRo3Zjxkn3bjrXjeauvSJn347YLergfdtsmYbDMxa7f3om",
  "key13": "55DN3UWr5NzAnSKWoZgXAbYP4f4RPfUASMCVHBkW3ETdGfdqZxYQsjMFRQFbVzYKnJAuhQQ51FSmoeCEjJ2WtcAM",
  "key14": "447f9xBt9ic8VVZkwGqZQ3nPRB3kDCZdYJmdYgEYkMa5HGr5PLgEqyb4HWeDn1rsPQd2KsUQbvRjTMWDJrApPJF7",
  "key15": "3oWM9b2B6nRYbU2NgbavNyQHJSGCsXzTMQTZN9ZrrqkTTKxPr3Qu4aX4YuMD2w6BK2er43DZvViLpQXZV4hBWTZC",
  "key16": "5r3bfEwT9PqxCeUYeDkmXsJ6ttpDR4bpB3zGan5tpbnd8P35ADm5cNPKcXRb5wLrsMBhxEJcJBWFyXjbqfGSPCcs",
  "key17": "4dXPRJHD2VHJmYv83Vm18jsK5AHnTMf9D2MinWTk3ZtSwbK5uh7oef3CbV1zPJ4SpvxDnvYRwhv3PBsHrKLor6zh",
  "key18": "3s2qUWibRLwAF5giZRJD65mgdha7rHXqgk8rnW3CyUsyGXu4GEQR7GAGLUUyRDzmXgsxYRWi2WQSYXYsptPymgzH",
  "key19": "7vT3TmZe71v7N9qDTcxzxA1z1ccutPD1w15KoArEE1gTJt89okSjDz7yQtsJCbgFJmveyv1AnZMHSjHjysoSuSQ",
  "key20": "3tqLgjidvvzK5RidDLxhWU4jXtXdH8jtKo46LEzratpx96fTDwMhe2njSE3RmFC2Q4dZoNNxHN9W4XXtZrF5F5Vc",
  "key21": "3wMpfDVXMzYXRveuyywvnH1tFnA3R7CRA6gHH9aBaVkUUDriPvmUUmbpiyZnNzgry2G5A18MBR9mb2BmbZiu6ADi",
  "key22": "5ZSZ6ZRf7M5nKAHqAtd7TN914yiWYTDvG9fV3hsmVZiREkc6ioeQPCD2JJGVsWE2yzZrVEmfaSEha86DmNEvNPfT",
  "key23": "5PQ4csCCQkZc4ADDbFUafYWdjej7gxzUeJU1GUxcywYpmSqqXAK9wBS6qpSmZBT4mFhwgPPByJWVd6LSeavrbxpL",
  "key24": "3NhVeRB3fhiqDfxQYrzbhRp3uX4DoupPZiawtU5RwksECbv8LPirRwfxDHr8pQ6S4gNSrZw8kt9R78SbV8XX1ENB",
  "key25": "2BMukzigh4RoLBbxFpLbRUcXukBr4Uvw8NxuKfrzGrGWkcbL1uSPeQDfV3R9u85HSXDkaLYSd9cnQ7v721NpDjuW",
  "key26": "3mtUW3Yq4ZdVJE3ATRq5PmDSmVJvCH7PyA9kXfRFMHVBoiAHSiNdGEurZmz38bmqPn3Yu1qnji5jLEe26UmbKm9F",
  "key27": "5CTGwqedPj8txLf6x6iwDuH1T3EvyAjhDQwDsYa7WXi5W3DPUfDo1n3pofGELfdGbH5cLxwabTEDHxK9EHAoUexZ",
  "key28": "2RKcZ3vbUjTYhzUTd3yiuvSj5C5hXjctsjibsTHC8ugCCWueLG4Ucm6ed9iis2hqhDdRQRGtN3XyALEHGytMybe2",
  "key29": "4gjUySa3bzozNkknbRC36XfQA46bTzSdgXs4FjEtT4ZXou6eFyyRR8jzSfguD3GFEvn9g5gY1rzvadaZqoxDvS6K",
  "key30": "2oAVmF5cm8LvonimVhsss11ByTsXedyRcFRGRKDR9Y4yn63TyRtTSmnDqyr7F4te6RpyGWnmiSY5pfJJCUhcefHd",
  "key31": "4ZdvLJoUnHufZsh5AtfZrxcBckq1Rg7m7swPf8aqu3NQzNauuYbjjD7eVwZbi4MqRqAhpzA3sSLSqYm582BK6LJe",
  "key32": "4hvSaqLsTYnKuXkJFGXi7oEiZV2zso1kSfn179AuQ3RRdPFYAnJoYgh8fuPUWQbds8gcDit1MsYJ2cSgPhevGcoo",
  "key33": "3aNmRnKz44d2e9fCwveVDjT5Xv4feSnbGkBAZJsXUtHAktpz1HVbubnmryTPHTtQZyQBSQZf3HeDQQGXDDHxLmAN",
  "key34": "pwmETQqo89Eea7fsCVkFZRXB84w9x1QNgsL7JtDkW9KjF4ocMGfzeu9bqCDxZrmX445MWHQysqQYGDQPws9E8Ff",
  "key35": "2cKisfBNbJga5m7SfJ8YA5RZiKwtVUdatn1TwNDpeH6B7SZTm2jjC4EGMotBHcFsBaghxbRgyyTyfxx6J7MGcKW4",
  "key36": "4TJ6gPTfrfpYdtgvRWcoJFVm5bz18yjUD8qmWms6LvU596VGatdBMCGx4YmhPkQXsf4D59MFdA32jfGM8skQ1uqf",
  "key37": "5NqGGtgha38aedwFFRBQzDxw1Euhj6K5LASM1ujYQQLFg3ZL2XQNCGVkzNGaBfT1saR9DsSn1rt4cnUaf8ap9HLP",
  "key38": "5F83EFh6LBhsZqfHi5ooFmMbJ5D59ZEzyvumJ9KBTjfMDWXiUXzasiDHXFjYVv5Znr3NYsipVuhhfiikHZaay5Ju",
  "key39": "2iG44LMpcF9TJi8RGo2WA5A4BkLCji4TLCDUoYAwBzuaG4xSCrGA1ZSKWNrbNuK3sx847PgturR221kS6JLCNUDx",
  "key40": "3o3ur1pofA7EWaSbWXhUTsvQnxCnjSo9Bby6apFUMaQQZyhHFQ19vUt7szeCXLnkBkJAQQrr2MvcxfXoaZnDZeTx",
  "key41": "62SPpu36i2Ckh3Cxiuorw5BWmu6SD6FctvZEMBrsFcoPpZWR9jK41bTi9VS7x3PqNBoiC8ZZghHhwRFbEeDohdAH",
  "key42": "fv5qKwtGrtD6dFuUgyoQi32kFoTS6dTtwdLe4Lf1WXzp6P2xT6j6tLpKjzJNBG8jmJuKVxnomWGKzgEdUgnmhCn",
  "key43": "PFjxVB1C5ERRKj52cQKV7uny3d9bjYaPZKiNAVeDAErLKtJBmov8ErSy6sdepbtVrsb44EKLLdFnZAhuyJNJtCt",
  "key44": "3dCtQ3MQ4nQMGjn4jdm8SsFVLxum9M7JPdodP1CSndTjXDRAhgw2KJhqBMYURiGiZwLU21h4bQwvAMyovX1XjEHA"
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
