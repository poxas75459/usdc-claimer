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
    "2gxZ6ieBfMPTKbJSHjH2D7iPZeuujyJZEEKDJtWPYAvrwAn5NRG61Y65CSaHGTQWErFkuHK8xDL6sRHMLnCgcA9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ousU11vr9vp5Y3Z83QTTNRB46FsZkkox34uQqiurAb2UfWpXSfSnyYmG3bV2AB1VjxnT5W75zo24mDcJve1MRfK",
  "key1": "n4wsJ5xr7fEfyWMUQ638eiNwpGnkv3MqNUAdcZbzu5rhxbFENtwC5LkFe2HEiTbcmUKR3mGDJUNTbYrHDvDVXJ4",
  "key2": "55naASsBE3p9TiZSP27oGYJdAGJ5DuahgD8Y93WNj3N7UfuB7LuMxKTmrxdfXs8E8EENFC6QjNLMXRXDVAxwHb1d",
  "key3": "4nyVqrNWh6myStgYeLxvwvrZegzW5fP7c9zMtV3xC4NyVUT5282Sxi44KR5HgGsEY7FsGZKbruWiBgXrz2niPeAY",
  "key4": "2HHjCzy4zunkPbjnuqyiMbPa7LJoLyLZm7vWLeLtX5yJrkkwWEQHZ6HXPPoSKeSyqzSpJYsZjKrF4MSAW2Gmxss8",
  "key5": "5dApj5u4A6eq72V865kaBWcustEgE2nyApasSPhWZexSBEDtBGLPfHLhqGbyid5L4eWKrTkDA6irwCwEc24VG7TL",
  "key6": "QYYpWEFfLRAy8s1ixdVo7fZwViNWZEe6CtTeQ6bussrfRS8kS3EZjFWjenPgu7CLT39yBGC9ojAcyMxB35YiVCz",
  "key7": "2xbgjggMntg57KgRwtZW7hSHb3iijmnj2EZToq3BoLox5a4Dys2bfMmb6Tu7U244TYhM6gVqjrDirXJ2MU3ZyLcG",
  "key8": "2GL9PyMQYG1UoXshhPn1swPS283kPBkE9kLVgq4BALv1ixyJVtrfjsqNcdcPrh6Jny5Rhv9SJYTXs8qm6vTfVy7b",
  "key9": "4mVMDYrA66GERehiRJn7tSsgWV8fCg6wwpXdjv4UXt1vzQs7SLpfcPH6EuTAYn6srsjY58LucL7koYXvioTqbmhe",
  "key10": "4V6CDqGCqXp7Y4VrWpjnWZgMCeAbDtizZLeCWFyWtoMBPpgvTUprMHsYBBi6XCDAbzEzsQbXHW93ZsrSeZxKYNEP",
  "key11": "2Y8X1oJRSMUn1xjZSGc5Wr26MQS48XBXFmpGrcfmN7ktPLCSNpn4GKJyQTrxT5S8QNhDgn9UUmDEc5TpPKrxRaew",
  "key12": "HecqCuCGX6umzQXZ3nMrWrs3JRNUffrb4Zj8DpCMzbwNDT7NYhGicp7yxgJoKoSaWqxA58LW1xZLPRq1t3ihMQ5",
  "key13": "63vXjeg7XcY1DdnKqAjZm23PQgyG494bkk8M8KWNNvu12T6Vo3TfcVzfJmuH6WtBM7EY3JTgDCcJmHZnXADNSwWx",
  "key14": "2fG72kXmaT447DwSgq2wefqsASgKyxnkPrXX8xkvYqhF7cgf1XggU1dXEMjKCuECD5RwwvHytbN6AmBiJgk6MdrP",
  "key15": "516nrthaCd7EQYBX8r9P6QvH9jDXkSQMgQMhsHgzxBQjYgyPdrhfGLtnLdBGt1m2SstVJXxpsWsbN4hyq945xp45",
  "key16": "3UrRoKgNkSEkcxWLGQK34AfkCceBgX8SUUVnDVvpTkrWGhVwPKpQm8Fqy2yeA9fFf2YAAePVy5BFBgpjMAzriD11",
  "key17": "2CuSFvzEnJzjnwR7CrzmaytSf1yB6rmLNjKRLDSxjPgHAKG4bUgtfdkf4YrGX6iecQs7zeRSiYP6Kqyv6brFQehU",
  "key18": "2NFhSi4w2gcwP6PEkWo4FGqRZ5tQHqnKqVrWifLSenCnaaPHhEMrYYhg4WA9qrg4HKeh7HyPF6W1k5BPKTPp6yyN",
  "key19": "2NpJSEwKD9VdQQRv64KpgCXo58JF3U4nRbZvJpcW3UJ7pAAP4aXHP78dVMnjH4cPqCLufxhGKNSUNWsnj8PfQijp",
  "key20": "2CUADpG6mDsiybqjgb3Kcq6JmJkzVADBYMX2Df3Jwj2S2j4EH2hdAPCb1pWnxmbmQBu1yk9zxr2G1mxLzvBrRq5W",
  "key21": "hYq7uZko75oGdiQER87Pg97waayGbePfTabzf39mYr5mvtc5gT31kjJuf6EeWXorYsbVMuDHZR3wqLoJ32o1qei",
  "key22": "5uLSKThonRcyAgYMw9muFnFFLdk8Vd9NUaiHRPMnqJ59jCgHDfyBN6i8eEC1et5muwY5VrnUsPHktW3NPhHpy9HC",
  "key23": "5atQq4qCfGsGub2fUqUELg4TGjK2K3WSb9z3TkAofoUHR6d9G8AA87D7n4vhwXQxkL7qLb91hh6MTFCkX1cQLRsv",
  "key24": "2EXPShVm2AaDpM5CrUjaCw9BwpBaL2HpFhpkgF9JC9a2d34CPFTGEgmvsLqz8cpMTpSJ8y8XDh2R8bKcTdLLkvC8",
  "key25": "41QpJToofeiXvB1kdrt6PX3TMrZ9ENtyjCjGs6CBgwFRhSnxcq1G2jWBU6ESqdfDWnf1oWvX84tXeXLfnCtHFytV",
  "key26": "3XfdjG4stY4eyKZNJFW9MeMrxmNeDASGH6idRMyiBHAfrn9r8kSSV1HQgR3g4ctUxecVQRg8bFQrfQTEpuRAKR3p",
  "key27": "31P4pM9Btu8MWEEqHyc2vFsYaBmxppWuxrTk2uwKsVtP1jjHMubsKKrm2mwpU5hN3PwLxYbkFNaVAyutuKngCee9",
  "key28": "3FWNJaRiD7KKrnr1eVVaASokQQQEN19Wg6GRRxY2yymaJER4F39BrL8gT4F8mnBGU7io41sn4L4HhEmd4XCL2X7d",
  "key29": "ANa2Krq2V1fdnWHofmPjogohrq23o3cTDJHM4zxvh9XmpmUkEskVH4zbJa2yCAW3NPHhwDVx8G7QNTr5VAPkybw",
  "key30": "3fjZvByhn6rrQ9zUxYNYWXkKztqCUyeWpvyaU4iKPHgRAn69soMaYDAnvPB1vEErgJjhox2LGeXL7eMSatG8aGz6",
  "key31": "3qDWZ9rXUxom2nvQ1XCabPZiKYc6aJKwQY661B7M8mvEccofw5pxxf26pYt538V7HcU71EFhD4u7aP8GayvyNwqX",
  "key32": "4VgMSSqCMN79yWjhFzjoXuaVnzW8chJCzLnaYzg8Nbxn6FquGbm4Heh7p3kWmbdhqsA8nxGjAAEeHexgktEeBDsq",
  "key33": "4ZSLzehEcSNU3y2ZvfBYtSMQKrvZaGqXGKs9LuaEN8tcdfXpxuWD6aDdN8kbCigU2VYNfhuFzrGSP3AMW6vL5yZ9",
  "key34": "5ArirJn7djN121TwQMLu123k2g2iJ95tWQcXcnuvWECQ6fQ7fbJ7KV87BYgKMBvTPbMawof9pfYnsc81A3hXBY68",
  "key35": "2nC9U5EpgUvmfy1qLUQz9w15bGwa7SJjFx43HzTiuquGLUNnpUEi97kKMiHZzb72LELLxTiDtN16JxBF3vD1Xpma",
  "key36": "GTzczgw61uEiKchrv8zRfamZLAFvqHRti367jfHA4DDfVTeD8qBfUtHFuTyi1MucLKNJKDdDvqsnJ4gekv12fdp",
  "key37": "5Mr9vMC5pZRTQ99ruCYaQvpNUCqVK3YGRsG6FjGJo4Ae54WkVHgoq9M3581fwHKcSEqxuP43MzUeiyaHALMU4bWW"
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
