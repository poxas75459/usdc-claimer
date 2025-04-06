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
    "2MVqAiBXV152zwWxdnT6Mf8v9EdZZieqv3MQhh4W1qN5hY135noHg9rEbT8iKNa5vWjHaYfJcQncXYWjrVdSXHsE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YiwmE5cCJwGcF6XZG1KueuJvGfBRdpR5mkZsEdGaPDMPNVaE9TWvhJTFovE6v57pPfBtijZuFxRZLtcq3yrQ9NN",
  "key1": "3Cy51TA8dV33rRXtT118Qdm7G13KcVJKCdjGEjAjDGsEU4B95F9pc21L93SCfcBEQfq5BzaG18sBb8DWDrDbkG5Y",
  "key2": "3UYka63AsmX3iHPxPGE46buRpiVALrfKPiRwYxdxeev3cFS7xH4fNHRiQfjctpWKu19HDtyrEhPkEcomKYBcXNSq",
  "key3": "27XiYWSpwX4dUHmHyzzkzYWhEjp269DPvHVkCtF86FhVS9KD7qqwy28LSchw2AuSE4DTRMAtNb2jrkhZbwGKysRw",
  "key4": "2L49uuTGtrkPkUeBMijbKM1VexjpBKgcCRhQE5ziyW6gXaQnR1WhLGbFwQ9L7iBZdgefEy6JQsyse9hwZgz55vWd",
  "key5": "5mo1fWm2bzSYnb9gX7wZcfSjtpszi2oZsS7AeeaaY6xSnHRrwHvsYKjWNjPR7w7au6cTApBUMXiFzkkHpaKQXvp4",
  "key6": "JrpETCdR7xAeRGAVjDeoqo8pTtGCL4HVgvbD8ZmDZqzjpiMvPhMFPvYxkx5b9YPcpvBkwm4h3bEJ1Cisizy9GRu",
  "key7": "3SLR879VwD4235vphPC6jSmjbpVVjE6miUvBvHNz3Ea62SSFChA7qET3nvX1xyQ5xwFUBBkhLms3GRbskrJ5i1Pv",
  "key8": "N19a8YMixDVjY3FJPm2AvckHt5iXMVm7tkxvzYi3c47tSzu1JeziTMmVL9PHcKzCVsPAF6FL1s22UQdVCKwPQ3B",
  "key9": "3hzp89nNJwhnf3W3uK6xf8ore3q5iKaQrPrevJ2EnC3WYqGhCG5D23EtqnMT7peHfcBH4biTShHQXbkWAjJGkGeh",
  "key10": "Z3nZ5ZdkxZesZ77kDoM4FATJ9bjUTxgKzXAdRfbRcKHmR6EVZ6YmC5DYAJWg71w1eKns1Y7qJwNTAnJbfabVvEe",
  "key11": "3LPtwPWNQVT3JWAaYcoXD8M9wBanMf12whBgGbF6DoqBJE1UcQ5CpEAX1QxEbhUdz5UY5swePp456mv6RDmb3tD6",
  "key12": "4k17HmSLhFkWkPdz3h1VWfMEWqUrh1bz8mDEkaEFQ1iCbVnrBPGHsxsGnYBFjQAhfMA5Cd49B58qUgX7AkhNFSAo",
  "key13": "4jsCsPayRy3Jr81xpkz89dkbCWPp8nZUmEqRQ2WUSgbNZ8RMTSHvGfL7QstddQ7ooFnx59kdggDbffCPtSavk6YN",
  "key14": "2hvKejGTpGbN3yeSuTLgbwXMHt6NAmMEEzaBo9ZDoSBR5gzaDwmrHL7soAHHHpreLdJdkpspKH7vQ3d4yKTEHcg1",
  "key15": "4ExdtakkQ6o5H3JnQnDBuuRKaauzxgyBrdDuiw45QrkPZ3uYvYFPVBKtDUWCuKJD3vy5jHeVrkgZiJHpeKyeHCqy",
  "key16": "4wDdYWCq64eJaV4SkjaR9uqbTniXMTsV7TyZDKKn4McTmozebZ8kXu7HCKBbkTYr1YFNwDC4K6Tzv2HAbHjH4P8",
  "key17": "4hQ3YiwwpfCqkBsqdVocjHnZHjf49RA6FkrHC69Nt7dpQ6GTo928M43upPHo7U4FnxTjWyB2TnwXkDqTnKNzYQQK",
  "key18": "4jMDmaxCRUpXyVhvL4MoVWdFST7gvi3recsCagXKW2Fc58j5ZweasZStkmwKKRxBx4d2ZU4HDMyVHenWdfeigePW",
  "key19": "4b2TMBKLHjPfkXAGcP4EDSbftbzoJiqWBKbuoHSXvoiFuGVRJmhZT1RseyQFG6uSXzMEWFpDRnutdhmKUxJuobh",
  "key20": "74yx9FCNMVmuxsGypKtLgNHd7obtXrfiRHtrzrVzkx9fdMJg6r6wK5n5qnyd7Tf9PgD49yybLScfXZKTt27NDco",
  "key21": "4TV71SC9akVBKQEcu33rrtK78aSWd9YpYMjeqnXoXcA4n8MqbWZMyHxqZ7JbxPahKPEnEgEjWcBECP77uCGFsA9f",
  "key22": "319nQzt1vRvMWXpnVcrB9G98URGpbmjkHuJu47ZDaBUEVMJxGiPHNmyE7PdeFxt3Cm7CUiDE3VYCsLWdfMVDAmYY",
  "key23": "3nd1JHuvQeoN2bNoqvZvAT2aiqYCR5k3Bfy97yM7JYgpfDqerxUMf9YHfLBKoH3Wy6VksA35JnfkZabfZa9yXL1Q",
  "key24": "3Uvr5yLtV53sR1YK2G1HNStx9X7iVEunCq6wSVBDSBN8DjwtfQaSmV57HZjc2AhcVawVQQkoJBA9xjN3exZzoanC",
  "key25": "4aFt2i2V1G8KNfhY9o6QjzmovxtiMaZAEZtKQ1FRTzz5NC6HttCkX3jYdRaudNySU333dGqh779dQB6vxNXrGwGs",
  "key26": "xNcToDqkcAMHAGW5xHhXBWiYUU6uXMGaAQ4mutgh8ZenWoky3RtDH4G2a4Xu3U6vG9L6aSZmy1LM1FJHn6uYLV4",
  "key27": "bYpDiTU1ZNhVZbwgaVtNE3kuAe2cSa6JXqS7pPtjqpJtNyjyPBvQD1Pa3ehLJLBT9duiY6dLjafVkYbzVoD3W54",
  "key28": "4VVyhUQkZTrTXKajX5JvnTGTZKmY16nQomywV2Gxgyp8YEPLctVbxUodZcExPyys4p6RArBUHHYCnaCF44gXkyoG",
  "key29": "5qeKmCtTaf9oNMHhR3B7WitseaibuDhvjqED8PvPsikLXMZ9cohRzpnHHtXDicbVqAdxoWucS4YiWk7uMKyFSWW2"
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
