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
    "4Q4gDrbSXRjjQgvVwgnfpYwAhYh1uxW1Sy1r8ysJSjaD9BTgowfjdr7mieUMq6rxJSJDG2sECJ7zpgatcMAc1iJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UT2tfzfjCRBUTmoy4rKETiY9nNaUp5UaDVSHgBgrGChUfTmJhpMNUCV5CzsRFZFiYej52syR7fmV414Jzro4fm4",
  "key1": "4r8M9WChzhmR9XDszsFY4ow6UmE53ET7KN8Wn2Bpg6R5QwYPX1378FwBBDJJFJWUFVubCaKinQGLdKaYjq4pqqjG",
  "key2": "3ZbUyGPPRHKhokcb8aYDcSYwfkaoadifMBxGMwLhtZxrWbaa6MmP2ehv77S13ksP9YncvcSRKysWAr23oe7Sk4rV",
  "key3": "2BVLGgMDoWaYwtzNNyrUxPLknashZwXP4w8goBM2dV11vDffBX8JnmLmCQ4NcfBVd9YLtmFF7oxvpYxRuxEXUKNo",
  "key4": "398L1GTdtyhAxxcMaeNpZPH6Lugrch4CdddkgeFGMaLufwx9KiejUGnL69y7GbuBArvuXvxUrqVgLntzGEWFKvNa",
  "key5": "2ZNYGfA6w13yB9eyand39ydbSFP6icMBFAtiFcWqd23Uk7RB3c4PXkaSU1GKiMhwS8ffmJafat5djTfjYoG6zoSH",
  "key6": "4qPvYcn7jUkw3HqV3BTPkLSLnzGvaZLFdiULiGr3EEkzJBfYzLYWUVamKk22UgobxtWRWFp6ovFfDhuTEV494M5q",
  "key7": "2Eq7kZhbLmyyF4ZDHJeTjs4xF8nrMTUP8DJdzvueQ1RqUNoNp69mD7awKTgBS5wYopNBnNBmjnUkuetX6YJGQqEt",
  "key8": "2FRCpLG5GExNz5ZPNEh5Yxf1CZNeMXgSgpDZXXeU35ZsxkyDfMx2MygC4WzqbD59vsNEPpgywPwchayvx8P4vnXU",
  "key9": "3YHbzPoSVQvaNSriWcTYL3tH7rCpAz4iMmLrVKq2W6nuLinTELUkWSa3jF9Ru3SbS4x3XVJ91T7CmZA2AAJctqPE",
  "key10": "xiRcJszQPqb8do783cn3ZEKoudEh8qEuVd4TfKRgTsYEa3ymPoVxvArT82UFaE89x9u6ZJKHuWxPP1YHYhAYaSv",
  "key11": "45ZNW77YaD7XMVEykUErC7uvhzntHjNhLHSM5R6HvrkCipt7L68kf3bH4Mt4hKLzFFEjia6qezYye4vXBdath77B",
  "key12": "5GADn5WZhscjHx8Zt24yXHRMCtW8KF518XCfhPdceDtyAKEbZTKXmEesVBvGkBcTkMTzWbaGSGs1Wau1ZooLMwdX",
  "key13": "4yJghSmKL4is2GTMDz19bYqvqqPqSmMpf5Qt7GKwPnVwnyA5XBcyEJR1moeA2bHC1KZ4nKNkFBZPKQfgmLjC2EY2",
  "key14": "SnZp4r2VSN39CucP4E493vZ11bEJsnCCqThMdpXhHFLKt3Mox1bmT5rszguuhRLaBjPDJRXGXcV2ym7xUvXc8dK",
  "key15": "xF1Lwac9vTcgEAgZkutyYwwkmAtT395JtmMNkoktEtkaUvYBB53yAg5Uuq3P1YfS9sBKCY1qMxcTqhgxc3VqorQ",
  "key16": "2sCs7wPnV2jfp3EYRdYs9rQfhvYWc71Q3ZEzrKBUQKH7dn9K3VeeQRQ9UQN9xHt63gdWD4wTTPktg1CFuhDuNuai",
  "key17": "5Boa4BcQS9GNg2ZnXsGxZFjo3Q4dkCqEbAayRboRHxBDJBccZT8kL2jMMPtMUjXdkQBLkZB4rvqcsAkhvipxU8EG",
  "key18": "2qhxhcEaHQJtNAg9Wo29LY8RNwsaRMCq5To5EazkdtYz8cx8yrsaT9XckS6R5V4SeonvX4GiXbZn2a5jYmiUwCQz",
  "key19": "5swgCqTTqT39S2jN4Ex2W8UH4D2W37bKeap8AEKoA9a9PuH5aFZW4AxmRScAmAv6F4JbxhYqgVrAEhddUNXLQXqR",
  "key20": "2ShJbRL5SH1P1yFbBkbC6Jfpd2KQBvBPjribYETEYaDTPNAao7RYpt9mKyWYhBXqwDvg5u19vMUbk1KXZsgtkMTs",
  "key21": "3VjtygwWHhXTi7UxJcfQWovPyZWrbVzT5f3eDZuSKRvkcZRKtK3GiEUypn2ghnVKZGwV8d4L7BWYDpiyDRXyhPaA",
  "key22": "4qKttYy1wjBDFuVmRNCqqUU43r31rbSD8PvpbKyiQK1vpunWKEfaJ7iuRWdo6dDAPTUVB3xzEEgMdR2vYeGwg4Xx",
  "key23": "4j5kwDP5rs3fCa1b2zkVZ5SxGFD6hZS57WH8pHgKaVQhHQf2PEdewNfEDsGApBqj72WfeMBqpDpMF7mNa9i3hmAF",
  "key24": "5BvEm6FhtyWtLYrSUegiqrpdsgRoDUGtLVoiZor3ocTQDRxdwtTfcFir9yK1bvePfm5bTNXpc7NavyJpFmDZTJhB",
  "key25": "2HJjJC9HbdWxcLgEH4VmhrgmweG1uSTuJv95wKeUihb5JwJJi5GUTLXrBeMiQz45ZhSfuG5V2HdnAZnJydJSoybu",
  "key26": "2NxhTU5NKKD1WHP866Zqh6nLfgHZRsTKQLBqtHy3fkvafSobvYy2e7svP2v97kTg2eqDtRtYGfiE4yZss7bPhv8t",
  "key27": "5obQR1a5Xc5ttYQAy9rvBXkowXvusSCTr7xP3yz349jv4gCPFjmAjKnkV2KpNY3zDacxx1itzY1fg5iqsBgpGFdu"
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
