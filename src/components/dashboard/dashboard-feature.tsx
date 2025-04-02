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
    "QWZpnHYsUTyjxEf1NJqJxPdJq8prBy3JPjxFgvHrAAMawnyCWXHGeKLC2Pbh3nLnNUf44B86hawcxghTuuSRj9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mUiM6rFvXTnkZWqUSWxHHf6a6S2NL8XeY4QXi3euWWGkc3pGjFGKBUKpij4EF3eQNEHy1Mnfj9YWaabmTEFcyFS",
  "key1": "4cRmzrnZmFcsLUywVVyUQXt7gSxdKWFQ8Z5ayXvg5wXXeHhGXJKfzdTjR8b575bqLRZ6Gw6ga2P3ZRA8ApBMELCA",
  "key2": "4AjKDhyhppUB2EHDsUyP7qVGMMVjVEDNQtNfcaf5AMx8vqbGzbeGj9MaWAKyDKpEYGsC41WwGwmYCkoGbzdd5rd6",
  "key3": "593bNSQUdMgDnerdi7fhu5st2nGHyX2sNmvezHsmdNfuUqwDf17C3BmWDm9wY1qsSf9dERxsThQ8pDd2UhQUpCM",
  "key4": "vo6YjfxzhzkmHm1iTqMvd7etoaTiFXsCF81qGrQZgkr8e2Hyt2jx4xQRUd51A6wJPAXENB7htEsMrhSnLTz61Df",
  "key5": "25MQtGavDiWpScm4R82nuk5U9fVnAjS2dydqPnrDDPZ3eteZLRvWgp7xj7DFGMEztqHixevpPGa4DRXPsdm3zDLR",
  "key6": "3YSyxoD162XsnNSfWqSJDDDTGTgfiUr1H1c5aPLAkxRJ9TBrXLy3hysCPZ4S5zneKCGUw31s48zRC7hrY1c83cHt",
  "key7": "awWGZ6YXLxLA3vJ5FkSkGdqMmtPMUD2wz5BE9QtuZyWSZPj3Vs4yT3X7sqJcs5uKydXFjBYHfiffR3fZJmeP6b2",
  "key8": "44yfjZNQbeiWS56oVeEpY8rhbtooGGCGxBFftL8mQE16jmehxF96ace8k7bmGjevw1NpvJ6vZLPBnbfC6aLYVbkn",
  "key9": "5vbZxND3iP6wF9jCPptXQBTfpBYR8HHJDV4q3548FhXkyVN698ajXDtBvc9qCrbVZn9Q3LxVxniidRWB562nsnd",
  "key10": "3khHRnsoTRugV9u7YCYpCfCTfzVshWQfCS34FFnb4niPDCw7wt3pX6Yw3Qy2komg3Hi3siqm6Ly1KaPBQLmLhUAV",
  "key11": "2URCPHnofFLsCTRHki2w7TaDytetaASovAQfC2ddDDFAf1bJ4uz5DWnBQf6MBSPnNA1dpT3aPCQnhfaQbk9UAhMW",
  "key12": "3xRKdzAWgLv32wAym82qyyT4Zb3L7nPuqjfpmGGLyajNnttHWomF8TQdzWmvWLC4gNQN8MH2fqbqPvB9r1woSHA9",
  "key13": "4beiQHeKoUfTNbc2HYCtvzMRxcP6Ss3VEzTvsL31QeAu29fgdbweozZm4d6QSsf19qEXScvEyChfCHW1VUHfRakG",
  "key14": "2JnoArrSKktFY8GjrLkTqZkw8KoWBFMEVHPXxSQcK24wrqqT1AScEJGp6bvAUE7ewi16ABaK7uHka9Y4n79YJQiB",
  "key15": "4Csb2bWC3xNCkZRStZjdMXjFGyHezETGpKwLDQM1fjHG8kW83wUtxRFundHPntQKhM8wyDvPgfMYdRM3VAYfrYrs",
  "key16": "5erTJ4Uh9CebABWjhcRzB52JSbTymkDrao8HNHnmPTjSbEwAWnpYwYH7YdCcHWXXt7cgE6a5Hgvq1RURWQ5PZy7q",
  "key17": "22kGytEBAGK67Gq3ufZHo1cEoyHKZ6EWdtZRMx9LUYTiN6R3ys2SedYTQPhoU38XMLewAZaZPAFiG6GRzAE9WVuV",
  "key18": "4ufULhX2zxk12qZNojN1KLpMA3vyn7yNApxzJ1MH3Cbmc1Bmo2QMct9FmH4gFXR1XvywkbVEnUK4Uv9rjTbDVPSn",
  "key19": "5xRovarwPcYWhjQQ79Y4q4P9xtWyiDJ4KPhuDzx5u8eLiPmX947PG8DmuWCqwVXW6ZvJDojQPKzPpfDfdy37UdPz",
  "key20": "4DmUKY2vJBsFuGg69oEkjwnaoSSH52fnEESo3N3PNYZ9VNsA34FVT4exLXpjpjVS476BnZoUKVxh8YDtFq482LA",
  "key21": "4jGsGVTgymb4FfHpjjKci4XyNZ71DohBR4LZDVBVNiKNmFTJCXZX5uU112UykSUhz3cspkaNHGgT55dzSygyKfZr",
  "key22": "5mSZMSkHha7UA9YD7yRXuz5wBzFmM7Sbm9YCw4rwXhXJ33ud1sKQDCUhXwahm4yTSHwWTzELptAmwKDYiTvSoFmG",
  "key23": "2qs5w8hYB4zvaLXNYuZCZgNiGuUwMTJXaHGS4MDA8F4magyAv6rseM6hQjgDCY58auNkr2kbugK5ic6pFnebRnU1",
  "key24": "aeZhxRjK549Th4T89fLYu68g2zjdKE8FsSznJ8jqAy9VsAcAuqpnDXFojkM9aNS5iFWcwSLAy18UGeM8X2gUxnw",
  "key25": "3hdT93EYgmF7z8c5XAGtJeqySNAggUS3WNsinWa25SJQANnCdjd2T8R1AoYvHkpBKZ8nmabQibLhvJgFpTuJNVD6",
  "key26": "3XpUiZzHaovfxqr8QZc3Nb1aHRct7WDBYn1Cv5rWLUxur3NDg5gV8MbqGVWP9Ahx5XQCPKKdbxYXQUpZUCrShExP",
  "key27": "sZjnavHffNB95d7tpTrVXPxx3nqXrANe3XTsE6com6JzaqgzbiY2N7KoXuBm75upTwoQJCM14RSd5sB3DxhSe8E",
  "key28": "3nDTjAbjuWhfDWKeV1P6cvgM8jWRqc6BsR3VJ5u2d2aNcWLAyHs2R6Lud75PSEFXYfhq9ostf2cNXdccv1oiokrC",
  "key29": "4U9Z5d6qfBqaVQUQuMzv21g6Nvx5fRSeWLgBEakg1k48xbrEQuMRDsrfCPbDcpVTzoWy9zYJ4asdKevuQArV8VSu",
  "key30": "2QCdawd8ZALkbwkzUAGSwtjb8crt3nzMPSMyFBbpx3dtzCkqnUDCYZzWz5qYxKreJzyvsyYJZpEYqKY53SUsVk1g",
  "key31": "2Dte8C9GN5cpLW4YszbMPsor5zGeGqqtjkXkLSaVzA9NY9F14hzRe89GPx5XxYvZiZKaBEF9Bbhh2AvGixXkiL9L",
  "key32": "JzJqdK8DtFNdFsKGLtnPFVYzuyne761rixScUWfvY3XMXG5YDskSvD38b1StnQYwUhxgRK1QujDFBNmexa7TUCA",
  "key33": "4ygvpbBUQ7YcExEfXV24fDV4tAyKeDXGYw4bkybcEyR6YYZgEZfAiEzwdZfzTTjskeoayyweTAMugu9XrrqAU9A2",
  "key34": "zVJRskDNf244KxiRXVwi1xhNQPheobLRnBUaFbbRY2Z6oruoVWev6LpHLePgB9pwY74q6bYhRsojHt6ZVNjq6zi",
  "key35": "4GAyud63rfJPNj3s9bmDNi9QV85ksoMkrzXdwyBGJWp13zkDSzW2uZZVJveCWP1bHHMjWPm7aHr8XqeqUrTV1Ncw",
  "key36": "3obSZLJLtWPxV9nEa7thJJ9qHYRWohPahZ5aDZyFYiZ6EMxcj1RWF4KxqivMnHZEUqTcL4CDvWaT37Pd1KVkBqLR",
  "key37": "SPhtaavPW7DBHzUrTqnQySwbCG1hb8BJRPW3CsjkSRpk4ApnWHRwGMLQduprG5kViYw4D2wH5HgydWGoUy8sMH6",
  "key38": "3qZvn9mSCKEdUohC1P12J1CCnNwwdPnou43SKQAb4bxFpfomGCqj73azDbJpMDwgwqjJgEZ2VKsFS3G8HrVxMt4L",
  "key39": "2ucCvD8hREpm7BmKULLJsEwR95TjS6Sga6QwVuYyWuNttP8hgEH7Z5rTf5d8P7k16DjdGepBoRj6Z9WXdWuw9kZx",
  "key40": "32hbZUz7uv7wrXniHEVVKyhpbfnJVrnxooSr1EdEQFXsT3KigroubMqMFkEpYdVVRcfmW4VNpATAYDLzL1DNbntL",
  "key41": "gjrk9SWcuJtGqACgnzud4JNutwRBgvgXvoEukGQpD5YxUqzmJWCRwhT5aCfmJDShfsaqPmWHjsagLhf8Mkjz6ex",
  "key42": "4CErP8EcLUjkNAZkhCUvddMQSasQ4wxiJpsMY8BmbRPKzQL5BHUW3P4gkhrWvNN5ot4nt4psF7hrAkhBoSHn81CZ",
  "key43": "5JNietnZuZuEBKbQ4pXYubYgznWbXhEEajjKrypYHo6g29EwxFTp45TJK3K2TpSpojZKnXCYFbCWiuoL8c1ZZ8pN",
  "key44": "5Tv9jtZ9hHjmPAvSsWZrSPTYhNo4DkryXYxvzdxvV9DZWmTig9U3sNNtHcmVfkTKQKr3qbwzqYj8Nnmsg1ZKQLYC",
  "key45": "3ESt6LqbSGK8ajAT8pozvrK6XSkGg7kcMqEVt8cpyYDby3sjhoGKRfe3n8cMwFrW2fyWeuBh8h38tNJVoQJPzZo1",
  "key46": "66BputWD1o2nH9cPyRcUdVhmVfp7d7P6Jj5YbCKtHuE1dBEXZhuCvVkY1YCsuFnp4SyZ8pYFsBpjJxoQcC35hokS"
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
