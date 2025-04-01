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
    "36HkxKz46QnwrJ7hcfMo7JNFsYBbff4RgNuPgVdbBBvNCiHotnQpkBDnUHh1HTiR9YJQdKyezoF2zxNwn2uRZmkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jSnUgcsN7kVSW9u7pGwRmyN5eoqtGPrxPdj8pfK8SvsJyiEXAPFSG8fespkBqetd1fKAERDqysvmN15Y9BjjUyh",
  "key1": "4AGvebh7vcYCPdgiasfuEvvK1xyuPYzsDvSRrEKEkrSTJ8aACMfFrX5JwbGKYdbeT7MxZrZPu8ymRfeJRr1uYPXo",
  "key2": "5sPXME34vrHAPDGoakH3gBpkrhPFJ2gWqRFymN6nCB3bB26gKw1PrLspwLLJCRbLFKVCK5bemVdps5XqTP4xQARP",
  "key3": "5NKjyrDqhB8bfbNqkuie7NnjJH1pbMoUDwyTYmUfHymZY8KCxUvMPEE3rgug6CuujiAV4hhL1oHbyYJGmjrsg7sn",
  "key4": "MtwZRiBmLY9UGJaLn74R9xKvbuwo5bvvhcbwrXDaJenCxQ9rUnoaRNrZGaYJYZ1aJnn8SQfGmUrsqX6mvos378F",
  "key5": "p7vQuoQk161npygSSutQLeSWPzeaJJFEU1cNoJwvLm7pLJT1TwCpKpZ268TJyprDrpfdZyNM8UzU7JpAsPhiwMW",
  "key6": "2MoGRSFr6XY4oGPAmFFFrAso8chfcqeS5mjPxBvKbGYoodk116crVn2Dvj7c5hkXVT3xsriXTwFfmM4TcJkAVhzP",
  "key7": "3jSXhiEjWYb8QS4EXHnWgWAUSowwzfTrXuaWcwB7SB7PiF6Br6t2Aec3CeSff21KCa3kd5c6KHPjLfYGW3rf9ikY",
  "key8": "tFCFsSbRYMnnE8NKyhGwP3NGVhE98YNaTGb9oDCYHvjgee8nBeCSXPUeyY2JmzBHJCtFQtojuF7Agc3oPwbsEas",
  "key9": "3s8ojzujvQiYk5MH1uoUV5cHyh3Usj7gPGfJJDj5QAE84bBsoiPZ5KB7j2jdeQ2G86H2HXm6hZ6BpmtZxNQ3M1Ar",
  "key10": "vFVa1Wz8MwxFR8ihz3AnWDNiSDK3LWY4VzqVFmRPHotxBQf2HDiUDjaMiLYmft6AWjuDGEN2ywFLnJUTKyh9tuq",
  "key11": "5tkpoC2oVg2LJDQ4LrdatrX4VpYVfPCfTedAC2XCTyiLgSWxwMVSdV3SZAF2RfqzwCjt5sRanRkcLBF4aVY7TXyv",
  "key12": "4YLvHKtQhAXfuW25sgvTre9BXmTC5iQhSPyi6ZkM3MUg4SdLyNMbiFu6Tqt5rUh1N7ZbZkGKhZxhwAt5SUygXUER",
  "key13": "25bL7KqMj5bUF1L2L7axdP3is5Zek2VaHB1o5gkGhViwJBfR7XtTDQS7TQwXx72MZj9o332cSisvG7euQaZWgV4Q",
  "key14": "57hMeqAJo5dAPgPv7CYA8C4aHfP8nB5mYXw67dL39brDVguuEgEgB9AmBwYwzHC5qzhibxzkx9rPJchDy5RPWUo8",
  "key15": "bSpUtL1dUtgft2qgwzCUHydrBYZcGvcrtVsvsWs8z6SuVottxE4iiQbTXpDSKaiVAZ4s3WGMr7MXdo3A2XNTT7K",
  "key16": "BgZxcjWn5S5XJHVHz5aGNJ19CVtaWkTVr97vRb2fArXsySbgTQAvLPbqVULDGpVRz3sjJ9XZwaVo6eorcNULNHn",
  "key17": "5JQxjKdKGyhAnBxjHTpPfSFavj4YEySuEn6B4aHEHbgKALM9c5Zcu8hHfbmnMdGdSAhS8dctWjkV4hHfvRa96G5U",
  "key18": "2wifeRsZWtJ7wERRFWc7KAjVr12TE5khYgwfCpTvHGS4aD88xSa1GnZhzNd3ftGeTtQ35UeJqhSSZsK52bXfQ84T",
  "key19": "2F4G3bsSJgrXuw2bddZrCAK8UiDnqBujLaKgWnyuW6CdaZiH9xt1siYGLGJzM84LhiJ4nL8R3WxBuDT9A8hp6h2H",
  "key20": "55Rp9ja5vUqmfAjbufY6Gemgz5inQf3DYnpmEZwWRUFZPfNSarnpURCu8LjGggP7RDk2PXzYsn5rF5ioPu2A13gF",
  "key21": "35Lqngeapmta6d5fFjChqfPLz8aEYtF3S5WiYjWczsu5EvXrQd87FfibgeFGJsQrrGR8KqWJytE91B6GWVK2G9jr",
  "key22": "4ggWm3ngvxtc7ufBPfVU7eSAoVaFV8EfQEfhs136hWWxQEM7gjGXQa8fVUdE9jV3AEjYTuhEqbHpSKYm5ba8tqdp",
  "key23": "2DdUKp3EUyjhuXEZFcAmBFH5bEqUGQTYGXN2pns85A167ZcYv7bsyfYggUrmaPRfapQLJs1BpFNvYB26PNr27Ufy",
  "key24": "5et9DM5oB8VXbMJDQ3V5VDWhj6i1GDkhC7dQUBWG9QZKmWD1i7XHoLDY6wGWD1oXaotPn96uNEZKcHQZCLfTE4pd",
  "key25": "531LV4xiuzxahHLhyWBt7BLG4m4v45vKbw1uZP4P3SfiQUD2og8JLZeWAdGMxjTHV7FFsMekK6erqnbqsaMUP21Z",
  "key26": "r3YocN6QVjuJkkT5SrK5hxDyiiYr3jiZ6efaZLqcZdEkoSgSt5ywdZdKi7M4qKgrgUovyQqp6Hav3KfW4NevR8x",
  "key27": "3PPGdZAm9RJfnaWz2Ei2L3ZSsrRrA6wkMP1jj9rLPrgHT5V3bgcN9YwBj86kfspmQ41HUuDQ7mA5PVykCvafKRCZ",
  "key28": "2MTC3qxch8GzbVR6r7g4YH6oXthJq5GHp5TPE3J3HxyBsExz8vJRugpLsQD6okFwRCxVA4FcnNEChuwMw4mA3NhS",
  "key29": "3NA1ExABp4883VQo5aPYTt5HRHczYijqkvLenVrCpeZJtHnRZcv64mHJ94coUw2owunDshyDBNJNn1KYS5CcmRqR",
  "key30": "4GmdZNGQb18BahZvy3ZpkSUJYWaTwp2kwDuRvmSVYF7Wu3k1AUxSwKgtWQanVREg5N4qV5bKV8hLVGjGhUrqXbcZ",
  "key31": "5K8nGE1R95C3w4Cxcq54cpnbr8mLKMcEUecoh2TEi5x8LUGchaFQtZMxMm1mSDieLMiwnscQQ6Zb9VrjerE1792b",
  "key32": "4YXj9Y7Gz573bmBUgKxk4AB7X7rvBi78RfDeYerSBajARcGQCgtnqWh5AxK2TQzyApVcihqH4njFSZFgNTn6GNFG",
  "key33": "3zGBS1eJrupjCMoBGc571MKgTdv66VE2HshRD3XGTQ7bSzsKfRBywaRQc6hcQwAGph8XNck1ij1RzHgfNiE9GZjd"
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
