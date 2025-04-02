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
    "59EZ5DSZkZmwzAxdQqvaxG18HASegCiEiHmVnrp1wGzHG7zZ1y66ae8MQ1wncQomMwXj9Nq5zEqkxvn8EmBz5JDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25KtBmHxSUX9iEKCo5DvkEnZwpxjKweAL7wUKAG9yMYiczh2pZkkVTouWHi62uY8CaXc1jDYq95nVojXBsTWmRxE",
  "key1": "59BvRxEKqD1xVVxjU4y5LpwitBvxdkf9UX25jicoPuRGyvpLkfnGLoAxqBNmgUGKUm3wgErQAneotRGUsKfJVGYN",
  "key2": "4LWprdsVdMKsEDBmMU3VC1tFfKVpViNaTed87CuPTHxy1E4W84U4EwGbZst3Z82MVsJgc4Px3LkJyFA72BKaw1Fd",
  "key3": "5RwF35WSnpqw92JXMgjfe6vGz27nBNADRL4wJ3PwNycHibqvtLwku38x9a12ecS8Ge6oMvQj4H4k7JQCzw7TCJcn",
  "key4": "2Zg6cNEftuGvfECVK3Nkrd8FXFv9MmSntKLBwBPHLUWhqhHjNTxpWMA2NMGve4C2TVH2fb4Hj3fde9Z9HFCFc6Lk",
  "key5": "g65aWD1J5wCRYRrqoXeemSnu55fTZy8fcTmpw7VzWc4r5FKtNfeYZyGBF9cQx8LGSjt5VmxhSgraVPN284JRFSh",
  "key6": "cp34zXtx9edsTpf7ZRWH1ZgkymSa2aRcL6mhnHPA6yEgMimoRX6hQddHEhz75eArzmUKbFzEbc1Xc54A2XZJkYv",
  "key7": "5AdAYC3qgqdiuQjPvBjzyAZLdYwpR8rW6vbCsdHJnWP29BKKkVqzFvSAnMWAyrQtY4x5K4d4ZboeKk212EX1NC4h",
  "key8": "3NbhJmQ9tcCmPVAhJmx319b1tsviaXKYF293z24cgfamHxpaUQTHL3QBDeVS9Yj2BniB2xNSEsM5mxvYihQDTQc9",
  "key9": "5M9Ps5JUfq7cEJCLHjDx7n2eFyVxTRGUnXuaZR6NNB3S6z5hjcyeVcZTXncWs3U4n5haT5VB88btqoP3u7UevVxh",
  "key10": "2KWhN9Eu2V2Pymfjy7jb7gpTCyR8AZJ6i298T1ZHzoe1tZnQeCoWC6YjXqT9rFw4vjBA4ZKAr2v7MJu5V4wMJF4d",
  "key11": "4YpSv895qa4umn7qmzmhMLtE7qSEsANLMckPX7syp2qdV3uwpoqnYqTsRiRgLYnxm1SaRec4Z3diT4oDA7egmegg",
  "key12": "DbL8U5gAXvKqwesTUCMZQAfHRoYcU5ovZMjeqVKep3Norzgswu9k3H59dpEF3r9K9KkwoR7nNKevLVK8c9JxUhv",
  "key13": "34U5nCZ1McsnGC1yGczSJtYSNGFeo7G95ranxfLVuvMncW4eQqrWYprAfiz3Qyp3ZvEziQaMDoJ9Q8WRMtdiD9M2",
  "key14": "5Ys6qk3trnnjtGWD1FkgQKhZE14HhCd5N2G5ejFyDUE415WbLoxj16Lh7stDBmjYtVZxPRsZTBYCC7dAgAzctoN9",
  "key15": "46UREn7YbLZEVPoXgFntS5Nw1AAptxj4X9iPk5rMxMf8F7bVP5w6HgSGxzjmXuMhFSCQxWzFUtQ1zoMQpxyYwuD3",
  "key16": "5JyDMoVWnxYnbnJZbG5MGzcFetGNeMKW1BsDKrkZfnRAUg7EiQZCXefJHfpoSvJuronkMuARWnd9h93AcFmPZCn5",
  "key17": "3k43SE6Li8UyBkrQ8u5UNZ5MWuZ2FgBMa1HLt6pQ6mwUSRVJA9ZQvKmw3gjEfxKRE336mAs1rBLyYEJg9BgZNiDy",
  "key18": "5axUwtFaBF4gW46BCSC9uHB1ebhsD5iU7Q5ceQkwHJfo31eZkAzPHnNAYGT9jmue5UiG7Vt4X49ngFe21szLGVqc",
  "key19": "3nVKVw4jtoNPwwNHMQePYkJQQiYosrBLnBwRrPRCcDMGATXYQNUsXAz3NYoagb87zjswd5nD5i86VHdKFrDxrJno",
  "key20": "5zxdfycurb4Pq6kqy6Gs683AL6kN2rvijeL3kGqRJ4t4WYzLaF5X9MLuTxEwHXxkUV12aNBs6wZ6ieSHFkPAU1SC",
  "key21": "3L8DruS5Ua5PbxX3xuXNbYhQmYZ9A2rhhi3hxsQr9ycdPWrMw6kQMDNJZ3LtmkHReqTYdFz6FFZe8bkTrZ5YrcWb",
  "key22": "5cdqSmKtHQdKXh2JmfFGnALxHKMFv4ngULkbFR1LYGp9XyCZPpj5vLhazM5RPNCMZswPkcPpp4h4wZntDzXRyun7",
  "key23": "35yKYDpy2afQTLJKGctpUqRF8KBJ3pdJnxKCjUJunMfSok1v5Cz5wtJLgF6rUHFeS8Rz2m3qkwSqA4owDCs3E3hi",
  "key24": "2tv22vp9MzRoYGN1trDCNtHyJqHqvXP1oboYP8xftZTwttEB2BpQSdugqMVWcTBLJaPtGQiikze992nGPfn1VKWP",
  "key25": "5r3aCfj4GWpy2sGXdatM4UHbs5xajM3u5sKtcNFVjpQpnVtFycqbxEGJQjRK6tTmTQZBEsn3DXXXJs9Zf8x1p8D5",
  "key26": "gGVxGgb5nzqexT1xK2ANN1T357MPH1nt3CJnbdvy7DdZnjECKn7r97XVo8Q2xRADWcQD3bNn8y8vtSUbUPMGJtk",
  "key27": "2o9jYDMu3Ktv7BdtKv13domxogZvDmr3BPytiiZA85pbfDZQ9DJjkEnQzKe7UisSDQWNY8q4Rnw5HPhR73vwuUcN",
  "key28": "3wpkJqTwh7ZjAPBtS2kqDQjumEyTVNwedyakrpTYQ3A72s5DekiXFPPEkfut4CuYud3Hdp6p6QoxUFCZc5MhwAh6",
  "key29": "46LHEdJzAwP7M1wg1uqkcUWQgM9PPQs3bofxTx9jgfvc11RmBJ3GwbU8VE8aaVQFBayBBGhcF4Lbc41KajZFnoqt",
  "key30": "1NKV7MD6KtQFLdMZmqMuzQQjMUScmJuuWFFoHh51oxd1sDJE9xywGJfYvdmXLvGYdpEjpJQCfPQqbgmrQWYj3TH"
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
