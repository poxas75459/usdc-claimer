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
    "JYoWjYhyCNDcdg7URhaf5arAH4zkTEp5SQrroTNzdu3obVUsd2XNgnrbTrZSkMiiT6DP8dUWRJfRmxJRub86oS6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dPtMafCPFi5B6yiCe8XxYpeUE2SYSPGan8sAjkpd7qy8xY83KNNwbzCmnSYCa8UDomHCRz4W6WVg9wtinMyXb2S",
  "key1": "3YWLNgiZVz5ZAX7M9PYHujWLxo4sxYH92h6ahEsdo7KCBquiXWw3ZvCDRqikNpASXUDwQofGGWkPBLRGF3GaZXgC",
  "key2": "4xZ6fmuqb8BkS7tF3QB6a74JxrrY2MguWHdWfPHe4fmsf5sBkN6BCE91yuL4bAhUrt4C2eYcaXo7rypS1S5iGoeS",
  "key3": "39PkBQbmUEduCQLcLBStkfMdUy9BKbizFNbi24jybzWNx2sDhpTfN5FjheCvudwH6GQ7DvrNzjrqKg3d5bDUQ39x",
  "key4": "5DeCyPnecUsvoepr9p3RM9NsnwrkaeATskn4xfFLb5vRjHTiTrzF9CfGbwo3qicCSRv9WfXSspMKxFxGeDLYYUzT",
  "key5": "2oSdLCExqWDZYfwspXcXcYhjcaLwjCm6CgNV7eX2Zyt6jbhahjupYVoSo5Z1QHV9t3QRAUu3sGC78QRoufwM7iaG",
  "key6": "S2drvidb9iBgDdnfqWLZCaTXiU6vXvLDsquzGPUa4EwL4CVDQGYi9QsT6LXppjJe6LSkNZ1MD7SiAxRRchgehSA",
  "key7": "5yUqMGsqKBKCvYdWEYoknNFSc6baPXfs4wSVfVfgv5ZxexJngPUsqg2nZG6R9sPBKNdPj8jU6G2TszANwwCP5MD9",
  "key8": "4XsxPUEaKHbFToTjJWbQFPPiD7YzKW6rMk3zBncqQBf3dyVdzHpGAira3T3BwrZYYwemaVnnnSy9jkeTvJRJb8se",
  "key9": "5Ws1Lk14nHYUm8ADdTTgGcQBQS1m3rYTCqHHiCseTm5nngqK6rY6sCVd3fRqjHjsLjvQg4pbnno5vZ7e6x8t8Wf6",
  "key10": "9ts2kaHZETEPcFuFq5VQJVxPh9uVPyfDdABD58zghSX2FDZYE9Q3Tx1FpaK1AcJHsz2BFeygywBfMmmr4dWErCg",
  "key11": "5ava716vs6FMJxGhxXSiB838DoT5mjN7CGQsSHL4JBoENHGrHe24B5M6cL4jjNANfdkg2Ede9FcnsdidoXJbpZcN",
  "key12": "2AZABkrRKem7nHDmyJWqVUY9hs6EdaBrcTkCPADg84tq9BceSTZaUQjqo9aDyUjvwuPpnJZNbvmKHxhqneAejPsp",
  "key13": "oKM1E4L2SQtZeuTdUJWRrWtnJYaam9GNNWrd8mhqzt4LbmTnhN4HkCYJzRp3dc8j7LPHSBmKMtxUVbQpYR8uYCM",
  "key14": "4wASwCbYzJxPYetND1h6embAvjQFr62pHzvctsihXAJ9HuGDMSPz6kRjdn6t85X9TxgkQ4f5kJnhniqymPAEHQW2",
  "key15": "2qu8tWHW2xgtJcWT2cqoWZos1qMHafA6Nwj6qRCTtBX7wERf9PMZJwAJXZ5VZmcArXm2n45Hp9BY842aG3VMgQW7",
  "key16": "53kjcq8S58GH8jtDQoNDHwTFfMk9iHESHfDrmeQt4Xqfo3HCwuawS3h3RU6brgmCcM4m6dmyiZ5aUhCL7FkcfPVK",
  "key17": "4cPH6vts5UHPsKwGjJcF9q1JSJqEv6wZyztmPiSkN9D2ZEeZtMJgF5UGCYUEQDLHNDT6dkxugu4KUg9HjaaBcoD7",
  "key18": "MwKAV2n8xVPKdtTeZBgJ7FR1ZtnKY1j98tRQMdd9HZZpCnWzS7pdnHBaQwp49Hk1bE6zGFBwYac63bg2g8h4PaR",
  "key19": "4WcCnWefaTfATsXQ79QHZPi1xVJo8bafiGacaQybBrzUhdgYHDaK83NE8w58zEgFS9p4vzxRR4dXAjgDLe4Gbwyc",
  "key20": "LSjfRz1MvDD1ji56DJ565VwcUogzTShZyWJoyYjGd5iZbsLjgbEMmgz6WnQtg9T3kgqGVp6ay3AeHnNesD1daVZ",
  "key21": "k3ryZhyZKwup9ZNHYZrS3sSnsUh9fhNFHtDnQSp8ExzBYkFdHJnvFaxvSxx2m8MToXB9pvBvPrZ8dqJendkgUS6",
  "key22": "2vk1oXzjtfHocdCMMNmEoB2hj2vtYdXW65CDspfQ8pyRHXmgZJeYQhcd5TpdNshs1xND6Ph3Zg4adJvPsNMPqxKC",
  "key23": "3CxZ8a5iXRzURB2LJhEtsvnRXom1jyGFbekKvgunyM7ca4vfAokhYHEo7Jq3YFHW4wnLU3XhmQmCrtcaJwPGd6WX",
  "key24": "6qug1kHaN342BygGSWT5Q94cxjGvrZbmQwugnBJqxjs4ALYu8VGkV85VyZJChr95uiazfef5PpUSUrwYW173PgN",
  "key25": "5mfD1PRtMoaWkr5wM2Guu8xwjnEcDHXmCvePdbBT8Adiqh51op2o6xS7uFnKRwQKh97Ya56Kwj5NSjWu6Zs5nRe2",
  "key26": "5njNHEEm983Lb2Dwvkug4s4dkpS8AvE1MoEZcAoCMZt2Ms473nbEjUK4c8FN8rvdppkfofo5tXNwoQETpdvXpgWi",
  "key27": "49T8x12pZi5vLq8C4kyBZtagj27oxfr6kYdXeesp9oQ2kiRLpGvAfBjjf1Trw6D42mcPm9D7AgsFHxpgZfQ2pHJd",
  "key28": "5cvX1fy1Z2bBaZUGQr8iU2jxo3GffdsAhuZZvXJdxfoZEnYpveBh5xPsQXTJCPtKn2kijLBTY7pMmSANX452jmFv"
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
