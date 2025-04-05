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
    "5ot1EHm9e7KK2Tv8pGvt4KfU2rGb8DHt8QYt6P2b23B6pFFpLp3BmqiUCaobVxJb58XQQu1BoMZvWHCPcsitgBj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jw5SoqPgmdjG5qyu2z1atquP3VGm6vkRGM9V5BtgnjY7WKFdcf83DfCATPzoYzCQFjfWpF7kmaUPv8A9bG8ZNT4",
  "key1": "557vNKkQ7yNcGdKcmBUBZdrjzVXiaQRH12dVZUVDpPULbCdjGZ6PHmbP33zZTtDW3ZzL1h1hQhYS69GvVwVcpyjG",
  "key2": "4vMTcG38CwPhfSpgVat6zinqvZn9aYkXWiaPCrM4RnjSTT1knbE7FzCz8inHCto4UquCY2dpKRW9A8WasiTCLrEx",
  "key3": "4agEYRr2iKN6BMY4veMdKRxfAuPbWyTkzMX7eu6N7SVsCwPSN9Xtd6B71tphJFXLbHyam1ibdK1JYrPrfQkV9uRN",
  "key4": "5jL8Pg5T7yKtSrLUJyiGxYHuFxoUwcvsXtp7ULzXmYavGv85aHdbFmUyusnin1Gm27Crz7Q9SdeULptUWQWv8wh4",
  "key5": "3dqxfpodeDF1Kymc6DFEqE2pT2KxddGsYijAJPvF22FTfvBwP8i5q3GccBBXoFUbBz9RJYZVkhRTDahUD2VGkQ4q",
  "key6": "4EYtoiM75r1rWpVFQWQXzQkfTRkzK5kkGZ5cRCUH5WdRY8t1NqKapSdoPwMhtbDqC8YeF7jgdLNsVESfF6ThiAzZ",
  "key7": "r4Vr64ECm93ppFujBPVvVfotjbngcYoGDorFrxzK2FpDbn28fyT2VjossbSg4PGSh2feTcqZdMm1bbK5yDXEVfY",
  "key8": "2bYUm7naJfqNGFBxNt4hRsiQGrY8VGJdgJBaPkp3h9RVgJ1vojGE2FV8BEsazqBkPDCDWUK6b9dXxKVh1ynuNG31",
  "key9": "2MkyfyQYXwgi1zU39rGncfSkxozuz8y3EvE3ZuLvP3dpRTtgwVhZgS6FTSknkKq7AitXMMV27sV4qzxTdgBVFhkw",
  "key10": "4RpFk6y5ZsuvvEFpG1NAof5gxAhRTpkkigvZ2vUt2czSyKvsduaLEqH1DJUnnanBrmPsNmFnfLvFMKUMumrWvB73",
  "key11": "5UCyiKdBoibcHpLQmbZ9HNsqN1MemUbMjcpkLFhebFtW7dczZErgYB6FcyBKeKuFka2e6dzgBKTwwpPZGKFUSHGo",
  "key12": "2qAkZgqHPEv5hYBN8JorVpPdHaGDopmGK8iiEAiyVJ366z5qdddMLt3whwM9TivHdSppvQjQJYfbSDJ3Y59B5phi",
  "key13": "2Y7h7m7BXZMFM2V2PQ5athSRMhyPS77z3cBwprPhmUEvHgsokxiGajz2Tzk2hDkR2NVBHngmgSjTiHrDntXe97cj",
  "key14": "4k7ghrmPHz45ByHzXSj8Fd5LKfVUASFuFVcxBtdFJETub6YqgvzKxhtNGBNUaTvaULAZj5s34WR9NCHWwJmphZzJ",
  "key15": "5c6EpvXdXXDxqRRrfibir7DSYLskM9qg27ax9QQ1tNPhugNAbvsSMCTVU1AJpTNaxaoqcHoSeSkHKcmsNc8oEzVS",
  "key16": "4Cj65Z1ejNVqwnHCDS5Ecf6FfVmHs1J27Go2DPRkAzJNknpE2penbyk8GU9Cwf9P6Wxr3yfLEAfWFV6KwAFMUurj",
  "key17": "5Gspvj1m32ycU286WEsZfeokseJAhcFxo2XdsR6kmnQL3K9eA6asfyuN6CkyeaN8dAyMt7J34t8o3NEizpQMYfu9",
  "key18": "4qKZ8BvVbnSwMrpq7PVbKNNFyEzK9vWK8P2zZz5k8HPtm2QCqRcMVwPMXXBZrYwxvS66K8RQNg2pMsTYboUEJSCj",
  "key19": "ydsAGpgowE2RXX43zSojeHS5kkXnhwoZZG6SJStY1uhE4Wd5mv2XFhgEG68jwmuKt1y24Vvr8v7pLkDh6kS6H9M",
  "key20": "2xAYh9VtUTyy6a3BaJ4BoYqCM1NYKccER2odiHujnTWJaPueMR8h3tF684ct6TwsR89CNYGT3DjxcxSZcZZt8YXP",
  "key21": "4rR7wQDus7mJjDxDwA968r3CYUyo9NXo6GiRGKdiAopN46u2YAXZ73Ef2JyCqcJ3AvVt73YghG94732QfHrMWnaB",
  "key22": "TzMjhUN6Bi6N4fXDriRfZDauriysfpR12AF91cbEhKtQajfspbFAaS2ZQcTGUkuJS74mNsTKLkPbiDZafQ8HHkX",
  "key23": "2ptKMpe7AzkGcHT63A2g9hdvbs1DHFRfbYWaiatn7hz6XvuANEhTFd7wWYvNEcS12RtXwJKmSpxz3Kyn6xNcpuAr",
  "key24": "Byq2ETpubmTme51d642UdHFPmjPZWrP9CuawoEkm9SdNY78VQtwRzoKaVP49rbhpJV7Ma7TPbdxYgrgK5JwdybJ",
  "key25": "3Zg5EsTwGcSx828M7WWJz9qLtiYENktXRDypXbBZcHFN5EtFdizuPRiBe96BTEhNMjdT1icdidtNeG5nhg6JKd2i",
  "key26": "GQqBBqpCESUNqyWt5t1LsuAhzgNcpqkCkeXa5DzhoMwXPNuHdyxhof3Ea5pEkEjv8NMJfg7BYpv13MLE4Namj3H",
  "key27": "5WpgJpg5eNqbuaqeHWhxNanTraYgjupvpzHEzdaWw26GPN2ovQApnKcmU4fs1ctSgHGrX8XzSQcjsG624DndjYrN",
  "key28": "PMJK7czoHeH5e9GcnxyhyVEeGDWRkkyAGKBNph332wG1re1XxgARgJQs7sNbn3dD3BfNrWK5Frsmsoh2855CgnZ",
  "key29": "2esNRV3Sf2TWVLA3FGXNjzrakG55XTtYvKyZCLvJvfXCRT4sxWMWvi6QWdhp3tc9BSWW3mgZJS6DawXintKPKPkB",
  "key30": "67kjnRsiUuNLcmJUoBXgZXP9QHBca9pFmFnZGyw8RGLEvwQSfk5tHV5EKVMvPvyPARZHzkHdhjHwrjkXqda7G1uT",
  "key31": "3Lc9fRnZQVv1o6Y65AmcARzoMp4zECWHu5CdUP4wuM6g2N6eex71ZTtHX1iYi4wLZmCwzjrbs5boTBvxwZAiMkSU",
  "key32": "V1PYYyrW3h9hNV4UehaMyKPVzWD5vzjk1Rr78zAGNfXtSq1xnQK97Bxrtnrnwj3bntn4EQf9fojFyxCWQv36oP4",
  "key33": "ZWguY47sm8Ji85RyTukdgQorXfFVUfM2KS4cnjqZGcsKpv4KisGNMESDvRUh5D36Kkouk25W8uxGgKzDFKtbss8",
  "key34": "59HEQU6U9Fhu2r3MtF3c78R1AojTtvPyYL5KkW2tJQRipB5e77XCw7WQvpHUYqd5RL6wuKHVr84ArEz9xfu26Nz4",
  "key35": "5mhT7BYsYJEfzGga4TYrZxQFxCZnSLAm11CgMQYjur31BRRvkcdUXaFWgq9CaqYTzeUboqePcEZbB6dXceE9gjmP",
  "key36": "VPJsdt6CCHCta524S1NdqMJQv4Hqj7Kqtmiax17YbNPDtY8uLB2URu2HCzNhqY2bSFN51HDUExTk96jY7dHVDxa",
  "key37": "6QidNzoVtxMq7vHWxFhmRmYyzFy8pinpREJDwN2yUarzDwCRjcG3xGT8KAPqC2pS7ZmMR8cDfx8N7LATufnV5LX",
  "key38": "5HrZ4dRj89RrHarhqEYtqWNeZzVdtAQSfVJNFMhZUJ1grGESpDZc7boSZ4bmYEcjgu4XAymCbc4opqe7hcgS4EGy"
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
