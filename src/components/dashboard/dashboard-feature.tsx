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
    "3cAm8NYVnZtUNjE4YSsSXCJxhzEycTR8WNSaMofVKvCHC2Y9UpdMJMxuXtzizx3GPKA1Sgz9fy8oGZHwWxrfPEpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G44F13ADRUUx74jLkHm1NCcajs9wCFMPncbLrt3Ab2esiD4jMzmkjWyK2KLAU6Ly2kKKYMiFs8bjL4zWGvzN2kK",
  "key1": "3g9SruH6WMFYcRiXcek74pupsw8pPwaodtvvyay3GnF5WrzkhizYMpJvH4gBEHovERtgr7K9kDo6KLvq2qZCNw1E",
  "key2": "5m4WSBnwqYPpWGmXmt9ugkugj5PsDoG8bGv6y6TJ8Zv1vY9orHdd8udhEmd6e1nxvGgEiAdS7Lq7p79nmohRb7wy",
  "key3": "65ceG1i2zywE7Civ9EapZnFmXPAeksGqMRVsX5tubMKPCBX4cGvCRqpCHHfBudKvBKvbS8zZMzS4X2U6pstmxUcx",
  "key4": "5rhdhfQxoks6Ct9g1Kztoh1zVULo9Atq7uzrTKdMWpaLVw1we8uGhvvrKBXR3TCqs3KLe6YFbccJqG4SsT5sRmPb",
  "key5": "2VY4cAeU8RfSKcaBHMVd6Y2mxeW4mfHTiWJSZFfVpdrD8EURF1Xon1yPryjpDtt53zfxTmwo1fERN6d5gFFToEAB",
  "key6": "49ECFqocnJXi6L3W14XpgSoCQbAXkEQmp8sYmmx4cZzEBUWehSivkp2TTkLhpMUrYojDLcBY1eh5xwF8U3DePYpx",
  "key7": "25mBM14sVLry5dLh5i4LzweiuD1tpBsyEmN3naay4u5PzS35p5BdRK3QGVR5YpLmkZ41ztXRLDfWxSKhXeC7CeAh",
  "key8": "2VtabsALzkHWoZwKJaMDznfGeCVyTV8cYGy9MB1gMCfvuaNn2r8AktE3TCXootjCsMbQRwGS7gVw6iR7J4t7WoSg",
  "key9": "4e9itLkuf2VYpJe8sWUt4AVp3NKeEzBLSZZKY1nQM87nj6utuWPWntNRAW31i6s1BEYiZLV3akrnn2skM7vD2cCc",
  "key10": "2r1Df2R46KcpkDm3yPBU7JB2ACWmyrku1sT4xkxFuQAUX6t1ns8wttbe8HKPDfKxfoCpMpmDgSReWrWvRTcfuoh4",
  "key11": "3FdDE6hToAvjBxeZESzKNTKWQXE3cy7hUxswdJiqcUmejRxbe9iCEfHhCbucBDo93bJrjB9Wt82rQU1JGQhG5ei2",
  "key12": "4zdDNDeZyyDkUf6rr3PEHFWqfjdpxZ7G1ECV8gj7bbzg3MSe615xmu1VKuTLakVQCMRArkpoC6eWT57kjNmvniXs",
  "key13": "5d7iFpVb3tS9oVT2uzaiLSeMoxJB9Psrx9RRqDSwxvtLZQd3Ai8Xx5Ns4Y4SHhN12Hy6EUBdUL4gu3BX8mDovFXb",
  "key14": "tF1EQNLbHySworXmo5qcbRq2sMT6mPAZ3s1ndsYZQdMNPDWNNx16UTs6ngQWSEQgUdMDC9AY42za5kHHQYuSz7p",
  "key15": "5DcTMBdWYHpKdnQQKVhFsTwe1GMzjmHTtYMTqWqqW5n1b46zkqksE1YKywRta6DBZANZLZPc5MbsFPixNKHbhXPz",
  "key16": "33twfqdNamuP4XhpQqumfB2AKYfaExnoBtybch9TXQvLpWWGKH84Cs8QauN62NbJYaVviF9dATapumEm5uM7WmTh",
  "key17": "S9WSRYCJ2f7N69W2EyR6N24ZL4CBofRfFdR4VvDj1c8Y7cgHvFgnSizq2zxDcBmkJABgSrDuogod1eNf13K5Sqk",
  "key18": "VLL3QJYULSmmuWnV4VMXUzkhFJRhaLB8TTnjqscbRQDwLd8CwNcuwrHfa9KqtPDGpvhBQKWJrWTZePUPjjZSSSX",
  "key19": "5wzaujzLqgPWfDuMTVkWhXNdQHcXCEQtFYfxM7tmSTmFNDLTa82xAZomWmyG2uV3U5nq6E27HJ4qnDS9gxisdHjm",
  "key20": "4bcxcriGZ1o8UMx7yfTwmzvjtNZaRGAap2FnU2SaH6A7AM4zTnL5W8QPzCQgXg46G3uHECsHuJ2HcmgN24tNhC3w",
  "key21": "295zdqK4FPUd6pyQEp5yxgWduuKEtnB1DPnSbGBK8WhrEP4x1qRCkKcuRFu5HyzwnRDbAhcydkknX3HoadZo7QQC",
  "key22": "54Q5kUQHCpFcBikiGoutcH9Zrz8uLXLbTJZWYmq1yozGY7mz5AuJnBcrkzXZEgWo76jYZ3Y9vKsw3bLuzwmcKBe2",
  "key23": "2joz3rdUo3SRWhUDtStCHREhPakgwM7mV8VxeLkQMvez5sU8gi7ApPpYzYp3ENLoMUHnyVNcfFtdAYfQF5SboCSJ",
  "key24": "3eG29BhLKhxLTmwirPap4e5hraL35ufSvJvbpGfcvLbbPDWH6kEFoqMSnNJzHpatefV7XtpUyUrVMPhhX8HfPr4s",
  "key25": "hu31FjnXfCdkZAdUn2mWc1xvhKGfNpse1rkoYqDQUisexNAj7i8QjYspFzeh7FXbRQ5aGtYmBHdfM3yvwszpwRD",
  "key26": "47ZwHHT2QpobqQxgYq2sQ3fXi17eu3GWpx5hjSj6xyzXhSGtkTneWfcFvUiZH7iVmgDF3SWoSkEV1QUVb4QgsV1n",
  "key27": "3rCKpju6ePxidDG6XkttU6ri5KvdjFcGbKDK13u61RcxxcEtjMx4WWue9zeJZmWev9HVxuoHcdpHRZ1DXSnQq94T",
  "key28": "5ChVZW87AyCpEqEPPi2HfbjcRQQHcwVFyDQc4WZHJDmVEV4zYtkkTFQtsAChngwb3ZibpJR5WsKD448yWzUvZVXa",
  "key29": "5KZYYiTMG1vULmVyTov88rAk6QSQANEwBGdjRDaN6hvwZfwsaxG4KurWHwZyLeqB6Ty4D9H1vXAJQqrSbfqpQfA2",
  "key30": "eEwQPDLDCU2eFnx6NNWdibpsxsDeeydfwxWdajjSKfKRb3rLwyiFUrmiQk8iWpNiUpUa2dqZ1NDx4DHpLUn6CwS",
  "key31": "YkSxQwFuCXLSth72NxZzzbq341BZguHZWgNLMs713eJvFrui34GiXiFdu8D7roiQ35TQ4J5vEy9ZguVSFEo9pJB",
  "key32": "XSfyKRqJZiRgTVSLDp7csjs2WhH8XzAivLjfiiQPwKA3tQJAhY83RNjRKdSFqHyp2dneygXd8RjL2g8rbBhxd4X"
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
