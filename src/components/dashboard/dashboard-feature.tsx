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
    "57mrjNbqHSzTXkRg8iPS8K3qSCRWPTRtvKoqG2zgGnaK6M8Bhv3Awp6G4Qx6eQmwZa5nruKqZCH4YuUD84QyEFHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mfUJL45SKKSnWkU3tchtPLS39Ejs1xMYdpK8unFRKGxsEfWnXjRaujwhRVooko8F3ox84qDfzjAvKMfSPwPqZhh",
  "key1": "3eghj1M1J7ZYkb77nXQ5eaVcSRTWdBuLkCNqde4ovJbacWUh2Hi8oTwRAgFkmPcqHzoWGQStiLXkWBC448WXxEhy",
  "key2": "44w4924Wz9ELXx1CFUeMEzePGDER3SsdKWFCcsJdiebAja65jGGX2emrZzSqDvXA5WYkqbqkZD27FiXsK6Mnvz6s",
  "key3": "4JFNTo3c2L1F21KfphbUfbUM7wQubPV4VzvJX9jojZCdL3jXHxag9enzqgBuKJ3ZsikPQbDz4s1W3wfxwNaLtdVd",
  "key4": "3S7m9i8aze1sEQhUJra4Uy1dxa87rT2k7bjpEoN4x25RQS3qe6jfTZwhdn1sNA5VEGj6DhMJ1v8KZMhbQE7ccpg9",
  "key5": "3pLzAeRsTB6reFiE33ddteSbjWupM8MKassXDZoEtGV3XyeiNK6UTuFUuF7UC4xxHJKwVsBKFEV6Kz1z7u9yUrkE",
  "key6": "Qxy321GJ1HY3vhFNNwWmafATnTM9ZS6jFBXahiPovhdzUanYcCtYqcAw3bBpcvbh3cyrcTH1Z4bCNuT5v5tV4q4",
  "key7": "3LsomArZQY6itQdigU4msFxBq8N2B8WmAW1qBYuFStKGN9giaFE9yoRLdopf1bpv7rxYVHqHxnTR7E6eEfS7xq7h",
  "key8": "2o8PEdnU212FTmthZEcm3SxL13r7RWnknbpMPHCqhXovYMCfQkWugwmXFK6Dnzf7927yE66UmTurUaQdHqgDza4p",
  "key9": "22vTBMRVhUASDTb4z8psowrrsegw9qBamT9gCSS6XPvbkk5oH8AZB7GtCFTsBiKpKSTWDSZMWdXm1TiQUj8iquXX",
  "key10": "4bN6tCvyhu1S9LvwbnZXnnvG2r62bcn6EuwqS5DkSQGYRDfj6G8UKmfn21puJjbApKgvNJV57P9uwRRYG4nZpkYa",
  "key11": "3EnMvchRKrMzgx7cvdFVtNKnJrMZVkw2n8dEspTip9cfTqP6Laxf2a54SjkqfEVLK1p7AxAkHf5wfHF6n5S1nwTG",
  "key12": "3GBHoonCKkmyKtRwjeYAaBJ96o2dqbxAFrRZbW39yauCptwYGFsBdGcPN3fskoai17QH4bQbt2XUj1fzKAux6hn3",
  "key13": "4MjiLPAKE7iaSN8cJKjWuwXWRcHsCEVf9AnppFHV6kfr4rhhTwhR2fUi9jBiPGp3NABWZ7qKvFZr98Bj3n5WavJZ",
  "key14": "5Q4skCJihgZGaV85Ziy4rnVFfvAAPKuDyZmqz8xJstMSvNhH78dqBRx7pcHFmroBCDK6fpsfGo9kqWGNjJyF3ajo",
  "key15": "5zEfUn2PGv23S9b6uyaGKwR8wsnFPv5nDuFkQTpLaFSXYjKiPEWnU6QBiSeBj5pfV2aYd2rRr3WyYcuw9KkDjxiN",
  "key16": "211WvEMoCazK27LsZqpcj7Ak6pQ6ZvTK3CnAjuYAXVECRvFizrQQasNoo2VmaxsxdDtUX3BPnSZxuSsnmqMZvB7y",
  "key17": "zB5eczn1sRSxyFzT89UAoU1KqB7Pd6uyoF8FXH7epiY6th9HYzcfW4bx9BJv8zjjB23SGcx6tBq7wpcswViMgDv",
  "key18": "2y5uZs8G7BmeyqjMTA89GEGUMSd2TU2jh2cmFRqhS8MH67dxK8hkxmUKKLvURUGB3XhLjy3odKKKXosVBVY4wjsQ",
  "key19": "5i1AtBwJwEiuSTAtVWQj9MB6kQ1xFvXYU39HZ4qkHR9MkM7ZAtwAgA6xMEvCHxEfqRVaryEGofspR4Hku9L5SHWw",
  "key20": "5dgTYUBEMNYAnmRZjgsUQhu45nTmqpFgySY7RaLS2VLGeWMvkfcntdjyxcywDoe1pzRFqiZ5Bn9o7twKhGxaEJAB",
  "key21": "mCZQvb4uPQJTEQMMPm7WvqdGimjfRracxyrirvn8J6YvG9WSiyg9weFTphwA1Cy8zZnHqxvhPnGZ97jT74PkiLt",
  "key22": "2HTRQhTRydWbV3o1HVQyhoHdpvf396TTupVgrVf2A9KqAwHGfuPACQwxVpPfUt4bGDawBQvFXuKHMxm6F1wzFkdt",
  "key23": "qJ9R2Mx8dyiwwXAwo1XLa25im96hHJxbqZxhYq7Z2NwQWv1XumbnjSrUkmHE3Kcea5g3jPy1uEsrVvRndt3tajR",
  "key24": "4EZ1XejT9QGDccuVqMM4Hc3ry6PmCdrZ79uUSex1difhJ7Lt2xv2BRVmjrvWKW8BtbURGjhxBSHYq4sqnrzsRfrq",
  "key25": "5fHVw9pM38dVbKXxEHXzr1yuhEEWbcyq8nrKtZ8UqaEp82U7jyfSFD9ZYbsQYSrZXa2fnUEaUKt7oVK2MgCZVoUw",
  "key26": "Z5LqbUs931isbkL21cxPCGbzhnonLUnfYkJWmoUCr5whPt7RMMCD3S8eKym5s24FTZJacsfFssTtHVnZ8YhdyXp",
  "key27": "4FJ7PeEZUGgqz5e9REbC3JokL5psFgoPYQA79SdbjW8kLrP4rBPpairWCnF9rzQBLHaWbo38M8jVJxpzkZqzbj5p",
  "key28": "2RpZ1cTVMdp9XduPR8PEwqzU43Lrp4yrzzmzTW2kycw6EQF2JnCEyxusjg3N3sHCMZQB1a87yKnBcZihVwchVWqT",
  "key29": "55NzYmM9QfAhTphogoPpMbv3qLFMeMiAc3iV9VKxhSDBFZgjM8U21eZqoxks34CG8edxrPL9hfBnD4rPWuc5ELnv",
  "key30": "558UjgT6R8p5uwnKBL3JQRGkYGBBm3KCSpVU1dcGaX13wnzob9HXcBWdA47xfHeu4J2HvZ2DCAw5kjmCDDEtBneU",
  "key31": "47xueb4DncF9SvTsj9cCFFtYMqr8ysN35XRFYqgp4pWx81LrePVUjTKop36RqJGZHuazq4SMvEVs5uURoaRDhYxy",
  "key32": "3kHNV7zJbVKhYeeoKcrNP7F6eFNtZeTAnzn6vDkAaj9HtEFed1c8hv18dJBDP1d5w7oyMFxoCHaZC7Ctej4V4Pvh",
  "key33": "2EXfyto4wzCSgvHaVcUE2DGJKDW8WXGbk6JGUHa53Xnvi2dr2HQJuP7djmMqbuZDsTDECGKVYip7ngNkecpuPdfV",
  "key34": "4hC1ADhu1tZkZdpzxxChhoBw3P1M1Zt7E1zptZcrSMFi32qqUyzmR7p8tTqBoijKb3nddULrmscsQ3rNDWNMsfbo",
  "key35": "3pJCwspBPnhBtBzR8cAdGpqzZ3MUweoBsyAP1wiYeSgqRn3Qp79KEM9fDgwiBLQEAJCaC8yTscZcFx7dWbab4xjA",
  "key36": "3jKeGsyPuGuWR76NPhCz2QZDxfaiq2h1iRB6hdsukcfKbBLCALWE6d5Jc11utuu1HMvhQU5Su6fuM3JTAUJ2Ckpq",
  "key37": "2vFdD7SFifNAeSqTaTiAdzmyaNR4ssTphrBWEVJDv3WogrTFRobztZmxvEVsmQPKpCHDyKW2fqwDyLi4UHoe9AD4",
  "key38": "2wpYZaRyCwLFLTmhwHtw8pa3mte4cw2w5avck612FgQmPNsZurxCPZv9RpL6qMfnQMrcLFG9P7y3nsby3hKe36g2",
  "key39": "3RPRuUBwAMDPgE5xizoFvxgF3zEWHgnSGMqqVFaTj4XJSJJRW3ALSJ8TBoH3BfqK4U1rCT8e7cC4HR1qm1YDy8WC",
  "key40": "vyQ6TSr5HtbmFJTULx3WaKHhn2mVkY97bq6WxuAU6YUTXtisS4SNjZ3VfhrPtBtsqC6zgLYYZ2WCnViRpna3nje",
  "key41": "4jLNumxYgD2wUYwhXzZ9RdmUdBt3dC9MnV7TcUUtZQCzTFYrEbpSKTyN7EqAR4AQD5xSGfAGxdVhKojbzwJj9PSh",
  "key42": "5sNKXzoprPxVAgjkD1ZQk5P6MdyKst1nLUVMxonG7iN1Sqg2W38V2sAEN8spaPjTBkrRHLSBfBnv52JvGGmjYvF9",
  "key43": "nbeMqFgEM8HEkayHvEv9FrtMq5T1EEwoisa3BixTnnxZktkHBMb9nPYuZ5aVBdGmfBJKTkgRZT2tWajWW64Mbcv",
  "key44": "5G9c7qhqczYkZfaF9YNEayNfzMo7H7zKv26eNkxLSxSbDc1z8v1zjHeLctVLUgzgApdM8nWUFyeaioeoGkeZm6y3",
  "key45": "2XbUmH4QHZkpLnioKUHdMgSksUjUbWCjyDT26mXpMP78VhmNgVkc4h81g6EVuSj7J71tojkcvKZtyMJABqSic2WG",
  "key46": "22q8a9gZBD1gRP1xR6xNcAhuDCFUBAw6epiY64ypW113ZTXKzu4iSrU5CxJAeXwWS2u9sS39VtVN3Xw1ZieY8sDk",
  "key47": "34SFHFRdPRxANJHRFDKLD1bzZ5xsWkPGQ93DKjHZutVFCP9UjTwNG8C7EhRMFoyLu91UanqfMAcQZQ4iSj5kkVnJ",
  "key48": "559g7wh55VZQVUJiYXjjDFMFR76rppiXZ3GX8UA5sAaDiWn99YwQErhabLZqR6uo7hxC22gVstwt1JdLFyLNoTzQ"
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
