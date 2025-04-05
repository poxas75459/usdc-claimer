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
    "2ZRoaZiPMGGkMaZ8FXdpeC8QV2a4re4XZvYX3CehaVaM25FskGoLauSVVVr9DSyNM3tds5DuyLBcHM9zTSbappqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kt4SHr3Sv2KJD9EF9T4y27iLe2vW7rQyY4DGHNUDpe2YU9K3ByZDdiAZGRVo6jxiqkCAb2MhnG4ZjcEPc8SNP2y",
  "key1": "4grvFQw7ZbshgahBrmBpZytbsDnmZmqd6qo9MaAACCMg3EUozd4FbQ6H7NbqoMGoQJrY2zAZ5idJLuCzUeYTiKnA",
  "key2": "65mLfruYygPSwTvV59uvdBRJfF3uvckDnPy4raupUpYbG5XeYmwW23WJPJFFQfjV8ZTkXtpqAxJDQbzXR9EQdrSS",
  "key3": "2wrtryYJr43UF31RGvnZ4TXwEDsRCCbfHxvxWEH3VrWWhDcmWEXfk7rsfLVztuHndoDTSnxguH6WNXe25tXPas3L",
  "key4": "4gnZ2AjqEkUahZ1Qw2iRamJeuGbtaE7phSoAeYBPqNuhQSht9aww8e5cEvuLE95vj37YNa3UGPLmhpFzFKWKK7U9",
  "key5": "PMCVhvRVD7EWrBGYgZZdtxjrT8XczE1bWhFNdHQx8ZUpdwkB8T2ZDJLkv8NiTCcaczGAVNuqzdcMH34Y5r1YzJV",
  "key6": "22U57VUGRzrkMHtMBfSsRqL5BEj9dgXvAWKBszEACZGoLtyNUNZah8SkEfoKNdP2cHCBRLkUV38Du9S8HqTjm3J5",
  "key7": "4z4KxPLUVAZJ16wRkNDmE8h5dCiFdcSAGNHBhkSJesJUEgZmnzb9kFHvVniKm76WmsRLortLsJ7rZNPVQUK8FgeT",
  "key8": "qohKzw1ivnHq6HDtR59CWL19N11RxWysmgQaNKTH5GADFYhztKTikgwoen8aFA78gQ2TnTnbw7gsQLL8C1rJemu",
  "key9": "2RkJctYsfpW4b9PSSqdnyD28oiL9nxaqv7ew5wBTH6dCJAAVtcfPJeYABzdigwvruzE8ZtT4Vcb1zYdd6cGhzy71",
  "key10": "3tTyHVuwPPbNQxP95KSaTArkHKCtewBhhYxD3x1i7bxbsKF7DCRz1YWfBuQbugwrbMZBQ9sji5m3Zr4nfaivkr8k",
  "key11": "581RifYyGawbreKM3WE8MtEEFwYaWTVVHKHmkmq8CbjRMB8Fiiw3R5xxnkWTcwdJq1nZnDAcWHprxgGZTLMJfjD9",
  "key12": "5n1TnN6feJh8CbY1PMrSr57LYghwUVNdReqESWLEAQ8nMDdReFxwb9YBppnRKWcZFVrwQzCUu8FCKqY9pkJEFcmR",
  "key13": "3v9arGiQUFsvmdcCfthAAngPaD4rDLvuz1Rs5vpNcxkkb9J3MVBf44qzYtsLHp7tGFJ5e1M2jDVPqxt67R8bSFHr",
  "key14": "CFwe9mGGfFM1g2heWfSG79mwD75r66w3psBXDj5WW2U4CpvkxkwKKyCUxUJ5Te7UqJpkGp9kS7CdgFDmviASspt",
  "key15": "kLCKD9PYSHA2b8UvZNawKwuRSRKtV74DsjyC8yJvky7rtcQY59nEfP9p7kNXbYHAUYS8M4RQMqf1RM6VaNbD5JY",
  "key16": "2YALcJAGLvpGyfeLcvzQYcWW49Rhd3N7SiHth3i1H4RUeb5RkK6gdK63FGfLpg4di53DJFmi4ncg3t4Eu5WACAhm",
  "key17": "RW9co9CjhCBEGvMRujZNYiCpx7bUmSzgGvccyWbN19S9auGPgZtJ1PxbFihux8MZQrxnUTXR1LxLdYF5a7BCgeu",
  "key18": "3bmzhHoPLqcZN9ded8ZCQVwwGi91sUf66tf6UkoJepa7M1fjuFmfeKKRUu1Q8xcJf3CpKsRHZ9suM4LtAkthjPZT",
  "key19": "3xMTGB7bLNc837cURofsdtqV5MV3ABBqjP2Ki5oMPLxiFC5GUtUBauTJXeUpsVbGVhUtyX1c2XGiYPdSwe9LNDEj",
  "key20": "3Aqi8STkpzPVU3eCJqGVDrSvRNLfGso9iRAiaHhCXd4MGSVAwwcvCL1VadhAzC2ZaDLbPYkDj6sFZZNxZXWTStbk",
  "key21": "3xCRwaQG7tJpA1ZXSXD7wkq5q1kiY57MVJeU9U1EAZKw3U2c3sP7VSP3KZ6TH8Rn9BRA3am1eAAuxTjLsBNv5m4W",
  "key22": "3RqUjVDdXMm4Kp2kHWYYqpghAPRjrKq2sD7b8bw2mymQM8umc6upyPXenMQaxdND3aawEe3eeScJZhdEgMXuAWax",
  "key23": "3upw1FbeyHzxXeNxQ8yjKKZgR9JLMj7jjVciQzpgjA72wqnv7KdqSa5vxDNw8FBRDm7u4EFtGYUrF5xXLjQgPZX6",
  "key24": "hQG1nABLNQQWjAvgn3HcKPUjM1AAsLwmUAgQMigry8kA2895VrAhdqCHfwaQbnzCadgN8ykwA5LnRVfHboQ4aXC",
  "key25": "2D6xpYMJyPgFm3E9MpeeEbDjGEnP98cWcQmRAxVEhRGpKPTz1f1fjEZBAXBQYNZUozWFfVffshsj5Mkif8B7BHeW",
  "key26": "4U65RzFdAsquSVebZ9UtMDoMy5svqgJvPD3SbM9JqpESorLrwxaJNQ8QTgaAtozRZ9Tfnq9V2hVft6VaPD1ve3hD",
  "key27": "31qVvdDvTzF9TDbjHeA3jRcdH35i6yd6scGBnZ25VrC91dUd7WxJsnUXom55F8UPe54ZyttHZYefkeSU43U1V5cc",
  "key28": "ixT3tWdQKAQi89gK58VL8z219Vatfk5t534qAqtYTu1Uh6RTvZJibKFXnS3VVNNe3Wq85XDo57q1U5Ft4yC1j7n",
  "key29": "5hYLsJgNu7vEHPs6QbBqEq2rPGU3E4jQhP5wioKxCcbouJo2GQMRsy47R7sJDC5eZzm5AqzHMJLeUzAyqZVkPoRC",
  "key30": "5BSQcHpt5GmYYxfufg9BnBBRQ9ebiHSC5bFi8k4WbpV1fffpXQ4dnkqgHtxxw1wGXt87aXAxpWGp5S5EM211h1j5",
  "key31": "4U1feQMZ9Cmtk4EeproC6WgGaLE3qjnJZomtXN4HYwakq1ydVx6qwcPTiAyJj8yoyZjU6SS2JvEuD98KrN2HFUNP",
  "key32": "6582ePbwGexwvovE7amMfZqvMLEeMdBUXxNFKgwCFY7PkL13YHX9EfqnpAAgpGbALxxjXNNaK74pFFWUkLK8ck3t",
  "key33": "3zXU3okEoX3jQNAv7FLuZTF5cU2WxDcK67joZHRprHtFrLdEifWNncGkBTr3DFb3dkUMbCYmYVjK4CVKkx6dE5V8",
  "key34": "z53N5VpLMuQdvGKyqGroB41jjaqC7yvmz8F6ZN23johrqS82bExznNa9CSig29tD2pQ2xCgWtYSwMDJkv3D8ZeV",
  "key35": "61VXfW9TrBW4Un454hTZrqQpRYQPTd8ePCX6yKyGVRTJDWbP4yJ3Cwrjsb7WkJXQwHt3TAokGjwtBsV1BFfXZdwd",
  "key36": "3sYskQFa9rF5sDkrB8a5ba5Txg37tJiGpF2gzgz4HFc2jKJdooH4rorH8dBeE7EJc8LzNcXVU5SNCsQrzuVnTRyV",
  "key37": "3ipdsVtHo2jgKhGmzTm5vtfoHE4VKRhkNmEZCS9cFoW1BorQLmWQcpMyZq87ZqccsCsCgWe29dwpz8bFYPYD4TAn",
  "key38": "rejZgcC6fJ2hRpKYGkcABB5hPPKzPmjMS1of64jPEUnvXrGR1qjgL1QhfuTNvYzYBUX6ftuZtGnQB4o4B4doJaN",
  "key39": "4ebymFSgtgJxX2SNg2L7RPAvyu9vAtvUZAhrstXwb1eBRchk4JpZCo6fL2B25hs3J7TprMsvGKbKf7cf3tgffmKb",
  "key40": "3UQuDQRjq2pCZqjvkMcBYvvbXyJ2mvnmTR8bDnGCWFsBHm3N22Zbse1FpSQqsRZBHpRJ3E8zFBsHzene24FbVP3j",
  "key41": "3FWmhjkK7QYFB3WJ2Gzj6yD2jtuMSTriDsCFwc7BHs7h6emZGzP8b8AbUDMfLFeAMsM4917ew3exFV1y2rtU98PE",
  "key42": "54btJnKwrczzWbPkNnuk3Ut6uWNs1yurCNP3EJUxKrgtBaZFnp2WzEvvzY2eq3ezzZe3AhSUQmB4iLoumF2YdU9t",
  "key43": "2LYNmwcRXc2XFAAUojduHgkG43FZEpZFHcXSgMv7ZX9VnpyBCMvBNTzvf6bBmp3Qh9xYQHbmeZGKvubUJanARSxT",
  "key44": "5M7Lz3bq9YoohDxytAsfE7UbNAWS6hF1b185npyFhuHysDjN13FtFJ3EiD7fs7axdgodHwEpLw4RKmEVwd5w1ggo",
  "key45": "3TSmE2PSzNetvJ8AyXcBGKnAqoJ63HTJNVYyD6Qb3DWJpkDkmTT7H8wGbwnhPGrbR11rVoo8rZttcWKCdHTXxk1w"
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
