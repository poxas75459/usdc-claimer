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
    "3r3TdJR1ytRCLAM2upLKHFmcsma1QVZjVNNspfMrvAhtu6WGSrvadxXHEV2RTsDVUBpt29hJtaA7M368zRn6gAnE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SLKYbCRynmSngqsrxXBm7QGLrwsG9qb7PUpgTdTpXm3neGJeRjNmSseSWmAJ1YG6Hg92tQZndNxknwaJp5qTtZc",
  "key1": "3rTxuQShFsKRFaxxnggBhVu86fcdV33escfVLHeUFMMdLEUEQND9fkW8dp9MY8v8E3QpW46Bn4DwVJ3DcLnZeQXf",
  "key2": "23dPgggpTM3CtkiF5JUwxBiWmejghB4DMRNczqR1kJvsaXb9gn5zPBwZ1wAcspDjMd9Vgqun8LkdQVMmzQzfvbc8",
  "key3": "FpUGcJL9G93j1dK1KtGqNSaHRHVN5Dw1D291zWFryir6NMpBijFXx3DwdpRQ9PGYVgjXSxoZYg32Y9YUpUhFLXb",
  "key4": "5uPAuSKeqwnoZhMvzRvwfFDMshs5CLcBVVJ8ckPxNhq5c4KF5HLagFbxLExDfMKPu2c8DV6B2oBR5YZYt8asaKcj",
  "key5": "2w8HwAd7X1TrY9kxVCwpR4DYkkFSpSYY83Nv9axPnTMBAG2qbS2o12PnqUqq47XxTKUAXqKxRCR4AFUC3Ksrc9vD",
  "key6": "4TmmsptcMtCrXYxaXPgq1aWEWPdS9LDSgWf7qxyLHe3VLPbjr9ooAnBK3xxjHgApk7kqcord5HzLTpXDBZMnSzFw",
  "key7": "58VXY5g97nM8vrRVgP6TTbxEHZ9HDPcW9fean8bTaKsgX3fM43qxKrBA9q3sATzTusDYmaJYCKZF1bdS1sjF4nJb",
  "key8": "2N7JpA5SsoqZ2yLyj17ziVqUXfvqzS5wPGSxrcRJ5MYmCW1ZR6msrkGkMa3Nd4HEtnX6qz6dBweWMuVYpGdhQX3z",
  "key9": "26uebYy5MkvoM5EiMdARWdW97nA39pHvA6Xkd5R9WRAgTraedeGFMtsHaRxrT6LQReHg2KN583f5JiBAp9GGTSMZ",
  "key10": "4Pd2CdSEqgihaPfMWoEMGphZUDYydiU1VtDC6d7aScSADVkd88MdAa2ef8m5BtQHxK6PV6JGsoHzxCASNcvWY2Ty",
  "key11": "2ekTxGbPA5gozG7kWocPPm8H4WaefRKyj5T6tLmEgqvMUzxW8ridAxpb4XGAeopwkSpY7XrC6AHizAuou19MdgrH",
  "key12": "2WSXGGKGAZ8taJcjEz8CZyb384bpDqx7ajm7A3Qw71CtbEFnnoQDwPasfV8TnKkRQkxhbQC6c6cZDaw6Y5d3Yocf",
  "key13": "mZe9xMbi9WRUZyiX5AfZZEamw2J9tdzG6HHCbDZmuSQ3g4HkvtLBDkQqae2nV56tubku6wneGrR5rdsMkPdhzPz",
  "key14": "2AF1Lc8q61dSH9Af4RhkLwym6Lj2T24RRewt53cbeEjcNg6DFDGid7jfTnkviWRanyRH5X8kfg7mquKNMWDXrUnL",
  "key15": "353A6JqWmXxCUeFVrnK9fqM4WjZURmqnkhNPiuq1RjPYp4K327fznGqAPat4k7ZwtcCKQgY9dHqt5GTtF1CMwgi9",
  "key16": "2DmPQcf8xHvw15qdQV8DMwoUTFbXa3iQf2nRroYq6nfQh6P3B5hyuXs6xPftKrrpgi9CxFv7s4FMh2a1KPNkrH7U",
  "key17": "iFjqDUjMaZT4Xi7eivWciuuCw1xhJ7ShDjfNp4rfhtCXXxcD6awqBGF7Lbnuw2f4KhPuZu33tv2u7rat4jszgfx",
  "key18": "5Go3xXSZxRX3xo9xPpCTRkUExifnd8YJaqwZHXdkkix89VKbigJJkMhaDQ6N52BZPajdjhm5Ct9HXwuqUv1wtsjn",
  "key19": "vX4usTmvNbHxWm3PtnGrTb1wazpekcT72q4GnsGALgjR3vujM4QUScauiXrE5ogBfUG9Y1PVBuAnWgtZx3uPttq",
  "key20": "5farsPrn1FRuCSUNVWnggCBYHKYUN4PfSfPg3tFG7yUxWyRrx1G4qH8BkruW8WRFr8sRRMDyVCfun7ye4uoqhxCt",
  "key21": "3pnDJ9qkr7YPqNCphHgRrtuCEnwR8kYrw8ZprKCPAFEthjhKaAY8GXPJiXhWCgvtNzGvoL9R2Y5DHLeLcWtH84HV",
  "key22": "Tcs3PWKmTDqnkF8rcLnafRPLwpvwx8zPL4PBbx1GF7XLUZ9agc6FpVQV18Hoqz8qVkrdrNyrHwbCoWsWruupGfV",
  "key23": "BzvPpwUX8p7BKVmRuTeN3Zsx3xZMyjLsQkH13MDCto37K2Qfe3a9CqHdP1LdJLmtCnyNd6ZdoiquZrwNgXfoZ4F",
  "key24": "2udjGzjNExLNJW3NN1GYD9MFkD12ZLvqsAXusC7UYUpUFXRW8iCskJNSXqjURQ95kEeg8eDSG26GtYAC4sQcQtV3",
  "key25": "5wJELqvreLiL9WYvJZwPeWDN2GTtDXfifVw9JLbLdPXrgZkdBaqAmSZR4DsDYf6EqQzpdyW5PU9j4cGofGsPJtm6",
  "key26": "57DX19MtsQjexBc7WWZoCPAWefpy3fVJGRQKYixGexe6syRNzBoatux4b4G6RpYUxy1q7bi5fseuTdR5sxwjadQR",
  "key27": "2Z6aZZvWBe9JR5UubKkfq93vt4Y41DE3BJBYFHk3Ljrz2ovNb7g7LMH5qAmBtrC2jgYih7ytNPftLPMbAhMfSmcC",
  "key28": "3Thm38BK5EFDWErwtwGatuLLeuvB3oY8Rap7KrvfXMhRZ7iKVDetpTkStWXBWNq2j2PszWYMPMcamAaKx3Fe9CvV",
  "key29": "3zs4ghwTZP9hbqFVtHazK2SHVNMSGgN7WkMwkcSfj3eWiUS6VATVuK2vYmbHD6ijPfYd14JjGpa1mapExetFzTWJ",
  "key30": "2jiGuL3N3yYcYZD3UJjjhaoqe5NKdUSkgbWPkTwtNXcTE1qvjCGewEuhuRG16Ykpa883LZ4NNksVM6reph5ZrY7r",
  "key31": "2ifPQ7fxowdbNNa8LTUbzABxVu7ej3gyxaypBvV8YHUUw9uSSWukxn7GFKjJ2Hf6vp5soHre1Y8SL84UdUzJjCL9",
  "key32": "2GEZroCrhmx61nbNV2yN8t3nTPKotr4mmpNEcBrEemCakVpkMkNYV89YwVqytonq4KwY8cUKiwpLaMdca3w4xEeS",
  "key33": "F8MzZ2jCR9nu5Hicjv4kiquZtPRyqwhCXrh14jaVt6fgQUXeJQp41p2V7G1wW8cbuKQJqGtmR1t8NFkNEkvxZ8B",
  "key34": "7pWCtT8tSc5qSRAQaddZiB3E6kjDznyWAVG3jknRcUoHq663TCwoy6HqR5R9GfKzcWynUD2psZNNBq2uBSWPahu",
  "key35": "JTmxr3ksRTmJgL6qS1exrGk9XGLUEoq4GUmAYvEpXJ3aMuzEnYSRjtCYTeqLTSitVNUZ8aXf7j9boYtdK8evD5G"
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
