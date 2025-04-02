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
    "4qm5hh7CmhJMfquRBCiMiVB3jknRtFfBLbgRjZia6PbYNwGBFLjnB5PLGwRMN3jWTK6JuCsFK1PT4j8Avm93Rbcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rWW1kvjcfEGKGbzpZibSm7U7je5VNjVNqiNEEFg8RwcJB9YtFAvhYoboNnBiaeZN9KfxVssfoPModt8omqLCoes",
  "key1": "4gunezvvrGWr6GEUNTzjLSvz3nVmyJkb3bmvQvXN7KJPKiC5q2Rw6AFr4QFduXfM7hsX5veZyGVLhHhhLwcohmCc",
  "key2": "65caiSC6brMsu7UKfUAydVGXY4745SCWtvKiQbLjmhoELrQbhCPza5EDvmERmSR517FyWKkSCwPwgTpUiKCX87Mo",
  "key3": "56o2jwoeondKmK1TMRYnzhyMoqUAXZScw4bqt68tiV1FVaHc8NxNsdhq4XrtbAZ7kT3am13U2NrpZEX36CxvKhXj",
  "key4": "5vskTLy9D2twnZ4WJ93M8kMQoUpPKLX97R8eQef9Zk7Q2fezaJnW2PrE8AnqGHF8gh6WpydAyQjPCq8HuRKHH1f2",
  "key5": "64EmRF6SCQUQkAY9gKMJpLrQZYwuXpjqrGhbdHyzcshDAZqrB66xxcPTykyuNAJXmqFwX91mdFYm6oVThTPHRpui",
  "key6": "4qiVzSgRQ2tF4KnmABNtRw9Fxda5fCqDyWBbdo2rLGVfnyZPgYpRNddndnTsVbq8KARf6D4DKZjDFyBNm8L7iDHz",
  "key7": "iypqVBqR98sn2r5Sk98ee2eS4wUMzsbYsu9sBtTGJ7egiMW7hgxTM5fGxEmp3HNQSU6UH53HESWud6pQGjHhvKc",
  "key8": "4gfAYPf7B89mSU8ZeT2kQ8Cw47V8u1k6RoUdMje8PoBpZzheGyctVuJx66N19TkHfjWyhL4RDGZGbKQMfTHKuKtW",
  "key9": "4Xn6rj6c6kYjChtR6TgsYUvouZYXuskKizfnb26CPKLZrYw4Gohe1fwerJjGKhJPhnY95rdQzYb4UNcyxeFHficu",
  "key10": "3nGpQLyJfCJT8GEm13bB7XVhaxEzNvZRXY64DcZvoGJQmy1Z4ikx6ZxiBcg9sKmZtnefR2oRE7kwLog7UucYw21p",
  "key11": "2pNZ3Ea6dR5LvbLeqPuzB9sNp8BHFVVxUBxHVv9XJ1Ww1akQ4oXHm3Vt5j8i7y7hz9JafBMfzDzB8vhQ7ixTNDV8",
  "key12": "5ssN2YYNB5PwHtyB9Payo6JugQSEZdfWx8e64EZ76hxukLhtUWYN13rk6fbmTie4TYg9dA8EMaA9Xi11vT2fkkSA",
  "key13": "2S97YApgJ4eUvz7pBuTUDgtDKMopFGx4ZMdpzjimCRwnECwm4zJbrom5LjsvvE6Zngbh3jxuyPTRTvp1VGm4Za5R",
  "key14": "5jktx6NKWKmbiSPLTVRtqttR58Wev7hr9CsT3pwQNZxs9xVwwopL8Ni1NrTEa61Xu7fo7XBu5K5MPCGDg6Eecfdw",
  "key15": "4gfNFEecS6u4AVwBo1xdrGJi9Je63aBUY4D37NH5KrLcfDoWHB8mVwuKP6d9RgKPyJdJwhAUTo13t3GHpa16J8Rh",
  "key16": "2VkN69DGwdRYjt5uZejvPhrr3itfVZEUphX8VRMQ569EAgq2V9PgwW64cyATzEeUm2Cc8vFuqu42gpYbfg9k3wZL",
  "key17": "4m26tnRJ1F3RvY9P3HPYWpMBYtWjXBj7z2vZBCV3ghcVL43YnXYK1saAmVEYU3ovPQKNBYtwpPMhq61vHoy1JY3P",
  "key18": "513EnSzgBL5ju4XEFdiDj3aX3YKD8Qch1HWw8cyu3iJUNq21pHUnwPXjraHn9Q3EXaExzoF5vW8XU431AqEH1aSQ",
  "key19": "3tXkwPguJnyQa9J6XwYcgb1CAR7Sg5f1TQffGLhQaUnFdhEh1ifrS8riZ3JChViGjdocC9DYnMM1L51yGLbUMLe3",
  "key20": "2UbXkawru9vcWqzwsYNCUY8CZ1S3mRFYcw2pAnpvmXSdusLPtq9pjKuDtWw2x8az3KMyrPc26hpqqn6c2vf6mEbn",
  "key21": "4szKuFC9fvRFPY3pyuk46th4d2iWf9hX9P7fngHBStw5jXPR1dJ2Z8VmGfPxxDrpLPNiKrwWTcUuxT8hMo9FX4Dv",
  "key22": "3CnSi9hhk1CNXA2qZTDBa72FQXvWtkKnhKSfC6BuQaG5QeVoirVHcWpFTcXQ9W1XkkTg3kQMHQbdRvXHC9TKeFVB",
  "key23": "gTXPaxNCiEsU4cmqWaRZqahq1aXNCc5jhxsmmwkGdPgKJgFheQRHwdiLpnw77MWQzUT7dVVEd8egWfSehuYWrvW",
  "key24": "4KcZCCuRNH7akg6UhA9KDyTpjz8g9grBdVhPGBQqAiWev1SDrEHRcWQi33WJEgQpGnWNPRUVCuLHgeTPe5LtBsBs",
  "key25": "zwa1e8dQhCaioteNw6PhsesQcHHJMh28M4q8XhGQdE1N8QhnStGsP6vvg7YM1Apm7w3QnZjLCwjvLtP39Z2BkxQ",
  "key26": "Z3UnV19AYQzMr9FhVLn9G8FCRy8KKpLx9PbPbPkrUU9WpQhWeudUehDr4NYsVYkbVXtn9Mc2xZ9Z55osUs32DNt",
  "key27": "3Y2Ha3p4HEaymzZdweCEbKrybwP9svHmjeom8gKaFMqfv7VcyJJ9cxLmAt7XsZgpQb9d1TXPkg1yoWCxNVsr8bko",
  "key28": "xT4JYVw81WUvnsQpMVuU6UeVpK9TqaKRt7VNwfusRGcYBnCzHjVPkjrSaK1i9Ahrit9MoN2ygMRhYZpm2LT8QUG",
  "key29": "2dP9jjrUewZSLBLzyXgKReS4npQbNhnBBLdazQjzxx9HxniLGCYnFssLGGKpneXuUFEWfinQwv3pbr32njX1xb1K",
  "key30": "5i38Ke9tYAvokfXrS7t5xcmtuww5RZnYzHTk9HiXWwQfWTZX7NjT2gM7vFtCymQfv7azSZRMMWNv5qnrGu2GpwNQ",
  "key31": "4KNuEYxXH17WXqVKp5Sd6f8tKxfDatgWHPAA9Qpxt2koaLBdkWTKnAF17XkhNVhKeuQcZbafZWb9wqULL5dP95dq",
  "key32": "657WhfW6st8mkLh4GmUF8GCckP3q9ZT3HGdXYh5mZWckJRkNGNqPxAbFLYo8zky13nii4qRzNpgimuUaXh4LXPdK",
  "key33": "3W37KT69YJnxHge3pmgyoeHu8etRgsq1Fxocad6bEPHrbHhgthf3MgNJB62vwEs8gDNQBtcTDSyWXZ4tuxiLMEK1",
  "key34": "5z7B7jVJcaDyGN3Vx5jMLVjVvad1kWvshMzkepEomL9vbC4VLuTpmPvW9gMvdamhwb6FbcoJmDtkfXZa8t7PrBXA",
  "key35": "2Zp1N6Bw1uiXH1Z3snQP2VLfDAhzB3axjdXJxFF7wDrh1kwqVzd9P7PwMmPdiZbeL1TAek1fvcvKZyayu1FE9KBs",
  "key36": "4TkCHM6XG9H9wjHnpxWD1UwKphm6ZoVtXp28Fxmk1q2oQLHQhRtdbCmWiD7oErBLzpeoVnmE9cHdyMdGgmjTZ18A",
  "key37": "5X1aiTMd1f6pSsPEVA6ksffiVt2R4BVhhJdY5bhC6oWJwkaGhoo4nToerfNASV3GLdrxXz1jz7KNcNePfz3aohdn",
  "key38": "3bcCfEvUa7qz81p9z2ZtVfevTVDSC35TiaPSACYocofeUufA8M1YjYqsEsja4ZfH5pKFQMPFs4akLutiNWnDEpf6",
  "key39": "4TqcmcEmXBNeGKQ3LwHxSjAcbAXGFb745LpoQ2kfb7UwNvNxR9KmAvVjQ2WXgAEScPoxZFFxPdqTKbxnDKJnrteA"
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
