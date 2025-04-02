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
    "35zH6dn4Bb6y8k6kLa1wLybUtMeFNv7f5NGBqc5vPwzSi3PK4cFgP1gEfhNUfPp7gprAE8paYk4NjiM83CGd1Wa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qofiG4NHQ2rfHr4iEhCYBtkvD1QTx6mmJJDy9TxtgVewxidV6pmNWrzp48D9ZVUjubp5AugVwAi7iajTxJEeJDA",
  "key1": "4gP6vs75m3STxiCkjNWrWkNdaK7LncjRyTJSXPTBJ1TRnHkAoWjiLpvQZf7PTvWBg2VbtFj3C1s4G8Z4APX5CT7R",
  "key2": "4sXKX7fXKuD49k3GJYGNZAL9irnozzvfityqgaqJUzqCW3mzPdUZFHPjQJPPGn2Tsv5rYJ51ezP5gYRtw55VbYGG",
  "key3": "3BW2wRBDr5jB8SJQ9QXJveahxSHm8CjpavbHDR1EHACNKxvPqJwoCVgPskyeithmjmWnVBv88PYSg9NNHSRmg5t3",
  "key4": "5Apjw4R7fvCgorJyfR7xwxKproCxF1598FBNZ2bm5J7n2dtGoh7oiFp4KFqkxmL7wTKnLkepauTfb3uzAnx4SSPz",
  "key5": "2cjoG1KuA8zpHdSTUR99vikL3N8WHQQegzge7dzqDRQGyn6hCDJEzonPG1PgPj7rYWY2QCc5gCjVKr3JwF4xzT7n",
  "key6": "4STPjYSZEHmDjxypBTp7HwUS3GLzHwLzAqPXUAd4HAs9Ub9nufNEb11J3ksPm1bds47Goye7YmkZRKLrJEsrEgxV",
  "key7": "66L8iA2isca8m5BGaZujLxjPmKcWA3VhApJdP8RFj5fX8gXp3LVx3uDk4U2vk3MQj6ctepEAL7WFpWSrrZQbTwb6",
  "key8": "4qdhwRfDvwaZ3wSuTGcJcVi2rbnLdEjdLbGb9Hyno81FFcSAvreaoRngkh8oWT6Sh3FTz7dGARBPwtUDXp7BCz4",
  "key9": "3ugvshUUKq4gMNyDedvWeynJdpxgMmDPaxPQCMYLZcedwuVpGLwLJegfyZZK7AoGpVQRFg7rqduqrgeAokjMNxpv",
  "key10": "4HTLB7mtAL7cZptmLx4ojHkwyXk9uCX1EguA6pT7X2p8srM5FPPxCfNtSdyBFDmum3BAeopWgiuGkxAXgVxrJxQb",
  "key11": "utWG97aR4DVJnSVgP8iVQZ5Q6iB2JGiBRnyHDb9KDGHpQkqfoH5ZMX7pyQAw4MesvfYDoXVBrczQcAc2fH2conS",
  "key12": "67HrMy2BSRxy8TtNWHpCBSnz4wec3gs68KZKCqWjEPB4hmfCXgTPyPUQNGHLq27SCn1qYSGEjip3phATQWajzif3",
  "key13": "xd4WgMv7BrjVxc2z7rueuHbJcN4ioaf5GkVLkPJAR4EQsDWmNEVevXGwcRWbVXjtoy8q7DcPi4hhBYEMYbR8Pe7",
  "key14": "2N4oPf4kaCeAnQvYiZGzE4jDA18pyW8zzpbpRppD2KQ1Jgd6DqfB7qyJ73pHArPuinVz2ct7ZSdYtT83pNNz1xqm",
  "key15": "5VXmYjJ2CdJwzuRfPRRGTg1gqShy2siyFzMzzCKHs4YMDUGQXA7bffMRyk3yZJejr8e1NafVgPARpGVamxVD9sbN",
  "key16": "2sqnUMr7PmUmM57CsYgPzXCVSgm32deuR7jTLVNoVbFiXAxjPDP8huB1dEP8Y8K4knbmJ3NKSikPDyLHA4RUph87",
  "key17": "Rh8TCwtmebjmyMy7AEvZFKmEXeHBVgPHFw8T8vERajYr4t9WSceSY2zSKTQXSkLVCQ2meMgJ4Nyir9CUH2rQNgX",
  "key18": "2dENBVeYvqBmZkVvn3codXZU4VW4DPSvcE6Zy678iDa653t1SLfBjk7gazBspCqqVDx6RztpCC9aqr7CAvE28NhU",
  "key19": "HFBMqnmJK85Gt2QNVwn8oZYbMSJqUCmNvgGoAZNCiqSKXUm5QPTFPR2b3vmhC1wXi1upzunvy7CQjVVdXTA4VHt",
  "key20": "4u9v18EWeJRJueAaJJhBXZcHz47qDG78ph6rkhaKDWfu1NPovNw4aHdL5nTJJCWMZNNFVFdL7Hb8rARwfDFffRuS",
  "key21": "2RgsUi8XSArAsSzPPgKMxEVJo9HijogpQgbLSyi6meqxPwQAGvJeLWmeCfCoGzBKTFdgqUZaXqxecfzb5FJ4yjaF",
  "key22": "545WYVNjdeFBHux5dqkdtM89NSRuZfzBxgHxLk7kCNjBrynwNeCQdZZT95Rp5gaSpRHby6uKpPVC2WHSvJsYFk6r",
  "key23": "28vPGbxnDvXL1cqphNMt9WpDeFizFZhDv87PbxVkkoGAjT6QcEHTBsPKN346Lqj5tdB7McM8wesRrrQC4vU2SUjJ",
  "key24": "5p3442RKFjtgRNbxAxxzsYM8Kt71RR8CdhE3dvUgPuEo14odYGy6ykwqCW2exbZbidYrFPw2yDRxfdD9rhyWLL55",
  "key25": "2zapihrGV4ytGLL64WwP9PStNmKtHffPRUo9pVku6WPPC9ZGvKAsATVtWCGRQAuRS3GLdqqxMJrkcWCd2Dv9UbHm",
  "key26": "5khwhZE8C7KjqNuQp7wUC93KBmodQvWmtP8e6S675StRVAXf2QZsZ1TmZ3epgqFXoNec21euLNBpTktE6jZx2eeq",
  "key27": "7wCsEbrDzaLaRrTLVTZg936svS3YMqmvdzKaEYC8md2z2FAVAfjNEbSCFHj2YRAMit5YDh5ycgQBTR9VrM86jBH",
  "key28": "w75xpAJt2jVaESnjwnfekXr7r4o7GvGKSvKpsweRu7AgCFYysqup3UZDpHywf2iDVaL9v7P9ddqSggLxUp4dmEj",
  "key29": "5tG6WEUtBqUaiTY3RrRigTmLNDw2X55Vgc9GrgXckDmwiQFY3XD6g3MxXgeXVFojZMQTHB3zcDx5TPCNV8GvQL38",
  "key30": "Z1mAf8P2RHz89n3d6MANf6tqDrafSErQ2WxhsdhSthzUzcDavy5Qm6AH4k9Pr3XsBM23iVM32ZPsaEjfTbdRA8b",
  "key31": "4Wo18UVVS1i9cQUVR5sHsoKNFPhQbLeeEthLPkfu2ykYMKknC1tjMu8xeQ3947TDztpfaGYeVTz2pqEEqqT667AT",
  "key32": "5DMHQp94oWesM6UFtZ7Y1oDasK552TmBJHSpY91ZzqjK9XPKUYda1CX7VtSTVFLsy5tmMAWsteabFYH9HSmxEKXy",
  "key33": "4SGAqtYXnngrUWZNUCbjF1bDoazQ63fDSiAF4wXEJjs3SDSb3nC4F4CEhukL5Bvkwb7RSZUUuL53CHuAKUj6PnjE",
  "key34": "2M3mrx5Vgv9guvG7zEn5ov5SEZJEh1MG81mMo7qgjpFCMusejp69U9njWgGwc3Ef1dXEQSG49CbGiRSp1JmsxoLL",
  "key35": "3fDXcQ1GSiQ8wPiTgo5dvPLY1uk2yydEZJBghkNckiav6nU3qQJjCTUGhSTLeUVGtFsMnJy1RZp9RECTAQAF6gYR",
  "key36": "56WQfRuE3ziYCtcD81xBV8Kdn4w6wwUCh2DAijyr1Zp5zSqSSfMGWZYV6PmHqUijRNcQKBrP3FkSsyjkkhkvVdNC",
  "key37": "5Ptj75Py6o319TR7CPBrxEaVFvjCnaPk8xcW1UTYhLcpxNCcCowRNsHQs2XnYrRNRzFfSFY4Y11f14U1yMv3GxR8",
  "key38": "5PuZLqbgGuWN6oCsng6wD4ig7h1CuqPR9Ra32SQph7vXMNthTWd1vpXpWmH1kZgmrFT7qaVBUbTNPauDD45EvHqu",
  "key39": "5WoxpmqwCTibtURQHutwfZzm2F4mymNWiZfZayujhToLEFMHoinY4HhuT1Qm1VfJEjVyXymeX2eY9bmUv1Z6QcWc",
  "key40": "2x45LnVtai8ytKBK4XsE3KwtKCEiSjvkW5t5iWturknLH8e7iwnhPvwRyHX2u7xRE2NUq3rJgEQuvtrVSJDyTsiQ",
  "key41": "5hHFEunN3kASUUxZovzkzEsjgpTJYMYHAQKNMPz1Fkq4Fc7nC7AJTxcbLqRjTjQiNRtDubwgLTNQxJYtsKQhaadC",
  "key42": "5X8fVeG8twLLrxuh7o9HzANiB5zdBgAjcHBRLhHwpbwJ5fYXC82CkMMpP87azsJo2HgD8jxi9kcSGuoG9sXcj29E",
  "key43": "49aSN4oQWNmhbcEpnViD7Lne2UEzf9KPQHZ7eHNUcDqyKKhmq1HvZp6Lfp8vWNdwYVEfHXBPJ7vwzokSZ5NJNGmd",
  "key44": "3CgHAiKYVewbEsbz4dQXBipFg1Huqpv4AdUdRBAh6jw94M5CHHYpvkrVhUjynwU7J7uDijgfDAxzjDEhnEJen8PL",
  "key45": "2D1reMDECkjrfSFTNNvafj8hZNhzc26bvBcJPzoaCWPYYx5UBpUDkwmLoucV4FYyNBTWuScqVzAD2832xvPA8y4N",
  "key46": "5iEFtzJ1vBCGdNzMRnT3w3jCns536JVy3z6wAXpkBPNrnUgsfEnFuWkYwkFatNg1LYzvXyt4qyMHdRHDYzpwnbM3"
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
