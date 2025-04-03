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
    "2tFv1n2wgpEpoKYW3eZJzTTwaqqtLgbge7TnspcwQymnaNzZjGv7FaeBZSDnjALKxVa1aKZizE4YuGENhT2vg5N3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hn3PqurnV987vyKv2BMHZzstb3n1W6nkhB1SQCrAaca62mAj1EySwmDDBdEdj6waG6pjBGYfd37WzEVZbanpjvM",
  "key1": "3HGPdNWxnsC49xtYnyrKyAU7Mrz8hHnWdtymkCKCyb695kVnDENygXjQe2GNuh1NcW8u8Sw3jKm2XYPNJbivCyke",
  "key2": "3XAH4otaxxCRB7S4xGVYhRAgaYZkML8bxDGmmaMeheUQ5bp3BK7HDhdeEopbJFJSN3s8cNoqUad1mx4FLykpbwJg",
  "key3": "2BQeUUTLQYtRTgPkeDTSZ5LPn8FfVtPMoXcPBWn5DfCwADeFEg7o8ABetr8vsycyuFFQ4d5PZcQG7o6jFwgegcqP",
  "key4": "3MWHSFYAqHuCXRUf8CahzFVwXyYKhLwrrcpWWqkNqayoRZhgjmoDQrrZmsGbVszEmUr5NB2fYLozXFGGbqbPN3TQ",
  "key5": "55fRCuVsU3njmyZuEooxFWg8ea9KsTGJto6ngZykFLTbybRYx92dMbSLdJH8nycqY76Gxf2eWpyPVTgmpP3qUt3t",
  "key6": "3oy7W9iQ65bcqUgcZvHz3dhh1dhCBLWfFmNqgzSWBj1eA1HN5RkUNVRQX1r6ABGVnvYH8pGRZBVvK84nQdnUn5SR",
  "key7": "5XxsSbZwqecThPce9dWDgX3uDKiEMBj5AU42zAbXvqcx2U16iZYm4feM8SAg9NHKiPyVs9yFsFKRyDdfKwurq4Js",
  "key8": "58Yv2F9s3VSXYCcf9sKvguTMJaQRxUPPCm8k2Bpr968GRPAkgkTPiBGAh6owPJTuoFe6je57UtftXtW1mPkgQLpy",
  "key9": "58GNT9k6WRoX98Kj5j5SmQxY4d3y32UbA4yf8C6rdU9WYGaWqonRmW55PMXMRQ3VpizkWTjSYJURVNMjj36vjdwV",
  "key10": "V82LbJnYgr5rQ1cSs31H43yb79s71YqHCjWRt2JpfWj5ZLZ66XYybJ3y7rJm3pkHhrfo867Ef7tChTcCUvRgMKL",
  "key11": "3Uff4v1D3CDjT3ZqhoCqqhLt5BzR3iCQGafQeK5pbV2wKYkSWy5SU8UMEtqqdv7K4uN2rjessyJrTYYu4uaLsqtu",
  "key12": "5jsuEJ5sds48wnFvEo4o8voF9Spcy4TYijsTehSoiU5aQ9ukbAJnXBSsbXBiDUX2cYDehkV7kaEyUzM5S7JUB7kY",
  "key13": "2Zz98jgtf7aMRS7EM2daiyYYZ9Uchxftcffj8MFv1d7WqrduxkZ2nrftL1gB8upjWzHdSN4jtK6gTLCyUxiBvq8C",
  "key14": "5XZLUFJ5fp3Z31SWJH7zNuWMfEn76YPz5dNnohfqa3afGTr5bBkSnbgzWpvtGitrzGvPxuYmGjx9Gr5QrVmW1H3i",
  "key15": "5rrqCsibpm8PL4XDsGFhCFS97v2dx1M6gdqwwFK8Cm6PhvyAcjhtLrPqXC1saxuQsCzh2yzkWWDG92cgmSwvPqvG",
  "key16": "61267EHpixhX4RU6wHfdwg7vMWhD2kphpMJ42UeUWdPbMMU4mA7vG1e5q8JYYmcPCZBqvQowcsfj6fh8VdFbC9jT",
  "key17": "3SH7JDq1qwfnhSTU1riLx8S8mJS7eMrNFBVLB3VkhDnYCU1JwdQs4Qaikz7yLo5Z9PghJJhEJvocf8kSMcb3P3aH",
  "key18": "3y21PFMusMfcSrMDpmNwCYM67PK1hqR6BG4wPkxP2WrmbHRPGCihpwTgkHp9jXTJkspHU8SPqg5znJAK5gyZZVoT",
  "key19": "3E4LbzKmMXxVup99fWSdMK4wfLhE8YVrhtrzM9gMAWvuF7gefdXZRTb48q11j7Xt1cFiA97zLUqoJS8byk3GVN9J",
  "key20": "2zLF6BPBTv6AZjtgBRH2uKtY5j2NUQWyaqjK12afuWN6LRPj4rQiWNBByHF7jwaQ8ASVDbpDgkVH3zGTQB4vBHnr",
  "key21": "34bQoH9TrLFgryQ6zuBriwAwSqCy7tLrSPZmVaCs2EAkrwqtB4CFn6aRpihqgNwmJ6BQcTSWM2tWYpx636J4cdmR",
  "key22": "HF79bLkauQHNAt7EykCv6V2Dzdiowart3YkEQDvE5dAwNEmW7pP3AZYPWjiz18FTfxNRhtqwL2C5UNwSJvfnaWQ",
  "key23": "2Vkonkewx561LqPqc8pxnVkq4wgnBKktBgPqUZCbgiaJkQQJx7u1wHDiYsi8ZXySjEB9bEu95KCUm1oioq3yEftJ",
  "key24": "5aqsr3gprZL4Jc7v1JwZqPcuM3D1C9vGDq6qy65inTYyQiDqhqoeqn9eYY9cdcHnagk6tMJm5tokayctrCFTu74f",
  "key25": "3LHF1A5ELVF8tFtMdHZpgUNpYVxFgfp2WWttLX7xD3Z3sZiZx9nt7VMJ4UREy2B2yLfVottCJfpJYHvmxFyDBTqu",
  "key26": "YaQME5FKKcRKoRfwAkVA5WniDsESG1YwPHj1EFERbmQVeEgjjRwiuB8czFkToGUTtJ3kjWzVaaJwPgpj8L7h6Gw",
  "key27": "25CJd3cqzrMRP9wPmzaRnA6Ud2Yud2eK4rgWS4K7S3kPXPwGtcBgemYEmWi4WFeUqFC2hweeoP3JwHiUjpDqyzsk",
  "key28": "4CViLbVaw69KcpDF5h1sjhyLgQUSSHyuSsARcQir2GVQbKdRaBmcxL8ybdbH2iWbueyECgunzsa7kUgiWsGkYgXu",
  "key29": "62V18CxP8NVxvaHtd2gUyKeLFJwvvQFV4P7UpjThMA6SEfW28558qD9UtGDxAqasy7sjLNm6TrYxgdCDgpaGPC9k",
  "key30": "3BxewVw424RRYXzAKKQKvvugdoSgZ2eqNx7KdXUDvxenXkekpwkDRMpGGjEAHPA5MTqDkEP6VZGD6DJoVqUm1iTS",
  "key31": "5wTzpkMgx63gmV4uHPJpNKj9yZwYmCaVp1uc5BcRuVEdhb5MbusytBSyCqfEEBd632FYWo2WwDATH1EjuDz7yRza",
  "key32": "CXdXXcwxPT4WhMTb6d6TFjqWy4gmAu8xSiHedAghoapPqAMe6ng91jgj1x5BNSxycA9DM3NgtFrViFw7VgYewkk",
  "key33": "4gjW4we2rbjvBaUrmn9FmXvrxTKwUwpGRGCWMZ8jhijLKeoZjtq9WxJUGcVqZyYcJ9CEu5AHr1VbnYoPvgBJmZ7h",
  "key34": "3GCjetV56FgATPmczva6CWVGwnYGLtC6gSDhwD23G1zTJXWpPt1pcbB45k9zNCevmb4BKYTEWFRy4NWaNV2mVnor"
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
