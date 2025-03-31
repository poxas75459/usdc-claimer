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
    "5YHm62qMA9z6SgvzMTaRUzgjPnv2fvxtuirhCZBDKP4WVUJLjQqGVBksWcv6aUMcydrnF46PFV7AtY3aTZEDoC4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ifiRA6SVtuBoLrmtYGEMEDFWPRhZqJMPYQPVUGUgKJtNSnuGRuWCVmBX9a1RtMwGkdRdda5dtvsYoDRfEfJnBHR",
  "key1": "61BtZyT2RPRL2cjZMgupegDguKQdcT3ADYRxj9XekXR6QGAzkyD5o67vw7s2WC74KAagCF7ZSZnLWUXyb4mAfk9M",
  "key2": "Q782Vv8MshZyFFu2YUAXmcsEbdHQwEmCkRWynS72sAq9SzWPcyyBbdCEXeo3e6VXRU4Nr1eYX1UYZRQasckMZrD",
  "key3": "3u872TdegvWcLpENYwzqLNU6tMH1NHGRFkqP6zWFSQE9xqEiSNyhgEmRAzsFcKyrm6qMforD6odXBEzTgh5AKKQo",
  "key4": "2NxAktQR2hshwoQz9RaxYSkcTa1zyJCAMMXM4ZcAQS4sxdSXXcbr6yj9KReA6cy5nNy5cUwqXuJYpy1ZdpdqZ18c",
  "key5": "HoDVij85ndUyKzQAjmzUsix6HEjNqPvJNY2A6CZES3ExoLgEzFx1RRbJvNnHz3Tz2P1Erc7J4Z9txthkWveBDYs",
  "key6": "3waUxFsxFzG21tMSkEZajdt3L3huJNjHYnYCZdRRRvJ2egUcP5gh7zcCqKr6QfqJo51crBVAwCBzHimJ29fEbm5k",
  "key7": "24YndQGRFvpsAfENtq9836DCUYJ3e5tTV8u4pH4iYRCJJtJivYzZuVn8oypeQZzZoSHWqb6r8ychy7tRmPrm3A4z",
  "key8": "3e7mse9GkusdouFrQ2t7myACdZHKWQhoxbtHv26o8YiQU64PxjdH6jmn4MMzBRuqiePp3sgV3roASySZ34rnVyh9",
  "key9": "3YzhNYYuuZXokfW97TxHPufdtvCVKGk1gb37JHeubarvBwx5chziA5KXBR56fqLcDU8vxQ9xzZnBY8CkRLs95j7X",
  "key10": "8qkbHS3ZwzunMx5QDSbrds5t7d9xhh2YMRB7NoBSMSZQPvVJJoNbJEFRZMA1dXwf4toMfm84oCp6MECKZDmpiFC",
  "key11": "3VZomhz3KouTQyHMRHwFWUo4J2L6iWfoqnPcJoo5kzfvgB8NE6FEqmMPcoEmvv3WQ4f5aoT7ZvNNo89i97qBVJAs",
  "key12": "5Y5ELRNixwef1aKHfbydp82w2DVkdBTN9Lhosu9ZoZVkHUPaf9ysmgjou84W8vh1LK3vhmEELSCC4FALXUBszBYK",
  "key13": "21gV1SQuB661WKhwZCLzVJJ9hAZN1QdcUeqt3dTP535fYFhkcjtJ6eXp9iGKxUvfEimsDvziEwEVh38xZ1ikN9wS",
  "key14": "2MdEG88hVJgqVnLjn7yJXBC2NrT5HsHmY7HgM18Qmaqpot8f3Ea3We7njVJcmjhguMEuCXfMJxSCMFSdLEA7YFTS",
  "key15": "YRWyMpRbbaE1k1dmfRryW7ao8AEQmY19ZKsXRj4rmN9xivXEXvUZT6ebWiRMbYRXaSjVf5qB8Z45DFTsLPKJShU",
  "key16": "3PZJn8qLw2WMbbUW6FuhUd5TyJc2Uw6rdYKojVzoNP24C7a3WMCufa4Wh345QaF4Up9xDpNEyQ5CwoEWT6NPJgM5",
  "key17": "3RJ4bQkqw45MmjRXEgXgYoWcjw5njM88VVmwea8yfWTuqWit8xp3ymkHTzZhDnD9aLX5AiSna5c9YwzXU1AJZSSV",
  "key18": "2MkgpB7UWkad1fiyayP4gYAZ7bZUebxmoyp24mTZ46dYj7KNaWaZCRJjn9CPFUHFo49JYey6c4w2DtfHewnXze4N",
  "key19": "5q4NT4AiFPpY8Kgz9oS3Gf6JxDY1ZqgieMvq9KFXpXkDopDKT1yEf4BcNN6E2F5pf1SJDoDZ2PDLp3WeLwfdo1VR",
  "key20": "65EcUcXh9LEvGLXJmzvauTcVM9yxLN6p7w4SF6vEzAJcwacqUN6zfirZnaMXzjQwH8DK58LqjuxJQWeJ6mfKewKg",
  "key21": "3AEvvxrXkD8x2SbDUNEzuk6LeDXjubrtpbJ5KBe6SJrzrBdG2wZof3M22ydUTCZicGWrqWFgVM28CghU8ayahg2",
  "key22": "bgqbAqDK1s55QMut1zMKeecrrxpDjDmGpuX4idegne9jU5FaH2DULYLDRevNK9eAwvBvpjvkzcQoS5JHvTEwK4M",
  "key23": "4uDuZvfxTp6xnZ2kPbagiB2TMoYTrtdpX3CQVR4scZy4FXKAAfuYR8CACeyV4KfHCccmLA7ca2KDbbBoy5hJKeBZ",
  "key24": "vK1hinjAdX8QLuEhNrfMcRn4KUrGxh7EF5PdsrF2YRAr6Z9qkHgaxDQ2D1wTBd2ycYU8Ljr2tahXF5PmKsqPzZK",
  "key25": "3ZtxYym9Jd2iTPg1icy4293omMCHgNvRmJvzGQ9sjzaCs26rMmfpK2sef7kMweCnx57hMQhFL1FCQ4tq58EpbWUz",
  "key26": "3PYQF3y71CbRz9UYq4ocuW8UoiXYmjWLj7odd6CPP9Ve91fPa6hjrKPDmoU2ib5bxAMvCBBbmq8zs2KFSzfVN5Va",
  "key27": "2MR86JXKHQ37Mn757HHaZgG62TBRwKLcCoYoMPvG37xgWt9fQvbFWHnFvfaK4i68ATX2JyknHrktg321n97RxcGd",
  "key28": "48EwGPmXhgQ1453eaRR7RRBrceUuWrTgwBd2mo13aSuQHU4LVd1R5pssg31GCb6kHkyLReYJCfQermpFnxU5ksQ9",
  "key29": "2exLh5BGs6c3TRG7GRPZ7AUiUgY3PFnUvDHZ1bggeeeihz2MHj5WgERgpWvkNq5ewPVvapuLz3hxLDqwgPadLxeE",
  "key30": "r85n2SWSsNErT6DD4Prdz8Lum1La8TzdSH8fuPNPWD7kK98xvHshKtaTei9pEHmuEnxGCwo17zmQ6673YEgirxH",
  "key31": "Hjr8Q7sXce4DDvDLmwxu1tYbsJK9J5KawyGh54nbHTduMhjdajU67ksrWY63iFEGNPnLVNTwhud6sbZzEiMtBgk",
  "key32": "481JJ8fcdVPN2FEb4jFWjhJfwZCepyudGEbnRfpUwL9hGE9dVmzQmvQ46JKbFmgZRmYj3Y2EHxyYYTBVvmqj5YVN",
  "key33": "NVsJzuGiwXLF2wh3vGhTwPpSxTZK6W6CoPPGNU7TaswpeiMdMpsJKkm1BArtZGw8KyM6MSNf7cqnMFssXFZ6jjC"
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
