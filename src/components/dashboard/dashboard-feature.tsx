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
    "2DknJpudizKTia7R9igHgF8LjW3XUXS9ehGedzrtB71ePQTop5UFjSLzFmf9AdYvbtzQW7MJeZXFM9q6rKZbFTH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KFBKrk847usyw6doR6VpheWdQES8cSi3oxdZXsdR79pnWMCiABSUEXdsFHEKrPEp5QUtnsFfmnpPQm258z7VBkF",
  "key1": "oBvzeR1NezUstuofjDkubTDn9TK1RAFycRReRviysisyLaNrwHt8iqVYLqFYCpEzouhXndJ2fZHAtQChVh3E91e",
  "key2": "4cuS6PeLEEnvifDxTJENvqPPCiYqq1viderq2dGmrwwHifSHMDoqvaLLx1MBKu24PhZN5AXpEfjn6GfLWrjiLF25",
  "key3": "4jyYni7Bqq691eW5Eh2pvMkSpeYUrQaSAA8ZaS32aidY77hyfLeHyuxCmMNSNgbe6A76dEuZ48ABQTenzrnNy3UP",
  "key4": "2oZxdzbP6ZXTGWAYS7pUULeC6o7JDZH21CcZPfDQzKzuRkDrPwWRAUffTiacAhANYdSxhxy3fwXcqbXQehoujHEm",
  "key5": "5GpGuYWpedZNXbqdRqC8YMfqMpxAu69Wu9LpGXfp4ZJGaAQJ9tuRrbb4hA33YgGeSrXfeHm1EjHa82d3DcRHAXhk",
  "key6": "tM23YqNCXFo5bjvK8NhePfAkWGrAtRBXxX3kQgTfCrwDiHneG37Vz3QXD5F6dPjqQ9jz1affkNTfw4qVbMgCGRG",
  "key7": "5xgf4Rg4noRcEhsGhfcY7sL1MZyn5CrgmJjDALA1Qqnyxx9xvoqEaz8Et2Ttq5cRT1WzJzRAZDY92hfWmgMvP2fc",
  "key8": "derpqdzdTD8x5QasCDXC23xyD2skdLYRcxj5ooXAKK4Qc1q4XPaCFgd2iWjx4hbJMWe2XdaH4EHGZaMwLCdgdp8",
  "key9": "5ateTzBHSpKfsP2AeXYrVLAdTFnUSMFRB1r4VoxB5PqXnjqA2vpoTjixFgsd35tL2yk2uGch67R95cy11VeRCJA4",
  "key10": "5xjtKMft4TWAcS2zqE3S2W5eSsPWbYz9rQBhPLcZ6Jfr7oRYANWtkHWiHfw7fezudjszsJqFv54Ns2LDawv4bbuy",
  "key11": "38JyKjcvMHHYGaqfiJdWGMKHGkRuvXUfUjekg5demoXBfEfJBGDr9whxVrF32ixEJQX15wdDYhU2uUvyr2NC2YTJ",
  "key12": "hDLucbUUYwwFWrP5fLB7aQhijq3SPBBJ9R8yXuSaZqd9GtZQ9pYUTDVM6jSGKDt6K2DeqWBHyiwKuGVQXVg9VMt",
  "key13": "47U7g7AEdEdbzghgkxkH9VXg7BmPU8ewzSdJxZVqSZAA3eToLwJC8CdhguhfSaxBwbJ42tdQjJnY2QFpEvK579bQ",
  "key14": "2UWJPKBaquqWMTMScr7ZM5rTi3XCSvJezgVqJqdBUA39b17Y5hJZBEKrtRQMKNcPhr8r8PQfxi3JpmH43dNbCiCw",
  "key15": "5S6zCDFHatX7ANQmr1qwrppgSng2D8BfAHhUoTcP4VtwutKu6wiPRxVTdiZjEdB9e4i6oqY85cKNenD72iRywpKf",
  "key16": "63qEYcMgK3Fw44nLeaWyKBRfXAdm4edNCmivQjSrnZqgiae83C98E6MQDqQT1pw4xc5mQuTdkBvWydKR6bXNshZr",
  "key17": "4YjGg7uMLnDQCpwiy5pnCk6ed93KtWQf5tfC26f4vFZt2b8sPaVuakc8mXvi4u3yhQRtnuenbCcj1fEgBfxcsLX4",
  "key18": "4FQC6L5pVUFNHMzYoHjxdMif2F7vkh5xmpL3ba4up6LYvqpqsPiWwWBhJZPZhvYSzdRft2QmtmJEDBY5P72MmpcZ",
  "key19": "2EuByRk8y3ZHmV2wVuztrWXFdKrHiYW19UUD8fNeHmvvNhtr9fap2bKP8oUtBHVu35KvhKMR4K6UfdZnwJFSndVt",
  "key20": "5KaYgAT6t4yrJpLbK3PHbGJfp6c3w3ZsoiZSMkCYgV9WQxggxTQGu39BZTwVZnM4ZaZm7gp33NavYBeouapiAHzw",
  "key21": "43ALF4SoZeconb43S7SYRxD2x9YuV4CaHs8eJt4jHm9PjiKQTmsYRqRVfa2DrQhzgXXzxZyUCQ3WAvWdPz24ui4i",
  "key22": "5hFTjGExaxCFxBc6GocXczz7xoUqkMLAsfMz8sQNeDMWvoDgJt3UcgQiTLSTBUxy9Kh3zhJ7uYa8qaH7xjptGgZ",
  "key23": "5Dmqyjw6MnPKiwerv16MEUzyWsiSrmYZh8fDrdHUErM215xcGoGcmHfbUz9sJNGDQPa8fPoAnwqH7miS4dVDopaN",
  "key24": "4bKhkfdric6bogXbGYZWLAStU8Emh9Xg7YidYj74hTo7AsTLtPniyPHv9aj9VZx78dwpjLWJuoRebXQCapPH1kBr",
  "key25": "48M34iuvjT7k9pKQvFSg7RqUhkD5p88XbVksfdT5fnLhNirevgcis6tfe9powGsttnNeayybc79vAKB6j9BhXHJu",
  "key26": "42uqW79YBQftBibcUTCVPimzkKKpsNyuBL9tG7GAUqDbSQQG42Q3BwEHf3aZzAvEpL6SQLgZmyCM4W49QRKbSSuD",
  "key27": "pWTMa3cuX3wRGGpZFsDtu24KedXraCjAKu23nNjEkkF2LSFBoSNBUTD36pQ4AwVjswsoBSLhurmey82aRGbDwMi",
  "key28": "26vvkeN7Aez8wExA43nMFKmMWtHb1qL7eici1zy3CSgaJmqLVngaGe4waUABhfriFP1z4FNWbrxuZV94irHaCrBE",
  "key29": "3bhfxW2qfYYLhkuZYJcqdyiqggmmamnG2kQFoEGz3PBeDn13W2Vs1ykaXkKB5hBsS4XjFtnqR2ZGj4PZNNAPKmF6",
  "key30": "3qhnxdEWdjAaC9rvJp2vbKxakN294qpRjMdxgqgDxWrUkD2pKfTVLQ7ranEjfqRpcNu4Phd72TaVCfHAZgki3wpe",
  "key31": "3ZojFL9sUNnwMvcF2nLrJPqHBu59PxZJJSxNpZogwf2ovC6N5Ewz7n12235G1GA9S5t8WGRkFwYAVSCWrs9SHFeL",
  "key32": "4uy3MqyqbpGZJ7vrmPjC6e4UjnmhTAxq7dCmgx1vhthTKYEm7HUCx8m3feB4mqwbvBCkQB3cqschiBFRKuFsqBVF",
  "key33": "8DqJMrM6tfjjTNcrEVbQyDmF3U1ystaCdVGvZHUP6tQ8LF6uGUrexHtHiEzRuLJS3398wZswc4Z22EpxamQvSwV",
  "key34": "53sR9RAy4zCBJYKFra4wrGit5WkmPNgMzBfJM3V57AyyjfbD2U9GFDywaKV6XNPzvTLMHW5qhhoe5hhnboB9Tgi6",
  "key35": "2fCUuFPDpbjBJRauV26ooxirZTquXb8NWTzeEr33ZmXK8JkKqf4CBre588dWtN7SmrKvKHFd8KUVY5w4QPCe63R",
  "key36": "WRgcxUkxZ5TMTovdMJjtU7fqWoKg6eRREbK4K6EEoNxq5EBckz9hBKFBuQkHgnsQGFThwxSEU1h1WvrTtdVyRdQ",
  "key37": "4LaG4fPUJvPg8oBbdcVUqYJedaA2EUNpEAtMwdE54mYKFpcrQ5opSQgrA9m2FB2QJTKx8pJ49E35K8XVLWPE8rLm"
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
