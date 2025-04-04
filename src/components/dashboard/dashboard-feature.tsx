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
    "5WwHwBjiFjWuR6Ef88vRSUQuop44gTKNaDqZUaDM5h2FqsRCk1cMoYAbEMmTRraZdiVcZkmJnLZi4RMBdJKtwduR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UwqKoZFuYk7KiFVBQnz6XiPrHS9DNAqxYffMc28hhUXF1RTxtsswukwCEf5eso8zFTboTuW18hrqMPEFHwChgTK",
  "key1": "mH7n2CfY1WU4LFHZo9Pz3X4Tf9MSabMTHNRqRq127Y9WTzi7aNaz2LNTPG2erSyJT1F5vivknAVTFwGqGFLcH4f",
  "key2": "44NMCbtq2tTCo35Zw3CGezjMbY7fg1gYbzMoeqQyKM6FM3fGUzyUbKLSxP2eEwPxvo9yJ1c4nTKzp9435aCrTrSw",
  "key3": "APUsoJrAt5vfmfd1aU7HmxdLZG6CeCupmueXxSQRa2XwdoqmctG73TPQ8JWd8hRPcD3rs9B3q6zjzQ47gF6zfzr",
  "key4": "2j6XC7ra9kWmJJzzRc94jZhcjG3pchvRkUAaSAibU2VwBNVG4KhbVDD4ZaMjYtK16FZgVYnUojqjAWrShsZTBpNX",
  "key5": "Ye5XdNCm9UoRM1q7ZSLZ9CAsnb6sxHKA5fCdLRoy4kyYTjRwcN2yJBgmJnKFW2N8DPCZPRM2wdDbGL3zLCAApNy",
  "key6": "5ZDpVswtDBsxKKt4T6m8p6Wm2yWGvBNhNtteCuZtN4L4QDacqsq3erbt2sPJ6LvkmEfke8E7ByshmF7GDP8xezCi",
  "key7": "4aSGCK5pmPj4VrkghCVqdd5ou5UdRA4CxMoVvPnRpAbsvBpdhaejtRPqvh3vPcFJNXFgsyNe31wTMfVfxf2cbJaF",
  "key8": "zB7en39VhF7RJrinHRx7vYhevgwJzV21QS8iQQgZBuSDgQAaWVPYrA7ykJpV8SfYQz86ifyaZiPZAt1JUMawa4u",
  "key9": "2KFHRB8viNm8okv3EqkdofJ7pm3DNoKtRKTG6bNvukw1iVZDBVvLXe8ULW6YY8nyxDu8yc4s5sd4Kgbm9fTXunUr",
  "key10": "2HnuaVXQL77HVn8e8w298ndtgb6TxpzuJDwdLgbawbWo2BCG5qwvTb8aLDpNj9zq7GgpzgXNVMcBVeMCgUiQD7g",
  "key11": "3b9zD5FJ5QSLCWVoQT4rZGvVbZw717cR4roY5616QayCE62djPWmSDv13weFvwtMUDfPnuXPCEPUQrjCPRyN3VKe",
  "key12": "SM4uhbEcsMARJNkAfbhp6xxrq6V6a6HeafNtM4eB78TBJ3ibi66XkKTif5bN4XUhidYneDgjL7zcHQNP3BPS9ba",
  "key13": "3xYJtSZPdMKoJv9pjwzEZJYgQgP8HPSB9bbnzucnDrSPw2JhNNi32iy3nUL1UStpW2eibJWJ9FJhbojE4TAPq481",
  "key14": "65D147rCbjQEM4tEz24nKPtgh7p24qdJtspVxskSjHZSpvdNoV6mK7GfDMuq37pZiLcbrUpg8RDfcxqYNXsRMtGX",
  "key15": "43G6uz9BY6poxQi3QLDJdYGu1WKfBmEcnDntVxEdPbyyAmw44HsDFdHWijn2QuBpbue5yrGpz8hJ9v7AbFmp7aDo",
  "key16": "2Z8moRDg5kaQjEqwuugYtPzdCvGb4D5yhorWFBWBRkQfPkzUSQq6KPScvusFr13rpT8NzLrKee479RJo6HQVZGbm",
  "key17": "3hUL4LhPQ5bhPSTFMNYxtiVwtu8FbPsVd5UzqH8C5CMf86HyeXx8Bk8qyWBZnXdXvSvm6JJ49jvpvovye1jpN617",
  "key18": "4ypmAQCUXCRf4N5nev9nkmv8TzQPzKCLtUm83sLwc9zSixTTJmAA24SJwFurwzXtP5G9ZHdpUHugfdwv53G9CdrF",
  "key19": "3BwYFU3XhfkNYSX4PzmaSE1k8otUSqUYPMYUyCXiMaEcwyWVd7h6rCPnw6AgWGqCF4u6TBu4kwKw1BTLyK32KYWZ",
  "key20": "2areDfprP6ibZNn2yAZugx8gzzgu92xHYTA3Ym9GMQcgABderXAw4J3qUZm7Hz7VazcLdjq5NbR1H1VdEDxiE2da",
  "key21": "5skQvuExynMMRjUZubqFtm7SLT7XisPSfdXdhTHJ8owBLzFqB2riUdTggtVp2JJc7c86Gi2mL6tBnJXSFyn95HbQ",
  "key22": "5mFa7kJ9Xr2sqD2MYKsV7pz4CptRuJtmXXuwFGWssTNfBKMJDGyiP1t8wDd4hHQ31orG4mEoHJBCfvvTPFW69L7e",
  "key23": "5mUUTq6JmEN9BcWqop5324wkNnge6cUnVtmhJmhP2g3b6jKyeT1BtA1rMBaF9YGk4kuR8FXy6KrRGBe9r2k3sp6G",
  "key24": "38j4n89zBgtVJQigVXKWeetnwMidtnDCAtDZX629t9wdLjVRe1Wb4J7MyL1iHyXkipBfsax5WtoAjGciD7h6YkDo",
  "key25": "27Vxjm7utGKCeb8vXaS7sPN2sNCuZNA3oAH1UsZd7mEhdMwUJj75dTjE1vBSzoec6szBtTZixJBzCMX2gqm3ZCSq",
  "key26": "5rya1XeyFLwajBRgbD9627q6ZqvZZEv4jAH2DDPMviSJPwWfavukYeF5J58odPUR3CyV7CLGsm2WzpHm4ojnEMRj",
  "key27": "5RN3metcN8LhqmnVgRkGwnQYfuf1rKEbH1TiA79Qq46wwo9LCkm9fnMQWFXgHrLkVBWDis99yuRMuSy2BBjtdYR8",
  "key28": "4me4fxM2tPrY5LUq818ifYvWTxXhoA5ws771t1rVXWVHJ3soJYmzzDbuUfp2vZDb7wvJrBhrX2nWxKXeHcaygs8E",
  "key29": "258uoMTfFU5smPNJfT9qh7D9tbC2uGVVdEUQPb64A27GRPpWdXtU6vcukpCVcC9b63YmBFJ6y48qASub4Z1Wfxs1",
  "key30": "5eSGqhAvLzC1dFJq3i7r3ioaUWScAm3BsA8zKtgvC8VN1p4hsKaLUKayAKdvjv3v27ParmW1MbbGwFyH2kp1dx2X",
  "key31": "5AyGNsmycR1PQG7qWmbKT8fQQ6B6731LZUi6LdvAnPCG9aepHmy8XkEkjg3jK8zrh77Qmzp3FHqBRixuC956m9h9",
  "key32": "4nddSpixnQgVr77GZpuxJ8EyRcjgdEvQkKcd2NuMupBxY6cyRVRexJLp1hhWLerB2iANKpeGgMMGHSHUWKqHfrqg",
  "key33": "4FspPCyok6FvzaryncX2JKBTtrvoNN9fbtEUx2t7czhEXS9sNcgL2T4thkcQsaQ7SokwR9zy9SK4vuYiBcnsi1tU",
  "key34": "vxo6e9QV6f7V9JSJf3cp7noZkpMaHmp3c2TQWKp2GnbYkunKw8NsFxfF6mAYeEBzYEyus7hLf4aRhrgeR6N6xP3",
  "key35": "55m1HpMrTLzyntXnk1bGBSbkYuNN7pzyeeya33tSqrcQzuL8n7gjVqAZkZ4yA3NgBLXYrUUcWBHGU1DBHKhJhe71",
  "key36": "2oUiHYsDSZVqaCx8XRBxySJViD3sKRDFvNpDoQ8r9b155gm6GwmZEs7aUSnanQS1uzVunHA44QEqCSMafzSg2Tfi",
  "key37": "4MX8oBeXJLPggAQhbtvsnMw4E3aS9jxUUK51Wo5wobyqFc7tnEUscFe9b7U6BMKLG9fwCksh5BNf1ysvr6yiFbn2",
  "key38": "488fYWMBSduAeGTQwf7AohfFwdxrgfuaivypePAk4j3NbU1JMLbikZjkhGLqywFu1TTg2VoJXJxDsRkqApaSeRPu",
  "key39": "3W736dZKYMuFjG9T4BGNfnYCmDZigVRv5xCbUnPeQM4KLoFw5kpiPhjVQbqC1FEFNS5itMuHdX91UB1gtfWxDTq4",
  "key40": "5zFrptkd6M1kSc46xfTJoh4fm5xFG1J5juBHV5jT8rv4aD5ACBGBQVHTw2L58qsofGf5M1skcKXw8bxTTxdHdrQf",
  "key41": "3sG14yKX2FuanCr3JngMgPmALYZ1PJGsYUBH6m1BGYPyGdtwmsCX3iop1Liir469qekynvjNLfKx7LHLbiDUP8xT"
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
