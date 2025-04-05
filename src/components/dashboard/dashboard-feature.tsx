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
    "5ba73iGJrBJPskg4fVp8hgdujznKFzafxkhndLVse7XvEYhiXMN8x4Y7nbF54xxGiuMHwZYrvGbYCgY9odhSN4qq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PwHzAhwJDK53ZbnKNWBK5qryLD5jcpMnEnkFd6fbe5WuzECEjDCchVcPd8juc4QmZ36dR5jjQjdCeQznHY8uP2N",
  "key1": "W8ABgQiFSnDSYCDKYbDh1RsKJB6eD9RkDnCYT4vQ8WDcdVeW7w3idn4Czs8i27YGX5P7HLBVaKhNrK8QdX7RLDJ",
  "key2": "3ih1b2zD9WNMCJwfzSN7jVwqHrMgj1hPUnopo7c2SjZR6Y8pe2yZca96ZXwp8VvscLTzU6spaGjSj4hNn19Lwynh",
  "key3": "2FohMsTFfy6N2xmzZxwRmSSFvC523jb5jKW6ALFNqb5oidiyq3o8iqoXqacWKNxcpWmwMUGuzYXSxXiEHZPU4dw7",
  "key4": "54xhewqaCFFZFuiCvEQA2ZPn6bq7tWeEqV3SFpgPiQyhhRzP6ka2WBxzUmmcbDTUbqx8rEDW33VV964bZMCdo3hS",
  "key5": "57y4LqoobxjTcerYS7FVVSAZraMjdGJwbNCTyCqiUZqLvUnhi7ktYe6xrKcooSuzRXoJNw7LPaHRRS7RH91AFCD5",
  "key6": "2YzvdYSH1Jh3MeVccguod1Nf3NMQZYnS1mMtayET3vGPhLfk9ZAMBnfC1jdjPPLBy8S49942Yo3CYouWSnPiQRPA",
  "key7": "NSosD7GFBHzDYQFki7TJBXXmcxCLZfQxshSMthxoTWpjkpaMrUGDej8Ji3qgPeC5yv443eRALStUBCQvtYjyPQ3",
  "key8": "2GgGqUnj4wH8v25twgAAXWiqSK1NuWQAKPTaoxDAxTtbESfALqpKvmiJDXSVSCnLznXQZi4oQ4wnRiSWSm5WN3Fy",
  "key9": "3YyaGBonH6FwPp3YAc1apb5HD4to1wyMgwfrHk6BmdqVmt8iFGJBSDoi7jVN9vRsdXLxFZoE4nX37391gxvMJxti",
  "key10": "arMCdDtBGecHDv76JhRQrDiUNkyUty4aQAecPiJpMWpqEr4QWs6cn8E8xB7janRcHvboFfvE5KGbbWVuh5h7sfP",
  "key11": "4wn9w5sbzPv8xaWSts8eLMc1SVMtZLnAZuydfJn5wN6JqaArDgV9E8k4pauhTZuAugAc4cYP9BUfJuUpUy7ZgGZH",
  "key12": "sZ29eMpDQCpdccwDKqcUWSgcGPXyy25FJJCbtG4SDVpyDtQnCAkeTb2nf4eJThr9wAbC3jaMk6fmKgPfprMfZGn",
  "key13": "5meq3g4ngJF4yH2Gpc4h16Pewccdr7ug8DTwE2KXPLuw4wwcnnUdPQjAUk4qqGCDJnPVbs8xHyyZCyGRHHnucDWZ",
  "key14": "3UeZu9GdbuMdXTGxFFgH4JvTJqJfR5cGkfe5fCa7z2DKpyrYpArrzEqUtJz8hHi5kzukzyu448R9RWfQSqmFypPn",
  "key15": "4yA98roQQDqQKBy4vzDxQ3KMDPSed8YSjHhzyrxVkbaQvGa8W5q3JBbTZgpzBbG6jSeS62PRcf1f3tLpfmcNBvFY",
  "key16": "4LBePvi4xvdtCHxBwxVC9Xru5n6zDQx9ZsTjf9koEEZeiTKVnhkGrpuinyegz8PM4xnbY1xxgN8juaAdNgSnYZM",
  "key17": "4jgfZDrNEe9r8uyg8ofGfLBsQc6iwxiBkp8aVjkMhSjpNHbAvtWcXkfi7cauojjPP2YxkdXPNvJKpRaUuTUzCBuX",
  "key18": "4NjwHTLozcwjGtTT45k6QY4mCJ9w9Tqby5U4AX2GpEFfrAqk9wrNAVVMy2ARa8gMMML5TECidJRMNA8u66Udau1x",
  "key19": "4FKyMvoQLSJHEKvcwzxnV2ZrexctAwmjKM6FavhqcSBiHXpJvRhVJStruBq7mNbz5j3WQemPQsSWpPdTDAH7HZ8Y",
  "key20": "5mMyNDkkZLzChh9dm3HjVA9kJEoA1QxX3SUCeeU3xnbsf4twj16fPTJ2NmkP8q7zkKK26PsCDosQgZF2poncDHnu",
  "key21": "wFkak126W7heGaQSKbYzWDpDQHbEmzqE4Uqe33SqE6TyoDVFs4EnR7rQhdBRTnoUpW1An1iCaP2qMCY1hyfCXSE",
  "key22": "53BLLLZnkythpyTYJUU5vFKD4hdBPJ7zn8bPR8HFeYji7t84kkCkdo49Mr2MEDYjrUdTYnWGDpPYkUWNtscL5e6e",
  "key23": "5DAJ2EgN6qwUkicWnz3BtN7Y7EogLBqMhhwbCXthUPYcSnafHr2PNhFyQQVBNjKXKh8JprTgXPBe9aDxWRmFd3aB",
  "key24": "45MMD5JT1ysTpEG7177TgRQBRKZFoQjiT2wLVDMVyQCe1Gg76XhvirwrTMExizExMYszKsroYeSai8GDS8DaJrVC",
  "key25": "48X6TijKK7eXJ9ucckYbX18p1rY8SCA8L76d1wjjDXfYcuYHRYkWnAU5j5APXG82cf2RQo9hiFy297hj5ppfkprV",
  "key26": "4jNMEDniS3nhaSdSk59HbzkcLdRM3nFZF62RQnCQ3PCgWMLZD2aSTn9rtrEgL4c8BJGKNxMnwkFgoZpQDkXCrawE",
  "key27": "2ottThvh4ffzsqw9ZguDf42HYVGvZddWqLV9LVrgwSKWoWPvrZYrdfatTv2xdSr76vKq3Uu8A5BvGUeTC6ynj7v4",
  "key28": "2M1uRXaEvvumwUT6ExaWkR6JHzTZLnGGn9HTUyc7pMPJLBWaxKTP8nbLRUY8utaevAMyqVz1jCCpaU9jpikWG2n5",
  "key29": "228oC13CbYZd3knG8QYMQXYH85UVvPXNohdk8KNP2eYf1ZoKD4nmneMvQW9xKBpXU24MZjXwK7VgA5ZUD2d1xdK6",
  "key30": "4miWRsBEgMG5zwpDYesNryS3ikLibfw988kULN2HqBb5BPpE7jzeF53qtkk6oRVbdhNfQAdUMTwANrpSZG8snq6n"
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
