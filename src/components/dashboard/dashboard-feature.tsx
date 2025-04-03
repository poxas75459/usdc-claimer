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
    "gcx9Z1YXk9AqbPcF9qfeFTB3pAS7i1Y4YFQ1TpL6nBjNsCo5VmPektyjBPxnsVcLGugmEyamUZfK6TchVysv7FP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47rkCxvC2wTsKkqpdVbvC8yKcNUf6zNofQ9Ey2tTpfRsjaUv3y1H42dLWJi66Ri5WA6GjG8tM3r9SVw7vDU1hrM3",
  "key1": "Q145ySk1KCzaAzs8m1ktWtaDfiQj5DAxYSthCPJNx439SzwdwEMJ7rhPH6CR3XG8umobM59C75acnjxotwqUsBC",
  "key2": "4DkCfvVdzFe1gQwWr5wG8Zd9aZNBs2uC79C2FFKRjZrsGaPMZd5yAGX7qNQ4xtBQqhRC5km3oQ6QWqSDwk1Ee4Uu",
  "key3": "3cyRrD515njTCXgYG86SmJA4VEK453fmhebVQM1BZCgJQgkrmwDVyAGZCdTuFYtEb85mt2gBAjzSSz9aq1hLNdT1",
  "key4": "24v32wzV3YPtTthoNBT7w1kuG3cTyZTAjY7vuUfnZNXZiXWyxtpRvj8Q7nA7AC6DpygK3c2tey5RTw95JoFB5aar",
  "key5": "22yk64RYQFgjSPmYtYpedsDFDMkbyffMNRHEkyPYpetCGgQ24zSRGVB6z8ZazhUqTwdTobLHXYYJPJs7yuo2fJB5",
  "key6": "2Q1an6SHyiQYAq1vfkr6NdbYb17JfEPRAbFD7H8sWuxxYNTvToSXEKnNKTzhg8UgwkGg8kuavjDFJ5wddJZg4TH",
  "key7": "5UA11goZDE7J3yayMW2FptkcAT1sPXwLsUKHdCwjAiixjYTFefNqH63q555ntSfC43TYtUqMVGgLS7eKGhVkNqPK",
  "key8": "2rAAXFPUHmWhRVkyuYYXEzQxL1bkC88pyd27DYDopAoJ8WypuqjdwCkjicL4kRRWWo8vZEkoG9tJbJCLBFt2v67L",
  "key9": "ecjGXSj3TT81b9hsAw4aTgS8SkpWqFrn1ye3R7zwi8X5Sdg9UsN5oJcEz8N4ep6MZ8vi35FpiJEMtfZ8TUdnAiS",
  "key10": "2b3LzZ6MT4SmtgvhuVmvFBNJXjmd2k3rGZ4XzTef4dxyQiP43NeCa6TeTRYpAb7DdRoxmBHHbgFP3SH43HJLuUsa",
  "key11": "5Ax1KrFxdH3UtTVhHvhkXmBkEBuZ7WtDGPm3ZDQycro6QG6bV1zztCkgzsTL7i6L2FVfbSnridcEZFyDzntk9pfG",
  "key12": "5mRZp5B99MwJHi3nHXbM1otfWmHwT7P4uzbrZnkhumVza7JbU9Am5RCNfrbaC9EpXR8scjmymascE6t9HoNc2ng7",
  "key13": "64B7MXV9qhmemPmsnuw95nbCkW9fkDDdKGcBPATh2XNyCPaarRiZcQZtdFCbnnTLxunZtvAVhRh83nHgHNqMdyUD",
  "key14": "3u7kp8ZoZZXtJPinXYzotqqiGQEHgB98TmmJxMhnGXQC77cFRd47Jgd2RwwMnNkEfuDEcrvEdx5CUuR6FkZkZwcx",
  "key15": "43QjzkrftgPKS8UH8aCRPcV7jCmEyPH2DAGnPkHsrfAFuXYVzxfqjPEh6eBnC2wFvTmmw9x2u2kCQTGH1w8T5mPB",
  "key16": "43Y2PvMgz9MZSmmzuCRo1sFZ9VhYTuh2x1ZL1Jdcrcdyu3F9yh9iB7t4BcHACwBJSkcxRP3uk7GURt114MNLjid3",
  "key17": "74UuGj76gjkbt5fdtsA953X8Eh3TKhxWC4XWfHZ5HeghFNgfnWaMfEywXGk4xtjARYAResNTPLUvSokcuVxrsDh",
  "key18": "2ogUJ1gF8u1YEDU3fAKUMJ3V79D5ZeL7YFQeAqRXBd69Hm4iJWUq2fkZDKGksnnf7VSkttaDYTZ7igDmdzaNA8Q5",
  "key19": "3h18vk38EJ2pGQprjMHbpoX6BQH9xavj4QtxUensMeqoDdvJeEf1rTvqrtu3qWRWKu9ExMoqZWDCLjtQyR1NT1a6",
  "key20": "3T7bxcAcihAat6D6TdBiqy45YKdJwVgPAgzpPm7GZcwpAooeNYwEGdP9H9ghCUMR1YHVwJxpJSdv4jTvYaXJGzaV",
  "key21": "XYQmVqphyqkWDsipzNBbQURwH4u9v1sKSis1oLbZrypk3JKkBWt7iJxDh19HgvFbeY9gtLxuUVKEDWqJ5PtXMcX",
  "key22": "5M9s3XkoNTwfEYchDcgrH5qn4bYGnzgCpTntEwd1rtcZtgLM7mGmeYtbxRfwKGmzZXBNvdWzekzjjsSM8jhEwRUB",
  "key23": "45cScuXHiTgqWqNrJpWjcnTwsejVBw2FAHGopvadb7HoCweNpScmCMmvXC5izuHD6NfHGXweYm3uk5ur2mjwy8Nk",
  "key24": "Ewuzui5mgf7FhCp1rkugcCtYCxr9foJNoFDnvfwkDTvMjGrJUaogpnLT2TdBD2eSxHUuuhAuvtomwsMp1t7DjAK",
  "key25": "6ThumChqUVpy8AtrwtwiYzJ6cQ4wZXZb5qoeF9tXPWgMLe5H91h8wxvTiPcYPoVfrFpJTKVEEupw2SqF8web1CK",
  "key26": "57fnFrsfxduu245s33dzwyCLg59ttPAioKckfabbeHa1Vz1qccSGRQuadgwZT8CFRdsdrpXMCCgmf9WuqcYjCUPX",
  "key27": "2HYEEzPJn9d5MPGpeaHj6RfP9s19stXH1bh8nQ2T2Gc9cYsqpeifkHW4uypSwucHf4nnDz5gQg48Gje1nQSokCon",
  "key28": "3PPALgiccfURp2177VxKtbneY4KmWEZg9xcaawu48xQA6uAouZyET3tZzTNv4hWNi8ut75h3sJWQ5YPCWKHSMQ29",
  "key29": "5RGbVqbrh9Ct8FS1LjmmjnXxR7AMKwxQoTrBqXBDXaHHsZRxExPnP3ApfyLcwQzKR5uEhiUZLXj5u2ckN1cZYfDT",
  "key30": "k9f3grQGUjzJGtWPS24m53hWCgesDgRxtYYHWb174hajxWXWMFxHNbpJ5VFbgLABnQMWUJQURKQtrysf4MxaA8L",
  "key31": "2fMxwGrHpT6JUykuoy8hUAARESEgbebu27RmSym8dTAGDuFsFvLvH9JFizAodji5tTNWaCCiAqC9jQa8BpY5yMxK",
  "key32": "bnpCcK4Se6Qf3kSSJeP27qe5SguJbJpcAyJdBf6fSVoZd9jUqpu5HChic8qtJWRKr2qcsqoE3HmoM4AL1ihREVj",
  "key33": "4Vb4vp5MmoggGnRfFAC15pTNhUpxhsSskBEbE94XbGos5MmfvoN8avEozBVMEW29bLGgqF3FgBwx93bAy1pKgwgX"
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
