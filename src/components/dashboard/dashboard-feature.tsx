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
    "3b9qFYQSCfDpwAcWgAhWtVmr7WPbG7sdgFdNGpYF5wWQNxxv5dFArEucUip6592KrCA8D6mAgnjRh49TSzmZNhdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dEp3wxHGRecDJeVgBmAg8PwnwGUcEXfByPtpKfpFxub2MdJEn663pqRaFu8BWMzCNYqqzfmsSLMXvMRuy9XKta5",
  "key1": "2UkCED6sAsieGzLG2MzdrmdFRFMRoyKdq575tfc472UyEtR6c1SFCETHGm2G8ZKfXZuXe18TbRBxQt1AsVZE83VT",
  "key2": "5riAkw3ABuSxu41MeFKMNMBE7iYbPFit5Ah2QRyk6yshutpGU318Qj3gNDA3Y6KrYfVs1KByN1fQ1YRv2EYkDA3B",
  "key3": "ehPwmy76B6133StcDNf2gxeSdk3xEBKWeuKTsttHX51LJNi5734AXiPoupjU5pqEU4hxSPHMJRbkM2CnkfngyR5",
  "key4": "2vTKAEPRY5VCKwPhpDxByvXcZtRzDRaAEGTrFvJZtmbuJEpBDTgqwFDVaczYz8AbehotRPfeN4pkj9oskKJYewgz",
  "key5": "5D2eaV8kNrPsZarESTtUbj3VwVGaF2vyrQrEJU2qZAQNUFbAgxGLqShGo4qL9oRJVhbM32EYrfTWgcDoZhoGQf4Z",
  "key6": "2M55sombp5bq1v5MCghwFD8qsnD3viX3vbyjvbgAaMA1ydFyFxnyBgD79sF72FXJbF9iekeGysLzZJSTdK5xSF8z",
  "key7": "3ytRbqMDMpR1SSPaVW2DzHYEA9rW6ngb96VHiNYxrvCHVavjhEJzG1J7fTGCjpyoV7MfBDiUyQPeFVgJEfxqiRXN",
  "key8": "5iJ2ZSvD6vj35Sr61LiYYpZwi9W2ehWeCLPSqcZLpsPPxKZcgKsxHF8LnjumQ7t52PmYY4BYmBHku9eixin3KJcB",
  "key9": "2dvtqrbKnzQXKyin5moooBNDqdd4GeDiZGPqbFZntASoPCULkkrC58cKsbeAUYM62WDd1f61396NaHqDG46s3kbs",
  "key10": "3c4jL1hP5W5RoZxyULzvCg3Kk6g7qGtUTQDZrAzzCWUjqhRMSA1ii2EwVcPYLZNSZRBntzsbHEbSS9Sbqh8YZ6gR",
  "key11": "5J9XTjHkvnNK9bL7FoPSpCYm128MTZpWoQufy7v73nuASEbUjaD5kLQXzM3wuy1vhNsNP1UNDhqZPeLTs8u85fhf",
  "key12": "3Mr8nsUQ3nCAL7iDt17L7XuuKqj82RzXMxKM1orLMhhJ8be6GuZDLwRc7kdAJ21LQpeFnUch8LconJV1ZSPUDE9x",
  "key13": "3u6eRBkyWKfekc59f4WzkeBt8g52C9jPVNFFfb6GKdjJyatu2fYXQUC9vWtRiSyBTL9vH8rjGbszKPCF3KPox2we",
  "key14": "38YfPaRcmHPtEVUn1kWfTjUmvzF7m4kkGVzborhzdSnyMspXHfUGxfruFr9R2J6LxbWodPMW33uTtc738DqeLi8Z",
  "key15": "2C9f7PCwQhFpymSYVB6UUxtU25tDX8QKmBju8QrUXuLbbwYkhFfaN6AQWMoeT1ahzk8Qw6hffMyQPGytuRQxdYmS",
  "key16": "2dYLTorH8zPCQ8MuTsfNeRM1kjCquybp5Y94xTs2yo33dav3NZzzjZZGn936sqQ7GouyrRyh1WzPKmXqWzZvbbfQ",
  "key17": "4cZPsM57a95qNV6AcR6qDFCrDR3Dta1j7uGSxgTiYJrR4WdAoSZMhUeodnNnwpH6NJWT7xGvzRqEpub9eNdD2H53",
  "key18": "2eLReeEKMi74r8rpHoFR6nb1z4Ap49L8wj4cknKaf6iSNQbTr7wen9sjJkRtcMqpMG6sb8vYJHzRBqLBNwjVcuME",
  "key19": "2ig6nPzLZ6UHnTwknCgMvoGzY5DYi6GfmVTGfcGjxQt64w8HNeAwRMLx5R2z2KzMFVPL37JaL7x3i4QhQmPf7pUK",
  "key20": "2Ww2YioyydaMCz4A341dp8ASp51yQLWcicn5QL3pLkLba77oDssXCEKY5gY5BJz3VVguKncmXuvtKHBRJoqwSfRt",
  "key21": "3iA1HuuMb7GjjVv6Y3fKJtUQdSfJtodGjeHSk9Ri3HprzU51doJTkgJsqJ1cv7d6TshJtTQxge8TP6QSAHtzc83d",
  "key22": "3iMS6hgyuxiBgRyboQPQcs4nrHAERCH7rvVPwc2RaBxsDEC3923M2UJZkhLroMRn16uK39L1fWetbgqDdKmKFm9M",
  "key23": "xq6rNvVR8TR7E4PPGDNkXme6bpxXAUNaA2rCs6m6kwR7t37epfcV3rtM5bsjiEnSupqKA9HQ77fSSrfoNrFuKyD",
  "key24": "5rLvfFrmRAJeysyvMEZxayATR6gTTc33YDHZw43mNESaRNQRopw8acZEkNh6x7fEwFtm9Ahxjxmbf8GVpokkS2x3",
  "key25": "4J61ZDuZY1t7psCp5v2qbjQeqbibH3r759RU7PreCFK2Lo5KzShehBCFiPbeFX2HDhq2Btyvbxv2vG6n5NUgBcpP",
  "key26": "4b7rcs2DrEsreyMf7phRrT6v8wLEbjcemutLoJcMfzQdoE4CCTXxTkH9EuiecFmHGYZZHFUx3bnFUXr5wunQKf2G",
  "key27": "9SrFuQgsRwrUXKEUX1gbA6QghatBkcRYt9jHFYdStck4iV46eznUs1avWHuG39Y4XD56keormfMtB6uSDaKo6VF",
  "key28": "4ESagUjLxhAMMHTYKuRSyxQ8K1wYGBYvqHhThTaBAcnYLVCJ1QoLTqbXSAbJMRoWMNMufs1rc9qGod6zjetyh21h",
  "key29": "28UUvax7n3umvWww1o3xwMwJaaUhaFGqtCtZJhTS4VmtiYMsfvGzYcNDDMx6eKNhHoFhbcMEJ66ew8HukdhgieGM",
  "key30": "2F9G22NT7oDdihSgmDQMCZpVcqDBwAJCFCGMPE7dwz18b8qe8VciFpmwrututX9aqHRrTSuEwgPAiXtHWZCicL9B",
  "key31": "4NCnYHn8w3UtoUcDQCnBgFuGvKo8ZjXQ3GkDX2aHkR8Bhm3rCQMzWEar6vFBYhHpRrFDKMfc3fTESQdt9FRTpx8e",
  "key32": "5yyyqA6bf6CZSBBn5EAjmh77J87X1V9w6MNpvNpJx7CDG6uf5S1ePutBjgYcHGCwWHYn39Mj39EGRX5C3tVWVfRc",
  "key33": "2QFvw9f21jpZ4JSsHTKbzSk41pG7gjMVJVjFsoWHfc7QrB2tejDgcpmSDidfjUpcNv91n7iwzZiUuXHa9qeS8Bwf",
  "key34": "4WvL67MWtKAaHbKgLwM3vimQGLNgLRnkfUiVVSLi7HfzL7uzpbZXUqwjDx7ef7vwq1Z3o9uaCjvURBanFawMhh5N",
  "key35": "5D5rmXtN9txMTnmxw2PTxf3RKzZS96YMSuMnBWsiJDvWV9bEg6q4cjSSTc6T1kaCN3ti1D4a7wfeQ8p7oSEBjrEA",
  "key36": "2YCPKEvSpbKZYhFdvPckXhcaSjZpeZAzg9N1twucVVBiJtjENvZ8FkfQ2KQWutaRUw5wbqV5PR4tq2HhnDVeoZRC",
  "key37": "3hL8g5nQxtQpRWKrFZwo6DoxPhm3Ezhbx7huXxBaHZ9qmvu8uPBSqRNqgYtd1vutLoWTQ5qXwQSGimXrTLZzxowV",
  "key38": "5CqVpyM9uAxeHHfyhx31cFTbLnzaAAqfANva4Xi1tW2wStE5H9EiJWmRighTig5vG1WqmtSmKeZiypvh7gkrogno",
  "key39": "4Wz5LKcoiwZ6wo8UNDA5PQyKQwJzX1v5pnW4ogPBUo5SkWA5q6MifjijX1tZKK42RKaBHgvPVUSeio86o7L5tXeD",
  "key40": "4aJS684kjgVXQs6J2RouPXKhyP5kmRwHToLjJfLbKhKktLnkCuPNQ2wrZ12WXK6ZvS8tGN4QDkbvPFjgYXzWAv1N",
  "key41": "4QJsTCfPdXCr22nuVBXsqssYrbC4G15R73YZhtTuQzuf7wZ1fo2HbzEBa2RaPSUkTTLRyL97aUrPWJ3HwtyVoP1R",
  "key42": "5H54MUjXpcfzEhDWMLz2qH8b97WpCDu2cXf4iT5XDJ83GAxJmBQRqkQ9EQLzZEFvrSgxYVk5vAede793FGDuVKzp",
  "key43": "4x5TzwyP5K26wLYgzrfhwXKVUzV3WQRRRRAwxzL7W5aPr48FMaiAzgaizyWqrQ4f8jWEJ4oeWQxFAgyRWCFfHHya",
  "key44": "C26LaRKN72EsPJ6VhN2BUDapizzPWKbLo4jQ6D6FWyRAPgpYeB2ovWTdp8x3K81BnDgQT8V5cjnTh5HbVNiu8CS",
  "key45": "417ECY8rZmUagPC2ZNJ2Cqmppb5oFNhotGTzRU94eCnYQePKWtqSZuwnAJ21hohjT5GgNoanBSNGhRe2qJwkByf2"
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
