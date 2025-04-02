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
    "3hg64DsVfACEwWreXCf3tncX7LTdyoeHEzt7LeeQoNt5YNQC4PQgvso53ZajKdY7xN7erpVJxbJ1nd4Dvq9xPcn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NTcvKFVy5FgMxe7hhwy41utySSfTiu8uFdj7MHQWsdm3K3UgYsxb8oVQwxHd4viY5BH3UNnpxdv5LfftpJddHY9",
  "key1": "2drC7vxAuPWUhbX7YdTahnZUo7PAx5D7HSs8C8fouoNNnBRrU7sXzFW7zGDSEfHVjmD21ixjNU9ysv62ob1r2Qjt",
  "key2": "9qABMcGcNV4UZQTCrccqPSL5dXbzKpayaADS2TyNNAbhgnApfvL8jyZivgMhH3MUQemoZz86FjC62tzN5jHbwDx",
  "key3": "325st12326X9yipE7x97FEDjQuenD6srF2sRL3gtMLySUYZScbU9NU6AkqY8UFR9rY2SuVn1MPBTMahkH8pfX5qB",
  "key4": "32CMq156RxvCvS6wDVmscV1Sw2GPase3wKmuYVBWg8ZdgnjghgeVMofxTnbeNikHJRd7Td3jnD6ecUT34yzzb7hi",
  "key5": "6yngULSSy7eX49rW4yp6eo89BDsF9FvhUPGpXZwjD5iy4kfFAacih43S8wj7KP4mSjN8ff6PkUADJRDTGEyxZ4s",
  "key6": "3QpTAbTYBz2ok22tG6P396z7aBR36aUxHyBnap8Jz19hzsPLe6rVzyXJ6j6VhkrtRbySAc6fbD3MoeU8nSiBYgj9",
  "key7": "67gcx5by9ho8TXDenjv85d6SapNQK7nwR91esVdg49nTyXX1dSELNnM18GShABUo1CioJzBR6adbRAE6DEgyuS4J",
  "key8": "3LFnuoy9ZoGQqhwgpyqEfkewKGmPCML5wdfpBb5fgMAm5CVswkhDAZChnx28ACKvgzfW6qp7ibmQSA8VA15bWPhq",
  "key9": "4Bx7Q6Py2sFbQMywra7rCQUC2sCw3iNAm8dxrAEqNYAZdXQPQU9BqP4hzuQXHhjDUSM7cCKbRv34xd8Lc2XnHzuE",
  "key10": "2B661SGKp9zAqWJS94xBMmBJ3u7HU5T1ikLgQS6ZuLc4vBcMkHnuzeaa9NJ7pQ8FmGvSaMuJ8RMekDJ5nnuZP9db",
  "key11": "4zTjAWhk6nZcaffF5w9mDfojZ4JGUUwewFTHeYUU5FE8JJg2vfGZbpQyES8dcwRrMZ4NurVPhsbZ2E9DxnZChDtT",
  "key12": "2wLsAA3V9fWqsrVghRK6YtQX1uqvZQZ4ZPs4r7xo4oAMca7Bz5bsvnoUHUcPXWjbQhNpg1yeZVAZAUHZqXgZyvtJ",
  "key13": "37zr1uwNRYvpaysUvZSmXZKFXju991zxvqw8GH7csJQthfP4skdHSZQ3vmSYhojyjB6ox6vTRTuaZj6tbq1CpTXK",
  "key14": "2NeKuZdy8Wbrq8e6JRESs85WhbMdPnoLMBmCe91ctCyas9bQiYKDDMNub1Sbw6iSXBubgMsgxE7hHityqSenPtmY",
  "key15": "5EevkJfu8JkEzpzXnPgHa1oEYWtq2E7DyShWZhaPtRMZMkm9yPQ48275mkY9RRiMESFZGbpxoKTX3t6ffg8DLeLf",
  "key16": "4XwSHSHFGtKdQz4kzwYEzLxVqoEP2bEFaWa5fEpvmqg1PgmJAzWm8hWx9TXqedrJ64sFr3QVq8KM5j1jkwYdbVup",
  "key17": "26oUixwAjk3LJ1QUzvK55vozfjcsJ5gp2dHdW6ygqsMUaiMPPbrTP2KouWwXcaxiyQXjM7drGjBYGgmQ3fQWfLcU",
  "key18": "5nqAupGHNQNvALYhqn43sn7NbX4z7aub9562hweWpi2z5c3zEgoSF1JQWEhEmUem76o1JHJnUvtMHnzhuW49pecZ",
  "key19": "48k6PwHeAySCwB5VBKchNGwa7DfttfrKGTLVKtva8HM9yUT8PkPTCsg5H1V6HJm3nwPJNjFnJB3G2FKdZPcFEVkG",
  "key20": "2RgFomcivk9cyRcvBipVimcnc1Zz61kMUbAuSJDQ55CRuW6nB3mMmcFBXNm2iq3Q39SWQhBToh59H9rHPqdwAjFY",
  "key21": "2gnTAzmqb4Mw12HxkRdJkHU1Hu2CBrX1gVFRqJBXbS1nvR9re5RSQnP96y6cf7HZKBEXuR5w52TxstQytUJaxbhk",
  "key22": "5QMyyDeGYPrXQGBkUCsUh7wtozv9VNSwDAHafqk5LjWr82mjcQ8bbMpX2xF6F1J5cwbhpx8dkYie9tTmYtX9GpZE",
  "key23": "5yQ67WpfB12hb6jCyPSeLFFUVDFavkmQttTkoe8wA5SPLsKafyZ4mKEh2w4T9bCtvbXC2LDWgTNnYKAfDEnNciSu",
  "key24": "QMvpZHCCUQEdCdvBY8Hzkq2Wm69bGaRmkdap7GJ6G3izyzgYZgvmo1cTPV2cfQP3qVk3nT99Mmco1Smhus9CLfu",
  "key25": "5m4G8zZdNtjcRSbSe1pmBr5FD2zJUAAGmqgDuYr8DGJaZggTqpUeQiVsCsDyzSJ5jVHsJCQQGuwXQwZVFcAEb3pK",
  "key26": "5Ps4KwNRnwdPrRi5Ty365yugXcaiVuodmTSjojc1iSsRL9wcZRKzwUBx6f93frkHjMw5xXLhSaTeu1fnWdA2SDEt",
  "key27": "3pjU4WXkMXXigCG9GCakcKetaV6ibUjS9ry1zGhmVxCNLB5iV2VPQaPdVikbY2nA1EP7B9F32W1kisRr2dh5eiNa",
  "key28": "F96muRjPLTGbiAcsfW8QAcxfZ4NcPv1PFLV6xkKVKYx3LJbyHgG6j315HoNvcytWPbPKy6ZvjLX1qAao6R8hGLq",
  "key29": "4FAgfZ3ioZkSLqhPWi4urkUxRSQjqmx8GWrh1ypRDm198xrEK9BngGiMi1rjwZYZHGEww8SNJ4rTcUtMkHr1oWeV",
  "key30": "51uBXafxZuYjDxJPXSLHPV4ETRNJDPFAN6ZSDmF7gxLSxssrXfiZxgVF5L4zw7w7ceenkP1MrjWK1ZrTckLLeVSQ",
  "key31": "scyjLhspMaCyazAUzrbxphxdYtPiswAfxmLnUZ4RUvASVsBDFZjGXz2zTNmkUvmfA7roY8e2zWrhRbn3GEq6GWj",
  "key32": "5YAb4nsiS4NeAu7ZZ9nD4UDfcvfqkdvYM82SFLtpJMLxuPx83RphseRWyxdaNp7qAwFm3E9jNmZy5kMnDYhgmowg",
  "key33": "4kfTcfEL3gxCpNzksfYfQ3PL9Dth7UXQ12UwXEyhMRxnoPnTWoYrZgkG77rRBGoW6dRxr2RhtiHY9zPFbwQBLXLL",
  "key34": "5nwQ2SQqUHbsNN6CmJ2uVveTSWkJU5EFegfEAoyUMKqPELt1wAVvv9RcS9rSx5RnueMAAkivQZmhY7XAcrSGnaX9",
  "key35": "3scFAWsK5cUWxwnHecZmusWx5m12dvQBXic4HB6YcJQXcRZG7jNvNjDSq1ApqdmLCy5WivtFocZvz9mcWKfQmDsG",
  "key36": "3Xd8TJSGtp5cd1YrqgCdWEaqkzFxusqifuK95YJ7ybxak21WcCcEhs55MRc6TBDqHEvmrJbgexCrX4a2nXU6fszk",
  "key37": "545fKPoXFh4Fo5e9xAicw871VHagr6qfgnWQQcGiHnGxpLrhKognSrGC3MwZgYqDvsFmceopcNqGaFEcatG6JEJS",
  "key38": "YWGDbodsgsoKzWYPndsamAErYWrt7umu9F9PCEvUMY75GoyUU39ap5AvU9Dq6C93C6YMZAZEuQwLXXDvn72vjom",
  "key39": "5EwZW4nab8aK3eCisuvXhfThnsw5Yn83V2obhDyqVgs8TQieJ66ChUCo4uyPMsBWEGnMVaL4BwwopXGraALevNFh",
  "key40": "5dq2MA12f8q4PSJLVmX19qbGbLMvFujgqMpnM7ZVQrM12bAz1KKFkt6YgGKkaULNRacHpo1mtddMtsW2JcyTKmFo",
  "key41": "481XKSy5Wt6ksPGSMJRoT6ffcZxRq6nNzemtowJKY8AbgQLaSuNLEJuRu3uJcBVVS9iE3xUuPPtzFXzQCWJJ65MK",
  "key42": "2ijfGazrbZa8XAL9Y9eDrYqxZHwgrC6d2YkajdRGwFkQSKtRfdcfv2m186kiZcA72zAyC5idr6ru7X9od6uA3Uwk",
  "key43": "2uuNJvqYGv1xcuX4xE7aqKNv1fMNaVSAX1oAz44tXb4Mm3kVERhA9mWnWXdph7y8U7Co1iM1c8nJ5Tf83UD5Gb71"
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
