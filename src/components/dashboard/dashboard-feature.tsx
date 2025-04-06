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
    "4YTbaje2RorKLb5gMhypSpETwqseG1dVXyJUs53PDM9g4eQNpYUidpwrGSFMCbeDBuRf8iaf6Ty3LQxBJcQds1Hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52YdYQAgMTdzoQ5ezHWWQLtZfmNFiGFxpUsa15aEmtJsmqDBsLMxW8VQPt5uF4pxG1Nv3YYEvLZLvrAqPBMSeYqB",
  "key1": "3fsvyVgKV2BYom4WMRXWeyL6tuNUCVfGzudBsxqEi6ZmPGPhwcchvXfYesMstQzfhnHf3pneUVpMaq81A6Tk5uW7",
  "key2": "5jC3V6YKBeiRRiixEtiufHoN7UhwPh6DniBUpC3zNi7RJzaJM4t8JC1tPHTHNFY2hCybwB7L2HXE6FBYba36D8qp",
  "key3": "2pBJ6vnoPUmqafXLK6wRMAqYP3WKBDPQ4tRBesqQenEVfkMH67Lahn2PWcNLq479vpEXFYGRSMkvFq8xeuPNSr8Z",
  "key4": "4CE2P9As7TneBWVyFA5PjGGwRkAx4VRqpd5Hcx6JEnwddrYVE2Pj27EMcFzxnJmK5PWzjmmZgTGvnoytUp25hTP3",
  "key5": "AFk4u8HY3qEyoLGXKFEtXMskNr8LbMWsdCPtLwkustAWTRDE1o6DyCS83dnnqccwg7KwW6chRBFWcuCFc8G9Vsq",
  "key6": "4izSGbNqNNWVjTTRWfqz47AgL4wxeviY1faHQJse5S44tN1iCmsiRffc8jwUfpRXx28Zhz9889e7ZFpFXm65E337",
  "key7": "sKjD6N7eHjiUvPCPLx6VaMMYVmRzDwhHWMLfdHfLn5PTQ8a3BowRqSJkaKeSBhu1jYsSJ1axizzZKuPXpwCXE5B",
  "key8": "qdtV6QhBv7VLpEKPbJhCdCeFBdeSBMHq7aDWxk9cpHzeoEMpkvhDCTcMeX89vor1ggqar4pRD1eaU7Y6LcKzDxR",
  "key9": "5p95dKd2kfqxa1btVHqJCFcawtfqMLLYxoqwTH23fGUXKEefRJkzY9Pb6DfvXsdXyJay7syfxQxN5xNYBgqcKnmc",
  "key10": "2rxtnUxvqoUqSdgTVoSauPNNxUpiYDZN9cP77Bq7kNpBCPVT2DgGKCkxEVj7eb2oYe5eUx8AJXEJM11yYoH2Q9zK",
  "key11": "354a4AcQPWLU5UP2k1vBYMVAVZ7Wk83zMBA87z3vyeeR6Y22vBiT6zv2Ec8PsPnc7NY7onCMByAGVJjHsxQ4xJ8w",
  "key12": "4TomnR9gt9AcPu72HTAwG1YLCfMuefuQzJS3jnMwx8nN2GGxW5YufWGx319vjr8ZEKoZGzmMqzim9UkRdrgjpHAG",
  "key13": "32Yzu1oDo6naGqXWmDMKVkPWZZcXWWRyky2TFQS4PJrWy67VUafGuHtVE4FbE5HeVPg9PfYVqzF6uEMg1uQyY4PH",
  "key14": "3zV7Ki9gdvPLLjghHeKDJq9rRHiGSWEsvYXwTpSREkxgJnoEhbsKcQr4vavrQYbRmfVKPhQQgCbQ1J5uRZxBMmsv",
  "key15": "4PNzs54REeh6kPjYpqkimcxC5EJu9xzKg8wytGi75XeyytMWTiHFUNvKqKfZQ4R99awYj6Q5ZwAv9v7iQAp8eVdT",
  "key16": "3GEP3z5YMo3nGBK1mZdZPYzgFUPjrDYjh1to5KeBd95u4MVAajGEJxz2DStSHDwomL6Pd7uJcpfLgYn9XdiRu9ov",
  "key17": "2ivq3GQ84oHvXpZkxt94XFfWk7XjvQ7ZVt477LGLbr6e3wgKBzACGkCPRjNhFNayuELU364XKPJqtdKsJznXyR79",
  "key18": "gxsL6XFubPZ6bkUkWPEoTNLk5CcryEGKneJiMBYkVoVUmsPss5etC37o9kasKKMcTaKL28sUMkXFCEhRbr8kFNM",
  "key19": "55HhzFUzSviaaWgmFDFEzK5wUu5742udr3YMMc62LF4ogaRSGmjSC3zTXPWfp241agduzWJBQpTNM4hCtoR2QCkG",
  "key20": "9CvbwdzcCkxQ3bLgLryeosFdPsp3yKK8JbgLRktqZEd3iGoq8PiduaqVHhodK5WHtaMzbaqiqSDJ2ZXaLYq8ZTW",
  "key21": "3Rz77naoWPaYnP5TEcuC1Vts2TsTgi1dmKHdHicQUmsHFPrvcffsL7rSN5fcWsXpb4c175FxQV3HkCmBhKeB2PGJ",
  "key22": "2nem2PNn3Sw43tn6WmrG2uhZr1yi2ugmXbek34vL7245TwBJDBxMrYuAfN9VSU6wssNBTpZ6rssX4SF97aXZ6f35",
  "key23": "4Kbui7rqkwdLw9w4kPfLg1NHdsemgzhhQYqg9DHWGxs1jFkYmEYG6S6uwyET3fLaW58RBFEXq9UKWWtpvkNSqyg5",
  "key24": "4kQf8XzSaBumrCdm9sV2Tu6oEfrxadbFF3yqj6hZAmf2xHScT2QGqL6qXuxiUTJgtfZeZ93foth5p2NXp2XPxgjM",
  "key25": "2UcPrdEoaLtk4xAhhczkSVz9pJQ7syaH4eQzupNjgamwvaDmBtmFQ5avi5bXo7vhkqF93BWaFhxD3tLfc5CB4dHc",
  "key26": "4rHREP7AnVLkFrkZsRQ9g3L7TZEEqsRTnLbF534DTaXdPejLZENy8fvpoKrr1A4hocXK3FCbkdh3jy7q2PArxtgD",
  "key27": "4ue8Hxyya6haP2gqUT7frDoZCqrioGgMttveGAByCK5tjoLc2Jp9ZKbUZ2sKgC34RAY2zLKfH8eQpzDPdspfSo8d",
  "key28": "RnaaKjCHmGjLqSyackJWVwZTZDL654SG7GriaW73KDF2pQnYsBGASuk9eeECPaRBhVPoDngL7sxumw7vF2npWoP",
  "key29": "3598sSHD1noBoUybGsFtdz9x2MHW3C611votqHRCv6MF8p3qspMsb2CUAVH4qSVqLvxj7p3kxRv388ssG2XVKdV8",
  "key30": "4Cr8SyCW3Nifb2yXGX7VQNdNREKqP1RVu1wsr94sYSYd57utTuzswqPT9nMPfA8uC6H9vHLZBynmjBThVXdtJyB8",
  "key31": "2mcvfVEY3JmtwEFZzL5mm5u783U8pdGLkJifNaqGbGmFSeTnGsQDqBjTNsfcwP4GszvddoQ6bXHH3ZiKiiomSKbE",
  "key32": "2aM4epcafph2vZky33CyUq6e2KEnirft8KgcWwvQvMKB4qCnTX8dbMUBeQNVTPchQ4o7fEmMCC9YvEEhNkyASDJz",
  "key33": "32mpNqEHRJuj8jhMyNoNq2WTo4y4zuMTZLW76X43MebXApu4vgLm68CxnGtewpDd6jybPsx6V1BJ55SKk2ZQ2nYu",
  "key34": "3nHo5WY11vApVp6jvabdwqMWDMs5JYhit7jawBdgq4pwEtHLhdhTSTdFGgUMzjqjbzoCDMTF6XBSVqMGYj9sShYp"
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
