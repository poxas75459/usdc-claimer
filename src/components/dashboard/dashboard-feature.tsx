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
    "2spCWcHUHo7X7Ji7awq4NRg1oNzZ6vjkYjfGdb4ZzhDoaRhDXRMLxLiv7ecmTZ6w8GByaM9Ki4T7F42CawMjVzyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ViAj4tFcXwksntuNNeBjUfPntTGT832e7yuZgRhgprCcPbWncsBRWdXgngBSmap4zCvWmzMXsFgEhaKc7c2xgiF",
  "key1": "2sTttvmKDfHPizRx4QUKjw1LeEx6iXfsVjB9ZBKF7JG91CzebCQjKdSGRCeQo1gZCB9SasdLCkme4eFpt4uErtuk",
  "key2": "2S7gCgc1g8dxzJTZ2Ltj6rwhZXNTcDNSNekkcFRBGWiLKC2VGAFeQKsASKBcscTCzQZtGjJsA9MfdqvFeW7a1iVk",
  "key3": "5UxEWck1Zdp9UVC98urExRFVUWGsHZ5zcGF3Ugv2zmtrZCaVJFLQKwfHWyYo62qyy34Hp7Xwv5iVJREKwrN6MG78",
  "key4": "6gHc9MBYsRJkJJrE3BLMTbb1LtuaTTmbzBwZoga91nY8uxyBuJ27BftFpVxxsxhPdBfWPnaG8ebDaA3rEA8YPoN",
  "key5": "4tA4rtN5HcJbejJ7hN6WsKogN4o8bDJDb9ZkCb7g2ENWBw7313bw5KXD9dWiDcGuKqKwFmKb79GMH1b8U2NrK74W",
  "key6": "3BzAYsQzHpWBBMfX9fWA1Mzz6HAAWxsu42jcJvtcqtkjbhhfyhaLxhP9wpYS9SvU3gTmY1jhL6SmDM6j9ax5puor",
  "key7": "5EMSQXQNFspwq3x3ygwgy7EW5AKUCtRpTmdSKjN5TMmV2ctY8StJafL19fXx1nJfWxFqCub3rCH7GS4UDEPqcUo1",
  "key8": "3ewTHqZMJ2Zg9MrdEDz76JpmmfEZnisoT7ehbmkpCT5QCVrg7Zj8xoBQnT4qPAy4cKk8hitbgyb8MayqceiAtof",
  "key9": "5ZQxfnu7pKjA1K2nMEfqAfSb4Bb6nYDtBZHgkeG4pzM6jnGPkUXtpARshAx7AzR5BRUy98kkTJ9WBKuHjBuX7MPY",
  "key10": "4SZ5HevkM3xEvr35W1J8xyvdMTSm5eJA8HKSetF3qh2NB38YcAGMPFGYeRw2rgMcsJCVLbUv622rfa3zv1hVaLTn",
  "key11": "CRC7pLZUdt4SX6kQddswJWakQbUZrmMicyN6iGUSsKTCnCPBL1qnBKUGXcdJEdhiT8yaxD9tz2jLzMDjdx8eyVe",
  "key12": "4cim2c7T8HC8mok6Zf69NBrLiGri9F9XhcVzm9QxTxq6PV1jtT6PQdtwyg2qwsbDwWzVLy8uVUNAPCnXHrdmfKyE",
  "key13": "4sU7CbXKZNwdqB1CErF29dPdtKR8r54wgUeXDNNH1MXaW4qp2TtDpGxdPYtCgAWcHmZn2ToRREacpB4UzjL3iuV9",
  "key14": "4imrjHpA3jrSPXZSMoh82r3GaD7f5WaJGGHrR44ssGmsmTY7jZAevE8gU7p2r1Ycq9soRUzXnGsamog47PAhxaJX",
  "key15": "C2vgsEm624LS8vJiUaUPR3s7H3iLu65tcmyqrkYUWvhHQq1bmc3iQSRBYyeE8Cv6Gn8ZeQdWP59wh55BMAeCt4E",
  "key16": "2YN46x66rhnnmcdRBxs7QS2s9BStFHqnSjp8qLinWu2D9HXskBxYG593RAVfDUE7ZzEjRefuru7Fx8YtUuNHBsb2",
  "key17": "2z57Ykyj9xvw31oQ7cYRmNzSpEghpB51pN3v9ZnNuVXPAThDjHYD36xHGcxNYQxHvCLfBebUiRLwmdsMQ5eCeApc",
  "key18": "3RniTVViVzWdpmLhAyeSRJsp9dTYtoGqDhDXic5on6kr3Uqy8crpCzPknD4HVn7HxTVxfcLXEtoQHHiCSmnLRF5P",
  "key19": "n3UeWLjoaYYSX9EKToYR7EynH7CxYtH5UQwYhoQCJnv1wgDox6XiXS8iJwaGtbhoZpnkMjf3FWWEeBbytSRKTtd",
  "key20": "5qpUNZPGE8WFhSV55MNDfZCaQadczFpXsBfdpceEibj7vPuYb6Ef6uvSxaWrwSNmAJKcQF8yXKvyKMEQy8nhZ4FU",
  "key21": "5M7PrB4Z2kqmjpTb32zpbFFraHDMyMqapiLvMGa9kHhqeF5XZYeCvwvEpyxTSxkfkbmX4fFrmSTpW8CdL9Avntgm",
  "key22": "GexhZ5XN7ZNLSnziiZWAwrzwkdsfDXCaBRwrH3MLmdzpgonusEpoV47qPzQhFTceFFBVApDfJpoazBZF7VW18bK",
  "key23": "5iLKS4XM5YrmFBjD75feneRZRQUBDPYJ3yta4vGwi6nrp3C7dFtYq9RFG1c2zgx9KsRdkm5aEjHtVDoDNj2qY9NX",
  "key24": "3TjJuBZa4gbwGJYM5k9rR8oVRYhgHLAzVJiVS8LDRViSAzyXWQ2QqMcHYhDjshsdjG1LhJCKRyD7gbFeL5UatzhJ",
  "key25": "T6xwvUjxksdXfR2R1dgVhjwJ2NPFgq9zuJYb55YHY3984DJTBAZPu3aYk1rVTzbnf6vHxLnBrb4ZkL62TRBhgqe",
  "key26": "iehQFWLj78C1piaRd8vRgCo6wCVAkJAbqzQppmmGR1aVuRWETzbCnGsUv5Q5VMBbJBSKVEpEsuT6gaM9SBRkSwa",
  "key27": "fgbk5km9JxH26SEGA3W8MZJxjPn7VRQFWJFASSQ9G5dz8RqAB78KwsnyiDy41RsrxhWrAekagczcoSbgPB9bNmB",
  "key28": "5tPdMy7wqqe2PugX2ixw8Gu2vGrNBoJVWMBumLZSqrB9xS9YKwNfSV29HzeuWLGepmRsSi2A854h1rwh4kc73CjE",
  "key29": "4UM8ALqjrhqKTHuAzaHvX67wJF6nzd8knYarwH5eEzxuvgQG8mzEcUPNWpGMHokaP2L8icncU3zmfQ88kn3MkrJV",
  "key30": "5rBdw1cSRSaLLtTXVwuDSgNzVFMG8XanwgyLYx6gugeZAcH2CmXEzdPMMzhJ4wVwwr6feWDbdZmwYyGvF21mskMn",
  "key31": "3SkWdXoYty5BodH8coBQuXQimuU9yYBRncckgeHsodzPgQw6sT1QMjebDuyYGD1Y4s7fjzKZjEAhaAGpcomHKnKd"
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
