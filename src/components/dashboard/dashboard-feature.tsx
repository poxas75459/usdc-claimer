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
    "3bZQ5isn22gDSmwwc5GHTtXRq3PZGpSoTkr7h4cJ3bYd1tNUHHCLatjKStSbxyMtPoV4qFcLBXkC8Zt8rwtZzpnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v1B7DWiTgBcsoaJESMfReyEHa7F5k6Mi892wuNXexoa15dCG8ggnjKJEqxAikh162SKLonM3dUg3FHqQaoYCmve",
  "key1": "5p9wA3ezm35RJ3nBt6nSHfi4T6yXbP1RhRNYm7cb32G3AYY4jzp5ywQvywnWJq1EMZ62wxL56SEC5hBigDwPnftx",
  "key2": "5A4YrEf3Z8awqGpKVmxuXELdnYvo1mW7Wc5nAEYdMG3adrxhh3byAaCzbux7Axys4f94LGnSQMFefr4acYTDTiv6",
  "key3": "3w5cKE13BjAtpcW3jUFMQrzBGGntEZAv5y4QW9xGgSpGygszLUeSLvYLpuBJ6MhBwTmhUCRByLeseWdwUw29rriE",
  "key4": "mwpv5u5YqhBpuBQGfacyx6d37Y3DMVF1KHkHQmQ6wRZx44mQoJQUb3Er6Md9q7cMYZWnou82pM59mDzDUUBMEWA",
  "key5": "uo9rki1MPFfsHYgpueLj2fSk3kuYCc3LjaWecxbBFuPWQBht7hDnNGDo6BaCspAKLCjDWCF1JtXpUYWJNw3KTXh",
  "key6": "4fbTcNFgYNErwozG9maVuowPuPRspB4wJg42mFpThW9shQw2PCcbSydBsfRqTura5AY5xg977MqoKe4P2hfiLHDy",
  "key7": "5DApHL1hCrSKW4RN7vWGNakkMA69xMUkRERCU11kmN18dr6vTEd8j2WZhM92qRw2yMPho4DYsKLaqmm25C1tTFzy",
  "key8": "3QTWmD1Wr86fJwS2Km8fg5VZ9XAxuHfpaAevYDWvQJWb7hLJnnHxv1ztZwmnWBuXULLaFFVih94n8mKXXbD8yUrQ",
  "key9": "63yJeGbJjxofBJsH6ufnpjkjZ6ULkqGFCETRt6m8HSjwvPpAJ5HCz3sad8HrjAEw7LTX7GhwWNp4JCCc4EbkGuHo",
  "key10": "TNrjmtjtvhZVjBrijSoSHew4eu6kkF2ZeQNC3vhnZ2oXkh1ddqn15SG69mfg68egKrAJaQyAzmaJRLMaF2ZPSC2",
  "key11": "5KqBtHVgiSDTxPDqrPNQiG1rXUT9jECgT6CjmK33SdM9iWjTGZcPUTN6mV9pcEa46q9B7Sf1AoasVyubWfqY2ZGA",
  "key12": "5UTRKZCqc3wwGTppG1ScgHUhy66YZwcYyTe6QzEG8scDTUrDNTcpydcAmcaofc74H5gpgAQW9UkJCqKXNcpof6Vj",
  "key13": "2PvYqVWorFq9HD2tPHBrLREc5zTMDtocbdGe9agvLEyPmKeEn592EXP9gJscCe48sKhcLexQT1twLKnkQtC877fH",
  "key14": "3dgmKHd7wbGhhbHFra1bCWP6qxz6YBrDaMdx86s3LBUpMNcbG1T33UtF6nXbFy6UwsnvNRdWrkHYW3KjtreHuiY3",
  "key15": "3sUee9eUyrEMvt6Yt5vLnEAagYiV7ZY4XjZBJyS24JsAP9Mnutcok8n8LFc1LAVMmRDHvgmVU12ynsVuEXN1rpYe",
  "key16": "3uL6YWdyfaFXXtYCkyUDMAuiSoJGsBye6Sx4z9XtDFixpjqjEzVCu51VSrP134dUMxiSyjwY8MKz2NEUxQJrYTaD",
  "key17": "5azrST4vDJ7da5wnjWgNaen6VDALc76RSF96NQYQpgjUbPsTNhep2GudmLxR39JFDiD1EqpX6jnPcniwU7Zqd9LM",
  "key18": "5gX4aBomVmqk4iQxWyjQeizoGsmbBvb3MiC53C1t9a7rEnZkS1A5S7ZDrkyNNSYYMrnUm2i5661xp2KZ22ErwwQV",
  "key19": "wPgUbiBuvvrLBmY2CGwmQjQgb2QibuSS3mwbSQRbWWTQoEYLvCpi9eotPYezsnUEbYJCocfpBggRzLc3Luxhf4Q",
  "key20": "MQvnivfaSpfem77TSWPFW4utw33W3GwnfgFbQpcRLanG7AGa4eguRUUmt1mr9uYHSRK15YekwUTuTCknF1zgH37",
  "key21": "2naEVgDYZJhBNsPtsbgNrWK6eCimcKa9WaPNP3ZbBf1GC9fm2ayf8CY6bknrZMWuGHRQA31z8noGvX7Mbtfha6yw",
  "key22": "7a2YMRDG9PGBeYNSZLS6cE4UtCC49yZCeHPWpUMQvZLcp4L9dYddsCtwiQrRCRfDnr8gy6mBKm7KGDVYYDozdUv",
  "key23": "ezjpihEFM5tHRkCjEzz311mpgtRJWofnHetw59phxyrTrYEFbppTnu2WP91Dafsx1Pm1MEtvbKhGSFbEP4j9KcX",
  "key24": "4Zr6XfnnHTJDez5b2XFfBdBh5RsAnYeYvJKG94SXes3iMEDj14WtLb5wZPi2JxXrCuGt5UirBVZnE4QxEqQZgmfw",
  "key25": "2ZgFTDVR9KctSj5YBej96WhDEBGfupjGLhQXq7fu61h5NLvfcZdPyEd89wpw1feCrMv5mxebVVsUQEuFrvZd3P2y",
  "key26": "2wZP5sNC1HNF3HZW89n5NQVZ6rB7crEiHcgTQzFUwbk4XJVyNQjVA5deEJJEqqsyM1xKsEgQubV3r3S7R1cb5q6D",
  "key27": "4VeyyTfYRQF68tLANfn5ucDHsnFqyd2hapyr2F6LUfLRUKNQZsHTHkNQjjvGTDVxNqiRYphH6FPNYm1vXdRazUDZ",
  "key28": "5CoAK1pGhD95C4Zx24mFSdLh1nDAcxA2BgNhYqqRnMmueeXaLs8cHWdrS3BkCn4u9EERVrL7r8bNonygQe7vZ3MK",
  "key29": "3X9xQa124M5MVV73WsaTGyDG84SSNufzWQopwN12NTTnZADnLm7eGTGtxUrEkhoAmP8pomLxb6xsMPHYmvABczCw",
  "key30": "5F29xmwi8qStCTt5An2iCHZ4oXKk7ghdNfMgxgrtxMtYjt6MryPHAoTPkDQmfhpera9Vuih7gvnh4m2Esh2PBVrj",
  "key31": "636Ge3MnnKThZ9Wf4R7tTCc9TCnPGzLbyLct2AUTHiEqj5zGTzFKLhZYH5w9QT9PuXKeJ2hiQEZGuNDho5azeHni",
  "key32": "27SknYttRLSx6RDstT4ZNCpRVubhqmuPHS1T5ZW1z2naKSKo7PAec5cs5DuzeKGBFjR5ndvSTKoHz3Z4ERJfaZUK",
  "key33": "2zLCNH1mw4a6PhP41it32wt6QUFfMAQ7HQzd3nx2KqqHUd11kvm6HG4XvbUoay8HZBEMkSgXmnbQYj3TgJhpJvgQ",
  "key34": "64zan8GMKM2xSLqiJheZxRSyfn3H85aedU6g5EXj7gKEJQZEapvhWKF3L4Dwny49M7WEF68XreqSBZuWxJKHWENR",
  "key35": "3zKM3SF3Zmz1By7i4f9sxXeizcMp2jAt83Qfw8Rq4zSfYwqr98JWuK9jSgi88c7VJYNgcAqPSnS863Psz2nfqZ65",
  "key36": "3GCy9UwN19w3fSsETPyhPZzdHmbodVwmFj9E71QRYGFCzH2JZDX2zzP9EmvG2onWr7cYQDmKA9aPQBWnoy69n9A",
  "key37": "4wJtXyJ5CAR4mW6J3uNFjsAkCjUs4j4JmQM6dyktwSUgvkHnM1nWpfWexnoM2twt29Z5H7tnK6BLbvW3C8xLT6MY",
  "key38": "4MsVanTKi6XQUchV47vpYp4jgpChorRmbo3EWNeorvDj1rZXhwU4TYswS6jzkR5ZaVFGn2ntotuuuuJBgTv3vV3R"
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
