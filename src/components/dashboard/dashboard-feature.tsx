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
    "R3CbraP8ewvmTP9qsmQAgAjUqZyitVsL5YPLVwstpaJQ4TiSbovum8gAwtsbfbB8stFeY6Pdno6xNQevBgS28FC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47e1DvTyRtJfK5TiB9QoEDCcZiDgpbN9PcuKZM826ttVhmsgBsNTGmdWT5wnjPw6TDvDSQ8bt1c2oEDCoBm3GGD3",
  "key1": "4ivuUHaVUxi4kzReX2q5xuxneD7yHrQKCico5moR361uEj2Jsq5aB9dtgZmuK8WX6J1vycfxU4ZZ7gQmVdV4YtGc",
  "key2": "3mCpvcY4JshmztXpWLMvyLFnJUPHfjaPLPxLD8Sm5rpduGz5rPeA3vq33CrJACbEqgCyNCtsxVvVS1zHFK6n45Em",
  "key3": "mNjz3AdTYQ1ANyenMYoXgzZ4Z9FwQFQNAtiHuC9Kw9EjUAA9QY7xVmGF1FmPPGMPsQjD7X3cyDUWHxJM2jG8Zsc",
  "key4": "Ltmp96CcmjU2uNxLRsgmX4DMwLHHJBm2r8iLqJZxHAE2SBaAVWLrxyJiSEyNwZpnMZD7iDp5hXVu9KyKxD9Qu2Y",
  "key5": "po4j4rJCUHZJVX9QncQZ3JNfpTBH5i3godWLxtaY6ymvnfWy3mHETrtJpzKNSZfp3ZQZu7YdGRiad832n4ZWLMx",
  "key6": "5f6GJkk6VrAZ9PHv9svzWSfUMYx9iMjc5ktShexA9QNeLvS8ac8fM1S6MJNHRu5vW5uudsMEvPSdFxQ5u3nu6W1H",
  "key7": "4EdYn8csHRnmA8R34BgwpKszWgREVzHwxZVEQq9M16hqCaNoF53NCYJG11ta4KAdYXVJuWMGdccToqb1ZBe1xqkd",
  "key8": "5UeiDqcMPyVmFn7mkLoNBN8oM6u2QZJ2GsteQiKhLxMhQzQsXcs7S3yEdnrrLDscHjeLypai1nCM2vo3jCMiFSXU",
  "key9": "4fifxBSZ4PmN95A3avnV2fJrHbMDxiT2bBr9z8pK8cCyTi9rbvnMMkzzdiYdHqXxTnuGrhbPFBwpdtq3Ek9E5aHW",
  "key10": "5A8TtNJmu1jqof3mw6ZB39meDn2ZDNhjYXrLaX2EQyJ5xXfoLKuyH1JWRBa9MSefEM8sCeHQ7Unbv8LzsjKEE6i5",
  "key11": "Gq99cez83TcnPchLaQqtjkppeoJSwWiE5RLXAZazRbf3Mfa63nDkZgbQWZhPDrVCxZwP5KUKxELCaZ9B6kbmANg",
  "key12": "55tUbGSHuj4HqdBgjvBirYdmFwaGnhn9k5kB9fzy1bXPw7fa6yPKUtnJxgYwAfH8yQyLD1NmCkLBkHc9SkNn3jn8",
  "key13": "2poophQ3faZzjA8gJjqTVvrmPPf1sEXssyBfjGJgmAGQfxTtTym8ZhNizqjRmRZtLWz59SbXXAiBxH8opvZnmDL5",
  "key14": "3nkEqLh1pBVi2f9WVzsB1FnqXwqZMPuP9q2rnEX5oQq1trs851ksq3URHuJidwekMif8F7C5vi2Ao1svF1Vch4ta",
  "key15": "4cHHy8VwHzKtD83s4f4nycczCnDkcat1DeBMNjvkG9tMGbYNzqG3dBSznjsHmJujskNFFa3FKWzbEyJVtuTm8T1i",
  "key16": "2u1gYR1vrfwLiE9J7ijx6XDT4kr1j3F7WmmiMTMKoc1z3yPfsE9L8cXVQSgq6trfWueE9BC1tpyyw9um1TM6tBGf",
  "key17": "5fDCatieY17Qkcv8gdG1GwTuVtPFXBQ7G7J2nmBWZj7rr4H8UhTamxUFxzrhheYEGqMWqQF6nBTHqt4V9sQ7csPb",
  "key18": "482s5NV977GugBtWgcVGZLD8ToKRfF5hvaGTc98ki8vLqzytscEXvzhdJ4HiQDBv7jvcU7FXxLArvyvkXUC9MD2N",
  "key19": "bsoNturq6dpaTdPu7n71PdskcgtNtuRzCVzrfhPxTr4pTZzvCfkDBCa11E4XiWhjpHWUz9Qvszqoh4SpxC67DGR",
  "key20": "3q7K6WR4LCEvy1ZQPY15tPfbX2fCSJ1Pa7kq5CVHn8buQWy9C9wW8HTLDXre2hSNiqZNyC6EyPx4zbvpByU9FXvR",
  "key21": "5kNmtHuFemx1PhJK42x9tkvBS5CsmHP4hNMRcfhZgbvq6BBMTjjTZLc6vHknMefSphBfYaPUo8qiQGNzMwt7YmGo",
  "key22": "2W22Ks8B3YVAQveREwM6zugjh973j84ktpfwjSwdyzwW6aCMKeP3DacZFhdG6oBUbLa7HcqBD5qF1gvC46YkBv9Z",
  "key23": "4GRdWpzYLHd8EX1a2bdadfZmAWAQaWh9nzyMgND81MDtg5Ts4vV3Fug92YCNVzyFGPQpxnFSQGnFA152NSemvLta",
  "key24": "2uYqZg8tRb8UV1x7Psekhsc45G6DqdkqVgyqJsXPmrxV8naxfv9WscVpbzMbxgPRt8Gy4Z3JBvoFMWxXExf1wZCv",
  "key25": "2rPCjgx9AfpLc1H4kgp8WAexF4e4FzWoENGfvetgJDejpn3Bd8MgeRPwoJS5x841k8BEDBHTRHgunegqZLA1xVxB",
  "key26": "L6LHyKqNP6mLUTw9yWY7VyrqVj2qj1XYHFeBzpowansV9ZTpGEzYgbh4pWSZFrS62xvBNHCnfRADKJejciNjwKG",
  "key27": "weKRmem2k2LpfmdkjAywenR2pJM7dBxoHxc1Ub5JyUAn4RsYQiq9kvBRNtWxi21zSMViyEneyCCnRaCt2Pmptak",
  "key28": "2PMNcco9kWP9uzpmHCHgxagZpSYuE3LZVpi6PZZg2vqSudU2SzBbgbjZheD6byKfQ4KjQ4o4SCGoadoxt4XjAYR3",
  "key29": "2Qq3k7NEApGuGiKa3uJNeXLXZ2wEf1aVeMVVemcvMNJBXKdAVzMA7uTSwM7x2k47ia1vbHyZwsBmcnhN15mLJcEq",
  "key30": "25EZnxjZ23egVZCNepTi1sTyeWp2fDUY68mFbDAu44SWHAN76bZKgws78dE45w3md2mQPaT58Ny54FsJyKKVBMWL",
  "key31": "4W2xMfnGnwS5VdrZvJ9UGeZBjfiTaMziuRpmMRdgFAjn7rmU5PWQo2g1uSDWPHk9N8e6FTVYpbpZFRJv5HXGQGLb",
  "key32": "RRLzP7AJdB524iv2fHeLE82FUTnXHbQ4rMNdqtSasA3rivobVWt83qKVibsnhUPbwaZ8VhV94CyjUVzZWzgaqAW",
  "key33": "xegfAiyXZV1B72WLd7ZRjooWV62pWUWAcnbeX9MZCDrJNuNUZqWcL4PQtpUuSvYCDyxh3ndFwpC743BgDZZiLna",
  "key34": "3KoJbv2AJSaama48zXok9uzRWaRD1r1rX9hjBUkEjwCMdHi1hozDFYQFeffcGy7BHYFADd5pGudLiNpo3rY4Cx6N",
  "key35": "5wGjEfAcF47ti9QFXTWHXiFzi8W4u52Dm9xLh7f4s57Ja4t8aCGXw96LcUzoWc21hegn6wyw1iqxgmqmnbb4F2jp",
  "key36": "57EmgEvEXMbUUnQPrXt7wLGn5Cj6nU2VHr2j8cV5YYKbnc3rc5nEGdnvRi4vNwwNfSd4uKvLwuXik4wq6faP6yVD",
  "key37": "4fWRCCeT2CNe2nJmKpzY65WdREkw9rmUeURisHE1xqHNHKfYnM2mfDut1rD5Dj9g5xKkH1PhQUraZRaQ3YTgGR88",
  "key38": "3KvTau2DSU2PTH1oJyvfXHZvV9h9R6uzSDg9uTdJaotQCHPjC4g7eLMyt4EiQzrjHDs2n4wCgQvakisubBt8RQTg",
  "key39": "38yGiQRRZHYaMQP1Br6BrzK1x5wNkvrqx2C73QsGPueeJKNVyEBrqZA7TdWJwJVsGL1brWa9D9RY5CTKiq991UGF",
  "key40": "2g4xBhHkxtfocWiXBHi4bzkjP3CNLNE2cDWLYQt6v5rxuEv6osSCyoN6yqXrEU2K6WVpXMq2JxqNUfsV8jHA5hNc",
  "key41": "NAySCNe66dRsrktNVbLn1uA9SPVMyWpeHA6LKk4n2LuXeyVCstpe8dPh9B4phN2pnNkfbJDEB7aJPXmm89PHTbz",
  "key42": "4gX8PjQggjXaCDUQdxGr11DCTQ862nnSCpsqbaUNZS8jA3HfMb4EyAKPXNuiYJA3iKuzYabLfkHv6ecHjjDjVGdV",
  "key43": "2fDbhLMYbWgz6TH6LPGKx3AZxCQoNVH6FHCaBPzpJMveEaeuFFmmFrmTT1mjqm8GFc46B4iJF6t3vZ2H31Yz1wAJ",
  "key44": "2BaoQFcuSETYfhxPASzg3tRqaUPuSyhrqyKeRyQCYJSrxwt1AobfVebdj3GZqv1g5ta1Ucd6NFz9zrxgR5sgHvnZ",
  "key45": "5zYXTvmxm7VEbBuf5pfZwRXpun8sYnGekPqwWWHmDcKH9N5H8T2Fqdf3vwsdwpKhCq2xk312FwiYBpP2pYLDRsJ1",
  "key46": "3jNqeRs2BxjetTp6hP7pzfYjgXS7UNW2eX5CZWWV3Sbbg8H9jNCTSENyyUWDbJ16Ma1STwTi6X6T3b9dMad3HuDQ",
  "key47": "5P5KedVhyxTReZAvbxNvZ1RpH7gAyNTbY2qCV136pXco2zm4pDrjeVDH1DPwqMxLSpTpf28b7vZoM6WoqrbHmoEf",
  "key48": "5EQmc6a6J4uka2qREdoAULuDmBCPnMuVZzjkyrmAMGpuyj9PiujAafTNJQbKWgJpWosH5JaqrhHpNqfFHQnd8BV2",
  "key49": "4ZYebLPcqK4F2UmnNBuKHpg4kVwkfXqdZhr94RVFiEb7xW1fLaWdHd8WVyZdQaFd49EEBaES3pZ3gkzTJ54eby1C"
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
