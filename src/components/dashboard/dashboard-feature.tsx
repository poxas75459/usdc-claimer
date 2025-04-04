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
    "4UawNan3YfLFhsGcV6Ue1rrLk1MjaanaxniyG3JgAfWw6cirqrW6F49xaRDqVD6QASRqf73e1tiLzpN7ejkiMUUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SL5XbLEAn5yeu4VjdBhHcJbsMgqM7HhiLourvureGxYigkwBsYbFBXb9c8jr2KTuNwGNEJLkxiXsXpDsZVSX6JP",
  "key1": "U34JfMb47TNUNJbS5ZxPdiK3N5U3vajFmMvyqBrWDtt51kys1u8nmHjwMKoQnNtWtfezS5pV1ZNMqPdncUDHKa6",
  "key2": "214knQ8zQaeoyHF2GgZZBHU5fa4ak5GNDn8RySQDAWiKV7LZ91b4MJ1yHSR9ZEFC3UCNLhWCkesjuRhRpJcYqA48",
  "key3": "3fJcaWY4aMJCM5miiFpFZ4tDxetk9XSMQPKo4aJtqLpaUameYDhiLXH1SUo16RPBAc11zQk9XyLrSa8JQmGsijUZ",
  "key4": "2sCYRooSndR4ouNrryQ59yjCLvwMjzifsfPFmnMMF9B6VbutrmPR2QL7YY4L6sWzwZtajsfuBWuYDb6TTLUVQSn6",
  "key5": "6N9NshKrPW8brypMuQSsch1Gy8W68bv57i1eatW9BizpTKUFgq33Y1GH8ALydif2dTUghP72p3Cad99rgz9Yr4R",
  "key6": "KTV4rK5zxiGJmFm82bULCMfirBeCxdSFAHAmir2RY5bgjwweA2tdDFyULVSxBgovx5M5MwnW8ay8sAFtmaRvSn1",
  "key7": "38vmptBhqEutGyCD3EezKb71qeJUhREP5s5hxLbSSLzhWreVqU8isbHaZtHvmE5L6nYGxjfHVeziBpprMoXUjWrF",
  "key8": "4wx67WNqqf8KdcpTk7vUhrXT5R7NWVqTLBRS1vcgastCZUEazYqimhLQ958x13p2opL3eqCLbqX4BTqoXbm5sohP",
  "key9": "DxEVsyNBZEyVu9S4ZQAo1ocjQwbYHNWCTL8RLgcuxr4o2BjYoNRj6saoJV7aBDcEsmLzewSqX2vck2PAhasDB7t",
  "key10": "FXPGY1Y3BmEZaTDtFsPFRmMZpYCJWYi3PjoC6tTfnG9xAeQKumKAcACfHY3EFKbMHDmeVUVQFdMro8Ghx65GLKt",
  "key11": "4iKRBsgEERdH4ncaNFrx4UMLfCz6c3kAGspCQQSgzqa2oSm7sSNjnsq9MZnj5kyZQ6kgaFbVSBcsJGPzMyCxSbMd",
  "key12": "4jUkkm1chgWkLsSm9syennKn1dgCGFgT7uYAr4x4R4JcdZUitXfgiqy9qWHi9iLYFLgHzCvcGxQjQePVLU4NTJkd",
  "key13": "4jbfDgrm5TV1TBD3nSeauXEHvK4WP3HNxejQuooyJHPqTrwvWxxrBvxGsyXiR9efgbNuCGTKygTYxTszQWqc3cMs",
  "key14": "3MKTBRZmQ761QH3UgFRrZcJyMHyyo5J6YBuxB1M5hNsvHfJaKFVn646qZhFowQVi1eRLNycjTfrrozx25Gqm9V6G",
  "key15": "QXmY8629MEZpTnH2ochbA53uvifgmyD5D3hhaNTPVdn4d6N89X7UASnBr6TUTJtBYsZZvpfH9WYpYDth1fmTshd",
  "key16": "4jevdM5vgqtwP6ZKoGpfa221NsbWdw5H5AnbTfT2XoNav9BK72pPA5DcrVfJTKqZs8ZEhPS8Mh4gcpx8y9zG8o27",
  "key17": "vbHrG36TzAHXidmTW3cUubrLaJeopCZdvoSTfgvC87qiSEgsdhffEX6Xeg5RVy1Mnn44GjJG1fdRgbUHMGUWgFY",
  "key18": "X8HFCG6Qwo7bSJkwkE4En6qDawM1EZkWkkqMMPwCWV6NXY3XGxhDrcsVKuGTiFHowFvP4qaZ4yoFn8BYSv9tPBE",
  "key19": "5GipQDiLVRSJVkEtFQ4qPDwf6PiXbi5WAF7qy7FLBBkWowaxWCeXCERf5aGkqXE3jq6fj8FEjJaQcPQf7mLNRusc",
  "key20": "zFZhaCoX7e7DW2YwWQwPiJPRmJ8az3VcA2ixRmq1MRJ5MNX8o1zdqrbr6N4aEZnyrKNwUFxvEEEUPba3us86s9D",
  "key21": "maGqvXtUVBuKJhnNgc714chcqTLeCb7DW9L1V7dJ6sLpVTxLh3eUJS1hR56VDUS1YyNHmzuTPEXRdWjHpo4Xku7",
  "key22": "C51ZffjGd157neTDPwwrCyXSDFYZmgxnb94VXpiGMZ6KVETDu3MpLVbFLKzGmGWhJTJ4qGr7CmaeuGLah6vno5h",
  "key23": "3DidWV1tyxhvYKEJx12emMHG7EiknAmKq7mXQf9rtY6GojHiY9bKSomBUEDDx47mvksaz1XQCSqNEjqKgPMSnXxX",
  "key24": "3t1pejdWBkHQrFh97S4ZrjNogZxRLxiJo6XcFxnxMPuKv3zjwcN7S5DUvDmLPV3FsSYbzPHT9WT6Vo92vPdZrnXM",
  "key25": "23nNmnNLyMFe8ZGuDeoxVjs6kzNutMo1xV3PmcSE9eq7DiLYNvwxyLLceFwbv1Z6He9y6C62RD3ttyqucb2ruCeo",
  "key26": "cTkBBLgXvaj9uxbEFRAvoxZfucgr24PwLCywy3e1HKDWGwZJAjuzH5D1DKtbo75uRiYmhuN1rTgGpF3tPETzc9z",
  "key27": "4B9Fu6buzgPWeNaFPKSFLzdLXvZNFL7PHCWMkRM8WRa36HuwdnxR5QGkYfWEf4D8ESc7JvQE6F1t62eL8NDwvUyP",
  "key28": "315b1k4ecFDb5aRmsXKmNXZvtXZ69apeaqMExAXjxJjUJR7G47oJd5bvGrGxxCfnSVVoJ7Aoj4FV7T7JneMuLFeQ",
  "key29": "9GYJGWRDvR41tCq4KAe6EJdsPHSFNvV4Hj9XVP6p5uoP5c4SuKuv3kCNzzkKAg2zHREotXHqH6MpC7tveHLcp8k",
  "key30": "2sgDGfiDpMoobY9PgngzEq7yeVRU5CgJpRK9To8c87KKfTfM38RBLUfGnDyHdvc7Zz7EF3FFF1AqojkmLaUyREHU",
  "key31": "5z5Aj1cXzRUtAvSzbJp72uUz6caTz365E65MCLL3bciQ5hqtpNTAnpW14YQ9zDFXdxp9uZ6Z5GsDsUnSA33asKKt",
  "key32": "32haoDnxx5M9USVq81r6e89vzFzkKawAvcZNhgWE2yu44BtWaLse41BN9TYoLoFfU8ZgkYhKiKbmckKEGoRCf3L9",
  "key33": "5dPVinkk5doFbucF9mijW1GGgqAKFiWxz6DMAYjNWEK3AtvGpaLz6strK4CD5gQDwDaTBhVu6MzmtJV9Nknp41Ze",
  "key34": "5V2xeV5VYMgmnmvqj686HavsFKnGFgAgTx27qrzG6JtRAsqVHU3emtDjcBcd1wumfTXwkVGxP9fQ1Nt29gXFAosF",
  "key35": "5i7mCZr2svs3VSXjNnZEQoaCYwkjdb5aajwfG6cfCcYTsrCTaa5zJjNgRaTzmXLMb91GmZjGoSiuMtnqr3QEnQhq",
  "key36": "9TkXXZiQSkj9N9ze3EGxKKK4u1eKCs9XK9BMXq2y8vViiU5rXVmwtDDgJn9b1DJS4wfieugv3gQ4D86ncE8FbQH",
  "key37": "3XhLXgwTyZ5URD5H4xqrTK1Zm6SgWPWXgWdYHPwatfsB4Fe3VphTZ9qaXhDV1CwYequoveCGNuHehzenm2a1Ky5n"
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
