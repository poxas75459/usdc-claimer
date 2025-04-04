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
    "4uHWe4spybvuefgpFcyG9VTZgvDBUTtobkPMEb6ce2LppLSYnFnS45J4h6GuMpZg21HZgkWnTFYmrZT99ofCgjhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x5cN6rgnN3JbC6Z3eqJa4C1F5nTndcZvBpPmMzKsjrAcEwic7hqXoDRboEN1ed5jbTJzEqbGqrUW3auJdByx7Gp",
  "key1": "2kk3AvUchEWTRSsgnWbePVzPqBkiAYrtBCo931dnygiBtKj65CcnWGVrpSo1U2UsuetLrKeurcekSmwbxFsS3pFG",
  "key2": "3LnQxGo6JfxqdaXQm98TUZ7tQY2JB6RhSh2V2C61Q4tTRJg578HEkyEXenAssoRntwdfHiuxhyrCMumfUk1QELPD",
  "key3": "3eyT7xkbR3PL9puQHLcTahe7HdKuBzAuVzXbZc6t3kSSrTYec2V6jw2XBQj8QrnKrtYWhgaU7p3HNwNeGmo4eC7u",
  "key4": "2iQPq78GbvmTUYS17kLhHaD1n4v4tp4vcVyDawd5gAvsAZ8H6H1zzP6ieyx8dhT92uj73Y9MV3k9bzbFAaNPCAxY",
  "key5": "5VTwND9r7Xj8zt8fc9FBrThAJME2tAkB87oiwdMrLC9pY6rM2SD3xKia7Wsq9sMRTLNs3uA16Mb1yDwZ1nCYDmUW",
  "key6": "4b9SL8Z3Q76DnhVwLAqvsQcXhFHxLu9tLP6MYrjkLgHTbj7ABv5cMQ3gyn1VEihbSXbXkH491n966HLrDfE3Vwww",
  "key7": "3ytEuMbEjEXCL7kZxLjVQcYZHGZ3uw3XhxsT2wPW3gCaaG9sQawvmdDZLkveXMA2aEKkZuHa6gMQhGHhvsSUgtRu",
  "key8": "3qKYVU8KgBr7EpstXF9NXvQbrECnpR3im6YShHT57CF7ULL6iAXSsoYL6CQL9y18hUAkuvsiEuvNDB22D1o9JWf5",
  "key9": "3AYiWfjFDj6SJiFYsb9aA2BS61f3GfzYi8XTuY2BUyGdYDr4Mr4WwccATax6rGyLaz88QACe8kH1f1YDMF1v75zt",
  "key10": "51BBMtVYrVehgfB4M8qnyhTqK4Euoc67AoY8p138XTBthq5w1eewQv3nkkhBQQaVmoffP9hNEjTjKc1woDLhtM9e",
  "key11": "4QSXWDTVsCGfgwtwnGnipNbr1yfvHDiER1Tkzpxp4eUqFTaUu3UJvoEru1kpzxi1c9bJSBrFKJWUHEwgL5pHQt9S",
  "key12": "2Mnds2T5v13mz83NiThq57HqESQMehC6tGfHP2exDgacoMGga92afxPpHG13MGYLSPshwfvtUXvDRtZ4rtyhLNsW",
  "key13": "5G4VYPatRYXJ5RcyszwuUenuGPMmAmLHVAVCiVcHDxaPKGGk1d7NCfvPcFNKUrWCi5zRFNZwnvTnPLyhgpmSPvYD",
  "key14": "KMABsFJ9Sz5qt1Bsfkf6SeZTfPqq6mhb2MNjNjXifxryiefqie56atdG7JwCxUAZKreT5kFqaiCbvUqNzCMza8H",
  "key15": "2b6X8v1umzjDDU56jBDp1oyvchqTVX4NjAM8Ebv7YGtaf7Tj1iWAZYyGWaQ4HfUTxBNJkj9VqQtPVnjD3MGz9pVE",
  "key16": "2TeHBJoVW96eeRr61ni1aCMQAwWRkDCVghtAUqGTNZm9oXCzjbvzcLxeRmiBpB5vBLjpnGCmmcM8jwV6UzWK9296",
  "key17": "4NSR8gbqn7Dp8coKhiYbqqwNzYBCgFoqbdrju8VHukwUYgZGsqonRxq4jPPvAtHnog63td8a6NuwwPfcwjkYhEVh",
  "key18": "4RoKRu1GkdF6pKcQuEngcppeWxsr8gFTCr3k4PsBQ1Ss942BMjxXku9auerDhTG1X3KEbkZPQ177EZUSSNxEGjkp",
  "key19": "5AvawEkd4zjYowH8pPZ3ADrrC6qU1DJvHsMTszkzEQDHt99SofkXL63UraHFkWn4NnEyw5ZyhZ36qa5pgYfZkgUX",
  "key20": "5xCSw8GQLLUuepZijdgwyERWud5vvqBep4ZsxzAqzry3cvKFfGEUCKD6tvy61vfap6FUW7jwWurn1d7Qd6WBdzyi",
  "key21": "5jZcZyPftD98fgQpCwszEaR8MkxutxH2VGzCUTTexD1d2uMhVjYcF85wDJmCTFP38CoaEFNwmjwu9YPfsTckLkrj",
  "key22": "3qo3dAJmKMbRgcDAV3udfRVzgLJkQGruzBnM6VBiQdXq7uVR7Do9GcUwdARyQYK8fYJvFMkw5jxuHxAB8Jm5UkDQ",
  "key23": "7XKExPxXCU72sq9mUJ6SS8k2nenKmiMD4sw7yaTfzKwNhppXoJGWtRVEcVXEQSzcTFz1M9VUrj7ufH8x4Q8fLeA",
  "key24": "4oB3YnjDGubif9MRrnNdQkvNDVbwpNo41SVAB2dJex1VtgeVWDYhu1z8QjNjnFaT4BywMioA8h3vNBrf9FCEZktU",
  "key25": "42d7tcvGqRzqYCHTbHMBvBqLagQqe16Lei9cbeGHrUGN1wqfZZK7gRm1SeKZfSzYThCPtXToMtH3umvVZEw5sCWh",
  "key26": "5VV5cRM5VEt3npHGr3HoSjg8MZDYNSkvkTj5ETvQ88os75a8TXBNXLjFXzwkhDano2naedAABhfWBtcgCQ7d1qpC",
  "key27": "27zDfHL7L6NR9BxBSgj5DCKtcPatuvyiuAvz1Jai9gstiMDSGc6bQQyVfZYnXb54kEJa8KmyxYc9tjrW9mGeu6nA",
  "key28": "49gKeTsHk8ekR5PWnj5wdBby9vuB24CEU7nVHnLwD52HRV4Qo1iKox7PXNMk4ArU1kvqstwrv8rePsitN4ywMTc3",
  "key29": "5dZPjDVBhq1iJWwioJPHFii26aLmwk8W3FNJgiWdnCSmnkjjRAfJ7nXWLycjhreSTbi3Ft4CtVTW179RMPfwHzUb",
  "key30": "3K6JysG4LnpUGAeVcpwGYoWVn1cme5f7Du1N5QK6M7C5ZNnJ7PeJaH6WvpJiBMa8LrJiFYWbHfYs1k53eXahuj2c",
  "key31": "4ifZJdCvdsfWHv3N7S8zpcvknNXfXx3q2MPchGH4Ue3ouyovhjv5zhmnaMesBZk4qnXYFwgEsFoVL29tnKeLvaAf",
  "key32": "5EEQE33BAPRypK43q8TS1Gfu9VXWHBKAuPmNM2uMiJ6Q9FVwtGwAFJJUX5v7ePJQ5P1zLSmZTMXdp8UpmWWUg5zV",
  "key33": "2cqpPvi4KttdBcnAFAFS9Mq9onH4hcGWgQ75fRyUWaQyVdGhyVhpaPyTAaqB3TPU4t3CDxi7bsR6VjbXxWBNam91",
  "key34": "PPBzXqYMUbdKizHxuxDhgwgZvE63sTj4bVoLco6BW6s9MFxCSnvAyxaQEmnYfuYNJjFSpSrmoXfKarMkd12MDhz",
  "key35": "5b4VEy2FagVyjscHpKWay3hLfj9KekFGXcFn64RoicHy3ciwCD4CCMi7GdgufBxtQhYDbMnBxqFGyPQj5sTFHNUT",
  "key36": "286yfPm4VSYcucKMKiTPquCJ2pGGqzosj2ZyNe17WN3AQ1hwfdioU7G3buwVTVP2yS2u5QkHbBRak3eV5rV4cdJH"
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
