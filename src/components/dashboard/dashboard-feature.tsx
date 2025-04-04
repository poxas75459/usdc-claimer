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
    "5ozfnfVTnE7nPv5vnBiPazmS3xsGmQoGipFtCU6vw6CcDg6dwXKjPYYqg1dcpVJoiMjueAJeXy8V8EjcDWAgfA1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZMPeSrQEnndxEXhkMBzUYj4HhdBGfLb2igiN9hGdTt5acB6X5hMASFx5aJQviNLgphAZ8zhYdmWjWhRXpyFCA2C",
  "key1": "5Z2u7HuAzVuVL285NSNqHRRxQsd5K5wGVyorZKtt489uerCiZjXjxJHepuMdZ7h4PHgKUkTqcGRNTFAykrsBPNYV",
  "key2": "XFw1DrKqiDPu1hQwjvYDaXEeTA1eJqt89u3mNzDQVoBJxHkboMuZZM1uEy4jnXerphkxbfXJdUL8tNeb8upQYCD",
  "key3": "YDirFVQprU7FRwjavXMgyYTTJtuPcnYjZWc6yW5cFJP7gaa759YXj1RZQRjPMwvTCYHmBv3rr92zUQD4xtYDB9r",
  "key4": "KiiwGGY4XseG5i15PpZ8vDQrYgs863njYDtsT7BArcwbWsERGv51dwxFrcguDQfXc1c5fvVi2KT2dgFttYfUy1R",
  "key5": "5ef1gv9QSLryr1XcaueZQxn9MumwNtVCH82X3k7SbH3LtJy5763euQJK9wPxN8puPX9oQ4QCkn1Vqsf4SfnwTEBH",
  "key6": "3RkwJgZgHYq6jBk5iXH1iM2KRpejxLGgsgLemkeuRpXQKUAijpfzAgPQvWBNzYaiURdtzFMjnDa8Xt7HFLbAoXaV",
  "key7": "26HpFnv3khXrnmPZmLM7YUZw6GhFzRTjWVpXXnLxnqE6e63RM34X3gJ9DM9fTrFEp1pqttisp1qAfP5VsqyNR4tQ",
  "key8": "5BaYUUMenqw3QYrvreHCkKeertEC9Cpnd9ctMEtfjy2b5TnzZmLPnCkeeN3GTkzXM1ntezhNxRLsYKP6NMAixHVd",
  "key9": "66pTfZ2jZutFf5oyoL8228AbqXm2SQg4pfnWp1RysvYVdUVPQ8bmdht6R5W8TNrGpLw1G1WNTEnZu6tjsuRw1qsZ",
  "key10": "3dtZzbw5VWpM2YET1JsSnb8GCnpeRCMqrhcZMYed4Z9h8qQxk3XNq4ndPK1tWSUvkhCTW5qz5CkXAQ15uWVjrLrt",
  "key11": "3bKT2KFrNaNgvawizGoPpMj6AoXpEuG8CitE1vdTsBa3cj1CWNmtRrFNqVKaUYKjuFXN9KxPjr1AkGKfxJ9CwvYD",
  "key12": "4CwZLgrCY3mteisMTdAg2BDXXpvRvEwCvsyBdexgR7i7uZnkmfiBTjjuxeKu5FFAbdroCM2bDt49FZshsuRqDUEd",
  "key13": "2wByyzPH6xDr4ULFy8xT2UDACpfc1zZymyB2XPgqjrie7wcp86Tyq1CQ7FsjpB9aNJ1KC8WEwNcUJ5vcHXeMoorh",
  "key14": "5XFm18aUiAT5QsZvATVkEk7gowZcjW2pFFykGp3Fj3dwkQeNnK5LGsRK5AxHbHfSbqjN6cjuDKjkyskU6Bvwfiyw",
  "key15": "2MVhJbMgvcgnh3vKGbM7mgWdCZ7V5PoBEUuiVQENhcb3rjV5efPaqu8oJupLmD987Lj6UXnVTu8uZgA37Wy2aKyZ",
  "key16": "Rnr4KU6QeTsQKMwRFPvNSu9CyJef629NFQxMEbP6CP1zhFUNMSZwnH1Jgz6HTQpEqEdcw9gu35skJiCSzoCG1XA",
  "key17": "4iLWuBGavivtejkt4ZC1iwfHiv1jV9uN9Aptbx6TtBX69qomNth672hsuW2XfZW1ToyynLdkqZDGCkTDdgLDUj8S",
  "key18": "3vSSCfjiRkbEJfV6kK3VsqqNPmj8VL8a3NnumMKZ9JkPv1PNhA76kcB3CBUM4FDUHxsBq7fRHJDp84T7HwWbey5s",
  "key19": "34TtUHFH9CG1rf8QkMokjy3YmDZwsAbKDgghop4EWcZrDCYNfqYt8wMHDgox8ygchjV1iE76BZfNV5hsvhVixepS",
  "key20": "5ZGXZLT7ugpoStQsraNkr7y439nc5axkobXAS1uQ3uVyEVLrMesjndtAdjEghJgkZ6M9LpZETLqEaQjoDd5Cywo8",
  "key21": "mB676C6K89QjsnriXikSWKAvcoGf6MDEXowtG5aWU6Ph7aKDrF7Bbf6CnDfRo9W76RUjCWWVdDoSXoQzJW4PczB",
  "key22": "5pwSPzBDpnPXmNA5gwxX7382zKFVXAHEBgjyFGkTRsemKBsD3Wwjq1r9FUTK9TYRy4ty1Xmw72kuQibAHkJTJ37T",
  "key23": "4GY2xj6td9xsQmf9WSQ7UhmwCwwZoXtSmFBtKngHR5uCrr8n6Tnn394Yu6Fr2fUrbXQXyX2ussMVxdPFdyc4XgMd",
  "key24": "4uqF8DvMiBvgz3tTzg5HhKrHNdofEkwwPZqMr8inZp4eGCpCpM3RvfARZm2DFhdGkEoD668aBZdHcXVcpxHmV2JC",
  "key25": "5FiKzpYNsUiwTF7hk6kYYUBxHBnTgQFTEjFna1YwGg3qdHYxYWRN84NjWQd3cKVWR8Sj33Wim92ApYzvWGCYqcLE",
  "key26": "2bPGjq6SsytgNcNaMVhGxzdVyZWidTETYtT9sq1t2EBWemLZph3w1MECtFeRUq2Mhws7chKNU2BiHZN6o3gKwHNa",
  "key27": "3pGkVZpezPyeCPPMFG7byynJnZQo4cRLVBbU8eBKHFNPvUTs1XEzKs9vzibFfEMjRUjHaV68smMdc6x22UiW1ukd",
  "key28": "4schrAwsRgux4C3nVJHSSkpVu7yoCv9VTPvngwJtvm8pS5vAYQJ3htz76Tqq1WF2wxPj4Tbwd7tMeJL8Eh2smKPC",
  "key29": "5yvvURBfv2L8bVdYzKZaJiC1bcxwz1miHzpMuKjQYZuTUNAfNxGgL3y2pmjwwyJgn83MTj16cLzRL8kZPUGn2NHx",
  "key30": "3is9HQ26WU6evbhcmdDSW39uks6T9havzjzo6zWg21HF3vnMKdoSZDH9bFBVhSWTHqc3VhJojQ3FxbzwwFS7VsNH",
  "key31": "3EricF4JiL2cxXYQs2E9ScMQd6QYJA99aFrnhbdzrZbbHkzz7rKZTMLyv9uZbZviDvbopESkpYLXwDPEtT9Hagpz",
  "key32": "5yYuPCi51LAs6soh886vG4y8DNLimiFvtjgHxxoATUP4gnf17nyUahX2petxnWTxh2ZdAnEUXAqR4zBL6t1CbRZk",
  "key33": "3bnxp5TPua6xryqunhyNzF8qu1pUJzuT86CsoQtpA2vTDbsK8tsSoeDb2otAvs5xMso8Q8G6rP3mHpF2kFJ7F6VF"
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
