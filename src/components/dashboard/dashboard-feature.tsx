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
    "2W3NswDi5NLyWsg6GxHZCGuvAHghnG237uNNCLUcPNZzdZx2UprijTH5VvEmHe9vcdZRzesWXMco7GLpL2rjqi3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B56gbV7wR5tcWiBErLUs5Pum3j3DY11nQrGJtvVQr61UYATGknpwp1gnv7eKb93YSRcDBPWGjvaeoy4XNformPm",
  "key1": "2x5Kb8E7DQKA4uZjV7DHe1fouxGwLbuSuk5PTe9hKU3RDLCvhG7sHVvpfUWbGXuW5sfNHPKoMaZqBzs4repVG56V",
  "key2": "4emKRw5WkUaoBrnagnqftxEkRhQBNHfYGpLJ3wWbWYT8srtqkeQVsZhBtzmYJ1NHSYySUz3rdV9nEuu1T8azbaGF",
  "key3": "5aF9KqwnUe5vPF4wQDc3R3fZnRA2VpV3oqj5Tm6pq4hLrHCWB67SxhEGpkLzXATc3GeC3ofDRiiz46fafwYjUiAQ",
  "key4": "2S8M7fZwLHXWSAB8Lj7cw86xKgHtH2oZ2wLAzmPW6MrufcczH8ERF5SRr2WReRQq5LGXEPgFENmiZS7Zm3Gj1NUu",
  "key5": "5SCtLroBs1bmSvWUgnehY1v3AiW2gNK8zRwREjkVRS6f84Q8jZrtTJBPWJpG5LGRuM9DTS2AeRKAfrheHYdc5H3e",
  "key6": "3oRxhAUmfocwLpc4P5s5RXycZaAE3gyyDpzXVvztQxFwHWvd4Ak26v146cJPEpMdhefstEZ4bwtfy3B3bNiscbjs",
  "key7": "3Q1AMX2uAK9hwMnPyQQKSqind1V9MwGvvfVKNXUDbJqgvB15BkFKZxRAgrDJe1RiWXCXoBGoCmb3oq5oZJ5qpJQU",
  "key8": "4TfVfzLZHbqLXwX9CGEG16TBxU2dbjpqNKV9V6NikWNeGDpHhWu46vqNeA7xsveXsapoRpX8ZgiC5n92iripdBFE",
  "key9": "2F25ccJW9bboN5XMUVpyq5o6t5ZNonFMUrFd99byzRQBrHkB38sKir9U9iBGdZcj7moPGSZzKgUADupBnFC4obMb",
  "key10": "2ktzqYTtBg75KnU5BzBycm5kWeF7bM4kKnLXgJbxSiJkcgizHHfGmpmjqJ64tqkpeLgBo3gZpd2Y6iAQy7zfUAQd",
  "key11": "4gQYwHzJjgoSCs5kav7DfvNdKWzpAkLmjaN9p1sfAcFq33FjnZrnJr5gkC1vmVpVN9jq9QPmVQzRgot6i6R8uAvs",
  "key12": "3VMEpBDFEY1WZjVq3DTjUesTfaa7QyA6UppJsJx8HCjpFYLnj8UBx3rot1CYAgBq61oJG5KDZsUqRbL2hhChpgsW",
  "key13": "2bmRRCenSiS5cuHm2cLu3GmeRkMNyZ43yUpPaVajohkRg8zaocNwdXcRinngeAGXJEqXe6DqBXVmheP249hfduh8",
  "key14": "3XyZMN6iuG3n7SHGL7Htq4oDjxYYEHiWQ396pK4T8wAmvsvzGiZ7HsvdzakqjPeQqf5yxahwqEsaZ3wmTCes26Vh",
  "key15": "3TTKARgsi5D2QDLKAniz6MhFtYdFXK1ofWUYKHU8g9aRyUrxDQik4pdVBTjwH5b32MpTWptYroM3xHBD7xEjHnD1",
  "key16": "4Q7gZNtLqWvcjFq8QtTZRQchKbe66wLvUrsGsm6tJRGyJzYMmcADCGTfViLcRTV2yYVpLzBeN2zmSuhy5i9ki6c1",
  "key17": "56sYo6rThCEiejU6dgABM1UTrnzYpMzHHXKFYr8qApQUpb2nGD4tidLcxz6gYFvLbq4SVxXufTP7mhdrc6saTsp1",
  "key18": "2ovf48hdsyby5iA3i9ymBaVavxzJsA2GMVRZ2d9fHBkSJXfDK8MAFAhsaGCaoXshRqqCi1mpWRkMZRfJp9Skoi9E",
  "key19": "4ojVcAovWT6SBfkrJhwdmJaV4PGxX53zWLfvJTphzgyP2ioLFKcg8NCqrodeWwwLg5cQa7EkuEzbv9JAxCU3azkv",
  "key20": "22HGpYim2pcdFEQV5PSAhFp8zuxzYF94okRwguuTmYwHWEjrtJq4YXUvfqAQuYVxr5NYd1mRDHHdsPG8ow3e9rw6",
  "key21": "qX9GVZ2wviBCdenhEK5XDpibKJFL5bR2QxiHCQLEKDvmwhzu7dVFWiQ5oV8xqX3MiCShZPRuTsPMUZS6UbA9T7w",
  "key22": "3ExuFgAV2QmD5yGSgekva4waayad5xrAZCFVvEqq9WQqh9BcCGjEiBBg7NZqtfwP52qs5f49efAcBcCGnGpMuUyi",
  "key23": "JYXeQ9pGFNAtam1kJLYhyFkiU31AXN3dWnebJerZwaCA4DhvHosYA9KFqDxxJBEH9dnAFmnSZQqeAXij7qv3Un1",
  "key24": "3RJakLpwPFGQVvHM2XLK4ddjuQQLyw7LhkYVUf5nWvXPytnfPwsQwrdJqRE3KWr7XJZRWeqUb2MgqE6n1mDpnTsS",
  "key25": "9QdFhENkcet57CjWioThtu6B57n2yBJFFhk5G5c8v2kr98DH6b95gwsnCUxbJDA5eyW5fxpqanbNrAcUCKn8Hed",
  "key26": "35As7ZQprqwPCxbBY8qvQB22QhbtB38Th72qRfxAfbWd1JdmU1u7R9Eda2nmaT7mo9yGWmA8NUXbGeDPjrmbsbFs",
  "key27": "5eCHHkhrav8n8aDwkVfc8HuuvH4LyVz1Z4VXi9WY65B1AsXnMDRHgD2eDwxT98xaU64eUVU7KgKvno8Q9DzNu5Bi",
  "key28": "5rcztb8yDBAYMWmgKkhLT4jzTPd8AFWKnSUKVesZ8CC8n3BZShz1MM9SsgTnrYrnPjXXr6QTJGH7uiLvMQjvtbyk",
  "key29": "4ZrHjisZzRuedASp9VHzYsTZdDgTWTptKvDMznEVsg229jPWqCR1PJJYHUf5h7CZxdQ6hCiQoS9cbrHUqCWB5KFF",
  "key30": "5T5YmqocErVqp1fhacY27GS3k1bfCiCPBqjU3Eq85vBrKxR3gHfL6xXhUCXtu2kQkoSgkKdthbwYcMy7kncUogen",
  "key31": "2HViin5jDvxNUqUnWtdE2FkFKe45kKS4DHem8J8wuJDQEskuL1yeijfnk4EbyUAacLsjPWvLYJ5HcYwuZLv52dBB",
  "key32": "2ZqFmKFekdpsRjhQF8hjekNEAocfNx26cQn52FWxeUpYAtaGtCHivAYNt5umMv1GVDovAb5MmbaZBAHc5cbWPKn6",
  "key33": "3fxTx71DEDVFY7HWKoVBV77tGZU4zVkQM9RvXsTQzjBZu7B3RKgP113aHuBkwzz47WuzGd6ZuqEYxzb3MC4gR6TD",
  "key34": "dcGo7cBhfFpcRHByuSp1RoZw4VsTNhjhcXtvUPX8dmQwHiUCuyKa9kikqLCztB9mSohgGtBNTuXdTMGUkDrDjkT",
  "key35": "XH9gs9yqXbk1xjp2aPJTStQUbGR1F3nBAbjDG9wKxntRdDfC3cjymm9r5M8eRWrD1QbAGF7CGZXmadsBDoeee9n",
  "key36": "5bvgpSxZn9ZsPd93yAU5AdmDP5P9SWCPaiTD3b5nfLH6SnNj6Y7VpUJLZow3BakzBzR1HXHC9CFjrHFqF7Lh1czJ"
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
