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
    "4E891jfGsMHjxpPbjruwkR7nqgA5uLYCm9SEZJHF4taPvH6r9C34gA8KYf5PMk54hbRytzjytxX6stTwAtESJEMr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GDH9n8HAd6kMazPfUdGusdf2rs87gCtsYD1ea5QzbDsmEVFpEJButtQKmZ4KhhLUxPCUoygx56Mty3sKTVwBtMq",
  "key1": "4NZu37utPvoswFznsAzoxzPzkJFDw9Jk4iMUVywhDvU89da2UcjnapzF2HKmukTTiFLGfJpUqWXTSWAq3oLgwAej",
  "key2": "4NKQYFhmkNPkE95qZEqh9Ry6T9EU7p4he6uoUB9128ybV9m8eeT4TA6GYxprrfnjG3M6HJxq337BLhxyRD3PS8J4",
  "key3": "x2YdKkXHcMG1DmB6pYtk7yGSzhSYKN1ZQBDs9vcyJgUMMcWRU4x5fewpf1gGfDgbkfVWh4R31qPvFxZwSshopzQ",
  "key4": "65UQFoWzTxV98FERdeVAAjruy9joQsGoED9fGhPUSxjAEFJY1Qe5gai5H3T9wGco7YPHg7VW25h4SVkcE5UwEYvs",
  "key5": "5wG2E7jnT6gawGaUTMUQixUjeWJ5nwVeLQc4qARxsPJJoTacnWsYzgbcCDh7cxKg2BAHNbjrVoJdDaJVvR99eeLX",
  "key6": "eZToJpQLNgzoZZkrLfBogiroTeutHWPSEGt59fDyhVCWRpfMwdcQeTxrB9nE9qW3Y9QX5LwKFxmFu1e3vTkiZex",
  "key7": "3daEAAvcLkWgs9mXyM6StAC5XHKd2RHzTx1xSijD3DTKx5YiX2HPMj6qj2H7q1TSSDYEuBtn3NDxG7BfRvxn2kaw",
  "key8": "56bHDE1b57W9JiGaxrSb4WNb6viJGHj6C2jTaWmizfhxfcFf2FGr7yqLrxDeZAHAtijokzpiSdGLN7cFMXSfYnKs",
  "key9": "64SLWnN58SHuE1gaNhSRGz1rW2vFEfn1eg6zjZ9Usat5kzoeHWPqpxVbsLPHdisVHTfeRetZRjGM4FTsZ2BcR6od",
  "key10": "2Xn7Rue9m2pD8MWGHsqhpxL6t5Ad3nnd7eYhV8PnqF9EDYZofPhuxXccgMmiVf7XF4QS3MHUtSb72nzEDKMEx629",
  "key11": "5o5biutydE147yGRmMXorjzDUuZT8mNQ2mXLEqoRXuAnNytkxyHrcg7qtbfReHkJrWvWBPnzSSq4FMoD3ytd7csJ",
  "key12": "35GWLn7KhH7vapxZi36bSmViS2CezfZNt85Z3fhmSBQyZ2xu2e7TpSRB26vf6AeAmoGFPAYRXx15L8dQ5owXxZwo",
  "key13": "23de6voLPrn1fPCzwS1zGuAMw2XyTeBTXsGrWNCuJ5ZTFgdNgC3yT9fTZw2z9LFSwMUuJQmFT83t6N47KfQiVDBb",
  "key14": "5KZEuyHQac9jEnpYnK3KHJZF2yvBPVorVWMiK4zBwWjBNPo4BrXPtw4F3JeUco7PgYnAQrDHwxDKo4BskpuQEXJP",
  "key15": "v6QKezW1mfk7dLrDe425wGLuGBPXfvCFCPyGU4QVC1wtzzWVe9Fig8zB7rqY9mu5TWVAfpkkWByGsMTrRhqnfMP",
  "key16": "2DmcgLik2Tp7Skn9LVVQiwTLBAXWj8L4k6UHmz5ijaVhuQUeqmsV9d7cMKTrob5y3oAgMUZySmA5C1krWNqCG2gL",
  "key17": "wJovjictiYrXnRMHh75ZtP2843KmmfRH9DdQ5n5hXiYfatVE9UDoCypoSMKJXK4vyNf6y6ihVMGWUBi9CWfFcFh",
  "key18": "3axqYfuPQWSUcyCfUoMtrC6gn2xp3Qt4ay4fdahGhEriFLuZDyKcpjUVa5Fw7ivmAe3vEDKTZg4GwkmHtC3VqhZo",
  "key19": "4xQtW6vDUzpedUXjdx3oMEsRqkKKvBejUg9JWrszs1QPLKXawKx21CxQ5vAz6wkg25c9gcXEQ3TjteLKBhyyxSTt",
  "key20": "mH8n6ZC5Mt1TxVRgpmF5DoSVnA4bmZnM5ippJ6A1cKgpZn1daRPuPR9R9fTgcyCBMrDYzLFr4j7a57hF72AE1gs",
  "key21": "3egbcVLf32DY9HAwELfuTZJPGQH7pTrCSpnSDDLwjgh91zuMPKmYbDVH61ePEf6Q1xhqaxj9jEN8vzpspaZHFJCN",
  "key22": "56xTkse3YAqjN16BzJZg8efbMCd1RUKbA65TmMnSKiW1U36HVz1DFUvN5ibfxsCn8W5YJpvydKBtQJxUA7dghogy",
  "key23": "31kCFyz9sLQcYP7EaXJbLu7X4cj7mF3sXFEv8NYbEUpsEiePLaWpCCzV7nVqRFPAKJFbw9PUTeB4vmBdmGTmZF31",
  "key24": "2MScDyH6pZkPJuD6v71w7b2fgrWPNYg43EZXAxepLVbYRqzxfh7W1YcQueGT3LoYHzX3PvygJN9z6QdZVpQEsz6c",
  "key25": "4LYuKUehkhRMhDxiDeb2BZ5EWWMjquvYEJh1QVheLE3cpuZxxCo3nWLYdAfpdjnc8vYaE16EJjUNb3mezgr5jVRU",
  "key26": "2APmfi1WbqPnLbPch1x4TssFG7tgkGfJDQPvFvfPeWzwogkMy7sJQ2C2k4TrNz8uX1273Xy93cjyYYcHUcY16vsK",
  "key27": "3RDyHP6W9tShoa8SAnMzC3ZzvAckE3BKAb3AKKTUUgxTDnjs9tRSXZCkaLLCJa3qYpYVdQsvwzuPy6RLfAKDqeE1",
  "key28": "5GpVQEE4VmcPCSJPnUvgdYawFBJVtCNYH9TgpewZHgUeLdLo777tRBhRhUMGdRbQcHkuEh2GF6SQUmvD35JQTxxG",
  "key29": "4WrnYu47EqQHuTperUVvr5nCKSiXLzqw59wo5TTAx9gogvXKeeXAb4dD7ZYF8fzgT3XJSVbLRvtXhU18x7FnC4xg",
  "key30": "5qV7aBvm5cfSBdLDuqLoJ5irkYSz81cHyBmR8h6V2zdGkGHZanMMeC4kY7y9xTASrHetPSLrw5qj8YBhh5QFj2WM",
  "key31": "uRwdNfbdoMjDFNY2sEYMyNryWkM6QG4TMHUN9w1BZMdW6ELvmRVH6V5TgkUA7izy2qh5cTJBs4SrGexuy7h5Qsg",
  "key32": "2TkLXA2nMriH9HEcLM7DygbUub595CiCxRAaHtaNdpfXMzToUDT4SjQN4s7FFU9ZqDvt317Y2agL1PsrR6FqyXsG",
  "key33": "59WWPGpBsRfC2GeLkSUXTRa6b47JAYnwDNQravLQJv95uPNcyECnz7pGKS1QDHPLdUP4Jc8P3oB1zxHuVpH8HzV4",
  "key34": "2FUnedzK3ujDUxtbi3pGHNN6BzfRBQ3en3dTCrDJW9nqGfeo7KcVD7YMVrkdU3JY7QA5soJL9SWHph8JgjbnQjPR",
  "key35": "66SSnodjbFX9Z5i1pJFNn9eCAyt2vHmHSvs2LV4FNdKxt7WAWnaY6zMULDobu3Sm9WfXJccUGvfsyV1d2uiuHmP",
  "key36": "BG6FooaEZsfbhVpRJFa99B5s1m8A11Zkwq7jTSjAkN7PrtLQawWMZytVqxuzj8XGkKbmnkPTTUsbDb96Ft8JxVm",
  "key37": "3m6ZgjX7EG9KnQmhFXAoLQAosPaAUiTW9LtUrYAApLbmUAnhhzCxMGopNec6Y8PeCwkYd6TBvMVN2WxBBGqHBGni",
  "key38": "4XDuZ3VhuBc4PPi316urghedtftNyL3bNydqfNpr5Nmnrtg4o6KqmHv4dEFPHcQyTKHm5y6mdC3qFToWmFYDZme7",
  "key39": "31eoJybxCyYSuvM9T54fLUNuUis1KyZtn96agihECr1YmjKJRpA5yX5KhnvhxGLoQGspvjKjwF8oSdV4c7Z6sxnX",
  "key40": "2mbsJYupCYpcfMv9vpUxE62A9sGAPWzPAkPGJpaDw8jJor36vh7Jc1mumqAECxcnSN7VzEqsnXwwCSLi6WiFyX9H",
  "key41": "5EJDZ9BY14apAXRxxuGTAwLSyhayJtNHSM7M18vD13wjvwdHjuMfULpMJSoWw9nGDG1gcfNeYepLzo8pwaCkZe5m"
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
