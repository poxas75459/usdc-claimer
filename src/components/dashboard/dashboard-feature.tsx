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
    "P7GAoTPYs91TR8iGLJzCGGwFGg6g31qphCfMBFWc2yeJygBKYacbc7cTtNBkwL5C1HCHd7os5j6ruQv6qnxCyL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FgwGakowfdmxCqfeWjU26gBDNzBTHP3J5aWhmAUBksibiZZY7sHXWQz7p6TjurMdyvzEZUiPMRS5HiDt9axumUj",
  "key1": "Wxzb4KSDrfFNy6HJoyCHU8pf2QmmBVde6eQrxuFfegfb91HuQVfx1J8CpD4HKn6brXgZVponi3Wx2DEsPacpfLG",
  "key2": "5NfVEQjeMZwFhSoG6pEwCXuLReyCcyJEpZfMXon1jRNSzayFdjtXFAYgSXzyGshBTECvugyEXBzXPs3bfJifZpG",
  "key3": "5EtzPaLba2M6vKRKxxp94mE7dEX8ArS3YJe4nTtgfWTwo3svJJXKQZYuH1uxRkUSULVuDa1EJoFbk1k8LDi2aJa2",
  "key4": "5ptmSdzauuVXKgZG4BSfaM8yubDCWsqBCZbHJ796jfeCFPdFvnvp6StKBTK2Yttcxi9CToAUijPKYvBfGbsUwfCi",
  "key5": "BpPE9kcX5VECaJLyezZP1jSmq2QkqbYWJq1YvDQqtJ8iRLtPh5Kr56tHvtCjfFdoD2ERRiWyXqfaGMrWy3YiUkm",
  "key6": "3yVZ2BDxd5MGPazwv6cDAcDQMX2QHUJQi1qi12UgewcgJHseY1LGo8iWjVYr5QMqEcQe3dh9Qt4cTNUZn88EiVkH",
  "key7": "44b17nqML4MVKkWBmvRvTa2pcWLLaJMg1DWQ2yBnfsY7KSxgwURL33YvVtgCgD7s12KxwvoXjbuoifbtSjLzwmm",
  "key8": "4CjXS7WdK5isyHnVmoxw62Un9cMSqwSQLmSoxyyPQWxdsBtvaREHfJXLfoX1LZphtJmb6MK6t7GHo9DAcRTqaDEF",
  "key9": "WiD9kRh33h9emW76eNEiJTNgeComMfBxrMD8dQSCBRGBzyn3Q9zPEcznVVARm5RsjfLw7bxGf1YrxS7mFTwegMM",
  "key10": "3C4yACGgyty2rPVRsxefrQKk1wBXL53t45A7SwgkLgSNjG2vkn9Cu5SZxb18eyzCEFDqvCjAMD23mUSv1UnPpqkm",
  "key11": "2LsevyJmTEQDDRm4GmuSzwosfrrsMBWFrrUrArFTrUpMzv6M3VpPqKCJaBzAavbvTM142ZRuU6UbpJaXMSowoHfk",
  "key12": "eAKGd57sUTB14KSTYUu1hvVEQ2xsyathFArmh28ZgfPHrJQfFRiaufwXCUtyoPcXFt3z1jdcAVnSmjDfTZnegWF",
  "key13": "5xji8cAsJsUHVV96LNaxj58oM6ebwMWdh44PjEX8yjcsXQ2hZnhg9ymhAMGHziwKEJqR1Enw3b4dcukBKgwmtk1g",
  "key14": "2KaBy3gBfsPU2wkf39ZXGtPGFq4wKsd3Cb2gxk9AAxZzpnds8J4rN6RjSnT6nQHEpefRDzxazQrvj6JnsM5sJ32a",
  "key15": "2bVSX6DyrUyjDvCi6UTaoEFVKLiRDLUWVpjpxodDksRLQTtSMsvEtvNrZDYaL7QGLXio6LQSMY46poXqWb6H38w4",
  "key16": "2ZiFnmxNAoanFNHiQZHN6Pu4279ND7sfPPi7kzD3rUytXBytBRNKJkjcvdc8x2cob1XHtgEpssDfpKwD2wXSxYBR",
  "key17": "4qDKXaqGqRAmthRYfRsp3qcwWnzmEuaSGW928GMTzHr6YHa2ARZ2bTsF6MJUG2U9zj2PNrQNPGRYMsKubLTC4cZs",
  "key18": "k4bJFKrgKpgzx4kXxr3qFzh4K1W11WpyJRryp1yeXwwW2tJFzi6AKZthgC2HimE6dYomzJBGAagFmy2qS3YuoeW",
  "key19": "4SLKmF6VTXqFE8JaGFQRsXM8x69QjirTP4MdKSmUQEnoCPdispgX75jDRGaLPtc5GHqUYr7HXyMEfUxTpg8VL7ge",
  "key20": "296cBvgwJyXGrrL1FD3BT7du5q2jTTY1t2kY9TNveJghdyEkUT5WRyYREFuJp2894U8uTuaV3RvdGMrArANwJyHG",
  "key21": "4XjZQ1e4MqyWAz8iL1jf2csPieK8dZJXAiUaJroXkwiGMqbyG6zCt23dU38sb3mSYmRVrFQLb2KasqvSkZVV96zJ",
  "key22": "5bwMDrnGV1dE86hPMRbxkz8vofwEMxba5sh7cwV56Ew6NkzwLozwNLipRcMYrnf4g4dG4DJMKCKQUt9FLwuoJGSn",
  "key23": "3exaT8SjvhZdZkAmt2Lsn3AP3HLh6Krkzktuyh7bLMsRrHnp4WxumZnJstqWrMbY6Sy5rVPUmJ2NZEahrfkJwzLz",
  "key24": "5q3eXFXEoGe62QYNneWdKd1Ukt5iCDB1RtzhD62mwXewohWYAhwpCjrRBbcybAH5ajz9Ph7h2EEb3MqgEGV37cCT",
  "key25": "4RazgfEFkhA3jumgmwm9n46kuDnFvo2B2Xw9vTzvyhCcFnLRWrfUdcPZ6YW8BWCW59VBT6pMBWr8AMH43JuJ8EDD",
  "key26": "2EZCFQxKRtdDiQjzWgGxMTe7zq1v1rFKTkgc8MAuANL4tAEoXcpnyxuDHLvmwzBZPmH5AgMPHTojL85s4vEfiypW",
  "key27": "24gyxhWiFYPd7QPcyjcUGfHPSfGu5tAQCgh6RCTpJPXDMjk81NjVvN89gCvXAwhQSv7rZWaTBmGme4BQHjLFUqvu",
  "key28": "46T2T31xcLjCSQvKkh1r9opqLgcC7qzGQuDXXcZdLViJZCGMrUs3wdGNVCa4xd5PE4XF2H8nKUXNdkVDBzSGT2ZX",
  "key29": "4hwDMe7ZWFv9hwmuBB2SwSfxm72es316roGpQU4NmWUFQ2j3LRdUcaCEjxBckFfiPFjeThEHieFxx2j16YqixUsY",
  "key30": "2BHak2EWiZGfxXZZ1DFwoNdytxjrCnYoLmJm8AZTwBmiVyiDrt7YBPt97XiTL1Cqxz91vCs9RcaZY5zF1Xgf6GDo",
  "key31": "3L2Hk9GjwxowfqoQNrGYo4dShbr2nseq4G8AgagKzn2iCH3g5EqTDquJPyRRNh1rrGtEAggDZmhBzaftf8qhWpsb",
  "key32": "2iMLAnLqLHTBK7ue41CsBm7pvDZ3dgzH59Q3K25uL2Azk6A7HWz9MHR5THXEXYz42FeefojyM55gDRK87mGyChhq",
  "key33": "4G66FjKSF5nR2aY8A69h4AABrgGZUxrqQneF8mRmcpdSzi9BKTUWBSYj5FD9aDc28hwtPVgL7tHscpYhsiLXahLH"
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
