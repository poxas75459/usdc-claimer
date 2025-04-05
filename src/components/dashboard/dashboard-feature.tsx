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
    "4xhND4s2Ltecwmx3DMwbKPpgBnpbC1WdVYvW7rNzUZq9zLeVVLakWxh1kHDfWYiKBwxVRjJZfCkF178YE21iQQJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zefN6VYFyivRugCyzZZupBtFu8N9heKhMjWnbJ7TqmYbZkRRwDMtDxBtKn58aMY38x3v8Q7PZafY3Jo3nJZT8gC",
  "key1": "2evFH12cftmT9Yk85D21NRHEvQ6eP3K3W8f3UbhzKZ1nYDEHcG4neMnjrz9aqqBjHn1RtyWgByV7C6gVSMZRtWbP",
  "key2": "ApZJFykEKtRzTPaALhZp4QiLtwwjQ55oEzsnNMeyCgX9hWEBsm1RcfpDcAiPR9pPzv1nHaPZ2yAAs2VZwNLxJxk",
  "key3": "3FWadxAg1NshtTeXjRUQoEPUP8P8XMu4xPJEu2aCphMai71ghKo7GdbNZFSE3qYHDfqed3w7t7xqAXnNEUC44kvs",
  "key4": "37kMz1SWYyJGEzTMtQHtNTHErAETVadeXLFw6H2fRrEdqEC1vS53NMikmyT6JHgUFD9Yz3LTVXUHYJfkVu9SbZNu",
  "key5": "5v9rQ5Hvzv9UqjpFEjbAbqGFVMh8Br8cpRoYucKdPqUsFgQcyU3r1eJqTit2kYmHaXWBeFeJTxQPWDf1ynDzQqeC",
  "key6": "4ArPWUo75pT1eaqTUVtcvZw8g7Tujx1HJbWp61uwkTzrmkc33z171VkM9DwayitBAhqVZv7nVprk35uFoqBoNjbr",
  "key7": "5yvuFR6h9pBfjmyxuuA4ugjfYx3hsHeZ8j48GfJZGeQUXoFoiV3LwNmRNLQReN1y955AEJZNgNfKLa1E2XFxujBw",
  "key8": "4mfZAkmNYT1EiXGKzffJYyo9cnNm7V9nT7Yb45UQAhJB4ixdm9KbyXfaaFJ2UefVMjQrKaHp4hGzadTNa9CqR8Ss",
  "key9": "393g11uszZzeLaGoAcHeUPkPmAya4anGGRo4binqjNchkuXUhqRbmFb85jz5PZCmA1AedezYtyWkvPhgJchXUasc",
  "key10": "5ydTCqejiBxZjBpVxvvA9sB5EmwuimWXcdWaXF8NmqmQuRYoqkyTdUCDpUKAiWFA6PFjJAdsQc9eH2j2kPiZW9VA",
  "key11": "5FhzAQ6MuFZ8y4E5FfGmtf1a8GpcgncgqE1S6uYbMiyAXH4TRxwc2z23Q1wdPyHA7hgu5ygQCE2cmF67q4VSf6Kv",
  "key12": "2feQCHrnsACqTY2FobZJyPLsB9ppdoUddtWukBm5GdTypsbXq3ACm9bqY1AfCdqrfisXA8vBf6YH7AbHKBWoLEtE",
  "key13": "5wrNHAxVRFn8BfEioDJjKncENcmXYgGQq9xTimMhXaygW8bZvxGsf5Wa8iwfkTbcUs9GvPET91MppUYcp1j8TrDo",
  "key14": "3uptjcesS7MXKv2Q3KmjxvDwAcSnAB8bhWNAkgY7LMZ9CXFmtQ4467gJLFJG1edZHKymsagq4yyTAiH7Nq3p5ykA",
  "key15": "2PjdUUgXdDtYgN473WCz48xGMVqs9Y9WwazKdcvy66iJmdR15Qz6aAVnciChqETsTRSmPTgBjcBgz6Un51YcgShX",
  "key16": "3k1LLQ8KpRnzywSdmtWdBcRdq7qL8REbmtn4mkFBG1UdZYDQfsnCVbBorrSRMusnU4cYJqtrQJaLat3Bp1GPmD7x",
  "key17": "2Pen1AcmwmGYaF29Fpvi2CYSK16hLmMTPXwKCwyybhhbt1125gCUXeEmG4Yfqv8X2AeVyjTtu39sFXN2Rh6kQEaq",
  "key18": "ppDgcNYoJo3BnRmh9CZGWYMMzBfs2Gn3xuY5h1eZhAQo6xzcDczrVn5dmUbNmymCsxP3GnkJpUuKMTnNheJLg6i",
  "key19": "29JBfVwRWsWy9JRSBn7jwsx5YdhgpsVDf6thNSaMTEWzkNxCHBHz2KQ4ZQrmXBBCiVByFy67kVxVUz8Hg1KxUGTw",
  "key20": "4ttFGgHJefax2yfbZFBdSSJ7oSnLm4K8WUpbHaMVRQcWsoBVLgoSQFb7XxzHfnHhVkHLVV4QR4U5mzAECygSVbCK",
  "key21": "4hndWtfqs2dEVdKKazLXS2TP8NGY8yN58xT3mPRXWcxUpffjdv62oaVJsbndwPiQ8w3dcqrDPHCm6AsniruEmBBd",
  "key22": "mg35zivgGYU6pY6WnXRDVuAdMdWfwrCaGHzE1EyZuZtugdvugoctjV2afFTfBu3sRz1akVGXpLWnYrkdhEbUDWb",
  "key23": "5hvAdqcwwDnecwTX5yaYHEERqMoNgsuQUtDZ6vrokWLKAQWRV2u1YurBHAd98qkv7UxQM6zJEW2y4bsq6mxL1Kbj",
  "key24": "57xxpyZ9cFAwtRNeg6KB5Txbnij8hqPnHfGGGz1Qp78x8BUnE7ZGVjs9TBmrwEgQf8HDV2hCTXiqBZYVN57gndQ6",
  "key25": "5cQqAkpGczjVunqEvoXW2onZXQnaUYYMMqvrkQGoUhdFu8ioFNZNBo3dhkpMmeu9HmXASGJiDMuWvE3M5ZEvqBhm",
  "key26": "3NLxhH7BCe5vXFS6P4eFLDnxuBmebq1yGjMexj5EufZNtJsFs2RfD7tYcqvVtNT79eDxtMpRwDTLjPj3EeLnd74A",
  "key27": "3tD9XBX3aGXQVW3jdw195BX9iLRWLYT4S3kEJBxSTZWMMRH2WxSMzJcY5tFLE7wGMuDQoS2xNBeSCLdQDcs54GKY",
  "key28": "4HvLqSRMFuScoqGgtSpGKVyYRHxB3ZGmUBMaoGb6KgqXCtLzWzLGxRdgyYAK6ya5w15CBvRTfN6Fo1JzEwpoQf5Y",
  "key29": "3LhYsvCPR6RewADcdnPP9eHQTxSPaaWFgDQvowG3X7L35Y7uVJUygaqpGmnJ2KA8c59vNg7uoe64gSt5R4WqkzSb",
  "key30": "3unEKhRJjcoNo4dEGavw9jP3SeavLrDqkB7P5xhxvhZgf3KQZCr5Tuk6542dJTkfN1BzYDJnZWmkgJjRG8gggHXe",
  "key31": "4a5QirUKsPvigMct4rcYxx4L51UDsYHShxiJeCAvo5gVktgPe3ghkYKmpuVd37SSGuTzQz8zQXwJgxBVTxigDkNq",
  "key32": "4R2augJKGh5YWmCAmrTWod5WvS4gTbpFPzoteTSgy6xKYjpGdT2ZVSK7mD7HrFHA8z2j3YRmT5nSCrKwLHvTb9Ti",
  "key33": "3xtoLACuji862CusgPyjWxCD5vL4DUKSFAtmvNo4kGv5mXuReFNXhjvMJBwR6J83WuM5rvGoF11erXJmNkmUdDuf",
  "key34": "SDeTR5NB6Ubv5u6pk7cnDj2n8vLkEN7cy8XAgrf5QQibCByJBgPX4ozATMcykAiarsC9n5gJLUx7MwtVVzf4JDw"
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
