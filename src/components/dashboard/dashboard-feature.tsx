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
    "3NPEaWm7bqgHk4WzpChKSXLkHsX5P6Aaf5pAgLPmxuLEr71CKDjqswgkAWUw2voZdD7RcmbQqgiQ89T5kh9wpygT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FtRd6PtCHYGTaQitWueCUdgWKMawCi6HK2awGye4gLsDn51UqXNFdmazfT8UsAtX3mHBPaBMne9fxsAXUwhiK87",
  "key1": "aiP7TRDstAbrsagwB26RBkNWkwu95P9sMSGjGuPGLekP2M9Zk9LcK1EwpWSRDw9oN52sVfsWeovayXr3zbuNqNV",
  "key2": "5d6JP74GJRnCfoV2prx9QxNaFS3HY7c46JKroqZoByLVBv6G4SC8CfYDjzdmGJki3DaMoMPScTqdFQXE7sH7Ta7q",
  "key3": "5Vzox8WVFWKqmJMwN7Fhj578pKWDGN6VwKPdPiDs1APpHd1K3xzNCKMzxNmyx6ucXjvJQ656fPyaFsrxGEx7pobT",
  "key4": "4vQX5bGVotpJjyZHG63ycPoQm5DqaCSJUn3wE3XGkxaXjmvWN4DZT4LZzHqQt9CKPyKxcnaExAbRJEU3WfBvVNuq",
  "key5": "5sT9YL61whL4Dr9s4aXnsksPfZHUmcoh7cVJ7gDkqXNQEffRHVanUsTFFD9yP8QFDwn6d18qD1sfxNDEXB3J2ZmA",
  "key6": "2rJTNntRz3wrBjTZya3Ruf1D6meGAEE7daKmdaMG5z7Bt3rf5T7z8abLSvv5p7SiSbsMsqUgJ6hVNnwX5ZPuM6fZ",
  "key7": "55vHWbhmACE4WZDUG1NozmYKKZs1awX3TCVmNG6g2T7wJt8E9bZTJL3gezfJJLJhujhguJDmjSH598GZbsMcxyBX",
  "key8": "4QWdc2nhtybn29529J3rfhfnotPydVhwNcs5nsM1oBrkBu6sF8yKaqDG8y9HWDrHGBWvEVDW5CnHg6NYwaq4VEW1",
  "key9": "Jm6StNsCdxr59FZAQkmg9cMLMWYEur8N3ZuoZFZdNVaENGaMFpjPXWNUHK6ecVXRyYVwBNNWUDMmnER8KJXxcKC",
  "key10": "5veaMYzherqFwppP7pakVF3qC3oE6kp4uY4Kgpn8MMtCyeDzjBarV7AFE415D9pc221VHzYT4CTjiSSgX4L9E9GD",
  "key11": "4jZQMZSxYRmJxvG6yzGo8JRgYb4va66TAfrjFc15GdP3KC7mPyi6zUXG7jqJFNqGFEwdtDiQPNCVhJ9xmbXpV25z",
  "key12": "5s8Xbt5FQesPMPQu41N4m2TuxTHWKorMCjJZAQGDMS2k4ZMUBem1ogg6WSNEH9od47JRi4pXw5EfTbc92vsQkaEq",
  "key13": "m9hnGtYtccnsz1sUSrZjQVq22QkAuhNjLw5w27vqJGmHVqXz3DRKVTKLpvNTEfap1iFjnsfwTsT2nm2WKx1RYt8",
  "key14": "4ymzusWmHTug1VMvsbBYcmpycgcuutaXz5j6r4wJ2huTYqU4tyfkEbnLqF5ux68p4MDqoQWsXfy6HGK2dDsW7fy8",
  "key15": "3aWBkpoAx6PFhF6W2P3pVyzFgGMCXxdBcBH38MaWcnHSgcas1c5PETJffatrMzcwPrk9kDRhcT62X2ZxqGnQ2myY",
  "key16": "JH6K3TctNeE21L9FYpoVHnEW1A533DGE1Fjp5jiCc1vUNmh12cofGuxro8Cv8qrXng7Ak5xrU5A4fn1FLQ3DrLY",
  "key17": "2hikb4Shd6mLSm7TnRVMTfDScCNgq2CmcdDaGx2gZXBnH1LqqKmtYd3hstYUqYYMZtymja7Gyi9enmR7yQuMAbtr",
  "key18": "3ZFsCSNzVyQJfzbwKZhijpt4V6vfgNLPW3zvGgWB4u7ENsNiNWdxsVzTh8c6RzXFrPRRb3QFREN9MXiAX84kKwrH",
  "key19": "4Nohp9GW8zm5wZEAsdxF5PhYvyoCQBpvYL8Xp9nJ2J9yaoyfYJ5a4i8wLHCCxgJCQfTzP45kwpsq3EMrugTscsuq",
  "key20": "5EaFLJYjQUfGWzSJzxrGuHHJQCMyCJafd5XBUK9TKv7m75wWwLuVxiwpG7nx1AvNDj1Ajwh8pzvdvrkK86GEzuPB",
  "key21": "2AgWbxpM79eox76Cc8oV7Z4xtfRHUYaRaJLX6PxDNa7vBim3LV54GCMSDRUKZKwDSHqwhMevL8zw7tSZmjoYCUhJ",
  "key22": "33Z2FF6nWYPCJifDpa68ZWKrWWRmyWxmvasikv1m152sdDFGbysVWL7APPFqvQGmDe8Z4vgCDy2ZZrw8QpWq4xUU",
  "key23": "56sxddE2jvTtZFanqiQYWBEPzSHZsQBpMt3XLVsHa63JfJqZkyP6rH888yfwCDF2TUKT9VXvbwvjAA4QsPfU3vNq",
  "key24": "NngYfNCYBN6iLGE3NogvfbZzHJURCYdYBEoqQcvzB2VUWdFaZ6Nao787Cp6RPhwTBj4uhsUHafRDHvwGkJjapp2",
  "key25": "116s6Tz2xPri4xgHXmwxC9zbiAyhKW4oCanqykbYqkMVkLkygSNykzFpX1EjLnCpLCN3mbwosj4c32cqoUzKmPS",
  "key26": "4JU7T7DXb39NxYRiUcgHN13Zum5YVKMud34sZ7ApQ7ci7VxLZWhTo7MRiM5puLwD4YzAt2FPawXGLq1gRQGspvVp",
  "key27": "38uvfTPx4U4mCrvJ9jQoBbBb7ry4DQA7G9jNWPGTXtg9JQtEDt4zcrNitqcKiNJb9KK1b5qDcde3oBzeWasNwgNS",
  "key28": "4qGXjJ89oi6Kv2ZdK86pbLfxKVUBnw4aiXRZ7wNw7kVcK1PqvuVfJB7RK1E2ebZe64af9NcgrFthdJLHMeXRhjwP",
  "key29": "5SR6mLUmzKE5k9TBi15LKGNhXvVx6PocFwbE5F1Lo5NS1tDZTFyHEqt1p8dao4VM2Q3i52m9pfF5iWabz377En6M",
  "key30": "2KVEQot1Lk6vTsWsda2Xqkw6y9AiH5iqH5dmH3wCUmnkHooWnLx3FNrgKXhxK4avUG5SY21uoofVDnBiUWenQzN",
  "key31": "1CpFpBoNxSKhca8mwaH2gikF8zadbuG3ukv3bRFsb1uSkBGLEniYeM7WvfrqaS3Mww1BdmMhEMURXugrZAgvcU6",
  "key32": "3dcfBeAGMG18dJ4fSCjbKc5fPxZ7HgFLK7BEHtQ8dUBYZMz3FggrGdtWUHckXfq75vEkHrkb2HnojV8XL9jv6rVv",
  "key33": "3G4zxaZ97Ad2yedD123zUcQsTjMKgXD1TJ5BhAyE1ietk47w5vYst7gTDPkVZQDGM3cCahTUj1j85YEWeqmda7GQ",
  "key34": "64cU7n5ULrqw5Uz2GQA4T82A6NMAQxhtQfeAbbT2YrnMQzRnHaEnJTv4AACnLcqZYTg6vKa8quZVV5RxuZMJg5sT",
  "key35": "59kQi3jLjHfjoTJX4GRzHPjx4oYePkk7J7ovpTDe1CpkesBa2DoPxSnbjBKu1VbpDLo37A5CB9chPCBaVaiRLcU5",
  "key36": "5qS6wU7cdyz2PSERSuw3UQRaEmrMki7pf4m1FEN8FU2ghNaLztdzh9LCciDMy1r7tztVQhrRQsMdG6EavQW98wd1",
  "key37": "QkVtMhBcLkY9YnwJeEbhN46t3C7iVweZ8yJS3E4QCL527z1WiEZQRDtPtFX8jEb9ByX2jrxHjxjN2CTua4ppfjE",
  "key38": "4MoRUq22De3TuZvYSgUnRJkoReDTtFodvinpGNtacPpZDzCp4KeyjYhToZvNpXPG5XQQa3TSRk6soyECqnqcY8QU",
  "key39": "5nLLS1dRmt3LnQ93gxgFk9EKG1BVW7sm6gAFSvL5HEQk2ecGxJA3RtTWHZMyUAyob3w2v16bmAwKKvCuhUYmCgj8",
  "key40": "3AFkVyQBLwFMuvyC1S6VsHkBHGbji1Df4ELFxz3do3geVQuHBUMLzpui12ojeDpznnygTABsNSs7odRrCMKEvbbX"
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
