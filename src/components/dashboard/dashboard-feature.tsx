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
    "3PaikENVT4i9eF6bb6ZKBbcE9KSev9Y9SHtmcJ6fNw44FFjpzJweWbiknBbqzK9uVKqHfCWGZHSgwfHDfFCuGK57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W39ANfrJBGdzhyzLLGAEADiEkwTFbE2RnmTZ8q3yxDJtk3eqLJaCYsG1DsjX6saHDJzPd2ZAn8Z82iC8ga58Vp9",
  "key1": "5zvS6tWTZjLroefkrnu4jLYsBEbWczu15yKFoNcYJjsyzKCxhsAux3k1kk9VcTbw1QZCArEisiyWJf2xy9Zkb82m",
  "key2": "5PTwTyFPeU6rANuRPHSCMEP25Sqpy4k8MxPxgGP7WbaCNFrq2EhWLFhuvx1GozcN7xCxHzRnpHWk62UnJGWHGHab",
  "key3": "676awJszBy9Xttj5ZjD8y6a4GK8nsYze5xW8D1dig5oGyi3sQaRrviYMGwVqL8yEWFd1GGUALw9HQJS2KXQYADhq",
  "key4": "2YKmFMUx8f3hBhekyKo9JwJcVAAW1AFXPd9A9s6hzBaGFqyx2heCT6aS73i35TWyr9m79hSTxg3XqVuimez3sw9N",
  "key5": "2eyb7zPf2u3P9kFDHpgFPeUDucuYKEM1vgzohTEKSTzRz6RXrU9txgQT9dmqRw7dMBW9fsS6ZzxngXczJDx8sPjs",
  "key6": "46bSi6JLu2AB5J3jc4Eq7VKusHWs2vAH1A9UZyfKuF9LrH4ctKHV5B7KAZJVtsaXgVcXqvHFgRYGeaRxESu8ppGd",
  "key7": "2BKTwc5WcNBj8EoKupx1YcV4zqYqJxGZEaJjn6rmDd8qUm8fjnMYSVyi1cGxT4ZZoJ1RZtBHBZErwtfm4LMiS1dX",
  "key8": "2Wyt6ERqxBFCkhgQ8sCAEc5UW8rpwqtFrRZH19oePs3UWykCo6ffq6N8Kb5jCFmFfvco31QAiY79zjG6PfEFgcAq",
  "key9": "2UCGk3VktXujH6e5f3heb1rdSUkE5yC6EsguLdpWuExjocovizCtNNgMPcKYckwULM9So3KpGr145cozce5wmJJ7",
  "key10": "3ywP8LSFXeFfFhAPrYVRczzPRwYqoyEsN99BBmMhFw8y6hbe4echPqzfhQRhUyfxCEajBj7eTGzNzHbavyGXGgNU",
  "key11": "w4GtK846DMXvcnocHPhJ1XYzeWmHA5Afi3LvNdNLDwLv5dARbehzNpKz9LvvTw3Mbcb7s7zFXD6mPLuGXzUVtPa",
  "key12": "66bhkfa7qFjPmgX878GuMD8kWGDqyJirCRBnKdHmhi7M8DkyL7C5dAUW88n5uBfkc7JL4fPtccazjkgGnB4NsPHZ",
  "key13": "5wNtQN63PJCHNj6VvzxUf2XnryrFKMZjLdeaGtJRqn7JJ7aPrS41tzaBY541Lh3dePRrAtLQ4bhqxjVwEqcYBJdc",
  "key14": "Vs4ezSjn4Myh22HzGtFbRikkMopQDZhUvQzK4gXNpfWLopEWk43gZzebj8DwsiNrZbGJ6AxW8UCTnjWbA6PbiUq",
  "key15": "4dJR3PBb8zaXVFVYDXAHXtRbt6qHUnXS5zqNdifCEGa4D78T5ykCpYs5JVsYA2Phg8x9ybGgWNBb6QJWPve9XABU",
  "key16": "3PM2GuMohveEK5u2LohNaLBix6z5DPHbXfHhqoFCtkM2EiCsdRQhvJ4op5xXbiCNkdVnWbk7qZKKhZyPgZEvkD1v",
  "key17": "5vaXxfnjpF1iWYndsBw8814H6iydjnDTSZE6UiiELqeBuEkhZvMW1QNf7DGhGXeW2csPgraAkv9QY4piWSZGw5rU",
  "key18": "62ecCofsyE6aFmuJByYJzpbv2Wz4WGhZcAG3SBmMF3Q5rBczBxS6FwPiPxdXhg5FSmxr6C7h2TT7PCbPf1Qcop1z",
  "key19": "2hReh6UnQ5hCB9hz5xG5vqY1Az8c5T1KWDZ2ZzQRbDBJcPvbQX9ZU9bCQARsZ6pcQYoJgu2k8uBLroG1L1psFpDB",
  "key20": "2qMXNqamCTSACcoMPBjFjSVfRumjnRSMZkWu59x4hwFUMGL7HmtkCHxvPsa8YHngF7JbT733dbt1w72CHb1cwTyU",
  "key21": "5bxzRKapgVHUdQiRvdYDfQp7qXFU4idmJT7HV8R8BBGNPmvjQvGKj8nquxFc3GHsiThHxRV36YYx8JCsHpsVXwDf",
  "key22": "5cES7tEaZeqXudDrpX1L2Rn28WTu8htNxiyi3GaHL93URmXyZM1QKYEiVySxZzf73xt6soCzAdu1eqivGNwgxt2o",
  "key23": "PC5b8Q6X5VfNvQ7x7PTaQ1AYsV3MvqWDHwhrUTgC26sVJJXz3hPJwKFLQGwjBU6EPTUviUqD1rs1vDdX9f26iGM",
  "key24": "4KVyg23uqGRfUc3u3Jhsw6xCxDWaZrhqhhVSJYYmkYcz8fTFM6BQm29QCNp156FkkEfF5NyyvN7uTLgHt63CrZDN",
  "key25": "3NNVC4FtZ53brUu4vKrAJ2Fb884rJPG8JVCsPPo2pHRVYZd31hcPQBrUETeJEmjx6CdkcXjUbdscqM7oW4iY9oqH",
  "key26": "2Bv5poq5DymTcuFVQM3VLGTiMp42mfKoicFAfr82ULvVJbQE6pKyZzg9REFbeFxviXgvi5t39JaNwG1YANb5qjkS",
  "key27": "66vnHeTUpbfDaPUJLS3qTCdg3BPCmVqMZfEQb78koeDcNyJFh5Uv3waQcm4A154AsTmWhEgym16LvdL1iA2k3QFs",
  "key28": "454DCHstBsjARDaLH1yQGoTHc9D6XDDZVpKb4EKY3yxwwqj2kj2wjdRcpF1tg4ZFZ297HTzX7ySeLKWuLxoqd3a9",
  "key29": "34JLYoqunMn1NhNMYKEGhbK6mSE2AHn3rbrLeSogFQ6oWLHeZNokZoSDfs1Fw8J8FoMUWK11gGTGmDeoY9bPbfTt",
  "key30": "5vP6dsDpqHopDt2qwcys3aSbp2AsnoiE3prDDqNve7NKhDg22ByjXrEfydfNhXVWopfUe48sZy4uu2erLuRXasiF",
  "key31": "3ckq8892UiQamLok599auGURS9o7mG1zTPYUWxEz4ooQsmoJzEhCUPfZtWKrxixvV41aiAC7Ey9iU5Kd5s9CUaca",
  "key32": "4XadVjg6gpyqamNKNaVjf91dvRW5NnuVtBRrQqdxEUJjfTrSKh5SokFmhVeW5kvXFXEscqTyitKda3ANanGdW4wm",
  "key33": "xZ66Sj8AJnjgCuBpiYZx4KmrSp35UuVAieET8gbvAmTeZtaNrh1Zvd2VNZ1ZVhQ73d7KzbZAB1hq3z1knH5mCVa",
  "key34": "634tw21qRV8QsRL15QzfQ5ZMcVoDph4jfXG5Ttfw4kzivra8CJGrxE57zfu2CnLZwrBJH58EUJUzf2ho33eKGhRZ",
  "key35": "D3RTY5JyC2fh38YVB45rBVuy89RzGBtXYGRPKTP1bTPxAFK2HzkXWrqhbh1cRPZS1YxDirtukFpYN8jTjSrrCam",
  "key36": "4CjWnTTP1XsAxDV3QqUgaLhPsQgcLGKVZaEKzJWP9xxSJWtPoHDoXzst8tkis2ho9Xv1guLL4x5zaUwKwRW7X66q",
  "key37": "255shzZ5g2C3koP95cX4cjgLhVFLozzvF7PDc9MemFuJ7aptYuxWmpnzM21jEp2WLo913NXF9Sid6MPr2E6ve8jr",
  "key38": "3NFK1LJFWbZAMnWCLLt2DmV3xbYqmXBa1TWKpstCugyFg7YtQwBhm4XHpfDUAtKLMVjkz6T2E36hFgjgnuH45Ui9",
  "key39": "imdV2aegbvTpY1ToLPzeVXaRf52UcgQci8a7bSqo39gP6dxKMwKL1a5ACMwoqs7UU4PoqRWx6rAny2vWPL6Njp9",
  "key40": "4LAXMkmhmTj2X78grQZLxgU3rX9gcQvSuGg6cFmizV5UebhdDCVULQStTBcSZA1muyKUEmMibmixwit38Ze9avQT",
  "key41": "zTrScx6ayPaMJfiaXAfmiACbYeBFtNPJFDnRsQ8VSfEQgAmD7g5Rj7HmYmabykyGsiAWaGy4XE1rpZzYtT2gxPf",
  "key42": "66Jc45Bmsb4qGovLgzJGmp7UiWzVyTWVn6KKxq1B9o8tThDXoZeLdfD6XaSpF2vkAAF8i4dSQpvFh9MvowZZ3ogA",
  "key43": "36j374dmxNYADCiJEpp7ftBZeLajYm8vGQ4Lccwd1iTXCWhLtesny3TFRymNdD9VrZLNd1ecsbhPnkAtEGpSEUw3",
  "key44": "4EyTGvgtcNxZWjv1XRWppcVp6iwvjSJND9ePxL3gThFUXezD1ptSrAHXyvkt3k92nJQfY9N5sNggEChWhUPJcJeg",
  "key45": "3a9fRGvbyfXsTeFT8xQNAfEwv5dS7Udeq985RiXn6rHYVFuH95VpqGF4L1R8x33833kGCsZVzueQ2LtZizhT2oo2",
  "key46": "5Jq8W4atL7xcHVtNFk5ZEJGmj4YkALbnVwcGGWcBkRbokFJKxjyEuuCMPsG4v31gFmhMq73KH438x7TZrQWcGgU6",
  "key47": "58wmFbq6yRhZrwm5V67K8qRS4KSmgPU2XuPbDRc9cwrvs7sPU8UpiW8UNZG6TH7cSsA3TKVdCMpSx9KyoAEM2ucY"
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
