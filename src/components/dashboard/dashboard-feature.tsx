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
    "5xSPVuZqWCWsn8LpuVNQntvMcG54DJ5n4VbWw6n27rDxufLCcNqv2AVR5dsistCtCfe5FAqexFQpZWCn2VERE3uF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iAoBmvr41SWFFot4Et2VXPNDtrmwYUr9DLKkFnakHqR4MtdcKxh7kA6zghuhBGJfzJbn25groCk4hS8qY36xJJi",
  "key1": "juu9cLxxJfnBB4C8csEQLBSQegmyEwMjcPCSUDVNfQ2HT3T2bgp8Qz1FbfzZy6fgMbADeTQ6B7AA6b4FJe4rEdR",
  "key2": "5LcLTUEVYLLcnxz1ZmchELTUQsMw1LHUKWWVCWv4bFuAJG2QTJEURJKUkZyF3JmbyrNjVpcVDnqpf1bA3ZbJ533H",
  "key3": "4F9VeHErL5Ei22jHUhP81FD3wGNCZTNYwuJSGhYJRBpJwbeh6TbpBA1BJk5Y6a7f9skMha5KN6GBn7UdQskhVYRU",
  "key4": "2mn9cSfCULAuMmxBdm7dmqb8XNbZX78a1bebrMAzHyJkvgken1T74HDFB6reEwCg9D7xV4HC8gM874A1kn5rMuv5",
  "key5": "3LEjDoCH8dh2aUxSZtmd1CHHmMmzqgZLZAxp6BboL4Ugq5BYKeCDtd3S4MaaBKXig6N2i3G9GodSRGDGvupuT2hx",
  "key6": "39ptGcgc8Kq37USQ7JESpnGtopiVmNHJ9sAELw55GkNKjfCzeQdMeCzFV1z6AymTsk9vJCBxGHqKp1M7MPWnfZW4",
  "key7": "4Mb4RkLpaNuL1vzk4guMLsdXbftq9xLNkQ25TS7KQoAEbSacktn2C4eZZpoPpWAH9wXUoXzH5QQLV1YNcRmp5daH",
  "key8": "3PK97FyvX6gv8Vs2tQG9R8Z7cZ67czSLzqwuZ9D1sckMiM1hMFwRq1bUC63V1LEMMBGG4txwp9TF61SQxTMyKSU4",
  "key9": "mCrxoCVE6J8bpJ8Zg1h4Tpcn5Wst9P3HDrZowvDiN9tuEVsCAwuacAuJgEXTfBQMdyVpPQprXrJU5JxDt5c46rC",
  "key10": "V43k6BiwqNpd5LEB4GQVi65H9kzpBknzDMrAMewtumsG2JsjAwBBii1zv9VkrW1Q9brhNN6inGX6evo8jFum3eH",
  "key11": "2inusTSfq2SVtVsgWxjQ2WWL2vWbS3ZkGrdGD7U4nuvmcSJEDK8Q66d5ZFEZxUDrfZbYS5mHv1kZE4CRP1X4kmPZ",
  "key12": "5ZWb1QpEdkSXvjWSuchB9wru746sQmj8cn7Vvsb9JM7nkqzojL44qs48msTYnwqyz9oXtxgvHcpV8ZPnwK7NVCi",
  "key13": "Ymz4xQNUvEg1a9m1MBdb2LfmyDjmswo8TjRgG8hR6Jhb716eHiFNCyJCXwfs2USmQjApmmTkh5AU5xoXZM8RBtJ",
  "key14": "YP3CLgiHw1BJdYeCJ6GHk1RH5tY34x2mE6Muarpz9UgVgM3gMNSHG2MiaD4nD5daLXg9Hd1F7Zw2i7LLMSJCma7",
  "key15": "2nesNMNAa4FsxpFsY8Leyv5nExn4C7ViopaRPrMBYKDYVPabQif1Jr5ZiypD35t2kGGHHjfrUAy7emnk6Kx3CUoX",
  "key16": "4NJCUVPKSRUABDys2djuBZdEd4F4X8D5hk3wKDMvnL6DwdkZDeXPUkFX3JEdbGcK2Mbu7GestrDt6YzNEAXtNhTo",
  "key17": "4Vo3E6siNaeqMqBVi4PhJwz44CjNL13mZpLumy1hJkpwhMV8cZ3jGhhq9xdFcvwnnXrkPJychXARnBB7pfCjWtHZ",
  "key18": "3RvT7SfsJeA1r77sfXC1BmBzeve35HKcdGb4Z2yHvvddapRrsBE1fVJtGwzo5PQDUyKHrD5SLTyfRnfMMw1c9pAK",
  "key19": "5DJWPEArFbYWFbY2VeYcCzPVV3LA5mk2pEAJ7SSrWsyrEbVx6EqsomZAXPD3W53oxenFU2RQFN4ANjVhxcZz8nk6",
  "key20": "5J4aDLutZ8BYtaXp9M7siyczRSnFy1wTBy4Fh8wvfySDiV5U3ZJtk5gzuwUPKLRU1u8WeBpJpDdo9KZEzP9vFWRY",
  "key21": "4c2rgmU614iQrPbSGE2JBtX8Hzey8AUunSoNb71PPSkFDGQQsQA9B6Z6Pqh6eErCAs37ydjtMPFLpBuRnWwoo1iJ",
  "key22": "62MWLWHMAKVPsTFGJ2dZF7xZ25HH1WJQLBhmyANNv8sVfZ3T3LFKTLdqWraB3ZM39fL5Lqx5XedUZtKGArKuZXQx",
  "key23": "fjk2Qs81XLdmEysitNyGN61C5PpLRLiN58T4EvagVJ3vZb2TijhJCUVSNKCz8VvQeBX5uxaqBe5Gwd7Em4EWHsG",
  "key24": "SY3SuqxBBBVqz8VEKC9NyqxtcPW3EMBceVXwYdbCD1hv7uLF5PwBnh6H2zZrxBLzwnruiqRB3Gd7ooe9rM7hd5h",
  "key25": "mTjABZnZ37ppuzWJkvgE95HGH9VZ5djnYcSWtrc3PbyQnezMRncCWRHHVxSkeUEAc7SWUDza6EKKhPwfW6PgfgD",
  "key26": "3SSNVZGDYKKRNdCLNR9rUsQ1RpNvfzMwfyZ7HWTHHA5tD4JsLSsyAKf8EK6u6AhsJ6DMejaMNxFzRunHb6Ha28fT",
  "key27": "eSvTe37ygzaxB3YY2sFWpc4ysSHgVrFVgYWp63iJB4o5UzAT5xZA4mUmZCJEmpRMH3vRKb89ziKuYrnfToqFkot",
  "key28": "3vNkUc5i9z77V8v9CxbdbyfsC116zHCie5M8x1JejTb9iPe3bYRK2Rah6FURqGEiQ6NffS3vBi4rxXg4E9AGPCB"
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
