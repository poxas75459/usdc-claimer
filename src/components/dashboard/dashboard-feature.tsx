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
    "SdBxiQv4DBSkVCkwDfgjRN5gKnFb2avRArpVaXepcKPkLqr7czuAU4bRBVAWiqfgX14uLUbPitZeVCE9bkmVom3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4JMc8syay4EscmRi5mn5QnoUvWiN6S7yPYz7nvEsiG9SydKCTzqWpNq6KGLNqmxUY5FfKrar7qan4r7A7jJDcL",
  "key1": "2Q4Zh464Ps2XDNxCG2BoPmQtJwSH7G3wBQNjQ2Wv7YiHRdQx6raL5ifWH5pH2FTAUE1uFQRur55jVwjozSo9sQ8Z",
  "key2": "2aF25U6a8ZjLF5d4d9TdrENiFwyKR4UtRiUufiMoj1ArzK2STb1ak1KDn4QZwADaAgehn2UukfUo2hnXafyGHNZU",
  "key3": "dn2P3DxywiPzMXhq5WscRSmsRpfPpFxakhKcum7s2wEqziKXdeLzSFJDwo4Fo35PhYxV1WHo3BB2ayeCC25n8F6",
  "key4": "2uLNhQcCbyExBoSEw9PNyQgxnwcU4H4RFWuLFuE2ZnKWNmzRPGjkRaqhyA2fnAbMCFatf5Xs24SswhfbDicJfsdh",
  "key5": "3rCKMna9CrxWN5qtk8WGw7vfMdUZmqRVbcC1ESJgsKwi93BSCXsBtqfK7Vm1wCvGzQbjVgtraA3wSHGM2Rg2BKF6",
  "key6": "k8W3YdYL6gZh7eua7MBHjGVQhS4dG6R3ChgCcS71u6YQeA8YTVWeZwichxKXzoTnbUZasyutfCt1d1sES2hY8m4",
  "key7": "LDewe5G8isiQHfwPvF3VeAyxCCFf1HwiHf3ZxygKi2r17Fe8nhfZRDyR5qchSEiM5MjzXytHryiMuZMeLGteMmh",
  "key8": "5fBLuGJmNkTZtJxb7JXmkci8KwKZ11KzJsiJ32yT66XGv1zAkgkbv8V4cDLsv4Ex7ttH5fiMWz9jjCf3WwAGqcDu",
  "key9": "LVvmzS1Jv6GYH967bvMnkA9PenztJZvMx2eGk3Qs9ChvRW46mumcF4finaqs9P8i9GwnmzMUoC2YBZFgsRpToo9",
  "key10": "3HhTaTBfx4YCAPB8VMqaCy8KY6e8n9WVdZFopCXR3WfGaRqhZyCcCzhymBvJmoSagyEMP1hyL7s8v1Vwma2kq7GB",
  "key11": "guXSzaCzBZXzrjgpGjRnwUh3X4nUkQd39bhYz8f6gX8YRos7dXY5VYLdbMmF23nKGDB8bi6PP1ec9Aao1UseKsc",
  "key12": "4rhmR5pVx4qFZ1UhKGvbGyg7kFaxqr58ajaRNBZ25KvTGL5wQSZk4FCeey1Y3kAxU5bfvAF5UgqfSdNjdQjHgCpA",
  "key13": "4YUKkjhXeAKaRKmNu5XG6pbYkbCHGTmu7Se2YNfappD2K8FFahzzFBQUYhvgjD1CkTHqH34NqJkDUgXrG5hqJfw8",
  "key14": "3LwQHaAwR7aJudcx6B2D6CGX936bxywxPxkEdAHfkuprDtC3qJNbmjZQXaqQWq7VH3nqAR8EK9ETyrJw7GxPV2bM",
  "key15": "2gVVxUQpR85N8XeKo7ezi4uuYtKk96eEyqDkmdeZHnTXiHS6fSDtdg36g5ceTWFsh9fVoktWacAQMCbVC1ZxZ4s8",
  "key16": "4kr5jseM7h2FbiL8LiL5veXR2QxpBq5odSUfiY1gU7N2Cht7yyt1d4NaQevwUfj55S6Q91Z2E3hS4tmPnbfktVnE",
  "key17": "3ZDuo2v1z6aU7SHSAPpwPcA9zqxux1SzQbGXACsZHZ4JsGdZm6SfzJYwgjhw7TqA71ywmGSYUyipkSbkGykrhVCm",
  "key18": "4sQ2dyM8hgagnNSDtxYqzbWyfjDjQezmJ33cNhofEZiMCnUFK6tcXo29VTSygVXZoQDrw5LEvdARhfeEc8Mjk2K3",
  "key19": "4sCj6m2TTxcRiSwsd5vjeNAUya5xvCiB6BNtq7R8x4fyuwPF9mZyrV5y1d15XrRrt9AhRG2dsctVqNLVPZ5A1hRx",
  "key20": "2vQzjqu5vXSatoWP8Cwks2L8naYuK1yLTt3P8CCWVcVsmV1HhqMHFqHiHj8mdZDHg5Fcdeh3eUrxt8vHfAMUGuMJ",
  "key21": "2aqsQ3WHWHd73w6wQi4xuomDBfQmadWd8LdWE8aTckWCpBrn53j3JNTM4EbsBycUWFiuNTGd3TSiqs5X22HMGTnS",
  "key22": "64xdbMsAJNwcSjZScbu2Rqn9UUvkCQyVTeVzUGdyY2dgpczUD2keWqHzbepnFyLj2Z1MczDydTjG6tQZZFtxrrHj",
  "key23": "5W7EzQiYpWNyhqzQBSvYkTLqWwqwgLugonjMBusM4NSpAeWPBzSH2jetRnAccWfghh7xuTrGff2NWuFKXdeWfhqk",
  "key24": "3nobWrbGaKZBtYpS374Jxe7ozyAirZAuBud1tejyfk8J14oUBhEeoLkjAbmrczNh5XvhAVmPYWeijJEdbnWpc6Sk",
  "key25": "37eHfe3H9oGfs99Z8w29Ly9EYLtTg5pU7qBoTNKcWrfapRdwjf4qAVo2XUw6PJyQTaUvXeQ3HJHZQLLg6smYANyg",
  "key26": "4VbiAtEt2EmyXzgLp66kM883nKCYP1oD7pYTBWErrAkGz4H7G3q1stfJi8C1XrkDLHGQmwLURBZ6VhaQF5iq39gR",
  "key27": "6wRW182A6B3VUTNWNyzySSMp6ptgsKBCXBgyRUEgeDVgJcnf6GwnZRWSGYPebpz22Rrjir9f7bmPTk2eWrn96Pb",
  "key28": "4DroG1EMnWyGZpLMWiJmPmPGAgnQS8JrGAatv3vNSAtitH6hptr71kBJWA8uncDE7CGWTcuSfitpPqe6tPo7avsi",
  "key29": "3SjGLFcuAp5zB2PNMy3rXAgJXaBwhJNN9pJg7XHtD2VEYp1bBn7LphJHZxWZfNhBteWPAacsfsysEFgrVP4rP2Rh",
  "key30": "3qptDNpvsAxnLWDgZxkfvT9r2h4Sw3aReaY5XkQFMZG3nwVNyjNaw2BvfDPHd2avzD92X1NPPWg47bvGv4gJHVmV",
  "key31": "5dYy838qaURVED6a9Pi19pmVFYPGFLvYRcgALE2kgPW1barbbpCdmh2qntwVBzTR6rVP2h87NeUsRVXv4NGf4UPq",
  "key32": "58UWGE8fhJcPBsWzBj7k1ioZdF9SBxSgPHt98rTSJEUvVFVe5Dvv4xWBf6u8WLnQdD17et15brkXrc1EMTqGYZHf",
  "key33": "4ZUoB1ge3FDubxtozwEpakUoZkuAaQvvgfpb4XSMfDfTk26oae98uWMza5KbmBMqux8TsbeSWtxgwyuae4G5CwTc",
  "key34": "3hXQh95UqGKin3CAecawPrcKxyhMZzWQu3u8vVDvmapQpQhj9qkfb67jVn18pzyJAXJ64TEXi9HDMwEzA1izTg1w",
  "key35": "5cdPLhMbjimc5dLgdk9RRg3aK5ZN9j5czdhnJ7FuJSQcru9Bmv9xdqrXToGagi7vaPHby46Gu5BiuPtavtrbCZzD",
  "key36": "3xSn63zJ1yHpxfDX6aXeEZJR45CLaQLvFq5NL7qAYztq17zy2by6C6ifs2NXswBgg4rReFkzJ1PSj1TyQ3wHu9Z1",
  "key37": "4g8WMaZB3FUQaZqdrN6yyHgnLXQ79fMN21sBm6UnpCmNA6g6DLQMC72iju9dPmeyPk31S1QXhoF9GJxFqRagnN25",
  "key38": "2iTy4J6PE5LjYo7TdyHpDGS1bKFbCSo9UJ5zv7jzrmxLnxrybhQ855HfnFQDTqy295KShN7YW8witeN6iGAhFPmM"
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
