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
    "55qJ63EiAfFDDZ594L5NPY8yZdSBVm5BFrVtgCRvfsJU1yzV8AiU8BJncBS3GohJtSTAfjMvF4sLjb3gHYgfUwXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cn9k2wMsXstqzvdkb9PVGQ4Ng3xFFhbNBvaHF9tonsY32S8hXtVZvXzr8XZnp3sgqEuhu8TXPmSJ5e4y4ChKUR1",
  "key1": "rAnh77ZUGhsRtahRuYDk1sB9LK5TLPGHm3sUW6B4V5LhN3nqPN8XtG4L7ubNhTpj2KM82u4KCQ6YWg7iM4a4DXW",
  "key2": "2xkJRtCrJxrUi3nV5dP4v2t97KUDd16VemYgZYVHqX9GCwf4ZZwndnTrA7ME2haKc6R9wMjmruQevDcbnj3wetKo",
  "key3": "2k7x74R9ZnD65PK7ghL64SiYdpSkdXVJpYvE4gLNFF9211Ebs2p93bwssLiv11v2UKRqb11ECGuYHUzgTs8gr5Z6",
  "key4": "46FuNzpifE7HLx5ZaGJrqA48PeANKj8Xbvz5iVSUSebF3oBmyHxfMu4JExJz35cKnnjq9jWhDiEJbfYp6MiBNSo8",
  "key5": "2ayvuvGRMYEDq8hsL4KYKhNcncfPQ4cKE4VK7U534TwfCqxtVCMhxQWHRq3TDZh39gfMhQVvMimpUajomtdWy7xQ",
  "key6": "61J7kmuJSHcJU1bs4gh5NhRpGu4NDAb8WSEdtW47F3k2M9GS2iANGoMLRMsvMLjNuqNFpU7KK7upuGxctM8FeU1Q",
  "key7": "4ugUN4AerjoMBoRhujG2iVwTJ5SEA4s6paLoCb5nhJMMGJZgeaVxPnLwECjoQBZ3iY6MRyvTasq323KGBUoScNo1",
  "key8": "3J8ARz5v1bvsXPMe1qSVm2Hkwe9YqXhRHujaiKxzGhHEvj6v5mAt53Hyi3AMN57LTtftqaorrrsEtTkuTZHAhcyb",
  "key9": "2TnNDggkLWTu8dsuqx7LH4i6ER9yZAfG5MTAbYQ1T9L7kYsh3gBLy6JhzT9tkBZEaUJDWiUfgFjFmfyKQUiiSvj8",
  "key10": "2anyBZoWsa3XrYe534jFEERULUeep5C4vqKySWb8w3sYMjhWoZoBbCT4CAw3vwByTTxGXwb3HXHdh9SXxaVwUgnW",
  "key11": "3FjLLhPyojPba4nYXsqWm7JJjfTHb393hozFWmzQz1UBNJbeTSm8izQW5NLqKy1ZVLZK9te3GVu5xeLphFjHS8MM",
  "key12": "3dM1huQCMjCLUnjffWLLZ8EVkHnych4yngzJUFBC8Bu17vkoZeQzkPVDgHNMYuDpb6Umk4oFQ7JEdx1c1HjQn8kp",
  "key13": "gsbTNpq9g4V2W8CVt29NoUQLVKnt6SZZBwj5hiVLxwcLF7swKA2K6k1R5d6YjonNEeKFeMwqaWs8Ywsk1HJqbQ5",
  "key14": "2Zuc4UYo1tGGnfxtKwj7wpVYSkDHkYLpfLJ2GbYUdguwpf39c6LgDJGWzwP5sttdda4EKoxNrU9c8TK5UAkbgnpQ",
  "key15": "2Y5ZbSa5x99sEhojonu7uEdCeQSYL7WEykE9ibGRmnaZcxhjFbFpWW9Nwgv3BjeiBhUrYr39YwCoCq6Be28qbm8A",
  "key16": "58q3xYmGegL9Z73sbPAu4Xc3mpfb7EsCwaK31gsY6Ygkty9w27seAq8ETeTfmh4yRq5SyV8qsmQr9CkeWJDQuTwx",
  "key17": "26DsxUrLDUstBCAvdMpd5eFNGK4bMQcJWqacFgBPubQPQZY3Gg1PFBLWaEBuLEwPiSLprDsSPHrZ5epgZRW5st6Q",
  "key18": "2iYj5x1Dg4NHpXbCziYkN6k5JkKNe7Gz1t3iezRgvXWmxeEi6zqNgHovtd3JXqDwD6nCeVB42xS1sTuvaZPNHkPs",
  "key19": "5ogLMUizA6VUDVurpwPXkQKHXc4o74sN5mFo6iotwUuG3eRtMY2314ukTwia56gbGkd5TcpsDCiDdzJFVDc2oX8v",
  "key20": "5Mx3yHi9B31nzA6JTd4oUDkACdsF2Yei3MSfKfssGYk4XgjjFuUsxqfYFwbdgccgLU5tR7kuHf5HRNrSDkHm1FJG",
  "key21": "4CH3kifECPwHm6hm7hbHqvaEvSPtG1zRgQ1mXcx2daN3ARrtdGxtNZ7rtmQWWQ4DoddYzAiGhkUgufxiHAR2tb83",
  "key22": "5xvnaRt9SgmxQ4HV2qeFKQNh2AqiVvF3uDjre1i2yaRM2xdNh4ZrwFHRw2RemVPFoE7NquiS4heo3CveQdSy8bo1",
  "key23": "5vzFdxHvCsKK7LYrFmMoNwCsxhFbJyMzgnhNbgV6gce9SFNqWQ2ai5WqUxiJ8nZpz8fjoVCtNJsz3EBZUg7DpexH",
  "key24": "4Tq5KH71hrbvvmithqRRLBMMHGzHi622Pjs9PMBbWSVi9JnNSiqiRs3GAvh526m7nFPCL2RomPHYcydASAgxawc",
  "key25": "5UXmUwiaq3vLpVVZkBifNWLeSRkjQMF6qC3BEnab9dMNwXYYNzGE51eNQt5GsVB9CHkQE7ZiCyuSnmGYxZHA3x29",
  "key26": "2PX2GxKH8GaRrEwtnKuhyAp7CvY88LW3LaSKYjLuSp81qRL7j8cPq59F85GfLQwBcQCKBzTyyqfzG3DeCKC3z3UD",
  "key27": "415LRh5TaZn2nbvrMqLkhXq78zHetEPnyKhfnz1ddTDKXXLFgM3KqkjivCkJXanduktACQdotYZo6QkdUaUQX4ET",
  "key28": "3egkVTPgoKc5a3kWhEcupQStSQF5RAZjZ2DfyX9s897bAhjqh2SE9QS7cvkD2WLA5NWmf1QfTxhL3w832i6veXET",
  "key29": "5npxmU7Tj6kWfdJ6kYmSebYvaES4GmTmSNyyMjCuJ4zQueQkcw8PmG1Tvh1xe3bkDLAv8BpZTBiPV26bXNf4RtYH",
  "key30": "2umcng5NyxGpAtRyjTcYVELNPs16SsyQJz5KBonfPjEYByhgYTREGSrUsawkJxi7XAU2WswZNZNaBbQHPDQD1rjX",
  "key31": "2RzZQGwM4HLLwmwDzXNNkaH1UUKqTthnZn3pafWADXsijKRceMg99U58naME2bAQR8HKKgr1Nvk59NsT24KxAtDx",
  "key32": "2haLpT29deCAW9PHXq43143f2o3XM2A3vkqpTm8uKkFAnaSnCh8gJ1vvv22NkHpQBZa1hoDB4UfmC1JHFnxRHYca",
  "key33": "gJ1JqMzVYA4NUeixBRYrKU7fjmxwqSAnQgWM16NkDFvgTtBQ6zrP5uJxkQjHN4kJq5tpENNPyiAVXr8kSh5JHVL",
  "key34": "5qPEJptHVnhEVc6S4fstpS5MooPH15mx8tqBfn6ThmzZe6MejTT5qpKjVrK3zSJzT9Uj8wR736UM5bkeosoJjvvy",
  "key35": "3L8VKm67xNLVNhfMpPUe5vR97MFeVgVPBqhdzA9iRfBs8rU7KSoRpqGVxvBZRHANXULDUMPGCE8NXh26yBdgGGhn",
  "key36": "3QqYk5hQbPTNizwDg9cEH59r1vqoXZNh2jaDepLWAfdaqtnvuosYyn9bVrt1dwYZGKca64AWMvtEnTn8EiXRvTmA",
  "key37": "2zZ1ry6cvXjbaR9tsG9Jktkh7erERoPhfndTfnhjbwNcUPymDaAkVVJ5ogF8FvYXVsX6BNge5cUtaoXuRKH4Yxuj",
  "key38": "3JxRqqWMum7CAZuCF1tz4MqC8GvMA1mv4dgHvjT9DBVsbxGmqUx7k5LhoDYeiNatDahBYzkCue2gs6RMSg3DqZqQ",
  "key39": "3jrsiwC7JM7SfGYMhgqd9JXCitXM5jcjPGHnm4TPje2UMEwyT8NjtNZZ3GsVZ4DUkQjbQLF6srUn6uxv2f3KCuo7",
  "key40": "SHLSxgewJ6gjduMgpVXw4bW723MAxdhv2yhVHGUTNu6NVbGvUyr7Fp5CR2Atds7G6ruSWsLD7LzARiESJq1XGWS",
  "key41": "5KNUR1y9F3taswtyCMJBYGZDYTqfZPeX1fTk7v6NauNy4L3W5fzdWFJvu2QBDVAFqq588fCcfuk9iBRtnQCgrQYQ",
  "key42": "36N7156MUtXpYw5jhp6rhNqCUArZ81U2mb61n57MbcVU8dRYekAsL9pQaEzZfiik69qrrUVTYUJYa2aeWtgbSKjj",
  "key43": "38Kuh3VaTKcKF1nb2S3Yje6HtZiKMXTSoocV6XaVSsqfaL7BMoZzbcUAFYWTn7pCA3izNzHygxx32j5hi84L5hyE",
  "key44": "4eAf9Ygdbj7dLHsayna3pbctzAuAh9i7XRjnmeaS2JwJwWAjEyJ8A44M3FvGyMFusPjAPKhDdkrhxJSagSxz9Qhh",
  "key45": "4Wch6tg16YqCfydSfvEGKcTo4gdcgBzoZJ3W9pdTB613QT8uMehhVWirvMcSeozLzAa3ZwEZeDCEw7xnB4CPNc5N",
  "key46": "3hujUe6zPRQ48KyTx6NDpECHJDx888pKyhqjD5TGj3gse5YwNiwZjQy7pa9pNJXHBKLZLa4L633GBYrkVLTesbv6"
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
