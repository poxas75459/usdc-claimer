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
    "3Kr4dN9hXDbhRWrr7cKvbxQ9iKzbLpNVw2qMV6dRhB2ivJjwe3i8rZFUerwhHGY18MUexoCpsgiu1Ga8ss5NB2km"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25TjJYFjXMKToqVj7D2tk2uNFoeuFaRZDzCwpEb44K5WRiJUSL6hbV4xGwyRju11SDuM9kSTC86U8Nne7Yqg9GZJ",
  "key1": "62yHCpuBhxCENCzQfPB8K7XAFeTMF3mKFdPxxZxps935aMJn7YUE1CcA4FKcaQk7jccbm18EByyVTDqT1BG3ji5h",
  "key2": "5gLX1gktcbewRssRcbeLQ1nAsDLx8rqYCZ5XcSNzwgMBzmAWpp2daUScL2QdSTSDiSkz95LvfEkwJcTkfN2SB4Zk",
  "key3": "4fTaaA42zz1zu4foxUyvBUdoeXyKyWN9aqw7YjLN1DUixQ27w2RUEHqNThWHfYdabc9DMAV2DefG6uw9B9QRiZFt",
  "key4": "2Ekxs9ruXLeTZ9G8AW2sKzNhHXMrYzSwvHc6TPfTRST7GyJbsCipbTxzJoboVdZripJHRk6mpdEcJjveTmYGJnE",
  "key5": "5faQj8DX644ZhQxFrxkxJ47VAxWbUBbkmjCxiQVY1geQmEfpYquuBviXkz8Bvfdyna4yj4kw7vbcTD8FHEXKRZgF",
  "key6": "2pNNL3Wg4tCpAVYgppJoU84JmJcEo7aN9nduYXpAAEo488tFgUzjLx2EFD1ZoXNua77JT8j5mxQp9prV3ofNHUZw",
  "key7": "28Ryr7Tz5oZ5RMnMSJFCXrGzbvfN7JEVZCUuVaYD3WBDF6SRNkKuKrXKe78KWChEuwH8xWXSyHzKFGHoycoUgpqj",
  "key8": "fr5cg6r25Rhi9BprF7GvFtR7G21bNJPTiBTo3kspZfaZjS43nvWZeorLcZwjvGZoKxW8UJTMi1ELNodfYYPjeWg",
  "key9": "cvM53j4jZ4L5VUj5rwzGbxZprvvcYDAndwA5huMunvbcCkeDcZg3KAgVJdH4kPrHAPR3k2Bb6t25qyJ7YE4v2mZ",
  "key10": "4JPUBmHhDfE4AJUqZJPGzbxujZTGyHNS5fTEoUbDyRaLj6na6BoCs3rfRjbJMLZ34aMcTiBY8aCW2kRGLHMEtyAT",
  "key11": "4AfT12r37MEUJuX1GubaHXfbEDJ6iq8u8Sx2S9giNe5VJ2JDMjPFgGMrTXraMhVxTBucq9APBM2KWctHPjCS2u43",
  "key12": "4W1xtHfX3MpcgZADa2YF9sbYmrLaDGqzGyriHTciWA4nCAUXZUy5Z9Dcup8sZxnd1Vo8Hsz9Xda4Rb7C4Gz41UPf",
  "key13": "4V9J8r7oU6d32cymYPEz3vK8J1GRuqyKVmsLiD7D9if8PXNSrqjeF2GmzxjXveUUQMpU6aeVhUzySAUd8zNiDhj9",
  "key14": "5QH5tWZsMaEhkY6NXBVt1yqTeJ8uETjZfarjRF4jUZZh8Vfp7MqQPYWojuw3uhRUpqiSiw9Bx2GzgFzrYhMzEWeU",
  "key15": "61ryheM8tPKVA3mEm3kCM4sYpB23BWXx92PZTGkLyQuUBLnv72WNX8xudRi3zRLdZSsdUyKozvY2B6Hj8oDfx6Eb",
  "key16": "3WFo9bkr1QPgUTmwFJ4cJnsCZMesti23tLpRoJFCZ6f16WnuNPN5oG58RsLEBxvnbG1WrxCxzCQBz4kkDYkr5g4J",
  "key17": "3he9c2dDZJYYVhgptjaCjz61TKZPhNjZTx5q3aZgXSVXg7WNnvFHrFhooJ61Zf1imZXtq66vNHfS84j671E6F653",
  "key18": "KeX2ZGU3t35MJWvPdFC2W8zTLVCDMkU5fAbA6ck675uWmrtEMovDyqj5AEDbut4sTKXuP89NMX38Jc1YX2fcQHZ",
  "key19": "5px7e6DPJwLrviKTGqcU7adi8x9VfgXoEhBeRkAzsM1vTy7WryZwcTXFiTaDZ5iA4nKQ1hC4XMNxypqmmLFUXmGX",
  "key20": "uyi4nTdkNQhpzre9xvbGaffewdW5RrNvBbEY9WBh5oCMiUKWmueorJ1dnHhvH5Pb9bhVvfBfYvXD6BUyQchq1AC",
  "key21": "NZkvNpT9m3q8ez8hW6qXW8SAWAc1Gfzq4ttUcjn8TmpDaXfDTZJXAWLkuK7kys3rzaFyYE8pJTqnX7S81dSFY18",
  "key22": "5jLnv8BBLX2kUT8G6gFyENtFkddhko2MknJq5rfhbx9LcYjnK6r5CVCECvof5L3E2txLtMdWFWjxvGoVmL6Xm2bB",
  "key23": "3Txacia3TbgkTEGXCAaUnrvwaYKWCmdCJ7sxTnGrb6BMJhAhrfUbA6RENKn3qdW6AneNKraCjgyg32bC4GeGUeKZ",
  "key24": "3eiTGu1TLfZz1ABt7kNqTVTXhntm42n89dUpninSryVGm7uXjNxAJprpvpengoRkv3pqVjninXzTUvnk3eUwZNZE"
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
