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
    "27EsYhznUAxGbMPmjTTPVUUjCTfDvFp56wqveHLKUmrpmyNDAN7dbWU3pEvdGLA2xcALq25qCruPZvsxRR8JxQ1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B8dVGM1yGjpRHoN3ESaq2Fn7zXCwCa8EjDQUc6QbU9Z9yF3VHr8mgrS4aMvoDAV68UMXyun722SBcyEAeGejZhv",
  "key1": "2tjHQEYPVLLe1kBL4vnnHZNBotTM2XVRpTrWXprwH1CMSwr4S323eKzTmTNWV9eu5YjQNtod9f4k2oiUcqk2MNfi",
  "key2": "4VmSL7wUiYCrePx36CQ1a13uLS6RWGzb6crcJHYqUP26pLVduEXPwj16ErQQV3cFyuxS7Gk3SLrKyAQegCKq37N4",
  "key3": "3bwAk7AmE2TqRH5TvSUPaXJJKQi5m1hEH8kdq79yNcqKboSWQuH3NVWn3gCZPp5zJ9GQhkzVSow3uB8XuRgD3C4q",
  "key4": "3jq9vhNpi19Ng96qc4SrUHm55qqDpZk6TvyWy6gKHub5TCuthKwMqWBzWze3tGXZpPmxojEx2D2MJqsVoQQBdhrP",
  "key5": "5aN2NyEWeuikLcN6DbXgYmxYzuJZHk2hMhJwfecMtXRVKNq4kKQPQQsq6uUxnEMA5hAaZiGigUWJNwP5Sr9WRHUV",
  "key6": "2L53kJtZtLHgVUFQCMgFzqhTtTpRzPekJvFpkWAt81UwDcWFkcKP8J7KjHxWD98E9SNgCikzA2Cz62DTA7UKibR8",
  "key7": "5RGm7VcEAH9of8E4KVgdENkLrd9wi6mEhzUE1HEAkcbgUU4EwReWVpXJWQZksnvmVCXJisJiw3tWqjopP8g5GkFU",
  "key8": "2Jd7EDgsghgHJktV9cFNnGvQybVgLDHnoWx1WW9PDbwMMNpfDreNNhzfZhtWQYWbaRMxmCvQyKRtDCrSyVoeQK5P",
  "key9": "2RmMLRmPki6hH2TJHpwuHXACnYBooQPgNvEqkDnQvD3JHVLRrdnqadCpDQwBBFhnFQi7Jo22GayjbdnDNLsGZUxn",
  "key10": "yUVUsndoTut7Rt6habY2pVRES2QTRVhFUdfC3QL5TaXNVuL6vL1SA6XCYk3mS65WEeRULugokjecRXfWtzEFonP",
  "key11": "2U4ybWQmtEPRqEC8MaYeNofweqdD8ZqLoRT3ZdkJmUJ7rziZGLP8XjKn39CQiYM4wJtdJtG4rhs4udnncFYcjWFh",
  "key12": "5F8qRqoCP9RHBnoVWS43LpWTeqpXL6QwV4XUQRL8HFdkbH9VuGXesJo3FJBGdAsaNe8bkG5PBHbo83AVXqB6mJLF",
  "key13": "4ArpAxo1uJG3G7cC2aKmNKk2sQvX7JHDF1KvxDAxQr1g5BYR4s7dpAp9wHtZwQrEvBiH8HXGqwahHna4fJzGXYDp",
  "key14": "4JKDAT5tLs8SsCzFjZzKtmxpJCMLh9s4s2K9b7LQj1dwZuaxQrjueDCp4Wy3b6qkNhuM1E27ZxjbHsAF65rFQ1fU",
  "key15": "i4x4z6KjoGpHvpZsvWmU18eyj11dZeMJMWThaNs3sU8VAChE8pYzqJgSDguqdahHbXa6TRRBJPsCEDoEbEXou3G",
  "key16": "CVyFzEw6ck4pJiBhh7QqZPUSsrs4GGqJowA8GBA2PpATKD5agsYsnhp4FsA8EwKcZqt5n5x6S9V3z3oeNFYpVmQ",
  "key17": "37qkWmYhwH7sebvWWSqUedXsXJ1mPRRz8cAmuNfF3Vm9Miwf6wvFvJao9GQhdpZhjwSwRZgiGJfwdpEivEJNhAPp",
  "key18": "36XjUzT9MH7uEzMhRTzXqA6qbJ6z39Ja55j6xFhsJetP64aGnCYK1aQm5RPyAPuQtwGCBvwSV81srxqbEmohYwxK",
  "key19": "56rTPJv5Rnasnxpcmixm5MUpyCPPEAJfZ3gJdrF9YuRBuMGastxuB9d7mDkyLkTKkyENFWNbPgtpoeBhY6Pjyc9y",
  "key20": "2CqKqceP8N3UjLZmxPZDHiDftWMP2zjuggBQ6hUAww6gSPnWPiGC2N4tT5Lhc3Kt7MKgF1XfY4ehRFWwcxVdzPij",
  "key21": "5VGPLRjCs8tQCrSN6j9kb8bNyuqPnRrXottXja2KNE9FbdvZhnqJaxXvV7Wwqo1RFeJEfLSmKEd3UgxQjbFPTR4g",
  "key22": "2SS5TDDN6wgbV1MQbpxxihpxrmk9e1DgZi4Ncs7JTNf7QKFZrYeqM3f6GfK1zjHTtapYg72xXhzEX1DjUmAQTzKt",
  "key23": "3D713qxWugrVTzPSvUf32dz6Zf98QknFCam8U1FyZMnn65LwbGasGbgqbjd4nSLsGMuwNWEyzLBiFgeYnbreBboZ",
  "key24": "2YgjAd98pNJWRkVNwNu9jE5qP5ZPx4WXDcVVAotwFkVaxompEGMRVYsrTMHrSh42e96kDL9qV7WAdxUQfsDQNVd8",
  "key25": "2XkcGJaueFGF8TFoL9LoJY2dYD3t9amApKGV5MJuDieJAGbetGesTfsdbDSy7G2CR8adJu2TAq41rL761Ff6kmY5",
  "key26": "jDwh5dwQmn5fYH4QbSfgGz6K7S5vJAWVJYDNT1eXGzrJDKry1Vmz4JzNdmP7AZk6KuXSKrkaXUNPwCwj4JnvdpD",
  "key27": "3TSkGHXhYPK8VR7KLwhV4wH3MUKT62G1wjrxYtXk22EFFkaTmeCoQUA4BPXkEhPonELSh4Y94tBfxkef2cCHU5eA",
  "key28": "Fnp24Ko8Ge4xTQswA4nTdf19M84T6y3mnvo8iTuihHYV4hzecDqtPr9s2fMdic8tJbsodMo1oYHYPqx4hXsqHnw",
  "key29": "LxSbthcUXBq73oCTs2DQZJrUL5ixQyME5yGcC5c8vmzxa5u6J47LiN2JvaYBmgX2JaS3Ad2ajtKk9XLh7w62Tzi",
  "key30": "2tDM4tpnLmLYbaRDmKjv532dQ12EbjbUv2tqK83kEUnh5STWrN4iryM9hktWCTNffwtdevGyePJVkUmMNqa7mLxG",
  "key31": "4KgHbJvMU31tndidghn5g8Wew2zznFhwtw1NMmoF4ecipeAsWsk9RbTQh2pHvXnEQRcZsxoN6vrSpnmDjQ5xDEm5",
  "key32": "5Vby9wQLhac9jWznyVAfFYqGbwpGGGHhmT15qUHBRUgJzNV7ryakw8FpviJsfsVd32uPnhQXkXJpdBBDEQi8AAHX",
  "key33": "5VvP8WbdjTBvy3K8UNofkdKLrJpHXDn6Dhy8CRD5JBi2e6oqZha5f2C4Aa6VanHKNS75nxXjn4i7EH19rkkSRYMx",
  "key34": "4PacY18gyZaRJHx9JCzJ2Nxchgkhoqq7vJjfo86uKV5K3qViHBqFfaqbnK3uRMtrLj3dEiR52esigdfcrJ63Zi9Y",
  "key35": "3niJfYUaedLs3nUmAtMAW8zT4yaBMxzJT3tHL6yTs8BNgGomAkAU3sEnpXHMxzP8wy1JLxURoisDPJtHjw8ZUMG5",
  "key36": "2JC8v3cxMXBYm2ApvTP8BkWgDvLs2pY71o5BAJvwoc3QYbDubCAk3Cm6RpQ2w1UfLqZJKCuFN4jWLU9xhCsQ4tFG",
  "key37": "4sAU9fvubmroFByJwRBcCfK9ZHairkCAeVQZAaCuqWKT2pC6Cq5KmB4yA7wbABtW1ZRc3o8sxrV5Ai3EQcuYjKVa",
  "key38": "5BeRzecYRkQtrB4kjxoCMxg5U8xSmcVmwvpMDs68tTXdz4QsyCjTR66yx8xvGDFuNCyFhuygWzbsbV5FDLRdqEFS",
  "key39": "y1fM5He8rFsjy5t6JRvYRmyy9SDSkPEBS1X1mkqxEKgWpgxMvVf4BDug6zSBL1A8DYepiaRki4Wopi3T9Zb7AjV",
  "key40": "4fwacnmkhKzEJMXQSaLAdxsZwy21TR5QZKrru1VM41zAXdYxRHJ3A4QzXNRsc5HhJsE7bJt3VZEqTBPU9rdYrVyV",
  "key41": "46R5LdxcybvgYTsQLxmiFcsw8VGr3zT3BZrQf4ciGyRbXmKssS261VHUpyWhTnWmuvwvWZjGDwqhcrRZVrDsXdCG"
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
