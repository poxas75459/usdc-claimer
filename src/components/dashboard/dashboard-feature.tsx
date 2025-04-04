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
    "2pVQybGBXbCDMypFUedXBMrUGxHznP45R7bfMPwQ1xdJYHv5zeRM14cqfmP8nQyCmsyXeB1WcPnZiXaCMZ82SMtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "env7ZzobTdEfLdvk9fecymnEK1oMCJEvmexiDYKByqaF6hU7ET7YaaT9nZ28KMesZUo8WKp5q1KWhx4WNpME7Dn",
  "key1": "5XCmP13LDtiYEW4wcEHeWgN8RbGCFn3jW8DRYFGeCEK7ZWXD8uyXr6T7npybXYbprciApkzkBoU3L1rUMn2iGTJn",
  "key2": "32nJ8zjgWwU9hST7eTjFKvBe1FFTGa87MMvtz3xaX6YkThRowo9BvP6SbRs83DTEBJk6Fvuzkw62uVRLnnsF3Bfp",
  "key3": "62XodmJaJFwDosztmz4D4NQhwkyDeJSXsABgTJbJWuxS4g8XYyNpMzUEJJUmT2vFeAWEMD6F3tuziV3TeeyVZsFc",
  "key4": "64UxtTiMmogFVkEgYk7GMS1LWQjrWbBz6ev1ZqEsePQCyvhnHmTvoScnKWpBXb7QM4qEkZXYZCUiviw8w3q8uhiY",
  "key5": "4crKHLNovQhUEA9gS61XCBAMtiYwwD81S4WLhuKR6ntWPP6vAsKn1Qgrk4eimvP8FibWubNdq39RhJ8w5Y3fwiah",
  "key6": "7aZmspFnVPsH85DgpDGLpoTrqCYSZexaAt8WZkMdPhP1rkESWHjZD4ry1EuQ93p9MRB1LMmRponpLREBN5yxcz5",
  "key7": "3FdRvZcc2VanCwNcUH2c1m2jvJKPR36QtsaU531szyvvfgNsi4visbRirAsQNfh3fuTTXWPinS4ao7UJ2J7Y1E1d",
  "key8": "3Fw66hHPNE2rhKXpTs6yc3UwBkGdMncLP3gF3nTGZaDjiEgdUPmzZatUKytkvxk76sZCzmtgSR6bBPaMTFnb2q2U",
  "key9": "3h2xZKc6kajeCwiRT3E6eBAbjCStUSE2F8EZpKXqN9Ng1DTk1zfVCPwFfTFtV78gyRqjtgJqYeZJGybJNPkmbZ8",
  "key10": "YRm6MErcJ1kWmSep7yTg1t7SQDafdiSURKTLuw3rAziRKGqGu7GtX6t4SkobeauLTZCN5LfyK3HCqXuiBy1kjLH",
  "key11": "zz2Wvw2snSZdFDyseycwbSZxRHipMKnogsu5FMPrswK1hWa6KSyn3eyFE4tg7kpiFvXerLdBtyxh8YbLZ78KSCq",
  "key12": "pRKEkckpEmJs8m3cBxXa3abDcaLjWvBWEpp93aucjdG7eJQBQgpD3J3c6Hqm8NsWJX3MD1uUoLn85ESLpEa6XTU",
  "key13": "32pVgdCH94pKee6PZH3ojf63rKNFfq6cZWq2k61ywuBR9QdxEMkssLWRHyAVjAERSsAmR8m8jQNU2m5vc6xvi6p1",
  "key14": "3kb9g5uKWqzgSZCrByEpBqKEbff6Fm8JMcXKTVXiSxH3kjD7yuMSwYboGB51S3Ktm2nNXKWDBjqWG1hmtuUCg6Mv",
  "key15": "3WYaorXBmDescWamixBKHHqnWkCnWYfZxzXhiTFqh8KsJ8vKTFUaeD3mpuHF2QFY6tsajoV1ta9Co8QFtLGMq1m9",
  "key16": "2ECCurqWJ8wqoofyJETvVyX5cwHKhR1nVWrDKvjQeYwvLqNzg4HrHCGpRUF9NsfNbpKiWkNquSTH2nK41U6ZWwRG",
  "key17": "2HDhAgqeeAWFtnUGXVnSXNfuXwqwQgd8vLhBkeL9DNtHj52fFdxPDEeoUQxEL5PR5y34PqdJcgQ2dSagpDQcyZ6c",
  "key18": "27QEXWRBFskbkdwMr57pY6e4vNRzo5HMwmrh28ytyh31S7Qb4j5ZpVrhdNTy46WhwQcYcjBqASfD8j9rGyTRDVUR",
  "key19": "2CYwwZWPVMerRzNJARChABfmVg1rxB6wPkdLaCfqqF7U7urshRV6TXWP2CQZdmA5Az3kkBpg1fVgrnTYvA2uZ1L",
  "key20": "42RhnZ1LchbtP29XKFKpFW3SXDBEH9ba3eLGvY63kRWp1npvMATMM58kRZ4mqqtF862EqGLts3Pcj3FXJJML37aQ",
  "key21": "5xNgax1MybEZFHyCVBqrzGaC9KQzxkb5TF4bkEKxHn8Y9YyKhvAikGJcySxabSS4FjqNhrjKjTrUKMimp9fQr9vj",
  "key22": "2vVJ9anGdTbQtWEAutREvjVH6H3VV5E4ygUqge4C7kGMJWH3qV4fxbbLW5Fn2tCWk2t5r8xo5HCKtt5F8qffYavn",
  "key23": "3HvP5mE9uDMJnCPRVeBDP1C783c47ZV3ZqSTntqsFhf4kGPJ5kDV1GkQuKNQvaBuhfqkSy8VfoxWRzCrGHkE6RUL",
  "key24": "34Zq3aqeRP3uW39mmUDytJZEVs1ekeSCdTacLpExgExvuNn4TFCP9eE6fAjiGeaVKMVbw9DArGYYMXrv9oWqNuW5",
  "key25": "4Ve6bsATqxi3u9qBdW15LtQf7tcaPhoqo72Ls5atuMBYuYvxQqPQe37TJocBDudrPmjYyW2xhUwoFSxQko24atj",
  "key26": "4j5aGyDVaT7K6fNK629WDXASDJpWsVfPhKKrsRJuyWSx4BVuQHzDQSHTL7qshoz837YCDvq4SVFa1mzmpGzkUjzb",
  "key27": "4ZSfHaZsqmWLGxthozgPaVD9x6VA1HWrx2MZY55FKb2gUdvXX1ccxw862hL69oP3TeV3wmXXUQsevdfi9ZoZNpaD",
  "key28": "7LG3ddK4yfJA5dNe5V1kC1jYVckv6ehcau9Rcr3ckKEaMjjr9hFqseGbW9uLSfUizSp9188hB1N7YqnN2wmqmtg",
  "key29": "5Qu6gGtZQj3U2Y2BmVWbTWV3gnkJq8r88w4po2Hrpaa2VvsTcJuwNS32ii1E4hhCdPwL6L8qaqtyWsBCpemr21hh",
  "key30": "2cdN1oJ9Qw3oN96z3Qaz64GRzw4nMH9dDAYxGm34WszvsKFKUNreYH1bU67H3EayCxWHNtrV2o8PKwmgJy7gxzxx",
  "key31": "4iZpkRfTFQAvotjsdD1ivAHjeKBxdNkiW4KpgZfcaGZsVpDk3DXJnZFhtYHgAt3VUzfvfwdr3dBwYvrQqmx7zm6m",
  "key32": "49iYSagFAaCgCKcpj2vVJhgWSnHA1YCqfeeBvqjEnFm5fYNreT8hCNxm4ZcRyEJAnQ1moaQhwnkT2AmJu6bS1WjV",
  "key33": "4CdTTgPz4UfwUGbbadiAn7WpjhNJcR7P84WZp5tLSA4C71tkDHywAFcVJRfNn7G8waLjF6SJ4yuyFEA17UhejnYY",
  "key34": "2yz3kBnkLSK9L8ApvRL9MNuG8vfqAKWv49QmVjF6KBQBg3J8xkW6vBbnwqYYanzFpc813JVPSBAE6yUNuxjKGqeG",
  "key35": "4WT9n7yEKiLdTbueePmUAsJb67AD4vwsfZUUJcywiJvvZtJxT4jagx2hLN67mpQrxHQUuGWuDeRnDNA2WUQsnAj6",
  "key36": "4JbPi3CsZPSYQpt9KByZ8GL3HXuYAQDzJBGtZgCAJ4jj4TDPL66vPxk8aBbB7ESqc7h3BW97aiGCinXy1EuS4z9Q",
  "key37": "2cLxNiST1oApPdbxiko6rsyFjkhWbTBGUWMFgYRzGeHre8AyaZrzkxyLYzmAf4mGPCemsYMCFneJxbNY1G9NvvTz",
  "key38": "2oZDmtJqs1E8iNh19fSviSSZsWDzrFRvuVoTE1BHPV6QWhtu5HxFhh2snahe6Q4gvxRH5FDjYEi6JvUAQeU3J1fu",
  "key39": "Pt9zadyKEpTV5o6GpJv8yE9MBWHqdeq9QFY7vgcUqGpM7Kw6EhiurRV2gsZ224i4YXaKzgnMEB3viYFbt6LkSmN",
  "key40": "64g5s6jDmko4L5s45HQEC88jnyRfYpsvbwdQ6hqmwKS4ySpiSCBdtBzqJmQpWmcYR7mDptMnwMcsxd6vZMaJPdNp",
  "key41": "25F1D3Ct2FmtVQjevBE4qkHTre2KRadbzuHHoizvrLvJq1sDzBcBFYMXsiDsFHNxKSHvRo5RRoX7wSTKw1EXfmm2",
  "key42": "66orYAAASin3V6LwYrEw48hVFke1SsC9rQy6RtiB1zJK9MPx4sY9MYu7a6zN1m1JPd7SShfjFVjxmWKMSRi9L1wM",
  "key43": "3HsUJXRcKtZioeRdwRdorASaQiLToLAMR4Vuz2bG1JvicRhVNGUehbLttNjDgUJQoFwBthTDYxhwHpkhouhB1BvU",
  "key44": "5s7RZxPawb8QNfrUwTcT8c6NGHFzivuGHLAS87bx7upQzqL7LUz6Fguve4XERFu71eQ4P8C2GNv7nJtrk6Neui9m",
  "key45": "5WyvGiFQXyaE9mx41SB9jXXVCqvwzLYQ9oqMDa45vckzsSHPsWRBVsGHVpt97upF6Lj7Yzbp4SAoYRSnbLHh6BW3",
  "key46": "3Fv82VfwzttE1QCGwQuN5i274gV5n3qMjWgpNFaRp57GgYdVpj9wShKGbdBR6LCX43qc4HsmhLxKveaJXJ8XxAq2",
  "key47": "3fT1qqPhUmqC9BHbvtbZm8DV9rWqhT3oXHLTbECqYGWzU8aiGN8F9F2TUpfe3jgVgQV5utcc59wXke9HEFJNWk1m"
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
