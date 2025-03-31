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
    "LBgq7jhaYS1kQk1aSDkDLfqSrpQ8AMbRRGQC3aNL1gk9otFnSrUrEPxnexq82GgQC9Cy9UUTjGE63U3j5hQ76AK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tw2tr8hAR1gRJvdsPRnfT5PP4nzhj7ZdLoNusF1QmsJhmh69dp488hoxZq8CTh488u2Gh8dXLduFs4EcBFJknob",
  "key1": "63chnhFcyLrtTdo3VbuDU6dUGnEsWb52EAR5wuPsLC989sZXeqkonzWurBHjKzCiYAqoBN7snzWG3fxCCSz1GLvA",
  "key2": "5WbktNWbWS9hUf1oPt3zQn8hTkjPKURPxapDN19GzEwqxzMJVEc8yPGmsGfwU8zUQqdyWqXAvoZ53zPNb5M6Vpnp",
  "key3": "3BqxLijSXxrisiNV4qAyfEA66DFGb6khJzr1ArgWKfKnskRLHh9Q5rv97ZeKprEcztnUApDAKtEq82VXHzome4ib",
  "key4": "2BbEBdTcqic3HQyMDKJH3yCfV8mf1GVgXCw4zMazYnE7wFfPunzvsDu4F87PtvaRAWiQXt8BfeodNU1JDEGXnTMH",
  "key5": "Y9U1vkfGBG5HPBioQCbuR8cZg9Paz1CcJR67TYJ3C6fuWHXCvvKdj3zwNyA5qvnKqbWX4Zkugx1GEmcyjUs7at6",
  "key6": "4B8QBAziy7D4xdBcYVz4NaKw8TbJM2rgHME7S7ybWfdAdKkzkM1gQrYcAYVSG7GpNyTeZAyjnf18VXaBW9fykRMw",
  "key7": "2ipJXG88rA9rWsMQ2ry5UnuGtUzrjjGm5Trxpao67bwPuS8Sq9abRW9R8fdQKCu7yUcuy5zW1BWNNx8Kc8vzvYhU",
  "key8": "2cop41LoBgYsMVg4SUPKrJEAYdnGuX56d4X14RUqSYPpzxztMtecqShVFW5z6duh9wsxpmXdCL9wrfgjdGTR1iNh",
  "key9": "3YJeujmTME7s9BJWcAQ66cxxKGbhWYCjSraUBZ9G1uk3BsQncUenUaScJY3yGVt6yDQcrW6X9Eq2zmvYmFTepZ7X",
  "key10": "539ULrbPmp5RtcdEXMJzL72xDBWqxxfxyBihyWLDtmQCLFiqEGuLSxFZ3iudGxxcZe6nPHDv3uS6QDsGscdP3CGG",
  "key11": "5hpA1vRmqZMzLJPh2aDVte4AmzYonAuX79YBd1GZiu7Dns9U4oM6xyMG6uNk8p9DeENw4czQJGVMWuV7UySzfjMC",
  "key12": "5gcp8aCHH2qnPJk6CVDWk1aZq3HnaYo8K5sKXg6DXEgLVVcjS78RsDZHgpzeAHwe64BzHqbM97xVQyfpGbkF7S8i",
  "key13": "33e1ZqviHeSRiWVLteWXCkRvAWL5Vz3DxP8Cq52cnSuyfBvUVnFk4ALWFi9cFALMvAWy8QrASXmde3z1aQRueS4Y",
  "key14": "4n336gP5bqZzwAnc51E17wdn3jiYpKezRZ7hEcY8gYZn13EC54krhCmthznGCs5w2uMPwXAWcWLPBNmSbh3BZniA",
  "key15": "3kKioUpKtRgYkZD3eNpd2QanyXYn3KiHT5yZakrrzXd1M5qV2FyUdZEjfnGj5EvC3tiERbYwSDUwSiE2iKdWGVgz",
  "key16": "5xQunpvwmYiEdBwT6zcrREVKajGdUFm5dSbZQND7x7w9daCy6BXUgoauBrdbE1EQgFzBp2yfQyaDjWfWmMzgVDSM",
  "key17": "4VKFsAPvc2e5n8UwBh7JVVRDZYjSvmZA5cXznVR9G9Fjm7mmUrMF7btZ8fizfaoJhw4WseuJCsgpxJ1WKXKcuofK",
  "key18": "4HrBVEXUVwrWHZJBum9bEJeSJCyLURzGHc8yBCEG31MSro2sPutFuu39Jx5k4Fb9LzuuXb8XicBGPaQ5NaHHfSx2",
  "key19": "63QxdfRNRuu1yvsF522GNQvwTEteKScSeKnFRyf4FFsosuzHqb3Tn8eT5RpfsaQHK3R9FAtWgnQYzZP9ZW6aiHdp",
  "key20": "3AGHkTmmS44Fad7gPfU3aEbFexFejNnPjAojFQ75C2LGyfgEMdMLUHPwxDgkFh6aoyPyfFeAojroQD4GfFyzp5qm",
  "key21": "3YxTAki651faXEpD7gnqzMR2VLxy6e5roA1dqfyipxuEqCjMG1bmJjbW3nng5ge6NVpnybcCCS79EpqXCV37QbUq",
  "key22": "43aZ6nk6osN7nsvfEgYwvyP3W8R3tEvddAmg2GTZ9sXMGdCiwegwaKSPeW34KmRYataruHw6J6Qnd95nrzAApM1e",
  "key23": "5MUcp9bn5XZuR4p4FeENTntwdKwdLbbwfHFQHL8GWHPwZaHJLtwQrHRWR2WspX1jEZz4BDEEC5v147dLjQudR83i",
  "key24": "EacPFXBFvVVYu3FMBiTkgH2boVFCoFzbtpPVLhEyC6vVxqYspngfDaAvFcbXuHjVjadYAQrjb9ttrcbJsttPUbR",
  "key25": "3cYcG9WCXNrAC8BrnoQysKq7X5Q5dz7nYA5HKingKSUQK9Ao9DFmmiVDvWFncAjx5RH8xivsLhjJxx6Xu77mejrB",
  "key26": "5qCLTu6ho7xV61NsMcByroQCkmAp7wYfWejdWQXgT4MDtwYKPobkvJaAWoDuGvJhXWXvQbsp8BdEADjV1PaYRjeG",
  "key27": "611fsNZxn5pRZE7ruMPgX9cQ2djAADqv1tM4a5UrCV8Dy8QFSfTLLBNEkV4CwDAhwxN9qYkWpRakh3atQFHFTEqW",
  "key28": "3rFrEdeNPdWuD9p1rb2WhPLLR8teLMWsmziZUZFFxZKfvuvr2MZEKSxFAXPEKEAPRjx1np4Gu85eb7iu5TSNhYo4",
  "key29": "2GxoK8VjZuSd12J8HyeqPcicuJ4j5WxHCUGh6SUqyewQHgjn7rrbxap8iXQTCAumwx98x1mr8GtGgPex5NBs12jQ",
  "key30": "4EhaRMzB8qxpCoLQvrpA3ZgGkztnboNAgVTqsrKB9FCXR7Ki8WGRHXLAHEjQVGcA2i4GqXQ9fjm5cRirJZkfkS7W",
  "key31": "4aNVWdR32aiz3Zs3XxYmhCGCmgYtEwPMpCSQ8S4ibxVDxGmL715TYDheNEQkrXqqLU4FBZz8wwnFA8Bu8DEF1MJd",
  "key32": "2mqe296T3psT8HaPzdwGMHaVRB92oPvzMi9pyxdoPcax6GZpYm7oc49r61QLS5Xke7MEaLzjR7xe4im689gWMhLm",
  "key33": "61e3e5jh5AYn1A2B8kpWzJTBELnymQyEH4wj4UWTmGL2hBPnLTyyynni8jHP4RMcDSrjuekfRepDicTLt3FQgBtB",
  "key34": "3jU2hmiFYdaVrLNUPG1jkyYPkUj8PEW26QJaUbkSpZdJiRDNeyuBDpq2qkJmUtYiE6VL4hYrbpQ7DdReY9gnm138",
  "key35": "4No6X7bqW8NLBUbxwRnai2zBue8AcGjShJLs9x2C4Xh5N3yH5LbNm7xcLxjuWGGqePWy2V1BYsobPfEjT9oh8AF2",
  "key36": "3iDS23jCMePss7CPqe4swYPbxpRCzuVoPHgqE2puC4eFxn3KN6yoVN7QGwbkCNDfXNos2rtX33rAGDndJxP2Bmsp",
  "key37": "3RGWa15R5JTgFeDeHoJD3QimnGptDXbNZT6vqcbLCJspyKFPvvLMg6C6gy91uVLzVJiJrJ6yP6vMeb5pU2dMepVP",
  "key38": "2dRKPByKjKCas8WyntNbQ5q61hfpCtSZ9PdE83NvAwqB5uAcNn3Z9aGwMJKifsGYPv8U7iL2jHYX73uUnddmLpXc",
  "key39": "3fh3VTUGaV7hHhXZJx5Gs4fEmS5fJVz8crrAqt9D4cJsJrTq8QU7XzomqKuk2Y289esxbovBbqok2S7M2zU3Wwnf",
  "key40": "26HbaPra5UssQYBWgexZ3ZQuQCBqHo8suqXk3Q1usKkmAUXeZ1o2dSvQGMkpYThvPTu6Z43GGquRe9eqUUHTMWZe",
  "key41": "WRxwSTu7D1KjH6BxYgJJR42ZWSuAPwbHurJ92upfvPdxpcpp9WYLUtcBVNLf4SRsKitRbfEC1dV42qSSbZjBJYj",
  "key42": "3h4c37GxEJ3YC5YktwTawrCuBzC8ucRVJGkQ85ACE34eAoyfFVMXTDGUsfSP5j7LHf9R6cu6PhG7n3SU4D3kvS5y",
  "key43": "3Z8iejfpwmYQ6FcCMQWTRY66HHYKgJdYoJ3Pvs14PW5UX6ELRGkiuD6MtUSmFqaU1vnRFB8MeBGZ693t86bKUo9n",
  "key44": "3vsnYrLCFPBQhGvGrQeZbngPvHJAaQ2iCPmDBv6T77v8GJdezvvtk1MLeu2HmRBXvpm6LaVTDkXwYjLTn4KNYyT1",
  "key45": "5zcyCxZziGLDd7aK4JiyFKSeCVCCEfjfBeaw6PESrkcSFQf1NfVmpdgFvjxF7s3gWQpLuj54GSCJvRYp1zHDpKkk",
  "key46": "3oGDt8anMCnckqUyBpHg3qtz1fH3yN3wWg1SVdpDyTAMgPwzxDXhtX5TPaH5esaTRVhWaGvMWF3rtCMG1zK4xroA",
  "key47": "pifDVAgXbfWrDFnFmd6GVeDsxUjnEkwsB3Ahohjt5SabRJECRJPr72KCe7Zgsv9ouvUpK3wiy44878ExpvTrbh1",
  "key48": "2s3hVjZfk9yA5FS1fR1h1VNsxjt9aCc9vhswZ4ZpLae8619NUQRdJq85bYtcAbVi1kci2CQpoDt5dLs2RU1KeoUy",
  "key49": "x5YKqpnTkyU3a165VV8yJYDD7esGTwmBaYeeKec9jNzuiXfmTypPwoBZSzY8J5Ej1KpzDks98XkNAM4GPGYH4TX"
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
