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
    "5EjZ5PEFkYAn2FaPSkEyv1NzEvcbJfZ1RC6NCZHBMC2kNsx1oQBVq8yVUQCBATBxUoFKUZM2kZ1KsAP2SUUEseNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56c15etQnH7GHSmxhjVKqunCKzD5YWrDjSvPxaUxZHTmSQ5vNHrMgZCqsyeNcgFQye8zmiyzkiRYkbWVPQVjfGSZ",
  "key1": "3cBLcCKBR7JEsbfSaxdDg5roc6aw3qPRHSyTGXwSPz3Vii93smmYuVkaL7YazHKZgTcGJmmBsbh4511p25cCvVbg",
  "key2": "3FYmC511sTEqvATWHNGmz71hVNPewLQSxNPsvw6AL63xvKT661FXsRTgKpsMFuubUycNNoamn4uLTmAwZteabJEN",
  "key3": "4Xece8m8bzuFZ97f9Wu75bPuBdJEb8dnU28t43d9KZdft9QnMQS2tPUVqc27EbNiRyGijHPLtWddUQZw2bvVdQHM",
  "key4": "iaLzUTYymujZ8QCtmVRrUqKCHxyzDNmRKJX78viZEzEoHasfvdBRoWXqppDJQq8xTFST7qDyMhRrye1Qto5SQTe",
  "key5": "CsBJq95efBmer4Kv3hH8U4SXapiTVBPCUBTo2ivCTQpqPQa6wHFiSRn6pBBmLcGnCvHHrHymGpwJDtT9vMXck6V",
  "key6": "5QMo8N1zNBPdwUftAdK3VgFUb5GBN9PtYYEwzbWpVsL1YcCrY74yrrGVxpcn28QaGi4K7y5aVA7FvAYUA9tT57iH",
  "key7": "3JseQL4HnhedCCnaNVmgMZsj8cAMtxjZwwWzC4MCXC4JVzuUmPjtQWPvcBhcLez3GuaCoUekMXYEaW7MtZvhJ5b3",
  "key8": "4y5vpcW4DSjhbujQ9bFzgiHQuTGmYRVK54iiBfGNrbGdKxNtREYjnwa6n9f6fXZReMmYBtjYfcUULEJMgNbuSUQB",
  "key9": "3ZiLEihGbzqELMCVGNFyoSmKU7fRqzLz13VNHAJ7dm27PEVLwjU2RDrgDEqAH4E9te6FvZ3oXxs1hvhU5ww5vhvV",
  "key10": "4s5jLYUYeTeSAkt7Cyv3g3wDEQW5uo6EMSnmja8kmW9ZDjwvs5qgNk9p7iXNmTxDQxFypeoiFyE8bc9qDYARqqvr",
  "key11": "3ixXZTPLfwqufNCvazjepG3oH7St9jbfuSN1vHDjH593Xqanv3WW3cUcrw5Fsr4w1HdajUGA6uXHqpxB3oNWdz3t",
  "key12": "4ehk7yfcL4ysNBb71bq8oJAgKXTXNzXWBU62nnPWsPFGQjJSJkN6QriYChnik5RivKqrPhze1hk3gcrab6WNWiy",
  "key13": "2GV6o556N9AXyDhguPxC8FNvAidQhohRJ1xAqZ4pi777PQtL9UFpUeiMuKwkALpa4gvfDUaxgKEY1JmEodb15zWw",
  "key14": "5FVMZKxViQJS3KAvv4cG7VtF3o1SxovAKQDFWynmUTbK87jBEQCa1ekn9gRcx6wi5yFftF5CcQe7xBBVJwMhG9ZX",
  "key15": "3vURcY7xAe2vKzuyT4ubdK4CsAZMWQZVwoovk45xFS2HjEcLveRErAa91styM4XzcMaGvQGBk2hCMGijAfGZsqUu",
  "key16": "3guqA9afgLJVck9wPzrZfwKHnqBgRrsku1DEVuiJ72qs5CgndEsKApjJN2FdJAKpmLrYK4vRN7g5usfgHxU48Btp",
  "key17": "2uJbNmkAoMwCtT4a5JdAp4GSC4GpSnFJDYido86R71zx17F2QFgrHrYTwsWQkig5CergKrCHyzuEt7a1tZu2iKeV",
  "key18": "2SkWoTugpKU43EkL5GbwiXigwqkwTaR3Psdd9FsYfn6zjqAi5wpqAtsbuV15er3gb24BUQqK5JyYGtuuEam5kcc3",
  "key19": "5b4T2pwDLRLWxGmJjqtn8AZB7Kw4MU66TyMSGtyrZGjBnP9TsruDStYqcLRWFg7RFo4CGTxY7xt9rKA4yvQ34T81",
  "key20": "4Jem2sNvySVuYQuU2GSJjGz6nA7QUjMPE6eMk7hytNd1SVtqP1ZXDf6qcXYk75512y6wUUnuhb6SJnMMgQ76nKnE",
  "key21": "3QCxZgjwzWyPggDh4GoBuMkGYBemcFVwKHzYSs55vkUWJTzTcmzBkHj8MhTS6E8hHqKeG6AWmvun2W7kNhuXWjvt",
  "key22": "4f75ghh91Mvf7g49U5W4cPm9QgMg9FKS32Uy5U9ziC8bACrwUihdCmNuMDtTywe2dwmkf6ChuB9WyFVgL5TUGPZm",
  "key23": "2Xp5DsUC17JusSnAxUHL2vBV8ZFXjCj6n6GYzPxofgPDUjkvDpBXhUpBMbz5cwjkS6Wqn4nVkiueBqntksuhGEkH",
  "key24": "4vicUdrTHPBuCikdHX5H2twTW5ySZiaYAmXqUSumw1QB6Usf41Gdhh8TNeVXGZ9sPcU6HALFUGAtDaoXY4X7au2h",
  "key25": "5VGvL5YBkP7njPEaoNqtHYDxC3Lz52hR98StkZD9vvvHkHhL5JZinheqqrZd9rX26Jw8sFYrcwhMdq6X67f7m7wf",
  "key26": "5UoZKADwQQBTNEvcPYk6mFqcaM1XxzBMqsrHRTgrafHP7f9yzfAnHwpu1G2D3UZFy9dAuEEmuVCKriXv4mP7YqwU",
  "key27": "5TaSSY4kxULT8M9QbEWH9DZwjvSo2Fn4eH9vT5oSqbXDSPxhkRsgWowGN66HAj5yhUBbvPsYEw2fgvajE87YTkqh",
  "key28": "5Abj4uVs84UmS25Q9Kr6HRx4WmZEZedBkM33HFsdigUaN9gsbyYdt98ywMtNf9L595TNuyShi7ysTDQQQszW9aZT",
  "key29": "5RaYDSWpb9ukxKk212pHhCa6hzepWFWCsdy9GMqHhmQ6TPn1P3P1a8HGF5J8xcRLrZVgMtFRBLHPmUP946svKjiS",
  "key30": "3LZxTrjFgreRDbxsr45C6EJWuj7MjWDEp1QgWzwKMzyHgWRhqcq2MqVRRrTnyj5SpAUKhxQTEiK3K9KTKFGTDg8N",
  "key31": "3mJzruTF8vNLTJ5XF5EjqF4FURJArwMawwCgx97eCKsSwFQoB9uYpBKEY5Q9yqowTXb7TJNr6rH578Y2ta3LRAYz",
  "key32": "55Q4dCTGLwqwFLTkFbgEVJSrMxXpAgkzQSJ1eKYeTPjvVNojAradeZDGeTc2RqLSRRzNZSTQdxPvoj9JCP65Zr9i",
  "key33": "3HaFzZujfbJJ7Nrvucom9p5Rq1p49fmSeV7ERChB6UppVWAoyFKuddqufENA2n3f1LPH16yW6jhyhF6aA8bxCNjv",
  "key34": "3fj2BVCrzsXcJLiDCtpx78zq5XQcB1R9f8D1gDdFpWZvBU7U72XYayKrDwWVDHuJGsg1eXQ8CojkeUh1rAYvfxaD",
  "key35": "4WARHwPpvCQ7ndZ5f6NB8hfRuzb9upSSebYAtWZnpnfUfiu46U731WF7bRKiXsv4ZZ7jYH3uDdbw5K5H65XMC5Z5",
  "key36": "2Gdpn9cnQFyp5R2wiBdL8mPFD22pGw58V1GohjMNGuZVQRjJ8PV7dQEZa8mURmkqYc3ZNuPWLudir5t6VDMem2AB",
  "key37": "3ctPCtvovvAHVjDwZCYFi2TrUewYxC3s1nnrWdb2aHqdTaio85cZZ4z2aNaBeUPB3Jm329D1xBCgQvf8Lx6kKfCu",
  "key38": "Xsa3JWZRgPeh2rAsbDrNA19EszQ35CMPB8DvcnneLcftVSkSbMDiUSNmzbjUY9jJcpgZAZnW1JouqrackpxyHiQ",
  "key39": "53hhxRsqpT2Chtwxx3Qe881BZUWPowpiiLE927DX8RdXMcoCBLstCnSTALaVxVCg2McLN8NGTxnJZ5GfRpQn3ZmH",
  "key40": "3Xzw5YDw9XcVzNcZG8bnqDxGDeoqkuAqywvRzhvvYifCQDmfMeFY5LdwZta76Frvv15EPoVueSX9DQG5htLGBhkB",
  "key41": "2bB4n5iBACtdENv2X16qMsmiJ3GjntyQEbfg4Upg5cAV6RZ6FhiKr79v5xNjdkvgkbGCSMbzfwNCbr88BybZFSNW",
  "key42": "5BfxwSXqg2yyjaX35XsfnvT9K4pef7xsKst5J4jMB8W4qwhSwWyLA3Gbowfmtjn6yKAWJG7RmVzbxALgjZMRqnch",
  "key43": "hTLY9SZk4iJ62jCsgiKrKQGCQHQnvXBPsHBorUGVJU2Czj1av9V4GBi6uZ7q1vtQapWTtZGqAuYPSjvPo1YJcT5",
  "key44": "35BYBjizWTaFSbEy9MMbmTVjekdkxd9DLoBRwCMWYGdo1W52iVnxvyAL6KuAPcLH4B2ryLAJBYcpG7B7whuwqL67",
  "key45": "3cVoYQa5FtKpgaEnaVvfY54cbfdTqtK2HNktppRTgvyZqUdQv9uifaUo3a77qpZD6Eiya8Sft2mci1wfm3oLsuaG",
  "key46": "51xrS5J8TfrZronrdVNtcWryyZfEHVQn29qdvRFSEXvXxYnWwaU9DEawgn4WJGQXw1Hz39g1jF814V2S7Dr58XRF",
  "key47": "59bNsA7EYw6vNuFMXeXnPtWJm218hnmKzNzzf9t7LGRH5w8sCgo8RnXqMAcZCCP4rdwCPX2VaxcECh6DxwNwJP2v",
  "key48": "MzJgzMFL9we7H4uf7drbj4fuuJk6AMQKWjcqJMhGfpvWRtt6aNKN1Zm3jPHhtceECuUoCCC2LTo3F5rfrGUi9Rj"
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
