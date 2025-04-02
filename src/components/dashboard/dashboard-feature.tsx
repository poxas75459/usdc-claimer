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
    "3BV3kQQPSsxCRFcCbRqxik53T838e2mQF5yksVFhDuSdsRqtzGb4D7dqYou7mW8JCkiMQBTXrLwKFBJGFfRGwcHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FL6UrQgPyXyHiVNyTVKRiqa7YTTnFwreL6jbYA8VRV3LGze12viPcQAWL3UCBtLqA764nVDtMzpaHZw9huVus35",
  "key1": "5PtaudNVNap5YCLY1QH6v6wQSMssGR4AwQ3PPygeUQ7u37euATCPDRWSUDMeUnC1oi9rw9omu1Rxmg9YMaJfrC7b",
  "key2": "3mqGdjqP6hGqEJCQfZBQQssB8MQMf5CBoWv7aoTioWJNiaESxNZ4cksk6QmeAUHGvQnajgdM5r5SgttTGK3JvC8d",
  "key3": "3p8jwKBZdc6NroD3XCxZnrdRAuegeJXGxLCjmRoSd7HqJWDzSfexVfU2DsXPGTghBWS5Pp848GCWMfaGq7Fpq21m",
  "key4": "2MS3GHpF8PtfmTYayDa9oQX5KP6mQGqGh2JpPU1uYcNTib2peAHdsKqaYPV5DdAycohF3GoEUrnuweNcfsacXfwL",
  "key5": "5BEThsjpZiJ2uT358gFAsNFYDzkhwTq3UQEfY2emhksyRv4xumYppc3W8dzcSftzA9NKMf4tcHaGK71tEznuBnyu",
  "key6": "2BmQAEKb6MoWJpe8PsVUhQSGwmpWqz4tag692UC3AgivdGubAxMFbHHXb4QA54iARWuK8voXGkPrp9BH9EEmdnYj",
  "key7": "4SVGK6qb7gP2N6s9iMy5jvb5wX4SKWJvd19zuWgWaX5P3jFU7mpDt2iGotK6bRwH9t61fhgPG6goP2PkcPX7Y3Lr",
  "key8": "2C2DJYxonW1igSD6W7eFDWMSkEeaaFAv3RRWshvvz28iW47o8JYzfgVQTNbYnspLnqJCpNXSpX8aiaQDpdyisRG6",
  "key9": "5CUTNWxByVgCw1Tfj7BZfV3mSGgsniG7FpZPWsPD74LUHRvBRnxR8U6r9s6NKn1njR2j7E1SgaC4iYcFTHZg4JiZ",
  "key10": "55Y3haiZLzBjwcrfpRrKty2xkJADZTVJ6UC1bXwiWZAs9q1moWQdVxj6EFREh277ouKGEUSSPLNNJ9SEHkaFUURH",
  "key11": "3AVAC8Zv4oFbeW63na9qsX4E4uHgzPcQ755i7AZpNKrhPFYUXWtzWbeCVhtd9Vqja8v8gx1smrd4N7VoTFMjuMS2",
  "key12": "7PwqTyJLQ7yTjEaBrZb9WRqMUrq8dS9UVQpFcstddTUfTgkvbMZJwodhJHC3CJzSaUj2XAWTdbZTZETTpha49Dp",
  "key13": "2VTQWJGozwj5hFJRpRZXL9812nAFgsLrc6tCgJz5DUYrc8SKJpMejSDnvNTL6G3TCiSeTG6jCGuvX1oJW42mYkvZ",
  "key14": "3uwDPD2Ccmc8sgRmF1DNN3yUdqLHpG7p77QzbmiwiEPBud9bADCXFtRXwL5f6zVWBnNscAmCJd61Q6jc6yskqUep",
  "key15": "2yrdbSutfWdP9BRmzHqjNYHTiQ4CGEiEY3RvSHxW4HqsKbYjFhWN9cfjhxR2YfzABU6nY2HYnZsZvSzDSJq5MvSZ",
  "key16": "37XZG1WconHdQeQmToE12Y6xvydbygXmZdzy723RSBJVvepwa8KDRCDd9LPtSxtj2mfR2WRorMLpCkfKBgnLhgzz",
  "key17": "4WMSpNbLi43KCRcA1dckgGcP1ZigZT8L6C7Mut73cYzupDeScRn6A5bBn1urmsMQtSANp6z6PEv9X3zWWkCikPKt",
  "key18": "2A3Y4gyJi8D9HnCuKvgHLffUrDgtK5F5yBDknUBiiNDbG9mMsuQYdsXYHfpLcsLJrxsFr6AwzoBHyZNEHvaXTz35",
  "key19": "jUX7HSsrwohRtmWb6AMQ4Kx8UrT4UgtjgtTbtmDDKv531tSLjczAWEVuN6qq8Cq4ZP88HDVpcjPgVSQNj3uvyfz",
  "key20": "45pUjzCnbX72sKsesZuGcpRkeaRpm9AXbDorU8DJZHAB7ATEgRMZj51gAhfmp9v4cVQtJgNQLZBtyih9zkkHSqPV",
  "key21": "4osktJfz6hfGtpPEWBoutTj6hN7u9moU1MTKpTm5cVfnZ8euWu3gYS4sSsFoKTkk5XgyQqd2mmbPvqee8b51kHgz",
  "key22": "4Gxrj2KHk9bz3XHFQfMBrq7gwVLLe8yPQsHPc7ay3gE65bcGGTGESqfeht8MCX95xSWxLHPFfv1zfigCpbrWLvTb",
  "key23": "4eBTkoMTvtU13DLjUBqdcTarMPoEJrEKSJ6cJbqkE4hhSpvmALzhZUYfjhZ152EqTzVTWfhK6fnFM654w9TzEEa5",
  "key24": "4hxmfNVBVALMqt5bUxqbGwLym3ovGin55Uet4gXAQPjfY43xYUYTA91ebvuRFVmU75z75stLmCSCVdPVuHdcbSeT",
  "key25": "54HLxFr9DQs7XFuJLLV5LcurK3FPAtezv92PVEd5AnJEfmJHi4ewLEwNkHXi3giYtG9dzwpxwCzdGR9FVrkhDGM6",
  "key26": "2vjDXfFAcnrStaAAXWXLGvsT7A7oQyJeh9CEogNNSK66EPxTreAiH74TYTse6asUKN727nasz2u6Ea8iLBoVEgi6",
  "key27": "AekwCedLRocpxjSQTyroWwmCpeJ4jXiQMgdrW3TKKvWqLBVREPr8XwV5EDH25pdFSgKB2fAaLn1x2Cv7pd6Zdn9",
  "key28": "5iuh1SYVaeyrYZoVnuf7y1JmXqn4xkREB37JSs2nnyrfEYXnknGv8NADMGKAkHDRXc9zBT4cuqFSisJFDF7xTZ8m",
  "key29": "3ZLCtoUkXD3rSL6qRW8mjwXCGDRrE4mbKZUh26gxGdpHBKWzgpjRJLsLSdHVzGtBnU1wLRkkFgBEAviKJxtyHbSM",
  "key30": "4gZdWPCFpfVfNDextXhThej6GpshrqJeSNSc3yLxUusfhVxC9GDGXfZizqHPTTqQX9aRf3jx7PNBU1jHvm46tEoq",
  "key31": "3vjb4PmbRBdCRMZaduxgth66EMZ5NL58ZVs7nDFaztEBPVBjmGM39D1AXRSw9ttoPaFNR7AwFnmwpdCE1vtXLafg",
  "key32": "2WeVitbKEgYrACcxfogfPtUTmS4GuRiSCXCZTZ3ZjhKYwpYKLA2ehwPds8SAijJy5rPzbp2ny7N4aWyZa4cFVBJg",
  "key33": "2gKQ2xdRbGDFXxJsynfkmHwZ4TFy9Tf9fg72iysGsRUxUxFiiNJqmuXx3JLvuzo1onBwwmfSPSYGoy1KagEnXNZK",
  "key34": "2FeiDD5bcKsJsKDpF1WWe8ENYdc16QQS1JFrAYnRbZGWHAjNgmNEKrNBEMkiPXajuK96648t58h2wEEjfWp33wfT",
  "key35": "5h9FUqv8WmTWJSu9AbDj13AyXpG91Vcnva3yN42RDFM4kAPmsx2nHa7kF5KGTJqhxJHkAJzJHVAPh6d9v2uSjPk"
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
