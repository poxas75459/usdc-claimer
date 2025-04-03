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
    "C4aZdog4JZSYbqmArAPJBCub3NmWGZing6tbgPjopdfUa7eyKN451avf3iQ2KHAcFsF9K65eApD3nD1fUDiYC4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "baNyjcYKPPLh32bgR5qPUuHcVwR45acs4QECs88wm8tPmMDBPQxg3D86n9oEAPk2k5Vsoy7MSCmswRH91hSkdcd",
  "key1": "TMLzM5qhfxNMiHM3s2chjCGMzN3PHgtCA1CJvAPeeXzfhoN2h9epcYwrEXykV3mjjoUnxBA8FW4nS1k4nMsiWKi",
  "key2": "QQsVoWP6vUCLg7dBrFBDSyQU33mMA9xHmn97hPxmBEAcBeagNBuNa17DrdH6w7ScbQp4h6NV1C3gbdAHttY63ru",
  "key3": "5L3ZsudqRvaG1N5Bs5RkVTM1vFYXtnDEQWiu16JCC32br4jmUbSvrBjL8dHiJChJWfn67eA9c6Mz2edSTR2snKFa",
  "key4": "63Z4ZQBhP7PHhDMgNj7AJDcvmUu9t6aqJWThBwJfhnZj7FqkNGTtmDq56PX8a1WNNy8xffyQF1QfeG5Qp6ntnTd7",
  "key5": "21znEWRnnh5QeqRxVRfFxMpbyUJGH2H4LosYoNKX67Zf3iB3f8CmZeoXang31E8nqw2fgboUPTsjoxUTtgTAXvkD",
  "key6": "35uxRvE2RvzSENWuwoRKmE8tKsfQ3YL2QABhruDEWENee8cRiAEttcUYUwSqv4FkLcBRT66i46s5xi3RU8jYmrdf",
  "key7": "2RtPmveSMWN91mtjR76PUEMG2J9pQHRAjQRAfDEEJmtYxPbT4nut4qnVFouwDXAT1qiBKUjok2MJneFvrJLWfCWa",
  "key8": "2Dn9aGHxHrncyGY7uHPfqDRzcRPTdAFXcpmkco7NY6vBPC6h6nRcouNzsjE382kBudniJbHFmzvawWCwKM6u1yzQ",
  "key9": "5eCkw55p6SvknRqD1bEMT8hnT97TsgWzegjWaGm61pzJBLdXs2E79VZxrbH5VAgYhnRKrkJ6DcbhFpzRphudVRH7",
  "key10": "4hjhR4hE54FV1ujs4a8nHV8qboYZ3b88g1jD2zJ7zm8J9Xwi1DpPWQVg2APypjcKWEKoXe1opkWBuoFTmA1fiufQ",
  "key11": "3bjkAD85NN3P3ZXXtvn7DSG96Srdea1z787f1wsDLje4TXebkhtaSYuFJraa51zWKSogf1G39QJFj4CcSGYKsr8a",
  "key12": "5uwZJZ7ZMtCfHX4wpAQ9u2U8bHbuptu693XA2rvpmEBegSUMgxXofScr9RbVg16Q7TLFrcKHXDnx2Djb7qQzJzF4",
  "key13": "LbzpFCkX9sgd3wqyVtkNuVkW4rgS5ZdkgWuCajt47DLeNdKBEo1smULn26uDf9wi2FmvLVRmQGzgXtJwFyMH7Ro",
  "key14": "2sRHixMWjL6cxaPUBdkEtnjKy1n1nZC6hwd4861NEQaLbH991u9cpZvwj61FNonmFLTgir9PjCMx6JmfowD1hWCz",
  "key15": "2Yn1eY2F6HGVsLyuEWbG7KVH5zwnqoGGHiNxPfi2PcuUy9PhGg38QxJZXgdRUzNysgTuBw4xkk7Q7xz3XedT2ddd",
  "key16": "3bcDhGahHBUedtXJenGz1AAQMx9twzXqCRQcKdirfQ9Lz9BQ1U8iSv6oTTbkiedYbRzUNiPKntyLPSixiu64rVvq",
  "key17": "5JrbEzVhCEZZnUkhiptb1bDoZmHnNQbzwRtF836areorxMRE1ZdmEsn1w9n9RP1FA1sLseqRkGPqWgGoLrneZzc5",
  "key18": "64mbqETtjLu1py9qXxZN2F9cvuJU7P3hnVk8gZFtf6Lk1mZhrhL5UK4YapDrnLZen3FxiVKo93JbGnFDYT3ff2ft",
  "key19": "2DqMG6UTuuehrSGbJfuuZfGm14CgD7Jw1f4sQQc5BrefYx97BbBghBd9w843nNmsnP3CjYDwPtnc3Vh5C6hEVREf",
  "key20": "656FVRpLsaVP55CQvoxzb44QYEfcH6ZdGj1sPC6NEpwFCdX8nmkqwchmxY17UWXDnemmrRQGMNpn9tjA8mQrbYrW",
  "key21": "fJk9syZWzQqta8Pkhu5JNCHvwEFKLN1xMDNvSCwVRNfmnj8Dpw3A4cvTMcgUzHfaWoXxHZeVabXM6DipFFuzg3F",
  "key22": "8ZsZikafzPiBiZLSXcJAR4eTPR9wYgufaoa2dGcwx7boUxCMwNuScKzuL2ZRsE5oxWMMTnUjyR7wQr3u5J8doL9",
  "key23": "5KcWLPUi5dXMx6j3AEio64skDXXE8F9VFW478Dqksh9Swi8deGibfXhHNHhxXuTDAH1JR5JXnCwMSwEKJDsecSQS",
  "key24": "5u4Ca5TpkvMS4QtbYL8hdQdPrYCiGY4ovcMiACU2dDZbwtr4bw1sNDZLdr53o7gZPc9JnH5ekAPWMJN6TPCibku7",
  "key25": "gBSLupYvSAxaT1NxCu3X2b98sioytj6whu14Bj1DX8C7VUzK8K4oprbmt3GeZVBDDV3H9A46p3vvW9qUuPkB36c",
  "key26": "5e7TMdLpugUdPXasWKbBuDd1JfBJUh39aNxSNw6S7AaABPgPF9E16e7HKxrmUetF4Seo7eE6EEszaBognXGFhdTL",
  "key27": "DsvJMqzNFLdTv5bkxr6XADEntqAQftcEeDHnBPQJnTNUNCKMT2xTnHmqbV478wXUKuoBguYX5rKMDp4pweP96yW",
  "key28": "484HLNWsxmm3Nitq7QH3fiNeZH3wL1JDzpLtvXwcNVchzDM25sdCJqsXp2RMQV3pMHQGmmBJ1fPWsbeX53whFKqh",
  "key29": "5DFxhL7KR8AxkedCebz9Catw6xsAxPM65AhxPy5P54FXYYnDLXcdbamH7dVz9weun994Ct96wkPKaZj41V4gATdS",
  "key30": "4MGaiz6ao9djrMHuBMZvUUge8csvMafnC18J4xtwJgRqRstamfaHaS6viUWkF4szQmbhkdLZim2v9tv1VrsnSFvn",
  "key31": "5bvtqQpPcasKCprJ4KnUHzHMTGyUWKTReTJGM6hLJa2aUYNj2Jy57p1pwaxWbBDGxanGYL8iDmXoMB5qmPDyJiq1",
  "key32": "53pz1x18U1tVoFD9kiY3WgPX7F73MZXAYdpH35W2Kz87FZ6Nzvm9x7D63gQM4TpUPswGY5spJ4ofWbEcHj3Yp5MK",
  "key33": "3nufG8e1ABt1LcYLSzVafzGKEFqmeubhetKbKA3qnqKLNkj6rdVTC7zuveiXq1N3qDbPFxvd1sWEXBWAXwLBrVha",
  "key34": "BcDLaukmUPzKLixgYSFffpSLqZ2CfF4WugyKh5uVxY7C9qNknFx2CfeSVo9qrAvoBGgiVf2PzTSiR4vBiYYyEGa",
  "key35": "2uuVf9DPfPYdi1tNSDG2FfCxjumEsgd6rtr4fwZ3gtoyiJ6zw76WjcpRwUQsAQU5s5e3knWNmB2hsShyQWfAeBKt",
  "key36": "27b1G7Mkk9bX4dEJewWx7imqJEunjff31xBshceTZ6TTWoWyT6WEGpo4CmEpU3bdTfmWftuGFb4jHwFEFsa5XJzn",
  "key37": "P8m6RZDN1LpyFHcTe1Bfpatmog7gc6bMb1jWzmU7bt4pcPf5DyQPrGVitUhA4NWyZYwoHemBEDzNcKsRLbFzHrD",
  "key38": "3m77gmXaF8heqWBHFUbL53WEFKcupztjv5nUybKdhVMrxcVWtNLi6SVoBPLXUuebeL5MawF33JnxBRhggTh7E5nZ",
  "key39": "3zYSm8omkGEFJFwKbtn1Tm6vKgTU1hFry7SnBFFKCD7JZm3EVeazCLJ8zZaQhSXqecLR9CUDbqsRdWTdt3KqfzWk",
  "key40": "2fqWBZRn6NK7E2TnbdJ1ibEXdAysiGkte52PLDWotKXKyS342eCWGPkuTSPnGsAKugQgSy6JUUtYSqmekBWTPJN1",
  "key41": "5LE6BmuPVa9rUqojMTrG3VW6wxzK15t8sCrUx8VuWh9aV8HXcrP2SYtq6vxrG6w7XdGMuZ3dJeVyKhcLQGxtgkEi",
  "key42": "5pLW2WxsvUmfTeCHKErmnUG8zGQkdrPWGquvFv673UrykU5AtAEHpU6tUgoQrRmkEGTYtR2PZ5osLASQknZLXRzg",
  "key43": "RhTtP1Qs4KcEJXRK7L9dDkizct3yTLJ4SqKHLiCYgosiNZp14zF87uz6pU1Vh7zRR3AR6uiTNrwSFBixNffSPEL",
  "key44": "61nXYwwa6wDmzjzZ2p1Hd4kthBhEprwVy1mdhRRNFMT1utEKtz3QyYHcBxsT4sbGQAzKVxuwHdP9WnxDwyw93eAg",
  "key45": "x5GhomEViEE4tTckV8wc2m77Lm7m9L7xDVqiTM8eLwgdutCiS1LB9FuRJVXJ7Me5ynuDAqEugxDKkajM76izYpr",
  "key46": "3HgKMggCPKY1GmMf3CnkDyA3anrQg61b5HHfJKYkxY1FfG41SrewXG5DfJ5tpuTaeYJhHg1AYeHQvJ23zmDQu4PR",
  "key47": "51BaFrNAV36uhkhytjNTotu85BBLr2xPjh61qnAuYPmCptNoe9A7LU5ycqTNeLD3kWaiiyouBHkzqCeLwVTrchJb"
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
