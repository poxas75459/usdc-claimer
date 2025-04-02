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
    "b7XBJGP5DtLAnG28cUqDFkBfFjYGJvAykTnFBNmXtB1CXUgFpxiJxprjtbh7ThCCaqKhjkF1CGvPuUCW6FYs84H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66GSbp6aabXRFdnqA99yf3VfVp97oc1cNS7NxAS7MPr2dUpT8dyF8aN4kMXY98etx9V1AtcJKxcSJJbDfMgVUQsG",
  "key1": "5yWFrMFWgy5aUTuT7xx3etvPRYpqQM4vBkpEJXdp72dBRpsUxC76VRYV7uCuTwz9Tv5syHm2j4opmR4DSCsmnHx1",
  "key2": "5CUUgYvP87iaxAXGKFMKT6WPPys7qhJdxiDnoZH4nyRPVUyYuMCzbuUCLcRva7AmvvepzvYq98LzAvwXP8JLRm1K",
  "key3": "4kwG1JFzvbWnAG4L7SUQcCahvkgpE8CMzv5ueejjZzsoYrpmuxYHsYLzif7vZsY4ntU88VYavrirfNFSXmgGcm6R",
  "key4": "BHwaowfeimeRvhxXXrfPec4XFT5W6Suk64fUa3yyMtYWy99WUXyHNW5s6c2UPSm4ZueUkLanadFbD6PSwMc2fAp",
  "key5": "FatSBniNtEB1sRNX6sKN9sUNLGXRtqaY4LUUjPPZLz8N3xWxaFUpP64RTYg3hSkdLRyu5N8qoxsCtqbMf1omako",
  "key6": "39qAGehdGuELxpMJjw9qqdkpuffcRUeXEpNy75bhGy7rE8uQa9avLTtdrz9YSY7uMAssN4NKbNPe9mq3Kjmi9JAy",
  "key7": "2DZ8eGAfro1q68Q87RT2EZNBVJZ8hmvJEkz123wJ7wmWkS566BKxi4W2Q48MtR4cXQe2su7f677C9ajjkaYaz4We",
  "key8": "4puJLEt44kXjeP8C9iwa7bBZWinBcDZsxhEmNg5GTxrJKheVVSKXaqRgw3AsW1vcSDpfjoqJSrxWWUrEfYMjoUXZ",
  "key9": "52L2XEEPyBsWzgXewSvJ4xe2VBV51SQANDKV6RyN8832a8sqm6hvgi2yHWTvgpeDdLDiagb5AacPQNaoiF4NQHEq",
  "key10": "4CXxgwxjzU9rXYiebTMeqCKbTCmvobycEv76rXSaU57fLkFY7THtT3Cp6zBNP3uRGUrEFecVsaefD8hyqgULPZMG",
  "key11": "4pc9nWtczWd6yn21DBq6AoLyqX7i6WsMxwex5E1syiTCZihGTG8o1bqmk39DsMW1bTun5fmJDM2xdqbzffm6nrfN",
  "key12": "3zFuHPT2oTYcFJv91GHYD6HMRFRot1JkAWizYYdfvFQa1GBJbEYPSzwwyVv2P4nXGmjjbousefXncjnr1A9h7AmS",
  "key13": "2GpUu1xoMGRYC7HrTENqD7ziEnrCy87BXfaebVBAw32DHzDdd4oLozjUQiVfLKATksGZ5QAoNtsiVpVxjkHx26av",
  "key14": "QpFvri2wLxjkJe6Z3dZeSCzte7c8q5eisaPb2doLbDqhNjXXjqtCUQkWwum2cUPAoQrmkpeKvTWfd91mU84ZqR4",
  "key15": "Ym1fk2ZWzgLQZnBnLh8MKhgqWDKP4PnSzn8JaiUg36XDsugxt1WMn8Cz6nz3szTRRnpHxpeArWZyRuLuGHhcQeU",
  "key16": "rwLwLxq7XXUi8YWLtubHyJ4yXqfnYvzx5qqVFXZ1PXDBzUZfe4PVUrqZQnKQWvoMKZ1EfwfZL215Cska3a5KzeL",
  "key17": "3sWiB4ueBQTGugfQWagTbsuXfcxSMQCEg5PkPF79PfXwTvVp7v6gQPep44bNGF8aGNoQos7KVPowHpETWMgQ7J64",
  "key18": "2ZdLnJx6uCcvrMdBTs6tMQh4esgqe293X3tRtRqWfUTbu54wxKATKBM2XNtbmm8bTriXdgqZhqc1skiZJByrNHQc",
  "key19": "535YuoYJSKBSpnQGrnDyScQVC2reNmnZUvsgAtu6vVXeJX6eEEzTUkgZoDZGLA45gg9QMUbAAynmJejjP5BDgxDA",
  "key20": "4kquQjHebhEg7z6inJ8C1Pp7USvSW31JgMEEDHaUkHvw77wdu6Sm4jYtm1HJT6nM4YMMo4PVSBnKqHh7v55BfbaJ",
  "key21": "2LrCHHMgZ58cAsPLHV3wGNwqyNgDCnRhsiWqBrYgBzDeXFyNNMAwNvLnvTD7BpyNUSV9Dnu3UvVFooGKnkkGsmeB",
  "key22": "4BwfiiZtvXyetySVFpALrgbX9JfQXbqVGenQJgknS7U5KKevmhBrtgZXbqLgXfQEvjEFDPwV5Hhg39NfeNB4rT4r",
  "key23": "3d4zsGnvoXaYMRZ4o8J7Ey2Qig7fsbGY2VCaBsT5v9SJjLrwFugweaPQjM5BBVtAwXq3o7QBLW4wRKRhzCFjk8w8",
  "key24": "3iDVK43smWDkLTkxaxpazxfmQpaTfGn4hUW2H8is954hFKJHTS2q7rKMDmjypbwcKHkYVckAySUzvqjrd9kzdoqg",
  "key25": "5qErAdznKM4kMeMcTQ5AbPri3npm8LLkPQqfqVdpYBfi4WURxWydt71DWJHiVptNYfptvmV1CorV7kNK7YRvY1Fd",
  "key26": "3tP5wh8yhvKeCsAunAngyRkVNKsQxcBGmFt33UBNofcY3giJMr2cXi1buCy81bTjBM1HdT6E1Q4U5L2qyBuWiEsH",
  "key27": "2vNLfzgL66tZ3hYfNM6pQ9f2XwxEuMzus3MDbabbojxyTs9ujg7ZSfcp2Teh9rLJ3zWhg9oAZdK76pezPFTx3z9Y",
  "key28": "49xRPoQSxyMAxhg59aHALSvexttvpTK6vNNm2r1zmHXqrHXQNsL5opcZo2Mc1mhQehqQQ7zqQeczKeGjywJ4mDH4",
  "key29": "3PV1QWbDVK427wYdCf6YfARnM2MdgPWXirW7yY4PrRsTn64uHqaaDVQJtgLsqVCMQAEP7k1rdJcRiQ5ZUexrPL2N",
  "key30": "2gZv1yZDsFaCGfeELDE84L3Z7b86jBqe4UdiqzYe8UwCNEkhzp9avzSyUjqBtpdnmt1h3dqf3NrJmMoFeMnXN9Sv",
  "key31": "2GsZx47Jo42oPDpzWtcE1FRZrRcZCw2LXEZ7otKt5wiyKLrMh3TJLp7aJcAY8DPTHv2r7R3bnznoPkTjgeThN9Sx",
  "key32": "51d5MY6ZzGzRiaB2DzvnmF3guYG28PBpz4ctHyUPzi8LPDZzQoBq8KV7MwU8MxytLC5xRxriR4uaEm37w5vzXnYZ",
  "key33": "4UKytSkHLNyeQvJFHkDQaA7HphHQ8VRMDHnqGAmhu5FixcWAVbFz7uSyTBzGBsVvk9gTMZVpJW4XkgAfdZCPSSh2",
  "key34": "2DC39Wkfb3Won6Dm5kvwcWB8i65UuZwkw5DyHHFTd7NhqxT34TJjr5UCsihiJSLZtX4SqR4rVdFCsRCrQ3inNCnv",
  "key35": "3RzzXcgzqpSyNAehvwa8NaaNV53igj9Kqf9H8WJcYDCm41vXfy7xmzxfMnyeNUzu62DvQkN1wbQKKck5EpcmJ4Lp"
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
