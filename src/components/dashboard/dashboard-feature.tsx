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
    "5xiftYboeuhLZQUXKGipefrSHLsMb1i8DdWV66EyaZ4gPy2mJPcjVTUngzU2uhrueMK1EAmUThnYKVb5niRpS7Yp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RKBKV7S6fJ3eYWJsdTTde7nqyyF9qsDv46a2QhpmeSJRAr3gtYXLEumWYffjF5HVgwxgew8EhfQsEo9YLqZsqKc",
  "key1": "bVHQT3K71nmQEKc5LjWBhzsh9wbZ9zq1p2jzi2ny5GkJQqXFJ4AdBQZbsePPjN8r6RsL28t5fiih94Kh8MErkf7",
  "key2": "2UBkhkkaway1HJez5G37Z4Bxrxs7HpmqsMgTioLcGjA3USFMTYTVMHMKSZ8yScd2FduT5qapNQs5QXrZ7mijHQ8k",
  "key3": "4xSc482KVhpcubQ5KNtAmW3U3F3NaLn5GTFWATDUQEKxkhb8GXafzZutazZ4J6FNvEUEiBX42pT9ig6WgfAUDbxs",
  "key4": "LwkxYC1NhG1wExyG4mLwqFXFy4jXcDZMj7GV5ckT2QJok6ouiF8axZaJLGDSPSgoNYuozbLxu1YxEX9VZXbZc2V",
  "key5": "bkfn3S7U8d1zt37wvCLRtMdEcdoGQ8HhQwoVTKrJFfzFFgffWzapQuCsrvQhtsGxXfLR2KiDu7HVnT6AfMsyoSv",
  "key6": "2mSj1Vias5SeUaGxvYfUccgxnJDCKnk9TsLTbo4CwsAb6pips91SEpmC9NSYg3kkK2jvZzR9d4cuaGsDAEDUpQ5J",
  "key7": "1RCzcQ8U6WC8fYA6KSwGhYmavnxR291YdMTRSzkzX3dYRgbGgtu1m8GPfVgURAR91CiHoAJTw2KwceMDJcKNjXB",
  "key8": "51giHYtSpFZvHo8idpqw7dBrbMG3uQ3odDy64G1CYkZRDio5zYobibBuVzH3ABEc1PjQ4rGqvePMhS8sQXkC6tF1",
  "key9": "59g4vitmoUP6s4Gs4MkPkjNwYMfjmB3sKD2gsDx29YfFDiWXVvKJapfVWZobr1kyxa2HhDvqLXz8FPR1xeBx7zmv",
  "key10": "3BbbN3NB4wyaxJqs9NHxSd7h5fJPYtz3ori6SoeDxG8UKDjocbC8GsZdtrpcST6ngqiBNRNoKX2AHXv52uSv5mb8",
  "key11": "SBFTvBewgwGkCiLgtWGAbwR1evZ7vGHdCpmm4KuVd6Jf9VtvrqeSNNsRTXFc74tVG7S9Vz3CZ2zPpBAaRiYYGyE",
  "key12": "2Q22pvCgCZbgREFzhHnxuMCK99eTLEHdfbht9msBUwKq7Lw1oK2s6q8cqa1QLczQTUdjdAJ6vmigmX3cqWbN6yEH",
  "key13": "3QNXGqBy1hFucbrRo3kBnL9UjgDngRV9eCjuGBjEx7N1gEwiMGN29LBwUoUYkuv3BUSc1BjXdm6r5dyZoSBtkwdD",
  "key14": "3myUX1bzVBjjSL286zVwUN1CkcbbBFtfjjDBvxvcCwNZyHEi9bSo4upSqGY9e3MpmatRKQUkjGcSdj2MCPoHPCoH",
  "key15": "3eYMq1SBytUAGbkvKrqY3YZkDweYKpJ289R5pTpLSJMBdhoJTPNEW6F9f14MRYCsPnz7NY7ytSjcMRRVtCWdob1r",
  "key16": "2aPczkUozYKZSrqiTtJSxS1KcVAwaisYpsSfwTaz9fqzaicWLfvNR1Pj7sh8qhSdFVwqeRsSFbXUaPEzKPAz8vQk",
  "key17": "2FCRoV9NscVidUbWQE1Yff4UKfPQWkWsXMD3G85gHrmNAKMG3P5YWRSCHJKjMrTn6G3631DKygH4Eqj9roSDcCGe",
  "key18": "62g8cYXJde2VvTQLVFQ6zu8dR9hwoHEqus1tHsrtiqZeFRVjqsqGBePk9PsDQMzbm6MFawywwFcXojjCPvpoFojB",
  "key19": "4Z6gvZKxjGKkTJmfJKUgF1Q1xhECmoYDrLUwKRb7yxFcXLc7hFXdNmhepq7b93drs4qAfTAhrgvge15xTK7mAejj",
  "key20": "675GUTmgUPSK3z6U94ZF1Qov3nLqCYLa9Ug1pEsdg3A1eYhsuRdGE7FWQwSnY45dWESAdEUtQ2QK6wrtHk7qqWjY",
  "key21": "59oyxQyXtvqa9ggSKB8Kt2qDWCLY9D41Nd8omovMi7vE4cpsVwQ96Y3VgGHtTJ8ahQKkPN4fd1c7Nmr595rpZAvu",
  "key22": "JojpBgFNwcTQSDxZ23ds3f2zNYnTDAKGMrW4dBWc6bXZS1qs7n6Qe9AZDA6tCqYcB11p9WZ72WcNNZXvSSieKtK",
  "key23": "5WTfb1A8Wbeuzqs5nZaSnXpdgiuGqGdEJQa1AtW82PU7JH78Cu9AWgTZqWW4uRt7nhtjMWiF6qkH6PrXiwLw25zM",
  "key24": "4RR8PyLoko6fk6EE8oJoZpDuKBKwpjFrZtoHsPSXP9ozDzkqF89KJpDwQvWva8M9ruX7u72mTVRF7tRZWhC9uLAM",
  "key25": "2PtX6rvUkXBW1uW1RiTTJAo23tnzoPh7n2HNyR4q9mLwhVweH8K3qaexqxpieBmbGvNstzR1XnycRaRxQNx1GwXk",
  "key26": "2DbERDfrQBSbAErMTZ1A9XqAmwDi6SF53G2p3TvuARjLfLfGhDo8HgWKQB6F7QyBvdqaKXYPdMVkwEjKFBAQbFjR",
  "key27": "3DJRWt9gpJoDLvuDHxFeh8CiFRcMURj3CwTfCCDuxJuvWSRAnGcJrZ9JVxg2TSiotoiZ74Fkf9U31zUPnKaz2Qge",
  "key28": "5VaiePrg7gWWGubezw4bQG2kY8GSNt2ZjbTQ6PTEnnVZzWqzx8d4VwjAGC1uVEHC5w6CLvm4shMYZWMN6rF4JCYu",
  "key29": "4An11uRet9dRtSzAzY8D6gPZpCr3UyVMGXmbfRUrhuFpBwnzgHF7QRPVhHsJvCD9LHmBgoJovVhLT7t7LTHeHsg9",
  "key30": "2tsFPbrZUiTL2dPpzoMUNgsR9qHwRCdeHvzQQhAJtNWPww2L1MnV4vPEo4evcZ1utZd8JE9eVpQ3nb3VZF6jNZb9",
  "key31": "3pMScrEWE8XCY4uMjRkeNEVpZP1sd9xfSUforpKdwqPRWJfdkwe42mJ4uuSHQH6kYox3mQ8kaG9iQG9BQaYvmy1Z",
  "key32": "57MV4s5ENZQ59V35NB7WQn81wiCK7H9wwu7qFxRij5ji6yjQoEehuftuNwRv26LEQwqkmTCXn7UQPBbxihgdHCd",
  "key33": "LQu11RR323s8FUJ3B8HLAgEszaaEwRUBv57fCwEjVWaeJdwp748EfpByCGVvbthpHdxBbfXYivqdxcVHXdxeNSJ",
  "key34": "2QWybr3aqcJy2cnJKuyVCba364n6HhkgTAJX5TjHRB7GM2QzNdPQewLFZWT5ou9ETRqB2cnUWzxreRPpLQqyR334",
  "key35": "7f7JcTHdWEKsZmekxZ3Hp4ozRtrWAcrk7tdnFf9SEzsdih2r13a2R99sbt6iX42LiGjsWzLScWb1rgawSu7garH",
  "key36": "2Gm7m99oei2UuGRRnVW953JaGbQBcRfMr87TZShJidEXdDF1zUjMMv81doBwGQDk88yhoEFZGwoni3UgMfrE7FV",
  "key37": "2R5qsnd4NUPsLQcj91tPyWTroKX7UESDPYt5u7jb5PjMyuUTNxcmnv7gamWZVzfq2fQXahYazHAiNohm29PZHyky"
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
