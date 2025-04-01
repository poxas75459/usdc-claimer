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
    "3zPkAthuYXzU3Qg7Vk53m3Vum4pkPYp526An5MZDKPCRuJvpF9TZutAAh9kBYsWQEZUm93khKN9TAHPsAyFAYGzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jnuV4mfGfXnfnctosaV8N9w38CLb4ACgbF5hdKg5wrvkRD4CXhGb4fN5fow1mRQ1zMyy3MyDuKz8yZWuNx2cfJf",
  "key1": "3DUUXLhKxxjcjWoPPCFv1ucGtLiQDAqHgaF4V8hK9wk23tHTZxij6nvV7R3jm1A9BUDGhnubhceHKBbh4d5kAEaW",
  "key2": "jcoKEatYDENHbz8VZ8CHuXceERNw8dK6wce386Kdvw13wLfviLqxA3rgJ7qE2Jc93bip4toZk2anq7NvaaU1nUY",
  "key3": "5TaGmm1fM9EEZXsdPL9Ak85xCTpJfATMeT6WwG7rmE2bfBRKSuX3sHaVQ9MRXuoZEgACvMMegom4cvN4G8ecsSek",
  "key4": "3CnqhKVAnzs2jnvRZdcsCcZvVhYHC4C5wPDBAejrQkC2JZRdQSfKxFkLQv3i2QyAT1XezTkmbYdYvL1NQxJ8sycn",
  "key5": "3Hu2dLrtAWag4dK6fnDQb3LSLx83HGHEnDJAB9VVutbG6Bo5qJtuSVjyDPYA2JXPznCR9H62W6QeYnzZAPEBrLdR",
  "key6": "5YSAF8YAvq9mXynSQ62JHVTfvsBk6mJXnm63iUWTBZxWM2czbYjB2UzzPAvDX8Ru6botPESK1Cd6QLSyt3ipseEN",
  "key7": "3qc5WgahxACMkYVKePZ1DZFfWdv9JMgBn39UvapdxD1hpnMxdoeDxzQgoQ9T5KSQMGAJ4MiBn8zQvi9fw1aK3RYj",
  "key8": "by2Mmx8mBpqZFcnmYQoqwaq2b93hycwtkHdJ6uK6PfAbVsKGUB2nfoCgDVDpWePXnDGS5tASKNxvjygd1GXJK6S",
  "key9": "5JmgGbXFrs45t26TW6VhQCBgxbquokUtGRBEf1efAxs2oQHXHa5aK8FDPHEdm1ufqr2VFeddzFD4PjavLfPUbsrx",
  "key10": "gE7iNsM1NTmvsLZ54QSM5Ek3nKiziTnw55c8fA2WHk1yiUz93byjGJCdnPYfGdnw2ycEWFsXEB3k6ULpbLgC5TD",
  "key11": "5j2NcSF96gSkXwa2FyRY9cVv3uaJBmebhgFNeMXSomaXsayM6bx9GUGNL2VYLtf5saaYnde2rAHjibqeN4extdiv",
  "key12": "USH9MSGdny6CHcPviaWQ39qYTrajRrLMMkxdqWWRh5GUXBqyfLw8GJR4ooA9kPcTao9YbRsSKVG27b7rALZiR3E",
  "key13": "2hBCqkp4dU7uBzRV43FQUfjndqpM5gCkMH3BHr5R9SpLHkf1ABnyfX3BFPji2UCjduECd1EPkqiK9WQMnTtnzJgP",
  "key14": "2m12BSTuC8bs6wehBNcwTfwkNpCLWaTni9HD9i3imBuEHwZrN1BeLsBUFmcvbSnjW8Ke7bavQ5Y9KjTCvdCWquqK",
  "key15": "5kQj56h2GLGfY7wc2knXv4QZ2DSTJeQgrDPQ3Ya7L5mmM27adKxv6HjouT6vwx8xLnQnxg8hfLEmQZKSYjcykAg1",
  "key16": "2vBc71oCXoGKaff6MRCwRtzVeoghvkxXe9yPXzDFUigm8M6AP2YFxiAq8XNwuLzVSYCkrtma2LACRsDvTPTnWqXY",
  "key17": "5aBo694iywmeRYpb8pizt1WAG68xyvqgEGZWtstWC9XcVCAQJYe5rU4oW2Hth4gcaV4YbG1Y4rpRd9g9Zkzo6Kgm",
  "key18": "3yZcoo6E8D2qkoTsVDyqtXTWo7E9HV9RS1KxXNiiXuoXdxmKK1P8gg2MXHjhsVoKNY9X7JvC76awAFh1s26Btvp3",
  "key19": "yffXzzSUpC8XmC4ZejH8HtUbTfmEqaBW8Ltdop57gxT7xzD44CeVgHuqd2J23xWhDabTZnE69T3EF1xzWw3MCvq",
  "key20": "VfCnou7bkZYeeuvbJmTGHbdYMnmHe4e3cgULTLYk2zRhjjH47CbehmoR4arvCViuPyLtqy9zxQ3n754bgdA6PRQ",
  "key21": "2fdkxppxtW7sdDycPujTXuF7twkzRVNgMbHjNNFB3G6AYx3HpQdCGTwnQGjvjAJ2Y7SryfGW928YqtRvvbRvpw5r",
  "key22": "22ugowj8yDCiuABo3PQroxjTDDDt1isyRdJXNF4wthLTKBLTygxzqhGav4BHsdPVCtmKa924mDJKkV3RBJsmVMKa",
  "key23": "3YXRmUsXMg2MwG2K7rQHAvGEgv6FfQj1XdSQqQJGCkgtBs4ky2f4HubgdbrDQRfeBVNrEYeqK8WbYi2YgLmMV152",
  "key24": "5EX6wVCDa9buyaqaEr3kjSJNr3nqerW8pGw81Vwo4ip4ccMmJZyLUsotdZoXFdaff7xAHU8vSAgXCoTTvPEyRe5E",
  "key25": "2SxHsZ8x7nXvAyguKNvr13LQtWHZ56ZrJSvrL6ogyCqEzCJior8oYGSXZpafF2Xx3ADFGsjHnjR7GnqGVUzuC7YY",
  "key26": "e9YmNVDQkVq3jhhaWGcyCZsY6bwrVAxL1BkghdsX4X3zLuMmEq5612JZZjubKBqoVU2AipX5fbY9rZC9DwWcLZp",
  "key27": "3rBGU97RiX99FReQ1Tam4RYSDxu6Gce4iM5XVnNHCx3RUD959P2bfUG3Yd8zbR5NvVnjgQtWNxX69hGAm1gfzCry",
  "key28": "3uvQLtdi3aYGDPcKTPK4AnPsJRVi4B9nE5VaNvrhcU61UPFJKn4Fvodnpp42PUVskGYBfpMbhJCBYGRR9CfUB9vj",
  "key29": "2rjTmK8HiH42S6sVyuAEjKDo9dcfgKJwshWEBUYs8jS1e4AZqkxocdc8KC67NTbDF77fKjr8hf817EmwFtLzHxF",
  "key30": "2NQ1nZD2D9dFT3Ka3GZzB43gyRwKHJ2Awcnqg3XDdASwDM9eoMwbeAdv7g4PoWiBgoa3sfPLnnsShR8KEgDeuSBf",
  "key31": "4ZP2LvrNzj5ufBpqiA8m88cxsmRxiWAKPV6r4RzAeWtdxHxiQMjW8iStFL4Lsikf5voqBSLZbL9QbwCPh6tp2KX9",
  "key32": "5J56j1XCojMAbLSc6HtXnnho9pBr3yNcMLoatkUypCmuX9ucJ2TH5V5px91kGhmQW6E4Jxs4CwYxrEDk7Cc3gJdR",
  "key33": "cmWbuBcKUtfBre19uQE32kdHmdXmxSbYksnPaJRqUKcZmoobyVfcWPdd786GngGgeLc8o9r4vXSzwAdXT1Cvfz6",
  "key34": "2suFrfi7kfH42nKyFBMVyPQAP4wv2AzBsXHyq1nUynAnbjPQx8PXxnHqFhLTMkmwzBsbvbkaUwJja27zXZ7XsySY",
  "key35": "3L7dSPcsbRQdRNL4yP45fgEPyvJCkq1tYJBVJDZdahfF91qxYZu1STQzdsvcZHNgbUBoar6ouuJXUHtQoQVvZcxz",
  "key36": "5d5UEM3XutoMi3Tf652u1bofgV54fqSF3jZWeSi3gRGCxM2AmARQRm3QjYD9n92hK4A92t1KgVNuA6KsvPqHKjjJ",
  "key37": "5YuMTnkBZLAyGHUDoLo9oKa8zb3ZxfKoNdx9rtWsaKhydRA5yXNesvyA6Xm5Y8GD997o5szFtW2SVpm2jU8TWerq",
  "key38": "HZ3t6hTt9ZqFd31De3QHE5usMeUyvE7HxgEqgwY2exgddATqf5xU9fvgtq1aHN2exmCsoq83QrkWrY5zVcdEFVw",
  "key39": "2ErZ6C8tSZPsxXaovAZvnoB62JwNQLGNcrbxqa5227yjTdG8Wrmbh4LkWtXbni3WdCFbGBnwhjssRk7xaanUq5SR",
  "key40": "5yCnbeZkkGKQREkxLZvHsC4v6R9fUyBpqWS1z2ZbXfvc48bzuaaJ9mCMwrPJ3uxEZUeQ5XaigjT75dJT1LMEmVkm",
  "key41": "3ivEsBmVpUzhH5N9MZ2B6jUXihJhJyW97p64Q4G74WXFjoSNVRBYAZ78FRz4xdDMo5GxSWs8djofjpGxkbLiS5XM",
  "key42": "fEvagHXoNHsKcQCp8DjxDWop5cky12Spn7SqA6XRi5x5Dmg1RWV85DcTaMyP2dCsCTkJxXTn39ba1P6iYA2E4hB",
  "key43": "3bRNKXPjx9mScQcLQggX6bBj8i2MXvrmgcHhqC7FMEpj3dEjNLBfgCjYToXwuzGBnL575mnRiaeQVCjEFFNY5F7x"
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
