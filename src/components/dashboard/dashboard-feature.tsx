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
    "q3mYUigC5ZDJgDbuVyx568QHWqXvUHDQ1Dw8NQ8fAbAnTkLifYNQhY6VHB8FaAtQaE55zLWieH6GCihoDGkNbUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BfoxHcZti9A3hTknN4mqx2Uu3jLapQNk7Uuf32s2KDpExBPYJMPmjYnNbWsSNvt28jNrFEWGr9EcM7ctvv2fshL",
  "key1": "38f2JPBDukqXLfE3WymkcV2YbYWU9tgpAdAuSrRZ8P3qJKgU2tRKXh5s5gF3ZhdyjJULK2aR97pfH9NygvnGzL5G",
  "key2": "5AWhGGhpQ8EskZbLsqshvNuEPfMUqUpkMG3NvaxxETUkrFe6WcAJyAbJeJacL4XETseJG85MgPMrC7sDz8LFRfmo",
  "key3": "wyrS9UMio5ZTiCMYJW8LQs7TSx4Q6qSsLYKYYDzJmYbUoJjbEaz3x38NCbUDRQZsNZ3NMDJCLQL4AywFA4Rm6Fm",
  "key4": "5bdbkWtVxHBjq782hSc7SdXFHTn1Rwz9sa9Hk5pLbt8NfrcuLAqMR4R93GuT3WgttTQs8Y84KJUWwTButMTQBRbc",
  "key5": "3XkwCCZJ64GFhMfvrHXMigkWrVmjGkrGn1oRj1hqWHYcUkACHNC5Vw6eiwmSqp4Lqhy3EYhX9CZYKcbjXk3iYFqt",
  "key6": "3JbVWb2YZf6WmjBczVj5qHUeVsZqcDC5Xz8B6rsqF9qjscKj8Sr5J2DtXAKD9HQqDNw8g9WFMQDBU1JtKWpxxwnE",
  "key7": "2XX9dXZmRd4QfD4XTcNSLpzjeRhip8bDiwJsDv7p4jKfKEas4SLu7DUwyceuCxoDuYgy7mjc3oqFB7FuLPVCtMDu",
  "key8": "3Dj1d73JKwmQLPWUKtmCLFiy4CuDEKpCKM3MMT5CzgBReyfDW8NNT5sUF8My53Gk4Bg2uUxic23Qep6wvy6PW5he",
  "key9": "28DpfmmdMaAEvSG3NKMQnGDFqcuhQLrxveaFe9X7aNrP3FL4R2BAsFek6RcphyomJyNYRf55TNavsPLBx7Tatjzy",
  "key10": "4W5QkgqZY2w2fbELw8Cb6PipKGCv8Wzoe3cs8fNrH7t9MkRoYVm5ypdpaQYcjwbBmDcLYFRwkbXnQxGZJ28ohRQR",
  "key11": "3BkgpFK5sSpNNM5VgLZxnw8A33o2mjqD4EqCeEjq3kvou4gLvPnCf5APxFsbvhQAEsSJXfzJEzDEgxVzFXeSzdRP",
  "key12": "31KJ4ZvFAVr7GQHyyjQaceUkczNdAyihR7BtbXvPTE6KVUiawDvnBBiz4NHz7phkXnhB9XvqUi3vvJJUCcB2KUvE",
  "key13": "2wiMah1m8Qvo7Z7NnigB4nM8nnZVfj4o8WMaVKtWmdWXiVAeR4gqtYEsR1xbw1ygr55vfDC3Wxhg4CgC5e4S8uqZ",
  "key14": "653G9kmxU62CJEMPqQb7F3AR5p7QjWgZtTDgCGKS6kTrVRywTSvz4N1PCQgMohwKuXMtxse2M1Py5PenPPaRhRuz",
  "key15": "3nfuY1mBtDVYBoPgN4rmVz1wSTHbV1W78KyAwp84VhSMSpE2wJP3YjHesBdHaNcqAAfPyFHXMPGJkSrJC5vSYwXh",
  "key16": "45CUW4CCCY5JSzEcxbHUuBmzF1aLWvqHjUab8JNxVFaP4sAwqWLKpT52RPc6XQaMgGCPP6cP8ReD9iNgjui25db5",
  "key17": "cAiFtPTU5xVK9QibxC9MFoAJ1tRpSpby32sib5GeF15nZw46iNa4BvetsKkwExGvov8hrhPKbWr2UvXfE55vET1",
  "key18": "2FGQ9gWPwZkgZjTKSdwmgBGLpQUPaQMy61AXbvmvZKEMbjDetUoKh9C9SzUxFgYEznZLRTxmFn8udSmr2JTjueQX",
  "key19": "5Zst3eoXrjBPEMD6Bn1kBVBwRz3pBknFygPDKQ5jfWqjxvN4n8u5XV5FbtkMhTtFWvzxRFUzXR9ph26no2qH7rWw",
  "key20": "62PjDBN5ASgyh965SNABJ7CwLZ24JBnK4hwrrX7VhYsmEP4NLW4nz9ZE9hBbRgvBMgjrUzubF8aC7EMnRHrqswke",
  "key21": "5RGszdj6AxrYbbXRy8iRnXL53nDQPjJAJawsJtJ8AACaMmZJ2uUpwsUUB2eiFV4QdQsou5e8qZvRQ89UWVP5MoTF",
  "key22": "3CwmgYVmctAVvbkCgxbnG1orFbmQoQPPAzoq8QQRhYcKMEcAh6sYiWNTTVbU9kDjSGn1qn6pNNqwysh3FupkruEw",
  "key23": "25ZuSFMx4TSJGdUJoUYgBk67am13WXkUaUjUd6iJb1pd3Fm6FKADbkBWgMW4ES72cRvCpsGVsuoWCtXGr6BrEHEu",
  "key24": "3o7AY3ypw7xN1yLgBmEMeKpyqUUnbiw1sirQLMKGD8ssSt8Nvz4fCsRY16ZGmWW3FxHQbS4SHvUvU8uVudYpfiLb",
  "key25": "3mvySMjQWPnLJeYqLzjBgJN9HA8ovSLcGijii3RpYMKFJeQQx5a5NHGKtEPx4YnfpeerGFvUSsQLE5RopoEwr1At",
  "key26": "KizQWiHFcVjhCpzBiWNQ9FzNTsvo4y65P7ntNxaFvrurQiP8cw7pJwM4Gmov25s1viSxeRJ2PGweEet4NtuynCs",
  "key27": "21j2v11wwNTmNDzU9Tfj3xuDX7tdV3RzhVzXEgstfyFs7F9ZS17soWA8xDYqCPNVbtaQRkBLmyk1cob4ZqB87Zss",
  "key28": "2TgHDzFxPGks51qZ7CAUjbR6Tb76bsP6z1Hm4xKTzECDRGqx9yzLZZzxX7wERwTiQhF8XkWrVGL2g9X7doTdzSfn",
  "key29": "4mUTBXxb6TzwtNfbRGXii3axEHX5sCfsExjjEEnXXu9fKsbGPXfAAGRiW4nz8UN73Sky1WN19y9SBS3R7h3tZaXY",
  "key30": "2cK9qizmtQsPoxoCYJfVarihgzeL1vTs1bMRATsu5iiTdamfUjfjM4M8kwDooFLWLzf6De3SmUJmko4DN8oqeiFK",
  "key31": "2FTUX3MsQmnaH7Msjs23UZJ1VsfzVFYUGjbWZcwfn7E4yRu3Jn9o3w18gpgpqMq7ADZdBRyBjMwRmGXgMN2yTLUj",
  "key32": "d52b6cnjCr6EXHyWrsQb71QyU2EMs42bVonCpLnhBXASkVpNV1rB9KQzJnKmw3P1MnXaXke15KBvgs96F6vUayQ",
  "key33": "5gTJAR3uq2qwZt6CCyYhXRLsV42xenaeqiaxW8KWeKC3T6oQ17jqfGcgQD2jwGhX1XibDdveHR6ci3stzeF6G2wZ",
  "key34": "3UCfJutrbLzvVzTqvR2k7DKYx6y38ZRmaN3sRwspUKyg7zm7kZL6PaK3B2BpwxY6ALVNpATSBveokuJAZa28VFPj",
  "key35": "2j6iBYTmX9scPhLgegCd2PXen9FkMJNAtNpg6Zon9xMaL8YsgLqEwLt94KZA2PNksoonaAxEqmsy3V1VduxhN6AW",
  "key36": "34SAGtum7uE1KhYosRQRjAsviNiF65BUWp5DNshkYpJFw6xhZXoXwAQiQTJDru4H6vJGuQrfxAU29PmHWfsCTzSz",
  "key37": "4x6TUAvvNYKtQho9eYrMa48oETXzoHtshnzk4o9ikn3R2Ahwfbtw85JcLetmwBAjRqUWNufKMSjbTy6DtxDdP1yV",
  "key38": "2yUXhkFireXbq5gyvopdyGeuLHoafHu7tVhUNesv2T2ny3owvz8CryXzo7wHUyUEhpHaULZ89ehwyK5FwCuqCFYP",
  "key39": "54DMDy3JqqKr43H3mjvnvqB6YfsGwmWH1ChAHDUaiqqw7HkXurcHzZiAA1GHTN2fXYqm11iMK3GwmN3wJ4BAVqqk",
  "key40": "4VARKroqsMmfiw1yuf9aoQxWYK5CX24cxWpe1WvVBNKsprwchfNfZTygyMcH34URYqg4NBrdYDcSu9RLGUTye4Um",
  "key41": "2V6HFtMH8BoFqK8rva49jufcRRyZ8d5ykuGcd3pDjE4wq8b1i2dvfG4UKpfA7eb3ucEVr5nGUvr1fh6XiqcFSM2T",
  "key42": "5MSYv6NNbFsAeGWJ2Bm265NDNQ6fTP1VehrV8U7Ji5a34SmXS8NEtmX8USBFjMN4gqHEoSjJF5ZRjPz1QKjPvz1v",
  "key43": "2sde6TXUHLexCJKmfG9j4aPCHWmsjHjZAb8upKpxEwFjEya6e6a4AQSo7h3FHHChvDqqS5eTKYmYsA9V1JQcDJK8",
  "key44": "3jvwYnBma97Jcem5DhhXzvwmV9wgMiE24xHGy9H5xRWgsy7td8eXChwRR9xFMqMBkJMacc4CzUZzz74thHMBrUy6",
  "key45": "579m882xpMqd5H71FMopq8SHLQWViHSgATHuAqcBbNQMxxujuP2GVMHNSAJ6wrbXnbG29Fc6eXrw8knefpFE7K6p"
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
