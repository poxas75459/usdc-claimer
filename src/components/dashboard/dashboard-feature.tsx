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
    "3Ftnc99cRdSF73xp3Z9CAmZY8L1K7GkfHJdxkwQRPVusLQG4r4oFZxZNxfZDoio7mrcdqZcbSYqurZ6WgoXKCtMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "672PUSMtRpmAMmox5W1GBiXRnNEn3U4oVygYbnp6rk57ELoT8G3NBXFeKwSbYKJQZ3fQFZmnx5yCEXvtN6kuSWBd",
  "key1": "492WAD8qcitVbWDKWLEcRMen1BuceuDjzGZi23AHnyA94u5BLwdr279AycokbQynoyvhkWdQUavhVkTYPWNYGA27",
  "key2": "3Tig2wBPiQD8K2ksmY4Vm91zWstfFWT4HDtsp1GeF4uLeQBEgNCXm8KiknXP5TU2R6Lyr37etM2vqcSwi17PqVsB",
  "key3": "2mjzuiTt5eewQQCBGxNonS56bYgPMvNuJp3KvDwjD8noNMsh48xzz2EVug1V8WEa1JF7EpyCUhxqiJDorTy5XTvJ",
  "key4": "2Lsec8gRPNSrXjs1DocedFhFj36XJ1nxus1YLjM11HS3krVojFENMvcT3cAhyG55uSMy1eVBwggTKPMUXa9eKhPn",
  "key5": "36QWxtzEuguxRPTFdhQ7EceL1cY6XfZaMQA5mfaCb71KD5zEc4BRsY6HBY9wiXu8FZUdFMypzVEUUa9HX4SbMeq7",
  "key6": "5ewq4QmMEzQmiFuVUacnHdSZnS6894dyXPSbjHqS6CgMQWjbB8PL41DGqZqdVvesYJHC3Atq2RwLMejegZmifA9S",
  "key7": "4pnQeAXrMoUiJbPBXHcC1UAQuc6yQr7p4MWJ82HkJbKNPsr1sQvHn7BnQK7jAVNjXHLgVGmeXMntaWTb3Wjw8GgV",
  "key8": "66D1Ahw3F38eWtVz2qB99XKXg6XntxtmVkKMvgGG8z2jUsRQMcNyFYNYnHT4gMDMhap7KEJrioBvm3WuELojkP9R",
  "key9": "snmvoEccLvSGBCqRYtdtBVvbM8Hf2Nqsvo65ecvFLNfwFpvkQUPvTR2Dhg7DA3Tefim8bgMjMR4phUdRnjUaXxX",
  "key10": "3cfzGr2tHpCN8b3haVaV6CLccyeqHwv4NbEarC4oaW78DkuUnuwnTrKnDjFVtJvq82w2cJrrsDg9XHS34s9hs2EC",
  "key11": "5fYYUUpwQuNZkxy6GzrcwaNdCtH492JJsfWKtRW1VsnMx11jCNoLn1Bu2UAGaeDSyk5gcTzRiyZiieqeA767eSZm",
  "key12": "eeeThpE2acTE1F3N8hfgCFwYEXUZev8U4DxV1uK3wW1zJgTDegn6n8tNDFgr8HnQg65RxjMB8WJ7hYToDvdkTPh",
  "key13": "2osA8ku6aUWHp3L1QkLHcdgq1VzoquKvbnGravytXHEFdz9wucELctiPbrkqdzT2fof99Wo9CjYvrRZMXMHTqDSG",
  "key14": "4qajpV9tzWZpxMnhWfHtinS7RC1k7NmVDzV64Ls5fB5Aj5ScLhZZMPYju3iXJ2UZCVBN4bowQsnE5wzk8isiFoib",
  "key15": "5DmBX2qXykQiQUPoT9YeX2jWFPfqgJAEwdq81KPABWbJQvXTPYRXDZpr2KNmSgBsbM4zEoyZYRFs1B2uzaPKu5AB",
  "key16": "4U6P89JfTEuFFEbJoKRhkrkivb3KMwC4cL1r2WqNYbp9KfUJvBucMHthwoWVEnAog89BBaku6mbcWmXmH4nXFwrB",
  "key17": "4GPrWXZzEs8Mzhdfc71ENhJmiUdnvBzEm3a1mssksENyE9sryv66GcuQwTmuiG4ecfWRme39q5YdC9BsUW6VhAQe",
  "key18": "KvHctA18b1JzRXUHgo2umqZe4J7ZmCsE6wQYpjHpXvB5RKeALoWHi3cMgFSPWXmKBG3rkE9tcAHE938ujUwJVrB",
  "key19": "3SRvVuoYKti1qBnrWmJL9H4MPbjdD3fCjUWqfkM5UhXZ7nWdJW9BdFVyX2QTsxJHaNuZWrN4BZEewLXmhidGRdes",
  "key20": "5fdpb48Jnrsq1jBTdSPotpZKgoHZQs46GRKvVLrgm5fuDY9AN98V9o6b3pwf6q9UmHrtsX5A6QNvunGzajQbB4pc",
  "key21": "56UyrN5FzNc5Lx8YSaTQQ4scNb1nLcwz7DvWs3p3zDb7t9s7giuvjdqifEm3P6TTcXQcPDanZXEKUu65CAGooZWn",
  "key22": "5ts7srUL5afpWrkqQ7CwBszCdEb87b2FEwuKYmXsMcjtpqc5ncg12RpyftkRgdKEtEFJPY2e6gYYjAa1mobWx4Te",
  "key23": "xU7ZEvevRm6S2VCiS1mTRyFL1XomEdJA5kU94owxDbdFpbkcnV7o9gx7ZVLtybDFR9VkmEhJrPrEmLkVrk3Bf4B",
  "key24": "5KcJkM5PtETC97QUqdMLwwswHejX4YChsTUksmfBvdQxMWQaWym487muNoQGLpysWvGGgSYzJAWJH4L6vYiMgcc8",
  "key25": "3icxfQ2gXjDwh9mEqLS2SiS6dZgxwNhavXev9UTkvUrKEDaxuyvCpAtpgDeSziHNXrUcd1wvCEg8ZyB5AaKkdWFr",
  "key26": "2dQvm9QLecoPF6EZzo5JPGeJsKzhdHeT9zJu2KxBtMF4tyjH1oPRSj8AVr8SwZ3MP76gjSF4Fvf2LkAvDnoQkLft",
  "key27": "5NzZRdft5V5m6McCwAGtww2QKJBtskdvmG3voRt1o8oHZB136pqJL8wPwRDfdKpJDwC3c719zSvcNye1J948dWBN",
  "key28": "2bGWB3MYKLAenzUPXpuTEzkqVTk56WDbJcxGusJ58hTA2ZKxbrBfmCR9RM94UhFQGP8E3qpo3Aps6nMfkxMSxVx3",
  "key29": "4Fs6mj3JhS8EZLqaAQ5aZ2K3agnHVQS4PGgeNbNvZeCQBsT3HAKbTEi144KQ73hpw8MTeShyCjEcNGwH84aZ4oRY",
  "key30": "4k4M14ZMeTDkWPajYEEVzLaH21NMAcAxniMktkXixvHeHkeTcDbgKFuebfGpG7dB3mhBsjGmftV7QTKYazVa2tmc",
  "key31": "3nP7mUkZu3TKb3fm4V5FWHxvw3tQ5HDkTc5apnhCGm5EURy4w8fXiQXjiotWi1jcGEbpkHufcoBB28VGCYHJf3Vq",
  "key32": "4wd5bRnj2dJqiUn2xqCXnL43gR2X9Vu97ThFvmCNfokfiChd85HcFgtgKutVvwtw1vowZnFUmCgLBjmNxfm8w33G",
  "key33": "4Tw7eTZHypiE6dFX3zhiRQgL4Nd5Lf4p4qE1hXaS6oZFUZRyCeXeP4K7iCmLyjznLV22yga9FtLnX44XZdWNFA4g",
  "key34": "2kTjzvoNKjukHeDZFFLx726Qqeyb5NC6uyYbNqtdyL6hLkX7RrGFuirCGDx7LqsdrqrehaXVZXgu324QAya9gVEw",
  "key35": "XjmDEaBKcPKKzrBMDrfCQzHLtdcAjR6nfX4jvRsqiXQmGwUrKC2ZZ8vfKQ1AjVfyYzvo6NsubyXc7yvAnpD6dZE",
  "key36": "8P2ZMQEmX8qFv5qQVtPzJJ8vDCgb3DxWVo8CQTyS1t1qPCqXrpSPmFibSUiRsscuG2S3V3TGox9gB2VDimp77wA",
  "key37": "4MSFaEkjT2fhvdRJEqWWqnb5QQJrVK2mW68iVnPDCbWughFN7yHMThkvd9AAJjaVvAcJ69bQ8JRWhQ7SLhDTMaBv",
  "key38": "39bjkwg5zwWiuNEVre7rkwWuGciicWrJnVsF7RZwUX3wy9Z45GHM2KJGiqH6hT6ErDteSRfjmEao1v7yTYZ1vNEw",
  "key39": "q5n72SXcd3XDVbfrWYEjBUvj3oB1jmnNRdC84yRsbadrya4c4k7H2MSwNCPNBRwF1XZuC3WgLK81VE1mQbCp5wx",
  "key40": "3J3hJicGiUhJ8GWKhJggkgpeLGP7Z98VSmuU1x24F8cEcTknzZv9GDx4EsQuRdcXBjzbpCNJp22MKe3F66mt7mwk",
  "key41": "5MfoJbBjmeiTXND39BgajHrsySLZavgx1m6B3hHYBbAKY32vNcafpqjXcAhsrmgAFSyXVZZ6GWZtZ44jv5ZrYJti",
  "key42": "Ho6CGZhCRkgSZAzyqmzgE8rgCFqKMTMKs1pFyrPAF3trPkczwTT8qep9Xa27ukwS1uGBM7cuJu17XHKNpEWGPRr",
  "key43": "66z4kyNTzs6A4sGgjpq5pyD6C64oH2dVYaqnHjJWuVbNXMwpdNS6VhHQe6qS7HCPqoWyPiZNC3Sqi7fCLtNHLbi1",
  "key44": "58PYyWMEJdrBW94tQd7tbJy2hczxyXEBBYfgKRjyrpyVEn99WSrUc95E1HUwAMZspD7xL8c2wuUW4cxu1FHK7zAZ",
  "key45": "kGhoESKtS4LAUEsp5XurkxeuUxjgzC3wsYmCzEmkpXd4nLcX9qTyuyCWdqLgjUjgUndiH14GvXVw5SCyFQ2h426",
  "key46": "uikWEiaoQRM7DPpiA7feh8KCSuSYpmzW5cbs3WM5YpWioHVALYdfaQrixbFc7LGCDvD7xPVnBY3RUePCgao3V4v",
  "key47": "28aQdBhZXk1gqmvCqnocCEVffcWCeBYaiAUaGFKNuzPhMP8x69kWCgpoPfWo1ZsjykNuTSkRhGvQqveNcwFqL3tE",
  "key48": "5dJfzTzJN5vLg1Poopwy3UvSThF8NU3pMKntJLYhZLrazrjghXqFqDTXEqPvrYUEN8FfEKsytvwQtXE65CCWfxDF"
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
