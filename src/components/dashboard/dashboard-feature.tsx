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
    "Lr8qrBipRFVKZRNY9TyTVz9HD7EbKzee8X4tub9zpkMFDFuJtWipHiTcQz7AQ61fUQVbQDpg5CH9U2FtGSc3VfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kdgLzvtorBETZwQzBnvZASVvM3FjxFmxeSNY8aWow6SpdXx9eaHy7y3nVLT7pVhnUwZJZPJUsFfHQTtxG8McEdf",
  "key1": "2Ck9oNtj4XVSHMk8wPPneoGN2uhayhPc4b8BSBNdZTLXD1K8GY15C7BkeK4syMPAQSgtg6jWQ1zXYgqAZRFhXL9Y",
  "key2": "3DBjQhrAbcZ3krdYvkiqEbu3QDWYF3odgNyFeH6iJYcfqZV53kXc4CbJAoVQxzhFadMj1mZxEa4q2mMAmFeMSBNb",
  "key3": "2X8S5BoyUEe88q7denBiNpvz6fdbfeSV5NWz2TD9Xq7ENmCUxFrii47Y4vqobxPVbTE1KRS7a3fVwGuFn4SJxNUt",
  "key4": "651paviX9LVBR5YkaR3is1bTJWruA3yuykbbwVj1CfXETvXfuTHsko8Y8jtc29nDU2iQrzXLfYpPRdamrQCbL1eu",
  "key5": "vk24xMGpJ4Xgf7QukTLpdde6D3txQCEkYeu8j7qrWkRbKWrecyVh5B6bQNyCRk3hU76gcx88jGPT2xm7gBgX3Zp",
  "key6": "3c8MEam6GKTc3VNifJXHDytzQzMtpaZwKAch8eoL7zQ1kKHsrmLQWvi3sbB7jgsXwfAK2WWhp2mNUyZwKt1JiLUv",
  "key7": "4n9RfcT5utWHpCYm7iC9j1cehXTETxcqGnjJ2FSipuqvN9skyKtxjttvJS4iUcx2ZJcQ9kM1EW3S2TEJ6woizsuJ",
  "key8": "4MWXamW6ro1BQu9tvJ4ho6cXFvHfwNZgKeiNM7y3q46M2YwXqRQF4zy4wiAdSdRyDS6TzdqswMZnHj6N6k2T433U",
  "key9": "DeqrvMaTtuqZnozMLXoU7maPbarJc3KsRsMxSpAqSt6GCGKMT4jFenaz4J7Gm91rPqpQxfFknahtoY58vJZcHDB",
  "key10": "3nqYcNgAD2zPYvAYmjgaiabAqQQ4xMBqFuTqCnsaJcycfUeABaa7eYxoig1rLPrcUs8zhBMThM2pRkXmeQTAnxD2",
  "key11": "3hz58BB4d5saYH4SDU6KEJUe2AxAGpMnogXejmxM6QXvF8NvSh4rLTjUMs9VnmySsbhiDaHC59BGpqQuicAtxt4t",
  "key12": "3DMhdCnoFGy4Cun9X82zoCPsvjc2tdU7jn3rVAfxwBUcBziDMjHpz7gL2MH1zxouHNMy7DEajTcCR336ZLYU3jfW",
  "key13": "LmBMhyBG6k8jUtrzCkudLPpqSPha9iqtrG5xSY6MCDeP21BYCde9N5AFtwvwejeki75t7cDyiG8nJDR41bbcUY9",
  "key14": "2yT9gU4kjnCxW8ZAkURXBER7LeRB1zjfN9BorqwTG2USfFoQ2XpGHV8TRoUhPvM2DFL5Rka7wNhkHz6k2F3rREAa",
  "key15": "3Z6KxdDWBRrvP68KP8fjehecD5R7bz9z33kBB5PMDMwmLpeUaJZPzsoT49tQisXm51CbHxLtCBf75hiHE1Qk4kLk",
  "key16": "4ti18kR4F6q3TB7LcenPrWEnh2x1jRWYXoUZ4XdoaXJFVjWCafGTR4Ki1jH7scmBfgFkzwA6BmC9AQNCiBzfKiJG",
  "key17": "2p6jvTxdjpEm6NzN7v7ctKRxreuirBJZ7NbVUKV4KwEakmPYpGS1pfZCKDzKgvAzv5Hh7ZuWHbb2niPe51YtUCFx",
  "key18": "3Eh1DZ3hQd4YRrsGYYnxF57n96nCqakXeMQ8ZTxhEBsfLxTspE6VNspBFh6LLBJmMEgC2rKVKyaqKbeMbhncbbzs",
  "key19": "3kU74hWVwLUEiAm2FG1cPoRtCuy99pwtH6dn5YHfrT9aR6uDG5YTrMo8XgEbvG4haCCbnhSnaGnuRozjjoimbXEf",
  "key20": "4WzRNiMNL6zbbHiU73dkcidxbB36JUFWjfjJLx1yTwisx3ZJqy8aACp1qQjELKNhh9wr5jWGGj7TL9oMikHj2mQa",
  "key21": "344dT1SS61bXycTdw7z1E5meS1SZPdpJ8nyge2LYKsqWiGLFytoZ9nS43AjwBpqcFCCnESrQdSjPkTDPJwf1GgXU",
  "key22": "5qoqcZ8S2RL7uhofYBiKLviRs8nQ7mGnNPm72sXaFeTM9VZVRVmFJsubQQfrBzbpnvgK1RaZDLjcJnJAjsc8me5F",
  "key23": "2qoFpvo5Wnw3as6VkkwvhCiFxj1QXnSkvvmEYS2qxxqWMbuWFr1gTstHNqTTrUjE5kFWygJkCP4UZLe5TRVjwFot",
  "key24": "319aVnY6mysRRXNDMFXAdBvNWKv5kUA88wx3hEwLaaM2wUQZFcgzqd8CK1PycCDb6gFHNotysCYyYjKHCWx19euc",
  "key25": "2AZ2VsmMWHdXKSYw8CTKhBiGN8SyARxojZjmzJmaCfxbRbY6KwrwfWjLn6YJZfPCXzBoV1eVkM4fe8mNjdwa6tkw",
  "key26": "65PT9B2ZifPZTyyJoXicvQH8nm4j4uxYowcjiAAAx9PRsnhhSYv9ng5ReesXZXF7bjEc3vdS9YcgpzySBAtEUoad",
  "key27": "4YpZwkuEK2z7bT3vUdZPXE6K5x3i8ZWRyVGYT75pcCdYhDeBH11yhU3MNyj5GEUCWWZWyk68uSPECupSSnC5i4Jk",
  "key28": "2UhQByBWzKbBUNq4hj6LDjZNzQwdXcDeecARb7V7reBfrUdaatqfN3891nFttyWV6KMaGUsHRiGshULZJabzdXVG"
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
