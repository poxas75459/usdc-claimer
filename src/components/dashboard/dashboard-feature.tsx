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
    "Fz2FGU87VjDVrsmGBDsC1inoiFZB8N7kYUx73NtXMUsZSrWMxkhBhNSePnrTrhduU4L9KnqbM8cQfyeFCjaDdHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jbcmuWgzH3nqTA8Aq5zbT2b4Zgy7ozg1snqygg3h9zeU6PQ3Vro6nBVLRhqjQgjNqL9bmzRU7UVkMrm5KBZA2nj",
  "key1": "2tWd5Y9XfR3jhN1V1e7KhQgcgjDzG9RjWjfSv6jD5MDtBcWGRzuASnBWEqKnEyBe9yzxg95d2kRGkMsZLWTPBVa2",
  "key2": "3n6jHDVk93YrKbHsnqsd1MWeiK6wJf5c5NgaWKkn9U6V3kuPEGdtiSygsXYJCkyvq3geFt816sCH5Y9T8AZkF1EB",
  "key3": "531fPm2J4dZjZdgLbgk1UMKkZ2LHRcSDS4ss8x4yUM9hhP8S1uXeN81FhevipPaXMswENRBiKRSQ7Dt7RRxHmLkp",
  "key4": "2R5MswisNFUjkoZgHXjqYwkX3BcVgbUFgcMoEZpqN2gbfHNbyBtH5G2usMrHY6HU28CbSsxckLCu6f4eZEvVsRwX",
  "key5": "3gVpZL6vcEFNFABcfGZwonN8hF4UBEtZ2vqXea5xUMpWJ4RwHRZLYB6eyzCivrFbLzisu3vJ5XwSr4APEX2m4w6G",
  "key6": "4wxBATtcJLu7GP4fu6GdLK9qbDe98kTPZg6i2pzZFZ1kEEVvSpxHSNHdiRDSGqEzk1uXVTsBDMHqrV4SxZ6ZTkM2",
  "key7": "3he8eXMRwU7ndRNTny75a4W7iHprfGg2GGPRfMMZAEW4c9qpHNcMxfqNVJsimbZ2TbasKYAXCJ9bDxdWvZQxoVew",
  "key8": "3G7P8HbTR6CYqCw8rYDgBo143pBEKDckZDe1mLN8U2XxVXnEbsjG7tG98LD98U1F5P8tT9VdDtGqtGFFtDG2Xnco",
  "key9": "74fg1oKJ3RqjrrQ17vwLB5t1E5jkdbU2AqykHy98WWRsSeoSiQLhFWeDqtnJuiG7snejNyLKM675M3yhSqctGu3",
  "key10": "1WVFQyRAod4Eajhd68foYakyFuy8oPcyC4NZuwujoiPPgSv94HRfdC6abfysUiuURR8gToajRE7ncDSJb9cKcpv",
  "key11": "Q7WH7KVrhiRKGmUV9g6X4sWQU649GaDSbEkTM2dTY83PHd7QEGmGCvPd5eLcn3CUANh6vYSbz6MkHZKmmXBpc3J",
  "key12": "Td8oCgvdtJFRjQXRcwCEmh9pR4SrHM6BxGhXZRa854mTsBvw8SJHqgzzCDaS6uQzWHz3PYKDSbxnGs2nRJEsy3w",
  "key13": "5TKkBfqqRdmNWfHH1Q4chpxKqWLJZqfo32vDqBJyJ1H5VgpVE2w4V7w2gxx3irwaUPGheVj1CNudyzfLCXASQm1n",
  "key14": "4B5CBrN68vPXSvh82hXRzsV88Ahroprt3eu4PakkuqfeCV1NfgRMLLAMLn5r3WcJzDY74AFzfS9kAYSQS85bvNo9",
  "key15": "51jZW4tFSTgRfpMn5izXfAQe1GQbUij36mmVkG7QqBofTbQ4K7JyxGjbRPeTgQ8jzqVHLaisZxdocGyWPezoEBcw",
  "key16": "4x56UWSkRdQzRVbtsM2pU4H1FwmzorxFkrFNN3N8qKVamVkf7bBHvkrJqc3CU6t9bMHfMHHYy2urqqQEm2wjDkt7",
  "key17": "2roTvvJhjKfmx821YFkFVdUVjudL4rrfacfxR3jJcHadxXQqmeeBFf4codPHvYd5WjfaSqyGLZSDnoDUBTN6fhGg",
  "key18": "2CXCpfwGfic8U8CEnpAsQ7vwap6MQLBmAQr5VCCD3kSJAKWNXs331QoCMD1zYxQwiPeS9xBv9kwdBzqbWdCkm3wr",
  "key19": "VyX3nPE4WTxi8xHntttLZFtEvXpZSUQQQraZh6uYAP3Q7V1ouCUx5dfwcj5E92jriJc8da9vwnV9QfCkhSkGqeN",
  "key20": "4mQjUn7Und8rSWPjuthJ8ZoU2bdLBCp8JsyGhePuyRsb1oPuM4oUdhLK7DKS1ZQrzjyKSgHc4JwyQsmnjYxnxHYK",
  "key21": "B7L9sw4GTNy6CrshKuEMwpbvxew8ksoiTUgoosCG9kV36UFSMtAH6VUuTyTDkgvkxnFdM35XSQmHLXfuUe2zxhy",
  "key22": "KbNyLQ87Qmuo6gf4wbct3vnUGo1tYhHyoNHPrULSR2gfr64k1tLxHrxaiQB9xScU2GBc6TETkL45cdjS55gc1KR",
  "key23": "63ngEBipmtZBtchNoto3TFgozK5fCKgUraEcjaNQHQw5WM7Ax8GLQfgz51CBkwVMyWSipRmTyPb62hKWfE45Qg7P",
  "key24": "3P6u2xPc3GRbHUFgb4UBXFzUtJje4ZputPBn9httGPkjhBZkyYVjA6TSn8ZhPPKSiAgywtAjtEVuiQHZm1svMVfw",
  "key25": "67YFxCNWc7jp1aM98cexWjZRHKKAwjQT7iNWi5xZbGAfiv4uSA4hULCFsiGKGkZPFadFvUCrvB1g4gbbNpRpbmg2",
  "key26": "2pga9UnHiQkniZ9gWTmupzNi37pGpcUsuL2TEJBeVd51jt51Wi9EHRQPBCn8TNv6FhXcveJf8QNqbQfF6yPWyc4b",
  "key27": "2q7wrWPsrAoyoKn5pCwhWezqaPQ2NC38HnBH7fRYbZ4SAeNqjXVY1sqL2GR3rPaJDDTVZwZup5Bo8Qeudicvz1qU",
  "key28": "51jwZTut2rBzv9iEZwpyV1JsgkVm3cCGu4Kvjc56F8yF5fRJpFGJx9GdRYHezqPnVYEW21yLEB1NK4WM7vMSX23L",
  "key29": "1aHGfVnJsw8R6k2yW7RZsTVQjSAfubPmn5m26qLCsUziEKJG3Up4kP8gSRiQ5XKCDfcsbfAvWG3a68tvEocBLBi",
  "key30": "3zQScLjjyuLsojCqPLuybJiJQ9nvRPKxUTchqo1aZyMmu3qx9hpwNQZdtB5QBcXWD8houbGg6LyGbvzyAbBnRusB",
  "key31": "Ge4AYYFUPZJQUMe6pDwFZiwDXz8HMm5a54eycNGTcCNGjNBY1qFwiuLrxvSVfVF5TEW6hGKnafRss6BFM9BcJBP",
  "key32": "5TjX6YQU12LUDeEpYzSRSmEs1gwDVxVBpEPcwamKNVN1UDeaSdoyQSeVPGUT4jQSADww7QY4cD6sJDXPfwJUbCYK",
  "key33": "5PBAESynXuWLZiWiKpVqG3gyJ4BtWtwjrUFHwcemmGhhDFcnE5uS5KrSxKJbKsuSMy9dmdvqMrucRoNzH7mkWWZn",
  "key34": "H3gZeDqD3Lh7Dkt4SjGj1wJMS7n6nxmRt5KDv96C337PWg2M4puhuZ5PnnK9bE8L33gJ7oSWrYV3xKjefPvXRYT",
  "key35": "5broF8hmJVz1RgXACZ4rgzb8gwrECdKmxscXYXAMR5hHoK6HusUhm3XoCz7oTmBfJnpgLYfW6mHiLswxNeL5Ro7d",
  "key36": "4fuNdd4nvJ6539swwea8oG1J1Neys88c6Yqvo7xM94rxapQMw4H9SMHsFwUfDKXgETbTWeWdoBFHhoxKDR4ABKGL",
  "key37": "4ryrednPUu8UtJnFAn5LBSZVyXzTVST8xmFc8LwHKkapYFQmK1GBYbYikLogL78a2C5ZJM1gMkXQ4QFDEqgtRcsE",
  "key38": "iTzkdePzsdQVaPjYWv7ovYDGMWFtKnCJ263vXq2weW4JzLhd7AMb3kfWGYzrw3eZ2LZu8He9bBtomnSxr9yEdPZ",
  "key39": "4z9sTcgz6ZGSvwenV53whK6CezLCxqhHveocLvK9rdYUxiTcDX2MHj64JmR6bTw1Q1ryuFKLquGC4sZc3qYcg8wv",
  "key40": "34UZLPjgLUi2H5NSKx17uzNo8tZ9ewgifATLAyy8toPMPf5MxZZwWTfMQeAfcRzGnt7JDcYpBKi2yXruMrZxxkLr"
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
