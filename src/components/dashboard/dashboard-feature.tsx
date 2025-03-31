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
    "51wMVL24KwMu15BN73zysNzMjQUCZ5LNDEjyWm97qBj4jdUFSh6hpta9oka3f3SYk87wwagiZM531ihqZrN5W8jw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aj1gVpkGsbXC9DjwUHVqqwx6B95HmqxqSmSu5vPWaewXwixCVmBijNxwi6a5Nw9S18tj2HH2871FXPXh2wJC1q1",
  "key1": "KioZFZRV83M1MaRZZvJLMdTbgrVM3CQFWFA62R6Pq9AHAG5a6m8FvBtFRiBX5MNx8hKBJ1KYGBgyLTBEQNFftz3",
  "key2": "4fKajs1n6pao8j8h1m5sbYM58t8AmcBJf6TfQ869w2F3PGrT8WCAdzysfVa9uzMF7MhMT27JsqrzH3e4WDqcbGJm",
  "key3": "4Ktytnk9AACcQqp1JJ6vzERcxkUyxj3pqG45WDZtVyjQd8K68bAYcuPrNmURvuWSShNsRrUDZAdKYnvjGf9wKdNp",
  "key4": "5JW3hhRXGy1xq1sQ4VAewz34YzZKxsGjadxMU1PQYA8H7dqAC1G8KAqT8CuDKYuNjg8Xy11uXAPEgsxLJfLmrCGG",
  "key5": "3eFsmxtUk5xDnuqZsYvSgHorkY17iRBwx9eirmqWUnXUUrwUoVfWLyK1sBYyH3UiqSh9tEf9W1BJzkvTRE8fVZa2",
  "key6": "5NXqTjU8J5HDHsnDtqosV35m1Y1reixFiLBxMvW7HY3fkdYJsYdLZpaxoGUQ6FLbb1pEDNosm12xtEGsEWFFzcC2",
  "key7": "4CSTzWdVE2TWiMDZ3nZMTkTe3P7h4XKcnGmBnkTaHx3CRnEHKuhRJaAxzUdX9TYybxwRxmWaVaofFNLQ6gyXpVeC",
  "key8": "H8woWj4njYJh3Vydkh6caA6NBSo7xyDcww83i8XBLdwSbEJbNcKZCScdvX4oPBBLnJKioSMqvrceGHg2hXtrUyn",
  "key9": "nkunwut1e34gc34Ph6smPgndyadorN4fv9rRd3o5B3sTNh35h3FScR1rKb4iBR6yPiPptp8jD65vG6bANjvBh3Q",
  "key10": "4D1ze8cw5LJ9v2d2ryFQ9wJBrxxgCUKv6eWQJRG1NbZx7mp4J1jR72bGrUcPWEn353NY8ti25VNPzFwtpDm272D3",
  "key11": "3nWW96eBNSXawSp1c9K2NQgbAQk7YHqj6qkJyEop7Ne5Uu4Dqa7k6Ydvs255vLzk75H1NoXZLXPR4MgvtGLVW2Hz",
  "key12": "2uwsaJ3rV8C4FgTWMREjnGoriWGS4XmEiggBrByyMTiK5Pj68WjJJRzrJoso6wZv26y9BLrBRKoBq8jD5N5LsiuL",
  "key13": "4a8PwcTdUK9zmjxNQU6fTL8nSDugbUqutkkHM3zdjcr7dms2tKpYKqjV7ap1L5qjfGgTod6GuwxwrH7zbF9LoJtT",
  "key14": "3wdfsCecFkLoYxXyXcfPJwPHHDQn74vsU4AAGmTNqG3UX7Z4YiEkCN4mFkgmP7CUqqR3UzHABs7ueoYUymxg3ayA",
  "key15": "665BxpFXPpnKp8mRvEEde3feqspGayW1oPD76YfXoRVGn1oVkC84SdnuVf1u6FQBGRfjCAVAbcjzchpnq3LAoCHW",
  "key16": "58nMWy9ukqUoZaXoR5R2q1o1HX4mSQDXN8Ksr8YYE3YY2st4Xe4LDXp2D435k3Zi7ixnjBe4BwM7ywjjXatxLkJ1",
  "key17": "4CUFQTDmdrYUHTxxrbddN1Z31WS3zLio9PE2LPdrZajCcAUK3DDzzESYHQx1KT1ZypE6SxuoXH1Xtxmf3honYWfB",
  "key18": "5Z2J3yYV7BspTaiA7khg4hya4tzzj2G2rDFeRzU3w6VhcbD2CPigWxwu2mf2Shx2bRkSix9hy9JS573n2SLw7Ffa",
  "key19": "5ZDbzm1wvMSv6nFgZ5HKatc2rVHPoKRLK4J3KHsxRubxE6pkTxiYwwNCZLoQBUkMCuRRdZL2MPr7zkUvJXHcgn1g",
  "key20": "UQBHtVELzL9TnHkzkxjw4eniCD3uka3vwNNMiKA1WLcu6F7kjmCrdpbccfmdkFT8nfHmudhEdEgVMU6bVkErECR",
  "key21": "4N2J2nDJW9B6tvNUvhWFuJf1rHKDXQevqB15UT1xxGarKbazZzUsT7pXF3hYwkjZRfKSVBVLzKZm11h9CQD5VXaT",
  "key22": "nE61bbxNj9MoeTZkexMYPB4HLhEoYqqFSJ8fUFZcqRxxAHi21Qx6g2NfzenythG4FS1MmuaFcG7gT19u1Vzy6iN",
  "key23": "4QkbZ9infu9XGSKnw7vQheEnz928eVQRKv26bVe2powyit9vuSrrwupu3rAf83vDHDCNEHKJn8DXn5t1uRp8Y18H",
  "key24": "5zoNPzCwSgFabuMZ3miPAwA3pWRtUPYAgqQf9FLo9LZp56EgUJwjtPyT61GtT8R6EASFNwrkVeXG2b91BeGr7PB9",
  "key25": "4PuUAtnaZmkqzx2yxGKNQVMqyBX7UhKUvzZBJSu6yeDeDN6SReB3qvn26xbPHqPynpURHR927ACeZQyFtVxszxnX",
  "key26": "4XB7A3HnhbkrHBtPWRyQqeZiRAKhEKf7G7F92thvVXMxFPYEYi4FWmV17nQiZKh25d1GgU3Lgr8CzKsaWLAtuX6Z",
  "key27": "4LpjY7cWpf6aMQ39a2whunAbSiSH8FuWJv3nNdEGXBtdG4s91hThd71SBVBhR4Pq2ympPotmMEqTD6o2ztTidvf4",
  "key28": "2cTUvGVhEDrJmD2t5KHuevDCE5S2YC2jkdtz2FPB7TTg8bkQamFC5X5Y14xKmCbWVB9hLutCHUHQ45VZ3d5Ynykd",
  "key29": "5hnx966qDttGpfBfap8ANrSuDrF36hRupnQR3WNyPcpWBb3sEZEeGxDbYtook2VB1pmPGimewFUCqeU1RS9EoToQ",
  "key30": "yXW1kcSs1ggn2qkjVu6y13J63jZguh8aq8bYnreYcvd8AV5KpMbrzzJt6zk3qrwn6kR65vpAUjCyaDq5KwLASon",
  "key31": "zjU3MmD8kqMHd93W4NpEnnd6nbRyszfNC13UgvfX65RKzsuaKPviPrN1vtiiiRVQoXBPuF3eDy4nFicAEySmNuJ",
  "key32": "3UrdndA417SPSe9eqgdifee3DjJKBtdy48k4cZXHmyW2E2t5Re7mxZZDonNhVUBh5gZbkb8kszktMYp6DfnKSsw9",
  "key33": "2TMnHHUTt9z6c55w14qDGA9XoZ8vEdorWqDHBxt42NUZUpPdEx91QxMFHGMgemyhBS3fXgK5MvFWbgPSmE4CNSqs",
  "key34": "3ZZ89bsrABifXk7vQNEeo9GavxRtcrDWyqj69kypYYcRoLzTcF3fXBgmXDKQk99Lk1JH9ScR4ct8tKc6JTMGEvXL",
  "key35": "3HC88P23yLqZdk3o7E4apAnt7mHzvC5hWskKQvFdy6ES6oaQYbmbevs9AgetXdrMXgAj9mT6htegYX1GQv7m6Skz",
  "key36": "gBWQvGoZLURBitDp1o6r7ybDKXr4jjTUwDEgeBSHDBQ2CABm2rFGXgN92Rc6d2m1nvft5FKDqN68NQcjuy2uh5N",
  "key37": "3Xxqz2HKVCEiGdbTVUbUaASMefFwxycrRMd7wwSJP3nXmCydGckamCjtzdFAy2s6e3bzpLBsmdjcpKnMommnfp9A",
  "key38": "2FwqQiibHL7MNQsFdHDFYFyhGoMibkfwyUktGiFTq1b3spLWhV1URxsBQPVUApShKPRkseoKDha7QSmzAra4txrG",
  "key39": "5waL3L7kdD29P2RSfXZRB5AFNQtzxkCMLJ5T9Hiwv3WLosHYoiuGsMpGSFD2szyb4mcXnAtKCHx4mBBBPuwPFdDE",
  "key40": "4J6PzDVv7tDrcwnbUqtT3SLWTfdhdDc8zJEShdjg8TKCUTsnGhbgxuC6Gr9ksXA7WAmDTazHcVn22YPzKCqAdfdx",
  "key41": "57r2yNZvnvqpx5UZ2mabPdNZq1AQfT6dKNeRHrm7t7nD7sSY5NBwvkjWgxQQvbCTWXJmcNbfKouceiXZfHTMz3dv",
  "key42": "4SE6BqSsk14MZuyTXRtsHogpS5F7zYoxaL6YK7edA7tNQQm7md9cmXwRvHk1vyKLih22uhJD9VkFNYJeCKS9sKLJ",
  "key43": "Lo6kdrturkeH3zRpvbYu5QRbnh8XECvvbFoLi2feQKE4iVw5KEKdPj3Xuh87xNHkzDiCpvBLCjNRJPvhKtk1rnz",
  "key44": "3fFG9z9CFwaiU3AStDcFTKepqKpe4pohHkLyCHMmUUvFC7pUrSu11owcwcnpvoU1Rdnub3FDUo6vQ9rha5bEg1yR",
  "key45": "5x8WHiW42DBrP1WQjGCaSXFyzguK5n4hfKnoEZ9joWNanYmBAXZcqR7qEusB1dAzssHrZLKhQ2ZPuivuPnjSJPmR",
  "key46": "5WnEbStDLDhsRLRjSWge3o8gUbc2cWYxbrLkbDMNgGF54AqHVsCbArwf9Cfnmam9YvrSuHG9nwrq3rbD9eoyAhg3",
  "key47": "2YCuckYncStWEkgatfLBXq7MMyfv1Uz81zYxMG2kWhAZjv8KRMQHvaQX9P2VaSir5Fff1JfB2kVqgtKsRUHeDu4z",
  "key48": "44e3e9PfXZ872z1XEntxqj9YKNrN63h5sWLUXJiVuFDhSVKbP9HowE4UKJpUemJRBkEq9gc8akJ1yxzFeSNq2zT6",
  "key49": "2v9ULz4P3otikRMYGvtDreXiLuHYVpTqDFsfLRkuuBCE6fzBFe4gN8WhAztHvpSodd5zTewc3vaT614fKgSMVr8f"
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
