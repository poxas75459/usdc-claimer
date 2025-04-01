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
    "24eXb7UMxxgqF8QXhRi7fRjmySo4d2SzHEWR1ZrwSDc38JK8WVPjJVETtNo1Vq4sQQ7oU49ZoGaJtS4mQWinPWpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62vQdyLtZ6qQeATFkvin3oMmpJfZTNSdtgfJNTXhJ1JeEZo7WusZph35fjvyGCBtMk5j2oamtW6q5PXzxLXFMbwF",
  "key1": "PaqED5tYrJ4f7kNrSLsCfYRc1oAztCvPySFS2UJc2NrM68cbewpoM5tCJnj4i3MzUQUwcaagA6KtajKUgK3c693",
  "key2": "2bT9iUAj4JStTZfrv5YHZkASBQLY5YZVWbJ8G9uvZuTazvkFUj8T8UHh7GSbF9Lw5dyAnMi5hjGZ5dL4t34D4qUo",
  "key3": "5Lsy7JtboGd6J9iM8xfj17WSQujkNPmiQAkTvvC5HFiK1RkFHjz2wfnzPi1SHVEqacp93RxZfL2vo4ixQ2mt9bKx",
  "key4": "25TU7qSjFbRKnyLAEhv9knLAmgXQRL9Ag36bkabQHro5cpeUrzxSWiEgR3S4SMVvMLFGxp9DCeHhpbUr3PfoFM1i",
  "key5": "Q5xKhmQn5fN6R4UEMX4hWyx59yp3CgRWADukkTtM4D8165iq57CehY3dYLdbCk7bDAevH2xJTgB5RDnWxrSFHfZ",
  "key6": "46L7qzL2oonr7sivPgof81PHrEkN6yRZXb3thnkqAPtzvcVcdRWVSZgMYnEkAtTwp9GDcHjsoqENYwF3QBgj7TRu",
  "key7": "2PrihVNpW76ep8bPktwkiRiUSTWgLUgy8oVLmqAN9Gp6XfJSD4oQypEZkvwUA3wXpuQr1t6MmVUoqhcHbYHme4a4",
  "key8": "4pu29Ge3XuM4iDQ65NAWRmF4LzSbRrNCPk1Ja42yGJPTX4wcpQckyKQoKetkpFNYobDFVRwLxZVXgs4rjfiqiUUM",
  "key9": "4QitG7LMARcu13gufvFCguRmPQKwcmvCERY1s5Str2M4c2FfooWAz3X9KtFRuPDexwRdQsoXP3DWYmNQ6XZfPGe3",
  "key10": "2pWYW7VX79vy1noXXzQ2Jd7erUP9G9EJgtS9qGrRWhn11ohXvKsEwcuUA2EJVP7nFnZdZ6sSZdqmfQJahsgoqics",
  "key11": "3TTDjPhrWgR8XZaxaRedxxKm3Mq1mVHP5TKVYCNfyGQfEJt4xBN6teD9qgdtWaA67MoKUtVytKK9e4S6FteV1Esn",
  "key12": "5QdzZWjEMSCS6dUCvS1TEdeYCMGP3boYQC3Wu6T6T3XrQtBUo1KFXgH6T87J9Zc6Eo5ssXbVQg5TtfVo7p27Gbrw",
  "key13": "3zm13XQCDbbg2SnKLXKZKdRr64EPejxSygf3tDpNCP3RQN3TGGrzxkZHAnBUdXyo5LN3T1cX846t5FbLjPXXcLqV",
  "key14": "33WQUQuzKEfnXttvTbtPLWHtN2qAheEUKdB9wsRw9oFXLhgkMRdR2e8LKNdkp6LaFt9EZD8F63cRttcTthXg23DF",
  "key15": "L3Fs7ZCdTSY4LWHaoiTZiPdcpetUB1FsF9SH1SE5k4CYGcvEjUDDhV8bV3SzQtLxfJkmVrtj8KLYXo6QYSMMEWR",
  "key16": "5P1Y2ps1xxU3WgevFq8TvZDTwZN6SBpQur6AMrvEFpSwZz9bryQ8GGi8eWs5WMrH5SLs4XF64QUnXCawt7Nt9Tge",
  "key17": "5vD23nuHHpwNosfxSB6YWaM78pMZv89dCsx7TtH6e4p6GRyQx8DEtz1cYSxuHEtRMzjxT7HYcm5pcBzGjbJjQVB8",
  "key18": "CZuqtwwKXmFimz1EtByVWMLydUo9FPJj2VcyLrtwrBPfuHf1YyLUYT5WFbMhG2SyuSKA1Tg3HtLzRxs3S7ZCHCP",
  "key19": "63NXuQyC7GdLyYNt2qyn7yCQDxzKrcS4HtPzxKR61zhQAhVBR6BWQwhpgkV7LbTFcjhhq8znEbQa3tsFibrMvLbv",
  "key20": "3DSzWqGCeUfQ6fSh3vNVdAGPypEtaMBRE7MLSKvg6PHxrPsg5MweTxQsr31Y1GoUh4toDsDDzsCK18qyHJpd1qgh",
  "key21": "5EiTiwZHYrdhyw6BVxK6zurk9giUCp2HBxeSQ7CbyL3UyjsBGYtgSwjdhwM2VtNNLzHy1cophhbgDCnEQmNX3BQW",
  "key22": "2aa8ztmtQdqTjiUHbTapiYU1pZfai87EwdVtbckSeLNquHr9kbf2uqeieW9YtZuwspVgvnWWsWWpgmR7xGfEL5ht",
  "key23": "2wSX9KYpuxeExRJTtX8GbFNmm8SVhzZqHPrWq5TqQbvBYWYGifT7cqBbF8z2bNHkkEPnqBA4aURSGLhyzUASGCVk",
  "key24": "5CCVSqiYWNmWzPKMVi3oKGuL8C5EXBeXrmmDVa5nj7DU2ZtyrUuG9DkDbc7jVe6PPZfM9rfgsmZdhC4rLwQ72BZ",
  "key25": "2nN1oTTvZGbP4ybdP3k3UWyTzSgdhGvAvitnQU8KG7TYg7jEhC2ZJcYVFsrAqgaZqmzWjj5gStNUsuUkfGo95ZuE",
  "key26": "nC283hAwU1BzxpeJWjixGyVzLmYHy4t4iCwCRT7epha5FkqZcB6sPVTiqw4y9r95MtFUUzXiVWeWvKKFnpEvU9T",
  "key27": "KTjyjup7JrsiB3ZZGNNxT3abt5cAKBV5RWa2XuxEDFLGqQefoBMetwzsoFnn9iVk8zC1trHe31r6nA3q8c4cZA8",
  "key28": "59Ee6EwTfs8PdwxYxPaYeMcCihHxjhq2xALxjHu2Le35tGe6WzVmw1wBppfim6MWcgtHaoFSc9YWL5uABZKEDmhC",
  "key29": "2ormSrtLceZQ1pnZY1k5foLLgTNnUHNGP3YifTZppCiYuNrzbB5Y1orFqnYRuZmFTTEeXuhoiihJhydk3rNubWek",
  "key30": "4o8piUYYDaA9gq6WPtgyY8QzYv3HTFhsjWa2PzKJ5b57cmK9UpK9PtuqJhLjhcXURVCBHVgEeVqtAvEetW7BnGiz",
  "key31": "wDfMm7hnEDAef82uQ9nCmCVZV55D7BgJxweXeFD34dgiVCawgiyuayTuVJny426hwg3CGAMi56VsjHdu7rchUSm"
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
