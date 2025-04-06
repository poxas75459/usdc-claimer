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
    "uFdVGyCVHaYCTicMDijfsk7EbuSSE6N36FNJYxQwNhqgHY3Cekjboa6FFPLiH6aFZAim9qHo4NahTZuycPaS4ot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1pC9hc5cuTBMCdaWBufv2aEtiDPQLN8vDKX7vk3NfNPLvmgRBtZRUF4pFp4peXGjHj3d3eMd51MmRxauLNRRvb8",
  "key1": "2vcam1CHE28YY4cUFNnzrSeDRTYZsF57nZR1PSJbhwjA8A3e9PcDmX471PQ9n8JkGirNrVXdSotZ2gi3Vg6Y9XZX",
  "key2": "r678MehiVh4rg7RCoSNWYPyHHhRTX9wG1vvpj2z2x4YPAwcxrPUCmw8a3UBxWMNhMNBSkZNBXWvL9EzpFpB6Z4q",
  "key3": "32bTPGHdTB1ocNixoMpoctU7kP3snA1G8yBBk3fGchCD33ZJx1Eo5HzMHqvM6tyxxEpVhKFhUN6hrjELfeiKQCQ5",
  "key4": "2vrkd7J2wpHmTNfAcrjRhckYuN5Fqp8nvVRBxcqExD1kAYnDvPUc8UZT5ZEkkqnmfSM5e7JXRH7XyhfBR4o9Eygh",
  "key5": "4ApRy5TxPHQ3TEb4n3K71vbkXLeLXv1rQhpgLrnHKo5JsfGsevDNQm6UmYwLdsqDzFFNMypiZHbKqX3XC5j5XUZ6",
  "key6": "5R84BhPY3TQNiQsWcY6hxPYA1sfQ3ByzPpuocKF2uc8ECiVFwt16pkSboNJjZBeYiuiaATJyxNbEdamNYL3hyXg9",
  "key7": "repnhK7Aux8AwqfukVDffBdFgZuv4CDP6vNbjKMwzyNwn42NiRAdm8a1cxfZ4V6ddhsDfUh7XwDM7B5QcrgXq7h",
  "key8": "2v3jTqF2FNXLJzUr2Vzjzi8PY9TJkeanha6MDvEAdAuEfGDQ6vQ7ftvFw7Xh1jY5kDipBRZexqogju4s9M8ispoR",
  "key9": "3SYky6T4oaWGzeZYckjcD3q5HPzJCqyRwfjPEJhVkBPFLBrGDzQYZYzpuC9258E36xsiYcpDqGUM2WCfeiChf3fU",
  "key10": "4Y8vVj7eA8RqUyze2Jc76JSDF3gnPTXd6C4AbD7H3X8Yw1emkwJNdmgPwU9oR26FHHXMgEbGnMj2M1sBQRtxz6mE",
  "key11": "5PjugVdNzf7BJjkQC4SYbjjf9d772x7nJkbqSMT9XirYVdp7Gsw511eoZD1yPzEiJoajeKZey9yEm3s9K9mXjwAY",
  "key12": "3SQGVsMDN72sZM9D13ANfVFeTuVuthX4jmyNkMHcBYA71SCKnXLhHun6a44ZaaiCBr4rRQVmxuzzNwHjyDyuvhQh",
  "key13": "dVwgzLeBPTc2vBqprxu1u4JK17FJ3qMAnXF9cBC55JbTFV7LvVjyA3pHrQdysPiUoHCF546e6EHaAfBmiM662Ei",
  "key14": "JCaSYCyeQLuvcC6SUL5f6Zfs8T7ri9FKjyuGNRy6nsjUX1PpzqcFD3mUZR4WVw5LC8bGRNfZxdhfnr4xqjJqsbb",
  "key15": "ytXs4jM2vLtuhXSSbAZ4T6v1avDjnrYbCx5e7Cq6H95yA12menwyf74bpft3G6jE9BFDadJAAJQQMUiS7LBmR7W",
  "key16": "6N9v9XL5o17wzftWLmRK3Rk3XXUsdrome58PkwuiwFsEFSTDCvVCGHNhMEgvEK2wqN4A6fvKtVS2Jn2iv1cj3BK",
  "key17": "6Bjw9jwzQa4yNwd3pVWKjUefkkiauJEyhq9TPo52KxVLAe8WfSMwAccwgGDsreLXpAUJULo3fH9V2Lm576xbBLj",
  "key18": "63vzA2QVmJrYN23styRz8AYTpzTKpUzX9UumrfYyuyyuBRhfgwxu4w2eLfE9tjTP6bfyxAMouNDFSz7DC84UBLY5",
  "key19": "F3mBXmEjQJthTFFgYk8ZJP7JKk1Q6z6J63Um3WVPoxN19RYpDwTmnxuuPTW5qbnXosBNk6VXtyicbM6LcsvShsb",
  "key20": "4WBP7pP4NCxx3CGG9vogZDB76dnPa9broe4oNBigFX7WUP992F7yxFU4exzNEPd4gdKgMatJMkTyvtgVjGnGQcAP",
  "key21": "PACKVzbcBRCNjXpdg9U48N21BfyPTBQZBsmogKXS6XivDkup9yPNdboMsWpW27JB2c4jXYQ7KxTyf8Lc1Myyatu",
  "key22": "JE8s2EDCxTJBXzGxqWxvWXxS7ehPSqSD5fbpAJv4ke6dsz4vHkrv4Yz4ZM4ax7xidEU8syPM3G5k3xPojKvt1AT",
  "key23": "3dQygT7Ngt25RCDwQtPYTqcZdjG5QWoBWihMQ8PYJyibqquwuCKKNXLfVZwS5YsowDjDFWQB9YMM5AVph4moCk6c",
  "key24": "tzmR8uH6HckapZu35EA5gf6ABaoPYicERsnWFdwBXwzhRC1jxaWqskv63FQEeTtWTRtXM1T72euL2HV5N9bBXXM",
  "key25": "SQiseppWFsCpWjjKrtCigNk5gszoD2G3RYR6UxRvZL7bi17Sx4ZBzYg57CYX9mHcsGQcVkRmpuLKqKn9Xk8hf3M",
  "key26": "3vXZYCqy6GtA1hjwqqD74NUdeLVjGH6oTpdTZJiRBQKx9asdiYJ1fUkaBTnMjSHnxisi62t3NRJFMzytPWgtSN4j",
  "key27": "334q3EeFseUSufKSPBcpNPc2ZGuPu5ExyqgjwUCcaTPaCdLocHwZrzXKq6A5yGoQV44T2wvBrZUw9cSwkPw9EoVR",
  "key28": "37NMYEzFNr7vtBzwa2PjjECQnA9MapFQykv8Zgpqkm9aTp6rQHU3HDrxrCkyyi8JYKbomDDEm4kRFt9oKHoHzYhD"
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
