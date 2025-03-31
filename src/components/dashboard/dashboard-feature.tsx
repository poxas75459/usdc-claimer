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
    "4moZMPDYqxrCfUWxyCQKSN5HmbxPagvbTqGvMp9vfUkhTMfGn3cBhrhqzMHXpq5mNymJ9WsKotFArCCKhJCY3Ccx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FZLXeg7sop9d5cvwDac1VATGLr2n4GteYtZC5W7YvQYndVWKJNVLZq8b9FT3vKRXzH7s34uSorHGBV8TjLAE39V",
  "key1": "4tipWrQ2pHur6xLtXktSMzWDgBa7MwgxDAuvXGByL2wahafnC1oamx5addgAFDXxPwhGpRZhx2jugavqaMwhct88",
  "key2": "5MktUZb3tpr28K4aT5JMzH58tYFGNmHchsX4SdwUYxQEox5ewNHDP5PHehL3ksLf3L1g1GGme7FJ1pSeZxUyb5Es",
  "key3": "2qvRvAvmTZUoMG67gXedCrjjpCFW5vY3JdmwwEZb7m5NU2myUj6Mn9rv8X3cWoRoxeYXXVtXoi6Hby1966rvbwqN",
  "key4": "5JnG9r2T9cGYdeyQLFWT5D3ct8vi3HxYcTQ2axzbCd6tJdsps9hhW4R8sgWjWAZBCUH7gWF3hYriHBTejD3FEUAC",
  "key5": "2qGdvPHE3an2rKWzipkjnWNEomzKyPertG6bt1n5eoJjUX9ay1EFUa4LwqkfpBXCqBwbqhhwsUdBQL3mxfazGKSN",
  "key6": "2Cu17FNCBzFZQQyZTk9XKaZx4oPAzC53thgTMBzimBF1E9Af5kd5bQAtitNoqJzKKwAU3qyJnWC9ZCBodM2spP5n",
  "key7": "4WMVv2U5qJHvky3fExV1rCQZti9AQrzZR4zp9ky1RWCsLGdG6D9CmRXWbbY2bi3p8WLsFsSrEUxcp1uYGXKNgAqY",
  "key8": "4E66jvBNY97RbbWZZ8xdNL6jRXgWW4eTbL3Lmvm6wEEo9dp8Qq6ejP32r4sGSAfc4UrXdL3XXJmHXFD23N8C3vsV",
  "key9": "3hjtvyo6zqVEkJfoSWq2j7eJTih4QtVxsxVD6mTSARcYJPfQsoFU68vHrcVi1WHCdSUd55a2VeruRXdvUN3yWZJq",
  "key10": "fN48FWxaTSuwJUZ9vQJaKJHB94ey2AvBbSRZVKbi9gDB8SvEKWKtuBNwdSwWdqfX4SeSqKkRph5XubXtVYV1APP",
  "key11": "4SmTiox1nupTRsyc2b7ywZrf4so8btHEKYrZXRjS28EV5HXXkTjSk6QFUh5tz41reEfTo6PEwTKK5KUyAHTmsy8b",
  "key12": "61Chkyoi6xo8BP6ngaepUVh2FdKXBddrXLeanyeqykUDX9FT1mc23krQBNndG6JikiDB5DveYTfgLv7R5ThiTr6X",
  "key13": "rMspc4RUJVUpVjJyPg7q6aRiarF5ux5jtM3UTcW7EhFV7riUvYvmAxn4toH5HmMhC1knuMBKrR67LU64W8LtuXP",
  "key14": "2rGLtVsok8dL69G7MsnXdRMbRZHGMEUJ9rk3rv1Z4iaW7ueTZSDcRmmkf7JW2TxXFJ1TJqtq8oTzRTSA7Qgx6sFg",
  "key15": "3HqFMbbsVU6PxUDz6MJLB8Zzmp3H2YM2kQWCqAqfE5jGofqxjqK1tEUBuotaJq4ekX6U2wAVf6N33CzsKERjVoLS",
  "key16": "3jVVkccpVnbUgnU54Re2v77ghNzG2e2LysyVoDkDJ97Z5UxGrDKxYYoQ5vvW38EhZ6fhJJjA8PGgzn14QoePTALG",
  "key17": "2Z3h8gCM4Ut341owrMtZE49vWQTcVRHsdkmZLeaXE3DYCBFGA8bXV5e1uSMxCCnY5MwNrShY3Ae7bPfUp3ZSmkRc",
  "key18": "4TCMpxo1RK8qNC9UjHKhA5JXUQbrCLmSr3xuDH8wWanySB8ETz8ma6VVFpZrATZFtGNNPmvQkHcYzTHhhrYknj1v",
  "key19": "3JmsX4jsa6eHXMP3LoeMnwBcgGV7BtYGtn11S2PwdnYMRCqe9UosghoCy5vnEgqFQWLjPoMLKbCDNcqXwFdGuzm4",
  "key20": "3GgWcFbQfvpHWLveZF8jymA2LqGCu5fcpYJZLqo9qJ1Ajg7AhU7W3whqJdjaSzdkGqVUn16oAvcUTo855za3ferV",
  "key21": "4h8yJ247MddveANJjYawCTvZW2Mq2ATNR2NsY8HTit6HbrkfuCtHRuY8v1xjcaFNBPKvUu6cywwa4mSJm8VyY7rt",
  "key22": "3T9eYMmxUBN9QwbUqNa5QV2x9hri9fHndYJdTEiMntj4suPs1sZZ5Gbq4LE6S6QLsaHbnS4DoVR6viVZRD8C6D9i",
  "key23": "5zZEmvGTFS4DrHDbHrhgmdj5viQMCAPVtkcD4v8kvLidQV1RRJqzBoPigLEo4XRBwAodoPVFs89ZEprbFfF8JtBp",
  "key24": "2rPG1ZEHHk7SGpBWhVTqefhm8gwE9HbEUQxg9vuHeQzRmFXTZ7GP1o2frXiyrV488KxWkwzwKdmiFn9CE7bnTVg3",
  "key25": "675domfMpdeYH4ZA6pUpVVJrBoU86tGGLebGKqTjt1vo2okPUogKsTDDCF2thn4cGVJBfBANJd3hvXQmNpayJJ46",
  "key26": "UkTBf1VWZZVL1mZk87DCJp6h9CjZFwgNWD8ZT9UPrumT4f8aNnredDRaCiHWbqWuEGrAdZtzjm5dsedpstuwzof",
  "key27": "2v59wY3KeMTevM2h8hnh2fibjSqEcFa9Jx4yRsSFJ6guMuuGKnRssLgwN71cCeJQy74SPbRYWfoG85wPt599WHst",
  "key28": "4twfNEnAaVZgMpo4ELh8Nd5RpEG5rMJSek248zDDaVkN2u2cgcLSXYTr2GFtsDZMxUxajLZvGTnCi7Fy2GqfSBmr",
  "key29": "3VGntg9L7UXgQjXevMPjV9GYJioUHgZwQxsvi7qtBc7wYDXXzpZWQZJ2xn2tj3NAbLgSNuj8uSejidVBKVweMiSj",
  "key30": "3vFtD6NTwo13XrXCwrdGLjRCWxhiXjQUs6VETvE2ByKGdxUUJW9x5nVWbm4vwK4PFBEXXLJw914FPK4MF5n4WD4z",
  "key31": "4unanCvkMqcXTbdK2DzrXkj4GRLhtHDGBNCd3YZNDYj6tsS4ovr8K7gVuidCWQkKzfe5kq9WawFxVgGgiqkhAsCi",
  "key32": "2fAwaLA9pmoXvPm8yPaQTWwwGDUQ23tY7SZmp55rQ6z4Z2RPViiWH9Ss6CN2hYs4tqreouwYmTLqyXtYbpCMKoBi",
  "key33": "ghp37eKGvKhLW9S5S4aA4BkuJ3Z7XX8joKxwMKAKe4JWuVBHmaK6AP6NBo5Zydud6UEkuJjUC88vuRoVyxZwHBH",
  "key34": "zKMFCPMszrXWkg61VZQXz8Xed7MXt2RxgXhGJRyLix1SCEoXPLztuuAork41Z7351M5PbrAfQmTm45uB8pKgCyX",
  "key35": "35v2JeSksBG77FJArVphgFfsdUsAqsJuEFQUKqD379ky1CA8RU9cVj3gC1aL7cW1DZbu7AHLKj4WcDmvj1tGaCkr",
  "key36": "LFmWkgBZheM7SaCZtBk1zBuGdctwkU3V2w1qBnVviUcRHuuYg3ZooqSLRSJ3J3arGchZ7RvBSthQ8SZXWwxaQtR",
  "key37": "2zgXo8Mnvap4qXsuFEf9FLXrW4DwzaeB5KuPBV3YTZuWbyuYJRqY6M9Bn4uBoZ5yHEEdPQ15VFXeEYvhjEDa5H2j",
  "key38": "2iXB9g9w9tDA4oRygED7dbVyzDxwRnVt4NqZy2fSxg7iPQ4szdqRjwKWNVaqopvrFSC7fqqpEpG9mUSnATUr3kDw",
  "key39": "29WTBxvdzFKGzh8MRNfBwkywQTzEKkxsoZP7wmfVTHXaiSjpkX317h7N4XVvK9YB9ZUVrgxMNKhqhjt89NoYTfLv",
  "key40": "5p85SJX6XZA22hjA8ZJFeY5VjKessxint2dA9kBsmTJpqxdLRtDQFfoBmejDgmvepLrfmPovf84YhNvLrGGDnkZ1",
  "key41": "2owwgpSj5C1VF1RoxU7JgoDAitFirrPpthinE5VDyZc6Xzrf7wEX2A85jsEN5U37u7ZeAqrTkmBc4EELWMZTQM4M",
  "key42": "5Wd6g5t5tPR6Pqcq3ZqzqjPnrENsrQbLP5w1y3w4BMWPssvQpnrfTNTDkmFrKSgaz9duhCuc2BPoMrcj9tFXbuFd",
  "key43": "458cXkN8KzJSNz1aVBzSxp6QTksTWJK2CedAKWEfrh1x39ZuWMua3xmvmq5aCTZR9xboMu2SLrZY7c7Em2ojy6R6"
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
