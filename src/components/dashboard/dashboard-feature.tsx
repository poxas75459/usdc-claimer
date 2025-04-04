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
    "4vhHCRuSm3Paqec669qmzMzZvri9WQx7ro1YjYAAx1aF2g5rtCkYGsGJ1VQ748SJLFbJd4Hn5mGJgPgG1ievnYgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D2mXmfeMK13GEFt5e7ymYjzihTedM3rkhgfgftsjp36ZbsA2bXH34uMo89jCvoy3Q5ftf3HvTmkWznaxhDrMZqn",
  "key1": "4WGWmRnwETMMW5iqg8wWqcoz5WBi3PApS1zKUUSoPLe3zt39FoEZ4UQJ3ovFk3o8HperXHsRQaoavT2cB2VMdYqJ",
  "key2": "nhzbh9vRBskNJqNrzU4dw5bdt67jrujdv4BAV19vFfA3tdAKrjg6Rfzv1UoEJL1DjfMAA8iSJj44TZqpt1RFsKj",
  "key3": "QKrUrD4rqSsc5f5V3RidTS6t8XaPKRx5WfSBrnY9Jmz5z6hHRfcSpHq8KRGvbJpKDi4cBKkjNuwiPcoEMFrJAfJ",
  "key4": "3r4dY6odmcWyMXuFvtRocpwubiPhbSd22xnrutdvULbrxjHwq7Rq2vLPnZE84ydqS51NVc9op8FK2xhSJmGuPH6V",
  "key5": "EdvZELiGRxRThm1hVyWTmC7HWT37fHYeQBy4VLhXU7bZn1ehKK3se6mqi5XTJWUU2PPPmzKixH5YoDLA3MznJpu",
  "key6": "2AFmy2upzygKsLDgNwh78dPc28oeE9c6CEepgcF11E8FTmR1Mmf9zM69pDpwwxTCtv1a9685tbGmdw8oh9ZbWvbZ",
  "key7": "4KEq8drRS4afhijCQjSh7o1Gn3ubSKTyzuKLuj2BaniDR9ANQuADKbPPz4HB6EhpgZYFPfbKz3JAgCctcjrPbs3v",
  "key8": "3qJb9gtk2vaZx8xk9bvcKt2Mjn8aN5p8FK7riJFAM6x2JqzeFkmjo67ogVUEsbbdvovowQ6VatfT7o2XcVJ9pedD",
  "key9": "2PjpEawfzjh9KYxZHHhZDy2F6ygmT69mJ3R46scjQQiyCoPGtSx8D5EedjtMJJ6oywgPDJvNgPVZZ7DYiy2ZYtQG",
  "key10": "2XCDsi4UZih6mWHDqfEgnBrnnoUfWyscvDLJ5Jo28RACRaUvDsSuBaqY66VZKRsPG9XtPwKcpHHbDyvTCX4EUntc",
  "key11": "2YLYfihtYFVdDMvvzFFETVQqALyraHXUtVFyFxEacdo1FTMJXgy9L9Rv8MPak1DB5zaV4cQjhniSKQr6JXSneMAH",
  "key12": "2bsNjrPcr7Y6Q1m6EhzxD7fAGRmhJKZEaSbKSgoBfs8teKzMYvExSkfr4g4E1i795NEkJYsrGZoK3Xf5esxmenXT",
  "key13": "ee3aYFi5xng8VrQoTfDCfeXXA2FPQkLXyD6cJLJZYVARguFRbVdC3yxHgGatsivKniPAaVhoxWrUgfEztofjRhF",
  "key14": "3KnBnh9dhWqCxvTN8xNoTJE2W2VcPMC1dPBVajkSusAVi7YwyNmiekT7bw66nA3YQTNSSC5TLFDjdJT8rf5J171d",
  "key15": "56vGzumw9RhjEFohs8cKXkRUbnwecGD9xFKHQGWn7CvxhTYnxxAFwDSAHhxbDYnEMYWgueanejTwnSWtZdhze6Qu",
  "key16": "4ab7Fyyc27hp4ihgHi3exuFJSjdkWMSp7fHZKfRMDb1voguS259RSiRX1aKepucqYbxw4UEdqAjbDyPQbCKqPgnB",
  "key17": "2m1meziPc5qAiHVfs23jaTpTECj5S1MHmiTw8H2JyxZRo8vpXALX4snWnCwqcbuBDbVByHYjc5oESD16CZG7RNzF",
  "key18": "39MRX3jqwN6zzBwje2Lqd1VRd7o8pfsoExYnSiY2uY7EEqiYpd3vfuqs3grJErUgCjSmcKzGhaeTwpcXm78gWTn1",
  "key19": "4mMBWkA94vL99zqU1KPvXGg15MUJCnPzkdcPztasbkDjw5CQbt4HZ1cVa8GVH7QRkq8Xa1AjQ987xjVKJ8Yu7Goc",
  "key20": "3RsuDa8n9Jp9JCeoUagLZumjQs1DW1PNCjmzFhV2QameWw3YKPY54KSByWaAGwUNNtYhygx1RFr398f6jS51W86f",
  "key21": "xL6SQN7Cu4o8dbco2ywUPrzXijiUGgcMKGDEE9EZT2VSpAEwn5KvKTjh86NXMFeaMqSQYk9L7FgWnkJazcLNXiz",
  "key22": "4ajDecY9k3PRU3MxBmdzKzmAWsFU5GgoDUkF3Laj2A6ji5nbu2kEeeWgio25HekmK2uwpdyMNSRBbWJ3CWhaPBVv",
  "key23": "3KSnTsyVmropaTRVhpczdke427HTMmPEv1KaMqyE3X2c4av7mLCuKoabg9s46x19ShX52sFqj6PeUM1MN4aPmTXk",
  "key24": "5QxqYjptszH9RFgnD6sYwhgVVz7MADBrwCfS5HGKvkwMNH9QRPaTY4XUsnA5YQspDorjD5tTNH9fNNVpKrUvC2Js",
  "key25": "3ESZ2Bkbwh517J7yFfMZibtvcVCMwWh9QP1jxNiZxPMjr6LMCxFpursnoyN6qJQXu5ZUpzafkKpvfUDTAAFb2b74",
  "key26": "vnEASSWcfi6A6oWCxHmrNeUBUgRbn3dTJ9vN6XXnwY2aVLjnjWwZv6hLGcmU4tGow8TaffhhpgomVKmmWrJVKFr",
  "key27": "ghi5wwvQnENincyVe2rqLgzD1EAw73CUt6drKhsNsxtmNHr6q1kcy1ZT3Bc1yTCnEieZwQusPpbR38ZLRC16nce",
  "key28": "61JZAeVqU1qDryBvSVzcBqVwkdMBmjotiZA2c6NMnRbHMXZ2zs9vDp5sLSgH6Cm6eHyG2QpMHNSYUfygopySbAuq",
  "key29": "53APYPFyLktBqc9rEPvWQ6rSQAMjL9HsHqdbmaZxPS9m2senrXbempShJcACV2G9iU4Xe3T1mj9U95g3Bpkorh13",
  "key30": "4UGBYCD4HUjKb8KwCqmdfDTkLiiiPnuuveu8e6mL3QGWyotnJpQnHVi5LGub18ZVSnsaxf2nuRK2hV91DZhfuZ5n",
  "key31": "qgZ137HMxHjU5gLbDFVgbuZzVqyW2ota92uZkWYbcunWN9tmUzfAPuRkVFe7AVtamnoNZPD1tgaC3B79HA7g79N",
  "key32": "2azLiBizRLxcsN11svW11tnRP2yrEjkrgdskwCLvWEM3zEhL9DyLXVFGpFhnWTQ5GsrfscJEQCqmKVEE49MHey1b",
  "key33": "21tjBFsfXeKJQzABJKenV1MXKZL2QYgWvUAuiG8Sce2taezfSjPcHFAZr3qr9eRVZShqiJSWudtxLKa6tnW9aJwG",
  "key34": "u4SxBbzUr5thdW98sJo4vXWTobNvnNs12zwmMLCY3uAe5kQDHXpj2CXjJZgqfnM9m3Kp5Yuf7kTgFvHBdZ2kosw",
  "key35": "3e1hW9gb4yCnvoqKLo2v9hK4UzbiQTwP9pC9DbD5qK8EyJFheoF1pHfWLS3iAioMVc3UWeQAxv813EGdf8ftZzXi",
  "key36": "2B4JUNX9CYNbAYycHfuo3GrsCHju639Ho4bJnWobbVw3wYUwD5nYSe2CoaZ15sRRcYuxznLkA2jgt74HfJbrQk1S",
  "key37": "5iSWr4YoZWWvus7SfgpQxAHAvFR8UQQxGBQFoMwJcwAj576P7HULkG5iEhNFU2Zhov8rkrc9k4mrWPTRXCBoezpD",
  "key38": "4pZFMK5REQ7zX9cnK24Uupgg6D86koLMjy898PyyKk8znQdsko5EnTfKWc2KPe4JpTJneehJveYPpZ3DrdtDrHQc",
  "key39": "2PfLpYSNZPsvnEv2pMw25LwZmf77xa4wy1QfkwZEMunrJriDM7o4gkLHRzbe3UbVv51kYQhinA2qjH2uPBfqdTvC",
  "key40": "64RVSmGyQKPeeJuLBsjgb7Ryb6Lf8Wwi7m6LRqir14ut5JyfqWgGzkoLSZDfkYHYsVYLjwpuopxCQe3xAef6fNjF",
  "key41": "5ARYAemkpyoHuB48ZiB9eE4qCjSeHqV5Ys1Z4Bff8fcAoiL4f5ATZMdhA3bUFNyjxFhU6taucJ5J4j6kdcQEVTbS",
  "key42": "2Qw9EQA8miAKfT73sTgFMc9iBrPHYJb6h61zE5TpYvJPx67YJEcsEejap36XA7qLG896F9VvnGV8EsQnqatFedHx",
  "key43": "5NoP95d6BTn3hd61xwJKMsnxpyG9cmhTjQWSgyDfvaroTRt1qdVdMXio6R5zUgDPYrtZFkyXsn5k1LKQxQoLWefS"
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
