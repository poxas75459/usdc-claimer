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
    "46FawKbFTRDugDVctKH1iRCn7JN26RS2AARNaRLCzekn9BP2sZXzARdZYU2GUkKd152UvUnKB3sBa5NTr4LX1f1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zxVaFqkvjuRFTdKbnMr1mmmMxpapgc51TB3HzL19Fwpc11VbhmxWtjkmvPk6ADsxzLNsknoASbU1uw71KskKHHE",
  "key1": "UagFcXi4ZJizQMtFZKwAq9fMrimfTnZSowyHYm2PqHEyan77YE2kLF4W8TEfrU3tsxWTQwJ6od1yf9iJdJCYNij",
  "key2": "2NGVQ8WdhqTg3JFuUF3WZPjjxJpTAiss9d5A5Va9FJXPE5iK3952nTdVj6CvTJ89zMBV1ho1zYJqEQzPAM96qDmg",
  "key3": "3pj3hw5AkhApdgCrTGTT6A3YxvLZQzeBhUW1HWdcpBU4gYNJqALmMoZ1ZoXgLfLtJyQTp6zaWRcaQogvYgbzkrpL",
  "key4": "4u1hReLGyVHsbqyYB15Tec6AbekRUiRP8roXVd3KatQjW8da9s2RERB2trUsMczTKAiM3ESAALcW5DHcZ4J3tR42",
  "key5": "trU4TcUxTsi3cwEMqbPAzWHmM1KAAghVwKJzMS6NHfXKuJSRRV5pHJV8vrkw8NfjtsMuB5uh8CxYScHYStgsXHi",
  "key6": "45xgUjG12wJvXqnoekkvDBywshfFbJMP7gD9nbhvLXuMiUeCtS3r2gC8QbpfHo7Fp2g8L89uaC52MpsZjAuseuKw",
  "key7": "3TSgrUBXdyrbTspwo6r4MtAsGibpR8cLxBx5WmgSALY4VD8Yt1b9J6c4qcPgmCegf1F5pXc4nrmsxSv8zveVXRNW",
  "key8": "4kUtGtpEC5SWWGjKNZGHwgnDyRekuEBP7acy5yfDZw6pJ4c5dBYNeui6qqb3fFkHLGBsmPYrdRzb23FFfgVbNPeF",
  "key9": "2rdyF3D6xdsrxRxXtM7Mxh9oqBP6UfSiH4bSKuxopQXt6CLzUW8D6HkQ7nirCDSRnmkdJUPttdnQrmWe4dE18QPV",
  "key10": "KDynqsqUhRuxrXcXoA9gUjAjYx9Ymz8JUu9D8eJFqANHbAG7VJJaXBX9Nd8JFdKpp2GEGu1rvEeDYXJM8X2Uf81",
  "key11": "4YEnyRKeFcF5T6JnA9VMP1kULw73GRHKnAhkyxNiUJQYMA6CFQn8Dgyz9i536hagr5yQ7c7AkZ3NMiChe8ZhirT1",
  "key12": "49C8Y38QDMTsgG3EAFzmCMVGNEduc64gtGHjimEBnj6ckb64tf29NmBiawJ9MifkXy93tfU9h2bPt9qXGXHE8a3w",
  "key13": "5bBrwkoib4UJrjBzETRcCTXPY5tLUSZNM9ERrfT6uqs3nCRpfviS12jfbHNXv3yRAqUY47C72yaKydSApWMgN8NR",
  "key14": "5ayxgFwS81HkB7FjNaGk5fE2TtAu6hLrn38K1d24en9ti9j3ShYzsSoDC7LAwNFjL3QBPHTRpuVwZ6k1wcVDkM3d",
  "key15": "2EeK16zgMQGKEotKz24pv2tLQHJMUffz3czQittiAuQmMNP9eXsjc5P6mC4qNT2KfEefftu8iC7TjBmB49ur4oLP",
  "key16": "5oJRPZoGeGGb8FuaWHYEaN6KhiB4Z9HRdu6QWepzbbMh5AYzLfRZJZnzvzkjmUfnZBevP7G8BCqKbk2QdynuFpdf",
  "key17": "4pAPy4P6ju2bWmLMTafaWRq3t1EbKrtGKCQpaFPfu7ENEEoYUkpGE2h8gFSotsd4Ts5AwJdEVMCCrUZH2j78SSUn",
  "key18": "35WdH31yVUg4DMc913TDYeCZqefcMYVhaJpgpZfRXjc8q9THSTGu69mTbSPWWXwT9nVjfV23nTVQAqG91AyocG26",
  "key19": "25GMQX3VnZdnncekGQMNLwTvnvBsfngwECgxgi5EMrdbfNfQ2Ah5uJzQDHDAFAP91sTA19BGoGffw8Y3n5tPWoM1",
  "key20": "4FgipSauqF6D252RBdydmzSWTvjAsvRak34bcQ7kc7QKSDTnGzgg9GhUVQKSj1wAEPvBWyb6HPjXQQSArq4odeNy",
  "key21": "5WUTeYTS6V6gZ5SDAg1zT2365vbovLi2UUcLXeAo5WqayEXmZQ6MmzVV1LbN2Az2ay7nBqxaGPVmYZjbz7CkTyPw",
  "key22": "515kXhoNUrxEsNizQWzB894nyAF6sGZxbtf1Ht1N6BJ4Tmp1LqG2TQpPyX8PuTbJEfpHwsPGKyLuqaPxZP4dtx2X",
  "key23": "5SNNcbWUiNE7VsdRS75BqbZPBbyEJ8DMLrE5KVxXttJt4gyr5yA5oo6jRSHbwusmbtFy3zFQiyQy7Kc9VRseV6s2",
  "key24": "4JojUD7pi9eRFKWrhFJJ7yVW4fYrnL6eVv3QFWk2tZgULakM44vMmpKnmLuW6GgWMb2U9rtgaPAELfnpjZ6ixjQa",
  "key25": "2iYWaT63Ujp7huxyutL7NDz5SAQahWtB2DsDmaU9rmKZtYwcZDKVqnwGwYmvbeiH6cH7ZmRfPsJRjozvs3zh5K2s",
  "key26": "3Dyw5vHKRSy18f7aD84Eg3KDRVyohtNhQohhhAH1ojKpEyy1Z3i5ArqzPwUEoFQt1JVCT2PYeZ2KCxZyPqGoMyhr",
  "key27": "V44u6ubSKB6Joi5YEJDfDfwCeHYvYTxURy16ixnCmSd7mDqubWr9JJeXCTh8S6oSEmbLyKGLCcf9dth8o9mNW51",
  "key28": "4Lnb1sojjh8RcpbU56a3bwbuG2RYtHN9xGz6dZN5mV96aXpsedw6FRTS31Yayzcb59SXn4E8ouAoxr4x16ndESqE",
  "key29": "Um2u6WM7bAH7oKn7QbEA58dPHJVAahC1t1q9YNMeNYTrMKutw4AqX8CkHai8xjgM5BZeyn4Jn2KCLGeFLD4ixCR",
  "key30": "47xSUsr6j3eFSwzFq29SB6CRL81XsieNvoW5QAxgPSffepfMa2XsaJ3mdsyj74psemn4uu3FfAgWbZCEPtXtYxVA",
  "key31": "dK1E16Zgm8v1JTNmmQC6t7Zbf2rHb2d413FbwnR7kQFk9drVgW67CDbMwfMhssahMCQMG1zj6em597xPbZF87hK",
  "key32": "2qe3xff4mYbbxW98FxKcv7rBwukMX56LPsAXVNrFRm4UWbJHo6dsMK7gfVkBtK3Hr17YtLKZkzfurULCcdhk2AGb",
  "key33": "2Kuj59pUj8rvzjk38f3WqpWrj6YkbgZQL6oVxRVeoJZwKEsfH3No9foNZB73opRMB6qZyoVkr5sJAK9MLgpUZenM",
  "key34": "5zJdWZzLeTLsHgUCEUqQCoiS4bGuVmya94Rv73ShYhQahs2LYK2hzk5nNfiNg4c6ZNu3y4Ms7dEEA1DjY8opzaNc"
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
