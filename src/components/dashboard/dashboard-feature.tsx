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
    "dXAG3Vzoy4aZMkw4C7Qf6cktSMMmdRPU6he92ozQyKxAs9BL25fs9WFBzaZmkP6SPTB6ntXMDNZJbEQxxqES5xv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67qKwiCeXGYhgKRpqSMEF6jgmfTRDTE9NWfGmQQjeuP1i93effBoAhFwUgKqeqDofuhosrkSDz3EDTwTGu17ztYa",
  "key1": "4edFQYBwrgyXZgkuJi6sNre8LEz5RgL4cPBFAip1j849p2wmvuwnrYB8URRWcDLT7adgFFbQw1XUL7BEJTmevnee",
  "key2": "5uKp1pC2bjxY5iuSPzdABDkJjeiz9cxYxvMpbZv1VPqw45V99yXMAiy6r4zfrzcbvLAvTDyN2tPsVaoag5PSGoss",
  "key3": "5BnNNk3Sy8sxmbyrGmE34bDYwgfNNu62J64xSkeDj3cyonxvjRyfcRszxNAVzP6FJAZVQmzMv64MvpA2aCAzajHk",
  "key4": "26x1NTsme4SQk1adtktVoCQPbPFWvUzXJxca99PRn1RMtzQ2JodtqbwDi2p2W4e1k9gg62WtDfQTXKCt9AJ8pwKi",
  "key5": "3U7nB6rC9RnffgpGzTbV6Jr96LDaAaEijoY35Xvo79S87oEhmBtPDsVgjQh1Kf9TwhZE5Bkuks9uiTHTu2gZjrge",
  "key6": "RER62TV5joAeHDWMHD4peLncWJoJJotnThDkvxULvfFpJQTmrG3QUV9BdAtTY1bqmMEm9HWCkVaRi3sPem6Xwvz",
  "key7": "6688ZqZqoYukg4KsHqCQQDT2QAKC5xFfUjx3yoAZPZDLfVvuSnYrFxewLPAj74e3DNduFT4VmAA9Un5Q83mGNxmh",
  "key8": "3LCGcBjzeCaebxQ5pHsA5xWDYvA4ZsDgBEJRj2kVnDHj16ktSxHemcFpTN9TguhZcoqcwQZwcge896eafG1wBi1U",
  "key9": "5e89bNYiyYSaUsnjnxzdk1ySUdMqnaPCoDymKPvpMzSCwcp5x9vhYwWtac3oxUp1yzGZ7Q18v2CpDuxe77vpM1KW",
  "key10": "2wncdzLACbpgRGEdc8gjBURnoxn86G9ykoJGBtgexWViLdW7XJjZ85rmvV2QYEGQHvdkHdRhPd4Lch1Dh1rR4sat",
  "key11": "64UZYH6YX2NvVgxeuD7ebRedTRoZeewhfUhf3yxkG9oqZfgBF2ihSWvpRwYRjVSHY8ktC3WgtxGSNaX9mJZTd3xG",
  "key12": "2ECRQ6a7tPe5cH8Bu8xHQK53w5MqZnknMFkWhwZc1Qypo2snuSR9bPrpyeToLev4m1RRcJkbTbsq6qbmwpz7dnUv",
  "key13": "2rDNd6dw6TpQPhFJwDSpSBXWniVDhPFgS8fm8GGUf5LdqLQu2yMdE74inzMJatp2gorahckXNeyj7rWeKkA6XyDN",
  "key14": "eTeDRTumzUT8hmyAc3P7Jn6yGvrY3Hj5bgGyq4zhXdM1pi8r5BieTqBkLCGkbJCKbwBLTYm7EyVp8Jry1MDy8ET",
  "key15": "2LecfLsBMPPV6GsumNJ4WqBJ3efrmeiw3TCoB46XLbHMqMknSYwkzRvdjabz6UE2uxSELJGzqmvVrdDyqYQwnDsh",
  "key16": "2ZJEViXbbj74LkK6PASZn2fxetpXpgPReHXqNsCLznFbneMR8a1JT8UGx1j38WPiDTHgBfjRitCwDdUSi2sedLEq",
  "key17": "21hFMDjmDXreGP3G6f9dzLRYWk5QChBNASZyYdaHzMA3xx3noLnPErMGWQZ6oXrpsHrM9Q2MxWPPTNCQNbjKcaP7",
  "key18": "5LR4z6VCLfV8kGCpuvrt1GLdLQsJKEMXFjQpVXKDAeU3PeLnCH8VW5fU4o53kCBW98EqebG1E7nN8St7cqvEYe9f",
  "key19": "2fwStGyuJfskoA4BcbMp2B9ESjZemJZEtjYQmgYw93S6ezVtTfTMve6xs4N12GfizEZmoCLzZmVxjABZMqxCEuqP",
  "key20": "LuYqVSfMnH3cSUrbLcn8YXkFFeXsp7EVXvCK6X5K6k6pTgh9aBPZkWYbTrCkMtdDH3PicPFUVgAZndjxi1BPmEj",
  "key21": "4RZUCRh4bHinpNLotPvW4dTRY2Tv38jLrTiRKaP5hwCZaYJSSFejcjLyY2aKvkYQqKJTA5huZxzYCs1xiqC1Si7H",
  "key22": "2W1XXaVyFLGPMJR6bPVC7bzo8g29r3LTrKj8PBLs8yCQHQsDtHJJNo4sj6dJX13NQ1EXqJtgjpF7bCBtpmZGLqh9",
  "key23": "54eohPiLBemnTizuEkYvXZGHi164ra3QFYZk8Jyn5Kid3RiuYStSws8atULScWNhWAZ5yJrWWXjXVWSVwEvWMZae",
  "key24": "5VpjUJRCwUmbFqgutNkCY7jQPoq5pnwKkTjzb7E4eyQ14kBbWqYGmq79FHkvfgG27BocLaYvDCVfTLNjBJWG59nU",
  "key25": "1RHdcM8TwLbMnHRVz1AsXCGT1Eb23C1SJVGtsoESgEvxqCDFdHRXELk2DWyK9Yp1411PYfFQLgi7fSfNwrUD92n",
  "key26": "5saSPvoasTttpJHRAkZLvX6JqQEBSxnBbPNUi7XvZXZ8YS5jjmvifGvJ31TyBNA8GjT7ofiBEJYHk8z6R729TLTg",
  "key27": "2L8yBuv7ggmRKWxXzuQpCBT9CEPR31aFZV3H46DnYKUNQgpEZSYNskTnoBzuDasfwNRukTmiVJyhJfr2D2XXrjeA",
  "key28": "3XUzVtsqjeEWNSiFuJSpP7CHr4QYCssvuu4KEpN89AWwZzeS4ihoXLYoecG7suiPiRdnmLC4VPfq9j2PwNaB1YCm",
  "key29": "2gA83EvYfaiqdxc6AAY93HbspggKTrNaC8ot7FEMYY4oCxpmtDeke5uXqdwRAsTtfXb6b7J8G3JAptzmqDGr8Lf2",
  "key30": "2zL9XznCLg6nj13vaoTVHDnufGua14Vw1sYuX9m2BnyfD8kSQPTspX1zvw681fdvdFNF69umMWj76zcQnSr1xRJT",
  "key31": "3cMzq4SJQGGqExTUpD3qsKGXuWhEmJfcsxAPJAbArLVDH16zLwC8BZdnwiU6LvamcF1KwPuBgwFyvNRR9N882Q5q",
  "key32": "3GpMQFr22QZq2nCUeG6S4xdUB4j1R3hdy4sePJWC7VvtrDRxYiLLaMrFUbn2GFaPDB3xFRjDnMhJ1VmvtDvs5RNz",
  "key33": "ZVE9Tf6oyQZ7WQEqEy3XFZpRrRBkSRdJpCK7UD5bwi4RqABp6dYPVU9LeevhweCMpLchwYLhXxHsDnJYBLgXou3",
  "key34": "4rUtKYEwDCFmsBx8cYPe77bfzr87ks15uW4bzHfhjFDnENFVJqShTtfo44qFh3ods8nMGWGX3dy1tzrdb64AudiC",
  "key35": "yX7Vb7juXYrx7Ujig99RigFvyrmrJnGHuwRvH7huYJCmNVwUivEbAotFvtyVBkkjfY6HqSBfPJAsMJ6BpEzJpDi",
  "key36": "5iMYnaQS16afk1uYT1RNaAnX4d2LAjaN59U7zywoEXEWyfZKMDq3nCVFN5b2uf1nSMtrpKaTyKNnJYTiXk34SFNY",
  "key37": "4mkHDVAZo3Fftptz1rDwVGh3CYXy186F6MWpi6VFEe5Tre7bEfhbTbatcWCwKLBUvhvUirBrBBXCbTvsQo9WAB7Z"
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
