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
    "2mrrZsiskrfEYAbjWCnCi6gxCHgim79t7efwJGYzr1CVSPFw4v9g21cuNoZN2vfiV8a4cXfvDUmhSms73174WNei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GnA6yzUzEagLkf22hcnC2ZHwMK5vCkhQxtQgbSsRP3QQfx4segZ2ieAasnENFMiuppuBee1xwFrC8VeFrWvwzsE",
  "key1": "2iud9gYG1prsc8Q6E3Vq54v6RVeAhaSnYDWEwnygfwAggSt5bFBdoPqEAJK6DNv2Ci5wKunqAhYiQiZLfzrCgr3q",
  "key2": "3wm8egss65D3tF1wCaSrSruBqw8dwsMPDBSYQqCEGmLwxmdjz2rNvMdfYjWT9kEabZq9ZwfhgZoMMToLnUR6uQ93",
  "key3": "3J6VV1tGe6ZUyghidXjx6sAfJSH1j3aoM2k1mHWaLxhHqJtAyaVKH4oFLF27hhCUsMmzAudto5mwa9aN76SK6kbX",
  "key4": "27nLuM8CLGubumG5rcRYzVDZv5gc1zc9aLbdavFmchJPwDppsNrghu8bv6K8mdp4jSkDqk4braXzc2p4NbYtDHdk",
  "key5": "3o8tHXcyYg9UVBv32A3cJGixHKVWf1bQG1CM1kupdR9GWH8rc9FWJjQWEX92U6ASTXVpWP1BK9ByYHPiM8FDfBWH",
  "key6": "2N11Xd6Rrf4rJLVoXRwAmoFZXSdqXGRLP3j3rgai1XzWeQV2VCvz2E99VhqKun5ZmNpvYbTJBk4X6nEa5k67nJGD",
  "key7": "5VzaG5A8JEVZ8VUknNXEvKM4bGUD8sj3pnDq7pM9RZRYJK7yNV24WjCwDrsq3uspRSyhgKhi9EnRGh2BRWfrEPCC",
  "key8": "deNbCy62QrNzHr5GnZRRMKxvodzGGaRN4nVkT1gC8d3tx4T42uu1wKZKpU2DBLHaDhnPToQPxeEut8WeLTELziE",
  "key9": "4wPpmLaQf7BFCYRd8EqtiWu3FG85Xy8yd3xWBYjvgmhUePa6DqHpocZYfHmsz9AXEeVEyWtz2KHxKLLhCexQjGTU",
  "key10": "5ksNP8MyEKu6KNKp2M4EmYzBxyRZxffgqyXeN6bXGXQRtmYv5HKKbJCW3Suf3M2GJh6UxfpS1dSHpxjmjWVb9Pt",
  "key11": "dNwJafiM6m9h9N1r662de1ThkfVgcdGQLJ9HgfJtnJujBLphuTdH93g7nSScgtreKP5FUHEWU55MjGk4YdYgJz3",
  "key12": "5gyRpNpCpBhjEurAsVt8AtgbMDbCG5W7iE6GVhtazm5RzYN9oC97UBnzgA85nTE7cBQVinmDo9vEssLB7723XR7G",
  "key13": "viv9uq1VaX8Pw4k3FhTMQseVJjuuRGvYbPoDmWXgV2GDxhHoyWajeYcz7MK1mVHE4bbsxNCVs6KiMYcTupGtSCf",
  "key14": "57DkUU6UcCLYWpNdHJimJTo2m5qrm1Xf78XX31fSM1QUEnEY4sekVE4LfiCxZcKb3AFrzQtfrscHL969dq4Dcdvt",
  "key15": "4YDdwLAxKpD69AzibQD5MnbhuheoxNkDv69eouPvLfcvHvJHjAu36c1QGqfxxYQC8FGEj73TDwLK5hNmMtfhmdF5",
  "key16": "2U9kaxiWwxp7xuyW6mbWXKkYkJ4Dm7yuyEpQkQn6KgCBkYwqt1KUGnD57HhiGFQ3SmWbV5dyZpf2wtouyygAsiVh",
  "key17": "55VD3imJGB5asY5pjP1fxm5Zv2D6QFzcxY6gLxTa7DrKGjPy5P7Qydb3dc7Qf3yHBajpmV2SMkC55L7P1dNM8QKA",
  "key18": "BfCoq8dGjHFMdMNW6PXWnwNBsd2ijsXRfQw7tsvegdbd9yYC7QUYk3buDE9ByuuoRVJMApqoiiVNthRqQmKrzkw",
  "key19": "3QRDjuNqP7bt6TjA3DprjFnoo146gor8HjvxqxQUV3QRrwY1FCEPm7xDrETXdzZgreBv9KcoerHBoZY6Ri778SvQ",
  "key20": "3Da52hihyAEVFAULcyvk1EpWm5PgooDe9e2bStnNSrfTzcbrU6xRDcvYy8SBsajyNmHYqGv8wTda85y1nS6tX9HS",
  "key21": "3n9vphRT9jxZoGnPZYbnLeAT1uUw4AxmxDdjHF1BnUktfwBMEzqDEST1TdPEQHnJuwZEExz49fT46S8h8WvdF2w2",
  "key22": "2GGmaLDyzS6wHRVMF3BdaRqCcQAefXSVq4h236Wre4zEjwCyT32tvVngp3eVzkPvtJ2yHWdGdJLimQaFfLXSwaN7",
  "key23": "4q4ARNxNRc2L85n7sEJzTjwnE8Gt3tf3F2J1sDkQopqoHLanadk6qsQHe5uoFjDWzLT1uDtUK5ZZfCzYFEbQkbQd",
  "key24": "21TfWkrNyamcMiUm65jE6AxcmebHZ3unZP8GFDRjPBrzhM5bjt9fceVeDR1ieTv3mjZW3TdGf5DMVxGYQT5XbQZQ",
  "key25": "2pgvBanX9r2Trj7L5Zr9kyYmX5wuEc4Rt4oYSVSUZA3kSMA63kWKFhYhjdY367K98XA7UeZiXz8NS8axuC4wcSmZ",
  "key26": "3rLAnfuaByaAQSc5TBXXfhCaxrzg91RtatvVT7xv36WxVY36vodHaqZHAJrXDmdcMSbxWnugK9oFEXFMeuNmg6uM",
  "key27": "2Ae2JEkkiLNFPLJcdrm7QVQ5xKcnjbnV26pe89Y4hCDP1V86ZL2zsavBdHskka6HL5fjaUHV4bq5gtTHLuyikkbc",
  "key28": "2W6Gzv2bbnbw6pyZyNvppoCkFs8yVXpca1XBBo92TpC5ZTgZNAywmSCgWs4u5sLPtFc4SQYz1ye5JNx68NBpeGPB",
  "key29": "5nP6C4wYgqaaqDJ55ySTZrMWwzttm68RhjAmkiz5mQuYPBXxYijPJQHoQ9y8fEiJto3TvAG3vr6BffRX9hmWrEfd",
  "key30": "46W5YT69CDH2iVAjUaaejQa2z7pcep9GhcaK2Loc1fUYMEa9yn3go98jzyXzvGWykvdPcppdYrzpDe7EuEtCQBmF",
  "key31": "3MRq9C4Ye5UmJLaA9HDByavJn43QwNBUqp6X65a8mQcVWDbXwbrnjo6WzUH8zkfY4ypHokG41Y2i9NtvjXMfoqSL",
  "key32": "3ojSpB6DwmKqRuMhMrYai2ZoEzsuYWGbzsaoMdd5xXCeC2uDPNUMkKvGwMW5U3NLnqPXiwRGFZc31NRPUPKxEocP",
  "key33": "wEnzJwXZCLq3btH28ESu4YQnNzPWedhQCUqf4qCbZwS3sr2YjbSPziV4vTEBG8Q6cHapuRGeiKNv41LZrX1V9Lf",
  "key34": "4nZoo3KGK3K7cKbGxogJsLTdP5KgmsG7L3V8q2TiS16C9zPw296ECEM9da6Yvth5fUFSzQWJbX3nVDyv4m9WuhcJ",
  "key35": "4YGNsuNZiKzZAx5NJBQK8diuCJ9BEkQePJqxNzz6ftGfwQ1UPCz592xvyuNtPqXKtQzQU2wQKF2yBLoiQy6pQCH6",
  "key36": "5BfDWXABwjpDhbfXmtWRTCcn8fQd7T4ufkTs8MYDzjGGsagVy5KpUR62htfPjc4fxfYHPaWEwfNLQn1FqpD6hmnj",
  "key37": "2RQQ5JYdhVU5ELZ9WDMQLJSb3iE47BZ8V3dcRbszxcv52hXAvqxL2537dnGGTSRzuXJVfwA9JUHKkcQoXr3gntYM",
  "key38": "xhtpKGJrCA98DfZKa7mvDXiJyJRykgYbABQNPB3EEquRNbKEWE4pkMAr7r2CCsKFCFvbLE4wnbiEe7AWaT2LDqR",
  "key39": "3mTYQgCJpP3QqTEFJTGPjGSyLNhxhXfvDBHERbKMCserkmd7HruNKk8AQozUoZGTYXhQ9x5RFoDgWjdcFv9vcZr2",
  "key40": "4tA6mJnbYsc5S7TKZgoFJNGC6fC6LXoF792Kr8mhqwXfanJ7aD93JUL3jSuY3vDa2NDskGTPTanjUin2ozXf5cMw"
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
