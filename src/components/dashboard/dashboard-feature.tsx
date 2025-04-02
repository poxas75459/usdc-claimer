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
    "2A58Vonu9jHR2hxhnBV3DbahgvKt4kHv7AGdTNzu4BcvpgoUyUH5HBVbbABqjx6nYpKxYo2B8f493tcE37DgCTg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AMZ4TnnUQhRwPc7XRLQksYZUH6n7utdrEth7z9rt5KuXwwiCKxjeEoQNuZCXETnzYz6r7q1Y71EtcQ6kQvQU5Q1",
  "key1": "2WRHdJWjAAiGJT7Ucfu5yUwM3mNbkiSZegVYhpjC7YN7DUx5dSqS9hLba32iaX2oGxmersnBBj3ANYff3zTN1G8Q",
  "key2": "5yKjPSTozP8zE57Cu8CEUtybvs9gEQA63rpEpFxVco2wMukFVfv2ZStZBBmP3fCWhJUgePKU6kDM8LVLUwDjZpeu",
  "key3": "33ofTukCXQot3BGyShxSbi4Zv8NYepjX81yT7dWXPkC4zaDA1FXm3Cbo54FBTqcFwqyXjWcWkbjCLTfbN9ix3VeS",
  "key4": "vEckCVte6Agk2qcbKtK7JBr7KHP5arnLALg2wSfwvgZwaFVnomrGKFwL7bzmma4RhchnP9jDnHFDU8eZS9L3Pe2",
  "key5": "43nSNVWQ2GJfEq6cT9einbJpgEYUwCJdhKZf96Pm3RPnG56dFtBcBb6LgqjSKdi1WEQwtWHdsohpVxM1oLUWsvMK",
  "key6": "5DKXREaE1eevWTGSpbB5tLbSinVCxRTFNUcu7XdzPFETQiRG6o2kvGPByGh865LcPuoybYEfwSNUGvg51LLPJZ9j",
  "key7": "1UYkTR2EFSiMkCTETfaKwNmcDoh43CqWQnoGnS6A8T8AGbkC3dQszU3hoV5k78qVvgWoRrQErz59UhvRW3b1u6X",
  "key8": "2rhcj2x2ZpXr3TvSbGtvLjXZrMsq1xRUr9QJuzWcu8Z1zCp7Ky2UYdEATDimQkEcBLMUUcjj4ZKEberJ4qiWpB2Z",
  "key9": "2RAmGTgAp46aMSgrEhqYH3P1wkMYhgx1tLMHrbNBd1kbwzA1ANSJvCfJpx5XzQ7F7kSCaPtEVC7PAeP6K2U9GaPV",
  "key10": "3HrKWTLtRchzoTRXH9jorudyPTuPMd4RWzbELgcSdFpAHT9arvhi1xnrPuu72G3AWgyyUmEJA4E1tMyX8LtGtedb",
  "key11": "27jjEwikT2Yu77se299t23SkrSfxNtBk5e8JHhhhwnh9BiRTToazcTBSvTZoPBF7fjBpKvJPQjgZWt5Z5hN3wgX9",
  "key12": "QipJCyTjs2riPnhWo1Tdm54mEvE74fAXEGC5FiP1xmAipxYimgbsuu4wL7T3mdE9goY5dXwvPaRaxD7cn2jKTkk",
  "key13": "r2N4YJp2PCAgZv93LPf21W7mgZ1K8rrvMeJ5hDs8rh3Rf4vw5LcKVhf7jUW33fVMy9XrpPJoovWW6wxSzQWPko3",
  "key14": "4X5m5E9mKvnmCeV7T5ovAoJchk751k5o3nQvCVNU4iQqm6FSn3rcevbpQVU6Thb5UoGG4dsiGWZCbnAzgFfGFZWM",
  "key15": "66yq8x1ibCHACoPkCq111xpgV3wnaw5HGu6KUkE8s2AqT1HHWgrGx27oZD5zrWjpjmpzRP9LZvb3biPSgwjkXw6F",
  "key16": "3hJPD4rPo5GL8GEhhA9otBK74cTtcZMjQVo2z4jZ7Ge9rM1vvPoGmVywcSemiengd6XTNQE41mycnsZL92ieFtZz",
  "key17": "5AE8YCa5ZK5rQQcGtB52Cm1QGTjDAkxcvXvV96CHCTr5KZmHi6N4vzmDPbiE4DYdgfRK18L99UKXCArRsh6MEyW",
  "key18": "2jJScMapVaP5gXb9BsDNP58dUQ3YqPEpspRokSftSqg7zM5JnNfSZVcedAtWytLK8XHKhibskb9URn5h6eYRvAyg",
  "key19": "cDUsnscJqPq3YSeXaKLHDrcMgwjb1miAGpiF869vNxxfCpySRoP7GgcQEHSTtu9ovZiuUJNY4AkzFivjqX63KEx",
  "key20": "54Q3vwfK6cWJUNxBhBCVoMXMvdrgt8vEyPhM73jycdDf58vqkKJJBCrF54VoEqTwbXuJhqoPuFKq5esRckc3Cyw7",
  "key21": "5vBS1Y5hZiCxwGJiotiQrCrzqJUmgsUbtTdHkeCxFqToxgWkV4ja3vcGeS3YjHgixc4AWBjHeBnduyJYbm5kZiyZ",
  "key22": "5r2FsGYp4AyBetHzQQ4uuNx9FvZVY4UstSfXnFhsQRVsY8FrXq3BXbDczoG5DaNAbNFzeN4gPr2MJxNVZ99LvrGq",
  "key23": "5Ec4QDKSzhRjQ83TxUzZ5UwVPhuXziqQtX9dMzSeMUKsEExRxF1qXrQvtouHDqDssSmy4UpTYs8yRc2cEPddB9tc",
  "key24": "23TAKWHqtHgM2nXBSfbp6TdH3u7SpRadYNGnreKdh9wDFJDLVqkz6GqQXeScHp4Qdmz5xwrt5KByG5kSin9rZDGK",
  "key25": "FBm15euwAVZNETZ87XkxWQTEbyiYWS5iQbiNB3mFMam2gNYDNpCNFEsm8hF6YWVqLkY4f4nc7wQLr19VHbNSZmZ",
  "key26": "2c8Ys1MzFRHzRWrL8dAGNcd62hoSiEdGvrZ1tHqD1tem86YZunRMUYPX3GDr2o55SdqGYttYrH9RERPTLZneRboh",
  "key27": "2xmMvfPDENSNYcwUVcEKR8AT8rNEKpAMTrjK2pYq119meNeGu1YnYxRaKgCZtmCHjWM1vPEbLPuyZmSNJaBNvahY",
  "key28": "3kBiiqNMcHa3au27y37EJMRNbSrVfgqszDQAzEg8y23hy6hwXbFZcD2gVXnfXtXAd4qvBcv7HKv4PNfoi6qrbuG3",
  "key29": "4rfnZbaYXi5z8UqHQmQuZhyJSD3GmToWeV1f9AT7oNWgBkqr3EVfuU8NCVqYvoC143xza8VZSutNbz7cnVAmtqBx",
  "key30": "4qnmR2uj7erSYoefE61HfoVwfivirvUJ7Nhk4c3NtGDirj4RH4FHfNTiQS2ZovJsajWnPkLSLPU5xwLaDDihfcFH",
  "key31": "5DQhU54ZEga2jZYHhZbeY91666Ki45RsFfaGwKeewaAec78jFua3Sn2y7HQTuYh5RS7mnZmyjoBDckV9bBjZRa6g",
  "key32": "bLvgkN9whugJWt4fSjioP4WZ9YZANvKrVfzoSwY2NZruSH9CUW8YqVVNUn37ZpoA9tCasJwiravpG1GnpYWMRWP",
  "key33": "5fs47cLrkGnrTFpEeV1jTh6WuwjeZnZrWGMr4cZCjp4WKHNoRoe9tN5ia1SGEYomgpcFzNvEjzBwKU1vreAhGx5z",
  "key34": "2VsbzMbThXKcszh2Ak2aGtZQHcpgswP24E8syYL9HRJLtYAStAGgKdcxzeQ3x4gbvhfqXsCV2bK6yUoDkwi3HMv",
  "key35": "4jGqw17ix5eDUktu5u4CHR6e5u7vZunWoLZ4EjBJafqjaPACHRirEam2GzaGvoRGTcqg4DjES3RLLz65DtJQv2t6",
  "key36": "2zCvhKC7uU1Fof2eDjAtJGQ3iDUZtR8tP3Cgg7M98t54LCvNhSeb59NJLSQMptMeTHKqvpaU5R3KbqyTPaCpasa7",
  "key37": "3RNK1LPHoqrg3Bytnj7Zw8nEz6bEvoBV8LVPxRY8UB8ThpZvCrhS2THw5L6Xy6jxPyUWC2mQpqY1RLQETM24ax4P",
  "key38": "5hgHJwmbkAk9KDf66iHtMs7LKJYMuEmDkP4qSXxkDdsoa55RvN878fYxrbDFFoMeYaiAXLYTXzokm74d2a3xJhn5",
  "key39": "3QGnEKASN7qN5XZrwtqbcBjkrfoc2Po7s4YygUhrTwLmd6cHEkZQcaPWouApi1GDvoKa1QwNM5CpfvxZqTnhBgkQ",
  "key40": "3tYZokXSSZqncGH2Cb6ecxa3tkbWCTSStjcX5t5ULvfx8dn6j5gyo4hLcnFFGRo3f8mY9q9Dynq6o9oYtviCKYiH",
  "key41": "61iLfRyuCoTRMeafgMZiNKJoaYb9FnY4b3Mg5MJzj9C3KXBgij99Xeaay6Dc36fww5WnM38SQvfnYKyNqVuze3fF",
  "key42": "3yTxdzu3R6CvpZ15mae383S4p7buifzfrJCoZk6Y18bdHhU5XDBdaw6G5MZrfmHedEkG51R4MK4fB3JRPsF2dZQo",
  "key43": "5N3RciNr997wF4n858QodpGf9USC2qhHChC9jvWJKPAvHy6ZwyqrnAbaFhoLeHzRuceZiFTEifcS12k8TtBYkzVW",
  "key44": "3sBrmrDdGgKS6mwDTJRdaZwFusa83WhyzWQuhr92yCvy132c1Cyd6Wjvyo8Qv3LcNMB6emXQDZsQ2xfjBNvpiAXC",
  "key45": "4rd1cvpdTWQNqQHBDGphQ5Py4gtAx3mLPAtB2BTsWa38DtisQeedUi4ogyxo5QU9tt6yb5fkv3Tu34arhNCjq24Y",
  "key46": "usCxqiuMhCgwZEUKUWa3Hu84RMJCxUVA824uTdJGrjDnzjCDs94s86crJTUHmx6DgZcF4QrdPwrWSUWXR6GgE9i",
  "key47": "5HJBXT7nLc1gcv8Lj1oGDjJwsM2rd4qkrpWAsLZpmN3tsjfmL7Yqy5RXjrVa7dUnbYdWPB3KnWweanNUE5SiyhMA",
  "key48": "23wwN4Jcpz2KXnHea2v8vrdiiqUN8MqeG46N81CqLn7mx1qoKYvDpwvcu3LNYLez5pQCta1GaQwmj9ZLw9q5LB7h"
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
