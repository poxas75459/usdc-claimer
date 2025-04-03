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
    "P5QfdpBQRUPkNRF15sCWCxyyGLSpoycDtQBtpZ31ddxJViyCkyjVxPfArYzJmNARgW7zL6dmuzABafcvaD37nMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jQQxc7zmh5ASXcutyCJ6W5PjqV9wgE1jtLmvCBPe7jAbYw6YdZaL8AtnrfCqE6nUaArmSoo9fs8pmAUPQqB6Ukw",
  "key1": "3QEMjBfGUFNXwqZ7zHUCwqf8cR4Gm4frHBTB4dqapipUdo5mJzw73sxLLqCJjN8c5HQZqapjdZUDEnFUYdseDpDB",
  "key2": "4LdrD9oBoLwvi7u88o5oRLG8YWDAQGYTK4DFfFPaBQYseMSAdckoRL5FqDy4ZkfKGaEfSMs8E3EEUFtJdz7MyH4B",
  "key3": "3kCZgwW69pcnKrhXVrMntTp775fnXvfjQq81RXBehuu96XvnSnBsWksepBhkCC9rpJqi7fXi7dinYEAk3R2vut9t",
  "key4": "2CBPKjja2RsokDRBbQDKzP7dYNE69se9sHyXLkSVbkrqh8XQdzaTJhGDNoqsjGuLSWYqjXhQbWXdxqsVBathay6",
  "key5": "5eo5Xb6H8cDpvHEsrVC352pU5EKdRJk5USsjVMEmbkLjzkM54jVmhGXMsrhhf3NKZDurrzLPrQFzEQM8d9U77rGi",
  "key6": "2A4KeGukw4uotzqnUQRKZtRDdEaZJF73aBvheZq59hmg5JmUAR6sgTc1Qi1PTZ7rzTEehdCcspCkppQjvEtESbFD",
  "key7": "5z7LgK5B6GeN9APBMpYDXuzoTSWrN6ujqjniJkGfXonLt6n5Dv316n1WppXfVFjvNkK1w7gnVWRH6brHDGeKDDEv",
  "key8": "TZ5KKry573EyBQEj7svqkoWhCkDhNDacSjtGJj54GwkXN1tq8XXZpofE6mEehDA7YdA815yc9jF2UUWVik7T8re",
  "key9": "5VGhD4myj8BAmnCWhAvFECPySW19MPuUWi47wnL14nTrBFEsWiMyRtACwyX9mLRQaCcAQoJj5hbXJcHbfxRqcSV2",
  "key10": "4y589wTkPsuRE7oHmzzTafybQVWitP7t4NjMJdUmwkB7QB8SerUNB3KxofvyC1BAzbg1tg749c8jfBtGYGzoLu9s",
  "key11": "2rCxN1zxsBAbJxYCXegFqNK3h6y3njxzr1UgJLrGNgfdfHwboNyKL4GbRcUwTwpE46QYbko4jkwvdugReWdkBQrG",
  "key12": "5kmBmTKjL9cj61W1BGTR5SyvQBtRJz1kVSw5Cj4gjyFaMcnaQswYHDGK9x5PRD278K8jpeypngHE2ZMhytxfGGQY",
  "key13": "5XejheBbisFfnP778MJKt6j9bcofQjmaDfbfSvvuDFpzkxMCt93Bri5p3Y95AYX13GcUd8SiZHNbLZJwiN9vTNXj",
  "key14": "2ck1E2gPGt8r41knqQCRRRceJhoZMEGFDuitQeWnRjNENxUVC2xyYYRMYsk5rGcdRZ9NT1dyjYfQMm4HfW574gPW",
  "key15": "2GfdQ34cUuEbco5RLpDHRQjPBn3xZ2Z5yCqSqhGDZUJbJP6DAsH1NFLqRCV6n6oSfPnp4NHqFQc9gbWcD342qTxK",
  "key16": "5aHkajfP5tCW4t2XUvbHArA496V586YwTFMDYDZkxxYpYVyngmitNaccizDds9v1whUuHD9BFpYfnnxGFYK2K7MC",
  "key17": "wr9xBR1YZtmeTGFZh8sLtsjrLEKF3MBXZ5oeuaGKBX9gZx9ssa6kGn6PbNQxFyLa9BNurYtxXZsGgYhjAcLwScS",
  "key18": "2kdiukGRpsWkkR1DDrNxjEpTQUogMeojuZjxMTZeHyzsFHp4xfwrv4otWpKpWuwtzPb3PSiceCre8byNotkzY1wk",
  "key19": "3W5sodc4BimopeK4vF8qiGjQcVUgcRGDPSCK15kzhTzk7KLbXoFvzzDZNu4qT28kv4Rzh3bznHEBqi6tyVXyHNQy",
  "key20": "4QqT3tgMZz8CNFTdc2kbJhku5gJfedRiT7eWeTTfLnGvdLMTdYfTxhsmviKpXyNyNDvqkUF6xf4ToGFaze6Fegex",
  "key21": "5CLYr9RetEvUom67W8iBYqjWFAdV1mu3VQaDgDamvh6QVprm6LjoN6oQXDwdqEwTaRc6RN2w3HQNTJS5cQuEujgr",
  "key22": "4Kg6TAdfXfjkJY17jVXUgkCorFrdmyMSYm8onwyo49ArWbQjjiwcxVVzvG6x5oaB6HizkpZA8qRQ99EDaijUc3h",
  "key23": "5uteNTDr9vYzuoheqpsEBp9AcFdHXTEN19ySkYZ6D8KUtSP4w1fAA3kQCztn6kqu4htwKe1RdF8wcRjXBg2d3RXq",
  "key24": "23C1mzntMhmvBEFeomYi44yhVQE2G1TX3sZkqWCKb29oxWSYi7FYZPsDzFgQL8r8SewJf17Uyu511DimX1bXuRDq",
  "key25": "rE2J9Wj3Y8Vyc4eiGxBSJ7bXx2ZuKZ9ZRRkt7GtWBaDNU2ozuPDJ3svxYCbEejrdNzCMXyD5RMrJj3rKdbzaZiA",
  "key26": "3NpwBKm2eSJgz2PGFo1S3xeUa3HxWfPQq9eyvFaVHzpChDPSpHswHurxKvRXXCvY8bNsAQhigfg3r6Yko2duuNx3",
  "key27": "2hRwD4jZPdUnmJTz7JNMghzunD2NsFFFzzzRXhzZ8wdDkSY9YNArNKuJMGUS4eRDE3i1LjuXp4cvTCDCiUFkuGFz",
  "key28": "59fbpyJVPZ3rZA3KMTF7d2zmkFV6RzcF39GFE6ghB9TBXHWLu3u99HgnaDQwHDoiW2zSAC7ziePoACZ6FEb666Bd",
  "key29": "27EPfvtDBref1e5NWrgnK4g1GkrFtZcfRgEWPz1dyMsGm65r9aZeTfnFgsbDeKjYhXSpeZ7poUxnhi3gx7wMjqLe",
  "key30": "5zxz1Tq2YerayW8hC9RWjBWbCLgA2GsBoLv11iRFXyKkkLZ5C5kAN9ianvhBvn9earMqDgriZEExUqX4oVRQUhfT",
  "key31": "5ME2wcSbNXBJbecpdddHt5sqvVkwgtLpcSFeB5s3gohmB5AtQD9G6pJD5Zw9e1VsLfHBR999yxN1bzq7HWWgFpgH",
  "key32": "45aYQtEsX4bSGG15Qe9Qv8e9xbqvAyMRq2pnp721KnA78BWkCiSZvZGebxFtfpysJYEJwT8JyzLFzMTyTaEHHYzr",
  "key33": "2iyL3UuxXKm9v1zxefPQK5tpFk2AScxrsSHVGvCd2NR64BFmT3GqFZoYUbBh227rdnLrX9wDe171t2dx52pAvJ2T",
  "key34": "3D7z2Ey28dCBkhqX6sDGAkjhSFdbbZ1tgGGxdKCAbvfmxyTzCxWAEFPTbaogduymTYLNHuta6crTqvHt63CSFi8J"
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
