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
    "539dh6HRvDYJiqWR3GohEaW5nAfbgcRFscPXfW2PfGHTw7UTAFGRr4Fw6PSGXbEr9g828ghdehQAUq4FVDieUVfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kCEpuF441tm3xtYfDoMUVxWfkL6rfmdC2opQyk6nkZoCDjwJia3i6qaRZPyCDmCVUcHoLgx2wCD3SxDE4iGUnSw",
  "key1": "5m1NZNNkDpVaRdFbJ7NqkLH5eiQTSapvtvVNcqTsUosfKGKvpDkgmoA3YP2h49vpBaPLiyykbRnUaGhAQAFEGDcg",
  "key2": "knYYXJVQAbM6EMt2uavY1yBaU56RPHL7TNmje9hkcZqpdWfM5WVcQCUAJGjA8BbDCfowECUqwLPqQqdzB8w9N8c",
  "key3": "AvFGqBNKvDLaYRU8MttfiajAxy9zadXDzMjYMgrxscjrKfHgPY1t8iqyDGuWTpDpvFbq1sZzJNwHgBhGNDg8QXG",
  "key4": "5cgGLCBzpfZGuT5ywDBDo24eUBTFdZvWPzDbCmQWedKDLPDP8Y1YU35qkMzJVp8fs2w8tNp5gD6552FmYQneXSgg",
  "key5": "5qrZW6zS1ag6BD4bQab43uXhyRwcvcb6oAakSPAcx3NR6v3qePb5QrjwEdgS9i4NSTnJiLm437QzoAcwriUHfdNq",
  "key6": "6DHhU4jqdczpvqTYhMUBhxJqRz2LpNjhyzq8pfR8bu4jyS8kVNXiA5uYH4RL9HXLrEUsxMXPsyf1M5M9YjayrAQ",
  "key7": "2D49XWnsYU5wbQJBbcUFtPgNM5xK3oWWvYF7ztX5JA6KxV6mqAia4bZCAnfYX8BN8AiwiUGMJxH1sxhNtcpoXtz8",
  "key8": "3sNNv7B7bMMSLthYrnWkergtfiNtSdgeKH9YdJF4FpQfjUAUZaBcyWbzGb2xZ5cmTnrDpi6HJnWZZW8L1dQZxkWL",
  "key9": "3fYj6CMouGXZ2YAqG62ut3uYS3SRtoTYN4vB58Erp5gBuqZwbrKVF8eZ6T47wwMmLFKC8g9dj2EhEd1oQMtjucXS",
  "key10": "5CHGQj9L2B4HGPzcUF6LXHr9hfwNJwtfAmbdEFj18XtDbX6b7TmkX89iMkXvcbKkmfzghR8bRJtaPq6HdD2S9dGS",
  "key11": "3ceCJPRyij4DAxSQMb3BiqXKqyx9FYQTfoC3kdiEhWzkqqhB4qwoU6e8xyygjs52zwFbUbGyqzHnRhoVCmgnKFf6",
  "key12": "2mrVW28749ShayLMY48fQ46jfwKd7iLBMew6YWwtWcwQErEHaUSi2S3J66gLZ47RQ3v482yB99n5H8UXghQvZsZA",
  "key13": "3byo7pR6XhLo3LLkRA9KXZsr7bMfFi98wfEzjvV95Dj1Foh9envFbiWCicvDD4RkgsbfRYsCWEKmVUmCTMd4tdBV",
  "key14": "524CHa5eo7C9MzcmnPGGJW7vY38FodDtroWNfxr8ULRWkDmV63wU5mrkX8Jyn1E4CUNrpbUQmT3QAy2ZMqAXFYj9",
  "key15": "63zU8pMYtm3zt2ht39uFLSBgA2wxuBB2TPLBZt1ehcTxY2Z2nrNyCWP2mmLH7XPatTC4sR7o8vwW8EVVjpxjttiA",
  "key16": "2VRGWC6FNWctBuA43UxWXMAZQHdC4ZAwakrBnKrLJUwpeJmt47NFFPmGWeZURL7gJiA1RAbx2fSQW7hSCMWm9XAW",
  "key17": "4DLB7dUbpTnNzLf1aUd5FQnBTHfb5sy5cr5d2bNTQ3GCmj6CSL9wuUebbdF1qr33PSdZUPTodz6xcvPmFx46cckd",
  "key18": "2998UkZYVy4SwJ6Mp3WykoTEvEKjFamd5TfeKwT22Y4NHVsGVfs7nnDGV1yfBf79awQxdr9uRkVwwc9vAnirBGcM",
  "key19": "4kKp4xbtxgB4XBPAiptzRWsAkTFYn5WEr8WaT8JezDVMPQ14Z9zM98FV4ViRx8PuLgqLM8EnwnkUWRVEQUjQXNK7",
  "key20": "XakV3HY23tbFfSABL1HL78XioZthtdVJLyhQpcuJaPMGQ6wyABmRdPhXpVbCBKeHbGBbRfH2vPiwxM97UGjvKWZ",
  "key21": "2kqxVXRJDS6hY3o5JBL35Bg1z3SzwdG8KmUxcDE2ZLr9rFeZNoKYD7xZAabTATMdVKq6rz888tUHvK5e1j876njv",
  "key22": "2m8uiDz8URMbXVmEnvdhnHx6VvGHurdBkasawKjSZpXMqt6b7aMSkxaW9ygFuM3duxNN7XgkByzXwfNmpbVatARb",
  "key23": "2CRR2bKugfT4FRVQRCRVLFx7qPPHqj2aV9nCibMh9V6fkBw3TudRbysSg7rZtUc34GZm2gAoGXe5jnbxAvQffS3U",
  "key24": "4h5Wj1XMyXDLfniaL1mRcnBkf4ZLvVNyucP5SnB9XB2qkZE1qHJB2GxEgKnece3UmqESc1KCA3L2fAAZz5WdY9rJ",
  "key25": "26wrj7sa1w9jT26cYfkUVQd3t4ioL6qX35AuHzChBH5ggT3U8KS5Wgfhm8U3qWEm7fDriT68gYXj5RqSDQa9xjwK",
  "key26": "2cFx52Uw8EDWGNjaagyz5mVDAe8y1DgP3gSoxMA7nyZQ2mSuxYFduyc3tV3WMBupNWCZXQQZWUJsRvrQY6MvE573",
  "key27": "3S2mT6ev3DNML9a1H3GwkUgttFbxQH9mV7NHF9sv4tPQWyMPfZmWm7pPt4VV5hRaeUw9L6ByrjuDKVEtkZSn6aw3",
  "key28": "5BNBr5dmUE8bqXTdjqtY9deuHWJVcBV8A5ZaXi7pt4wAsxbmd9ADFBWCgG56xDKMTYQraTzcVmaFB9RT3MbW5C1N",
  "key29": "YEdV6ZCBZ5ZZnjPfK23puys9WfWBbu47rJWonKkT15cL8xw2i6kuHoaNejAAz4ri7mJMNnfduNtrM9ivi95HKh4",
  "key30": "48qxsUwQWYtoeZQrADhisJCp7fPyZoYu43ekRm9BmswmeT2Xn9TJLQLJ2pvjtQjVDXDY9jqieheBC7mtsUq9hS7e",
  "key31": "45YrfcQofESaLQhBmLFTJywJZStfE9dpZ2cRpNTxkmtZwXymemd5k3aJNUvrNfc1S2boquGceLraTCrkEWVVhoeZ",
  "key32": "4qV4rByUnau6XE2HQMiXpcx2tLNTJZ3RwxWWnLkEZvTC4y61AvqeBhPvUZMeyQUuRmUAPyLMVyuZcvPTW3wtcy5Q",
  "key33": "3NPgyswc2aGGALou75zVwYHa21NoYsvBycB3y1pfTH5YbFdrSxkEvJNAZnuBAkzCEt8UPsYBjdgdpbNq8K8WThtM",
  "key34": "2goiELheEU7sewXZopToCPsYmDo29e6NST1VXMxMsmEwKXRon8SRrPzRpGgh8BnCnXYFV7LXDw4LimTxjqJxU9V",
  "key35": "38NJr8KzVEjBh1gDdwP2kh9nmGyWo7LHkfYs5ddvfsPyqg6UhP8TdGdp7xhwRXcUsikeTf1zE24jHj2ZQwjHj422",
  "key36": "51QsoW1PawCzNHTrNASodoYQeHRR9vRjnx14z2zKp6AL93avc1RxymocB7mmEwEzX6PWft7iNrRsjTLgST1xnHUo",
  "key37": "3NkqnJHBbuUsJg7Hy76r1qwFUEdG515fVWzxPzr8QwbddS7GVsctX8GWT6kPET5MAdnY1PMkaCzG5fVUNkUPUJv4",
  "key38": "5v4HAwxNaCZf7TvQ7XPATkCzBDrUL6XhyKN3R9hANkv9PvausqHR8zQUyqPZmK5H3uYAyifUXbpAFGsVAfaHsYb2",
  "key39": "3v1KBS5uHvmmXH2wcs3EaVC9vbEJypummRAgJkruYdRQEV7pYUJGe2RhjNF3RfEuqarZEocbiPiDLVcknPxYkAbk",
  "key40": "5dWdnwff6ZemCp4Ugtoz7yL1b7fNhWNqSuoDyuiVTprgR4aCJYFUim7xZETdSbAafYwpvJwS9jPRexxDygpo9qem",
  "key41": "3nuHWSpXePwtsJdqAvHbWBwDNmik1dyLs9DkpmKG7rpB5LvJW1mmyYhiZoqDMcjcrXeqPpCHyBfwe96663L9SAFE",
  "key42": "5J9HPdmk9Fx9BpCLPjiygb1NpdP36sBFE2kdcmEa5eMmkiJDVbVZVQMXQan36Vrsw8EnmrwpmNpWDQzaCQtzjd6S",
  "key43": "2VGqhn2wdQJCjKFkkeeaTWtKRVqpY4Ka1DXugLpuGxGaRA5HwcdpYmx2b7FeuP9kS1ZZHCXzHv6SYkP6VyuN1644"
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
