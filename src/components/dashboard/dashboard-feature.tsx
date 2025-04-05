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
    "fodw7zXYATzsPF7FaeQsrD8g2M3JS6S7zurRY5UWrSyUQZtWhvroXmE2QwiF9ypWthK72W4GWJ9mBxySBhsmabW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZspMZSF2exwnC2G3R8tTpJs7F2BchxeEFiCATgnjtnNVnTcdKQhHCqeAT7CxChxmSSgJbrWRj3Co6SxhbwRqgkf",
  "key1": "4iCcwnJ98xtyNtJ6R6CBEUJboDMQiSD896pHGhyhBxYXgvz182Pm69iuKrH5AVqDV6Xumuba224fRRgzCCLewTbC",
  "key2": "4mPZuJtM1bYTvbDkwKeXU2Ztdge4aHU8WY9QJntkiFg5pgmtEHrkxp6dECmjseA6io17XHJHK5ckZKp5FJpF9KrX",
  "key3": "24jFjTkCPKVRc777GDTYEx4oYiM65eu2nqcv3J84v2iLUGtCVf9SQZR8H1wJSWib7imLWq3F4bXLVtLEcmcwZmYE",
  "key4": "5zsmr5AjuVZzF4N8pTEWR2HBHN3ANwJoDL6MyJ6Rkx4kEJhV5Jujr5StUENa4V4o9k3b8RbCM1bASzaiVcNxvxQx",
  "key5": "39gaB6Jr4adg85ZK3xSHMaW7JEuN4Fs9oUXhVJZsq5hHakqMFTCQCM6eruAB3iJWVcYwj8oeRjtdxBB2AMhZkmBM",
  "key6": "5QEoW1tS3mMGAxvkpFNqSmPRP77V8qJL1qzR2MrL8c34Rs9qcGr5DNjqpFZfkBYKc4UZw6BZ1VZ3tSFaKp7LLEdY",
  "key7": "4Z5ckXX3Ezvf3mkaiRaoyTeG8RqjAQimRscPRexkNjnabSBWHPwobB8Uc7fxZcSjXzqE2YcabqRddgwyx9oAUAse",
  "key8": "61BnLJSS1AqNFDz4iEM7g3fpStBBv435fE5yokRvwjhNNCPHYKwSXGLAZsD8i4QA8DZYEZ2sjSzLmLJHAG57FUrn",
  "key9": "4S82arTCKmRZXFmBTg8v1tUpgfKTxgQSpbSWoiBVSmXHn5w6iix1XkkZAX6FE4KcqaEfHKBcpa5k1WCS8ycp2w1f",
  "key10": "uw8ctfg3v1yfcHtCmZXsshqEpZjbNgq4ioGNUnxdc6VeDEAKRTBbGFG6d8wXwHtzjgoexAA1rjg8MjeFmtoMJQq",
  "key11": "MneJEDKMCXRnFSD9Z71dhpgLhkauVVFUxFLdJriG4NVerwTF9ozRGYvzPceM1EqntZsUCLqCf6MewAiKGZiseoB",
  "key12": "4pZjzzuSdxaXgtvVcNQNPBaXKhCsddKb8yjbZaYbnDeg5MEYXvzNvh6mEJ55mDXSQ1u49Y9XQizgYUJYndfsZkr8",
  "key13": "3MFco4Cd68L1ZxsjezxeVab8zZ6GPKo1Jnm7B5QT23p2qfsECGEgKfX43RJiwxQAdfBkvWT3FNxr9axfoCnCQJt",
  "key14": "dvJpAXr3NEnv7Boqv6xnQhHJ4qjt5mHGB9aLm9Xv1FaSkC5KVKiDokpHY435dwHiRrgFADvtkDeefuXLf84gR3P",
  "key15": "SLakyJZobucWUrLeFjGEjnNmwdVy1D8c9veqAEKyD9pY4WexMwDcHaVT3b3F2UDn9uMYDrP9TUJggbnJc2HPp8W",
  "key16": "2azqKB2cj1HbNGPYrXnkt8anx7L46c1LSKMLd5zhhZa679J2hNMrVuKGhQPM3SidSjeJm5npyjnVxphyt1VQaJXd",
  "key17": "5zcPmf2NEogSUPqka8q2fyfTqTcM5uJ79xpDsPK2DJEDLesQpxmxBFmzvAmEg6bcNAxuQegMMGh6vWehtUp9Aqok",
  "key18": "52qfvrA5khGtieRTYP8oT3wHoqD6Tg5PfcTpH1fjVb16vw8D7FMA3YQiMvc98BmH6h4EpjxW1TnDSjpvFeJ9uLy9",
  "key19": "4yHT1WcK9URaazn5d9jzDBgAjumyEBktwbM5c9NgxW9A9bFW6KTp5ZehMNSg796j7u1ZtHQjVyoZCMcfLXP2GDrY",
  "key20": "aLUcgjX4AxihowJdsw3EecfVq4aWEaigxa3ZzAwN4z7pgiSpkBAopjAmRxXKeUYPD72eHDfWg86g5Mhw7zcY9i6",
  "key21": "3PWugChQpjbwUUt6WnFK7QQ1GNwh6kmCUa2MKnnz4Hhd5GF7F8HpV3AMytThbubnSkaPn9qj5kJDBhyTkEP5DKTq",
  "key22": "3PhQSho7KQvcKMmhnW44zrNmSx2KhCQRXBM1QnuwikV5crT8w7V72epedhKTZpWuYR6GEkJhG7bMbbMmo5sBTwfq",
  "key23": "Uq1Q16brUf79tmhoP8RhNN6Gb69dXqxY43VFQkGW8xrGB5yw5xSGDPtmBPz6mCfS4JNDZxz4Kfn4Bp3sy9EHkhG",
  "key24": "ZKi8PuGcb619pmZmUfnXEeXdLZauWEncEcA6gBbpfUY4iAkJgnRoubUijViVb2E52NMxac2ADXC9JeQHtLbZVzR",
  "key25": "2x9EUV3GrfUhL5jtE5FNPxBrauqPw5D1t6fHMR1Gyy9vbMDhKxqH2fvJwK49zsKtuxe4oMwvGbM4mF8MNRaYZjZi",
  "key26": "4eh3N5hjPwqP3RXshbJocQz1QnLExYMjhvjz2uuwFoQgLqpAkXikgHFxGXoZ9muohSVdX45qhD4f6JqirS13kaKM"
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
