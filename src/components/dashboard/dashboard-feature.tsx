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
    "3tiZ4eyKZVWdnzbcKgote7ZiNXi7zK4Q1M55sUCrwbBWHuExR7qzTqnQba9qor7tXmoYyUFvVbBBECFd2rGgsccE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZnLjn2Q1ksHwKvjkKzDP7Dk8YGjK8gPwttYvtwm1xWkhJTKAwC7MhW55dWRMCo1fDJ7qZergB8YKvAY4Tr3Hset",
  "key1": "2YptmCECZKsBZ51CSKxYVpqsKLs8SwDyiDpJj4GmFtpYfZ9uqgTXFyofDer3s2EhJS2GUr14ye6CRTaRD1jLu5ba",
  "key2": "4MPYprw8B8hM49t8sAWscLHeVyqZkhP2r1wTJKn3nfLB1dC7hrxYYDpZza8XPZSTzv6CkMfkRnuN9BMTjPoDrSpq",
  "key3": "27MxE1hkNZ9JTodPpkE8XoujMMuFm6atW46zN8D17KrVWoxf5Zwzn7SqcpDLLisK9DfJ4BUVGJhAqjaun9oozGSu",
  "key4": "4yXJ2xcZDGDYF4z6kbb57hhwWkxDirxtEysF5477JBtCbWaHA9ymmAXmezojj4SEGfbCmoTJ2FWvAEiurCoWeNUk",
  "key5": "3Y3NnmzJ1ngyvp1p8PdzceRhJFANGN5iwsgj2q9NMLYTSRKZ9tkuoeyAXbLWr4ZSoYp3sMi7fJ9QswwsyGhXFNTK",
  "key6": "o2akB7LUYvbVcykdvrB7A3rCbYwyYYLVLVLDZq31cyFQJKnAAqtVzxuNgoeCPivrmvoMkru1ekKJJCC6cBxZRY5",
  "key7": "2Bkto5y4yfuCJKJcv5zuLiHQg8jA7TRj5k61pGLXFNKFZWfXyaT2NReEj3E9T27yVKRyUyerHVffNxfDFr7zfvRh",
  "key8": "4Wsh72Kxu84siaj46wosmh7HErcExowt4JKhbzThBZrimX1h3NptMqYpJbdtzXLAodpMq41MPBA6yBHsGZhyvDXQ",
  "key9": "3xassu42Pq5TBR8FpuKct5nf3SNefi77WhvXptErZozWjh3MCpcfgPHcKRkAQsvWYFzLwStpiuUBTupd7kbondGL",
  "key10": "4MrASPxDEBucVuQEn8wYLWwTv1nxNaFSNceK2csAUSXL3uH4GxfdepcBk72jeQXmR7NRA1CB6JqivMSodNHDG8iF",
  "key11": "44dJYpHKNbaPzL3swFd2kQtfUb1Ls83rXw3zkCS4UCK8JK9cV2hhCzsMtprPdk81eMqYUFyfL2688VD45aSy5McJ",
  "key12": "27gYkKjdsy6LB8vLrUos5M3XHqbbGRJ6guu6wNaxo6UWC2VtzYiyxrR7gc3jZZENtCW1Nxs3wbkhujRJyKwnLJ7A",
  "key13": "4Y3SZNkg5G4XDQVTBcjG8ttj8dQYikzzG7ZGgvk9YeZkVvp55CAb4nD6tgdVaAZhjSYDctmBsSiTSVth32F7uQJH",
  "key14": "51oB86xsKD8R5qnQGv15qfknH8WYEye7N74z6Zc2Nf3NZ1hYYVUAo2pUfzjVXr4gYL9qBehvyP9zHy57t72Noh78",
  "key15": "3uhJDk6AKpHmGphStQU6CGbuKSJNmDfYep91sHYNZPZEnhhqRZqd3Gi1QTVyofQ17qWP7RnkzThgmgrCSP8jZj8R",
  "key16": "4ZNSCu2JxT7CMVcfPLh8F5UDdFNZpghtu5VsMVyA8bfzNwngGVWx2qkVfApPtEue6uPqXQ1KUqf71JHQzJ3VDY7G",
  "key17": "h2rueZMRDPHsjQPaFUavKzQooTy6YQe2tkW1sGkvxuPSg9vhhsSEozJDasMtiuYfD8g1bSwAJyxQrvG78ywtn6z",
  "key18": "3yJYqbZ9qktqBDnSaRrdrqXoUvPi5ytVnGv3jpP7LjieXioNs8aw3ZfQJxFhN2s4sYzNBFKgnANGsivh191f345B",
  "key19": "pCYtsqKhbJt9N5nWicrcZEuurZzwtbvhQJ4wWG4eEozZp5rfHMRq7kzewf8BpGsgTac1G9ZkN3MYaxBmmN8kHLY",
  "key20": "HHJ1JxSiV9TugZPatJAxiHtRmJBDuTN2euPJ2kCNRoaMTgoL7B9C5S9v9LzcGHcYaQqNnPgBQBrtarLFkM2j8tR",
  "key21": "2UWpPTBVMH5DrWxiTRtVvKfFHy76j1dziF3Whfotfo8sn6XKL9rguV1musiC2X9zJaE5F77ncA3ZZVcP9P6kLP6H",
  "key22": "3BhRpYgjGp6HXipoCCSm3uQFTrMwhXyTXDTs68D8En25JpFTaRNPQ2TGkQHAPZv7UMMemrsgMHMq42hsdUUD3yqy",
  "key23": "4NveCsxxW9yrhr6i82paUVy18YJXDWk8oK6JvHvtgTerU53SiMVGWof2E1W8c4dNQtzqHtukAVYjKdzCsaSp9yNE",
  "key24": "BnXNTRicZwAnjDbgGsu8qt2RELiunZCDn2nN8mY8Qc8k6eMVaZ26yWfPN1fvVr8oLA5dBSGDFnDHrFzrJvfqf4p",
  "key25": "362W3GwnswB4hGY1g1Gy93jdJwkcLEhQS6yDyBnN6pvHiNxrAiD7x2756pKQjiJVGdyxdwuShctqBHEvh3eEaiti",
  "key26": "2V8hEGkkiXgr51TXtx92XUWw7t21p1jf7KqMA5c7gSbw8CXWCYiwzcGnKNpx4b2N68EpDDKPAX8DUCsr8NmXrCdp",
  "key27": "3144v6qzeareQoeY5FJnZpXv5vy8zuawrUqKG1Bzu55y5UtwAP8qoLRuSj1GszbYPvHb1Ka8cpoavw9bubQBX8eE",
  "key28": "3X3H9aXU866pNpZWZaN8SUrnpAFHxS7982upj8YC5cB6bEah1eNvhMZqr1T1751WERq5wJYzvkYURmXpZSJUua1c",
  "key29": "66wSHpFY3auKupHwPvBX87bzDWNV3VG1ESeM4MrS99Av4pyJK4toZYAzLmjfmkNPVjuVtieFbThpJ7xLDF9qSs6H",
  "key30": "3yRryKeeUQSSY8J3Kr5ycVDYKw5BNpgWwDEzJG6989HqCYFRbHDQrvRMZnEmeZWJ8dVstd4Tei91r6NmF2J2csH8",
  "key31": "2BW1cFh1CgaHjhsrAPZrP5vEUqtGEPXhUQAy8SdQgWhMGfQmswfeM8cHPtCYM2E7Trcayp4pXcUyG6yLfw2HDQ85"
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
