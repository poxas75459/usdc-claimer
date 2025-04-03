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
    "38QTTNZNUfRkiVYws4Fg8DWdCUzVi75XSXcWju4CzTPeBGUrh2pyB1U1mdunZaPRuz9gh9SqH2aT9JAJXdf2VYdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53QiuwQ9t2dKsDqoAVR8rCtucxa2bJfq3Gm2uhXy3ww67jEZtwZX5t6Yoj1FSjiYhjbc8XzWq5c1BdNWcexyYSYu",
  "key1": "4HEMVv1omu9RRFKZRkbQHYtL8SkjUrFQCyt3WAhVHcowLS58DEtRPKPwwAAByeoSCwd3HSPHCDCx1orL6zqu3gtm",
  "key2": "67Vb73jdsZgmLkQLiQweXhFqEhe98jf43vUa6F94foh4R2gFD5BZdniJKRuv6EVtQY8GGU6yxMnE1es3f1EhDPhz",
  "key3": "2TDEZt6x8vXvhaKGEcfPQsdGFQ4GQ5EteFfMTXNjzUmQemx968M1mTcXdxXXnSUcgbzH1rWibU21qttus2NM5KX1",
  "key4": "43gFED7y5QZ3zwhpWeVG8FhidTUtK5GSWr5zyb9d5qj1Lwe8EdESiGAtdRjSJYoZZsFVRMazVJecHqJi9zwqUgDR",
  "key5": "65FtbZzELCeBbhhJuKqBFALUrXTQvvVDs8re6ygLCBbxyvwwAKEqbXVF9E8JXAjCSZvRhvcB7iaCd9TZd4styKow",
  "key6": "W91Ld3kLh9FtFBYAiEYksYf4wfzaVJ85hs6vfCcFnk7hpQTRpvTLmgPShkNnrR2SBVDpbc5FiqHCYYuv2EPPjwd",
  "key7": "5DbbwfTv1R1CWF8mExXi8oHgSeQFV6ikXmrRVyAMyFUt4yCsXqUJtzUwpiLjCUXKsr76cqDywk4ac7ZPPXDTA1Rn",
  "key8": "hL8bmwHLbHPHocEBkjUkccVqJJTwp8HYGQoqgsYVXmSgm5MCUbL9vFArfBUkmny2eqqxGtbXWoAtVwr81i8mHkg",
  "key9": "4Gf7SmeF19cTpoYR3d4hTUhif1xv6dLDmxwGcFXr4bCoiKEwwvPpAEjGPDfQkRQG2azJrgRPkbtqZrREMsfRV787",
  "key10": "3FH9oSwExkzRNyZReL45W9j6z56ZkVhXnoecpo8d9uP5crTja2AvtWbLmuu1U2LGJr7uvi5nPmrPruWxtNGyMmvX",
  "key11": "SaErjueHh6kLjgbhWHFWgtPxRKfYWqngLytQmaHZWqmbRmvZ4a4kvwzzyhDk1ridWrovQNgB2TFNv5y5Qjgq1ne",
  "key12": "2Cd4ZHJo84ZPkfNJEpEpFctv89rpHmVFn2nXhXJWDSb6ovqtmcrXTb1ZkQZsLTaCx2KkmpKQRF6tx435Zv2iCRyr",
  "key13": "3Wds1kFioeR11Wce7xoN8dnTFFpBU63Nq1knmayQXp4KWYwuUSiTeADoz8MsPW79ULdXDfC17CBc4jmWy5VCjXiK",
  "key14": "2HsmKzihiYr9cEFTrfLo6vHyStt83DEew7U9msBXUSEKgNj3C4cs4VtsnNKfqvU5ma66LbnC4pxHvZ5YzxFJC2aJ",
  "key15": "5ng5Dys3MthDo7sxY6VeoqTR3mzFMRUWmLYtgH3MPDjrFNZBfowNu7w8knTNZyUSQZzHScehBA191dhLL9wZrfkk",
  "key16": "31Qpatkewffa7WpyQnUMZ2ZY2NGSuNavZW2mTpMHcTT4ZiEHNKioMGAAFqsKPpro2C637TvM6wfUJBiKeZgdzNeg",
  "key17": "5AmBkS7RU2CU6AGcCAJNyHJEcyff6j5kDpeTiXeFzbEJ9GsmjxyWDmTFAaSZYEqn18YXL2P5ug8DwfAzb56oucZX",
  "key18": "4uoHwuKSrgPF4eNkqZQ7uecs53Z76uTWoJK7ia2hWSZxvqp1x4G9P7xZHP9xBhCbunJ4fCN4ZDiybQXd93CKHG2G",
  "key19": "x2mYMqciwhKncLdACL75XrKauEJ2SSxWwPAkNwC6ynuLctqSr7AowoXm8SgSHJGNP3QJBziMqFfjbNzzWArjpL5",
  "key20": "4zPwzwrJSYMNAU2QFtZzm3dRaidfZwkhdYGvv85fdD6HchekCetPZTi5BHPyMPhSqFG15rkF2UyAzvfRSRw86VUk",
  "key21": "529svHEmMLnv5nfb49zaTTVDC4esSQGQUXHjouoHbpSZYP1fQGCNytjUsJSsWVySCB4s2godQ3xjC6GrXWXY2uy8",
  "key22": "663ryLTJK4fEv1dgxGtQauHwzGWoQE4YUbaDXrRXHb55YJHfX9NWqT5YEq8a12XLQcMs6eCk4urt8Lc5gRDGoVK",
  "key23": "md2r8cBPqKy9n6xnh49K2zrGjNkTsetsoDUrtgXjPr719xXqosTWzcvwtJfrpqt9Xy59hKs52RZcA2hywB3NTtX",
  "key24": "5DtbcHc244qKnSbMzMigLUDZs2Lcmd6uu2qt4ViSQur33mGLJtL7hGSWqdy8UmANoSCRbUbbjJMgPk6aXFG9nipy",
  "key25": "5pPH2mn5UQm8AWsYv5mR1MVkpKYNVKYvbXHtem4YCZPACvmQy6dciXwxVXReW6Q3bm272MM9mbzZqxswvU2gBMAv",
  "key26": "66P2Gx4qmUMUnAP7PoiuxEdWVRAiXVXrQoyeZBz7CEqGuK6kk3x7ApFhTod6aRR3AGFJpYmssiDbmSm8q3p2Lhvf",
  "key27": "f7GvxXeoJn8aLy1TrZzKA3KrLruswjRJqcuhkjhwN7c6ZKLoQaybvcDMbPYsBTYrhBiJbwsDxR1TcnjGNSCEB52",
  "key28": "4zNCzwcM9MifCdEZYKLSewh9ZdV9EX13LSF8D27qWdCTt2vqZju6zcZsULXzsJhA3RJ3RE9ErDoZHoNwkVZAzMNs",
  "key29": "2kJf7NZ9xKs6XWeUpKmG7mku2kAw64J9qmCxWnkbsaFcH1ikt1EXHwU7kZRfRGYQ2a4GsYfx8tn2wWgeGGC5ASrC",
  "key30": "669Ah5kXFb2C3vca3o8pciiizAH8BsMcyBCkvdQN2sLu3bsjt5QaQx7JCin4QhRuGyfNQooC2vEyFgnHpaiUk3n8",
  "key31": "4WsAFhT2dXVzuRQSh3hHcn2bgMT2QMKpyWrkbak6Agsn8F45Nr8CzWKTDSZ8oS95AGPH1bDCNXQNKE2VRAZBinRZ",
  "key32": "5Tv19RzSNRgrcP9WyU3L9TgictgfmDG4G6UCmhPp3VLzEvUhTTB2cqNAawkMuwQn7eP2Z7L7PZ6dWWB9FhwGGxpz",
  "key33": "5tqY5pgYhzRg1gbVn4m1JPpW65bd4EgRhyvAi9qtZ7584N6Yeh3w7XW15adeBZg1iEXMWGMLetpBxEMX3wivchzs",
  "key34": "3bPWfB6VsV5Ge9Wk8JNKzxWG73VuC4KtVHSLXFysgRnz5HXWaRAWv6UTEHSsqxMa3sThXPBWtqRSwjkNHrYAsgeD",
  "key35": "5qRLfre8ib4wDXq1nz85tZ37QnSLHu9YQL6u2erGjz3jDhFk8CxtK7cZiF7TZk32Gywq6RKYxmehWpEme4DtmQZe",
  "key36": "ugFRVcgbofZhrnKy7DngH3FmkNsLgA5tfMQMSKXhz374Qbb6JwrZrY4imReTfnRnrUTywF15FPaHoT7G8iLoYRa",
  "key37": "2gSyKmwvX5cTSchuNmebgdZJ2Uu69Sfsqc6qDSYxvfYgagu9vYXXA7imVdq8yfM6EEFmPtx5wNainG2sP9Uo47JB",
  "key38": "2SFdhwMhWhZLfLp4jfBLBa6dK4SC9fY2a55PQi1zZJsR5DfqAUEUwDtudqXw9NA5WHgDDvi43ZFJdpPkqNVsHoLN",
  "key39": "Huf61uPW643NHot4QMZaVBWsqf1AjdqE7cxFtn7RPRcpQAX5anSu5nncymPvrz4vc4FU6v2X5773TotHu7qSXhS",
  "key40": "5WZ4D2ArpNCVDbXmvmCNecWuP6aQjWkuMzdK4U6krPCZ6AToGS6VEmMMbS3qKHN7iFzzcdntWB7ENSCFiEgW9YAh",
  "key41": "3F8Kd3PrEe2HFDHzTpaQ1KMXsvMDw5qrUHqYRkV7a5KznPrezJd5wJoC3MpYyZ4ADS34fRWwXXy3EfxLbUhkiWfR",
  "key42": "5bx7JfqmftSx9wHnEq7DuSoSKdonyB4QHsecjjTWsPTnvNG3CFGaoVL4wrKbyMqz25DU9ZYxmTxjHoGheBqRk3QB",
  "key43": "WJXV4cxJBugT7LqzF6oN6t58SZomeu9MWsgr9kzsyMAzn1EjcKNyoSA6sbrBD6irNnm76WvKsBtp4TjYg7r2uq8",
  "key44": "65m1Rh57uNwjVjcGgn7oS2tt3k3b2NbrioU9PsstSNgZ8T6Jcke1RStAEnotj5AEmf8uVJmUGGiF2H1hoyT27Hg1",
  "key45": "4ZXFpdEsZZnNQxSU953aCbSyq9vBCtGXtKDh7cWYTej396PWewuwj1vxm6Sf9GQNyZPjmPFSYbQWDpcS7aSDJJU5",
  "key46": "2upGYRbyFuJcnUrFKkSBCgDL7zdUHZPeygpWWuAWc3aPJr4X8hhzwn9Vkc5xudQCBMD4nKBF9envJJTKExuaGw3b",
  "key47": "31KQMDq98LWAwSPzvD1TCWNhffq5LpVvnbuR16ab5sB66h7x8yknqQgmW84MTD9g8NeLDGfT8hEBCqY3wiBdtTUZ",
  "key48": "2ywGV54Vp7mF5SxvdAE768gtAimmYuJwj3DrUR9KyMuHKyiZAz15jdqW1sZS7edbtL3QYqoodSQGmQe5nye3EWug",
  "key49": "4krTPG6rrxP9emTm3Dj1zheBXDggBN2cwMiwTeyHGSUPCZx9P4H6S8vjvnSjrpuPR9x4aMndf7JU6an1DXvGzci5"
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
