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
    "3MsSgxuEEniJ1MMFyvPSSRdSJZZ2BBSmxP1APwrdSc3j4L97498esBe4sKMGCXyfL1b2b4tBnQDMuwARqawCrcA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zFMfvKSejBSmkFbrV1XUXvqoXFcifC31tixSBwBDzJueNfdC4LfroxsdvGajnNB8uRLkhfntCFnuW2AQetJr2AW",
  "key1": "292VHVgZvyu2Pb8inuoHoLsjwzgcR6aprsnmu7Y4Nt5KXRstgfuwWke1NYLM4Rinsm9uV3FYKcz3V4gmPHhs6iv5",
  "key2": "m8qaH5S4GLC4YT9raiwV2C6mhwRv1g2pvCMu6v44JaJvoDre3bKh8eryPwBsX3vNrYs8uFmG8pzu3oCkGyEJivc",
  "key3": "2aiHscnpVA8HN8Qp3NAUgF8pp368eT9yiqDvrisNSk9GVTfmpec5MLTnx8uysdiNDxfq78ZkDvUTSav6mcJJtocm",
  "key4": "5Tb1uAQtfmn9yjNYVggSmKijmCJ6aoMUk4oWDFUe8hhgJhiv5MQ6z5EqDkHxYfZxJQ2nrhaVhfcWjVDUWszfVrPV",
  "key5": "4PZFeMqwFP3fwKWWvoCWvjfMtofvsczCrtbCcSia992LJFnxsWLt6aPPBReuewsrCEcPNbxt1qfGZVnh9EMw8ysk",
  "key6": "4u1pvS1VwzGQVwjwPnLLppqwiLgePSdUHYHuHWgcvTQ6nx6ZLCHD9KQ8M2vnruXidjMK5MHWVFkTZzbYJbpNyVnw",
  "key7": "TpLdFRwfNQAEg7n5wromCkjP7uoRFMhYdv7Vr4gTpCs8WjnN3Weiv7UJVbvhZZzNK6WaiKZwTxjseXm3w4yDPQe",
  "key8": "358rtzvgU2Ty7uLQGzdqE4BJpAVoWns6qgK6xfCk2iJPBtUBkfRkkZgP28QZ54EL555bTB6hDSVcizjZyiA5wdAU",
  "key9": "BwKRjfyoFGMMnKkmB7cL2o1q8o3XkzZxyFbwfecvEkVGt7pASUCSFTMGw2Yyd8DaeyMs5GysNVYmvkWiHkxfcyN",
  "key10": "2ACpJpLKYyfLoVAJ7QrZQXqpFTfraYmyX4o74zLeYbegeQtLUVekwzZ6jSiEKRLuUWk7ShhA8nhHXxJf7WAfTWj6",
  "key11": "5ZAgRnyGSPRoH3VcyBQyxhPiDQiRouetTbGAVJ8LZTH71qQtQRMZB6d8cdZrfyB1zkxN55w3FKZa89ipBxaeEiac",
  "key12": "5t1M8jLdGjQXjeazf23PHBD6zBxwW5htpoH1c4gFDLy9YaBvbjryEMK1vobf9VW4kAhzZaq8nTVdguqP2afeC3vn",
  "key13": "2xJB8YTx92BVk6SDUb5KQNoJ4twofGjPhVZR3UNaMKQp9GycjgRSydSy2KpEavTV9DF5hgNdqAFT2xnZoN6QakpL",
  "key14": "4UnnXqZ9fPE7Q7gHwUYCdKZW7soRVA95hbAxDmtf5whkyLhp6jrRdqd7yxMWQgLH874kWDZWMT5FtEauSYWvxqSX",
  "key15": "4Bnkxvmjo4ULjJvE6q7GbVUjzdzzb2eKF9DXvhx1GRSUL3E1FoUrMWTVF2pAtUXB8c6re7hUm3abeZTSTHzaVfo8",
  "key16": "24RY5dNFTXjC4egrw81i8PyXmNN8Kq38ji8sCi3h7H9HBXRpx6To1WSBRm3xJDn9eFPi9zwJQe4hPRu2noNmuec4",
  "key17": "3Lfkg1As6Nb5C4cNuXTfSnMwWNnXNVsCw4xVnW8Tmbh9QzSvgx9gr3kkhpnKkPAbaPRzEd9b7Zc4uwD9RFFSjad6",
  "key18": "pdBA6b9Y5GQ8DYsJS4wnpqgDBKYARKVFVCs7u2JCBSrWFfg1z3epz9u3YFGXDBpWxeW9DbqBubjaJF1L8oVpHiY",
  "key19": "35DjY4FMBkNm1ACMzWAtKcbPmf6VyCjGR5QfzcLFohUhtgKUEnRsSeCeNGivSiWjaeJziv8NiqmqU2yCWrwnK92J",
  "key20": "63m4YiPb7kMmGa8rijHK95wraSHDH35uB45xJH2d3svWPv42pWtzZu6wyLwwZM7hYBErPdybt6iu9tZLBBHYgkPo",
  "key21": "gmPwbcNYujK5cUApCeJU8MGUHMAFsjeuxdQZ4Rec7aaqmJEuguCuS1geT4a4PKhmsFiiPK89dhu2B6wuUDa7y5k",
  "key22": "FMsSjh1eLmPKn7KQit3nHj4cC3dqjtCrTjYu77ND9Y49uEwwN4LWfL6CRahZ4SViccxmkRpKQRS6H9RHhsnpo7e",
  "key23": "5NurmHr2yBxzLtULRbgf7LoebqJchL5yNA2cKxNjepoFLtu8oRjkWSW3puoSwYQzM6tmnPCVAXzCr5xW1KubwwNJ",
  "key24": "4SSgdG69db4U3ZU7Vuw5Ucbw9t1ePg7gx8mpHxTbTpaApTEuboBcXBxBVxQrCRGwrGcLWm6a2MBq7HmXm3BhFvvP",
  "key25": "2BNQKpUcM1BWPBVBdCcd2etditSxtvmbDo1DSR9qApM9JNDmAf11HtxXvt4Bp5Xaas5dF6Yyy8v66ghU6GcjCQuD",
  "key26": "KFAs2E7GfD2jTEgML9LRED8sneu9R9yxZW1n5H5cwURTWJhH7zwANeKPBs1A6zxbRcj1JDvGQyoocQyAP4e1Qdn",
  "key27": "4XUP4PE95237qWjVnHSijHdWddUmkx2i25PYoaGg7Kk2AexXr7igN85ttHqSyBQR7qL7Dwe1qEjCHCS7vSw2zvSu",
  "key28": "5iRvvfG5nvignKqA5pZaDBb5q9NzLV7cXjvY5cFhAxNDcAMrfEhpvD4f4UNZZAB8Vjib46KyjXDyLLCzLGnWzrqU",
  "key29": "5dzTnDDfK5tNEyQhsmq9fkdtmAA5ZqmFkHd87C366e1C2CBmtke9fjy8uAoSXVKxmXPcxtBstBh2Pa23Gi21F78d",
  "key30": "2vdcvnXVswsHx5XF97cuY21WCJTt1TiFGWmn7AZYGj9bZyqvjDCYvVXzDEG9dsYLqGUsyuP186Sk44nWm4NeCEGU",
  "key31": "4FkYV6xHP7CSJayJqtmankt4NPmt6bduV4ja3FAnusNBe2NEWENn1XmJPFkNCA3M4314UdhgULrxHkadLkZ5QkBQ",
  "key32": "3aaFAor4vnYnTNGrpGGQcVrKBtRiWfwsoUGBh6mjYEuGbYAZiYxmatvRuhCLenUG6uBgj46joZNGKd9Kd4Fm3paN",
  "key33": "3KVZN4ALFenoKH1GjECQjRRFV4frcA6wRkDoPTxJgH1jD3uriWbcw1KgA2gsY4DpJnnxiwmJM2drN1yann2uVAa4"
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
