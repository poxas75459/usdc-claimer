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
    "37DhbKBR1hSUvqnNMReSjpwzGS4XGQToWPCzBS1MVRDx8rZ3F5P4bwiTL5q43FitJp3jH2tgdWd6j195PT4RZp4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cgdtqDxNePjC4peQGNcrmxqyQ4AhGEow1hCrZb7nHLNoPAC12RggRYReLMQdKpd81gWYLpoqbFst4XMxJS3RgPv",
  "key1": "pttZSZFiybR5KUpeGhDH6xJH3T7TsvvMmPKan2pVJUfmYAS8C8NpgBPgXUkDz16Tkx8uM1nY4vSqgJDg5FQUCHi",
  "key2": "5bDVZLPeo38erXii4hRjnEmRhTpusijHi54YMsySaSsbd6QwUF7nmAahJ2nMAfwDL7NHU8SB1LdaSm59TEkJp5Bf",
  "key3": "xmPfjYeLoNKUvEevzCXi7iw4TMEVZ4eVAtkGWPb1BP8KNdZ4zjZfof3RkYqbHJyNdj9KA9CxPPLM9CT6jSZZLZj",
  "key4": "2qLvAxP1XKa7hbVMGyaQqpYB99JGxnT36xW3wVb35mE9gGDXdJGXMThzj6c1BdN7faj3MGP2is2gE4TBnR3Zvb9E",
  "key5": "5SeYXRW7Cg71t2H5ubhctR7T5MqN8d6k84asP7mGNzT6rMhrMT5GKoMSpYFuXmDEucgwKTLove5B7g5HjLQE4et3",
  "key6": "5diXBbVRahGDkeFoVZYhY1VhzsL77hHS9MTvKsktuULf5aBuwcB399isLR8BhpRum49BPUgUhptD4nK88pnhAJRg",
  "key7": "5R3YWcRuAvPUp3dbKp85qcJ3JUnWpMJJQxeCcwWZAYQxtsZWujFBPrFyZiHvzyz984DJoBUbngVeaSADdrjwjYAo",
  "key8": "28qudUskjs9qWGW3qQsv3GcgnAQVK8R1f1MSnLM3PGqxTkbkXQBaESUJFH3o9rVXzMuoy3UJ1VsaRNnbiDC5dHyZ",
  "key9": "2QCtYAwu6q9EjMpKjyFUo14Uqn6UD4CybQWLCwH1zbBfemxT3nvaucp2Tg7SnJsLHHtT8CEEaYKWuMjevMEQ6LU",
  "key10": "66vk5WWhFiPovMqz1Us74pLoZn8t9hkvk9NSc4fDz31ZuPMye3RtodkupgHHZySyMmww7MQvn4AYH7cYFnbA1Lf8",
  "key11": "3hSQcw1ozSntv1js8we4zHeNj4sbyLTuhv2GbF8JPb2speK1gH7yZoKwc13PX6R4tiwj2XbA1CyEjWZiwYMFTeB7",
  "key12": "3eHjMP2n5JWftAFZphEvLSf6MaJT7WnmdMibrVidD4H3R7MjYwLUhcdSFnG9xXcD91P9ooq5z3AucCJJGzxX4gx8",
  "key13": "3wJxWx7ieTzBYgD9u61pRTgV7hiHXA7Mkvj28kH1n7BCzBatu5vJ2g4UKtYU1Xhj7ngXXPWymWCfG4YUwTiPH9j8",
  "key14": "62bhN2nHduPeWEmMFestP5rTWAETDB1Kk7LW6LjNcmWSxSF3fMJ3LPdrMPJkFjU6MisozkqVProwqYRCAzGfWGoc",
  "key15": "4Tt25vzgP2C6vewx7bg8Nf7z5tDbi34XjQYi5uffpDZ9jsi1jgdTwECq44XUfVacX5qEhyU1h82nX2E7dgxSB84H",
  "key16": "5HMQknfP1UtnSkXR1GKagEMLiESBvFDhPNHDafHV6sGmCWjjMaHNL1D5qSSev1ygq4HndMRhfjzkCrcWDskDJnSF",
  "key17": "4rvN5ZyfPUBz55bu9TboxGfgK1Et8LDmXWFDHuwiV448bePF2wuoQPgG7Gp2ndXsqdzG4LNwPrJB8JmmRmtVh5rJ",
  "key18": "22DJ3bA51upy1zKmw5eyTqUHcEgDGJpmri5EDaYsmoCUA9nmzaWhY5o2EFTjFiXf8NW5uF77kUMhZohK7YaaRRho",
  "key19": "8Q2DiEAJvcT7gLPiKR4fFrEK56aTjJZTxrPH4rCm8A6qXzAVdG6BDAjPkUGpaSWXQqBLnDc9kmszoWaCyC6aKpY",
  "key20": "3CEX7UhASB4ynJmMYSkBpSA9nSNtDuSpTJpFNqGajMK5CnW6FNqV2pbd2RQ6msuYvHaS5kuStaRiRaWQEcARAFUd",
  "key21": "RjNncya2YnC3gMEpaJA9zVGc9CryVMqzmNocBvvZT7qBcYhiUYoLbUJ2SVWVkGdy6kKios2DFxKWXvR5efnDvZ3",
  "key22": "33tFnZ7UmBjqe13dbdVMLc5p6ikX6fugw7Qf5GsysrfLykBbTPUAQv5duhi9wUkqzG1sjzjVFmLNgwdyFmm3hAJu",
  "key23": "2N3uftrvxhcg52bCpArGHJJPUi62STbsig7UWrtDtMdhG1pbfpmkdZu6bcHHSR9uGrYnSjAYvpd2MsTJCyZxuKzL",
  "key24": "2TSdwdmGwaJyzX1Z63y2H9F82VFrhLacp9b7FyRJrVhVxfrNzeqjidyVbKQ6kC3k2iYvPhJWNxgHX8XTUAfVeEot",
  "key25": "4BS4mkb99U7PcT7BdvmGvx5yf9LAT1RKFPmtepjLAe3DTiiNm6FDQnvy1eE85NKkWmkFhtHywLdumWGnKwNypdmN",
  "key26": "47CtWnfcVnjCvCQzJKPiTpa6ntW2pjiFv3MqzcDYXi1wRjkp8hruVfwTxfevFncVUxJkZ59QUe2Dmm6pBXT1WbXv",
  "key27": "65CbLGLSzUFcdydEwQRma24UGWbjpS6p2cV8xJA4cgQ6MGcvXXYFwSgLxHFox7EcRzQci5UJ53s3nCPNykDgVHE7",
  "key28": "jjAvsJw8fhmBuMKijHCsyK26Pbut6JWoLJpkJr7uCEgBsi4mDqgChAsaAsAbYXCE6ZCLXsCwVrSXppb5pW6YXo9",
  "key29": "3Xxdeho36HRKkvYVf9sNAQyQMapbkwApzw3fVzYT5Wmia5krTMVwbrqk6mQfUTBqESZVxTeXtpwGXZZSGFDSvuRT",
  "key30": "3pECnsKHZoCX4WV5QjRdbLLzQyBVnjYSRkF7oe3xXnGqSKeE2H4t5PVwUUmkjuoeqYdkf4QcByWKA8UJqjYmkGgP",
  "key31": "2tjW8udA9vqYLJKbQYmAMBz962uMb22kZQCYjzqESsMSUChfn3ovAcgd8ZJmvA3FX3rhPnkfAEifRjpeqZc12HAK",
  "key32": "2YdsuJV2Zq11haRGb7dr2o2uCLjQPUKLoyDnVrjB1DcxjXqbrN19DgZPa1owACHnA8nkqiVUyyRF5XQ6hEs1XdRU",
  "key33": "2FpA84hPKQMom5wNsc4NTxuovPMftzuCaQuE8fzGHcyoioYvGvPrbRdUD65AkFyaeug9GLQRMGvo6iBrPSUNTmVV",
  "key34": "3wJELUcvMmdk3Gc6J6b5c3nxf74ypBHqYoFHZefVCMS8VscQ8zcY1RGaSiWgcT49jdAbgnbBsU6ZPvuu6UJ4of6B",
  "key35": "LbqZ6tS2bjWV7d95YadtRVNjwSaKDtiaWJ5YTuEj7ruXGiaC9Fwq9vSFg7fcTUGGTdjvxbdtegmh49iwpqtSrfx",
  "key36": "Gn1b8JYrar5Gfv3V4qCvNvUytEQXDHUfhgmLmfKBxSttkXebvDC1ebDYLv7a47uMd5h3zeuyQUND4rm3taKursa",
  "key37": "53b62E7AJXxRjs5FgJSgDZ4MKCR49B8ndnFRDEZ9agw72Jkgfa9LP6JbAsy3ywgR2BSR5WyeaNnhALE4vyvM6yDd",
  "key38": "59GEaQG1oiJMsLPt7N8adT9ejHuFJBnLgiDp1kad2Eak7CHpBZGd8hGxf1pX3kFFn5V6XrP2E8vXQkafbJCAauE",
  "key39": "3eLCcGU3nuZ9NmytH2W6uZfWUMPztK3mQhRjyo4STnHdVwvw2DbdReE5ok6S9dzW3Zboi7HJmJENyrU5EjTM4xXB",
  "key40": "2HpKxRQWN5aWssWWqWJWvH8jvAqmdkBkXaHxjPMkuaG9YBpg7coo9yDTgxCts3zG7gueYiuGt6wQ1bsupYu1qf8f",
  "key41": "PCD9DwgHzab75LS6rD4RqRWF2uGF1wKPKBBygBGQPBBr3uczp9WkVNkzHe6DpScnQmqXWQ48rpFFfxVCtQjCQET"
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
