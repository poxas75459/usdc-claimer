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
    "3LYH8i8cjAZBdiRP4cic26z6FjvWi9b3x7NoJwBrv39swfnDdjFGmFNvrBp9ZXmqwwVGgLvw5Fw2LoECXwDAUd9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SJgofDzYNndbUSeaTYmCggRf1zJohYmu9qjKimpCgVXq9nmNLcLLPuxMrT358b8HxVJtd9koZ6H3qzuCvpkhPRB",
  "key1": "dDbHzEFbsCx5ayBouWhv9CvoEtKtKN1kH7RH7cz2gfVkgHyHdN5V6y1gzzFaPvYnBkUVKYGBCcQJ1gg6SkpXAu9",
  "key2": "4Yyn1w8MyzV6gjr34zgwBDExesESakbWuZCpFLqLrdwDow2nya713WjYWUDhjxxcfe1F4K1xuHUNuNRTrLwJkk7B",
  "key3": "2i6EzHpNJCUdKFsSciWaGseAuyNfpDjng2z1GE8i9dkPPMyFhrjFk2RKasquPZfXibCYfhAvrkNdFtr91VMUMsJ6",
  "key4": "4ARqkLqpZtJVDFVPJURcJoxmGF9AnbHe1G1qzcqbhBzCNnRmhyiSDL5DqEXw9fokoEbVrPTM7fasMVNBFP6mmzQ3",
  "key5": "4wSH3jCXzdoWUNiqYonNWCMtf4CqadUrwV3yBEZd2ZxvcZgr6zKZawcSTY7jgwi1Ger1NGPv8qg9PP92LLatUYkn",
  "key6": "3yvHtqw1Tn8GVFJg2cL3Qyz2crHHQn7xdcGzoK2MNog8FB6uRURYxeqYEQpeNMmkY2WLEWs6h8dYU53g15ZbsbfZ",
  "key7": "2M8yWHp37ecekVzqCBTFvqb1njmbQi8kqCkHjL6CQRXvS3ayEGtn9BzNK5FzaZKnrzEGRXRaLLwLYtMreXKzWgXs",
  "key8": "3wEUeBKnK8bGLkZr2V8PmDA51aNV6tyE19gtiodk8bzbs8xZ1b27BaDtFQE6YbsJ9RzXdTBT7zg8oc8kJEuAUS8B",
  "key9": "5z6KfTRPUSntPsKsGaTMdXYyP2ckkQv82wrkAqhdFUTq3ZFzthoak3VXnUwJqA5cWesQ1uZVNgKPikt2T759MvBT",
  "key10": "aunmW7LY9SujunRkacwqyLRs3rqYDgz4kTA9TkhcaMFAFdetHfpS6x6hBCZFdnJ2tQuWWYhZPsV5fxWazQt4P8L",
  "key11": "2b7AxsbN1UmdyzPkfuWWD3cSDaQbceZKNCBmVMCsFmh2jZ1HbuxWoVjXsAxYA4Uzj2kwhPEHHDCMGLBkPa8SQgnR",
  "key12": "3pah19eNignEWM7FH6mknJiqfpnHFEnB3QUtpgpTM66SsHcZcQGS8Knzh9tybmkagEdu81eLFDrAFikZyPmHGbm4",
  "key13": "3sxbZXQ5HxyLpRkUpkkhjVU9j337NiGsKdTivaj4MatvLtpsaLY8FXqhZZ6CKBDaRVAqLbW5g6iUuR1mP8pN9YxK",
  "key14": "2FwFLc4YUvLUtPtGARhzR2wxRRUUoEhWDr4BcdV2KXzVnBMjdVt5cJNw8u2V1sZ2Xog2bW2haN3ftT2nsSVmB6Wy",
  "key15": "75nc5D8EvEjUsCTvZkUsk18NidyoZESUCQMMJ5zMSN593acBbcGvNeehTDm1cJGe3Kke8DnKHzTE128WpsEQer6",
  "key16": "2AUdKfvtTZQ7iy2xs3RMhGRZkMbVwM5YwwnSADi4eZYG3hbpKb3oCoT3kJvzPrnhGFGCty5VMS6c1tshKkwxor1x",
  "key17": "4omr1BkWyzc6npnF2DrsKST2PQnhR3sMByP65Eom7QaLvnoghcLWEyxZHMHzi5p26Kbusv7hvWYmgwXsMy4pShah",
  "key18": "4g9n57xL7w7Et7rzSu5Wy9ouRHAxQ5pfwi9VGTCm1EqzTcZAcNxAQbqMu9rbRngn4Ns4vquCwaeC1UHs9U9gcwQj",
  "key19": "5ZiN3QsRqP8Unwhya2QwNAWXCLp4Ms4VYR1kww8fFLybKjSExEwE1LZzKxtH3bxnzZx5ySWeuajp8xVwcKeuN97z",
  "key20": "5FRhhpLpWQiideno6nsLMEpkjy6SpnzVe3feQUT4wNubYVZsQF8czWPnsZFCGJEfQVVZSA6uNjDZA5Vtz1556XYV",
  "key21": "4H1SDGj8HdsVnprztD5y3YzZHobosw7aT1qiJSHTAi4jhrg5tMkpXfMtvzDptmWdUtRQqPukdiEu3f6XTcQTztBr",
  "key22": "2fRMkZuMcpGfWhKZD47m2xFMuAeLPHGu9vhbuJ2eXBk5LTwMEgXjcQU2Y13U953RMLPBcu2zsHNoMS1Z9iwZjBnY",
  "key23": "3XThwXqPHyWpSxLe4qFGzN7u4J1GKKqhuy3UrputuprN4LzxNDhK3Qmc2DqQj6N6nNjcFXpDK6fxFrmcC4U5ak3p",
  "key24": "Rrgc1Lr6YDxzD5QUY4sByNeXhFDEKFDz7MutSnGCy7Gk69dBkCDRP9NYtXcEdMcp2DSnH4Mb6cPtEaLwqvUNYTT",
  "key25": "5hPMNW7PDeenwNcgJFaC1k9WqbNGNu4h3C6vFt9dqkFVH7mzKgFvNm14mQjJwg3Vabwt9VNGdAnU4sW49UTw2ZSL",
  "key26": "4Cr8S3jaEQn16CBc2Sd4UCMnDiyQC56e2wQTb6ZZumC56UE2Cve4deHrzNSy4mwKE555pNeKruzCx2S2gswV9HKX",
  "key27": "2gN5GyKaBqy5bTvXzeuf4KR2Apnqt8Umx3tT1VYPwnkHYP6frGUP783kBjMNAX2TNZLUJ6tRi2Phx2PMXEiJkEer",
  "key28": "61dKu82JzRTLkLrTsLTjCrz7YSTH7mzGNhSi3tUBbvjcYJXB94DdPZWkA5zofiqwC8M9NLd3Uen1c1Qpy4UXtxf9",
  "key29": "2NsrJPi6yAvzkwBWitKx9yGuhSsNFq8AdpipqdmG9MaLid4S5q1921xsRMmqv3m7iLygCwhec1M6Vqh16tfEZqb3",
  "key30": "HbjtAiC6AiZRuV5CXvTayuZJZj5ZQfm4xH9S8PMFdCBcQHDaDWwhnAHKXE6TDybsYTfXHi1YHf5TjxQ2PYhpXw5",
  "key31": "5Libya3z1CXQ8uDxeGNDmvqMwKo6R2jzUQkxJnajjFtgtZxEszQDvkbYV1PQnsoHycCXVktthksJpAt3xjtpQGt9",
  "key32": "4fNxMK7yZnjpAEPZyCs1FMSqDxxXfDnJfPbdGqyWTdL44PhhELWNJtdzdFoGriiDaNfNvBcZrgrXEbNZPj6DwLks",
  "key33": "3oc7dkVAPbe6PAkc221NKjCn9ae9AZDKGzrZTprxvTbNzdmbv58QjT3B6eJxDmauSsziERFwnbbwTMMwq3UAvRWf",
  "key34": "4MW9W1LzAiGaVSYs4zq4PGFLrfAqihm4b6gijQDtq9SdbfpKcTngUyFE13pc4A13ircqKipLBK2dL7wDdEnitVBW",
  "key35": "4hHoCoayX9CPCAQMGYa6knV2wkUp1AYuYQXvS3E5NU5A9XkcDzB6wurgUUZJP2oFmuxjscBPuoM9s3bf1ieTSDsk",
  "key36": "4kBaMsj5FH5hFkPM458s3Je7yYVmT5swVPYzCqUj1efyrVFwCVZupeM398vvZswpux9G3kc89PzoRvivYqVe88k8",
  "key37": "3H2TMFzguC76BZSyJSmNUFrfQYSHJJwEN4yhwkSKpnhnWSiaboP71xcFCkwuNv6RWJVp1K4o7HJnanPqvKv7NXhB",
  "key38": "5d1fuuXe9fNPLMLok8tMZKQMNJQCuG85wAayYyY7oAdcMZrxCXdmy72ACo7XwJ1WEitQptWcosHA542gHpVvg877",
  "key39": "62ZaBVv3GU1xDff6cKJZY8xrLojFu1dtPTpUcGGGhYeJp4VgzJsYtxv5f2QafudqbnFFpjqGeebqgKYYnwUA2zE6",
  "key40": "SbqCi5SDXt841DXbS2YwRqqiQDjp54wMobM41sPcbnqNikRHX7PDp7xkMzQvx29gqWiQsm3Dvn22vNXrsZ3QWWC",
  "key41": "4sEaarSynQvoiRo9v7aQmJfsetJN95VED4s3ztWnPVzWvHpY2jv5QCyfAXjfSJKgbfgqPMsfSzaPoGs1jP6izKZ5",
  "key42": "4R7Uceu811wMCNyeZgDPJoNZdNg7gXNcmCSew3zkpu9696KbGg1N3YKD3rGyeALgztmwfGEE18FjvDAinRmSSrqS",
  "key43": "4ErxyPsi2Qp4sWismSY4KzKdgLhUufvDzaAExjU7WM2xQMcvNMiPrZz2AcTnMjEnBLv797r8rBYfeT3fnfqWh9Ki",
  "key44": "3qthmLQrA3cX7hkBmwSkh1bt6sxcZFPGCnL6SvtgiSBgSinvWgj9krKo5nMmf2DSbPtjf18Yftc8Xo2yaWWL73h6"
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
