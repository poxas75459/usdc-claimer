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
    "4Smf583dxWgByzvkMCRR3V3vdy8F3cc72Nz6BJWgGNx9hdzqrKSzLEE9ehzHbEB6yHbnXZptK7uGuKKdQfdNFGGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EDPmRiwJJ1ZHJSW96Pb5JBJBx8nMxi624KDcpBBnVxUdzceY6vQiTmQyHNMNp2qZA5ZHJ5ar3YXpxAHgr5wQ3Bv",
  "key1": "3GRfWUhGm9jpvtd6iGQvExZTcfbs3fHvPVE7ey2jcLs2WHQeYGJJp9MQ7cuF93tGN8DWJ1TuQ6obtsEaGgK9fBhm",
  "key2": "4TKYvMPk9ENsKedBoSu7ZRpNRF98N7wEgvpct6wVSK4d8J9FJEKwGyHNL5g6dBsX5SMgkR9Zfw8KiLmpw7iHvAgr",
  "key3": "4Q4mj7REtCGXhsL9CJze15zxmfrSnYhgUNApuoosXdxLasgwSphbAnM9qc8t6VVRosAGLD2MNKCenXneeHVchM4X",
  "key4": "2dGzKybqVyntucQXbexpXFERXieVZJYvozdaFGKkzZXcz56AQgXaHBqniYSwqdkAhSkJjs1dJenU6Bq3AzecdaZw",
  "key5": "5sK4Sy8q48nNhzmuiQVETDhMvSUCAaAu5bwyWqiryrbPGtaUT4uTQuYyyJtd696xBQKgnMPJSsSXTU8bpBzGKB1Y",
  "key6": "4gThBwaRLxyp3Y4PWzq45VRuKA1bgGdfxY6uMWvpK9bAox5HHiVFFxUgHwdu4yfmtnuJuydCY3VgccVU4rR54MTP",
  "key7": "Y162K9iC3QH8MyVs9dxkAA4WE2157iqTq6QtvWiW723LtEr8gSSRU97K1Yg3d8Z1LshhFhPeBNdMGC1pP45k6Hr",
  "key8": "5EuQsP38zaJtnoau2VkicGMibhMAhr2dngqTzDf62XfVhQwRzmuMAhjhXGsPicoMCZVwVBmHYLmryPqEkqv55Rdb",
  "key9": "Ex3ut37fhpfZrU47eD1yiCA7jfMJxXfSG9YuNENUrVVCzC2ZfxZmUHD58jioNDQy7DEkBhi2ZnHoPxqdCgZi2Ee",
  "key10": "4FYQPW2BYBSJUt4JN2GH1dB3ZP81GYvjd25w2p7UExbFrzNDk2U3fSuGFrTkJumUdduo91s2gAfhiwY4wgj6PWtb",
  "key11": "3AH6pKD8D5yP1z9b269qrhbb3WNJ5zhxU2vU88GA91M5g2Z2nAwgnMsrPPoNgyc22gPVSoCYFmejoy8x2mRtZKjr",
  "key12": "3qQPz6sYragVWYq4KFF5QXWAYeEC3hcWZfhbgMDDumgY7TEuSVdActuAjduzVtzHwPLwVUfMCpCRtz41MTWqhvV6",
  "key13": "BhpxDeiJTWx8NRreT8mntDftiBEiK4Bp9Uqaabfz8ZXE1473kjeqKAxp45m4EDvfvXzakFP5g6mqWewCbPwgKHv",
  "key14": "2hBBhF62BYNqkb8tikxXuzVkg81p6TqXrN7u1m8qBq8oD7Z84TbPFw2kUgc9DGjtn48YHzKCRJgAcwLbcQj6bmj2",
  "key15": "UHyJ9Jd1PnNXNVgK6RCapH8TqTjLJigUPZJugpPuTXbBkgzaGXcxy3RUz6neehPuaEfBU6p3wWzBP7KsXjwdaG4",
  "key16": "5xqnuTzDH4VxLiaxWPn9Zpx6ZCzK12UUT2MCCgWYabiwyciGkSbjV7aRhPuV8yadU9NTcd3MSEG9w8ow1FJFS92v",
  "key17": "5moPFwiRtnUAx9fZKzZgSTG59jaVDxxv6isH5JKnFAvJaFZGdgVDRF1hM4nPpDNn9nMZjxc6cCcPbmiJjYZe91oq",
  "key18": "3RAtZWPUircT6Dn9EevQpDYFEEyJCd7hyy48qjLecC2mCAhWSbMoEdnChEzDuiPYnMRerAjQniz9wR7XHcpPCJAS",
  "key19": "2M1REi7jENFvGreMeWqbkwjKs8HFWggY2D2ozzQb6xG1iAF3MtNS2gutxubiGboebt4jucetsSjsQqBsu5SmRdUE",
  "key20": "kxiKta4t1yWVuqw6o1PnNhneWJdkCHzzMw7ND34vWaG9J7FHDY8NP7YPnqBcEZt8LyaaDgXjW1pKTESx1ukr7bs",
  "key21": "5Kq6aZEPEE83dgP6WrFmx7fcVXhdPaaBZCgTPVsGomM7R6xm9EkJn2VgM9wtraMB2MRe9JEa2JGnd3tNhczUTTDc",
  "key22": "3C6XVVaGcdjXySCSdTQ5ydNMt15dpvqt6DCmXqpeshYmD76L3S3EezzJzEmTvc8YLCDwQGzS17njE1Cbs1h9wwKp",
  "key23": "3BBHEEfRMgzFSw5fwFVm5Gsw64ZWRrTSxbUEyNbrqhMiemrmRicWYbtB5AZ9gVEtnu8WFxFjVKEaqUeww3Hqz56L",
  "key24": "3LpMGqaZMf9KEmb83iq82tiDtHHFr9gKGC4ut4HTSsc4GmBezNp45dM6sbmNTf9prBt2kxZmZ6HzCsHuostiq3gh",
  "key25": "3mEktwKpJRC6gVKEAbBcGxoFXdrfKmKuBPzwZnkUniAJcM3hrbG3cRgW6n3zSr1oRzVZmjGu8KbVwY56TbQHf1RR",
  "key26": "5pEXMgtSM7aQMJ2yQTE9QZbgeEDUhmMpauyK483P1TLkD58CcY1Q3RE4C2ScjpwnSJohU2KRGH19MivgxkZaRUQw",
  "key27": "2fGs3PK8iMnKA5tPaJPPPdusQ5sh2c29erZzv7yEiojE8BzaxNnM61XqkjYj5ifoEnt8dn4KdhXgni33vhafF7n7",
  "key28": "2U35tGQvzrZn3xSHKSCCYruLJbTXWeokDUE5X8ssGHvx28wa4VSQPZHQAY5vHtLgijzySHEPXAWzwmkt35ckvHPv",
  "key29": "2C7PTinPqYZhyaio4L9ApVqsUgiSCnoFKaMXa2qKzsHYzzhTdoDhxUwLHA7pcNfTuuTtSjGqZondMtJ1KwMa4qn6",
  "key30": "3CSrLvWENTAg24wKVajQNhyrVaePD8Bk6Wfjxice9N4u5fxH2WcQDFJm3TPNCfn8ifrJaYTLCHGUMPVWj92HbXVr",
  "key31": "3k2VwZU74LCQR6oCxbgZZJigiwLcwxzgXhMbgswEtvDTiYVMYMsMsbHV7Bq99mfWV4jB2RjLbV4D1YZbxTuhzcxt",
  "key32": "3syXMGG7HYtvryB65h1mnu1jhhAx3wXsybriMFvfdnUWLyg6Y912NMUwwXhunSnni4sauFeY5Yc5s9Zd49bUjD86",
  "key33": "E4dETz2AEx8JgfZjUsv5uzyDrFpJwmArzNTpuT1Smi1LS4rmNmJDCJwifWYAVhF9eBARBheRubkzgsm1E1Njy48",
  "key34": "2vkngmpJabJfVjuc85Mw5xbrXM6uDTXwYM12hcUJVz3Zz648WWx1Jn54Vsx2tH9sg9gUD5h2bUwL4XVkoHAWuJ2w",
  "key35": "4FAFzm1b2RHV5YwKgKpyyzLENrwTvuh7McYVFfVcrvvHvmNYJwKHhcgBWx8MqKxXeYFpvGgKquFvXwnVAJGz2YQv",
  "key36": "2LXmmosVAVc9M6Z9sRrKEBxmh9uvKYoVNkukKWKaR8X412miLyLwAJ7iBQmEkYUjRbKhYEntZS5Jj2BjiwVx6hca",
  "key37": "2SWAnHH3h8kkZHwwC3bwCYRKgk8bq4aeMcDmQgcMKexPYDRDfp2JqxAPvB8HEJUHJVW1wCjjV6gXBJUhVBueGsvh",
  "key38": "25PrHwmkH4q8AK56hxzYrbbUKCHt9ivpk33s7BewsZ6tCYe6je19uzXHKirEwCMk2niPVFPcNR9LSBS8452KQTsn",
  "key39": "4DrMzQGqP76bX29sycAJ3AbR96TFG9Z6xoLoguKxgjX1YgJfzshA7Wk7MA945nmtkD5XSbYBY7tr7F6TQUBXNcf5",
  "key40": "7mBE4NTdpMA8g2BuzJM2S5WEUCTFMYBJ3z6j3puVokdydtyigST6jT5BeP9x3vJbHByn4QU4WySiJXgiRtpoA2A",
  "key41": "4bp4GSYCLswbPPYQ3NGwXqZJC3jhEa1v8z2QBSN9i5dYXJ2GuLsgkXzi3Dx3CapKpHpwodn2MohajgeuLGJaxB6h",
  "key42": "2T2HPVMA9PQK5EnMTW13HqSn587jG4nMgV9Zz4dnj1uwmmMQn1bFqdFBsJ9pFb3wcsxP8BiwAsUhmD7tjuWUxnwN",
  "key43": "5WRsLcC5Wv9nnmLRQFW9aMvmXpVPUszeyzQKp6dEWP6ebxvQpjirTVGJdFQndyWQczkZabhFYJCFUAYrQnFtYbto",
  "key44": "3Yd3ddW2TPpGWBHqf5je44dNWGVpDDBrYLPNtYjex4WN35JcEvNzJNFdBaPVWTYnzF2WHbpKJUFzk6M1jYFHjMrK",
  "key45": "1oxU8Psx3bNfuwYcqwt1RCRzWgV4Bj3XMtovHVLVxUb8f99j39ssp4AKSSZmPfZMw47Mf7fUEpL21YHjzLWDtmH",
  "key46": "JzgHPLDxMWZv9Xv1xavdmQi2hk18qWPBZ6s71HokLPVQ457cxKEpGSMmH8UubRGA3MqqTo5otULScDcX77QFDxM",
  "key47": "5Js69uraJd7QgkA8S2JDz56LkEd1je6rPQ5u4J8ekXE4zgkp4bHD2nkSfP95JGeERAtXybcqxYFd1m5w3RorcYPP",
  "key48": "RTx6Kw5k4HiyRt1gsXiHGweaSnxtew329WLSU84xAohS1WdcoT5JbSAUWGYYsJ9TzTb8RV88nS1YVho8k39xPt4"
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
