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
    "5HqfnckVpSDAGpFsUBY69Ukx1ypBw4JMYsa1NLoqKZkBuXU1oQ5j9PCPhWxmbe5yBeJfTDW2jRFMoUwKAM1Y2U2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KT9mUHERQyzKZPo4giWDFiekAevxRksXbugHat4wLgXkQ6m9UgX7RpanDbexbqBkTLFjiqeHAMFbnWkvjUmoHD",
  "key1": "2ML6NnnQgvufGLXSJgkYeTm1SGFGwDzpcub3VZyDqqYPBnQ4YRUvw9Uj7w1HWaXBMnBevDWxEbcDZdPTvLvjawS1",
  "key2": "2S8M8J37Aju2m2v2sPiFtc47QGPH4iFCHmR4SQiSqcTfTR4nsSxjV3Y6jM1xRgtwqwksXHTnSgGLWvDbZqY9YDPE",
  "key3": "49fWc5vWiBsaMA7nwb6CCQ67t2zYLqMw65LP2GjicJYt3SY9EPhWM91sXtTyBScXDaVfnHH7dweagQG9PyiYyXHb",
  "key4": "4ASU5fYBX937CfmtGkrVo2J97RaT8ytZw82EdZgKtKmiQc3uVNEMHDHi7Tds6M5SqWH8xrqW7n1LrrGuPWWw5rnu",
  "key5": "4bP12Hp8qP9xLLnohJwWLpFQU2pQ37cXUw8JrUuSEdyfWcBeAU826sX6EYUonhsHTXJRHbWGG3GSFBxgPkYRqeWB",
  "key6": "52VaTUiX1TjWhGn8tMYykNk66BKU6a63nBghr8KiZCY8KrhcuqiDiKP3vADmpCpSV1Cdk9mhhRBiobhfYcNm3CzH",
  "key7": "2Cb7WyE9Q72FowQwq93jnXyUPtFHyQJetgjM6KpLQ5d5Sa6bFMMYqxk757ngbYYGecXbcPAkmgY7bVV8ZWkqgXfJ",
  "key8": "2ddxmAvYH1XggW7LmkzXZHNU4xLiSBbxtkvnd74abo7iUc5G9UqhXXUW39bGhDHuwGHJqroNeCJfHCdhJ49cQQj3",
  "key9": "4gbsL1B98icePC4DepqM37uw4KZPe2Jrp5iWp1Mjxv6AX2ThoD89JGpBwFU2pJMgkcAf1qub6bA9eaHoK4HWBE8Z",
  "key10": "2x74jhnd2zTr49F3VGwDau4K2bZ3kw3zX8LLcDN5DbYUAhifJMKiU4ZL4yRuDEhRFekibPLmcmPfZNnzSGBe5xhf",
  "key11": "mBVSKQoJXiUqs9jfacyEDVKaWw8JLFWtsJxQG7x3CG1nsn5KwT5WaX4s6kB2QqYX1MFv1TpCEbNwYhTNPtpKVCf",
  "key12": "4LCDtd5uce1mN8P7SKMuTf6FRtaYrarhpvjENioSeV7XcnzcVWhL6uRaiJGjfyyinWPctJdPpQGAECaZGF4cpdjs",
  "key13": "5YDsKR2zdmFA1HMzfxYyH4XUhHLrHRwoHiJhd5UyBQSiDnhBbUEetkKpek4WcZPxGYV7yNVxQwPngX6Rx1m8SRW1",
  "key14": "36srJnfXymuaaQhQERT9nH1GaBM6Jrj6PHqUMBNgj3QU3ho6knFyKwsnxUkoV6gcHwTvedSxuPaU79UBdxDUq66V",
  "key15": "2Y9KJK131EsftdThKfcpRcAW8XaD1ZSDJ8tNVVNXrHQrntmq3iXazoWjhN4EiNK9eb5d3AYzsRtwiX2Pd5wsn1Xe",
  "key16": "4hPwwZZbHMpDrPQ3Gbie6vFoMQ9tZ7hiVqdkTVqip4mGLSxJoxZMeUgv7hqQkfVXrSfNXo676Ls8QVterfmboJ1d",
  "key17": "4aiyvNyxaFkcRiD1KXKetmeXzT8ZyuymF5P6ArCbm1UKuUNN7rnZ8zVXatDakVZzMc9RhXc25HFLt48CEpaTctMu",
  "key18": "2nFt4FkEP6zzHGHrbNrddco9ULfit14P8sosAYRShxJD3rq64itR1LtXtGmYxTdanmCMhD3UGkXjtpjKTu1EYReR",
  "key19": "5oLzACLRbwg1yzbFCTXJ6aV1Y27pz2C39BzyPBTDu78eARBdgVKgRnGast64UrLNReRWfmMFtfhbA1aBwoN4DoiR",
  "key20": "5UhKHiAUkRzmUc4zwSUsPWfgGMFX3FEuj9b1nxvG643DhhzhJHpDCk97omxgAWiMZPdr2jQ8uGAJ5ZerYa9cqdWy",
  "key21": "3DNkAagCtgtu5PvbQdmCXKMbNGFCnUQNPQUfsAHG5CaDxkX9kcWZR1mqS78PLyQYTUAw5D4CorM3QbcpSA7uEXBV",
  "key22": "36bBPY9r9h1AdDLfyCfUJzT5trmyqv1vhBJLjGGR2izWCLmr2FR31uwQqzVDwASyE95H4eae2tugpwziETnvjtAP",
  "key23": "2UU55vxsxwXx6S1XLG2arQhcfVQDZboKVZEAQEBUupjvSuH2eoen3PC9aaLkQhAd1cwf79psM82dBo2C7bncfnPu",
  "key24": "2n57Pg8kbDPfz232TWd9XeBwK44DsBxzbcvqNuNJ4BLJYsPctuy3Zzn69NxPiBtzgz2CNxu92jvsNYgn1KkskaHQ",
  "key25": "GJ86tB5VCDqBPpNzCv4MCdksSsVi7CJq9SppPkqPLkqJfrPYmdss6w6NDEeqSTC7ncMkGtGsVGVTD6M1rWwbEwy",
  "key26": "esCD1ZaGCWXwxBGWL64m9zUjfGe1AQXD77VVYXV98V8Zzve981ptEvvgMaB21Zy82txdaxfxxLEoxvo7RKEB5kJ",
  "key27": "5c7wXB1NeBuLmyyLTRJw7CNiotDtveTfnQfJApkDYfhRMSxvkw4rkiZUreNJyVhSefWE9VkkXSrRYW4UiPZq1S24",
  "key28": "5rToxqjCTZQPLWzYdqKSsTg7mMwhm38H4bkM89rTHLhxxLQcX6Q1Qj29fxxRFQzikNqZ29n3zkXHm4FoSvsuGxxR",
  "key29": "HjWW467d5StMxvmFb1cQCp9YcvgT61oNaQvTDyGE8nSeqZy6k8994fyawcp9tTSvh8DPacXS7QiDk7pptrxesR2",
  "key30": "3iNHcKhV1cLmnCH5kG9AKPZgunCxsbnzbZ5woptw8WExieB6NweUAw8Y7F1k33AkNrhKJpZ3gxwZanYeSoG6kURt",
  "key31": "44NpSVvJVV3geSJSbYbXBGgJSfo5skbMqA2FoF4Hc5bGAFpmQNfQHWKsM6k8cEr3s3FBvEdAqhaUnj1mvmixQ7HP",
  "key32": "5ChTYyWKdCs6JVNzYMqueQWwU7ZwPoBQwAnUT8jbDNJXQyzUURM2SFyhu5RtmPTJagg9bW6DrP7KkoZBNQbrZY1F",
  "key33": "5qF1a8uatmE5itWQ7Zxsxxbr82AE1n9S6F9BRmguEy3iHcs4L7LPUS2oPEqT3qzaT3yurfUQ6LrfAR1WkAh1HwPc",
  "key34": "ibHwXMF9pmDvCFdFSYERhH9HLkUZZw2L85Q7crAFjxssEV2TTxnrvfH9V27bNt6wppjJQSE5buCmepf2Ne9ZXJd",
  "key35": "3veZRHgmQfjjLjWoKxH7gjkFsBCk9d6Mn1cv3Cz6rwo5WzPuGYGky7KUw1MgnA4N5x3Z6gsZuzyUNZGdApMVRJWK",
  "key36": "3FB6BQ7NDAUzVHKevW9iZ54hzo2V7AaYWT6fxsvKPUrkLGGimujyqGqEvfa1aJczJA1kon6ti2Prg9xrg1QrKBeT",
  "key37": "cmXZ9TrCz97gYkyx5MNdkFnHLTmcQKMDhWAMVyZVjQfnaUcJmfDx2jeKpH4fP2mmEKeskrej3TnUu82dxTDPY73",
  "key38": "YaEr4eBH36re4XiriF893yN5BxTDEVchBNAU8wvvkMR4w2UZzpR6e9KgLHNSwWXMHAf6MTg9qNTLiiE5qWC2ecv",
  "key39": "4WCndqLvxkZLNze7arvX9qdiMQVTCb3DBCL2nDBvbUa6ZfcFPRbXXcugUDfHn2dS9YUTghaggww2cXsvYcZpiVCE",
  "key40": "5SU9F28fvp5NTxAqDPpKfoYy7BrAQCxTMn4dkiYCnTpqzAMEmgoNacKstLEbCRkWTSapde27CFJqGRuxQLTsv7uy",
  "key41": "3qUS11LPZjyuRq6xiwAf5njerpYvAYxDD4upLFXMNycFzGQw1EvRXseik83Hq1fEmVFsb6r1FiZeTbpMWyD3kzty",
  "key42": "4UuJev8xv9hBYsYkwpVQF9UnCUU8AZEeTp7bUrp9yGst612qaEeNms1JoysJ28cSbuJ6UhYNLsD9moQMTkdMLoWK",
  "key43": "3BpL6inP2261F5hcvi4saLKJ5hv6eJC1HwYNwLBGU6DisWFUvHQ3RcbuW7V8Y9UvK5He8G6aLbMVo6L7Hs1yCfKu"
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
