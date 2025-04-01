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
    "55rPvnmA8nhhPvEBb8ntedJGgAERsLsxdMh1dDnmAiH9an8QfSQtQWyS48YMY77sDMZmv8rZafojib2HQphyM3xN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GBkvqXuvmWrXjn7EGmgXYPBMKpgXnP3DJH9tM7sWDxzFrUgH4dbJcnjhFCJE9Hvo9gYNzsw8nXhc1RSzHuEA6zg",
  "key1": "3stm3bXomf9huTZTUSuJgAYfQhbfAzGJSV1nPabE9kdgVdPtN92d6BCkUDrTkY13UT97wk1iFYtfkWUsdtaF7HQQ",
  "key2": "38wjqDgD1yyWduCpbxq25pSKqadmvocRcq3PFLz5x1rhBHdArKyV4FsuMvsaL7rUda41quviQPMPjL9wEJVYMnje",
  "key3": "3TgVzYyMEU741RxPczhTR6PFsfCd9CmHKdDcgELP7xknP1VRAYPQJMtcERtms19fSzba6TgvaRvo7JC8iZ1aRbfT",
  "key4": "5FpyCLqpFEFGmDXqquidphh2yzBX7VddX8XZbTFJQGRjCt2Ei4BPUvwt66z3zsgSRwfyq9NWwUTKmeBT3QZkkc8K",
  "key5": "4AaAUjXtm6gPE3ejRhLduVA9n1upbgReyEQgdYJStZhF51Y3nHW4LKtHrFikNCaKg8GJruZG7XroLVoD8LRVBy7W",
  "key6": "4HHiWUzNxsrBF5m6uuMdE4mkWqwH349xuNM4Lyrv3yqy8tCepNKJipfabTQvxhgXi2F9nWZBuihjyxHPRWRL2jfA",
  "key7": "5vSWT8Pz2zsNp3nq1CNksVTNV9Ee17yvhu4wtk23uVX7Hn9CCdauyyK6bVzt4TtdCWSbGh9icRBumdq6ThA6t2Gb",
  "key8": "2ckgA5XTKKhiv6Y8Z5VazDAw6Eo3bnzkN2MCDGh8GPxnrbsZgftmepYWfk4b5dgzbYyruBiHxZBXHMmxMkvWwp4u",
  "key9": "31Kn5v5trPuvGwKMU8aqBaZqboTG8vF9iM94EVt3dZwNfHsMhnGdZTV44BPC9psiJf7nsZD1HwjLyRneXa2MSeje",
  "key10": "KE2uYG3vd9bN9f9k6gJMSbikvPNHUMQeRK9Cb83U7jg5PXEZrLgaUNzpEEat81HugZbfnvHNBbKd7nAqa3dC6qX",
  "key11": "iuxzAmSg7VJUFmcLEfsb25q5UXTrEikcWK1Lsvo6DZAJppeJ9FojnsL4m1QEayn2Mszyf1ddfSH4NhMeda4bJa7",
  "key12": "55dh7tzKLDMJZBYmSExQcbCsETgZF78nDt2Fi1peqX3AgKRQKQ3SzKJ6VTNC1Fh6cZ4hqbGDZdUH4diXLRfQs4bP",
  "key13": "2QbwfeyGFRqn9mRXzcUwdBFLRF91xUdxvLVciEApDMUiNJG1nn3m79ufJfhQwsoE65nhbcWzEGCgm8R7oN6bpTE9",
  "key14": "34rP1sDBz486ikh76qaXpckE2A2vNXy1wUSkJYKsirrnwCQoEmNgdEvjg9dfFEkF4Ha2AQKo59qbAakyZJ3WiXXu",
  "key15": "26NQRahECSbdK1BoJ52Ju7KhQy6fHv5i2rcYBGEeufHy8xKrJW9axZM3ikzj3BuQAbZuoyA8gy7qYdU991qMH8a3",
  "key16": "4JGTEhRmLWUebntnkhuf9cj9HyZooahPU1Dx3ZXDhiovZSctRJfE2KPNTsaALZ67S4NjNdSTEphG8cNpTVh2izxy",
  "key17": "ahhL1iUw9Rcwf5dr95JLRvUPgsBSC3QF8Tt34hv9UPAodNTuMafu5yV6dRMa2rsDRbniT1xQ1VvX1Y7jsphrFYp",
  "key18": "67FWceRmtfQ18DfaDDJ3s13utDo2gJzfEtswX2PQuZGRgTMFvrpCdihxGFA9xAE82E41fWrk9quMxmzcnvo5NXkA",
  "key19": "5gq781ADeMbkeFXsNqHhKEXcJPQncNjxoSCN3LEYEHWc8GDwsbPa8Y14LXVwfL4AXsPrmmnjq3MsVtvESmstHGEd",
  "key20": "2nyPdhFk8PkRWPWxx38kp3fPWvKJ1tWSmfQBH6nVEEe48xfy74XZg2zStsna4Vysd75bPQcUyN6RRtGTtMWbHF33",
  "key21": "52XZL3hM5ajNDqUkaC75tdvBzaFUgjuXQDeb2GtDQYvagoYffeiVFiGe82pCWqVbYL3mwZvFzTMYwmqeSS6nUnjD",
  "key22": "2AuXg8k31ghJt53QK7ZgvBK1APgTW9VHaCLVNN2kr3jPKKUsWyrCXTLvqpeok85Vb8kT4Q8yszsxiLDpgyrJT1Q4",
  "key23": "3zoV61wJNgXfP3MU8LNzCpJTkFTNEcM7DWPUdaNFVM6wpmZCbzT3imQhXrY2sCdopyFsco1jv2AMnTiG2NpWLgZ7",
  "key24": "4yEXM83GzDwmhF8qyPxrnF2QVQxcJwr7v2uen3wEuDg9zp9kr8M3irPBnnFFPbWFT3R1vzLxwc9vmTzXLr7d96tc",
  "key25": "5npeAhTSCmpoRJyJhSwm8NoRrLqZCxNThGukTVSBKXvrcznECqCi9mV4Eqr3iySJLgtV95WUrVKQ246tevbxHf4w",
  "key26": "3BHvkzAW8y29wi59q6eMA8UXoLpJewexxEdW1ZswLsA44nb6KpGsBZvggZxSHvQUAvBRXHydbLVGKznQ84GfVS2H",
  "key27": "3jErYgK8uz81izPMt6cPwkx9M9metdbJWLzVTswqZ1tRhqFkk7NDxWVhyq3fh9BpEzm5EXLNhA1CP1jGMTSt3kLf",
  "key28": "4gwLWdjoastpibwJKfA5eFd8rQRSqGk1BVFUjEzuwfgypF5qUhZSu4UKeZh4VESqh8v1DLtnaoc3zWP3RDSJQN5C",
  "key29": "2B86vPdut5afuFPsXgfsQsE7dNmUW3j5EGWzNLhskodLyiUUsWZkqtNJWnxCwLRh8WjxU7vsv9Npsy7SoaKRBmFH",
  "key30": "5A57mFV8kyQSG66bJQnLm5DDXtxcu6LF9aLQEFrG8g59FWeayvmWi2K7dpW1aY7jMGBRa29ywnQp25LJJqVs1qPV",
  "key31": "3LE5dqynVdBe86iaEDW2SLaSd4dvmF8zjyoEzqNFm9MiGGr9CjFeaBDr3BXHLybF7xj9TZYhzbRj74umMyn8sum5",
  "key32": "5ZMgv1AtdTCngtCSvJ3URRZL1KyugJoEcwhatPPqA9vBqBAiKxyoDRGe5HvCdKTr2CwEz39tz7bPnCqbAq9tXUq9",
  "key33": "4ycMPGMonVXhuiQA1ou1d3dHZJuN4YdbW3WYXxZghMir6kqVPYBhFL9V4nmx7NWVK3Fwgz2sEBdocQHQ4MkQcUmm"
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
