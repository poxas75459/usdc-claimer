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
    "59XxKid98BWbguFyHR5co534Zw2XUp5hn8bZDAv2eijaMFhi4wop6Su8H4bUY49uP5epF4TyqBThfNobpURzUpQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59UaZCnd5dapCCu7YvPvUZRvoZ54yrtL3LRX6tzVdDMAi38Fg3Dexr7bTJ3Qfds7KG1suf6uXJvZAbpVnFbsU3S7",
  "key1": "p8nuoc4qPc8aUhwsJRDoLAVhsHxU8R7LUKUttahKTgCKrrP2ybKJvgpQ52yQYcKwetDEJY8jvE7i5CrBNYtKffB",
  "key2": "PF28Wnwsd3BURTJ1bUyQcxkVakBwiHcx6BBcA2HRgcNMXVmCyCbPSPqufAWU3DNCEVtf5qM3F8LDJKHEfZ4S4Ni",
  "key3": "2t9UBcNq59DYM7iQh5ukQ22pQz2eufEKsP8PKDXDYE3CRemVi65iSVvSa3TtQ3whJRFYC2EHNyEvkdGhMrguRp8j",
  "key4": "BSkDRb1hTzs6hL6D9atyWtDtmbAtCeGfr2XCNU2YiW2YsizN4jH2odjfTRhSAs6cb5YXc41AQrcBmi4zJWE8hmG",
  "key5": "2T8WEE4v3nvbpnurnC3pHwV8dMquqTDV9nJf9BNJ6wot9dS7Jn6X9T3xHde63BKLnNGWHmeMhqWbmVBa4kxn8MVY",
  "key6": "4HSTcLeuTj9PkX65Zyton3jTKUCbgJ1ZdoEhyNtYpPzGUQoHiMCoqS2Ufb32pGbtahrGwyXqX3G3j9k6rdhw8tK1",
  "key7": "5o48bsJC3gom6WSWpuagpqod621573UTkiTef77A8H1ZPmg3ZUbFBtDZmqUshifj1cCm44xSKWBSrMX46FJcfJUu",
  "key8": "26kmxENbFJVW7jySzCsCqxvPmmrQrcW3c1TG9BS2EigWMj3kv44vet8Z4BXkM5VTviiPhpR3JikUEmhuEvinrYWD",
  "key9": "5gJWVguKKwtdJvBZHuTcxquQqLZDLddNBJgv7QT9DTaADj84ih7iNE1yc2qoBXYH3qnPiK9htY2YNPgjZTReq6wP",
  "key10": "352w13ni2W2yhoNTPX3AJKUjDiigcAyrM8Yv7PvTsh5LMPVWt7WuMHNZDh8Wj3YvD3wWg8YjEbibnhWQ3TBk8a2W",
  "key11": "5WGMVhqCUzgNS7n5rGsimnRi7oNwgTXyjGrwqK5QNCLuZ8fJmW3icaqdXA7WbV9UcfLnave4A3PLxWW4Xj844K7d",
  "key12": "5SznQnp9xuernxCFWxHyobwNjEPJNfWFpmUxAMNji4sfNx3YHe3a6mQ28KYjWZ1TThkuKDcHj48a5M2Tv8JQRs5m",
  "key13": "5npZavU93wBHExtFjQ1gVvavz2ACk3f1AjCzFwiEim8dhqAYdjND6nEvZaBjqcxKWBL5pEcuCJSwF95VFFTEfz9B",
  "key14": "26H8UUueJcY4DNsxbg3d1qjZ9pn7FvqE9cjdhg2rR5RZW4GHS7woTppGP7nyne2YzJ8scH65F6h1Wcx31MrQG9ZZ",
  "key15": "2jQxdY18oZCT9aWNKDpEFjbfNSFNUNwRBqNsBbAXD3KHCRCkGjTFhGhJ5oq9CSpwqFYVQhTAxiigMwgqf5vye4LD",
  "key16": "4aB1oy2bXdZsrHgPDJmgJg23JgKoY1skzgMAs3BpNtQMn5TywxQ1B4wQ5mgJEzC2d3jcBhcMyPUYzk1ZD3JEJo4D",
  "key17": "2xqyhtEDesgzQ4psZC6RikZBVN1TANa7yrk3WuiWybeANkhmRCEijXQXeBJVUyyTx76RB1B5pAPuF2nda9LdygoU",
  "key18": "4TGxUZu6kb78aZumF8Ezxt9wPmCQnPZHE4x1ncEgRZYbK7QVMUdQHRW6oz9yjLe6snufzddthztd4C3AUYz7ASrU",
  "key19": "DTPEwT1m8Z4Nxw6eaTH6uniAhTbLHJTsWNvDaRUmv8cFBEZD32f2xcVRPjs7b6vUZuaBXGQ9XmNwJ6zPRJTMmNt",
  "key20": "2ArbsQrLLQdYneDQCTvuMfmsrPXYa6rY6kK8CTimniLYb3SCegoMR2ifppnsZtRukSRwKoHKhttga79pLLba3JL9",
  "key21": "aQAeC7hP3yF2tKXuij1c54j573Uut5QpANRjpkrZmmabQQ83KDyWNefjBDY2YjD4u2rBy4rrKjNvhCYKXmEhakW",
  "key22": "5YLHW2Xq2BFh6CACJfeW2737UpHGmzCeodJaR4JX11iwYkJYJsieMeeXVLkkN4FhXxVo9QETHEvGRhYVnwwYjaVF",
  "key23": "234GAqcARWCcy52tWmv8LksRQeaz4rB4DyvFNq92yo598ptFaKyx8JpkSpBLwiG1Uw2bHeQ4hTGYMGuQEbt4SV6m",
  "key24": "4bi6uT4ZMnSxYM1nL1KcLc6h3cwrcPeRA7sNJW2EHK5W9Zx4ZzWnVBe7XXoUBUHHcSmFfUQxNd2MoAaYgNpWYGAX",
  "key25": "41yno6VhzUAbpsnZWqQgxaQ5qU6sRxrDAy6MVv9eB4Ax7ZNnSzzYFWx6PYbaLnyLpGjJVfxtZW3JSMANySHCW4x9",
  "key26": "38RidUgiw4mDxupMsyDswsLFVusaF2TjWXJDoRPGCijQetZRK6XBsVBM9RuFewF62i9gXzLEUsRKo6Zf3VxEgX4H",
  "key27": "55qAAbgNxrPsMRd5gQKtew8QrZZUZ5XQA9kaPhbQkBUNfHn8Qeyqih9jwSgCBUWiZaFMwP3g1EeSx1TCdP3mhRzS",
  "key28": "3XE52uE91yv8rFwJG5UckdzMCdr7oaBhB2J67hQBRkgaBrN1MBPYad8rw6n2V7ziBYqwkD5MatqfJL8oCHkgE4e3",
  "key29": "21Vpxvfrkj4FQJDr1nCxVmWRKjiF52E9itQtLzJtC45QPJrzq8NvU1c9wa72UZZ3MEi2QnaDM3XDAiCKMZvgSxwV",
  "key30": "3C3ytyCkkZ5dQd56FrxcwS9PvyWuTKjqx8mTTBbVphF95FM75f58W9oJNqtTbZNT1rY43hk3tRtXYcmauY7CcaCg",
  "key31": "4nurMKk2rHVinWM18y2CY2HLJvBqXzUxCNbCoYhfouiWbRJET4uwb1poh3P1NgWykuXpVzsuBDB7eqiMGdWJYGBE",
  "key32": "3RJHw1torAQFDbZDEdxegmjFPQPpdFz3FaZP5qWqvm6ognAYCzhYrdv9Hpq4nrfpE9zjonSDHJc9s1smhKNnVW9M",
  "key33": "Z49ADusLCtBdnAoT7CgJhxE5hF7LWv5asqJ5SrKTEjMU9SFFNZjhXErHvjR8KQo5whK7YsA54SB4pGvXhKFrkAV",
  "key34": "ce2jeVACsxjqc63F76V7Nvi7wZNvGQZKYzXrD7niPsaY5h9X2fnT4X8XcZ6aggqd89veDB3kwxq9v15n5Nvi1Eg",
  "key35": "4StBJiKL3VmLK4BnB73FBfWKv9Gxq3e8Da6H1fVw4ZbLBnDrbVghDxUdjdkrh5Q4gCrnwKLadg7kz8bRBwEzdbgL",
  "key36": "5jyR8WeySjFAT1L9gdr1tZQuQmcQ8H9FjaRvkQTrvkbZkdFnn6yehpCiWTwQqoUZSC6Z3pBGZsip7NAudLw9Ay9e",
  "key37": "eidW3ME7tw8WVF6XJen5jYSTWWaWXpqW1Jqw8Y9qwZ9iVedQv7UyUj2S3EzfMcTfEMh537mEvV4nZA6wekcbSCX",
  "key38": "cDE2CEmVs1k2Au1AmMhKs2SuQYk5TFMJ89vXgPXsSdy1BASosa14qTXaVh8pKfP136ZM63R1PMNLdu7bsMLycwp",
  "key39": "5S73us9UBnCyGwcKNa79JyS3dGDDfG2EibjQACmpjHoLCWCFjXHRSPFJfoGZLmy6aiH9GNkZD5pB2WaQU7tCevj5",
  "key40": "4MLbDxSjobq1SRFPNNMf9FfruGKzazkYqAqB1ieyVNWigtXYTen47XrhAy9zdiPLFq4zVzfk4HWzwsTRyAEBHgiR",
  "key41": "4cGxFTk8FnxuqefTfjMz48BWcsen3KX3qPSuZ9k84XrAtJHSLmc9V2GgJM2UV4gBWWtCMZ1DYTCtDNHZeQ5matCR",
  "key42": "67GjZ8MvZrSuzrqQWPBPzvcdVSCNzp3bPcPDQpj1tUiixiCE55un16PFjwGttxXyP1H5BCv5ZRSnT54G5De9fxFC",
  "key43": "Y7pS4oHYask5Vv3sKGSTiYUit3MNCmFtkpbP1DbKGgUfB1JxeRoNxS1xMGF9xyCQBqH8htXm7AH7ZmSJv7u2dND",
  "key44": "3ehbZqHKy2G9iDebdBT1wjLU2C524tzGyCRUwWcfW7Yb7jF3EZrECDKhYouB5Uvz5uXD97L8jqU58Bq1ETDPLL76",
  "key45": "2cESozZV5kzhA3FkErdB6XfioFBzJCXir8mh75SA7TQDj5Q2Vykk3ZcL4XuLBRH76kNwPx8RPwib93z2oXpzov7x",
  "key46": "zsCgsmTaE44BXpBt2inDFB1qpYwRNCCHP9zNrUp8HrCn76tJcJ53L1BTDVBp7x6EnroJXqci5yLNubpRj5ntPpx"
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
