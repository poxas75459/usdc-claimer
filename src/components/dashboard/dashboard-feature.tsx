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
    "2E5PjQi5AdnsUvv4qjaJBwXkbcq6TpNPrGGFDz8AbBSKMc8SURXuSYWUCF6X5vv9ceHdJ8zDd8A3xXEctuxjKitU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mkbLVxb3CuRSEMRXpsKTwvsvwYL5pNQZprzdF5RNsxDVLhiH6uVcqYZs5wFudPavxbTspHM4f1qiNsQUTVAteGx",
  "key1": "3NygAS2rfmXcFcRG3a3eXPFh8YcrnVw2rn7WRGuLebWmpwHwcsj6DRQoucKnnXbArgUNSD1rnfajL5WzCkq3WJkt",
  "key2": "VMoSzUEB67JeBi7acjRZJR65qpsu8YopByj4kMtjh419et52nfMUSnVGY9eyzkxok7QMcAaXXMXbx5122F54XED",
  "key3": "4TW4xMjUmctXKkReAfXfZ6Je4rrdm4McJ1fLKoBYjJpoe5hRdRQyiNKpyMzUCwNDAMSozzR7fGw3bvKhakketgCq",
  "key4": "2JjiN3Wd3bHBLsERtPEHxnRGPgZL9haah67uM4kk6NZJT3kWymwwn1yTcAqtMYvDjYm5A6vNKiJctyqzc7PyjrCQ",
  "key5": "67JZQNF4wYb7pZrCVWE8WLuQRtHfSCJX5kmpriNLDy3NFmVXT1Xgik4DQhpXfXV5wgAMgaimzGD9P8cNHYnVC3LM",
  "key6": "3Tf1EHHS1vaTHN8Cdxzkbo63RfGqCipgPJim2ArKDJtP8DrGb33TNjRg5VtF361qR47pw1aFy8ynn7fu1qs8n8wM",
  "key7": "2pXyMcxBLGFyJxixbwS1Ga23Fe3TN34qKVCxn6cEE5BzVsHz8Qpzvp6iZmaoxdfg63i3eGGcKCDgUswRN2BWxCfZ",
  "key8": "2p82Ze3tF7UgqhjyFxqhmMEjJDDdPnkVtj3NufYtspHZFjicJDXD9n9K5tPmTqXsJDk7twda3qcJytx4pYLveDqt",
  "key9": "Q5fQg1UNA69xXZ58dCddUdeR7aqRsr6jopB91gNmXzYN8QxWdNUqGmWbArS415FneB1o85mHKwxnNNHX3ereCCj",
  "key10": "RVXdkWnTTQPkqTyqrfNgdf3Wa2isFBXecv7nv7YXo5rMaBAwFetqtxZKwHU79dg95Jhch3RTYiEDyvMjc5CpKPp",
  "key11": "5w4kaCFiaiVXaEksQvu7sud79zgrMVWV4iFLnoNHEnqiTZhsn1iKdnC6aVKBSnkf6hmHn6sxykyT4oUFGcxExoKp",
  "key12": "47tjwjbReqXQewxzsgc2yx17LDUBFYJc5ESKw2g2WvWo3LuUsw6YN49ERpxiptmr7asm5gkdCmXKzeFxo1U1Az87",
  "key13": "qWLcM5dNDADXb5naXk82Gx7vwUHoAicdi2X4UNTd3pepgEWLCT9ZaJ9eWpzpDKpVYtdLZn2YYg7jiLM7EjstT1X",
  "key14": "sRVJYXEHrzzzZsn252BAeLZK9p5nfMQww8a4hgedv7vY7t5Jsk7jHNt6FYdM7UVWaBFt9nVgNjP1yeA99VjYcBN",
  "key15": "4LCRDBeHexkothxZLxH7e2VDWunJHCVZGSd8guHaBwfCmdShbnDH279bYT2uPZzo9HuFnSE8aVviimxUwkD4VefZ",
  "key16": "biBsTULesd3npke5oDSULtXxkRbZ9A3d69EdKuMjNa5morGhXi6tkSKpkWBHcLPNyMWBo8gHD2rtdPVy2D7C5X5",
  "key17": "3e8j8yYVMYvMX5wfBFdJeM7rD1stoGQB7XdHCDpYvMmUZGHR8tFRozzvQ7JftwRgVYfNjQsBgyYUK7v1uor1j8y1",
  "key18": "4m1Uzz87KxTe9mRJoyvpjTJf3WJmS7ys5RmmT9kQ6rpUwrX7kPsiWJePMWZ5o14ahZJBRvZWnxf8T6foJ2tYLGrn",
  "key19": "x9oVgey3VgwoaBzeEoHEB8wft5ZmCzvunEE94skeDV3mcuyLaFa8wKiPHVZCiQummKdDpJ2FcNS8iUQzPoEV9K7",
  "key20": "4t9WfskuoEVtF5YW69gYXBuwJnsLRpmUa8WGTuiYPB9WaQ5pS4cBveERYiYhgVcKtmKmqRcswnRzVqNjFN4JWSmW",
  "key21": "5PPbVdqgrNRD3RBJnsCnBZ2h9KYDyfJLj7KvqAeHFHdtdUoqD1PKdG8fhFF18hZDpCj2AX6cznfoWEcVrBceCz49",
  "key22": "5yQ7vry1QKtgjwhboB2YBY3mD6ATZN5KU7a5qNniX4mFc2S6wLTPnE2dQTWwTCKZGjdFpTmiXhuGT9QcThXwZ2bv",
  "key23": "2CANDvu5hn3Y7pqjtG2Qx9Lv9pSse1hXPKMYffia7AQfVjgHdiusDiGBjkBbSLqErype4u5EGAqFWHS9EGUGxPQi",
  "key24": "5oCMTbmG4c5g7iYTJrnrfqJRKz4JKt2ArFs6VyAYMYTugyVyELBa7ksbPSsEn7dJQmKBVJN3ZNLL1dVoQnp3wvHp",
  "key25": "iYeZBQqcf826YwBcYNLNDxqJF1trbYaggPZTeRcicA6agnTEqwtWrouCk6ogmnDcDiBK1ZBSTiRPmmYXsV3uGcf",
  "key26": "45tudQBRJSs6vARBno13HhNnqfnTWK5sVCMRRYZ8AzNY1uSG45gPckXDiVPeM3Go6vPQ2AQiMqrxjDtKdQxxdZCd",
  "key27": "5grPwfhpyt3hwAUBtgbGxdefEcTqcnwSZ1en4G9hn3m3nUrXJQfWdDEYVsrukTP4XEv2D84ceKMHWS3tvEzpyi9h",
  "key28": "27fr2UQbutS2eSRJw3xuLpQd8v4DWZjRmGUfN9GrkGZ5Yix4zJVBMRPjDiuwyWgfK8UjMDin7Cmp1kFL4ZFHeoPn",
  "key29": "26yNegTqXyjZkX1NRxqU8ikD2yku6vYL1DKmoxi5FvxQNJVtYbwmfeTFzDtKHsNxBUwM6PBv69AwfRXVqA9AXnmv",
  "key30": "4f9f6GTquvEVTDZ7HyVehscqLP3wmkZq8LnkUE99RTfw2BYi7dXa4CxoNCNGrEJ5YszBqgTLYS8wz885B7y49h6Y",
  "key31": "5cqVX9RV1PcxWKYknfF1PttbMyFUnVdbVLwUGQvMbVsCNm6EAF2dfrRADEJSH1kEhNChVdr3mQRvDZMWLisAoKs2",
  "key32": "5neGXY1FaBxLinTdZQZDdN2gEXFKEpgDoEMYyhZ9cRE4AJzdf2cShG4krLwH73ercj19y38Qej6sQ26yScayqkkU",
  "key33": "39XZrT9YuniocfbowA8TxoGGaKB77R7FQ3zWow6JYrYKe6i4uJQC8hT6Jzyb9FjF57MPHxcwgHWwtn9ZqhNJBM9T",
  "key34": "5STbqhmXQzePJftiurzGeTute8ZeFht65Gwk1kvAUuqrVqbjs6LtvZRDCgpZ3f5wyiECiMkN31PgX6B7iwRQc3VC",
  "key35": "2agdgbtLxDbf2q2qauPY8LCXpjETLqASagWo1rgU27ie8kL1iSztBN4egocXfHRGwzHjHiPuaGg6r9yA2obLPjoU"
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
