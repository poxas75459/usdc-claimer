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
    "5HstmNeRgYFZAyeMJDVWV5eMTn7MegBjf4utZbaSJbJ1869TUM3pdx74KCA96L6WJXDfjA7xmTE9FWRgztLzUNcc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MmxYYiGPAXETrgyzjMjUPSV75fPu5gB2xArG2BX5SYZA2WycUVr5vQEqRcH1WA7yX8RPv5mA21x9bWzy8tNC7HT",
  "key1": "3EjMN1eXhL7NLpREhn2HH8WY3AxtCjmnNAe5Q1UJzVvsJgCA9xNd6ajR1NDw8R6A9fK5aYhFLJtBMhZXyBpYvMb",
  "key2": "4vVnCycU5q2yJeZuWhk5JrqGLbpWisdtApa2i4wA6gkFzeSSdwZSYbVa9X1o8qFBJQ2kHDXwBVrtPVgTymwE8KpA",
  "key3": "2Rs2LN2Poc6kNsbmnDsyQS6kbg9g1M1Jo7eJF71z25x9rvPrYgYWyMA7saKjFacwW8mpyZ8poLm12NZ5Bufjvgo",
  "key4": "3oCQ7vMRvE5AkdHEt7Lh2BG4xBtjB16aLXP7NyAN6Q4sT5oxHtZiQ2qadW6mR594U9xMGRucFfqQ4SPaqvjssF2C",
  "key5": "5gptkc1QjoywHGHVex7jGeXfbsinCCCkzb1fYgTVeE1J3dFJ94CpsCCJXGwmk6aGsMiC4agaFqrzeLyZ3nE92J4L",
  "key6": "P1hcb1xYQeT5pW9ULt6WhmJXxzXyT2pAYC5Z8HUdYD7xTbWo9FgmVWKXaD8pgXJSXMfC9ZXJYE91TzjQqX2PDJs",
  "key7": "5RSsFagN7NNPxDZc3W5oxXB2Lerqh1xdgDLXLJUXp3FZm8CLRpB4zDJgyaXLqjhXRAumEJUwdV5PiYXmjamqHUVp",
  "key8": "5mN2h1KAwxgexAsLhETq8fsYCKU5tdUo8fyGPUTCSzzRzqbBc2cf8ZC8Ycrgga57L8xzLoGUXTPWbLKijuqkRqdL",
  "key9": "3VmvHFYXe2p7DJvxSZbwiBKPd2ki8pZDsVNXC7H9gg8KyYR1uDW3R2jvjKigx7L1fbDPzXBWQxpojegXyhUt4ohF",
  "key10": "irvYxLReXkVC3t9Sa8wuvAL19141VoyFeKMo6t8qtvS4qcPcbDiCYo3K1q3VFeEqEq87NYQYWpJiUzTfkFmniVz",
  "key11": "5CFrp3tfVnPwtcgpFEEJDhdiRXtH1624eUYRvvnp7dDQ3d7jzjN4Ei5roopsZmRg6zcmpXNLD7a75EK8hQKUH9UQ",
  "key12": "5CdFjo9S2GtUCDffpQiGhUjRgKecvgKZUoZVEsphvN2jGRnXQ5jUzvt8VHWdf45WVaoGmtJRxR4hitGH7TEtfJRL",
  "key13": "4w1teCRTuqkaxnCLUe81dYfYy98suQParpf565rXzAb9VPvEQJj4rA64cENXauzvoa5NuuTC4ntPrxGapcgCYfeL",
  "key14": "cyyqBKVvkqzGnz1iAVdGLPVrUwa6927aE9t5jsySnAo4BfzuXjTNMZiRKZg5SqsMdSvEQLonF7zVpXZkra67Xaq",
  "key15": "5R4FYQxVU54sYZcJ7YhGXehp7KEhDYTVDNMdkz6FZfwRfkZpMYYTvBzUhFAxoyaLGxGgAg1CmXYq3vpZsjEyqeph",
  "key16": "oUnHAze7ZxjxktZjFoX8wK5sm531wpCK5Wzun3CRWsTsSm9fkP9yanq8Tz1LWbQAC4rHawiFbgLUkWwumwDuPob",
  "key17": "UfyecarNaxDXySS7KqN8ZNFxVH73rd8vGykpQVQfp4LJrfJbNMo9fFgKLqGfeAcxs3QY4LS9a1RWEUDMALPPLMT",
  "key18": "5GBZ7zqeudJw9BXZxBnFwVCM8oQRNmHBxyDLdj4Hq7vXdZpP7YY6QPPtpRDzwcWz84Ewj2d3XjDK9UXHPgFgftCu",
  "key19": "3GH5A54V9sMZwCxNeG1ZyN4yRS9yspKBEhLmec9vdccukT8yrbkpnUfn23eUD8fMMbFcPYR7naKcCX1qVQ3p4PNA",
  "key20": "3KcnqZDkUZGrWzQjKGXv1guFnKMu4PvTXpFG3JwrKTwuuo2WwcKffjdrwp5SzDfu4Hs51aMH3Zg4rYLMT1gRoGEu",
  "key21": "4SxF9keCnLuuvZD1u7JtGPgPd2G18zymVQv5FxnVUjqKDPSRAhfqW15Z7Qv1LgB7NyK8pZN9emxkbifYV5aCCS9j",
  "key22": "2dJhmWseUbwpLuFmhPFBEw2iQ2HWQdLUkFMb6xfFoQ35xFv7LTKzm7Ae6ASk8vxMYLFi9z5TzeVg7XNyba1k7yvX",
  "key23": "2fAuJvYtGDSrxj8bLMT9dTPYE92yVQsxZ84idbwoiVKdLarjmivqbEs9rEspRJtke3U25pH5cUhjFLQQrAQQsNqa",
  "key24": "3wcW2ZWCJgA4Ndtip6CV75jHXSTdMDuaYKjAZ2NK5m6PcUG7Y9QLYWpWCTR3BYLtUkgc1RFXARpwkBsWYFaEP4mG",
  "key25": "9JxTfPuo4p87honRwAJjRRbGyaaiWR6Zz7ANeNhp771oEsiKcPNyN4gCw4Nr255k9ZaHGABmh8FnTr3LXCaDHxx",
  "key26": "DA8ZqDmtKhP4Qz93j5uZjZTL2yaJkPdDLkFuZP4SMRGkjmKRxCHuyKkjYuj8o2WauRfV3mV2PqULDB5PgLjNz5k",
  "key27": "3LcfWJdGwbuTHCCrk92svL9jnoFtA7AfNQo2FdgCXVNd5BwWoFEP33g4cDLVAbZixb1HtZ5S9uso283HeiJ2YUWh",
  "key28": "5EKXekBnxfm8PLY2oSk8HWZKX6X65HFijYabgKri2mksM3GLSuxAQEcXuSN8GxUdrnZD3ZxgL8Umu8yVMzLPQ6y9",
  "key29": "2KtqUwDhSSdqKgCF5SDMN2rZgGoJJknAMvCANZZWxhZHpvk2jvMTcPAHqsCsAoCpbk2vn5bLcX4c3hnFVPy5gpv1",
  "key30": "4DEmvzyisdVLMSf6KW8JYvm5Hb6B7N8t2us5k9ezskujFS5x9CR6bph58MUfJySrG4YgySEUsQFKTenWGU2WG8QA",
  "key31": "2mRfaDewghAdzheRUce5iHmBPQNCwE8jrT8AsQ6wdLkjEFXpm6GY859aC8rKUDA6hJR4bByS9xVb6QnmUdpPSPDC",
  "key32": "3t79C5VxZxsTrBMzkuo4DUCQkXwq7NwtXJwfEksswiC95gSq7njvoEcjKRDuGbY5j9RaEWxbmefUuU25JbwkrRdC",
  "key33": "3fWexE5EKwsDWNgTas9DLo5k3uEhMhrmJGNwqWVnpwi5tDJcGFLN7GuGumPLAD2CxjeG18azAohjzKTWoH3TxBBE",
  "key34": "2qdDYZmBz1sMcvzb29BEYhRZUYUfU2LTyLjCb2tLNgtd1N7FikqVwewoNHqzkSyotWS3zS3fEJ66k3oSMWS8La49",
  "key35": "64HMuNAa2ZQeM7syA7Pptpd9BBt4q5PKqiJJU75d227a8HJR5jxT7crioZzdJqZNTHtcaCkot17Qt4RpMd2UDPe9"
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
