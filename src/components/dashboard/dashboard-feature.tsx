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
    "4bjhNgbCeNpPCWVU8KASn3W2HwQ2YqEKVmjkHuRkWhp9DC6DeF11b3s5oNP7NB2bprqbo5CCwnXEHHNy57CXCSqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mfSokxkeC98N8pk2YZiYYAkeLzcbwTFPEd5LkgHfcceMg73AP5azvmtMxquchMnjbu9koWSDLev24Q7yS2WV23P",
  "key1": "hQgxJogySobcvV22yTY6VueCABVxwLx6trTo6pnZR5o2iorVL74e7JHbizVNSMZSAgHPizXfgxPRWKDp5aM9SK2",
  "key2": "5tqNeVBFB2ayXBcAGMCu3qzob3inJ7uQUxLoA3YwgJyzJD3cyX3eidKAS2BFa5MEJ17j5jMeNTwj3ND6Z6chC3MN",
  "key3": "4F2eTtNkWEYk5xmWRby13Ebva8tNgjzWv9thMwyBKLPodgFar12kiZhtGoe7p1Gvqpu4vZ3i2br3hNDRbXtDP2UU",
  "key4": "3pkgzZVQhw5s2isKj2KVLUYGiGnMDufKrTmrz1w6o7ADqLDGGXV1oxvf16oknJTXXQVobbQw1PxSY3PrfXoULGNA",
  "key5": "2CgHpRQiz7PDZj5o6bLzpfQjXgZVsuR8mR3srcNciTAPXQbFmFxoizfa4uU94YFQFgYvgNQxvFsDE4gKwhDfLLSV",
  "key6": "CSgHcGZM18fczd1JUvtBK5Q9mRY3t8H1iuFNMBJPjtQq7FY574vnaS9aTQGWYhXFMv7tLHi8cuBKyRxT32Bf1JF",
  "key7": "3czBFpvqrzJ2B7pHM3uSTy2m8S21feFR1X27tw1nLtNwCdqNnsxbDkyVS53VDy2Zum6tySwFirhYEtDax9531MNG",
  "key8": "5uL8wn6SmLPKQX2RnHASxvJvtMkxRRfAe8qHGceR5tJPmnuTQ9M5MTwf9ftnPwkFh84E8mhYZTtktSa4ho5xU2LV",
  "key9": "ioyLhoUUMVE5Bj5aVg9tcMq4eP46ZgpCDXLjVDNaRfuLCk5tff32iUt5rFnE9N9Wd8orHHYKjQw7LuePyWq7ncT",
  "key10": "3Kf6rvLkurPBi6P9d9Q2ECNJ1KgsiZjFZFj845VHBKEWhvSwEPc3b33tigGU5AtN99zffisrFdHLMqZdPZcnDnzQ",
  "key11": "55o79RQuJexNPjYFVoraRBcEoby9TV8i7KJ84ERHdzjjR9kdFFKy6a5Sp4idB4Rat7neV3Dqf9wuvEgt61gzZEB4",
  "key12": "2h9hhdBrMXCu7kZyBPPBkeKMCwkZtmmMaJjMi1qrgEG582kiaZwoP28K2xuzHaamcsCEeeQHcFVU61rRpN6BvBjP",
  "key13": "2G8RdMDPDxdMoxxdZG9fWH9A2KNtN4E1CnVRm66rZMjTvtGYutSd9RiVXMUFNJ9xMSJJbEzGVrzRv7CsMMAoE8ep",
  "key14": "3CXqmr83EpCri9qsYBLZNokB1SEp6xQCstasLUsYnddBnshTfWSgghrTyium5reVQHU71Pyt5A8rXTCKwAmwn1WK",
  "key15": "4UDExtmjVJoW2ovAfLNyWHa8HToAQgV4szNTfh2YPfHJZPV4qFCQxuoD4RZJqtwt9Fq6n6wi2Wz1NJnQya7rex8G",
  "key16": "2GeZdjb9RPq1wmZFdYNJWPCpGXVHMa5cn2JQi4hjNvuJ7zXdCLX6YqeyGmjjevdro5fWfvDz14LKyiqEhe5pEhrP",
  "key17": "2cV4guBBkgdH4s9SBv4Qg6Upo6QfarHtdWYwNpPMRtETbD5PDhaMdkYZuSyNS7CY7i4AdRsgsUeiWaiBbnZpUeiL",
  "key18": "M9au1X27khFSJeAaNGbU383vRZszPdBSpMy7YaPfqBcHFWetAUbshgLxvFJicvgbGGK7bkjtFb6UsaAbjjao7uq",
  "key19": "3V7HVFkdQr7Rzkf5P39JiHY9LeaZHBmKeHrCV8wzeFUNDWz7juFjjkk2M3TbsEkC7RBfZsbseYsqDEZHzDNRgvJr",
  "key20": "2WVcBo4brXasSF6iE22hS5cN3pJZ2mgXSd6URyyPrZ4YVgodm2nrroVvVC9pxz1uMbbFfF79JpYEXJuEGDjjMo3W",
  "key21": "2XwnjBsMkPn92kaedY4sJB8bp6D3yQfEQ4KDxheKv6vr6YTBDQBeCCv6nAVadpRDg1y9SWZwiwSf8de16Ype5Dcb",
  "key22": "4SAmLoJfUTNScyi7AHwGpVxCyL1gRRtJaWPxs1SSY5648t3ZQCqcous76FYHgx9MHHQ4zBhYYk6XvdVdk3jLCswf",
  "key23": "3a35L3FgV6MDCY72PYpM4gmeYtCqX45fETri4JszLKTot1LDEBBxHXysTn4MdKW6gsZp5c49FVr5qFELwtYgXFyj",
  "key24": "5dZ4bvJgNb8kg5QmAopu5d7gxKaNKSX5GJzgmssRGgEvMAdFNxEyBoU2qhrWseu5ooEZiDY6FbSv4U8VPfmBHZ5e",
  "key25": "3r2tr58wHsHsdPyKNmEbm6VfiEqnk8fikvkoKiXARxig16JYPJ8DyqMMPQK4zEs7s4zJ8VbVVeBDGbPLtbixUv6f",
  "key26": "5eMn2sqs1rxck1KcgeDUopQYdmrc5CxfDhEuojMX7K9ZTP6BAKrryL5Ee66cFNT1VGw8y4RfeeNvDk3JeGz1DnN4",
  "key27": "3F3qiR74ZdLaQ67NBxqNV75o2QX9o7SZR6At2k5Bv8cZTTfUc8in8WGkbfD3kkZ1zm7fdyN9rKAMLUJMGSJfJZFK",
  "key28": "4hVhCtCf2CrsF9hi3388ZP8fv8dH1Ndh8eZixJVs2ss4CoYhVduXSXD94aGkRoVPTGDC9g4eCuaTmy6kYzV5CiBR",
  "key29": "3gWKPY2jihnxEZCx1GbKckyiAEi9RWYhWD5jPvU34rBzphAjRZjU8pnrdxqbw3cYG9e5JnS8JATzNQEPirJL7e2s",
  "key30": "5xXKnqmfUEChvrkPLrmnF1Y3UXKTjzzqo8yNeaAjDFTVknMdKz5wfsXHwKYJXwsohJF7BtXHNsPieo4ZFRJW9Ynv",
  "key31": "y9hgkwxEDv3jZWPtHJ3PTJC4b173GUn6UFzBWC1kpJAGWhGTdtCHSHNHQz1rqbFavYWdVUnS4egPfivBCc2GaFh",
  "key32": "5mxHvAH6GR62BBdrei7RP3ymh9sgs6xGU6XVyB91YxQhmWsae9C2FdiDrgWJKnfma8Kzdm6mxcZWT3WqpDWbGmK1",
  "key33": "VVPSFQ4vWuwkauuFRyuijWHScHJhsXz2QkSE1nFdAVVXUEQ2HaL7EA89ATAb2BcR4yuXL9UvdakrzgULz1EfSJz",
  "key34": "2MN2DTAa4MAi3RHHXsWYJKfeMBHXwT3eYNKvgxx49FJQK1dzBeP7AmUfXyCwzPkwHm1rEPg7eNV5fBhBHiYQXCBY",
  "key35": "3THkfydgbBaLJ1kt1WZC3PN4uc5RGc4NncB8Qgypu28FeLVi5ZcTK8Gm6ukTeH1jcWfUR5ReMnUn65fxFoa3Wsg7",
  "key36": "5AhMR2EKZf5As2UECyuo1FtxaJwEL6QSy9UtizTSiKX4QupfaxgNmp4XaskZJdWehXcCYS4kMrA8oGCWT7RkKeNW",
  "key37": "66zJdJ9Msis6qJBpTfferbUxiPDiTj9ZCLrJ4ej5CYFRNHB1x5dzfLrNr8z4jNgqYhRtci7s2yojxjkSigYbJ2f8",
  "key38": "4HCJWNuRVq98m2vngpB872z5CqkQjT36psc6Cp27jdZQPfgUBRvfQQ6aRV1fqmMjw7KEP66w3iGPKoa23CW79avR",
  "key39": "2D2twzo8fM9e7TY3DsS8JVKMsuVPTY2HGVFQRjdyPsUgA6espfBtU7Y6yqjXwoWty7wFfvbH6YozZeZeuDK8C5yL",
  "key40": "5hdEXBFh3sv2JQmppUqk5495vnbjSiinwuQZddKoesqWcL5djDk1sja4qFDra1haw8EqvR2dz3quDnwYtbtxwDj6",
  "key41": "3pUJvgZk2FjHKgaFE4WCQwvGxdYeftMsWU6ycBuCBTSBuBrgMypYBQkLXE7jkf5MXzvckU1zACu4DHpCW7Fz8uAD",
  "key42": "3XZ3ygeNvgqKjerxwuCGmPLn2zZ4KFbbLRyJWCaVYSrzhp4ZuGAPjQxyeWfev9Dm45D933X5NSyzRUV766gfdFnz"
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
