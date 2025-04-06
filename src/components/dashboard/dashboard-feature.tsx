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
    "4YPJeatDKU7noyBX1CXQrEYq6wF1Kek7LXvr1wR1hRSBKhVdpahAvoik8XTPyq3fCLSiQjH9e5rrHYguZnVoKLam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mi8KhtoG7oCf5qbMvUus5CZg91W2yxwoLHnMa86R7h8cTR2D3d6rnMPNwJ4opAvBq7uP3JNbB8gAY63EhvqCvB8",
  "key1": "4krTzeCJ3nVnr7HJU8hNEzhyZ2WvEQVFSzfBA1kWc2HHDg3r4ZPdgp4h5xBSzvRVA52JN5PfgAGBxWpW61crm6Pg",
  "key2": "5x43Cq95FsgStPNJF8z5fDtekpXoNAuJhVihBzTxeaTtW9LKqHisnNKmPuiPTfLHd43RjbwFkX7MXGX3j9Ub4UQy",
  "key3": "2mEWsVefTAGuEVaFt3T9EGeK7vUEM3vzSTRoJSopvBoJxffYceRiPXeX1f4QWgzyyqjBi7QLLtEtJpjyMwrkUmAc",
  "key4": "4xqAnANjub7srzKEySDqVrFgCagudQ42ftf7ZzynNggYMS7NAi6GkFJVJJ2GBTFjMkWAUDwKQXjsQrBcdioH7eVw",
  "key5": "3US7mb17Tci6NYubvE5wmW1T4BgckMR73FdN5ffUoXeKBKX4FxeEeNsLbN11JYpRJdLUn9vj75qggRKFVnQehbn3",
  "key6": "4p6FifdyE8QVZrYhXRHu55qtABdE2yn63wL4XC87AuPpZ4TBmZLrcGWtcPtvLkVt4D7B9nGuRuPTkEEfFct42xfi",
  "key7": "5bzFoCAvWoKVeJqb963o7Xcg4UD418nCwA3CEt8s4myJsvLLw4P1QtaR57S7WPDzJvqRYRfxH4hmKwRstyPa5a9C",
  "key8": "5Az7XCN3oP9dAworDVYdQhxsBi8BzuNHRjM55AEWgUDpt6agtAt6jb8QXXz1XbmfgJ2MG3Rrshsba9GRgdZAJ9De",
  "key9": "53vtTzBxf2MeZvKNB3JQX4qP7jaFTbhG4RDP3paWUeVGxFtkdegmd6whAtAEwBmatHVrk6iMDehCxHSBm7LyvREj",
  "key10": "3z7e6vWthjczNqFhrR4pz7oMQ2Cg8FusNXmsGAE6LZAZCeKBojE3HL6Bj4Hb9xykADgYFd2eUdeup2dRRKpNMupt",
  "key11": "67hhtn7cXKnbsqRkJz3TdYSzKuTmAtYJSKtzaJv9intTUsoujT2a7NmiHvkRsFMywJrXgJTqjbtPgS95ujzY7YUx",
  "key12": "yM1ug7bFRToT8X9zAhYPiDdPvfP14N6FEztqWdc5hq8rmn3JKkHr47gMARzUgE19TqVpY6TqrKkt9NrpEkMjy4b",
  "key13": "x2ESLBkbvg595yy2yu4U8w6aHypdVLGkMXmEb71fPHk7XuHGtYCcazQUAGbLHMskkRYum48eezc5gX7KiujHBtY",
  "key14": "5Cd1LbNmE59TTLMULYCQarHQfoyCaiySsGtZfFe51YyHtWGDjyW2SG4Tv2rSwoRAcWNjmDWKAHkqhUEtJczEB5xq",
  "key15": "2etoen4J9Noh6SEZZp2gVtZvauRSF1bmtDkDzZDJRnCQwtsZDaPHjtAo6Z1ghYt48THSnTPKrjvrx1Le2vcVKg2G",
  "key16": "449PX6BX177DzcjU5fFKixgd4KWrAuBYztwKqKUiDu71Q7MJSf1nimRtf42edb7qJw2kLzvNMih7w7Z6Z8rE1q2L",
  "key17": "5ykJZJDR6HncuVej6bKMroNo6nionKfNu3UZb2ytZAdxZcDSCA2P6npiEsiLFT2ckNvuSbwz2ZUBCnmMSBpHjKd",
  "key18": "2G6J7KG1NNb5P6LyG5iW21RrNHWGkj8ZGJJaAcDgn78DebBdT6WLR29cMCKAFXnzxwsMaxxhYsYij1RZXJNud4tV",
  "key19": "VmACt2DmjyVbN25mdg8AjCxR9wGnpczhicG1m21hVJ3id5qGrhu7SVtbLkiM6to2eTCQSoopYz6xetZNJmbzYKh",
  "key20": "MmGmAeT27DugyaWyoPCnBfwymQRx4pBVTEsrAUSDm7Jan3U7JccPjHUua9nPaoWcReNierDPXpGj9TBeReLbvKk",
  "key21": "4ERp6Jt9HAXYzkmSWD5gaMoandE9hGSC7KaqEH1KmYbFEbFwL4h35k3gy1h1uASMrbjQbX3PtoBdVfTXCamthM2H",
  "key22": "5usDZVmwQkbMoTWtEncsULPKQnq7SqmvbE8sX2vu3WHccVostpSeige1iCYvQsyWBUEC9zQFFveD4u8fLVuoh6im",
  "key23": "4GpppAkfo5L81WhXVP9QnTqc3D427sKWh1Mg3y8er9sch3v1ARjV66UnWsa1FJrz1XQu4V8ruV8KYonmRiZQbcZs",
  "key24": "2MBKMhob2fApDJ5U2CsLqcU1ETPSd7pFZ3hCvBSy5UtX7X3VzsYrV3A3F2kSJvTwKgVJhBJgHsd5Xc5kPdJzLJD",
  "key25": "5k7EWcxQP49oUfGkfxbw7TL9P2vj6nLuEQkz1nBr1qaYQXnSfK9rJxkWQgeyeYU785g5qTvA7xfbd5VVH89nK8nx",
  "key26": "59pYZw3c1Rc43vwEwgYPsdtc8NgWDMkqkw4D4xpNcU22fMwkeGDFk2acb8UccRKbRGfVDqEAaJKZKJEgWs8mAssL",
  "key27": "5zgNboSbBuuZTm6EXmbMFAjTnynWLjxKj6w3jo37Yvbbsyutt4dmo9Hr5NDxUGaAbpjYg6VnhHVjw41mN8daeghV",
  "key28": "CxQkpzqMnNbMu4SigW6vZVkL3iaZsGmvGrShK9mZsh8zS7RUnjRnbLEJczoWssumJZ1Gtj1xnEZ9qqC7nzai8wy",
  "key29": "F1hPQzNyh5V86PpweD9N9Aid31TH7kSSCSwbT8keeuaQNHNKv5kmF31ZVg44Z4VBPkL5iKuN8RwR75BgCNwrKYS",
  "key30": "3F3i1KPgUxR3EUEaA88J5HA5AawAAD7ptN2QNUMhsK5q8ibCLoP451psFG4zsriKGJJnuBsgSjARroHU8bGboYga",
  "key31": "3yCoWEGhjZwfiLxbczDsyykgdr3GS56KGJjVSoz79PrcX2H2GR2QjLaE6yxfjkXwGra7gyfdAnsKiHQw7W36Vp3y",
  "key32": "4wQwKRboZNxsB4rnnsaHXGSFWFpqbXUNDozDu3B7h28n6w5VF14P7aWUy4sDmaL4kQEQcLixt4C7ZAQ7ZUw1kSgV",
  "key33": "2KsWBxcxTcEQbaKzq12FVoHT5tquWxoFuABF9moram7kn6Jh7vjQwdktNLmZ5RJsgrwEExc2zUKDpyB1qMv2MufG",
  "key34": "2VjfwWtorp4zsmegWdSo1sArauqmPz4rSB885TQPphCLGvqzVKKL31HnYmigG2sAqUP55W5nFTsZvBQcCpUveMKQ",
  "key35": "mJoDnvNNpCeuXQmG3rjHJGyZt7NJE8JcuJdYt4ny4z8yogLfoMsCs8v9pivPDLSGdTER3CJmjCEF6vtq3jffsc1",
  "key36": "2hcWxxV32n4JEgUDB4wzuyzWS6fVgjaBmJrsFwzmgrNP3PkrDEUGrkhgfd6rF5RWistEivMkoXYVD4RbzNhK1hZJ",
  "key37": "3Txi1m6BCiqDGzpKXiUa5hCT4y8wXdDT9akzFE91d1hDCtZKrTG67j1MiFRK7MjKHYbsxpyHSBJaq6rTuLzw836c",
  "key38": "5BqrgafLwprjFA6J9zrwCbJtABrFSjz8VW7nUa2zxE35eiT9TR1RjfjmEm5xLc46X5r19fh7UTTNPSmEwBvtJmav",
  "key39": "2FZDAvYQCLrchBNHCoWWsiQTosMCPaeWBNfBfnvbZEDsTAk5MAH4q1YUGN1AQmKm3p6dpzqBdi29a4abtDynkWtz",
  "key40": "2oY3cE8UgpPD5GJ8s2EHHHBfzfaJssUSC5ppDn6UrDsZTdUtcx9YWHKY8xe7Az17xfyMZLb2B78L7joJt4M7stSP",
  "key41": "5eYDzJmq7uh2MvwXa6bhheiMzzeB9co9yphQBKMfBmc8xa5BC8sBHbMQQGftmgvdsfniMngME1FtzyRLRACJnMeG",
  "key42": "3fjE6mHPR5jnRpw9LknF7DLyW1fj9cfUHqdY66FDkvvPAicNqriw5QcFywMLvCJ9auhcBtvLEN1iCqEtpJRWMJQH",
  "key43": "4pLEu5aA69HfEW6NvcMoSAPGrbjK8vLk2ummYY7nnMJpEkafeMxQzBzvQq3HaGT1FcFZQMDMpCVgfp6RA62zdMDD",
  "key44": "374kgy17aYcrzZfannriXvREQAFAG2RfT1CkkR3UDuzPLFQZRtqAuaqTJBGTPrGR4KTnYya9PRMdbzDY7rgUGsm1",
  "key45": "rKcp2M1FcEXMqK5iBart6X1ThnSvCEZ5NQZP6774s8SrWKxBVoPLxx3ZPvmrNdgabppxDVCv5kPVWzbKt5tdyfd",
  "key46": "2qWoA6mXM97pDgDGr9FZA9D1fPyFhzWhbss5KLQeFMnRB86HLgukF4SjZoNVFtbki78pYpKwqZgvJzxNPGeMn3mx",
  "key47": "fKdiYbEnw6J61b5oaQ4WDGnDkfAy8ME9E9PmhoezpbQrSfY1XmD9rKX5qdS4DKBr2ifJ5otoS7i6dvLkw4DfT4g"
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
