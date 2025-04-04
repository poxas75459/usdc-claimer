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
    "22TTjaQFvBc1GaoroF8RVzvRWyPWVFPH18vaaJmHqFYnARug8Ge7WmPA3ADJNMLm3aTWnvchu7H2MxPCxuBDLuF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q7AAUffuau8SLbCLCvuW8KrHqJ9c8iiEL57BFJEYmDXAnrxgbXSPCBQ1a3FXsyedapSP69dyJTSjfYfadcovdoM",
  "key1": "3TxsUFBxZssZAMm1KSuvjFWqQWGjq9R9r3LRmCpRL9BxvcXvFKa35fjVZRjFTcKZto62A8SaaktxD1wh8hPXDKQM",
  "key2": "66FaERDJsP9SB3EHVea8D9dgTLGka5DqFFKjryVidCUcLa99QrEtZEevQXermXaMY6CKXiTWVNqde3SsanH11thq",
  "key3": "4Mmt5CMjoEdMRsKDtajoxkq56inb99bkcBdPLhKDmWKAU1z6krhkj4DHVm2z2PsgZqVmABVqgayxutejuDTFfp3m",
  "key4": "2SNVjmUGfHGCEjhptUFcL8xwK7xB2E5TzrYdmxHMEj5Tnhay4e2SQbY2JFvC98w8STfeNGzzSjhmryMSVc1qf6UL",
  "key5": "4Jy8ZdWzwTFL5rraKTgaYbn39RgrsRn5dQFQkkk7e2GnzBKxKzeq8nHbtCqSwowjRC9qQTiH16WuXvBeWmBinHJN",
  "key6": "2Dd7zB6qMYcWgLuFufh22k3vtCT7nxYeirkew2umkVKjT3n9zxAdiBrP4w8EyFYKuuT4DFG7snnuJRXEoaVnW2L4",
  "key7": "4th3YEUwovxA75eP7TtzT3XBM2FQckqY7Yr4bMjetUgDBDhgXMxRSUFQt4pMNjuP1455GxHUyJTum2J87xzaZmvC",
  "key8": "2STxqtgPsMBpVpxmhbJjsQ3kN9J5BW23fq2zdoZ9486r5a8rRPZYbxNq9zEkCo7ook5sDrZdhzhCGhcDsZE8VvjH",
  "key9": "t9nzqjMybEzCJ5GSNgpAXrPTifPAZCHszpQhqR5ndvP3Z3SVrPPSZ3eenGHtnRHHz3SNCDtjmb3TGSuSZ2zj1nw",
  "key10": "nihwV6AJ6ScoscqMZzXhzVrRqtQ5ENdwwapDDYrR8qsT5NyStGciEJRi2W4WPPKHqCXe9SSzDaWscpHvEeC4mPy",
  "key11": "5icVPBB8rN4LkX2yXADrbjA1R9qq3noJsie34xFpKGv7wWWfc5XSrPxHC6CXmfxDyWtNybHsZjFfxSmCCiyEi1kz",
  "key12": "4GKUcth7DxD4UffBXGMLuQsFSYzKQ4Z6evxpQnY25SNPyo35NEbx4pUjfQ2QyndajJ5pzp3tYhLE3TtxTwuXwSBt",
  "key13": "5hXLYf9pvX3nwM9K8k8rpWVwZj4sHqAKVGCNWfrpqWEwufWze9TtVivuRJSohsPnf6AY2KTEUxDGJJrYzNzDdm1Q",
  "key14": "9N1TQ97DYsQFHNwEpXN36GVJGHHVkbmvxzeesjV1gLbfgkiUDRd3aNsNKtURKt4nko3NynXjYgQWvrEU8HhpWH6",
  "key15": "4gEVyiDLVqjShehZ4fj2tVy3FF3eLePWCgdvP8v4hWW27gHNXhoRp3Kz71T643bdv9MRWLzEAjoAqFjuXBztNaDC",
  "key16": "4KxR6k3K941CUbQG3deQTjmqHyNaqEJ3anNtbtTorFnrP749N5hhWcUwfJ4QkTiTpKw1jaKMkYUk94yYUyPa6Xwp",
  "key17": "2vtXqULYcMHDjVsTCpkrfVbSJBe96RAovnDvmqkPrmVYeYJy9tHXL4h9oUz5WPcSHgCWWLtFjqLMwTZymM3Xex6s",
  "key18": "YZnrER3LMk8dUZmpUL94Xy7zsNtUMZtYb57AAGy8ty8TTA3ZxrMgkmuctgmoZGcdzW9gDADoRQghKep31YiNc9d",
  "key19": "WYb3htwiu61RSJV9W1HsFbuuF5AVwJPcoT2VzZYpVqZcdMC2bysjkPF4K3TzukFb9kkLjAaXFbABDujuXDzpwBh",
  "key20": "5Q4ajAwHSRyjWyEZQri27mxPYVWxsmtAiu6bHP3X7QgYM3DhjUnQYBrNfnvMNStMmBqJ8tKtUFA1htponXkWk2xh",
  "key21": "4pWExgPu2n8K6xuTtNVAoUekoE2kGPfhwuYgoKvgm1dnU5hnnwmTmY6HeP2n3S9ucBETmYcRYbf3mpYT8KN2uPZ1",
  "key22": "36Wg6bA9CCan4x1VDqwYbU21bDcCEXC4WwYmvqe1zYdyVXa7XHjY2XgwUqXwBh3MvAxsZdS1ZFNfBdT2vH7ZYYqD",
  "key23": "26DYM6cRx1nCq2jqJTKMEiUJe63po5rFApfBoZbaPSELoxWvhTkxLfVbm4BYeecHxMB5nzHq5hyk8cGM1AWeghu6",
  "key24": "4aU6RsAEZcGbrpyXiShyd5tD8JM812Ubu2Bywmg31vcqWTEo42cow6aZbKjcWU32ro1MDf3yscXirDvDe4wJ74ap",
  "key25": "5jrX3HHiL8FP9AYpJ2hoWn3tZ6ZNkM49oADoFHtvdYtTs1RzQtydY8Mb2DJRHkWvgfggrQDW7hKCfxp9N6W3tJWB",
  "key26": "5c5gvUZB5MYa9HAJtKBvv6qhDtqHEmyzjNRwjU6US3EJe7SHWPjKZKPLCAc1VRVT3EvaqgHwdfWfVYFvrvFxJAXJ",
  "key27": "weJYpeRrcVz6CvUcESnv3ASH4cXBnuPBH3p482u2MmajMWdCHG8wysD2fZfPYbufACkQ959GwPD3EY5eeLW9JaL",
  "key28": "5rhGPAA1u45CtezVWp6H4woGa4fVG6za4DvuQxq8hWpM3w6zuccvq5GE6FBbD37XeSQWPbfeSoSvtJkDxZyUxviW",
  "key29": "2sXZGTSsTxL2b2exePgHW2cjCYQeBPG4LgU1Sna2DR3gCN1ZqW6Fv3n4csnoSnRtfn8excLTQumVnFa46qQCjumN",
  "key30": "352vGMYsJXSWrvUSVrfjhN5q5zyjgqi9zC6WKDvwRCbyREkksTGNyraxaguv5zfDoi8AGFDAxSY42jzXJdEqp3S2",
  "key31": "5VsbAfz31x3VXVb2Xd8Up7xZjya5tFY4qfgWbJmbzHjeur3kebjFjx3L4UnjfcmtbTHEgBg7X3jnkvwEzWu563Sg",
  "key32": "29GReLUsRV5DPYDEAcZULAyEAtDMEYrsjAvNPvupYExX4NocWYFpeezfD2jWRBvkq1st7TZSCzUR8wEpfBhmMnYf",
  "key33": "5wb9QpMbhuNAoAr6jnK8vE6XMBgPvgtR6pqUxZfzLxkYSjee18xuZtAHRmErh9rEE9YnrzEy5A3F53QPHkjgu4rc",
  "key34": "5Xixoh9cMb6xbFEaC44LtpytkDy4aMFfjn5zdeRxZWPi6JKByNK4MAbQ5cwwxwSPC93puyNd6rjEZfvvztrJLk7W",
  "key35": "3KkBsTuF7YWQKii9iHth7gxUwQvmqo37Cerv9XNLkorwdZDRxUfec4NmUCikpxJKEcY1CE3YKg2iA8euoe9oq2Ra",
  "key36": "4yAFY1o8czbR2UEPuZzeKhaDCFB42TEwbiYVtbsyKt8CfYEoQzyMExze6VFbnq7ZYQDGeF3Ac2a7QsG3q4rP764F",
  "key37": "38Qct6WU66hYVrJk6y4mWhHytxmiLGqWXJjStURWo6JEfTi3phV4GChrCzKV2L5RRp8ekhwvcNaUfeSbH2CbJemH",
  "key38": "57wEYUrAcsFYVP4MYFALmBxBtuQKFdA1ZNpkeHi4U1en7n86FCheMybU36t5GYxjpwaaSzhVpWhFLKUSqSQxtgdq",
  "key39": "Qz3ijy8sp9UhXCPrR9RrKSE8xBpKThSEAQrYYaki3TK8GyifKZ7tCiQKTXBgziPMBrfihVmaTTDjfLZxXmnzuaU",
  "key40": "2fhTi5yYpXXmFV5C8FL5ziH3dRhdYitNWBaX3Ym3ZRgqPvxAxbcoUr4KYkoVnVrwbmCQW1zdhpvDGVmYjUVA9Ci8",
  "key41": "g4FvynkcUL5f1UVcfqAAZCwioGgEWmjN9WtXY4aYusZrzBREpEv7ZDQ1iXd9npv8PDzasUcKC2AQQFYQZtMw5NP",
  "key42": "3WSKamti1FFtsdpVy5TLzYo716RN3Goc7ix5UHU7HuNpQteAcpJU2fRhW1tczQvba51wmwgs14mEwA259GQ4w4XJ",
  "key43": "56CQ5hPYrhkPbWafiwtn47Xcs5mTsnt1857S9Bkq4isgU6cce2z2LFKg7Q4BfXCkKp8hD6SeicuP6JJG2XZ8BruR",
  "key44": "3Atc85DtTadqLHqZmfFRc66r9Mbq8DW5Mc2aPBF4DqNSk3rP5RYXcNhoHaQTC8wtLELHovjcDh5y85BvaWrJNK9H",
  "key45": "2tLfWfVcrUgpNraKiv8iCrQXygEgSiydUst1fjn3g6GBr3f5EbEpexHZuUZXMGy55gY49XKLgcNtZn8oJzCvWccs",
  "key46": "3GS7dFbvpvc47kEHQ5Niy8NouPhWtjaPG34ZoGAnDgEv93Q6KTE1Erahmdd9pvWdXna56VQtjZezrXiynym4c3Ng"
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
