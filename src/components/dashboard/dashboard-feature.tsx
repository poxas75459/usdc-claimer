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
    "3Vog7EkEUse4KcdRWb5aPNzNJNrvc57YoBfhtLEiUzJvfPiyVUNou6rmaetcrTSmZ2Xj2AGsYHcK8QgxSHdSkfxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lk2TdH4QAYiTVkD2fjaaKGg8xaWkgX8syqAVjjMAifirHMP253dbLMMNefwmQCGru1c5pM7t9ZbMbcZR8smUwPj",
  "key1": "5Z2EErz5Pq4eWKLaAHNBj2uSLicyudxG8aR3r8i5DWTknrauVVnGVdJ4Q2LAFZ1YepVrwQ8FaLNJ92kqDBpamUqL",
  "key2": "654vFfRpqHXGaZrnC73yevRe3XCcnnFCNUEc2cna4AqcJvJz7rRKnuspfYQ233kPCcbcBfqGttqnq259Y9LkH8he",
  "key3": "3JmXVZUK1ydyUnB2eArzs5oTTEK4x4cu4BneqmVpiS5ym2Y6LRSfvdN3ArKQSyCaWEKpYSjBXRXJroCwfMYvPxjd",
  "key4": "4QYQWXWg9tCJhWAVNWNXy3KHz5c7f9NwY9Bd9M9arBNMGEpJab5LNNHqZ9SiS3GN6ZBuNyNbcWuJMyHka2ssh1r",
  "key5": "5SGwGXpn1AyPYyFCwTsKtLbCMh9CWNkkrfJhBzd7iME9dudBpYqUsynzoJGCunqT6UxhEghUGxxcsVvAPV6z2YQu",
  "key6": "2it2TyVpKuKLeMMt38ofWMgyNYAYVFHuapz7nzpFKyXYvjdqiLu5yZCESFifZQzTnmVLWkZzm57ucex4kPih433B",
  "key7": "31c4xhtAx7z9h2WJYa1bs4cdoQyvrTCSb97xgMqpwUNxXdEBxbL2tgYcde3CQXB7cKJFJxYay4J5n6WDNaRQmNxz",
  "key8": "KHciyewXx8XoCwAhaM6CpGtQdVf6UpEaQR1L45xN4aeQKGXcGjHBEpTGcB1kVYEeBodasimjVNGozNVWMYRHZK5",
  "key9": "3Bng4g99x8FR4ku5Cfg9JUcDkCGYojpPGNBNZ6ASYSJUXeojivKV8b5uPenEXPTfGJh7Y6dDaXF5oK2WCMy1Pyaz",
  "key10": "8FasHdgQSpyUyo29TRCdBHMwraYh58RujzJdabBbb671EFAkQFrTE72yeBYtirJo1wsnXU8WSxk7y2QM57NwvBb",
  "key11": "43eBS3LVcnsCdCXoVjfLk9VSXN3PuxyG6DM3eT47p1mCy4wiicQRmkdPbbiBM2bmK9cBJSRAhb9J9JU1h3nwudke",
  "key12": "2hUGaWaBzyJz4fFCq6YPAtgb8aGrgCd5itGySSA5tWMyrosRcE9koXoqchVgeHn2DE9eEzjgux13ttCpRPkUA2qS",
  "key13": "5KCZr3kRfrc3q8bjwJLD4gWH7kvccBfVS9YngC1a97GyhRJuoUEV7To5q7ZaqHqUhaLsR4maQSneMxkg8Dkxhuni",
  "key14": "5kBMhWpS7RuxLsP29iJMpgU7bZwMGWjxK7GkmfUeySYSJR4QVypvFn57iHBT9PVKreyzwNr6VuMgUMP4BNt4xfek",
  "key15": "svajo1HzthK8qoKS6bn63FU2CbZCAB8DgQ3CRMiRXZVUVcHaMX9VDedhRRLFD2wqGu6eVYfsu1xhS3oc9VfH2T2",
  "key16": "65rPZAeicxKoMUwUJNUt5pPKMArA9UirmtbBxbgb7bEzmhs6Fk1Y6QvJUqg9t8KuaSo7xWbYy3pAstfku36oHAVt",
  "key17": "3heCqKdPjmicup3EnPyDbonHfbCEAt4XjEsNbM3dxkbrLgREW8r21FptnfxSemj7rRJZpNsb47QQEMvWK22qhT1U",
  "key18": "LCzRAsrS9yhuY2PCCHLrfJ3a1kJ4zRvhn4uPajYkcizVzhL6AzBFPSxoQZaeJ69QgejPt7Ye9Hp2tt4xzxNkdQA",
  "key19": "3K4ykLNegvWMAo6L1hdktpMxAgGnhKoe4t6f3SznET5D6RMfGGFM271LXLEsmihYamegih1KwMsz2qkHQSQKRfZ",
  "key20": "4V6AeciHe2AUX3CUe2MnL4mGRKAHwY3woTy9CJQG5MACFN9fDSQHX4YiFP4qbdcUr2QRBRZ2Tnn8s7FgNnt2xT1x",
  "key21": "3tkcbKCPPjDAD4fpZyrVWTJAX7GKcJ2n6YksKvTKuhqeSTzfxQJPgimcVgjPDmignjQwndb6k7grDfbrR1UBrP3H",
  "key22": "49SZrGWYZnHVo1VQYKBj7M4icPqVZNEQHN7AiSN4apj3w9BvcMivNMKoqgydc5V32gNxpUHyUHrcWLkZs8R13hN4",
  "key23": "3GBKfSpxFntA4BtpB7ejxJyNdzTS8h6844dphFVReoBwodUsXBpEJR4NAyXERjz7E4bQKFsBn79ruXS2t22gnCpA",
  "key24": "nRi9xUmugVviFcz7wnjxVX8BZddVwxtBkZ4LKHbbZ1t6c7a1vq4CqYc6i25dYHjmhVyZp8KQNsrJjUTgiHNGszQ",
  "key25": "4BFMLZGrrZWMi1tRr3KLX5NWVyqrPAByQNamVy29ACuqa8vDdYtKaoz2e9G4xcg9G8NLMu8pm2EayKdbL8ViqteB",
  "key26": "5x3Ss5y9xKCTuUpqaet5noqj63K9pj4bgJCfTtAoyWVBiUtuwFGZTqY6kQHcK5eQH632Yi22zPxdZ1GzeMDYT21C",
  "key27": "3GSzbGnyghViKLMBHZ74eJ2hLGC3YswZBAUZbnopUaUPd3NLnMQogtQjqrpCioJF4PybuQYHFsSeHncMiNkzRDsc",
  "key28": "qdpkkF2EswfGyin2YsqMaVwMCk572g1wquYWTe15o72CSoPAeMxV9oD5XmhveRpQsJz42cpsvMFrmMQ9Sj2YjBk",
  "key29": "sceFTSFVh2zeQ7jHUQEx9oCGS3XxP54nAUHfjjw8MBGfkfzDZGA6CAeNwVgmQb2wbr5LvG1HYMVAw1apKKXQ4GF",
  "key30": "5a4mDcZfaHHQpCvL9BfzRGG6UrmazZu9re5NCYfubuPaanoFrvC8iqAubTB12YHvkGrGacnJUoggibMxXJGPonub",
  "key31": "4aG3MRgwM32R3PkENqf1k4ZSYz1FAZE8FhcxVKL4WHWf6SQT79ypV9Ch8ggwLPqVUJCbDsH8brAWpST7EqPx2jbL",
  "key32": "3GZjrzatSXATrvA1pYW1h98m7StYL8YYbGsVe7h8xzidaPTWzZtqyZF75nRhyexcrapQrE9sT3Unk2StvwSPzWB9",
  "key33": "5sifeZQTEMPciEbXGfvW4RRW9T12JwhBZnVjSctwjuJ8hZmjGvDg2tW5FqpVUSAxj3EkU5fuGSXNUBTDZAu1eHxr",
  "key34": "28dqfoWqD8W1RWEmvhKJk3j4QEXybQw9hN7ZE1uwK24fhjkd3vPHEsgCUwJsMcNB5JKHwgCzb7ChakMsCYossBPr",
  "key35": "5hbAxvTHjX23Tqzvaves1mCa48CtTkakFoYgGTrcTJz5yNJ1HMqdvQCHudLXkr2M22poNAqSPBHtW4F6g2TtveNc",
  "key36": "5BwW77he64As4ihstbWXbBznhSyNHiCiA4YJQcFTdo7k8FTmRujL5ESb4vT5pvaUKdp1KjwGTyWutdZRDvCXgGcA",
  "key37": "2vzsoqsaa32ufC3RZ7coAx1jKhjiPg51spiW8tQ4JtzvGm6B6FzfhHJfBfi5dYV9qD1qr75nPpCeDKWbCSDGEHV9",
  "key38": "17hzUG7fsY8njVjYztQGmpW5wagvB4kz3KmvqpT6xE6M9nVkpgE4iy5MqmaUUyAzV8kgyH3uKGeuCchhwXst52k",
  "key39": "pprT2L31YHjJD2RycK4PyvkDW5ao6y4teLyc32qpmC7wbBPistfLtXvsHFmbrJ3qvtmCwHpdzo1VcGYRxgmpBzw",
  "key40": "4awQu41QsTWL1woZA93GdcDF7XxNkxkAL1rLkaSMhxZrEW4bXE6R5mfFjcqUq3rJQE1Jtst2iATQTMVf27y5HnGk",
  "key41": "iekXsHsL662YMomVsULbMveTcYiajue7HL28g9n6DTU7BqSNC9UeRBchsSa4voZUzy7SARCWqKc4mvrs5hxZmfJ",
  "key42": "3qRjoz5ERdh1YgF2NrfCxCU7bFBoTtTE8Tq6tZHi8dxwhQHe1AtS6L3UeCsLDJAzwhBho72wKnjjeuVMqbRr7nes",
  "key43": "5Dq6CywZvWMdPt3HZXD9cdVt62HGuPBhaUbTEvYDdqpS54bfAmTJGwYaVpw45yPdXw6w8AhWcw9nukz4ffavpseT",
  "key44": "3CaVS5Y7Az7KimsDnqivLj36DSJCEvfUMLzDPzt8mzBdsUPnijMRKs3EKAgeNyLgmiUn3V1hqvyfkNyeKxNiuXH5",
  "key45": "Sn1BZwYdoQ9mABt6ieA5YEikhciGJwucAbVwD21MJzkhM6kKB3ZiLWGcB2Vk2ZEfZku7uAw4DhEyZWinXJncGjA",
  "key46": "5H4LYzrxM7qJU2Pi5EWDWU2AA2KVAqhH7vfmTqEhr1tE3BQfFnQZ1Y8tgTuzEfxHukUrGPFBQcgvnRvESM2QE2s3",
  "key47": "5Z3C3fn9LDWZctCU8YJbtW27SMzadZDKkJcASoWgQCc2wzbEsrJCu8ageXM5tpq1u8djZAc1XJmqgMCfF8FZV6bA",
  "key48": "3Y4rTiHajb6MhKZ16foqcTTbHhSpTUQTxYK6LKykXZYxFaUM8ejz5TxrkiWzSTBAKVtZZAUMhG2aog4H75FBLuox"
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
