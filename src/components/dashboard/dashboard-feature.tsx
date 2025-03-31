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
    "5Z7DNJ9buyK9vfWNZi7mqFWRRQfcRWNBQykMYj9coj2QK48txQJ8XDPaajJnws1NjxZY3288CLH86idECowVWrEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dfUw7tNpFse9u7FQiv2wLammF1pfSWbSiuWY3E5mhkAhQcSN4R1vRt4iRHm2TE9ZTmRjMpvajRfZDqX3vw5aiiY",
  "key1": "4Q5U4oiLWfkwARgF3svGJFA7r8s3SnqvpfgACrfPFEhjKzkR5y4BHSDnn4Pd6XTcaaEKLYdfRHf9rHdkMLTA9A3y",
  "key2": "4Hd9p1HXoDEQVcxUoyqg8LtZABxNFWi14X9cQVXAVKSsoMbzvZgjFwpohU6C56vPjNgdC5Zu9a4FMPUuzkXPyDqw",
  "key3": "Ci5QZ9nWGGsCT1A95eHCmLJWUMcSQCLttvTxef3nEAeLtNMkd8Q7CwXU2iMSvnSv3pqymDrbBCfA9pfiVf7jbEP",
  "key4": "Fv79CnSet9ncuG84p4F1pnaqSDD1sZD3gSGLFse2iRfkSYT9oTAMkea24Rp1oaYEeGcCkD9L6Tja66SVXTWqTQs",
  "key5": "2YMpG5ThyWCoDKjUEw7LF38RDMK9M6uLDHKgeHFc8qpWisdE9tw9WY26DapzAnMrSwEYcNd1co51CjxGzea9QQ1A",
  "key6": "EkQ5uSzN1FZXXrPFxphvzQATvUTi4cErtLhftmjPAmZdStHFGpczjuhJp6kC3rmQmsGmGRTbkyzdSFxMkYaCQYz",
  "key7": "3n2MRV2zaDyPArsMGJGDXxHpLgsCqwbxTT623aJhS8gUMF9EF5xmL8FU91GgVhkWVfyMfXdr5LfWGxJdcDt9ciNC",
  "key8": "KmEsBFSbmkF4J4gZNHBgv8xPgXfhDeWVVugbbLGj18aMSk6apLNXUjiASk8onGPnhvUwEY8pgZF3pbGsKQzxMfQ",
  "key9": "51xst8DZArkFonriJ3FVFvjTNeBCAsR8ddTUHKoBsGTgGC3pavJxN7oTHbP3SWNEW7hTrPwiuScvKVx5Qaj8UdWd",
  "key10": "2Gmv2nksZwcMVfP7R4AbdiKkTkbpmVCJjaCiW3pTF9Yms4oeBi6RmFrP3NQkwVgsXMdYk75dNjwC5ijsSnyq8pvj",
  "key11": "5rLcgQfpARDVUuU2bZ7Xzctf4wGPeV6c5wV1zrJnMC5Wwap8Vdwemwrhf8rVMgpsT18FKoaXAWqCAcnhXt2k34GJ",
  "key12": "38P5znEe6RFi49XTLYiiMMgmtonAVZpAUxZwKmZcm33APmmDBP9eGwRwAPcsfK4zWPcTjb8zbYNMW737eRYfJapC",
  "key13": "5PsCdhDLGBFCXtbjeMkP4ZtHYimJMrB2v3dCXboJxW2JZjgaXnHR2VXxMvFskziQkz8zfvAYCaZ1H3WWjEpGDQUq",
  "key14": "5RPHXzZ7pTzjUagUozWCcrK88P5vtMekkRmEjCoYDGXhhUyf4LkmKxPGZ7Vpg8uzv1t3XGg1dHTQpy9w7N9YXtsW",
  "key15": "42SHiCLSewfQNZUKPJhydJXhz3z3jM9XpQDW7bNTi9DwxRQ4GeXs8cfZPHV8DbU9cJfM9BHBy8Ag5LdcD1KJ9SEd",
  "key16": "2Cr2RBq92fAjJHF8w4Q8vwg1Sf61ziktw7HJx21xrgC6F4yT2pFzpWTQm8qyMVpXMxV6c7nuUzVDAe6juwQyiSaw",
  "key17": "5pbHWDyDaYNsVEiBZbrpX5Rjr8DwdSfZgrmEpLiw13FH6U1SW1fwGH47BRcjZ5GksdVnKqZuFArzTsCdVTbQo6Lb",
  "key18": "3cEiE4w9speFCvvi4jgv7op5zcmCCh19FAsBhsYN13Mr3WbmpC1hfWkXS1rqpsk6c1KyWiJLHP7arC3Xzv52YoQF",
  "key19": "2XbiaxjtL5AxKNTx2Jx4chnv7mm34qGatfWDzJt77WA6zboXAfFbZDKCutwy21Fw3KekY2jBCvbu6qqu7NQf6hTF",
  "key20": "22Wnmr6FB4mQjbrf99Ebr6B3hAh1Fw1bKGC2LuufzToXwgsajGSTX5ykaxBBagh9U8jFkiyNhVAcBwHBZ5qRq7d5",
  "key21": "3DU9PivVs4fF3YXTMheLY5R9KeN75DHe8mvHz8bFpkWgRCnJ8pngrTgPHXXMGoAbiCZ25FwpSePMyU3NUCDA7tnF",
  "key22": "2Xrygyuguw3hhn9enUcqfgk2hK6nuV2TgEPwXKvRmgorNjDDX5A3RoZcycUq3mMvgCzt1AvAc3ztxPs6mE4ZNrQh",
  "key23": "4XoshKg3b3Av5oWMusdxrjMLxqwzZR4x33y774ixpLXbSETU8GXaesZuqfaJNqpDMiT5QcEkoegG4cU2NsKxDCn3",
  "key24": "EVqUZoQVQ1kobBNAGLFCz3DBZWVyitiE3WuK3pDRzYt9kXnK2xEWUC3navARwgUnELLdLrbH5XY1UKXHTGZ5ELz",
  "key25": "2whQcDHp8GRS2oc1twFoPEWDcVN2kLGGhZHXKKuifEMTuE8j7izDaWZEjqrKTX8AdixXudoKdpf8SUjZdtVMRNXH",
  "key26": "5og9HUY8JaHYMPNy2QAQLsregSUroyYR3bmvQ4u9y3vTdnnHnshGas9Sc8vzguN1KxZJx5uLJiftRvARHeSKbLq",
  "key27": "4BDC2TSeViKLNYcpq9SevYvZWdsH3wSTXZH7Rn6F3iKs97QXhdP57LvbcLVzNq8BsFrnHTvGRRjYjgkzA8XjnoMG",
  "key28": "U7zEZ68fuDo5tjzJwzCKPEZ6azzY7VrhcRDx2wg1WXwuQcgq1WKUDGAsxwuSSKX5u1ntTD8fwAb5ZYrTx5P1rAW",
  "key29": "5Mf4bvF6xfvE1LuKggBX6Zm5tk9cuhw4m5rbpZ8cWpJbBoYbubMAk4ELR2B6MyojhGEyzbJ7uPZW8SECRHNQpwd5",
  "key30": "5t3iyS3VAi5QCnzvkpLgRxxDknzPY4K3Rs8sR9HR3bwyJg69FBXSHxoVrjtbNpEUrNkS7wBpqsuePgZv6HJ4Pyb2"
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
