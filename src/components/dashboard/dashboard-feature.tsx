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
    "5PE7ryZ5vYTY3vwX33TxbXoyKAHMsWNYdabdeamVi9MNQT5qv4x5ovhD7dGeK3VJCADxkanNX91LpqKgEakFPEBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H2UXNU6W3y1MYXkiMETMYPQ6rkGbTPV4AbQ8byuURtNQ973eFeC7VeYqpzpAgkrrhdeMawuqvzwKzuzVXrGHzqX",
  "key1": "4girHrFp7PvngGu9aGZRo4pHgx6yAKtLpB4fcSJic8doixh6VipgEGX4LVyEjtg385sPE4ArJnjMmivUkSGGn7Jx",
  "key2": "4jbWPujaKg9pmJg4kjHSFwtfRddwMWRC3L3Fv6zgHDVYdosXyw6dwcMhJVKmjneDGiQkuFhNWeuihAU7umNwAjRK",
  "key3": "4agHevB3kvBsX5Px4VzevRxKCdW5dvpEgnypJUcgvc51oRx7BBVfGCdNPb9SVBboPam1qZkEm6CqKaXWpmyFPHMB",
  "key4": "s8NqAEvuC91RcQc3BMD3piegP9zhnWtxBfige3NX4eDWheUigocjeRbFK3BR4HisEwssFELjpAATdkLQG4f7Anb",
  "key5": "5nueHFXVdvDafM6TCnE4C4WKc5ANBd6eNt88aZRp98Z9drbfqEPt3Rjn74P1fQv7c1zfVUHpGq1ZCqqtKYynHN6A",
  "key6": "2tUoCQQNfBrDAnDdYHxd4f5Z3KQmurV2aeqpXAMHsztnAJLBSX5ex88MWVnRjz4YyLzRuSvghGgCrZnMdQBZuYRh",
  "key7": "52gCU7cbtu1wPpXa34ezDC6LEzTk3zD8J9KNfnARXZN4TDEKU4KL7SDAhEgPpFs19knrRE8RVKMYfysRTpSzeMDp",
  "key8": "634ntgfwFw8EeHnbMp9dPPmJgd5abtqzVSp3oS8oGHbnqXZSbYvBQUxCChsWiH63d9rFWrzmbuJhzt3SYFdqDFr6",
  "key9": "322wdEbbLEYSyakXN56F7gPGrM7bhqyHw49eAUd8CSU9EXyKrpDdMLzgFc7HDCNaXQ2h5i1M2dtiEstGYNpTyUZg",
  "key10": "3oha3HPVsbjaHrHQGgKzS6X4h9tw8LpPQLNjENzBbqU5KQUAaRJga2voNsnxRMJgAoZn1wM88dWqSUaUXShJqQpp",
  "key11": "2mTfJs2toC4dj6u6o5uwAhpa1WSojypKrQ8fppcLW9e9aCDv9b9nbKqXtcS7c14MvKQG1AtkETTfnSjXfthtfGGf",
  "key12": "5mcCSKFX1pbC2fNRa6JSoZoQ8ojKtvzygrmJn1XEt67u9mhfPeYDJrc3WAskwJtU71PTf8ZtbETcjGZivUv7EKgx",
  "key13": "3iQtoFbM89qF75gmptC8d3H3G3DMokKoC5sLhUuGgTrydhU9ofn72eRGTBb9AMHt4vTy6cRFqbPRjsSeXg1NHE5G",
  "key14": "GLHWcpqm57P2CB1Zaf6rcVj9BxTdnh9Dg51p4TxVogfxWYj25sfYVVkCBxv36jLxvXcdfwERTXKuudMbRG9XHQc",
  "key15": "5XcnQZb8qQZajzK74erZL7SZRjvkGSXtfrTafhe12avsdRQi9xjYs8mz9yuBFc4q8N2t1vcAdkR2PiPqdjRQZp8S",
  "key16": "32DGMhgRwLBq3HeFk45XwF9rTfFRaXgwBGwsncXVisFjmTCMMxPE7UpYJkFHTMYti9oQ5FVHJpgGjyuSVyLLoWJi",
  "key17": "3e3WitjK5VJm4dyp5k5Lw3TqFZKgH85cAhP4uz7DPv6yawvR4vMhRue8UkKaCuTxiKCnNtyQZNCUYx2BGd7L1wvW",
  "key18": "X9Zgq7Nnvi7oqBWEyGuiNG1W7N7frCbfMXf54sp9aZsGXffRrx28Sw9cQNbgasaccrTj9zjyYDJFjiPAB4LFLcE",
  "key19": "52xQSWrRHoerZ21TgxvdbB4bb3HsbDgNATUuV1qH8Dkv4CcsstTkiN7fvpV14kc8DXdmiHk6tpwG2wRt35Dj4pB1",
  "key20": "33PReYGsszeCAF75Eha3RKnBtVD8NhJqyJF4MeA5wWEKKjEHwbcnNr9Kei7nP5jgX2mPciCTZxwbwRQ8mskWGqx7",
  "key21": "4hykpRn8NK1ruutbNARKH87bAfqptARXoFvZ9eV4vS4F2mmDCjVRUjheaQSsXagHqJmwjA7y3Jbp5qVTiau2Ljtw",
  "key22": "BMCMZ22fd5vtSG942kXZVR3NNhCGEd9eFDFwSMZWQ1B372wNm2dCSkFg5x6Tjhd4pgUEa2F3Q2i9wPda9FJAq6M",
  "key23": "zj1Lv2s4na2QcQLZmz5wxuKxadfnbjvfRZpbSe7xWi3cThJAPuAVkDgx6WfXZejWqksqqra9TvDpc1fFr2g9WuQ",
  "key24": "28VdVLZ5if4s1FpgjuWH1D4rhggy4X9AZtwUyPbv7k1A26p3pza3E2H3Hj6YZzTPwtEHeDXMs5q8PYNuSgwWZAG8",
  "key25": "2BZKB7AfqSRLmKnyTX7trC8CJzUWKrjEyWjN35uGGheDEM4kjKQgZqx7sNNEo7NttpxpSRzsq17uo4j2fhbUptKN",
  "key26": "5AN3VKbamZLmnVyuqRwtD7rQvMc5VQM2a4SAAJt3xNfmc7Kga2DxmppVAtXA3qJvVBYr7iwiw3bfoFZko7NtdLzN",
  "key27": "8DQqYgNNLfFdzYcd8EsuUkZQigxni9vjjQTH8BEWk2zCUR7ML42R8sXssjuCj3Kz3h1LBFn1fNELPDSxXnRGmum",
  "key28": "5cVSwvBipwHE7Scj2XC4CASXACXomGsAXxK6DPSRHkfY2dC7UnCw7bor6dw8f8Jv6UTw8D8i7pHGUqzmZ6usiEN6",
  "key29": "62d36NuqPz3oCET6DGDnZr3pPhRzJQHhYUYZ92NnzvieCxKifuK1EUtKPp2FLvdNAE8xs8h3yaaxyqyjnSazrr1T",
  "key30": "5Fd21nXX1gm6eqjjU4BZJZi95L49fYfbhfV3En5ZzEHVf2y7bC9j3fpighF4qqxvm27ezzKGQ8TPisShNtGe9DDs",
  "key31": "215Q7vc29LFpNoEvM1x2iG7D6L2bQ913nJEED5a3FPnrbjQ6eLRBbiLNhRr6d3DTgscUhXn3wwVF2JBXeRfUbd8C",
  "key32": "5KdKYvGzK7hXGLwV3jLFdsYchwLf6iCtoHU8ub5YcWEMUSVjw2QYiptGjhLDcMutRsHn2A11QUg2pzhQi2EjuP8N",
  "key33": "2zPV3mt2TnKi5J7hNZK5mCFfyqWSodRQxXfGVUWQKrfZCUAFiQJtqQ1qDm99sH3H39vJ3toSzxXorSo59gqK8Ehf",
  "key34": "nPyAV5tnuiNZ6MuAjA4VZqtdPwg6ewzeGsnVVCXxZGkAnQUj5WuTaZvkcQySCu6dHm4BR84QQDsMtpxDuwxGpqS",
  "key35": "2K6XiehDVPw9ryNeUSkHwHR2KKALv3KweGuP1e7Ar3PaC7JD9bez93b2dMdkVYJvFE72XNQ9UpFhSPfvCukJDjUC"
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
