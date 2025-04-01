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
    "4PE5imZo1FJ9o2yx2tVY9Pc7izRKmDCAAptbSbVgaPCWA75w1XkP3aJX3ehy8YY5LUMkGJz2vJnVDEVVruC5mE6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ALvGQYCLkuYpsd2SiMRyZCcySBZ4Aez82JFnsWMKqNzJTkaupJxyxUuxfT4tK7fexRYJYsGGoPQe3kverukgU5i",
  "key1": "3fm2eUqE5HtRaJnEdKs7JavJfSBkL2NwWGiNJYiBT7aooanRQvyNeTaHp8z282SqMhV2cQ1Q4Q3rQFcHUv7ZX2Ub",
  "key2": "2g8teeGn4jyfFdtQBYQMbRVSpYF6Lk1m6bthcajYjvxpjDzB98V5V86QjTpcfegPcHSrHYuypS24bVGn599oPUFn",
  "key3": "4qXEbEnxtvZbx34ES5MSf4ykYNHPkKSKvvjT8JXWacxKyAFvgtqwdx9JZzNTcRcs7EU5WDoNnJsRANr4rQ3y6nTe",
  "key4": "5pDCfYttyUJ39GesvFyUp1yB9PiJ1kPhAknJz82mBsJFqgKWSWuN88iKhMMkcKB4LoFWwvS3QuXkTLjmmSM7k44m",
  "key5": "2jee519j8kEZqSbuYuZBCjPUXoBq6xdDTZ8HphPbpk4JzqP42BwwSRZdX1iDPrWUE2mPxjHTYnEk1FfiM5BvURbm",
  "key6": "63Tq18aHTHLBicBHUD1uuefAgnaz79cKuXUwdT2jG42Geth2iqmUDvaUQ5P1oKEt94cyjbmPQiv3HvrcpnY2FLui",
  "key7": "3rckiquBXoZH1d6juBNeLMbCrCXBNyVMK4rerm5ZaeAc6ufwa96pyehjskXdfu4BjAnR5QkRuZ3crTCHWMYicBdj",
  "key8": "3AsNzdYWnMemSie4MH7h2zgDUhcfGZd4maa7eZhvdH7yLtsKqSir6UEBfhiVZNHKePwt1eNhLUS6Wfu7dpa7aFDH",
  "key9": "2W3rmKAQNZw9i2EWsZAR1b5EnQ5Lor4Sz6HC9i6qmTiNyieFmQn5XaruT2A53GcYiqbqdE7DTBarG1JpHg69pauc",
  "key10": "22H3dXeMkq55LvmnVueAVPWR1SPDJ87UCsewMkNw9RqxYuhvDkDxuHKRyF9SMrYrCEhXrZNsK55DohD3uVFr6dyN",
  "key11": "5R4wjz6zFnDA9ersAgDJizD9Ai7pXaextCYgRiDV9aTVFF2FybbAueAWHWAkNhaHqQLtDPauVqHwQ7fHfE9G3YG9",
  "key12": "5xvXcCdV8NbUjb4a6w2az7Dz9mw5oXgksnswPtQLHuPtEDApedoayLmnoMeG2AviMtvXtDE1Q4ULBqiu1J54uK4g",
  "key13": "AGrGQYpu6jHaqDCbgamhFgm3Qspu89u2vcyD7eoGcGxuH2JX7k82HJahiY3pqqJ3bVFt68e6Px64QHyWmeqrdG4",
  "key14": "2oS6zXGrdMsY7yCZmWzA7uByiU8uJZLXQKgHq3Sk7w7HtB1JZyhc1bXgTxMEGWxrLS8mUSiGyV9RcxoUvrLkrFZA",
  "key15": "3Gh2r4pv2ZehZWrcbzdRA72CdxJdLm5MRnTLoYoHznrMXMzxGUTqCpVbLMnYaEPHshcJAoL4uU9cJfbsjKZmk7XB",
  "key16": "38EHsWqytBTQ5cZqb3qyxJBaHjGLf82bZPdcfhY2hqKV4WodyFwA4ffYaEZUHkQ7zm3FkfMpGaEZMSBrY4Vd1Eik",
  "key17": "25CR8rd7tQSJfe1sLmoUEqkAftzBhNUsHrzTsQJfPLYjft6AA8odPZsA4Ffn8C3LfEabzjdxBvzRTZprgG2Vm6H4",
  "key18": "57jVD3MbTYQpdCB55WY5HmqKcKXNwsU6xXbToDCyzkBNnq8hiG5pX2gTcx7gxVK1LLJs4ob23fChK2J2e29A829y",
  "key19": "CZRY7BBSF9mYfBZh9gRZ7UGb9yA5j5gDff6LH1VwB8y9ShJUXyeyRw14ijs9fSZYQ8UwXkYoyD2HyCFRN6ZRivn",
  "key20": "2mKPwYHDLWQb48wNhEQX8N73VmiF6ACcN9PDp5WPucfLHxK4pYeBXU9WziFa5oUrMCiQsnqgGNNVVXtyzN37vwzq",
  "key21": "5eaotKCwwTuCq5tuP8vBjE78gKGPGtA1pEmxUCC5c8epvWsZ3ayHBqUkc26A1JVyVj1cRppZCNgskgNnHDTPYE5c",
  "key22": "4JCgTd5uRCH3c9Z3bf3FqGtYtUexfDxVuK5S3kYfME7eKjvQxhXFekdC5Ff8d5U61193GyCUUZX1jiDcn24Msh8z",
  "key23": "5bwjZUw4JoqMCsyAkmch2o1gGdHUYuLifb2zVyAFWz5sdbWzBYVA7Uccz4DyTtLo9dUzyv1SVfrzNX5qvTnU41w3",
  "key24": "29J94RiaGVqBgNvaWmPo7tzm2aMLQA451KmAYmou2Rt4TA6XPffWkapjMBoY9KrRgAVg8DftbVnqQuMVJc8kzb3y",
  "key25": "4G5c1sXPgXjELohRtvupX6KXcX7XD9RR9d2JyYRpfwGhwsB49D8fH2tB4WQUgK32ZrwVoPwwNDioow78MAMuKShd",
  "key26": "3ojbDK5qdYoFxYnz6DgbEMGrcEE55JUYcj9L8BDwxJmtHZkj95v8WKDD2XjWVbhTBJa1hVu972qiPXBwVCuogPmk",
  "key27": "3dyPhqCzUpYUdB463LNHVZyi74pBJohaqC5qn54KRmX7oZHyMGvfa7s6y992Qu9DE7fhgzJShmDEp3R3SnaAk2Z3"
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
