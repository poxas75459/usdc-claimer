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
    "3nLkG2mz4kCSeaYqb2fJ1GcVapNQvbY5oQgKuf4oHrAFvjFFZ7KLYJv16oYGswYMoSUqtRVKMWuDp6zP9xgHemjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sfnf8gx6zdvrgrZuwgiLxqLcvTEZX3qhav4obgUyc7YJU9eobkzfFhuQ3Fh5Jo15Z1bBWnU94ZZkWJXENnqBv9c",
  "key1": "4zJjr2VR6MtfNSD15BLaRe7nq34pAeJk1w7obQvjju3paAF4ypgAZiW8ZGCmCtYjPVWBtKQp5B7hrySSqM4V2zJA",
  "key2": "39xgobWSfbgp8FEoLuHLnXKaGA8GCTM364eGXTqb2ydMmb23gBpNt8aNKbNsyDx5ijxYYLbgiaFwVmimtqnY5TMb",
  "key3": "3DfG6fyeG85ysjJhxfwAtLne2JVyoZkHtxwcmZSvJPw59wygZJdXgKhpd2L2HrJJ74L6Xz9thivAnDYRcN5SeUXy",
  "key4": "4a2HRHKsVZvhQheBq8zU5BgjdCDEV7b5RpDgjJB355S3Ge5yhYekSRzxfgxAJkADsR2GdJSRx22tpfpo1nXcoA1F",
  "key5": "2AruDzmwsuq1N57nRQq4Qx2Wj7qmQRzEhqdrG4eDmaPem9g9C3w9BGDngQgB4fM1HK6LqMkQFi1QcjW5zPJvQcVU",
  "key6": "5c24KcioEuXzmz42JRvEy2YQjMirrtAXFnVqVEK2f5aQ14Rtxqv7mKDGA98PwuEBP3NbPQSyvAhpyFv6MWb6fKLH",
  "key7": "4VRnajwCxQoeFiLxdz9NGpgAX92oL5jRx4pMFKSksTyVWMrKwxDgLYzovbHrs2q88YTFVCQ1hNyqYzfV3ozt5xKM",
  "key8": "2f9iWEXWMUNSc1zD1ESRERjf87iNWF29WTiNC69yG1MGTNvmmCh4fBPqTDMH7mzWvsLgyMmMCWtWbKEPRMgKRQtY",
  "key9": "3zABAPaSSuzCXcns2kapsLJ32WgXUdw9LMTB1un4pBX6FfJ7sjfVyeWrJ1sG7wWL6cXRe99hXahJ8YQFmqY1s1Ms",
  "key10": "31dCmJDEBbSPC7yvRaBBBLf11oeoZuz3oTdGKa3LSGyEp3zquCotBv6kGHAz4eTrK2EhGZavUbhKiiBLB9fQNf2o",
  "key11": "3fAi7SCDUsoTQbNnQMxJTvDoP58MdiY5rqpscfEmRZCVPdnLSExeMde6kMBkuVHBkd6eSqW7g76px56agXnyoZGD",
  "key12": "4A48UXhpQYxCgD7HxnLFtNVmdh4QRBCEyeczvtKgoQDUsHmCjLoxDKPa1jsqh6ScEJuMg53NRh7WU25tufndqHp7",
  "key13": "2EF5gubzs6Ag9Gucncn2mNJADtU47aM4UtvoEfspSxHF96T6ybuRAVLAHuipv2xx8XJWpKbrzcxBWpB97TG4bMr9",
  "key14": "484dKVms4qFiM9WBLxQZd67GtV583LNP3TFwJi1b1KBdJcjnt1PCr6Z5SCW9pL1QwfokBJHjPi1791PhofvziRDR",
  "key15": "4WPkiLJ1LZCLxzBGPfrZULLseGvRWod76b2ibJaVWjruuXHz9MwVUrUFr2uA8rWSKGPs4DCVExgUyRww4CheYxdG",
  "key16": "3tXoJeM5qgMLrgKjC6qnHCHqMoAk5JgGJPQpHaTDPqgVoDcVCYuzQnfXVaFyU1whpTySvV7z1SAPxcrfoWHf3e1c",
  "key17": "2xpynSqrrcmvzx619vKxGPJKGEGg9Q7ZV2w2SeFBByfySDC2tMgexmPhKUqkNLdaVJhYyGix7V1PqQbCJeFosU9N",
  "key18": "3TkiNVLCxjZh4iP99WjzxyrkAp7ewt34yA38JJqWeJfwGXh3dRxxexaWm2VzZkuehK8hgu7XjvdvDorXrt4ywJQS",
  "key19": "62yooMf2LmQucKE5HVw1GZ4V61ZtaE1CJFbEjP6by2hYje1odZ1KvqRjL4hcc5tUbWSdWdJ5A8zcZTNvDi5xVY8g",
  "key20": "4GMgB1m57uEe9LrNtiN5bzym8XrHeRL1i2kHxyWdAVprgxDqtbfzemzusTiMzxzZzirmUtt5fqSSo4HNnjyvAwyE",
  "key21": "LrKzK5yu2HRYgu5ZFmN4MVpwie8SgDDYajAjx7EcG86VXEg3L1tbbbQXyzexCXPKgcv68xuyVwvfmVxgtZEVuWc",
  "key22": "3WViTLpc7P65k7raxoEueidzuDJEfYsuFmKcW58fC84HBmLcFZAZFobMisSaKwaCxZes9KJKUu3uZn6bNra9Dnk6",
  "key23": "4aYWwmpeSTaGkEMUeP9MmjNiNPkvMtL84yWUymtFkXopihxsPZfbzeJPCzjeKWksucZh5Pe7h4P4T1aheVitVGES",
  "key24": "3LNtLScCj46aDu5vGLeDE6jjusznEfmpuBxBPYc4GZsGR4cnxcUdmi4qhWyAViiqnSGYgsvvSgAHNd5Q7ZNBUhQv",
  "key25": "51iuhTM96g39uM54o4gQoqMs8zwNDm1eSS8jWdhLXkLUGtd8sjf5bSkkDZBxRZ9AmqLWPV7iUWpX6QTwk6f1W7B1",
  "key26": "4TySEPrHh2bHiicZ4QAYR2Y8S4HBx4SH4NHiD3a1datkaUSaGeFvntUYkXgsEorDA212Xds9eroAvUHDe7hnFVcY",
  "key27": "3AcReBgrULPH7EyM8vgYC95N7tcp9TBX91x2xHi3GwffgKFKeXBprbxacAkTCGDcjxFeVkpMkHbLjedzWgPLMeyW",
  "key28": "615MaMGhWHHrZtdXoGpDfUp21572oU38igd3aJ4fxKbS4naT7PsUALWyRY7NUY81X45vqZLm2o4bFsRE33Y9XeGW",
  "key29": "2V4LLDT4foVN3vTbhAyNTb4u9KkMVFh2bi3tTXuMcgswU5e2J5o817mMhquqBjU8rhDp7oRhPQvKsb4Vqm35WXzJ",
  "key30": "444URJEqq4k2TTuGv5kfPF3FXqFDu2LFfDXrLLjqDFZSGA1nYP6HVp87Qiqf1pd26NgnPFMrY8tXkWjTA1QZBP1G",
  "key31": "2AwtJcP193ZpnxvvSqcokZabp8bMHQqhSi89CKeeyqDkAmpG5ZY2eXmzHxsphN1UjB7UK391igxUrnCLpdGU8MPF",
  "key32": "47WCngtC8W8jcYhS1mwmTbE7b5R78b1V5JxYXBnxSoAhhn8pUyDPWaHJbSsEEo25z6WsmLvTmY2PYhcF1BJT9pJU",
  "key33": "5n1UVQXmVxjBQSshLDSCDiNMpRLzJJgB3EsHhuDP2EAJQhBSbuijkGKo38Twvj31UnPmyehK2aQgGF7yqH2LTszK",
  "key34": "3BRDZp9L8MbNsYa5e9iHJrHRcBNuxPHQd1Z1qcPjqWmjffiWfJeVE4Nm7bQAzcdgNFsJ7Aw6DhdCcDFBX95fJpiW"
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
