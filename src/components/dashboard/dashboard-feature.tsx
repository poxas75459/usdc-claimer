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
    "3r1n7tikiMGdMMN7bNnq7tEjkTJVzZcajzG3AMaP2NMdSNtPm9mySCby2zk5di3AQVeMyPsvA9grDyBTH2x39YVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ujvDdzKrZ9V97zKsTYBPP5wtuBZSrvZ8Eym4Q4G8Mwuyck6eshdSAtEmZPhwDh5b5CJUpUXPUMojeMyC35sE2VL",
  "key1": "3FGELLo78RPX5oMfcsdq8wYdqJQ6Ebxs9Ud1wskKQy1E3qeTiq736Dup11LPvkEnBwZQWyodimYFKQBjJNvvaag3",
  "key2": "5GjceVfAi6kEpiubrrUNQsGNhbJsj6befrehMHn8kDxs7zv2svJJPwTnSZkyWVy2Aveh4sf7fk7mpLCkxsbsaT3C",
  "key3": "5tKyGTqbuUsraM8hFnKoA5JYMPSAFrnHQg6xZDdYiUfPp79P9z3wKfREMABHqtnTFCh7D68cZ2JzXJscNKBnRDZG",
  "key4": "2Zck1auKWKUjsEkwAHS5b6QGZmEqNg6cER2SgWZv3MkhB4QFY4AYJQkrRgncmp53VQbuey2TvgrWUAR7voZgp5WU",
  "key5": "2VYNAtHpMURi7orLdXCbf3FVkRJYMFXEnR9jJyFFuzGdd6ZRFCZkdojno1tWz5DtDAn5cdKwRm7NjVrrrQsX2dHZ",
  "key6": "4o9iHzqdC3avTQD6wodMsG4VnGu2E1CT7yLjBEQVhJDPttZpnYv8DawxLT6JpZF9rJcjUr5tM4wJjB95bJo7kgaL",
  "key7": "5LwwVwUKWL6x29qTNhsZvuXcKtDvyKePPV2DYXdMwD8i3Mq64Xio16wn1Nt4Ankaqfiy2ByU95vuafiAjcuAbie4",
  "key8": "5hpmvrKmbUfLryocN7JU28bJcrTcd6p4jB7Q5fiB52i1z5jBHQywDkQdLgBjdPDkNbAQK4ADJEXpdKVs5S9b3i3G",
  "key9": "2Wbvepne5uHFdJ65jFHcxwkxYru5cfjsepeEKnBm1Pf6cjwG7bdyiKtHHPiRCTckAVLmpCvr6nhVhbVcQ7LxCH6",
  "key10": "5xXks4fTLNbHfkLsYtTLGnLJiTJ1zZFuZ2oZwktinbhFewUCLh4rxvuoi1X5rDj5ZGf2DCozQSDXrT22bVLZVgmk",
  "key11": "4xZHbLkncou2oD4LdqZmtZke6y8AHez9o9hYo9Eza71139tExvRxcW8vfG11ZBhyYs2gVRjKLPu8ZGJafEUzexy7",
  "key12": "csAbuMFiB8q1gru8nm6bZwMXheRqB8MuZ8zYdB27s8mZwv6Qb1SwajZb9hMP9EiqhUEmSugfimkF2M7tyVoSHb4",
  "key13": "4hTLvEaUAH9Z72NggKVMnrsQ47gA1uFW8Xr6UpFKD4GjEBipXg6k9DjJYiksZp6qU3m9ojAdzbAJeVAgwGiCBbuP",
  "key14": "3tymZtjzZkWhUQtxC8Kbdspd7HDYtVZWMDbncSeQ4Cxo4XyoK1srgLMfZbDw8DqogrevVuc2qFVjwzSQXPWzZQF2",
  "key15": "5RrF95vPpA2gwSMhrJDH1EquF8KAMKBzG3YFVpsQxbqafquk39dxNw17JSgSYdkffqY2vznsgFM4Joa87qb23Per",
  "key16": "2Lrk67W3LQexF5gQe3xh7ic7sdmPpz21y7Y4VSdamhTQbfgRWjNxrH4FmoVmc38tiy54afuRygZS1uwqcEYRvWvY",
  "key17": "2MTUSDCG4KPyJZMBhy4WoZ8HdR1uvWfbwipUbRcFMMzpW3kKJNTYSeCrATLQhnrRy7u4Xg6tmEsL3dLUn52WhNxQ",
  "key18": "2DWa89GqMYF9JpF1YzoLYu2dFSwdtJ6iriGiZgKpcNxCLxvr26AYRauw2arALbE5mvX9oeeu9j4SDnMhNYMwQMAF",
  "key19": "5Hs7BhDZqnnyoFHASQSQgjZ9hb9pvcgmkxqoM62tTsoJqcdnHTgvLC5i4sYc6heqR2KpZ5PDA5eAXTVg11chWQXd",
  "key20": "AB8nnjsQe1EqR3nutmwtmoUHWEMRbKjcTsdobeRTstrbq2Kj7KnnSmrWNkwNYwCzkwtWUA7bMBhKnq4XhAT6DnD",
  "key21": "hq7AGitUfKmJxNcXCJFumajGeGrD6NEgeoj8tRf1yww9XhhsMEM67sCNStq8ZcU7XoiceEePgcuWcMQni3oYWgS",
  "key22": "tNSPEpk9Ksj9ZSgrsUziyqT9n6DEbDQoz8Fsa5MoSt7obRmrEyRtgKe8XRponyLQfMsqzoR8DSfG7LBpDfinMtP",
  "key23": "onGDBdyj4L8R8YhwJmxzvCCfoaKF4Q8hF4Ths1gsL2KrBPgFsz4onYjZXB5n1j88d5bzESFkvEU6V6y8JrFwVxe",
  "key24": "2a6F7PdVHuTNsDqrjuH4H9ZCJ3iK5giKLMgPnt5RP86TBWfkLxySV9VRegef1vx6gk7TKygPhrc1zusE9NFUQJkg",
  "key25": "4sgMiAB8Qrzvz88mCwwaZ4AqoG4a9To7Yn3kXwyHq6eJH3MAWuTprdv6iJXW9WvnYeUTdqf6qkddnTuPd6Z6SJyV",
  "key26": "2XXGvPoU7kF5v1AXUxp6vbBVNViou3i5mWubmoUx9pJyEspAqGPTwNT8Ves76okkoRoWp2jirKesY7fiUNkQZWvW",
  "key27": "Qz5o5Dw5F1X6MxnE5xiNWXZW413Gx9oM9GMHofu3mGT9wwCGevogWYDUFaAzi2jLR41ZBuDuSKFk8fz7cc7RpwK",
  "key28": "HJdSgtTwqjhUy8PP6D68Tt5AjEJJJKeN8Wjmz2vvNnVY1FpEq9W46GCETBcHCzeWbWcmz6PAxDCBs4XBwzpoDq3",
  "key29": "NBobxb1BdRePVj2wACgBdCARivAP3dh3t3P5F2fM6B4FvMPM1hcwmLxqyKu6C9sRiTbr4VgnsAFMFmTodRmvWrA",
  "key30": "3AMW7U7fpnQVFoyjDBeiuZMZAfJSW8Q5TSFcLKuwVpoe3EJBTCAtkWSqLmgNbSieHpNFnaWQDXnYaCFDbivreXo",
  "key31": "2FHYtpMiAJarqRTNMFHbL4PvSbPq3VMwVsGP5prGtbYRPvj9GeoJJmQLCunF3P9xvC3dxsY6r2soP7zCM98fJT5e",
  "key32": "2D132Rx2ZZQVC1Pb2xF99UJ8Aw91928GkVDu8GPdByP25x9XkeRxJfYC7ok46e2msqYK4rvFXYTfW1GDSMkNHd6N",
  "key33": "44ZaH5dGHy3nbc7mSYWNUQ8JXS5fWWjZToV1eF9PZ9h912GFtfSY1QaxNpiSj36P1LbncT6yuZhPimEJeutxeapN",
  "key34": "5jHEH7hJYWgcP8WxyAqRvoGBKznoU5WouHpeQFq381Ae3bapvrRjx2xj2aqS3bB7uX21gBd5yiNMcTMXZjh2iu3h",
  "key35": "5UsgB7ZPigcEaYJruo4HEHTGnT36WCN3HLUESE4bKbqe4EGFkF97vV5ms4dE7P8rLKRU8FV2ZHZPcRkghqkxsodq",
  "key36": "5jKTafVJ7iLbnDVSwMi8FmknL5vb2Aj1SUaLkBcuopR3XehSwMayvPqv58sUmy3ZHoofaUUDt2KZiJsRd9UJxi3v",
  "key37": "5x4cSeka8zn7Q2MCsRsbKqrjL4sLGCcNS3f423CMkesdtF5PDzhTn6n1J1SKZdVLxiNjjjLaqEe1t7X58PRPxxtK",
  "key38": "4W9tsqJ16iy3KMCtG9gT75nYZKFH6NJuM3k52D6hbrfMjVdfoZoSkzcA9NYpjkXAH3jkrzbepmKfkKy7WhG15Ccs",
  "key39": "2zYeYPS7jw5JHJkz1V2JhrCQ1G9vzpxv2baQ67stFANDo8TteBtzzD16VXto2sUzdFktADQ3QMkCS6eJffuGeJEN",
  "key40": "62UmqVtLK9Asgi9wHPgTL1uZixCbShnMk6FQWEck6F9YivMEojZUK9UwPTj7S2hh4wNCXtSnuDCQyJxXkDiGLXHR",
  "key41": "4A7hZgb6UiDpFNNVoQ47Kgi8L1wMPUa21sAbB5LBFrVBfDPARKr7uZCLwxm4ZFvy2DNQW1f1P58Lcn2Aqd36DgKR"
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
