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
    "4jzFr7yDTqmoLzPCUYjALPFfVUjbYdZzg2wFHyE2y71R3RR3Z5C3Nd4bAEp1kj8pryBnsYAP1oRkMFc6s3gBPvd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gcMVznjmKqKipXxrfHSturSYRsbHmT7ov8GRMXNCxR99cC3YcA3fX6HbELTAknvvHazGorpgnfVNJoEoQwJjH8h",
  "key1": "6XhieoHJV1vgd6URzKXXrkvGevwEThSTQLgHw1H9czMQeevJxVJGyTAFLDBZs7hujyiZ19LZgC1qxRK8jru9iUx",
  "key2": "B6aPa5PcVACX7jBogwpbTcQbtiqjU6zNyuzK7kmYdn4cy35qGqnsKKMWGLDQxHF4aV92cbdQHEgygjKNpbUUc6Y",
  "key3": "4oCQZsjX825Wm2VkqL88psa4brZu371tzMYSe2MUkaCms9UmwY4xK11HkQmiYa8scJdF1c7ixTUAyfnqcynsBZvW",
  "key4": "3Y6SXHskMetNASNcsJh3iCeA7JdaxNeinP9s2xqQfPqSmxFeGWW5DBooK2BduNdzweexJhYY6J4W7tm9bYvhyrsm",
  "key5": "5Ezxo4f7kunD4xLT9pijNiPgDJpWvxdw5mf7sFz52u6wK9k4WWcGfuPWCtQED8FarsZiajwM6fftPgTMt3Dmenox",
  "key6": "53Z6hcr1oKgcJNrYCsrgbsgMkpiGBz2P9eYMxxX9MQzacTXxwsRRrrRS8JSWdZnqty2igGwvS9YG9AwAJXPjktLd",
  "key7": "26RpMz4idtrXCKhzoSpyn8cVXMFG3pSnkLsNpR8XHaTy1GZdtjkuSZaXdEmg8tpQtEbUNLUkcV16bU2xFQ6nLmFA",
  "key8": "3wMCDKUrwFs6ps51m2ptGegvMUUXSjf6vYdBjF9rjrLBbteZ43kq7F2BDNz7nzCpjUap3JgKGqJUgVsErfhM7Jxb",
  "key9": "5m4jLZNnHmxwC8GmAaK85LNBsEq5deLTSof2UvGU8msmM1RMmmz5UHmNMaibykLyVZnAkzb6PA3ywD1bxYK87afo",
  "key10": "2VgnBZUDFT4m62URyUzUzJUw4zwJuYYdmAsvMLRbeFpfG9xZyJJUk5CDXsenhsDHULT1iof4HzpJP9sMUWRZn58j",
  "key11": "2kurUYbvj3GEKqnvGhsim7Su7jawrAS3LLzRXrxEsMA2yjMiLsJD1XzEnQdd8wtrKqHzsYA9i1t3yEYQjPtFmFen",
  "key12": "2VeYLdEyd339bo5EVZFZtMLrMfioMfkcSjsX2eKN6Hfdz9iBpVANH3RuRaL93DPiVDHk9kvNwxu9xKmFR3mw7EHr",
  "key13": "4BEY1nFWwzpvHKJnKXo4MRHubSNoVsa3oT5SCLvmbE4fumbagY9yfmjL9pD3znJMRLscT3DgSgci5fvCCPX74AcS",
  "key14": "4WAB3tDb2HVqU6349GPob6iUtx6w21fiqjbd5RfEFAMHgN5tYPeTpY398VnR7zJNQnjKa8cyg2cAsnzrYK3DmuMz",
  "key15": "62KFvEmGC2JzwQTyNP7aLXqeE2EFvtXikZG2Fjv6rbqvQKtRNZeQuXYFdhpAxHcYGGzUxVwspSa1xy53oMfMdX5g",
  "key16": "fXujjVA2BA3RFmCnKCFNHfKderndzskzRBMp7QrXUiVFnep1stpCGtmVHMF5RDMzKY4LbuUT4xJdhM9zXFBPCoe",
  "key17": "2RK5aTdcmFdqVA4EYwFDWCjKZkaDHjwQFmsnP9pTXdGm75WKywyWiRyznvevcZMeqLQaQrxAunAdEAFePUdyZ9vH",
  "key18": "pVW3tAr55Fw4ejD8Ujb7XkXTcwGWRENXBGbMJuL4A8MLdNSQFUZK8YoQRghgHfL9bUejppuw97ZAqFsBoCpuPw1",
  "key19": "3sRkiPb65Ee398zURwKfUqV1pj5sj5wtaRGBC4NzosaM41Wnvi4beykEp7788mWiBcdwyW3ZcCZsmUcNwoa5aDpo",
  "key20": "77y8Tp4Lta8V3vR1HdML3LHF6TdMMbRvAv2QGBRNaEK44xHxG4PxL6YZyhs4Gw1giSVLRpeNmgPSZomzLPnuWgH",
  "key21": "2bpbfzAUEt4HMuucsyDRm63mkTvZXVpcckU5mj87s5D7F7ZyyVcebZfXemQxEVoLGcjCbnfc4A5Dqw9xkMF6Y2Jh",
  "key22": "4gz4EKhPAYuUCEpDZvhCztG9GnrYMVPJv1X1WV6EvaRZCTwbtFjbUDMCfHCULGtkBmtqKYa87Type87eTsB6TUBd",
  "key23": "5tJGJtjmUoNjjUWHgg1QvD8QCwFVUGkAD6uLaSzYh7uSX2ZkXVD4cTZqn1wjxYGxy6SX4grQpe9cTpF3p3D9agP2",
  "key24": "3GEMfcjMT7FPGUhsCWLMY28gRw59ktNy6YqqexnfgEiyzCajiJkzc4kXv7VhB1FammBJYdWrMscsknRvqH27yDZ8",
  "key25": "2GrWtRodYtUHy9NPWMrahdg4tPixvtbtooV9oiP2FZZRLYXTURuAdtJQ3Ar16WwaaNyBiZM1vfFtNV4Sr1dZwmyA",
  "key26": "4Wstxj6AqMCAc4kycu5PXqkeDTPngoBFHs4CqS8N7UJZZPPYzRh2LW1gzRNHnuzqagrC9b3Ng8TzpuwCDKBBVQrX",
  "key27": "4V7yHJAELhS1RCkGQAKYc4YgLQ1TF6KMLJjQhmoauPoUKeNNDMYm31F8owHcZtSGY4wmfgFzQ6D3rMR8VfxosCVt",
  "key28": "3MozJ1mxCqfMK91MTJsWC76B13KrUqWDxeFbw5meeNAbQigGB2Q1RGQSAGo2gFaN9xGSh4dMLDy3ZFy2WLUXs52F",
  "key29": "57BjA48iyFF3jwTwz4N1Qpu8XzRNB3Ccn6NAji15wkBgGhUwZKnPU7ybJHEXK9CACbkZFBg8RnWhBYqTcSxUyLQG",
  "key30": "59XTUfhxeZufDBwczcjRjRChG1iT9u2VGD4B8JM59pZst5PxiYNmjDmGByUfZCDANRZsLFpK2XuLWKn7BJ4qVLqc",
  "key31": "Rf4pXt36od3zaV3YBW6y9vC9ZM99Yo3FA7AuTN9yC95cBgUyfBhhZQ6C9H1GWXdNP6Dp6J59bU6xsHik1E8oxyZ",
  "key32": "4hMojN6odJ5gty9tjFMHirJyNjYVVeNxu7XZDpmvLQnzMwhLUN44JheoRPnM9tKnDuFarBCcXY3pr6VzXdWvcwBV",
  "key33": "3LsGD3Ps4WD8uitR8LEDHF8e6GC2QHs7tusgd5FFEf7QEaRQwZMf2J8dJgfryj5WyTVYgMTw9mUsEfA8edm8zVek",
  "key34": "s8zEdxtoiPNpQAfMP1eVcckHuAFmibgBHk2GfREi49P7Ssp3V7KAyCZsFRW2bGAn8stuxXph61d17qT7m6N1G9y",
  "key35": "AJFALtybHosyy9eeLZrj8VsvSieRKXC4smTftR8QBAduugdKSnhJ4mPKZaFPd4wiMzRxunbm19oWCfQA9zYrHY4",
  "key36": "kKYFsvMjuMkwRbCpU9b7cZnZqeEcVPEcrPXcsbDaRzrYtX3cV5fGKHmVY2PRPXnPNga6zdb9UB9Ncm5QGmaHmjJ",
  "key37": "2Dqu1u5nWcE8dhShXRKUGPq7Q4YZ4stpma9LJi4E9WxJ1mVKKzbrnyAZBc9CYfF5rZqDcjFy6fgKio5qriAbmc9U",
  "key38": "AptC1KWfhPfCsvouT8HCoyjVnKmEM8e5j2Du12h9iDtU31ABXXPJxTog3RxEdDnCK3nLr84frPCxGZWe7ycLnR9",
  "key39": "5zVnuMWTpeuWXEsKKfTV6yr4NAzYeC6Rm4ZsKRy8YZCqzNPajvtNzvSPJQpDnJVboqeWy2FtAJn2GNKRBoJfCghR",
  "key40": "5U2BjDyZ58rz9dpirXASzFgUXbRcqwf6uNvxR3F9R2unDnki4xQfqsrNeDCXLj5NV7PUUQMfxXwuKGNCYGQjPeyD",
  "key41": "59M8bsqto4pg47Y88izswR8tUzFyazjUbhHv8CGuWA2q34a1jY56dVAASETymSaeASx6bRE95RxiEq4Ae39dpiss",
  "key42": "5EFwtVCxvTrU9g6rcExrrnWzD2BtyGBNFz1zwLE9yhfDvB2HUAFwjGspyp7BBN6RhrsQdayGuL7e1juNH3FFCnBb",
  "key43": "4e4voBBxo8TeEcmzKXHg4k5YKFtzNUncFaKPVrDs91C6rrbk1BKqy635GxsLLoGAEEYcK6CdY7dWLgLB5n1VSBEG"
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
