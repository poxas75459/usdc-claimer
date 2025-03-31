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
    "2Xxo5mc3iDRRSDqwAAfDDeFSPAyH5FzVbidJ4e3mUH8Jj9FNSXbjcQABC8JXsjpsWzdwpxx9NYwfAiePUe5Pxjxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aqvMdiJroeyyjzeKtdTtCFXPYALpN471APH6BE1qzv2NZKEoQxKVV6VtChGLUAaUUR2VYZ7jfHh8vpmdve56c6o",
  "key1": "JmQ6vJto5YmJHhU5buS2vbrwyEdPxRLJHDkLSDBJ88z1ieSvyLdk5NXwbGEkNZt9Ek7NKTJcXPbyh3t6JP414jk",
  "key2": "62thQm5JT244JdWrirDBLNkfaKKywD2ZptaJccNtsGpCvUG72zi4MTQMJyFfz9DUg8ajRk8xu3ukUyLGvTfv9Zku",
  "key3": "xFCLjCB3n7rBm7Z2gWmCCZ8e5cUpJMSg8XAYeKSzuEETZwRXzHhZtpZg16RkZ59AbyJjEgFnFBbSF4xcfHyXemB",
  "key4": "4i34dkcd2aY3Z6qdsMoRtyhLTyLtpYAUbiDgdZNp6U58idub4JjCJWJJpDJ4ZtMGyoga59wKKHUPwvZGawDD4Sw4",
  "key5": "49xuPxeGrxjbUgnBbY43KpodRy4aKYse6ubxYdYudek8RtnsweC2CJLVHR8dfqg7dD3gEE7BMZQ6vHRL1NeqWMuS",
  "key6": "4gNTiwDAP5Kx4juXtBAeoZ31tswG7yy38amRsVkQATsYZBPqpmYS9gnFqE2vL7ExHAYyApp8hDFNxKJ65uEyotHs",
  "key7": "3xjKoX1F1yarY65cbfoeqheSqyWzC5CBHggbyqHC9pY6YvwLA5Wf46Q7PFAjo6N1DT8kezLPZBJAMA83h6wH8HeS",
  "key8": "2c8rcjzNTA4ZoAvvThvyghunMixMxnDLRpWsjQseYKvH5eQbsA4TKaQsZhUg6toBzsnyeixELCttHA87GtrLweQ4",
  "key9": "3eTwZefCLA42JTW3AErug9NpajgGZWnGcZr8KtQmvk3Eb4GBhz5wWSY3eS5zdjsUCcsHxaESgoRDpZHCgEvsN4KC",
  "key10": "53znFLxvEFNSMDHk8c7ofn4S7abgforaM6SnrHUxdDFZq9p3xtk3xN1SZsUNfUqpyq8LRVD3uD3WnfXe259BViGL",
  "key11": "5ZrPeobs7gLPkuDFdDzzyHyBDetkQbbxuCuLfxbS2u6F7xPiMPr6xcGV62ZoXJBELCW4iYwMHUSaz3s2MPbhHenj",
  "key12": "2nXaYJsGMvv1BSMvrDfsFvaBRnNo4d5uBzouFg7NK8quPBuq6TaBWKRT4vHRh8A9ThBD6rvqu3MFpQryztCTkNLg",
  "key13": "2LW2PCRMoWkoRHK6iqP18MLMoVT8ASYzcnFMJfhb8ERHdcaunU3mpeLsjdTFfAg4VnqUP8iPm4EWPG1Myt4rVFgo",
  "key14": "3foEwgMsevfG2g1jngXjbc7tHtkNkZq3C7SULd2B4VVyDJQVqQBwXP1M3J588oNBnTk68DFgmhiXrKGttfDkWLsv",
  "key15": "5sprmoS9zKKKJAeEAGrGi2jF2mXSKwWRLnGBCUM8pRquUsZS7L1NfdttGHXtTFA84yRNyNBKdmG3oTWG1NTkESc8",
  "key16": "38bQ11XQ8cZDDNAeVGiDGfEDpLYt9VW634wGfKxF1sACmCZE5wvpCwQdKv9YAccvzTM7nvZxG7u6KiBTjw7UKv82",
  "key17": "5EFdmeCGhqeDxmFFYA3zPEvRNP3ySWXeh8g6hEBy5fPXgfjvaTb5MifYRFMbXzdv1UQqbn5hULs6CXbEgoQcGHdw",
  "key18": "2En9vCJyA5DnqjDzj2P5qziqVn3T3M3TbzutLhYwPkRFwjVeApcZoU9L1mbHNhH236ZpomvsFbUKygGzuh53jtBk",
  "key19": "4E4aKgQibk4KqcvFhGVZRBDgEdxuV5mRuPcZpzw4ZyH7KoWcgsc3eeNPaRTf6dFBHqNsAvQaP6U4XxWVuDovqPuo",
  "key20": "4WUrvNy3TH1comif8Vf7GuFj7FGdzw7tp6x3XBoQAgCPs5PMdepwgk1nxGZqzT6qvsFwYKseCXfJu3Je3zczhkFx",
  "key21": "2S77wnuAAZZ9D2DAZ2ZL5Hfn1L1FsyjbJoMp2oE4uahY2LdZTJBijz4wpikGnMLHsryTAGKKAq79kxKipidNz9Es",
  "key22": "PXTGWDi6PjPa2DE7KG638ZyANFeNKXYySjZed3wSSZ4wnVBR8sWpTRLZT7p3nGryMJFBxktDzJPJBQrtJH9enub",
  "key23": "SXbczXYwMFYHGNX77wkp8NCGBmZAgCc8K1gLd285CYUxMPQfekLjwACZyuWbVtDu4SgVWoSWRaNG1tLbXUQHmrj",
  "key24": "2pEBinkw17xZ35sFxGd9SXEKkUi6RE33yqG9NWZVf8yjZGHPcXehBhHm9trwke7L45djTvTA51ksFcyeWydKEehb",
  "key25": "2boTuLqgxvXZpdQVXiohTXPQuBy2HUe6AvP6yPxc9XEsN2npjbp8CthAwkkTfnEnf2kPxJbCeHQZbjGwv7cCkifF",
  "key26": "5FsGiD67i3dYB5MWVrG6uzo3SqweVnYWcWQv6P6fq7HdxHgTc5t5jP6deY1zcpsfD29MQpw7aenG3v7wbHh9tRqv",
  "key27": "3AhC2PBDkzdLqECoyqurZtYJp2UYbow5g5NuVMxa4W6NqMm2XqwJD1aenTTvNKvLXVBaKSA4Uq5x5AfiSSwbxAKr",
  "key28": "31WANaYRGi3GBrnRNmNbd5yEymFCC5b2VB6AadQbyGpwjHLP8EmT1z8eQ4zoaHx5wHJ5WzctBFyCNwQ3HRrMiqps",
  "key29": "2NSfeYhTtz5BAk7B4pGJPvUaEYvNA7zZiMMuMXsuDAtZsAttZFu9pzEti9NRWUyzaQLbtJZio5GR1gxpymgjXWCZ",
  "key30": "23jUVmWbPES3tVy67S7WnXDSdjJYEsD8BwG58q5mCDGT1iJo1WE2MkHcpbbzzEzghzxdHUTXDrTC7h4P22r1jpnL",
  "key31": "W974uAgNyQNQp46MA5ULNpeTXSxrc2QEjssHwWTBuyh2Ber184pVzqggmGb36t3rESze2wA2FkfwxYh1N7xBjCL",
  "key32": "3SEo29CBjRFXSqWxohABgiTVuYgZLb6PPSJb4Py3hh9kb9mdZqruf8NrPPQVQNMACwyUTQBqFx5FCTkpLt82i6qp",
  "key33": "2Wz1mdXpRbQEL2TpRev74JVLw4Qzfg6HwgopbF6guuu24x8h3XZ6rJdKsLf55X5bHrFDgxpor6YVo29YujWRgU2k",
  "key34": "4XoKffZWAsx1kzJykgMuW76XL8671RC8c7CxkXn3QMoDeWki1kV9bazKv4tUrAtcmanHptPZ8qF3u3aRaSRJWQkK",
  "key35": "3yUZazF7zsc8djVzagt94mDihVcPYPpVf8TUSyUGwFvujszRfakKfgo9sMpFSZajqvkYneoBP2AA5psaeMsBMHG2",
  "key36": "46G4BYRTcxWURta81MiBVN7cEz22e4YWck5jJhNUgnGwxtyBFcCApKRdua7qrgQnkDFoYCbnxgtD3TYH2bdZAjv2",
  "key37": "2QfSswNLwAVsK5Fem2QJNC7TKGa6MVsmxpHvaYJZJZLuKpGHtL5z8qMov65dHoBQsg8a6BwCed199cyMBpLFDYw6",
  "key38": "5Smjia1DVHzCbNEhgk8SKmcgpsSwJeRkonn5nbg6etdZqKVZvmtvXw8caP2dkWyxq8pNvcUggcSyhQz59GrqzK3g",
  "key39": "3dqLzyVpmCVSmpoCtJPjLsP1SQHecy5WGSaYMaXNPJvGMZkkLRX5iSEtLipwrzDzQU8g8bZmPzoj5fozvf2EDpqc"
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
