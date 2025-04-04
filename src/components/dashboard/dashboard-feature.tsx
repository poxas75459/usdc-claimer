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
    "2oczfKrDbvX1BtXtJUYVhyPo2t6LeSCdhkwuV2Fyoiru5FeiKi42d7L3YcnCBwbvtzyfmRsCJ8852bNZQkMn47r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hFnMjd16eFAnmysJj7iBeXrN1tLvBLfUrRs5YNsoh22uUqmzZN9eqNrb2TyfXfdU8y1Xo1u3HaboKGqnPByFWf2",
  "key1": "4aYMqa9oMB7Lt1Fi2hgGCyeiE6MeXWGEy7QrCDLTxS63Gmb2dwDCBaxbkATqUHgPzz1oUpafTfvNuJc5NZXvLj5r",
  "key2": "2X6afS9hYkeVPnswXcoXtBAqDTMJGkDoZqKd1M4Hs52i3FMx7s7D3jZqkCXyUYRk9JceenM1bGYLJWLktHxChx7k",
  "key3": "3skUAr64cNZpu9eeGUQpU1qpjtVwB6vEN736L2oJ3uHyE4DAT5L9VsmS5LkuTV7BBZJWJtkBKKkVCdFi1WSPNx45",
  "key4": "2mFSiuirUgmcHRzasZbLqJsFNsTkZCBg1rdBHp3MQrjgxQeJe4bbKgPNrkDgqzHPRc5j5ChJ8iQg8dFYUqTt4fe6",
  "key5": "2nWbFSy59UeG5ogynr2c2zUdt27GbmAYXtWiQSiJs3oZzHTmZjXit7D94LvWDvYdp7EWqPafwHCb4FxKnyXesfvm",
  "key6": "3aPh2DJ77Vhv6ZF8qDXfadc9Vivka4G6Hqurk3TVutrKdnkGpMvqtt1PDVT9srpMKD13zDoX9uPLHVCsQw3wypZ9",
  "key7": "5qGM8rchLk4BNA9rjep5E4fb5P7FHBaJWaYkygHttLP1KT3rPckbXP8W35ZEGjVHcFHtLD4qZa9pA7H2RuVLHiNf",
  "key8": "ebHe4PRG6HiNy3QEvMwGjFjbM5Keg88CQAsM6EWsUrXbUGuvZifDZSKfMuYbrmXwvS7E8bHBvd9jDkku2a2i7Gx",
  "key9": "37DQdJdESh8KHR1V4w1C9KHgRAvHYSrCbawPsk3tJN3PvzFAKJknPooW9ZBntEuUKqEDEtN2Q5NRTkTwsriccfm4",
  "key10": "2YJ4CUjuuuL8Ra9MvnepRArDxCeUrTwSfJpKh5So6HFSPh3jc27nu8upAtjXRybmLptYqGAuuoAYW6aqAavrbEmK",
  "key11": "24tYwyTpdA79nk3ZsmBVTWFw3kG6NJTyqnxkWM6ax1R9yaLQwn8xEJtvJ6nyf1TyKB6aSn8Ua7zzXpMNrX4LZrss",
  "key12": "4tMBugJdq2ZgKZ8bGPnesEnAon8R69KNdDRVb6qjZbAxThnT3jWYbx2iPu6UiHAs51w3Lzwa8FPvUJMNRytTGHMw",
  "key13": "5Lh9Sxbg1XorqK4yFTkHqSQun6m4MiogSzYVkuNqdgNMAaUDXqTWDBHSeFEJgjQzRqfHkbPg2QrHVeBvMzbf7twz",
  "key14": "4rRtbAq2gfJ1L9vSbNF1X9qnVeEFCMaFrjD6HSf4rscjguUhjHbbRDXKqxRn5kr7agkGMRfE31m2tgXkae7jYtt3",
  "key15": "5mrC36qLMcmh2hSo12pr4Mu63uVhxyf3SmyHmgcQSjXgsnuqQaZUFJJrXsjTUUxcBiZWxQFf4YqsKmve3JaHPeWp",
  "key16": "227AapMvmsV9rGv6nZBN4s3KsuwGFLpGigpnm3oG6iud1RFDvf32kjJ1EvAitQ3jK1J6nKTkVqt7dgsTje94UEFN",
  "key17": "5v9FQbLm6XEYqcmS6CC2WEUVfTnxBwzPdeG9wce2dp7gEa63UB2bw48o6GakP31vJk7vS4imQtEqyzwK4GT1ECTW",
  "key18": "5643TUKYF21XMKRQ5unAVJ8b1jdK611XTrupapvmZwKZbwcr8HYF1ZKKXj5MQDeFxt9nqeaG8EKiWbptNfah1oFf",
  "key19": "27bwiwDWHirGNA2vEvwJn1UPF6ZFhWZpCoT2JtCbRoyyHpSfRagrDoFwc7MiLwYtpdLSw2rxmzGs6vwpBzo9epPT",
  "key20": "2jSrrZgdomKw2ykxh5PufZRKZt9rjumZ3q5N6n8rQVj8NUVyYJp69uy9B1ZsMGehWoSPb133Ljfe6XRrnSLmXeif",
  "key21": "58tQoAUNtKUSn93CuTsUNY4WNHnHQMx3rhKL4beq2dWZWSs2o57pK6VAwL83GaaQGeH1b6dSD3kbTxPDc3EvfLWc",
  "key22": "MJXtFY4D5a7sdybVUNxinh3KAZjDNTVpnFehR9Wcys5CuY6yL2BBpJc6VuLa2bt6KhNqUYF4cTFdfho5cSEYpfR",
  "key23": "3En1sz4E7qmT2YhS3XVKBLdCMLS5LciPLYrKGeEjqvRgReJUSteirYf4ADKRZ8Y2G5HJAzNacjypUxAfjLUNpokd",
  "key24": "4sDvZjMj2NhJW7ihkF6a5appcwnnMDyXdrbWzVxz61diE3Joqj2RVoDX8x1DyXG81kEjQswvXxVdrm2DcApN6t6i"
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
