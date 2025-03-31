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
    "55J1aEmH4g3etNnJPcGXqhurTd52Sdei7VB7arJy3CDHSNjjEDYzJKXLLjjzXNnXYkJH4i9bz4bcXo9w2GETQanh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kJRza7uiQpP9HwG1bgvsedcoEX8JfTbNwzRtYE7LABFLsG2AwFUUZgnbAUwQvYBSyPiEUDafYoTU23HKjQP8PgJ",
  "key1": "3iVg2s8yoTKo8MPensVBNPeExdNn4oYvc7zuDHppzhhWicuAsWtE96Vf6sycsNsh3fHyxTSa9bnco2SMbyJgVJ6j",
  "key2": "5qheoGbeFthWaQFAXTTdt4KtTPyxAR6CKt1Uh5b8S3DqEWBNrcY4PqnXLfvehfXjkG2eMrZb4ioP5pS4n3A7tigT",
  "key3": "DRg9Bk1hKnu69znbJP61zYH2iKgVB4u8bhmhjMFhZLxvK9HAxmHZ6J3YHzs8MrmsNWE4s4c8W887NHdKfs4SgyS",
  "key4": "3aCLsMWxRzWkphyM12i24fzLw1Lxhq8wo2oba4VBWtzoTJzv19Q554UeHLct8Wjdb7cUTd3vTSEJArQxQkGzhXQK",
  "key5": "5C87ySbgLyHixyhhCtwXYaYKj1LhDFXTuHkJCFSD48CAssdP1y4jqCpFA8ubp5R3gDWdQzxE7aEHN9PKR5g91S8R",
  "key6": "37pUztRjMuKiqbKmrCkRGRbXk4Wh7pYkkpPDSi3ivJgbk73MCBQDnH7f8ZoTkPwFHfonmZR55Gof1NhxbDMPBCc4",
  "key7": "4mLKTNWzAauvjajHnFGX4esunZpmnKPaMtN3pXAmm8F2r6j3BgAYxVJuz1NCqsvcyLPT9SGaKrbbh5t1oB9yd3Z2",
  "key8": "p1hbvHj91Pncp7JJmXJbapKcKca17e2WqvWFeR98p5gR4z2qx3MUwvQQ3UCFoPPAgoJgt72qiTKYSALnXwaPmQ6",
  "key9": "475imKNJjov44mnx1UmqhqaurCyoavdnaHynNKjBbgCk9DyoFCt5rF2FW1T8KnhW5UvyZwtrbMzr1BNY2mMUwCNg",
  "key10": "3Bcy6uMYUa7JcbydD1yvNT4oGZoi62HNq5q9WfYNkjxMa6vaGGbk8NVayvgXqthYhZV2kcPT8P83G4qZp1fEPVNw",
  "key11": "WA1WEipmd5JF5TUYpEMKnVoUQSHWWiPMxP9sMiHfhQqALCUSpsqY49JFVMH2VR8mbrzSLt1NQ5phyXpU28o1MSQ",
  "key12": "5g6WmrVT1jJeRXAUUS4ZyhYcpyA3EjnicUcTYqA8WfJg6AXucaiHDdQjxtAmsCd7hRDRoWPTpXCyHBBaYqL91Qw6",
  "key13": "47AiDhRUG1TZdvidhDeFCtPS7LCjLV25uKmzqMPJdXAm4ZkvdmBkbByhNTqsD3mBbPFGRMNtC85MgnEnmGpg2GLa",
  "key14": "2kdMLuMPDYwVtV3xzyZhMSJxNr42DTiWDftP4JKbhhtWHX8zBvfuhQTBwMXJQ3aLxsGaKbvVRcd3sp99L64BRZ7P",
  "key15": "5ytopK8ixjPgZ1jW2txCRDCWBQaS9xpdja7FPhRRuTikvGy9vEisJGRqWW1FDMF76bW9vzdCmP2xpxv4A9aZXpRb",
  "key16": "JPTHZJz6vdSnt7iBCGceVsvXyGqoZaySFF6h9u9sHNPq7hdjpQgytotbPmz9K55bdDGkUyoqTJET4EMqVzx2kPn",
  "key17": "TaQjjZrixugsPLAN8RFHYdBa4KYP2fRkYxDnXR6YuE1vqVJdeLAF3UBG2nxURv8Jm4Dqy8JpgNwB1oMySkoAvJs",
  "key18": "zxmNaecdpgFzBz3fkUVMF6N4GG2QGGWZxsSCwh3phUYfzaXr8G1TCZZyrhHVFFY2WQuBQWvBHwGASgSVn3XENVa",
  "key19": "JyWNPxELdmm3uWcVau8VXnwiKFJciDBbty7dgfS4BUeLRdMi7GwCc1N7JpyqQPCZmLhyHbaDeSmrSTp6o66Lbgr",
  "key20": "2fCF7m3TeWZuHojn8jxJHRAv5YX6NDmTM2es4hjFh28eBxpx29PoDb4kPQ7KMU6yfTdmMkqZa11VGHP4iBAAPB6n",
  "key21": "2BBtKh4faNvK7YxRHGuyaEVkxASDmyGqSrmLSZ8bxgQnBVtSNNW863hF8UTD4WMYY6oz5swusfsvgBC4ZXHNW6p8",
  "key22": "7LbPfecD1z82X1hmv7GaUATmQCotSzfHpVokg2PNsufpJLKkvxWhkmCi3uztiWBcLsNYUkT95sw6DNQh9Y6jvjj",
  "key23": "2LWkZ631vWoZevT7kYywzbudTAQ5NHBwcfZphiyWXmLxjHzzvE3rkCEGnwM99wrMKnsurFWaH4ALeztByu5Eho5a",
  "key24": "5zRHhtGrDr8GK6VvK9A7DSvSSLGmwyRy6Q7GdPWHgiW4RE6QDidT9xdvR3R9NwsK5NFPduNU9gnqshqt8x1CmFas",
  "key25": "61g8veNKdYJxU2DBkAh6gYFdapRzD7coY9Z5UAwp9kgXj4tjV3o35cwqBa4KSAagC6v9P6FNLZfZW6Xbb5c3JJ8U"
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
