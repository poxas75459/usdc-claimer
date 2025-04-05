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
    "2ysZzo69mGpv1Pm5X5MQtpx4urTxZmttbAboQU2o6yYvjhMHtLktG2SAQwSJP4PnieRkh7Ye7Wu2t8naB7MMAGso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5huV8B7mdncZd98TbiiSrN6BMKoDczxGHps333Tyxeqnua3W9BzpNNcjJ8GSZWRaZtxcU3UHpxeCwJjxFzNtwxT",
  "key1": "2BQVPYwaydPe8uDVi76qt9h6imiaaCu9qLEuHtfAasDHUBMdf72xpPNv7fWN2cV5EKLft6Fsr3WiCCvuDvHToBJG",
  "key2": "4ZZ4zqvMAB1Ss1qTWYuBZ5LriPY9qyUbQWmvXDfRrpCEGYKhdB8EvdJ5EvX5fA7tyWZWafw34KdQ9XratFxbkiko",
  "key3": "3q7SPo7JituxvT84Tpm73cuTQjz6FTT5SSLRdd7oZCKR6uSBHkXEX3enML6bebPjjTwQuemrxEvySJjSUyCQ8vx5",
  "key4": "4ecaYix8Wo96Es2VbXekR4jsJ6tkJer4b5fCn6m58LDxyAqBfEoUjne5oaSpxkUJZfYAeNuUJ4BC29B2KfeHfdeu",
  "key5": "4XxDm3xhRP2nzc7RqWBThccj3zKKQRdeFjCtZ2viEx5pSkQPMEMjQ4ao5X2hKTGbm9qYKFT7f4qF3v8PUKZwTipu",
  "key6": "5KqAsY3j8KVN44TqPRkKQu74E2Xc1aHLHtetcsKTKQnqNF4duWL9ZgLMomX1ZzSAwPrVDuAw6aV558G6xd5aBk3g",
  "key7": "28owenGZDeYFTTe7KMswowp5CzQHXBccUpdNzUKqmuWs6fY22TdJ2EEFabdWr1H6VF1dYYBBCMtDUCvMEqfELZ5v",
  "key8": "5o5oeEWptchvUpCCGFL4yb3G5Ugh6jMAwiyV4vaJtqPFh1U2zybg2udMfrJkAZfuVV3MC5m8QQigu5pdd13Cwpf6",
  "key9": "3p8XnmE4RMWLiuWWEZkdW19Wa3BFYmRZzGiv2bujmHYsR3KRG7AEoRpAwid49hWaj7i1vrg1wFG9Si9uAUpEmh6",
  "key10": "yEdUZGxfqLij6QuHhbcywYH3WurDhCXcwDbRCmzHKkwmQyeR8GwxsNCM6KdLuKzEVFkVpCFBXccJGpnuSZjXeWy",
  "key11": "57A1ZEujmnBF5eDnfTX4P3C3rbLmGoNPbCcWDAYoAkJp1sE7AmsNz1xJys8txndkjtwiLVjYKB4pcdaNT2W4rP21",
  "key12": "5BLXLEKPG2hkwXdH5AkTEjDZW5xv5Bpr3mZEZUEJSLkSMGjX6vvJ87sZkP8KRtcB8Ezz6bAn4VUhb9mY1yJjVM5G",
  "key13": "4HJsFXR1jCAiR2642PpUWBwuxA22XgQdBs65N8wtENWZE6NsTbsq4jfomwq4oP1wL3tv8Q6NEzUNRaMg9XQan3wY",
  "key14": "2v12ZjDjRUN9zAPuycTrgpw4QtnMBi9AYCea1szh5XiFBGxsJMsXJ45pqwXswMn5dkoF7hciLEYuC5Ym8XGPD7wk",
  "key15": "428dMupyJZaJbJTwJSdobmNMW22dXuWJWgNPftUVyGX4Eo5m7EhFudGLXhnxFJhi1B3VMvT6aaVjs1hacZyy1YaU",
  "key16": "ipu1btoB2bVMTTGikPgGFyiwmSLyM6PxYqw3s4xyHqSA32JhkMPp9yHcWSHCriBocyiTPNHCpk49xYM5aZz3ZNG",
  "key17": "4uTczWFi5GpaMxmEYgFrNEK1i1U2g3cucsqwRm5gyft6m6RvWzTSB3gY42KSjeXY7iv7UaiK6qQ9LGu7X19Cw4XW",
  "key18": "4MSrdtnqRi3NXCi1cBhcae5H3CxP8mwNtiKbFVmhFCWvAHESKGAbYaRbN8nZkD6t9HmCeVLAvdQkDUmLKrDfPWGB",
  "key19": "5Vj4qGMmUU4nAZgy92ncLTCfsNGTzVAxCJG43srTQZ5WgdEfqqz8qSiJcGTb5F5PMuPj5Nw6KBxHquopJA2LH3FJ",
  "key20": "5PfmHBEieqeDogePKMYuHisVhLHEdpYAMiUebdoyNbfvdVzzjGGUVGpkyqJVopm73oVi5SwPyPcg1Z91cZFNix1a",
  "key21": "4yw1eDLnzsnFHHesPLh9pXuWHctwSAsUeme6zkmRyanbhj9QVDZmmN5YGM43zXVgooQg5uRa3DZBxgYQx8exQYyP",
  "key22": "3rXsgadcRpu6bjWTj88hzujCEd5zsf8fbDQ5KtfMAHscsj3v3hBB7pbKfewjCtMUURXKNabuXLFUXyUVFjbVfHU7",
  "key23": "446v8m7oB86W4VtKnoCQMtFWZZMUGgRSFShTju9Cy95vBgbG3myVDofCDWMpzjsRyeBo9gGyEXVLz9UgW3TqyjWp",
  "key24": "4wWU6XDXYeNzEyAJDVuuNXEQNVNXroEL372mhsMwcZcZ4cD2BZiExxCQ2RWbv7UhpVKxhxHEYyw2KUYnrbzqUkK8",
  "key25": "3qS1t8MPvoF5RkcEE6LsShAF35YbMcoUR4cgMXNj4f1AcAF5KkMWUXKQn32nkhK5dMoRsLiCNrwYmKA31qUsV8Z8",
  "key26": "2eTN2W7fzgevWsJJffbWgQLnoY142F1QVLmiP2UpHhegRcowAWJzqh6t5MabfidEhdTLmXJBmjpZnyR7KG3ePsM5",
  "key27": "58zr4FjhDi9XbsssWJQ8qX5amb27gECKyv8CbTdXnBRzZKyTS6vrzxqgjVxhKof6TzbUj4ZExiH29KeYVRH4gKyP",
  "key28": "8qU96zTrJqbHTfyBK6yrby2f4JVCKgZSbkNR2nFivDcugVv8hhfJdWfRB9kxenf5xtqT92ymhU1QZS3oNS2aA1D",
  "key29": "3jzmsYUwGEuhpXmjHhNjFBvcNfv4kT3TwYbb9RG8qpVZp78k2r5tQ1FQuCiCV9wmSdN1hmtF8b6aEGx4Rd45XQQ7",
  "key30": "3inthHnH44ucWdFvWG71vs7q4yWj81H5JvcNLVZAXso3mbKGxPfUas7uLNHAqugx4N1DxN4FYDzLtq7YyYmWpqvA",
  "key31": "cDkNQ1JqoVdRZNmGE9iFUpwaCDRDAHwHTXW6JZ4rmkL5XxUHK3FyKSssdeUDRq59s2SaqkTQ8YpZHdqghGkfdbQ"
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
