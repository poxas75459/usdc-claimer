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
    "3HHrzNHoqpDYiWVq238RRZVK8wAXLFN9p6ZegjWipsuTRs2C9LW6mfk6an2KbeXKcHeysb6nA9hf3PppybhXExv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jkC1ZkX4d83BLQShpaz12tdmnqUJXLwU8zqnikdu8xXQnCF6qPKTVpBvLG8Mu1pXoWzjbmNrXrzrbp4djydkEHk",
  "key1": "3GLP9JEiHfpRNjsppGh3eaQBit4nmqKHnWf1SWcSsicfD6FZWsqfT7Kptggi17wu6giiqTehxXTEMM3HS2C7KSFB",
  "key2": "54h9n6ZMQuhARPFaR8iGVxmpyifnf4wKdznWY5UrSy5FdqD7AjqFgn9aEk7xsrRZ2nMUYjFzYronikP5tTTqeSzv",
  "key3": "omExpUzmLzfWJbUgRDoYvnuw5mDEiEUjnGr2szVGfQ7JzmrjZZMmBdGrqCLh3ABr4HPvvf5vKnCx4j7wqRF4T9Q",
  "key4": "ttNqYyopiPx2o3qFuSBGmwy7BtkUSKPKDWPA9MJfvCsGxyELm51f2m1ipbfZauhcbMHHCA4LUwUhuBqouvMVzLh",
  "key5": "5Scmem58hfZXWm9CM5zrWKCDPbDq4ykXiBDUdtLJGRjrsBsQmw4vMCUVkAAhoFSyZM3wkMbM5kmKrTutzZASipM4",
  "key6": "3bZmL1KFYFsE8SQBPyRabQ78HFhtE1deA1gZ3kqeQhHxH4dQ3z3ZfVrXitCPxkVcVjZeVDs7yfsW8vrAde65QVMV",
  "key7": "3gu69HMmQTriTETH4m734q3GoxzcLGezZLifKg8GHxNVdTx3iGiNfw1Dy9s2FnswZxt88w5XGdJMEhVqSpC9TJTM",
  "key8": "3CRUFuhKVqCZDvEH39Qp8WV8pe3zoUft1MMoWeTHvFNxVMCRcwn8QQmED4KJCgJMtX44CXyMcuWdDounE36WY2Ef",
  "key9": "5sgJ5sCMBCJXyEbaw6nuHXiaYrzKLUhVZC5jL9L8wmQaAxFVjVqevMRARJinqkAjDDdWB92HQHTidzcFoVDBrJsU",
  "key10": "52cA2UTotTu6FgSXYD5CzjkMzWcR9tyQ5pARR2ngaqvfw36KpqiFiUmBseB3Z19eLFJTkhLVraL2nWyi5NHYjpCX",
  "key11": "2VXPwmw4hRzKKvsXB1Tm1QmPt7Y7WZSMbC2NjzXQ5xh9Y3zkJDNXYDkBFmUdTLykAGPFnnGX3cH42fsqNkDiBTRS",
  "key12": "4zHora4bfq9VDH2786LzKT49ywjggyBLu5mSPwrzoHhrpvmAZrakycj3nP7yRnfyY1qSUYYzJfiyT4svmmfkvMdP",
  "key13": "51JbCzvAkHrobJLeLUDXfLd39JnLTEHRcbiErKrViwEtxytR6eBdmfrh9Q4PeP6oyjmyMJ5WstKtFYMWBzTxNUmN",
  "key14": "3UZy9773dbtYm9eynNBuUH16fWvSL2FCpbZTXENKQprQnc2G5pxcURV63ib111Es3cmPNrh7b2ZJa4fLMKmJfuPZ",
  "key15": "2GMMqhR6cjjhdrVdBBDmPsPVXGmRLh1tPB5fLnfzYMy2ycX9Q5a8NqF8XzeaZKRdnRxYikC2NuxNTqY7KiprnJKt",
  "key16": "4sfE1dfiudun2tpFPRumdKvSDdXevQUtczmekgbdbJpvh7hrjBuFkYjVommUqkqWziVjG7nd1mgzS6y6HLxmr6U3",
  "key17": "53FNqBBq1HpGKkuc3pGSDauVjXoJwCngLWDof8idn96HXH9SEWB76MiQcrQTDSLAACksd24Y9QwXchkyA8RDCaYi",
  "key18": "5HkMnpdUx78D7MX76qs97EfZkvoEtC27Na7t1CWf2mEd3zA6rUVKXveY9VZVauQAED22YYdn4uyGYLGHHehzeYPJ",
  "key19": "5Jh5ZSaXekYmtKJif53gbx26YA1ULU8BLfTuKiL17EZHtBb3A73GCCvqvhu4yg7JFFz1ycHpcYMFQzLffkpyQxkw",
  "key20": "2arWwCg8YBNH5d8wUptrA5CkUqJ5PrPz9wz8S82JfYHgwADG2oYYWJqiNzkBEd4ytSNZH6tab2uZBYKfYnCqg3gH",
  "key21": "5VJkeuPvb7TSyNquXyUvSUDaaYDZ2bai22wVfX8Grr4SwygWwX6rcqdwJeozg8VLB3T16B4rD8y8jP9qpaR8xsKT",
  "key22": "4YH6gUi7oVAkD7H58CfKZFBC4uJ2SrrpQyZmG5AAbuSboR41ZzKXpbPssipQu8HrgTNcTKwov7CkJtrycLhtkS5t",
  "key23": "a9rhkDMuu9ubEdwCzSa54hy2irKC3DS7A1wr83KtT6hRgrDz5UeQceqbvHi4i6reCmWJXVfDG8DozvCCQm9PCaA",
  "key24": "3dehYwbF3ftW13hGaR8JGFPD6553ZihSDo974CH8nJNgTF3uw1goBC55FyS4T6nFgNNpn4TSdWp1nPWanUDr68Js",
  "key25": "4WeAVb13RT6dzAXbg5C55bhXC1beioWxcJmKveF1o4jAhQZtkR2N7U2wBY7zQsxFjbmqBcPZducXMbkY5RhsfZWN"
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
