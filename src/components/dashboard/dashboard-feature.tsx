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
    "4HoJhsCqiikB8nruN96PXhhxkN7zauk9iSy5HHhSfbiSjeCvukBQ8LJefgcK1XN1ECqspBf4nkiTgchVSTG9Gk14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KY6WBNycfFxVRSj3qKopR6V9hVpH1Aef7VMnDrovb3BSq6YKDxM4NGy4XHAJ258dkLactjQtiuZ61mFN372Sc8v",
  "key1": "3uiEg7Ay4zPapwioYh3zMh4cPbHXwZd44ijs5uaKB7enCp94QKNYUgvW1jy8FjRm8sXidKAbSKXGsUQQaNLtdDZe",
  "key2": "3k744HH9nu14MEz6iK2yvkU11HHboTozhUhp4nb9AWGH62oRhfd4QM4guh5KvExebngUTRTAbBgSNJHx55DUQdn8",
  "key3": "4CZM78nSxi9PubWu7wBZdTkx4yBAbgCPPUzh1K4usTRa5qEVpPxtqna479SDszZN3ub5hEfewT8HG3dny4zYeYji",
  "key4": "FUMzVwvp59Zinsc9YfajJ7h3WJYRUZshXzWbuWUYEXA4FWXe9JG8xfmB5BbaQ3RozxcfrcpP6yLkcHVhmoFLneX",
  "key5": "4RvjB4tYRpvLegrdnTN8irhpeutGM3JNBCqePU7CGYVCCipKqj268G1G9F8DhJmh6aSnyGyuRMqWGQqjoE5i54gm",
  "key6": "5tYzuWbyUeP88f2E9FL2E5KanQuBdXEVdQsT7j8GV3fMPhCAiVBiQG4aRBBEuwGZgwELWWq1zJyyY7yC4GtSQn2S",
  "key7": "5XoNk8Vf6n9V5foQC984drjjPi1uhpsW5Am1ydAMvXhP6sZkDK7oWB8cLB83c5kiWLdtpunhdKvGuenNZodSWsK",
  "key8": "222ndmo9jzi2ZsgmWYj62c9owQZ8ojrzXeTFw7EEkTFJFdmsgJfaonmm4eKzDsbjx8WDyowR5N7Ys2tpgbHq1Zyd",
  "key9": "2ssDLkLBvvSBjW1R62CjThsDL8iTDeDFGQVKz7Gzakzsz2ofMpzujx1yiQmoCJiG7R9VFafjCunmwXm3ajo1mW2E",
  "key10": "5Pd5v2P3sjojHFzMYpmMzakZ6pLuHh285dcey5ytCz4bnw6qSDMcUmYg3sMgM7LSeWYAvvNixPFPmVkW3PAetkwF",
  "key11": "M8t4cG7qepipV6fu3Gg8UaebyUNAKtijS5sHwJksK6guY6P6Z49dVk89a5pSUpVQhUP5t6oDb76LWcPbrpRBkTz",
  "key12": "5b7hHN9bteQYj1nAABQigc99bRiCeBe3H7AVBR4CCuYVa9oBZmsG3Qnkt2GSq53MKNSijPTGFdnE8LBXEN92k7bb",
  "key13": "4rSwMeiiPqLwByjmpbzoMWPzd1YXpq1Q1x4jwbrmoeEDN5QVzAYVcHvLPFgK7AL4uA8UJjkwspuuaEDzf8wSqpFX",
  "key14": "3ygcDeg8vEhYReuk6wicKLYqbTpEishZ6TctLUKVTdZt5DDz1MoangqjYpn9YTCBa1uyRf92APfEqHxvmB4JivrD",
  "key15": "4cTBjTtmnZ5Ap5J59BAjXyTtKCNMna9PdMxX2pDpXv3r4wfGHSqZhw8vptMAL3BD7B6VQWwSs47D3891K8PKgf2J",
  "key16": "2h2AxQuPSyYnBJYzB8AuHdZf9xrYqzNZKDNRhLwBpfUMzZXpiNMvXeGPsNsxH19XsBRRfd53JgJBGVKd75DxA3Zp",
  "key17": "4ZRkvvXwfYJniXu9v2yRuXfh8shATTogesK7NUcvx6P9CoG5By2WvADALGyUbKCMxoKvp5uzJiHvBiz25hvAnSng",
  "key18": "2XxPvya9xEXSCuFfMftnJNPUUVNSZV5EL9B6hWBxHL4MKAL83vREBTzbmXMsX3VSoCUrZVHPYkxdoJt2sdErabsu",
  "key19": "3CXVq8jgXGkvv75u3QCrgVoFDRnUgou2EGViCgk8ThTuwREZbbffddJxumG4VUjDgrXUdHmB1yGskdZZPofuJp2k",
  "key20": "2ARBX6KXzB3XuNFMWwrYsToKx6HjqjxkLCX6CLUw89P2SXHy5NkohsqW7MqKTNUWPTXC9Lu95z12q8x7wvtK7uEh",
  "key21": "s9nr7Fd9t9eBfjB5vEPta149jKhVTZWuaEUtugsgpeKnk6Augar3AvYqY7vhNrzV38qU7xnj6DKPKPRqWuS4b6V",
  "key22": "5jMrnyejrysx9oMJjAVVG4qEhyP5ACD7tYZzCRCdqC2YDKyDqcT9SXh4cufcrRcgY2MPX89mZ5r64T8yrF3YCrNY",
  "key23": "yzh5nArwYF1zZeg1TxSvkdhAGkvo16LfXDbMAKXJpVQErJxS1ejDk9FobWAEKjoAWywF5AcBkRS62vs7iaTQnuZ",
  "key24": "31NaHRXckxaZ1idEDzvnDpQHuVibQxs58TpJAjkkunMp4SY8GRifJbHNndUqQ1TEprx6mgAcGrfKPSLwmZDwTh8g",
  "key25": "5NAGcebe8WmZDyvm4UZbffZ8MHePorjPqC4ufHThCTLFW9XpzneVuh5CDNvv1yQqWpS1TgtXrAWF91dNEEbugxZW",
  "key26": "ucrL5dYR4nHkN4raB9QTvriFmHmkHGCDtvnTtQG7FoEJauN76ZHiY5JxhwY6yJsZ63G6KxjcA4nieKKJAm4w5Ya",
  "key27": "TtGKj5BKRMPAPYpEdHEt4qJGriv4GzZUz5JeHBPdK32EQUFWMGN9cGJQWb99im5WscnShw5vJMSeUYSbQnceoCj",
  "key28": "dfcvBGYoP9PS6xFan5uLHWCLxAbDjspDXNvLo9YQ11beqfpvmq79KVYbeBqzEA9LuQ8zFEy6wr6VsrXhcGHxpTx",
  "key29": "2FfjVAzMdxbyMAnqChs7RJ1vHxsQCoXJkLQK8VK3w39BmZDUaTXSeNmGP7fBdSBkQRE5ofmVQuRNL49F78XAE5Sm",
  "key30": "2CUxALyB6FrniL6y9mq6NMgAeyPeKmFmXFPWrLA3iShz3xbk8MVJQ28D8AEULCbTujWd7HQ7MxyPzSrVo71yp57Q",
  "key31": "48Rcdy9zskdGSJyyFWzHg8YMekZhdNLY6aSet7vgzCLaF3ZiDE1928kW5p3FNEvn9HAsXKdYcyg93wTH6oJdsnkH",
  "key32": "5xXtXoPQvx6Bp8y3CySmWaQp3dySRAJjuqDicvB1kzdNqfE8Z6fKerMUB6xsCMnEK3RvDe7NaCFiSsRcxuRHFJQX",
  "key33": "5UYXAgvqu4DPM6TSyr4EUBECye9VisW8Z3DMHFkbCPdgz176ifrwzC7LxnfqdiYsrGvUKR7RQNPi4RebMiWMmpWD",
  "key34": "ygHjtYdeShHsFWmKpRij2vM3NMLTMFAwSSfqbnU4rWjrCGhAdtBGgus2zscBKXMPSZf9yaWrQkorEvPhP35CcfU",
  "key35": "iNTozdYHbMfxBoHdkbmCF3L51xB1pZDi6VXCFJ4wr5RzHBNV7T8QGSqguwuHV863qi2m3fGRZ1t3dmHvxkheQ2P",
  "key36": "4R7bnZzcmypiCcsqVzBZmSvR8zZ1XEoUeJdDJMiwZZDbDin3mHieJEx283djrnhB6x2srAgKgHQor8a23DFbKzTY",
  "key37": "3nnhbCgfaUncJPzMaYhgZVSo52R3Q4ztqcuNuYaJMR4X5kpK1ecHQVbSyvX18N449x5bCEJ9uuDrVZtAsCKy5E1Q",
  "key38": "EzwqfngZRiFtrH8Ro7DbPXCarpGdb5Tcrv6sKrCueLKW62zdMkfPGT2gj688DB5AJgWEQxs2prkJv3Bs4YBQUnJ",
  "key39": "rRRomVeWtsXFrkTvooz6RvPqnWvLSpAaQAn1KiVLh8epiZYW3HFG57qMhfwz3mNBj971UoP51NvHZmkZ3e7CQui",
  "key40": "4XBmq6NcGX1Eyf3cBBstvz2NjYGEsgQN41ca4PCGqmWN4TrGDYzxn9JPeuBp2QB6DpP1X68gHfPEpnKDnFxNieTF",
  "key41": "5iFaDdVPz6gJ7w9o7V7vZr9dzGcSdpXK1ky82Hm1Wa1RFz8LnjxteQgocy38fNwEWx5U7jNubRt59t1ALA1iXM9C",
  "key42": "LtBsS2Yeoze8aKpExh8862W1ns5RxVTA2e3Ki8Z8P9hDJo1a83Z3JjBYirUs96Qfxk6QULsw3ejHjgzPvJkmF8A",
  "key43": "5uKqeDGyXMn6iiH179PySZVURPkG5AJofEb4HRtj5YPdwJXTSppAtg9CADUnBEYKHvDbJTSkQ6GLGRFJMPsnd3bW",
  "key44": "TtXdVA5PAMhT1jobJak8nG42dakcLekjegsMFs9nBzAGeXqiibBam85GnrhzHVfnsC8LK9xWknfesXuF4db3Sf5",
  "key45": "3X5BSe5v9agHMmPgxiiuisTjcLanzFGrhNa7KSCHfod7y371f2XqkoY5Q5PfzBSL8axZ4xGrM7cNCXCw3Bngo2im",
  "key46": "rT3CcpD2nLB5gkgPL7GMZuAp1uznAsWrTTFtkJHaf7B7WWd4YVvybTJH31thCk8sKcXCy4fG7t1EsQqnX9Y2GB5",
  "key47": "evubxiHDKt3cQn1BqKGMEn9HRiysbyJHKT7JzzCz6cypB1kBw5VLjKtY4ro4LhSynhf1eTKirzVFUiybgTkPoZj",
  "key48": "4368CXtdBxaBZE1sShinmRy1XcWZhq7jgBEbcptJb7RTQzMnqnFFL8UoiuQ7Atm1Z4aK8KgcE1kWFZGqnaYsexCN"
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
