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
    "2V2eUjSLq8TPdArd5rvtkP5Nuw647df4YAvbJ54NdRLoJDTMwojpb3kzs3RAZ4S35LcTDokuFUERXavBo55gPW2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MsiwnkyfvrRXg34uN6dvku9iWVNKCEUDBxJWzjKfvrnA8AMbUmR4q8vRqq6wANZXu6hdieRbQtTW4nMYSUvR9UG",
  "key1": "4yfd97PV7rzzH1KqxKieKM2nCh7aUSX2QJFrEZnMQC6Yz7kg4GvGDBpftzibmXmJpooRCoAjfqEvrrsmVzmEd2Mq",
  "key2": "3jvUuxzNBscTsJCFWUfMjmMUXFaUxULrSJYQESEaoyYwNNm47Ajx7Egj6HWmMcPEKz5cxeCh7YM5dwwj5mZcWqoh",
  "key3": "2hUM2Pj2fLHFjupRwrCZY4ik6Urn7p7d6VwACe3u9v6ZheCR2xfqjHFnKaLasEDxPxDCZEK6QjvrXuDMthdYa6Bk",
  "key4": "4xNt8nVgikCqt2ycspXorb66MsryPd1hn2zB6qWTi4LaGoa1o87EHK9jmyHvRD2xpCJxFEK3YPttQsaHXcrysMFE",
  "key5": "2Ciaq889a2UzZnm3tAW94Q63nQPQ4Lqn7hFoPkh64DREvbQuR7Zp2BL6ebkiZGk1yVRJaN8MEAAtAZfsCS9XsjhB",
  "key6": "4g7m5KhNySu9hmoYHyMwixFmdK2RaFUSwLk9oo1A8Hgi6XGZhAetRTTyMkfusWvuAd6W2QRXCxL6iW9H3W2qKRWB",
  "key7": "2WeH8h64RFuDavDE58Pee3fzVGixCseJy1dbyRL4ALMHNaisjg9xWdF1DGBSDGwn7SbyVzV26pDd4BBFjHeTjkeg",
  "key8": "4txE9ZJJGPzwj9CdYkg33NAWdsL6Qwq6X7wdhDNAsgGEE8x74wLMNAjEDXCDMmqNLHjM7aYAr1R7QGwhksMfzJe2",
  "key9": "3mB1VhWUHwt36YiCwLS8P2SWpdB15AMZJ8Kqktx4YR2qmR3Q4vcvQw1azvqzmpd8YkSKGMPBp8c4TEkW593iHKR6",
  "key10": "2SCob1yioBKryNNw5KE6RXQo9ACTiLtnbUfA7VJMa9GWh3g1zA5Yy47zvqE6VLxFmU3BRSc7pKAP5v8mMY9d3Q9L",
  "key11": "2hEd6AUwo9mAqqsVWC8cUjiFqq5zUPh2RX14Au8roc5gd92w9FfnYZdG6UPtY5e3oqRjrhvgpxAu55Qi43JmSZZZ",
  "key12": "5vPwoqzqbT9XNFDMgy9BAxdPkySEsroM5U16PCRMRVKpot1836YbMPLqiFNbgBquFGztt6gPDTJRjouxghd9ojaX",
  "key13": "5SuuorxoT7FEp4FoEfMfUPkNSt87WKZGowjdMvQR8jPtgpsjPN4UgkqYHJkPehGwehtQwmmrpddURC8ZkRD4vHs4",
  "key14": "2uxSoabCczup8ohNQtuhQQ6LsPuWq7wt69rN2kkzN75oj4CKinS36nLL9ioThF6zSnTGRkZLxh5iGRJxMpY4w4vZ",
  "key15": "2e7u4NKPtet3bkRkxJcdC3ZxiNDeVj7Um6DMjjrJzFYRdSPsKjjKho273ija3K6zjzm45PSZoMca8E4dZV4ZDd7K",
  "key16": "2J6NNJvUDfpc4nq6XadcrFwXeYxpJxSvDeAwxWKsqcaQnRQnJ7n2AmvitkzBCqJzyeKuW4CyzkL4uuFk6c5SaPna",
  "key17": "4SyjvVzxh29MvKoZEEudT5aFan6EGUGBLg7mzJzaQH9YDyjo6vamSueJ8ZSkwbE2pyPcX8Crj8KjDr1HCoErmVC8",
  "key18": "3A9Gs89YoCGFF9EHyR8GmkAdnotuQ6ahjQ73a5jG673w4kKPA6s5g65TXZiCTfpRixctEtgfKmKvjAtBqinbXcMA",
  "key19": "2rG1h9rBpxFjZ86wpTzRQg1UN2BsMk13sECPqbdK5ZdmacFLzjBcewm38pJBG4G6kgkjGd8vQ7x5T6wnKjNEPU8x",
  "key20": "5i4TwAbKGS2z6wQh5zet1SbB7jJ34hVBuPXqRQ2GhLrCJTpYVX397G2sB9k5HWuHxYWt4DyHMhkXMCo1xR4gFC2",
  "key21": "2DAJWB5fUDhFvRawgY5evN259w7vUVKwvLcHCFH6fiwAuezAmDHReajexSYuR54D7AYf4KDbHRa83Pnc86zoNoYc",
  "key22": "5TcUsRG5cosSZGkAxwpks1fzhPa9B9cEPg947URigGTWY5xm4m5nMiox6fcNSeJvz4AWjwerWF6ZFMJhmLTQ8zES",
  "key23": "4AKBoQUY7biSrArxBgUqUkdcYkrisB846ojX2Yv5VXkVTf1xKasihTisuZanmKxmfkuGur4zFdvULvQPJhDaHKRz",
  "key24": "vWzLfFokR4ZzjD4w1cELSJcdDvDBkMoU4RBBQuBL9Srt4jEp3ZREHUpQuT3cQ5vVFKwercAbLmVpDz19BRpvPEz",
  "key25": "474Fi4L2u2rtVjK37SMugQV3q9fWB2dANpaVSSGa4JFcFPZ42PBvN8NJ9UrC7GHGfArKbhJnud1JJXRdmcXapQj8",
  "key26": "3igCjaW27ed4qXxcb7CX7HEzciZkLLuHKTYopF3h1Z5fXrVbjFVZwnd1kBRnP2PWSWJbGPBDAogVLUEdNDF5WLxG",
  "key27": "Wq4WsmJzdgLhvga4HJLzMD5DUh8i48iL87NMeCCUv3daKU2VXaJCr4c5wsdDt539cf7bg6EUWW51jjGKZan4D77",
  "key28": "62zq5evaihtfrWxk2wqRrq1zphTBd5SNyRfGpPUi69hqNAur2FKJJZaN8S6qnYWSaDGMC4Pc5a8nLjLJfKAkSXZw",
  "key29": "22JHDnWkgWFEwUGiEMjVYo5nE5e6ooxduDvDxD9RF3tn2dtEm7ns8dnrnedWyStMrSLvFVFcK2myhxZAFnEuLTZB",
  "key30": "3WKscSEMn8xcaYh7Ff7V83qkprvjjuSnYStiDEdCRcyRnEws4yhnUFghQ4KvscNe5D8cFWXDBogUZhCXhTEDeUr",
  "key31": "5b6myLF6HYoeLa8nheNgo4ueTBu8gSwdp9m6XpMcgGFbTJ6b7UU1MPtaz3zfN3XhW2pNpMeTSJ1WGr5iBoTR8mTH",
  "key32": "4EKqDfwfzoSNBzXLsBfTu9vwrWHv6i36tS3bq933DGhNTJMTdsYc8SyfZ9gPw8DbuRniFtLCa9ksFnCZWZaGavZ",
  "key33": "2xi1mz9uB2C7gYujnqujK9HDD1axz64ig9GyCKQgT5c1Be6wx2YdCY4PNkCf18RkDJnG4fKn6WX6zywRLWs9EdaN",
  "key34": "sL9Fd11LM6kWwKy9ovuvaLdywDSJz93zhwicVT4dREgoH3VDeEhiStUas8bkjNTTvXBmhbzhfwE77AF4mbS2cfm",
  "key35": "4J259yQWj9qWMW1EL7Rw6fSCKAUSdvhEtKKECBotthGaerCGmt5xWQgK1nypPEzvQBwpbcy9ktoqgT8QwWGXLmGK",
  "key36": "VwDePKa9iJFTzVWzs8XAyGPy4BkGVWVD94oFx946VEaYMwccCiR4P8qDdL2qbbsAUTbbwqeGvMT4ubFyhuVH8v8",
  "key37": "5y4wWLBAicAfgQpBKRVvrn1RPo5UKJQKNxvi98xzAZ1L37cRdUokuGfUKcJci1AWxZ84Y5q12o3zk8jdfXzHZ5RK",
  "key38": "UAybJyo1fc3t63v25BJNc3tEzPcPyRpaqPLvPRsEChTuLyzPVaPeYVNkzKvoGnTVdYN3VLxk3ua4q5GW9f3Lzww",
  "key39": "iNNLK3zQbRA5tjb17JF861f4Qmd9xGYumYQ6uY56ki37ty85Gfp7FzxGhfHMTGX68VDGdSXTCkKX5tw7E9MPQow",
  "key40": "Vsruc15mtn8DjprvEKcFqexovwAH4KwQGrLxHJXnwtMu6ghphDJU2ccnBZTvHHKusDeVG1yiixeFVzpftU8dTBj",
  "key41": "Dq7mETEWkhYnSaxfkeebquf6nbF7SSrVw8m5kFM3X2U4WerYdk4ELDXVovKkk6xhMpvodYZxrp7mwzciRevaJRz",
  "key42": "257cWnfJjPLfq4VS39dcMpSVsyTsBZhjdaa5Tm83JQftTt9Mym5D782kzGJWPqTFoSoc2joo2ZYiY6d1f2v6gNPm",
  "key43": "2HFFfGBLUsdue8sokCvFg8rZKsQLpThtx4mG8WJ7kzFUoasZNLEz8j87hThVDV8S5iNSwhpeYvrxGsnZeWZgFTtX",
  "key44": "5FK6L2ii13yZwv2dHh3TrscCHTtiAGzVgAor36H7t2HxPcTnEc6cviAYzy5y1A7gB7cCr8yGcjUqqvsNst5ggevU"
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
