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
    "EmFS6eKwUg7FfbPwVYh6aq38mEvz8xNsz7f2d18835eCnCUgm9VRtETA2odNmbDm4SZEEAYyqiEMFAFuqfS86Xw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62MryYxJcc1Mtcy2aH9sZBS3ZVphjq7VT2iEo81SZxYmiNqyB71NMqKf9YafVvhv5fPe2WxJgMionkkTd39GqeCC",
  "key1": "5NNYzcESgXbpcaebWPispBdFTymbUmFKT2ginFaPQohit4n5WdDS6tyL6YKc24DHg56f7N5jRr4hwQT7USSnxh4m",
  "key2": "3jS9nSushsNNB8n3vPRKDNnMNbxvaMNiiASi8C2ehYFQwpezQH5ELNzMoz7h3FpTxXSFDqh1EpBs4iMVsJZ2SdjQ",
  "key3": "3vtyHqPt4j5x6mYCezKQwKqSmzcm4XYBibNqZ5jxRy9YRtXdN3LRBRGXTDvM8p7kM4jFm27bGgeG8stDNEN7k4ER",
  "key4": "3Vtp6Eygjv6ZHqubWC9LDsTtRX4eahoFsKfNkscLMxWs8N45mBkdkUpVBhqkXwbrBtp8KhLWKAfyVaw9uMn5QteD",
  "key5": "5wjpEiymsqKMg9Lub4xqUVwBGQoGEhko7GtGTpZstnf9SCKaoSbaMJ7L3gMKbkfUXatHmDFC5CucHtDGTgLoCfN4",
  "key6": "4Yk5yjNCVMgiZ4mv5EEBmdhgzqXSZAWSmi5bcVR9Nni7mLTJhXYZdMkgXv5SKR8Dg74cgyKkFvH4EVHybCxN8D36",
  "key7": "4ZnNsGiMyRuYXkgxCHKNyDXP5rzsT6boNUNdnAXBsgCe2W9yk6wCujzyp75xWdHUEmNF9gKxLosmFAnq4CcgTBXD",
  "key8": "3w1Q6qTqfh3nHbqjUG6hJCHVMHZxUsk7pB2MW5Lu5K1m38DwacZgKZnphn7g1s3SiVZ2kmnLqxMZZbe7ZZZmxHa3",
  "key9": "3jaw1VW8qPSjuWG3CwDagRAMbLQ6skd8QPD84AEgSGpWnWhsffyDaEQoBeo1H379n1fVeDeZGVch81EJcnvKrhM6",
  "key10": "34ngQPSTxc4o1oaFqu48FuffDqhceXL4FEqRHQXJpgEMTs48iabyL7dXHaES8K7BcxgYQBXSHCoFoqgBCXtqnDD2",
  "key11": "zZDjmB8qx6rrZaZCz1zuxopuunwWMnfw7o3RM77wy5CfLXusfVbUK8AxwdW3bUfJgpY7oUZmLqnzXKophJh9hiy",
  "key12": "56BVb9uKptruUDUmb7mZtpW1xHzTbistNwGZLAG7apnEcvqKUWAGiEjBYmqJiLdM21RB2mS18PH538NLa3TgBbVD",
  "key13": "hZgW93sTQmTGbcYVfBjNL9L4iHDQKAvCALenf6r9foniUQem8kGD3vcPbPWNJ5UUYSJfq7RMJAyQH88wdnW9q75",
  "key14": "5JwqMkWKa6oZzn24ukZuJ1EY5ECB1fF9vht6dSKPHfi5V9A9qVo9DFNc29Xg1MCBiVKAdTyZ8SB2tdceeaTJdfJS",
  "key15": "3CqoBn21gsp2Wz3oWX5aAQotDstmMWMbbzBF1S5wqBhyYC4cERMKy7F4m7Ub3uaqjeJkAb11Jos1P6xagVe94Myj",
  "key16": "5U8y6DL61twVSFFZeTnGNvCxDUU7m2DZFbriByuRvvGATkvSVzNRMceAicRMgjJuhSCbwaWRjGcJbHBSJeL8h1aK",
  "key17": "3rw1XyPYnNVbe9KTfeXRNRbh8xreZcJ7ykjAEdXnB41tKHjB9tnb6fw8jEns767T85HcnZHHW5f1GUfb9zWS4hz5",
  "key18": "jdzxG7pi5aqnsWwy7M1HtkHnqB7RM3UDB5h4av4zdehah5fbH1raBi3VKhNfUSp635xxwCHsYPfeq9Dh1m4FkRZ",
  "key19": "4f5pw39K5yrEE8sFcyj9ybFKG8KymHQuF2BvMNmDsJBRHvLWh4HUNHm4TCzSu8VHqmUPocaz7MbifV8wLE7yaqTd",
  "key20": "5S4FQQdyqXB35Lzm71aKP7oyHeJqQp819aiqxNLiUxwvgSCmXm5kCfA4kkkwz73mcx4AjAkPH6EmE1VCQoV3zpTa",
  "key21": "2UNECkHGQzsQw1U4rDHRsFz1u3DcPZk5X68j8w3apqh7D45vCK6pxPzmX9anc1FzBBsVMcro7kW5xYpA9et7B4XT",
  "key22": "bLN1C3Wj2DXRdUQqRN5mk99VQAbais37tWpuzZdY8ZVReFKxNY4BbRmMhCnpoL6gfbRpS8ywzS9FkMpgK5CxWjk",
  "key23": "61t7BA7PyfjSCoPcYJG1jwxmX5HsATbBNZ6NL9f36CcjxuYvwJh9ZMM2vih3YnySQk68ze6wUEYZfLLySSpsGxSM",
  "key24": "26QQmd6SeYjUBYBb3S9gg8719sDufs8mYnGb5qvVLMyiEvKG6XQyrCapgUDfcu8ET4ynxRVoyz4oYhm2bEyaw4kZ",
  "key25": "54zzp6p5zMkWHoEMoSwYyNwSB7bwmUt68yYfhPjztpVSfSxe2iQsW17ZRtiR4PLFr6BtdCRu7BGeH8WybMcavUC1",
  "key26": "HHdkruXLP7845pHciPiBiE5bR3jgAWpRm3XcPnYmJQ3KpmvkAemh7DBDN5zu1mtVnNLphqmq7dhTwn8NBTShuru",
  "key27": "fDVUf4cjcwzuWQ8tj6kPuaXrRKAcWHP8SiprTJ3d94tTcE12q3iP9yuTF9m8sTU4pUxy1p7CyMqr5yPShnD97iW",
  "key28": "rNuHqn46Xqb89J4AzFGW15xFMpaFbYG7mJ8RzGWxVVg3ng1JbVXRBFJuux2dJc3rzCBFzkJQpD4cSjdkrGmD6fC",
  "key29": "4NYbYPKWCAtPjh6K82HoGPfU3K7vZsrPV78FP2PheJ67mGxYaSwyjrT7cmmz7hmGu8Mf3ywqvEjd9pTxapxCkKPp",
  "key30": "2h2Amore6JebdqxQjoCkGcdED8FhwDD6tXXuFJRgVKDhMvpxKiZqYChDo515hTZjoz9YpFV6MakYqM8wm6vnUw8b",
  "key31": "2kyZFoASDLoG3oiQkkeHknCu5VAErbYU8zd4u9BURb65KZiePxWDxZSFhcuKKDzqkTbeBdBps81yctdfTBPxuWRF",
  "key32": "5zme6UTvgtPVCECFWoUdsMtkjeMsGCvx16Yq8TixV99yyKPvvdecSWgY5CRXCD5MLfufbLJqsEZ6YoXsz7WaNPwk",
  "key33": "22cubmMGJqBugUM2pY7m5RCYuPFquHKPUPeq8KGVyxvBcHoXf7vwGktU4xz4hCJeXGxYfN4diMvVu7Dc4DocRgwq",
  "key34": "2GvnbG54dTJQvrKNnQU9iaKotY3ga6th1jPBmJVF7dAJemrFpEZjTnJYFhyjBrDqUdgXKcbwpuZahwP6ymT2CHrq",
  "key35": "aNNLwqrrXn2JvckeENiP3vW6mmYAQeE88o8yY8tqAdLxns1kYURX9kDfZBQuRivB4Msu11yhDYM8SoPHgXXNtdR",
  "key36": "2J9GmUJgJ93nFcKEFTQkkvYUoWUJXbdHEp5cGawPSfaXWuVow4zagBtM5LTg3ioScyG5XmgegesHerbmmrKvVt2b",
  "key37": "2XvubsUtkyxexkr98HHTsx25wzZjhB4Gxxop8QKaWdo34fFY2QfCqwUBQMm2QPPvWJRbxBm9b3CX3oHHLqCXTSTg",
  "key38": "2DGubpYoYS7wbQTUxcBhp3noEYj6ihMBE7rsf3iYxbcVTRfbTe2gjpVkDxgqK5zgEr3WpvUJDsg619gNv2DFSq7S",
  "key39": "S1fUZjhAmPBPZdXQ61wCq4Kykr268CgxSTyGWwLT78uLe7Ssijq9egy71qYy3hnmhhrKYWjE83tjFnYB82iqrBg",
  "key40": "2HZKcftdjuQS4F5tsLvjF8ewnuMo8KYe1jgz4oTPpuQ3DKXaSEYArKdmzn9hc5AaXvAPHditihDKp6EL4v4ruH4c",
  "key41": "2tU31XfUwvUcQHkjNv2HBDQ74aNghJrrTNF9aCX3gTAe98UrvESfL4zghsGSHCmrNKHvX2EmC83X5PvuvpPFeLjP",
  "key42": "2TPeH94jw7upnsFbNovMK6R2DC5oYcSH7u8zAhrAPHekcU9taNfRC8hsD5YvReknzdwJcJPy8MvmyJSDK3BvmLT4",
  "key43": "4D5HWTEnyGEpXWfFdHQn25vaiBC8aM9XVkpySSpZtQZLSNHGYVoPLQrhd6vybgY5cW9V1ZhVH6CrSjMuY1fNGQPj",
  "key44": "3tyd8Uh6NGSV1wNTcbiF9XLijPqeJV9WEMnEfaUpCS4WVuL9hTMwjtpCU8bDp1KqZi9wmMzw37ndF23eaTXniTN7",
  "key45": "4Wd3cb79VfMypJPi5Wvo7wdCVq8MaLfdBcnLKiHMByXD9f4yCKosyjuceWzgwwZUCBAxvUFDLjJrLWXpkae8GGgR",
  "key46": "4Xszsb4DsEyHH4sdkNrE3UBw7C37oxmoc7GMSz8JEzzzECaJCe9n7zAg9v9K9R31D3PvVPoZsYFkoeKC9ERj3Msi"
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
