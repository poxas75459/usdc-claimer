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
    "s5dGVVxXYbMVqCDXXBnmFe375yzKPxt3uXFVhm95s4y3b8LLQwVoU9j6YHphLrWQXNeagechaTTjbpbwNtz48Va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S1NrVmpr6nZ6V4RgrxVUdfebytfwRkX4tLiSjYpUWeR37SfFLATcxaVCVHesrsx5inSven1bax3gNsqKJnx6WP8",
  "key1": "5L9mmfcY4JxcY9AVXjRC8hhVf2Zz6Gk5n4FpmnwTNwvFQjLXYyiCrH4Y9rsg4157FWYbyAe6nYFRdGkhqRT4kUey",
  "key2": "3xqgWxXQty7KW4Pcn2Rq732Pg7urbZ57p3kcLYivHbeszJCyQi1Z9GZqeayUJ7BaYY6Gp1bRY5sWGUhiupUz8KA7",
  "key3": "3mK6PrAyRVcLSXZHm4Pg1ZmvHHe8GPFHMKc1ebbUChaa3wxBF1CXYufFTSynRpL1kT6ZEgTsNLvbraRioP2svH5T",
  "key4": "3EVq25JmaAMcTnLdqoPEJ2fW72xp3JSu4fimeAjumBvxbfS2wWN9CcxDmV6SBUgguJc8sztqpw3JHDgUm2gLee6H",
  "key5": "3wxS3W1UtTFZvBvEjUbEqzFYQBnuYE8CFUBt4nu6ACHndF4PiP917UTwedymFnyCjcESGuStQe3x2xuRzb8FsN9L",
  "key6": "4hDf1yTwenmEEwmJrsk3RUTvPD6pMfAr1AhaCYpYd1HRGJFjQdCFAX9h32fBweYHZrzXKJQcDodjpYvoCk7Mz2Gd",
  "key7": "3SZj5PcpmdLbgPCvekFiV36oHmaiBY6qKCNMN4wMthVgGsmzrHzUYqgY368AXhNmvpuYbBYCWsT9RKEbhc4W8Ydo",
  "key8": "4kyeAkG5UneVQtt7YBGhEx69P2F53DkEqV32xvf1rDjMXVY85sVZ51zXYopvBbC5MrJaccCyKZksZboS6kRKu6UQ",
  "key9": "38NcZWFXEwHbnJYJe5nJxr8hSiMhiKBU7vF5uqy2f62Z5YeYeH7X2zS4mXemx935VKUTKCmG74JZK6DuXBueuRhm",
  "key10": "2qew7hGf4beZbHnUEUCWhxisXBRQePgxLwFvy4UNmLLCMvoNtVgLM2wsFKS9Fp6nbxyGmuvHwU5xE9gTQRzY7FcD",
  "key11": "xMRFkkxPXyscUt66UHN8MsJCsrKa25H6cJG8aUeExgEXfG2N8TxE89yVQmUaxjFujxFHJRfmcsFKQL7STQPKvA1",
  "key12": "3jJj7U75msitnwxGDcQjnLXJ9UmzzxVyBWE7zbp3fBhPG1LdBHV5L9bF9g921EXGdRpSxTub4DvR16hHGvv9qnU5",
  "key13": "4XeDfXyDx4oRMk8ebRX4SAxpooBxDqvxuHCdmFQKBWUW6kvnZxgBXxaFYXBhD2DPK3thr1oA11985Ds59dKRShvT",
  "key14": "41TVJQitKRn8hKsJbxFRsf443uBgNejJAo1nDGEyii9bW5ZGawzgZoYYCc4taAuV4YTsZ5ihVXsS4hKayPFmR2zH",
  "key15": "5TMqfnSjqR4ymJ43gJH6VJziZZT8MkHi5RxqXK4dM2NYyiqmzoMEJSpaae9dnLe4wyQZTHY22NK5BjejN3ZVCmm6",
  "key16": "nnprpDqygybArB1L7jmgUwC1zRi4vKKGtVHhukU1VLreBsASaFb8RogizwuSzbq6t9aEpMGDgLkRaUDqtg2JJz1",
  "key17": "5gQ8TQU3HscRQnV658Cz9H5RQrL5rBHckbDfdqB9Dvmp4J1hmbtSXsLrfdUgb6d4tjjigL6KF2QyRFiVZ7c82EJ",
  "key18": "38tt2qDzCBp1tRZ5jCHE65tjDSRdwFjRGb9T36WzHnkHB8E7jLtiDt53HrGD5zatD8ZZ4nJczutXhitym7TfqN9g",
  "key19": "YzC4YcJdQLgtVWiyNevzR1wUD4iK1UL7kKXinPXg5DzZ1qNubWSj93SLNnZB7rfeMuHFj2ctNWi9xXY9fvBWmv1",
  "key20": "2xyScu7xfQZABdYMHQuuiGwn2i1iZeQKdfjqbEJiQzt16isXiFPqaiAJae7axFrKjytTSb1KohUU8fNX59eGHRKz",
  "key21": "45RwEr8Gs86gkwW4p3Md81qjiFPdVdagoVQCUKG6gACrfX3sbsCawzWmEVbaSAStEkDHDyRi6TxCbA8hi4htDE8N",
  "key22": "2cTGiRtVYBmtye28EcBhLpws3SLCmQ4irSEaFn3q1BYdBrUt4553WGNmXGF8fTX6VkiHMJdRtDbVXGngbkcy4a6j",
  "key23": "26PQ5H2vJ4x4RKWgoHdCBQnMrN37m7xpEGCRX8g7SxFvnqaBTYbzG8WPWbNAiDkC5LpnpY2W8F7oVbocpHzD6ab3",
  "key24": "4yRfgn5NG9Un9SmES4zMkEJy9d9cqCh3CKtSJDoBEsC9kPbsykhvWDS2A3g9LAQMSgCEyboqq2smjQ1Y9UgmBHt1",
  "key25": "4uNNzVEm4gQaSf9nNQL2HcweQLcgLie5v4FGCE5DaKuaR3CcPFqf6bDeT6UC5jFnR8HgPejW9v67p85x5hSFNQri",
  "key26": "46wG56p1QYdaM2fRoSWL13anRjCLXRUQ2bfp2hQzoz1Rrg6id7UEZXBeicYiHNEsv8qyeohp51pHS4KTPLwBezFe",
  "key27": "4gWxBAoXkNR5Fvn1r6WxNBXrjCLbpe3QTuwxg4Bz3S7onFwgF7S9eW9wBUomnfQUsWfUtG6B7R2w27PHurYjF5Mw",
  "key28": "s7owBXzJEto6wAbo5hwwNAzikzZbE5ZthrCtSnUoM5TnRPbcyLdR5BB9pmwNiAsPDiuqFbV1vuDUjJPc3yex15c",
  "key29": "4MTfbkqcz9WJoUkYjD4nu1EAuCgJdcuuJ7bHgQ4KCFbreZjFE7JBaTXKy8CKDmxtYFiUdQsk1TtaUQ9mvETEq4gX",
  "key30": "2uoTXe7Qi9EK2xD6Zktzzh9sEHRY3enGV3e1DjcMrr1josUpCE2PEvCXkK8YYp8wGWmpMupDUNZzosyqVcxXSAvk",
  "key31": "5ZMivTZPkzLTWLkRVfXKeRvhmgKvybY4w7kHGyAYVm3HuK2ZfKB4Q9PvuzzWPDk3dfwfiYn4uxDfueVz2S47YUxz",
  "key32": "2aowjDb5CwSXsfxG3mrRnE3HXkXSLuyxn8cEwnmXNbPciZxueKqqjfwp53uD367pXhtdPAVwc3j58ZH2ZqJ5L746",
  "key33": "3zRTb2U8nbNsuzHb1oTcnaM9YmvtdXX6xh7o9EmBjFyewykvnBnRUEsMVE5EpXVi3dkQijVohU7A4UqajpezrHx7",
  "key34": "4fBSxBr1JXqhVKvWJQN8bYKevhDAevHVtbu9hF35W3GT9hQPJuvvehFV1jnnZwfVM2raHnbQ91YGBaw51VeRRSPx",
  "key35": "2U7ud62RvLC6WTWKiLNSL3Sww78ZFuAf39RYoBzE8HU912qgwjuCb6fao2CtzFLGaWyn7DDGy6Ks8B1a8UydNyr2",
  "key36": "2ECuCWhiRy2F75KQ5FRqr8uHxNZQfgQNP1fxaKXH4KnBTTnqLdSKuprNnurjEzEnMj2VqY5zpHiVdsBwjKofd6eQ",
  "key37": "4JjSEdjHNBSJBo4oMJHA7XEmXLwifWEKboDYRrBHhiuJ6NsuZJEJEnc56xDUwjgrXBRGa8M758reLBMqr75xZTAT",
  "key38": "4Tbq5A5ZKKBAtdwTNqoZx217jc96pfWwQgR1zL9WtGWG9CiWaiBYBqo6aHWArhejFvLkEXc24FoY9m3zCRNYAxJ7"
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
