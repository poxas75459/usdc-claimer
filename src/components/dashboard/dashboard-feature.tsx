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
    "4x2JXSicAfWJH9XTNQ7F9NkDgzn6CrvTffjbcMcM3Cn9LxMiDfexXDogfJqcWAWV3SsUoAQZGyynsc2h4Uterru6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59URiY5KQKJCzGeMgCpa8bCEtkhMDG95gxxvvGmHCv7C5Lg6i4K3gu8uv4ktag4o9rE3fvVTuE289d5yMLKWnVFQ",
  "key1": "5yzU9RTEytQpYcekF8i6LXRa2BZyyYCk9nW2mSn2PqcUTqRnUnPHrvHp6D9pWTxvi1Z8iaawSUp5yqkaW575Uzyg",
  "key2": "DZnvuZB342zsRyRxUsgo5JmrgiBksZRcgWvUAz5xZgTSLC7NyQxvVL96b4UEppThXaJmMqY6edM7eW5XYNjHTTq",
  "key3": "2TkbrCGDEu5BaD5T3vZ23BnJLtgpHEMvH8D1e2Bh9pZfsGPSkQa7Fb7EWQhrPMbmS9Nx4gvWQ99tQymvPMxVJY6d",
  "key4": "mUGe1LcpsUdqvChMLaQdjhKfLZaE8v8oBgnhTdoSfvin2RcQzrnkFNH2LxVf2hX3bGme9WoMbrt5GH2yLizh8uo",
  "key5": "51xAzSkcHnykaJdZ2eo3qgrdaJ7Aq6CiczpsNVRFofsLX4UZNPyPrX37CU8ukzzsbz1RJmQi4AnuC4eCoHcYp9kZ",
  "key6": "2iXUZNBFUZQ8pBhLCHTHVuAE3sKhQ3AzXeJfcijk6nv4SD8XhcojigqMRF8H2hcfucmyxzHavhrcxGD14XVXph11",
  "key7": "26Y6eshjcji3q3V6kR1WxrArk3XFYezmdFuWdvUKVEw23fvukp3A3AuPmEm233Zh81VgwvntvfeRRufkPVG9YCBX",
  "key8": "4kAxHQ4b4djcnwoMx7B2s7mN6V1pesJefuVVuBwbEbikjvmeZKqNGEF9uUTLRzC36WwaMP8gv3XK9mS4UL2beWc6",
  "key9": "33t6bBXPjLg5Qzay8UB2s24EuT7bvdujpZGBYhuBv8qBXwhWD2BTM2j6crq5C6EXXd9pYEyQNPHZ6DdSFePE6YZ2",
  "key10": "ECZBcwwH2Gd6zQoTFmohwBUJ6FEmSAaWu8rvfWfrB9Hx5Q4hZ37CwDVofVoBTi7dcL95tDAf6y8XXV7sue2ETtR",
  "key11": "2xuzj8JLPzWfvkhiX4Y4WBZFBLDEw8u7F6815FzUUnx21ZEfpCKADcG3SbvbZugPzZzCU59V4j8pVnhayXJ2yGd7",
  "key12": "3R52dZ8tZ8JLJyZ28Lqfy8GrDdDCGQS134nS9V7shCqL5i1WmJUMhzJuJhEKYHKXPW4PdpHCSqMAnVfDDvZQZmMG",
  "key13": "4EcEyVySodGpspaYfuMXPsvRMw5MQbr5ha6N9pbTRHaNiQrEef38v9wQCvviSPCQLL1QMo6h3AfxwKqUjvStCyJT",
  "key14": "44VBEyrqXQbzT2WaFUJbJyXe4hzavUZnVUTfPp9FbVqwTuQPmvZ5r5p3RKEJqynqyTTqXLpMGzYo3wCen9kdc8Wj",
  "key15": "dN8x69Sjjek5hGZMHjwMhJojdCSqv5wMzkcF2VAsL7weZvAJKxMAMYi5VmXohzgakvmehfYckUGqKB1WSECcoN4",
  "key16": "2cXb9YJ2h4mJVqta9wezfG86dF3P8MY3csLPovTP2SCSzHc9RAtijiodcvwJGZW7Vx4XUFHBYcbpiBCi7PKhwmob",
  "key17": "6ZXcSb2yvx9xax8t2AxX7T2DHGzNo2tkBgaUo5ASwysd4Qp4NKqkvTrsf4WjS2cTwRZb8rd34unuYZSijeg7vHA",
  "key18": "5CSYFQx4FQE6v7FRY2EENixoPcWucRHmVaX7LudZe3X1Yr7vyCTwCZcT53cK4QV7u9BhznypN6TdPpeuVBfcxmf8",
  "key19": "2cLSG7VkkcufGchoPHL15EP1yH4uZng3zmsWoPoWVXxsxQ8ysQmoM8rvj5LdcDMRredu4aQM3T9x9rnMosatuyFh",
  "key20": "8162TD9aS8TUmK4J43J62nPbZ4UCgf3Z3Fkyc8U4FPqV6joi5ozh5JFKX4LPjoZzRppZs2V2eoqGmgrAYbsEBK6",
  "key21": "3N8maZxg2fZPXPdAtVRv88TPbtbAN1CDaZuogrVsHkukQkeLTU9tkZFYJksiZXeBmoVBby59viLVZcaaGN7DhmS7",
  "key22": "sLLGEELpZ4j2FN1dmGD6MvBroem4fHC6vk5kH5a5UVABgJ4XDG76L6iUwbup5vJ3WQtGNMQuD9sw5Geb1um7b9H",
  "key23": "4CRoCM8CuKGfgJgkyAzANu4qrx7typ2Nzyijqg75eFANhhAWNTBbwTdFxjUATd6ccSkUoGntbwsc646U14D8XXEq",
  "key24": "3yG5WHVo9VntCboQtB9SC4iTaEVLfXodHQcrapbyj2AhTcPQp6J3N8DdLGBkR34NAwsYMX6YRgGiKKZAqWVpBCta",
  "key25": "2Bbq2hA9KUKqWhhdqFpNpBKZCoKgV6pErPZXgrCAXV9M6rCHLet3yTgpAgDsGqs2f6aQy86P2sZxWfQSPB3WRSkH",
  "key26": "44eCD533bPqGmPTEnQdZMcP8gxDdwHRcWsQaHDDv14HriCzYy5xoePnaksNYrpYZQF1xDXgq8eRQiFeDZSydukYU",
  "key27": "4MPqFxjSMB71bXHKK7X6Tv1kRthGqi49XvdpLJUr61MBfyuSHdGSpYFbM5Kf8GExaghusAXJhpj1byCvmM1hjRst",
  "key28": "x1MoQvanPc6FFehuQTW2d3VuX4WJ2mQziriqarveRxStPjkFbukWz9F1urvjxu9W7jutTtMkwgjPsggcvuXxzWR",
  "key29": "2Cp6WXtbGuFRi17sXifu7Z8ETtM5WJvD126ZiWD4zCodf2Y9RvTPZqFR6QD5REUGyXQSLcDxmWvmicTugsk8mu92",
  "key30": "4STxvBgdaUxFhj3hoWY6GHsd3N5fN2G3xNmuD35qNTfGmidDnuhtpvmakCK7ngp5D2RBUqbS6prqnN6iSyL9ZSFo",
  "key31": "3vLe2aYc8rcAUdSmT7wrXZ891UvTJgDyKFx4EULiEmYoJ24KXCPJGjgBAk3msZw8ei6zkUzLBcarKRwrq1ztNq3L",
  "key32": "3TbBScztSFc3twYqFSayEAiiht6sUqBpwrXbuvzMgZrAoY1pyLNcJ12tEazXmSVJVnZzYd2iqzkuGmmPjpj6THUm",
  "key33": "2K6CUtN1pj8bCTQVbqadRqcrD7ZhBiPKVaMZ2Lif94nAhZ3fKfnSdXBHTSySvFuKuLyB3g52FyhdnSYoq7nES1gf",
  "key34": "55w3CdfpdRgz4ZrM3FKQ1ifwaYgAPGi1Ea79b21pN9MW1nwfDarPnR2S2pW4dpDPpy911uo5Ghon5Hzc9sS2g59M",
  "key35": "32Ldux8KGiAUFyYRcHJA8yPQXpTcaauodmiJMNyEmMVHTNDUpSx7BzQYtabUmBStpja8KxoPDfQFeYu5UM39FV1S",
  "key36": "5WncaqZZkNMPnG3Eck9oMYtYVRfSetKxRiDQBcdxLTZdnssn3hY46bxcMURZePXA9DLYHUh1dhWk9iJEoGYVNbxD",
  "key37": "ecL3GGBYiBtDjqcnEstXTmCEU8fRHtv7fvDRxNg8JYCUUFimWeZ5qeeDgALbN2iVYTB5K5HgXGT27ZnveAMfNZC",
  "key38": "gHr95RZR5u9mu3wJFLdMWMFCSosXQH4aiC4DcmhvLczyMMTvK3aqD4qbgHMFpamg1WWZx1zirot2vN9tJjZ2rYa",
  "key39": "dcdUEyMBWdevJQ1PoFvjveVSkogeHHNEzdw5VtvSh5eYuDR1Fokh5FmYxVwuX6jY2cSY2Tz25VS5SWi51q4A64C",
  "key40": "4XSMephymp9DxrT7FMwcmPYVmsxpcdGSzW8F72xuqd56TkYQqhCmkkExiGujxxn6nWDY2K2FrR5GG5MHQzDATY52",
  "key41": "3axmKu8xDtCLBMqEJWAWdwNhZX1Bensi4DzUoWJ3xjJXy4hShPznCqvXqUxk77QBeJpBd9wPL3A9Nmqee5TjH7R4",
  "key42": "k7sM47ECfMfefJR9kCfBcjf9XuaKyb2Yr3vuACfQzf33T1RFLeXCLAHMLqHGx6UYiS4fmwQ2PVTMPr76B51pSjm",
  "key43": "2eVqV29HqYBFRtCUyJ2J238grbV8nwiLffxhihHznNtGVfgKpNTSBt1yDQTmNz33yRwUYXHVxoLekDVqqWoSW4JN",
  "key44": "5yeWonXKqmXGdFKxPzaKXgckRYUKFWCYVrdV1CxHKhwoWzVerj9HPm4Nf8UZMsEaTK3e2iP6pwUiSG3KjjF43iPo",
  "key45": "gAgFzcxBmwg3zDPMFZ4uD3V8tbJr1Y21rmMhNhCAjEHWWRaUtqV9eCkU6zhvDKS4ZkqHTDHxuxFQuzUhEEttgPh",
  "key46": "59vMxi24CxLeexYHN9Da1huEEhfciHW8pRVjNBKFWt3ihJpYuf5dxCyqmC84AmwcR335qpKfa1t8gSLd5bjesCLA",
  "key47": "2VVefa7ZzRJMQtvr5S7UsX5JZoMzTBwLkkM78s1Y4GQSZwzCt8R1U7cMcmLNFeyj9xULbgteFhMkRuyqk9PwjDa9",
  "key48": "3aDs5meXPBPpHdGVQ1JjgCv7z32AmaqZRofjNGp5Xh2Xrp72HMuehL5M3e5Z7ccSovwDrRXDDbmeQT8icSSvi4AF"
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
