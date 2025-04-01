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
    "4T2qn1AFxu9AdYQi72c9yvxHmwUX6EpU73UvHejJmSvXzKmsSBeBbASZYBBQFWZgeTdJSh6iaybqCEnu28XVqKEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b3ZTi5Ep7XvPShFtQF5cgnC7LzKcS2EmgnUtMVGsgCSTkDtQQbu2R6qmkadgPzGKySZQN3v6SEoEbsvVYXZEvWb",
  "key1": "ebQgxXwquJqhSmyxcop41BGSK38dzkW9xspVWvUujfzoZWxeD4J1Ety9ssepauDfmiQLNJDcJMf4hPiTsSrdAcu",
  "key2": "kwfuhPFofsjTVDmtCCBgmasAt1cVikVtSKzn1gLdrFM1XUFp8ucWS6kJeMEJ7o5ZbKD8gNcdh4or1uFXU9VpMxy",
  "key3": "22TnB9NaBAD79PeMaTLqwCXPHUGCqhKekxcfrWQJ3yUmfTwg6so5L8QHwrHPctpY3LtcibemdeXZZGjnuiE5SPAG",
  "key4": "4paC2Dj3HkgPQeDEHsoVJJB7UVbDLR7MTz3CW92fY9XyufJqab8JxGL8hER1Xs7DzizPBuFxsyBKQ375oPJFbec6",
  "key5": "zc8MAWb5gzVB6pGP2XQSqCKq8ZcmcNZN6fGjFpMWsZNmHsnMPW7WKtQqmc1ff5KFg2uNguNVqyFKfz4hYBfJWfE",
  "key6": "xLoEq91vLKTqnggGQQc8VWRTmbk1xAJe7QSAiGeXCUz4fUbzbkTWyofNnameC2Bd7FKmfgZYFuARoYEgptdL1ZU",
  "key7": "58eZMGtn8vKme4p6hwSZai7rsBgib5uhKja25K6cuGohnTa8SrzTBm8NaVsieAFPhUptYa3fMYp7YtJEbaRztBTR",
  "key8": "3fQyfQBTU9C3qQAj5Y7NSc23Jj5Qd1HCWzT2B5PEZKPcE1W2DfcU8aW5oUfV87YFKQj9xHAFNf5md6njnLs58QYL",
  "key9": "3JnuQEGd9wJpiZajuSLNSgMKrTdz6TGpJtEWGVEyHg9aZiwLWpBMmfVfqVs14VHDoUSsyX9VTjX9aAchha4ypM6S",
  "key10": "29o24GtbDusXRvrFTF3kCvRsfi79znC47iRYryDagb8gnNWhe5XVJK3HeecvPAyUWJKiSskBsYu43MZQw4nmt6Bc",
  "key11": "3LeXhoRnWFKd4vDLwtjJaDM64gyq4FrRn8tJv4UKXUitt3jHX1FyFdFqVqMKBre3eiEFJ8d9vgJfdr1WvuWhDB1H",
  "key12": "4Hj7AVEcJvWSNZZJuEKf559qdBR3XMb49s3A1pg4ipHQZKLuz89qSDBziXVP1EFUDvJ8kbWHQZb9o9CzE3C46Ust",
  "key13": "3QoRgb23gPJN4yaJ3dqUxC9xfn5jZ8gPK68nzp8xW5j1gKkSF8nvi72amq6SUVK4TBrPt5Nu2sdzmJTXTXdHGmrX",
  "key14": "38TRHBpkGXsaW1BaDourkkhW9ugXGK2u2SUCGZpGyaDiyfh6XBtBfkyYkJWg1fSMB1XPFzkqUk1Xa5u9bdq3p5pd",
  "key15": "3mAap5DPVx2ji26gLCNgr1g8GoW1rnZQyJkWpvrRAVKitRdw4A6mX9ns1is3iHVanS328B7B6HgSjUVSMyAjDBRK",
  "key16": "2UMPkM7oWxAfNXiptXW1zDWvdH6WCqgAVUjpKizNHY2jpayeJQS44VBAq3qoq7frnf2c8dem2y4jCaBNGcVa2Gpj",
  "key17": "5SgxFMzh9JUxLY9Z3MDaiMjBWgZwmQJW1zCFoCAAN3YLwYiS1Y7EHXCxt6uGU888izn7MhA7yBKHoikbiFPK4eSP",
  "key18": "ceAWxNKpv1eQfYzWdqFaMWoQdusRDp8DMFhvVpFw51KBnRGmHAY3LD8mSdVPE8rWCrV2Rpw4BPWA3KsoUMgWTzE",
  "key19": "5XtZ8PbaVww6PAHDaNM2ej9pdFe3hnnUaZEJYEs9xZWkt8NQSVCBpkW9656tb9iD8pF6v4tkXYyeJSt5Uj14MTTB",
  "key20": "2KaFQfJKPiJpKgsDpbQNvkkpvnFpomenzr11ZauPru1wNJx8h62XKrV1YoBRTAR75UJNCU7VGi8mr9WYG37rNieo",
  "key21": "3vULeyXmSp4y8UURTziiKj7LhD5i9mrzBYdVUTuj2hUCjDMWxMbxKrxBceeNi9SzhogFnLDfYrBkfQczuB8qei4W",
  "key22": "5pt4RYHhzTCXsMjRYo1jFuwbUmwKfqwz44wc3dBCYJRkWpN2qWNQS2hEDC5aVUdsC2oSkdbHvhu23fg7s8gc9QBF",
  "key23": "3mjyGFz4G8sL8kPUd9JQ33KxWUnH3VUqG3n6q1qGXuMvrJDRPwKjL3qb7y5LorNjfDMKqrNuuhRZEQqpPtpjdHCE",
  "key24": "XG76z9HuUgRfunrCi9qfdwUKwJh3kPhBwBps3NfpUv3zE89zCVrriWu6BwQiE5xpsJWGuatfsQZEqj6VHcc4hfE",
  "key25": "4JZFTPmNtpR7RQviStvH6d4Mbn97H4kK3hVQHeaHEheBUL8o4uNSrVgnU9zsThDZq9PhgEJkHqAcnLJb7mkRwcKk",
  "key26": "2vMfVCtn6Fvd4KoAEzBpHcmVEbZXjHqRnYPwVxUUhCyqN31138HYuySD7P87uNvwcxSckzxT6VtL9n2iZDdJyCNE",
  "key27": "2RgajFB3CCGoWSj1rrADyhbWugNqR4ija61QxUvkSbh49yhHQDvjPGGyRKdG8bR9U7jB2H2S4EowVr4geVo5SF3P",
  "key28": "4VyKEzKqqoiYFn22vSm6Gc4RMzmnhFPyrstjBab7edFYD5kkHkFkHpsN9dqPUMhBeR5NsCBZx5t6WVFs33W2eodr",
  "key29": "52bkn9VioGgiBMaDaRCu8oLfphPYcRmcKrnFWatQ6NoaR6bPTYUkkonV9Rm6j7Sf7qXMwNJuhaMToPobiX3jXQQw",
  "key30": "4DQ55ioUAogD9BELtnsKo9e3Xgd35phrngm7RRcbWnG156eYx1KR5yPwsbsNowNytb43XQHvjbhWgVE5rvqVcRdp",
  "key31": "2YgEs1bzt9jBp1gU4xXbTRksYT5xitJqRB7FSUBxxZeFCb1uTzZ9UyuyuTV8atW7upKdNQYgEoAzPxeigZr2KmGw",
  "key32": "4NLQjAsXVJCJMN4tHFMzUjAoVaVbfWAP1uGUYkxbcwB9b7yaGzgycNhMsiCNVZLFbe4rSXcXwZieKjRRVDoYF7D4",
  "key33": "1dcsnZZq7XQBDE2kQ2EyLbgVPoXAwJ5jA9uUoVv4cRSMyT4q7wcozhaAFiXTVC3WZNJbCCXiek1xKzFyVGWHrUy",
  "key34": "2NForrTHVsqPzEBffaEA6Kgky68cTvxrJEjx1vPCCj8eGqpdrk7RiCb2kuQdJUdASB5YE6M6pL5J9Uox1nZ5Toxq",
  "key35": "cUcHUo22rQA98hkD5mmKP8vzYcScFU1C5Bqm84GGGNnkLQvfuPoKP79jDUfPuhuEKfE7hsKPu1qyEzntzPLeDFj"
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
