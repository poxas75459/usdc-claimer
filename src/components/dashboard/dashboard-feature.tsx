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
    "j8j3QbWmzinCeKiWbk8AY8LhMbY7hbU3gTSoJ8aLvu8y1WBCfszPHeTR5Br2hRV7QptWa3RDit6XpphKHM1LkXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55SiT5JPVd1BUitDMsdUmuj7bHMTXEEjELKnpSZGdzNbJTQFiQiK6a7USrrjgeviqxErcJaShBnAg3AWCztrA8eH",
  "key1": "2HrXaFUN6AZqcJRFKbZEnbvBBxdHXE4pMoiZKB6aXvTcbbggqCjUv9KBBPcWJNoYSEfm44hLPjpYJVzm8GVVGqqj",
  "key2": "5ztbWPNDNJFNLRhMJgmuk2oVkuduCp6KJ3fKKwFDwaWVThPphzKYo7p7Sj9KJA2T5cj29pyhrf2ur7VdgLy4TCbc",
  "key3": "2P699CcTcozq5bjVv2FiQNvoTvbuNGuKDhJhDPuxqLwzSQdPVSTpq7bCKN9uBkogxPn9bK4DGiC1JCot2bzuU5x9",
  "key4": "4LM3ns2Tyr72tw319CSCzq8YQJdRCCSCVgUM8dyshctdTU7PKsY4esuPKYWVJWB7n5ZxbYdej35NGWSsf4T3hKx5",
  "key5": "491mcL3FV1KpDZojT8aoCVbAE4qzDJ1LEbCnTpoJ2EiAXmuoCJxqn8Bg7h5q4Hs6Z41A3nUkDYZU5erXHKKcoZgz",
  "key6": "5KHFHd97tVMe5p1yfEbW6zDC7bgh3izLfGGkRseHWcWFSpy2RWQe6gfCgxxA7H9hTuPnR3fbUMBhvRJrz7ph1UvH",
  "key7": "3RE5Q1oVD6mUZcU2iDGc5nWmpbJ75F3vRsfHwpiTvDz6jLopZaukBWKWHN47bdg7ZKmjzC8A6y54piAdV5UzxXAi",
  "key8": "P4UQxcqGcrdCq3eU5um7UYVC74JtjhGk3RWri2UWcx9Cqwn1WxRT26oq6z2nqmsb981uos8WjJNnPXB8K493v8R",
  "key9": "3YkvbdBSWuhXVAAEvm7h1eHSAjD7vub1A2uEo5BoyLZ9Jj5wpoGRUPJ1oahRJGP45NmWvK231vRmEP7zzusJUu16",
  "key10": "4yEvAk6TwfgT3LLPHsgvcJkjGsQbTaAmayAK8G7fpWWfFiojyaDaouCT5bYMvBJhdnBQmt5Jvten2rWjCro4QDM3",
  "key11": "5e3AzbUkDtyYNcg4uqrizGN5xmzEvd49SP5yBW6yPU4eAPEe1w5JXC2fYFaEpbA3o3L6xooZm8Ty4Pu9Jd9gRkme",
  "key12": "2kuUm8PUzgdXmMLQEySJ8XdnvV3ZRmd1H7iaC9arHscbHzwGC8W16axoxnc8hjWcdM9TrkrMSPKbFEGDyVZPmViL",
  "key13": "AHrRXxxe62FTJvC88GNNzwqUPdFD8XnVCiTBN5R4nZ5is4JUptgQuTGEfvqzd7cdPrihkWLPSiRaw3YwA8onk5j",
  "key14": "5gbaE9ehSthWAgXKpUPGwxLz36UG4LXTDFrhvniSpnS8LYuLYznvncpgCyiNhYLHwnJ5VMi6Prrgr5A4Rej1dSk9",
  "key15": "3qQQaVJCQihR755AZhCK4cnmfNYCDf88GnxUL8A3nwobpjSRM5AVZTyM5Xrc4tHHVuaxEC6ShL1MZNbEuihC3PB4",
  "key16": "2GuZAiqTaeKzZ3HvD5eiUaJwoWBo2DdR3AeN4Gg79491CLkydKFWFEn5yjrwYuZLngpdTETAsTKVH1WF5jhUfcgR",
  "key17": "5NXg4JZgkDseA9ZkY4DtawXTRsdteb1EhqQ9999pqRiBaEdB1PXZrYX9T2kpC9Kp5DRjvdhzyrnJMrBn4W5qpRVV",
  "key18": "5gJk3XCwcQnZVXrupbb2A6qnQSgt9coBQjvHZTc4BHidHNS8xDmiD31xv8B3jyxq146j4aas3SQYm8mWx7JhRtQ7",
  "key19": "Tbu4mfo7ZBov95N3YH1m3AMmzqchSEiNhED1B1KsBmKyXhTPb7rTHxWwkZu3QbVW1xGnFDphTHyVFSzqQ2UJKpT",
  "key20": "x3GkzFTtUsvevi7uPZs1XMrCeJKKuUMpHBooLamLFsHy9pDrQ7ycW249814egTkX6jWWoafqXcwS3dZAc8fKyQ4",
  "key21": "owU2ZWGagUSBf9u5pb1GtfyHxetB6PEZg1E6CLyawN3qMdkqDQYZSfVjHEodUY5PCGyXwmtQ9yPtsLEM9zEJP8u",
  "key22": "62zRAMeJ6YAmHUHDjKucn6umtpyLiUMzJyUpjY1pN9iBJX6EEtQrJhTwkzBNjhcvhuTSBo882eQdLvKczheoToyt",
  "key23": "xBvaxTfX4iu19gPXSwMZcoiBfdk8z3sgDu7KCptpcP8iTKwgvxeSVANePEwyTW4ZDEKW6d9MFU2YpLaTuqDwqGN",
  "key24": "573nw8A9AuyZuSoNg3f4WX9PfbhAoXS9ddNeGSKuSW6nF8CvyUUfuZ9frsasiX7NjgXGYKFjfFChmUVsnHmjQFse",
  "key25": "58rEsYdFTwBrKe85eGGiMHyvruX5Z3NpK8DH4GvZZbQTQ6yfdSuf4dgEQy63e7nBCM58R285p1kFGcx4XsSNrNHM",
  "key26": "3fjdiEQacqgitnvoyRT4833LBW3VFoomh6cPccuvRT9JKJG48HzUKmDmz1NLPqJcEVPgdkoP8BKV5pQizNSF2LHD",
  "key27": "5wnuG6eTGV3NQBCzSan2PtVJ1bBZbEBmm83i15CNT4BJhitnqyXjtBK1d1Qrr8y54daNE6HXcKHUW44cNMV9SB1K",
  "key28": "5DS61UqeGwRNuAzBTZprx9FcjHEz5mXUEtkqqqqhCghnL2tgi8dvstq3nv7xW5sgwn1C11EfNL39hhYsVtaDTpPK",
  "key29": "23wbGAWsZCShSWLmNM1DcsmLfkTiNPF9JgmYcsArroM6rx7gKQ6H78SaaizP7L96oqoyW2gSGvKLFG7kFPVCRBjF",
  "key30": "kioL3eqoWcgFqYxDhA7omCcSoffeUtmFiqd115YSpnKtrnUwm9V5eKRQoV142DQNU7jCufuKSrxEZUfKuq4kGqE",
  "key31": "2c6Pp1N5bnvG68qcJhoSdPFhVWLWy7RQ4AuDZHi2nxwU8x9sHjKtKonp6wDkKrhRq4drAAkGAVrcpQyXtNApZmvA",
  "key32": "4Edjwas1Ww2C9MVWLhFe5tHN9XndLe1Eorp83De6eL8Q6MKcLw26GMcRNtUbHBjhwp3zykA58aFsFuZ6mYy6cnf1",
  "key33": "3hfU9ycyfic2wNAQ8sNZQ4Fa6xDP4av2hJTkE8fxZumoSQ2in9HoTfAhj1eg4dd8WNtEYzXABL1HcJFx3ea5PkkH",
  "key34": "4bNr28uCaqVooUBXUzhqxV2W92i6JA33hSW6wksV5USWexvoQSZQKMupBZBp835jTUoP9o2DUFKC31CBFC1esAAC",
  "key35": "4ikbdDrEwFYQjECU5qdNeJmWCycZFeAS1yHQbyTWiovDtQ4MLzvfqvn5wPnDKFnpuoEZg5Vg1X89mW9RoCjrQTab",
  "key36": "5J7h158qSBcgPMb2uSGdgbNMVQrE71DSxiBPFh4wSGxB3PH3m1XrLaRcYcsTC3cEe1uJNY1DAMQYPph2et5B4uK4",
  "key37": "4h4wQVTAD5VvKwtnkUiwMQG7byVbg7n2ckaWvxE4ivYMc3xabr5yJtetaZYaXg2T79im8jpnjrTyeoH2Uz9G2UoD",
  "key38": "5bxo8Kpvv7swc6MFL2z4VbooHk4WvUDiTUeb77nfivuroVNjZANrkhk1jcHsWyfCTGCC2QFcu1rzESPtp8auvBND",
  "key39": "42dQ8HJzEY3nkBPt3BS2pXnQkrfMmoztEWpwJDjvBRpUxM9tA2Wo6mjTuHwequFojAoqnqvywnZrgNpMyHJyDJBT",
  "key40": "2khymBNdgBZSuPCRQaEAXWidZkWSwvwKbrrp1kzsNdDrjpmxsuUjkYbeNFnbY7WhwmANu3gwYXDQZXegeSUAhXSE",
  "key41": "2mk81fT1jrdARroRxvntZGxkbotPcny7WYCabxGoBTRYAhfBoCkr1Cv4HfnacFPPtxzxZW4L8m2kmTxEMNCdPeeY",
  "key42": "GrEdzSduiHsA9MFz88z56PfHFh9XwB4CJ2z2w4RQYTX2WRwALn7wNYvoUtKTD2sRtmHBD85DFTcq3DDHs5ay6GZ",
  "key43": "3cUhFLk8EUibtMbwh2hvmESPKNh2G5EuWjVeNrKg41PEaxGWRfar8szRh4i8JJ7YKrGaxym2CwwR1PPszwA6LqR2",
  "key44": "3mKbV4f1ZHfTBT2ZhucnVdSPY1sjhEYQXUvqzQqDfU5cpLChwvdKSKo99Uh9Lc23xsX9yAM9d7QfmMtA7P3PoMDB",
  "key45": "5cvRARCkaaB7quyr6DBbVkqmywik7gRKSBEuZQGj7MtLmmYshKeQYQuc7kjJTgGNqdewUNZvBLsccBBzMwCPrzZD",
  "key46": "2BCd7UGyZ9omDyGgR3AibESqipbsoHEmy3fUFQoZtUJGR14QFgasxmVSv1AqGvcr8CMQo1YgGdZCQQffnhgxx1EU"
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
