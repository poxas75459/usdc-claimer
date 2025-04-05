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
    "rDAzVMtr2YehnDB1rKTrdKNT78FaBs6TX8YE4iYkMzBjGr6KdWcx9rBA7T48q3LNp26pwQoPKHdNmxhhtoC3Ma5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C1qjsFSnynYasEMkUuPtJcVX1S97tkYs3oaSeFgFdoa7aEGuV4K7Zu3DvtA7Kv4QFWASjwvT7mhU7qbPNag2TjX",
  "key1": "2c5sFzEJxYNCBtyqvAkFUEq3BKvBpwxR3LuvDkwPLpuKg8bXLH2VA6xUi7zU9iCeTvV9qUBMVUVo12jszD7Pa51D",
  "key2": "2i2P5Yx9B7CRvRMZh1S7d8KEKs39baN25ttJKyhyxErS8NeQ7FfSnmaduhDiarB6arvLX47BvY9wDc9ZEVeYqELS",
  "key3": "2tfpQq5G3poybXetuu6U8vAgpxjnzbc1uWcRu8md2sVZe1QPfRXsDwtjSyEKweUEcDFQHyiBn8KTkUH6bBcnFXMK",
  "key4": "3x9gcJ5S7fZwhHuMB2FeSTSNVtFYTFZ8jRzP8DkXYrwtA2X5k72cNHr2ujBwXYn7AEWSyaS1SjzxBRUFEhchVFqx",
  "key5": "4ijmF7ww6good2EHxo7QSCZB93WyUwSseTb1eA4MRTFKxnC3NADVrvfGfwiz29uhH7BkBbdzTtf1YPtJdk7BzZ2E",
  "key6": "2AoHKVNJZYunwEofneeuhSeDBh9iktuE83bhAz2cewA93dMTZFFVoMtRWPpc6SzVhmTCHPUZ4ak7iUwqwit7R266",
  "key7": "CZZEAfnju5pMBNygJwZm8cLKo46qJn3MPWMrGcqKnJP3RD1AztiihmCd8z1oWCWUnH5gviN8hJXJtPUKpGRTggE",
  "key8": "2yGq79maD8bGkNFVzrXEAUy4a1bD86AZnZeN2a6NMQmniMweVr2vrcD3CDsFi5wQFc8P9A3cZ1AfNShggiP44szz",
  "key9": "67DLSiWw7wAosQCUEtKWd2usKYRaedmH5PTJYzrjx7aH3as2CSrxskueW6jgR6BJE24TDfXXYivrLETiSqnY8sG6",
  "key10": "2MfJ9GjB5ELRoh6zEYJSHYYaaHTuUUc2GbbkarqqN1EKVBCKCTdh3kgrdsj1ybz5o6xPgyv759B1XXd6CUSfVDf1",
  "key11": "3istNLVjJSY7Ghp6F8zgvgvbrfc1hyRZZG5v7XyhyLUPYES3WWsN1Xvgcqdy2cJnHiZYGXUFSgxKSocifyCAA7nN",
  "key12": "2tph4tcyFcLCmdP7KRZWMmqAGreboGG1j8QixRVkzRYPPu32UQZixQ11VMKiBU2c9ZEgwLKPkwJ1gZoqe4XqzY51",
  "key13": "5HaPvJe5bfBofcmMXdWNHt6muHdncnkEHV4fBaVzg7fzbSc137QP5VLGJCSMUJoea8iELBiXWQKYXrhQEdY8Sc9S",
  "key14": "34cTE69v3jsUWXXznaLVnWP4PzPJ8n4YeTPeUyxtfNLrZHRJao4QJBxqX327yZzk4rk1TMLmNXeLCC7xNJ33KFEi",
  "key15": "49WieQHxojxv4K5aTZmDREDuGEpWA4EuzDU84P2CpmgKFEF1ucE4AoKP6V93uDRAu4BkLgvxE5UXCHScu9C8VMUt",
  "key16": "43We21XirLEHejpBqhUGEv2Gi5Z8XMqWkC4DnTbTiVwsqq51dBiUKcUPqJSwF3ArXjc2CNC2n1bCDcakzNZeGjdY",
  "key17": "3vR5pXc3f5m3vFjcAK96rv776wGC8p9DM2NwTton1rumMK3V8UsXE9TTVXcyQZSDyg8arPKqcxREnhzZvEMLP6ie",
  "key18": "PYBuxAfp8aeZtAsaKdgJRn7cQsht5b4wi3KvaCKwQ6hRMdsNc6tinXgcBnbtPhhpiGkXRcto8oqhU1CVkqGLaeG",
  "key19": "4iftruJTHQBoRL5acrb5JKS14g5FGUsnjcskP9GXmZ7Q435RBLLdd4BXWTGtxpYBav7AbZVXEsHs3EHsu3EJY5Bi",
  "key20": "4nTBixcZjzuRuuK31idCLqriddTVNue7mSdm3p6vihgEHPbg3UN4a8YuuGa1S2kt3g6CrcSJ4k3ivC38AJCrKwvP",
  "key21": "5DGCMUCU7J2KJbVV4A3sYXjUjCHMoPTB3idxcs4ohJA5qAh8XjEPYqWv4cMaHnTRdnb9X9jyYPBScxxx1dzX42oN",
  "key22": "5D1frTBG831FpRMj1cGf12Gd2RqZdketqqKvqcAfcUWFvvvDTE2wee9pwb1gtseG483u36yZVv6yn5PYfCks9UBo",
  "key23": "5uJxPUzDU5n1epMUqNKJX2zX1beh2oJWnihyJJxqBcrCinoqgChxDnsM2cy8c4VKbp1C2fkHZwqQZ1t5KEFeKBBn",
  "key24": "2h7QRLqsWgL9RqDrdZ3KCxtfxW44RDLAWHMh7c3ER9FkHKr2LR9FUem7xweM1S8s5RdhiGfVBCboRWz3eStJ5Ut8",
  "key25": "63U5y4b7d1P8s44HKZQxdGngSTTiCgKbLTFUChGNKAYbMrQP7S6ttsu1hQL8Y7u3eERfjFejzHSRJpUYVeFsfePq",
  "key26": "4TcjyB9q4czT2Ue26NczjmBJ8KueVpsqhW9MowXGLWZeqKkMC7kXXuQDPGz8GDHiYqUn9rN5jsR4cfroBJYi98Z6",
  "key27": "48scacmEnNTwte3REqNn8yJAtJ1Ft66ggMxjaJQroMGTdPaVmGmn5HfsfArMk2qjjHXbWJMN6mCBRFTApAUFU86Y",
  "key28": "kYLmA9TpEw4QKyRPtcw9ukHU4GFDwoqERYWyfZ1SPJ7pEKbvA3BH2gj8SkTSfF5N7KF5S7x9A5W4fTAmu8oMC1P",
  "key29": "2JCSDanXbDSwDkf4LTWi7smwfTNwhrQdrGmzp7MbDuHJEMowVp47Fpt38D2mE6ASJXum6Aq4sXGLRqURprhHM7St",
  "key30": "5mPV4XsxaEGxwejmaHSigKZDvvVCcPYFLZfURnDcU8hTmpk16T5WMdyVLrEF5Wx3huaEBHrK2HQtKmkv1MMLTAHH",
  "key31": "5jNEG8kPntqxXAAJRbs4Pn2f6mMbNtXXHjPadiGPrY9gZCPTUjPqqonzFKukK8DwdHHvBRu8GbdhqazYY487oqzL",
  "key32": "2XiE5gXB2Ringo6kvwRyo75fd6ofggo8CzMe3QuhAMVhJpsyz6usCGEbtKurLwCWBAGFM9n4rZQD6bpqfdMZkpP7",
  "key33": "BPstwfAMDMYrz2k9TtGe3RRWNr5xwxdbMMM4aVxByJ3z3gxaLr6heTQvsfmM4YyRoiJxKsMF4yU8QwpDcuRpK9C",
  "key34": "25F8uUUzcYE2hGVdctB4s5rU1oRr94ReMJCNZsgKtYBhwFicFUmS8Nv9WNM6wJyFY8fe6F4CWMobuctgaiXX1viH",
  "key35": "TCQ6Wjr7LnoQn4HtuTsxT9odi6ybT1arsA34kSQP9e1tbhyXmzV2gFPEk3radXKbrD6B8mah7GewgASiC1GwhwF",
  "key36": "4JVFb3g84ziHLfWq6rmhVyKCprQMg5LBiea5PoCGuFvS251hkP5qqL7R6oLhgwfYLx1fVr2cavTZrNU1zF29WVvK",
  "key37": "4pRv97wrhA1RRKzS38tTxb2PYK2brhEKcKV7Q1sCbsWt9J7RxVbYBvsTUmLKthJ6pSvqb38TBRN6xB7HD5qnaCiQ",
  "key38": "1XbPGvnwUTqwQut3tmLd5gFFCskVdXcHMEhKpxnnu6B7oAFXHGjJmkxfoJsA8h6hkQ8wo65ro3Jrtb5tvruiYaT",
  "key39": "HuokNgePekyReT1Pi3hQxyCHgiMt32CwnrJy2ma7qCNQaL1QUJjrwTyf6ddhE3HCSCUmuTJ5wf9iVHeVqjvWv2L",
  "key40": "5ASzQER3SXBv8yTQZtHRFXZwHJ1aZz9iYXuRgkC55GWWnvV9WFwxSRA587esC1268QQcwU7iZNUnohC9AgXBDzEV",
  "key41": "yU8eb5s7emX7zoZauFjdzvCAJhK3ncBY7Efty7HZaT6euGAuTjuumPJCRiFiUxwTv1WgehmRyMQc7qc4dRciLju",
  "key42": "28FGJbAsPxphy2op4gc6ht7zuvofTRWp6yVpw3ocoUixmsw3q66FQiXC3VCw1G2xaKR5mYETskgVJYUcC2d3DbDM",
  "key43": "2gFkbPgaFgjgYm795a5uYJPNCL8HQMLzihV5LA9mncEBW7ucFEje13KCyZrShsn9eiCCrEBXkjcWPhCMfDmqcg3P",
  "key44": "2cNMVtd3Ugv5encQd934uzXMkpJT4tX5upkE8B2a7in6MgkWz8eM4bJjqXejo8wb3wVXxL8bBW8jL2fju9dT89hY",
  "key45": "ryt9pRZHKXatjdVAN4U5CSfWsXUzcPhMbRHqNcd66Mmoi7bkaDFyh2gCZHcRrgQpTi2wL5AzMWMYuvnJwaUXBJs",
  "key46": "CqwFc7TLJ13eeNFP2G6j3bfH4vqvLNC6mALYeL6ig4GW81XuXSqvVZyMZSwsfxTnWzerB5mXVjMAzRPsjh9TB7o",
  "key47": "3MzV5RbFFBVY2XvzAX6hjTniGGEfuCgNc2zHmBmvBdyK7i4ojBADQ9SLJgqc2hEP8JzF8j4KGk3S3B7q2XmbPkaK",
  "key48": "4L8W4CLAXpycwmQ4SbDcpWBnYYX8W6Det8i8BSkuyghbfTt1U8cY1bMNk6CdSo99H2kXZYFniLMpkECr1ctyMhyw",
  "key49": "HASSBbvyNmExhqXhqBfzvE7VWh5QTAkcMzBdmrx6SMWpi6pnuNWb9s7MYzG3zLBBiXgtW7kR6nbcP6r6yfsU8k4"
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
