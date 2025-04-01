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
    "4nov3qZC5KdUoc56P2AWRk6cVStLU8oUkLiwsbExnbdFZxLf7CyVA5n8g3MS63QzwC1sJz4H6zjXLSkfnyFdQaxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RxrmvGUn1miMHJoiVxRHs6HM86GBSRcqv5MKgStkzQhw4A1Jrmsf2qgGgF36Scjxc1AA8SDFrGucevRrvsgo9ZX",
  "key1": "4EKV89vmX8rALb1VgSkfrMx28ik6Xu4ZaUzMAVB9YpzW9dPhb7JEzVNp21RNZvdmSRPLmScwpbp1b1QLDAT7Vvdz",
  "key2": "4LXhWTN9bfvtfhCrdYyc6nKYpB9vxRHbn2UsbJC7dQifAseWdCU5aY93MwAzyGR8H6rQ5acV9NrnbzjqHMYUzcEr",
  "key3": "7tskaZRrhUprAUHutr71CEP9aWwFXah1ghAfMT8pADDSJKYKx5XvasnPtCpJdLAs4XJfLX6ruDWiENeZTQNWeri",
  "key4": "4bhe6tMBjeP6Lbnky4UufEitRwc2ScB41EtAGiju8qPk6KHDQG5dN5z3AiYWu9o9114iCvfN529ZHyxPpsaHpXvV",
  "key5": "5ijRGU1za8EM3r6R4fanKGPqDWR9A91jz2sY5zD33wrBQFo4ckN5GvEmXeZANYMXwusQmYWDsAYpvfqUsRPf3NqD",
  "key6": "4VaKNttGnGiQgsgw1yWmTUpK6XmasqHGQEYYkdKzuzNdjW246bucvWw1dpJChgBtjZgcUW2QFgBvPNvEjUMqqW2Y",
  "key7": "3w59B7JEpg5LiSE1syyzcC96mfrvAab3XdjaVmwFEMzyxrUihrsjvvWMFfmXYWq23Yb9RdAW4vzEiv5qCLt4UWyE",
  "key8": "22JpVjiPiRSZStWCo6g7Bs5Wj3tqTKkQ6Nh3d2XLmweL4RNU44X74pAKi1xKGVm2KhMpprqyF7eHsWwProQNA15A",
  "key9": "5p2icEw5we8Ne9cHmXuXgxgHvAJ7BEK8jeGeRMVuxrPfYaLCs2Sug4epK184q6n6FLnXhhQooSEurGjPusDFpyRq",
  "key10": "siys7vZCLmu4dwfucn6JrY2YgkhWtZJBQ1s8vbr2CAP4sqDK7B4Ln4GGrKFc6WeCDLfsVNbr7RwxNGhEHPpr8BE",
  "key11": "pKCvfZow72vTAHcAcUrNWFuwdsTt4S5tt8Hi6c1bYCZW8pYSUMCbvf8XQL8FiWwAQzTD5oKZQHahik5FwA5woKu",
  "key12": "3bncGU1ND8UCHWmi6g2eLb4zTkWxuDPWXbmJTEb2HeTeFWeDDdHj4ZuzLMDu9wUocAwQ4UU2k8kkcne5Lj3pZEgz",
  "key13": "4QC3uZmwZBAckEQvdVudpqL5q6KW2yUPVxZbpUPUaP4hTpSEzvT5ZB7Y3j3Y7ufTuznx2QsdrhSPpzWKTMsDxTa9",
  "key14": "3PbP3ku9CWu4dE2YQHzU9JnneebnXoZMzCZ9Uezgw5va5pXUquDUTuPBaqiYNTQt5PCHHTF8RAsTTKEqr26uw2wv",
  "key15": "51X1KmDDVh3J3Cb2jPpgC8sDgf5kH1ADNzKEbsAwozjvdVvjQxRfBQA74i8yhqZVbSCHBC8aDeazLGQtn3quR8La",
  "key16": "3kVrNi5Qi5vjk25PakQbcjHhGhUaTY8Woq87yyvU1UXgndVYWJJrqAd8obeQKoPUePRAqzAK3ghdBA36gpSh4hMJ",
  "key17": "4VdTsbSb3jcDyWsVGzWFpya6Wsgof7jVvMaq82zgeMwYemh1pxxtRwuenhmbFjD1wnLQgeN33HemBs7N8gBwGypj",
  "key18": "1mf9k2WY1PLhnkc8RXMbaQtdww7pXKGJ1NtZA1Vkyo4Pr5GtaoH76Yxb2mAyiLj4B7YAkVR7hYSPfEVBAjA2cuH",
  "key19": "2tc7DXQsw3wLU3E4vNZETt6QPbUzYGq1VZdtYBxQHY4CSp3Vi84fyqwcazRBnh286zPEFor1CY15hQyGNQddLVf7",
  "key20": "Lcy69dXM6pp5t7QLcdoNxq36365aFZYPxJWizNbfr1kHkSJRxVFJHfRMWvV1FaoggLi7gwwb6vf2q4aoQQUZCZj",
  "key21": "3cpqonNvw66zuMbzs9UXWXSmpzzyEngm6KeWE28QiwnzwxBtemdhax1FJdUUoTP5Bs2HKpthjz6epzJvERwCWgws",
  "key22": "4RyYtJMwb3dkcyG77aZH6FzZYQMMsrKMgekz5CBvoKpzAwG5QzcrkWeRUVWF7RFSRS2zAyUGz8ZGtAcaUQBkGFhH",
  "key23": "4NbqsYqyMnzRUdVd5FxX59e9kZCNobgE61bJAcXkkSeovrnjhP53c6ve4HnUozv3Pjg369zYS1FUAWaXSmLvVyRZ",
  "key24": "5HKqRRfk6on1iNoMuhmmdZHtmVbn3Sa9AB12SusnkQgvV4ZhGymFKE6UT5PuLNYDR2UMyEttvH9uDW9sBuhaMjbb",
  "key25": "Yx7cLRceBaqdZKvP5Ax1BrKkW61aEF2pz5DuMyUVjL69281NBXSE9yAYuXjBdQqv7hCr9rtc56M12H6SAssZ8Dv",
  "key26": "458seurug5tmQiSMJnGbkcgo8e9kmV4BwbN1RyJZaRMfHQc2Lzj7q72JFPtZenLWR6tr28Kvpndx3ERgPD7Xr2Ef",
  "key27": "3U8Sr4pDEd7FxBbTcAb17JYWzBWr1oo8bpAfnSzgzMrRYQXC7VkqnGeK7Qe2thH2qc9iEZzCsNZ2vRxr9Apu2Edh",
  "key28": "2HJFskQoX4t5Rod9Wj6L5je4HGRrxfsPzQVjg6gxje2X1NoTnB6fFzs7qfzfwLgYsLJ9FMHV9vmUPsHwPuSCmsfP",
  "key29": "eusyWFmBPeqvsxbChgwidmM5yHjgGg2mWS91YubRu5Q9jaUdZrdrcXNA997mKnhr7H2DR1v14At5Kaey9GheuqZ",
  "key30": "2RL1bu71Sd4zCB2PLAgWSvNUue12T1zUxmqFYSyP1q4LiBGy7o8Hc4SSvHpsCKWF4htYV5DSgZdeG8dJP3craYir",
  "key31": "5wsaYeh6MWzDsp3w9FDAComXHHnvKJYJCyEo9QCFBZYopCphGuN6syouErTsQzy99RybjR5t3pjYJ363hiG7TBvx",
  "key32": "2JJWHfw82urfmhXWNKMbxkFBruxD9aViXGGabJAtRvMbMi4RnGEZh4reCXjK9ThJ6sfDo5LxWHhw2YUNeU3kVsV3",
  "key33": "TzKKvMJZticfz2hvNYgtyR9shrJfZJnEN5NZhqsUMzmrtbMBrYQhBHjmkxvEkULqvxCavoBjk5LcR3k63qSRHSc",
  "key34": "2nJRd1QAfMf7PYwahBVVu9nMjNeniN3LH35yzXQ9mVZwSf8o23VsV3wpE7KsjnWrmwUjjwmZTXnBpSf3ZCa87kjp",
  "key35": "3qCPBK3jqpTFvLrvzSumnbtdY9vEYhRk3Po8QQ897m8vU9hrHSz7ncJXzwyeSmFc9rYGjAN1AyeiPTaxLs8xopAb",
  "key36": "qe6WrMc4gn5FHBRZuzZcczYNoScoVEn32m64VmcYd4DLEVPtQ6vwo3aRBhV7z1Bf7pA4GDkwczdVtLvhjs33Wg3",
  "key37": "5mmYHJS9fua4Ub2FWjSdjv1he5tyjZLWZ2b9X3oKaW3HtXF194cUiNVGhysz66LzSAVeRdYWHqq9SxirsMyNUiza",
  "key38": "2pSXQKf52QbcXaN6cXpCQZxQabW965aLdjQEze1Zk2LRiJ8RY4EtUsyQxhm8hskobbbKZ145CiHUUi5TgwtjPMKy",
  "key39": "3Yy8NNY2hKGgQdn6qHUhKnjBcCAMxfWtMSSTZ5sPRwXmqZNNi2Mi6tLMxSvZw87YEADKB9nKJ1bxmHJ8ytFoyNeC",
  "key40": "5xVyHNBFpVGfskTGP7CNHaVCKJ8NFBuVMjdBCQmD2wM8REvrCofH9TogXJCxKjpNZjdxDBcVtxrTcLffUwEHEPED",
  "key41": "cd7bWR889D3ewcoV6MuXCgDZvzchgjB4usimMGsGLYZnVB5brpvh24aapGcUHcdCnFY4uJV8SiwfA8yGpe2HDau",
  "key42": "9E8BYvFCbjnm2VavGsr831u896f5ky8BjbNvkttPoVijf1yqh9LUcLoMAaV4z8vxN5PEgYQBXaZk1Xk4rEsQ692",
  "key43": "3tWoRJypGgVhTn7BdAAZatvDW77hvDwHgHrszdTiYd8mZdaHmdopQ7iNC2tJyiqE7AtoQ1jWbhYQDJVFx3bZoZVe",
  "key44": "4SNkLvgLyFwNUhxoYMmiAHnzckQek3ZzRfKUCkD2JH49bBX1mUuj5zAwRupvBL9FvQz4qJvKTGJ6SPJ2YLVUwnuN",
  "key45": "5oyztGWz4tmLrhDr82KtrKZBa1szPFf7sknhxYRaXsZHDsojoUhZ8zs3VkmxSuuPjG6Zvn9grEfKfTGeyW7rYR46",
  "key46": "acpuiZedpZjAfH3VsaCbu7tRpHAiHrdtWm6PUAehWFzuBbQmMNNQW76vvs2Cr9v2HdDw56rQfFqKMTHhipLHoRj",
  "key47": "2CCsNhCd7rgwpg7gmpz4UnApRTYYhv1J8FzAv3dt6u2AdHVv9yqt5orr1ft8jRGNR25mZrjJDVNuUpeEQtNMh7Nd"
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
