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
    "7gebhU9dteRtt7eQ7bBCiMM5SCwj4VQZeZHxH4fRHwpdMDNpkSjYjh43LYNvx4NRGcbobcKR4mqipy74DPKpzxp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TSVQWpg7oXYT21FauZbWvryDsu9kAGLyu6h4spgUY7o3E7eXm3H73NBa5PLXLwScmTDd9GEzKPCcxV29mkYZkgM",
  "key1": "4na4XNaQxb9i6zaTGft68dvghLouAJGbuymAa4gSZzDjZcw9wx85ZCJpV6itj47NRtTCLs7mtoYqRz3fTUaaXUZZ",
  "key2": "3mYGKVpEwxkJETrCFAqVY6hb27txbE1fCaG2jyntRKQhzdgGsPVJnCE2uNYU8MMq121fTrAMyaunCsVhAmubHbnS",
  "key3": "4TtmmG5gbdmkFGDB1iSNqctnqrZVdV513DsUaMF5bmQKG5spHDm7aQX3LrSqoJzQPcyDgDfp6GEqmA3ZjMfq9XUR",
  "key4": "264rabhhEiv9ZExdwurzTbJu9fJfvF8GjYHzwmccTZ55De2ctzk7G5q8hYEhhaXZT4wW1CQ9FqTmVYr2pRy5KLPF",
  "key5": "2g5azQ32mRQSoUyYx6Vy3Fg1sCxssciwnkLj4BxSYosCxgUndjGqga3QvE6xXKLXAzPAWhwstuqRQg55RZ3ZmnU6",
  "key6": "cCCDhqJTXFZk2ZAy1Z9VTJeF9rpUZVm7EpmLrSgcUZrLiRVZWfzUAaK98fgkNrvSfUGVUNm6V1q5LFoGP1Jto1p",
  "key7": "5CbXNSEGDJFeRYr9m6LDpxpNcCBVr2gWNHLry7vScnx9ruAHhwuG1NSs6zMoDpW6CSTSKRR4YiRjqmh1JSdxDyc",
  "key8": "3gD1ofk586ezGttUU8egVt1Hz53CzEsMjjnAGMxZVAThnwm7GtXBDqozP1qT1KThRS1zpyySpfuNQkKWnLojMV3Y",
  "key9": "gWXS3HR3z9jeV6nGj3GezQAx6vK3kJRRk2U7hmYjf9DvWdYGhT1KsRUuavWGyaneUvxEe6JWPhy6Rre6pBP2juN",
  "key10": "2hryN613d3vi7JnLoDDMD1527HQ29Y82ZPzS1YSJ5ZVSRB52CdSytV7fL4bs54U9dGesDY9gMSCgoL4Qwdro42rk",
  "key11": "3YZXD6DLFiTVX9pCf2e3AuHq2QWBcR1oDUnKcaqxLm6xq6bU3H1Ko9LrmvyqpD217PFTt6RWeXqSSJFwf6WFtkB3",
  "key12": "5QA4qKGDBvW5PqmGKugwyrUNxNsRUGfg6CgfzqK9fqGH1w8he8kNUsL2Ru2UP6uQAq73yTqRwdZ51mZEH9YzMHS2",
  "key13": "64RAT8SnhgKx1QpZZ54xnYZAjUgekD3u4dci7DD84YgpHYJEak8NPtF3bvrdLLGskVJCxwZcd1CnDEKtMefvcuct",
  "key14": "ngz1L7xt68PWxGkXAoxSG9CFcmQTUkSNgeUm5TV8QnPicTjVywyR915MRKkAeetudA6HgL9y5WRTE5dV5yBmT9j",
  "key15": "3pHgGfjnJtgnaVQjYN2VA7VmndEZKFgBkMLUj94pNZafshM56usHauGayqxtwiKFHQXTFuJyPBUejUJjDWK6nDJL",
  "key16": "ZgLCeFH4BRrbYCwsAZLa54AK2KjSbjcMXgaQ4w5iSTi1XgbSdLCkY93XEvDsosfWhAq29Y8e3RGyGZzn3jWfFzU",
  "key17": "5TrDBf5hVp6erXn2gLQ6R6VMTG8M9NfSc7xzfE1wCtbCiHgwSL35AfFpCLDFgJeKXDDoBaquzDeEdwLfiGCHqt72",
  "key18": "4jfGNZeXpgxfEdkaLawHtJHUnDQFQUQFqB8sA9hGoLbfiz66Y1AtUkg5mntnXxXYpfXgbB7uit376EFgESNjU4GJ",
  "key19": "DghZM32foTcZjDbDiQsayYX1u1sUnyWyS4HmeyixHbm4H2NC8nR8hRBbnomCZvgey2UBujs1B6A1YMKwytdkJHQ",
  "key20": "dWNQgUPojzsY7akF3w1a2hn9xFqrFLhy1dXRoPiDZwtmyxQVdXuy17xSNTDSs2EANfagBYeWmz2UthLRQNbitjZ",
  "key21": "2x9rEEK2LbUdkdXPHVuuHGhRPw6EiZfmKcPAQR7KkP4ZVb7kNagwCPPgSNczxzwPGFDJC5SJxyPrJBG9iXSZbqBq",
  "key22": "335tK23wfmtpSHtcVd6fNZTky7EZkPMJGW2oMR8PMdU6SW9cMjZPffUbxjoPh3QuQCjcbwC9EVAqxyDdk3czHWsR",
  "key23": "2E5bw659cyGkPvJYYXETRUBk1ta4AhSEWoBufmNCRcQVp7XocXqFzMPdgkM9xrwiHT8MuQ7kiG3Z5oueWEHAxzoL",
  "key24": "2i3229SdNkb1tYoT8xJqnBQ3oqcTAFuabKg6LpDm2SqiYDNYph3zZTKEN6Go2MZg6dZERNNRgosM2rXYidBL99Dt",
  "key25": "5vu45hEMrmsJWPhuPp13hkjcQXpGjYeUw8UVK2eAYDmgsmYYRrcTJjoo3W4vzSqwo4TpPwAne1HV7tjvR5ezwS6A",
  "key26": "2f6Aj7hjTfRkWJ8RHG4kAVWiErZwBwgaotCZ5mVLKCWgoCx3jSYAxs8kD1BKJUD1K89cK4Lpj3Hp743MgCXz12iT",
  "key27": "f6ZzpYG3TDJUeRZZLMNg6ZRNh4fH71tMMmhnKxFvvo6qmmiaGaAfi14s8qNtdwVfugmsg6fwu63v2tZ9Ndmvotz",
  "key28": "4XaxQzi2ukTTtNobMz9GYTUNYZYs4uHuzSsmMYrybRX2tsGA167sG3et5PJu1Ary1rmduD36UD5w4WkDodYTKTTv",
  "key29": "3bwNjKUcwgNxycxCp1tefS7AoDqE9ZNogwniF841CzQDpDmRuFrfqy56bEHpVNdqrqbZ11yavv77eGMHBTw8SLgE",
  "key30": "63yT5VL55VXLqoznRDLUi1zWGsdKi5NpmPvSEn8th5oaz2whYwnwhwAM2vkZn23hRJFHNR7kRur77MDcT8TRueZP"
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
