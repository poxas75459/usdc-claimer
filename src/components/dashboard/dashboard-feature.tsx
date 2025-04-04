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
    "5nWDBhYbdoJ6MwrXogpKnLkFQUgCBNnQPg7ewbjLH7JJfzzQi7ENEFXQziV55WnXNRr9QEuDdvZw8c4yZDfG1NW8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RWs3QfJiHzEyA2U7L71DiLjxA5LyXevsUaG1UBBsBmYhxKZFV9PNVfByxmxsbN5z3W92NjtmVa8WHot6Rr2bHZP",
  "key1": "3VWAGxG4kcoHr4g6aRTyuLVWu8QV55ktzbgLSwakvhYQtMkb35RhtC8rwCR2AR1Psks6CU2vUmtSQvXhfmDZspeA",
  "key2": "4uXM8pbUTBL9s8Pn6Sfr1iUffS5GYMTRXkLgHZUmfk5z4XBVjXFsESBYVv5U3jQVTS4P7rtWvNYQE6huPvU1i2rY",
  "key3": "Mi7MrdHYAX4vEUFm6PgCWx8g2pGp73GjfCkfDp3PLKReG2ooaB3h89cDuBLBtvYFfyQpZdZvzGkTbc5BY1nF5J1",
  "key4": "2MAL4BhsTngntaM4477bNdRnS1aaRLUGfcjyPocsidWTCzHXsXg7qpYMsprB7QmVSYXXCYmHANWtgjYbMbQfhCbg",
  "key5": "4L2WUbddaCDcBHu3E7gWME8pwEGuJZpg7pnYAst2fVuF8K6CB41Ec6DUGddzYfxQcCvXkD8h5jbpkesDzg5W27mm",
  "key6": "yfsqk851k1PMCSgzUJC7orYRxsoX8CB3YXiKdoumRJExy5Cijp7x1bKJa2Fqodi2j8hqsUCxATMRKJSoPAuGg54",
  "key7": "5rDAU1YhcY1jTy244HrV8MQCoGuFbgGrev1EnCn1Lkh8vJu91ckemT19nwXA5ZeyiQExBmVZYGHLB19XiGWeopHL",
  "key8": "GsAtj2XUWRLEqNLWf7Thatqu4AW6zTaK5vtBMygE5B93L9GyKgt6oCNm6DdUd8J56M3tSMCCDP1Xboxc8STcLvj",
  "key9": "5BHdFbdEeWXWkCTLxZsEWGFZpAat9BNectxC9Xc1sypxKN9acQtUYsjzT8ohzj745cfsFewDMoTrTQ5APyKZMiQF",
  "key10": "2bwCLZmJxbKeAQj8ctma8j133MLMbZA1rmbu9NJkhqhTzfNi7938MyiXsPcLx17i531qkLm18bAJhtDyUHtBiFiH",
  "key11": "22f969Ea17EMKPgGYM6smq4PKJti2jtsG8neQFL4wRy66we6iEuoxpTpMbeWCJsqogLVaTqEZbTLAsrWdi5N2gYw",
  "key12": "2zpyUAyaT8HYP1Q6Tw5tkbRxf1c7FwwNMZDKQz5p1dNj54KhArwSazjhoofP2Rc2YGF9Zee7VZJDw1MjwLygZKZH",
  "key13": "5ye4tTq5KA1dnRV6ctYB5mMu3diFzCNKu8ofGTNgecy9wtLAi3sBbfaSrVbs6v4zMiUukTG6UZSR5jzmBuoAhpVo",
  "key14": "rQumu2wUcBvcY79YTaaw4q5SEQakNEqi49qKH3dNjd2LMMgFsWYfPTAJpMxb5qfQj6Avb1nLTy7fN4DkE757Uko",
  "key15": "4feiMnye53VwmW2yTPnrvxDRUpfJzec6UnifxKuNyUNc3iNVcLHjXG4PXgui6f5ubJapjz1wUBbx6dNdtQYRfZ1J",
  "key16": "3BvDdVNuZUCrfNSzy2ricywtGRt2wM3UwsArKSkst3Ty2mnxPyUeyZ2VsnhnYXUfi2UB9wnfW2P9PvWFN9U5mc9g",
  "key17": "4GCC1F3erRiy4gWLUVTT5Q4PQysKB3USqcQNYRe3ZxP7wnWdP5B1m3ZUTt7T75jJC3tbmQ6xAYz1DEvzfCvKWnMm",
  "key18": "jrJaLyPBgUHTN495AztF59Uqj4CGX1DQNdLCNWfXpK2DEQbYezm5RpdTcHeJ13vea3xVKBDuBFz65SYyS1d6hso",
  "key19": "5cQoBuXSmPmcQrKmHUZXL3uoKEg3P2SkaABA7wKEmpZ491bbzemuJTdBFtqM5KwEHdNytyz9upAzxpmyHUMz2sfR",
  "key20": "45rFr4VBfCrHCg4SrMCC8vgyKU3J2YcyT1DfNBBoV3J7ybrcGgZz1MVszF29MfBVh7sixDYqvJX4yn2nmWspJskc",
  "key21": "5bAFa2oXxyV8pmi2MXi6TMZYWD5VGUjjAmU3pa3AauV5ikKjztgfA21e2UxhPcw1ePj4mDQDYDG5UWQfRKUZE25q",
  "key22": "2cLNDn6SvY7XpYivN3yMK6YrW7Ybd5Ub7saMhwoWCaBKeywo6bXiFZ5Ak6LSgnsgCi3GndLvXqcCSQs73R95f5q7",
  "key23": "4fCcD2zTY167acDwX3VCCZjxJbC3xWPhVMgoGapLUw5Bn3gCNz6Q2cTH7rqSgwr4fBMPrLRsaCLBfVQFjeTm55dF",
  "key24": "3y5yrpyK52k3myMkaP4GD9pZtps94VhFbsjpuJkJXgVYyWwzCcZumH1XL235HzRWx24TG6r9Sn9AADBNo7kAsRLe",
  "key25": "4YiMqQqYS7QPNNphXrRvmcdwTEWFR91i1F5U5YYJwqDfDUpyGXVmK8M64AFL8rBF86Z9yBiSTuLa3C64bd3NTCMX",
  "key26": "DpciTMoHWhWuVDtGCervrfpWPgZT85GUWLNFcUQdBxTmDFSAFMHRLTNEcwpKjYxR8o7xjPf8pfuABq3KEbFRn5F",
  "key27": "3rAn6BYzJjdcGhfGvrjGHWeWecdSzkqmGEta8qqEP28pq86n7QhoqdejivViRHnGpTLdL6EX1BpExSBBNACNG2r2",
  "key28": "TUYnQZDZbC96dq7WRp6FVa24dvzVck6ZLB9tZpUgCwEXUYQbY5T5GN2R86MBtf7o5tYDxTR189Hux4jAsLirup1",
  "key29": "2XfAcijnkqDnfrZkbcP7W6NjAi8PaPMKr9MQJsYcqiHsPbvnUUKMttMSSHJqU7wVZ78Uhq2mffdQRT2cogGwA24L",
  "key30": "nLCkHPQ35Nmkibrh7KaZpA9mwvJUBszpHDAorJRG2k6bmqEsHEVvKjpy4K2x1MrTPKjS6YZPU99JJEnxmd9z4Kw"
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
