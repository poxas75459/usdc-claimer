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
    "546es22cEYHWMMp1HbuWSfLLKhTiFr4YhycgeoNAgiJRrGn7W6SrnnqoUWtvxH3tdqhGBKRw3b7yCsRkpwK5W3N3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5czAcx1Tp8nB8SE74s65mLnSk2nHqhXHcMHHMEYNtrKtfcGFpzNHw47XLucsR67RWRsKbsk6VM9uvSEbNvU6xbmM",
  "key1": "2qoDTxmMGxYVvNNZKjQM7GEqvHFEFoAW12Xp5cjkEnEwMeeLvHz7iNN5enztgfkFHKswr5QNHBQm7eA4vzQR82sd",
  "key2": "4WrX5NNeG43rkmMZWLUjHRFXwW3zoiqFGpoDSSFASRAqQPMpJCuWn6CRpwFYQn92EQC7YRWyABJwy4ibUzbXauEg",
  "key3": "5U3BmozirCSyiTJJfJXiv7Tv9Y9aGdbSpPTaFE1PxBFStz2ix7K99zePAL19aKKLTsiFzNHFDcYvhC6P7mxajZDd",
  "key4": "27j2HZkSBeWBC4aKwYYNgWLCJLUkayER5JNT7L5DQn7P1NsU5dLD9nUm1r8TbzgTMpYhxTym6qAnEAcFJK8tuY9P",
  "key5": "5t4BmX4uaHhAh1tqnpcc4qAu7PDJCnPgK5M1FGHa2gF6mwPK4yaYQVajMrg3ajWjVaG4g2Y9yBVR19yoFuuAciVC",
  "key6": "3HRNJicq2bqvwBizkzG5NPix7z9obsZhYmepGpnnNCJtL6VP9EkKd6gc993Hz3SYGmwwNjpe2sBjrAmUi6zaRRzk",
  "key7": "4N2Pjty3vUmN7xB9yPPKk46Qz9bFRwa2bbfm5tmZN4o5ZXfNHzXDniWofBCB91Jd1vmMutGdRFgPKQfXP3YHch5v",
  "key8": "gqAivB1aot3PaB5Q9Y9kAavxtQ12bpnq5gDbW995TN4ww1LhF5ZoeCU21xz5Aijqj8TUJURVYb1YuenianpVR6t",
  "key9": "5nuACEaYrJcDjuSFc1BcSBZjfBXZMRZhHrTRKUqXTwPFmdrgxmeSYMU17bcuyoFBx9HSZh9cuT9TPEK2xi4pNRc1",
  "key10": "4PZtG8pGsGj9dkYsPn4e4HnaCvmURTJexUo9Czq7b98eMHyAzDxSjYMEHvTcjKSMRQ5u7azZQ4Fya4tAKJh6xuCV",
  "key11": "4D6mXyqpJ6QcNfV3erQL44eaSormbcQyZH81CpiBwAWRAxLSnCW5zabLbSN7skevhPBicJTFUsdKdSHF2ZKM3P2m",
  "key12": "3VC6XHyvi9PfYPyhksNAKn4cZbn62iYammbkZg6JRr1TNECL99JiVY5psbj11KS7WkDt6TL2nCrJoGBa5n5Bndpv",
  "key13": "31jGW1n4M1A56ULKRY5Xaf3z3iznZnZy4btVZ3Ld29XtgsnEESeV5wWkZ68X5Mbzj9f6E21SAaJdEUPB8fi6QHk5",
  "key14": "5V84AjD62Ubm8xeBgp4WzfK6EFa5VmUzJmfv3kqXPt7jJGW5hez48aDWpFDps4iJqopRh4tZarGi2N9EXj7spAXk",
  "key15": "LYLqseQfC4jed8cmQKEacehqZVkCJGfeTu7X65T23MqB3sSrXrumykaXWzr1su3iG4j2qcDJZvH4pHA9JWugBSx",
  "key16": "32e6L7t4rSw6QhQ3zsQap8wmXN6dobPKETET2C8khjxyZL8CBNEP6sxU1CuMCCRUTtDix7CRnp41sJ3DEpYd52Ke",
  "key17": "5FmHtVCREB6xgcUtyyMCnF4J1oZDFJocFPs9nqXuBJzQaqetv1GArqf5njQfztBuPUXLwTCueXgCRrJfzU3QGVQW",
  "key18": "ncxDdDo2r8pMATLUDt771c1M6PSWWYqTJDciDSN5ru63fj2QZMqSi7ybStiT8oSARzSQtjKjbGzDw7jAH4XzYQe",
  "key19": "FLyhM35uqEVh8tYNc3rLcytvvTn2ZEToBb7CXVbh23CewRby4ynju2kGyygXi5uXsfrCDGBUyMYSBW6egCRztnB",
  "key20": "59e3DQjZJCSg28ivHh1uYfzueHeM9F4hUoRhURsNqk7B7CpEoEasF1Yh3u3QpQdgnz6zE54fknQnaQNi1TK7stet",
  "key21": "3S3RMdryis3joKKYpyxRRo9irZ1TtRCsWaditwr2VemZoRJb67YaymBJy6qskUL3xTWUUekEKiLkxKjecK9HwvDe",
  "key22": "pmrJJxDbEDLi7pvzXDgDze2WYk4HLWBpcctWKTRGvUKcSaSpJphp1K1Vxf5bTDV4Yf94t7Lun9qHJE638pd2TaX",
  "key23": "5qckji8Zr73y1bGkH9PjNiXn2x5J1v2yHyDfxE3NHRbiYTqN3dsVaoVt6G98PLH59scfeANAYDkMQCaMyELD2BfC",
  "key24": "5gQMT6JB2x9jvtkk6jXhBmUyyZN7CbqyUiKxDcxnxaq1RZQK5MfLWZueAG5PJFkrzywhxdDfpEtRtJkSLFXUb97y",
  "key25": "5Ks5ukzMFdXa5761KRM4pHnrP7oRK2macVZYgL19h64yqe99bHJydknwJocrAoW4nqTrRChLUnSkugCBrecWGqVN",
  "key26": "5XdFxPX19o3wpJQGZLqY3qNfeLqmhmGwdzRYLQFAWsptuNZvrUpE1pBWCZQLVE9YeRmwJyxJj2LhfKL4YZ2YB6mU",
  "key27": "5kh47B4wyNA8f8QetYNJKWfcZRyTEgV2DGaEXtTNKV1CteoxzkgeTS4kkvzLf3t5WxG3iHQG6WCpMwFY7NSLexBa",
  "key28": "dAoX1bDoymtjCkqVdWQSocxbq6MdZCtcb6a8FT56c8eZEeQS9BnWNzSVbGrKuyqipJZh12AwLrUZM3L8qCdmaPn",
  "key29": "5T86GKRWfWmPKogRYH42CHGvzgmP2cYj8jyJSFs1X4ZHQxhTmtJurj2cy62EcwmascqCkcS3hKFUJZpuhzKTWdNJ",
  "key30": "tDTdDBPcZquGdYQzFHCnYxGA24Sj3kRY3qr6RvDtZz7kW9x5SizZZJ73rMcHPzV7gQSPKwwhbf6AQkNZGSUN2nW",
  "key31": "cNSt1oVQXcrrV6oNXNmWyRAM7UjB33ZfEed5e9hfucpryyvdGtv5LsdYFGPuaRUjDHWcFH5tMsi27BRAxGS7sPW",
  "key32": "2PCKzuXfv6PzwPtFJkp5Q2GK3iUpUWHQj74cjj3vdsB2CMjSBTDgijAAi69RSd2H8GhbaB5XQNyZ6Qg9FSibKQP9",
  "key33": "66NmFWmRPgYNpwaJuwniHoK8sSw2ZJ6mpRWPrzazcFHqVgmankt94iP7nnQh5QfetQRde9Wxko3vFGzcMMkry2YK",
  "key34": "NjcMfAYcXYSCnpSeZdU9JMRhsNEfKx24TJWE93NAX2UxHCaTpRbGYeFEEVwVVGiuDHDZQGBZr7nnh2jzkj5bP2y",
  "key35": "3ap3fzSsgK7rwuTmwyj1Pq2yKXZKrhueX7KLx51S6j7J7ai8Lm7nhDGS7rXEFVygZ2z615QrmyQ2G5tSzE3x66xU",
  "key36": "5HJRjZRZVSBjBSViLWXXZBHo3wJVNfNKKHj6z5gpqA3BTcrrEqbnWVge1fgJAUTUwjicnMSDKt1oHqTsomrBtNBx",
  "key37": "4dtK9kcpBzCBdoQk8iMhrS2LFzgYpFTiJei62U5Fed3k7DaK2cvyLe8vXSwKXrw4KaJU2mMBQh7nUJvnfRFcLDJQ",
  "key38": "9riGLE9jMxMn17tSQkMHuB7WYLf6FbjLzi2zWCn9KbY4C5Eo8ADHgtng6d5wsrzmcWV75XwNiFd2WocjS9Yc3u8",
  "key39": "3mfwG5mRSneUD5pjh4GhCCcgdasXRxDuibtuQ4BWNpNZt6WT5cfQUzLX5JpEkWUjp3Z4WHYhgZfU4UMagMQeQWjb",
  "key40": "4mBzt5rP1sS8sXkYhtKEKadf4TD7B2CLxzTpj96Va1Tv95DaMHmxdvqPAqD488BqS26ubBeAQrvanKj1oo8vN1QT",
  "key41": "45JzyhxsfdZUkeUXnzUwCyD2MQFvxrDvW2usymrmJq56GiawTLMHkekR21PwABeHWVPpme3CEjbVzM3WeqbiumcN",
  "key42": "4CQP91XUsRsDjMBnuANocUTk8bDkES5JzmzqiALN57hrcdbikPeR8TLoCpoZb2sxA1SScWKfnzG9prCqyNSAFuJb",
  "key43": "YLYqMbfmFo9bQ9oJwV8gkKi1skronJdntNwR93fSdbfC49D7EKyKpgf2tzaU9pj2N7uXgX5u2u3qfzkYVA4T8mV",
  "key44": "5SxFErK9LUcgdaoUb45GaT1bRkxeASD12eYTLejicUzyifkNE3smNXz7yHgjExvbHAD3WcUd5cCRcQ2DS7rJZJSP",
  "key45": "4WqQqTn1g6TfR5uvSQE57jkrZ9K4XqmUgEz7u3FG3nGjmmgDyzMbVjxLbP2bw346AWswGpMHX6jgV68KsZ3dmuS9"
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
