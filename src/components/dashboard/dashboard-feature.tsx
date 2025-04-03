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
    "pAhBWu3m3DvgCJSd9gKGk2Vy9zQqi5EggQT1sxZ1aECpBDsdAKC1M3hXgs8VVo6Y1BirzFtWzkMVtSSL7FbnRT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FXkFG4nfWvPW26tKf2MLq2bjVQskezSbKtXvBots32n2msrRq9EqQiyQFhHjg7vNw2C2793LWfzrSRoNyL5ZYDp",
  "key1": "2kN2ZpiT5s3wCr6jHQQ1LNkxhf24uPy4q1HMWwxxXXwUaLWft2vWUee88frmzqz8GnbpJpc4M8euwoMpYrpN4MoR",
  "key2": "3oJDqXuH6Umo2eQympqw7Vf5hPuN4nh4mTvXzxDtFWH2Qfv22v7DAYE7Dd3PvzhZ84RVFhyqexL9QoZNRVozUu63",
  "key3": "6GFkycZzUjcmbAQhbkCzFdbDaPUPKBnczNvJYnfpzkmb5fKm97kB5p6batqgZBNSUBvJKzJiAHfbRDw2ZgueRXn",
  "key4": "4KXF3fCqJwpfrEUJhUkBq21qo8m3FBHwiQZpgtp3rxiZYy4jdGPqYSHoug6ohHnFgkroovn8SJXgCSKA1HmMWT61",
  "key5": "5C1n3dVNdauUFPgCgrvciab2K1HRTWujfu1opEvWTHtjkiwNxUpS226MZAzRpDnJa9dkPTQ8kh8PLPZB6Jb3SBke",
  "key6": "WrR1MwmGuHTsjJmzm9abL8Mvdw9izSEeh3A4BiEh92NsUm37LF7Z4gqgiLndqWxVQbWebwH9Z8TsCYEXrSPeACi",
  "key7": "3MHWRwpTqbB7AKX4tcQVHXrhQEhPXqXYjJ9SyFUuU5cNhkdeW3tzpGm2b8ji1zrU9UJxCWELoreMgGuxoYbjZQU7",
  "key8": "4oh6pWLtwZVNBwhEdgB1KW6so3vGw6Z8RJ4RrHAvNTBdQiS3Xb1D6gchz76eS9E1N9Cy78MLDXecvVk3ZXitGYrx",
  "key9": "5ex42TGbeHsqPZSzkR3XWc3Gx2QjMhQtbLaQqoNFXbYdnTJMofnS9fA9J9vx1HxGRkJCvgjT6hFWBRbtETkiF4S4",
  "key10": "fBevw7N7TdpcZHmUwVZyzeJ2bKJxWsbDLBTti3vscv83CooVscrjFexC2zFFeyrYhRFsKPiyPhPpuZp5Xpipvjc",
  "key11": "JP2M3dTwkkLQejMWZ8y86gc2jzHZDx3gTFDgRbvm1gJooxfJy8xaaabvKPAs1392DFWwmwFhrFUvEPsdTEJYMeF",
  "key12": "31bDqkRbKhcYYH8U3EpujxsGRUYMX2X6gkmYhQ6ikSMvbYWUcDGmkVHhP5TndVDUhKSLgp2BvcER1f6Tz5q3Loc8",
  "key13": "3hGq3cKEw6cdozmk23DYsBC8iXcVBrhit4ntwsWtmrUPc1dXtqq1xJ1LYcs9y5z6rushK6bBV9n2kexHoKPExEh1",
  "key14": "4XNqnbdPdQfXSfTW5ZrH1E1BZczpwsNxhwRHsey5dtaN92PH7BH7newQ6WrgUzNvgd8wfBjUZijPdEt5xcQjnpLt",
  "key15": "2Xkug36dUhZM5VkCz3bvzDEEw88hmvrS8UVcXM1jjGKkUDKPh9vc8vpfihnzQwpKfuEJxKeahHj765yhbztWDbAp",
  "key16": "5amNqcZnni4BXDtTDLFDLUcLdSL5FKM93Go2LScX1uhN32znXcdCPtUbCrt45Aok61v7odwDoTLDQ69qJaFHu9nZ",
  "key17": "Vqg6iw1oxPGpbpsyhgtKVyjEJuaLzB7s8fY8QtcxJxJKQE86gt6HNqcNJAaYswGpfktzw3mfunZdq1ZcAKZddet",
  "key18": "4RQnkAusv6Spm7jkZhFVqF25Rfo9XXCREwtDnXppzj79wyBPyDL1H3rJnHZMDQ5qMw2zX4ZVUgwhy16fre6ZHDoE",
  "key19": "2sw15Q2Cr6gTtS78BYpC8fysH8M7347CYxhxn6LwEeUrBH6VVgp4WFDkn5P7mPL9Wk6g1iLGUxKmFjpK6KYAUGTc",
  "key20": "4yx68VAfkaGXV3cc9qBGdqN4HryViDZbSvjQZBgMa1r4BCM9dPSzt7DNbUH4mDfbHfcdcd51ofj57E1tURw2ATuG",
  "key21": "3jSLmkM1ALVozTGF79GWEioJWJzCifyzzyHUoARjz71HLzZfaDDqj5j23nXCafiPWEPywmVCoXHinbZadedrJjfD",
  "key22": "3fH4dy9i94nwsUqQpoZ619WndTJ4os5xQa1wXjvQTU5H2g1xUhZVwoumeReJGumdcDRAVhWYEJHTjVLXD6BkdPoh",
  "key23": "5iumyVYwk5jFzaF9rmMqrC7iTxGpxFKsbVb3Lm4YgpkVNtcBV4UUQBuvKDma7thQMBBE1vwtztgGrCQ8cUsNEapQ",
  "key24": "5AkpUZW3mRCPZ1PBwfK22LFqPngYFvdhwHfnKykwPSZfNcsebB6Si8dZHE4eoYYFn6NLxxETZ7bomNeBrsQdQa2h",
  "key25": "4L1Qi512DeTN1tPHBc5yeEKcPC1GwrBbuDcBBm36icdiaakfUXGEJr2UvcQDKYJ3RdBaoXJdg5iCfQVXt3UWds64",
  "key26": "46HTeXjgnPCecB1oe2C6NfcK9jNtZz5XEX2RiyBx9rHNsFPecwqJV6eFpgMvNhh5u324xbdEggVz99b5wDfuudnU",
  "key27": "3bzAnoD9sJARrkyd3pDDEYRt7oBDigqB2TeRdbKtRjb2fwjHUCf3AnnFBqKuonVNSwK3fST92XU1ywWmb3hBoZ3z",
  "key28": "hHbK3GwTzreSp9kYDm4xVnjXRE4Ljpg3djVNd2aTPVGMcSs4WJ1JE8h1KtdhnSbdLHegdMg7xct5ZmHJdqq3FkB",
  "key29": "mWeBxSfuEsQmFBLTDVvtAEgR5aSu8xva9b4NzMd8SDYicszgmvs1FHFFtW2pSdJnG95t12dwCZ6Su4R235RYojj",
  "key30": "N1uSQSjuRve76UyVjEhbBtnMaj4ia6axu8bSM1zbCq6BQc1B3EvHsvjYMUyDD6BbKoLG2CN8QddASFHv39hr7ED",
  "key31": "2NKqTzgCMR3CmBmEuWbKwQ3FXAXKi5fRat4A9py8hLXyUohyMwvqy3d9gGdwFAzVAUcH4Efes2EDwNhKyaUaWMey",
  "key32": "Xmp4gj3uMqpAdT8mLb8Eznn7p3VZhGzmeZxPkXMSuCF485u2BrVcJSdDT9ZA2VQwEzf6zFgXNtHJ2ev1KViTe77",
  "key33": "5LUtcCnXjcnheVPyTQ3Cz8pwF99H23Z7YfETwdY4NBZFnTXaEWFxHR1ZnzjnbPUrpSoVU6hMhhf5nTw8ixEXJ5o1",
  "key34": "2Ybg7uq67s5wQGY8K2gXhiyy8MJBiGDRkoRBKRvqq7KZR5xCPfpuhY6n9g5WSFfbL6rpSaurDRXVs65NJkvUmW7J",
  "key35": "1F1yjmH5WqzySEiWJ8wcLviPuQ59FMEH6hr1GD2MAaKM3QroaiXMS2TQRVJkSkY3g1gt7RwgheSoCWXkXHVviWg",
  "key36": "64aWuQgUMBq943c1xqA5mtyGyvnFi8XZLNrc27TyHtQ2kCXha7EgZcVPWpA8r95T9J9hfdg6o7MM16irR4vCMMhN",
  "key37": "2BmThghMxoSffe6YRSUQeceJnaU2Pd9gYyo5fWJwKMrVRXiR4dJ4zpXUASdJ1RozuasqRwrNq4fnBSNbBXuCDLAF",
  "key38": "64MTLmCYBv6s4nK7KZCSKCwTUSLySQE6LVSrTwNnNLr4Z767dbqNcPgkfT9HpbEFykE1y8tbQAmFV2NEKwyY4oPH",
  "key39": "3z7EADKL9HWvB7zkD4MH16kfKJZouBtfu6XGsyEtMx3DZ227gGtyM5YTkMSn7gRg2o2RVeqnto23TmmEdyZC1Zuo",
  "key40": "2rcwi8yTxyE1uG2xRN2MdrNUXAPPwUKKJDApMttyAZyZgr1QYBk6WGMP41F2oGktn2ttVUiimKAuA3f2cWMj6H99",
  "key41": "9wDE7HAMLsb42xbYQoEsgxcWrLQaxmiytEyNnWiatR6GX3F9JYSJTkyoZf5idz7hpafWpqjt4PZyKxAGEN9zPBo",
  "key42": "MVkjMd9ST9vi1Cyy1nLxWeaNSt3mxegCHXRfiZm2ZMCKS1PyNNAQiaqxFs7P1ngPLxjT7ojZsKVFJquydFpyShN",
  "key43": "2SDWdMBg4Q1XavvPubyb8fprgNG89HxDCjBHfgLfyxKgrHUR5kVSu622BKebW7RThzgs1qPZ3BSWtSf8SyWEmmGi",
  "key44": "3toK94MndoKmG1GehGqA33bununoNGbP7m7eR1ADaKgX5u8nsMiPb9ZkUWZ1p52bMSribRRVbuoewTpqFiYRBYVS"
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
