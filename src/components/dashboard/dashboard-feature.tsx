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
    "5dqgd3Hvu6sDgPgxPqrjDxGr2SPhVkfcS9ij98fzrzRHYBpyfqQbswaobcfxDGUhPdPKWeReCkaD3CSSvCCugf1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CsMk2Lo89XwwuQadzbooZRAH5QmBJ3cbEsdpihBdVSn82MyNwGwS7Zdt9PEgQZZubqKPVTCJ7m78PtTwHCjtXjZ",
  "key1": "5hMJT54StsbGPrbUY4fTbZuvcyn8oHPkAQztomr2FJcXtT7i5NxPRuT5gwMQAkxVzC2CePnDYDWqmXso42YKhudu",
  "key2": "eBLSv8eB1kGSV3VdqrMUFRoqUBeZvmm3NXGw2HZS3qpX2nu1DM96gYYmBrSiXidXXTQi4QVdRyUZokCYHaKmUim",
  "key3": "3FVTaBCiCUkjNkRxzonBxmufVBwhRuywfxKkrEWNs7XqYgsgLMkT73CAiQzUHiNtVKBQhXattDZY7XqiXkEAsNVZ",
  "key4": "4JAT26TrFcgNCBUHGgzbQ6nwFUsntWpgRQnBJvDfDuk3yL1GZBFvn5JBNobWLiYvXR7bSfPaGV6LdsagYCQ46Zse",
  "key5": "3ieSSVNJwtvCQVQsNU8A8BDjiJ7ATEcvfvtRPfeZbJtN7AxpPk2M2wGGZ8fD14pnK6UVyT5ECjAgLg7GqaaoTQaR",
  "key6": "VdYhjVsZK8oKdhaScvH8MzsAHJCr51dzsMduyJwDnJ1LFShQkJv8LvLdCnZgwehDq7wDKXA2LMLY17u5dP75a5i",
  "key7": "5mFSCedDxPKZuKUahBjsRzGJDcN5wG1V5mFrp3Jmg3seLh44wD4gvXxxrboS4LHMRuJo1D8CGwNVfTcHGpBrK1WS",
  "key8": "296KVBmtfJbczrTKUDN5tSXz3KENPNWjEQDVxQjwid5ZdkkU2VWixQSSM4JsoTmzkNdGwNpYcDikyEwrRHu2rUy3",
  "key9": "484qqp64t5mHfd99rHKvE1hqusd5HSCNDPa57LzKKXnPB4fULNACST9vq7e3N6MifQYHdaqBHpvoS3dPJCoAxCSX",
  "key10": "NhWwdgS2Fu3CiDJUN1VM31EqFynwUX6Ace8vSmGN5UwrgcWM3jBVpf4zbSnUJAgLfqtxYZbhENAg5RzFS2idVVa",
  "key11": "2CGhaUpY6HvfR56SF8BpzoLptB1549Tktxhs1ARXHYDfgv78WmqyeYEd3e7A1dk9kabwSks8YTR1pZCGwKEZWk9p",
  "key12": "3fWcFALqKLpK8nnLUiPw39K8r1Ub5MgnbeKWGh3xxQnjF7w33x7d149dgFBXNzUKLtv38HqcfHp7cQbmwgTtiXcY",
  "key13": "4qXhGphpDjKBgv8ELNj8edJU83p83Lh8kV7zcbZsucjnkdMhthSQ7qykb3DEnKVy8Fm5D4XP9PtKZw2oL9sBeZyP",
  "key14": "2QnVquLmqvodvbcRp2fvPsR6ZX3KwMJm1HaNNQTLrmQUDA4LXbaNnNZy5i29iKB7AWcxsMhXxTuqZr73xMmUp3nV",
  "key15": "3UPHhmscpq31voCZvtkbx9FTgTb23QcDJaHqChMYBSGNxpto2wf3sSLTEfg6ocaGgJ9K3EhgQDJUnLX9pLQiNHg",
  "key16": "5rS9XzctAJFN4MibdYy3ZRqXoJMncqgcBXY76qbCKJvS2o6ncSCjDBsVGoun1YpFyS7AgJ6HJQp74WC5LLNXTcai",
  "key17": "3nDJnrAuGcJHeJa3YhojimREKVKwuZnkptArDdcbYrKieStD7MXdTPcuVQQdaZ83nDzzCJtBYSdDbF3sMprWJXCT",
  "key18": "5Mkx4yWpcaijP8W2YyAK8T9jsnPz4Nx2NMueqnfeWJXVTmZzC5CAQ8HPAtwG2ggJH7grT6vuyGhwSCRBAb4pM6ba",
  "key19": "3HmkwYzh37iV4haA46gDCtVuukxrVt8Gzd4qqMCgXqgrb2izk9bYxGbP5odu3TPxzJUEwpc54eGUE26PFgiGny3G",
  "key20": "35GwNJ1rHpkJchpSv9UYyjYfFqHPFEw41uxXUXSD6aMMK2ipbVH46FjVEH6vGT5sFKaPhdSthYwhTHU9cnUqHEy9",
  "key21": "5hmvXFaa6dNSoFHycjnV97oPme7ppX9HDrzuK9S7eZ2cn2Skm8hh515w8bbo7H4oUpPzP1BosW4ngFKTwBzudHdy",
  "key22": "5z8v2Pwjp8vXTyZfj4zN8iWUGHVpbtBj5G9LNiS25sgqZdTFTio6aDP9Fx97igpfdrscUqRN19WUeuPN9oALRuWT",
  "key23": "5HZUhffwQHu3jJVJBoyc1i73P8pSjcuQ7RxL1qeWMX7SG7DDY1zneZoKyn1YtabVcxP5DBeDLddRrQmD6pDAtgae",
  "key24": "Eth3hopZMrchs1pnfNnk1A41xGpye4SXTn8TkCmcfDqmRrKMaj72moBeScGEDoHNDxH1yrvVFD8b5Eh1Pxder9G",
  "key25": "3Ng1FmxfoB2uTdkY6byH1s3XV9Tx6k9BhG9d1vzs8eyD2FxHy6DohADy5EfpGpbUj7rySMTg7uXcA7eM3g4ySawk",
  "key26": "2uNKsTY3FgJH8M9De8nocBfPUpfB2cmsEe2isSsMfGXnWjoag4QTAdgB4Jwq2r4MLP4kGUGJctf2RNpCjN5pL6P1",
  "key27": "5PNVD96wfEAQTQboCnvUYZ3CpAzSJNGfYRkERnxd7F54FNZeQiduNJMLHAdVwPwBxEa5mNTfKeSqZVgB6FXj6DTo",
  "key28": "4t3zeZP3zm2L5Fgwugaqfe3FHEN9H6WdsMEBuFeYkXk3AcFEoEpjQViHU7Myt7pAafHz4sjKqKwtogAjTNX7xw6n",
  "key29": "3voFHAtKzmoxvf3BmoiGdBgsAosxtjbs5gaYxZhcEqVuQFMy6nNXojTEhKLMjB1NtsNY2QBajyurT3Mer43woR47",
  "key30": "5tvXKRGmFtwxXZ4txWACQWBLLhSBDpjf2CZmp3hDZgvvuqmbHqh2Gt9XY3k41kmpo6vsiqqYzeui2qV6ximnHSKd",
  "key31": "5GL1HnEgXTnkW6pxwrJ8acD5ZFMqzxLYeMiUeeqgSd4fLKsf5MPvZCUVLhhrr3EjW4F54EMV91SjDEQAY1kCgYzU",
  "key32": "53N3eJKYGshNzb2QqfJixTXNQMstj3ZzXzQFuSLryVSVHXqWMYCkp68mtsmjo1HpNHAtkcRQV91VJknxy2bPgYn1",
  "key33": "33ihfXCPTQRytsLYZ4HAgp83ydCupNdEQTZhRfu1jwAAhbHDSuNkue5JqpePUUfNPhZZdNqwhf3otHaLT8NfgT7Q",
  "key34": "4gNzVzSMQxZ7sjLmf2SQpCk5xvUpUnapewUGSdYYDofFv8cyNGGmPypdxQPHMEj2X3qZroQxXJa4M4xym1UEHx6b",
  "key35": "2yVc8Y7ieQ2XiVoLqHQjkD6mNKZucgAFJdsXoCHnr2crHeaXibnfhyjGjBotoXAd4KMFpQj39G2AKc1jHD6fihcH",
  "key36": "5QrgGpVTuNZaBYuAFPg8SLrVAfV1pCcGSyvaGftDST6KFNScCwNFJBMv8cKpt6CoVkr5tVaJQGwSTWGjTFHekHvM",
  "key37": "64GVHZpGvyr45fTx7ohJYwXeT1nj9ZUeg1i7AY3gjhkWAp3WHy2hGbURWuEf57A2Po3yy1x5PLSnVe1Xot61nQTN",
  "key38": "3jyLZbjYZ91xaseNY1rLFoKibeRKXFweWYsEX4J7BDL1k2XrWaPVP8hWdBGYfKt1g4KuEcFQiv8UpkZ1dfhRSzSC",
  "key39": "37X4pyakPweHjKR1JpKbptPyyWnbAp9qSgyq967CG87AceD6mvvecz9P4jF8RjqpUjKskF8MC7PKVou9z6KqxM9H",
  "key40": "5FzrRVrxG1pQggf72snYR6awjtCvoiHB4TzK25Qc1fvsemR8GcjghmP2LVNjYWcs9cXgDc8872PWhShwyEa3EApu",
  "key41": "5TNtfYwx1cB5gQEsKAL5gN9m1aYxe13ooyNh7YMmMs9m98NKZDLYLRCtkgLJPN2wzRCoHKtdnypbCECQKihxVtpk",
  "key42": "3S7Bmmk91uKH112SCqKVyeCbWZnTQuyypUQYTsGzM9FdYaNPZTFhrpdVwzZvbky8MRSiGLxij9fM25xqAihxXk3u",
  "key43": "5ZxN5ksUqJvpfxhjD8LjFk5F3hAUmp6VhoST3vCzHTQZi9EAcvELL2ckibdEsahoK6KtMcPoWZpdoiACzCn4cdFb",
  "key44": "4kkvgbBfM8mduD4oZtuJ14o9Vu6fVbrgfFp4aYQQVNHs4baME9RLMR4tGhisiUPGbWSGBvYGntiHEnJSWRCJsGiE",
  "key45": "4yaN9pdpcRK529jwW35BL1QfUzS83McM2PCmvykCK5fJRAVb26bRbvfzZZ6ChApL3RAjmNyFYCi5hNTQLv1aS3F4",
  "key46": "FKeRTTBnGiuPdWh6vGtJU55Uvhb76QhnSGqNogHHssmFsLhzPVXBnHimvzm9uEBQNsqCxp7Ur6qJ8AANH9tNrH7",
  "key47": "4U2LJdgdgJA9heYfgpAaCWratHfL9V61fQsHWbc3MJsyB4BSyKqSJEAzBZr42A27Ndph2JRTVjMzaTLBPtEdPVzR",
  "key48": "RNS3zgufLXVZzsxqxhVn1ndui3uDd35vtKyZLEvYpDqm4chGFm2EJR67oF51nBbDKp68q4ouf58vssQ93wYiy3j"
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
