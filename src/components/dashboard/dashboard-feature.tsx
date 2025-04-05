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
    "23Acj8V6Sr9PWsrx2kU1v2TyUqqrm3VPZ1TugMXHFGam8CDmSF5vGQFCk7hLMnoCHJH4eHTwSRsxVUY99MdjQn16"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26rWwT5LdVe4BonQFZFbcjNcDJuawCzQXE5NvqV82CtJViFb7x3JTV2EZEhkrCP2piKRqFZcyhHdFmuaocUwUePs",
  "key1": "5NLUUsneJt5JiPUgHCiTtvf3F4urdVkUhAocwjrA8shARNJHA6ZyvhaAfXaPMoFuyhj48CsoVwsZoejxqUJmBNgj",
  "key2": "3rLSay6Zphk9eqn5P8QhSr1CgAwqK6AD55s1sHEgMYVw2FidodkAFePwjdW254pQTaN9D2cqNNNnUoMjyATzw2tA",
  "key3": "4smkxbVCBkmx79hwP4GoPL1Q37isFG5H871N9445CErrnA3s6FdK3JZe5HbaE46ZEEdvh2FLzRxkDrBvvbsMSQxr",
  "key4": "64KCYADwdM9mvNE7LxiUU32UQy4msSW1EHcQW55BL99rqsfWCAtUCYntQuS6xSeEGdtfgqpvFKjxz8tDwdJBRzPs",
  "key5": "4ySCyDXFdVWP8QxtURZDLScrtzWwmNuwCWpSo5fZy5uY1TQrtEGYk7u5r1TBH8ydKuLCeFx46GM8vbJnXUdkt9CP",
  "key6": "2ETpf7kFxwQnimqxJCUZ621xXTLG66QGv4QZioUwW3JxkCJkb7MNkJJuTbBbxmoyHDK2B3GhNSjmeAuunkAm6jGT",
  "key7": "2oERx5ocagS5HvKDMmXs9XsMZGc4YYeTevVE5aE7niztBoaHxmfeWR3b51xZMekgYBCHQPd7o5mt4cdWgHVdQKCf",
  "key8": "2M4ZeKKKUeun2vUVtMfWz3oh8GPzcxfR8Dud9MRp7iap76ghZmhKoNLZ9U9yV74REYVnBh3GNoEUUFcdpLKKG27z",
  "key9": "5LD3jXbmigdQYAbhfunjW2SNBu4qeydmREHFzy8i5ETfBLgfkXbPiKJ8672MTdXENDdm2wzfHAdwyENDW5Nzwg7H",
  "key10": "wYfNXUbc7vGhdj2B8H6RXiEZQaHViyWXPTcRaac9ERaXnFh1PpAkKyoynCSTNtngEAoU2EmzEsHZa8WEr8eJo2z",
  "key11": "34hfWDBCDqJu3CLopd4xSxqaKarn71Szw3aHN3bL5CcZkj4W8cAFbfpmVHDfNeGwR6Vr2t9pXqpLJYES7TUaGHGX",
  "key12": "3JrA2YCEdxmfq4N8nmCDVwNohhnTZ65uV2f9sXwuEWjuJas1afTtHzLGwybg64pzdMfhf39DD1Tgu2Q9E5otFGNV",
  "key13": "ZQ5VKwZfgxvQJasPymC3vqDNkkXkNCc5GmSPszaA2vh7TLsarCeqmkbCq7qZwQWGCBHNdZu4PP5pN4CRm5zgBxp",
  "key14": "56bAf6wus3vfKCK9qn77QVwyJPE3GgCq941LAJMCo9cZYovJi1vG72gdvYUJKErQdbea5nhE886n2rUtoUPjtpMA",
  "key15": "398gyhbjW7Kp6tmdLTo56msb54W9meS1VBEKbgk2p3yP2MMb9JenMDp4B3y1F39WbefC9xLeRfGsyhiU38AUEuzu",
  "key16": "pLhJm9rbJ6C7pRSjNwr7g8EoPVy8NUUXEDbMEfqoonsFBMusDBdf5U2wP7uKvURUqdxVxhnQ8jgdPCxnjdhCX9q",
  "key17": "2fVbFonaoff8M5yR4LDGHGPaFBU954pSXkcih9HtTbKV3AsQk9E95eRzwf76JmyBd3QeuAf3WNBnrojmL1KoG7wW",
  "key18": "3dQ7QGHxuveLHjUdDyHTSG8zdWjB4h7er4JCGhKHifZVRXmjUTZsPkeWpkFFg8p5sqvJdPiiVGp1GfsnATiKEaA6",
  "key19": "2oJSbnoG8Gkp4fWMH12QXeb26JHtvsxrtjAmpr2cLKvH77kBVAkTCAQS2RUkUp7SehXFQTHL2oSiDVrcFcLvUq2Y",
  "key20": "48JTaA5LJ7FWhTM8fa4YTiV6DUTPQmpdeezpWCq8vNnBrFVDDyeDnMwuectWvX8YMMEhojnaD47hqzDH5k9YpVTy",
  "key21": "2J3goCPhkCdh3GzRkP8NcwCnuo5Bf8ShFD9XjGCrkcsD8bUidLzXRGny9FrpVC35oNLYMheLcQH9sp1AtQQTCEMn",
  "key22": "tafx7MbBoUKQ78uw7w2HNGciUxDFk7m2kPq8G9xA6ZUD9nNbDkEmZ6M1MhbJxBiMkZqWiVvR6c9W6bbUxpYZhHj",
  "key23": "3hwb9FXPcSqBfweu7jkwDr5jecnHNMzrmK8GwBB3LBgFWrrut94PFFMCkvrqbhCdnMmZHfbXWWQB3ZqdTALf8nEw",
  "key24": "2ZK8Wg6GLFi88138FtRXcnvfZyHM1fMEhZcnwXxjLRVaCna6zPTEBaGLPn5AooaWRP1PtuXR59xkN1rVQpqTJ7nw",
  "key25": "4DY9Bq8G8YhSgrGA24Dg9ofMsiKMkAxQ5dKLPB1ubskb6XK2KbRXHKxqe9CoDn8oHbfSosi8mEGP1qxEMLDzzudG",
  "key26": "4eH84GMjhrx5Fxve5Sn2LjJSWSKDbsXH1e7zTtC7woBwQyJghChWtzjDzXDr3UifB3aQtVrBbXsfVtWB2PnX5Huf",
  "key27": "26krAND2ahFvQ6n2sKFcv75NLsU4mLRm4GjmKWLCoxahCX4feBnAWJGskLLKuc76SY7NChkRtCjTk2YaTPsyvwBh",
  "key28": "17KH1qNLzDRKNs7fKBFLNXKPHyGVWZmbDqZbhPZaUwm1mQTj7BUA6U5XeCU7S4csKk23cUYv1wE9xaRPVZU9sCJ",
  "key29": "43pD7xfRCtdETnt7TFEdtVbpNemaPTQm5qHo69tiB8ZmrZSvdsDWs3h6NY78ZedUN9YnD3Z6DthKiRknWBChJXRk",
  "key30": "YZbmGiJAcNGJBcqbVNHp5mbNpRuvjgoEJEJTayXbDwSLBwwDCjnHLpvdmnTnLtEceGJKkMPdpvH6Q1a8H3GMKK2",
  "key31": "5g7wwa9Bik1auQMCaZikvWxXjp3vFU4NZnofLnGAUGsvEBy2NLjpk2LUQ275DQ8zpwY4ovtxLKgMVTQKVCcz6nxQ",
  "key32": "qoHyuz1rGUVJTNsn8RCYCPWvEAWhX9E9LFMnpPrY15GsZ3civjfTFFbRpFZ4CZKJWox8jyAjA7XNmt1HjTXVd9q",
  "key33": "64MM5xx214k4uMNwJum2hKFWZXXPhHsGz82wyaKLustsiE1vUPaMF52fdJdYh43j7v7HsZGUeFCZk3joeg7nnsz1",
  "key34": "5hF9ze8wtT4CQ9Burk3wvyP9HU1gaDcVHedEyadxGWNwyDMMj9gEhJpDxHDMV8tDokQNNmYVjG748PN2N4ewiYr8",
  "key35": "56x3po8RPPxoB6WXVF9dUwbLi3bZ2aJfszZtA2brT5my6S9h9pZcvUrj1Yh9eFs8GawjvVMRVj2CEjd9XoAZ2wdm",
  "key36": "hPC4BbNq3KcRnMDLTMjHiThGuj5HFEFYGDELxgkkTrf32x8eSn74r2HUrSgA4juK6HjC9dGzVR7mmMMmWNFViL6",
  "key37": "3R8XSua3g3mhqEk12gPWwDCrCQGM4S7swCUvmBmLEQXRQzXjPpxdewWBoWiukcdYiuVmuvQ98Ro8Gazt4ixAkVzS",
  "key38": "516LpHNVy8QPjB5gU4W7v9k1gwQ9fopZEY6J5B2tFmEgC3FTMCoVC4BUhDw6twEbUrwDHJcecf3SyTn3AkUZ49AE",
  "key39": "RDJ9ab9u5SfgsUPJnYL6EZcq5QPYHbtrnByx2VBGt3ENXtUditXi1omf8CYuQTbbwmGUdeq3YXBV312PZkB9n7s",
  "key40": "3Ka4zAwDdq1TuMeaWWuzihMp9i53hdJ16uT6GnbVd2W4teYxyZs9jin4UZYZ8hFitsZbqPttiaNKKAkWx6cbLkfQ",
  "key41": "5tZREabhSqSP6tuFw4rdGE393gHAg8XdAQtmWMXW5bNHgEBDJAWeirJt8iuD2CJR3v2r62jNBJ7byRzngRdFW2D7",
  "key42": "2WgnBa4g5BzidBFq5goqjUcEYyKu5JsQ7PCzvw2Y6d8wo4DuU66vRErQjToMzMtGa8KqsiRr27TFhFMWcoCkMLDo",
  "key43": "3fBkqU1TaBYGNTRMKDf5EYPnbtAh861cpKpbTgLRuoZaAmcHokhjU9dTqHMrFZqe1PunypmaLt7JdhQTBJ3PF41d",
  "key44": "3EtvaboQ2U3k8W9c3bkfymBNrc9QvYnWfP4t39pPvzuwxgxcvjEw37ieUgfUKB2SsahiWm2E1FvBSSQparxHfwR3",
  "key45": "5SMaRB1dLMbkJxwbqipVjqVzisGh1syEcW6xWkyMT1GLr52ARerZb4cwUAfKzfXp931TiBMSWNT9o3KRJj3poDpB",
  "key46": "9NehW8Rom9MLGESD6a24cxkPYsH1oFmHrEqvcf964zKco2QAzUoX2ByEfvM4TxpC7z7ALsTtQKAWrjEPczBtWva",
  "key47": "33czXffPzbzVqop9nwmhiSzK2dAdu8y5JbK4CiEYu5zbBxpPKE9xiScdDoGpFwVv3LTTM6AGrmSwcBhsfigfqoQg",
  "key48": "5wueXECEMmKCrtenu2sr4JAw9Fc35PdgC3Zq4HkTvZBEh2tx2dsYYP3meuh9XKzDtDD2snW7hbDLMSLCjDo6AjwM"
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
