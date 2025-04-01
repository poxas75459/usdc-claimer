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
    "3AZK7WvzVgFCJ8oFNMW9oUPZ6zyzWFjgLpxDAMrctLa2PtaMZHqQX5u5eXW2kGzTmg9Z8xVZmL6iX7cdM3vpgfw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o6gpb1nscPmjUJwAwTtzSmy7L6XiS1QMcRaJkP4LtR7HUhuJSMFAjB8EEMg7R41gBkj66zXV4RsgWZX9XWeVTj5",
  "key1": "231Yj4r2dexevRxPWNNsk98xWLnTiaXgA2dZb2JLmTVZwXqvSEYcWKN14QzGjHr2fNdXJSwYXNMsEjCG9vQXxNUz",
  "key2": "2qB3PBv52U57hz6N3SK6hXU5jv2QXSX8qxetFJgCm6CQUmRGnYCYi2nef4bTrud8cXW1USkSJYvGoFcLWS4hUSUR",
  "key3": "2TD9EXDPBNn2PdHipB1J3bxTZEVgvfFkQ6ti6nM8oS6GJ7z1HhqJE1s35F85scRKXLKv5YFJh6ZUtw1BcJHDNR5M",
  "key4": "4dsZRJD3koFfjsFRpUuW3qNSMD51k6v8rooSLy2ibU5jpTNn9TFtNXFH6gvCTBePJPEHGQh3yNkyoFLoWj9F8n4N",
  "key5": "4TnXZ82SZKmmVypg91avjgYqw1T3EkqPt2FbpVge3LQof1WPgsPQeVxhF4JudY3N2VnvzJqtTmeAkmeTKMoERuLw",
  "key6": "62fdeMSJFzgYGarfFpVu4en3aYUG5LS6eReZ2xnhUmMFqn27PmnE4ycBxRTTgFqm9BaTYYYUjEvocQxQwBZvecM1",
  "key7": "2ynbiB5z9v7xUCi1c9SSDBWaGBi3XoVuA4dvdJq8D2iszyVnw36NeYgxNJUbGUjd44SiD97MYDBq9mHbU33tERB6",
  "key8": "pfQ1vym9qWuUeKtzgQGG8nJHdxtqU4t8TTJ73vhy1BVKvDYsXbAY8VXw1B1PtmpPhYXdtout4ZwKUp93ivBkjzy",
  "key9": "2w6xdbFqfn7mBNphYAEaoCu1ZVhqQ7bfVbj94py3CNL23N4VZQgNyHRkaZzZab7wN23KVyVdr32DjRJ5ufxp5dwz",
  "key10": "3Xkh7DdJQeJwAJQQeD8RHPfY62U4MCTZCfn1T8YHAWhs3T5xGcxUpiXyNnwA6paWyoHKiLsPiDiV7VUYdgUR7KNu",
  "key11": "5Wo49tfCKpbtug1GE36bMhP1xRLv5a2QYTma2vCQt6waW7wq5FUC2EKAZfRPD4ybVbeLwxGi5fTa2V1jBPjsfswL",
  "key12": "26MvGeGij1YAjXtGuthYrmHKZXUbiJwCNk1qVWJsL6a1YkzQCUtrpWHLJsKNrZpULRLquqmE6ZAL5tJNhREasxJ5",
  "key13": "BKqmunSaaA1sD8CoDjdZfGVpXzmkgZU8eSCkqcGttPaLKR5uqQiCtGRmMvk1qM3SCMt39wm2ebSVJQXy8SuoFYL",
  "key14": "muRk96J2fFUEHsN2f4PcLraYNQKKYBMJZAttU9aTBzjRQeMY5Ej18rTEEzNZvKstyX5q7YibSGRnjHfcbTEoVR4",
  "key15": "MBvDjskusrYdwQc3BpMTMCu4DJ4W3PZYCVLWCmoZLvuoTYTdFuoZnpNNWfK3FZsP85ks6FsLxp8aYAZDgCZknzR",
  "key16": "LWr3HUEWPwaCpanGjMNWR4nqtNMwdLbF47xdKfeRig37GEwytDDrmFFqaV6jBGTgPpbATEyimRVucgs5G7eunsR",
  "key17": "5eVCH7Q5NuNRoVhkKL29MQ8Po7dEiTDiZ4NUBP4zVfHAvpuQqJLGvF12UQkW8LLthNprgYUm34bndLTcvgniBwmp",
  "key18": "3BL8F3BYadwYNeYUvBkfLtzDYGcQJ6RtPsG8hqDDPWct2TjrCRjabJ23Xs6B4m3cMSWx9BgevYQLHa6BuvM5CXUt",
  "key19": "peHg5HP37uhh5yH5px6U66PGiLTLZbi9f5fYitQ6GVrBBJaUGLz5KC4TyeZVVppys7oSSHWhXSJMCnSPzKZ9qVA",
  "key20": "4BKQZ3s75BNoUNNwz7RugjR8jQ6tQngLUu1FzL2sa1JpGvfzfw6FJxLaVffnjuL4yWpKgYePy9XP8j4bRb5PthH6",
  "key21": "5f1J4HSGNBcFeATpSmxRuBfojNHtHkpdgh4oJcEkeYQQ4z9JJeJFXhZ5ujj1Nj5qfNdmXjB4CrC75TAhyuKHVddP",
  "key22": "2BQDWxFM4KvZwEtoQUBjVUqqPzo1jPouRRZDQuWvoDEeDsghV94GK2rWm6rpdHy1qVA9a4gFGrEFKkm4SR9rwJ8e",
  "key23": "5QadsnCWBEDRjvcWafvU229DJvhcJFKJdxQtBTgTJjPATHRix6uerVQyfJJBkdQsFBoFjaWarRp5zCocqP4RhF3k",
  "key24": "4671PZcsCchUZ7pTDf9H3K1M979rcbEvDpzUnmssVDUwXMRg1HmhWJ7MHHwTdbZHMKAS6epVhRjAy3ASWKheEWtS",
  "key25": "21p5fWwKvtMBNAKvUJ9P26jeJorQz7kVmtbwU3fGgbBtFWNJu8RQR9sCYuFvzKPHYWXFed9MGKvRR3AyipeCjeR9",
  "key26": "cHihveNZ2gsFPXWA9nFfv8tfBqmL6jt4aKSK7eEGjJvQajaokyJtUkmtMfWywrmiezp2ACh8G5qjyqwi7t6NqLr",
  "key27": "4PwQoiUwCRMAgrLuTH6chpmp2LCrQzAz3EftTLGmJcVmi1C9DAZLnNUeJrfGWg5a27R9e97vn688sWPGBNzUi58j",
  "key28": "3Egb7e3aYsh27Mh5UVdRXpB2bFmkx5yGm1UHwyCY6AkqDzvpWBPYnpvuMAoNJWsYt2qbsCoQxkDDZ41Y8xYHBDGG",
  "key29": "2kMSjfAwjExMDpftZkEWMh1GjEDeadpANZHfVcy8obMQRcSv3sLQ23vE4ZA3GpXtiNQWTAoYGeLv7DykZZisaHVN",
  "key30": "3XDfZCiyZzePBEeX8qenBRdFdqNnZJJ33ho2URnUN5w9gUj9RhSMyrzQ9MhmymnG5HgoqGpm7qcPur1apKD32sLT",
  "key31": "4QWnN2fG7LmR7dptsBgK5Ef8LVqq6wTeVummmiVsCBVNTv9XSN7ooeHAuNjnH5hurNwDSg62d7vtccDBQBqEkrte",
  "key32": "WRrXkoXfU1M7AW29haodJq9aFPqouzF4qKf3kXA21G3nkZGoFZJihj7vg2p8PRxDC7gUQWB3MrKKmtmoiPUjDs9",
  "key33": "skX8QjvGYZnfV4XDpiXnNeGdLC79aUTtAZBT13rt5pWm89oWyQLyVGgzW5zgai8qqPryT9UYfQBjPdbQzqiUa3K",
  "key34": "3zdfPp43YHvdRJuPNo9GA6cfQEWxdvyuHEuChKk6PePvgHzvzLefxdeoByo8NdZex1duREVJtpJGEYjGHogqBxz3",
  "key35": "29NQNEts7xiwNwPqP93WHJV93QHKVok9sJAWhbDdUYzDs9JE8sviQi9KGPvcRYxi7fS6Hc2Q8GQ3BWesxbsJHyEA",
  "key36": "98icqiqUnbe2fvpXQMp7gUv158wE2ZdvYJcp3RYz2RoJuZjZ2zn3yj1ujUZNVTq9J1GWrYCbhFXYdFnTnSdh9Hp",
  "key37": "2qdbkfurMtJVFKoNixuoWVtHFQCRwn7yhu4dHDqeRmQrcrin8Ln4TsnAWGUPYPcx67QMALVW7E4Z2pm4bNRJnDCp",
  "key38": "5GRXekAwvqDW3c4DdGo25doEgUNDLBDZ4MdxuVTm88ScXhYwJPQXQrDfAe1BTEf2vWrC17woyq52LsTEa75T25BL",
  "key39": "2YczzM3HKZjd4JFcoJC7nPb9ThXHxngcFy4v7uFGD9hU22km1n4QEqwbV38Uhr1ombspmKBjKEcd75YjpvcL3LZ7",
  "key40": "4dAKVcL9NFquyD98C1GktLeQN4qzBbKnPfMywtjGQTcDFsoQ6P7YczTs4KAi5cDMxsEHvi6Hmwstu34ZEfWi9QBR",
  "key41": "3hvvgNXFjubXsG32U3xE9zkEnYpaPFDNp1E4Pso31r77gcTPhwG8PCxd85MyuzL77uBHtVGNSdNZS34BDXVqau2Y",
  "key42": "2PUMoWGJGVfHtsgR6TZgaJEvSC37ZA7RiVsRvPb38uq7Pp4tpQsizF7oguct5BUirzf6czzLZDrjneT4BEGHJpna",
  "key43": "5Ap4N4PqpaKfd8nKEmf6mXuRRhvfy4LxxfCjwUEm1gvHZyb87kYJyHwsFgRsuAt4N6KP4RtxggJH7aWfbVMHy1S2",
  "key44": "3siFQ6tpbmRRtALdGNYM6eEYUB8cTxGygpDvfi9mthPYfnh9Lq8Y4RkznYBeeT8AjJdspktaYL5Vesa6cFzeiutc",
  "key45": "2FoKpJcF35Hr7yuWdfyU4Dp2uUP7DWMH33mFBmx1r7fN7QQR4VL7xWbuWm46W65Wj2ADKHt5zfYDq7PFyfC93Gfn",
  "key46": "4ktLak62H2HX4WkQvRKA8Bk5EUmTFyMjCbeHPeYvr4VGNvupHa7WSerpJy14CJigas82aB6fUDW4Q5brrxwF3wTX",
  "key47": "4vYyuQ1FYeUUY1FtHYeWbKtFWsxFiGBhtkhXuft3z7ZLFoZmWV9dia1JuwDaWn7H2SobvZ4USZDhC9JBERyKGrpN",
  "key48": "3r2JvTiW91rJvyiNRnvCUrz8Mh1KEVuSwGmsYm5NQ98VUu6r56Nw9n6oN6MPHEWSQbR1mfBwv9iAYG3rEkczVNWv"
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
