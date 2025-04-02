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
    "2gMyhNhit2NEe1ymNQcXLaYLif8Yxo9MFGQ1p6s947TpGCicXqF7NcSGrnniruJFJ1oiDPkQoCEaPxq93SxTuid3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v9ziuHPYZQEYZiEvX4BbjzvCm7rpDhzEhRSjHCBvwztnEcDvLVTd8597vNi3QWuBtK7zcUVWsfWuCj8PUHd3inD",
  "key1": "GQm9jP94AgN5qKfaspBoAWvoPDA4h6Tei5wbPpsTSt9kcfT5JDrFQrwr2HzBrYgmRzNSw5Ed949dQYc4ivB15T8",
  "key2": "4czndebnsVSZnBdFxqMNwL2fkyUm9ajRGJ4fjzhvgwCMqP27h8JmGg4a1ETY1ommGNYvst65ABUnBteodYGQSopN",
  "key3": "4t59EyD4wYKijQSHBYCPnWr2Bw7gKeKn6mjF58Thg1haiYVRRQXNjawF83C55jZe6uasnrEFpEK4fqi6dN8UJu3J",
  "key4": "2FbmpfGqEsVCqFad6ryxEq6u9Am8qbEnm5VbYYnU58QpC1iFJx2z3PuQzpn1Yq1hRq5St3yUJZCgZzkpHGs9VP2E",
  "key5": "hHredMwYh8ELw4Er4GEYNVLXmLHrF4csy7TH4ZKmjmFeMBTDgnMokQw3snSDUyHb2mvb1W1ZeVPXeVPK78GzxMM",
  "key6": "2VCQjkkxYviPPYVk45nYTgEyYnr1iEEnnszjLyaoyczYHjGJ7QYoGbNLaqPATyGaiFf7J9wuPkA6XgobhZYySQSv",
  "key7": "qTuB1PbwcdnZ4qbr41o6xoHnaSrkDzETa29iik3h48knVJSrC8NAiqg467ujEYirbhPyCAJuG4ZsNNmdt72DmGc",
  "key8": "DsTCW6sMJbffUm8CRo4YRzu3P6FdHR7Rg3P6ANS3MJdSRn4nRLWfyU3PcGnXZrYh34nnqAE8o4SBUepw8PLxged",
  "key9": "fRBt1cfDcrZZyNeZtbwh52bEuRa5dAszjYAvXVEjR5KRKKBr5tMw8aSoWW7LPz1RyvsAAdzXYbFNuZqRGTyZZLp",
  "key10": "233hQPAi5KJgLdfK8hM9AV2323a6MkScLA6sgpAgb8j8NurPXJpgt7bicP7BKiemj9b8X7ysiAVadHhS7STcaVEc",
  "key11": "5ca4ZTLfT5otcjAWn8tezpS5RNeyLyVKNSsAG8eXFdf9xoyBks5tsbxm65EanABRB672spgVc72jpVRHYzzzwn2g",
  "key12": "PPyyANwk5hTSEgasccdX4ARFydV8DBNc8mqFosExjekAiwXfj8ukUByinjEGJPqPpSZxzogX2GseNMteidtomBP",
  "key13": "5z2T8MMiEugNADDkGqjuRYexsmewnwctiqJWYvJLx3VxXz9Ajd7iLrGg8eB2L5NXVVZywcsuLkp8idUQmsW6ezVD",
  "key14": "3ti9FTEGdQTWBxuu1JsNXRNdgM34U81kNvHXPd6QR6gThrPyoo5Y3PR2BDQbnh6JSzUEyDRLMidVn5x1dkXoSJ1M",
  "key15": "4ob6G2ucSYK3Z7Ju6NnEPxn4Jem5seiDHgzYpenA2RhhHR1Z4hQHRV5YSyDZr1W4rXLFpWijNswb7MxvZiLLxYQw",
  "key16": "tDcGoTf3jFa9YbtA7m8eVkAfiE3kgDeFuBkn6kezUNsKbFgLVnKS6dPbQny3ZyrCtooeFg8w9rBoAZiymM1ZBjx",
  "key17": "4sUnLsCZX7FFqJepFmHTb8xDdc7XE5JYokupvfdwncMLaQDvXN1P9RuvCJAoLt9RVnjMPZNDLTJqg15hquStiwfL",
  "key18": "3tm3TKFfyvrsPZ6bPx5uBZ4J5jv22FHSJvV5pzSSiADLe16pvEuzk4ioQPXLMheTtskazZLMqpjf8nJe46R1ADLP",
  "key19": "3gfZYFmRd1ebv38RsaMy5E4Pdp3G8vZyzfb3RZ5hUrDCJ5NAz4K3RqMcbAAyBYZZvdUdR6HDYEb33TRhTYXZU2px",
  "key20": "3iHbpcBNVE1irgn6TG3yD2vchaa3a48Mswrratqe9nftuVq97WR1fy1YGXC6jfFHeQMVaknyqPHg82FHH3eh5Ex2",
  "key21": "aPfApAoWsGNM9nZcjJMysHpa6Kdu8SExeG9DU7RMQWoPxmSLWb151AsaHEKMa6G5PNEjKHooX8VxCsEnbkqj39R",
  "key22": "7NfL4EhPdKEGNkZ6qquCBNWh6m5quw82hSqQ8EvrWYgyy9bVry39e6YNStcBLHuYFivEH7fkDkm1qjU3632xR9b",
  "key23": "2g2CnZvEDgemQ3GfbcRmJ6JRg36gYpX66Skb8C4TpbrWtVZoSwyUEjjSFSHyD9VSEDLQjxT9e3uLthAXr9AFnDqK",
  "key24": "5YobP4Gv66FRKZL41ydSQWWMYFhedjVq4K7PpixdS3c2YcM3K5M7Xz4GDjTSvktkjv5T4D422JWFGpn3AjeL194i",
  "key25": "3xRoUWbc9jbdLYBXnRWeUNUi1a7uGxWuUSMJ4eK5bgnHFZ6Sxcrdi2VxCVTay8iRF19Q2fD3si5wXZGkeBzT5mMd",
  "key26": "5QF1dbnp1UQjiaCbebTiF8a4haH2DELPFzPsL6TeKNXxc9W5HXzNV2qW4m6pQPfNZKCmksF5iJmw42jRAnCPYsxG",
  "key27": "5bEamZFxBUsJmKb6e1hLsE5ycP5ZAUwF1oUE7YwZNQ5Mfmu4y6mfK2QXExADRzpS8fj1Drvx96SpK3JBnsKk76yz",
  "key28": "5eY3wfn5EKK2SutNwuz1WMnNZhvT9ypoSNRrMC39UuDG93RTGF5JQtY3R3aq3drppcrW5oDgqdWWE7a2rvEeZkur",
  "key29": "2vhcbVdEzjiCRb3a47ZPdfeLBeDXAzyD8k5JUQ6o39rfgvinjDHagaVFm9S5CiRPqkhVwP3PsYXmmyaS2EScKhsY",
  "key30": "4wRrFoU52gyRLo3ZsdiNxGNQbUai2gHSfNxa46mJR8csTEBKychddjHtcnhW6Xg7mgH3yfiiKLUnvPg2Q5Nc8AkL",
  "key31": "fKenUWBXDQyssTbMxZ7TVPv9pdFAb8K3AnaLnc21x1Eyu3FXk44qUSpAkY35QPwNMLkQa4ZL7PyPtWZkjHDEjWu",
  "key32": "56NzcdLit2LzcBb8eeeRhQKJ8mUL4ZcujSRDDTysfcdwtcpFPzgQPqojdUwULqRoaHjufZFU4DU78Hy33NWS2xfL",
  "key33": "35vPNmvuUCos27Rmj7A6WnkNfhmLjtaCwokZYvarhcdGEyeT9TTPWojDXww9jA66uACqJ4R268AL5bq7Mn2drEbA",
  "key34": "4gmcEJDV1DxaRwZbPQriavzPtnAsBotnXahHxeQvKAPsL5mwYZYktF31rsaY5jQgWU2BWXTbh31YbTjejn26NMN3",
  "key35": "8F3DETjiEd5HGJPRBcfaACCAt1Rs3mAszdxnDS9mR9aHmiT3eAHGyHHTE7EZYTSToUEi91q8CAFKiyoNfypug5Z",
  "key36": "4R4pGaKSLaXRy6o7iHqeFG9LJDumerLhp9u2nCTBUx85Eve5W2cpCUpXgx9bqHpKQcvipbou3KXZUFXYcNMHBsAx",
  "key37": "wiABT83SX6hbwoUe4rhgbbyYgKk84XPPh4v3JnfC4VBYsp8yC3NBwTN1wFTA6PPAsUmwaGA6UkpVZwJdBMXvtwt",
  "key38": "Kz7zhZAWmhQHfBnCYZiQofXaxu92JzyYHohX17p9kMPS5MdrMipYujqjXncuiDmST1T3RQwCrhHFwhWERbRAKuH",
  "key39": "3emp5EF1MvgmZFDBtoa9kaindaJB4UVGBp2iR4ZNTceh2oVTw3DMYxcYQzGccqYx3bEgtCkkiw45UcqbR6wwa8dd",
  "key40": "dyDF6oG6MLLoxeHd8VEJzuSDrVMs7rgvq2JbC65T4NwA21rPc1dpHFDT7G77qsXgAnywouZ8pR3RsTGX36cMJye",
  "key41": "5ySiXuQ2NdAAZsayhUSyoTK7zmUZCFDyPZbNnkNc1J2wffXSYohFYxhz4jebZY3L4Ahhgtrm9H5enuWXH1TudRNc",
  "key42": "pgReYF1cAuTxNAf43MWXPPXaV4RgZpAYiyGsd4RtUwfYamYear1NMSWm6pQ1iSNiduv5nMnSR7gyW1fqrtSCYJP",
  "key43": "48DMGD4Knu7SNwaUzGpNM9qpBVuZfjt3mYeGcbVmpaVHTgh5LTcJ1ULNT5xDHJzk4W8pxVbUiSiwicpg3KiVBY4B",
  "key44": "2NV5Yx1VVTn28CQMoFqGwEtpPSD5zfHFkAAo48bwX8fHrdYba9gwZe8Yo7rKvBcYBWUav9tJCgEKihhWEdfAZ8sX",
  "key45": "2TYPTHBAU7NEPvhaX2i4qN43LeptwUxopZZQGZnkeN6ymZ3bwrbBq26K2jXQLBv7ju1gFtpNq6xZKSQHKB6WLCyh",
  "key46": "4jbtWvsRZBasoxYJ622eVzgMNH4TqqKQyBMRjDC4UjAscvdGBPUbvqfhXr7GamN16rBe74yHxw3EwgWnpistzgM2",
  "key47": "4QQhijfa8Sp7WnLzEs4DDXU7VG994yWWvF3MPhjsojQ2PtMyFzyqfs3DZRdSjMB7YfNksBAEkWQcLSvHMhB8hbst",
  "key48": "35HW1QiSR1iurreYQXoHqG7hQFSCQ4XdfeHPysruWNtTaT9oM1XZjtTsqseGA4VPr92xVpz1MU2nqVryZXLfKbuW",
  "key49": "3HLXKyXNhvqQdHrhKGTaNL4cjEYG5QfXrd149vD7MLZX1o3Z54gEdxmLMo6Cri8C79qbGASApJ556wjc3PpLCvN4"
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
