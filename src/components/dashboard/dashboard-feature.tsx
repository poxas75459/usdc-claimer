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
    "2VoCu5KgA6SrbfVXnqx3xLEJHynUdFqyPh85EZEcCYuZzGdvL8T7QWdaFq75ff5EdL1Gz1TVW6pKmU3adDCkZh7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k83fYwF2ztvX7Hw19zMH4yjGvBhxzoPcc7FHTDM7heMqEchLNC2FKFRzku2sDdRu2KAHYNaizpVYCLPPBkhvEMv",
  "key1": "4zyPeSNTHy6raw7n5jmPViTZ4PQDjL98bhc8rpiEjxHFM4oZGL4MXevMWroRAVHWqhMXirhT5Ypey99hHp8PVhj3",
  "key2": "5Q14CTMsv3a7S5qZowxvE2KxmcJY3oJehtErZpYVvGt9cmxeWXzruFoGSzYMLGyJetnpgKw4jv7GukhQNCi5WXEF",
  "key3": "2UwH3ZMgXzh4Bbz5e4bpGbwzeEAaMDRTq6gJaihcpWZsr2u4zUABgXpNM8HGsaNLntsAYJNon73snHApAZTYQmyy",
  "key4": "vTgvGnDjGZPVydQzYemXZRLjMLFU6EMgzohGituki6x5FktY5mmmBNtKfQxPkUn4EKT51doZGatBBh62w9CGLpu",
  "key5": "4QBA4qWwu7ZW6ywg3UtCGb7H6uLB8iiYTbArn6fit93CAH4KbsoDaEa6DbagU5Q2bM2V1imphMCnN1BQNhwKfYaS",
  "key6": "22mSkXCHbrZ9gs6RMTMhJjLG4zoNGdXtG8E8haDRWiDQ3FeHe4RfWRvZRqg93tsrmaqhzTawntKFiyFDA48ppeYL",
  "key7": "4TL6whoCCS16jVYetq4Y28LfVdv4XRMYeW6Y9XgQWTJ6yqq7jc7yvH9rMP6h4RdFqPMXDqwskMRuWNUYZb6s8KtY",
  "key8": "4s6x1ERTfnzsdcWYHxckpc53xC9RiEtwGSUqtY1v2Mqv8TMJr3M5N8Cnsvjm7bspPeQvuvnPwHiDfWJoeFRX98yB",
  "key9": "39UnkeT1peTjxKm9dvJ6TbXK7Zp5es51w2DUr3QEZeVgbeKt8DvkVhhQbh3jFE1tLfD2uAGbseP7VgpFeTSMwAPn",
  "key10": "NgwNGpBBCQAxqr4rD7WY95ZFKFnK53yNRL8UE9anKTGUc2MqMwWDQaq9dQmh1th5XoHD2vnV6fd5sTrRxkPSdmb",
  "key11": "5sTyNW3aLTFuNEK2kPaMtrMXXLFSwJzZd9nRzyLWb3ZHTQ6wHs7mSk9PKEGTaPNcmVgi2MoxxBa1nq8EPGCW6B42",
  "key12": "2H3fNmbdbpLzEGtPadMZM6Ku61NPCMZ6HeHLUviEZUFymz4dTpnPxXUstMghvr5zw63VqgNmsxmGpTd1AEppGrRP",
  "key13": "3dgkCQQmFYXvuGCoUJTsj3nMiopYLimNm185Lq1V2tes2WDKZZTqH8rWJDWJuJNUTGFh2waTyJr8qyRSzHiRbZvc",
  "key14": "3C6Cp5gbmA1WepYFoD9BSXcwKa66egcRV9Vnr8W8vwG8SQXMJx4wD3fUqvBPyHvcXVgFUjeyiNNdi9GBL14sNsev",
  "key15": "5RMxaphBkAWTmw3RQeWKybNr2TMhxvZdD56cMNrNXKEbZEv2opuRdx5bMMfsDWM3bzxtzcAjokaCupNHrgKGTPRQ",
  "key16": "3e8c68qzGKMhH4Hw72cvEZZC1DJroh31bpxCCYJW2wmFcxhQdKLzujZAmnq9HZCMtwt8RbmzgM58D9hNa4URGdkj",
  "key17": "3SC1uap8ePojYFwSUg86ib6Zdf4DqmAtRXjHx3ErFivdTzK2Ljt4E89HqMBzHRSskytBouycnvB6gTST6VpUbUH8",
  "key18": "5DeXNwq7WAnweB5uPhHRySgvZZU2b71HSENCBW2rhy6amR8minrakwTstNERvHn5fvHM6XZ9jbkBPzEj1hWNb6NW",
  "key19": "5o9seqJDs9H2r7XbYd72dPg43DepgJTSAESHNwxcgZmhTQLnYNarNHYFUoHAeaDgvo34ycNFJx88XGoDTMssm9L4",
  "key20": "2EqLPzknySZnWGuZ9HSijyPs8gHaEN7cJ3dtabLpFJimGLAt8LJFHwrfQbUeEoKHDxh7itTKs1tcTCx3cwcn8sL",
  "key21": "5o3HhtwW5CZCGjcXDME3q4hNADhCaf4Pg31v5Xw5HwqJNxChmSZcRyvxCYiCZHS2rb1ueeHidDQe6ETbX6tWA7Pt",
  "key22": "vLkuzjxjw4EDK88bxTSaM1HkgjqygG1CYAEHArav688Mmbp1wGCj9h7tBjPUu7D9uWcdXaEHpaCTjHZYDgxmufg",
  "key23": "rbs6MJnmLBRQZVXbBr5QNtE5sKtpJEx3PYbSwsRW8fWe4wMoxApmqTXN6y5Esv4qcqeYbyn99cjy7Wur8rLNu1e",
  "key24": "5LX87rmK3izvR1Miqmhf6XFDNkTUuYz15pwtC2DgthTiJDB7a1BMCdayiXrRwuCNU4mPX5xzTSSBhfq7HCe1xtEX",
  "key25": "4xKhuQ1Xk6hdygjDRQiy79Yyr1Kbj7t6Kv4y9KpDaJbRvPNaSnohHWEo3sRPcXB7xP2zBrE9GKaAF6RVt4hGqJ2b",
  "key26": "4PXamGyeAJ3UQzJ6NVy3nYsfhGd7mZ2mNWNXmNS4us4EwRkggyJ7ZR88b2E3WZNoqfCzjGigEt9HwLEQFh3fR2pD",
  "key27": "3tyawfNRL2VVvydVYPQdyvmztaChfLuHT7zoGYWxaoB2SDnpjqPeSNiVPCo3yTuys7D5bVXgaUudGknUWUVhFT31",
  "key28": "3wFtyqwa5t6hwusiDrqTwm1P8QgsimFJtP3JUadNcnjWWQEmTjj6YF3eDhXFcezDXmtQcZUoCMn3FheejykreXYo"
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
