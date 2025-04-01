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
    "5inokZ1Rz7z36Q9CkuDHUP9r3ecZWTKJWe5nofgdGuS7fbixsKBv2M67FtfBg5RScV311LgLzGQpqkkabXhvHPti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5br4q5Ri4NYNvR5Wy3o83dw3NwbCrN1kEBvxnVvETiEXBzmms7QkttFUoXEZfKZXNWC9TorzrXGqQdXGmfnNUfn5",
  "key1": "XxFnd51RRM5zKTNd63Ey7xqWkeFpzh6zZ9kQuz7AKdJxJngMBYtjiWR7Mam4eGEbiNhbL1fcJxNjnTi6jMHsr1h",
  "key2": "KysbzJuvtLy23wRASMqmh277ZVTVCDSi7wWxLCB1MCZyTB97v9kuNoDaDNuo366wDTPbYXAtNRwSVwrUXycp8fP",
  "key3": "4VoGuGKe3AXsT9RVDsJHuqskuPJtMfEt8mQe4RTK9fjBG8esCAFnUJMCmvrzq7tdJ5rhBi9dd5oXLKKqVEL8DnGy",
  "key4": "fqocKQtNJp8cGGCAK7pe6kk8LrkwpAGxsquhgsEzhHziPwheALAifsRDSzSAfXGB5Fn2noJt7hzpiJvD5eS4nEG",
  "key5": "4TvzDYStqyopeT2kNqaLXqfsYi4R2321mrdeT5evZMTSipcZFbhGSMYryCN6utkChws46MTFCN7kvNUFc9kt7jD5",
  "key6": "3WkXigeDTfLWrdxKrZEE7wQuTvhjqvJ2YGqrjA121FsbYveGd9cNg2qWkCQ89XghmNhSFdKXDdqaT4UXnJruCcc5",
  "key7": "34RWNwzLQmsRtwxf44Gfi21D6Urv8isWskjnrowsxmbQYUxoF7ECvKmK6CcFYtJPNmNFcCp525PzW7Riiz3eJjHP",
  "key8": "3MduUt5PZJBwjcJkRFuw974Z4ySPGohCm3pczV7fprDWD5wFsYaTAQxcGyTE13nnxdfq2xCcGPKzmU7DV6fDXh7s",
  "key9": "5c68vmoR4jBAKjq5NXPibGCf4ckkfGYB49L1EPi52S8cHJXspi89MKynna22xasypFASnQHzgzJkg6YaRUvdf4nz",
  "key10": "5LyEgzLetNcjFHDc8nCDqEA6DieeaCnJzae4ZKvWdxWWgKCV5gvUXDeM3BkoRmmYhcYb1JhcjbJUK641tkp1PMop",
  "key11": "5HGrma5F7aLzhLcHAzvkEyufawj14roKUPKKXdAYCZKr4nbY3YKUbWgkFZRwKTvRMHzTtKTzE9H6WrHLmT4ZdCjj",
  "key12": "4GNF97KrNWdDNFAExtqxtJ3K61UeNgmS1eeyxLPTcD7sJaNuPpgHp6qUQyKEaL5jztEjvtcMnkT1VoGjAsdCPEmN",
  "key13": "4gM46ujBmvdjUAso7DBjUCd9pXEaDvAgfb3y6p6A4csLybTV3KVGW8zYa3q5KfQveNmL8an8YYyGZ3zpz1v5dhny",
  "key14": "PcjPeYViqFjX8vQQVQqTUyjDBpjnJK6pHLJAmQNazFzYN6r6t7TvprEi2TdYFWPgrwQeX3DgY9XJGSab35PrmVH",
  "key15": "3PhAZVxvAgJvY5zVyoWceE4NuctZQVLY6EeUnKZ3p9j6J8qdRTqpxLVeVpav5jxkxNVTzDD2kzsq5rNoCX3K2XLq",
  "key16": "45FTnhLXQBDgbzqyv6n3VbdHpg57PR9qn5ZxEvVkJtVTFYR6aFThzjJPRZ5RjqQC5Huj1j8Pc8992186wxw9u8WA",
  "key17": "4XDGxrT6Q9dgUjPeagLxu97i49dJLA1335pnQCHwWJqF8ZGe9BkpvXaVrAaoEhScBYS5SqnDSLUcd8DqU1Ti4HZq",
  "key18": "3RavymMfvbWJuYNCbsoBNvRgv1ucNe6wYc8S4nEvgHf9a922sxgXRuxcTaWDu3gtoMJa32quybeBqiSdhHaRDmFG",
  "key19": "5T46DBPwGmKbhKv5SmjAZbzFCxkkk384XULhvLzxSXViaak7qWWEkeQgD5fZ7HxP26uai9CswTxXwBSS8wvHFhwn",
  "key20": "45RNCyp63ua3L3yGjfu8wDi1TVKhXHhExVdkpEJetBNZmaGc7WcdHhCXVF77ZVidmzJHZfC5QUcFvZAG7RbhpUsS",
  "key21": "2frbRjYygLmQQXYcLm6fWFCX3znTgMjLupgEK62NJNYjMKVTB94re9wgYUSjihT7XUL9i5nXSrPC33CR1cokD3Td",
  "key22": "DpX7sqSvsSJVeEXXbzgvGVkoSUJRmjktm57x92TdJyB9BDnearVz8iweXjte1t9oPChxw25DeCJQcas8pf4Gtzc",
  "key23": "djEq8kYHXJbfWyN6EooTNdsv2okbzxDwvH2ctZF1gqwKXbeRrnhs7rPzrFq4ZR9mpvMbB2cUg2PSbYpGqvdqcaW",
  "key24": "1CDrAr2XHN3k2Tucy5nRLtKtpaBtcbEpeH32b6qvSAfnLyWeDnEzKKHVafrMUPZSYWjQAUZQMDfNFbkDmT67c8h",
  "key25": "2Vwo14kE1Vjfqi4PPrmd3nZmhQuKGezaMVVe49hY4hXWURs2BXpB4NFbv1nuuaaY1EDK3XowpiA26DSXAzfb6yqV",
  "key26": "4695mVvwYrzGEfew5GZJEsmGNXUvyFrJRhZr1yNVMKiYj1ubsnhNxfpGBX2vHeZR6XkA9WDDdAXz8gmDfmg7y7mJ",
  "key27": "5bBLSn2zziRL9QgqdcjYRTvV56KdUX3nRMvbapTP3keP9GMBJcTUrc51XTEr7GT7BsdzEa8gThxWknZMRXZui8ag",
  "key28": "k4LhvbaBNgNZWrQNQ9XP6xA1KMPDAZydUU5NNvvXn2h6KtvZY2SoB4AxxSSZkfKRTsPJdebXPUWEq8V5gJpnxFT",
  "key29": "3XeDuQByByfn1NaMPWijZqRM2hzqsm6Uc93KRKzew7AbcapY4p9JBCeHqSoCW9MkMZQKNvt819huGeuRm5actef9",
  "key30": "64HZGdy4xCzn8DEk1gmMXNgrmApWPJfBRpYGuiUbyTG3BkCNWkTuKGLq1r7CwnhTU8UpyFjHj3xNPvZVf9ycymNk",
  "key31": "23dMpkkHUUzX4tU9k5aWSp6vAiz6WBeWdZkpxbcARXPDnvTGoL3gN8xL6gEWMr1Gn4Zxfhj8Gwrnwn7Bsh4ECp2b",
  "key32": "3qHJiPKeGWvHi5sNXhfTqQTnAzgJ7xSc5zaZyU9ebvQq23VgPyzJBpisZy8HSxEkrD1h2ajyPL7h3u9cBM45DJST",
  "key33": "3AtWwS2i2suKUw1SbQF8pihppJuKg2wBycRJvvjt2b9P3xgnCocCwFHWR7jwR8M8F7JBe7319kPJ2ire9ekRCcuA",
  "key34": "4MnbftsT9VQAMdnzx7QfYZET2q2H6N7XimTCsYcc1BKgG2BhbU3dzUG6UyDPRJiYq4QoMDmcLrcJKqiTmc5xcfAN",
  "key35": "TM3KsRfBVLCM3R415s9mMCztmRGNK8ofVzg6kvjri6JHXQVzLYaPddY1WrugCKEWaQMeFGN1mfjLyQkZAsvMwEB",
  "key36": "45Z4kw9ek4KHvDYdr1TQJ9XjSazmh5zwPZx7SqvC9977F7YvHLQD9TQHRa7xrEnR25RE8rimTyb3EQkXqoGLSAvX",
  "key37": "5UYZPAoRyusUHn1qhGiX7A5dsYgLbTtMww85xhvxaSjvFU3SE9DCtbmTDXxSRqubZBx45jkt7SvjiVCZj63KUniE"
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
