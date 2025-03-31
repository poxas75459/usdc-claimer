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
    "2Qd7FGC8EfypRHmxCij6p7g2aFgP3kY4CCb9Naxz6EaUWLrhoesCE9FACZkGWJ5bDqEjwqmQgknKv8m9SCWiYKSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1NnitYPRPhiUn2PUocu7fQxqqvER3N4TR69DGuJpr6Ay4rGZd4toFWJJzHTNsZqejXa7j3gVJQZqQKKTqETtep8",
  "key1": "2NP6q7v5ntJekodemVThRqZTWyQgRzJkLw1xpUu38rpXeuPwcxCQmznG8xqVHJwGofq97h3uy3Q7Yb8XxjHpBugf",
  "key2": "kfeUV3rk595mxXcGMtoqaKs4w39qHpWpHR7ZPn3TVrwEEPrYwWHaYAygyKtHRSzwqznGmi65TYobyGwPvjRaovH",
  "key3": "4jXcFjGiovh4DT8FzZWpS8XEU5ZYfoE5rX1emJc8h8ViRoUkwYcuH51x99ryJ5AntC8iE1UVkQQLqJffCjhgxdqm",
  "key4": "65qRvC2s5FcYyVDxP7wgeRYTtqoaiBiVd7HBsTKY7gH2GXFcKZyrkWNUwcV8yTsdyXNPTBJdMg9AYuCpByqnKM8p",
  "key5": "3uC1J4Fp8Dk4q9xfV2PH46P4WUKoBF6X5PDAKWeanPKnNs3SEGQJ9Vop5qstgBYLMMDXZChzAPizuGmvvLk7FQcy",
  "key6": "2hnCPCXQpPH5yBaGGEwW7hnotm7H93LmYgNeLCWU37xjax5A6pQej1uLAmc4X6n31TmbauK1iWVuKz156QfcU8zq",
  "key7": "46AV5BtJqwvWJGi5drNNignf2y51Zq1Dfd3Ty55dRPtcFFfQygHWp8krBDdoRJ9b4Y2ESowEXRhAkgAyU4KLVmcf",
  "key8": "5KMxWBc5bAhCf2EQ6tAt87Cgjej1zZx3Z8CSVWSuYU25WidDcnxw7y6Jv6pe5Fgqs2KNK5u9KXZM1z2KmL6M5uur",
  "key9": "25yRpXKcWFt5M6rNY15V1roLeasUtr29nfSAdJk2FJ2U2jKRktSTLF6T4B7twZSAZpSvznuhfPw1rF5wdCSWhxCd",
  "key10": "5PYocMtb3AwCFnNvEqnZ3Wh5c9f8tENnzyok9PLrnZAe1Xfd9SC9UG4eQg7V2B8W2SAQNs3axEqXUSynMkwWW7xZ",
  "key11": "4EPK9zPCxE2xYH7DbrebFTDcDAPooBmLjSPL7FLsAVwFYPSBRGs2wQtXDRBwNF3FDNEaaNikQ4yr8Wtey7BrdHMS",
  "key12": "xBTnQVeGL6pG6LqeokWfaWVoFVJEVrCsU2rwvBFPTf41iV3Hn8JA2q3yDJNCxetqGtec4w9prZWYG98ij8iWDRq",
  "key13": "3dDST5v6Ws9sk4n8TULApKtkq86CRrMp5fbVQbh5cQj24WAwGMGNqjc2q7fKydGa9D9FeFjyVXbfSX4ST6brH3qp",
  "key14": "4GLSmTtNjShK6nB1zjLkpVcPgpSZS3rTgHcuC9fCRASq7Vogcm6zdr6AGXtuE21F1PeQm8jxrqmxumHRVqAQr6b9",
  "key15": "5JGmCM7pLMywBA2MS5DrGCh1BVbvHDbBkdNeftwKPPypPL9rdDazpo9zrSajZ7uvYFWwzjAqwwDbiHfpXXbeMUYv",
  "key16": "3QSPFybNcsvFdXgJC3f79HEXSMNyj34GwTZPdSXago3YEZzDGsN22w1adQMMTBbWijRXwXdWCnGMDAm9729PpNai",
  "key17": "62zz7w34S527FeSq5wVcE2z6hPQRMtgXbsnwchnQD1jNxGhxVaibfqGYSgFV2dX7j6KC95KmJ62gFL6p2c15nWLQ",
  "key18": "3QMH5TaKyS7yGB6z6MvnRifJP3a6YXMb1M4VXvFCR3H18k2w6b6FPojiCJGVCCXe4bdfDrZNLjkKX4ibUei3PBQH",
  "key19": "cguEcDxNHAYZT9FD5cLEQrB2eRXXkvrh9pmCNgqttY8W9Q5Nd8joCRSLEJsW7xbJAdayhWFo9EZNwBDgV9JktNc",
  "key20": "2zDuS6yLEQGJqCQvLh177vpHTM8DW1dF8KJUUVmvg2LFSZuorsRyroQTh56MKS6TxFcjiUbRaWF91F6DC8QUf1NQ",
  "key21": "xLTr1f5yGdz3s5B8ycnRpjzUgpJBRw17pAcf66cokrQUKTypMhBCa5XLY8s3xgVeiB5jWt9tdfuBbj3RoDniu5J",
  "key22": "PdDp2e2gKhgfwik2aJVjNPh6XtooqU9nv9GajLPm5YAUwbGhgiieHjV53ZWRVsAvLU5ttN2KXt2p9Mo4xYcez24",
  "key23": "2wK2vM8JSTm9AdPA35rcL1DpuT9QvucjPUGnVbLE8wxCvkpHWvuTkh43QkonnZBtmhPbNnJBQyAg6GMerNQyJFJM",
  "key24": "3nitxsH3jxw8ChwvYfQ8orTFHoWe6eYypu9u6ztBiHie54k6CzegAzUqMpVEUjMDEYZDmXGKJBjzZK8pyPmaWBQR",
  "key25": "2qcFksedWDJUoiarvXrmwz6FeujKbpR3gX5Z2DjPHhhB6WL3ZuyTCiVZvzYvTxcF1tybuC1xTMYsVWYav5aDj5FY",
  "key26": "4S3sS8ZGLpo6R6otkGf5ewCvQoo6mQqDttJ6GL4z3kPr1XqYhaekjVLffLAPvgg3bSzmg3rLbXEZ9FtDE1rK7P4y",
  "key27": "2v9dECy5v1PzFVCLz1Lnwx739eP88zNdeJck4Xbax9YCyrUXDNmQ6wYZmgrnkwW3aeJ4R6two9eBNkBWJAepqRaW",
  "key28": "2tGJAtEJ9XiPkxo9td7eaMDAWkddNnDNtajSPGFgqtyPVYT9y3fGuoJanoQnQFNmJTLPGATwfxWQwvvPDd76UQde",
  "key29": "4m3S17iwHsianmPmggQXZGhevbcxSqRqpmKqxg396kyViWsqST3Z35ZkQxnh3hvaRGWqidRAZQhB3bY9wFq7JwHy",
  "key30": "mXjdoXq7vpMGAqKGwTii2jPKHZNUFtqzthdseZKv237dt3cqpHrRVBkM8DaBHtiutrWPEQyvXecLjGcUkreWvyq",
  "key31": "K72Ke6hj4iSzFHeTFQpfK3UiWgGMZ61TRHBknt5vSNihxNDzVFTJAHpEpdoefUQxyHTMziC7sPrLi4KGLE5cy9M",
  "key32": "4wCitBUoESVs6EYTzrDofTemA9SiivgmfZrmDDg65Zghw8kZ5kAkFfq7S84xRPBmJfatLWQcKShWpnXVCWsU2rHY",
  "key33": "5pdwE8Frq7rsGHVZoNtZAMeS4XhbyebfyNLmaWWz3WYHBZ63ARmmGAv7j6BaHsUR5mZNEB9RNaRaSMUzf1sV38J4",
  "key34": "2r1ZSdkhfxwmKmt37ycEW3Vv67QxubmdQisNuFNAJhEoe8XvCeEmqPhJCTTHRPSbotJcTrK4PLo1JVmrwd9dwYua",
  "key35": "3f9x2iidSQESjaQeRK9NBGD6UzPVqAcn1ybp2qbFjQDf3yZ718vSiBtW8TLd7MsK4J1rNN7E626sM6n6McUmrvrD",
  "key36": "oZ1DpVHHDiWwBY2T4Cq3fUcNYCVKLruKDoRwadFcBRo1cz56MxDmNTSH9KzGVfo4ioUBKAomCZxaQGKtYHd3YHE"
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
