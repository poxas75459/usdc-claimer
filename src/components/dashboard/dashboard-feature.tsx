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
    "5uxXYGayiuJ3NRRqYuSyRm8zaTUirEHVVqXvfRQc1u7a33DmM3XF2fKtynG9Z1qvHpBE5Pwimf6T9jw6dDh2Bpj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D9ecPy7cy8rm42zRAgGY8j5UFxuoCLuMk9h4hGUV2aC9J5skZNbbeeRvLX8k7ErrpH49qotZn42K1GcXE5K9CQq",
  "key1": "3pwfP2RY2wCskJnEskdbxoGw4WWCY3ZW8opZL5jzDditKN8qpgt9xbnY3kTqU6inY1z6P77b9QSkctVQo79cnLGc",
  "key2": "5bvTpMEcrw1xQ5w2BzjbQXzE1xk12uF9Jhvw5PEcLLfeUkezU4wKeosp7fVtyUd3N99EA3xcnTLFK5JGBrEt1Zvj",
  "key3": "4UZtBSdphKvviXfKTUKMYW7Fsxw176NjL5bpuPkaRBXhXHzctjGQVb9dZXmJeFDccw71wRc3EGNmXX7PJ7dDyfpZ",
  "key4": "5zbX9TwPacpXi5YR26x9kXkVLpro1G3cLq1FjHz3qi6kucZEiaTpr8Us7m175K4MYDMLL9tTsFm9ux2j5omPVHGF",
  "key5": "2m6WM1oWjJZYyXx5oJkd3UD8JeSxjPNjaaea6jthYjKioCECs4ez97tGzbXPZVgo7vzoJvTcYsx87jQZVyGnVWYP",
  "key6": "4x17kcUmR63KJNNTBNV7NagTQPab7BWidsWpEovfwBhiV4P4zTgjgidWC6hwY8kEHFp6knGAna5LXcgNBGSU8mty",
  "key7": "36v18h2BS1VEQ7KA9fFQt4UvJpzTvvfqH1FpDMFN5dASc7bRz86MisNxh5X7cqjeCjWTARqxTn4eK5Jo8NjFXY9U",
  "key8": "5TXs1wYkyuUZXSoAmQa11k6nCqQna96tXuPrPETfDvSuC6tJeS2zbWmHmMXKTXow2bEprJ2gG4pqKerR8e13qHgL",
  "key9": "56LeCC8Z59D5fgk3Y7d4ZBUAUHkT8eHYdygPfEVwcyiYSfsU5n7Qkb4ufxFbzNhCmPwj2UzgKGH7wCDHeJGaxtpx",
  "key10": "44Bk8VaoJKajQYi2sH65QZ9LYjXW1He2oJ2V6g9cDeHNxbrnVDLPFNcYZ9Gjj9Tice749WjEiQkMauapHYvvZPji",
  "key11": "8BGRJPNrzcVAqwegdGRj2vNycCUnoRVYU9ogHNiEtJRHLcTcMNWzZsmNfktJVBtoD6VrYYV6TcD6P4UNAhyhnkV",
  "key12": "3M5NZnafnnw9JLyevA8J3f3uH62fcxqbYKpbJBYFvmW1B3t15io9FdT17VBb9VwZ8VeyqQknkFe17tZgBTg8LdsM",
  "key13": "5bkUo1jVixWzR6ZF3joMRkXwvq1gKU7NbvYe4zc8nanzRyRZv7XU5bSxM7BRRAD1bffBzwojqdU1gmg9oB1hyrRj",
  "key14": "2xugXL3Dqbkhv9Y8hkGcyGdXtw3Tu8h5md17bdKfsxKM9KEeSPhckRpq7qBNRGuYT1XLSEq8KuKyZxoZPd2uQxc5",
  "key15": "3NX2kn2MoRErLrqDiTHE8ui6CE9TYVKMhQX1dtKS8r2DtNBybVZbBAbnyv4dyn2Tq8PpXXW46qVMaHUANpM9UAvn",
  "key16": "5D1ZQkNscf2GZdweE1WgmrtiZpm7yzSNPE1nphh1wHYeAs6Y4QEdD2TPJitiuCkUAziBZu3LZJcL3AQ4r5m9vK2Q",
  "key17": "3qQmL6DhgS2yjQYABg6ZBdkh1jp3VtPPym6uoGQpFZF2Ktxc5Xuq1CZMa64mqfNA2ERRF34y31kLc2WddxbaAPde",
  "key18": "5GHEJ39JykfQPRUuuQJuavugueRjGPNmjuVhxRxVRWY9jBUX8DYPQMyNwquMJtsaVTjrnV5BcKX9JpixVKnYZtub",
  "key19": "24PSCVswp6tqWDgqJAFJt7vtYfFsUdkCPjgSLYkZxgL3Z9tuoFuM8eNppCA1CKn3MJsCh5656dPVxeogu7h89ub5",
  "key20": "3mbfcVZqjXVKbaonEaHPCAat6KXDJEqyWHWY57jt5yetnY1hZbALkNHj7mNuz4BusHDHYE9svKWAxHudhurgt4Ab",
  "key21": "2xPzr7wueyfexRE3HHh3MNT4ionbu2NLyRvmpnUFygKL5nUaK4u2q3fBXeTSLH3HX6YXPWLdyJ8NZr8bTbAkyRmV",
  "key22": "2SafV4DLQpsm6SErBTM1rhQchqwbAdqbfgNCagKr4CzgLcPnwcZWYPxvDqszHuE11E92T4AYAwcmTJ7iJR4kS9HC",
  "key23": "5JbzsKCVqEFew8YmqEcr2jGhJNoksp1BDxBS8ubuGmq4N3cd848iBXKD6FanNRWMfk1WkGwd6rfaRsbTGbmC43Et",
  "key24": "U2N2T8KCon6ddmVyNwabq2tkX7memF9tU8XeREXGgmkMrfrjSG5XKiQk1otxHJGzLBTxx5wZVnWPLhtmMn293Z7",
  "key25": "DUyaBub4dr21VHsTh844b7n1XNASkLAJjRZX3dzXCeKjQq4836Ff8jJnozyfeTKzTNmoVLLRg54PKA9GjkTS7tD",
  "key26": "4wxqRjbvuxHDMxe6J2nK5ZLDPGAVoxNoMeFGjH4YCHzGKSTAczHthhayH3Qn5j4jEvsWmLD3sjBoso8V8QXFCEcN",
  "key27": "4cruAKyxkmcJqVfuAEXJetkPtnEECxTCEuGo775tMfg9w8FV9M4MJBs2pEN1EnDpJU5Cgc46qw6c82HvaNRcXL1r",
  "key28": "4MC8987eKHHJcfTzNt7ftrNky7cpKzj5iBKYkvA8GcPAPWUxN12qfkszd4JQNyzho5sPmnjRLgcA5P54LJ41GF6D",
  "key29": "2qTqfAu7uzBSDehtFSX5CioNoqyCA1htqb3KZek32LUs49V6fppgUD4xthnwCV6YY7uYyYzrWp6vvHsuRTknwhX9",
  "key30": "45CuRoHVmC6w6T3Bw4Y6LujPvDqN3cxWZtsneAtGyapFYSZQYwokXTGo3pQq1wW4MudTGZVgNHF2sQr8x8cLNasE",
  "key31": "5ivYRR9FFFtWmHNtFuFiMrX38nibYfDJU4EufBdd5MaKYJUeh1Ypkz399Rt4Eao6MH14renKjSn5MRerg3dG6rr4",
  "key32": "61X6X1Z5Mr7kALdry4z7QQfWtNCCdnbeB9dY7M74N9eDHKsNjjJQfDURYsQH9LaLA3i8XCrRniUKrKBnuUQ4UWca",
  "key33": "8PPPGcp669wpkmYkNF6BoctZwXSCnSCNjMkPSyRsQrHUhximFJja6khobjenyzKAfe9v98tyhAqC3UaRC2re5ir",
  "key34": "2Ygv4CVBN36vjF76DKNrrcorq9QD9NtDX7VmgunFNzGN57roDeyQDvRK5ochjc1phm8uySrcuURqXzbTNZ3M3U13",
  "key35": "2pLZAizq2ExNtTR73t6tyRwtM9ijHVyKkXG5ZApoaZUNgPGzaac4jicpaYpXmbiyWG755ADezSBWe8m4YPLMVEjN",
  "key36": "3BfammEELP1EXMkATt3WKtpWBQAyBD8z5Snut2qpJKJE6iQiDciXS1tg6tva3tSnqP2GbV9rVo7wx63ZUPkCnGRG",
  "key37": "3JxUjtGPim4CVQPeVvEmYEA8ERiBvLPeRJHHqDgAZ1derbdwHMY44J3SPevkCxcyK2TCzzywLRs6YezekTVU3D2E",
  "key38": "3Utpj7tPNdbH2qomnFo9YuQtXRdUw88fMhywDkNNeypjEV3xjR5RQNiRLtvwDX1dhN41ziFAcX4STTZiud54PJiD",
  "key39": "2ok11mUPJtCVu3Sa41d6ES1EBz52JZG5tHyLzF5DY3wrFZcL9tuzL5BJUoSS7ACzazRjDuQ5yQ19PnVqMwPguFh6",
  "key40": "4bFdua3cGoXWudFYYvEXBDZCS5C3FtMPKy6DFvAazjX8ikKSvM8r1sALp9eSQzU3n2yQASUM5kjNH4wb2aCa4QRA",
  "key41": "rqnuC4qDBpCM3sM4ZyUbfnXw7YveirajCwhEapZHwF8tKTUu8F4ZxPi4KGwVxDf48MX3bWuFrdK64t6cRm2nPtL",
  "key42": "66pZMMQCUxjHykyaxyWyFGWgLu35fKMj8NwEft5myHce3jU6SX2Db4REGe4ToezBzyoxE6NphqPS7pv61hNsguKj",
  "key43": "5HD56Qdi4trb6Sy3YFXwbvf6NQ2LPfxz6DwckW25hSuX6LTpez3EMmSrbJBWxjsiuAaMj3QqjtXh8kF4t5tjQBxC",
  "key44": "2JaMetnPKLaojbyuSuCckqjnMXBShydkLw1HWDU2YBuRSFm3ArXQPA6SZ5ZabG1r6e5RKPYCT4psbDKcKVFyaq1o",
  "key45": "2Pokdx4wsa7VgcDv1ynyyhJRufPoVn99bhQ9f6N81g25Vo5bhjdEnnKBDe65v1AAjpsdGmGDDn2GWFEFbAer3hUj",
  "key46": "FjyJLeduXFTZGHmnmz7wp2YDDQ9QSRTyEEpwmp7A655HdHPnqHi9bT9osNcPMRfQysmSQwrm2E8ZwWA37GhEyH7",
  "key47": "2nFMNwob1gqJt1b1NaS8tAV5tm71cKkhHUEyJKCxCZp6SP2XwYX6JSWtkXUpvXJEGa9t8SsLmD7Fh6HrW46RyN9K"
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
