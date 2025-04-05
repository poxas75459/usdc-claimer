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
    "4XskdxYct5bmdA6GfyHrC1zWgqpTX8WZa8mgkhYJa1Brk4FvG1UhxycRyG89PYzNC9iavFLj9Pn5foqDqyBCy6pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5534CB3vDGnUWkji7fZVdpR3FFUxQfoxLQ2wPrnVHmDCrTPKHMKdjaSAAZm41debGrQDtZi3uwUyj8FH2uR5RWDv",
  "key1": "Mc5Pp7q2Qd7egCvdMYK3oj8jcX2zcHYV3fDtB8DJw679mp9UC6xLsr653FqVgApZiUom1guniPHnUMcp5dN7xbY",
  "key2": "qC1fkGkMG2X5nYGkGtqLuXT1Yrbc4X2VRoeXLDnZEmA7dyF8E4pXZP2C1KGPYPCyQQaKQq5ikudXd21gzzLFf3K",
  "key3": "5uQUnhLoQorGHsDo1uLJAP2hh669y66WG3PtrqHYqb6SF1U1LjswQ6KXpZ2pQNL95Zn6pro51Xda1WncBbANTxDq",
  "key4": "2YwbnG3LEhmJgtb96rTsu8XXQyH3qbRA2cbrh76xXkHSbB9u57vx78rMSHWjRobr9zHFGF9xcmmtQit9px93UJf5",
  "key5": "2coLtH9hi5ZqQ4r611MV4ZycuKWuicfDT7bhoyYj59nzZBzZNhC2f8vLsyWALBoGgitGeBV4hoa29THjz1RtzLRm",
  "key6": "pyo9K1CWaS2QNcwaNUEx6mxK2XLdWheLUQbahiuYY82KwZFVRZrRLMvq3io14No2Yr3KMr4pbed91abuiJQFdfA",
  "key7": "7pgEiGxko2WQgVwUK2uEdn9JjUZnV7MBf9jWw4ZsjJMqXrQHacL9ua6SevcdH1zb8YSZtBKYuhknoWFsvzTYQNw",
  "key8": "kRVtaBU5qwsH4nrApRMutVA4vGxAXMWaTJVVzam93D7pvdMtBp6yg43aneqZMAdtpmDaSR5KpjFpDjuWtYyiWfv",
  "key9": "3EYMzQ31bTHvyrkFy1mXYP1ZQ2Sn6qd49ann9XuHSTH9a9UMGL6cXyAfgiTMkABrX4wQFnZhnvoYsbZjPrAN1DA1",
  "key10": "3Qp18ETKMmaczSXpq8ompXs1pxmJM9QTDQU2Fx3Jcj32bhse81kdpmCfdLW6QDkxCorhE6vYCGnFMnAZ3vjoAgwu",
  "key11": "5V5NACeWXusASw9NoJKsaxqAPT5XFBm6EEJHyRPCZBPc2AP3zqWmaog9VkpWTVwRxsxcmLaRkC5BrRQ14qRptnR4",
  "key12": "33MJoBZMD2W1kRNCx5X7SVbxx2gkVYAD1MiWmDrX1o7KKsgDuuvrfJ5tAzbwdQmQcnkpUirgvHYEjKFSFjxDXnS6",
  "key13": "26EVyNQW2b2WXKKoH7gN79jthfuCXZcdDjNRwWEGTkVvNS99pjwX9NtRmBYUDxwAF2H3z1hW8o5cnd3NYFeYjNF9",
  "key14": "3CQ4RkwjtdAk9Gy6yiCpikSAoKPodFXHFobEiFi3zJePpRj3RpUCGbkjWEGdHoyDNpx8AJXMM6pAsbrtPBfKzoMT",
  "key15": "4sogW3dGrK9ps5DEZHtY2MekK3hyTqGqq6iQs5F5b3tnn8zQbVhNnYuz1Wc6bwahV93WF6gWP3VSneBBmMphNDmq",
  "key16": "2AuBj6cRDQ2DQkRLstfcwBXUNgjzj1daRf3qMnDrGoy8BuLC39BNnt1D6b849Cj1MupxbGFB6UbmZg2FRrkDPd9v",
  "key17": "3o44c4L7erfQCrNBp4VkzYeEUYoqwQnmuEnRaroBoFZYCTe1HWQFbTyNuiR22pnFBmFnZh2yTqnkeRFCYgVPh98v",
  "key18": "5ShHd4ML3U8Ky8RwirkLuxu8LA7CebBTq6st4mTLGh3npiKb4YoQAmdJwZ6zBo8ohMEKxnmbPkbWJ6NHdpwQGoWB",
  "key19": "5oTH1TmgskAcUG7aQSiTRYShjyvLFy7TFoAFQaC9cPrZ4wTyzQpoQ4QWCMb16gVzB8vitiWJ6VbphZkEe5H3aSdZ",
  "key20": "oswSkQduZNMxM4SnKNZa7SScCxiSZFXAfJ9C8TvGWmz2K9UVX7jNecEhMWFznuerqYKyfTJLmdpiScffSK6qFiX",
  "key21": "E8vrHb585qrqUbsJcf3WfX82rVURA5GLpUNiyc7J3WSRKuDUEJh1QgCHBvQGSvywAiJckJahqUx74teaXg9bAPa",
  "key22": "29qnLCpmSTG5YEk1D1zqQ9Jr7G77MeJ32c6B3CcCTRgDBUhqHaJYZBsFodgCmkXx8CjS6rSdkHjQjeNZVmBcjEWL",
  "key23": "JGryYnPxHfcHtumqM3od3WVNXXkFRBzEoM9dqgP9SHJpiUADBVvu6JRPjWLT5YATJf41HJtmZKpcyDq238fLSdY",
  "key24": "2qffF5KcK2Snsi2RN1F63Q7TjzoZSUCvYgFYeAwcsZKKsaCsx6JTzPZ72N8P4YkfpXXpqb66WSV16meAzNruzP4i",
  "key25": "31AHkzQUCrN7JhDeykXtXj9HcWcUuxB4CC9L6d1RxJanoWU6Ms7LvS4sadj8gCPLhZFwb5w5EV2Z7pNzD5WRpBG9",
  "key26": "2vS35mJqf1w4maxCQ2i7BrV2Ggu2ZAPzdfRwdHvgGyHs3vnRaLKyDTvkQQAtoiVCHZRWbTLG78J8YqVofJbiciUE",
  "key27": "5pzzd3dYQQDcPxoYcAPAWz5YvCKaUynDYuh7qFD86nvPnkV1JpaZr9KNXxzLse7NMLRp8L3uvMJJMCzLvyTVLdDx",
  "key28": "65vWZDis6HCQ2dr49W6h3kEzhNcYN2qho3QAWRyqikVTC6zAEDbCN3GtMr7UWPNquVBbR6sX2QhfcEv68YNnLG7b"
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
