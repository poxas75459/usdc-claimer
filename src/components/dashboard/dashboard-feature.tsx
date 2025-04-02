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
    "3AywvqQDkerpk2exH8fVDMD7Vnn7AKstr73iRoK8wcUk3mpjykwDxHVb6UPj33K7zY9bP1bRisdfaxhEkyg1gpBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NT6pxFdTnauiKSEdoSa8yX7VibCcDD1xcjJdCva6sfVDyw9484Hqh98s1xLS9szEQySZUeuHvSk1gyXL94z2yNc",
  "key1": "5ov6zj6eegbC4VrsBSv9tugbuyyf18UKr1YeQCTu86p4Jo2ogoKSWXw4HcpFfxhWoRVi5EeE9awDP2wQfzKg2iXw",
  "key2": "4WLUhFf3eTwo5bLj3zKQBvqGL8gSFwUwBHx4xNgoWBFu3cFStuaiWzPXRgcuYFDk8bY4B5UEcNmwZC8THnYz3MNk",
  "key3": "WssXMoXxfMrHJhUzBuyzYGUj7T2NcRtC4u6XBNs3AzJPuKt3M4cPAJg1dHGZ5j6rhvp5RAXzSKjRfMLcL7BvEzM",
  "key4": "ChvT3bTXVgsCUGDVkVFfgNNPMrRiwcH4ag6VadfU6pps3QddnXTbKRoz8LBSti3DgYmrghfioyBipoabMbtF37Z",
  "key5": "4TYYMhivSavEX3XRjJBuVHTbBUZVD2zCuaYt3sPvw9pVdfBx6hfaMXbjv4LYWZqqmAcJ2QePF9q399ysw711Bp1L",
  "key6": "3QL3LunusWtz6W1ALXgFSHVMrPwFQBKY9rL35K7a1DGZSPd1kYvMkasbkRbVy8KnhspgXFi7tM6xsADkj5t995ic",
  "key7": "21kkcnXHssYvVi8uduVp4JgyPJMyZBhpkbtWB5gxkuyhXxHg6rNmDRepdPPcomUSfMuPJgjPrHuJXtG9ywwWogzq",
  "key8": "3ccpKENuvDJrAexFRNHx8p5rWLQ3gFGwqbyGdbtf5awoLk8LUjiY1x1NG6NEWwzqmtmyvbLMzm2K66cH6Z5uV1bH",
  "key9": "5TubEBFCD9nb6QKd32LmpHfofhgLJV3XhQa5M4ZS2ckVzSVxjALJBRruxMQ8RGCK9xfQctQC27XUmdY9YXGXNFRL",
  "key10": "4oB7oecaTk7XeWTiFgqWHsuQEfgWoeS3paSf5D8oqovCLCQ4TLkXmETH2sdCuBoxkC2GvV73B4eaV12Uo98rcGnG",
  "key11": "61pz63KJbGbLwwzPj6Mkv4m4HNpxQZanoXAqwjd1FbweUwX6YuMpFZsubgRy46MZMywMGBvCDhkbFCSBd8xmJgDp",
  "key12": "2SRHqefxoD2yya2WdDUBcJr45QMkJzmoZx39b93E2j8wp4mGftD1ZQ4F5inVWFvfwsTdPFhWHj4Haf6LUNnYVva3",
  "key13": "3sherb53CcJgbjgtVH2sHmXGrTkPrhdQJVDmK9FShUjWmVG5kv3wxSDga9poCoxxtt4XeRkqgQ7ArTRwYCm441Xk",
  "key14": "3Suyu3voKwugB4jAua5ey2kZbM3SNJa1jCxZbCd8nBLZvgtHL636SMBgwZ1LfV2pV9EUkuWxWW9hjKnkxsHWu9yH",
  "key15": "35AXdpJw5ReTzF6hiFgs3b7grqiQfFVriFtkCZR7aAUHNbuVUQBeJWUGi7xZrJLrhkVdhxbYDGuFx69SHbydZ5e2",
  "key16": "sgJoUunFM3W5hgGGcN9e2MaHUp39Xf3aDLQAJ6tRkPFDVYiL2J991PVzBpwsT3m873Er4nj6YUmyGSA8MVdV767",
  "key17": "3E75paWojA9aPvUo56C7CJDYTov8riJjmn3GpkzyEwaJVeCS9pNxSVrEGbrgw1Y48qENpxiu83kxpzQpN9AbTAuq",
  "key18": "dJsMe8LhV2XPcpNZmUTBVzivxWMwKNcVgQ6SBoB2gM4d9G2XzLtadpfH7dL64yTq2VAAiNF87J6i5YWbR42iDt9",
  "key19": "4regBRtT5ETqoAQPeDXPwJGrw2bJZwtZ1dutnmimen41YAsT3J77xr5SjejYVdSGkVThPFHz9CbUGubfwQ7snnTM",
  "key20": "2ByeyMehZxLHoMWWo8aKbgTVWQV52rjTM4bcqN67Pwo9X7dWnVWtBLtUhXem1qWsWaVwBgRoM8MbdG7jz63PGcLG",
  "key21": "Pboa9y5gdxqntVAr5oNy8mCL3TUDWYXxrTe78GCHVxjF5Wdj5EEdk3j7vF7A1ykXeCBEorFXgqtZ3CmXUP7oTsZ",
  "key22": "dCaBbYR3USbpeZCUuFSaWxjKJ7ZJPBKCqPnHcs9pRKFuSPdf9fTCGBVtGVZnMz3BECfKpAHRVQ3M53Yyh4nuUki",
  "key23": "5bfGWbtgxFGRQH94W1JYHVRxB6snxWaaygJvYXHDhEw6dQneLSSKmhrbvQK98Yec2kXx3BA18HGUFpsV1dw1R5Jz",
  "key24": "qiBRa6tKbTVxuTdeaLWLcbyKr9ApWmFgqAhwFGB8rKjbCgsA5arKiDJBWfEoQHKfitWS9QNp36DLtwaW86ekTqa",
  "key25": "p6JDkp8SSHHW4BjiDpSCrJUtSo9FqzdKXoUk1bWDeHfHdXNKovEC6dWbCQA9nhpZ693o4R7JR5Pjf48pnn5ey5j",
  "key26": "4SzvEjZFwh3eQ9o65mAtA3yJvHqWw7Xpd2aMpJD63KfCsL7RsmokW5hNWpDkNg1hNpNR61jGrE4FRurZYqmV1wV6",
  "key27": "2HiEo7bKpk7R1Q1yfvsw1dJP6SKXrWcKX577qVW7esLBa88R3YABkfv6EirgxEvjBEUbgrY65vHWetuy33LxHNXL",
  "key28": "DxiUmPEUyW9aKxtt37ksokz9t4mSFFLVbmA1AZWFAjo8U9cDUuTRYqE8WvCAQ8tRk91QJqpm3bmcmdBv1nbmR48",
  "key29": "5fzXUhCxMQjmUhs5KBp1GJG62A4mpJQaXeRy56ZwF5hHDTKewfwBAhvW59jsje626Sdpu5DKjxwMHtGQ6S675KFD",
  "key30": "5kNZgTAXj5hwMt2kScgueaqjykJAwT4F16k3kzx3whFz6oDcQ92PQFQpcC7mPxi11kzunxZZCJZ3Ktoyr3TWA3SX",
  "key31": "HeUDrS6ezzPtYHgcAmxGKvj3xMVac1Fv1BUt84FTaxBpYSrcxqkAuYDFKALbLRpnbcnEF5HDuR6Drj7r82dnz9t",
  "key32": "KxqWx5sCPjLxgau5txpSbTbeFzT6r9xaiJk1Foz3UEXBrxeFnJi7yBp9tmwhRqfZQyQCwzxUynG4cWCwGi9syBD",
  "key33": "2QrGTBbCFvyYzgL8QFVNrpyJozKBJgGN2qiU4C7LCopPDjwTZqpjwSbXmJon1M6qM1MXkLtLphgDsfp6XbQXcZUv",
  "key34": "7K1JLxpkkEdrrwU6Gums1pwdTkmgcvXWAFFr49isR8TjDbEdLFj9ZGGUvNi6B1MLVBCRMFxmztYfkxCxmqHCnuN",
  "key35": "36cnHs5eiBUk88ag8CXoA3xVPTR5GVEveHGntZRQ47ynouarLqV2Eusvz1qW3HcwtuPT1gdveXmkv6egMLPydPX9"
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
