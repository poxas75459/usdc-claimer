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
    "3LBJfXzS9YFx9n7iHdF3FLFHgLPi7Nj9nYUnoKZ2et8PZdBCqVRrzbmUvohi4fgDYtigt9Ssi8UuYZNDQXxxuATG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KDjAJ9ws9btvJEURkkbacxz4qk8YxpmwfCthDkxFKgj79z5HyxoCi193G2Rq1p7SfYxMvtEWrnznyjZobgsn43N",
  "key1": "4p3hXMWa8DVEse2j43fF2m3Cyui7xaDpz3KjMu55kZ6rq49v7gYaQr3udMwmUkm4WhrFheMyBbdKCLnajUvKnP5T",
  "key2": "5xR2zMfHSTieaXHsETbsyS8T6BAUuzok8kqmZctK23Q4ZKnXMfgKqmqJXGENFY9ngVax2wg7ZmtgtfxhPYvpvxFX",
  "key3": "2GVGnaCxp443xmWcpdNs26GJnRqAmpkdQ9eJAvyzQoUESCQwTKrJQbhq9ULVH1rEd6WHVSVeGBjG3HtXstrT63Xb",
  "key4": "3QsMfJjYcLeLRyMEjh8iYophoyHoaxNQ73vzJyJPaopKWPGbuRdYHG926BGV5uqSfceBDzGWPPo7mSrosFKVWgPs",
  "key5": "41rb2PTwZaBPAdQKpGuaNGUsHKLxTbyEeHnFhNYoxDqKsbgSH9dBG9zFWuST2aMCXQc9roXpf1KmuW6X98s1QHam",
  "key6": "5AS6gNkA47DSKjGvkTR4Qse6fS6UAH5LNSbiprLATdMBLPx2xD88ubBV8H2SDv9ohVp4sBrDt3gTu4z8AYh3WTKq",
  "key7": "VwvMoHzFm75jeceb3QcDnS1qcTEdvstMEWgLMbvWjYQD2MZBQ4fQDB1XpqhU1uVpVBZSDZTz9FsAm4XPcxNnZdp",
  "key8": "61R4o6GdgYSe3tc8tQAB437hmSbnoKZW7owacoELqWUXLBsdWNBLiGCwMmgPGfygEKqBDWSY5wR7fkxFk6sX7G2j",
  "key9": "4BzAp1SsD6SQjjmXYP6nvezzLHXvoWimayt4SbR37TZAxV68cgKt8kdzdnA9gKcfWM6hm2zmzmvo1s1C1FhN39BH",
  "key10": "2cfreJBjEPZFURxottm8mia3qpxuW31phEWrWqzPS4bUzrbsaqF3Rcqj3hChoJcQmb9bTak6mcNqwV74fvUELjG5",
  "key11": "3bcEmnDwH6rN9vhguS36MZ51sTbBgzAVEXfUtDLQDbEvHZZcQfZ9BQsdtMbESwRLExjttEXMX8tf346dDmPPDSyt",
  "key12": "2pZfTwMEPd3Mqr3McsZG7513wSvs7pVzhGTyNFodNeBm3ZhHnWQVrAA3q7qKUeJ11AgXPtqGr6HNP1G8rt9TNSr",
  "key13": "2JxaSYG1nMQJg4rj16R5UvvytNu6nQz9hEPTFfEGqmm4ZbmyByEWUW7LLBFBeLPeiDaSQB1TZTBYQVMhvN5yEr7H",
  "key14": "36AbyfCsd1H1YoQ3GPPseydbmY9YASp5bSN8CRoEe3hTvA3PJbHxSXmnovSdWTWsUaasMEh6MrV6Y5MTRBhirjBo",
  "key15": "7v4Ppw6GKfiG1BjjbrPj2xD9qSMmnZZFviSxvynPy5KWH5dexMJaX3skWA4xLZ6aBqVWtMspAa3RpxF2FV9iWtq",
  "key16": "5rRBJRwEAb3kGSD1qnVbMCQXxMAkPvwtdRYaEzZD98qqut2k3yb4vfySJnCyB8FvfSHT67goR8aYh9yBtVGmHX1s",
  "key17": "26wdHjVMniNJirfyE8WLoHL3tk4DCeJT1VMxznkJiyQ11ioo3HDPXGjopuu8HrFf47syh2tkMBKz4d8gpjMzd5Cp",
  "key18": "2Co7QQUi5EVwNk2CPGCoZe8zWe92jotcAytfNrTxZFLN9EzkuuSDe3xLL81trtNhnayr7MrPz8Rf3Y8yBmSrYKC9",
  "key19": "jcFKK2NeRpyfmcUDsppFeMnE5wteDmdJPdy2JpcPXTU3PjvcFqjKKHhhL6Xxq4B3W1aJjquHowLSKJvRCHjtRCF",
  "key20": "5mti9xtsdyrsGnwYfaNRQx3sBzcyogXU9M6XmRqHps7DQaLZsQN8423RbduqTykPqUivzHCyxLYzeqeYKCALMwn7",
  "key21": "2WWuNVedWxRZGyCyAkGMj5FtmMG6ZA9hmetcjaFgYKrVUuJdbqmNh4MtYktWDYJCnuTSoYWqgGgdpPuzvurVc5dV",
  "key22": "4tgonjPEpTtxoFZ2HG7e1VxyZMvXsFVVo9AHJfU5B9hsdioS7712pjv6gGciFuhrMhynqa2k5mW1t48fA3XmUSb7",
  "key23": "Z5zV9Po8vfPyP7BFcxDhhx5hLpjheafVw9kZxAspwhLxTYtUhKjKD6vtTWHe5p95Eo3kL8qGkpCtHhPKtzTArYo",
  "key24": "4SF7vVQDnEfrnMLH2n7Y7fYYecYPF4BQwKHWbUt6gZfP6sAZsNHBjzMrk4A5zfGGkgiHQCjiF5FNTBSCkU1hejZa",
  "key25": "Rd4N4T7JSFoBiWrWRScSZ4jQnG1o6pcwhgwcuBxtgbF8sWyFvsZvMLPJjdbhFSKZP3CajJwr4d9sLx3HRY3pS9N",
  "key26": "2GhMK97vNw2KmD7DUGUpRFccoyqZtU3Hx1kX7CVy8ZNy6FA4zckY1AeUudDiDtEVQUh3afiAaz9CF54Q2j5PsucH",
  "key27": "8XRf8ZL871hu8oA2DirWcvkqUZNxHK3vDsYm7c1EXQ6LGg1PQvnFmxSkXeyeaAkNFn9Hv7q3n9ipqXjEF6piPfF",
  "key28": "3HVnSRFG7EgRzwq6GhRig7sL2BEVWfee7TCpTtHn7r2qKMdVRWyxinFJEUHAH8EXkC35S8iEEDFPMjJwwcWPwa1Y",
  "key29": "2mfLTaMbYpkHZvWygNQCKGprXdk8NXK2FqaSdcuGieQHp26mS9Efsng5eSq9LnaDPAAWLTKVPsuYxqB6gRGtmoFe",
  "key30": "2b2De3NR2TdkinSA3kneokpHQ6xoH5kA6ys4dTwAyaGPPH6FsEHqi74wx5TAzFKqaMuqLQZgRgnZ3c5gzBvauaGu",
  "key31": "8X8xYeQGb5bFikoHh29hBUq48kHEn6fM19v7D22wfsgBrmD5EsntGgkr1ZkJ2gpkYDTqFpZ3DS2SygxjTKwfftC",
  "key32": "4DPE9JWdnZnHoNmeLapxDzD3vBudP1cGmXPFnvYrWC4ZscPoZvdoTuCiqFMb1tsxp4j1h1WtR7PHxiiXViiJGbFb",
  "key33": "27fRovwuCvSuoRzatkBaoAYDNi1mbivsRCHFsmFQSZo3LpyNryodEtWks9SUPXLbD9ogM2JXpHnT98s99tZQU4Q5",
  "key34": "5aPRt8pdPPFwEr9ptRvfgri1UsksTcp1y5o1CbSfXJe2Zb9zB8tHZDWuT2CbffPNEA8fHzwFywXh3yWf9sBbvkQa",
  "key35": "rLsZxMgM4DaeXTAvFY3SU7KU4TxqK9X8EUzNFbW3R6G1Xy8Y84L5YM6FmJixtf2Skk9TKgcL2kUV2rQ32GD4YKQ",
  "key36": "3dfaygmuU6cvLTNiXF4DdBH3QjRj8ccj473Wy3xwv9ouFBh3dnc8BjPdkAZrN2ESpfaZyTsZnhKa26PvKc53AAsM",
  "key37": "5rjC1FGZ1nd49yonpW4qb5tm8Lzb3oBuLABKxrF3M25CmAXAKqqVcDS46yuiyb1rLnYHqw3G6YTH7Ag6imCRzN8x",
  "key38": "3T5vKB6ht2t9hhi5uQvucb8QjJNRLxRxkCyXByB9GiMTcCE1QNNmBUL9gbhuc6bStfgjRauNgckwAcF6Kt9sHWWx",
  "key39": "5nXWypGWtS4YkKyAGqUZVcoGwuWLxbC8vndeGuH6NyVFbTo2JofXirnSSpQcYu5ZU67bEn7Y3YBPRD48zkaFdiik",
  "key40": "358Ty6tQBnPVaKYqHFX86jYpDXHdqQzuZVWpQxRQ6xBWHPF7a6BnAQshjowAGwHCmEQZBP5ArgdgdMp2nfZxkEBj",
  "key41": "4Bkx7kP8fwE5nh63VhAPQkQkw3QdepdEyptRHFvUvubNGwvGbiE8pSHAvr8PbdscPxZWhRXeL37Ri8pbQGgufuot",
  "key42": "29Qhp2YCpuHTUwzHvtoVcAwa5qqvRSRvickYsjC9eLb6qg6PFEhBa87197jxPBKCygpeSfRdrDYREzihsuFeVdAP",
  "key43": "51N9aPZvEFeFFRcF9TKksjkcD6AD8iXVtoFRwttzH3AxtmGVHgpcPYH8XSfdw78wUCypbsCotuS38RpXUtrBtDLC",
  "key44": "eNPqaVTdbX8tryZmcs3Wd3zgKEdRZoQP19pAUADtyyJ2CZntecN7X5waYxSvv7HufsF5HCnj3vdgnqBETMEJKr6",
  "key45": "3HCMzu3ZsAi8EuQzeVXycvBAj3LxNnBBnofMovRYmf5eFWs8Z5fgBZDDB9vXhcZSYeqsy8B6CuKo7BAskpNGrZaT",
  "key46": "3XjKEBXzcZ8WPagP2Vq6M9qJu41yyYLKPUcZ48ogxeeKkoU6eeM2Q4bjL9WJF3bdZPYfKE7EpPkgHpwWL4R1Lu13",
  "key47": "3bNZAXVbYDV2ETS8NnHdUqmibvm8qNwwq3dofhYMRMMKTNnjic5JLweyXWFJT2rgqQY7Yje3fnkjK7DnU9wRYZst",
  "key48": "4bZjgK1TpSJXJJn5Jj4skyXAp4rzvYYnNeATFLRj9TXz1LwMKjgXujVacvaM9yyeMTtqoNXGViAZ6riMV98c623c",
  "key49": "4j1kkCd9Lm1P6SRTax6HM51UCwPuneFciRyS9b9BwAAF7qGGDkV6UV1E1GmBW6JHTJoXEeRjRXLfsLyJquS9P38k"
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
