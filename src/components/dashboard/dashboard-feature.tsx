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
    "4x6h2fpWqJZPtyDTQG6H4KgUN3CfP3j9AZf9ogStrq7M9SF3D9Jj5ggMMPmnu4Xq7smeHGGqeDXDF1tKGG5XiFMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o9H1hZWadueiHojE8mdBqFhRTnSh5R18EE1rijoYqpmg9ZAeQzYPTSjSWWSFKMoNqQHjTmLtUTAkbo7RSSfPha9",
  "key1": "5xX8T4kkZB8hn9ZBrEdJKSJ6Z3yi7Ha19RwvBpJztPrenwZXkGNTJDaMQV5X9bV7ERwPLMpdGdgeqLVnkRRHx2bY",
  "key2": "NfPmjPfXfwdAoxLKucEJZ1nGg5eCPJTsquhJTkm6soWweHofX172AArNJ1JdLN9hsB6STiw6y9C1h29PWbxwYV2",
  "key3": "3LpcoUszfqKeA7QNL7n5v11R5cagrsJLyMqGC1tKdEMn7dV13z8xehoife9UJZC1N1PVDGVPLkzPs599SPKpaxd7",
  "key4": "5zxg9XUd8bYgHCVB5xN1sg7bdki72LCRycm65tKN62rtaWMvv4ee53z9eUWfWETuugt5CQHBEHRy8rAiWGBi6Ys8",
  "key5": "3j28yWUitb55MAFofwUG6aX9wBEFqhNXwKyY9KDZEyob2xhkHaE8GBNEpTq5aoCreS3dG2wv3RyNTgoE2Qaj5gTH",
  "key6": "4MDehjRwqFePZUPk5Uau7Syu9MWZNKUHumbhfYewtY9rQMWfQu7JMWnFFN3Xn4Zb2EYGgVZzQqkQVuTUc7uLETfm",
  "key7": "MPvMuV5c5n6gYcj6hBWLfER3qPyoMhxtfq8EtJFe1fxBRYYK98b7G7z5EA4Z6ZbXfRnAFKbvGca1YWvNvuv6TBF",
  "key8": "3D3maW49FEm3bDQJ2vFYWMtG8yp8tjPZw1AtsgapqRfP2rmzWArD3p4w6CQK5GyzEZb4HV11bFpZKX9dyqJbpz4U",
  "key9": "2mr27ZSDodfEzCQVanLzRp3E5mYBw83B2MYPW88Ba4nSux5aUMJmfeJHvcBcTZz4n5s15oeScNRLxB8yVQWbMav4",
  "key10": "3mQ3GXUyWMqp55cE48W2N5KTCUtiKGVAYbG7cZqvY5A6LSwuZR79TjGDxk866xL8yvb7sJC55cC6ZPPhddYZirPj",
  "key11": "5URL3pzgt1rmF7wTVqpFteMy3st1hZtuQtDTrvSMA5yDxm8ivbXMFbw6e5Vqq5qdknyzg1kDaV7C5SFTCUTp6e9C",
  "key12": "nKFmhvyHjcDwSERCKhZRwim9ne4SWZ2CvWrGaxQHt51miUa8YreLHGydvVt4HQJSGiKwjMeDKkkbCDVnX4ftw1c",
  "key13": "TauNDAUYbKqJASSYK31CmQgjkQmT3XXauQ7g4paB7DWBMVCao1w4vwoNjX4wPbuZUrzpp1RFtLSVUPeneS7ZEM4",
  "key14": "3bB33ys8uNPuHwu46sr28XWqAUtCe639sPJkmXiQbrU53Whzhq8sa1A89F8hSx1dCx6hq4DUZ78DRUTHYpkhA6Qo",
  "key15": "37ZDdxCwyGRmPBr2xvMi7gVBYCvNwSbkcDZQii2KGPA1zyd5Yv4oZig4t7iqgB4eKnCEiDozApwqEGZnpM3jruA3",
  "key16": "5JQpfcQDbYRf5Z8uKbHHsjrRVeikPCpBxuBZpMqitAtnZxjcBogFcvGupbEVNSAP6QU58YhwernJkKuYxf9wX8so",
  "key17": "4EVNUcPjg1o6tz5kmkiKjYBsWJzMLTB2kSu2NVPfeehgXwMB7555poggms2KdbhPHgoP2WxeharXDJjQkvzdZQZ6",
  "key18": "mShSAcTE7vxQ849ATisXhdWQb3487iVHfu7Yn4f5kRCUdEmwBtjNEo1G9mEKXPyNNoURg9txLa1G2jA56VxZdaz",
  "key19": "oS1QYhPBWUBY5GZX6v2oMm3pPvgiHVcoH1rCbTU2fpwt9oC78Mg4QiJMeN1fQsnpUkmYn33g6s5aRLG9ppqtugB",
  "key20": "3Z2d6YfZ37dvjiBGAsADiQvXZyLx7v2dSCpXbrSKBf8bcYgiyxNgmvLVwFxPqZuzUqUMyVbWdaaVmNtzi3iAoJ1g",
  "key21": "3RgsFTG4tqdG8DYLUprrZe6L8c38R2AQ4bRSJQBL8fvaaBUHEZuw3otV8hcAhvxT8LiB71GyXz72SijvbL2HWdMG",
  "key22": "2zqyKQ2x6y4BZW64fvan85k25JyVNdGCVbPpS4X6DG2oFptoUn4bALCKgidaoik5gK25oHpPnJ3JTuX42hJyS42u",
  "key23": "2jDXF9PdXtMBMoUnBVKYqPH73GLYf2yHMn3n3JdFaSi1ju9THu6BMVN5QQPa39n2UhC2CULGke3RjmDLw1iX8XLs",
  "key24": "5q2vAiqGfRnREumx9nzi5JQXStrS7wBD3kQ2qzgYexc6Lg6ASXCFLQoH2MWKeLMdLQ9h4wxyjej1KKMWYm88WAAF",
  "key25": "4VhrHciFZwWeEBwgUWqUws6gAAhiZ9JvVR9sFejBANByMaN1YX6pfLck1Y8VHbnMx8Sbn9usx3T4ncahxP6JmsMf",
  "key26": "2BrLEdmWkhj7SSAER6BDSUjR3NFffYQViNc3Djh4gJB3ZiAuqw6e8vCBmSRdyfT2ssmDTHkY23Wbkh8gtuDwct6S",
  "key27": "2UmsYyDfdKBUb2D5xKKKYKw7aFsUbtM1u5U1TsSWGvDdyUJ6EobeAckJbHushmJYCW8hL7yF5Ck5c7zoPhTwR4D6",
  "key28": "49mv4aTBX7HnS86gaGajsJcJhvvspVougzVN8nJrun6phKdmaKTvm8XyiUCVm5WkTM3BncneuRbY1eHUrygWqKXd",
  "key29": "59Tpw2byCHbrNaCmMJQP5bVf2jR7c6mHKBN4VW3Ya31chZf2ghtTnC71RopEDddqGqs5LjDn6xpUCDSpUCPc7TXR"
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
