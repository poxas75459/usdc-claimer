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
    "3HoBqYPQ1969E9BJ17aTmLdUHz3hF55AD97Ky9N89k2n4g2af4FGvJKkNBE5RAm7fF7iAKfAbQwTPyFmcbFmfLwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K9hRAk7taKQQZQkSW37f8VzjZbPrGYYUn9qvTaD3oJNZK2nHYK6YC3KV8P8J1p7jQc9N8bhM9CiQLWD1VQpdaUp",
  "key1": "4nBoH1GtAMfajtKaJ4uhq3zPNYrW49NvdwNreFv8Vx8pNWt9mcWV2Xm8P7ZZSGFY3UbYrV41qvYhB6kqgR7WPfZM",
  "key2": "29QPR4VxidF3LcC7UpHq2taqWt996SBhGB7YpsDwurMy5YK6Yu6FDz6nZFhsvbZQRx31As1hHBoXhwoRUxkSKchS",
  "key3": "4bX9xzbSdcUZiBzEAWB3LmqJTB5zmeJgeDhsHA2uYw6w93bUCScL2AmLHDSG7ybam76CH8FsqEgbXFYbXnoEYBS9",
  "key4": "5jqXVHJ4neRT4qPnr5BpNKZG9TRXauwNezm13rEDrJG39mdngCTLKkRxsXNsJEdN8u36BKYsQpAMZtHPkZtXXuvx",
  "key5": "2sGBTHQRhL58s5CSAnwh18H2Kr41UxTozJL9nBoJUoeXo3M6MzAjiC5vYKhaDywU6xePhEuPgFbJM6UwKHcmKbMR",
  "key6": "2Z4QMcMEu22LYGD8ECUd81pjRxeEEmpsRpoYi76iV1xySE5fuDTcxhxpQQp2z371V6MMWarsbYuYCJTfUR7RMX9z",
  "key7": "2122YNxCjX9NWQxCbbsh4tWqQSF5JcAUrfuW3A3Wqcg2up6XCi6Kz7oXnPUrU9j5nTS1Csq3Z2Fhn6vGxeJBXL3Y",
  "key8": "3hBfb8ZLkjaHHBbRBYsBVELFhECNBTvhuDYyubccu5SpQufBLJ49bAMcsco5jw6obQxLtwRBzsKM8bsu5J9vTzFY",
  "key9": "55KLVfjaEU8ge2cL93Pyqeqo8XkMVAkgbwCL2e9M1GvUg7j1RUiMybGFfFnv9hLkTTDrCYtQikRYd1h6Ttvsjyh5",
  "key10": "4PStBSenPHVT7ahtwRi7UUXQVq5iQfyNRNtRtwzotrq7Wrn2sDtvd6TVSEzQMuU7Xx4Yuj9PjLSUkjDoQpVspoJA",
  "key11": "5NhPC3dD7ryrbbALUq1BFjViyHai54baT9yLbQ3vFwTD26QP1KBazVL2jLXUVF5GM2A6JWm5NJTznevixPZti7gp",
  "key12": "4FPFagTvVjMg9bzAz4D78REUq8CVSHZ8kVg2VU1CVXjvsnkRipftCr3t5X3zBSvDNrVaKrPvTDB2Q8YEy1on9zTt",
  "key13": "26gZ798FPrET4dYHHWfGahNuq84wD7u15GAtkmmXVxsWQXahEHbRnit8EwS4DooCDy2SNQ7jWucqHi1NYiEpnVFy",
  "key14": "3tsqwN9dpyfQknkHAy5r9rV8CUo2GqEt79kvrek737PLQufCGhrJoS2G1LyzDkNJCyLg66B44Fe37doDhLyGbSRG",
  "key15": "628bXDxF6z5bikr9V9AkqGJQBsKxY5oKVTAiBsaZzDegtqBsSV1SnLMjDHM16eTDxJYLWDVvk8KUYPWfUq6pNFML",
  "key16": "2CotZtKSnx6bmeq2RFvERR57yREWrEYV1oqCHPjCtaKb79W7QAVjVH9cM3jD6pNiQTsvxRrmoFn5GBFC6LVg9at6",
  "key17": "4GSp1JAMeBSZETpRw71mQimTmCs3H99nu3LmgbytUeWwvaWAKmkCVKM7iwCTLjxRGHjD2Seb8tutzvy2yBJaHiS3",
  "key18": "2sERUSnX8NVtVfDDQbgTqwDXKfYvNhGhruAeTGMNoT3dXhbeGcq8QX4djoExGjekWuhKrUpSfFwsfEqG5CJjyqNu",
  "key19": "3Ntvo7NMUW5Bhq5yfa5Ura3tYoZCL1XoWrov83LDA9o24QE8yTSVYsgQBxHedfFGd2y3Uf45NZrnzGaC1DBPyvmk",
  "key20": "9yysRCioM9UbvqFkWQvP72Cch4tm1McEfaj2vQS8PJ8dDTU1hiSx3ifKWh6uoQZYUdf5orVpzVVQQziryUr6px9",
  "key21": "t865WbNfN78i3rw4mZBzfSZ3wSgpR2LE4ndGSyvuJr5wD7gy1qSUA7giY5dJzUF1HAdCYF4uzgAZ5s9eAX28PMP",
  "key22": "4EwduHXAJjmDsuJLRKv8WbCt3q4Cdx8qqapzKS5CiZephdVsxrbMMY4mBEo7JJdVRsRPM9USttNEQzLi2RM8orYu",
  "key23": "43Afv5FVb3sx3FgxZgcry6opQXH5ys8ohyxLbsTsh94KYq65LceXw9syJu3ic24rEBHwhru6PKB5czrf4PGLoeUN",
  "key24": "4bygvKqF2DwvTaoh4BKQur5YQZXfgMKpPNTsZHDpkBwzt6KfVDR62Fk3MCvLy5iv6WqZZUAsM2uf6deHiG879jxb",
  "key25": "pucdYXd2errWkJyPZo27G5vu8MhbidK4ZuhQMrK27uV7Bup5yLXWKSC4akmHe9em87NkpSVa27exLXMyKCVJvMc",
  "key26": "4LZBQnWsre5SSebGjE5rJ2AbZodGYQWEiKwXrbNXRaZi2JgqoyyejPVkU7aAjtvn46vu3m6WfcoRvARAVU3wh3L6",
  "key27": "2czTJbJ1uz6CgHpx78Xk7QdvCu7is2wcsiqFMRTMogmihe9L8LDBY7nesLzYBx63K3NmjWxGj4DTt7wrqDpZge1Z",
  "key28": "5xA4vTRcLf3nQXc4tDftRZYGSmVkto2iDKtPYnuExdqcWVtzqmotgo7tcdi4CjZGwcd7r4Qa6Dwdr3ty2hTdreHm",
  "key29": "4WW9vKrfXvmyNkCVawvNdWx7JitKpK4GsUEixe7sFnphAGCkugTKnrvS1VGy21gv2bgpgUi8qYr8rhL9a4BRtYM3",
  "key30": "5tP8dLBu3tydG2jpvztw6VocJ3HdCUN3VH5KFMwLzfw9r4D5B7oEzovY4PZmkTWE7uE5PvYkijTSeGyFsWFhcbBW",
  "key31": "4UWx7NubcKHF8Sx8DCLBoBFkhqRugrT1qhWuGRNtsVbJJ4zKywrdnAJzcpfusmvcDSrXoYMfEutS72kAYBSdJq89",
  "key32": "3fMzfVsU84NAqGJah8Yr4hh8bzBuAACNdiaZ8iA5pQjZx1XsV4GpJHGL1JcBp6EhPW7Gb7CeNymVnXDWdHenPmUD",
  "key33": "3zvcBo5TjQ1pVaJ3DQxtLGcYTnAEwCM4W2HkMWkYLMEBPc3PNsBd6VVhThvVNAMstfC5yB1MkhjQ7yC2PsZwEh64",
  "key34": "2kRxpZmDdSHQXZUdQaqQQX6PvjEAC82SCwrQSK8PXg6zANJNoruHhbhsV2zuMmji6aTvh9jUSzVKjZioqKbeWYeA",
  "key35": "4xbwGBfTKHvjPLy23ehcTBndpdz6JAsrPoqMZrduQmbrizkT8eWpuFQqfUknU7zFVprew9U1mXwdHE2XULhYa8GS",
  "key36": "47qwgaFWc2pjNZibchuBBpDkHZXUh4xm4Af8M3Xpj4W6pNY6hKgnJBksTwK9ojo3vvPLvPv9xWmQHgveoMEr1L13",
  "key37": "3Kyg1wMYGJRpuz6oEBYkjc9fhW33qo7gUtRYpDGzYNKZzczemDUkkj14ypZ2hqufhFSHQgKVvEk5EnXEggTKB1Ak",
  "key38": "3S4gpVYouipbHGXoS6yqUAUhsdFm1gMRYcwGNwdyvPLZwzA1RqNAVjLiuf6eQptiSXfjkb2Y9r7UA764mVHbAyoj",
  "key39": "EN4XiA5ys11yKt1fuTcx7Uggx4RUBWz6dS7hnWxFQ8rvhASkdaTJQPGeuWiki9VFuAGvPBXDCy59JfAVqPfV4Ez",
  "key40": "3u1iPFgyuA16jzd3Ee68xFUieZhocHWDQnGCYdWFomBAqBeyMvmbzDnUPYyTd2gFrot8fw1S6zueRnRosgHAFS38",
  "key41": "4cL9VwLMSQHFkNQ5E9jekpFKJah6m3NScnS441jLVRxwAxnogTaYgt31xFY6yPJqoA9wG8cFWBdyF5EyhncJmBGr"
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
