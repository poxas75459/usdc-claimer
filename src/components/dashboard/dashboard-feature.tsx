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
    "2FDKNvauWyeyz12mpFbzE2nuzfoBXmkMZt1JFRQzeYvPYHKZm5t3mYZjXax31PrQjGsHNN5ikUYBe9naifzhgYcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SA6zzFiJj26WkZdSxPdAhgfa9YK9BhnpxBpTECZ3YisCVZHC8UA7zTABiM832m6bEvUdT8xNCWeZKM54MCnbUoi",
  "key1": "2GYjUfK9kusodopXSEmJNXb3YfrGtPwYTZvZE28gLQptyVjtLfy36ddqdq8QkCf3gEJfwJhUcvBUi9GZXF5TWZN2",
  "key2": "QmPphrJXsnQ4W3X1V1fDNF7z39QYRAmPYmV22mpCQudsGVeUjbLYaqYUz6z9v6PeUo4QsYtEMrjCwsYX6KowvSo",
  "key3": "5sFm8oF8vxFqdHWhRXMfVRVD5KkQr4ZLfxReYwb8kPVUQwwPZYDCVrc8MjUShm9oeofnbra6E6T7gbAqTW9tr1VK",
  "key4": "aG2qnY4pduZ89N3uDF5mfcGn4wSPt4ihLrxRiKXsnrKdgBdenm3Bf5jBLGoS4wSx99qmzZazL1A1PLj8J6g6xRU",
  "key5": "WedPTGHJD86qo8hbbKDTFEecDqEKunXQjwHnuPdY1Q437wHZd9ekipqb6mKhCNLue3vuLZhPQ3rLbhoR2H5TgC6",
  "key6": "5T1iPKYKSfWWZjgpTu7UL26ngo71KJWP6GLPBg5s7rawQ2qS2XzfyaApsDdC9Ue86un1RuxCgNmNsXXStfu9ZZxT",
  "key7": "2WAyHBm7LVnzSVNMAJohumRLw3aYvPTfuaQGeLTafTmMWfKReQ9PfN9uzVF8AA3cZ3GEeMQcZkzq5RtvpokLwzrs",
  "key8": "4Si5NtX9q4449p3q7xkYrJvhbkAFGLsh462xz9BMiSf6RNRCW4PJqYTbajUm3VZvbM3zaZ7BHgoLzwWXFY5CZoB6",
  "key9": "5K6yzyKqgh6wULqXDicXGUANDEihjytHk9QXA6ru5X6QJdJM3yh7ACaD71tiQhieWzPn5ekZNDwLJRTFzvuxB44s",
  "key10": "49U7hUBKJFPXbXkX8Yc9MvcaDn6bLs24WRdmzWGT9iqKmgcf5HTbf6m9hDqDi5g4f2yiWN3j7ZETR89xN7hYEAf1",
  "key11": "2izBVdaTofcSpe4UxosTiCi4gmRjLsayjNUgdk9oW236Uk2KjJAVXEz6YBVnUAmaUR9Kh5TTZxn6HFrGfZeDkcuz",
  "key12": "5UoASxKYTan3YNMa37nxcHq8HTFR6pTeJAUmkxyXn9z6ZeqezPLJeU1eL4qfzVxT68k1z9eZf5vroR89hvN3LzKU",
  "key13": "3FZKWVevtAfmTbthAx2D5XjYhoDmWX28QXG3uCgAXg5guRKfsb8916sgRkruBtTn6kfVM1bnnTGqHKDPQ8ZqY9WN",
  "key14": "4CioRGxvsVBnAqsmsLTL9B8Gx6sHHbbiTb5BhnhTnxENK5jTAAVzotZKizcdHmL4VYAG4dWaEE9CbrsbySXNvtSM",
  "key15": "4wiXUsr8FRXTK64wZCMvvj4m6cx2D4wZdGtq7aL5Us5pxQgp1MJKXk6ETtjhreGPJrUeKosDSjFurb2hcDwRzutS",
  "key16": "3x4oQQFDEPoMWepjd6RwfETyCFPqWGRqDZBk7LpE5A3Yv1uC7dY8ThSF6TJQ1mA2PWSXYAPHFsgGrks1bdUmea89",
  "key17": "16qM5asFmCnqj1nH7r9UYEzgkFRbLFN6x9EpcM64afcodgEhQuioVZrRssLfgjnHxEUrGdpFtqXYFVVPiUkiBFQ",
  "key18": "3wGuzoSJb3bs2dor96vt8KBY1s87MMa1NR2NHd4ApdeBtZ3BY2rR67QeWdqG4j5xMQrTJiRpSN6JWFUSHqzk7uwH",
  "key19": "Ra3rLdFFo4pQJKiVxH7fSyJ7jr94wWrp64A5K16otiQaK8MfPh8ZeYJ1s7qaGM6GfbuLFrTt4EhHS4Mm8EF4w1S",
  "key20": "4H8xCBFVYBTn6zCPB6mhpKfPPmAv74cYf969msg8j9rD4BTLQi2rPuqBKjHiojS612a3rvT2ekt9Ej66xJvw6mTQ",
  "key21": "2TqQMYWa2st8noYj9MaLkCFAy3wMAdzkGdSW7HYcnR94c4C6VoSpANMW5tVZtm8cbuU3okjpZx7wcStkqTy1dat8",
  "key22": "3xzfktCP5VEdcViX7UaYQT5apitD1FuhVRXyadhjNGg7Mr6yWfBCmHoaBAjc3duK5Zv4nS75EqQPdLneGLCV5SuG",
  "key23": "5iaytHFzUiERi789Ka9Amb2BRfgTsH5QUbv5St1nf4hrHjjZHhRG7boixACBQpLCoxDUcnvEZo1tE1aAjJpV3Q8u",
  "key24": "Mc3Qss53MvxKojCN35FLguvzqVUWdSE6z5xbHztwNAAe2Mfe4ow48qqprbiCAV57CsgzQeEuUNrjPwBVh4ey8Gc",
  "key25": "4KdxjCMS5mG347aEX2bFcBGEwuDbtygPSMMJ6XGJE5XThh5RKtaqdz84NDj8VHuWaSWZSvk9nnTpYzdrJY1HPe2x",
  "key26": "wXWFunTsTRRMHtjZ2ppwc9NoBrktvtFyzgYc6a8Ld4ciXx5GLypHN46a8DXBNuHmZ6CbifQFGTYCVajQi5EsdEt",
  "key27": "3b1zvuTPG4K5oTkCQWah9zh529o9zeZ5TRS97X8zsa4sjPs34u37SD38NzKs99C3mEGyRo8seE34b9i7rhuAKsZZ",
  "key28": "5gqya1Z4rK9kaNUxZMPHNxPsESgSPaF7iCceeDWDJbMAdu5RHn6vw6SvgArwWUgAtCHUukkEzWgkFKDp7FSFJQUC",
  "key29": "2Jm4vDof2Jxhex2a3jgJMdf2LoMKL9a9m5t4i2sLEmzFqvtzSzYksAQHHq7LF6LLTbpYiY8oHQzJSXnhkPf9Psdj",
  "key30": "63JJYLhavSj8mkiyA5Av6D5Tk4DNfNfHaXBwoSB1krEhw6J9RrTG6Dn8mSHxQYuMydrfnoJvYwZaUCtm2FTns9te",
  "key31": "2ULQrDymLqdBknBQVjwf2HQtZ3RWfT5AmTsM1XQDAcM43BG7hU1KXETmXbjyDFi45z3jrPhYkHGZj7NX3B1grwbK",
  "key32": "5m9Q9cscSQAbX3Zwmwhh5uXNXvpNpFMSrfG8YB2f8KExszDiAABFktg5jk2WVehBQsyEEXxTKhoEUhMykR7mr6m3",
  "key33": "57VgxWJ56tkNJ5nv5pyCsL3BeRdHKmw9sBZWDQ6TcZMzZemvwvEPTT3YY5Pwcc7Bj7JKJwTBq8a8CN3QUzGF5Xdm",
  "key34": "U5GanSPm68xKx6a3pmaZHhkKyk9T44H8Sqmc3xE2nNjzeqVVdu1DKfHduWyoCxBWSpMdXf4c5GoSZqoJ6ZZRbbk",
  "key35": "5kdyQUK4Gsc4MHf1UKY1hQZGaNQhJmwsNzynMJsCGWLNVbCDAhhWCfqYuSDSivUiyDb6j2Fr3kFWR8mBXUYTXRh3",
  "key36": "4aCs7GKYYTPJkBCdtbzq7JtKAyKdGy8T7FUyvsjinXjFVK5oxcWP69wiDCFW3Swq4APN37X9LHSqmXT34MHVQNyU",
  "key37": "3zbA7eUAuzbhDHnHYccyhTcj2PLCAc8uh9kBhRDT2QUG8XcHMXsSxPpygHU8RHpwSvXwnUpScc3ZF9A9UQch1xD4",
  "key38": "5xmT7T1S1H7dd8KU5wsB93d2oPCTyniD8G7hkTrD9wwHKQ8xaunH1DrRJeHV8F4D2TuYwtK4b6X8KigyVqknxFg5",
  "key39": "hzpwnZ4c5Ba7fiGmhF7yjsMaYTujmDZagDXJuzPymjgXpiHSGBm3xZGYhnjpmZXg11JfVs95Zd5LhUvPFWBwQxu"
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
