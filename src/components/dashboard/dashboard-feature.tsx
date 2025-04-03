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
    "38fLE5wfnzNWpEtQirfDBmeqsAtZmdFVZEiWQL5ddaD8dM4oWeHkBxFbzeUWRkbaUzCa8J1pJ5TBqbMAcbVZcAAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64NkQJBSqN5Ky7BoENq3jv8cr43MWk2YeAsnYKvEALyRHUww3eiVsMPZngq6Wg5JU14dbLboeB4kaKG49KQWXtft",
  "key1": "TcLyiXU1RZvAJqp5TaS7Kg4jgyLrDQMmMqTEZ1riKjMMwQ1RwB4Ub5BeePHm7EbLSAmDko22h7yLQPXaHhGsyYv",
  "key2": "4Mf4twK5dogw1aYTwUXVPcekz6w626MKSXcYhmgsZ8Jcp4niWGBVCrZ2e4rgh8UYqVdAwWMaLA2jjS46YcdtnTo",
  "key3": "2rxdKTCbLXNTf8NvPkErpNwTx8WjBGMV5MHQ6qMMJydmD6Wa21XbHiLybNFcPCfVeT7K7NN9YxySNUNZ96zNEeJs",
  "key4": "3guvrEYpMPcN2KJRnoJTnGvxx2r2gXdWyeTvtyJQtX1n1cbhNCGcUC93KBAzCJidawkJu5s19neKMuYGaHFkxkAA",
  "key5": "32377gCKcsthKu5ArLQ3mfbV2cN2SNcdJ81i4peUrPngJ4CiTbKYbE8Mfqrt7w5qeiuie9h8ccvvjty57xfKUmYx",
  "key6": "45xvbJQ1x28pkrBoVorUvUy8NMANCsoUUfVfAS5jmU32FHKrVgzauWKzBjfJXX9tDVwRGqNuHH5igDbkggCxLScW",
  "key7": "4sQF43DEJeExrf8ZpW9Dz8zTv4fXXXDxm7beAKZgh4yAxxhWiGznw3ww7wf4WNTpSjpK53uVG6tCBS7nYWPCZdEk",
  "key8": "3K6ZhL3XCmPvLhSSo5sieQv8J1ZsjnpoPJcNGPHh24EB4bszHgm1MUWUsXiECXbv8vpZiyk3omdBFXq33JpY3Wjb",
  "key9": "5VVinXws17CG4ZJXttv3pq4ybj5sx9otA7w87XLxwz2qpWXnFsNPP3xq44rny8dmbtqaWqP7VF5g2tPRZiwia5HF",
  "key10": "3R2hao3FmnazmnFuz7VXFw1mAfM73iQ158tLoLchuZhQGd5ZHs6sQES9Nzaia7ukjXT5voeXHq1PHsjJb55UBGQf",
  "key11": "2keaqtRYdu3wff1WNnjEftvAnSBH4iZc8WfpV9JEEsfYWPvbPQGesPYubGSoxQJXQBrqvPmrGwWVjf22oZbZnJNh",
  "key12": "2xo8QTHWmxRkZNnqkGmjEibM8pnMAaKYTjqeMN5sRpMHURYxXatAF9EtGf85cztYqx4oUTHzZocGKw8aqQRkHVoT",
  "key13": "LAKLt4trvD4GeaKsDKmTjjyY4Y3RheLSPhfnhkypfvHo9HoovZWuxRq1YHhmxFY3yDKU78eZJeUYjh6nNejPWZy",
  "key14": "24C1sXWFoVKcqNR16F7PcXeNyB4vNnvcHfaQ9nzrLoKSDkY9fBSEbaUbFKphrbRbapJryps7poqh4tk5S123H9sZ",
  "key15": "2Ctdmquh21hgi1AEb5wVs8oUwbRoZU99uyjRpr4c6TVCAhFXzgiDnfjhxhvy1XvKS5dLXYtu1FRNabuU1ywqf4LA",
  "key16": "58mxSpyhcZ52Ye8kD54URMgDafzyfbYE887Dx3Dj4HTbshhDcxnh971qxoGggvcEuGYPsNPDrCpmZJq2XZkCmYwP",
  "key17": "4rPFCqs2WANQUmVNs319kHMrmQcveBZVfDRGWT8vV5k5rHxiQN5Z9Bqouq2AcZ1DPFSfW9xi7wbDRVKyHaFRvhZB",
  "key18": "419FAMp9M3RBPyXa1STgrrpYN1gQJKL1HbHLXtGGJYDpeeY4d3nVzBKyPKVyE49o2gs2WBCehbfXGZ1gugUr5Apo",
  "key19": "3MD27qZKemGxxsJjPebzvQMBFNoSMcboGF8SK41dNQEJManEV5F4dzqU7g9MefwprxNUbgQUtiisrA3RNBn3PXVv",
  "key20": "2uKjsH2XpgjcJDcrw6us7SGmB4vH7mngqGS8MpWVoiUL8mMyMRr6an4u1cWyHoAhmRBsLoZEJAaYqC4H3KXqmfhL",
  "key21": "38irLksc59CGHqPRJUGK13axRW9MzDjpc27ksLAigK3upr5svfN4jhqEerByn5e9sJBzbr6u3fGwWjZbPNFG7kxZ",
  "key22": "2GqUYqYBSfXxoTziiybz1US2t2D5uqV8nRQLKLRLiKhyp5WJJ1X6AJZ77poZkCyfr3Uq9a4QZGvoCoLuHJKgFaoz",
  "key23": "4VDNSiRWYC1zdjG7YME3U3CZeeus3FALpiGcKW81BuVRysKqoT2hK7QvUtxQzxGVJb6baNwnVZmFjQ7dxkRbanN7",
  "key24": "5KEEdrGAHEqHHWckTK6CtfwHUEU1eqUUkTBnRyZocAxGW8hGy91i8uxBGsmasJVEk7WKQC92yX9GTuARtxtDkFif",
  "key25": "3vHXUApPZLAc12ucDokKKEXV9dJr7qJoTQQL4rz9cKYHgj4QRfkRSeU4zBbjzyrRuN6cNiCnYHLyni6TMWUygK1",
  "key26": "34NYcpThCBiuhicicxfjJzQoNDw3ktbe5LUy2AgPzVBmiFccK6Qe2oUowHJYGZRQ7SKMiJVNMDsMcPjGuTjjQAy9",
  "key27": "553DD2Z7LHFbQrgB3BZVoRVVf1EE6pGRc9YjVyd3Yn7mWTebq8pShbYskxtJfKDtJtDhe31vVnzR8QTrs4K8BVJ3",
  "key28": "4HbYC1vLHuHZRgrZSWmm4zRQ42kQcUVKKoBPPJ4YRqacyrDYTgP7y6QhaJq6jRmVinzshpqhB1gPhHDQU22DMdhU",
  "key29": "pxUkq72ZG8s6fYdP5WXi1U3J5CxB5LqqYjjiLvCqseAaE3uyayVn3qYjpNXUKg23KcZzvWHfru9KMvDE55CXUBA",
  "key30": "2GoFa1Qn8tv4f7CvyPiut2YLTJ4rcbv2nA1CmJerAwixJPaXKdAXoLCRFAswX3TCQ6BxvRgGNNYj3hGH1pTAj77v",
  "key31": "2ZbhpVtUgMwMY7zVzuCx6R2MWzV5g55KrdsTE3HvXsNj5EnWSF816VxwBB2V8udu8fbh5JxxR2cP7ixrj3BESBeG"
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
