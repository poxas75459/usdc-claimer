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
    "41jyw1MTUmLA7MW1uWujUNqntxavH1Pgr2sb8iGbTgC6i9HfpqAEJzgNGTnv2XYUMzu3ezQRmzoQuK1ist6evGfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rJmKfdHJhUGR8WXWPBXy31qyugYSDCjMXtv3TdLvKL31cFvcgWGcuD9zHf4srpSoTtUJ7SBSgFnGqVuo3KgaXmy",
  "key1": "4J9yXY1htt4qDTTpRSfu6FCcdZvhDW42Gd5pSsfZ4j83hPq1sP61YbmjYHHoQ5JrrGrAv5qFfUJeazFEhin43siv",
  "key2": "3wA9Po3pdH4yZibTJWJZh3P78En19uBVqzJMTJn1E3tDH4VWnVpcquXJ1AsWD7i9Vo9D27aQuEmXTPQpQd51WPaD",
  "key3": "v1zuaW6ZkekfajsJjQDU5Qt61FzzgC9Nuf7kTSyZrQEzsXouxENsuoGnj23oAjbPudM86RsUReqdmxUCR5NSXRw",
  "key4": "36ANEMYiZAyjBX4UitwJjU8bP63UE2hHjiSGfjEd5xdGDQRNupWTAk3zS3KFVMyU8qgiWhKAGEuTwLXVtEGxzFEe",
  "key5": "4u8Yybn6qsf2agQa5JDNmZZNZfWZX3jC3tjB6oEoX53tAhhqwbWKzapajSUhzaWr7u6Wvjzk7TL1eqBf3VQ2o3Lk",
  "key6": "3yqZWW7yL4uAwtoZSpwag6NPspsLtQwvNDHheT82yPhmZpLwKwVeKZAC578UC29KdFcgFFD97QNyYgbmQrkafhzB",
  "key7": "8KekaKjYDPKPAYvXCRnJYhoLPEGosB6aVzSbtsMNN4KL8ZK2ZbrkpoNKn9WJBiEm8wHuDzKJSt2hL4JrQQ8RMZQ",
  "key8": "5icvohbqm2ZvkfGgH4YNgiFMALeYVZJL694Mq2oaAYYYQBTZFzBNn1dCy5DwcsEssbX45FhBxjnawZY9XM4qnqe6",
  "key9": "buR6zMgm7iEYT2AVJKgsF3TdXRArJUREZqLFuKzZwVrXh5v11YNuG7JnGfQRCNYfN9KAHvae7c1UXAZYKPfpeDV",
  "key10": "3pQT6urpRzYooxmaZ2ggUJAdxCjbTEnJq7TTFY9hQrsAKkdaaA8kr67SsZiff4FMJ5UpGHj31sA6h1h38JS8ycJZ",
  "key11": "26YkBYV82bEkQxbkDAccbMkZseQaEFzgtQbzg3eyDk9AWns3ZCcB8t4FuT7fwLVZxvHrE57JW4xGic7WEPWfYDzp",
  "key12": "3qGYH7hVHct4vtd9WAPNDU8QCZdyYknpEW5Kom6HPDbvEkmnrtH8WKqhCkRN2qb8ZRr3RQ6QVHFgeZPPhSZYoKij",
  "key13": "5ezHtkGSA28YPWZX9NiQMS7bcrorvy5ps17MYnsToBUvGJG1wre89KZ2bFsFxRfRgyfawnQuGFh7wXgNkS4UcRFQ",
  "key14": "4KWSKFoDn4wVsTUdSkb7MT2s35ujJFTUFPj72s87LZPHZEFAvKrMDRAdUNKALsKKrtSDG964wRdaLmn9xmYAv4qE",
  "key15": "5A2Rm1aYC7UPjUQcNr6DM4XqNxU4Yfmom2ytR71QFAfigqQNQztaXZGuqCgBXAXP1gGzBpD2KBFDqA8ZpnHUhR14",
  "key16": "3Ke7hQZBhrtGymrxyQPSp4PADKcYEc3gYZ21zj7RPrfkvdFsvFo2RT4wTKXs6ia1QGbPb8omgnBshDLoRCAD48py",
  "key17": "4FZRYTAUEWvhMXVhXPrdE8no2Uz9iYwybhiMAm4bckuwdFtJiVcnfjnWUhV2c3nqijGjWskhUbw4d4BgxKnn9Cbj",
  "key18": "4dfWCYfh7x4KVJzVb7eK7K4LiAKQEFsyfzsyne9JC2K8BcBzKPjsBFy2dUYMzvwoCsQevWk9Eh7b8wQ694cuG4PY",
  "key19": "3wrVeSJ4vdgNs5SM1z29cmFCXBE6vks8ZWXJ6JewfunkvrNsptJgmD568cq2zCmGe8M7Lp7wsRgR8Be2dswnCCw6",
  "key20": "41GL3u2N9pBPZX5UHPwK4zryWMN2VX9WUcmP2nkqYURr2HNbPrcVFsZqk9qpVWdqM8j4KxVRWT2EXngZSKfaUaAn",
  "key21": "5bp8t3tQiNxcUCYkxhHeekvvkXf6wYs3NrCZUbnBRe8HtCGA7y4Y8QAsDsYgwiM1y3qCzhT9AUqU8MxRUzJFcMsN",
  "key22": "KBFwsEg9z81vmHG2iKfRGNGkxRPsjU5SRY1736PvrxxukeLTUr6rxokhgFRN6VQm9vsVJLfPnHzQcX1kjX94mwv",
  "key23": "56psSFNtp4Zdy8ZSwi76v7E7ai8ixW3PumsfERwqzbbbHsWSVUSDVSoKcSXuouwDdzcAdmXXkkvZnWX7o8E3Yrca",
  "key24": "4LCyJu4y8zJUtwhZQSUYpoxLZfGk2pmWBZ51LXoi5ZBogksDDMbaMFWswGGbknd76CtAUHeoLbE7DndSphQvk7h",
  "key25": "26LnGTC8YurXqXMMEzBBeWKVgu3rvqQ9wbh4Zis3X5rJzetvoHNvvRKNsHeVbeTqopMxXvNv5tayMTYG9pLi3oGk",
  "key26": "5irqUU4PU3LjSEo22xu2HuPX56x9SSmPR89wjmDSdmyCYPxJUfu3pGxRsHEZhZgR5bcyxKV155JDjm1hfSLmVU9g",
  "key27": "67YwyojDBzqqNwaeQgSBAWdi8TpqDwNbPkGUgQsMdL1NNU9LourTr9bAdmq9cqj2XEENxHKSWvRAWnJ1ZZMwha48",
  "key28": "Av4xkNDUcE6vooSR6iqs9dhESmJFjmDpzcD8sKjFTTjFEfy3wfkVHs8uvxGR3eJ6RQNfvCbvh4gLF5ZBoWbccD8",
  "key29": "4U4SoR8EUz6jxxjFLHVBXUXabWzAwuT1dvtwD5quVa21GoWPCJU9AnZbstvxZnU9Uer9B65ApSzf5cSWX55Pm4iS",
  "key30": "4e4L8te5dXg43rQScohhnvincWsaeZ6CbFmKrdugb2h9q8bp3PXkfRqBfahdr1gR32Bu4DWANKaak4R3P3H1eJVF",
  "key31": "42SXrUaf5rEsBAP1tHdHMEbdRWB2WSf52DqE5JsAUa8o6CWdezyvLKwViBkhW3YDPNs2kf88vWUZe6BLqAuREHiS",
  "key32": "5HF4GX3CTdYmyfp77q2HkDeksi8ZXaNYFUQL37a1wf52r6GF8BDkaonbrRp5SE33cJ8KBsJb4CkZFU8Xr2y8w8CP",
  "key33": "26eqUhoSRxzzqj9DnmM54rab9gPqFdkASxF5KSmG3ErKcY9KHT9rxbQ1ooZoMeWAyHa9zsXzgGc6zyGBrYV7L4Lf",
  "key34": "3KZqdwg1ptA8VHsfo5DwdjFFye4eKTd98oR9Gw88cnx173ztRMXWc8Dyjo6bA4xwnscCapTYToD1T1tSzUCoTDwt",
  "key35": "UmVMEDDzBira8xwpnXDYAM9mzufdbWFZsi3H4TMHT4vP9B3FJtAHNRjZgNmNhMoeKVsNvSpYiRiTUMPGDuEwERe",
  "key36": "4SRbHdH1UZBiqZ5jUUoH1BJNSHCnAH6kBMDfgYkpmc6eu3RmBe6DPTAt68L2dvzNDBhzCqGhfCXQPE6Qrjg7gnor",
  "key37": "mhvugSDewVME3sPPMfzRqAuwowP9Z9VbrvifjueeN1GiTbSY6KYKvHt48rb89b7X1MtjEbrRCCfNa5eJG6ow9cA",
  "key38": "4nMPpWCTDR3CX2mrK8tE7fcE94TNoWr8xYN8NSveCYE45LgcK3xCwAVvEU3jXAn88shDEidwDHRw5ZxbYzL2k6qB",
  "key39": "5mvr7Jvgn8oKpAjVqk8NdccX1YLUiFWKMrjsoSCUaL4uJotz37wVo3ZqoQ3TPFuvrPCBn4dwVaQwDArdpEdrwc7z",
  "key40": "5FijzLj4gpCugM1MHoNACTJWpjD91yNGSQJFkE2Y8neYN2mhXysFEyidT8HH41TA4eiBni2z7ZoLZcRdr9c3NSYQ",
  "key41": "4ivk3xyz55r1mAga77q5RbKQ7DML3LiyqGc4xjWN6M9mkxBy4eSLVSVKgJ6bURLRLwwKqXmPwbuVtZ854Mxz1537",
  "key42": "5qTWFBxP8WNJjjSiX7UZwkYDxF2CEyKgv5TJgBnyTxFXbfrDAkdaRcrRYpBBJ4u7KnqFoXfobbV5GE8eEDT4253S",
  "key43": "2u9bUcnFJTKLGEZqMCCXuFiCdX6RBNe32szC3ZSSc28r7jjqxVhsZLyP1G7HDSAxc4vuK5BrG5TpanP6s8WtCirF",
  "key44": "3XRjHSNHL4XxZ7JkShojV9f5hL8V7Sioy2Da5kB15u1Ymi3qteST5w4PaqwiDx8iCocjL4yNdU3SyUdnKcYhk8Wx",
  "key45": "1VLFaipmU8qnqEgVx8ASTChVC1h4yrn1SeTCS8Uc47cSE7Xhtq3mNVVDcBHmFuQm87UNtM9LPYQYLxT5ThHJwMG",
  "key46": "5xzmYmYgZ9tLcwXStn57AhBt74NKWXNXtAYT21xFFP6rYZEggD34CGKdbATAHMQ4GvM2qDD92eYhGFP42qWpMtMo",
  "key47": "2PkCiWRhdLqYGiKBmgC2ibfe7LdS9sQnshP1zzmCWgNZezP82xXsy18Bnm1ssd31FaX3qzhLkwrEMPGFzuFrXmYn"
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
