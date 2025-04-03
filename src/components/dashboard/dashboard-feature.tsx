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
    "5rPi5oLQAdfWD8oTHQrAQPvih6SP7KXqjnmPhcRHuQTgaxa5Bd9ptXmh49keW8v7wp9UscHUx3BEkkTUZKiUDMPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hMQs2W9dgUknkL78uvmy9prsvd4bUzFZ2SbQs8csnJtw3qFnLSLZatsTzX9rHomZZSd5dYVfeuwQFqF7QpHDsqN",
  "key1": "ctpMvKn56XEfZNN8rVR9Pyd8RyZtyzj1TVyaNLwVdDduxi1TnzhneArtUiQ1Q5ZfDB3yyUCcFihXdaTtp9vWqSa",
  "key2": "5xZMNe2YotsndSZzZQyTvRWyLt62jHbBa3dM8AcArZCqJuwxJbHwZQYtR5vjRF8prTVkcBLXZd2cPYd6tWRsUBLo",
  "key3": "B2hFsRgXqqNG21FZtswKDYNZHqS4JW2RcTyRW92VjbkQ6n4aLUagPpa6PtoaH3Jh34anWDRaN1cbPrxiveUHVGa",
  "key4": "eDuMYRg7VBD9s1LyahjuEmeAsWrc8baHnnqhtTGQ8arn8etYPy6avmQ3hC31GbTXnct3F9tDHSRF1uzymvoBP2y",
  "key5": "n3rxEbZ9tJxpjHPQdrYR8Xe6MfWaAgan1LZtCsLi6urm699DtijjPDxvvWE5WL2XSkwz4raGxSJV6QoqyZVVJMU",
  "key6": "4YVJBrQQ3hpxUAmTDGQtCBN8Yd9JHbtfxXPZKohyVoS3BPywRy6jJjrXqS6corhS5m82SA58Rb6N8Gi477TP4DwE",
  "key7": "3Kvd1FC7N5n5Y9qiDMoATdhTd4cZRCUwv3f1SoyNeavGEc78wG5b9uRGYeZPbv3wT2a83gxH6i7tmtrGuMDS4V33",
  "key8": "2djQxAaMfWcJmAUQsfHwuMHyGcc4X9LXQJmjKPtH8KfqDGknoRnN5jRjEmarQJ2pAt3ZmNgjDQox3RCNo6Cm9vKD",
  "key9": "226hmFw25iHggHZaWXTRHEirwmeudWUAcihmmu7G9yCHLUWSWnugd7AkLC8H8HcNA1o6xKovp9uo3djVbLrSg14b",
  "key10": "3iSkaNk8QpoLoVnFvaGg55XvqrJBZgBcjpojwSKERhed4EUxhHe9Jc2pVte8Xob4uhk5AGacEmbXNFugaaL9SF4i",
  "key11": "5pDMkFq51C5ukRCWgvnhypgPngy636bBHGJYQfwgn2ziiwjH6GpF2yaV5icXcmbCtzwijUne7atvSEkZAtsEBa6y",
  "key12": "4rXpfAwVs2yBVte7K6vqGZoLzqcJ7bwccbPSUP9B1X856DCafMB6emhsmTfkE3o4RgQbHcbRFwH7N2spVnCLQMP7",
  "key13": "5tWXmURt74LTibEnwRfNgp4Ns9qasEAwS5jS9FdBPNZqa8G7wT4yrjSY44bopA1pYTpKqidFxgvbNCbet1QRmitw",
  "key14": "4XpcGby58eFVXySqEvJioeqMmmnDySutD61bt6UjpZEVdZQ9ak5gsMZ4tpBNNALBtjwZzSRvHUTZNMiLeTyUo63S",
  "key15": "2Zk2UrPNpgCBVJpXKNb8ThBKwDJf7cDZVA8g3d3Pdc4NjcvzAwLH1m7VJw7ARyPDTiC1JapBykEKTvLT7mrAQ8b2",
  "key16": "2NRB75MirCHcHdFYbfea4S9uGY77zmqYmeqLi5iEjM8Z5ao9baxWkFywVhfeFNEV9gdvmtM9mqBWkH1vWoVMPX9h",
  "key17": "56Ei8HRu9sEUmxALyk6Jz98La9RTbum9ESohCRUKMpEBzZdnPBUnK9g5dnE1W42npeLB8QkmH7sVFWPsgNRnGjKZ",
  "key18": "8hwyzarZUJt4NSX31qBTrguZsison4qbfnmRHuRtLni8kRUxYrJsTFHmXQ7he1TdhCj7u79uEZSFN7zhiQ7PyKV",
  "key19": "3JucwK5JBpnsLbMyf4HYz7hKuN7BudSjVS6vxPFYYBvG3wR4ecysE7xdYTwWNitutif4SQjNWQNvQ2d18pco1pmv",
  "key20": "4tDDxnKPEfGzskWPunKZVjYKHVgJvMu3kvvt9PqwsSFzGdxNVaKAU7hGTFY11r4z3JcKjgmJ8dAvUFsRv8wMBSLE",
  "key21": "4HZkeHb6fYZccrjBcsJCRScpf1wadCJyHZYVAgKjGvJGnxtbvCbaZbU9kUhZSjA8DbJoYA8wJzsk2o1gQckvoajT",
  "key22": "5z5s2Dci18kqC7yZsAdtAsMcic1PrPH7eDwz19jkvR3kbWnGUHJgo9qShau6axNcuG6f2vc2bUafe3sfS6pCyDAJ",
  "key23": "59BuRFmNHU4J1uaM93n8JpcYTnsHnucugLchjxMqwtCqo3WTQXQcEJ3KfaSBEGKzhu5GEcnLqTRw7i4Wd8PjjLqp",
  "key24": "4g2Lzki6YsQAM5eavyK3BN2Xhwhwdj75dLiyrMv9rpnD969Aa9wPTkMPS51NDn4qRjyzNxAcUMS82rz67wWbitsa",
  "key25": "36Yj9fjxLw8gBxr88eYM4Hhdw6kUVWgYzNBciJbBMdrR2eLJRH8RWsNupeFExkGmeFK1G9dKBgYj2eYHUc3ymc2c",
  "key26": "3aCqoMZ7taiU23tcrmq3ubz8LravSeyy57WhQhB7ipYsoGek2ZsNpYqfYiJmk9CjYqhq3cjCDonBxDjf8gPJjTC",
  "key27": "6e2Jh2XNpnEeGRE4qnvA6run2CU9y18R5VhbLV42ukYTEvS6F73bjK32fbZpmzXeeJgutDTW44Witef2MpaoWRq",
  "key28": "3Q6eZm82ovnWbqH4hLeiMoSzz81qb1fQvt8cPUSPJQzSPqHVG51fKv9scrNNXjpFYMcwR26C8LsX4TjvBydCvZcU",
  "key29": "VxrBSHAZq2LvLZeMyuKvBL9QZ4hUgYSqVz7xETWzYoqo9W3pTqcogNmiwN1XWRQtkrRNLFeKMqQ4G9pb65TAXqn",
  "key30": "63CvHZzbcqSDUzn6siTNnpYA4kKrEVnWvq8ohQ7dc9iTAxY9DyESvEoXpw2dR6BijjtkhU5tx1Sq1CZtE3SiE3SU"
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
