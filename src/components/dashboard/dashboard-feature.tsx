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
    "2axWbEL2tHU7ZBxD28BrD7Y3yowL9aDTDnzEbvc5r2kAJMMp9FKwspKjPbFFZcuF6EU8JnfnmBVprJfmnCm4Ggrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XaujGWsc4C9jpyaSPFdFxRJvpTWeSp6zj6ecFjgavfS9PLhGR7GbYQPoKUW5KadbsY2LP4yiSXMsKn1Fr1p8oAd",
  "key1": "5oCoVoX1ZtT4AT23yE8cF8VQneo9uo7bPLtpQh4BVQSLb78Qxk98qwGYC4fV4BH3QYULPUmWGQUnk8DZkrE7NrYk",
  "key2": "4TZAhQxXx4rAeawsNydNDpPxeJq1qEdsyQHwgzv6mxWxKrthqt1kvKyiKY4GLFcziqdBFLTJt5BBwqqmHpsNZPAd",
  "key3": "4JTYBMX1StS9mH6eAz7UeWBoM2xZH46Vrrqc9HCm8UhbQLTPCmUmcLE4f6ZBcLDch2KvqJrnyrgsBzu6PG1PcEcE",
  "key4": "2QqbJdk3ZxbVH72kE5GqmDvpWHxp2ujBw945g4wxBjqLWp4ky7vFS5QxWBdteKB1F39kkd5sPb8MniLWDGPw6Gmk",
  "key5": "2uiA2d9NEpQmX3UdB9qXEBBsCc4arfzR1Y6cdMiom6ykC21HT4BwoRvicfG8Bfo8DLFX2NanLvx2LDqt4TkrccyD",
  "key6": "q3jhUsM4SwgXyrtwSLrS9dufHybY1PprXKcgH2YPwJNDMDZKfA9JRsWVF7ZJNEEBPjWoSRDzAUkmhCpKeDhqteU",
  "key7": "bu64uCjxnz8MRBfiwsT6vwphEiAwq5AHJHF2UJqYkKC5s5vZ4joFrjxsdfi2JL6Z2U2xu1eaphhyxkXyPVDwdA4",
  "key8": "3VWdouJ3FaeUR1RxBgARKiSR2H7kknvrFbWrWxqNqmDEqCFWgQGJ66Eau6YAG5moRjCsx3mamR8kpiM9mmnxJttF",
  "key9": "5f8L3Lzdkf1U9xZ5Jb295m8RFcSeaNqtpCC2frH2cxoRjorrP6rJWN6EWdBD8WJyYhCixR4j7brQeEQEmQoaHni3",
  "key10": "3XhHtyEGpgYnhpC1n4xGZN3G75sBSWMgBZ84CpBpz6NmCdPxbKwoEsC52eMaEEv8GMQPzfJUMGJLtbTemw3MehG8",
  "key11": "4oXFcv5ok6NnVeHAqMSRYUCUJydd7nSwTCB6meQnRjFwVbKcLyoiJwDhHbTpAGfh1yo3jTpGm181jQEGjUkq8J98",
  "key12": "px6BwZ3K6ohsujrC8EFse9GvMRd3QWX8vwL7zZtdiCWgD6ZYfeXAso8QAxJZ3iYwEb9TDNubcRdDXxk9FeJmEZC",
  "key13": "4E9PqBC24r5ugAUeterQ4bcKTwxbAA7sYDdKxs4ErAjviTez3KG39kHuizZ9BxyHXU4sw7RGoctrAW76k7ya3MdS",
  "key14": "21LXCHSfhddDZdYp3QbjgndKcUhz4N3EvGGvoysJMLJ6Quy5NhohgSYte8cTiPKGipVYgwgdfKAeAvYtK3t9gzVp",
  "key15": "5RNZYFsgtrAx4jkgJcZnhoBgcfWu7rnvRwvgsh3mdNxHWBhuTnm99rXXAcacG2ftWDdAXQP8cWcGm6D7HLaZDuFQ",
  "key16": "4PD9wMvjvjwQPv3udGkugkCuMwKV2BY16MVE2WzQzL5Gh42C8r4Qg5eU5miGTBn1ztY3GzDZhoxZf9nye6zpnmtL",
  "key17": "PZ7v6ixHyGxge1tD9B3eofyPS53Bvhxv74SseYRGmBU8mdct8paRbxhDLJ6eL8LUt19Q17F9t47QEVS3tLgH4uZ",
  "key18": "2vQhL2Z9raxPRiPzcx8G8iocxcFosaZ7mAXhCUxLzZf1kZ5Ji4DRH5yM5jb8L56sgBdCqdBT1a11HsW1SrFibnwC",
  "key19": "4oShAyiozXVboqNrmbBx21TzMbC1ZqSiN3ELdthVNZ81Fe8fGwhTCLmakKG5Z1BJ6zNuPFNfYJdXMb3WAoDB4US1",
  "key20": "LRfRM1wfauUdofFm8ZYN9ZihhRWZC43QKwG98rHLvCtsL32fzPbGsB7iTuczusA2uWgTp3QTcTKrQYruFiKLmZz",
  "key21": "2Z85sak4uem5sx9iCd73PhbTJpNZnVCHSMFNZB9uMt7EFi2duzV9459MDX9hWXCJSwwSLurtM41ppc16PFEZHCdL",
  "key22": "2HySbUFDatXizQQ2sfVQTqA1NV9Axnx4GRPDthKRTZgfCFqHp5RBNFecUWGMStFowtBw8MRrEt5FdVzswh7B58tP",
  "key23": "mhpDb6ixvR9id8JWueaUQqKPUnzXPXmh6GN69KJLUm3i6jWCYqUEjgMmyhZEUWfv7FE8cCieNccrfuLovhK9Xfa",
  "key24": "kFQwmSm63Uz7mH6BeX4G5z27SSm3JneEVDa6FCsFEGdRZmjB8SpLz6FqUnFQAdpaUcGq592oHq1NL3Ct88zZZME",
  "key25": "2LBMnUVQ4AqmPdWM4jtrNDyWftgcURun3w4tNBTPyLBz1AWscK7zNB5BtDeZ2uoMDmjUjhJ6KxsCyaQDM8t75WZD",
  "key26": "3wcqB1wqBZWYgbbXakBuS1UN1nzRbmX4WKMMwHzVVPURM5Lp7spgFPKze2hpGr3EHzsFSQ6FKqjhWWkt3hDNGiWG",
  "key27": "5T1T2qyiYmg4XRBM4DLE4qFBdLFTVESWv4p29eJg4mc1QecwHX3bsmaxtGH4nHRfVSFPNbmUVQD1qRkh2ec8GWad",
  "key28": "CvHhjAvZKEwMeVLkxVikcqeZidX3LSBJreQxKrV2XuZAqnJmqZebRtg4d1F1oF6fvHTdXt6RRFu4CmkZxLUN4pd",
  "key29": "8DQc4Un11a4ufg2tMdzYEGjKrh7kNR3P9q5FHAWxddBfQ4gZSf7bkA6dh98cqDCvQqQFvmuD4LcV56CphAUM8as",
  "key30": "2SDtk7wuUHGPkHEK1rFAyyuh8ubb8AuAkJoQFzg8RP2ovKTT5wc2wosbqBkreYZbS1PE8f3NHxq5fxe9PcckfYx8",
  "key31": "4JqdaqPii7LvCQP8SN19oLbDe5S5ET4sLJUnKojF6xa2RGgQEa8TDhkBtWFXMwoZ1tD88n95RMMjijxooo4QE2Df",
  "key32": "32kd5twQYrkmC5xJyn2wgQx6JsktcCj7iWx9QahSVTK3yxuxt2Azpe3QiFYDfffejBrYe7j79pAiPvac9j3x3wRF",
  "key33": "23mdQ35uFmSJGDUPBArLRfyprTPL3fUr4t7wPG3Xa4ZS24hk8AfsCYHes3fPhGN3WbPVAD6e76yKW68eav5uCmAE",
  "key34": "4TJgQUfd7fZmPQn8Y1ZRDEtpxQKnFXiqgr6bKGEDsdp7NoRUzLYaiBzXrzeb1RpSkANJLKF26kHBZgsVNbP4q2wq",
  "key35": "49AptN7R86WzyttFd5hTpvUQdyDaeryv5WdU84DeqoMSHJ76XLfZAckcuwXwUS63KkEFB2473Nab2Gx538uhmqLD",
  "key36": "4WLtRufjA4ciEADvtaXxyzAdx8TSRDMM834ysgwfBMCr9mqfMyVnrppWuYLRiLqRHSgKv23D8Gmtc3Azx3neGarA",
  "key37": "27ZdyxUpJJ4JeyHGxJxQuYhvTXy3JcXJNRiURNtpAH5mEVnMePgCanQYFzBttHj7KwLLf7t8U4yng8rEZRbwF8mP",
  "key38": "2fpWSq3fUeiMqaiZTWYjKdbDSfwRXp17coqwZDwpSE9pHW1gANBuhmAaHeZe2km6mfeVbC5rL3XXcYTEss6B28Qg",
  "key39": "2Abc6ejSLdu4P9xxoMpKVMystaMrtb9pBNSEAEhBrZXMbM17wgRSd5PfZ1YTDDC9t9kwNx6GM1WSG3HPL1b1eB43",
  "key40": "59qXp3orAvucY3UdatDP8YQgAGs6LTdifoYnKLd3PxHagaXU97axiUgPxmE3tpD8JbnpnrczRCTypkhSrRAXEikY",
  "key41": "368AcAtcTdxobE7E2odf1VDfKjsbkarChotRhqVteifL4rp17DREW4BhB7rWyy6TLMwvaq1ctCmnBTTkBuaFeMEs",
  "key42": "mPzqSLo2RJo16L3acHfRMwAQaHGi18NVixuBo5zWma2WBrbcGLRTVyVyhX4r6wEaTdmZzKS3u1tvun29iXiLxSn",
  "key43": "GD73MaWqJzzLYdT88PqLy9qraa384XgQaPffeRjtFLVzDV6ocPvLrwsWL2ofryrujXH5LhF5noVz1QEQKBd3Ap7",
  "key44": "4GWjeVMN9tz31d5mtbHva9SjW2hSWV3noNQ8Eix43AJX3nWPhHH8JM9e8xwSG1M2zJrMdWZEaZzRpTU27yEqSqhN",
  "key45": "5toX2QYVoTkR27nqtPXoSDVQ7dSNrxDGzYF6rZVVi78wmFPyoQd7aj3DHgkk1ZRWkv7rJ5p3Pa6LrAtPJ6np39fU",
  "key46": "294s6sbNZYqhEh8ZtkTczmJBctxFPWfoKLkbWw9gtas35R6M3tuyGjm5dQMt4tBifmcycn5sZLFUScRWfrfhWFLf",
  "key47": "3aJH9FaswLmNv5vonSVSt9sqipqsVqL183ttPFDGBiW4gCqwCJkGhEfkr6Vms2eqYAurTJ8NoZ1as3exovKaJdzc",
  "key48": "3w5RUcVT4DLQgC17jBGqN8WSmNVqVrkRivsTBv2e7RabAbJZfEnkQSKSWHi91Mj1Pfbp38sbZMXH8eNGLzdJPPLM",
  "key49": "37AdLMJNkvqpJZTjJ3X5s4iu4rNFoBo6Nm3rv5nGh4LQKyAV8X3UEk4jKVpGz6eACYNdMWo5bU5MiR4QqLvknVbE"
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
