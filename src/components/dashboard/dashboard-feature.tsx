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
    "uQJTKkxeh6nZANsXGHbMceio26j8hGKxtQUZE2r8SumKCbzCwUX2WrcRAnLM5gChrKZD8L3XoLfc61ioxFBSS5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zi27of5k2wfAKo8vw5UiJRSmBPAxyVN3LsYBADesGPbREXfWqbedcZaA6shGRkGm4shPLqognyhMyGoNRnPTtNv",
  "key1": "3Esna3R1LWCBqh8gQPh3P3kyNSJ5FfVFNkDjcoaBkQkEYUaHZbd9HqXX9PQZvG2M3vqbpkFFsj9BYnm3SgfTRxox",
  "key2": "3Pb4qXKZmj3QWpAaNSeXtVR5mcSATTu1LGP92xxQXVHvGZLj1JnosRqiSMf2ebPpWymLqKPwgTVGHSsL1dCz8U9f",
  "key3": "4aema2ouKDhR3gghfmKsosPT6NfYYT8dsBuYGQZWavEd25WyJaCEU9yDgaocBAjXHnHzAgELSE1JJ1bp37fmqVET",
  "key4": "2SDDDb9GmAUhDhkA42XjnkcH4t41TjpjNk25vDbN9vq5AuwvynWgGqP5HbLRzKQiFADWGpvtxB3kLSsYnbTLMfA6",
  "key5": "5CwkAZA36hYp513KEUy3vv1vfLdiKXBzCeRyh639fMcViJeav36oQhk97GaDK1R6EwMCwsAaGCqWJopWvxTJTpfy",
  "key6": "bJF3DhPTukjRtKBddrmXSdc8ZZcUpKuqtviXuj2GLSZWPGEzE8gny6jST11iKdR48dduFR6zi8CsAAmPgnkZSNk",
  "key7": "3gGjD9fnnJMMLH4QsWN9pVHHhgrC3bJ5Q979HjJ46MiuXf6wtvSX6zvVXfwEvV2ijVbssfNTnmrr4smsVNGAKbL4",
  "key8": "3YLXuR7Ww619zoUfVzfs4JwJdH3K8QK4rQPQvEK4xYCjAxpjGdmi688tCtTqkBaUKqgHQrgp8ihEQy2WhQ82mNod",
  "key9": "M77GWQqCiazqwctvmvqS5aaa3mF9169ND5cp5oiTXD7GKeZMgiQ2VFtFLGPEHAwdDvTZuSya4LVFwr6w7sFmDw8",
  "key10": "4xaNdgDi9AChJMdY8dknfFXLkRLMqDyuH2x1E7m4YRHYzDz4G6UUakwyCg8tq7vJjzjWgjRTCK8twXJPt8Rbwe2o",
  "key11": "3GgchskNxVNhnxJq2BViLUzin8GPmyP1ifiEBKocR8An2kU6QJtN1cDt1CKPVNpwvvBNsB11VbT7anMRgsoswsTD",
  "key12": "31r1SZwWRQ4ggiAnWzCJ3tUHVTj1fsyHjgzioHoeiydcmPoens65eQiu5TbQzfo2xbXwq6X42fERs7W47aK4RLbf",
  "key13": "4FZGdweqvi6A97PBtuou6qCZFNyQzm1pHd5v7GHUeKiQebrGCyPn2kMLCzMfyeVgZE2pDMkTcjHtpHkuiGwynCor",
  "key14": "5bycReGWHjKHu57rSzKsciViG8f8wJup15GTy7oJR5TvmUwacdbQUyV9mRrgsgckdGXDFJybCqpG24EZs8aXvCm3",
  "key15": "3oPor2b1KejF8RfnRrg5iWo1CRHi4EUrViCWwaNCof9e2pXYWAt1Si7r5yVmtQEbxJ4JmLrpgjC99ZHFdHLtWn24",
  "key16": "5tLDoCJJqEGcP1YB9AAWF9aaayjXbW5dbDqZfpdGewGQHYW18MNozn7PXeHKaKbJ76mUinZRWiu8j2LEUgzKvXw9",
  "key17": "52i39yqmh9MxnVEAuM58LDEpcAfGj52otVBwsLx5XtkRgzuoh7SFoxVqw8ifV9WsMFLzYEkg48XLYDncVocqzo53",
  "key18": "4h32BHMLDEYy4ZDswY2fQExqCGzMCe1yxzc5jByHmRB236Xy7Pj7p1g6qvbsRBGUr9u4N9Xv92W5sPAdwrCQ9gG6",
  "key19": "3TvYe3cjHXujhH1keWbBGzfm4xvvjRWqSAvrY5FeLqQU6mDhHrWKiKyCCa65YE5QFa2oZcp5zm79gsgQSzHmp5zq",
  "key20": "4RBzCpgJiGw47NAQK87WWCuNJYScjdN4jFqc2FJWTMWjEPNmLMhK45kBJ2G93AMNHwSWhJ2tmieBbGTiPSJCTTXG",
  "key21": "2AbwM5LhrqhZLiAYpbfEzhMQfZkfwJr7uKLQ5vx2JK5hPZSfzRyi9wHarhoJnvuxa8JBFhuwUe8ZTToZmqQ8wn2q",
  "key22": "67PEVMtXuXyAyBK8zoURytjBEmum4sUMXXt4UcbofXAx8Jaix6JUT8nHBJuugYtxuobV6UbNe92xsKvTvTjJ8rpi",
  "key23": "tBtM2ps4nsqpCvG5njgnHXu6bApQm3nM68CCDjcLHvJJrkxdWEdKwoskRTW8NJVou37XH9pKB94ptJ3qRPwEHA9",
  "key24": "2c7i9FovuZPGWFGJxCn43oZewec5PfAintj2sq82LMYVDpvW7vYQM1hCbmBjAc9KCaB2cwrfa35mmPkGnX9HUdYW",
  "key25": "4chMPZsfKsEmNWdkzFi4Y5uo3amLPYAkDbkBaXnaZ3BAXdrXQJCNPRe9rFPs4FNkYks9A2Dw8MsHc82mutkqzhWt",
  "key26": "2eY9riB79uZ6bKMmDbbbo6ty6yd9FvagkEayreko1B4DopnQi56bmU4aP3qgm5vVbMguDTF9JV4922HAFxUWFA79",
  "key27": "62Pwsf7LNz7ZWykY6TkCrC9JJTRDLWpydMYC99Syq1ULa4r14h7i1WqBHsbLWwgUuWzyyLNgAbqicFogWPoCp14d",
  "key28": "3QTLFdB9y3RJETDHRXcjeZUqy9mxe6V4GP4sD7znhzBUPZ9WZCbJ633FoetoWNkDEdZi7vRFGbu6K239NHS9ZYAW",
  "key29": "5skQPrXYeffsV5oi68CjD2r6SRGmyqAGUGt9AxjFLCaiuN1Sh1QdPEx3xqBR9bMUAnRUkwrVXDPDumBPB3BLTaMX",
  "key30": "63pqwZykFRf3ZfLaGiY3oCwcMMxMZsSRVWj71AKbUzZYhNL8k8KgFw2Yb4eH77HR6UTUaz1a4fm3KNU1Uokvkaxo",
  "key31": "Qb4XGpEiEK1MqR36SzPSckJHTaREMWpDhbisynrH1fRihdPCqaRxBE7a39AH96cqhGDSYkvQQwXU9RR9o5KemqQ",
  "key32": "45spMA2x82fU4j32visDTBty9rLFw8ooMjnHmf6phy9FeixhnXgqmJW7RqQP6uoa3WqYA7dwhXnosytbMBKZGs6e",
  "key33": "xcUtTHgt2RHsVEsHoXh8PLgZvQv9M3Ry7N4W2GemgMk8HVaqofLCX1yjxGcSELWWXvGyg6hVaZeGwuQ1NLqv7WM",
  "key34": "2yZEnJVZk2Vzx9iwM36KE1Dzdw2Td83RQZcNm69Wf8we9ZLi31eR2fx7S7PA5QZoZKcqy7zwH4KjPUJGu4RWUwGp",
  "key35": "DtbhSTbLgY8Wpc3tWJsTpwfVogXCRZ2FDdrFuMcjNnZTFVbz3X9NiZT8HdNZ1NjRfFXNCPZ9NW7pYEJZ2dFPwB5"
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
