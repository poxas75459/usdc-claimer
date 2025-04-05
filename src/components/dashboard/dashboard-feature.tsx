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
    "4QgGXJMUEUHKMUDjB3ZbxVyFi99aMFniweUK6TZHv51zkQzqvGXfbdLjsYon96oEHSf3cWgyF554QoUjP3RdbHT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "442sVByXs4jLcysF6F53THRnRVePvYYvYXMB8SApfZ5eoeFe91GByV3ed5TQuQKaHoAKTSAb4iw5mg11KRnvoTbK",
  "key1": "4yPc33zFuACT734JUTiuLwddzPe2T4buKz5rsbWXjszLPAGAi1jZRC2G1468qoxsPgp9CELXASWKZFAoX7YctSc9",
  "key2": "4VgLmPnTA1JHfyeuGsukkmDjRVDwEAXCEarr1p5ie7owrgi8QjR6ziwU1Fe4ZCs6QDC8AHDmd1K8mJxF7Ech7aHj",
  "key3": "2uBm1Sa4Lo7bT4agwgdTPyXYJPQ1VTuYMMjA41C72BVQ4XWWgrxn7CPNSqkdWgn35wjZ7wUFka26KKYArKf1N3on",
  "key4": "5wqjARrLBG36AUz8sQzSs8uobspzLmqjpnR6nxTDFiNtYkkcQiRxnhCjCPZzuz5kvmAjEgLHuy2rVUZH2TCpuphq",
  "key5": "34pGEtSeDjdd9FmnvmrSM8SLKmApj4ScfctXcfWZMYCgNtxu5yqub8juC65ncajgu4xpJWCk85wJqaC8dogtC9Tp",
  "key6": "3qhnK9oj1ZWfLYzmZAQZEx6xmAgw24n2TRArPWHoruxpooWsu8L9mFn5qzGc1hgMy3Un2ggp8kyUEuSXHVhNNWr4",
  "key7": "5JHMAimoaoRmejhKxZSMvPYPUNRWCi8YJzSymNsK2wdBfu8RQ1FJMk5eg3t2dv7ncAvvScoepmg8PkRComMSSTzx",
  "key8": "4mqZrTQMWats7j6zdQEm4EGqmQTSp5a54mhmp8PmDqjN5xdJZELhwmBYqfMhWEVTSCtKup7MiPGmD1oGCT6HWCsc",
  "key9": "3dF57pZjf8vm167BXqAiavc5BWg9f2aqn6YStJ9c1FgdTfSpmfacSApwvkCw3U6Tp3FjiAPvunPU6vtxeBUktvp3",
  "key10": "2RegpXxFUBSMAQLPTSonaR7wzpUHXZ6n9aem7n4RVxiuoCNjHpQW3s7zx5Rj5TjTHaj2JLVcj86SinexnD2xEHAZ",
  "key11": "4A5ETBiLGkjT9t8YgjaGd17UpxuKoDCRtxVTUWEug74jZV67NT62NY1csJ7vxCpppgHyxcsA3XLJVSGah1DsV8ZK",
  "key12": "5xGBkJTBWJysprDmn8G95ZYEEUkGsHrLE6YMGBF85aMbnNd1axL4PTJQxSwRsDDKg7tp793aUaKqTMnfbR7HgS96",
  "key13": "45JRGFSL2DwPdm8NWyQfJak7sE8WMhJ7Lb56VAieY1ZE4cVTx3R5DXiZDQ8TvdhExppvidHNdTNFCujENRQL5DXj",
  "key14": "2wcxnds61cNfKjHyBCoXUE2brKyaJZN9iU1DFnMUJidVi86HNeV2Ucr6gxBiF7HdW3QP46NntkhgpntPfL9gtdpN",
  "key15": "3huAE3tauoGDapmjFtJaz9UkHetmiPrAy5X8m5yYTRvE4o93A9wYBvLyPsxXnyS4Z8ZJLc79re7Lret9fQmPRq8p",
  "key16": "2MwzyFeWdSDxz5q4w75bn88LHMPBs3wtBuNHD2EK229kn5zsGDcD57G8vXbuNUQhpMXSridosvggExFna9iywo5g",
  "key17": "2tA1BgDYohkDHEvRzNsLWEs1idQQze5rJQvTJDR2eoQxYTgGHNFbfZXo3xvnUfcZYUEnBREcjwbgygorq6TdZwN9",
  "key18": "52AoeMb7G6ZQNYKRjTYvfDqPVJt3rPg2sLdbEzPPTmCKbTbaJaNfhPFtTZ4YXurhG4pJRmdRYh2eMesUcg6s2cEo",
  "key19": "3URP5LasmHfNbKUPpYCeYQWHCzB91LwFinnmfMfMBcUse4nMXzoHZaRdYTXdBkzTsycYkMmGdN7jAoS97oG8TngG",
  "key20": "2RFjN8JVAxyNEYvGdkeXUtDDcBJoUbFUWSp5YbWVHvn3spJe4qNaSkWbhzcKmPxQJpMpoGwyfRZTtEJUATXUf1or",
  "key21": "3ozEWJp4HVqfmbkCHuhxDNydsGYmR5pTjJ2ypuvds6VucAGFr4Gti57qWPSJ3TKDHe43QfhRG8XKzSbfsx64LxSA",
  "key22": "HA8aFpTuDdyrZKmTNNUF4sFGbNZLHpaCWGFPgez6KCRbNs3WSzbz7Mm8vwCNs5EFcxXX4JpUyFcK66twgvEkeEc",
  "key23": "5diwbfYkqa5BQF2jzfdcATsXduiL4kzBMGt9bfBmGnURFcm2X7Xtq71Ez2eUc9zGpJWScQv5tzPLjsHLVevt2RJ4",
  "key24": "2Q2SzfouCxeKdBmsAhe6tD7AjoM5JNTWmYXfL8qVTsSsf8KqMA32PoZwusTSQkg14X8y3V9JRJ7oCWPLBeHoxYkC",
  "key25": "5gSbtmecBAEASMSdRzbCzSNBS2fotFbx6c3GvQ1aduCggDeoq1c28uo2zNf6Hm15FbhxBw6KxMVk82wxKYUnf5fj",
  "key26": "27kViAdXLSLZtyiGMspKk9cpUFDdTeMLFgDc7XaYrKFV3C4hDobVxCCmmoUFh6NVDnSSfKM3jNQ7bz6AH1faj1ZX",
  "key27": "4fyReQ3hMTWrPyTgPoKEXzBvqDw6fvQsyLzx3h4x7f8vBFS9hYDsxABUhg8RhFFmwnSdexhgCus6fNqZWLgT2ESX",
  "key28": "2HU82TiSsRVFFcnzREHH6DEN8vgkEeomEXaDHZvkWYCySw4gwLNRkbDk63yQvpw1X5zqShfbSZsiPqTKjjnAKSqu",
  "key29": "5DcWkYbpaZxYZ1pXHcqfBzr7jRsirnPTfuS1xwkG575aNUiFTRN773BD6LJ4zGvXBAsSqeokjCuQHt5LRrjgLev8",
  "key30": "2x1zYWtMxtiaUhzsBrT7imZQhqg4VVK96Qge9S35ruVoMUJsQBxzPha5xkjDbrGKN9x1cg24gCT2xGbFfk7Xe8Q4",
  "key31": "XCFVGLEbYi1MdAXjeZuWe6Md3ovfZi61FJhmbWcQcvkcbfR4hi8WudLysVrXFPZ72nFGwmXHEY9ztmqzPQvLUNq",
  "key32": "3T7uEY7BZdySMeqfbMBgZ96EUeLoTfcdJrtraP5xBPHHpZhpTS8wA59GBqiP25Ay7qyuW1Si2JswBu7h4vAh8AQz",
  "key33": "2jtLW9MRPNgvQsJJR3tPk18HHXBokEmKaFi94sjHFrPH5G7defasQxpzXmjofSi3noTLGBX2BvHUX49TrK9asHJG",
  "key34": "4WCfRo6gfSmNbXZJHJTupD4wxkrgP6T9qsX41vimX5cgnvFkk8f7QV7Ka1zRB9iQ5BthJchkbPfNJgKY7C97mmNK",
  "key35": "25rwKHdhPFCfXLdVXF7pRNCJQJwDMiVawrq4toJ9wCDxaSXfW5mWkD7nMQmeok3Xu7j86TH1mqaCZTxeji75jTCT",
  "key36": "4KotmoBU5LGpxouY9jYnsgTCw8PFaWGuy6rpT8yJAemid3nrrD4jH4J8zdGZyQZARhrmuoufgfp4QRfPtYB527jw",
  "key37": "28NNw2CaFG8Z5AUXyBpYLCveiy3NA1Fuwp1LnQ5MvcabDS6oxXfeJgXywexkBAqfhrkD6TUSW8tEZSQNXz2zrKbK",
  "key38": "3oTTkrR5tdSWxhKd33suCk7RvUuwtMCrZJhwZwYTHby6u7kSyemCzP39jbjdfEwEaEUYg97HWU8Fo3zTgLx4GYC2",
  "key39": "2DGtBNwydVfWLUFEJC8KmDmrXjJ2iPBJGYGvXZe9uicCuEPYsyn8VMdzeRTwKyncBr3xS4RAsMKLUE3We6XLPtBE",
  "key40": "56JGV6KgWYK4ftoBiqCEYwaPmDjYZ5xgWcYJkjkLsdBV3XLLpRKP5hzKv8iSFx3Msaebcw5eay81qfjhhjhCq4Gq"
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
