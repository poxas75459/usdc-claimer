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
    "3mrEgj51jV1pgK6VZDWdzaFFdiSW4tjfW2NCSXXnjAKGAEoLYperD1a3ZnFFVPshAyoqqrFxxFbzbWP9LjwphJrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qdpLaK1eQpPirh1Pt6LS2GSAsXo7TTwKD5HGvBxCLCJZWYh5Qgmo9D9bENznrb7eMRzEh1NZKDuebkWHmjs6KAR",
  "key1": "2rZbDAqUgLS42xQmtAYqpeF4NNKC6nvLqEmYHGTiPo3JDVzUDVhW2PDXbnf3xj1LLaihLD3xJn98tGghCxpVE2ZD",
  "key2": "2FfUEhKksse9zzxWijiVUmazACdLsHKQrtoijPPMq4YQZaGxRYjZSQQNSNjjL3iuTd29ZVq4T45L15BST2hYaSBx",
  "key3": "32o7FcJmonW5piPeVdmzfXDinbrTybZPyfzooFbykfQWKgEcRmfcsbgLMUPUBSgGnN9NbaEYUmpW2cmk6N7oWbHB",
  "key4": "5vG6jjC5NkGVDJd75Kpf9RYeQ3Y18o3TNwEmefaRj11jQHWnNNfUfP59ExBjCkzCkDT6o4WG3E8MFWEufjVW7Bt8",
  "key5": "52PSTckoCb59z8JecqWHtfz76PgzyApgMqTUxKwCTxhuVTVSk15RagfAjxSPejSv3UMUoW4P9bmFf3F2vXAJUWnc",
  "key6": "4LpN5EDqfim5snKNdzZAwvgaLkrCdQyu5JpAaCzdMMYBJS3GwPwyTHvv5VvkqztKnW5U8TccPwnCYdch7rupdLj9",
  "key7": "ag1pLAd7U2ogqr8wJv68KSHz595LYLueydB7VXZfoDDb4mY32LmPkD8KUfNyxwTJC8qajK2yRGQ9Hz1LWgL38NE",
  "key8": "DZfozU8bS4tW72eNvtfTcLGZJPpWHY5L16FaBgt79kEK6Kayq7gWMNPoqvUP1Fw8xZnV8PuenTKKFAeBu5n14AE",
  "key9": "rxgFnfaDvPxCQ7911dJNTnECNssy1uV3ReWvc4ePFXy43caFC16D57QgMVqeu8UDabNBGj7Xp84RHzrc1vzE3eR",
  "key10": "635TEFU1nYZB55YjGZzzC1etwuZzJEpiwQt7MgPmq9fovtbms1C5DmwcjZ8NWA8uJBXybvJJxTmFZcpwCNN6kCJy",
  "key11": "4qZKXr2VTq8VvYp9b99YNcrbvyJpFykXZ4DM4fo5UcT9Vqscbpuk9gaZxT6L6Mqd4jTdtcwbsfvsZGTr1jAnjqv6",
  "key12": "36ggQfYE9dUJFtbs8y4FBaixPXAeTKgTeVW6MxM6eCnrgY1sd8STcfFhCgHFCWdygoXQ6sQLqQ8t8xCUuVBVPATv",
  "key13": "5xiBvSHG3DFBXrPGozFHDyZBtaBVHpyhmxBt598TBhfcS8EmFkmFGbKhaj19Hup4zuKDu3kKd5F23b5gXTqMULFu",
  "key14": "4iBPHCJZJa19s4ukARPEjWRGa1d8D9zMAqgkMeHs6mxzp1huo7tgeh2sqjCWAsPR78a5ERUhhbrtpnusz9eDytzy",
  "key15": "3uUDE9P1s9nzVDbPNsoCYMngRf1Jgwnbx31hBANXu731eqnoLGPKpvWFiGU9vdib6McQXqcm6SArcYmFoj8m9Mjn",
  "key16": "4ecSgLQtRwe1nmgkZdyGQoLaFetWMa3RwKGGFdwsJF3y7t34oPjNF3mmLQ6GnCp57G8Emvso2zjiqixZbaw7kQmS",
  "key17": "4KpAwP8fQPgckiZUb1gMVVxnqjeomZecAtahq6999LkGqhUMLfFRLGmAafLsks3g1EyqbKVEE5eh1ip9Zuip3cig",
  "key18": "31xxaJc4PeSUkQoLLeu1XLDBGAhhPrfT1qo9DiJbRjyUHcsin6zT516NNXf1s1HmQoCnkjAHUgBwfRkK55z9zqa9",
  "key19": "4s5p3dAZdzKK4MjnWL4o4YZcoVwyCsy4kqCirFfshvCxGrtNVvGnBh1hkmwzcKxEq26neLbq1J2Kdh6ZbsKxAqez",
  "key20": "2ViBgNpNRWjSE3opj27hJRtB2m9tvRAa26RYyDqseCEirYZF2jcPKMLUiqedDcbZRpjwHP9JYqRHcw5ReWfdeoaQ",
  "key21": "5QDR7vUhjiHZWRenVXizzSVg7uzxaKxuMzM6Wm8W3oR9WRRVZ39SBq1onuWTTe9PsU6HY5sqREZvnxyEo8XVJcwS",
  "key22": "MgopF2Lj8SRTGAiDZwZCrDjshWHubCevybEQ1sAUydiQAQ1jugAUvF5ojhff2ccsUu44Y4u6yUgUuBKZym5UqSj",
  "key23": "2j6YkD6MLMsKhzn9miLzep4vCh5o8eLWmHFME6PqtBu4vSA5kaqT7hC7esc9zDLhqbN1FwP7w6papBZqATUyW9tt",
  "key24": "4ETgdsBWLwZ3BYtzXtApMTCtZV9PsLJXozP7EcCsaTzqGK6dg3ByQfugEt1Brk1rDZJAhcF4njXG19zZKN8pFevg",
  "key25": "5LbJN2RkW1ypXshdBVkX9YkimdQsPUWTipTBVj3LwENAfbmt5HDrYruLaLQ3i54ZSLoCBpDEVekjM19bWqoAafCs",
  "key26": "4KJtj5B25SjrbG2Lkv1rcF6h2NVMgJFEHQDSYyvdTGyDxwofbUhJ52jQtkBbGyXgUHjiYfrkSqvLLyALwTPnL9eh",
  "key27": "6572iD3WceU6GgRNFWfcq46L488PirywYJynUe43pnTZRPs9bDASA5XyJ9Av76XYbsDUFYoKzAryX9T2vtsJp577",
  "key28": "4xFLaPekocFCEHFCts6xk46K5hM9WnakKqK5y6bGbiuk9p5UdV4VMUVcNeUM5LEwZFQ1UxgsN5nboRSXAvFneot3",
  "key29": "4QPSBcbjNpXZremkwJTfRVLvruokwBfmBFV371HiEfgz9CsUhFRXYCBpcRo2NGvEECghLmdhQnh7fxo5r7ZCwBAJ",
  "key30": "5rmmyknbK1bMP8zniP3KooLzKB6Ct8bDgKbMWZGtjmegZ8rExTgtXiz9B7G9FGoEZyVkiofUZ9xMUph5rgt4xt3Y",
  "key31": "46WYNwAtFj9eKfr33CtibFf7YMvJmWEacz34Jot79oPBLmFeeyFc33wNCoS3JgaCXTajXL7Uh1hFYqSz8KcYh4Lw",
  "key32": "5mLY7earUf5jdhqdbYhAbh3UZ1c8h9PqHUQmCm17VdC6EmeVfjBTxoeabaS5v84jf5HwgoYZHbqwxQm3CCjVaksN",
  "key33": "4gekrmfrnWiBGdtWo8msjPm2cT34zdgrGchaMu8GytNq8QTK8ehfzQLSR2i4MCKhPcNmiMxohNtHi5ny72m3cX4W",
  "key34": "QHukiLjZxDK8mv4HFctRquCH6qvjeZyJL2HhsU7ZFTyhU5ndfT8k7v8FBkqoNcM46oU33NykoLfNY1TDzSceGZv",
  "key35": "2S42fmQJYQvWwBFR3yYLR2Xm8CU5eGxcSVNQZhMXN85XXCzAzp3smphuBUbGyFumUbZKbmKEwrpZ6dZquXnos9Nn",
  "key36": "3KfjEJzf6ecAncapJPy5YtrDJoAH3GDvLjUaHqg7pFCbMzjnQTZrWte61H8HTgVQRHJnaowwegitq2eehrSnHG3P"
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
