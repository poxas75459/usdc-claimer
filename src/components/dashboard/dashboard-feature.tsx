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
    "3whzJCszbgzUmD7arUf8pSPLofLkUwnsNLK4MpfhYTmgEXKXErs2q4iYq4HkaNt76FhizY82WVDpZRBFJE7MwQPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tSt8RX3NZhAVAvNiNhUPRHx72RcZRNgZABcns2F7BLPnCYuKCmTG4oFvRNcQ3mSybEeVeQgzuhqottUzLP3LsXs",
  "key1": "o21uH4TkNx6tVS2DfP3ajG1tf3DvQjcJsYw4EZnPgrV3js1MxU7RoFW3eAgkoe3LaeXmZuCo1eYYkZtWfCYgP7W",
  "key2": "5LWCMYZTYT1QkwxKjnXHpJWfeGfcDLQCDJnHjd8d8YKyRUimpkkw6oTwnuWZAro2ZUKP9ZqW8p4BvUioA56eGFLa",
  "key3": "qpNu75ddtmcCfDbPbUgcJ1SXShaT8upotJrvVQGtUU97GzeLNq4A87sq3Eohko8nyQpNr1zcdaqvEzdnUKhZBFf",
  "key4": "4GhjzhFs41AzzZWgR8apFay9uYYSVvFuG6ovL5xhKK7HfN9pD1BTe9vn5xGot2xDw9xFnXj8EFw6Mdy2PzVAcfY1",
  "key5": "4J6tDU2buK7N42bjmWHvNk4QbUVRcNsagXW8T3WrhU67rB7mxrNhLGVw6q7gAuJtrm8sSbiF68Xfopf7zVSxNpHT",
  "key6": "4LNxxqYTNUcUZP877VWDX1ArcGq3u2FKjuVLgPDrs2B2f26jh4kSBCEpw2rxQnXdpFvNu9ej5CTKcjQhKbjbG3Yk",
  "key7": "52CWYibMeP1KGLfHNdqM2cx5AoqjML2HGmZ62QwHPYSXzxSZ8TLt1sBH6JLKuPfN5MCyd3eGf545QLWNCLB3DxXW",
  "key8": "5n3AjcEYg4dvwPAfm8JRDY8nAQrLmVvSKdp8BD22A2bsFYVrJFSc1wh2ox37iiwxasXuq6vVCxh9x78jVmZFwjvr",
  "key9": "5JiKatiZAqVVgKAXBz6rzNYwJxPCV4hypFQpVH5JKSpo87xhNPPh44cX3f26hmxHA93FPeZzXY3B2mdb2rMFy7hZ",
  "key10": "XnUTyaUeQ7JnXNHspifFoRggUQhodd66PWNmAFCd9GchWnewBpyuwepAQjXbUftyZjt5Bm8tcvArqpouHvqtciT",
  "key11": "4M5LnStbFrmmhfN9uCM46EaGrHy6RucXpM5Kv681d5j9yPe6WNk9rxZZUY13wVydcUk3VKmZD3CJUgVWKBcCDUgk",
  "key12": "43zBoYGwLQAZcxXzTeijcHJe18zfMkJ3sdSnzCzjpZCWzgPZpZ1MNMgqyubgKrLqjUVByafyuEDD7KEhDcqsjd9Y",
  "key13": "KrP6JiWUoVHKnuJHMhov99st2QBGpj7DR7nDBCzVZdoh7G1quBoX6qt4riyygDxEk6dTbAGHmLYuLPTwVNCBMbf",
  "key14": "4Zahq32e5xN1Td3U74MnC4SkZFfq6yT26eYi3MpdvvsS9JSUVXeeAZnniFgmHt7Z45fUppUKYzLnSJjckiUUv66h",
  "key15": "4NkXd5KGFeWCRnjGJu1xMs2Vhc7voFjJXjtgf2cPGTkr9iwCevCrWmVbksPgBGwiW7WNRYxp8eDwMoQrjf3c54tb",
  "key16": "2AG3XTK4kCfAnXJeNZq1bBBpuiDdaSVK6F3hwKxetDvTzUadgibzz6A1WWKqhqdkXnbmLhxh9zXVYssdCb5nhVUn",
  "key17": "61hUsU3LFeSiZmXZ1wkKcmjFN3gRV2vLtU9nvAaweVLgemfH12dPsdp6RsA5XDBNhfKncTewyP2MYTWeh7GJYzxz",
  "key18": "55io829wv3nWVjonhYdrFPpbbw5phZ5Mb7q5wHqgd83cKBN4vidDk78SrUxPbCxEQrykfUfXxKpAn61ZouwhwFLh",
  "key19": "3JdJmfCRrHmG95KKbgXN9VcTe3BC21PF1iLdLTbm7MZJdSQKjP42bvufzKy1o6FLMPzHEZ4b8cMdKByB2XDNneix",
  "key20": "3exMrxt6syF4u1WsQaH6VGZZ1jykuksjc1EBRPfadzULLJTs2N677bSSpUkUvrG85EHaAbTVBKApd1HjcGoFzATd",
  "key21": "2P4ec97uGQAKBkS1YCzMVFUCH9b5tBvauA89mxZQQ8UNEp2u7CDHg3AvFVPzsV45B8CFf3SJB8avCWPAHHp8m2VM",
  "key22": "4Qt6hx5xHh45EbrddQcsJtsLvh5uWDUx29eRQcWjYYCvMbuXAZTNwtxzLFp8S5kjETPyX3wYM5hc6DsV5xiNdfES",
  "key23": "4phcDHh6kXMCZgxpmgYKDQXGu3VikaD2iFBrrEYvmrYup9JNhsf4QGwKhbUBQEBynnjbDPT3DUaMXgEZFBvCz8y9",
  "key24": "4dYjKCJUiLsy8fxNegyADiJ9yysgKjUFqi8dhT1puYj1q5pHDLRD3TakvFDExhorFMW5FGnkL9HmriDvRT3Ax4Vp",
  "key25": "57MaS752svhrMe4Tjvdwk5UJLYgFYv7CiaHPUiwcufoWMrxKxkBcbaRzgiuwmLJTkbqZFiJtWEU8F1rLiu2oquzE",
  "key26": "53vKQvNvosU5pUu6ksyji2Paa9FV3YVbkk77YJXtK2T7t53Sap3A6pD92gtg4XPGs8u83wuN2Rbmed5dwxWEpqEH",
  "key27": "4NiZc6Ky1EX12GT7XvLepHfWCe3SfB7TLP61RTK7zeDiufwvPsHy9FCDWQQFBYitbm6Tt8sW2XydS7MADNUoaQXW",
  "key28": "3FNSBKCMzzYgLa3rfUYKFKrYo5dNhfk3Vr4v7aCxLZvWZtFa1jCxpcVu7HF8uYC9ULmBxUbaRsbRZFd965GUpQ1d",
  "key29": "4SkeqgkJfJWc44K3mKv7WBeCf3t8CtG52rLKZJVezJ9UmC6stqG2u7TjW3fQTLWE9weVGsvvshA5pUyMNbeEYvHS",
  "key30": "opGhkyaygSc7uyhi8xmPaJEe4pxyNXvEfb8N9tNRMR1Y1HBzLMiwAPPF2WAz5AGw3sUmbXsHvgbNTSVfBKkZ2cR",
  "key31": "53gsmMxmVHHeaw4mKVbyTWJtFWy3anZrhi6wawASMrNGPvQXBt2whdXvEGb3MWPWu3nysLX2TfgwFWhaF379PkkS",
  "key32": "5VDt8iAAY39YJL6HWWTDRaPWHhBtMiVhpmZxk32fBbwi1RPmcfaKU4E794QAeeXi1u13tYnFeEsMuf15Ce7V8Hse",
  "key33": "2JXSznMedyXAm4Xwz3ukGJNdi5DyShSDwAKZD4nqaodeDbTnpnm9QPHseF996Vv5YQrEWEFmzE8SN2kCpLnp1mMX",
  "key34": "49fZzdXmzu3pnJrS8qR4eYnzgnYAuwCK7zbin9dVrgPEcDDPoLngnceJ9EdoP8p9hTmaL1Qd94Yqk6PHjJL3nwPg"
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
