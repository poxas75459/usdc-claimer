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
    "FL7PwMPjr5T7M2TSkswhaK8ESvxvNaRQ5T5dUc4P9Qq9txjmTQ5vx78tjqGxSwjDsCDaseHxsQnuEoLCiL9XsnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h9V9PTSYPL1h2NdeJzc5qyu8QaTM5nAT7NBv4HEJjY5v3kYNsSN682x44R7eLZzApyvZU64nKi4CY4HdPpVNvjb",
  "key1": "4UZ5j4hVYWxPVjdcSfAnsHjyWucsJzj7iYdySDp3we28A43kjGuYrf7awdw94MkVquqAc3iQw3B87d7HQJ5Cfn74",
  "key2": "2Hb1fCSN6JBZ16GCEnhGqhGXVNqauQ73f3N6CX8jFKuLN5rogqif97Y3raocBRd3r3tpBXAsrcCDccv2gjuMdpg9",
  "key3": "5jtV41cqbt5NshfCq4QQx4HnRMC7SUs4EkS58L6r2HWPrzL6cUAWNUbRJA62WtckyKS4L8DqaidqHukmEnqxpfR1",
  "key4": "2MjxEwjaWS2ff1WV9KWNcSwKJ1Y9m5UmWsHLKorm2dJF3iaSM3Aw5Zr9RyyHr2fu4RzRCjgLv65A2FcrNAnDfWYF",
  "key5": "3sJxEh8Wj3prHn7AaV1aoa6kjbW36woW1dCkH8ndwjzZwsi2gR5K6rdncMVCbG5ZAQ7u1fLGuF5nDueMcvSpZHSX",
  "key6": "3af5nB2Atf65T2SvTExgMLxpvsmLwHWwLExqb1BjaCiR7eKmJqX1dpka1YKKxSCcCXAqhnAinhhyTET4X57VQNWi",
  "key7": "393Ya7gmS5BT5RqFMwinfVfEUsi9zFNEyHajv6NJ8X8TEnZrmfUTF2jE8v1GMBpxXZDFj5wRnUfeZprAaj6ajvyb",
  "key8": "3rTvqng9R43LWXbgiPF6orZUhQkm9sskwrNmXA4rXAUjHTSqQJnhTx7MQAwrR2HBTzaAMaa1ZUwxqxkxmBJCZ7su",
  "key9": "SRR3YPnkvpEA5JNCLBWV97VSC6uNg1dHUbtPjeEX4wHCHPpmjfsgSMHkbrQXsoHUffrcDkiTTnWwsfeNRXohicy",
  "key10": "NRmDTQVJX5hS9eogjLLmUa1ixy4RQwHapYh2rjupMW1afbE3HT2MPqJ7sBWPS9KPWKjWZeA9Leq4inFx3GQ3wvi",
  "key11": "3UgUBBawdtU88Cb6dfYw1CeDkNFzDJo25qnkvpZVGezMbaNQQNNcoHTnMFhmHJo5yYuFtWbGVA4js1wodwYxF1F2",
  "key12": "4Q5BJ8EwsCeAAbb5kDwpBftKVNYWpXF58EwZhusqnKDBZCWPzaqH966AK7NJXDGQL1fzZuwJFCpMQp7smDbrZguD",
  "key13": "3ntSauAimjsgYhGwQm6eYHb1Uma9ogN6AebgHeeA1hWbSpkDApDuu2q7hBpyeR5Ho6AGfntKHvEeEg8ywX4JLeLN",
  "key14": "5HZeGPvJUNTAowxKMmaxge36VPSpdH13Foz1fD4WayiZkeUhXbB5pDFn62YkEJLUWQHRtdCcmoHAaLzFPeehUwXc",
  "key15": "2NiQeGRgSU5h85VddWMrYYT59SGXP6HMk925bFpiNEhGH5TxTEaUjKs66wqFpHKFxdWe4hLpJNjttjFh74iMmdhK",
  "key16": "668jFdAtH6eA1qG5a5uHECHCgsHzk7bp7HgSptvByZCR7gB6DiiqAaMhVfZkBbekLeg1ScRt7unfzK3xDpoodzEs",
  "key17": "4aRAHh4qdLCU2szCfQnnz1Um9sF11yYRtNCQN9kLEa1duhm1rMNRFvKpLC9ScgKw8FbWCJpy8jzZX5oSCaNPp21e",
  "key18": "5ZDgKQrSR9rd27yXhr7LbAi68KHivDoFS6w9UhHrRzqSf8Raq2DqYiF84C8ekLEAmxQuA9hDJBdLTRP5fCL6wn1t",
  "key19": "61z19baE6YwGUgr1sKgBFx49zYZg3a3NHkHbQrig7XGAyzfz1j3fYEfN3tyKeNqwBJLguDtD9L8Dgisf5kvdxqDK",
  "key20": "64GyU4hjAsVNgFzJesL4c2M56bk2FTG9ehV9nVf5hZ1g3ehNgbnDDSAS8kRHt4CmSdzgcgQRownZrfAdeNbcH7QC",
  "key21": "5AaojwSMB7sL7vpKU4hF1YZnyS8FqW1UYQtyRu2Ym3aWU5xL2pQXG1rwPE5AVw3XfMr23NtnpCBZnpjZWwxf8MpH",
  "key22": "gFGKT8Ub36A5Q6d429WKerrFX7MJB52dkTAPPYuWUA8oJ8Byn9YS1bR4TjMwmy9vWxaenCbQmv82AaJgXu5fSAW",
  "key23": "5HvGw6HgTWqVwySNCKXQ7T8DPfsUae6ARsepSy7k2LPoHiYBhbBMongYxmo71XAu59gQzQefb36uadeLas5HdcqE",
  "key24": "5y6nRjogovrTRi2c57WHGPCAe69VJUyLBx7EjcgT21BgDXnvdUv3J5ZPXKPVWPHSEg58567EjabwPXgomkw8JDdT",
  "key25": "cwdwPsbrvkpYMjtBv9awSW5kdQZP5gJ4ZFXJ3dAu1fC2Dsk5htNRR8xExB8HDxzNQu1gANuGZ3rKySmFuimZcpL",
  "key26": "36VVwQpMtxkePnmyB3RmzE4GFLS1atFd8e6xXKFXPUUcA1fMHXGXvdEJsTp3J6iqst5wprj9Ui8F9QMfSa6PFmFZ",
  "key27": "4ae5AG6ycBvUM4Df3uYbVvkDn2R3tjZvsWmnksQmFgPGZiRGz524jq2k7YbDrwVNL9XzfC6fYnwaAwsVx1YjbaUK",
  "key28": "4FmPxZy3ujohQw3DAy2saNZQN7jedfNRJ3EnZ21g18WSm5y6WyLocnPGV6nJaxoaJNw1ZTFo1E5YPH5GdM6LuVy8",
  "key29": "3SH8SA2kJ5e4G6jkaGHdMGfGRvft8Dj3taPfifijUNqLx7FjXYmkojLa6aTp2bg1zYocnW8HZmPMJbmPJkinRwCB",
  "key30": "39GvBCAhKa9yvXvjYBCe3wjyWVWzbC1XGe98uVhp7dwtMu8ocAHhU4uywn7V9gxhywzSJSKKUowJ5Ut1vJpN1VA1",
  "key31": "2GSJUvwAeNitxp6QDzE49AxkZhXGGaoeqQHpM21zhMKQWNSsm5PPha5DpjtGR1BBfmfkVqq7mMsuG8gLHmaU5CFA",
  "key32": "29dToftCn24fsg4dqMFYArAmGuQpZK28t5KES8gSdssvhFnqkzqqYgaAoAo6uVZuKWa8jigREiirwDwJ6zv5ETAf",
  "key33": "45j9bzeAzvcvf79mf5tzsC34kX5dpLkUzFwSRjEALikepwttZApxW8SabpcFkPSaADbjC2wHJ25tCywgGhznmFNS",
  "key34": "26cfpLQzv12o2DbDKG5QnFDwtjnJYgqjssMpz4mDXT41wg6NTCeUokodNYR1MCD14Y8XGdqzPCWULATENgzUMPuR",
  "key35": "3qYCaLxcdxnsCD6Lh4So6BXq4VL3XmYDEYXZLBLex7zN5jMKxDWzv93YoKw7QAqcZJpzZJr1UB2dpr13x3Trf62X",
  "key36": "2GKPi1VAfpwCAGMZ7dYXwF7xTQQCzvitVDPtizGdpZrJdvi5iuFBMKRWwsy5Wpht3L7XTrbgmMRBc1fkrCBVD9ys"
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
