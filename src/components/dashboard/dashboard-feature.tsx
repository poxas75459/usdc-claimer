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
    "3MdN4GmWHLVPEF9V6emTERwJovjoeuev2T4942m8Qa9L6JVfB9fwKN3SLV8vhSQC6JxNsYJhfhYJpFTtBwc3o2u4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54bUM6Lwbcm4UikMpCmVch5oR53PHW71oKuE3R73vZEFvg5MTsXk7HSWtP3RAvBkkBLaUU54Anmwzt5qgBFsHMqS",
  "key1": "4g2HDsidqzN4YSqLrcdPtjj4iTrqiM9iaTEVcgkhxmqyujCJZABHpkETNFbkw7ANU9TiQJ5NdA7gyMqUaFwBpSD",
  "key2": "3mEKRZjVGofaFNm7LTGSLjHaYKCxNh6sVNU3tFDZEqDECzoxWhHUrUkdAMkXftrHCULYysxq92Zjptmy14K15hx1",
  "key3": "2DYhqqGE34Q8HgSbcP575RQPduP5hSTicrxx7zAk2mrzFgVBno534v6EaPA8R2vGWXDZoFJ62yiqSXx5GeZXDHQd",
  "key4": "5cebtWViPddhJbdDmumdu1G6oTgdZsiCdTV9tcHtxV8zoME3Ytdj7jsgD1FLiweGcria12CnjUK52uUUztSesTGP",
  "key5": "hcpJTDNLMBVijeFBpqvpWUnQEBb5NCSw4C4Zga4BDtN55QByGRhn9LKXgjYsx2h8p2dcYxAQ3tKv2cDiWKwzW2k",
  "key6": "AN2ThvzaWcsZmFZzw3xdVDhusqvZFYqEQNTXdV4nL5bjGeLv7PYd6HAJG1nUgJooJEsjLAH389RuR6YgN7ue94o",
  "key7": "2HDPkdwT1y1C6MUUcLyekZ3B16HiBHt7XthE7BSVgNvZcL96FJZaV2bgZ2YWiLYY1MneXBv9DUU7eBrma3XfgS5X",
  "key8": "5M5TfXyv2SgcYwcqVnrhiQGvK8HcK3GFydbvGUQ7BBogVYpySBoTpwdAgxKYTw4qoLPmB33R9YgektcUeMzktnCD",
  "key9": "29i2dXJRaTpv18aAs4HwJMDtAhQHTk4Ct8ay7hxxcqaieyHmcaCqjogfWUczUADBA8ABi8Q57bjrFmYH6w4fURVY",
  "key10": "Gt7yXr7vgTXHeCjrGXYUxWaaUKpGLY2PmdPzbnnteQD7myLF4uq63BwSAHspgc4hef5fod8RXXQAxKD8bgBHVAH",
  "key11": "3t5SzuKXBau2e8fLfwxfm169cBQWnnbSZpXaEzGhjzC8R6Ep3DsjLkRxAuAFCyaRJR5UdrEuSVkok4AExqm4zjr3",
  "key12": "528o1kRXL8cfGxU4kHfjjhHD8XQYHaVSkb9QtYyNJSexzBo147LLc65irrSmikXzCFjrHD5VnKvnoWSaJLWw7qFY",
  "key13": "5MHaPKUj2qFbM3w4z2NpdLDLsULCKct6PbV8JXSmsrwfAyQgJGMJJzqLxBhfpgnMaPWkRcNYKrXE8emoE2VSnUs7",
  "key14": "2rA1hRWMcCKxfDbd52j84f3bdckxdtU13oZNKcEwxdp8isVFCbzDQCvrhty1ucKEmcuUmcZavjcVqKDbJN6nXV5F",
  "key15": "4LREoKx9xjDQLCqPJDw6bHyJqe7amAfrHWMBruYV1qw6PQbknPXTo41FqRedMS8w5iwy4fBtfjC2dBGHeBn7iXxX",
  "key16": "3f4MmKTQfSLukKLFd6RBZP6LDFhZvuwJUCuJnVnLiqrt4HxT45KeW7YpLgX2PKnrJG5Mm5NanLPxtyP4p2ZdsdPs",
  "key17": "4DDn79mBZnFtYGijhM1kWe7nP87K1tZ3SqakEUEBu8jcUQ4F8jkJDLmnjDXPrjg2dVUFCdGtRzmTFejjmi1S2acu",
  "key18": "3cU44wsFDrM3GMReNkPFkViPbtbkYuspMh5cTA363MeuBNGKnyRSqvR57jhzFRZngmHai2EZXwbkbpK8w7nPdeMA",
  "key19": "KJbNfxmdcCiTKmxew1tBburtXNTcLJtDJmA8bMx1tjNsvwypiRm2LrmETmZ3sQXHNX4QQarqJnfhBDpjdgUQCqk",
  "key20": "J6LdiSyoPsZc2H3sxGEtWLAftVRLWpZUKhMuvbEet3eHCnh2XkJdfwp4Z38pcLRbxT1YdTTp86ZkR6TM28GNWgy",
  "key21": "4S8SiVjbEvkLjrsRuo8naLyghsUFnSttyWwDs1wWEGXKNXjw7Liz3nPBAJ9oQVXtPAL81ecvvWTdT2nGYchMd1wD",
  "key22": "27wyijXCbVFrMSmGFPB787fVVR5WmFZJuxYL8z1aWDazv915R4tXEBnqYDg3HsV4xoJuaNBKfgCsPFZjbvoE5C2H",
  "key23": "23ctN576ErZNG8Xn4joA1ZLdMPs38crTxWSSjXSYsoQHndUwxm8YDA8SqyQArFecTXJkkbJuUJmtQYsvkJryi3Cx",
  "key24": "3S1jSKAzq6Hv6zPuugYZtHUSURFf1Nvd8PAfVr9oA3WNTmNTxcDGKLFX6rdqTA1AWRUqJWyFYGYH8q6XwZAF6Twv",
  "key25": "5jYeccwr6EbrbQMcqJ52fNYY6viXbgKb3at5mQgTVjLBqS1BWrgcV5idrRfL9U5rjU9nyRLpp1PieQejej6udEA3",
  "key26": "2CgknBMeDhxGTc84M22fb2n95GzWQRkMrWXZngiLFA63FCa1h9rCAwSQEtQ7ZSNPYGLicX8ajBdukco2XCdphwTN",
  "key27": "4Lu3HxDfhW1mV3AcMKFyAwUzSL4CqpDMpButit3fg4Riv5iR4qUmTs6315uh5yr7qteKjtzBqpTskACn2a8qejMF",
  "key28": "21LkENWrqJb6LpdEbGyuLa5BGiEqLhVKWWGrwcLBvGcyDSSWegwrvzsmnSjvuNMZ1CKGPkaUFibrsUd6RHPnJYaq",
  "key29": "3fLuRTuVWCFBzFVeRpm1nmTVjjEobnePvMKAdUQV8yTbzR8TvbKiAHX5bPbxJNZUrocCrbmem78a5Pymm7ApVS6N",
  "key30": "3QCu12aSnTq154nVqg93Kpfirxvjv4bzTxFAor9SE7BJyYpjD1NAs6rxttAX7EohhepAhZBmnG9xFeTzPJYiqATk"
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
