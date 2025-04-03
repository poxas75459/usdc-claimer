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
    "2DhmYMJ9zBde2H3sdUmdQDnsn7TYGvTQBSK6SrZuVyaZcCwnfbXcFRwAE75MEEZce5rL5SnNPp39yr5d1LsVY72e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kor5kD1My7NSDxxX7MK2ksHV7bz6SaVFda2h6keVTLR3f8uCTtGmLtLKmtFYjuuqN4thtqvWgu1k8Sqrw6pv7YM",
  "key1": "3qP5Y4fSLuntAGE9iuukva1uxrFUUFuhhvsFar9egXtxNnMpnagLWJGHV34LiuZySdVTPSEHgyqzTa91SmTHuknY",
  "key2": "3nw6ZWQweJCfUJLFvs9HH7k5m8Jtp2g8tfrKpUjzb1pj9PyPY4Bz4939nvBNe3AoUjTLLxvp4ckFeh1W5VcS36Q",
  "key3": "5BhGvJ5XWeMyfVyFpuvXZHiCQQHmAMf27vjtDJDuphRxgjGUpmYGR8nyfi3pGW97RQ4sGHt3Ym6pkKtvjvsZ9DUf",
  "key4": "3Ef23uYC1PciUZAXa3tXjePUzxqwcqqaVqXbrFQ3rt9q3BU8MAkmdkFTCcWsZ4wdmtTPgBq17wR36K6ka8vnqQmQ",
  "key5": "4j9Wv6KDj3ouvcZamTR46aRB1N2smedicn1zwYYiz3P61d8HUebW3pCwcFhhGbPz5vb1QpY8drFWadF61EnZ6EHX",
  "key6": "2MAnjorQTJvupMT3QRA7iRaeNRGwGhCK5Du9bvDD6yqospvWdN7Cw9uyegNb4pZ536oQhoVMYqZAMh2dXCTVkqGD",
  "key7": "4v9TYDnstJD4QSo7aBBsJJc3DqWnBNoPAZYktd4VN2U67PLQShJpvBMFjn6bkdhz7sCX812rmKb9gxzDGTvw713",
  "key8": "5onWYSUZ4oJrac42C8tUhwsLCr5pm3t24PT7YpjXfaFdoKcrQH54PckETZNp6Ddju31ku1epQD9QzJDsDyNNRbcy",
  "key9": "YMiPrBZR44NKQnuzkauNqn3fkLNBWBbnKLNqzfCazvanmbCgbEecF3j3GQk1Tu7rxBRuKmXuPwe77x5RbNMCmhK",
  "key10": "4nnNRCcG72SGNjp1d98KCwoxVPQXG8MmVVSTUdLXCQeDvMW5AWPjU9JtYUcae2TzVASR39QL4X6BQBK3zSWDmn1x",
  "key11": "2HcnqQcFFGKiSKqo16CrFEhbnTGa842o6LXCbzTUoVJxX7kRc4N71WcNNBTByJ175BkZa33sCb4j4xdyWTuu2W6n",
  "key12": "447ALEFwNtQrkowVx7ypwDywmwjscjh8nBA2f9GcbkMVYG3U5ojZ63iGw4asUYe7yX9wDGZGydHw17iKYcCTgZbW",
  "key13": "4ViwUXTb9V41so8inGndvRk1gHoarBzMYHaPmAi85HUFU8W9nihkuRFb1yg3bssRUd4HuoKW1nVKmGkgrFQYEWjV",
  "key14": "2Jv4YgiQ6fkRaNjZih27hepdRU9wGQpcvtAPNPcj2ZyCNAK7AH6wkr7LQSuD4XFAzThcXiRxKmE6pXzXtokeGyR1",
  "key15": "5fw1iqbRNyzBYTbjTtUSmjk8VkubMNcLi6DHzQBicLbxLBv7vKVY6MwtvD3iiSxrfhqE1yYATAGdaSSMTNM7R87Z",
  "key16": "5nbppKDbGQvL2izWobF1pKwscC8w3hyDDGPbdXtDd7oNfEAtAaLpMS6JMNN18KAwxt6VdyWS2omJHHFJHQ968tH4",
  "key17": "5PETJbPx3eqcNSS7rBSpmSP4VMWT7R29zLL9oH9QX2A1UmiZaGD88Yrp5RBH1cAmdhGCH1n5zcSJa8ThJX5RvASF",
  "key18": "zSvtw8H3ky66RATGP94oMP2E9fhbfXa58ank8ePDAD1ar7SEdBsEJkxK4iqnEFAUrmMsRhid29qKtpFzovenHDE",
  "key19": "2GGv8oU3XLYKMEKtS8siQF8EkVUTpUHWdMnHELa41EtbfLqSN66qBc4LoKUormH7zTVpcQtxsBhqSDRvAsdut9zZ",
  "key20": "4T9LfbTefyw8k5qg5MMBBwoVJ9ijky8d5ZB7m2X4toEwiohjD7jvYibrVxon2YXnz4mZiSMduuYXzd7tyyybxJVp",
  "key21": "57673hUwCLx529vytaZNKtGz8mzh4XhELgPrvKg1iKNnKJHogtUL6RLqd5nVhfkdomc2EMamrwV4xVUWZ9N539ZS",
  "key22": "2q551b4GX5gLLDzao5ioV9t74uBiauXwby3mC6Li2iN5o1x8mLYjgrcQfYj49x2FnWL4BYd6239SZmbx687ccCEN",
  "key23": "25hUbFka5dsYMKix8esUDjNd43pDnFLsa32A1tss98XUPY8SQEtaX5zCy7m5GwW8SUmsT3WPTJDaYdG2fTPaob92",
  "key24": "3EsL4AVwNt7ukGa7Hp7bzg5qBZChtBn2Tm9zdQRhf6UQqKqithaMGrgjrWbU6EGWuEC7K4dJLTdeMtkqjS81G1AK",
  "key25": "5U6ZaAThHFNdLaa2JTbqtxgRzWNDvgcN4rvzuHzuxEVLqjJVaK2uNq1JpHt3JFJV6c11cjbujZi8KUAeiqENJGbD",
  "key26": "saetVKMupVH3Q6rPAQigqrY6tVoVxDBGm4oaaHdA2HKzKGSSTPF5biBk5DTkLc87wQFDRhAmFTvhm5EqLRJFkZt",
  "key27": "61BRgzb7FWiX7uCUAEqu4wFro1jgrNE2vDg7kSWoy5jqQwuM55Qz9HnD3Ek8WTR2fHge4u6dzoEdAgc7dWCXa6cj",
  "key28": "4QgPo32J4R7hctgUXVAswcxnd7khzHUMtmjnqaVnuFcuNh9AWqMyjz2Fh1QqAGARGE6s9fyzEAuzGjLMFowK41Mu",
  "key29": "2Yv7z29LCK54qYLYFfzaAXWJaeoGZkTsYvfiywN76ZAL2T3HvKCHm2KpuMzBFxYNm6ATyNjBXfZJpiu8vfWWFmgd",
  "key30": "5mhiUWApfebZu1QcH6CdkdGwhQ9fXBsDjRrQ68sjxXB1drBe3EF7jZYKYaSeVMYaY1MPJw8PFFH7MsMyLX5emD3K",
  "key31": "4zYooWmc8vVZmphQeWPo6wmkEQbJmoVczeDciNfPcHELVLSyp4pASHD5eqjAfY75W6ypaJaicYSL89EVQz6zyoQg",
  "key32": "5RHQtCrVURcfzbJ67rWsze6JNhcZE3d1aN3jCZQF2dEDvZXpxmvpLcML7oTQNFhDNTN28H9G3MFUXAoafbhVjmav",
  "key33": "5fGTjWrmKWc65qJDhHjBb7C4a1YvdbtuxmPKzwtx9ixkzKJ1735Sg91K9kCrEtqDtgYTMJHpbLDvyLnELk54xXQH",
  "key34": "44TR62jtsV7XUPBb5enQTEAWCknuBGNLEkFmgFQrfTmU1FCPfBTFVWXH93zCD62aFEdF85nEERsG5fN84jv6f9go",
  "key35": "4K8MTKBasvm1NoUHSdTSsoejr1VrBzGhcxgN7TCiSQV7X1Y2KtVfdgmj7KjNbr6PCTNcLoDFELcMRuZDKZ1bJLRt"
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
