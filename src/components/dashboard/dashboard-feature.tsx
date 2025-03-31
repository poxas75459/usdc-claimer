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
    "5eZuW8t5QmaGpAnVLxazA6vxEEuQcdMpKr8D54LJmMzUBK2H5iTKcYka5RbVEMTTwi95aP91tqJJZWN7cDpr8Q6V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GLTgsRHwjo2QXkHbExSMEKDUmAZTDkj3n3ZaRWaEQMFBpniVhQX4itb8e7vZHQ4gP2hABF4Nz1CUR1KpQCrpQrE",
  "key1": "2epN1mDJU4ttVXXLQEkK4oZgDM5fUTrRTc7cFC3YcDmwyqBapY5zHacCQbxvntih3LpkzGHSpQDMcxQPnAh87FEi",
  "key2": "2Fr2wNybJpCgR6f1xrU6cB7X1xAagpZbSeWy2VoAQcfwQ43uMJs6U3NaNmaKkxgTU6pwoLcTwp4VZBsmKF4YpXLM",
  "key3": "5WZSygsqbXphnKdHFmKuRTJetKPvPsANfKVkW1yvrc1Rqk79TjRrr8WUZgswHtAkAABG1PshGqbNnAMhNrXW9Gfr",
  "key4": "jNKRijfKZau8BdDjUdY2qndqFYnNSu2PA4S8ecNnceFXyURwR7NeKcStztQiZ1D9sprppDpDy2ubwnyvhuHrKJ4",
  "key5": "5mvLzBVAABzs6YGmi8qf66T4rz8vMNqro9CKxL8Qwc6TiawFDdCrR7FSKWXtsuD6gQ5LYHn9AV8LcRuDjkCK6uxH",
  "key6": "7pytxxRqNt5zfEeWz183cHtHE9aFkLmWyuEB7Fp7a4iaEAng67mKUnpVjJZi65VZmM77RVQtR3H5kLCHrYV8dCV",
  "key7": "3LffL6AE6uW3iFBEdmrVQq3VzXf9bzfL4hq9qnsN92frZv3BFkq32icULKrwMMSh25bfjjbvdt3Fr12bePAfvR4S",
  "key8": "XQP2ndYopYFJLbd1z2c5LozWUjTnS1AD1xvSVuxKj55dbVkbLGSkrVqm921T7DkmTP7ERMftN3HuseT3iYKapuN",
  "key9": "52YJsZxZBBShLxVQ745Pu5TYK9EY7khJNLKfwMzQyVprMJrK5ReNRKME1BrwHfq57pejX8YCrNG8WSGsKnvPWRbH",
  "key10": "5YcGXsQ3Ev8Ej5n6DDazHBKjgVtVKJxf3xyZmYaCiUfdBETTM2HGvdTENxvb7GHNeBGUvRA3MnUen7nVEAmA2SKt",
  "key11": "2BYou1tvx9U1sBEiWciXmJYiLACAreSMH4NCPwyJY7MLzDyhc9FBbBsoLPCPF3Sw6f5BZLynedrCpY5B2eovzeMn",
  "key12": "5jtJ1zvrDyf65pcTbbzqk1AjKLnToGP1NDs1uz4YeMRRP5uvvze6eieyLgNz3wx8A4KXq2RFZBQe49anFeDYJsvB",
  "key13": "5uZviccwxqn3yfoshfcMYnETM4kj1pHkYGRgQ3qZdRuADhL2Qr3DR3QffJmA2QWt2T2gCdNW4G1qQ3CqVmRSvzzB",
  "key14": "3rayZgGfxpimWzdvV5kEWQoEpGogY3JnkZEM6u7mq97M2HJrbwejYPhB7kbTsaoFiCEaEAdhF5H8MxYBAEV1uXGP",
  "key15": "NbboaRNT5tTJNK6zRj4PtAaHvw5H4uxEYhufUM8BZQqrLEH9p779KRzssBRwsVmPMDtrF2L7RTV2cDH14543UDH",
  "key16": "3BckvpAuV63vFBSSu4RTvhxhPECTaoMaVDGEf3fG721PYZbv6xNo4qxTiWqnTndukZo61XmuF6p6Qtb1nYGvNXCS",
  "key17": "wL8m1rRUtQun7CJ6aFA18vK2bdHBZDmnJcZwZLu1mvE3esLMA8emd531o4gY48w4d91SiHxUmEEjC527EL3E77n",
  "key18": "5RYEbR75uUBuTLVWSaRuMBQ2qZhtvQtDRd1Zr4tGRvjJnDjs7pKMefK7KTrYPQhKxnHeq9tbPBfCirF2JXLx7Z44",
  "key19": "582avXWiZRBXesYt7qanF42cuF4xpXW3RnjZvjHGePbkFP8uxd4ovHN6SPqs9pcUW3aRqZDQUikST8BpVbhQQfsS",
  "key20": "25YGBfxzg1xjCua5k9xtuuSVxmwM3rCuKQnKBgHAkMrxANMQFPgmTmDAbUCmaumCDtXDoWdHkGGyR2GLcJEqjuze",
  "key21": "Sr7XNmbZouKamnarYscMasShMbAmSyny1sGpnyB8inmzT2tqbyGyr2pJzRgkmsmfnkwQE5n9F9WzFNqJUhsYBLH",
  "key22": "4ZNexwLPperGgdXDKkL1DMpJSEjyKj8acwZGMeeasrESUeqHs3sPVSRSeC7qKPZagBtorJYGCy5LepAagRS5ttyL",
  "key23": "2HFYv8gnvdU5Y8yoQmiFsXCXpChpKDMPbUsq9Rw7pwqwxeJzrivWye9vDzy4HM2Cg4rkz3JxbBB3MxBwfoHxqScM",
  "key24": "3TYX1xNDCUR3i2oqgg2UfcZT2mDPytpk9Kw5MSA4nXy2c7Laj5TjZvjD3gbtuJrJfT8Qz9AitfWuapnAhV1zT77",
  "key25": "3RDKi2ZkALgd6TrGAX3ZGZdUhyX6RXbaj9ximsoJv91fvPGBWKmTonHYfgq7yHV9XvjB5HdyujMQD8giy8BG5FbP",
  "key26": "3NCwMtrviXvYRyyYGtjKJhX1U2AAQLrWxm9gRkbxvXZyj4ZwdSShbdpk6mFgca8isgFmQgU7A7HgQhvDBCnuf5L2",
  "key27": "21HnWc9Ff6Stf8pnq5AYn5ybrvdrBwTENptyA8rxFM67nqZh9eqtrYzuF6jk6XtB164ZNYk4CUiyEJCBqMxa19xL",
  "key28": "4zKw6o5YXYRo5LZKxZR4E7PD9vLMVCFXYGk39JwweyrQHk3rZtiSbZqPoKrWCY2A9E5b7w6ckHso7oC9h6TRLGEh",
  "key29": "4sywXsWa9hwqpzEvFgAfnGWuXNXMKNKVMJpvN5vDMJhrR15ViL1m1nXqhDiuW3zxfwgkN1jYhFKxUe2HwtdXDTab",
  "key30": "4KCSk4HUcL5iWECYmLzN3zsnYMMu7dqA75nQApATA9rLkDDr3A9m567obh9DkReWtwQAdPdUMgRMYtxFjs9n8qCL",
  "key31": "47KCkT4Q3RayUsGiRMLxM5GDoGmgMsr2TxPWHJsq6aZwVKUcJspMDczJVokn8gST9PHe6S7AQq7YFjagB8YsRYd6",
  "key32": "f12nk2bkfx5xFnTYcbrfU55MSQLDPN9BG19YM8wQnQXSuCeT1aBM9jkF2AYMQ98gZbRHNkvHrLP9WiB35Ebkway",
  "key33": "4hgmuCHeLYbTwzRC7qhEcCraTPmGm11GvfToYsEKSQKJp21BgNtPg8AaKsRepU6rTzmdSLU27Rny31nvGuHc4Qo8",
  "key34": "3fNRWwrZotSum3QiuUZ3rhDkaMBhiRGtdTh7A2KidketoeVEjnRYCTFKTgmaF5TEqVJtDk2Wux1mxQNJar3PMskp",
  "key35": "2FQY3qL3z49Bsrd9mt5X4nFjqMH2uupsanhH39j2XRnfFGbwiwfebo49SxgrPg2u6yn4UcH5QrjPpXPSApUah4wz",
  "key36": "2Ei4bgtAjwtq1ErQX8cP3C1QtE2MiyDj5gp7dLT9hxBNnYNzhx94zjWQ6dWcKpq8FA8FEBzPfJ141ZUG3hd5g5fD",
  "key37": "cPXi2CX9WToiEpDYjJZ8grFiSgtZgdUjeh5ku8uxN92NVLwqZnF3t2iFQAgcWB9xMqUykBkQNqgnkL8F6DD1dX9",
  "key38": "2jSxdhjojajfG22ixkB9q3Sia16bpFd6qZw2mSUMCjirwWPCPsnpUuGx7nMdXiPU6XKewndqJFFE2gELiH9ATmT6",
  "key39": "2KhyYXQ2jf1CsR3ZfFfY2dKQHvxBvW9HW7gj8nm3zsx9ZqGKTWnzB8RM7F2gGxmzSgrjRBhn5dLECacDMFsBWTYS",
  "key40": "3xsyMUeqx5swZM9NtEU8Fuuv4LtCPwy9ZRUeeS9jTJPV1jEQnZnCUHUM2EzPCKmbKt41ovNzZvDzY6UbKKMDiYZD",
  "key41": "2Hq8yhSUjo1LLuE3fo8zZ1E1ZLKjdPJi5N2rTs1PFCcr25Py3QiCK4SWc7fhn6zo1sjwTUdW26pF9iPLXLvNzRqP",
  "key42": "2PQTED9UquM3MqgiQuy71Yp7XKv621C7tAzy9J9mUDknnEP6LmTmpf9bH3TDH6DS229TmzoWjHHBLCy4pYApFTDA",
  "key43": "3z2xE61EmsGcuFA1pkDqswpjCZ4Vdxzf2TJunX9VRZfofbqyV2K2ukyiwX9sXHhJrbLow4RagBxz5jXtJgzcwuTR",
  "key44": "5ghgn7FkyC4GsqKwNTJaqr5xoxh9E6zjTqnU2XDAAS2Ufyc7D1PZDq7m3v1K9HA9BjB8UV7azRWg5Z32FBSWitY7",
  "key45": "22yiucy887vdXH3Hq5NRkHe8kPibR7aZEnGBkcg7Vrm4ggvF7DsLmiDtJm1LzqtP6r828KZKWQHrB8cYWW2PPgNz",
  "key46": "3tnj7BRjQ1YMdRHcMiK6sAbHiZ7NsSYuMVvJHC2idqY9KCFcJ3xcEhXdffHgUKrQco1WTQYB22ekQaCveqy6gBu3",
  "key47": "KoyzHed47LVQ4WKbRmNL5emSJnitSthcpWbyP22hmSDFeKHJMupT1217TXC5F7ijcRRYJLiNfU1KitkndS3hKqd",
  "key48": "64aaZfp8M4svT9gToBAuD9gyji8yeWTy6MqV3QrU5LSTde6KAXSNDNZpZ2beLMW5TfkCDmRNCaYFPcYnmFr173fY",
  "key49": "56bG8ss6hDFqnU7iG7Rf97FkWJ5gVSiMCDeAmdPMaS2A6Az7jW2XsvG4G5yBNxo6uaRAWipvqhvRkhS6SJpX2upc"
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
