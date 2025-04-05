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
    "brxYwJFcprL2DBH36LuRuoEGfMcAix3hpChnnhRh9bL6qosLdqRazFeCH4gFfKWrPr6YZVyzrmCqBX9vtwWKkeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jt2PLhr8BwHcQzje9YhToZQV1cHpur5En7JBshXBTdtVv3u5UCqTF54ov5px5qX7fHRSNsQ47GJ99EnyZFXZPXD",
  "key1": "46LErXSiPBBwvhA4x2VqthzUvoHKNjS5DuwKw9wmfqmeKBmDu6i4W8gCWnVHWoV3jjHJfy6SJ66ByJeuNvp7QGrW",
  "key2": "4ibFRrBcrjuizWiQBvXu8DmuUrkeQGbSLCyxwYmiywmQwMev6VxNjD3SRzgUobPE45uCaiZuwxhhNnRBZSzjVfTu",
  "key3": "QjgSAMNzxP44p1j3mvPczQoknXbLJVf296j7H2TNZ1ANhtUJhpv6qcAJmyL4nF8HXFeG8SKEqZkXFde4UVfLcVj",
  "key4": "2HvCJYj2xTY3C7bm4ahuLhR5w4ZtgqQ8w2u6CN11nZVrrQgMbtNY8F1R8nW3NBXMLCcpyd1tPGLHCSBnkLQ7ThX9",
  "key5": "3BkdJTfJ1MVmMvgiE11h9kGSjgWTDVaMgcZpxFhSxXYQMcAUa7wkAGmNJ1Dj4jfCe9fozQa7drt4KfKQQzixfsqV",
  "key6": "4phmt7gn4HTXaGBHEizZASN7tysmF5kRYZWM2wiTSjqgA38wCLxDB6kEiDUVo1tJg1ra7tNvCEjETL8XRVZRFR9s",
  "key7": "3d8iYZmm1MzEEzULJsksJaE1dok8tQVq7qvzfuztJgGgENDZtqGongGg7CuGveANJQBwAkTgPgSyxcgC88vZqPEq",
  "key8": "5s2qdbH7gJ15n9jnxSWsBt697xF99FKTXWdkEKYNR9HMDAWTLcGJP3FiMYFho8aJnjywr7Cbr7mcbDhacJ6oXDLB",
  "key9": "2Dgqzasz89FgRvfp6maZywa5aXZ7Ci9uEkEB1E23QsJvqabB1cVBiYyLwdietqdkgUDGVN8apVhdtXMQN1bR7Re",
  "key10": "3fuW8cRnMJGWQdJX1h3oytLxpCCqBVU8QgWy1EMhw4tBTPVru3E6gpEJP8KURHeEGjqnG1E5bTxYn7Qmyjf1hsHb",
  "key11": "5KDjX2dmzT9x9kxZxMBugUQB3LETki7DB2P9iWGphFTsdCGa4KhBcQkAZhZMhnSch49zvKkTrxzb7sVJqgibnCaQ",
  "key12": "4VgXcMx3gBTsMphS7NLLaxN5qL8vbEQVEsbAsmR5cN6Dq4wRG76zAFG5pPjqqaJsNSgpBb6iZ37e1X1KtxLgxyuz",
  "key13": "5akEV9KHGXvumRQ7CMG6yCcDYtPRQ9wtyfe6q32TBBuwa5iFhpLQvNdr1bkyKjpX6FeNLLZ725fs6wyJByQNJh2g",
  "key14": "nbDB5srSe24fVnNnsC8i2L34U4YfTdwGFa12pkrx3LCxbmREyLKDQEWBLVodeY9n9zTXvrYDmAyGNd12quPFAkj",
  "key15": "4Jpv7GbGUqGKT3raxMbyFgozgs4HMp9TZf1cVpUQT4JycsYur6XYPbPvVAqaNc6ATxRcbmfmrPhwsZf5QwXHQ3kC",
  "key16": "3UMBDwtG6PD3RgCbtN6YPq4pfi2Q9hPvwShF6LTbPwHLBXDWrBoQ6YTj7mrtNe4tc21T1X3hHVD7QbgFegMnLwVL",
  "key17": "5PsgFCuBe4hK81srDyc8MG2nMVaH6x5ABLJaAzTx9zJZFxUYNxRGQyT31CX3YrwdiX2m5i2GQ43NdHvRcNnH4TC5",
  "key18": "3dGiFTjbhMihfFEMhPZ9fmqpzM2WbHga8Dd5uBNYq1y37manW81LMAM8KFh3Fnjif4jvBVkEU93DbjSGFvpKYmAP",
  "key19": "3R2MD2sFtKR4jVewCX5gCsyku3ETJyac4fK7d5VTPs1zssu2cYUNhp49ZuEjesqXcpgvch79AtCcXzLZGeV9nk7A",
  "key20": "4YPeZVN4j49KQydzmQTQ2gPKGJTEiCu5vq9goyCmNsgZjzdp5j5q2uuopVfsg7zGMwMuVR8iw4B93pWhBL5X4pyx",
  "key21": "2zcezQen2cQCDw67BJUrQvqifZtzo6HKiXnGhfE7W37SXDnfzMZXDahFgUKm5Wmxu22PZ7Tf3jq23dSQFAFZ3oGt",
  "key22": "5i9Xo5a75Ds6ven6bvcpk2Y935tDu4rvCaMk9PHEvg3xpdyUubof4dXNGUzwhfdqMhwcMHNgXQgdGPyr8jMjUvHB",
  "key23": "2vguKPfYxRFJneeCwQtynxi1QvJ9pXw3j6E86AEnUbWNE1989Z2xaiR54C43TxmwNF77URk6t26zGJVZoDPDBteY",
  "key24": "2kv4JbtYTH4fdacncGQACKxtsU9T3QFmw99U36ZY7aqCfZ6xvLyjAxYUKVE6rgHHjyxmWZHnQBYFudW2DsmHAV5b",
  "key25": "2azwuDcdWT1hNMAcmKJZjU4k8ogzvomDPCkSs4AGJf5TDyjrh9Wnqj8deBty5MHaHjrKaxJJhMSSPDEKKnHRwod6",
  "key26": "5RdLtCEXEfRqLiHRZgJhQ8DABuCyaYia6MAuXMCST7jz1EMh2VDypnceSyDQAHQ4dc8VGbUgqFawFmXYpdoURoEV",
  "key27": "5Nnmv4TUPMXPCrjbgGcYqypNgsi4nw3AvnBKuKFzeQPWtHyRSGCfamhsJ3dEdqtxiG9jLoSn6wqtfkaofgy4E2GP",
  "key28": "5iyk7kWpm1MQtaN7wHdEvH12mo4z94kQQNt3TXsQCejNK7tUHtF2VAsQH1CJ6eHNtKtF5zAkT9nVbUUjqt3jfWqW",
  "key29": "5rL4JZaS12aZk2ajG4PUuTPycHAgwS9LMDEFiKvKfzA1RVCsgjoxGFxoyA6TQSt4PPYFLue36jNTMJgn28C74PYd",
  "key30": "4QKrGPptErKvKPXtMva2Wigh2eJagrcfdohSqZF4asBJhjhzr8Ndf5Hdvs3UgLZaZpt8aQC2vkLQYgQv4HU9JkbF",
  "key31": "4Kj6SAk1CwRhYfSfGs34kLmGKk2QgLKzUMhJGuX3Yhk2Esqi1HAxaE7iGWFk8KJNNQVYNRErLwmyQbExgGZ65zc4",
  "key32": "4VRtZAZW8LUoE11mRK6xxx9ZKbhHmXHemhxQGmkCqnePVV5D61u13t9urW1uZ5ziisjEjMWA7afeNawREK9fhgcH"
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
