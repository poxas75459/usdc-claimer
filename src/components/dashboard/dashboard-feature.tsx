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
    "gMSNVTQzKaPRRGYvH4ovjEyQQdvPHtWHhZdfN7RXFR4N4ZP2YZqtUF1HVZMEqXh5c7Af4Fgh2AUXmYMpA4GQwBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GDDhZH38uV9ZUQU2QhMce9jpDBg7zAj2LPpdfjkFFnHsJUNTkmLco4Ex2ojWTwFf3rgSoZhfqGrYaU9xv7CpVBH",
  "key1": "4SiYJrUKihVaDPVPpgVX5Ub97cRTLJfN82n981csWfhWujeB2qFk51wkW65yeTt7xzejh7W7dASeCawkNmo9TGND",
  "key2": "V11E57XZqyGE2zqTmmRgMwSYBekEP9hE5bVAmCjapAFnhybWteJbggbayxbe1ecVUobyKv7zCSLVgQMZvsm2P19",
  "key3": "5RTQukCJexoCwmi7ZZ6Cc67Tr2qmppiAyKc48LzRDXg3DJ9gsKDVFjZHyCqmLrtPeHHLf1XftrA9xHNsbXR4JRG",
  "key4": "5tyqz4ksycEBv624KeeuaTT9KahGfbBsYsTgDYxaZGo5DCPf8bHnwmnZ968MARtLBXxHaY4Y5wjDyp7auWCoqZ2K",
  "key5": "2aS6JMbvSyvftzCM9TJs3ZgiYE37Ugeiomkotvh6urg65hvjNXMiE9QPS9m5D2f9CiKQV9q75YHzWaYZoxhEASZb",
  "key6": "KRc6Gd473GoVhcRcFPQMdZUNs4BYaMjkmrAGyu1HQdPsbXbjj9bbZMFoYcUUwt2Nd8o9oPtGc6vGJvs6sVRbgZL",
  "key7": "2zPuDQQbJXi7cjFAJhtCpd1NN11fmiHvVGSFFbYx4FYzM6JSSC9NierVz3jsZvwZAhoAgB9UkYXPnQZqaXEPA9vF",
  "key8": "2xeiWohkRrTDqE963aczGgnW4JBkpeMkvavmfDUumFPwvV57DSK6M7kFCQbbyH7xgHpRPiKrNZX51nvVoX6bewzX",
  "key9": "42dkpw5D8LVzRA4qV2juTp1FttBcUDgeTXWerji696SFdaPdk5gYqWCkmjBs7QJWjzHQru26hC31uhuVQdw7no7H",
  "key10": "5y9HdtL8WZZgJawhASpcvoye3kUr1E6kQutWBYfrU6B3m95Ev5VJ2nuBJT9z9VHHwNBJHpyDAtgZ6rZCjMh8e7kj",
  "key11": "5McFYcqhekPynvwQGCZk8TVTbouwPFT9muASemFut82g36P6DyuC56XLo9vzLsKV1KpPyyoMZ7QUJk2YdtTkN6Ej",
  "key12": "58KEXRg4YrmmSpWpHAVkkjvb89PGntpFQBdUkvygRy9Na4BQ2M24q9WdLPF6N5FczVX4agpHNMHrDFQa4Um6trEb",
  "key13": "31Dg3pMbvBs4wzTASmkgnHMz3trRZGpbdmXuL1m6DmyRqYPotqrT19kT1yVmqVQRSZWNqbnRcJhqb3B1NM5RAPEf",
  "key14": "2jQzQ3j7zBrCK99YCgagA6ewiBvVd2Qgajq3LBdZRnuRHcv7SXtHFfHtHz9Y6aaHjnaB1MySdD1TEjTeX11R8dsK",
  "key15": "4EpmSexVFr2u1Pt3CmJfBwawcPjYQ7kDGTRsymBXGMXw32wYEG3MDSF75K3CykepJ4QS7EcMvUaaXDdyXjtbwRjF",
  "key16": "22zN6i2c1uyLoUmjvETNw6Pt5Csd6MzBJ1K1hDoN72zEYj6LUZFDTmqRfD4ZpUmy2ZUwM62fyUzJCgsc4CFrnG3E",
  "key17": "z7Zug59YrAs5Hq7k5nW1Pske58e7Tb9DcAXq2GcmzLZTygNyJ5LRVARiH9mej6HwaAf9ScJ7oGPSztsY45t6npY",
  "key18": "pBjMKNPWGGSFThnFrwx2HVSKLTgiC36k3e4CeUhhkrQA8YDvfkuSVGVEK8RxV9KcqBfcjDem3k4wxtkNrsrgfGJ",
  "key19": "5uYfxp6vxcUNeHfndH9WEw9wJVwvJtXP8hiJiCLUpoqoyzXfSyxhvfJxs9dRKVGugaXkMhZ2d3KUPHHTKZoW8b49",
  "key20": "5mne4VazBJ8hhAbdRuesfAW2vwYHX83sH41hek556EeTTR8beBoVEx3cD62WgXQ3ZhzYnDmjUoLiJDSyPnSuWmWM",
  "key21": "4TNc2bLLfQgjX4cA7YHKiUjBALiJ5SaW7ZeGFtWoiqbBEdphrzrsFWib5zymq26npcHaWef6iBee6dVk9tkPnYo4",
  "key22": "55HchD2UP8WAvXEmwi5QXHx19W5uRvthn5cZ3HACdbEeJndy7ebvmEWPofxS6FC48wpe6ntrhi1EkHbCZhZxi1Ha",
  "key23": "38ypF3EUCwXmMZhKmw5TjHZj8vjgSXnN85bUgP4HQuBhf2xPoMuff37byfigotMi4ejnprnzBbtD3jKwrU58Y9yB",
  "key24": "4Q9KCdTsJgaQxYc17ow4TyLBnQrAPJhhkbpXE8zMVPnzT3yh33hNQEUSkQrmz7jGKWmCEXyyuagPtHXSVULiVXYA",
  "key25": "Zr58XxKRVUQZehNEyn7fKqkjSXDV3QTytdfjyMXgMo2T4xRti3EDc7NaJMVNaS8vvaEckg7sjzRnH34q3b2bZTu",
  "key26": "4SxcwPhbZfNJgLfKDs6NfjHtjobLQXzSfSfPYHeQCvpN3g9wqfeTge8RDVmv5XzchepUugtjoZaSwcWnkervTGjG",
  "key27": "3MHckMFtdGMN5g85EthxHfdvMDorcfy4f48W5W49F3K8rVU6KCDxNBQYpMk9RUMrkhLSQBrtiwD4cuvEvKHq6fj4",
  "key28": "243nG6923PuhYAqp2MF8CNYWX1S1q91PiCPntf1sbD2pkzjNMz1sUcLFyG4sYXwz85oCnFPWEi6wigPEYR1odruf",
  "key29": "3CyxCCTZZJwqXv2x9Nb8ZFF5JGs1EDnmPUiuMYAZpqyduVeVgxqhrtws2gjGXo37V7tpr1ckGeVDZtMa5sEp6xjQ",
  "key30": "2e2qybe36vtQvcDPMnpwMt8Yv7TuwYPjWtqq1YZLUFcH3weiuVMZjTJ9XBMt5H8hJUKB6WggKVNxiL2q6ZYfnZfg",
  "key31": "2hDnJVhbGNHWcjhcuAFZPVA9Sr31pSkPGNXU7PYzKpF8gPggE7WJgsMcJKm5M1gsGw3aV9ypdD5X29GVxAuLRjHy",
  "key32": "45r65NYsWV1KAAvhvqXk94HFr1NqhpQf6v7MXTAjicppTaorxhYX4x93xAQixBrSts8aAzgn3zkygERZWeTDnymR",
  "key33": "4tazbNtPLgv5M1f6CH2syiPAorZU9Ee9i3iFZBUmrCoznPj1UQVDmnmVEEHkY197S2Jc5W2Nt2DMBWtzLcGwtxNv",
  "key34": "3iUTEfZUYFJfqo5PfCpgWrfs4rnvPSHzEVcrkkyHbzTbpBVCbf7bYbMfMtK8ByYdhNVU1KioGDnSKNGy5zG6qENs",
  "key35": "UV7nHzyXvwKY8FziMqZK3TcQf8eBmA5EzCzgRuDPkwifAkzSRAEC4g4EdL8VrxEaXHWWW67k1Ls36Wp4Mg1nS9L",
  "key36": "4BzZzK4XK7a6oGh9SSPJ7gS8V8Wxn9XmjUcdSGvifMwQFYRXN2UQz5BoLCWrXABU9tU7zrn5VC9wi5eoTsmkASCB"
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
