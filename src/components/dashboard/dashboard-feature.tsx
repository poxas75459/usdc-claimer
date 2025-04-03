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
    "5i7Zzx4vKD3GgGpEhRk7Hsk9tP78PexTpzMGbhQGmcnmrauiLEvTswZT9nY4jBz29a4vdzSSeYYT5v2VRWksdpkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57xovbx9FxHTdMrbrtXC2CL6xrzPyoh7DqQA4zSVEj6qv3yfrJ831csrepMCfJojddwf37X3GGhgiPdaUHMDkymh",
  "key1": "5d8k3jHUMyCmCz4jBTRr3DDm5V3BSuAqo2QhPUxu6FAFLWfXNt8nhPhyVtK9HsTY44ncUn2BYkAkPdt4mS89UZus",
  "key2": "4cJHb16oeyhGpaVgpDCDiDBy2EzCk9LgzYJGJxsf5qU5yBVpvsPyPnBe4cNyRJ4vRfWgNVmX8n9jWy5vcyU37U73",
  "key3": "5RLZqBzNjnAVdGex2X7j5kJvHLboDhP6EXYtsa5KQYFNEGQ2sDZrpL1TVG9SfqhxgC4aP7UczsPeSwpGYdiMyxtp",
  "key4": "3zXv7XvYh9VF8J8qdWfwxK9ddDfcGeWXCCAqZm19fbXeAvBkSQKhPkYmn6Uc66VELFTMbV3zghs4tKyiBLE9z98C",
  "key5": "3ictjg7pJWbgbzV7Lv9VSmHQjnmcE3io1m7NefK2Xh6daBgMcJa2LzGorv1nhHcMyz4ibnh84UgbZqKop8ZJXNiK",
  "key6": "5BKEYHFBncYnU44jicQQkWTuGC7g7B3xZ4GbxmL8kMP23djECCqTGnTy89UMbuzxhuzz84WZQByvjitqvc1k8RV7",
  "key7": "63mmjBtVcCc18P2Hpo1rh78w5HeqjoPErmjPp2JNL29XBa7EpcF6Mqt2KMTMbdj8EVDDA9RFT9bX1TksEyxPV78D",
  "key8": "2LsMNEfZsKCcF8n5kCY6XLd2zvptgynyjZmqS3yDHdGHpUWZRYwmDN1XwynHRRwLLZqCXUXRRNnzjbQVXKYUV4kd",
  "key9": "WFLwFfoYxzvtooSu1fPo2chsbCm83kQHiSskgGTTFC28rdLWGKuh5Q211aJgsWmYKZdcSX9XpN115gy2RM9iaYh",
  "key10": "eZnK6DF4CBok18xUa9EJfTqiKxKBecjLq54RNAgCsz6sD3YBDTgbWhcyH1DrxbmXk8JxgCXFX4r5K7xxgm5WRxc",
  "key11": "pNMyFT4WFW6Q9GscHjTWxrxH7UD38uTu6jvrPKePZwMrHaqm7SdzWa5jB6QB1iprQW6AyZkBown8ZxmjEEJv37g",
  "key12": "2ibiLhQtiV919fJqKzNCoQijgcV7UB299NuRVfeKgSjnc8p99ckBmjtvNSxcGJhsPmStNXePQZv5G9rjDMZaco71",
  "key13": "DWhTBwAsWU9r5Yf1XbXX5GQq36nLqdpwzafs5NRfJPtrHtFk4pFmwHCBBdPbcsnpcDADtYs1ikxCZEx376CuzUd",
  "key14": "4CG5QjiGPZdPzk42BAYYp6SpERaGGmR2E6SBPX3ZPdzkAmSNb6UZyowkXaa7H1KWMRiM8MHhwNatPU2HXJ7FS7d",
  "key15": "2yD7XQCKkrWmDBqTGscjvTtz7wpNJZzHqQHKyYNtSAhkJPwmYQVuqrchTXN6MLZsW5bipxvwaxGCSgReuDeoLkKz",
  "key16": "qm7HDZR48ZDU9NMCvXytMKVstJ6Jppmhd2itZJeJUqouRhqzospk5Q4mRaG7sww6SEddEHGTiAfsUannZXkdiT4",
  "key17": "2HXPjwDegWLcNZCftSvx1ErXF39uyAkSCGJRe1gv8zZcRDu51MoKY2bbd5xZzGPFqfpXE5C1xhAnZj6A8TWjfj5R",
  "key18": "2FbjiTtiZbtSycWKrXTuZrGokV6Pzcf8cX7vVwsgpGw6bNAU93rDdwHTjcBBeCuDgVQ7dMzRtVEcr3M2yg7mqKR",
  "key19": "5sX8CB6AwjXeW166kaD74nAhqxQoaxCACCJZaTX42PetEEnS8JAVq1d7NcK4u13qL24CB1WK2wfr2jW8ydew75Hc",
  "key20": "2mq4M9eBoABgrQq9sggqr5Cy547UDY4BynMq3s8RsSC1nnTMUTywd6oZbKUr6F3w6PsmTfYGqdnNzyheDYeYcYQH",
  "key21": "53YbwPFtvyFptVBPpjkUkaaMi3Es2feKH8AiP5yCK3sLc6FUoRg916QRth5nU9rmx4EcK7dMhnEKbM9HDLtPRdzj",
  "key22": "5Aq38njgF4Q8RvjUkRHKa5XUsLqBihv9rseGQ6W9HYBKtB7hcqwJWKYSf2YERYsFDFWbjoi9ywfCtLTaMwieJtWF",
  "key23": "2jeMHSH7TzkrAbNf1Pv4SPt2kpM78HGqgZVLpKkggsN1B4nXqTD7iKthW531JFxgupBPVPrdY6oUgZcA34hLDwoo",
  "key24": "4pkdwKi2tmnHZCbyyoNJKXe8nnPV1Azpasq53EBLDVsC6zNrYwFTseA6mG3bASWBpG9kwnpuvNksVra7VUm6RYuc",
  "key25": "3qaAz9hmSVJVmMKQunensmV5MWgqrSey8cxHwmi4wBUDPV6vmxekmtXtMXqepJ2yFkxVPUkBGmsBG53JqLfguh3h",
  "key26": "5j3PDxFa7JXVuSWkU9YKPDGQHMFd3hkrf9K8HjqZKpEVkryppRL4kP3BNHn4xqHbhSEymjE1GjAgNTERjpZ2KbJL",
  "key27": "QwSbqQ5haL1cdXbwmr1dWzNewYrSUWCoKiYQQqHbJkU9HWNDnn3YyBCcdTnX7uwSYsVQeRW7UtYac4gfoNpwVoL"
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
